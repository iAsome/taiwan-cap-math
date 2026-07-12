(() => {
  "use strict";

  const version = "20260712v2gen";
  const legacy = /(?:^|[?&])legacy=1(?:&|$)/.test(window.location?.search || "");
  const v2Scripts = [
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
    document.documentElement.dataset.mathEngine = legacy ? "v1-rollback" : "v2";
    for (const scriptPath of legacy ? legacyScripts : v2Scripts) await load(scriptPath);
  }

  if (typeof document === "undefined" || typeof document.createElement !== "function") return;

  start().catch(error => {
    const main = document.querySelector("#main");
    if (main) main.innerHTML = `<section class="view active"><div class="page-heading"><div><p class="eyebrow">LOAD ERROR</p><h1>數學內容載入失敗</h1><p>${String(error.message || error).replace(/[&<>\"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]))}</p></div></div></section>`;
    throw error;
  });
})();
