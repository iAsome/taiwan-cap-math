import fs from "node:fs";
import path from "node:path";
import { parseArgs,readJson,writeJson,assert,trackedFiles,normalize,textFile } from "./lib/common.mjs";
const a=parseArgs(process.argv.slice(2));assert(a.repo&&a.root,"Usage --repo --root");
const repo=path.resolve(a.repo),root=path.resolve(a.root),policy=readJson(path.join(root,"tooling/RETIREMENT-POLICY.json")),ev=path.join(root,"evidence"),pkg=path.join(root,"package");
const tracked=trackedFiles(repo);
const deleteSet=new Set();
for(const rootPath of policy.deleteRoots)for(const file of tracked)if(file===rootPath||file.startsWith(rootPath+"/"))deleteSet.add(file);
for(const file of policy.deleteFiles){assert(tracked.includes(file),`required retirement file missing: ${file}`);deleteSet.add(file)}
assert(deleteSet.size>100,"retirement candidate count unexpectedly small");
const activeRefs=[],documentRefs=[];
const scanRoots=["數學會考作戰室/"],scanExcludeRoots=["數學會考作戰室/tools/","數學會考作戰室/quiz-banks/"];
for(const rel of tracked){
  if(!scanRoots.some(rootPath=>rel===rootPath.slice(0,-1)||rel.startsWith(rootPath)))continue;
  if(scanExcludeRoots.some(rootPath=>rel.startsWith(rootPath)))continue;
  if(deleteSet.has(rel)||policy.historicalReferenceRoots.some(rootPath=>rel===rootPath||rel.startsWith(rootPath+"/")))continue;
  const ext=path.extname(rel).toLowerCase(),active=policy.activeReferenceExtensions.includes(ext);
  const override=rel==="數學會考作戰室/index.html"?path.join(pkg,"index.html"):rel==="數學會考作戰室/math-bootstrap.js"?path.join(pkg,"math-bootstrap.js"):rel==="數學會考作戰室/human-runtime/config.mjs"?path.join(pkg,"human-runtime/config.mjs"):rel==="數學會考作戰室/human-runtime/engine.mjs"?path.join(pkg,"human-runtime/engine.mjs"):path.join(repo,rel);
  const text=textFile(override);if(text==null)continue;
  for(const token of policy.forbiddenActiveReferences)if(text.includes(token))(active?activeRefs:documentRefs).push({path:rel,token});
}
assert(activeRefs.length===0,`unclassified active references: ${JSON.stringify(activeRefs,null,2)}`);
const files=[...deleteSet].sort().map(rel=>({path:rel,bytes:fs.statSync(path.join(repo,rel)).size}));
const out={status:"PASS_OLD_RUNTIME_RETIREMENT_DRY_RUN_R1",candidateFileCount:files.length,candidateBytes:files.reduce((s,x)=>s+x.bytes,0),files,activeReferenceIssues:activeRefs,historicalOrDocumentReferences:documentRefs,oldDatabaseDeletionAllowed:true};
writeJson(path.join(ev,"retirement-dry-run.json"),out);console.log(JSON.stringify({...out,files:undefined,historicalOrDocumentReferencesCount:documentRefs.length},null,2));
