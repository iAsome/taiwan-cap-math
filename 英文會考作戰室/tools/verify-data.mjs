import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { loadFractionMarkup } from "../../shared/load-fraction-markup.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const sandbox = { window: {}, console, Date, Math };
vm.createContext(sandbox);
loadFractionMarkup(sandbox);

for (const file of ["english-data.js", "quiz-taxonomy.js", "vocab-quiz-data.js", "questions.js", "analysis-data.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), sandbox, { filename: file });
}

const { ENGLISH_DATA, QUIZ_TAXONOMY, EXAM_ENGINE, ENGLISH_ANALYSIS, ENGLISH_VOCAB_QUIZ_DATA } = sandbox.window;
const errors = [];
const check = (cond, msg) => { if (!cond) errors.push(msg); };
const unitIds = ENGLISH_DATA.units.map(u => u.id);
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

function normalizeVisible(value) {
  return ` ${String(value).toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/[^a-z0-9.']+/g, " ")
    .replace(/\s+/g, " ")
    .trim()} `;
}

function visibleContains(haystack, word) {
  const needle = normalizeVisible(word).trim();
  return needle && haystack.includes(` ${needle} `);
}

function readingTokens(text) {
  return String(text).match(/[A-Za-z][A-Za-z'.-]*/g) || [];
}

function baseWordsFor(token) {
  const t = token.toLowerCase().replace(/[.']/g, "");
  const irregular = { has: "have", does: "do", did: "do", had: "have", is: "be", are: "be", was: "be", were: "be", learns: "learn" };
  const forms = new Set([t]);
  if (irregular[t]) forms.add(irregular[t]);
  if (t.endsWith("ies")) forms.add(`${t.slice(0, -3)}y`);
  if (t.endsWith("ing")) forms.add(t.slice(0, -3));
  if (t.endsWith("ed")) { forms.add(t.slice(0, -2)); forms.add(t.slice(0, -1)); }
  if (t.endsWith("es")) { forms.add(t.slice(0, -2)); forms.add(t.slice(0, -1)); }
  if (t.endsWith("s") && t.length > 3) forms.add(t.slice(0, -1));
  return [...forms].filter(Boolean);
}

// Handbook shape and English-only rendering.
const appSource = fs.readFileSync(path.join(root, "app.js"), "utf8");
check(!/const\s+nl\s*=\s*value\s*=>\s*FRACTION_MARKUP\.renderMath/.test(appSource), "English handbook nl() must not render math fractions.");
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

// Per-quiz shape.
for (const blueprint of EXAM_ENGINE.quizCatalog) {
  const quiz = EXAM_ENGINE.generateQuiz(blueprint.id, 12345);
  check(blueprint.questionCount === 50 && blueprint.minutes === 50, `Quiz ${blueprint.id} should advertise 50 questions / 50 minutes.`);
  check(quiz.questions.length === 50, `Quiz ${blueprint.id} should generate 50 questions, got ${quiz.questions.length}.`);
  const reading = quiz.questions.slice(44);
  check(reading.length === 6, `Quiz ${blueprint.id} should end with 6 reading questions.`);
  check(reading.slice(0, 3).every(q => q.readingGroup === 1) && reading.slice(3, 6).every(q => q.readingGroup === 2), `Quiz ${blueprint.id} reading groups should be 3 + 3.`);
  reading.forEach((q, i) => {
    check(Array.isArray(q.glossary) && q.glossary.length <= 5, `Quiz ${blueprint.id} reading question ${i + 45} glossary should have <= 5 words.`);
    (q.glossary || []).forEach(g => check(g.word && g.zh, `Quiz ${blueprint.id} reading question ${i + 45} glossary item needs word/zh.`));
  });
  quiz.questions.forEach((q, i) => {
    check(Array.isArray(q.choices) && q.choices.length === 4, `Quiz ${blueprint.id} question ${i + 1} should have 4 choices.`);
    check(q.answer >= 0 && q.answer < q.choices.length, `Quiz ${blueprint.id} question ${i + 1} answer is out of range.`);
  });
  blueprint.unitIds.forEach(id => check(unitIds.includes(id), `Quiz ${blueprint.id} references unknown unitId ${id}.`));
}

// Same seed across all 25 quizzes must cover every basic 2000 word and avoid repeated questions.
const basicWords = ENGLISH_VOCAB_QUIZ_DATA.basic;
const tier3Words = ENGLISH_VOCAB_QUIZ_DATA.tier3 || [];
const basicSet = new Set(basicWords.flatMap(item => [normalizeVisible(item.word).trim(), ...baseWordsFor(item.word)]));
const tier3Set = new Set(tier3Words.map(item => normalizeVisible(item.word).trim()));

for (const seed of [1, 12345, 999999]) {
  const allQuestions = EXAM_ENGINE.quizCatalog.flatMap(blueprint => EXAM_ENGINE.generateQuiz(blueprint.id, seed).questions);
  check(allQuestions.length === 1250, `Seed ${seed} should generate 25 x 50 = 1250 questions, got ${allQuestions.length}.`);
  const seen = new Set();
  allQuestions.forEach((q, i) => {
    const sig = signature(q);
    check(!seen.has(sig), `Seed ${seed} has duplicate question signature at global question ${i + 1}.`);
    seen.add(sig);
  });
  const visible = normalizeVisible(allQuestions.map(q => `${q.text} ${q.choices.join(" ")}`).join(" "));
  const missing = basicWords.filter(item => !visibleContains(visible, item.word)).map(item => item.word);
  check(missing.length === 0, `Seed ${seed} misses ${missing.length} basic words: ${missing.slice(0, 12).join(", ")}.`);

  const readingQuestions = allQuestions.filter(q => q.readingGroup);
  const readingTitles = new Set(readingQuestions.map(q => `${q.readingGroup}:${q.readingTitle}:${q.passage}`));
  check(readingTitles.size === 50, `Seed ${seed} should have 50 unique reading passages, got ${readingTitles.size}.`);
  readingQuestions.forEach((q, i) => {
    const glossary = new Set((q.glossary || []).map(g => normalizeVisible(g.word).trim()));
    const proper = new Set((q.allowedProperNouns || []).map(name => name.toLowerCase()));
    for (const token of readingTokens(q.passage || "")) {
      const raw = normalizeVisible(token).trim();
      const bases = baseWordsFor(token);
      if (proper.has(raw)) continue;
      if (tier3Set.has(raw)) check(glossary.has(raw), `Seed ${seed} reading ${i + 1} uses tier3 word ${raw} without glossary.`);
      else check(basicSet.has(raw) || bases.some(base => basicSet.has(base)), `Seed ${seed} reading ${i + 1} uses out-of-scope word ${token}.`);
    }
  });
}

// Dynamic bank: every basic word has 10 distinct usable slots.
check(EXAM_ENGINE.vocabCoverage?.basicCount === 1971, `Dynamic vocab bank should cover 1971 words, got ${EXAM_ENGINE.vocabCoverage?.basicCount}.`);
check(EXAM_ENGINE.vocabCoverage?.slotsPerWord >= 10, `Dynamic vocab bank should have >= 10 slots per word, got ${EXAM_ENGINE.vocabCoverage?.slotsPerWord}.`);
check(EXAM_ENGINE.vocabCoverage?.totalSlots >= 19710, `Dynamic vocab bank should have >= 19710 slots, got ${EXAM_ENGINE.vocabCoverage?.totalSlots}.`);
basicWords.forEach((item, wordIndex) => {
  const sigs = new Set();
  for (let variant = 0; variant < 10; variant++) {
    const q = EXAM_ENGINE.generateVocabSlot(wordIndex, variant, 777);
    sigs.add(signature(q));
    check(visibleContains(normalizeVisible(`${q.text} ${q.choices.join(" ")}`), item.word), `Vocab slot ${item.word}#${variant} does not show its target word.`);
  }
  check(sigs.size === 10, `Vocab word ${item.word} should have 10 distinct slots, got ${sigs.size}.`);
});

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
  vocab.tiers.forEach(tier => {
    check(Array.isArray(tier.words) && tier.words.length > 0, `vocab tier ${tier.id} is empty.`);
    tier.words.forEach((item, i) => {
      check(!!item.word && !!item.zh, `vocab tier ${tier.id} item ${i + 1} missing word/zh.`);
      check(!!item.sortKey, `vocab tier ${tier.id} ${item.word} missing sortKey.`);
      check(!!item.kk, `vocab tier ${tier.id} ${item.word} missing kk.`);
    });
    for (let i = 1; i < tier.words.length; i++) {
      check(tier.words[i - 1].sortKey.localeCompare(tier.words[i].sortKey, "en") <= 0, `vocab tier ${tier.id} sort order error near ${tier.words[i].word}.`);
    }
  });
  const total = vocab.tiers.reduce((n, t) => n + t.words.length, 0);
  check(total >= 2900, `vocab-3000.json total too small: ${total}.`);
  check(vocab.meta?.counts?.total === total, `vocab meta total(${vocab.meta?.counts?.total}) != actual(${total}).`);
} else {
  errors.push("vocab-3000.json missing; run node tools/build-vocab-3000.mjs.");
}

if (errors.length) {
  console.error(`FAILED: ${errors.length} issue(s).`);
  errors.forEach(e => console.error(" -", e));
  process.exit(1);
}

const years = Object.keys(ENGLISH_ANALYSIS.primaryUnits).sort();
const totalArchiveQ = years.reduce((s, y) => s + ENGLISH_ANALYSIS.primaryUnits[y].length, 0);
const vocabTotal = fs.existsSync(vocabPath) ? JSON.parse(fs.readFileSync(vocabPath, "utf8")).meta?.counts?.total || "?" : "?";
console.log(`OK: 20 units, ${EXAM_ENGINE.quizCatalog.length} quizzes at 50 questions, seeded 2000-word coverage, 30-question mock, ${years.length} archive years (${totalArchiveQ} questions), vocab-3000 ${vocabTotal} words.`);
