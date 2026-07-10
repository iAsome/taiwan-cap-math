import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { QA5C_REQUIRED_LECTURES } from "./u09-qa5c-lecture-manifest.mjs";
import { assertByteIdentical } from "./u09-field-diff-core.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MATH_ROOT = path.resolve(__dirname, "..");
const REPO_ROOT = path.resolve(MATH_ROOT, "..");

const BASE = process.env.U09_QA5C_BASE || "b286b67e57b8d47f071825261999e45f3a31cc19";
const LECTURE_PATH = "數學會考作戰室/v2/math-lecture-v2-u09.js";
const QUESTION_BANK_PATH = "數學會考作戰室/v2/math-question-bank-v2-u09.js";
const LECTURE_ABS = path.join(MATH_ROOT, "v2", "math-lecture-v2-u09.js");
const QUESTION_BANK_ABS = path.join(MATH_ROOT, "v2", "math-question-bank-v2-u09.js");

function loadLecturesFromCode(code) {
  const ctx = { window: {} };
  vm.runInNewContext(code, ctx);
  return ctx.window.MATH_LECTURE_V2_U09;
}

function loadCurrentLectures() {
  return loadLecturesFromCode(readFileSync(LECTURE_ABS, "utf8"));
}

function loadLecturesAtCommit(commit) {
  const code = execFileSync("git", ["show", `${commit}:${LECTURE_PATH}`], {
    cwd: REPO_ROOT,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024
  });
  return loadLecturesFromCode(code);
}

function readQuestionBankAtCommit(commit) {
  return execFileSync("git", ["show", `${commit}:${QUESTION_BANK_PATH}`], {
    cwd: REPO_ROOT,
    maxBuffer: 64 * 1024 * 1024
  });
}

function readCurrentQuestionBank() {
  return readFileSync(QUESTION_BANK_ABS);
}

function collectTopLevelLectureFieldDiffs(before, after) {
  const beforeBySkill = new Map(before.map(l => [l.skillId, l]));
  const afterBySkill = new Map(after.map(l => [l.skillId, l]));
  const skillIds = new Set([...beforeBySkill.keys(), ...afterBySkill.keys()]);
  const diffs = [];

  for (const skillId of skillIds) {
    const beforeLecture = beforeBySkill.get(skillId);
    const afterLecture = afterBySkill.get(skillId);
    if (!beforeLecture || !afterLecture) continue;

    const fields = new Set([
      ...Object.keys(beforeLecture),
      ...Object.keys(afterLecture)
    ]);

    for (const field of fields) {
      const beforeValue = beforeLecture[field];
      const afterValue = afterLecture[field];
      if (JSON.stringify(beforeValue) !== JSON.stringify(afterValue)) {
        diffs.push({ skillId, field, before: beforeValue, after: afterValue });
      }
    }
  }

  return diffs;
}

function assertLectureSequenceUnchanged(before, after) {
  assert.equal(before.length, after.length, "lecture bank length changed");
  const beforeIds = before.map(l => l.skillId);
  const afterIds = after.map(l => l.skillId);
  assert.deepEqual([...afterIds], [...beforeIds], "lecture sequence changed");
}

export function assertU09Qa5cLectureDiff() {
  const beforeBank = readQuestionBankAtCommit(BASE);
  const afterBank = readCurrentQuestionBank();
  assertByteIdentical(beforeBank, afterBank, `question bank byte mismatch vs ${BASE}`);

  const before = loadLecturesAtCommit(BASE);
  const after = loadCurrentLectures();

  assert.equal(before.length, 12, "base lectures must have 12 entries");
  assert.equal(after.length, 12, "current lectures must have 12 entries");
  assert.equal(new Set(before.map(l => l.skillId)).size, 12, "base skillIds must be unique");
  assert.equal(new Set(after.map(l => l.skillId)).size, 12, "current skillIds must be unique");
  assertLectureSequenceUnchanged(before, after);

  const diffs = collectTopLevelLectureFieldDiffs(before, after);
  const changedRecords = new Set();
  const unauthorized = [];
  const missing = [];

  for (const diff of diffs) {
    if (diff.field === "skillId") {
      unauthorized.push(`${diff.skillId}.skillId`);
      continue;
    }
    const allowed = QA5C_REQUIRED_LECTURES[diff.skillId];
    const allowedFields = allowed ? Object.keys(allowed) : [];
    if (allowedFields.includes(diff.field)) {
      changedRecords.add(diff.skillId);
    } else {
      unauthorized.push(`${diff.skillId}.${diff.field}`);
    }
  }

  for (const [skillId, fields] of Object.entries(QA5C_REQUIRED_LECTURES)) {
    for (const field of Object.keys(fields)) {
      const changed = diffs.some(d => d.skillId === skillId && d.field === field);
      if (!changed) missing.push(`${skillId}.${field}`);
    }
  }

  const changedFields = diffs.filter(d => {
    const allowedFields = Object.keys(QA5C_REQUIRED_LECTURES[d.skillId] || {});
    return allowedFields.includes(d.field);
  }).length;

  if (unauthorized.length) {
    assert.fail(`check-u09-qa5c-lecture-diff: unauthorized changes: ${unauthorized.join(", ")}`);
  }
  if (missing.length) {
    assert.fail(`check-u09-qa5c-lecture-diff: authorized fields not changed: ${missing.join(", ")}`);
  }
  if (changedRecords.size !== 12) {
    assert.fail(`check-u09-qa5c-lecture-diff: changed records ${changedRecords.size} (expected 12)`);
  }
  if (changedFields !== 17) {
    assert.fail(`check-u09-qa5c-lecture-diff: changed fields ${changedFields} (expected 17)`);
  }

  return {
    changedRecords: [...changedRecords],
    changedFields,
    diffs
  };
}

const isDirectRun =
  process.argv[1] &&
  path.resolve(fileURLToPath(import.meta.url)) === path.resolve(process.argv[1]);

if (isDirectRun) {
  assertU09Qa5cLectureDiff();
  console.log("check-u09-qa5c-lecture-diff: OK");
  console.log("  authorized lecture records: 12");
  console.log("  authorized changed fields: 17");
  console.log("  exhaustive top-level lecture scan: OK");
  console.log("  lecture sequence unchanged: OK");
  console.log("  question bank byte-identical: OK");
  console.log(`  base commit: ${BASE}`);
}
