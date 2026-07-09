import assert from "node:assert/strict";
import { loadV2Context } from "./v2-load.mjs";
import {
  countZh,
  hasBannedStep,
  conceptQuality,
  explanationQuality
} from "./v2-quality.mjs";

const w = loadV2Context();
const banks = [
  ...w.MATH_QUESTION_BANK_V2_U01,
  ...w.MATH_QUESTION_BANK_V2_U02,
  ...w.MATH_QUESTION_BANK_V2_U03
];
assert.equal(banks.length, 180, "U01-U03 need 180 questions");

const unitIds = new Set(w.MATH_UNITS_V2.map(u => u.unitId));
const skills = new Set();
for (const u of w.MATH_SYLLABUS_V2.units) {
  for (const t of u.topics) for (const s of t.skills) skills.add(`${u.unitId}/${s.skillId}`);
}

const errors = w.MATH_QUESTION_SCHEMA_V2.validateBank(banks, { unitIds, skills });
assert.equal(errors.length, 0, JSON.stringify(errors.slice(0, 5), null, 2));

const engineErrors = w.MATH_ENGINE_V2.validateBank();
assert.equal(engineErrors.length, 0, JSON.stringify(engineErrors.slice(0, 5), null, 2));

const byUnit = { u01: [], u02: [], u03: [] };
const bySkill = new Map();
for (const q of banks) {
  byUnit[q.unitId].push(q);
  const key = `${q.unitId}/${q.skillId}`;
  if (!bySkill.has(key)) bySkill.set(key, []);
  bySkill.get(key).push(q);

  assert.ok(countZh(q.explanation) >= 30, `${q.questionId} explanation too short`);
  assert.ok(!hasBannedStep(q.steps), `${q.questionId} banned step phrase`);
  assert.ok(q.steps.length >= 3, `${q.questionId} needs 3 steps`);
  const cq = conceptQuality(q.concept, q.explanation);
  assert.ok(!cq, `${q.questionId} concept: ${cq}`);
  const eq = explanationQuality(q.explanation, q.concept);
  assert.ok(!eq, `${q.questionId} explanation: ${eq}`);
  assert.ok(!/正確答案[：:]\s*[A-D]/i.test(q.explanation), `${q.questionId} exposes answer letter`);
}

for (const [key, qs] of bySkill) {
  const mistakes = new Set(qs.map(q => q.commonMistake));
  assert.ok(mistakes.size >= 3, `${key} commonMistake too uniform (${mistakes.size})`);
  const texts = qs.map(q => q.text.slice(0, 20));
  assert.equal(new Set(texts).size, 4, `${key} question texts too similar`);
  const indices = new Set(qs.map(q => q.answerIndex));
  assert.ok(indices.size >= 2, `${key} answerIndex need >= 2 distinct`);
}

for (const uid of ["u01", "u02", "u03"]) {
  const qs = byUnit[uid];
  const dist = [0, 0, 0, 0];
  qs.forEach(q => dist[q.answerIndex]++);
  const max = Math.max(...dist);
  assert.ok(max / qs.length <= 0.45, `${uid} answerIndex skew: ${dist.join(",")}`);
  assert.ok(dist.filter(c => c > 0).length >= 2, `${uid} answerIndex need variety`);

  const quiz = w.MATH_ENGINE_V2.generateUnitQuiz(uid, 12345);
  assert.equal(quiz.length, 15, `${uid} unit quiz length`);
  const ids = new Set(quiz.map(q => q.questionId));
  assert.equal(ids.size, 15, `${uid} quiz duplicate questionId`);
}

console.log("verify-v2-question-bank: OK", { total: banks.length });
