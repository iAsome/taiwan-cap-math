import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const slots = Array.from({length:12}, (_,i)=>`s${String(i+1).padStart(3,'0')}`);
const expectedSkills = [
  'sequence-pattern','arithmetic-sequence-nth','arithmetic-sequence-common-diff','geometric-basic',
  'sequence-nth-term','arithmetic-mean-term','sequence-pattern-word','geometric-nth-basic',
  'arithmetic-series-sum','arithmetic-series-word','series-sum-word','sequence-literacy'
];
const AUTH='CHATGPT_HUMAN_AUTHORED_R1';
const fail=(message)=>{ throw new Error(message); };
const readJson=(rel)=>JSON.parse(fs.readFileSync(path.join(root,rel),'utf8'));
const readJsonl=(rel)=>fs.readFileSync(path.join(root,rel),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
const canonical=(v, omit=new Set(['contentSha256','reviewContentSha256']))=>Array.isArray(v)?v.map(x=>canonical(x,omit)):(v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().filter(k=>!omit.has(k)).map(k=>[k,canonical(v[k],omit)])):v);
const recordHash=(v)=>crypto.createHash('sha256').update(JSON.stringify(canonical(v))).digest('hex');
const shaFile=(p)=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const normalizePrompt=(s)=>s.normalize('NFKC').toLowerCase().replace(/[\s，。！？；：、,.!?;:'"「」『』（）()\[\]{}]/gu,'');
const skeleton=(s)=>normalizePrompt(s).replace(/[-+]?\d+(?:\.\d+)?/gu,'#').replace(/[A-Za-z_]+/gu,'v');
const simplified=/[这们为个后发从误项术练应现条]/u;
const allFiles=(dir)=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?allFiles(path.join(dir,e.name)):[path.join(dir,e.name)]);

const manifest=readJson('manifest/project-manifest.json');
if(manifest.packageId!=='math-v2-human-content-batch-015-u14-complete'||manifest.unitId!=='u14') fail('project manifest identity mismatch');
if(manifest.syllabusLockSha256!=='930dbdbbb70818b461ba6ad28620dfed69442716b653be91a9025ebe92d353fc') fail('syllabus lock SHA mismatch');
if(manifest.expectedBaseHead!=='__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__') fail('expected head placeholder changed');
if(manifest.productionActivationAllowed!==false) fail('production activation must remain false');

const isolation=readJson('manifest/legacy-content-isolation.json');
const expectedIsolation={legacyContentImported:false,legacySemanticEvidenceAccepted:false,oldProductionRuntimeModified:false,deleteLegacyNow:false,finalRetirementRequired:true,productionActivationAllowed:false,legacyReadForMathematicalContent:false};
for(const [k,v] of Object.entries(expectedIsolation)) if(isolation[k]!==v) fail(`legacy isolation ${k}`);

const allL=[], allQ=[], allR=[], allCR=[], allD=[];
const diff={basic:0,standard:0,advanced:0,literacy:0};
const ans=[0,0,0,0];
const figureRefs=new Set();
for(let si=0;si<slots.length;si++){
  const slot=slots[si]; const base=`units/u14/${slot}`;
  const l=readJson(`${base}/lecture.json`), q=readJsonl(`${base}/mc-questions.jsonl`), r=readJsonl(`${base}/semantic-reviews.jsonl`), cr=readJsonl(`${base}/constructed-response.jsonl`), d=readJsonl(`${base}/drawing-specs.jsonl`);
  if(l.skillId!==expectedSkills[si]||l.unitId!=='u14'||l.topicId===undefined) fail(`${slot}: locked skill mismatch`);
  if(q.length!==12||r.length!==12||cr.length<2) fail(`${slot}: content count mismatch`);
  if(l.contentAuthority!==AUTH||l.replacementPolicy!=='REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION') fail(`${slot}: lecture authority`);
  if(l.title.includes('、')||l.lockedTitle.includes('、')) fail(`${slot}: forbidden title punctuation`);
  if(simplified.test(JSON.stringify(l))) fail(`${slot}: simplified Chinese detected in lecture`);
  if(!Array.isArray(l.learningOutcomes)||l.learningOutcomes.length<3||!Array.isArray(l.glossary)||l.glossary.length<3||!Array.isArray(l.notation)||l.notation.length<2) fail(`${slot}: lecture foundations`);
  if(!Array.isArray(l.conceptNarrative)||l.conceptNarrative.length<4||!Array.isArray(l.formulas)||l.formulas.length<1||!Array.isArray(l.nonApplicableCases)||l.nonApplicableCases.length<3) fail(`${slot}: lecture concept depth`);
  if(!Array.isArray(l.method)||l.method.length<4||!Array.isArray(l.workedExamples)||l.workedExamples.length<4||!Array.isArray(l.commonMistakes)||l.commonMistakes.length<6) fail(`${slot}: lecture instructional depth`);
  if(!l.lectureReview?.reviewNote||l.lectureReview.reviewNote.length<45||l.lectureReview.mathematicalCorrectness!=='pass') fail(`${slot}: lecture review`);
  if(recordHash(l)!==l.contentSha256) fail(`${slot}: lecture content hash`);
  const localDiff={basic:0,standard:0,advanced:0,literacy:0}, localAns=[0,0,0,0];
  const qIds=new Set(q.map(x=>x.questionId));
  if(qIds.size!==12) fail(`${slot}: duplicate MC id`);
  for(const item of q){
    if(item.unitId!=='u14'||item.skillId!==expectedSkills[si]||item.type!=='mc'||item.contentAuthority!==AUTH) fail(`${item.questionId}: MC identity/authority`);
    if(item.choices?.length!==4||new Set(item.choices).size!==4||!Number.isInteger(item.answerIndex)||item.answerIndex<0||item.answerIndex>3) fail(`${item.questionId}: choices`);
    if(item.optionAnalysis?.length!==4||item.optionAnalysis.filter(x=>x.truth).length!==1||!item.optionAnalysis[item.answerIndex]?.truth) fail(`${item.questionId}: unique correct truth`);
    item.optionAnalysis.forEach((x,i)=>{if(x.choice!==item.choices[i]||typeof x.reason!=='string'||x.reason.length<4) fail(`${item.questionId}: option analysis ${i}`);});
    const minimums={text:10,independentSolution:15,mainExplanation:20,misconceptionTarget:6,prerequisiteCheck:15,unitCheck:20,roundingCheck:20,ambiguityBoundaryAudit:6,difficultyReason:10,authoringIntent:4};
    for(const [key,min] of Object.entries(minimums)) if(typeof item[key]!=='string'||item[key].length<min) fail(`${item.questionId}: weak ${key}`);
    if(item.independentSolution===item.mainExplanation) fail(`${item.questionId}: independent solution copied as explanation`);
    if(!Array.isArray(item.steps)||item.steps.length<2) fail(`${item.questionId}: weak steps`);
    if(!Array.isArray(item.givenConditions)||item.givenConditions.length<1||typeof item.target!=='string'||item.target.length<2) fail(`${item.questionId}: given/target`);
    if(typeof item.estimatedTimeSec!=='number'||item.estimatedTimeSec<30) fail(`${item.questionId}: estimated time`);
    if(item.difficulty==='literacy'&&(!item.literacyContextNecessity||item.literacyContextNecessity.length<20)) fail(`${item.questionId}: literacy necessity`);
    if(item.difficulty!=='literacy'&&item.literacyContextNecessity!==null) fail(`${item.questionId}: non-literacy context field`);
    if(simplified.test(JSON.stringify(item))) fail(`${item.questionId}: simplified Chinese detected`);
    if(recordHash(item)!==item.contentSha256) fail(`${item.questionId}: content hash`);
    const review=r.find(x=>x.questionId===item.questionId);
    if(!review) fail(`${item.questionId}: missing semantic review`);
    if(review.contentSha256!==item.contentSha256||review.contentAuthority!==AUTH||review.reviewerDecision!=='pass'||!review.answerMatch||!review.uniqueCorrectAnswer) fail(`${item.questionId}: semantic review state`);
    if(review.derivedAnswer!==item.choices[item.answerIndex]||review.storedAnswer!==item.choices[item.answerIndex]) fail(`${item.questionId}: stored answer mismatch`);
    if(JSON.stringify(review.optionTruth)!==JSON.stringify(item.optionAnalysis.map(x=>x.truth))) fail(`${item.questionId}: option truth mismatch`);
    if(typeof review.independentSolution!=='string'||review.independentSolution.length<8||review.independentSolution!==item.independentSolution) fail(`${item.questionId}: independent review solution`);
    if(!review.ambiguityChecks||Object.values(review.ambiguityChecks).some(x=>typeof x!=='string'||x.length<20)) fail(`${item.questionId}: ambiguity evidence`);
    if(typeof review.reviewerNote!=='string'||review.reviewerNote.length<80||!review.reviewerNote.includes(review.independentSolution)) fail(`${item.questionId}: reviewer evidence`);
    if(recordHash(review)!==review.reviewContentSha256) fail(`${item.questionId}: review hash`);
    if(item.figureId){ figureRefs.add(item.figureId); if(!item.figureDrawingSpecRef) fail(`${item.questionId}: figure spec ref`); }
    localDiff[item.difficulty]++; localAns[item.answerIndex]++; diff[item.difficulty]++; ans[item.answerIndex]++;
  }
  for(const [k,v] of Object.entries(localDiff)) if(v!==3) fail(`${slot}: ${k} distribution ${v}`);
  if(localAns.some(v=>v!==3)) fail(`${slot}: answer distribution ${localAns}`);
  if(new Set(r.map(x=>x.questionId)).size!==12) fail(`${slot}: duplicate review id`);
  for(const item of cr){
    if(item.unitId!=='u14'||item.skillId!==expectedSkills[si]||item.type!=='constructed-response'||item.contentAuthority!==AUTH) fail(`${item.questionId}: CR identity/authority`);
    if(typeof item.prompt!=='string'||item.prompt.length<20) fail(`${item.questionId}: weak prompt`);
    if(typeof item.followThroughPolicy!=='string'||item.followThroughPolicy.length<12) fail(`${item.questionId}: weak followThroughPolicy`);
    if(typeof item.answerOnlyPolicy!=='string'||item.answerOnlyPolicy.length<8) fail(`${item.questionId}: weak answerOnlyPolicy`);
    if(typeof item.unitAndNotationRules!=='string'||item.unitAndNotationRules.length<8) fail(`${item.questionId}: weak unitAndNotationRules`);
    if(!Array.isArray(item.requiredWork)||item.requiredWork.length<2||!Array.isArray(item.fullCreditSolution)||item.fullCreditSolution.length<2||!Array.isArray(item.reasoningSteps)||item.reasoningSteps.length<2) fail(`${item.questionId}: solution depth`);
    if(!Array.isArray(item.alternativeSolutions)||item.alternativeSolutions.length<1) fail(`${item.questionId}: alternative method`);
    if(!Array.isArray(item.rubric)||item.rubric.length!==4||item.rubric.map(x=>x.score).sort().join(',')!=='0,1,2,3'||item.rubric.some(x=>x.criteria.length<8)) fail(`${item.questionId}: rubric`);
    if(!Array.isArray(item.partialCreditRules)||item.partialCreditRules.length<1||!Array.isArray(item.commonErrors)||item.commonErrors.length<2) fail(`${item.questionId}: partial credit/errors`);
    if(item.independentReview?.decision!=='pass'||!item.independentReview.derivedResult||!item.independentReview.ambiguity||!item.independentReview.reviewNote) fail(`${item.questionId}: independent review`);
    if(simplified.test(JSON.stringify(item))) fail(`${item.questionId}: simplified Chinese detected`);
    if(recordHash(item)!==item.contentSha256) fail(`${item.questionId}: CR content hash`);
    if(item.figureId){figureRefs.add(item.figureId);if(!item.figureDrawingSpecRef) fail(`${item.questionId}: CR figure spec ref`);}
  }
  for(const fig of d){
    if(fig.contentAuthority!==AUTH||!fig.figureId||!fig.altText||fig.altText.length<30) fail(`${fig.figureId||slot}: drawing identity`);
    if(!fig.drawingSpec||Object.keys(fig.drawingSpec).length<10||!Array.isArray(fig.svgAssertions)||fig.svgAssertions.length<4) fail(`${fig.figureId}: drawing detail`);
    if(fig.figureReview?.decision!=='pass'||fig.figureReview?.manualVisualInspection!=='pass'||!fig.figureReview.reviewNote||fig.figureReview.reviewNote.length<45) fail(`${fig.figureId}: figure review`);
    if(recordHash(fig)!==fig.contentSha256) fail(`${fig.figureId}: drawing hash`);
    const svgPath=path.join(root,fig.svgPath); if(!fs.existsSync(svgPath)) fail(`${fig.figureId}: missing SVG`);
    const svg=fs.readFileSync(svgPath,'utf8');
    for(const token of ['<title','<desc','role="img"',...fig.svgAssertions]) if(!svg.includes(token)) fail(`${fig.figureId}: SVG assertion ${token}`);
  }
  allL.push(l); allQ.push(...q); allR.push(...r); allCR.push(...cr); allD.push(...d);
}
if(allL.length!==12||allQ.length!==144||allR.length!==144||allCR.length!==24||allD.length!==4) fail('global content counts');
for(const [k,v] of Object.entries(diff)) if(v!==36) fail(`global ${k} count ${v}`);
if(ans.some(v=>v!==36)) fail(`global answer counts ${ans}`);
if(new Set(allQ.map(x=>x.questionId)).size!==144||new Set(allCR.map(x=>x.questionId)).size!==24||new Set(allD.map(x=>x.figureId)).size!==4) fail('global duplicate IDs');
if(new Set(allQ.map(x=>normalizePrompt(x.text))).size!==144) fail('duplicate normalized MC prompt');
if(new Set(allCR.map(x=>normalizePrompt(x.prompt))).size!==24) fail('duplicate normalized CR prompt');
const mcSkeletons=new Map();
for(const q of allQ){ const sk=skeleton(q.text)+'|'+normalizePrompt(q.authoringIntent); if(mcSkeletons.has(sk)) fail(`near-identical MC prompts: ${mcSkeletons.get(sk)} and ${q.questionId}`); mcSkeletons.set(sk,q.questionId); }
const crSkeletons=new Map();
for(const q of allCR){ const sk=skeleton(q.prompt)+'|'+skeleton(q.requiredWork.join('')); if(crSkeletons.has(sk)) fail(`near-identical CR prompts: ${crSkeletons.get(sk)} and ${q.questionId}`); crSkeletons.set(sk,q.questionId); }
if(new Set(allL.map(x=>recordHash(x))).size!==12) fail('duplicate lecture bodies');
if(new Set(allR.map(x=>x.reviewerNote)).size!==144||new Set(allR.map(x=>x.independentSolution)).size!==144) fail('repeated generic review evidence');
if(new Set(allD.map(x=>x.figureReview.reviewNote)).size!==4) fail('repeated figure review evidence');
for(const fid of figureRefs) if(!allD.some(x=>x.figureId===fid)) fail(`unresolved figure reference ${fid}`);
for(const fig of allD) if(!figureRefs.has(fig.figureId)) fail(`orphan figure ${fig.figureId}`);
const svgFiles=fs.readdirSync(path.join(root,'figures/u14')).filter(x=>x.endsWith('.svg'));
if(svgFiles.length!==4) fail(`expected 4 SVGs, got ${svgFiles.length}`);

const contentManifest=readJson('manifest/content-sha256.json');
const expectedRecordCount=12+144+144+24+4;
if(contentManifest.records?.length!==expectedRecordCount) fail('content hash manifest count');
const recordMap=new Map(contentManifest.records.map(x=>[`${x.type}:${x.id}`,x.sha256]));
for(const l of allL) if(recordMap.get(`lecture:${l.lectureId}`)!==l.contentSha256) fail(`${l.lectureId}: content manifest`);
for(const q of allQ) if(recordMap.get(`mc:${q.questionId}`)!==q.contentSha256) fail(`${q.questionId}: content manifest`);
for(const r of allR) if(recordMap.get(`semantic-review:${r.questionId}`)!==r.reviewContentSha256) fail(`${r.questionId}: review manifest`);
for(const c of allCR) if(recordMap.get(`constructed-response:${c.questionId}`)!==c.contentSha256) fail(`${c.questionId}: CR manifest`);
for(const d of allD) if(recordMap.get(`drawing-spec:${d.figureId}`)!==d.contentSha256) fail(`${d.figureId}: drawing manifest`);

const fileManifest=readJson('manifest/file-sha256.json');
if(fileManifest.algorithm!=='SHA-256'||!Array.isArray(fileManifest.files)) fail('file manifest shape');
const expectedFiles=allFiles(root).filter(p=>!p.includes(`${path.sep}staging${path.sep}`)&&path.relative(root,p)!=='manifest/file-sha256.json').map(p=>path.relative(root,p).split(path.sep).join('/')).sort();
const listed=fileManifest.files.map(x=>x.path).sort();
if(JSON.stringify(expectedFiles)!==JSON.stringify(listed)) fail('file manifest coverage mismatch');
for(const entry of fileManifest.files){const p=path.join(root,entry.path);if(!fs.existsSync(p)||shaFile(p)!==entry.sha256) fail(`file hash ${entry.path}`);}

const audit=readJson('review/final-human-audit.json');
if(audit.decision!=='pass'||audit.renderInspection!=='pass'||!Array.isArray(audit.actualIssuesFoundAndRepaired)||audit.actualIssuesFoundAndRepaired.length<2) fail('final human audit incomplete');
const figureReviewLines=readJsonl('review/figure-reviews.jsonl');
if(figureReviewLines.length!==4||figureReviewLines.some(x=>x.decision!=='pass'||x.manualVisualInspection!=='pass')) fail('aggregate figure reviews incomplete');

const stagingExists=fs.existsSync(path.join(root,'staging'));
console.log(JSON.stringify({status:'PASS',unitId:'u14',lockedSkillCount:12,lectureCount:12,mcQuestionCount:144,constructedResponseCount:24,semanticReviewCount:144,figureCount:4,difficultyCounts:diff,answerIndexCounts:ans,contentHashesVerified:true,fileManifestVerified:true,figureReferencesVerified:true,questionSpecificReviewEvidenceVerified:true,skillSpecificLectureReviewVerified:true,svgGeometryAssertionsVerified:true,traditionalChineseVerified:true,legacyIsolationVerified:true,stagingPresent:stagingExists,productionActivationAllowed:false},null,2));
