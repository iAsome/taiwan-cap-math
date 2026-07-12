import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const staging=path.join(root,'staging');
if(fs.existsSync(staging)) fs.rmSync(staging,{recursive:true,force:true});
fs.mkdirSync(staging,{recursive:true});
const slots=Array.from({length:15},(_,i)=>`s${String(i+1).padStart(3,'0')}`);
const readJson=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
const emitted=[];
for(const slot of slots){
 const base=`units/u13/${slot}`;
 const payload={lecture:readJson(`${base}/lecture.json`),mcQuestions:readJsonl(`${base}/mc-questions.jsonl`),constructedResponses:readJsonl(`${base}/constructed-response.jsonl`),semanticReviews:readJsonl(`${base}/semantic-reviews.jsonl`),drawingSpecs:readJsonl(`${base}/drawing-specs.jsonl`)};
 const file=`u13-${slot}.mjs`;
 fs.writeFileSync(path.join(staging,file),`export default ${JSON.stringify(payload,null,2)};\n`,'utf8');emitted.push(file);
}
fs.writeFileSync(path.join(staging,'u13-index.mjs'),`export const unitId='u13';\nexport const skillModules=${JSON.stringify(emitted)};\n`,'utf8');
console.log(JSON.stringify({status:'PASS',unitId:'u13',emittedSkillModuleCount:15,emittedUnitIndexCount:1,emittedModuleCount:16,stagingPath:'staging/',productionPathModified:false},null,2));
