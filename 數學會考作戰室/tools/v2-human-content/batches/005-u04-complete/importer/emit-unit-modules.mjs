import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url)); const root=path.resolve(here,'..');
const slots=['s001','s002','s003','s004','s005','s006','s007','s008','s009','s010','s011','s012','s013','s014'];
const readJson=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
const outDir=path.join(root,'staging'); fs.rmSync(outDir,{recursive:true,force:true}); fs.mkdirSync(outDir,{recursive:true});
const outputs=[];
for(const slot of slots){
 const base=`units/u04/${slot}`; const lecture=readJson(`${base}/lecture.json`), questions=readJsonl(`${base}/mc-questions.jsonl`), constructedResponses=readJsonl(`${base}/constructed-response.jsonl`), drawingSpecs=readJsonl(`${base}/drawing-specs.jsonl`);
 const body='// SERIALIZATION OF REVIEWED CHATGPT_HUMAN_AUTHORED_R1 CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.\n'+`export const LECTURE = ${JSON.stringify(lecture,null,2)};\n\nexport const QUESTIONS = ${JSON.stringify(questions,null,2)};\n\nexport const CONSTRUCTED_RESPONSES = ${JSON.stringify(constructedResponses,null,2)};\n\nexport const DRAWING_SPECS = ${JSON.stringify(drawingSpecs,null,2)};\n`;
 const p=path.join(outDir,`u04-${slot}-human-content.mjs`); fs.writeFileSync(p,body,'utf8'); outputs.push({path:path.relative(root,p).replaceAll('\\','/'),bytes:fs.statSync(p).size,sha256:crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex')});
}
fs.writeFileSync(path.join(outDir,'u04-batch-005-staging-manifest.json'),JSON.stringify({unitId:'u04',batchId:'005-u04-complete',slots,outputs,contentAuthority:'CHATGPT_HUMAN_AUTHORED_R1',productionActivationAllowed:false},null,2)+'\n','utf8');
console.log(JSON.stringify({status:'PASS',unitId:'u04',emittedModuleCount:outputs.length,stagingManifestCount:1,productionActivationAllowed:false,outputs},null,2));
