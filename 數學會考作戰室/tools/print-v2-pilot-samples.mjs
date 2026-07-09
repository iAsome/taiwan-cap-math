import { loadV2Context, loadedBankUnits } from "./v2-load.mjs";

const args = process.argv.slice(2);
const argUnit = args[0]?.toLowerCase();
const allSkills = args.includes("--all-skills");
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

/** Pick one question per skill; skip v001 and prefer mixed difficulty. */
function pickU04Sample(qs, skillId) {
  const skillQs = qs.filter(x => x.skillId === skillId).sort((a, b) => a.questionId.localeCompare(b.questionId));
  const nonV001 = skillQs.filter(q => !q.questionId.endsWith("-v001"));
  const pool = nonV001.length ? nonV001 : skillQs;
  const literacy = pool.find(q => q.difficulty === "literacy");
  const advanced = pool.find(q => q.difficulty === "advanced");
  const standard = pool.find(q => q.difficulty === "standard");
  return literacy || advanced || standard || pool[Math.floor(pool.length / 2)] || pool[0];
}

if (argUnit === "u04") {
  const qs = w.MATH_QUESTION_BANK_V2_U04;
  const u04 = w.MATH_SYLLABUS_V2.units.find(u => u.unitId === "u04");
  const skillOrder = [];
  for (const t of u04.topics) for (const s of t.skills) skillOrder.push(s.skillId);
  console.log(`========== U04 one per skill (${skillOrder.length})${allSkills ? " [mixed difficulty, skip v001]" : ""} ==========`);
  for (const skillId of skillOrder) {
    const q = allSkills ? pickU04Sample(qs, skillId) : qs.find(x => x.skillId === skillId && x.questionId.endsWith("-v001"));
    if (!q) throw new Error(`missing sample for ${skillId}`);
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
