import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";

const SHA_RE = /^[0-9a-f]{64}$/;

export function sha256File(absPath) {
  const bytes = readFileSync(absPath);
  return createHash("sha256").update(bytes).digest("hex");
}

export function readLocksJson(absPath) {
  const text = readFileSync(absPath, "utf8");
  const locks = JSON.parse(text);
  assert.ok(locks && typeof locks === "object" && !Array.isArray(locks), "locks must be a JSON object");

  const keys = Object.keys(locks);
  const sorted = [...keys].sort();
  assert.deepEqual(keys, sorted, "lock JSON keys must be lexicographically sorted");

  for (const [key, value] of Object.entries(locks)) {
    assert.equal(typeof value, "string", `locks.${key} must be a string`);
    assert.match(value, SHA_RE, `locks.${key} must be a 64-character SHA-256 hex digest`);
  }

  return locks;
}

export function lockFileMap(unitConfig) {
  return Object.freeze({
    questionBank: unitConfig.paths.questionBank,
    lecture: unitConfig.paths.lecture,
    dossier: unitConfig.reviewArtifacts.dossier,
    distractor: unitConfig.reviewArtifacts.distractor,
    samples: unitConfig.reviewArtifacts.samples
  });
}

export function validateHashLocks({ unitConfig, mathRoot, locksPath }) {
  const locks = readLocksJson(locksPath);
  const files = lockFileMap(unitConfig);
  const lockKeys = Object.keys(locks).sort();
  const fileKeys = Object.keys(files).sort();
  assert.deepEqual(lockKeys, fileKeys, "lock keys must match configured artifact keys");

  const actual = {};
  const mismatches = [];

  for (const key of lockKeys) {
    const rel = files[key];
    const abs = path.join(mathRoot, rel);
    actual[key] = sha256File(abs);
    if (actual[key] !== locks[key]) {
      mismatches.push(key);
    }
  }

  if (mismatches.length) {
    assert.fail(`hash lock mismatch: ${mismatches.sort().join(", ")}`);
  }

  return {
    expected: { ...locks },
    actual
  };
}
