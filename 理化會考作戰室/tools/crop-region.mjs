import * as mupdf from "mupdf";
import fs from "node:fs";

// Usage: node crop-region.mjs <pdf> <pageIndex0based> <out.png> <renderScale> <x0> <y0> <x1> <y1> <outScale>
const [, , pdfPath, pageNum, outPath, renderScale, x0, y0, x1, y1, outScale] = process.argv;
const doc = mupdf.Document.openDocument(fs.readFileSync(pdfPath), "application/pdf");
const page = doc.loadPage(Number(pageNum));
const scale = Number(renderScale || 3);
const matrix = mupdf.Matrix.scale(scale, scale);
const pixmap = page.toPixmap(matrix, mupdf.ColorSpace.DeviceRGB, false, true);
console.log("full pixmap size:", pixmap.getWidth(), pixmap.getHeight());

const X0 = Number(x0), Y0 = Number(y0), X1 = Number(x1), Y1 = Number(y1);
const outW = Math.round((X1 - X0) * Number(outScale || 3));
const outH = Math.round((Y1 - Y0) * Number(outScale || 3));
// warp: map quad (in source pixmap pixel coords) top-left,top-right,bottom-right,bottom-left to output rect
const cropped = pixmap.warp(
  [ [X0, Y0], [X1, Y0], [X1, Y1], [X0, Y1] ],
  outW, outH
);
fs.writeFileSync(outPath, cropped.asPNG());
console.log("wrote", outPath, outW, "x", outH);
