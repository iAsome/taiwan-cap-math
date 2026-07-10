#!/usr/bin/env node
/** Report-only: fail if U09 bank differs from QA5B-1 base outside 13 authorized records (16 fields). */
import assert from "node:assert/strict";
import { execSync } from "node:child_process";
import vm from "node:vm";

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

const ALL_FIELDS = [
  "text", "choices", "answerIndex", "explanation", "steps", "commonMistake", "concept",
  "difficulty", "skillId", "unitId", "type", "visualMode", "tags", "estimatedTimeSec"
];

function loadBank(code) {
  const ctx = { window: {} };
  vm.runInNewContext(code, ctx);
  return ctx.window.MATH_QUESTION_BANK_V2_U09;
}

const priorCode = execSync(`git -C .. show ${BASE}:數學會考作戰室/v2/math-question-bank-v2-u09.js`, { encoding: "utf8" });
const { readFileSync } = await import("node:fs");
const currentCode = readFileSync(new URL("../v2/math-question-bank-v2-u09.js", import.meta.url), "utf8");
const prior = loadBank(priorCode);
const current = loadBank(currentCode);

assert.equal(current.length, 144, "current bank must have 144 questions");
assert.equal(prior.length, 144, "base bank must have 144 questions");

const changedRecords = new Set();
let changedFieldCount = 0;
const unauthorized = [];
const missing = [];

for (const [qid, allowedFields] of Object.entries(AUTHORIZED)) {
  const q = current.find(x => x.questionId === qid);
  const p = prior.find(x => x.questionId === qid);
  if (!q) unauthorized.push(`unknown current: ${qid}`);
  if (!p) unauthorized.push(`unknown base: ${qid}`);
  if (!q || !p) continue;
  for (const field of allowedFields) {
    if (JSON.stringify(q[field]) !== JSON.stringify(p[field])) {
      changedRecords.add(qid);
      changedFieldCount++;
    } else {
      missing.push(`${qid}.${field}`);
    }
  }
}

for (const q of current) {
  const p = prior.find(x => x.questionId === q.questionId);
  assert.ok(p, `missing in base: ${q.questionId}`);
  for (const f of ALL_FIELDS) {
    if (JSON.stringify(q[f]) !== JSON.stringify(p[f])) {
      const allowed = AUTHORIZED[q.questionId]?.includes(f);
      if (!allowed) unauthorized.push(`${q.questionId}.${f}`);
    }
  }
}

if (unauthorized.length || missing.length || changedRecords.size !== 13 || changedFieldCount !== 16) {
  console.error("check-u09-qa5b1-field-diff: FAIL");
  if (unauthorized.length) console.error("  unauthorized changes:", unauthorized.join(", "));
  if (missing.length) console.error("  authorized fields not changed:", missing.join(", "));
  if (changedRecords.size !== 13) console.error(`  changed records: ${changedRecords.size} (expected 13)`);
  if (changedFieldCount !== 16) console.error(`  changed fields: ${changedFieldCount} (expected 16)`);
  process.exit(1);
}

console.log("check-u09-qa5b1-field-diff: OK");
console.log("  authorized question records: 13");
console.log("  authorized changed fields: 16");
console.log(`  base commit: ${BASE}`);
