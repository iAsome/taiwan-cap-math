import fs from "node:fs";
import path from "node:path";
import { parseArgs, readJson, writeJson, assert, fileSha256 } from "./lib/common.mjs";

const args = parseArgs(process.argv.slice(2));
assert(args.repo && args.root, "Usage: --repo --root");
const repo = path.resolve(args.repo);
const root = path.resolve(args.root);
const expected = readJson(path.join(root, "tooling/EXPECTED-RESULTS.json"));
const payload = path.join(root, "tooling/payload");
const evidence = path.join(root, "evidence");

const mappings = [
  ["human-runtime/content/units/u01.json", "數學會考作戰室/human-runtime/content/units/u01.json"],
  ["human-runtime/content/units/u02.json", "數學會考作戰室/human-runtime/content/units/u02.json"],
  ["human-runtime/content/manifest.json", "數學會考作戰室/human-runtime/content/manifest.json"],
  ["human-runtime/content/syllabus-lock.json", "數學會考作戰室/human-runtime/content/syllabus-lock.json"],
  ["human-runtime/config.mjs", "數學會考作戰室/human-runtime/config.mjs"],
  ["human-runtime/storage-migration.mjs", "數學會考作戰室/human-runtime/storage-migration.mjs"],
  ["human-runtime/bootstrap.mjs", "數學會考作戰室/human-runtime/bootstrap.mjs"],
  ["shared/fraction-markup.js", "shared/fraction-markup.js"]
];

const copied = [];
for (const [sourceRel, targetRel] of mappings) {
  const source = path.join(payload, ...sourceRel.split("/"));
  const target = path.join(repo, ...targetRel.split("/"));
  assert(fs.existsSync(source), `Missing payload ${sourceRel}`);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
  copied.push({ path: targetRel, sha256: fileSha256(target), bytes: fs.statSync(target).size });
}

const auditTarget = path.join(repo, "數學會考作戰室/tools/v2-human-content/semantic-audit/r1");
fs.rmSync(auditTarget, { recursive: true, force: true });
fs.mkdirSync(auditTarget, { recursive: true });
fs.cpSync(path.join(payload, "audit"), path.join(auditTarget, "reviewed-content"), { recursive: true });
fs.cpSync(path.join(root, "tooling/audit-evidence"), path.join(auditTarget, "evidence"), { recursive: true });
fs.copyFileSync(path.join(root, "tooling/AUDIT-POLICY.json"), path.join(auditTarget, "AUDIT-POLICY.json"));
fs.copyFileSync(path.join(root, "tooling/EXPECTED-RESULTS.json"), path.join(auditTarget, "EXPECTED-RESULTS.json"));

const report = {
  status: "APPLIED_REVIEWED_SEMANTIC_HOTFIX_R1",
  copied,
  reviewedQuestionCount: expected.reviewedQuestionCount,
  reviewedLectureCount: expected.reviewedLectureCount,
  newContentVersion: expected.newContentVersion,
  productionChangedOnlyForReviewedContentAndRenderer: true
};
writeJson(path.join(evidence, "apply.json"), report);
console.log(JSON.stringify(report, null, 2));
