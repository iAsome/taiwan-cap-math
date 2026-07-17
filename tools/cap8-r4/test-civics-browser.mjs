import { createReadStream, existsSync, mkdirSync, readFileSync, realpathSync, rmSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, extname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = realpathSync(resolve(HERE, "../.."));
const SITE_ROOT = realpathSync(join(ROOT, "公民會考作戰室", "r4"));
const PROFILE_ROOT = realpathSync(join(ROOT, "公民會考作戰室"));
const PROFILE = join(PROFILE_ROOT, `.civics-browser-profile-${process.pid}`);
const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
].filter(Boolean);
const AXE_SOURCE = readFileSync(join(ROOT, "node_modules", "axe-core", "axe.min.js"), "utf8");
const MIME = new Map([
  [".css", "text/css; charset=utf-8"], [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"], [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml; charset=utf-8"], [".webmanifest", "application/manifest+json; charset=utf-8"],
]);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function delay(milliseconds) {
  return new Promise((resolveDelay) => setTimeout(resolveDelay, milliseconds));
}

async function until(label, probe, timeout = 30_000, interval = 100) {
  const started = Date.now();
  let lastError;
  while (Date.now() - started < timeout) {
    try {
      const value = await probe();
      if (value) return value;
    } catch (error) {
      lastError = error;
    }
    await delay(interval);
  }
  throw new Error(`${label} timed out${lastError ? `: ${lastError.message}` : ""}`);
}

function serveRepository() {
  const server = createServer((request, response) => {
    try {
      const url = new URL(request.url, "http://127.0.0.1");
      let pathname = decodeURIComponent(url.pathname);
      let file = resolve(ROOT, `.${pathname}`);
      const insideRoot = file === ROOT || file.toLocaleLowerCase("en-US").startsWith(`${ROOT.toLocaleLowerCase("en-US")}${sep}`);
      if (!insideRoot) {
        response.writeHead(403).end("Forbidden");
        return;
      }
      if (statSync(file).isDirectory()) file = join(file, "index.html");
      response.writeHead(200, {
        "Cache-Control": "no-store",
        "Content-Type": MIME.get(extname(file)) || "application/octet-stream",
      });
      createReadStream(file).pipe(response);
    } catch {
      response.writeHead(404).end("Not found");
    }
  });
  return new Promise((resolveServer, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => resolveServer(server));
  });
}

class Cdp {
  constructor(socket) {
    this.socket = socket;
    this.nextId = 1;
    this.pending = new Map();
    this.listeners = new Map();
    socket.addEventListener("message", ({ data }) => {
      const message = JSON.parse(data);
      if (message.id) {
        const pending = this.pending.get(message.id);
        if (!pending) return;
        this.pending.delete(message.id);
        if (message.error) pending.reject(new Error(`${pending.method}: ${message.error.message}`));
        else pending.resolve(message.result);
        return;
      }
      for (const listener of this.listeners.get(message.method) || []) listener(message.params);
    });
  }

  send(method, params = {}) {
    const id = this.nextId++;
    return new Promise((resolveCall, reject) => {
      this.pending.set(id, { method, resolve: resolveCall, reject });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }

  on(method, listener) {
    const listeners = this.listeners.get(method) || [];
    listeners.push(listener);
    this.listeners.set(method, listeners);
  }

  once(method, timeout = 30_000) {
    return new Promise((resolveEvent, reject) => {
      const listeners = this.listeners.get(method) || [];
      const timer = setTimeout(() => reject(new Error(`${method} timed out`)), timeout);
      const listener = (params) => {
        clearTimeout(timer);
        this.listeners.set(method, (this.listeners.get(method) || []).filter((value) => value !== listener));
        resolveEvent(params);
      };
      listeners.push(listener);
      this.listeners.set(method, listeners);
    });
  }
}

async function openCdp(webSocketUrl) {
  const socket = new WebSocket(webSocketUrl);
  await new Promise((resolveSocket, reject) => {
    socket.addEventListener("open", resolveSocket, { once: true });
    socket.addEventListener("error", () => reject(new Error("CDP WebSocket connection failed")), { once: true });
  });
  return new Cdp(socket);
}

async function evaluate(cdp, expression) {
  const result = await cdp.send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
  return result.result.value;
}

async function waitForPage(cdp) {
  return until("course page", () => evaluate(cdp, `document.querySelector("#skillView:not([hidden])") && document.querySelector("#skillTitle")?.textContent`));
}

async function reload(cdp) {
  const marker = `${Date.now()}-${Math.random()}`;
  await until("page body", () => evaluate(cdp, `document.body ? (document.body.dataset.civicsReloadMarker = ${JSON.stringify(marker)}, true) : false`));
  await cdp.send("Page.reload", { ignoreCache: true });
  await until("page reload", async () => {
    const state = await evaluate(cdp, `({ marker: document.body?.dataset.civicsReloadMarker, ready: document.readyState, title: document.querySelector("#skillView:not([hidden]) #skillTitle")?.textContent || "" })`);
    return state.marker !== marker && state.ready === "complete" && state.title;
  }, 60_000);
  return waitForPage(cdp);
}

async function answerPanel(cdp, panelId, correct, keyboardSubmit = false) {
  const result = await evaluate(cdp, `(async () => {
    const panel = document.querySelector(${JSON.stringify(panelId)});
    const fieldsets = [...panel.querySelectorAll("fieldset[data-question-id]")];
    for (const fieldset of fieldsets) {
      const question = await (await fetch("runtime/questions/" + fieldset.dataset.questionId + ".json")).json();
      const value = ${correct} ? question.answerIndex : (question.answerIndex + 1) % question.options.length;
      fieldset.querySelector('input[value="' + value + '"]').click();
    }
    if (${keyboardSubmit}) panel.querySelector(".submit").focus();
    else panel.querySelector(".submit").click();
    return { count: fieldsets.length, focused: document.activeElement === panel.querySelector(".submit") };
  })()`);
  if (keyboardSubmit) {
    assert(result.focused, `${panelId}: submit button could not receive keyboard focus`);
    await cdp.send("Input.dispatchKeyEvent", { type: "keyDown", key: "Enter", code: "Enter", text: "\r", unmodifiedText: "\r", windowsVirtualKeyCode: 13 });
    await cdp.send("Input.dispatchKeyEvent", { type: "keyUp", key: "Enter", code: "Enter", windowsVirtualKeyCode: 13 });
  }
  const score = keyboardSubmit
    ? await until(`${panelId} score`, () => evaluate(cdp, `document.querySelector(${JSON.stringify(panelId)} + " .score")?.textContent || ""`))
    : await evaluate(cdp, `document.querySelector(${JSON.stringify(panelId)} + " .score")?.textContent || ""`);
  return { ...result, score };
}

async function main() {
  assert(realpathSync(PROFILE_ROOT) === PROFILE_ROOT, "temporary profile parent was not resolved");
  assert(PROFILE.startsWith(`${PROFILE_ROOT}${sep}`), "temporary Chrome profile escaped the civics workspace");
  assert(SITE_ROOT.startsWith(`${ROOT}${sep}`), "site root escaped repository");
  const chrome = CHROME_CANDIDATES.find(existsSync);
  assert(chrome, "Chrome or Edge is required for the civics browser gate");
  mkdirSync(PROFILE);

  const server = await serveRepository();
  const port = server.address().port;
  const sitePath = SITE_ROOT.slice(ROOT.length).split(sep).map(encodeURIComponent).join("/");
  const pageUrl = `http://127.0.0.1:${port}${sitePath}/`;
  const browserProcess = spawn(chrome, [
    "--headless=new", "--remote-debugging-port=0", `--user-data-dir=${PROFILE}`,
    "--no-first-run", "--disable-default-apps", "--disable-background-networking", pageUrl,
  ], { stdio: "ignore", windowsHide: true });

  let cdp;
  const pageErrors = [];
  const consoleErrors = [];
  const failedResponses = [];
  try {
    const activePort = await until("Chrome debug port", () => {
      const file = join(PROFILE, "DevToolsActivePort");
      return existsSync(file) && readFileSync(file, "utf8").split(/\r?\n/)[0];
    });
    const targets = await until("course page target", async () => {
      const response = await fetch(`http://127.0.0.1:${activePort}/json/list`);
      const values = await response.json();
      return values.find((value) => value.type === "page" && value.url.startsWith(pageUrl));
    });
    cdp = await openCdp(targets.webSocketDebuggerUrl);
    cdp.on("Runtime.exceptionThrown", (event) => pageErrors.push(event.exceptionDetails.exception?.description || event.exceptionDetails.text));
    cdp.on("Runtime.consoleAPICalled", (event) => {
      if (["error", "assert"].includes(event.type)) consoleErrors.push(event.args.map((arg) => arg.value || arg.description).join(" "));
    });
    cdp.on("Log.entryAdded", ({ entry }) => {
      if (entry.level === "error") consoleErrors.push(entry.text);
    });
    cdp.on("Network.responseReceived", ({ response }) => {
      if (response.status >= 400) failedResponses.push(`${response.status} ${response.url}`);
    });
    await Promise.all(["Page.enable", "Runtime.enable", "Log.enable", "Network.enable", "Accessibility.enable"].map((method) => cdp.send(method)));
    await reload(cdp);

    const initial = await evaluate(cdp, `({
      lang: document.documentElement.lang,
      title: document.title,
      skillTitle: document.querySelector("#skillTitle").textContent,
      skillId: document.querySelector("#skillList button.active").dataset.skillId,
      skillCount: document.querySelectorAll("#skillList button").length,
      tabs: document.querySelectorAll('[role="tab"]').length,
      selectedTabs: document.querySelectorAll('[role="tab"][aria-selected="true"]').length,
      tabbableTabs: [...document.querySelectorAll('[role="tab"]')].filter((tab) => tab.tabIndex === 0).length,
      examples: document.querySelectorAll("#lecturePanel .example-prompt").length,
      misconceptions: document.querySelectorAll("#lecturePanel .mistake-list article").length,
      checks: document.querySelectorAll("#lecturePanel details").length,
      diagnostic: document.querySelectorAll("#diagnosticPanel fieldset").length,
      practice: document.querySelectorAll("#practicePanel fieldset").length,
      stimulus: document.querySelectorAll("#stimulusPanel fieldset").length,
    })`);
    assert(initial.lang === "zh-Hant", "document language is not zh-Hant");
    assert(initial.title.includes("公民會考作戰室"), "document title is missing");
    assert(initial.skillCount === 240, `expected 240 skills, got ${initial.skillCount}`);
    assert(initial.tabs === 5 && initial.selectedTabs === 1 && initial.tabbableTabs === 1, "tab semantics are inconsistent");
    assert(initial.examples >= 3 && initial.misconceptions >= 4 && initial.checks >= 3, "lecture sections are incomplete in the browser");
    assert(initial.diagnostic === 3 && initial.practice === 9 && initial.stimulus === 3, "assessment flow does not render 3/9/3 questions");

    const migration = await evaluate(cdp, `(() => {
      localStorage.clear();
      localStorage.setItem("capCivics.completed", JSON.stringify([1]));
      localStorage.setItem("capCivics.lastSeed", "31415");
      localStorage.setItem("capCivics.dark", "true");
      return true;
    })()`);
    assert(migration, "could not seed legacy storage");
    await reload(cdp);
    const migrated = await evaluate(cdp, `(() => {
      const backup = JSON.parse(localStorage.getItem("cap8.r4.civics.legacyBackup"));
      const progress = JSON.parse(localStorage.getItem("cap8.r4.civics.progress"));
      return {
        marker: localStorage.getItem("cap8.r4.civics.migration.v1"),
        progressMarker: localStorage.getItem("cap8.r4.civics.migration.v1.progress"),
        completed: progress.completedSkillIds.length,
        sourceSeed: localStorage.getItem("capCivics.lastSeed"),
        copiedSeed: localStorage.getItem("cap8.r4.civics.lastSeed"),
        backupSeed: backup["capCivics.lastSeed"],
        sourceCount: [...Array(localStorage.length).keys()].map((index) => localStorage.key(index)).filter((key) => key.startsWith("capCivics.")).length,
      };
    })()`);
    assert(migrated.marker === "complete" && migrated.progressMarker === "complete" && migrated.completed > 0 && migrated.sourceSeed === "31415" && migrated.copiedSeed === "31415" && migrated.backupSeed === "31415" && migrated.sourceCount === 3, "browser migration did not preserve and map legacy data");

    const filters = await evaluate(cdp, `(() => {
      const search = document.querySelector("#skillSearch");
      const select = document.querySelector("#unitSelect");
      const exactTitle = document.querySelector("#skillTitle").textContent;
      search.value = exactTitle; search.dispatchEvent(new Event("input", { bubbles: true }));
      const searchMatches = [...document.querySelectorAll("#skillList button")].map((button) => button.textContent);
      search.value = ""; search.dispatchEvent(new Event("input", { bubbles: true }));
      select.value = select.options[1].value; select.dispatchEvent(new Event("change", { bubbles: true }));
      const unitMatches = document.querySelectorAll("#skillList button").length;
      select.value = ""; select.dispatchEvent(new Event("change", { bubbles: true }));
      return { exactTitle, searchMatches, unitMatches, restored: document.querySelectorAll("#skillList button").length };
    })()`);
    assert(filters.searchMatches.length >= 1 && filters.searchMatches.every((title) => title.includes(filters.exactTitle)), "skill search returned an unrelated result");
    assert(filters.unitMatches > 0 && filters.unitMatches < 240 && filters.restored === 240, "unit filter did not bound and restore the skill list");

    await evaluate(cdp, `document.querySelector("#tabLecture").focus()`);
    await cdp.send("Input.dispatchKeyEvent", { type: "keyDown", key: "ArrowRight", code: "ArrowRight", windowsVirtualKeyCode: 39 });
    await cdp.send("Input.dispatchKeyEvent", { type: "keyUp", key: "ArrowRight", code: "ArrowRight", windowsVirtualKeyCode: 39 });
    const keyboard = await evaluate(cdp, `({ selected: document.querySelector('[role="tab"][aria-selected="true"]').id, focused: document.activeElement.id, panelHidden: document.querySelector("#diagnosticPanel").hidden, focusRing: getComputedStyle(document.querySelector("#tabDiagnostic")).boxShadow })`);
    assert(keyboard.selected === "tabDiagnostic" && keyboard.focused === "tabDiagnostic" && keyboard.panelHidden === false && keyboard.focusRing !== "none", "arrow-key tab navigation/focus indicator failed");
    await evaluate(cdp, `document.querySelector("#diagnosticPanel input[type=radio]").focus()`);
    await cdp.send("Input.dispatchKeyEvent", { type: "keyDown", key: " ", code: "Space", windowsVirtualKeyCode: 32 });
    await cdp.send("Input.dispatchKeyEvent", { type: "keyUp", key: " ", code: "Space", windowsVirtualKeyCode: 32 });
    const keyboardChoice = await evaluate(cdp, `({ checked: document.activeElement.checked })`);
    assert(keyboardChoice.checked, `keyboard radio selection failed: ${JSON.stringify(keyboardChoice)}`);

    const seedOrders = await evaluate(cdp, `(() => {
      const panel = document.querySelector("#diagnosticPanel");
      const input = panel.querySelector(".seed-input");
      const button = panel.querySelector(".reorder");
      const orders = [];
      for (const seed of ["11", "11", "12", "13", "14", "15"]) {
        input.value = seed; button.click();
        orders.push([...panel.querySelectorAll("fieldset")].map((field) => field.dataset.questionId).join(","));
      }
      return orders;
    })()`);
    assert(seedOrders[0] === seedOrders[1] && new Set(seedOrders).size > 1, "seed ordering is not deterministic or does not vary");

    const diagnostic = await answerPanel(cdp, "#diagnosticPanel", false);
    assert(diagnostic.count === 3 && diagnostic.score.includes("0 / 3"), "diagnostic wrong-answer flow failed");
    const afterDiagnostic = await evaluate(cdp, `(() => {
      const progress = JSON.parse(localStorage.getItem("cap8.r4.civics.progress"));
      document.querySelector("#tabRemediation").click();
      return { mistakes: Object.keys(progress.mistakes).length, remediation: document.querySelectorAll("#remediationPanel fieldset").length, rationales: document.querySelectorAll("#diagnosticPanel .rationales:not([hidden]) p").length };
    })()`);
    assert(afterDiagnostic.mistakes === 3 && afterDiagnostic.remediation === 3 && afterDiagnostic.rationales === 12, "mistake classification or remediation rendering failed");
    const remediation = await answerPanel(cdp, "#remediationPanel", true);
    assert(remediation.count === 3, "remediation answer flow did not run");
    const afterRemediation = await evaluate(cdp, `(() => {
      const progress = JSON.parse(localStorage.getItem("cap8.r4.civics.progress"));
      return { mistakes: Object.keys(progress.mistakes).length, intervals: Object.values(progress.reviewSchedule).map((value) => value.intervalDays) };
    })()`);
    assert(afterRemediation.mistakes === 0 && afterRemediation.intervals.length === 3 && afterRemediation.intervals.every((days) => days === 2), "spaced remediation did not clear mistakes and double intervals");

    await evaluate(cdp, `document.querySelector("#tabPractice").click()`);
    const practice = await answerPanel(cdp, "#practicePanel", true, true);
    assert(practice.count === 9 && practice.score.includes("9 / 9"), `practice mastery flow failed: ${JSON.stringify(practice)}`);
    await evaluate(cdp, `document.querySelector("#tabStimulus").click()`);
    const stimulus = await answerPanel(cdp, "#stimulusPanel", true);
    assert(stimulus.count === 3 && stimulus.score.includes("3 / 3"), "stimulus transfer flow failed");
    const progress = await evaluate(cdp, `(() => { const value = JSON.parse(localStorage.getItem("cap8.r4.civics.progress")); return { completed: value.completedSkillIds.length, attempts: Object.keys(value.attempts[${JSON.stringify(initial.skillId)}] || {}).sort(), summary: document.querySelector("#progressSummary").textContent }; })()`);
    assert(progress.completed === migrated.completed && progress.attempts.join(",") === "diagnostic,practice,remediation,transfer" && progress.summary.includes(`${migrated.completed} / 240`), `progress summary or mastery persistence failed: ${JSON.stringify(progress)}`);

    const routing = await evaluate(cdp, `(async () => {
      document.querySelector("#skillSearch").value = "";
      document.querySelector("#skillSearch").dispatchEvent(new Event("input", { bubbles: true }));
      const target = document.querySelectorAll("#skillList button")[1];
      const id = target.dataset.skillId;
      const oldTitle = document.querySelector("#skillTitle").textContent;
      target.click();
      for (let index = 0; index < 100 && document.querySelector("#skillTitle").textContent === oldTitle; index += 1) await new Promise((resolveWait) => setTimeout(resolveWait, 20));
      return { id, query: new URL(location.href).searchParams.get("skill"), changed: document.querySelector("#skillTitle").textContent !== oldTitle };
    })()`);
    assert(routing.id === routing.query && routing.changed, "skill deep-link routing failed");

    await evaluate(cdp, `document.querySelector(".skip-link").click()`);
    await delay(100);
    assert(await evaluate(cdp, `document.activeElement.id === "content"`), "skip link did not move focus to main content");

    const axTree = await cdp.send("Accessibility.getFullAXTree");
    const unnamed = axTree.nodes.filter((node) => !node.ignored && ["button", "textbox", "combobox", "radio", "Iframe"].includes(node.role?.value) && !node.name?.value);
    assert(unnamed.length === 0, `accessibility tree contains ${unnamed.length} unnamed controls`);
    const semantics = await evaluate(cdp, `(() => {
      const visible = (element) => element && getComputedStyle(element).display !== "none" && getComputedStyle(element).visibility !== "hidden";
      const headings = [...document.querySelectorAll("main h1, main h2, main h3")].filter(visible).map((heading) => Number(heading.tagName[1]));
      const jumps = headings.filter((level, index) => index && level > headings[index - 1] + 1);
      const controls = [...document.querySelectorAll("input, select")];
      return {
        jumps: jumps.length,
        unlabelled: controls.filter((control) => !control.closest("label") && !document.querySelector('label[for="' + control.id + '"]')).length,
        badTabs: [...document.querySelectorAll('[role="tab"]')].filter((tab) => !tab.getAttribute("aria-controls") || !document.getElementById(tab.getAttribute("aria-controls"))).length,
        badFrames: [...document.querySelectorAll("iframe")].filter((frame) => !frame.title).length,
        figuresWithoutCaption: [...document.querySelectorAll("figure")].filter((figure) => !figure.querySelector("figcaption") || !figure.querySelector("details")).length,
      };
    })()`);
    assert(Object.values(semantics).every((value) => value === 0), `semantic accessibility checks failed: ${JSON.stringify(semantics)}`);

    const contrasts = await evaluate(cdp, `(() => {
      const parse = (value) => (value.match(/[\\d.]+/g) || []).map(Number);
      const blend = (front, back) => { const alpha = front[3] ?? 1; return front.slice(0, 3).map((value, index) => value * alpha + back[index] * (1 - alpha)); };
      const background = (element) => {
        let result = [255, 255, 255];
        const layers = [];
        for (let node = element; node; node = node.parentElement) layers.push(parse(getComputedStyle(node).backgroundColor));
        for (const layer of layers.reverse()) if (layer.length >= 3) result = blend(layer, result);
        return result;
      };
      const luminance = (rgb) => rgb.slice(0, 3).map((value) => value / 255).map((value) => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4).reduce((sum, value, index) => sum + value * [.2126, .7152, .0722][index], 0);
      const ratio = (left, right) => { const values = [luminance(left), luminance(right)].sort((a, b) => b - a); return (values[0] + .05) / (values[1] + .05); };
      return ["body", ".topbar span", ".eyebrow", ".progress-summary", ".submit", ".tabs button[aria-selected=true]"].map((selector) => {
        const element = document.querySelector(selector); const style = getComputedStyle(element);
        return { selector, ratio: ratio(parse(style.color), background(element)) };
      });
    })()`);
    assert(contrasts.every((item) => item.ratio >= 4.5), `WCAG text contrast failed: ${JSON.stringify(contrasts)}`);

    const assets = await evaluate(cdp, `(async () => {
      const index = await (await fetch("runtime/content-index.json")).json();
      const results = [];
      for (const asset of index.assets) {
        const path = asset.path.split("/r4/")[1];
        const text = await (await fetch(path)).text();
        const documentAsset = new DOMParser().parseFromString(text, "text/html");
        const table = documentAsset.querySelector("table");
        const cells = [...table.querySelectorAll("tr")].map((row) => [...row.children].map((cell) => cell.textContent.trim()));
        results.push({
          id: asset.id, status: Boolean(documentAsset.title && table && table.querySelector("caption")),
          scopedHeaders: [...table.querySelectorAll("th")].every((header) => header.hasAttribute("scope")),
          sameRows: JSON.stringify(cells.slice(1)) === JSON.stringify(asset.dataFallback.rows.map((row) => [row[0], ...row.slice(1)])),
          sameColumns: JSON.stringify(cells[0]) === JSON.stringify(asset.dataFallback.columns),
          metadata: Boolean(asset.caption && asset.altText && asset.longDescription && asset.creator && asset.source && asset.license),
          colorIndependent: asset.accessibility.colorIndependent, printSafe: asset.accessibility.printSafe && text.includes("@media print"),
        });
      }
      return results;
    })()`);
    assert(assets.length === 12 && assets.every((asset) => Object.entries(asset).filter(([key]) => key !== "id").every(([, value]) => value === true)), `asset browser audit failed: ${JSON.stringify(assets.filter((asset) => Object.values(asset).includes(false)))}`);

    const assetSkillId = await evaluate(cdp, `(async () => {
      const index = await (await fetch("runtime/content-index.json")).json();
      const id = index.assets[0].skillIds[0];
      document.querySelector('#skillList button[data-skill-id="' + id + '"]').click();
      return id;
    })()`);
    await until("asset skill rendering", () => evaluate(cdp, `document.querySelector('#skillList button.active')?.dataset.skillId === ${JSON.stringify(assetSkillId)} && document.querySelector("iframe")?.contentDocument?.querySelector("table")`));
    await cdp.send("Runtime.evaluate", { expression: AXE_SOURCE });
    const axe = await evaluate(cdp, `(async () => {
      const result = await axe.run(document, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag22aa"] } });
      return { violations: result.violations.map((violation) => violation.id), passes: result.passes.length, incomplete: result.incomplete.map((item) => item.id) };
    })()`);
    assert(axe.violations.length === 0, `axe WCAG 2.2 AA violations: ${JSON.stringify(axe)}`);

    await cdp.send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
    const mobile = await evaluate(cdp, `({ viewport: innerWidth, bodyWidth: document.body.scrollWidth, workspace: getComputedStyle(document.querySelector(".workspace")).display, columns: getComputedStyle(document.querySelector(".mistake-list")).gridTemplateColumns, tabsScrollable: document.querySelector(".tabs").scrollWidth >= document.querySelector(".tabs").clientWidth })`);
    assert(mobile.viewport === 390 && mobile.bodyWidth <= 390 && mobile.workspace === "block" && !mobile.columns.includes(" "), `mobile layout failed: ${JSON.stringify(mobile)}`);
    await cdp.send("Emulation.setDeviceMetricsOverride", { width: 320, height: 800, deviceScaleFactor: 1, mobile: true });
    const reflow = await evaluate(cdp, `({ viewport: innerWidth, bodyWidth: document.body.scrollWidth, mainWidth: document.querySelector("main").scrollWidth })`);
    assert(reflow.viewport === 320 && reflow.bodyWidth <= 320 && reflow.mainWidth <= 320, `WCAG 400% reflow failed: ${JSON.stringify(reflow)}`);
    await cdp.send("Emulation.clearDeviceMetricsOverride");

    await cdp.send("Emulation.setEmulatedMedia", { media: "print" });
    const printLayout = await evaluate(cdp, `({ topbar: getComputedStyle(document.querySelector(".topbar")).display, aside: getComputedStyle(document.querySelector("aside")).display, tabs: getComputedStyle(document.querySelector(".tabs")).display, hiddenPanel: getComputedStyle(document.querySelector("#diagnosticPanel")).display, rationales: getComputedStyle(document.querySelector(".rationales")).display })`);
    assert(printLayout.topbar === "none" && printLayout.aside === "none" && printLayout.tabs === "none" && printLayout.hiddenPanel === "block" && printLayout.rationales === "none", `print stylesheet failed: ${JSON.stringify(printLayout)}`);
    const pdf = await cdp.send("Page.printToPDF", { printBackground: false, preferCSSPageSize: true });
    assert(pdf.data.length > 50_000, "print-to-PDF output is unexpectedly empty");
    await cdp.send("Emulation.setEmulatedMedia", { media: "screen" });

    const offlineCache = await until("complete offline cache", async () => evaluate(cdp, `(async () => {
      await navigator.serviceWorker.ready;
      const manifest = await (await fetch("content-manifest-v4.json")).json();
      const keys = await caches.keys();
      const release = "cap8-r4-civics-" + manifest.buildSha256;
      if (!keys.includes(release) || !navigator.serviceWorker.controller) return null;
      const actual = new Set((await (await caches.open(release)).keys()).map((request) => request.url));
      const shell = ["./", "./index.html", "./app.js", "./styles.css", "./manifest.webmanifest", "./content-manifest-v4.json", "./runtime/content-index.json", "../icon.svg"];
      const marker = "公民會考作戰室/r4/";
      const expected = new Set([
        ...shell.map((value) => new URL(value, location.href).href),
        ...manifest.artifacts.map((artifact) => new URL("./" + artifact.path.slice(artifact.path.indexOf(marker) + marker.length), location.href).href),
      ]);
      const missing = [...expected].filter((url) => !actual.has(url));
      const unexpected = [...actual].filter((url) => !expected.has(url));
      return missing.length || unexpected.length ? null : { release, count: actual.size, expected: expected.size, missing, unexpected };
    })()`), 180_000, 500);
    const installability = await cdp.send("Page.getInstallabilityErrors");
    const installErrors = installability.installabilityErrors.filter((error) => error.errorId !== "in-incognito");
    assert(installErrors.length === 0, `PWA installability failed: ${JSON.stringify(installErrors)}`);
    assert(pageErrors.length === 0, `page exceptions before offline gate: ${pageErrors.join(" | ")}`);
    assert(consoleErrors.length === 0, `console errors before offline gate: ${consoleErrors.join(" | ")}`);
    assert(failedResponses.length === 0, `HTTP failures before offline gate: ${failedResponses.join(" | ")}`);
    await new Promise((resolveClose, reject) => server.close((error) => error ? reject(error) : resolveClose()));
    let originStopped = false;
    try { await fetch(pageUrl, { signal: AbortSignal.timeout(3_000) }); } catch { originStopped = true; }
    assert(originStopped, "offline gate could still reach the origin server");
    await reload(cdp);
    const offline = await evaluate(cdp, `(async () => {
      const index = await (await fetch("runtime/content-index.json")).json();
      const skill = index.skills[index.skills.length - 1];
      const question = await (await fetch(skill.questionPaths[skill.questionPaths.length - 1])).json();
      const asset = index.assets[index.assets.length - 1];
      const assetResponse = await fetch(asset.path.split("/r4/")[1]);
      return { navigatorOnline: navigator.onLine, skills: index.skills.length, question: question.id, assetStatus: assetResponse.status, title: document.querySelector("#skillTitle").textContent };
    })()`);
    offline.originStopped = originStopped;
    assert(offline.originStopped && offline.skills === 240 && offline.question && offline.assetStatus === 200 && offline.title, `offline reload/content lookup failed: ${JSON.stringify(offline)}`);

    await delay(250);
    assert(pageErrors.length === 0, `page exceptions: ${pageErrors.join(" | ")}`);
    assert(consoleErrors.length === 0, `console errors: ${consoleErrors.join(" | ")}`);
    assert(failedResponses.length === 0, `HTTP failures: ${failedResponses.join(" | ")}`);

    process.stdout.write(`${JSON.stringify({
      status: "pass", browser: chrome, skills: initial.skillCount, questionsExercised: 18,
      migration: migrated, keyboard, keyboardChoice, progress, accessibilityNodes: axTree.nodes.length,
      contrasts, axe, assets: assets.length, mobile, reflow, installabilityErrors: installErrors.length, printPdfBytes: Math.floor(pdf.data.length * 3 / 4),
      offlineCache, offline, pageErrors: 0, consoleErrors: 0, failedResponses: 0,
    }, null, 2)}\n`);
  } finally {
    if (cdp?.socket?.readyState === WebSocket.OPEN) cdp.socket.close();
    browserProcess.kill();
    await new Promise((resolveExit) => {
      if (browserProcess.exitCode != null) resolveExit();
      else {
        browserProcess.once("exit", resolveExit);
        setTimeout(resolveExit, 3_000);
      }
    });
    if (server.listening) await new Promise((resolveClose) => server.close(resolveClose));
    if (existsSync(PROFILE)) {
      const resolved = resolve(PROFILE);
      assert(resolved.startsWith(`${PROFILE_ROOT}${sep}`), "refusing to remove an unverified Chrome profile path");
      rmSync(resolved, { recursive: true, force: true });
    }
  }
}

await main();
