import fs from "node:fs";
import path from "node:path";
import { parseArgs, readJson, writeJson, assert, fileHash, collectFiles, normalize, runGit, statusPaths } from "./lib/common.mjs";

const args = parseArgs(process.argv.slice(2));
assert(args.repo && args.root, "Usage: --repo --root");
const repo = path.resolve(args.repo), root = path.resolve(args.root);
const expected = readJson(path.join(root, "tooling/EXPECTED-RESULTS.json"));
const packageRoot = path.join(repo, "數學會考作戰室/tools/v2-human-content/production-cutover/r1/package");
const payload = path.join(packageRoot, "payload");
const evidence = path.join(root, "evidence");

assert(runGit(repo, ["rev-list", "-n", "1", expected.preCutoverTag]) === expected.requiredStartingHead, "Tag target mismatch");
assert(fileHash(path.join(repo, "數學會考作戰室/index.html")) === fileHash(path.join(payload, "index.html")), "index.html payload mismatch");
assert(fileHash(path.join(repo, "數學會考作戰室/math-bootstrap.js")) === fileHash(path.join(payload, "math-bootstrap.js")), "math-bootstrap.js payload mismatch");

const liveRuntime = path.join(repo, "數學會考作戰室/human-runtime");
const packageRuntime = path.join(payload, "human-runtime");
const liveFiles = collectFiles(liveRuntime).map(file => normalize(path.relative(liveRuntime, file))).sort();
const packageFiles = collectFiles(packageRuntime).map(file => normalize(path.relative(packageRuntime, file))).sort();
assert(JSON.stringify(liveFiles) === JSON.stringify(packageFiles), "Human runtime file set mismatch");
for (const rel of packageFiles) {
  if (rel === "engine.mjs") continue;
  assert(fileHash(path.join(liveRuntime, rel)) === fileHash(path.join(packageRuntime, rel)), `Human runtime hash mismatch: ${rel}`);
}

const manifest = readJson(path.join(repo, "數學會考作戰室/tools/v2-human-content/global-readiness/r1/runtime-preview/manifest.json"));
assert(manifest.contentVersion === expected.contentVersion, "Runtime manifest content version mismatch");
const lectureTotal = Number(manifest.lectureCount) || manifest.units.reduce((sum, entry) => sum + (entry.counts?.lectures ?? 0), 0);
const counts = {
  units: Number(manifest.unitCount),
  skills: Number(manifest.skillCount),
  lectures: lectureTotal,
  mcQuestions: Number(manifest.mcQuestionCount),
  constructedResponses: Number(manifest.constructedResponseCount),
  figures: Number(manifest.figureCount)
};
for (const [key, value] of Object.entries(expected.expectedCounts)) assert(counts[key] === value, `Count mismatch ${key}`);

for (const protectedOld of [
  "數學會考作戰室/v2",
  "數學會考作戰室/tools/v2-content",
  "數學會考作戰室/tools/author-v2-production-content.mjs",
  "數學會考作戰室/questions.js",
  "數學會考作戰室/app-legacy.js"
]) assert(fs.existsSync(path.join(repo, protectedOld)), `Rollback path missing: ${protectedOld}`);

const allowed = [
  "數學會考作戰室/index.html",
  "數學會考作戰室/math-bootstrap.js",
  "數學會考作戰室/human-runtime/",
  "數學會考作戰室/tools/v2-human-content/controlled-production-cutover/r1/"
];
const changed = statusPaths(repo);
for (const item of changed) assert(allowed.some(prefix => item === prefix || item.startsWith(prefix)), `Unexpected changed path: ${item}`);

const report = {
  status: "PASS_APPLIED_HUMAN_PRODUCTION_CUTOVER_NODE_R1",
  contentVersion: manifest.contentVersion,
  counts,
  liveRuntimeFileCount: liveFiles.length,
  changedPaths: changed,
  generatedV2RollbackPreserved: true,
  v1RollbackPreserved: true,
  productionActivated: true,
  oldDatabaseDeletionAllowed: false
};
writeJson(path.join(evidence, "applied-cutover-node-validation.json"), report);
console.log(JSON.stringify(report, null, 2));
