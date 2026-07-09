import { mkQuestion, mkLecture } from "./v2-shared.mjs";
import { U10_PART_S001_S003, U10_LECTURES_S001_S003 } from "./v2-u10-parts/s001-s003.mjs";
import { U10_PART_S004_S006, U10_LECTURES_S004_S006 } from "./v2-u10-parts/s004-s006.mjs";
import { U10_PART_S007_S009, U10_LECTURES_S007_S009 } from "./v2-u10-parts/s007-s009.mjs";
import { U10_PART_S010_S012, U10_LECTURES_S010_S012 } from "./v2-u10-parts/s010-s012.mjs";

export const U10_ITEMS = [
  ...U10_PART_S001_S003,
  ...U10_PART_S004_S006,
  ...U10_PART_S007_S009,
  ...U10_PART_S010_S012
];

export const U10_LECTURES = [
  ...U10_LECTURES_S001_S003,
  ...U10_LECTURES_S004_S006,
  ...U10_LECTURES_S007_S009,
  ...U10_LECTURES_S010_S012
];

function tagFor(difficulty, skillId) {
  if (difficulty === "literacy") return ["多項式", skillId, "素養"];
  if (difficulty === "advanced") return ["多項式", skillId, "應用"];
  if (difficulty === "basic") return ["多項式", skillId, "基礎概念"];
  return ["多項式", skillId, "應用"];
}

function timeFor(difficulty) {
  if (difficulty === "literacy") return 90;
  if (difficulty === "advanced") return 75;
  return 45;
}

export function buildU10Content() {
  if (U10_ITEMS.length !== 144) throw new Error(`U10_ITEMS need 144, got ${U10_ITEMS.length}`);
  if (U10_LECTURES.length !== 12) throw new Error(`U10_LECTURES need 12, got ${U10_LECTURES.length}`);

  const questions = U10_ITEMS.map(item => {
    const m = item.questionId.match(/^u10-s(\d+)-v(\d+)$/);
    if (!m) throw new Error(`bad questionId ${item.questionId}`);
    return mkQuestion({
      unitId: "u10",
      numericUnitId: 10,
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
      tags: tagFor(item.difficulty, item.skillId),
      estimatedTimeSec: timeFor(item.difficulty)
    });
  });

  const lectures = U10_LECTURES.map(l => mkLecture({
    unitId: "u10",
    topicId: l.topicId,
    skillId: l.skillId,
    title: l.title,
    concept: l.concept,
    formula: l.formula ?? "",
    stepGuide: l.stepGuide,
    examples: l.examples,
    commonMistakes: l.commonMistakes,
    quizLink: { unitId: "u10", skillId: l.skillId }
  }));

  return { questions, lectures };
}
