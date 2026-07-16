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

export async function auditHistorySimilarity({ unitIds = Array.from({ length: 36 }, (_, index) => `HIS_R4_U${String(index + 1).padStart(2, "0")}`) } = {}) {
  const units = [];
  for (const unitId of unitIds) {
    const source = await loadHistoryUnitSource(unitId, { repoRoot: ROOT });
    units.push(await materializeHistoryUnit(source, { graphPath: GRAPH_PATH }));
  }
  const questions = units.flatMap((unit) => [...unit.questions, ...unit.stimulusQuestions]);
  const questionRecords = questions.map((question) => ({ id: question.id, text: questionText(question) }));
  const rationales = questions.flatMap((question) => question.optionRationales.map((item) => ({ id: `${question.id}:${item.optionIndex}`, text: item.reason })));
  const reviewEvidence = questions.flatMap((question) => question.independentReviews.map((item, index) => ({ id: `${question.id}:review-${index + 1}`, text: item.evidence })));
  const candidates = similarityCandidates(questionRecords);
  const blockingCandidates = candidates.filter((candidate) => candidate.score >= 0.9);
  return {
    units: unitIds.length,
    questions: questions.length,
    normalizedQuestionDuplicateGroups: exactDuplicateGroups(questionRecords),
    normalizedRationaleDuplicateGroups: exactDuplicateGroups(rationales),
    normalizedReviewEvidenceDuplicateGroups: exactDuplicateGroups(reviewEvidence),
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
    normalizedRationaleDuplicateGroups: result.normalizedRationaleDuplicateGroups.length,
    normalizedReviewEvidenceDuplicateGroups: result.normalizedReviewEvidenceDuplicateGroups.length,
    similarityCandidates: result.candidates.slice(0, 30).map(({ left, right, score }) => ({ left, right, score: Number(score.toFixed(4)) })),
    blockingCandidates: result.blockingCandidates.map(({ left, right, score }) => ({ left, right, score: Number(score.toFixed(4)) })),
  }, null, 2));
  assert.equal(result.normalizedQuestionDuplicateGroups.length, 0, "History has normalized question duplicates");
  assert.equal(result.normalizedRationaleDuplicateGroups.length, 0, "History has normalized option-rationale duplicates");
  assert.equal(result.normalizedReviewEvidenceDuplicateGroups.length, 0, "History has normalized independent-review duplicates");
  assert.equal(result.blockingCandidates.length, 0, "History has unresolved extremely similar question candidates");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
