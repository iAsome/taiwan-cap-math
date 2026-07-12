import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const AUTH='CHATGPT_HUMAN_AUTHORED_R1';
const slots=Array.from({length:16},(_,i)=>`s${String(i+1).padStart(3,'0')}`);
const locked=[
['s001','u11-square-root','square-root-meaning'],['s002','u11-square-root','square-root-simplify'],['s003','u11-square-root','square-root-arithmetic'],['s004','u11-square-root','square-root-estimate'],['s005','u11-square-root','sqrt-notation'],['s006','u11-square-root','sqrt-perfect-square'],['s007','u11-square-root','sqrt-rationalize-simple'],['s008','u11-square-root','sqrt-comparison'],['s009','u11-pythagorean','pythagorean-theorem'],['s010','u11-pythagorean','pythagorean-application'],['s011','u11-pythagorean','coordinate-distance-pythagorean'],['s012','u11-pythagorean','pythagorean-find-leg'],['s013','u11-pythagorean','pythagorean-word'],['s014','u11-pythagorean','right-triangle-identify'],['s015','u11-pythagorean','pythagorean-converse-basic'],['s016','u11-literacy','root-literacy']];
const readJson=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map((x,i)=>{try{return JSON.parse(x)}catch(e){throw new Error(`${p}:${i+1}: invalid JSON`)}});
const normalize=v=>Array.isArray(v)?v.map(normalize):(v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,normalize(v[k])])):v);
const hashRecord=r=>{const c=structuredClone(r);delete c.contentSha256;return crypto.createHash('sha256').update(JSON.stringify(normalize(c))).digest('hex')};
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const fail=m=>{throw new Error(m)};
const required=(o,keys,id)=>{for(const k of keys) if(o[k]===undefined||o[k]===null||o[k]==='') fail(`${id}: missing ${k}`)};
const normText=s=>s.toLowerCase().replace(/[\s，。！？；：「」『』（）()]/gu,'');
const structural=s=>normText(s).replace(/[-+]?\d+(?:\.\d+)?/gu,'#').replace(/平方公分|平方公尺|公分|公尺|公里|分鐘|伏特|元|人|片/gu,'[單位]');
const ngrams=(s,n=3)=>{const a=new Set();for(let i=0;i<=s.length-n;i++)a.add(s.slice(i,i+n));return a};
const jaccard=(a,b)=>{const A=ngrams(a),B=ngrams(b);let inter=0;for(const x of A)if(B.has(x))inter++;return inter/(A.size+B.size-inter||1)};
const diff={basic:0,standard:0,advanced:0,literacy:0},ans=[0,0,0,0];
const allQ=[],allR=[],allCR=[],allL=[],allD=[];const figureRefs=new Set();
for(let si=0;si<slots.length;si++){
 const slot=slots[si],[eslot,topic,skill]=locked[si];if(slot!==eslot)fail('slot lock mismatch');
 const base=`units/u11/${slot}`;
 const l=readJson(`${base}/lecture.json`),q=readJsonl(`${base}/mc-questions.jsonl`),r=readJsonl(`${base}/semantic-reviews.jsonl`),cr=readJsonl(`${base}/constructed-response.jsonl`),draw=readJsonl(`${base}/drawing-specs.jsonl`);
 if(l.unitId!=='u11'||l.topicId!==topic||l.skillId!==skill||l.lockedSkillOrder!==si+1)fail(`${slot}: lecture lock mismatch`);
 if(q.length!==12||r.length!==12||cr.length<2)fail(`${slot}: count mismatch`);
 if(l.contentAuthority!==AUTH||hashRecord(l)!==l.contentSha256)fail(`${slot}: lecture authority/hash`);
 if(l.title.includes('、')||l.lockedTitle.includes('、'))fail(`${slot}: forbidden dunhao in title`);
 if(l.workedExamples.length<4||l.commonMistakes.length<6||l.selfCheck.length<4||l.method.length<4)fail(`${slot}: lecture depth`);
 if(!l.lectureReview?.reviewNote||l.lectureReview.reviewNote.length<60||l.lectureReview.reviewNote.includes('Definitions, edge cases'))fail(`${slot}: weak lecture review`);
 if(l.prerequisites.some(x=>!x.skillId||!x.requiredLevel||x.requiredLevel.length<20))fail(`${slot}: weak prerequisite bridge`);
 const qDiff={basic:0,standard:0,advanced:0,literacy:0},qAns=[0,0,0,0];
 for(const item of q){
  required(item,['questionId','unitId','topicId','skillId','difficulty','type','text','givenConditions','target','choices','answerIndex','independentSolution','explanation','steps','optionAnalysis','misconceptionTarget','prerequisiteCheck','estimatedTimeSec','unitAndRoundingCheck','ambiguityAndBoundaryAudit','difficultyReason','contentAuthority','contentSha256'],item.questionId);
  if(item.unitId!=='u11'||item.topicId!==topic||item.skillId!==skill||item.lockedSkillOrder!==si+1||item.type!=='mc')fail(`${item.questionId}: lock/shape`);
  if(item.contentAuthority!==AUTH||hashRecord(item)!==item.contentSha256)fail(`${item.questionId}: authority/hash`);
  if(item.choices.length!==4||new Set(item.choices).size!==4||item.optionAnalysis.length!==4)fail(`${item.questionId}: choices`);
  if(item.optionAnalysis.some((x,i)=>x.choice!==item.choices[i]||typeof x.reason!=='string'||x.reason.length<3))fail(`${item.questionId}: option analysis`);
  if(item.optionAnalysis.filter(x=>x.truth).length!==1||!item.optionAnalysis[item.answerIndex].truth)fail(`${item.questionId}: unique truth`);
  if(item.steps.length<3||item.independentSolution===item.explanation||item.independentSolution.length<18)fail(`${item.questionId}: independent solution evidence`);
  if(!['basic','standard','advanced','literacy'].includes(item.difficulty))fail(`${item.questionId}: difficulty`);
  if(item.difficulty==='literacy'&&(!item.literacyContextNecessity||item.literacyContextNecessity.length<10))fail(`${item.questionId}: literacy necessity`);
  if(item.difficulty!=='literacy'&&item.literacyContextNecessity!==null)fail(`${item.questionId}: unexpected literacy field`);
  if(item.figureId){figureRefs.add(item.figureId);if(!item.drawingSpecReference?.includes(item.figureId))fail(`${item.questionId}: drawing ref`)}
  const rev=r.filter(x=>x.questionId===item.questionId);if(rev.length!==1)fail(`${item.questionId}: semantic review count`);
  const rv=rev[0];
  if(rv.contentSha256!==item.contentSha256||rv.contentAuthority!==AUTH||rv.reviewerDecision!=='pass'||!rv.answerMatch||!rv.uniqueCorrectAnswer)fail(`${item.questionId}: review state`);
  if(rv.independentSolution!==item.independentSolution||rv.independentSolution===item.explanation)fail(`${item.questionId}: review independence`);
  if(rv.derivedAnswer!==item.choices[item.answerIndex]||rv.storedAnswer!==item.choices[item.answerIndex])fail(`${item.questionId}: answer mismatch`);
  if(JSON.stringify(rv.optionTruth)!==JSON.stringify(item.optionAnalysis.map(x=>x.truth)))fail(`${item.questionId}: option truth mismatch`);
  if(!rv.reviewerNote.includes(rv.independentSolution)||rv.reviewerNote.length<150)fail(`${item.questionId}: weak reviewer note`);
  if(Object.values(rv.ambiguityChecks||{}).some(x=>typeof x!=='string'||x.length<30))fail(`${item.questionId}: generic ambiguity check`);
  qDiff[item.difficulty]++;qAns[item.answerIndex]++;diff[item.difficulty]++;ans[item.answerIndex]++;allQ.push(item);allR.push(rv);
 }
 for(const [d,c] of Object.entries(qDiff))if(c!==3)fail(`${slot}: difficulty ${d}=${c}`);
 if(qAns.some(x=>x!==3))fail(`${slot}: answer distribution ${qAns}`);
 for(const item of cr){
  required(item,['questionId','prompt','requiredWork','fullCreditSolution','standardAnswer','alternativeMethod','reasoningSteps','rubric','partialCreditRules','followThroughPolicy','unitAndNotationRules','answerOnlyPolicy','independentReview','contentAuthority','contentSha256'],item.questionId);
  if(item.unitId!=='u11'||item.topicId!==topic||item.skillId!==skill||item.type!=='constructed-response')fail(`${item.questionId}: CR lock/shape`);
  if(item.contentAuthority!==AUTH||hashRecord(item)!==item.contentSha256)fail(`${item.questionId}: CR authority/hash`);
  if(item.requiredWork.length<2||item.fullCreditSolution.length<2||item.reasoningSteps.length<2||item.commonErrors.length<2)fail(`${item.questionId}: CR depth`);
  if(item.rubric.length!==4||item.rubric.map(x=>x.score).sort().join(',')!=='0,1,2,3'||new Set(item.rubric.map(x=>x.criteria)).size!==4)fail(`${item.questionId}: rubric`);
  if(item.partialCreditRules.length<2||item.followThroughPolicy.length<45||item.answerOnlyPolicy.length<30)fail(`${item.questionId}: scoring policy`);
  if(item.independentReview?.decision!=='pass'||!item.independentReview.derivedResult||item.independentReview.recomputation.length<20||item.independentReview.ambiguity.length<30)fail(`${item.questionId}: CR review`);
  if(item.figureId){figureRefs.add(item.figureId);if(!item.drawingSpecReference?.includes(item.figureId))fail(`${item.questionId}: CR drawing ref`)} allCR.push(item);
 }
 for(const d of draw){
  if(d.unitId!=='u11'||d.topicId!==topic||d.skillId!==skill||d.contentAuthority!==AUTH||hashRecord(d)!==d.contentSha256)fail(`${d.figureId}: drawing lock/hash`);
  if(!d.altText||d.altText.length<25||Object.keys(d.drawingSpec||{}).length<9)fail(`${d.figureId}: drawing detail`);
  if(d.figureReview?.decision!=='pass'||d.figureReview.reviewNote.length<60||d.mobileReadability?.decision!=='pass'||d.answerLeakageReview?.decision!=='pass')fail(`${d.figureId}: figure review`);
  const svg=path.join(root,d.svgPath);if(!fs.existsSync(svg))fail(`${d.figureId}: missing SVG`);const text=fs.readFileSync(svg,'utf8');
  if(!text.includes('<title')||!text.includes('<desc')||!text.includes('role="img"')||!text.includes('viewBox='))fail(`${d.figureId}: accessibility`);
  for(const token of d.svgAssertions||[])if(!text.includes(token))fail(`${d.figureId}: SVG assertion ${token}`);allD.push(d);
 }
 allL.push(l);
}
if(allL.length!==16||allQ.length!==192||allR.length!==192||allCR.length!==32||allD.length!==9)fail('global counts');
for(const [d,c] of Object.entries(diff))if(c!==48)fail(`difficulty ${d}=${c}`);if(ans.some(x=>x!==48))fail(`answer totals ${ans}`);
const uniq=(arr,key,label)=>{const s=new Set(arr.map(key));if(s.size!==arr.length)fail(`duplicate ${label}`)};
uniq(allQ,x=>x.questionId,'MC id');uniq(allQ,x=>normText(x.text),'normalized MC prompt');uniq(allCR,x=>x.questionId,'CR id');uniq(allCR,x=>normText(x.prompt),'normalized CR prompt');uniq(allR,x=>x.reviewerNote,'reviewer note');uniq(allR,x=>x.independentSolution,'review independent solution');uniq(allL,x=>x.lectureReview.reviewNote,'lecture review');uniq(allD,x=>x.figureId,'figure id');
const combined=[...allQ.map(x=>({id:x.questionId,skill:x.skillId,text:x.text,target:x.target})),...allCR.map(x=>({id:x.questionId,skill:x.skillId,text:x.prompt,target:'constructed-response'}))];
for(let i=0;i<combined.length;i++)for(let j=i+1;j<combined.length;j++){
 const a=combined[i],b=combined[j];if(a.skill!==b.skill)continue;const sa=structural(a.text),sb=structural(b.text);
 if(sa===sb)fail(`number/name/unit-only variant ${a.id} ${b.id}`);
 if(sa.length>22&&sb.length>22&&jaccard(sa,sb)>0.94&&a.target===b.target)fail(`near-identical prompt ${a.id} ${b.id}`);
}
const lectureBodies=allL.map(x=>normText(x.conceptNarrative.join('|')));if(new Set(lectureBodies).size!==16)fail('duplicate lecture body');
const simplified=/[边这为与实题应说数术开关间经认误图线点项从让后]/u;
for(const x of [...allQ,...allCR,...allL])if(simplified.test(JSON.stringify(x)))fail(`simplified Chinese detected ${x.questionId||x.lectureId}`);
const svgDir=path.join(root,'figures/u11'),svgFiles=fs.readdirSync(svgDir).filter(x=>x.endsWith('.svg'));if(svgFiles.length!==9)fail(`SVG count ${svgFiles.length}`);for(const fid of figureRefs)if(!svgFiles.includes(`${fid}.svg`))fail(`unresolved figure ${fid}`);
const isolation=readJson('manifest/legacy-content-isolation.json');for(const [k,v] of Object.entries({legacyContentImported:false,legacySemanticEvidenceAccepted:false,oldProductionRuntimeModified:false,deleteLegacyNow:false,finalRetirementRequired:true,productionActivationAllowed:false}))if(isolation[k]!==v)fail(`isolation ${k}`);
const project=readJson('manifest/project-manifest.json');if(project.productionActivationAllowed!==false||project.centralCoordinatorApprovalRequired!==true||project.syllabusLockSha256!=='930dbdbbb70818b461ba6ad28620dfed69442716b653be91a9025ebe92d353fc')fail('project manifest contract');
const content=readJson('manifest/content-sha256.json');if(content.records.length!==16+192+32+9)fail('content hash inventory count');
const manifest=readJson('manifest/file-sha256.json');if(!Array.isArray(manifest.files)||manifest.files.length<100)fail('file manifest missing/too small');for(const e of manifest.files){const p=path.join(root,e.path);if(!fs.existsSync(p))fail(`missing hashed file ${e.path}`);if(sha(fs.readFileSync(p))!==e.sha256)fail(`file hash ${e.path}`)}
const staging=path.join(root,'staging');let emittedModuleCount=0;if(fs.existsSync(staging)){const mods=fs.readdirSync(staging).filter(x=>x.endsWith('.mjs')).sort();emittedModuleCount=mods.length;if(mods.join(',')!=='u11-constructed-response.mjs,u11-lectures.mjs,u11-manifest.mjs,u11-mc-questions.mjs')fail(`staging modules ${mods}`)}
console.log(JSON.stringify({status:'PASS',batchId:'012-u11-complete',unitId:'u11',lockedSkillCount:16,lectureCount:16,mcQuestionCount:192,constructedResponseCount:32,semanticReviewCount:192,figureCount:9,difficultyCounts:diff,answerIndexCounts:ans,contentHashesVerified:true,fileManifestVerified:true,exactAndStructuralDuplicateChecksPassed:true,questionSpecificReviewEvidenceVerified:true,skillSpecificLectureReviewVerified:true,constructedResponseRubricsVerified:true,svgGeometryAssertionsVerified:true,traditionalChineseChecksPassed:true,legacyIsolationVerified:true,productionActivationAllowed:false,deliveryStagingAbsent:!fs.existsSync(staging),emittedModuleCount},null,2));
