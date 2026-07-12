import fs from "node:fs";
import path from "node:path";
import {
  assert, parseArgs, readJson, writeJson, runGit, runGitResult,
  currentHead, latestSubject, cleanStatus, fileHash
} from "./lib/common.mjs";

const args = parseArgs(process.argv.slice(2));
assert(args.repo && args.root && args.scratch, "Usage: --repo <repo> --root <root> --scratch <outside-repo-path>");
const repo = path.resolve(args.repo);
const root = path.resolve(args.root);
const scratch = path.resolve(args.scratch);
const tooling = path.join(root, "tooling");
const evidence = path.join(root, "evidence");
const expected = readJson(path.join(tooling, "EXPECTED-RESULTS.json"));

assert(currentHead(repo) === expected.requiredStartingHead, "Starting HEAD mismatch");
assert(latestSubject(repo) === expected.requiredStartingSubject, "Starting subject mismatch");
assert(cleanStatus(repo) === "", "Main repository is not clean before rehearsal preparation");
assert(!scratch.startsWith(repo + path.sep), "Scratch worktree must be outside the repository");
assert(!fs.existsSync(scratch), "Scratch path already exists");

const prior = readJson(path.join(repo, "數學會考作戰室/tools/v2-human-content/release-candidate/r1/evidence/human-runtime-rc-r1-summary.json"));
assert(prior.status === expected.requiredPriorStatus, "Prior RC status mismatch");
assert(prior.nextAuthorizedStage === expected.requiredPriorNextStage, "Prior next stage mismatch");
assert(prior.contentVersion === expected.contentVersion, "Prior content version mismatch");

const protectedPaths = [
  "數學會考作戰室/index.html",
  "數學會考作戰室/math-bootstrap.js",
  "數學會考作戰室/app.js",
  "數學會考作戰室/analysis-data.js",
  "數學會考作戰室/v2",
  "數學會考作戰室/tools/v2-content",
  "數學會考作戰室/data.js",
  "數學會考作戰室/questions.js",
  "數學會考作戰室/app-legacy.js",
  "數學會考作戰室/quiz-taxonomy.js",
  "數學會考作戰室/quiz-variant-bank.js",
  "數學會考作戰室/quiz-variants.js",
  "數學會考作戰室/lecture-taxonomy.js"
];

const baseline = protectedPaths.map(rel => {
  const file = path.join(repo, rel);
  if (!fs.existsSync(file)) return { path: rel, missing: true };
  const stat = fs.statSync(file);
  if (stat.isFile()) return { path: rel, type: "file", sha256: fileHash(file), bytes: stat.size };
  const result = runGit(repo, ["ls-files", "-s", "--", rel]);
  return { path: rel, type: "tracked-tree", gitIndexDigest: result };
});

fs.mkdirSync(evidence, { recursive: true });
writeJson(path.join(evidence, "protected-main-baseline.json"), {
  status: "RECORDED_MAIN_PROTECTED_BASELINE",
  head: expected.requiredStartingHead,
  protectedPaths: baseline
});

const added = runGitResult(repo, ["worktree", "add", "--detach", scratch, expected.requiredStartingHead]);
assert(added.status === 0, `git worktree add failed: ${added.stderr}`);
assert(currentHead(scratch) === expected.requiredStartingHead, "Scratch worktree HEAD mismatch");
assert(cleanStatus(scratch) === "", "Scratch worktree not clean after creation");

const originalLoader = path.join(scratch, "數學會考作戰室/math-bootstrap.js");
writeJson(path.join(evidence, "cutover-rehearsal-prepare.json"), {
  status: "PREPARED_DETACHED_CUTOVER_REHEARSAL_WORKTREE",
  mainRepo: repo,
  scratchWorktree: scratch,
  head: expected.requiredStartingHead,
  originalLoaderSha256: fileHash(originalLoader),
  productionRouteChanged: false,
  oldDatabaseDeletionAllowed: false
});

console.log(JSON.stringify({
  status: "PREPARED_DETACHED_CUTOVER_REHEARSAL_WORKTREE",
  scratchWorktree: scratch,
  head: expected.requiredStartingHead,
  originalLoaderSha256: fileHash(originalLoader),
  productionRouteChanged: false,
  oldDatabaseDeletionAllowed: false
}, null, 2));
