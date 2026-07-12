import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const verify=spawnSync(process.execPath,[path.join(root,'importer/verify-bundle.mjs')],{encoding:'utf8'});if(verify.status!==0){process.stderr.write(verify.stderr||verify.stdout);process.exit(verify.status||1)}
const out=path.join(root,'staging/u19');fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out,{recursive:true});
const slots=Array.from({length:18},(_,i)=>`s${String(i+1).padStart(3,'0')}`);const imports=[];const exports=[];
for(const slot of slots){const base=path.join(root,'units/u19',slot);const lecture=JSON.parse(fs.readFileSync(path.join(base,'lecture.json'),'utf8'));const readl=f=>fs.readFileSync(path.join(base,f),'utf8').trim().split(/\r?\n/).filter(Boolean).map(JSON.parse);const questions=readl('mc-questions.jsonl');const constructedResponses=readl('constructed-response.jsonl');const semanticReviews=readl('semantic-reviews.jsonl');const drawingSpecs=readl('drawing-specs.jsonl');const name=`u19_${slot}`;fs.writeFileSync(path.join(out,`${slot}.mjs`),`export const ${name} = ${JSON.stringify({lecture,questions,constructedResponses,semanticReviews,drawingSpecs},null,2)};\nexport default ${name};\n`);imports.push(`import ${name} from './${slot}.mjs';`);exports.push(name)}
fs.writeFileSync(path.join(out,'index.mjs'),`${imports.join('\n')}\nexport const u19Modules=[${exports.join(',')}];\nexport default u19Modules;\n`);
console.log(JSON.stringify({status:'PASS',unitId:'u19',emittedSkillModuleCount:18,emittedIndexModuleCount:1,emittedModuleCount:19,output:'staging/u19'},null,2));
