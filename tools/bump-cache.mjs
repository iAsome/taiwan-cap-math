import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const CACHE = "20260704a";
const META = `<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
  <meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Expires" content="0">`;

function bumpFile(file) {
  let html = fs.readFileSync(file, "utf8");
  html = html.replace(/\?v=20260703[ab]/g, `?v=${CACHE}`).replace(/\?v=20260702a/g, `?v=${CACHE}`);
  if (!html.includes("http-equiv=\"Cache-Control\"")) {
    html = html.replace(/<meta charset="UTF-8">/, `<meta charset="UTF-8">\n  ${META}`);
  }
  fs.writeFileSync(file, html);
}

bumpFile(path.join(root, "index.html"));
for (const dir of fs.readdirSync(root).filter(d => d.endsWith("會考作戰室"))) {
  const p = path.join(root, dir, "index.html");
  if (fs.existsSync(p)) bumpFile(p);
}
console.log("cache", CACHE);
