#!/usr/bin/env node
/** Report-only: 24-question QA4 sample (v001+v002 per skill). Never imported by build. */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const NOTICE = `TEMPORARY REVIEW ARTIFACT.
NOT STUDENT-FACING.
NOT A RELEASE APPROVAL.
REMOVE BEFORE INTEGRATION.

`;

const SKILL_ORDER = [
  "data-table-reading", "frequency-table", "bar-chart-text", "line-chart-text",
  "pie-chart-percent", "mean-basic", "median-basic", "mode-range-basic",
  "weighted-average-basic", "data-comparison-context", "misleading-statistics-basic",
  "statistics-literacy-context"
];

function loadBank(root) {
  const code = fs.readFileSync(path.join(root, "v2/math-question-bank-v2-u09.js"), "utf8");
  const ctx = { window: {} };
  vm.runInNewContext(code, ctx);
  return ctx.window.MATH_QUESTION_BANK_V2_U09;
}

function formatQuestion(q) {
  const lines = [
    `### ${q.questionId}`,
    `- **skillId:** ${q.skillId}`,
    `- **difficulty:** ${q.difficulty}`,
    `- **text:** ${q.text}`,
    "- **choices:**"
  ];
  q.choices.forEach((c, i) => lines.push(`  - ${i}: ${c}`));
  lines.push(`- **answerIndex:** ${q.answerIndex}`);
  lines.push(`- **correct choice:** ${q.choices[q.answerIndex]}`);
  lines.push(`- **explanation:** ${q.explanation}`);
  lines.push("- **steps:**");
  q.steps.forEach((s, i) => lines.push(`  ${i + 1}. ${s}`));
  lines.push(`- **commonMistake:** ${q.commonMistake}`);
  lines.push("");
  return lines.join("\n");
}

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = path.join(root, "tools/review-output");
fs.mkdirSync(outDir, { recursive: true });

const bank = loadBank(root);
const byId = new Map(bank.map(q => [q.questionId, q]));
const picked = [];
for (const skillId of SKILL_ORDER) {
  const skillNum = String(SKILL_ORDER.indexOf(skillId) + 1).padStart(3, "0");
  for (const vid of ["v001", "v002"]) {
    const id = `u09-s${skillNum}-${vid}`;
    const q = byId.get(id);
    if (!q) throw new Error(`missing ${id} for skill ${skillId}`);
    if (q.skillId !== skillId) throw new Error(`${id} skill mismatch: ${q.skillId} vs ${skillId}`);
    picked.push(q);
  }
}

const parts = [NOTICE, "# U09 QA4 Sample (24 questions)\n", `Selected: v001 and v002 from each of ${SKILL_ORDER.length} skills.\n`];
for (const q of picked) parts.push(formatQuestion(q));

const outPath = path.join(outDir, "u09-qa4-samples.md");
fs.writeFileSync(outPath, parts.join("\n"), "utf8");
console.log(`generate-u09-qa4-samples: ${picked.length} questions → ${outPath}`);
