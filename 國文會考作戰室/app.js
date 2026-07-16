(() => {
  const { units, domains, strategies, archives, sourcePolicy, officialSources, publisherSources, tipAudits } = window.CHINESE_DATA;
  const capAnalysis = window.CAP_ANALYSIS;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const esc = value => String(value).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const nl = value => FRACTION_MARKUP.renderMath(value, esc).replace(/\n/g, "<br>");
  const letters = ["A", "B", "C", "D"];
  const abilityLabel = { identify: "擷取訊息", comprehend: "統整解釋", infer: "推論賞析" };
  const viewNames = { home: "學習總覽", r4: "R4 國文技能課程", exam: "全範圍模擬考", quiz: "R4 單元小考題庫", papers: "我的考卷", handbook: "舊版全冊講義", atlas: "題型與技巧地圖", analysis: "逐題分析", sources: "資料與技巧審核", archive: "近十年考卷館" , paper: "官方考卷" };
  let toastTimer;

  const state = {
    view: "home",
    selectedUnit: 1,
    grade: "all",
    search: "",
    tipSearch: "",
    tipVerdict: "all",
    completed: (() => { try { return new Set(JSON.parse(localStorage.getItem("capChinese.completed") || "[]")); } catch { return new Set(); } })(),
    exam: null,
    answers: [],
    submitted: false,
    seconds: 4200,
    totalSeconds: 4200,
    timerId: null,
    currentQuestion: 0,
    paperDateFilter: "all",
    paperHistoryPage: 0,
    r4UnitId: "CHI_R4_U01",
    r4SkillId: "CHI_R4_S001",
    r4Search: "",
    writingIndex: 0
  };

  function formatDuration(seconds) {
    const total = Math.max(0, Math.round(seconds));
    const m = Math.floor(total / 60), s = total % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function toast(message) {
    const el = $("#toast");
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
  }

  function readJson(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
    catch { return fallback; }
  }

  function paperHistory() { return readJson("capChinese.paperHistory", []); }

  function savePaperRecord(record) {
    try { localStorage.setItem("capChinese.paperHistory", JSON.stringify([record, ...paperHistory()].slice(0, 40))); }
    catch {
      try { localStorage.setItem("capChinese.paperHistory", JSON.stringify([record, ...paperHistory()].slice(0, 15))); }
      catch { toast("本機儲存空間不足，這次考卷未保存到我的考卷"); }
    }
  }

  function setView(view) {
    if (!viewNames[view]) return;
    state.view = view;
    $$(".view").forEach(el => el.classList.toggle("active", el.id === `view-${view}`));
    $$("#mainNav [data-view]").forEach(el => el.classList.toggle("active", el.dataset.view === view));
    $("#viewTitle").textContent = viewNames[view];
    document.body.classList.remove("menu-open");
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (view === "exam") configureExamHeader();
    if (view === "r4") renderR4().catch(showR4Error);
    if (view === "quiz") renderQuizCatalog();
    if (view === "papers") renderMyPapers();
    if (view === "handbook") renderHandbook();
    if (view === "atlas") renderAtlas();
    if (view === "analysis") renderAnalysis();
    if (view === "sources") renderSources();
    if (view === "archive") renderArchive();
    if (view === "paper") renderPaperView();
  }

  function updateLearningProgress() {
    const legacyPct = Math.round(state.completed.size / units.length * 100);
    const r4Progress = window.CHINESE_R4.catalog ? window.CHINESE_R4.progress().completedSkills.length / window.CHINESE_R4.catalog.skills.length : 0;
    const r4Pct = Math.round(r4Progress * 100);
    $("#homeProgress").textContent = r4Pct;
    $(".score-ring").style.setProperty("--progress", `${r4Pct * 3.6}deg`);
    $("#completedUnits").textContent = `${state.completed.size} / ${units.length}`;
    $("#handbookBar").style.width = `${legacyPct}%`;
  }

  function filteredUnits() {
    const q = state.search.trim().toLowerCase();
    return units.filter(unit => (state.grade === "all" || String(unit.grade) === state.grade) && (!q || [unit.title, unit.domain, unit.summary, unit.core, unit.formula, unit.tips.join(" ")].join(" ").toLowerCase().includes(q)));
  }

  function renderHandbook() {
    const list = filteredUnits();
    if (!list.some(u => u.id === state.selectedUnit) && list.length) state.selectedUnit = list[0].id;
    const grouped = [7, 8, 9].map(grade => ({ grade, items: list.filter(u => u.grade === grade) })).filter(g => g.items.length);
    $("#unitIndex").innerHTML = grouped.map(group => `
      <div class="index-group"><strong>國中 ${group.grade === 7 ? "一年級" : group.grade === 8 ? "二年級" : "三年級"}</strong>
        ${group.items.map(unit => `<button class="${unit.id === state.selectedUnit ? "active" : ""}" data-unit="${unit.id}"><span>${String(unit.id).padStart(2, "0")}</span><b>${esc(unit.title)}</b><i>${state.completed.has(unit.id) ? "✓" : ""}</i></button>`).join("")}
      </div>`).join("");
    $$("[data-unit]", $("#unitIndex")).forEach(button => button.addEventListener("click", () => {
      state.selectedUnit = Number(button.dataset.unit);
      renderHandbook();
      if (window.innerWidth < 841) $("#unitContent").scrollIntoView({ behavior: "smooth", block: "start" });
    }));

    const unit = units.find(u => u.id === state.selectedUnit && list.some(x => x.id === u.id));
    if (!unit) {
      $("#unitContent").innerHTML = `<div class="unit-empty">找不到符合條件的單元，換個關鍵字試試。</div>`;
      updateLearningProgress();
      return;
    }
    $("#unitContent").innerHTML = `
      <article class="unit-card">
        <header class="unit-hero" data-number="${String(unit.id).padStart(2, "0")}">
          <div class="unit-meta"><span>國${unit.grade === 7 ? "一" : unit.grade === 8 ? "二" : "三"}</span><span>${esc(unit.domain)}</span><span>單元代碼 ${String(unit.id).padStart(2, "0")}</span></div>
          <h2>${esc(unit.title)}</h2><p>${esc(unit.summary)}</p>
        </header>
        <div class="unit-body">
          <section class="lesson-block"><div class="lesson-label">核心觀念</div><div class="lesson-content"><h3>先把這件事想清楚</h3><p>${nl(unit.core)}</p><div class="clarify-box"><strong>觀念澄清：</strong> ${nl(unit.clarify)}</div></div></section>
          <section class="lesson-block"><div class="lesson-label">重點語料與判斷方法</div><div class="lesson-content"><div class="formula-box">${nl(unit.formula)}</div><h3>判斷方法不是憑印象</h3><p>${nl(unit.derivation)}</p></div></section>
          <section class="lesson-block"><div class="lesson-label">標準判讀流程</div><div class="lesson-content"><ol>${unit.steps.map(step => `<li>${nl(step)}</li>`).join("")}</ol></div></section>
          <section class="lesson-block"><div class="lesson-label">會考快解技巧</div><div class="lesson-content"><ul class="tip-list">${unit.tips.map(tip => `<li>${nl(tip)}</li>`).join("")}</ul></div></section>
        </div>
        <button class="complete-button ${state.completed.has(unit.id) ? "done" : ""}" data-complete="${unit.id}">${state.completed.has(unit.id) ? "✓ 已掌握這個單元（按一下取消）" : "標記為已掌握"}</button>
      </article>`;
    $("[data-complete]").addEventListener("click", () => {
      state.completed.has(unit.id) ? state.completed.delete(unit.id) : state.completed.add(unit.id);
      localStorage.setItem("capChinese.completed", JSON.stringify([...state.completed]));
      updateLearningProgress();
      renderHandbook();
      toast(state.completed.has(unit.id) ? "已記錄為掌握單元" : "已取消掌握標記");
    });
    updateLearningProgress();
  }

  function renderAtlas() {
    $("#atlasContent").innerHTML = `
      <div class="domain-grid">${domains.map(d => `<article class="domain-card"><span>${d.mark}</span><h3>${esc(d.name)}</h3><p>${nl(d.desc)}</p><ul>${d.skills.map(s => `<li>${nl(s)}</li>`).join("")}</ul></article>`).join("")}</div>
      <section class="strategy-section"><p class="eyebrow">PATTERN → TOOL</p><h2>常見題型：看到什麼，就啟動什麼判斷方法</h2>
        <table class="strategy-table"><thead><tr><th>題型</th><th>核心能力</th><th>穩定解法</th><th>最常失分</th></tr></thead><tbody>${strategies.map(row => `<tr>${row.map(cell => `<td>${nl(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table>
      </section>`;
  }

const OFFICIAL_EXAMS_URL = "https://cap.rcpet.edu.tw/examination.html";

  function openPaperView(item) {
    state.paperItem = item;
    setView("paper");
  }

  function renderPaperView() {
    const item = state.paperItem;
    const host = $("#paperViewer");
    if (!item) {
      host.innerHTML = `<p class="unit-empty">請從考卷館選擇年度。</p>`;
      return;
    }
    $("#paperViewTitle").textContent = `${item.year} 年官方考卷`;
    $("#paperViewDesc").textContent = `${item.year} 年（${item.western}）官方題本 PDF，可預覽或下載。`;
    host.innerHTML = `
      <div class="paper-view-toolbar">
        <strong>${item.year} 年 · ${item.western}</strong>
        <a class="secondary link-button" href="${item.page}" target="_blank" rel="noopener">官方網頁 ↗</a>
        <a class="secondary link-button" href="${OFFICIAL_EXAMS_URL}" target="_blank" rel="noopener">歷屆試題總頁 ↗</a>
      </div>
      <div class="paper-downloads">
        <a class="primary link-button" href="${item.paper}" target="_blank" rel="noopener">開啟題本 PDF</a>
        <a class="secondary link-button" href="${item.paper}" download>下載題本</a>
        <a class="secondary link-button" href="${item.answer}" download>下載答案</a>
        <a class="secondary link-button" href="${item.guide}" download>下載試題說明</a>
      </div>
      <iframe class="paper-pdf-frame" src="${item.paper}" title="${item.year} 年官方題本"></iframe>
      <p class="paper-view-note">若預覽空白，請直接下載 PDF；數學科離線包若缺 PDF，請依 README 執行 tools-download 補齊。官方總頁：<a href="${OFFICIAL_EXAMS_URL}" target="_blank" rel="noopener">cap.rcpet.edu.tw/examination.html</a></p>`;
    $$("[data-view]", host).forEach(button => button.addEventListener("click", () => setView(button.dataset.view)));
  }

  function renderArchive() {
    $("#archiveGrid").innerHTML = archives.map((item, index) => `
      <article class="archive-card ${index === 0 ? "latest" : ""}">
        <div class="year-block"><strong>${item.year}</strong><span>${item.western} 年${index === 0 ? " · 最新" : ""}</span></div>
        <div class="archive-body"><h3>${item.year} 年國中教育會考</h3><p>官方題本 PDF｜可預覽與下載</p>
          <div class="archive-actions"><button class="primary" data-paper-year="${item.year}">查看考卷 →</button></div>
        </div>
      </article>`).join("");
    $$("[data-paper-year]", $("#archiveGrid")).forEach(button => button.addEventListener("click", () => {
      const item = archives.find(entry => entry.year === Number(button.dataset.paperYear));
      if (item) openPaperView(item);
    }));
  }


  function renderSources() {
    $("#auditCount").textContent = tipAudits.length;
    $("#sourcePolicyGrid").innerHTML = sourcePolicy.map(item => `
      <article class="policy-card" data-tier="${item.tier}"><span>第 ${item.tier} 層 · ${esc(item.badge)}</span><h3>${esc(item.title)}</h3><p>${esc(item.rule)}</p><small><strong>使用範圍：</strong>${esc(item.use)}</small></article>`).join("");
    $("#officialSourceList").innerHTML = officialSources.map(item => `
      <a class="source-card" href="${item.url}" target="_blank" rel="noopener"><div><strong>${esc(item.title)}</strong><span>${esc(item.owner)}｜${esc(item.role)}</span></div><b>↗</b></a>`).join("");
    $("#publisherSourceList").innerHTML = publisherSources.map(item => `
      <article class="source-card publisher-card"><span class="publisher-logo">${esc(item.publisher)}</span><div><strong>${esc(item.title)}</strong><span>${esc(item.role)}</span></div><b>第 2 層</b><div class="publisher-links"><a href="${item.url}" target="_blank" rel="noopener">官方網站 ↗</a><a href="${item.errata}" target="_blank" rel="noopener">勘誤／出版資訊 ↗</a></div></article>`).join("");
    renderTipAudits();
  }

  function renderAnalysis() {
    const years = Object.keys(capAnalysis.officialByYear).map(Number).sort((a, b) => a - b);
    const official = capAnalysis.officialByYear;
    const primary = capAnalysis.primaryUnits;
    const total = years.reduce((sum, year) => sum + primary[year].length, 0);
    const readingItems = years.reduce((sum, year) => sum + (official[year].readingSetItems || 0), 0);
    $("#analysisStats").innerHTML = [
      [years.length, "屆已完整逐題編碼"], [total, "逐題完成主概念編碼"], [readingItems, "共用選文題組子題"], ["10", "屆官方題本已下載存檔"]
    ].map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join("");

    const domainCounts = {};
    const unitYearCounts = {};
    years.forEach(year => {
      unitYearCounts[year] = {};
      primary[year].forEach(unitId => {
        unitYearCounts[year][unitId] = (unitYearCounts[year][unitId] || 0) + 1;
        const domain = capAnalysis.domainByUnit[unitId];
        domainCounts[domain] = (domainCounts[domain] || 0) + 1;
      });
    });
    $("#domainDistribution").innerHTML = capAnalysis.domainOrder.map(domain => `<article class="domain-stat"><span>${domain}</span><strong>${domainCounts[domain] || 0}</strong><small>${((domainCounts[domain] || 0) / total * 100).toFixed(1)}%｜已建置年度合計</small></article>`).join("");

    const unitTotals = {};
    Object.values(primary).flat().forEach(unitId => unitTotals[unitId] = (unitTotals[unitId] || 0) + 1);
    const matrixUnits = units.slice().sort((a, b) => (unitTotals[b.id] || 0) - (unitTotals[a.id] || 0));
    $("#conceptMatrixHead").innerHTML = `<tr><th>主概念（依已建置年度題數排序）</th>${years.map(year => `<th>${year}</th>`).join("")}<th>合計</th><th>占比</th></tr>`;
    $("#conceptMatrixBody").innerHTML = matrixUnits.map(unit => {
      const count = unitTotals[unit.id] || 0;
      return `<tr class="${count >= 3 ? "high" : ""}"><td>${esc(unit.title)}<small class="audit-unit">${esc(capAnalysis.domainByUnit[unit.id])}</small></td>${years.map(year => `<td>${unitYearCounts[year][unit.id] || 0}</td>`).join("")}<td class="total">${count}</td><td>${total ? (count / total * 100).toFixed(1) : "0.0"}%</td></tr>`;
    }).join("");
    renderChapterLedger();

    $("#yearLedger").innerHTML = years.slice().reverse().map((year, index) => {
      const info = official[year];
      return `<details ${index === 0 ? "open" : ""}><summary><strong>${year}</strong><span>${info.curriculum}｜${info.mc} 題選擇題｜${info.readingSets || 0} 組共用選文｜70 分鐘</span><b>展開逐題編碼 ＋</b></summary><div class="ledger-body"><div class="ledger-questions">${primary[year].map((unitId, i) => `<article class="ledger-item"><b>${i + 1}</b><span>${esc(units.find(u => u.id === unitId)?.title || "跨單元")}<small>${esc(capAnalysis.domainByUnit[unitId])}</small></span></article>`).join("")}</div></div></details>`;
    }).join("");
  }

  function renderTipAudits() {
    const q = state.tipSearch.trim().toLowerCase();
    const list = tipAudits.filter(item => (state.tipVerdict === "all" || item.verdict === state.tipVerdict) && (!q || [item.tip, item.condition, item.why, item.source, units[item.unitId - 1]?.title].join(" ").toLowerCase().includes(q)));
    const verdictClass = verdict => verdict === "通過" ? "pass" : verdict === "有條件" ? "conditional" : "reject";
    $("#tipAuditBody").innerHTML = list.length ? list.map(item => `
      <tr><td>${nl(item.tip)}<span class="audit-unit">${esc(units[item.unitId - 1]?.title || "跨單元")}｜${esc(item.source)}</span></td><td><span class="verdict ${verdictClass(item.verdict)}">${esc(item.verdict)}</span></td><td>${nl(item.condition)}</td><td>${nl(item.why)}</td></tr>`).join("") : `<tr><td class="audit-empty" colspan="4">找不到符合條件的技巧。</td></tr>`;
    $("#auditCount").textContent = state.tipVerdict === "all" && !q ? tipAudits.length : `${list.length}/${tipAudits.length}`;
  }

  function capItemsForUnits(unitIds) {
    const scope = new Set(unitIds);
    return Object.keys(capAnalysis.primaryUnits).map(Number).sort((a, b) => b - a).flatMap(year => {
      return capAnalysis.primaryUnits[year].map((unitId, index) => {
        if (!scope.has(unitId)) return null;
        return { year, unitId, label: `${year}-${index + 1}`, unitTitle: units.find(unit => unit.id === unitId)?.title || `單元 ${unitId}` };
      }).filter(Boolean);
    });
  }

  function showR4Error(error) {
    console.error("R4 render failed:", error);
    const host = $("#r4Lesson");
    if (host) host.innerHTML = `<div class="unit-empty" role="alert">R4 靜態資料載入失敗：${esc(error.message)}</div>`;
  }

  function r4AssetHtml(asset) {
    const table = asset.dataTable ? `<table><thead><tr>${asset.dataTable.columns.map(value => `<th>${esc(value)}</th>`).join("")}</tr></thead><tbody>${asset.dataTable.rows.map(row => `<tr>${row.map(value => `<td>${esc(value)}</td>`).join("")}</tr>`).join("")}</tbody></table>` : "";
    return `<figure class="r4-asset"><img src="${esc(asset.url)}" alt="${esc(asset.alt)}"><figcaption>${esc(asset.caption)}</figcaption><details><summary>圖表完整文字與資料表</summary><p>${esc(asset.longDescription)}</p>${table}<small>來源與授權：${esc(asset.source)}｜${esc(asset.license)}</small></details></figure>`;
  }

  async function renderWritingTask() {
    const tasks = await window.CHINESE_R4.getWritingTasks();
    const task = tasks[state.writingIndex % tasks.length];
    const mode = { "narrative-reflection": "敘事反思", "argumentative": "論說", "expository": "說明", "letter": "書信", "mixed-mode": "綜合表達" }[task.mode] || "完整寫作";
    $("#r4WritingTask").innerHTML = `<article class="writing-card"><div><span>${esc(mode)}</span><small>${esc(task.id)}</small></div><h3>${esc(task.title)}</h3><p>${nl(task.prompt)}</p><div class="writing-grid"><section><h4>作答要求</h4><ul>${task.taskRequirements.map(value => `<li>${nl(value)}</li>`).join("")}</ul></section><section><h4>評分焦點</h4><ul>${task.scoringFocus.map(value => `<li>${nl(value)}</li>`).join("")}</ul></section></div></article>`;
  }

  async function renderR4() {
    const catalog = window.CHINESE_R4.catalog;
    if (!catalog) return;
    const selectedUnit = catalog.units.find(unit => unit.id === state.r4UnitId) || catalog.units[0];
    state.r4UnitId = selectedUnit.id;
    const unitSelect = $("#r4UnitSelect");
    unitSelect.innerHTML = catalog.units.map((unit, index) => `<option value="${unit.id}" ${unit.id === selectedUnit.id ? "selected" : ""}>${String(index + 1).padStart(2, "0")}｜${esc(unit.title)}</option>`).join("");
    const query = state.r4Search.trim().toLowerCase();
    const skills = selectedUnit.skillIds.map(id => catalog.skills.find(skill => skill.id === id)).filter(skill => skill && (!query || skill.title.toLowerCase().includes(query)));
    if (!skills.some(skill => skill.id === state.r4SkillId)) state.r4SkillId = skills[0]?.id || selectedUnit.skillIds[0];
    const completed = new Set(window.CHINESE_R4.progress().completedSkills);
    $("#r4SkillList").innerHTML = skills.length ? skills.map((skill, index) => `<button class="${skill.id === state.r4SkillId ? "active" : ""}" data-r4-skill="${skill.id}"><span>${String(index + 1).padStart(2, "0")}</span><b>${esc(skill.title)}</b><i>${completed.has(skill.id) ? "✓" : ""}</i></button>`).join("") : `<p class="unit-empty">這個單元沒有符合的技能。</p>`;
    const progressPercent = Math.round(completed.size / catalog.skills.length * 100);
    $("#r4Completed").textContent = `${completed.size} / ${catalog.skills.length}`;
    $("#r4ProgressBar").style.width = `${progressPercent}%`;
    $$('[data-r4-skill]', $("#r4SkillList")).forEach(button => button.addEventListener("click", () => {
      state.r4SkillId = button.dataset.r4Skill;
      renderR4().catch(showR4Error);
      if (window.innerWidth < 841) $("#r4Lesson").scrollIntoView({ behavior: "smooth", block: "start" });
    }));

    const unit = await window.CHINESE_R4.loadUnit(selectedUnit.id);
    const lecture = unit.lectures.find(item => item.skillId === state.r4SkillId) || unit.lectures[0];
    state.r4SkillId = lecture.skillId;
    const skill = catalog.skills.find(item => item.id === lecture.skillId);
    const assetRecords = await window.CHINESE_R4.getAssets(lecture.assets);
    $("#r4Lesson").innerHTML = `<article class="unit-card r4-lesson-card">
      <header class="unit-hero"><div class="unit-meta"><span>${esc(selectedUnit.title)}</span><span>${esc(lecture.skillId)}</span></div><h2>${esc(skill.title)}</h2><p>${lecture.objectives.map(nl).join("；")}</p></header>
      <div class="unit-body">
        ${lecture.sections.map(section => `<section class="lesson-block"><div class="lesson-label">${esc(section.title)}</div><div class="lesson-content"><p>${nl(section.content)}</p></div></section>`).join("")}
        <section class="lesson-block"><div class="lesson-label">完整示例</div><div class="lesson-content r4-example-list">${lecture.workedExamples.map((example, index) => `<article><h3>示例 ${index + 1}</h3><p>${nl(example.prompt)}</p><ol>${example.steps.map(step => `<li>${nl(step)}</li>`).join("")}</ol><p><strong>答案：</strong>${nl(example.answer)}</p><p><strong>理由：</strong>${nl(example.why)}</p></article>`).join("")}</div></section>
        <section class="lesson-block"><div class="lesson-label">迷思澄清</div><div class="lesson-content r4-misconceptions">${lecture.misconceptions.map((item, index) => `<article><h3>迷思 ${index + 1}</h3><p><strong>常見想法：</strong>${nl(item.belief)}</p><p><strong>問題：</strong>${nl(item.whyWrong)}</p><p><strong>修正：</strong>${nl(item.correction)}</p></article>`).join("")}</div></section>
        <section class="lesson-block"><div class="lesson-label">診斷與遷移</div><div class="lesson-content r4-checks">${lecture.checks.map((item, index) => `<details><summary>練習 ${index + 1}｜${esc(item.prompt)}</summary><p><strong>答案：</strong>${nl(item.answer)}</p><p>${nl(item.reason)}</p></details>`).join("")}</div></section>
        ${assetRecords.length ? `<section class="lesson-block"><div class="lesson-label">必要圖像</div><div class="lesson-content">${assetRecords.map(r4AssetHtml).join("")}</div></section>` : ""}
      </div>
      <div class="r4-lesson-actions"><button class="complete-button ${completed.has(lecture.skillId) ? "done" : ""}" data-r4-complete="${lecture.skillId}">${completed.has(lecture.skillId) ? "✓ 已掌握（按一下取消）" : "標記為已掌握"}</button><a class="primary" href="?quiz=r4-skill-${lecture.skillId.match(/\d{3}$/u)[0]}">做 12 題技能練習 →</a></div>
    </article>`;
    $("[data-r4-complete]").addEventListener("click", event => {
      const skillId = event.currentTarget.dataset.r4Complete;
      window.CHINESE_R4.setSkillCompleted(skillId, !completed.has(skillId));
      updateLearningProgress();
      renderR4().catch(showR4Error);
      toast(completed.has(skillId) ? "已取消掌握標記" : "已記錄為掌握技能");
    });
    await renderWritingTask();
  }

  function renderQuizCatalog() {
    const catalog = window.CHINESE_R4.catalog;
    if (!catalog) return;
    $("#quizCatalog").innerHTML = catalog.units.map((unit, index) => `<article class="quiz-card chapter">
      <div class="quiz-card-top"><span>單元 ${String(index + 1).padStart(2, "0")}</span><small>12 題｜20 分鐘</small></div>
      <h3>${esc(unit.title)}</h3>
      <p>${unit.skillIds.length} 項技能輪流取題；只選取與排序已審核靜態題目。</p>
      <small class="quiz-official-code">第四學習階段國語文課綱</small>
      <a class="primary" href="?quiz=r4-unit-${String(index + 1).padStart(2, "0")}">開始作答 →</a>
    </article>`).join("");
  }

  function renderChapterLedger() {
    const catalog = window.CHINESE_R4.catalog;
    if (!catalog) return;
    $("#unitChapterLedger").innerHTML = Array.from({ length: 6 }, (_, group) => {
      const items = catalog.units.slice(group * 8, group * 8 + 8);
      return `<details class="unit-book-ledger" ${group === 0 ? "open" : ""}><summary><strong>R4 單元 ${group * 8 + 1}–${group * 8 + items.length}</strong><span>${items.length} 個單元｜${items.reduce((sum, item) => sum + item.skillIds.length, 0)} 項技能</span><b>展開／收合</b></summary>
        <div class="unit-chapter-list">${items.map((item, offset) => `<article class="unit-chapter-item"><div><strong>${esc(item.title)}</strong><small>${item.skillIds.length} 項技能｜第四學習階段國語文課綱</small></div><span>12 題單元小考</span><div class="unit-cap-list"><i>靜態題庫</i><i>逐選項理由</i></div><a href="?quiz=r4-unit-${String(group * 8 + offset + 1).padStart(2, "0")}">進入本單元小考 →</a></article>`).join("")}</div>
      </details>`;
    }).join("");
  }

  function renderMyPapers() {
    const allRecords = paperHistory();
    const dates = PAPER_HISTORY_UI.dateOptions(allRecords);
    const { records, page, totalPages } = PAPER_HISTORY_UI.visibleRecords(allRecords, {
      date: state.paperDateFilter,
      page: state.paperHistoryPage,
      pageSize: 5
    });
    state.paperHistoryPage = page;
    $("#paperHistoryStats").innerHTML = PAPER_HISTORY_UI.paperStats(allRecords)
      .map(([label, value]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join("");
    const { toolbar, pager } = PAPER_HISTORY_UI.renderToolbar({
      date: state.paperDateFilter,
      page,
      totalPages,
      dates
    });
    $("#paperHistoryToolbar").innerHTML = toolbar;
    $("#paperHistoryPager").innerHTML = pager;
    PAPER_HISTORY_UI.bindToolbar($("#paperHistoryToolbar"), $("#paperHistoryPager"), {
      getState: () => ({ page: state.paperHistoryPage, totalPages, date: state.paperDateFilter }),
      onChange: patch => {
        if (patch.date != null) state.paperDateFilter = patch.date;
        if (patch.page != null) state.paperHistoryPage = patch.page;
        renderMyPapers();
      }
    });
    $("#paperHistoryList").innerHTML = records.length ? records.map(record => {
      const date = new Date(record.finishedAt).toLocaleString("zh-TW", { hour12: false });
      const missed = record.missedUnits?.map(unit => `<span>${esc(unit)}</span>`).join("") || "";
      const durationText = record.elapsedSeconds != null
        ? `｜作答時間 ${formatDuration(record.elapsedSeconds)}${record.overtimeSeconds > 0 ? `（超時 ${formatDuration(record.overtimeSeconds)}）` : ""}`
        : "";
      const dateLine = `${esc(date)}｜${record.correct}/${record.mcCount} 題｜${record.answered}/${record.total} 已作答${durationText}`;
      return `<article class="paper-history-card">
        <div>${PAPER_HISTORY_UI.renderHistoryCardInfo({ title: esc(record.title), dateLine })}</div>
        ${PAPER_HISTORY_UI.renderScorePercent(record.correct, record.mcCount)}
        <div class="missed-units">${missed || "<span>沒有錯題</span>"}</div>
        <button class="secondary" data-review-paper="${esc(record.id)}">查看當次考卷與詳解</button>
      </article>`;
    }).join("") : `<div class="paper-history-empty"><h2>目前還沒有考過的卷子。</h2><p>完成任一小考或模擬考後，這裡會自動保存紀錄。</p><button class="primary" data-view="quiz">去做小考</button></div>`;
    $$("[data-review-paper]", $("#paperHistoryList")).forEach(button => button.addEventListener("click", () => reviewSavedPaper(button.dataset.reviewPaper)));
    $$("[data-view]", $("#paperHistoryList")).forEach(button => button.addEventListener("click", () => setView(button.dataset.view)));
  }

  function reviewSavedPaper(recordId) {
    const record = paperHistory().find(item => item.id === recordId);
    if (!record) return toast("找不到這份考卷紀錄");
    state.exam = record.exam;
    state.answers = record.answers;
    state.submitted = true;
    state.totalSeconds = record.totalSeconds ?? (record.exam.minutes || 70) * 60;
    state.seconds = record.elapsedSeconds != null ? state.totalSeconds - record.elapsedSeconds : 0;
    state.currentQuestion = 0;
    setView("exam");
    $("#viewTitle").textContent = viewNames.papers;
    $$("#mainNav [data-view]").forEach(element => element.classList.toggle("active", element.dataset.view === "papers"));
    $("#examEmpty").classList.add("hidden");
    $("#examWorkspace").classList.remove("hidden");
    $("#resultPanel").classList.add("hidden");
    renderExam();
    updateTimer();
    $("#paper").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function configureExamHeader() {
    const isQuiz = state.exam?.kind === "quiz";
    const isArchive = state.exam?.kind === "archive";
    $("#examEyebrow").textContent = PAPER_HISTORY_UI.examKindEyebrow(state.exam?.kind || "mock");
    $("#examTitle").textContent = isQuiz || isArchive ? state.exam.title : "會考國文模擬考";
    $("#examDescription").textContent = isQuiz
      ? `${state.exam.questions.length} 題四選一，共 ${state.exam.minutes || 15} 分鐘。範圍分類：${state.exam.officialCodes}。`
      : isArchive
      ? `依 ${state.exam.year} 年官方公布題本製作的可作答電子試卷；計時結束後仍可繼續作答。`
      : "42 題四選一，共 70 分鐘。依現行官方題本結構與五大內容類別組卷。";
    $("#examSetup").classList.toggle("hidden", isQuiz || isArchive);
    $("#quizExamSetup").classList.toggle("hidden", !isQuiz && !isArchive);
    if (isArchive) { $("#backToListButton").textContent = "返回歷屆十年"; $("#backToListButton").dataset.view = "archive"; }
    else { $("#backToListButton").textContent = "返回小考題庫"; $("#backToListButton").dataset.view = "quiz"; }
  }

  function launchAssessment(assessment) {
    if (!assessment.blueprint?.startsWith("reviewed-static-id-selection")) assessment = window.TEXT_ONLY_POLICY?.prepareTextOnlyExam?.(assessment, "chinese") || assessment;
    state.exam = assessment;
    state.answers = assessment.questions.map(() => null);
    state.submitted = false;
    state.totalSeconds = (assessment.minutes || 70) * 60;
    state.seconds = state.totalSeconds;
    state.currentQuestion = 0;
    setView("exam");
    if (assessment.kind === "quiz" ) {
      $("#viewTitle").textContent = viewNames["quiz"];
      $$("#mainNav [data-view]").forEach(element => element.classList.toggle("active", element.dataset.view === ("quiz")));
    }
    $("#examEmpty").classList.add("hidden");
    $("#examWorkspace").classList.remove("hidden");
    $("#resultPanel").classList.add("hidden");
    $("#paper").classList.remove("submitted");
    renderExam();
    startTimer();
    toast(`${assessment.title || "考卷"}已開始計時`);
    $("#examWorkspace").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function beginExam() {
    const seed = Math.max(1, Math.min(999999, Number($("#seedInput").value) || Math.floor(Date.now() % 999999)));
    try {
      const assessment = await window.CHINESE_R4.mockAssessment(seed);
      launchAssessment(assessment);
      localStorage.setItem("capChinese.lastSeed", seed);
    } catch (error) {
      console.error(error);
      toast(`靜態考卷載入失敗：${error.message}`);
    }
  }

  async function beginQuiz(quizId) {
    const seed = Math.max(1, Number(new URLSearchParams(location.search).get("seed")) || Math.floor(Date.now() % 999999));
    const unitMatch = /^r4-unit-(\d{2})$/u.exec(quizId);
    const skillMatch = /^r4-skill-(\d{3})$/u.exec(quizId);
    const assessment = unitMatch
      ? await window.CHINESE_R4.unitAssessment(`CHI_R4_U${unitMatch[1]}`, seed)
      : skillMatch
      ? await window.CHINESE_R4.skillAssessment(`CHI_R4_S${skillMatch[1]}`, seed)
      : null;
    if (!assessment) throw new Error(`不支援的小考代碼：${quizId}`);
    launchAssessment(assessment);
  }

  function switchToFullExam() {
    clearInterval(state.timerId);
    state.exam = null;
    state.answers = [];
    state.submitted = false;
    $("#examWorkspace").classList.add("hidden");
    $("#resultPanel").classList.add("hidden");
    $("#examEmpty").classList.remove("hidden");
    configureExamHeader();
  }

  function startTimer() {
    clearInterval(state.timerId);
    updateTimer();
    state.timerId = setInterval(() => {
      if (state.submitted) return clearInterval(state.timerId);
      state.seconds -= 1;
      if (state.seconds === -1) toast("時間到！考試不會暫停，仍可繼續作答。");
      updateTimer();
    }, 1000);
  }
  function updateTimer() {
    const overtime = state.seconds < 0;
    const abs = Math.abs(state.seconds);
    const m = Math.floor(abs / 60), s = abs % 60;
    $("#timer").textContent = `${overtime ? "+" : ""}${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    $("#timerLabel").textContent = overtime ? "已超時" : "剩餘時間";
    $(".timer-card").classList.toggle("warning", !overtime && state.seconds <= 600);
    $(".timer-card").classList.toggle("overtime", overtime);
    $("#timerState").textContent = state.submitted
      ? `作答已結束｜作答時間 ${formatDuration(state.totalSeconds - state.seconds)}`
      : overtime ? "已超過預定時間，可繼續作答" : state.seconds <= 600 ? "最後 10 分鐘，先完成會寫的" : "模擬正式考試";
  }

  function renderExam() {
    if (!state.exam) return;
    const difficultyLabel = ["", "基礎", "核心", "進階", "整合", "高鑑別"];
    const qHtml = state.exam.questions.map((q, index) => {
      const unit = q.staticQuestionId ? { grade: 9, title: q.unitTitle } : units.find(item => item.id === q.unitId) || { grade: 9, title: q.unitTitle || "跨單元" };
      const choices = `<div class="choices">${q.choices.map((choice, ci) => {
        const attrs = EXAM_CHOICE_UI.choiceAttrs({ submitted: state.submitted, selected: state.answers[index] === ci, isAnswer: ci === q.answer });
        return EXAM_CHOICE_UI.choiceButton({ letter: letters[ci], textHtml: nl(choice), attrs, dataAttr: `data-choice="${index}:${ci}"`, disabled: state.submitted });
      }).join("")}</div>`;
      const passage = q.passageId && (!index || state.exam.questions[index - 1].passageId !== q.passageId) ? `<aside class="reading-passage"><p class="eyebrow">閱讀選文｜回答第 ${index + 1}～${index + state.exam.questions.filter(item => item.passageId === q.passageId).length} 題</p><h3>${esc(q.passageTitle || "共用選文")}</h3><p>${nl(q.passage)}</p></aside>` : "";
      const assetBlock = q.assets?.length && (!q.passageId || passage) ? `<div class="question-assets">${q.assets.map(r4AssetHtml).join("")}</div>` : "";
      return `${passage}${assetBlock}<article class="question" id="question-${index + 1}" data-question="${index}">
        <div class="question-head"><span class="question-number">${index + 1}</span><div class="question-tags"><span class="question-tag grade">${q.staticQuestionId ? "第四階段" : `國${unit.grade === 7 ? "一" : unit.grade === 8 ? "二" : "三"}`}</span><span class="question-tag">${esc(unit.title)}</span>${q.quizLevel ? `<span class="question-tag level">${esc(q.quizLevel)}</span>` : ""}<span class="question-tag ability">${abilityLabel[q.ability] || "整合"}</span></div><span class="difficulty" aria-label="${difficultyLabel[q.difficulty]}">${"★".repeat(q.difficulty)}${"☆".repeat(5-q.difficulty)}</span></div>
        <div class="question-text">${nl(q.text)}</div>${choices}${solutionHtml(q)}
      </article>`;
    }).join("");
    const isQuiz = state.exam.kind === "quiz";
    const isArchive = state.exam.kind === "archive";
    const questionCount = state.exam.questions.length;
    const scopeTitles = isQuiz ? state.exam.unitIds.map(id => window.CHINESE_R4.catalog?.units.find(unit => unit.id === id)?.title || units.find(unit => unit.id === id)?.title).filter(Boolean).join("、") : "";
    const cover = isQuiz ? `
      <header class="paper-cover"><div><p class="eyebrow">課綱範圍分類</p><h2>${esc(state.exam.title)}</h2><p>${questionCount} 題四選一｜${state.exam.minutes || 15} 分鐘｜只選取與排序已審核靜態題目</p></div><div class="paper-stamp">R4<br>${esc(state.exam.term)}</div></header>
      <div class="paper-instructions"><div><strong>${questionCount}</strong><span>四選一｜即時計分</span></div><div><strong>${state.exam.unitIds.length}</strong><span>範圍單元｜無超綱單元</span></div><div><strong>${state.exam.minutes || 15} min</strong><span>依單元需要安排進階</span></div></div>
      <div class="quiz-paper-scope"><strong>本卷範圍</strong><span>${esc(scopeTitles)}</span><small>${esc(state.exam.officialCodes)}</small></div>` : isArchive ? `
      <header class="paper-cover"><div><p class="eyebrow">官方題本重現</p><h2>${state.exam.year} 年國中教育會考國文科題本</h2><p>${questionCount} 題選擇題｜依官方公布題目製作為可作答電子試卷｜計時結束仍可繼續作答</p></div><div class="paper-stamp">${state.exam.year}<br>官方題本</div></header>
      <div class="paper-instructions"><div><strong>${questionCount}</strong><span>四選一｜官方原題</span></div><div><strong>${state.exam.minutes || 70} min</strong><span>時間到可繼續作答</span></div></div>
      ${state.exam.omittedNote ? `<div class="quiz-paper-scope"><strong>收錄說明</strong><span>${esc(state.exam.omittedNote)}</span></div>` : ""}` : `
      <header class="paper-cover"><div><p class="eyebrow">現行官方結構</p><h2>國中教育會考國文科模擬題本</h2><p>42 題選擇題｜70 分鐘｜五大內容類別均衡分布</p></div><div class="paper-stamp">42題<br>官方結構</div></header>
      <div class="paper-instructions"><div><strong>42</strong><span>四選一｜含多組共用選文題組</span></div><div><strong>70 min</strong><span>題型順序依卷別種子打亂</span></div></div>`;
    const textOnlyPauseNotice = window.TEXT_ONLY_POLICY?.pauseNotice?.(state.exam) || "";

    $("#paper").innerHTML = `
      ${cover}
      ${textOnlyPauseNotice}
      <div class="paper-section-title"><h3>選擇題</h3><span>每題只有一個正確或最佳答案</span></div>
      ${qHtml}`;
    $("#questionTotal").textContent = questionCount;
    if (state.submitted) $("#paper").classList.add("submitted");
    bindExamInputs();
    renderQuestionGrid();
    updateAnswered();
  }

  function solutionHtml(q) {
    return `<div class="solution"><h4>正確答案：${letters[q.answer]}｜${nl(q.choices[q.answer])}</h4><ol class="solution-steps">${q.steps.map(s => `<li>${nl(s)}</li>`).join("")}</ol>${solutionNotes(q)}</div>`;
  }
  function solutionNotes(q) {
    return `<div class="solution-grid"><div class="solution-note"><strong>本題觀念</strong><p>${nl(q.concept)}</p></div><div class="solution-note formula-note"><strong>判斷方法</strong><div>${nl(q.formula)}</div></div><div class="solution-note tip"><strong>快解技巧</strong><p>${nl(q.tip)}</p></div><div class="solution-note trap"><strong>易錯警報</strong><p>${nl(q.trap)}</p></div></div>`;
  }

  function bindExamInputs() {
    $$('[data-choice]', $("#paper")).forEach(button => button.addEventListener("click", () => {
      const [qi, ci] = button.dataset.choice.split(":").map(Number);
      state.answers[qi] = ci;
      state.currentQuestion = qi;
      $$(".choice", $(`#question-${qi + 1}`)).forEach((el, i) => el.classList.toggle("selected", i === ci));
      renderQuestionGrid(); updateAnswered();
    }));
    $$(".question", $("#paper")).forEach(article => {
      const observer = new IntersectionObserver(entries => { if (entries[0].isIntersecting) { state.currentQuestion = Number(article.dataset.question); renderQuestionGrid(); } }, { rootMargin: "-25% 0px -60%" });
      observer.observe(article);
    });
  }

  function renderQuestionGrid() {
    if (!state.exam) return;
    $("#questionGrid").innerHTML = state.exam.questions.map((q, i) => {
      const answered = state.answers[i] !== null;
      return `<button class="${answered ? "answered" : ""} ${state.currentQuestion === i ? "current" : ""}" data-jump="${i}" aria-label="第 ${i + 1} 題${answered ? "，已作答" : ""}">${i + 1}</button>`;
    }).join("");
    $$('[data-jump]', $("#questionGrid")).forEach(button => button.addEventListener("click", () => {
      state.currentQuestion = Number(button.dataset.jump);
      $(`#question-${state.currentQuestion + 1}`).scrollIntoView({ behavior: "smooth", block: "start" });
      renderQuestionGrid();
    }));
  }
  function updateAnswered() {
    if (!state.exam) return;
    const count = state.answers.filter(a => a !== null).length;
    $("#answeredCount").textContent = count;
    $("#answerProgress").style.width = `${count / state.exam.questions.length * 100}%`;
  }

  function submitExam() {
    if (!state.exam || state.submitted) return;
    state.submitted = true;
    clearInterval(state.timerId);
    const total = state.exam.questions.length;
    const correct = state.exam.questions.filter((q, i) => state.answers[i] === q.answer).length;
    const missed = [...new Set(state.exam.questions.map((q, i) => state.answers[i] === q.answer ? null : q.unitTitle || units.find(unit => unit.id === q.unitId)?.title).filter(Boolean))];
    const answered = state.answers.filter(a => a !== null).length;
    const scoreRate = total ? correct / total : 0;
    const isQuiz = state.exam.kind === "quiz";
    const isArchive = state.exam.kind === "archive";
    const elapsedSeconds = state.totalSeconds - state.seconds;
    const overtimeSeconds = Math.max(0, -state.seconds);
    savePaperRecord({
      id: `${state.exam.id}-${Date.now()}`,
      kind: isQuiz ? "quiz" : isArchive ? "archive" : "mock",
      title: state.exam.title || (isQuiz ? "小考" : "模擬考"),
      finishedAt: new Date().toISOString(),
      correct, mcCount: total, answered, total,
      missedUnits: missed,
      elapsedSeconds, overtimeSeconds, totalSeconds: state.totalSeconds,
      exam: state.exam,
      answers: state.answers
    });
    renderExam();
    updateTimer();
    const resultNote = isQuiz ? `本小考只計入「${esc(state.exam.title)}」的範圍，原始答對數不等同學校定期評量成績。`
      : isArchive ? `本卷依 ${state.exam.year} 年官方公布題本重製，供練習使用；正式成績、等級與官方原始題本以會考官方網站為準。`
      : "本結果是練習用原始答對數，不等同官方等級。";
    $("#resultPanel").innerHTML = `<div class="result-summary"><div class="result-score"><span><strong>${correct}</strong><br><small>/ ${total} 題</small></span></div><div class="result-copy"><p class="eyebrow">RESULT</p><h2>${scoreRate >= .88 ? "很穩，這個範圍已有成熟掌握。" : scoreRate >= .7 ? "底子不錯，把錯題對應單元立刻回補。" : scoreRate >= .5 ? "先抓本卷錯題觀念，分數會升得最快。" : "別急著刷下一卷，先回講義補地基。"}</h2><p class="elapsed-note">作答時間 ${formatDuration(elapsedSeconds)}${overtimeSeconds > 0 ? `（含超時 ${formatDuration(overtimeSeconds)}）` : ""}</p><p>${resultNote}</p><div class="missed-units">${missed.slice(0, 10).map(x => `<span>${esc(x)}</span>`).join("")}${missed.length > 10 ? `<span>另 ${missed.length - 10} 單元</span>` : ""}</div></div><button class="primary" id="reviewFirst">從第一題看詳解</button></div>`;
    $("#resultPanel").classList.remove("hidden");
    $("#reviewFirst").addEventListener("click", () => $("#question-1").scrollIntoView({ behavior: "smooth", block: "start" }));
    $("#resultPanel").scrollIntoView({ behavior: "smooth", block: "center" });
    toast(`已交卷：作答 ${answered}/${total}，答對 ${correct}/${total}`);
  }

  function bindStaticEvents() {
    $$('[data-view]').forEach(button => button.addEventListener("click", event => { event.preventDefault(); setView(button.dataset.view); }));
    const menuButton = $("#menuButton");
    if (menuButton) menuButton.addEventListener("click", () => document.body.classList.toggle("menu-open"));
    const themeButton = $("#themeButton");
    if (themeButton) themeButton.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const dark = document.body.classList.contains("dark");
      localStorage.setItem("capChinese.dark", dark ? "1" : "0");
      themeButton.textContent = dark ? "日" : "月";
    });
    const generateExam = $("#generateExam");
    if (generateExam) generateExam.addEventListener("click", beginExam);
    const startDefaultExam = $("#startDefaultExam");
    if (startDefaultExam) startDefaultExam.addEventListener("click", beginExam);
    const switchFullExam = $("#switchFullExam");
    if (switchFullExam) switchFullExam.addEventListener("click", switchToFullExam);
    const submitExamBtn = $("#submitExam");
    if (submitExamBtn) submitExamBtn.addEventListener("click", () => submitExam());
    const printExam = $("#printExam");
    if (printExam) printExam.addEventListener("click", () => window.print());
    const handbookSearch = $("#handbookSearch");
    if (handbookSearch) handbookSearch.addEventListener("input", event => { state.search = event.target.value; renderHandbook(); });
    const gradeFilters = $("#gradeFilters");
    if (gradeFilters) $$('[data-grade]', gradeFilters).forEach(button => button.addEventListener("click", () => {
      state.grade = button.dataset.grade;
      $$('[data-grade]', gradeFilters).forEach(el => el.classList.toggle("active", el === button));
      renderHandbook();
    }));
    const tipSearch = $("#tipSearch");
    if (tipSearch) tipSearch.addEventListener("input", event => { state.tipSearch = event.target.value; renderTipAudits(); });
    const tipFilters = $("#tipFilters");
    if (tipFilters) $$('[data-verdict]', tipFilters).forEach(button => button.addEventListener("click", () => {
      state.tipVerdict = button.dataset.verdict;
      $$('[data-verdict]', tipFilters).forEach(el => el.classList.toggle("active", el === button));
      renderTipAudits();
    }));
    const r4UnitSelect = $("#r4UnitSelect");
    if (r4UnitSelect) r4UnitSelect.addEventListener("change", event => {
      state.r4UnitId = event.target.value;
      state.r4SkillId = window.CHINESE_R4.catalog.units.find(unit => unit.id === state.r4UnitId)?.skillIds[0];
      renderR4().catch(showR4Error);
    });
    const r4SkillSearch = $("#r4SkillSearch");
    if (r4SkillSearch) r4SkillSearch.addEventListener("input", event => {
      state.r4Search = event.target.value;
      renderR4().catch(showR4Error);
    });
    const r4WritingNext = $("#r4WritingNext");
    if (r4WritingNext) r4WritingNext.addEventListener("click", () => {
      state.writingIndex += 1;
      renderWritingTask().catch(showR4Error);
    });
  }

  async function init() {
    bindStaticEvents();
    const lastSeed = localStorage.getItem("capChinese.lastSeed");
    const params = new URLSearchParams(window.location.search);
    const requestedUnit = Number(params.get("unit"));
    if (Number.isInteger(requestedUnit) && units.some(unit => unit.id === requestedUnit)) state.selectedUnit = requestedUnit;
    const seedInput = $("#seedInput");
    if (lastSeed && seedInput) seedInput.value = lastSeed;
    const themeButton = $("#themeButton");
    if (localStorage.getItem("capChinese.dark") === "1") {
      document.body.classList.add("dark");
      if (themeButton) themeButton.textContent = "日";
    }
    try {
      await window.CHINESE_R4.init();
      renderQuizCatalog(); renderHandbook(); renderAtlas(); renderAnalysis(); renderSources(); renderArchive(); updateLearningProgress();
    } catch (err) {
      console.error("capChinese init render failed:", err);
    }
    const requestedView = params.get("view");
    const requestedQuiz = params.get("quiz");
    if (requestedQuiz && /^r4-(?:unit-\d{2}|skill-\d{3})$/u.test(requestedQuiz)) beginQuiz(requestedQuiz).catch(error => { console.error(error); toast(error.message); });
    else if (requestedView && viewNames[requestedView]) setView(requestedView);
  }
  init();
})();
