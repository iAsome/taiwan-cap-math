import assert from "node:assert/strict";

import { HUMAN_PRODUCTION_CONFIG } from "../../human-runtime/config.mjs";
import {
  migrateHumanContentVersion,
  migrateHumanProductionStorage,
  retireLegacyMathStorage
} from "../../human-runtime/storage-migration.mjs";

class StorageMock {
  getItem(key) { return Object.hasOwn(this, key) ? this[key] : null; }
  setItem(key, value) { this[key] = String(value); }
  removeItem(key) { delete this[key]; }
  key(index) { return Object.keys(this)[index] ?? null; }
  get length() { return Object.keys(this).length; }
}

globalThis.localStorage = new StorageMock();
const prefix = HUMAN_PRODUCTION_CONFIG.storagePrefix;
const seed = (key, value) => localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));

seed("capMath.humanRc.r1.completed", ["u01", "u02"]);
seed("capMath.completed", ["u02", "u03"]);
seed("capMath.humanRc.r1.paperHistory", [{ id: "human-rc" }]);
seed("capMath.paperHistory", [{ id: "generated-old" }]);
seed("capMath.humanRc.r1.dark", "source-dark");
seed(`${prefix}dark`, "preserved-dark");
seed("capMath.humanRc.r1.lastSeed", "11527");
seed("capMath.lastQuizSeed", "2401");
seed("capMath.humanRc.r1.quizSignatures.u01", "human-signature");
seed("capMath.quizSignatures.u01", "generated-signature");
seed("capMath.quizSignatures.u02", "generated-u02");

const migration = migrateHumanProductionStorage();
assert.equal(migration.status, "COMPLETE");
assert.deepEqual(JSON.parse(localStorage.getItem(`${prefix}completed`)), ["u01", "u02", "u03"]);
assert.deepEqual(JSON.parse(localStorage.getItem(`${prefix}paperHistory`)), [{ id: "human-rc" }]);
assert.deepEqual(JSON.parse(localStorage.getItem(`${prefix}legacyPaperHistoryBackup`)), [{ id: "generated-old" }]);
assert.equal(localStorage.getItem(`${prefix}dark`), "preserved-dark");
assert.equal(localStorage.getItem(`${prefix}lastSeed`), "11527");
assert.equal(localStorage.getItem(`${prefix}lastQuizSeed`), "2401");
assert.equal(localStorage.getItem(`${prefix}quizSignatures.u01`), "human-signature");
assert.equal(localStorage.getItem(`${prefix}quizSignatures.u02`), "generated-u02");
assert.equal(localStorage.getItem("capMath.paperHistory") != null, true);
assert.deepEqual(migrateHumanProductionStorage(), migration);

const retirement = retireLegacyMathStorage();
assert.equal(retirement.status, "COMPLETE");
assert.equal(retirement.backupVerified, true);
for (const key of Object.keys(localStorage)) {
  assert(!["capMath.completed", "capMath.paperHistory", "capMath.dark", "capMath.lastSeed", "capMath.lastQuizSeed"].includes(key));
  assert(!key.startsWith("capMath.quizSignatures."));
  assert(!key.startsWith("capMath.humanRc.r1."));
}
assert.deepEqual(retireLegacyMathStorage(), retirement);

seed(`${prefix}contentVersion`, "old-version");
seed(`${prefix}paperHistory`, [{ id: "current-paper" }]);
const versionMigration = migrateHumanContentVersion("new-version");
assert.equal(versionMigration.status, "COMPLETE");
assert.equal(versionMigration.previousContentVersion, "old-version");
assert.equal(versionMigration.archivedPaperHistoryKey, `${prefix}paperHistoryBackup.old-version`);
assert.deepEqual(JSON.parse(localStorage.getItem(`${prefix}paperHistoryBackup.old-version`)), [{ id: "current-paper" }]);
assert.deepEqual(JSON.parse(localStorage.getItem(`${prefix}paperHistory`)), []);
assert.deepEqual(migrateHumanContentVersion("new-version"), versionMigration);

const emptyHistoryMigration = migrateHumanContentVersion("next-version");
assert.equal(emptyHistoryMigration.archivedPaperHistoryKey, null);
assert.equal(emptyHistoryMigration.sourceHistoryDeleted, false);
assert.equal(localStorage.getItem(`${prefix}contentVersion`), "next-version");

console.log(JSON.stringify({
  status: "PASS_STORAGE_MIGRATION_R4",
  mergedCompleted: 3,
  preservedHumanHistory: true,
  archivedGeneratedHistory: true,
  retirementIdempotent: true,
  contentVersionArchiveIdempotent: true
}));
