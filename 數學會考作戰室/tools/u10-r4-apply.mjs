#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { countZh } from "./v2-quality.mjs";
import { composeRow, R4_SKILL, stepOverlapCount, stripSkillText } from "./u10-r4-compose.mjs";

const tools = path.dirname(fileURLToPath(import.meta.url));
const CONTENT = [
  "v2-u10-content-s001-s003.mjs",
  "v2-u10-content-s004-s006.mjs",
  "v2-u10-content-s007-s009.mjs",
  "v2-u10-content-s010-s012.mjs",
];
const PARTS = [
  "v2-u10-parts/s001-s003.mjs",
  "v2-u10-parts/s004-s006.mjs",
  "v2-u10-parts/s007-s009.mjs",
  "v2-u10-parts/s010-s012.mjs",
];

const { SKILL_ROWS } = await import(pathToFileURL(path.join(tools, "v2-u10-content.mjs")).href);
const patchMap = new Map();

for (const sk of SKILL_ROWS) {
  for (let i = 0; i < sk.rows.length; i++) {
    const r = sk.rows[i];
    const out = composeRow(sk.skillId, i, r);
    const blob = out.explanation + out.commonMistake;
    if (countZh(out.explanation) < 45) throw new Error(`${sk.skillId}#${i} expl short ${countZh(out.explanation)}`);
    if (countZh(out.commonMistake) < 12) throw new Error(`${sk.skillId}#${i} cm short ${countZh(out.commonMistake)}`);
    if (stepOverlapCount(out.explanation, r.steps) >= 2) {
      throw new Error(`${sk.skillId}#${i} step overlap ${stepOverlapCount(out.explanation, r.steps)}`);
    }
    if (R4_SKILL.some((p) => blob.includes(p))) {
      throw new Error(`${sk.skillId}#${i} skill tail: ${R4_SKILL.find((p) => blob.includes(p))}`);
    }
    if (/接著|此題所求為|此錯法會讓本題結果不正確/.test(blob)) {
      throw new Error(`${sk.skillId}#${i} mechanical phrase`);
    }
    if (out.commonMistake === out.explanation) throw new Error(`${sk.skillId}#${i} cm copied expl`);
    patchMap.set(`${sk.skillId}#${i}`, out);
  }
}

function patchContentFile(p) {
  let out = fs.readFileSync(p, "utf8");
  let skill = "";
  let row = -1;
  out = out.replace(
    /("skillId": "([^"]+)")|("explanation": "([^"]*)")|("commonMistake": "([^"]*)")/g,
    (m, _a, sid, _c, expl, _e, cm) => {
      if (sid) {
        skill = sid;
        row = -1;
        return `"skillId": "${sid}"`;
      }
      if (expl !== undefined) {
        row++;
        return `"explanation": ${JSON.stringify(patchMap.get(`${skill}#${row}`).explanation)}`;
      }
      if (cm !== undefined) {
        return `"commonMistake": ${JSON.stringify(patchMap.get(`${skill}#${row}`).commonMistake)}`;
      }
      return m;
    }
  );
  fs.writeFileSync(p, out);
}

function patchPartsFile(p) {
  let out = fs.readFileSync(p, "utf8");
  let skill = "";
  let rowIdx = 0;
  const skillNext = new Map();
  out = out.replace(
    /("skillId": "([^"]+)")|("explanation": "([^"]*)")|("commonMistake": "([^"]*)")/g,
    (m, _a, sid, _c, expl, _e, cm) => {
      if (sid) {
        skill = sid;
        return `"skillId": "${sid}"`;
      }
      if (expl !== undefined) {
        rowIdx = skillNext.get(skill) ?? 0;
        skillNext.set(skill, rowIdx + 1);
        return `"explanation": ${JSON.stringify(patchMap.get(`${skill}#${rowIdx}`).explanation)}`;
      }
      if (cm !== undefined) {
        return `"commonMistake": ${JSON.stringify(patchMap.get(`${skill}#${rowIdx}`).commonMistake)}`;
      }
      return m;
    }
  );
  out = sanitizeConceptAndLectureText(out);
  fs.writeFileSync(p, out);
}

function sanitizeConceptAndLectureText(text) {
  return text.replace(/"concept": "([^"]*)"/g, (_, val) => `"concept": ${JSON.stringify(sanitizeAuxText(val))}`);
}

function sanitizeAuxText(s) {
  if (!s) return s;
  let o = s;
  const reps = [
    ["再合併同類項", "再把同次項係數合併"],
    ["三項缺一不可", "三項都要寫到"],
    ["文字題先依題意列式，再展開化簡", "依題意列式後展開化簡"],
    ["文字題先依題意列式", "依題意先列式"],
    ["分配律要乘到括號內每一項，再合併同類項", "外項要乘進括號內每一項"],
    ["兩括號相乘要交叉相乘四項，再合併同類項", "兩個括號四項相乘後再整理"],
    ["完全平方和要有中間項 2ab，三項缺一不可", "完全平方和的中間項是 2ab"],
    ["完全平方和要有中間項", "完全平方和的中間項是 2ab"],
  ];
  for (const [a, b] of reps) o = o.split(a).join(b);
  return o;
}

function repairLecturesInParts(partsPath, skills) {
  const lecs = skills
    .filter((sk) => sk.lecture)
    .map((sk) => {
      const l = { ...sk.lecture };
      if (l.concept) l.concept = sanitizeAuxText(l.concept);
      if (l.title) l.title = sanitizeAuxText(l.title);
      if (Array.isArray(l.commonMistakes)) {
        l.commonMistakes = l.commonMistakes.map((m) => sanitizeAuxText(m));
      }
      return l;
    });
  const tag = path.basename(partsPath, ".mjs").replace(/^s/i, "S").replace(/-/g, "_").toUpperCase();
  const constName = `U10_LECTURES_${tag}`;
  let text = fs.readFileSync(partsPath, "utf8");
  const marker = `export const ${constName} = `;
  const start = text.indexOf(marker);
  if (start < 0) throw new Error(`missing ${constName} in ${partsPath}`);
  const head = text.slice(0, start);
  text = `${head}${marker}${JSON.stringify(lecs, null, 2)};\n`;
  fs.writeFileSync(partsPath, text);
}

const PART_SKILLS = [
  SKILL_ROWS.slice(0, 3),
  SKILL_ROWS.slice(3, 6),
  SKILL_ROWS.slice(6, 9),
  SKILL_ROWS.slice(9, 12),
];

for (const f of CONTENT) patchContentFile(path.join(tools, f));
for (let i = 0; i < PARTS.length; i++) {
  patchPartsFile(path.join(tools, PARTS[i]));
  repairLecturesInParts(path.join(tools, PARTS[i]), PART_SKILLS[i]);
}

console.log("u10-r4-apply: patched", patchMap.size, "rows in content + parts");
