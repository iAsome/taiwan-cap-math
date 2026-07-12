import fs from "node:fs";
import path from "node:path";
import { parseArgs, assert } from "./lib/common.mjs";

const a = parseArgs(process.argv.slice(2));
assert(a.repo, "Usage --repo");
const file = path.join(a.repo, "數學會考作戰室/human-runtime/app-human.js");
const raw = fs.readFileSync(file, "utf8");
const eol = raw.includes("\r\n") ? "\r\n" : "\n";
let text = raw.replace(/\r\n/g, "\n");

const remove = `    $$("[data-review-paper]", $("#paperHistoryList")).forEach(button => button.addEventListener("click", () => reviewSavedPaper(button.dataset.reviewPaper, "full")));
    $$("[data-review-wrong]", $("#paperHistoryList")).forEach(button => button.addEventListener("click", () => reviewWrongPaper(button.dataset.reviewWrong)));
    $$("[data-view]", $("#paperHistoryList")).forEach(button => button.addEventListener("click", () => setView(button.dataset.view)));
`;

const add = `    if (!$("#paperHistoryList").dataset.bound) {
      $("#paperHistoryList").dataset.bound = "1";
      $("#paperHistoryList").addEventListener("click", event => {
        const reviewPaper = event.target.closest("[data-review-paper]");
        if (reviewPaper) return reviewSavedPaper(reviewPaper.dataset.reviewPaper, "full");
        const reviewWrong = event.target.closest("[data-review-wrong]");
        if (reviewWrong) return reviewWrongPaper(reviewWrong.dataset.reviewWrong);
        const viewButton = event.target.closest("[data-view]");
        if (viewButton) return setView(viewButton.dataset.view);
      });
    }
`;

assert(text.includes(remove), "paper history listener block not found");
text = text.replace(remove, add);
fs.writeFileSync(file, text.replace(/\n/g, eol), "utf8");
console.log(JSON.stringify({ status: "PATCHED_APP_HUMAN_PAPER_HISTORY_DELEGATION", file }, null, 2));
