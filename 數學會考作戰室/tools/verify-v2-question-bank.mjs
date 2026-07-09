import assert from "node:assert/strict";
import { loadV2Context, loadedBankUnits } from "./v2-load.mjs";
import {
  countZh,
  hasBannedStep,
  hasBannedText,
  conceptQuality,
  explanationQuality,
  explanationHasConcreteContent,
  BANNED_MISTAKE_PHRASES,
  U04_EXPLANATION_PREFIX_RE,
  U04_EXPLANATION_PREFIX_COLON_RE,
  hasU04BannedText,
  hasU05BannedText,
  u05ExplanationTooVague,
  u05HasSlopeContent,
  U05_IMAGE_PHRASES,
  stepsEmbedQuestionText,
  explanationOverRepeatsText
} from "./v2-quality.mjs";

const w = loadV2Context();
const bankUnits = loadedBankUnits();
const expectedUnits = ["u01", "u02", "u03", "u04", "u05", "u06", "u07"];
assert.deepEqual(bankUnits.sort(), expectedUnits.sort(), `expected ${expectedUnits.join("-")} banks`);

const banks = bankUnits.flatMap(uid => w[`MATH_QUESTION_BANK_V2_${uid.toUpperCase()}`]);
assert.equal(banks.length, 780, "U01-U07 total 780 questions");

const unitIds = new Set(w.MATH_UNITS_V2.map(u => u.unitId));
const skills = new Set();
for (const u of w.MATH_SYLLABUS_V2.units) {
  for (const t of u.topics) for (const s of t.skills) skills.add(`${u.unitId}/${s.skillId}`);
}

const errors = w.MATH_QUESTION_SCHEMA_V2.validateBank(banks, { unitIds, skills });
assert.equal(errors.length, 0, JSON.stringify(errors.slice(0, 5), null, 2));

const engineErrors = w.MATH_ENGINE_V2.validateBank();
assert.equal(engineErrors.length, 0, JSON.stringify(engineErrors.slice(0, 5), null, 2));

function validateFullBankQuestion(q) {
  assert.ok(countZh(q.explanation) >= 40, `${q.questionId} explanation too short (${countZh(q.explanation)})`);
  assert.ok(!U04_EXPLANATION_PREFIX_RE.test(q.explanation.trim()), `${q.questionId} numeric explanation prefix`);
  assert.ok(!U04_EXPLANATION_PREFIX_COLON_RE.test(q.explanation.trim()), `${q.questionId} numeric prefix colon explanation`);
  const ban = hasU04BannedText(q.explanation) || hasU04BannedText(q.steps) || hasU04BannedText(q.commonMistake);
  assert.ok(!ban, `${q.questionId} banned: ${ban}`);
  const embed = stepsEmbedQuestionText(q.steps, q.text);
  assert.ok(!embed, `${q.questionId} steps embed question text: ${embed}`);
  const over = explanationOverRepeatsText(q.explanation, q.text);
  assert.ok(!over, `${q.questionId} explanation repeats text: ${over}`);
}

function validateU05Question(q) {
  validateFullBankQuestion(q);
  assert.ok(countZh(q.explanation) >= 45, `${q.questionId} u05 explanation too short (${countZh(q.explanation)})`);
  assert.ok(countZh(q.commonMistake) >= 12, `${q.questionId} u05 commonMistake too short (${countZh(q.commonMistake)})`);
  const u05Ban = hasU05BannedText(q.explanation) || hasU05BannedText(q.steps) || hasU05BannedText(q.commonMistake) || hasU05BannedText(q.text);
  assert.ok(!u05Ban, `${q.questionId} u05 banned: ${u05Ban}`);
  const vague = u05ExplanationTooVague(q.explanation);
  assert.ok(!vague, `${q.questionId} u05 vague explanation: ${vague}`);
  if (!q.deferredToUnit) {
    const slopeHit =
      u05HasSlopeContent(q.text) ||
      u05HasSlopeContent(q.explanation) ||
      u05HasSlopeContent(q.steps) ||
      u05HasSlopeContent(q.commonMistake) ||
      u05HasSlopeContent(q.choices);
    assert.ok(!slopeHit, `${q.questionId} u05 slope content (defer to u15)`);
  }
  for (const p of U05_IMAGE_PHRASES) {
    assert.ok(!q.text.includes(p) && !q.explanation.includes(p), `${q.questionId} image phrase ${p}`);
  }
  if (/截距/.test(q.text)) {
    const mentionsPoint = /截距點|\([0-9-]+,\s*0\)|\(\s*0,\s*[0-9-]+\)/.test(q.text + q.explanation);
    const mentionsValue = /截距為|截距是|截距\s*[0-9-]+|y\s*截距|x\s*截距/.test(q.text + q.explanation);
    if (/截距點/.test(q.text)) assert.ok(mentionsPoint, `${q.questionId} intercept point not clear`);
    if (/截距是多少|截距為何|截距值/.test(q.text)) assert.ok(mentionsValue || mentionsPoint, `${q.questionId} intercept value not clear`);
  }
  if (/象限/.test(q.text) && /\(0/.test(q.text)) {
    assert.ok(/軸|不屬於任何象限|不在象限|坐標軸/.test(q.explanation), `${q.questionId} axis quadrant trap`);
  }
}

function validateQuestion(q) {
  if (q.unitId === "u06" || q.unitId === "u07") {
    assert.ok(q.steps.length >= 3, `${q.questionId} needs 3 steps`);
    assert.ok(countZh(q.explanation) >= 40, `${q.questionId} explanation too short`);
    return;
  }
  const minEx = ["u04", "u05"].includes(q.unitId) ? 40 : 30;
  assert.ok(countZh(q.explanation) >= minEx, `${q.questionId} explanation too short`);
  assert.ok(!hasBannedStep(q.steps), `${q.questionId} banned step: ${hasBannedStep(q.steps)}`);
  assert.ok(!hasBannedText(q.explanation), `${q.questionId} banned explanation: ${hasBannedText(q.explanation)}`);
  assert.ok(!hasBannedText(q.steps), `${q.questionId} banned steps text: ${hasBannedText(q.steps)}`);
  assert.ok(q.steps.length >= 3, `${q.questionId} needs 3 steps`);
  const cq = conceptQuality(q.concept, q.explanation);
  assert.ok(!cq, `${q.questionId} concept: ${cq}`);
  const eq = explanationQuality(q.explanation, q.concept);
  assert.ok(!eq, `${q.questionId} explanation: ${eq}`);
  assert.ok(explanationHasConcreteContent(q.explanation, q.choices), `${q.questionId} explanation not concrete`);
  for (const m of BANNED_MISTAKE_PHRASES) {
    assert.ok(!q.commonMistake.includes(m), `${q.questionId} generic commonMistake`);
  }
  if (q.unitId === "u04") validateFullBankQuestion(q);
  if (q.unitId === "u05") validateU05Question(q);
}

function textStructureKey(text) {
  return text.replace(/[\d+\-−=().,，、\s]/g, "").slice(0, 12);
}

function validatePilotSkill(key, qs) {
  assert.equal(qs.length, 4, `${key} need 4 questions`);
  const mistakes = new Set(qs.map(q => q.commonMistake));
  assert.ok(mistakes.size >= 3, `${key} commonMistake too uniform (${mistakes.size})`);
  assert.equal(new Set(qs.map(q => q.text.slice(0, 20))).size, 4, `${key} question texts too similar`);
  assert.equal(new Set(qs.map(q => q.answerIndex)).size, 4, `${key} answerIndex need 0-3 each once`);
  assert.equal(new Set(qs.map(q => q.steps.join("|"))).size, 4, `${key} steps duplicated`);
  assert.equal(new Set(qs.map(q => q.explanation.slice(0, 12))).size, 4, `${key} explanation openings duplicated`);
}

function validatePackSkill(key, qs) {
  assert.equal(qs.length, 12, `${key} need 12 questions`);
  const dist = [0, 0, 0, 0];
  qs.forEach(q => dist[q.answerIndex]++);
  assert.deepEqual(dist, [3, 3, 3, 3], `${key} answerIndex need 3 each: ${dist.join(",")}`);
  assert.ok(qs.filter(q => q.difficulty === "literacy").length >= 1, `${key} needs >=1 literacy`);
}

function validateFullSkill(key, qs) {
  assert.equal(qs.length, 12, `${key} need 12 questions`);
  const dist = [0, 0, 0, 0];
  qs.forEach(q => dist[q.answerIndex]++);
  assert.deepEqual(dist, [3, 3, 3, 3], `${key} answerIndex need 3 each: ${dist.join(",")}`);
  const literacy = qs.filter(q => q.difficulty === "literacy").length;
  assert.ok(literacy >= 1, `${key} needs >=1 literacy`);
  const mistakes = new Set(qs.map(q => q.commonMistake));
  assert.ok(mistakes.size >= 6, `${key} commonMistake too uniform (${mistakes.size})`);
  const structures = new Set(qs.map(q => textStructureKey(q.text)));
  assert.ok(structures.size >= 8, `${key} text structures too similar (${structures.size})`);
  assert.equal(new Set(qs.map(q => q.text.slice(0, 24))).size, 12, `${key} question texts too similar`);
  assert.equal(new Set(qs.map(q => q.steps.join("|"))).size, 12, `${key} steps duplicated`);
  assert.equal(new Set(qs.map(q => q.explanation.slice(0, 12))).size, 12, `${key} explanation openings duplicated`);
}

const byUnit = Object.fromEntries(expectedUnits.map(uid => [uid, []]));
const bySkill = new Map();
for (const q of banks) {
  byUnit[q.unitId].push(q);
  const key = `${q.unitId}/${q.skillId}`;
  if (!bySkill.has(key)) bySkill.set(key, []);
  bySkill.get(key).push(q);
  validateQuestion(q);
}

for (const [key, qs] of bySkill) {
  if (key.startsWith("u07/")) validatePackSkill(key, qs);
  else if (key.startsWith("u04/") || key.startsWith("u05/") || key.startsWith("u06/")) validateFullSkill(key, qs);
  else validatePilotSkill(key, qs);
}

for (const uid of ["u01", "u02", "u03"]) {
  assert.equal(byUnit[uid].length, 60, `${uid} need 60 questions`);
  const dist = [0, 0, 0, 0];
  byUnit[uid].forEach(q => dist[q.answerIndex]++);
  assert.ok(Math.max(...dist) / 60 <= 0.45, `${uid} answerIndex skew`);
  const quiz = w.MATH_ENGINE_V2.generateUnitQuiz(uid, 12345);
  assert.equal(quiz.length, 15, `${uid} unit quiz length`);
}

assert.equal(byUnit.u04.length, 168, "u04 need 168 questions");
{
  const dist = [0, 0, 0, 0];
  byUnit.u04.forEach(q => dist[q.answerIndex]++);
  assert.deepEqual(dist, [42, 42, 42, 42], `u04 answerIndex distribution: ${dist.join(",")}`);
  const literacy = byUnit.u04.filter(q => q.difficulty === "literacy").length;
  assert.ok(literacy >= 14, `u04 literacy count ${literacy}`);
  assert.equal(w.MATH_ENGINE_V2.generateUnitQuiz("u04", 999).length, 14, "u04 unit quiz length");
}

assert.equal(byUnit.u05.length, 144, "u05 need 144 questions");
{
  const dist = [0, 0, 0, 0];
  byUnit.u05.forEach(q => dist[q.answerIndex]++);
  assert.deepEqual(dist, [36, 36, 36, 36], `u05 answerIndex distribution: ${dist.join(",")}`);
  const literacy = byUnit.u05.filter(q => q.difficulty === "literacy").length;
  assert.ok(literacy >= 12, `u05 literacy count ${literacy}`);
  assert.equal(w.MATH_ENGINE_V2.generateUnitQuiz("u05", 777).length, 12, "u05 unit quiz length");
}

for (const uid of ["u06", "u07"]) {
  assert.equal(byUnit[uid].length, 144, `${uid} need 144 questions`);
  const dist = [0, 0, 0, 0];
  byUnit[uid].forEach(q => dist[q.answerIndex]++);
  assert.deepEqual(dist, [36, 36, 36, 36], `${uid} answerIndex distribution: ${dist.join(",")}`);
  const literacy = byUnit[uid].filter(q => q.difficulty === "literacy").length;
  assert.ok(literacy >= 12, `${uid} literacy count ${literacy}`);
  assert.equal(w.MATH_ENGINE_V2.generateUnitQuiz(uid, 777).length, 12, `${uid} unit quiz length`);
}

console.log("verify-v2-question-bank: OK", { total: banks.length, units: bankUnits });
