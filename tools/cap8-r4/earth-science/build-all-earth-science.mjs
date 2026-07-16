import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { validateAuthoringRecord } from "../authoring-validator.mjs";
import { canonicalJson, sha256 } from "../r4-core.mjs";
import { buildEarthScienceUnit } from "./build-earth-science-unit.mjs";
import { materializeEarthScienceAssets } from "./materialize-earth-science-assets.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..", "..");
const UNITS = Object.freeze(Array.from({ length: 30 }, (_, index) => `EARTH_R4_U${String(index + 1).padStart(2, "0")}`));
const SUBJECT_ROOT = "地科會考作戰室/r4";
const UI = Object.freeze([
  ["EARTH_R4_UI_INDEX", "index.html"],
  ["EARTH_R4_UI_APP", "app.mjs"],
  ["EARTH_R4_UI_ASSESSMENT", "assessment.mjs"],
  ["EARTH_R4_UI_MIGRATION", "migration.mjs"],
  ["EARTH_R4_UI_STYLES", "styles.css"],
  ["EARTH_R4_UI_SERVICE_WORKER", "sw.js"],
  ["EARTH_R4_UI_WEBMANIFEST", "manifest.webmanifest"],
]);

async function writeRecords(directory, records) {
  await mkdir(directory, { recursive: true });
  await Promise.all(records.map((record) => writeFile(path.join(directory, `${record.id}.json`), `${JSON.stringify(record, null, 2)}\n`, "utf8")));
}

async function descriptor(repoRoot, id, type, repositoryPath) {
  const bytes = await readFile(path.join(repoRoot, ...repositoryPath.split("/")));
  return { id, type, path: repositoryPath, sha256: sha256(bytes) };
}

export async function buildAllEarthScience({ repoRoot = REPO_ROOT, outputRoot = repoRoot } = {}) {
  const results = [];
  for (const unitId of UNITS) results.push(await buildEarthScienceUnit(unitId, { repoRoot, outputRoot }));
  const artifacts = results.flatMap(({ records }) => [...records.lectures, ...records.questions, ...records.stimuli]);
  const skills = results.flatMap(({ records }) => records.skills);
  assert.equal(skills.length, 220);
  const assets = await materializeEarthScienceAssets(artifacts, { repoRoot });
  const graphBytes = await readFile(path.join(repoRoot, "tools", "cap8-r4", "authority", "frozen-authority-graph.json"));
  const graph = JSON.parse(graphBytes);
  const authorityIds = new Set(skills.flatMap((skill) => skill.authorityRefs));
  const authorities = graph.nodes
    .filter((node) => authorityIds.has(node.id))
    .map((node) => ({
      id: node.id,
      subject: "earth_science",
      kind: node.kind,
      code: node.code,
      text: node.text,
      sourceIds: [node.sourceId],
      applicable: true,
    }))
    .sort((a, b) => a.id.localeCompare(b.id, "en"));
  assert.equal(authorities.length, 69);
  for (const record of authorities) await validateAuthoringRecord("authority", record);
  for (const record of skills) await validateAuthoringRecord("skill", record);
  const manifest = {
    schemaVersion: "cap8-r4-earth-science-runtime-v1",
    subject: "earth_science",
    units: results.map(({ unitId, records }) => ({
      id: unitId,
      bundle: `units/${unitId}.json`,
      skills: records.skills.map((skill) => ({
        id: skill.id,
        title: skill.title,
        lectureId: records.lectures.find((lecture) => lecture.skillId === skill.id).id,
        questionIds: records.questions.filter((question) => question.skillIds.includes(skill.id) && question.stimulusId === null).map((question) => question.id),
        stimulusId: records.stimuli.find((stimulus) => stimulus.skillIds.includes(skill.id)).id,
        stimulusQuestionIds: records.questions.filter((question) => question.skillIds.includes(skill.id) && question.stimulusId !== null).map((question) => question.id),
      })),
    })),
    assetsBundle: "assets.json",
    assetIds: assets.map((asset) => asset.id),
  };
  const runtime = path.join(outputRoot, "地科會考作戰室", "r4", "runtime");
  await mkdir(runtime, { recursive: true });
  await Promise.all([
    writeRecords(path.join(runtime, "authority"), authorities),
    writeRecords(path.join(runtime, "skills"), skills),
    writeFile(path.join(runtime, "content-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8"),
    writeFile(path.join(runtime, "assets.json"), `${JSON.stringify(assets, null, 2)}\n`, "utf8"),
  ]);

  const artifactDescriptors = [];
  for (const record of authorities) artifactDescriptors.push(await descriptor(outputRoot, record.id, "authority", `${SUBJECT_ROOT}/runtime/authority/${record.id}.json`));
  for (const record of skills) artifactDescriptors.push(await descriptor(outputRoot, record.id, "skill", `${SUBJECT_ROOT}/runtime/skills/${record.id}.json`));
  for (const record of results.flatMap(({ records }) => records.lectures)) artifactDescriptors.push(await descriptor(outputRoot, record.id, "lecture", `${SUBJECT_ROOT}/runtime/lectures/${record.id}.json`));
  for (const record of results.flatMap(({ records }) => records.questions)) artifactDescriptors.push(await descriptor(outputRoot, record.id, "question", `${SUBJECT_ROOT}/runtime/questions/${record.id}.json`));
  for (const record of results.flatMap(({ records }) => records.stimuli)) artifactDescriptors.push(await descriptor(outputRoot, record.id, "stimulus", `${SUBJECT_ROOT}/runtime/stimuli/${record.id}.json`));
  for (const asset of assets) artifactDescriptors.push(await descriptor(repoRoot, asset.id, "asset", asset.path));
  for (const [id, filename] of UI) artifactDescriptors.push(await descriptor(repoRoot, id, "ui", `${SUBJECT_ROOT}/${filename}`));
  const counts = {
    authorityNodes: authorities.length,
    skills: skills.length,
    lectures: results.reduce((sum, value) => sum + value.lectures, 0),
    skillQuestions: artifacts.filter((record) => record.stimulusId === null).length,
    stimulusQuestions: artifacts.filter((record) => record.stimulusId !== null && "answerIndex" in record).length,
    stimuli: results.reduce((sum, value) => sum + value.stimuli, 0),
    assets: assets.length,
  };
  const releaseManifest = {
    schemaVersion: "cap8-content-manifest-v4",
    subjectId: "earth_science",
    contentVersion: "4.0.0",
    authorityGraphSha256: sha256(graphBytes),
    artifacts: artifactDescriptors,
    counts,
    buildSha256: sha256(canonicalJson({ authorityGraphSha256: sha256(graphBytes), artifacts: artifactDescriptors, counts })),
  };
  await mkdir(path.join(outputRoot, "地科會考作戰室", "r4"), { recursive: true });
  await writeFile(path.join(outputRoot, "地科會考作戰室", "r4", "content-manifest-v4.json"), `${JSON.stringify(releaseManifest, null, 2)}\n`, "utf8");
  return {
    units: results.length,
    authorityNodes: authorities.length,
    skills: skills.length,
    lectures: results.reduce((sum, value) => sum + value.lectures, 0),
    questions: results.reduce((sum, value) => sum + value.questions, 0),
    stimuli: results.reduce((sum, value) => sum + value.stimuli, 0),
    assets: assets.length,
    ui: UI.length,
  };
}

async function main() {
  const result = await buildAllEarthScience();
  console.log(`build-all-earth-science: OK - ${result.authorityNodes} authority nodes, ${result.units} units, ${result.skills} skills, ${result.lectures} lectures, ${result.questions} questions, ${result.stimuli} stimuli, ${result.assets} assets, ${result.ui} UI files`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
