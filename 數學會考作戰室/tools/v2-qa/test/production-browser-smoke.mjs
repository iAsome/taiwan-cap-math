import assert from "node:assert/strict";
import fs from "node:fs";
import http from "node:http";
import os from "node:os";
import path from "node:path";
import { spawn, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../../..");
const mathFolder = path.basename(path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../.."));
const chromeCandidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
].filter(Boolean);
const chrome = chromeCandidates.find(candidate => fs.existsSync(candidate));
if (!chrome) throw new Error("Chrome or Edge was not found");

const outputIndex = process.argv.indexOf("--output");
const outputPath = outputIndex >= 0 ? path.resolve(process.argv[outputIndex + 1]) : null;
if (outputIndex >= 0 && !process.argv[outputIndex + 1]) throw new Error("--output requires a path");

const mime = new Map([[".html", "text/html; charset=utf-8"], [".js", "text/javascript; charset=utf-8"], [".css", "text/css; charset=utf-8"], [".json", "application/json; charset=utf-8"], [".svg", "image/svg+xml"], [".pdf", "application/pdf"]]);
const server = http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  const target = path.resolve(repo, `.${pathname === "/" ? "/index.html" : pathname}`);
  if (!target.startsWith(`${repo}${path.sep}`) || !fs.existsSync(target) || fs.statSync(target).isDirectory()) {
    response.writeHead(404).end("Not found");
    return;
  }
  response.setHeader("Content-Type", mime.get(path.extname(target).toLowerCase()) || "application/octet-stream");
  fs.createReadStream(target).pipe(response);
});
await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
const sitePort = server.address().port;

const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "math-v2-browser-"));
const browser = spawn(chrome, [
  "--headless=new",
  "--disable-gpu",
  "--no-first-run",
  "--no-default-browser-check",
  "--remote-debugging-port=0",
  `--user-data-dir=${profileDir}`,
  "--window-size=1440,1000",
  "about:blank"
], { stdio: "ignore", windowsHide: true });

async function waitForFile(file, timeoutMs = 15000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (fs.existsSync(file)) return;
    await new Promise(resolve => setTimeout(resolve, 50));
  }
  throw new Error(`Timed out waiting for ${file}`);
}

class Cdp {
  constructor(url) {
    this.id = 0;
    this.pending = new Map();
    this.events = [];
    this.socket = new WebSocket(url);
    this.ready = new Promise((resolve, reject) => {
      this.socket.addEventListener("open", resolve, { once: true });
      this.socket.addEventListener("error", reject, { once: true });
    });
    this.socket.addEventListener("message", event => {
      const message = JSON.parse(event.data);
      if (message.id && this.pending.has(message.id)) {
        const { resolve, reject } = this.pending.get(message.id);
        this.pending.delete(message.id);
        message.error ? reject(new Error(message.error.message)) : resolve(message.result);
      } else if (message.method) this.events.push(message);
    });
  }
  async send(method, params = {}) {
    await this.ready;
    const id = ++this.id;
    const promise = new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
    this.socket.send(JSON.stringify({ id, method, params }));
    return promise;
  }
  close() { this.socket.close(); }
}

let cdp;
const report = { generatedAt: new Date().toISOString(), engine: "v2", measurementsMs: {}, assertions: [] };
const mark = (name, ok = true) => report.assertions.push({ name, ok });

async function evaluate(expression) {
  const result = await cdp.send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
  return result.result.value;
}

async function waitFor(expression, timeoutMs = 20000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (await evaluate(expression)) return;
    await new Promise(resolve => setTimeout(resolve, 75));
  }
  throw new Error(`Timed out: ${expression}`);
}

async function navigate(url) {
  await cdp.send("Page.navigate", { url });
  await waitFor("document.readyState === 'complete'");
}

try {
  const activePortFile = path.join(profileDir, "DevToolsActivePort");
  await waitForFile(activePortFile);
  const devtoolsPort = Number(fs.readFileSync(activePortFile, "utf8").split(/\r?\n/)[0]);
  const targets = await fetch(`http://127.0.0.1:${devtoolsPort}/json`).then(response => response.json());
  cdp = new Cdp(targets.find(target => target.type === "page").webSocketDebuggerUrl);
  await cdp.send("Page.enable");
  await cdp.send("Runtime.enable");
  await cdp.send("Log.enable");
  await cdp.send("Network.enable");

  const baseUrl = `http://127.0.0.1:${sitePort}/${encodeURIComponent(mathFolder)}/index.html`;
  const initialStart = performance.now();
  await navigate(baseUrl);
  await waitFor("window.MATH_V2_PRODUCTION_MODE === true && window.EXAM_ENGINE?.engine");
  report.measurementsMs.initialLoad = Number((performance.now() - initialStart).toFixed(2));
  assert.equal(await evaluate("document.documentElement.dataset.mathEngine"), "v2");
  assert.equal(await evaluate("Object.keys(window).filter(key => /^MATH_(QUESTION_BANK|LECTURE)_V2_U\\d{2}$/.test(key)).length"), 0);
  const initialResources = await evaluate("performance.getEntriesByType('resource').map(entry => entry.name.split('/').pop().split('?')[0])");
  assert(!initialResources.includes("questions.js"));
  assert(!initialResources.includes("quiz-variant-bank.js"));
  mark("default V2 loads no legacy banks and no V2 content bank initially");

  const lectureStart = performance.now();
  await evaluate("document.querySelector('[data-view=handbook]').click()");
  await waitFor("document.querySelectorAll('#unitContent .lecture-topic-card').length === 15");
  report.measurementsMs.openUnitLecture = Number((performance.now() - lectureStart).toFixed(2));
  assert.equal(await evaluate("Array.isArray(window.MATH_LECTURE_V2_U01)"), true);
  assert.equal(await evaluate("Array.isArray(window.MATH_QUESTION_BANK_V2_U01)"), false);
  assert.equal(await evaluate("document.querySelectorAll('#unitContent img, #unitContent svg, #unitContent canvas').length"), 0);
  mark("lecture bank lazy-loads without question bank or graphics");

  const quizStart = performance.now();
  await evaluate("document.querySelector('[data-view=quiz]').click()");
  await waitFor("document.querySelectorAll('[data-start-quiz]').length === 23");
  await evaluate("document.querySelector('[data-quiz-seed=u01-all-skills]').value='31415'; document.querySelector('[data-start-quiz=u01-all-skills]').click()");
  await waitFor("document.querySelectorAll('#paper .question').length === 15");
  report.measurementsMs.generateUnitQuiz = Number((performance.now() - quizStart).toFixed(2));
  assert.equal(await evaluate("new Set([...document.querySelectorAll('#paper .question')].map(item => item.textContent)).size"), 15);
  mark("U01 quiz renders one unique question per skill");

  await evaluate("document.querySelector('#switchFullExam').click(); document.querySelector('#seedInput').value='271828'; document.querySelector('#generateExam').click()");
  const mockStart = performance.now();
  await waitFor("document.querySelectorAll('#paper .question').length === 25");
  report.measurementsMs.generateMock = Number((performance.now() - mockStart).toFixed(2));
  assert.equal(await evaluate("document.querySelectorAll('#paper img, #paper svg, #paper canvas').length"), 0);
  assert.equal(await evaluate("window.EXAM_ENGINE.engine.loadedUnitIds().length < 23"), true);
  await evaluate("document.querySelectorAll('#paper .question').forEach(question => question.querySelector('.choice')?.click()); document.querySelector('#submitExam').click()");
  await waitFor("JSON.parse(localStorage.getItem('capMath.paperHistory') || '[]').length > 0");
  const saved = await evaluate("JSON.parse(localStorage.getItem('capMath.paperHistory'))[0]");
  assert.equal(saved.total, 25);
  assert.equal(saved.engineVersion, "2.1.0");
  assert.equal(saved.seed, 271828);
  mark("mock renders 25 text-only questions and saves versioned history");

  const historyStart = performance.now();
  await evaluate("document.querySelector('[data-view=papers]').click()");
  await waitFor("document.querySelectorAll('#paperHistoryList .paper-history-card').length > 0");
  report.measurementsMs.openPaperHistory = Number((performance.now() - historyStart).toFixed(2));
  mark("paper history opens saved V2 paper");

  await cdp.send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
  await navigate(baseUrl);
  await waitFor("window.MATH_V2_PRODUCTION_MODE === true");
  assert.equal(await evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1"), true);
  assert.equal(await evaluate("[...document.querySelectorAll('h1,h2,button')].every(el => { const r=el.getBoundingClientRect(); return r.width >= 0 && Number.isFinite(r.left) && Number.isFinite(r.right); })"), true);
  mark("mobile viewport has no horizontal overflow");

  await cdp.send("Emulation.clearDeviceMetricsOverride");
  await navigate(`${baseUrl}?legacy=1`);
  await waitFor("document.documentElement.dataset.mathEngine === 'v1-rollback' && window.EXAM_ENGINE?.generate && window.LECTURE_TAXONOMY");
  const legacyResources = await evaluate("performance.getEntriesByType('resource').map(entry => entry.name.split('/').pop().split('?')[0])");
  assert(legacyResources.includes("questions.js"));
  assert(legacyResources.includes("app-legacy.js"));
  assert.equal(await evaluate("window.MATH_V2_PRODUCTION_MODE === true"), false);
  mark("legacy rollback is functional and isolated");

  const browserErrors = cdp.events.filter(event => event.method === "Runtime.exceptionThrown" || (event.method === "Log.entryAdded" && event.params.entry.level === "error"));
  assert.deepEqual(browserErrors, []);
  report.browserErrors = 0;
  report.initialResourceCount = initialResources.length;
  if (outputPath) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  }
  console.log(`production-browser-smoke: OK — ${report.assertions.length} browser assertions`);
  console.log(JSON.stringify(report));
} finally {
  cdp?.close();
  browser.kill();
  if (process.platform === "win32") spawnSync("taskkill", ["/pid", String(browser.pid), "/T", "/F"], { stdio: "ignore", windowsHide: true });
  await new Promise(resolve => server.close(resolve));
  await new Promise(resolve => setTimeout(resolve, 200));
  fs.rmSync(profileDir, { recursive: true, force: true, maxRetries: 20, retryDelay: 100 });
}
