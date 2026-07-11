#!/usr/bin/env node
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import vm from "node:vm";
import policy from "./v2-qa/policies/math-tw-v1.mjs";
import { hashPolicy } from "./v2-qa/policies/policy-hash.mjs";
import { auditQuestionBank, auditLectureBank, mergeAuditResults } from "./v2-qa/checkers/content-standard.mjs";

const mathRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
function load(name, key) { const c = { window: {} }; vm.runInNewContext(readFileSync(path.join(mathRoot, "v2", name), "utf8"), c); return c.window[key]; }

export function verifyU01Policy() {
  assert.equal(policy.id, "math-content-standard-tw"); assert.equal(policy.version, "1.1.0"); assert.equal(hashPolicy(), "72384ef7b0a3ab549d676c8e9f4af044aa694807d1ee36d3b016d8a3ce13d271");
  const questions = load("math-question-bank-v2-u01.js", "MATH_QUESTION_BANK_V2_U01"), lectures = load("math-lecture-v2-u01.js", "MATH_LECTURE_V2_U01");
  assert.equal(questions.length, 60); assert.equal(lectures.length, 15); assert.equal(new Set(questions.map(x => x.questionId)).size, 60); assert.equal(new Set(lectures.map(x => x.skillId)).size, 15); assert.equal(new Set(questions.map(x => x.skillId)).size, 15);
  assert.deepEqual([0, 1, 2, 3].map(index => questions.filter(x => x.answerIndex === index).length), [15, 15, 15, 15]);
  assert.deepEqual(Object.fromEntries(["basic", "standard", "literacy", "advanced"].map(level => [level, questions.filter(x => x.difficulty === level).length])), { basic: 28, standard: 30, literacy: 2, advanced: 0 });
  for (const skillId of new Set(questions.map(x => x.skillId))) { const skill = questions.filter(x => x.skillId === skillId); assert.equal(skill.length, 4); assert.deepEqual([0, 1, 2, 3].map(index => skill.filter(x => x.answerIndex === index).length), [1, 1, 1, 1]); }
  const audit = mergeAuditResults([auditQuestionBank({ unit: "U01", path: "question", questions, policy }), auditLectureBank({ unit: "U01", path: "lecture", lectures, policy })]);
  const rules = audit.mechanical.reduce((m, x) => m.set(x.rule, (m.get(x.rule) ?? 0) + 1), new Map());
  assert.deepEqual(Object.fromEntries(rules), { "missing-advanced-coverage": 15, "missing-literacy-coverage": 14 });
  assert.deepEqual(audit.requiresHumanReview.map(x => [x.recordId, x.rule]), [["u01-s004-v002", "generic-stem-review"], ["u01-s006-v004", "generic-stem-review"]]);
  return { questions: 60, lectures: 15, skills: 15, mechanical: Object.fromEntries(rules), targeted: 2 };
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) console.log(JSON.stringify(verifyU01Policy()));
