import assert from "node:assert/strict";
import path from "node:path";
import {
  entityIdField,
  resolveConfigPaths,
  validateManifest,
  validateUnitConfig
} from "../configs/schema.mjs";
import { assertOppositeBankByteLock } from "../core/byte-compare.mjs";
import { assertManifestDiff } from "../core/field-diff-core.mjs";
import {
  loadLectureBankAtCommit,
  loadLectureBankFromFile
} from "../core/pack-loader.mjs";

function repoRelative(mathRoot, repoRoot, absPath) {
  return path.relative(repoRoot, absPath).split(path.sep).join("/");
}

export function assertLectureDiff({
  unitConfig,
  manifest,
  oppositeBankByteLock = false,
  label = manifest.manifestId
}) {
  validateUnitConfig(unitConfig);
  validateManifest(manifest);
  assert.equal(manifest.entity, "lecture", "manifest entity must be lecture");
  assert.equal(manifest.unitId, unitConfig.unitId, "manifest unitId mismatch");

  const paths = resolveConfigPaths(unitConfig);
  const idField = entityIdField("lecture");
  const baseCommit = manifest.baseCommit;
  const lectureRepoPath = repoRelative(paths.mathRoot, paths.repoRoot, paths.lecture);

  const before = loadLectureBankAtCommit({
    repoRoot: paths.repoRoot,
    commit: baseCommit,
    repoPath: lectureRepoPath,
    globalName: unitConfig.globals.lecture
  });
  const after = loadLectureBankFromFile(paths.lecture, unitConfig.globals.lecture);

  assert.equal(
    before.length,
    unitConfig.bank.lectureCount,
    `${label}: base lecture count`
  );
  assert.equal(
    after.length,
    unitConfig.bank.lectureCount,
    `${label}: current lecture count`
  );
  assert.equal(
    new Set(before.map(record => record.skillId)).size,
    unitConfig.bank.skillCount,
    `${label}: base skill count`
  );
  assert.equal(
    new Set(after.map(record => record.skillId)).size,
    unitConfig.bank.skillCount,
    `${label}: current skill count`
  );

  if (oppositeBankByteLock) {
    assertOppositeBankByteLock({
      unitConfig,
      paths,
      baseCommit,
      lockingEntity: "question"
    });
  }

  return assertManifestDiff({
    label,
    before,
    after,
    idField,
    entries: manifest.entries,
    manifest,
    expected: manifest.expected
  });
}
