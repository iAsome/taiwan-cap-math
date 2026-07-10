import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import { readUtf8AtCommit } from "./git-at-commit.mjs";

export function loadRecordsFromCode(code, globalName) {
  assert.equal(typeof code, "string", "code must be a string");
  assert.equal(typeof globalName, "string", "globalName must be a string");
  const ctx = { window: {} };
  vm.runInNewContext(code, ctx);
  const records = ctx.window[globalName];
  if (!Array.isArray(records)) {
    throw new Error(`configured global missing or not an array: ${globalName}`);
  }
  return records;
}

export function loadRecordsFromFile(absPath, globalName) {
  return loadRecordsFromCode(readFileSync(absPath, "utf8"), globalName);
}

export function loadRecordsAtCommit({ repoRoot, commit, repoPath, globalName }) {
  const code = readUtf8AtCommit({ repoRoot, commit, repoPath });
  return loadRecordsFromCode(code, globalName);
}

export function loadQuestionBankFromFile(absPath, globalName) {
  return loadRecordsFromFile(absPath, globalName);
}

export function loadLectureBankFromFile(absPath, globalName) {
  return loadRecordsFromFile(absPath, globalName);
}

export function loadQuestionBankAtCommit(opts) {
  return loadRecordsAtCommit(opts);
}

export function loadLectureBankAtCommit(opts) {
  return loadRecordsAtCommit(opts);
}
