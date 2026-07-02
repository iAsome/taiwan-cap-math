import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

for (const dir of fs.readdirSync(root).filter(d => d.endsWith("會考作戰室"))) {
  const p = path.join(root, dir, "app.js");
  if (!fs.existsSync(p)) continue;
  let s = fs.readFileSync(p, "utf8");
  if (!s.includes("#region agent log")) continue;
  s = s.replace(/\n    \/\/ #region agent log\n[\s\S]*?\/\/ #endregion/g, "");
  s = s.replace(/\n    if \(view === "paper" \|\| view === "archive"\) \{ \/\/ #region agent log\n[\s\S]*?\/\/ #endregion \}/g, "");
  fs.writeFileSync(p, s);
  console.log("cleaned", dir);
}
