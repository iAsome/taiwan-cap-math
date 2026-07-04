const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const assert = require("node:assert/strict");

const root = path.resolve(__dirname, "..");
const context = { window: {}, console };

for (const file of ["data.js", "analysis-data.js", "math-text-sanitize.js", "quiz-taxonomy.js", "quiz-variant-bank.js", "quiz-variants.js", "questions.js"]) {
  vm.runInNewContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}
context.MATH_TEXT_SANITIZE = context.window.MATH_TEXT_SANITIZE;

const { quizCatalog, generateQuiz } = context.window.EXAM_ENGINE;
const { primaryUnits } = context.window.CAP_ANALYSIS;

const term = quizCatalog.filter(item => item.scope === "term");
const chapters = quizCatalog.filter(item => item.scope === "chapter");
assert.equal(term.length, 9, "must keep 9 term/review quizzes");
assert.equal(chapters.length, 24, "must expose 24 chapter quizzes");

const chapterByUnit = new Map();
for (const chapter of chapters) {
  const quiz = generateQuiz(chapter.id);
  assert.equal(quiz.questions.length, chapter.questionCount, `${chapter.id} must generate ${chapter.questionCount} questions`);
  assert.deepEqual([...new Set(quiz.questions.map(q => q.type))], ["mc"], `${chapter.id} must be multiple-choice only`);
  for (const q of quiz.questions) assert.ok(chapter.unitIds.includes(q.unitId), `${chapter.id} leaked unit ${q.unitId}`);

  for (const unitId of chapter.unitIds) {
    if (unitId === 28) continue; // ponytail: 28 is a generated cumulative-frequency practice unit, not a CAP primary tag.
    assert.ok(!chapterByUnit.has(unitId), `unit ${unitId} is mapped to multiple chapters`);
    chapterByUnit.set(unitId, chapter.id);
  }
}

for (let unitId = 1; unitId <= 26; unitId++) {
  if (unitId === 27) continue; // cross-topic writing unit; no direct chapter quiz.
  assert.ok(chapterByUnit.has(unitId), `unit ${unitId} is missing a chapter`);
}

const officialItems = Object.values(primaryUnits).flat();
assert.equal(officialItems.length, 275, "106–115 official item count should stay 275");
for (const unitId of officialItems) {
  if (unitId === 27 || unitId === 28) continue; // 27 cross-topic CR; 28 cumulative-frequency practice
  assert.ok(chapterByUnit.has(unitId), `CAP unit ${unitId} has no chapter mapping`);
}

console.log("OK: 9 term quizzes, 24 chapter quizzes, 275 CAP items mapped.");
