#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { writeJs } from "./v2-shared.mjs";
import { buildU08Content } from "./v2-u08-generators.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const v2Dir = path.join(root, "v2");

const { questions, lectures } = buildU08Content();
fs.writeFileSync(path.join(v2Dir, "math-question-bank-v2-u08.js"), writeJs("MATH_QUESTION_BANK_V2_U08", questions));
fs.writeFileSync(path.join(v2Dir, "math-lecture-v2-u08.js"), writeJs("MATH_LECTURE_V2_U08", lectures));
console.log(`U08 pack: ${questions.length} questions, ${lectures.length} lectures`);
