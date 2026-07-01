import * as mupdf from "mupdf";
import fs from "node:fs";

// Usage: node pdf-crop2.mjs <pdf> <pageIndex0> <out.png> <x0> <y0> <x1> <y1> [zoom=4]
// x0,y0,x1,y1 are in PDF page point coordinates (unscaled, from pdf-to-png.mjs default zoom=1 space)
const [, , pdfPath, pageNum, outPath, x0, y0, x1, y1, zoom] = process.argv;
if (!pdfPath || !outPath || x1 == null) {
  console.error("Usage: node pdf-crop2.mjs <pdf> <pageIndex0> <out.png> <x0> <y0> <x1> <y1> [zoom=4]");
  process.exit(1);
}
const doc = mupdf.Document.openDocument(fs.readFileSync(pdfPath), "application/pdf");
const page = doc.loadPage(Number(pageNum || 0));
const scale = Number(zoom || 4);
const matrix = mupdf.Matrix.scale(scale, scale);
const bbox = [Number(x0) * scale, Number(y0) * scale, Number(x1) * scale, Number(y1) * scale];
const pixmap = new mupdf.Pixmap(mupdf.ColorSpace.DeviceRGB, bbox, false);
pixmap.clear(255);
const device = new mupdf.DrawDevice(matrix, pixmap);
page.run(device, mupdf.Matrix.identity);
device.close();
fs.writeFileSync(outPath, pixmap.asPNG());
console.log("wrote", outPath);
