import assert from "node:assert/strict";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadHistoryUnitSource, materializeHistoryUnit } from "./build-history-unit.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..", "..");
const GRAPH_PATH = path.join(ROOT, "tools", "cap8-r4", "authority", "frozen-authority-graph.json");

function normalize(value) {
  return String(value)
    .normalize("NFKC")
    .toLowerCase()
    .replace(/\d+(?:[.／/年月日至—–-]\d+)*/gu, "#")
    .replace(/[「」『』，。！？：；、,.!?;:'"()（）\[\]【】\s]/gu, "");
}

function normalizeStructure(value) {
  return String(value)
    .normalize("NFKC")
    .toLowerCase()
    .replace(/(?:西元(?:前)?|民國)/gu, "")
    .replace(/\d+(?:[.／/年月日至—–-]\d+)*/gu, "#")
    .replace(/[「」『』，。！？：；、,.!?;:'"()（）\[\]【】\s]/gu, "");
}

function grams(value, size = 4) {
  const text = normalize(value);
  const result = new Set();
  if (text.length < size) return new Set([text]);
  for (let index = 0; index <= text.length - size; index += 1) result.add(text.slice(index, index + size));
  return result;
}

function questionText(question) {
  return [question.stem, ...[...question.options].sort((left, right) => left.localeCompare(right, "zh-Hant"))].join("\n");
}

function questionStructure(question) {
  return [normalizeStructure(question.stem), ...question.options.map(normalizeStructure).sort((left, right) => left.localeCompare(right, "zh-Hant"))].join("\n");
}

function pairKey(left, right, total) {
  return left * total + right;
}

function pairIndexes(key, total) {
  return [Math.floor(key / total), key % total];
}

function similarityCandidates(records) {
  const sets = records.map((record) => grams(record.text));
  const posting = new Map();
  sets.forEach((set, index) => {
    for (const gram of set) {
      if (!posting.has(gram)) posting.set(gram, []);
      posting.get(gram).push(index);
    }
  });
  const intersections = new Map();
  for (const indexes of posting.values()) {
    if (indexes.length > 80) continue;
    for (let left = 0; left < indexes.length; left += 1) {
      for (let right = left + 1; right < indexes.length; right += 1) {
        const key = pairKey(indexes[left], indexes[right], records.length);
        intersections.set(key, (intersections.get(key) ?? 0) + 1);
      }
    }
  }
  return [...intersections]
    .filter(([, intersection]) => intersection >= 8)
    .map(([key, intersection]) => {
      const [left, right] = pairIndexes(key, records.length);
      return {
        left: records[left].id,
        right: records[right].id,
        score: (2 * intersection) / (sets[left].size + sets[right].size),
        leftText: records[left].text,
        rightText: records[right].text,
      };
    })
    .filter((candidate) => candidate.score >= 0.72)
    .sort((left, right) => right.score - left.score || left.left.localeCompare(right.left, "en") || left.right.localeCompare(right.right, "en"));
}

function exactDuplicateGroups(records) {
  const grouped = new Map();
  for (const record of records) {
    const key = normalize(record.text);
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(record.id);
  }
  return [...grouped.values()].filter((ids) => ids.length > 1).sort((left, right) => left[0].localeCompare(right[0], "en"));
}

function exactKeyGroups(records) {
  const grouped = new Map();
  for (const record of records) {
    if (!grouped.has(record.key)) grouped.set(record.key, []);
    grouped.get(record.key).push(record.id);
  }
  return [...grouped.values()].filter((ids) => ids.length > 1).sort((left, right) => left[0].localeCompare(right[0], "en"));
}

function visibleLength(value) {
  return [...String(value).replace(/\s+/gu, "")].length;
}

function optionLengthFinding(question) {
  const lengths = question.options.map(visibleLength);
  const maximum = Math.max(...lengths);
  const minimum = Math.min(...lengths);
  if (maximum <= 50 && maximum - minimum <= 29 && visibleLength(question.stem) <= 65) return null;
  return { id: question.id, stemLength: visibleLength(question.stem), optionLengths: lengths, optionRange: maximum - minimum };
}

const UNMARKED_SOURCE_CLAIM = /(?:官方|政府|政策|美國|蘇聯)?報告稱|證詞記載/u;
const VAGUE_RATIONALE = /^(?:此項)?(?:不正確|不符題意|不符合題意|不是答案|與題意無關|與問題無關)[。.]?$/u;

function titleLeakFinding(question, stimuliById) {
  if (!question.stimulusId || !/(?:標題|主旨|主題)/u.test(question.stem)) return null;
  const label = stimuliById.get(question.stimulusId)?.content?.label;
  if (!label) return null;
  const normalizedLabel = normalize(label);
  const normalizedAnswer = normalize(question.options[question.answerIndex]);
  if (normalizedLabel.length < 4 || (!normalizedAnswer.includes(normalizedLabel) && !normalizedLabel.includes(normalizedAnswer))) return null;
  return { id: question.id, stimulusId: question.stimulusId, label, answer: question.options[question.answerIndex] };
}

export async function auditHistorySimilarity({ unitIds = Array.from({ length: 36 }, (_, index) => `HIS_R4_U${String(index + 1).padStart(2, "0")}`) } = {}) {
  const units = [];
  for (const unitId of unitIds) {
    const source = await loadHistoryUnitSource(unitId, { repoRoot: ROOT });
    units.push(await materializeHistoryUnit(source, { graphPath: GRAPH_PATH }));
  }
  const skillQuestions = units.flatMap((unit) => unit.questions);
  const questions = units.flatMap((unit) => [...unit.questions, ...unit.stimulusQuestions]);
  const stimuliById = new Map(units.flatMap((unit) => unit.stimuli).map((stimulus) => [stimulus.id, stimulus]));
  const questionRecords = questions.map((question) => ({ id: question.id, text: questionText(question) }));
  const rationales = questions.flatMap((question) => question.optionRationales.map((item) => ({ id: `${question.id}:${item.optionIndex}`, text: item.reason })));
  const reviewEvidence = questions.flatMap((question) => question.independentReviews.map((item, index) => ({ id: `${question.id}:review-${index + 1}`, text: item.evidence })));
  const candidates = similarityCandidates(questionRecords);
  const blockingCandidates = candidates.filter((candidate) => candidate.score >= 0.9);
  return {
    units: unitIds.length,
    questions: questions.length,
    normalizedQuestionDuplicateGroups: exactDuplicateGroups(questionRecords),
    structuralQuestionDuplicateGroups: exactKeyGroups(questions.map((question) => ({ id: question.id, key: questionStructure(question) }))),
    normalizedRationaleDuplicateGroups: exactDuplicateGroups(rationales),
    normalizedReviewEvidenceDuplicateGroups: exactDuplicateGroups(reviewEvidence),
    optionLengthFindings: questions.map(optionLengthFinding).filter(Boolean),
    unmarkedSourceClaims: skillQuestions.filter((question) => UNMARKED_SOURCE_CLAIM.test(question.stem)).map((question) => ({ id: question.id, stem: question.stem })),
    vagueRationaleFindings: questions.flatMap((question) => question.optionRationales.filter((item) => VAGUE_RATIONALE.test(item.reason.trim())).map((item) => ({ id: question.id, optionIndex: item.optionIndex, reason: item.reason }))),
    titleLeakFindings: questions.map((question) => titleLeakFinding(question, stimuliById)).filter(Boolean),
    candidates,
    blockingCandidates,
  };
}

async function main() {
  const requested = process.argv.slice(2);
  const result = await auditHistorySimilarity({ unitIds: requested.length ? requested : undefined });
  console.log(JSON.stringify({
    units: result.units,
    questions: result.questions,
    normalizedQuestionDuplicateGroups: result.normalizedQuestionDuplicateGroups.length,
    structuralQuestionDuplicateGroups: result.structuralQuestionDuplicateGroups,
    normalizedRationaleDuplicateGroups: result.normalizedRationaleDuplicateGroups.length,
    normalizedReviewEvidenceDuplicateGroups: result.normalizedReviewEvidenceDuplicateGroups.length,
    optionLengthFindings: result.optionLengthFindings,
    unmarkedSourceClaims: result.unmarkedSourceClaims,
    vagueRationaleFindings: result.vagueRationaleFindings,
    titleLeakFindings: result.titleLeakFindings,
    similarityCandidates: result.candidates.slice(0, 30).map(({ left, right, score }) => ({ left, right, score: Number(score.toFixed(4)) })),
    blockingCandidates: result.blockingCandidates.map(({ left, right, score }) => ({ left, right, score: Number(score.toFixed(4)) })),
  }, null, 2));
  assert.equal(result.normalizedQuestionDuplicateGroups.length, 0, "History has normalized question duplicates");
  assert.equal(result.structuralQuestionDuplicateGroups.length, 0, "History has numeric or era-swapped question structures");
  assert.equal(result.normalizedRationaleDuplicateGroups.length, 0, "History has normalized option-rationale duplicates");
  assert.equal(result.normalizedReviewEvidenceDuplicateGroups.length, 0, "History has normalized independent-review duplicates");
  assert.equal(result.optionLengthFindings.length, 0, "History has answer-signaling or overly long option sets");
  assert.equal(result.unmarkedSourceClaims.length, 0, "History skill question presents an unmarked report or testimony claim");
  assert.equal(result.vagueRationaleFindings.length, 0, "History has a vague option rationale");
  assert.equal(result.titleLeakFindings.length, 0, "History stimulus title leaks a title or main-idea answer");
  assert.equal(result.blockingCandidates.length, 0, "History has unresolved extremely similar question candidates");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
