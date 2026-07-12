import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const slots=Array.from({length:15},(_,i)=>`s${String(i+1).padStart(3,'0')}`);
const readJson=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
const outDir=path.join(root,'staging');
fs.mkdirSync(outDir,{recursive:true});
const outputs=[];
for(const slot of slots){
  const base=`units/u02/${slot}`;
  const lecture=readJson(`${base}/lecture.json`);
  const questions=readJsonl(`${base}/mc-questions.jsonl`);
  const constructedResponses=readJsonl(`${base}/constructed-response.jsonl`);
  const drawingSpecs=readJsonl(`${base}/drawing-specs.jsonl`);
  const body='// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.\n'
    +`export const LECTURE = ${JSON.stringify(lecture,null,2)};\n\n`
    +`export const QUESTIONS = ${JSON.stringify(questions,null,2)};\n\n`
    +`export const CONSTRUCTED_RESPONSES = ${JSON.stringify(constructedResponses,null,2)};\n\n`
    +`export const DRAWING_SPECS = ${JSON.stringify(drawingSpecs,null,2)};\n`;
  const p=path.join(outDir,`u02-${slot}-human-content.mjs`);
  fs.writeFileSync(p,body,'utf8');
  outputs.push({path:path.relative(root,p).replaceAll('\\','/'),bytes:fs.statSync(p).size,
    sha256:crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex')});
}
fs.writeFileSync(path.join(outDir,'u02-batch-003-staging-manifest.json'),
  JSON.stringify({unitId:'u02',slots,outputs,productionActivationAllowed:false},null,2)+'\n','utf8');
console.log(JSON.stringify({status:'PASS',emittedModuleCount:outputs.length,outputs},null,2));
