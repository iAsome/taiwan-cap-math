#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const v2Dir = path.join(root, "v2");

function loadBank() {
  const code = fs.readFileSync(path.join(v2Dir, "math-question-bank-v2-u06.js"), "utf8");
  const ctx = { window: {} };
  vm.runInNewContext(code, ctx);
  return ctx.window.MATH_QUESTION_BANK_V2_U06;
}

const SKILL_ORDER = [
  "ratio-simplify", "proportion-solve", "direct-variation", "inverse-variation",
  "scale-drawing", "ratio-word-problem", "continued-ratio-preview", "ratio-literacy",
  "ratio-part-total", "proportion-property", "inverse-variation-graph", "ratio-composite-problem"
];

const VERSION_BY_SKILL = {
  "ratio-simplify": "v005",
  "proportion-solve": "v006",
  "direct-variation": "v007",
  "inverse-variation": "v008",
  "scale-drawing": "v010",
  "ratio-word-problem": "v011",
  "continued-ratio-preview": "v012",
  "ratio-literacy": "v009",
  "ratio-part-total": "v010",
  "proportion-property": "v011",
  "inverse-variation-graph": "v012",
  "ratio-composite-problem": "v006"
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
console.log("========== U06 fixed versions (12) ==========");
let std = 0;
let hard = 0;
for (const skillId of SKILL_ORDER) {
  const q = pickQuestion(qs, skillId);
  if (q.difficulty === "standard" || q.difficulty === "basic") std++;
  if (q.difficulty === "advanced" || q.difficulty === "literacy") hard++;
  printQuestion(q);
}
console.log(`\n(sample mix: standard/basic=${std}, advanced/literacy=${hard})`);
