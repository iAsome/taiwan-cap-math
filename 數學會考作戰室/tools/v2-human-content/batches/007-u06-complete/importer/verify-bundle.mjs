import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const AUTH = 'CHATGPT_HUMAN_AUTHORED_R1';
const expected = [
  ['s001','u06-ratio-basics','ratio-simplify','比的化簡',[]],
  ['s002','u06-ratio-basics','proportion-solve','比例式求解',['ratio-simplify']],
  ['s003','u06-ratio-basics','ratio-part-total','部分量與總量',['proportion-solve']],
  ['s004','u06-ratio-basics','proportion-property','比例式性質',['ratio-part-total']],
  ['s005','u06-variation','direct-variation','正比',['proportion-property']],
  ['s006','u06-variation','inverse-variation','反比',['direct-variation']],
  ['s007','u06-variation','inverse-variation-graph','反比圖形概念',['inverse-variation']],
  ['s008','u06-applications','scale-drawing','比例尺',['inverse-variation-graph']],
  ['s009','u06-applications','ratio-word-problem','比例應用題',['scale-drawing']],
  ['s010','u06-applications','continued-ratio-preview','連比預備',['ratio-word-problem']],
  ['s011','u06-applications','ratio-composite-problem','比例複合應用',['continued-ratio-preview']],
  ['s012','u06-literacy','ratio-literacy','比例素養題',['ratio-composite-problem']]
];
const fail = message => { throw new Error(message); };
const readJson = rel => JSON.parse(fs.readFileSync(path.join(root, rel), 'utf8'));
const readJsonl = rel => {
  const p = path.join(root, rel);
  const text = fs.readFileSync(p, 'utf8');
  return text.split(/\r?\n/u).filter(Boolean).map((line, i) => {
    try { return JSON.parse(line); } catch (e) { fail(`${rel}:${i+1}: invalid JSONL: ${e.message}`); }
  });
};
const normalizeObject = value => Array.isArray(value)
  ? value.map(normalizeObject)
  : value && typeof value === 'object'
    ? Object.fromEntries(Object.keys(value).sort().map(k => [k, normalizeObject(value[k])]))
    : value;
const recordHash = record => {
  const copy = structuredClone(record);
  delete copy.contentSha256;
  return crypto.createHash('sha256').update(JSON.stringify(normalizeObject(copy))).digest('hex');
};
const fileHash = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const exactPrompt = s => s.normalize('NFKC').replace(/\s+/gu, '');
const structuralPrompt = text => {
  let s = text.normalize('NFKC');
  const variableMap = new Map();
  const labels = ['§α§','§β§','§γ§','§δ§','§ε§','§ζ§','§η§','§θ§'];
  s = s.replace(/[甲乙丙丁戊己庚辛壬癸]|\b[A-Z]\b/gu, token => {
    if (!variableMap.has(token)) variableMap.set(token, labels[variableMap.size] ?? '§ω§');
    return variableMap.get(token);
  });
  s = s.replace(/\d+\.\d+/gu, '§D§');
  s = s.replace(/\d+\/\d+/gu, '§F§');
  s = s.replace(/\d+/gu, '§I§');
  return s.replace(/\s+/gu, '');
};
const assertAuthority = (obj, id) => {
  if (obj.contentAuthority !== AUTH) fail(`${id}: wrong contentAuthority`);
};
const simplifiedOnly = /[这们简总图线数题应过为与从个时后会对实发备节万术读写错误边转换类点轴标开关长宽圆积围条则让还进仅并说见层问组选验证归纳学习讲义审变动关系单质间]/u;
const checkTraditionalTeachingText = (value, id) => {
  const text = JSON.stringify(value);
  if (simplifiedOnly.test(text)) fail(`${id}: contains Simplified-Chinese-only character`);
};
const authorityPattern = 'REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION';

const allLectures = [], allMc = [], allCr = [], allReviews = [], allDrawings = [];
const ids = new Set(), exactPrompts = new Map(), structuralPrompts = new Map();
const diffTotals = {basic:0,standard:0,advanced:0,literacy:0};
const answerTotals = [0,0,0,0];
const figureRefs = new Set();

for (const [index, [slot, topicId, skillId, title, prereqs]] of expected.entries()) {
  const base = `units/u06/${slot}`;
  const lecture = readJson(`${base}/lecture.json`);
  const mc = readJsonl(`${base}/mc-questions.jsonl`);
  const cr = readJsonl(`${base}/constructed-response.jsonl`);
  const reviews = readJsonl(`${base}/semantic-reviews.jsonl`);
  const drawings = readJsonl(`${base}/drawing-specs.jsonl`);

  if (lecture.unitId !== 'u06' || lecture.numericUnitId !== 6 || lecture.topicId !== topicId || lecture.skillId !== skillId) fail(`${slot}: locked lecture identity mismatch`);
  if (lecture.lockedSkillTitle !== title) fail(`${slot}: locked title mismatch`);
  if (lecture.title.includes('、') || lecture.lockedSkillTitle.includes('、')) fail(`${slot}: forbidden dunhao in title`);
  if (lecture.skillIdentity?.skillOrder !== index + 1) fail(`${slot}: locked order mismatch`);
  if (JSON.stringify(lecture.skillIdentity?.lockedPrerequisiteSkillIds) !== JSON.stringify(prereqs)) fail(`${slot}: locked prerequisites mismatch`);
  assertAuthority(lecture, lecture.lectureId);
  if (lecture.replacementPolicy !== authorityPattern) fail(`${slot}: replacement policy`);
  if (recordHash(lecture) !== lecture.contentSha256) fail(`${slot}: lecture content hash`);
  if (!Array.isArray(lecture.learningOutcomes) || lecture.learningOutcomes.length < 3) fail(`${slot}: weak learning outcomes`);
  if (!Array.isArray(lecture.glossary) || lecture.glossary.length < 3) fail(`${slot}: weak glossary`);
  if (!Array.isArray(lecture.conceptNarrative) || lecture.conceptNarrative.length < 4) fail(`${slot}: weak concept narrative`);
  if (!Array.isArray(lecture.workedExamples) || lecture.workedExamples.length < 4) fail(`${slot}: insufficient worked examples`);
  if (!Array.isArray(lecture.commonMistakes) || lecture.commonMistakes.length < 6) fail(`${slot}: insufficient common mistakes`);
  if (!lecture.lectureReview?.reviewNote || lecture.lectureReview.reviewNote.length < 45) fail(`${slot}: weak skill-specific lecture review`);
  if (lecture.lectureReview?.examplesNotCopiedFromBank !== true) fail(`${slot}: missing no-copy audit`);
  checkTraditionalTeachingText(lecture, lecture.lectureId);

  if (mc.length !== 12) fail(`${slot}: expected 12 MC, got ${mc.length}`);
  if (cr.length < 2) fail(`${slot}: expected at least 2 CR, got ${cr.length}`);
  if (reviews.length !== 12) fail(`${slot}: expected 12 semantic reviews, got ${reviews.length}`);

  const perDiff = {basic:0,standard:0,advanced:0,literacy:0};
  const perAnswer = [0,0,0,0];
  const reviewMap = new Map(reviews.map(r => [r.questionId, r]));
  if (reviewMap.size !== reviews.length) fail(`${slot}: duplicate semantic review questionId`);

  for (const q of mc) {
    if (q.unitId !== 'u06' || q.numericUnitId !== 6 || q.topicId !== topicId || q.skillId !== skillId || q.type !== 'mc') fail(`${q.questionId}: identity mismatch`);
    assertAuthority(q, q.questionId);
    if (q.replacementPolicy !== authorityPattern) fail(`${q.questionId}: replacement policy`);
    if (recordHash(q) !== q.contentSha256) fail(`${q.questionId}: content hash`);
    if (ids.has(q.questionId)) fail(`${q.questionId}: duplicate ID`);
    ids.add(q.questionId);
    if (!['basic','standard','advanced','literacy'].includes(q.difficulty)) fail(`${q.questionId}: invalid difficulty`);
    if (!Array.isArray(q.choices) || q.choices.length !== 4 || new Set(q.choices).size !== 4) fail(`${q.questionId}: choices must be four unique values`);
    if (!Number.isInteger(q.answerIndex) || q.answerIndex < 0 || q.answerIndex > 3) fail(`${q.questionId}: answerIndex`);
    if (!Array.isArray(q.optionAnalysis) || q.optionAnalysis.length !== 4) fail(`${q.questionId}: missing four-choice analysis`);
    if (q.optionAnalysis.some((o,i) => o.choice !== q.choices[i] || typeof o.reason !== 'string' || o.reason.length < 4)) fail(`${q.questionId}: weak or misaligned choice analysis`);
    if (q.optionAnalysis.filter(o => o.truth).length !== 1 || !q.optionAnalysis[q.answerIndex].truth) fail(`${q.questionId}: not exactly one correct choice`);
    if (!q.independentSolution || q.independentSolution === q.mainExplanation || q.independentSolution.length < 8) fail(`${q.questionId}: independent solution missing or circular`);
    if (!Array.isArray(q.steps) || q.steps.length < 2) fail(`${q.questionId}: solution steps`);
    if (!q.givenConditions || !q.target || !q.misconceptionTarget || !q.prerequisiteCheck?.evidence) fail(`${q.questionId}: required audit fields`);
    if (!q.unitCheck || !q.roundingCheck || !q.ambiguityBoundaryAudit || !q.difficultyReason) fail(`${q.questionId}: missing unit/boundary/difficulty audit`);
    if (q.difficulty === 'literacy' && (!q.literacyContextNecessity || q.literacyContextNecessity.length < 15)) fail(`${q.questionId}: literacy context not justified`);
    const exact = exactPrompt(q.prompt);
    if (exactPrompts.has(exact)) fail(`${q.questionId}: exact normalized duplicate of ${exactPrompts.get(exact)}`);
    exactPrompts.set(exact, q.questionId);
    const skeleton = `${skillId}|${structuralPrompt(q.prompt)}`;
    if (structuralPrompts.has(skeleton)) fail(`${q.questionId}: number/name/unit-only near duplicate of ${structuralPrompts.get(skeleton)}`);
    structuralPrompts.set(skeleton, q.questionId);
    const review = reviewMap.get(q.questionId);
    if (!review) fail(`${q.questionId}: missing semantic review`);
    assertAuthority(review, review.reviewId);
    if (review.contentSha256 !== q.contentSha256) fail(`${q.questionId}: review hash reference mismatch`);
    if (review.answerMatch !== true || review.uniqueCorrectAnswer !== true || review.reviewerDecision !== 'pass') fail(`${q.questionId}: semantic review decision`);
    if (review.independentSolution !== q.independentSolution) fail(`${q.questionId}: review did not preserve independent recomputation`);
    if (review.derivedAnswer !== q.choices[q.answerIndex] || review.storedAnswer !== q.choices[q.answerIndex]) fail(`${q.questionId}: semantic answer mismatch`);
    if (JSON.stringify(review.optionTruth) !== JSON.stringify(q.optionAnalysis.map(o => o.truth))) fail(`${q.questionId}: review option truth mismatch`);
    if (!review.reviewerNote || review.reviewerNote.length < 90 || !review.reviewerNote.includes(review.independentSolution)) fail(`${q.questionId}: generic reviewer evidence`);
    if (Object.values(review.ambiguityChecks ?? {}).some(v => typeof v !== 'string' || v.length < 12)) fail(`${q.questionId}: weak ambiguity evidence`);
    if (q.figureId) figureRefs.add(q.figureId);
    perDiff[q.difficulty]++; diffTotals[q.difficulty]++;
    perAnswer[q.answerIndex]++; answerTotals[q.answerIndex]++;
    checkTraditionalTeachingText(q, q.questionId);
  }
  for (const key of Object.keys(perDiff)) if (perDiff[key] !== 3) fail(`${slot}: difficulty ${key}=${perDiff[key]}, expected 3`);
  if (perAnswer.some(v => v !== 3)) fail(`${slot}: answer distribution ${perAnswer.join(',')}, expected 3 each`);

  for (const item of cr) {
    if (item.unitId !== 'u06' || item.numericUnitId !== 6 || item.topicId !== topicId || item.skillId !== skillId || item.type !== 'constructed-response') fail(`${item.questionId}: CR identity mismatch`);
    assertAuthority(item, item.questionId);
    if (item.replacementPolicy !== authorityPattern) fail(`${item.questionId}: CR replacement policy`);
    if (recordHash(item) !== item.contentSha256) fail(`${item.questionId}: CR content hash`);
    if (ids.has(item.questionId)) fail(`${item.questionId}: duplicate ID`);
    ids.add(item.questionId);
    const exact = exactPrompt(item.prompt);
    if (exactPrompts.has(exact)) fail(`${item.questionId}: duplicate normalized prompt`);
    exactPrompts.set(exact, item.questionId);
    if (!Array.isArray(item.requiredWork) || item.requiredWork.length < 2) fail(`${item.questionId}: required work`);
    if (!Array.isArray(item.fullCreditSolution) || item.fullCreditSolution.length < 2) fail(`${item.questionId}: full solution`);
    if (!Array.isArray(item.reasoningSteps) || item.reasoningSteps.length < 2) fail(`${item.questionId}: reasoning steps`);
    if (!Array.isArray(item.rubric) || item.rubric.length !== 4 || item.rubric.map(x=>x.score).sort().join(',') !== '0,1,2,3') fail(`${item.questionId}: score 0-3 rubric`);
    if (item.rubric.some(x => !x.criteria || x.criteria.length < 12)) fail(`${item.questionId}: generic rubric`);
    if (!item.partialCreditRules?.length || !item.followThroughPolicy || !item.unitNotationRules || !item.answerOnlyPolicy) fail(`${item.questionId}: missing scoring policy`);
    if (item.independentReview?.decision !== 'pass' || !item.independentReview?.derivedResult || !item.independentReview?.ambiguity || !item.independentReview?.scope) fail(`${item.questionId}: weak independent CR review`);
    if (item.figureId) figureRefs.add(item.figureId);
    checkTraditionalTeachingText(item, item.questionId);
  }

  for (const d of drawings) {
    assertAuthority(d, d.figureId);
    if (recordHash(d) !== d.contentSha256) fail(`${d.figureId}: drawing hash`);
    if (!d.altText || d.altText.length < 25 || !d.drawingSpec || Object.keys(d.drawingSpec).length < 8) fail(`${d.figureId}: drawing detail`);
    if (!d.canvas?.viewBox || !d.labelsAndPositions?.length || !d.visualInferenceWarning) fail(`${d.figureId}: missing exact layout/accessibility detail`);
    if (d.manualVisualInspection?.status?.startsWith('pass') !== true) fail(`${d.figureId}: no passed manual render inspection`);
    if (d.figureReview?.decision !== 'pass' || d.figureReview.reviewNote.length < 50) fail(`${d.figureId}: figure review`);
    const svgPath = path.join(root, d.svgPath);
    if (!fs.existsSync(svgPath)) fail(`${d.figureId}: SVG missing`);
    const svg = fs.readFileSync(svgPath, 'utf8');
    if (!svg.includes('<title') || !svg.includes('<desc') || !svg.includes('role="img"') || !svg.includes('viewBox=')) fail(`${d.figureId}: SVG accessibility`);
    for (const token of d.svgAssertions ?? []) if (!svg.includes(token)) fail(`${d.figureId}: SVG assertion not found: ${token}`);
  }

  for (const fid of lecture.figureReferences ?? []) figureRefs.add(fid);
  allLectures.push(lecture); allMc.push(...mc); allCr.push(...cr); allReviews.push(...reviews); allDrawings.push(...drawings);
}

if (allLectures.length !== 12 || allMc.length !== 144 || allCr.length !== 24 || allReviews.length !== 144 || allDrawings.length !== 3) fail('global count mismatch');
for (const key of Object.keys(diffTotals)) if (diffTotals[key] !== 36) fail(`global difficulty ${key}=${diffTotals[key]}`);
if (answerTotals.some(v => v !== 36)) fail(`global answer distribution ${answerTotals.join(',')}`);
if (new Set(allReviews.map(r=>r.independentSolution)).size !== 144) fail('repeated independent solutions');
if (new Set(allReviews.map(r=>r.difficultyReason)).size !== 144) fail('repeated generic difficulty evidence');
if (new Set(allReviews.map(r=>r.reviewerNote)).size !== 144) fail('repeated generic reviewer evidence');
if (new Set(allLectures.map(l=>JSON.stringify(l.conceptNarrative))).size !== 12) fail('repeated lecture bodies');
if (new Set(allLectures.map(l=>l.lectureReview.reviewNote)).size !== 12) fail('repeated lecture review evidence');
if (new Set(allCr.map(c=>JSON.stringify(c.independentReview))).size !== 24) fail('repeated CR review evidence');
if (new Set(allDrawings.map(d=>d.figureId)).size !== 3) fail('duplicate figure IDs');

const svgDir = path.join(root, 'figures/u06');
const svgFiles = fs.readdirSync(svgDir).filter(f=>f.endsWith('.svg')).sort();
if (svgFiles.length !== 3) fail(`expected 3 SVGs, got ${svgFiles.length}`);
for (const fid of figureRefs) if (!svgFiles.includes(`${fid}.svg`)) fail(`unresolved figure reference ${fid}`);

const isolation = readJson('manifest/legacy-content-isolation.json');
const isolationExpected = {
 legacyContentImported:false, legacySemanticEvidenceAccepted:false,
 oldProductionRuntimeModified:false, deleteLegacyNow:false,
 finalRetirementRequired:true, productionActivationAllowed:false
};
for (const [k,v] of Object.entries(isolationExpected)) if (isolation[k] !== v) fail(`legacy isolation ${k}`);
const project = readJson('manifest/project-manifest.json');
if (project.productionActivationAllowed !== false || project.centralCoordinatorApprovalRequired !== true) fail('project activation/approval contract');
if (project.expectedBaseHead !== '__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__') fail('expected HEAD placeholder changed');
const cursor = fs.readFileSync(path.join(root,'CURSOR-INSTRUCTIONS.md'),'utf8');
if (!cursor.includes('CENTRAL_COORDINATOR_APPROVAL_REQUIRED') || !cursor.includes('EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__')) fail('Cursor approval gate missing');

const contentManifest = readJson('manifest/content-sha256.json');
const manifestRecordCount = Object.values(contentManifest.records).reduce((n,a)=>n+a.length,0);
if (manifestRecordCount !== 183) fail(`content hash manifest count ${manifestRecordCount}, expected 183`);
const actualRecordMap = new Map([
 ...allLectures.map(x=>[x.lectureId,x.contentSha256]),
 ...allMc.map(x=>[x.questionId,x.contentSha256]),
 ...allCr.map(x=>[x.questionId,x.contentSha256]),
 ...allDrawings.map(x=>[x.figureId,x.contentSha256])
]);
for (const group of Object.values(contentManifest.records)) for (const entry of group) {
 if (actualRecordMap.get(entry.id) !== entry.sha256) fail(`content manifest mismatch ${entry.id}`);
}

const fileManifest = readJson('manifest/file-sha256.json');
if (!Array.isArray(fileManifest.files) || fileManifest.files.length < 70) fail('file manifest missing or too small');
for (const entry of fileManifest.files) {
 const p = path.join(root, entry.path);
 if (!fs.existsSync(p)) fail(`file manifest missing ${entry.path}`);
 if (fileHash(p) !== entry.sha256) fail(`file hash mismatch ${entry.path}`);
}
const unlistedSourceFiles = [];
const walk = dir => {
 for (const e of fs.readdirSync(dir,{withFileTypes:true})) {
   const p=path.join(dir,e.name);
   const rel=path.relative(root,p).split(path.sep).join('/');
   if (rel === 'staging' || rel.startsWith('staging/')) continue;
   if (e.isDirectory()) walk(p);
   else if (rel !== 'manifest/file-sha256.json' && !fileManifest.files.some(x=>x.path===rel)) unlistedSourceFiles.push(rel);
 }
};
walk(root);
if (unlistedSourceFiles.length) fail(`unlisted source files: ${unlistedSourceFiles.join(', ')}`);

let stagingPresent = fs.existsSync(path.join(root,'staging'));
let stagingModuleCount = 0;
let sourceAndStagingParityVerified = false;
if (stagingPresent) {
 const stageDir=path.join(root,'staging/u06');
 if (!fs.existsSync(stageDir)) fail('staging exists without staging/u06');
 const modules=fs.readdirSync(stageDir).filter(f=>/^s\d{3}\.mjs$/u.test(f)).sort();
 stagingModuleCount=modules.length;
 if (stagingModuleCount !== 12) fail(`staging module count ${stagingModuleCount}`);
 const stageManifest=readJson('staging/u06/module-manifest.json');
 if (stageManifest.moduleCount !== 12 || stageManifest.productionActivationAllowed !== false) fail('staging manifest contract');
 for (let i=0;i<expected.length;i++) {
   const [slot,,,] = expected[i];
   const mod = await import(`${pathToFileURL(path.join(stageDir,`${slot}.mjs`)).href}?verify=${Date.now()}-${i}`);
   const data=mod.default;
   const sourceLecture=allLectures.find(x=>x.skillId===expected[i][2]);
   const sourceMc=allMc.filter(x=>x.skillId===expected[i][2]);
   const sourceCr=allCr.filter(x=>x.skillId===expected[i][2]);
   const sourceReviews=allReviews.filter(x=>x.skillId===expected[i][2]);
   const sourceDrawings=allDrawings.filter(x=>x.skillId===expected[i][2]);
   if (JSON.stringify(data.lecture)!==JSON.stringify(sourceLecture) ||
       JSON.stringify(data.mcQuestions)!==JSON.stringify(sourceMc) ||
       JSON.stringify(data.constructedResponses)!==JSON.stringify(sourceCr) ||
       JSON.stringify(data.semanticReviews)!==JSON.stringify(sourceReviews) ||
       JSON.stringify(data.drawingSpecs)!==JSON.stringify(sourceDrawings)) fail(`${slot}: staging parity mismatch`);
 }
 sourceAndStagingParityVerified=true;
}

console.log(JSON.stringify({
 status:'PASS',
 packageId:'math-v2-human-content-batch-007-u06-complete',
 unitId:'u06',
 lockedSkillCount:12,
 lectureCount:allLectures.length,
 mcQuestionCount:allMc.length,
 constructedResponseCount:allCr.length,
 semanticReviewCount:allReviews.length,
 figureCount:allDrawings.length,
 difficultyCounts:diffTotals,
 answerIndexCounts:answerTotals,
 exactDuplicateScan:'PASS',
 numberNameUnitOnlyNearDuplicateScan:'PASS',
 contentHashesVerified:true,
 fileManifestVerified:true,
 figureReferencesVerified:true,
 svgGeometryAssertionsVerified:true,
 questionSpecificReviewEvidenceVerified:true,
 skillSpecificLectureReviewVerified:true,
 traditionalChineseCheck:'PASS',
 legacyIsolationVerified:true,
 stagingPresent,
 stagingModuleCount,
 sourceAndStagingParityVerified,
 productionActivationAllowed:false
},null,2));
