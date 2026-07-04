import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const context = vm.createContext({ window: {}, console });

for (const file of ["data.js", "analysis-data.js", "quiz-taxonomy.js", "quiz-variant-bank.js", "quiz-variants.js", "questions.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const bank = context.window.QUIZ_VARIANT_BANK || {};
assert.equal(Object.keys(bank).length, 537, "QUIZ_VARIANT_BANK must cover 537 taxonomy topics");

const {
  generate, generateQuiz, generateTopicDrill, quizCatalog,
  taxonomyTopicPool, topicsForScope, sampleTaxonomyQuestions,
  seedToVariantIndices, VARIANTS_PER_TOPIC, ensureTopicVariants, topicVariantSignature, drillQuestionSignature
} = context.window.EXAM_ENGINE;
const { primaryUnits } = context.window.CAP_ANALYSIS;
const quizTaxonomy = context.window.QUIZ_TAXONOMY || {};

const rngFromSeed = seed => {
  let state = Number(seed) || 1;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
};

for (const topic of taxonomyTopicPool()) {
  const raw = quizTaxonomy[topic.quizId].sections.flatMap(s => s.topics).find(t => t.id === topic.topicId);
  assert.equal(raw.variants?.length, VARIANTS_PER_TOPIC, `${topic.quizId}/${topic.topicId} must have explicit variants in taxonomy`);
  const signatures = new Set();
  for (let vi = 0; vi < VARIANTS_PER_TOPIC; vi++) {
    const sig = topicVariantSignature(topic.quizId, raw, vi);
    assert.ok(sig, `${topic.quizId}/${topic.topicId} variant ${vi} must produce signature`);
    assert.ok(!signatures.has(sig), `${topic.quizId}/${topic.topicId} variant ${vi} duplicates another variant`);
    signatures.add(sig);
  }
  const drill = generateTopicDrill(topic.quizId, topic.topicId, `${topic.quizId}-${topic.topicId}`, 1);
  const question = drill[0];
  assert.equal(question.type, "mc", `${topic.quizId}/${topic.topicId} must produce MC`);
  assert.ok(Array.isArray(question.choices) && question.choices.length === 4, `${topic.quizId}/${topic.topicId} must have 4 choices`);
  assert.ok(Number.isInteger(question.answer) && question.answer >= 0 && question.answer < 4, `${topic.quizId}/${topic.topicId} must have valid answer index`);
  assert.ok(Number.isInteger(question.variantIndex), `${topic.quizId}/${topic.topicId} must carry variantIndex`);
}

const chapters = quizCatalog.filter(item => item.scope === "chapter" && quizTaxonomy[item.id]);
for (const chapter of chapters) {
  const quizA = generateQuiz(chapter.id, 5115);
  const quizB = generateQuiz(chapter.id, 5115);
  assert.equal(JSON.stringify(quizA.questions.map(q => q.text)), JSON.stringify(quizB.questions.map(q => q.text)), `${chapter.id} seed 5115 must be stable`);
  const topicCount = quizTaxonomy[chapter.id].sections.reduce((sum, section) => sum + section.topics.length, 0);
  assert.equal(quizA.questions.length, topicCount, `${chapter.id} must have one question per taxonomy topic`);
  assert.equal(quizA.questions.length, chapter.questionCount, `${chapter.id} questionCount must match taxonomy`);
  assert.ok(quizA.questions.every(q => q.taxonomyKey), `${chapter.id} questions must carry taxonomyKey`);
  assert.deepEqual(quizA.variantIndices, seedToVariantIndices(5115, topicCount), `${chapter.id} variantIndices must match seedToVariantIndices`);
}

const tenTopicChapter = chapters.find(ch => quizTaxonomy[ch.id].sections.reduce((n, s) => n + s.topics.length, 0) === 10);
if (tenTopicChapter) {
  assert.deepEqual(seedToVariantIndices(5115, 10), [5, 1, 0, 9, 7, 6, 1, 3, 4, 2], "seed 5115 with 10 topics must expand to documented indices");
}

const termQuizzes = quizCatalog.filter(item => item.scope === "term");
for (const term of termQuizzes) {
  assert.equal(term.questionCount, 25, `${term.id} must target 25 questions`);
  const quiz = generateQuiz(term.id);
  assert.equal(quiz.questions.length, 25, `${term.id} must generate 25 questions`);
  assert.ok(quiz.questions.every(q => q.type === "mc"), `${term.id} must be MC only`);
  const scopedChapters = quizCatalog.filter(ch => ch.scope === "chapter" && ch.unitIds.some(id => term.unitIds.includes(id)) && quizTaxonomy[ch.id]);
  if (scopedChapters.length) {
    const coveredChapters = new Set(quiz.questions.map(q => q.taxonomyQuizId).filter(Boolean));
    for (const chapter of scopedChapters) {
      assert.ok(coveredChapters.has(chapter.id), `${term.id} must cover taxonomy chapter ${chapter.id}`);
    }
  }
}

const mock = generate(11527, 2);
assert.equal(mock.questions.length, 25, "mock must generate 25 MC");
assert.ok(mock.questions.every(q => q.type === "mc"), "mock must be MC only");

const freq = {};
for (const units of Object.values(primaryUnits)) units.forEach(unitId => { freq[unitId] = (freq[unitId] || 0) + 1; });
const poolUnitIds = new Set(taxonomyTopicPool().map(topic => topic.unitId));
const highFreqUnits = Object.entries(freq).sort((a, b) => b[1] - a[1]).map(([unitId]) => Number(unitId)).filter(unitId => poolUnitIds.has(unitId)).slice(0, 10);
const seenUnits = new Set();
for (let seed = 1; seed <= 12; seed++) generate(seed, 2).questions.forEach(q => seenUnits.add(q.unitId));
for (const unitId of highFreqUnits) {
  assert.ok(seenUnits.has(unitId), `high-frequency CAP unit ${unitId} should appear in mock samples`);
}

const pool = topicsForScope([12, 13, 14, 15, 28]);
const sample = sampleTaxonomyQuestions(rngFromSeed("sample-check"), pool, 25);
assert.equal(sample.length, 25, "sampleTaxonomyQuestions must fill requested count when pool is large enough");
assert.ok(sample.every(q => q.taxonomyKey), "sampled questions must carry taxonomyKey");

const drill = generateTopicDrill(chapters[0].id, quizTaxonomy[chapters[0].id].sections[0].topics[0].id, 42, 2);
assert.equal(drill.length, 2, "generateTopicDrill must return 2 questions");
assert.notEqual(drillQuestionSignature(drill[0]), drillQuestionSignature(drill[1]), "drill pair must differ");

console.log(`OK: ${taxonomyTopicPool().length} taxonomy topics × ${VARIANTS_PER_TOPIC} variants, ${termQuizzes.length} term quizzes at 25 MC, seed-stable chapter quizzes.`);
