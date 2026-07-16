const INDEX_URL = "./runtime/index.json";

export const HISTORY_STORAGE_KEY = "cap8.r4.history.v1";
export const HISTORY_BACKUP_KEY = "cap8.r4.history.migrationBackup.v1";

function emptyProgress() {
  return { completedSkills: [], attempts: [] };
}

function parseJson(value, fallback) {
  try { return value === null ? fallback : JSON.parse(value); }
  catch { return fallback; }
}

export function normalizeHistoryProgress(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return emptyProgress();
  return {
    ...value,
    completedSkills: [...new Set(Array.isArray(value.completedSkills) ? value.completedSkills.filter((item) => typeof item === "string") : [])].sort(),
    attempts: Array.isArray(value.attempts) ? value.attempts.filter((item) => item && typeof item === "object").slice(0, 50) : [],
  };
}

export function collectHistoryLegacySnapshot(storage) {
  const entries = {};
  for (let index = 0; index < storage.length; index += 1) {
    const key = storage.key(index);
    if (key?.startsWith("capHistory.")) entries[key] = storage.getItem(key);
  }
  return {
    schemaVersion: "cap8-r4-history-legacy-backup-v1",
    entries: Object.fromEntries(Object.entries(entries).sort(([left], [right]) => left.localeCompare(right, "en"))),
    previousV4Value: storage.getItem(HISTORY_STORAGE_KEY),
  };
}

function legacyAttempts(snapshot) {
  const papers = parseJson(snapshot.entries["capHistory.paperHistory"], []);
  if (!Array.isArray(papers)) return [];
  const seen = new Set();
  return papers.filter((paper) => paper && typeof paper === "object").slice(0, 50).map((paper, index) => ({
    legacyId: typeof paper.id === "string" ? paper.id : `legacy-paper-${index}`,
    seed: String(paper.exam?.seed ?? paper.seed ?? "舊版"),
    score: Number.isFinite(Number(paper.correct)) ? Number(paper.correct) : 0,
    total: Number.isFinite(Number(paper.total)) ? Number(paper.total) : 0,
    completedAt: typeof paper.finishedAt === "string" ? paper.finishedAt : null,
    migratedFrom: "capHistory.paperHistory",
  })).filter((paper) => {
    if (seen.has(paper.legacyId)) return false;
    seen.add(paper.legacyId);
    return true;
  });
}

export function migrateHistoryProgress(storage) {
  const snapshot = collectHistoryLegacySnapshot(storage);
  const existingBackup = parseJson(storage.getItem(HISTORY_BACKUP_KEY), null);
  if (!existingBackup || existingBackup.schemaVersion !== snapshot.schemaVersion) {
    try { storage.setItem(HISTORY_BACKUP_KEY, JSON.stringify(snapshot)); }
    catch {
      return { status: "backup-failed", progress: normalizeHistoryProgress(parseJson(snapshot.previousV4Value, null)), snapshot };
    }
  }

  const current = normalizeHistoryProgress(parseJson(snapshot.previousV4Value, null));
  const migrated = legacyAttempts(snapshot);
  const known = new Set(current.attempts.map((item) => item.legacyId).filter(Boolean));
  const legacyCompleted = parseJson(snapshot.entries["capHistory.completed"], []);
  const progress = normalizeHistoryProgress({
    ...current,
    attempts: [...migrated.filter((item) => !known.has(item.legacyId)), ...current.attempts].slice(0, 50),
    migration: {
      schemaVersion: "cap8-r4-history-progress-migration-v1",
      legacyKeys: Object.keys(snapshot.entries),
      unmappedCompleted: Array.isArray(legacyCompleted) ? legacyCompleted : [],
    },
  });
  try { storage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(progress)); }
  catch { return { status: "progress-write-failed", progress, snapshot }; }
  return { status: "migrated", progress, snapshot };
}

function seedState(seed) {
  let state = 2166136261;
  for (const character of String(seed)) {
    state ^= character.codePointAt(0);
    state = Math.imul(state, 16777619);
  }
  return state >>> 0;
}

function shuffle(values, seed) {
  const copy = [...values];
  let state = seedState(seed) || 1;
  for (let index = copy.length - 1; index > 0; index -= 1) {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    const target = (state >>> 0) % (index + 1);
    [copy[index], copy[target]] = [copy[target], copy[index]];
  }
  return copy;
}

export async function loadHistoryIndex() {
  const response = await fetch(INDEX_URL, { cache: "no-cache" });
  if (!response.ok) throw new Error(`無法載入歷史 R4 索引（${response.status}）`);
  return response.json();
}

export function createAssessment(index, {
  seed,
  skillIds = [],
  skillQuestionCount = 20,
  stimulusSetCount = 2,
} = {}) {
  const allowed = skillIds.length ? new Set(skillIds) : null;
  const skillQuestions = index.questions.filter((item) => !item.stimulusId && (!allowed || item.skillIds.some((id) => allowed.has(id))));
  const stimuli = index.stimuli.filter((item) => !allowed || item.skillIds.some((id) => allowed.has(id)));
  const selectedSkill = shuffle(skillQuestions, `${seed}:skill`).slice(0, Math.min(skillQuestionCount, skillQuestions.length));
  const selectedStimuli = shuffle(stimuli, `${seed}:stimulus`).slice(0, Math.min(stimulusSetCount, stimuli.length));
  const selectedStimulusIds = new Set(selectedStimuli.map((item) => item.id));
  const stimulusQuestions = index.questions.filter((item) => item.stimulusId && selectedStimulusIds.has(item.stimulusId));
  const grouped = selectedStimuli.flatMap((stimulus) => shuffle(
    stimulusQuestions.filter((question) => question.stimulusId === stimulus.id),
    `${seed}:${stimulus.id}`,
  ));
  return {
    seed: String(seed),
    stimulusIds: selectedStimuli.map((item) => item.id),
    questionIds: [...selectedSkill, ...grouped].map((item) => item.id),
  };
}

export async function loadRecords(index, ids) {
  const byId = new Map([...index.questions, ...index.lectures, ...index.stimuli, ...(index.assets ?? [])].map((item) => [item.id, item.path]));
  return Promise.all(ids.map(async (id) => {
    const recordPath = byId.get(id);
    if (!recordPath) throw new Error(`索引中找不到 ${id}`);
    const response = await fetch(recordPath);
    if (!response.ok) throw new Error(`無法載入 ${id}（${response.status}）`);
    return response.json();
  }));
}

export async function cacheAllHistoryContent(index, onProgress = () => {}) {
  if (!("caches" in globalThis)) throw new Error("此瀏覽器不支援離線快取");
  const cache = await caches.open(`cap8-r4-history-${index.contentVersion}`);
  const urls = [...new Set(index.offlineUrls)];
  for (let start = 0; start < urls.length; start += 25) {
    try { await cache.addAll(urls.slice(start, start + 25)); }
    catch { throw new Error(`離線下載在第 ${start + 1} 至 ${Math.min(start + 25, urls.length)} 個檔案失敗，請保持連線後重試。`); }
    onProgress(Math.min(start + 25, urls.length), urls.length);
  }
  return urls.length;
}
