import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const slots=Array.from({length:16},(_,i)=>`s${String(i+1).padStart(3,'0')}`);
const readJson=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
const lectures=[],mc=[],cr=[];
for(const slot of slots){
 const base=`units/u11/${slot}`;
 lectures.push(readJson(`${base}/lecture.json`));
 mc.push(...readJsonl(`${base}/mc-questions.jsonl`));
 cr.push(...readJsonl(`${base}/constructed-response.jsonl`));
}
const staging=path.join(root,'staging');
fs.rmSync(staging,{recursive:true,force:true});fs.mkdirSync(staging,{recursive:true});
const emit=(name,value)=>fs.writeFileSync(path.join(staging,name),`// Deterministically emitted from reviewed source. Do not edit.\nexport default ${JSON.stringify(value,null,2)};\n`,'utf8');
emit('u11-lectures.mjs',lectures);
emit('u11-mc-questions.mjs',mc);
emit('u11-constructed-response.mjs',cr);
emit('u11-manifest.mjs',{unitId:'u11',batchId:'012-u11-complete',lectureCount:lectures.length,mcQuestionCount:mc.length,constructedResponseCount:cr.length,contentAuthority:'CHATGPT_HUMAN_AUTHORED_R1',productionActivationAllowed:false});
console.log(JSON.stringify({status:'PASS',unitId:'u11',emittedModuleCount:4,modules:fs.readdirSync(staging).sort(),productionActivationAllowed:false},null,2));
