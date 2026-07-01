import * as mupdf from "mupdf";
import fs from "node:fs";

const [, , pdfPath, pageNum, outPath, x0, y0, x1, y1, zoom] = process.argv;
const doc = mupdf.Document.openDocument(fs.readFileSync(pdfPath), "application/pdf");
const page = doc.loadPage(Number(pageNum));
const scale = Number(zoom || 8);
const matrix = mupdf.Matrix.scale(scale, scale);
const bounds = page.getBounds();
const clip = [Number(x0), Number(y0), Number(x1), Number(y1)];
const scaledClip = mupdf.Rect.transform(clip, matrix);
const pixmap = page.toPixmap(matrix, mupdf.ColorSpace.DeviceRGB, false, true, scaledClip);
fs.writeFileSync(outPath, pixmap.asPNG());
console.log("page size", bounds, "-> wrote", outPath);
