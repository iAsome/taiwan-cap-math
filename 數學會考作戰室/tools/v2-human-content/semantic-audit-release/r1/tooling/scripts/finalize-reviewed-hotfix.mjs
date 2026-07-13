import fs from "node:fs";
import path from "node:path";
import { parseArgs, readJson, writeJson, assert, runGit, collectFiles, normalize, sha256 } from "./lib/common.mjs";

const args = parseArgs(process.argv.slice(2));
assert(args.repo && args.root, "Usage: --repo --root");
const repo = path.resolve(args.repo);
const root = path.resolve(args.root);
const expected = readJson(path.join(root, "tooling/EXPECTED-RESULTS.json"));
const evidence = path.join(root, "evidence");

for (const [file, status] of [
  ["baseline.json", "PASS_REVIEWED_HOTFIX_BASELINE_R1"],
  ["apply.json", "APPLIED_REVIEWED_SEMANTIC_HOTFIX_R1"],
  ["ledger-hotfix.json", "PASS_HOTFIX_AUDIT_LEDGER_R1"],
  ["node-gate.json", "PASS_REVIEWED_CONTENT_NODE_GATE_R1"],
  ["browser-gate.json", "PASS_REVIEWED_SEMANTIC_HOTFIX_BROWSER_R1"]
]) {
  assert(readJson(path.join(evidence, file)).status === status, `${file} did not pass`);
}

assert(runGit(repo, ["rev-parse", "HEAD"]) === expected.requiredMainHead, "HEAD changed before approved commit");
const status = runGit(repo, ["status", "--short", "--untracked-files=all"]);
const changed = status.split(/\r?\n/).filter(Boolean).map(line => line.replace(/^..\s*/, "").replaceAll("\\", "/"));
const allowed = [
  "shared/fraction-markup.js",
  "數學會考作戰室/human-runtime/content/units/u01.json",
  "數學會考作戰室/human-runtime/content/units/u02.json",
  "數學會考作戰室/human-runtime/content/manifest.json",
  "數學會考作戰室/human-runtime/content/syllabus-lock.json",
  "數學會考作戰室/human-runtime/config.mjs",
  "數學會考作戰室/human-runtime/storage-migration.mjs",
  "數學會考作戰室/human-runtime/bootstrap.mjs",
  "數學會考作戰室/human-runtime/release-blueprint-r1.json",
  "數學會考作戰室/tools/v2-human-content/semantic-audit/r1/",
  "數學會考作戰室/tools/v2-human-content/semantic-audit-release/r1/"
];
for (const item of changed) assert(allowed.some(prefix => item === prefix || item.startsWith(prefix)), `Unexpected changed path: ${item}`);

const summary = {
  status: expected.hotfixFinalStatus,
  oldContentVersion: expected.oldContentVersion,
  newContentVersion: expected.newContentVersion,
  reviewedQuestionCount: expected.reviewedQuestionCount,
  reviewedLectureCount: expected.reviewedLectureCount,
  pendingManualQuestionCount: expected.pendingQuestionCountAfterHotfix,
  safeRendererInstalled: true,
  existingHumanPaperHistoryArchivedOnVersionChange: true,
  fullSemanticAuditComplete: false,
  fullReleaseAuthorized: false,
  expectedCommitSubject: expected.commitSubject,
  changedPaths: changed,
  issues: []
};
writeJson(path.join(evidence, "reviewed-hotfix-summary.json"), summary);

const files = collectFiles(root).filter(file => !file.endsWith("reviewed-hotfix-evidence-sha256.json"));
writeJson(path.join(root, "reviewed-hotfix-evidence-sha256.json"), {
  schemaVersion: "math-v2-reviewed-hotfix-evidence-r1",
  files: files.map(file => {
    const bytes = fs.readFileSync(file);
    return { path: normalize(path.relative(root, file)), bytes: bytes.length, sha256: sha256(bytes) };
  })
});
console.log(JSON.stringify(summary, null, 2));
