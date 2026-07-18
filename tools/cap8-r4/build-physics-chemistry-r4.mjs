import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { validateAuthoringRecord } from "./authoring-validator.mjs";
import { canonicalJson, sha256 } from "./r4-core.mjs";
import { PHYSICS_CHEMISTRY_ASSET_SOURCES } from "../../理化會考作戰室/r4/source/physics-chemistry-assets.mjs";
import { PHYSICS_CHEMISTRY_AUTHORED_UNITS } from "../../理化會考作戰室/r4/source/authored/physics-chemistry-u01-u10.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const GRAPH_PATH = path.join(HERE, "authority", "frozen-authority-graph.json");
const SUBJECT_ROOT = path.join(REPO_ROOT, "理化會考作戰室", "r4");
const RUNTIME_ROOT = path.join(SUBJECT_ROOT, "runtime");
const BINDING_PATH = path.join(SUBJECT_ROOT, "source", "authority-skill-binding.json");
const UI_SOURCE_FILES = ["index.html", "app.mjs", "styles.css", "service-worker.js", "manifest.webmanifest"];

function sourceProvenance(source, authorityRefs) {
  if (source.status) return { ...source, sourceRefs: [...authorityRefs] };
  return {
    status: "original",
    authorRole: source.authorship,
    copyrightStatus: `${source.curriculum}; ${source.calibration}`,
    sourceRefs: [...authorityRefs],
  };
}

function materializeLecture(unit, authoredSkill, graphSkill) {
  const source = authoredSkill.lecture;
  const sections = [
    { title: authoredSkill.title, content: source.objective },
    ...source.sections.map((section) => ({ title: section.title, content: section.content ?? section.body })),
  ];
  return {
    id: source.id,
    subject: "physics_chemistry",
    unitId: unit.unitId,
    skillId: authoredSkill.id,
    authorityRefs: [...graphSkill.authorityRefs],
    prerequisites: [...graphSkill.prerequisites],
    objectives: [source.objective],
    sections: sections.map((section, index) => ({
      id: `${source.id}_SEC_${String(index + 1).padStart(2, "0")}`,
      ...section,
    })),
    workedExamples: source.workedExamples.map((example) => ({ ...example, steps: [...example.steps] })),
    misconceptions: source.misconceptions.map((item) => ({ ...item })),
    checks: source.workedExamples.map(({ prompt, answer, why }) => ({ prompt, answer, reason: why })),
    assets: [...authoredSkill.assetIds],
    provenance: sourceProvenance(authoredSkill.provenance, graphSkill.authorityRefs),
  };
}

function materializeQuestion(source, authoredSkill, graphSkill, stimulusId = null) {
  return {
    id: source.id,
    subject: "physics_chemistry",
    skillIds: [authoredSkill.id],
    authorityRefs: [...graphSkill.authorityRefs],
    stimulusId,
    stem: source.stem,
    options: [...source.options],
    answerIndex: source.answerIndex,
    optionRationales: source.rationales.map((reason, optionIndex) => ({
      optionIndex,
      isCorrect: optionIndex === source.answerIndex,
      reason,
    })),
    difficulty: source.difficulty === "basic" ? "foundation" : source.difficulty,
    cognitiveProcess: [...source.cognitiveProcess],
    representationType: stimulusId ? (authoredSkill.assetIds.length ? "stimulus-figure-and-data" : "stimulus-data") : "static-authored-choice",
    misconceptionTargets: source.options.filter((_, index) => index !== source.answerIndex),
    provenance: sourceProvenance(authoredSkill.provenance, graphSkill.authorityRefs),
    assets: stimulusId ? [...authoredSkill.assetIds] : [],
  };
}

function materializeStimulus(unit, authoredSkill, graphSkill) {
  const source = authoredSkill.stimulus;
  return {
    id: source.id,
    subject: "physics_chemistry",
    unitId: unit.unitId,
    skillIds: [authoredSkill.id],
    authorityRefs: [...graphSkill.authorityRefs],
    title: source.title,
    body: source.body,
    dataTable: {
      caption: source.dataTable.caption ?? source.title,
      columns: [...source.dataTable.columns],
      rows: source.dataTable.rows.map((row) => [...row]),
    },
    assetIds: [...source.assetIds],
    provenance: sourceProvenance(authoredSkill.provenance, graphSkill.authorityRefs),
  };
}

function assetRecord(source, unitSkills) {
  const authorityRefs = [...new Set(unitSkills.flatMap((skill) => skill.authorityRefs))];
  const embeddedDescription = source.svg.match(/<desc>([^<]+)<\/desc>/u)?.[1];
  assert.equal(embeddedDescription, source.longDescription, `${source.id}: SVG description diverges from source record`);
  return {
    id: source.id,
    subject: "physics_chemistry",
    skillIds: unitSkills.map((skill) => skill.id),
    type: source.type,
    path: `理化會考作戰室/r4/assets/physics-chemistry/${source.fileName}`,
    sha256: createHash("sha256").update(source.svg).digest("hex"),
    creator: "Codex R4 Physics/Chemistry original diagram author",
    source: "Original data-driven SVG calibrated against official CAP figure clarity; no external artwork copied.",
    license: "Repository original educational content",
    originality: "original",
    transformationRecord: "Created as a black-and-white vector schematic from the stated scientific relationships; no source image transformation.",
    calibrationRefs: authorityRefs,
    caption: source.caption,
    altText: source.altText,
    longDescription: source.longDescription,
    dataFallback: source.dataFallback,
    accessibility: { colorIndependent: true, printSafe: true },
    technical: source.technical,
  };
}

export async function materializePhysicsChemistry() {
  const [authority, graphSkills] = await Promise.all([
    loadPhysicsChemistryAuthority(),
    loadPhysicsChemistrySkills(),
  ]);
  assert.equal(PHYSICS_CHEMISTRY_AUTHORED_UNITS.length, 40, "Physics/Chemistry requires 40 explicit authored units");
  const authorityIds = new Set(authority.map((record) => record.id));
  const graphById = new Map(graphSkills.map((skill) => [skill.id, skill]));
  const skills = [];
  const lectures = [];
  const questions = [];
  const stimuli = [];

  for (const [unitIndex, unit] of PHYSICS_CHEMISTRY_AUTHORED_UNITS.entries()) {
    assert.equal(unit.unitId, `PHYCHM_R4_U${String(unitIndex + 1).padStart(2, "0")}`, "authored unit order changed");
    for (const authoredSkill of unit.skills) {
      const graphSkill = graphById.get(authoredSkill.id);
      assert(graphSkill, `${authoredSkill.id}: missing from frozen authority graph`);
      assert.equal(graphSkill.unitId, unit.unitId, `${authoredSkill.id}: authored unit diverges from frozen graph`);
      assert.deepEqual([...authoredSkill.authorityRefs].sort(), [...graphSkill.authorityRefs].sort(), `${authoredSkill.id}: authority binding diverges from frozen graph`);
      assert(authoredSkill.authorityRefs.every((id) => authorityIds.has(id)), `${authoredSkill.id}: authority reference escapes Physics/Chemistry scope`);
      skills.push({ ...graphSkill, title: authoredSkill.title });
      lectures.push(materializeLecture(unit, authoredSkill, graphSkill));
      stimuli.push(materializeStimulus(unit, authoredSkill, graphSkill));
      questions.push(...authoredSkill.standaloneQuestions.map((source) => materializeQuestion(source, authoredSkill, graphSkill)));
      questions.push(...authoredSkill.stimulusQuestions.map((source) => {
        assert.equal(source.stimulusId, authoredSkill.stimulus.id, `${source.id}: stimulus link mismatch`);
        return materializeQuestion(source, authoredSkill, graphSkill, source.stimulusId);
      }));
    }
  }

  assert.deepEqual(skills.map((skill) => skill.id), graphSkills.map((skill) => skill.id), "authored skill order diverges from frozen graph");
  assert.equal(lectures.length, 300);
  assert.equal(stimuli.length, 300);
  assert.equal(questions.filter((value) => value.stimulusId === null).length, 3600);
  assert.equal(questions.filter((value) => value.stimulusId !== null).length, 900);
  for (const [label, values] of [["lecture", lectures], ["stimulus", stimuli], ["question", questions]]) {
    assert.equal(new Set(values.map((value) => value.id)).size, values.length, `duplicate ${label} ID`);
  }
  const visibleKeys = questions.map((value) => JSON.stringify([value.stem, [...value.options].sort()]));
  assert.equal(new Set(visibleKeys).size, questions.length, "duplicate visible question");

  const assets = PHYSICS_CHEMISTRY_ASSET_SOURCES.map((source) => assetRecord(
    source,
    skills.filter((skill) => skill.unitId === source.unitId),
  ));
  assert.equal(new Set(PHYSICS_CHEMISTRY_ASSET_SOURCES.map((source) => source.unitId)).size, assets.length, "duplicate asset unit");
  for (const record of authority) await validateAuthoringRecord("authority", record);
  for (const skill of skills) await validateAuthoringRecord("skill", skill);
  for (const lecture of lectures) await validateAuthoringRecord("lecture", lecture);
  // Question evidence is validated only by the separate external evidence gate.
  for (const asset of assets) await validateAuthoringRecord("asset", asset);
  return { authority, skills, lectures, questions, stimuli, assets };
}

async function writeJson(root, value) {
  await writeText(path.join(root, `${value.id}.json`), `${JSON.stringify(value, null, 2)}\n`);
}

async function writeText(file, content) {
  for (let attempt = 0; ; attempt += 1) {
    try {
      await writeFile(file, content, "utf8");
      return;
    } catch (error) {
      if (!["EBUSY", "EPERM"].includes(error.code) || attempt === 20) throw error;
      await new Promise((resolve) => setTimeout(resolve, 50 * (attempt + 1)));
    }
  }
}

async function artifactDescriptors(runtimeRoot, directory, type) {
  return Promise.all((await readdir(path.join(runtimeRoot, directory)))
    .filter((name) => name.endsWith(".json"))
    .sort((a, b) => a.localeCompare(b, "en"))
    .map(async (name) => {
      const absolute = path.join(runtimeRoot, directory, name);
      const bytes = await readFile(absolute);
      const record = JSON.parse(bytes.toString("utf8"));
      return {
        id: record.id,
        type,
        path: `理化會考作戰室/r4/runtime/${directory}/${name}`,
        sha256: sha256(bytes),
      };
    }));
}

async function uiDescriptors(runtimeRoot) {
  const files = [
    { id: "PHYCHM_R4_UI_CATALOG", absolute: path.join(runtimeRoot, "content-catalog.json"), path: "理化會考作戰室/r4/runtime/content-catalog.json" },
    ...UI_SOURCE_FILES.map((name) => ({
      id: `PHYCHM_R4_UI_${name.replace(/[^A-Za-z0-9]+/gu, "_").toUpperCase()}`,
      absolute: path.join(SUBJECT_ROOT, name),
      path: `理化會考作戰室/r4/${name}`,
    })),
  ];
  return Promise.all(files.map(async (file) => ({
    id: file.id,
    type: "ui",
    path: file.path,
    sha256: sha256(await readFile(file.absolute)),
  })));
}

export async function buildPhysicsChemistryR4({ runtimeRoot = RUNTIME_ROOT } = {}) {
  const materialized = await materializePhysicsChemistry();
  const productionBuild = path.resolve(runtimeRoot) === path.resolve(RUNTIME_ROOT);
  const directories = Object.fromEntries(["authority", "skills", "lectures", "questions", "stimuli", "assets"].map((name) => [name, path.join(runtimeRoot, name)]));
  await Promise.all(Object.values(directories).map(async (directory) => {
    await rm(directory, { recursive: true, force: true, maxRetries: 8, retryDelay: 100 });
    await mkdir(directory, { recursive: true });
  }));
  await Promise.all([
    ...materialized.authority.map((value) => writeJson(directories.authority, value)),
    ...materialized.skills.map((value) => writeJson(directories.skills, value)),
    ...materialized.lectures.map((value) => writeJson(directories.lectures, value)),
    ...materialized.questions.map((value) => writeJson(directories.questions, value)),
    ...materialized.stimuli.map((value) => writeJson(directories.stimuli, value)),
    ...materialized.assets.map((value) => writeJson(directories.assets, value)),
  ]);
  const vectorRoot = productionBuild
    ? path.join(SUBJECT_ROOT, "assets", "physics-chemistry")
    : path.join(runtimeRoot, "vector-assets");
  await rm(vectorRoot, { recursive: true, force: true, maxRetries: 8, retryDelay: 100 });
  await mkdir(vectorRoot, { recursive: true });
  await Promise.all(PHYSICS_CHEMISTRY_ASSET_SOURCES.map((source) => writeText(path.join(vectorRoot, source.fileName), source.svg)));

  const authoredBySkill = new Map(PHYSICS_CHEMISTRY_AUTHORED_UNITS.flatMap((unit) => unit.skills.map((skill) => [skill.id, skill])));
  const catalog = {
    schemaVersion: "cap8-r4-static-runtime-catalog-v1",
    subject: "physics_chemistry",
    contentVersion: "4.0.0",
    selectionPolicy: "seed-orders-reviewed-static-ids-only",
    units: PHYSICS_CHEMISTRY_AUTHORED_UNITS.map((unit) => ({
      id: unit.unitId,
      title: unit.title,
      skillIds: unit.skills.map((skill) => skill.id),
    })),
    skills: materialized.skills.map((skill) => {
      const source = authoredBySkill.get(skill.id);
      return {
        id: skill.id,
        unitId: skill.unitId,
        title: source.title,
        lectureId: source.lecture.id,
        questionIds: source.standaloneQuestions.map((question) => question.id),
        stimulusId: source.stimulus.id,
        stimulusQuestionIds: source.stimulusQuestions.map((question) => question.id),
        assetIds: [...source.assetIds],
      };
    }),
  };
  await writeText(path.join(runtimeRoot, "content-catalog.json"), `${JSON.stringify(catalog, null, 2)}\n`);
  const manifest = {
    schemaVersion: "cap8-r4-physics-chemistry-runtime-v1",
    subject: "physics_chemistry",
    staticContent: true,
    runtimeGenerationAllowed: false,
    catalog: "content-catalog.json",
    counts: {
      authorityNodes: materialized.authority.length,
      skills: materialized.skills.length,
      lectures: materialized.lectures.length,
      skillQuestions: materialized.questions.filter((value) => value.stimulusId === null).length,
      stimuli: materialized.stimuli.length,
      stimulusQuestions: materialized.questions.filter((value) => value.stimulusId !== null).length,
      questions: materialized.questions.length,
      assets: materialized.assets.length,
    },
    ids: {
      authority: materialized.authority.map((value) => value.id),
      skills: materialized.skills.map((value) => value.id),
      lectures: materialized.lectures.map((value) => value.id),
      questions: materialized.questions.map((value) => value.id),
      stimuli: materialized.stimuli.map((value) => value.id),
      assets: materialized.assets.map((value) => value.id),
    },
  };
  await writeText(path.join(runtimeRoot, "content-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);

  const artifactGroups = [
    ["authority", "authority"],
    ["skills", "skill"],
    ["lectures", "lecture"],
    ["questions", "question"],
    ["stimuli", "stimulus"],
    ["assets", "asset"],
  ];
  const artifacts = [
    ...(await Promise.all(artifactGroups.map(([directory, type]) => artifactDescriptors(runtimeRoot, directory, type)))).flat(),
    ...await uiDescriptors(runtimeRoot),
  ];
  const counts = {
    authorityNodes: materialized.authority.length,
    skills: materialized.skills.length,
    lectures: materialized.lectures.length,
    skillQuestions: materialized.questions.filter((value) => value.stimulusId === null).length,
    stimulusQuestions: materialized.questions.filter((value) => value.stimulusId !== null).length,
    stimuli: materialized.stimuli.length,
    assets: materialized.assets.length,
  };
  const authorityGraphSha256 = sha256(await readFile(GRAPH_PATH));
  const manifestV4 = {
    schemaVersion: "cap8-content-manifest-v4",
    subjectId: "physics_chemistry",
    contentVersion: "4.0.0",
    authorityGraphSha256,
    artifacts,
    counts,
    buildSha256: sha256(canonicalJson({ authorityGraphSha256, artifacts, counts })),
  };
  await writeText(path.join(runtimeRoot, "content-manifest-v4.json"), `${JSON.stringify(manifestV4, null, 2)}\n`);

  if (productionBuild) {
    const binding = JSON.parse(await readFile(BINDING_PATH, "utf8"));
    binding.contentStatus = {
      lecturesComplete: true,
      skillQuestionsComplete: true,
      stimuliComplete: true,
      manifestEligible: true,
    };
    await writeText(BINDING_PATH, `${JSON.stringify(binding, null, 2)}\n`);
  }
  return manifest;
}

async function main() {
  const manifest = await buildPhysicsChemistryR4();
  console.log(`build-physics-chemistry-r4: OK - ${manifest.counts.skills} skills, ${manifest.counts.lectures} lectures, ${manifest.counts.questions} questions, ${manifest.counts.stimuli} stimuli`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();

export async function loadPhysicsChemistrySkills() {
  const graph = JSON.parse(await readFile(GRAPH_PATH, "utf8"));
  assert.equal(graph.status, "frozen-reviewed", "authority graph must be frozen and reviewed");
  const skills = graph.skills.filter((skill) => skill.subject === "physics_chemistry");
  assert.equal(skills.length, 300, "physics/chemistry skill inventory must contain 300 records");
  return skills;
}

export async function loadPhysicsChemistryAuthority() {
  const graph = JSON.parse(await readFile(GRAPH_PATH, "utf8"));
  assert.equal(graph.status, "frozen-reviewed", "authority graph must be frozen and reviewed");
  const records = graph.nodes
    .filter((node) => node.reviewedSubjects.includes("physics_chemistry"))
    .map((node) => ({
      id: node.id,
      subject: "physics_chemistry",
      kind: node.kind,
      code: node.code,
      text: node.text,
      sourceIds: [node.sourceId],
      applicable: true,
    }));
  assert.equal(records.length, 141, "physics/chemistry authority inventory must contain 141 records");
  return records;
}
