import fs from "node:fs";
import path from "node:path";
import { parseArgs,readJson,writeJson,assert,sha256,fileHash,collectFiles,fileManifest } from "./lib/common.mjs";
const a=parseArgs(process.argv.slice(2));assert(a.repo&&a.root,"Usage --repo --root");
const repo=path.resolve(a.repo),root=path.resolve(a.root),pkg=path.join(root,"package"),ev=path.join(root,"evidence"),ex=readJson(path.join(root,"tooling/EXPECTED-RESULTS.json"));
assert(!fs.existsSync(pkg),"package already exists");fs.mkdirSync(path.join(pkg,"human-runtime/content/units"),{recursive:true});fs.mkdirSync(path.join(pkg,"human-runtime/figures"),{recursive:true});
const sourcePreview=path.join(repo,"數學會考作戰室/tools/v2-human-content/global-readiness/r1/runtime-preview");
const sourceManifest=readJson(path.join(sourcePreview,"manifest.json"));
assert(sourceManifest.contentVersion===ex.contentVersion&&sourceManifest.unitCount===23&&sourceManifest.figureCount===178,"source manifest mismatch");
const units=[];let lectureCount=0;
for(const entry of sourceManifest.units){
  const source=path.join(sourcePreview,entry.path),unit=readJson(source);
  delete unit.previewOnly;delete unit.productionActivationAllowed;
  unit.schemaVersion="math-v2-human-runtime-production-unit-r1";unit.productionRuntime=true;unit.contentAuthority="CHATGPT_HUMAN_AUTHORED_R1";
  const text=JSON.stringify(unit);
  const target=path.join(pkg,"human-runtime/content/units",`${entry.unitId}.json`);fs.writeFileSync(target,text,"utf8");
  const bytes=Buffer.byteLength(text);const hash=sha256(Buffer.from(text));lectureCount+=entry.counts.lectures;
  units.push({...entry,path:`units/${entry.unitId}.json`,bytes,sha256:hash});
}
const figureIndex={};
for(const [figureId,item] of Object.entries(sourceManifest.figureIndex||{})){
  const sourcePath=String(item.sourcePath).replaceAll("\\","/");
  const source=path.join(repo,...sourcePath.split("/"));assert(fs.existsSync(source),`missing figure ${figureId}: ${sourcePath}`);
  const filename=`${figureId}.svg`,target=path.join(pkg,"human-runtime/figures",filename);fs.copyFileSync(source,target);
  figureIndex[figureId]={...item,sourcePath:`數學會考作戰室/human-runtime/figures/${filename}`,bytes:fs.statSync(target).size,sha256:fileHash(target)};
}
assert(Object.keys(figureIndex).length===178,"figure copy count mismatch");
const productionManifest={
  schemaVersion:"math-v2-human-runtime-production-content-r1",productionRuntime:true,contentAuthority:"CHATGPT_HUMAN_AUTHORED_R1",
  contentVersion:sourceManifest.contentVersion,unitCount:23,skillCount:339,lectureCount,mcQuestionCount:4068,constructedResponseCount:678,figureCount:178,units,figureIndex
};
writeJson(path.join(pkg,"human-runtime/content/manifest.json"),productionManifest);
fs.copyFileSync(path.join(repo,"數學會考作戰室/tools/v2-human-content/authoring/authoring-syllabus-lock-r2.json"),path.join(pkg,"human-runtime/content/syllabus-lock.json"));
let syllabusLock=fs.readFileSync(path.join(pkg,"human-runtime/content/syllabus-lock.json"),"utf8").replace(/\r\n/g,"\n");
syllabusLock=syllabusLock.replace("數學會考作戰室/tools/v2-content/syllabus-source.mjs","數學會考作戰室/tools/v2-human-content/authoring/authoring-syllabus-lock-r2.json");
fs.writeFileSync(path.join(pkg,"human-runtime/content/syllabus-lock.json"),syllabusLock,"utf8");
for(const file of fs.readdirSync(path.join(repo,"數學會考作戰室/human-runtime"))){
  const source=path.join(repo,"數學會考作戰室/human-runtime",file);if(fs.statSync(source).isFile())fs.copyFileSync(source,path.join(pkg,"human-runtime",file));
}
let config=fs.readFileSync(path.join(pkg,"human-runtime/config.mjs"),"utf8");
config=config.replace('../tools/v2-human-content/global-readiness/r1/runtime-preview/manifest.json','./content/manifest.json').replace('../tools/v2-human-content/authoring/authoring-syllabus-lock-r2.json','./content/syllabus-lock.json');
fs.writeFileSync(path.join(pkg,"human-runtime/config.mjs"),config,"utf8");
let engine=fs.readFileSync(path.join(pkg,"human-runtime/engine.mjs"),"utf8");
engine=engine.replace(/\r\n/g,"\n");
engine=engine.replace('assert(this.manifest.previewOnly === true, "human runtime source must remain preview-only");\n    assert(this.manifest.productionActivationAllowed === false, "human source must not activate production");','assert(this.manifest.productionRuntime === true, "human production manifest required");');
engine=engine.replace('assert(unit.previewOnly === true && unit.productionActivationAllowed === false, `${unitId} source is not safe`);','assert(unit.productionRuntime === true && unit.contentAuthority === "CHATGPT_HUMAN_AUTHORED_R1", `${unitId} production source is invalid`);');
assert(!engine.includes("preview-only")&&!engine.includes("unit.previewOnly"),"engine preview assertion remains");
fs.writeFileSync(path.join(pkg,"human-runtime/engine.mjs"),engine,"utf8");
let migration=fs.readFileSync(path.join(pkg,"human-runtime/storage-migration.mjs"),"utf8").replace(/\r\n/g,"\n");
migration += `\n\nexport function retireLegacyMathStorage() {\n  const markerKey = "${"capMath.human.r1."}retirement.r1";\n  const existing = parseJson(localStorage.getItem(markerKey), null);\n  if (existing?.status === "COMPLETE") return existing;\n  const migration = migrateHumanProductionStorage();\n  if (migration?.status !== "COMPLETE") throw new Error("Human storage migration is incomplete");\n  const sourcePaper = localStorage.getItem("capMath.paperHistory");\n  if (sourcePaper != null && localStorage.getItem("${"capMath.human.r1."}legacyPaperHistoryBackup") == null) throw new Error("Generated paper history backup is missing");\n  const deleted = [];\n  const exact = ${JSON.stringify(["capMath.completed","capMath.paperHistory","capMath.dark","capMath.lastSeed","capMath.lastQuizSeed"])};\n  const prefixes = ${JSON.stringify(["capMath.quizSignatures.","capMath.humanRc.r1."])};\n  for (const key of Object.keys(localStorage)) {\n    if (exact.includes(key) || prefixes.some(prefix => key.startsWith(prefix))) { localStorage.removeItem(key); deleted.push(key); }\n  }\n  const report = { status: "COMPLETE", schemaVersion: "math-v2-legacy-storage-retirement-r1", retiredAt: new Date().toISOString(), deletedKeys: deleted.sort(), backupVerified: sourcePaper == null || localStorage.getItem("${"capMath.human.r1."}legacyPaperHistoryBackup") != null };\n  localStorage.setItem(markerKey, JSON.stringify(report));\n  return report;\n}\n`;
fs.writeFileSync(path.join(pkg,"human-runtime/storage-migration.mjs"),migration,"utf8");
let bootstrap=fs.readFileSync(path.join(pkg,"human-runtime/bootstrap.mjs"),"utf8").replace(/\r\n/g,"\n");
bootstrap=bootstrap.replace('import { migrateHumanProductionStorage } from "./storage-migration.mjs";','import { migrateHumanProductionStorage, retireLegacyMathStorage } from "./storage-migration.mjs";');
bootstrap=bootstrap.replace('const migration = migrateHumanProductionStorage();','const migration = migrateHumanProductionStorage();\n  const retirement = retireLegacyMathStorage();');
bootstrap=bootstrap.replace('migration\n  });','migration,\n    retirement\n  });');
assert(bootstrap.includes("retireLegacyMathStorage"),"storage retirement not installed");
fs.writeFileSync(path.join(pkg,"human-runtime/bootstrap.mjs"),bootstrap,"utf8");
const humanOnlyLoader=`(() => {\n  "use strict";\n  const version = "20260713-human-only-r1";\n  async function load(scriptPath) {\n    await new Promise((resolve,reject)=>{const script=document.createElement("script");script.src=\`\${scriptPath}?v=\${version}\`;script.onload=resolve;script.onerror=()=>reject(new Error(\`無法載入 \${scriptPath}\`));document.body.appendChild(script);});\n  }\n  async function start(){document.documentElement.dataset.mathEngine="human-production-r1";window.__MATH_HUMAN_PRODUCTION_LOADER_R1__=Object.freeze({mode:"human-production-r1",contentAuthority:"CHATGPT_HUMAN_AUTHORED_R1",humanDefault:true,generatedRollbackAvailable:false,v1RollbackAvailable:false,oldRuntimesRetired:true});await load("human-runtime/human-production-bootstrap.js");}\n  if(typeof document==="undefined"||typeof document.createElement!=="function")return;\n  start().catch(error=>{document.documentElement.dataset.mathEngine="human-production-load-failed";const main=document.querySelector("#main");if(main){const escaped=String(error.stack||error.message||error).replace(/[&<>"]/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[char]));main.innerHTML=\`<section class="view active"><div class="page-heading"><div><p class="eyebrow">LOAD ERROR</p><h1>數學內容載入失敗</h1><pre>\${escaped}</pre></div></div></section>\`;}throw error;});\n})();\n`;
fs.writeFileSync(path.join(pkg,"math-bootstrap.js"),humanOnlyLoader,"utf8");
let index=fs.readFileSync(path.join(repo,"數學會考作戰室/index.html"),"utf8");
index=index.replaceAll("依人工作者 RC 藍圖抽樣。","依人工作者正式藍圖抽樣。").replaceAll("每個 V2 單元","每個課綱單元").replaceAll("同一種子可重現同一份 25 題選擇卷。","同一種子可重現同一份 25＋2 題卷。").replaceAll("mv=20260712v2","mv=20260713humanr1");
for(const fragment of ["Release Candidate","Human RC","人工作者 RC","每個 V2 單元"])assert(!index.includes(fragment),`index visible fragment remains ${fragment}`);
fs.writeFileSync(path.join(pkg,"index.html"),index,"utf8");
const files=collectFiles(pkg);writeJson(path.join(pkg,"payload-sha256.json"),{schemaVersion:"math-v2-human-only-payload-r1",files:fileManifest(pkg,files)});
const out={status:"BUILT_HUMAN_ONLY_RETIREMENT_PAYLOAD_R1",contentVersion:ex.contentVersion,unitCount:23,lectureCount,figureCount:Object.keys(figureIndex).length,payloadFileCount:collectFiles(pkg).length,productionContentSelfContained:true,oldDatabaseDeletionAllowed:false};
writeJson(path.join(ev,"human-only-payload-build.json"),out);console.log(JSON.stringify(out,null,2));
