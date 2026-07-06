import fs from "node:fs";
import path from "node:path";
import {
  SUBJECTS,
  collectQuestions,
  hasStudentImageMarkup,
  loadTextOnlyStack,
  loadSubject,
  questionBlob,
  subjectBase
} from "./text-only-audit-lib.mjs";

const stack = loadTextOnlyStack();
const failures = [];

function fail(subject, reason, detail = "") {
  failures.push({ subject, reason, detail: String(detail).slice(0, 160) });
}

const sample = stack.TEXT_ONLY_POLICY.normalizeQuestion({
  text: "如右圖，一個半徑 r = 5 的圓，求面積。",
  diagram: "<svg></svg>",
  diagramSpec: { verified: true }
}, "math");
if ("diagram" in sample || "diagramSpec" in sample) fail("shared", "normalizeQuestion-kept-visual", JSON.stringify(sample));
if (sample.visualPolicy !== "text-only") fail("shared", "missing-text-only-policy", JSON.stringify(sample));

for (const sub of SUBJECTS) {
  const base = subjectBase(sub);
  const appFile = path.join(base, "app.js");
  const cssFile = path.join(base, "styles.css");
  const html = fs.readFileSync(path.join(base, "index.html"), "utf8");
  const app = fs.readFileSync(appFile, "utf8");
  const css = fs.readFileSync(cssFile, "utf8");

  if (/\$\{(?:q|first)\.diagram\s*\|\|\s*""\}/.test(app)) fail(sub.code, "app-renders-q-diagram", appFile);
  if (!html.includes("text-only-policy.js")) fail(sub.code, "missing-text-only-policy-script", path.join(base, "index.html"));
  if (!app.includes(`prepareTextOnlyExam?.(assessment, "${sub.code}")`)) fail(sub.code, "launchAssessment-not-text-only", appFile);
  if (!app.includes("${textOnlyPauseNotice}")) fail(sub.code, "missing-paused-notice", appFile);
  if (!css.includes("Text-only visual safety") || !css.includes("display: none !important")) fail(sub.code, "missing-css-image-safety", cssFile);
  if (/diagram-(?:attach|engine|infer|overrides)\.js/.test(html)) fail(sub.code, "retired-diagram-script-loaded", path.join(base, "index.html"));
  if (/question-diagram|lecture-diagram|diagram-dim-label|shared-figure-question/.test(app + css)) fail(sub.code, "retired-diagram-class-present", appFile);

  const w = loadSubject(sub, stack);
  const items = collectQuestions(w, sub.code);
  const rawQuestions = items.map(item => item.q);
  const prepared = stack.TEXT_ONLY_POLICY.prepareTextOnlyExam({ questions: rawQuestions }, sub.code);

  for (const q of prepared.questions || []) {
    if ("diagram" in q || "diagramSpec" in q) fail(sub.code, "prepared-question-kept-visual", q.text);
    if (q.visualTextStatus === "needs-text") fail(sub.code, "image-dependent-question-kept", q.text);
    if (hasStudentImageMarkup(questionBlob(q))) fail(sub.code, "image-markup-in-question-text", q.text);
  }

  for (const { source, q } of items) {
    const out = stack.TEXT_ONLY_POLICY.normalizeQuestion({ ...q }, sub.code);
    if ("diagram" in out || "diagramSpec" in out) fail(sub.code, `normalize-kept-visual:${source}`, out.text);
    if (hasStudentImageMarkup(questionBlob(out))) fail(sub.code, `normalize-kept-image-markup:${source}`, out.text);
  }
}

if (failures.length) {
  console.error(`no-student-images: ${failures.length} failure(s)`);
  for (const f of failures.slice(0, 30)) console.error(`  [${f.subject}] ${f.reason}: ${f.detail}`);
  process.exit(1);
}

console.log("OK: no student-facing question/lecture images are rendered; text-only policy is active.");
