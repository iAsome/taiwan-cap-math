import { STORAGE_KEY, THEME_KEY, loadProgress, migrateLegacy } from "./progress-migration.mjs?v=4.0.0-final-7";

const SUBJECT_PREFIX = "地理會考作戰室/r4/";
const SKILL_PREFIX = "GEO_R4_";
const UNIT_LABELS = [
  "地理探究與空間問題", "方位、經緯度與位置", "比例尺與距離量測", "等高線與地形判讀", "地圖投影與變形", "GIS、遙測與圖層",
  "地表作用與地形", "天氣要素與氣候圖", "氣候控制與分類", "水文、集水區與水資源", "人口結構與遷移", "聚落、都市化與都市系統",
  "文化、族群與景觀", "農漁業與食物系統", "工業區位與生產網絡", "服務、貿易、交通與觀光", "發展指標與區域差距", "臺灣位置與自然環境",
  "臺灣氣候、水文與災害", "臺灣人口與聚落", "臺灣經濟與區域發展", "臺灣環境議題與永續", "中國與東亞", "東南亞",
  "南亞", "中亞與西亞", "歐洲與俄羅斯", "非洲", "北美洲", "拉丁美洲", "大洋洲與極地", "全球化與相互依賴",
  "能源、資源與環境正義", "氣候變遷、減緩與調適", "災害風險與韌性", "多來源地理統整",
];

const $ = (selector, root = document) => root.querySelector(selector);
const state = { manifest: null, skills: [], skillById: new Map(), currentSkillId: null, view: "lecture", progress: loadProgress(localStorage), questionCache: new Map(), stimulusCache: new Map(), assetCache: new Map() };

function saveProgress() {
  state.progress.updatedAt = new Date().toISOString();
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress)); } catch {}
  updateProgressUi();
}

function announce(message) { $("#liveRegion").textContent = message; }

function hashSeed(value) {
  let hash = 2166136261;
  for (const char of String(value)) { hash ^= char.codePointAt(0); hash = Math.imul(hash, 16777619); }
  return hash >>> 0;
}

function seededOrder(values, seed) {
  let value = hashSeed(seed) || 1;
  const random = () => { value += 0x6d2b79f5; let t = value; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) { const target = Math.floor(random() * (index + 1)); [result[index], result[target]] = [result[target], result[index]]; }
  return result;
}

async function fetchJson(relativePath) {
  const response = await fetch(relativePath, { cache: "no-cache" });
  if (!response.ok) throw new Error(`無法載入 ${relativePath}（${response.status}）`);
  return response.json();
}

function localArtifactPath(artifact) {
  const index = artifact.path.indexOf(SUBJECT_PREFIX);
  return index >= 0 ? artifact.path.slice(index + SUBJECT_PREFIX.length) : artifact.path;
}

function artifact(type, id) {
  const found = state.manifest.artifacts.find((item) => item.type === type && item.id === id);
  if (!found) throw new Error(`找不到 ${type} ${id}`);
  return found;
}

async function loadById(type, id, cache = null) {
  if (cache?.has(id)) return cache.get(id);
  const value = await fetchJson(localArtifactPath(artifact(type, id)));
  cache?.set(id, value);
  return value;
}

function setContent(node) {
  const container = $("#content");
  container.replaceChildren(node);
  container.hidden = false;
  $("#loading").hidden = true;
}

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function pageHead(title, description, action = null) {
  const header = element("header", "page-head");
  const text = element("div");
  text.append(element("h2", null, title), element("p", null, description));
  header.append(text);
  if (action) header.append(action);
  return header;
}

function updateProgressUi() {
  const done = new Set(state.progress.completedSkillIds);
  $("#progressLabel").textContent = `${done.size} / 240`;
  document.querySelectorAll(".skill-button").forEach((button) => button.classList.toggle("done", done.has(button.dataset.skillId)));
}

function renderNav(filter = "") {
  const nav = $("#unitNav");
  nav.replaceChildren();
  const query = filter.trim().toLocaleLowerCase("zh-Hant-TW");
  for (let unitIndex = 1; unitIndex <= 36; unitIndex += 1) {
    const unitId = `GEO_R4_U${String(unitIndex).padStart(2, "0")}`;
    const skills = state.skills.filter((skill) => skill.unitId === unitId && (!query || skill.title.toLocaleLowerCase("zh-Hant-TW").includes(query)));
    if (!skills.length) continue;
    const group = element("section", "unit-group");
    const toggle = element("button", "unit-toggle");
    toggle.type = "button";
    toggle.setAttribute("aria-expanded", query || skills.some((skill) => skill.id === state.currentSkillId) ? "true" : "false");
    toggle.append(element("span", null, String(unitIndex).padStart(2, "0")), element("b", null, UNIT_LABELS[unitIndex - 1]), element("span", null, "⌄"));
    const list = element("div", "skill-list");
    list.hidden = toggle.getAttribute("aria-expanded") !== "true";
    for (const skill of skills) {
      const button = element("button", "skill-button", skill.title);
      button.type = "button";
      button.dataset.skillId = skill.id;
      button.setAttribute("aria-current", skill.id === state.currentSkillId ? "true" : "false");
      button.addEventListener("click", () => selectSkill(skill.id));
      list.append(button);
    }
    toggle.addEventListener("click", () => { const expanded = toggle.getAttribute("aria-expanded") === "true"; toggle.setAttribute("aria-expanded", String(!expanded)); list.hidden = expanded; });
    group.append(toggle, list);
    nav.append(group);
  }
  updateProgressUi();
}

async function selectSkill(skillId) {
  state.currentSkillId = skillId;
  state.progress.lastSkillId = skillId;
  saveProgress();
  const skill = state.skillById.get(skillId);
  $("#unitLabel").textContent = `單元 ${Number(skill.unitId.slice(-2))} · ${UNIT_LABELS[Number(skill.unitId.slice(-2)) - 1]}`;
  $("#skillTitle").textContent = skill.title;
  renderNav($("#skillSearch").value);
  await renderCurrent();
  $("#main").focus();
  if (window.innerWidth <= 820) closeSidebar();
}

function currentSkill() { return state.skillById.get(state.currentSkillId); }

function lectureId(skillId) { return `GEO_R4_L_${skillId.slice(SKILL_PREFIX.length)}`; }
function stimulusId(skillId) { return `GEO_R4_ST${skillId.slice(-3)}`; }
function standaloneQuestionIds(skillId) { return Array.from({ length: 12 }, (_, index) => `GEO_R4_Q_${skillId.slice(SKILL_PREFIX.length)}_${String(index + 1).padStart(2, "0")}`); }
function stimulusQuestionIds(skillId) { return Array.from({ length: 3 }, (_, index) => `GEO_R4_Q_${skillId.slice(SKILL_PREFIX.length)}_ST${String(index + 1).padStart(2, "0")}`); }

async function renderLecture() {
  const skill = currentSkill();
  const lecture = await loadById("lecture", lectureId(skill.id));
  const root = element("article");
  const complete = element("button", "command", state.progress.completedSkillIds.includes(skill.id) ? "已完成" : "標記完成");
  complete.type = "button";
  complete.addEventListener("click", () => {
    const done = new Set(state.progress.completedSkillIds);
    done.has(skill.id) ? done.delete(skill.id) : done.add(skill.id);
    state.progress.completedSkillIds = [...done].sort();
    saveProgress(); complete.textContent = done.has(skill.id) ? "已完成" : "標記完成";
  });
  root.append(pageHead(skill.title, "從先備概念、判讀方法到會考資料整合，依序完成本技能。", complete));
  const objectives = element("section", "objectives"); objectives.append(element("h3", null, "學完你能做到"));
  const objectiveList = element("ul"); lecture.objectives.forEach((value) => objectiveList.append(element("li", null, value))); objectives.append(objectiveList); root.append(objectives);
  lecture.sections.forEach((section) => { const block = element("section", "content-section"); block.append(element("h3", null, section.title), element("p", null, section.content)); root.append(block); });
  const examples = element("section", "content-section"); examples.append(element("h3", null, "完整示例")); const exampleList = element("div", "example-list");
  lecture.workedExamples.forEach((item, index) => { const card = element("article", "example"); card.append(element("h4", null, `例 ${index + 1}｜${item.prompt}`)); const steps = element("ol"); item.steps.forEach((step) => steps.append(element("li", null, step))); card.append(steps, element("p", "answer-line", `答案：${item.answer}`), element("p", "why", item.why)); exampleList.append(card); }); examples.append(exampleList); root.append(examples);
  const mistakes = element("section", "content-section"); mistakes.append(element("h3", null, "常見誤會")); const mistakeList = element("div", "mistake-list");
  lecture.misconceptions.forEach((item) => { const card = element("article", "mistake"); card.append(element("h4", null, item.belief), element("p", null, item.whyWrong), element("p", "why", `修正：${item.correction}`)); mistakeList.append(card); }); mistakes.append(mistakeList); root.append(mistakes);
  const checks = element("section", "content-section"); checks.append(element("h3", null, "自我檢查")); const checkList = element("div", "check-list");
  lecture.checks.forEach((item) => { const card = element("details", "check"); const summary = element("summary", null, item.prompt); card.append(summary, element("p", "answer-line", `答案：${item.answer}`), element("p", "why", item.reason)); checkList.append(card); }); checks.append(checkList); root.append(checks);
  setContent(root);
}

function questionCard(question, number, resultBucket) {
  const card = element("article", "question-card"); card.dataset.questionId = question.id;
  card.append(element("span", "difficulty", `${number}. ${question.difficulty.toUpperCase()}`));
  const fieldset = element("fieldset"); fieldset.append(element("legend", null, question.stem));
  question.options.forEach((option, index) => { const label = element("label", "option"); const input = document.createElement("input"); input.type = "radio"; input.name = question.id; input.value = String(index); label.append(input, element("span", null, `${String.fromCharCode(65 + index)}. ${option}`)); fieldset.append(label); });
  const actions = element("div", "question-actions"); const submit = element("button", "command", "確認答案"); submit.type = "button";
  submit.addEventListener("click", () => {
    const selected = card.querySelector(`input[name="${question.id}"]:checked`);
    if (!selected) { announce("請先選擇一個答案"); return; }
    const chosen = Number(selected.value); const correct = chosen === question.answerIndex;
    card.querySelectorAll(".option").forEach((label, index) => {
      label.classList.toggle("correct", index === question.answerIndex);
      label.classList.toggle("wrong", index === chosen && index !== question.answerIndex);
    });
    card.querySelectorAll("input").forEach((input) => { input.disabled = true; }); submit.disabled = true;
    const feedback = element("div", "feedback"); feedback.append(element("strong", null, correct ? "答對了" : `正確答案是 ${String.fromCharCode(65 + question.answerIndex)}`)); const list = element("ul"); question.optionRationales.forEach((item) => list.append(element("li", null, `${String.fromCharCode(65 + item.optionIndex)}：${item.reason}`))); feedback.append(list); card.append(feedback);
    resultBucket[question.id] = { chosen, correct, answeredAt: new Date().toISOString() }; state.progress.results = { ...state.progress.results, ...resultBucket }; saveProgress(); announce(correct ? "答對了" : "答案已核對，請閱讀逐選項說明");
  });
  actions.append(submit); card.append(fieldset, actions); return card;
}

function seedControls(defaultSeed, onBuild) {
  const row = element("div", "seed-row"); const label = element("label", null, "種子碼"); const input = document.createElement("input"); input.type = "text"; input.value = defaultSeed; input.inputMode = "numeric"; label.append(input); const button = element("button", "command secondary", "重新排列"); button.type = "button"; button.addEventListener("click", () => onBuild(input.value || "1")); row.append(label, button); return row;
}

async function renderPractice(seed = "1") {
  const skill = currentSkill(); const ids = seededOrder(standaloneQuestionIds(skill.id), `${skill.id}:${seed}`); const questions = await Promise.all(ids.map((id) => loadById("question", id, state.questionCache)));
  const root = element("section"); root.append(pageHead(`${skill.title}｜單元練習`, "本卷只重新排列 12 題已審核靜態題目，種子碼不會產生新題。")); root.append(seedControls(seed, renderPractice)); const paper = element("div", "question-paper"); const bucket = {}; questions.forEach((question, index) => paper.append(questionCard(question, index + 1, bucket))); root.append(paper); setContent(root);
}

function renderStructuredContent(content, root) {
  root.append(element("h3", null, content.title), element("p", "stimulus-note", content.prompt));
  if (content.sourceNote) root.append(element("p", "scope-notice", content.sourceNote));
  if (content.body) root.append(element("p", null, content.body));
  if (content.map?.north) root.append(element("p", "stimulus-note", `方位基準：北方為${content.map.north}`));
  if (content.target) root.append(element("p", "stimulus-note", `目標座標：${content.target}`));
  const data = content.table
    ?? (content.columns && content.rows ? { caption: content.caption ?? content.title, columns: content.columns, rows: content.rows } : null)
    ?? (content.map?.points ? { caption: `${content.title}座標資料表`, columns: ["地點", "東西座標（格）", "南北座標（格）"], rows: content.map.points } : null)
    ?? (content.points ? { caption: `${content.title}資料表`, columns: ["候選點", "緯度", "經度"], rows: content.points } : null);
  if (data) { const wrap = element("div", "data-table-wrap"); const table = element("table", "data-table"); table.append(element("caption", null, data.caption?.trim() || content.title)); const head = element("thead"); const headerRow = element("tr"); data.columns.forEach((value) => headerRow.append(element("th", null, value))); head.append(headerRow); const body = element("tbody"); data.rows.forEach((row) => { const tr = element("tr"); row.forEach((value) => tr.append(element("td", null, String(value)))); body.append(tr); }); table.append(head, body); wrap.append(table); root.append(wrap); }
}

async function appendAssets(record, root) {
  for (const assetId of record.assets) {
    const asset = await loadById("asset", assetId, state.assetCache); const figure = element("figure", "asset-figure"); const image = document.createElement("img"); image.src = localArtifactPath({ path: asset.path }); image.alt = asset.altText; image.loading = "lazy"; figure.append(image, element("figcaption", null, asset.caption)); const details = element("details"); details.append(element("summary", null, "圖形文字說明"), element("p", null, asset.longDescription)); figure.append(details); root.append(figure);
    if (asset.dataFallback) renderStructuredContent({ title: "圖形資料表", prompt: asset.dataFallback.summary, table: { caption: `${asset.caption}（文字資料）`, columns: asset.dataFallback.columns, rows: asset.dataFallback.rows } }, figure);
  }
}

async function renderStimulus() {
  const skill = currentSkill(); const stimulus = await loadById("stimulus", stimulusId(skill.id), state.stimulusCache); const questions = await Promise.all(stimulusQuestionIds(skill.id).map((id) => loadById("question", id, state.questionCache)));
  const root = element("section"); root.append(pageHead(`${skill.title}｜資料題組`, "先對齊資料的時間、空間、圖例與單位，再回答三題。")); const block = element("article", "stimulus-block"); renderStructuredContent(stimulus.content, block); await appendAssets(stimulus, block); root.append(block); const paper = element("div", "question-paper"); const bucket = {}; questions.forEach((question, index) => paper.append(questionCard(question, index + 1, bucket))); root.append(paper); setContent(root);
}

async function renderMock(seed = "2026") {
  const all = state.manifest.artifacts.filter((item) => item.type === "question" && !item.id.includes("_ST")).map((item) => item.id);
  const ids = seededOrder(all, `geo-mock:${seed}`).slice(0, 30); const questions = await Promise.all(ids.map((id) => loadById("question", id, state.questionCache)));
  const root = element("section"); root.append(pageHead("地理自訂模考", "30 題皆從已完成雙重答案核對的靜態題庫選出；這是地理專項練習，不是官方獨立考科規格。")); root.append(element("div", "scope-notice", "正式會考的地理題屬於社會科，會與歷史、公民整合命題。本卷僅供地理弱點診斷。"), seedControls(seed, renderMock)); const paper = element("div", "question-paper"); const bucket = {}; questions.forEach((question, index) => paper.append(questionCard(question, index + 1, bucket))); root.append(paper); setContent(root);
}

function renderOfficial() {
  const root = element("section"); root.append(pageHead("106–115 官方社會科題本", "地理不是獨立考科；請以國中教育會考官方公布的完整社會科題本、答案與試題說明為準。")); const notice = element("div", "scope-notice", "本站 R4 練習題全部原創，與官方歷屆題本分開保存，不把重製題冒充官方試題。"); root.append(notice); const grid = element("div", "official-grid");
  [["歷屆試題總頁", "官方題本、參考答案與試題說明", "https://cap.rcpet.edu.tw/examination.html"], ["考試科目與題型", "確認社會科題數、時間與四選一形式", "https://cap.rcpet.edu.tw/test2.html"], ["社會科說明", "查閱官方命題與評量說明", "https://cap.rcpet.edu.tw/test4-4.html"]].forEach(([title, text, href]) => { const card = element("article"); card.append(element("h3", null, title), element("p", null, text)); const link = element("a", null, "前往官方網站"); link.href = href; link.target = "_blank"; link.rel = "noopener"; card.append(link); grid.append(card); }); root.append(grid); setContent(root);
}

async function renderCurrent() {
  try {
    if (state.view === "lecture") await renderLecture();
    else if (state.view === "practice") await renderPractice();
    else if (state.view === "stimulus") await renderStimulus();
    else if (state.view === "mock") await renderMock();
    else renderOfficial();
  } catch (error) { const panel = element("div", "status-panel", `內容載入失敗：${error.message}`); panel.setAttribute("role", "alert"); setContent(panel); }
}

const mobileSidebarQuery = matchMedia("(max-width: 820px)");
function syncSidebar() {
  const sidebar = $("#sidebar");
  const button = $("#menuButton");
  const open = sidebar.classList.contains("open");
  const hidden = mobileSidebarQuery.matches && !open;
  sidebar.inert = hidden;
  sidebar.toggleAttribute("aria-hidden", hidden);
  button.setAttribute("aria-expanded", String(open));
  button.setAttribute("aria-label", open ? "關閉單元選單" : "開啟單元選單");
}
function closeSidebar() { $("#sidebar").classList.remove("open"); syncSidebar(); }

async function init() {
  migrateLegacy(localStorage, state.progress);
  state.manifest = await fetchJson("content-manifest-v4.json");
  const skillArtifacts = state.manifest.artifacts.filter((item) => item.type === "skill").sort((a, b) => a.id.localeCompare(b.id, "en"));
  state.skills = await Promise.all(skillArtifacts.map((item) => fetchJson(localArtifactPath(item))));
  state.skillById = new Map(state.skills.map((skill) => [skill.id, skill]));
  state.currentSkillId = state.skillById.has(state.progress.lastSkillId) ? state.progress.lastSkillId : state.skills[0].id;
  renderNav();
  $("#skillSearch").addEventListener("input", (event) => renderNav(event.target.value));
  document.querySelectorAll(".view-tabs button").forEach((button) => button.addEventListener("click", async () => { state.view = button.dataset.view; document.querySelectorAll(".view-tabs button").forEach((item) => item.setAttribute("aria-current", item === button ? "page" : "false")); await renderCurrent(); }));
  $("#menuButton").addEventListener("click", () => { $("#sidebar").classList.toggle("open"); syncSidebar(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && $("#sidebar").classList.contains("open")) { closeSidebar(); $("#menuButton").focus(); } });
  mobileSidebarQuery.addEventListener("change", syncSidebar);
  syncSidebar();
  $("#themeButton").addEventListener("click", () => { const dark = document.documentElement.dataset.theme !== "dark"; document.documentElement.dataset.theme = dark ? "dark" : "light"; try { localStorage.setItem(THEME_KEY, dark ? "dark" : "light"); } catch {} });
  try { if (localStorage.getItem(THEME_KEY) === "dark") document.documentElement.dataset.theme = "dark"; } catch {}
  await selectSkill(state.currentSkillId);
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
}

init().catch((error) => { $("#loading").textContent = `無法啟動：${error.message}`; $("#loading").setAttribute("role", "alert"); });
