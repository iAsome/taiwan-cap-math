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

/** Phase 2B-1-R1 / U05: machine residue, generic wrong-reason, image-dependent phrases */
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

export const U05_BANNED_PHRASES = [
  ...U04_BANNED_PHRASES,
  "如圖",
  "下圖",
  "請看圖",
  "請看下圖",
  "圖中",
  "由圖可知",
  "依圖判斷",
  "代入即可",
  "首重",
  "次重",
  "三重",
  "四重",
  "五重",
  "六重",
  "七重",
  "八重",
  "九重",
  "十重",
  "十一重",
  "十二素養",
  "【",
  "】",
  "易錯在只記口訣",
  "未套數字",
  "帶入後才能排除",
  "錯選通常是把正負方向或軸向對調",
  "回到定義逐項核對",
  "干擾項常漏看",
  "請再核對一次計算與題意",
  "套數字",
  "這類題不能憑印象",
  "另外，選",
  "都不符合題目中的坐標或方程式",
  "要用題目給的數字逐項驗算",
  "要用題目數字逐項驗算",
  "要回到題目條件逐項核對",
  "逐項核對",
  "逐項驗算",
  "帶入題目數字檢查",
  "請把題目中的每個數字代入算式",
  "都不符合",
  "題目條件逐項",
  "與題目設定",
  "方程式條件",
  "故本題應選",
  "勿把",
  "誤當本題答案",
  "選「",
  "選 (",
  "應為",
  "卻寫成",
  "計算或代入錯誤",
  "正方向或 x、y 意義不符",
  "要用題目",
  "不符合本題條件",
  "不符合方程式",
  "正確數值應為",
  "把平移方向或 x、y 的加減弄反"
];

/** U05-R3 regex bans (template hooks too broad for substring-only) */
export const U05_R3_REGEX_BANS = [
  [/選\s*[「(]/, "選「/選("],
  [/選\s+\(-?[\d.]+\s*,\s*-?[\d.]+\)\s*時/, "選 (...) 時"],
  [/選\s+「[^」]+」\s*與/, "選「...」與"],
  [/應為.{1,20}卻寫成/, "應為/卻寫成"]
];

/** Strip regexes for U05-R2 cleanup script */
export const U05_R2_FILLER_RES = [
  /另外，選[^。]+都不符合題目中的坐標或方程式[^。]*。?\s*/g,
  /選「[^」]+」與「[^」]+」都不符合題目中的坐標或方程式[^。]*。?\s*/g,
  /選「[^」]+」與「[^」]+」都不符合題目中的坐標或方程式，要用題目數字逐項驗算後再決定。?\s*/g,
  /都不符合題目中的坐標或方程式[^。]*。?\s*/g,
  /要用題目給的數字逐項驗算後再決定。?\s*/g,
  /要用題目數字逐項驗算後再決定。?\s*/g,
  /，?要回到題目條件逐項核對。?\s*/g,
  /逐項驗算後再決定。?\s*/g,
  /會考題常把軸上點與象限混在一起，解題時要回到 x、y 的正負與是否為零逐項核對。?\s*/g,
  /帶入題目數字檢查每一個坐標或式子是否成立。?\s*/g,
  /請把題目中的每個數字代入算式後再選答案。?\s*/g
];

/** Strip regexes for U05-R3 cleanup script */
export const U05_R3_FILLER_RES = [
  /選\s+\([^)]+\)\s*時，[^。]+。?\s*/g,
  /「[^」]+」不符合[^。]+。?\s*/g,
  /「[^」]+」是截距點坐標，但題目問的是截距值。?\s*/g,
  /「[^」]+」只是數值，題目要的是截距點坐標。?\s*/g,
  /「[^」]+」不符合方程式或直線圖形的方向描述。?\s*/g,
  /「[^」]+」是套用寬高或距離公式時算錯。?\s*/g,
  /「[^」]+」無法同時滿足兩條直線方程式。?\s*/g,
  /「[^」]+」與題目設定的正方向或 x、y 意義不符。?\s*/g,
  /「[^」]+」把平移方向或 x、y 的加減弄反。?\s*/g,
  /[^。]*計算或代入錯誤[^。]*。?\s*/g,
  /[^。]*故本題應選[^。]*。?\s*/g,
  /寫坐標或代數式時，正負號與 x、y 的先後順序都要正確。?\s*/g,
  /，?勿把「[^」]+」誤當本題答案。?\s*/g
];

export const U05_IMAGE_PHRASES = ["如圖", "下圖", "請看圖", "請看下圖", "圖中", "由圖可知", "依圖判斷"];

/** U05 formal bank must not use slope-formula vocabulary (deferred to U15). */
export const U05_SLOPE_RE = /斜率|Δy|Δx|\bΔy\b|\bΔx\b/;

export function u05HasSlopeContent(textOrArray) {
  const parts = Array.isArray(textOrArray) ? textOrArray : [textOrArray];
  for (const part of parts) {
    if (typeof part === "string" && U05_SLOPE_RE.test(part)) return true;
  }
  return false;
}

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

export function findU05BannedPhrase(text) {
  if (typeof text !== "string") return null;
  for (const p of U05_BANNED_PHRASES) {
    if (text.includes(p)) return p;
  }
  for (const [re, label] of U05_R3_REGEX_BANS) {
    if (re.test(text)) return label;
  }
  return null;
}

export function hasU05BannedText(textOrArray) {
  const parts = Array.isArray(textOrArray) ? textOrArray : [textOrArray];
  for (const part of parts) {
    const hit = findU05BannedPhrase(part);
    if (hit) return hit;
  }
  return null;
}

/** U05 explanation must not be only 「代入即可」 style one-liner */
export function u05ExplanationTooVague(explanation) {
  if (typeof explanation !== "string") return null;
  const t = explanation.trim();
  if (/^代入.*即可[。]?$/.test(t)) return "代入即可 only";
  if (t.length < 20 && t.includes("代入")) return "vague 代入";
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
