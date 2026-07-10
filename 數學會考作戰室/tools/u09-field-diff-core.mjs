import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MATH_ROOT = path.resolve(__dirname, "..");
const REPO_ROOT = path.resolve(MATH_ROOT, "..");

const QUESTION_BANK_PATH = "數學會考作戰室/v2/math-question-bank-v2-u09.js";
const LECTURE_PATH = "數學會考作戰室/v2/math-lecture-v2-u09.js";

const QUESTION_BANK_ABS = path.join(MATH_ROOT, "v2", "math-question-bank-v2-u09.js");
const LECTURE_ABS = path.join(MATH_ROOT, "v2", "math-lecture-v2-u09.js");

export function loadQuestionBankFromCode(code) {
  const ctx = { window: {} };
  vm.runInNewContext(code, ctx);
  return ctx.window.MATH_QUESTION_BANK_V2_U09;
}

export function loadCurrentQuestionBank() {
  return loadQuestionBankFromCode(readFileSync(QUESTION_BANK_ABS, "utf8"));
}

export function loadQuestionBankAtCommit(commit) {
  const code = execFileSync("git", ["show", `${commit}:${QUESTION_BANK_PATH}`], {
    cwd: REPO_ROOT,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024
  });
  return loadQuestionBankFromCode(code);
}

export function collectTopLevelQuestionFieldDiffs(before, after) {
  const beforeById = new Map(before.map(q => [q.questionId, q]));
  const afterById = new Map(after.map(q => [q.questionId, q]));
  const ids = new Set([...beforeById.keys(), ...afterById.keys()]);
  const diffs = [];

  for (const questionId of ids) {
    const beforeQuestion = beforeById.get(questionId);
    const afterQuestion = afterById.get(questionId);
    if (!beforeQuestion || !afterQuestion) continue;

    const fields = new Set([
      ...Object.keys(beforeQuestion),
      ...Object.keys(afterQuestion)
    ]);

    for (const field of fields) {
      const beforeValue = beforeQuestion[field];
      const afterValue = afterQuestion[field];
      if (JSON.stringify(beforeValue) !== JSON.stringify(afterValue)) {
        diffs.push({ questionId, field, before: beforeValue, after: afterValue });
      }
    }
  }

  return diffs;
}

export function assertQuestionIdsUnique(bank) {
  const seen = new Set();
  for (const q of bank) {
    assert.ok(typeof q.questionId === "string" && q.questionId.length > 0, "questionId must be a non-empty string");
    assert.ok(!seen.has(q.questionId), `duplicate questionId: ${q.questionId}`);
    seen.add(q.questionId);
  }
}

export function assertQuestionSequenceUnchanged(before, after) {
  assert.equal(before.length, after.length, "question bank length changed");
  const beforeIds = before.map(q => q.questionId);
  const afterIds = after.map(q => q.questionId);
  // ponytail: spread clones VM-origin string arrays so Node assert.deepEqual compares values, not cross-context refs
  assert.deepEqual([...afterIds], [...beforeIds], "question sequence changed");
}

export function readCurrentLectureFile() {
  return readFileSync(LECTURE_ABS);
}

export function readLectureFileAtCommit(commit) {
  return execFileSync("git", ["show", `${commit}:${LECTURE_PATH}`], {
    cwd: REPO_ROOT,
    maxBuffer: 64 * 1024 * 1024
  });
}

export function assertByteIdentical(before, after, message = "byte content differs") {
  const a = Buffer.isBuffer(before) ? before : Buffer.from(before);
  const b = Buffer.isBuffer(after) ? after : Buffer.from(after);
  if (!a.equals(b)) {
    assert.fail(message);
  }
}

export function assertLectureFileUnchanged(commit) {
  const before = readLectureFileAtCommit(commit);
  const after = readCurrentLectureFile();
  assertByteIdentical(before, after, `lecture file byte mismatch vs ${commit}`);
}

export function assertAllowedQuestionFieldDiffsForBanks(options) {
  const {
    label,
    before,
    after,
    allowedFieldsByQuestionId,
    expectedChangedRecords,
    expectedChangedFields
  } = options;

  assertQuestionIdsUnique(before);
  assertQuestionIdsUnique(after);
  assertQuestionSequenceUnchanged(before, after);

  const diffs = collectTopLevelQuestionFieldDiffs(before, after);
  const changedRecords = new Set();
  const unauthorized = [];
  const missing = [];

  for (const diff of diffs) {
    if (diff.field === "questionId") {
      unauthorized.push(`${diff.questionId}.questionId`);
      continue;
    }
    const allowed = allowedFieldsByQuestionId[diff.questionId];
    if (allowed?.includes(diff.field)) {
      changedRecords.add(diff.questionId);
    } else {
      unauthorized.push(`${diff.questionId}.${diff.field}`);
    }
  }

  for (const [questionId, fields] of Object.entries(allowedFieldsByQuestionId)) {
    for (const field of fields) {
      if (field === "questionId") {
        unauthorized.push(`${questionId}.questionId`);
        continue;
      }
      const changed = diffs.some(d => d.questionId === questionId && d.field === field);
      if (!changed) missing.push(`${questionId}.${field}`);
    }
  }

  const changedFields = diffs.filter(
    d => allowedFieldsByQuestionId[d.questionId]?.includes(d.field)
  ).length;

  if (unauthorized.length) {
    assert.fail(`${label}: unauthorized changes: ${unauthorized.join(", ")}`);
  }
  if (missing.length) {
    assert.fail(`${label}: authorized fields not changed: ${missing.join(", ")}`);
  }
  if (changedRecords.size !== expectedChangedRecords) {
    assert.fail(`${label}: changed records ${changedRecords.size} (expected ${expectedChangedRecords})`);
  }
  if (changedFields !== expectedChangedFields) {
    assert.fail(`${label}: changed fields ${changedFields} (expected ${expectedChangedFields})`);
  }

  return {
    changedRecords: [...changedRecords],
    changedFields,
    diffs
  };
}

export function assertAllowedQuestionFieldDiffs(options) {
  const {
    label,
    baseCommit,
    allowedFieldsByQuestionId,
    expectedChangedRecords,
    expectedChangedFields,
    lectureValidator
  } = options;

  const before = loadQuestionBankAtCommit(baseCommit);
  const after = loadCurrentQuestionBank();

  assert.equal(before.length, 144, `${label}: base bank must have 144 questions`);
  assert.equal(after.length, 144, `${label}: current bank must have 144 questions`);

  const result = assertAllowedQuestionFieldDiffsForBanks({
    label,
    before,
    after,
    allowedFieldsByQuestionId,
    expectedChangedRecords,
    expectedChangedFields
  });

  if (lectureValidator) {
    assert.equal(typeof lectureValidator, "function", `${label}: lectureValidator must be a function`);
    lectureValidator();
  } else {
    assertLectureFileUnchanged(baseCommit);
  }

  return result;
}
