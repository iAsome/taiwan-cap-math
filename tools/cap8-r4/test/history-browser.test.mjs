import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import AxeBuilder from "@axe-core/playwright";
import { chromium, firefox, webkit } from "playwright";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..", "..", "..");
const HISTORY_URL = "/%E6%AD%B7%E5%8F%B2%E6%9C%83%E8%80%83%E4%BD%9C%E6%88%B0%E5%AE%A4/r4/";
const MIME = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml; charset=utf-8"],
  [".pdf", "application/pdf"],
]);

function serveRepository() {
  const server = createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
      const relative = pathname.replace(/^\/+/, "");
      let file = path.resolve(ROOT, relative || "index.html");
      assert(file === ROOT || file.startsWith(`${ROOT}${path.sep}`), "request escaped repository root");
      if ((await stat(file)).isDirectory()) file = path.join(file, "index.html");
      const body = await readFile(file);
      response.writeHead(200, { "content-type": MIME.get(path.extname(file).toLowerCase()) ?? "application/octet-stream", "cache-control": "no-store" });
      response.end(body);
    } catch (error) {
      response.writeHead(error?.code === "ENOENT" ? 404 : 500, { "content-type": "text/plain; charset=utf-8" });
      response.end(error?.code === "ENOENT" ? "Not found" : String(error?.message ?? error));
    }
  });
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      resolve({ server, origin: `http://127.0.0.1:${address.port}` });
    });
  });
}

async function openHistory(browserType, origin, options = {}) {
  const browser = await browserType.launch({ headless: true });
  const context = await browser.newContext(options);
  const page = await context.newPage();
  const errors = [];
  page.on("console", (message) => { if (message.type() === "error") errors.push(`console: ${message.text()}`); });
  page.on("pageerror", (error) => errors.push(`page: ${error.message}`));
  await page.goto(`${origin}${HISTORY_URL}`, { waitUntil: "networkidle" });
  await page.waitForSelector("#overview:not([hidden])");
  return { browser, context, page, errors };
}

async function closeServer(server) {
  await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
}

for (const [name, browserType] of Object.entries({ chromium, firefox, webkit })) {
  test(`History R4 works in ${name} without accessibility or console failures`, { timeout: 180_000 }, async (t) => {
    const { server, origin } = await serveRepository();
    t.after(() => closeServer(server));
    const { browser, context, page, errors } = await openHistory(browserType, origin);
    t.after(() => browser.close());

    assert.match(await page.locator("#counts").innerText(), /2,?880/u);
    assert.equal(await page.locator("#unitGrid [data-unit]").count(), 36);

    await page.getByRole("button", { name: "講義" }).click();
    await page.waitForSelector("#lectureContent header");
    await page.locator("#lectureSelect").selectOption("HIS_R4_S044");
    await page.waitForSelector("#lectureContent .asset img");
    assert.match(await page.locator("#lectureContent header p").innerText(), /^第 7 單元$/u);
    assert(!(await page.locator("#lectureContent").innerText()).includes("HIS_R4_S044"));
    assert((await page.locator("#lectureContent .asset img").evaluate((image) => image.naturalWidth)) > 0);
    assert.match(await page.locator("#lectureContent .asset img").getAttribute("alt"), /滬尾略在北部東側的雞籠以北/u);
    assert.equal(await page.locator("#lectureContent .asset table").count(), 1);
    assert.deepEqual(await page.locator("#lectureContent .asset tbody tr td:nth-child(2)").allTextContents(), ["滬尾（淡水）", "雞籠（基隆）", "安平", "打狗（高雄）"]);
    assert.equal(await page.getByRole("heading", { name: "先備技能" }).count(), 1);
    assert((await page.locator("#lectureContent .self-check").count()) >= 3);
    await page.locator("#lectureContent .self-check summary").first().click();
    assert.match(await page.locator("#lectureContent .self-check details").first().innerText(), /答案：/u);
    const completeButton = page.locator("#completeSkill");
    await completeButton.focus();
    await completeButton.press("Enter");
    assert.equal(await page.locator(":focus").getAttribute("id"), "completeSkill");
    assert.equal(await completeButton.getAttribute("aria-pressed"), "true");
    await completeButton.press("Enter");

    await page.getByRole("button", { name: "練習" }).click();
    await page.locator("#practiceUnit").selectOption("HIS_R4_U07");
    await page.locator("#questionCount").fill("5");
    await page.locator("#stimulusCount").fill("1");
    await page.locator("#seedInput").fill("11507");
    await page.locator("#practiceForm").evaluate((form) => form.requestSubmit());
    await page.waitForSelector("#paper:not([hidden]) fieldset");
    assert.equal(await page.locator("#paper fieldset").count(), 8);
    assert.equal(await page.locator("#paper .stimulus").count(), 1);
    for (const fieldset of await page.locator("#paper fieldset").all()) await fieldset.locator("input").first().check();
    await page.getByRole("button", { name: "交卷並看詳解" }).click();
    assert.match(await page.locator("#result").innerText(), /本次答對 \d+／8 題/u);
    assert.equal(await page.locator("#paper .explanation:not([hidden])").count(), 8);
    assert.equal(await page.locator("#submitButton").isDisabled(), true);
    await page.locator("#submitButton").evaluate((button) => button.click());

    const accessibility = await new AxeBuilder({ page }).analyze();
    assert.deepEqual(accessibility.violations.map((item) => ({ id: item.id, targets: item.nodes.map((node) => node.target) })), []);
    assert.deepEqual(errors, []);

    const stored = await page.evaluate(() => JSON.parse(localStorage.getItem("cap8.r4.history.v1")));
    assert.equal(stored.attempts[0].total, 8);
    assert.equal(stored.attempts.length, 1);
    await context.close();
  });
}

test("History R4 keyboard, mobile, print, migration, and complete offline cache remain usable", { timeout: 360_000 }, async (t) => {
  const { server, origin } = await serveRepository();
  t.after(() => closeServer(server));
  const { browser, context, page, errors } = await openHistory(chromium, origin, { viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
  t.after(() => browser.close());

  await page.evaluate(() => {
    localStorage.setItem("capHistory.paperHistory", JSON.stringify([{ id: "browser-old", correct: 4, total: 5, finishedAt: "2026-01-01T00:00:00.000Z", exam: { seed: 106 } }]));
    localStorage.setItem("capHistory.completed", JSON.stringify(["u1", "u2"]));
    localStorage.removeItem("cap8.r4.history.v1");
    localStorage.removeItem("cap8.r4.history.migrationBackup.v1");
  });
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForSelector("#overview:not([hidden])");
  const migration = await page.evaluate(() => ({
    old: localStorage.getItem("capHistory.paperHistory"),
    backup: JSON.parse(localStorage.getItem("cap8.r4.history.migrationBackup.v1")),
    current: JSON.parse(localStorage.getItem("cap8.r4.history.v1")),
  }));
  assert.match(migration.old, /browser-old/u);
  assert.match(migration.backup.entries["capHistory.paperHistory"], /browser-old/u);
  assert.equal(migration.current.attempts[0].legacyId, "browser-old");
  const backup = await page.evaluate(() => localStorage.getItem("cap8.r4.history.migrationBackup.v1"));
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForSelector("#overview:not([hidden])");
  assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem("cap8.r4.history.v1")).attempts.filter((attempt) => attempt.legacyId === "browser-old").length), 1);
  assert.equal(await page.evaluate(() => localStorage.getItem("cap8.r4.history.migrationBackup.v1")), backup);

  await page.getByRole("button", { name: "進度" }).click();
  assert.match(await page.locator("#progressContent").innerText(), /舊版 2 個完成標記已保留/u);
  await page.getByRole("button", { name: "總覽" }).click();

  await page.getByRole("button", { name: "下載完整離線內容" }).click();
  await page.waitForFunction(() => {
    const button = document.querySelector("#offlineButton");
    return !button.disabled && button.textContent === "下載完整離線內容";
  }, null, { timeout: 240_000 });
  const cachedUrls = await page.evaluate(async () => {
    const keys = await caches.keys();
    const key = keys.find((value) => value === "cap8-r4-history-4.0.0");
    return key ? (await (await caches.open(key)).keys()).length : 0;
  });
  assert(cachedUrls >= 3840, `full offline cache is incomplete: ${cachedUrls} URLs`);

  await page.reload({ waitUntil: "networkidle" });
  await page.waitForSelector("#overview:not([hidden])");
  await page.keyboard.press("Tab");
  assert.equal(await page.locator(":focus").innerText(), "跳到主要內容");
  await page.keyboard.press("Enter");
  assert.equal(await page.locator(":focus").getAttribute("id"), "main");
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  assert(overflow <= 1, `mobile horizontal overflow: ${overflow}px`);
  assert.equal(await page.locator("body").evaluate((node) => getComputedStyle(node).scrollBehavior), "auto");

  await page.getByRole("button", { name: "練習" }).click();
  await page.locator("#questionCount").fill("5");
  await page.locator("#stimulusCount").fill("0");
  await page.locator("#practiceForm").evaluate((form) => form.requestSubmit());
  await page.waitForSelector("#paper:not([hidden])");
  await page.emulateMedia({ media: "print" });
  assert.equal(await page.locator(".topbar").evaluate((node) => getComputedStyle(node).display), "none");
  assert.notEqual(await page.locator("#paper").evaluate((node) => getComputedStyle(node).display), "none");
  assert.equal(await page.locator("#paper fieldset").first().evaluate((node) => getComputedStyle(node).breakInside), "avoid");
  await page.emulateMedia({ media: "screen" });

  await page.goto(`${origin}${HISTORY_URL}`, { waitUntil: "networkidle" });
  await page.waitForSelector("#overview:not([hidden])");
  await page.evaluate(async () => { await navigator.serviceWorker.ready; });
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForSelector("#overview:not([hidden])");
  assert.equal(await page.evaluate(() => Boolean(navigator.serviceWorker.controller)), true);
  await context.setOffline(true);
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.waitForSelector("#overview:not([hidden])");
  assert.match(await page.locator("h1").first().innerText(), /歷史完整學習系統/u);
  assert.deepEqual(errors, []);
  await context.close();
});

test("History R4 exposes a useful index loading error", { timeout: 60_000 }, async (t) => {
  const { server, origin } = await serveRepository();
  t.after(() => closeServer(server));
  const browser = await chromium.launch({ headless: true });
  t.after(() => browser.close());
  const page = await browser.newPage();
  await page.route("**/runtime/index.json", (route) => route.fulfill({ status: 503, contentType: "application/json", body: "{}" }));
  await page.goto(`${origin}${HISTORY_URL}`, { waitUntil: "networkidle" });
  const error = page.locator("#loading[role=alert]");
  await error.waitFor();
  assert.match(await error.innerText(), /載入失敗：無法載入歷史 R4 索引（503）/u);
});
