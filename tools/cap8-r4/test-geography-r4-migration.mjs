import assert from "node:assert/strict";
import {
  LEGACY_BACKUP_KEY,
  MIGRATION_KEY,
  MIGRATION_VERSION,
  STORAGE_KEY,
  THEME_KEY,
  emptyProgress,
  loadProgress,
  migrateLegacy,
} from "../../地理會考作戰室/r4/progress-migration.mjs";

class MemoryStorage {
  constructor(values = {}) { this.values = new Map(Object.entries(values)); this.failWrites = false; }
  get length() { return this.values.size; }
  key(index) { return [...this.values.keys()][index] ?? null; }
  getItem(key) { return this.values.has(key) ? this.values.get(key) : null; }
  setItem(key, value) { if (this.failWrites) throw new Error("quota exceeded"); this.values.set(key, String(value)); }
}

const NOW = () => "2026-07-16T00:00:00.000Z";

{
  const storage = new MemoryStorage();
  const progress = migrateLegacy(storage, loadProgress(storage), NOW);
  assert.deepEqual(progress.completedSkillIds, []);
  assert.deepEqual(progress.legacy.completedUnitIds, []);
  assert.equal(storage.getItem(MIGRATION_KEY), MIGRATION_VERSION);
  assert.deepEqual(JSON.parse(storage.getItem(LEGACY_BACKUP_KEY)).values, {});
}

{
  const original = {
    "capGeography.completed": "[1,1,\"2\",0,21]",
    "capGeography.paperHistory": "[{\"id\":1},{\"id\":2}]",
    "capGeography.dark": "1",
    "capGeography.notes": "保留我",
    unrelated: "不應收進備份",
  };
  const storage = new MemoryStorage(original);
  const progress = migrateLegacy(storage, emptyProgress(), NOW);
  assert.deepEqual(progress.legacy.completedUnitIds, [1, 2]);
  assert.equal(progress.legacy.paperHistoryCount, 2);
  assert.deepEqual(progress.legacy.preservedKeys, ["capGeography.completed", "capGeography.dark", "capGeography.notes", "capGeography.paperHistory"]);
  assert.equal(storage.getItem(THEME_KEY), "dark");
  assert.deepEqual(JSON.parse(storage.getItem(LEGACY_BACKUP_KEY)).values, Object.fromEntries(Object.entries(original).filter(([key]) => key.startsWith("capGeography."))));
  for (const [key, value] of Object.entries(original)) assert.equal(storage.getItem(key), value);
}

{
  const storage = new MemoryStorage({
    [STORAGE_KEY]: "{broken",
    "capGeography.completed": "not-json",
    "capGeography.paperHistory": "{}",
  });
  const progress = migrateLegacy(storage, loadProgress(storage), NOW);
  assert.deepEqual(progress.completedSkillIds, []);
  assert.deepEqual(progress.legacy.completedUnitIds, []);
  assert.equal(progress.legacy.paperHistoryCount, 0);
  assert.equal(storage.getItem("capGeography.completed"), "not-json");
}

{
  const storage = new MemoryStorage({
    [STORAGE_KEY]: JSON.stringify({ completedSkillIds: ["GEO_R4_S001", 3, "GEO_R4_S001"], results: [], lastSkillId: 9, custom: "keep" }),
  });
  const progress = loadProgress(storage);
  assert.equal(progress.schemaVersion, 1);
  assert.deepEqual(progress.completedSkillIds, ["GEO_R4_S001"]);
  assert.deepEqual(progress.results, {});
  assert.equal(progress.lastSkillId, null);
  assert.equal(progress.custom, "keep");
}

{
  const history = Array.from({ length: 5000 }, (_, id) => ({ id, score: id % 31 }));
  const originalHistory = JSON.stringify(history);
  const storage = new MemoryStorage({ "capGeography.completed": "[20]", "capGeography.paperHistory": originalHistory });
  storage.failWrites = true;
  const progress = migrateLegacy(storage, emptyProgress(), NOW);
  assert.deepEqual(progress.legacy.completedUnitIds, [20]);
  assert.equal(progress.legacy.paperHistoryCount, 5000);
  assert.equal(progress.legacy.backupStatus, "original-keys-retained");
  assert.equal(storage.getItem("capGeography.paperHistory"), originalHistory);
  assert.equal(storage.getItem(MIGRATION_KEY), null);
}

console.log("test-geography-r4-migration: OK - empty, legacy, corrupt, partial, and large/quota-failure states preserve data");
