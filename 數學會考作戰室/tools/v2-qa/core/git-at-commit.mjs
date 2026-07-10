import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

const SHA_RE = /^[0-9a-f]{40}$/;

export function assertCommitSha(commit, label = "commit") {
  assert.equal(typeof commit, "string", `${label}: must be a string`);
  assert.match(commit, SHA_RE, `${label}: must be a 40-character lowercase SHA`);
}

export function assertCommitExists(commit, repoRoot) {
  assertCommitSha(commit);
  const type = execFileSync("git", ["cat-file", "-t", commit], {
    cwd: repoRoot,
    encoding: "utf8"
  }).trim();
  assert.equal(type, "commit", `${commit}: git object must be a commit`);
  return type;
}

export function readUtf8AtCommit({ repoRoot, commit, repoPath }) {
  assertCommitSha(commit);
  return execFileSync("git", ["show", `${commit}:${repoPath}`], {
    cwd: repoRoot,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024
  });
}

export function readBytesAtCommit({ repoRoot, commit, repoPath }) {
  assertCommitSha(commit);
  return execFileSync("git", ["show", `${commit}:${repoPath}`], {
    cwd: repoRoot,
    maxBuffer: 64 * 1024 * 1024
  });
}
