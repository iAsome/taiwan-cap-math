// Audit 地科/理化 archive coverage vs official nature exam Q# (106–115).
import fs from "node:fs";
import path from "node:path";
import {
  root, years, examSections, matchOfficialNum, loadArchive
} from "./nature-exam-utils.mjs";

const outPath = path.join(root, "tests", "nature-subject-audit.json");
const pdfRoot = path.join(root, "地科會考作戰室", "official-data");

const SUBJECTS = [
  { id: "地科", dir: "地科會考作戰室", dataFile: "earth-data.js" },
  { id: "理化", dir: "理化會考作戰室", dataFile: "data.js" },
  { id: "生物", dir: "生物會考作戰室", dataFile: "data.js" },
];

const gapEnrich = JSON.parse(
  fs.readFileSync(path.join(root, "理化會考作戰室", "official-data", "gap-enrichments.json"), "utf8")
);

function buildCoverage(archive, sections) {
  const covered = new Set();
  const unmatched = [];
  for (const q of archive.questions) {
    const num = matchOfficialNum(sections, q);
    if (num == null) unmatched.push(q.text.slice(0, 40));
    else covered.add(num);
  }
  return { covered, unmatched };
}

const report = { generatedAt: new Date().toISOString(), years: {}, summary: {} };
let unmatchedTotal = 0;
let gapMissing = [];

for (const year of years) {
  const examText = fs.readFileSync(path.join(pdfRoot, String(year), `${year}-exam.txt`), "utf8");
  const sections = examSections(examText);

  const archives = {};
  const coverage = {};
  for (const sub of SUBJECTS) {
    archives[sub.id] = loadArchive(sub.dir, sub.dataFile);
    coverage[sub.id] = buildCoverage(archives[sub.id][year], sections);
    unmatchedTotal += coverage[sub.id].unmatched.length;
  }

  const yearGap = gapEnrich[String(year)] ?? {};
  for (const num of Object.keys(yearGap)) {
    if (!coverage.理化.covered.has(+num))
      gapMissing.push({ year, num: +num });
  }

  report.years[year] = {
    totalOfficial: sections.length,
    archiveCounts: Object.fromEntries(SUBJECTS.map(s => [s.id, coverage[s.id].covered.size])),
    unmatchedArchive: Object.fromEntries(SUBJECTS.map(s => [s.id, coverage[s.id].unmatched.length])),
    physGapEnrichmentMissing: gapMissing.filter(g => g.year === year),
  };
}

report.summary = {
  unmatchedArchiveTotal: unmatchedTotal,
  physGapEnrichmentMissing: gapMissing.length,
};

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(report, null, 2));

console.log(`audit: unmatched archive ${unmatchedTotal}, phys gap-enrichment missing ${gapMissing.length}`);
console.log(`wrote ${outPath}`);
process.exit(0);
