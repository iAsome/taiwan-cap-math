#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PAT = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3];
const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "v2-u04-parts");

function reorderChoices(choices, answerIndex, targetIndex) {
  const correct = choices[answerIndex];
  const wrongs = choices.filter((_, i) => i !== answerIndex);
  const out = new Array(4);
  let wi = 0;
  for (let i = 0; i < 4; i++) {
    if (i === targetIndex) out[i] = correct;
    else out[i] = wrongs[wi++];
  }
  return out;
}

for (const file of fs.readdirSync(dir).filter(f => f.endsWith(".mjs"))) {
  const mod = await import(`./v2-u04-parts/${file}`);
  const itemKey = Object.keys(mod).find(k => k.startsWith("U04_PART"));
  const lecKey = Object.keys(mod).find(k => k.startsWith("U04_LECTURES"));
  const bySkill = new Map();
  for (const item of mod[itemKey]) {
    if (!bySkill.has(item.skillId)) bySkill.set(item.skillId, []);
    bySkill.get(item.skillId).push(item);
  }
  let changed = 0;
  const items = mod[itemKey].map(item => {
    const group = bySkill.get(item.skillId).sort((a, b) => a.questionId.localeCompare(b.questionId));
    const vi = group.findIndex(x => x.questionId === item.questionId);
    const want = PAT[vi];
    if (item.answerIndex === want) return item;
    changed++;
    return {
      ...item,
      choices: reorderChoices(item.choices, item.answerIndex, want),
      answerIndex: want
    };
  });
  if (changed) {
    const body = `export const ${itemKey} = ${JSON.stringify(items, null, 2)};\n\nexport const ${lecKey} = ${JSON.stringify(mod[lecKey], null, 2)};\n`;
    fs.writeFileSync(path.join(dir, file), body, "utf8");
    console.log(file, "fixed", changed);
  }
}
