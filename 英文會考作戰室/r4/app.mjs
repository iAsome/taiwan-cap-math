const $ = (selector, root = document) => root.querySelector(selector);
const main = $("#main");
const runtimeStatus = $("#runtimeStatus");
const pageTitle = $("#pageTitle");
const toast = $("#toast");
const STORAGE_KEY = "cap8.r4.english.progress";
const MIGRATION_KEY = "cap8.r4.english.migration.v1";
const LEGACY_KEYS = ["capEnglish.completed", "capEnglish.paperHistory", "capEnglish.lastSeed", "capEnglish.lastQuizSeed", "capEnglish.dark"];
const state = { catalog: null, cache: new Map(), progress: loadProgress(), timer: null };

function h(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function loadProgress() {
  try {
    return { completedLectures: [], attempts: [], ...(JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")) };
  } catch {
    return { completedLectures: [], attempts: [] };
  }
}

function saveProgress() {
  state.progress.attempts = state.progress.attempts.slice(-100);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function migrateLegacyStorage() {
  if (localStorage.getItem(MIGRATION_KEY)) return;
  const raw = Object.fromEntries(LEGACY_KEYS.map((key) => [key, localStorage.getItem(key)]).filter(([, value]) => value !== null));
  const completed = (() => { try { return JSON.parse(raw["capEnglish.completed"] || "[]"); } catch { return []; } })();
  state.progress.legacy = { backedUpAt: new Date().toISOString(), raw, completedUnitIds: Array.isArray(completed) ? completed : [] };
  saveProgress();
  localStorage.setItem(MIGRATION_KEY, JSON.stringify({ version: 1, backedUpKeys: Object.keys(raw) }));
}

function notify(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(notify.timer);
  notify.timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function hashNumber(value) {
  let hash = 2166136261;
  for (const char of String(value)) hash = Math.imul(hash ^ char.charCodeAt(0), 16777619);
  return hash >>> 0;
}

function random(seed) {
  let value = hashNumber(seed);
  return () => {
    value += 0x6d2b79f5;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

function selectStatic(values, count, seed) {
  const result = [...values];
  const next = random(seed);
  for (let index = result.length - 1; index > 0; index -= 1) {
    const other = Math.floor(next() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result.slice(0, Math.min(count, result.length));
}

async function fetchJson(url) {
  if (!state.cache.has(url)) state.cache.set(url, fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
    return response.json();
  }));
  return state.cache.get(url);
}

function heading(kicker, title, description, tools = "") {
  return `<div class="page-head"><div><p class="eyebrow">${h(kicker)}</p><h1>${h(title)}</h1><p class="lead">${h(description)}</p></div>${tools}</div>`;
}

function metric(value, label) {
  return `<div class="metric"><strong>${h(value)}</strong><span>${h(label)}</span></div>`;
}

function route() {
  const raw = location.hash.slice(1) || "home";
  const params = new URLSearchParams(raw.includes("=") ? raw : `view=${raw}`);
  return { view: params.get("view") || "home", params };
}

function navigate(view, params = {}) {
  const query = new URLSearchParams({ view, ...params });
  location.hash = query.toString();
}

async function loadUnit(unitId) {
  const unit = state.catalog.units.find((value) => value.id === unitId);
  if (!unit) throw new Error(`找不到單元 ${unitId}`);
  return fetchJson(unit.bundle);
}

function completedPercent(unit) {
  const completed = new Set(state.progress.completedLectures);
  return Math.round(100 * unit.skills.filter((skill) => completed.has(skill.id)).length / unit.skills.length);
}

function renderHome() {
  const { counts } = state.catalog;
  main.innerHTML = `<section class="hero"><p class="eyebrow">TAIWAN CAP ENGLISH · R4</p><h1>從字母、句型到閱讀與聽力，建立完整的會考英文能力。</h1><p class="lead">正式題面依官方 Appendix 5 Table 1 基本 1,200 字校準；所有練習都從已審核的靜態題庫選取，同一種子可重現同一份考卷。</p><div class="hero-actions"><button class="button" data-go="courses">開始課程</button><button class="button secondary" data-go="mock">開始會考模擬</button></div><div class="metrics">${metric(counts.skills,"原子技能")}${metric(counts.skillQuestions,"技能題")}${metric(counts.readingPassages,"閱讀文章")}${metric(counts.listeningStimuli,"聽力題組")}</div></section>`;
}

function renderCourses() {
  main.innerHTML = `${heading("320 ATOMIC SKILLS", "完整課程", "每個技能都含零基礎講解、三個例題、四個真實迷思與靜態練習。")}
    <div class="grid">${state.catalog.units.map((unit) => `<button class="card unit-card" data-unit="${h(unit.id)}"><small>${h(unit.id.replace("ENG_R4_", ""))}</small><h2>${h(unit.title)}</h2><p>${unit.skills.length} 個技能 · ${unit.questionCount} 題</p><div class="bar" aria-label="完成 ${completedPercent(unit)}%"><i style="width:${completedPercent(unit)}%"></i></div></button>`).join("")}</div>`;
}

async function renderCourse(params) {
  const unitId = params.get("unit") || state.catalog.units[0].id;
  const bundle = await loadUnit(unitId);
  const skillId = params.get("skill") || bundle.skills[0].id;
  const lecture = bundle.lectures.find((value) => value.skillId === skillId);
  const unit = state.catalog.units.find((value) => value.id === unitId);
  main.innerHTML = `${heading(unit.id, unit.title, "選擇技能閱讀講義，完成後可直接進入該技能的十二題練習。", `<button class="button secondary" data-go="courses">返回課程</button>`)}
    <div class="toolbar"><label class="field">技能<select id="skillSelect">${bundle.skills.map((skill) => `<option value="${h(skill.id)}"${skill.id === skillId ? " selected" : ""}>${h(skill.title)}</option>`).join("")}</select></label><button class="button" id="skillPractice">練習這個技能</button><button class="button secondary" id="completeLecture">${state.progress.completedLectures.includes(skillId) ? "已完成" : "標記完成"}</button></div>
    <article class="panel lecture"><p class="eyebrow">${h(skillId)}</p><h1>${h(bundle.skills.find((value) => value.id === skillId).title)}</h1><h2>學習目標</h2><ul>${lecture.objectives.map((value) => `<li>${h(value)}</li>`).join("")}</ul>${lecture.sections.map((section) => `<section><h2>${h(section.title)}</h2><p>${h(section.content)}</p></section>`).join("")}<section><h2>例題解析</h2>${lecture.workedExamples.map((example) => `<div class="example"><h3>${h(example.prompt)}</h3><ol>${example.steps.map((step) => `<li>${h(step)}</li>`).join("")}</ol><p><strong>答案：</strong>${h(example.answer)}</p><p>${h(example.why)}</p></div>`).join("")}</section><section><h2>常見誤會</h2>${lecture.misconceptions.map((item) => `<div class="example mistake"><h3>${h(item.belief)}</h3><p>${h(item.whyWrong)}</p><p><strong>修正：</strong>${h(item.correction)}</p></div>`).join("")}</section></article>`;
  $("#skillSelect").addEventListener("change", (event) => navigate("course", { unit: unitId, skill: event.target.value }));
  $("#skillPractice").addEventListener("click", () => navigate("practice", { unit: unitId, skill: skillId }));
  $("#completeLecture").addEventListener("click", () => {
    state.progress.completedLectures = [...new Set([...state.progress.completedLectures, skillId])];
    saveProgress();
    notify("已保存學習進度");
    renderCourse(params);
  });
}

function questionHtml(question, number, name) {
  return `<fieldset class="question" data-question="${h(question.id)}"><legend>${number}. ${h(question.stem)}</legend><div class="choices">${question.options.map((option, index) => `<label class="choice"><input type="radio" name="${h(name)}" value="${index}"><span><b>${String.fromCharCode(65 + index)}.</b> ${h(option)}</span></label>`).join("")}</div><div class="rationale" hidden></div></fieldset>`;
}

function rationales(question) {
  if (question.optionRationales) return question.optionRationales.sort((a, b) => a.optionIndex - b.optionIndex).map((value) => value.reason);
  return question.reasons || [];
}

function mountQuiz(questions, { kind, seed, stimulusHtml = "", onDone } = {}) {
  main.innerHTML += `<form id="quizForm">${stimulusHtml}${questions.map((question, index) => questionHtml(question, index + 1, `q${index}`)).join("")}<button class="button" type="submit">交卷並看詳解</button></form>`;
  $("#quizForm").addEventListener("submit", (event) => {
    event.preventDefault();
    let score = 0;
    questions.forEach((question, index) => {
      const fieldset = $(`[data-question="${question.id}"]`);
      const selected = Number(new FormData(event.currentTarget).get(`q${index}`));
      if (selected === question.answerIndex) score += 1;
      fieldset.querySelectorAll(".choice").forEach((choice, optionIndex) => choice.classList.add(optionIndex === question.answerIndex ? "correct" : optionIndex === selected ? "wrong" : ""));
      const detail = $(".rationale", fieldset);
      detail.hidden = false;
      detail.innerHTML = rationales(question).map((reason, optionIndex) => `<p><strong>${String.fromCharCode(65 + optionIndex)}：</strong>${h(reason)}</p>`).join("");
    });
    state.progress.attempts.push({ at: new Date().toISOString(), kind, seed, score, total: questions.length });
    saveProgress();
    event.currentTarget.querySelector("button[type=submit]").disabled = true;
    notify(`完成：${score} / ${questions.length}`);
    onDone?.({ score, total: questions.length });
  });
}

function practiceSetup(params) {
  const chosenUnit = params.get("unit") || state.catalog.units[0].id;
  const unit = state.catalog.units.find((value) => value.id === chosenUnit);
  const chosenSkill = params.get("skill") || unit.skills[0].id;
  main.innerHTML = `${heading("STATIC SKILL PRACTICE", "單元練習", "每個技能固定十二題；種子只改變已審核題目的順序。")}
    <div class="toolbar"><label class="field">單元<select id="unitSelect">${state.catalog.units.map((value) => `<option value="${h(value.id)}"${value.id === chosenUnit ? " selected" : ""}>${h(value.title)}</option>`).join("")}</select></label><label class="field">技能<select id="practiceSkill">${unit.skills.map((value) => `<option value="${h(value.id)}"${value.id === chosenSkill ? " selected" : ""}>${h(value.title)}</option>`).join("")}</select></label><label class="field">種子碼<input id="practiceSeed" type="number" min="1" value="${h(params.get("seed") || 115)}"></label><button class="button" id="startPractice">開始</button></div><div id="practiceArea" class="empty">選擇技能後開始。</div>`;
  $("#unitSelect").addEventListener("change", (event) => navigate("practice", { unit: event.target.value }));
  $("#startPractice").addEventListener("click", async () => {
    const seed = $("#practiceSeed").value;
    const skillId = $("#practiceSkill").value;
    const bundle = await loadUnit(chosenUnit);
    const questions = selectStatic(bundle.questions.filter((question) => question.skillIds.includes(skillId)), 12, `${seed}:${skillId}`);
    $("#practiceArea").remove();
    mountQuiz(questions, { kind: "skill", seed });
  });
}

function glossaryHtml(items = []) {
  if (!items.length) return "";
  return `<div class="glossary" aria-label="文章生字註解">${items.map((item) => `<span><b>${h(item.word ?? item[0])}</b> ${h(item.translation ?? item[1])}</span>`).join("")}</div>`;
}

async function renderReading(params) {
  const bank = await fetchJson(state.catalog.reading.bundle);
  const seed = params.get("seed") || "115";
  const item = selectStatic(bank, 1, `reading:${seed}`)[0];
  main.innerHTML = `${heading("READING", "閱讀題組", "文章標題在作答前不顯示；超出正式題面基準的必要字詞會在文章下方註解。", `<div class="toolbar"><label class="field">種子碼<input id="readingSeed" type="number" min="1" value="${h(seed)}"></label><button class="button" id="newReading">換一篇</button></div>`)}<article class="stimulus"><strong>Reading Passage</strong><p>${h(item.passage ?? item.content?.passage)}</p>${glossaryHtml(item.glossary ?? item.content?.glossary)}</article>`;
  mountQuiz(item.questions, { kind: "reading", seed });
  $("#newReading").addEventListener("click", () => navigate("reading", { seed: Number($("#readingSeed").value || 1) + 1 }));
}

async function renderListening(params) {
  const bank = await fetchJson(state.catalog.listening.bundle);
  const seed = params.get("seed") || "115";
  const item = selectStatic(bank, 1, `listening:${seed}`)[0];
  main.innerHTML = `${heading("LISTENING", "英語聽力", "依官方結構播放兩次；作答後才顯示文字稿。", `<div class="toolbar"><label class="field">種子碼<input id="listeningSeed" type="number" min="1" value="${h(seed)}"></label><button class="button" id="newListening">換一組</button></div>`)}<section class="audio-box"><strong>Listening Set</strong><audio id="listeningAudio" preload="metadata" src="${h(item.audioPath)}"></audio><button class="button" id="playListening">播放兩次</button><span id="playState" role="status">尚未播放</span><details id="transcript" hidden><summary>文字稿</summary><p>${h(item.transcript ?? item.script)}</p></details></section>`;
  mountQuiz(item.questions, { kind: "listening", seed, onDone: () => { $("#transcript").hidden = false; } });
  $("#newListening").addEventListener("click", () => navigate("listening", { seed: Number($("#listeningSeed").value || 1) + 1 }));
  $("#playListening").addEventListener("click", () => playTwice(item));
}

async function playTwice(item) {
  const audio = $("#listeningAudio");
  const button = $("#playListening");
  const status = $("#playState");
  button.disabled = true;
  for (let pass = 1; pass <= 2; pass += 1) {
    status.textContent = `第 ${pass} 次播放`;
    audio.currentTime = 0;
    await audio.play();
    await new Promise((resolve) => audio.addEventListener("ended", resolve, { once: true }));
    if (pass === 1) await new Promise((resolve) => setTimeout(resolve, Number(item.pauseMs ?? 3000)));
  }
  status.textContent = "已播放兩次";
}

async function renderMock(params) {
  const mode = params.get("mode") || "reading";
  const seed = params.get("seed") || "115";
  main.innerHTML = `${heading("OFFICIAL-FORM PRACTICE", "會考模擬", "閱讀 43 題／60 分鐘；聽力 21 題／25 分鐘。題目只從凍結的靜態 ID 選取。")}
    <div class="toolbar"><label class="field">科目<select id="mockMode"><option value="reading"${mode === "reading" ? " selected" : ""}>閱讀</option><option value="listening"${mode === "listening" ? " selected" : ""}>聽力</option></select></label><label class="field">種子碼<input id="mockSeed" type="number" min="1" value="${h(seed)}"></label><button class="button" id="startMock">開始模擬</button></div><div id="mockArea" class="empty">確認模式後開始計時。</div>`;
  $("#startMock").addEventListener("click", () => startMock($("#mockMode").value, $("#mockSeed").value));
}

async function startMock(mode, seed) {
  let questions = [];
  let stimulusHtml = "";
  let minutes = 25;
  if (mode === "reading") {
    minutes = 60;
    const units = selectStatic(state.catalog.units.filter((unit) => unit.languageComponent), 15, `mock-units:${seed}`);
    const bundles = await Promise.all(units.map((unit) => loadUnit(unit.id)));
    const singles = bundles.map((bundle, index) => selectStatic(bundle.questions, 1, `${seed}:single:${index}`)[0]);
    const reading = await fetchJson(state.catalog.reading.bundle);
    const passages = selectStatic(reading, 7, `mock-reading:${seed}`);
    questions = [...singles, ...passages.flatMap((item) => item.questions)];
    stimulusHtml = passages.map((item, index) => `<article class="stimulus"><strong>Passage ${index + 1}</strong><p>${h(item.passage ?? item.content?.passage)}</p>${glossaryHtml(item.glossary ?? item.content?.glossary)}</article>`).join("");
  } else {
    const listening = await fetchJson(state.catalog.listening.bundle);
    const picture = selectStatic(listening.filter((item) => item.section === "picture"), 1, `${seed}:picture`);
    const response = selectStatic(listening.filter((item) => item.section === "response"), 2, `${seed}:response`);
    const discourse = selectStatic(listening.filter((item) => item.section === "discourse"), 4, `${seed}:discourse`);
    const sets = [...picture, ...response, ...discourse];
    questions = sets.flatMap((item) => item.questions);
    stimulusHtml = sets.map((item, index) => `<section class="audio-box"><strong>Listening ${index + 1}</strong><audio controls preload="metadata" src="${h(item.audioPath)}"></audio></section>`).join("");
  }
  $("#mockArea").remove();
  main.innerHTML += `<aside class="panel"><span>剩餘時間</span><strong class="timer" id="timer">${minutes}:00</strong></aside>`;
  mountQuiz(questions, { kind: `mock-${mode}`, seed, stimulusHtml, onDone: stopTimer });
  startTimer(minutes);
}

function startTimer(minutes) {
  stopTimer();
  let remaining = minutes * 60;
  const draw = () => {
    const timer = $("#timer");
    if (timer) timer.textContent = `${Math.floor(remaining / 60)}:${String(remaining % 60).padStart(2, "0")}`;
    if (remaining <= 0) { stopTimer(); $("#quizForm")?.requestSubmit(); }
    remaining -= 1;
  };
  draw();
  state.timer = setInterval(draw, 1000);
}

function stopTimer() {
  clearInterval(state.timer);
  state.timer = null;
}

function renderProgress() {
  const completed = new Set(state.progress.completedLectures);
  main.innerHTML = `${heading("LOCAL PROGRESS", "學習進度", "資料只保存在目前瀏覽器；舊版資料已備份且不會被刪除。")}
    <div class="metrics">${metric(completed.size,"完成講義")}${metric(state.progress.attempts.length,"作答紀錄")}${metric(state.progress.attempts.reduce((sum, item) => sum + item.total, 0),"累計題數")}${metric(state.progress.attempts.length ? Math.round(100 * state.progress.attempts.reduce((sum, item) => sum + item.score, 0) / state.progress.attempts.reduce((sum, item) => sum + item.total, 0)) + "%" : "-","總正確率")}</div><section class="panel"><h2>各單元完成度</h2><div class="progress-list">${state.catalog.units.map((unit) => `<div class="progress-row"><span>${h(unit.id.replace("ENG_R4_", ""))}</span><div class="bar"><i style="width:${completedPercent(unit)}%"></i></div><b>${completedPercent(unit)}%</b></div>`).join("")}</div></section>`;
}

function renderArchive() {
  main.innerHTML = `${heading("OFFICIAL PAPERS 106–115", "歷屆十年", "保留官方英語科題本、答案與說明 PDF；檔案內容不經本站改寫。")}
    <table class="archive-table"><thead><tr><th>年度</th><th>官方題本</th><th>答案</th><th>說明</th></tr></thead><tbody>${Array.from({ length: 10 }, (_, index) => 115 - index).map((year) => `<tr><th>${year}</th><td><a href="../official-data/${year}/${year}-exam.pdf">開啟題本</a></td><td><a href="../official-data/${year}/${year}-answer.pdf">開啟答案</a></td><td><a href="../official-data/${year}/${year}-guide.pdf">開啟說明</a></td></tr>`).join("")}</tbody></table>`;
}

async function render() {
  stopTimer();
  const current = route();
  document.querySelectorAll("#nav a").forEach((link) => link.classList.toggle("active", link.dataset.view === current.view || (current.view === "course" && link.dataset.view === "courses")));
  const titles = { home: "總覽", courses: "課程", course: "課程", practice: "單元練習", reading: "閱讀題組", listening: "英語聽力", mock: "會考模擬", progress: "學習進度", archive: "歷屆十年" };
  pageTitle.textContent = titles[current.view] || "英文科";
  main.setAttribute("aria-busy", "true");
  try {
    if (current.view === "home") renderHome();
    else if (current.view === "courses") renderCourses();
    else if (current.view === "course") await renderCourse(current.params);
    else if (current.view === "practice") practiceSetup(current.params);
    else if (current.view === "reading") await renderReading(current.params);
    else if (current.view === "listening") await renderListening(current.params);
    else if (current.view === "mock") await renderMock(current.params);
    else if (current.view === "progress") renderProgress();
    else if (current.view === "archive") renderArchive();
    else navigate("home");
    main.querySelectorAll("[data-go]").forEach((button) => button.addEventListener("click", () => navigate(button.dataset.go)));
    main.querySelectorAll("[data-unit]").forEach((button) => button.addEventListener("click", () => navigate("course", { unit: button.dataset.unit })));
    main.focus({ preventScroll: true });
  } catch (error) {
    main.innerHTML = `<div class="fatal"><h1>內容載入失敗</h1><p>${h(error.message)}</p></div>`;
  } finally {
    main.removeAttribute("aria-busy");
    $("#sidebar").classList.remove("open");
    $("#menu").setAttribute("aria-expanded", "false");
  }
}

async function boot() {
  migrateLegacyStorage();
  state.catalog = await fetchJson("runtime/catalog.json");
  runtimeStatus.textContent = "靜態題庫已載入";
  $("#contentVersion").textContent = state.catalog.contentVersion;
  await render();
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("service-worker.js");
}

$("#menu").addEventListener("click", () => {
  const open = $("#sidebar").classList.toggle("open");
  $("#menu").setAttribute("aria-expanded", String(open));
});
window.addEventListener("hashchange", render);
boot().catch((error) => {
  runtimeStatus.textContent = "載入失敗";
  main.innerHTML = `<div class="fatal"><h1>無法啟動英文作戰室</h1><p>${h(error.message)}</p></div>`;
});
