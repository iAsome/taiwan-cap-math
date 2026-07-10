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
  loadQuestionBankAtCommit,
  loadQuestionBankFromFile
} from "../core/pack-loader.mjs";

function repoRelative(mathRoot, repoRoot, absPath) {
  return path.relative(repoRoot, absPath).split(path.sep).join("/");
}

export function assertQuestionDiff({
  unitConfig,
  manifest,
  oppositeBankByteLock = false,
  label = manifest.manifestId
}) {
  validateUnitConfig(unitConfig);
  validateManifest(manifest);
  assert.equal(manifest.entity, "question", "manifest entity must be question");
  assert.equal(manifest.unitId, unitConfig.unitId, "manifest unitId mismatch");

  const paths = resolveConfigPaths(unitConfig);
  const idField = entityIdField("question");
  const baseCommit = manifest.baseCommit;
  const questionRepoPath = repoRelative(paths.mathRoot, paths.repoRoot, paths.questionBank);

  const before = loadQuestionBankAtCommit({
    repoRoot: paths.repoRoot,
    commit: baseCommit,
    repoPath: questionRepoPath,
    globalName: unitConfig.globals.questionBank
  });
  const after = loadQuestionBankFromFile(paths.questionBank, unitConfig.globals.questionBank);

  assert.equal(
    before.length,
    unitConfig.bank.questionCount,
    `${label}: base question count`
  );
  assert.equal(
    after.length,
    unitConfig.bank.questionCount,
    `${label}: current question count`
  );

  if (oppositeBankByteLock) {
    assertOppositeBankByteLock({
      unitConfig,
      paths,
      baseCommit,
      lockingEntity: "lecture"
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
