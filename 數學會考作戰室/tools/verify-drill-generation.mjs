import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const repo = path.dirname(root);
const context = vm.createContext({ window: {}, console, globalThis: {} });

vm.runInContext(fs.readFileSync(path.join(repo, "shared", "fraction-markup.js"), "utf8"), context, { filename: "fraction-markup.js" });
context.globalThis.FRACTION_MARKUP = context.window.FRACTION_MARKUP;
context.FRACTION_MARKUP = context.window.FRACTION_MARKUP;

for (const file of ["data.js", "analysis-data.js", "math-text-sanitize.js", "quiz-taxonomy.js", "quiz-variant-bank.js", "quiz-variants.js", "questions.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}
context.MATH_TEXT_SANITIZE = context.window.MATH_TEXT_SANITIZE;

const {
  generateTopicDrill, generateUnitDrill, taxonomyTopicPool,
  VARIANTS_PER_TOPIC, drillQuestionSignature
} = context.window.EXAM_ENGINE;
const quizTaxonomy = context.window.QUIZ_TAXONOMY || {};
const bank = context.window.QUIZ_VARIANT_BANK || {};

let topicChecks = 0;
for (const topic of taxonomyTopicPool()) {
  const key = `${topic.quizId}/${topic.topicId}`;
  const presets = bank[key];
  assert.ok(presets?.length === VARIANTS_PER_TOPIC, `${key} missing frozen presets`);
  for (let vi = 0; vi < VARIANTS_PER_TOPIC; vi++) {
    const sample = presets[vi];
    const drill = generateTopicDrill(topic.quizId, topic.topicId, `${topic.quizId}-${topic.topicId}-${vi}`, 1, [drillQuestionSignature(sample)]);
    assert.equal(drill.length, 1, `${topic.quizId}/${topic.topicId} vi=${vi} must return 1 drill question`);
    assert.notEqual(drillQuestionSignature(drill[0]), drillQuestionSignature(sample), `${topic.quizId}/${topic.topicId} vi=${vi} must differ from excluded original`);
    topicChecks += 1;
  }
}

let unitChecks = 0;
for (const unitId of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28]) {
  for (let seed = 0; seed < 20; seed++) {
    let sample;
    try {
      sample = generateUnitDrill(unitId, `sample-${unitId}-${seed}`, 1, 2, [])[0];
    } catch (error) {
      assert.fail(`unit ${unitId} seed ${seed} sample failed: ${error.message}`);
    }
    const drill = generateUnitDrill(unitId, `drill-${unitId}-${seed}`, 1, 2, [drillQuestionSignature(sample)]);
    assert.equal(drill.length, 1, `unit ${unitId} seed ${seed} must return 1 drill question`);
    assert.notEqual(drillQuestionSignature(drill[0]), drillQuestionSignature(sample), `unit ${unitId} seed ${seed} must differ from excluded sample`);
    unitChecks += 1;
  }
}

console.log(`OK: drill generation ${topicChecks} topic cases + ${unitChecks} unit cases`);
