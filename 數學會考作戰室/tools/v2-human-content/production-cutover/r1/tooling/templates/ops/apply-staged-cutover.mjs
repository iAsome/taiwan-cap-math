import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import crypto from "node:crypto";

const [repoArg, packageArg] = process.argv.slice(2);
if (!repoArg || !packageArg) throw new Error("Usage: node apply-staged-cutover.mjs <repo> <package-root>");
const repo = path.resolve(repoArg);
const packageRoot = path.resolve(packageArg);
const tag = "math-v2-pre-human-cutover-r1";
const runGit = args => execFileSync("git", args, { cwd: repo, encoding: "utf8" }).trim();
if (runGit(["status", "--short", "--untracked-files=all"])) throw new Error("Repository must be clean");
try { runGit(["rev-parse", `refs/tags/${tag}`]); } catch { throw new Error(`Required immutable tag is missing: ${tag}`); }

const copyFile = (from, to) => {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
};
copyFile(path.join(packageRoot, "payload/index.html"), path.join(repo, "數學會考作戰室/index.html"));
copyFile(path.join(packageRoot, "payload/math-bootstrap.js"), path.join(repo, "數學會考作戰室/math-bootstrap.js"));
fs.rmSync(path.join(repo, "數學會考作戰室/human-runtime"), { recursive: true, force: true });
fs.cpSync(path.join(packageRoot, "payload/human-runtime"), path.join(repo, "數學會考作戰室/human-runtime"), { recursive: true });
console.log(JSON.stringify({
  status: "APPLIED_STAGED_HUMAN_PRODUCTION_CUTOVER",
  tag,
  productionRouteChanged: true,
  oldDatabaseDeleted: false
}, null, 2));
