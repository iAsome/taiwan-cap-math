import assert from "node:assert/strict";
import { createServer } from "node:http";
import { mkdir, readFile } from "node:fs/promises";
import { dirname, extname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

import AxeBuilder from "@axe-core/playwright";
import { chromium, firefox, webkit } from "playwright";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const screenshotDir = process.env.INTEGRATED_SOCIAL_SCREENSHOT_DIR;
const mime = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json; charset=utf-8",
};

function startServer() {
  const server = createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
      const requested = pathname.endsWith("/") ? `${pathname}index.html` : pathname;
      const path = resolve(repoRoot, `.${requested}`);
      if (path !== repoRoot && !path.startsWith(`${repoRoot}${sep}`)) throw new Error("invalid path");
      const bytes = await readFile(path);
      response.writeHead(200, { "content-type": mime[extname(path)] ?? "application/octet-stream", "cache-control": "no-store" });
      response.end(bytes);
    } catch {
      response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      response.end("Not found");
    }
  });
  return new Promise((accept) => server.listen(0, "127.0.0.1", () => accept(server)));
}

async function assertAccessible(page, label) {
  const result = await new AxeBuilder({ page }).analyze();
  assert.deepEqual(result.violations.map((violation) => ({ id: violation.id, nodes: violation.nodes.length })), [], `${label}: axe violations`);
}

async function capture(page, name) {
  if (!screenshotDir) return;
  await mkdir(screenshotDir, { recursive: true });
  await page.evaluate(() => scrollTo(0, 0));
  await page.evaluate(() => new Promise((accept) => requestAnimationFrame(() => accept())));
  await page.screenshot({ path: join(screenshotDir, `${name}.png`), fullPage: false });
}

async function runDesktop(browserType, name, baseUrl) {
  const browser = await browserType.launch({ headless: true });
  try {
    const context = await browser.newContext({ locale: "zh-TW" });
    const page = await context.newPage();
    const errors = [];
    page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(`${baseUrl}/%E7%A4%BE%E6%9C%83%E6%9C%83%E8%80%83%E4%BD%9C%E6%88%B0%E5%AE%A4/?seed=12345&count=54`, { waitUntil: "networkidle" });
    await assert.equal(await page.title(), "社會科整合模考｜會考作戰室");
    await assertAccessible(page, `${name} setup`);
    if (name === "chromium") await capture(page, "desktop-setup");
    await page.locator("#startButton").click();
    await page.locator("#examView").waitFor({ state: "visible" });
    assert.equal(await page.evaluate(() => scrollY), 0, `${name}: exam opens at the page top`);
    assert.match(await page.locator(".topbar").textContent(), /社會科整合模考/, `${name}: header remains visible`);
    assert.equal(await page.locator(".question-card").count(), 54, `${name}: question count`);
    assert.equal(await page.locator(".stimulus-block").count(), 4, `${name}: cross-domain set count`);
    assert.equal(await page.locator(".stimulus-block table").count(), 2, `${name}: calibrated table sets`);
    assert.equal(await page.locator(".stimulus-block table caption").count(), 2, `${name}: accessible table captions`);
    assert.ok(await page.locator(".stimulus-block tbody th[scope='row']").count() >= 6, `${name}: row headers`);
    assert.match(await page.locator("#examMeta").textContent(), /地理 17、歷史 19、公民 18/);
    assert.equal(await page.locator(".stimulus-block").evaluateAll((nodes) => new Set(nodes.map((node) => node.dataset.setId)).size), 4);
    await page.locator(".question-card input").first().focus();
    await page.keyboard.press("Space");
    assert.match(await page.locator("#answerProgress").textContent(), /已答 1／54 題/, `${name}: keyboard answer selection`);
    await assertAccessible(page, `${name} exam`);
    if (name === "chromium") await capture(page, "desktop-exam");
    await page.locator(".question-card").evaluateAll((cards) => cards.forEach((card) => card.querySelector("input")?.click()));
    assert.match(await page.locator("#answerProgress").textContent(), /已答 54／54 題/);
    await page.locator("#submitButton").click();
    await page.locator("#resultView").waitFor({ state: "visible" });
    assert.equal(await page.locator(".stat").count(), 3, `${name}: subject remediation stats`);
    assert.equal(await page.locator(".review-item").count(), 54, `${name}: answer review count`);
    assert.doesNotMatch(await page.locator("#answerReview").textContent(), /這項(?:內容無法支持|證據可直接支持)題幹所要求的地理判斷/);
    await assertAccessible(page, `${name} result`);
    if (name === "chromium") await capture(page, "desktop-result");
    await page.emulateMedia({ media: "print" });
    assert.equal(await page.locator("#printButton").evaluate((node) => getComputedStyle(node).display), "none", `${name}: print controls hidden`);
    assert.deepEqual(errors, [], `${name}: console errors`);
    await context.close();
  } finally {
    await browser.close();
  }
}

async function runMobileAndOffline(baseUrl) {
  const browser = await chromium.launch({ headless: true });
  try {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, locale: "zh-TW" });
    const page = await context.newPage();
    await page.goto(`${baseUrl}/%E7%A4%BE%E6%9C%83%E6%9C%83%E8%80%83%E4%BD%9C%E6%88%B0%E5%AE%A4/?seed=mobile&count=50`, { waitUntil: "networkidle" });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), true, "mobile setup must not overflow");
    await capture(page, "mobile-setup");
    await page.locator("#startButton").click();
    assert.equal(await page.evaluate(() => scrollY), 0, "mobile exam opens at the page top");
    assert.equal(await page.locator(".question-card").count(), 50);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), true, "mobile exam must not overflow");
    await capture(page, "mobile-exam");
    await page.evaluate(() => navigator.serviceWorker.ready.then(() => true));
    await context.setOffline(true);
    await page.reload({ waitUntil: "domcontentloaded" });
    await page.locator("#setupView").waitFor({ state: "visible" });
    assert.equal(await page.locator("#networkStatus").textContent(), "離線可用");
    await page.locator("#startButton").click();
    assert.equal(await page.locator(".question-card").count(), 50, "offline catalog available");
    await context.close();
  } finally {
    await browser.close();
  }
}

const server = await startServer();
try {
  const address = server.address();
  const baseUrl = `http://127.0.0.1:${address.port}`;
  for (const [name, browserType] of [["chromium", chromium], ["firefox", firefox], ["webkit", webkit]]) await runDesktop(browserType, name, baseUrl);
  await runMobileAndOffline(baseUrl);
  console.log("integrated-social-browser.test: OK — Chromium, Firefox, WebKit, axe, mobile, print, offline");
} finally {
  await new Promise((accept, reject) => server.close((error) => error ? reject(error) : accept()));
}
