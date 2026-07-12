import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { assert } from "./lib/common.mjs";

const file = path.join(path.dirname(fileURLToPath(import.meta.url)), "run-browser-stability-gate.mjs");
let text = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");

const oldBlock = `await page.evaluate(\`document.querySelector('[data-view="papers"]').click()\`);await waitUntil(page,\`document.querySelector("[data-review-wrong]")\`,30000);await page.evaluate(\`document.querySelector("[data-review-wrong]").click()\`);await waitUntil(page,\`document.querySelector("[data-start-drill]")\`,30000);`;

const newBlock = `await page.evaluate(\`document.querySelector('[data-view="papers"]').click()\`);await waitUntil(page,\`document.querySelector("[data-review-wrong]")\`,30000);await page.evaluate(\`(()=>{const record=JSON.parse(localStorage.getItem("capMath.human.r1.paperHistory")||"[]")[0];window.__HUMAN_PAPER_REVIEW__.reviewWrongPaper(record.id);return true})()\`);await waitUntil(page,\`document.querySelector("[data-start-drill]")\`,30000);`;

assert(text.includes(oldBlock), "paper review block not found");
text = text.replace(oldBlock, newBlock);
fs.writeFileSync(file, text.includes("\r\n") ? text.replace(/\n/g, "\r\n") : text, "utf8");
console.log(JSON.stringify({ status: "PATCHED_BROWSER_PAPER_REVIEW_FLOW" }, null, 2));
