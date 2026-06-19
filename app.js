(() => {
  const { units, domains, strategies, archives, sourcePolicy, officialSources, publisherSources, tipAudits } = window.MATH_DATA;
  const capAnalysis = window.CAP_ANALYSIS;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const esc = value => String(value).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const nl = value => esc(value).replace(/\n/g, "<br>");
  const letters = ["A", "B", "C", "D"];
  const viewNames = { home: "學習總覽", exam: "全範圍模擬考", handbook: "國中數學全冊講義", atlas: "題型與技巧地圖", analysis: "近十年逐題分析", sources: "資料與技巧審核", archive: "近十年考卷館" };
  let toastTimer;

  const state = {
    view: "home",
    selectedUnit: 1,
    grade: "all",
    search: "",
    tipSearch: "",
    tipVerdict: "all",
    completed: new Set(JSON.parse(localStorage.getItem("capMath.completed") || "[]")),
    exam: null,
    answers: [],
    submitted: false,
    seconds: 4800,
    timerId: null,
    currentQuestion: 0
  };

  function toast(message) {
    const el = $("#toast");
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
  }

  function setView(view) {
    if (!viewNames[view]) return;
    state.view = view;
    $$(".view").forEach(el => el.classList.toggle("active", el.id === `view-${view}`));
    $$("#mainNav [data-view]").forEach(el => el.classList.toggle("active", el.dataset.view === view));
    $("#viewTitle").textContent = viewNames[view];
    document.body.classList.remove("menu-open");
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          <div class="unit-meta"><span>國${unit.grade === 7 ? "一" : unit.grade === 8 ? "二" : "三"}</span><span>${esc(unit.domain)}</span><span>十年主概念編碼 ${String(unit.id).padStart(2, "0")}</span></div>
          <h2>${esc(unit.title)}</h2><p>${esc(unit.summary)}</p>
        </header>
        <div class="unit-body">
          <section class="lesson-block"><div class="lesson-label">核心觀念</div><div class="lesson-content"><h3>先把這件事想清楚</h3><p>${esc(unit.core)}</p><div class="clarify-box"><strong>觀念澄清：</strong> ${esc(unit.clarify)}</div></div></section>
          <section class="lesson-block"><div class="lesson-label">公式與推導</div><div class="lesson-content"><div class="formula-box">${nl(unit.formula)}</div><h3>公式不是憑空出現</h3><p>${esc(unit.derivation)}</p></div></section>
          <section class="lesson-block"><div class="lesson-label">標準解題流程</div><div class="lesson-content"><ol>${unit.steps.map(step => `<li>${esc(step)}</li>`).join("")}</ol></div></section>
          <section class="lesson-block"><div class="lesson-label">會考快解技巧</div><div class="lesson-content"><ul class="tip-list">${unit.tips.map(tip => `<li>${esc(tip)}</li>`).join("")}</ul></div></section>
          <section class="lesson-block"><div class="lesson-label">30 秒觀念測驗</div><div class="lesson-content"><div class="quiz-box"><p><strong>題目：</strong>${esc(unit.quiz.q)}</p><button class="quiz-reveal">顯示解答</button><p class="quiz-answer"><strong>解答：</strong>${esc(unit.quiz.a)}</p></div></div></section>
        </div>
        <button class="complete-button ${state.completed.has(unit.id) ? "done" : ""}" data-complete="${unit.id}">${state.completed.has(unit.id) ? "✓ 已掌握這個單元（按一下取消）" : "標記為已掌握"}</button>
      </article>`;
    $(".quiz-reveal").addEventListener("click", event => { event.currentTarget.closest(".quiz-box").classList.add("revealed"); event.currentTarget.textContent = "已顯示解答"; });
    $("[data-complete]").addEventListener("click", () => {
      state.completed.has(unit.id) ? state.completed.delete(unit.id) : state.completed.add(unit.id);
      localStorage.setItem("capMath.completed", JSON.stringify([...state.completed]));
      updateLearningProgress();
      renderHandbook();
      toast(state.completed.has(unit.id) ? "已記錄為掌握單元" : "已取消掌握標記");
    });
    updateLearningProgress();
  }

  function renderAtlas() {
    $("#atlasContent").innerHTML = `
      <div class="domain-grid">${domains.map(d => `<article class="domain-card"><span>${d.mark}</span><h3>${esc(d.name)}</h3><p>${esc(d.desc)}</p><ul>${d.skills.map(s => `<li>${esc(s)}</li>`).join("")}</ul></article>`).join("")}</div>
      <section class="strategy-section"><p class="eyebrow">PATTERN → TOOL</p><h2>八大常見題型：看到什麼，就啟動什麼</h2>
        <table class="strategy-table"><thead><tr><th>題型</th><th>核心能力</th><th>穩定解法</th><th>最常失分</th></tr></thead><tbody>${strategies.map(row => `<tr>${row.map(cell => `<td>${esc(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table>
        <h2>非選擇題的 3 級分作答骨架</h2>
        <div class="nonchoice-playbook">
          <article><span>01</span><h3>定義</h3><p>先寫「設 x 為……」，讓未知數、單位與題目對上。</p></article>
          <article><span>02</span><h3>策略</h3><p>列出關係式或幾何性質，交代為什麼可以這樣做。</p></article>
          <article><span>03</span><h3>推導</h3><p>保留關鍵算式與理由；錯一個小計算，仍可能保有過程分。</p></article>
          <article><span>04</span><h3>結論</h3><p>回到題目語境，寫單位、範圍與完整回答；別停在中間量。</p></article>
        </div>
      </section>`;
  }

  function renderArchive() {
    $("#archiveGrid").innerHTML = archives.map((item, index) => `
      <article class="archive-card ${index === 0 ? "latest" : ""}">
        <div class="year-block"><strong>${item.year}</strong><span>${item.western} 年${index === 0 ? " · 最新" : ""}</span></div>
        <div class="archive-body"><h3>${item.year} 年國中教育會考</h3><p>數學科官方公布資料</p><div class="archive-links">
          <a href="${item.paper}" target="_blank" rel="noopener">數學題本 ↗</a>
          <a href="${item.answer}" target="_blank" rel="noopener">參考答案 ↗</a>
          <a href="${item.guide}" target="_blank" rel="noopener">試題說明 ↗</a>
          <a href="${item.page}" target="_blank" rel="noopener">年度總頁 ↗</a>
        </div></div>
      </article>`).join("");
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
    const mc = years.reduce((sum, year) => sum + official[year].mc, 0);
    const cr = years.reduce((sum, year) => sum + official[year].cr, 0);
    const reading = years.reduce((sum, year) => sum + capAnalysis.formByYear[year].set, 0);
    $("#analysisStats").innerHTML = [
      ["10", "屆官方題本"], [total, "逐題完成主概念編碼"], [mc, "選擇題"], [cr, "非選擇題"], [reading, "閱讀題組子題"]
    ].map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join("");

    const abilityTotals = years.reduce((acc, year) => {
      Object.entries(official[year].abilities).forEach(([key, value]) => acc[key] = (acc[key] || 0) + value);
      return acc;
    }, {});
    const abilityLabels = { concept: "概念／知識理解", procedure: "程序執行", application: "解題應用", analysis: "分析思考" };
    const abilityMax = Math.max(...Object.values(abilityTotals));
    $("#abilityBars").innerHTML = Object.entries(abilityLabels).map(([key, label]) => `<div class="bar-row"><span>${label}</span><div><i style="--value:${abilityTotals[key] / abilityMax * 100}%"></i></div><b>${abilityTotals[key]}</b></div>`).join("");
    $("#officialStructureTable").innerHTML = `<table class="mini-table"><thead><tr><th>年度</th><th>結構</th><th>概念</th><th>程序</th><th>應用</th><th>分析</th></tr></thead><tbody>${years.map(year => `<tr><td>${year}</td><td>${official[year].mc}＋${official[year].cr}</td><td>${official[year].abilities.concept}</td><td>${official[year].abilities.procedure}</td><td>${official[year].abilities.application}</td><td>${official[year].abilities.analysis}</td></tr>`).join("")}</tbody></table>`;

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
    const domainOrder = ["數與量", "空間與形狀", "代數", "資料與不確定性", "函數", "坐標幾何"];
    $("#domainDistribution").innerHTML = domainOrder.map(domain => `<article class="domain-stat"><span>${domain}</span><strong>${domainCounts[domain]}</strong><small>${(domainCounts[domain] / total * 100).toFixed(1)}%｜十年合計</small></article>`).join("");

    const unitTotals = {};
    Object.values(primary).flat().forEach(unitId => unitTotals[unitId] = (unitTotals[unitId] || 0) + 1);
    const matrixUnits = units.filter(unit => unit.id <= 26).sort((a, b) => (unitTotals[b.id] || 0) - (unitTotals[a.id] || 0));
    $("#conceptMatrixHead").innerHTML = `<tr><th>主概念（依十年題數排序）</th>${years.map(year => `<th>${year}</th>`).join("")}<th>合計</th><th>占比</th></tr>`;
    $("#conceptMatrixBody").innerHTML = matrixUnits.map(unit => {
      const count = unitTotals[unit.id] || 0;
      return `<tr class="${count >= 13 ? "high" : ""}"><td>${esc(unit.title)}<small class="audit-unit">${esc(capAnalysis.domainByUnit[unit.id])}</small></td>${years.map(year => `<td>${unitYearCounts[year][unit.id] || 0}</td>`).join("")}<td class="total">${count}</td><td>${(count / total * 100).toFixed(1)}%</td></tr>`;
    }).join("");

    const formLabels = {
      basic: ["基本文字／算式單題", "直接計算、定義與基本概念"],
      geometry: ["附圖幾何／空間", "角度、長度、面積、圓、摺疊與立體"],
      context: ["生活情境應用", "價格、交通、人口、能源與實際量"],
      chart: ["圖表資料判讀", "長條圖、折線圖、直方圖與盒狀圖"],
      set: ["閱讀題組", "共用選文，連續 2～3 題逐層提問"],
      cr: ["非選擇題", "要求策略、推導、說明與完整結論"]
    };
    const formTotals = Object.keys(formLabels).reduce((acc, key) => {
      acc[key] = years.reduce((sum, year) => sum + capAnalysis.formByYear[year][key], 0); return acc;
    }, {});
    $("#formAnalysis").innerHTML = Object.entries(formLabels).map(([key, [label, detail]]) => `<article class="form-card"><strong>${formTotals[key]}</strong><span>${label}</span><small>${detail}</small></article>`).join("");

    $("#yearLedger").innerHTML = years.slice().reverse().map((year, index) => {
      const info = official[year];
      return `<details ${index === 0 ? "open" : ""}><summary><strong>${year}</strong><span>${info.curriculum}｜${info.mc} 題選擇＋${info.cr} 題非選｜80 分鐘</span><b>展開逐題編碼 ＋</b></summary><div class="ledger-body"><div class="ledger-ability"><span>概念 ${info.abilities.concept}</span><span>程序 ${info.abilities.procedure}</span><span>應用 ${info.abilities.application}</span><span>分析 ${info.abilities.analysis}</span></div><div class="ledger-questions">${primary[year].map((unitId, i) => {
        const isCr = i >= info.mc;
        const number = isCr ? `非${i - info.mc + 1}` : i + 1;
        return `<article class="ledger-item ${isCr ? "cr" : ""}"><b>${number}</b><span>${esc(units[unitId - 1].title)}<small>${esc(capAnalysis.domainByUnit[unitId])}</small></span></article>`;
      }).join("")}</div><div class="cr-topic-list">${info.crTopics.map((topic, i) => `<p><strong>非選 ${i + 1}</strong>｜${esc(topic)}</p>`).join("")}</div></div></details>`;
    }).join("");

    const bp = capAnalysis.strictBlueprint;
    const domainText = Object.entries(bp.domainTargets).map(([name, range]) => `${name} ${range[0]}–${range[1]}`).join("、");
    $("#blueprintChecks").innerHTML = [
      ["✓ 題本結構", `${bp.mc} 選擇＋${bp.cr} 非選，${bp.minutes} 分鐘`],
      ["✓ 官方能力層次", `概念 6、程序 4、應用 12、分析 5`],
      ["✓ 六大主題區間", domainText],
      ["✓ 呈現形式", `閱讀題組 ${bp.presentation.readingSetItems[0]}–${bp.presentation.readingSetItems[1]} 題；附圖幾何 ${bp.presentation.geometryItems[0]}–${bp.presentation.geometryItems[1]} 題`],
      ["✓ 作答節奏", "前段基礎、後段整合；題組在末段；非選在第二部分"],
      ["✓ 非選評分", "策略適切、過程合理完整、結論含單位與情境解釋"]
    ].map(([title, detail]) => `<div class="blueprint-check"><strong>${title}</strong><span>${esc(detail)}</span></div>`).join("");
  }

  function renderTipAudits() {
    const q = state.tipSearch.trim().toLowerCase();
    const list = tipAudits.filter(item => (state.tipVerdict === "all" || item.verdict === state.tipVerdict) && (!q || [item.tip, item.condition, item.why, item.source, units[item.unitId - 1]?.title].join(" ").toLowerCase().includes(q)));
    const verdictClass = verdict => verdict === "通過" ? "pass" : verdict === "有條件" ? "conditional" : "reject";
    $("#tipAuditBody").innerHTML = list.length ? list.map(item => `
      <tr><td>${esc(item.tip)}<span class="audit-unit">${esc(units[item.unitId - 1]?.title || "跨單元")}｜${esc(item.source)}</span></td><td><span class="verdict ${verdictClass(item.verdict)}">${esc(item.verdict)}</span></td><td>${esc(item.condition)}</td><td>${esc(item.why)}</td></tr>`).join("") : `<tr><td class="audit-empty" colspan="4">找不到符合條件的技巧。</td></tr>`;
    $("#auditCount").textContent = state.tipVerdict === "all" && !q ? tipAudits.length : `${list.length}/${tipAudits.length}`;
  }

  function beginExam() {
    const seed = Math.max(1, Math.min(999999, Number($("#seedInput").value) || Math.floor(Date.now() % 999999)));
    const level = Number($("#levelSelect").value) || 2;
    state.exam = window.EXAM_ENGINE.generate(seed, level);
    state.answers = state.exam.questions.map(q => q.type === "mc" ? null : "");
    state.submitted = false;
    state.seconds = 4800;
    state.currentQuestion = 0;
    $("#examEmpty").classList.add("hidden");
    $("#examWorkspace").classList.remove("hidden");
    $("#resultPanel").classList.add("hidden");
    $("#paper").classList.remove("submitted");
    renderExam();
    startTimer();
    localStorage.setItem("capMath.lastSeed", seed);
    toast(`已生成卷別 ${seed}，計時開始`);
    $("#examWorkspace").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function startTimer() {
    clearInterval(state.timerId);
    updateTimer();
    state.timerId = setInterval(() => {
      if (state.submitted) return clearInterval(state.timerId);
      state.seconds -= 1;
      updateTimer();
      if (state.seconds <= 0) { clearInterval(state.timerId); submitExam(true); }
    }, 1000);
  }
  function updateTimer() {
    const m = Math.max(0, Math.floor(state.seconds / 60)), s = Math.max(0, state.seconds % 60);
    $("#timer").textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    $(".timer-card").classList.toggle("warning", state.seconds <= 600);
    $("#timerState").textContent = state.seconds <= 600 ? "最後 10 分鐘，先完成會寫的" : state.submitted ? "作答已結束" : "模擬正式考試";
  }

  function renderExam() {
    if (!state.exam) return;
    const difficultyLabel = ["", "基礎", "核心", "進階", "整合", "高鑑別"];
    const abilityLabel = { concept: "概念理解", procedure: "程序執行", application: "解題應用", analysis: "分析思考" };
    const qHtml = state.exam.questions.map((q, index) => {
      const unit = units[q.unitId - 1];
      const answered = q.type === "mc" ? state.answers[index] !== null : Boolean(state.answers[index].trim());
      const choices = q.type === "mc" ? `<div class="choices">${q.choices.map((choice, ci) => {
        const selected = state.answers[index] === ci;
        const correct = state.submitted && ci === q.answer;
        const wrong = state.submitted && selected && ci !== q.answer;
        return `<button class="choice ${selected ? "selected" : ""} ${correct ? "correct" : ""} ${wrong ? "wrong" : ""}" data-choice="${index}:${ci}" ${state.submitted ? "disabled" : ""}><span class="choice-letter">${letters[ci]}</span><span>${esc(choice)}</span></button>`;
      }).join("")}</div>` : `<div class="constructed"><textarea data-cr="${index}" placeholder="請寫下完整解題過程與結論……" ${state.submitted ? "disabled" : ""}>${esc(state.answers[index])}</textarea><p class="writing-guide">建議包含：設未知數／列關係或性質／推導計算／含單位的結論</p></div>`;
      const passage = q.passageId && (!index || state.exam.questions[index - 1].passageId !== q.passageId) ? `<aside class="reading-passage"><p class="eyebrow">閱讀選文｜回答第 ${index + 1}～${index + state.exam.questions.filter(item => item.passageId === q.passageId).length} 題</p><h3>自行車訓練器的速率估計</h3><p>${esc(q.passage)}</p></aside>` : "";
      return `${passage}<article class="question ${q.type === "cr" ? "constructed-question" : ""}" id="question-${index + 1}" data-question="${index}">
        <div class="question-head"><span class="question-number">${index + 1}</span><div class="question-tags"><span class="question-tag grade">國${unit.grade === 7 ? "一" : unit.grade === 8 ? "二" : "三"}</span><span class="question-tag">${esc(unit.title)}</span><span class="question-tag ability">${abilityLabel[q.ability] || "整合"}</span></div><span class="difficulty" aria-label="${difficultyLabel[q.difficulty]}">${"★".repeat(q.difficulty)}${"☆".repeat(5-q.difficulty)}</span></div>
        <div class="question-text">${nl(q.text)}</div>${q.diagram || ""}${choices}${solutionHtml(q, index)}
      </article>`;
    }).join("");
    const constructedStart = qHtml.indexOf('<article class="question constructed-question');
    $("#paper").innerHTML = `
      <header class="paper-cover"><div><p class="eyebrow">115 官方結構 · 十年分布校準 · ${esc(state.exam.id)}</p><h2>國中教育會考數學科模擬題本</h2><p>25 題選擇＋2 題非選｜80 分鐘｜概念 6・程序 4・應用 12・分析 5</p></div><div class="paper-stamp">115<br>官方藍圖</div></header>
      <div class="paper-instructions"><div><strong>25</strong><span>四選一｜末段含 3 題閱讀題組</span></div><div><strong>2</strong><span>非選擇題｜策略與表達計分</span></div><div><strong>80 min</strong><span>前段基礎、後段整合分析</span></div></div>
      <div class="paper-section-title"><h3>第一部分：選擇題</h3><span>每題只有一個正確或最佳答案</span></div>
      ${qHtml.slice(0, constructedStart)}
      <div class="paper-section-title"><h3>第二部分：非選擇題</h3><span>策略適切＋推導完整＋結論清楚</span></div>
      ${qHtml.slice(constructedStart)}`;
    if (state.submitted) $("#paper").classList.add("submitted");
    bindExamInputs();
    renderQuestionGrid();
    updateAnswered();
  }

  function solutionHtml(q, index) {
    if (q.type === "mc") {
      return `<div class="solution"><h4>正確答案：${letters[q.answer]}｜${esc(q.choices[q.answer])}</h4><ol class="solution-steps">${q.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>${solutionNotes(q)}</div>`;
    }
    return `<div class="solution"><h4>參考結論：${esc(q.answer)}</h4><ol class="solution-steps">${q.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>${solutionNotes(q)}<table class="rubric">${q.rubric.map(row => `<tr><th>${esc(row[0])}</th><td>${esc(row[1])}</td></tr>`).join("")}</table></div>`;
  }
  function solutionNotes(q) {
    return `<div class="solution-grid"><div class="solution-note"><strong>本題觀念</strong><p>${esc(q.concept)}</p></div><div class="solution-note"><strong>可用公式</strong><p>${nl(q.formula)}</p></div><div class="solution-note tip"><strong>快解技巧</strong><p>${esc(q.tip)}</p></div><div class="solution-note trap"><strong>易錯警報</strong><p>${esc(q.trap)}</p></div></div>`;
  }

  function bindExamInputs() {
    $$('[data-choice]', $("#paper")).forEach(button => button.addEventListener("click", () => {
      const [qi, ci] = button.dataset.choice.split(":").map(Number);
      state.answers[qi] = ci;
      state.currentQuestion = qi;
      $$(".choice", $(`#question-${qi + 1}`)).forEach((el, i) => el.classList.toggle("selected", i === ci));
      renderQuestionGrid(); updateAnswered();
    }));
    $$('[data-cr]', $("#paper")).forEach(area => area.addEventListener("input", () => {
      const qi = Number(area.dataset.cr); state.answers[qi] = area.value; state.currentQuestion = qi; renderQuestionGrid(); updateAnswered();
    }));
    $$(".question", $("#paper")).forEach(article => {
      const observer = new IntersectionObserver(entries => { if (entries[0].isIntersecting) { state.currentQuestion = Number(article.dataset.question); renderQuestionGrid(); } }, { rootMargin: "-25% 0px -60%" });
      observer.observe(article);
    });
  }

  function renderQuestionGrid() {
    if (!state.exam) return;
    $("#questionGrid").innerHTML = state.exam.questions.map((q, i) => {
      const answered = q.type === "mc" ? state.answers[i] !== null : Boolean(state.answers[i].trim());
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
    const count = state.exam.questions.filter((q, i) => q.type === "mc" ? state.answers[i] !== null : Boolean(state.answers[i].trim())).length;
    $("#answeredCount").textContent = count;
    $("#answerProgress").style.width = `${count / 27 * 100}%`;
  }

  function submitExam(auto = false) {
    if (!state.exam || state.submitted) return;
    state.submitted = true;
    clearInterval(state.timerId);
    const correct = state.exam.questions.slice(0, 25).filter((q, i) => state.answers[i] === q.answer).length;
    const missed = [...new Set(state.exam.questions.slice(0, 25).map((q, i) => state.answers[i] === q.answer ? null : units[q.unitId - 1].title).filter(Boolean))];
    const answered = state.exam.questions.filter((q, i) => q.type === "mc" ? state.answers[i] !== null : Boolean(state.answers[i].trim())).length;
    renderExam();
    $("#timerState").textContent = "作答已結束";
    $("#resultPanel").innerHTML = `<div class="result-summary"><div class="result-score"><span><strong>${correct}</strong><br><small>/ 25 選擇題</small></span></div><div class="result-copy"><p class="eyebrow">${auto ? "TIME IS UP" : "RESULT"}</p><h2>${correct >= 22 ? "很穩，接下來磨非選表達。" : correct >= 18 ? "底子不錯，錯題值得立刻回補。" : correct >= 13 ? "先抓高頻觀念，分數會升得最快。" : "別急著刷更多卷，先回講義補地基。"}</h2><p>本結果是練習用原始答對數，不等同官方等級。非選擇題請依每題旁的 0–3 級分規準自評。</p><div class="missed-units">${missed.slice(0, 10).map(x => `<span>${esc(x)}</span>`).join("")}${missed.length > 10 ? `<span>另 ${missed.length - 10} 單元</span>` : ""}</div></div><button class="primary" id="reviewFirst">從第一題看詳解</button></div>`;
    $("#resultPanel").classList.remove("hidden");
    $("#reviewFirst").addEventListener("click", () => $("#question-1").scrollIntoView({ behavior: "smooth", block: "start" }));
    $("#resultPanel").scrollIntoView({ behavior: "smooth", block: "center" });
    toast(`已交卷：作答 ${answered}/27，選擇題答對 ${correct}/25`);
  }

  function bindStaticEvents() {
    $$('[data-view]').forEach(button => button.addEventListener("click", event => { event.preventDefault(); setView(button.dataset.view); }));
    $("#menuButton").addEventListener("click", () => document.body.classList.toggle("menu-open"));
    $("#themeButton").addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const dark = document.body.classList.contains("dark");
      localStorage.setItem("capMath.dark", dark ? "1" : "0");
      $("#themeButton").textContent = dark ? "日" : "月";
    });
    $("#generateExam").addEventListener("click", beginExam);
    $("#startDefaultExam").addEventListener("click", beginExam);
    $("#submitExam").addEventListener("click", () => submitExam(false));
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
    const lastSeed = localStorage.getItem("capMath.lastSeed");
    if (lastSeed) $("#seedInput").value = lastSeed;
    if (localStorage.getItem("capMath.dark") === "1") { document.body.classList.add("dark"); $("#themeButton").textContent = "日"; }
    bindStaticEvents();
    renderHandbook(); renderAtlas(); renderAnalysis(); renderSources(); renderArchive(); updateLearningProgress();
    const requestedView = new URLSearchParams(window.location.search).get("view");
    if (requestedView && viewNames[requestedView]) setView(requestedView);
  }
  init();
})();
