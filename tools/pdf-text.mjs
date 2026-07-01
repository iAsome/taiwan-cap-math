import * as mupdf from "mupdf";
import fs from "node:fs";

const [, , pdfPath, pageNum, outFile] = process.argv;
if (!pdfPath) {
  console.error("Usage: node pdf-text.mjs <pdf> [pageIndex0based] [outFile]");
  process.exit(1);
}
const doc = mupdf.Document.openDocument(fs.readFileSync(pdfPath), "application/pdf");
const pages = pageNum && pageNum !== "all" ? [Number(pageNum)] : [...Array(doc.countPages()).keys()];
let out = "";
for (const i of pages) {
  const page = doc.loadPage(i);
  out += `--- page ${i} ---\n`;
  out += page.toStructuredText("preserve-whitespace").asText();
  out += "\n";
}
if (outFile) {
  fs.writeFileSync(outFile, out, "utf8");
} else {
  process.stdout.write(Buffer.from(out, "utf8"));
}
