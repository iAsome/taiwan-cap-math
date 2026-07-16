export const STORAGE_KEY = "cap8.r4.geography.progress.v1";
export const LEGACY_BACKUP_KEY = "cap8.r4.geography.legacy-backup.v1";
export const MIGRATION_KEY = "cap8.r4.geography.migration.v1";
export const MIGRATION_VERSION = "2";
export const THEME_KEY = "cap8.r4.geography.theme";

export function emptyProgress() {
  return { schemaVersion: 1, completedSkillIds: [], results: {}, lastSkillId: null, updatedAt: null };
}

export function loadProgress(storage) {
  try {
    const parsed = JSON.parse(storage.getItem(STORAGE_KEY) || "null");
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed) && (parsed.schemaVersion == null || parsed.schemaVersion === 1)) return {
      ...parsed,
      schemaVersion: 1,
      completedSkillIds: Array.isArray(parsed.completedSkillIds) ? [...new Set(parsed.completedSkillIds.filter((id) => typeof id === "string"))] : [],
      results: parsed.results && typeof parsed.results === "object" && !Array.isArray(parsed.results) ? parsed.results : {},
      lastSkillId: typeof parsed.lastSkillId === "string" ? parsed.lastSkillId : null,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : null,
    };
  } catch {}
  return emptyProgress();
}

export function migrateLegacy(storage, progress, now = () => new Date().toISOString()) {
  try {
    if (storage.getItem(MIGRATION_KEY) === MIGRATION_VERSION) return progress;
    const raw = {};
    for (let index = 0; index < storage.length; index += 1) {
      const key = storage.key(index);
      if (key?.startsWith("capGeography.")) raw[key] = storage.getItem(key);
    }

    let completedUnitIds = [];
    try {
      const completed = JSON.parse(raw["capGeography.completed"] || "[]");
      if (Array.isArray(completed)) completedUnitIds = [...new Set(completed.map(Number).filter((id) => Number.isInteger(id) && id >= 1 && id <= 20))].sort((a, b) => a - b);
    } catch {}

    let paperHistoryCount = 0;
    try {
      const history = JSON.parse(raw["capGeography.paperHistory"] || "[]");
      if (Array.isArray(history)) paperHistoryCount = history.length;
    } catch {}

    let backupStatus = storage.getItem(LEGACY_BACKUP_KEY) ? "existing" : "complete";
    if (!storage.getItem(LEGACY_BACKUP_KEY)) {
      try { storage.setItem(LEGACY_BACKUP_KEY, JSON.stringify({ capturedAt: now(), values: raw })); }
      catch { backupStatus = "original-keys-retained"; }
    }

    progress.legacy = {
      schemaVersion: 1,
      completedUnitIds,
      paperHistoryCount,
      preservedKeys: Object.keys(raw).sort(),
      backupStatus,
      migratedAt: now(),
      note: "舊版 20 單元與 R4 240 技能沒有可靠的一對一對應，因此保留原始紀錄供查核，不擅自標記新技能完成。",
    };
    try { storage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch {}
    try {
      if (raw["capGeography.dark"] === "1" && !storage.getItem(THEME_KEY)) storage.setItem(THEME_KEY, "dark");
    } catch {}
    try { storage.setItem(MIGRATION_KEY, MIGRATION_VERSION); } catch {}
  } catch {
    // ponytail: Storage can be unavailable or full; legacy keys remain untouched, so continuing in memory is rollback-safe.
  }
  return progress;
}
