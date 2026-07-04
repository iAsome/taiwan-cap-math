import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const subjects = fs.readdirSync(root).filter(d => d.endsWith("會考作戰室")).sort();
const MIN_CSS_RULES = 490;

function parseScripts(indexHtml) {
  return [...indexHtml.matchAll(/<script src="([^"?]+)/g)].map(m => m[1]);
}

function mockElement(pool, attrs = {}) {
  const el = {
    textContent: "",
    innerHTML: "",
    value: "",
    href: "",
    open: false,
    classList: {
      _c: new Set(),
      add(...a) { a.forEach(x => this._c.add(x)); },
      remove(...a) { a.forEach(x => this._c.delete(x)); },
      toggle(x) { this._c.has(x) ? this._c.delete(x) : this._c.add(x); },
      contains(x) { return this._c.has(x); },
    },
    dataset: { ...attrs },
    style: {
      setProperty() {},
      getPropertyValue() { return ""; },
    },
    children: [],
    addEventListener() {},
    removeEventListener() {},
    scrollIntoView() {},
    focus() {},
    click() {},
    appendChild(child) { this.children.push(child); return child; },
    setAttribute() {},
    getAttribute() { return null; },
    querySelector(sel) {
      const all = el.querySelectorAll(sel);
      return all[0] ?? mockElement(pool);
    },
    querySelectorAll(sel) {
      if (sel === "[data-grade]") return pool.dataGrade;
      if (sel === "[data-verdict]") return pool.dataVerdict;
      if (sel === "[data-unit]") return pool.dataUnit;
      if (sel === "[data-quiz]") return pool.dataQuiz;
      if (sel === "[data-year]") return pool.dataYear;
      if (sel === "button") return [];
      if (sel === "a") return [];
      if (sel === "input") return [];
      if (sel === "details") return [];
      if (sel === ".choice") return [];
      return [];
    },
    closest() { return null; },
  };
  Object.assign(el.dataset, attrs);
  return el;
}

function buildDocument(indexHtml) {
  const pool = {
    dataView: [],
    dataGrade: [],
    dataVerdict: [],
    dataUnit: [],
    dataQuiz: [],
    dataYear: [],
  };
  pool.dataView = [...indexHtml.matchAll(/data-view="([^"]+)"/g)].map(m => mockElement(pool, { view: m[1] }));
  pool.dataGrade = [...indexHtml.matchAll(/data-grade="([^"]+)"/g)].map(m => mockElement(pool, { grade: m[1] }));
  pool.dataVerdict = [...indexHtml.matchAll(/data-verdict="([^"]+)"/g)].map(m => mockElement(pool, { verdict: m[1] }));
  pool.dataUnit = [...indexHtml.matchAll(/data-unit="([^"]+)"/g)].map(m => mockElement(pool, { unit: m[1] }));
  pool.dataQuiz = [...indexHtml.matchAll(/data-quiz="([^"]+)"/g)].map(m => mockElement(pool, { quiz: m[1] }));
  pool.dataYear = [...indexHtml.matchAll(/data-year="([^"]+)"/g)].map(m => mockElement(pool, { year: m[1] }));
  const byId = Object.create(null);
  for (const m of indexHtml.matchAll(/\bid="([^"]+)"/g)) {
    if (!byId[m[1]]) byId[m[1]] = mockElement(pool);
  }

  function matchSelector(sel) {
    if (sel === "[data-view]") return pool.dataView;
    if (sel === "[data-grade]") return pool.dataGrade;
    if (sel === "[data-verdict]") return pool.dataVerdict;
    if (sel === "[data-unit]") return pool.dataUnit;
    if (sel === "[data-quiz]") return pool.dataQuiz;
    if (sel === "[data-year]") return pool.dataYear;
    return null;
  }

  return {
    body: mockElement(pool),
    querySelector(sel) {
      if (sel.startsWith("#")) return byId[sel.slice(1)] ?? mockElement(pool);
      const matched = matchSelector(sel);
      return matched?.[0] ?? mockElement(pool);
    },
    querySelectorAll(sel) {
      if (sel.startsWith("#")) {
        const el = byId[sel.slice(1)];
        return el ? [el] : [];
      }
      return matchSelector(sel) ?? [];
    },
    getElementById(id) { return byId[id] ?? mockElement(pool); },
  };
}

function scanCss(cssPath) {
  const css = fs.readFileSync(cssPath, "utf8");
  const stripped = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const rules = (stripped.match(/\{/g) || []).length;
  const badLines = [];
  stripped.split("\n").forEach((line, i) => {
    if (!/content\s*:/.test(line)) return;
    if ((line.match(/"/g) || []).length % 2 !== 0) badLines.push(i + 1);
  });
  return { rules, badLines };
}

let failed = 0;

for (const dir of subjects) {
  const subjectDir = path.join(root, dir);
  const cssScan = scanCss(path.join(subjectDir, "styles.css"));
  if (cssScan.rules < MIN_CSS_RULES) {
    console.error(`FAIL ${dir} css: ${cssScan.rules} rules (need >= ${MIN_CSS_RULES})`);
    failed++;
  } else if (cssScan.badLines.length) {
    console.error(`FAIL ${dir} css: unclosed content strings at lines ${cssScan.badLines.join(", ")}`);
    failed++;
  } else {
    console.log(`OK ${dir} css: ${cssScan.rules} rules`);
  }

  const html = fs.readFileSync(path.join(subjectDir, "index.html"), "utf8");
  const scripts = parseScripts(html);
  const store = {};
  const context = {
    window: {
      location: { search: "", href: "http://localhost/", hash: "" },
      print: () => {},
    },
    document: buildDocument(html),
    localStorage: {
      getItem: k => store[k] ?? null,
      setItem: (k, v) => { store[k] = String(v); },
      removeItem: k => { delete store[k]; },
    },
    console,
    setTimeout: fn => { if (typeof fn === "function") fn(); return 0; },
    clearTimeout: () => {},
    URLSearchParams,
    Date,
    Math,
    JSON,
    navigator: { userAgent: "verify-app-bootstrap" },
  };
  context.window.document = context.document;
  context.window.localStorage = context.localStorage;
  vm.createContext(context);

  try {
    for (const file of scripts) {
      const scriptPath = path.resolve(subjectDir, file.replace(/\?.*$/, ""));
      vm.runInContext(fs.readFileSync(scriptPath, "utf8"), context, { filename: file });
      if (context.window.FRACTION_MARKUP) context.FRACTION_MARKUP = context.window.FRACTION_MARKUP;
    }
    console.log(`OK ${dir} bootstrap`);
  } catch (err) {
    console.error(`FAIL ${dir} bootstrap: ${err.stack || err.message}`);
    failed++;
  }
}

if (failed) {
  console.error(`\napp-bootstrap: ${failed} check(s) failed`);
  process.exit(1);
}
console.log(`\napp-bootstrap: all ${subjects.length} subjects passed`);
