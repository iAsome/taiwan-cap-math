import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const AUTH='CHATGPT_HUMAN_AUTHORED_R1';
const skillIds=['quadratic-factor','quadratic-completing-square','quadratic-formula','quadratic-discriminant','quadratic-square-root-method','quadratic-standard-form','quadratic-solve-by-factoring','quadratic-complete-square-basic','quadratic-roots-count','quadratic-check-root','quadratic-formula-basic','quadratic-word-problem','quadratic-area-problem','quadratic-consecutive-product','quadratic-literacy'];
const prereqs=[[],['quadratic-factor'],['quadratic-completing-square'],['quadratic-formula'],['quadratic-discriminant'],['quadratic-square-root-method'],['quadratic-standard-form'],['quadratic-solve-by-factoring'],['quadratic-complete-square-basic'],['quadratic-roots-count'],['quadratic-check-root'],['quadratic-formula-basic'],['quadratic-word-problem'],['quadratic-area-problem'],['quadratic-consecutive-product']];
const slots=Array.from({length:15},(_,i)=>`s${String(i+1).padStart(3,'0')}`);
const fail=m=>{throw new Error(m)};
const readJson=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
const normalize=v=>Array.isArray(v)?v.map(normalize):(v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,normalize(v[k])])):v);
const hashRecord=(r,field)=>{const c=structuredClone(r);delete c[field];delete c.contentSha256;delete c.reviewSha256;return crypto.createHash('sha256').update(JSON.stringify(normalize(c))).digest('hex')};
const normText=t=>t.normalize('NFKC').replace(/[0-9０-９]+(?:[.．][0-9０-９]+)?/g,'<N>').replace(/[A-Za-z]+/g,'<A>').replace(/\s+/g,'').toLowerCase();
const allQ=[],allR=[],allCR=[],allL=[],allD=[];const ids=new Set(),prompts=new Set(),crPrompts=new Set(),figIds=new Set(),figureRefs=new Set();
const diff={basic:0,standard:0,advanced:0,literacy:0};const ans=[0,0,0,0];
for(let si=0;si<slots.length;si++){
 const slot=slots[si],base=`units/u13/${slot}`;
 const l=readJson(`${base}/lecture.json`),q=readJsonl(`${base}/mc-questions.jsonl`),r=readJsonl(`${base}/semantic-reviews.jsonl`),cr=readJsonl(`${base}/constructed-response.jsonl`),d=readJsonl(`${base}/drawing-specs.jsonl`);
 if(l.skillId!==skillIds[si]||l.lockedOrder!==si+1) fail(`${slot}: locked skill/order mismatch`);
 if(JSON.stringify(l.prerequisites.map(x=>x.skillId))!==JSON.stringify(prereqs[si])) fail(`${slot}: prerequisite mismatch`);
 if(q.length!==12||r.length!==12||cr.length!==2) fail(`${slot}: count mismatch`);
 if(l.unitId!=='u13'||l.contentAuthority!==AUTH||l.title.includes('、')) fail(`${slot}: lecture authority/title`);
 if(l.workedExamples.length<4||l.commonMistakes.length<6||l.learningOutcomes.length<3||l.nonApplicableCases.length<3) fail(`${slot}: lecture depth`);
 if(!l.lectureReview?.reviewNote||l.lectureReview.reviewNote.length<45) fail(`${slot}: weak lecture review`);
 if(hashRecord(l,'contentSha256')!==l.contentSha256) fail(`${slot}: lecture hash`);
 const perDiff={basic:0,standard:0,advanced:0,literacy:0},perAns=[0,0,0,0];
 for(const item of q){
  if(item.unitId!=='u13'||item.skillId!==skillIds[si]||item.type!=='mc'||item.contentAuthority!==AUTH) fail(`${item.questionId}: identity/authority`);
  if(item.choices.length!==4||new Set(item.choices).size!==4||item.optionAnalysis.length!==4) fail(`${item.questionId}: choice shape`);
  if(item.answerIndex<0||item.answerIndex>3||item.optionAnalysis.filter(x=>x.truth).length!==1||!item.optionAnalysis[item.answerIndex].truth) fail(`${item.questionId}: unique answer`);
  if(item.optionAnalysis.some((x,i)=>x.choice!==item.choices[i]||!x.reason||x.reason.length<5)) fail(`${item.questionId}: option analysis`);
  if(!item.givenConditions||!item.target||!item.explanation||item.steps.length<2||!item.ambiguityAndBoundaryAudit||!item.difficultyReason) fail(`${item.questionId}: evidence fields`);
  if(item.difficulty==='literacy'&&(!item.literacyContextNecessity||item.literacyContextNecessity.length<25)) fail(`${item.questionId}: literacy necessity`);
  if(hashRecord(item,'contentSha256')!==item.contentSha256) fail(`${item.questionId}: content hash`);
  if(ids.has(item.questionId)||prompts.has(item.text)) fail(`${item.questionId}: duplicate id or prompt`);ids.add(item.questionId);prompts.add(item.text);
  const review=r.find(x=>x.questionId===item.questionId);if(!review) fail(`${item.questionId}: missing review`);
  if(review.contentSha256!==item.contentSha256||review.reviewerDecision!=='pass'||!review.answerMatch||!review.uniqueCorrectAnswer) fail(`${item.questionId}: review state`);
  if(hashRecord(review,'reviewSha256')!==review.reviewSha256) fail(`${item.questionId}: review hash`);
  if(review.independentSolution===item.explanation||review.independentSolution.length<15||review.reviewerNote.length<100) fail(`${item.questionId}: independent review`);
  if(review.derivedAnswer!==item.choices[item.answerIndex]||JSON.stringify(review.optionTruth)!==JSON.stringify(item.optionAnalysis.map(x=>x.truth))) fail(`${item.questionId}: review answer mismatch`);
  if(Object.values(review.ambiguityChecks||{}).some(x=>typeof x!=='string'||x.length<25)) fail(`${item.questionId}: ambiguity evidence`);
  if(item.figureId) figureRefs.add(item.figureId);
  perDiff[item.difficulty]++;perAns[item.answerIndex]++;diff[item.difficulty]++;ans[item.answerIndex]++;allQ.push(item);allR.push(review);
 }
 for(const v of Object.values(perDiff)) if(v!==3) fail(`${slot}: per-skill difficulty distribution`);
 if(perAns.some(v=>v!==3)) fail(`${slot}: per-skill answer distribution ${perAns}`);
 for(const item of cr){
  if(item.unitId!=='u13'||item.skillId!==skillIds[si]||item.type!=='constructed-response'||item.contentAuthority!==AUTH) fail(`${item.questionId}: CR identity`);
  if(item.rubric.length!==4||item.rubric.map(x=>x.score).sort().join(',')!=='0,1,2,3') fail(`${item.questionId}: CR rubric`);
  if(item.requiredWork.length<2||item.fullCreditSolution.length<2||item.reasoningSteps.length<2||item.commonErrors.length<2) fail(`${item.questionId}: CR depth`);
  if(!item.followThroughPolicy||!item.answerOnlyPolicy||!item.unitNotationRules?.length||item.independentReview?.decision!=='pass') fail(`${item.questionId}: CR policy/review`);
  if(hashRecord(item,'contentSha256')!==item.contentSha256) fail(`${item.questionId}: CR hash`);
  if(ids.has(item.questionId)||crPrompts.has(item.prompt)) fail(`${item.questionId}: duplicate CR`);ids.add(item.questionId);crPrompts.add(item.prompt);if(item.figureId)figureRefs.add(item.figureId);allCR.push(item);
 }
 for(const item of d){
  if(figIds.has(item.figureId)||item.contentAuthority!==AUTH) fail(`${item.figureId}: duplicate/authority`);figIds.add(item.figureId);
  if(!item.altText||item.altText.length<35||Object.keys(item.drawingSpec||{}).length<9||item.notToScale!==true) fail(`${item.figureId}: drawing depth`);
  if(item.figureReview?.decision!=='pass'||item.figureReview?.manualVisualInspection!=='pass'||item.figureReview.reviewNote.length<45) fail(`${item.figureId}: figure review`);
  if(hashRecord(item,'contentSha256')!==item.contentSha256) fail(`${item.figureId}: figure hash`);
  const sp=path.join(root,item.svgPath);if(!fs.existsSync(sp))fail(`${item.figureId}: missing SVG`);const svg=fs.readFileSync(sp,'utf8');
  for(const tok of item.svgAssertions)if(!svg.includes(tok))fail(`${item.figureId}: SVG assertion ${tok}`);
  if(!svg.includes('<title')||!svg.includes('<desc')||!svg.includes('role="img"'))fail(`${item.figureId}: accessibility`);allD.push(item);
 }
 allL.push(l);
}
if(allL.length!==15||allQ.length!==180||allR.length!==180||allCR.length!==30||allD.length!==4)fail('global counts');
for(const [k,v] of Object.entries(diff))if(v!==45)fail(`difficulty ${k}=${v}`);if(ans.some(v=>v!==45))fail(`answer ${ans}`);
if(new Set(allR.map(x=>x.independentSolution)).size!==180||new Set(allR.map(x=>x.reviewerNote)).size!==180||new Set(allR.map(x=>x.difficultyReason)).size!==180)fail('repeated MC review evidence');
if(new Set(allL.map(x=>JSON.stringify(x.conceptNarrative))).size!==15||new Set(allL.map(x=>x.lectureReview.reviewNote)).size!==15)fail('repeated lecture bodies/reviews');
if(new Set(allCR.map(x=>JSON.stringify(x.rubric))).size!==30)fail('repeated CR rubrics');
const normalized=[...allQ.map(x=>normText(x.text)),...allCR.map(x=>normText(x.prompt))];
const freq=new Map();for(const n of normalized)freq.set(n,(freq.get(n)||0)+1);if([...freq.values()].some(v=>v>1))fail('normalized number/name/unit variant duplicate');
for(const ref of figureRefs)if(!figIds.has(ref))fail(`unresolved figure ${ref}`);if(figIds.size!==4)fail('figure count/id');
const isolation=readJson('manifest/legacy-content-isolation.json');
if(isolation.legacyContentImported||isolation.legacySemanticEvidenceAccepted||isolation.oldProductionRuntimeModified||isolation.deleteLegacyNow||!isolation.finalRetirementRequired||isolation.productionActivationAllowed)fail('legacy isolation');
const manifest=readJson('manifest/project-manifest.json');if(manifest.productionActivationAllowed||manifest.expectedBaseHead!=='__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__')fail('manifest activation/head');
const forbiddenSimplified=/[这为与个从后里会还发应对将过实术问题数线长门开关样经总]/u; // applied only to titles to avoid mathematical characters with shared forms
for(const l of allL)if(forbiddenSimplified.test(l.title))fail(`${l.lectureId}: simplified title character`);
const fm=readJson('manifest/file-sha256.json');for(const e of fm.files){const p=path.join(root,e.path);if(!fs.existsSync(p))fail(`missing hashed file ${e.path}`);const h=crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');if(h!==e.sha256)fail(`file hash ${e.path}`)}
const staging=path.join(root,'staging');const stagingPresent=fs.existsSync(staging);let emittedModuleCount=0;
if(stagingPresent){const files=fs.readdirSync(staging).filter(x=>x.endsWith('.mjs'));emittedModuleCount=files.length;if(emittedModuleCount!==16)fail(`staging module count ${emittedModuleCount}`);for(const slot of slots)if(!files.includes(`u13-${slot}.mjs`))fail(`missing staged ${slot}`);if(!files.includes('u13-index.mjs'))fail('missing staged index');}
console.log(JSON.stringify({status:'PASS',unitId:'u13',lockedSkillCount:15,lectureCount:15,mcQuestionCount:180,constructedResponseCount:30,semanticReviewCount:180,figureCount:4,difficultyCounts:diff,answerIndexCounts:ans,contentHashesVerified:true,fileManifestVerified:true,questionSpecificReviewEvidenceVerified:true,skillSpecificLectureReviewVerified:true,svgAssertionsVerified:true,legacyIsolationVerified:true,localDuplicateScanVerified:true,crossUnitDuplicateScanPending:true,stagingPresent,emittedModuleCount,productionActivationAllowed:false},null,2));
