import fs from "node:fs";
import path from "node:path";
import {
  SUBJECTS,
  collectQuestions,
  loadDiagramStack,
  loadSubject,
  subjectBase
} from "./text-only-audit-lib.mjs";
import { auditQuestion } from "./symbol-stem-lib.mjs";

const math = SUBJECTS.find(s => s.code === "math");
const stack = loadDiagramStack();
const failures = [];
const app = fs.readFileSync(path.join(subjectBase(math), "app.js"), "utf8");

for (const needle of ["COMMON_SYMBOLS", "unitSymbolHtml", "questionSymbolHtml", "symbol-note"]) {
  if (!app.includes(needle)) failures.push(`math-app-missing:${needle}`);
}

const samples = [
  {
    text: "一個圓的半徑 r 為 5 公分，求面積。",
    formula: "A = πr^2",
    steps: ["半徑 r = 5，代入面積公式。"],
    expect: "r"
  },
  {
    text: "設 x 為行駛公里數，y 為總費用，建立關係式。",
    formula: "y = 20x + 80",
    steps: ["未知數 x 代表公里數，未知數 y 代表總費用。"],
    expect: "x"
  }
];

for (const q of samples) {
  const { ok } = auditQuestion(q, qq => stack.DIAGRAM_ATTACH.attachDiagram(qq, "math"));
  if (!ok) failures.push(`sample-failed:${q.expect}`);
}

const w = loadSubject(math, stack);
let checked = 0;
for (const { source, q } of collectQuestions(w, "math")) {
  const out = stack.DIAGRAM_ATTACH.attachDiagram({ ...q }, "math");
  if (out.visualTextStatus === "needs-text") continue;
  checked++;
  const { ok, reason, letters } = auditQuestion(q, qq => stack.DIAGRAM_ATTACH.attachDiagram(qq, "math"));
  if (!ok) failures.push(`question-${reason}:${letters?.join("+") || "?"}:${source}:${String(q.text || "").slice(0, 80)}`);
}

if (failures.length) {
  console.error(`symbol-clarity: ${failures.length} failure(s)`);
  for (const f of failures.slice(0, 30)) console.error(`  ${f}`);
  process.exit(1);
}

console.log(`OK: symbol clarity active; ${checked} math item(s) checked with shared symbolStemOk rules.`);
