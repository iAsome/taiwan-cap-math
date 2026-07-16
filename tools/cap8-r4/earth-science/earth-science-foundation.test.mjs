import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { selectReviewedQuestionIds } from "../../../地科會考作戰室/r4/assessment.mjs";
import { BACKUP_KEY, migrateLegacyStorage, PROGRESS_KEY, saveProgress } from "../../../地科會考作戰室/r4/migration.mjs";
import { collectEarthCalibration } from "./build-official-calibration.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..", "..");

class MemoryStorage {
  values = new Map();
  get length() { return this.values.size; }
  key(index) { return [...this.values.keys()][index] ?? null; }
  getItem(key) { return this.values.has(key) ? this.values.get(key) : null; }
  setItem(key, value) { this.values.set(key, String(value)); }
}

const unit = {
  id: "EARTH_R4_U01",
  skills: Array.from({ length: 2 }, (_, skill) => ({
    questionIds: Array.from({ length: 12 }, (_, question) => `Q${skill}-${question}`),
    stimulusQuestionIds: Array.from({ length: 3 }, (_, question) => `SQ${skill}-${question}`),
  })),
};
assert.deepEqual(selectReviewedQuestionIds(unit, "42"), selectReviewedQuestionIds(unit, "42"));
assert.notDeepEqual(selectReviewedQuestionIds(unit, "42"), selectReviewedQuestionIds(unit, "43"));
assert.equal(selectReviewedQuestionIds(unit, "42").length, 20);
assert(selectReviewedQuestionIds(unit, "42", 30).some((id) => id.startsWith("SQ")), "shared-stimulus questions must be reachable");

const storage = new MemoryStorage();
storage.setItem("capEarth.completed", "not-json");
storage.setItem("capEarth.paperHistory", JSON.stringify([{ id: "legacy-paper" }]));
storage.setItem("capEarth.futureKey", "must-survive");
storage.setItem(PROGRESS_KEY, "corrupt-current-progress");
const progress = migrateLegacyStorage(storage);
assert.deepEqual(progress.legacy.completedUnits, []);
assert.equal(progress.legacy.paperHistoryCount, 1);
assert(storage.getItem(PROGRESS_KEY));
const backup = JSON.parse(storage.getItem(BACKUP_KEY));
assert.equal(backup.raw["capEarth.completed"], "not-json");
assert.equal(backup.raw["capEarth.futureKey"], "must-survive");
assert.equal(backup.previousProgress, "corrupt-current-progress");
assert.equal(storage.getItem("capEarth.completed"), "not-json", "migration must not delete or rewrite legacy data");

const currentStorage = new MemoryStorage();
currentStorage.setItem(PROGRESS_KEY, JSON.stringify({ completedSkillIds: ["EARTH_R4_S001"], attempts: { a: { correct: 1, total: 1 } } }));
assert.deepEqual(migrateLegacyStorage(currentStorage).completedSkillIds, ["EARTH_R4_S001"]);

class FullStorage extends MemoryStorage {
  setItem() { throw new Error("quota exceeded"); }
}
const full = new FullStorage();
full.values.set("capEarth.completed", "[1]");
assert.deepEqual(migrateLegacyStorage(full).legacy.completedUnits, [1]);
assert.equal(saveProgress({ schemaVersion: 1 }, full), false);

const calibration = await collectEarthCalibration();
assert.equal(calibration.mainCount, 131);
assert.equal(calibration.alternateCount, 37);

const r4Files = ["index.html", "app.mjs", "assessment.mjs", "migration.mjs", "styles.css", "sw.js"];
for (const name of r4Files) {
  const value = await readFile(path.join(REPO_ROOT, "地科會考作戰室", "r4", name), "utf8");
  assert(!value.includes("TEXT_ONLY_POLICY"), `${name}: legacy text-only runtime is reachable`);
  assert(!value.includes("quiz-taxonomy.js"), `${name}: legacy procedural quiz bank is reachable`);
}

console.log("earth-science-foundation.test: OK");
