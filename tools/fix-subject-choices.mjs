import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const repo = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const context = vm.createContext({ window: {}, console });
vm.runInContext(fs.readFileSync(path.join(repo, "shared", "fraction-markup.js"), "utf8"), context);
const { normalizeChoice } = context.window.FRACTION_MARKUP;

const PRIME = /[\u2032\u0027]/;
const FLOAT = /\d+\.\d{4,}/;
const targets = [];

for (const dir of fs.readdirSync(repo).filter(d => d.endsWith("會考作戰室"))) {
  const root = path.join(repo, dir);
  for (const file of fs.readdirSync(root, { recursive: true })) {
    const p = path.join(root, String(file));
    if (!fs.statSync(p).isFile()) continue;
    if (!/quiz-banks[/\\].*question-bank\.json$/i.test(p)) continue;
    targets.push(p);
  }
}

let files = 0;
for (const p of targets) {
  const data = JSON.parse(fs.readFileSync(p, "utf8"));
  let changed = false;
  const walk = obj => {
    if (!obj || typeof obj !== "object") return;
    if (Array.isArray(obj.choices)) {
      obj.choices = obj.choices.map(c => {
        const next = normalizeChoice(c);
        if (next !== c) changed = true;
        return next;
      });
    }
    for (const v of Object.values(obj)) {
      if (v && typeof v === "object") walk(v);
    }
  };
  walk(data);
  if (changed) {
    fs.writeFileSync(p, JSON.stringify(data, null, 2) + "\n", "utf8");
    files += 1;
  }
}

console.log(`Normalized choices in ${files} question-bank.json file(s).`);
