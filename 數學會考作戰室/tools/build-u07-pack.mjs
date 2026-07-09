#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { writeJs } from "./v2-shared.mjs";
import { buildU07Content } from "./v2-u07-generators.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const v2Dir = path.join(root, "v2");

const { questions, lectures } = buildU07Content();
fs.writeFileSync(path.join(v2Dir, "math-question-bank-v2-u07.js"), writeJs("MATH_QUESTION_BANK_V2_U07", questions));
fs.writeFileSync(path.join(v2Dir, "math-lecture-v2-u07.js"), writeJs("MATH_LECTURE_V2_U07", lectures));
console.log(`U07 pack: ${questions.length} questions, ${lectures.length} lectures`);
