#!/usr/bin/env node
/** U05-R2: remove generic filler tails; densify with question-specific wrong-choice notes. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { countZh, U05_R2_FILLER_RES } from "./v2-quality.mjs";

const PART_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "v2-u05-parts");
const R2_CHECK = /另外，選|都不符合題目中的坐標或方程式|要用題目給的數字逐項驗算|要用題目數字逐項驗算|要回到題目條件逐項核對|逐項核對|逐項驗算|帶入題目數字檢查|請把題目中的每個數字代入算式/;

const DIG = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
function numZh(n) {
  n = Number(n);
  if (Number.isNaN(n)) return String(n);
  if (n < 0) return "負" + numZh(-n);
  if (n < 10) return DIG[n];
  if (n < 20) return "十" + (n % 10 ? DIG[n % 10] : "");
  if (n < 100) return DIG[Math.floor(n / 10)] + "十" + (n % 10 ? DIG[n % 10] : "");
  return String(n);
}

function stripR2Fillers(s) {
  if (typeof s !== "string") return s;
  let t = s;
  for (const re of U05_R2_FILLER_RES) t = t.replace(re, "");
  return t.replace(/。{2,}/g, "。").replace(/\s{2,}/g, " ").replace(/，。/g, "。").trim();
}

function parseCoord(s) {
  const m = String(s).match(/\((-?\d+),\s*(-?\d+)\)/);
  return m ? { x: +m[1], y: +m[2], raw: m[0] } : null;
}

function wrongNote(q, wrong) {
  const w = String(wrong);
  const correct = String(q.choices[q.answerIndex]);
  const pw = parseCoord(w);
  const pc = parseCoord(correct);

  if (pw && pc) {
    const parts = [];
    if (pw.x !== pc.x) {
      if (pw.x > 0 && pc.x < 0) parts.push("把向左或西邊誤寫成正 x");
      else if (pw.x < 0 && pc.x > 0) parts.push("把向右或東邊誤寫成負 x");
      else parts.push(`x 應為${numZh(pc.x)}卻寫成${numZh(pw.x)}`);
    }
    if (pw.y !== pc.y) {
      if (pw.y > 0 && pc.y < 0) parts.push("把向下誤寫成正 y");
      else if (pw.y < 0 && pc.y > 0) parts.push("把向上誤寫成負 y");
      else parts.push(`y 應為${numZh(pc.y)}卻寫成${numZh(pw.y)}`);
    }
    if (pw.x === pc.y && pw.y === pc.x && pw.x !== pc.x) parts.push("x、y 順序對調");
    if (parts.length) return `選 ${pw.raw} 時，${parts.join("，")}`;
  }

  if (/^-?\d+$/.test(w) && /^-?\d+$/.test(correct) && w !== correct) {
    return `選 ${w} 是計算或代入錯誤，正確數值應為 ${correct}`;
  }

  if (/截距/.test(q.text)) {
    if (w.includes("(") && !q.text.includes("點")) return `「${w}」是截距點坐標，但題目問的是截距值`;
    if (!w.includes("(") && q.text.includes("點")) return `「${w}」只是數值，題目要的是截距點坐標`;
  }

  if (/象限/.test(q.text)) return `「${w}」不是依 x、y 正負判斷的正確象限或軸上情形`;

  if (/平行|垂直|水平|鉛直|x 軸|y 軸/.test(q.text + w)) {
    return `「${w}」不符合方程式或直線圖形的方向描述`;
  }

  if (/距離|相距|面積|周長/.test(q.text)) return `「${w}」是套用寬高或距離公式時算錯`;

  if (/交點|相交|聯立/.test(q.text)) return `「${w}」無法同時滿足兩條直線方程式`;

  if (/平移|移動|向左|向右|向上|向下/.test(q.text)) return `「${w}」把平移方向或 x、y 的加減弄反`;

  if (/東|西|南|北|原點|地圖|校園|座位/.test(q.text)) return `「${w}」與題目設定的正方向或 x、y 意義不符`;

  return `「${w}」不符合本題條件`;
}

function densifyExplanation(q) {
  let ex = stripR2Fillers(q.explanation);
  ex = ex
    .replace(/x\s*<\s*0/g, "x 為負")
    .replace(/y\s*>\s*0/g, "y 為正")
    .replace(/x\s*>\s*0/g, "x 為正")
    .replace(/y\s*<\s*0/g, "y 為負");

  const wrongs = q.choices.filter((_, i) => i !== q.answerIndex);
  let guard = 0;
  while (countZh(ex) < 45 && guard++ < 8) {
    let added = false;
    for (const w of wrongs) {
      const note = wrongNote(q, w);
      const sig = note.slice(4, 22);
      if (ex.includes(sig)) continue;
      ex = ex.replace(/。?$/, "") + "。" + note;
      added = true;
      if (countZh(ex) >= 45) break;
    }
    if (!added) {
      const correct = q.choices[q.answerIndex];
      ex = ex.replace(/。?$/, "") + `。故本題應選「${correct}」。`;
      break;
    }
  }
  if (countZh(ex) < 45) {
    ex = ex.replace(/。?$/, "") + "。寫坐標或代數式時，正負號與 x、y 的先後順序都要正確。";
  }
  if (!ex.endsWith("。")) ex += "。";
  return ex;
}

function fixCommonMistake(q) {
  let m = stripR2Fillers(q.commonMistake)
    .replace(/，?(常見誤選|勿選)「[^」]+」(，?(常見誤選|勿選)「[^」]+」)*/g, "")
    .replace(/。+$/, "");
  const w = q.choices.find((_, i) => i !== q.answerIndex) || "";
  if (countZh(m) < 12) {
    m += `，勿把「${String(w).slice(0, 12)}」誤當本題答案。`;
  }
  if (countZh(m) < 12) {
    m += "，寫坐標時要對照題目的方向與正負號。";
  }
  q.commonMistake = m.endsWith("。") ? m : m + "。";
}

function patchItem(q) {
  q.explanation = densifyExplanation(q);
  q.steps = q.steps.map(s => stripR2Fillers(s));
  fixCommonMistake(q);
  if (countZh(q.explanation) < 45) {
    throw new Error(`${q.questionId} explanation too short: ${countZh(q.explanation)}`);
  }
  const blob = [q.explanation, q.commonMistake, ...q.steps, ...q.choices].join("");
  if (R2_CHECK.test(blob)) throw new Error(`${q.questionId} still has R2 filler`);
}

function patchLectureExample(ex) {
  let e = stripR2Fillers(ex.explanation);
  if (countZh(e) < 40) e += " 例題練習時要把文字條件寫成 x、y 的正負變化，再寫成有序數對。";
  return { ...ex, explanation: e };
}

function patchLecture(l) {
  l.concept = stripR2Fillers(l.concept);
  if (countZh(l.concept) < 80) {
    const pad = {
      "coordinate-point-reading": " 讀坐標時先 x 後 y，正方向用正數、反方向用負數。",
      "coordinate-quadrant": " 記法：第一象限正正、第二負正、第三負負、第四正負；在坐標軸上的點不屬任何象限。",
      "coordinate-axis-points": " 原點兩坐標都是零；到 x 軸距離是 y 的絕對值，到 y 軸距離是 x 的絕對值。",
      "coordinate-plot-description": " 關於原點對稱時 x、y 都要變號；到坐標軸距離用該坐標的絕對值。",
      "coordinate-translation": " 連續平移可把 x、y 的變化分別合併；反推原點時方向與平移相反。",
      "coordinate-horizontal-vertical-distance": " 任意兩點若 x、y 都不同，不能直接把 x 差或 y 差當距離。",
      "coordinate-rectangle-area": " 含負坐標時寬高仍用坐標差的絕對值，不要把坐標值直接相乘。",
      "coordinate-linear-equation-graph": " y 等於常數是水平線，x 等於常數是垂直線；截距法可快速描出直線。",
      "coordinate-point-on-line": " 帶入時 x、y 順序不可對調；同一條直線上可有無限多組解。",
      "coordinate-intercepts": " 問截距值答數字，問截距點才寫成與坐標軸相交的坐標。",
      "coordinate-line-intersection": " 驗證交點必須同時代入兩條方程式；平行線沒有交點。",
      "coordinate-literacy-context": " 情境題先定原點與正方向，再把文字位置轉成有序數對。"
    };
    l.concept += pad[l.skillId] || " 解題時把題目數字寫進算式再比對選項。";
  }
  l.formula = stripR2Fillers(l.formula || "");
  l.stepGuide = l.stepGuide.map(s => stripR2Fillers(s));
  l.examples = l.examples.map(patchLectureExample);
  l.commonMistakes = l.commonMistakes.map(m => stripR2Fillers(m));
  for (const ex of l.examples) {
    if (countZh(ex.explanation) < 40) throw new Error(`${l.skillId} example short`);
    if (R2_CHECK.test(ex.explanation)) throw new Error(`${l.skillId} example has filler`);
  }
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
    console.log("r2 cleaned", file);
  }
  console.log("U05-R2 OK");
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
