import fs from "node:fs";
import path from "node:path";
import { parseArgs, assert } from "./lib/common.mjs";

const a = parseArgs(process.argv.slice(2));
assert(a.repo, "Usage --repo");
const file = path.join(a.repo, "數學會考作戰室/human-runtime/app-human.js");
const raw = fs.readFileSync(file, "utf8");
const eol = raw.includes("\r\n") ? "\r\n" : "\n";
let text = raw.replace(/\r\n/g, "\n");

const remove = `    $$("[data-unit]", $("#unitIndex")).forEach(button => button.addEventListener("click", () => {
      state.selectedUnit = Number(button.dataset.unit);
      renderHandbook();
      if (window.innerWidth < 841) $("#unitContent").scrollIntoView({ behavior: "smooth", block: "start" });
    }));

`;

const add = `    if (!$("#unitIndex").dataset.bound) {
      $("#unitIndex").dataset.bound = "1";
      $("#unitIndex").addEventListener("click", event => {
        const button = event.target.closest("[data-unit]");
        if (!button) return;
        state.selectedUnit = Number(button.dataset.unit);
        renderHandbook();
        if (window.innerWidth < 841) $("#unitContent").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

`;

assert(text.includes(remove), "unitIndex listener block not found");
text = text.replace(remove, add);
fs.writeFileSync(file, text.replace(/\n/g, eol), "utf8");
console.log(JSON.stringify({ status: "PATCHED_APP_HUMAN_UNIT_INDEX_DELEGATION", file }, null, 2));
