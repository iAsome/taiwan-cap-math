import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const V2_QA_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export const MANIFEST_KINDS = Object.freeze(["authorized-fields", "exact-patch"]);
export const MANIFEST_ENTITIES = Object.freeze(["question", "lecture"]);

const SHA_RE = /^[0-9a-f]{40}$/;

export const QUESTION_FIELD_ALLOWLIST = Object.freeze([
  "answerIndex",
  "choices",
  "commonMistake",
  "concept",
  "difficulty",
  "estimatedTimeSec",
  "explanation",
  "numericUnitId",
  "questionId",
  "skillId",
  "sourceScope",
  "steps",
  "tags",
  "text",
  "title",
  "topicId",
  "type",
  "unitId",
  "visualMode"
]);

export const LECTURE_FIELD_ALLOWLIST = Object.freeze([
  "commonMistakes",
  "concept",
  "conceptZh",
  "exampleWhyZh",
  "examples",
  "formula",
  "skillId",
  "stepGuide",
  "title"
]);

export function isPlainObject(value) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

function assertUniqueFieldNames(fields, label) {
  const seen = new Set();
  for (const field of fields) {
    assert.equal(typeof field, "string", `${label}: field names must be strings`);
    assert.ok(!seen.has(field), `${label}: duplicate field name ${field}`);
    seen.add(field);
  }
}

function validateFieldNameList(fields, entity, label) {
  assertUniqueFieldNames(fields, label);
  const allowlist = entity === "question" ? QUESTION_FIELD_ALLOWLIST : LECTURE_FIELD_ALLOWLIST;
  const idField = entity === "question" ? "questionId" : "skillId";
  for (const field of fields) {
    assert.notEqual(field, idField, `${label}: cannot list ${idField}`);
    assert.ok(allowlist.includes(field), `${label}: unknown field ${field}`);
  }
}

export function assertSha(value, label) {
  assert.equal(typeof value, "string", `${label}: must be a string`);
  assert.match(value, SHA_RE, `${label}: must be a 40-character lowercase SHA`);
}

export function resolveMathRoot(fromDir = V2_QA_ROOT) {
  return path.resolve(fromDir, "../..");
}

export function resolveRepoRoot(fromDir = V2_QA_ROOT) {
  return path.resolve(resolveMathRoot(fromDir), "..");
}

export function resolveConfigPaths(unitConfig, fromDir = V2_QA_ROOT, overrides = {}) {
  const v2qaRoot = overrides.v2qaRoot ?? path.resolve(fromDir);
  const mathRoot = overrides.mathRoot ?? path.resolve(v2qaRoot, "../..");
  const repoRoot = overrides.repoRoot ?? path.resolve(mathRoot, "..");
  return {
    mathRoot,
    repoRoot,
    v2qaRoot,
    questionBank: path.join(mathRoot, unitConfig.paths.questionBank),
    lecture: path.join(mathRoot, unitConfig.paths.lecture),
    locks: path.join(mathRoot, unitConfig.paths.locks)
  };
}

export function validateUnitConfig(unitConfig) {
  assert.ok(isPlainObject(unitConfig), "unit config must be an object");

  assert.equal(typeof unitConfig.unitId, "string", "unitId required");
  assert.match(unitConfig.unitId, /^u\d{2}$/, "unitId must match uNN");

  assertSha(unitConfig.acceptedCommit, "acceptedCommit");

  assert.ok(isPlainObject(unitConfig.bank), "bank required");
  assert.equal(typeof unitConfig.bank.questionCount, "number", "bank.questionCount required");
  assert.equal(typeof unitConfig.bank.lectureCount, "number", "bank.lectureCount required");
  assert.equal(typeof unitConfig.bank.skillCount, "number", "bank.skillCount required");
  assert.ok(unitConfig.bank.questionCount > 0, "bank.questionCount must be positive");
  assert.ok(unitConfig.bank.lectureCount > 0, "bank.lectureCount must be positive");
  assert.ok(unitConfig.bank.skillCount > 0, "bank.skillCount must be positive");

  assert.ok(isPlainObject(unitConfig.paths), "paths required");
  for (const key of ["questionBank", "lecture", "locks"]) {
    assert.equal(typeof unitConfig.paths[key], "string", `paths.${key} required`);
    assert.ok(unitConfig.paths[key].length > 0, `paths.${key} must be non-empty`);
  }

  assert.ok(isPlainObject(unitConfig.globals), "globals required");
  assert.equal(typeof unitConfig.globals.questionBank, "string", "globals.questionBank required");
  assert.equal(typeof unitConfig.globals.lecture, "string", "globals.lecture required");

  assert.ok(Array.isArray(unitConfig.buildPipeline), "buildPipeline must be an array");
  for (const script of unitConfig.buildPipeline) {
    assert.equal(typeof script, "string", "buildPipeline entries must be strings");
    assert.ok(script.length > 0, "buildPipeline entry must be non-empty");
  }

  assert.equal(typeof unitConfig.legacyReleaseGate, "string", "legacyReleaseGate required");
  assert.ok(unitConfig.legacyReleaseGate.length > 0, "legacyReleaseGate must be non-empty");

  assert.ok(isPlainObject(unitConfig.reviewArtifacts), "reviewArtifacts required");
  for (const key of ["dossier", "distractor", "samples"]) {
    assert.equal(typeof unitConfig.reviewArtifacts[key], "string", `reviewArtifacts.${key} required`);
  }

  assert.equal(unitConfig.migrationPhase, "foundation-only", "migrationPhase must be foundation-only in phase 1A");

  assert.ok(isPlainObject(unitConfig.thresholds), "thresholds required");
  for (const [key, value] of Object.entries(unitConfig.thresholds)) {
    assert.equal(typeof value, "number", `thresholds.${key} must be a number`);
    assert.ok(value > 0, `thresholds.${key} must be positive`);
  }

  assert.ok(Array.isArray(unitConfig.batches), "batches must be an array");

  return unitConfig;
}

function validateAuthorizedFieldsEntries(entries, entity) {
  assert.ok(isPlainObject(entries), "entries must be an object");
  const idField = entity === "question" ? "questionId" : "skillId";
  for (const [entityId, fields] of Object.entries(entries)) {
    assert.equal(typeof entityId, "string", "entry id must be a string");
    assert.ok(entityId.length > 0, "entry id must be non-empty");
    assert.ok(Array.isArray(fields), `${entityId}: authorized-fields entry must be an array`);
    assert.ok(fields.length > 0, `${entityId}: authorized-fields entry must not be empty`);
    validateFieldNameList(fields, entity, `${entityId}: authorized-fields`);
    for (const field of fields) {
      assert.notEqual(field, idField, `${entityId}: cannot authorize ${idField} changes`);
    }
  }
}

function validateExactPatchEntries(entries, entity, allowedFields, perRecordAllowedFields) {
  assert.ok(isPlainObject(entries), "entries must be an object");
  const allowlist = entity === "question" ? QUESTION_FIELD_ALLOWLIST : LECTURE_FIELD_ALLOWLIST;
  const idField = entity === "question" ? "questionId" : "skillId";

  for (const [entityId, patch] of Object.entries(entries)) {
    assert.equal(typeof entityId, "string", "entry id must be a string");
    assert.ok(isPlainObject(patch), `${entityId}: exact-patch entry must be an object`);
    assert.ok(Object.keys(patch).length > 0, `${entityId}: exact-patch entry must not be empty`);

    const recordAllowed = new Set([
      ...(allowedFields ?? []),
      ...(perRecordAllowedFields?.[entityId] ?? [])
    ]);

    for (const [field, value] of Object.entries(patch)) {
      assert.notEqual(field, idField, `${entityId}: cannot patch ${idField}`);
      assert.ok(allowlist.includes(field), `${entityId}: unknown field ${field}`);
      if (recordAllowed.size > 0) {
        assert.ok(recordAllowed.has(field), `${entityId}: field ${field} not in allowedFields`);
      }
      assert.ok(isJsonSerializable(value), `${entityId}.${field}: value must be JSON-serializable`);
    }
  }
}

export function isJsonSerializable(value, stack = new WeakSet()) {
  if (value === undefined) {
    return false;
  }
  if (value === null) {
    return true;
  }

  const valueType = typeof value;
  if (valueType === "string" || valueType === "boolean") {
    return true;
  }
  if (valueType === "number") {
    return Number.isFinite(value);
  }
  if (valueType === "bigint" || valueType === "function" || valueType === "symbol") {
    return false;
  }

  if (valueType !== "object") {
    return false;
  }

  if (stack.has(value)) {
    return false;
  }

  if (Array.isArray(value)) {
    stack.add(value);
    try {
      for (const item of value) {
        if (!isJsonSerializable(item, stack)) {
          return false;
        }
      }
      return true;
    } finally {
      stack.delete(value);
    }
  }

  if (!isPlainObject(value)) {
    return false;
  }

  stack.add(value);
  try {
    for (const key of Object.keys(value)) {
      if (!isJsonSerializable(value[key], stack)) {
        return false;
      }
    }
    return true;
  } finally {
    stack.delete(value);
  }
}

export function validateManifest(manifest) {
  assert.ok(isPlainObject(manifest), "manifest must be an object");

  assert.equal(typeof manifest.manifestId, "string", "manifestId required");
  assert.ok(manifest.manifestId.length > 0, "manifestId must be non-empty");

  assert.equal(typeof manifest.unitId, "string", "unitId required");
  assert.match(manifest.unitId, /^u\d{2}$/, "unitId must match uNN");

  assert.ok(MANIFEST_ENTITIES.includes(manifest.entity), `entity must be one of: ${MANIFEST_ENTITIES.join(", ")}`);

  assert.ok(MANIFEST_KINDS.includes(manifest.kind), `unknown manifest kind: ${manifest.kind}`);

  assertSha(manifest.baseCommit, "baseCommit");

  assert.ok(isPlainObject(manifest.expected), "expected required");
  assert.equal(typeof manifest.expected.changedRecords, "number", "expected.changedRecords required");
  assert.equal(typeof manifest.expected.changedFields, "number", "expected.changedFields required");
  assert.ok(manifest.expected.changedRecords >= 0, "expected.changedRecords must be >= 0");
  assert.ok(manifest.expected.changedFields >= 0, "expected.changedFields must be >= 0");

  if (manifest.allowedFields !== undefined) {
    assert.ok(Array.isArray(manifest.allowedFields), "allowedFields must be an array when present");
    validateFieldNameList(manifest.allowedFields, manifest.entity, "allowedFields");
  }

  if (manifest.perRecordAllowedFields !== undefined) {
    assert.ok(isPlainObject(manifest.perRecordAllowedFields), "perRecordAllowedFields must be an object");
    for (const [entityId, fields] of Object.entries(manifest.perRecordAllowedFields)) {
      assert.ok(Array.isArray(fields), `${entityId}: perRecordAllowedFields entry must be an array`);
      validateFieldNameList(fields, manifest.entity, `${entityId}: perRecordAllowedFields`);
    }
  }

  if (manifest.kind === "authorized-fields") {
    validateAuthorizedFieldsEntries(manifest.entries, manifest.entity);
    assert.equal(
      manifest.expected.changedRecords,
      Object.keys(manifest.entries).length,
      "expected.changedRecords must equal authorized entry count"
    );
    let fieldCount = 0;
    for (const fields of Object.values(manifest.entries)) {
      fieldCount += fields.length;
    }
    assert.equal(manifest.expected.changedFields, fieldCount, "expected.changedFields must equal authorized field count");
  } else {
    validateExactPatchEntries(
      manifest.entries,
      manifest.entity,
      manifest.allowedFields,
      manifest.perRecordAllowedFields
    );
    assert.equal(
      manifest.expected.changedRecords,
      Object.keys(manifest.entries).length,
      "expected.changedRecords must equal exact-patch entry count"
    );
    let fieldCount = 0;
    for (const patch of Object.values(manifest.entries)) {
      fieldCount += Object.keys(patch).length;
    }
    assert.equal(manifest.expected.changedFields, fieldCount, "expected.changedFields must equal exact-patch field count");
  }

  return manifest;
}

export function entityIdField(entity) {
  return entity === "question" ? "questionId" : "skillId";
}

export function fieldAllowlistForEntity(entity) {
  return entity === "question" ? QUESTION_FIELD_ALLOWLIST : LECTURE_FIELD_ALLOWLIST;
}

export function walkV2QaFiles(rootDir = V2_QA_ROOT) {
  const files = [];
  function walk(dir) {
    for (const name of readdirSync(dir)) {
      const full = path.join(dir, name);
      const st = statSync(full);
      if (st.isDirectory()) {
        walk(full);
      } else if (name.endsWith(".mjs") || name.endsWith(".js")) {
        files.push(full);
      }
    }
  }
  walk(rootDir);
  return files;
}

export function assertNoExecSyncInV2Qa(rootDir = V2_QA_ROOT) {
  const violations = [];
  const re = /\bexecSync\s*\(/;
  for (const file of walkV2QaFiles(rootDir)) {
    const text = readFileSync(file, "utf8");
    if (re.test(text)) {
      violations.push(path.relative(rootDir, file));
    }
  }
  if (violations.length) {
    throw new Error(`execSync found in v2-qa tree: ${violations.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)).join(", ")}`);
  }
}
