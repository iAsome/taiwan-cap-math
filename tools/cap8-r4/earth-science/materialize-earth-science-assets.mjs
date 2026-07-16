import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { EARTH_R4_ASSET_DEFINITIONS } from "../../../地科會考作戰室/r4/source/earth-r4-assets.mjs";
import { validateAuthoringRecord } from "../authoring-validator.mjs";

export async function materializeEarthScienceAssets(artifacts, { repoRoot }) {
  const defined = new Map(EARTH_R4_ASSET_DEFINITIONS.map((value) => [value.id, value]));
  const referenced = new Set(artifacts.flatMap((value) => value.assets ?? []));
  assert.deepEqual([...referenced].sort(), [...defined.keys()].sort(), "asset definitions and content references must match exactly");

  const assets = [];
  for (const definition of EARTH_R4_ASSET_DEFINITIONS) {
    const consumers = artifacts.filter((value) => value.assets?.includes(definition.id));
    const skillIds = [...new Set(consumers.flatMap((value) => value.skillIds ?? [value.skillId]).filter(Boolean))].sort();
    const calibrationRefs = [...new Set(consumers.flatMap((value) => value.authorityRefs ?? []))].sort();
    const bytes = await readFile(path.join(repoRoot, definition.path));
    const asset = {
      ...definition,
      skillIds,
      sha256: createHash("sha256").update(bytes).digest("hex"),
      calibrationRefs,
    };
    await validateAuthoringRecord("asset", asset);
    assets.push(asset);
  }
  return assets;
}
