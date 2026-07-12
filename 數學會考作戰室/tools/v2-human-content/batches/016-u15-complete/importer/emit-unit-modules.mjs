import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));const root=path.resolve(here,'..');const out=path.join(root,'staging/u15');
const slots=['s001','s002','s003','s004','s005','s006','s007','s008','s009','s010','s011','s012','s013'];
const readJson=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));const readJsonl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
fs.rmSync(path.join(root,'staging'),{recursive:true,force:true});fs.mkdirSync(out,{recursive:true});
const imports=[];
for(const slot of slots){const base=`units/u15/${slot}`;const bundle={lecture:readJson(`${base}/lecture.json`),mcQuestions:readJsonl(`${base}/mc-questions.jsonl`),constructedResponses:readJsonl(`${base}/constructed-response.jsonl`),semanticReviews:readJsonl(`${base}/semantic-reviews.jsonl`),drawingSpecs:readJsonl(`${base}/drawing-specs.jsonl`),contentAuthority:'CHATGPT_HUMAN_AUTHORED_R1',productionActivationAllowed:false};const name=`u15-${slot}.mjs`;fs.writeFileSync(path.join(out,name),`// Emitted only from reviewed immutable source.\nexport default ${JSON.stringify(bundle,null,2)};\n`);imports.push(`import ${slot} from './${name}';`)}
const index=`${imports.join('\n')}\nexport const contentAuthority='CHATGPT_HUMAN_AUTHORED_R1';\nexport const productionActivationAllowed=false;\nexport default {${slots.join(',')}};\n`;fs.writeFileSync(path.join(out,'index.mjs'),index);console.log(JSON.stringify({status:'PASS',unitId:'u15',emittedSkillModules:13,emittedIndexModules:1,emittedModuleCount:14,output:'staging/u15',productionActivationAllowed:false},null,2));
