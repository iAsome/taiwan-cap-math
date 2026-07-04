import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const repo = path.dirname(root);
const context = vm.createContext({ window: {}, console, globalThis: {} });
vm.runInContext(fs.readFileSync(path.join(repo, "shared", "fraction-markup.js"), "utf8"), context, { filename: "fraction-markup.js" });
context.globalThis.FRACTION_MARKUP = context.window.FRACTION_MARKUP;
context.FRACTION_MARKUP = context.window.FRACTION_MARKUP;
for (const file of ["data.js", "math-text-sanitize.js", "quiz-taxonomy.js", "questions.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}
context.MATH_TEXT_SANITIZE = context.window.MATH_TEXT_SANITIZE;

const { generateTopicVariant, drillQuestionSignature, VARIANTS_PER_TOPIC } = context.window.EXAM_ENGINE;
const { sanitizeQuestion } = context.window.MATH_TEXT_SANITIZE;
const taxonomy = context.window.QUIZ_TAXONOMY || {};
const bank = {};
let topics = 0;

for (const [quizId, chapter] of Object.entries(taxonomy)) {
  for (const section of chapter.sections || []) {
    for (const topic of section.topics || []) {
      const key = `${quizId}/${topic.id}`;
      const presets = [];
      const signatures = new Set();
      for (let vi = 0; vi < VARIANTS_PER_TOPIC; vi++) {
        let question = null;
        for (let attempt = 0; attempt < 40; attempt++) {
          const raw = generateTopicVariant(quizId, topic, vi + attempt * VARIANTS_PER_TOPIC);
          const candidate = sanitizeQuestion({ ...raw, diagram: null });
          const sig = drillQuestionSignature(candidate);
          if (!signatures.has(sig)) {
            question = candidate;
            signatures.add(sig);
            break;
          }
        }
        if (!question) throw new Error(`${key} variant ${vi}: could not find unique preset after 40 attempts`);
        presets.push(question);
      }
      bank[key] = presets;
      topics += 1;
    }
  }
}

fs.writeFileSync(
  path.join(root, "quiz-variant-bank.js"),
  `window.QUIZ_VARIANT_BANK = ${JSON.stringify(bank, null, 2)};\n`,
  "utf8"
);
console.log(`Refroze ${topics} topics × ${VARIANTS_PER_TOPIC} unique sanitized presets.`);
