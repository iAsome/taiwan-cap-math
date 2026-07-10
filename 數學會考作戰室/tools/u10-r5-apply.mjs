#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { countZh } from "./v2-quality.mjs";
import { R4_SKILL, stepOverlapCount } from "./u10-r4-compose.mjs";
import { composeRow, R5_FILLER } from "./u10-r5-compose.mjs";

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
    if (R5_FILLER.some((p) => blob.includes(p)) || /就「[^」]*」而言/.test(blob)) {
      throw new Error(`${sk.skillId}#${i} r5 filler: ${R5_FILLER.find((p) => blob.includes(p)) || "wrapper"}`);
    }
    if (/得\s*([^，。；]+)，\s*得\s*\1/.test(out.explanation)) {
      throw new Error(`${sk.skillId}#${i} dup answer`);
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
  fs.writeFileSync(p, out);
}

for (const f of CONTENT) patchContentFile(path.join(tools, f));
for (const f of PARTS) patchPartsFile(path.join(tools, f));

console.log("u10-r5-apply: patched", patchMap.size, "rows in content + parts");
