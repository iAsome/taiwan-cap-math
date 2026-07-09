#!/usr/bin/env node
/** U05-R4: fully humanize explanations; strip machine tails; max 2 natural wrong-reasons. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  countZh,
  U05_R2_FILLER_RES,
  U05_R3_FILLER_RES,
  U05_R4_FILLER_RES,
  findU05BannedPhrase
} from "./v2-quality.mjs";

const PART_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "v2-u05-parts");

const ALL_STRIP = [...U05_R2_FILLER_RES, ...U05_R3_FILLER_RES, ...U05_R4_FILLER_RES];

const DROP_SENT_RE =
  /與依題意|沒有對照|沒有比較|不符合題目|不符合|正負關係|代表向[左右]，不符合|不是令 x=0|只用到一個邊長|x 坐標是 \d+，不是|y 坐標是 \d+，不是|把 x、y 的順序寫反|的 x 是[正負]數，代表|的 y 是[正負]數，代表|不一致|沒有同時滿足|沒有先確認|混淆截距|只看單一|把連續平移|故本題|誤當|勿把|選「|選 \(|逐項|驗算|核對|代入題意|對照選項|題目選項|皆不符合/;

function stripAll(s) {
  if (typeof s !== "string") return s;
  let t = s;
  for (const re of ALL_STRIP) t = t.replace(re, "");
  return t
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

function isGoodSentence(s) {
  if (!s || DROP_SENT_RE.test(s)) return false;
  return !findU05BannedPhrase(s);
}

function dedupeSents(sents) {
  const seen = new Set();
  return sents.filter(s => {
    const k = s.slice(0, 18);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

function mentioned(ex, wrong) {
  const w = String(wrong).trim();
  if (w.length >= 2 && ex.includes(w.slice(0, Math.min(6, w.length)))) return true;
  const c = parseCoord(w);
  return !!(c && ex.includes(c.raw));
}

function humanCoordWrong(q, wrong, correct) {
  const pw = parseCoord(wrong);
  const pc = parseCoord(correct);
  if (!pw || !pc) return null;
  const t = q.text;
  const parts = [];
  if (/向左|左方|西/.test(t) && pw.x > 0 && pc.x < 0)
    parts.push(`寫成 ${pw.raw} 時，x 為正數，把「向左」弄成向右`);
  else if (/向右|右方|東/.test(t) && pw.x < 0 && pc.x > 0)
    parts.push(`寫成 ${pw.raw} 時，x 為負數，把「向右」弄成向左`);
  if (/向上|上方|北/.test(t) && pw.y < 0 && pc.y > 0)
    parts.push(`寫成 ${pw.raw} 時，y 為負數，把「向上」弄成向下`);
  else if (/向下|下方|南/.test(t) && pw.y > 0 && pc.y < 0)
    parts.push(`寫成 ${pw.raw} 時，y 為正數，把「向下」弄成向上`);
  if (pw.x === pc.y && pw.y === pc.x && pw.x !== pc.x)
    parts.push(`寫成 ${pw.raw} 是把 x、y 兩個數字對調`);
  if (parts.length) return `${parts.slice(0, 2).join("；")}。`;
  if (!parts.length && pw.x !== pc.x && pw.y !== pc.y)
    parts.push(`寫成 ${pw.raw} 時，坐標與 ${pc.raw} 不同`);
  else if (!parts.length && pw.x !== pc.x)
    parts.push(`寫成 ${pw.raw} 時，x 應是 ${pc.x} 而不是 ${pw.x}`);
  else if (!parts.length && pw.y !== pc.y)
    parts.push(`寫成 ${pw.raw} 時，y 應是 ${pc.y} 而不是 ${pw.y}`);
  return parts.length ? `${parts[0]}。` : null;
}

function humanNumberWrong(q, wrong, correct) {
  const w = wrong.trim();
  const c = String(correct).trim();
  const blob = q.explanation + q.text;
  if (/面積|長方形/.test(q.text)) {
    if (/\+/.test(blob) || /相加/.test(blob)) return `${w} 是把寬和高相加，不是相乘。`;
    if (/周長/.test(blob)) return `${w} 是把周長當成面積。`;
    if (/只算|寬算錯/.test(blob)) return `${w} 把寬或高少算了一邊。`;
  }
  if (/截距/.test(q.text)) {
    if (/\(/.test(wrong)) return `${w} 是截距點坐標，這題要填截距的數值。`;
    if (w === c) return null;
    if (/只算 y 截距|本身/.test(blob) && w !== c) return `${w} 只算到一個截距，沒有依題意相減或化簡。`;
  }
  if (/交點|聯立/.test(q.text) && w !== c) return `${w} 代入兩式後無法同時成立。`;
  return null;
}

function humanTextWrong(q, wrong, correct) {
  const w = String(wrong).trim();
  const c = String(correct).trim();
  if (/象限/.test(q.text) && /數字|大小/.test(w)) {
    return `「${w.length > 16 ? w.slice(0, 16) + "…" : w}」用數字大小判斷象限，應看 x 與 y 的正負號。`;
  }
  if (/平移|移動/.test(q.text) && w !== c) {
    return `「${w.length > 14 ? w.slice(0, 14) + "…" : w}」把連續平移的加減方向合併錯了。`;
  }
  if (/對稱|原點|y 軸|x 軸/.test(q.text) && w !== c) {
    const short = w.length > 14 ? w.slice(0, 14) + "…" : w;
    return `「${short}」未比較兩點坐標是否對稱。`;
  }
  if (/在直線|帶入|方程式/.test(q.text) && /不在|在 y 軸|無法/.test(w)) {
    return `應把坐標代入方程式檢查，不能憑印象判斷在不在線上。`;
  }
  if (/東|西|南|北|左|右|上|下|地圖|校/.test(q.text) && w !== c && w.length < 24) {
    if (/對調|順序/.test(w + c + q.text)) return `「${w.slice(0, 14)}…」把 x、y 兩個數字對調了。`;
    if (/左.*下|右.*上/.test(w) && /左.*下|右.*上/.test(c)) {
      const wm = w.match(/(\d+)/g) || [];
      const cm = c.match(/(\d+)/g) || [];
      if (wm.length >= 2 && cm.length >= 2 && wm.join() !== cm.join())
        return `「${w}」把兩個距離數字對調了。`;
    }
    return null;
  }
  return null;
}

function humanWrongLine(q, wrong, correct) {
  const line =
    humanCoordWrong(q, wrong, correct) ||
    humanNumberWrong(q, wrong, correct) ||
    humanTextWrong(q, wrong, correct);
  if (!line || findU05BannedPhrase(line)) return null;
  return line;
}

const CONCEPT_PAD = {
  "coordinate-point-reading": "讀坐標時先 x 後 y，正負號對照題目的左右或東西、上下或南北方向。",
  "coordinate-quadrant": "象限由 x 與 y 的正負號決定，與數字大小無關。",
  "coordinate-axis-points": "在 x 軸上 y 為 0，在 y 軸上 x 為 0；距原點距離看該坐標的絕對值。",
  "coordinate-plot-description": "比較兩點時先看 x 是否相反、再看 y 是否相反，才能判斷對稱。",
  "coordinate-translation": "連續平移可把 x、y 的變化分別合併，方向與正負號要一致。",
  "coordinate-horizontal-vertical-distance": "水平距離只適用 y 相同的兩點，垂直距離只適用 x 相同的兩點。",
  "coordinate-rectangle-area": "含負坐標時寬高仍取坐標差的絕對值，面積是寬乘高。",
  "coordinate-linear-equation-graph": "水平線是 y 等於常數，垂直線是 x 等於常數。",
  "coordinate-point-on-line": "判斷點在不在直線上，必須把 x、y 代入方程式看等式是否成立。",
  "coordinate-intercepts": "截距值是數字，截距點才寫成與坐標軸相交的坐標。",
  "coordinate-line-intersection": "交點坐標要同時代入兩條方程式驗證。",
  "coordinate-literacy-context": "情境題先確認原點與 x、y 正向，再把文字位置寫成有序數對。"
};

function rebuildExplanation(q) {
  const correct = q.choices[q.answerIndex];
  let sents = dedupeSents(
    splitSents(stripAll(q.explanation)).filter(isGoodSentence)
  );

  // drop very short quote-only fragments and stale wrong-choice rewrites
  sents = sents.filter(s => {
    const t = s.replace(/。$/, "").trim();
    return !( /^「[^」]+」$/.test(t) ) && !/^寫成/.test(t);
  });

  const wrongs = q.choices.filter((_, i) => i !== q.answerIndex);
  let added = 0;
  for (const w of wrongs) {
    if (added >= 2 || countZh(sents.join("")) >= 50) break;
    if (mentioned(sents.join(""), w)) continue;
    const line = humanWrongLine(q, w, correct);
    if (!line) continue;
    const clean = line.endsWith("。") ? line : line + "。";
    const key = clean.slice(0, 8);
    if (sents.some(s => s.includes(key))) continue;
    sents.push(clean);
    added++;
  }

  if (countZh(sents.join("")) < 45) {
    for (const step of q.steps || []) {
      const st = stripAll(step);
      if (countZh(st) >= 4 && isGoodSentence(st.replace(/。$/, ""))) {
        const sent = st.endsWith("。") ? st : st + "。";
        if (!sents.some(s => s.includes(sent.slice(0, 6)))) sents.push(sent);
      }
      if (countZh(sents.join("")) >= 45) break;
    }
  }

  let ex = dedupeSents(sents).join("");
  if (countZh(ex) < 45) {
    ex = ex.replace(/。?$/, "") + "。" + CONCEPT_PAD[q.skillId];
  }
  if (countZh(ex) < 45 && q.concept) {
    const tail = q.concept.split("；")[0].trim();
    if (!findU05BannedPhrase(tail)) ex = ex.replace(/。?$/, "") + "。" + tail;
  }
  if (countZh(ex) < 45) {
    for (const step of q.steps || []) {
      ex = ex.replace(/。?$/, "") + "。" + stripAll(step);
      if (countZh(ex) >= 45) break;
    }
  }
  if (!ex.endsWith("。")) ex += "。";
  return ex;
}

function fixCommonMistake(q) {
  let m = stripAll(q.commonMistake)
    .replace(/，?(常見誤選|勿選)「[^」]+」(，?(常見誤選|勿選)「[^」]+」)*/g, "")
    .replace(/。+$/, "")
    .trim();
  if (findU05BannedPhrase(m)) {
    m = m.split("，").filter(p => !findU05BannedPhrase(p)).join("，");
  }
  if (countZh(m) < 12) {
    m = (m ? m + "，" : "") + (CONCEPT_PAD[q.skillId] || "把題目數字寫進算式再比對。");
  }
  return m.endsWith("。") ? m : m + "。";
}

function sanitizeStep(s) {
  let t = stripAll(String(s));
  t = t.replace(/應為/g, "為").replace(/卻寫成/g, "寫成");
  t = t.replace(/逐項檢查/g, "先檢查").replace(/不符合/g, "不屬於");
  if (!isGoodSentence(t)) {
    t = t.replace(/逐項/g, "先").replace(/不符合/g, "不屬於");
    if (findU05BannedPhrase(t)) return s;
  }
  if (!isGoodSentence(t)) return s;
  return t.endsWith("。") ? t : t + "。";
}

function patchItem(q) {
  q.explanation = rebuildExplanation(q);
  q.steps = q.steps.map(sanitizeStep);
  q.commonMistake = fixCommonMistake(q);
  const hit = findU05BannedPhrase([q.explanation, q.commonMistake, ...q.steps].join(""));
  if (hit) throw new Error(`${q.questionId} banned: ${hit}`);
  if (countZh(q.explanation) < 45) throw new Error(`${q.questionId} short: ${countZh(q.explanation)}`);
  if (countZh(q.commonMistake) < 12) throw new Error(`${q.questionId} mistake short`);
}

const LECTURE_EX_PAD = {
  "coordinate-point-reading": "讀坐標時先看 x 正負對應左右，再看 y 正負對應上下。",
  "coordinate-quadrant": "判斷象限只看 x、y 正負，與數字大小無關。",
  "coordinate-axis-points": "在 x 軸上 y 為 0，在 y 軸上 x 為 0。",
  "coordinate-plot-description": "比較兩點時先看 x 是否相反、再看 y 是否相反。",
  "coordinate-translation": "連續平移可把 x、y 變化分別合併。",
  "coordinate-horizontal-vertical-distance": "水平距離用 x 坐標差，垂直距離用 y 坐標差。",
  "coordinate-rectangle-area": "寬高取坐標差的絕對值，面積是寬乘高。",
  "coordinate-linear-equation-graph": "代入 x=0 或 y=0 可求截距。",
  "coordinate-point-on-line": "把 x、y 代入方程式，看等式是否成立。",
  "coordinate-intercepts": "截距值是數字，截距點才寫成坐標。",
  "coordinate-line-intersection": "交點坐標要同時滿足兩條方程式。",
  "coordinate-literacy-context": "情境題先確認原點與 x、y 正向。"
};

function patchLectureExample(ex, skillId) {
  let e = dedupeSents(splitSents(stripAll(ex.explanation)).filter(isGoodSentence)).join("");
  e = e.replace(/講義例題[^。]*。?/g, "").replace(/例題練習時[^。]*。?/g, "").trim();
  if (countZh(e) < 40 && LECTURE_EX_PAD[skillId]) {
    e = e.replace(/。?$/, "") + "。" + LECTURE_EX_PAD[skillId];
  }
  if (countZh(e) < 40) e += "練習時先方向、後數字，寫成有序數對。";
  if (!e.endsWith("。")) e += "。";
  const hit = findU05BannedPhrase(e);
  if (hit) throw new Error(`lecture example banned: ${hit}`);
  if (countZh(e) < 40) throw new Error(`lecture example short: ${countZh(e)}`);
  return { ...ex, explanation: e };
}

function patchLecture(l) {
  l.concept = stripAll(l.concept);
  l.formula = stripAll(l.formula || "");
  l.stepGuide = l.stepGuide.map(s => stripAll(s));
  l.examples = l.examples.map(ex => patchLectureExample(ex, l.skillId));
  l.commonMistakes = l.commonMistakes.map(m => stripAll(m));
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
    console.log("r4 cleaned", file);
  }
  console.log("U05-R4 OK");
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
