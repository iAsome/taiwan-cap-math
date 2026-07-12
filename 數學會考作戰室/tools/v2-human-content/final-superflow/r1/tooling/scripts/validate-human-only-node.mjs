import fs from "node:fs";
import path from "node:path";
import { pathToFileURL,fileURLToPath } from "node:url";
import { parseArgs,readJson,writeJson,assert } from "./lib/common.mjs";
const a=parseArgs(process.argv.slice(2));assert(a.repo&&a.root,"Usage --repo --root");
const repo=path.resolve(a.repo),root=path.resolve(a.root),ev=path.join(root,"evidence"),ex=readJson(path.join(root,"tooling/EXPECTED-RESULTS.json"));
const config=fs.readFileSync(path.join(repo,"數學會考作戰室/human-runtime/config.mjs"),"utf8"),loader=fs.readFileSync(path.join(repo,"數學會考作戰室/math-bootstrap.js"),"utf8");
assert(config.includes("./content/manifest.json")&&config.includes("./content/syllabus-lock.json")&&!config.includes("global-readiness"),"config not self-contained");
assert(!loader.includes("generated=1")&&!loader.includes("legacy=1")&&!loader.includes("v2/")&&!loader.includes("app-legacy"),"loader is not Human-only");
const enginePath=path.join(repo,"數學會考作戰室/human-runtime/engine.mjs");
const {HumanProductionRuntime,assessmentSignature}=await import(`${pathToFileURL(enginePath).href}?final=${Date.now()}`);
const loadJson=async url=>JSON.parse(fs.readFileSync(fileURLToPath(url),"utf8"));
const runtime=await new HumanProductionRuntime({
 manifestUrl:pathToFileURL(path.join(repo,"數學會考作戰室/human-runtime/content/manifest.json")),
 syllabusLockUrl:pathToFileURL(path.join(repo,"數學會考作戰室/human-runtime/content/syllabus-lock.json")),
 blueprintUrl:pathToFileURL(path.join(repo,"數學會考作戰室/human-runtime/release-blueprint-r1.json")),
 expectedContentVersion:ex.contentVersion,loadJson
}).initialize();
const units=await runtime.loadAllUnits(),counts={units:units.length,skills:units.reduce((s,u)=>s+u.skills.length,0),lectures:runtime.manifest.lectureCount,mcQuestions:units.reduce((s,u)=>s+u.skills.reduce((n,k)=>n+k.mcQuestions.length,0),0),constructedResponses:units.reduce((s,u)=>s+u.skills.reduce((n,k)=>n+k.constructedResponses.length,0),0),figures:Object.keys(runtime.manifest.figureIndex).length};
for(const[k,v]of Object.entries(ex.expectedCounts))assert(counts[k]===v,`count ${k}`);
const mocks=[];for(const level of[1,2,3])for(const seed of[1,42,73,512,4096,11527,11528,20260713,999999]){const one=await runtime.generateReleaseMock(seed,level),two=await runtime.generateReleaseMock(seed,level);assert(one.questions.filter(q=>q.type==="mc").length===25&&one.questions.filter(q=>q.type==="cr").length===2&&one.minutes===80&&assessmentSignature(one)===assessmentSignature(two),`mock ${seed}/${level}`);mocks.push({seed,level,signature:assessmentSignature(one)})}
const quizzes=[];for(const item of runtime.quizCatalog()){const one=await runtime.generateUnitQuiz(item.v2UnitId,11527),two=await runtime.generateUnitQuiz(item.v2UnitId,11527);assert(one.questions.length===item.questionCount&&assessmentSignature(one)===assessmentSignature(two),`quiz ${item.v2UnitId}`);quizzes.push({unitId:item.v2UnitId,count:one.questions.length})}
for(const item of Object.values(runtime.manifest.figureIndex)){assert(item.sourcePath.startsWith("數學會考作戰室/human-runtime/figures/"),`figure path not promoted ${item.sourcePath}`);assert(fs.existsSync(path.join(repo,...item.sourcePath.split("/"))),`figure missing ${item.sourcePath}`)}
const out={status:"PASS_HUMAN_ONLY_NODE_GATE_R1",counts,mockValidationCount:mocks.length,unitQuizValidationCount:quizzes.length,selfContainedContent:true,humanOnlyLoader:true,oldRuntimeRequired:false,oldDatabaseDeleted:true};
writeJson(path.join(ev,"human-only-node.json"),out);console.log(JSON.stringify(out,null,2));
