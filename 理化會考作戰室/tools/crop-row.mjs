// 依題號自動定位答案卷表格中的那一列，裁切成高解析度圖片以人工肉眼核對。
import * as mupdf from "mupdf";
import fs from "node:fs";

const [, , pdfPath, pageNum, qNum, outPath] = process.argv;
const doc = mupdf.Document.openDocument(fs.readFileSync(pdfPath), "application/pdf");
const page = doc.loadPage(Number(pageNum));
const json = JSON.parse(page.toStructuredText().asJSON());
const items = [];
for (const b of json.blocks) if (b.type === "text") for (const l of b.lines) {
  const t = l.text.trim();
  if (t) items.push({ x: l.bbox.x, y: l.bbox.y, y1: l.bbox.y + l.bbox.h, text: t });
}
const qItems = items.filter(i => /^\d+$/.test(i.text) && i.x < 100);
const row = qItems.find(i => i.text === String(qNum));
if (!row) { console.error("row not found for", qNum); process.exit(1); }
const bounds = page.getBounds();
const pad = 3;
const clip = [bounds[0], row.y - pad, bounds[2], row.y1 + pad];
const scale = 10;
const matrix = mupdf.Matrix.scale(scale, scale);
const scaledClip = mupdf.Rect.transform(clip, matrix);
const pixmap = page.toPixmap(matrix, mupdf.ColorSpace.DeviceRGB, false, true, scaledClip);
fs.writeFileSync(outPath, pixmap.asPNG());
console.log("wrote", outPath);
