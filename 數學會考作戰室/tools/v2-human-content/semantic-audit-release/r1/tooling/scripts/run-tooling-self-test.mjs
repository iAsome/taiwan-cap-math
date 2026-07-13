import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { readJson, assert, fileSha256 } from "./lib/common.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const expected = readJson(path.join(root, "EXPECTED-RESULTS.json"));
const policy = readJson(path.join(root, "AUDIT-POLICY.json"));

for (const relative of [
  "payload/human-runtime/content/units/u01.json",
  "payload/human-runtime/content/units/u02.json",
  "payload/human-runtime/content/manifest.json",
  "payload/human-runtime/content/syllabus-lock.json",
  "payload/human-runtime/config.mjs",
  "payload/human-runtime/storage-migration.mjs",
  "payload/human-runtime/bootstrap.mjs",
  "payload/shared/fraction-markup.js",
  "payload/audit/question-ledger-r1.csv"
]) {
  assert(fs.existsSync(path.join(root, relative)), `Missing ${relative}`);
}

const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "payload/shared/fraction-markup.js"), "utf8"), context);
const convert = context.window.FRACTION_MARKUP.slashToFracMarkup;
const cases = [
  ["用了2/5剩下", "用了[[frac:2|5]]剩下"],
  ["2又1/3", "2又[[frac:1|3]]"],
  ["(√36-8)/2，則", "(√36-8)/2，則"],
  ["(1/2)/(3/4)", "([[frac:1|2]])/([[frac:3|4]])"],
  ["2026/7/13", "2026/7/13"],
  ["https://example.com/a/b", "https://example.com/a/b"],
  ["[[frac:3|5]] 公升", "[[frac:3|5]] 公升"]
];
for (const [input, output] of cases) assert(convert(input) === output, `Renderer case failed: ${input} -> ${convert(input)}`);

assert(policy.hotfixReviewedQuestionIds.length === expected.reviewedQuestionCount, "Reviewed ID count mismatch");
assert(expected.pendingQuestionCountAfterHotfix === expected.totalQuestionCount - expected.reviewedQuestionCount, "Pending count mismatch");

console.log(JSON.stringify({
  status: "PASS_TOOLING_SELF_TEST",
  reviewedQuestionCount: expected.reviewedQuestionCount,
  pendingQuestionCount: expected.pendingQuestionCountAfterHotfix,
  newContentVersion: expected.newContentVersion,
  rendererCases: cases.length,
  fullReleaseBlockedUntilPendingZero: true
}, null, 2));
