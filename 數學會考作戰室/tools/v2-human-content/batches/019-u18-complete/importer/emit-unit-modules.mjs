import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here,'..');
const lock = JSON.parse(fs.readFileSync(path.join(root,'schemas/u18-lock-snapshot.json'),'utf8'));
const readJson = rel => JSON.parse(fs.readFileSync(path.join(root,rel),'utf8'));
const readJsonl = rel => fs.readFileSync(path.join(root,rel),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
const sha = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const outDir = path.join(root,'staging');
fs.rmSync(outDir,{recursive:true,force:true});
fs.mkdirSync(outDir,{recursive:true});
const outputs = [];
for (const skill of lock.unit.skills) {
  const source = `units/u18/${skill.slot}`;
  const lecture = readJson(`${source}/lecture.json`);
  const questions = readJsonl(`${source}/mc-questions.jsonl`);
  const constructedResponses = readJsonl(`${source}/constructed-response.jsonl`);
  const semanticReviews = readJsonl(`${source}/semantic-reviews.jsonl`);
  const drawingSpecs = readJsonl(`${source}/drawing-specs.jsonl`);
  const body = [
    '// SERIALIZATION OF REVIEWED CHATGPT HUMAN-AUTHORED CONTENT.',
    '// BATCH-LOCAL STAGING ONLY. DO NOT EDIT OR ACTIVATE IN PRODUCTION.',
    `export const UNIT_ID = "u18";`,
    `export const SKILL_SLOT = ${JSON.stringify(skill.slot)};`,
    `export const SKILL_ID = ${JSON.stringify(skill.skillId)};`,
    `export const LECTURE = ${JSON.stringify(lecture,null,2)};`,
    `export const QUESTIONS = ${JSON.stringify(questions,null,2)};`,
    `export const CONSTRUCTED_RESPONSES = ${JSON.stringify(constructedResponses,null,2)};`,
    `export const SEMANTIC_REVIEWS = ${JSON.stringify(semanticReviews,null,2)};`,
    `export const DRAWING_SPECS = ${JSON.stringify(drawingSpecs,null,2)};`,
    ''
  ].join('\n\n');
  const file = path.join(outDir,`u18-${skill.slot}-human-content.mjs`);
  fs.writeFileSync(file,body,'utf8');
  outputs.push({
    path:path.relative(root,file).replaceAll('\\','/'),
    bytes:fs.statSync(file).size,
    sha256:sha(file),
    skillId:skill.skillId
  });
}
const manifest = {
  packageId:'math-v2-human-content-batch-019-u18-complete',
  unitId:'u18',
  slots:lock.unit.skills.map(s=>s.slot),
  outputs,
  emittedModuleCount:outputs.length,
  sourceAuthority:'CHATGPT_HUMAN_AUTHORED_R1',
  productionActivationAllowed:false
};
fs.writeFileSync(path.join(outDir,'u18-batch-019-staging-manifest.json'),JSON.stringify(manifest,null,2)+'\n','utf8');
console.log(JSON.stringify({status:'PASS',unitId:'u18',emittedModuleCount:outputs.length,productionActivationAllowed:false,outputs},null,2));
