(() => {
  const { units, domains, strategies, archives, sourcePolicy, officialSources, publisherSources, tipAudits } = window.MATH_DATA;
  const legacyUnits = window.MATH_LEGACY_SUPPORT_UNITS || units;
  const capAnalysis = window.CAP_ANALYSIS;
  const isV2 = window.MATH_V2_PRODUCTION_MODE === true;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const esc = value => String(value).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const renderMath = (value, chunked = false) => FRACTION_MARKUP.renderMath(value, esc, chunked);
  const mathText = value => renderMath(value ?? "").replace(/\n/g, "<br>");
  const mathBlock = value => String(value).split("\n").map(line => `<span class="math-line">${renderMath(line, true)}</span>`).join("");
  const nl = mathText;
  const COMMON_SYMBOLS = [
    ["r", "半徑", /半徑|圓|圓柱|圓錐|扇形|弧長|周長|面積/],
    ["h", "高", /高|高度|圓柱|圓錐|三角形|梯形|柱體|錐體/],
    ["l", "母線（斜高）", /母線|斜高|圓錐/],
    ["m", "斜率", /斜率|線型函數|直線|y\s*[=＝]\s*m/],
    ["x", "未知數、橫坐標或輸入量，依題意定義", /x|未知數|坐標|座標|方程式|函數|公里|總數|個數|費用/],
    ["y", "未知數、縱坐標或輸出量，依題意定義", /y|未知數|坐標|座標|方程式|函數|費用/],
    ["a", "已知數、係數或首項，依公式位置判斷", /a|係數|等差|二次函數|公式/],
    ["b", "已知數、係數或 y 截距，依公式位置判斷", /b|截距|係數|公式/],
    ["c", "已知常數；在直角三角形公式中常代表斜邊", /c|常數|斜邊|方程式/],
    ["n", "項數、個數或次數", /n|項數|個數|次數|數列|級數/],
    ["k", "比例常數或頂點的 y 值，依題意定義", /k|比例|頂點|函數/]
  ];
  const symbolNotesFrom = (...values) => {
    const text = values.flat(Infinity).filter(Boolean).join(" ");
    const notes = COMMON_SYMBOLS
      .filter(([symbol, , trigger]) => new RegExp(`(^|[^A-Za-z])${symbol}([^A-Za-z]|$)`, "i").test(text) && trigger.test(text))
      .map(([symbol, meaning]) => `${symbol}：${meaning}`);
    return [...new Set(notes)];
  };
  const symbolListHtml = notes => notes.length ? `<ul class="symbol-list">${notes.map(note => `<li>${mathText(note)}</li>`).join("")}</ul>` : `<p class="symbol-empty">本段沒有需要另設的英文字母未知數。</p>`;
  const unitSymbolHtml = unit => `<section class="lesson-block symbol-block"><div class="lesson-label">符號說明</div><div class="lesson-content"><h3>先確認每個字母代表什麼</h3>${symbolListHtml(symbolNotesFrom(unit.title, unit.core, unit.formula, unit.derivation, unit.steps, unit.tips))}</div></section>`;
  const questionSymbolHtml = q => {
    const notes = Array.isArray(q.symbolNotes) && q.symbolNotes.length
      ? q.symbolNotes.map(note => String(note).includes("：") ? note : note.replace(/^([a-z]) 代表 /i, "$1："))
      : symbolNotesFrom(q.text, q.formula, q.concept, q.steps, q.tip, q.trap);
    return notes.length ? `<div class="solution-note symbol-note"><strong>本題符號說明</strong>${symbolListHtml(notes)}</div>` : "";
  };
  const figureHtml = (figure, className = "exam-figure") => {
    if (!figure.figureUrl) return "";
    const description = figure.figureDescription && figure.figureDescription !== figure.figureAlt
      ? `<span class="figure-description">${mathText(figure.figureDescription)}</span>` : "";
    return `<figure class="${className}"><img src="${esc(figure.figureUrl)}" alt="${esc(figure.figureAlt || figure.figureCaption || "數學圖形")}"><figcaption><strong>${esc(figure.figureCaption || "題目圖形")}</strong>${description}</figcaption></figure>`;
  };
  const questionFigureHtml = q => figureHtml(q);
  const letters = ["A", "B", "C", "D"];
  const viewNames = { home: "學習總覽", exam: "全範圍模擬考", quiz: "單元小考題庫", papers: "我的考卷", handbook: "國中數學全冊講義", atlas: "題型與技巧地圖", analysis: "近十年逐題分析", sources: "資料與技巧審核", archive: "近十年考卷館" , paper: "官方考卷" };
  let toastTimer;

  const state = {
    view: "home",
    selectedUnit: 1,
    grade: "all",
    search: "",
    tipSearch: "",
    tipVerdict: "all",
    completed: new Set(window.MATH_V2_STORAGE?.readCompleted?.() || JSON.parse(localStorage.getItem("capMath.human.r1.completed") || "[]")),
    exam: null,
    answers: [],
    submitted: false,
    seconds: 4800,
    totalSeconds: 4800,
    timerId: null,
    currentQuestion: 0,
    paperDateFilter: "all",
    paperHistoryPage: 0,
    paperReview: { recordId: null, mode: null, drill: null }
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
    return assessment.questions.map(q => [q.unitId, q.quizLevel || "", q.text, q.choices?.join("|") || q.answer].join("∷")).join("§");
  }

  async function uniqueQuizAssessment(quizId) {
    const used = readJson(`capMath.human.r1.quizSignatures.${quizId}`, []);
    for (let attempt = 0; attempt < 80; attempt++) {
      const seed = Math.floor(Date.now() % 1000000000) + attempt * 9973 + Math.floor(Math.random() * 9000);
      const assessment = await window.EXAM_ENGINE.generateQuiz(quizId, seed);
      const signature = quizSignature(assessment);
      if (!used.includes(signature)) {
        localStorage.setItem(`capMath.human.r1.quizSignatures.${quizId}`, JSON.stringify([signature, ...used].slice(0, 300)));
        return assessment;
      }
    }
    // ponytail: remembers 300 generated papers per quiz; after that, timestamp seed still changes values.
    return window.EXAM_ENGINE.generateQuiz(quizId, Date.now());
  }

  function paperHistory() { return readJson("capMath.human.r1.paperHistory", []); }

  function savePaperRecord(record) {
    try { localStorage.setItem("capMath.human.r1.paperHistory", JSON.stringify([record, ...paperHistory()].slice(0, 40))); }
    catch {
      try { localStorage.setItem("capMath.human.r1.paperHistory", JSON.stringify([record, ...paperHistory()].slice(0, 15))); }
      catch { toast("本機儲存空間不足，這次考卷未保存到我的考卷"); }
    }
  }

  function updatePaperRecord(recordId, patch) {
    const records = paperHistory().map(record => record.id === recordId ? { ...record, ...patch } : record);
    try { localStorage.setItem("capMath.human.r1.paperHistory", JSON.stringify(records.slice(0, 40))); }
    catch { toast("本機儲存空間不足，無法更新考卷紀錄"); }
  }

  function getPaperRecord(recordId) {
    return paperHistory().find(record => record.id === recordId) || null;
  }

  function mcWrongIndexes(record) {
    return record.exam.questions.map((question, index) => question.type === "mc" && record.answers[index] !== question.answer ? index : null).filter(index => index !== null);
  }

  function correctionStats(record) {
    const wrongIndexes = mcWrongIndexes(record);
    const corrections = record.corrections || {};
    const uncorrected = wrongIndexes.filter(index => !corrections[index]?.passed).length;
    return { wrongTotal: wrongIndexes.length, uncorrected };
  }

  function wasOriginallyWrong(record, index) {
    const question = record.exam.questions[index];
    return question.type === "mc" && record.answers[index] !== question.answer;
  }

  async function startTopicDrill(questionIndex) {
    const record = getPaperRecord(state.paperReview.recordId);
    if (!record) return;
    const question = record.exam.questions[questionIndex];
    const rounds = (record.corrections?.[questionIndex]?.rounds || 0) + 1;
    const seed = `${record.exam.seed || record.id}-${questionIndex}-${rounds}`;
    const excludeKeys = [window.EXAM_ENGINE.drillQuestionSignature(question)];
    const level = record.exam.level || 2;
    let subQuestions;
    try {
      if (isV2 && question.skillId) {
        subQuestions = await window.EXAM_ENGINE.generateCorrectionDrill(question, seed, 1, excludeKeys);
      } else if (question.taxonomyQuizId && question.taxonomyTopicId) {
        try {
          subQuestions = await window.EXAM_ENGINE.generateTopicDrill(question.taxonomyQuizId, question.taxonomyTopicId, seed, 1, excludeKeys);
        } catch {
          subQuestions = await window.EXAM_ENGINE.generateUnitDrill(question.unitId, seed, 1, level, excludeKeys);
        }
      } else {
        subQuestions = await window.EXAM_ENGINE.generateUnitDrill(question.unitId, seed, 1, level, excludeKeys);
      }
    } catch (error) {
      toast(error.message || "無法產生訂正練習");
      return;
    }
    state.paperReview.drill = { qIndex: questionIndex, subQuestions, subAnswers: subQuestions.map(() => null), rounds, submitted: false };
    renderExam();
    $(`#question-${questionIndex + 1}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function submitTopicDrillAnswers() {
    const drill = state.paperReview.drill;
    const record = getPaperRecord(state.paperReview.recordId);
    if (!drill || !record || drill.submitted) return;
    if (drill.subAnswers.some(answer => answer === null)) {
      toast("請先完成訂正練習的作答");
      return;
    }
    drill.submitted = true;
    const passed = drill.subQuestions.every((question, index) => drill.subAnswers[index] === question.answer);
    if (passed) {
      const corrections = { ...(record.corrections || {}), [drill.qIndex]: { passed: true, rounds: drill.rounds } };
      updatePaperRecord(record.id, { corrections });
      renderMyPapers();
      toast("訂正觀念完成，這題已標記為已訂正。");
    } else {
      toast("還有題目答錯，請先看詳解後再練一次。");
    }
    renderExam();
  }

  function drillHtml(questionIndex) {
    const drill = state.paperReview.drill;
    if (!drill || drill.qIndex !== questionIndex) return "";
    const ready = drill.subAnswers.every(answer => answer !== null);
    const passed = drill.submitted && drill.subQuestions.every((question, index) => drill.subAnswers[index] === question.answer);
    const questionsHtml = drill.subQuestions.map((question, subIndex) => {
      const choices = question.choices.map((choice, choiceIndex) => {
        const selected = drill.subAnswers[subIndex] === choiceIndex;
        const attrs = EXAM_CHOICE_UI.choiceAttrs({ submitted: drill.submitted, selected, isAnswer: choiceIndex === question.answer });
        return EXAM_CHOICE_UI.choiceButton({ letter: letters[choiceIndex], textHtml: mathText(choice), attrs, dataAttr: `data-drill-choice="${subIndex}:${choiceIndex}"`, disabled: drill.submitted });
      }).join("");
      const wrongAnswer = drill.submitted && drill.subAnswers[subIndex] !== question.answer;
      const solution = wrongAnswer ? solutionHtml(question, subIndex) : "";
      return `<article class="drill-question"><p class="eyebrow">加練 ${subIndex + 1}</p><div class="question-text">${nl(question.text)}</div><div class="choices">${choices}</div>${solution}</article>`;
    }).join("");
    const actions = drill.submitted
      ? passed
        ? `<button type="button" class="secondary" data-drill-close>關閉</button>`
        : `<button type="button" class="secondary" data-drill-retry>再練同題型</button><button type="button" class="secondary" data-drill-close>關閉</button>`
      : `<button type="button" class="primary" data-drill-submit ${ready ? "" : "disabled"}>提交訂正</button><button type="button" class="secondary" data-drill-cancel>取消</button>`;
    return `<div class="topic-drill"><div class="topic-drill-head"><strong>訂正觀念</strong><span>同觀念再練 1 題，答對即完成訂正</span></div>${questionsHtml}<div class="topic-drill-actions">${actions}</div></div>`;
  }

  function correctionBadgeHtml(record, index) {
    if (!record?.corrections?.[index]?.passed) return "";
    return `<span class="correction-badge">已訂正</span>`;
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
    if (view === "paper") renderPaperView();
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

  function renderLectureArticle(lecture, quizId) {
    const examples = lecture.examples.map((example, index) => `<div class="lecture-example"><p><strong>例題 ${index + 1}：</strong>${mathText(example.prompt)}</p><p><strong>答案：</strong>${mathText(example.answer)}</p><p><strong>為什麼：</strong>${mathText(example.why)}</p></div>`).join("");
    const figures = (lecture.figures || []).map(figure => figureHtml(figure, "lecture-figure")).join("");
    return `<article class="lecture-topic-card" id="lecture-${esc(lecture.skillId)}">
      <header><span class="lecture-chapter">${esc(lecture.skillId)}</span><h3>${esc(lecture.title)}</h3><small>${esc(lecture.summary)}</small></header>
      <div class="lecture-blocks">
        <div class="lecture-text"><h4>觀念</h4><p>${mathText(lecture.concept)}</p></div>
        ${lecture.formula ? `<div class="lecture-formula">${mathBlock(lecture.formula)}</div>` : ""}
        <div class="lecture-text"><h4>解題步驟</h4><ol>${lecture.stepGuide.map(step => `<li>${mathText(step)}</li>`).join("")}</ol></div>
        ${figures}
        ${examples}
        <div class="lecture-pitfall"><strong>常見錯誤</strong><ul>${lecture.commonMistakes.map(mistake => `<li>${mathText(mistake)}</li>`).join("")}</ul></div>
        ${lecture.fullScoreExtension ? `<div class="clarify-box"><strong>滿分延伸：</strong>${mathText(lecture.fullScoreExtension)}</div>` : ""}
      </div>
      <footer class="lecture-quiz-link"><a href="?quiz=${esc(quizId)}&seed=">練習本單元小考 →</a></footer>
    </article>`;
  }

  function chaptersForUnit(unitId) {
    return window.EXAM_ENGINE.quizCatalog.filter(item => item.scope === "chapter" && item.unitIds.includes(unitId));
  }

  async function renderHandbook() {
    const list = filteredUnits();
    if (!list.some(u => u.id === state.selectedUnit) && list.length) state.selectedUnit = list[0].id;
    const grouped = [7, 8, 9].map(grade => ({ grade, items: list.filter(u => u.grade === grade) })).filter(g => g.items.length);
    $("#unitIndex").innerHTML = grouped.map(group => `
      <div class="index-group"><strong>國中 ${group.grade === 7 ? "一年級" : group.grade === 8 ? "二年級" : "三年級"}</strong>
        ${group.items.map(unit => `<button class="${unit.id === state.selectedUnit ? "active" : ""}" data-unit="${unit.id}"><span>${String(unit.id).padStart(2, "0")}</span><b>${esc(unit.title)}</b><i>${state.completed.has(unit.unitId) ? "✓" : ""}</i></button>`).join("")}
      </div>`).join("");
    if (!$("#unitIndex").dataset.bound) {
      $("#unitIndex").dataset.bound = "1";
      $("#unitIndex").addEventListener("click", event => {
        const button = event.target.closest("[data-unit]");
        if (!button) return;
        state.selectedUnit = Number(button.dataset.unit);
        renderHandbook();
        if (window.innerWidth < 841) $("#unitContent").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    const unit = units.find(u => u.id === state.selectedUnit && list.some(x => x.id === u.id));
    if (!unit) {
      $("#unitContent").innerHTML = `<div class="unit-empty">找不到符合條件的單元，換個關鍵字試試。</div>`;
      updateLearningProgress();
      return;
    }
    const selectedUnitId = unit.unitId;
    $("#unitContent").innerHTML = `<div class="unit-empty" role="status">正在載入 ${esc(unit.title)} 的 ${unit.skillCount} 份技能講義……</div>`;
    let lectures;
    try {
      lectures = await window.EXAM_ENGINE.engine.getLecturesByUnit(unit.unitId);
    } catch (error) {
      if (state.selectedUnit === unit.id) $("#unitContent").innerHTML = `<div class="unit-empty">講義載入失敗：${esc(error.message || error)}</div>`;
      return;
    }
    if (state.selectedUnit !== unit.id || selectedUnitId !== unit.unitId) return;
    const quizId = chaptersForUnit(unit.id)[0]?.id || `${unit.unitId}-all-skills`;
    $("#unitContent").innerHTML = `
      <article class="unit-card">
        <header class="unit-hero" data-number="${String(unit.id).padStart(2, "0")}">
          <div class="unit-meta"><span>${esc(unit.gradeBand)}</span><span>${esc(unit.domain)}</span><span>${unit.skillCount} 項必修技能</span></div>
          <h2>${esc(unit.title)}</h2><p>${esc(unit.summary)}</p>
        </header>
        <div class="unit-body">
          <section class="lesson-block"><div class="lesson-label">單元目標</div><div class="lesson-content"><h3>學完要能做到</h3><p>${mathText(unit.core)}</p><div class="clarify-box"><strong>範圍邊界：</strong> ${mathText(unit.clarify)}</div></div></section>
          <section class="lesson-block taxonomy-lectures"><div class="lesson-label">技能講義</div><div class="lesson-content"><p>本單元共有 ${lectures.length} 份人工作者技能講義；每份包含觀念、適用條件、步驟、完整例題與常見錯誤。</p>${unit.topics.map(topic => `<details class="lecture-chapter" open><summary><strong>${esc(topic.title)}</strong><span>${topic.skills.length} 項技能</span></summary><div class="lecture-topic-list">${topic.skills.map(skill => renderLectureArticle(lectures.find(lecture => lecture.skillId === skill.skillId), quizId)).join("")}</div></details>`).join("")}</div></section>
        </div>
        <button class="complete-button ${state.completed.has(unit.unitId) ? "done" : ""}" data-complete="${unit.unitId}">${state.completed.has(unit.unitId) ? "✓ 已掌握這個單元（按一下取消）" : "標記為已掌握"}</button>
      </article>`;
    $("[data-complete]").addEventListener("click", () => {
      state.completed.has(unit.unitId) ? state.completed.delete(unit.unitId) : state.completed.add(unit.unitId);
      window.MATH_V2_STORAGE.writeCompleted([...state.completed]);
      updateLearningProgress();
      renderHandbook();
      toast(state.completed.has(unit.unitId) ? "已記錄為掌握單元" : "已取消掌握標記");
    });
    updateLearningProgress();
  }

  function renderAtlas() {
    $("#atlasContent").innerHTML = `
      <section class="taxonomy-atlas"><p class="eyebrow">339 REQUIRED SKILLS</p><h2>23 單元完整技能地圖</h2><p>每項技能都有 12 題選擇題、至少 2 題非選擇題與 1 份完整講義；必要時使用人工作者 SVG。</p>
        ${units.map(unit => `<details class="lecture-chapter atlas-chapter"><summary><strong>${unit.unitId.toUpperCase()}｜${esc(unit.title)}</strong><span>${unit.skillCount} 項技能</span></summary><div class="lecture-topic-list">${unit.topics.map(topic => `<div class="lecture-section"><h4>${esc(topic.title)}</h4><ul class="v2-skill-list">${topic.skills.map(skill => `<li><button type="button" data-atlas-unit="${unit.id}"><strong>${esc(skill.title)}</strong><span>12 題｜講義 1 份</span></button></li>`).join("")}</ul></div>`).join("")}</div></details>`).join("")}
      </section>
      <div class="domain-grid">${domains.map(d => `<article class="domain-card"><span>${d.mark}</span><h3>${esc(d.name)}</h3><p>${mathText(d.desc)}</p><ul>${d.skills.map(s => `<li>${mathText(s)}</li>`).join("")}</ul></article>`).join("")}</div>
      <section class="strategy-section"><p class="eyebrow">PATTERN → TOOL</p><h2>常見題型的穩定處理方式</h2><table class="strategy-table"><thead><tr><th>題型</th><th>核心能力</th><th>穩定解法</th><th>最常失分</th></tr></thead><tbody>${strategies.map(row => `<tr>${row.map(cell => `<td>${mathText(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></section>`;
    $$("[data-atlas-unit]", $("#atlasContent")).forEach(button => button.addEventListener("click", () => {
      state.selectedUnit = Number(button.dataset.atlasUnit);
      setView("handbook");
    }));
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
    const abilityLabels = { concept: "概念／知識理解", procedure: "公式運算", application: "解題應用", analysis: "分析思考" };
    const abilityMax = Math.max(...Object.values(abilityTotals));
    $("#abilityBars").innerHTML = Object.entries(abilityLabels).map(([key, label]) => `<div class="bar-row"><span>${label}</span><div><i style="--value:${abilityTotals[key] / abilityMax * 100}%"></i></div><b>${abilityTotals[key]}</b></div>`).join("");
    $("#officialStructureTable").innerHTML = `<table class="mini-table"><thead><tr><th>年度</th><th>結構</th><th>概念</th><th>公式運算</th><th>應用</th><th>分析</th></tr></thead><tbody>${years.map(year => `<tr><td>${year}</td><td>${official[year].mc}＋${official[year].cr}</td><td>${official[year].abilities.concept}</td><td>${official[year].abilities.procedure}</td><td>${official[year].abilities.application}</td><td>${official[year].abilities.analysis}</td></tr>`).join("")}</tbody></table>`;

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
    const matrixUnits = legacyUnits.filter(unit => unit.id <= 26).sort((a, b) => (unitTotals[b.id] || 0) - (unitTotals[a.id] || 0));
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
    renderUnitChapterLedger();

    $("#yearLedger").innerHTML = years.slice().reverse().map((year, index) => {
      const info = official[year];
      return `<details ${index === 0 ? "open" : ""}><summary><strong>${year}</strong><span>${info.curriculum}｜${info.mc} 題選擇＋${info.cr} 題非選｜80 分鐘</span><b>展開逐題編碼 ＋</b></summary><div class="ledger-body"><div class="ledger-ability"><span>概念 ${info.abilities.concept}</span><span>公式運算 ${info.abilities.procedure}</span><span>應用 ${info.abilities.application}</span><span>分析 ${info.abilities.analysis}</span></div><div class="ledger-questions">${primary[year].map((unitId, i) => {
        const isCr = i >= info.mc;
        const number = isCr ? `非${i - info.mc + 1}` : i + 1;
        return `<article class="ledger-item ${isCr ? "cr" : ""}"><b>${number}</b><span>${esc(legacyUnits.find(unit => unit.id === unitId)?.title || `舊單元 ${unitId}`)}<small>${esc(capAnalysis.domainByUnit[unitId])}</small></span></article>`;
      }).join("")}</div><div class="cr-topic-list">${info.crTopics.map((topic, i) => `<p><strong>非選 ${i + 1}</strong>｜${esc(topic)}</p>`).join("")}</div></div></details>`;
    }).join("");

    const bp = window.MATH_MOCK_BLUEPRINT_V2;
    const domainText = Object.entries(bp.domainCounts).map(([name, count]) => `${name} ${count}`).join("、");
    $("#blueprintChecks").innerHTML = [
      ["✓ 練習卷結構", `${bp.questionCount} 題四選一，${bp.minutes} 分鐘，不含非選擇題`],
      ["✓ 十年資料校準", "單元權重由 106–115 年官方題本主概念編碼換算"],
      ["✓ 六大主題題數", domainText],
      ["✓ 難度配置", "依種子與強度固定分配基礎、標準、進階與素養題"],
      ["✓ 跨年級", "每份模考至少涵蓋國一、國二與國三單元"],
      ["✓ 可重現", "相同引擎、內容版本、藍圖與種子會選出相同題目"]
    ].map(([title, detail]) => `<div class="blueprint-check"><strong>${title}</strong><span>${esc(detail)}</span></div>`).join("");
  }

  function renderTipAudits() {
    const q = state.tipSearch.trim().toLowerCase();
    const list = tipAudits.filter(item => (state.tipVerdict === "all" || item.verdict === state.tipVerdict) && (!q || [item.tip, item.condition, item.why, item.source, legacyUnits[item.unitId - 1]?.title].join(" ").toLowerCase().includes(q)));
    const verdictClass = verdict => verdict === "通過" ? "pass" : verdict === "有條件" ? "conditional" : "reject";
    $("#tipAuditBody").innerHTML = list.length ? list.map(item => `
      <tr><td>${mathText(item.tip)}<span class="audit-unit">${esc(legacyUnits[item.unitId - 1]?.title || "跨單元")}｜${esc(item.source)}</span></td><td><span class="verdict ${verdictClass(item.verdict)}">${esc(item.verdict)}</span></td><td>${mathText(item.condition)}</td><td>${mathText(item.why)}</td></tr>`).join("") : `<tr><td class="audit-empty" colspan="4">找不到符合條件的技巧。</td></tr>`;
    $("#auditCount").textContent = state.tipVerdict === "all" && !q ? tipAudits.length : `${list.length}/${tipAudits.length}`;
  }

  function gradeName(grade) { return grade === 7 ? "一" : grade === 8 ? "二" : "三"; }

  function capItemsForUnits(unitIds) {
    const scope = new Set(unitIds);
    return Object.keys(capAnalysis.primaryUnits).map(Number).sort((a, b) => b - a).flatMap(year => {
      const info = capAnalysis.officialByYear[year];
      return capAnalysis.primaryUnits[year].map((unitId, index) => {
        if (!scope.has(unitId)) return null;
        const isCr = index >= info.mc;
        return {
          year,
          unitId,
          type: isCr ? "非選" : "選擇",
          label: isCr ? `${year}-非${index - info.mc + 1}` : `${year}-${index + 1}`,
          unitTitle: legacyUnits.find(unit => unit.id === unitId)?.title || `單元 ${unitId}`
        };
      }).filter(Boolean);
    });
  }

  function capSummary(item, compact = false) {
    const items = capItemsForUnits(item.capUnitIds || item.unitIds);
    const mc = items.filter(x => x.type === "選擇").length;
    const cr = items.length - mc;
    const preview = items.slice(0, compact ? 6 : 10).map(x => `<span>${esc(x.label)}</span>`).join("");
    return `<div class="quiz-cap-tags"><strong>會考標註 ${items.length} 題</strong><small>選擇 ${mc}｜非選 ${cr}｜106–115 主概念回查</small><div class="quiz-cap-preview">${preview || "<span>近十年未列為主概念；仍依課綱出題</span>"}</div></div>`;
  }

  function quizCard(item) {
    const scopeUnits = item.unitIds.map(id => units.find(unit => unit.id === id)?.title).filter(Boolean);
    const isChapter = item.scope === "chapter";
    return `<article class="quiz-card ${item.term === "總複習" ? "total" : ""} ${isChapter ? "chapter" : ""}">
      <div class="quiz-card-top"><span>${esc(isChapter ? `${item.book} ${item.chapter}` : item.term)}</span><small>${item.questionCount || 12} 題｜${item.minutes || 25} 分鐘</small></div>
      <h3>${esc(item.title)}</h3>
      <p>${isChapter ? "每項必修技能各抽 1 題；交卷後顯示完整詳解、步驟與常見錯誤。" : "四選一、即時計分、逐題詳解；題目只從此範圍生成。"}</p>
      <div class="quiz-unit-list">${scopeUnits.map(title => `<span>${esc(title)}</span>`).join("")}</div>
      ${capSummary(item, true)}
      <small class="quiz-official-code">課綱編碼：${esc(item.officialCodes)}</small>
      <div class="quiz-start-row">
        <label class="quiz-seed-label">種子碼<input type="number" min="1" max="999999" placeholder="隨機" data-quiz-seed="${item.id}" value="${localStorage.getItem("capMath.human.r1.lastQuizSeed") || ""}"></label>
        <button class="primary" data-start-quiz="${item.id}">開始作答 →</button>
      </div>
    </article>`;
  }

  function quizTrack(title, subtitle, items, grade, key) {
    return `<details class="quiz-track" name="quiz-grade-${grade}" id="quiz-g${grade}-${key}">
      <summary><span>${esc(title)}</span><small>${esc(subtitle)}</small><b>點開 →</b></summary>
      <div class="quiz-track-body">
        <div class="quiz-card-grid ${key === "review" ? "review-grid" : "chapter-grid"}">${items.map(quizCard).join("")}</div>
      </div>
    </details>`;
  }

  function renderQuizCatalog() {
    const catalog = window.EXAM_ENGINE.quizCatalog;
    $("#quizCatalog").innerHTML = [7, 8, 9].map(grade => {
      const chapters = catalog.filter(item => item.grade === grade && item.scope === "chapter");
      const upper = chapters.filter(item => item.term === "上學期");
      const lower = chapters.filter(item => item.term === "下學期");
      return `<section class="quiz-grade-section">
        <div class="quiz-grade-heading"><h2>國${gradeName(grade)}</h2><span>${chapters.length} 份 Human Runtime 單元小考</span></div>
        <div class="quiz-track-grid">
          ${upper.length ? quizTrack("上學期", `${upper.length} 個課綱單元小考`, upper, grade, "upper") : ""}
          ${lower.length ? quizTrack("下學期", `${lower.length} 個課綱單元小考`, lower, grade, "lower") : ""}
        </div>
      </section>`;
    }).join("");
    $$("[data-start-quiz]", $("#quizCatalog")).forEach(button => button.addEventListener("click", () => {
      const quizId = button.dataset.startQuiz;
      const seedInput = $(`[data-quiz-seed="${quizId}"]`);
      if (seedInput) $("#quizSeedInput").value = seedInput.value;
      beginQuiz(quizId, seedInput?.value ? Number(seedInput.value) : null);
      setView("exam");
    }));
  }

  function renderUnitChapterLedger() {
    const chapters = window.EXAM_ENGINE.quizCatalog.filter(item => item.scope === "chapter");
    const books = [...new Set(chapters.map(item => item.book))];
    $("#unitChapterLedger").innerHTML = books.map(book => {
      const items = chapters.filter(item => item.book === book);
      const count = items.reduce((sum, item) => sum + capItemsForUnits(item.capUnitIds || item.unitIds).length, 0);
      return `<details class="unit-book-ledger" open><summary><strong>${esc(book)}</strong><span>${items.length} 個教育部單元｜會考主概念標註 ${count} 題</span><b>展開／收合</b></summary>
        <div class="unit-chapter-list">${items.map(item => {
          const capItems = capItemsForUnits(item.capUnitIds || item.unitIds);
          const unitNames = item.unitIds.map(id => units.find(unit => unit.id === id)?.title).filter(Boolean).join("、");
          return `<article class="unit-chapter-item">
            <div><strong>${esc(item.chapter)}｜${esc(item.title.replace(/^國[一二三][上下]第[一二三四五六]單元：/, ""))}</strong><small>${esc(unitNames)}｜${esc(item.officialCodes)}</small></div>
            <span>會考 ${capItems.length} 題</span>
            <div class="unit-cap-list">${capItems.map(cap => `<i title="${esc(cap.unitTitle)}">${esc(cap.label)}</i>`).join("") || "<i>近十年未列為主概念；仍依課綱出題</i>"}</div>
            <a href="?quiz=${item.id}">進入本單元小考 →</a>
          </article>`;
        }).join("")}</div>
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
      const { wrongTotal, uncorrected } = correctionStats(record);
      const dateLine = `${esc(date)}｜${record.answered}/${record.total} 已作答${durationText}`;
      return `<article class="paper-history-card">
        <div>${PAPER_HISTORY_UI.renderHistoryCardInfo({ title: esc(record.title), dateLine })}</div>
        ${PAPER_HISTORY_UI.renderScoreMath({ correct: record.correct, mcCount: record.mcCount, wrongTotal, uncorrected })}
        <div class="missed-units">${missed || "<span>沒有選擇題錯題</span>"}</div>
        <div class="paper-history-actions">
          <button type="button" class="secondary" data-review-paper="${esc(record.id)}">查看詳解</button>
          ${wrongTotal ? `<button type="button" class="secondary" data-review-wrong="${esc(record.id)}">錯題統整</button>` : ""}
        </div>
      </article>`;
    }).join("") : `<div class="paper-history-empty"><h2>目前還沒有考過的卷子。</h2><p>完成任一小考或模擬考後，這裡會自動保存紀錄。</p><button class="primary" data-view="quiz">去做小考</button></div>`;
    if (!$("#paperHistoryList").dataset.bound) {
      $("#paperHistoryList").dataset.bound = "1";
      $("#paperHistoryList").addEventListener("click", event => {
        const reviewPaper = event.target.closest("[data-review-paper]");
        if (reviewPaper) return reviewSavedPaper(reviewPaper.dataset.reviewPaper, "full");
        const reviewWrong = event.target.closest("[data-review-wrong]");
        if (reviewWrong) return reviewWrongPaper(reviewWrong.dataset.reviewWrong);
        const viewButton = event.target.closest("[data-view]");
        if (viewButton) return setView(viewButton.dataset.view);
      });
    }
  }

  function reviewSavedPaper(recordId, mode = "full") {
    const record = getPaperRecord(recordId);
    if (!record) return toast("找不到這份考卷紀錄");
    state.paperReview = { recordId, mode, drill: null };
    try { state.exam = window.MATH_V2_STORAGE?.restorePaper?.(record) || record.exam; }
    catch { return toast("這份考卷紀錄已損壞，其他考卷不受影響"); }
    state.answers = record.answers;
    state.submitted = true;
    state.totalSeconds = record.totalSeconds ?? (record.exam.minutes || 80) * 60;
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

  function reviewWrongPaper(recordId) {
    reviewSavedPaper(recordId, "wrong-only");
  }

  function configureExamHeader() {
    const isQuiz = state.exam?.kind === "quiz";
    const isArchive = state.exam?.kind === "archive";
    $("#examEyebrow").textContent = PAPER_HISTORY_UI.examKindEyebrow(state.exam?.kind || "mock");
    $("#examTitle").textContent = isQuiz || isArchive ? state.exam.title : "會考數學模擬考";
    $("#examDescription").textContent = isQuiz
      ? `${state.exam.questions.length} 題四選一，共 ${state.exam.minutes || 25} 分鐘。官方課綱編碼：${state.exam.officialCodes}。`
      : isArchive
      ? `依 ${state.exam.year} 年官方公布題本製作的可作答電子試卷；計時結束後仍可繼續作答。`
      : "練習用 25 題選擇＋2 題非選擇，共 80 分鐘。依人工作者正式藍圖抽樣。";
    $("#examSetup").classList.toggle("hidden", isQuiz || isArchive);
    $("#quizExamSetup").classList.toggle("hidden", !isQuiz && !isArchive);
    if (isArchive) { $("#backToListButton").textContent = "返回歷屆十年"; $("#backToListButton").dataset.view = "archive"; }
    else { $("#backToListButton").textContent = "返回小考題庫"; $("#backToListButton").dataset.view = "quiz"; }
  }

  function launchAssessment(assessment) {
    assessment = assessment; // Human Runtime preserves required figures.
    state.paperReview = { recordId: null, mode: null, drill: null };
    state.exam = assessment;
    state.answers = assessment.questions.map(question => question.type === "mc" ? null : "");
    state.submitted = false;
    state.totalSeconds = (assessment.minutes || 80) * 60;
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
    const level = Number($("#levelSelect").value) || 2;
    try {
      toast("正在依固定藍圖載入本卷需要的單元……");
      const assessment = await window.EXAM_ENGINE.generate(seed, level);
      assessment.kind = "mock";
      assessment.title = "國中教育會考數學科模擬題本";
      assessment.minutes = 80;
      launchAssessment(assessment);
      localStorage.setItem("capMath.human.r1.lastSeed", seed);
    } catch (error) {
      toast(error.message || "模擬考載入失敗");
    }
  }

  async function beginQuiz(quizId, seedOverride) {
    const raw = seedOverride ?? $("#quizSeedInput")?.value;
    const seed = raw !== "" && raw != null ? Math.max(1, Math.min(999999, Number(raw) || 0)) : null;
    try {
      toast("正在載入本單元題庫……");
      const assessment = seed ? await window.EXAM_ENGINE.generateQuiz(quizId, seed) : await uniqueQuizAssessment(quizId);
      if (seed) localStorage.setItem("capMath.human.r1.lastQuizSeed", String(seed));
      launchAssessment(assessment);
    } catch (error) {
      toast(error.message || "小考載入失敗");
    }
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
    const reviewRecord = state.paperReview.recordId ? getPaperRecord(state.paperReview.recordId) : null;
    const reviewMode = state.paperReview.mode;
    const wrongOnly = reviewMode === "wrong-only";
    const visibleIndexes = wrongOnly && reviewRecord
      ? mcWrongIndexes(reviewRecord)
      : state.exam.questions.map((_, index) => index);
    const difficultyLabel = ["", "基礎", "核心", "進階", "整合", "高鑑別"];
    const abilityLabel = { concept: "概念理解", procedure: "公式運算", application: "解題應用", analysis: "分析思考" };
    const formulaSummary = wrongOnly && reviewRecord ? [...new Set(visibleIndexes.map(index => state.exam.questions[index].formula).filter(Boolean))] : [];
    const renderQuestionChoices = (q, index) => q.type === "mc" ? `<div class="choices">${q.choices.map((choice, ci) => {
      const attrs = EXAM_CHOICE_UI.choiceAttrs({ submitted: state.submitted, selected: state.answers[index] === ci, isAnswer: ci === q.answer });
      return EXAM_CHOICE_UI.choiceButton({ letter: letters[ci], textHtml: mathText(choice), attrs, dataAttr: `data-choice="${index}:${ci}"`, disabled: state.submitted });
    }).join("")}</div>` : `<div class="constructed"><textarea data-cr="${index}" placeholder="請寫下完整解題過程與結論……" ${state.submitted ? "disabled" : ""}>${esc(state.answers[index])}</textarea><p class="writing-guide">建議包含：設未知數／列關係或性質／推導計算／含單位的結論</p></div>`;
    const renderSingleQuestion = (index, displayIndex) => {
      const q = state.exam.questions[index];
      const unit = units.find(item => item.id === q.unitId) || { grade: 7, title: "數學" };
      const choices = renderQuestionChoices(q, index);
      const passage = q.passageId && (displayIndex === 0 || state.exam.questions[visibleIndexes[displayIndex - 1]].passageId !== q.passageId) ? `<aside class="reading-passage"><p class="eyebrow">閱讀選文｜回答第 ${displayIndex + 1}～${displayIndex + visibleIndexes.filter(itemIndex => state.exam.questions[itemIndex].passageId === q.passageId).length} 題</p><h3>${esc(q.passageTitle || "自行車訓練器的速率估計")}</h3><p>${mathText(q.passage)}</p></aside>` : "";
      const showDrill = state.submitted && reviewRecord && (wrongOnly || reviewMode === "full") && q.type === "mc";
      const drillAction = showDrill ? `<div class="question-actions"><button type="button" class="secondary compact" data-start-drill="${index}">${reviewRecord.corrections?.[index]?.passed ? "再練同題型" : "訂正觀念"}</button></div>` : "";
      return `${passage}<article class="question ${q.type === "cr" ? "constructed-question" : ""}" id="question-${index + 1}" data-question="${index}">
        <div class="question-head"><span class="question-number">${displayIndex + 1}</span><div class="question-tags"><span class="question-tag grade">國${unit.grade === 7 ? "一" : unit.grade === 8 ? "二" : "三"}</span><span class="question-tag">${esc(unit.title)}</span>${q.taxonomyTopic ? `<span class="question-tag taxonomy">${esc(q.taxonomyTopic)}</span>` : ""}${q.quizLevel ? `<span class="question-tag level">${esc(q.quizLevel)}</span>` : ""}<span class="question-tag ability">${abilityLabel[q.ability] || "整合"}</span></div><span class="difficulty" aria-label="${difficultyLabel[q.difficulty]}">${"★".repeat(q.difficulty)}${"☆".repeat(5-q.difficulty)}</span>${correctionBadgeHtml(reviewRecord, index)}</div>
        <div class="question-text">${nl(q.text)}</div>${questionFigureHtml(q)}${choices}${state.submitted ? solutionHtml(q, index) : ""}${drillAction}${drillHtml(index)}
      </article>`;
    };
    const qHtml = visibleIndexes.map((index, pos) => renderSingleQuestion(index, pos)).join("");
    const constructedStart = qHtml.indexOf('<article class="question constructed-question');
    const hasConstructed = constructedStart >= 0;
    const isQuiz = state.exam.kind === "quiz";
    const isArchive = state.exam.kind === "archive";
    const isMock = !isQuiz && !isArchive;
    const mcCount = state.exam.questions.filter(question => question.type === "mc").length;
    const crCount = state.exam.questions.length - mcCount;
    const scopeTitles = isQuiz ? state.exam.unitIds.map(id => units.find(unit => unit.id === id)?.title).filter(Boolean).join("、") : "";
    const reviewBanner = wrongOnly ? `<div class="paper-review-banner"><strong>錯題統整</strong><span>只顯示當次答錯的 ${visibleIndexes.length} 題選擇題</span></div>` : "";
    const formulaBanner = formulaSummary.length ? `<div class="paper-formula-banner"><strong>本卷錯題涉及公式</strong><div>${formulaSummary.map(formula => mathBlock(formula)).join("")}</div></div>` : "";
    const cover = isQuiz ? `
      <header class="paper-cover"><div><p class="eyebrow">教育部年級範圍</p><h2>${esc(state.exam.title)}</h2><p>${state.exam.questions.length} 題四選一｜${state.exam.minutes || 25} 分鐘｜固定題型順序｜種子碼 ${state.exam.seed}</p>${state.exam.seed ? `<button type="button" class="secondary compact quiz-seed-copy" id="copyQuizLink">複製連結 ?quiz=${esc(state.exam.quizId)}&amp;seed=${state.exam.seed}</button>` : ""}</div><div class="paper-stamp">國${state.exam.grade === 7 ? "一" : state.exam.grade === 8 ? "二" : "三"}<br>${esc(state.exam.term)}</div></header>
      <div class="paper-instructions"><div><strong>${state.exam.questions.length}</strong><span>四選一｜即時計分</span></div><div><strong>${state.exam.unitIds.length}</strong><span>範圍單元｜無超綱單元</span></div><div><strong>${state.exam.minutes || 25} min</strong><span>依單元需要安排進階</span></div></div>
      <div class="quiz-paper-scope"><strong>本卷範圍</strong><span>${esc(scopeTitles)}</span><small>${esc(state.exam.officialCodes)}</small></div>` : isArchive ? `
      <header class="paper-cover"><div><p class="eyebrow">官方題本重現</p><h2>${state.exam.year} 年國中教育會考數學科題本</h2><p>${mcCount} 題選擇＋${crCount} 題非選｜依官方公布題目製作為可作答電子試卷｜計時結束仍可繼續作答</p></div><div class="paper-stamp">${state.exam.year}<br>官方題本</div></header>
      <div class="paper-instructions"><div><strong>${mcCount}</strong><span>四選一｜官方原題</span></div><div><strong>${crCount}</strong><span>非選擇題｜策略與表達計分</span></div><div><strong>${state.exam.minutes || 80} min</strong><span>時間到可繼續作答</span></div></div>
      ${state.exam.omittedNote ? `<div class="quiz-paper-scope"><strong>收錄說明</strong><span>${esc(state.exam.omittedNote)}</span></div>` : ""}` : `
      <header class="paper-cover"><div><p class="eyebrow">題型池抽樣 · 十年分布校準</p><h2>國中教育會考數學科模擬題本</h2><p>練習用 25 題選擇＋2 題非選｜80 分鐘｜人工作者正式藍圖</p></div><div class="paper-stamp">25＋2<br>正式</div></header>
      <div class="paper-instructions"><div><strong>25</strong><span>四選一｜Human Runtime</span></div><div><strong>2</strong><span>非選｜策略與表達</span></div><div><strong>80</strong><span>分鐘｜可超時繼續作答</span></div></div>`;
    const choiceHtml = hasConstructed ? qHtml.slice(0, constructedStart) : qHtml;
    const constructedHtml = hasConstructed ? `<div class="paper-section-title"><h3>第二部分：非選擇題</h3><span>策略適切＋推導完整＋結論清楚</span></div>${qHtml.slice(constructedStart)}` : "";
    const sectionTitle = isMock && !hasConstructed ? "" : `<div class="paper-section-title"><h3>${hasConstructed ? "第一部分：選擇題" : "試題"}</h3><span>每題只有一個正確或最佳答案</span></div>`;
    const textOnlyPauseNotice = window.TEXT_ONLY_POLICY?.pauseNotice?.(state.exam) || "";

    $("#paper").innerHTML = `
      ${cover}
      ${textOnlyPauseNotice}
      ${reviewBanner}
      ${formulaBanner}
      ${sectionTitle}
      ${choiceHtml}${constructedHtml}`;
    $("#questionTotal").textContent = wrongOnly ? visibleIndexes.length : state.exam.questions.length;
    if (state.submitted) $("#paper").classList.add("submitted");
    bindExamInputs();
    $("#copyQuizLink")?.addEventListener("click", () => {
      const url = `${location.origin}${location.pathname}?quiz=${state.exam.quizId}&seed=${state.exam.seed}`;
      navigator.clipboard?.writeText(url).then(() => toast("已複製小考連結")).catch(() => toast(url));
    });
    renderQuestionGrid();
    updateAnswered();
  }

  function solutionHtml(q, index) {
    if (q.type === "mc") {
      return `<div class="solution"><h4>正確答案：${letters[q.answer]}｜${mathText(q.choices[q.answer])}</h4><ol class="solution-steps">${(q.steps || []).map(s => `<li>${mathText(s)}</li>`).join("")}</ol>${solutionNotes(q)}</div>`;
    }
    const rubricRows = Array.isArray(q.rubric) ? q.rubric : [["評分要點", q.rubric]];
    return `<div class="solution"><h4>參考結論：${mathText(q.answer)}</h4><ol class="solution-steps">${(q.steps || []).map(s => `<li>${mathText(s)}</li>`).join("")}</ol>${solutionNotes(q)}<table class="rubric">${rubricRows.map(row => `<tr><th>${esc(row[0])}</th><td>${mathText(row[1])}</td></tr>`).join("")}</table></div>`;
  }
  function solutionNotes(q) {
    return `<div class="solution-grid"><div class="solution-note explanation-note"><strong>完整詳解</strong><p>${mathText(q.explanation || q.concept)}</p></div><div class="solution-note"><strong>本題觀念</strong><p>${mathText(q.concept)}</p></div>${q.formula ? `<div class="solution-note formula-note"><strong>可用公式</strong><div>${mathBlock(q.formula)}</div></div>` : ""}${questionSymbolHtml(q)}<div class="solution-note tip"><strong>檢查重點</strong><p>${mathText(q.tip)}</p></div><div class="solution-note trap"><strong>易錯警報</strong><p>${mathText(q.trap)}</p></div></div>`;
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
    $$("[data-start-drill]", $("#paper")).forEach(button => button.addEventListener("click", () => startTopicDrill(Number(button.dataset.startDrill))));
    $$("[data-drill-choice]", $("#paper")).forEach(button => button.addEventListener("click", () => {
      const drill = state.paperReview.drill;
      if (!drill || drill.submitted) return;
      const [subIndex, choiceIndex] = button.dataset.drillChoice.split(":").map(Number);
      drill.subAnswers[subIndex] = choiceIndex;
      renderExam();
    }));
    $$("[data-drill-submit]", $("#paper")).forEach(button => button.addEventListener("click", submitTopicDrillAnswers));
    $$("[data-drill-retry]", $("#paper")).forEach(button => button.addEventListener("click", () => startTopicDrill(state.paperReview.drill.qIndex)));
    $$("[data-drill-close]", $("#paper")).forEach(button => button.addEventListener("click", () => { state.paperReview.drill = null; renderExam(); }));
    $$("[data-drill-cancel]", $("#paper")).forEach(button => button.addEventListener("click", () => { state.paperReview.drill = null; renderExam(); }));
    $$(".question", $("#paper")).forEach(article => {
      const observer = new IntersectionObserver(entries => { if (entries[0].isIntersecting) { state.currentQuestion = Number(article.dataset.question); renderQuestionGrid(); } }, { rootMargin: "-25% 0px -60%" });
      observer.observe(article);
    });
  }

  function renderQuestionGrid() {
    if (!state.exam) return;
    const wrongOnly = state.paperReview.mode === "wrong-only" && state.paperReview.recordId;
    const visibleIndexes = wrongOnly ? mcWrongIndexes(getPaperRecord(state.paperReview.recordId) || { exam: state.exam, answers: state.answers }) : state.exam.questions.map((_, index) => index);
    $("#questionGrid").innerHTML = visibleIndexes.map((index, displayIndex) => {
      const q = state.exam.questions[index];
      const answered = q.type === "mc" ? state.answers[index] !== null : Boolean(state.answers[index].trim());
      return `<button class="${answered ? "answered" : ""} ${state.currentQuestion === index ? "current" : ""}" data-jump="${index}" aria-label="第 ${displayIndex + 1} 題${answered ? "，已作答" : ""}">${displayIndex + 1}</button>`;
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
    $("#answerProgress").style.width = `${count / state.exam.questions.length * 100}%`;
  }

  function submitExam() {
    if (!state.exam || state.submitted) return;
    state.submitted = true;
    clearInterval(state.timerId);
    const mcIndexes = state.exam.questions.map((question, index) => question.type === "mc" ? index : null).filter(index => index !== null);
    const correct = mcIndexes.filter(index => state.answers[index] === state.exam.questions[index].answer).length;
    const missed = [...new Set(mcIndexes.map(index => state.answers[index] === state.exam.questions[index].answer ? null : units.find(unit => unit.id === state.exam.questions[index].unitId)?.title).filter(Boolean))];
    const answered = state.exam.questions.filter((q, i) => q.type === "mc" ? state.answers[i] !== null : Boolean(state.answers[i].trim())).length;
    const mcCount = mcIndexes.length;
    const scoreRate = mcCount ? correct / mcCount : 0;
    const isQuiz = state.exam.kind === "quiz";
    const isArchive = state.exam.kind === "archive";
    const elapsedSeconds = state.totalSeconds - state.seconds;
    const overtimeSeconds = Math.max(0, -state.seconds);
    savePaperRecord({
      id: `${state.exam.id}-${Date.now()}`,
      kind: isQuiz ? "quiz" : isArchive ? "archive" : "mock",
      title: state.exam.title || (isQuiz ? "小考" : "模擬考"),
      finishedAt: new Date().toISOString(),
      correct, mcCount, answered, total: state.exam.questions.length,
      missedUnits: missed,
      elapsedSeconds, overtimeSeconds, totalSeconds: state.totalSeconds,
      exam: state.exam,
      answers: state.answers,
      corrections: {},
      ...(window.MATH_V2_STORAGE?.paperMetadata?.(state.exam) || {})
    });
    renderExam();
    updateTimer();
    const resultNote = isQuiz ? `本小考只計入「${esc(state.exam.title)}」的官方範圍，原始答對數不等同學校定期評量成績。`
      : isArchive ? `本卷依 ${state.exam.year} 年官方公布題本重製，供練習使用；正式成績、等級與官方原始題本以會考官方網站為準。`
      : "本結果是練習用原始答對數，不等同官方等級。";
    $("#resultPanel").innerHTML = `<div class="result-summary"><div class="result-score"><span><strong>${correct}</strong><br><small>/ ${mcCount} 選擇題</small></span></div><div class="result-copy"><p class="eyebrow">RESULT</p><h2>${scoreRate >= .88 ? "很穩，這個範圍已有成熟掌握。" : scoreRate >= .7 ? "底子不錯，把錯題對應單元立刻回補。" : scoreRate >= .5 ? "先抓本卷錯題觀念，分數會升得最快。" : "別急著刷下一卷，先回講義補地基。"}</h2><p class="elapsed-note">作答時間 ${formatDuration(elapsedSeconds)}${overtimeSeconds > 0 ? `（含超時 ${formatDuration(overtimeSeconds)}）` : ""}</p><p>${resultNote}</p><div class="missed-units">${missed.slice(0, 10).map(x => `<span>${esc(x)}</span>`).join("")}${missed.length > 10 ? `<span>另 ${missed.length - 10} 單元</span>` : ""}</div></div><button class="primary" id="reviewFirst">從第一題看詳解</button></div>`;
    $("#resultPanel").classList.remove("hidden");
    $("#reviewFirst").addEventListener("click", () => $("#question-1").scrollIntoView({ behavior: "smooth", block: "start" }));
    $("#resultPanel").scrollIntoView({ behavior: "smooth", block: "center" });
    toast(`已交卷：作答 ${answered}/${state.exam.questions.length}，選擇題答對 ${correct}/${mcCount}`);
  }

  function bindStaticEvents() {
    $$('[data-view]').forEach(button => button.addEventListener("click", event => { event.preventDefault(); setView(button.dataset.view); }));
    $("#menuButton").addEventListener("click", () => document.body.classList.toggle("menu-open"));
    $("#themeButton").addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const dark = document.body.classList.contains("dark");
      localStorage.setItem("capMath.human.r1.dark", dark ? "1" : "0");
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
    const lastSeed = localStorage.getItem("capMath.human.r1.lastSeed");
    const params = new URLSearchParams(window.location.search);
    const requestedUnit = Number(params.get("unit"));
    if (Number.isInteger(requestedUnit) && units.some(unit => unit.id === requestedUnit)) state.selectedUnit = requestedUnit;
    if (lastSeed) $("#seedInput").value = lastSeed;
    if (localStorage.getItem("capMath.human.r1.dark") === "1") { document.body.classList.add("dark"); $("#themeButton").textContent = "日"; }
    bindStaticEvents();
    $("#seedInput")?.setAttribute("aria-label", "卷別種子");
    $("#levelSelect")?.setAttribute("aria-label", "數值強度");
    window.__HUMAN_PAPER_REVIEW__ = { reviewWrongPaper, reviewSavedPaper };
    updateLearningProgress();
    const requestedView = params.get("view");
    const requestedQuiz = params.get("quiz");
    const requestedSeed = params.get("seed");
    if (requestedSeed) {
      $("#quizSeedInput").value = requestedSeed;
      localStorage.setItem("capMath.human.r1.lastQuizSeed", requestedSeed);
    }
    if (requestedQuiz && window.EXAM_ENGINE.quizCatalog.some(item => item.id === requestedQuiz)) {
      beginQuiz(requestedQuiz, requestedSeed ? Number(requestedSeed) : null);
    } else if (requestedView && viewNames[requestedView]) setView(requestedView);
  }
  init();
window.__HUMAN_PRODUCTION_APP_READY__ = true;
})();
