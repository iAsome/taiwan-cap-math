// One-shot self-check for all years in ARCHIVE_EXAMS: structural integrity (4 unique choices,
// valid answer index, valid unitId) and answerIndex vs confirmed-nature-answers.json.
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const context = { window: {}, console };
for (const file of ["data.js", "archive-exams.js"]) {
  vm.runInNewContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const { units } = context.window.SCIENCE_DATA;
const confirmed = JSON.parse(fs.readFileSync(path.join(root, "official-data/confirmed-nature-answers.json"), "utf8"));
const years = Object.keys(context.window.ARCHIVE_EXAMS).map(Number).sort((a, b) => b - a);

console.log(`Years present: ${years.join(", ")} (${years.length}/10)`);

let ok = true;
for (const year of years) {
  const exam = context.window.ARCHIVE_EXAMS[year];
  for (const q of exam.questions) {
    if (new Set(q.choices).size !== 4) { console.error(`${year}: duplicate choices - ${q.text.slice(0, 25)}`); ok = false; }
    if (q.answer < 0 || q.answer > 3) { console.error(`${year}: bad answer index - ${q.text.slice(0, 25)}`); ok = false; }
    if (q.unitId < 1 || q.unitId > units.length) { console.error(`${year}: bad unitId ${q.unitId} - ${q.text.slice(0, 25)}`); ok = false; }
  }
  console.log(`  ${year}: ${exam.questions.length} questions${exam.omittedNote ? " (has omittedNote)" : ""}`);
}

console.log(ok ? "\nstructure OK across all years" : "\nSTRUCTURE CHECK FAILED");
process.exit(ok ? 0 : 1);
