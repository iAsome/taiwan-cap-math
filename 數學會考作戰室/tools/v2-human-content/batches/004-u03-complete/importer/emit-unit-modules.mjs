import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const unitId = 'u03';
const batchId = '004-u03-complete';
const slots = Array.from({ length: 15 }, (_, index) => `s${String(index + 1).padStart(3, '0')}`);

const readJson = relativePath =>
  JSON.parse(fs.readFileSync(path.join(root, relativePath), 'utf8'));

const readJsonl = relativePath =>
  fs.readFileSync(path.join(root, relativePath), 'utf8')
    .split(/\r?\n/)
    .filter(Boolean)
    .map(JSON.parse);

const sha256 = buffer =>
  crypto.createHash('sha256').update(buffer).digest('hex');

const outDir = path.join(root, 'staging');
fs.mkdirSync(outDir, { recursive: true });

const outputs = [];

for (const slot of slots) {
  const base = `units/${unitId}/${slot}`;
  const lecture = readJson(`${base}/lecture.json`);
  const questions = readJsonl(`${base}/mc-questions.jsonl`);
  const constructedResponses = readJsonl(`${base}/constructed-response.jsonl`);
  const drawingSpecs = readJsonl(`${base}/drawing-specs.jsonl`);

  const body =
    '// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.\n' +
    '// CONTENT AUTHORITY: CHATGPT_HUMAN_AUTHORED_R1\n' +
    '// OLD GENERATED CONTENT MUST NOT BE IMPORTED OR MERGED.\n' +
    `export const LECTURE = ${JSON.stringify(lecture, null, 2)};\n\n` +
    `export const QUESTIONS = ${JSON.stringify(questions, null, 2)};\n\n` +
    `export const CONSTRUCTED_RESPONSES = ${JSON.stringify(constructedResponses, null, 2)};\n\n` +
    `export const DRAWING_SPECS = ${JSON.stringify(drawingSpecs, null, 2)};\n`;

  const outputPath = path.join(outDir, `${unitId}-${slot}-human-content.mjs`);
  fs.writeFileSync(outputPath, body, 'utf8');
  const content = fs.readFileSync(outputPath);

  outputs.push({
    path: path.relative(root, outputPath).replaceAll('\\', '/'),
    bytes: content.length,
    sha256: sha256(content),
    contentAuthority: 'CHATGPT_HUMAN_AUTHORED_R1',
    productionActivationAllowed: false,
  });
}

const stagingManifest = {
  schemaVersion: 'math-v2-human-staging-manifest-r4.0',
  batchId,
  unitId,
  slots,
  outputs,
  contentAuthority: 'CHATGPT_HUMAN_AUTHORED_R1',
  legacyContentImported: false,
  productionActivationAllowed: false,
};

const stagingManifestPath = path.join(outDir, 'u03-batch-004-staging-manifest.json');
fs.writeFileSync(stagingManifestPath, `${JSON.stringify(stagingManifest, null, 2)}\n`, 'utf8');

console.log(JSON.stringify({
  status: 'PASS',
  unitId,
  batchId,
  emittedModuleCount: outputs.length,
  outputs,
  stagingManifest: {
    path: path.relative(root, stagingManifestPath).replaceAll('\\', '/'),
    bytes: fs.statSync(stagingManifestPath).size,
    sha256: sha256(fs.readFileSync(stagingManifestPath)),
  },
  contentAuthority: 'CHATGPT_HUMAN_AUTHORED_R1',
  legacyContentImported: false,
  productionActivationAllowed: false,
}, null, 2));
