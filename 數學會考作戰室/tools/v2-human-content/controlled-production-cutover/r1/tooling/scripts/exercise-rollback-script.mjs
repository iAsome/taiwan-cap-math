import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { parseArgs, readJson, writeJson, assert, runGitResult, runGit, fileHash } from "./lib/common.mjs";

const args = parseArgs(process.argv.slice(2));
assert(args.repo && args.root && args.scratch, "Usage: --repo --root --scratch");
const repo = path.resolve(args.repo), root = path.resolve(args.root), scratch = path.resolve(args.scratch);
const expected = readJson(path.join(root, "tooling/EXPECTED-RESULTS.json"));
assert(!fs.existsSync(scratch), "Rollback scratch already exists");

let added = runGitResult(repo, ["worktree", "add", "--detach", scratch, expected.requiredStartingHead]);
assert(added.status === 0, added.stderr);
try {
  const packageRoot = path.join(scratch, "數學會考作戰室/tools/v2-human-content/production-cutover/r1/package");
  const apply = path.join(packageRoot, "ops/apply-staged-cutover.mjs");
  const rollback = path.join(packageRoot, "ops/rollback-to-precutover-tag.mjs");
  let result = spawnSync(process.execPath, [apply, scratch, packageRoot], { encoding: "utf8" });
  assert(result.status === 0, `Apply in rollback scratch failed: ${result.stderr}`);
  const appliedLoader = fileHash(path.join(scratch, "數學會考作戰室/math-bootstrap.js"));
  assert(fs.existsSync(path.join(scratch, "數學會考作戰室/human-runtime")), "Human runtime not applied in rollback scratch");

  result = spawnSync(process.execPath, [rollback, scratch], { encoding: "utf8" });
  assert(result.status === 0, `Rollback script failed: ${result.stderr}`);
  runGit(scratch, ["restore", "--", "數學會考作戰室/index.html", "數學會考作戰室/math-bootstrap.js"]);
  const restoredLoader = fileHash(path.join(scratch, "數學會考作戰室/math-bootstrap.js"));
  assert(!fs.existsSync(path.join(scratch, "數學會考作戰室/human-runtime")), "Human runtime remains after rollback");
  assert(runGit(scratch, ["status", "--short", "--untracked-files=all"]) === "", "Rollback scratch not clean");

  const report = {
    status: "PASS_ACTUAL_ROLLBACK_SCRIPT_EXERCISE_R1",
    scratch,
    appliedLoaderSha256: appliedLoader,
    restoredLoaderSha256: restoredLoader,
    humanRuntimeRemoved: true,
    scratchClean: true,
    oldDatabaseDeletionAllowed: false
  };
  writeJson(path.join(root, "evidence/rollback-script-exercise.json"), report);
  console.log(JSON.stringify(report, null, 2));
} finally {
  runGitResult(repo, ["worktree", "remove", "--force", scratch]);
  runGitResult(repo, ["worktree", "prune"]);
  try { fs.rmSync(scratch, { recursive: true, force: true }); } catch {}
}
