#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(process.argv[2]||'.');
const slots=Array.from({length:13},(_,i)=>`s${String(i+1).padStart(3,'0')}`);
function readJson(rel){return JSON.parse(fs.readFileSync(path.join(root,rel),'utf8'));}
function readJsonl(rel){const t=fs.readFileSync(path.join(root,rel),'utf8').trim();return t?t.split(/\r?\n/).map(JSON.parse):[];}
const out=path.join(root,'staging','u10');
if(fs.existsSync(out))fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out,{recursive:true});
for(const slot of slots){const base=`units/u10/${slot}`;const data={lecture:readJson(`${base}/lecture.json`),mcQuestions:readJsonl(`${base}/mc-questions.jsonl`),constructedResponses:readJsonl(`${base}/constructed-response.jsonl`),semanticReviews:readJsonl(`${base}/semantic-reviews.jsonl`),drawingSpecs:readJsonl(`${base}/drawing-specs.jsonl`)};const src=`// Deterministically emitted from reviewed immutable source. Do not edit.\nexport default ${JSON.stringify(data,null,2)};\n`;fs.writeFileSync(path.join(out,`${slot}.mjs`),src,'utf8')}
const imports=slots.map((s,i)=>`import ${s} from './${s}.mjs';`).join('\n');
const index=`// Deterministically emitted index. Do not edit.\n${imports}\nexport const unitId='u10';\nexport const skills=[${slots.join(',')}];\nexport const bySkillId=Object.fromEntries(skills.map(s=>[s.lecture.skillId,s]));\nexport default {unitId,skills,bySkillId};\n`;
fs.writeFileSync(path.join(out,'index.mjs'),index,'utf8');
console.log(JSON.stringify({pass:true,unitId:'u10',emittedSkillModules:13,emittedIndexModules:1,emittedModuleCount:14,output:'staging/u10'},null,2));
