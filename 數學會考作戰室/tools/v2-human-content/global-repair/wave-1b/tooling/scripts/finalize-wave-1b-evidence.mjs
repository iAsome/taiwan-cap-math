#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const args = process.argv.slice(2);
const arg = n => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };
const repo = path.resolve(arg('--repo') || process.cwd());
const evidenceRoot = path.resolve(arg('--evidence') || path.join(repo, '數學會考作戰室', 'tools', 'v2-human-content', 'global-repair', 'wave-1b', 'evidence'));
const read = n => JSON.parse(fs.readFileSync(path.join(evidenceRoot, n), 'utf8'));
const apply = read('wave-1b-apply-report.json');
const affected = read('affected-batch-verifier-results.json');
const matrix = read('batch-verifier-matrix-wave-1b.json');
const audit = read('post-audit/global-audit-report.json');
const adjudication = read('duplicate-adjudication-report.json');
const duplicates = audit.duplicates || {};
const ok =
  apply.replacementCount === 12 &&
  apply.affectedBatches.length === 5 &&
  affected.status === 'PASS' &&
  matrix.status === 'PASS' &&
  matrix.batchCount === 24 &&
  matrix.passed === 24 &&
  matrix.failed === 0 &&
  audit.status === 'PASS_GLOBAL_STRUCTURE' &&
  audit.criticalBlockers.length === 0 &&
  (duplicates.crossUnitPromptSkeletonGroups || []).length === 0 &&
  (duplicates.exactMcPromptGroups || []).length === 0 &&
  (duplicates.numberSwapCandidateGroups || []).length === 22 &&
  (duplicates.exactConstructedResponseGroups || []).length === 0 &&
  adjudication.status === 'PASS_DUPLICATE_ADJUDICATION' &&
  adjudication.unresolvedGroupCount === 0 &&
  audit.productionActivationAllowed === false;
const summary = {
  status: ok ? 'PASS_WAVE_1B' : 'FAIL',
  replacementCount: apply.replacementCount,
  affectedBatchCount: apply.affectedBatches.length,
  affectedBatches: apply.affectedBatches,
  allBatchVerifierCount: matrix.batchCount,
  allBatchVerifierPassed: matrix.passed,
  globalAuditStatus: audit.status,
  counts: audit.counts,
  criticalBlockers: audit.criticalBlockers,
  rawDuplicateCounts: adjudication.rawCounts,
  adjudicatedRetainedNumberSwapGroups: adjudication.retainedGroupCount,
  unresolvedDuplicateGroups: adjudication.unresolvedGroupCount,
  productionActivationAllowed: false,
  oldDatabaseDeletionAllowed: false
};
fs.writeFileSync(path.join(evidenceRoot, 'wave-1b-final-summary.json'), JSON.stringify(summary, null, 2) + '\n');
function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (entry.name !== 'evidence-file-sha256.json') out.push(p);
  }
  return out;
}
const files = walk(evidenceRoot).sort();
const manifest = files.map(file => ({
  path: path.relative(evidenceRoot, file).split(path.sep).join('/'),
  bytes: fs.statSync(file).size,
  sha256: crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex')
}));
fs.writeFileSync(path.join(evidenceRoot, 'evidence-file-sha256.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(JSON.stringify(summary, null, 2));
if (!ok) process.exit(1);
