#!/usr/bin/env node
/** Report-only: fail if U09 bank differs from base commit outside QA5A + QA5B-1 authorized fields. */
import { assertAllowedQuestionFieldDiffs } from "./u09-field-diff-core.mjs";

const BASE = process.env.U09_QA5A_BASE || "c06ba8339ec5a1cf90f875e9d39c91f60af332fa";

const QA5A_IDS = [
  "u09-s001-v005", "u09-s001-v009", "u09-s001-v011",
  "u09-s002-v003", "u09-s002-v004", "u09-s002-v007", "u09-s002-v008", "u09-s002-v010", "u09-s002-v011",
  "u09-s003-v005", "u09-s003-v007", "u09-s003-v008", "u09-s003-v010",
  "u09-s004-v001", "u09-s004-v002", "u09-s004-v005", "u09-s004-v006", "u09-s004-v007", "u09-s004-v009",
  "u09-s006-v001", "u09-s006-v002", "u09-s006-v003", "u09-s006-v004", "u09-s006-v009", "u09-s006-v011"
];

const QA5B1_AUTHORIZED = {
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

const QA5A_AUTHORIZED = Object.fromEntries(QA5A_IDS.map(id => [id, ["explanation"]]));
const CUMULATIVE_AUTHORIZED = { ...QA5A_AUTHORIZED, ...QA5B1_AUTHORIZED };

const result = assertAllowedQuestionFieldDiffs({
  label: "check-u09-qa5a-field-diff",
  baseCommit: BASE,
  allowedFieldsByQuestionId: CUMULATIVE_AUTHORIZED,
  expectedChangedRecords: 38,
  expectedChangedFields: 41
});

const qa5aSet = new Set(QA5A_IDS);
const qa5aRecords = result.changedRecords.filter(id => qa5aSet.has(id)).length;
const qa5b1Records = result.changedRecords.filter(id => QA5B1_AUTHORIZED[id]).length;
const qa5aFields = result.diffs.filter(d => qa5aSet.has(d.questionId) && d.field === "explanation").length;
const qa5b1Fields = result.diffs.filter(
  d => QA5B1_AUTHORIZED[d.questionId]?.includes(d.field)
).length;

console.log("check-u09-qa5a-field-diff: OK");
console.log(`  QA5A question records: ${qa5aRecords}`);
console.log(`  QA5A changed fields: ${qa5aFields}`);
console.log(`  QA5B1 question records: ${qa5b1Records}`);
console.log(`  QA5B1 changed fields: ${qa5b1Fields}`);
console.log(`  cumulative question records: ${result.changedRecords.length}`);
console.log(`  cumulative changed fields: ${result.changedFields}`);
console.log("  exhaustive top-level field scan: OK");
console.log("  question sequence unchanged: OK");
console.log("  lecture file unchanged: OK");
console.log(`  base commit: ${BASE}`);
