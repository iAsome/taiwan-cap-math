import fs from "node:fs";
import path from "node:path";
import { parseArgs,readJson,writeJson,assert,runGit,trackedFiles,textFile,collectFiles,fileManifest } from "./lib/common.mjs";
const a=parseArgs(process.argv.slice(2));assert(a.repo&&a.root&&a.retirementCommit,"Usage --repo --root --retirementCommit");
const repo=path.resolve(a.repo),root=path.resolve(a.root),ex=readJson(path.join(root,"tooling/EXPECTED-RESULTS.json")),policy=readJson(path.join(root,"tooling/RETIREMENT-POLICY.json")),ev=path.join(root,"evidence/purity");
assert(runGit(repo,["rev-parse","HEAD"])===a.retirementCommit,"retirement commit HEAD mismatch");assert(runGit(repo,["status","--short","--untracked-files=all"])==="","repo must be clean for purity gate");
const tracked=trackedFiles(repo),remaining=[];
for(const rootPath of policy.deleteRoots)for(const file of tracked)if(file===rootPath||file.startsWith(rootPath+"/"))remaining.push(file);
for(const file of policy.deleteFiles)if(tracked.includes(file))remaining.push(file);
assert(remaining.length===0,`retired files remain ${JSON.stringify(remaining)}`);
const activeRefs=[],historicalRefs=[];
const scanRoots=["數學會考作戰室/"],scanExcludeRoots=["數學會考作戰室/tools/","數學會考作戰室/quiz-banks/"];
for(const rel of tracked){
 if(!scanRoots.some(rootPath=>rel===rootPath.slice(0,-1)||rel.startsWith(rootPath)))continue;
 if(scanExcludeRoots.some(rootPath=>rel.startsWith(rootPath)))continue;
 if(policy.historicalReferenceRoots.some(rootPath=>rel===rootPath||rel.startsWith(rootPath+"/")))continue;
 const ext=path.extname(rel).toLowerCase();if(!policy.activeReferenceExtensions.includes(ext))continue;
 const text=textFile(path.join(repo,rel));if(text==null)continue;
 const historical=policy.historicalReferenceRoots.some(rootPath=>rel===rootPath||rel.startsWith(rootPath+"/"));
 for(const token of policy.forbiddenActiveReferences)if(text.includes(token))(historical?historicalRefs:activeRefs).push({path:rel,token});
}
assert(activeRefs.length===0,`active legacy refs ${JSON.stringify(activeRefs,null,2)}`);
const loader=fs.readFileSync(path.join(repo,"數學會考作戰室/math-bootstrap.js"),"utf8"),config=fs.readFileSync(path.join(repo,"數學會考作戰室/human-runtime/config.mjs"),"utf8"),index=fs.readFileSync(path.join(repo,"數學會考作戰室/index.html"),"utf8");
assert(!loader.includes("legacy=1")&&!loader.includes("generated=1")&&!loader.includes("v2/")&&!loader.includes("app-legacy")&&!loader.includes("legacyScripts")&&!loader.includes("generatedV2Scripts"),"loader purity failed");
assert(config.includes("./content/manifest.json")&&!config.includes("tools/v2-human-content"),"config purity failed");
for(const fragment of policy.forbiddenProductionVisibleText)assert(!index.includes(fragment),`index visible impurity ${fragment}`);
const manifest=readJson(path.join(repo,"數學會考作戰室/human-runtime/content/manifest.json"));assert(manifest.productionRuntime===true&&manifest.previewOnly==null&&manifest.figureCount===178,"manifest purity failed");
const report={status:"PASS_HUMAN_ONLY_REPOSITORY_PURITY_GATE_R1",retirementCommit:a.retirementCommit,retiredTrackedFileCount:0,activeLegacyReferenceCount:0,historicalEvidenceReferenceCount:historicalRefs.length,historicalEvidenceReferences:historicalRefs,humanOnlyLoader:true,selfContainedHumanContent:true,productionManifest:true,oldDatabaseDeleted:true,issues:[]};
writeJson(path.join(ev,"repository-purity.json"),report);console.log(JSON.stringify({...report,historicalEvidenceReferences:undefined},null,2));
