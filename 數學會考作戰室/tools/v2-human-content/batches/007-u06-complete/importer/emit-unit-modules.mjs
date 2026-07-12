import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const readJson=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/u).filter(Boolean).map(JSON.parse);
const out=path.join(root,'staging/u06');
fs.rmSync(path.join(root,'staging'),{recursive:true,force:true});
fs.mkdirSync(out,{recursive:true});

const slots=Array.from({length:12},(_,i)=>`s${String(i+1).padStart(3,'0')}`);
const modules=[];
for(const slot of slots){
 const base=`units/u06/${slot}`;
 const data={
  lecture:readJson(`${base}/lecture.json`),
  mcQuestions:readJsonl(`${base}/mc-questions.jsonl`),
  constructedResponses:readJsonl(`${base}/constructed-response.jsonl`),
  semanticReviews:readJsonl(`${base}/semantic-reviews.jsonl`),
  drawingSpecs:readJsonl(`${base}/drawing-specs.jsonl`)
 };
 const target=path.join(out,`${slot}.mjs`);
 fs.writeFileSync(target,`// Deterministically serialized reviewed U06 content. Do not edit.\nexport default ${JSON.stringify(data,null,2)};\n`,'utf8');
 modules.push({slot,file:`${slot}.mjs`,skillId:data.lecture.skillId,lectureSha256:data.lecture.contentSha256,
   mcCount:data.mcQuestions.length,constructedResponseCount:data.constructedResponses.length,
   semanticReviewCount:data.semanticReviews.length,drawingSpecCount:data.drawingSpecs.length});
}
const manifest={
 schemaVersion:'u06-staging-module-manifest-r1',
 unitId:'u06',
 moduleCount:modules.length,
 generatedFrom:'reviewed source JSON and JSONL only',
 mathematicalContentGenerated:false,
 mathematicalContentRepaired:false,
 legacyContentImported:false,
 productionActivationAllowed:false,
 modules
};
fs.writeFileSync(path.join(out,'module-manifest.json'),JSON.stringify(manifest,null,2)+'\n','utf8');
console.log(JSON.stringify({
 status:'PASS',unitId:'u06',emittedModuleCount:modules.length,
 outputDirectory:'staging/u06',mathematicalContentGenerated:false,
 mathematicalContentRepaired:false,legacyContentImported:false,
 productionActivationAllowed:false
},null,2));
