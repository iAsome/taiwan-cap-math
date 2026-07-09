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

function printQuestion(q) {
  console.log(`\n--- ${q.questionId} (${q.skillId}) [${q.difficulty}] ---`);
  console.log("text:", q.text);
  console.log("choices:", q.choices.map((c, j) => `${j}:${c}`).join(" | "));
  console.log("answerIndex:", q.answerIndex, "=>", q.choices[q.answerIndex]);
  console.log("explanation:", q.explanation);
  console.log("steps:", q.steps);
  console.log("commonMistake:", q.commonMistake);
}

function pickSample(qs, skillId) {
  const skillQs = qs.filter(x => x.skillId === skillId).sort((a, b) => a.questionId.localeCompare(b.questionId));
  const nonV001 = skillQs.filter(q => !q.questionId.endsWith("-v001"));
  const pool = nonV001.length ? nonV001 : skillQs;
  const literacy = pool.find(q => q.difficulty === "literacy");
  const advanced = pool.find(q => q.difficulty === "advanced");
  const standard = pool.find(q => q.difficulty === "standard");
  return literacy || advanced || standard || pool[Math.floor(pool.length / 2)] || pool[0];
}

const qs = loadBank();
console.log("========== U06 one per skill (12) [mixed difficulty, skip v001] ==========");
for (const skillId of SKILL_ORDER) {
  const q = pickSample(qs, skillId);
  if (!q) throw new Error(`missing sample for ${skillId}`);
  printQuestion(q);
}
