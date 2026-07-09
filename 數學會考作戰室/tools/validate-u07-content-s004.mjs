#!/usr/bin/env node
import { countZh } from "./v2-quality.mjs";
import { U07_SKILLS_S004_S006 } from "./v2-u07-content-s004-s006.mjs";

const BANNED = [
  "另外，選", "不符合題目條件", "逐項驗算後再決定", "步驟跳躍", "符號處理錯誤",
  "若誤以為", "答案為", "結果為", "【", "】", "如圖", "下圖", "請看圖", "<=", ">="
];

for (const sk of U07_SKILLS_S004_S006) {
  if (sk.rows.length !== 12) throw new Error(`${sk.skillId} rows ${sk.rows.length}`);
  for (const [i, r] of sk.rows.entries()) {
    const blob = [r.text, r.explanation, r.commonMistake, ...r.steps, ...r.choices].join("\n");
    if (countZh(r.explanation) < 45) throw new Error(`${sk.skillId} r${i} expl ${countZh(r.explanation)}`);
    if (countZh(r.commonMistake) < 12) throw new Error(`${sk.skillId} r${i} cm ${countZh(r.commonMistake)}`);
    if (r.steps.length < 3) throw new Error(`${sk.skillId} r${i} steps`);
    for (const b of BANNED) if (blob.includes(b)) throw new Error(`${sk.skillId} r${i} banned ${b}`);
  }
  const l = sk.lecture;
  if (countZh(l.concept) < 80) throw new Error(`${sk.skillId} lec concept ${countZh(l.concept)}`);
  if (l.stepGuide.length < 5) throw new Error(`${sk.skillId} stepGuide`);
  if (l.examples.length < 2) throw new Error(`${sk.skillId} examples`);
  if (l.commonMistakes.length < 4) throw new Error(`${sk.skillId} cm`);
  const lb = JSON.stringify(l);
  for (const b of BANNED) if (lb.includes(b)) throw new Error(`${sk.skillId} lec banned ${b}`);
}
console.log("OK", U07_SKILLS_S004_S006.length, "skills", U07_SKILLS_S004_S006.reduce((n, s) => n + s.rows.length, 0), "rows");
