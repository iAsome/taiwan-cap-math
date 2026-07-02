import fs from "node:fs";

const path = "index.html";
const html = fs.readFileSync(path, "utf8");
const cardRe = /<a class="subject-card" href="[^"]+">[\s\S]*?<\/a>/g;
const cards = [...html.matchAll(cardRe)].map(m => m[0]);
const name = block => (block.match(/<h3>([^<]+)/) || [])[1];
const byName = Object.fromEntries(cards.map(c => [name(c), c]));

const orders = [
  ["國文", "英文", "數學"],
  ["生物", "理化", "地科"],
  ["歷史", "地理", "公民"],
];
let gridIdx = 0;

const next = html.replace(/<section class="subject-grid">[\s\S]*?<\/section>/g, () => {
  const inner = orders[gridIdx++].map(n => byName[n]).join("\r\n      ");
  return `<section class="subject-grid">\r\n      ${inner}\r\n    </section>`;
});

if (gridIdx !== 3) throw new Error(`expected 3 grids, got ${gridIdx}`);
fs.writeFileSync(path, next, "utf8");
console.log("reordered hub subject cards");
