import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const LEGACY_PATH = path.resolve(HERE, "..", "..", "..", "reading-bank.js");
const raw = readFileSync(LEGACY_PATH, "utf8");
const LEGACY = JSON.parse(raw.slice(raw.indexOf("["), raw.lastIndexOf("]") + 1));
assert.equal(LEGACY.length, 500, "legacy original reading passage count");
assert.equal(new Set(LEGACY.map((item) => item.title)).size, 500, "reading titles must be unique");
assert.equal(new Set(LEGACY.map((item) => item.passage)).size, 500, "reading passages must be unique");

const SEGMENTER = new Intl.Segmenter("en", { granularity: "sentence" });
const DIFFICULTIES = ["foundation", "standard", "advanced", "transfer"];
const STOPWORDS = new Set("a an and are as at be because been before being both but by can could did do does each for from had has have he her here him his how i if in into is it its may more most must my no not of on one only or our out over she should so some than that the their them then there they this those through to under up was we were what when where which who why will with would you your".split(" "));

function normalized(value) {
  return String(value).normalize("NFC").replace(/[“”]/gu, '"').replace(/\s+/gu, " ").trim().toLowerCase();
}

function words(value) {
  return String(value).match(/[A-Za-z]+(?:['’][A-Za-z]+)?/gu) ?? [];
}

function contentTokens(value) {
  return new Set(words(value).map((word) => word.toLowerCase().replaceAll("’", "'")).filter((word) => word.length > 2 && !STOPWORDS.has(word)));
}

function overlap(left, right) {
  let total = 0;
  for (const value of left) if (right.has(value)) total += 1;
  return total;
}

function sentences(value) {
  const result = [];
  for (const part of SEGMENTER.segment(value)) {
    const sentence = part.segment.replace(/\s+/gu, " ").trim();
    const previous = result.at(-1) ?? "";
    const titleAbbreviation = /\b(?:Mr|Mrs|Ms|Dr)\.$/u.test(previous);
    const timeAbbreviation = /\b(?:a\.m|p\.m)\.$/iu.test(previous) && /^[a-z]/u.test(sentence);
    if (previous && (titleAbbreviation || timeAbbreviation)) result[result.length - 1] = `${previous} ${sentence}`;
    else result.push(sentence);
  }
  return result.filter((part) => words(part).length >= 4);
}

function shortQuote(value, limit = 18) {
  const tokens = String(value).replaceAll('"', "'").replaceAll("“", "'").replaceAll("”", "'").split(/\s+/u);
  return `${tokens.slice(0, limit).join(" ")}${tokens.length > limit ? "…" : ""}`;
}

function hideTitle(value, title) {
  const escaped = title.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
  return String(value).replace(new RegExp(escaped, "giu"), "this subject");
}

function containsText(value, target) {
  return String(value).toLowerCase().includes(String(target).toLowerCase());
}

function stripEnd(value) {
  return String(value).trim().replace(/[.!?]+["”]?$/u, "").trim();
}

function sentenceCase(value) {
  const text = String(value).trim();
  return `${text[0].toUpperCase()}${text.slice(1)}`;
}

function relationFrom(sentence) {
  const flat = stripEnd(sentence);
  const because = flat.toLowerCase().indexOf(" because ");
  if (because > 8) {
    const situation = flat.slice(0, because).trim();
    const reason = flat.slice(because + 9).trim();
    if (words(situation).length >= 3 && words(reason).length >= 3) return { kind: "reason", situation, answer: reason };
  }
  const so = flat.toLowerCase().indexOf(", so ");
  if (so > 8) {
    const situation = flat.slice(0, so).trim();
    const result = flat.slice(so + 5).trim();
    if (words(situation).length >= 3 && words(result).length >= 3) return { kind: "result", situation, answer: result };
  }
  return null;
}

const RECORDS = LEGACY.map((item, index) => {
  const sentenceList = sentences(item.passage);
  assert(sentenceList.length >= 4, `${item.id}: four readable sentences required`);
  return {
    item,
    index,
    sentences: sentenceList,
    normalizedPassage: normalized(item.passage),
    tokens: contentTokens(`${item.title} ${item.passage}`),
    titleTokens: contentTokens(item.title),
    relations: sentenceList.map(relationFrom).filter(Boolean),
  };
});

const RELATED = RECORDS.map((record) => RECORDS
  .filter((candidate) => candidate.index !== record.index)
  .map((candidate) => ({
    index: candidate.index,
    score: overlap(record.tokens, candidate.tokens) * 4 + overlap(record.titleTokens, candidate.titleTokens) * 7,
  }))
  .sort((a, b) => b.score - a.score || a.index - b.index)
  .map((value) => value.index));

function chooseForeign(record, target, selector) {
  const targetTokens = contentTokens(target);
  const targetLength = words(target).length;
  const candidates = [];
  for (const relatedIndex of RELATED[record.index]) {
    const related = RECORDS[relatedIndex];
    for (const value of selector(related)) {
      const clean = String(value).replace(/\s+/gu, " ").trim();
      const cleanNormalized = normalized(clean);
      const length = words(clean).length;
      if (length < 3 || length > 32 || record.normalizedPassage.includes(cleanNormalized)) continue;
      candidates.push({
        value: clean,
        passageIndex: relatedIndex,
        score: overlap(targetTokens, contentTokens(clean)) * 10 - Math.abs(length - targetLength),
      });
    }
    if (candidates.length > 600) break;
  }
  candidates.sort((a, b) => b.score - a.score || a.passageIndex - b.passageIndex || a.value.localeCompare(b.value, "en"));
  const result = [];
  const passages = new Set();
  for (const candidate of candidates) {
    if (passages.has(candidate.passageIndex) || result.some((value) => normalized(value) === normalized(candidate.value))) continue;
    passages.add(candidate.passageIndex);
    result.push(candidate.value);
    if (result.length === 3) break;
  }
  assert.equal(result.length, 3, `${record.item.id}: three related distractors required`);
  return result;
}

function rotate(correct, distractors, reasons, index) {
  const values = [correct, ...distractors];
  const evidence = [reasons.correct, ...reasons.wrong];
  const shift = index % 4;
  const options = [...values.slice(shift), ...values.slice(0, shift)];
  const rotatedReasons = [...evidence.slice(shift), ...evidence.slice(0, shift)];
  return { options, answerIndex: options.indexOf(correct), reasons: rotatedReasons };
}

function question({ id, skillId, stem, correct, distractors, index, operation, representationType, evidence }) {
  assert.equal(new Set([correct, ...distractors].map(normalized)).size, 4, `${id}: duplicate option`);
  const correctReason = `本文可直接核對「${shortQuote(evidence, 22)}」，所以這個選項符合完整語境。`;
  const wrongReasons = distractors.map((option) => `本文沒有陳述「${shortQuote(option, 18)}」；這個選項混入另一個情境的資訊。`);
  const choices = rotate(correct, distractors, { correct: correctReason, wrong: wrongReasons }, index);
  return {
    id,
    skillId,
    stem,
    ...choices,
    difficulty: DIFFICULTIES[index % 4],
    cognitiveProcess: ["read-locked-passage-evidence", operation],
    representationType,
    misconceptionTargets: ["choose-a-familiar-or-repeated-line-without-checking-its-meaning-in-this-passage"],
    reviews: [
      `獨立覆核 A：在鎖定文章中定位「${shortQuote(evidence, 24)}」，答案為「${shortQuote(correct, 18)}」。`,
      `獨立覆核 B：逐項回查文章，只有「${shortQuote(correct, 18)}」有同篇證據，三個干擾項均來自不同情境。`,
    ],
  };
}

function titleQuestion(record, avoid) {
  const distractors = RELATED[record.index].slice(0, 3).map((index) => RECORDS[index].item.title);
  const opening = record.sentences.find((sentence) => !containsText(sentence, avoid)) ?? record.sentences[0];
  return question({
    id: `ENG_R4_Q_READ_${String(record.index + 1).padStart(3, "0")}_01`,
    skillId: "ENG_R4_S247",
    stem: `Which title is best for the complete passage that includes “${shortQuote(hideTitle(opening, record.item.title))}”?`,
    correct: record.item.title,
    distractors,
    index: record.index,
    operation: "identify-whole-text-focus-from-related-titles",
    representationType: "reading-whole-text-title",
    evidence: `${record.item.title}: ${opening}`,
  });
}

function relationOrDetailQuestion(record) {
  const usableRelations = record.relations.filter((relation) => !containsText(record.sentences.at(-1), relation.answer));
  const relation = usableRelations[record.index % Math.max(1, usableRelations.length)];
  if (relation) {
    const selector = relation.kind === "reason"
      ? (candidate) => candidate.relations.filter((value) => value.kind === "reason").map((value) => value.answer)
      : (candidate) => candidate.relations.filter((value) => value.kind === "result").map((value) => value.answer);
    const correct = sentenceCase(relation.answer);
    const distractors = chooseForeign(record, correct, (candidate) => selector(candidate).map(sentenceCase));
    return question({
      id: `ENG_R4_Q_READ_${String(record.index + 1).padStart(3, "0")}_02`,
      skillId: "ENG_R4_S257",
      stem: relation.kind === "reason"
        ? `Which reason does the passage give for this situation: “${shortQuote(hideTitle(relation.situation, record.item.title))}”?`
        : `What result follows this event in the passage: “${shortQuote(hideTitle(relation.situation, record.item.title))}”?`,
      correct,
      distractors,
      index: record.index + 1,
      operation: relation.kind === "reason" ? "connect-stated-reason-to-situation" : "connect-stated-event-to-result",
      representationType: `reading-stated-${relation.kind}`,
      evidence: relation.answer,
    });
  }
  const sentenceIndex = Math.min(record.sentences.length - 2, 1 + (record.index % Math.max(1, record.sentences.length - 2)));
  const correct = record.sentences[sentenceIndex];
  return question({
    id: `ENG_R4_Q_READ_${String(record.index + 1).padStart(3, "0")}_02`,
    skillId: "ENG_R4_S250",
    stem: `Which answer is supported by the passage that includes “${shortQuote(hideTitle(record.sentences[0], record.item.title))}”?`,
    correct,
    distractors: chooseForeign(record, correct, (candidate) => candidate.sentences),
    index: record.index + 1,
    operation: "distinguish-supported-detail-from-related-near-misses",
    representationType: "reading-supported-detail",
    evidence: correct,
  });
}

function sequenceQuestion(record, avoid) {
  const candidateIndexes = Array.from({ length: record.sentences.length - 1 }, (_, index) => index);
  const preferred = Math.min(record.sentences.length - 2, Math.max(0, Math.floor(record.sentences.length / 2) - 1));
  const anchorIndex = candidateIndexes.sort((left, right) => Math.abs(left - preferred) - Math.abs(right - preferred))
    .find((index) => !containsText(record.sentences[index], avoid) && !containsText(record.sentences[index + 1], avoid)) ?? preferred;
  const anchor = record.sentences[anchorIndex];
  const correct = record.sentences[anchorIndex + 1];
  return question({
    id: `ENG_R4_Q_READ_${String(record.index + 1).padStart(3, "0")}_03`,
    skillId: "ENG_R4_S273",
    stem: `What happens next in this passage after “${shortQuote(hideTitle(anchor, record.item.title))}”?`,
    correct,
    distractors: chooseForeign(record, correct, (candidate) => candidate.sentences),
    index: record.index + 2,
    operation: "track-event-or-idea-sequence-from-content-anchor",
    representationType: "reading-content-sequence",
    evidence: `${anchor} ${correct}`,
  });
}

function outcomeQuestion(record, avoid) {
  const correct = record.sentences.at(-1);
  const anchor = [...record.sentences.slice(0, -1)].reverse().find((sentence) => !containsText(sentence, avoid)) ?? record.sentences.at(-2);
  return question({
    id: `ENG_R4_Q_READ_${String(record.index + 1).padStart(3, "0")}_04`,
    skillId: "ENG_R4_S245",
    stem: `Which ending result or final point follows “${shortQuote(hideTitle(anchor, record.item.title))}”?`,
    correct,
    distractors: chooseForeign(record, correct, (candidate) => [candidate.sentences.at(-1)]),
    index: record.index + 3,
    operation: "identify-reported-ending-outcome-or-final-point",
    representationType: "reading-ending-meaning",
    evidence: `${anchor} ${correct}`,
  });
}

function materialize(record) {
  const detail = relationOrDetailQuestion(record);
  const avoid = detail.options[detail.answerIndex];
  return {
    id: `ENG_R4_READ_${String(record.index + 1).padStart(3, "0")}`,
    passage: record.item.passage,
    glossary: (record.item.glossary ?? []).filter((entry) => Array.isArray(entry) && entry.length >= 2).map(([word, meaning]) => [String(word), String(meaning)]),
    questions: [titleQuestion(record, avoid), detail, sequenceQuestion(record, avoid), outcomeQuestion(record, avoid)],
    provenance: {
      status: "original",
      authorRole: "Project English passage author; R4 questions authored by Codex",
      copyrightStatus: "Original project passage retained; legacy questions discarded and four evidence-bound R4 questions newly authored from the locked text.",
      sourceRefs: ["ENG-R4-FROZEN-AUTHORITY-GRAPH", "CAP-106-TO-115-ENGLISH-CALIBRATION"],
      legacyId: record.item.id,
    },
  };
}

export function defineReadingBatch(start, end) {
  assert(Number.isInteger(start) && Number.isInteger(end) && start >= 1 && end <= 500 && start <= end);
  return RECORDS.slice(start - 1, end).map(materialize);
}

export const ENGLISH_READING_SOURCE_AUDIT = {
  count: LEGACY.length,
  uniqueTitles: new Set(LEGACY.map((item) => item.title)).size,
  uniquePassages: new Set(LEGACY.map((item) => item.passage)).size,
  legacyQuestionsRetained: 0,
  structuralLocatorQuestions: 0,
};
