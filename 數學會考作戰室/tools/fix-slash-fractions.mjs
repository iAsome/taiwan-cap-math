import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const repo = path.dirname(root);
const shared = path.join(repo, "shared", "fraction-markup.js");

const context = vm.createContext({ window: {}, console, globalThis: {} });
vm.runInContext(fs.readFileSync(shared, "utf8"), context, { filename: "fraction-markup.js" });
context.globalThis.FRACTION_MARKUP = context.window.FRACTION_MARKUP;
context.FRACTION_MARKUP = context.window.FRACTION_MARKUP;

vm.runInContext(fs.readFileSync(path.join(root, "math-text-sanitize.js"), "utf8"), context, { filename: "math-text-sanitize.js" });
const { sanitizeQuestion } = context.window.MATH_TEXT_SANITIZE;
const { slashToFracMarkup } = context.window.FRACTION_MARKUP;

vm.runInContext(fs.readFileSync(path.join(root, "quiz-variant-bank.js"), "utf8"), context, { filename: "quiz-variant-bank.js" });
const bank = context.window.QUIZ_VARIANT_BANK;

const fields = ["text", "tip", "trap", "concept", "formula"];
let converted = 0;

for (const presets of Object.values(bank)) {
  for (let i = 0; i < presets.length; i++) {
    const before = JSON.stringify(presets[i]);
    presets[i] = sanitizeQuestion(presets[i]);
    if (JSON.stringify(presets[i]) !== before) converted += 1;
  }
}

fs.writeFileSync(
  path.join(root, "quiz-variant-bank.js"),
  `window.QUIZ_VARIANT_BANK = ${JSON.stringify(bank, null, 2)};\n`,
  "utf8"
);

const lecturePath = path.join(root, "lecture-taxonomy.js");
vm.runInContext(fs.readFileSync(lecturePath, "utf8"), context, { filename: "lecture-taxonomy.js" });
const lectures = context.window.LECTURE_TAXONOMY || {};
let lectureFields = 0;

for (const lecture of Object.values(lectures)) {
  for (const block of lecture.blocks || []) {
    if (block.type === "example") {
      if (block.q) { block.q = slashToFracMarkup(block.q); lectureFields += 1; }
      if (block.a) { block.a = slashToFracMarkup(block.a); lectureFields += 1; }
    }
    if (block.type === "pitfall" && block.html) block.html = slashToFracMarkup(block.html);
    if (block.type === "formula" && block.content) block.content = slashToFracMarkup(block.content);
    if (block.type === "text" && block.html) block.html = slashToFracMarkup(block.html);
  }
}

fs.writeFileSync(lecturePath, `window.LECTURE_TAXONOMY = ${JSON.stringify(lectures, null, 2)};\n`, "utf8");

const slashFrac = s => typeof s === "string" && /[^\s]\/[^\s]/.test(s) && !/\[\[frac:/.test(s);
let residual = 0;
for (const presets of Object.values(bank)) {
  for (const q of presets) {
    for (const f of fields) if (slashFrac(q[f])) residual += 1;
    q.choices?.forEach(c => { if (slashFrac(c)) residual += 1; });
    q.steps?.forEach(s => { if (slashFrac(s)) residual += 1; });
  }
}

console.log(`Bank: ${converted} presets updated; residual slash-fraction fields: ${residual}`);
console.log(`Lecture: ${Object.keys(lectures).length} entries, example fields normalized: ${lectureFields}`);
if (residual) process.exit(1);
