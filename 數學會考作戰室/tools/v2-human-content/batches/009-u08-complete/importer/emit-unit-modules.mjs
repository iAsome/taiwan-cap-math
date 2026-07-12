import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const slots=Array.from({length:14},(_,i)=>`s${String(i+1).padStart(3,'0')}`);
const readJson=rel=>JSON.parse(fs.readFileSync(path.join(root,rel),'utf8'));
const readJsonl=rel=>{
  const text=fs.readFileSync(path.join(root,rel),'utf8');
  return text.trim()?text.split(/\r?\n/).filter(Boolean).map(JSON.parse):[];
};
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const outDir=path.join(root,'staging');
fs.rmSync(outDir,{recursive:true,force:true});
fs.mkdirSync(outDir,{recursive:true});
const outputs=[];
for (const slot of slots) {
  const base=`units/u08/${slot}`;
  const lecture=readJson(`${base}/lecture.json`);
  const questions=readJsonl(`${base}/mc-questions.jsonl`);
  const constructedResponses=readJsonl(`${base}/constructed-response.jsonl`);
  const semanticReviews=readJsonl(`${base}/semantic-reviews.jsonl`);
  const drawingSpecs=readJsonl(`${base}/drawing-specs.jsonl`);
  const body=[
    '// SERIALIZATION OF REVIEWED HUMAN CONTENT.',
    '// CENTRAL_COORDINATOR_APPROVAL_REQUIRED.',
    '// DO NOT EDIT, REPAIR OR ACTIVATE THIS MODULE DIRECTLY.',
    `export const LECTURE = ${JSON.stringify(lecture,null,2)};`,
    `export const QUESTIONS = ${JSON.stringify(questions,null,2)};`,
    `export const CONSTRUCTED_RESPONSES = ${JSON.stringify(constructedResponses,null,2)};`,
    `export const SEMANTIC_REVIEWS = ${JSON.stringify(semanticReviews,null,2)};`,
    `export const DRAWING_SPECS = ${JSON.stringify(drawingSpecs,null,2)};`,
    ''
  ].join('\n\n');
  const p=path.join(outDir,`u08-${slot}-human-content.mjs`);
  fs.writeFileSync(p,body,'utf8');
  outputs.push({
    path:path.relative(root,p).replaceAll('\\','/'),
    bytes:fs.statSync(p).size,
    sha256:sha(p)
  });
}
const manifest={
  packageId:'math-v2-human-content-batch-009-u08-complete',
  unitId:'u08',
  slots,
  outputs,
  emittedModuleCount:outputs.length,
  sourceAuthority:'CHATGPT_HUMAN_AUTHORED_R1',
  centralCoordinatorApprovalRequired:true,
  productionActivationAllowed:false
};
fs.writeFileSync(path.join(outDir,'u08-batch-009-staging-manifest.json'),JSON.stringify(manifest,null,2)+'\n','utf8');
console.log(JSON.stringify({status:'PASS',emittedModuleCount:outputs.length,productionActivationAllowed:false,outputs},null,2));
