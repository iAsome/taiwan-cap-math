import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { artifactSha256, auditRecordSha256 } from "../r4-core.mjs";
import {
  MATH_FOURTH_STAGE_CODE_SET,
  verifyMathCurriculumCodeRegister,
} from "../authority/math-curriculum-codes.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_SOURCE_REVIEWS = path.join(HERE, "reviews", "official-source-reviews.json");
const DEFAULT_ITEM_REVIEWS = path.join(HERE, "reviews", "items");
const REVIEWED = "complete-rendered-semantic-review";
const SUBJECTS = new Set([
  "english",
  "chinese",
  "chinese_writing",
  "math",
  "geography",
  "history",
  "civics",
  "biology",
  "physics_chemistry",
  "earth_science",
]);

function compareText(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

function exactKeys(value, keys, label) {
  assert(value && typeof value === "object" && !Array.isArray(value), `${label} must be an object`);
  assert.deepEqual(Object.keys(value).sort(compareText), [...keys].sort(compareText), `${label} keys`);
}

function uniqueStrings(values, label, { allowEmpty = false } = {}) {
  assert(Array.isArray(values), `${label} must be an array`);
  if (!allowEmpty) assert(values.length > 0, `${label} must not be empty`);
  for (const value of values) assert.equal(typeof value, "string", `${label} values must be strings`);
  assert.equal(new Set(values).size, values.length, `${label} must not contain duplicates`);
}

function auditRecord(artifactSha256Value, review) {
  const record = {
    artifactSha256: artifactSha256Value,
    status: "accepted",
    reviewerRole: review.reviewerRole,
    reviewedAt: review.reviewedAt,
    fullRead: true,
    renderedContextInspected: true,
    independentSolveOrEvidenceCheck: true,
    allFindingsResolved: true,
  };
  record.auditRecordSha256 = auditRecordSha256(record);
  return record;
}

function documentKey(document) {
  return `${document.documentId}\0${document.memberPath ?? ""}`;
}

function validateSourceReviews(data, extractionIndex) {
  exactKeys(data, ["schemaVersion", "status", "reviews"], "source review evidence");
  assert.equal(data.schemaVersion, "cap8-r4-official-source-review-evidence-v1");
  assert.equal(data.status, data.reviews.length ? "partially-reviewed" : "unreviewed");
  assert(Array.isArray(data.reviews));
  const materialById = new Map(extractionIndex.materials.map((material) => [material.materialId, material]));
  const seen = new Set();
  for (const review of data.reviews) {
    exactKeys(
      review,
      [
        "materialId",
        "reviewedAt",
        "reviewerRole",
        "reviewStatus",
        "documents",
        "audioMembers",
        "scopeObservations",
        "resolvedFindings",
      ],
      "source review",
    );
    assert(!seen.has(review.materialId), `duplicate source review: ${review.materialId}`);
    seen.add(review.materialId);
    assert.equal(review.reviewStatus, REVIEWED);
    assert.match(review.reviewedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.match(review.reviewerRole, /semantic reviewer/i);
    uniqueStrings(review.scopeObservations, `${review.materialId} scopeObservations`);
    uniqueStrings(review.resolvedFindings, `${review.materialId} resolvedFindings`, { allowEmpty: true });
    const material = materialById.get(review.materialId);
    assert(material, `${review.materialId}: reviewed material is missing from extraction index`);

    const expectedDocuments = [...material.documents].sort((a, b) => compareText(documentKey(a), documentKey(b)));
    const actualDocuments = [...review.documents].sort((a, b) => compareText(documentKey(a), documentKey(b)));
    assert.deepEqual(
      actualDocuments.map((document) => ({ documentId: document.documentId, memberPath: document.memberPath })),
      expectedDocuments.map((document) => ({ documentId: document.documentId, memberPath: document.memberPath })),
      `${review.materialId}: every extracted document must be reviewed`,
    );
    for (const documentReview of actualDocuments) {
      exactKeys(documentReview, ["documentId", "memberPath", "renderedPages"], "source document review");
      const document = expectedDocuments.find((candidate) => documentKey(candidate) === documentKey(documentReview));
      assert(document);
      assert.deepEqual(
        documentReview.renderedPages,
        document.pages.map((page) => page.pageNumber),
        `${review.materialId}/${documentReview.documentId}: every rendered page must be inspected`,
      );
    }

    const expectedAudio = material.archiveMembers
      .filter((member) => member.kind === "audio")
      .map((member) => member.memberPath)
      .sort(compareText);
    assert.deepEqual([...review.audioMembers].sort(compareText), expectedAudio, `${review.materialId}: every audio member must be inspected`);
  }
  return new Map(data.reviews.map((review) => [review.materialId, review]));
}

function candidateMap(candidates) {
  return new Map(candidates.exams.flatMap((exam) => exam.items.map((item) => [item.candidateId, { exam, item }])));
}

function validateItemReview(review, candidate, authorityNodesByCode, shard) {
  exactKeys(
    review,
    [
      "candidateId",
      "derivedAnswer",
      "sharedStimulusId",
      "primarySubject",
      "secondarySubjects",
      "curriculumCodes",
      "skills",
      "representationTypes",
      "reasoningOperations",
      "answerEvidence",
      "distractorAnalysis",
    ],
    "official item review",
  );
  assert.equal(review.candidateId, candidate.candidateId);
  assert.equal(review.derivedAnswer, candidate.officialAnswer, `${review.candidateId}: independent answer disagrees with official answer`);
  assert(review.sharedStimulusId === null || /^[A-Z][A-Z0-9_-]+$/.test(review.sharedStimulusId));
  assert(SUBJECTS.has(review.primarySubject), `${review.candidateId}: invalid primary subject`);
  uniqueStrings(review.secondarySubjects, `${review.candidateId} secondarySubjects`, { allowEmpty: true });
  for (const subject of review.secondarySubjects) assert(SUBJECTS.has(subject), `${review.candidateId}: invalid secondary subject`);
  uniqueStrings(review.curriculumCodes, `${review.candidateId} curriculumCodes`);
  for (const code of review.curriculumCodes) {
    if (review.primarySubject === "math") {
      assert(MATH_FOURTH_STAGE_CODE_SET.has(code), `${review.candidateId}: unknown fourth-stage curriculum code ${code}`);
      continue;
    }
    const declaredSubjects = [review.primarySubject, ...review.secondarySubjects]
      .map((subject) => subject === "chinese_writing" ? "chinese" : subject);
    const matchingNodes = authorityNodesByCode.get(code) ?? [];
    assert(matchingNodes.length > 0, `${review.candidateId}: unknown fourth-stage curriculum code ${code}`);
    assert(
      matchingNodes.some((node) => declaredSubjects.some((subject) => node.subjects.includes(subject))),
      `${review.candidateId}: curriculum code ${code} is not assigned to a declared subject`,
    );
  }
  uniqueStrings(review.skills, `${review.candidateId} skills`);
  uniqueStrings(review.representationTypes, `${review.candidateId} representationTypes`);
  uniqueStrings(review.reasoningOperations, `${review.candidateId} reasoningOperations`);
  assert.equal(typeof review.answerEvidence, "string");
  assert(review.answerEvidence.length >= 16, `${review.candidateId}: answerEvidence is too short`);
  uniqueStrings(review.distractorAnalysis, `${review.candidateId} distractorAnalysis`, {
    allowEmpty: candidate.officialAnswer === null,
  });
  if (candidate.officialAnswer !== null) {
    assert(review.distractorAnalysis.length > 0, `${review.candidateId}: selection item requires distractor analysis`);
  }
  assert.equal(shard.examId, candidate.candidateId.match(/^CAP-\d{3}-(?:MAIN|ALTERNATE)/)?.[0]);
  assert.equal(shard.paper, candidate.paper);
}

function validateItemReviewShards(shards, candidates, authorityGraph) {
  const byCandidate = candidateMap(candidates);
  const authorityNodesByCode = new Map();
  for (const node of authorityGraph.nodes) {
    const matches = authorityNodesByCode.get(node.code) ?? [];
    matches.push(node);
    authorityNodesByCode.set(node.code, matches);
  }
  const reviews = new Map();
  for (const shard of shards) {
    exactKeys(shard, ["schemaVersion", "examId", "paper", "reviewedAt", "reviewerRole", "reviewStatus", "items"], "item review shard");
    assert.equal(shard.schemaVersion, "cap8-r4-official-item-review-shard-v1");
    assert.equal(shard.reviewStatus, REVIEWED);
    assert.match(shard.reviewedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.match(shard.reviewerRole, /semantic reviewer/i);
    assert(Array.isArray(shard.items) && shard.items.length > 0, `${shard.examId}/${shard.paper}: empty review shard`);
    const expected = candidates.exams.find((exam) => exam.examId === shard.examId)?.items.filter((item) => item.paper === shard.paper);
    assert(expected, `${shard.examId}: unknown exam`);
    assert.deepEqual(shard.items.map((item) => item.candidateId), expected.map((item) => item.candidateId), `${shard.examId}/${shard.paper}: review shard must cover the complete paper in source order`);
    for (const review of shard.items) {
      assert(!reviews.has(review.candidateId), `duplicate item review: ${review.candidateId}`);
      const candidate = byCandidate.get(review.candidateId)?.item;
      assert(candidate, `${review.candidateId}: candidate is missing`);
      validateItemReview(review, candidate, authorityNodesByCode, shard);
      reviews.set(review.candidateId, { review, shard, candidate });
    }
  }
  return reviews;
}

export async function loadOfficialReviewEvidence({
  sourceReviewsPath = DEFAULT_SOURCE_REVIEWS,
  itemReviewsDirectory = DEFAULT_ITEM_REVIEWS,
} = {}) {
  const sourceReviews = JSON.parse(await readFile(sourceReviewsPath, "utf8"));
  const filenames = (await readdir(itemReviewsDirectory))
    .filter((name) => name.endsWith(".json"))
    .sort(compareText);
  const itemReviewShards = [];
  for (const filename of filenames) itemReviewShards.push(JSON.parse(await readFile(path.join(itemReviewsDirectory, filename), "utf8")));
  return { sourceReviews, itemReviewShards };
}

export function validateOfficialReviewEvidence(evidence, { extractionIndex, candidates, authorityGraph }) {
  verifyMathCurriculumCodeRegister();
  const sourceReviews = validateSourceReviews(evidence.sourceReviews, extractionIndex);
  const itemReviews = validateItemReviewShards(evidence.itemReviewShards, candidates, authorityGraph);
  for (const { candidate } of itemReviews.values()) {
    assert(sourceReviews.has(candidate.sourceMaterialId), `${candidate.candidateId}: item review cannot precede complete source review`);
  }
  return {
    sourceReviews,
    itemReviews,
    counts: {
      materials: sourceReviews.size,
      papers: evidence.itemReviewShards.length,
      items: itemReviews.size,
    },
  };
}

export function applyOfficialReviewEvidence(index, validated) {
  const ledgers = new Map(index.years.map((ledger) => [ledger.year, ledger]));
  const materials = new Map(index.years.flatMap((ledger) => ledger.materials.map((material) => [material.materialId, { ledger, material }])));

  for (const [materialId, review] of validated.sourceReviews) {
    const target = materials.get(materialId);
    assert(target, `${materialId}: ledger material missing`);
    const id = `SOURCE-REVIEW-${materialId}`;
    target.material.reviewRecordId = id;
    target.ledger.sourceReviews.push({
      id,
      sourceSha256: target.material.sourceSha256,
      record: auditRecord(target.material.sourceSha256, review),
    });
  }

  for (const { review, shard, candidate } of validated.itemReviews.values()) {
    const item = {
      year: candidate.year,
      paper: candidate.paper,
      itemId: candidate.candidateId,
      sharedStimulusId: review.sharedStimulusId,
      sourceSha256: candidate.sourceSha256,
      sourceLocator: `${candidate.sourceMaterialId}/${candidate.sourceDocumentId}#page=${candidate.sourceLocator.page};x=${candidate.sourceLocator.x ?? ""};y=${candidate.sourceLocator.y ?? ""}`,
      officialAnswer: candidate.officialAnswer ?? "constructed-response",
      primarySubject: review.primarySubject,
      secondarySubjects: review.secondarySubjects,
      curriculumCodes: review.curriculumCodes,
      skills: review.skills,
      representationTypes: review.representationTypes,
      reasoningOperations: review.reasoningOperations,
      distractorAnalysis: [`正答依據：${review.answerEvidence}`, ...review.distractorAnalysis],
    };
    item.finalAudit = auditRecord(artifactSha256(item), shard);
    ledgers.get(candidate.year).items.push(item);
  }

  for (const ledger of index.years) {
    ledger.sourceReviews.sort((a, b) => compareText(a.id, b.id));
    ledger.items.sort((a, b) => compareText(`${a.year}\0${a.paper}\0${a.itemId}`, `${b.year}\0${b.paper}\0${b.itemId}`));
  }
  if (validated.counts.materials === materials.size) index.status = "complete-reviewed";
  else if (validated.counts.materials || validated.counts.items) index.status = "partially-reviewed";
  return index;
}
