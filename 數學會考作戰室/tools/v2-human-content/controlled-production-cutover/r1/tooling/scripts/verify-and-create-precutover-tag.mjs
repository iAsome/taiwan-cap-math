import fs from "node:fs";
import path from "node:path";
import { parseArgs, readJson, writeJson, assert, runGit, runGitResult } from "./lib/common.mjs";

const args = parseArgs(process.argv.slice(2));
assert(args.repo && args.output && args.tooling, "Usage: --repo --output --tooling");
const repo = path.resolve(args.repo), output = path.resolve(args.output), tooling = path.resolve(args.tooling);
const expected = readJson(path.join(tooling, "EXPECTED-RESULTS.json"));

assert(runGit(repo, ["branch", "--show-current"]) === "chatgpt/math-v2-human-authoring-r1", "Branch mismatch");
assert(runGit(repo, ["rev-parse", "HEAD"]) === expected.requiredStartingHead, "HEAD mismatch");
assert(runGit(repo, ["log", "-1", "--format=%s"]) === expected.requiredStartingSubject, "Subject mismatch");
assert(runGit(repo, ["status", "--short", "--untracked-files=all"]) === "", "Repository must be clean");
assert(runGit(repo, ["rev-parse", "origin/chatgpt/math-v2-human-authoring-r1"]) === expected.requiredStartingHead, "Remote branch mismatch");

const summaryPath = path.join(repo, "數學會考作戰室/tools/v2-human-content/production-cutover/r1/evidence/production-cutover-package-r1-summary.json");
const summary = readJson(summaryPath);
assert(summary.status === expected.requiredPackageStatus, "Cutover package status mismatch");
assert(summary.nextAuthorizedStage === expected.requiredPackageNextStage, "Cutover package next stage mismatch");
assert(summary.contentVersion === expected.contentVersion, "Content version mismatch");

const tag = expected.preCutoverTag;
const local = runGitResult(repo, ["rev-parse", `refs/tags/${tag}`]);
const remoteBefore = runGit(repo, ["ls-remote", "--tags", "origin", `refs/tags/${tag}`, `refs/tags/${tag}^{}`]);
assert(local.status !== 0, `Local tag already exists: ${tag}`);
assert(remoteBefore === "", `Remote tag already exists: ${tag}`);

runGit(repo, ["tag", "-a", tag, expected.requiredStartingHead, "-m", "Math V2 pre-Human Runtime production cutover R1"]);
runGit(repo, ["push", "origin", `refs/tags/${tag}`]);

const localCommit = runGit(repo, ["rev-list", "-n", "1", tag]);
const remote = runGit(repo, ["ls-remote", "--tags", "origin", `refs/tags/${tag}`, `refs/tags/${tag}^{}`]);
assert(localCommit === expected.requiredStartingHead, "Local tag target mismatch");
assert(remote.includes(expected.requiredStartingHead), "Remote peeled tag target mismatch");

const report = {
  status: "CREATED_AND_PUSHED_IMMUTABLE_PRECUTOVER_TAG_R1",
  tag,
  targetCommit: localCommit,
  remoteLines: remote.split(/\r?\n/).filter(Boolean),
  productionRouteChanged: false,
  oldDatabaseDeletionAllowed: false
};
writeJson(path.join(output, "precutover-tag-report.json"), report);
console.log(JSON.stringify(report, null, 2));
