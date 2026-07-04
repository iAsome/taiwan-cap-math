import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const repo = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const PRIME = /[\u2032\u0027]/;
const FLOAT = /\d+\.\d{4,}/;
const CHOICE_RE = /"choices"\s*:\s*\[([\s\S]*?)\]/g;

let failed = 0;

function checkChoices(label, choicesText) {
  if (PRIME.test(choicesText)) {
    console.error(`FAIL ${label}: prime mark in choices`);
    failed++;
  }
  if (FLOAT.test(choicesText)) {
    console.error(`FAIL ${label}: float artifact in choices`);
    failed++;
  }
}

for (const dir of fs.readdirSync(repo).filter(d => d.endsWith("會考作戰室"))) {
  const subjectDir = path.join(repo, dir);
  const bankPath = path.join(subjectDir, "quiz-variant-bank.js");
  if (fs.existsSync(bankPath)) {
    const raw = fs.readFileSync(bankPath, "utf8");
    for (const m of raw.matchAll(CHOICE_RE)) checkChoices(`${dir}/quiz-variant-bank.js`, m[1]);
  }
  for (const file of fs.readdirSync(subjectDir, { recursive: true })) {
    const p = path.join(subjectDir, String(file));
    if (!fs.statSync(p).isFile()) continue;
    if (!/question-bank\.json$/i.test(p)) continue;
    const raw = fs.readFileSync(p, "utf8");
    for (const m of raw.matchAll(CHOICE_RE)) checkChoices(path.relative(repo, p), m[1]);
  }
}

const context = vm.createContext({ window: {}, console, globalThis: {} });
vm.runInContext(fs.readFileSync(path.join(repo, "shared", "fraction-markup.js"), "utf8"), context);
context.FRACTION_MARKUP = context.window.FRACTION_MARKUP;
const mathRoot = path.join(repo, "數學會考作戰室");
for (const file of ["data.js", "math-text-sanitize.js", "quiz-taxonomy.js", "quiz-variant-bank.js", "questions.js"]) {
  vm.runInContext(fs.readFileSync(path.join(mathRoot, file), "utf8"), context, { filename: file });
}
const bank = context.window.QUIZ_VARIANT_BANK || {};
for (const [key, presets] of Object.entries(bank)) {
  presets.forEach((q, i) => {
    q.choices?.forEach((c, ci) => {
      if (PRIME.test(c)) { console.error(`FAIL ${key}[${i}] choice ${ci}: prime`); failed++; }
      if (FLOAT.test(c)) { console.error(`FAIL ${key}[${i}] choice ${ci}: float`); failed++; }
    });
  });
}

if (failed) {
  console.error(`\nchoice-format: ${failed} issue(s)`);
  process.exit(1);
}
console.log("choice-format: all subject choice fields OK");
