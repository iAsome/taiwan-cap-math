#!/usr/bin/env node
import assert from "node:assert/strict";
import {
  assertQuestionIdsUnique,
  assertQuestionSequenceUnchanged,
  collectTopLevelQuestionFieldDiffs
} from "./u09-field-diff-core.mjs";

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

function assertUnauthorized(before, after, field) {
  const diffs = collectTopLevelQuestionFieldDiffs(before, after);
  assert.ok(diffs.some(d => d.field === field), `expected unauthorized diff on ${field}`);
}

function runAuthorizationCheck(before, after, options) {
  const {
    allowedFieldsByQuestionId,
    expectedChangedRecords,
    expectedChangedFields
  } = options;

  assertQuestionIdsUnique(before);
  assertQuestionIdsUnique(after);
  assertQuestionSequenceUnchanged(before, after);

  const diffs = collectTopLevelQuestionFieldDiffs(before, after);
  const changedRecords = new Set();
  const unauthorized = [];
  const missing = [];

  for (const diff of diffs) {
    if (diff.field === "questionId") {
      unauthorized.push(`${diff.questionId}.questionId`);
      continue;
    }
    const allowed = allowedFieldsByQuestionId[diff.questionId];
    if (allowed?.includes(diff.field)) {
      changedRecords.add(diff.questionId);
    } else {
      unauthorized.push(`${diff.questionId}.${diff.field}`);
    }
  }

  for (const [questionId, fields] of Object.entries(allowedFieldsByQuestionId)) {
    for (const field of fields) {
      const changed = diffs.some(d => d.questionId === questionId && d.field === field);
      if (!changed) missing.push(`${questionId}.${field}`);
    }
  }

  const changedFields = diffs.filter(
    d => allowedFieldsByQuestionId[d.questionId]?.includes(d.field)
  ).length;

  return { unauthorized, missing, changedRecords, changedFields, diffs };
}

function assertLectureBytesEqual(before, after) {
  const a = Buffer.isBuffer(before) ? before : Buffer.from(before);
  const b = Buffer.isBuffer(after) ? after : Buffer.from(after);
  assert.ok(a.equals(b), "lecture bytes differ");
}

const baseBank = [q(), q({ questionId: "u09-s001-v002", text: "題幹2" })];

// 1-4: metadata fields
assertUnauthorized(baseBank, [q({ title: "新標題" }), baseBank[1]], "title");
assertUnauthorized(baseBank, [q({ topicId: "u09-other" }), baseBank[1]], "topicId");
assertUnauthorized(baseBank, [q({ sourceScope: "OTHER" }), baseBank[1]], "sourceScope");
assertUnauthorized(baseBank, [q({ numericUnitId: 10 }), baseBank[1]], "numericUnitId");

// 5: unknown future field
assertUnauthorized(
  baseBank,
  [q({ futureField: "x" }), baseBank[1]],
  "futureField"
);

// 6: deleted field (concept removed in after)
{
  const beforeQ = q();
  const afterQ = q();
  delete afterQ.concept;
  assertUnauthorized([beforeQ, baseBank[1]], [afterQ, baseBank[1]], "concept");
}

// 7-8: array fields
assertUnauthorized(
  baseBank,
  [q({ choices: ["A", "B", "C", "E"] }), baseBank[1]],
  "choices"
);
assertUnauthorized(
  baseBank,
  [q({ steps: ["步驟1", "步驟2", "步驟X"] }), baseBank[1]],
  "steps"
);

// 9: changed questionId (sequence protection; field diff matches by questionId key)
{
  const before = [q(), q({ questionId: "u09-s001-v002" })];
  const after = [q({ questionId: "u09-s001-v999" }), q({ questionId: "u09-s001-v002" })];
  assert.throws(() => assertQuestionSequenceUnchanged(before, after), /sequence changed/);
}

// 10: reordered questions
assert.throws(
  () => assertQuestionSequenceUnchanged(baseBank, [baseBank[1], baseBank[0]]),
  /sequence changed/
);

// 11: duplicate questionId
assert.throws(
  () => assertQuestionIdsUnique([q(), q({ text: "other" })]),
  /duplicate questionId/
);

// 12: added question
assert.throws(
  () => assertQuestionSequenceUnchanged(baseBank, [...baseBank, q({ questionId: "u09-s001-v003" })]),
  /length changed/
);

// 13: removed question
assert.throws(
  () => assertQuestionSequenceUnchanged(baseBank, [baseBank[0]]),
  /length changed/
);

// 14: authorized explanation change passes
{
  const before = [q()];
  const after = [q({ explanation: "新解析" })];
  const result = runAuthorizationCheck(before, after, {
    allowedFieldsByQuestionId: { "u09-s001-v001": ["explanation"] },
    expectedChangedRecords: 1,
    expectedChangedFields: 1
  });
  assert.equal(result.unauthorized.length, 0);
  assert.equal(result.missing.length, 0);
  assert.equal(result.changedRecords.size, 1);
  assert.equal(result.changedFields, 1);
}

// 15: authorized text + explanation passes
{
  const before = [q()];
  const after = [q({ text: "新題幹", explanation: "新解析" })];
  const result = runAuthorizationCheck(before, after, {
    allowedFieldsByQuestionId: { "u09-s001-v001": ["text", "explanation"] },
    expectedChangedRecords: 1,
    expectedChangedFields: 2
  });
  assert.equal(result.unauthorized.length, 0);
  assert.equal(result.missing.length, 0);
  assert.equal(result.changedRecords.size, 1);
  assert.equal(result.changedFields, 2);
}

// 16: authorized field not changed fails
{
  const before = [q()];
  const after = [q()];
  const result = runAuthorizationCheck(before, after, {
    allowedFieldsByQuestionId: { "u09-s001-v001": ["explanation"] },
    expectedChangedRecords: 1,
    expectedChangedFields: 1
  });
  assert.ok(result.missing.includes("u09-s001-v001.explanation"));
}

// 17: expected record-count mismatch fails
{
  const before = [q()];
  const after = [q({ explanation: "新解析" })];
  const result = runAuthorizationCheck(before, after, {
    allowedFieldsByQuestionId: { "u09-s001-v001": ["explanation"] },
    expectedChangedRecords: 2,
    expectedChangedFields: 1
  });
  assert.equal(result.changedRecords.size, 1);
  assert.notEqual(result.changedRecords.size, 2);
}

// 18: expected field-count mismatch fails
{
  const before = [q()];
  const after = [q({ explanation: "新解析" })];
  const result = runAuthorizationCheck(before, after, {
    allowedFieldsByQuestionId: { "u09-s001-v001": ["explanation"] },
    expectedChangedRecords: 1,
    expectedChangedFields: 2
  });
  assert.equal(result.changedFields, 1);
  assert.notEqual(result.changedFields, 2);
}

// lecture byte comparison
assertLectureBytesEqual("lecture\n", "lecture\n");
assert.throws(() => assertLectureBytesEqual("lecture\n", "lecture \n"), /lecture bytes differ/);
assert.throws(() => assertLectureBytesEqual("a\r\n", "a\n"), /lecture bytes differ/);

console.log("test-u09-field-diff-core: OK");
console.log("  title detection: OK");
console.log("  topicId detection: OK");
console.log("  sourceScope detection: OK");
console.log("  numericUnitId detection: OK");
console.log("  unknown field detection: OK");
console.log("  deleted field detection: OK");
console.log("  array field detection: OK");
console.log("  question identity and order protection: OK");
console.log("  authorization-count protection: OK");
console.log("  lecture byte comparison: OK");
