// Phase 0 gap inventory: compare each subject's ARCHIVE_EXAMS vs official scope targets.
// Parses omittedNote for official question numbers; exit 1 if any year is short.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const years = [106, 107, 108, 109, 110, 111, 112, 113, 114, 115];

const OFFICIAL_MC = {
  國文: y => (y <= 110 ? 48 : 42),
  英文: y => (y <= 110 ? 41 : 43),
  數學: y => (y <= 110 ? 28 : 27),
};

const SUBJECTS = [
  { id: "國文", dir: "國文會考作戰室", scripts: ["data.js", "archive-exams.js"], target: OFFICIAL_MC.國文 },
  { id: "數學", dir: "數學會考作戰室", scripts: ["data.js", "archive-exams.js"], target: OFFICIAL_MC.數學 },
  { id: "英文", dir: "英文會考作戰室", scripts: ["english-data.js", "archive-exams.js"], target: OFFICIAL_MC.英文 },
  { id: "地科", dir: "地科會考作戰室", scripts: ["earth-data.js", "archive-exams.js"], target: null },
  { id: "理化", dir: "理化會考作戰室", scripts: ["data.js", "archive-exams.js"], target: null },
  { id: "生物", dir: "生物會考作戰室", scripts: ["data.js", "archive-exams.js"], target: null },
  { id: "歷史", dir: "歷史會考作戰室", scripts: ["history-data.js", "archive-exams.js"], target: null },
  { id: "地理", dir: "地理會考作戰室", scripts: ["geography-data.js", "archive-exams.js"], target: null },
  { id: "公民", dir: "公民會考作戰室", scripts: ["civics-data.js", "archive-exams.js"], target: null },
];

function loadArchive(subject) {
  const sandbox = { window: {}, console, Date, Math };
  vm.createContext(sandbox);
  for (const file of subject.scripts) {
    vm.runInContext(fs.readFileSync(path.join(root, subject.dir, file), "utf8"), sandbox, { filename: file });
  }
  return sandbox.window.ARCHIVE_EXAMS;
}

/** Extract official question numbers from omittedNote (第N題, 第N（, 、N（, QN). */
function parseOmittedNums(note) {
  if (!note) return [];
  const nums = new Set();
  for (const m of note.matchAll(/第\s*(\d+)\s*[、～\-]\s*(\d+)\s*[題（(]/g)) {
    const a = +m[1], b = +m[2];
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) nums.add(i);
  }
  for (const m of note.matchAll(/(?:第|、)\s*(\d+)\s*[（(]/g)) nums.add(+m[1]);
  for (const m of note.matchAll(/第\s*(\d+)\s*題/g)) nums.add(+m[1]);
  for (const m of note.matchAll(/Q(\d+)/gi)) nums.add(+m[1]);
  return [...nums].sort((a, b) => a - b);
}

/** Social/nature notes often say「另有N題」without listing numbers. */
function parseOmittedCount(note) {
  if (!note) return 0;
  const listed = parseOmittedNums(note).length;
  const vague = [...note.matchAll(/另有\s*(\d+)\s*題/g)].map(m => +m[1]);
  const extra = vague.length ? Math.max(...vague) : 0;
  return Math.max(listed, extra);
}

const report = { generatedAt: new Date().toISOString(), subjects: {}, summary: { totalGap: 0, totalOmittedListed: 0 } };
let failed = false;

for (const sub of SUBJECTS) {
  const archive = loadArchive(sub);
  const subReport = { years: {}, totalArchive: 0, totalTarget: 0, totalGap: 0, hasOmittedNote: 0 };
  for (const year of years) {
    const exam = archive[year];
    const count = exam?.questions?.length ?? 0;
    const omittedNums = parseOmittedNums(exam?.omittedNote);
    const omittedCount = sub.target ? omittedNums.length : parseOmittedCount(exam?.omittedNote);
    const target = sub.target ? sub.target(year) : count + omittedCount;
    const gap = Math.max(0, target - count);
    if (gap > 0 || omittedNums.length > 0 || exam?.omittedNote) {
      if (gap > 0) failed = true;
      if (exam?.omittedNote) subReport.hasOmittedNote++;
    }
    subReport.years[year] = {
      archive: count,
      target,
      gap,
      omittedNums,
      omittedNote: exam?.omittedNote ? exam.omittedNote.slice(0, 120) + (exam.omittedNote.length > 120 ? "…" : "") : null,
    };
    subReport.totalArchive += count;
    subReport.totalTarget += target;
    subReport.totalGap += gap;
    report.summary.totalOmittedListed += omittedNums.length;
  }
  report.summary.totalGap += subReport.totalGap;
  report.subjects[sub.id] = subReport;
}

fs.mkdirSync(path.join(root, "tests"), { recursive: true });
fs.writeFileSync(path.join(root, "tests/archive-gap-report.json"), JSON.stringify(report, null, 2));

console.log("Archive gap inventory (106–115)\n");
console.log("Subject     Archive  Target   Gap   Years w/ omittedNote");
console.log("─".repeat(58));
for (const sub of SUBJECTS) {
  const s = report.subjects[sub.id];
  console.log(
    `${sub.id.padEnd(8)}  ${String(s.totalArchive).padStart(7)}  ${String(s.totalTarget).padStart(7)}  ${String(s.totalGap).padStart(4)}  ${s.hasOmittedNote}`
  );
}
console.log(`\nTotal gap: ${report.summary.totalGap} questions`);
console.log(`Report: tests/archive-gap-report.json`);

if (failed) {
  console.error("\nFAIL: gap inventory shows incomplete archives (math gold standard not met)");
  process.exit(1);
}
console.log("\nOK: all subjects meet official scope targets");
process.exit(0);
