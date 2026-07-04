import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const bankPath = path.join(root, "quiz-variant-bank.js");

if (!fs.existsSync(bankPath)) {
  console.error("quiz-variant-bank.js 不存在。請從含 template 展開邏輯的舊版 questions.js 執行一次性凍結，或還原 ce738f0~20260707a 間的 expand 流程。");
  process.exit(1);
}

const context = vm.createContext({ window: {}, console });
for (const file of ["data.js", "analysis-data.js", "quiz-taxonomy.js", "quiz-variant-bank.js", "quiz-variants.js", "questions.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const { topicVariantSignature, VARIANTS_PER_TOPIC, drillQuestionSignature } = context.window.EXAM_ENGINE;
const taxonomy = context.window.QUIZ_TAXONOMY || {};
const bank = context.window.QUIZ_VARIANT_BANK || {};

assert.equal(Object.keys(bank).length, 537, "bank must cover 537 topics");

for (const [quizId, chapter] of Object.entries(taxonomy)) {
  for (const section of chapter.sections || []) {
    for (const topic of section.topics || []) {
      const key = `${quizId}/${topic.id}`;
      assert.equal(bank[key]?.length, VARIANTS_PER_TOPIC, `${key} must have ${VARIANTS_PER_TOPIC} frozen presets`);
      assert.equal(topic.variants?.length, VARIANTS_PER_TOPIC, `${key} must attach explicit variants`);
      const signatures = new Set();
      for (let vi = 0; vi < VARIANTS_PER_TOPIC; vi++) {
        const sig = topicVariantSignature(quizId, topic, vi);
        assert.ok(!signatures.has(sig), `${key} variant ${vi} duplicates another variant`);
        signatures.add(sig);
        const fromBank = [bank[key][vi].text, bank[key][vi].choices?.join("|")].join("§");
        assert.equal(sig, fromBank, `${key} variant ${vi} runtime must match frozen bank`);
      }
    }
  }
}

console.log(`OK: quiz-variant-bank.js validates ${Object.keys(bank).length} topics × ${VARIANTS_PER_TOPIC} explicit variants.`);
