(() => {
  "use strict";

  const version = "20260712-human-production-r1";
  const search = window.location?.search || "";
  const legacy = /(?:^|[?&])legacy=1(?:&|$)/.test(search);
  const generated = /(?:^|[?&])generated=1(?:&|$)/.test(search);

  if (legacy && generated) {
    throw new Error("載入模式衝突：legacy=1 與 generated=1 不可同時使用。");
  }

  const humanScripts = ["human-runtime/human-production-bootstrap.js"];
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
    const mode = legacy ? "v1-rollback" : generated ? "generated-v2-rollback" : "human-production-r1";
    const scripts = legacy ? legacyScripts : generated ? generatedV2Scripts : humanScripts;
    document.documentElement.dataset.mathEngine = mode;
    window.__MATH_HUMAN_PRODUCTION_LOADER_R1__ = Object.freeze({
      mode,
      contentAuthority: "CHATGPT_HUMAN_AUTHORED_R1",
      humanDefault: !legacy && !generated,
      generatedRollbackAvailable: true,
      v1RollbackAvailable: true
    });
    for (const scriptPath of scripts) await load(scriptPath);
  }

  if (typeof document === "undefined" || typeof document.createElement !== "function") return;

  start().catch(error => {
    document.documentElement.dataset.mathEngine = "human-production-load-failed";
    const main = document.querySelector("#main");
    if (main) {
      const escaped = String(error.stack || error.message || error).replace(/[&<>"]/g, char => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"
      }[char]));
      main.innerHTML = `<section class="view active"><div class="page-heading"><div><p class="eyebrow">LOAD ERROR</p><h1>數學內容載入失敗</h1><pre>${escaped}</pre><p>可暫時使用 <code>?generated=1</code> 或 <code>?legacy=1</code> 回退。</p></div></div></section>`;
    }
    throw error;
  });
})();
