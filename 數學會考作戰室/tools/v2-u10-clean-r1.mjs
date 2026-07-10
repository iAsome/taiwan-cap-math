#!/usr/bin/env node
/**
 * U10-R1: strip template tails from content source files.
 * ponytail: regex strip only; per-question zh padding done in content edits.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { countZh } from "./v2-quality.mjs";

const DIR = path.dirname(fileURLToPath(import.meta.url));
const FILES = [
  "v2-u10-content-s001-s003.mjs",
  "v2-u10-content-s004-s006.mjs",
  "v2-u10-content-s007-s009.mjs",
  "v2-u10-content-s010-s012.mjs",
];

const EXPL_TAILS = [
  "寫完再回頭確認係數、指數與符號是否都處理到。",
  "整理時把同次項分組，較不容易漏項或合併錯。",
  "展開後要檢查每一項的係數與符號，合併同類項後再與題意比對。",
];

const CM_FRAGMENTS = [
  "，書寫時要分項處理。",
  "，符號或係數處理不完整。",
  "符號或係數處理不完整。",
  "書寫時要分項處理。",
  "，指數相加錯，書寫時要分項處理。",
];

function stripExpl(s) {
  let out = s;
  for (const t of EXPL_TAILS) {
    out = out.split(t).join("");
  }
  return out.replace(/。+/g, "。").replace(/；+/g, "；").trim();
}

function stripCm(s) {
  let out = s;
  for (const f of CM_FRAGMENTS) out = out.split(f).join("");
  return out.replace(/，+/g, "，").replace(/。+/g, "。").trim();
}

function patchFile(name) {
  const p = path.join(DIR, name);
  let text = fs.readFileSync(p, "utf8");
  let explN = 0;
  let cmN = 0;
  text = text.replace(/"explanation": "([^"]*)"/g, (_, body) => {
    const cleaned = stripExpl(body);
    if (cleaned !== body) explN++;
    return `"explanation": ${JSON.stringify(cleaned)}`;
  });
  text = text.replace(/"commonMistake": "([^"]*)"/g, (_, body) => {
    const cleaned = stripCm(body);
    if (cleaned !== body) cmN++;
    return `"commonMistake": ${JSON.stringify(cleaned)}`;
  });
  fs.writeFileSync(p, text);
  return { name, explN, cmN };
}

const stats = FILES.map(patchFile);
console.log("stripped:", stats);

// report short fields
import { SKILL_ROWS } from "./v2-u10-content.mjs";
const short = [];
for (const sk of SKILL_ROWS) {
  for (let i = 0; i < sk.rows.length; i++) {
    const r = sk.rows[i];
    const id = `u10-s${String(sk.seq).padStart(3, "0")}-v${i + 1}`;
    const ez = countZh(r.explanation);
    const cz = countZh(r.commonMistake);
    if (ez < 45) short.push({ id, skillId: sk.skillId, field: "explanation", z: ez });
    if (cz < 12) short.push({ id, skillId: sk.skillId, field: "commonMistake", z: cz });
  }
}
console.log("short after strip:", short.length);
for (const s of short) console.log(s.id, s.skillId, s.field, s.z);
