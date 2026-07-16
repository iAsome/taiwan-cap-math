import assert from "node:assert/strict";
import { mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { validateAuthoringRecord } from "../authoring-validator.mjs";
import { writeSubjectFoundation } from "../subject-authoring-foundation.mjs";
import {
  BIOLOGY_COUNTS,
  BIOLOGY_DIFFICULTY_DISTRIBUTION,
  canonicalJson,
  provenance,
  sha256,
} from "./biology-core.mjs";
import { BIOLOGY_ASSET_SOURCES } from "./biology-assets.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..", "..");
const SUBJECT_FOLDER = "生物會考作戰室";
const GRAPH_RELATIVE = "tools/cap8-r4/authority/frozen-authority-graph.json";
const SOURCE_UNIT_PATTERN = /^BIO_R4_U\d{2}\.mjs$/;
const EXPECTED_UNITS = Array.from({ length: 30 }, (_, index) => `BIO_R4_U${String(index + 1).padStart(2, "0")}`);

function compareId(a, b) {
  return a.id.localeCompare(b.id, "en");
}

function repositoryPath(repoRoot, ...segments) {
  const result = path.resolve(repoRoot, ...segments);
  assert(result.startsWith(`${path.resolve(repoRoot)}${path.sep}`), `path escaped repository: ${result}`);
  return result;
}

function questionRecord(value, skill, stimulusId = null, inheritedCalibrationRefs = []) {
  assert.equal(value.options.length, 4, `${value.id}: four options required`);
  assert.equal(value.reasons.length, 4, `${value.id}: every option needs an authored rationale`);
  assert.equal(value.reviews.length, 2, `${value.id}: two independent solution reviews required`);
  assert(Array.isArray(value.cognitiveProcess) && value.cognitiveProcess.length > 0, `${value.id}: cognitiveProcess must be a nonempty array`);
  assert(value.cognitiveProcess.every((item) => typeof item === "string" && [...item].length >= 2), `${value.id}: cognitiveProcess entries must be complete terms`);
  assert(typeof value.representationType === "string" && value.representationType.trim(), `${value.id}: representationType is required`);
  assert(Array.isArray(value.misconceptionTargets), `${value.id}: misconceptionTargets must be an array`);
  return {
    id: value.id,
    subject: "biology",
    skillIds: [skill.id],
    authorityRefs: [...skill.authorityRefs],
    stimulusId,
    stem: value.stem,
    options: [...value.options],
    answerIndex: value.answerIndex,
    optionRationales: value.reasons.map((reason, optionIndex) => ({
      optionIndex,
      isCorrect: optionIndex === value.answerIndex,
      reason,
    })),
    difficulty: value.difficulty,
    cognitiveProcess: [...value.cognitiveProcess],
    representationType: value.representationType,
    misconceptionTargets: [...value.misconceptionTargets],
    provenance: provenance([...skill.authorityRefs, ...inheritedCalibrationRefs, ...(value.calibrationRefs ?? [])]),
    independentReviews: value.reviews.map((evidence, index) => ({
      reviewerRole: index === 0 ? "biology-independent-solution-review" : "biology-alternative-answer-review",
      derivedAnswerIndex: value.answerIndex,
      evidence,
      status: "pass",
    })),
    assets: [...(value.assets ?? [])],
  };
}

function lectureRecord(value, skill) {
  return {
    id: value.id,
    subject: "biology",
    unitId: skill.unitId,
    skillId: skill.id,
    authorityRefs: [...skill.authorityRefs],
    prerequisites: [...skill.prerequisites],
    objectives: [...value.objectives],
    sections: value.sections.map((section) => ({ ...section })),
    workedExamples: value.workedExamples.map((example) => ({ ...example, steps: [...example.steps] })),
    misconceptions: value.misconceptions.map((item) => ({ ...item })),
    checks: value.checks.map((item) => ({ ...item })),
    assets: [...(value.assets ?? [])],
    provenance: provenance(skill.authorityRefs),
  };
}

function stimulusRecord(value, skill, calibrationRefs) {
  assert.equal(value.skillId, skill.id, `${value.id}: stimulus skill mismatch`);
  assert(value.content && typeof value.content === "object", `${value.id}: structured content required`);
  assert.match(value.accessibility?.summary ?? "", /\S/u, `${value.id}: accessibility summary required`);
  return {
    id: value.id,
    subject: "biology",
    skillId: skill.id,
    type: value.type,
    content: structuredClone(value.content),
    authorityRefs: [...skill.authorityRefs],
    calibrationRefs: [...calibrationRefs],
    provenance: provenance([...skill.authorityRefs, ...calibrationRefs]),
    accessibility: structuredClone(value.accessibility),
    assets: [...(value.assets ?? [])],
  };
}

async function loadUnitSources(sourceRoot) {
  const files = (await readdir(sourceRoot, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && SOURCE_UNIT_PATTERN.test(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, "en"));
  assert.deepEqual(files.map((file) => file.slice(0, -4)), EXPECTED_UNITS, "biology unit source set must be BIO_R4_U01-U30");
  const sources = [];
  for (const file of files) {
    const module = await import(`${pathToFileURL(path.join(sourceRoot, file)).href}?build=${Date.now()}-${sources.length}`);
    assert(module.BIOLOGY_UNIT_SOURCE, `${file}: BIOLOGY_UNIT_SOURCE export missing`);
    sources.push(module.BIOLOGY_UNIT_SOURCE);
  }
  return sources;
}

function validateStimulusSource(source, skillById) {
  const stimulusIds = new Set();
  const questionIds = new Set();
  for (const stimulus of source.stimuli) {
    assert(!stimulusIds.has(stimulus.id), `${stimulus.id}: duplicate stimulus ID`);
    stimulusIds.add(stimulus.id);
    assert(skillById.has(stimulus.skillId), `${stimulus.id}: unknown skill`);
    assert.equal(stimulus.questions.length, 3, `${stimulus.id}: exactly three questions required`);
    assert.equal(new Set(stimulus.questions.map((question) => question.id)).size, 3, `${stimulus.id}: duplicate question ID`);
    for (const question of stimulus.questions) {
      assert(!questionIds.has(question.id), `${question.id}: duplicate stimulus-question ID`);
      questionIds.add(question.id);
    }
  }
}

export async function materializeBiology(sources, graph, calibrationMap) {
  assert.equal(graph.status, "frozen-reviewed", "authority graph must be frozen and reviewed");
  const skills = graph.skills.filter((skill) => skill.subject === "biology").sort(compareId);
  const skillById = new Map(skills.map((skill) => [skill.id, skill]));
  assert.equal(skills.length, BIOLOGY_COUNTS.skills);
  assert.deepEqual(sources.map((source) => source.unitId), EXPECTED_UNITS);
  const lectures = [];
  const skillQuestions = [];
  const stimuli = [];
  const stimulusQuestions = [];
  const sourceAssets = [];
  for (const source of sources) {
    const unitSkills = skills.filter((skill) => skill.unitId === source.unitId);
    assert.equal(source.lectures.length, unitSkills.length, `${source.unitId}: one lecture per skill required`);
    assert.equal(source.questions.length, unitSkills.length * 12, `${source.unitId}: twelve skill questions per skill required`);
    assert.equal(source.stimuli.length, unitSkills.length, `${source.unitId}: one stimulus per skill required`);
    assert.equal(source.assets?.length ?? 0, new Set((source.assets ?? []).map((asset) => asset.id)).size, `${source.unitId}: duplicate asset ID`);
    validateStimulusSource(source, skillById);
    for (const value of source.lectures) {
      const skill = skillById.get(value.skillId);
      assert(skill && skill.unitId === source.unitId, `${value.id}: lecture skill outside unit`);
      lectures.push(lectureRecord(value, skill));
    }
    for (const value of source.questions) {
      const skill = skillById.get(value.skillId);
      assert(skill && skill.unitId === source.unitId, `${value.id}: question skill outside unit`);
      const calibrationRefs = calibrationMap[value.skillId];
      assert(Array.isArray(calibrationRefs), `${value.skillId}: official calibration mapping must be an array`);
      skillQuestions.push(questionRecord(value, skill, null, calibrationRefs));
    }
    for (const value of source.stimuli) {
      const skill = skillById.get(value.skillId);
      const calibrationRefs = calibrationMap[value.skillId];
      assert(Object.hasOwn(calibrationMap, value.skillId), `${value.skillId}: official calibration mapping key missing`);
      assert(Array.isArray(calibrationRefs), `${value.skillId}: official calibration mapping must be an array`);
      stimuli.push(stimulusRecord(value, skill, calibrationRefs));
      for (const question of value.questions) stimulusQuestions.push(questionRecord(question, skill, value.id, calibrationRefs));
    }
    sourceAssets.push(...(source.assets ?? []).map((asset) => structuredClone(asset)));
  }
  assert.equal(lectures.length, BIOLOGY_COUNTS.lectures);
  assert.equal(skillQuestions.length, BIOLOGY_COUNTS.skillQuestions);
  assert.equal(stimuli.length, BIOLOGY_COUNTS.stimuli);
  assert.equal(stimulusQuestions.length, BIOLOGY_COUNTS.stimulusQuestions);
  for (const skill of skills) {
    const bank = skillQuestions.filter((question) => question.skillIds[0] === skill.id);
    assert.equal(bank.length, 12, `${skill.id}: skill-question floor mismatch`);
    const actual = Object.fromEntries(Object.keys(BIOLOGY_DIFFICULTY_DISTRIBUTION).map((level) => [level, bank.filter((question) => question.difficulty === level).length]));
    assert.deepEqual(actual, BIOLOGY_DIFFICULTY_DISTRIBUTION, `${skill.id}: difficulty distribution mismatch`);
  }
  const allRecords = [...lectures, ...skillQuestions, ...stimuli, ...stimulusQuestions];
  assert.equal(new Set(allRecords.map((record) => record.id)).size, allRecords.length, "duplicate biology artifact ID");
  const visibleKeys = [...skillQuestions, ...stimulusQuestions].map((question) => canonicalJson([question.stem, [...question.options].sort()]));
  assert.equal(new Set(visibleKeys).size, visibleKeys.length, "duplicate visible biology question");
  for (const value of lectures) await validateAuthoringRecord("lecture", value);
  for (const value of [...skillQuestions, ...stimulusQuestions]) await validateAuthoringRecord("question", value);
  return { skills, lectures, skillQuestions, stimuli, stimulusQuestions, sourceAssets };
}

async function replaceJsonDirectory(directory, records) {
  await rm(directory, { recursive: true, force: true });
  await mkdir(directory, { recursive: true });
  await Promise.all(records.map((record) => writeFile(path.join(directory, `${record.id}.json`), `${JSON.stringify(record, null, 2)}\n`, "utf8")));
}

async function buildAssets(repoRoot) {
  const records = [];
  for (const source of BIOLOGY_ASSET_SOURCES) {
    const absolutePath = repositoryPath(repoRoot, source.asset.path);
    await mkdir(path.dirname(absolutePath), { recursive: true });
    await writeFile(absolutePath, `${source.svg}\n`, "utf8");
    const record = { ...structuredClone(source.asset), sha256: sha256(await readFile(absolutePath)) };
    await validateAuthoringRecord("asset", record);
    records.push(record);
  }
  return records.sort(compareId);
}

async function descriptor(repoRoot, id, type, absolutePath) {
  const bytes = await readFile(absolutePath);
  return {
    id,
    type,
    path: path.relative(repoRoot, absolutePath).replaceAll("\\", "/"),
    sha256: sha256(bytes),
  };
}

async function filesIn(directory, extension) {
  if (!(await stat(directory).catch(() => null))?.isDirectory()) return [];
  return (await readdir(directory, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && entry.name.endsWith(extension))
    .map((entry) => path.join(directory, entry.name))
    .sort((a, b) => a.localeCompare(b, "en"));
}

export async function buildBiology({ repoRoot = REPO_ROOT } = {}) {
  await writeSubjectFoundation("biology", { repoRoot });
  const graphPath = repositoryPath(repoRoot, GRAPH_RELATIVE);
  const graphBytes = await readFile(graphPath);
  const graph = JSON.parse(graphBytes);
  const calibrationMap = JSON.parse(await readFile(path.join(HERE, "official-calibration-map.json"), "utf8"));
  const subjectRoot = repositoryPath(repoRoot, SUBJECT_FOLDER);
  const assets = await buildAssets(repoRoot);
  const sourceRoot = path.join(subjectRoot, "r4", "source", "units");
  const sources = await loadUnitSources(sourceRoot);
  const materialized = await materializeBiology(sources, graph, calibrationMap);
  assert.equal(materialized.sourceAssets.length, 0, "unit sources must reference the dedicated reviewed asset bank instead of defining assets inline");
  for (const lecture of materialized.lectures) {
    lecture.assets = assets.filter((asset) => asset.skillIds.includes(lecture.skillId)).map((asset) => asset.id);
  }
  const runtimeRoot = path.join(subjectRoot, "r4", "runtime");
  const directories = {
    lectures: path.join(runtimeRoot, "lectures"),
    questions: path.join(runtimeRoot, "questions"),
    stimuli: path.join(runtimeRoot, "stimuli"),
    assets: path.join(runtimeRoot, "assets"),
  };
  await replaceJsonDirectory(directories.lectures, materialized.lectures);
  await replaceJsonDirectory(directories.questions, [...materialized.skillQuestions, ...materialized.stimulusQuestions]);
  await replaceJsonDirectory(directories.stimuli, materialized.stimuli);
  await replaceJsonDirectory(directories.assets, assets);

  const units = sources.map((source) => {
    const skills = materialized.skills.filter((skill) => skill.unitId === source.unitId);
    return {
      unitId: source.unitId,
      title: source.title,
      skillIds: skills.map((skill) => skill.id),
      lectureIds: materialized.lectures.filter((lecture) => skills.some((skill) => lecture.skillId === skill.id)).map((lecture) => lecture.id),
      skillQuestionIds: materialized.skillQuestions.filter((question) => skills.some((skill) => question.skillIds[0] === skill.id)).map((question) => question.id),
      stimulusIds: materialized.stimuli.filter((stimulus) => skills.some((skill) => stimulus.skillId === skill.id)).map((stimulus) => stimulus.id),
    };
  });
  const catalog = {
    schemaVersion: "cap8-r4-biology-catalog-v1",
    subject: "biology",
    contentVersion: "4.0.0",
    counts: { ...BIOLOGY_COUNTS, assets: assets.length },
    units,
    skills: materialized.skills.map((skill) => {
      const stimulus = materialized.stimuli.find((value) => value.skillId === skill.id);
      return {
        id: skill.id,
        unitId: skill.unitId,
        title: skill.title,
        prerequisites: skill.prerequisites,
        lectureId: materialized.lectures.find((lecture) => lecture.skillId === skill.id).id,
        questionIds: materialized.skillQuestions.filter((question) => question.skillIds[0] === skill.id).map((question) => question.id),
        stimulusId: stimulus.id,
        stimulusQuestionIds: materialized.stimulusQuestions.filter((question) => question.stimulusId === stimulus.id).map((question) => question.id),
      };
    }),
  };
  await mkdir(runtimeRoot, { recursive: true });
  const catalogPath = path.join(runtimeRoot, "catalog.json");
  await writeFile(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`, "utf8");

  const artifacts = [];
  const authorityFiles = await filesIn(path.join(runtimeRoot, "authority"), ".json");
  const skillFiles = await filesIn(path.join(runtimeRoot, "skills"), ".json");
  for (const file of authorityFiles) artifacts.push(await descriptor(repoRoot, path.basename(file, ".json"), "authority", file));
  for (const file of skillFiles) artifacts.push(await descriptor(repoRoot, path.basename(file, ".json"), "skill", file));
  for (const file of await filesIn(directories.lectures, ".json")) artifacts.push(await descriptor(repoRoot, path.basename(file, ".json"), "lecture", file));
  for (const file of await filesIn(directories.questions, ".json")) artifacts.push(await descriptor(repoRoot, path.basename(file, ".json"), "question", file));
  for (const file of await filesIn(directories.stimuli, ".json")) artifacts.push(await descriptor(repoRoot, path.basename(file, ".json"), "stimulus", file));
  for (const asset of assets) {
    const metadataPath = path.join(directories.assets, `${asset.id}.json`);
    artifacts.push(await descriptor(repoRoot, asset.id, "asset", metadataPath));
    artifacts.push(await descriptor(repoRoot, `${asset.id}_SVG`, "ui", repositoryPath(repoRoot, asset.path)));
  }
  artifacts.push(await descriptor(repoRoot, "BIO_R4_UI_CATALOG", "ui", catalogPath));
  for (const [id, relative] of [
    ["BIO_R4_UI_INDEX", `${SUBJECT_FOLDER}/index.html`],
    ["BIO_R4_UI_ICON", `${SUBJECT_FOLDER}/icon.svg`],
    ["BIO_R4_UI_APP", `${SUBJECT_FOLDER}/r4/ui/app.js`],
    ["BIO_R4_UI_STYLE", `${SUBJECT_FOLDER}/r4/ui/styles.css`],
    ["BIO_R4_UI_SW", `${SUBJECT_FOLDER}/sw.js`],
  ]) {
    const file = repositoryPath(repoRoot, relative);
    if ((await stat(file).catch(() => null))?.isFile()) artifacts.push(await descriptor(repoRoot, id, "ui", file));
  }
  artifacts.sort((a, b) => a.id.localeCompare(b.id, "en"));
  const counts = { ...BIOLOGY_COUNTS, assets: assets.length };
  const manifestBase = {
    schemaVersion: "cap8-content-manifest-v4",
    subjectId: "biology",
    contentVersion: "4.0.0",
    authorityGraphSha256: sha256(graphBytes),
    artifacts,
    counts,
  };
  const manifest = { ...manifestBase, buildSha256: sha256(canonicalJson(manifestBase)) };
  await writeFile(path.join(subjectRoot, "content-manifest-v4.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  return { counts, artifacts: artifacts.length, buildSha256: manifest.buildSha256 };
}

async function main() {
  const result = await buildBiology();
  console.log(`build-biology: OK - ${result.counts.skills} skills, ${result.counts.lectures} lectures, ${result.counts.skillQuestions + result.counts.stimulusQuestions} questions, ${result.counts.stimuli} stimuli`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
