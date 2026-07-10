#!/usr/bin/env node
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { U08_QA2A_REQUIRED_QUESTIONS } from "./u08-qa2a-question-manifest.mjs";

const BASE_COMMIT = "7a05b1eda12a45332422fa60585b1987482ba308";
const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const V2 = path.join(ROOT, "v2");
const REPO_ROOT = path.dirname(ROOT);

const MANIFEST_IDS = Object.keys(U08_QA2A_REQUIRED_QUESTIONS).sort();

function loadQuestionsFromSource(source) {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(source, ctx, { filename: "bank.js" });
  return ctx.window.MATH_QUESTION_BANK_V2_U08;
}

function questionFieldDiff(base, current, manifestEntry) {
  const allowed = new Set(Object.keys(manifestEntry));
  const changed = [];
  const keys = new Set([...Object.keys(base), ...Object.keys(current)]);
  for (const key of keys) {
    if (JSON.stringify(base[key]) !== JSON.stringify(current[key])) {
      changed.push(key);
    }
  }
  for (const key of changed) {
    assert.ok(allowed.has(key), `${current.questionId}: unexpected field change ${key}`);
    assert.equal(
      JSON.stringify(current[key]),
      JSON.stringify(manifestEntry[key]),
      `${current.questionId}.${key} manifest`
    );
  }
  return changed.length;
}

export function assertU08Qa2aQuestionDiff() {
  assert.equal(MANIFEST_IDS.length, 16, "manifest question count");

  const baseBankPath = "數學會考作戰室/v2/math-question-bank-v2-u08.js";
  const baseLecturePath = "數學會考作戰室/v2/math-lecture-v2-u08.js";

  const baseBankBytes = execFileSync("git", ["show", `${BASE_COMMIT}:${baseBankPath}`], {
    cwd: REPO_ROOT,
  });
  const baseLectureBytes = execFileSync("git", ["show", `${BASE_COMMIT}:${baseLecturePath}`], {
    cwd: REPO_ROOT,
  });

  const currentBankBytes = fs.readFileSync(path.join(V2, "math-question-bank-v2-u08.js"));
  const currentLectureBytes = fs.readFileSync(path.join(V2, "math-lecture-v2-u08.js"));
  assert.ok(currentLectureBytes.equals(baseLectureBytes), "lecture bank must be byte-identical to base");

  const baseQuestions = loadQuestionsFromSource(
    execFileSync("git", ["show", `${BASE_COMMIT}:${baseBankPath}`], { cwd: REPO_ROOT, encoding: "utf8" })
  );
  const currentQuestions = loadQuestionsFromSource(
    fs.readFileSync(path.join(V2, "math-question-bank-v2-u08.js"), "utf8")
  );

  assert.equal(baseQuestions.length, 144);
  assert.equal(currentQuestions.length, 144);

  const baseIds = baseQuestions.map((q) => q.questionId);
  const currentIds = currentQuestions.map((q) => q.questionId);
  assert.equal(new Set(baseIds).size, 144);
  assert.equal(new Set(currentIds).size, 144);
  assert.equal(JSON.stringify(baseIds), JSON.stringify(currentIds), "question order");

  let changedRecords = 0;
  let changedFields = 0;

  for (let i = 0; i < 144; i++) {
    const base = baseQuestions[i];
    const current = currentQuestions[i];
    assert.equal(base.questionId, current.questionId);

    if (JSON.stringify(base) !== JSON.stringify(current)) {
      changedRecords++;
      const manifest = U08_QA2A_REQUIRED_QUESTIONS[base.questionId];
      assert.ok(manifest, `${base.questionId} missing from manifest`);
      changedFields += questionFieldDiff(base, current, manifest);
    } else {
      assert.ok(!U08_QA2A_REQUIRED_QUESTIONS[base.questionId], `${base.questionId} changed without manifest`);
    }
  }

  assert.equal(changedRecords, 16, "changed question records");
  assert.equal(changedFields, 28, "changed top-level fields");
  assert.ok(!currentBankBytes.equals(baseBankBytes), "question bank must differ from base");

  return { changedRecords, changedFields, manifestQuestions: MANIFEST_IDS.length };
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const counts = assertU08Qa2aQuestionDiff();
  console.log(
    `check-u08-qa2a-question-diff: OK — ${counts.changedRecords} records, ${counts.changedFields} fields, ${counts.manifestQuestions} manifest questions`
  );
}
