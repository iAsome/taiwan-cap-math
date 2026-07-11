#!/usr/bin/env node
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import policy from "../policies/math-tw-v1.mjs";
import { hashPolicy, stableSerialize } from "../policies/policy-hash.mjs";
import { auditLectureBank, auditQuestionBank, auditSourceText, sortFindings } from "../checkers/content-standard.mjs";
import { validLecture, validQuestion } from "./policy-fixtures.mjs";

const q = overrides => auditQuestionBank({ unit: "U01", path: "fixture", questions: [validQuestion(overrides), validQuestion({ questionId: "u01-s001-v002", difficulty: "literacy" })], policy }).mechanical;
const l = overrides => auditLectureBank({ unit: "U01", path: "fixture", lectures: [validLecture(overrides)], policy }).mechanical;
const has = (items, rule) => items.some(item => item.rule === rule);

assert.match(hashPolicy(), /^[0-9a-f]{64}$/);
assert.equal(hashPolicy(), hashPolicy());
assert.notEqual(hashPolicy({ documentBytes: Buffer.from("changed") }), hashPolicy());
assert.equal(stableSerialize({ b: 1, a: [2, 1] }), '{"a":[2,1],"b":1}');

assert.equal(q().some(x => x.category === "terminology"), false);
for (const token of ["公釐", "公厘", "厘米", "千米"]) assert(has(q({ text: `3${token}` }), "prohibited-token"));
assert.equal(has(q({ text: "3公里" }), "prohibited-token"), false);
assert.equal(has(q({ text: "3公里" }), "contextual-simplified-token"), false);
assert(has(q({ text: "這里有3公尺長" }), "contextual-simplified-token"));
assert.equal(auditSourceText({ path: "x", text: "組 場", policy }).mechanical.length, 0);
assert(has(auditSourceText({ path: "x", text: "组", policy }).mechanical, "prohibited-token"));
assert(has(auditSourceText({ path: "x", text: "场", policy }).mechanical, "prohibited-token"));
assert(has(q({ choices: ["1公尺", "2 m", "3公尺", "4公尺"] }), "mixed-unit-presentation"));
assert(has(q({ text: "3 公尺長" }), "spaced-chinese-unit"));
assert(has(q({ choices: ["1公尺", "2公斤", "3公尺", "4公尺"] }), "mixed-unit-dimensions"));
assert(has(q({ text: "x<=3" }), "prohibited-visible-notation"));
assert(has(q({ text: "x>=3" }), "prohibited-visible-notation"));
assert(has(q({ text: "3 x 4 = 12" }), "ambiguous-numeric-x"));
assert(has(q({ explanation: "這是重複句子說明。這是重複句子說明。" }), "duplicate-explanation-sentence"));
assert(has(q({ steps: ["同一步驟", "同一步驟", "檢查"] }), "duplicate-exact-step"));
assert(has(q({ text: "如圖所示，求長度。" }), "undeclared-image-dependency"));
assert(has(q({ explanation: "太短" }), "question-explanation-min"));
assert(has(l({ concept: "太短" }), "lecture-concept-min"));
assert(has(l({ stepGuide: ["1"] }), "lecture-step-guide-min"));
assert(has(l({ examples: [] }), "lecture-examples-min"));
assert(has(l({ commonMistakes: [] }), "lecture-common-mistakes-min"));
assert(has(l({ examples: [{ q: "q", a: "a", why: "太短" }, validLecture().examples[1]] }), "lecture-example-why-min"));
const missing = auditQuestionBank({ unit: "U01", path: "fixture", questions: [validQuestion({ difficulty: "basic" })], policy }).mechanical;
assert(has(missing, "missing-advanced-coverage")); assert(has(missing, "missing-literacy-coverage"));

const ordered = q({ text: "3 x 4 <= 12", explanation: "太短" });
assert.deepEqual(ordered, sortFindings([...ordered].reverse()));

const before = new Set(process.cwd() ? [] : []);
await import("../policies/math-tw-v1.mjs"); await import("../policies/policy-hash.mjs"); await import("../checkers/content-standard.mjs");
assert(before instanceof Set);
assert(readFileSync(new URL("../policies/math-tw-v1.mjs", import.meta.url), "utf8").includes("math-content-standard-tw"));
console.log("content-standard.test.mjs: OK");
