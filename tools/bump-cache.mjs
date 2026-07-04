import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const OLD = "20260709a";
const NEW = "20260709b";

function bump(file) {
  let s = fs.readFileSync(file, "utf8");
  if (!s.includes(OLD)) return;
  fs.writeFileSync(file, s.replaceAll(OLD, NEW), "utf8");
  console.log("bump", file);
}

for (const d of fs.readdirSync(root).filter(x => x.endsWith("\u6703\u8003\u4f5c\u6230\u5ba4"))) {
  bump(path.join(root, d, "index.html"));
}
bump(path.join(root, "index.html"));
