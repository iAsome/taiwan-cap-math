import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { canonicalJson, sha256 } from "../r4-core.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..", "..");
const REGISTER_PATH = path.join(HERE, "..", "evidence", "curriculum", "curriculum-source-register.json");
const GRAPH_PATH = path.join(HERE, "authority-graph.json");
const HASH = /^[a-f0-9]{64}$/;
const CODE_FRAGMENT = String.raw`(?:[1-9]|[A-Za-z]{1,3}|[社歷地公](?:[1-3][a-z]|[A-Z][a-z]?))-Ⅳ-\d+`;
const FOURTH_STAGE_CODE = new RegExp(`(?<![A-Za-z])${CODE_FRAGMENT}`, "g");
const CODE_AT_START = new RegExp(`^(?<marker>[*◎\\s]*)(?<code>${CODE_FRAGMENT})(?<tail>.*)$`);
const ANY_STAGE_CODE = /(?:[1-9]|[A-Za-z]{1,3}|[社歷地公](?:[1-3][a-z]|[A-Z][a-z]?))-[ⅠⅡⅢⅣⅤⅥ]+-\d+/;
const EXPECTED_COUNTS = Object.freeze({ chinese: 61, english: 116, social: 246, natural: 246 });

function compareText(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

function clean(value) {
  return value.replace(/\s+/g, " ").trim();
}

function preferredDefinitionStart(lines, domain) {
  const heading = domain === "social"
    ? "附錄三：學習內容說明"
    : domain === "natural"
      ? "附錄四：學習內容說明"
      : null;
  if (!heading) return 0;
  for (let index = lines.length - 1; index >= 0; index -= 1) {
    if (clean(lines[index]) === heading) return index + 1;
  }
  throw new Error(`${domain}: learning-content appendix heading missing`);
}

function parseCodeLine(line) {
  const match = clean(line).match(CODE_AT_START);
  if (!match) return null;
  return {
    marker: match.groups.marker.trim(),
    code: match.groups.code,
    text: clean(match.groups.tail),
  };
}

function codeKind(code) {
  return /^\d|^[社歷地公]\d|^[a-z]/.test(code) ? "learning-performance" : "learning-content";
}

function subjectsFor(domain, code) {
  if (domain === "chinese" || domain === "english") return [domain];
  if (domain === "social") {
    if (code.startsWith("歷")) return ["history"];
    if (code.startsWith("地")) return ["geography"];
    if (code.startsWith("公")) return ["civics"];
    return ["geography", "history", "civics", "integrated_social"];
  }
  return ["biology", "physics_chemistry", "earth_science", "integrated_natural"];
}

function asciiCode(code) {
  return code
    .replace(/^社/, "SOC-")
    .replace(/^歷/, "HIS-")
    .replace(/^地/, "GEO-")
    .replace(/^公/, "CIV-")
    .replaceAll("Ⅳ", "4")
    .toUpperCase();
}

export function parseFourthStageNodes(text, { domain, sourceId, expectedCount = EXPECTED_COUNTS[domain] }) {
  assert(Object.hasOwn(EXPECTED_COUNTS, domain), `unsupported curriculum domain: ${domain}`);
  const lines = text.normalize("NFC").split(/\r?\n/);
  const preferredStart = preferredDefinitionStart(lines, domain);
  const occurrences = new Map();
  for (let index = 0; index < lines.length; index += 1) {
    for (const match of lines[index].matchAll(FOURTH_STAGE_CODE)) {
      const values = occurrences.get(match[0]) ?? [];
      values.push(index + 1);
      occurrences.set(match[0], values);
    }
  }

  const definitionCandidates = new Map();
  const recordDefinition = (entry) => {
    const candidates = definitionCandidates.get(entry.code) ?? [];
    candidates.push(entry);
    definitionCandidates.set(entry.code, candidates);
  };
  for (let index = 0; index < lines.length; index += 1) {
    const parsed = parseCodeLine(lines[index]);
    if (!parsed) continue;
    if (parsed.text) {
      assert(!ANY_STAGE_CODE.test(parsed.text), `${sourceId}:${index + 1}: multiple curriculum codes on one definition line`);
      recordDefinition({ ...parsed, sourceLine: index + 1 });
      continue;
    }

    const block = [];
    let cursor = index;
    while (cursor < lines.length) {
      const entry = parseCodeLine(lines[cursor]);
      if (!entry || entry.text) break;
      block.push({ ...entry, sourceLine: cursor + 1 });
      cursor += 1;
    }
    const definitions = [];
    while (cursor < lines.length && definitions.length < block.length) {
      const value = clean(lines[cursor]);
      if (value) {
        assert(!ANY_STAGE_CODE.test(value), `${sourceId}:${cursor + 1}: missing definition for grouped code block`);
        definitions.push({ text: value, sourceLine: cursor + 1 });
      }
      cursor += 1;
    }
    assert.equal(definitions.length, block.length, `${sourceId}:${index + 1}: incomplete grouped code block`);
    for (let offset = 0; offset < block.length; offset += 1) {
      const entry = block[offset];
      recordDefinition({
        ...entry,
        text: definitions[offset].text,
        definitionLine: definitions[offset].sourceLine,
      });
    }
    index = cursor - 1;
  }

  const definitions = new Map(
    [...definitionCandidates].map(([code, candidates]) => [
      code,
      candidates.find((entry) => entry.sourceLine > preferredStart) ?? candidates[0],
    ]),
  );

  assert.deepEqual(
    [...definitions.keys()].sort(compareText),
    [...occurrences.keys()].sort(compareText),
    `${sourceId}: not every fourth-stage code has a definition`,
  );
  if (expectedCount !== null) assert.equal(definitions.size, expectedCount, `${sourceId}: unexpected fourth-stage code count`);

  return [...definitions]
    .map(([code, entry]) => ({
      id: `AUTH-${domain.toUpperCase()}-${codeKind(code) === "learning-performance" ? "LP" : "LC"}-${asciiCode(code)}`,
      domain,
      subjects: subjectsFor(domain, code),
      kind: codeKind(code),
      code,
      text: entry.text,
      rawMarker: entry.marker,
      sourceId,
      sourceLine: entry.sourceLine,
      definitionLine: entry.definitionLine ?? entry.sourceLine,
      sourceLines: occurrences.get(code),
      reviewStatus: "machine-extracted-unreviewed",
    }))
    .sort((a, b) => compareText(a.id, b.id));
}

export async function loadCurriculumSourceSnapshot(registerPath = REGISTER_PATH) {
  const bytes = await readFile(registerPath);
  const register = JSON.parse(bytes.toString("utf8"));
  assert.equal(register.schemaVersion, "cap8-r4-curriculum-source-register-v1");
  assert.equal(register.documents.length, 4);
  return Object.freeze({ register, sha256: sha256(bytes) });
}

function sourceFor(document) {
  const domain = document.id.replace("NAER-CURRICULUM-", "").toLowerCase();
  return {
    id: document.id,
    domain,
    subjects: document.subjects,
    url: document.url,
    pdfSha256: document.sha256,
    odtUrl: document.odtUrl,
    odtSha256: document.odtSha256,
    extractedTextPath: document.extractedTextPath,
    extractedTextSha256: document.extractedTextSha256,
  };
}

export async function buildExtractedAuthorityGraph(snapshot, repoRoot = REPO_ROOT) {
  const sources = snapshot.register.documents.map(sourceFor).sort((a, b) => compareText(a.id, b.id));
  const nodes = [];
  for (const source of sources) {
    const absolute = path.join(repoRoot, ...source.extractedTextPath.split("/"));
    const bytes = await readFile(absolute);
    assert.equal(sha256(bytes), source.extractedTextSha256, `${source.id}: extracted text hash mismatch`);
    nodes.push(...parseFourthStageNodes(bytes.toString("utf8"), { domain: source.domain, sourceId: source.id }));
  }
  assert.equal(new Set(nodes.map((node) => node.id)).size, nodes.length, "duplicate authority node ID");
  return {
    schemaVersion: "cap8-r4-authority-graph-v1",
    status: "scope-extracted-unreviewed",
    curriculumRegisterSha256: snapshot.sha256,
    sources,
    nodes: nodes.sort((a, b) => compareText(a.id, b.id)),
    skills: [],
    exclusions: [],
  };
}

export function authorityGraphSha256(graph) {
  return sha256(canonicalJson(graph));
}

export async function validateAuthorityGraph(graph, snapshot, { repoRoot = REPO_ROOT, requireFrozen = false } = {}) {
  assert.equal(graph.schemaVersion, "cap8-r4-authority-graph-v1");
  assert.equal(graph.curriculumRegisterSha256, snapshot.sha256, "curriculum source register hash mismatch");
  for (const key of ["sources", "nodes", "skills", "exclusions"]) assert(Array.isArray(graph[key]), `${key} must be an array`);
  assert(graph.nodes.length > 0, "authority graph cannot be empty");
  assert.equal(new Set(graph.nodes.map((node) => node.id)).size, graph.nodes.length, "duplicate authority node ID");
  assert.equal(new Set(graph.nodes.map((node) => `${node.sourceId}\0${node.code}`)).size, graph.nodes.length, "duplicate authority code");
  for (const node of graph.nodes) {
    assert(node.text && !node.text.includes("�"), `${node.id}: invalid authority text`);
    assert(node.code.includes("-Ⅳ-"), `${node.id}: non-fourth-stage code`);
    assert(Number.isInteger(node.sourceLine) && node.sourceLine > 0, `${node.id}: source line missing`);
    assert(node.sourceLines.includes(node.sourceLine), `${node.id}: primary source line is not recorded`);
  }

  if (!requireFrozen) {
    assert.equal(graph.status, "scope-extracted-unreviewed");
    assert.equal(graph.skills.length, 0, "unreviewed scope extraction must not claim production skill mappings");
    assert(graph.nodes.every((node) => node.reviewStatus === "machine-extracted-unreviewed"));
    const rebuilt = await buildExtractedAuthorityGraph(snapshot, repoRoot);
    assert.deepEqual(graph, rebuilt, "checked-in authority extraction is stale or manually altered");
  } else {
    assert.equal(graph.status, "frozen-reviewed", "authority graph is not frozen and semantically reviewed");
    assert(graph.nodes.every((node) => node.reviewStatus === "accepted"), "unreviewed authority node remains");
    assert(graph.skills.length > 0, "frozen authority graph has no skills");
    const authorityIds = new Set(graph.nodes.map((node) => node.id));
    const skillIds = new Set(graph.skills.map((skill) => skill.id));
    const linked = new Set();
    for (const skill of graph.skills) {
      assert(skill.authorityRefs.length, `${skill.id}: no authority references`);
      for (const id of skill.authorityRefs) {
        assert(authorityIds.has(id), `${skill.id}: unknown authority ${id}`);
        linked.add(id);
      }
      for (const id of skill.prerequisites) assert(skillIds.has(id), `${skill.id}: unknown prerequisite ${id}`);
    }
    for (const node of graph.nodes) assert(linked.has(node.id), `${node.id}: orphan authority node`);
  }
  return {
    sha256: authorityGraphSha256(graph),
    sources: graph.sources.length,
    nodes: graph.nodes.length,
    skills: graph.skills.length,
    status: graph.status,
  };
}

async function main() {
  const snapshot = await loadCurriculumSourceSnapshot();
  const graph = await buildExtractedAuthorityGraph(snapshot);
  await validateAuthorityGraph(graph, snapshot);
  await writeFile(GRAPH_PATH, `${JSON.stringify(graph, null, 2)}\n`, "utf8");
  console.log(`authority-graph: OK - ${graph.nodes.length} extracted nodes, semantic review pending`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
