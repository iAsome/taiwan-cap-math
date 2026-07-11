import assert from "node:assert/strict";
import { U01_COVERAGE_QUESTIONS } from "./v2-u01-coverage-source.mjs";

const EXPECTED_ORDER = [
  "u01-s001-v005", "u01-s001-v006",
  "u01-s002-v005", "u01-s002-v006",
  "u01-s003-v005", "u01-s003-v006",
  "u01-s004-v005", "u01-s004-v006",
  "u01-s005-v005", "u01-s005-v006",
  "u01-s006-v005", "u01-s006-v006",
  "u01-s007-v005", "u01-s007-v006",
  "u01-s008-v005", "u01-s008-v006",
  "u01-s009-v005", "u01-s009-v006",
  "u01-s010-v005", "u01-s010-v006",
  "u01-s011-v005", "u01-s011-v006",
  "u01-s012-v005", "u01-s012-v006",
  "u01-s013-v005", "u01-s013-v006",
  "u01-s014-v005", "u01-s014-v006",
  "u01-s015-v005",
];

const REQUIRED_FIELDS = [
  "questionId", "unitId", "numericUnitId", "topicId", "skillId", "difficulty",
  "type", "visualMode", "sourceScope", "text", "choices", "answerIndex",
  "explanation", "steps", "commonMistake", "concept", "tags", "estimatedTimeSec",
];

const zh = value => [...String(value).matchAll(/[\u3400-\u9fff]/g)].map(x => x[0]).join("");
const stable = value => JSON.stringify(value);

export function validateU01CoverageQuestions(questions, expected = U01_COVERAGE_QUESTIONS) {
  assert.equal(questions.length, 29, "coverage count");
  assert.equal(stable(questions.map(q => q.questionId)), stable(EXPECTED_ORDER), "coverage order");
  assert.equal(new Set(questions.map(q => q.questionId)).size, 29, "duplicate IDs");
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i], ref = expected[i];
    assert.equal(q.questionId, ref.questionId);
    assert.equal(q.skillId, ref.skillId, `${q.questionId} skillId`);
    assert.equal(q.topicId, ref.topicId, `${q.questionId} topicId`);
    assert.equal(q.difficulty, ref.difficulty, `${q.questionId} difficulty`);
    assert.equal(q.answerIndex, ref.answerIndex, `${q.questionId} answerIndex`);
    for (const field of REQUIRED_FIELDS) assert(field in q, `${q.questionId} missing ${field}`);
    assert.equal(q.type, "mc", `${q.questionId} type`);
    assert.equal(q.choices.length, 4, `${q.questionId} choices`);
    assert.equal(new Set(q.choices).size, 4, `${q.questionId} duplicate choices`);
    assert(q.answerIndex >= 0 && q.answerIndex <= 3, `${q.questionId} answerIndex range`);
    assert(q.steps.length >= 3, `${q.questionId} steps`);
    assert(zh(q.explanation).length >= 45, `${q.questionId} explanation`);
    assert(zh(q.commonMistake).length >= 12, `${q.questionId} commonMistake`);
    assert.equal(JSON.stringify(q).includes("幂"), false, `${q.questionId} simplified Chinese`);
  }
}

export function buildU01CoverageQuestions() {
  const copy = structuredClone(U01_COVERAGE_QUESTIONS);
  validateU01CoverageQuestions(copy);
  validateU01CoverageQuestions(U01_COVERAGE_QUESTIONS);
  return copy;
}
