import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const context = vm.createContext({ window: {}, console });

for (const file of ["data.js", "analysis-data.js", "quiz-taxonomy.js", "questions.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const {
  generate, generateQuiz, generateTopicDrill, quizCatalog,
  taxonomyTopicPool, topicsForScope, sampleTaxonomyQuestions
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
  const drill = generateTopicDrill(topic.quizId, topic.topicId, `${topic.quizId}-${topic.topicId}`, 1);
  const question = drill[0];
  assert.equal(question.type, "mc", `${topic.quizId}/${topic.topicId} must produce MC`);
  assert.ok(Array.isArray(question.choices) && question.choices.length === 4, `${topic.quizId}/${topic.topicId} must have 4 choices`);
  assert.ok(Number.isInteger(question.answer) && question.answer >= 0 && question.answer < 4, `${topic.quizId}/${topic.topicId} must have valid answer index`);
}

const chapters = quizCatalog.filter(item => item.scope === "chapter" && quizTaxonomy[item.id]);
for (const chapter of chapters) {
  const quiz = generateQuiz(chapter.id);
  const topicCount = quizTaxonomy[chapter.id].sections.reduce((sum, section) => sum + section.topics.length, 0);
  assert.equal(quiz.questions.length, topicCount, `${chapter.id} must have one question per taxonomy topic`);
  assert.equal(quiz.questions.length, chapter.questionCount, `${chapter.id} questionCount must match taxonomy`);
  assert.ok(quiz.questions.every(q => q.taxonomyKey), `${chapter.id} questions must carry taxonomyKey`);
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

console.log(`OK: ${taxonomyTopicPool().length} taxonomy topics, ${termQuizzes.length} term quizzes at 25 MC, mock pool verified.`);
