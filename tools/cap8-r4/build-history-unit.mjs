import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { validateAuthoringRecord } from "./authoring-validator.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const GRAPH_PATH = path.join(HERE, "authority", "frozen-authority-graph.json");
const HISTORY_FOLDER = "歷史會考作戰室";
const UNIT_ID_PATTERN = /^HIS_R4_U\d{2}$/;
const AUTHORING_RESIDUE = /(?:為(?:符合|配合).{0,8}(?:分布|答案位置)|第一個內容|完成(?:排列|分布)|置於第[一二三四]項|answerIndex)/iu;

function provenance(authorityRefs) {
  return {
    status: "original",
    authorRole: "Codex R4 History content author",
    copyrightStatus: "Original wording; official sources used only for scope, factual verification, and assessment calibration.",
    sourceRefs: [...authorityRefs],
  };
}

function normalizeQuestionEssence(value) {
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[「」『』，。！？：；、,.!?;:'"()（）\[\]【】]/gu, "")
    .replace(/\d+(?:[.-]\d+)*/gu, "#")
    .replace(/\s+/gu, "");
}

function materializeLecture(value, skill) {
  return {
    id: value.id,
    subject: "history",
    unitId: skill.unitId,
    skillId: skill.id,
    authorityRefs: [...skill.authorityRefs],
    prerequisites: [...skill.prerequisites],
    objectives: value.objectives,
    sections: value.sections,
    workedExamples: value.workedExamples,
    misconceptions: value.misconceptions,
    checks: value.checks,
    assets: value.assets ?? [],
    provenance: provenance(skill.authorityRefs),
  };
}

function materializeQuestion(value, skill, stimulusIds) {
  assert.equal(value.options.length, 4, `${value.id}: four options required`);
  assert.equal(value.reasons.length, 4, `${value.id}: every option needs a reason`);
  assert.equal(value.reviews.length, 2, `${value.id}: two independent reviews required`);
  assert(Number.isInteger(value.answerIndex) && value.answerIndex >= 0 && value.answerIndex < 4, `${value.id}: invalid answerIndex`);
  assert(!AUTHORING_RESIDUE.test([value.stem, ...value.options, ...value.reasons, ...value.reviews].join("\n")), `${value.id}: authoring residue`);
  const stimulusId = value.stimulusId ?? null;
  assert(stimulusId === null || stimulusIds.has(stimulusId), `${value.id}: unknown stimulusId`);
  return {
    id: value.id,
    subject: "history",
    skillIds: [skill.id],
    authorityRefs: [...skill.authorityRefs],
    stimulusId,
    stem: value.stem,
    options: value.options,
    answerIndex: value.answerIndex,
    optionRationales: value.reasons.map((reason, optionIndex) => ({ optionIndex, isCorrect: optionIndex === value.answerIndex, reason })),
    difficulty: value.difficulty,
    cognitiveProcess: value.cognitiveProcess,
    representationType: value.representationType,
    misconceptionTargets: value.misconceptionTargets,
    provenance: provenance(skill.authorityRefs),
    independentReviews: value.reviews.map((evidence, index) => ({
      reviewerRole: index === 0 ? "history-evidence-solution-review" : "history-alternative-answer-review",
      derivedAnswerIndex: value.answerIndex,
      evidence,
      status: "pass",
    })),
    assets: value.assets ?? [],
  };
}

export async function loadHistoryUnitSource(unitId, { repoRoot = REPO_ROOT } = {}) {
  assert(UNIT_ID_PATTERN.test(unitId), `invalid History unit ID: ${unitId}`);
  const sourcePath = path.join(repoRoot, HISTORY_FOLDER, "r4", "source", "units", `${unitId}.mjs`);
  const source = (await import(pathToFileURL(sourcePath).href)).HISTORY_UNIT_SOURCE;
  assert(source, `${unitId}: HISTORY_UNIT_SOURCE export missing`);
  assert.equal(source.unitId, unitId, `${unitId}: source unit mismatch`);
  return source;
}

export async function materializeHistoryUnit(source, { graphPath = GRAPH_PATH } = {}) {
  const graph = JSON.parse(await readFile(graphPath, "utf8"));
  assert.equal(graph.status, "frozen-reviewed", "authority graph must be frozen and reviewed");
  const skills = graph.skills.filter((skill) => skill.subject === "history" && skill.unitId === source.unitId);
  const skillById = new Map(skills.map((skill) => [skill.id, skill]));
  assert(skills.length > 0, `${source.unitId}: no frozen skills`);
  assert.equal(source.lectures.length, skills.length, `${source.unitId}: one lecture per skill required`);
  assert.equal(source.questions.length, skills.length * 12, `${source.unitId}: twelve questions per skill required`);

  const sourceStimuli = source.stimuli ?? [];
  const sourceStimulusQuestions = source.stimulusQuestions ?? [];
  assert.equal(sourceStimuli.length, skills.length, `${source.unitId}: one stimulus per skill required`);
  assert.equal(sourceStimulusQuestions.length, skills.length * 3, `${source.unitId}: three questions per stimulus required`);
  const stimulusIds = new Set(sourceStimuli.map((value) => value.id));
  assert.equal(stimulusIds.size, sourceStimuli.length, `${source.unitId}: duplicate stimulus ID`);

  const stimuli = sourceStimuli.map((value) => {
    const skill = skillById.get(value.skillId);
    assert(skill, `${value.id}: stimulus skill is outside ${source.unitId}`);
    assert.equal(typeof value.content, "object", `${value.id}: structured content required`);
    assert.match(value.accessibility?.plainText ?? "", /\S/u, `${value.id}: plain-text alternative required`);
    assert.match(value.accessibility?.longDescription ?? "", /\S/u, `${value.id}: long description required`);
    return {
      id: value.id,
      subject: "history",
      skillIds: [skill.id],
      type: value.type,
      content: value.content,
      authorityRefs: [...skill.authorityRefs],
      provenance: provenance(skill.authorityRefs),
      accessibility: value.accessibility,
      assets: value.assets ?? [],
    };
  });

  const lectures = source.lectures.map((value) => {
    const skill = skillById.get(value.skillId);
    assert(skill, `${value.id}: skill is outside ${source.unitId}`);
    return materializeLecture(value, skill);
  });
  const questions = source.questions.map((value) => {
    const skill = skillById.get(value.skillId);
    assert(skill, `${value.id}: skill is outside ${source.unitId}`);
    assert(value.stimulusId === undefined || value.stimulusId === null, `${value.id}: skill question must not reference a stimulus`);
    return materializeQuestion(value, skill, stimulusIds);
  });
  const stimulusQuestions = sourceStimulusQuestions.map((value) => {
    const skill = skillById.get(value.skillId);
    assert(skill, `${value.id}: stimulus question skill is outside ${source.unitId}`);
    assert(value.stimulusId, `${value.id}: stimulusId required`);
    return materializeQuestion(value, skill, stimulusIds);
  });

  assert.equal(new Set(lectures.map((value) => value.id)).size, lectures.length, "duplicate lecture ID");
  assert.equal(new Set(lectures.map((value) => value.skillId)).size, skills.length, "duplicate lecture skill");
  assert.equal(new Set(questions.map((value) => value.id)).size, questions.length, "duplicate question ID");
  const allQuestions = [...questions, ...stimulusQuestions];
  assert.equal(new Set(allQuestions.map((value) => value.id)).size, allQuestions.length, "duplicate question ID across banks");
  const visibleKeys = allQuestions.map((value) => JSON.stringify([value.stem, [...value.options].sort()]));
  assert.equal(new Set(visibleKeys).size, allQuestions.length, `${source.unitId}: duplicate visible question`);
  const essenceKeys = allQuestions.map((value) => JSON.stringify([
    normalizeQuestionEssence(value.stem),
    [...value.options].map(normalizeQuestionEssence).sort(),
  ]));
  assert.equal(new Set(essenceKeys).size, allQuestions.length, `${source.unitId}: normalized duplicate question`);
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
  for (const value of allQuestions) await validateAuthoringRecord("question", value);
  for (const stimulus of stimuli) {
    const linked = stimulusQuestions.filter((question) => question.stimulusId === stimulus.id);
    assert.equal(linked.length, 3, `${stimulus.id}: exactly three linked questions required`);
    assert.deepEqual(linked.map((question) => question.difficulty).sort(), ["advanced", "standard", "transfer"], `${stimulus.id}: stimulus difficulty mix`);
  }
  return { lectures, questions, stimuli, stimulusQuestions, skills };
}

export async function buildHistoryUnit(unitId, { repoRoot = REPO_ROOT } = {}) {
  const source = await loadHistoryUnitSource(unitId, { repoRoot });
  const materialized = await materializeHistoryUnit(source);
  const runtimeRoot = path.join(repoRoot, HISTORY_FOLDER, "r4", "runtime");
  const lectureRoot = path.join(runtimeRoot, "lectures");
  const questionRoot = path.join(runtimeRoot, "questions");
  const stimulusRoot = path.join(runtimeRoot, "stimuli");
  await Promise.all([mkdir(lectureRoot, { recursive: true }), mkdir(questionRoot, { recursive: true }), mkdir(stimulusRoot, { recursive: true })]);
  await Promise.all([
    ...materialized.lectures.map((value) => writeFile(path.join(lectureRoot, `${value.id}.json`), `${JSON.stringify(value, null, 2)}\n`, "utf8")),
    ...[...materialized.questions, ...materialized.stimulusQuestions].map((value) => writeFile(path.join(questionRoot, `${value.id}.json`), `${JSON.stringify(value, null, 2)}\n`, "utf8")),
    ...materialized.stimuli.map((value) => writeFile(path.join(stimulusRoot, `${value.id}.json`), `${JSON.stringify(value, null, 2)}\n`, "utf8")),
  ]);
  return {
    unitId,
    lectures: materialized.lectures.length,
    questions: materialized.questions.length,
    stimuli: materialized.stimuli.length,
    stimulusQuestions: materialized.stimulusQuestions.length,
  };
}

async function main() {
  const unitId = process.argv[2];
  assert(unitId, "usage: node tools/cap8-r4/build-history-unit.mjs HIS_R4_UNN");
  const result = await buildHistoryUnit(unitId);
  console.log(`build-history-unit: OK - ${result.unitId}, ${result.lectures} lectures, ${result.questions} skill questions, ${result.stimuli} stimuli, ${result.stimulusQuestions} stimulus questions`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
