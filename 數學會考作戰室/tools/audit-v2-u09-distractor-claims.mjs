#!/usr/bin/env node
/** Report-only: list explanations with numeric distractor-origin claims for manual review. */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { splitExplanationSentences } from "./u09-semantic-audit.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const bankPath = path.join(root, "v2/math-question-bank-v2-u09.js");
const code = fs.readFileSync(bankPath, "utf8");
const ctx = { window: {} };
vm.runInNewContext(code, ctx);
const questions = ctx.window.MATH_QUESTION_BANK_V2_U09;

/** Clauses that attribute a listed wrong choice to a concrete calculation. */
const CLAIM_RE = /(\d+[是像則]|漏|誤|錯選|不是.*相減|不是.*結果|也不是|少算|多算|方向反)/;

function distractorClaimSentences(explanation) {
  return splitExplanationSentences(explanation).filter(s => CLAIM_RE.test(s));
}

let total = 0;
for (const q of questions.sort((a, b) => a.questionId.localeCompare(b.questionId))) {
  const claims = distractorClaimSentences(q.explanation);
  if (!claims.length) continue;
  total++;
  console.log(`${q.questionId} (${q.skillId})`);
  for (const c of claims) console.log(`  • ${c}`);
  console.log(`  choices: ${q.choices.join(" | ")}`);
}
console.log(`\ndistractor-claim sentences: ${total} questions flagged for review`);
