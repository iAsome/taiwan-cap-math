export const BANNED_STEP_PHRASES = [
  "依題意整理已知條件",
  "先讀懂題目中的數學關係",
  "依公式或運算規則逐步計算",
  "最後檢查答案是否合理"
];

/** Phase 2A-R2: machine-template phrases banned in explanation / steps / lecture examples */
export const BANNED_PHRASES = [
  "不符合上述判斷或計算",
  "常見原因是步驟跳躍",
  "步驟跳躍或符號處理錯誤",
  "解題過程：",
  "本題：",
  "故正確為",
  "用反例排除",
  "對照定義選出唯一符合者",
  "檢查各選項能否寫成兩整數之比或是否為整數",
  "讀題確認要找",
  "選項「",
  "上述判斷",
  "不符合上述",
  "依整數、有理數與無理數的定義判斷數的歸類",
  "另外要留意",
  "這正是本題最容易選錯的地方",
  "其餘選項不符合計算結果或題意，應逐一排除"
];

/** Phase 2B-1-R1: U04 machine residue and generic wrong-reason phrases */
export const U04_BANNED_PHRASES = [
  "後比較左右",
  "多半是代入順序對調或漏乘係數",
  "也未滿足等式兩側相等",
  "把每個未知數的係數分開計算",
  "，代入",
  "，計算",
  "，檢驗",
  "逐項代入",
  "每一項係數",
  "分別算 x 項與 y 項",
  "整理計算後",
  "若誤以為",
  "結果為",
  "答案為",
  "正確理解是",
  "第一例：",
  "第二例："
];

/** Machine variant padding like 01下列… not math quantities like 10 隻 */
export const U04_EXPLANATION_PREFIX_RE = /^(0[1-9]|1[0-2])[\u4e00-\u9fff{]/;
export const U04_EXPLANATION_PREFIX_COLON_RE = /^(0[1-9]|1[0-2]).+：/;

/** Template-style answer hooks: `，得 X` or `得 X` at end of step */
export const BANNED_STEP_ANSWER_RE = /[，,]\s*得\s+.|[；;]\s*得\s+/;

export const BANNED_MISTAKE_PHRASES = ["步驟跳躍", "符號處理錯誤"];

export const BANNED_LECTURE_STEP_PHRASES = [
  ...BANNED_STEP_PHRASES,
  "對照定義選出唯一符合者",
  "用反例排除",
  "讀題確認要找"
];

export function countZh(text) {
  if (typeof text !== "string") return 0;
  return (text.match(/[\u4e00-\u9fff]/g) || []).length;
}

export function findBannedPhrase(text) {
  if (typeof text !== "string") return null;
  for (const p of BANNED_PHRASES) {
    if (text.includes(p)) return p;
  }
  if (BANNED_STEP_ANSWER_RE.test(text)) return "template ，得 answer hook";
  return null;
}

export function hasBannedText(textOrArray) {
  const parts = Array.isArray(textOrArray) ? textOrArray : [textOrArray];
  for (const part of parts) {
    const hit = findBannedPhrase(part);
    if (hit) return hit;
  }
  return null;
}

export function hasBannedStep(steps) {
  const blob = (steps || []).join(" ");
  for (const p of BANNED_STEP_PHRASES) {
    if (blob.includes(p)) return p;
  }
  return hasBannedText(steps);
}

export function explanationQuality(explanation, concept) {
  if (countZh(explanation) < 30) return "explanation too short";
  if (explanation.trim() === concept?.trim()) return "concept equals explanation";
  if (/正確答案[：:]\s*[A-D]/i.test(explanation)) return "exposes answer letter";
  const banned = hasBannedText(explanation);
  if (banned) return `banned phrase: ${banned}`;
  return null;
}

export function conceptQuality(concept, explanation) {
  if (countZh(concept) < 20) return "concept too short";
  if (concept.trim() === explanation?.trim()) return "concept equals explanation";
  if (/^[\d\s+\-×÷=()./√²³⁰⁻⁴⁵⁶⁷⁸⁹]+。?$/.test(concept.trim())) return "concept is answer-like";
  const banned = hasBannedText(concept);
  if (banned) return `banned phrase: ${banned}`;
  return null;
}

/** explanation must mention something concrete: digit, operator, or a choice substring */
export function explanationHasConcreteContent(explanation, choices = []) {
  if (/\d/.test(explanation)) return true;
  if (/[+\-×÷=√²³()|]/.test(explanation)) return true;
  for (const c of choices) {
    const s = String(c).trim();
    if (s.length >= 2 && explanation.includes(s.slice(0, Math.min(6, s.length)))) return true;
  }
  return false;
}

export function findU04BannedPhrase(text) {
  if (typeof text !== "string") return null;
  for (const p of U04_BANNED_PHRASES) {
    if (text.includes(p)) return p;
  }
  return null;
}

export function hasU04BannedText(textOrArray) {
  const parts = Array.isArray(textOrArray) ? textOrArray : [textOrArray];
  for (const part of parts) {
    const hit = findU04BannedPhrase(part);
    if (hit) return hit;
  }
  return null;
}

/** steps must not embed the first 8 chars of question text (Chinese portion) */
export function stepsEmbedQuestionText(steps, text) {
  const zh = (text.match(/[\u4e00-\u9fff]+/g) || []).join("").slice(0, 8);
  if (zh.length < 4) return null;
  const blob = (steps || []).join(" ");
  if (blob.includes(zh)) return zh;
  return null;
}

/** explanation must not repeat >8 consecutive chars from question text (non-math) */
export function explanationOverRepeatsText(explanation, text) {
  const plain = text.replace(/\s+/g, "");
  for (let len = 9; len <= Math.min(plain.length, 24); len++) {
    for (let i = 0; i <= plain.length - len; i++) {
      const sub = plain.slice(i, i + len);
      if (/^[\u4e00-\u9fff？?，,、：:]+$/.test(sub) && explanation.includes(sub)) {
        return sub;
      }
    }
  }
  return null;
}

export const ANSWER_INDEX_PATTERN = [1, 3, 0, 2];
