import { mkQuestion, mkLecture } from "./v2-shared.mjs";
import { U08_PART_S001_S003, U08_LECTURES_S001_S003 } from "./v2-u08-parts/s001-s003.mjs";
import { U08_PART_S004_S006, U08_LECTURES_S004_S006 } from "./v2-u08-parts/s004-s006.mjs";
import { U08_PART_S007_S009, U08_LECTURES_S007_S009 } from "./v2-u08-parts/s007-s009.mjs";
import { U08_PART_S010_S012, U08_LECTURES_S010_S012 } from "./v2-u08-parts/s010-s012.mjs";

export const U08_ITEMS = [
  ...U08_PART_S001_S003,
  ...U08_PART_S004_S006,
  ...U08_PART_S007_S009,
  ...U08_PART_S010_S012
];

export const U08_LECTURES = [
  ...U08_LECTURES_S001_S003,
  ...U08_LECTURES_S004_S006,
  ...U08_LECTURES_S007_S009,
  ...U08_LECTURES_S010_S012
];

function tagFor(difficulty, title) {
  if (difficulty === "literacy") return ["平面幾何", title, "素養"];
  if (difficulty === "advanced") return ["平面幾何", title, "應用"];
  if (difficulty === "basic") return ["平面幾何", title, "基礎概念"];
  return ["平面幾何", title, "應用"];
}

function timeFor(difficulty) {
  if (difficulty === "literacy") return 90;
  if (difficulty === "advanced") return 75;
  return 45;
}

export function buildU08Content() {
  if (U08_ITEMS.length !== 144) throw new Error(`U08_ITEMS need 144, got ${U08_ITEMS.length}`);
  if (U08_LECTURES.length !== 12) throw new Error(`U08_LECTURES need 12, got ${U08_LECTURES.length}`);

  const questions = U08_ITEMS.map((item) => {
    const m = item.questionId.match(/^u08-s(\d+)-v(\d+)$/);
    if (!m) throw new Error(`bad questionId ${item.questionId}`);
    return mkQuestion({
      unitId: "u08",
      numericUnitId: 8,
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

  const lectures = U08_LECTURES.map((l) =>
    mkLecture({
      unitId: "u08",
      topicId: l.topicId,
      skillId: l.skillId,
      title: l.title,
      concept: l.concept,
      formula: l.formula ?? "",
      stepGuide: l.stepGuide,
      examples: l.examples,
      commonMistakes: l.commonMistakes,
      quizLink: { unitId: "u08", skillId: l.skillId }
    })
  );

  return { questions, lectures };
}
