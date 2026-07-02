import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const files = ["index.html", ...fs.readdirSync(root).filter(d => d.endsWith("會考作戰室")).map(d => path.join(d, "index.html"))];
const bad = [];

for (const rel of files) {
  const text = fs.readFileSync(path.join(root, rel), "utf8");
  const title = (text.match(/<title>([^<]{0,80})/) || [])[1] || "";
  const hasCjk = /[\u4e00-\u9fff]/.test(title);
  const hasMojibake = /[�]/.test(text.slice(0, 4000))
    || /\?�/.test(text.slice(0, 4000))
    || /Ã|â€/.test(text.slice(0, 4000))
    || /[^\u0000-\u007f][\u0080-\u00bf]/.test(title);
  const hasValidTitleTag = /<title>[^<]+<\/title>/.test(text);
  if (!hasCjk || hasMojibake || !hasValidTitleTag) bad.push({ rel, title: title.slice(0, 60), hasCjk, hasMojibake, hasValidTitleTag });
}

if (bad.length) {
  for (const row of bad) console.error(`FAIL ${row.rel}: title="${row.title}" cjk=${row.hasCjk} mojibake=${row.hasMojibake}`);
  process.exit(1);
}
console.log(`encoding: all ${files.length} index.html files OK`);
