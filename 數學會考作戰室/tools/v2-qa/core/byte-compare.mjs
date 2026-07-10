import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { readBytesAtCommit } from "./git-at-commit.mjs";

export function assertByteIdentical(before, after, message = "byte content differs") {
  const a = Buffer.isBuffer(before) ? before : Buffer.from(before);
  const b = Buffer.isBuffer(after) ? after : Buffer.from(after);
  if (!a.equals(b)) {
    assert.fail(message);
  }
}

export function readCurrentBytes(absPath) {
  return readFileSync(absPath);
}

export function assertFileByteIdenticalToCommit({
  absPath,
  repoRoot,
  commit,
  repoPath,
  label = repoPath
}) {
  const before = readBytesAtCommit({ repoRoot, commit, repoPath });
  const after = readCurrentBytes(absPath);
  assertByteIdentical(before, after, `${label}: byte mismatch vs ${commit}`);
}

export function assertOppositeBankByteLock({ unitConfig, paths, baseCommit, lockingEntity }) {
  const repoPath =
    lockingEntity === "question"
      ? `數學會考作戰室/${unitConfig.paths.questionBank}`
      : `數學會考作戰室/${unitConfig.paths.lecture}`;
  const absPath = lockingEntity === "question" ? paths.questionBank : paths.lecture;
  assertFileByteIdenticalToCommit({
    absPath,
    repoRoot: paths.repoRoot,
    commit: baseCommit,
    repoPath,
    label: lockingEntity
  });
}
