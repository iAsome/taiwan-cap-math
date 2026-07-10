#!/usr/bin/env node
/** Report-only: fail if U09 bank differs from base commit outside QA5A + QA5B-1 authorized fields. */
import assert from "node:assert/strict";
import { execSync } from "node:child_process";
import vm from "node:vm";

const BASE = process.env.U09_QA5A_BASE || "c06ba8339ec5a1cf90f875e9d39c91f60af332fa";

const QA5A_AUTHORIZED = new Set([
  "u09-s001-v005", "u09-s001-v009", "u09-s001-v011",
  "u09-s002-v003", "u09-s002-v004", "u09-s002-v007", "u09-s002-v008", "u09-s002-v010", "u09-s002-v011",
  "u09-s003-v005", "u09-s003-v007", "u09-s003-v008", "u09-s003-v010",
  "u09-s004-v001", "u09-s004-v002", "u09-s004-v005", "u09-s004-v006", "u09-s004-v007", "u09-s004-v009",
  "u09-s006-v001", "u09-s006-v002", "u09-s006-v003", "u09-s006-v004", "u09-s006-v009", "u09-s006-v011"
]);

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

function loadBank(code) {
  const ctx = { window: {} };
  vm.runInNewContext(code, ctx);
  return ctx.window.MATH_QUESTION_BANK_V2_U09;
}

function allowedFieldChange(qid, field) {
  if (field === "explanation") return QA5A_AUTHORIZED.has(qid) || QA5B1_AUTHORIZED[qid]?.includes("explanation");
  return QA5B1_AUTHORIZED[qid]?.includes(field);
}

const priorCode = execSync(`git -C .. show ${BASE}:數學會考作戰室/v2/math-question-bank-v2-u09.js`, { encoding: "utf8" });
const { readFileSync } = await import("node:fs");
const currentCode = readFileSync(new URL("../v2/math-question-bank-v2-u09.js", import.meta.url), "utf8");
const prior = loadBank(priorCode);
const current = loadBank(currentCode);

assert.equal(current.length, 144, "current bank must have 144 questions");
assert.equal(prior.length, 144, "base bank must have 144 questions");

const fields = [
  "text", "choices", "answerIndex", "steps", "commonMistake", "concept",
  "difficulty", "skillId", "unitId", "type", "visualMode", "tags", "estimatedTimeSec"
];
const qa5aExplChanges = [];
const qa5b1ExplChanges = [];
const unauthorized = [];

for (const q of current) {
  const p = prior.find(x => x.questionId === q.questionId);
  assert.ok(p, `missing in base: ${q.questionId}`);
  if (q.explanation !== p.explanation) {
    if (QA5A_AUTHORIZED.has(q.questionId)) qa5aExplChanges.push(q.questionId);
    else if (QA5B1_AUTHORIZED[q.questionId]?.includes("explanation")) qa5b1ExplChanges.push(q.questionId);
    else unauthorized.push(`${q.questionId}.explanation`);
  }
  for (const f of fields) {
    if (JSON.stringify(q[f]) !== JSON.stringify(p[f])) {
      if (!allowedFieldChange(q.questionId, f)) unauthorized.push(`${q.questionId}.${f}`);
    }
  }
}

const qa5aMissing = [...QA5A_AUTHORIZED].filter(id => !qa5aExplChanges.includes(id));
const qa5b1Missing = Object.entries(QA5B1_AUTHORIZED)
  .filter(([id, fs]) => fs.includes("explanation") && !qa5b1ExplChanges.includes(id))
  .map(([id]) => id);

if (unauthorized.length || qa5aMissing.length || qa5aExplChanges.length !== 25 || qa5b1Missing.length) {
  console.error("check-u09-qa5a-field-diff: FAIL");
  if (unauthorized.length) console.error("  unauthorized changes:", unauthorized.join(", "));
  if (qa5aMissing.length) console.error("  QA5A IDs not changed:", qa5aMissing.join(", "));
  if (qa5aExplChanges.length !== 25) console.error(`  QA5A explanation changes: ${qa5aExplChanges.length} (expected 25)`);
  if (qa5b1Missing.length) console.error("  QA5B1 explanations not changed vs QA5A base:", qa5b1Missing.join(", "));
  process.exit(1);
}

console.log("check-u09-qa5a-field-diff: OK");
console.log(`  authorized explanation changes: ${qa5aExplChanges.length}`);
console.log(`  QA5B1 explanation changes (also vs base): ${qa5b1ExplChanges.length}`);
console.log(`  base commit: ${BASE}`);
