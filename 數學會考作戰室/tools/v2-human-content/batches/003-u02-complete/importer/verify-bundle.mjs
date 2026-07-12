import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const slots=Array.from({length:15},(_,i)=>`s${String(i+1).padStart(3,'0')}`);
const readJson=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
const normalize=v=>Array.isArray(v)?v.map(normalize):(v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,normalize(v[k])])):v);
const hashRecord=r=>{const c=structuredClone(r);delete c.contentSha256;return crypto.createHash('sha256').update(JSON.stringify(normalize(c))).digest('hex')};
const fail=m=>{throw new Error(m)};
const allQ=[],allR=[],allCR=[],allL=[],allD=[];const figureRefs=new Set();
const diff={basic:0,standard:0,advanced:0,literacy:0};const ans=[0,0,0,0];

for(const slot of slots){
  const base=`units/u02/${slot}`;
  const q=readJsonl(`${base}/mc-questions.jsonl`);
  const r=readJsonl(`${base}/semantic-reviews.jsonl`);
  const cr=readJsonl(`${base}/constructed-response.jsonl`);
  const l=readJson(`${base}/lecture.json`);
  const draw=readJsonl(`${base}/drawing-specs.jsonl`);

  if(q.length!==12||r.length!==12||cr.length!==2) fail(`${slot}: content count mismatch`);
  if(l.unitId!=='u02'||l.workedExamples.length<4||l.commonMistakes.length<6) fail(`${slot}: lecture depth`);
  if(l.title.includes('、')) fail(`${slot}: lecture title contains forbidden dunhao`);
  if(l.prerequisites.some(x=>!x.skillId||!x.requiredLevel||x.requiredLevel.length<12)) fail(`${slot}: weak prerequisite`);
  if(!l.lectureReview?.reviewNote||l.lectureReview.reviewNote.length<45) fail(`${slot}: weak lecture review`);
  if(hashRecord(l)!==l.contentSha256) fail(`${slot}: lecture hash`);

  const qTexts=new Set(q.map(x=>x.text));
  for(const ex of l.workedExamples){
    if(qTexts.has(ex.prompt)) fail(`${slot}: lecture example copied exactly from bank`);
    if(!Array.isArray(ex.solutionSteps)||ex.solutionSteps.length<2||!ex.answer) fail(`${slot}: weak lecture example`);
  }

  for(const item of q){
    if(item.type!=='mc'||item.unitId!=='u02'||item.choices.length!==4||item.optionAnalysis.length!==4) fail(`${item.questionId}: shape`);
    if(new Set(item.choices).size!==4) fail(`${item.questionId}: duplicate choices`);
    if(hashRecord(item)!==item.contentSha256) fail(`${item.questionId}: content hash`);
    if(item.optionAnalysis.filter(x=>x.truth).length!==1||!item.optionAnalysis[item.answerIndex].truth) fail(`${item.questionId}: truth shape`);
    if(item.optionAnalysis.some((x,i)=>x.choice!==item.choices[i]||!x.reason||x.reason.length<5)) fail(`${item.questionId}: weak option analysis`);

    const review=r.find(x=>x.questionId===item.questionId);
    if(!review) fail(`${item.questionId}: missing review`);
    if(review.contentSha256!==item.contentSha256||!review.answerMatch||!review.uniqueCorrectAnswer||review.reviewerDecision!=='pass') fail(`${item.questionId}: review state`);
    if(review.reviewVersion!=='human-review-r3.0'||review.reviewedAt!=='2026-07-12') fail(`${item.questionId}: review version/date`);
    if(Object.values(review.ambiguityChecks||{}).some(x=>typeof x!=='string'||x.length<35)) fail(`${item.questionId}: generic ambiguity evidence`);
    if(!review.reviewerNote.includes(review.independentSolution)||review.reviewerNote.length<130) fail(`${item.questionId}: insufficient reviewer evidence`);
    if(review.independentSolution===item.explanation) fail(`${item.questionId}: independent solution copied from explanation`);
    if(review.derivedAnswer!==item.choices[item.answerIndex]||review.storedAnswer!==item.choices[item.answerIndex]) fail(`${item.questionId}: answer mismatch`);
    if(JSON.stringify(review.optionTruth)!==JSON.stringify(item.optionAnalysis.map(x=>x.truth))) fail(`${item.questionId}: option truth mismatch`);
    if(item.difficulty==='literacy'&&(!item.literacyContextNecessity||item.literacyContextNecessity.length<25)) fail(`${item.questionId}: missing literacy necessity`);
    if(item.figureId) figureRefs.add(item.figureId);
    diff[item.difficulty]++;ans[item.answerIndex]++;
  }

  for(const item of cr){
    if(item.type!=='constructed-response'||item.unitId!=='u02') fail(`${item.questionId}: CR shape`);
    if(hashRecord(item)!==item.contentSha256) fail(`${item.questionId}: CR hash`);
    if(item.rubric.length!==4||[...item.rubric].map(x=>x.score).sort().join(',')!=='0,1,2,3') fail(`${item.questionId}: rubric`);
    if(item.fullCreditSolution.length<2||item.requiredWork.length<2||item.commonErrors.length<2) fail(`${item.questionId}: CR depth`);
    if(item.independentReview?.decision!=='pass'||!item.independentReview.derivedResult||!item.independentReview.ambiguity) fail(`${item.questionId}: independent review`);
    if(item.figureId) figureRefs.add(item.figureId);
  }

  for(const d of draw){
    if(!d.altText||d.altText.length<30||!d.drawingSpec||Object.keys(d.drawingSpec).length<8) fail(`${d.figureId}: drawing detail`);
    if(hashRecord(d)!==d.contentSha256) fail(`${d.figureId}: drawing hash`);
    if(d.figureReview?.decision!=='pass'||!d.figureReview.reviewNote||d.figureReview.reviewNote.length<40) fail(`${d.figureId}: figure review`);
    const svg=path.join(root,d.svgPath);
    if(!fs.existsSync(svg)) fail(`${d.figureId}: missing SVG`);
    const text=fs.readFileSync(svg,'utf8');
    if(!text.includes('<title')||!text.includes('<desc')||!text.includes('role="img"')) fail(`${d.figureId}: accessibility`);
    for(const token of d.svgAssertions||[]) if(!text.includes(token)) fail(`${d.figureId}: SVG assertion ${token}`);
  }
  allQ.push(...q);allR.push(...r);allCR.push(...cr);allL.push(l);allD.push(...draw);
}

if(allQ.length!==180||allR.length!==180||allCR.length!==30||allL.length!==15||allD.length!==3) fail('global counts');
if(new Set(allQ.map(x=>x.questionId)).size!==180||new Set(allQ.map(x=>x.text)).size!==180) fail('duplicate question ID/text');
if(new Set(allCR.map(x=>x.questionId)).size!==30) fail('duplicate CR ID');
if(new Set(allR.map(x=>x.independentSolution)).size!==180) fail('duplicate independent solutions');
if(new Set(allR.map(x=>x.difficultyReason)).size!==180) fail('duplicate difficulty reasons');
if(new Set(allR.map(x=>x.reviewerNote)).size!==180) fail('duplicate reviewer notes');
if(new Set(allL.map(x=>x.lectureReview.reviewNote)).size!==15) fail('duplicate lecture review notes');
if(new Set(allD.map(x=>x.figureReview.reviewNote)).size!==3) fail('duplicate figure review notes');
for(const [k,v] of Object.entries(diff)) if(v!==45) fail(`difficulty ${k}: ${v}`);
if(ans.some(v=>v!==45)) fail(`answer positions ${ans}`);

const svgDir=path.join(root,'figures/u02');
const svgFiles=fs.readdirSync(svgDir).filter(x=>x.endsWith('.svg'));
if(svgFiles.length!==3) fail(`expected 3 SVGs got ${svgFiles.length}`);
for(const fid of figureRefs) if(!svgFiles.includes(`${fid}.svg`)) fail(`unresolved figure ${fid}`);

const banned=[/針對「要讓/u,/本題採用/u,/方法—結果/u,/甲、乙兩份方案/u,/登錄/u,/保留原題/u];
for(const item of [...allQ,...allL,...allCR]){
  const text=JSON.stringify(item);
  for(const rx of banned) if(rx.test(text)) fail(`banned generated phrase ${rx}`);
}
for(const l of allL) if(l.title.includes('、')) fail(`forbidden title punctuation ${l.lectureId}`);

const manifest=readJson('manifest/file-sha256.json');
if(!Array.isArray(manifest.files)||manifest.files.length<1) fail('missing file manifest');
for(const entry of manifest.files){
  const p=path.join(root,entry.path);
  if(!fs.existsSync(p)) fail(`missing hashed file ${entry.path}`);
  const h=crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
  if(h!==entry.sha256) fail(`file hash ${entry.path}`);
}

console.log(JSON.stringify({
  status:'PASS',unitId:'u02',newSkillCount:15,u02SkillTotalAfterBatch:15,
  totalHumanSkillCountAfterBatch:30,lectureCount:15,mcQuestionCount:180,
  constructedResponseCount:30,semanticReviewCount:180,figureCount:3,
  difficultyCounts:diff,answerIndexCounts:ans,contentHashesVerified:true,
  fileManifestVerified:true,figureReferencesVerified:true,
  questionSpecificReviewEvidenceVerified:true,skillSpecificLectureReviewVerified:true,
  svgGeometryAssertionsVerified:true,productionActivationAllowed:false
},null,2));
