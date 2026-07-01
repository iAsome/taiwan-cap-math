import * as mupdf from "mupdf";
import fs from "node:fs";

const [, , pdfPath, pageNum, outPath, zoom, x0, y0, x1, y1, outScale] = process.argv;
if (!pdfPath || !outPath) {
  console.error("Usage: node pdf-crop.mjs <pdf> <pageIndex0based> <out.png> <zoom> <x0> <y0> <x1> <y1> [outScale=1]");
  process.exit(1);
}
const doc = mupdf.Document.openDocument(fs.readFileSync(pdfPath), "application/pdf");
const page = doc.loadPage(Number(pageNum || 0));
const scale = Number(zoom || 6);
const matrix = mupdf.Matrix.scale(scale, scale);
const pixmap = page.toPixmap(matrix, mupdf.ColorSpace.DeviceRGB, false, true);
const X0 = Number(x0), Y0 = Number(y0), X1 = Number(x1), Y1 = Number(y1);
const os = Number(outScale || 1);
const w = Math.round((X1 - X0) * os), h = Math.round((Y1 - Y0) * os);
const cropped = pixmap.warp([[X0, Y0], [X1, Y0], [X1, Y1], [X0, Y1]], w, h);
fs.writeFileSync(outPath, cropped.asPNG());
console.log("wrote", outPath, w, "x", h);
