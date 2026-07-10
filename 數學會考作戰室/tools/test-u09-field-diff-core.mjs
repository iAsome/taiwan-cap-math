#!/usr/bin/env node
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  assertAllowedQuestionFieldDiffsForBanks,
  assertByteIdentical
} from "./u09-field-diff-core.mjs";

const LABEL = "self-test";
const CORE_SOURCE = readFileSync(
  path.join(path.dirname(fileURLToPath(import.meta.url)), "u09-field-diff-core.mjs"),
  "utf8"
);

function q(overrides = {}) {
  return {
    questionId: "u09-s001-v001",
    unitId: "u09",
    numericUnitId: 9,
    topicId: "u09-data",
    skillId: "data-table-reading",
    difficulty: "basic",
    type: "mc",
    visualMode: "text-only",
    sourceScope: "CAP_108_JUNIOR_MATH",
    title: "讀表",
    text: "題幹",
    choices: ["A", "B", "C", "D"],
    answerIndex: 0,
    explanation: "解析",
    steps: ["步驟1", "步驟2", "步驟3"],
    commonMistake: "常見錯誤說明",
    concept: "概念",
    tags: ["統計"],
    estimatedTimeSec: 45,
    ...overrides
  };
}

function auth(before, after, overrides = {}) {
  return assertAllowedQuestionFieldDiffsForBanks({
    label: LABEL,
    before,
    after,
    allowedFieldsByQuestionId: {},
    expectedChangedRecords: 0,
    expectedChangedFields: 0,
    ...overrides
  });
}

function authThrows(before, after, overrides = {}) {
  assert.throws(() => auth(before, after, overrides));
}

const baseBank = [q(), q({ questionId: "u09-s001-v002", text: "題幹2" })];

// 1-4: metadata fields
authThrows(baseBank, [q({ title: "新標題" }), baseBank[1]]);
authThrows(baseBank, [q({ topicId: "u09-other" }), baseBank[1]]);
authThrows(baseBank, [q({ sourceScope: "OTHER" }), baseBank[1]]);
authThrows(baseBank, [q({ numericUnitId: 10 }), baseBank[1]]);

// 5: unknown future field
authThrows(baseBank, [q({ futureField: "x" }), baseBank[1]]);

// 6: deleted field (concept removed in after)
{
  const beforeQ = q();
  const afterQ = q();
  delete afterQ.concept;
  authThrows([beforeQ, baseBank[1]], [afterQ, baseBank[1]]);
}

// 7-8: array fields
authThrows(baseBank, [q({ choices: ["A", "B", "C", "E"] }), baseBank[1]]);
authThrows(baseBank, [q({ steps: ["步驟1", "步驟2", "步驟X"] }), baseBank[1]]);

// 9: changed questionId
authThrows(
  [q(), q({ questionId: "u09-s001-v002" })],
  [q({ questionId: "u09-s001-v999" }), q({ questionId: "u09-s001-v002" })]
);

// 10: reordered questions
authThrows(baseBank, [baseBank[1], baseBank[0]]);

// 11: duplicate questionId
authThrows([q(), q({ text: "other" })]);

// 12: added question
authThrows(baseBank, [...baseBank, q({ questionId: "u09-s001-v003" })]);

// 13: removed question
authThrows(baseBank, [baseBank[0]]);

// 14: authorized explanation change passes
{
  const before = [q()];
  const after = [q({ explanation: "新解析" })];
  const result = auth(before, after, {
    allowedFieldsByQuestionId: { "u09-s001-v001": ["explanation"] },
    expectedChangedRecords: 1,
    expectedChangedFields: 1
  });
  assert.deepEqual(result.changedRecords, ["u09-s001-v001"]);
  assert.equal(result.changedFields, 1);
}

// 15: authorized text + explanation passes
{
  const before = [q()];
  const after = [q({ text: "新題幹", explanation: "新解析" })];
  const result = auth(before, after, {
    allowedFieldsByQuestionId: { "u09-s001-v001": ["text", "explanation"] },
    expectedChangedRecords: 1,
    expectedChangedFields: 2
  });
  assert.deepEqual(result.changedRecords, ["u09-s001-v001"]);
  assert.equal(result.changedFields, 2);
}

// 16: authorized field that did not change throws
authThrows([q()], [q()], {
  allowedFieldsByQuestionId: { "u09-s001-v001": ["explanation"] },
  expectedChangedRecords: 1,
  expectedChangedFields: 1
});

// 17: expected changed-record count mismatch throws
authThrows([q()], [q({ explanation: "新解析" })], {
  allowedFieldsByQuestionId: { "u09-s001-v001": ["explanation"] },
  expectedChangedRecords: 2,
  expectedChangedFields: 1
});

// 18: expected changed-field count mismatch throws
authThrows([q()], [q({ explanation: "新解析" })], {
  allowedFieldsByQuestionId: { "u09-s001-v001": ["explanation"] },
  expectedChangedRecords: 1,
  expectedChangedFields: 2
});

// direct byte comparison tests
assertByteIdentical("lecture\n", "lecture\n");
assertByteIdentical(Buffer.from("lecture\n"), Buffer.from("lecture\n"));
assert.throws(() => assertByteIdentical("lecture\n", "lecture \n"));
assert.throws(() => assertByteIdentical("a\r\n", "a\n"));
assert.throws(() => assertByteIdentical("abc", "abd"));

// wrapper delegation proof
assert.match(CORE_SOURCE, /assertAllowedQuestionFieldDiffsForBanks\s*\(/);
assert.match(
  CORE_SOURCE,
  /function assertAllowedQuestionFieldDiffs[\s\S]*assertAllowedQuestionFieldDiffsForBanks\s*\(/
);
assert.match(CORE_SOURCE, /function assertLectureFileUnchanged[\s\S]*assertByteIdentical\s*\(/);
assert.doesNotMatch(CORE_SOURCE, /\bexecSync\b/);
assert.match(CORE_SOURCE, /\bexecFileSync\b/);
assert.doesNotMatch(CORE_SOURCE, /export const QUESTION_BANK_PATH/);
assert.doesNotMatch(CORE_SOURCE, /export const LECTURE_PATH/);

console.log("test-u09-field-diff-core: OK");
console.log("  title detection: OK");
console.log("  topicId detection: OK");
console.log("  sourceScope detection: OK");
console.log("  numericUnitId detection: OK");
console.log("  unknown field detection: OK");
console.log("  deleted field detection: OK");
console.log("  array field detection: OK");
console.log("  question identity and order protection: OK");
console.log("  direct authorization helper tests: OK");
console.log("  authorization-count protection: OK");
console.log("  direct byte comparison tests: OK");
console.log("  production wrapper delegation: OK");
