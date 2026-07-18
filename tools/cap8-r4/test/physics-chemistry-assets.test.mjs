import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath, pathToFileURL } from "node:url";
import AxeBuilder from "@axe-core/playwright";
import { chromium } from "playwright";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..", "..", "..");
const SOURCE_URL = pathToFileURL(path.join(ROOT, "理化會考作戰室", "r4", "source", "physics-chemistry-assets.mjs")).href;
const ASSET_ROOT = path.join(ROOT, "理化會考作戰室", "r4", "assets", "physics-chemistry");

const sources = (await import(SOURCE_URL)).PHYSICS_CHEMISTRY_ASSET_SOURCES;

const escaped = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");

function previewHtml() {
  const figures = sources.map((source) => {
    const table = source.dataFallback.rows.map((row) => `<tr><th scope="row">${escaped(row[0])}</th><td>${escaped(row[1])}</td></tr>`).join("");
    return `<figure><img src="data:image/svg+xml;base64,${Buffer.from(source.svg).toString("base64")}" alt="${escaped(source.altText)}"><figcaption>${source.id}｜${escaped(source.caption)}</figcaption><details open><summary>完整文字與數據替代</summary><p>${escaped(source.longDescription)}</p><table><caption>${escaped(source.dataFallback.summary)}</caption><thead><tr>${source.dataFallback.columns.map((column) => `<th scope="col">${escaped(column)}</th>`).join("")}</tr></thead><tbody>${table}</tbody></table></details></figure>`;
  }).join("");
  return `<!doctype html><html lang="zh-Hant"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Physics/Chemistry R4 governed figures</title><style>*{box-sizing:border-box}body{margin:0;background:#fff;color:#111;font:16px/1.5 Arial,"Noto Sans TC",sans-serif}main{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;padding:24px}h1{grid-column:1/-1;margin:0;font-size:24px}figure{margin:0;border:2px solid #111;padding:12px;break-inside:avoid}img{display:block;width:100%;height:auto;aspect-ratio:12/7;object-fit:contain;background:#fff}figcaption{font-weight:700;margin-top:8px}summary{font-weight:700}p{margin:8px 0}table{border-collapse:collapse;width:100%}caption{text-align:left;font-weight:700}th,td{border:1px solid #333;padding:6px;text-align:left;vertical-align:top}@media(max-width:600px){main{grid-template-columns:1fr;padding:12px;gap:12px}}@media print{main{display:block;padding:0}h1{margin-bottom:12px}figure{break-inside:avoid;page-break-inside:avoid;margin:0 0 12px}details>*{display:block}}</style><main><h1>理化 R4 圖資產檢核</h1>${figures}</main></html>`;
}

test("Physics/Chemistry governed asset records and SVGs stay exact and unique", async () => {
  assert.equal(sources.length, 16);
  assert.equal(new Set(sources.map(({ id }) => id)).size, 16);
  assert.equal(new Set(sources.map(({ fileName }) => fileName)).size, 16);
  assert.equal(new Set(sources.map(({ svg }) => createHash("sha256").update(svg).digest("hex"))).size, 16);

  for (const source of sources) {
    assert.equal(await readFile(path.join(ASSET_ROOT, source.fileName), "utf8"), source.svg, `${source.id}: source/disk drift`);
    assert.equal(source.svg.match(/<desc>([^<]+)<\/desc>/u)?.[1], source.longDescription, `${source.id}: desc drift`);
    assert(source.altText.length >= 20 && source.altText.length <= 80, `${source.id}: alt must stay concise`);
    assert(source.dataFallback.rows.length >= 3, `${source.id}: incomplete text/data alternative`);
    assert(source.dataFallback.rows.every((row) => row.length === source.dataFallback.columns.length && row.every((cell) => cell.trim())), `${source.id}: ragged or empty fallback row`);
    assert.doesNotMatch(JSON.stringify(source.dataFallback), /圖上明確標示/u, `${source.id}: placeholder fallback returned`);
  }
});

test("Physics/Chemistry SVGs parse and keep rendered labels inside the viewBox", async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 960, height: 640 } });
    await page.setContent(`<main>${sources.map(({ id, svg }) => `<section data-id="${id}">${svg}</section>`).join("")}</main>`);
    const results = await page.locator("section").evaluateAll((sections) => sections.map((section) => {
      const svg = section.querySelector("svg");
      const parsed = new DOMParser().parseFromString(svg.outerHTML, "image/svg+xml");
      const viewBox = svg.viewBox.baseVal;
      const overflow = [...svg.querySelectorAll("text")].flatMap((node) => {
        const box = node.getBBox();
        return box.x < 0 || box.y < 0 || box.x + box.width > viewBox.width || box.y + box.height > viewBox.height
          ? [{ text: node.textContent, x: box.x, y: box.y, width: box.width, height: box.height }]
          : [];
      });
      return {
        id: section.dataset.id,
        parseError: parsed.querySelector("parsererror")?.textContent ?? "",
        role: svg.getAttribute("role"),
        title: svg.querySelector("title")?.textContent ?? "",
        description: svg.querySelector("desc")?.textContent ?? "",
        overflow,
      };
    }));

    for (const result of results) {
      assert.equal(result.parseError, "", `${result.id}: invalid XML`);
      assert.equal(result.role, "img", `${result.id}: missing image role`);
      assert(result.title && result.description, `${result.id}: missing title or description`);
      assert.deepEqual(result.overflow, [], `${result.id}: rendered text leaves viewBox`);
    }
  } finally {
    await browser.close();
  }
});

test("Physics/Chemistry figure alternatives pass desktop, mobile, print, and WCAG checks", async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  try {
    const page = await context.newPage();
    await page.setContent(previewHtml());
    const { violations } = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
    assert.deepEqual(violations.map(({ id }) => id), []);
    assert.equal(await page.locator("figure").count(), 16);
    assert.equal(await page.locator("img").evaluateAll((images) => images.filter((image) => !image.complete || image.naturalWidth === 0).length), 0);
    assert(await page.locator("details").evaluateAll((details) => details.every((value) => value.open)));
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1), "desktop overflow");

    await page.setViewportSize({ width: 390, height: 844 });
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1), "mobile overflow");

    await page.emulateMedia({ media: "print" });
    assert(await page.locator("details p").evaluateAll((values) => values.every((value) => getComputedStyle(value).display !== "none")));
    assert(await page.locator("details table").evaluateAll((values) => values.every((value) => getComputedStyle(value).display !== "none")));
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1), "print overflow");
  } finally {
    await context.close();
    await browser.close();
  }
});
