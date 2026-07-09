import assert from "node:assert/strict";
import { loadV2Context, loadedBankUnits } from "./v2-load.mjs";
import {
  countZh,
  hasBannedStep,
  hasBannedText,
  conceptQuality,
  explanationQuality,
  explanationHasConcreteContent,
  BANNED_MISTAKE_PHRASES
} from "./v2-quality.mjs";

const w = loadV2Context();
const bankUnits = loadedBankUnits();
assert.deepEqual(bankUnits.sort(), ["u01", "u02", "u03", "u04"].sort(), "expected u01-u04 banks");

const banks = bankUnits.flatMap(uid => w[`MATH_QUESTION_BANK_V2_${uid.toUpperCase()}`]);
assert.equal(banks.length, 348, "U01-U04 total 348 questions");

const unitIds = new Set(w.MATH_UNITS_V2.map(u => u.unitId));
const skills = new Set();
for (const u of w.MATH_SYLLABUS_V2.units) {
  for (const t of u.topics) for (const s of t.skills) skills.add(`${u.unitId}/${s.skillId}`);
}

const errors = w.MATH_QUESTION_SCHEMA_V2.validateBank(banks, { unitIds, skills });
assert.equal(errors.length, 0, JSON.stringify(errors.slice(0, 5), null, 2));

const engineErrors = w.MATH_ENGINE_V2.validateBank();
assert.equal(engineErrors.length, 0, JSON.stringify(engineErrors.slice(0, 5), null, 2));

function validateQuestion(q) {
  assert.ok(countZh(q.explanation) >= 30, `${q.questionId} explanation too short`);
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

function validateFullSkill(key, qs) {
  assert.equal(qs.length, 12, `${key} need 12 questions`);
  const dist = [0, 0, 0, 0];
  qs.forEach(q => dist[q.answerIndex]++);
  assert.deepEqual(dist, [3, 3, 3, 3], `${key} answerIndex need 3 each: ${dist.join(",")}`);
  const literacy = qs.filter(q => q.difficulty === "literacy").length;
  assert.ok(literacy >= 1, `${key} needs >=1 literacy`);
  const mistakes = new Set(qs.map(q => q.commonMistake));
  assert.ok(mistakes.size >= 8, `${key} commonMistake too uniform (${mistakes.size})`);
  assert.equal(new Set(qs.map(q => q.text.slice(0, 24))).size, 12, `${key} question texts too similar`);
  assert.equal(new Set(qs.map(q => q.steps.join("|"))).size, 12, `${key} steps duplicated`);
  assert.equal(new Set(qs.map(q => q.explanation.slice(0, 12))).size, 12, `${key} explanation openings duplicated`);
}

const byUnit = { u01: [], u02: [], u03: [], u04: [] };
const bySkill = new Map();
for (const q of banks) {
  byUnit[q.unitId].push(q);
  const key = `${q.unitId}/${q.skillId}`;
  if (!bySkill.has(key)) bySkill.set(key, []);
  bySkill.get(key).push(q);
  validateQuestion(q);
}

for (const [key, qs] of bySkill) {
  if (key.startsWith("u04/")) validateFullSkill(key, qs);
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
  const quiz = w.MATH_ENGINE_V2.generateUnitQuiz("u04", 999);
  assert.equal(quiz.length, 14, "u04 unit quiz length");
}

console.log("verify-v2-question-bank: OK", { total: banks.length, units: bankUnits });
