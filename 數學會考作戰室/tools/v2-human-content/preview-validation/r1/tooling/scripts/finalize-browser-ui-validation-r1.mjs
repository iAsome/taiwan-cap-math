import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { assert, collectFiles, fileRecord, parseArgs, readJson, repoRelative, runGit, treeDigest, writeJson } from "./lib/common.mjs";

const args = parseArgs(process.argv.slice(2));
assert(args.repo && args.root, "Usage: --repo <repo> --root <validation-root>");
const repo = path.resolve(args.repo);
const root = path.resolve(args.root);
const evidence = path.join(root, "evidence");
const applyReport = readJson(path.join(evidence, "browser-ui-apply-report.json"));
const browserReport = readJson(path.join(evidence, "browser-ui-validation.json"));

assert(applyReport.status === "APPLIED_CENTRAL_UI_REPAIRS_FOR_BROWSER_VALIDATION", "Apply report did not pass");
assert(browserReport.status === "PASS_HUMAN_PREVIEW_BROWSER_UI_VALIDATION", "Browser UI validation did not pass");
assert(browserReport.failed === 0 && browserReport.passed === browserReport.testCount, "Browser tests are not all passing");
assert(browserReport.counts.units === 23 && browserReport.counts.skills === 339, "Runtime count mismatch");
assert(browserReport.counts.mcQuestions === 4068 && browserReport.counts.constructedResponses === 678 && browserReport.counts.svgFigures === 178, "Content count mismatch");

const protectedPaths = [
  "數學會考作戰室/index.html",
  "數學會考作戰室/math-bootstrap.js",
  "數學會考作戰室/v2",
  "數學會考作戰室/tools/v2-content",
  "數學會考作戰室/tools/author-v2-production-content.mjs",
  "數學會考作戰室/tools/v2-human-content/batches",
  "數學會考作戰室/data.js",
  "數學會考作戰室/questions.js",
  "數學會考作戰室/app-legacy.js",
  "數學會考作戰室/quiz-taxonomy.js",
  "數學會考作戰室/quiz-variant-bank.js",
  "數學會考作戰室/quiz-variants.js",
  "數學會考作戰室/lecture-taxonomy.js"
];
const protectedAfter = treeDigest(repo, protectedPaths);
assert(JSON.stringify(protectedAfter) === JSON.stringify(applyReport.protectedBaseline), "A protected production, generated V2, V1, or human batch path changed");

const changed = execFileSync("git", ["-c", "core.quotepath=false", "-C", repo, "status", "--short", "--untracked-files=all"], { encoding: "utf8" })
  .split(/\r?\n/).filter(Boolean).map(line => line.slice(3).replace(/\\/g, "/"));
const allowedExact = new Set([
  "數學會考作戰室/human-preview/app.mjs",
  "數學會考作戰室/human-preview/styles.css"
]);
const allowedPrefix = "數學會考作戰室/tools/v2-human-content/preview-validation/r1/";
const invalid = changed.filter(file => !allowedExact.has(file) && !file.startsWith(allowedPrefix));
assert(invalid.length === 0, `Unexpected changed paths: ${invalid.join(", ")}`);

const indexText = fs.readFileSync(path.join(repo, "數學會考作戰室/index.html"), "utf8");
const loaderText = fs.readFileSync(path.join(repo, "數學會考作戰室/math-bootstrap.js"), "utf8");
assert(!indexText.includes("human-preview"), "Preview route was linked from main index");
assert(!loaderText.includes("human-preview"), "Preview route was added to production loader");
assert(loaderText.includes("v2/math-production-bootstrap.js") && loaderText.includes("legacy=1"), "Generated V2 default or V1 rollback marker missing");

const summary = {
  status: "PASS_HUMAN_PREVIEW_BROWSER_AND_UI_VALIDATION_R1",
  repairedDefectCount: applyReport.repairedDefects.length,
  repairedDefects: applyReport.repairedDefects,
  browserVersion: browserReport.browserVersion,
  browserTestCount: browserReport.testCount,
  browserTestsPassed: browserReport.passed,
  screenshotCount: browserReport.screenshots.length,
  counts: browserReport.counts,
  contentVersion: browserReport.contentVersion,
  protectedPathsUnchanged: true,
  defaultGeneratedV2Preserved: true,
  v1RollbackPreserved: true,
  defaultStudentRouteChanged: false,
  productionActivationAllowed: false,
  oldDatabaseDeletionAllowed: false,
  mergeAllowed: false,
  nextAuthorizedStage: "HUMAN_RUNTIME_RELEASE_CANDIDATE_R1",
  issues: []
};
writeJson(path.join(evidence, "browser-ui-validation-r1-summary.json"), summary);

const manifestPath = path.join(root, "browser-ui-validation-evidence-sha256.json");
const records = collectFiles(evidence).filter(file => file !== manifestPath).map(file => fileRecord(root, file));
records.push(fileRecord(repo, path.join(repo, "數學會考作戰室/human-preview/app.mjs")));
records.push(fileRecord(repo, path.join(repo, "數學會考作戰室/human-preview/styles.css")));
records.sort((a, b) => a.path.localeCompare(b.path));
writeJson(manifestPath, { schemaVersion: "math-v2-human-preview-browser-ui-validation-evidence-r1", files: records });
console.log(JSON.stringify(summary, null, 2));
