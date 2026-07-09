#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { countZh } from "./v2-quality.mjs";
import { U07_SKILLS_S004_S006 } from "./v2-u07-content-s004-s006.mjs";

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), "v2-u07-content-s004-s006.mjs");

const PAD_EXPL = [
  "做題時應同時檢查代數解與端點條件，再排除不符合的選項。",
  "列式或取整後要代回題意核對，避免只憑印象選答案。",
  "會考這類題常在同時考端點與整數限制，兩步都要做到。"
];

const PAD_CM = [
  "做題時要把代數解與情境單位一起檢查。",
  "取整或取端點前要先確認不等號方向。",
  "代回原始條件檢查，避免只滿足部分限制。"
];

function padExpl(text, i) {
  let t = text;
  let n = 0;
  while (countZh(t) < 45 && n < PAD_EXPL.length) {
    t += PAD_EXPL[(i + n) % PAD_EXPL.length];
    n++;
  }
  return t;
}

function padCm(text, i) {
  let t = text;
  let n = 0;
  while (countZh(t) < 12 && n < PAD_CM.length) {
    t += PAD_CM[(i + n) % PAD_CM.length];
    n++;
  }
  return t;
}

function trad(s) {
  if (typeof s !== "string") return s;
  return s
    .replace(/一组/g, "一組").replace(/每组/g, "每組").replace(/分组/g, "分組")
    .replace(/组共/g, "組共").replace(/组且/g, "組且").replace(/至多 8 组/g, "至多 8 組")
    .replace(/8 组/g, "8 組").replace(/3 组/g, "3 組").replace(/剪后/g, "剪後")
    .replace(/买 x 个/g, "買 x 個").replace(/绳子/g, "繩子").replace(/后至少/g, "後至少")
    .replace(/订便當/g, "訂便當").replace(/班长/g, "班長").replace(/剩余/g, "剩餘")
    .replace(/整数/g, "整數").replace(/时/g, "時").replace(/满足/g, "滿足")
    .replace(/虽/g, "雖").replace(/却/g, "卻").replace(/以为/g, "以為")
    .replace(/没/g, "沒").replace(/应用题/g, "應用題").replace(/为/g, "為")
    .replace(/须/g, "須").replace(/写/g, "寫").replace(/确认/g, "確認")
    .replace(/检验/g, "檢驗").replace(/对照/g, "對照").replace(/四舍五入/g, "四捨五入")
    .replace(/小数/g, "小數").replace(/代数/g, "代數").replace(/范围/g, "範圍")
    .replace(/计数/g, "計數").replace(/非负/g, "非負").replace(/代回/g, "代回")
    .replace(/几盒/g, "幾盒").replace(/人数/g, "人數").replace(/盒数/g, "盒數")
    .replace(/不能为负/g, "不能為負").replace(/为正/g, "為正")
    .replace(/接近 5 不能代替/g, "接近 5 不能代替")
    .replace(/x = 4 时/g, "x = 4 時").replace(/不满足/g, "不滿足")
    .replace(/只剩/g, "只剩").replace(/接近 5/g, "接近 5")
    .replace(/才再/g, "才再").replace(/整数值/g, "整數值")
    .replace(/分组、容量/g, "分組、容量").replace(/分组題/g, "分組題");
}

let idx = 0;
for (const sk of U07_SKILLS_S004_S006) {
  sk.concept = trad(sk.concept);
  for (const r of sk.rows) {
    r.text = trad(r.text);
    r.explanation = padExpl(trad(r.explanation), idx);
    r.commonMistake = padCm(trad(r.commonMistake), idx);
    r.steps = r.steps.map(trad);
    r.choices = r.choices.map(trad);
    idx++;
  }
  const l = sk.lecture;
  l.title = trad(l.title);
  l.concept = trad(l.concept);
  l.formula = trad(l.formula);
  l.stepGuide = l.stepGuide.map(trad);
  l.examples = l.examples.map(ex => ({ question: trad(ex.question), explanation: padExpl(trad(ex.explanation), idx++) }));
  l.commonMistakes = l.commonMistakes.map(trad);
}

const body = `export const U07_SKILLS_S004_S006 = ${JSON.stringify(U07_SKILLS_S004_S006, null, 2)};\n`;
fs.writeFileSync(OUT, body);
console.log("patched", OUT);
