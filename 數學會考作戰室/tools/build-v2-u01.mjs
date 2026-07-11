import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { writeJs } from "./v2-shared.mjs";
import { buildPilotUnit } from "./v2-pilot-engine.mjs";
import { U01_PILOT_UNIT, U01_SKILL_META, U01_RAW_QUESTIONS, U01_PILOT_CONTENT } from "./v2-u01-pilot-source.mjs";
import { buildU01CoverageQuestions } from "./v2-u01-coverage-builder.mjs";

export function buildU01({ v2Dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../v2") } = {}) {
  const built = buildPilotUnit("u01", U01_PILOT_UNIT, U01_SKILL_META, U01_RAW_QUESTIONS, U01_PILOT_CONTENT);
  const coverage = buildU01CoverageQuestions();
  const questions = [...built.questions, ...coverage];
  fs.mkdirSync(v2Dir, { recursive: true });
  fs.writeFileSync(path.join(v2Dir, "math-question-bank-v2-u01.js"), writeJs("MATH_QUESTION_BANK_V2_U01", questions));
  fs.writeFileSync(path.join(v2Dir, "math-lecture-v2-u01.js"), writeJs("MATH_LECTURE_V2_U01", built.lectures));
  return { questions: questions.length, lectures: built.lectures.length };
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) { const result = buildU01(); console.log("u01", result.questions, "questions", result.lectures, "lectures"); }
