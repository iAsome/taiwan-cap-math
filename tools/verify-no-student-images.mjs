import fs from "node:fs";
import path from "node:path";
import {
  SUBJECTS,
  collectQuestions,
  hasStudentImageMarkup,
  loadDiagramStack,
  loadSubject,
  questionBlob,
  root,
  subjectBase
} from "./text-only-audit-lib.mjs";

const stack = loadDiagramStack();
const failures = [];

function fail(subject, reason, detail = "") {
  failures.push({ subject, reason, detail: String(detail).slice(0, 160) });
}

const sample = stack.DIAGRAM_ATTACH.attachDiagram({
  text: "\u5982\u53f3\u5716\uff0c\u4e00\u500b\u534a\u5f91 r = 5 \u7684\u5713\uff0c\u6c42\u9762\u7a4d\u3002",
  diagram: "<svg></svg>",
  diagramSpec: { verified: true }
}, "math");
if ("diagram" in sample || "diagramSpec" in sample) fail("shared", "attachDiagram-kept-visual", JSON.stringify(sample));
if (sample.visualPolicy !== "text-only") fail("shared", "missing-text-only-policy", JSON.stringify(sample));
if (stack.DIAGRAM_ATTACH.attachDiagramText("triangle", "math").includes("<svg")) fail("shared", "attachDiagramText-returned-svg");

for (const sub of SUBJECTS) {
  const base = subjectBase(sub);
  const appFile = path.join(base, "app.js");
  const cssFile = path.join(base, "styles.css");
  const app = fs.readFileSync(appFile, "utf8");
  const css = fs.readFileSync(cssFile, "utf8");

  if (/\$\{(?:q|first)\.diagram\s*\|\|\s*""\}/.test(app)) fail(sub.code, "app-renders-q-diagram", appFile);
  if (!app.includes(`prepareTextOnlyExam?.(assessment, "${sub.code}")`)) fail(sub.code, "launchAssessment-not-text-only", appFile);
  if (!app.includes("${textOnlyPauseNotice}")) fail(sub.code, "missing-paused-notice", appFile);
  if (!css.includes("Text-only visual safety") || !css.includes("display: none !important")) fail(sub.code, "missing-css-image-safety", cssFile);
  if (sub.code === "math" && !app.includes("const renderLectureDiagram = () => \"\";")) fail(sub.code, "lecture-diagram-renderer-enabled", appFile);

  const w = loadSubject(sub, stack);
  const items = collectQuestions(w, sub.code);
  const rawQuestions = items.map(item => item.q);
  const prepared = stack.DIAGRAM_ATTACH.prepareTextOnlyExam({ questions: rawQuestions }, sub.code);

  for (const q of prepared.questions || []) {
    if ("diagram" in q || "diagramSpec" in q) fail(sub.code, "prepared-question-kept-visual", q.text);
    if (q.visualTextStatus === "needs-text") fail(sub.code, "image-dependent-question-kept", q.text);
    if (hasStudentImageMarkup(questionBlob(q))) fail(sub.code, "image-markup-in-question-text", q.text);
  }

  for (const { source, q } of items) {
    const out = stack.DIAGRAM_ATTACH.attachDiagram({ ...q }, sub.code);
    if ("diagram" in out || "diagramSpec" in out) fail(sub.code, `attach-kept-visual:${source}`, out.text);
    if (hasStudentImageMarkup(questionBlob(out))) fail(sub.code, `attach-kept-image-markup:${source}`, out.text);
  }
}

if (failures.length) {
  console.error(`no-student-images: ${failures.length} failure(s)`);
  for (const f of failures.slice(0, 30)) console.error(`  [${f.subject}] ${f.reason}: ${f.detail}`);
  process.exit(1);
}

console.log("OK: no student-facing question/lecture images are rendered; text-only policy is active.");
