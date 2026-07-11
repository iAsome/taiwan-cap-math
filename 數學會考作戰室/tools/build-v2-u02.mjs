import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { writeJs } from "./v2-shared.mjs";
import { buildPilotUnit } from "./v2-pilot-engine.mjs";
import { U02_PILOT_UNIT, U02_SKILL_META, U02_RAW_QUESTIONS, U02_PILOT_CONTENT } from "./v2-u02-pilot-source.mjs";

export function buildU02({ v2Dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../v2") } = {}) {
  const built = buildPilotUnit("u02", U02_PILOT_UNIT, U02_SKILL_META, U02_RAW_QUESTIONS, U02_PILOT_CONTENT);
  fs.mkdirSync(v2Dir, { recursive: true });
  fs.writeFileSync(path.join(v2Dir, "math-question-bank-v2-u02.js"), writeJs("MATH_QUESTION_BANK_V2_U02", built.questions));
  fs.writeFileSync(path.join(v2Dir, "math-lecture-v2-u02.js"), writeJs("MATH_LECTURE_V2_U02", built.lectures));
  return { questions: built.questions.length, lectures: built.lectures.length };
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) { const result = buildU02(); console.log("u02", result.questions, "questions", result.lectures, "lectures"); }
