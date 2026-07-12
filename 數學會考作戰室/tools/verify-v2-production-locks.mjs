import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { hashPolicy } from "./v2-qa/policies/policy-hash.mjs";
import { LOCK_FILE, LOCK_PATHS, TASK_ID, makeProductionLocks } from "./write-v2-production-locks.mjs";

export function verifyProductionLocks() {
  assert(fs.existsSync(LOCK_FILE), "production lock file is missing");
  const locked = JSON.parse(fs.readFileSync(LOCK_FILE, "utf8"));
  const current = makeProductionLocks();
  assert.equal(locked.schemaVersion, 1);
  assert.equal(locked.taskId, TASK_ID);
  assert.equal(locked.policy.sha256, hashPolicy());
  assert.deepEqual(Object.keys(locked.files), LOCK_PATHS.map(item => item.replace(/\\/g, "/")));
  assert.deepEqual(locked, current, "production content lock mismatch");
  return { files: Object.keys(locked.files).length, policyHash: locked.policy.sha256 };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = verifyProductionLocks();
  console.log(`verify-v2-production-locks: OK — ${result.files} files`);
  console.log(`policy SHA-256: ${result.policyHash}`);
}
