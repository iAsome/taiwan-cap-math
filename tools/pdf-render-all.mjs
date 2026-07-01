import * as mupdf from "mupdf";
import fs from "node:fs";
import path from "node:path";

const [, , pdfPath, outDir, zoom] = process.argv;
if (!pdfPath || !outDir) {
  console.error("Usage: node pdf-render-all.mjs <pdf> <outDir> [zoom=2.5]");
  process.exit(1);
}
fs.mkdirSync(outDir, { recursive: true });
const doc = mupdf.Document.openDocument(fs.readFileSync(pdfPath), "application/pdf");
const scale = Number(zoom || 2.5);
const matrix = mupdf.Matrix.scale(scale, scale);
const n = doc.countPages();
for (let i = 0; i < n; i++) {
  const page = doc.loadPage(i);
  const pixmap = page.toPixmap(matrix, mupdf.ColorSpace.DeviceRGB, false, true);
  const outPath = path.join(outDir, `page-${String(i + 1).padStart(2, "0")}.png`);
  fs.writeFileSync(outPath, pixmap.asPNG());
}
console.log(`Rendered ${n} pages from ${pdfPath} to ${outDir}`);
