import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  authorityGraphSha256,
  buildExtractedAuthorityGraph,
  loadCurriculumSourceSnapshot,
  parseFourthStageNodes,
  validateAuthorityGraph,
} from "./authority-graph.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));

test("inline and grouped fourth-stage rows retain exact source lines", () => {
  const text = "第四學習階段\n1-Ⅳ-1直接定義。\n2-Ⅳ-1\n2-Ⅳ-2\n第一個群組定義。\n第二個群組定義。\n";
  assert.deepEqual(
    parseFourthStageNodes(text, { domain: "chinese", sourceId: "FIXTURE", expectedCount: 3 }).map(({ code, text: value, sourceLine, definitionLine }) => ({ code, value, sourceLine, definitionLine })),
    [
      { code: "1-Ⅳ-1", value: "直接定義。", sourceLine: 2, definitionLine: 2 },
      { code: "2-Ⅳ-1", value: "第一個群組定義。", sourceLine: 3, definitionLine: 5 },
      { code: "2-Ⅳ-2", value: "第二個群組定義。", sourceLine: 4, definitionLine: 6 },
    ],
  );
});

test("checked-in graph is a deterministic unreviewed extraction", async () => {
  const snapshot = await loadCurriculumSourceSnapshot();
  const expected = await buildExtractedAuthorityGraph(snapshot);
  const actual = JSON.parse(await readFile(path.join(HERE, "authority-graph.json"), "utf8"));
  assert.deepEqual(actual, expected);
  const result = await validateAuthorityGraph(actual, snapshot);
  assert.deepEqual(
    { sources: result.sources, nodes: result.nodes, skills: result.skills, status: result.status },
    { sources: 4, nodes: 669, skills: 0, status: "scope-extracted-unreviewed" },
  );
  assert.equal(authorityGraphSha256(actual), authorityGraphSha256(expected));
});

test("social and natural definitions use the official content-explanation appendices", async () => {
  const snapshot = await loadCurriculumSourceSnapshot();
  const graph = await buildExtractedAuthorityGraph(snapshot);
  const government = graph.nodes.find((node) => node.id === "AUTH-SOCIAL-LC-CIV-BD-4-1");
  assert.equal(government.text, "國家與政府的區別。");
  assert(government.sourceLine > 4436);
  const hierarchy = graph.nodes.find((node) => node.id === "AUTH-SOCIAL-LC-CIV-BF-4-2");
  assert.equal(hierarchy.text, "憲法、法律、命令三者為什麼有位階的關係？");
  const neutralization = graph.nodes.find((node) => node.id === "AUTH-NATURAL-LC-JD-4-6");
  assert.equal(neutralization.text, "實驗認識酸與鹼中和生成鹽和水，並可放出熱量而使溫度變化。");
  assert(neutralization.sourceLine > 4188);
});

test("unreviewed extraction cannot satisfy the frozen release requirement", async () => {
  const snapshot = await loadCurriculumSourceSnapshot();
  const graph = await buildExtractedAuthorityGraph(snapshot);
  await assert.rejects(validateAuthorityGraph(graph, snapshot, { requireFrozen: true }), /not frozen and semantically reviewed/);
});

test("source hash drift is rejected", async () => {
  const snapshot = await loadCurriculumSourceSnapshot();
  const graph = await buildExtractedAuthorityGraph(snapshot);
  graph.curriculumRegisterSha256 = "0".repeat(64);
  await assert.rejects(validateAuthorityGraph(graph, snapshot), /source register hash mismatch/);
});
