import fs from "node:fs";
import path from "node:path";
import { pathToFileURL,fileURLToPath } from "node:url";
import { parseArgs,readJson,writeJson,assert } from "./lib/common.mjs";
const a=parseArgs(process.argv.slice(2));assert(a.repo&&a.root,"Usage --repo --root");
const repo=path.resolve(a.repo),root=path.resolve(a.root),ev=path.join(root,"evidence"),ex=readJson(path.join(root,"tooling/EXPECTED-RESULTS.json")),plan=readJson(path.join(root,"tooling/PRODUCTION-TEXT-REPAIRS.json"));
const enginePath=path.join(repo,"數學會考作戰室/human-runtime/engine.mjs");
const {HumanProductionRuntime,assessmentSignature}=await import(`${pathToFileURL(enginePath).href}?stability=${Date.now()}`);
const manifestUrl=pathToFileURL(path.join(repo,"數學會考作戰室/tools/v2-human-content/global-readiness/r1/runtime-preview/manifest.json"));
const syllabusUrl=pathToFileURL(path.join(repo,"數學會考作戰室/tools/v2-human-content/authoring/authoring-syllabus-lock-r2.json"));
const blueprintUrl=pathToFileURL(path.join(repo,"數學會考作戰室/human-runtime/release-blueprint-r1.json"));
const loadJson=async url=>JSON.parse(fs.readFileSync(fileURLToPath(url),"utf8"));
const runtime=await new HumanProductionRuntime({manifestUrl,syllabusLockUrl:syllabusUrl,blueprintUrl,expectedContentVersion:ex.contentVersion,loadJson}).initialize();
const units=await runtime.loadAllUnits();
const counts={units:units.length,skills:units.reduce((s,u)=>s+u.skills.length,0),lectures:runtime.manifest.lectureCount,mcQuestions:units.reduce((s,u)=>s+u.skills.reduce((n,k)=>n+k.mcQuestions.length,0),0),constructedResponses:units.reduce((s,u)=>s+u.skills.reduce((n,k)=>n+k.constructedResponses.length,0),0),figures:Object.keys(runtime.manifest.figureIndex||{}).length};
for(const [key,value] of Object.entries(ex.expectedCounts))assert(counts[key]===value,`count mismatch ${key}: ${counts[key]}/${value}`);
const rendered=[];
for(const unit of units)for(const skill of unit.skills){
  const lecture=runtime.lectureForApp(skill);assert(lecture.title&&lecture.summary&&lecture.examples.length>=2&&lecture.commonMistakes.length>=4,`lecture adapter ${skill.skillId}`);rendered.push(lecture);
  for(const q of skill.mcQuestions){const x=runtime.adaptMc(q);assert(x.id===q.questionId&&x.type==="mc"&&x.text&&x.choices.length===4&&Number.isInteger(x.answer)&&x.answer>=0&&x.answer<4,`MC adapter ${q.questionId}`);rendered.push(x)}
  for(const q of skill.constructedResponses){const x=runtime.adaptCr(q);assert(x.type==="cr"&&x.text&&x.steps.length&&x.rubric.length,`CR adapter ${q.questionId}`);rendered.push(x)}
}
const renderedText=JSON.stringify(rendered);
for(const fragment of [...plan.forbiddenVisibleFragments,...plan.forbiddenServedRuntimeMarkers])assert(!renderedText.includes(fragment),`forbidden rendered fragment: ${fragment}`);
const seeds=[1,2,3,11527,11528,20260712,999999,314159,271828,42,73,512,4096,65535,888888,123456];
const mockResults=[];
for(const level of [1,2,3])for(const seed of seeds){
  const one=await runtime.generateReleaseMock(seed,level),two=await runtime.generateReleaseMock(seed,level);
  const ids=one.questions.map(q=>q.id||q.questionId);assert(new Set(ids).size===27,`duplicate mock ids ${seed}/${level}`);
  assert(one.questions.filter(q=>q.type==="mc").length===25&&one.questions.filter(q=>q.type==="cr").length===2&&one.minutes===80,`mock shape ${seed}/${level}`);
  assert(assessmentSignature(one)===assessmentSignature(two),`mock nondeterministic ${seed}/${level}`);
  assert(one.blueprintContract.figureMcCount>=3,`mock figure count ${seed}/${level}`);
  mockResults.push({seed,level,signature:assessmentSignature(one),figureMcCount:one.blueprintContract.figureMcCount});
}
const quizResults=[];
for(const item of runtime.quizCatalog())for(const seed of [1,11527,11528,999999,42,73,512,4096]){
  const one=await runtime.generateUnitQuiz(item.v2UnitId,seed),two=await runtime.generateUnitQuiz(item.v2UnitId,seed);
  assert(one.questions.length===item.questionCount,`quiz count ${item.v2UnitId}/${seed}`);
  assert(assessmentSignature(one)===assessmentSignature(two),`quiz nondeterministic ${item.v2UnitId}/${seed}`);
  quizResults.push({unitId:item.v2UnitId,seed,count:one.questions.length,signature:assessmentSignature(one)});
}
const correctionResults=[];
for(const unit of units)for(const skill of unit.skills){
  const source=runtime.adaptMc(skill.mcQuestions[0]);
  const drill=await runtime.generateCorrectionDrill(source,`stability-${skill.skillId}`,1,[runtime.drillQuestionSignature(source)]);
  assert(drill.length===1&&drill[0].id!==source.id&&drill[0].skillId===source.skillId,`correction drill ${skill.skillId}`);
  correctionResults.push({skillId:skill.skillId,source:source.id,drill:drill[0].id});
}
const valid=await runtime.generateReleaseMock(11527,2);assert(runtime.restoreSavedPaper({exam:valid})===valid,"valid saved paper restore failed");
let invalidRejected=false;try{runtime.restoreSavedPaper({exam:{...valid,contentVersion:"wrong"}})}catch{invalidRejected=true}assert(invalidRejected,"invalid content version not rejected");
const out={status:"PASS_HUMAN_RUNTIME_NODE_STABILITY_R1",counts,mockValidationCount:mockResults.length,quizValidationCount:quizResults.length,correctionDrillValidationCount:correctionResults.length,mockResults,quizResults,correctionResults,invalidSavedPaperRejected:invalidRejected,visibleTextScanPassed:true,productionActivated:true,oldDatabaseDeletionAllowed:false};
writeJson(path.join(ev,"runtime-node-stability.json"),out);console.log(JSON.stringify({...out,mockResults:undefined,quizResults:undefined,correctionResults:undefined},null,2));
