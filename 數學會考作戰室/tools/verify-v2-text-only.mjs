import assert from "node:assert/strict";
import { loadV2Context, IMAGE_RE, FIGURE_RE } from "./v2-load.mjs";

const w = loadV2Context();
const lectures = [...w.MATH_LECTURE_V2_U01, ...w.MATH_LECTURE_V2_U02, ...w.MATH_LECTURE_V2_U03];
const questions = [...w.MATH_QUESTION_BANK_V2_U01, ...w.MATH_QUESTION_BANK_V2_U02, ...w.MATH_QUESTION_BANK_V2_U03];

for (const item of [...questions, ...lectures]) {
  const text = JSON.stringify(item);
  assert.ok(!IMAGE_RE.test(text), `image markup in ${item.questionId || item.skillId}`);
}

for (const q of questions) {
  const blob = [q.text, q.explanation, ...(q.steps || []), q.commonMistake].join(" ");
  if (FIGURE_RE.test(blob)) {
    assert.ok(/\d|坐標|長|寬|高|角|邊|點|表格|資料|公尺|公分|樓|度/.test(blob), `figure without description: ${q.questionId}`);
  }
}

console.log("verify-v2-text-only: OK", { questions: questions.length, lectures: lectures.length });
