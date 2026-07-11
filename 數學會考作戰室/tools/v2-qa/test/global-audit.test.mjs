#!/usr/bin/env node
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { runAudit } from "../runner/audit-all-math-units.mjs";
import { exactAgentsAppend } from "./policy-fixtures.mjs";

const testDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(testDir, "../../../../");
const taskPath = path.resolve(testDir, "../tasks/MATH-V2-GLOBAL-RETRO-AUDIT.json");
const runnerPath = path.resolve(testDir, "../runner/audit-all-math-units.mjs");
const startSha = "4bdfccf97b35d768224acb79859699143305fee0";

const first = runAudit({ taskPath });
const second = runAudit({ taskPath });
assert.equal(first.json, second.json);
assert.equal(first.summary.policy.hash, "6914efe327bc5cf70480b354c85a4f5a897e3f728b9fef687413ab97dfdfed1a");
assert.equal(first.summary.semanticDisclaimer, "Mechanical checks do not prove mathematical or pedagogical correctness; semantic acceptance remains owned by ChatGPT.");
assert.equal(first.summary.totals.targetedHumanReviewCount, first.summary.findings.requiresHumanReview.length);
assert(first.summary.totals.targetedHumanReviewCount < 1360);
assert.equal(first.summary.findings.requiresHumanReview.some(x => x.rule === "semantic-mathematics-review-required" || x.rule === "semantic-lecture-review-required"), false);
for (const scope of [...Object.keys(first.summary.inventory), "LEGACY", "UI"]) {
  assert(first.summary.findingsByScope[scope]);
  assert("mechanicalBySeverity" in first.summary.findingsByScope[scope]);
  assert("mechanicalByCategory" in first.summary.findingsByScope[scope]);
  assert("targetedHumanReviewCount" in first.summary.findingsByScope[scope]);
}

const mechanical = first.summary.findings.mechanical;
assert(mechanical.some(x => x.path.endsWith("quiz-taxonomy.js") && x.rule === "prohibited-token" && x.evidence === "组"), "U09 legacy 那一组 issue not detected");
for (const unit of ["U01", "U02", "U03"]) assert(mechanical.some(x => x.unit === unit && x.rule === "lecture-concept-min"), `${unit} lecture depth missing`);
assert(mechanical.some(x => x.unit === "U07" && x.rule === "lecture-example-why-min"), "U07 short example why missing");
for (const unit of ["U08", "U10"]) assert.equal(mechanical.some(x => x.unit === unit && x.rule === "prohibited-unit"), false, `${unit} prohibited Taiwan unit wording`);

const oldAgents = execFileSync("git", ["show", `${startSha}:AGENTS.md`], { cwd: repoRoot });
const newAgents = readFileSync(path.join(repoRoot, "AGENTS.md"));
assert(newAgents.subarray(0, oldAgents.length).equals(oldAgents), "starting AGENTS.md is not a byte-identical prefix");
assert.equal(newAgents.subarray(oldAgents.length).toString("utf8"), exactAgentsAppend);
assert.equal((newAgents.toString("utf8").match(/## Mathematics Content Authority/g) ?? []).length, 1);

const tmp = mkdtempSync(path.join(os.tmpdir(), "math-global-audit-"));
try {
  const stdout = execFileSync(process.execPath, [runnerPath, "--task", taskPath], { cwd: tmp, encoding: "utf8", maxBuffer: 128 * 1024 * 1024 });
  assert.equal((stdout.match(/Mechanical checks do not prove mathematical or pedagogical correctness/g) ?? []).length, 1);
  assert.deepEqual(readdirSync(tmp), [], "runner wrote a default file");
  const output = path.join(tmp, "audit.json");
  execFileSync(process.execPath, [runnerPath, "--task", taskPath, "--output", output], { cwd: tmp, encoding: "utf8", maxBuffer: 128 * 1024 * 1024 });
  assert.deepEqual(readdirSync(tmp), ["audit.json"]);
  assert.equal(readFileSync(output, "utf8"), first.json);
  assert(existsSync(output));
} finally { rmSync(tmp, { recursive: true, force: true }); }

const imported = execFileSync(process.execPath, ["--input-type=module", "-e", `await import(${JSON.stringify(new URL("../runner/audit-all-math-units.mjs", import.meta.url).href)})`], { encoding: "utf8" });
assert.equal(imported.length, 0, "runner import has output side effects");

console.log("global-audit.test.mjs: OK");
