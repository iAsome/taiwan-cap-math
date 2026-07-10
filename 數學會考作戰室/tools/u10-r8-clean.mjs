#!/usr/bin/env node
/** U10-R8: re-merge chunk copy into u10-r7-data.mjs after manual R8 cleanup */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { countZh } from "./v2-quality.mjs";

const tools = path.dirname(fileURLToPath(import.meta.url));
const chunks = ["u10-r7-chunk1.mjs", "u10-r7-chunk2.mjs", "u10-r7-chunk3.mjs", "u10-r7-chunk4.mjs"];
const OUT = {};

for (const f of chunks) {
  const mod = await import(pathToFileURL(path.join(tools, f)).href + "?" + Date.now());
  Object.assign(OUT, mod.U10_R7_CHUNK);
}

for (const [key, v] of Object.entries(OUT)) {
  if (countZh(v.explanation) < 45) throw new Error(`${key} expl short ${countZh(v.explanation)}`);
  if (countZh(v.commonMistake) < 12) throw new Error(`${key} cm short ${countZh(v.commonMistake)}`);
}

fs.writeFileSync(
  path.join(tools, "u10-r7-data.mjs"),
  `// U10-R7/R8: 144 hand-written per-question copy\nexport const U10_R7 = ${JSON.stringify(OUT, null, 2)};\n`
);
console.log("u10-r8-clean: merged", Object.keys(OUT).length, "entries");
