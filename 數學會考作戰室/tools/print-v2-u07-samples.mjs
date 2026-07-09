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

const DIFF_ORDER = { basic: 0, standard: 1, advanced: 2, literacy: 3 };
const bySkill = new Map();
for (const q of questions) {
  if (!bySkill.has(q.skillId)) bySkill.set(q.skillId, []);
  bySkill.get(q.skillId).push(q);
}

const samples = [];
for (const [skillId, items] of bySkill) {
  const pick = items
    .filter(q => !q.questionId.endsWith("-v001"))
    .sort((a, b) => DIFF_ORDER[a.difficulty] - DIFF_ORDER[b.difficulty] || a.questionId.localeCompare(b.questionId))[0];
  samples.push(pick);
}
samples.sort((a, b) => a.questionId.localeCompare(b.questionId));

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
console.log(`printed ${samples.length} samples (1 per skill, skip v001)`);
