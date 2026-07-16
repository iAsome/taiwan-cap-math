import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { after, before, test } from "node:test";
import { fileURLToPath } from "node:url";
import AxeBuilder from "@axe-core/playwright";
import { chromium } from "playwright";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..", "..", "..");
const R4_PATH = `${encodeURIComponent("英文會考作戰室")}/r4/index.html`;
const CONTENT_TYPES = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".mjs", "text/javascript; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".wav", "audio/wav"],
  [".webmanifest", "application/manifest+json"],
]);

let browser;
let server;
let pageUrl;

function addErrorCapture(page) {
  const errors = [];
  page.on("console", (message) => { if (message.type() === "error") errors.push(`console: ${message.text()}`); });
  page.on("pageerror", (error) => errors.push(`page: ${error.message}`));
  return errors;
}

async function openPage(context) {
  const page = await context.newPage();
  const errors = addErrorCapture(page);
  await page.goto(pageUrl, { waitUntil: "networkidle" });
  await assert.doesNotReject(() => page.locator("#runtimeStatus").getByText("靜態題庫已載入").waitFor());
  return { page, errors };
}

async function assertAxeClean(page, label) {
  const { violations } = await new AxeBuilder({ page }).analyze();
  assert.deepEqual(violations.map(({ id, impact, nodes }) => ({ id, impact, nodes: nodes.length })), [], `${label}: axe violations`);
}

before(async () => {
  server = createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url, "http://127.0.0.1").pathname);
      let target = path.resolve(ROOT, pathname.replace(/^\/+/, ""));
      assert(target === ROOT || target.startsWith(`${ROOT}${path.sep}`), "request escaped repository root");
      if ((await stat(target)).isDirectory()) target = path.join(target, "index.html");
      const bytes = await readFile(target);
      response.writeHead(200, { "content-type": CONTENT_TYPES.get(path.extname(target).toLowerCase()) || "application/octet-stream" });
      response.end(bytes);
    } catch {
      response.writeHead(404).end("Not found");
    }
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  pageUrl = `http://127.0.0.1:${server.address().port}/${R4_PATH}`;
  browser = await chromium.launch({ headless: true, args: ["--autoplay-policy=no-user-gesture-required"] });
});

after(async () => {
  await browser?.close();
  await new Promise((resolve) => server?.close(resolve));
});

test("R4 shell, keyboard navigation, course content, and responsive menu work", { timeout: 60_000 }, async () => {
  const context = await browser.newContext();
  const { page, errors } = await openPage(context);
  assert.equal(await page.title(), "會考英文作戰室 R4");
  assert.deepEqual(await page.locator(".metric strong").allTextContents(), ["320", "3840", "500", "300"]);
  await page.evaluate(() => document.activeElement?.blur());
  await page.keyboard.press("Tab");
  assert.equal(await page.evaluate(() => document.activeElement?.className), "skip-link");
  await page.keyboard.press("Enter");
  assert.equal(await page.evaluate(() => document.activeElement?.id), "main");
  await page.locator('#nav a[data-view="courses"]').press("Enter");
  await page.locator(".unit-card").first().waitFor();
  assert.equal(await page.locator(".unit-card").count(), 48);
  await page.locator(".unit-card").first().press("Enter");
  await page.locator("article.lecture").waitFor();
  assert.equal(await page.locator(".example:not(.mistake)").count(), 3);
  assert.equal(await page.locator(".example.mistake").count(), 4);
  assert.equal(await page.locator("main").evaluate((element) => element === document.activeElement), true);
  await assertAxeClean(page, "course");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator("#menu").click();
  assert.equal(await page.locator("#menu").getAttribute("aria-expanded"), "true");
  assert.equal(await page.locator("#sidebar").evaluate((element) => element.classList.contains("open")), true);
  assert.deepEqual(errors, []);
  await context.close();
});

test("static practice, reading, listening visuals, audio, answers, and print work", { timeout: 120_000 }, async () => {
  const context = await browser.newContext();
  const { page, errors } = await openPage(context);
  await page.goto(`${pageUrl}#view=practice&unit=ENG_R4_U01&skill=ENG_R4_S001&seed=115`);
  await page.locator("#startPractice").waitFor();
  await page.locator("#startPractice").click();
  await page.locator("fieldset.question").first().waitFor();
  assert.equal(await page.locator("fieldset.question").count(), 12);
  assert.deepEqual(await page.locator("fieldset.question").evaluateAll((items) => items.map((item) => item.dataset.question)), [...new Set(await page.locator("fieldset.question").evaluateAll((items) => items.map((item) => item.dataset.question)))]);
  assert.equal(await page.locator(".choice").count(), 48);
  for (const fieldset of await page.locator("fieldset.question").all()) await fieldset.locator("input").first().check();
  await page.locator("#quizForm button[type=submit]").click();
  assert.equal(await page.locator(".rationale:not([hidden])").count(), 12);
  assert.equal(await page.locator(".rationale p").count(), 48);
  assert.equal(await page.locator("#quizForm button[type=submit]").isDisabled(), true);

  await page.goto(`${pageUrl}#view=reading&seed=115`);
  await page.locator("article.stimulus").waitFor();
  assert.equal(await page.locator("fieldset.question").count(), 4);
  assert.equal(await page.locator("article.stimulus h1, article.stimulus h2, article.stimulus h3").count(), 0);
  await assertAxeClean(page, "reading");

  await page.goto(`${pageUrl}#view=mock&mode=listening&seed=115`);
  await page.locator("#startMock").waitFor();
  await page.locator("#startMock").click();
  await page.locator("fieldset.question").first().waitFor();
  assert.equal(await page.locator("fieldset.question").count(), 21);
  assert.equal(await page.locator("audio").count(), 7);
  assert.equal(await page.locator("figure.question-asset").count(), 3);
  assert.equal(await page.locator("figure.question-asset img[alt]").count(), 3);
  assert.equal(await page.locator("figure.question-asset .asset-table").count(), 3);
  const audio = page.locator("audio").first();
  await audio.evaluate((element) => element.readyState >= 1 || new Promise((resolve, reject) => {
    element.addEventListener("loadedmetadata", resolve, { once: true });
    element.addEventListener("error", reject, { once: true });
  }));
  assert((await audio.evaluate((element) => element.duration)) > 0);
  await assertAxeClean(page, "listening mock");
  await page.emulateMedia({ media: "print" });
  assert.equal(await page.locator("#sidebar").evaluate((element) => getComputedStyle(element).display), "none");
  assert((await page.pdf({ format: "A4", printBackground: false })).length > 10_000);
  assert.deepEqual(errors, []);
  await context.close();
});

test("legacy progress migrates without deletion and the complete corpus works offline", { timeout: 120_000 }, async () => {
  const context = await browser.newContext();
  await context.addInitScript(() => {
    localStorage.setItem("capEnglish.completed", JSON.stringify(["legacy-u01"]));
    localStorage.setItem("capEnglish.lastSeed", "91");
  });
  const { page, errors } = await openPage(context);
  const migration = await page.evaluate(() => ({
    legacy: localStorage.getItem("capEnglish.completed"),
    seed: localStorage.getItem("capEnglish.lastSeed"),
    marker: JSON.parse(localStorage.getItem("cap8.r4.english.migration.v1")),
    progress: JSON.parse(localStorage.getItem("cap8.r4.english.progress")),
  }));
  assert.equal(migration.legacy, '["legacy-u01"]');
  assert.equal(migration.seed, "91");
  assert.deepEqual(migration.marker.backedUpKeys.sort(), ["capEnglish.completed", "capEnglish.lastSeed"]);
  assert.deepEqual(migration.progress.legacy.completedUnitIds, ["legacy-u01"]);

  await page.evaluate(async () => {
    await navigator.serviceWorker.ready;
    if (!navigator.serviceWorker.controller) await new Promise((resolve) => navigator.serviceWorker.addEventListener("controllerchange", resolve, { once: true }));
  });
  const uncached = await page.evaluate(async () => {
    const catalog = await fetch("runtime/catalog.json").then((response) => response.json());
    const paths = [...catalog.units.map((unit) => unit.bundle), catalog.reading.bundle, catalog.listening.bundle, ...catalog.audioPaths, ...catalog.assetPaths];
    return (await Promise.all(paths.map(async (value) => [value, Boolean(await caches.match(value))]))).filter(([, found]) => !found);
  });
  assert.deepEqual(uncached, []);
  await context.setOffline(true);
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.locator("#runtimeStatus").getByText("靜態題庫已載入").waitFor();
  await page.goto(`${pageUrl}#view=mock&mode=listening&seed=116`, { waitUntil: "domcontentloaded" });
  await page.locator("#startMock").waitFor();
  await page.locator("#startMock").click();
  await page.locator("fieldset.question").first().waitFor();
  assert.equal(await page.locator("fieldset.question").count(), 21);
  assert.equal(await page.locator("figure.question-asset img").first().evaluate((image) => image.complete && image.naturalWidth > 0), true);
  assert.equal(await page.locator("audio").first().evaluate((element) => element.readyState >= 1), true);
  assert.deepEqual(errors, []);
  await context.close();
});
