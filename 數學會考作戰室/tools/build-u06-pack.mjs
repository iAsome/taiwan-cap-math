#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { writeJs } from "./v2-shared.mjs";
import { buildU06Content } from "./v2-u06-generators.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const v2Dir = path.join(root, "v2");
const { questions, lectures } = buildU06Content();

fs.mkdirSync(v2Dir, { recursive: true });
fs.writeFileSync(path.join(v2Dir, "math-question-bank-v2-u06.js"), writeJs("MATH_QUESTION_BANK_V2_U06", questions), "utf8");
fs.writeFileSync(path.join(v2Dir, "math-lecture-v2-u06.js"), writeJs("MATH_LECTURE_V2_U06", lectures), "utf8");
console.log(`build-u06-pack: ${questions.length} questions, ${lectures.length} lectures`);
