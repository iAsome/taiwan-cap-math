import fs from "node:fs";
import path from "node:path";
import { parseArgs, readJson, writeJson, assert } from "./lib/common.mjs";
import { parseCsv } from "./lib/csv.mjs";

const args = parseArgs(process.argv.slice(2));
assert(args.root && args.mode, "Usage: --root --mode hotfix|full-release");
const root = path.resolve(args.root);
const expected = readJson(path.join(root, "tooling/EXPECTED-RESULTS.json"));
const policy = readJson(path.join(root, "tooling/AUDIT-POLICY.json"));
const ledger = parseCsv(fs.readFileSync(path.join(root, "tooling/payload/audit/question-ledger-r1.csv"), "utf8"));
assert(ledger.length === expected.totalQuestionCount, `Ledger row count ${ledger.length}`);

const ids = ledger.map(row => row.questionId);
assert(new Set(ids).size === ids.length, "Duplicate question IDs in ledger");
const reviewed = ledger.filter(row => row.initialVerdict === "REVISED_AND_REVIEWED");
const pending = ledger.filter(row => row.initialVerdict === "PENDING_MANUAL");
const reviewedIds = reviewed.map(row => row.questionId).sort();
assert(JSON.stringify(reviewedIds) === JSON.stringify([...policy.hotfixReviewedQuestionIds].sort()), "Reviewed hotfix ID set mismatch");

if (args.mode === "hotfix") {
  assert(reviewed.length === expected.reviewedQuestionCount, "Hotfix reviewed count mismatch");
  assert(pending.length === expected.pendingQuestionCountAfterHotfix, "Hotfix pending count mismatch");
  const report = {
    status: "PASS_HOTFIX_AUDIT_LEDGER_R1",
    ledgerRows: ledger.length,
    reviewedQuestions: reviewed.length,
    pendingManual: pending.length,
    fullReleaseAuthorized: false
  };
  writeJson(path.join(root, "evidence/ledger-hotfix.json"), report);
  console.log(JSON.stringify(report, null, 2));
} else if (args.mode === "full-release") {
  assert(pending.length === 0, `Full release blocked: ${pending.length} questions remain PENDING_MANUAL`);
  assert(ledger.every(row => ["PASS","REVISED_AND_REVIEWED","REMOVE"].includes(row.initialVerdict)), "Unresolved repair verdicts remain");
  const report = { status: expected.fullAuditReleaseStatus, ledgerRows: ledger.length, pendingManual: 0, fullReleaseAuthorized: true };
  writeJson(path.join(root, "evidence/ledger-full-release.json"), report);
  console.log(JSON.stringify(report, null, 2));
} else {
  throw new Error(`Unknown mode ${args.mode}`);
}
