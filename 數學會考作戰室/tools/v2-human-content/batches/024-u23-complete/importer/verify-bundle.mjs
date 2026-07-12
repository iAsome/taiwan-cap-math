import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const AUTH = 'CHATGPT_HUMAN_AUTHORED_R1';
const REPLACEMENT = 'REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION';
const slots = Array.from({length:20},(_,i)=>`s${String(i+1).padStart(3,'0')}`);
const lock = [
 ['s001','u23-basics','solid-nets','展開圖',[]],
 ['s002','u23-basics','solid-views','立體三視圖',['solid-nets']],
 ['s003','u23-basics','solid-cross-section','截面概念',['solid-views']],
 ['s004','u23-basics','solid-prism-concept','角柱概念',['solid-cross-section']],
 ['s005','u23-basics','solid-pyramid-concept','角錐概念',['solid-prism-concept']],
 ['s006','u23-basics','solid-cylinder-concept','圓柱概念',['solid-pyramid-concept']],
 ['s007','u23-basics','solid-cone-concept','圓錐概念',['solid-cylinder-concept']],
 ['s008','u23-basics','cross-section-solid','截面與立體',['solid-cone-concept']],
 ['s009','u23-measure','prism-surface-area','柱體表面積',['cross-section-solid']],
 ['s010','u23-measure','prism-volume','柱體體積',['prism-surface-area']],
 ['s011','u23-measure','pyramid-cone-volume','錐體體積',['prism-volume']],
 ['s012','u23-measure','surface-area-net','由展開圖求表面積',['pyramid-cone-volume']],
 ['s013','u23-measure','volume-unit-conversion','體積單位換算',['surface-area-net']],
 ['s014','u23-measure','composite-solid-volume','組合體體積',['volume-unit-conversion']],
 ['s015','u23-measure','composite-solid-surface','組合體表面積',['composite-solid-volume']],
 ['s016','u23-literacy','solid-literacy','立體幾何素養題',['composite-solid-surface']],
 ['s017','u23-solid-measure','solid-sphere-basic','球體基本',['solid-literacy']],
 ['s018','u23-applications','solid-application-word','立體應用題',['solid-sphere-basic']],
 ['s019','u23-applications','solid-packaging','包裝問題',['solid-application-word']],
 ['s020','u23-composite','solid-similarity-scale','縮放與體積比',['solid-packaging']]
];
const fail = m => { throw new Error(m); };
const readJson = p => JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl = p => fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map((line,i)=>{
  try { return JSON.parse(line); } catch(e) { fail(`${p}:${i+1}: invalid JSONL`); }
});
const normalize = v => Array.isArray(v) ? v.map(normalize) :
  (v && typeof v === 'object' ? Object.fromEntries(Object.keys(v).sort().map(k=>[k,normalize(v[k])])) : v);
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const hashRecord = (r, field='contentSha256') => {
  const c=structuredClone(r); delete c[field];
  return sha(JSON.stringify(normalize(c)));
};
const normalizePrompt = s => s.normalize('NFKC')
  .replace(/\d+(?:\.\d+)?/g,'#').replace(/[A-Za-z]+/g,'X')
  .replace(/(公分|平方公分|立方公分|公尺|平方公尺|立方公尺|毫升|公升|公斤|公克|元|個|件|桶|支)/g,'U')
  .replace(/[，。？！：；、（）()\s×÷=π%⌊⌋]+/g,'');
const bannedSimplified = /[体积圆锥边顶这为与后发个里应显层线图数]/u;
const assertAuthority = (r,id) => {
  if(r.contentAuthority!==AUTH) fail(`${id}: wrong content authority`);
  if(r.replacementMarker!==REPLACEMENT) fail(`${id}: missing replacement marker`);
};
const ensureTrad = (r,id) => {
  const txt=JSON.stringify(r);
  if(bannedSimplified.test(txt)) fail(`${id}: simplified Chinese character detected`);
};
const allQ=[], allCR=[], allReviews=[], allLectures=[], allSpecs=[];
const ids=new Set(), promptSet=new Set(), normSet=new Set(), crPromptSet=new Set(), figureIds=new Set(), referencedFigures=new Set();
const globalDiff={basic:0,standard:0,advanced:0,literacy:0};
const globalAns=[0,0,0,0];

for (const [slot,topicId,skillId,lockedTitle,prereqs] of lock) {
  const base=`units/u23/${slot}`;
  const lecture=readJson(`${base}/lecture.json`);
  const qs=readJsonl(`${base}/mc-questions.jsonl`);
  const crs=readJsonl(`${base}/constructed-response.jsonl`);
  const reviews=readJsonl(`${base}/semantic-reviews.jsonl`);
  const specs=readJsonl(`${base}/drawing-specs.jsonl`);
  if(qs.length!==12) fail(`${slot}: expected 12 MC, got ${qs.length}`);
  if(crs.length<2) fail(`${slot}: expected at least 2 CR, got ${crs.length}`);
  if(reviews.length!==12) fail(`${slot}: expected 12 reviews, got ${reviews.length}`);
  if(lecture.unitId!=='u23'||lecture.numericUnitId!==23||lecture.topicId!==topicId||lecture.skillId!==skillId) fail(`${slot}: lecture identity mismatch`);
  if(lecture.lockedSkillTitle!==lockedTitle) fail(`${slot}: locked title mismatch`);
  if(lecture.title.includes('、')||lecture.lockedSkillTitle.includes('、')) fail(`${slot}: title contains forbidden separator punctuation`);
  const actualPrereqs=(lecture.prerequisites||[]).map(x=>x.skillId);
  if(JSON.stringify(actualPrereqs)!==JSON.stringify(prereqs)) fail(`${slot}: prerequisite mismatch`);
  if((lecture.prerequisites||[]).some(x=>!x.requiredLevel||!x.bridge||x.requiredLevel.length<12||x.bridge.length<15)) fail(`${slot}: weak prerequisite bridge`);
  if(!Array.isArray(lecture.learningOutcomes)||lecture.learningOutcomes.length<4) fail(`${slot}: learning outcomes`);
  if(!Array.isArray(lecture.glossary)||lecture.glossary.length<4) fail(`${slot}: glossary depth`);
  if(!Array.isArray(lecture.conceptNarrative)||lecture.conceptNarrative.length<4) fail(`${slot}: concept development`);
  if(!Array.isArray(lecture.formulas)||lecture.formulas.length<1) fail(`${slot}: formulas`);
  if(!Array.isArray(lecture.nonApplicableCases)||lecture.nonApplicableCases.length<4) fail(`${slot}: invalid-use cases`);
  if(!Array.isArray(lecture.method)||lecture.method.length<5) fail(`${slot}: method`);
  if(!Array.isArray(lecture.workedExamples)||lecture.workedExamples.length<4) fail(`${slot}: worked examples`);
  if(!Array.isArray(lecture.commonMistakes)||lecture.commonMistakes.length<6) fail(`${slot}: common mistakes`);
  if(!Array.isArray(lecture.selfCheck)||lecture.selfCheck.length<5) fail(`${slot}: self check`);
  if(!lecture.connections?.previous||!Array.isArray(lecture.connections?.next)||lecture.connections.next.length<2) fail(`${slot}: connections`);
  if(!lecture.lectureReview?.reviewNote||lecture.lectureReview.reviewNote.length<50) fail(`${slot}: lecture review`);
  assertAuthority(lecture,lecture.lectureId); ensureTrad(lecture,lecture.lectureId);
  if(hashRecord(lecture)!==lecture.contentSha256) fail(`${slot}: lecture content hash`);
  const perDiff={basic:0,standard:0,advanced:0,literacy:0};
  const perAns=[0,0,0,0];

  for(let i=0;i<qs.length;i++){
    const q=qs[i], expectedId=`u23-${slot}-v${String(i+1).padStart(3,'0')}`;
    if(q.questionId!==expectedId||q.unitId!=='u23'||q.topicId!==topicId||q.skillId!==skillId||q.numericUnitId!==23) fail(`${expectedId}: identity`);
    if(q.type!=='mc'||!['basic','standard','advanced','literacy'].includes(q.difficulty)) fail(`${expectedId}: type/difficulty`);
    if(!Array.isArray(q.choices)||q.choices.length!==4||new Set(q.choices).size!==4) fail(`${expectedId}: four unique choices`);
    if(!Number.isInteger(q.answerIndex)||q.answerIndex<0||q.answerIndex>3) fail(`${expectedId}: answer index`);
    if(!Array.isArray(q.optionAnalysis)||q.optionAnalysis.length!==4) fail(`${expectedId}: option analysis count`);
    if(q.optionAnalysis.some((o,j)=>o.choice!==q.choices[j]||typeof o.reason!=='string'||o.reason.length<4)) fail(`${expectedId}: option analysis pairing`);
    if(q.optionAnalysis.filter(o=>o.truth).length!==1||!q.optionAnalysis[q.answerIndex].truth) fail(`${expectedId}: unique truth`);
    if(!q.independentSolution||!q.explanation||q.independentSolution===q.explanation||q.independentSolution.length<25) fail(`${expectedId}: independent solution`);
    if(!Array.isArray(q.steps)||q.steps.length<1||!q.givenConditions?.length||!q.target) fail(`${expectedId}: solution evidence`);
    for(const k of ['misconceptionTarget','prerequisiteCheck','unitCheck','roundingCheck','ambiguityBoundaryAudit','difficultyReason','capBoundaryAudit']) if(typeof q[k]!=='string'||q[k].length<8) fail(`${expectedId}: weak ${k}`);
    if(q.difficulty==='literacy'&&(!q.literacyContextNecessity||q.literacyContextNecessity.length<20)) fail(`${expectedId}: literacy necessity`);
    if(hashRecord(q)!==q.contentSha256) fail(`${expectedId}: question hash`);
    assertAuthority(q,expectedId); ensureTrad(q,expectedId);
    if(ids.has(q.questionId)) fail(`${expectedId}: duplicate id`); ids.add(q.questionId);
    if(promptSet.has(q.prompt)) fail(`${expectedId}: duplicate exact prompt`); promptSet.add(q.prompt);
    const np=normalizePrompt(q.prompt);
    if(normSet.has(np)) fail(`${expectedId}: normalized number/name/unit-only duplicate prompt`); normSet.add(np);
    const rv=reviews.find(r=>r.questionId===q.questionId);
    if(!rv) fail(`${expectedId}: missing semantic review`);
    if(rv.contentSha256!==q.contentSha256||rv.derivedAnswer!==q.choices[q.answerIndex]||rv.storedAnswer!==q.choices[q.answerIndex]) fail(`${expectedId}: review answer/hash mismatch`);
    if(!rv.answerMatch||!rv.uniqueCorrectAnswer||rv.reviewerDecision!=='pass') fail(`${expectedId}: review decision`);
    if(JSON.stringify(rv.optionTruth)!==JSON.stringify(q.optionAnalysis.map(o=>o.truth))) fail(`${expectedId}: review truth mismatch`);
    if(rv.independentSolution!==q.independentSolution||!rv.reviewerNote.includes(q.questionId)||rv.reviewerNote.length<120) fail(`${expectedId}: review evidence`);
    if(Object.values(rv.ambiguityChecks||{}).length<6||Object.values(rv.ambiguityChecks).some(v=>typeof v!=='string'||v.length<20)) fail(`${expectedId}: ambiguity evidence`);
    const rvForHash=structuredClone(rv); delete rvForHash.reviewEvidenceSha256; delete rvForHash.contentSha256;
    if(sha(JSON.stringify(normalize(rvForHash)))!==rv.reviewEvidenceSha256) fail(`${expectedId}: review evidence hash`);
    if(rv.contentAuthority!==AUTH) fail(`${expectedId}: review authority`);
    if(q.figureId) referencedFigures.add(q.figureId);
    perDiff[q.difficulty]++; globalDiff[q.difficulty]++;
    perAns[q.answerIndex]++; globalAns[q.answerIndex]++;
    allQ.push(q); allReviews.push(rv);
  }
  for(const k of Object.keys(perDiff)) if(perDiff[k]!==3) fail(`${slot}: difficulty ${k}=${perDiff[k]}`);
  if(perAns.some(x=>x!==3)) fail(`${slot}: answer positions ${perAns}`);

  for(let i=0;i<crs.length;i++){
    const c=crs[i], expectedId=`u23-${slot}-cr${String(i+1).padStart(3,'0')}`;
    if(c.questionId!==expectedId||c.unitId!=='u23'||c.topicId!==topicId||c.skillId!==skillId) fail(`${expectedId}: identity`);
    if(c.type!=='constructed-response'||!c.requiredWork?.length||!c.fullCreditSolution?.length||!c.alternativeSolutions?.length) fail(`${expectedId}: solution shape`);
    if(!Array.isArray(c.rubric)||c.rubric.length!==4||c.rubric.map(x=>x.score).sort().join(',')!=='0,1,2,3') fail(`${expectedId}: rubric`);
    if(c.rubric.some(x=>!x.criteria||x.criteria.length<12)||!c.partialCreditRules?.length||!c.followThroughPolicy||!c.unitNotationRules||!c.answerOnlyPolicy) fail(`${expectedId}: scoring detail`);
    if(c.independentReview?.decision!=='pass'||!c.independentReview.derivedResult||!c.independentReview.ambiguityAndBoundary) fail(`${expectedId}: independent review`);
    if(hashRecord(c)!==c.contentSha256) fail(`${expectedId}: content hash`);
    assertAuthority(c,expectedId); ensureTrad(c,expectedId);
    if(ids.has(c.questionId)) fail(`${expectedId}: duplicate id`); ids.add(c.questionId);
    if(crPromptSet.has(c.prompt)) fail(`${expectedId}: duplicate CR prompt`); crPromptSet.add(c.prompt);
    if(c.figureId) referencedFigures.add(c.figureId);
    allCR.push(c);
  }
  for(const s of specs){
    if(figureIds.has(s.figureId)) fail(`${s.figureId}: duplicate figure id`); figureIds.add(s.figureId);
    if(s.unitId!=='u23'||s.skillSlot!==slot||!s.altText||!s.canvas?.viewBox||!s.drawingSpec||Object.keys(s.drawingSpec).length<6) fail(`${s.figureId}: drawing detail`);
    if(!s.mobileReadabilityReview||!s.answerLeakageReview||s.figureReview?.decision!=='pass'||!s.figureReview.manualRenderedInspection) fail(`${s.figureId}: figure review`);
    if(hashRecord(s)!==s.contentSha256) fail(`${s.figureId}: drawing hash`);
    assertAuthority(s,s.figureId); ensureTrad(s,s.figureId);
    const svgPath=path.join(root,s.svgPath);
    if(!fs.existsSync(svgPath)) fail(`${s.figureId}: missing SVG`);
    const svg=fs.readFileSync(svgPath,'utf8');
    for(const token of s.svgAssertions||[]) if(!svg.includes(token)) fail(`${s.figureId}: missing SVG assertion ${token}`);
    if(!svg.includes('<title')||!svg.includes('<desc')||!svg.includes('role="img"')||!svg.includes('viewBox=')) fail(`${s.figureId}: accessibility tokens`);
    allSpecs.push(s);
  }
  allLectures.push(lecture);
}
if(allLectures.length!==20||allQ.length!==240||allCR.length!==40||allReviews.length!==240||allSpecs.length!==11) fail('global count mismatch');
for(const k of Object.keys(globalDiff)) if(globalDiff[k]!==60) fail(`global difficulty ${k}=${globalDiff[k]}`);
if(globalAns.some(x=>x!==60)) fail(`global answer positions ${globalAns}`);
if(new Set(allReviews.map(r=>r.reviewerNote)).size!==240) fail('duplicate reviewer notes');
if(new Set(allReviews.map(r=>r.independentSolution)).size!==240) fail('duplicate review independent solutions');
if(new Set(allLectures.map(l=>JSON.stringify(l.conceptNarrative))).size!==20) fail('duplicate lecture bodies');
if(new Set(allLectures.map(l=>l.lectureReview.reviewNote)).size!==20) fail('duplicate lecture reviews');
for(const fid of referencedFigures) if(!figureIds.has(fid)) fail(`unresolved figure reference ${fid}`);
for(const fid of figureIds) {
  const svg=path.join(root,'figures/u23',`${fid}.svg`);
  if(!fs.existsSync(svg)) fail(`figure file naming mismatch ${fid}`);
}
const svgFiles=fs.readdirSync(path.join(root,'figures/u23')).filter(x=>x.endsWith('.svg'));
if(svgFiles.length!==11) fail(`expected 11 SVG files, got ${svgFiles.length}`);

const manifest=readJson('manifest/project-manifest.json');
if(manifest.unitId!=='u23'||manifest.skillSlots.join(',')!==slots.join(',')||manifest.productionActivationAllowed!==false) fail('project manifest');
if(manifest.expectedBaseHead!=='__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__'||manifest.coordinationGate!=='CENTRAL_COORDINATOR_APPROVAL_REQUIRED') fail('coordination gate');
const isolation=readJson('manifest/legacy-content-isolation.json');
const requiredIsolation={legacyContentImported:false,legacySemanticEvidenceAccepted:false,oldProductionRuntimeModified:false,deleteLegacyNow:false,finalRetirementRequired:true,productionActivationAllowed:false};
for(const [k,v] of Object.entries(requiredIsolation)) if(isolation[k]!==v) fail(`isolation ${k}`);
const decisions=readJson('manifest/syllabus-decisions.json');
if(decisions.lockedSkillCount!==20||decisions.decisions.length!==20||decisions.decisions.some(d=>d.finalSkillTitle.includes('、'))) fail('syllabus decisions');

const contentManifest=readJson('manifest/content-sha256.json');
if(contentManifest.entries.length!==311) fail(`content manifest entries ${contentManifest.entries.length}`);
const expectedContent=new Map();
for(const l of allLectures) expectedContent.set(l.lectureId,l.contentSha256);
for(const q of allQ) expectedContent.set(q.questionId,q.contentSha256);
for(const c of allCR) expectedContent.set(c.questionId,c.contentSha256);
for(const s of allSpecs) expectedContent.set(s.figureId,s.contentSha256);
for(const e of contentManifest.entries) if(expectedContent.get(e.id)!==e.sha256) fail(`content manifest mismatch ${e.id}`);
if(expectedContent.size!==311) fail(`expected content map size ${expectedContent.size}`);

const fileManifest=readJson('manifest/file-sha256.json');
for(const e of fileManifest.files){
  if(e.path==='manifest/file-sha256.json'||e.path.startsWith('staging/')) fail(`invalid file manifest path ${e.path}`);
  const p=path.join(root,e.path);
  if(!fs.existsSync(p)) fail(`missing hashed file ${e.path}`);
  const b=fs.readFileSync(p);
  if(sha(b)!==e.sha256||b.length!==e.bytes) fail(`file hash/size ${e.path}`);
}
const actualSourceFiles=[];
const walk=d=>{ for(const ent of fs.readdirSync(d,{withFileTypes:true})){ const p=path.join(d,ent.name); const rel=path.relative(root,p).replaceAll('\\','/'); if(rel==='staging'||rel.startsWith('staging/')) continue; if(ent.isDirectory()) walk(p); else if(rel!=='manifest/file-sha256.json') actualSourceFiles.push(rel); }};
walk(root);
actualSourceFiles.sort();
const listed=fileManifest.files.map(x=>x.path).sort();
if(JSON.stringify(actualSourceFiles)!==JSON.stringify(listed)) fail('file manifest does not exactly cover immutable source files');

const staging=path.join(root,'staging');
let emittedModuleCount=0;
if(fs.existsSync(staging)){
  const modules=fs.readdirSync(staging).filter(x=>/^u23-s\d{3}-human-content\.mjs$/.test(x));
  if(modules.length!==20) fail(`staging module count ${modules.length}`);
  if(!fs.existsSync(path.join(staging,'u23-batch-024-staging-manifest.json'))) fail('staging manifest missing');
  const sm=JSON.parse(fs.readFileSync(path.join(staging,'u23-batch-024-staging-manifest.json'),'utf8'));
  if(sm.productionActivationAllowed!==false||sm.outputs.length!==20) fail('staging manifest state');
  emittedModuleCount=modules.length;
}
const forbiddenTop=['production','dist','compiled','generated-bank'];
for(const n of forbiddenTop) if(fs.existsSync(path.join(root,n))) fail(`forbidden output ${n}`);

console.log(JSON.stringify({
  status:'PASS',unitId:'u23',lockedSkillCount:20,lectureCount:20,mcQuestionCount:240,
  constructedResponseCount:40,semanticReviewCount:240,figureCount:11,
  difficultyCounts:globalDiff,answerIndexCounts:globalAns,
  contentHashesVerified:true,fileManifestVerified:true,normalizedDuplicateScanVerified:true,
  questionSpecificReviewEvidenceVerified:true,skillSpecificLectureReviewVerified:true,
  figureReferencesVerified:true,svgGeometryAssertionsVerified:true,traditionalChineseVerified:true,
  legacyContentImported:false,productionActivationAllowed:false,
  stagingPresent:fs.existsSync(staging),emittedModuleCount
},null,2));
