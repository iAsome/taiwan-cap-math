import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const slots=Array.from({length:12},(_,i)=>`s${String(i+1).padStart(3,'0')}`);
const expectedSkills=[
'coordinate-point-reading','coordinate-quadrant','coordinate-axis-points','coordinate-plot-description',
'coordinate-translation','coordinate-horizontal-vertical-distance','coordinate-rectangle-area',
'coordinate-linear-equation-graph','coordinate-point-on-line','coordinate-intercepts',
'coordinate-line-intersection','coordinate-literacy-context'];
const fail=(message)=>{throw new Error(message)};
const readJson=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map((line,i)=>{
  try{return JSON.parse(line)}catch(e){fail(`${p}:${i+1} invalid JSONL`)};
});
const normalize=v=>Array.isArray(v)?v.map(normalize):(v&&typeof v==='object'
  ?Object.fromEntries(Object.keys(v).sort().map(k=>[k,normalize(v[k])])):v);
const hashRecord=r=>{const c=structuredClone(r);delete c.contentSha256;
 return crypto.createHash('sha256').update(JSON.stringify(normalize(c))).digest('hex')};
const skeleton=t=>t.normalize('NFKC').replace(/-?\d+(?:\/\d+)?(?:\.\d+)?/g,'#')
 .replace(/\b[A-Z]\b/g,'點').replace(/[，。？！、；：「」『』（）()\s]/g,'');
const allQ=[],allR=[],allCR=[],allL=[],allD=[];
const ids=new Set(), promptExact=new Set(), promptSkeleton=new Set(), crPrompts=new Set();
const diff={basic:0,standard:0,advanced:0,literacy:0}, ans=[0,0,0,0];
const bannedSimplified=/[这们为后发个么还让从与国会学数线题图点应开门东车书长边轴标区际]/u;
const authority='CHATGPT_HUMAN_AUTHORED_R1';

const legacy=readJson('manifest/legacy-content-isolation.json');
for(const [k,v] of Object.entries({
 legacyContentImported:false,legacySemanticEvidenceAccepted:false,oldProductionRuntimeModified:false,
 deleteLegacyNow:false,finalRetirementRequired:true,productionActivationAllowed:false
})) if(legacy[k]!==v) fail(`legacy isolation ${k}`);

for(let si=0;si<slots.length;si++){
 const slot=slots[si],base=`units/u05/${slot}`;
 const l=readJson(`${base}/lecture.json`);
 const q=readJsonl(`${base}/mc-questions.jsonl`);
 const r=readJsonl(`${base}/semantic-reviews.jsonl`);
 const cr=readJsonl(`${base}/constructed-response.jsonl`);
 const d=readJsonl(`${base}/drawing-specs.jsonl`);
 if(l.unitId!=='u05'||l.skillId!==expectedSkills[si]) fail(`${slot} lecture skill lock`);
 if(l.title.includes('、')) fail(`${slot} lecture title forbidden dunhao`);
 if(l.contentAuthority!==authority||l.replacementPolicy!=='REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION') fail(`${slot} lecture authority`);
 if(hashRecord(l)!==l.contentSha256) fail(`${slot} lecture content hash`);
 if(!Array.isArray(l.learningOutcomes)||l.learningOutcomes.length<4||l.workedExamples.length<4||l.commonMistakes.length<5) fail(`${slot} lecture depth`);
 if(!l.lectureReview?.reviewNote||l.lectureReview.reviewNote.length<45) fail(`${slot} lecture review`);
 if(!l.accessibilityNote||!l.connections?.previous||!Array.isArray(l.connections?.next)) fail(`${slot} lecture connections/accessibility`);
 if(bannedSimplified.test(JSON.stringify(l))) fail(`${slot} lecture simplified Chinese character`);
 if(q.length!==12||r.length!==12||cr.length!==2||d.length!==0) fail(`${slot} content count`);
 const perDiff={basic:0,standard:0,advanced:0,literacy:0},perAns=[0,0,0,0];
 for(const item of q){
   if(item.unitId!=='u05'||item.skillId!==expectedSkills[si]||item.type!=='mc') fail(`${item.questionId} identity`);
   if(item.contentAuthority!==authority||item.replacementPolicy!=='REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION') fail(`${item.questionId} authority`);
   if(hashRecord(item)!==item.contentSha256) fail(`${item.questionId} content hash`);
   if(!/^u05-s\d{3}-v\d{3}$/.test(item.questionId)||ids.has(item.questionId)) fail(`${item.questionId} duplicate/bad id`);
   ids.add(item.questionId);
   if(item.choices.length!==4||new Set(item.choices).size!==4||item.optionAnalysis.length!==4) fail(`${item.questionId} choices`);
   if(item.answerIndex<0||item.answerIndex>3) fail(`${item.questionId} answer index`);
   const truths=item.optionAnalysis.map((x,i)=>{
     if(x.choice!==item.choices[i]||typeof x.reason!=='string'||x.reason.length<4) fail(`${item.questionId} option analysis ${i}`);
     return x.truth;
   });
   if(truths.filter(Boolean).length!==1||!truths[item.answerIndex]) fail(`${item.questionId} unique truth`);
   for(const f of ['independentSolution','explanation','ambiguityBoundaryAudit','difficultyReason','prerequisiteCheck','unitCheck','roundingCheck'])
     if(typeof item[f]!=='string'||item[f].length<5) fail(`${item.questionId} weak ${f}`);
   if(item.independentSolution.length<12||item.steps.length<2) fail(`${item.questionId} independent evidence`);
   if(item.difficulty==='literacy'&&(!item.literacyContextNecessity||item.literacyContextNecessity.length<25)) fail(`${item.questionId} literacy necessity`);
   if(item.literacyContextNecessity!==null&&item.literacyContextNecessity.length<15) fail(`${item.questionId} weak optional literacy note`);
   if(promptExact.has(item.text)) fail(`${item.questionId} duplicate exact prompt`);
   promptExact.add(item.text);
   const sk=skeleton(item.text);
   if(promptSkeleton.has(sk)) fail(`${item.questionId} number/name-swapped prompt skeleton`);
   promptSkeleton.add(sk);
   if(bannedSimplified.test(JSON.stringify(item))) fail(`${item.questionId} simplified Chinese character`);
   const rv=r.find(x=>x.questionId===item.questionId);
   if(!rv) fail(`${item.questionId} missing semantic review`);
   if(rv.contentSha256!==item.contentSha256||!rv.answerMatch||!rv.uniqueCorrectAnswer||rv.reviewerDecision!=='pass') fail(`${item.questionId} review state`);
   if(rv.independentSolution!==item.independentSolution) fail(`${item.questionId} review independent mismatch`);
   if(rv.derivedAnswer!==item.choices[item.answerIndex]||rv.storedAnswer!==item.choices[item.answerIndex]) fail(`${item.questionId} review answer mismatch`);
   if(JSON.stringify(rv.optionTruth)!==JSON.stringify(truths)) fail(`${item.questionId} review truths`);
   if(!rv.reviewerNote||rv.reviewerNote.length<120||Object.values(rv.ambiguityChecks||{}).some(x=>typeof x!=='string'||x.length<5)) fail(`${item.questionId} review evidence`);
   perDiff[item.difficulty]++;diff[item.difficulty]++;
   perAns[item.answerIndex]++;ans[item.answerIndex]++;
 }
 for(const k of Object.keys(perDiff)) if(perDiff[k]!==3) fail(`${slot} difficulty ${k}:${perDiff[k]}`);
 if(perAns.some(v=>v!==3)) fail(`${slot} answer distribution ${perAns}`);
 for(const item of cr){
   if(item.unitId!=='u05'||item.skillId!==expectedSkills[si]||item.type!=='constructed-response') fail(`${item.questionId} CR identity`);
   if(item.contentAuthority!==authority||item.replacementPolicy!=='REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION') fail(`${item.questionId} CR authority`);
   if(hashRecord(item)!==item.contentSha256) fail(`${item.questionId} CR hash`);
   if(ids.has(item.questionId)) fail(`${item.questionId} duplicate id`);ids.add(item.questionId);
   const scores=item.rubric.map(x=>x.score).sort().join(',');
   if(item.rubric.length!==4||scores!=='0,1,2,3') fail(`${item.questionId} rubric`);
   for(const f of ['followThroughPolicy','unitAndNotationRules','answerOnlyPolicy'])
     if(typeof item[f]!=='string'||item[f].length<20) fail(`${item.questionId} weak ${f}`);
   if(item.requiredWork.length<2||item.fullCreditSolution.length<2||item.commonErrors.length<2) fail(`${item.questionId} depth`);
   if(item.independentReview?.decision!=='pass'||!item.independentReview.derivedResult||!item.independentReview.ambiguity) fail(`${item.questionId} independent review`);
   if(bannedSimplified.test(JSON.stringify(item))) fail(`${item.questionId} CR simplified Chinese character`);
   const sk=skeleton(item.prompt);if(crPrompts.has(sk)) fail(`${item.questionId} duplicate CR skeleton`);crPrompts.add(sk);
 }
 allL.push(l);allQ.push(...q);allR.push(...r);allCR.push(...cr);allD.push(...d);
}
if(allL.length!==12||allQ.length!==144||allR.length!==144||allCR.length!==24||allD.length!==0) fail('global counts');
for(const [k,v] of Object.entries(diff)) if(v!==36) fail(`difficulty ${k}:${v}`);
if(ans.some(v=>v!==36)) fail(`answer distribution ${ans}`);
if(new Set(allR.map(x=>x.reviewerNote)).size!==144) fail('duplicate reviewer notes');
if(new Set(allR.map(x=>x.independentSolution)).size!==144) fail('duplicate independent solutions');
if(new Set(allL.map(x=>x.lectureReview.reviewNote)).size!==12) fail('duplicate lecture reviews');
if(fs.existsSync(path.join(root,'figures/u05'))){
 const svgs=fs.readdirSync(path.join(root,'figures/u05')).filter(x=>x.endsWith('.svg'));
 if(svgs.length!==0) fail(`unexpected SVG count ${svgs.length}`);
}
const contentManifest=readJson('manifest/content-sha256.json');
if(contentManifest.recordCount!==180||contentManifest.records.length!==180) fail('content manifest count');
for(const rec of contentManifest.records){
 const source=[...allL,...allQ,...allCR].find(x=>(x.lectureId||x.questionId)===rec.id);
 if(!source||source.contentSha256!==rec.sha256) fail(`content manifest ${rec.id}`);
}
const fileManifest=readJson('manifest/file-sha256.json');
for(const entry of fileManifest.files){
 const p=path.join(root,entry.path);if(!fs.existsSync(p)) fail(`missing hashed file ${entry.path}`);
 const h=crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
 if(h!==entry.sha256) fail(`file hash ${entry.path}`);
}
const actualFiles=[];
const walk=d=>{for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);
 if(e.isDirectory()){if(e.name==='staging')continue;walk(p)}else{
   const rel=path.relative(root,p).replaceAll('\\','/');
   if(rel!=='manifest/file-sha256.json') actualFiles.push(rel);
 }}};
walk(root);actualFiles.sort();
const listed=fileManifest.files.map(x=>x.path).sort();
if(JSON.stringify(actualFiles)!==JSON.stringify(listed)) fail('file manifest coverage');
let stagingVerified=false,emittedModuleCount=0;
const staging=path.join(root,'staging');
if(fs.existsSync(staging)){
 const mods=fs.readdirSync(staging).filter(x=>/^u05-s\d{3}-human-content\.mjs$/.test(x));
 const sm=readJson('staging/u05-batch-006-staging-manifest.json');
 if(mods.length!==12||sm.outputs.length!==12||sm.productionActivationAllowed!==false) fail('staging output');
 for(const out of sm.outputs){const p=path.join(root,out.path);const h=crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');if(h!==out.sha256)fail(`staging hash ${out.path}`)}
 stagingVerified=true;emittedModuleCount=12;
}
console.log(JSON.stringify({status:'PASS',unitId:'u05',lockedSkillCount:12,lectureCount:12,
 mcQuestionCount:144,constructedResponseCount:24,semanticReviewCount:144,figureCount:0,
 difficultyCounts:diff,answerIndexCounts:ans,contentHashesVerified:true,fileManifestVerified:true,
 legacyIsolationVerified:true,questionSpecificReviewEvidenceVerified:true,
 skillSpecificLectureReviewVerified:true,normalizedPromptUniquenessVerified:true,
 productionActivationAllowed:false,stagingVerified,emittedModuleCount},null,2));
