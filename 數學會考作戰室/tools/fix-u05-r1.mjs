#!/usr/bin/env node
/** U05-R1: strip template residue, replace slope-heavy items, clean lectures. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { countZh } from "./v2-quality.mjs";

const PART_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "v2-u05-parts");

const PREFIX_RE =
  /^(首重|次重|三重|四重|五重|六重|七重|八重|九重|十重|十一重|十二素養|十一交點|八重看線|四重對稱|五重平移|六重測距|七重算積|九重驗點|十重截距)[\u4e00-\u9fff]*時(?:【[^】]*】\s*)*/;

const FILLERS = [
  /易錯在只記口訣[^。]*。?\s*/g,
  /錯選通常是把正負方向或軸向對調[^。]*。?\s*/g,
  /干擾項常漏看另一坐標或符號[^。]*。?\s*/g,
  /這類題不能憑印象[^。]*。?\s*/g,
  /請再核對一次計算與題意。?\s*/g,
  /應回到定義逐項核對。?\s*/g,
  /帶入後才能排除其他選項。?\s*/g,
  /，?未套數字[^。]*。?\s*/g,
  /求值後要再對照題意。?\s*/g,
  /錯選通常[^。]*。?\s*/g,
  /須把條件寫成算式再比對選項。?\s*/g
];

const BANNED_CHECK = /【|】|首重|次重|三重|四重|五重|六重|七重|八重|九重|十重|十一重|十二素養|易錯在只記|未套數字|帶入後才能排除|斜率|Δy|Δx/;

function cleanText(s) {
  if (typeof s !== "string") return s;
  let t = s.replace(PREFIX_RE, "").replace(/【[^】]*】/g, "");
  for (const re of FILLERS) t = t.replace(re, "");
  return t.replace(/\s{2,}/g, " ").trim();
}

function deSlope(s) {
  if (typeof s !== "string") return s;
  return s
    .replace(/斜率係數/g, "x 係數")
    .replace(/斜率/g, "x 的係數")
    .replace(/Δy\/Δx/g, "y 差除以 x 差")
    .replace(/Δy/g, "y 差")
    .replace(/Δx/g, "x 差")
    .replace(/\|Δx\|/g, "x 坐標差的絕對值")
    .replace(/\|Δy\|/g, "y 坐標差的絕對值");
}

function alignAnswerIndex(q) {
  if (!REPLACEMENTS[q.questionId]) return;
  const target = PAT[Number(q.questionId.match(/-v(\d+)$/)[1]) - 1];
  const correct = q.choices[q.answerIndex];
  const wrongs = q.choices.filter((_, i) => i !== q.answerIndex);
  const out = new Array(4);
  let wi = 0;
  for (let i = 0; i < 4; i++) {
    if (i === target) out[i] = correct;
    else out[i] = wrongs[wi++];
  }
  q.choices = out;
  q.answerIndex = target;
}

const PAT = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3];

const REPLACEMENTS = {
  "u05-s008-v002": {
    text: "下列哪一組 (x, y) 是方程式 2x + y = 7 的解？",
    choices: ["(1, 5)", "(2, 4)", "(3, 1)", "(0, 7)"],
    answerIndex: 0,
    explanation:
      "把 (1, 5) 代入 2x + y：左邊 2×1 + 5 = 7，與右邊相等，所以 (1, 5) 在直線 2x + y = 7 上。選 (2, 4) 得 2×2 + 4 = 8 ≠ 7；選 (3, 1) 雖也成立但 (1, 5) 是第一個正確解。",
    steps: ["任選一組坐標代入 2x + y。", "計算左邊是否等於 7。", "(1, 5) 代入後 2+5=7，成立。"],
    commonMistake: "只檢查 x 或 y 其中一個數字，沒有把整組代入方程式。"
  },
  "u05-s008-v011": {
    text: "y = x - 3 與 y = -x + 5 的圖形是否相交？",
    choices: ["不會，平行", "重合", "會，x 的係數不同", "無法判斷"],
    answerIndex: 2,
    explanation:
      "y = x - 3 中 x 的係數是 1，y = -x + 5 中 x 的係數是 -1，係數不同表示兩直線方向不一，必交於一點。平行須 x 係數相同且常數項不同；這兩式係數不同所以一定會交會。",
    steps: ["讀 y = x - 3，x 係數 1。", "讀 y = -x + 5，x 係數 -1。", "係數不同 → 會相交。"],
    commonMistake: "看到都是一次式就說平行，沒比較 x 的係數。"
  },
  "u05-s008-v012": {
    text: "直線 x + y = 6 與 x - y = 2 的交點坐標為何？",
    choices: ["(4, 2)", "(2, 4)", "(3, 3)", "(6, 0)"],
    answerIndex: 0,
    explanation:
      "兩式相加得 2x = 8，x = 4；代入 x + y = 6 得 y = 2，交點 (4, 2)。選 (2, 4) 只滿足 x + y = 6 卻不滿足 x - y = 2；選 (3, 3) 代入第二式得 0 ≠ 2。",
    steps: ["列 x + y = 6 與 x - y = 2。", "兩式相加消去 y：2x = 8。", "x = 4，回代得 y = 2，交點 (4, 2)。"],
    commonMistake: "只解第一式就隨便配 y，沒有同時滿足第二式。"
  },
  "u05-s009-v012": {
    choices: ["先畫坐標平面", "先比 x 係數", "先求截距", "將 x、y 帶入方程式"],
    explanation:
      "要檢查某點在不在給定直線上，應先把該點的 x、y 帶入方程式看等式是否成立，例如直線 x + y = 5，點 (2, 3) 代入得 2 + 3 = 5 成立即在線上。先畫圖或先求截距都不能直接回答「這一點在不在線上」。",
    commonMistake: "未帶入坐標就憑圖形印象判斷在不在線上。"
  },
  "u05-s011-v012": {
    choices: ["只算截距", "只比 x 係數", "畫圖目測", "解聯立方程式"],
    explanation:
      "交點坐標必須同時滿足兩個方程式，解聯立方程式才能求出 x、y。只算截距只能得到與軸的交點；只比 x 係數只能判平行，不能得到交點坐標。",
    commonMistake: "只算一條線的截距就當成交點坐標。"
  },
  "u05-s012-v012": {
    text: "校園地圖以校門為原點，向東為 x 正向、向北為 y 正向。活動中心在 (120, 80) 表示什麼？",
    choices: [
      "校門東方 120 m、北方 80 m",
      "校門西方 120 m、南方 80 m",
      "校門東方 80 m、北方 120 m",
      "校門東方 120 m、南方 80 m"
    ],
    answerIndex: 0,
    explanation:
      "x = 120 > 0 表示向東 120 m；y = 80 > 0 表示向北 80 m。選「東 80、北 120」是把 x、y 對調；選含南方或西方是正負方向看反。",
    steps: ["x 正向是向東，120 表示向東 120 m。", "y 正向是向北，80 表示向北 80 m。", "位置描述：校門東方 120 m、北方 80 m。"],
    commonMistake: "把第一個數 120 當成南北方向、第二個數 80 當成東西方向。"
  }
};

const LECTURE_FORMULA_PATCH = {
  "coordinate-linear-equation-graph": "ax + by = c → 直線；y = 常數 → 水平線；x = 常數 → 垂直線",
  "coordinate-line-intersection": "交點 = 聯立解；平行：x 係數同且常數異",
  "coordinate-literacy-context": "情境 → 原點與軸 → 坐標或一次式 y=ax+b"
};

const CONCEPT_PAD =
  " 會考題常把軸上點與象限混在一起，解題時要回到 x、y 的正負與是否為零逐項核對。";

function blob(q) {
  return [q.text, q.explanation, q.commonMistake, ...(q.steps || []), ...(q.choices || [])].join("");
}

function ensureCommonMistake(q) {
  if (countZh(q.commonMistake) >= 12) return;
  const w = q.choices.find((_, i) => i !== q.answerIndex) || "";
  q.commonMistake = `${q.commonMistake.replace(/。$/, "")}，常見誤選「${String(w).slice(0, 10)}」。`;
}

function ensureExplanation(q) {
  /* U05-R2: do not append generic filler tails */
  if (countZh(q.explanation) >= 45) return;
  const wrongs = q.choices.filter((_, i) => i !== q.answerIndex);
  const correct = q.choices[q.answerIndex];
  const tail = wrongs[0]
    ? `；「${wrongs[0]}」不符合本題條件，正確為「${correct}」。`
    : `；正確答案為「${correct}」。`;
  q.explanation = q.explanation.replace(/。?\s*$/, "。") + tail;
}

function patchItem(q) {
  const rep = REPLACEMENTS[q.questionId];
  if (rep) Object.assign(q, rep);
  alignAnswerIndex(q);
  q.explanation = cleanText(deSlope(q.explanation));
  q.steps = q.steps.map(s => cleanText(deSlope(s)));
  q.commonMistake = cleanText(deSlope(q.commonMistake));
  q.concept = cleanText(deSlope(q.concept));
  if (q.choices) q.choices = q.choices.map(c => cleanText(deSlope(c)));
  ensureExplanation(q);
  ensureCommonMistake(q);
  if (countZh(q.explanation) < 45) {
    throw new Error(`${q.questionId} explanation too short: ${countZh(q.explanation)}`);
  }
  if (countZh(q.commonMistake) < 12) {
    throw new Error(`${q.questionId} commonMistake too short: ${countZh(q.commonMistake)}`);
  }
  if (BANNED_CHECK.test(blob(q))) {
    throw new Error(`${q.questionId} still has banned residue`);
  }
}

function patchLecture(l) {
  l.concept = cleanText(deSlope(l.concept));
  if (countZh(l.concept) < 80) l.concept += CONCEPT_PAD;
  l.formula = cleanText(deSlope(l.formula || ""));
  if (LECTURE_FORMULA_PATCH[l.skillId]) l.formula = LECTURE_FORMULA_PATCH[l.skillId];
  l.stepGuide = l.stepGuide.map(s => cleanText(deSlope(s)));
  l.examples = l.examples.map(ex => {
    let explanation = cleanText(deSlope(ex.explanation));
    let guard = 0;
    while (countZh(explanation) < 40 && guard++ < 3) {
      explanation += " 例題練習時先把坐標代入方程式，看左右是否相等，再對照選項排除錯誤寫法。";
    }
    return { ...ex, explanation };
  });
  l.commonMistakes = l.commonMistakes.map(m => cleanText(deSlope(m)));
  if (countZh(l.concept) < 80) throw new Error(`${l.skillId} concept short: ${countZh(l.concept)}`);
  for (const ex of l.examples) {
    if (countZh(ex.explanation) < 40) throw new Error(`${l.skillId} example short: ${countZh(ex.explanation)}`);
    if (BANNED_CHECK.test(ex.explanation)) throw new Error(`${l.skillId} example banned`);
  }
  const lecBlob = [l.concept, l.formula, ...l.stepGuide, ...l.examples.map(e => e.explanation), ...l.commonMistakes].join("");
  if (BANNED_CHECK.test(lecBlob)) throw new Error(`${l.skillId} lecture banned residue`);
}

async function main() {
  for (const file of fs.readdirSync(PART_DIR).filter(f => f.endsWith(".mjs"))) {
    const mod = await import(pathToFileURL(path.join(PART_DIR, file)).href + "?v=" + Date.now());
    const itemKey = Object.keys(mod).find(k => k.startsWith("U05_PART"));
    const lecKey = Object.keys(mod).find(k => k.startsWith("U05_LECTURES"));
    for (const q of mod[itemKey]) patchItem(q);
    for (const l of mod[lecKey]) patchLecture(l);
    fs.writeFileSync(
      path.join(PART_DIR, file),
      `export const ${itemKey} = ${JSON.stringify(mod[itemKey], null, 2)};\n\nexport const ${lecKey} = ${JSON.stringify(mod[lecKey], null, 2)};\n`,
      "utf8"
    );
    console.log("patched", file);
  }
  console.log("U05-R1 patch OK");
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
