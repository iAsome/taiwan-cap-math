// 交叉比對用：從官方答案卷 PDF 用座標解析「自然」欄，並與人工核對的
// confirmed-nature-answers.json 逐題比對，列出所有不一致的題號，供人工用
// 圖片再次確認，避免人工謄寫答案卷時的手誤流入題庫。
import * as mupdf from "mupdf";
import fs from "node:fs";

const confirmed = JSON.parse(fs.readFileSync("official-data/confirmed-nature-answers.json", "utf8"));

function extractYear(year) {
  const doc = mupdf.Document.openDocument(fs.readFileSync(`official-data/${year}/${year}-answer.pdf`), "application/pdf");
  const pages = doc.countPages();
  const answers = {};
  for (let p = 0; p < pages; p++) {
    const page = doc.loadPage(p);
    const json = JSON.parse(page.toStructuredText().asJSON());
    const items = [];
    for (const b of json.blocks) if (b.type === "text") for (const l of b.lines) {
      const t = l.text.trim();
      if (t) items.push({ x: l.bbox.x, y: l.bbox.y, text: t });
    }
    const natureHeader = items.find(i => i.text === "自然");
    if (!natureHeader) continue;
    const letters = items.filter(i => /^[A-D]$/.test(i.text) && i.y > natureHeader.y);
    const xs = [...new Set(letters.map(i => Math.round(i.x)))].sort((a, b) => a - b);
    const groups = [];
    for (const x of xs) { const g = groups.find(g => Math.abs(g.x - x) <= 10); if (g) g.xs.push(x); else groups.push({ x, xs: [x] }); }
    const natureCol = groups.reduce((best, g) => Math.abs(g.x - natureHeader.x) < Math.abs(best.x - natureHeader.x) ? g : best, groups[0]);
    const natureItems = letters.filter(i => Math.abs(i.x - natureCol.x) <= 10);
    const qNumItems = items.filter(i => /^\d+$/.test(i.text) && i.x < natureCol.x - 30);
    for (const q of qNumItems) {
      const match = natureItems.find(a => Math.abs(a.y - q.y) <= 6);
      if (match) answers[q.text] = match.text;
    }
  }
  return answers;
}

for (const year of [106, 107, 108, 109, 110, 111, 112, 113, 114, 115]) {
  const extracted = extractYear(year);
  const conf = confirmed[String(year)];
  const mismatches = [];
  for (const q of Object.keys(conf)) {
    if (extracted[q] && extracted[q] !== conf[q]) mismatches.push(`Q${q}: confirmed=${conf[q]} vs pdf-extract=${extracted[q]}`);
  }
  console.log(`${year}: ${Object.keys(conf).length} confirmed, ${Object.keys(extracted).length} extracted, ${mismatches.length} mismatches`);
  if (mismatches.length) console.log("  " + mismatches.join(" | "));
}
