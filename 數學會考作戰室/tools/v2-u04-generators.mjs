import { mkQuestion, mkLecture } from "./v2-shared.mjs";
import { U04_PART_S001_S004, U04_LECTURES_S001_S004 } from "./v2-u04-parts/s001-s004.mjs";
import { U04_PART_S005_S008, U04_LECTURES_S005_S008 } from "./v2-u04-parts/s005-s008.mjs";
import { U04_PART_S009_S011, U04_LECTURES_S009_S011 } from "./v2-u04-parts/s009-s011.mjs";
import { U04_PART_S012_S014, U04_LECTURES_S012_S014 } from "./v2-u04-parts/s012-s014.mjs";

/** Hand-written U04 bank — helpers only wrap schema, no template text generation. */
export const U04_ITEMS = [
  ...U04_PART_S001_S004,
  ...U04_PART_S005_S008,
  ...U04_PART_S009_S011,
  ...U04_PART_S012_S014
];

export const U04_LECTURES = [
  ...U04_LECTURES_S001_S004,
  ...U04_LECTURES_S005_S008,
  ...U04_LECTURES_S009_S011,
  ...U04_LECTURES_S012_S014
];

function tagFor(difficulty, title) {
  if (difficulty === "literacy") return ["代數", title, "素養"];
  if (difficulty === "advanced") return ["代數", title, "應用"];
  if (difficulty === "basic") return ["代數", title, "基礎概念"];
  return ["代數", title, "應用"];
}

function timeFor(difficulty) {
  if (difficulty === "literacy") return 90;
  if (difficulty === "advanced") return 75;
  return 45;
}

export function buildU04Content() {
  if (U04_ITEMS.length !== 168) throw new Error(`U04_ITEMS need 168, got ${U04_ITEMS.length}`);
  if (U04_LECTURES.length !== 14) throw new Error(`U04_LECTURES need 14, got ${U04_LECTURES.length}`);

  const skillSeq = new Map();
  const questions = U04_ITEMS.map(item => {
    if (!skillSeq.has(item.skillId)) skillSeq.set(item.skillId, skillSeq.size + 1);
    const m = item.questionId.match(/^u04-s(\d+)-v(\d+)$/);
    if (!m) throw new Error(`bad questionId ${item.questionId}`);
    return mkQuestion({
      unitId: "u04",
      numericUnitId: 4,
      topicId: item.topicId,
      skillId: item.skillId,
      skillSeq: Number(m[1]),
      variant: Number(m[2]),
      difficulty: item.difficulty,
      text: item.text,
      choices: item.choices,
      answerIndex: item.answerIndex,
      explanation: item.explanation,
      steps: item.steps,
      commonMistake: item.commonMistake,
      concept: item.concept,
      tags: tagFor(item.difficulty, item.title || item.skillId),
      estimatedTimeSec: timeFor(item.difficulty)
    });
  });

  const lectures = U04_LECTURES.map(l => mkLecture({
    unitId: "u04",
    topicId: l.topicId,
    skillId: l.skillId,
    title: l.title,
    concept: l.concept,
    formula: l.formula ?? "",
    stepGuide: l.stepGuide,
    examples: l.examples,
    commonMistakes: l.commonMistakes,
    quizLink: { unitId: "u04", skillId: l.skillId }
  }));

  return { questions, lectures };
}
