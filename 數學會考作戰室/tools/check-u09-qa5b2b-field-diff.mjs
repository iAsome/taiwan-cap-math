#!/usr/bin/env node
/** Report-only: fail if U09 bank differs from QA5B-2B base outside 7 authorized records (29 fields). */
import { assertAllowedQuestionFieldDiffs } from "./u09-field-diff-core.mjs";

const BASE = process.env.U09_QA5B2B_BASE || "c9050cb639ca3c5e5654c24a6b55eb6454520d21";

const AUTHORIZED = {
  "u09-s010-v012": ["text", "explanation", "steps", "commonMistake"],
  "u09-s011-v007": ["text", "choices", "explanation", "steps", "commonMistake"],
  "u09-s012-v003": ["text", "choices", "explanation", "steps", "commonMistake"],
  "u09-s012-v005": ["text", "explanation", "steps", "commonMistake"],
  "u09-s012-v008": ["text", "choices", "explanation", "steps", "commonMistake"],
  "u09-s012-v010": ["text", "choices", "explanation", "steps", "commonMistake"],
  "u09-s012-v012": ["steps"]
};

assertAllowedQuestionFieldDiffs({
  label: "check-u09-qa5b2b-field-diff",
  baseCommit: BASE,
  allowedFieldsByQuestionId: AUTHORIZED,
  expectedChangedRecords: 7,
  expectedChangedFields: 29
});

console.log("check-u09-qa5b2b-field-diff: OK");
console.log("  authorized question records: 7");
console.log("  authorized changed fields: 29");
console.log("  exhaustive top-level field scan: OK");
console.log("  question sequence unchanged: OK");
console.log("  lecture file unchanged: OK");
console.log(`  base commit: ${BASE}`);
