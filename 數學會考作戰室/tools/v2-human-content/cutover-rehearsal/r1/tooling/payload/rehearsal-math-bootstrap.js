(() => {
  "use strict";

  const version = "20260712-human-cutover-rehearsal-r1";
  const search = window.location?.search || "";
  const legacy = /(?:^|[?&])legacy=1(?:&|$)/.test(search);
  const generated = /(?:^|[?&])generated=1(?:&|$)/.test(search);

  if (legacy && generated) {
    throw new Error("Cutover rehearsal route is ambiguous: legacy=1 and generated=1 cannot be combined.");
  }

  const generatedV2Scripts = [
    "v2/math-syllabus-v2.js",
    "v2/math-v2-production-profile.js",
    "v2/math-v2-unit-manifest.js",
    "v2/math-quiz-blueprints-v2.js",
    "v2/math-mock-blueprint-v2.js",
    "v2/math-engine-v2.js",
    "v2/math-production-bootstrap.js",
    "app.js"
  ];

  const legacyScripts = [
    "quiz-taxonomy.js",
    "quiz-variant-bank.js",
    "quiz-variants.js",
    "lecture-taxonomy.js",
    "questions.js",
    "app-legacy.js"
  ];

  const humanScripts = [
    "human-runtime-rc/human-rc-bootstrap.js"
  ];

  function load(scriptPath) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `${scriptPath}?v=${version}`;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`無法載入 ${scriptPath}`));
      document.body.appendChild(script);
    });
  }

  async function start() {
    const mode = legacy ? "v1-rollback" : generated ? "v2-rehearsal-rollback" : "human-rc-r1";
    const scripts = legacy ? legacyScripts : generated ? generatedV2Scripts : humanScripts;
    document.documentElement.dataset.mathEngine = mode;
    window.__MATH_CUTOVER_REHEARSAL_R1__ = Object.freeze({
      mode,
      productionRouteChanged: false,
      oldDatabaseDeletionAllowed: false,
      generatedRollbackAvailable: true,
      v1RollbackAvailable: true
    });
    for (const scriptPath of scripts) await load(scriptPath);
  }

  if (typeof document === "undefined" || typeof document.createElement !== "function") return;

  start().catch(error => {
    document.documentElement.dataset.mathEngine = "cutover-rehearsal-load-failed";
    const main = document.querySelector("#main");
    if (main) {
      const escaped = String(error.stack || error.message || error).replace(/[&<>"]/g, char => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"
      }[char]));
      main.innerHTML = `<section class="view active"><div class="page-heading"><div><p class="eyebrow">REHEARSAL LOAD ERROR</p><h1>切換演練載入失敗</h1><pre>${escaped}</pre></div></div></section>`;
    }
    throw error;
  });
})();
