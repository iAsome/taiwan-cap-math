import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import net from "node:net";
import { parseArgs, readJson, writeJson, assert } from "./lib/common.mjs";
import { launchBrowser, waitUntil } from "./lib/cdp.mjs";

const args = parseArgs(process.argv.slice(2));
assert(args.repo && args.root, "Usage: --repo --root");
const repo = path.resolve(args.repo), root = path.resolve(args.root);
const expected = readJson(path.join(root, "tooling/EXPECTED-RESULTS.json"));
const evidence = path.join(root, "evidence");
const screenshots = path.join(evidence, "screenshots");
fs.mkdirSync(screenshots, { recursive: true });

const mime = new Map([
  [".html","text/html; charset=utf-8"],[".js","text/javascript; charset=utf-8"],[".mjs","text/javascript; charset=utf-8"],
  [".json","application/json; charset=utf-8"],[".css","text/css; charset=utf-8"],[".svg","image/svg+xml; charset=utf-8"],
  [".jpg","image/jpeg"],[".png","image/png"],[".pdf","application/pdf"]
]);
const freePort = () => new Promise((resolve, reject) => {
  const server = net.createServer(); server.once("error", reject);
  server.listen(0, "127.0.0.1", () => { const { port } = server.address(); server.close(() => resolve(port)); });
});
let server, browser;
const requests = [], consoleErrors = [], runtimeExceptions = [], networkErrors = [], tests = [];
const record = (name, pass, details = {}) => { tests.push({ name, pass: Boolean(pass), ...details }); assert(pass, `${name}: ${JSON.stringify(details)}`); };

try {
  const port = await freePort();
  server = http.createServer((request, response) => {
    try {
      const decoded = decodeURIComponent((request.url || "/").split("?")[0]);
      const rel = path.posix.normalize(decoded).replace(/^\/+/, "") || "index.html";
      if (rel.includes("..")) throw new Error("Traversal rejected");
      const candidate = path.resolve(repo, rel);
      if (!candidate.startsWith(repo + path.sep)) throw new Error("Outside repository");
      const file = fs.existsSync(candidate) && fs.statSync(candidate).isDirectory() ? path.join(candidate, "index.html") : candidate;
      const exists = fs.existsSync(file) && fs.statSync(file).isFile();
      requests.push({ url: request.url, status: exists ? 200 : 404 });
      if (!exists) { response.writeHead(404); response.end("Not found"); return; }
      response.writeHead(200, { "content-type": mime.get(path.extname(file).toLowerCase()) || "application/octet-stream", "cache-control": "no-store" });
      fs.createReadStream(file).pipe(response);
    } catch (error) { response.writeHead(400); response.end(String(error.message || error)); }
  });
  await new Promise((resolve, reject) => { server.once("error", reject); server.listen(port, "127.0.0.1", resolve); });
  browser = await launchBrowser();

  async function open(url) {
    const page = await browser.newPage("about:blank");
    await page.send("Page.enable"); await page.send("Runtime.enable"); await page.send("Network.enable");
    page.on("Runtime.consoleAPICalled", event => {
      if (["error","assert"].includes(event.type)) consoleErrors.push({ url, text: event.args?.map(x => x.value || x.description).join(" ") });
    });
    page.on("Runtime.exceptionThrown", event => runtimeExceptions.push({ url, text: event.exceptionDetails?.exception?.description || event.exceptionDetails?.text }));
    page.on("Network.loadingFailed", event => networkErrors.push({ url, errorText: event.errorText }));
    page.on("Network.responseReceived", event => { if (event.response?.status >= 400) networkErrors.push({ url: event.response.url, status: event.response.status }); });
    const loaded = page.waitFor("Page.loadEventFired", 30000);
    const nav = await page.send("Page.navigate", { url });
    await loaded.catch(() => {});
    assert(!nav.errorText, nav.errorText || "Navigation failed");
    return page;
  }

  const base = `http://127.0.0.1:${port}/數學會考作戰室/index.html`;

  let page = await open(`${base}?generated=1&seed-origin=1`);
  await waitUntil(page, `document.documentElement.dataset.mathEngine === "generated-v2-rollback" && window.EXAM_ENGINE`, 120000);
  await page.evaluate(`(() => {
    localStorage.clear();
    localStorage.setItem("capMath.completed", JSON.stringify(["u01","u02"]));
    localStorage.setItem("capMath.humanRc.r1.completed", JSON.stringify(["u03"]));
    localStorage.setItem("capMath.paperHistory", JSON.stringify([{id:"generated-history-backup-test"}]));
    localStorage.setItem("capMath.humanRc.r1.paperHistory", JSON.stringify([]));
    return true;
  })()`);
  record("generated-v2-query-rollback", true, { engine: "generated-v2-rollback" });
  page.close();

  page = await open(base);
  await waitUntil(page, `document.documentElement.dataset.mathEngine === "human-production-r1" && window.__HUMAN_PRODUCTION_R1__ && window.__HUMAN_PRODUCTION_BOOTSTRAP_READY__ === true`, 120000);
  const human = await page.evaluate(`(async () => {
    const api = window.__HUMAN_PRODUCTION_R1__;
    const mockA = await window.EXAM_ENGINE.generate(11527, 2);
    const mockB = await window.EXAM_ENGINE.generate(11527, 2);
    const mockC = await window.EXAM_ENGINE.generate(11528, 2);
    const quizResults = [];
    for (const item of api.quizCatalog) {
      const a = await window.EXAM_ENGINE.generateQuiz(item.quizId, 11527);
      const b = await window.EXAM_ENGINE.generateQuiz(item.quizId, 11527);
      quizResults.push({
        quizId: item.quizId,
        count: a.questions.length,
        deterministic: JSON.stringify(a.questions.map(q => q.id || q.text)) === JSON.stringify(b.questions.map(q => q.id || q.text))
      });
    }
    return {
      contentVersion: api.runtime.manifest.contentVersion,
      counts: {
        units: api.runtime.manifest.unitCount,
        skills: api.runtime.manifest.skillCount,
        lectures: api.runtime.manifest.lectureCount,
        mcQuestions: api.runtime.manifest.mcQuestionCount,
        constructedResponses: api.runtime.manifest.constructedResponseCount,
        figures: api.runtime.manifest.figureCount
      },
      mock: {
        mc: mockA.questions.filter(q => q.type === "mc").length,
        cr: mockA.questions.filter(q => q.type !== "mc").length,
        minutes: mockA.minutes,
        sameSeed: JSON.stringify(mockA.questions.map(q => q.id)) === JSON.stringify(mockB.questions.map(q => q.id)),
        differentSeed: JSON.stringify(mockA.questions.map(q => q.id)) !== JSON.stringify(mockC.questions.map(q => q.id))
      },
      quizResults,
      completed: JSON.parse(localStorage.getItem("capMath.human.r1.completed") || "[]"),
      legacyBackup: JSON.parse(localStorage.getItem("capMath.human.r1.legacyPaperHistoryBackup") || "[]"),
      migration: JSON.parse(localStorage.getItem("capMath.human.r1.migration.r1") || "null"),
      sourceKeysStillPresent: [
        localStorage.getItem("capMath.completed") !== null,
        localStorage.getItem("capMath.paperHistory") !== null,
        localStorage.getItem("capMath.humanRc.r1.completed") !== null
      ]
    };
  })()`);
  record("human-production-default",
    human.contentVersion === expected.contentVersion &&
    Object.entries(expected.expectedCounts).every(([key, value]) => human.counts[key] === value), human);
  record("human-production-mock",
    human.mock.mc === 25 && human.mock.cr === 2 && human.mock.minutes === 80 &&
    human.mock.sameSeed && human.mock.differentSeed, human.mock);
  record("all-23-unit-quizzes",
    human.quizResults.length === 23 && human.quizResults.every(item => item.count > 0 && item.deterministic), { quizResults: human.quizResults });
  record("production-storage-migration",
    ["u01","u02","u03"].every(id => human.completed.includes(id)) &&
    human.legacyBackup[0]?.id === "generated-history-backup-test" &&
    human.migration?.status === "COMPLETE" &&
    human.sourceKeysStillPresent.every(Boolean), human);
  await page.evaluate(`document.querySelector('[data-view="exam"]')?.click()`);
  await waitUntil(page, `document.getElementById("generateExam")`, 30000);
  await page.evaluate(`document.getElementById("generateExam").click()`);
  await waitUntil(page, `document.querySelectorAll("#paper article.question").length === 27`, 120000);
  const desktop = await page.evaluate(`(() => ({
    questionCount: document.querySelectorAll("#paper article.question").length,
    crCount: document.querySelectorAll("#paper article.constructed-question").length,
    timer: document.getElementById("timer")?.textContent,
    width: document.documentElement.scrollWidth,
    client: document.documentElement.clientWidth
  }))()`);
  record("production-exam-ui", desktop.questionCount === 27 && desktop.crCount === 2 && desktop.timer === "80:00", desktop);
  await page.screenshot(path.join(screenshots, "human-production-desktop-exam.jpg"));
  await page.send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
  const mobile = await page.evaluate(`(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    questionCount: document.querySelectorAll("#paper article.question").length
  }))()`);
  record("production-mobile-layout", mobile.scrollWidth <= mobile.clientWidth + 1 && mobile.questionCount === 27, mobile);
  await page.screenshot(path.join(screenshots, "human-production-mobile-exam.jpg"));
  page.close();

  page = await open(`${base}?legacy=1`);
  await waitUntil(page, `document.documentElement.dataset.mathEngine === "v1-rollback" && document.getElementById("mainNav")`, 120000);
  record("v1-query-rollback", true, { engine: "v1-rollback" });
  page.close();

  assert(consoleErrors.length === 0, `Console errors: ${JSON.stringify(consoleErrors)}`);
  assert(runtimeExceptions.length === 0, `Runtime exceptions: ${JSON.stringify(runtimeExceptions)}`);
  assert(networkErrors.length === 0, `Network errors: ${JSON.stringify(networkErrors)}`);

  const report = {
    status: "PASS_LIVE_HUMAN_PRODUCTION_BROWSER_GATE_R1",
    browserExecutable: browser.executable,
    browserVersion: browser.browserVersion,
    tests,
    passed: tests.filter(test => test.pass).length,
    failed: tests.filter(test => !test.pass).length,
    httpRequestCount: requests.length,
    consoleErrors, runtimeExceptions, networkErrors,
    productionActivated: true,
    generatedV2RollbackAvailable: true,
    v1RollbackAvailable: true,
    oldDatabaseDeletionAllowed: false
  };
  writeJson(path.join(evidence, "live-production-browser-gate.json"), report);
  console.log(JSON.stringify(report, null, 2));
} finally {
  if (browser) await browser.close();
  if (server) await new Promise(resolve => server.close(resolve));
}
