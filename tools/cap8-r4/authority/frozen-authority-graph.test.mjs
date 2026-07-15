import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { authorityGraphSha256 } from "./authority-graph.mjs";
import {
  buildFrozenAuthorityGraph,
  validateFrozenAuthorityGraph,
} from "./frozen-authority-graph.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));

test("frozen authority graph deterministically binds all 669 nodes to 2100 skills", async () => {
  const actual = JSON.parse(await readFile(path.join(HERE, "frozen-authority-graph.json"), "utf8"));
  const expected = await buildFrozenAuthorityGraph();
  assert.deepEqual(actual, expected);
  const result = await validateFrozenAuthorityGraph(actual);
  assert.deepEqual(
    { nodes: result.nodes, skills: result.skills, status: result.status, bySubject: result.bySubject },
    {
      nodes: 669,
      skills: 2100,
      status: "frozen-reviewed",
      bySubject: {
        english: 320,
        chinese: 320,
        geography: 240,
        history: 240,
        civics: 240,
        biology: 220,
        physics_chemistry: 300,
        earth_science: 220,
      },
    },
  );
});

test("raw authority extraction remains byte-separate and hash-bound", async () => {
  const raw = JSON.parse(await readFile(path.join(HERE, "authority-graph.json"), "utf8"));
  const frozen = await buildFrozenAuthorityGraph();
  assert.equal(raw.status, "scope-extracted-unreviewed");
  assert.equal(raw.skills.length, 0);
  assert.equal(frozen.rawAuthorityGraphSha256, authorityGraphSha256(raw));
});

test("frozen authority graph rejects plan drift", async () => {
  const graph = await buildFrozenAuthorityGraph();
  graph.skills[0] = { ...graph.skills[0], title: "drift" };
  await assert.rejects(validateFrozenAuthorityGraph(graph), /stale or manually altered/);
});
