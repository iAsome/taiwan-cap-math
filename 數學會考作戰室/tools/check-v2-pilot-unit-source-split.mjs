#!/usr/bin/env node
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, readdirSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import vm from "node:vm";
import { U01_PILOT_UNIT, U01_SKILL_META, U01_RAW_QUESTIONS, U01_PILOT_CONTENT } from "./v2-u01-pilot-source.mjs";
import { U02_PILOT_UNIT, U02_SKILL_META, U02_RAW_QUESTIONS, U02_PILOT_CONTENT } from "./v2-u02-pilot-source.mjs";
import { U03_PILOT_UNIT, U03_SKILL_META, U03_RAW_QUESTIONS, U03_PILOT_CONTENT } from "./v2-u03-pilot-source.mjs";
import { PILOT_CONTENT } from "./v2-pilot-content.mjs";
import { buildAllPilotContent } from "./v2-pilot-generators.mjs";
import { buildU01 } from "./build-v2-u01.mjs";
import { buildU02 } from "./build-v2-u02.mjs";
import { buildU03 } from "./build-v2-u03.mjs";

export const BASE = "b562c63719a2e8aaadf6f398d2e362d4277efc88";
const toolsDir = path.dirname(fileURLToPath(import.meta.url));
const mathRoot = path.dirname(toolsDir);
const repoRoot = path.dirname(mathRoot);
export const PHASE_OUTPUTS = [
  "math-syllabus-v2.js", "math-migration-invalid-legacy-refs.json",
  "math-question-bank-v2-u01.js", "math-lecture-v2-u01.js",
  "math-question-bank-v2-u02.js", "math-lecture-v2-u02.js",
  "math-question-bank-v2-u03.js", "math-lecture-v2-u03.js",
  "math-question-bank-v2-u04.js", "math-lecture-v2-u04.js",
  "math-question-bank-v2-u05.js", "math-lecture-v2-u05.js",
  "math-migration-map.js", "math-syllabus-v2-gap-report.md"
];

function gitBytes(repoPath) {
  return execFileSync("git", ["show", `${BASE}:${repoPath}`], { cwd: repoRoot, maxBuffer: 64 * 1024 * 1024 });
}

function loadBank(name, globalName) {
  const context = { window: {} };
  vm.runInNewContext(gitBytes(`數學會考作戰室/v2/${name}`).toString("utf8"), context);
  return context.window[globalName];
}

function loadBaseContent() {
  const source = gitBytes("數學會考作戰室/tools/v2-pilot-content.mjs").toString("utf8").replace("export const PILOT_CONTENT", "const PILOT_CONTENT") + "\nglobalThis.out=PILOT_CONTENT;";
  const context = {};
  vm.runInNewContext(source, context);
  return context.out;
}

function keys(value) { return Object.keys(value); }
function assertJsonEqual(actual, expected) { assert.equal(JSON.stringify(actual), JSON.stringify(expected)); }
function assertUnit(unit, meta, raw, content, expectedPrefix) {
  const ids = unit.skills.map(skill => skill.skillId);
  assert.equal(ids.length, 15);
  assert.equal(new Set(ids).size, 15);
  assert.deepEqual(keys(meta), ids); assert.deepEqual(keys(raw), ids); assert.deepEqual(keys(content), ids);
  for (const id of ids) {
    assert(id.startsWith(expectedPrefix) || expectedPrefix === "integer-");
    assert.equal(raw[id].length, 4); assert.equal(content[id].length, 4);
  }
  return ids;
}

export function withDetachedWorktree(callback) {
  const dir = mkdtempSync(path.join(os.tmpdir(), "pilot-split-worktree-"));
  rmSync(dir, { recursive: true, force: true });
  try {
    execFileSync("git", ["-c", "core.autocrlf=false", "worktree", "add", "--detach", dir, BASE], { cwd: repoRoot, stdio: "ignore" });
    return callback(dir);
  } finally {
    try { execFileSync("git", ["worktree", "remove", "--force", dir], { cwd: repoRoot, stdio: "ignore" }); } catch {}
    execFileSync("git", ["worktree", "prune"], { cwd: repoRoot, stdio: "ignore" });
    rmSync(dir, { recursive: true, force: true });
  }
}

function assertBuilder(builder, uid, U) {
  const dir = mkdtempSync(path.join(os.tmpdir(), `pilot-${uid}-`));
  try {
    const result = builder({ v2Dir: dir });
    assert.deepEqual(result, { questions: 60, lectures: 15 });
    assert.deepEqual(readdirSync(dir).sort(), [`math-lecture-v2-${uid}.js`, `math-question-bank-v2-${uid}.js`]);
    for (const kind of ["question-bank", "lecture"]) {
      const name = `math-${kind}-v2-${uid}.js`;
      assert(readFileSync(path.join(dir, name)).equals(gitBytes(`數學會考作戰室/v2/${name}`)), `${name} differs from base`);
    }
  } finally { rmSync(dir, { recursive: true, force: true }); }
  void U;
}

export function runCheck() {
  const sets = [
    assertUnit(U01_PILOT_UNIT, U01_SKILL_META, U01_RAW_QUESTIONS, U01_PILOT_CONTENT, "integer-"),
    assertUnit(U02_PILOT_UNIT, U02_SKILL_META, U02_RAW_QUESTIONS, U02_PILOT_CONTENT, "fraction-"),
    assertUnit(U03_PILOT_UNIT, U03_SKILL_META, U03_RAW_QUESTIONS, U03_PILOT_CONTENT, "linear-")
  ];
  assert.equal(new Set(sets.flat()).size, 45);
  assertJsonEqual(PILOT_CONTENT, loadBaseContent());
  const built = buildAllPilotContent();
  for (const uid of ["u01", "u02", "u03"]) {
    const U = uid.toUpperCase();
    assertJsonEqual(built.questionsByUnit[uid], loadBank(`math-question-bank-v2-${uid}.js`, `MATH_QUESTION_BANK_V2_${U}`));
    assertJsonEqual(built.lecturesByUnit[uid], loadBank(`math-lecture-v2-${uid}.js`, `MATH_LECTURE_V2_${U}`));
  }
  assertBuilder(buildU01, "u01", "U01"); assertBuilder(buildU02, "u02", "U02"); assertBuilder(buildU03, "u03", "U03");
  for (const name of PHASE_OUTPUTS) assert(readFileSync(path.join(mathRoot, "v2", name)).equals(gitBytes(`數學會考作戰室/v2/${name}`)), `${name} differs from base`);
  return { units: 3, skills: 45, outputs: PHASE_OUTPUTS.length };
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  runCheck();
  console.log("check-v2-pilot-unit-source-split: OK — 3 units, 45 skills, outputs byte-identical");
}
