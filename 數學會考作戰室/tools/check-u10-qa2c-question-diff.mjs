#!/usr/bin/env node
/** U10-QA2C: assert difference-of-squares question diff matches manifest against fixed base. */
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { U10_QA2C_REQUIRED_QUESTIONS } from "./u10-qa2c-question-manifest.mjs";

const BASE = "389ed1a5377987c6bc37a937de0ad83ae75a1c18";
const tools = path.dirname(fileURLToPath(import.meta.url));
const root = path.dirname(tools);
const v2 = path.join(root, "v2");
const REPO = path.join(root, "..");
const MANIFEST = U10_QA2C_REQUIRED_QUESTIONS;
const QA2C_IDS = Object.keys(MANIFEST).sort();

function gitShow(repoPath) {
  return execFileSync("git", ["show", `${BASE}:${repoPath}`], {
    cwd: REPO,
    encoding: "utf8",
  });
}

function loadQuestionsFromSource(source) {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(source, ctx, { filename: "bank.js" });
  return ctx.window.MATH_QUESTION_BANK_V2_U10;
}

function loadCurrentQuestions() {
  const src = fs.readFileSync(path.join(v2, "math-question-bank-v2-u10.js"), "utf8");
  return loadQuestionsFromSource(src);
}

function loadBaseQuestions() {
  const src = gitShow("數學會考作戰室/v2/math-question-bank-v2-u10.js");
  return loadQuestionsFromSource(src);
}

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function assertContentEqual(actual, expected, label) {
  assert.equal(JSON.stringify(actual), JSON.stringify(expected), label);
}

export function assertU10Qa2cQuestionDiff() {
  const baseLecture = gitShow("數學會考作戰室/v2/math-lecture-v2-u10.js");
  const curLecture = fs.readFileSync(path.join(v2, "math-lecture-v2-u10.js"), "utf8");
  assert.equal(curLecture, baseLecture, "lecture bank must be byte-identical to base");

  const base = loadBaseQuestions();
  const current = loadCurrentQuestions();
  assert.equal(base.length, 144, "base question count");
  assert.equal(current.length, 144, "current question count");

  const baseIds = base.map((q) => q.questionId);
  const curIds = current.map((q) => q.questionId);
  assert.equal(JSON.stringify(curIds), JSON.stringify(baseIds), "question order/ids preserved");
  assert.equal(new Set(curIds).size, 144, "unique questionIds");

  assert.equal(QA2C_IDS.length, 9, "manifest question count");
  for (const id of QA2C_IDS) {
    assert.equal(curIds.filter((x) => x === id).length, 1, `${id} exactly once`);
  }

  let changedRecords = 0;
  let changedFields = 0;

  for (let i = 0; i < base.length; i++) {
    const b = base[i];
    const c = current[i];
    const patch = MANIFEST[c.questionId];
    const recordChanged = !deepEqual(b, c);
    if (recordChanged) changedRecords++;

    if (!patch) {
      assertContentEqual(c, b, `${c.questionId} must be unchanged`);
      continue;
    }

    for (const key of Object.keys(b)) {
      const same = deepEqual(b[key], c[key]);
      if (same) continue;
      if (key in patch) {
        assertContentEqual(c[key], patch[key], `${c.questionId}.${key}`);
        changedFields++;
        continue;
      }
      assert.fail(`${c.questionId}.${key} changed but not in manifest`);
    }

    for (const key of Object.keys(c)) {
      if (!(key in b)) assert.fail(`${c.questionId} added field ${key}`);
    }

    for (const [key, val] of Object.entries(patch)) {
      assertContentEqual(c[key], val, `${c.questionId} manifest ${key}`);
    }
  }

  assert.equal(changedRecords, 9, "changed question records");
  assert.equal(changedFields, 45, "changed top-level fields");

  return { changedRecords, changedFields };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { changedRecords, changedFields } = assertU10Qa2cQuestionDiff();
  console.log("check-u10-qa2c-question-diff: OK");
  console.log(`  changedRecords: ${changedRecords}`);
  console.log(`  changedFields: ${changedFields}`);
}
