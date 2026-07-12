#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
const arg = name => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : null;
};
const repo = path.resolve(arg('--repo') || process.cwd());
const expectedAuthority = 'CHATGPT_HUMAN_AUTHORED_R1';
const auditRoot = path.join(repo, '數學會考作戰室', 'tools', 'v2-human-content', 'global-audit', 'r1');
const backlogPath = path.join(auditRoot, 'global-repair-backlog.json');
const batchesRoot = path.join(repo, '數學會考作戰室', 'tools', 'v2-human-content', 'batches');
const evidenceRoot = path.resolve(arg('--evidence') || path.join(repo, '數學會考作戰室', 'tools', 'v2-human-content', 'global-repair', 'wave-1a', 'evidence'));

const EXPECTED = {
  contentAuthorityGaps: 834,
  legacyIsolationIssues: 4,
  simplifiedIssues: 43,
  titlePunctuationIssues: 3,
};

function fail(message) {
  throw new Error(message);
}
function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}
function writeJson(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n', 'utf8');
}
function readJsonl(file) {
  const text = fs.readFileSync(file, 'utf8').trim();
  return text ? text.split(/\r?\n/).map(JSON.parse) : [];
}
function writeJsonl(file, records) {
  fs.writeFileSync(file, records.map(x => JSON.stringify(x)).join('\n') + (records.length ? '\n' : ''), 'utf8');
}
function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map(k => [k, stable(value[k])]));
  }
  return value;
}
function shaText(text) {
  return crypto.createHash('sha256').update(text).digest('hex');
}
function shaFile(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
}
function canonicalHash(record, ownField = 'contentSha256') {
  const copy = structuredClone(record);
  delete copy[ownField];
  return shaText(JSON.stringify(stable(copy)));
}
function canonicalReviewHash(record, verifierText) {
  const copy = structuredClone(record);
  delete copy.reviewSha256;
  if (/delete\s+(?:clone|copy)\.contentSha256/.test(verifierText)) delete copy.contentSha256;
  return shaText(JSON.stringify(stable(copy)));
}
function recordId(record) {
  return record.lectureId || record.questionId || record.figureId || record.reviewId || record.id || null;
}
function getField(root, fieldPath) {
  const parts = [];
  const rx = /([^.[\]]+)|\[(\d+)\]/g;
  let match;
  while ((match = rx.exec(fieldPath))) parts.push(match[1] ?? Number(match[2]));
  let parent = null;
  let key = null;
  let value = root;
  for (const part of parts) {
    parent = value;
    key = part;
    if (parent == null || !(part in parent)) fail(`Missing field path ${fieldPath}`);
    value = parent[part];
  }
  return { parent, key, value };
}
function loadContainer(repoRelativePath) {
  const file = path.join(repo, ...repoRelativePath.split('/'));
  if (!fs.existsSync(file)) fail(`Missing target file: ${repoRelativePath}`);
  if (file.endsWith('.jsonl')) return { file, type: 'jsonl', records: readJsonl(file) };
  return { file, type: 'json', records: [readJson(file)] };
}
function saveContainer(container) {
  if (container.type === 'jsonl') writeJsonl(container.file, container.records);
  else writeJson(container.file, container.records[0]);
}
function findRecord(container, issue) {
  const byLine = Number.isInteger(issue.line) && issue.line > 0 ? container.records[issue.line - 1] : null;
  if (byLine && recordId(byLine) === issue.id) return byLine;
  const hits = container.records.filter(x => recordId(x) === issue.id || x.questionId === issue.id);
  if (hits.length !== 1) fail(`Expected one record ${issue.id} in ${issue.path}, got ${hits.length}`);
  return hits[0];
}
function walkFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkFiles(full));
    else out.push(full);
  }
  return out;
}
function posixRelative(root, file) {
  return path.relative(root, file).split(path.sep).join('/');
}

if (!fs.existsSync(backlogPath)) fail(`Missing Global Audit R1 backlog: ${backlogPath}`);
const backlog = readJson(backlogPath);
for (const [key, count] of Object.entries(EXPECTED)) {
  if (!Array.isArray(backlog[key]) || backlog[key].length !== count) {
    fail(`Backlog ${key} expected ${count}, observed ${backlog[key]?.length}`);
  }
}
if (backlog.status !== 'BLOCKED_BEFORE_PRODUCTION') fail(`Unexpected backlog status ${backlog.status}`);

const containers = new Map();
const getContainer = rel => {
  if (!containers.has(rel)) containers.set(rel, loadContainer(rel));
  return containers.get(rel);
};
const affectedBatches = new Set();
const changedRecordIds = new Set();
const changedFields = [];

// 1. Add the human-authority marker to the exact records identified by R1.
for (const gap of backlog.contentAuthorityGaps) {
  const container = getContainer(gap.path);
  const record = findRecord(container, gap);
  if (record.contentAuthority !== undefined && record.contentAuthority !== expectedAuthority) {
    fail(`${gap.id}: unexpected existing contentAuthority ${record.contentAuthority}`);
  }
  record.contentAuthority = expectedAuthority;
  affectedBatches.add(gap.batch);
  changedRecordIds.add(gap.id);
  changedFields.push({ id: gap.id, path: gap.path, field: 'contentAuthority', value: expectedAuthority });
}

// 2. Apply only the exact simplified-to-traditional replacements recorded by R1.
for (const issue of backlog.simplifiedIssues) {
  const container = getContainer(issue.path);
  const record = findRecord(container, issue);
  const ref = getField(record, issue.field);
  if (typeof ref.value !== 'string') fail(`${issue.id} ${issue.field} is not a string`);
  if (!ref.value.includes(issue.char)) fail(`${issue.id} ${issue.field} no longer contains ${issue.char}`);
  ref.parent[ref.key] = ref.value.split(issue.char).join(issue.replacement);
  affectedBatches.add(issue.batch);
  changedRecordIds.add(issue.id);
  changedFields.push({ id: issue.id, path: issue.path, field: issue.field, from: issue.char, to: issue.replacement });
}

// 3. Replace the three exact U01 lecture titles with punctuation-safe human titles.
const titleRepairs = new Map([
  ['u01-s001-lecture-r1', '數的分類：整數與有理數和無理數'],
  ['u01-s003-lecture-r1', '數線位置：從原點與方向和刻度讀出坐標'],
  ['u01-s011-lecture-r1', '整數四則混合：依序處理括號與乘除和加減'],
]);
for (const issue of backlog.titlePunctuationIssues) {
  const replacement = titleRepairs.get(issue.id);
  if (!replacement) fail(`No approved title repair for ${issue.id}`);
  if (replacement.includes('、')) fail(`Replacement still contains 頓號: ${replacement}`);
  const container = getContainer(issue.path);
  const record = findRecord(container, issue);
  if (record.title !== issue.title) fail(`${issue.id}: title changed since R1`);
  record.title = replacement;
  const batch = issue.path.split('/batches/')[1].split('/')[0];
  affectedBatches.add(batch);
  changedRecordIds.add(issue.id);
  changedFields.push({ id: issue.id, path: issue.path, field: 'title', from: issue.title, to: replacement });
}

// Persist record-level edits before recalculating hashes.
for (const container of containers.values()) saveContainer(container);

// 4. Add/complete legacy isolation contracts.
const isolationTemplate = batchId => ({
  schemaVersion: 'math-v2-legacy-isolation-r1',
  batchId,
  contentAuthority: expectedAuthority,
  legacyContentImported: false,
  legacySemanticEvidenceAccepted: false,
  oldProductionRuntimeModified: false,
  deleteLegacyNow: false,
  finalRetirementRequired: true,
  productionActivationAllowed: false,
  legacyContentPathsReadForMathematicalInspiration: false,
  statement: 'Human-authored source is isolated from V1 and generated V2 content. Old content remains unchanged until the final controlled retirement migration.'
});
for (const item of backlog.legacyIsolationIssues) {
  const batchRoot = path.join(batchesRoot, item.batch);
  const isolationPath = path.join(batchRoot, 'manifest', 'legacy-content-isolation.json');
  if (item.issue === 'missing legacy-content-isolation.json') {
    if (fs.existsSync(isolationPath)) fail(`${item.batch}: isolation file unexpectedly exists`);
    writeJson(isolationPath, isolationTemplate(item.batch));
  } else if (item.field === 'productionActivationAllowed') {
    const obj = readJson(isolationPath);
    if (obj.productionActivationAllowed !== undefined && obj.productionActivationAllowed !== null && obj.productionActivationAllowed !== false) {
      fail(`${item.batch}: invalid productionActivationAllowed`);
    }
    obj.productionActivationAllowed = false;
    writeJson(isolationPath, obj);
  } else {
    fail(`Unsupported isolation issue ${JSON.stringify(item)}`);
  }
  affectedBatches.add(item.batch);
}

function loadBatchRecords(batchRoot) {
  const unitRoot = path.join(batchRoot, 'units');
  const lectures = [];
  const questions = [];
  const cr = [];
  const reviews = [];
  const drawings = [];
  for (const file of walkFiles(unitRoot)) {
    const name = path.basename(file);
    if (name === 'lecture.json') lectures.push({ file, record: readJson(file) });
    else if (name === 'mc-questions.jsonl') questions.push(...readJsonl(file).map((record, index) => ({ file, index, record })));
    else if (name === 'constructed-response.jsonl') cr.push(...readJsonl(file).map((record, index) => ({ file, index, record })));
    else if (name === 'semantic-reviews.jsonl') reviews.push(...readJsonl(file).map((record, index) => ({ file, index, record })));
    else if (name === 'drawing-specs.jsonl') drawings.push(...readJsonl(file).map((record, index) => ({ file, index, record })));
  }
  return { lectures, questions, cr, reviews, drawings };
}
function writeGroupedJsonl(items) {
  const grouped = new Map();
  for (const item of items) {
    if (!grouped.has(item.file)) grouped.set(item.file, []);
    grouped.get(item.file).push(item);
  }
  for (const [file, rows] of grouped) {
    rows.sort((a, b) => a.index - b.index);
    writeJsonl(file, rows.map(x => x.record));
  }
}
function rebuildContentManifest(batchRoot, maps) {
  const file = path.join(batchRoot, 'manifest', 'content-sha256.json');
  if (!fs.existsSync(file)) return;
  const manifest = readJson(file);
  if (Array.isArray(manifest.files)) return; // Batch 001 uses this file as its file manifest.
  if (Array.isArray(manifest.records)) {
    for (const entry of manifest.records) {
      const kind = String(entry.kind || entry.type || entry.recordType || '').toLowerCase();
      const next = kind.includes('review')
        ? (maps.review.get(entry.id) || maps.review.get(`${entry.id}#semantic-review`))
        : maps.content.get(entry.id);
      if (next) entry.sha256 = next;
    }
    if ('recordCount' in manifest) manifest.recordCount = manifest.records.length;
  } else if (manifest.records && typeof manifest.records === 'object') {
    for (const key of Object.keys(manifest.records)) {
      const next = maps.review.get(key) || maps.content.get(key);
      if (next) manifest.records[key] = next;
    }
  }
  writeJson(file, manifest);
}
function updateFileManifest(batchRoot, addedPaths = []) {
  let file = path.join(batchRoot, 'manifest', 'file-sha256.json');
  if (!fs.existsSync(file)) file = path.join(batchRoot, 'manifest', 'content-sha256.json');
  const manifest = readJson(file);
  if (Array.isArray(manifest.files)) {
    const map = new Map(manifest.files.map(entry => [entry.path, entry]));
    for (const rel of addedPaths) {
      if (!map.has(rel)) {
        const entry = { path: rel, bytes: 0, sha256: '' };
        manifest.files.push(entry);
        map.set(rel, entry);
      }
    }
    for (const entry of manifest.files) {
      const target = path.join(batchRoot, ...entry.path.split('/'));
      if (!fs.existsSync(target)) fail(`Manifest target missing ${target}`);
      entry.bytes = fs.statSync(target).size;
      entry.sha256 = shaFile(target);
    }
    manifest.files.sort((a, b) => a.path.localeCompare(b.path, 'en'));
    if ('fileCount' in manifest) manifest.fileCount = manifest.files.length;
  } else if (manifest.files && typeof manifest.files === 'object') {
    for (const rel of addedPaths) if (!(rel in manifest.files)) manifest.files[rel] = '';
    const next = {};
    for (const rel of Object.keys(manifest.files).sort((a, b) => a.localeCompare(b, 'en'))) {
      const target = path.join(batchRoot, ...rel.split('/'));
      if (!fs.existsSync(target)) fail(`Manifest target missing ${target}`);
      next[rel] = shaFile(target);
    }
    manifest.files = next;
    if ('fileCount' in manifest) manifest.fileCount = Object.keys(next).length;
  } else {
    fail(`Unsupported file manifest shape: ${file}`);
  }
  writeJson(file, manifest);
}

// 5. Recalculate canonical record hashes and linked review hashes for every affected batch.
const batchReports = [];
for (const batch of [...affectedBatches].sort()) {
  const batchRoot = path.join(batchesRoot, batch);
  const records = loadBatchRecords(batchRoot);
  const verifierText = fs.readFileSync(path.join(batchRoot, 'importer', 'verify-bundle.mjs'), 'utf8');
  const contentMap = new Map();
  const reviewMap = new Map();
  const questionHash = new Map();

  for (const item of records.lectures) {
    if ('contentSha256' in item.record) item.record.contentSha256 = canonicalHash(item.record, 'contentSha256');
    if (item.record.lectureId && item.record.contentSha256) contentMap.set(item.record.lectureId, item.record.contentSha256);
    writeJson(item.file, item.record);
  }
  for (const item of [...records.questions, ...records.cr, ...records.drawings]) {
    if ('contentSha256' in item.record) item.record.contentSha256 = canonicalHash(item.record, 'contentSha256');
    const id = recordId(item.record);
    if (id && item.record.contentSha256) contentMap.set(id, item.record.contentSha256);
    if (item.record.questionId && item.record.contentSha256) questionHash.set(item.record.questionId, item.record.contentSha256);
  }
  writeGroupedJsonl(records.questions);
  writeGroupedJsonl(records.cr);
  writeGroupedJsonl(records.drawings);

  for (const item of records.reviews) {
    const qHash = questionHash.get(item.record.questionId);
    if (!qHash) fail(`${batch}: review without matching question ${item.record.questionId}`);
    item.record.contentSha256 = qHash;
    if ('reviewSha256' in item.record) {
      item.record.reviewSha256 = canonicalReviewHash(item.record, verifierText);
      reviewMap.set(`${item.record.questionId}#semantic-review`, item.record.reviewSha256);
      if (item.record.reviewId) reviewMap.set(item.record.reviewId, item.record.reviewSha256);
    }
  }
  writeGroupedJsonl(records.reviews);

  rebuildContentManifest(batchRoot, { content: contentMap, review: reviewMap });
  const isolationRel = 'manifest/legacy-content-isolation.json';
  const added = fs.existsSync(path.join(batchRoot, isolationRel)) ? [isolationRel] : [];
  updateFileManifest(batchRoot, added);

  // Staging is derived; rebuild it from repaired source.
  const staging = path.join(batchRoot, 'staging');
  fs.rmSync(staging, { recursive: true, force: true });
  const emitter = fs.existsSync(path.join(batchRoot, 'importer', 'emit-unit-modules.mjs'))
    ? 'importer/emit-unit-modules.mjs'
    : 'importer/emit-skill-module.mjs';
  batchReports.push({
    batch,
    lectureCount: records.lectures.length,
    mcCount: records.questions.length,
    crCount: records.cr.length,
    reviewCount: records.reviews.length,
    drawingCount: records.drawings.length,
    emitter,
  });
}

fs.mkdirSync(evidenceRoot, { recursive: true });
const report = {
  status: 'REPAIR_SOURCE_APPLIED_STAGING_NOT_YET_EMITTED',
  authority: expectedAuthority,
  expectedAuditCounts: EXPECTED,
  affectedBatches: [...affectedBatches].sort(),
  changedRecordCount: changedRecordIds.size,
  changedFieldOperationCount: changedFields.length,
  changedFields,
  titleRepairs: Object.fromEntries(titleRepairs),
  batchReports,
  productionActivationAllowed: false,
  oldDatabaseModified: false,
};
writeJson(path.join(evidenceRoot, 'wave-1a-apply-report.json'), report);
console.log(JSON.stringify({
  status: report.status,
  affectedBatchCount: report.affectedBatches.length,
  affectedBatches: report.affectedBatches,
  changedRecordCount: report.changedRecordCount,
  changedFieldOperationCount: report.changedFieldOperationCount,
  productionActivationAllowed: false,
}, null, 2));
