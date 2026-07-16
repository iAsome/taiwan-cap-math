#!/usr/bin/env node
import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const arg = name => {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : null;
};
const previewRoot = path.resolve(arg("--preview") || "");
const runtimeRoot = path.resolve(arg("--runtime") || "");
const outputRoot = path.resolve(arg("--output") || "");
const repoRoot = path.resolve(arg("--repo") || "");
assert(arg("--repo") && arg("--preview") && arg("--runtime") && arg("--output"), "Usage: --repo <dir> --preview <dir> --runtime <dir> --output <dir>");

const readJson = file => JSON.parse(fs.readFileSync(file, "utf8"));
const writeJson = (file, value) => fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`, "utf8");
const sha256 = bytes => crypto.createHash("sha256").update(bytes).digest("hex");
const authority = "CHATGPT_HUMAN_AUTHORED_R1";
const sourceManifest = readJson(path.join(previewRoot, "manifest.json"));
assert.deepEqual(
  {
    units: sourceManifest.unitCount,
    skills: sourceManifest.skillCount,
    mc: sourceManifest.mcQuestionCount,
    cr: sourceManifest.constructedResponseCount,
    figures: sourceManifest.figureCount
  },
  { units: 23, skills: 339, mc: 4068, cr: 678, figures: 178 }
);
assert.equal(sourceManifest.contentAuthority, authority);

fs.rmSync(outputRoot, { recursive: true, force: true });
const contentRoot = path.join(outputRoot, "content");
const unitsRoot = path.join(contentRoot, "units");
const figuresRoot = path.join(outputRoot, "figures");
fs.mkdirSync(unitsRoot, { recursive: true });
fs.mkdirSync(figuresRoot, { recursive: true });

let lectureCount = 0;
const units = sourceManifest.units.map(entry => {
  const unit = readJson(path.join(previewRoot, entry.path));
  delete unit.previewOnly;
  delete unit.productionActivationAllowed;
  unit.schemaVersion = "math-v2-human-runtime-production-unit-r1";
  unit.productionRuntime = true;
  unit.contentAuthority = authority;
  const bytes = Buffer.from(JSON.stringify(unit));
  const relativePath = `units/${entry.unitId}.json`;
  fs.writeFileSync(path.join(contentRoot, ...relativePath.split("/")), bytes);
  lectureCount += entry.counts.lectures;
  return { ...entry, path: relativePath, bytes: bytes.length, sha256: sha256(bytes) };
});

const figureIndex = {};
for (const [figureId, entry] of Object.entries(sourceManifest.figureIndex || {}).sort(([a], [b]) => a.localeCompare(b))) {
  const source = path.join(repoRoot, ...String(entry.sourcePath).split("/"));
  assert(fs.existsSync(source), `Missing figure source: ${figureId} (${entry.sourcePath})`);
  const target = path.join(figuresRoot, `${figureId}.svg`);
  fs.copyFileSync(source, target);
  const bytes = fs.readFileSync(target);
  figureIndex[figureId] = {
    ...entry,
    sourcePath: `數學會考作戰室/human-runtime/figures/${figureId}.svg`,
    bytes: bytes.length,
    sha256: sha256(bytes)
  };
}
assert.equal(Object.keys(figureIndex).length, 178);

const currentManifest = readJson(path.join(runtimeRoot, "content", "manifest.json"));
writeJson(path.join(contentRoot, "manifest.json"), {
  ...currentManifest,
  productionRuntime: true,
  contentAuthority: authority,
  contentVersion: sourceManifest.contentVersion,
  unitCount: 23,
  skillCount: 339,
  lectureCount,
  mcQuestionCount: 4068,
  constructedResponseCount: 678,
  figureCount: 178,
  units,
  figureIndex
});
fs.copyFileSync(path.join(runtimeRoot, "content", "syllabus-lock.json"), path.join(contentRoot, "syllabus-lock.json"));

const configPath = path.join(runtimeRoot, "config.mjs");
const config = fs.readFileSync(configPath, "utf8").replace(
  /expectedContentVersion: "[a-f0-9]{64}"/,
  `expectedContentVersion: "${sourceManifest.contentVersion}"`
);
assert(config.includes(`expectedContentVersion: "${sourceManifest.contentVersion}"`));
fs.writeFileSync(path.join(outputRoot, "config.mjs"), config, "utf8");

const blueprint = readJson(path.join(runtimeRoot, "release-blueprint-r1.json"));
blueprint.contentVersion = sourceManifest.contentVersion;
writeJson(path.join(outputRoot, "release-blueprint-r1.json"), blueprint);

console.log(JSON.stringify({
  status: "BUILT_CAP8_R4_PRODUCTION_CONTENT",
  outputRoot,
  contentVersion: sourceManifest.contentVersion,
  unitCount: units.length,
  lectureCount,
  figureCount: Object.keys(figureIndex).length
}, null, 2));
