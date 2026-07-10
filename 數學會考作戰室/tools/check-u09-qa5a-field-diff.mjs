#!/usr/bin/env node
/** Report-only: fail if U09 bank differs from base commit outside 25 authorized explanations. */
import assert from "node:assert/strict";
import { execSync } from "node:child_process";
import vm from "node:vm";

const BASE = process.env.U09_QA5A_BASE || "c06ba8339ec5a1cf90f875e9d39c91f60af332fa";
const AUTHORIZED = new Set([
  "u09-s001-v005", "u09-s001-v009", "u09-s001-v011",
  "u09-s002-v003", "u09-s002-v004", "u09-s002-v007", "u09-s002-v008", "u09-s002-v010", "u09-s002-v011",
  "u09-s003-v005", "u09-s003-v007", "u09-s003-v008", "u09-s003-v010",
  "u09-s004-v001", "u09-s004-v002", "u09-s004-v005", "u09-s004-v006", "u09-s004-v007", "u09-s004-v009",
  "u09-s006-v001", "u09-s006-v002", "u09-s006-v003", "u09-s006-v004", "u09-s006-v009", "u09-s006-v011"
]);

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

const fields = [
  "text", "choices", "answerIndex", "steps", "commonMistake", "concept",
  "difficulty", "skillId", "unitId", "type", "visualMode", "tags", "estimatedTimeSec"
];
const explChanges = [];
const unauthorized = [];

for (const q of current) {
  const p = prior.find(x => x.questionId === q.questionId);
  assert.ok(p, `missing in base: ${q.questionId}`);
  if (q.explanation !== p.explanation) explChanges.push(q.questionId);
  for (const f of fields) {
    if (JSON.stringify(q[f]) !== JSON.stringify(p[f])) {
      unauthorized.push(`${q.questionId}.${f}`);
    }
  }
}

const extra = explChanges.filter(id => !AUTHORIZED.has(id));
const missing = [...AUTHORIZED].filter(id => !explChanges.includes(id));

if (extra.length || missing.length || unauthorized.length) {
  console.error("check-u09-qa5a-field-diff: FAIL");
  if (extra.length) console.error("  unauthorized explanation changes:", extra.join(", "));
  if (missing.length) console.error("  authorized IDs not changed:", missing.join(", "));
  if (unauthorized.length) console.error("  non-explanation field changes:", unauthorized.join(", "));
  process.exit(1);
}

console.log("check-u09-qa5a-field-diff: OK");
console.log(`  authorized explanation changes: ${explChanges.length}`);
console.log(`  base commit: ${BASE}`);
