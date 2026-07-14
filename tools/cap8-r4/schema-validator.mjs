import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import { verifyFinalAuditBinding } from "./r4-core.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE_SCHEMA_ROOT = path.join(
  HERE,
  "specification",
  "taiwan-cap-8-subject-one-shot-codex-pack-r4",
  "schemas",
);

const SCHEMAS = Object.freeze({
  lecture: "lecture-r4.schema.json",
  question: "static-question-r4.schema.json",
  stimulus: "stimulus-r4.schema.json",
  asset: "asset-r4.schema.json",
  officialItem: "official-item-ledger-r4.schema.json",
  finalAudit: "final-exhaustive-audit-record-r4.schema.json",
});

let validatorPromise;

async function loadJson(filename) {
  return JSON.parse(await readFile(path.join(PACKAGE_SCHEMA_ROOT, filename), "utf8"));
}

async function validators() {
  if (!validatorPromise) {
    validatorPromise = (async () => {
      const ajv = new Ajv2020({ allErrors: true, strict: true });
      const loaded = Object.fromEntries(
        await Promise.all(Object.entries(SCHEMAS).map(async ([kind, filename]) => [kind, await loadJson(filename)])),
      );
      ajv.addSchema(loaded.finalAudit, SCHEMAS.finalAudit);
      return Object.fromEntries(
        Object.entries(loaded).map(([kind, schema]) => [kind, ajv.compile(schema)]),
      );
    })();
  }
  return validatorPromise;
}

export async function validateR4Artifact(kind, artifact) {
  assert(Object.hasOwn(SCHEMAS, kind), `unknown R4 artifact kind: ${kind}`);
  const validate = (await validators())[kind];
  if (!validate(artifact)) {
    const details = validate.errors
      .map((error) => `${error.instancePath || "/"} ${error.message}`)
      .join("; ");
    throw new Error(`${kind} schema validation failed: ${details}`);
  }
  if (kind === "question") {
    assert(artifact.answerIndex < artifact.options.length, "answerIndex exceeds options length");
    assert.equal(
      artifact.distractorRationales.length,
      artifact.options.length - 1,
      "distractor rationale count must equal options minus one",
    );
  }
  if (kind !== "finalAudit") verifyFinalAuditBinding(artifact);
  return true;
}

export async function schemaValidatorImportReady() {
  await validators();
  return true;
}
