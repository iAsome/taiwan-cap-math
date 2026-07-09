#!/usr/bin/env node
/** Apply U08-R2 handcrafted explanation/steps/commonMistake to content modules. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { craftRow } from "./v2-u08-r2-craft-all.mjs";

const toolsDir = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_FILES = [
  "v2-u08-content-s001-s003.mjs",
  "v2-u08-content-s004-s006.mjs",
  "v2-u08-content-s007-s009.mjs",
  "v2-u08-content-s010-s012.mjs"
];

async function loadSkills(file) {
  const mod = await import(pathToFileURL(path.join(toolsDir, file)).href);
  const key = Object.keys(mod).find((k) => k.startsWith("U08_SKILLS_"));
  return { file, exportName: key, skills: mod[key] };
}

function applySkills(skills) {
  let n = 0;
  for (const sk of skills) {
    for (const row of sk.rows) {
      const crafted = craftRow(row);
      row.explanation = crafted.explanation;
      row.steps = crafted.steps;
      row.commonMistake = crafted.commonMistake;
      n++;
    }
  }
  return n;
}

function writeSkills(file, exportName, skills) {
  const body = `export const ${exportName} = ${JSON.stringify(skills, null, 2)};\n`;
  fs.writeFileSync(path.join(toolsDir, file), body, "utf8");
}

let total = 0;
for (const file of CONTENT_FILES) {
  const { exportName, skills } = await loadSkills(file);
  total += applySkills(skills);
  writeSkills(file, exportName, skills);
}
console.log(`v2-u08-r2-apply: updated ${total} rows in ${CONTENT_FILES.length} files`);
