import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(fileURLToPath(new URL(".", import.meta.url)), "..", "official-data");
for (const year of [106, 107, 108, 109, 110, 111, 112, 113, 114, 115]) {
  for (const kind of ["exam", "answer"]) {
    const p = path.join(root, String(year), `${year}-${kind}.pdf`);
    const fd = fs.openSync(p, "r");
    const buf = Buffer.alloc(5);
    fs.readSync(fd, buf, 0, 5, 0);
    fs.closeSync(fd);
    const size = fs.statSync(p).size;
    console.log(year, kind, buf.toString() === "%PDF-" ? `OK (${size} bytes)` : `BAD: ${buf.toString()}`);
  }
}
