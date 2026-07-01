import * as mupdf from "mupdf";
import fs from "node:fs";
const [, , pdfPath, pageNum] = process.argv;
const doc = mupdf.Document.openDocument(fs.readFileSync(pdfPath), "application/pdf");
const page = doc.loadPage(Number(pageNum || 0));
console.log(page.getBounds());
