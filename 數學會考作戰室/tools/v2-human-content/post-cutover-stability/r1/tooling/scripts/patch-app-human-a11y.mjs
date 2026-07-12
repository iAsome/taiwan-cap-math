import fs from "node:fs";
import path from "node:path";
import { parseArgs, assert } from "./lib/common.mjs";

const a = parseArgs(process.argv.slice(2));
assert(a.repo, "Usage --repo");
const file = path.join(a.repo, "數學會考作戰室/human-runtime/app-human.js");
const raw = fs.readFileSync(file, "utf8");
const eol = raw.includes("\r\n") ? "\r\n" : "\n";
let text = raw.replace(/\r\n/g, "\n");

const anchor = `    bindStaticEvents();
    window.__HUMAN_PAPER_REVIEW__ = { reviewWrongPaper, reviewSavedPaper };`;
const insert = `    bindStaticEvents();
    $("#seedInput")?.setAttribute("aria-label", "卷別種子");
    $("#levelSelect")?.setAttribute("aria-label", "數值強度");
    window.__HUMAN_PAPER_REVIEW__ = { reviewWrongPaper, reviewSavedPaper };`;
assert(text.includes(anchor), "init anchor not found");
text = text.replace(anchor, insert);

fs.writeFileSync(file, text.replace(/\n/g, eol), "utf8");
console.log(JSON.stringify({ status: "PATCHED_APP_HUMAN_A11Y_LABELS", file }, null, 2));
