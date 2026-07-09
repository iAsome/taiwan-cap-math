#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const v2 = path.join(root, "v2");
const ctx = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync(path.join(v2, "math-question-bank-v2-u07.js"), "utf8"), ctx);
const questions = ctx.window.MATH_QUESTION_BANK_V2_U07;

const SKILL_ORDER = [
  "inequality-symbol", "inequality-solve-basic", "inequality-transposition",
  "inequality-integer-solutions", "inequality-word-problem", "inequality-reasonableness",
  "inequality-number-line", "inequality-sign-flip", "inequality-and-word",
  "inequality-budget", "inequality-range", "inequality-literacy"
];
const PICK_VARIANT = {
  "inequality-symbol": "v006", "inequality-solve-basic": "v007", "inequality-transposition": "v008",
  "inequality-integer-solutions": "v009", "inequality-word-problem": "v010", "inequality-reasonableness": "v011",
  "inequality-number-line": "v010", "inequality-sign-flip": "v011", "inequality-and-word": "v012",
  "inequality-budget": "v006", "inequality-range": "v007", "inequality-literacy": "v012"
};

const byId = new Map(questions.map(q => [q.questionId, q]));
const samples = SKILL_ORDER.map((sid, i) => {
  const q = byId.get(`u07-s${String(i + 1).padStart(3, "0")}-${PICK_VARIANT[sid]}`);
  if (!q) throw new Error(`missing sample for ${sid}`);
  return q;
});
const diffCount = { basic: 0, standard: 0, advanced: 0, literacy: 0 };
for (const q of samples) diffCount[q.difficulty]++;

for (const q of samples) {
  console.log("=".repeat(72));
  console.log(`questionId: ${q.questionId}`);
  console.log(`difficulty: ${q.difficulty}`);
  console.log(`skillId: ${q.skillId}`);
  console.log(`text: ${q.text}`);
  console.log(`choices: ${JSON.stringify(q.choices)}`);
  console.log(`answerIndex: ${q.answerIndex}`);
  console.log(`explanation: ${q.explanation}`);
  console.log(`steps: ${JSON.stringify(q.steps)}`);
  console.log(`commonMistake: ${q.commonMistake}`);
}
console.log("=".repeat(72));
console.log(`printed ${samples.length} samples — difficulty mix: ${JSON.stringify(diffCount)}`);
