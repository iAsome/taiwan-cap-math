import { loadV2Context } from "./v2-load.mjs";

const w = loadV2Context();
const banks = {
  u01: w.MATH_QUESTION_BANK_V2_U01,
  u02: w.MATH_QUESTION_BANK_V2_U02,
  u03: w.MATH_QUESTION_BANK_V2_U03
};

for (const uid of ["u01", "u02", "u03"]) {
  const qs = banks[uid];
  const picks = [0, Math.floor(qs.length / 2), qs.length - 1];
  console.log(`\n========== ${uid.toUpperCase()} samples ==========`);
  for (const i of picks) {
    const q = qs[i];
    console.log(`\n--- ${q.questionId} (${q.skillId}) ---`);
    console.log("text:", q.text);
    console.log("choices:", q.choices.map((c, j) => `${j}:${c}`).join(" | "));
    console.log("answerIndex:", q.answerIndex, "=>", q.choices[q.answerIndex]);
    console.log("explanation:", q.explanation);
    console.log("steps:", q.steps);
    console.log("commonMistake:", q.commonMistake);
  }
}
