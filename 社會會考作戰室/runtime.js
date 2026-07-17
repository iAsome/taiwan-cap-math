export const SOCIAL_STORAGE_KEY = "cap8.r4.integratedSocial.v1";
export const SOCIAL_BACKUP_KEY = "cap8.r4.integratedSocial.migrationBackup.v1";

const SUBJECTS = ["geography", "history", "civics"];
const DIFFICULTIES = ["standard", "advanced", "transfer"];

function parseJson(value, fallback) {
  try { return value === null ? fallback : JSON.parse(value); }
  catch { return fallback; }
}

export function normalizeSocialProgress(value) {
  const source = value && typeof value === "object" && !Array.isArray(value) ? value : {};
  const count = Number(source.questionCount);
  return {
    schemaVersion: "cap8-r4-integrated-social-progress-v1",
    lastSeed: typeof source.lastSeed === "string" && source.lastSeed.trim() ? source.lastSeed : "115",
    questionCount: Number.isInteger(count) && count >= 50 && count <= 60 ? count : 54,
    attempts: Array.isArray(source.attempts) ? source.attempts.filter((attempt) => attempt && typeof attempt === "object").slice(0, 50) : [],
    migration: source.migration && typeof source.migration === "object" ? source.migration : null,
  };
}

export function collectSocialLegacySnapshot(storage) {
  const entries = {};
  for (let index = 0; index < storage.length; index += 1) {
    const key = storage.key(index);
    if (key?.startsWith("capSocial.") || key?.startsWith("cap8.r4.social.")) entries[key] = storage.getItem(key);
  }
  return {
    schemaVersion: "cap8-r4-integrated-social-legacy-backup-v1",
    entries: Object.fromEntries(Object.entries(entries).sort(([left], [right]) => left.localeCompare(right, "en"))),
    previousV4Value: storage.getItem(SOCIAL_STORAGE_KEY),
  };
}

function legacyAttempts(snapshot) {
  const candidates = ["capSocial.paperHistory", "capSocial.attempts", "cap8.r4.social.attempts"];
  const attempts = [];
  for (const key of candidates) {
    const values = parseJson(snapshot.entries[key], []);
    if (!Array.isArray(values)) continue;
    values.forEach((value, index) => {
      if (!value || typeof value !== "object") return;
      attempts.push({
        legacyId: `${key}:${String(value.id ?? index)}`,
        seed: String(value.seed ?? value.exam?.seed ?? "舊版"),
        score: Number.isFinite(Number(value.score ?? value.correct)) ? Number(value.score ?? value.correct) : 0,
        total: Number.isFinite(Number(value.total)) ? Number(value.total) : 0,
        completedAt: typeof value.completedAt === "string" ? value.completedAt : typeof value.finishedAt === "string" ? value.finishedAt : null,
        migratedFrom: key,
      });
    });
  }
  return attempts;
}

export function migrateSocialProgress(storage) {
  const snapshot = collectSocialLegacySnapshot(storage);
  const priorBackup = parseJson(storage.getItem(SOCIAL_BACKUP_KEY), null);
  if (!priorBackup || priorBackup.schemaVersion !== snapshot.schemaVersion) {
    try { storage.setItem(SOCIAL_BACKUP_KEY, JSON.stringify(snapshot)); }
    catch { return { status: "backup-failed", progress: normalizeSocialProgress(parseJson(snapshot.previousV4Value, null)), snapshot }; }
  }
  const progress = normalizeSocialProgress(parseJson(snapshot.previousV4Value, null));
  const known = new Set(progress.attempts.map((attempt) => attempt.legacyId).filter(Boolean));
  const migrated = legacyAttempts(snapshot).filter((attempt) => !known.has(attempt.legacyId));
  const next = normalizeSocialProgress({
    ...progress,
    attempts: [...migrated, ...progress.attempts].slice(0, 50),
    migration: {
      schemaVersion: snapshot.schemaVersion,
      legacyKeys: Object.keys(snapshot.entries),
      preservedInBackup: true,
    },
  });
  try { storage.setItem(SOCIAL_STORAGE_KEY, JSON.stringify(next)); }
  catch { return { status: "progress-write-failed", progress: next, snapshot }; }
  return { status: migrated.length ? "migrated" : "current", progress: next, snapshot };
}

function seedState(seed) {
  let state = 2166136261;
  for (const character of String(seed)) {
    state ^= character.codePointAt(0);
    state = Math.imul(state, 16777619);
  }
  return state >>> 0;
}

export function orderStaticIds(ids, seed) {
  const copy = [...ids];
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

export function allocateSubjectCounts(questionCount, weights) {
  if (!Number.isInteger(questionCount) || questionCount < 50 || questionCount > 60) throw new Error("題數必須介於 50 至 60");
  const totalWeight = SUBJECTS.reduce((sum, subject) => sum + weights[subject], 0);
  const rows = SUBJECTS.map((subject) => {
    const exact = questionCount * weights[subject] / totalWeight;
    return { subject, count: Math.floor(exact), remainder: exact - Math.floor(exact) };
  });
  let remaining = questionCount - rows.reduce((sum, row) => sum + row.count, 0);
  for (const row of [...rows].sort((left, right) => right.remainder - left.remainder || weights[right.subject] - weights[left.subject] || left.subject.localeCompare(right.subject, "en"))) {
    if (remaining === 0) break;
    row.count += 1;
    remaining -= 1;
  }
  return Object.fromEntries(rows.map((row) => [row.subject, row.count]));
}

function allocateDifficultyCounts(total, seed) {
  const counts = Object.fromEntries(DIFFICULTIES.map((difficulty) => [difficulty, Math.floor(total / DIFFICULTIES.length)]));
  const order = orderStaticIds(DIFFICULTIES, seed);
  for (let index = 0; index < total % DIFFICULTIES.length; index += 1) counts[order[index]] += 1;
  return counts;
}

export function createSocialAssessment(catalog, { seed = "115", questionCount = 54 } = {}) {
  const count = Number(questionCount);
  if (!Number.isInteger(count) || count < catalog.officialCalibration.minimumQuestions || count > catalog.officialCalibration.maximumQuestions) throw new Error("題數必須介於 50 至 60");
  const questionById = new Map(catalog.questions.map((question) => [question.id, question]));
  const setById = new Map(catalog.blueprint.crossDomainSets.map((set) => [set.id, set]));
  const setsBySubject = Object.fromEntries(SUBJECTS.map((subject) => [subject, catalog.blueprint.crossDomainSets.filter((set) => set.subject === subject)]));
  const selectedSets = [
    orderStaticIds(setsBySubject.geography.map((set) => set.id), `${seed}:set:geography`)[0],
    ...orderStaticIds(setsBySubject.history.map((set) => set.id), `${seed}:set:history`).slice(0, 2),
    orderStaticIds(setsBySubject.civics.map((set) => set.id), `${seed}:set:civics`)[0],
  ].map((id) => setById.get(id));

  const quotas = allocateSubjectCounts(count, catalog.officialCalibration.defaultSubjectCounts);
  const setQuestionCounts = Object.fromEntries(SUBJECTS.map((subject) => [subject, selectedSets.filter((set) => set.subject === subject).reduce((sum, set) => sum + set.questionIds.length, 0)]));
  const selectedSingleIds = [];
  for (const subject of SUBJECTS) {
    const needed = quotas[subject] - setQuestionCounts[subject];
    if (needed < 0) throw new Error(`${subject}: 題組題數超過配額`);
    const difficultyCounts = allocateDifficultyCounts(needed, `${seed}:difficulty:${subject}`);
    for (const difficulty of DIFFICULTIES) {
      const candidates = catalog.blueprint.singleQuestionIds[subject].filter((id) => questionById.get(id)?.difficulty === difficulty);
      if (candidates.length < difficultyCounts[difficulty]) throw new Error(`${subject}: ${difficulty} 候選不足`);
      selectedSingleIds.push(...orderStaticIds(candidates, `${seed}:single:${subject}:${difficulty}`).slice(0, difficultyCounts[difficulty]));
    }
  }

  const orderedSingles = orderStaticIds(selectedSingleIds, `${seed}:single-order`);
  const orderedSets = orderStaticIds(selectedSets.map((set) => set.id), `${seed}:set-order`).map((id) => setById.get(id));
  const setQuestionIds = orderedSets.flatMap((set) => set.questionIds);
  const questionIds = [...orderedSingles, ...setQuestionIds];
  if (questionIds.length !== count || new Set(questionIds).size !== count) throw new Error("考卷題數或唯一性驗證失敗");
  return {
    seed: String(seed),
    questionCount: count,
    minutes: catalog.officialCalibration.minutes,
    subjectCounts: quotas,
    singleQuestionIds: orderedSingles,
    setIds: orderedSets.map((set) => set.id),
    stimulusIds: orderedSets.map((set) => set.stimulusId),
    questionIds,
  };
}

export async function loadSocialCatalog() {
  const response = await fetch("./runtime/catalog.json", { cache: "no-cache" });
  if (!response.ok) throw new Error(`無法載入整合社會題庫（${response.status}）`);
  return response.json();
}
