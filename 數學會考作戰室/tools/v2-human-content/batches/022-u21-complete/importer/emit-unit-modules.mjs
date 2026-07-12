import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url)); const root=path.resolve(here,'..');
const slots=Array.from({length:12},(_,i)=>`s${String(i+1).padStart(3,'0')}`);
const rj=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const rjl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
const out=path.join(root,'staging'); fs.rmSync(out,{recursive:true,force:true}); fs.mkdirSync(out,{recursive:true}); const outputs=[];
for(const slot of slots){const base=`units/u21/${slot}`; const lecture=rj(`${base}/lecture.json`),questions=rjl(`${base}/mc-questions.jsonl`),constructedResponses=rjl(`${base}/constructed-response.jsonl`),semanticReviews=rjl(`${base}/semantic-reviews.jsonl`),drawingSpecs=rjl(`${base}/drawing-specs.jsonl`);
 const body='// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.\n'+`export const LECTURE=${JSON.stringify(lecture,null,2)};\n\n`+`export const QUESTIONS=${JSON.stringify(questions,null,2)};\n\n`+`export const CONSTRUCTED_RESPONSES=${JSON.stringify(constructedResponses,null,2)};\n\n`+`export const SEMANTIC_REVIEWS=${JSON.stringify(semanticReviews,null,2)};\n\n`+`export const DRAWING_SPECS=${JSON.stringify(drawingSpecs,null,2)};\n`;
 const p=path.join(out,`u21-${slot}-human-content.mjs`); fs.writeFileSync(p,body,'utf8'); outputs.push({path:path.relative(root,p).replaceAll('\\','/'),bytes:fs.statSync(p).size,sha256:crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex')});}
fs.writeFileSync(path.join(out,'u21-batch-022-staging-manifest.json'),JSON.stringify({unitId:'u21',slots,outputs,productionActivationAllowed:false},null,2)+'\n');
console.log(JSON.stringify({status:'PASS',unitId:'u21',emittedModuleCount:outputs.length,productionActivationAllowed:false,outputs},null,2));
