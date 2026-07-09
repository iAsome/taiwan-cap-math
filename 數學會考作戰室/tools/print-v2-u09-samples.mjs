#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const v2Dir = path.join(root, "v2");

function loadBank() {
  const code = fs.readFileSync(path.join(v2Dir, "math-question-bank-v2-u09.js"), "utf8");
  const ctx = { window: {} };
  vm.runInNewContext(code, ctx);
  return ctx.window.MATH_QUESTION_BANK_V2_U09;
}

const SKILL_ORDER = [
  "data-table-reading", "frequency-table", "bar-chart-text", "line-chart-text",
  "pie-chart-percent", "mean-basic", "median-basic", "mode-range-basic",
  "weighted-average-basic", "data-comparison-context", "misleading-statistics-basic",
  "statistics-literacy-context"
];

const VERSION_BY_SKILL = {
  "data-table-reading": "v005",
  "frequency-table": "v006",
  "bar-chart-text": "v007",
  "line-chart-text": "v008",
  "pie-chart-percent": "v010",
  "mean-basic": "v011",
  "median-basic": "v012",
  "mode-range-basic": "v009",
  "weighted-average-basic": "v010",
  "data-comparison-context": "v011",
  "misleading-statistics-basic": "v012",
  "statistics-literacy-context": "v006"
};

function printQuestion(q) {
  console.log(`\n--- ${q.questionId} (${q.skillId}) [${q.difficulty}] ---`);
  console.log("text:", q.text);
  console.log("choices:", q.choices.map((c, j) => `${j}:${c}`).join(" | "));
  console.log("answerIndex:", q.answerIndex, "=>", q.choices[q.answerIndex]);
  console.log("explanation:", q.explanation);
  console.log("steps:", q.steps);
  console.log("commonMistake:", q.commonMistake);
}

function pickQuestion(qs, skillId) {
  const vid = VERSION_BY_SKILL[skillId];
  const q = qs.find(x => x.skillId === skillId && x.questionId.endsWith(`-${vid}`));
  if (!q) throw new Error(`missing ${skillId} ${vid}`);
  return q;
}

const qs = loadBank();
console.log("========== U09 fixed versions (12) ==========");
let std = 0;
let hard = 0;
for (const skillId of SKILL_ORDER) {
  const q = pickQuestion(qs, skillId);
  if (q.difficulty === "standard" || q.difficulty === "basic") std++;
  if (q.difficulty === "advanced" || q.difficulty === "literacy") hard++;
  printQuestion(q);
}
console.log(`\n(sample mix: standard/basic=${std}, advanced/literacy=${hard})`);
