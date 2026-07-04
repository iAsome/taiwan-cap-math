import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SUFFIX = "\u6703\u8003\u4f5c\u6230\u5ba4";
const OLD = "20260708f";
const NEW = "20260709a";

const diagramBlock = `  <script src="../shared/diagram-engine.js?v=${NEW}"></script>
  <script src="../shared/diagram-infer.js?v=${NEW}"></script>
  <script src="../shared/diagram-overrides.js?v=${NEW}"></script>
  <script src="../shared/diagram-attach.js?v=${NEW}"></script>`;

function wireIndex(file) {
  let h = fs.readFileSync(file, "utf8");
  h = h.replaceAll(OLD, NEW);
  h = h.replace(/\s*<script src="(\.\.\/)?lecture-diagrams\.js[^"]*"><\/script>\n?/g, "\n");
  if (!h.includes("diagram-engine.js")) {
    h = h.replace(
      /(<script src="\.\.\/shared\/fraction-markup\.js[^"]*"><\/script>)/,
      `$1\n${diagramBlock}`
    );
  }
  fs.writeFileSync(file, h, "utf8");
}

for (const d of fs.readdirSync(root).filter(x => x.endsWith(SUFFIX))) {
  wireIndex(path.join(root, d, "index.html"));
  console.log("wired", d);
}
wireIndex(path.join(root, "index.html"));
console.log("cache", NEW);
