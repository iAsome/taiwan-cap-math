import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

export const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
export const shared = path.join(root, "shared");

export const SUBJECTS = [
  { dir: "\u6578\u5b78\u6703\u8003\u4f5c\u6230\u5ba4", code: "math", data: "data.js", extra: ["analysis-data.js", "quiz-taxonomy.js", "quiz-variant-bank.js", "quiz-variants.js", "math-text-sanitize.js"] },
  { dir: "\u570b\u6587\u6703\u8003\u4f5c\u6230\u5ba4", code: "chinese", data: "data.js", extra: ["quiz-taxonomy.js"] },
  { dir: "\u82f1\u6587\u6703\u8003\u4f5c\u6230\u5ba4", code: "english", data: "english-data.js", extra: ["quiz-taxonomy.js"] },
  { dir: "\u7406\u5316\u6703\u8003\u4f5c\u6230\u5ba4", code: "physics-chem", data: "data.js", extra: ["quiz-taxonomy.js"] },
  { dir: "\u751f\u7269\u6703\u8003\u4f5c\u6230\u5ba4", code: "biology", data: "data.js", extra: ["quiz-taxonomy.js"] },
  { dir: "\u5730\u79d1\u6703\u8003\u4f5c\u6230\u5ba4", code: "earth", data: "earth-data.js", extra: ["quiz-taxonomy.js"] },
  { dir: "\u6b77\u53f2\u6703\u8003\u4f5c\u6230\u5ba4", code: "history", data: "history-data.js", extra: ["quiz-taxonomy.js"] },
  { dir: "\u5730\u7406\u6703\u8003\u4f5c\u6230\u5ba4", code: "geography", data: "geography-data.js", extra: ["quiz-taxonomy.js"] },
  { dir: "\u516c\u6c11\u6703\u8003\u4f5c\u6230\u5ba4", code: "civics", data: "civics-data.js", extra: ["quiz-taxonomy.js"] }
];

export function subjectBase(sub) {
  return path.join(root, sub.dir);
}

export function questionBlob(q) {
  return [
    q?.text,
    q?.formula,
    q?.concept,
    q?.tip,
    q?.trap,
    q?.taxonomyTopic,
    q?.taxonomySection,
    ...(q?.choices || []),
    ...(q?.steps || [])
  ].filter(Boolean).join(" ");
}

export function hasStudentImageMarkup(value) {
  return /<(?:img|svg)\b|class=["'](?:question|lecture)-diagram["']/i.test(String(value || ""));
}

export function loadDiagramStack() {
  const sandbox = {
    window: {},
    console,
    Math,
    Date,
    FRACTION_MARKUP: { normalizeChoice: s => String(s), fillMcValues: (c, d) => [c, ...d], normalizeExamText: s => String(s) }
  };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(shared, "fraction-markup.js"), "utf8"), sandbox, { filename: "fraction-markup.js" });
  vm.runInContext(fs.readFileSync(path.join(shared, "diagram-attach.js"), "utf8"), sandbox, { filename: "diagram-attach.js" });
  Object.assign(sandbox, sandbox.window);
  return sandbox;
}

export function loadSubject(sub, stack = loadDiagramStack()) {
  const base = subjectBase(sub);
  const sandbox = {
    window: {},
    console,
    Math,
    Date,
    FRACTION_MARKUP: stack.FRACTION_MARKUP,
    DIAGRAM_ATTACH: stack.DIAGRAM_ATTACH
  };
  vm.createContext(sandbox);
  vm.runInContext("window.FRACTION_MARKUP = FRACTION_MARKUP; window.DIAGRAM_ATTACH = DIAGRAM_ATTACH;", sandbox);
  for (const file of [sub.data, ...sub.extra, "questions.js"]) {
    const p = path.join(base, file);
    if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, "utf8"), sandbox, { filename: file });
  }
  Object.assign(sandbox, sandbox.window);
  return sandbox;
}

function mathTaxonomyContext(w, key) {
  const [quizId, topicId] = String(key || "").split("/");
  for (const sec of w.QUIZ_TAXONOMY?.[quizId]?.sections || []) {
    const topic = sec.topics?.find(t => t.id === topicId);
    if (topic) return { taxonomyKey: key, taxonomyTopic: topic.title, taxonomySection: sec.title };
  }
  return { taxonomyKey: key };
}

export function collectQuestions(w, code) {
  const items = [];
  const add = (source, questions, meta = {}) => {
    for (const q of questions || []) {
      if (q && typeof q === "object") items.push({ source, q: { ...q, ...meta } });
    }
  };

  if (code === "math") {
    for (const [key, presets] of Object.entries(w.QUIZ_VARIANT_BANK || {})) {
      add(`variant-bank:${key}`, presets, mathTaxonomyContext(w, key));
    }
  }

  if (w.EXAM_ENGINE?.generate) {
    for (let seed = 1; seed <= 3; seed++) {
      try { add(`exam:${seed}`, w.EXAM_ENGINE.generate(seed, 2)?.questions); } catch { /* optional generator */ }
    }
  }

  if (w.EXAM_ENGINE?.quizCatalog && w.EXAM_ENGINE?.generateQuiz) {
    for (const quiz of w.EXAM_ENGINE.quizCatalog) {
      try { add(`quiz:${quiz.id}`, w.EXAM_ENGINE.generateQuiz(quiz.id, 1001)?.questions); } catch { /* audited elsewhere */ }
    }
  }

  if (code === "math" && w.EXAM_ENGINE?.generateTopicDrill) {
    for (const [quizId, quiz] of Object.entries(w.QUIZ_TAXONOMY || {})) {
      const topics = quiz.sections?.flatMap(sec => sec.topics || []) || [];
      if (!topics[0]) continue;
      try {
        const drill = w.EXAM_ENGINE.generateTopicDrill(quizId, topics[0].id, 42, 1);
        add(`topic-drill:${quizId}/${topics[0].id}`, drill.questions || drill);
      } catch { /* optional generator */ }
    }
  }

  return items;
}
