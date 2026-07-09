#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { countZh } from "./v2-quality.mjs";
import { SKILL_ROWS } from "./v2-u10-content.mjs";

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), "v2-u10-parts");
const PAT = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3];
const DIFF = ["basic", "basic", "basic", "basic", "standard", "standard", "standard", "standard", "standard", "advanced", "advanced", "literacy"];

const U10_BANNED = [
  "因式分解為", "分解為", "求根", "公式解", "判別式", "高中", "餘式", "因式定理", "多項式除法",
  "選項", "逐項", "驗算", "核對", "故應選", "答案為", "結果為", "若誤以為", "另外，選", "【", "】",
  "<=", ">=", "如圖", "下圖", "請看圖"
];

function hasU10Banned(blob) {
  for (const b of U10_BANNED) if (blob.includes(b)) return b;
  return null;
}

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

function mkItems(seq, skillId, topicId, concept, rows) {
  if (rows.length !== 12) throw new Error(`${skillId} need 12 rows, got ${rows.length}`);
  return rows.map((r, i) => {
    const vi = i + 1;
    const want = PAT[i];
    const choices = reorderChoices(r.choices, r.answerIndex, want);
    const item = {
      questionId: `u10-s${String(seq).padStart(3, "0")}-v${String(vi).padStart(3, "0")}`,
      skillId, topicId, difficulty: DIFF[i],
      text: r.text, choices, answerIndex: want,
      explanation: r.explanation, steps: r.steps,
      commonMistake: r.commonMistake, concept
    };
    if (countZh(item.explanation) < 45) throw new Error(`${item.questionId} explanation short ${countZh(item.explanation)}`);
    if (countZh(item.commonMistake) < 12) throw new Error(`${item.questionId} commonMistake short ${countZh(item.commonMistake)}`);
    if (item.steps.length < 3) throw new Error(`${item.questionId} steps < 3`);
    const blob = [item.text, item.explanation, item.commonMistake, ...item.steps, ...item.choices].join("\n");
    const hit = hasU10Banned(blob);
    if (hit) throw new Error(`${item.questionId} banned "${hit}"`);
    return item;
  });
}

function buildParts() {
  const allItems = [];
  const allLecs = [];
  for (const sk of SKILL_ROWS) {
    const items = mkItems(sk.seq, sk.skillId, sk.topicId, sk.concept, sk.rows);
    allItems.push(...items);
    allLecs.push(sk.lecture);
  }
  return { allItems, allLecs };
}

function writePart(name, items, lectures, startSeq, endSeq) {
  const partItems = items.filter(q => {
    const s = Number(q.questionId.match(/^u10-s(\d+)/)[1]);
    return s >= startSeq && s <= endSeq;
  });
  const partLecs = lectures.filter(l => {
    const sk = SKILL_ROWS.find(x => x.skillId === l.skillId);
    return sk && sk.seq >= startSeq && sk.seq <= endSeq;
  });
  const exportItems = `export const U10_PART_${name} = ${JSON.stringify(partItems, null, 2)};\n`;
  const exportLecs = `export const U10_LECTURES_${name} = ${JSON.stringify(partLecs, null, 2)};\n`;
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, `${name.toLowerCase().replace(/_/g, "-")}.mjs`), exportItems + "\n" + exportLecs);
  console.log(`wrote ${name}: ${partItems.length} Q, ${partLecs.length} lectures`);
}

const { allItems, allLecs } = buildParts();
if (allItems.length !== 144) throw new Error(`expected 144 items, got ${allItems.length}`);
if (allLecs.length !== 12) throw new Error(`expected 12 lectures, got ${allLecs.length}`);

writePart("S001_S003", allItems, allLecs, 1, 3);
writePart("S004_S006", allItems, allLecs, 4, 6);
writePart("S007_S009", allItems, allLecs, 7, 9);
writePart("S010_S012", allItems, allLecs, 10, 12);
console.log("v2-u10-parts written OK");
