#!/usr/bin/env node
/** Report-only: extract U09 review dossier from generated bank. Never imported by build. */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { splitExplanationSentences } from "./u09-semantic-audit.mjs";

const CLAIM_RE = /(\d+[是像則]|漏|誤|錯選|不是.*相減|不是.*結果|也不是|少算|多算|方向反)/;

function extractNumbers(s) {
  const m = s.match(/\d+(?:\.\d+)?%?/g);
  return m ? [...new Set(m)] : [];
}

function loadBank(root) {
  const code = fs.readFileSync(path.join(root, "v2/math-question-bank-v2-u09.js"), "utf8");
  const ctx = { window: {} };
  vm.runInNewContext(code, ctx);
  return ctx.window.MATH_QUESTION_BANK_V2_U09;
}

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = path.join(root, "tools/review-output");
fs.mkdirSync(outDir, { recursive: true });

const questions = loadBank(root).sort((a, b) => a.questionId.localeCompare(b.questionId));
const lines = questions.map(q => {
  const numericDistractorClaims = splitExplanationSentences(q.explanation)
    .filter(s => CLAIM_RE.test(s))
    .map(sentence => ({ sentence, numbersMentioned: extractNumbers(sentence) }));
  return JSON.stringify({
    questionId: q.questionId,
    skillId: q.skillId,
    difficulty: q.difficulty,
    text: q.text,
    choices: q.choices,
    answerIndex: q.answerIndex,
    correctChoice: q.choices[q.answerIndex],
    explanation: q.explanation,
    steps: q.steps,
    commonMistake: q.commonMistake,
    numericDistractorClaims
  });
});

const outPath = path.join(outDir, "u09-review-dossier.jsonl");
fs.writeFileSync(outPath, `${lines.join("\n")}\n`, "utf8");
console.log(`generate-u09-review-dossier: ${lines.length} records → ${outPath}`);
