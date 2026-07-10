import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import path from "node:path";
import {
  assertNoExecSyncInV2Qa,
  entityIdField,
  isJsonSerializable,
  resolveConfigPaths,
  resolveMathRoot,
  validateManifest,
  validateUnitConfig
} from "../configs/schema.mjs";
import { assertCommitExists } from "../core/git-at-commit.mjs";
import { lockFileMap, readLocksJson } from "../core/hash-locks.mjs";
import { loadRecordsAtCommit } from "../core/pack-loader.mjs";

function repoRelative(mathRoot, repoRoot, relFromMathRoot) {
  const abs = path.join(mathRoot, relFromMathRoot);
  return path.relative(repoRoot, abs).split(path.sep).join("/");
}

function assertPipelinePathsExist(unitConfig, mathRoot) {
  const scripts = [
    ...unitConfig.buildPipeline,
    unitConfig.legacyReleaseGate
  ];
  for (const rel of scripts) {
    const abs = path.join(mathRoot, rel);
    assert.ok(existsSync(abs), `pipeline script missing: ${rel}`);
  }
}

function assertEntryIdsExistAtBase({ unitConfig, manifest, paths }) {
  const idField = entityIdField(manifest.entity);
  const relPath =
    manifest.entity === "question" ? unitConfig.paths.questionBank : unitConfig.paths.lecture;
  const globalName =
    manifest.entity === "question"
      ? unitConfig.globals.questionBank
      : unitConfig.globals.lecture;
  const repoPath = repoRelative(paths.mathRoot, paths.repoRoot, relPath);

  const records = loadRecordsAtCommit({
    repoRoot: paths.repoRoot,
    commit: manifest.baseCommit,
    repoPath,
    globalName
  });
  const ids = new Set(records.map(record => record[idField]));

  for (const entityId of Object.keys(manifest.entries)) {
    assert.ok(ids.has(entityId), `${manifest.manifestId}: missing ${idField} ${entityId} at base`);
  }
}

function buildCumulativeAuth(batches) {
  const cumulative = {};
  for (const batch of batches) {
    const manifest = batch.manifest;
    if (manifest.kind !== "authorized-fields") {
      continue;
    }
    for (const [entityId, fields] of Object.entries(manifest.entries)) {
      if (!cumulative[entityId]) {
        cumulative[entityId] = new Set(fields);
        continue;
      }
      for (const field of cumulative[entityId]) {
        assert.ok(
          fields.includes(field),
          `${batch.manifestId}: cumulative authorization removed ${entityId}.${field}`
        );
      }
      for (const field of fields) {
        cumulative[entityId].add(field);
      }
    }
  }
  return cumulative;
}

function assertManifestIdUniqueness(batches) {
  const seen = new Set();
  for (const batch of batches) {
    const id = batch.manifest.manifestId;
    assert.ok(!seen.has(id), `duplicate manifestId: ${id}`);
    seen.add(id);
  }
}

function assertLockArtifactConsistency(unitConfig, locksPath) {
  const locks = readLocksJson(locksPath);
  const files = lockFileMap(unitConfig);
  assert.deepEqual(
    Object.keys(locks).sort(),
    Object.keys(files).sort(),
    "lock keys must match configured artifact keys"
  );
}

export function lintUnitConfig(unitConfig, options = {}) {
  const violations = [];
  const mathRoot = options.mathRoot ?? resolveMathRoot();

  try {
    validateUnitConfig(unitConfig);
  } catch (error) {
    violations.push(`config: ${error.message}`);
    return { ok: false, violations: violations.sort() };
  }

  const paths = resolveConfigPaths(unitConfig, options.fromDir);

  try {
    assertCommitExists(unitConfig.acceptedCommit, paths.repoRoot);
  } catch (error) {
    violations.push(`acceptedCommit: ${error.message}`);
  }

  try {
    assertPipelinePathsExist(unitConfig, paths.mathRoot);
  } catch (error) {
    violations.push(`pipeline: ${error.message}`);
  }

  try {
    assertLockArtifactConsistency(unitConfig, paths.locks);
  } catch (error) {
    violations.push(`locks: ${error.message}`);
  }

  for (const rel of Object.values(lockFileMap(unitConfig))) {
    const abs = path.join(paths.mathRoot, rel);
    if (!existsSync(abs)) {
      violations.push(`artifact missing: ${rel}`);
    }
  }

  try {
    assertManifestIdUniqueness(unitConfig.batches);
    buildCumulativeAuth(unitConfig.batches);
  } catch (error) {
    violations.push(`batches: ${error.message}`);
  }

  for (const batch of unitConfig.batches) {
    try {
      validateManifest(batch.manifest);
      assert.equal(batch.manifest.unitId, unitConfig.unitId, "batch unitId mismatch");
      assertCommitExists(batch.manifest.baseCommit, paths.repoRoot);
      assertEntryIdsExistAtBase({ unitConfig, manifest: batch.manifest, paths });

      for (const value of iterateManifestValues(batch.manifest)) {
        if (!isJsonSerializable(value)) {
          violations.push(`${batch.manifest.manifestId}: non-serializable manifest value`);
        }
      }
    } catch (error) {
      violations.push(`${batch.manifest?.manifestId ?? "batch"}: ${error.message}`);
    }
  }

  try {
    assertNoExecSyncInV2Qa();
  } catch (error) {
    violations.push(error.message);
  }

  return {
    ok: violations.length === 0,
    violations: violations.sort()
  };
}

function* iterateManifestValues(manifest) {
  if (manifest.kind === "authorized-fields") {
    for (const fields of Object.values(manifest.entries)) {
      yield fields;
    }
    return;
  }
  for (const patch of Object.values(manifest.entries)) {
    for (const value of Object.values(patch)) {
      yield value;
    }
  }
}

export function lintManifest(manifest, unitConfig, options = {}) {
  const violations = [];

  try {
    validateUnitConfig(unitConfig);
    validateManifest(manifest);
  } catch (error) {
    violations.push(error.message);
    return { ok: false, violations: violations.sort() };
  }

  const paths = resolveConfigPaths(unitConfig, options.fromDir);

  try {
    assertCommitExists(manifest.baseCommit, paths.repoRoot);
  } catch (error) {
    violations.push(`baseCommit: ${error.message}`);
  }

  try {
    assertEntryIdsExistAtBase({ unitConfig, manifest, paths });
  } catch (error) {
    violations.push(error.message);
  }

  for (const value of iterateManifestValues(manifest)) {
    if (!isJsonSerializable(value)) {
      violations.push(`${manifest.manifestId}: non-serializable manifest value`);
    }
  }

  return {
    ok: violations.length === 0,
    violations: violations.sort()
  };
}

export function assertLintClean(result) {
  if (!result.ok) {
    assert.fail(`manifest lint failed:\n${result.violations.join("\n")}`);
  }
}
