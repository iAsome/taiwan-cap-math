import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { writeJs } from "./v2-shared.mjs";
import { buildPilotUnit } from "./v2-pilot-engine.mjs";
import { U03_PILOT_UNIT, U03_SKILL_META, U03_RAW_QUESTIONS, U03_PILOT_CONTENT } from "./v2-u03-pilot-source.mjs";

export function buildU03({ v2Dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../v2") } = {}) {
  const built = buildPilotUnit("u03", U03_PILOT_UNIT, U03_SKILL_META, U03_RAW_QUESTIONS, U03_PILOT_CONTENT);
  fs.mkdirSync(v2Dir, { recursive: true });
  fs.writeFileSync(path.join(v2Dir, "math-question-bank-v2-u03.js"), writeJs("MATH_QUESTION_BANK_V2_U03", built.questions));
  fs.writeFileSync(path.join(v2Dir, "math-lecture-v2-u03.js"), writeJs("MATH_LECTURE_V2_U03", built.lectures));
  return { questions: built.questions.length, lectures: built.lectures.length };
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) { const result = buildU03(); console.log("u03", result.questions, "questions", result.lectures, "lectures"); }
