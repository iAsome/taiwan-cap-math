#!/usr/bin/env node
/** Apply U08-R3: strip global filler, append question-specific suffix, rewrite craft. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { countZh } from "./v2-quality.mjs";
import { R3_SUFFIX } from "./v2-u08-r3-suffix.mjs";

const PAD = "會考這類題目都是考基本定義，把概念記清楚就不容易被干擾項帶偏。";
const craftPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "v2-u08-r2-craft-all.mjs");

const OVERRIDE = {
  "周角是多少度？":
    "周角表示從起始方向繞頂點轉回同一方向，也就是完整一圈，所以是 360 度。180 度只轉半圈，是平角；90 度是直角；270 度還差 90 度才回到起始方向，因此不是周角。"
};

const mod = await import(pathToFileURL(craftPath).href + "?t=" + Date.now());
let filler = 0;
let short = 0;

for (const [text, c] of Object.entries(mod.CRAFT_BY_TEXT)) {
  if (OVERRIDE[text]) {
    c.e = OVERRIDE[text];
  } else {
    let e = c.e.replaceAll(PAD, "").trim();
    if (countZh(e) < 45) {
      const suf = R3_SUFFIX[text];
      if (!suf) throw new Error(`missing R3_SUFFIX: ${text}`);
      if (!e.endsWith("。")) e += "。";
      if (!e.includes(suf.replace(/。$/, ""))) e += suf;
    }
    // ponytail: dedupe repeated 。句 if suffix overlapped base text
    {
      const parts = e.split(/(?<=。)/).map((s) => s.trim()).filter(Boolean);
      const seen = new Set();
      e = parts.filter((p) => !seen.has(p) && seen.add(p)).join("");
    }
    c.e = e;
  }
  if (c.e.includes("會考這類")) filler++;
  if (countZh(c.e) < 45) short++;
}

if (filler || short) {
  console.error("filler", filler, "short", short);
  process.exit(1);
}

const entries = Object.entries(mod.CRAFT_BY_TEXT)
  .map(([text, c]) => {
    const key = JSON.stringify(text);
    return `  ${key}: {\n    e: ${JSON.stringify(c.e)},\n    s: ${JSON.stringify(c.s, null, 2).split("\n").map((ln, i) => (i === 0 ? ln : "    " + ln)).join("\n")},\n    m: ${JSON.stringify(c.m)}\n  }`;
  })
  .join(",\n");
const body = `export const CRAFT_BY_TEXT = {\n${entries}\n};\n\nexport function craftRow(row) {\n  const hit = CRAFT_BY_TEXT[row.text];\n  if (!hit) throw new Error(\`missing craft: \${row.text}\`);\n  return { explanation: hit.e, steps: hit.s, commonMistake: hit.m };\n}\n`;
fs.writeFileSync(craftPath, body, "utf8");
console.log("v2-u08-r3-apply: OK — 144 entries, no filler, min countZh>=45");
