import { loadV2Context, loadedBankUnits } from "./v2-load.mjs";

const argUnit = process.argv[2]?.toLowerCase();
const w = loadV2Context();
const bankUnits = loadedBankUnits();

function printQuestion(q) {
  console.log(`\n--- ${q.questionId} (${q.skillId}) [${q.difficulty}] ---`);
  console.log("text:", q.text);
  console.log("choices:", q.choices.map((c, j) => `${j}:${c}`).join(" | "));
  console.log("answerIndex:", q.answerIndex, "=>", q.choices[q.answerIndex]);
  console.log("explanation:", q.explanation);
  console.log("steps:", q.steps);
  console.log("commonMistake:", q.commonMistake);
}

if (argUnit === "u04") {
  const qs = w.MATH_QUESTION_BANK_V2_U04;
  const u04 = w.MATH_SYLLABUS_V2.units.find(u => u.unitId === "u04");
  const skillOrder = [];
  for (const t of u04.topics) for (const s of t.skills) skillOrder.push(s.skillId);
  console.log("========== U04 one per skill (14) ==========");
  for (const skillId of skillOrder) {
    const q = qs.find(x => x.skillId === skillId && x.questionId.endsWith("-v001"));
    if (!q) throw new Error(`missing v001 for ${skillId}`);
    printQuestion(q);
  }
} else {
  const units = argUnit ? [argUnit] : bankUnits;
  for (const uid of units) {
    const qs = w[`MATH_QUESTION_BANK_V2_${uid.toUpperCase()}`];
    if (!qs?.length) {
      console.log(`\n(skip ${uid}: no bank loaded)`);
      continue;
    }
    const picks = uid === "u04"
      ? [0]
      : [0, Math.floor(qs.length / 2), qs.length - 1];
    console.log(`\n========== ${uid.toUpperCase()} samples ==========`);
    for (const i of picks) printQuestion(qs[i]);
  }
}
