import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { assert, gitBlobSha, parseArgs, readJson, repoRelative, runGit, sha256, treeDigest, writeJson } from "./lib/common.mjs";

const args = parseArgs(process.argv.slice(2));
assert(args.repo && args.root, "Usage: --repo <repo> --root <validation-root>");
const repo = path.resolve(args.repo);
const root = path.resolve(args.root);
const tooling = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const evidence = path.join(root, "evidence");
fs.mkdirSync(evidence, { recursive: true });

const expectedHead = "ab534ad2c6dbfddad424cdf624e7fff7cc068d8b";
const expectedContentVersion = "d402487b40bca04f3278b231262abfb3aa7fd1d1448454e877ff8c76af25082f";
assert(runGit(repo, ["branch", "--show-current"]) === "chatgpt/math-v2-human-authoring-r1", "Wrong branch");
assert(runGit(repo, ["rev-parse", "HEAD"]) === expectedHead, "Unexpected starting HEAD");
assert(runGit(repo, ["status", "--short", "--untracked-files=all"]) === "", "Working tree is not clean");

const readiness = readJson(path.join(repo, "數學會考作戰室/tools/v2-human-content/global-readiness/r1/evidence/readiness-gate-r1-summary.json"));
const previewSummary = readJson(path.join(repo, "數學會考作戰室/tools/v2-human-content/preview-integration/r1/evidence/preview-integration-r1-summary.json"));
assert(readiness.status === "PASS_READINESS_GATE_R1", "Readiness Gate R1 did not pass");
assert(previewSummary.status === "PASS_HUMAN_RUNTIME_PREVIEW_INTEGRATION_R1", "Preview Integration R1 did not pass");
assert(previewSummary.contentVersion === expectedContentVersion, "Preview content version mismatch");
assert(previewSummary.nextAuthorizedStage === "HUMAN_PREVIEW_BROWSER_AND_UI_VALIDATION_R1", "Browser/UI validation is not authorized");

const liveApp = path.join(repo, "數學會考作戰室/human-preview/app.mjs");
const liveStyles = path.join(repo, "數學會考作戰室/human-preview/styles.css");
const currentApp = fs.readFileSync(liveApp);
const currentStyles = fs.readFileSync(liveStyles);
assert(gitBlobSha(currentApp) === "6814ff0fc0bd06519dff2d78b30e256b345683f3", "human-preview/app.mjs differs from approved R1 source");
assert(gitBlobSha(currentStyles) === "b11bdd8f19975633457319ddcf81423f17eb486f", "human-preview/styles.css differs from approved R1 source");

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
const protectedBaseline = treeDigest(repo, protectedPaths);

const payloadApp = path.join(tooling, "payload/human-preview/app.mjs");
const payloadStyles = path.join(tooling, "payload/human-preview/styles.css");
const nextApp = fs.readFileSync(payloadApp);
const nextStyles = fs.readFileSync(payloadStyles);
fs.copyFileSync(payloadApp, liveApp);
fs.copyFileSync(payloadStyles, liveStyles);

const report = {
  status: "APPLIED_CENTRAL_UI_REPAIRS_FOR_BROWSER_VALIDATION",
  contentVersion: expectedContentVersion,
  repairedFiles: [
    { path: repoRelative(repo, liveApp), beforeSha256: sha256(currentApp), afterSha256: sha256(nextApp) },
    { path: repoRelative(repo, liveStyles), beforeSha256: sha256(currentStyles), afterSha256: sha256(nextStyles) }
  ],
  repairedDefects: [
    "ZERO_BASED_MC_AND_CONSTRUCTED_RESPONSE_NUMBERING",
    "INCOMPLETE_LECTURE_AND_REVIEW_FIELD_RENDERING",
    "INSUFFICIENT_KEYBOARD_FOCUS_VISIBILITY_AND_TABLE_OVERFLOW_HANDLING"
  ],
  protectedBaseline,
  defaultStudentRouteChanged: false,
  productionActivationAllowed: false,
  oldDatabaseDeletionAllowed: false
};
writeJson(path.join(evidence, "browser-ui-apply-report.json"), report);
console.log(JSON.stringify(report, null, 2));
