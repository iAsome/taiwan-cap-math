import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const slots=Array.from({length:18},(_,i)=>`s${String(i+1).padStart(3,'0')}`);
const readJson=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
const outDir=path.join(root,'staging'); fs.rmSync(outDir,{recursive:true,force:true}); fs.mkdirSync(outDir,{recursive:true});
const outputs=[];
for(const slot of slots){
 const base=`units/u17/${slot}`;
 const lecture=readJson(`${base}/lecture.json`),questions=readJsonl(`${base}/mc-questions.jsonl`),constructedResponses=readJsonl(`${base}/constructed-response.jsonl`),drawingSpecs=readJsonl(`${base}/drawing-specs.jsonl`);
 const body='// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.\n'+`export const LECTURE = ${JSON.stringify(lecture,null,2)};\n\nexport const QUESTIONS = ${JSON.stringify(questions,null,2)};\n\nexport const CONSTRUCTED_RESPONSES = ${JSON.stringify(constructedResponses,null,2)};\n\nexport const DRAWING_SPECS = ${JSON.stringify(drawingSpecs,null,2)};\n`;
 const p=path.join(outDir,`u17-${slot}-human-content.mjs`); fs.writeFileSync(p,body,'utf8');
 outputs.push({path:path.relative(root,p).replaceAll('\\','/'),bytes:fs.statSync(p).size,sha256:crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex')});
}
const manifest={unitId:'u17',batchId:'018-u17-complete',slots,outputs,productionActivationAllowed:false,contentAuthority:'CHATGPT_HUMAN_AUTHORED_R1'};
fs.writeFileSync(path.join(outDir,'u17-batch-018-staging-manifest.json'),JSON.stringify(manifest,null,2)+'\n','utf8');
console.log(JSON.stringify({status:'PASS',unitId:'u17',emittedModuleCount:outputs.length,stagingManifest:'staging/u17-batch-018-staging-manifest.json',productionActivationAllowed:false},null,2));
