import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { loadFractionMarkup } from "../../shared/load-fraction-markup.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const sandbox = { window: {}, console, Date, Math };
vm.createContext(sandbox);
loadFractionMarkup(sandbox);

for (const file of ["english-data.js", "quiz-taxonomy.js", "questions.js", "analysis-data.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), sandbox, { filename: file });
}

const { ENGLISH_DATA, QUIZ_TAXONOMY, EXAM_ENGINE, ENGLISH_ANALYSIS } = sandbox.window;
const errors = [];
const check = (cond, msg) => { if (!cond) errors.push(msg); };
const unitIds = ENGLISH_DATA.units.map(u => u.id);
const forbiddenMarkers = [
  "Which word " + "means",
  "Chinese " + "meaning",
  "Basic 2000 " + "vocabulary",
  "2000-word " + "quiz",
  "字" + "義",
  "中文" + "意思"
];
const removedExports = ["vocab" + "Coverage", "generate" + "VocabSlot"];
const readingChapterIds = new Set([15, 16]);

const handbookEsc = value => String(value).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const handbookNl = value => handbookEsc(value).replace(/\n/g, "<br>");
const badHandbookText = /分子|分母|\[\[frac:|math-frac|math-num|math-den|[\u0400-\u04FF]/;
function handbookStrings(unit) {
  return [
    unit.summary, unit.core, unit.clarify, unit.formula, unit.derivation,
    ...(unit.steps || []), ...(unit.tips || []),
    ...((unit.examples || []).flatMap(example => [example.sentence, example.note])),
    unit.quiz?.q, unit.quiz?.a
  ].filter(value => value != null);
}
function signature(q) {
  return `${q.text}\n${q.choices.join("|")}`.toLowerCase().replace(/\s+/g, " ").trim();
}
function questionVisibleText(q) {
  return [
    q.text,
    ...(q.choices || []),
    ...(q.steps || []),
    q.tip,
    q.trap,
    q.concept,
    q.formula
  ].filter(Boolean).join("\n");
}

// Handbook shape and English-only rendering.
const appSource = fs.readFileSync(path.join(root, "app.js"), "utf8");
const indexSource = fs.readFileSync(path.join(root, "index.html"), "utf8");
const questionSource = fs.readFileSync(path.join(root, "questions.js"), "utf8");
const oldVocabQuizScript = "vocab-" + "quiz-data.js";
check(!/const\s+nl\s*=\s*value\s*=>\s*FRACTION_MARKUP\.renderMath/.test(appSource), "English handbook nl() must not render math fractions.");
check(!indexSource.includes(oldVocabQuizScript), "English quizzes must not load the old vocab quiz data file.");
removedExports.forEach(name => check(!(name in EXAM_ENGINE), `EXAM_ENGINE must not export ${name}.`));
check(unitIds.length === 20, `ENGLISH_DATA.units should contain 20 units, got ${unitIds.length}.`);
unitIds.forEach((id, i) => check(id === i + 1, `Unit id should be ${i + 1}, got ${id}.`));
ENGLISH_DATA.units.forEach(unit => {
  ["summary", "core", "clarify", "formula", "derivation"].forEach(field => {
    check(typeof unit[field] === "string" && unit[field].trim(), `unit ${unit.id} missing ${field}.`);
  });
  check(Array.isArray(unit.steps) && unit.steps.length >= 4, `unit ${unit.id} needs at least 4 steps.`);
  check(Array.isArray(unit.tips) && unit.tips.length >= 4, `unit ${unit.id} needs at least 4 tips.`);
  check(unit.quiz?.q && unit.quiz?.a, `unit ${unit.id} needs one concept quiz in data.`);
  check(Array.isArray(unit.examples) && unit.examples.length >= 1, `unit ${unit.id} needs at least one example.`);
  const text = handbookStrings(unit).join("\n");
  const rendered = handbookStrings(unit).map(handbookNl).join("\n");
  check(!badHandbookText.test(text), `unit ${unit.id} handbook contains forbidden fraction/Cyrillic text.`);
  check(!/math-frac|math-num|math-den/.test(rendered), `unit ${unit.id} handbook renders math fraction classes.`);
});

// Mock exam stays 30 questions.
const mock = EXAM_ENGINE.generate(20260701, 2);
check(mock.questions.length === 30, `Mock exam should generate 30 questions, got ${mock.questions.length}.`);
mock.questions.forEach((q, i) => {
  check(Array.isArray(q.choices) && q.choices.length === 4, `Mock question ${i + 1} should have 4 choices.`);
  check(q.answer >= 0 && q.answer < q.choices.length, `Mock question ${i + 1} answer is out of range.`);
  check(unitIds.includes(q.unitId), `Mock question ${i + 1} has unknown unitId ${q.unitId}.`);
});

// Unit quizzes: grammar/usage only, no meaning-pair vocabulary tests.
for (const seed of [1, 12345, 999999]) {
  const allSignatures = new Set();
  for (const blueprint of EXAM_ENGINE.quizCatalog) {
    const quiz = EXAM_ENGINE.generateQuiz(blueprint.id, seed);
    const allowedUnits = new Set(blueprint.unitIds);
    const isReadingChapter = blueprint.scope === "chapter" && readingChapterIds.has(blueprint.unitIds[0]);
    check(blueprint.questionCount === 50 && blueprint.minutes === 50, `Quiz ${blueprint.id} should advertise 50 questions / 50 minutes.`);
    check(quiz.questions.length === 50, `Quiz ${blueprint.id} seed ${seed} should generate 50 questions, got ${quiz.questions.length}.`);
    quiz.questions.forEach((q, i) => {
      check(Array.isArray(q.choices) && q.choices.length === 4, `Quiz ${blueprint.id} seed ${seed} question ${i + 1} should have 4 choices.`);
      check(q.answer >= 0 && q.answer < q.choices.length, `Quiz ${blueprint.id} seed ${seed} question ${i + 1} answer is out of range.`);
      check(allowedUnits.has(q.unitId), `Quiz ${blueprint.id} seed ${seed} question ${i + 1} uses unit ${q.unitId} outside ${[...allowedUnits].join(",")}.`);
      const sig = signature(q);
      check(!allSignatures.has(sig), `Seed ${seed} duplicate quiz question signature: ${sig.slice(0, 120)}.`);
      allSignatures.add(sig);
      const visible = questionVisibleText(q);
      forbiddenMarkers.forEach(marker => check(!visible.includes(marker), `Quiz ${blueprint.id} seed ${seed} question ${i + 1} contains forbidden meaning marker "${marker}".`));
    });
    const reading = quiz.questions.filter(q => q.readingGroup);
    if (isReadingChapter) {
      check(reading.length === 6, `Reading chapter ${blueprint.id} seed ${seed} should contain 6 reading questions.`);
      check(quiz.questions.slice(0, 44).every(q => !q.readingGroup), `Reading chapter ${blueprint.id} seed ${seed} should keep reading sets after question 44.`);
      check(quiz.questions.slice(44, 47).every(q => q.readingGroup === 1) && quiz.questions.slice(47, 50).every(q => q.readingGroup === 2), `Reading chapter ${blueprint.id} seed ${seed} reading groups should be 3 + 3.`);
    } else {
      check(reading.length === 0, `Non-reading quiz ${blueprint.id} seed ${seed} must not include readingGroup questions.`);
    }
  }
}

// Taxonomy, archive analysis, and vocab-3000 structure.
const catalogIds = new Set(EXAM_ENGINE.quizCatalog.map(b => b.id));
Object.keys(QUIZ_TAXONOMY).forEach(quizId => check(catalogIds.has(quizId), `QUIZ_TAXONOMY key ${quizId} is not in quizCatalog.`));
Object.entries(ENGLISH_ANALYSIS.primaryUnits || {}).forEach(([year, unitSeq]) => {
  check(Array.isArray(unitSeq) && unitSeq.length > 0, `${year} primaryUnits is empty.`);
  unitSeq.forEach((unitId, i) => check(unitIds.includes(unitId), `${year} question ${i + 1} has invalid unitId ${unitId}.`));
});
Object.keys(ENGLISH_ANALYSIS.primaryUnits || {}).forEach(year => {
  const info = ENGLISH_ANALYSIS.officialByYear?.[year];
  check(!!info, `${year} missing officialByYear.`);
  if (!info) return;
  const seqLen = ENGLISH_ANALYSIS.primaryUnits[year].length;
  if (info.count != null) check(info.count === seqLen, `${year} count(${info.count}) != primaryUnits(${seqLen}).`);
  if (info.abilities) check(Object.values(info.abilities).reduce((s, v) => s + v, 0) === info.count, `${year} ability total != count.`);
});
unitIds.forEach(id => check(!!ENGLISH_ANALYSIS.domainByUnit?.[id], `domainByUnit missing unit ${id}.`));
check(Object.keys(ENGLISH_ANALYSIS.primaryUnits || {}).length === 10, "ENGLISH_ANALYSIS should contain 10 archive years.");

const vocabPath = path.join(root, "vocab-3000.json");
if (fs.existsSync(vocabPath)) {
  const vocab = JSON.parse(fs.readFileSync(vocabPath, "utf8"));
  check(Array.isArray(vocab.tiers) && vocab.tiers.length === 3, "vocab-3000.json should have 3 tiers.");
  const total = vocab.tiers.reduce((n, tier) => {
    check(Array.isArray(tier.words) && tier.words.length > 0, `vocab tier ${tier.id} is empty.`);
    tier.words.forEach((item, i) => {
      check(!!item.word && !!item.zh, `vocab tier ${tier.id} item ${i + 1} missing word/zh.`);
      check(!!item.sortKey, `vocab tier ${tier.id} ${item.word} missing sortKey.`);
      check(!!item.kk, `vocab tier ${tier.id} ${item.word} missing kk.`);
    });
    return n + tier.words.length;
  }, 0);
  check(total >= 2900, `vocab-3000.json total too small: ${total}.`);
  check(vocab.meta?.counts?.total === total, `vocab meta total(${vocab.meta?.counts?.total}) != actual(${total}).`);
} else {
  errors.push("vocab-3000.json missing; run node tools/build-vocab-3000.mjs.");
}

// Keep the forbidden search strings out of questions.js without storing them literally here.
removedExports.forEach(name => check(!questionSource.includes(name), `questions.js still contains removed export ${name}.`));

if (errors.length) {
  console.error(`FAILED: ${errors.length} issue(s).`);
  errors.forEach(e => console.error(" -", e));
  process.exit(1);
}

const years = Object.keys(ENGLISH_ANALYSIS.primaryUnits).sort();
const totalArchiveQ = years.reduce((s, y) => s + ENGLISH_ANALYSIS.primaryUnits[y].length, 0);
console.log(`OK: 20 units, ${EXAM_ENGINE.quizCatalog.length} grammar/usage quizzes at 50 questions, 30-question mock, ${years.length} archive years (${totalArchiveQ} questions).`);
