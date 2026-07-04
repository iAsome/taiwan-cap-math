// Strict diagram coverage: needsDiagram => SVG + validateSpecLabels; full quizCatalog scan.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const shared = path.join(root, "shared");
const SUFFIX = "\u6703\u8003\u4f5c\u6230\u5ba4";

const SUBJECTS = [
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

const diagramPattern = /數線|絕對值|相反數|正負數|坐標|函數圖|線型函數|二次函數|三角形|全等|相似|畢氏|平行|四邊形|圓|弧|盒狀|統計|機率|樹狀|長條|折線|立體|角柱|角錐|空間/;

// 數學 kind 對照表：題文命中 regex 時，spec.kind 必須是課本正確圖形（specific-first，取第一個命中）
const MATH_KIND_RULES = [
  [/三視圖|俯視圖|正視圖|側視圖/, ["threeView"]],
  [/圓錐/, ["cone"]],
  [/圓柱/, ["cylinder"]],
  [/角錐/, ["pyramid"]],
  [/圓形圖|圓餅/, ["pieChart"]],
  [/直方圖/, ["histogram"]],
  [/扇形|圓心角/, ["sector"]],
  [/二次函數|拋物線/, ["parabola"]],
  [/數線/, ["numberLine"]],
];

function assertMathKind(text, spec, key, gaps) {
  for (const [re, kinds] of MATH_KIND_RULES) {
    if (re.test(text)) {
      if (!kinds.includes(spec?.kind)) {
        gaps.push({ subject: "math", key, reason: `kind-mismatch(${kinds[0]}≠${spec?.kind})`, text: text.slice(0, 72) });
        return false;
      }
      return true;
    }
  }
  return true;
}

function loadDiagramStack() {
  const sandbox = {
    window: {},
    console,
    Math,
    Date,
    FRACTION_MARKUP: { normalizeChoice: s => String(s), fillMcValues: (c, d) => [c, ...d], normalizeExamText: s => String(s) }
  };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(shared, "fraction-markup.js"), "utf8"), sandbox, { filename: "fraction-markup.js" });
  for (const file of ["diagram-engine.js", "diagram-infer.js", "diagram-overrides.js", "diagram-attach.js"]) {
    vm.runInContext(fs.readFileSync(path.join(shared, file), "utf8"), sandbox, { filename: file });
  }
  Object.assign(sandbox, sandbox.window);
  return sandbox;
}

function loadSubject(base, dataFile, extra, stack) {
  const sandbox = {
    window: {},
    console,
    Math,
    Date,
    FRACTION_MARKUP: stack.FRACTION_MARKUP,
    DIAGRAM_ENGINE: stack.DIAGRAM_ENGINE,
    DIAGRAM_INFER: stack.DIAGRAM_INFER,
    DIAGRAM_ATTACH: stack.DIAGRAM_ATTACH,
    DIAGRAM_OVERRIDES: stack.DIAGRAM_OVERRIDES
  };
  vm.createContext(sandbox);
  vm.runInContext(`window.FRACTION_MARKUP = FRACTION_MARKUP; window.DIAGRAM_ENGINE = DIAGRAM_ENGINE; window.DIAGRAM_INFER = DIAGRAM_INFER; window.DIAGRAM_ATTACH = DIAGRAM_ATTACH; window.DIAGRAM_OVERRIDES = DIAGRAM_OVERRIDES;`, sandbox);
  for (const f of [dataFile, ...extra, "questions.js"]) {
    const p = path.join(base, f);
    if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, "utf8"), sandbox, { filename: f });
  }
  if (sandbox.window.MATH_TEXT_SANITIZE) sandbox.MATH_TEXT_SANITIZE = sandbox.window.MATH_TEXT_SANITIZE;
  Object.assign(sandbox, sandbox.window);
  return sandbox;
}

function blob(q) {
  return [q.text, ...(q.choices || []), ...(q.steps || [])].filter(Boolean).join(" ");
}

function ctxFrom(q, code) {
  return {
    subject: code,
    topicTitle: q.taxonomyTopic || q.topicTitle || "",
    sectionTitle: q.taxonomySection || q.sectionTitle || "",
    taxonomyKey: q.taxonomyKey
  };
}

function checkQuestion(stack, q, code, gaps, stats) {
  const text = blob(q);
  const ctx = ctxFrom(q, code);
  if (!stack.DIAGRAM_INFER.needsDiagram(text, code, ctx)) return;
  stats.needs++;
  const out = stack.DIAGRAM_ATTACH.attachDiagram({ ...q }, code);
  if (!out.diagram?.includes("<svg")) {
    gaps.push({ subject: code, key: q.taxonomyKey || q.text?.slice(0, 40), reason: "no-svg", text: q.text?.slice(0, 72) });
    return;
  }
  if (!stack.DIAGRAM_INFER.validateSpecLabels(text, out.diagramSpec)) {
    gaps.push({ subject: code, key: q.taxonomyKey || q.text?.slice(0, 40), reason: "labels", text: q.text?.slice(0, 72), kind: out.diagramSpec?.kind });
    return;
  }
  if (code === "math" && !assertMathKind(text, out.diagramSpec, q.taxonomyKey || q.text?.slice(0, 40), gaps)) return;
  stats.ok++;
}

const stack = loadDiagramStack();
const gaps = [];
const stats = { checked: 0, needs: 0, ok: 0 };

for (const sub of SUBJECTS) {
  const base = path.join(root, sub.dir);
  const w = loadSubject(base, sub.data, sub.extra, stack);

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
        stats.checked++;
        checkQuestion(stack, { ...preset, taxonomyKey: key, taxonomyTopic: topicTitle, taxonomySection: sectionTitle }, "math", gaps, stats);
      }
    }

    if (w.EXAM_ENGINE?.generate) {
      for (let seed = 1; seed <= 5; seed++) {
        const exam = w.EXAM_ENGINE.generate(seed, 2);
        for (const q of exam.questions || []) {
          stats.checked++;
          checkQuestion(stack, q, "math", gaps, stats);
        }
      }
    }
    if (w.EXAM_ENGINE?.generateTopicDrill) {
      const topic = w.QUIZ_TAXONOMY?.["g7-1-c1"]?.sections?.[0]?.topics?.[0];
      if (topic) {
        const drill = w.EXAM_ENGINE.generateTopicDrill("g7-1-c1", topic.id, 42, 1);
        for (const q of drill.questions || drill) {
          stats.checked++;
          checkQuestion(stack, Array.isArray(drill) ? q : q, "math", gaps, stats);
        }
      }
    }

    const lecPath = path.join(base, "lecture-taxonomy.js");
    if (fs.existsSync(lecPath)) {
      const lecWin = loadSubject(base, sub.data, ["lecture-taxonomy.js"], stack);
      for (const [key, lecture] of Object.entries(lecWin.LECTURE_TAXONOMY || {})) {
        if (diagramPattern.test(`${lecture.title}${lecture.section}`)) {
          const block = lecture.blocks?.find(b => b.type === "diagram");
          if (!block?.spec?.kind) {
            gaps.push({ subject: "math", key: `lecture-block:${key}`, reason: "missing-diagram-block", text: lecture.title });
          }
        }
        const ex = lecture.blocks?.find(b => b.type === "example");
        if (ex) {
          stats.checked++;
          const ctx = { subject: "math", topicTitle: lecture.title, sectionTitle: lecture.section, taxonomyKey: key };
          if (stack.DIAGRAM_INFER.needsDiagram(ex.q, "math", ctx)) {
            stats.needs++;
            const html = stack.DIAGRAM_ATTACH.attachDiagramText(ex.q, "math", ctx);
            const spec = stack.DIAGRAM_INFER.inferDiagramSpec(ex.q, ctx);
            if (!html.includes("<svg") || !stack.DIAGRAM_INFER.validateSpecLabels(ex.q, spec)) {
              gaps.push({ subject: "math", key: `lecture-ex:${key}`, reason: "lecture-example", text: ex.q.slice(0, 72) });
            } else if (assertMathKind(ex.q, spec, `lecture-ex:${key}`, gaps)) stats.ok++;
          }
        }
      }
    }
    continue;
  }

  if (w.EXAM_ENGINE?.generate) {
    for (let seed = 1; seed <= 3; seed++) {
      try {
        const exam = w.EXAM_ENGINE.generate(seed, 2);
        for (const q of exam.questions || []) {
          stats.checked++;
          checkQuestion(stack, q, sub.code, gaps, stats);
        }
      } catch { /* optional */ }
    }
  }

  if (w.EXAM_ENGINE?.quizCatalog && w.EXAM_ENGINE?.generateQuiz) {
    for (const bp of w.EXAM_ENGINE.quizCatalog) {
      let quiz;
      try { quiz = w.EXAM_ENGINE.generateQuiz(bp.id, 1001); } catch (e) {
        gaps.push({ subject: sub.code, key: bp.id, reason: "quiz-gen-fail", text: String(e.message).slice(0, 60) });
        continue;
      }
      for (const q of quiz.questions || []) {
        stats.checked++;
        checkQuestion(stack, q, sub.code, gaps, stats);
      }
    }
  }
}

if (gaps.length) {
  console.error(`diagram-coverage: ${gaps.length} gap(s) | ${stats.ok}/${stats.needs} ok | ${stats.checked} checked`);
  const byReason = {};
  for (const g of gaps) byReason[g.reason] = (byReason[g.reason] || 0) + 1;
  console.error("by reason:", JSON.stringify(byReason));
  gaps.slice(0, 25).forEach(g => console.error(`  [${g.subject}] ${g.reason} ${g.key}: ${g.text}`));
  if (gaps.length <= 40) {
    console.error("\nSuggested overrides snippet:");
    const snippet = {};
    for (const g of gaps.slice(0, 15)) {
      if (!snippet[g.subject]) snippet[g.subject] = {};
      snippet[g.subject][g.key] = { kind: "coordinatePlane", caption: "示意圖" };
    }
    console.error(JSON.stringify(snippet, null, 2));
  }
  process.exit(1);
}
console.log(`OK: diagram-coverage strict ${stats.checked} checked, ${stats.needs} need diagram, ${stats.ok} pass labels+svg`);
