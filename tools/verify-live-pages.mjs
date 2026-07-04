import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const base = "https://iasome.github.io/taiwan-cap-math/";
const hubHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const expectedCache = hubHtml.match(/\?v=(202607\d+[a-z])/g)?.[0]?.slice(3);
if (!expectedCache) throw new Error("local hub: missing cache token");

const pages = [
  ["hub", "index.html"],
  ...fs.readdirSync(root)
    .filter(d => d.endsWith("會考作戰室"))
    .sort()
    .map(dir => [dir.replace("會考作戰室", "").toLowerCase() || dir, `${encodeURIComponent(dir)}/index.html`]),
];

let failed = 0;
for (const [name, rel] of pages) {
  const url = base + rel;
  const text = await fetch(url).then(r => r.text());
  const title = (text.match(/<title>([^<]+)/) || [])[1] || "";
  const cache = text.match(/\?v=(202607\d+[a-z])/)?.[1];
  const encodingOk = /[\u4e00-\u9fff]/.test(title) && !/\?�/.test(title);
  const cacheOk = cache === expectedCache;
  const isHub = name === "hub";
  const markersOk = isHub || (text.includes("paper-history-ui.js") && text.includes("exam-choice-ui.js") && text.includes("paperHistoryToolbar"));
  const ok = encodingOk && cacheOk && markersOk;
  console.log(`${name}: ${ok ? "OK" : "BAD"} | cache=${cache || "missing"} | ${title.slice(0, 24)}`);
  if (!ok) failed++;
}

if (failed) {
  console.error(`\nlive-pages: ${failed}/${pages.length} pages failed (expected cache ${expectedCache})`);
  process.exit(1);
}
console.log(`\nlive-pages: all ${pages.length} pages OK at cache ${expectedCache}`);
