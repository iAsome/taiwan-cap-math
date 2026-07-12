import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const slots=Array.from({length:12},(_,i)=>`s${String(i+1).padStart(3,'0')}`);
const locked=[
 ['s001','inequality-symbol','u07-basics',[]],['s002','inequality-solve-basic','u07-basics',['inequality-symbol']],
 ['s003','inequality-transposition','u07-basics',['inequality-solve-basic']],['s004','inequality-number-line','u07-basics',['inequality-transposition']],
 ['s005','inequality-sign-flip','u07-basics',['inequality-number-line']],['s006','inequality-integer-solutions','u07-solution-sets',['inequality-sign-flip']],
 ['s007','inequality-and-word','u07-solution-sets',['inequality-integer-solutions']],['s008','inequality-range','u07-solution-sets',['inequality-and-word']],
 ['s009','inequality-word-problem','u07-applications',['inequality-range']],['s010','inequality-reasonableness','u07-applications',['inequality-word-problem']],
 ['s011','inequality-budget','u07-applications',['inequality-reasonableness']],['s012','inequality-literacy','u07-literacy',['inequality-budget']]
];
const AUTH='CHATGPT_HUMAN_AUTHORED_R1';
const fail=(message)=>{console.error(JSON.stringify({status:'FAIL',unitId:'u07',message},null,2));process.exit(1)};
const readJson=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map((x,i)=>{try{return JSON.parse(x)}catch(e){fail(`${p}:${i+1}: invalid JSONL`)}});
const normalize=v=>Array.isArray(v)?v.map(normalize):(v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,normalize(v[k])])):v);
const hashRecord=r=>{const c=structuredClone(r);delete c.contentSha256;return crypto.createHash('sha256').update(JSON.stringify(normalize(c))).digest('hex')};
const normalizedText=t=>t.normalize('NFKC').replace(/\s+/gu,'').replace(/[，。！？、；：,.!?;:「」『』（）()]/gu,'').toLowerCase();
const structuralText=t=>normalizedText(t.replace(/[-−+]?\d+(?:\.\d+)?/gu,'<N>').replace(/[甲乙丙丁小華小明小美小安小杰]+/gu,'<NAME>').replace(/(元|公分|公斤|分鐘|小時|公里|公升|箱|件|份|包|本|枝|人|組|歲|度|GB|趟|桌|日)/giu,'<U>'));
const simp=/[这们让从时发应还开关间题数线实习过达边图总须读写错听说]/u;
const manifest=readJson('manifest/project-manifest.json');
if(manifest.unitId!=='u07'||manifest.lockedSkillCount!==12||manifest.productionActivationAllowed!==false) fail('project manifest identity or activation policy');
if(JSON.stringify(manifest.skills.map(s=>[s.slot,s.skillId,s.topicId,s.prerequisites]))!==JSON.stringify(locked)) fail('locked skills/order/prerequisites mismatch');
const isolation=readJson('manifest/legacy-content-isolation.json');
const isolationExpected={legacyContentImported:false,legacySemanticEvidenceAccepted:false,oldProductionRuntimeModified:false,deleteLegacyNow:false,finalRetirementRequired:true,productionActivationAllowed:false,oldContentUsedAsInspiration:false};
for(const [k,v] of Object.entries(isolationExpected)) if(isolation[k]!==v) fail(`legacy isolation ${k}`);
const allQ=[],allR=[],allCR=[],allL=[],allD=[];const figureRefs=new Set();
const totalDiff={basic:0,standard:0,advanced:0,literacy:0};const totalAns=[0,0,0,0];
const expectedIds=new Set(locked.map(x=>x[1]));
for(const [slot,skillId,topicId,prereqs] of locked){
 const base=`units/u07/${slot}`;const l=readJson(`${base}/lecture.json`);const q=readJsonl(`${base}/mc-questions.jsonl`);const r=readJsonl(`${base}/semantic-reviews.jsonl`);const cr=readJsonl(`${base}/constructed-response.jsonl`);const d=readJsonl(`${base}/drawing-specs.jsonl`);
 if(l.skillId!==skillId||l.topicId!==topicId||l.unitId!=='u07') fail(`${slot}: lecture identity`);
 if(l.contentAuthority!==AUTH||l.title.includes('、')||hashRecord(l)!==l.contentSha256) fail(`${slot}: lecture authority/title/hash`);
 if(!Array.isArray(l.learningOutcomes)||l.learningOutcomes.length<4||!Array.isArray(l.conceptNarrative)||l.conceptNarrative.length<4||l.workedExamples.length<4||l.commonMistakes.length<6||l.selfCheck.length<4) fail(`${slot}: lecture depth`);
 if(JSON.stringify(l.prerequisites.map(x=>x.skillId))!==JSON.stringify(prereqs)) fail(`${slot}: lecture prerequisites`);
 if(!l.lectureReview?.reviewNote||l.lectureReview.reviewNote.length<48||l.lectureReview.scopeCheck!=='junior-high CAP scope') fail(`${slot}: lecture review`);
 if(simp.test(JSON.stringify(l))) fail(`${slot}: simplified Chinese detected in lecture`);
 if(q.length!==12||r.length!==12||cr.length<2) fail(`${slot}: content counts`);
 const sd={basic:0,standard:0,advanced:0,literacy:0};const sa=[0,0,0,0];
 for(const item of q){
  if(item.type!=='mc'||item.unitId!=='u07'||item.skillId!==skillId||item.topicId!==topicId||item.contentAuthority!==AUTH) fail(`${item.questionId}: identity/authority`);
  if(item.choices.length!==4||new Set(item.choices).size!==4||item.optionAnalysis.length!==4) fail(`${item.questionId}: four unique choices`);
  if(hashRecord(item)!==item.contentSha256) fail(`${item.questionId}: content hash`);
  if(!Number.isInteger(item.answerIndex)||item.answerIndex<0||item.answerIndex>3) fail(`${item.questionId}: answer index range`);
  if(item.independentSolution?.result!==item.choices[item.answerIndex]||item.independentSolution.answerIndexVerified!==item.answerIndex||item.independentSolution.derivation.length<20) fail(`${item.questionId}: independent solution`);
  if(item.optionAnalysis.filter(x=>x.truth).length!==1||!item.optionAnalysis[item.answerIndex].truth) fail(`${item.questionId}: option truth`);
  for(let i=0;i<4;i++) if(item.optionAnalysis[i].choice!==item.choices[i]||!item.optionAnalysis[i].reason||item.optionAnalysis[i].reason.length<5) fail(`${item.questionId}: option analysis ${i}`);
  if(!item.givenConditions||!item.target||!item.prerequisiteCheck||!item.unitAndRoundingCheck||!item.ambiguityAndBoundaryAudit||!item.difficultyReason) fail(`${item.questionId}: audit fields`);
  if(item.difficulty==='literacy'&&(!item.literacyContextNecessity||item.literacyContextNecessity.length<18)) fail(`${item.questionId}: literacy necessity`);
  if(simp.test(JSON.stringify(item))) fail(`${item.questionId}: simplified Chinese detected`);
  const rv=r.filter(x=>x.questionId===item.questionId);if(rv.length!==1) fail(`${item.questionId}: semantic review cardinality`);
  const review=rv[0];
  if(review.contentSha256!==item.contentSha256||review.answerMatch!==true||review.uniqueCorrectAnswer!==true||review.reviewerDecision!=='pass') fail(`${item.questionId}: semantic state`);
  if(review.derivedAnswer!==item.choices[item.answerIndex]||review.storedAnswer!==item.choices[item.answerIndex]||review.independentSolution===item.explanation) fail(`${item.questionId}: review independence`);
  if(review.reviewerNote.length<80||Object.values(review.ambiguityChecks||{}).some(x=>typeof x!=='string'||x.length<4)) fail(`${item.questionId}: review evidence`);
  if(JSON.stringify(review.optionTruth)!==JSON.stringify(item.optionAnalysis.map(x=>x.truth))) fail(`${item.questionId}: review truth mismatch`);
  if(item.figureId) figureRefs.add(item.figureId);sd[item.difficulty]++;sa[item.answerIndex]++;totalDiff[item.difficulty]++;totalAns[item.answerIndex]++;
 }
 for(const k of Object.keys(sd)) if(sd[k]!==3) fail(`${slot}: difficulty ${k}=${sd[k]}`);if(sa.some(x=>x!==3)) fail(`${slot}: answer distribution ${sa}`);
 for(const item of cr){
  if(item.type!=='constructed-response'||item.unitId!=='u07'||item.skillId!==skillId||item.contentAuthority!==AUTH||hashRecord(item)!==item.contentSha256) fail(`${item.questionId}: CR identity/hash`);
  if(item.requiredWork.length<2||item.fullCreditSolution.length<2||item.reasoningSteps.length<2||item.commonErrors.length<2) fail(`${item.questionId}: CR depth`);
  if(item.rubric.length!==4||item.rubric.map(x=>x.score).sort().join(',')!=='0,1,2,3'||item.rubric.some(x=>x.criteria.length<16)) fail(`${item.questionId}: CR rubric`);
  if(!item.partialCreditRules||!item.followThroughPolicy||!item.unitAndNotationRules||!item.answerOnlyPolicy) fail(`${item.questionId}: CR scoring policies`);
  if(item.independentReview?.decision!=='pass'||!item.independentReview.derivedResult||item.independentReview.reviewNote.length<45) fail(`${item.questionId}: CR review`);
  if(item.figureId) figureRefs.add(item.figureId);if(simp.test(JSON.stringify(item))) fail(`${item.questionId}: simplified Chinese detected`);
 }
 for(const fig of d){
  if(fig.contentAuthority!==AUTH||hashRecord(fig)!==fig.contentSha256||!fig.altText||fig.altText.length<35||Object.keys(fig.drawingSpec||{}).length<10) fail(`${fig.figureId}: drawing depth/hash`);
  if(fig.figureReview?.decision!=='pass'||fig.figureReview.manualVisualInspection!==true||fig.figureReview.reviewNote.length<50) fail(`${fig.figureId}: figure review`);
  const sp=path.join(root,fig.svgPath);if(!fs.existsSync(sp)) fail(`${fig.figureId}: missing SVG`);const svg=fs.readFileSync(sp,'utf8');
  if(!svg.includes('<title')||!svg.includes('<desc')||!svg.includes('role="img"')) fail(`${fig.figureId}: SVG accessibility`);
  for(const token of fig.svgAssertions||[]) if(!svg.includes(token)) fail(`${fig.figureId}: missing SVG assertion ${token}`);
 }
 allL.push(l);allQ.push(...q);allR.push(...r);allCR.push(...cr);allD.push(...d);
}
if(allL.length!==12||allQ.length!==144||allR.length!==144||allCR.length!==24||allD.length!==3) fail('global content counts');
for(const k of Object.keys(totalDiff)) if(totalDiff[k]!==36) fail(`global difficulty ${k}`);if(totalAns.some(x=>x!==36)) fail(`global answer distribution ${totalAns}`);
const unique=(arr,label)=>{if(new Set(arr).size!==arr.length) fail(`duplicate ${label}`)};
unique(allQ.map(x=>x.questionId),'MC IDs');unique(allQ.map(x=>normalizedText(x.text)),'normalized MC prompts');unique(allCR.map(x=>x.questionId),'CR IDs');unique(allCR.map(x=>normalizedText(x.prompt)),'normalized CR prompts');unique(allL.map(x=>JSON.stringify(x.conceptNarrative)),'lecture bodies');unique(allD.map(x=>x.figureId),'figure IDs');unique(allR.map(x=>x.reviewerNote),'semantic reviewer notes');unique(allR.map(x=>x.independentSolution),'semantic independent solutions');
const structuralQ=new Map();for(const q of allQ){const f=structuralText(q.text);if(structuralQ.has(f)) fail(`near-identical MC prompts ${structuralQ.get(f)} and ${q.questionId}`);structuralQ.set(f,q.questionId)}
const structuralCR=new Map();for(const q of allCR){const f=structuralText(q.prompt);if(structuralCR.has(f)) fail(`near-identical CR prompts ${structuralCR.get(f)} and ${q.questionId}`);structuralCR.set(f,q.questionId)}
const svgFiles=fs.readdirSync(path.join(root,'figures/u07')).filter(x=>x.endsWith('.svg'));if(svgFiles.length!==3) fail(`SVG count ${svgFiles.length}`);
for(const f of figureRefs) if(!svgFiles.includes(`${f}.svg`)) fail(`unresolved figure ${f}`);
const contentManifest=readJson('manifest/content-sha256.json');if(contentManifest.recordCount!==183) fail('content hash manifest count');
const recordMap=new Map([...allL.map(x=>[x.lectureId,x.contentSha256]),...allQ.map(x=>[x.questionId,x.contentSha256]),...allCR.map(x=>[x.questionId,x.contentSha256]),...allD.map(x=>[x.figureId,x.contentSha256])]);
for(const e of contentManifest.records) if(recordMap.get(e.recordId)!==e.sha256) fail(`content manifest ${e.recordId}`);
const fileManifest=readJson('manifest/file-sha256.json');if(!Array.isArray(fileManifest.files)||fileManifest.files.length<75) fail('file manifest missing/too small');
for(const e of fileManifest.files){const p=path.join(root,e.path);if(!fs.existsSync(p)) fail(`missing hashed file ${e.path}`);const h=crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');if(h!==e.sha256) fail(`file hash ${e.path}`)}
const staging=path.join(root,'staging');let stagingPresent=fs.existsSync(staging),stagingModuleCount=0;
if(stagingPresent){const mods=fs.readdirSync(staging).filter(x=>/^u07-s\d{3}-human-content\.mjs$/.test(x));stagingModuleCount=mods.length;if(stagingModuleCount!==12) fail(`staging module count ${stagingModuleCount}`);const sm=readJson('staging/u07-batch-008-staging-manifest.json');if(sm.productionActivationAllowed!==false||sm.outputs.length!==12) fail('staging manifest')}
console.log(JSON.stringify({status:'PASS',unitId:'u07',batchId:'008-u07-complete',lockedSkillCount:12,lectureCount:12,mcQuestionCount:144,constructedResponseCount:24,semanticReviewCount:144,figureCount:3,difficultyCounts:totalDiff,answerIndexCounts:{0:totalAns[0],1:totalAns[1],2:totalAns[2],3:totalAns[3]},contentHashesVerified:true,fileManifestVerified:true,legacyIsolationVerified:true,questionSpecificReviewEvidenceVerified:true,skillSpecificLectureReviewVerified:true,duplicateAndNearDuplicateChecksVerified:true,svgGeometryAssertionsVerified:true,stagingPresent,stagingModuleCount,productionActivationAllowed:false},null,2));
