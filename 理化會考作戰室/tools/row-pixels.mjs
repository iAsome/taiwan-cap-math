import * as mupdf from "mupdf";
import fs from "node:fs";

const [, , pdfPath, pageNum, qNum, zoom] = process.argv;
const doc = mupdf.Document.openDocument(fs.readFileSync(pdfPath), "application/pdf");
const page = doc.loadPage(Number(pageNum));
const bounds = page.getBounds();
const json = JSON.parse(page.toStructuredText().asJSON());
const items = [];
for (const b of json.blocks) if (b.type === "text") for (const l of b.lines) {
  const t = l.text.trim();
  if (t) items.push({ x: l.bbox.x, y: l.bbox.y, y1: l.bbox.y + l.bbox.h, text: t });
}
const qItems = items.filter(i => /^\d+$/.test(i.text) && i.x < 100);
const row = qItems.find(i => i.text === String(qNum));
if (!row) { console.error("not found"); process.exit(1); }
const z = Number(zoom || 6);
const pad = 4;
console.log(JSON.stringify({
  px0: Math.round(bounds[0] * z),
  py0: Math.round((row.y - pad) * z),
  px1: Math.round(bounds[2] * z),
  py1: Math.round((row.y1 + pad) * z),
}));
