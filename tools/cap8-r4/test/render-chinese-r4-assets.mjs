import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const outputRoot = path.resolve(HERE, "..", "evidence", "chinese");
const base = process.env.CHINESE_R4_URL || "http://127.0.0.1:4173/%E5%9C%8B%E6%96%87%E6%9C%83%E8%80%83%E4%BD%9C%E6%88%B0%E5%AE%A4/";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1 });

try {
  await page.goto(base, { waitUntil: "networkidle" });
  const assets = await page.evaluate(async () => await (await fetch("r4/runtime/assets.json")).json());
  await mkdir(outputRoot, { recursive: true });
  for (const [name, records] of [["data", assets.filter(({ type }) => type !== "calligraphy-observation")], ["calligraphy", assets.filter(({ type }) => type === "calligraphy-observation")]]) {
    await page.setContent(`<!doctype html><meta charset="utf-8"><style>*{box-sizing:border-box}body{margin:24px;background:#fff;color:#111;font-family:"Noto Sans TC","Microsoft JhengHei",sans-serif}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.card{border:2px solid #222;padding:12px;break-inside:avoid}.card h2{font-size:18px;margin:0 0 8px}.card img{display:block;width:100%;height:240px;object-fit:contain;border:1px solid #777;background:#fff}.card p{font-size:14px;line-height:1.5;margin:8px 0 0}</style><main class="grid">${records.map((asset) => `<article class="card"><h2>${asset.id}｜${asset.caption}</h2><img src="${new URL(`r4/runtime/${asset.file}`, base)}" alt="${asset.alt.replaceAll('"', "&quot;")}"><p>${asset.longDescription}</p></article>`).join("")}</main>`);
    await page.locator("img").first().waitFor();
    await page.waitForFunction(() => [...document.images].every((image) => image.complete && image.naturalWidth > 0));
    await page.screenshot({ path: path.join(outputRoot, `asset-contact-sheet-${name}.png`), fullPage: true });
  }
  console.log(JSON.stringify({ assets: assets.length, sheets: 2, outputRoot }));
} finally {
  await browser.close();
}
