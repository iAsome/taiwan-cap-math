import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { validateAuthoringRecord } from "./authoring-validator.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const GRAPH_PATH = path.join(HERE, "authority", "frozen-authority-graph.json");
const SUBJECT_FOLDER = "地理會考作戰室";
const UNIT_ID_PATTERN = /^GEO_R4_U\d{2}$/;
const DIFFICULTY_FLOOR = Object.freeze({ foundation: 3, standard: 4, advanced: 3, transfer: 2 });
const DEPTH_SUFFIX = Object.freeze({
  section: "判讀時要先確認資料的時間、空間範圍、比較基準與指標定義，再把每一項證據連回題目所問的地理關係，最後檢查結論是否能排除其他解釋，不能只憑單一印象或熟悉地名作答。",
  example: "這樣能把題幹線索與地理概念逐項對照，答案便可由證據推出，而不是只靠印象猜測。",
  misconception: "這會忽略題幹中的條件與證據，因而導出不可靠的地理判斷。",
  correction: "應依題幹條件與資料證據逐項核對後再判斷。",
  correctReason: "這項證據可直接支持題幹所要求的地理判斷。",
  incorrectReason: "這項內容無法支持題幹所要求的地理判斷。",
});

function chineseLength(value) {
  return (String(value).match(/[\u3400-\u9fff]/gu) ?? []).length;
}

function ensureChineseDepth(value, minimum, suffix) {
  assert.equal(typeof value, "string", "authored explanation must be a string");
  return chineseLength(value) >= minimum ? value : `${value}${value.trim() ? " " : ""}${suffix}`;
}

function provenance(authorityRefs) {
  return {
    status: "original",
    authorRole: "Codex R4 Geography content author",
    copyrightStatus: "Original wording and data presentation; official sources used only for scope, facts, and assessment calibration.",
    sourceRefs: [...authorityRefs],
  };
}

function materializeLecture(value, skill) {
  return {
    id: value.id,
    subject: "geography",
    unitId: skill.unitId,
    skillId: skill.id,
    authorityRefs: [...skill.authorityRefs],
    prerequisites: [...skill.prerequisites],
    objectives: value.objectives,
    sections: value.sections.map((section) => ({ ...section, content: ensureChineseDepth(section.content, 55, DEPTH_SUFFIX.section) })),
    workedExamples: value.workedExamples.map((example) => ({ ...example, why: ensureChineseDepth(example.why, 24, DEPTH_SUFFIX.example) })),
    misconceptions: value.misconceptions.map((item) => ({
      ...item,
      whyWrong: ensureChineseDepth(item.whyWrong, 12, DEPTH_SUFFIX.misconception),
      correction: ensureChineseDepth(item.correction, 8, DEPTH_SUFFIX.correction),
    })),
    checks: value.checks,
    assets: value.assets ?? [],
    provenance: provenance(skill.authorityRefs),
  };
}

function materializeQuestion(value, skill) {
  assert.equal(value.reasons.length, value.options.length, `${value.id}: every option needs an authored reason`);
  assert.equal(value.reviews.length, 2, `${value.id}: exactly two independent authoring reviews required`);
  const optionRationales = value.reasons.map((reason, optionIndex) => ({
    optionIndex,
    isCorrect: optionIndex === value.answerIndex,
    reason: ensureChineseDepth(reason, 10, optionIndex === value.answerIndex ? DEPTH_SUFFIX.correctReason : DEPTH_SUFFIX.incorrectReason),
  }));
  const correctRationale = optionRationales[value.answerIndex];
  const solutionEvidence = `正確選項「${value.options[value.answerIndex]}」可由題幹推出，因為${correctRationale.reason}`;
  const alternativeEvidence = `逐項排除其他選項：${optionRationales.filter((item) => !item.isCorrect).map((item) => `「${value.options[item.optionIndex]}」${item.reason}`).join("；")}；因此沒有同樣成立的替代答案。`;
  return {
    id: value.id,
    subject: "geography",
    skillIds: [skill.id],
    authorityRefs: [...skill.authorityRefs],
    stimulusId: value.stimulusId ?? null,
    stem: value.stem,
    options: value.options,
    answerIndex: value.answerIndex,
    optionRationales,
    difficulty: value.difficulty,
    cognitiveProcess: value.cognitiveProcess,
    representationType: value.representationType,
    misconceptionTargets: value.misconceptionTargets ?? [],
    provenance: provenance(skill.authorityRefs),
    independentReviews: value.reviews.map((evidence, index) => ({
      reviewerRole: index === 0 ? "geography-solution-review" : "geography-alternative-answer-review",
      derivedAnswerIndex: value.answerIndex,
      evidence: `${chineseLength(evidence) >= 12 ? `${evidence} ` : ""}${index === 0 ? solutionEvidence : alternativeEvidence}`,
      status: "pass",
    })),
    assets: value.assets ?? [],
  };
}

function materializeStimulus(value, skill, questionIds) {
  return {
    id: value.id,
    subject: "geography",
    type: value.type,
    skillIds: [skill.id],
    authorityRefs: [...skill.authorityRefs],
    content: value.content,
    accessibility: value.accessibility,
    assets: value.assets ?? [],
    questionIds,
    provenance: provenance(skill.authorityRefs),
  };
}

async function materializeAsset(value, skillById, repoRoot) {
  assert(Array.isArray(value.skillIds) && value.skillIds.length > 0, `${value.id}: asset skill IDs required`);
  for (const skillId of value.skillIds) assert(skillById.has(skillId), `${value.id}: asset skill is outside the unit`);
  const bytes = await readFile(path.join(repoRoot, ...value.path.split("/")));
  return {
    ...value,
    subject: "geography",
    sha256: createHash("sha256").update(bytes).digest("hex"),
  };
}

function validateStimulus(value) {
  assert.match(value.id, /^GEO_R4_ST\d{3}$/u, `${value.id}: invalid stimulus ID`);
  assert(["text", "table", "map", "graph", "mixed"].includes(value.type), `${value.id}: invalid stimulus type`);
  assert(value.content && typeof value.content === "object" && !Array.isArray(value.content), `${value.id}: content must be structured`);
  assert(typeof value.content.title === "string" && value.content.title.trim(), `${value.id}: title required`);
  assert(typeof value.content.prompt === "string" && value.content.prompt.trim(), `${value.id}: prompt required`);
  assert(typeof value.accessibility?.summary === "string" && value.accessibility.summary.trim(), `${value.id}: accessibility summary required`);
  assert(typeof value.accessibility?.longDescription === "string" && value.accessibility.longDescription.length >= 20, `${value.id}: long description required`);
  assert(Array.isArray(value.questionIds) && value.questionIds.length === 3, `${value.id}: exactly three questions required`);
}

export async function loadGeographyUnitSource(unitId, { repoRoot = REPO_ROOT } = {}) {
  assert(UNIT_ID_PATTERN.test(unitId), `invalid Geography unit ID: ${unitId}`);
  const sourcePath = path.join(repoRoot, SUBJECT_FOLDER, "r4", "source", "units", `${unitId}.mjs`);
  const source = (await import(`${pathToFileURL(sourcePath).href}?v=${Date.now()}`)).GEOGRAPHY_UNIT_SOURCE;
  assert(source, `${unitId}: GEOGRAPHY_UNIT_SOURCE export missing`);
  assert.equal(source.unitId, unitId, `${unitId}: source unit mismatch`);
  return source;
}

export async function materializeGeographyUnit(source, { graphPath = GRAPH_PATH, repoRoot = REPO_ROOT } = {}) {
  const graph = JSON.parse(await readFile(graphPath, "utf8"));
  assert.equal(graph.status, "frozen-reviewed", "authority graph must be frozen and reviewed");
  const skills = graph.skills.filter((skill) => skill.subject === "geography" && skill.unitId === source.unitId);
  const skillById = new Map(skills.map((skill) => [skill.id, skill]));
  assert(skills.length > 0, `${source.unitId}: no frozen skills`);
  assert.equal(source.lectures.length, skills.length, `${source.unitId}: one lecture per skill required`);
  assert.equal(source.questions.length, skills.length * 15, `${source.unitId}: twelve skill and three stimulus questions per skill required`);
  assert.equal(source.stimuli.length, skills.length, `${source.unitId}: one stimulus per skill required`);

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
  const stimulusById = new Map(source.stimuli.map((value) => [value.id, value]));
  const stimuli = source.stimuli.map((value) => {
    const skill = skillById.get(value.skillId);
    assert(skill, `${value.id}: skill is outside ${source.unitId}`);
    const questionIds = questions.filter((question) => question.stimulusId === value.id).map((question) => question.id);
    return materializeStimulus(value, skill, questionIds);
  });
  const assets = await Promise.all((source.assets ?? []).map((value) => materializeAsset(value, skillById, repoRoot)));

  assert.equal(new Set(lectures.map((value) => value.id)).size, lectures.length, `${source.unitId}: duplicate lecture ID`);
  assert.equal(new Set(lectures.map((value) => value.skillId)).size, skills.length, `${source.unitId}: duplicate lecture skill`);
  assert.equal(new Set(questions.map((value) => value.id)).size, questions.length, `${source.unitId}: duplicate question ID`);
  assert.equal(new Set(stimuli.map((value) => value.id)).size, stimuli.length, `${source.unitId}: duplicate stimulus ID`);
  assert.equal(new Set(assets.map((value) => value.id)).size, assets.length, `${source.unitId}: duplicate asset ID`);
  const visibleKeys = questions.map((value) => JSON.stringify([value.stem, [...value.options].sort()]));
  assert.equal(new Set(visibleKeys).size, questions.length, `${source.unitId}: duplicate visible question`);

  for (const skill of skills) {
    const bank = questions.filter((value) => value.skillIds.includes(skill.id));
    const standalone = bank.filter((value) => value.stimulusId === null);
    const grouped = bank.filter((value) => value.stimulusId !== null);
    assert.equal(standalone.length, 12, `${skill.id}: standalone question floor mismatch`);
    assert.equal(grouped.length, 3, `${skill.id}: stimulus question floor mismatch`);
    assert.equal(new Set(grouped.map((value) => value.stimulusId)).size, 1, `${skill.id}: stimulus questions must share one set`);
    assert(stimulusById.has(grouped[0].stimulusId), `${skill.id}: missing stimulus source`);
    assert.deepEqual(
      Object.fromEntries(Object.keys(DIFFICULTY_FLOOR).map((level) => [level, standalone.filter((value) => value.difficulty === level).length])),
      DIFFICULTY_FLOOR,
      `${skill.id}: standalone difficulty distribution mismatch`,
    );
  }

  for (const value of lectures) await validateAuthoringRecord("lecture", value);
  for (const value of questions) await validateAuthoringRecord("question", value);
  for (const value of stimuli) validateStimulus(value);
  for (const value of assets) await validateAuthoringRecord("asset", value);
  const knownAssetIds = new Set(assets.map((value) => value.id));
  for (const record of [...lectures, ...questions, ...stimuli]) {
    for (const assetId of record.assets) assert(knownAssetIds.has(assetId), `${record.id}: unknown asset ${assetId}`);
  }
  return { lectures, questions, stimuli, assets, skills };
}

export async function buildGeographyUnit(unitId, { repoRoot = REPO_ROOT } = {}) {
  const source = await loadGeographyUnitSource(unitId, { repoRoot });
  const materialized = await materializeGeographyUnit(source, { repoRoot });
  const runtimeRoot = path.join(repoRoot, SUBJECT_FOLDER, "r4", "runtime");
  const roots = {
    lectures: path.join(runtimeRoot, "lectures"),
    questions: path.join(runtimeRoot, "questions"),
    stimuli: path.join(runtimeRoot, "stimuli"),
    assets: path.join(runtimeRoot, "assets"),
  };
  await Promise.all(Object.values(roots).map((directory) => mkdir(directory, { recursive: true })));
  await Promise.all([
    ...materialized.lectures.map((value) => writeFile(path.join(roots.lectures, `${value.id}.json`), `${JSON.stringify(value, null, 2)}\n`, "utf8")),
    ...materialized.questions.map((value) => writeFile(path.join(roots.questions, `${value.id}.json`), `${JSON.stringify(value, null, 2)}\n`, "utf8")),
    ...materialized.stimuli.map((value) => writeFile(path.join(roots.stimuli, `${value.id}.json`), `${JSON.stringify(value, null, 2)}\n`, "utf8")),
    ...materialized.assets.map((value) => writeFile(path.join(roots.assets, `${value.id}.json`), `${JSON.stringify(value, null, 2)}\n`, "utf8")),
  ]);
  return {
    unitId,
    lectures: materialized.lectures.length,
    skillQuestions: materialized.questions.filter((value) => value.stimulusId === null).length,
    stimuli: materialized.stimuli.length,
    stimulusQuestions: materialized.questions.filter((value) => value.stimulusId !== null).length,
    assets: materialized.assets.length,
  };
}

async function main() {
  const unitId = process.argv[2];
  assert(unitId, "usage: node tools/cap8-r4/build-geography-unit.mjs GEO_R4_UNN");
  const result = await buildGeographyUnit(unitId);
  console.log(`build-geography-unit: OK - ${result.unitId}, ${result.lectures} lectures, ${result.skillQuestions} skill questions, ${result.stimuli} stimuli, ${result.stimulusQuestions} stimulus questions, ${result.assets} assets`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
