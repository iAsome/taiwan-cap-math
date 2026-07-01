const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const assert = require("node:assert/strict");

const root = path.resolve(__dirname, "..");
const context = { window: {}, console };

for (const file of ["data.js", "analysis-data.js", "questions.js"]) {
  vm.runInNewContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const { units } = context.window.CHINESE_DATA;
const { quizCatalog, generateQuiz, generate } = context.window.EXAM_ENGINE;

const term = quizCatalog.filter(item => item.scope === "term");
const chapters = quizCatalog.filter(item => item.scope === "chapter");
assert.equal(term.length, 9, "must keep 9 term/review quizzes");
assert.equal(chapters.length, units.length, "must expose one chapter quiz per unit");

const chapterByUnit = new Map();
for (const chapter of chapters) {
  const quiz = generateQuiz(chapter.id);
  assert.ok(quiz.questions.length > 0, `${chapter.id} must generate questions`);
  assert.deepEqual([...new Set(quiz.questions.map(q => q.type))], ["mc"], `${chapter.id} must be multiple-choice only`);
  for (const q of quiz.questions) assert.ok(chapter.unitIds.includes(q.unitId), `${chapter.id} leaked unit ${q.unitId}`);
  for (const unitId of chapter.unitIds) {
    assert.ok(!chapterByUnit.has(unitId), `unit ${unitId} is mapped to multiple chapter quizzes`);
    chapterByUnit.set(unitId, chapter.id);
  }
}

for (const unit of units) assert.ok(chapterByUnit.has(unit.id), `unit ${unit.id} is missing a chapter quiz`);

const mock = generate(11527, 2);
assert.equal(mock.questions.length, 42, "mock exam must have 42 questions");
assert.deepEqual([...new Set(mock.questions.map(q => q.type))], ["mc"], "mock exam must be multiple-choice only");

const { primaryUnits } = context.window.CAP_ANALYSIS;
const officialItems = Object.values(primaryUnits).flat();
for (const unitId of officialItems) assert.ok(chapterByUnit.has(unitId), `CAP unit ${unitId} has no chapter mapping`);

console.log(`OK: ${term.length} term quizzes, ${chapters.length} chapter quizzes (one per unit), 42-question mock exam, ${officialItems.length} archived CAP items mapped.`);
