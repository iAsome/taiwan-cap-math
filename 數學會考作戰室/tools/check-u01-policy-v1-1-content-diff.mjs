#!/usr/bin/env node
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import vm from "node:vm";
import { U01_POLICY_V1_1_REQUIRED_QUESTIONS, U01_POLICY_V1_1_REQUIRED_LECTURES } from "./u01-policy-v1-1-content-manifest.mjs";

const BASE = "099b9c8b6592fe9c3e2223540fbf7995b267ab66";
const mathRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const repoRoot = path.dirname(mathRoot);
const qPath = "數學會考作戰室/v2/math-question-bank-v2-u01.js";
const lPath = "數學會考作戰室/v2/math-lecture-v2-u01.js";
const qAllowed = new Set(["explanation", "commonMistake"]);
const lAllowed = new Set(["concept", "stepGuide", "examples", "commonMistakes"]);

function baseBytes(repoPath) { return execFileSync("git", ["show", `${BASE}:${repoPath}`], { cwd: repoRoot, maxBuffer: 64 * 1024 * 1024 }); }
function load(source, key) { const c = { window: {} }; vm.runInNewContext(source.toString("utf8"), c); return c.window[key]; }
function current(repoPath, key) { return load(readFileSync(path.join(repoRoot, repoPath)), key); }
function base(repoPath, key) { return load(baseBytes(repoPath), key); }
function stable(value) { return JSON.stringify(value); }

function checkRecords(before, after, idField, manifest, allowed) {
  assert.equal(after.length, before.length); assert.equal(stable(after.map(x => x[idField])), stable(before.map(x => x[idField]))); assert.equal(new Set(after.map(x => x[idField])).size, after.length);
  let fields = 0, records = 0;
  for (let i = 0; i < after.length; i++) {
    const id = after[i][idField], changed = [...new Set([...Object.keys(before[i]), ...Object.keys(after[i])])].filter(field => stable(before[i][field]) !== stable(after[i][field]));
    const expected = Object.keys(manifest[id] ?? {});
    assert.deepEqual(changed.sort(), expected.sort(), `${id}: changed fields mismatch`);
    if (changed.length) records++;
    for (const field of changed) { assert(allowed.has(field), `${id}: unauthorized ${field}`); assert.equal(stable(after[i][field]), stable(manifest[id][field]), `${id}.${field}: manifest mismatch`); fields++; }
  }
  assert.equal(stable(Object.keys(manifest).sort()), stable(after.filter((_, i) => stable(before[i]) !== stable(after[i])).map(x => x[idField]).sort()));
  return { records, fields };
}

export function runContentDiffCheck() {
  const beforeQ = base(qPath, "MATH_QUESTION_BANK_V2_U01"), afterQ = current(qPath, "MATH_QUESTION_BANK_V2_U01");
  const beforeL = base(lPath, "MATH_LECTURE_V2_U01"), afterL = current(lPath, "MATH_LECTURE_V2_U01");
  assert.equal(afterQ.length, 60); assert.equal(afterL.length, 15);
  const questions = checkRecords(beforeQ, afterQ, "questionId", U01_POLICY_V1_1_REQUIRED_QUESTIONS, qAllowed);
  const lectures = checkRecords(beforeL, afterL, "skillId", U01_POLICY_V1_1_REQUIRED_LECTURES, lAllowed);
  assert.equal(questions.records, 50); assert.equal(questions.fields, 54); assert.equal(lectures.records, 15); assert.equal(lectures.fields, 60);
  assert.equal(Object.values(U01_POLICY_V1_1_REQUIRED_QUESTIONS).filter(x => "explanation" in x).length, 50);
  assert.equal(Object.values(U01_POLICY_V1_1_REQUIRED_QUESTIONS).filter(x => "commonMistake" in x).length, 4);
  for (const lecture of afterL) for (const example of lecture.examples) assert.deepEqual(Object.keys(example), ["prompt", "answer", "why"]);
  for (const uid of ["u02", "u03"]) for (const kind of ["question-bank", "lecture"]) { const p = `數學會考作戰室/v2/math-${kind}-v2-${uid}.js`; assert(readFileSync(path.join(repoRoot, p)).equals(baseBytes(p)), `${p} changed`); }
  for (const uid of ["u02", "u03"]) { const p = `數學會考作戰室/tools/v2-${uid}-pilot-source.mjs`; assert(readFileSync(path.join(repoRoot, p)).equals(baseBytes(p)), `${p} changed`); }
  return { questionRecords: 50, explanationChanges: 50, commonMistakeChanges: 4, lectureRecords: 15, lectureFieldChanges: 60 };
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  const r = runContentDiffCheck();
  console.log(`changed question records ${r.questionRecords}; explanation ${r.explanationChanges}; commonMistake ${r.commonMistakeChanges}; lecture records ${r.lectureRecords}; lecture fields ${r.lectureFieldChanges}`);
}
