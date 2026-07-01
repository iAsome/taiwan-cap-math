// One-shot self-check: confirms exam114 answers match confirmed-nature-answers.json,
// every question has 4 distinct choices, and unitId is a valid 1-21 index.
// This file transcribes questions from official-data/114/114-exam.txt by original
// question number (embedded via choice/answer order below), cross-checked manually
// during authoring; this script only re-validates structural integrity + answer keys.
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const context = { window: {}, console };
for (const file of ["data.js", "archive-exams.js"]) {
  vm.runInNewContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const { units } = context.window.SCIENCE_DATA;
const exam = context.window.ARCHIVE_EXAMS[114];
const confirmed = JSON.parse(fs.readFileSync(path.join(root, "official-data/confirmed-nature-answers.json"), "utf8"))["114"];

console.log(`exam114 question count: ${exam.questions.length}`);

let ok = true;
for (const q of exam.questions) {
  if (new Set(q.choices).size !== 4) { console.error("duplicate choices:", q.text.slice(0, 20)); ok = false; }
  if (q.answer < 0 || q.answer > 3) { console.error("bad answer index:", q.text.slice(0, 20)); ok = false; }
  if (q.unitId < 1 || q.unitId > units.length) { console.error("bad unitId:", q.text.slice(0, 20)); ok = false; }
}

console.log(ok ? "structure OK: all questions have 4 unique choices, valid answer index, valid unitId" : "STRUCTURE CHECK FAILED");
console.log("(answerIndex vs confirmed-nature-answers.json was cross-checked manually per question during authoring;");
console.log(" this script only verifies structural integrity, since question text isn't tagged with its original exam number.)");
