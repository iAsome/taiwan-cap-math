import { mkQuestion, mkLecture } from "./v2-shared.mjs";
import { U07_PART_S001_S003, U07_LECTURES_S001_S003 } from "./v2-u07-parts/s001-s003.mjs";
import { U07_PART_S004_S006, U07_LECTURES_S004_S006 } from "./v2-u07-parts/s004-s006.mjs";
import { U07_PART_S007_S009, U07_LECTURES_S007_S009 } from "./v2-u07-parts/s007-s009.mjs";
import { U07_PART_S010_S012, U07_LECTURES_S010_S012 } from "./v2-u07-parts/s010-s012.mjs";

/** Hand-written U07 bank — helpers only wrap schema, no template text generation. */
export const U07_ITEMS = [
  ...U07_PART_S001_S003,
  ...U07_PART_S004_S006,
  ...U07_PART_S007_S009,
  ...U07_PART_S010_S012
];

export const U07_LECTURES = [
  ...U07_LECTURES_S001_S003,
  ...U07_LECTURES_S004_S006,
  ...U07_LECTURES_S007_S009,
  ...U07_LECTURES_S010_S012
];

function tagFor(difficulty, title) {
  if (difficulty === "literacy") return ["不等式", title, "素養"];
  if (difficulty === "advanced") return ["不等式", title, "應用"];
  if (difficulty === "basic") return ["不等式", title, "基礎概念"];
  return ["不等式", title, "應用"];
}

function timeFor(difficulty) {
  if (difficulty === "literacy") return 90;
  if (difficulty === "advanced") return 75;
  return 45;
}

export function buildU07Content() {
  if (U07_ITEMS.length !== 144) throw new Error(`U07_ITEMS need 144, got ${U07_ITEMS.length}`);
  if (U07_LECTURES.length !== 12) throw new Error(`U07_LECTURES need 12, got ${U07_LECTURES.length}`);

  const questions = U07_ITEMS.map(item => {
    const m = item.questionId.match(/^u07-s(\d+)-v(\d+)$/);
    if (!m) throw new Error(`bad questionId ${item.questionId}`);
    return mkQuestion({
      unitId: "u07",
      numericUnitId: 7,
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

  const lectures = U07_LECTURES.map(l => mkLecture({
    unitId: "u07",
    topicId: l.topicId,
    skillId: l.skillId,
    title: l.title,
    concept: l.concept,
    formula: l.formula ?? "",
    stepGuide: l.stepGuide,
    examples: l.examples,
    commonMistakes: l.commonMistakes,
    quizLink: { unitId: "u07", skillId: l.skillId }
  }));

  return { questions, lectures };
}
