import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { parseArgs, assert, runGit, statusPaths } from "./lib/common.mjs";

const args = parseArgs(process.argv.slice(2));
assert(args.repo && args.root && args.archive, "Usage: --repo --root --archive");
const repo = path.resolve(args.repo), root = path.resolve(args.root), archive = path.resolve(args.archive);
const packageRoot = path.join(repo, "數學會考作戰室/tools/v2-human-content/production-cutover/r1/package");
const rollback = path.join(packageRoot, "ops/rollback-to-precutover-tag.mjs");
const result = spawnSync(process.execPath, [rollback, repo], { encoding: "utf8" });
if (result.status !== 0) throw new Error(`Rollback failed:\n${result.stderr}`);
if (fs.existsSync(root)) {
  fs.mkdirSync(path.dirname(archive), { recursive: true });
  fs.renameSync(root, archive);
}
const status = runGit(repo, ["status", "--short", "--untracked-files=all"]);
if (status) throw new Error(`Repository is not clean after abort rollback:\n${status}`);
console.log(JSON.stringify({
  status: "ABORTED_AND_RESTORED_PRECUTOVER_ROUTE",
  evidenceArchivedOutsideRepo: archive,
  repositoryClean: true,
  tagPreserved: true,
  oldDatabaseDeleted: false
}, null, 2));
