import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { HUMAN_PRODUCTION_CONFIG } from "../../human-runtime/config.mjs";
import { HumanProductionRuntime } from "../../human-runtime/engine.mjs";

const mathDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const runtimeDir = path.join(mathDir, "human-runtime");
const loadJson = async url => JSON.parse(fs.readFileSync(fileURLToPath(url), "utf8"));
const runtime = await new HumanProductionRuntime({
  manifestUrl: pathToFileURL(path.join(runtimeDir, "content/manifest.json")),
  syllabusLockUrl: pathToFileURL(path.join(runtimeDir, "content/syllabus-lock.json")),
  blueprintUrl: pathToFileURL(path.join(runtimeDir, "release-blueprint-r1.json")),
  expectedContentVersion: HUMAN_PRODUCTION_CONFIG.expectedContentVersion,
  loadJson
}).initialize();

const units = await runtime.loadAllUnits();
let lectures = 0, mc = 0, cr = 0, questionFigures = 0, lectureFigures = 0, figures = 0;

for (const source of runtime.figureById.values()) {
  const figure = runtime.figureMetadata(source.figureId);
  figures++;
  assert(figure.figureUrl && figure.figureAlt && figure.figureCaption && figure.figureDescription, source.figureId);
  assert.notEqual(figure.figureDescription, figure.figureAlt, source.figureId);
}

for (const unit of units) for (const skill of unit.skills) {
  const lecture = runtime.lectureForApp(skill);
  lectures++;
  assert(lecture.stepGuide.length && lecture.stepGuide.every(item => item && !item.includes("undefined")), skill.skillId);
  assert(lecture.examples.length >= 2 && lecture.examples.every(item => item.prompt && item.answer && item.why), skill.skillId);
  assert(lecture.commonMistakes.length >= 4 && lecture.commonMistakes.every(item => item && !item.includes("undefined")), skill.skillId);
  const sourceFormulas = skill.lecture.formulas?.length ? skill.lecture.formulas : (skill.lecture.formulasAndConditions || []);
  if (sourceFormulas.length) assert(lecture.formula, skill.skillId);
  for (const formula of sourceFormulas) {
    const visible = typeof formula === "string" ? formula : Array.isArray(formula) ? formula[0] : formula.formula;
    if (visible) assert(lecture.formula.includes(visible), skill.skillId);
    if (!Array.isArray(formula) && formula?.meaning) assert(lecture.formula.includes(formula.meaning), skill.skillId);
  }
  const checks = skill.lecture.selfCheck ?? skill.lecture.selfCheckItems ?? skill.lecture.selfChecks ?? [];
  for (const item of checks) {
    const visible = typeof item === "string" ? item : item.prompt || item.text;
    if (visible) assert(lecture.fullScoreExtension.includes(visible), skill.skillId);
  }
  assert(!lecture.fullScoreExtension.includes("[object Object]"), skill.skillId);
  assert(lecture.figures.every(item => item.figureUrl && item.figureAlt && item.figureCaption && item.figureDescription), skill.skillId);
  lectureFigures += lecture.figures.length;

  for (const source of skill.mcQuestions) {
    const question = runtime.adaptMc(source);
    mc++;
    assert(question.text && question.explanation && question.concept, source.questionId);
    assert(Array.isArray(question.steps) && question.steps.length, source.questionId);
    assert(question.trap && question.trap !== "注意題目條件與符號。", source.questionId);
    if (sourceFormulas.length) assert(question.formula, source.questionId);
    assert(question.optionAnalysis.every((item, index) => item.choice === source.choices[index]), source.questionId);
    if (source.figureId) {
      questionFigures++;
      assert(question.figureUrl && question.figureAlt && question.figureCaption && question.figureDescription, source.questionId);
    }
  }

  for (const source of skill.constructedResponses) {
    const question = runtime.adaptCr(source);
    cr++;
    assert(Array.isArray(question.steps) && question.steps.length && question.steps.every(item => typeof item === "string" && item), source.questionId);
    const expectedStepCount = Math.max(...[source.reasoningSteps, source.solutionSteps, source.fullCreditSolution, source.standardSolution]
      .map(value => Array.isArray(value) ? value.length : value ? 1 : 0));
    assert.equal(question.steps.length, expectedStepCount, source.questionId);
    assert(question.answer, source.questionId);
    if (source.figureId) {
      questionFigures++;
      assert(question.figureUrl && question.figureAlt && question.figureCaption && question.figureDescription, source.questionId);
    }
  }
}

const prismSkill = runtime.skillById.get("prism-volume").skill;
const prismExample = prismSkill.lecture.workedExamples[0];
assert.deepEqual(runtime.lectureForApp(prismSkill).examples[0], {
  prompt: prismExample["1"], answer: prismExample["3"], why: prismExample.why
});
const tupleExample = runtime.lectureForApp({
  skillId: "tuple-probe",
  lecture: { workedExamples: [["L1", "題幹", ["步驟一", "步驟二"], "答案"]] }
}).examples[0];
assert.deepEqual(tupleExample, { prompt: "題幹", answer: "答案", why: "步驟一；步驟二" });
const malformedExample = runtime.lectureForApp({
  skillId: "malformed-probe",
  lecture: { workedExamples: [{ "0": "L1", "1": "題幹", "2": ["步驟"], why: "理由" }] }
}).examples[0];
assert.equal(Object.values(malformedExample).every(Boolean), false);

assert.deepEqual(
  { units: units.length, lectures, mc, cr, figures, questionFigures, lectureFigures },
  { units: 23, lectures: 339, mc: 4068, cr: 678, figures: 178, questionFigures: 245, lectureFigures: 157 }
);
console.log(JSON.stringify({ status: "PASS_RUNTIME_ADAPTER_R4", units: units.length, lectures, mc, cr, figures, questionFigures, lectureFigures }));
