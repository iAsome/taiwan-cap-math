const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const assert = require("node:assert/strict");

const root = path.resolve(__dirname, "..");
const context = { window: {}, console };
for (const file of ["data.js", "questions.js"]) {
  vm.runInNewContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const { units } = context.window.SCIENCE_DATA;
const { quizCatalog, generateQuiz, generate } = context.window.EXAM_ENGINE;

assert.equal(units.length, 21, "must keep 21 units");
assert.equal(quizCatalog.filter(i => i.scope === "term").length, 6, "must keep 6 term/review quizzes");
assert.equal(quizCatalog.filter(i => i.scope === "chapter").length, 21, "must expose 21 chapter quizzes (one per unit)");

for (const blueprint of quizCatalog) {
  const quiz = generateQuiz(blueprint.id);
  assert.equal(quiz.questions.length, blueprint.questionCount, `${blueprint.id} question count mismatch`);
  assert.deepEqual([...new Set(quiz.questions.map(q => q.type))], ["mc"], `${blueprint.id} must be multiple-choice only`);
  for (const q of quiz.questions) {
    assert.ok(blueprint.unitIds.includes(q.unitId), `${blueprint.id} leaked unit ${q.unitId}`);
    assert.equal(new Set(q.choices).size, 4, `${blueprint.id} question has duplicate choices`);
    assert.ok(q.answer >= 0 && q.answer < 4, `${blueprint.id} question has invalid answer index`);
  }
}

for (let seed = 1; seed <= 10; seed++) {
  const exam = generate(seed, 2);
  const coveredUnits = new Set(exam.questions.map(q => q.unitId));
  assert.equal(coveredUnits.size, units.length, `mock exam seed=${seed} must cover all ${units.length} units`);
  for (const q of exam.questions) {
    assert.equal(new Set(q.choices).size, 4, `mock seed=${seed} question has duplicate choices`);
  }
}

console.log("verify-quizzes: all checks passed");
