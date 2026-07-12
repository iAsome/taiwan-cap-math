import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const out=path.join(root,'staging','u16');
const slots=Array.from({length:18},(_,i)=>`s${String(i+1).padStart(3,'0')}`);
const readJson=(p)=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl=(p)=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
fs.rmSync(path.join(root,'staging'),{recursive:true,force:true});
fs.mkdirSync(out,{recursive:true});

for(const slot of slots){
  const base=`units/u16/${slot}`;
  const data={
    slot,
    lecture:readJson(`${base}/lecture.json`),
    mcQuestions:readJsonl(`${base}/mc-questions.jsonl`),
    constructedResponses:readJsonl(`${base}/constructed-response.jsonl`),
    semanticReviews:readJsonl(`${base}/semantic-reviews.jsonl`),
    drawingSpecs:readJsonl(`${base}/drawing-specs.jsonl`)
  };
  const source=`// Deterministically emitted from reviewed CHATGPT_HUMAN_AUTHORED_R1 source.\n`+
    `// Do not edit this staging module by hand.\n`+
    `export const skillData=${JSON.stringify(data,null,2)};\nexport default skillData;\n`;
  fs.writeFileSync(path.join(out,`${slot}.mjs`),source,'utf8');
}
const imports=slots.map((s,i)=>`import s${i+1} from './${s}.mjs';`).join('\n');
const list=slots.map((_,i)=>`s${i+1}`).join(',');
fs.writeFileSync(path.join(out,'index.mjs'),`${imports}\nexport const unitModules=[${list}];\nexport default unitModules;\n`,'utf8');
console.log(JSON.stringify({
  status:'PASS',unitId:'u16',emittedModuleCount:19,
  skillModuleCount:18,indexModuleCount:1,
  sourceAuthority:'CHATGPT_HUMAN_AUTHORED_R1',
  mathematicalContentGenerated:false,
  output:'staging/u16'
},null,2));
