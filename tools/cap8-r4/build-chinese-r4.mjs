import assert from "node:assert/strict";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { validateAuthoringRecord } from "./authoring-validator.mjs";
import { sha256 } from "./r4-core.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const GRAPH_PATH = path.join(HERE, "authority", "frozen-authority-graph.json");
const SUBJECT_FOLDER = "國文會考作戰室";
const UNIT_PATTERN = /^CHI_R4_U\d{2}$/u;
const QUESTION_PATTERN = /^CHI_R4_Q_\d{3}_\d{2}$/u;
const STIMULUS_QUESTION_PATTERN = /^CHI_R4_SQ_\d{3}_\d$/u;
const SOURCE_SCHEMA = "cap8-r4-chinese-static-unit-source-v1";

const ordinal = (a, b) => String(a).localeCompare(String(b), "en");
const json = (value) => `${JSON.stringify(value, null, 2)}\n`;

function exactKeys(value, expected, label) {
  assert.deepEqual(Object.keys(value).sort(ordinal), [...expected].sort(ordinal), `${label}: unexpected fields`);
}

function provenance(authorityRefs, status = "original") {
  return {
    status,
    authorRole: "Codex R4 Chinese content author",
    copyrightStatus: status === "public-domain"
      ? "Public-domain source text with original questions and explanations."
      : "Original wording; official sources used only for scope and assessment calibration.",
    sourceRefs: [...authorityRefs],
  };
}

function visibleKey(question) {
  return JSON.stringify([question.stem.trim(), [...question.options].map((value) => value.trim()).sort(ordinal)]);
}

function essenceKey(question) {
  const normalize = (value) => String(value)
    .normalize("NFKC")
    .replace(/[「」『』“”‘’\s，。！？；：、,.!?;:]/gu, "")
    .replace(/[0-9０-９一二三四五六七八九十百千]+/gu, "#")
    .toLowerCase();
  return JSON.stringify([normalize(question.stem), question.options.map(normalize).sort(ordinal)]);
}

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

async function sourceFiles(directory, pattern) {
  const names = (await readdir(directory)).filter((name) => pattern.test(name)).sort(ordinal);
  return Promise.all(names.map(async (name) => ({ name, value: await readJson(path.join(directory, name)) })));
}

function validateStimulus(value, authorityIds) {
  exactKeys(value, ["id", "subject", "type", "content", "authorityRefs", "provenance", "accessibility", "assets"], value.id);
  assert.match(value.id, /^CHI_R4_STIM_\d{3}$/u);
  assert.equal(value.subject, "chinese");
  assert(["narrative", "expository", "argumentative", "practical", "poetry", "classical", "mixed-media"].includes(value.type), `${value.id}: unsupported type`);
  assert.equal(typeof value.content, "string");
  assert(value.content.trim().length >= 80, `${value.id}: stimulus too short`);
  assert(value.authorityRefs.length > 0 && value.authorityRefs.every((id) => authorityIds.has(id)), `${value.id}: invalid authority refs`);
  assert.equal(value.accessibility.language, "zh-Hant-TW");
  assert.equal(value.accessibility.textAlternativeComplete, true);
  assert(Array.isArray(value.assets));
}

function validateWritingTask(value, authorityIds) {
  exactKeys(value, ["id", "subject", "title", "prompt", "mode", "taskRequirements", "scoringFocus", "authorityRefs", "provenance", "accessibility"], value.id);
  assert.match(value.id, /^CHI_R4_WRITE_\d{3}$/u);
  assert.equal(value.subject, "chinese");
  assert(["narrative-reflection", "explanation-analysis", "comparison", "argument-with-limits", "material-integration"].includes(value.mode), `${value.id}: unsupported writing mode`);
  assert(value.title.trim() && value.prompt.trim().length >= 80, `${value.id}: incomplete writing prompt`);
  assert(value.taskRequirements.length >= 3, `${value.id}: task requirements incomplete`);
  assert(value.scoringFocus.length === 4, `${value.id}: four official holistic dimensions required`);
  assert(value.authorityRefs.length > 0 && value.authorityRefs.every((id) => authorityIds.has(id)), `${value.id}: invalid authority refs`);
  assert.equal(value.accessibility.language, "zh-Hant-TW");
}

function validateAsset(value, authorityIds) {
  exactKeys(value, ["id", "subject", "type", "file", "creator", "source", "license", "transformation", "skillIds", "caption", "alt", "longDescription", "dataTable", "print", "provenance"], value.id);
  assert.match(value.id, /^CHI_R4_ASSET_\d{3}$/u);
  assert.equal(value.subject, "chinese");
  assert(["bar-chart", "line-chart", "pie-chart", "calligraphy-observation"].includes(value.type), `${value.id}: unsupported asset type`);
  assert.equal(value.file, `assets/${value.id}.svg`);
  assert.equal(value.creator, "Codex R4 Chinese content author");
  assert.equal(value.license, "CC-BY-4.0");
  assert(value.caption.length >= 12 && value.alt.length >= 40 && value.longDescription.length >= 40, `${value.id}: incomplete text alternatives`);
  assert.deepEqual(Object.keys(value.dataTable).sort(ordinal), ["columns", "rows"]);
  assert.equal(value.dataTable.columns.length, 2);
  assert.equal(value.dataTable.rows.length, 4);
  assert(value.dataTable.rows.every((row) => row.length === 2 && typeof row[0] === "string" && (typeof row[1] === "string" || Number.isFinite(row[1]))), `${value.id}: invalid data table`);
  assert.deepEqual(Object.keys(value.print).sort(ordinal), ["blackAndWhiteReadable", "colorIndependent", "directLabels", "note"].sort(ordinal));
  assert.equal(value.print.blackAndWhiteReadable, true);
  assert.equal(value.print.colorIndependent, true);
  assert.equal(value.print.directLabels, true);
  const validSkillLink = value.type === "calligraphy-observation" ? /^CHI_R4_S(?:255|256|257|258|259|260)$/u : /^CHI_R4_S(?:218|219|220|221|222|223|224)$/u;
  assert(value.skillIds.length === (value.type === "calligraphy-observation" ? 6 : 7) && value.skillIds.every((id) => validSkillLink.test(id)), `${value.id}: invalid skill links`);
  assert(value.provenance.sourceRefs.every((id) => authorityIds.has(id)), `${value.id}: invalid authority ref`);
}

async function validateUnitSource(source, skills, authorityIds, assetIds) {
  exactKeys(source, ["schemaVersion", "unitId", "lectures", "questions"], source.unitId);
  assert.equal(source.schemaVersion, SOURCE_SCHEMA);
  assert.match(source.unitId, UNIT_PATTERN);
  assert.equal(source.lectures.length, skills.length, `${source.unitId}: one lecture per skill required`);
  assert.equal(source.questions.length, skills.length * 12, `${source.unitId}: twelve questions per skill required`);
  const skillIds = new Set(skills.map((skill) => skill.id));
  for (const lecture of source.lectures) {
    assert(skillIds.has(lecture.skillId), `${lecture.id}: lecture belongs to another unit`);
    assert.equal(lecture.unitId, source.unitId);
    assert(lecture.authorityRefs.every((id) => authorityIds.has(id)), `${lecture.id}: invalid authority ref`);
    assert(lecture.assets.every((id) => assetIds.has(id)), `${lecture.id}: unknown asset`);
    await validateAuthoringRecord("lecture", lecture);
  }
  for (const question of source.questions) {
    assert.match(question.id, QUESTION_PATTERN);
    assert(question.skillIds.length === 1 && skillIds.has(question.skillIds[0]), `${question.id}: question belongs to another unit`);
    assert.equal(question.stimulusId, null, `${question.id}: skill question cannot use a shared stimulus`);
    assert(question.authorityRefs.every((id) => authorityIds.has(id)), `${question.id}: invalid authority ref`);
    assert(question.assets.every((id) => assetIds.has(id)), `${question.id}: unknown asset`);
    await validateAuthoringRecord("question", question);
  }
  for (const skill of skills) {
    const questions = source.questions.filter((question) => question.skillIds[0] === skill.id);
    assert.equal(questions.length, 12, `${skill.id}: question floor mismatch`);
    const distribution = Object.fromEntries(["foundation", "standard", "advanced", "transfer"].map((level) => [
      level,
      questions.filter((question) => question.difficulty === level).length,
    ]));
    assert.deepEqual(distribution, { foundation: 3, standard: 4, advanced: 3, transfer: 2 }, `${skill.id}: difficulty distribution mismatch`);
    assert.deepEqual(
      questions.reduce((counts, question) => (counts[question.answerIndex]++, counts), [0, 0, 0, 0]),
      [3, 3, 3, 3],
      `${skill.id}: answer positions must be balanced`,
    );
  }
}

async function replaceDirectory(directory, files) {
  await rm(directory, { recursive: true, force: true });
  await mkdir(directory, { recursive: true });
  for (const [name, value] of files) await writeFile(path.join(directory, name), json(value), "utf8");
}

export async function loadChineseR4Source({ repoRoot = REPO_ROOT } = {}) {
  const root = path.join(repoRoot, SUBJECT_FOLDER, "r4", "source");
  const units = await sourceFiles(path.join(root, "units"), /^CHI_R4_U\d{2}\.json$/u);
  const stimuli = await readJson(path.join(root, "stimuli.json"));
  const stimulusQuestions = await readJson(path.join(root, "stimulus-questions.json"));
  const writingTasks = await readJson(path.join(root, "writing-tasks.json"));
  const assets = await readJson(path.join(root, "assets.json"));
  const catalog = await readJson(path.join(root, "catalog.json"));
  return { units, stimuli, stimulusQuestions, writingTasks, assets, catalog };
}

export async function validateChineseR4Source(source, { repoRoot = REPO_ROOT } = {}) {
  const graph = await readJson(path.join(repoRoot, "tools", "cap8-r4", "authority", "frozen-authority-graph.json"));
  assert.equal(graph.status, "frozen-reviewed");
  const skills = graph.skills.filter((skill) => skill.subject === "chinese");
  const authorityIds = new Set(graph.nodes.filter((node) => node.reviewedSubjects.includes("chinese")).map((node) => node.id));
  assert.equal(source.units.length, 48, "Chinese requires 48 static unit sources");
  assert.equal(source.stimuli.length, 320, "Chinese requires 320 shared stimuli");
  assert.equal(source.stimulusQuestions.length, 1280, "Chinese requires four questions for each stimulus");
  assert.equal(source.writingTasks.length, 120, "Chinese requires 120 writing tasks");
  assert.equal(source.assets.length, 24, "Chinese mixed-media practice requires twelve data and twelve calligraphy assets");
  assert.equal(source.catalog.schemaVersion, "cap8-r4-chinese-runtime-catalog-v1");
  assert.equal(source.catalog.units.length, 48);
  assert.equal(source.catalog.skills.length, 320);
  assert.deepEqual(source.catalog.skills.map(({ id }) => id), skills.map(({ id }) => id), "runtime catalog skill order drift");
  assert(source.catalog.skills.every((skill) => skills.some((record) => record.id === skill.id && record.unitId === skill.unitId && record.title === skill.title)), "runtime catalog differs from frozen skill graph");

  for (const asset of source.assets) validateAsset(asset, authorityIds);
  const assetIds = new Set(source.assets.map((asset) => asset.id));
  assert.equal(assetIds.size, source.assets.length, "duplicate asset ID");
  for (const asset of source.assets) {
    const svg = await readFile(path.join(repoRoot, SUBJECT_FOLDER, "r4", "source", asset.file), "utf8");
    assert.match(svg, /<svg\b[^>]*role="img"[^>]*aria-labelledby="title desc"/u, `${asset.id}: SVG lacks image semantics`);
    assert.match(svg, /<title id="title">/u, `${asset.id}: SVG lacks title`);
    assert.match(svg, /<desc id="desc">/u, `${asset.id}: SVG lacks long description`);
    assert(!/<(?:script|foreignObject)\b|\b(?:href|xlink:href)="https?:/iu.test(svg), `${asset.id}: unsafe or external SVG content`);
  }

  const skillsByUnit = Map.groupBy(skills, (skill) => skill.unitId);
  for (const { name, value } of source.units) {
    assert.equal(name, `${value.unitId}.json`);
    await validateUnitSource(value, skillsByUnit.get(value.unitId) ?? [], authorityIds, assetIds);
  }

  for (const stimulus of source.stimuli) {
    validateStimulus(stimulus, authorityIds);
    assert(stimulus.assets.every((id) => assetIds.has(id)), `${stimulus.id}: unknown asset`);
  }
  const stimulusById = new Map(source.stimuli.map((value) => [value.id, value]));
  for (const question of source.stimulusQuestions) {
    assert.match(question.id, STIMULUS_QUESTION_PATTERN);
    assert(stimulusById.has(question.stimulusId), `${question.id}: unknown stimulus`);
    await validateAuthoringRecord("question", question);
  }
  for (const stimulus of source.stimuli) {
    assert.equal(source.stimulusQuestions.filter((question) => question.stimulusId === stimulus.id).length, 4, `${stimulus.id}: four questions required`);
  }
  for (const task of source.writingTasks) validateWritingTask(task, authorityIds);

  const lectures = source.units.flatMap(({ value }) => value.lectures);
  const skillQuestions = source.units.flatMap(({ value }) => value.questions);
  const allQuestions = [...skillQuestions, ...source.stimulusQuestions];
  for (const [label, values] of [
    ["lecture ID", lectures.map((value) => value.id)],
    ["question ID", allQuestions.map((value) => value.id)],
    ["stimulus ID", source.stimuli.map((value) => value.id)],
    ["writing-task ID", source.writingTasks.map((value) => value.id)],
    ["asset ID", source.assets.map((value) => value.id)],
    ["skill-question stem", skillQuestions.map((value) => value.stem.trim())],
    ["visible question", allQuestions.map(visibleKey)],
    ["question essence", allQuestions.map(essenceKey)],
  ]) assert.equal(new Set(values).size, values.length, `duplicate ${label}`);

  return {
    authorityNodes: authorityIds.size,
    units: source.units.length,
    skills: skills.length,
    lectures: lectures.length,
    skillQuestions: skillQuestions.length,
    stimuli: source.stimuli.length,
    stimulusQuestions: source.stimulusQuestions.length,
    writingTasks: source.writingTasks.length,
    assets: source.assets.length,
  };
}

export async function buildChineseR4({ repoRoot = REPO_ROOT } = {}) {
  const source = await loadChineseR4Source({ repoRoot });
  const counts = await validateChineseR4Source(source, { repoRoot });
  const graph = await readJson(path.join(repoRoot, "tools", "cap8-r4", "authority", "frozen-authority-graph.json"));
  const subjectRoot = path.join(repoRoot, SUBJECT_FOLDER, "r4");
  const runtimeRoot = path.join(subjectRoot, "runtime");
  await replaceDirectory(path.join(runtimeRoot, "units"), source.units.map(({ name, value }) => [name, value]));
  await replaceDirectory(path.join(runtimeRoot, "skills"), graph.skills.filter(({ subject }) => subject === "chinese").map((skill) => [`${skill.id}.json`, skill]));
  await replaceDirectory(path.join(runtimeRoot, "authority"), graph.nodes.filter(({ reviewedSubjects }) => reviewedSubjects.includes("chinese")).map((node) => [`${node.id}.json`, {
    id: node.id,
    subject: "chinese",
    kind: node.kind,
    code: node.code,
    text: node.text,
    sourceIds: [node.sourceId],
    applicable: true,
  }]));
  await rm(path.join(runtimeRoot, "assets"), { recursive: true, force: true });
  await mkdir(path.join(runtimeRoot, "assets"), { recursive: true });
  await Promise.all(source.assets.map(async (asset) => writeFile(path.join(runtimeRoot, asset.file), await readFile(path.join(subjectRoot, "source", asset.file)))));
  await Promise.all([
    writeFile(path.join(runtimeRoot, "stimuli.json"), json(source.stimuli), "utf8"),
    writeFile(path.join(runtimeRoot, "stimulus-questions.json"), json(source.stimulusQuestions), "utf8"),
    writeFile(path.join(runtimeRoot, "writing-tasks.json"), json(source.writingTasks), "utf8"),
    writeFile(path.join(runtimeRoot, "assets.json"), json(source.assets), "utf8"),
    writeFile(path.join(runtimeRoot, "catalog.json"), json(source.catalog), "utf8"),
  ]);
  const sourceHashes = Object.fromEntries(await Promise.all([
    ...source.units.map(async ({ name }) => [name, sha256(await readFile(path.join(subjectRoot, "source", "units", name)))]),
    ...["stimuli.json", "stimulus-questions.json", "writing-tasks.json", "assets.json", "catalog.json"].map(async (name) => [name, sha256(await readFile(path.join(subjectRoot, "source", name)))]),
    ...source.assets.map(async ({ file }) => [file, sha256(await readFile(path.join(subjectRoot, "source", file)))]),
  ]));
  const manifest = {
    schemaVersion: "cap8-r4-chinese-static-content-manifest-v1",
    subject: "chinese",
    contentVersion: "4.0.0-chinese-r4",
    sourceMode: "explicit-static-records",
    runtimeGeneration: false,
    counts,
    sourceHashes,
  };
  await writeFile(path.join(runtimeRoot, "manifest.json"), json(manifest), "utf8");
  return manifest;
}

async function main() {
  const manifest = await buildChineseR4();
  console.log(`build-chinese-r4: OK - ${manifest.counts.lectures} lectures, ${manifest.counts.skillQuestions + manifest.counts.stimulusQuestions} questions, ${manifest.counts.stimuli} stimuli, ${manifest.counts.writingTasks} writing tasks`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
