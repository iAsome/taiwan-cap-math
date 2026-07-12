import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const readJson = rel => JSON.parse(fs.readFileSync(path.join(root, rel), 'utf8'));
const readJsonl = rel => {
  const text = fs.readFileSync(path.join(root, rel), 'utf8');
  return text.split(/\r?\n/).filter(Boolean).map((line, index) => {
    try { return JSON.parse(line); }
    catch (error) { throw new Error(`${rel}:${index + 1}: invalid JSONL: ${error.message}`); }
  });
};
const fail = message => { throw new Error(message); };
const canonical = value => Array.isArray(value)
  ? value.map(canonical)
  : value && typeof value === 'object'
    ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])]))
    : value;
const hashRecord = record => {
  const copy = structuredClone(record);
  delete copy.contentSha256;
  return crypto.createHash('sha256').update(JSON.stringify(canonical(copy))).digest('hex');
};
const shaFile = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const normalizePrompt = text => text.toLowerCase()
  .replace(/\d+(?:\.\d+)?(?:\/\d+)?/g, '{n}')
  .replace(/[a-z]+/g, '{v}')
  .replace(/平方公分|平方公尺|公分|公尺|cm²|m²|cm|mm|公里|千公尺|元|人|公升|ml|kg|km|l|公斤|克/g, '{u}')
  .replace(/[甲乙丙丁戊己庚辛壬癸a-z]/g, '{x}')
  .replace(/\s+/g, '');
const requiredText = (obj, key, id, min = 2) => {
  if (typeof obj[key] !== 'string' || obj[key].trim().length < min) fail(`${id}: missing or weak ${key}`);
};
const authority = 'CHATGPT_HUMAN_AUTHORED_R1';
const lock = readJson('schemas/u18-lock-snapshot.json');
if (lock.unit.unitId !== 'u18' || lock.unit.numericId !== 18 || lock.lockedSkillCount !== 16) fail('lock snapshot identity/count mismatch');
const skills = lock.unit.skills;
const expectedSlots = Array.from({ length: 16 }, (_, i) => `s${String(i + 1).padStart(3, '0')}`);
if (skills.map(s => s.slot).join(',') !== expectedSlots.join(',')) fail('slot order mismatch');
if (new Set(skills.map(s => s.skillId)).size !== 16) fail('duplicate locked skill IDs');

const allLectures = [], allMc = [], allCr = [], allReviews = [], allDrawings = [];
const figureRefs = new Set();
const diffTotals = { basic: 0, standard: 0, advanced: 0, literacy: 0 };
const answerTotals = [0, 0, 0, 0];
const answerSequences = [];
const bannedSimplified = /[与线边长为个题图对应实现时间无误进这后还过数计认确视测验并从开关义则层总结给选项读标录类别维运发门价费圆径质积体单独习础错览压缩扩较两组内约况经设调达变难简写万亿点区备参见观讲阅审证据条称术仅该属务顺块张辆种节显毕将够报纸墙树处带阳阴顶横纵轴码网东乡县岛陆于异获顾须复杂绘隐箭签举补针钟冲损购买资产装饰灯宽页强构筑护准态响离远阶规范围优稳当试议订户监汇赔断练连摄声场厂锥钢铝铜电车轨园际钉颗涂浆转换业职问静众协统余帐叶员竖杆]/u;

for (const skill of skills) {
  const base = `units/u18/${skill.slot}`;
  const lecture = readJson(`${base}/lecture.json`);
  const mc = readJsonl(`${base}/mc-questions.jsonl`);
  const cr = readJsonl(`${base}/constructed-response.jsonl`);
  const reviews = readJsonl(`${base}/semantic-reviews.jsonl`);
  const drawings = readJsonl(`${base}/drawing-specs.jsonl`);

  if (lecture.skillId !== skill.skillId || lecture.topicId !== skill.topicId || lecture.lockedSkillOrder !== skill.order) fail(`${skill.slot}: lecture lock mismatch`);
  if (lecture.contentAuthority !== authority || lecture.replacementPolicy !== 'REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION') fail(`${skill.slot}: lecture authority/isolation`);
  if (lecture.contentSha256 !== hashRecord(lecture)) fail(`${skill.slot}: lecture content hash`);
  if (!Array.isArray(lecture.workedExamples) || lecture.workedExamples.length < 4) fail(`${skill.slot}: lecture examples`);
  if (!Array.isArray(lecture.commonMistakes) || lecture.commonMistakes.length < 4) fail(`${skill.slot}: lecture mistakes`);
  if (!Array.isArray(lecture.nonApplicableCases) || lecture.nonApplicableCases.length < 3) fail(`${skill.slot}: invalid-use coverage`);
  if (!lecture.lectureReview?.reviewNote || lecture.lectureReview.reviewNote.length < 20) fail(`${skill.slot}: lecture review`);
  if ((lecture.lockedSkillTitle || '').includes('、') || (lecture.title || '').includes('、')) fail(`${skill.slot}: title contains prohibited 、`);
  if (bannedSimplified.test(JSON.stringify(lecture))) fail(`${skill.slot}: Simplified Chinese character detected in lecture`);

  if (mc.length !== 12 || reviews.length !== 12 || cr.length < 2) fail(`${skill.slot}: item count mismatch`);
  const perDiff = { basic: 0, standard: 0, advanced: 0, literacy: 0 };
  const perAnswer = [0, 0, 0, 0];
  const reviewByQuestion = new Map(reviews.map(r => [r.questionId, r]));
  if (reviewByQuestion.size !== 12) fail(`${skill.slot}: duplicate semantic review question ID`);

  for (const item of mc) {
    if (item.unitId !== 'u18' || item.skillId !== skill.skillId || item.topicId !== skill.topicId) fail(`${item.questionId}: identity mismatch`);
    if (item.contentAuthority !== authority || item.replacementPolicy !== 'REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION') fail(`${item.questionId}: authority/isolation`);
    if (item.contentSha256 !== hashRecord(item)) fail(`${item.questionId}: content hash`);
    if (!['basic','standard','advanced','literacy'].includes(item.difficulty)) fail(`${item.questionId}: difficulty`);
    if (!Array.isArray(item.choices) || item.choices.length !== 4 || new Set(item.choices).size !== 4) fail(`${item.questionId}: choices`);
    if (!Number.isInteger(item.answerIndex) || item.answerIndex < 0 || item.answerIndex > 3) fail(`${item.questionId}: answer index`);
    if (!Array.isArray(item.optionAnalysis) || item.optionAnalysis.length !== 4) fail(`${item.questionId}: option analysis count`);
    if (item.optionAnalysis.filter(x => x.truth === true).length !== 1 || item.optionAnalysis[item.answerIndex]?.truth !== true) fail(`${item.questionId}: option truth`);
    for (let i = 0; i < 4; i++) {
      if (item.optionAnalysis[i].choice !== item.choices[i] || typeof item.optionAnalysis[i].reason !== 'string' || item.optionAnalysis[i].reason.length < 4) fail(`${item.questionId}: option analysis ${i}`);
    }
    for (const key of ['prompt','target','independentSolution','explanation','misconceptionTarget','prerequisiteCheck','unitAndRoundingCheck','ambiguityAndBoundaryAudit','difficultyReason']) requiredText(item, key, item.questionId, 4);
    if (!Array.isArray(item.steps) || item.steps.length < 2) fail(`${item.questionId}: steps`);
    if (item.independentSolution === item.explanation) fail(`${item.questionId}: independent solution copied from explanation`);
    if (item.difficulty === 'literacy' && (!item.literacyContextNecessity || item.literacyContextNecessity.length < 12)) fail(`${item.questionId}: literacy necessity`);
    if (item.difficulty !== 'literacy' && item.literacyContextNecessity !== null) fail(`${item.questionId}: unexpected literacy necessity`);
    if (bannedSimplified.test(JSON.stringify(item))) fail(`${item.questionId}: Simplified Chinese character detected`);
    const review = reviewByQuestion.get(item.questionId);
    if (!review) fail(`${item.questionId}: missing semantic review`);
    if (review.contentSha256 !== item.contentSha256 || review.derivedAnswer !== item.choices[item.answerIndex] || review.storedAnswer !== item.choices[item.answerIndex]) fail(`${item.questionId}: semantic answer/hash mismatch`);
    if (!review.answerMatch || !review.uniqueCorrectAnswer || review.reviewerDecision !== 'pass') fail(`${item.questionId}: semantic decision`);
    if (JSON.stringify(review.optionTruth) !== JSON.stringify(item.optionAnalysis.map(x => x.truth))) fail(`${item.questionId}: semantic option truth`);
    if (review.independentSolution !== item.independentSolution || review.reviewerNote.length < 70) fail(`${item.questionId}: weak independent semantic evidence`);
    if (Object.values(review.ambiguityChecks || {}).some(v => typeof v !== 'string' || v.length < 6)) fail(`${item.questionId}: weak ambiguity evidence`);
    if (item.figureId) figureRefs.add(item.figureId);
    perDiff[item.difficulty]++; diffTotals[item.difficulty]++;
    perAnswer[item.answerIndex]++; answerTotals[item.answerIndex]++;
  }
  for (const [name,count] of Object.entries(perDiff)) if (count !== 3) fail(`${skill.slot}: difficulty ${name}=${count}`);
  if (perAnswer.some(count => count !== 3)) fail(`${skill.slot}: answer positions ${perAnswer}`);
  answerSequences.push(mc.map(item => item.answerIndex).join(''));

  for (const item of cr) {
    if (item.unitId !== 'u18' || item.skillId !== skill.skillId || item.topicId !== skill.topicId) fail(`${item.questionId}: CR identity`);
    if (item.contentAuthority !== authority || item.replacementPolicy !== 'REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION') fail(`${item.questionId}: CR authority`);
    if (item.contentSha256 !== hashRecord(item)) fail(`${item.questionId}: CR hash`);
    for (const key of ['prompt','requiredWork','standardSolution','followThroughPolicy','unitAndNotationRules','answerOnlyPolicy']) requiredText(item,key,item.questionId,8);
    if (!Array.isArray(item.reasoningSteps) || item.reasoningSteps.length < 3) fail(`${item.questionId}: CR reasoning`);
    if (!Array.isArray(item.rubric) || item.rubric.length !== 4 || item.rubric.map(x => x.score).sort().join(',') !== '0,1,2,3') fail(`${item.questionId}: CR rubric`);
    if (new Set(item.rubric.map(x => x.criteria)).size !== 4 || item.rubric.some(x => x.criteria.length < 10)) fail(`${item.questionId}: generic CR rubric`);
    if (!Array.isArray(item.partialCreditRules) || item.partialCreditRules.length < 2) fail(`${item.questionId}: CR partial credit`);
    if (item.independentReview?.decision !== 'pass' || item.independentReview.reviewNote.length < 20) fail(`${item.questionId}: CR review`);
    if (bannedSimplified.test(JSON.stringify(item))) fail(`${item.questionId}: Simplified Chinese character detected in CR`);
    if (item.figureId) figureRefs.add(item.figureId);
  }

  for (const drawing of drawings) {
    if (drawing.unitId !== 'u18' || drawing.skillId !== skill.skillId) fail(`${drawing.figureId}: drawing identity`);
    if (drawing.contentSha256 !== hashRecord(drawing)) fail(`${drawing.figureId}: drawing hash`);
    if (drawing.contentAuthority !== authority || drawing.figureReview?.decision !== 'pass') fail(`${drawing.figureId}: drawing authority/review`);
    if (!drawing.altText || Object.keys(drawing.drawingSpec || {}).length < 8) fail(`${drawing.figureId}: drawing detail`);
    const svgFile = path.join(root, drawing.svgPath);
    if (!fs.existsSync(svgFile)) fail(`${drawing.figureId}: missing SVG`);
    const svg = fs.readFileSync(svgFile, 'utf8');
    for (const token of ['<title','<desc','role="img"',...(drawing.svgAssertions || [])]) if (!svg.includes(token)) fail(`${drawing.figureId}: missing SVG token ${token}`);
    if (bannedSimplified.test(svg)) fail(`${drawing.figureId}: Simplified Chinese character detected in SVG`);
  }

  allLectures.push(lecture); allMc.push(...mc); allCr.push(...cr); allReviews.push(...reviews); allDrawings.push(...drawings);
}

if (allLectures.length !== 16 || allMc.length !== 192 || allCr.length !== 32 || allReviews.length !== 192 || allDrawings.length !== 11) fail('global content counts');
if (new Set(answerSequences).size !== 16) fail('answer-index sequence repeated across skills');
for (const [name,count] of Object.entries(diffTotals)) if (count !== 48) fail(`global difficulty ${name}=${count}`);
if (answerTotals.some(count => count !== 48)) fail(`global answer positions ${answerTotals}`);
const uniqueCheck = (items, key, expected, label) => {
  if (new Set(items.map(x => x[key])).size !== expected) fail(`duplicate ${label}`);
};
uniqueCheck(allLectures,'lectureId',16,'lecture ID');
uniqueCheck(allMc,'questionId',192,'MC ID');
uniqueCheck(allMc,'prompt',192,'MC prompt');
uniqueCheck(allCr,'questionId',32,'CR ID');
uniqueCheck(allCr,'prompt',32,'CR prompt');
uniqueCheck(allDrawings,'figureId',11,'figure ID');
uniqueCheck(allReviews,'independentSolution',192,'review independent solution');
uniqueCheck(allReviews,'reviewerNote',192,'reviewer note');
uniqueCheck(allReviews,'difficultyReason',192,'difficulty reason');
if (new Set(allLectures.map(x => x.lectureReview.reviewNote)).size !== 16) fail('duplicate lecture review evidence');
if (new Set(allCr.map(x => x.independentReview.reviewNote)).size !== 32) fail('duplicate CR review evidence');
const mcSkeletons = allMc.map(x => normalizePrompt(x.prompt));
if (new Set(mcSkeletons).size !== 192) fail('near-identical MC prompts after number/name/unit normalization');
const crSkeletons = allCr.map(x => normalizePrompt(x.prompt));
if (new Set(crSkeletons).size !== 32) fail('near-identical CR prompts after number/name/unit normalization');

const svgFiles = fs.readdirSync(path.join(root,'figures/u18')).filter(name => name.endsWith('.svg')).sort();
if (svgFiles.length !== 11) fail(`figure file count ${svgFiles.length}`);
for (const ref of figureRefs) if (!svgFiles.includes(`${ref}.svg`)) fail(`unresolved figure reference ${ref}`);
for (const drawing of allDrawings) if (!figureRefs.has(drawing.figureId)) fail(`unreferenced drawing ${drawing.figureId}`);

const isolation = readJson('manifest/legacy-content-isolation.json');
const isolationExpected = {
  legacyContentImported:false, legacySemanticEvidenceAccepted:false, oldProductionRuntimeModified:false,
  deleteLegacyNow:false, finalRetirementRequired:true, productionActivationAllowed:false, oldContentUsedAsInspiration:false
};
for (const [key,value] of Object.entries(isolationExpected)) if (isolation[key] !== value) fail(`legacy isolation ${key}`);
const project = readJson('manifest/project-manifest.json');
if (project.productionActivationAllowed !== false || project.centralCoordinatorApprovalRequired !== true) fail('project activation/approval contract');
if (project.expectedBaseHead !== '__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__') fail('expected HEAD placeholder changed');
const cursorText = fs.readFileSync(path.join(root,'CURSOR-INSTRUCTIONS.md'),'utf8');
for (const token of ['CENTRAL_COORDINATOR_APPROVAL_REQUIRED','EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__','數學會考作戰室/tools/v2-human-content/batches/019-u18-complete/']) if (!cursorText.includes(token)) fail(`Cursor instruction token ${token}`);

const contentInventory = readJson('manifest/content-sha256.json');
const actualContent = new Map();
for (const r of allLectures) actualContent.set(r.lectureId,r.contentSha256);
for (const r of allMc) actualContent.set(r.questionId,r.contentSha256);
for (const r of allCr) actualContent.set(r.questionId,r.contentSha256);
for (const r of allDrawings) actualContent.set(r.figureId,r.contentSha256);
if (contentInventory.recordCount !== actualContent.size || contentInventory.records.length !== actualContent.size) fail('content hash inventory count');
for (const entry of contentInventory.records) if (actualContent.get(entry.id) !== entry.sha256) fail(`content inventory ${entry.id}`);

const fileManifest = readJson('manifest/file-sha256.json');
if (fileManifest.algorithm !== 'SHA-256' || !Array.isArray(fileManifest.files)) fail('file manifest shape');
for (const entry of fileManifest.files) {
  const file = path.join(root,entry.path);
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) fail(`missing hashed file ${entry.path}`);
  if (shaFile(file) !== entry.sha256 || fs.statSync(file).size !== entry.bytes) fail(`file hash/size ${entry.path}`);
}

let emittedModuleCount = 0;
const stagingDir = path.join(root,'staging');
const stagingPresent = fs.existsSync(stagingDir);
if (stagingPresent) {
  const stagingManifest = readJson('staging/u18-batch-019-staging-manifest.json');
  if (stagingManifest.unitId !== 'u18' || stagingManifest.productionActivationAllowed !== false) fail('staging manifest identity');
  if (!Array.isArray(stagingManifest.outputs) || stagingManifest.outputs.length !== 16) fail('staging output count');
  for (const output of stagingManifest.outputs) {
    const file = path.join(root,output.path);
    if (!fs.existsSync(file) || shaFile(file) !== output.sha256 || fs.statSync(file).size !== output.bytes) fail(`staging output ${output.path}`);
  }
  emittedModuleCount = stagingManifest.outputs.length;
}

console.log(JSON.stringify({
  status:'PASS', unitId:'u18', skillCount:16, lectureCount:16, mcQuestionCount:192,
  constructedResponseCount:32, semanticReviewCount:192, figureCount:11,
  difficultyCounts:diffTotals, answerIndexCounts:answerTotals,
  contentHashesVerified:true, fileManifestVerified:true, uniqueIdsAndPromptsVerified:true,
  normalizedNearDuplicateScanVerified:true, questionSpecificReviewEvidenceVerified:true,
  skillSpecificLectureReviewVerified:true, constructedResponseRubricsVerified:true,
  figureReferencesVerified:true, svgGeometryAssertionsVerified:true,
  traditionalChineseVerified:true, legacyIsolationVerified:true,
  productionActivationAllowed:false, stagingPresent, emittedModuleCount
}, null, 2));
