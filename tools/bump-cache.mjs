import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const NEW = process.argv[2];
if (!/^\d{8}[a-z]$/.test(NEW || "")) {
  console.error("usage: node tools/bump-cache.mjs 20260709c");
  process.exit(1);
}

function bump(file) {
  let s = fs.readFileSync(file, "utf8");
  const next = s.replace(/\?v=\d{8}[a-z]/g, `?v=${NEW}`);
  if (next === s) return;
  fs.writeFileSync(file, next, "utf8");
  console.log("bump", file);
}

for (const d of fs.readdirSync(root).filter(x => x.endsWith("\u6703\u8003\u4f5c\u6230\u5ba4"))) {
  bump(path.join(root, d, "index.html"));
}
bump(path.join(root, "index.html"));
