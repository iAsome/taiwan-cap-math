// Cross-check 地科/理化 archive answers vs confirmed-nature-answers.json (106–115).
import fs from "node:fs";
import path from "node:path";
import {
  root, years, letterToIndex, examSections, matchOfficialNum, loadArchive, stemFingerprint, norm
} from "./nature-exam-utils.mjs";

const answersPath = path.join(root, "理化會考作戰室", "official-data", "confirmed-nature-answers.json");
const confirmed = JSON.parse(fs.readFileSync(answersPath, "utf8"));
const pdfRoot = path.join(root, "地科會考作戰室", "official-data");
const overrides = JSON.parse(fs.readFileSync(path.join(root, "tools", "nature-diagram-overrides.json"), "utf8"));

const SUBJECTS = [
  { id: "地科", dir: "地科會考作戰室", dataFile: "earth-data.js" },
  { id: "理化", dir: "理化會考作戰室", dataFile: "data.js" },
];

function overrideNum(subDir, q, year) {
  const map = overrides[subDir] ?? {};
  for (const [key, rec] of Object.entries(map)) {
    const [y, prefix] = key.split(":");
    if (+y === year && q.text.startsWith(prefix)) return rec;
  }
  return null;
}

function officialNum(sections, sub, q, year) {
  const ov = overrideNum(sub.dir, q, year);
  return matchOfficialNum(sections, q) ?? ov?.num ?? null;
}

let total = 0, ok = 0;
const mismatches = [];

for (const sub of SUBJECTS) {
  const archive = loadArchive(sub.dir, sub.dataFile);
  for (const year of years) {
    const examText = fs.readFileSync(path.join(pdfRoot, String(year), `${year}-exam.txt`), "utf8");
    const sections = examSections(examText);
    const yearAnswers = confirmed[String(year)];
    if (!yearAnswers) throw new Error(`missing confirmed answers for ${year}`);

    for (const q of archive[year].questions) {
      const ov = overrideNum(sub.dir, q, year);
      const num = officialNum(sections, sub, q, year);
      if (num == null) continue;
      const sec = sections.find(s => s.num === num);
      const stem = stemFingerprint(q.text);
      if (!sec || (stem.length >= 12 && !norm(sec.raw).includes(stem.slice(0, 20)))) continue;
      const ansYear = ov?.cropYear ?? year;
      total++;
      const yearAnswers = confirmed[String(ansYear)];
      const official = yearAnswers?.[String(num)];
      if (!official) {
        mismatches.push({ sub: sub.id, year, num, issue: "no official answer" });
        continue;
      }
      const want = letterToIndex[official];
      if (q.answer !== want) mismatches.push({ sub: sub.id, year, num, got: q.answer, want, official });
      else ok++;
    }
  }
}

if (mismatches.length) {
  console.error("mismatches:", JSON.stringify(mismatches.slice(0, 10), null, 2));
  if (mismatches.length > 10) console.error(`... and ${mismatches.length - 10} more`);
  process.exit(1);
}
console.log(`nature archive answers: ${ok}/${total} pass`);
process.exit(0);
