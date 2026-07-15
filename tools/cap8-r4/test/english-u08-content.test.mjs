import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath, pathToFileURL } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..", "..", "..");
const BUILDER_PATH = path.join(ROOT, "tools", "cap8-r4", "build-english-unit.mjs");
const RUNTIME_ROOT = path.join(ROOT, "英文會考作戰室", "r4", "runtime");
const UNIT_ID = "ENG_R4_U08";
const UNIT_SKILLS = Array.from({ length: 7 }, (_, index) => `ENG_R4_S${String(index + 50).padStart(3, "0")}`);
const HAN = /\p{Script=Han}/u;
const GENERIC_PROMPTS = [
  "Choose the best answer.",
  "Choose the best repair.",
  "Choose the standard English sentence.",
  "Complete the sentence.",
  "Read and choose the best answer.",
  "Which answer is correct?",
  "Which sentence is correct?",
  "Which sentence is grammatical?",
  "Which sentence has a clear meaning?",
  "Which sentence uses standard English?",
  "Which sentence uses the pattern correctly?",
];
const FAKE_CONTEXT = /^(?:At school|In class|In a message|In a short note|On a practice page|For a class report|In a club plan),/i;

let apiPromise;
async function api() {
  apiPromise ??= import(pathToFileURL(BUILDER_PATH).href);
  return apiPromise;
}

async function filesBelow(directory) {
  const values = [];
  async function visit(current) {
    for (const entry of await readdir(current, { withFileTypes: true })) {
      const absolute = path.join(current, entry.name);
      if (entry.isDirectory()) await visit(absolute);
      else values.push(absolute);
    }
  }
  await visit(directory);
  return values.sort((a, b) => a.localeCompare(b, "en"));
}

async function treeHash(directory) {
  const hash = createHash("sha256");
  for (const file of await filesBelow(directory)) {
    hash.update(path.relative(directory, file).replaceAll("\\", "/"));
    hash.update("\0");
    hash.update(await readFile(file));
    hash.update("\0");
  }
  return hash.digest("hex");
}

function normalizedQuestionPart(value, properNames) {
  let result = value.toLowerCase().replaceAll("’", "'").replace(FAKE_CONTEXT, "");
  for (const name of properNames) result = result.replace(new RegExp(`\\b${name.toLowerCase()}(?:'s)?\\b`, "g"), "<name>");
  return result
    .replace(/\b\d+(?::\d+)?\b/g, "<number>")
    .replace(/\b(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/g, "<day>")
    .replace(/\b(?:morning|afternoon|evening|night|today|tonight|tomorrow|yesterday)\b/g, "<time>")
    .replace(/[^a-z0-9_'<>/]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

test("English unit builder imports without writing runtime content", async () => {
  const before = await treeHash(RUNTIME_ROOT);
  await import(`${pathToFileURL(BUILDER_PATH).href}?side-effect-check=1`);
  assert.equal(await treeHash(RUNTIME_ROOT), before);
});

test("U08 has complete static lecture and question floors", async () => {
  const { loadEnglishUnitSource, materializeEnglishUnit } = await api();
  const source = await loadEnglishUnitSource(UNIT_ID);
  const materialized = await materializeEnglishUnit(source);
  assert.deepEqual(materialized.skills.map((value) => value.id), UNIT_SKILLS);
  assert.equal(source.lectures.length, 7);
  assert.equal(source.questions.length, 84);
  assert.equal(materialized.lectures.length, 7);
  assert.equal(materialized.questions.length, 84);
  for (const skillId of UNIT_SKILLS) {
    const questions = source.questions.filter((value) => value.skillId === skillId);
    assert.equal(questions.length, 12, `${skillId}: question count`);
    assert.deepEqual(
      Object.fromEntries(["foundation", "standard", "advanced", "transfer"].map((level) => [level, questions.filter((value) => value.difficulty === level).length])),
      { foundation: 3, standard: 4, advanced: 3, transfer: 2 },
    );
    assert.deepEqual([0, 1, 2, 3].map((index) => questions.filter((value) => value.answerIndex === index).length), [3, 3, 3, 3]);
  }
});

test("U08 lectures provide complete zero-foundation teaching records", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource(UNIT_ID);
  for (const lecture of source.lectures) {
    assert.equal(lecture.sections.length, 4, `${lecture.id}: sections`);
    assert.equal(lecture.workedExamples.length, 3, `${lecture.id}: worked examples`);
    assert.equal(lecture.misconceptions.length, 4, `${lecture.id}: misconceptions`);
    assert.equal(lecture.checks.length, 3, `${lecture.id}: checks`);
    assert.equal(new Set(lecture.workedExamples.map((value) => value.prompt)).size, 3, `${lecture.id}: duplicate example`);
    assert.equal(new Set(lecture.misconceptions.map((value) => value.belief)).size, 4, `${lecture.id}: duplicate misconception`);
  }
});

test("U08 questions are direct, English-only, and substantively unique", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource(UNIT_ID);
  const visible = new Set();
  const essence = new Set();
  const operations = new Set();
  for (const question of source.questions) {
    assert(!HAN.test(question.stem), `${question.id}: Chinese in stem`);
    assert(question.options.every((value) => !HAN.test(value)), `${question.id}: Chinese in options`);
    assert(question.reasons.every((value) => HAN.test(value)), `${question.id}: rationale needs Chinese explanation`);
    assert(question.reviews.every((value) => HAN.test(value)), `${question.id}: review needs Chinese evidence`);
    assert(!GENERIC_PROMPTS.some((marker) => question.stem.startsWith(marker)), `${question.id}: generic prompt`);
    assert(!FAKE_CONTEXT.test(question.stem), `${question.id}: fake context opener`);
    assert(!/^Item\s+[A-Z0-9-]+:/i.test(question.stem), `${question.id}: leaked item label`);
    if (question.stem.includes("___")) {
      assert(question.options.every((value) => (value.match(/[A-Za-z]+(?:'[A-Za-z]+)?/g) ?? []).length <= 6), `${question.id}: cloze option repeats excessive sentence text`);
    }
    const visibleKey = JSON.stringify([question.stem.trim().toLowerCase(), question.options.map((value) => value.trim().toLowerCase()).sort()]);
    assert(!visible.has(visibleKey), `${question.id}: duplicate visible question`);
    visible.add(visibleKey);
    const essenceKey = JSON.stringify([
      normalizedQuestionPart(question.stem, source.vocabularyPolicy.properNames),
      question.options.map((value) => normalizedQuestionPart(value, source.vocabularyPolicy.properNames)).sort(),
    ]);
    assert(!essence.has(essenceKey), `${question.id}: same question skeleton after names, times, and numbers are removed`);
    essence.add(essenceKey);
    const operationKey = JSON.stringify(question.cognitiveProcess);
    assert(!operations.has(operationKey), `${question.id}: repeated assessment operation`);
    operations.add(operationKey);
  }
});

test("U08 semantic regressions remain repaired", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource(UNIT_ID);
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.match(question.get("ENG_R4_Q_050_07").stem, /at eleven/);
  assert.equal(question.get("ENG_R4_Q_050_12").options[3], "Rita walks to work on most days.");
  assert.equal(question.get("ENG_R4_Q_051_10").options[0], "goes");
  assert.match(question.get("ENG_R4_Q_052_04").stem, /word order/);
  assert.equal(question.get("ENG_R4_Q_053_09").options[3], "The library stays open until nine.");
  assert.match(question.get("ENG_R4_Q_054_05").stem, /never orders tea/);
  assert.match(question.get("ENG_R4_Q_054_12").stem, /not City Hall/);
  assert.equal(question.get("ENG_R4_Q_056_01").options[2], "every Monday");
  const agreementExample = source.lectures.find((value) => value.skillId === "ENG_R4_S051").workedExamples[2];
  assert.match(JSON.stringify(agreementExample), /two bags/);
  assert.doesNotMatch(JSON.stringify(agreementExample), /two bikes/);
});

test("U08 vocabulary is limited to the governed official English tables", async () => {
  const { loadEnglishUnitSource } = await api();
  const { validateEnglishVocabularyScope } = await import("../english-vocabulary-scope.mjs");
  const source = await loadEnglishUnitSource(UNIT_ID);
  const report = await validateEnglishVocabularyScope(source, source.vocabularyPolicy);
  assert.equal(report.unknown.length, 0);
  assert.deepEqual(report.additional, [...source.vocabularyPolicy.additionalLearningTerms].sort());
});

test("checked-in U08 runtime is the deterministic materialized source", async () => {
  const { loadEnglishUnitSource, materializeEnglishUnit } = await api();
  const source = await loadEnglishUnitSource(UNIT_ID);
  const materialized = await materializeEnglishUnit(source);
  for (const [kind, records] of [["lectures", materialized.lectures], ["questions", materialized.questions]]) {
    for (const record of records) {
      const checkedIn = JSON.parse(await readFile(path.join(RUNTIME_ROOT, kind, `${record.id}.json`), "utf8"));
      assert.deepEqual(checkedIn, record, `${record.id}: runtime differs from source`);
    }
  }
});
