import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const out=path.join(root,'staging','u14');
fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out,{recursive:true});
const slots=Array.from({length:12},(_,i)=>`s${String(i+1).padStart(3,'0')}`);
const readJson=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
for(const slot of slots){
  const base=`units/u14/${slot}`;
  const bundle={lecture:readJson(`${base}/lecture.json`),mcQuestions:readJsonl(`${base}/mc-questions.jsonl`),constructedResponses:readJsonl(`${base}/constructed-response.jsonl`),semanticReviews:readJsonl(`${base}/semantic-reviews.jsonl`),drawingSpecs:readJsonl(`${base}/drawing-specs.jsonl`)};
  const code=`// Generated only from reviewed immutable source. Do not hand edit.\nexport default ${JSON.stringify(bundle,null,2)};\n`;
  fs.writeFileSync(path.join(out,`${slot}.mjs`),code,'utf8');
}
const imports=slots.map(s=>`import ${s} from './${s}.mjs';`).join('\n');
const exports=`\nexport const unitId='u14';\nexport const skills=[${slots.join(',')}];\nexport default {unitId,skills};\n`;
fs.writeFileSync(path.join(out,'index.mjs'),imports+exports,'utf8');
console.log(JSON.stringify({status:'PASS',unitId:'u14',emittedSkillModules:12,emittedIndexModules:1,emittedModuleCount:13,output:'staging/u14',productionActivationAllowed:false},null,2));
