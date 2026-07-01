import * as mupdf from "mupdf";
import fs from "node:fs";

const [, , pdfPath] = process.argv;
const doc = mupdf.Document.openDocument(fs.readFileSync(pdfPath), "application/pdf");
const n = doc.countPages();
for (let i = 0; i < n; i++) {
  const page = doc.loadPage(i);
  const text = page.toStructuredText("preserve-whitespace").asText();
  console.log(`===== PAGE ${i + 1} =====`);
  console.log(text);
}
