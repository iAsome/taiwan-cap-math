#!/usr/bin/env node
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
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
const oldHash = "6914efe327bc5cf70480b354c85a4f5a897e3f728b9fef687413ab97dfdfed1a";

const first = runAudit({ taskPath });
const second = runAudit({ taskPath });
assert.equal(first.json, second.json);
assert.equal(first.summary.policy.version, "1.1.0");
assert.equal(first.summary.policy.hash, "72384ef7b0a3ab549d676c8e9f4af044aa694807d1ee36d3b016d8a3ce13d271");
assert.notEqual(first.summary.policy.hash, oldHash);
assert.equal(first.summary.semanticDisclaimer, "Mechanical checks do not prove mathematical or pedagogical correctness; semantic acceptance remains owned by ChatGPT.");
assert.equal(first.summary.totals.targetedHumanReviewCount, first.summary.findings.requiresHumanReview.length);
assert(first.summary.totals.targetedHumanReviewCount < 1360);
assert.equal(first.summary.findings.requiresHumanReview.some(x => x.rule === "semantic-mathematics-review-required" || x.rule === "semantic-lecture-review-required"), false);
for (const scope of [...Object.keys(first.summary.inventory), "LEGACY", "UI"]) {
  assert(first.summary.findingsByScope[scope]);
  assert("mechanicalBySeverity" in first.summary.findingsByScope[scope]);
  assert("mechanicalByCategory" in first.summary.findingsByScope[scope]);
  assert("targetedHumanReviewCount" in first.summary.findingsByScope[scope]);
  assert("blockingMechanicalCount" in first.summary.findingsByScope[scope]);
  assert("blockingMechanicalByCategory" in first.summary.findingsByScope[scope]);
}
assert.equal(first.summary.totals.blockingMechanicalCount > 0, true);
assert.equal(first.summary.totals.blockingMechanicalByCategory.lecture > 0, true);

const mechanical = first.summary.findings.mechanical;
const targeted = first.summary.findings.requiresHumanReview;
const ruleCount = rule => mechanical.filter(x => x.rule === rule).length;
assert.equal(ruleCount("spaced-chinese-unit"), 0);
assert.equal(ruleCount("mixed-unit-dimensions"), 0);
assert.equal(mechanical.some(x => x.rule === "prohibited-token" && x.evidence === "组"), false);
assert.equal(targeted.filter(x => x.unit === "U10" && x.rule === "mixed-unit-dimensions-review").length, 0);
assert.equal(targeted.filter(x => x.unit === "U08" && x.rule === "mixed-unit-dimensions-review").length, 2);
for (const unit of ["U01", "U02", "U03"]) assert(mechanical.some(x => x.unit === unit && x.rule === "lecture-concept-min"), `${unit} lecture depth missing`);
assert(mechanical.some(x => x.unit === "U07" && x.rule === "lecture-example-why-min"), "U07 short example why missing");
for (const unit of ["U08", "U10"]) assert.equal(mechanical.some(x => x.unit === unit && x.rule === "prohibited-unit"), false, `${unit} prohibited Taiwan unit wording`);
assert.equal(mechanical.filter(x => x.rule === "machine-residue").every(x => x.severity === "MEDIUM"), true);
assert.equal(mechanical.filter(x => x.rule === "duplicate-explanation-sentence").every(x => x.severity === "MEDIUM"), true);
assert(mechanical.some(x => x.rule === "legacy-lecture-example-schema"));

const oldAgents = execFileSync("git", ["show", `${startSha}:AGENTS.md`], { cwd: repoRoot });
const newAgents = readFileSync(path.join(repoRoot, "AGENTS.md"));
assert(newAgents.subarray(0, oldAgents.length).equals(oldAgents), "starting AGENTS.md is not a byte-identical prefix");
assert.equal(newAgents.subarray(oldAgents.length).toString("utf8"), exactAgentsAppend);
assert.equal((newAgents.toString("utf8").match(/## Mathematics Content Authority/g) ?? []).length, 1);

const tmp = mkdtempSync(path.join(os.tmpdir(), "math-global-audit-"));
try {
  const stdout = execFileSync(process.execPath, [runnerPath, "--task", taskPath], { cwd: tmp, encoding: "utf8", maxBuffer: 128 * 1024 * 1024 });
  assert.equal((stdout.match(/Mechanical checks do not prove mathematical or pedagogical correctness/g) ?? []).length, 1);
  assert(stdout.includes("Blocking mechanical findings:"));
  assert.deepEqual(readdirSync(tmp), [], "runner wrote a default file");
  const output = path.join(tmp, "audit.json");
  execFileSync(process.execPath, [runnerPath, "--task", taskPath, "--output", output], { cwd: tmp, encoding: "utf8", maxBuffer: 128 * 1024 * 1024 });
  assert.deepEqual(readdirSync(tmp), ["audit.json"]);
  assert.equal(readFileSync(output, "utf8"), first.json);
  assert(existsSync(output));
  const auditHash = createHash("sha256").update(stdout, "utf8").digest("hex");
  const auditHash2 = createHash("sha256").update(execFileSync(process.execPath, [runnerPath, "--task", taskPath], { cwd: tmp, encoding: "utf8", maxBuffer: 128 * 1024 * 1024 }), "utf8").digest("hex");
  assert.equal(auditHash, auditHash2);
} finally { rmSync(tmp, { recursive: true, force: true }); }

const imported = execFileSync(process.execPath, ["--input-type=module", "-e", `await import(${JSON.stringify(new URL("../runner/audit-all-math-units.mjs", import.meta.url).href)})`], { encoding: "utf8" });
assert.equal(imported.length, 0, "runner import has output side effects");

console.log("global-audit.test.mjs: OK");
