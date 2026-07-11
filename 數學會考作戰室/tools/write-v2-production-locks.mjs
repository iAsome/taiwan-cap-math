import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import policy from "./v2-qa/policies/math-tw-v1.mjs";
import { hashPolicy } from "./v2-qa/policies/policy-hash.mjs";

export const TASK_ID = "MATH-V2-U01-U23-ONE-SHOT-FULL-PRODUCTION-R1";
const mathDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const LOCK_FILE = path.join(mathDir, "v2", "math-v2-production-locks.json");
export const LOCK_PATHS = Object.freeze([
  "../MATH_V2_PRODUCTION_PROFILE.md",
  "tools/v2-content/syllabus-source.mjs",
  "tools/v2-qa/policies/math-v2-production-profile.mjs",
  "index.html",
  "app.js",
  "math-bootstrap.js",
  "v2/math-production-bootstrap.js",
  "v2/math-engine-v2.js",
  "v2/math-syllabus-v2.js",
  "v2/math-v2-production-profile.js",
  "v2/math-v2-unit-manifest.js",
  "v2/math-quiz-blueprints-v2.js",
  "v2/math-mock-blueprint-v2.js",
  "v2/math-migration-map.js",
  "v2/math-v2-content-manifest.json",
  ...Array.from({ length: 23 }, (_, index) => `v2/math-question-bank-v2-u${String(index + 1).padStart(2, "0")}.js`),
  ...Array.from({ length: 23 }, (_, index) => `v2/math-lecture-v2-u${String(index + 1).padStart(2, "0")}.js`)
].sort());

export function sha256File(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

export function makeProductionLocks() {
  const files = Object.fromEntries(LOCK_PATHS.map(relativePath => {
    const absolutePath = path.resolve(mathDir, relativePath);
    if (!fs.existsSync(absolutePath) || !fs.statSync(absolutePath).isFile()) throw new Error(`Missing production lock input: ${relativePath}`);
    return [relativePath.replace(/\\/g, "/"), sha256File(absolutePath)];
  }));
  return {
    schemaVersion: 1,
    taskId: TASK_ID,
    policy: { id: policy.id, version: policy.version, sha256: hashPolicy() },
    algorithm: "sha256",
    files
  };
}

export function writeProductionLocks() {
  const locks = makeProductionLocks();
  fs.writeFileSync(LOCK_FILE, `${JSON.stringify(locks, null, 2)}\n`, "utf8");
  return locks;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  if (args.length !== 2 || args[0] !== "--task" || args[1] !== TASK_ID) {
    throw new Error(`Usage: node tools/write-v2-production-locks.mjs --task ${TASK_ID}`);
  }
  const locks = writeProductionLocks();
  console.log(`write-v2-production-locks: ${Object.keys(locks.files).length} files`);
  console.log(`policy SHA-256: ${locks.policy.sha256}`);
}
