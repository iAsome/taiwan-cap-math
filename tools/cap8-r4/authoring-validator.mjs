import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const CONTRACT_PATH = path.join(HERE, "contract-r4.schema.json");
const SUPPORTED = new Set(["source", "authority", "skill", "lecture", "question", "finalAudit", "corpusRange"]);
let compiledPromise;

async function compiled() {
  if (!compiledPromise) {
    compiledPromise = (async () => {
      const schema = JSON.parse(await readFile(CONTRACT_PATH, "utf8"));
      const ajv = new Ajv2020({ allErrors: true, strict: true, formats: { uri: true } });
      ajv.addSchema(schema);
      return Object.fromEntries(
        [...SUPPORTED].map((kind) => [kind, ajv.compile({ $ref: `${schema.$id}#/$defs/${kind}` })]),
      );
    })();
  }
  return compiledPromise;
}

function invariantQuestion(question) {
  assert(question.answerIndex < question.options.length, `${question.id}: answerIndex out of range`);
  assert.equal(question.optionRationales.length, question.options.length, `${question.id}: every option needs one rationale`);
  const indices = question.optionRationales.map((item) => item.optionIndex).sort((a, b) => a - b);
  assert.deepEqual(indices, question.options.map((_, index) => index), `${question.id}: option rationale indices mismatch`);
  const correct = question.optionRationales.filter((item) => item.isCorrect);
  assert.equal(correct.length, 1, `${question.id}: exactly one rationale must be correct`);
  assert.equal(correct[0].optionIndex, question.answerIndex, `${question.id}: rationale key mismatch`);
  for (const review of question.independentReviews) {
    assert.equal(review.derivedAnswerIndex, question.answerIndex, `${question.id}: independent review disagrees`);
  }
}

export async function validateAuthoringRecord(kind, value) {
  assert(SUPPORTED.has(kind), `unsupported authoring record kind: ${kind}`);
  const validate = (await compiled())[kind];
  if (!validate(value)) {
    throw new Error(
      `${kind} authoring validation failed: ${validate.errors.map((error) => `${error.instancePath || "/"} ${error.message}`).join("; ")}`,
    );
  }
  if (kind === "question") invariantQuestion(value);
  if (kind === "corpusRange") assert(value.startByte < value.endByte, "corpus range must be non-empty");
  return true;
}
