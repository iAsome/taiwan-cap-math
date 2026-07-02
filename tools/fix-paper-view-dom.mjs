import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const BAD = /(\s*<\/section>\s*\n)\s*<section class="view" id="view-paper"([\s\S]*?<\/section>)\s*\n\s*<\/section>/;
const GOOD = "$1        </section>\n\n        <section class=\"view\" id=\"view-paper\"$2";

for (const dir of fs.readdirSync(root).filter(d => d.endsWith("會考作戰室"))) {
  const p = path.join(root, dir, "index.html");
  let html = fs.readFileSync(p, "utf8");
  if (!BAD.test(html)) {
    console.log("skip (already fixed?)", dir);
    continue;
  }
  html = html.replace(BAD, GOOD);
  fs.writeFileSync(p, html);
  console.log("fixed", dir);
}
