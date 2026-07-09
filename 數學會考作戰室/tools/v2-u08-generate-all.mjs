#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { countZh } from "./v2-quality.mjs";
import { SKILL_ROWS } from "./v2-u08-content.mjs";
import { U08_R1_BANNED } from "./v2-u08-r1-banned.mjs";
import { U08_R2_BANNED } from "./v2-u08-r2-banned.mjs";
import { U08_R3_BANNED } from "./v2-u08-r3-banned.mjs";

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), "v2-u08-parts");
const PAT = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3];
const DIFF = ["basic", "basic", "basic", "basic", "standard", "standard", "standard", "standard", "standard", "advanced", "advanced", "literacy"];

const U08_BANNED = [...new Set([...U08_R1_BANNED, ...U08_R2_BANNED, ...U08_R3_BANNED, "斜率"])];
const BAD_SYMBOL_RE = /<=|>=/;
const STEP_SENTENCE_RE = /[。！？]$/;

function hasU08Banned(blob) {
  for (const b of U08_BANNED) if (blob.includes(b)) return b;
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
      questionId: `u08-s${String(seq).padStart(3, "0")}-v${String(vi).padStart(3, "0")}`,
      skillId,
      topicId,
      difficulty: DIFF[i],
      text: r.text,
      choices,
      answerIndex: want,
      explanation: r.explanation,
      steps: r.steps,
      commonMistake: r.commonMistake,
      concept
    };
    if (countZh(item.explanation) < 45) throw new Error(`${item.questionId} explanation short (${countZh(item.explanation)})`);
    if (countZh(item.commonMistake) < 12) throw new Error(`${item.questionId} commonMistake short`);
    if (item.steps.length < 3) throw new Error(`${item.questionId} steps < 3`);
    for (const step of item.steps) {
      const s = String(step).trim();
      if (!STEP_SENTENCE_RE.test(s)) throw new Error(`${item.questionId} step not sentence: ${step}`);
      if (countZh(s) < 5 && s.length < 8) throw new Error(`${item.questionId} step too short: ${step}`);
    }
    const blob = [item.text, item.explanation, item.commonMistake, ...item.steps, ...item.choices].join("\n");
    const hit = hasU08Banned(blob);
    if (hit) throw new Error(`${item.questionId} banned "${hit}"`);
    if (BAD_SYMBOL_RE.test(blob)) throw new Error(`${item.questionId} bad symbol`);
    return item;
  });
}

function writePart(name, items, lectures, startSeq, endSeq) {
  const partItems = items.filter((q) => {
    const s = Number(q.questionId.match(/^u08-s(\d+)/)[1]);
    return s >= startSeq && s <= endSeq;
  });
  const partLecs = lectures.filter((l) => {
    const sk = SKILL_ROWS.find((x) => x.skillId === l.skillId);
    return sk && sk.seq >= startSeq && sk.seq <= endSeq;
  });
  const body = `export const U08_PART_${name} = ${JSON.stringify(partItems, null, 2)};\n\nexport const U08_LECTURES_${name} = ${JSON.stringify(partLecs, null, 2)};\n`;
  const fileName = `${name.toLowerCase().replace(/_/g, "-")}.mjs`;
  fs.writeFileSync(path.join(OUT, fileName), body, "utf8");
}

const allItems = [];
const allLecs = [];
for (const sk of SKILL_ROWS) {
  const items = mkItems(sk.seq, sk.skillId, sk.topicId, sk.concept, sk.rows);
  allItems.push(...items);
  allLecs.push(sk.lecture);
}

if (allItems.length !== 144) throw new Error(`expected 144 items, got ${allItems.length}`);
if (allLecs.length !== 12) throw new Error(`expected 12 lectures, got ${allLecs.length}`);

fs.mkdirSync(OUT, { recursive: true });
writePart("S001_S003", allItems, allLecs, 1, 3);
writePart("S004_S006", allItems, allLecs, 4, 6);
writePart("S007_S009", allItems, allLecs, 7, 9);
writePart("S010_S012", allItems, allLecs, 10, 12);
console.log("v2-u08-generate-all: wrote 144 questions to v2-u08-parts/");
