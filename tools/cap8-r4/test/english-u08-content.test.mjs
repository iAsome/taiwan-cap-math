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
  { id: "ENG_R4_U16", firstSkill: 106 },
  { id: "ENG_R4_U17", firstSkill: 113 },
  { id: "ENG_R4_U18", firstSkill: 120 },
  { id: "ENG_R4_U19", firstSkill: 127 },
  { id: "ENG_R4_U20", firstSkill: 134 },
  { id: "ENG_R4_U21", firstSkill: 141 },
  { id: "ENG_R4_U22", firstSkill: 148 },
  { id: "ENG_R4_U23", firstSkill: 155 },
  { id: "ENG_R4_U24", firstSkill: 162 },
  { id: "ENG_R4_U25", firstSkill: 169 },
  { id: "ENG_R4_U26", firstSkill: 176 },
  { id: "ENG_R4_U27", firstSkill: 183 },
  { id: "ENG_R4_U28", firstSkill: 190 },
  { id: "ENG_R4_U29", firstSkill: 197 },
  { id: "ENG_R4_U30", firstSkill: 204 },
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

test("U16 negatives, short answers, agreement, and dialogue inferences keep their semantic boundaries", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U16");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.equal(question.get("ENG_R4_Q_106_10").options[1], "Ben has not eaten lunch yet.");
  assert.match(question.get("ENG_R4_Q_107_09").stem, /No letter came to the house/);
  assert.equal(question.get("ENG_R4_Q_107_09").options[0], "No letter arrived.");
  assert.equal(question.get("ENG_R4_Q_108_11").options[2], "you may");
  assert.equal(question.get("ENG_R4_Q_109_08").options[3], "too");
  assert.match(question.get("ENG_R4_Q_109_08").reasons[3], /字義不會把句子變成否定句/);
  assert.equal(question.get("ENG_R4_Q_110_07").options[2], "do");
  assert.equal(question.get("ENG_R4_Q_110_11").options[2], "neither can Leo");
  assert.equal(question.get("ENG_R4_Q_111_01").options[0], "B is ready.");
  assert.equal(question.get("ENG_R4_Q_111_04").options[3], "They may still catch this bus.");
  assert.equal(question.get("ENG_R4_Q_111_08").options[3], "No, she wasn't.");
  assert.equal(question.get("ENG_R4_Q_112_04").options[3], "A cannot join the trip that day.");
  assert.equal(question.get("ENG_R4_Q_112_10").options[1], "B never likes playing games.");
  assert.equal(question.get("ENG_R4_Q_112_11").options[2], "A might arrive after six.");
  const doubleNegativeLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S107");
  assert.match(doubleNegativeLecture.sections[0].content, /不同口語變體可能另有用法/);
  const eitherLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S109");
  assert.match(eitherLecture.sections[3].content, /unhappy.*文法形式上仍是肯定句/);
  const inversionLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S110");
  assert.match(inversionLecture.sections[1].content, /Neither 已包含否定方向/);
  const negativeQuestionLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S111");
  assert.match(negativeQuestionLecture.sections[0].content, /Yes 與 No.*肯定或否定/);
  const dialogueLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S112");
  assert.match(dialogueLecture.sections[3].content, /不能推成永遠不參加/);
  for (const [label, values] of [
    ["option reasons", source.questions.flatMap((value) => value.reasons)],
    ["question reviews", source.questions.flatMap((value) => value.reviews)],
    ["lecture sections", source.lectures.flatMap((value) => value.sections.map((section) => section.content))],
    ["worked-example whys", source.lectures.flatMap((value) => value.workedExamples.map((example) => example.why))],
  ]) assert.equal(new Set(values).size, values.length, `U16 duplicate ${label}`);
});

test("U17 noun roles, pronoun agreement, reference, and ambiguity repairs stay evidence-bound", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U17");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.equal(question.get("ENG_R4_Q_113_11").options[2], "It is first a subject, then an object.");
  assert.equal(question.get("ENG_R4_Q_114_01").options[0], "He");
  assert.equal(question.get("ENG_R4_Q_114_03").options[2], "them");
  assert.equal(question.get("ENG_R4_Q_115_04").options[3], "The sentence does not say clearly.");
  assert.match(question.get("ENG_R4_Q_115_09").stem, /water was coming out of it/);
  assert.equal(question.get("ENG_R4_Q_116_01").options[0], "The road was closed.");
  assert.equal(question.get("ENG_R4_Q_117_03").options[2], "it");
  assert.equal(question.get("ENG_R4_Q_117_04").options[3], "some clean water");
  assert.equal(question.get("ENG_R4_Q_118_08").options[3], "it → them");
  assert.equal(question.get("ENG_R4_Q_118_10").options[1], "their bags");
  assert.match(question.get("ENG_R4_Q_119_01").options[0], /^Nora arrived/);
  assert.equal(question.get("ENG_R4_Q_119_11").options[2], "the bird");
  const referenceLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S115");
  assert.match(referenceLecture.sections.map((value) => value.content).join(" "), /不可只選最近的名詞/);
  const ambiguityLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S119");
  assert.match(ambiguityLecture.sections.map((value) => value.content).join(" "), /必要的名詞重複不是壞文筆/);
  assert.match(ambiguityLecture.sections.map((value) => value.content).join(" "), /保留原事件順序/);
  for (const [label, values] of [
    ["option reasons", source.questions.flatMap((value) => value.reasons)],
    ["question reviews", source.questions.flatMap((value) => value.reviews)],
    ["lecture sections", source.lectures.flatMap((value) => value.sections.map((section) => section.content))],
    ["worked-example whys", source.lectures.flatMap((value) => value.workedExamples.map((example) => example.why))],
  ]) assert.equal(new Set(values).size, values.length, `U17 duplicate ${label}`);
});

test("U18 adjective placement and comparison forms keep scope, quantity, and inference boundaries", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U18");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.equal(question.get("ENG_R4_Q_120_02").options[1], "good");
  assert.match(question.get("ENG_R4_Q_120_04").reviews.join(" "), /checks.*動作方式/);
  assert.equal(question.get("ENG_R4_Q_121_03").options[2], "larger");
  assert.equal(question.get("ENG_R4_Q_121_04").options[3], "hottest");
  assert.equal(question.get("ENG_R4_Q_121_05").options[0], "happier");
  assert.match(question.get("ENG_R4_Q_122_06").stem, /more difficulter/);
  assert.equal(question.get("ENG_R4_Q_122_06").options[1], "more difficult");
  assert.equal(question.get("ENG_R4_Q_123_01").options[0], "better");
  assert.equal(question.get("ENG_R4_Q_123_04").options[3], "less");
  assert.match(question.get("ENG_R4_Q_123_08").reviews.join(" "), /water.*不是.*大小/);
  assert.equal(question.get("ENG_R4_Q_124_03").options[2], "Nora's");
  assert.equal(question.get("ENG_R4_Q_124_07").options[2], "The blue box has a greater size.");
  assert.equal(question.get("ENG_R4_Q_125_03").options[2], "as many notebooks as");
  assert.equal(question.get("ENG_R4_Q_125_04").options[3], "as much water as");
  assert.equal(question.get("ENG_R4_Q_125_08").options[3], "not as wide as");
  assert.equal(question.get("ENG_R4_Q_126_01").options[0], "Leo is taller than Ben.");
  assert.equal(question.get("ENG_R4_Q_126_02").options[1], "tallest");
  assert.equal(question.get("ENG_R4_Q_126_05").options[0], "best");
  assert.equal(question.get("ENG_R4_Q_126_06").options[1], "of");
  assert.equal(question.get("ENG_R4_Q_126_08").options[3], "clubs");
  assert.equal(question.get("ENG_R4_Q_126_10").options[1], "Which box is the heaviest");
  const placementLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S120");
  assert.match(placementLecture.sections.map((value) => value.content).join(" "), /連綴動詞/);
  const shortFormLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S121");
  assert.match(shortFormLecture.sections.map((value) => value.content).join(" "), /子音.*y.*i/);
  const irregularLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S123");
  assert.match(irregularLecture.sections.map((value) => value.content).join(" "), /little.*less.*least/);
  const equalityLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S125");
  assert.match(equalityLecture.sections.map((value) => value.content).join(" "), /not as.*as/);
  const groupLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S126");
  assert.match(groupLecture.sections.map((value) => value.content).join(" "), /one of the.*複數/);
  for (const [label, values] of [
    ["option reasons", source.questions.flatMap((value) => value.reasons)],
    ["question reviews", source.questions.flatMap((value) => value.reviews)],
    ["lecture sections", source.lectures.flatMap((value) => value.sections.map((section) => section.content))],
    ["worked-example whys", source.lectures.flatMap((value) => value.workedExamples.map((example) => example.why))],
  ]) assert.equal(new Set(values).size, values.length, `U18 duplicate ${label}`);
});

test("U19 adjective, adverb, degree, comparison, and linking-verb uses keep their functional boundaries", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U19");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.equal(question.get("ENG_R4_Q_127_01").options[0], "careful");
  assert.equal(question.get("ENG_R4_Q_127_02").options[1], "quietly");
  assert.match(question.get("ENG_R4_Q_127_08").options[3], /condition/);
  assert.equal(question.get("ENG_R4_Q_128_02").options[1], "happily");
  assert.equal(question.get("ENG_R4_Q_128_03").options[2], "simply");
  assert.equal(question.get("ENG_R4_Q_128_04").options[3], "well");
  assert.equal(question.get("ENG_R4_Q_128_08").options[3], "hard");
  assert.equal(question.get("ENG_R4_Q_129_02").options[1], "Mia closed the door slowly.");
  assert.match(question.get("ENG_R4_Q_129_04").options[3], /^Slowly,/);
  assert.match(question.get("ENG_R4_Q_129_07").options[2], /opened the box slowly/);
  assert.equal(question.get("ENG_R4_Q_130_01").options[0], "very");
  assert.equal(question.get("ENG_R4_Q_130_02").options[1], "too");
  assert.equal(question.get("ENG_R4_Q_130_03").options[2], "warm enough");
  assert.equal(question.get("ENG_R4_Q_130_04").options[3], "enough");
  assert.equal(question.get("ENG_R4_Q_130_09").options[0], "too hot");
  assert.match(question.get("ENG_R4_Q_130_11").options[2], /low speed/);
  assert.equal(question.get("ENG_R4_Q_131_02").options[1], "hard");
  assert.equal(question.get("ENG_R4_Q_131_04").options[3], "lately");
  assert.equal(question.get("ENG_R4_Q_131_11").options[2], "well");
  assert.equal(question.get("ENG_R4_Q_132_02").options[1], "more carefully");
  assert.equal(question.get("ENG_R4_Q_132_04").options[3], "better");
  assert.equal(question.get("ENG_R4_Q_132_05").options[0], "quickly");
  assert.equal(question.get("ENG_R4_Q_132_08").options[3], "worse");
  assert.equal(question.get("ENG_R4_Q_133_01").options[0], "sour");
  assert.equal(question.get("ENG_R4_Q_133_02").options[1], "carefully");
  assert.equal(question.get("ENG_R4_Q_133_05").options[0], "The room looks clean.");
  assert.equal(question.get("ENG_R4_Q_133_06").options[1], "smelled the food carefully");
  assert.match(question.get("ENG_R4_Q_133_09").options[0], /links Nora to a state.*describes an action/);
  assert.equal(question.get("ENG_R4_Q_133_10").options[1], "well");
  assert.equal(question.get("ENG_R4_Q_133_11").options[2], "Its taste is pleasant.");
  const formationLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S128");
  assert.match(formationLecture.sections.map((value) => value.content).join(" "), /y.*i.*terrible.*simply.*good.*well.*hardly/);
  const placementLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S129");
  assert.match(placementLecture.sections.map((value) => value.content).join(" "), /closed 與 the door.*方式副詞放在整組後面/);
  const degreeLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S130");
  assert.match(degreeLecture.sections.map((value) => value.content).join(" "), /very cold.*沒有斷定不能使用.*too cold.*enough/);
  const sameFormLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S131");
  assert.match(sameFormLecture.sections.map((value) => value.content).join(" "), /hardly.*lately/);
  const comparisonLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S132");
  assert.match(comparisonLecture.sections.map((value) => value.content).join(" "), /more carefully.*well.*better.*as.*as/);
  const linkingLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S133");
  assert.match(linkingLecture.sections.map((value) => value.content).join(" "), /looked carefully at.*looked tired.*tastes good.*cooks well/);
  const questionStems = new Set(source.questions.map((value) => value.stem));
  assert(source.lectures.flatMap((value) => value.workedExamples).every((value) => !questionStems.has(value.prompt)), "U19 lecture prompt copied as a question");
  for (const [label, values] of [
    ["option reasons", source.questions.flatMap((value) => value.reasons)],
    ["question reviews", source.questions.flatMap((value) => value.reviews)],
    ["lecture sections", source.lectures.flatMap((value) => value.sections.map((section) => section.content))],
    ["worked-example whys", source.lectures.flatMap((value) => value.workedExamples.map((example) => example.why))],
  ]) assert.equal(new Set(values).size, values.length, `U19 duplicate ${label}`);
});

test("U20 time, place, movement, and arrival prepositions keep their semantic boundaries", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U20");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.equal(question.get("ENG_R4_Q_134_04").options[3], "at");
  assert.equal(question.get("ENG_R4_Q_134_08").options[3], "no word");
  assert.equal(question.get("ENG_R4_Q_135_03").options[2], "during");
  assert.match(question.get("ENG_R4_Q_135_11").options[2], /up to midnight/);
  assert.equal(question.get("ENG_R4_Q_136_08").options[3], "in");
  assert.match(question.get("ENG_R4_Q_136_11").options[2], /touches the box/);
  assert.equal(question.get("ENG_R4_Q_137_10").options[1], "The bag is below the window.");
  assert.equal(question.get("ENG_R4_Q_138_06").options[1], "among");
  assert.equal(question.get("ENG_R4_Q_138_09").options[0], "between");
  assert.equal(question.get("ENG_R4_Q_138_12").options[3], "The shop is beside the bank and near the school.");
  assert.equal(question.get("ENG_R4_Q_139_09").options[0], "through");
  assert.match(question.get("ENG_R4_Q_139_11").options[2], /went inside/);
  assert.equal(question.get("ENG_R4_Q_139_12").options[3], "through / onto");
  assert.equal(question.get("ENG_R4_Q_140_04").options[3], "home");
  assert.equal(question.get("ENG_R4_Q_140_10").options[1], "reached");
  assert.equal(question.get("ENG_R4_Q_140_11").options[2], "at / it");
  const timeLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S134");
  assert.match(timeLecture.sections.map((value) => value.content).join(" "), /at 7:20.*on Tuesday.*in June.*next Friday/);
  const relativePlaceLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S138");
  assert.match(relativePlaceLecture.sections.map((value) => value.content).join(" "), /between.*among.*beside.*near/);
  const movementLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S139");
  assert.match(movementLecture.sections.map((value) => value.content).join(" "), /to school.*into the box.*onto the floor.*through the tunnel/);
  const arrivalLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S140");
  assert.match(arrivalLecture.sections.map((value) => value.content).join(" "), /arrive in Taipei.*arrive at the station.*reach the station.*arrive home/);
  const questionStems = new Set(source.questions.map((value) => value.stem));
  assert(source.lectures.flatMap((value) => value.workedExamples).every((value) => !questionStems.has(value.prompt)), "U20 lecture prompt copied as a question");
  for (const [label, values] of [
    ["option reasons", source.questions.flatMap((value) => value.reasons)],
    ["question reviews", source.questions.flatMap((value) => value.reviews)],
    ["lecture sections", source.lectures.flatMap((value) => value.sections.map((section) => section.content))],
    ["worked-example whys", source.lectures.flatMap((value) => value.workedExamples.map((example) => example.why))],
  ]) assert.equal(new Set(values).size, values.length, `U20 duplicate ${label}`);
});

test("U21 conjunction questions preserve addition, contrast, cause, concession, and time boundaries", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U21");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.match(question.get("ENG_R4_Q_141_05").stem, /two good points/);
  assert.equal(question.get("ENG_R4_Q_141_05").options[0], "and");
  assert.match(question.get("ENG_R4_Q_142_01").stem, /still useful/);
  assert(!question.get("ENG_R4_Q_142_01").options.includes("and"));
  assert.match(question.get("ENG_R4_Q_143_03").stem, /no tea and no coffee/);
  assert.match(question.get("ENG_R4_Q_143_05").stem, /If you do not wear a coat/);
  assert.equal(question.get("ENG_R4_Q_143_12").options[3], "Tea or milk?");
  assert.equal(question.get("ENG_R4_Q_144_03").options[2], "waited");
  assert.match(question.get("ENG_R4_Q_144_06").stem, /for one reason/);
  assert.match(question.get("ENG_R4_Q_144_10").options[1], /made the students get up/);
  assert.match(question.get("ENG_R4_Q_144_11").stem, /Use so to join the facts/);
  assert.match(question.get("ENG_R4_Q_145_01").stem, /did not stop the game/);
  assert.equal(question.get("ENG_R4_Q_145_03").options[2], "take out but");
  assert.match(question.get("ENG_R4_Q_145_06").stem, /did not stop talking/);
  assert.match(question.get("ENG_R4_Q_146_12").stem, /light is off/);
  assert.match(question.get("ENG_R4_Q_147_04").stem, /made us move inside/);
  assert.match(question.get("ENG_R4_Q_147_05").stem, /for that reason/);
  assert.match(question.get("ENG_R4_Q_147_08").stem, /8:00.*8:10/);
  assert.match(question.get("ENG_R4_Q_147_10").stem, /rain became strong/);
  const additionLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S141");
  assert.match(additionLecture.sections.map((value) => value.content).join(" "), /平行.*複合主詞.*不代表前者一定造成後者/);
  const causalLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S144");
  assert.match(causalLecture.sections.map((value) => value.content).join(" "), /because.*so.*先後發生不必然代表因果/);
  const timeLecture = source.lectures.find((value) => value.skillId === "ENG_R4_S146");
  const timeLectureText = timeLecture.sections.map((value) => value.content).join(" ");
  assert.match(timeLectureText, /when.*before.*after/);
  assert.match(timeLectureText, /主句用 will leave.*when 子句用 stops/);
  const questionStems = new Set(source.questions.map((value) => value.stem));
  assert(source.lectures.flatMap((value) => value.workedExamples).every((value) => !questionStems.has(value.prompt)), "U21 lecture prompt copied as a question");
  for (const [label, values] of [
    ["option reasons", source.questions.flatMap((value) => value.reasons)],
    ["question reviews", source.questions.flatMap((value) => value.reviews)],
    ["lecture sections", source.lectures.flatMap((value) => value.sections.map((section) => section.content))],
    ["worked-example whys", source.lectures.flatMap((value) => value.workedExamples.map((example) => example.why))],
  ]) assert.equal(new Set(values).size, values.length, `U21 duplicate ${label}`);
});

test("U22 infinitive and gerund questions preserve form, actor, timeline, and meaning boundaries", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U22");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.equal(question.get("ENG_R4_Q_148_08").options[3], "Find the park.");
  assert.match(question.get("ENG_R4_Q_148_11").reviews.join(" "), /不保證.*搭上公車/);
  assert.match(question.get("ENG_R4_Q_149_07").reviews.join(" "), /Ben.*wait.*執行者/);
  assert.equal(question.get("ENG_R4_Q_150_06").options[1], "She is willing to wait.");
  assert.equal(question.get("ENG_R4_Q_151_05").options[question.get("ENG_R4_Q_151_05").answerIndex], "is");
  assert.equal(question.get("ENG_R4_Q_151_06").options[question.get("ENG_R4_Q_151_06").answerIndex], "take");
  assert.equal(question.get("ENG_R4_Q_152_05").options[0], "to get water");
  assert.equal(question.get("ENG_R4_Q_152_07").options[2], "walk");
  assert.match(question.get("ENG_R4_Q_152_08").options[3], /no longer new/);
  assert.equal(question.get("ENG_R4_Q_153_03").options[2], "cleaning; to go");
  assert.equal(question.get("ENG_R4_Q_153_12").options[3], "to leave; driving");
  assert.equal(question.get("ENG_R4_Q_154_01").options[0], "playing");
  assert.equal(question.get("ENG_R4_Q_154_02").options[1], "to drink");
  assert.equal(question.get("ENG_R4_Q_154_05").options[0], "to bring");
  assert.equal(question.get("ENG_R4_Q_154_06").options[1], "watching");
  assert.equal(question.get("ENG_R4_Q_154_07").options[2], "to open");
  assert.equal(question.get("ENG_R4_Q_154_08").options[3], "adding");
  assert.equal(question.get("ENG_R4_Q_154_09").options[0], "He ended his work.");
  assert.equal(question.get("ENG_R4_Q_154_10").options[1], "He was doing something else.");
  const questionStems = new Set(source.questions.map((value) => value.stem));
  assert(source.lectures.flatMap((value) => value.workedExamples).every((value) => !questionStems.has(value.prompt)), "U22 lecture prompt copied as a question");
  for (const [label, values] of [
    ["option reasons", source.questions.flatMap((value) => value.reasons)],
    ["question reviews", source.questions.flatMap((value) => value.reviews)],
    ["lecture sections", source.lectures.flatMap((value) => value.sections.map((section) => section.content))],
    ["worked-example whys", source.lectures.flatMap((value) => value.workedExamples.map((example) => example.why))],
  ]) assert.equal(new Set(values).size, values.length, `U22 duplicate ${label}`);
});

test("U23 passive questions preserve roles, time, evidence limits, state boundaries, and notice meaning", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U23");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.match(question.get("ENG_R4_Q_155_09").options[0], /did not pass to another person or thing/);
  assert.equal(question.get("ENG_R4_Q_156_03").options[question.get("ENG_R4_Q_156_03").answerIndex], "is written");
  assert.equal(question.get("ENG_R4_Q_157_04").options[question.get("ENG_R4_Q_157_04").answerIndex], "be seen");
  assert.equal(question.get("ENG_R4_Q_158_01").options[question.get("ENG_R4_Q_158_01").answerIndex], "A window was broken during the night.");
  assert.equal(question.get("ENG_R4_Q_158_08").options[question.get("ENG_R4_Q_158_08").answerIndex], "Who cleans the room");
  assert.equal(question.get("ENG_R4_Q_159_05").options[question.get("ENG_R4_Q_159_05").answerIndex], "It is the tool used for cutting.");
  assert.equal(question.get("ENG_R4_Q_159_07").options[question.get("ENG_R4_Q_159_07").answerIndex], "No, it marks the latest time.");
  assert.match(question.get("ENG_R4_Q_160_10").options[question.get("ENG_R4_Q_160_10").answerIndex], /More information is needed/);
  assert.match(question.get("ENG_R4_Q_160_11").options[question.get("ENG_R4_Q_160_11").answerIndex], /event.*state/);
  assert.equal(question.get("ENG_R4_Q_161_08").options[question.get("ENG_R4_Q_161_08").answerIndex], "Their bags will be checked at the front door.");
  assert.equal(question.get("ENG_R4_Q_161_12").options[question.get("ENG_R4_Q_161_12").answerIndex], "Go to the morning class in Room 3.");
  const questionStems = new Set(source.questions.map((value) => value.stem));
  assert(source.lectures.flatMap((value) => value.workedExamples).every((value) => !questionStems.has(value.prompt)), "U23 lecture prompt copied as a question");
  for (const [label, values] of [
    ["option reasons", source.questions.flatMap((value) => value.reasons)],
    ["question reviews", source.questions.flatMap((value) => value.reviews)],
    ["lecture sections", source.lectures.flatMap((value) => value.sections.map((section) => section.content))],
    ["worked-example whys", source.lectures.flatMap((value) => value.workedExamples.map((example) => example.why))],
  ]) assert.equal(new Set(values).size, values.length, `U23 duplicate ${label}`);
});

test("U24 relative-clause questions preserve antecedents, roles, omitted objects, and stated limits", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U24");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.equal(question.get("ENG_R4_Q_163_07").options[question.get("ENG_R4_Q_163_07").answerIndex], "who");
  assert.equal(question.get("ENG_R4_Q_163_08").options[question.get("ENG_R4_Q_163_08").answerIndex], "which");
  assert.equal(question.get("ENG_R4_Q_163_11").options[question.get("ENG_R4_Q_163_11").answerIndex], "who");
  assert.equal(question.get("ENG_R4_Q_164_03").options[question.get("ENG_R4_Q_164_03").answerIndex], "The second that");
  assert.match(question.get("ENG_R4_Q_164_07").options[question.get("ENG_R4_Q_164_07").answerIndex], /no noun before it/i);
  assert.match(question.get("ENG_R4_Q_165_03").options[question.get("ENG_R4_Q_165_03").answerIndex], /object of heard/i);
  assert.match(question.get("ENG_R4_Q_165_04").options[question.get("ENG_R4_Q_165_04").answerIndex], /subject of works/i);
  assert.equal(question.get("ENG_R4_Q_165_07").options[question.get("ENG_R4_Q_165_07").answerIndex], "The boy called Mia.");
  assert.equal(question.get("ENG_R4_Q_165_08").options[question.get("ENG_R4_Q_165_08").answerIndex], "Mia called the boy.");
  assert.match(question.get("ENG_R4_Q_166_07").options[question.get("ENG_R4_Q_166_07").answerIndex], /thanked her/);
  assert.equal(question.get("ENG_R4_Q_166_10").options[question.get("ENG_R4_Q_166_10").answerIndex], "the song we heard");
  assert.match(question.get("ENG_R4_Q_167_06").options[question.get("ENG_R4_Q_167_06").answerIndex], /two students who did not join/);
  assert.match(question.get("ENG_R4_Q_167_08").options[question.get("ENG_R4_Q_167_08").answerIndex], /found near the gate.*on the desk/);
  assert.equal(question.get("ENG_R4_Q_168_08").options[question.get("ENG_R4_Q_168_08").answerIndex], "Every coat is wet.");
  assert.equal(source.lectures[0].workedExamples[0].steps[0], "找出 who 前的名詞。");
  assert.match(source.lectures[5].sections[3].content, /過去時態/);
  const questionStems = new Set(source.questions.map((value) => value.stem));
  assert(source.lectures.flatMap((value) => value.workedExamples).every((value) => !questionStems.has(value.prompt)), "U24 lecture prompt copied as a question");
  for (const [label, values] of [
    ["option reasons", source.questions.flatMap((value) => value.reasons)],
    ["question reviews", source.questions.flatMap((value) => value.reviews)],
    ["lecture sections", source.lectures.flatMap((value) => value.sections.map((section) => section.content))],
    ["worked-example whys", source.lectures.flatMap((value) => value.workedExamples.map((example) => example.why))],
  ]) assert.equal(new Set(values).size, values.length, `U24 duplicate ${label}`);
});

test("U25 condition questions preserve direction, reality, negation, and evidence limits", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U25");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.equal(question.get("ENG_R4_Q_169_03").options[question.get("ENG_R4_Q_169_03").answerIndex], "If the bus is late, we will walk.");
  assert.doesNotMatch(question.get("ENG_R4_Q_169_05").stem, /must happen/i);
  assert.equal(question.get("ENG_R4_Q_170_04").options[question.get("ENG_R4_Q_170_04").answerIndex], "If plants never get water, they die.");
  assert.equal(question.get("ENG_R4_Q_171_01").options[question.get("ENG_R4_Q_171_01").answerIndex], "is");
  assert.equal(question.get("ENG_R4_Q_172_01").options[question.get("ENG_R4_Q_172_01").answerIndex], "If you do not hurry, you will miss the train.");
  assert.equal(question.get("ENG_R4_Q_172_02").options[question.get("ENG_R4_Q_172_02").answerIndex], "rains");
  assert.equal(question.get("ENG_R4_Q_172_05").options[question.get("ENG_R4_Q_172_05").answerIndex], "A person without a ticket");
  assert.match(question.get("ENG_R4_Q_172_05").reviews.join(" "), /必要條件/);
  assert.equal(question.get("ENG_R4_Q_173_02").options[question.get("ENG_R4_Q_173_02").answerIndex], "whether");
  assert.equal(question.get("ENG_R4_Q_173_08").options[question.get("ENG_R4_Q_173_08").answerIndex], "I do not know if the shop will open early.");
  assert.match(question.get("ENG_R4_Q_173_11").options[question.get("ENG_R4_Q_173_11").answerIndex], /present form after if/);
  assert.match(question.get("ENG_R4_Q_174_02").options[question.get("ENG_R4_Q_174_02").answerIndex], /cannot know for sure/);
  assert.equal(question.get("ENG_R4_Q_174_06").options[question.get("ENG_R4_Q_174_06").answerIndex], "Whether it stops is not decided by this rule.");
  assert.equal(question.get("ENG_R4_Q_175_01").options[question.get("ENG_R4_Q_175_01").answerIndex], "were");
  assert.equal(question.get("ENG_R4_Q_175_08").options[question.get("ENG_R4_Q_175_08").answerIndex], "If I had more money, I would buy the book.");
  assert.match(question.get("ENG_R4_Q_175_12").reasons[3], /現實差距/);
  const questionStems = new Set(source.questions.map((value) => value.stem));
  assert(source.lectures.flatMap((value) => value.workedExamples).every((value) => !questionStems.has(value.prompt)), "U25 lecture prompt copied as a question");
  for (const [label, values] of [
    ["option reasons", source.questions.flatMap((value) => value.reasons)],
    ["question reviews", source.questions.flatMap((value) => value.reviews)],
    ["lecture sections", source.lectures.flatMap((value) => value.sections.map((section) => section.content))],
    ["worked-example whys", source.lectures.flatMap((value) => value.workedExamples.map((example) => example.why))],
  ]) assert.equal(new Set(values).size, values.length, `U25 duplicate ${label}`);
});

test("U26 reported speech preserves roles, perspective, intent, and evidence limits", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U26");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.equal(question.get("ENG_R4_Q_176_11").options[question.get("ENG_R4_Q_176_11").answerIndex], "The key is certainly in that bag now.");
  assert.match(question.get("ENG_R4_Q_176_11").reasons[2], /不能證明/);
  assert.equal(question.get("ENG_R4_Q_177_02").options[question.get("ENG_R4_Q_177_02").answerIndex], "told");
  assert(!question.get("ENG_R4_Q_177_02").options.includes("said to"));
  assert.equal(question.get("ENG_R4_Q_178_07").options[question.get("ENG_R4_Q_178_07").answerIndex], "Whether she means Amy or Mia");
  assert.equal(question.get("ENG_R4_Q_179_04").options[question.get("ENG_R4_Q_179_04").answerIndex], "It may stay here because the place has not changed.");
  assert.match(question.get("ENG_R4_Q_179_12").options[question.get("ENG_R4_Q_179_12").answerIndex], /only when the new time or place is different/);
  assert.equal(question.get("ENG_R4_Q_180_09").options[question.get("ENG_R4_Q_180_09").answerIndex], "Whether Sam is tired today");
  assert.equal(question.get("ENG_R4_Q_180_11").options[question.get("ENG_R4_Q_180_11").answerIndex], "moves");
  assert.equal(question.get("ENG_R4_Q_181_04").options[question.get("ENG_R4_Q_181_04").answerIndex], "Leo asked where the key was.");
  assert.equal(question.get("ENG_R4_Q_181_12").options[question.get("ENG_R4_Q_181_12").answerIndex], "Amy asked Sam not to call after ten.");
  assert.equal(question.get("ENG_R4_Q_182_03").options[question.get("ENG_R4_Q_182_03").answerIndex], "five / six");
  assert.match(question.get("ENG_R4_Q_182_11").options[question.get("ENG_R4_Q_182_11").answerIndex], /need more information/);
  assert.match(source.lectures.find((value) => value.skillId === "ENG_R4_S176").sections[3].content, /不代表那件事必然正確/);
  assert.match(source.lectures.find((value) => value.skillId === "ENG_R4_S180").sections[2].content, /沒有必要把 is 改成 was/);
  assert.match(source.lectures.find((value) => value.skillId === "ENG_R4_S182").sections[2].content, /不能任選一個當真/);
  const questionStems = new Set(source.questions.map((value) => value.stem));
  assert(source.lectures.flatMap((value) => value.workedExamples).every((value) => !questionStems.has(value.prompt)), "U26 lecture prompt copied as a question");
  for (const [label, values] of [
    ["option reasons", source.questions.flatMap((value) => value.reasons)],
    ["question reviews", source.questions.flatMap((value) => value.reviews)],
    ["lecture sections", source.lectures.flatMap((value) => value.sections.map((section) => section.content))],
    ["worked-example whys", source.lectures.flatMap((value) => value.workedExamples.map((example) => example.why))],
  ]) assert.equal(new Set(values).size, values.length, `U26 duplicate ${label}`);
});

test("U27 object complements preserve roles, governed forms, event scope, and evidence limits", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U27");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.equal(question.get("ENG_R4_Q_183_05").options[question.get("ENG_R4_Q_183_05").answerIndex], "use");
  assert.equal(question.get("ENG_R4_Q_184_04").options[question.get("ENG_R4_Q_184_04").answerIndex], "stay");
  assert.match(question.get("ENG_R4_Q_184_08").reasons[3], /沒有 Ben|沒有.*Ben/);
  assert.equal(question.get("ENG_R4_Q_185_06").options[question.get("ENG_R4_Q_185_06").answerIndex], "I needed to carry it.");
  assert.equal(question.get("ENG_R4_Q_185_12").options[question.get("ENG_R4_Q_185_12").answerIndex], "Nora read the message.");
  assert.equal(question.get("ENG_R4_Q_186_07").options[question.get("ENG_R4_Q_186_07").answerIndex], "Suggesting a break together");
  assert.match(question.get("ENG_R4_Q_186_12").options[question.get("ENG_R4_Q_186_12").answerIndex], /did not mean Mia had to/);
  assert.equal(question.get("ENG_R4_Q_187_04").options[question.get("ENG_R4_Q_187_04").answerIndex], "Amy finished the painting.");
  assert.equal(question.get("ENG_R4_Q_187_07").options[question.get("ENG_R4_Q_187_07").answerIndex], "I heard Amy with my own ears.");
  assert.match(question.get("ENG_R4_Q_188_08").options[question.get("ENG_R4_Q_188_08").answerIndex], /information/);
  assert.equal(question.get("ENG_R4_Q_189_09").options[question.get("ENG_R4_Q_189_09").answerIndex], "Leo");
  assert.equal(question.get("ENG_R4_Q_189_11").options[question.get("ENG_R4_Q_189_11").answerIndex], "Amy arranged the call, Ben called, and Nora did not answer.");
  assert.match(source.lectures.find((value) => value.skillId === "ENG_R4_S183").sections[2].content, /made、will make、does not make/);
  assert.match(source.lectures.find((value) => value.skillId === "ENG_R4_S187").sections[2].content, /不必表示看見盒子最後完全打開/);
  assert.match(source.lectures.find((value) => value.skillId === "ENG_R4_S189").sections[3].content, /沒有保證 Nora 接聽/);
  const questionStems = new Set(source.questions.map((value) => value.stem));
  assert(source.lectures.flatMap((value) => value.workedExamples).every((value) => !questionStems.has(value.prompt)), "U27 lecture prompt copied as a question");
  for (const [label, values] of [
    ["option reasons", source.questions.flatMap((value) => value.reasons)],
    ["question reviews", source.questions.flatMap((value) => value.reviews)],
    ["lecture sections", source.lectures.flatMap((value) => value.sections.map((section) => section.content))],
    ["worked-example whys", source.lectures.flatMap((value) => value.workedExamples.map((example) => example.why))],
  ]) assert.equal(new Set(values).size, values.length, `U27 duplicate ${label}`);
});

test("U28 word formation uses sentence position, morphology, context, and dictionary evidence without mechanical overreach", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U28");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.equal(question.get("ENG_R4_Q_190_01").options[question.get("ENG_R4_Q_190_01").answerIndex], "plan");
  assert.equal(question.get("ENG_R4_Q_190_10").options[question.get("ENG_R4_Q_190_10").answerIndex], "The nurse spoke ___.");
  assert.equal(question.get("ENG_R4_Q_191_07").options[question.get("ENG_R4_Q_191_07").answerIndex], "Information");
  assert.equal(question.get("ENG_R4_Q_192_06").options[question.get("ENG_R4_Q_192_06").answerIndex], "-less");
  assert.equal(question.get("ENG_R4_Q_193_06").options[question.get("ENG_R4_Q_193_06").answerIndex], "almost not");
  assert.equal(question.get("ENG_R4_Q_193_09").options[question.get("ENG_R4_Q_193_09").answerIndex], "adjective");
  assert.equal(question.get("ENG_R4_Q_194_08").options[question.get("ENG_R4_Q_194_08").answerIndex], "uncle");
  assert.match(question.get("ENG_R4_Q_194_08").reasons[3], /不是.*詞根/);
  assert.equal(question.get("ENG_R4_Q_194_12").options[question.get("ENG_R4_Q_194_12").answerIndex], "The bird could no longer be seen from there.");
  assert.equal(question.get("ENG_R4_Q_195_10").options[question.get("ENG_R4_Q_195_10").answerIndex], "confusing");
  assert.equal(question.get("ENG_R4_Q_195_11").options[question.get("ENG_R4_Q_195_11").answerIndex], "confused");
  assert.equal(question.get("ENG_R4_Q_196_08").options[question.get("ENG_R4_Q_196_08").answerIndex], "hard");
  assert.equal(question.get("ENG_R4_Q_196_10").options[question.get("ENG_R4_Q_196_10").answerIndex], "an adverb about distance");
  assert.match(source.lectures.find((value) => value.skillId === "ENG_R4_S190").sections[3].content, /位置先縮小範圍|詞性線索/);
  assert.match(source.lectures.find((value) => value.skillId === "ENG_R4_S194").sections[3].content, /前後句驗證/);
  assert.match(source.lectures.find((value) => value.skillId === "ENG_R4_S196").sections[1].content, /同一字形在不同位置/);
  const questionStems = new Set(source.questions.map((value) => value.stem));
  assert(source.lectures.flatMap((value) => value.workedExamples).every((value) => !questionStems.has(value.prompt)), "U28 lecture prompt copied as a question");
  for (const [label, values] of [
    ["option reasons", source.questions.flatMap((value) => value.reasons)],
    ["question reviews", source.questions.flatMap((value) => value.reviews)],
    ["lecture sections", source.lectures.flatMap((value) => value.sections.map((section) => section.content))],
    ["worked-example whys", source.lectures.flatMap((value) => value.workedExamples.map((example) => example.why))],
  ]) assert.equal(new Set(values).size, values.length, `U28 duplicate ${label}`);
});

test("U29 collocations and phrasal verbs preserve natural use, meaning, and object placement", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U29");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.equal(question.get("ENG_R4_Q_197_01").options[question.get("ENG_R4_Q_197_01").answerIndex], "made");
  assert.equal(question.get("ENG_R4_Q_198_03").options[question.get("ENG_R4_Q_198_03").answerIndex], "of");
  assert.equal(question.get("ENG_R4_Q_199_03").options[question.get("ENG_R4_Q_199_03").answerIndex], "At first");
  assert.equal(question.get("ENG_R4_Q_200_04").options[question.get("ENG_R4_Q_200_04").answerIndex], "There is no milk left.");
  assert.equal(question.get("ENG_R4_Q_201_06").options[question.get("ENG_R4_Q_201_06").answerIndex], "The nurse looked after her.");
  assert.equal(question.get("ENG_R4_Q_202_11").options[question.get("ENG_R4_Q_202_11").answerIndex], "Take them off.");
  assert.equal(question.get("ENG_R4_Q_203_01").options[question.get("ENG_R4_Q_203_01").answerIndex], "take");
  assert.equal(question.get("ENG_R4_Q_203_02").options[question.get("ENG_R4_Q_203_02").answerIndex], "heavy rain");
  assert.match(source.lectures.find((value) => value.skillId === "ENG_R4_S201").sections[2].content, /look after her/);
  assert.match(source.lectures.find((value) => value.skillId === "ENG_R4_S203").sections[0].content, /take medicine/);
  const questionStems = new Set(source.questions.map((value) => value.stem));
  assert(source.lectures.flatMap((value) => value.workedExamples).every((value) => !questionStems.has(value.prompt)), "U29 lecture prompt copied as a question");
  for (const [label, values] of [
    ["option reasons", source.questions.flatMap((value) => value.reasons)],
    ["question reviews", source.questions.flatMap((value) => value.reviews)],
    ["lecture sections", source.lectures.flatMap((value) => value.sections.map((section) => section.content))],
    ["worked-example whys", source.lectures.flatMap((value) => value.workedExamples.map((example) => example.why))],
  ]) assert.equal(new Set(values).size, values.length, `U29 duplicate ${label}`);
});

test("U30 communication questions use contextual functions, bounded inference, and sufficient replies", async () => {
  const { loadEnglishUnitSource } = await api();
  const source = await loadEnglishUnitSource("ENG_R4_U30");
  const question = new Map(source.questions.map((value) => [value.id, value]));
  assert.equal(question.get("ENG_R4_Q_204_01").options[question.get("ENG_R4_Q_204_01").answerIndex], "Someone to pass the salt");
  assert.equal(question.get("ENG_R4_Q_205_05").options[question.get("ENG_R4_Q_205_05").answerIndex], "Stop!");
  assert.equal(question.get("ENG_R4_Q_206_02").options[question.get("ENG_R4_Q_206_02").answerIndex], "Do you mean the bag that is not heavy?");
  assert.equal(question.get("ENG_R4_Q_207_08").options[question.get("ENG_R4_Q_207_08").answerIndex], "His voice and face show he may not be pleased.");
  assert.match(question.get("ENG_R4_Q_207_08").options[3], /may not/);
  assert.equal(question.get("ENG_R4_Q_208_06").options[question.get("ENG_R4_Q_208_06").answerIndex], "That happened to me too. What helped you find the way?");
  assert.equal(question.get("ENG_R4_Q_209_05").options[question.get("ENG_R4_Q_209_05").answerIndex], "What facts show that it helped everyone?");
  assert.equal(question.get("ENG_R4_Q_210_07").options[question.get("ENG_R4_Q_210_07").answerIndex], "I finished it, but Leo has not checked it yet.");
  assert.match(source.lectures.find((value) => value.skillId === "ENG_R4_S207").sections[3].content, /線索不足/);
  assert.match(source.lectures.find((value) => value.skillId === "ENG_R4_S210").sections[2].title, /足夠不等於/);
  const questionStems = new Set(source.questions.map((value) => value.stem));
  assert(source.lectures.flatMap((value) => value.workedExamples).every((value) => !questionStems.has(value.prompt)), "U30 lecture prompt copied as a question");
  for (const [label, values] of [
    ["option reasons", source.questions.flatMap((value) => value.reasons)],
    ["question reviews", source.questions.flatMap((value) => value.reviews)],
    ["lecture sections", source.lectures.flatMap((value) => value.sections.map((section) => section.content))],
    ["worked-example whys", source.lectures.flatMap((value) => value.workedExamples.map((example) => example.why))],
  ]) assert.equal(new Set(values).size, values.length, `U30 duplicate ${label}`);
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
