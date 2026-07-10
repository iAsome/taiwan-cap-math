#!/usr/bin/env node
/** Report-only: fail if U09 bank differs from QA5B-2A base outside QA5B-2A + QA5B-2B authorized fields. */
import { assertAllowedQuestionFieldDiffs } from "./u09-field-diff-core.mjs";
import { assertU09Qa5cLectureDiff } from "./check-u09-qa5c-lecture-diff.mjs";

const BASE = process.env.U09_QA5B2A_BASE || "2c21004a6924297af92f4562a41e97d71688bbaf";

const QA5B2A_AUTHORIZED = {
  "u09-s010-v001": ["text", "explanation", "steps", "commonMistake"],
  "u09-s010-v008": ["text", "choices", "explanation", "steps", "commonMistake"],
  "u09-s010-v009": ["text", "explanation", "steps", "commonMistake"],
  "u09-s011-v008": ["text", "choices", "explanation", "steps", "commonMistake"],
  "u09-s011-v010": ["choices", "explanation", "steps"],
  "u09-s011-v012": ["text", "choices", "explanation", "steps", "commonMistake"],
  "u09-s012-v002": ["text", "choices", "explanation", "steps", "commonMistake"],
  "u09-s012-v009": ["choices", "explanation", "steps", "commonMistake"],
  "u09-s012-v011": ["text", "explanation", "steps", "commonMistake"]
};

const QA5B2B_AUTHORIZED = {
  "u09-s010-v012": ["text", "explanation", "steps", "commonMistake"],
  "u09-s011-v007": ["text", "choices", "explanation", "steps", "commonMistake"],
  "u09-s012-v003": ["text", "choices", "explanation", "steps", "commonMistake"],
  "u09-s012-v005": ["text", "explanation", "steps", "commonMistake"],
  "u09-s012-v008": ["text", "choices", "explanation", "steps", "commonMistake"],
  "u09-s012-v010": ["text", "choices", "explanation", "steps", "commonMistake"],
  "u09-s012-v012": ["steps"]
};

const CUMULATIVE_AUTHORIZED = { ...QA5B2A_AUTHORIZED, ...QA5B2B_AUTHORIZED };

const result = assertAllowedQuestionFieldDiffs({
  label: "check-u09-qa5b2a-field-diff",
  baseCommit: BASE,
  allowedFieldsByQuestionId: CUMULATIVE_AUTHORIZED,
  expectedChangedRecords: 16,
  expectedChangedFields: 68,
  lectureValidator: assertU09Qa5cLectureDiff
});

const qa5b2aRecords = result.changedRecords.filter(id => QA5B2A_AUTHORIZED[id]).length;
const qa5b2bRecords = result.changedRecords.filter(id => QA5B2B_AUTHORIZED[id]).length;
const qa5b2aFields = result.diffs.filter(
  d => QA5B2A_AUTHORIZED[d.questionId]?.includes(d.field)
).length;
const qa5b2bFields = result.diffs.filter(
  d => QA5B2B_AUTHORIZED[d.questionId]?.includes(d.field)
).length;

console.log("check-u09-qa5b2a-field-diff: OK");
console.log(`  QA5B2A question records: ${qa5b2aRecords}`);
console.log(`  QA5B2A changed fields: ${qa5b2aFields}`);
console.log(`  QA5B2B question records: ${qa5b2bRecords}`);
console.log(`  QA5B2B changed fields: ${qa5b2bFields}`);
console.log(`  cumulative question records: ${result.changedRecords.length}`);
console.log(`  cumulative changed fields: ${result.changedFields}`);
console.log("  exhaustive top-level field scan: OK");
console.log("  question sequence unchanged: OK");
console.log("  QA5C lecture authorization: OK");
console.log(`  base commit: ${BASE}`);
