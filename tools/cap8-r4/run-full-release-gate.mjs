import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { readFile, readdir, realpath, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import {
  loadCurriculumSourceSnapshot,
  validateAuthorityGraph,
} from "./authority/authority-graph.mjs";
import { validateFrozenAuthorityGraph } from "./authority/frozen-authority-graph.mjs";
import { validateAppendixEvidence } from "./authority/appendix-evidence.mjs";
import { validateAuthorityNodeReview } from "./authority/authority-node-review.mjs";
import { validateEnglishVocabularyAuthority } from "./authority/english-vocabulary-authority.mjs";
import { validateChineseLearningCategories } from "./authority/chinese-learning-categories.mjs";
import { validateAuthoringRecord } from "./authoring-validator.mjs";
import { validateChineseWritingCalibration } from "./chinese-writing-calibration.mjs";
import { validateOfficialExtractionIndex } from "./extract-official-materials.mjs";
import { inventoryCurrentSite } from "./inventory-current-site.mjs";
import { validateOfficialItemCandidates } from "./ledger/official-item-candidates.mjs";
import {
  loadOfficialSourceRegister,
  validateOfficialMaterialLedgerIndex,
} from "./ledger/official-material-ledger.mjs";
import {
  loadOfficialReviewEvidence,
  validateOfficialReviewEvidence,
} from "./ledger/official-review-evidence.mjs";
import {
  SUBJECTS,
  auditRecordSha256,
  canonicalJson,
  productionFloor,
  scopeLocks,
  sha256,
} from "./r4-core.mjs";
import {
  serializePublisherReferenceLedger,
  validatePublisherCatalog,
} from "./publisher-reference-catalog.mjs";
import {
  serializePublisherLearningReferenceLedger,
  serializeWebSourceDiscoveryLedger,
  validatePublisherPublicResourceReview,
} from "./publisher-public-resource-review.mjs";
import { verifyCurriculumSources } from "./verify-curriculum-sources.mjs";
import { verifyOfficialSources } from "./verify-official-sources.mjs";
import { verifyPackage } from "./verify-package.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const MANIFEST_NAME = "content-manifest-v4.json";
const AUDITED_ARTIFACT_TYPES = new Set(["lecture", "question", "stimulus", "asset", "writing-task", "ui"]);
const USER_REQUIREMENTS_PATH = "tools/cap8-r4/user-requirements.json";
const RAW_AUTHORITY_GRAPH_PATH = "tools/cap8-r4/authority/authority-graph.json";
const FROZEN_AUTHORITY_GRAPH_PATH = "tools/cap8-r4/authority/frozen-authority-graph.json";
const APPENDIX_EVIDENCE_PATH = "tools/cap8-r4/authority/appendix-evidence.json";
const AUTHORITY_NODE_REVIEW_PATH = "tools/cap8-r4/authority/authority-node-review.json";
const ENGLISH_VOCABULARY_AUTHORITY_PATH = "tools/cap8-r4/authority/english-vocabulary-authority.json";
const CHINESE_WRITING_CALIBRATION_PATH = "tools/cap8-r4/ledger/chinese-writing-calibration.json";
const PUBLISHER_CATALOG_PDF_PATH = "tools/cap8-r4/evidence/publisher/naer-115-approved-textbooks.pdf";
const PUBLISHER_CATALOG_JSON_PATH = "tools/cap8-r4/evidence/publisher/naer-115-approved-textbooks.json";
const PUBLISHER_LEDGER_PATH = "tools/cap8-r4/ledger/publisher-reference-ledger.csv";
const PUBLISHER_PUBLIC_REVIEW_PATH = "tools/cap8-r4/ledger/publisher-public-resource-review.json";
const PUBLISHER_LEARNING_LEDGER_PATH = "tools/cap8-r4/ledger/publisher-learning-reference-ledger.csv";
const WEB_DISCOVERY_LEDGER_PATH = "tools/cap8-r4/ledger/web-source-discovery-ledger.csv";
const OFFICIAL_SOURCE_REGISTER_PATH = "tools/cap8-r4/evidence/official/official-source-register.json";
const OFFICIAL_LEDGER_PATH = "tools/cap8-r4/ledger/official-material-ledger.json";
const OFFICIAL_EXTRACTION_PATH = "tools/cap8-r4/evidence/official/official-extraction-index.json";
const OFFICIAL_ITEM_CANDIDATES_PATH = "tools/cap8-r4/ledger/official-item-candidates.json";
const MATH_UI_FILES = Object.freeze([
  "index.html",
  "styles.css",
  "math-bootstrap.js",
  "math-text-sanitize.js",
  "human-runtime/analysis-data.js",
  "human-runtime/app-human.js",
  "human-runtime/bootstrap.mjs",
  "human-runtime/config.mjs",
  "human-runtime/engine.mjs",
  "human-runtime/human-production-bootstrap.js",
  "human-runtime/official-spec-lock-r1.json",
  "human-runtime/release-blueprint-r1.json",
  "human-runtime/site-shell-data.js",
  "human-runtime/storage-migration.mjs",
]);

export const DEFAULT_FINAL_EVIDENCE_PATHS = Object.freeze({
  audits: "tools/cap8-r4/evidence/final-audit/final-audit-records.json",
  corpus: "tools/cap8-r4/evidence/final-audit/student-visible-corpus.txt",
  ranges: "tools/cap8-r4/evidence/final-audit/student-visible-corpus-ranges.json",
});

let manifestValidatorPromise;

async function manifestValidator() {
  if (!manifestValidatorPromise) {
    manifestValidatorPromise = readFile(path.join(HERE, "content-manifest-v4.schema.json"), "utf8")
      .then(JSON.parse)
      .then((schema) => new Ajv2020({ allErrors: true, strict: true }).compile(schema));
  }
  return manifestValidatorPromise;
}

function validateManifestSchema(manifest) {
  return manifestValidator().then((validate) => {
    if (!validate(manifest)) {
      throw new Error(
        `content manifest validation failed: ${validate.errors
          .map((error) => `${error.instancePath || "/"} ${error.message}`)
          .join("; ")}`,
      );
    }
  });
}

function repositoryPath(repoRoot, relative) {
  assert.equal(typeof relative, "string", "repository path must be a string");
  assert(relative && !relative.includes("\\"), `non-canonical repository path: ${relative}`);
  assert(!path.posix.isAbsolute(relative) && !/^[A-Za-z]:/.test(relative), `absolute path is forbidden: ${relative}`);
  const absolute = path.resolve(repoRoot, ...relative.split("/"));
  assert(
    absolute === repoRoot || absolute.startsWith(`${repoRoot}${path.sep}`),
    `path escapes repository: ${relative}`,
  );
  return absolute;
}

async function readRepositoryFile(repoRoot, relative) {
  const absolute = repositoryPath(repoRoot, relative);
  const resolved = await realpath(absolute);
  assert(
    resolved === repoRoot || resolved.startsWith(`${repoRoot}${path.sep}`),
    `symlink escapes repository: ${relative}`,
  );
  assert((await stat(resolved)).isFile(), `not a file: ${relative}`);
  return readFile(resolved);
}

async function readJson(repoRoot, relative) {
  return JSON.parse((await readRepositoryFile(repoRoot, relative)).toString("utf8"));
}

function auditId(prefix, value) {
  return `${prefix}-${value}`.replace(/[^A-Za-z0-9_-]+/g, "-").replace(/-+/g, "-").toUpperCase();
}

function recordArtifact(id, type, value, sourcePath, sourceLocator) {
  return {
    id: auditId(`MATH-${type}`, id),
    type,
    subject: "math",
    path: sourcePath,
    sourceLocator,
    sha256: sha256(Buffer.from(canonicalJson(value), "utf8")),
  };
}

export async function discoverMathAuditArtifacts(repoRoot = REPO_ROOT) {
  const mathRoot = "數學會考作戰室";
  const contentRoot = `${mathRoot}/human-runtime/content`;
  const manifest = await readJson(repoRoot, `${contentRoot}/manifest.json`);
  assert.equal(manifest.productionRuntime, true);
  assert.equal(manifest.contentAuthority, "CHATGPT_HUMAN_AUTHORED_R1");
  assert.equal(manifest.units.length, 23);

  const artifacts = [];
  const figureSpecs = new Map();
  const counts = { units: 0, lectures: 0, questions: 0, assets: 0, ui: 0 };
  for (const descriptor of manifest.units) {
    const sourcePath = `${contentRoot}/${descriptor.path}`;
    const bytes = await readRepositoryFile(repoRoot, sourcePath);
    assert.equal(bytes.length, descriptor.bytes, `${descriptor.unitId}: byte count mismatch`);
    assert.equal(sha256(bytes), descriptor.sha256, `${descriptor.unitId}: hash mismatch`);
    const unit = JSON.parse(bytes.toString("utf8"));
    const unitVisible = Object.fromEntries(
      ["unitId", "numericUnitId", "title", "gradeBand", "domain", "counts"]
        .filter((key) => unit[key] !== undefined)
        .map((key) => [key, unit[key]]),
    );
    artifacts.push(recordArtifact(unit.unitId, "ui", unitVisible, sourcePath, `${unit.unitId} catalog metadata`));
    counts.units += 1;
    counts.ui += 1;
    for (const skill of unit.skills) {
      assert(skill.lecture, `${unit.unitId}/${skill.slot}: lecture missing`);
      artifacts.push(
        recordArtifact(skill.lecture.lectureId, "lecture", skill.lecture, sourcePath, `${unit.unitId}/${skill.slot}/lecture`),
      );
      counts.lectures += 1;
      for (const question of [...skill.mcQuestions, ...skill.constructedResponses]) {
        artifacts.push(
          recordArtifact(question.questionId, "question", question, sourcePath, `${unit.unitId}/${skill.slot}/${question.questionId}`),
        );
        counts.questions += 1;
      }
      for (const spec of skill.drawingSpecs) {
        assert(!figureSpecs.has(spec.figureId), `duplicate Math drawing specification: ${spec.figureId}`);
        figureSpecs.set(spec.figureId, spec);
      }
    }
  }

  for (const [figureId, descriptor] of Object.entries(manifest.figureIndex).sort(([a], [b]) => a.localeCompare(b, "en"))) {
    const bytes = await readRepositoryFile(repoRoot, descriptor.sourcePath);
    assert.equal(bytes.length, descriptor.bytes, `${figureId}: byte count mismatch`);
    assert.equal(sha256(bytes), descriptor.sha256, `${figureId}: SVG hash mismatch`);
    const spec = figureSpecs.get(figureId);
    assert(spec, `${figureId}: drawing specification missing`);
    artifacts.push(
      recordArtifact(
        figureId,
        "asset",
        { drawingSpec: spec, svgSha256: descriptor.sha256 },
        descriptor.sourcePath,
        `${figureId} drawing specification and SVG`,
      ),
    );
    counts.assets += 1;
  }
  assert.equal(figureSpecs.size, Object.keys(manifest.figureIndex).length, "unindexed Math drawing specification remains");

  for (const relative of MATH_UI_FILES) {
    const sourcePath = `${mathRoot}/${relative}`;
    const bytes = await readRepositoryFile(repoRoot, sourcePath);
    artifacts.push({
      id: auditId("MATH-UI", relative),
      type: "ui",
      subject: "math",
      path: sourcePath,
      sourceLocator: relative,
      sha256: sha256(bytes),
    });
    counts.ui += 1;
  }

  assert.deepEqual(counts, { units: 23, lectures: 339, questions: 4746, assets: 178, ui: 37 });
  assert.equal(new Set(artifacts.map((artifact) => artifact.id)).size, artifacts.length, "duplicate Math audit artifact ID");
  return { artifacts, counts, contentVersion: manifest.contentVersion };
}

export async function verifyUserRequirements(repoRoot = REPO_ROOT) {
  const requirements = await readJson(repoRoot, USER_REQUIREMENTS_PATH);
  assert.equal(requirements.schemaVersion, "cap8-r4-user-requirements-v1");
  assert.deepEqual(requirements.productionSubjects, SUBJECTS);
  assert.deepEqual(requirements.integratedModes, ["integrated_social", "integrated_natural"]);
  assert.deepEqual(requirements.finalAuditScopes, [
    "math",
    "english",
    "chinese",
    "geography",
    "history",
    "civics",
    "integrated_social",
    "biology",
    "physics_chemistry",
    "earth_science",
    "integrated_natural",
  ]);
  assert.equal(requirements.secondaryReferenceMayExpandScope, false);
  assert.equal(requirements.mathAuthoringInScope, false);
  assert.equal(requirements.mathFinalExhaustiveAuditRequired, true);
  assert.equal(requirements.mainAndPublicSiteFrozenUntilGlobalGate, true);
  return requirements;
}

export async function verifyAuthorityGraphEvidence(repoRoot = REPO_ROOT, { requireFrozen = true } = {}) {
  const graph = await readJson(repoRoot, requireFrozen ? FROZEN_AUTHORITY_GRAPH_PATH : RAW_AUTHORITY_GRAPH_PATH);
  if (requireFrozen) return validateFrozenAuthorityGraph(graph, repoRoot);
  const snapshot = await loadCurriculumSourceSnapshot();
  return validateAuthorityGraph(graph, snapshot, { repoRoot, requireFrozen: false });
}

export async function verifyAppendixEvidence(repoRoot = REPO_ROOT) {
  return validateAppendixEvidence(
    await readJson(repoRoot, APPENDIX_EVIDENCE_PATH),
    path.join(repoRoot, ...RAW_AUTHORITY_GRAPH_PATH.split("/")),
  );
}

export async function verifyEnglishVocabularyAuthority(repoRoot = REPO_ROOT) {
  return validateEnglishVocabularyAuthority(await readJson(repoRoot, ENGLISH_VOCABULARY_AUTHORITY_PATH));
}

export async function verifyPublisherReferenceEvidence(repoRoot = REPO_ROOT) {
  const [pdfBytes, catalog, ledgerBytes] = await Promise.all([
    readRepositoryFile(repoRoot, PUBLISHER_CATALOG_PDF_PATH),
    readJson(repoRoot, PUBLISHER_CATALOG_JSON_PATH),
    readRepositoryFile(repoRoot, PUBLISHER_LEDGER_PATH),
  ]);
  const counts = await validatePublisherCatalog(catalog, pdfBytes);
  assert.equal(ledgerBytes.toString("utf8"), serializePublisherReferenceLedger(catalog));
  return counts;
}

export async function verifyPublisherPublicResourceEvidence(repoRoot = REPO_ROOT) {
  const [review, learningLedger, discoveryLedger] = await Promise.all([
    readJson(repoRoot, PUBLISHER_PUBLIC_REVIEW_PATH),
    readRepositoryFile(repoRoot, PUBLISHER_LEARNING_LEDGER_PATH),
    readRepositoryFile(repoRoot, WEB_DISCOVERY_LEDGER_PATH),
  ]);
  const counts = await validatePublisherPublicResourceReview(review);
  assert.equal(learningLedger.toString("utf8"), serializePublisherLearningReferenceLedger(review));
  assert.equal(discoveryLedger.toString("utf8"), serializeWebSourceDiscoveryLedger(review));
  return counts;
}

export async function verifyChineseReferenceFoundation(repoRoot = REPO_ROOT) {
  const categories = validateChineseLearningCategories();
  const calibration = await validateChineseWritingCalibration(
    await readJson(repoRoot, CHINESE_WRITING_CALIBRATION_PATH),
  );
  return { categories, calibration };
}

export async function verifyAuthorityNodeReview(repoRoot = REPO_ROOT) {
  return validateAuthorityNodeReview(await readJson(repoRoot, AUTHORITY_NODE_REVIEW_PATH), {
    graphPath: path.join(repoRoot, ...RAW_AUTHORITY_GRAPH_PATH.split("/")),
    appendixPath: path.join(repoRoot, ...APPENDIX_EVIDENCE_PATH.split("/")),
    officialRegisterPath: path.join(repoRoot, ...OFFICIAL_SOURCE_REGISTER_PATH.split("/")),
  });
}

export async function verifyOfficialLedgerEvidence(repoRoot = REPO_ROOT, { requireComplete = true } = {}) {
  const index = await readJson(repoRoot, OFFICIAL_LEDGER_PATH);
  const snapshot = await loadOfficialSourceRegister();
  return validateOfficialMaterialLedgerIndex(index, snapshot, { requireComplete });
}

export async function verifyOfficialExtractionEvidence(repoRoot = REPO_ROOT) {
  const index = await readJson(repoRoot, OFFICIAL_EXTRACTION_PATH);
  return validateOfficialExtractionIndex(index, { verifyFiles: true });
}

export async function verifyOfficialItemCandidateEvidence(repoRoot = REPO_ROOT) {
  const extraction = await readJson(repoRoot, OFFICIAL_EXTRACTION_PATH);
  const candidates = await readJson(repoRoot, OFFICIAL_ITEM_CANDIDATES_PATH);
  return validateOfficialItemCandidates(candidates, extraction);
}

export async function verifyOfficialReviewShardEvidence(repoRoot = REPO_ROOT) {
  const extractionIndex = await readJson(repoRoot, OFFICIAL_EXTRACTION_PATH);
  const candidates = await readJson(repoRoot, OFFICIAL_ITEM_CANDIDATES_PATH);
  const authorityGraph = await readJson(repoRoot, RAW_AUTHORITY_GRAPH_PATH);
  const evidence = await loadOfficialReviewEvidence({
    sourceReviewsPath: path.join(repoRoot, "tools", "cap8-r4", "ledger", "reviews", "official-source-reviews.json"),
    itemReviewsDirectory: path.join(repoRoot, "tools", "cap8-r4", "ledger", "reviews", "items"),
  });
  return validateOfficialReviewEvidence(evidence, { extractionIndex, candidates, authorityGraph }).counts;
}

async function findNamedFiles(root, name) {
  const found = [];
  for (const entry of (await readdir(root, { withFileTypes: true })).sort((a, b) =>
    a.name.localeCompare(b.name, "en"),
  )) {
    const absolute = path.join(root, entry.name);
    assert(!entry.isSymbolicLink(), `symlink is forbidden during manifest discovery: ${absolute}`);
    if (entry.isDirectory()) found.push(...(await findNamedFiles(absolute, name)));
    else if (entry.isFile() && entry.name === name) found.push(absolute);
  }
  return found;
}

function floorEntries(floor) {
  return Object.entries(floor)
    .filter(([, value]) => value && typeof value === "object" && Number.isInteger(value.order) && value.folder)
    .sort(([, a], [, b]) => a.order - b.order);
}

function sum(entries, key) {
  return entries.reduce((total, [, value]) => total + value[key], 0);
}

function validateFloorAndLocks(floor, locks, expectedSubjects) {
  const entries = floorEntries(floor);
  if (expectedSubjects) assert.deepEqual(entries.map(([subject]) => subject), expectedSubjects);
  assert.equal(new Set(entries.map(([, value]) => value.order)).size, entries.length, "duplicate subject order");

  if (floor.totals) {
    assert.equal(sum(entries, "min_skills"), floor.totals.min_skills, "global skill floor mismatch");
    assert.equal(sum(entries, "lectures"), floor.totals.lectures, "global lecture floor mismatch");
    assert.equal(sum(entries, "skill_items"), floor.totals.skill_items, "global skill-item floor mismatch");
    assert.equal(sum(entries, "stimulus_items"), floor.totals.stimulus_items, "global stimulus-item floor mismatch");
    assert.equal(
      floor.totals.skill_items + floor.totals.stimulus_items,
      floor.totals.total_choice_items,
      "global choice-item floor mismatch",
    );
  }

  for (const [subject, subjectFloor] of entries) {
    const lock = locks?.[subject];
    if (!lock) continue;
    assert.equal(lock.subjectId, subject, `${subject}: scope-lock subject mismatch`);
    assert.equal(lock.productionOrder, subjectFloor.order, `${subject}: production order mismatch`);
    assert.equal(lock.repositoryFolder, subjectFloor.folder, `${subject}: repository folder mismatch`);
    assert.equal(lock.minimumAtomicSkills, subjectFloor.min_skills, `${subject}: skill floor mismatch`);
    assert.equal(lock.minimumLectures, subjectFloor.lectures, `${subject}: lecture floor mismatch`);
    assert.equal(lock.minimumStaticSkillQuestions, subjectFloor.skill_items, `${subject}: skill-item floor mismatch`);
    assert.equal(lock.minimumStimulusQuestions, subjectFloor.stimulus_items, `${subject}: stimulus-item floor mismatch`);
    assert(
      subjectFloor.skill_items >= subjectFloor.min_skills * lock.questionsPerAtomicSkillMinimum,
      `${subject}: per-skill question floor is not met`,
    );
  }
  return entries;
}

function assertManifestFloors(subject, manifest, floor, lock) {
  const requirements = {
    skills: floor.min_skills,
    lectures: floor.lectures,
    skillQuestions: floor.skill_items,
    stimulusQuestions: floor.stimulus_items,
  };
  for (const [key, minimum] of Object.entries(requirements)) {
    assert(manifest.counts[key] >= minimum, `${subject}: ${key} ${manifest.counts[key]} is below ${minimum}`);
  }

  const special = lock?.specialRequirements || {};
  const namedCounts = {
    listening_stimuli: "listeningStimuli",
    reading_passages: "readingPassages",
    writing_tasks: "writingTasks",
  };
  for (const [requirement, count] of Object.entries(namedCounts)) {
    if (special[requirement] !== undefined) {
      assert(
        manifest.counts[count] >= special[requirement],
        `${subject}: ${count} ${manifest.counts[count]} is below ${special[requirement]}`,
      );
    }
  }
  if (special.stimulus_sets !== undefined) {
    assert(manifest.counts.stimuli >= special.stimulus_sets, `${subject}: stimulus set floor is not met`);
  }
  if (special.shared_text_sets !== undefined) {
    assert(manifest.counts.stimuli >= special.shared_text_sets, `${subject}: shared-text set floor is not met`);
  }
}

function assertDeclaredCounts(subject, manifest, observed) {
  const expected = {
    authorityNodes: observed.authority,
    skills: observed.skill,
    lectures: observed.lecture,
    skillQuestions: observed.skillQuestions,
    stimulusQuestions: observed.stimulusQuestions,
    stimuli: observed.stimulus,
    assets: observed.asset,
  };
  for (const [key, value] of Object.entries(expected)) {
    assert.equal(manifest.counts[key], value, `${subject}: declared ${key} does not match artifacts`);
  }
}

export async function discoverSubjectArtifacts({
  repoRoot = REPO_ROOT,
  floor,
  locks = {},
  expectedSubjects = null,
  validateRecord = validateAuthoringRecord,
} = {}) {
  const entries = validateFloorAndLocks(floor, locks, expectedSubjects);
  const allIds = new Set();
  const allPaths = new Set();
  const artifacts = [];
  const subjects = [];

  for (const [subject, subjectFloor] of entries) {
    const folder = repositoryPath(repoRoot, subjectFloor.folder);
    assert((await stat(folder)).isDirectory(), `${subject}: subject folder is missing`);
    const candidates = await findNamedFiles(folder, MANIFEST_NAME);
    assert.equal(candidates.length, 1, `${subject}: expected exactly one ${MANIFEST_NAME}, found ${candidates.length}`);
    const manifestPath = path.relative(repoRoot, candidates[0]).replaceAll("\\", "/");
    const manifest = JSON.parse(await readFile(candidates[0], "utf8"));
    await validateManifestSchema(manifest);
    assert.equal(manifest.subjectId, subject, `${subject}: content manifest subject mismatch`);
    assertManifestFloors(subject, manifest, subjectFloor, locks[subject]);

    const observed = {
      authority: 0,
      skill: 0,
      lecture: 0,
      skillQuestions: 0,
      stimulusQuestions: 0,
      stimulus: 0,
      asset: 0,
    };

    for (const descriptor of manifest.artifacts) {
      assert(!allIds.has(descriptor.id), `duplicate artifact ID: ${descriptor.id}`);
      allIds.add(descriptor.id);
      assert(!allPaths.has(descriptor.path), `artifact path is reused: ${descriptor.path}`);
      allPaths.add(descriptor.path);
      const bytes = await readRepositoryFile(repoRoot, descriptor.path);
      assert.equal(sha256(bytes), descriptor.sha256, `${descriptor.id}: artifact SHA-256 mismatch`);

      if (["authority", "skill", "lecture", "question"].includes(descriptor.type)) {
        const record = JSON.parse(bytes.toString("utf8"));
        assert.equal(record.id, descriptor.id, `${descriptor.id}: artifact ID does not match file`);
        assert.equal(record.subject, subject, `${descriptor.id}: artifact subject mismatch`);
        await validateRecord(descriptor.type, record);
        if (descriptor.type === "question") {
          observed[record.stimulusId ? "stimulusQuestions" : "skillQuestions"] += 1;
        } else {
          observed[descriptor.type] += 1;
        }
      } else if (descriptor.type !== "ui") {
        observed[descriptor.type] += 1;
      }
      artifacts.push({ ...descriptor, subject });
    }
    assertDeclaredCounts(subject, manifest, observed);
    subjects.push({ subject, manifestPath, contentVersion: manifest.contentVersion, counts: manifest.counts });
  }

  return { subjects, artifacts };
}

function records(value, label) {
  const result = Array.isArray(value) ? value : value?.records;
  assert(Array.isArray(result), `${label} must be a JSON array or an object with a records array`);
  return result;
}

export async function verifyExternalFinalEvidence({
  artifacts,
  audits,
  corpus,
  ranges,
  validateRecord = validateAuthoringRecord,
}) {
  assert(Buffer.isBuffer(corpus), "student-visible corpus must be bytes");
  assert(corpus.length > 0, "student-visible corpus is empty");
  assert(Buffer.from(corpus.toString("utf8"), "utf8").equals(corpus), "student-visible corpus is not valid UTF-8");

  const required = artifacts.filter((artifact) => AUDITED_ARTIFACT_TYPES.has(artifact.type));
  assert(required.length > 0, "no student-visible artifacts were discovered");
  const artifactById = new Map(required.map((artifact) => [artifact.id, artifact]));
  assert.equal(artifactById.size, required.length, "duplicate student-visible artifact ID");

  const auditByArtifact = new Map();
  for (const audit of audits) {
    await validateRecord("finalAudit", audit);
    assert.equal(audit.auditRecordSha256, auditRecordSha256(audit), `${audit.artifactId}: audit record hash mismatch`);
    const artifact = artifactById.get(audit.artifactId);
    assert(artifact, `${audit.artifactId}: audit does not reference a discovered student-visible artifact`);
    assert.equal(audit.artifactType, artifact.type, `${audit.artifactId}: audited artifact type mismatch`);
    assert.equal(audit.artifactSha256, artifact.sha256, `${audit.artifactId}: audited artifact hash mismatch`);
    assert(!auditByArtifact.has(audit.artifactId), `${audit.artifactId}: multiple accepted final audits`);
    auditByArtifact.set(audit.artifactId, audit);
  }
  assert.equal(auditByArtifact.size, required.length, "not every student-visible artifact has one accepted final audit");

  const orderedRanges = [...ranges].sort(
    (a, b) => a.startByte - b.startByte || a.endByte - b.endByte || a.artifactId.localeCompare(b.artifactId, "en"),
  );
  assert(orderedRanges.length > 0, "student-visible corpus has no coverage ranges");
  const coveredArtifacts = new Set();
  let nextByte = 0;
  for (const range of orderedRanges) {
    await validateRecord("corpusRange", range);
    assert.equal(range.startByte, nextByte, `corpus gap or overlap at byte ${nextByte}`);
    assert(range.endByte <= corpus.length, `${range.artifactId}: corpus range exceeds corpus length`);
    const bytes = corpus.subarray(range.startByte, range.endByte);
    assert(Buffer.from(bytes.toString("utf8"), "utf8").equals(bytes), `${range.artifactId}: range splits UTF-8 text`);
    const artifact = artifactById.get(range.artifactId);
    assert(artifact, `${range.artifactId}: corpus range references an unknown artifact`);
    const audit = auditByArtifact.get(range.artifactId);
    assert.equal(range.artifactSha256, artifact.sha256, `${range.artifactId}: corpus artifact hash mismatch`);
    assert.equal(range.auditRecordSha256, audit.auditRecordSha256, `${range.artifactId}: corpus audit hash mismatch`);
    coveredArtifacts.add(range.artifactId);
    nextByte = range.endByte;
  }
  assert.equal(nextByte, corpus.length, `corpus coverage ends at ${nextByte}, expected ${corpus.length}`);
  assert.equal(coveredArtifacts.size, required.length, "not every student-visible artifact has corpus coverage");

  return {
    artifacts: required.length,
    acceptedAudits: auditByArtifact.size,
    corpusBytes: corpus.length,
    corpusRanges: orderedRanges.length,
    corpusSha256: sha256(corpus),
  };
}

async function verifyPackageEvidence(repoRoot) {
  const actual = await verifyPackage();
  const recorded = await readJson(repoRoot, "tools/cap8-r4/evidence/package-r4/verification.json");
  assert.deepEqual(recorded, actual, "recorded package verification does not match current package");

  const baseline = await readJson(repoRoot, "tools/cap8-r4/evidence/baseline.json");
  const state = await readJson(repoRoot, "tools/cap8-r4/execution-state.json");
  assert.equal(baseline.schemaVersion, "cap8-r4-baseline-evidence-v1");
  assert.equal(baseline.r4Branch, state.branch, "baseline and execution-state branch mismatch");
  assert.equal(baseline.originMain, state.startingCommit, "baseline commit mismatch");
  assert.equal(state.packageSha256, actual.zip.sha256, "execution-state package hash mismatch");
  assert.equal(baseline.releaseFreeze.mainUnchangedUntilGlobalGate, true, "main release freeze missing");
  assert.equal(baseline.releaseFreeze.publicSiteUnchangedUntilGlobalGate, true, "public-site release freeze missing");
  return { packageSha256: actual.zip.sha256, payloadCount: actual.manifest.payloadCount };
}

async function verifySourceEvidence() {
  const official = await verifyOfficialSources();
  const curriculum = await verifyCurriculumSources();
  return { official, curriculum };
}

async function verifyInventoryEvidence(repoRoot) {
  const recorded = await readJson(repoRoot, "tools/cap8-r4/evidence/migration/current-site-inventory.json");
  const current = await inventoryCurrentSite();
  assert.deepEqual(recorded, current, "current-site inventory evidence is stale or modified");
  return { records: current.records.length, counts: current.counts };
}

async function listFiles(root) {
  const files = [];
  for (const entry of (await readdir(root, { withFileTypes: true })).sort((a, b) =>
    a.name.localeCompare(b.name, "en"),
  )) {
    const absolute = path.join(root, entry.name);
    assert(!entry.isSymbolicLink(), `symlink is forbidden during R4 runtime discovery: ${absolute}`);
    if (entry.isDirectory()) files.push(...(await listFiles(absolute)));
    else if (entry.isFile()) files.push(absolute);
  }
  return files;
}

export async function verifyR4GovernanceAndLegacyIsolation(repoRoot = REPO_ROOT) {
  const [agentsBytes, contractBytes, publishRuleBytes, mathRuleBytes, state, floor] = await Promise.all([
    readRepositoryFile(repoRoot, "AGENTS.md"),
    readRepositoryFile(repoRoot, "PROJECT_EXECUTION_CONTRACT.md"),
    readRepositoryFile(repoRoot, ".cursor/rules/publish-after-update.mdc"),
    readRepositoryFile(repoRoot, ".cursor/rules/math-content-standard.mdc"),
    readJson(repoRoot, "tools/cap8-r4/execution-state.json"),
    productionFloor(),
  ]);
  const [agents, contract, publishRule, mathRule] = [agentsBytes, contractBytes, publishRuleBytes, mathRuleBytes].map(
    (value) => value.toString("utf8"),
  );
  assert.equal(state.taskId, "CAP8-R4-ONE-SHOT");
  assert.equal(state.mainFrozen, true, "main must remain frozen before the complete R4 release gate");
  assert.equal(state.publicSiteFrozen, true, "the public site must remain frozen before the complete R4 release gate");
  assert.match(agents, /active R4 package supersedes isolated-task/);
  assert.match(contract, /CAP R4 one-shot supersession/);
  assert.match(publishRule, /mainFrozen/);
  assert.match(publishRule, /push checkpoints only to `codex\/cap-eight-subject-one-shot-r4`/);
  assert.match(mathRule, /active R4 one-shot task/);

  const forbiddenRuntimeMarkers = ["shared/text-only-policy.js", "TEXT_ONLY_POLICY", "verify-no-student-images"];
  const scanned = [];
  for (const subject of SUBJECTS) {
    const r4Root = path.join(repoRoot, floor[subject].folder, "r4");
    try {
      if (!(await stat(r4Root)).isDirectory()) continue;
    } catch (error) {
      if (error?.code === "ENOENT") continue;
      throw error;
    }
    for (const file of await listFiles(r4Root)) {
      if (!/\.(?:css|html|js|json|md|mjs)$/i.test(file)) continue;
      const text = await readFile(file, "utf8");
      for (const marker of forbiddenRuntimeMarkers) {
        assert(!text.includes(marker), `${path.relative(repoRoot, file)} imports obsolete student text-only policy marker ${marker}`);
      }
      scanned.push(path.relative(repoRoot, file).replaceAll("\\", "/"));
    }
  }
  return { taskId: state.taskId, mainFrozen: true, publicSiteFrozen: true, scannedR4Files: scanned.length };
}

export function runMathV2ReleaseGate(repoRoot = REPO_ROOT) {
  const script = path.join(repoRoot, "數學會考作戰室", "tools", "run-v2-full-release-gate.mjs");
  const result = spawnSync(process.execPath, [script], {
    cwd: repoRoot,
    encoding: "utf8",
    windowsHide: true,
    maxBuffer: 64 * 1024 * 1024,
    timeout: 10 * 60 * 1000,
  });
  assert(!result.error, `Math V2 full release gate could not run: ${result.error?.code || "unknown error"}`);
  assert.equal(result.status, 0, `Math V2 full release gate failed with exit code ${result.status ?? -1}`);
  const summary = result.stdout
    .trim()
    .split(/\r?\n/)
    .reverse()
    .map((line) => {
      try {
        return JSON.parse(line);
      } catch {
        return null;
      }
    })
    .find((value) => value?.policyHash && value?.inventory);
  assert(summary, "Math V2 full release gate emitted no machine-readable summary");
  assert.equal(summary.activeMechanicalFindings, 0);
  assert.equal(summary.unresolvedTargetedFindings, 0);
  assert.equal(summary.reachability?.uniquelyReachable, true);
  return summary;
}

async function loadFinalEvidence(repoRoot, evidencePaths) {
  const audits = records(await readJson(repoRoot, evidencePaths.audits), "final audits");
  const ranges = records(await readJson(repoRoot, evidencePaths.ranges), "corpus ranges");
  const corpus = await readRepositoryFile(repoRoot, evidencePaths.corpus);
  return { audits, ranges, corpus };
}

function stableError(error, repoRoot) {
  return String(error?.message || error)
    .replaceAll(repoRoot, ".")
    .replaceAll("\\", "/")
    .replaceAll("\r", "");
}

async function checked(id, action, repoRoot) {
  try {
    return { id, status: "PASS", summary: (await action()) ?? null };
  } catch (error) {
    return { id, status: "FAIL", error: stableError(error, repoRoot) };
  }
}

export async function runFullReleaseGate({
  repoRoot = REPO_ROOT,
  evidencePaths = DEFAULT_FINAL_EVIDENCE_PATHS,
  expectedSubjects = SUBJECTS,
  dependencies = {},
} = {}) {
  const use = {
    verifyPackageEvidence,
    verifySourceEvidence,
    verifyInventoryEvidence,
    verifyR4GovernanceAndLegacyIsolation,
    verifyUserRequirements,
    verifyAppendixEvidence,
    verifyAuthorityNodeReview,
    verifyEnglishVocabularyAuthority,
    verifyPublisherReferenceEvidence,
    verifyPublisherPublicResourceEvidence,
    verifyChineseReferenceFoundation,
    verifyAuthorityGraphEvidence,
    verifyOfficialLedgerEvidence,
    verifyOfficialExtractionEvidence,
    verifyOfficialItemCandidateEvidence,
    verifyOfficialReviewShardEvidence,
    productionFloor,
    scopeLocks,
    discoverSubjectArtifacts,
    discoverMathAuditArtifacts,
    loadFinalEvidence,
    verifyExternalFinalEvidence,
    runMathV2ReleaseGate,
    ...dependencies,
  };
  const checks = [];
  let subjectResult;
  let mathAuditResult;

  checks.push(await checked("package-and-baseline-evidence", () => use.verifyPackageEvidence(repoRoot), repoRoot));
  checks.push(await checked("official-source-evidence", () => use.verifySourceEvidence(repoRoot), repoRoot));
  checks.push(await checked("official-page-and-archive-extractions", () => use.verifyOfficialExtractionEvidence(repoRoot), repoRoot));
  checks.push(await checked("official-item-locator-candidates", () => use.verifyOfficialItemCandidateEvidence(repoRoot), repoRoot));
  checks.push(await checked("completed-official-review-shards", () => use.verifyOfficialReviewShardEvidence(repoRoot), repoRoot));
  checks.push(await checked("user-authority-and-final-audit-requirements", () => use.verifyUserRequirements(repoRoot), repoRoot));
  checks.push(await checked("official-curriculum-appendix-evidence", () => use.verifyAppendixEvidence(repoRoot), repoRoot));
  checks.push(await checked("reviewed-fourth-stage-authority-nodes", () => use.verifyAuthorityNodeReview(repoRoot), repoRoot));
  checks.push(await checked("official-english-vocabulary-authority", () => use.verifyEnglishVocabularyAuthority(repoRoot), repoRoot));
  checks.push(await checked("publisher-reference-catalog", () => use.verifyPublisherReferenceEvidence(repoRoot), repoRoot));
  checks.push(await checked("publisher-public-resource-review", () => use.verifyPublisherPublicResourceEvidence(repoRoot), repoRoot));
  checks.push(await checked("chinese-reference-foundation", () => use.verifyChineseReferenceFoundation(repoRoot), repoRoot));
  checks.push(await checked("frozen-authority-graph", () => use.verifyAuthorityGraphEvidence(repoRoot), repoRoot));
  checks.push(await checked("complete-official-106-115-ledger", () => use.verifyOfficialLedgerEvidence(repoRoot), repoRoot));
  checks.push(await checked("current-site-inventory", () => use.verifyInventoryEvidence(repoRoot), repoRoot));
  checks.push(
    await checked(
      "r4-governance-and-legacy-isolation",
      () => use.verifyR4GovernanceAndLegacyIsolation(repoRoot),
      repoRoot,
    ),
  );
  checks.push(
    await checked(
      "math-final-audit-inventory",
      async () => {
        mathAuditResult = await use.discoverMathAuditArtifacts(repoRoot);
        return {
          artifacts: mathAuditResult.artifacts.length,
          counts: mathAuditResult.counts,
          contentVersion: mathAuditResult.contentVersion,
        };
      },
      repoRoot,
    ),
  );
  checks.push(
    await checked(
      "subject-artifacts",
      async () => {
        const [floor, locks] = await Promise.all([use.productionFloor(), use.scopeLocks()]);
        subjectResult = await use.discoverSubjectArtifacts({ repoRoot, floor, locks, expectedSubjects });
        return {
          artifacts: subjectResult.artifacts.length,
          subjects: subjectResult.subjects.map(({ subject, manifestPath, contentVersion, counts }) => ({
            subject,
            manifestPath,
            contentVersion,
            counts,
          })),
        };
      },
      repoRoot,
    ),
  );
  checks.push(
    await checked(
      "external-final-audit-and-corpus",
      async () => {
        assert(subjectResult, "subject artifacts are unavailable; external audit acceptance cannot be inferred");
        assert(mathAuditResult, "Math artifacts are unavailable; final Math audit cannot be inferred");
        const evidence = await use.loadFinalEvidence(repoRoot, evidencePaths);
        return use.verifyExternalFinalEvidence({ artifacts: [...mathAuditResult.artifacts, ...subjectResult.artifacts], ...evidence });
      },
      repoRoot,
    ),
  );
  checks.push(await checked("math-v2-full-release-gate", () => use.runMathV2ReleaseGate(repoRoot), repoRoot));

  const releaseAllowed = checks.every((check) => check.status === "PASS");
  return {
    schemaVersion: "cap8-r4-full-release-gate-v1",
    status: releaseAllowed ? "PASS" : "FAIL",
    releaseAllowed,
    checks,
  };
}

export function serializeReleaseGateReport(report) {
  return `${canonicalJson(report)}\n`;
}

function parseArgs(args) {
  const parsed = { evidencePaths: { ...DEFAULT_FINAL_EVIDENCE_PATHS }, output: null };
  const options = {
    "--final-audits": "audits",
    "--corpus": "corpus",
    "--corpus-ranges": "ranges",
  };
  for (let index = 0; index < args.length; index += 2) {
    const option = args[index];
    const value = args[index + 1];
    assert(value, `${option || "argument"} requires a path`);
    if (option === "--output") parsed.output = value;
    else if (options[option]) parsed.evidencePaths[options[option]] = value.replaceAll("\\", "/");
    else throw new Error(`unknown option: ${option}`);
  }
  return parsed;
}

async function main() {
  let parsed;
  let report;
  try {
    parsed = parseArgs(process.argv.slice(2));
    report = await runFullReleaseGate({ evidencePaths: parsed.evidencePaths });
  } catch (error) {
    report = {
      schemaVersion: "cap8-r4-full-release-gate-v1",
      status: "FAIL",
      releaseAllowed: false,
      checks: [{ id: "coordinator", status: "FAIL", error: stableError(error, REPO_ROOT) }],
    };
  }
  const output = serializeReleaseGateReport(report);
  process.stdout.write(output);
  if (parsed?.output) await writeFile(path.resolve(process.cwd(), parsed.output), output, "utf8");
  if (!report.releaseAllowed) process.exitCode = 1;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
