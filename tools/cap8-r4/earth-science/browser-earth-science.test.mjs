import assert from "node:assert/strict";
import { access, mkdir, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import AxeBuilder from "@axe-core/playwright";
import { chromium } from "@playwright/test";
import { selectReviewedQuestionIds } from "../../../地科會考作戰室/r4/assessment.mjs";

const base = process.env.EARTH_R4_BASE_URL ?? "http://127.0.0.1:4179/地科會考作戰室/r4/";
const here = path.dirname(fileURLToPath(import.meta.url));
const evidenceRoot = path.join(here, "evidence");
const candidates = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];
let executablePath;
for (const candidate of candidates) {
  try { await access(candidate); executablePath = candidate; break; } catch { /* try next installed browser */ }
}
assert(executablePath, "Chrome or Edge is required for the Earth Science browser gate");

const browser = await chromium.launch({ executablePath, headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, serviceWorkers: "allow" });
const page = await context.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });

try {
  await page.goto(base, { waitUntil: "networkidle" });
  assert.equal(await page.title(), "地科會考作戰室 R4");
  assert.equal(await page.locator("#unit-list button").count(), 30);
  assert((await page.locator("#skill-list button").count()) > 0);
  assert.equal(await page.locator("#practice").isEnabled(), true);

  await page.keyboard.press("Home");
  await page.locator("body").focus();
  await page.keyboard.press("Tab");
  assert.equal(await page.evaluate(() => document.activeElement?.classList.contains("skip-link")), true, "skip link must be first keyboard stop");

  const manifest = await page.evaluate(() => fetch("runtime/content-manifest.json").then((response) => response.json()));
  const releaseManifest = await page.evaluate(() => fetch("content-manifest-v4.json").then((response) => response.json()));
  const renderedAssets = new Set();
  let renderedSkills = 0;
  for (const [unitIndex, expectedUnit] of manifest.units.entries()) {
    await page.locator("#unit-list button").nth(unitIndex).click();
    await page.locator(`#unit-list button[data-unit="${expectedUnit.id}"][aria-current="page"]`).waitFor();
    assert.equal(await page.locator("#skill-list button").count(), expectedUnit.skills.length);
    for (const [skillIndex, expectedSkill] of expectedUnit.skills.entries()) {
      await page.locator("#skill-list button").nth(skillIndex).click();
      assert.equal(await page.locator("h1").textContent(), expectedSkill.title);
      renderedSkills += 1;
    }
    const images = page.locator("figure img");
    for (let index = 0; index < await images.count(); index += 1) {
      const image = images.nth(index);
      await image.scrollIntoViewIfNeeded();
      await image.waitFor();
      assert(await image.evaluate((element) => element.complete && element.naturalWidth > 0 && element.alt.trim()));
      renderedAssets.add(await image.getAttribute("src"));
    }
  }
  assert.equal(renderedSkills, 220, "all 220 lectures must be reachable in the browser");
  assert.equal(renderedAssets.size, 11, "all original assets must render through lecture routes");

  await page.locator("#unit-list button").nth(14).click();
  await page.locator("figure img").first().waitFor();
  assert.equal(await page.locator("#skill-list button").count(), 7);
  const firstTitle = await page.locator("h1").textContent();
  await page.locator("#skill-list button").nth(1).click();
  assert.notEqual(await page.locator("h1").textContent(), firstTitle, "every skill must be reachable");
  assert.equal(await page.locator("figure img").evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0 && image.alt.trim())), true);

  const unit = manifest.units[14];
  let sharedSeed;
  for (let value = 1; value <= 100; value += 1) {
    if (selectReviewedQuestionIds(unit, String(value)).some((id) => id.includes("_SQ_"))) { sharedSeed = String(value); break; }
  }
  assert(sharedSeed, "a shared-stimulus question must be deterministically selectable");
  await page.locator("#seed").fill(sharedSeed);
  await page.locator("#practice").click();
  assert.equal(await page.locator("article.question").count(), 20);
  assert((await page.locator(".stimulus").count()) > 0, "practice must render shared stimuli");
  assert.equal(await page.locator("details.rationale:visible").count(), 0, "answers must stay hidden before submission");
  await page.locator("article.question input").first().focus();
  await page.keyboard.press("Space");
  assert.equal(await page.locator("article.question input").first().isChecked(), true);
  await page.locator("button.submit").click();
  assert.equal(await page.locator("details.rationale:visible").count(), 20);
  assert.equal(await page.locator("button.submit").isDisabled(), true);
  assert(await page.evaluate(() => Boolean(localStorage.getItem("cap8.r4.earth_science.progress.v1"))));

  const accessibility = await new AxeBuilder({ page }).analyze();
  assert.deepEqual(accessibility.violations.map((violation) => violation.id), [], `axe violations: ${accessibility.violations.map((value) => value.id).join(", ")}`);

  await page.emulateMedia({ media: "print" });
  assert.equal(await page.locator("aside").evaluate((element) => getComputedStyle(element).display), "none");
  assert.equal(await page.locator("figure").first().evaluate((element) => getComputedStyle(element).breakInside), "avoid");
  await page.emulateMedia({ media: "screen" });

  const assets = await page.evaluate(() => fetch("runtime/assets.json").then((response) => response.json()));
  assert.equal(assets.length, 11);
  const assetRender = await page.evaluate(async (records) => Promise.all(records.map((asset) => new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve({ id: asset.id, width: image.naturalWidth, height: image.naturalHeight });
    image.onerror = () => resolve({ id: asset.id, width: 0, height: 0 });
    image.src = asset.path.split("/r4/").at(-1);
  }))), assets);
  assert(assetRender.every((value) => value.width > 0 && value.height > 0), JSON.stringify(assetRender));

  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(base, { waitUntil: "networkidle" });
  const mobileLayout = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    offenders: [...document.querySelectorAll("body *")]
      .filter((element) => element.getBoundingClientRect().right > document.documentElement.clientWidth + 1)
      .slice(0, 8)
      .map((element) => `${element.tagName}.${element.className}:${Math.round(element.getBoundingClientRect().right)}`),
  }));
  assert(mobileLayout.scrollWidth <= mobileLayout.clientWidth, `mobile overflow: ${JSON.stringify(mobileLayout)}`);

  await page.evaluate(() => navigator.serviceWorker.ready);
  await context.setOffline(true);
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.locator("#unit-list button").first().waitFor();
  assert.equal(await page.locator("#unit-list button").count(), 30, "offline shell and unit index must reload");
  await context.setOffline(false);

  const preview = path.join(os.tmpdir(), "earth-r4-browser-preview.png");
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.screenshot({ path: preview, fullPage: false });
  const assetPreview = path.join(os.tmpdir(), "earth-r4-assets-preview.png");
  const figures = assets.map((asset) => `<figure><img src="${new URL(asset.path.split("/r4/").at(-1), base)}" alt="${asset.altText}"><figcaption>${asset.id}<br>${asset.caption}</figcaption></figure>`).join("");
  await page.setContent(`<style>body{font:16px system-ui;margin:20px}main{display:grid;grid-template-columns:1fr 1fr;gap:20px}figure{margin:0;border:1px solid #111;padding:10px;break-inside:avoid}img{display:block;width:100%;height:auto}figcaption{margin-top:8px;font-weight:700}</style><h1>地科 R4 原創圖形稽核表</h1><main>${figures}</main>`, { waitUntil: "networkidle" });
  await page.screenshot({ path: assetPreview, fullPage: true });
  assert.deepEqual(errors, [], `browser errors: ${errors.join(" | ")}`);
  await mkdir(evidenceRoot, { recursive: true });
  await writeFile(path.join(evidenceRoot, "browser-gate.json"), `${JSON.stringify({
    schemaVersion: "cap8-r4-earth-browser-gate-v1",
    status: "pass",
    testedManifestBuildSha256: releaseManifest.buildSha256,
    checks: ["220-skill-routes", "11-asset-renders", "keyboard", "answer-reveal", "shared-stimulus", "axe-wcag", "print", "mobile", "offline-migration-shell"],
    counts: { units: 30, skillsRendered: renderedSkills, assetsRendered: renderedAssets.size, practiceQuestions: 20, axeViolations: accessibility.violations.length },
  }, null, 2)}\n`, "utf8");
  console.log(`browser-earth-science.test: OK - Chrome keyboard/interaction/axe/print/mobile/offline; previews ${preview} ${assetPreview}`);
} finally {
  await context.setOffline(false).catch(() => {});
  await browser.close();
}
