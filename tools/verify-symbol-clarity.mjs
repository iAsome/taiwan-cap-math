import fs from "node:fs";
import path from "node:path";
import {
  SUBJECTS,
  collectQuestions,
  loadDiagramStack,
  loadSubject,
  questionBlob,
  subjectBase
} from "./text-only-audit-lib.mjs";

const math = SUBJECTS.find(s => s.code === "math");
const stack = loadDiagramStack();
const failures = [];
const app = fs.readFileSync(path.join(subjectBase(math), "app.js"), "utf8");

for (const needle of ["COMMON_SYMBOLS", "unitSymbolHtml", "questionSymbolHtml", "symbol-note"]) {
  if (!app.includes(needle)) failures.push(`math-app-missing:${needle}`);
}

const samples = [
  {
    text: "\u4e00\u500b\u5713\u7684\u534a\u5f91 r \u70ba 5 \u516c\u5206\uff0c\u6c42\u9762\u7a4d\u3002",
    formula: "A = \u03c0r^2",
    steps: ["\u534a\u5f91 r = 5\uff0c\u4ee3\u5165\u9762\u7a4d\u516c\u5f0f\u3002"],
    expect: "r"
  },
  {
    text: "\u8a2d x \u70ba\u884c\u99db\u516c\u91cc\u6578\uff0cy \u70ba\u7e3d\u8cbb\u7528\uff0c\u5efa\u7acb\u95dc\u4fc2\u5f0f\u3002",
    formula: "y = 20x + 80",
    steps: ["\u672a\u77e5\u6578 x \u4ee3\u8868\u516c\u91cc\u6578\uff0c\u672a\u77e5\u6578 y \u4ee3\u8868\u7e3d\u8cbb\u7528\u3002"],
    expect: "x"
  }
];

for (const q of samples) {
  const out = stack.DIAGRAM_ATTACH.attachDiagram(q, "math");
  if (!out.symbolNotes?.some(note => note.startsWith(q.expect))) {
    failures.push(`sample-missing-symbol-note:${q.expect}`);
  }
}

const symbolAssignRe = /(^|[\s\u3002\uff0c\uff1b;,.、])([xyhrlmnkabc])\s*[=＝]/i;
const w = loadSubject(math, stack);
let checked = 0;
for (const { source, q } of collectQuestions(w, "math")) {
  const text = questionBlob(q);
  if (!symbolAssignRe.test(text)) continue;
  checked++;
  const out = stack.DIAGRAM_ATTACH.attachDiagram({ ...q }, "math");
  if (out.visualTextStatus === "needs-text") continue;
  if (!out.symbolNotes?.length) failures.push(`question-missing-symbol-note:${source}:${String(q.text || "").slice(0, 80)}`);
}

if (failures.length) {
  console.error(`symbol-clarity: ${failures.length} failure(s)`);
  for (const f of failures.slice(0, 30)) console.error(`  ${f}`);
  process.exit(1);
}

console.log(`OK: symbol clarity active; ${checked} math item(s) with explicit symbol assignment checked.`);
