// Render English reading exam PDF pages for crop coordinate discovery.
import * as mupdf from "mupdf";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const [, , year, pageIdx] = process.argv;
const pdf = path.join(root, "英文會考作戰室", "official-data", year, `${year}-exam.pdf`);
const out = path.join(root, "英文會考作戰室", "official-data", year, `exam-p${pageIdx}.png`);
const doc = mupdf.Document.openDocument(fs.readFileSync(pdf), "application/pdf");
const page = doc.loadPage(Number(pageIdx));
const Z = 2;
const matrix = mupdf.Matrix.scale(Z, Z);
const pix = page.toPixmap(matrix, mupdf.ColorSpace.DeviceRGB, false, true);
fs.writeFileSync(out, pix.asPNG());
console.log(out, pix.getWidth(), pix.getHeight());
