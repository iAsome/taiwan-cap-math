#!/usr/bin/env node
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { U01_PILOT_UNIT, U01_RAW_QUESTIONS, U01_PILOT_CONTENT } from "../../v2-u01-pilot-source.mjs";
import { U02_PILOT_UNIT, U02_RAW_QUESTIONS, U02_PILOT_CONTENT } from "../../v2-u02-pilot-source.mjs";
import { U03_PILOT_UNIT, U03_RAW_QUESTIONS, U03_PILOT_CONTENT } from "../../v2-u03-pilot-source.mjs";
import { BASE, PHASE_OUTPUTS, runCheck, withDetachedWorktree } from "../../check-v2-pilot-unit-source-split.mjs";

const testDir = path.dirname(fileURLToPath(import.meta.url));
const toolsDir = path.resolve(testDir, "../..");
const repoRoot = path.resolve(toolsDir, "../..");
const units = [[U01_PILOT_UNIT, U01_RAW_QUESTIONS, U01_PILOT_CONTENT], [U02_PILOT_UNIT, U02_RAW_QUESTIONS, U02_PILOT_CONTENT], [U03_PILOT_UNIT, U03_RAW_QUESTIONS, U03_PILOT_CONTENT]];
const sets = units.map(([unit, raw, content]) => { const ids = unit.skills.map(x => x.skillId); assert.equal(ids.length, 15); for (const id of ids) { assert.equal(raw[id].length, 4); assert.equal(content[id].length, 4); } return new Set(ids); });
assert.equal(new Set([...sets[0], ...sets[1], ...sets[2]]).size, 45);

const engineText = readFileSync(path.join(toolsDir, "v2-pilot-engine.mjs"), "utf8");
for (const id of [...sets[0], ...sets[1], ...sets[2]]) assert.equal(engineText.includes(id), false);
for (const uid of ["u01", "u02", "u03"]) assert.equal(readFileSync(path.join(toolsDir, `v2-${uid}-pilot-source.mjs`), "utf8").match(/v2-u0[123]-pilot-source/g), null);

const before = readdirSync(process.cwd()).sort();
for (const file of ["v2-pilot-generators.mjs", "v2-pilot-content.mjs", "build-v2-u01.mjs", "build-v2-u02.mjs", "build-v2-u03.mjs"]) await import(new URL(`../../${file}`, import.meta.url));
assert.deepEqual(readdirSync(process.cwd()).sort(), before);

assert.deepEqual(runCheck(), { units: 3, skills: 45, outputs: 14 });
assert.deepEqual(runCheck(), { units: 3, skills: 45, outputs: 14 });

let successPath;
withDetachedWorktree(dir => { successPath = dir; assert(existsSync(dir)); });
assert.equal(existsSync(successPath), false);
let failurePath;
assert.throws(() => withDetachedWorktree(dir => { failurePath = dir; throw new Error("expected"); }), /expected/);
assert.equal(existsSync(failurePath), false);
const worktrees = execFileSync("git", ["worktree", "list", "--porcelain"], { cwd: repoRoot, encoding: "utf8" });
assert.equal(worktrees.includes("pilot-split-worktree-"), false);

for (const name of PHASE_OUTPUTS) {
  const current = readFileSync(path.resolve(toolsDir, "../v2", name));
  const base = execFileSync("git", ["show", `${BASE}:數學會考作戰室/v2/${name}`], { cwd: repoRoot });
  assert(current.equals(base), name);
}

console.log("pilot-unit-source-split.test.mjs: OK");
