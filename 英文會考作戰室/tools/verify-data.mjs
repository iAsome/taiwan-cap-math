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
const redundantPromptMarkers = [
  "Choose the " + "best answer.",
  "Complete the " + "sentence.",
  "Choose the standard " + "English sentence.",
  "Read and choose the " + "best answer.",
  "Choose the correct " + "form.",
  "Choose the correct word " + "choice.",
  "Choose the sentence with the correct " + "tense.",
  "Choose the correct " + "usage."
];
const badVocabMarkers = ["Please use this word in a clear " + "sentence", " in " + "context"];
const quizSeeds = [1, 12345, 999999, 777777];
const itemPrefixPattern = /\bItem\s+[A-Z0-9-]+:/;
const chinesePattern = /[\u3400-\u9FFF]/;
const chapterDifficultyShape = { 1: 4, 2: 8, 3: 6, 4: 2 };
const reviewDifficultyShape = { 1: 6, 2: 16, 3: 18, 4: 8, 5: 2 };

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
  return [q.passageId, q.passage, q.text, ...(q.choices || [])].filter(Boolean).join("\n").toLowerCase().replace(/\s+/g, " ").trim();
}
function questionFaceText(q) {
  return [q.text, ...(q.choices || [])].filter(Boolean).join("\n");
}
function explanationText(q) {
  return [
    ...(q.steps || []),
    q.tip,
    q.trap,
    q.concept,
    q.formula
  ].filter(Boolean).join("\n");
}
function questionVisibleText(q) {
  return [
    questionFaceText(q),
    q.passage,
    q.readingTitle,
    ...((q.glossary || []).map(item => Array.isArray(item) ? item[0] : item.word)),
    explanationText(q)
  ].filter(Boolean).join("\n");
}
function countBy(list, keyFn) {
  return list.reduce((map, item) => {
    const key = keyFn(item);
    map[key] = (map[key] || 0) + 1;
    return map;
  }, {});
}
function sameShape(actual, expected) {
  return Object.entries(expected).every(([key, value]) => actual[key] === value)
    && Object.keys(actual).every(key => expected[key] != null);
}

// Handbook shape and English-only rendering.
const appSource = fs.readFileSync(path.join(root, "app.js"), "utf8");
const indexSource = fs.readFileSync(path.join(root, "index.html"), "utf8");
const questionSource = fs.readFileSync(path.join(root, "questions.js"), "utf8");
const oldVocabQuizScript = "vocab-" + "quiz-data.js";
check(!/const\s+nl\s*=\s*value\s*=>\s*FRACTION_MARKUP\.renderMath/.test(appSource), "English handbook nl() must not render math fractions.");
check(!indexSource.includes(oldVocabQuizScript), "English quizzes must not load the old vocab quiz data file.");
removedExports.forEach(name => check(!(name in EXAM_ENGINE), `EXAM_ENGINE must not export ${name}.`));
const readingRenderer = appSource.slice(appSource.indexOf("function readingPassageHtml"), appSource.indexOf("function solutionHtml"));
check(!readingRenderer.includes("readingTitle"), "Reading passage UI must not render the real readingTitle.");
check(Array.isArray(EXAM_ENGINE.VOCAB_BANK_META) && EXAM_ENGINE.VOCAB_BANK_META.length === 600, `English vocab target bank should expose 600 entries, got ${EXAM_ENGINE.VOCAB_BANK_META?.length}.`);
const vocabCounts = countBy(EXAM_ENGINE.VOCAB_BANK_META || [], item => item.unitId);
unitIds.forEach(id => check(vocabCounts[id] === 30, `English vocab unit ${id} should contain 30 target words, got ${vocabCounts[id] || 0}.`));
(EXAM_ENGINE.VOCAB_BANK_META || []).forEach(item => {
  check(item.word && item.definition && item.sentence && item.usage && item.phrase && item.key, `Vocab target ${item.key || item.word} missing required data.`);
  check(Array.isArray(item.badPhrases) && item.badPhrases.length >= 3, `Vocab target ${item.key || item.word} needs 3 bad phrase distractors.`);
  badVocabMarkers.forEach(marker => check(![item.sentence, item.usage, item.phrase, ...item.badPhrases].join("\n").includes(marker), `Vocab target ${item.key} contains placeholder marker "${marker}".`));
});
check(EXAM_ENGINE.READING_BANK_SIZE === 100, `English reading bank should contain 100 passages, got ${EXAM_ENGINE.READING_BANK_SIZE}.`);
check(Object.keys(EXAM_ENGINE.READING_CATEGORY_COUNTS || {}).length === 10, "English reading bank should cover 10 scenario categories.");
Object.entries(EXAM_ENGINE.READING_CATEGORY_COUNTS || {}).forEach(([category, count]) => check(count === 10, `English reading category ${category} should contain 10 passages, got ${count}.`));
check(Array.isArray(EXAM_ENGINE.READING_BANK_META) && EXAM_ENGINE.READING_BANK_META.length === 100, "English reading bank metadata should expose 100 passages.");
check(new Set((EXAM_ENGINE.READING_BANK_META || []).map(item => item.id)).size === 100, "English reading passage ids must be unique.");
check(new Set((EXAM_ENGINE.READING_BANK_META || []).map(item => item.passage)).size === 100, "English reading passage texts must be unique.");
(EXAM_ENGINE.READING_BANK_META || []).forEach(item => {
  check(item.wordCount >= 60 && item.wordCount <= 100, `Reading passage ${item.id} should be 60-100 words, got ${item.wordCount}.`);
});
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

const vocabPath = path.join(root, "vocab-3000.json");
const vocab = fs.existsSync(vocabPath) ? JSON.parse(fs.readFileSync(vocabPath, "utf8")) : null;
const basic2000 = new Set();
const vocabAllowlist = new Set([
  "amy", "ben", "cindy", "david", "ella", "frank", "grace", "henry", "ivy", "jack", "kelly", "leo", "lin", "mina", "mr", "nick", "olivia", "peter", "ruby", "sam", "tina", "victor", "wendy", "yuki", "zoe",
  "taipei", "japanese", "v", "pp", "ing", "ed", "ly", "ful", "tion", "doesn", "don", "isn", "haven", "didn", "can", "couldn", "wouldn", "shouldn",
  "am", "are", "was", "were", "did", "does", "has", "had", "would", "could", "should", "my", "me", "your", "her", "hers", "him", "himself",
  "adjective", "adverb", "article", "conjunction", "grammar", "modal", "noun", "passive", "preposition", "pronoun", "verb",
  "clue", "clues", "detail", "evidence", "infer", "passage", "paragraph", "reader", "readers", "strategy", "title",
  "bought", "brought", "built", "caught", "eaten", "felt", "forgot", "gone", "kept", "lent", "lost", "rang", "saw", "sold", "spoken", "told", "went", "were", "wrote", "written",
  "although", "an", "arrived", "b", "became", "best", "better", "bike", "bore", "bores", "broken", "changed", "chose", "closed", "communicate", "communication", "compared", "conclusion", "confused", "decided", "earlier", "effect", "effected", "fell", "forever", "found", "function", "functions", "grammatical", "grammatically", "heavier", "heaviest", "inference", "knew", "lived", "lowered", "luckily", "mine", "moved", "mystery", "okay", "prefix", "probably", "product", "reduce", "reduction", "refer", "relieved", "reusable", "reuse", "schedule", "shown", "suddenly", "suffix", "tone", "took", "tv", "uncertain", "understood", "used", "wondered",
  "advice", "argument", "cigarette", "clause", "condition", "connect", "container", "context", "contrast", "definition", "device", "dialogue", "done", "easier", "easily", "feathers", "gave", "given", "harmful", "ignored", "larger", "matches", "met", "musical", "personality", "phrase", "placed", "prevented", "related", "reply", "respectful", "rewrite", "routine", "said", "saved", "sent", "set", "simplest", "situation", "solved", "standard", "tag", "task", "tense", "them", "unit", "usage", "whom", "worse",
  "choice", "confusion", "customer", "delay", "displeasure", "instead", "local", "made", "message", "notice", "online", "public", "receipt", "route", "share", "smoothly", "volunteer",
  "watchs", "delicion", "wellly", "difficulter", "interestinger", "happilyness", "teacherly", "movemently"
]);
function addBasicWord(raw) {
  const word = String(raw).toLowerCase().replace(/[^a-z]/g, "");
  if (!word) return;
  basic2000.add(word);
  basic2000.add(`${word}s`);
  basic2000.add(`${word}es`);
  basic2000.add(`${word}ed`);
  basic2000.add(`${word}ing`);
  if (word.endsWith("e")) basic2000.add(`${word.slice(0, -1)}ing`);
  if (word.endsWith("y")) {
    basic2000.add(`${word.slice(0, -1)}ies`);
    basic2000.add(`${word.slice(0, -1)}ied`);
  }
  if (/^[a-z]*[aeiou][bcdfghjklmnpqrstvwxyz]$/.test(word)) {
    basic2000.add(`${word}${word.at(-1)}ed`);
    basic2000.add(`${word}${word.at(-1)}ing`);
  }
}
if (vocab) {
  check(Array.isArray(vocab.tiers) && vocab.tiers.length === 3, "vocab-3000.json should have 3 tiers.");
  vocab.tiers.forEach(tier => {
    check(Array.isArray(tier.words) && tier.words.length > 0, `vocab tier ${tier.id} is empty.`);
    tier.words.forEach((item, i) => {
      check(!!item.word && !!item.zh, `vocab tier ${tier.id} item ${i + 1} missing word/zh.`);
      check(!!item.sortKey, `vocab tier ${tier.id} ${item.word} missing sortKey.`);
      check(!!item.kk, `vocab tier ${tier.id} ${item.word} missing kk.`);
      if (tier.id <= 2) String(item.word).toLowerCase().split(/[^a-z]+/).filter(Boolean).forEach(addBasicWord);
    });
  });
  const total = vocab.tiers.reduce((sum, tier) => sum + tier.words.length, 0);
  check(total >= 2900, `vocab-3000.json total too small: ${total}.`);
  check(vocab.meta?.counts?.total === total, `vocab meta total(${vocab.meta?.counts?.total}) != actual(${total}).`);
} else {
  errors.push("vocab-3000.json missing; run node tools/build-vocab-3000.mjs.");
}
function baseWordOk(word) {
  if (basic2000.has(word) || vocabAllowlist.has(word)) return true;
  const stems = [
    word.replace(/ies$/, "y"),
    word.replace(/ied$/, "y"),
    word.replace(/ing$/, ""),
    word.replace(/ed$/, ""),
    word.replace(/ly$/, ""),
    word.replace(/ness$/, ""),
    word.replace(/er$/, ""),
    word.replace(/est$/, ""),
    word.replace(/s$/, "")
  ].filter(stem => stem && stem !== word);
  return stems.some(stem => basic2000.has(stem) || vocabAllowlist.has(stem));
}
function unknownEnglishWords(text, extraAllowed = new Set()) {
  return [...new Set((String(text).toLowerCase().match(/[a-z][a-z']*/g) || [])
    .flatMap(word => word.split("'"))
    .map(word => word.replace(/[^a-z]/g, ""))
    .filter(word => word && !extraAllowed.has(word) && !baseWordOk(word)))];
}

// Unit quizzes: English question faces, Chinese explanations, no duplicate seed-wide targets/templates.
for (const seed of quizSeeds) {
  const allSignatures = new Set();
  const allTemplateKeys = new Set();
  const allTargetKeys = new Set();
  for (const blueprint of EXAM_ENGINE.quizCatalog) {
    const quiz = EXAM_ENGINE.generateQuiz(blueprint.id, seed);
    const allowedUnits = new Set(blueprint.unitIds);
    const expectedCount = blueprint.scope === "chapter" ? 20 : 50;
    const expectedMinutes = blueprint.scope === "chapter" ? 20 : 50;
    const paperSignatures = new Set();
    const formKeys = new Set();
    check(blueprint.questionCount === expectedCount && blueprint.minutes === expectedMinutes, `Quiz ${blueprint.id} should advertise ${expectedCount} questions / ${expectedMinutes} minutes.`);
    check(quiz.questions.length === expectedCount, `Quiz ${blueprint.id} seed ${seed} should generate ${expectedCount} questions, got ${quiz.questions.length}.`);
    quiz.questions.forEach((q, i) => {
      check(Array.isArray(q.choices) && q.choices.length === 4, `Quiz ${blueprint.id} seed ${seed} question ${i + 1} should have 4 choices.`);
      check(q.answer >= 0 && q.answer < q.choices.length, `Quiz ${blueprint.id} seed ${seed} question ${i + 1} answer is out of range.`);
      check(allowedUnits.has(q.unitId), `Quiz ${blueprint.id} seed ${seed} question ${i + 1} uses unit ${q.unitId} outside ${[...allowedUnits].join(",")}.`);
      const sig = signature(q);
      check(!paperSignatures.has(sig), `Quiz ${blueprint.id} seed ${seed} duplicate question signature: ${sig.slice(0, 120)}.`);
      paperSignatures.add(sig);
      check(!allSignatures.has(sig), `Seed ${seed} duplicate quiz question signature: ${sig.slice(0, 120)}.`);
      allSignatures.add(sig);
      check(!!q.templateKey, `Quiz ${blueprint.id} seed ${seed} question ${i + 1} missing templateKey.`);
      check(!allTemplateKeys.has(q.templateKey), `Seed ${seed} duplicate templateKey: ${q.templateKey}.`);
      allTemplateKeys.add(q.templateKey);
      check(!!q.questionFormKey, `Quiz ${blueprint.id} seed ${seed} question ${i + 1} missing questionFormKey.`);
      formKeys.add(q.questionFormKey);
      const face = questionFaceText(q);
      check(!chinesePattern.test(face), `Quiz ${blueprint.id} seed ${seed} question ${i + 1} question/choices must be English-only.`);
      redundantPromptMarkers.forEach(marker => check(!q.text.startsWith(marker), `Quiz ${blueprint.id} seed ${seed} question ${i + 1} starts with redundant prompt "${marker}".`));
      badVocabMarkers.forEach(marker => check(!face.includes(marker), `Quiz ${blueprint.id} seed ${seed} question ${i + 1} contains placeholder marker "${marker}".`));
      if (q.text.includes("___")) {
        check(q.choices.every(choice => !choice.includes("___") && choice.length <= 32), `Quiz ${blueprint.id} seed ${seed} question ${i + 1} blank choices should be short answer fragments.`);
      }
      const explanation = explanationText(q);
      check(chinesePattern.test(explanation), `Quiz ${blueprint.id} seed ${seed} question ${i + 1} explanation must include Chinese reasoning/translation.`);
      if (q.targetKey) {
        check(!!q.targetWord, `Quiz ${blueprint.id} seed ${seed} question ${i + 1} has targetKey but no targetWord.`);
        check(!allTargetKeys.has(q.targetKey), `Seed ${seed} duplicate targetKey: ${q.targetKey}.`);
        allTargetKeys.add(q.targetKey);
      }
      const visible = questionVisibleText(q);
      check(!itemPrefixPattern.test(visible), `Quiz ${blueprint.id} seed ${seed} question ${i + 1} still contains an Item prefix.`);
      forbiddenMarkers.forEach(marker => check(!face.includes(marker), `Quiz ${blueprint.id} seed ${seed} question ${i + 1} contains forbidden meaning marker "${marker}".`));
      const glossaryWords = new Set((q.glossary || []).map(item => String(Array.isArray(item) ? item[0] : item.word).toLowerCase()));
      const scopeText = [face, q.passage, q.readingTitle, ...glossaryWords].filter(Boolean).join("\n");
      const unknown = unknownEnglishWords(scopeText, glossaryWords);
      check(unknown.length === 0, `Quiz ${blueprint.id} seed ${seed} question ${i + 1} has out-of-scope English words: ${unknown.slice(0, 12).join(", ")}.`);
    });
    const reading = quiz.questions.filter(q => q.readingGroup);
    const targetCount = quiz.questions.filter(q => q.targetKey).length;
    const difficultyShape = countBy(quiz.questions, q => q.difficulty);
    if (blueprint.scope === "chapter") {
      check(targetCount === 5, `Chapter quiz ${blueprint.id} seed ${seed} should contain 5 vocabulary target questions, got ${targetCount}.`);
      check(reading.length === 0, `Chapter quiz ${blueprint.id} seed ${seed} must not include readingGroup questions.`);
      check(formKeys.size >= 10, `Chapter quiz ${blueprint.id} seed ${seed} should use at least 10 question forms, got ${formKeys.size}.`);
      check(sameShape(difficultyShape, chapterDifficultyShape), `Chapter quiz ${blueprint.id} seed ${seed} difficulty shape should be 1★4/2★8/3★6/4★2.`);
    } else {
      check(targetCount === 10, `Review quiz ${blueprint.id} seed ${seed} should contain 10 vocabulary target questions, got ${targetCount}.`);
      check(reading.length === 6, `Review quiz ${blueprint.id} seed ${seed} should contain 6 reading questions.`);
      check(quiz.questions.slice(0, 44).every(q => !q.readingGroup), `Review quiz ${blueprint.id} seed ${seed} should keep reading sets after question 44.`);
      check(quiz.questions.slice(44, 47).every(q => q.readingGroup === 1) && quiz.questions.slice(47, 50).every(q => q.readingGroup === 2), `Review quiz ${blueprint.id} seed ${seed} reading groups should be 3 + 3.`);
      check(new Set(quiz.questions.slice(44, 47).map(q => q.passageId)).size === 1, `Review quiz ${blueprint.id} seed ${seed} questions 45-47 should share one passage.`);
      check(new Set(quiz.questions.slice(47, 50).map(q => q.passageId)).size === 1, `Review quiz ${blueprint.id} seed ${seed} questions 48-50 should share one passage.`);
      check(quiz.questions[44]?.passageId !== quiz.questions[47]?.passageId, `Review quiz ${blueprint.id} seed ${seed} should use two different passages.`);
      check(reading.every(q => q.passage && q.readingTitle && Array.isArray(q.glossary)), `Review quiz ${blueprint.id} seed ${seed} reading questions need passage/title/glossary.`);
      check(reading.every(q => (q.glossary || []).every(item => Array.isArray(item) ? item[0] && item[1] && chinesePattern.test(item[1]) : item.word && item.zh && chinesePattern.test(item.zh))), `Review quiz ${blueprint.id} seed ${seed} reading glossary needs Chinese translations.`);
      check(formKeys.size >= 16, `Review quiz ${blueprint.id} seed ${seed} should use at least 16 question forms, got ${formKeys.size}.`);
      check(sameShape(difficultyShape, reviewDifficultyShape), `Review quiz ${blueprint.id} seed ${seed} difficulty shape should be 1★6/2★16/3★18/4★8/5★2.`);
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

// Keep the forbidden search strings out of questions.js without storing them literally here.
removedExports.forEach(name => check(!questionSource.includes(name), `questions.js still contains removed export ${name}.`));

if (errors.length) {
  console.error(`FAILED: ${errors.length} issue(s).`);
  errors.forEach(e => console.error(" -", e));
  process.exit(1);
}

const years = Object.keys(ENGLISH_ANALYSIS.primaryUnits).sort();
const totalArchiveQ = years.reduce((s, y) => s + ENGLISH_ANALYSIS.primaryUnits[y].length, 0);
console.log(`OK: 20 units, ${EXAM_ENGINE.quizCatalog.length} English-only quiz faces, no-repeat targets/templates, 100 reading passages, 30-question mock, ${years.length} archive years (${totalArchiveQ} questions).`);
