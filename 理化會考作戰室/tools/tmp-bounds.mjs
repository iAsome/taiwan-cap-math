import * as mupdf from "mupdf";
import fs from "node:fs";
const doc = mupdf.Document.openDocument(fs.readFileSync("official-data/108/108-exam.pdf"), "application/pdf");
const page = doc.loadPage(4);
console.log(page.getBounds());
