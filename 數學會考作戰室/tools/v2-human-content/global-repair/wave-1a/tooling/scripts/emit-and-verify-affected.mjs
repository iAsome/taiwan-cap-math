#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const args = process.argv.slice(2);
const arg = n => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };
const repo = path.resolve(arg('--repo') || process.cwd());
const evidence = path.resolve(arg('--evidence') || path.join(repo, '數學會考作戰室', 'tools', 'v2-human-content', 'global-repair', 'wave-1a', 'evidence'));
const reportPath = path.join(evidence, 'wave-1a-apply-report.json');
if (!fs.existsSync(reportPath)) throw new Error(`Missing apply report: ${reportPath}`);
const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
const batchesRoot = path.join(repo, '數學會考作戰室', 'tools', 'v2-human-content', 'batches');
const hook = pathToFileURL(path.join(path.dirname(fileURLToPath(import.meta.url)), 'windows-posix-relative-hook.mjs')).href;

function run(batchRoot, scriptRel, extra = []) {
  const script = path.join(batchRoot, ...scriptRel.split('/'));
  const r = spawnSync(process.execPath, ['--import', hook, script, ...extra], { cwd: batchRoot, encoding: 'utf8', env: { ...process.env } });
  let parsed = null;
  try { parsed = JSON.parse(r.stdout.trim()); } catch {}
  return { command: `node ${scriptRel}${extra.length ? ` ${extra.join(' ')}` : ''}`, exitCode: r.status, signal: r.signal, parsed, stdout: r.stdout, stderr: r.stderr };
}
const results = [];
for (const batchInfo of report.batchReports) {
  const batch = batchInfo.batch;
  const root = path.join(batchesRoot, batch);
  const first = run(root, 'importer/verify-bundle.mjs');
  if (first.exitCode !== 0) {
    results.push({ batch, first, emitter: null, second: null, pass: false });
    break;
  }
  const emitter = run(root, batchInfo.emitter);
  if (emitter.exitCode !== 0) {
    results.push({ batch, first, emitter, second: null, pass: false });
    break;
  }
  const extra = batch.startsWith('017-') ? ['--expect-staging'] : [];
  const second = run(root, 'importer/verify-bundle.mjs', extra);
  results.push({ batch, first, emitter, second, pass: second.exitCode === 0 });
  if (second.exitCode !== 0) break;
}
const status = results.length === report.batchReports.length && results.every(x => x.pass) ? 'PASS' : 'FAIL';
fs.mkdirSync(evidence, { recursive: true });
fs.writeFileSync(path.join(evidence, 'affected-batch-verifier-results.json'), JSON.stringify({ status, expectedBatchCount: report.batchReports.length, resultCount: results.length, results }, null, 2) + '\n', 'utf8');
console.log(JSON.stringify({ status, expectedBatchCount: report.batchReports.length, completedBatchCount: results.length, failed: results.filter(x => !x.pass).map(x => x.batch) }, null, 2));
if (status !== 'PASS') process.exit(1);
