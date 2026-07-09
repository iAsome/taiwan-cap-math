#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const v2 = path.join(root, "v2");
const ctx = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync(path.join(v2, "math-question-bank-v2-u08.js"), "utf8"), ctx);
const questions = ctx.window.MATH_QUESTION_BANK_V2_U08;

const SKILL_ORDER = [
  "geometry-basic-elements",
  "angle-types-measure",
  "parallel-perpendicular-angles",
  "triangle-angle-sum",
  "triangle-basic-classification",
  "quadrilateral-basic",
  "polygon-angle-basic",
  "perimeter-area-basic",
  "composite-area-text",
  "unit-conversion-geometry",
  "solid-views-basic",
  "geometry-literacy-context"
];
const PICK_VARIANT = {
  "geometry-basic-elements": "v006",
  "angle-types-measure": "v007",
  "parallel-perpendicular-angles": "v008",
  "triangle-angle-sum": "v009",
  "triangle-basic-classification": "v010",
  "quadrilateral-basic": "v011",
  "polygon-angle-basic": "v012",
  "perimeter-area-basic": "v006",
  "composite-area-text": "v007",
  "unit-conversion-geometry": "v008",
  "solid-views-basic": "v009",
  "geometry-literacy-context": "v012"
};

const byId = new Map(questions.map((q) => [q.questionId, q]));
const samples = SKILL_ORDER.map((sid, i) => {
  const q = byId.get(`u08-s${String(i + 1).padStart(3, "0")}-${PICK_VARIANT[sid]}`);
  if (!q) throw new Error(`missing sample for ${sid}`);
  return q;
});
const diffCount = { basic: 0, standard: 0, advanced: 0, literacy: 0 };
for (const q of samples) diffCount[q.difficulty]++;

console.log("========== U08 one per skill (12) ==========\n");
for (const q of samples) {
  console.log(`--- ${q.questionId} (${q.skillId}) [${q.difficulty}] ---`);
  console.log(`text: ${q.text}`);
  console.log(`choices: ${q.choices.map((c, i) => `${i}:${c}`).join(" | ")}`);
  console.log(`answerIndex: ${q.answerIndex} => ${q.choices[q.answerIndex]}`);
  console.log(`explanation: ${q.explanation}`);
  console.log(`steps: ${JSON.stringify(q.steps)}`);
  console.log(`commonMistake: ${q.commonMistake}`);
  console.log("");
}
console.log("=".repeat(72));
console.log(`printed ${samples.length} samples — difficulty mix: ${JSON.stringify(diffCount)}`);
