import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { assert } from "./lib/common.mjs";

const file = path.join(path.dirname(fileURLToPath(import.meta.url)), "run-browser-stability-gate.mjs");
let text = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");

const oldNav = `const nav=await page.evaluate(\`(async()=>{const results=[];for(const button of [...document.querySelectorAll("[data-unit]")]){button.click();const expected=Number(document.querySelector(".unit-hero .unit-meta span:last-child")?.textContent.match(/\\\\d+/)?.[0]||0);const started=Date.now();while(Date.now()-started<30000&&document.querySelectorAll(".lecture-topic-card").length!==expected)await new Promise(r=>setTimeout(r,50));results.push({unit:button.dataset.unit,expected,actual:document.querySelectorAll(".lecture-topic-card").length,title:document.querySelector(".unit-hero h2")?.textContent||""})}return results})()\`);`;

const newNav = `const nav=await page.evaluate(\`(async()=>{const results=[];for(const button of [...document.querySelectorAll("[data-unit]")]){button.click();let started=Date.now();while(Date.now()-started<30000&&!document.querySelector(".unit-hero h2")?.textContent)await new Promise(r=>setTimeout(r,50));const expected=Number(document.querySelector(".unit-hero .unit-meta span:last-child")?.textContent.match(/\\\\d+/)?.[0]||0);started=Date.now();while(Date.now()-started<30000&&document.querySelectorAll(".lecture-topic-card").length!==expected)await new Promise(r=>setTimeout(r,50));results.push({unit:button.dataset.unit,expected,actual:document.querySelectorAll(".lecture-topic-card").length,title:document.querySelector(".unit-hero h2")?.textContent||""})}return results})()\`);`;

assert(text.includes(oldNav), "browser nav block not found");
text = text.replace(oldNav, newNav);
fs.writeFileSync(file, text.includes("\r\n") ? text.replace(/\n/g, "\r\n") : text, "utf8");
console.log(JSON.stringify({ status: "PATCHED_BROWSER_HANDBOOK_WAIT" }, null, 2));
