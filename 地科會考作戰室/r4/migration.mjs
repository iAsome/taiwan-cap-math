export const LEGACY_KEYS = Object.freeze([
  "capEarth.completed",
  "capEarth.paperHistory",
  "capEarth.lastSeed",
  "capEarth.dark",
  ...Array.from({ length: 20 }, (_, index) => `capEarth.quizSignatures.u${index + 1}`),
  ...Array.from({ length: 5 }, (_, index) => `capEarth.quizSignatures.d${index + 1}-all`),
]);

export const BACKUP_KEY = "cap8.r4.earth_science.legacyBackup.v1";
export const PROGRESS_KEY = "cap8.r4.earth_science.progress.v1";

function safeJson(value, fallback) {
  if (value === null) return fallback;
  try {
    return JSON.parse(value) ?? fallback;
  } catch {
    return fallback;
  }
}

export function migrateLegacyStorage(storage = localStorage) {
  const discovered = [];
  if (Number.isInteger(storage.length) && typeof storage.key === "function") {
    for (let index = 0; index < storage.length; index += 1) {
      const key = storage.key(index);
      if (key?.startsWith("capEarth.")) discovered.push(key);
    }
  }
  const legacyKeys = [...new Set([...LEGACY_KEYS, ...discovered])].sort();
  if (storage.getItem(BACKUP_KEY) === null) {
    const raw = Object.fromEntries(legacyKeys.map((key) => [key, storage.getItem(key)]));
    try {
      storage.setItem(BACKUP_KEY, JSON.stringify({ schemaVersion: 1, raw, previousProgress: storage.getItem(PROGRESS_KEY) }));
    } catch {
      // ponytail: source keys are never deleted, so quota failure remains lossless and may be retried later.
    }
  }
  const current = safeJson(storage.getItem(PROGRESS_KEY), {});
  const legacyCompleted = safeJson(storage.getItem("capEarth.completed"), []);
  const history = safeJson(storage.getItem("capEarth.paperHistory"), []);
  const progress = {
    schemaVersion: 1,
    completedSkillIds: Array.isArray(current.completedSkillIds) ? current.completedSkillIds : [],
    attempts: current.attempts && typeof current.attempts === "object" ? current.attempts : {},
    legacy: {
      completedUnits: Array.isArray(legacyCompleted) ? legacyCompleted : [],
      paperHistoryCount: Array.isArray(history) ? history.length : 0,
      importedAtVersion: 1,
    },
  };
  try {
    storage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch {
    // Existing capEarth.* data remains untouched when storage is unavailable.
  }
  return progress;
}

export function saveProgress(progress, storage = localStorage) {
  try {
    storage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    return true;
  } catch {
    return false;
  }
}
