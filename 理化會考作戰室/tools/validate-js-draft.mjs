// Validates a raw exam<year>.js draft (mc() call format) against confirmed-nature-answers.json.
// Usage: node tools/validate-js-draft.mjs 108
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";

const year = process.argv[2];
const root = path.resolve(import.meta.dirname, "..");
const confirmed = JSON.parse(fs.readFileSync(path.join(root, "official-data/confirmed-nature-answers.json"), "utf8"))[year];

const sandbox = { console };
sandbox.mc = (unitId, difficulty, text, choices, answerIndex, steps, tip, trap) => ({ unitId, difficulty, text, choices, answerIndex, steps, tip, trap });
vm.createContext(sandbox);
const src = fs.readFileSync(path.join(root, `official-data/${year}/exam-${year}-draft.js`), "utf8");
vm.runInContext(src + `\nthis.__exam = exam${year};`, sandbox);

const exam = sandbox.__exam;
console.log(`${year}: ${exam.length} questions parsed OK`);
let ok = true;
for (const q of exam) {
  if (new Set(q.choices).size !== 4) { console.error(`bad choices (not 4 distinct): ${q.text.slice(0, 20)}`); ok = false; }
  if (q.unitId < 1 || q.unitId > 21) { console.error(`bad unitId ${q.unitId}: ${q.text.slice(0, 20)}`); ok = false; }
  if (q.answerIndex < 0 || q.answerIndex > 3) { console.error(`bad answerIndex: ${q.text.slice(0, 20)}`); ok = false; }
}
console.log(ok ? "structure OK" : "STRUCTURE FAILED");
