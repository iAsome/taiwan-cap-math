import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import {
  SOCIAL_BACKUP_KEY,
  SOCIAL_STORAGE_KEY,
  allocateSubjectCounts,
  collectSocialLegacySnapshot,
  createSocialAssessment,
  migrateSocialProgress,
  normalizeSocialProgress,
} from "../../社會會考作戰室/runtime.js";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const catalogPath = join(repoRoot, "社會會考作戰室", "runtime", "catalog.json");
const catalog = JSON.parse(readFileSync(catalogPath, "utf8"));

class MemoryStorage {
  constructor(entries = {}) { this.values = new Map(Object.entries(entries)); }
  get length() { return this.values.size; }
  key(index) { return [...this.values.keys()][index] ?? null; }
  getItem(key) { return this.values.has(key) ? this.values.get(key) : null; }
  setItem(key, value) { this.values.set(key, String(value)); }
}

assert.deepEqual(normalizeSocialProgress(null), {
  schemaVersion: "cap8-r4-integrated-social-progress-v1",
  lastSeed: "115",
  questionCount: 54,
  attempts: [],
  migration: null,
});

const storage = new MemoryStorage({
  "capSocial.paperHistory": JSON.stringify([{ id: "old-1", seed: 7, correct: 42, total: 54, finishedAt: "2025-01-01T00:00:00.000Z" }]),
  "capSocial.unknown": "保留但不猜測映射",
  unrelated: "leave-me-alone",
});
const snapshot = collectSocialLegacySnapshot(storage);
assert.deepEqual(Object.keys(snapshot.entries), ["capSocial.paperHistory", "capSocial.unknown"]);
const first = migrateSocialProgress(storage);
assert.equal(first.status, "migrated");
assert.equal(first.progress.attempts.length, 1);
assert.equal(first.progress.attempts[0].score, 42);
assert.equal(storage.getItem("unrelated"), "leave-me-alone");
assert.ok(storage.getItem(SOCIAL_BACKUP_KEY)?.includes("capSocial.unknown"));
const second = migrateSocialProgress(storage);
assert.equal(second.status, "current");
assert.equal(second.progress.attempts.length, 1);
assert.ok(storage.getItem(SOCIAL_STORAGE_KEY));

for (const count of [50, 54, 60]) {
  const assessment = createSocialAssessment(catalog, { seed: "12345", questionCount: count });
  assert.equal(assessment.questionIds.length, count);
  assert.equal(new Set(assessment.questionIds).size, count);
  assert.deepEqual(assessment.subjectCounts, allocateSubjectCounts(count, { geography: 17, history: 19, civics: 18 }));
}
assert.notDeepEqual(
  createSocialAssessment(catalog, { seed: "1", questionCount: 54 }).questionIds,
  createSocialAssessment(catalog, { seed: "2", questionCount: 54 }).questionIds,
);

const before = statSync(catalogPath);
await import(`./integrated-social-build.mjs?side-effect-check=${Date.now()}`);
const after = statSync(catalogPath);
assert.equal(after.mtimeMs, before.mtimeMs, "importing builder must not write files");
assert.equal(after.size, before.size);

console.log("integrated-social-runtime.test: OK");
