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

const mime = new Map([[".html", "text/html; charset=utf-8"], [".js", "text/javascript; charset=utf-8"], [".mjs", "text/javascript; charset=utf-8"], [".css", "text/css; charset=utf-8"], [".json", "application/json; charset=utf-8"], [".svg", "image/svg+xml"], [".pdf", "application/pdf"]]);
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
  "--disable-dev-shm-usage",
  "--no-sandbox",
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
const report = { generatedAt: new Date().toISOString(), engine: "human-production-r1", measurementsMs: {}, assertions: [] };
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

  const rootUrl = `http://127.0.0.1:${sitePort}/${encodeURIComponent(mathFolder)}/`;
  const routes = ["index.html", "index.html?generated=1", "index.html?legacy=1", "legacy.html"];
  const retiredNames = [
    "questions.js",
    "quiz-taxonomy.js",
    "quiz-variant-bank.js",
    "quiz-variants.js",
    "lecture-taxonomy.js",
    "app-legacy.js",
    "math-production-bootstrap.js"
  ];
  for (const route of routes) {
    const started = performance.now();
    await navigate(`${rootUrl}${route}`);
    await waitFor("document.documentElement.dataset.mathEngine === 'human-production-r1' && window.__HUMAN_PRODUCTION_APP_READY__ === true", 120000);
    report.measurementsMs[route] = Number((performance.now() - started).toFixed(2));
    const state = await evaluate(`(() => ({
      engine: document.documentElement.dataset.mathEngine,
      loader: window.__MATH_HUMAN_PRODUCTION_LOADER_R1__,
      productionRuntime: window.__HUMAN_PRODUCTION_R1__?.runtime?.manifest?.productionRuntime,
      manifestVersion: window.__HUMAN_PRODUCTION_R1__?.runtime?.manifest?.contentVersion,
      resources: performance.getEntriesByType('resource').map(entry => new URL(entry.name).pathname)
    }))()`);
    assert.equal(state.engine, "human-production-r1");
    assert.equal(state.loader.mode, "human-production-r1");
    assert.equal(state.loader.generatedRollbackAvailable, false);
    assert.equal(state.loader.v1RollbackAvailable, false);
    assert.equal(state.loader.oldRuntimesRetired, true);
    assert.equal(state.productionRuntime, true);
    assert.match(state.manifestVersion, /\S/);
    assert(!state.resources.some(resource => resource.includes(`/${encodeURIComponent(mathFolder)}/v2/`) || resource.includes(`/${mathFolder}/v2/`)), `${route} loaded retired V2 runtime`);
    for (const retired of retiredNames) {
      assert(!state.resources.some(resource => resource.endsWith(`/${retired}`)), `${route} loaded ${retired}`);
    }
    mark(`${route} resolves only to the human production runtime`);
  }

  await cdp.send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
  await navigate(`${rootUrl}index.html`);
  await waitFor("window.__HUMAN_PRODUCTION_APP_READY__ === true", 120000);
  assert.equal(await evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1"), true);
  mark("human production runtime has no mobile horizontal overflow");

  const browserErrors = cdp.events.filter(event => event.method === "Runtime.exceptionThrown" || (event.method === "Log.entryAdded" && event.params.entry.level === "error"));
  assert.deepEqual(browserErrors, []);
  report.browserErrors = 0;
  report.routeCount = routes.length;
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
