#!/usr/bin/env node
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import policy from "../policies/math-tw-v1.mjs";
import { hashPolicy, stableSerialize } from "../policies/policy-hash.mjs";
import {
  auditLectureBank, auditQuestionBank, auditSourceText, classifyChoiceMeasurement,
  isBlockingMechanicalFinding, selectStudentFacing, sortFindings
} from "../checkers/content-standard.mjs";
import { legacyLectureExample, validLecture, validQuestion } from "./policy-fixtures.mjs";

const q = overrides => auditQuestionBank({ unit: "U01", path: "fixture", questions: [validQuestion(overrides), validQuestion({ questionId: "u01-s001-v002", difficulty: "literacy" })], policy }).mechanical;
const qAll = overrides => auditQuestionBank({ unit: "U01", path: "fixture", questions: [validQuestion(overrides), validQuestion({ questionId: "u01-s001-v002", difficulty: "literacy" })], policy });
const l = overrides => auditLectureBank({ unit: "U01", path: "fixture", lectures: [validLecture(overrides)], policy }).mechanical;
const lAll = overrides => auditLectureBank({ unit: "U01", path: "fixture", lectures: [validLecture(overrides)], policy });
const has = (items, rule) => items.some(item => item.rule === rule);
const oldHash = "6914efe327bc5cf70480b354c85a4f5a897e3f728b9fef687413ab97dfdfed1a";

assert.match(hashPolicy(), /^[0-9a-f]{64}$/);
assert.equal(hashPolicy(), hashPolicy());
assert.notEqual(hashPolicy(), oldHash);
assert.notEqual(hashPolicy({ documentBytes: Buffer.from("changed") }), hashPolicy());
assert.equal(stableSerialize({ b: 1, a: [2, 1] }), '{"a":[2,1],"b":1}');
assert.equal(policy.version, "1.1.0");

assert.equal(q().some(x => x.category === "terminology"), false);
for (const token of ["公釐", "公厘", "厘米", "千米"]) assert(has(q({ text: `3${token}` }), "prohibited-unit"));
assert.equal(has(q({ text: "3公里" }), "prohibited-unit"), false);
assert.equal(has(q({ text: "3公里" }), "contextual-simplified-token"), false);
assert(has(q({ text: "這里有3公尺長" }), "contextual-simplified-token"));
assert.equal(auditSourceText({ path: "x", text: "組 場", policy }).mechanical.length, 0);
assert(has(auditSourceText({ path: "x", text: "组", policy }).mechanical, "prohibited-token"));
assert(has(auditSourceText({ path: "x", text: "场", policy }).mechanical, "prohibited-token"));
assert(has(q({ choices: ["1公尺", "2 m", "3公尺", "4公尺"] }), "mixed-unit-presentation"));
assert.equal(has(q({ text: "3 公尺長" }), "spaced-chinese-unit"), false);
assert.equal(has(q({ text: "20公尺長" }), "spaced-chinese-unit"), false);
assert.equal(has(q({ choices: ["20公尺", "21公尺", "22公尺", "23公尺"] }), "spaced-chinese-unit"), false);
assert.equal(has(q({ choices: ["20 公尺", "21 公尺", "22 公尺", "23 公尺"] }), "spaced-chinese-unit"), false);
assert.equal(has(q({ choices: ["1公尺", "2公斤", "3公尺", "4公尺"] }), "mixed-unit-dimensions"), false);
const mixed = qAll({ choices: ["1公尺", "2公斤", "3公尺", "4公尺"] });
assert(mixed.requiresHumanReview.some(x => x.rule === "mixed-unit-dimensions-review"));
assert.equal(mixed.mechanical.some(x => x.rule === "mixed-unit-dimensions"), false);
assert(has(q({ text: "x<=3" }), "prohibited-visible-notation"));
assert(has(q({ text: "x>=3" }), "prohibited-visible-notation"));
assert(has(q({ text: "3 x 4 = 12" }), "ambiguous-numeric-x"));
const duplicateExplanation = q({ explanation: "這是重複句子說明。這是重複句子說明。" });
assert(has(duplicateExplanation, "duplicate-explanation-sentence"));
assert.equal(duplicateExplanation.find(x => x.rule === "duplicate-explanation-sentence")?.severity, "MEDIUM");
assert(has(q({ steps: ["同一步驟", "同一步驟", "檢查"] }), "duplicate-exact-step"));
assert(has(q({ text: "如圖所示，求長度。" }), "undeclared-image-dependency"));
assert(has(q({ explanation: "太短" }), "question-explanation-min"));
assert(has(l({ concept: "太短" }), "lecture-concept-min"));
assert(has(l({ stepGuide: ["1"] }), "lecture-step-guide-min"));
assert(has(l({ examples: [] }), "lecture-examples-min"));
assert(has(l({ commonMistakes: [] }), "lecture-common-mistakes-min"));
assert(has(l({ examples: [{ prompt: "q", answer: "a", why: "太短" }, validLecture().examples[1]] }), "lecture-example-why-min"));
assert.equal(lAll({ examples: [validLecture().examples[0], validLecture().examples[1]] }).mechanical.some(x => x.rule === "lecture-example-why-min"), false);
assert.equal(lAll({ examples: [validLecture().examples[0], validLecture().examples[1]] }).mechanical.some(x => x.rule === "legacy-lecture-example-schema"), false);
const missing = auditQuestionBank({ unit: "U01", path: "fixture", questions: [validQuestion({ difficulty: "basic" })], policy }).mechanical;
assert(has(missing, "missing-advanced-coverage")); assert(has(missing, "missing-literacy-coverage"));

const schemaOnly = new Set(["schema"]);
assert.equal(auditQuestionBank({ unit: "U01", path: "fixture", questions: [validQuestion({ text: "3公釐" })], policy, checks: schemaOnly }).mechanical.some(x => x.rule === "prohibited-unit"), false);
assert(auditQuestionBank({ unit: "U01", path: "fixture", questions: [validQuestion({ text: "3公釐" })], policy, checks: new Set(["schema", "units"]) }).mechanical.some(x => x.rule === "prohibited-unit"));
assert.deepEqual(Object.keys(selectStudentFacing(validQuestion({ questionId: "组" }), policy)).sort(), ["choices", "commonMistake", "explanation", "steps", "text"].sort());
assert.equal(auditQuestionBank({ unit: "U01", path: "fixture", questions: [validQuestion({ questionId: "组" })], policy }).mechanical.some(x => x.category === "terminology"), false);
assert(auditQuestionBank({ unit: "U01", path: "fixture", questions: [validQuestion({ text: "组" })], policy }).mechanical.some(x => x.category === "terminology"));
assert.equal(auditQuestionBank({ unit: "U01", path: "fixture", questions: [validQuestion()], policy }).requiresHumanReview.length, 0);
assert.equal(auditLectureBank({ unit: "U01", path: "fixture", lectures: [validLecture()], policy }).requiresHumanReview.length, 0);
const targeted = auditQuestionBank({ unit: "U01", path: "fixture", questions: [validQuestion({ text: "如圖所示，求長度。" })], policy }).requiresHumanReview;
assert(targeted.some(x => x.rule === "undeclared-image-dependency-review" && x.evidence === "如圖所示，求長度。"));

const ordered = q({ text: "3 x 4 <= 12", explanation: "太短" });
assert.deepEqual(ordered, sortFindings([...ordered].reverse()));

const noUnitCases = ["20m³n⁴", "20m²n³", "m² − 10m + 25", "5m − 25", "3x + 2m", "m", "m²"];
for (const choice of noUnitCases) assert.equal(classifyChoiceMeasurement(choice, policy), null, choice);
const unitCases = [
  ["20 m", "length"], ["20m", "length"], ["5 cm", "length"], ["5cm", "length"],
  ["300 m²", "area"], ["300m²", "area"], ["4 kg", "mass"], ["4kg", "mass"],
  ["250 mL", "volume"], ["250mL", "volume"], ["3公尺", "length"], ["3 公尺", "length"],
  ["20平方公尺", "area"], ["20 平方公尺", "area"]
];
for (const [choice, family] of unitCases) {
  const result = classifyChoiceMeasurement(choice, policy);
  assert(result, choice);
  assert.equal(result.family, family, choice);
  assert.equal(result.confident, true, choice);
}

const legacyWhy = "先以總量除以等分數得到每一份的數量，再用乘法逆向檢查所有份數的合計，因此能同時確認數值與單位都正確。";
const legacyExamples = [legacyLectureExample("6公尺分3段", legacyWhy), legacyLectureExample("8公升分4份", legacyWhy)];
const legacyAudit = lAll({ examples: legacyExamples }).mechanical;
assert.equal(legacyAudit.filter(x => x.rule === "legacy-lecture-example-schema").length, 1);
assert.equal(legacyAudit.some(x => x.rule === "lecture-example-why-min"), false);
assert.equal(legacyAudit.some(x => x.rule === "lecture-example-explanation-min"), false);
const shortLegacy = lAll({ examples: [legacyLectureExample("題目", "太短"), legacyLectureExample("題目二", legacyWhy)] }).mechanical;
assert(has(shortLegacy, "lecture-example-explanation-min"));
assert.equal(shortLegacy.some(x => x.rule === "lecture-example-why-min"), false);
const mixedSchema = lAll({ examples: [{ prompt: "題目", answer: "答案", why: legacyWhy }, legacyLectureExample("題目二", legacyWhy)] }).mechanical;
assert(mixedSchema.some(x => x.rule === "lecture-example-schema" && x.severity === "BLOCKER"));
assert(has(l({ examples: [{ prompt: "題目", answer: "", why: legacyWhy }, validLecture().examples[1]] }), "lecture-example-schema"));

const residueFinding = q({ explanation: "題目給定總長為三公尺，並且平均分成三段，因此用總長除以段數，三除以三等於一，所以每段長一公尺，其餘選項都不符合平均分配的結果。TODO" }).find(x => x.rule === "machine-residue");
assert.equal(residueFinding?.severity, "MEDIUM");
assert(isBlockingMechanicalFinding(residueFinding, policy));
assert(isBlockingMechanicalFinding({ kind: "mechanical", severity: "MEDIUM", category: "lecture", rule: "legacy-lecture-example-schema" }, policy));
assert.equal(isBlockingMechanicalFinding({ kind: "mechanical", severity: "LOW", category: "language", rule: "english-instruction-label-review" }, policy), false);
assert.equal(isBlockingMechanicalFinding({ kind: "requiresHumanReview", severity: "MEDIUM", category: "units", rule: "mixed-unit-dimensions-review" }, policy), false);

const intentionalMixed = qAll({ choices: ["70 公尺", "300 平方公尺", "35 平方公尺", "300 公尺"] });
assert.equal(intentionalMixed.requiresHumanReview.filter(x => x.rule === "mixed-unit-dimensions-review").length, 1);
assert.equal(intentionalMixed.mechanical.some(x => x.rule === "mixed-unit-dimensions"), false);
assert(intentionalMixed.requiresHumanReview[0].evidence.includes("families="));

const before = new Set(process.cwd() ? [] : []);
await import("../policies/math-tw-v1.mjs"); await import("../policies/policy-hash.mjs"); await import("../checkers/content-standard.mjs");
assert(before instanceof Set);
assert(readFileSync(new URL("../policies/math-tw-v1.mjs", import.meta.url), "utf8").includes("math-content-standard-tw"));
console.log("content-standard.test.mjs: OK");
