import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readJson, assert } from "./lib/common.mjs";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..");
const expected = readJson(path.join(root, "EXPECTED-RESULTS.json"));
const required = [
  "verify-and-create-precutover-tag.mjs",
  "verify-applied-cutover-node.mjs",
  "run-content-integrity-gate.mjs",
  "run-live-cutover-browser-gate.mjs",
  "exercise-rollback-script.mjs",
  "finalize-controlled-production-cutover.mjs"
];
for (const file of required) assert(fs.existsSync(path.join(scriptDir, file)), `Missing ${file}`);
console.log(JSON.stringify({
  status: "PASS_TOOLING_SELF_TEST",
  requiredScriptCount: required.length,
  requiredStartingHead: expected.requiredStartingHead,
  tagName: expected.preCutoverTag,
  nextAuthorizedStage: expected.nextAuthorizedStage,
  productionActivationAllowed: true,
  oldDatabaseDeletionAllowed: false
}, null, 2));
