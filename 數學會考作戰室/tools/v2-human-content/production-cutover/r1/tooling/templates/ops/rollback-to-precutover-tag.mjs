import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const repo = path.resolve(process.argv[2] || "");
if (!repo) throw new Error("Usage: node rollback-to-precutover-tag.mjs <repo>");
const tag = "math-v2-pre-human-cutover-r1";
const runGit = args => execFileSync("git", args, { cwd: repo, encoding: null });
const restore = relative => {
  const bytes = runGit(["show", `${tag}:${relative}`]);
  const target = path.join(repo, relative);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, bytes);
};
restore("數學會考作戰室/index.html");
restore("數學會考作戰室/math-bootstrap.js");
fs.rmSync(path.join(repo, "數學會考作戰室/human-runtime"), { recursive: true, force: true });
console.log(JSON.stringify({
  status: "RESTORED_PRE_CUTOVER_ROUTE_FROM_IMMUTABLE_TAG",
  tag,
  generatedV2DefaultRestored: true,
  oldDatabaseDeleted: false
}, null, 2));
