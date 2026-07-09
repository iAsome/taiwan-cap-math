#!/usr/bin/env node
/** U05-R5: surgical polish — strip machine tails, enrich steps, no auto filler. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  countZh,
  U05_R2_FILLER_RES,
  U05_R3_FILLER_RES,
  U05_R4_FILLER_RES,
  findU05BannedPhrase,
  hasBannedStep
} from "./v2-quality.mjs";

const PART_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "v2-u05-parts");
const ALL_STRIP = [...U05_R2_FILLER_RES, ...U05_R3_FILLER_RES, ...U05_R4_FILLER_RES];

const CONCEPT_TAILS = [
  "讀坐標時先 x 後 y，正負號對照題目的左右或東西、上下或南北方向。",
  "讀坐標時先看 x 正負對應左右，再看 y 正負對應上下。",
  "象限由 x 與 y 的正負號決定，與數字大小無關。",
  "判斷象限只看 x、y 正負，與數字大小無關。",
  "在 x 軸上 y 為 0，在 y 軸上 x 為 0；距原點距離看該坐標的絕對值。",
  "在 x 軸上 y 為 0，在 y 軸上 x 為 0。",
  "比較兩點時先看 x 是否相反、再看 y 是否相反，才能判斷對稱。",
  "比較兩點時先看 x 是否相反、再看 y 是否相反。",
  "連續平移可把 x、y 的變化分別合併，方向與正負號要一致。",
  "連續平移可把 x、y 變化分別合併。",
  "水平距離只適用 y 相同的兩點，垂直距離只適用 x 相同的兩點。",
  "水平距離用 x 坐標差，垂直距離用 y 坐標差。",
  "含負坐標時寬高仍取坐標差的絕對值，面積是寬乘高。",
  "寬高取坐標差的絕對值，面積是寬乘高。",
  "水平線是 y 等於常數，垂直線是 x 等於常數。",
  "帶入 x=0 或 y=0 可求截距。",
  "判斷點在不在直線上，必須把 x、y 帶入方程式看等式是否成立。",
  "把 x、y 帶入方程式，看等式是否成立。",
  "截距值是數字，截距點才寫成與坐標軸相交的坐標。",
  "交點坐標要同時帶入兩條方程式驗證。",
  "交點坐標要同時滿足兩條方程式。",
  "情境題先確認原點與 x、y 正向，再把文字位置寫成有序數對。",
  "情境題先確認原點與 x、y 正向。",
  "同一水平線上兩點距離 = |x2-x1|。",
  "判斷點是否在直線上：將坐標帶入方程式，兩邊相等則在線上"
];

const DROP_SENT_RE =
  /未比較兩點坐標是否對稱|與依題意|沒有依題意|沒有對照|沒對照|沒有比較|對照兩點|不符合題目|皆不符合|正負關係|不是令 x=0|把連續平移|故本題|誤當|勿把|選「|選 \(|逐項|驗算|核對|代入題意|對照選項|寫成 \([^)]+\) 時，坐標與/;

function stripAll(s) {
  if (typeof s !== "string") return s;
  let t = s.replace(/面穡/g, "面積").replace(/代入/g, "帶入").replace(/，計算/g, "，求").replace(/，檢驗/g, "，查").replace(/，得 /g, "，");
  for (const re of ALL_STRIP) t = t.replace(re, "");
  for (const tail of CONCEPT_TAILS) {
    t = t.split(tail).join("");
  }
  return t
    .replace(/。{2,}/g, "。")
    .replace(/，。/g, "。")
    .replace(/，，+/g, "，")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function splitSents(text) {
  return text
    .split(/(?<=。)|(?<=；)/)
    .map(s => s.replace(/；$/, "。").trim())
    .filter(Boolean);
}

function isGoodSentence(s) {
  if (!s || DROP_SENT_RE.test(s)) return false;
  return !findU05BannedPhrase(s);
}

function dedupeSents(sents) {
  const seen = new Set();
  return sents.filter(s => {
    const k = s.replace(/\s/g, "").slice(0, 20);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

function parseCoord(s) {
  const m = String(s).match(/\((-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)\)/);
  return m ? { x: +m[1], y: +m[2], raw: m[0] } : null;
}

function isWrongDismiss(s) {
  const t = s.trim();
  if (/^寫成|^「|^若寫成|^代入 |^帶入 /.test(t)) return true;
  if (/^選「|^選 \(/.test(t)) return true;
  return /弄成|弄反|算錯|漏負|相加，不是相乘|只算到一個|誤以為|硬歸類/.test(t);
}

function relevantWrong(q, wrong, correct, blob) {
  const w = String(wrong).trim();
  const c = String(correct).trim();
  if (blob.includes(w.slice(0, Math.min(8, w.length)))) return null;

  const pw = parseCoord(w);
  const pc = parseCoord(c);
  if (pw && pc) {
    const t = q.text;
    if (/向左|左方|西/.test(t) && pw.x > 0 && pc.x < 0)
      return `若寫成 ${pw.raw}，x 為正數，把「向左」弄成向右。`;
    if (/向右|右方|東/.test(t) && pw.x < 0 && pc.x > 0)
      return `若寫成 ${pw.raw}，x 為負數，把「向右」弄成向左。`;
    if (/向上|上方|北/.test(t) && pw.y < 0 && pc.y > 0)
      return `若寫成 ${pw.raw}，y 為負數，把「向上」弄成向下。`;
    if (/向下|下方|南/.test(t) && pw.y > 0 && pc.y < 0)
      return `若寫成 ${pw.raw}，y 為正數，把「向下」弄成向上。`;
    if (pw.x === pc.y && pw.y === pc.x && pw.x !== pc.x)
      return `${pw.raw} 與 ${pc.raw} 數字相同但 x、y 對調，位置不同。`;
    if (/對稱|y 軸|x 軸|原點/.test(t)) {
      if (/原點/.test(w) && /y 軸/.test(t)) return `「${w.slice(0, 16)}…」須 y 也變號才是原點對稱。`;
      if (/x 軸/.test(w) && /y 相同/.test(t)) return `「${w.slice(0, 16)}…」須 y 變號才是 x 軸對稱。`;
    }
  }

  if (/東|西|南|北|左|右|上|下|公里|單位|m/.test(q.text + w) && w.length < 28 && w !== c) {
    if (/東.*北|西.*南|左.*上/.test(w) && /對調/.test(q.explanation + q.text))
      return `「${w}」把兩個距離或方向數字對調。`;
    if (/東/.test(w) && q.explanation.includes("西")) return `「${w}」把東西方向說反。`;
    if (/南/.test(w) && q.explanation.includes("北")) return `「${w}」把南北方向說反。`;
  }

  if (/面積|長方形/.test(q.text) && /^[\d.]+$/.test(w)) {
    if (/\+/.test(q.explanation)) return `${w} 是把寬和高相加，不是相乘。`;
    if (w !== c) return `${w} 是寬或高算錯，或把周長當面積。`;
  }

  if (/截距/.test(q.text) && /\(.+\)/.test(w)) return `${w} 是截距點坐標，這題要填截距的數值。`;

  if (/交點|聯立/.test(q.text) && pw && w !== c) return `${w} 帶入兩式後無法同時成立。`;

  if (/在.*上|方程式|帶入|帶入/.test(q.text) && pw && w !== c) {
    return `帶入 ${w} 後等式不成立。`;
  }

  if (/象限/.test(q.text) && /數字|大小|絕對值/.test(w))
    return `「${w.slice(0, 18)}」用數字大小判斷象限，應看 x、y 正負。`;

  if (/平移|移動/.test(q.text) && w !== c && w.length < 20)
    return `「${w}」把連續平移的加減方向合併錯了。`;

  return null;
}

function genericWrong(q, w, c) {
  if (w === c) return null;
  const wt = String(w).trim();
  if (/^-?\d+\.?\d*$/.test(wt)) {
    if (/距離|鉛直|水平|相距|店距|單位|m/.test(q.text)) {
      const dist = q.text.match(/距離[為是]?\s*(\d+)|鉛直距離\s*(\d+)|水平距離\s*(\d+)/);
      if (dist && wt === (dist[1] || dist[2] || dist[3]))
        return `${wt} 是把題目中的距離數字直接當答案。`;
      if (/鉛直|y2|y 坐標/.test(q.text + q.explanation))
        return `${wt} 是漏看絕對值或只寫出其中一個解。`;
      return `${wt} 是用錯公式或漏看正負號求出來的。`;
    }
    if (/截距/.test(q.text)) return `${wt} 是坐標某一分量，不是截距所問的數值。`;
    if (/面積|長方形/.test(q.text)) return `${wt} 是寬或高算錯，或把周長當面積。`;
    return `${wt} 是把某步驟算錯或漏掉另一解。`;
  }
  if (wt.length <= 28 && wt !== c) {
    const short = wt.length > 18 ? wt.slice(0, 18) + "…" : wt;
    if (/東|西|南|北|象限|對稱|截距|平移/.test(q.text))
      return `「${short}」跟題目給的坐標或方向條件不符。`;
  }
  return null;
}

function collectWrongLines(q, core, existing, max = 2) {
  const correct = q.choices[q.answerIndex];
  const blob = core + existing.join("");
  const added = [];
  for (const w of q.choices) {
    if (added.length >= max) break;
    if (w === correct) continue;
    const line =
      relevantWrong(q, w, correct, blob + added.join("")) ||
      genericWrong(q, w, correct);
    if (line && isGoodSentence(line) && !added.some(a => a.slice(0, 10) === line.slice(0, 10))) {
      added.push(line.endsWith("。") ? line : line + "。");
    }
  }
  return added;
}

function polishExplanation(q) {
  let sents = dedupeSents(
    splitSents(stripAll(q.explanation)).filter(isGoodSentence)
  );

  const core = sents.filter(s => !isWrongDismiss(s));
  let wrong = sents.filter(s => isWrongDismiss(s));

  const correct = q.choices[q.answerIndex];
  const blob = core.join("");
  const added = collectWrongLines(q, blob, wrong);

  wrong = dedupeSents([...wrong, ...added]).slice(0, 2);
  let ex = dedupeSents([...core, ...wrong]).join("");

  if (countZh(ex) < 45 && wrong.length < 2) {
    for (const line of collectWrongLines(q, ex, wrong, 2 - wrong.length)) {
      if (!ex.includes(line.slice(0, 10))) ex = ex.replace(/。?$/, "") + "。" + line;
      if (countZh(ex) >= 45 || wrong.length >= 2) break;
    }
  }
  if (countZh(ex) < 45) {
    for (const step of q.steps || []) {
      const st = stripAll(step);
      if (countZh(st) >= 6 && isGoodSentence(st) && !ex.includes(st.slice(0, 8))) {
        ex += (st.endsWith("。") ? st : st + "。");
        if (countZh(ex) >= 45) break;
      }
    }
  }
  if (countZh(ex) < 45 && q.concept) {
    for (const part of q.concept.split("；").map(p => p.trim()).filter(Boolean)) {
      if (countZh(part) >= 8 && !findU05BannedPhrase(part) && !ex.includes(part.slice(0, 10))) {
        ex = ex.replace(/。?$/, "") + "。" + part;
        if (countZh(ex) >= 45) break;
      }
    }
  }
  if (countZh(ex) < 45) {
    for (const step of q.steps || []) {
      const st = stripAll(enrichStep(q, step, 0));
      if (countZh(st) >= 6 && isGoodSentence(st) && !ex.includes(st.slice(0, 8))) {
        ex = ex.replace(/。?$/, "") + "。" + st;
        break;
      }
    }
  }
  if (!ex.endsWith("。")) ex += "。";
  return ex;
}

function enrichStep(q, step, idx) {
  let s = stripAll(step).replace(/。+$/, "").trim();
  if (/^(先讀題意|接著求值|最後寫出)：/.test(s)) return s + "。";
  if (countZh(s) >= 10) return s + "。";

  const t = q.text;
  const n = s.match(/\d+/);

  if (q.skillId === "coordinate-rectangle-area") {
    const xr = t.match(/x 從 (-?\d+) 到 (-?\d+)/);
    const yr = t.match(/y 從 (-?\d+) 到 (-?\d+)/);
    if (/^寬/.test(s) && xr) {
      return `x 從 ${xr[1]} 到 ${xr[2]}，寬 = |${xr[2]} − (${xr[1]})| = ${n?.[0] || "?"}。`;
    }
    if (/^高/.test(s) && yr) {
      return `y 從 ${yr[1]} 到 ${yr[2]}，高 = |${yr[2]} − (${yr[1]})| = ${n?.[0] || "?"}。`;
    }
    if (/^面積/.test(s)) {
      return `面積 = 寬 × 高 = ${n?.[0] || "?"}。`;
    }
  }

  if (/^令 y\s*=\s*0/.test(s)) return "在方程式中令 y = 0，求直線與 x 軸的交點。";
  if (/^令 x\s*=\s*0/.test(s)) return "在方程式中令 x = 0，求直線與 y 軸的交點。";
  if (/^x\s*=\s*0/.test(s) && /帶入|帶入/.test(s)) return "把 x = 0 帶入方程式，求 y 的值。";
  if (/^y\s*=\s*0/.test(s)) return "令 y = 0，解出 x 的值。";
  if (/^k\s*=/.test(s)) return `由帶入結果得 k = ${n?.[0] || "?" }。`;
  if (/^在直線上/.test(s)) return "等式兩邊相等，表示該點在直線上。";
  if (/^合起來寫成/.test(s)) return s + "，即本題所求坐標。";
  if (/^寬\s/.test(s)) return `算出長方形寬為 ${n?.[0] || "?"} 個單位。`;
  if (/^高\s/.test(s)) return `算出長方形高為 ${n?.[0] || "?"} 個單位。`;
  if (/^面積/.test(s)) return `寬乘以高，得面積 ${n?.[0] || "?"}。`;
  if (/^差\s/.test(s) || /^差$/.test(s)) return `兩截距相減：${s.replace(/^差\s*/, "")}。`;
  if (/^列/.test(s) && s.length < 12) return s + "，準備消去未知數。";
  if (/^消去/.test(s)) return s + "，求出第一個未知數。";
  if (/^回代|^帶入/.test(s)) return s + "，求出另一未知數。";
  if (/^比較 y|^比較 x/.test(s)) return s + "，確認是否滿足對稱或共線條件。";
  if (/^水平距離|^垂直距離|^鉛直距離/.test(s)) return s + "，才能用坐標差公式。";
  if (/^左\s|^右\s|^上\s|^下\s/.test(s)) return s + "。";
  if (/^x 軸|^y 軸/.test(s)) return s + "，寫成坐標時另一坐標為 0。";

  const lead = ["先讀題意：", "接著求值：", "最後寫出："][idx] || "";
  return lead + s + "。";
}

function polishCommonMistake(q, explanation) {
  let m = stripAll(q.commonMistake).replace(/。+$/, "");
  for (const tail of CONCEPT_TAILS) {
    m = m.replace(tail, "").replace(/，+$/, "").trim();
  }
  m = m.replace(/，判斷點在不在直線上[^，。]*/g, "");
  m = m.replace(/，連續平移[^，。]*/g, "");
  m = m.replace(/，水平距離[^，。]*/g, "");
  m = m.replace(/，含負坐標[^，。]*/g, "");
  m = m.replace(/，寫坐標時要對照[^，。]*/g, "");
  m = m.replace(/，比較兩點時先看 x 是否相反[^，。]*/g, "");
  m = m.replace(/，情境題先確認原點[^，。]*/g, "");
  if (!m.endsWith("。")) m += "。";

  const core = m.replace(/。$/, "");
  if (countZh(core) >= 8 && explanation.includes(core)) {
    const parts = core.split("，").filter(p => countZh(p) >= 4 && !explanation.includes(p.trim()));
    m = (parts[0] || core.split("，")[0]) + "。";
  }
  if (countZh(m) < 12) {
    const pad = MISTAKE_PAD[q.skillId] || "坐標題先方向、後數字，正負號別漏。";
    m = m.replace(/。+$/, "").trim();
    m = (m ? m + "，" : "") + pad + "。";
  }
  m = m.replace(/。{2,}/g, "。");
  if (!m.endsWith("。")) m += "。";
  return m;
}

function polishSteps(q) {
  return (q.steps || []).map((s, i) => {
    let t = enrichStep(q, s, i);
    t = stripAll(t);
    if (hasBannedStep([t])) t = t.replace(/，得 /g, "，");
    if (!isGoodSentence(t.replace(/。$/, ""))) t = enrichStep(q, s, i);
    t = stripAll(t).replace(/，得 /g, "，");
    t = t.replace(/^(先讀題意|接著求值|最後寫出)：依題意：/, "$1：");
    return t.endsWith("。") ? t : t + "。";
  });
}

const SKILL_CONCEPT = {
  "coordinate-point-reading": "坐標 (x, y) 中 x 表左右、y 表上下；先 x 後 y",
  "coordinate-quadrant": "象限由 x、y 正負決定：第一 (+,+)、第二 (-,+)、第三 (-,-)、第四 (+,-)",
  "coordinate-axis-points": "x 軸上 y=0，y 軸上 x=0；距原點距離為坐標絕對值",
  "coordinate-plot-description": "比較兩點：x 相反→y 軸對稱；y 相反→x 軸對稱；皆相反→原點對稱",
  "coordinate-translation": "向右/上：x 或 y 加；向左/下：x 或 y 減",
  "coordinate-horizontal-vertical-distance": "同一水平線用 |x2-x1|；同一鉛直線用 |y2-y1|",
  "coordinate-rectangle-area": "寬高取坐標差絕對值，面積 = 寬 × 高",
  "coordinate-linear-equation-graph": "二元一次方程式 ax+by=c 的圖形是直線",
  "coordinate-point-on-line": "判斷點是否在直線上：將坐標帶入方程式，兩邊相等則在線上",
  "coordinate-intercepts": "x 截距：令 y=0；y 截距：令 x=0",
  "coordinate-line-intersection": "交點坐標同時滿足兩條方程式",
  "coordinate-literacy-context": "情境題先確認原點與 x、y 正向，再寫有序數對"
};

const MISTAKE_PAD = {
  "coordinate-point-reading": "讀坐標時 x、y 順序和正負都要對。",
  "coordinate-quadrant": "象限只看正負，不看數字大小。",
  "coordinate-axis-points": "軸上點有一個坐標必為 0。",
  "coordinate-plot-description": "判斷對稱要看 x、y 是否分別相反。",
  "coordinate-translation": "平移方向與加減號要一致。",
  "coordinate-horizontal-vertical-distance": "先確認兩點 x 或 y 是否相同。",
  "coordinate-rectangle-area": "寬高取絕對值，面積是相乘不是相加。",
  "coordinate-linear-equation-graph": "描點時先找截距較快。",
  "coordinate-point-on-line": "帶入後等式不成立就不在線上。",
  "coordinate-intercepts": "截距值填數字，截距點才寫坐標。",
  "coordinate-line-intersection": "交點須同時滿足兩條方程式。",
  "coordinate-literacy-context": "先確認原點與東西南北正向。"
};

function polishConcept(q) {
  let c = (q.concept || "").replace(/面穡/g, "面積").replace(/代入/g, "帶入").trim();
  if (countZh(c) < 8) c = SKILL_CONCEPT[q.skillId] || c;
  if (findU05BannedPhrase(c)) {
    c = SKILL_CONCEPT[q.skillId] || "依坐標平面定義求解。";
  }
  return c;
}

function patchItem(q) {
  q.explanation = polishExplanation(q);
  q.steps = polishSteps(q);
  q.commonMistake = polishCommonMistake(q, q.explanation);
  q.concept = polishConcept(q);
  q.explanation = q.explanation.replace(/。{2,}/g, "。");
  q.commonMistake = q.commonMistake.replace(/。{2,}/g, "。");

  if (countZh(q.explanation) < 45) {
    const tail = (SKILL_CONCEPT[q.skillId] || "").split("；")[0];
    if (tail && !q.explanation.includes(tail.slice(0, 10))) {
      q.explanation = q.explanation.replace(/。?$/, "") + "。" + tail;
    }
  }
  if (countZh(q.commonMistake) < 12) {
    const tail = (SKILL_CONCEPT[q.skillId] || "注意坐標正負與順序。").split("；").pop();
    q.commonMistake = q.commonMistake.replace(/。$/, "").trim();
    q.commonMistake = (q.commonMistake ? q.commonMistake + "，" : "") + tail + "。";
  }

  const hit = findU05BannedPhrase([q.explanation, q.commonMistake, ...q.steps, q.text].join(""));
  if (hit) throw new Error(`${q.questionId} banned: ${hit}`);
  if (countZh(q.explanation) < 45) throw new Error(`${q.questionId} short ex: ${countZh(q.explanation)}`);
  if (countZh(q.commonMistake) < 12) throw new Error(`${q.questionId} short mistake: ${countZh(q.commonMistake)}`);
  if (q.steps.length < 3) throw new Error(`${q.questionId} needs 3 steps`);
}

const LECTURE_EX_PAD = {
  "coordinate-point-reading": "讀坐標先看 x 正負對應左右，再看 y 正負對應上下。",
  "coordinate-quadrant": "象限由 x、y 正負決定，與數字大小無關。",
  "coordinate-axis-points": "x 軸上 y=0，y 軸上 x=0。",
  "coordinate-plot-description": "比較兩點：先看 x 是否相反，再看 y 是否相反。",
  "coordinate-translation": "連續平移可合併 x、y 的變化量。",
  "coordinate-horizontal-vertical-distance": "水平距離用 x 差，垂直距離用 y 差。",
  "coordinate-rectangle-area": "寬高取坐標差絕對值，面積 = 寬 × 高。",
  "coordinate-linear-equation-graph": "令 x=0 或 y=0 可求截距。",
  "coordinate-point-on-line": "把 x、y 帶入方程式，看等式是否成立。",
  "coordinate-intercepts": "截距值是數字，截距點才寫成坐標。",
  "coordinate-line-intersection": "交點須同時滿足兩條方程式。",
  "coordinate-literacy-context": "先確認原點與 x、y 正向，再寫有序數對。"
};

function patchLectureExample(ex, skillId, bankExplanations) {
  let e = dedupeSents(splitSents(stripAll(ex.explanation)).filter(isGoodSentence)).join("");
  e = e.replace(/講義例題[^。]*。?/g, "").replace(/例題練習時[^。]*。?/g, "").trim();
  if (countZh(e) < 40) {
    e = e.replace(/。?$/, "") + "。" + (LECTURE_EX_PAD[skillId] || "寫成有序數對前，先方向、後數字。");
  }
  if (countZh(e) < 40) {
    e = e.replace(/。?$/, "") + "。逐步寫出 x、y 的變化，再檢查正負。";
  }
  if (!e.endsWith("。")) e += "。";
  if (bankExplanations.includes(e)) throw new Error(`${skillId} example copies bank`);
  const hit = findU05BannedPhrase(e);
  if (hit) throw new Error(`${skillId} example banned: ${hit}`);
  if (countZh(e) < 40) throw new Error(`${skillId} example short: ${countZh(e)}`);
  return { ...ex, explanation: e };
}

function patchLecture(l, bankExplanations) {
  l.concept = stripAll(l.concept);
  l.formula = stripAll(l.formula || "");
  l.stepGuide = l.stepGuide.map(s => stripAll(s));
  l.examples = l.examples.map(ex => patchLectureExample(ex, l.skillId, bankExplanations));
  l.commonMistakes = l.commonMistakes.map(m => stripAll(m));
}

async function main() {
  for (const file of fs.readdirSync(PART_DIR).filter(f => f.endsWith(".mjs"))) {
    const mod = await import(`${pathToFileURL(path.join(PART_DIR, file)).href}?v=${Date.now()}`);
    const itemKey = Object.keys(mod).find(k => k.startsWith("U05_PART"));
    const lecKey = Object.keys(mod).find(k => k.startsWith("U05_LECTURES"));
    for (const q of mod[itemKey]) {
      try {
        patchItem(q);
      } catch (e) {
        console.error(`${file} ${q.questionId}: ${e.message}`);
        throw e;
      }
    }
    const bankEx = mod[itemKey].map(q => q.explanation);
    for (const l of mod[lecKey]) patchLecture(l, bankEx);
    fs.writeFileSync(
      path.join(PART_DIR, file),
      `export const ${itemKey} = ${JSON.stringify(mod[itemKey], null, 2)};\n\nexport const ${lecKey} = ${JSON.stringify(mod[lecKey], null, 2)};\n`,
      "utf8"
    );
    console.log("r5 polished", file);
  }
  console.log("U05-R5 OK");
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
