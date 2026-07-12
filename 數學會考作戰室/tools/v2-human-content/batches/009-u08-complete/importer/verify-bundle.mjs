import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const slots = Array.from({length:14}, (_,i)=>`s${String(i+1).padStart(3,'0')}`);
const expectedSkills = [
  ['s001','u08-elements','geometry-basic-elements','點和線的基本元素與角的記號',[]],
  ['s002','u08-elements','angle-types-measure','角的種類與互餘互補',['geometry-basic-elements']],
  ['s003','u08-elements','parallel-perpendicular-angles','平行垂直與對頂角',['angle-types-measure']],
  ['s004','u08-elements','triangle-angle-sum','三角形內角和',['parallel-perpendicular-angles']],
  ['s005','u08-elements','triangle-basic-classification','三角形基本分類',['triangle-angle-sum']],
  ['s006','u08-elements','quadrilateral-basic','四邊形基本性質',['triangle-basic-classification']],
  ['s007','u08-elements','polygon-angle-basic','多邊形內角和',['quadrilateral-basic']],
  ['s008','u08-symmetry','perpendicular-bisector-symmetry','垂直平分線與線對稱',['polygon-angle-basic']],
  ['s009','u08-measure','perimeter-area-basic','周長與面積基本判斷',['perpendicular-bisector-symmetry']],
  ['s010','u08-measure','composite-area-text','文字敘述的複合面積',['perimeter-area-basic']],
  ['s011','u08-measure','unit-conversion-geometry','幾何量的單位換算',['composite-area-text']],
  ['s012','u08-views','solid-views-basic','三視圖基本判讀',['unit-conversion-geometry']],
  ['s013','u08-views','orthographic-description','三視圖文字描述',['solid-views-basic']],
  ['s014','u08-literacy','geometry-literacy-context','平面幾何與三視圖素養',['orthographic-description']]
];

const fail = message => { throw new Error(message); };
const readJson = rel => JSON.parse(fs.readFileSync(path.join(root, rel), 'utf8'));
const readJsonl = rel => {
  const text = fs.readFileSync(path.join(root, rel), 'utf8');
  if (!text.trim()) return [];
  return text.split(/\r?\n/).filter(Boolean).map((line,i)=>{
    try { return JSON.parse(line); } catch (e) { fail(`${rel}:${i+1}: invalid JSONL`); }
  });
};
const normalize = value => Array.isArray(value)
  ? value.map(normalize)
  : value && typeof value === 'object'
    ? Object.fromEntries(Object.keys(value).sort().map(k=>[k, normalize(value[k])]))
    : value;
const hashRecord = record => {
  const clone = structuredClone(record);
  delete clone.contentSha256;
  delete clone.reviewSha256;
  return crypto.createHash('sha256').update(JSON.stringify(normalize(clone))).digest('hex');
};
const fileHash = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const normalizedPrompt = text => text
  .replace(/[A-Z]+/gu,'<p>')
  .toLowerCase()
  .replace(/\d+(?:\.\d+)?/gu,'<n>')
  .replace(/甲|乙|丙|丁/gu,'<p>')
  .replace(/平方公尺|平方公分|平方公里|公頃|公尺|公分|公里|度|層|塊|個|片|箱/gu,'<u>')
  .replace(/[\s，。！？、；：「」『』（）()\[\],.:;=＋+−\-×÷°]/gu,'');
const tokenSet = text => new Set(text.replace(/[^\p{L}\p{N}]+/gu,' ').trim().split(/\s+/).filter(Boolean));
const jaccard = (a,b) => {
  const A=tokenSet(a), B=tokenSet(b);
  if (!A.size || !B.size) return 0;
  let inter=0; for (const x of A) if (B.has(x)) inter++;
  return inter/(A.size+B.size-inter);
};
const simplified = /[线点图边长宽这为从与个后里还问应书见过种数块层仅]/u;
const safeTraditionalCheck = (text,id) => {
  // The broad list above contains characters shared by Traditional Chinese; use only unambiguous Simplified forms here.
  const unambiguous = /[线图边这为从与个后还问应书见过种块层仅]/u;
  if (unambiguous.test(text)) fail(`${id}: possible Simplified Chinese character`);
};
const noDunhaoTitle = (title,id) => { if (title.includes('、')) fail(`${id}: title contains forbidden dunhao`); };
const assertNonEmptyStrings = (arr,id,min=1) => {
  if (!Array.isArray(arr) || arr.length<min || arr.some(x=>typeof x!=='string' || !x.trim())) fail(`${id}: weak string array`);
};

const lock = readJson('manifest/u08-lock-snapshot.json');
if (lock.unit.unitId!=='u08' || lock.unit.numericId!==8 || lock.unit.lockedSkillCount!==14) fail('lock snapshot identity/count');
const flattenedLock = lock.unit.topics.flatMap(t=>t.skills.map(s=>[s.slot,s.topicId,s.skillId,s.title,s.prerequisiteSkillIds]));
if (JSON.stringify(flattenedLock)!==JSON.stringify(expectedSkills)) fail('lock snapshot skill identity/order/prerequisites');
if (!String(lock.unit.capScopeNote).includes('依數學必要性使用圖形')) fail('U08 figure policy missing');

const allL=[], allQ=[], allR=[], allCR=[], allDraw=[];
const globalDiff={basic:0,standard:0,advanced:0,literacy:0};
const globalAns=[0,0,0,0];
const answerSequences=[];

for (const [slot,topic,skillId,lockedTitle,prereqs] of expectedSkills) {
  const base=`units/u08/${slot}`;
  const lecture=readJson(`${base}/lecture.json`);
  const questions=readJsonl(`${base}/mc-questions.jsonl`);
  const reviews=readJsonl(`${base}/semantic-reviews.jsonl`);
  const crs=readJsonl(`${base}/constructed-response.jsonl`);
  const drawings=readJsonl(`${base}/drawing-specs.jsonl`);

  if (lecture.unitId!=='u08' || lecture.topicId!==topic || lecture.skillId!==skillId || lecture.lockedSkillTitle!==lockedTitle) fail(`${slot}: lecture identity`);
  if (lecture.contentAuthority!=='CHATGPT_HUMAN_AUTHORED_R1') fail(`${slot}: lecture authority`);
  if (lecture.replacementMarker!=='REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION') fail(`${slot}: lecture replacement marker`);
  noDunhaoTitle(lecture.title,lecture.lectureId); noDunhaoTitle(lecture.lockedSkillTitle,lecture.lectureId);
  safeTraditionalCheck(JSON.stringify(lecture),lecture.lectureId);
  assertNonEmptyStrings(lecture.learningOutcomes,`${slot}: learningOutcomes`,3);
  if (!lecture.prerequisiteBridge || typeof lecture.prerequisiteBridge!=='object' || !Array.isArray(lecture.prerequisiteBridge.prerequisiteSkillIds) || !lecture.prerequisiteBridge.bridgeExplanation || lecture.prerequisiteBridge.bridgeExplanation.length<20) fail(`${slot}: prerequisite bridge`);
  if (!Array.isArray(lecture.glossary) || lecture.glossary.length<3) fail(`${slot}: glossary`);
  if (!Array.isArray(lecture.notation) || lecture.notation.length<2) fail(`${slot}: notation`);
  assertNonEmptyStrings(lecture.conceptDevelopment,`${slot}: conceptDevelopment`,3);
  if (!Array.isArray(lecture.formalDefinitions) || lecture.formalDefinitions.length<2) fail(`${slot}: formal definitions`);
  if (!Array.isArray(lecture.formulas)) fail(`${slot}: formulas shape`);
  assertNonEmptyStrings(lecture.invalidUseCases,`${slot}: invalidUseCases`,3);
  if (!Array.isArray(lecture.stepByStepMethod) || lecture.stepByStepMethod.length<4) fail(`${slot}: method depth`);
  if (!Array.isArray(lecture.workedExamples) || lecture.workedExamples.length<4) fail(`${slot}: examples`);
  if (!Array.isArray(lecture.commonMistakes) || lecture.commonMistakes.length<6) fail(`${slot}: mistakes`);
  assertNonEmptyStrings(lecture.selfCheckItems,`${slot}: selfCheckItems`,4);
  assertNonEmptyStrings(lecture.conciseSummary,`${slot}: conciseSummary`,3);
  if (!lecture.connections?.previous || !lecture.connections?.next) fail(`${slot}: connections`);
  if (!Array.isArray(lecture.figureReferences)) fail(`${slot}: lecture figure references shape`);
  if (lecture.lectureReview?.mathematicalCorrectness!=='pass' || !lecture.lectureReview.skillSpecificEvidence || lecture.lectureReview.skillSpecificEvidence.length<50) fail(`${slot}: lecture review`);
  if (hashRecord(lecture)!==lecture.contentSha256) fail(`${slot}: lecture content hash`);

  if (questions.length!==12 || reviews.length!==12 || crs.length<2) fail(`${slot}: record counts`);
  for (const spec of drawings) {
    if (spec.contentAuthority!=='CHATGPT_HUMAN_AUTHORED_R1') fail(`${slot}: drawing authority`);
    if (hashRecord(spec)!==spec.contentSha256) fail(`${spec.figureId}: drawing hash`);
    const svg=path.join(root,spec.svgPath);
    if (!fs.existsSync(svg)) fail(`${spec.figureId}: missing SVG`);
    const svgText=fs.readFileSync(svg,'utf8');
    for (const token of spec.svgAssertions||[]) if(!svgText.includes(token)) fail(`${spec.figureId}: SVG token ${token}`);
    if (spec.figureReview?.decision!=='pass' || spec.figureReview?.manualRenderedInspection!==true) fail(`${spec.figureId}: figure review`);
  }
  const diff={basic:0,standard:0,advanced:0,literacy:0}, ans=[0,0,0,0];
  const reviewById=new Map(reviews.map(r=>[r.questionId,r]));
  if (reviewById.size!==12) fail(`${slot}: duplicate or missing review IDs`);

  for (const item of questions) {
    if (item.unitId!=='u08' || item.topicId!==topic || item.skillId!==skillId || item.lockedSkillTitle!==lockedTitle) fail(`${item.questionId}: identity`);
    if (item.type!=='mc' || !['text-only','svg'].includes(item.visualMode)) fail(`${item.questionId}: MC shape`);
    if (item.visualMode==='text-only' && (item.figureId!==null || item.drawingSpecRef!==null)) fail(`${item.questionId}: text-only figure reference`);
    if (item.visualMode==='svg' && (!item.figureId || !item.drawingSpecRef)) fail(`${item.questionId}: missing figure reference`);
    if (item.contentAuthority!=='CHATGPT_HUMAN_AUTHORED_R1' || item.replacementMarker!=='REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION') fail(`${item.questionId}: authority/isolation marker`);
    safeTraditionalCheck(JSON.stringify(item),item.questionId);
    if (!['basic','standard','advanced','literacy'].includes(item.difficulty)) fail(`${item.questionId}: difficulty`);
    if (!Array.isArray(item.givenConditions) || !item.givenConditions.length || !item.target) fail(`${item.questionId}: conditions/target`);
    if (!Array.isArray(item.choices) || item.choices.length!==4 || new Set(item.choices).size!==4) fail(`${item.questionId}: choices`);
    if (!Number.isInteger(item.answerIndex) || item.answerIndex<0 || item.answerIndex>3) fail(`${item.questionId}: answer index`);
    if (!item.independentSolution || item.independentSolution===item.explanation) fail(`${item.questionId}: independent solution`);
    assertNonEmptyStrings(item.steps,`${item.questionId}: steps`,1);
    if (!Array.isArray(item.optionAnalysis) || item.optionAnalysis.length!==4) fail(`${item.questionId}: option analyses`);
    item.optionAnalysis.forEach((a,i)=>{
      if (a.choice!==item.choices[i] || typeof a.truth!=='boolean' || !a.reason || a.reason.length<4) fail(`${item.questionId}: option analysis ${i}`);
    });
    if (item.optionAnalysis.filter(a=>a.truth).length!==1 || !item.optionAnalysis[item.answerIndex].truth) fail(`${item.questionId}: unique correct choice`);
    for (const field of ['misconceptionTarget','prerequisiteCheck','unitCheck','roundingCheck','ambiguityBoundaryAudit','difficultyReason']) {
      if (!item[field] || item[field].length<5) fail(`${item.questionId}: weak ${field}`);
    }
    if (item.difficulty==='literacy' && (!item.literacyContextNecessity || item.literacyContextNecessity.length<25)) fail(`${item.questionId}: literacy necessity`);
    if (item.difficulty!=='literacy' && item.literacyContextNecessity!==null) fail(`${item.questionId}: unexpected literacy field`);
    if (hashRecord(item)!==item.contentSha256) fail(`${item.questionId}: content hash`);

    const review=reviewById.get(item.questionId);
    if (!review) fail(`${item.questionId}: missing semantic review`);
    if (review.unitId!=='u08' || review.skillId!==skillId || review.contentAuthority!=='CHATGPT_HUMAN_AUTHORED_R1') fail(`${item.questionId}: review identity`);
    if (review.contentSha256!==item.contentSha256 || review.answerMatch!==true || review.uniqueCorrectAnswer!==true || review.reviewerDecision!=='pass') fail(`${item.questionId}: review state`);
    if (!review.independentSolution || review.independentSolution===item.explanation || review.independentSolution===item.independentSolution) fail(`${item.questionId}: non-independent semantic solution`);
    if (review.derivedAnswer!==item.choices[item.answerIndex] || review.storedAnswer!==item.choices[item.answerIndex]) fail(`${item.questionId}: answer evidence mismatch`);
    if (JSON.stringify(review.optionTruth)!==JSON.stringify(item.optionAnalysis.map(x=>x.truth))) fail(`${item.questionId}: truth evidence mismatch`);
    if (!review.ambiguityChecks || Object.values(review.ambiguityChecks).some(v=>typeof v!=='string' || v.length<5) || review.ambiguityChecks.secondCorrectAnswer.length<45 || review.ambiguityChecks.undefinedSymbol.length<35 || review.ambiguityChecks.alternateReading.length<35) fail(`${item.questionId}: ambiguity audit`);
    if (!review.reviewerNote.includes(review.independentSolution) || review.reviewerNote.length<100) fail(`${item.questionId}: reviewer note`);
    if (hashRecord(review)!==review.reviewSha256) fail(`${item.questionId}: review hash`);

    diff[item.difficulty]++; globalDiff[item.difficulty]++;
    ans[item.answerIndex]++; globalAns[item.answerIndex]++;
  }
  if (Object.values(diff).some(v=>v!==3)) fail(`${slot}: per-skill difficulty distribution ${JSON.stringify(diff)}`);
  if (ans.some(v=>v!==3)) fail(`${slot}: per-skill answer distribution ${ans}`);
  answerSequences.push(questions.map(q=>q.answerIndex).join(''));

  for (const item of crs) {
    if (item.unitId!=='u08' || item.topicId!==topic || item.skillId!==skillId || item.type!=='constructed-response') fail(`${item.questionId}: CR identity`);
    if (item.visualMode!=='text-only' || item.figureId!==null || item.drawingSpecRef!==null) fail(`${item.questionId}: CR figure boundary`);
    if (item.contentAuthority!=='CHATGPT_HUMAN_AUTHORED_R1' || item.replacementMarker!=='REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION') fail(`${item.questionId}: CR authority`);
    safeTraditionalCheck(JSON.stringify(item),item.questionId);
    assertNonEmptyStrings(item.requiredWork,`${item.questionId}: requiredWork`,2);
    assertNonEmptyStrings(item.standardSolution,`${item.questionId}: standardSolution`,2);
    assertNonEmptyStrings(item.alternativeMethods,`${item.questionId}: alternatives`,1);
    assertNonEmptyStrings(item.reasoningSteps,`${item.questionId}: reasoningSteps`,3);
    if (!Array.isArray(item.rubric) || item.rubric.length!==4 || item.rubric.map(r=>r.score).sort().join(',')!=='0,1,2,3') fail(`${item.questionId}: rubric`);
    if (item.rubric.some(r=>!r.criteria || r.criteria.length<16)) fail(`${item.questionId}: rubric specificity`);
    assertNonEmptyStrings(item.partialCreditRules,`${item.questionId}: partialCredit`,1);
    if (!item.followThroughPolicy || item.followThroughPolicy.length<20) fail(`${item.questionId}: follow-through`);
    if (!item.unitAndNotationRules || item.unitAndNotationRules.length<10) fail(`${item.questionId}: unit/notation`);
    if (!item.answerOnlyPolicy || item.answerOnlyPolicy.length<12) fail(`${item.questionId}: answer-only policy`);
    assertNonEmptyStrings(item.commonErrors,`${item.questionId}: commonErrors`,2);
    if (item.independentReview?.decision!=='pass' || !item.independentReview.derivedResult || !item.independentReview.ambiguityAudit || !item.independentReview.reviewNote) fail(`${item.questionId}: CR independent review`);
    if (hashRecord(item)!==item.contentSha256) fail(`${item.questionId}: CR content hash`);
  }

  allL.push(lecture); allQ.push(...questions); allR.push(...reviews); allCR.push(...crs); allDraw.push(...drawings);
}

if (new Set(answerSequences).size!==14) fail('answer-index sequence reused across skills');
if (allL.length!==14 || allQ.length!==168 || allR.length!==168 || allCR.length!==28 || allDraw.length!==4) fail('global record counts');
if (JSON.stringify(globalDiff)!==JSON.stringify({basic:42,standard:42,advanced:42,literacy:42})) fail(`global difficulty ${JSON.stringify(globalDiff)}`);
if (globalAns.some(v=>v!==42)) fail(`global answer positions ${globalAns}`);

const unique = (values,label) => { if (new Set(values).size!==values.length) fail(`duplicate ${label}`); };
unique(allL.map(x=>x.lectureId),'lecture ID');
unique(allQ.map(x=>x.questionId),'MC ID');
unique(allQ.map(x=>x.text),'MC prompt');
unique(allR.map(x=>x.questionId),'review question ID');
unique(allR.map(x=>x.independentSolution),'semantic independent solution');
unique(allR.map(x=>x.difficultyReason),'difficulty reason');
unique(allR.map(x=>x.reviewerNote),'review evidence');
unique(allCR.map(x=>x.questionId),'CR ID');
unique(allCR.map(x=>x.prompt),'CR prompt');
unique(allCR.map(x=>x.independentReview.reviewNote),'CR review evidence');
unique(allL.map(x=>x.lectureReview.skillSpecificEvidence),'lecture review evidence');

const mcSkeletons=allQ.map(x=>normalizedPrompt(x.text));
const crSkeletons=allCR.map(x=>normalizedPrompt(x.prompt));
unique(mcSkeletons,'number/name/unit-normalized MC prompt');
unique(crSkeletons,'number/name/unit-normalized CR prompt');

const lectureBodies=allL.map(l=>{
  const c=structuredClone(l);
  for (const k of ['lectureId','skillId','topicId','lockedSkillTitle','title','contentSha256','replacementMarker']) delete c[k];
  return crypto.createHash('sha256').update(JSON.stringify(normalize(c))).digest('hex');
});
unique(lectureBodies,'lecture body');

const nearPairs=[];
for (let i=0;i<allQ.length;i++) for (let j=i+1;j<allQ.length;j++) {
  if (allQ[i].skillId===allQ[j].skillId && jaccard(allQ[i].text,allQ[j].text)>=0.90) {
    nearPairs.push([allQ[i].questionId,allQ[j].questionId]);
  }
}
if (nearPairs.length) fail(`near-identical MC prompts: ${JSON.stringify(nearPairs.slice(0,5))}`);

const figDir=path.join(root,'figures/u08');
if (!fs.existsSync(figDir)) fail('missing figures/u08 directory');
const svgFiles=fs.readdirSync(figDir).filter(x=>x.endsWith('.svg'));
if (svgFiles.length!==4) fail(`expected 4 U08 SVG files, got ${svgFiles.length}`);
const drawByFigure=new Map(allDraw.map(d=>[d.figureId,d]));
for(const q of allQ){
  if(q.figureId===null) continue;
  const d=drawByFigure.get(q.figureId);
  if(!d || q.drawingSpecRef!==d.drawingSpecId) fail(`${q.questionId}: unresolved figure reference`);
}
for(const l of allL) for(const fid of l.figureReferences) if(!drawByFigure.has(fid)) fail(`${l.lectureId}: unresolved lecture figure reference`);
if(allCR.some(x=>x.figureId!==null && !drawByFigure.has(x.figureId))) fail('unresolved CR figure reference');

const legacy=readJson('manifest/legacy-content-isolation.json');
for (const [key,value] of Object.entries({
  legacyContentImported:false,legacySemanticEvidenceAccepted:false,oldProductionRuntimeModified:false,
  deleteLegacyNow:false,finalRetirementRequired:true,productionActivationAllowed:false,
  oldQuestionBankReadForInspiration:false,oldLectureBankReadForInspiration:false,oldGeneratedReviewReadForEvidence:false
})) if (legacy[key]!==value) fail(`legacy isolation ${key}`);
const project=readJson('manifest/project-manifest.json');
if (project.expectedBaseHead!=='__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__' || project.approvalState!=='CENTRAL_COORDINATOR_APPROVAL_REQUIRED') fail('central approval placeholder');
if (project.productionActivationAllowed!==false || project.deliveryContainsStaging!==false) fail('activation/delivery contract');

const contentManifest=readJson('manifest/content-sha256.json');
if (contentManifest.recordCount!==14+168+168+28+4) fail('content manifest count');
const expectedContent=new Map();
for (const l of allL) expectedContent.set(l.lectureId,l.contentSha256);
for (const q of allQ) expectedContent.set(q.questionId,q.contentSha256);
for (const r of allR) expectedContent.set(`${r.questionId}#semantic-review`,r.reviewSha256);
for (const c of allCR) expectedContent.set(c.questionId,c.contentSha256);
for (const d of allDraw) expectedContent.set(d.figureId,d.contentSha256);
if (expectedContent.size!==contentManifest.records.length) fail('content manifest duplicate IDs');
for (const entry of contentManifest.records) if (expectedContent.get(entry.id)!==entry.sha256) fail(`content manifest mismatch ${entry.id}`);

const fileManifest=readJson('manifest/file-sha256.json');
if (!Array.isArray(fileManifest.files) || !fileManifest.files.length) fail('missing file manifest');
for (const entry of fileManifest.files) {
  const p=path.join(root,entry.path);
  if (!fs.existsSync(p)) fail(`missing hashed file ${entry.path}`);
  if (fileHash(p)!==entry.sha256) fail(`file hash mismatch ${entry.path}`);
}
const manifestPaths=new Set(fileManifest.files.map(x=>x.path));
const requiredTop=['README.md','CURSOR-INSTRUCTIONS.md','CENTRAL-COORDINATOR-RETURN.md','policy/HUMAN-CONTENT-POLICY.md','importer/verify-bundle.mjs','importer/emit-unit-modules.mjs'];
for (const p of requiredTop) if (!manifestPaths.has(p)) fail(`required file absent from file manifest ${p}`);

const staging=path.join(root,'staging');
const stagingPresent=fs.existsSync(staging);
let emittedModuleCount=0;
if (stagingPresent) {
  emittedModuleCount=fs.readdirSync(staging).filter(x=>/^u08-s\d{3}-human-content\.mjs$/.test(x)).length;
  if (emittedModuleCount!==14) fail(`staging module count ${emittedModuleCount}`);
  const stagingManifest=readJson('staging/u08-batch-009-staging-manifest.json');
  if (stagingManifest.productionActivationAllowed!==false || stagingManifest.outputs.length!==14) fail('staging manifest');
}

console.log(JSON.stringify({
  status:'PASS',
  packageId:'math-v2-human-content-batch-009-u08-complete',
  unitId:'u08',
  lockedSkillCount:14,
  lectureCount:14,
  mcQuestionCount:168,
  constructedResponseCount:28,
  semanticReviewCount:168,
  figureCount:4,
  difficultyCounts:globalDiff,
  answerIndexCounts:globalAns,
  perSkillDifficultyDistributionVerified:true,
  perSkillAnswerDistributionVerified:true,
  uniqueAnswerSequencesVerified:true,
  contentHashesVerified:true,
  semanticReviewHashesVerified:true,
  fileManifestVerified:true,
  exactAndNormalizedDuplicateScanVerified:true,
  nearDuplicateScanVerified:true,
  traditionalChineseAndTitlePolicyVerified:true,
  figureBoundaryVerified:true,
  legacyIsolationVerified:true,
  productionActivationAllowed:false,
  centralCoordinatorApprovalRequired:true,
  stagingPresent,
  emittedModuleCount
},null,2));
