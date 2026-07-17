export const PROGRESS_KEY = "cap8.r4.integratedNatural.progress.v1";
export const LEGACY_BACKUP_KEY = "cap8.r4.integratedNatural.legacyBackup.v1";
export const INVALID_BACKUP_KEY = "cap8.r4.integratedNatural.invalidProgressBackup.v1";

const SUBJECT_PROGRESS_KEYS = Object.freeze([
  "cap8.r4.biology.progress.v1",
  "capR4.physicsChemistry.progress.v4",
  "cap8.r4.earth_science.progress.v1",
]);
const LEGACY_PREFIXES = Object.freeze(["capBiology.", "capBio.", "capPhysics.", "capChem.", "capEarth."]);

function safeParse(raw) {
  try { return raw === null ? null : JSON.parse(raw); }
  catch { return undefined; }
}

function safeGet(storage, key) {
  try { return storage.getItem(key); }
  catch { return null; }
}

function storageKeys(storage) {
  const keys = [];
  try {
    for (let index = 0; index < Number(storage.length || 0); index += 1) {
      const key = storage.key(index);
      if (key) keys.push(key);
    }
  } catch { return []; }
  return keys.sort();
}

function freshProgress() {
  return {
    schemaVersion: 1,
    attempts: [],
    mistakeBook: [],
    activeSession: null,
    legacy: { sourceKeys: [], completedSkillIds: [] },
  };
}

function isProgress(value) {
  return value && value.schemaVersion === 1 && Array.isArray(value.attempts)
    && Array.isArray(value.mistakeBook) && value.legacy && Array.isArray(value.legacy.sourceKeys);
}

function completedIds(value) {
  if (!value || typeof value !== "object") return [];
  for (const key of ["completedSkillIds", "completedSkills", "completed"]) {
    if (Array.isArray(value[key])) return value[key].filter((item) => typeof item === "string");
  }
  return [];
}

export function migrateStorage(storage = localStorage) {
  const currentRaw = safeGet(storage, PROGRESS_KEY);
  const parsed = safeParse(currentRaw);
  if (currentRaw !== null && !isProgress(parsed)) {
    try { storage.setItem(INVALID_BACKUP_KEY, currentRaw); } catch { /* Source data remains untouched. */ }
  }

  const progress = isProgress(parsed) ? parsed : freshProgress();
  const discovered = storageKeys(storage).filter((key) => LEGACY_PREFIXES.some((prefix) => key.startsWith(prefix)));
  const sourceKeys = [...new Set([...SUBJECT_PROGRESS_KEYS, ...discovered])].sort();
  if (safeGet(storage, LEGACY_BACKUP_KEY) === null) {
    const raw = Object.fromEntries(sourceKeys.map((key) => [key, safeGet(storage, key)]));
    try { storage.setItem(LEGACY_BACKUP_KEY, JSON.stringify({ schemaVersion: 1, raw, previousIntegratedProgress: currentRaw })); }
    catch { /* ponytail: source keys are never deleted, so quota failure stays lossless. */ }
  }

  const imported = sourceKeys.flatMap((key) => completedIds(safeParse(safeGet(storage, key))));
  progress.legacy = {
    sourceKeys: sourceKeys.filter((key) => safeGet(storage, key) !== null),
    completedSkillIds: [...new Set([...(progress.legacy.completedSkillIds || []), ...imported])].sort(),
  };
  saveProgress(progress, storage);
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

export function recordAttempt(progress, attempt) {
  progress.attempts = [...progress.attempts, attempt].slice(-30);
  const existing = new Map(progress.mistakeBook.map((item) => [item.questionId, item]));
  for (const item of attempt.mistakes) existing.set(item.questionId, item);
  progress.mistakeBook = [...existing.values()].slice(-200);
  progress.activeSession = null;
  return progress;
}
