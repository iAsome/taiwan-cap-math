import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const slots=['s002','s003','s004','s005','s006','s007','s008','s009','s010','s011','s012','s013','s014','s015'];
const readJson=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
const normalize=v=>Array.isArray(v)?v.map(normalize):(v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,normalize(v[k])])):v);
const hashRecord=r=>{const c=structuredClone(r);delete c.contentSha256;return crypto.createHash('sha256').update(JSON.stringify(normalize(c))).digest('hex')};
const fail=m=>{throw new Error(m)};
const allQ=[],allR=[],allCR=[],allL=[],allD=[];const figureRefs=new Set();
const diff={basic:0,standard:0,advanced:0,literacy:0};const ans=[0,0,0,0];
for(const slot of slots){
 const base=`units/u01/${slot}`;
 const q=readJsonl(`${base}/mc-questions.jsonl`),r=readJsonl(`${base}/semantic-reviews.jsonl`),cr=readJsonl(`${base}/constructed-response.jsonl`),l=readJson(`${base}/lecture.json`),draw=readJsonl(`${base}/drawing-specs.jsonl`);
 if(q.length!==12||r.length!==12||cr.length!==2) fail(`${slot}: count mismatch`);
 if(l.workedExamples.length<4||l.commonMistakes.length<6) fail(`${slot}: lecture depth`);
 if(l.prerequisites.some(x=>!x.requiredLevel||x.requiredLevel.includes('該技能完成本節所需'))) fail(`${slot}: generic prerequisite description`);
 if(!l.lectureReview?.reviewNote||l.lectureReview.reviewNote.includes('Definitions, edge cases')) fail(`${slot}: generic lecture review`);
 if(hashRecord(l)!==l.contentSha256) fail(`${slot}: lecture hash`);
 const qTexts=new Set(q.map(x=>x.text));
 for(const ex of l.workedExamples) if(qTexts.has(ex.prompt)) fail(`${slot}: lecture example copied exactly from bank`);
 for(const item of q){
  if(item.type!=='mc'||item.choices.length!==4||item.optionAnalysis.length!==4) fail(`${item.questionId}: shape`);
  if(new Set(item.choices).size!==4) fail(`${item.questionId}: duplicate choices`);
  if(hashRecord(item)!==item.contentSha256) fail(`${item.questionId}: content hash`);
  if(item.optionAnalysis.filter(x=>x.truth).length!==1||!item.optionAnalysis[item.answerIndex].truth) fail(`${item.questionId}: truth shape`);
  if(item.optionAnalysis.some(x=>!x.reason||x.reason.length<4)) fail(`${item.questionId}: weak option analysis`);
  const review=r.find(x=>x.questionId===item.questionId);if(!review) fail(`${item.questionId}: missing review`);
  if(review.contentSha256!==item.contentSha256||!review.answerMatch||!review.uniqueCorrectAnswer||review.reviewerDecision!=='pass') fail(`${item.questionId}: review state`);
  if(review.reviewVersion!=='human-review-r2.1'||!review.reviewedAt) fail(`${item.questionId}: review version/date`);
  if(Object.values(review.ambiguityChecks||{}).some(x=>typeof x!=='string'||x.length<20||['none','none found','checked'].includes(x))) fail(`${item.questionId}: generic ambiguity evidence`);
  if(!review.reviewerNote.includes(review.independentSolution)||review.reviewerNote.length<100) fail(`${item.questionId}: insufficient reviewer evidence`);
  if(review.independentSolution===item.explanation) fail(`${item.questionId}: review solution copied from explanation`);
  if(review.derivedAnswer!==item.choices[item.answerIndex]||review.storedAnswer!==item.choices[item.answerIndex]) fail(`${item.questionId}: answer mismatch`);
  if(JSON.stringify(review.optionTruth)!==JSON.stringify(item.optionAnalysis.map(x=>x.truth))) fail(`${item.questionId}: option truth mismatch`);
  if(item.difficulty==='literacy'&&!item.literacyContextNecessity) fail(`${item.questionId}: missing literacy necessity`);
  if(item.figureId) figureRefs.add(item.figureId);
  diff[item.difficulty]++;ans[item.answerIndex]++;
 }
 for(const item of cr){
  if(hashRecord(item)!==item.contentSha256) fail(`${item.questionId}: CR hash`);
  if(item.rubric.length!==4||[...item.rubric].map(x=>x.score).sort().join(',')!=='0,1,2,3') fail(`${item.questionId}: rubric`);
  if(item.independentReview?.decision!=='pass') fail(`${item.questionId}: independent review`);
  if(item.figureId) figureRefs.add(item.figureId);
 }
 for(const d of draw){
  if(!d.altText||!d.drawingSpec||Object.keys(d.drawingSpec).length<6) fail(`${d.figureId}: drawing detail`);
  if(hashRecord(d)!==d.contentSha256) fail(`${d.figureId}: drawing hash`);
  if(d.figureReview?.decision!=='pass'||!d.figureReview.reviewNote||d.figureReview.reviewNote.length<30) fail(`${d.figureId}: figure review`);
  const svg=path.join(root,d.svgPath);if(!fs.existsSync(svg)) fail(`${d.figureId}: missing SVG`);
  const text=fs.readFileSync(svg,'utf8');if(!text.includes('<title')||!text.includes('<desc')||!text.includes('role="img"')) fail(`${d.figureId}: accessibility`);
  for(const token of d.svgAssertions||[]) if(!text.includes(token)) fail(`${d.figureId}: SVG assertion ${token}`);
 }
 allQ.push(...q);allR.push(...r);allCR.push(...cr);allL.push(l);allD.push(...draw);
}
if(allQ.length!==168||allR.length!==168||allCR.length!==28||allL.length!==14) fail('global counts');
if(new Set(allQ.map(x=>x.questionId)).size!==168||new Set(allQ.map(x=>x.text)).size!==168) fail('duplicate question ID/text');
if(new Set(allCR.map(x=>x.questionId)).size!==28) fail('duplicate CR ID');
if(new Set(allR.map(x=>x.independentSolution)).size!==168) fail('duplicate independent solutions');
if(new Set(allR.map(x=>x.difficultyReason)).size!==168) fail('duplicate difficulty reasons');
if(new Set(allR.map(x=>x.reviewerNote)).size!==168) fail('duplicate reviewer notes');
if(new Set(allL.map(x=>x.lectureReview.reviewNote)).size!==14) fail('duplicate lecture review notes');
if(new Set(allD.map(x=>x.figureReview.reviewNote)).size!==5) fail('duplicate figure review notes');
for(const [k,v] of Object.entries(diff)) if(v!==42) fail(`difficulty ${k}: ${v}`);
if(ans.some(v=>v!==42)) fail(`answer positions ${ans}`);
const svgFiles=fs.readdirSync(path.join(root,'figures/u01')).filter(x=>x.endsWith('.svg'));
if(svgFiles.length!==5) fail(`expected 5 SVGs got ${svgFiles.length}`);
for(const fid of figureRefs) if(!svgFiles.includes(`${fid}.svg`)) fail(`unresolved figure ${fid}`);
const banned=[/針對「要讓/u,/本題採用/u,/方法—結果/u,/甲、乙兩份方案/u,/登錄/u];
for(const item of [...allQ,...allL]){const text=JSON.stringify(item);for(const rx of banned) if(rx.test(text)) fail(`banned generated phrase ${rx}`)}
const manifest=readJson('manifest/file-sha256.json');
for(const entry of manifest.files){const p=path.join(root,entry.path);if(!fs.existsSync(p)) fail(`missing hashed file ${entry.path}`);const h=crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');if(h!==entry.sha256) fail(`file hash ${entry.path}`)}
console.log(JSON.stringify({status:'PASS',unitId:'u01',newSkillCount:14,u01SkillTotalAfterBatch:15,lectureCount:14,mcQuestionCount:168,constructedResponseCount:28,semanticReviewCount:168,figureCount:5,difficultyCounts:diff,answerIndexCounts:ans,contentHashesVerified:true,fileManifestVerified:true,figureReferencesVerified:true,questionSpecificReviewEvidenceVerified:true,skillSpecificLectureReviewVerified:true,svgGeometryAssertionsVerified:true,productionActivationAllowed:false},null,2));
