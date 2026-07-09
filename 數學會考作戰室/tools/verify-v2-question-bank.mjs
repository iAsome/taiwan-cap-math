import assert from "node:assert/strict";
import { loadV2Context } from "./v2-load.mjs";

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

for (const uid of ["u01", "u02", "u03"]) {
  const quiz = w.MATH_ENGINE_V2.generateUnitQuiz(uid, 12345);
  assert.equal(quiz.length, 15, `${uid} unit quiz length`);
  const ids = new Set(quiz.map(q => q.questionId));
  assert.equal(ids.size, 15, `${uid} quiz duplicate questionId`);
  quiz.forEach(q => {
    assert.equal(q.choices.length, 4);
    assert.ok(q.choices[q.answerIndex]);
  });
}

console.log("verify-v2-question-bank: OK", { total: banks.length });
