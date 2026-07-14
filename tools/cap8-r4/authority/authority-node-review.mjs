import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { canonicalJson, sha256 } from "../r4-core.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const GRAPH_PATH = path.join(HERE, "authority-graph.json");
const APPENDIX_PATH = path.join(HERE, "appendix-evidence.json");
const OFFICIAL_REGISTER_PATH = path.join(HERE, "..", "evidence", "official", "official-source-register.json");
const OUTPUT_PATH = path.join(HERE, "authority-node-review.json");
const CSV_PATH = path.join(HERE, "..", "ledger", "authority-node-ledger.csv");
const REVIEW_DATE = "2026-07-14";

const CAP_REFS = Object.freeze({
  chinese: Object.freeze(["CAP-STRUCTURE", "CAP-CHINESE", "CAP-WRITING"]),
  english: Object.freeze(["CAP-STRUCTURE", "CAP-ENGLISH"]),
  social: Object.freeze(["CAP-STRUCTURE", "CAP-SOCIAL"]),
  natural: Object.freeze(["CAP-STRUCTURE", "CAP-NATURAL"]),
});

const MARKERS = new Set(["", "*", "◎", "*◎"]);

function compareText(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

function markerFlags(marker) {
  assert(MARKERS.has(marker), `unsupported curriculum marker: ${marker}`);
  return {
    higherOrderAdaptive: marker.includes("*"),
    repeatedAcrossStages: marker.includes("◎"),
  };
}

function reviewedSubjects(node, appendixMapping) {
  if (node.domain === "chinese" || node.domain === "english") return [node.domain];
  if (node.domain === "social") {
    if (node.code.startsWith("歷")) return ["history", "integrated_social"];
    if (node.code.startsWith("地")) return ["geography", "integrated_social"];
    if (node.code.startsWith("公")) return ["civics", "integrated_social"];
    return ["civics", "geography", "history", "integrated_social"];
  }
  if (node.kind === "learning-performance") {
    return ["biology", "earth_science", "integrated_natural", "physics_chemistry"];
  }
  const subjects = new Set(appendixMapping.subjects);
  if (node.code.startsWith("INc-")) subjects.add("biology");
  if (node.code.startsWith("INa-")) subjects.add("physics_chemistry");
  if (node.code.startsWith("INg-")) subjects.add("earth_science");
  return [...subjects].sort(compareText);
}

function assessmentRole(node) {
  const prefix = node.code.split("-")[0];
  if (node.domain === "chinese") {
    if (node.kind === "learning-content") return "chinese-choice-and-writing";
    if (["4", "5"].includes(prefix)) return "direct-chinese-choice";
    if (prefix === "6") return "direct-chinese-writing";
    return "curriculum-required-not-separately-scored";
  }
  if (node.domain === "english") {
    if (node.kind === "learning-content") {
      if (prefix === "Ab") return "direct-english-listening-choice";
      if (["Ac", "Ad", "Ae", "B", "D"].includes(prefix)) return "english-reading-and-listening-choice";
      return "embedded-in-english-reading-listening";
    }
    if (prefix === "1") return "direct-english-listening-choice";
    if (prefix === "3") return "direct-english-reading-choice";
    if (["2", "4", "6"].includes(prefix)) return "curriculum-required-not-separately-scored";
    return "embedded-in-english-reading-listening";
  }
  if (node.domain === "social") {
    return node.kind === "learning-content" ? "direct-integrated-social-choice" : "embedded-in-integrated-social-choice";
  }
  return node.kind === "learning-content" ? "direct-integrated-natural-choice" : "embedded-in-integrated-natural-choice";
}

function countBy(values, keyOf) {
  const counts = {};
  for (const value of values) {
    const key = keyOf(value);
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return Object.fromEntries(Object.entries(counts).sort(([a], [b]) => compareText(a, b)));
}

function csvCell(value) {
  const text = String(value ?? "");
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

export function serializeAuthorityNodeLedger(review) {
  const columns = [
    "authority_id",
    "source_id",
    "subject",
    "official_code",
    "raw_text",
    "normalized_requirement",
    "status",
    "mapped_skill_ids",
    "mapped_lecture_ids",
    "mapped_question_ids",
    "final_audit_record_id",
    "notes",
  ];
  const lines = [columns.join(",")];
  for (const node of review.nodes) {
    lines.push([
      node.authorityId,
      node.sourceId,
      node.reviewedSubjects.join("|"),
      node.code,
      node.officialText,
      node.officialText,
      node.mappingStatus,
      "",
      "",
      "",
      "",
      [
        `assessmentRole=${node.assessmentRole}`,
        `marker=${node.marker || "none"}`,
        `appendix=${node.appendixBlockIds.join("|") || "none"}`,
        `limits=${node.scopeLimitRefs.join("|") || "none"}`,
      ].join(";"),
    ].map(csvCell).join(","));
  }
  return `${lines.join("\n")}\n`;
}

export async function buildAuthorityNodeReview({
  graphPath = GRAPH_PATH,
  appendixPath = APPENDIX_PATH,
  officialRegisterPath = OFFICIAL_REGISTER_PATH,
} = {}) {
  const [graphBytes, appendixBytes, registerBytes] = await Promise.all([
    readFile(graphPath),
    readFile(appendixPath),
    readFile(officialRegisterPath),
  ]);
  const graph = JSON.parse(graphBytes.toString("utf8"));
  const appendix = JSON.parse(appendixBytes.toString("utf8"));
  const register = JSON.parse(registerBytes.toString("utf8"));
  assert.equal(graph.schemaVersion, "cap8-r4-authority-graph-v1");
  assert.equal(graph.status, "scope-extracted-unreviewed");
  assert.equal(graph.nodes.length, 669);
  assert.equal(appendix.schemaVersion, "cap8-r4-curriculum-appendix-evidence-v1");
  assert.equal(appendix.nodes.length, 436);
  assert.equal(register.schemaVersion, "cap8-r4-official-source-register-v1");

  const appendixByAuthority = new Map(appendix.nodes.map((entry) => [entry.authorityId, entry]));
  const limitsByBlock = new Map();
  for (const entry of appendix.scopeLimitLines) {
    const refs = limitsByBlock.get(entry.blockId) ?? [];
    refs.push(`${entry.sourceId}:${entry.line}`);
    limitsByBlock.set(entry.blockId, refs);
  }
  const pageById = new Map(register.pages.map((entry) => [entry.id, entry]));
  const requiredPageIds = [...new Set(Object.values(CAP_REFS).flat())].sort(compareText);
  const capSpecifications = requiredPageIds.map((id) => {
    const page = pageById.get(id);
    assert(page, `official CAP page missing: ${id}`);
    return { id, url: page.url, repositoryPath: page.repositoryPath, sha256: page.sha256 };
  });

  const nodes = graph.nodes.map((node) => {
    assert(node.code.includes("-Ⅳ-"), `${node.id}: not a fourth-stage code`);
    const appendixMapping = appendixByAuthority.get(node.id);
    if (["social", "natural"].includes(node.domain) && node.kind === "learning-content") {
      assert(appendixMapping, `${node.id}: appendix mapping missing`);
    } else {
      assert(!appendixMapping, `${node.id}: unexpected appendix mapping`);
    }
    const appendixBlockIds = appendixMapping?.blockIds ?? [];
    return {
      authorityId: node.id,
      sourceId: node.sourceId,
      sourceLine: node.sourceLine,
      definitionLine: node.definitionLine,
      domain: node.domain,
      kind: node.kind,
      code: node.code,
      officialText: node.text,
      marker: node.rawMarker,
      markerFlags: markerFlags(node.rawMarker),
      reviewedSubjects: reviewedSubjects(node, appendixMapping),
      capSpecificationIds: CAP_REFS[node.domain],
      assessmentRole: assessmentRole(node),
      appendixBlockIds,
      scopeLimitRefs: [...new Set(appendixBlockIds.flatMap((id) => limitsByBlock.get(id) ?? []))].sort(compareText),
      scopeDecision: "required-fourth-stage",
      mappingStatus: "scope-reviewed-required-unmapped",
    };
  });

  return {
    schemaVersion: "cap8-r4-authority-node-review-v1",
    status: "scope-reviewed-authority-unmapped",
    reviewedAt: REVIEW_DATE,
    reviewerRole: "Codex authority-scope semantic reviewer under ChatGPT-owned policy",
    finalAuditCredit: false,
    authorityGraphSha256: sha256(canonicalJson(graph)),
    appendixEvidenceSha256: sha256(canonicalJson(appendix)),
    officialSourceRegisterSha256: sha256(registerBytes),
    decisions: {
      allFourthStageNodesRequired: true,
      publisherOrCramSchoolMayExpandScope: false,
      starMeansHigherOrderAdaptiveDepthNotExclusion: true,
      doubleCircleMeansRepeatedAcrossStagesNotExclusion: true,
      curriculumLearningAndSeparatelyScoredCapModesAreDistinct: true,
      skillMappingRequiredBeforeAuthorityFreeze: true,
    },
    capSpecifications,
    counts: {
      nodes: nodes.length,
      byDomain: countBy(nodes, (node) => node.domain),
      byKind: countBy(nodes, (node) => node.kind),
      byMarker: countBy(nodes, (node) => node.marker || "none"),
      byAssessmentRole: countBy(nodes, (node) => node.assessmentRole),
      byReviewedSubject: countBy(nodes.flatMap((node) => node.reviewedSubjects), (subject) => subject),
      withAppendixEvidence: nodes.filter((node) => node.appendixBlockIds.length).length,
      withScopeLimitEvidence: nodes.filter((node) => node.scopeLimitRefs.length).length,
      mappedSkills: 0,
      exclusions: 0,
    },
    nodes,
  };
}

export async function validateAuthorityNodeReview(
  review,
  { graphPath = GRAPH_PATH, appendixPath = APPENDIX_PATH, officialRegisterPath = OFFICIAL_REGISTER_PATH } = {},
) {
  const expected = await buildAuthorityNodeReview({ graphPath, appendixPath, officialRegisterPath });
  assert.deepEqual(review, expected, "checked-in authority-node review is stale or manually altered");
  assert.equal(review.status, "scope-reviewed-authority-unmapped");
  assert.equal(review.finalAuditCredit, false);
  assert.equal(review.counts.nodes, 669);
  assert.equal(review.counts.withAppendixEvidence, 436);
  assert.equal(review.counts.mappedSkills, 0);
  assert.equal(review.counts.exclusions, 0);
  assert(review.nodes.every((node) => node.scopeDecision === "required-fourth-stage"));
  assert(review.nodes.every((node) => node.mappingStatus === "scope-reviewed-required-unmapped"));
  return review.counts;
}

async function main() {
  const review = await buildAuthorityNodeReview();
  await validateAuthorityNodeReview(review);
  await Promise.all([
    writeFile(OUTPUT_PATH, `${JSON.stringify(review, null, 2)}\n`, "utf8"),
    writeFile(CSV_PATH, serializeAuthorityNodeLedger(review), "utf8"),
  ]);
  console.log(`authority-node-review: OK - ${review.counts.nodes} required nodes reviewed; skill mapping pending`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
