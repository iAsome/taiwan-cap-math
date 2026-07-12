#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath, pathToFileURL } from "node:url";

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const staging=path.join(root,"staging");
if(fs.existsSync(staging)){
  console.error(JSON.stringify({status:"fail",error:"staging already exists; refusing to overwrite generated output"}));
  process.exit(1);
}
const slots=Array.from({length:15},(_,i)=>`s${String(i+1).padStart(3,"0")}`);
const outDir=path.join(staging,"u20");
fs.mkdirSync(outDir,{recursive:true});
const readJson=p=>JSON.parse(fs.readFileSync(p,"utf8"));
const readJsonl=p=>{
  const t=fs.readFileSync(p,"utf8").trim();
  return t?t.split(/\r?\n/).map(JSON.parse):[];
};
const sha=b=>crypto.createHash("sha256").update(b).digest("hex");
const modules=[];
for(const slot of slots){
  const base=path.join(root,"units","u20",slot);
  const bundle={
    lecture:readJson(path.join(base,"lecture.json")),
    mcQuestions:readJsonl(path.join(base,"mc-questions.jsonl")),
    constructedResponses:readJsonl(path.join(base,"constructed-response.jsonl")),
    semanticReviews:readJsonl(path.join(base,"semantic-reviews.jsonl")),
    drawingSpecs:readJsonl(path.join(base,"drawing-specs.jsonl"))
  };
  const sourceDigest=sha(Buffer.from(JSON.stringify(bundle)));
  const text=`// Generated only by serialization from approved reviewed source. Do not edit.\n`+
    `export const sourceDigest=${JSON.stringify(sourceDigest)};\n`+
    `export const skillBundle=${JSON.stringify(bundle,null,2)};\n`+
    `export default skillBundle;\n`;
  const file=path.join(outDir,`${slot}.mjs`);
  fs.writeFileSync(file,text,"utf8");
  modules.push({slot,path:`staging/u20/${slot}.mjs`,sourceDigest});
}
const imports=slots.map((s,i)=>`import b${i+1} from "./${s}.mjs";`).join("\n");
const index=`// Generated index for approved U20 staging modules.\n${imports}\n\nexport const unitId="u20";\nexport const skillBundles=[${slots.map((s,i)=>`b${i+1}`).join(",")}];\nexport default skillBundles;\n`;
fs.writeFileSync(path.join(outDir,"index.mjs"),index,"utf8");
console.log(JSON.stringify({status:"pass",unitId:"u20",emittedSkillModuleCount:15,emittedIndexModuleCount:1,emittedModuleCount:16,modules}));
