import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const repo = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const shared = path.join(repo, "shared", "fraction-markup.js");
const context = vm.createContext({ window: {}, console });
vm.runInContext(fs.readFileSync(shared, "utf8"), context);
const { slashToFracMarkup } = context.window.FRACTION_MARKUP;

const dirs = [
  path.join(repo, "理化會考作戰室", "official-data"),
];

let count = 0;
for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;
  for (const file of fs.readdirSync(dir, { recursive: true })) {
    const p = path.join(dir, String(file));
    if (!fs.statSync(p).isFile()) continue;
    // ponytail: only exam .txt — never whole .js (URLs/template literals break)
    if (!/official-data[/\\]\d+[/\\]\d+-exam\.txt$/i.test(p)) continue;
    const raw = fs.readFileSync(p, "utf8");
    if (!/[^\s]\/[^\s]/.test(raw)) continue;
    const next = slashToFracMarkup(raw);
    if (next === raw) continue;
    fs.writeFileSync(p, next, "utf8");
    count += 1;
  }
}

console.log(`Updated ${count} subject data files with [[frac:]] markup.`);
