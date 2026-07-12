import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url)); const root=path.resolve(here,'..');
const expected=[
 ['s001','u17-parallel','parallel-angle'],['s002','u17-parallel','parallel-properties'],['s003','u17-parallel','parallel-proof-basic'],['s004','u17-parallel','parallelogram-properties'],['s005','u17-parallel','parallel-alternate-interior'],['s006','u17-parallel','parallel-corresponding'],['s007','u17-parallel','parallel-consecutive-interior'],['s008','u17-parallel','parallelogram-opposite-sides'],['s009','u17-parallel','parallelogram-diagonal'],['s010','u17-parallel','parallel-lines-distance'],['s011','u17-quadrilaterals','special-quadrilateral'],['s012','u17-quadrilaterals','quadrilateral-area'],['s013','u17-quadrilaterals','rhombus-properties'],['s014','u17-quadrilaterals','rectangle-square-properties'],['s015','u17-quadrilaterals','trapezoid-area'],['s016','u17-quadrilaterals','quadrilateral-angle-sum'],['s017','u17-literacy','quadrilateral-literacy'],['s018','u17-proof','quadrilateral-proof-basic']];
const readJson=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map((x,i)=>{try{return JSON.parse(x)}catch(e){throw new Error(`${p}:${i+1} invalid JSONL`)}});
const norm=v=>Array.isArray(v)?v.map(norm):(v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,norm(v[k])])):v);
const hashRecord=r=>{const c=structuredClone(r);delete c.contentSha256;return crypto.createHash('sha256').update(JSON.stringify(norm(c))).digest('hex')};
const fail=m=>{throw new Error(m)}; const assert=(x,m)=>{if(!x)fail(m)};
const authority='CHATGPT_HUMAN_AUTHORED_R1'; const allQ=[],allR=[],allCR=[],allL=[],allD=[]; const refs=new Set();
const diff={basic:0,standard:0,advanced:0,literacy:0},ans=[0,0,0,0];
const ids=new Set(), prompts=new Map(), skeletons=new Map();
const normalizePrompt=s=>s.normalize('NFKC').toLowerCase().replace(/\s+/g,'').replace(/[，。！？、；：,.!?;:（）()「」『』]/g,'');
const skeleton=s=>normalizePrompt(s).replace(/\d+(?:\.\d+)?/g,'#').replace(/[Ａ-ＺA-Z]/g,'L');
for(const [slot,topicId,skillId] of expected){
 const base=`units/u17/${slot}`; const l=readJson(`${base}/lecture.json`),q=readJsonl(`${base}/mc-questions.jsonl`),r=readJsonl(`${base}/semantic-reviews.jsonl`),cr=readJsonl(`${base}/constructed-response.jsonl`),d=readJsonl(`${base}/drawing-specs.jsonl`);
 assert(l.unitId==='u17'&&l.topicId===topicId&&l.skillId===skillId,`${slot}: lecture identity`);
 assert(q.length===12,`${slot}: expected 12 MC`); assert(r.length===12,`${slot}: expected 12 reviews`); assert(cr.length>=2,`${slot}: expected >=2 CR`); assert(d.length===1,`${slot}: expected one figure spec`);
 assert(l.learningOutcomes?.length>=3&&l.glossary?.length>=4&&l.conceptNarrative?.length>=3&&l.formulas?.length>=2&&l.method?.length>=4&&l.workedExamples?.length>=4&&l.commonMistakes?.length>=5,`${slot}: lecture depth`);
 assert(l.lectureReview?.mathematicalCorrectness==='pass'&&l.lectureReview?.reviewNote?.length>24,`${slot}: lecture review`);
 assert(!l.title.includes('、')&&!l.lockedTitle.includes('、'),`${slot}: title punctuation`); assert(l.contentAuthority===authority,`${slot}: lecture authority`); assert(hashRecord(l)===l.contentSha256,`${slot}: lecture hash`);
 const localDiff={basic:0,standard:0,advanced:0,literacy:0},localAns=[0,0,0,0];
 for(const item of q){
  assert(!ids.has(item.questionId),`${item.questionId}: duplicate ID`);ids.add(item.questionId);
  assert(item.unitId==='u17'&&item.topicId===topicId&&item.skillId===skillId,`${item.questionId}: identity`); assert(item.type==='mc'&&item.choices?.length===4&&item.optionAnalysis?.length===4,`${item.questionId}: MC shape`);
  assert(new Set(item.choices).size===4,`${item.questionId}: duplicate choices`); assert(Number.isInteger(item.answerIndex)&&item.answerIndex>=0&&item.answerIndex<4,`${item.questionId}: answer index`);
  assert(item.optionAnalysis.filter(x=>x.truth).length===1&&item.optionAnalysis[item.answerIndex].truth,`${item.questionId}: unique truth`);
  assert(item.optionAnalysis.every((x,i)=>x.choice===item.choices[i]&&typeof x.reason==='string'&&x.reason.length>24),`${item.questionId}: option analysis`);
  assert(item.independentSolution&&item.independentSolution.length>10&&item.steps?.length>=2,`${item.questionId}: independent solution`);
  assert(item.givenConditions?.length&&item.target&&item.misconceptionTarget&&item.prerequisiteCheck&&item.unitCheck&&item.roundingCheck&&item.ambiguityAudit&&item.boundaryAudit&&item.difficultyReason,`${item.questionId}: required audit fields`);
  assert(item.contentAuthority===authority&&item.replacementMarker,`${item.questionId}: authority`); assert(hashRecord(item)===item.contentSha256,`${item.questionId}: hash`);
  if(item.difficulty==='literacy')assert(item.literacyContextNecessity?.length>20,`${item.questionId}: literacy necessity`);
  const review=r.find(x=>x.questionId===item.questionId); assert(review,`${item.questionId}: missing review`); assert(review.contentSha256===item.contentSha256&&review.answerMatch&&review.uniqueCorrectAnswer&&review.reviewerDecision==='pass',`${item.questionId}: review state`);
  assert(review.independentSolution!==item.explanation&&review.reviewerNote?.length>90,`${item.questionId}: independent review evidence`); assert(review.derivedAnswer===item.choices[item.answerIndex]&&review.storedAnswer===item.choices[item.answerIndex],`${item.questionId}: answer mismatch`);
  assert(JSON.stringify(review.optionTruth)===JSON.stringify(item.optionAnalysis.map(x=>x.truth)),`${item.questionId}: option truth mismatch`);
  assert(Object.values(review.ambiguityChecks||{}).every(x=>typeof x==='string'&&x.length>18),`${item.questionId}: ambiguity evidence`);
  const np=normalizePrompt(item.text); assert(!prompts.has(np),`${item.questionId}: duplicate normalized prompt with ${prompts.get(np)}`);prompts.set(np,item.questionId);
  const sk=skeleton(item.text); if(skeletons.has(sk))fail(`${item.questionId}: numeric/name-only near duplicate with ${skeletons.get(sk)}`); skeletons.set(sk,item.questionId);
  if(item.figureId){refs.add(item.figureId); assert(item.drawingSpecRef,`${item.questionId}: missing drawing ref`)}
  localDiff[item.difficulty]++;diff[item.difficulty]++;localAns[item.answerIndex]++;ans[item.answerIndex]++;
 }
 for(const k of Object.keys(localDiff))assert(localDiff[k]===3,`${slot}: difficulty ${k}=${localDiff[k]}`); assert(localAns.every(x=>x===3),`${slot}: answer positions ${localAns}`);
 for(const item of cr){
  assert(!ids.has(item.questionId),`${item.questionId}: duplicate ID`);ids.add(item.questionId); assert(item.unitId==='u17'&&item.topicId===topicId&&item.skillId===skillId,`${item.questionId}: identity`);
  assert(item.standardSolution?.length>=2&&item.reasoningSteps?.length>=2&&item.rubric?.length===4,`${item.questionId}: CR depth`); assert([...item.rubric].map(x=>x.score).sort().join(',')==='0,1,2,3',`${item.questionId}: rubric scores`);
  assert(new Set(item.rubric.map(x=>x.criteria)).size===4&&item.partialCreditRules?.length>=2&&item.followThroughPolicy&&item.unitNotationRules&&item.answerOnlyPolicy,`${item.questionId}: scoring policy`);
  assert(item.independentReview?.decision==='pass'&&item.independentReview?.recalculation?.length>20,`${item.questionId}: independent review`); assert(item.contentAuthority===authority&&hashRecord(item)===item.contentSha256,`${item.questionId}: authority/hash`);
  if(item.figureId){refs.add(item.figureId);assert(item.drawingSpecRef,`${item.questionId}: missing drawing ref`)}
 }
 for(const fig of d){
  assert(!ids.has(fig.figureId),`${fig.figureId}: duplicate figure ID`);ids.add(fig.figureId); assert(fig.contentAuthority===authority&&hashRecord(fig)===fig.contentSha256,`${fig.figureId}: authority/hash`);
  assert(fig.canvas?.viewBox==='0 0 400 300'&&Object.keys(fig.drawingSpec||{}).length>=10,`${fig.figureId}: drawing specification`); assert(fig.altText&&fig.svgTitle&&fig.svgDesc&&fig.mobileReadability&&fig.answerLeakageReview,`${fig.figureId}: accessibility/review`);
  assert(fig.figureReview?.decision==='pass'&&fig.figureReview?.manualRenderedInspection===true,`${fig.figureId}: figure review`);
  const p=path.join(root,fig.svgPath); assert(fs.existsSync(p),`${fig.figureId}: missing SVG`); const svg=fs.readFileSync(p,'utf8'); assert(svg.includes('<title')&&svg.includes('<desc')&&svg.includes('role="img"'),`${fig.figureId}: SVG accessibility`); for(const token of fig.svgAssertions)assert(svg.includes(token),`${fig.figureId}: missing SVG token ${token}`);
 }
 allQ.push(...q);allR.push(...r);allCR.push(...cr);allL.push(l);allD.push(...d);
}
assert(allQ.length===216&&allR.length===216&&allCR.length===36&&allL.length===18&&allD.length===18,'global counts');
for(const [k,v] of Object.entries(diff))assert(v===54,`global difficulty ${k}=${v}`);assert(ans.every(x=>x===54),`global answers ${ans}`);
assert(new Set(allR.map(x=>x.reviewerNote)).size===216,'duplicate reviewer notes'); assert(new Set(allR.map(x=>x.independentSolution)).size===216,'duplicate independent reviews'); assert(new Set(allL.map(x=>x.lectureReview.reviewNote)).size===18,'duplicate lecture reviews');
assert(new Set(allCR.map(x=>normalizePrompt(x.prompt))).size===36,'duplicate CR prompts'); assert(new Set(allD.map(x=>x.figureId)).size===18,'duplicate figure IDs');
for(const ref of refs)assert(allD.some(x=>x.figureId===ref),`unresolved figure ref ${ref}`);
const iso=readJson('manifest/legacy-content-isolation.json'); assert(iso.legacyContentImported===false&&iso.legacySemanticEvidenceAccepted===false&&iso.oldProductionRuntimeModified===false&&iso.deleteLegacyNow===false&&iso.finalRetirementRequired===true&&iso.productionActivationAllowed===false,'legacy isolation');
const manifest=readJson('manifest/project-manifest.json'); assert(manifest.productionActivationAllowed===false&&manifest.centralCoordinatorApprovalRequired===true&&manifest.skillCount===18,'project manifest');
const cindex=readJson('manifest/content-sha256.json'); assert(cindex.records.length===288,'content hash count'); const actualMap=new Map([...allL,...allQ,...allCR,...allD].map(x=>[x.lectureId||x.questionId||x.figureId,x.contentSha256])); for(const e of cindex.records)assert(actualMap.get(e.id)===e.sha256,`content index ${e.id}`);
const fh=readJson('manifest/file-sha256.json'); for(const e of fh.files){const p=path.join(root,e.path);assert(fs.existsSync(p),`missing hashed file ${e.path}`);const h=crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');assert(h===e.sha256,`file hash ${e.path}`)}
const bannedSimplified=/[这为与线图边长内个应题数从]/; for(const item of [...allL,...allQ,...allCR]){const t=JSON.stringify(item);assert(!bannedSimplified.test(t),`simplified Chinese token in ${item.questionId||item.lectureId}`)}
let stagingState='absent'; const staging=path.join(root,'staging'); if(fs.existsSync(staging)){const mods=fs.readdirSync(staging).filter(x=>x.endsWith('-human-content.mjs'));assert(mods.length===18,`staging module count ${mods.length}`);assert(fs.existsSync(path.join(staging,'u17-batch-018-staging-manifest.json')),'staging manifest');stagingState='present-and-valid'}
console.log(JSON.stringify({status:'PASS',unitId:'u17',lockedSkillCount:18,lectureCount:18,mcQuestionCount:216,constructedResponseCount:36,semanticReviewCount:216,figureCount:18,difficultyCounts:diff,answerIndexCounts:ans,contentHashesVerified:true,fileManifestVerified:true,figureReferencesVerified:true,questionSpecificReviewEvidenceVerified:true,skillSpecificLectureReviewVerified:true,nearDuplicateScanVerified:true,traditionalChineseVerified:true,legacyIsolationVerified:true,productionActivationAllowed:false,stagingState},null,2));
