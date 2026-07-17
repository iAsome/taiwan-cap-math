import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import AxeBuilder from "@axe-core/playwright";
import { chromium, firefox, webkit } from "playwright";

const repoRoot = path.resolve(fileURLToPath(new URL("../..", import.meta.url)));
const pagePath = `/${encodeURIComponent("自然會考作戰室")}/index.html`;
const MIME = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".mjs", "text/javascript; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".webmanifest", "application/manifest+json"],
]);

function staticServer() {
  return createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url, "http://127.0.0.1").pathname);
      let file = path.resolve(repoRoot, pathname.replace(/^\/+/, ""));
      assert(file === repoRoot || file.startsWith(`${repoRoot}${path.sep}`), "request escaped repository root");
      if ((await stat(file)).isDirectory()) file = path.join(file, "index.html");
      response.writeHead(200, {
        "content-type": MIME.get(path.extname(file).toLowerCase()) || "application/octet-stream",
        "cache-control": "no-store",
      });
      response.end(await readFile(file));
    } catch (error) {
      response.writeHead(404, { "content-type": "text/plain; charset=utf-8" }).end(`Not found: ${error.message}`);
    }
  });
}

function captureErrors(page) {
  const errors = [];
  page.on("console", (message) => { if (message.type() === "error") errors.push(`console: ${message.text()}`); });
  page.on("pageerror", (error) => errors.push(`page: ${error.message}`));
  return errors;
}

async function axeClean(page, label) {
  const { violations } = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
  assert.deepEqual(violations.map(({ id, impact, nodes }) => ({ id, impact, nodes: nodes.length })), [], `${label}: axe violations`);
}

async function openReady(context, url) {
  const page = await context.newPage();
  const errors = captureErrors(page);
  await page.goto(url, { waitUntil: "networkidle" });
  try {
    await page.locator("#setupStatus").filter({ hasText: "題庫已就緒" }).waitFor();
  } catch {
    throw new Error(`setup failed: ${page.url()} | ${(await page.content()).slice(0, 500)} | ${errors.join(" | ")}`);
  }
  return { page, errors };
}

async function startExam(page, seed = "115", count = 50) {
  await page.locator("#seedInput").fill(seed);
  await page.locator("#countInput").fill(String(count));
  await page.locator('#setupForm button[type="submit"]').focus();
  await page.keyboard.press("Enter");
  await page.locator(".question").nth(count - 1).waitFor();
  assert.equal(await page.locator(".question").count(), count);
}

async function runMainBrowser(name, engine, url) {
  const browser = await engine.launch({ headless: true });
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1280, height: 900 } });
  try {
    const { page, errors } = await openReady(context, url);
    assert.equal(await page.title(), "自然科整合模擬考");
    assert.equal((await page.locator(".eyebrow").textContent()).trim(), "CAP R4 原創練習");
    assert.match(await page.locator(".setup-band p").first().textContent(), /預設 50 題.*45 至 55 題/u);
    await page.evaluate(() => document.activeElement?.blur());
    if (name === "webkit") await page.locator(".skip-link").focus();
    else await page.keyboard.press("Tab");
    assert.equal(await page.locator(".skip-link").evaluate((element) => element === document.activeElement), true, `${name}: skip link focus`);
    await page.keyboard.press("Enter");
    assert.equal(await page.locator("#main").evaluate((element) => element === document.activeElement), true, `${name}: skip link target`);
    await axeClean(page, `${name} setup`);

    await startExam(page);
    const ids = await page.locator(".question").evaluateAll((items) => items.map((item) => item.dataset.questionId));
    assert.equal(new Set(ids).size, 50, `${name}: duplicate question IDs`);
    assert.equal(await page.locator(".stimulus").count(), 5, `${name}: shared stimulus count`);
    assert.equal(await page.locator(".stimulus .group-label").allTextContents().then((items) => new Set(items).size), 5, `${name}: stimulus rendered more than once`);
    assert.equal(await page.locator("#timer").textContent(), "70:00");
    assert.match(await page.locator("#subjectCounts").textContent(), /理化 26.*生物 13.*地球科學 11/u);
    assert.ok((await page.locator(".table-wrap").count()) >= 5, `${name}: data tables missing`);
    assert.ok((await page.locator("figure.science-figure").count()) >= 3, `${name}: science figures missing`);
    for (const image of await page.locator("figure.science-figure img").all()) {
      await image.scrollIntoViewIfNeeded();
      await image.evaluate((element) => element.complete || new Promise((resolve) => element.addEventListener("load", resolve, { once: true })));
      assert.equal(await image.evaluate((element) => element.complete && element.naturalWidth > 0), true, `${name}: figure failed to render`);
      assert.ok((await image.getAttribute("alt"))?.trim(), `${name}: figure alt missing`);
    }

    const firstRadio = page.locator('.question input[type="radio"]').first();
    await firstRadio.focus();
    await page.keyboard.press("Space");
    assert.equal(await firstRadio.isChecked(), true, `${name}: keyboard radio selection`);
    assert.match(await page.locator("#progressText").textContent(), /已答 1 題/u);
    await axeClean(page, `${name} exam`);

    await page.setViewportSize({ width: 390, height: 844 });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1), true, `${name}: mobile overflow`);
    assert.equal(await page.locator("#submitExam").isVisible(), true, `${name}: mobile submit hidden`);
    await page.emulateMedia({ media: "print" });
    assert.equal(await page.locator(".exam-toolbar").evaluate((element) => getComputedStyle(element).display), "none", `${name}: toolbar printed`);
    assert.notEqual(await page.locator(".question").first().evaluate((element) => getComputedStyle(element).display), "none", `${name}: questions hidden in print`);
    await page.emulateMedia({ media: "screen" });

    await page.setViewportSize({ width: 1280, height: 900 });
    await page.locator("#submitExam").click();
    await page.locator("#resultShell:not([hidden])").waitFor();
    assert.equal(await page.locator(".review-item").count(), 50, `${name}: review count`);
    assert.equal(await page.locator(".review-item .rationales li").count(), 200, `${name}: option rationale count`);
    assert.equal(await page.locator('.review-item a:has-text("複習")').count(), 50, `${name}: remediation links`);
    assert.deepEqual(errors, [], `${name}: browser errors`);
  } finally {
    await context.close();
    await browser.close();
  }
}

async function runChromiumRecoveryAndOffline(url) {
  const browser = await chromium.launch({ headless: true });
  try {
    const context = await browser.newContext();
    await context.addInitScript(() => {
      localStorage.setItem("cap8.r4.biology.progress.v1", JSON.stringify({ completedSkillIds: ["BIO_R4_S001"] }));
      localStorage.setItem("capPhysics.previous", JSON.stringify({ completed: ["PHYCHM_R4_S001"] }));
    });
    const { page, errors } = await openReady(context, url);
    const migration = await page.evaluate(() => ({
      biology: localStorage.getItem("cap8.r4.biology.progress.v1"),
      physics: localStorage.getItem("capPhysics.previous"),
      backup: JSON.parse(localStorage.getItem("cap8.r4.integratedNatural.legacyBackup.v1")),
      progress: JSON.parse(localStorage.getItem("cap8.r4.integratedNatural.progress.v1")),
    }));
    assert.equal(migration.biology, '{"completedSkillIds":["BIO_R4_S001"]}');
    assert.equal(migration.physics, '{"completed":["PHYCHM_R4_S001"]}');
    assert.deepEqual(migration.progress.legacy.completedSkillIds, ["BIO_R4_S001", "PHYCHM_R4_S001"]);
    assert.equal(migration.backup.raw["capPhysics.previous"], migration.physics);

    await page.evaluate(async () => {
      await navigator.serviceWorker.ready;
      if (!navigator.serviceWorker.controller) await new Promise((resolve) => navigator.serviceWorker.addEventListener("controllerchange", resolve, { once: true }));
    });
    await context.setOffline(true);
    await page.reload({ waitUntil: "domcontentloaded" });
    await page.locator("#setupStatus").filter({ hasText: "題庫已就緒" }).waitFor();
    await startExam(page, "offline", 45);
    assert.equal(await page.locator(".question").count(), 45);
    assert.equal(await page.locator("figure.science-figure img").first().evaluate((element) => element.complete && element.naturalWidth > 0), true, "offline figure");
    assert.deepEqual(errors, [], "offline browser errors");
    await context.close();

    const denied = await browser.newContext();
    await denied.addInitScript(() => {
      Storage.prototype.getItem = () => { throw new DOMException("denied", "SecurityError"); };
      Storage.prototype.setItem = () => { throw new DOMException("denied", "SecurityError"); };
      Storage.prototype.key = () => { throw new DOMException("denied", "SecurityError"); };
    });
    const deniedPage = await denied.newPage();
    const deniedErrors = captureErrors(deniedPage);
    await deniedPage.goto(url, { waitUntil: "networkidle" });
    await deniedPage.locator("#setupStatus").filter({ hasText: "題庫已就緒" }).waitFor();
    await startExam(deniedPage, "denied", 45);
    assert.equal(await deniedPage.locator(".question").count(), 45);
    assert.deepEqual(deniedErrors, [], "storage-denied browser errors");
    await denied.close();
  } finally {
    await browser.close();
  }
}

const server = staticServer();
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
try {
  const url = `http://127.0.0.1:${server.address().port}${pagePath}`;
  for (const [name, engine] of [["chromium", chromium], ["firefox", firefox], ["webkit", webkit]]) await runMainBrowser(name, engine, url);
  await runChromiumRecoveryAndOffline(url);
  console.log("integrated-natural-browser.test: OK — Chromium, Firefox, WebKit, WCAG, keyboard, mobile, print, offline, migration");
} finally {
  await new Promise((resolve) => server.close(resolve));
}
