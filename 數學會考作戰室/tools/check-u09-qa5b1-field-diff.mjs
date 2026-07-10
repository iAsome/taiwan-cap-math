#!/usr/bin/env node
/** Report-only: fail if U09 bank differs from QA5B-1 base outside 13 authorized records (16 fields). */
import { assertAllowedQuestionFieldDiffs } from "./u09-field-diff-core.mjs";

const BASE = process.env.U09_QA5B1_BASE || "0f647bd54463b6fe99bc69792fa0f62394fe845c";

const AUTHORIZED = {
  "u09-s007-v001": ["explanation"],
  "u09-s007-v007": ["explanation"],
  "u09-s008-v002": ["explanation"],
  "u09-s008-v004": ["explanation"],
  "u09-s008-v006": ["explanation"],
  "u09-s008-v007": ["explanation"],
  "u09-s008-v008": ["explanation"],
  "u09-s008-v009": ["text", "explanation"],
  "u09-s008-v010": ["text", "explanation", "commonMistake"],
  "u09-s008-v011": ["explanation"],
  "u09-s009-v004": ["explanation"],
  "u09-s009-v007": ["explanation"],
  "u09-s009-v009": ["explanation"]
};

assertAllowedQuestionFieldDiffs({
  label: "check-u09-qa5b1-field-diff",
  baseCommit: BASE,
  allowedFieldsByQuestionId: AUTHORIZED,
  expectedChangedRecords: 13,
  expectedChangedFields: 16
});

console.log("check-u09-qa5b1-field-diff: OK");
console.log("  authorized question records: 13");
console.log("  authorized changed fields: 16");
console.log("  exhaustive top-level field scan: OK");
console.log("  question sequence unchanged: OK");
console.log("  lecture file unchanged: OK");
console.log(`  base commit: ${BASE}`);
