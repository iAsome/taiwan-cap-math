import * as mupdf from "mupdf";
import fs from "node:fs";

const [, , pdfPath, pageNum, x0, y0, x1, y1, outPath, zoom, outScale] = process.argv;
if (!pdfPath || !outPath) {
  console.error("Usage: node pdf-crop-png.mjs <pdf> <pageIndex0based> <x0> <y0> <x1> <y1> <out.png> [renderZoom=4] [outScale=3]");
  process.exit(1);
}
const doc = mupdf.Document.openDocument(fs.readFileSync(pdfPath), "application/pdf");
const page = doc.loadPage(Number(pageNum || 0));
const Z = Number(zoom || 4);
const matrix = mupdf.Matrix.scale(Z, Z);
const full = page.toPixmap(matrix, mupdf.ColorSpace.DeviceRGB, false, true);

const X0 = Number(x0) * Z, Y0 = Number(y0) * Z, X1 = Number(x1) * Z, Y1 = Number(y1) * Z;
const S = Number(outScale || 3);
const outW = Math.round((X1 - X0) * S), outH = Math.round((Y1 - Y0) * S);
const points = [
  [X0, Y0],
  [X1, Y0],
  [X1, Y1],
  [X0, Y1],
];
const cropped = full.warp(points, outW, outH);
fs.writeFileSync(outPath, cropped.asPNG());
console.log("wrote", outPath, outW, "x", outH);
