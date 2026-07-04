import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const context = vm.createContext({ window: {}, console });

for (const file of ["data.js", "quiz-taxonomy.js", "quiz-variant-bank.js", "lecture-taxonomy.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const lectures = context.window.LECTURE_TAXONOMY || {};
const taxonomy = context.window.QUIZ_TAXONOMY || {};

const INSTRUCTION_PREFIX = /^[\u4e00-\u9fff]+｜/;
const isSlashFraction = text => {
  if (typeof text !== "string" || /\[\[frac:/.test(text)) return false;
  if (/\d\/\d+(?:mm|cm|m|km|mL|L|g)\b/i.test(text)) return false;
  if (/\d+\s*g\/\d+\s*g/i.test(text)) return false;
  return /[^\s/+\−\-×÷=，。；、\[\]]+\/[^\s/+\−\-×÷=，。；、\[\]]+/.test(text);
};
const assertExamText = (label, text) => {
  if (typeof text !== "string") return;
  assert.ok(!/\^/.test(text), `${label} must not contain ^`);
  assert.ok(!/｜/.test(text), `${label} must not contain fullwidth ｜`);
  assert.ok(!INSTRUCTION_PREFIX.test(text), `${label} must not have instruction prefix`);
  assert.ok(!isSlashFraction(text), `${label} must not use slash fractions`);
};

let topicCount = 0;
for (const chapter of Object.values(taxonomy)) {
  for (const section of chapter.sections || []) topicCount += section.topics.length;
}

assert.equal(Object.keys(lectures).length, topicCount, "lecture-taxonomy must have one entry per taxonomy topic");
assert.equal(Object.keys(lectures).length, 537, "lecture-taxonomy must cover 537 topics");

for (const [key, lecture] of Object.entries(lectures)) {
  const types = lecture.blocks.map(b => b.type);
  assert.ok(types.includes("text"), `${key} must have text block`);
  assert.ok(types.includes("example"), `${key} must have example block`);
  assert.ok(types.includes("pitfall"), `${key} must have pitfall block`);
  const example = lecture.blocks.find(b => b.type === "example");
  assert.ok(example.q.trim().length >= 8, `${key} example question must be substantive`);
  assert.ok(example.a.trim().length >= 15, `${key} example answer must include worked solution`);
  assertExamText(`${key} example q`, example.q);
  assertExamText(`${key} example a`, example.a);
  for (const block of lecture.blocks.filter(b => b.type === "diagram")) {
    assert.equal(block.spec?.verified, true, `${key} diagram block must be teacher-verified`);
  }
}

console.log(`OK: ${Object.keys(lectures).length} lecture entries validated (exam text sanitized).`);
