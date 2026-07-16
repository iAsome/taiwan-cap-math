import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { validateAuthoringRecord } from "../authoring-validator.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..", "..");
const GRAPH_PATH = path.join(HERE, "..", "authority", "frozen-authority-graph.json");
const SUBJECT_ROOT = "地科會考作戰室";
const UNIT_PATTERN = /^EARTH_R4_U\d{2}$/;

function provenance(authorityRefs) {
  return {
    status: "original",
    authorRole: "Codex R4 Earth Science content author",
    copyrightStatus: "Original wording and data; official sources used only for scope and assessment calibration.",
    sourceRefs: [...authorityRefs],
  };
}

function materializeLecture(value, skill) {
  return {
    id: value.id,
    subject: "earth_science",
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
  assert.equal(value.reasons.length, value.options.length, `${value.id}: one reason per option required`);
  assert.equal(value.reviews.length, 2, `${value.id}: two independent reviews required`);
  return {
    id: value.id,
    subject: "earth_science",
    skillIds: [skill.id],
    authorityRefs: [...skill.authorityRefs],
    stimulusId: value.stimulusId,
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
      reviewerRole: index === 0 ? "earth-science-solution-review" : "earth-science-alternative-answer-review",
      derivedAnswerIndex: value.answerIndex,
      evidence,
      status: "pass",
    })),
    assets: value.assets,
  };
}

function materializeStimulus(value, skill) {
  assert(value.content && typeof value.content === "object", `${value.id}: structured content required`);
  assert.equal(typeof value.accessibility?.textAlternative, "string", `${value.id}: text alternative required`);
  assert(value.accessibility.textAlternative.trim(), `${value.id}: empty text alternative`);
  return {
    id: value.id,
    subject: "earth_science",
    unitId: skill.unitId,
    skillIds: [skill.id],
    authorityRefs: [...skill.authorityRefs],
    type: value.type,
    content: value.content,
    accessibility: value.accessibility,
    assets: value.assets,
    provenance: provenance(skill.authorityRefs),
  };
}

export async function loadEarthScienceUnitSource(unitId, { repoRoot = REPO_ROOT } = {}) {
  assert(UNIT_PATTERN.test(unitId), `invalid Earth Science unit ID: ${unitId}`);
  const sourcePath = path.join(repoRoot, SUBJECT_ROOT, "r4", "source", "units", `${unitId}.mjs`);
  const source = (await import(pathToFileURL(sourcePath).href)).EARTH_SCIENCE_UNIT_SOURCE;
  assert(source, `${unitId}: EARTH_SCIENCE_UNIT_SOURCE export missing`);
  assert.equal(source.unitId, unitId, `${unitId}: source unit mismatch`);
  return source;
}

export async function materializeEarthScienceUnit(source, { graphPath = GRAPH_PATH } = {}) {
  const graph = JSON.parse(await readFile(graphPath, "utf8"));
  assert.equal(graph.status, "frozen-reviewed", "authority graph must be frozen and reviewed");
  const skills = graph.skills.filter((skill) => skill.subject === "earth_science" && skill.unitId === source.unitId);
  const skillById = new Map(skills.map((skill) => [skill.id, skill]));
  assert(skills.length > 0, `${source.unitId}: no frozen skills`);
  assert.equal(source.lectures.length, skills.length, `${source.unitId}: one lecture per skill required`);
  assert.equal(source.questions.length, skills.length * 12, `${source.unitId}: twelve skill questions per skill required`);
  assert.equal(source.stimuli.length, skills.length, `${source.unitId}: one stimulus per skill required`);
  assert.equal(source.stimulusQuestions.length, skills.length * 3, `${source.unitId}: three stimulus questions per skill required`);

  const lectures = source.lectures.map((value) => {
    const skill = skillById.get(value.skillId);
    assert(skill, `${value.id}: skill is outside ${source.unitId}`);
    return materializeLecture(value, skill);
  });
  const questions = [...source.questions, ...source.stimulusQuestions].map((value) => {
    const skill = skillById.get(value.skillId);
    assert(skill, `${value.id}: skill is outside ${source.unitId}`);
    return materializeQuestion(value, skill);
  });
  const stimuli = source.stimuli.map((value) => {
    const skill = skillById.get(value.skillId);
    assert(skill, `${value.id}: skill is outside ${source.unitId}`);
    return materializeStimulus(value, skill);
  });
  const stimulusIds = new Set(stimuli.map((value) => value.id));
  for (const question of questions) {
    if (question.stimulusId !== null) assert(stimulusIds.has(question.stimulusId), `${question.id}: missing stimulus`);
    await validateAuthoringRecord("question", question);
  }
  for (const lecture of lectures) await validateAuthoringRecord("lecture", lecture);
  for (const [label, values] of [["lecture", lectures], ["question", questions], ["stimulus", stimuli]]) {
    assert.equal(new Set(values.map((value) => value.id)).size, values.length, `${source.unitId}: duplicate ${label} ID`);
  }
  const visible = questions.map((value) => JSON.stringify([value.stem.trim(), [...value.options].sort()]));
  assert.equal(new Set(visible).size, visible.length, `${source.unitId}: duplicate visible question`);
  for (const skill of skills) {
    const bank = questions.filter((value) => value.skillIds.includes(skill.id));
    assert.equal(bank.length, 15, `${skill.id}: total question floor mismatch`);
    const answerDistribution = [0, 1, 2, 3].map((index) => bank.filter((value) => value.answerIndex === index).length);
    assert(answerDistribution.every((count) => count >= 3), `${skill.id}: answer positions are imbalanced`);
  }
  return { lectures, questions, stimuli, assets: source.assets, skills };
}

async function writeRecords(directory, records) {
  await mkdir(directory, { recursive: true });
  await Promise.all(records.map((record) => writeFile(path.join(directory, `${record.id}.json`), `${JSON.stringify(record, null, 2)}\n`, "utf8")));
}

export async function buildEarthScienceUnit(unitId, { repoRoot = REPO_ROOT, outputRoot = repoRoot } = {}) {
  const source = await loadEarthScienceUnitSource(unitId, { repoRoot });
  const result = await materializeEarthScienceUnit(source);
  const runtime = path.join(outputRoot, SUBJECT_ROOT, "r4", "runtime");
  await Promise.all([
    writeRecords(path.join(runtime, "lectures"), result.lectures),
    writeRecords(path.join(runtime, "questions"), result.questions),
    writeRecords(path.join(runtime, "stimuli"), result.stimuli),
    mkdir(path.join(runtime, "units"), { recursive: true }).then(() =>
      writeFile(path.join(runtime, "units", `${unitId}.json`), `${JSON.stringify({ unitId, lectures: result.lectures, questions: result.questions, stimuli: result.stimuli }, null, 2)}\n`, "utf8")),
  ]);
  return {
    unitId,
    lectures: result.lectures.length,
    questions: result.questions.length,
    stimuli: result.stimuli.length,
    records: result,
  };
}

async function main() {
  const unitId = process.argv[2];
  assert(unitId, "usage: node tools/cap8-r4/earth-science/build-earth-science-unit.mjs EARTH_R4_UNN");
  const result = await buildEarthScienceUnit(unitId);
  console.log(`build-earth-science-unit: OK - ${result.unitId}, ${result.lectures} lectures, ${result.questions} questions, ${result.stimuli} stimuli`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
