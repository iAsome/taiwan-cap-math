import { HUMAN_PRODUCTION_CONFIG } from "./config.mjs";

const prefix = HUMAN_PRODUCTION_CONFIG.storagePrefix;
const markerKey = `${prefix}migration.r1`;

function parseJson(raw, fallback) {
  try { return raw == null ? fallback : JSON.parse(raw); }
  catch { return fallback; }
}
function uniqueStrings(values) {
  return [...new Set(values.filter(value => typeof value === "string" && value))];
}
function copyScalar(targetSuffix, sourceKeys) {
  const target = `${prefix}${targetSuffix}`;
  if (localStorage.getItem(target) != null) return { target, action: "preserved-existing" };
  for (const source of sourceKeys) {
    const value = localStorage.getItem(source);
    if (value != null) {
      localStorage.setItem(target, value);
      return { target, action: "copied", source };
    }
  }
  return { target, action: "no-source" };
}
function migrateCompleted() {
  const target = `${prefix}completed`;
  if (localStorage.getItem(target) != null) return { target, action: "preserved-existing" };
  const rc = parseJson(localStorage.getItem("capMath.humanRc.r1.completed"), []);
  const generated = parseJson(localStorage.getItem("capMath.completed"), []);
  const merged = uniqueStrings([...(Array.isArray(rc) ? rc : []), ...(Array.isArray(generated) ? generated : [])]);
  if (merged.length) {
    localStorage.setItem(target, JSON.stringify(merged));
    return { target, action: "merged", count: merged.length };
  }
  return { target, action: "no-source" };
}
function migrateHumanPaperHistory() {
  const target = `${prefix}paperHistory`;
  if (localStorage.getItem(target) != null) return { target, action: "preserved-existing" };
  const rcRaw = localStorage.getItem("capMath.humanRc.r1.paperHistory");
  if (rcRaw != null && Array.isArray(parseJson(rcRaw, null))) {
    localStorage.setItem(target, rcRaw);
    return { target, action: "copied-compatible-human-rc" };
  }
  return { target, action: "no-compatible-source" };
}
function archiveLegacyPaperHistory() {
  const target = `${prefix}legacyPaperHistoryBackup`;
  if (localStorage.getItem(target) != null) return { target, action: "preserved-existing" };
  const raw = localStorage.getItem("capMath.paperHistory");
  if (raw != null) {
    localStorage.setItem(target, raw);
    return { target, action: "archived-generated-history" };
  }
  return { target, action: "no-source" };
}
function migrateQuizSignatures() {
  const results = [];
  const keys = Object.keys(localStorage);
  for (const sourcePrefix of ["capMath.humanRc.r1.quizSignatures.", "capMath.quizSignatures."]) {
    for (const key of keys.filter(item => item.startsWith(sourcePrefix))) {
      const suffix = key.slice(sourcePrefix.length);
      const target = `${prefix}quizSignatures.${suffix}`;
      if (localStorage.getItem(target) == null) {
        localStorage.setItem(target, localStorage.getItem(key));
        results.push({ source: key, target, action: "copied" });
      }
    }
  }
  return results;
}
export function migrateHumanProductionStorage() {
  const existing = parseJson(localStorage.getItem(markerKey), null);
  if (existing?.status === "COMPLETE") return existing;
  const report = {
    status: "COMPLETE",
    schemaVersion: "math-v2-human-storage-migration-r1",
    migratedAt: new Date().toISOString(),
    completed: migrateCompleted(),
    paperHistory: migrateHumanPaperHistory(),
    legacyPaperHistoryBackup: archiveLegacyPaperHistory(),
    dark: copyScalar("dark", ["capMath.humanRc.r1.dark", "capMath.dark"]),
    lastSeed: copyScalar("lastSeed", ["capMath.humanRc.r1.lastSeed", "capMath.lastSeed"]),
    lastQuizSeed: copyScalar("lastQuizSeed", ["capMath.humanRc.r1.lastQuizSeed", "capMath.lastQuizSeed"]),
    quizSignatures: migrateQuizSignatures(),
    sourceKeysDeleted: false
  };
  localStorage.setItem(markerKey, JSON.stringify(report));
  return report;
}
