#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root=path.resolve(process.argv[2]||process.cwd());
const slots=Array.from({length:16},(_,i)=>`s${String(i+1).padStart(3,"0")}`);
function readJSON(rel){return JSON.parse(fs.readFileSync(path.join(root,rel),"utf8"));}
function readJSONL(rel){return fs.readFileSync(path.join(root,rel),"utf8").split(/\r?\n/).filter(Boolean).map(JSON.parse);}
function sha(data){return crypto.createHash("sha256").update(data,"utf8").digest("hex");}
const manifest=readJSON("manifest/project-manifest.json");
if(manifest.productionActivationAllowed!==false) throw new Error("Refusing emission because productionActivationAllowed is not false.");
if(manifest.expectedBaseHead!=="__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__") throw new Error("Source package expected HEAD placeholder was unexpectedly altered.");
const staging=path.join(root,"staging","u09");
fs.rmSync(path.join(root,"staging"),{recursive:true,force:true});
fs.mkdirSync(staging,{recursive:true});
const imports=[];
const emitted=[];
for(const slot of slots){
  const base=`units/u09/${slot}`;
  const payload={
    lecture:readJSON(`${base}/lecture.json`),
    mcQuestions:readJSONL(`${base}/mc-questions.jsonl`),
    constructedResponses:readJSONL(`${base}/constructed-response.jsonl`),
    semanticReviews:readJSONL(`${base}/semantic-reviews.jsonl`),
    drawingSpecs:readJSONL(`${base}/drawing-specs.jsonl`)
  };
  const source=`// Generated only by serializing reviewed source. Do not edit.\nexport default ${JSON.stringify(payload,null,2)};\n`;
  const rel=`staging/u09/${slot}.mjs`;
  fs.writeFileSync(path.join(root,rel),source,"utf8");
  imports.push(`import ${slot} from "./${slot}.mjs";`);
  emitted.push({path:rel,sha256:sha(source),bytes:Buffer.byteLength(source)});
}
const indexSource=`// Generated staging index. Production activation remains forbidden.\n${imports.join("\n")}\n\nexport const unitId = "u09";\nexport const productionActivationAllowed = false;\nexport const skills = [${slots.join(", ")}];\nexport default { unitId, productionActivationAllowed, skills };\n`;
const indexRel="staging/u09/unit-index.mjs";
fs.writeFileSync(path.join(root,indexRel),indexSource,"utf8");
emitted.push({path:indexRel,sha256:sha(indexSource),bytes:Buffer.byteLength(indexSource)});
console.log(JSON.stringify({pass:true,unitId:"u09",emittedModuleCount:emitted.length,productionActivationAllowed:false,modules:emitted},null,2));
