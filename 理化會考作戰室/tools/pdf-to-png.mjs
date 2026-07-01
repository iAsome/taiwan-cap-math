import * as mupdf from "mupdf";
import fs from "node:fs";

const [, , pdfPath, pageNum, outPath, zoom] = process.argv;
if (!pdfPath || !outPath) {
  console.error("Usage: node pdf-to-png.mjs <pdf> <pageIndex0based> <out.png> [zoom=3]");
  process.exit(1);
}
const doc = mupdf.Document.openDocument(fs.readFileSync(pdfPath), "application/pdf");
const page = doc.loadPage(Number(pageNum || 0));
const scale = Number(zoom || 3);
const matrix = mupdf.Matrix.scale(scale, scale);
const pixmap = page.toPixmap(matrix, mupdf.ColorSpace.DeviceRGB, false, true);
fs.writeFileSync(outPath, pixmap.asPNG());
console.log("wrote", outPath, "pages:", doc.countPages());
