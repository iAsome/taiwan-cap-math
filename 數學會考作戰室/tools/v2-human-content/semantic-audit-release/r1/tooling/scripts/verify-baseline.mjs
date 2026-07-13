import fs from "node:fs";
import path from "node:path";
import { parseArgs, readJson, writeJson, assert, runGit, fileSha256 } from "./lib/common.mjs";

const args = parseArgs(process.argv.slice(2));
assert(args.repo && args.root, "Usage: --repo --root");
const repo = path.resolve(args.repo);
const root = path.resolve(args.root);
const expected = readJson(path.join(root, "tooling/EXPECTED-RESULTS.json"));
const evidence = path.join(root, "evidence");

assert(runGit(repo, ["branch", "--show-current"]) === expected.hotfixBranch, "Hotfix branch mismatch");
assert(runGit(repo, ["rev-parse", "HEAD"]) === expected.requiredMainHead, "Hotfix branch must start at required main HEAD");
assert(runGit(repo, ["rev-parse", "origin/main"]) === expected.requiredMainHead, "origin/main mismatch");

const status = runGit(repo, ["status", "--short", "--untracked-files=all"]);
const unexpected = status.split(/\r?\n/).filter(Boolean).filter(line => {
  const item = line.replace(/^..\s*/, "").replaceAll("\\", "/");
  return !item.startsWith("數學會考作戰室/tools/v2-human-content/semantic-audit-release/r1/");
});
assert(unexpected.length === 0, `Unexpected working-tree changes: ${unexpected.join(", ")}`);

for (const [relative, requiredHash] of Object.entries(expected.baselineSha256)) {
  const file = path.join(repo, ...relative.split("/"));
  assert(fs.existsSync(file), `Missing baseline file: ${relative}`);
  const actual = fileSha256(file);
  assert(actual === requiredHash, `Baseline SHA-256 mismatch for ${relative}: ${actual}`);
}
const rendererBlob = runGit(repo, ["hash-object", "--", "shared/fraction-markup.js"]);
assert(rendererBlob === expected.baselineFractionRendererGitBlob, `Renderer baseline blob mismatch: ${rendererBlob}`);

const report = {
  status: "PASS_REVIEWED_HOTFIX_BASELINE_R1",
  branch: expected.hotfixBranch,
  head: expected.requiredMainHead,
  baselineFilesVerified: Object.keys(expected.baselineSha256).length,
  rendererBlob,
  originalDirtyWorktreeNotUsed: true
};
writeJson(path.join(evidence, "baseline.json"), report);
console.log(JSON.stringify(report, null, 2));
