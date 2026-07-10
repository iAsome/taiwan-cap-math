#!/usr/bin/env node
/** Report-only: markdown distractor-claim extract for human review. Never imported by build. */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { splitExplanationSentences } from "./u09-semantic-audit.mjs";

const NOTICE = `TEMPORARY REVIEW ARTIFACT.
NOT STUDENT-FACING.
NOT A RELEASE APPROVAL.
REMOVE BEFORE INTEGRATION.

`;

const CLAIM_RE = /(\d+[是像則]|漏|誤|錯選|不是.*相減|不是.*結果|也不是|少算|多算|方向反)/;

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

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = path.join(root, "tools/review-output");
fs.mkdirSync(outDir, { recursive: true });

const bySkill = new Map();
for (const q of loadBank(root)) {
  if (!bySkill.has(q.skillId)) bySkill.set(q.skillId, []);
  bySkill.get(q.skillId).push(q);
}
for (const qs of bySkill.values()) qs.sort((a, b) => a.questionId.localeCompare(b.questionId));

const parts = [NOTICE, "# U09 Distractor Review\n"];
for (const skillId of SKILL_ORDER) {
  const qs = bySkill.get(skillId) || [];
  parts.push(`\n## ${skillId}\n`);
  for (const q of qs) {
    const claimSents = splitExplanationSentences(q.explanation).filter(s => CLAIM_RE.test(s));
    parts.push(`### ${q.questionId}\n`);
    parts.push(`**text:** ${q.text}\n`);
    parts.push("**choices:**\n");
    q.choices.forEach((c, i) => parts.push(`- ${i}: ${c}\n`));
    parts.push(`**answerIndex:** ${q.answerIndex} → ${q.choices[q.answerIndex]}\n`);
    parts.push(`**explanation:** ${q.explanation}\n`);
    parts.push("**wrong-option claim sentences:**\n");
    if (claimSents.length) {
      for (const s of claimSents) parts.push(`- ${s}\n`);
    } else {
      parts.push("- (none matched extract pattern)\n");
    }
    parts.push("\n");
  }
}

const outPath = path.join(outDir, "u09-distractor-review.md");
fs.writeFileSync(outPath, parts.join(""), "utf8");
console.log(`generate-u09-distractor-review: ${loadBank(root).length} questions → ${outPath}`);
