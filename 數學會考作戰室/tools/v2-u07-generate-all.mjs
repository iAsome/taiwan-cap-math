#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { countZh } from "./v2-quality.mjs";
import { SKILL_ROWS } from "./v2-u07-content.mjs";

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), "v2-u07-parts");
const PAT = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3];
const DIFF = ["basic", "basic", "basic", "basic", "standard", "standard", "standard", "standard", "standard", "advanced", "advanced", "literacy"];

const U07_BANNED = [
  "語意或計算與題意不符", "因此可排除", "應回到列式", "不等號語意逐項核對",
  "逐項核對", "做題時應同時檢查", "端點條件", "應回到", "另外，選",
  "不符合題目條件", "逐項驗算後再決定", "步驟跳躍", "符號處理錯誤",
  "若誤以為", "答案為", "結果為", "【", "】", "如圖", "下圖", "請看圖", "<=", ">="
];

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
      questionId: `u07-s${String(seq).padStart(3, "0")}-v${String(vi).padStart(3, "0")}`,
      skillId, topicId, difficulty: DIFF[i],
      text: r.text, choices, answerIndex: want,
      explanation: r.explanation, steps: r.steps,
      commonMistake: r.commonMistake, concept
    };
    if (countZh(item.explanation) < 45) throw new Error(`${item.questionId} explanation short`);
    if (countZh(item.commonMistake) < 12) throw new Error(`${item.questionId} commonMistake short`);
    if (item.steps.length < 3) throw new Error(`${item.questionId} steps < 3`);
    const blob = [item.text, item.explanation, item.commonMistake, ...item.steps, ...item.choices].join("\n");
    for (const b of U07_BANNED) {
      if (blob.includes(b)) throw new Error(`${item.questionId} banned "${b}"`);
    }
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
    const s = Number(q.questionId.match(/^u07-s(\d+)/)[1]);
    return s >= startSeq && s <= endSeq;
  });
  const partLecs = lectures.filter(l => {
    const sk = SKILL_ROWS.find(x => x.skillId === l.skillId);
    return sk && sk.seq >= startSeq && sk.seq <= endSeq;
  });
  const exportItems = `export const U07_PART_${name} = ${JSON.stringify(partItems, null, 2)};\n`;
  const exportLecs = `export const U07_LECTURES_${name} = ${JSON.stringify(partLecs, null, 2)};\n`;
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
console.log("v2-u07-parts written OK");
