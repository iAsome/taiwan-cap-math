import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const unitId = 'u03';
const batchId = '004-u03-complete';
const authority = 'CHATGPT_HUMAN_AUTHORED_R1';
const slots = Array.from({ length: 15 }, (_, index) => `s${String(index + 1).padStart(3, '0')}`);

const readJson = relativePath =>
  JSON.parse(fs.readFileSync(path.join(root, relativePath), 'utf8'));

const readJsonl = relativePath => {
  const text = fs.readFileSync(path.join(root, relativePath), 'utf8');
  return text.split(/\r?\n/).filter(Boolean).map((line, index) => {
    try {
      return JSON.parse(line);
    } catch (error) {
      throw new Error(`${relativePath}:${index + 1}: invalid JSONL: ${error.message}`);
    }
  });
};

const normalize = value =>
  Array.isArray(value)
    ? value.map(normalize)
    : value && typeof value === 'object'
      ? Object.fromEntries(Object.keys(value).sort().map(key => [key, normalize(value[key])]))
      : value;

const hashRecord = record => {
  const copy = structuredClone(record);
  delete copy.contentSha256;
  return crypto.createHash('sha256').update(JSON.stringify(normalize(copy))).digest('hex');
};

const sha256File = filePath =>
  crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');

const fail = message => {
  throw new Error(message);
};

const assert = (condition, message) => {
  if (!condition) fail(message);
};

const allQuestions = [];
const allReviews = [];
const allConstructedResponses = [];
const allLectures = [];
const allDrawingSpecs = [];
const figureReferences = new Set();
const difficultyCounts = { basic: 0, standard: 0, advanced: 0, literacy: 0 };
const answerIndexCounts = [0, 0, 0, 0];

const expectedSkillIds = [
  'linear-expression-substitution',
  'linear-expression-simplify',
  'linear-equation-balance-property',
  'linear-equation-basic-solving',
  'linear-equation-parentheses',
  'linear-equation-fractions',
  'linear-equation-check-solution',
  'linear-equation-age-problem',
  'linear-equation-money-problem',
  'linear-equation-rate-problem',
  'linear-equation-distribution-problem',
  'linear-equation-consecutive-integers',
  'linear-equation-reasonableness',
  'linear-equation-plan-comparison',
  'linear-equation-literacy-context',
];

const exactQuestionIds = new Set();
const exactQuestionTexts = new Set();
const exactCrIds = new Set();
const exactLectureIds = new Set();
const reviewByQuestion = new Map();

for (const slot of slots) {
  const base = `units/${unitId}/${slot}`;
  const questions = readJsonl(`${base}/mc-questions.jsonl`);
  const reviews = readJsonl(`${base}/semantic-reviews.jsonl`);
  const constructedResponses = readJsonl(`${base}/constructed-response.jsonl`);
  const lecture = readJson(`${base}/lecture.json`);
  const drawingSpecs = readJsonl(`${base}/drawing-specs.jsonl`);

  assert(questions.length === 12, `${slot}: expected 12 MC questions, got ${questions.length}`);
  assert(reviews.length === 12, `${slot}: expected 12 reviews, got ${reviews.length}`);
  assert(constructedResponses.length === 2, `${slot}: expected 2 constructed responses, got ${constructedResponses.length}`);

  const expectedSkillId = expectedSkillIds[Number(slot.slice(1)) - 1];
  assert(lecture.unitId === unitId, `${slot}: lecture unit mismatch`);
  assert(lecture.skillId === expectedSkillId, `${slot}: lecture skill mismatch`);
  assert(lecture.contentAuthority === authority, `${slot}: lecture authority mismatch`);
  assert(lecture.legacyContentDisposition === 'replace-old-lecture-at-final-integration', `${slot}: lecture retirement disposition`);
  assert(!lecture.title.includes('、'), `${slot}: lecture title contains forbidden dunhao`);
  assert(Array.isArray(lecture.learningOutcomes) && lecture.learningOutcomes.length >= 3, `${slot}: weak learning outcomes`);
  assert(Array.isArray(lecture.glossary) && lecture.glossary.length >= 3, `${slot}: weak glossary`);
  assert(Array.isArray(lecture.conceptNarrative) && lecture.conceptNarrative.length >= 4 && lecture.conceptNarrative.every(item => typeof item === 'string' && item.length >= 15), `${slot}: weak concept narrative`);
  assert(Array.isArray(lecture.formalDefinitions) && lecture.formalDefinitions.length >= 1, `${slot}: missing definitions`);
  assert(Array.isArray(lecture.method) && lecture.method.length >= 4, `${slot}: weak method`);
  assert(Array.isArray(lecture.workedExamples) && lecture.workedExamples.length >= 4, `${slot}: insufficient examples`);
  assert(Array.isArray(lecture.commonMistakes) && lecture.commonMistakes.length >= 6, `${slot}: insufficient common mistakes`);
  assert(Array.isArray(lecture.prerequisites), `${slot}: prerequisites missing`);
  assert(lecture.prerequisites.every(item => item.skillId && item.requiredLevel && item.requiredLevel.length >= 12), `${slot}: weak prerequisite`);
  assert(lecture.lectureReview?.mathematicalCorrectness === 'pass' && lecture.lectureReview?.zeroFoundationReadability === 'pass', `${slot}: lecture review decision`);
  assert(typeof lecture.lectureReview?.reviewNote === 'string' && lecture.lectureReview.reviewNote.length >= 45, `${slot}: weak lecture review`);
  assert(hashRecord(lecture) === lecture.contentSha256, `${slot}: lecture hash mismatch`);
  assert(!exactLectureIds.has(lecture.lectureId), `${slot}: duplicate lecture ID`);
  exactLectureIds.add(lecture.lectureId);

  const bankTexts = new Set(questions.map(item => item.text));
  for (const example of lecture.workedExamples) {
    assert(!bankTexts.has(example.prompt), `${slot}: lecture example copied exactly from bank`);
    assert(Array.isArray(example.solutionSteps) && example.solutionSteps.length >= 2, `${slot}: weak lecture example steps`);
    assert(typeof example.answer === 'string' && example.answer.length >= 1, `${slot}: lecture example missing answer`);
  }

  for (const review of reviews) {
    assert(!reviewByQuestion.has(review.questionId), `${review.questionId}: duplicate review`);
    reviewByQuestion.set(review.questionId, review);
  }

  for (const item of questions) {
    assert(item.type === 'mc', `${item.questionId}: type`);
    assert(item.unitId === unitId, `${item.questionId}: unit`);
    assert(item.skillId === expectedSkillId, `${item.questionId}: skill`);
    assert(item.contentAuthority === authority, `${item.questionId}: authority`);
    assert(item.legacyContentDisposition === 'replace-old-record-at-final-integration', `${item.questionId}: legacy disposition`);
    assert(item.noTemplateDeclaration === true, `${item.questionId}: no-template declaration`);
    assert(item.reviewStatus === 'independently-reviewed', `${item.questionId}: review status`);
    assert(Array.isArray(item.choices) && item.choices.length === 4, `${item.questionId}: choices`);
    assert(new Set(item.choices).size === 4, `${item.questionId}: duplicate choices`);
    assert(Number.isInteger(item.answerIndex) && item.answerIndex >= 0 && item.answerIndex <= 3, `${item.questionId}: answer index`);
    assert(Array.isArray(item.optionAnalysis) && item.optionAnalysis.length === 4, `${item.questionId}: option analysis`);
    assert(item.optionAnalysis.every((entry, index) =>
      entry.choice === item.choices[index] &&
      typeof entry.reason === 'string' &&
      entry.reason.length >= 5 &&
      typeof entry.truth === 'boolean'
    ), `${item.questionId}: option analysis mismatch or weak evidence`);
    assert(item.optionAnalysis.filter(entry => entry.truth).length === 1, `${item.questionId}: must have exactly one true option`);
    assert(item.optionAnalysis[item.answerIndex].truth === true, `${item.questionId}: correct option not marked true`);
    assert(Array.isArray(item.steps) && item.steps.length >= 3, `${item.questionId}: insufficient steps`);
    assert(typeof item.explanation === 'string' && item.explanation.length >= 19, `${item.questionId}: weak explanation`);
    assert(typeof item.authoringIntent === 'string' && item.authoringIntent.length >= 7, `${item.questionId}: weak authoring intent`);
    assert(hashRecord(item) === item.contentSha256, `${item.questionId}: content hash mismatch`);
    assert(!exactQuestionIds.has(item.questionId), `${item.questionId}: duplicate ID`);
    assert(!exactQuestionTexts.has(item.text), `${item.questionId}: duplicate text`);
    exactQuestionIds.add(item.questionId);
    exactQuestionTexts.add(item.text);

    const review = reviewByQuestion.get(item.questionId);
    assert(review, `${item.questionId}: missing review`);
    assert(review.contentAuthority === authority, `${item.questionId}: review authority`);
    assert(review.legacyEvidenceAccepted === false, `${item.questionId}: legacy evidence must be rejected`);
    assert(review.contentSha256 === item.contentSha256, `${item.questionId}: review content hash`);
    assert(review.reviewVersion === 'human-review-r4.0', `${item.questionId}: review version`);
    assert(review.reviewedAt === '2026-07-12', `${item.questionId}: review date`);
    assert(review.answerMatch === true, `${item.questionId}: answer match`);
    assert(review.uniqueCorrectAnswer === true, `${item.questionId}: unique-answer review`);
    assert(review.reviewerDecision === 'pass', `${item.questionId}: reviewer decision`);
    assert(review.derivedAnswer === item.choices[item.answerIndex], `${item.questionId}: derived answer`);
    assert(review.storedAnswer === item.choices[item.answerIndex], `${item.questionId}: stored answer`);
    assert(JSON.stringify(review.optionTruth) === JSON.stringify(item.optionAnalysis.map(entry => entry.truth)), `${item.questionId}: option-truth mismatch`);
    assert(typeof review.independentSolution === 'string' && review.independentSolution.length >= 11, `${item.questionId}: weak independent solution`);
    assert(review.independentSolution !== item.explanation, `${item.questionId}: independent solution copied from explanation`);
    assert(typeof review.difficultyReason === 'string' && review.difficultyReason.length >= 45, `${item.questionId}: weak difficulty reason`);
    assert(typeof review.reviewerNote === 'string' && review.reviewerNote.length >= 130, `${item.questionId}: weak reviewer note`);
    assert(review.reviewerNote.includes(review.independentSolution), `${item.questionId}: reviewer note omits independent recomputation`);
    assert(Object.keys(review.ambiguityChecks ?? {}).length >= 6, `${item.questionId}: ambiguity checklist incomplete`);
    assert(Object.values(review.ambiguityChecks ?? {}).every(value => typeof value === 'string' && value.length >= 35), `${item.questionId}: weak ambiguity evidence`);

    if (item.difficulty === 'literacy') {
      assert(typeof item.literacyContextNecessity === 'string' && item.literacyContextNecessity.length >= 25, `${item.questionId}: literacy context not justified`);
      assert(review.literacyContextNecessity === item.literacyContextNecessity, `${item.questionId}: literacy review mismatch`);
    }

    if (item.figureId) figureReferences.add(item.figureId);
    difficultyCounts[item.difficulty] += 1;
    answerIndexCounts[item.answerIndex] += 1;
  }

  for (const item of constructedResponses) {
    assert(item.type === 'constructed-response', `${item.questionId}: CR type`);
    assert(item.unitId === unitId, `${item.questionId}: CR unit`);
    assert(item.skillId === expectedSkillId, `${item.questionId}: CR skill`);
    assert(item.contentAuthority === authority, `${item.questionId}: CR authority`);
    assert(item.legacyContentDisposition === 'replace-old-record-at-final-integration', `${item.questionId}: CR legacy disposition`);
    assert(hashRecord(item) === item.contentSha256, `${item.questionId}: CR hash`);
    assert(!exactCrIds.has(item.questionId), `${item.questionId}: duplicate CR ID`);
    exactCrIds.add(item.questionId);
    assert(Array.isArray(item.requiredWork) && item.requiredWork.length >= 2, `${item.questionId}: CR required work`);
    assert(Array.isArray(item.fullCreditSolution) && item.fullCreditSolution.length >= 2, `${item.questionId}: CR solution depth`);
    assert(Array.isArray(item.alternativeSolutions) && item.alternativeSolutions.length >= 1, `${item.questionId}: CR alternatives`);
    assert(Array.isArray(item.rubric) && item.rubric.length === 4, `${item.questionId}: CR rubric count`);
    assert(item.rubric.map(entry => entry.score).sort().join(',') === '0,1,2,3', `${item.questionId}: CR rubric scores`);
    assert(Array.isArray(item.scoringNotes) && item.scoringNotes.length >= 2, `${item.questionId}: CR scoring notes`);
    assert(Array.isArray(item.commonErrors) && item.commonErrors.length >= 2, `${item.questionId}: CR common errors`);
    assert(item.independentReview?.decision === 'pass', `${item.questionId}: CR independent review decision`);
    assert(typeof item.independentReview?.derivedResult === 'string' && item.independentReview.derivedResult.length >= 1, `${item.questionId}: CR derived result`);
    assert(typeof item.independentReview?.ambiguity === 'string' && item.independentReview.ambiguity.length >= 25, `${item.questionId}: CR ambiguity review`);
    if (item.figureId) figureReferences.add(item.figureId);
  }

  for (const drawing of drawingSpecs) {
    assert(drawing.unitId === unitId, `${drawing.figureId}: drawing unit`);
    assert(drawing.skillId === expectedSkillId, `${drawing.figureId}: drawing skill`);
    assert(drawing.contentAuthority === authority, `${drawing.figureId}: drawing authority`);
    assert(drawing.legacyContentDisposition === 'new-human-authored-figure', `${drawing.figureId}: drawing legacy disposition`);
    assert(typeof drawing.altText === 'string' && drawing.altText.length >= 30, `${drawing.figureId}: alt text`);
    assert(drawing.drawingSpec && Object.keys(drawing.drawingSpec).length >= 8, `${drawing.figureId}: drawing detail`);
    assert(Array.isArray(drawing.svgAssertions) && drawing.svgAssertions.length >= 3, `${drawing.figureId}: SVG assertions`);
    assert(drawing.figureReview?.decision === 'pass', `${drawing.figureId}: figure decision`);
    assert(drawing.figureReview?.questionFigureConsistency === 'pass', `${drawing.figureId}: question/figure consistency`);
    assert(drawing.figureReview?.accessibility === 'pass', `${drawing.figureId}: accessibility review`);
    assert(drawing.figureReview?.mobileReadability === 'pass', `${drawing.figureId}: mobile review`);
    assert(drawing.figureReview?.answerLeakage === 'pass', `${drawing.figureId}: answer-leak review`);
    assert(typeof drawing.figureReview?.reviewNote === 'string' && drawing.figureReview.reviewNote.length >= 40, `${drawing.figureId}: figure review note`);
    assert(hashRecord(drawing) === drawing.contentSha256, `${drawing.figureId}: drawing hash`);

    const svgPath = path.join(root, drawing.svgPath);
    assert(fs.existsSync(svgPath), `${drawing.figureId}: missing SVG`);
    const svgText = fs.readFileSync(svgPath, 'utf8');
    assert(svgText.includes('<title'), `${drawing.figureId}: missing title`);
    assert(svgText.includes('<desc'), `${drawing.figureId}: missing desc`);
    assert(svgText.includes('role="img"'), `${drawing.figureId}: missing role=img`);
    assert(svgText.includes('viewBox='), `${drawing.figureId}: missing viewBox`);
    for (const token of drawing.svgAssertions) {
      assert(svgText.includes(token), `${drawing.figureId}: missing SVG assertion token ${token}`);
    }
  }

  allQuestions.push(...questions);
  allReviews.push(...reviews);
  allConstructedResponses.push(...constructedResponses);
  allLectures.push(lecture);
  allDrawingSpecs.push(...drawingSpecs);
}

assert(allQuestions.length === 180, `global question count ${allQuestions.length}`);
assert(allReviews.length === 180, `global review count ${allReviews.length}`);
assert(allConstructedResponses.length === 30, `global CR count ${allConstructedResponses.length}`);
assert(allLectures.length === 15, `global lecture count ${allLectures.length}`);
assert(allDrawingSpecs.length === 3, `global drawing count ${allDrawingSpecs.length}`);
assert(reviewByQuestion.size === 180, `global review map count ${reviewByQuestion.size}`);
assert(exactQuestionIds.size === 180, 'duplicate question IDs');
assert(exactQuestionTexts.size === 180, 'duplicate question texts');
assert(exactCrIds.size === 30, 'duplicate CR IDs');
assert(exactLectureIds.size === 15, 'duplicate lecture IDs');
assert(new Set(allReviews.map(item => item.independentSolution)).size === 180, 'duplicate independent solutions');
assert(new Set(allReviews.map(item => item.difficultyReason)).size === 180, 'duplicate difficulty reasons');
assert(new Set(allReviews.map(item => item.reviewerNote)).size === 180, 'duplicate reviewer notes');
assert(new Set(allLectures.map(item => item.lectureReview.reviewNote)).size === 15, 'duplicate lecture review notes');
assert(new Set(allDrawingSpecs.map(item => item.figureReview.reviewNote)).size === 3, 'duplicate figure review notes');

for (const [difficulty, count] of Object.entries(difficultyCounts)) {
  assert(count === 45, `difficulty ${difficulty}: expected 45, got ${count}`);
}
assert(answerIndexCounts.every(count => count === 45), `answer positions: ${answerIndexCounts.join(',')}`);

const svgDirectory = path.join(root, 'figures/u03');
const svgFiles = fs.readdirSync(svgDirectory).filter(name => name.endsWith('.svg')).sort();
assert(svgFiles.length === 3, `expected 3 SVG files, got ${svgFiles.length}`);
for (const figureId of figureReferences) {
  assert(svgFiles.includes(`${figureId}.svg`), `unresolved figure reference ${figureId}`);
}

const bannedGeneratedPatterns = [
  /針對「要讓/u,
  /本題採用/u,
  /方法—結果/u,
  /甲、乙兩份方案/u,
  /保留原題/u,
  /author-v2-production-content/u,
];
for (const item of [...allQuestions, ...allLectures, ...allConstructedResponses, ...allReviews]) {
  const serialized = JSON.stringify(item);
  for (const pattern of bannedGeneratedPatterns) {
    assert(!pattern.test(serialized), `banned generated phrase ${pattern}`);
  }
}

const simplifiedCharacters = ['这', '个', '后', '数', '题', '书', '车', '岁', '们', '为', '应', '于', '与', '达', '实', '学', '总', '线', '图', '当', '无', '并', '过', '从', '开', '长', '门', '问', '间', '样', '体', '约', '万'];
for (const item of [...allQuestions, ...allLectures, ...allConstructedResponses, ...allReviews, ...allDrawingSpecs]) {
  const serialized = JSON.stringify(item);
  for (const character of simplifiedCharacters) {
    assert(!serialized.includes(character), `simplified character "${character}" detected in ${item.questionId ?? item.lectureId ?? item.figureId}`);
  }
}

const isolation = readJson('manifest/legacy-content-isolation.json');
assert(isolation.contentAuthority === authority, 'legacy isolation authority');
assert(isolation.legacyContentImported === false, 'legacy content imported');
assert(isolation.legacySemanticEvidenceAccepted === false, 'legacy semantic evidence accepted');
assert(isolation.oldProductionRuntimeModified === false, 'old production runtime modified');
assert(isolation.deleteLegacyNow === false, 'legacy deletion must not occur in this batch');
assert(isolation.finalRetirementRequired === true, 'final retirement not required');
assert(Array.isArray(isolation.legacyFamiliesToRetireAtFinalIntegration) && isolation.legacyFamiliesToRetireAtFinalIntegration.length >= 8, 'legacy retirement list incomplete');
assert(Array.isArray(isolation.finalSequence) && isolation.finalSequence.length >= 7, 'legacy final sequence incomplete');

const separationAudit = readJson('review/u03-legacy-separation-audit.json');
assert(separationAudit.decision === 'pass', 'legacy separation audit');
assert(separationAudit.legacyFilesReadAsContentSource.length === 0, 'legacy files used as source');
assert(separationAudit.legacyQuestionsCopied === 0, 'legacy questions copied');
assert(separationAudit.legacyLecturesCopied === 0, 'legacy lectures copied');
assert(separationAudit.legacyReviewsAccepted === 0, 'legacy reviews accepted');
assert(separationAudit.runtimeCoexistenceAllowed === false, 'runtime coexistence allowed');
assert(separationAudit.productionActivationAllowed === false, 'production activation allowed');

const projectManifest = readJson('manifest/project-manifest.json');
assert(projectManifest.batchId === batchId, 'project manifest batch');
assert(projectManifest.expectedHeadBeforeImport === '91e2211fe846e80d9e2a11ce5fb2850913a14235', 'expected HEAD mismatch');
assert(projectManifest.contentAuthority === authority, 'project manifest authority');
assert(projectManifest.productionActivationAllowed === false, 'manifest production activation');
assert(projectManifest.legacyContentImportAllowed === false, 'manifest legacy import');
assert(projectManifest.oldDatabaseDeletionAllowedInThisBatch === false, 'manifest old DB deletion');

const progress = readJson('manifest/project-progress-after-batch-004.json');
assert(progress.completedUnitCount === 3, 'progress unit count');
assert(progress.completedSkills === 45, 'progress skill count');
assert(progress.completedLectures === 45, 'progress lecture count');
assert(progress.completedMcQuestions === 540, 'progress MC count');
assert(progress.completedConstructedResponses === 90, 'progress CR count');
assert(progress.completedHumanFigures === 11, 'progress figure count');
assert(progress.legacyGeneratedDatabaseStillPresentForIsolationOnly === true, 'legacy isolation progress');
assert(progress.legacyGeneratedDatabaseWillBeDeletedAtFinalIntegration === true, 'legacy retirement progress');

const finalAudit = readJson('review/u03-final-manual-audit-r4.0.json');
assert(finalAudit.decision === 'pass', 'final manual audit');
assert(finalAudit.questionCount === 180 && finalAudit.lectureCount === 15 && finalAudit.constructedResponseCount === 30, 'final audit counts');
assert(finalAudit.legacyContentMixed === false, 'final audit legacy mixing');
assert(finalAudit.issuesFoundAndCorrected.length >= 11, 'final audit correction evidence incomplete');

const fileManifest = readJson('manifest/file-sha256.json');
assert(Array.isArray(fileManifest.files) && fileManifest.files.length >= 1, 'missing file manifest');
assert(fileManifest.schemaVersion === 'math-v2-human-file-manifest-r4.0', 'file manifest version');
assert(fileManifest.batchId === batchId, 'file manifest batch');
for (const entry of fileManifest.files) {
  const filePath = path.join(root, entry.path);
  assert(fs.existsSync(filePath), `missing hashed file ${entry.path}`);
  assert(fs.statSync(filePath).size === entry.bytes, `file size mismatch ${entry.path}`);
  assert(sha256File(filePath) === entry.sha256, `file hash mismatch ${entry.path}`);
}

console.log(JSON.stringify({
  status: 'PASS',
  unitId,
  batchId,
  newSkillCount: 15,
  u03SkillTotalAfterBatch: 15,
  totalHumanSkillCountAfterBatch: 45,
  completedHumanUnitCountAfterBatch: 3,
  lectureCount: 15,
  mcQuestionCount: 180,
  constructedResponseCount: 30,
  semanticReviewCount: 180,
  figureCount: 3,
  difficultyCounts,
  answerIndexCounts,
  contentHashesVerified: true,
  fileManifestVerified: true,
  figureReferencesVerified: true,
  questionSpecificReviewEvidenceVerified: true,
  skillSpecificLectureReviewVerified: true,
  constructedResponseRubricsVerified: true,
  svgGeometryAssertionsVerified: true,
  contentAuthorityVerified: true,
  legacyContentImported: false,
  legacySemanticEvidenceAccepted: false,
  oldDatabaseDeletionDeferredToFinalIntegration: true,
  finalLegacyRetirementRequired: true,
  productionActivationAllowed: false,
}, null, 2));
