import fs from"node:fs";import path from"node:path";import{assert,parseArgs,readJson,writeJson,fileHash,collectFiles,fileManifest,runGit}from"./lib/common.mjs";
const a=parseArgs(process.argv.slice(2));assert(a.repo&&a.root,"Usage --repo --root");const repo=path.resolve(a.repo),root=path.resolve(a.root),tool=path.join(root,"tooling"),pkg=path.join(root,"package"),ev=path.join(root,"evidence"),ex=readJson(path.join(tool,"EXPECTED-RESULTS.json"));
assert(readJson(path.join(ev,"evidence-chain.json")).status==="PASS_PRODUCTION_CUTOVER_EVIDENCE_CHAIN_R1","evidence chain missing");assert(!fs.existsSync(pkg),"package already exists");fs.mkdirSync(path.join(pkg,"payload/human-runtime"),{recursive:true});fs.mkdirSync(path.join(pkg,"ops"),{recursive:true});
const cp=(s,d)=>{fs.mkdirSync(path.dirname(d),{recursive:true});fs.copyFileSync(s,d)};
const rcRoot=path.join(repo,"數學會考作戰室/human-runtime-rc");
cp(path.join(rcRoot,"engine.mjs"),path.join(pkg,"payload/human-runtime/engine.mjs"));
cp(path.join(rcRoot,"official-spec-lock-r1.json"),path.join(pkg,"payload/human-runtime/official-spec-lock-r1.json"));
cp(path.join(rcRoot,"release-blueprint-r1.json"),path.join(pkg,"payload/human-runtime/release-blueprint-r1.json"));
for(const rel of["config.mjs","storage-migration.mjs","bootstrap.mjs","human-production-bootstrap.js"])cp(path.join(tool,"templates/human-runtime",rel),path.join(pkg,"payload/human-runtime",rel));
let app=fs.readFileSync(path.join(rcRoot,"app-human-rc.js"),"utf8").replaceAll("capMath.humanRc.r1.","capMath.human.r1.").replaceAll("releaseCandidate: true","humanProduction: true").replaceAll("Human Runtime RC","Human Runtime").replaceAll("HUMAN RC","HUMAN RUNTIME");
fs.writeFileSync(path.join(pkg,"payload/human-runtime/app-human.js"),app,"utf8");
cp(path.join(repo,"數學會考作戰室/data.js"),path.join(pkg,"payload/human-runtime/site-shell-data.js"));
cp(path.join(repo,"數學會考作戰室/analysis-data.js"),path.join(pkg,"payload/human-runtime/analysis-data.js"));
cp(path.join(tool,"templates/math-bootstrap.js"),path.join(pkg,"payload/math-bootstrap.js"));
let html=fs.readFileSync(path.join(repo,"數學會考作戰室/human-rc.html"),"utf8");
html=html.replace(/<meta name="robots" content="noindex,nofollow">\s*/,"").replace(/<title>[^<]*Human Runtime RC R1<\/title>/,"<title>會考數學作戰室</title>").replace(/<style>\.rc-banner[\s\S]*?<\/style>\s*/,"").replace(/<body><div class="rc-banner"[\s\S]*?<\/div>\s*/,"<body>\n").replace(/<script src="data\.js[^"]*"><\/script>/,'<script src="human-runtime/site-shell-data.js?v=20260712-human-production-r1"></script>').replace(/<script src="analysis-data\.js[^"]*"><\/script>/,'<script src="human-runtime/analysis-data.js?v=20260712-human-production-r1"></script>').replace(/<script src="human-runtime-rc\/human-rc-bootstrap\.js"><\/script>/,'<script src="math-bootstrap.js?v=20260712-human-production-r1"></script>').replaceAll("Human Runtime RC R1","Human Runtime").replaceAll("RELEASE CANDIDATE R1","").replaceAll("非正式學生入口｜generated V2 與 V1 rollback 未變更","");
assert(!/noindex|human-runtime-rc|human-rc-bootstrap|rc-banner/.test(html),"production index still has RC markers");
fs.writeFileSync(path.join(pkg,"payload/index.html"),html,"utf8");
for(const rel of["apply-staged-cutover.mjs","rollback-to-precutover-tag.mjs"])cp(path.join(tool,"templates/ops",rel),path.join(pkg,"ops",rel));
const retirementInventory=readJson(path.join(repo,"數學會考作戰室/tools/v2-human-content/global-readiness/r1/retirement-inventory/generated-v2-retirement-inventory.json"));
const rollback=readJson(path.join(repo,"數學會考作戰室/tools/v2-human-content/global-readiness/r1/retirement-inventory/rollback-baseline.json"));
const retirement={
 schemaVersion:"math-v2-final-retirement-manifest-draft-r1",status:"DRAFT_NOT_EXECUTABLE_BEFORE_POST_CUTOVER_GATE",
 generatedV2Roots:["數學會考作戰室/tools/v2-content","數學會考作戰室/v2"],
 generatedV2Generator:["數學會考作戰室/tools/author-v2-production-content.mjs"],
 v1ServedRuntimeDeleteAfterHumanOnlyLoader:[
  "數學會考作戰室/questions.js","數學會考作戰室/app-legacy.js","數學會考作戰室/quiz-taxonomy.js","數學會考作戰室/quiz-variant-bank.js","數學會考作戰室/quiz-variants.js","數學會考作戰室/lecture-taxonomy.js","數學會考作戰室/legacy.html"
 ],
 replacedByHumanRuntime:["數學會考作戰室/data.js","數學會考作戰室/analysis-data.js"],
 keepUntilFinalPurityGate:["數學會考作戰室/data.js","數學會考作戰室/analysis-data.js"],
 inventorySourceSha256:fileHash(path.join(repo,"數學會考作戰室/tools/v2-human-content/global-readiness/r1/retirement-inventory/generated-v2-retirement-inventory.json")),
 inventoryCounts:{generatedSourceFiles:retirementInventory.generatedSource?.fileCount,generatedSourceBytes:retirementInventory.generatedSource?.totalBytes,rollbackBaselineFiles:rollback.files?.length||rollback.fileCount},
 retirementExecuted:false,oldDatabaseDeletionAllowed:false
};
writeJson(path.join(pkg,"retirement-manifest-draft.json"),retirement);
writeJson(path.join(pkg,"pre-cutover-tag-plan.json"),{schemaVersion:"math-v2-pre-cutover-tag-plan-r1",tagName:ex.preCutoverTagName,target:"HEAD_OF_PRODUCTION_CUTOVER_PACKAGE_COMMIT",annotated:true,requiredBeforeApply:true,tagCreated:false});
writeJson(path.join(pkg,"cutover-plan.json"),{schemaVersion:"math-v2-production-cutover-plan-r1",contentVersion:ex.contentVersion,sequence:["create-and-push-immutable-tag","apply-staged-payload","commit-cutover","run-node-gate","run-browser-gate","verify-generated-and-v1-rollbacks","authorize-retirement-separately"],rollbackScript:"ops/rollback-to-precutover-tag.mjs",oldDatabaseDeletionDuringCutover:false});
const files=collectFiles(pkg);writeJson(path.join(pkg,"package-sha256.json"),{schemaVersion:"math-v2-production-cutover-package-files-r1",files:fileManifest(pkg,files)});
const out={status:"BUILT_PRODUCTION_CUTOVER_PACKAGE_R1",packageFileCount:collectFiles(pkg).length,contentVersion:ex.contentVersion,productionStoragePrefix:ex.productionStoragePrefix,tagName:ex.preCutoverTagName,retirementExecuted:false,productionActivationAllowed:false,oldDatabaseDeletionAllowed:false};writeJson(path.join(ev,"package-build.json"),out);console.log(JSON.stringify(out,null,2));
