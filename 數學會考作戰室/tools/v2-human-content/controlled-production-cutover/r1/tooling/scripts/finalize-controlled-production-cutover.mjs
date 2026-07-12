import fs from "node:fs";
import path from "node:path";
import { parseArgs, readJson, writeJson, assert, collectFiles, fileManifest, statusPaths, runGit } from "./lib/common.mjs";

const args = parseArgs(process.argv.slice(2));
assert(args.repo && args.root, "Usage: --repo --root");
const repo = path.resolve(args.repo), root = path.resolve(args.root);
const expected = readJson(path.join(root, "tooling/EXPECTED-RESULTS.json"));
const evidence = path.join(root, "evidence");

const tag = readJson(path.join(evidence, "precutover-tag-report.json"));
const node = readJson(path.join(evidence, "applied-cutover-node-validation.json"));
const integrity = readJson(path.join(evidence, "post-cutover-content-integrity.json"));
const browser = readJson(path.join(evidence, "live-production-browser-gate.json"));
const rollback = readJson(path.join(evidence, "rollback-script-exercise.json"));

assert(tag.status === "CREATED_AND_PUSHED_IMMUTABLE_PRECUTOVER_TAG_R1", "Tag gate failed");
assert(node.status === "PASS_APPLIED_HUMAN_PRODUCTION_CUTOVER_NODE_R1", "Node gate failed");
assert(integrity.status === "PASS_POST_CUTOVER_CONTENT_INTEGRITY_R1", "Content integrity failed");
assert(browser.status === "PASS_LIVE_HUMAN_PRODUCTION_BROWSER_GATE_R1" && browser.failed === 0, "Browser gate failed");
assert(rollback.status === "PASS_ACTUAL_ROLLBACK_SCRIPT_EXERCISE_R1", "Rollback exercise failed");
assert(runGit(repo, ["rev-parse", "HEAD"]) === expected.requiredStartingHead, "HEAD changed before approved cutover commit");

const allowed = [
  "數學會考作戰室/index.html",
  "數學會考作戰室/math-bootstrap.js",
  "數學會考作戰室/human-runtime/",
  "數學會考作戰室/tools/v2-human-content/controlled-production-cutover/r1/"
];
const changed = statusPaths(repo);
for (const item of changed) assert(allowed.some(prefix => item === prefix || item.startsWith(prefix)), `Unexpected changed path: ${item}`);

const summary = {
  status: "PASS_CONTROLLED_PRODUCTION_CUTOVER_R1",
  contentVersion: expected.contentVersion,
  preCutoverTag: expected.preCutoverTag,
  preCutoverTagTarget: expected.requiredStartingHead,
  nodeValidation: node.status,
  contentIntegrity: integrity.status,
  browserValidation: browser.status,
  rollbackExercise: rollback.status,
  productionActivated: true,
  studentRouteChanged: true,
  generatedV2RollbackAvailable: true,
  v1RollbackAvailable: true,
  oldDatabaseDeletionAllowed: false,
  mergeAllowed: false,
  nextAuthorizedStage: expected.nextAuthorizedStage,
  expectedCommitSubject: expected.cutoverCommitSubject,
  changedPaths: changed,
  issues: []
};
writeJson(path.join(evidence, "controlled-production-cutover-r1-summary.json"), summary);
const files = collectFiles(root).filter(file => !file.endsWith("controlled-production-cutover-evidence-sha256.json"));
writeJson(path.join(root, "controlled-production-cutover-evidence-sha256.json"), {
  schemaVersion: "math-v2-controlled-production-cutover-evidence-r1",
  files: fileManifest(root, files)
});
console.log(JSON.stringify(summary, null, 2));
