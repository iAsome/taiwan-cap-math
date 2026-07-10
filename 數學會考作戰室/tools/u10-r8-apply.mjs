#!/usr/bin/env node
/** U10-R8: apply cleaned data (wraps u10-r7-apply with R8 bans) */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const tools = path.dirname(fileURLToPath(import.meta.url));
const r = spawnSync(process.execPath, [path.join(tools, "u10-r7-apply.mjs")], { stdio: "inherit" });
process.exit(r.status ?? 1);
