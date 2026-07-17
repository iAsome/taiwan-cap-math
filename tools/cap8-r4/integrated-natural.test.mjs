import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdtemp, readFile, readdir, rm, stat } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildIntegratedNatural } from "./integrated-natural-build.mjs";
import { verifyIntegratedNatural } from "./integrated-natural-verify.mjs";
import { createExam, normalizeSeed, subjectQuotas } from "../../自然會考作戰室/exam-engine.mjs";
import {
  INVALID_BACKUP_KEY,
  LEGACY_BACKUP_KEY,
  PROGRESS_KEY,
  migrateStorage,
  recordAttempt,
} from "../../自然會考作戰室/migration.mjs";

const repoRoot = fileURLToPath(new URL("../..", import.meta.url));

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

async function fileHashes(root) {
  const result = {};
  async function walk(directory) {
    for (const entry of (await readdir(directory, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name, "en"))) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) await walk(file);
      else result[path.relative(root, file).split(path.sep).join("/")] = sha256(await readFile(file));
    }
  }
  await walk(root);
  return result;
}

class MemoryStorage {
  constructor(entries = {}) { this.values = new Map(Object.entries(entries)); }
  get length() { return this.values.size; }
  key(index) { return [...this.values.keys()][index] ?? null; }
  getItem(key) { return this.values.has(key) ? this.values.get(key) : null; }
  setItem(key, value) { this.values.set(String(key), String(value)); }
  removeItem(key) { this.values.delete(key); }
}

async function testDeterministicBuild() {
  const first = await mkdtemp(path.join(os.tmpdir(), "cap8-natural-a-"));
  const second = await mkdtemp(path.join(os.tmpdir(), "cap8-natural-b-"));
  try {
    await buildIntegratedNatural({ repoRoot, outputRoot: first });
    await buildIntegratedNatural({ repoRoot, outputRoot: second });
    assert.deepEqual(await fileHashes(path.join(first, "自然會考作戰室")), await fileHashes(path.join(second, "自然會考作戰室")));
  } finally {
    await rm(first, { recursive: true, force: true });
    await rm(second, { recursive: true, force: true });
  }
}

async function testEngine() {
  const catalog = JSON.parse(await readFile(path.join(repoRoot, "自然會考作戰室", "runtime", "catalog.json"), "utf8"));
  assert.equal(normalizeSeed("  demo  "), "demo");
  assert.equal(normalizeSeed(""), "1");
  assert.throws(() => subjectQuotas(44), RangeError);
  assert.throws(() => subjectQuotas(56), RangeError);
  for (let count = 45; count <= 55; count += 1) {
    const quotas = subjectQuotas(count);
    assert.equal(Object.values(quotas).reduce((sum, value) => sum + value, 0), count);
    const first = createExam(catalog, { seed: "stable", count });
    const second = createExam(catalog, { seed: "stable", count });
    assert.deepEqual(first, second);
    assert.equal(first.entries.length, count);
  }
  assert.notDeepEqual(
    createExam(catalog, { seed: "one", count: 50 }).entries.map((entry) => entry.questionId),
    createExam(catalog, { seed: "two", count: 50 }).entries.map((entry) => entry.questionId),
  );
}

function testMigration() {
  const legacyBiology = JSON.stringify({ completedSkillIds: ["BIO_R4_S001", "BIO_R4_S002"] });
  const legacyPhysics = JSON.stringify({ completed: ["PHYCHM_R4_S001"] });
  const storage = new MemoryStorage({
    "cap8.r4.biology.progress.v1": legacyBiology,
    "capPhysics.oldProgress": legacyPhysics,
    "unrelated.key": "keep-me",
  });
  const first = migrateStorage(storage);
  assert.deepEqual(first.legacy.completedSkillIds, ["BIO_R4_S001", "BIO_R4_S002", "PHYCHM_R4_S001"]);
  assert.equal(storage.getItem("cap8.r4.biology.progress.v1"), legacyBiology, "不得刪改分科進度");
  assert.equal(storage.getItem("capPhysics.oldProgress"), legacyPhysics, "不得刪改舊版進度");
  assert.equal(storage.getItem("unrelated.key"), "keep-me");
  const backup = JSON.parse(storage.getItem(LEGACY_BACKUP_KEY));
  assert.equal(backup.raw["cap8.r4.biology.progress.v1"], legacyBiology);
  assert.deepEqual(migrateStorage(storage), first, "重複遷移必須冪等");

  const broken = new MemoryStorage({ [PROGRESS_KEY]: "{bad-json" });
  const recovered = migrateStorage(broken);
  assert.equal(recovered.schemaVersion, 1);
  assert.equal(broken.getItem(INVALID_BACKUP_KEY), "{bad-json");

  const largeIds = Array.from({ length: 5000 }, (_, index) => `BIO_R4_S${String(index).padStart(4, "0")}`);
  const large = new MemoryStorage({ "capBio.large": JSON.stringify({ completedSkills: largeIds }) });
  assert.equal(migrateStorage(large).legacy.completedSkillIds.length, 5000);

  const progress = migrateStorage(new MemoryStorage());
  for (let index = 0; index < 35; index += 1) {
    recordAttempt(progress, { id: `exam-${index}`, mistakes: [{ questionId: `q-${index}`, skillId: "s", subject: "biology" }] });
  }
  assert.equal(progress.attempts.length, 30);
  assert.equal(progress.mistakeBook.length, 35);
  assert.equal(progress.activeSession, null);
}

async function testImportSideEffects() {
  const files = [
    path.join(repoRoot, "自然會考作戰室", "runtime", "catalog.json"),
    path.join(repoRoot, "自然會考作戰室", "runtime", "build-manifest.json"),
  ];
  const before = await Promise.all(files.map(async (file) => ({ hash: sha256(await readFile(file)), mtime: (await stat(file)).mtimeMs })));
  await import(`./integrated-natural-build.mjs?side-effect=${Date.now()}`);
  await import(`./integrated-natural-verify.mjs?side-effect=${Date.now()}`);
  const after = await Promise.all(files.map(async (file) => ({ hash: sha256(await readFile(file)), mtime: (await stat(file)).mtimeMs })));
  assert.deepEqual(after, before, "匯入工具不得寫入 repository");
}

await testDeterministicBuild();
await testEngine();
testMigration();
await testImportSideEffects();
const result = await verifyIntegratedNatural({ repoRoot });
assert.equal(result.questions, 55);
console.log("integrated-natural.test: OK — deterministic build, static selection, migration, offline manifest");
