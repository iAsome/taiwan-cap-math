#!/usr/bin/env node
/** ponytail: parts are source of truth; this only rebuilds bank + lecture JS. */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const toolsDir = path.dirname(fileURLToPath(import.meta.url));
const r = spawnSync(process.execPath, [path.join(toolsDir, "build-u06-pack.mjs")], {
  stdio: "inherit",
  cwd: path.dirname(toolsDir)
});
process.exit(r.status ?? 1);
