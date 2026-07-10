#!/usr/bin/env node
/** Report-only: fail if U09 bank differs from QA5B-2A base outside 9 authorized records (39 fields). */
import { assertAllowedQuestionFieldDiffs } from "./u09-field-diff-core.mjs";

const BASE = process.env.U09_QA5B2A_BASE || "2c21004a6924297af92f4562a41e97d71688bbaf";

const AUTHORIZED = {
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

assertAllowedQuestionFieldDiffs({
  label: "check-u09-qa5b2a-field-diff",
  baseCommit: BASE,
  allowedFieldsByQuestionId: AUTHORIZED,
  expectedChangedRecords: 9,
  expectedChangedFields: 39
});

console.log("check-u09-qa5b2a-field-diff: OK");
console.log("  authorized question records: 9");
console.log("  authorized changed fields: 39");
console.log("  exhaustive top-level field scan: OK");
console.log("  question sequence unchanged: OK");
console.log("  lecture file unchanged: OK");
console.log(`  base commit: ${BASE}`);
