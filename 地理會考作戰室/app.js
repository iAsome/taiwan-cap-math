(() => {
  const { units, domains, strategies, archives, sourcePolicy, officialSources, publisherSources, tipAudits, groups } = window.GEOGRAPHY_DATA;
  const capAnalysis = window.GEOGRAPHY_ANALYSIS;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const esc = value => String(value).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const nl = value => esc(value).replace(/\n/g, "<br>");
  const block = value => String(value).split("\n").map(line => `<span class="math-line">${esc(line)}</span>`).join("");
  const letters = ["A", "B", "C", "D"];
  const groupMark = grade => domains[grade - 1]?.mark || "";
  const groupName = grade => groups.find(g => g.id === grade)?.name || domains[grade - 1]?.name || "";
  const abilityLabel = { knowledge: "知識理解", comprehension: "統整判讀", inquiry: "地理思辨" };
  const viewNames = { home: "學習總覽", exam: "全範圍模擬考", quiz: "單元小考題庫", papers: "我的考卷", handbook: "國中地理全冊講義", atlas: "題型與技巧地圖", analysis: "近十年逐題分析", sources: "資料與技巧審核", archive: "近十年考卷館" };
  let toastTimer;

  const state = {
    view: "home",
    selectedUnit: 1,
    grade: "all",
    search: "",
    tipSearch: "",
    tipVerdict: "all",
    completed: new Set(JSON.parse(localStorage.getItem("capGeography.completed") || "[]")),
    exam: null,
    answers: [],
    submitted: false,
    seconds: 2400,
    totalSeconds: 2400,
    timerId: null,
    currentQuestion: 0
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

  function quizSignature(assessment) {
    return assessment.questions.map(q => [q.unitId, q.taxonomyTopic || "", q.text, q.choices.join("|")].join("∷")).join("§");
  }

  function uniqueQuizAssessment(quizId) {
    const used = readJson(`capGeography.quizSignatures.${quizId}`, []);
    for (let attempt = 0; attempt < 80; attempt++) {
      const seed = Math.floor(Date.now() % 1000000000) + attempt * 9973 + Math.floor(Math.random() * 9000);
      const assessment = window.EXAM_ENGINE.generateQuiz(quizId, seed);
      const signature = quizSignature(assessment);
      if (!used.includes(signature)) {
        localStorage.setItem(`capGeography.quizSignatures.${quizId}`, JSON.stringify([signature, ...used].slice(0, 300)));
        return assessment;
      }
    }
    // ponytail: remembers 300 generated papers per quiz; after that, timestamp seed still changes values.
    return window.EXAM_ENGINE.generateQuiz(quizId, Date.now());
  }

  function paperHistory() { return readJson("capGeography.paperHistory", []); }

  function savePaperRecord(record) {
    try { localStorage.setItem("capGeography.paperHistory", JSON.stringify([record, ...paperHistory()].slice(0, 40))); }
    catch {
      try { localStorage.setItem("capGeography.paperHistory", JSON.stringify([record, ...paperHistory()].slice(0, 15))); }
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
    if (view === "quiz") renderQuizCatalog();
    if (view === "papers") renderMyPapers();
    if (view === "handbook") renderHandbook();
    if (view === "atlas") renderAtlas();
    if (view === "analysis") renderAnalysis();
    if (view === "sources") renderSources();
    if (view === "archive") renderArchive();
  }

  function updateLearningProgress() {
    const pct = Math.round(state.completed.size / units.length * 100);
    $("#homeProgress").textContent = pct;
    $(".score-ring").style.setProperty("--progress", `${pct * 3.6}deg`);
    $("#completedUnits").textContent = `${state.completed.size} / ${units.length}`;
    $("#handbookBar").style.width = `${pct}%`;
  }

  function filteredUnits() {
    const q = state.search.trim().toLowerCase();
    return units.filter(unit => (state.grade === "all" || String(unit.grade) === state.grade) && (!q || [unit.title, unit.domain, unit.summary, unit.core, unit.formula, unit.tips.join(" ")].join(" ").toLowerCase().includes(q)));
  }

  function renderHandbook() {
    const list = filteredUnits();
    if (!list.some(u => u.id === state.selectedUnit) && list.length) state.selectedUnit = list[0].id;
    const grouped = groups.map(g => ({ grade: g.id, name: g.name, items: list.filter(u => u.grade === g.id) })).filter(g => g.items.length);
    $("#unitIndex").innerHTML = grouped.map(group => `
      <div class="index-group"><strong>${esc(group.name)}</strong>
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
          <div class="unit-meta"><span>${esc(groupName(unit.grade))}</span><span>${esc(unit.domain)}</span><span>單元編碼 ${String(unit.id).padStart(2, "0")}</span></div>
          <h2>${esc(unit.title)}</h2><p>${esc(unit.summary)}</p>
        </header>
        <div class="unit-body">
          <section class="lesson-block"><div class="lesson-label">核心觀念</div><div class="lesson-content"><h3>先把這件事想清楚</h3><p>${nl(unit.core)}</p><div class="clarify-box"><strong>觀念澄清：</strong> ${nl(unit.clarify)}</div></div></section>
          <section class="lesson-block"><div class="lesson-label">關鍵數據與空間關係</div><div class="lesson-content"><div class="formula-box">${block(unit.formula)}</div><h3>為什麼會這樣</h3><p>${nl(unit.derivation)}</p></div></section>
          <section class="lesson-block"><div class="lesson-label">標準判斷流程</div><div class="lesson-content"><ol>${unit.steps.map(step => `<li>${nl(step)}</li>`).join("")}</ol></div></section>
          <section class="lesson-block"><div class="lesson-label">會考快解技巧</div><div class="lesson-content"><ul class="tip-list">${unit.tips.map(tip => `<li>${nl(tip)}</li>`).join("")}</ul></div></section>
          <section class="lesson-block"><div class="lesson-label">30 秒觀念測驗</div><div class="lesson-content"><div class="quiz-box"><p><strong>題目：</strong>${nl(unit.quiz.q)}</p><button class="quiz-reveal">顯示解答</button><p class="quiz-answer"><strong>解答：</strong>${nl(unit.quiz.a)}</p></div></div></section>
        </div>
        <button class="complete-button ${state.completed.has(unit.id) ? "done" : ""}" data-complete="${unit.id}">${state.completed.has(unit.id) ? "✓ 已掌握這個單元（按一下取消）" : "標記為已掌握"}</button>
      </article>`;
    $(".quiz-reveal").addEventListener("click", event => { event.currentTarget.closest(".quiz-box").classList.add("revealed"); event.currentTarget.textContent = "已顯示解答"; });
    $("[data-complete]").addEventListener("click", () => {
      state.completed.has(unit.id) ? state.completed.delete(unit.id) : state.completed.add(unit.id);
      localStorage.setItem("capGeography.completed", JSON.stringify([...state.completed]));
      updateLearningProgress();
      renderHandbook();
      toast(state.completed.has(unit.id) ? "已記錄為掌握單元" : "已取消掌握標記");
    });
    updateLearningProgress();
  }

  function renderAtlas() {
    $("#atlasContent").innerHTML = `
      <div class="domain-grid">${domains.map(d => `<article class="domain-card"><span>${d.mark}</span><h3>${esc(d.name)}</h3><p>${nl(d.desc)}</p><ul>${d.skills.map(s => `<li>${nl(s)}</li>`).join("")}</ul></article>`).join("")}</div>
      <section class="strategy-section"><p class="eyebrow">PATTERN → TOOL</p><h2>常見地理題型：看到什麼，就啟動什麼判斷方式</h2>
        <table class="strategy-table"><thead><tr><th>題型</th><th>核心能力</th><th>穩定解法</th><th>最常失分</th></tr></thead><tbody>${strategies.map(row => `<tr>${row.map(cell => `<td>${nl(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table>
      </section>`;
  }

  function renderArchive() {
    $("#archiveGrid").innerHTML = archives.map((item, index) => {
      const data = window.ARCHIVE_EXAMS?.[item.year];
      const count = data?.questions.length || 0;
      return `
      <article class="archive-card ${index === 0 ? "latest" : ""}">
        <div class="year-block"><strong>${item.year}</strong><span>${item.western} 年${index === 0 ? " · 最新" : ""}</span></div>
        <div class="archive-body"><h3>${item.year} 年國中教育會考社會科．地理題目</h3><p>${data ? `${count} 題選擇｜依官方社會科題本中的地理題目製作，可作答並看詳解` : "電子試卷建置中，敬請期待"}</p>
          <button class="primary" data-archive-year="${item.year}" ${data ? "" : "disabled"}>${data ? "進入考試 →" : "建置中"}</button>
        </div>
      </article>`;
    }).join("");
    $$("[data-archive-year]", $("#archiveGrid")).forEach(button => button.addEventListener("click", () => beginArchiveExam(Number(button.dataset.archiveYear))));
  }

  function beginArchiveExam(year) {
    const data = window.ARCHIVE_EXAMS?.[year];
    if (!data) return toast(`${year} 年電子試卷尚未建置完成`);
    launchAssessment({
      kind: "archive",
      id: `ARCHIVE-${year}`,
      year,
      title: `${year} 年國中教育會考社會科．地理題目`,
      minutes: data.minutes || 20,
      officialCodes: `official-${year}-geography`,
      omittedNote: data.omittedNote,
      questions: data.questions.map(q => ({ ...q }))
    });
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
    $("#analysisStats").innerHTML = [
      [years.length || "0", "屆官方社會科題本"], [total, "逐題完成主概念編碼"], [years.length ? Math.round(total / years.length * 10) / 10 : "0", "平均每屆地理題數"]
    ].map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join("");

    if (!years.length) {
      $("#abilityBars").innerHTML = `<p class="audit-empty">十年逐題分析建置中，將於後續流程補上。</p>`;
      $("#officialStructureTable").innerHTML = "";
      $("#domainDistribution").innerHTML = "";
      $("#conceptMatrixHead").innerHTML = "";
      $("#conceptMatrixBody").innerHTML = "";
      $("#hanlinChapterLedger").innerHTML = "";
      $("#yearLedger").innerHTML = "";
      return;
    }

    const abilityTotals = years.reduce((acc, year) => {
      Object.entries(official[year].abilities).forEach(([key, value]) => acc[key] = (acc[key] || 0) + value);
      return acc;
    }, {});
    const abilityMax = Math.max(...Object.values(abilityTotals));
    $("#abilityBars").innerHTML = Object.entries(abilityLabel).map(([key, label]) => `<div class="bar-row"><span>${label}</span><div><i style="--value:${(abilityTotals[key] || 0) / abilityMax * 100}%"></i></div><b>${abilityTotals[key] || 0}</b></div>`).join("");
    $("#officialStructureTable").innerHTML = `<table class="mini-table"><thead><tr><th>年度</th><th>地理題數</th><th>知識理解</th><th>統整判讀</th><th>地理思辨</th></tr></thead><tbody>${years.map(year => `<tr><td>${year}</td><td>${official[year].count}</td><td>${official[year].abilities.knowledge}</td><td>${official[year].abilities.comprehension}</td><td>${official[year].abilities.inquiry}</td></tr>`).join("")}</tbody></table>`;

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
    const domainOrder = groups.map(g => g.name);
    $("#domainDistribution").innerHTML = domainOrder.map(domain => `<article class="domain-stat"><span>${domain}</span><strong>${domainCounts[domain] || 0}</strong><small>${((domainCounts[domain] || 0) / total * 100).toFixed(1)}%｜十年合計</small></article>`).join("");

    const unitTotals = {};
    Object.values(primary).flat().forEach(unitId => unitTotals[unitId] = (unitTotals[unitId] || 0) + 1);
    const matrixUnits = units.slice().sort((a, b) => (unitTotals[b.id] || 0) - (unitTotals[a.id] || 0));
    $("#conceptMatrixHead").innerHTML = `<tr><th>主概念（依十年題數排序）</th>${years.map(year => `<th>${year}</th>`).join("")}<th>合計</th><th>占比</th></tr>`;
    $("#conceptMatrixBody").innerHTML = matrixUnits.map(unit => {
      const count = unitTotals[unit.id] || 0;
      return `<tr class="${count >= 6 ? "high" : ""}"><td>${esc(unit.title)}<small class="audit-unit">${esc(capAnalysis.domainByUnit[unit.id])}</small></td>${years.map(year => `<td>${unitYearCounts[year][unit.id] || 0}</td>`).join("")}<td class="total">${count}</td><td>${total ? (count / total * 100).toFixed(1) : "0.0"}%</td></tr>`;
    }).join("");

    renderHanlinChapterLedger();

    $("#yearLedger").innerHTML = years.slice().reverse().map((year, index) => {
      const info = official[year];
      return `<details ${index === 0 ? "open" : ""}><summary><strong>${year}</strong><span>${info.count} 題地理｜社會科全卷配比估算</span><b>展開逐題編碼 ＋</b></summary><div class="ledger-body"><div class="ledger-ability"><span>知識理解 ${info.abilities.knowledge}</span><span>統整判讀 ${info.abilities.comprehension}</span><span>地理思辨 ${info.abilities.inquiry}</span></div><div class="ledger-questions">${primary[year].map((unitId, i) => `<article class="ledger-item"><b>${i + 1}</b><span>${esc(units.find(u => u.id === unitId)?.title || "跨單元")}<small>${esc(capAnalysis.domainByUnit[unitId])}</small></span></article>`).join("")}</div></div></details>`;
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

  function capSummary(item, compact = false) {
    const items = capItemsForUnits(item.unitIds);
    const preview = items.slice(0, compact ? 6 : 10).map(x => `<span>${esc(x.label)}</span>`).join("");
    return `<div class="quiz-cap-tags"><strong>會考標註 ${items.length} 題</strong><small>106–115 年社會科地理主概念回查</small><div class="quiz-cap-preview">${preview || "<span>逐題分析建置中；仍依課綱出題</span>"}</div></div>`;
  }

  function quizCard(item) {
    const scopeUnits = item.unitIds.map(id => units.find(unit => unit.id === id)?.title).filter(Boolean);
    const isReview = item.scope === "review";
    return `<article class="quiz-card ${isReview ? "total" : "chapter"}">
      <div class="quiz-card-top"><span>${esc(item.chapter)}</span><small>${item.questionCount} 題｜${item.minutes} 分鐘</small></div>
      <h3>${esc(item.title)}</h3>
      <p>${isReview ? "彙整同領域所有單元的小節題目，供領域總複習使用；交卷後逐題顯示成因、詳解與易錯點。" : "四選一、即時計分、逐題詳解；題目只從此單元生成。"}</p>
      <div class="quiz-unit-list">${scopeUnits.map(title => `<span>${esc(title)}</span>`).join("")}</div>
      ${capSummary(item, true)}
      <small class="quiz-official-code">課綱編碼：${esc(item.officialCodes)}</small>
      <a class="primary" href="?quiz=${item.id}">開始作答 →</a>
    </article>`;
  }

  function renderQuizCatalog() {
    const catalog = window.EXAM_ENGINE.quizCatalog;
    $("#quizCatalog").innerHTML = groups.map(g => {
      const chapters = catalog.filter(item => item.group === g.id && item.scope === "chapter");
      const review = catalog.find(item => item.group === g.id && item.scope === "review");
      return `<section class="quiz-grade-section">
        <div class="quiz-grade-heading"><h2>${domains[g.id - 1]?.mark || ""}｜${esc(g.name)}</h2><span>${chapters.length} 個單元小考＋1 份領域總複習</span></div>
        <div class="quiz-card-grid chapter-grid">${chapters.map(quizCard).join("")}${review ? quizCard(review) : ""}</div>
      </section>`;
    }).join("");
  }

  function renderHanlinChapterLedger() {
    const chapters = window.EXAM_ENGINE.quizCatalog.filter(item => item.scope === "chapter");
    $("#hanlinChapterLedger").innerHTML = groups.map(g => {
      const items = chapters.filter(item => item.group === g.id);
      const count = items.reduce((sum, item) => sum + capItemsForUnits(item.unitIds).length, 0);
      return `<details class="hanlin-book-ledger" open><summary><strong>${esc(g.name)}</strong><span>${items.length} 個單元｜會考主概念標註 ${count} 題</span><b>展開／收合</b></summary>
        <div class="hanlin-chapter-list">${items.map(item => {
          const capItems = capItemsForUnits(item.unitIds);
          const unitNames = item.unitIds.map(id => units.find(unit => unit.id === id)?.title).filter(Boolean).join("、");
          return `<article class="hanlin-chapter-item">
            <div><strong>${esc(item.chapter)}｜${esc(item.title)}</strong><small>${esc(unitNames)}｜${esc(item.officialCodes)}</small></div>
            <span>會考 ${capItems.length} 題</span>
            <div class="hanlin-cap-list">${capItems.map(cap => `<i title="${esc(cap.unitTitle)}">${esc(cap.label)}</i>`).join("") || "<i>逐題分析建置中；仍依課綱出題</i>"}</div>
            <a href="?quiz=${item.id}">進入本單元小考 →</a>
          </article>`;
        }).join("")}</div>
      </details>`;
    }).join("");
  }

  function renderMyPapers() {
    const records = paperHistory();
    $("#paperHistoryStats").innerHTML = [
      ["考過卷數", records.length],
      ["小考", records.filter(item => item.kind === "quiz").length],
      ["模擬考", records.filter(item => item.kind === "mock").length],
      ["歷屆考卷", records.filter(item => item.kind === "archive").length]
    ].map(([label, value]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join("");
    const kindBadge = { quiz: "QUIZ", mock: "MOCK", archive: "ARCHIVE" };
    $("#paperHistoryList").innerHTML = records.length ? records.map(record => {
      const date = new Date(record.finishedAt).toLocaleString("zh-TW", { hour12: false });
      const missed = record.missedUnits?.map(unit => `<span>${esc(unit)}</span>`).join("") || "";
      const durationText = record.elapsedSeconds != null
        ? `｜作答時間 ${formatDuration(record.elapsedSeconds)}${record.overtimeSeconds > 0 ? `（超時 ${formatDuration(record.overtimeSeconds)}）` : ""}`
        : "";
      return `<article class="paper-history-card">
        <div><p class="eyebrow">${kindBadge[record.kind] || "MOCK"} · ${esc(record.id)}</p><h3>${esc(record.title)}</h3><small>${esc(date)}｜${record.correct}/${record.total} 題${durationText}</small></div>
        <div class="paper-history-score"><strong>${Math.round(record.correct / Math.max(1, record.total) * 100)}</strong><span>%</span></div>
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
    state.totalSeconds = record.totalSeconds ?? (record.exam.minutes || 40) * 60;
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
    $("#examEyebrow").textContent = isQuiz ? "UNIT QUIZ" : isArchive ? "OFFICIAL PAST PAPER" : "FULL MOCK EXAM";
    $("#examTitle").textContent = isQuiz || isArchive ? state.exam.title : "會考地理模擬考";
    $("#examDescription").textContent = isQuiz
      ? `${state.exam.questions.length} 題四選一，共 ${state.exam.minutes || 10} 分鐘。課綱編碼：${state.exam.officialCodes}。`
      : isArchive
      ? `依 ${state.exam.year} 年官方社會科題本中的地理題目製作的可作答電子試卷；計時結束後仍可繼續作答。`
      : "30 題四選一，共 40 分鐘。涵蓋 20 個地理單元，台灣地理與全球關連兩大領域加抽比重；本規格為本站自訂比例，非官方獨立考科規格。";
    $("#examSetup").classList.toggle("hidden", isQuiz || isArchive);
    $("#quizExamSetup").classList.toggle("hidden", !isQuiz && !isArchive);
    if (isArchive) { $("#backToListButton").textContent = "返回歷屆十年"; $("#backToListButton").dataset.view = "archive"; }
    else { $("#backToListButton").textContent = "返回小考題庫"; $("#backToListButton").dataset.view = "quiz"; }
  }

  function launchAssessment(assessment) {
    state.exam = assessment;
    state.answers = assessment.questions.map(() => null);
    state.submitted = false;
    state.totalSeconds = (assessment.minutes || 40) * 60;
    state.seconds = state.totalSeconds;
    state.currentQuestion = 0;
    setView("exam");
    if (assessment.kind === "quiz" || assessment.kind === "archive") {
      $("#viewTitle").textContent = viewNames[assessment.kind === "quiz" ? "quiz" : "archive"];
      $$("#mainNav [data-view]").forEach(element => element.classList.toggle("active", element.dataset.view === (assessment.kind === "quiz" ? "quiz" : "archive")));
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

  function beginExam() {
    const seed = Math.max(1, Math.min(999999, Number($("#seedInput").value) || Math.floor(Date.now() % 999999)));
    const level = Number($("#levelSelect").value) || 2;
    const assessment = window.EXAM_ENGINE.generate(seed, level);
    assessment.kind = "mock";
    assessment.title = "會考地理模擬考";
    assessment.minutes = 40;
    launchAssessment(assessment);
    localStorage.setItem("capGeography.lastSeed", seed);
  }

  function beginQuiz(quizId) { launchAssessment(uniqueQuizAssessment(quizId)); }

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
    $(".timer-card").classList.toggle("warning", !overtime && state.seconds <= 300);
    $(".timer-card").classList.toggle("overtime", overtime);
    $("#timerState").textContent = state.submitted
      ? `作答已結束｜作答時間 ${formatDuration(state.totalSeconds - state.seconds)}`
      : overtime ? "已超過預定時間，可繼續作答" : state.seconds <= 300 ? "最後 5 分鐘，先完成會寫的" : "模擬正式考試";
  }

  function renderExam() {
    if (!state.exam) return;
    const difficultyLabel = ["", "基礎", "核心", "進階", "整合", "高鑑別"];
    const qHtml = state.exam.questions.map((q, index) => {
      const unit = units.find(item => item.id === q.unitId);
      const choices = `<div class="choices">${q.choices.map((choice, ci) => {
        const selected = state.answers[index] === ci;
        const correct = state.submitted && ci === q.answer;
        const wrong = state.submitted && selected && ci !== q.answer;
        return `<button class="choice ${selected ? "selected" : ""} ${correct ? "correct" : ""} ${wrong ? "wrong" : ""}" data-choice="${index}:${ci}" ${state.submitted ? "disabled" : ""}><span class="choice-letter">${letters[ci]}</span><span>${nl(choice)}</span></button>`;
      }).join("")}</div>`;
      return `<article class="question" id="question-${index + 1}" data-question="${index}">
        <div class="question-head"><span class="question-number">${index + 1}</span><div class="question-tags"><span class="question-tag grade">${esc(groupMark(unit.grade))}</span><span class="question-tag">${esc(unit.title)}</span>${q.taxonomyTopic ? `<span class="question-tag taxonomy">${esc(q.taxonomyTopic)}</span>` : ""}<span class="question-tag ability">${abilityLabel[q.ability] || "整合"}</span></div><span class="difficulty" aria-label="${difficultyLabel[q.difficulty]}">${"★".repeat(q.difficulty)}${"☆".repeat(5-q.difficulty)}</span></div>
        <div class="question-text">${nl(q.text)}</div>${choices}${solutionHtml(q)}
      </article>`;
    }).join("");
    const isQuiz = state.exam.kind === "quiz";
    const isArchive = state.exam.kind === "archive";
    const scopeTitles = isQuiz ? state.exam.unitIds.map(id => units.find(unit => unit.id === id)?.title).filter(Boolean).join("、") : "";
    const cover = isQuiz ? `
      <header class="paper-cover"><div><p class="eyebrow">單元範圍 · ${esc(state.exam.id)}</p><h2>${esc(state.exam.title)}</h2><p>${state.exam.questions.length} 題四選一｜${state.exam.minutes || 10} 分鐘</p></div><div class="paper-stamp">${esc(groupMark(state.exam.grade))}<br>${esc(state.exam.term)}</div></header>
      <div class="paper-instructions"><div><strong>${state.exam.questions.length}</strong><span>四選一｜即時計分</span></div><div><strong>${state.exam.unitIds.length}</strong><span>範圍單元｜無超綱單元</span></div><div><strong>${state.exam.minutes || 10} min</strong><span>依單元需要安排進階</span></div></div>
      <div class="quiz-paper-scope"><strong>本卷範圍</strong><span>${esc(scopeTitles)}</span><small>${esc(state.exam.officialCodes)}</small></div>` : isArchive ? `
      <header class="paper-cover"><div><p class="eyebrow">官方題本重現 · ${esc(state.exam.id)}</p><h2>${state.exam.year} 年國中教育會考社會科．地理題目</h2><p>${state.exam.questions.length} 題選擇｜依官方公布題目中屬於地理的題號製作為可作答電子試卷｜計時結束仍可繼續作答</p></div><div class="paper-stamp">${state.exam.year}<br>官方題本</div></header>
      <div class="paper-instructions"><div><strong>${state.exam.questions.length}</strong><span>四選一｜官方原題</span></div><div><strong>${state.exam.minutes || 20} min</strong><span>時間到可繼續作答</span></div></div>
      ${state.exam.omittedNote ? `<div class="quiz-paper-scope"><strong>收錄說明</strong><span>${esc(state.exam.omittedNote)}</span></div>` : ""}` : `
      <header class="paper-cover"><div><p class="eyebrow">自訂比例 · 涵蓋 20 單元 · ${esc(state.exam.id)}</p><h2>會考地理模擬考</h2><p>30 題選擇｜40 分鐘｜台灣地理與全球關連兩大領域加抽比重（本站自訂，非官方獨立考科規格）</p></div><div class="paper-stamp">地理<br>自訂規格</div></header>
      <div class="paper-instructions"><div><strong>30</strong><span>四選一｜全數地理單元覆蓋</span></div><div><strong>40 min</strong><span>題目順序依卷別種子打亂</span></div></div>`;
    $("#paper").innerHTML = `
      ${cover}
      <div class="paper-section-title"><h3>作答區</h3><span>每題只有一個正確或最佳答案</span></div>
      ${qHtml}`;
    $("#questionTotal").textContent = state.exam.questions.length;
    if (state.submitted) $("#paper").classList.add("submitted");
    bindExamInputs();
    renderQuestionGrid();
    updateAnswered();
  }

  function solutionHtml(q) {
    return `<div class="solution"><h4>正確答案：${letters[q.answer]}｜${nl(q.choices[q.answer])}</h4><ol class="solution-steps">${q.steps.map(s => `<li>${nl(s)}</li>`).join("")}</ol>${solutionNotes(q)}</div>`;
  }
  function solutionNotes(q) {
    return `<div class="solution-grid"><div class="solution-note"><strong>本題觀念</strong><p>${nl(q.concept)}</p></div><div class="solution-note formula-note"><strong>關鍵數據</strong><div>${block(q.formula)}</div></div><div class="solution-note tip"><strong>快解技巧</strong><p>${nl(q.tip)}</p></div><div class="solution-note trap"><strong>易錯警報</strong><p>${nl(q.trap)}</p></div></div>`;
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
    const correct = state.exam.questions.filter((q, i) => state.answers[i] === q.answer).length;
    const missed = [...new Set(state.exam.questions.map((q, i) => state.answers[i] === q.answer ? null : units.find(unit => unit.id === q.unitId)?.title).filter(Boolean))];
    const answered = state.answers.filter(a => a !== null).length;
    const total = state.exam.questions.length;
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
      correct, answered, total,
      missedUnits: missed,
      elapsedSeconds, overtimeSeconds, totalSeconds: state.totalSeconds,
      exam: state.exam,
      answers: state.answers
    });
    renderExam();
    updateTimer();
    const resultNote = isQuiz ? `本小考只計入「${esc(state.exam.title)}」的範圍，原始答對數不等同學校定期評量成績。`
      : isArchive ? `本卷依 ${state.exam.year} 年官方公布題本中的地理題目重製，供練習使用；正式成績、等級與官方原始題本以會考官方網站為準。`
      : "本結果是練習用原始答對數，不等同官方等級；本模考規格為本站自訂，非官方獨立地理考科規格。";
    $("#resultPanel").innerHTML = `<div class="result-summary"><div class="result-score"><span><strong>${correct}</strong><br><small>/ ${total} 題</small></span></div><div class="result-copy"><p class="eyebrow">RESULT</p><h2>${scoreRate >= .88 ? "很穩，這個範圍已有成熟掌握。" : scoreRate >= .7 ? "底子不錯，把錯題對應單元立刻回補。" : scoreRate >= .5 ? "先抓本卷錯題觀念，分數會升得最快。" : "別急著刷下一卷，先回講義補地基。"}</h2><p class="elapsed-note">作答時間 ${formatDuration(elapsedSeconds)}${overtimeSeconds > 0 ? `（含超時 ${formatDuration(overtimeSeconds)}）` : ""}</p><p>${resultNote}</p><div class="missed-units">${missed.slice(0, 10).map(x => `<span>${esc(x)}</span>`).join("")}${missed.length > 10 ? `<span>另 ${missed.length - 10} 單元</span>` : ""}</div></div><button class="primary" id="reviewFirst">從第一題看詳解</button></div>`;
    $("#resultPanel").classList.remove("hidden");
    $("#reviewFirst").addEventListener("click", () => $("#question-1").scrollIntoView({ behavior: "smooth", block: "start" }));
    $("#resultPanel").scrollIntoView({ behavior: "smooth", block: "center" });
    toast(`已交卷：作答 ${answered}/${total}，答對 ${correct}/${total}`);
  }

  function bindStaticEvents() {
    $$('[data-view]').forEach(button => button.addEventListener("click", event => { event.preventDefault(); setView(button.dataset.view); }));
    $("#menuButton").addEventListener("click", () => document.body.classList.toggle("menu-open"));
    $("#themeButton").addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const dark = document.body.classList.contains("dark");
      localStorage.setItem("capGeography.dark", dark ? "1" : "0");
      $("#themeButton").textContent = dark ? "日" : "月";
    });
    $("#generateExam").addEventListener("click", beginExam);
    $("#startDefaultExam").addEventListener("click", beginExam);
    $("#switchFullExam").addEventListener("click", switchToFullExam);
    $("#submitExam").addEventListener("click", () => submitExam());
    $("#printExam").addEventListener("click", () => window.print());
    $("#handbookSearch").addEventListener("input", event => { state.search = event.target.value; renderHandbook(); });
    $$('[data-grade]', $("#gradeFilters")).forEach(button => button.addEventListener("click", () => {
      state.grade = button.dataset.grade;
      $$('[data-grade]', $("#gradeFilters")).forEach(el => el.classList.toggle("active", el === button));
      renderHandbook();
    }));
    $("#tipSearch").addEventListener("input", event => { state.tipSearch = event.target.value; renderTipAudits(); });
    $$('[data-verdict]', $("#tipFilters")).forEach(button => button.addEventListener("click", () => {
      state.tipVerdict = button.dataset.verdict;
      $$('[data-verdict]', $("#tipFilters")).forEach(el => el.classList.toggle("active", el === button));
      renderTipAudits();
    }));
  }

  function init() {
    const lastSeed = localStorage.getItem("capGeography.lastSeed");
    const params = new URLSearchParams(window.location.search);
    const requestedUnit = Number(params.get("unit"));
    if (Number.isInteger(requestedUnit) && units.some(unit => unit.id === requestedUnit)) state.selectedUnit = requestedUnit;
    if (lastSeed) $("#seedInput").value = lastSeed;
    if (localStorage.getItem("capGeography.dark") === "1") { document.body.classList.add("dark"); $("#themeButton").textContent = "日"; }
    bindStaticEvents();
    renderQuizCatalog(); renderHandbook(); renderAtlas(); renderAnalysis(); renderSources(); renderArchive(); updateLearningProgress();
    const requestedView = params.get("view");
    const requestedQuiz = params.get("quiz");
    if (requestedQuiz && window.EXAM_ENGINE.quizCatalog.some(item => item.id === requestedQuiz)) beginQuiz(requestedQuiz);
    else if (requestedView && viewNames[requestedView]) setView(requestedView);
  }
  init();
})();
