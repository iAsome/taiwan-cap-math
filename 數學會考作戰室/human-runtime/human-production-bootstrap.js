(() => {
  "use strict";
  async function start() {
    const module = await import("./bootstrap.mjs");
    await module.installHumanProductionRuntime();
    const script = document.createElement("script");
    script.src = "human-runtime/app-human.js?v=20260712-human-production-r1";
    script.onload = () => { window.__HUMAN_PRODUCTION_BOOTSTRAP_READY__ = true; };
    script.onerror = () => { throw new Error("Human production app failed to load"); };
    document.body.appendChild(script);
  }
  start().catch(error => {
    document.documentElement.dataset.mathEngine = "human-production-load-failed";
    const main = document.querySelector("#main");
    if (main) {
      const escaped = String(error.stack || error.message || error).replace(/[&<>"]/g, char => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"
      }[char]));
      main.innerHTML = `<section class="view active"><div class="page-heading"><div><p class="eyebrow">HUMAN RUNTIME LOAD ERROR</p><h1>人工作者內容載入失敗</h1><pre>${escaped}</pre></div></div></section>`;
    }
    throw error;
  });
})();
