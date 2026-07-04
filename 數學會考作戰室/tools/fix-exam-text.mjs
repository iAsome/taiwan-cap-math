import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const context = vm.createContext({ window: {}, console });
vm.runInContext(fs.readFileSync(path.join(root, "math-text-sanitize.js"), "utf8"), context, { filename: "math-text-sanitize.js" });
context.MATH_TEXT_SANITIZE = context.window.MATH_TEXT_SANITIZE;
const { sanitizeQuestion, sanitizeExamText } = context.window.MATH_TEXT_SANITIZE;

vm.runInContext(fs.readFileSync(path.join(root, "quiz-variant-bank.js"), "utf8"), context, { filename: "quiz-variant-bank.js" });
const bank = context.window.QUIZ_VARIANT_BANK;

const PREFIX = /^[\u4e00-\u9fff]+｜/;
const fields = ["text", "tip", "trap", "concept", "formula"];

let prefixRemoved = 0;
let caretConverted = 0;
let fullwidthPipeFixed = 0;
let total = 0;

const hadPrefix = s => typeof s === "string" && PREFIX.test(s);
const hadCaret = s => typeof s === "string" && /\^/.test(s);
const hadFullwidthPipe = s => typeof s === "string" && /｜/.test(s);

for (const presets of Object.values(bank)) {
  for (let i = 0; i < presets.length; i++) {
    const before = presets[i];
    const after = sanitizeQuestion(before);
    total += 1;
    for (const field of fields) {
      if (hadPrefix(before[field])) prefixRemoved += 1;
      if (hadCaret(before[field]) && !hadCaret(after[field])) caretConverted += 1;
      if (hadFullwidthPipe(before[field]) && !hadFullwidthPipe(after[field])) fullwidthPipeFixed += 1;
    }
    if (Array.isArray(before.choices)) {
      before.choices.forEach((c, j) => {
        if (hadPrefix(c)) prefixRemoved += 1;
        if (hadCaret(c) && !hadCaret(after.choices[j])) caretConverted += 1;
        if (hadFullwidthPipe(c) && !hadFullwidthPipe(after.choices[j])) fullwidthPipeFixed += 1;
      });
    }
    if (Array.isArray(before.steps)) {
      before.steps.forEach((s, j) => {
        if (hadPrefix(s)) prefixRemoved += 1;
        if (hadCaret(s) && !hadCaret(after.steps[j])) caretConverted += 1;
        if (hadFullwidthPipe(s) && !hadFullwidthPipe(after.steps[j])) fullwidthPipeFixed += 1;
      });
    }
    presets[i] = after;
  }
}

let strayCarets = 0;
let strayPipes = 0;
let strayPrefixes = 0;

const scan = s => {
  if (typeof s !== "string") return;
  if (/\^/.test(s)) strayCarets += 1;
  if (/｜/.test(s)) strayPipes += 1;
  if (PREFIX.test(s)) strayPrefixes += 1;
};

for (const presets of Object.values(bank)) {
  for (const q of presets) {
    fields.forEach(f => scan(q[f]));
    q.choices?.forEach(scan);
    q.steps?.forEach(scan);
  }
}

fs.writeFileSync(
  path.join(root, "quiz-variant-bank.js"),
  `window.QUIZ_VARIANT_BANK = ${JSON.stringify(bank, null, 2)};\n`,
  "utf8"
);

console.log(`Sanitized ${total} presets (${Object.keys(bank).length} topics × 10).`);
console.log(`  instruction prefixes removed: ${prefixRemoved}`);
console.log(`  caret→superscript fields: ${caretConverted}`);
console.log(`  fullwidth｜ normalized: ${fullwidthPipeFixed}`);
console.log(`  residual ^ in exam text: ${strayCarets} (expect 0)`);
console.log(`  residual ｜ in exam text: ${strayPipes} (expect 0)`);
console.log(`  residual instruction prefixes: ${strayPrefixes} (expect 0)`);

if (strayCarets || strayPipes || strayPrefixes) process.exit(1);
