import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import net from "node:net";
import { spawn, execFileSync } from "node:child_process";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
function commandPath(command) {
  try {
    const tool = process.platform === "win32" ? "where" : "which";
    return execFileSync(tool, [command], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] })
      .split(/\r?\n/).map(value => value.trim()).find(Boolean) || null;
  } catch { return null; }
}
export function findBrowser() {
  const candidates = [
    process.env.CHROME_PATH, process.env.EDGE_PATH,
    process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, "Google/Chrome/Application/chrome.exe"),
    process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, "Microsoft/Edge/Application/msedge.exe"),
    process.env.PROGRAMFILES && path.join(process.env.PROGRAMFILES, "Google/Chrome/Application/chrome.exe"),
    process.env.PROGRAMFILES && path.join(process.env.PROGRAMFILES, "Microsoft/Edge/Application/msedge.exe"),
    process.env["PROGRAMFILES(X86)"] && path.join(process.env["PROGRAMFILES(X86)"], "Google/Chrome/Application/chrome.exe"),
    process.env["PROGRAMFILES(X86)"] && path.join(process.env["PROGRAMFILES(X86)"], "Microsoft/Edge/Application/msedge.exe"),
    "/usr/bin/google-chrome", "/usr/bin/google-chrome-stable", "/usr/bin/chromium",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    commandPath("chrome"), commandPath("google-chrome"), commandPath("chromium"), commandPath("msedge")
  ].filter(Boolean);
  const found = candidates.find(candidate => fs.existsSync(candidate));
  if (!found) throw new Error("No Chrome, Chromium or Edge found. Set CHROME_PATH or EDGE_PATH.");
  return found;
}
async function freePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address();
      server.close(() => resolve(port));
    });
  });
}
async function waitJson(url, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try { const response = await fetch(url); if (response.ok) return response.json(); } catch {}
    await delay(100);
  }
  throw new Error(`Timed out waiting for ${url}`);
}
class Session {
  constructor(wsUrl) { this.nextId = 1; this.pending = new Map(); this.listeners = new Map(); this.ws = new WebSocket(wsUrl); }
  async open() {
    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error("CDP open timeout")), 10000);
      this.ws.addEventListener("open", () => { clearTimeout(timer); resolve(); }, { once: true });
      this.ws.addEventListener("error", event => { clearTimeout(timer); reject(new Error(event.message || "CDP error")); }, { once: true });
    });
    this.ws.addEventListener("message", event => {
      const message = JSON.parse(String(event.data));
      if (message.id) {
        const pending = this.pending.get(message.id);
        if (!pending) return;
        this.pending.delete(message.id);
        message.error ? pending.reject(new Error(message.error.message)) : pending.resolve(message.result || {});
      } else if (message.method) {
        for (const handler of this.listeners.get(message.method) || []) handler(message.params || {});
      }
    });
    return this;
  }
  send(method, params = {}) {
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  on(method, handler) { const handlers = this.listeners.get(method) || []; handlers.push(handler); this.listeners.set(method, handlers); }
  waitFor(method, timeoutMs = 15000) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error(`Timed out waiting for ${method}`)), timeoutMs);
      const handler = params => {
        clearTimeout(timer);
        this.listeners.set(method, (this.listeners.get(method) || []).filter(item => item !== handler));
        resolve(params);
      };
      this.on(method, handler);
    });
  }
  async evaluate(expression) {
    const response = await this.send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true, userGesture: true });
    if (response.exceptionDetails) throw new Error(response.exceptionDetails.exception?.description || response.exceptionDetails.text);
    return response.result?.value;
  }
  async screenshot(file, format = "jpeg") {
    const response = await this.send("Page.captureScreenshot", { format, quality: 82, captureBeyondViewport: false, fromSurface: true });
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, Buffer.from(response.data, "base64"));
  }
  close() { try { this.ws.close(); } catch {} }
}
export async function launchBrowser() {
  if (typeof WebSocket !== "function") throw new Error("Node.js with global WebSocket support is required");
  const executable = findBrowser(), port = await freePort();
  const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), "math-v2-controlled-cutover-"));
  const child = spawn(executable, [
    `--remote-debugging-port=${port}`, `--user-data-dir=${userDataDir}`, "--headless=new",
    "--no-first-run", "--no-default-browser-check", "--disable-background-networking",
    "--disable-component-update", "--disable-extensions", "--disable-gpu", "--disable-dev-shm-usage",
    "--disable-sync", "--metrics-recording-only", "--mute-audio", "--no-proxy-server",
    "--proxy-bypass-list=*", "--no-sandbox", "about:blank"
  ], { stdio: ["ignore", "ignore", "pipe"] });
  const version = await waitJson(`http://127.0.0.1:${port}/json/version`);
  return {
    executable, browserVersion: version.Browser || "unknown",
    async newPage(url = "about:blank") {
      const response = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(url)}`, { method: "PUT" });
      if (!response.ok) throw new Error(`Could not create page: ${response.status}`);
      const created = await response.json();
      return new Session(created.webSocketDebuggerUrl).open();
    },
    async close() {
      try { child.kill("SIGTERM"); } catch {}
      await delay(300);
      try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch {}
    }
  };
}
export async function waitUntil(session, expression, timeoutMs = 90000) {
  const start = Date.now();
  let last;
  while (Date.now() - start < timeoutMs) {
    last = await session.evaluate(expression);
    if (last) return last;
    await delay(100);
  }
  throw new Error(`waitUntil failed: ${expression}; last=${JSON.stringify(last)}`);
}
