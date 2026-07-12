import fs from "node:fs";
import path from "node:path";
import { parseArgs, assert } from "./lib/common.mjs";

const a = parseArgs(process.argv.slice(2));
assert(a.repo, "Usage --repo");
const file = path.join(a.repo, "數學會考作戰室/human-runtime/app-human.js");
const raw = fs.readFileSync(file, "utf8");
const eol = raw.includes("\r\n") ? "\r\n" : "\n";
let text = raw.replace(/\r\n/g, "\n");

const mathOld = `const mathText = value => renderMath(value).replace(/\\n/g, "<br>");`;
const mathNew = `const mathText = value => renderMath(value ?? "").replace(/\\n/g, "<br>");`;
assert(text.includes(mathOld), "mathText line not found");
text = text.replace(mathOld, mathNew);

text = text.replaceAll("${q.steps.map(s => `<li>${mathText(s)}</li>`).join(\"\")}", "${(q.steps || []).map(s => `<li>${mathText(s)}</li>`).join(\"\")}");

fs.writeFileSync(file, text.replace(/\n/g, eol), "utf8");
console.log(JSON.stringify({ status: "PATCHED_APP_HUMAN_MATH_TEXT_NULLSAFE", file }, null, 2));
