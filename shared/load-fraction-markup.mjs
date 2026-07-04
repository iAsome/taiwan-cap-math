import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const sharedDir = path.dirname(fileURLToPath(import.meta.url));

export function loadFractionMarkup(context) {
  vm.runInContext(fs.readFileSync(path.join(sharedDir, "fraction-markup.js"), "utf8"), context, { filename: "fraction-markup.js" });
  context.FRACTION_MARKUP = context.window.FRACTION_MARKUP;
}
