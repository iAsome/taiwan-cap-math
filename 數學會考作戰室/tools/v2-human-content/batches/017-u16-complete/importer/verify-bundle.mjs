import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const expectStaging=process.argv.includes('--expect-staging');
const slots=Array.from({length:18},(_,i)=>`s${String(i+1).padStart(3,'0')}`);
const locked=[
['s001','triangle-congruence','u16-congruence'],['s002','triangle-congruence-proof','u16-congruence'],
['s003','isosceles-equilateral','u16-congruence'],['s004','triangle-sss-sas','u16-congruence'],
['s005','triangle-asa-aas','u16-congruence'],['s006','isosceles-properties','u16-congruence'],
['s007','equilateral-properties','u16-congruence'],['s008','compass-construction','u16-construction'],
['s009','compass-copy-angle','u16-construction'],['s010','compass-perpendicular','u16-construction'],
['s011','construction-word-steps','u16-construction'],['s012','triangle-inequality','u16-properties'],
['s013','angle-sum-exterior','u16-properties'],['s014','triangle-side-angle-relation','u16-properties'],
['s015','exterior-angle-sum','u16-properties'],['s016','triangle-medians','u16-properties'],
['s017','triangle-altitude','u16-properties'],['s018','triangle-literacy','u16-literacy']
];
const fail=(message)=>{throw new Error(message)};
const read=(p)=>fs.readFileSync(path.join(root,p),'utf8');
const readJson=(p)=>JSON.parse(read(p));
const readJsonl=(p)=>read(p).split(/\r?\n/).filter(Boolean).map((x,i)=>{
  try{return JSON.parse(x)}catch(e){fail(`${p}:${i+1}: invalid JSONL: ${e.message}`)}
});
const normalize=(v)=>Array.isArray(v)?v.map(normalize):(v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,normalize(v[k])])):v);
const recordHash=(r)=>{const c=structuredClone(r);delete c.contentSha256;return crypto.createHash('sha256').update(JSON.stringify(normalize(c))).digest('hex')};
const shaFile=(p)=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const normalizedPrompt=(t)=>t.normalize('NFKC').toLowerCase().replace(/\s+/g,'').replace(/[，。！？：；、,.!?;:「」『』（）()△∠≅=<>＜＞°]/g,'');
const skeleton=(t)=>t.normalize('NFKC').toLowerCase()
  .replace(/\b(?:cm|mm|km|m)\b|公分|公尺|公里|毫米/g,'<u>')
  .replace(/\d+(?:\.\d+)?/g,'<n>')
  .replace(/[a-z](?=[^a-z]|$)/g,'<v>')
  .replace(/[^\w\u4e00-\u9fff<>]+/g,'');
const ensureTraditional=(text,label)=>{
  const banned=/[这为国学会题边线点图应当与术实长数证规圆]/u;
  const m=text.match(banned); if(m) fail(`${label}: Simplified Chinese character ${m[0]}`);
};
const authority='CHATGPT_HUMAN_AUTHORED_R1';
const allQ=[],allR=[],allCR=[],allL=[],allD=[];
const diff={basic:0,standard:0,advanced:0,literacy:0};
const ans=[0,0,0,0];
const figureRefs=new Set();
const qIds=new Set(),crIds=new Set(),figIds=new Set(),lectureIds=new Set();
const promptNorms=new Map(),promptSkeletons=new Map(),crPromptNorms=new Map(),crSkeletons=new Map();

const lock=readJson('manifest/locked-u16.json');
if(lock.unitId!=='u16'||lock.lockedSkillCount!==18) fail('locked-u16 manifest mismatch');
if(lock.authoritativeLockSha256!=='930dbdbbb70818b461ba6ad28620dfed69442716b653be91a9025ebe92d353fc') fail('syllabus lock SHA mismatch');
if(JSON.stringify(lock.skills.map(x=>[x.slot,x.skillId,x.topicId]))!==JSON.stringify(locked)) fail('locked skill IDs/order/topic mismatch');

for(let si=0;si<locked.length;si++){
  const [slot,skillId,topicId]=locked[si];
  const base=`units/u16/${slot}`;
  for(const f of ['lecture.json','mc-questions.jsonl','constructed-response.jsonl','semantic-reviews.jsonl','drawing-specs.jsonl'])
    if(!fs.existsSync(path.join(root,base,f))) fail(`${slot}: missing ${f}`);
  const l=readJson(`${base}/lecture.json`);
  const q=readJsonl(`${base}/mc-questions.jsonl`);
  const cr=readJsonl(`${base}/constructed-response.jsonl`);
  const r=readJsonl(`${base}/semantic-reviews.jsonl`);
  const d=readJsonl(`${base}/drawing-specs.jsonl`);
  if(q.length!==12||r.length!==12||cr.length!==2||d.length!==1) fail(`${slot}: expected 12 MC, 12 reviews, 2 CR, 1 drawing spec`);
  if(l.unitId!=='u16'||l.skillId!==skillId||l.topicId!==topicId||l.skillOrder!==si+1) fail(`${slot}: lecture identity`);
  if(l.contentAuthority!==authority||l.replacementMarker!=='REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION') fail(`${slot}: lecture authority/isolation`);
  if(l.title.includes('、')||l.originalLockedTitle.includes('、')) fail(`${slot}: forbidden title punctuation`);
  if(!Array.isArray(l.learningOutcomes)||l.learningOutcomes.length<3||!Array.isArray(l.glossary)||l.glossary.length<2) fail(`${slot}: lecture foundation depth`);
  if(!Array.isArray(l.conceptNarrative)||l.conceptNarrative.length<4||!Array.isArray(l.method)||l.method.length<4) fail(`${slot}: lecture narrative/method depth`);
  if(!Array.isArray(l.workedExamples)||l.workedExamples.length<4||!Array.isArray(l.commonMistakes)||l.commonMistakes.length<6) fail(`${slot}: lecture examples/mistakes depth`);
  if(!l.lectureReview?.reviewNote||l.lectureReview.reviewNote.length<65||l.lectureReview.reviewVersion!=='human-lecture-review-u16-r1.0') fail(`${slot}: lecture review`);
  if(recordHash(l)!==l.contentSha256) fail(`${slot}: lecture content hash`);
  if(lectureIds.has(l.lectureId)) fail(`${slot}: duplicate lecture ID`);
  lectureIds.add(l.lectureId);
  ensureTraditional(JSON.stringify(l),`${slot} lecture`);
  const qDiff={basic:0,standard:0,advanced:0,literacy:0},qAns=[0,0,0,0];
  for(let i=0;i<q.length;i++){
    const item=q[i];
    if(item.questionId!==`u16-${slot}-v${String(i+1).padStart(3,'0')}`) fail(`${slot}: MC ID/order ${i+1}`);
    if(item.unitId!=='u16'||item.skillId!==skillId||item.topicId!==topicId||item.type!=='mc') fail(`${item.questionId}: identity`);
    if(item.contentAuthority!==authority||item.replacementMarker!=='REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION'||!item.noTemplateDeclaration) fail(`${item.questionId}: authority`);
    if(!['basic','standard','advanced','literacy'].includes(item.difficulty)) fail(`${item.questionId}: difficulty`);
    if(!Array.isArray(item.choices)||item.choices.length!==4||new Set(item.choices).size!==4) fail(`${item.questionId}: choices`);
    if(!Number.isInteger(item.answerIndex)||item.answerIndex<0||item.answerIndex>3) fail(`${item.questionId}: answer index`);
    if(!Array.isArray(item.optionAnalysis)||item.optionAnalysis.length!==4) fail(`${item.questionId}: option analysis`);
    if(item.optionAnalysis.filter(x=>x.truth===true).length!==1||item.optionAnalysis[item.answerIndex]?.truth!==true) fail(`${item.questionId}: unique truth`);
    item.optionAnalysis.forEach((o,j)=>{if(o.choice!==item.choices[j]||typeof o.reason!=='string'||o.reason.length<5) fail(`${item.questionId}: option analysis ${j}`)});
    if(!item.independentSolution||item.independentSolution.length<6||item.independentSolution===item.explanation) fail(`${item.questionId}: independent solution`);
    for(const key of ['givenConditions','target','steps','misconceptionTarget','prerequisiteCheck','unitAndRoundingCheck','notationCheck','ambiguityAndBoundaryAudit','difficultyReason'])
      if(item[key]===undefined||item[key]===null||(typeof item[key]==='string'&&item[key].length<4)||(Array.isArray(item[key])&&item[key].length<1)) fail(`${item.questionId}: missing ${key}`);
    if(item.difficulty==='literacy'&&(!item.literacyContextNecessity||item.literacyContextNecessity.length<12)) fail(`${item.questionId}: literacy necessity`);
    if(recordHash(item)!==item.contentSha256) fail(`${item.questionId}: content hash`);
    const review=r[i];
    if(!review||review.questionId!==item.questionId||review.contentSha256!==item.contentSha256) fail(`${item.questionId}: review link`);
    if(review.reviewVersion!=='human-review-u16-r1.0'||review.reviewedAt!=='2026-07-12'||review.reviewerDecision!=='pass') fail(`${item.questionId}: review state`);
    if(!review.answerMatch||!review.uniqueCorrectAnswer||review.derivedAnswer!==item.choices[item.answerIndex]||review.storedAnswer!==item.choices[item.answerIndex]) fail(`${item.questionId}: reviewed answer mismatch`);
    if(JSON.stringify(review.optionTruth)!==JSON.stringify(item.optionAnalysis.map(x=>x.truth))) fail(`${item.questionId}: option truth mismatch`);
    if(!review.reviewerNote||review.reviewerNote.length<130||!review.reviewerNote.includes(review.independentSolution)) fail(`${item.questionId}: reviewer evidence`);
    if(!review.ambiguityChecks||Object.values(review.ambiguityChecks).some(x=>typeof x!=='string'||x.length<4)) fail(`${item.questionId}: ambiguity evidence`);
    if(review.contentAuthority!==authority) fail(`${item.questionId}: review authority`);
    if(qIds.has(item.questionId)) fail(`${item.questionId}: duplicate ID`); qIds.add(item.questionId);
    const np=normalizedPrompt(item.text); if(promptNorms.has(np)) fail(`${item.questionId}: duplicate normalized prompt with ${promptNorms.get(np)}`); promptNorms.set(np,item.questionId);
    const sk=skeleton(item.text); if(promptSkeletons.has(sk)) fail(`${item.questionId}: number/name/unit-swapped prompt with ${promptSkeletons.get(sk)}`); promptSkeletons.set(sk,item.questionId);
    if(item.figureId) figureRefs.add(item.figureId);
    qDiff[item.difficulty]++; qAns[item.answerIndex]++; diff[item.difficulty]++; ans[item.answerIndex]++;
    ensureTraditional(JSON.stringify(item),item.questionId); ensureTraditional(JSON.stringify(review),`${item.questionId} review`);
  }
  for(const k of Object.keys(qDiff)) if(qDiff[k]!==3) fail(`${slot}: difficulty ${k}=${qDiff[k]}`);
  if(qAns.some(x=>x!==3)) fail(`${slot}: answer positions ${qAns}`);
  for(const item of cr){
    if(item.unitId!=='u16'||item.skillId!==skillId||item.topicId!==topicId||item.type!=='constructed-response') fail(`${item.questionId}: CR identity`);
    if(item.contentAuthority!==authority||item.replacementMarker!=='REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION') fail(`${item.questionId}: CR authority`);
    if(!Array.isArray(item.requiredWork)||item.requiredWork.length<2||!Array.isArray(item.fullCreditSolution)||item.fullCreditSolution.length<2) fail(`${item.questionId}: CR solution depth`);
    if(!Array.isArray(item.alternativeSolutions)||item.alternativeSolutions.length<1) fail(`${item.questionId}: CR alternative`);
    if(!Array.isArray(item.rubric)||item.rubric.length!==4||item.rubric.map(x=>x.score).sort().join(',')!=='0,1,2,3') fail(`${item.questionId}: rubric`);
    if(item.rubric.some(x=>!x.criteria||x.criteria.length<12)) fail(`${item.questionId}: rubric specificity`);
    if(!item.followThroughPolicy||item.followThroughPolicy.length<15) fail(`${item.questionId}: followThroughPolicy`);
    if(!item.unitAndNotationRules||item.unitAndNotationRules.length<12) fail(`${item.questionId}: unitAndNotationRules`);
    if(!item.answerOnlyPolicy||item.answerOnlyPolicy.length<8) fail(`${item.questionId}: answerOnlyPolicy`);
    if(!item.independentReview?.derivedResult||!item.independentReview?.ambiguity||item.independentReview?.decision!=='pass') fail(`${item.questionId}: CR independent review`);
    if(recordHash(item)!==item.contentSha256) fail(`${item.questionId}: CR hash`);
    if(crIds.has(item.questionId)) fail(`${item.questionId}: duplicate CR ID`); crIds.add(item.questionId);
    const np=normalizedPrompt(item.prompt); if(crPromptNorms.has(np)) fail(`${item.questionId}: duplicate CR prompt`); crPromptNorms.set(np,item.questionId);
    const sk=skeleton(item.prompt); if(crSkeletons.has(sk)) fail(`${item.questionId}: number/name/unit-swapped CR with ${crSkeletons.get(sk)}`); crSkeletons.set(sk,item.questionId);
    if(item.figureId) figureRefs.add(item.figureId);
    ensureTraditional(JSON.stringify(item),item.questionId);
  }
  for(const item of d){
    if(item.unitId!=='u16'||item.slot!==slot||item.contentAuthority!==authority) fail(`${item.figureId}: drawing identity`);
    if(figIds.has(item.figureId)) fail(`${item.figureId}: duplicate figure ID`); figIds.add(item.figureId);
    if(!item.altText||item.altText.length<30||!item.drawingSpec||Object.keys(item.drawingSpec).length<10) fail(`${item.figureId}: drawing detail`);
    if(item.drawingSpec.canvas?.viewBox!=='0 0 360 240'||item.drawingSpec.canvas?.width!==360||item.drawingSpec.canvas?.height!==240) fail(`${item.figureId}: canvas`);
    if(item.drawingSpec.toScale===false&&!item.drawingSpec.notToScaleWarning) fail(`${item.figureId}: missing not-to-scale warning`);
    if(!item.figureReview?.reviewNote||item.figureReview.reviewNote.length<60||item.figureReview.decision!=='pass') fail(`${item.figureId}: figure review`);
    if(recordHash(item)!==item.contentSha256) fail(`${item.figureId}: drawing hash`);
    const svg=path.join(root,item.svgPath); if(!fs.existsSync(svg)) fail(`${item.figureId}: missing SVG`);
    const text=fs.readFileSync(svg,'utf8');
    if(!text.includes('<title')||!text.includes('<desc')||!text.includes('role="img"')||!text.includes('viewBox="0 0 360 240"')) fail(`${item.figureId}: SVG accessibility/canvas`);
    for(const token of item.svgAssertions||[]) if(!text.includes(token)) fail(`${item.figureId}: missing SVG assertion ${token}`);
    ensureTraditional(text,item.figureId);
  }
  allL.push(l); allQ.push(...q); allR.push(...r); allCR.push(...cr); allD.push(...d);
}

if(allL.length!==18||allQ.length!==216||allR.length!==216||allCR.length!==36||allD.length!==18) fail('global count mismatch');
for(const [k,v] of Object.entries(diff)) if(v!==54) fail(`global difficulty ${k}=${v}`);
if(ans.some(v=>v!==54)) fail(`global answer positions ${ans}`);
if(new Set(allR.map(x=>x.reviewerNote)).size!==216) fail('duplicate reviewer notes');
if(new Set(allR.map(x=>x.independentSolution)).size!==216) fail('duplicate independent review solutions');
if(new Set(allL.map(x=>x.lectureReview.reviewNote)).size!==18) fail('duplicate lecture reviews');
if(new Set(allCR.map(x=>x.followThroughPolicy)).size!==36) fail('duplicate CR follow-through policies');
if(new Set(allD.map(x=>x.figureReview.reviewNote)).size!==18) fail('duplicate figure reviews');

const svgDir=path.join(root,'figures/u16');
const svgFiles=fs.readdirSync(svgDir).filter(x=>x.endsWith('.svg')).sort();
if(svgFiles.length!==18) fail(`expected 18 SVG files, got ${svgFiles.length}`);
for(const fid of figureRefs) if(!figIds.has(fid)||!svgFiles.includes(`${fid}.svg`)) fail(`unresolved figure reference ${fid}`);

const isolation=readJson('manifest/legacy-content-isolation.json');
for(const [k,v] of Object.entries({
  legacyContentImported:false,legacySemanticEvidenceAccepted:false,oldProductionRuntimeModified:false,
  deleteLegacyNow:false,finalRetirementRequired:true,productionActivationAllowed:false
})) if(isolation[k]!==v) fail(`legacy isolation ${k}`);
const pm=readJson('manifest/project-manifest.json');
if(pm.productionActivationAllowed!==false||pm.approvalState!=='CENTRAL_COORDINATOR_APPROVAL_REQUIRED'||pm.expectedBaseHead!=='__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__') fail('project manifest gate');
if(!read('CURSOR-INSTRUCTIONS.md').includes('CENTRAL_COORDINATOR_APPROVAL_REQUIRED')||!read('CURSOR-INSTRUCTIONS.md').includes('EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__')) fail('Cursor approval placeholder');

const contentManifest=readJson('manifest/content-sha256.json');
const actualContent=new Map([
 ...allL.map(x=>[x.lectureId,x.contentSha256]),...allQ.map(x=>[x.questionId,x.contentSha256]),
 ...allCR.map(x=>[x.questionId,x.contentSha256]),...allD.map(x=>[x.figureId,x.contentSha256])
]);
if(contentManifest.records.length!==288) fail('content manifest count');
for(const e of contentManifest.records) if(actualContent.get(e.id)!==e.sha256) fail(`content manifest ${e.id}`);

const fileManifest=readJson('manifest/file-sha256.json');
if(!Array.isArray(fileManifest.files)||fileManifest.files.length<100) fail('file manifest missing/too small');
for(const e of fileManifest.files){
  const p=path.join(root,e.path); if(!fs.existsSync(p)) fail(`missing hashed file ${e.path}`);
  if(shaFile(p)!==e.sha256) fail(`file hash mismatch ${e.path}`);
}
const actualRequired=[];
const walk=(dir)=>{
  for(const name of fs.readdirSync(dir)){
    const p=path.join(dir,name); const rel=path.relative(root,p).split(path.sep).join('/');
    if(rel==='manifest/file-sha256.json'||rel.startsWith('staging/')) continue;
    if(fs.statSync(p).isDirectory()) walk(p); else actualRequired.push(rel);
  }
};
walk(root);
actualRequired.sort();
const listed=fileManifest.files.map(x=>x.path).sort();
if(JSON.stringify(actualRequired)!==JSON.stringify(listed)) fail('file manifest path set mismatch');

const staging=path.join(root,'staging');
let emittedModuleCount=0,stagingVerified=false;
if(expectStaging){
  const sdir=path.join(staging,'u16'); if(!fs.existsSync(sdir)) fail('expected staging/u16');
  const modules=fs.readdirSync(sdir).filter(x=>x.endsWith('.mjs')).sort();
  if(modules.length!==19) fail(`expected 19 emitted modules, got ${modules.length}`);
  for(const slot of slots){
    const f=path.join(sdir,`${slot}.mjs`); if(!fs.existsSync(f)) fail(`missing staging module ${slot}`);
    const mod=await import(`${pathToFileURL(f).href}?verify=${Date.now()}-${slot}`);
    const data=mod.default;
    if(data.slot!==slot||data.lecture?.unitId!=='u16'||data.mcQuestions?.length!==12||data.constructedResponses?.length!==2||data.semanticReviews?.length!==12||data.drawingSpecs?.length!==1) fail(`${slot}: emitted data mismatch`);
  }
  const idx=await import(`${pathToFileURL(path.join(sdir,'index.mjs')).href}?verify=${Date.now()}`);
  if(!Array.isArray(idx.default)||idx.default.length!==18) fail('staging index mismatch');
  emittedModuleCount=19; stagingVerified=true;
}else{
  if(fs.existsSync(staging)) fail('delivery/source validation forbids staging directory; remove it or use --expect-staging for post-emission validation');
}

console.log(JSON.stringify({
  status:'PASS',unitId:'u16',batchId:'017-u16-complete',lockedSkillCount:18,
  lectureCount:18,mcQuestionCount:216,constructedResponseCount:36,semanticReviewCount:216,
  figureCount:18,difficultyCounts:diff,answerIndexCounts:ans,
  contentHashesVerified:true,fileManifestVerified:true,figureReferencesVerified:true,
  normalizedPromptDuplicates:0,numberNameUnitSwapDuplicates:0,
  questionSpecificReviewEvidenceVerified:true,skillSpecificLectureReviewVerified:true,
  constructedResponseRubricsVerified:true,traditionalChineseVerified:true,
  legacyIsolationVerified:true,stagingVerified,emittedModuleCount,
  productionActivationAllowed:false
},null,2));
