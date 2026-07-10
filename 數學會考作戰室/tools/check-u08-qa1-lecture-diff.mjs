#!/usr/bin/env node
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { U08_QA1_REQUIRED_LECTURES } from "./u08-qa1-lecture-manifest.mjs";

const BASE_COMMIT = "99a93c07460a40889850959426afe6557dab44a1";
const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const V2 = path.join(ROOT, "v2");
const REPO_ROOT = path.dirname(ROOT);

const MANIFEST_IDS = Object.keys(U08_QA1_REQUIRED_LECTURES).sort();

function gitShow(relativePath) {
  return execFileSync("git", ["show", `${BASE_COMMIT}:${relativePath}`], {
    cwd: REPO_ROOT,
    encoding: "utf8",
  });
}

function loadLecturesFromSource(source) {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(source, ctx, { filename: "lecture.js" });
  return ctx.window.MATH_LECTURE_V2_U08;
}

function lectureFieldDiff(base, current, skillId) {
  const changed = [];
  const keys = new Set([...Object.keys(base), ...Object.keys(current)]);
  for (const key of keys) {
    const a = JSON.stringify(base[key]);
    const b = JSON.stringify(current[key]);
    if (a !== b) changed.push(key);
  }
  if (changed.length !== 1 || changed[0] !== "examples") {
    throw new Error(`${skillId}: expected only examples to change, got ${changed.join(",")}`);
  }
}

export function assertU08Qa1LectureDiff() {
  assert.equal(MANIFEST_IDS.length, 12, "manifest skill count");

  const baseBankPath = "數學會考作戰室/v2/math-question-bank-v2-u08.js";
  const baseLecturePath = "數學會考作戰室/v2/math-lecture-v2-u08.js";
  const baseBankBytes = execFileSync("git", ["show", `${BASE_COMMIT}:${baseBankPath}`], {
    cwd: REPO_ROOT,
  });
  const currentBankBytes = fs.readFileSync(path.join(V2, "math-question-bank-v2-u08.js"));
  assert.ok(currentBankBytes.equals(baseBankBytes), "question bank must be byte-identical to base");

  const baseLectures = loadLecturesFromSource(gitShow(baseLecturePath));
  const currentLectures = loadLecturesFromSource(
    fs.readFileSync(path.join(V2, "math-lecture-v2-u08.js"), "utf8")
  );

  assert.equal(baseLectures.length, 12);
  assert.equal(currentLectures.length, 12);

  const baseSkillIds = baseLectures.map((l) => l.skillId);
  const currentSkillIds = currentLectures.map((l) => l.skillId);
  assert.equal(new Set(baseSkillIds).size, 12);
  assert.equal(new Set(currentSkillIds).size, 12);
  assert.equal(JSON.stringify(baseSkillIds), JSON.stringify(currentSkillIds), "lecture order");

  let changedLectures = 0;
  let changedFields = 0;

  for (let i = 0; i < 12; i++) {
    const base = baseLectures[i];
    const current = currentLectures[i];
    assert.equal(base.skillId, current.skillId);
    assert.ok(MANIFEST_IDS.includes(base.skillId), base.skillId);

    const before = JSON.stringify(base);
    const after = JSON.stringify(current);
    if (before !== after) {
      changedLectures++;
      lectureFieldDiff(base, current, base.skillId);
      changedFields++;
    }

    assert.equal(
      JSON.stringify(current.examples),
      JSON.stringify(U08_QA1_REQUIRED_LECTURES[base.skillId].examples),
      `${base.skillId} examples must match manifest`
    );
  }

  assert.equal(changedLectures, 12, "changed lecture records");
  assert.equal(changedFields, 12, "changed top-level fields");

  return { changedLectures, changedFields, manifestSkills: MANIFEST_IDS.length };
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const counts = assertU08Qa1LectureDiff();
  console.log(
    `check-u08-qa1-lecture-diff: OK — ${counts.changedLectures} lectures, ${counts.changedFields} fields, ${counts.manifestSkills} manifest skills`
  );
}
