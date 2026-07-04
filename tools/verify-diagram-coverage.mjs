// Phase 0: every question that needs a diagram must attach non-empty SVG.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const shared = path.join(root, "shared");

const SUBJECTS = [
  { dir: "數學會考作戰室", code: "math", data: "data.js", extra: ["quiz-taxonomy.js", "quiz-variant-bank.js"] },
  { dir: "國文會考作戰室", code: "chinese", data: "data.js", extra: ["quiz-taxonomy.js"] },
  { dir: "英文會考作戰室", code: "english", data: "english-data.js", extra: ["quiz-taxonomy.js"] },
  { dir: "理化會考作戰室", code: "physics-chem", data: "data.js", extra: ["quiz-taxonomy.js"] },
  { dir: "生物會考作戰室", code: "biology", data: "data.js", extra: ["quiz-taxonomy.js"] },
  { dir: "地科會考作戰室", code: "earth", data: "earth-data.js", extra: ["quiz-taxonomy.js"] },
  { dir: "歷史會考作戰室", code: "history", data: "history-data.js", extra: ["quiz-taxonomy.js"] },
  { dir: "地理會考作戰室", code: "geography", data: "geography-data.js", extra: ["quiz-taxonomy.js"] },
  { dir: "公民會考作戰室", code: "civics", data: "civics-data.js", extra: ["quiz-taxonomy.js"] }
];

function loadDiagramStack() {
  const sandbox = {
    window: {},
    console,
    Math,
    Date,
    FRACTION_MARKUP: {
      normalizeChoice: s => String(s),
      fillMcValues: (c, d) => [c, ...d],
      normalizeExamText: s => String(s)
    }
  };
  vm.createContext(sandbox);
  for (const file of ["diagram-engine.js", "diagram-infer.js", "diagram-overrides.js", "diagram-attach.js"]) {
    vm.runInContext(fs.readFileSync(path.join(shared, file), "utf8"), sandbox, { filename: file });
  }
  return sandbox.window;
}

function loadSubject(dir, dataFile, extra = []) {
  const base = path.join(root, dir);
  const sandbox = {
    window: {},
    console,
    Math,
    Date,
    FRACTION_MARKUP: { normalizeChoice: s => String(s), fillMcValues: (c, d) => [c, ...d], normalizeExamText: s => String(s) }
  };
  vm.createContext(sandbox);
  for (const f of [dataFile, ...extra, "questions.js"]) {
    const p = path.join(base, f);
    if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, "utf8"), sandbox, { filename: f });
  }
  return sandbox.window;
}

function blob(q) {
  return [q.text, ...(q.choices || []), ...(q.steps || [])].filter(Boolean).join(" ");
}

function attach(stack, q, code) {
  return stack.DIAGRAM_ATTACH.attachDiagram({ ...q }, code);
}

const stack = loadDiagramStack();
const { DIAGRAM_INFER } = stack;
const gaps = [];
let checked = 0;
let hit = 0;

for (const sub of SUBJECTS) {
  const w = loadSubject(sub.dir, sub.data, sub.extra);

  if (sub.code === "math") {
    const bank = w.QUIZ_VARIANT_BANK || {};
    for (const [key, presets] of Object.entries(bank)) {
      const [quizId, topicId] = key.split("/");
      let topicTitle = "", sectionTitle = "";
      for (const sec of w.QUIZ_TAXONOMY?.[quizId]?.sections || []) {
        const t = sec.topics?.find(x => x.id === topicId);
        if (t) { topicTitle = t.title; sectionTitle = sec.title; break; }
      }
      for (const preset of presets) {
        checked++;
        const q = { ...preset, taxonomyKey: key, taxonomyTopic: topicTitle, taxonomySection: sectionTitle };
        const ctx = { subject: "math", topicTitle, sectionTitle, taxonomyKey: key };
        if (!DIAGRAM_INFER.needsDiagram(blob(q), "math", ctx)) continue;
        const out = attach(stack, q, "math");
        if (out.diagram?.includes("<svg")) hit++;
        else gaps.push({ subject: sub.code, key, text: q.text.slice(0, 72) });
      }
    }
    const lecPath = path.join(root, sub.dir, "lecture-taxonomy.js");
    if (fs.existsSync(lecPath)) {
      const lecWin = loadSubject(sub.dir, sub.data, ["lecture-taxonomy.js"]);
      for (const [key, lecture] of Object.entries(lecWin.LECTURE_TAXONOMY || {})) {
        const ex = lecture.blocks?.find(b => b.type === "example");
        if (!ex) continue;
        checked++;
        const ctx = { subject: "math", topicTitle: lecture.title, sectionTitle: lecture.section, taxonomyKey: key };
        if (!DIAGRAM_INFER.needsDiagram(ex.q, "math", ctx)) continue;
        const html = stack.DIAGRAM_ATTACH.attachDiagramText(ex.q, "math", ctx);
        if (html.includes("<svg")) hit++;
        else gaps.push({ subject: sub.code, key: `lecture:${key}`, text: ex.q.slice(0, 72) });
      }
    }
    continue;
  }

  if (w.EXAM_ENGINE?.generate) {
    for (let seed = 1; seed <= 5; seed++) {
      let exam;
      try { exam = w.EXAM_ENGINE.generate(seed, 2); } catch { break; }
      for (const q of exam.questions || []) {
        checked++;
        if (!DIAGRAM_INFER.needsDiagram(blob(q), sub.code, {})) continue;
        const out = attach(stack, q, sub.code);
        if (out.diagram?.includes("<svg")) hit++;
        else gaps.push({ subject: sub.code, key: `mock-${seed}`, text: q.text.slice(0, 72) });
      }
    }
  }
}

if (gaps.length) {
  console.error(`diagram-coverage: ${gaps.length} gap(s) (${hit} ok / ${checked} checked)`);
  gaps.slice(0, 40).forEach(g => console.error(`  [${g.subject}] ${g.key}: ${g.text}`));
  process.exit(1);
}
console.log(`OK: diagram-coverage ${checked} checked, ${hit} with SVG`);
