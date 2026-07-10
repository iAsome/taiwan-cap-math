#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { auditQuestions } from "./u09-semantic-audit.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const bankPath = path.join(root, "v2/math-question-bank-v2-u09.js");
const code = fs.readFileSync(bankPath, "utf8");
const ctx = { window: {} };
vm.runInNewContext(code, ctx);
const questions = ctx.window.MATH_QUESTION_BANK_V2_U09;

const pairs = auditQuestions(questions);
for (const p of pairs) {
  console.log(`${p.questionId}`);
  console.log(`  A: ${p.a}`);
  console.log(`  B: ${p.b}`);
  console.log(`  reason: ${p.reason} (contain=${p.contain.toFixed(2)} bigram=${p.bigram.toFixed(2)})`);
}
console.log(`semantic duplicate candidates: ${pairs.length}`);
