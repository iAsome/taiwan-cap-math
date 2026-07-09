#!/usr/bin/env node
/** Strip skill-level pad phrases from U10 content rows. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { countZh } from "./v2-quality.mjs";

const tools = path.dirname(fileURLToPath(import.meta.url));
const CONTENT = [
  "v2-u10-content-s001-s003.mjs",
  "v2-u10-content-s004-s006.mjs",
  "v2-u10-content-s007-s009.mjs",
  "v2-u10-content-s010-s012.mjs",
];

export const U10_R2_STRIP = [
  "只有字母與指數完全相同的項才能合併。",
  "合併時字母與指數不變，只動係數。",
  "交叉相乘四項都要寫出，再合併同類項。",
  "二項式展開要四項相乘再合併同類項。",
  "減括號時括號內每一項符號都要改變。",
  "去括號後同次項才能合併，係數帶符號。",
  "代入後先算括號內，再算乘方，最後加減。",
  "代入時負數與分數都要加括號再計算。",
  "分配律要乘到括號內每一項。",
  "外項乘每一內項，漏乘一項結果就錯。",
  "完全平方和的中間項係數一定是正兩倍乘積。",
  "加號平方公式中間項係數一定是 2ab。",
  "加號平方公式中間項係數一定是",
  "用公式時確認中間項是加號兩倍乘積。",
  "減號平方的中間項一定是負的兩倍乘積。",
  "減號平方的中間項一定是負兩倍乘積。",
  "減號平方的中間項一定是減兩倍乘積，。",
  "中間項係數一定是兩倍乘積。",
  "展開後三項符號都要看清楚。",
  "先辨識是平方、平方差還是一般乘法。",
  "認出型態後再套用對應乘法公式較省事。",
  "平方差展開後中間項會互相抵消。",
  "兩個平方相減才用平方差，先確認型態。",
  "面積或周長題先列代數式再展開合併。",
  "不同字母的因數要全部保留在結果裡。",
  "單項相乘係數相乘、同底指數相加。",
  "同次項合併時係數相加字母不變。",
  "去括號時每一項符號都要處理。",
  "代入數值後再算一次確認無誤。",
  "逐步計算並核對每一項。",
  "同類項合併只動係數。",
  "寫完再回頭確認係數、指數與符號是否都處理到。",
  "展開後要檢查每一項的係數與符號，合併同類項後再與題意比對。",
  "，書寫時要分項處理。",
  "，符號或係數處理不完整。",
  "符號或係數處理不完整。",
  "書寫時要分項處理。",
];

export function stripPads(text) {
  if (typeof text !== "string") return text;
  let o = text;
  for (const p of U10_R2_STRIP) {
    while (o.includes(p)) o = o.split(p).join("");
  }
  o = o.replace(/。+/g, "。").replace(/，+/g, "，").trim();
  if (o.endsWith("，")) o = o.slice(0, -1) + "。";
  if (o && !o.endsWith("。")) o += "。";
  return o;
}

export async function stripAllContent() {
  for (const f of CONTENT) {
    const p = path.join(tools, f);
    let out = fs.readFileSync(p, "utf8");
    out = out.replace(/("explanation": ")([^"]*)(")/g, (_, a, body, z) => a + stripPads(body) + z);
    out = out.replace(/("commonMistake": ")([^"]*)(")/g, (_, a, body, z) => a + stripPads(body) + z);
    fs.writeFileSync(p, out);
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  await stripAllContent();
  const { SKILL_ROWS } = await import(pathToFileURL(path.join(tools, "v2-u10-content.mjs")).href);
  let short = 0;
  for (const sk of SKILL_ROWS) {
    for (let i = 0; i < sk.rows.length; i++) {
      const r = sk.rows[i];
      const id = `u10-s${String(sk.seq).padStart(3, "0")}-v${i + 1}`;
      if (countZh(r.explanation) < 45) console.log("short expl", id, countZh(r.explanation));
      if (countZh(r.commonMistake) < 12) console.log("short cm", id, countZh(r.commonMistake));
    }
  }
  console.log("u10-r2-strip: done");
}
