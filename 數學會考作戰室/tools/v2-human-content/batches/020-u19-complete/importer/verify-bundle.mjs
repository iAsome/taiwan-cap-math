import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const readJson=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
const norm=v=>Array.isArray(v)?v.map(norm):(v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,norm(v[k])])):v);
const contentHash=x=>{const c=structuredClone(x);delete c.contentSha256;return crypto.createHash('sha256').update(JSON.stringify(norm(c))).digest('hex')};
const fail=m=>{throw new Error(m)};
const locked=readJson('manifest/locked-u19-syllabus.json');
const expectedSkills=[];for(const t of locked.topics)for(const s of t.skills)expectedSkills.push(s);
if(locked.unitId!=='u19'||expectedSkills.length!==18)fail('locked u19 skill count');
const slots=expectedSkills.map(x=>x.slot);
const allL=[],allQ=[],allCR=[],allR=[],allD=[];const figureRefs=new Set();
const diff={basic:0,standard:0,advanced:0,literacy:0}, ans=[0,0,0,0];
const simplified=/[为与发后里线圆边长题选点进过这应学体从开关]/u;
const requiredAuthority='CHATGPT_HUMAN_AUTHORED_R1';
const promptSeen=new Map(), nearSeen=new Map();
const normalizePrompt=s=>s.normalize('NFKC').replace(/\s+/gu,'').replace(/[，。！？；：、,.!?;:]/gu,'').toLowerCase();
const normalizeNear=s=>normalizePrompt(s).replace(/-?\d+(?:\.\d+)?/gu,'<n>').replace(/[a-z]/gu,'<v>');
for(const [idx,slot] of slots.entries()){
 const exp=expectedSkills[idx], base=`units/u19/${slot}`;
 const l=readJson(`${base}/lecture.json`), q=readJsonl(`${base}/mc-questions.jsonl`), cr=readJsonl(`${base}/constructed-response.jsonl`), r=readJsonl(`${base}/semantic-reviews.jsonl`), d=readJsonl(`${base}/drawing-specs.jsonl`);
 if(l.skillId!==exp.skillId||l.topicId!==exp.topicId||l.skillIdentity.lockedOrder!==exp.order)fail(`${slot}: locked identity`);
 if(l.contentAuthority!==requiredAuthority||contentHash(l)!==l.contentSha256)fail(`${slot}: lecture authority/hash`);
 if(l.title.includes('、'))fail(`${slot}: forbidden title punctuation`);
 if(!l.lectureReview?.reviewNote||l.lectureReview.reviewNote.length<70||l.workedExamples.length<4||l.commonMistakes.length<4)fail(`${slot}: lecture depth/review`);
 if(q.length!==12||r.length!==12||cr.length<2||d.length!==1)fail(`${slot}: counts`);
 const sd={basic:0,standard:0,advanced:0,literacy:0},sa=[0,0,0,0];
 const qIds=new Set(q.map(x=>x.questionId));
 for(const item of q){
  if(item.unitId!=='u19'||item.skillId!==exp.skillId||item.topicId!==exp.topicId||item.type!=='mc')fail(`${item.questionId}: identity`);
  if(item.contentAuthority!==requiredAuthority||contentHash(item)!==item.contentSha256)fail(`${item.questionId}: authority/hash`);
  if(item.choices.length!==4||new Set(item.choices).size!==4||item.optionAnalysis.length!==4)fail(`${item.questionId}: choices`);
  if(!Number.isInteger(item.answerIndex)||item.answerIndex<0||item.answerIndex>3)fail(`${item.questionId}: answer index`);
  if(item.optionAnalysis.filter(x=>x.truth).length!==1||!item.optionAnalysis[item.answerIndex].truth)fail(`${item.questionId}: truth`);
  for(let i=0;i<4;i++)if(item.optionAnalysis[i].choice!==item.choices[i]||item.optionAnalysis[i].reason.length<3)fail(`${item.questionId}: option analysis`);
  for(const f of ['prompt','givenConditions','target','independentSolution','explanation','misconceptionTarget','prerequisiteCheck','unitCheck','roundingCheck','ambiguityAudit','boundaryAudit','difficultyReason'])if(typeof item[f]!=='string'||item[f].length<2)fail(`${item.questionId}: missing ${f}`);
  if(!Array.isArray(item.steps)||item.steps.length<1)fail(`${item.questionId}: steps`);
  if(item.difficulty==='literacy'&&(!item.literacyContextNecessity||item.literacyContextNecessity.length<12))fail(`${item.questionId}: literacy necessity`);
  const review=r.find(x=>x.questionId===item.questionId); if(!review)fail(`${item.questionId}: missing review`);
  if(review.contentSha256!==item.contentSha256||!review.answerMatch||!review.uniqueCorrectAnswer||review.reviewerDecision!=='pass')fail(`${item.questionId}: review state`);
  if(review.independentSolution!==item.independentSolution||review.derivedAnswer!==item.choices[item.answerIndex])fail(`${item.questionId}: independent solution mismatch`);
  if(new Set(Object.values(review.ambiguityChecks||{})).size<6||Object.values(review.ambiguityChecks||{}).some(x=>typeof x!=='string'||x.length<18))fail(`${item.questionId}: ambiguity review`);
  if(item.figureId)figureRefs.add(item.figureId);
  const n=normalizePrompt(item.prompt); if(promptSeen.has(n))fail(`duplicate normalized prompt ${item.questionId} ${promptSeen.get(n)}`);promptSeen.set(n,item.questionId);
  const nn=normalizeNear(item.prompt); const key=nn;if(nearSeen.has(key))fail(`cross-skill number/name/unit-only near duplicate ${item.questionId} ${nearSeen.get(key)}`);nearSeen.set(key,item.questionId);
  sd[item.difficulty]++;sa[item.answerIndex]++;diff[item.difficulty]++;ans[item.answerIndex]++;
 }
 for(const k of Object.keys(sd))if(sd[k]!==3)fail(`${slot}: difficulty ${k}=${sd[k]}`);
 if(sa.some(x=>x!==3))fail(`${slot}: answer positions ${sa}`);
 if(new Set(r.map(x=>x.reviewerNote)).size!==12||new Set(r.map(x=>x.independentSolution)).size!==12)fail(`${slot}: repeated review evidence`);
 for(const item of cr){
  if(item.unitId!=='u19'||item.skillId!==exp.skillId||item.contentAuthority!==requiredAuthority||contentHash(item)!==item.contentSha256)fail(`${item.questionId}: CR identity/hash`);
  if(item.rubric.length!==4||item.rubric.map(x=>x.score).sort().join(',')!=='0,1,2,3')fail(`${item.questionId}: rubric`);
  if(item.requiredWork.length<2||item.fullCreditSolution.length<2||item.partialCreditRules.length<1||!item.followThroughPolicy||!item.answerOnlyPolicy)fail(`${item.questionId}: CR depth`);
  if(item.independentReview?.decision!=='pass'||!item.independentReview.derivedResult||!item.independentReview.ambiguity)fail(`${item.questionId}: CR review`);
  if(item.figureId)figureRefs.add(item.figureId);
 }
 const draw=d[0];if(draw.skillId!==exp.skillId||draw.contentAuthority!==requiredAuthority||contentHash(draw)!==draw.contentSha256)fail(`${slot}: drawing hash`);
 const svgPath=path.join(root,draw.svgPath);if(!fs.existsSync(svgPath))fail(`${slot}: SVG missing`);const svg=fs.readFileSync(svgPath,'utf8');
 for(const token of draw.svgAssertions)if(!svg.includes(token))fail(`${draw.figureId}: missing token ${token}`);
 if(!svg.includes('role="img"')||!svg.includes('<title')||!svg.includes('<desc'))fail(`${draw.figureId}: accessibility`);
 allL.push(l);allQ.push(...q);allCR.push(...cr);allR.push(...r);allD.push(...d);
}
if(allL.length!==18||allQ.length!==216||allCR.length!==36||allR.length!==216||allD.length!==18)fail('global counts');
for(const [k,v] of Object.entries(diff))if(v!==54)fail(`global difficulty ${k}=${v}`);if(ans.some(x=>x!==54))fail(`global answers ${ans}`);
for(const arr of [allQ,allCR,allD]){const ids=arr.map(x=>x.questionId||x.figureId);if(new Set(ids).size!==ids.length)fail('duplicate IDs')}
if(new Set(allL.map(x=>x.lectureReview.reviewNote)).size!==18)fail('duplicate lecture reviews');
if(new Set(allR.map(x=>x.reviewerNote)).size!==216)fail('duplicate semantic reviewer notes');
if(new Set(allD.map(x=>x.figureReview.reviewNote)).size!==18)fail('duplicate figure reviews');
const authoredText=JSON.stringify([allL,allQ,allCR,allR,allD]);
if(simplified.test(authoredText))fail('simplified Chinese in authored content');
const centralAudit=readJson('review/central-repair-audit-r1.json');
if(centralAudit.decision!=='CENTRAL_APPROVED_FOR_AUTHORING_BRANCH_STAGING'||centralAudit.repairedQuestionIds.length!==12||centralAudit.legacyContentUsed!==false)fail('central repair audit');
const svgFiles=fs.readdirSync(path.join(root,'figures/u19')).filter(x=>x.endsWith('.svg'));if(svgFiles.length!==18)fail('SVG count');
for(const fid of figureRefs)if(!svgFiles.includes(`${fid}.svg`))fail(`unresolved figure ${fid}`);
for(const l of allL)if(simplified.test(l.title))fail(`simplified title ${l.lectureId}`);
const isolation=readJson('manifest/legacy-content-isolation.json');
if(isolation.legacyContentImported!==false||isolation.legacySemanticEvidenceAccepted!==false||isolation.oldProductionRuntimeModified!==false||isolation.deleteLegacyNow!==false||isolation.finalRetirementRequired!==true||isolation.productionActivationAllowed!==false)fail('legacy isolation');
const manifest=readJson('manifest/file-sha256.json');for(const e of manifest.files){const p=path.join(root,e.path);if(!fs.existsSync(p))fail(`missing hashed file ${e.path}`);const hh=crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');if(hh!==e.sha256)fail(`file hash ${e.path}`)}
let emitted=0;const staging=path.join(root,'staging/u19');if(fs.existsSync(staging)){emitted=fs.readdirSync(staging).filter(x=>x.endsWith('.mjs')).length;if(emitted!==19)fail(`emitted module count ${emitted}`)}
console.log(JSON.stringify({status:'PASS',unitId:'u19',lockedSkillCount:18,lectureCount:18,mcQuestionCount:216,constructedResponseCount:36,semanticReviewCount:216,figureCount:18,difficultyCounts:diff,answerIndexCounts:ans,contentHashesVerified:true,fileManifestVerified:true,duplicateIdsRejected:true,normalizedPromptDuplicatesRejected:true,numberSwapNearDuplicatesRejected:true,questionSpecificReviewEvidenceVerified:true,skillSpecificLectureReviewVerified:true,figureReferencesVerified:true,svgGeometryAssertionsVerified:true,traditionalChineseTitleCheck:true,traditionalChineseAuthoredContentCheck:true,crossSkillNumberSwapDuplicatesRejected:true,centralCoordinatorRepairVerified:true,legacyContentImported:false,productionActivationAllowed:false,stagingPresent:fs.existsSync(staging),emittedModuleCount:emitted},null,2));
