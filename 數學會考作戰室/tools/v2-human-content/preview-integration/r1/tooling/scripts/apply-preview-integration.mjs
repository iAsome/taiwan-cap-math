import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";
import {readJson,writeJson,sha256,listFiles,parseArgs,assert} from "./utils.mjs";
const args=parseArgs(process.argv); const repo=path.resolve(args.repo||""); const root=path.resolve(args.root||"");
assert(repo&&root,"--repo and --root required");
const scriptDir=path.dirname(fileURLToPath(import.meta.url)); const kitRoot=path.dirname(scriptDir); const payload=path.join(kitRoot,"payload","數學會考作戰室");
const math=path.join(repo,"數學會考作戰室"); const evidence=path.join(root,"evidence"); fs.mkdirSync(evidence,{recursive:true});
const readiness=readJson(path.join(math,"tools","v2-human-content","global-readiness","r1","evidence","readiness-gate-r1-summary.json"));
assert(readiness.status==="PASS_READINESS_GATE_R1","readiness gate not passed"); assert(readiness.nextAuthorizedStage==="ISOLATED_HUMAN_RUNTIME_PREVIEW_INTEGRATION","wrong authorized stage");
const manifest=readJson(path.join(math,"tools","v2-human-content","global-readiness","r1","runtime-preview","manifest.json"));
assert(manifest.contentVersion==="d402487b40bca04f3278b231262abfb3aa7fd1d1448454e877ff8c76af25082f","content version mismatch");
const loaderAnalysis=readJson(path.join(math,"tools","v2-human-content","global-readiness","r1","retirement-inventory","current-loader-analysis.json"));
const rollback=readJson(path.join(math,"tools","v2-human-content","global-readiness","r1","retirement-inventory","rollback-baseline.json"));
const loader=path.join(repo,loaderAnalysis.path); assert(sha256(loader)===loaderAnalysis.sha256,"math-bootstrap.js changed since readiness gate");
for(const item of rollback.files||rollback.rollbackFiles||[]){ const f=path.join(repo,item.path); assert(fs.existsSync(f)&&sha256(f)===item.sha256,`rollback baseline changed: ${item.path}`); }
const index=path.join(math,"index.html"); const indexBefore=sha256(index); assert(!fs.readFileSync(index,"utf8").includes("human-preview.html"),"preview is already linked from index");
const targets=[path.join(math,"human-preview.html"),path.join(math,"human-preview")]; for(const target of targets) assert(!fs.existsSync(target),`target already exists: ${target}`);
for(const source of listFiles(payload)){ const rel=path.relative(payload,source); const dest=path.join(math,rel); fs.mkdirSync(path.dirname(dest),{recursive:true}); fs.copyFileSync(source,dest); }
const added=listFiles(payload).map(source=>{const rel=path.relative(payload,source).replaceAll("\\","/");const dest=path.join(math,rel);return {path:`數學會考作戰室/${rel}`,bytes:fs.statSync(dest).size,sha256:sha256(dest)};});
const report={status:"APPLIED_ISOLATED_HUMAN_PREVIEW_FILES",contentVersion:manifest.contentVersion,addedFileCount:added.length,addedFiles:added,defaultLoaderSha256Before:loaderAnalysis.sha256,indexSha256Before:indexBefore,previewRoute:"數學會考作戰室/human-preview.html",defaultStudentRouteChanged:false,previewRouteAdded:true,productionActivationAllowed:false,oldDatabaseDeletionAllowed:false};
writeJson(path.join(evidence,"preview-integration-apply-report.json"),report); console.log(JSON.stringify(report,null,2));
