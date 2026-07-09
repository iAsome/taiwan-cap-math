#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const v2 = path.join(root, "v2");
const ctx = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync(path.join(v2, "math-question-bank-v2-u10.js"), "utf8"), ctx);
const questions = ctx.window.MATH_QUESTION_BANK_V2_U10;

const SKILL_ORDER = [
  "polynomial-terms", "polynomial-evaluation", "like-terms-combine",
  "polynomial-add-subtract", "monomial-multiply", "monomial-polynomial-distribute",
  "binomial-multiply-basic", "square-sum-formula", "square-difference-formula",
  "difference-of-squares-expand", "formula-mixed-recognition", "polynomial-literacy-context"
];
const PICK_VARIANT = {
  "polynomial-terms": "v006", "polynomial-evaluation": "v007", "like-terms-combine": "v008",
  "polynomial-add-subtract": "v009", "monomial-multiply": "v010", "monomial-polynomial-distribute": "v011",
  "binomial-multiply-basic": "v010", "square-sum-formula": "v011", "square-difference-formula": "v012",
  "difference-of-squares-expand": "v006", "formula-mixed-recognition": "v007", "polynomial-literacy-context": "v012"
};

const byId = new Map(questions.map(q => [q.questionId, q]));
const samples = SKILL_ORDER.map((sid, i) => {
  const q = byId.get(`u10-s${String(i + 1).padStart(3, "0")}-${PICK_VARIANT[sid]}`);
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
