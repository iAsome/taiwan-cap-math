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
const UNITS = [
  { id: "ENG_R4_U08", firstSkill: 50 },
  { id: "ENG_R4_U09", firstSkill: 57 },
  { id: "ENG_R4_U10", firstSkill: 64 },
  { id: "ENG_R4_U11", firstSkill: 71 },
  { id: "ENG_R4_U12", firstSkill: 78 },
  { id: "ENG_R4_U13", firstSkill: 85 },
  { id: "ENG_R4_U14", firstSkill: 92 },
  { id: "ENG_R4_U15", firstSkill: 99 },
].map((unit) => ({
  ...unit,
  skills: Array.from({ length: 7 }, (_, index) => `ENG_R4_S${String(index + unit.firstSkill).padStart(3, "0")}`),
}));
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

test("authored English units have complete static lecture and question floors", async () => {
  const { loadEnglishUnitSource, materializeEnglishUnit } = await api();
  for (const unit of UNITS) {
    const source = await loadEnglishUnitSource(unit.id);
    const materialized = await materializeEnglishUnit(source);
    assert.deepEqual(materialized.skills.map((value) => value.id), unit.skills);
    assert.equal(source.lectures.length, 7);
    assert.equal(source.questions.length, 84);
    assert.equal(materialized.lectures.length, 7);
    assert.equal(materialized.questions.length, 84);
    for (const skillId of unit.skills) {
      const questions = source.questions.filter((value) => value.skillId === skillId);
      assert.equal(questions.length, 12, `${skillId}: question count`);
      assert.deepEqual(
        Object.fromEntries(["foundation", "standard", "advanced", "transfer"].map((level) => [level, questions.filter((value) => value.difficulty === level).length])),
        { foundation: 3, standard: 4, advanced: 3, transfer: 2 },
      );
      assert.deepEqual([0, 1, 2, 3].map((index) => questions.filter((value) => value.answerIndex === index).length), [3, 3, 3, 3]);
    }
  }
});

test("authored English lectures provide complete zero-foundation teaching records", async () => {
  const { loadEnglishUnitSource } = await api();
  for (const unit of UNITS) {
    const source = await loadEnglishUnitSource(unit.id);
    for (const lecture of source.lectures) {
      assert.equal(lecture.sections.length, 4, `${lecture.id}: sections`);
      assert.equal(new Set(lecture.sections.map((value) => value.id)).size, 4, `${lecture.id}: section IDs`);
      assert.equal(lecture.workedExamples.length, 3, `${lecture.id}: worked examples`);
      assert.equal(lecture.misconceptions.length, 4, `${lecture.id}: misconceptions`);
      assert.equal(lecture.checks.length, 3, `${lecture.id}: checks`);
      assert.equal(new Set(lecture.workedExamples.map((value) => value.prompt)).size, 3, `${lecture.id}: duplicate example`);
      assert.equal(new Set(lecture.misconceptions.map((value) => value.belief)).size, 4, `${lecture.id}: duplicate misconception`);
    }
  }
});

test("authored English questions are direct, English-only, and substantively unique across units", async () => {
  const { loadEnglishUnitSource } = await api();
  const visible = new Set();
  const essence = new Set();
  const operations = new Set();
  for (const unit of UNITS) {
    const source = await loadEnglishUnitSource(unit.id);
    for (const question of source.questions) {
      assert.equal(question.options.length, 4, `${question.id}: option count`);
      assert.equal(new Set(question.options).size, 4, `${question.id}: duplicate option`);
      assert(Number.isInteger(question.answerIndex) && question.answerIndex >= 0 && question.answerIndex < 4, `${question.id}: answer index`);
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
  }
});

test("U08 semantic regressions remain repaired", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U08");
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

test("U09 semantic regressions remain repaired", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U09");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.match(question.get("ENG_R4_Q_058_10").stem, /without changing its meaning/);
  assert(!question.get("ENG_R4_Q_060_04").options.includes("Is Ben going where?"));
  assert(!question.get("ENG_R4_Q_060_05").options.includes("Mia is reading in her room?"));
  assert(!question.get("ENG_R4_Q_060_09").options.includes("The workers are fixing the floor?"));
  assert.equal(question.get("ENG_R4_Q_060_10").options[1], "The team has not left yet.");
  assert(!question.get("ENG_R4_Q_061_08").stem.includes("so today"));
  assert.equal(question.get("ENG_R4_Q_062_01").representationType, "time-expression-interpretation");
  assert(!question.get("ENG_R4_Q_062_03").stem.includes("___"));
  assert.equal(question.get("ENG_R4_Q_062_03").options[2], "Her running is happening now.");
  assert.equal(question.get("ENG_R4_Q_063_12").options[3], "need");
  const rainExample = source.lectures.find((value) => value.skillId === "ENG_R4_S062").workedExamples[2];
  assert.match(rainExample.prompt, /getting wet/);
  assert.match(rainExample.why, /仍在變濕/);
});

test("U10 semantic regressions remain repaired", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U10");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.equal(question.get("ENG_R4_Q_064_08").answerIndex, 3);
  assert.match(question.get("ENG_R4_Q_064_08").options[3], /stopped first/);
  assert.match(question.get("ENG_R4_Q_065_09").options[0], /a in play, but r in carry/);
  assert.equal(question.get("ENG_R4_Q_066_12").options[3], "read / come");
  assert.equal(question.get("ENG_R4_Q_067_08").options[3], "Leo did not visit the museum.");
  assert.equal(question.get("ENG_R4_Q_068_11").options[2], "was");
  assert.equal(question.get("ENG_R4_Q_069_10").options[1], "Sunday");
  assert.match(question.get("ENG_R4_Q_069_12").options[3], /continues now/);
  assert.equal(question.get("ENG_R4_Q_070_03").options[2], "The students sat down.");
  assert.match(question.get("ENG_R4_Q_070_11").stem, /reached the park/);
  const didExample = source.lectures.find((value) => value.skillId === "ENG_R4_S066").workedExamples[2];
  assert.equal(didExample.answer, "write");
  assert.match(didExample.why, /主要動詞必須回到原形 write/);
});

test("U11 future-form boundaries and timelines remain explicit", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U11");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.equal(question.get("ENG_R4_Q_073_01").options[0], "is going to");
  assert.equal(question.get("ENG_R4_Q_075_05").options[0], "Tomorrow at ten");
  assert.equal(question.get("ENG_R4_Q_076_07").stem, "What is true about will and be going to?");
  assert.match(question.get("ENG_R4_Q_076_07").options[2], /Both may fit some future sentences/);
  assert.equal(question.get("ENG_R4_Q_076_08").options[3], "will buy / am going to make");
  assert.equal(question.get("ENG_R4_Q_076_10").options[1], "Whether they decided now or before");
  assert.equal(question.get("ENG_R4_Q_077_08").options[3], "June 5");
  assert.equal(question.get("ENG_R4_Q_077_10").options[1], "Two hours");
  assert.equal(question.get("ENG_R4_Q_077_12").options[3], "3:30");
  const boundaryLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S076");
  assert.match(boundaryLecture.sections[3].content, /有時都合文法/);
  assert.match(boundaryLecture.sections[3].content, /唯一答案/);
});

test("U12 present-perfect forms, meanings, and time boundaries remain explicit", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U12");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.equal(question.get("ENG_R4_Q_078_07").options[question.get("ENG_R4_Q_078_07").answerIndex], "been");
  assert.equal(question.get("ENG_R4_Q_078_08").options[question.get("ENG_R4_Q_078_08").answerIndex], "gone");
  assert.match(question.get("ENG_R4_Q_078_11").reviews.join(" "), /經驗/);
  assert.equal(question.get("ENG_R4_Q_080_11").options[2], "took → taken");
  assert.doesNotMatch(question.get("ENG_R4_Q_080_11").stem, /The books have took/);
  assert.match(question.get("ENG_R4_Q_081_09").options[0], /haven't never/);
  assert.match(question.get("ENG_R4_Q_081_12").options[3], /Up to now/);
  assert.match(question.get("ENG_R4_Q_082_10").options[1], /already/);
  assert.equal(question.get("ENG_R4_Q_083_08").options[3], "for");
  assert.match(question.get("ENG_R4_Q_083_08").reviews.join(" "), /5.*2|三小時/);
  assert.match(question.get("ENG_R4_Q_083_12").reviews.join(" "), /日期|年份|起點/);
  assert.match(question.get("ENG_R4_Q_084_07").stem, /have had two classes today/);
  assert.equal(question.get("ENG_R4_Q_084_07").options[question.get("ENG_R4_Q_084_07").answerIndex], "Classes completed so far today");
  assert.equal(question.get("ENG_R4_Q_084_09").answerIndex, 0);
  assert.equal(question.get("ENG_R4_Q_084_12").answerIndex, 3);
  assert.doesNotMatch(question.get("ENG_R4_Q_084_03").options.join(" "), /lost in 2021/);
  assert.doesNotMatch(question.get("ENG_R4_Q_084_11").options.join(" "), /lost it last year/);
  const boundaryLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S084");
  assert.match(boundaryLecture.sections.map((value) => value.content).join(" "), /today/);
  assert.match(boundaryLecture.sections.map((value) => value.content).join(" "), /尚未結束|未結束/);
  const lectureText = JSON.stringify(source.lectures);
  assert.doesNotMatch(lectureText, /visited yesterday \/ has visit/);
  assert.doesNotMatch(lectureText, /studied for the test ___ two hours/);
  assert.doesNotMatch(lectureText, /lost in 2021/);
  for (const [label, values] of [
    ["option reasons", source.questions.flatMap((value) => value.reasons)],
    ["question reviews", source.questions.flatMap((value) => value.reviews)],
    ["lecture sections", source.lectures.flatMap((value) => value.sections.map((section) => section.content))],
    ["worked-example whys", source.lectures.flatMap((value) => value.workedExamples.map((example) => example.why))],
  ]) assert.equal(new Set(values).size, values.length, `U12 duplicate ${label}`);
});

test("U13 modal forms, functions, and strength boundaries remain explicit", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U13");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.equal(question.get("ENG_R4_Q_085_08").options[3], "Asking for the menu in a polite way");
  assert.match(question.get("ENG_R4_Q_085_11").options[2], /learned how to ride/);
  assert.equal(question.get("ENG_R4_Q_086_04").options[2], "There is a chance the bus will continue past this stop.");
  assert.match(question.get("ENG_R4_Q_086_10").options[3], /neither gives a number/);
  assert.equal(question.get("ENG_R4_Q_087_06").options[0], "A strong guess from the facts");
  assert.equal(question.get("ENG_R4_Q_087_07").options[3], "had to");
  assert.match(question.get("ENG_R4_Q_087_12").stem, /Mia's wet umbrella.*her voice/);
  assert.match(question.get("ENG_R4_Q_088_09").options[3], /Does she have to finish/);
  assert.match(question.get("ENG_R4_Q_088_10").stem, /lets visitors keep their bags/);
  assert.doesNotMatch(question.get("ENG_R4_Q_089_05").options.join(" "), /can to|sleep last year/);
  assert.equal(question.get("ENG_R4_Q_089_10").options[2], "The doctor thinks rest is a good idea.");
  assert.equal(question.get("ENG_R4_Q_090_11").options[2], "The first says no one may leave; the second says people may choose.");
  assert.doesNotMatch(question.get("ENG_R4_Q_090_12").options.join(" "), /be an umbrella|own an umbrella/);
  assert.match(question.get("ENG_R4_Q_091_10").options[3], /other words may change/);
  assert.equal(question.get("ENG_R4_Q_091_11").options[1], "must");
  assert.equal(question.get("ENG_R4_Q_091_12").options[0], "do not have to");
  assert.match(question.get("ENG_R4_Q_091_09").stem, /takes thirty minutes/);
  const mayMightLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S086");
  assert.match(mayMightLecture.sections.map((value) => value.content).join(" "), /固定百分比/);
  const dutyLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S088");
  assert.match(dutyLecture.sections.map((value) => value.content).join(" "), /had to/);
  assert.match(dutyLecture.sections.map((value) => value.content).join(" "), /will have to/);
  const negativeLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S090");
  assert.match(negativeLecture.sections.map((value) => value.content).join(" "), /must not/);
  assert.match(negativeLecture.sections.map((value) => value.content).join(" "), /do not have to/);
  for (const [label, values] of [
    ["option reasons", source.questions.flatMap((value) => value.reasons)],
    ["question reviews", source.questions.flatMap((value) => value.reviews)],
    ["lecture sections", source.lectures.flatMap((value) => value.sections.map((section) => section.content))],
    ["worked-example whys", source.lectures.flatMap((value) => value.workedExamples.map((example) => example.why))],
  ]) assert.equal(new Set(values).size, values.length, `U13 duplicate ${label}`);
});

test("U14 imperatives, requests, responses, offers, and suggestions remain context-bound", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U14");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.match(question.get("ENG_R4_Q_092_10").stem, /danger right away/);
  assert.equal(question.get("ENG_R4_Q_092_11").options[2], "Stay back and don't touch it!");
  assert.match(question.get("ENG_R4_Q_093_08").stem, /able to do in the past/);
  assert.match(question.get("ENG_R4_Q_093_11").options[2], /science book.*Room 3.*after lunch/);
  assert.equal(question.get("ENG_R4_Q_094_03").options[2], "B agrees to help.");
  assert.match(question.get("ENG_R4_Q_094_12").options[3], /offers another person/);
  assert.equal(question.get("ENG_R4_Q_095_04").options[3], "Do you like coffee?");
  assert.equal(question.get("ENG_R4_Q_095_12").options[3], "Would you like a clean towel?");
  assert.match(question.get("ENG_R4_Q_096_08").options[3], /shared action.*directly tells the listener/);
  assert.equal(question.get("ENG_R4_Q_096_11").options[2], "Let's wait for the next bus.");
  assert.match(question.get("ENG_R4_Q_097_06").stem, /asks too much/);
  assert.match(question.get("ENG_R4_Q_097_08").options[3], /depends on the people.*needed right away/);
  assert.equal(question.get("ENG_R4_Q_098_06").options[1], "B cannot go hiking on Saturday.");
  assert.equal(question.get("ENG_R4_Q_098_12").options[3], "A does not like any gate.");
  const imperativeLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S092");
  assert.match(imperativeLecture.sections.map((value) => value.content).join(" "), /Don't \+ base form/);
  assert.match(imperativeLecture.sections.map((value) => value.content).join(" "), /Don't be late/);
  const requestLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S093");
  assert.match(requestLecture.sections.map((value) => value.content).join(" "), /過去能力/);
  assert.match(requestLecture.sections.map((value) => value.content).join(" "), /希望對方現在遞鹽/);
  const responseLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S094");
  assert.match(responseLecture.sections.map((value) => value.content).join(" "), /No problem/);
  const offerLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S095");
  assert.match(offerLecture.sections.map((value) => value.content).join(" "), /Do you like/);
  const suggestionLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S096");
  assert.match(suggestionLecture.sections.map((value) => value.content).join(" "), /How about/);
  assert.match(suggestionLecture.sections.map((value) => value.content).join(" "), /about 是介系詞.*taking/);
  const registerLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S097");
  assert.match(registerLecture.sections.map((value) => value.content).join(" "), /緊急安全指示/);
  const purposeLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S098");
  assert.match(purposeLecture.sections.map((value) => value.content).join(" "), /不添加性格、長期喜好或未說出的事件/);
  for (const [label, values] of [
    ["option reasons", source.questions.flatMap((value) => value.reasons)],
    ["question reviews", source.questions.flatMap((value) => value.reviews)],
    ["lecture sections", source.lectures.flatMap((value) => value.sections.map((section) => section.content))],
    ["worked-example whys", source.lectures.flatMap((value) => value.workedExamples.map((example) => example.why))],
  ]) assert.equal(new Set(values).size, values.length, `U14 duplicate ${label}`);
});

test("U15 direct, wh, subject-object, how, and indirect questions keep their information roles", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U15");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.equal(question.get("ENG_R4_Q_099_02").options[question.get("ENG_R4_Q_099_02").answerIndex], "Does");
  assert.equal(question.get("ENG_R4_Q_099_05").options[question.get("ENG_R4_Q_099_05").answerIndex], "Have");
  assert.equal(question.get("ENG_R4_Q_099_12").options[3], "Were the lights on at midnight?");
  assert.match(question.get("ENG_R4_Q_099_04").stem, /open or closed/);
  assert.match(question.get("ENG_R4_Q_099_08").stem, /same plan every week/);
  assert.equal(question.get("ENG_R4_Q_100_06").options[1], "Which");
  assert.match(question.get("ENG_R4_Q_100_12").options[3], /^When/);
  assert.equal(question.get("ENG_R4_Q_101_07").options[2], "are");
  assert.equal(question.get("ENG_R4_Q_101_10").options[1], "lives → live");
  assert.match(question.get("ENG_R4_Q_101_04").stem, /open its doors/);
  assert.equal(question.get("ENG_R4_Q_102_01").options[0], "Who");
  assert.match(question.get("ENG_R4_Q_102_05").options[0], /who invited Amy.*who Amy invited/i);
  assert.doesNotMatch(question.get("ENG_R4_Q_102_06").options.join(" "), /Who did find the key/);
  assert.match(question.get("ENG_R4_Q_103_09").options[0], /How soon/);
  assert.equal(question.get("ENG_R4_Q_103_12").options[3], "How far / How long");
  assert.equal(question.get("ENG_R4_Q_104_04").options[3], "I want to know where Mia is.");
  assert.equal(question.get("ENG_R4_Q_104_06").options[1], "when the class begins?");
  assert.match(question.get("ENG_R4_Q_104_10").options[1], /who is the subject/);
  assert.match(question.get("ENG_R4_Q_104_03").stem, /yes-or-no answer/);
  assert.match(question.get("ENG_R4_Q_104_10").stem, /only asks for information/);
  assert.equal(question.get("ENG_R4_Q_105_11").options[2], "B wants to catch the last bus.");
  const yesNoLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S099");
  assert.match(yesNoLecture.sections.map((value) => value.content).join(" "), /Does Leo play tennis/);
  assert.match(yesNoLecture.sections.map((value) => value.content).join(" "), /Have you finished/);
  const roleLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S102");
  assert.match(roleLecture.sections.map((value) => value.content).join(" "), /Who called Mia/);
  assert.match(roleLecture.sections.map((value) => value.content).join(" "), /Who did Mia call/);
  const howLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S103");
  assert.match(howLecture.sections.map((value) => value.content).join(" "), /how often/);
  assert.match(howLecture.sections.map((value) => value.content).join(" "), /how far/);
  const indirectLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S104");
  assert.match(indirectLecture.sections.map((value) => value.content).join(" "), /where the station is/);
  assert.match(indirectLecture.sections.map((value) => value.content).join(" "), /if.*whether/);
  for (const [label, values] of [
    ["option reasons", source.questions.flatMap((value) => value.reasons)],
    ["question reviews", source.questions.flatMap((value) => value.reviews)],
    ["lecture sections", source.lectures.flatMap((value) => value.sections.map((section) => section.content))],
    ["worked-example whys", source.lectures.flatMap((value) => value.workedExamples.map((example) => example.why))],
  ]) assert.equal(new Set(values).size, values.length, `U15 duplicate ${label}`);
});

test("authored English vocabulary is limited to the governed official tables", async () => {
  const { loadEnglishUnitSource } = await api();
  const { validateEnglishVocabularyScope } = await import("../english-vocabulary-scope.mjs");
  for (const unit of UNITS) {
    const source = await loadEnglishUnitSource(unit.id);
    const report = await validateEnglishVocabularyScope(source, source.vocabularyPolicy);
    assert.equal(report.unknown.length, 0);
    assert.deepEqual(report.additional, [...source.vocabularyPolicy.additionalLearningTerms].sort());
  }
});

test("checked-in authored English runtime is the deterministic materialized source", async () => {
  const { loadEnglishUnitSource, materializeEnglishUnit } = await api();
  for (const unit of UNITS) {
    const source = await loadEnglishUnitSource(unit.id);
    const materialized = await materializeEnglishUnit(source);
    for (const [kind, records] of [["lectures", materialized.lectures], ["questions", materialized.questions]]) {
      for (const record of records) {
        const checkedIn = JSON.parse(await readFile(path.join(RUNTIME_ROOT, kind, `${record.id}.json`), "utf8"));
        assert.deepEqual(checkedIn, record, `${record.id}: runtime differs from source`);
      }
    }
  }
});
