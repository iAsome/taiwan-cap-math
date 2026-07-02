import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const logPath = path.join(root, "debug-2846ce.log");

function nestedInArchive(html) {
  const marker = '</section>\n\n        <section class="view" id="view-paper"';
  return !html.includes(marker);
}

export function verifyPaperViewDom(runId, append = false) {
  if (!append) fs.writeFileSync(logPath, "");
  for (const dir of fs.readdirSync(root).filter(d => d.endsWith("會考作戰室"))) {
    const html = fs.readFileSync(path.join(root, dir, "index.html"), "utf8");
    const nested = nestedInArchive(html);
    fs.appendFileSync(logPath, JSON.stringify({
      sessionId: "2846ce",
      timestamp: Date.now(),
      location: "verify-paper-view-dom.mjs",
      message: "dom nesting check",
      hypothesisId: "A",
      runId,
      subject: dir,
      paperNestedInArchive: nested,
      cssWouldHide: nested
    }) + "\n");
  }
}

if (process.argv[1].endsWith("verify-paper-view-dom.mjs")) {
  verifyPaperViewDom(process.argv[2] || "check");
  console.log("wrote", logPath);
}
