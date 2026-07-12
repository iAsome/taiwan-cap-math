import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { fileHash, readJson, assert } from "./lib/common.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const expected = readJson(path.join(root, "EXPECTED-RESULTS.json"));
const payload = path.join(root, "payload", "rehearsal-math-bootstrap.js");
assert(fs.existsSync(payload), "Missing rehearsal loader payload");
const text = fs.readFileSync(payload, "utf8");
for (const marker of [
  "generated=1", "legacy=1", "human-runtime-rc/human-rc-bootstrap.js",
  "v2/math-production-bootstrap.js", "app-legacy.js",
  "__MATH_CUTOVER_REHEARSAL_R1__", "oldDatabaseDeletionAllowed: false"
]) assert(text.includes(marker), `Missing payload marker: ${marker}`);
console.log(JSON.stringify({
  status: "PASS_TOOLING_SELF_TEST",
  payloadSha256: fileHash(payload),
  expectedStartingHead: expected.requiredStartingHead,
  rehearsalPhaseCount: expected.rehearsalPhases.length,
  productionActivationAllowed: false,
  studentRouteChangeAllowed: false,
  oldDatabaseDeletionAllowed: false
}, null, 2));
