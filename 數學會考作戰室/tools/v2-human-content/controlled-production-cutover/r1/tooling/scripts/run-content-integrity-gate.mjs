import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { parseArgs, readJson, writeJson, assert } from "./lib/common.mjs";

const args = parseArgs(process.argv.slice(2));
assert(args.repo && args.root, "Usage: --repo --root");
const repo = path.resolve(args.repo), root = path.resolve(args.root);
const output = path.join(root, "evidence/content-integrity");
fs.mkdirSync(output, { recursive: true });

function run(script, extra = []) {
  const result = spawnSync(process.execPath, [script, "--repo", repo, "--output", output, ...extra], { encoding: "utf8" });
  if (result.status !== 0) throw new Error(`${path.basename(script)} failed\nSTDOUT:\n${result.stdout}\nSTDERR:\n${result.stderr}`);
  return { stdout: result.stdout, stderr: result.stderr };
}
const readinessTools = path.join(repo, "數學會考作戰室/tools/v2-human-content/global-readiness/r1/tooling/scripts");
const batchRun = run(path.join(readinessTools, "run-batch-verifiers-r2.mjs"));
const auditRun = run(path.join(readinessTools, "run-global-audit-r2.mjs"));

const matrix = readJson(path.join(output, "batch-verifier-matrix-r2.json"));
const audit = readJson(path.join(output, "global-audit-r2-validation.json"));
assert(matrix.status === "PASS" && matrix.passed === 24 && matrix.failed === 0, "24-batch matrix failed");
assert(audit.status === "PASS_GLOBAL_AUDIT_R2", "Global Audit R2 failed");
assert(audit.unresolvedDuplicateGroups === 0, "Unresolved duplicate groups found");

const report = {
  status: "PASS_POST_CUTOVER_CONTENT_INTEGRITY_R1",
  batchCount: matrix.batchCount,
  batchPassed: matrix.passed,
  globalAuditR2: audit.status,
  counts: audit.counts,
  unresolvedDuplicateGroups: audit.unresolvedDuplicateGroups,
  productionActivated: true,
  oldDatabaseDeletionAllowed: false,
  console: { batch: batchRun.stdout.trim(), audit: auditRun.stdout.trim() }
};
writeJson(path.join(root, "evidence/post-cutover-content-integrity.json"), report);
console.log(JSON.stringify(report, null, 2));
