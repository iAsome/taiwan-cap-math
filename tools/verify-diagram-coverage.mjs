import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const result = spawnSync(process.execPath, ["tools/verify-no-student-images.mjs"], {
  cwd: root,
  stdio: "inherit"
});

process.exit(result.status ?? 1);
