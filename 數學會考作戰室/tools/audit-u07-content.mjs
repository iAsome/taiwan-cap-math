#!/usr/bin/env node
import { countZh } from "./v2-quality.mjs";
import { SKILL_ROWS } from "./v2-u07-content.mjs";

const PAT = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3];
const BANNED = [
  "另外，選", "不符合題目條件", "逐項驗算後再決定", "步驟跳躍", "符號處理錯誤",
  "若誤以為", "答案為", "結果為", "【", "】", "如圖", "下圖", "請看圖", "<=", ">="
];

for (const sk of SKILL_ROWS) {
  if (sk.rows.length !== 12) console.log(`${sk.skillId}: rows ${sk.rows.length}`);
  sk.rows.forEach((r, i) => {
    const id = `u07-s${String(sk.seq).padStart(3, "0")}-v${String(i + 1).padStart(3, "0")}`;
    if (r.answerIndex !== PAT[i]) console.log(`${id} answerIndex ${r.answerIndex} want ${PAT[i]}`);
    if (countZh(r.explanation) < 45) console.log(`${id} expl ${countZh(r.explanation)}`);
    if (countZh(r.commonMistake) < 12) console.log(`${id} mistake ${countZh(r.commonMistake)}`);
    if (r.steps.length < 3) console.log(`${id} steps ${r.steps.length}`);
    const blob = [r.text, r.explanation, r.commonMistake, ...r.steps, ...r.choices].join("\n");
    for (const b of BANNED) if (blob.includes(b)) console.log(`${id} banned "${b}"`);
  });
  const lec = sk.lecture;
  if (countZh(lec.concept) < 80) console.log(`${sk.skillId} concept ${countZh(lec.concept)}`);
  if (lec.stepGuide.length < 5) console.log(`${sk.skillId} stepGuide ${lec.stepGuide.length}`);
  if (lec.examples.length < 2) console.log(`${sk.skillId} examples ${lec.examples.length}`);
  for (const ex of lec.examples) {
    if (!ex.prompt || !ex.answer || !ex.why) console.log(`${sk.skillId} example missing prompt/answer/why`);
  }
  if (lec.commonMistakes.length < 4) console.log(`${sk.skillId} commonMistakes ${lec.commonMistakes.length}`);
}
