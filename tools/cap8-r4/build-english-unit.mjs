import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { validateAuthoringRecord } from "./authoring-validator.mjs";
import { validateEnglishVocabularyScope } from "./english-vocabulary-scope.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const GRAPH_PATH = path.join(HERE, "authority", "frozen-authority-graph.json");
const ENGLISH_FOLDER = "英文會考作戰室";
const UNIT_ID_PATTERN = /^ENG_R4_U\d{2}$/;

function provenance(authorityRefs) {
  return {
    status: "original",
    authorRole: "Codex R4 English content author",
    copyrightStatus: "Original wording; official sources used only for scope and assessment calibration.",
    sourceRefs: [...authorityRefs],
  };
}

function materializeLecture(value, skill) {
  return {
    id: value.id,
    subject: "english",
    unitId: skill.unitId,
    skillId: skill.id,
    authorityRefs: [...skill.authorityRefs],
    prerequisites: [...skill.prerequisites],
    objectives: value.objectives,
    sections: value.sections,
    workedExamples: value.workedExamples,
    misconceptions: value.misconceptions,
    checks: value.checks,
    assets: value.assets,
    provenance: provenance(skill.authorityRefs),
  };
}

function materializeQuestion(value, skill) {
  assert.equal(value.reasons.length, value.options.length, `${value.id}: every option needs an authored reason`);
  assert.equal(value.reviews.length, 2, `${value.id}: exactly two independent authoring reviews required`);
  return {
    id: value.id,
    subject: "english",
    skillIds: [skill.id],
    authorityRefs: [...skill.authorityRefs],
    stimulusId: null,
    stem: value.stem,
    options: value.options,
    answerIndex: value.answerIndex,
    optionRationales: value.reasons.map((reason, optionIndex) => ({
      optionIndex,
      isCorrect: optionIndex === value.answerIndex,
      reason,
    })),
    difficulty: value.difficulty,
    cognitiveProcess: value.cognitiveProcess,
    representationType: value.representationType,
    misconceptionTargets: value.misconceptionTargets,
    provenance: provenance(skill.authorityRefs),
    independentReviews: value.reviews.map((evidence, index) => ({
      reviewerRole: index === 0 ? "english-grammar-solution-review" : "english-alternative-answer-review",
      derivedAnswerIndex: value.answerIndex,
      evidence,
      status: "pass",
    })),
    assets: [],
  };
}

export async function loadEnglishUnitSource(unitId, { repoRoot = REPO_ROOT } = {}) {
  assert(UNIT_ID_PATTERN.test(unitId), `invalid English unit ID: ${unitId}`);
  const sourcePath = path.join(repoRoot, ENGLISH_FOLDER, "r4", "source", "units", `${unitId}.mjs`);
  const source = (await import(pathToFileURL(sourcePath).href)).ENGLISH_UNIT_SOURCE;
  assert(source, `${unitId}: ENGLISH_UNIT_SOURCE export missing`);
  assert.equal(source.unitId, unitId, `${unitId}: source unit mismatch`);
  return source;
}

export async function materializeEnglishUnit(source, { graphPath = GRAPH_PATH } = {}) {
  assert(source.vocabularyPolicy, `${source.unitId}: vocabulary policy missing`);
  await validateEnglishVocabularyScope(source, source.vocabularyPolicy);
  const graph = JSON.parse(await readFile(graphPath, "utf8"));
  assert.equal(graph.status, "frozen-reviewed", "authority graph must be frozen and reviewed");
  const skills = graph.skills.filter((skill) => skill.subject === "english" && skill.unitId === source.unitId);
  const skillById = new Map(skills.map((skill) => [skill.id, skill]));
  assert(skills.length > 0, `${source.unitId}: no frozen skills`);
  assert.equal(source.lectures.length, skills.length, `${source.unitId}: one lecture per skill required`);
  assert.equal(source.questions.length, skills.length * 12, `${source.unitId}: twelve questions per skill required`);
  const lectures = source.lectures.map((value) => {
    const skill = skillById.get(value.skillId);
    assert(skill, `${value.id}: skill is outside ${source.unitId}`);
    return materializeLecture(value, skill);
  });
  const questions = source.questions.map((value) => {
    const skill = skillById.get(value.skillId);
    assert(skill, `${value.id}: skill is outside ${source.unitId}`);
    return materializeQuestion(value, skill);
  });
  assert.equal(new Set(lectures.map((value) => value.id)).size, lectures.length, "duplicate lecture ID");
  assert.equal(new Set(lectures.map((value) => value.skillId)).size, skills.length, "duplicate lecture skill");
  assert.equal(new Set(questions.map((value) => value.id)).size, questions.length, "duplicate question ID");
  const visibleKeys = questions.map((value) => JSON.stringify([value.stem, [...value.options].sort()]));
  assert.equal(new Set(visibleKeys).size, questions.length, `${source.unitId}: duplicate visible question`);
  for (const skill of skills) {
    const bank = questions.filter((value) => value.skillIds.includes(skill.id));
    assert.equal(bank.length, 12, `${skill.id}: question floor mismatch`);
    assert.deepEqual(
      Object.fromEntries(["foundation", "standard", "advanced", "transfer"].map((level) => [level, bank.filter((value) => value.difficulty === level).length])),
      { foundation: 3, standard: 4, advanced: 3, transfer: 2 },
      `${skill.id}: difficulty distribution mismatch`,
    );
  }
  for (const value of lectures) await validateAuthoringRecord("lecture", value);
  for (const value of questions) await validateAuthoringRecord("question", value);
  return { lectures, questions, skills };
}

export async function buildEnglishUnit(unitId, { repoRoot = REPO_ROOT } = {}) {
  const source = await loadEnglishUnitSource(unitId, { repoRoot });
  const materialized = await materializeEnglishUnit(source);
  const runtimeRoot = path.join(repoRoot, ENGLISH_FOLDER, "r4", "runtime");
  const lectureRoot = path.join(runtimeRoot, "lectures");
  const questionRoot = path.join(runtimeRoot, "questions");
  await Promise.all([mkdir(lectureRoot, { recursive: true }), mkdir(questionRoot, { recursive: true })]);
  await Promise.all([
    ...materialized.lectures.map((value) => writeFile(path.join(lectureRoot, `${value.id}.json`), `${JSON.stringify(value, null, 2)}\n`, "utf8")),
    ...materialized.questions.map((value) => writeFile(path.join(questionRoot, `${value.id}.json`), `${JSON.stringify(value, null, 2)}\n`, "utf8")),
  ]);
  return { unitId, lectures: materialized.lectures.length, questions: materialized.questions.length };
}

async function main() {
  const unitId = process.argv[2];
  assert(unitId, "usage: node tools/cap8-r4/build-english-unit.mjs ENG_R4_UNN");
  const result = await buildEnglishUnit(unitId);
  console.log(`build-english-unit: OK - ${result.unitId}, ${result.lectures} lectures, ${result.questions} questions`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
