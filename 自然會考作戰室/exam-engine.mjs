export const SUBJECT_ORDER = Object.freeze(["physics_chemistry", "biology", "earth_science"]);
export const SUBJECT_LABELS = Object.freeze({
  physics_chemistry: "理化",
  biology: "生物",
  earth_science: "地球科學",
});

export function normalizeSeed(value) {
  const seed = String(value ?? "").trim();
  return seed ? seed.slice(0, 64) : "1";
}

function hash32(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function seededOrder(items, seed, key = (item) => item.questionId ?? item.id) {
  const normalized = normalizeSeed(seed);
  return [...items].sort((left, right) => {
    const leftKey = String(key(left));
    const rightKey = String(key(right));
    return hash32(`${normalized}:${leftKey}`) - hash32(`${normalized}:${rightKey}`)
      || leftKey.localeCompare(rightKey, "en");
  });
}

export function subjectQuotas(count, baseline = { physics_chemistry: 26, biology: 13, earth_science: 11 }) {
  if (!Number.isInteger(count) || count < 45 || count > 55) throw new RangeError("題數必須是 45 到 55 的整數。");
  const total = SUBJECT_ORDER.reduce((sum, subject) => sum + baseline[subject], 0);
  const exact = SUBJECT_ORDER.map((subject, order) => ({
    subject,
    order,
    value: count * baseline[subject] / total,
  }));
  const result = Object.fromEntries(exact.map(({ subject, value }) => [subject, Math.floor(value)]));
  let remaining = count - Object.values(result).reduce((sum, value) => sum + value, 0);
  for (const item of [...exact].sort((a, b) => (b.value % 1) - (a.value % 1) || a.order - b.order)) {
    if (!remaining) break;
    result[item.subject] += 1;
    remaining -= 1;
  }
  return result;
}

function selectedSubjectEntries(pool, subject, quota, seed) {
  const entries = pool.filter((entry) => entry.subject === subject);
  const required = entries.filter((entry) => entry.required);
  const optional = seededOrder(entries.filter((entry) => !entry.required), `${seed}:${subject}:select`);
  if (required.length > quota || entries.length < quota) throw new Error(`${subject} 題池不足以產生 ${quota} 題。`);
  return [...required, ...optional.slice(0, quota - required.length)];
}

function orderedBlocks(entries, seed) {
  const blocks = new Map();
  for (const entry of entries) {
    const blockId = entry.groupId || `single:${entry.questionId}`;
    if (!blocks.has(blockId)) blocks.set(blockId, []);
    blocks.get(blockId).push(entry);
  }
  const ordered = seededOrder(
    [...blocks].map(([id, values]) => ({ id, values })),
    `${seed}:blocks`,
    (block) => block.id,
  );
  return ordered.flatMap((block) => block.values.sort((a, b) => (a.groupOrder || 0) - (b.groupOrder || 0)));
}

export function createExam(catalog, { seed = "1", count = catalog?.exam?.defaultQuestions ?? 50 } = {}) {
  if (!catalog || !Array.isArray(catalog.pool) || !Array.isArray(catalog.questions)) throw new TypeError("整合自然題庫格式錯誤。");
  const normalizedSeed = normalizeSeed(seed);
  const numericCount = Number(count);
  const quotas = subjectQuotas(numericCount, catalog.exam.defaultSubjectCounts);
  const selected = SUBJECT_ORDER.flatMap((subject) => selectedSubjectEntries(catalog.pool, subject, quotas[subject], normalizedSeed));
  const ordered = orderedBlocks(selected, normalizedSeed);
  const questions = new Map(catalog.questions.map((question) => [question.id, question]));
  return {
    id: `CAP8_R4_INTEGRATED_NATURAL_${normalizedSeed}_${numericCount}`,
    seed: normalizedSeed,
    minutes: 70,
    questionCount: numericCount,
    quotas,
    entries: ordered.map((entry, index) => {
      const question = questions.get(entry.questionId);
      if (!question) throw new Error(`找不到靜態題目 ${entry.questionId}`);
      return { ...entry, number: index + 1, question };
    }),
  };
}
