import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { materializeEnglishCorpus } from "../build-english-corpus.mjs";
import { englishStimulusGlossary } from "../english-stimulus-glossary.mjs";
import { ENGLISH_LISTENING_PICTURE_BOARDS } from "../../../英文會考作戰室/r4/source/units/ENG_R4_U47.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..", "..", "..");

function normalized(value) {
  return String(value).normalize("NFC").replace(/\s+/gu, " ").trim().toLowerCase();
}

function visible(value) {
  return String(value).normalize("NFC").replace(/\s+/gu, " ").trim();
}

function assertUnique(values, label) {
  assert.equal(new Set(values).size, values.length, `${label} must be unique`);
}

function describeScene([count, action, object, position, feature]) {
  const people = count === 1 ? "One person" : `${["Zero", "One", "Two", "Three", "Four"][count]} people`;
  const wearing = feature === "none" ? " with no marked accessory" : feature === "hat" ? ` and wearing ${count === 1 ? "a hat" : "hats"}` : feature === "glasses" ? " and wearing glasses" : ` and wearing ${count === 1 ? "a scarf" : "scarves"}`;
  const verb = count === 1 ? { standing: "is standing", walking: "is walking", sitting: "is sitting", pointing: "is pointing" }[action] : { standing: "are standing", walking: "are walking", sitting: "are sitting", pointing: "are pointing" }[action];
  const article = /^[aeiou]/iu.test(object) ? "an" : "a";
  return `${people} ${verb}${wearing}; ${article} ${object} is ${position} the table.`;
}

function solveReadingQuestion(item, question, title) {
  const operation = question.cognitiveProcess[1];
  const passage = normalized(item.passage);
  const options = question.options.map(normalized);
  if (operation === "identify-whole-text-focus-from-related-titles") return question.options.indexOf(title);
  const matches = options.map((value) => passage.includes(value));
  assert.equal(matches.filter(Boolean).length, 1, `${question.id}: passage must support exactly one option verbatim`);
  return matches.indexOf(true);
}

function solvePictureQuestion(item, question) {
  const boardIndex = Number(item.visualAssets[0].id.match(/_(\d{2})$/u)[1]) - 1;
  const board = ENGLISH_LISTENING_PICTURE_BOARDS[boardIndex];
  const [firstText, secondText] = item.transcript.replace(/^First scene\. /u, "").split(" Second scene. ");
  const firstIndex = board.findIndex((scene) => describeScene(scene) === firstText);
  const secondIndex = board.findIndex((scene) => describeScene(scene) === secondText);
  assert(firstIndex >= 0 && secondIndex >= 0, `${item.id}: transcript does not resolve to its board`);
  const operation = question.cognitiveProcess[1];
  const expected = operation === "match-first-picture-scene" ? `Panel ${"ABCD"[firstIndex]}`
    : operation === "match-second-picture-position" ? `Panel ${"ABCD"[secondIndex]}`
      : `${board[firstIndex][2]}, then ${board[secondIndex][2]}`;
  return question.options.indexOf(expected);
}

test("all 6,740 English questions have unique evidence-bound constructions and accepted independent decisions", { timeout: 60_000 }, async () => {
  const corpus = await materializeEnglishCorpus({ synthesizeAudio: false });
  assert.equal(JSON.stringify(corpus).includes("a umbrella"), false, "picture-listening prose must use 'an umbrella'");
  const questions = [...corpus.questions, ...corpus.stimulusQuestions];
  assert.equal(questions.length, 6_740);
  assertUnique(questions.map((value) => value.id), "question IDs");
  const stimulusEvidence = new Map([
    ...corpus.reading.map((value) => [value.id, normalized(value.passage)]),
    ...corpus.listening.map((value) => [value.id, JSON.stringify([
      normalized(value.transcript),
      value.visualAssets.map((asset) => normalized(asset.longDescription)),
    ])]),
  ]);
  assertUnique(questions.map((value) => JSON.stringify([
    value.stimulusId ? stimulusEvidence.get(value.stimulusId) : null,
    normalized(value.stem),
    value.options.map(visible).sort(),
  ])), "evidence-bound question constructions");
  for (const question of questions) {
    assert.equal(question.options.length, 4, `${question.id}: option count`);
    assertUnique(question.options.map(visible), `${question.id}: options`);
    assert(Number.isInteger(question.answerIndex) && question.answerIndex >= 0 && question.answerIndex < 4, `${question.id}: answer index`);
    assert.equal(question.optionRationales.length, 4, `${question.id}: rationale count`);
    assert.equal(question.optionRationales.filter((value) => value.isCorrect).length, 1, `${question.id}: rationale answer count`);
    assert.equal(question.optionRationales.find((value) => value.isCorrect).optionIndex, question.answerIndex, `${question.id}: rationale answer`);
    assert(question.independentReviews.length >= 2, `${question.id}: independent review count`);
    assert(question.independentReviews.every((value) => value.status === "pass" && value.derivedAnswerIndex === question.answerIndex), `${question.id}: independent decision disagreement`);
    assert.equal(question.provenance.status, "original", `${question.id}: provenance`);
  }
});

test("all 500 reading sets and 100 picture-listening sets independently resolve from locked evidence", { timeout: 60_000 }, async () => {
  const corpus = await materializeEnglishCorpus({ synthesizeAudio: false });
  const raw = await readFile(path.join(ROOT, "英文會考作戰室", "reading-bank.js"), "utf8");
  const legacy = JSON.parse(raw.slice(raw.indexOf("["), raw.lastIndexOf("]") + 1));
  const titleById = new Map(legacy.map((value) => [value.id, value.title]));
  assert.equal(corpus.reading.length, 500);
  assertUnique(corpus.reading.map((value) => normalized(value.passage)), "reading passages");
  for (const item of corpus.reading) {
    assert.equal(item.questions.length, 4, `${item.id}: reading question count`);
    const title = titleById.get(item.provenance.legacyId);
    assert(item.questions.slice(1).every((question) => !normalized(question.stem).includes(normalized(title))), `${item.id}: later question reveals title answer`);
    for (const question of item.questions) assert.equal(solveReadingQuestion(item, question, title), question.answerIndex, `${question.id}: independent passage solve`);
  }
  const picture = corpus.listening.filter((value) => value.section === "picture");
  assert.equal(picture.length, 100);
  for (const item of picture) for (const question of item.questions) assert.equal(solvePictureQuestion(item, question), question.answerIndex, `${question.id}: independent picture solve`);
});

test("all stimuli, transcripts, visual metadata, and governed counts are complete", { timeout: 60_000 }, async () => {
  const corpus = await materializeEnglishCorpus({ synthesizeAudio: false });
  const glossaryLedger = JSON.parse(await readFile(path.join(ROOT, "tools", "cap8-r4", "authority", "english-stimulus-glossary.json"), "utf8"));
  assert.deepEqual([corpus.skills.length, corpus.lectures.length, corpus.questions.length, corpus.reading.length, corpus.listening.length, corpus.stimulusQuestions.length, corpus.assets.length], [320, 320, 3_840, 500, 300, 2_900, 42]);
  assert.deepEqual(glossaryLedger.properNames, [...glossaryLedger.properNames].sort((a, b) => a.localeCompare(b, "en")), "proper-name exemptions must be deterministic");
  assert(glossaryLedger.entries.every((value) => normalized(value.token) !== normalized(value.zh)), "glossary translations must not repeat the English token");
  assert(glossaryLedger.entries.every((value) => /\p{Script=Han}/u.test(value.zh)), "glossary translations must contain Traditional Chinese support");
  assert(glossaryLedger.entries.every((value) => !/[�]|&(?:lt|gt|amp|quot);/u.test(value.zh)), "glossary translations must not contain encoding or HTML artifacts");
  for (const item of corpus.reading) {
    assert.deepEqual(item.glossary, await englishStimulusGlossary([item.passage, ...item.questions.flatMap((question) => [question.stem, ...question.options])]), `${item.id}: governed glossary`);
  }
  for (const item of corpus.listening) {
    assert.deepEqual(item.glossary, await englishStimulusGlossary([item.transcript, ...item.questions.flatMap((question) => [question.stem, ...question.options])]), `${item.id}: governed glossary`);
  }
  assert.deepEqual(Object.fromEntries(["picture", "response", "discourse"].map((section) => [section, corpus.listening.filter((value) => value.section === section).length])), { picture: 100, response: 100, discourse: 100 });
  assertUnique(corpus.listening.map((value) => normalized(value.transcript)), "listening transcripts");
  assert(corpus.listening.every((value) => value.questions.length === 3 && value.provenance.status === "original"));
  assert(corpus.listening.filter((value) => value.section === "picture").every((value) => value.visualAssets.length === 1));
  for (const asset of corpus.assets.map((value) => value.metadata)) {
    assert(asset.altText && asset.caption && asset.longDescription, `${asset.id}: text alternatives`);
    assert.equal(asset.accessibility.colorIndependent, true, `${asset.id}: color independence`);
    assert.equal(asset.accessibility.printSafe, true, `${asset.id}: print safety`);
    assert(asset.dataFallback?.columns?.length && asset.dataFallback?.rows?.length, `${asset.id}: data fallback`);
    assert.equal(asset.originality, "original", `${asset.id}: original asset status`);
    assert.match(asset.source, /^Original/u, `${asset.id}: original asset source`);
  }
});
