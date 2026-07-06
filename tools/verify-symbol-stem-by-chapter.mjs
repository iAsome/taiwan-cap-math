import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import {
  SUBJECTS,
  loadDiagramStack,
  loadSubject,
} from "./text-only-audit-lib.mjs";
import { auditQuestion } from "./symbol-stem-lib.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const mathDir = path.join(root, "數學會考作戰室");
const filterChapter = process.argv[2] || "";

const stack = loadDiagramStack();
const math = SUBJECTS.find(s => s.code === "math");
const w = loadSubject(math, stack);
const attach = q => stack.DIAGRAM_ATTACH.attachDiagram(q, "math");

const ctx = vm.createContext({ window: {}, console, Math, Date });
vm.runInContext(fs.readFileSync(path.join(mathDir, "data.js"), "utf8"), ctx, { filename: "data.js" });
vm.runInContext(fs.readFileSync(path.join(mathDir, "questions.js"), "utf8"), ctx, { filename: "questions.js" });
vm.runInContext(fs.readFileSync(path.join(mathDir, "lecture-taxonomy.js"), "utf8"), ctx, { filename: "lecture-taxonomy.js" });
const lectures = ctx.window.LECTURE_TAXONOMY || w.LECTURE_TAXONOMY || {};
const chapterQuizzes = ctx.window.EXAM_ENGINE.quizCatalog.filter(q => q.scope === "chapter");
const taxonomyChapters = chapterQuizzes.filter(q => w.QUIZ_TAXONOMY?.[q.id]).map(q => q.id);
const chapters = [...taxonomyChapters, "g8-1-c5"].filter((id, i, a) => a.indexOf(id) === i);

function itemsForChapter(chapterId) {
  const items = [];
  if (chapterId === "g8-1-c5") {
    for (let seed = 1; seed <= 5; seed++) {
      try {
        const exam = ctx.window.EXAM_ENGINE.generateQuiz("g8-1-c5", 9000 + seed);
        for (const q of exam?.questions || []) items.push({ source: `quiz:g8-1-c5#${seed}`, q: { ...q, taxonomyKey: `legacy/g8-1-c5` } });
      } catch { /* optional */ }
    }
    return items;
  }

  for (const [key, presets] of Object.entries(w.QUIZ_VARIANT_BANK || {})) {
    if (!key.startsWith(`${chapterId}/`)) continue;
    presets.forEach((q, i) => items.push({ source: `variant-bank:${key}#${i}`, q: { ...q, taxonomyKey: key } }));
  }

  for (let seed = 1; seed <= 3; seed++) {
    try {
      const exam = ctx.window.EXAM_ENGINE.generateQuiz(chapterId, 1000 + seed);
      for (const q of exam?.questions || []) items.push({ source: `quiz:${chapterId}#${seed}`, q: { ...q, taxonomyKey: q.taxonomyKey || `${chapterId}/generated` } });
    } catch { /* optional */ }
  }

  const lec = lectures;
  for (const [key, entry] of Object.entries(lec)) {
    if (!key.startsWith(`${chapterId}/`)) continue;
    for (const b of entry.blocks || []) {
      if (b.type !== "example") continue;
      items.push({ source: `lecture:${key}`, q: { text: b.q, choices: [], taxonomyKey: key } });
    }
  }

  return items;
}

const allViolations = [];
let chaptersChecked = 0;

for (const chapterId of chapters) {
  if (filterChapter && chapterId !== filterChapter) continue;
  const violations = [];
  for (const { source, q } of itemsForChapter(chapterId)) {
    const { ok, reason, letters, out } = auditQuestion(q, attach);
    if (ok) continue;
    violations.push({
      chapterId,
      source,
      reason,
      letters,
      text: String(q.text || "").slice(0, 100),
      needsText: out?.visualTextStatus === "needs-text"
    });
  }
  chaptersChecked++;
  if (violations.length) {
    console.error(`${chapterId}: ${violations.length} violation(s)`);
    for (const v of violations.slice(0, 8)) {
      console.error(`  [${v.reason}${v.letters?.length ? `:${v.letters.join(",")}` : ""}] ${v.source}: ${v.text}`);
    }
    allViolations.push(...violations);
  } else {
    console.log(`OK ${chapterId}: 0 violations`);
  }
}

if (allViolations.length) {
  console.error(`\nsymbol-stem-by-chapter: ${allViolations.length} total in ${chaptersChecked} chapter(s)`);
  process.exit(1);
}

console.log(`\nOK: symbol-stem-by-chapter ${chaptersChecked} chapter(s), 0 violations`);
process.exit(0);
