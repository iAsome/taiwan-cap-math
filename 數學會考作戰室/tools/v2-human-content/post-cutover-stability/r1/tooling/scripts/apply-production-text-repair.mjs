import fs from "node:fs";
import path from "node:path";
import { parseArgs,readJson,writeJson,assert,runGit,countOccurrences,fileHash } from "./lib/common.mjs";
const a=parseArgs(process.argv.slice(2));assert(a.repo&&a.root,"Usage --repo --root");
const repo=path.resolve(a.repo),root=path.resolve(a.root),tool=path.join(root,"tooling"),ev=path.join(root,"evidence");
const plan=readJson(path.join(tool,"PRODUCTION-TEXT-REPAIRS.json"));
const results=[];
for(const spec of plan.files){
  const file=path.join(repo,spec.path);
  const blob=runGit(repo,["hash-object","--",spec.path]);assert(blob===spec.expectedGitBlob,`source blob mismatch ${spec.path}`);
  let text=fs.readFileSync(file,"utf8"),operations=[];
  for(const item of spec.replacements){
    const observed=countOccurrences(text,item.old);assert(observed===item.count,`count mismatch ${spec.path}: ${JSON.stringify(item.old)} expected ${item.count} observed ${observed}`);
    text=text.split(item.old).join(item.new);operations.push({...item,observed});
  }
  for(const item of spec.replacements)assert(!text.includes(item.old),`old fragment remains ${spec.path}: ${item.old}`);
  fs.writeFileSync(file,text,"utf8");
  results.push({path:spec.path,beforeGitBlob:blob,afterSha256:fileHash(file),operationCount:operations.length,operations});
}
const allServed=["數學會考作戰室/human-runtime/engine.mjs","數學會考作戰室/human-runtime/bootstrap.mjs","數學會考作戰室/human-runtime/app-human.js"].map(rel=>fs.readFileSync(path.join(repo,rel),"utf8")).join("\n");
for(const fragment of [...plan.forbiddenVisibleFragments,...plan.forbiddenServedRuntimeMarkers])assert(!allServed.includes(fragment),`forbidden fragment remains: ${fragment}`);
const out={status:"APPLIED_PRODUCTION_RUNTIME_TEXT_AND_IDENTITY_REPAIR_R1",repairFileCount:results.length,repairOperationCount:results.reduce((s,x)=>s+x.operationCount,0),files:results,productionActivated:true,oldDatabaseDeletionAllowed:false};
writeJson(path.join(ev,"production-text-repair.json"),out);console.log(JSON.stringify(out,null,2));
