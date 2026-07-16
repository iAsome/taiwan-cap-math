import assert from "node:assert/strict";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildGeographyUnit } from "./build-geography-unit.mjs";
import { canonicalJson, sha256 } from "./r4-core.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const SUBJECT_ROOT = path.join(REPO_ROOT, "地理會考作戰室", "r4");
const RUNTIME_ROOT = path.join(SUBJECT_ROOT, "runtime");
const MANIFEST_PATH = path.join(SUBJECT_ROOT, "content-manifest-v4.json");
const GENERATED_DIRECTORIES = Object.freeze(["lectures", "questions", "stimuli", "assets"]);
const UNIT_IDS = Object.freeze(Array.from({ length: 36 }, (_, index) => `GEO_R4_U${String(index + 1).padStart(2, "0")}`));

function repositoryPath(absolutePath) {
  return path.relative(REPO_ROOT, absolutePath).split(path.sep).join("/");
}

async function jsonArtifacts(directory, type) {
  const entries = await readdir(directory, { withFileTypes: true });
  return Promise.all(entries.filter((entry) => entry.isFile() && entry.name.endsWith(".json")).sort((a, b) => a.name.localeCompare(b.name, "en")).map(async (entry) => {
    const absolutePath = path.join(directory, entry.name);
    const bytes = await readFile(absolutePath);
    const record = JSON.parse(bytes.toString("utf8"));
    return { artifact: { id: record.id, type, path: repositoryPath(absolutePath), sha256: sha256(bytes) }, record };
  }));
}

async function cleanGeneratedRuntime() {
  const resolvedRoot = path.resolve(RUNTIME_ROOT);
  assert.equal(path.basename(resolvedRoot), "runtime", "refusing to clean an unexpected path");
  assert(resolvedRoot.startsWith(path.resolve(SUBJECT_ROOT) + path.sep), "runtime path escaped Geography R4 root");
  for (const name of GENERATED_DIRECTORIES) await rm(path.join(resolvedRoot, name), { recursive: true, force: true });
}

export async function buildGeographyR4({ repoRoot = REPO_ROOT } = {}) {
  assert.equal(path.resolve(repoRoot), REPO_ROOT, "alternate repository roots are not supported by the production build");
  await cleanGeneratedRuntime();
  await mkdir(RUNTIME_ROOT, { recursive: true });

  const unitResults = [];
  for (const unitId of UNIT_IDS) unitResults.push(await buildGeographyUnit(unitId, { repoRoot }));

  const artifactGroups = await Promise.all([
    jsonArtifacts(path.join(RUNTIME_ROOT, "authority"), "authority"),
    jsonArtifacts(path.join(RUNTIME_ROOT, "skills"), "skill"),
    jsonArtifacts(path.join(RUNTIME_ROOT, "lectures"), "lecture"),
    jsonArtifacts(path.join(RUNTIME_ROOT, "questions"), "question"),
    jsonArtifacts(path.join(RUNTIME_ROOT, "stimuli"), "stimulus"),
    jsonArtifacts(path.join(RUNTIME_ROOT, "assets"), "asset"),
  ]);
  const [authority, skills, lectures, questions, stimuli, assets] = artifactGroups;
  const skillQuestions = questions.filter(({ record }) => record.stimulusId === null);
  const stimulusQuestions = questions.length - skillQuestions.length;
  const counts = {
    authorityNodes: authority.length,
    skills: skills.length,
    lectures: lectures.length,
    skillQuestions: skillQuestions.length,
    stimulusQuestions,
    stimuli: stimuli.length,
    assets: assets.length,
  };
  assert.deepEqual(counts, { authorityNodes: 94, skills: 240, lectures: 240, skillQuestions: 2880, stimulusQuestions: 720, stimuli: 240, assets: assets.length });

  const catalog = {
    schemaVersion: "cap8-geography-runtime-catalog-r4",
    subject: "geography",
    contentVersion: "4.0.0",
    units: unitResults,
    counts,
  };
  const catalogPath = path.join(RUNTIME_ROOT, "catalog.json");
  await writeFile(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`, "utf8");
  const catalogBytes = await readFile(catalogPath);
  const artifacts = [...artifactGroups.flat().map(({ artifact }) => artifact), {
    id: "GEO_R4_RUNTIME_CATALOG",
    type: "ui",
    path: repositoryPath(catalogPath),
    sha256: sha256(catalogBytes),
  }].sort((a, b) => a.id.localeCompare(b.id, "en"));

  const binding = JSON.parse(await readFile(path.join(SUBJECT_ROOT, "source", "authority-skill-binding.json"), "utf8"));
  assert.match(binding.authorityGraph?.sha256 ?? "", /^[a-f0-9]{64}$/, "authority binding is missing its graph SHA-256");
  const buildPayload = { subjectId: "geography", contentVersion: "4.0.0", authorityGraphSha256: binding.authorityGraph.sha256, artifacts, counts };
  const manifest = {
    schemaVersion: "cap8-content-manifest-v4",
    ...buildPayload,
    buildSha256: sha256(Buffer.from(canonicalJson(buildPayload), "utf8")),
  };
  await writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  return manifest;
}

async function main() {
  const manifest = await buildGeographyR4();
  console.log(`build-geography-r4: OK - ${manifest.counts.skills} skills, ${manifest.counts.lectures} lectures, ${manifest.counts.skillQuestions} skill questions, ${manifest.counts.stimuli} stimuli, ${manifest.counts.stimulusQuestions} stimulus questions, ${manifest.counts.assets} assets`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
