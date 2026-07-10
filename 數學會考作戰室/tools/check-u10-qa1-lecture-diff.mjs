#!/usr/bin/env node
/** U10-QA1: assert lecture diff matches manifest against fixed base commit. */
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { U10_QA1_REQUIRED_LECTURES } from "./u10-qa1-lecture-manifest.mjs";

const BASE = "30e6260bbc4189770ce548e10935015a24af9b3d";
const tools = path.dirname(fileURLToPath(import.meta.url));
const root = path.dirname(tools);
const v2 = path.join(root, "v2");
const REPO = path.join(root, "..");

const ALLOWED_FIELDS = new Set(["examples", "concept", "title"]);
const MANIFEST = U10_QA1_REQUIRED_LECTURES;

function gitShow(repoPath) {
  return execFileSync("git", ["show", `${BASE}:${repoPath}`], {
    cwd: REPO,
    encoding: "utf8",
  });
}

function loadLecturesFromSource(source) {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(source, ctx, { filename: "lecture.js" });
  return ctx.window.MATH_LECTURE_V2_U10;
}

function loadCurrentLectures() {
  const src = fs.readFileSync(path.join(v2, "math-lecture-v2-u10.js"), "utf8");
  return loadLecturesFromSource(src);
}

function loadBaseLectures() {
  const src = gitShow("數學會考作戰室/v2/math-lecture-v2-u10.js");
  return loadLecturesFromSource(src);
}

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function assertContentEqual(actual, expected, label) {
  assert.equal(JSON.stringify(actual), JSON.stringify(expected), label);
}

export function assertU10Qa1LectureDiff() {
  const base = loadBaseLectures();
  const current = loadCurrentLectures();
  assert.equal(base.length, 12, "base lecture count");
  assert.equal(current.length, 12, "current lecture count");

  const baseSkills = base.map((l) => l.skillId);
  const curSkills = current.map((l) => l.skillId);
  assert.equal(JSON.stringify(curSkills), JSON.stringify(baseSkills), "lecture order/skillIds preserved");
  assert.equal(new Set(curSkills).size, 12, "unique skillIds");

  const manifestSkills = Object.keys(MANIFEST).sort();
  assert.equal(manifestSkills.length, 12, "manifest skill count");

  let changedRecords = 0;
  let changedFields = 0;

  for (let i = 0; i < base.length; i++) {
    const b = base[i];
    const c = current[i];
    const patch = MANIFEST[c.skillId];
    assert.ok(patch, `manifest missing ${c.skillId}`);

    const recordChanged = !deepEqual(b, c);
    if (recordChanged) changedRecords++;

    for (const key of Object.keys(b)) {
      const same = deepEqual(b[key], c[key]);
      if (same) continue;

      if (key === "examples") {
        assertContentEqual(c.examples, patch.examples, `${c.skillId} examples`);
        changedFields++;
        continue;
      }
      if (key === "concept" && c.skillId === "polynomial-evaluation") {
        assert.equal(c.concept, patch.concept, `${c.skillId} concept`);
        changedFields++;
        continue;
      }
      if (key === "title" && c.skillId === "monomial-polynomial-distribute") {
        assert.equal(c.title, patch.title, `${c.skillId} title`);
        changedFields++;
        continue;
      }

      assert.fail(`${c.skillId}.${key} changed but not allowed`);
    }

    for (const key of Object.keys(c)) {
      if (key in b) continue;
      if (key === "title" && c.skillId === "monomial-polynomial-distribute") {
        assert.equal(c.title, patch.title, `${c.skillId} title`);
        changedFields++;
        continue;
      }
      assert.fail(`${c.skillId} added field ${key}`);
    }

    for (const [key, val] of Object.entries(patch)) {
      assertContentEqual(c[key], val, `${c.skillId} manifest field ${key}`);
    }
  }

  assert.equal(changedRecords, 12, "changed lecture records");
  assert.equal(changedFields, 14, "changed top-level fields");

  return { changedRecords, changedFields };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { changedRecords, changedFields } = assertU10Qa1LectureDiff();
  console.log("check-u10-qa1-lecture-diff: OK");
  console.log(`  changedRecords: ${changedRecords}`);
  console.log(`  changedFields: ${changedFields}`);
}
