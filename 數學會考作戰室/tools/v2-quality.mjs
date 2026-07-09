export const BANNED_STEP_PHRASES = [
  "依題意整理已知條件",
  "先讀懂題目中的數學關係",
  "依公式或運算規則逐步計算",
  "最後檢查答案是否合理"
];

export const BANNED_LECTURE_STEP_PHRASES = BANNED_STEP_PHRASES;

export function countZh(text) {
  if (typeof text !== "string") return 0;
  return (text.match(/[\u4e00-\u9fff]/g) || []).length;
}

export function hasBannedStep(steps) {
  const blob = (steps || []).join(" ");
  return BANNED_STEP_PHRASES.some(p => blob.includes(p));
}

export function explanationQuality(explanation, concept) {
  if (countZh(explanation) < 30) return "explanation too short";
  if (explanation.trim() === concept?.trim()) return "concept equals explanation";
  if (/正確答案[：:]\s*[A-D]/i.test(explanation)) return "exposes answer letter";
  return null;
}

export function conceptQuality(concept, explanation) {
  if (countZh(concept) < 15) return "concept too short";
  if (concept.trim() === explanation?.trim()) return "concept equals explanation";
  // ponytail: reject if concept is mostly numbers/operators only
  if (/^[\d\s+\-×÷=()./√²³⁰⁻⁴⁵⁶⁷⁸⁹]+。?$/.test(concept.trim())) return "concept is answer-like";
  return null;
}

/** Rotate answerIndex per skill: at least 2 distinct indices across 4 questions */
export const ANSWER_INDEX_PATTERN = [1, 3, 0, 2];
