import * as mupdf from "mupdf";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(fileURLToPath(new URL(".", import.meta.url)), "..", "official-data");
for (const year of [106, 107, 108, 109, 110, 111, 112, 113, 114, 115]) {
  for (const kind of ["exam", "answer"]) {
    const pdfPath = path.join(root, String(year), `${year}-${kind}.pdf`);
    if (!fs.existsSync(pdfPath)) continue;
    const doc = mupdf.Document.openDocument(fs.readFileSync(pdfPath), "application/pdf");
    const pages = doc.countPages();
    let out = "";
    for (let i = 0; i < pages; i++) {
      const page = doc.loadPage(i);
      out += `\n===== PAGE ${i + 1} =====\n${page.toStructuredText().asText()}`;
    }
    fs.writeFileSync(path.join(root, String(year), `${year}-${kind}.txt`), out, "utf8");
    console.log(year, kind, `${pages} pages extracted`);
  }
}
