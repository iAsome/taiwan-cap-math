import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
for (const d of ["歷史會考作戰室", "地理會考作戰室", "公民會考作戰室"]) {
  const f = path.join(root, d, "archive-exams.js");
  const s = fs.readFileSync(f, "utf8").replace(/\n  const omittedNote\d+ = "[^"]*";\n/g, "\n");
  fs.writeFileSync(f, s);
  console.log("cleaned", d);
}
