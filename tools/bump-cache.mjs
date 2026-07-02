import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const CACHE = process.argv[2] || "20260706b";

const files = ["index.html", ...fs.readdirSync(root).filter(d => d.endsWith("會考作戰室")).map(d => path.join(d, "index.html"))];

for (const rel of files) {
  const file = path.join(root, rel);
  const next = fs.readFileSync(file, "utf8").replace(/\?v=202607\d+[a-z]/g, `?v=${CACHE}`);
  fs.writeFileSync(file, next, "utf8");
  console.log(`bumped ${rel} -> ?v=${CACHE}`);
}
