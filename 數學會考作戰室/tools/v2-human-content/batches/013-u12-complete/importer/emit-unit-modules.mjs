import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));const root=path.resolve(here,'..');
const slots=Array.from({length:10},(_,i)=>`s${String(i+1).padStart(3,'0')}`);
const readJson=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
const out=path.join(root,'staging');if(fs.existsSync(out))fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out,{recursive:true});
const outputs=[];
for(const slot of slots){const base=`units/u12/${slot}`;const lecture=readJson(`${base}/lecture.json`);const questions=readJsonl(`${base}/mc-questions.jsonl`);const constructedResponses=readJsonl(`${base}/constructed-response.jsonl`);const semanticReviews=readJsonl(`${base}/semantic-reviews.jsonl`);const drawingSpecs=readJsonl(`${base}/drawing-specs.jsonl`);
 const body='// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.\n'+`export const LECTURE = ${JSON.stringify(lecture,null,2)};\n\n`+`export const QUESTIONS = ${JSON.stringify(questions,null,2)};\n\n`+`export const CONSTRUCTED_RESPONSES = ${JSON.stringify(constructedResponses,null,2)};\n\n`+`export const SEMANTIC_REVIEWS = ${JSON.stringify(semanticReviews,null,2)};\n\n`+`export const DRAWING_SPECS = ${JSON.stringify(drawingSpecs,null,2)};\n`;
 const p=path.join(out,`u12-${slot}-human-content.mjs`);fs.writeFileSync(p,body,'utf8');const b=fs.readFileSync(p);outputs.push({path:path.relative(root,p).replaceAll('\\','/'),bytes:b.length,sha256:crypto.createHash('sha256').update(b).digest('hex')});}
const manifest={unitId:'u12',batchId:'013-u12-complete',slots,outputs,contentAuthority:'CHATGPT_HUMAN_AUTHORED_R1',productionActivationAllowed:false};fs.writeFileSync(path.join(out,'u12-batch-013-staging-manifest.json'),JSON.stringify(manifest,null,2)+'\n','utf8');
console.log(JSON.stringify({status:'PASS',unitId:'u12',emittedModuleCount:outputs.length,stagingManifest:'staging/u12-batch-013-staging-manifest.json',productionActivationAllowed:false,outputs},null,2));
