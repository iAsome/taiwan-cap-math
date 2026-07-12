(() => {
  "use strict";
  async function start() {
    const module = await import("./bootstrap.mjs");
    await module.installHumanRuntimeRc();
    const script = document.createElement("script");
    script.src = "human-runtime-rc/app-human-rc.js";
    script.onload = () => { window.__HUMAN_RC_BOOTSTRAP_READY__ = true; };
    script.onerror = () => { throw new Error("Human RC app failed to load"); };
    document.body.appendChild(script);
  }
  start().catch(error => {
    document.documentElement.dataset.mathEngine = "human-rc-load-failed";
    const main = document.querySelector("#main");
    if (main) main.innerHTML = `<section class="view active"><div class="page-heading"><div><p class="eyebrow">HUMAN RC LOAD ERROR</p><h1>人工作者 Release Candidate 載入失敗</h1><pre>${String(error.stack || error.message || error).replace(/[&<>\"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}</pre></div></div></section>`;
    throw error;
  });
})();
