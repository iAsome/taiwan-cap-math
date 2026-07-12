#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const args = process.argv.slice(2);
const arg = n => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };
const evidence = path.resolve(arg('--evidence') || process.cwd());
const read = rel => JSON.parse(fs.readFileSync(path.join(evidence, rel), 'utf8'));
const affected = read('affected-batch-verifier-results.json');
const matrix = read('batch-verifier-matrix-wave-1a.json');
const audit = read('post-audit/global-audit-report.json');
if (affected.status !== 'PASS') throw new Error('Affected batch verification did not pass');
if (matrix.status !== 'PASS' || matrix.batchCount !== 24 || matrix.failed !== 0) throw new Error('24-batch verifier matrix did not pass');
if (audit.status !== 'PASS_GLOBAL_STRUCTURE') throw new Error(`Unexpected post-audit status ${audit.status}`);
if (audit.contentAuthority.gapCount !== 0 || audit.legacyIsolation.issueCount !== 0 || audit.language.simplifiedIssueCount !== 0 || audit.language.titlePunctuationIssueCount !== 0) {
  throw new Error('Wave 1A critical blockers remain');
}
const summary = {
  status: 'PASS_WAVE_1A',
  affectedBatchCount: affected.expectedBatchCount,
  allBatchVerifierCount: matrix.batchCount,
  allBatchVerifierPassed: matrix.passed,
  globalAuditStatus: audit.status,
  counts: audit.counts,
  criticalBlockers: audit.criticalBlockers,
  contentAuthorityGapCount: audit.contentAuthority.gapCount,
  legacyIsolationIssueCount: audit.legacyIsolation.issueCount,
  simplifiedIssueCount: audit.language.simplifiedIssueCount,
  titlePunctuationIssueCount: audit.language.titlePunctuationIssueCount,
  crossUnitPromptSkeletonGroupCount: audit.duplicates.crossUnitPromptSkeletonGroups.length,
  numberSwapCandidateGroupCount: audit.duplicates.numberSwapCandidateGroups.length,
  productionActivationAllowed: false,
  oldDatabaseDeletionAllowed: false,
};
fs.writeFileSync(path.join(evidence, 'wave-1a-final-summary.json'), JSON.stringify(summary, null, 2) + '\n', 'utf8');
function walk(dir) {
  let out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out = out.concat(walk(p)); else out.push(p);
  }
  return out;
}
const manifestPath = path.join(evidence, 'evidence-file-sha256.json');
const files = walk(evidence).filter(p => p !== manifestPath).sort().map(file => {
  const bytes = fs.readFileSync(file);
  return {
    path: path.relative(evidence, file).split(path.sep).join('/'),
    bytes: bytes.length,
    sha256: crypto.createHash('sha256').update(bytes).digest('hex'),
  };
});
fs.writeFileSync(manifestPath, JSON.stringify({ algorithm: 'SHA-256', files }, null, 2) + '\n', 'utf8');
console.log(JSON.stringify(summary, null, 2));
