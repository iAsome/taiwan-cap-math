#!/usr/bin/env node
/** U05-R3: remove semi-generic machine tails; natural teacher-style explanations. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  countZh,
  U05_R2_FILLER_RES,
  U05_R3_FILLER_RES,
  findU05BannedPhrase
} from "./v2-quality.mjs";

const PART_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "v2-u05-parts");

const DROP_SENT_RE =
  /都不符合|不符合本題條件|不符合方程式|方程式或直線圖形|計算或代入錯誤|故本題應選|正方向或 x、y 意義不符|正確數值應為|把平移方向或 x、y 的加減弄反|寫坐標或代數式時，正負號與 x、y 的先後順序都要正確|應為.{1,16}卻寫成|無法同時滿足兩條直線方程式|不是依 x、y 正負判斷|是截距點坐標，但題目問的是截距值|只是截距值不是點|只是數值，題目要的是截距點坐標|是套用寬高或距離公式時算錯/;

function stripAllFillers(s) {
  if (typeof s !== "string") return s;
  let t = s;
  for (const re of [...U05_R2_FILLER_RES, ...U05_R3_FILLER_RES]) t = t.replace(re, "");
  return t
    .replace(/，?勿把「[^」]+」誤當本題答案。?/g, "")
    .replace(/勿把「[^」]+」誤當本題答案。?/g, "")
    .replace(/，?要回到題目條件逐項核對。?/g, "")
    .replace(/。{2,}/g, "。")
    .replace(/，。/g, "。")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function parseCoord(s) {
  const m = String(s).match(/\((-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)\)/);
  return m ? { x: +m[1], y: +m[2], raw: m[0] } : null;
}

function splitSents(text) {
  return text.split(/(?<=。)/).map(s => s.trim()).filter(Boolean);
}

function rewritePickNumber(s) {
  return s.replace(/選\s+(-?\d+(?:\.\d+)?)\s+是(.+)/, (_, n, rest) => {
    const r = rest.trim();
    if (/周長/.test(r)) return `${n} 是把周長當成面積`;
    if (/只算/.test(r)) return `${n} ${r}`;
    if (/截距|常數|相加|相減|係數|一半|本身/.test(r)) return `${n} 來自${r}`;
    return `${n} 是${r}`;
  });
}

function demachineSentence(s) {
  let t = s.replace(/。$/, "").trim();
  if (!t || DROP_SENT_RE.test(t)) return "";

  t = rewritePickNumber(t);
  t = t.replace(/([；。])選\s+(-?\d+(?:\.\d+)?)\s+是/g, (_, pre, n) => `${pre}${n} 是`);
  t = t.replace(/選\s*「/g, "「");
  t = t.replace(/選\s+\(([^)]+)\)\s+/g, "($1) ");
  t = t.replace(/(^|[；。])選\s+\(([^)]+)\)/g, "$1($2)");
  t = t.replace(/選\s+\([^)]+\)\s*時，[^；。]+/g, "");
  t = t.replace(/「[^」]+」與「[^」]+」[^。]+/g, "");

  if (DROP_SENT_RE.test(t) || findU05BannedPhrase(t)) return "";
  if (!t.endsWith("。") && t.length) t += "。";
  return t;
}

function dedupeSents(sents) {
  const seen = new Set();
  return sents.filter(s => {
    const key = s.slice(0, 20);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function xDirLabel(x, text) {
  if (x > 0) return /東|向東/.test(text) ? "向東" : "向右";
  if (x < 0) return /西|向西/.test(text) ? "向西" : "向左";
  return "在 x 軸上";
}

function yDirLabel(y, text) {
  if (y > 0) return /北|向北/.test(text) ? "向北" : "向上";
  if (y < 0) return /南|向南/.test(text) ? "向南" : "向下";
  return "在 y 軸上";
}

function dismissCoord(wrong, correct, q) {
  const pw = parseCoord(wrong);
  const pc = parseCoord(correct);
  if (!pw || !pc) return null;
  const parts = [];
  if (pw.x !== pc.x) {
    if (pw.x > 0 && pc.x < 0)
      parts.push(`${pw.raw} 的 x 是正數，代表${xDirLabel(pw.x, q.text)}，不符合題目要求的${xDirLabel(pc.x, q.text)}方向`);
    else if (pw.x < 0 && pc.x > 0)
      parts.push(`${pw.raw} 的 x 是負數，代表${xDirLabel(pw.x, q.text)}，不符合題目要求的${xDirLabel(pc.x, q.text)}方向`);
    else parts.push(`${pw.raw} 的 x 坐標是 ${pw.x}，不是 ${pc.x}`);
  }
  if (pw.y !== pc.y) {
    if (pw.y > 0 && pc.y < 0)
      parts.push(`${pw.raw} 的 y 是正數，代表${yDirLabel(pw.y, q.text)}，不符合題目要求的${yDirLabel(pc.y, q.text)}方向`);
    else if (pw.y < 0 && pc.y > 0)
      parts.push(`${pw.raw} 的 y 是負數，代表${yDirLabel(pw.y, q.text)}，不符合題目要求的${yDirLabel(pc.y, q.text)}方向`);
    else parts.push(`${pw.raw} 的 y 坐標是 ${pw.y}，不是 ${pc.y}`);
  }
  if (pw.x === pc.y && pw.y === pc.x && pw.x !== pc.x) parts.push(`${pw.raw} 把 x、y 的順序寫反了`);
  return parts.length ? `${parts.join("；")}。` : null;
}

function dismissNumber(wrong, correct, q) {
  const w = wrong.trim();
  if (/面積|長方形/.test(q.text)) {
    if (/周長/.test(q.explanation)) return `${w} 是把周長當成面積`;
    if (/只算寬|只算高|相加/.test(q.explanation)) return `${w} 只用到一個邊長或把寬高相加，不是相乘`;
  }
  if (/截距/.test(q.text)) {
    if (/\(/.test(String(wrong))) return `${w} 是截距點坐標，題目要的是截距的數值`;
    if (/截距「值」|截距值/.test(q.text)) return `${w} 是數值但不符合此直線在 x=0 時的 y 值`;
    return `${w} 不是令 x=0 或 y=0 代回方程式得到的截距`;
  }
  if (/交點|聯立|相交/.test(q.text)) return `${w} 代入兩式後無法同時成立`;
  return `${w} 與依題意逐步計算得到的 ${correct} 不同`;
}

function dismissText(wrong, correct, q) {
  const w = wrong.trim();
  if (/象限/.test(q.text)) return `「${w}」只看單一正負或數字大小，沒有同時看 x、y 的正負`;
  if (/平移|移動/.test(q.text)) return `「${w}」把連續平移的加減方向合併錯了`;
  if (/對稱|原點|y 軸|x 軸/.test(q.text)) return `「${w}」沒有對照兩點 x、y 的正負關係`;
  if (/截距/.test(q.text)) return `「${w}」混淆截距值、截距點或截距差`;
  if (/交點|聯立|平行|重合/.test(q.text)) return `「${w}」沒有同時滿足兩條直線方程式`;
  if (/東|西|南|北|地圖|校園|原點/.test(q.text)) return `「${w}」把 x、y 的正負方向或順序理解錯了`;
  if (/水平|垂直|距離/.test(q.text)) return `「${w}」沒有先確認兩點是否在同一水平線或鉛直線上`;
  if (/在直線|方程式|帶入/.test(q.text)) return `「${w}」沒有把坐標代回方程式檢查`;
  return `「${w}」與依題意推得的「${correct}」不一致`;
}

function naturalWrongNote(wrong, correct, q) {
  if (parseCoord(wrong)) return dismissCoord(wrong, correct, q);
  if (/^-?\d+(?:\.\d+)?$/.test(String(wrong).trim())) return dismissNumber(wrong, correct, q);
  return dismissText(wrong, correct, q);
}

function mentionedWrong(ex, wrong) {
  const w = String(wrong).trim();
  if (w.length >= 2 && ex.includes(w.slice(0, Math.min(6, w.length)))) return true;
  const c = parseCoord(w);
  return !!(c && ex.includes(c.raw));
}

function rebuildExplanation(q) {
  const raw = stripAllFillers(q.explanation);
  let sents = dedupeSents(splitSents(raw).map(demachineSentence).filter(Boolean));
  const correct = q.choices[q.answerIndex];
  const wrongs = q.choices.filter((_, i) => i !== q.answerIndex);

  for (const w of wrongs) {
    if (countZh(sents.join("")) >= 45) break;
    const note = naturalWrongNote(w, correct, q);
    if (!note || findU05BannedPhrase(note)) continue;
    const sig = note.slice(0, 12);
    if (sents.join("").includes(sig)) continue;
    const clean = demachineSentence(note.replace(/。$/, ""));
    if (clean) sents.push(clean);
  }

  if (countZh(sents.join("")) < 45) {
    for (const w of wrongs) {
      const note = naturalWrongNote(w, correct, q);
      if (!note || findU05BannedPhrase(note)) continue;
      const clean = demachineSentence(note.replace(/。$/, ""));
      if (clean && !sents.includes(clean)) sents.push(clean);
      if (countZh(sents.join("")) >= 45) break;
    }
  }

  if (countZh(sents.join("")) < 45) {
    for (const step of q.steps || []) {
      const st = stripAllFillers(step);
      if (countZh(st) < 6 || findU05BannedPhrase(st)) continue;
      const sent = st.endsWith("。") ? st : `${st}。`;
      if (!sents.some(s => s.includes(sent.slice(0, 8)))) sents.push(sent);
      if (countZh(sents.join("")) >= 45) break;
    }
  }

  if (countZh(sents.join("")) < 45 && q.concept) {
    const tail = q.concept.split("；")[0].trim();
    if (countZh(tail) >= 10 && !findU05BannedPhrase(tail)) {
      sents.push(tail.endsWith("。") ? tail : `${tail}。`);
    }
  }

  let ex = dedupeSents(sents).join("");
  if (countZh(ex) < 45 && MISTAKE_PAD[q.skillId]) {
    ex = ex.replace(/。?$/, "") + "。" + MISTAKE_PAD[q.skillId];
  }
  if (!ex.endsWith("。")) ex += "。";
  return ex;
}

const MISTAKE_PAD = {
  "coordinate-point-reading": "讀坐標時先寫 x 再寫 y，正負號要對照題目的左右上下方向。",
  "coordinate-quadrant": "判斷象限只看 x、y 正負，在坐標軸上的點不屬任何象限。",
  "coordinate-axis-points": "在 x 軸上 y 必為 0，在 y 軸上 x 必為 0，距原點距離看對應坐標的絕對值。",
  "coordinate-plot-description": "比較兩點時先看 x 是否相反、再看 y 是否相反，才能判斷對稱關係。",
  "coordinate-translation": "連續平移時把 x、y 的變化分開合併，方向與正負號要一致。",
  "coordinate-horizontal-vertical-distance": "水平距離只適用 y 相同的兩點，垂直距離只適用 x 相同的兩點。",
  "coordinate-rectangle-area": "含負坐標時寬高仍取坐標差的絕對值，面積是寬乘高不是相加。",
  "coordinate-linear-equation-graph": "水平線是 y 等於常數，垂直線是 x 等於常數，描點時先找截距較快。",
  "coordinate-point-on-line": "判斷點在不在直線上，必須把 x、y 代入方程式看等式是否成立。",
  "coordinate-intercepts": "截距值是數字，截距點才寫成與坐標軸相交的坐標。",
  "coordinate-line-intersection": "交點坐標要同時代入兩條方程式驗證。",
  "coordinate-literacy-context": "情境題先確認原點與 x、y 正向，再把文字位置寫成有序數對。"
};

function fixCommonMistake(q) {
  let m = stripAllFillers(q.commonMistake)
    .replace(/，?(常見誤選|勿選)「[^」]+」(，?(常見誤選|勿選)「[^」]+」)*/g, "")
    .replace(/。+$/, "")
    .trim();
  if (findU05BannedPhrase(m)) m = m.split("，").filter(p => !findU05BannedPhrase(p)).join("，");
  if (countZh(m) < 12) m = (m ? `${m}，` : "") + (MISTAKE_PAD[q.skillId] || "把題目數字寫進算式再比對選項。");
  return m.endsWith("。") ? m : `${m}。`;
}

function sanitizeStep(s) {
  let t = stripAllFillers(String(s));
  t = t.replace(/([xy])\s*應為/g, "$1 為").replace(/應為/g, "為").replace(/卻寫成/g, "寫成");
  const out = demachineSentence(t.replace(/。$/, ""));
  return out || (t.endsWith("。") ? t : `${t}。`);
}

function patchItem(q) {
  q.explanation = rebuildExplanation(q);
  q.steps = q.steps.map(sanitizeStep);
  q.commonMistake = fixCommonMistake(q);
  const hit = findU05BannedPhrase([q.explanation, q.commonMistake, ...q.steps, q.text].join(""));
  if (hit) throw new Error(`${q.questionId} banned after R3: ${hit}`);
  if (countZh(q.explanation) < 45) throw new Error(`${q.questionId} explanation ${countZh(q.explanation)} zh`);
  if (countZh(q.commonMistake) < 12) throw new Error(`${q.questionId} commonMistake short`);
}

function patchLectureExample(ex) {
  let e = dedupeSents(splitSents(stripAllFillers(ex.explanation)).map(demachineSentence).filter(Boolean)).join("");
  if (countZh(e) < 40) e += " 練習時把文字條件寫成 x、y 的正負變化，再寫成有序數對。";
  if (!e.endsWith("。")) e += "。";
  return { ...ex, explanation: e };
}

function patchLecture(l) {
  l.concept = stripAllFillers(l.concept);
  l.formula = stripAllFillers(l.formula || "");
  l.stepGuide = l.stepGuide.map(s => stripAllFillers(s));
  l.examples = l.examples.map(patchLectureExample);
  l.commonMistakes = l.commonMistakes.map(m => stripAllFillers(m));
  for (const ex of l.examples) {
    if (findU05BannedPhrase(ex.explanation)) throw new Error(`${l.skillId} example banned`);
  }
}

async function main() {
  for (const file of fs.readdirSync(PART_DIR).filter(f => f.endsWith(".mjs"))) {
    const mod = await import(`${pathToFileURL(path.join(PART_DIR, file)).href}?v=${Date.now()}`);
    const itemKey = Object.keys(mod).find(k => k.startsWith("U05_PART"));
    const lecKey = Object.keys(mod).find(k => k.startsWith("U05_LECTURES"));
    for (const q of mod[itemKey]) patchItem(q);
    for (const l of mod[lecKey]) patchLecture(l);
    fs.writeFileSync(
      path.join(PART_DIR, file),
      `export const ${itemKey} = ${JSON.stringify(mod[itemKey], null, 2)};\n\nexport const ${lecKey} = ${JSON.stringify(mod[lecKey], null, 2)};\n`,
      "utf8"
    );
    console.log("r3 cleaned", file);
  }
  console.log("U05-R3 parts OK");
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
