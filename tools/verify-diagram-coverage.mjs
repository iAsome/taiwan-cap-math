// Verify 地科/理化: every image-ref question must have diagram field.
import {
  root, loadArchive, needsDiagram
} from "./nature-exam-utils.mjs";

const SUBJECTS = [
  { id: "地科", dir: "地科會考作戰室", dataFile: "earth-data.js" },
  { id: "理化", dir: "理化會考作戰室", dataFile: "data.js" },
];

const missing = [];

for (const sub of SUBJECTS) {
  const archive = loadArchive(sub.dir, sub.dataFile);
  for (const [year, exam] of Object.entries(archive)) {
    if (typeof exam !== "object" || !exam.questions) continue;
    for (let i = 0; i < exam.questions.length; i++) {
      const q = exam.questions[i];
      if (needsDiagram(q) && !q.diagram)
        missing.push({ sub: sub.id, year, index: i + 1, text: q.text.slice(0, 50) });
    }
  }
}

if (missing.length) {
  console.error(`diagram coverage FAIL: ${missing.length} missing`);
  for (const m of missing.slice(0, 15)) console.error(`  ${m.sub} ${m.year} Q${m.index}: ${m.text}`);
  process.exit(1);
}
console.log("diagram coverage: 地科+理化 image-ref questions 100% have diagram");
process.exit(0);
