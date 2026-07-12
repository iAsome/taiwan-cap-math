import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const AUTH='CHATGPT_HUMAN_AUTHORED_R1';
const expected=[
 ['s001','u12-methods','factoring-common',[]],
 ['s002','u12-methods','factoring-formula',['factoring-common']],
 ['s003','u12-methods','factoring-cross',['factoring-formula']],
 ['s004','u12-methods','factoring-by-grouping',['factoring-cross']],
 ['s005','u12-methods','factoring-quadratic-trinomial',['factoring-by-grouping']],
 ['s006','u12-methods','factoring-common-mistake-sign',['factoring-quadratic-trinomial']],
 ['s007','u12-applications','factoring-application',['factoring-common-mistake-sign']],
 ['s008','u12-applications','factoring-check-expand',['factoring-application']],
 ['s009','u12-applications','factoring-word-area',['factoring-check-expand']],
 ['s010','u12-literacy','factoring-literacy',['factoring-word-area']]
];
const fail=(message,details={})=>{console.error(JSON.stringify({status:'FAIL',message,details},null,2));process.exit(1)};
const readJson=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map((x,i)=>{try{return JSON.parse(x)}catch(e){fail(`invalid JSONL ${p}:${i+1}`,{error:e.message})}});
const normalize=v=>Array.isArray(v)?v.map(normalize):(v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,normalize(v[k])])):v);
const hashRecord=r=>{const c=structuredClone(r);delete c.contentSha256;return crypto.createHash('sha256').update(JSON.stringify(normalize(c))).digest('hex')};
const ntext=s=>String(s).normalize('NFKC').replace(/[，。；：？！「」『』（）()、,.;:!?\s]/g,'').toLowerCase();
const skeleton=s=>ntext(s).replace(/(?<![a-z])[-+]?\d+(?:\.\d+)?/g,'<n>');
const allQ=[],allCR=[],allR=[],allL=[],allD=[]; const refs=new Set();
const globalDiff={basic:0,standard:0,advanced:0,literacy:0}; const globalAns=[0,0,0,0];
const simplified=/[学习这类个为与后会应开关体实边长仅从图请写将经对错数据验]/u;
for(const [slot,topic,skill,prereqs] of expected){
 const base=`units/u12/${slot}`;
 for(const f of ['lecture.json','mc-questions.jsonl','constructed-response.jsonl','semantic-reviews.jsonl','drawing-specs.jsonl']) if(!fs.existsSync(path.join(root,base,f))) fail('missing required file',{file:`${base}/${f}`});
 const l=readJson(`${base}/lecture.json`), q=readJsonl(`${base}/mc-questions.jsonl`), cr=readJsonl(`${base}/constructed-response.jsonl`), r=readJsonl(`${base}/semantic-reviews.jsonl`), d=readJsonl(`${base}/drawing-specs.jsonl`);
 if(l.unitId!=='u12'||l.topicId!==topic||l.skillId!==skill) fail(`${slot}: locked lecture identity mismatch`);
 if(JSON.stringify((l.prerequisites||[]).map(x=>x.skillId))!==JSON.stringify(prereqs)) fail(`${slot}: prerequisite mismatch`,{got:(l.prerequisites||[]).map(x=>x.skillId),expected:prereqs});
 if(l.contentAuthority!==AUTH||l.replacementPolicy!=='REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION') fail(`${slot}: lecture authority/isolation`);
 if(l.title.includes('、')) fail(`${slot}: lecture title contains forbidden dunhao`);
 if((l.workedExamples||[]).length<4||(l.commonMistakes||[]).length<6||(l.learningOutcomes||[]).length<3||(l.method||[]).length<4) fail(`${slot}: lecture depth`);
 if(!l.lectureReview?.reviewNote||l.lectureReview.reviewNote.length<40||l.lectureReview?.mathematicalCorrectness!=='pass') fail(`${slot}: weak lecture review`);
 if(hashRecord(l)!==l.contentSha256) fail(`${slot}: lecture content hash`);
 if(q.length!==12||cr.length<2||r.length!==12) fail(`${slot}: count mismatch`,{lectures:1,mc:q.length,cr:cr.length,reviews:r.length});
 const sd={basic:0,standard:0,advanced:0,literacy:0}, sa=[0,0,0,0];
 for(const item of q){
  if(item.unitId!=='u12'||item.numericUnitId!==12||item.topicId!==topic||item.skillId!==skill||item.type!=='mc') fail(`${item.questionId}: locked identity/shape`);
  if(item.contentAuthority!==AUTH||item.replacementPolicy!=='REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION'||item.noTemplateDeclaration!==true) fail(`${item.questionId}: authority/isolation`);
  if(!['basic','standard','advanced','literacy'].includes(item.difficulty)) fail(`${item.questionId}: difficulty`);
  if(!Array.isArray(item.choices)||item.choices.length!==4||new Set(item.choices).size!==4||!Number.isInteger(item.answerIndex)||item.answerIndex<0||item.answerIndex>3) fail(`${item.questionId}: choices`);
  if(!Array.isArray(item.optionAnalysis)||item.optionAnalysis.length!==4||item.optionAnalysis.filter(x=>x.truth).length!==1||!item.optionAnalysis[item.answerIndex].truth) fail(`${item.questionId}: option truth`);
  item.optionAnalysis.forEach((x,i)=>{if(x.choice!==item.choices[i]||typeof x.reason!=='string'||x.reason.length<3) fail(`${item.questionId}: option analysis ${i}`)});
  if(!item.independentSolution||item.independentSolution.length<7||item.independentSolution===item.explanation) fail(`${item.questionId}: independent solution evidence`);
  if(!Array.isArray(item.givenConditions)||!item.givenConditions.length||!item.target||!item.prerequisiteCheck||!item.unitAndRoundingChecks||!item.ambiguityAndBoundaryAudit||!item.difficultyReason) fail(`${item.questionId}: audit fields`);
  if(item.difficulty==='literacy'&&(!item.literacyContextNecessity||item.literacyContextNecessity.length<18)) fail(`${item.questionId}: literacy necessity`);
  if(hashRecord(item)!==item.contentSha256) fail(`${item.questionId}: content hash`);
  const rv=r.find(x=>x.questionId===item.questionId); if(!rv) fail(`${item.questionId}: missing semantic review`);
  if(rv.contentAuthority!==AUTH||rv.contentSha256!==item.contentSha256||rv.answerMatch!==true||rv.uniqueCorrectAnswer!==true||rv.reviewerDecision!=='pass') fail(`${item.questionId}: review state`);
  if(rv.independentSolution!==item.independentSolution||rv.derivedAnswer!==item.choices[item.answerIndex]||rv.storedAnswer!==item.choices[item.answerIndex]) fail(`${item.questionId}: independent review answer`);
  if(JSON.stringify(rv.optionTruth)!==JSON.stringify(item.optionAnalysis.map(x=>x.truth))) fail(`${item.questionId}: review option truth`);
  const ac=rv.ambiguityChecks||{}; for(const k of ['secondCorrectAnswer','undefinedSymbol','unitConflict','roundingConflict','domainBoundary','alternateReading']) if(typeof ac[k]!=='string'||ac[k].length<35) fail(`${item.questionId}: weak ambiguity check ${k}`);
  if(!rv.reviewerNote.includes(rv.independentSolution)||rv.reviewerNote.length<150) fail(`${item.questionId}: weak reviewer note`);
  if(item.figureId) refs.add(item.figureId);
  sd[item.difficulty]++; sa[item.answerIndex]++; globalDiff[item.difficulty]++; globalAns[item.answerIndex]++;
 }
 if(Object.values(sd).some(x=>x!==3)||sa.some(x=>x!==3)) fail(`${slot}: per-skill distribution`,{difficulty:sd,answerIndex:sa});
 for(const item of cr){
  if(item.unitId!=='u12'||item.numericUnitId!==12||item.topicId!==topic||item.skillId!==skill||item.type!=='constructed-response') fail(`${item.questionId}: CR identity`);
  if(item.contentAuthority!==AUTH||item.replacementPolicy!=='REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION') fail(`${item.questionId}: CR authority`);
  if(hashRecord(item)!==item.contentSha256) fail(`${item.questionId}: CR hash`);
  if(!Array.isArray(item.rubric)||item.rubric.length!==4||item.rubric.map(x=>x.score).sort().join(',')!=='0,1,2,3') fail(`${item.questionId}: rubric`);
  if((item.requiredWork||[]).length<2||(item.fullCreditSolution||[]).length<2||(item.reasoningSteps||[]).length<1||(item.commonErrors||[]).length<2) fail(`${item.questionId}: CR depth`);
  for(const k of ['partialCreditRules','followThroughPolicy','unitAndNotationRules','answerOnlyPolicy']) if(!item[k]||String(item[k]).length<10) fail(`${item.questionId}: missing ${k}`);
  if(!item.independentReview?.derivedResult||!item.independentReview?.ambiguity||item.independentReview?.decision!=='pass') fail(`${item.questionId}: CR independent review`);
  if(item.figureId) refs.add(item.figureId);
 }
 for(const spec of d){
  if(spec.unitId!=='u12'||spec.contentAuthority!==AUTH||!spec.figureId||!spec.svgPath) fail(`${slot}: drawing identity`);
  if(hashRecord(spec)!==spec.contentSha256) fail(`${spec.figureId}: drawing hash`);
  if(!spec.altText||spec.altText.length<30||!spec.drawingSpec||Object.keys(spec.drawingSpec).length<8||!spec.mobileReadabilityReview||!spec.answerLeakageReview) fail(`${spec.figureId}: drawing detail`);
  if(spec.figureReview?.decision!=='pass'||!spec.figureReview.reviewNote||spec.figureReview.reviewNote.length<45) fail(`${spec.figureId}: figure review`);
  const p=path.join(root,spec.svgPath); if(!fs.existsSync(p)) fail(`${spec.figureId}: missing SVG`);
  const svg=fs.readFileSync(p,'utf8'); if(!svg.includes('<title')||!svg.includes('<desc')||!svg.includes('role="img"')||!svg.includes(`viewBox="${spec.viewBox}"`)) fail(`${spec.figureId}: SVG accessibility/viewBox`);
  for(const token of spec.svgAssertions||[]) if(!svg.includes(token)) fail(`${spec.figureId}: missing SVG assertion`,{token});
 }
 const teaching=JSON.stringify([l,...q,...cr]); if(simplified.test(teaching)) fail(`${slot}: possible simplified Chinese character`,{match:teaching.match(simplified)?.[0]});
 allL.push(l);allQ.push(...q);allCR.push(...cr);allR.push(...r);allD.push(...d);
}
if(allL.length!==10||allQ.length!==120||allCR.length!==20||allR.length!==120||allD.length!==3) fail('global count mismatch',{lectures:allL.length,mc:allQ.length,cr:allCR.length,reviews:allR.length,figures:allD.length});
if(Object.values(globalDiff).some(x=>x!==30)||globalAns.some(x=>x!==30)) fail('global distribution',{difficulty:globalDiff,answerIndex:globalAns});
const uniq=(arr,label)=>{if(new Set(arr).size!==arr.length) fail(`duplicate ${label}`)};
uniq(allQ.map(x=>x.questionId),'MC IDs'); uniq(allQ.map(x=>ntext(x.text)),'normalized MC prompts'); uniq(allCR.map(x=>x.questionId),'CR IDs'); uniq(allCR.map(x=>ntext(x.prompt)),'normalized CR prompts'); uniq(allL.map(x=>x.lectureId),'lecture IDs'); uniq(allL.map(x=>JSON.stringify(x.conceptNarrative)),'lecture bodies'); uniq(allD.map(x=>x.figureId),'figure IDs');
uniq(allR.map(x=>x.independentSolution),'independent solutions'); uniq(allR.map(x=>x.difficultyReason),'difficulty reasons'); uniq(allR.map(x=>x.reviewerNote),'reviewer notes'); uniq(allL.map(x=>x.lectureReview.reviewNote),'lecture review notes');
const skelMap=new Map(); for(const q of allQ){const s=skeleton(q.text);const prev=skelMap.get(s);if(prev) fail('near-identical MC prompts differing only by numeric literals',{first:prev,second:q.questionId,skeleton:s});skelMap.set(s,q.questionId)}
const crSkel=new Map(); for(const q of allCR){const s=skeleton(q.prompt);const prev=crSkel.get(s);if(prev) fail('near-identical CR prompts differing only by numeric literals',{first:prev,second:q.questionId,skeleton:s});crSkel.set(s,q.questionId)}
for(const id of refs) if(!allD.some(x=>x.figureId===id)) fail('missing referenced drawing spec',{figureId:id});
const svgFiles=fs.readdirSync(path.join(root,'figures/u12')).filter(x=>x.endsWith('.svg')); if(svgFiles.length!==3) fail('SVG count',{got:svgFiles.length}); for(const d of allD) if(!svgFiles.includes(`${d.figureId}.svg`)) fail('unresolved SVG',{figureId:d.figureId});
const isolation=readJson('manifest/legacy-content-isolation.json'); for(const [k,v] of Object.entries({legacyContentImported:false,legacySemanticEvidenceAccepted:false,oldProductionRuntimeModified:false,deleteLegacyNow:false,finalRetirementRequired:true,productionActivationAllowed:false})) if(isolation[k]!==v) fail(`legacy isolation ${k}`,{got:isolation[k],expected:v});
const pm=readJson('manifest/project-manifest.json'); if(pm.unitId!=='u12'||pm.skills.length!==10||pm.productionActivationAllowed!==false||pm.expectedBaseHead!=='__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__') fail('project manifest contract');
if(fs.existsSync(path.join(root,'production'))||fs.existsSync(path.join(root,'runtime'))) fail('production/runtime directory forbidden');
const fm=readJson('manifest/file-sha256.json'); if(fm.algorithm!=='SHA-256 raw bytes'||!Array.isArray(fm.files)||fm.files.length<1) fail('file manifest'); for(const e of fm.files){const p=path.join(root,e.path);if(!fs.existsSync(p)) fail('missing hashed file',{path:e.path});const b=fs.readFileSync(p);const h=crypto.createHash('sha256').update(b).digest('hex');if(h!==e.sha256||b.length!==e.bytes) fail('file hash/size',{path:e.path})}
const ci=readJson('manifest/content-sha256.json'); if(ci.recordCount!==273||ci.records.length!==273) fail('content index count',{recordCount:ci.recordCount,records:ci.records.length});
const staging=path.join(root,'staging'); let emittedModuleCount=0;if(fs.existsSync(staging)){const mods=fs.readdirSync(staging).filter(x=>x.endsWith('-human-content.mjs'));emittedModuleCount=mods.length;if(mods.length!==10||!fs.existsSync(path.join(staging,'u12-batch-013-staging-manifest.json'))) fail('staging emission shape',{modules:mods.length})}
console.log(JSON.stringify({status:'PASS',packageId:'math-v2-human-content-batch-013-u12-complete',unitId:'u12',lockedSkillCount:10,lectureCount:allL.length,mcQuestionCount:allQ.length,constructedResponseCount:allCR.length,semanticReviewCount:allR.length,figureCount:allD.length,difficultyCounts:globalDiff,answerIndexCounts:globalAns,contentHashesVerified:true,fileManifestVerified:true,figureReferencesVerified:true,svgGeometryAssertionsVerified:true,questionSpecificReviewEvidenceVerified:true,skillSpecificLectureReviewVerified:true,internalExactDuplicateScanVerified:true,numericSkeletonDuplicateScanVerified:true,legacyIsolationVerified:true,stagingPresent:fs.existsSync(staging),emittedModuleCount,productionActivationAllowed:false},null,2));
