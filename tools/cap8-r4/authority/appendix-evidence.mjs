import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { canonicalJson, sha256 } from "../r4-core.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..", "..");
const GRAPH_PATH = path.join(HERE, "authority-graph.json");
const OUTPUT_PATH = path.join(HERE, "appendix-evidence.json");
const LIMIT_PATTERN = /不涉及|不需要|不必|毋須|無須|不宜|避免|以.+為限|僅(?:止於|比較|以|需|須|介紹|著重)|只(?:需|須|要)|著重|而非|擇要|適度|簡介/u;

const SECTION_SPECS = Object.freeze({
  social: Object.freeze({
    appendixHeading: "附錄三：學習內容說明",
    sections: Object.freeze([
      { id: "social-history", start: "（一）歷史", end: "2.普通型高級中等學校", subjects: ["history", "integrated_social"] },
      { id: "social-geography", start: "（二）地理", end: "2.普通型高級中等學校", subjects: ["geography", "integrated_social"] },
      {
        id: "social-civics",
        start: "（三）公民與社會",
        end: "三、普通型高級中等學校加深加廣選修課程",
        stopBefore: ["普通型高中"],
        subjects: ["civics", "integrated_social"],
      },
    ]),
  }),
  natural: Object.freeze({
    appendixHeading: "附錄四：學習內容說明",
    sections: Object.freeze([
      { id: "natural-biology", start: "（一）國民中學-生物", end: "（二）國民中學-物理", subjects: ["biology", "integrated_natural"] },
      { id: "natural-physics", start: "（二）國民中學-物理", end: "（三）國民中學-化學", subjects: ["physics_chemistry", "integrated_natural"] },
      { id: "natural-chemistry", start: "（三）國民中學-化學", end: "（四）國民中學-地球科學", subjects: ["physics_chemistry", "integrated_natural"] },
      { id: "natural-earth-science", start: "（四）國民中學-地球科學", end: "（五）國民中學跨科主題", subjects: ["earth_science", "integrated_natural"] },
      { id: "natural-cross-disciplinary", start: "（五）國民中學跨科主題", end: "三、高級中學教育階段（第五學習階段）", subjects: ["integrated_natural"] },
    ]),
  }),
});

function compareText(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

function clean(value) {
  return value.replace(/\s+/g, " ").trim();
}

function findExactLine(lines, value, from = 0) {
  const index = lines.findIndex((line, candidate) => candidate >= from && clean(line) === value);
  assert(index >= 0, `appendix heading not found: ${value}`);
  return index;
}

function sectionRanges(lines, spec) {
  let appendixStart = -1;
  for (let index = lines.length - 1; index >= 0; index -= 1) {
    if (clean(lines[index]) === spec.appendixHeading) {
      appendixStart = index;
      break;
    }
  }
  assert(appendixStart >= 0, `appendix heading not found: ${spec.appendixHeading}`);
  return spec.sections.map((section) => {
    const startIndex = findExactLine(lines, section.start, appendixStart + 1);
    const endIndex = findExactLine(lines, section.end, startIndex + 1);
    return { ...section, startIndex, endIndex };
  });
}

function relevantOccurrences(node, ranges) {
  return node.sourceLines
    .map((lineNumber) => lineNumber - 1)
    .filter((index) => ranges.some((range) => index >= range.startIndex && index < range.endIndex));
}

function occurrenceRuns(occurrences) {
  const sorted = [...new Set(occurrences)].sort((a, b) => a - b);
  const runs = [];
  for (const index of sorted) {
    const last = runs.at(-1);
    if (!last || index !== last.at(-1) + 1) runs.push([index]);
    else last.push(index);
  }
  return runs;
}

function blockId(sourceId, startIndex) {
  return `${sourceId}-APPENDIX-BLOCK-${String(startIndex + 1).padStart(5, "0")}`;
}

function firstStopIndex(lines, section, fromIndex, endIndex) {
  if (!section.stopBefore) return endIndex;
  for (let index = fromIndex; index < endIndex; index += 1) {
    if (section.stopBefore.includes(clean(lines[index]))) return index;
  }
  return endIndex;
}

async function sourceData(graph, source) {
  const absolute = path.join(REPO_ROOT, ...source.extractedTextPath.split("/"));
  const bytes = await readFile(absolute);
  assert.equal(sha256(bytes), source.extractedTextSha256, `${source.id}: source text hash mismatch`);
  const lines = bytes.toString("utf8").normalize("NFC").split(/\r?\n/);
  const ranges = sectionRanges(lines, SECTION_SPECS[source.domain]);
  const nodes = graph.nodes.filter((node) => node.sourceId === source.id && node.kind === "learning-content");
  const occurrences = nodes.flatMap((node) => relevantOccurrences(node, ranges));
  const runs = occurrenceRuns(occurrences);
  const nodeByCodeLine = new Map();
  for (const node of nodes) {
    for (const index of relevantOccurrences(node, ranges)) nodeByCodeLine.set(index, node);
  }
  const blocks = runs.map((run, runIndex) => {
    const startIndex = run[0];
    const section = ranges.find((range) => startIndex >= range.startIndex && startIndex < range.endIndex);
    assert(section, `${source.id}:${startIndex + 1}: occurrence outside appendix section`);
    const nextStart = runs[runIndex + 1]?.[0] ?? section.endIndex;
    const candidateEnd = Math.min(nextStart, section.endIndex);
    const endIndex = firstStopIndex(lines, section, run.at(-1) + 1, candidateEnd) - 1;
    const excerptLines = lines.slice(startIndex, endIndex + 1);
    const authorityIds = run.map((index) => nodeByCodeLine.get(index)?.id);
    assert(authorityIds.every(Boolean), `${source.id}:${startIndex + 1}: unmapped appendix code`);
    return {
      id: blockId(source.id, startIndex),
      sourceId: source.id,
      sectionId: section.id,
      subjects: section.subjects,
      startLine: startIndex + 1,
      endLine: endIndex + 1,
      authorityIds,
      excerpt: excerptLines.join("\n").trim(),
      excerptSha256: sha256(Buffer.from(excerptLines.join("\n").trim(), "utf8")),
    };
  });
  const blockByLine = new Map(blocks.flatMap((block) => {
    const indexes = [];
    for (let line = block.startLine; line <= block.endLine; line += 1) indexes.push([line, block.id]);
    return indexes;
  }));
  const mappings = nodes.map((node) => {
    const blockIds = relevantOccurrences(node, ranges).map((index) => blockByLine.get(index + 1));
    assert(blockIds.length > 0, `${node.id}: no fourth-stage appendix evidence`);
    const subjects = [...new Set(blockIds.flatMap((id) => blocks.find((block) => block.id === id).subjects))].sort(compareText);
    return { authorityId: node.id, blockIds, subjects };
  });
  const limitLines = [];
  for (const block of blocks) {
    const blockLines = block.excerpt.split("\n");
    for (let offset = 0; offset < blockLines.length; offset += 1) {
      const text = clean(blockLines[offset]);
      if (LIMIT_PATTERN.test(text)) {
        limitLines.push({
          sourceId: source.id,
          line: block.startLine + offset,
          text,
          context: blockLines
            .slice(Math.max(0, offset - 1), Math.min(blockLines.length, offset + 2))
            .map(clean)
            .filter(Boolean)
            .join(" "),
          blockId: block.id,
        });
      }
    }
  }
  return { blocks, mappings, limitLines };
}

export async function buildAppendixEvidence(graphPath = GRAPH_PATH) {
  const graph = JSON.parse(await readFile(graphPath, "utf8"));
  assert.equal(graph.schemaVersion, "cap8-r4-authority-graph-v1");
  const sources = graph.sources.filter((source) => Object.hasOwn(SECTION_SPECS, source.domain));
  const parts = [];
  for (const source of sources) parts.push(await sourceData(graph, source));
  const blocks = parts.flatMap((part) => part.blocks).sort((a, b) => compareText(a.id, b.id));
  const nodes = parts.flatMap((part) => part.mappings).sort((a, b) => compareText(a.authorityId, b.authorityId));
  const limits = parts.flatMap((part) => part.limitLines).sort((a, b) => compareText(a.sourceId, b.sourceId) || a.line - b.line);
  return {
    schemaVersion: "cap8-r4-curriculum-appendix-evidence-v1",
    status: "appendix-evidence-extracted-unreviewed",
    authorityGraphSha256: sha256(canonicalJson(graph)),
    sources: sources.map(({ id, domain, extractedTextPath, extractedTextSha256 }) => ({ id, domain, extractedTextPath, extractedTextSha256 })),
    counts: {
      blocks: blocks.length,
      nodes: nodes.length,
      scopeLimitLines: limits.length,
    },
    blocks,
    nodes,
    scopeLimitLines: limits,
  };
}

export async function validateAppendixEvidence(index, graphPath = GRAPH_PATH) {
  const expected = await buildAppendixEvidence(graphPath);
  assert.deepEqual(index, expected, "checked-in appendix evidence is stale or manually altered");
  assert.equal(index.status, "appendix-evidence-extracted-unreviewed");
  assert.equal(new Set(index.blocks.map((block) => block.id)).size, index.blocks.length);
  assert.equal(new Set(index.nodes.map((node) => node.authorityId)).size, index.nodes.length);
  const graph = JSON.parse(await readFile(graphPath, "utf8"));
  const expectedIds = graph.nodes
    .filter((node) => ["social", "natural"].includes(node.domain) && node.kind === "learning-content")
    .map((node) => node.id)
    .sort(compareText);
  assert.deepEqual(index.nodes.map((node) => node.authorityId), expectedIds);
  return index.counts;
}

async function main() {
  const index = await buildAppendixEvidence();
  await validateAppendixEvidence(index);
  await writeFile(OUTPUT_PATH, `${JSON.stringify(index, null, 2)}\n`, "utf8");
  console.log(`appendix-evidence: OK - ${index.counts.nodes} nodes, ${index.counts.scopeLimitLines} scope-limit lines; semantic review pending`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
