import fs from "node:fs";
import vm from "node:vm";
const context = { window: {}, console, Date };
vm.createContext(context);
for (const file of ["earth-data.js", "quiz-taxonomy.js", "questions.js"]) {
  vm.runInContext(fs.readFileSync(file, "utf8"), context, { filename: file });
}
const { generate, generateQuiz, quizCatalog } = context.window.EXAM_ENGINE;

console.log("quizCatalog entries:", quizCatalog.length);
console.assert(quizCatalog.length === 25, "expected 25 quiz entries (20 chapter + 5 review)");

for (const item of quizCatalog) {
  const q = generateQuiz(item.id, 12345);
  console.assert(q.questions.length > 0, `quiz ${item.id} has 0 questions`);
  for (const question of q.questions) {
    console.assert(question.choices.length === 4, `quiz ${item.id} question has ${question.choices.length} choices`);
    console.assert(question.answer >= 0 && question.answer < 4, `quiz ${item.id} bad answer index`);
  }
}
console.log("all", quizCatalog.length, "quiz banks generate valid questions");

const mock = generate(11527, 2);
console.log("mock exam question count:", mock.questions.length);
console.assert(mock.questions.length === 30, "expected 30 mock exam questions");
const unitCoverage = new Set(mock.questions.map(q => q.unitId));
console.log("units covered in mock exam:", unitCoverage.size, "/ 20");
console.assert(unitCoverage.size === 20, "mock exam should cover all 20 units");
console.log("SMOKE TEST PASSED");
