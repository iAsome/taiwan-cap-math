#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { countZh } from "./v2-quality.mjs";
import { composeRow, stepOverlapCount } from "./u10-r3-compose.mjs";

const tools = path.dirname(fileURLToPath(import.meta.url));
const CONTENT = [
  "v2-u10-content-s001-s003.mjs",
  "v2-u10-content-s004-s006.mjs",
  "v2-u10-content-s007-s009.mjs",
  "v2-u10-content-s010-s012.mjs",
];

const { SKILL_ROWS } = await import(pathToFileURL(path.join(tools, "v2-u10-content.mjs")).href);
const patchMap = new Map();
for (const sk of SKILL_ROWS) {
  for (let i = 0; i < sk.rows.length; i++) {
    const r = sk.rows[i];
    const out = composeRow(sk.skillId, i, r);
    if (countZh(out.explanation) < 45) {
      throw new Error(`${sk.skillId}#${i} expl short ${countZh(out.explanation)}`);
    }
    if (countZh(out.commonMistake) < 12) {
      throw new Error(`${sk.skillId}#${i} cm short ${countZh(out.commonMistake)}`);
    }
    if (stepOverlapCount(out.explanation, r.steps) >= 2) {
      throw new Error(`${sk.skillId}#${i} step overlap ${stepOverlapCount(out.explanation, r.steps)}`);
    }
    if (/接著|此題所求為|此錯法會讓本題結果不正確|粗心算錯就容易選錯|容易在這一題選錯/.test(out.explanation + out.commonMistake)) {
      throw new Error(`${sk.skillId}#${i} mechanical phrase`);
    }
    if (out.commonMistake === out.explanation) {
      throw new Error(`${sk.skillId}#${i} cm copied expl`);
    }
    patchMap.set(`${sk.skillId}#${i}`, out);
  }
}

for (const f of CONTENT) {
  const p = path.join(tools, f);
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
        const patch = patchMap.get(`${skill}#${row}`);
        return `"explanation": ${JSON.stringify(patch.explanation)}`;
      }
      if (cm !== undefined) {
        const patch = patchMap.get(`${skill}#${row}`);
        return `"commonMistake": ${JSON.stringify(patch.commonMistake)}`;
      }
      return m;
    }
  );
  fs.writeFileSync(p, out);
}

console.log("u10-r3-apply: patched", patchMap.size, "rows");
