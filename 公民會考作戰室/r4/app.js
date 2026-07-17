const INDEX_URL = "runtime/content-index.json";
const V4_PREFIX = "cap8.r4.civics.";
const LEGACY_PREFIX = "capCivics.";

export function safeJson(value, fallback) {
  try { return value == null ? fallback : JSON.parse(value); } catch { return fallback; }
}

function storageGet(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}

function storageSet(key, value) {
  try { localStorage.setItem(key, value); return true; } catch { return false; }
}

function readProgress() {
  const value = safeJson(storageGet(`${V4_PREFIX}progress`), {});
  return {
    completedSkillIds: Array.isArray(value.completedSkillIds) ? value.completedSkillIds : [],
    attempts: value.attempts && typeof value.attempts === "object" ? value.attempts : {},
    mistakes: value.mistakes && typeof value.mistakes === "object" ? value.mistakes : {},
    reviewSchedule: value.reviewSchedule && typeof value.reviewSchedule === "object" ? value.reviewSchedule : {},
  };
}

export function migrateLegacyStorage(storage) {
  const marker = `${V4_PREFIX}migration.v1`;
  if (storage.getItem(marker) === "complete") return { migrated: false, reason: "already-complete" };
  const backup = {};
  for (let index = 0; index < storage.length; index += 1) {
    const key = storage.key(index);
    if (key?.startsWith(LEGACY_PREFIX)) backup[key] = storage.getItem(key);
  }
  const failures = [];
  const set = (key, value) => { try { storage.setItem(key, value); return true; } catch (error) { failures.push(`${key}: ${error.name || "write-failed"}`); return false; } };
  const copied = set(`${V4_PREFIX}legacyBackup`, JSON.stringify(backup));
  if (!copied) set(`${V4_PREFIX}legacyBackupManifest`, JSON.stringify({ mode: "source-keys-preserved", keys: Object.keys(backup) }));
  const completed = safeJson(backup[`${LEGACY_PREFIX}completed`], []);
  if (Array.isArray(completed)) set(`${V4_PREFIX}legacyCompleted`, JSON.stringify(completed));
  if (backup[`${LEGACY_PREFIX}lastSeed`] != null) set(`${V4_PREFIX}lastSeed`, backup[`${LEGACY_PREFIX}lastSeed`]);
  if (backup[`${LEGACY_PREFIX}dark`] != null) set(`${V4_PREFIX}legacyTheme`, backup[`${LEGACY_PREFIX}dark`]);
  const complete = failures.length === 0 && set(marker, "complete");
  return { migrated: true, complete, legacyKeys: Object.keys(backup).length, backupMode: copied ? "copied" : "source-keys-preserved", failures };
}

export function applyLegacyProgress(storage, index) {
  const marker = `${V4_PREFIX}migration.v1.progress`;
  if (storage.getItem(marker) === "complete") return { migrated: false, reason: "already-complete" };
  const legacyUnits = new Set(safeJson(storage.getItem(`${V4_PREFIX}legacyCompleted`), []).map(Number).filter(Number.isInteger));
  const mappedSkillIds = index.skills.filter((skill) => legacyUnits.has(Number(skill.unitId.slice(-2)))).map((skill) => skill.id);
  const progress = safeJson(storage.getItem(`${V4_PREFIX}progress`), {});
  progress.completedSkillIds = [...new Set([...(Array.isArray(progress.completedSkillIds) ? progress.completedSkillIds : []), ...mappedSkillIds])];
  progress.attempts = progress.attempts && typeof progress.attempts === "object" ? progress.attempts : {};
  progress.mistakes = progress.mistakes && typeof progress.mistakes === "object" ? progress.mistakes : {};
  progress.reviewSchedule = progress.reviewSchedule && typeof progress.reviewSchedule === "object" ? progress.reviewSchedule : {};
  try {
    storage.setItem(`${V4_PREFIX}progress`, JSON.stringify(progress));
    storage.setItem(marker, "complete");
    return { migrated: true, completedSkills: mappedSkillIds.length };
  } catch (error) {
    return { migrated: false, reason: error.name || "write-failed" };
  }
}

function hash(text) {
  let value = 2166136261;
  for (const char of text) value = Math.imul(value ^ char.codePointAt(0), 16777619);
  return value >>> 0;
}

export function orderStaticIds(ids, seed) {
  return [...ids].sort((a, b) => hash(`${seed}\0${a}`) - hash(`${seed}\0${b}`) || a.localeCompare(b, "en"));
}

const state = { index: null, currentSkill: null, currentLecture: null, currentQuestions: [], cache: new Map(), offlineReady: false, offlinePreparing: false };
const $ = (selector) => document.querySelector(selector);

async function loadJson(url) {
  if (!state.cache.has(url)) state.cache.set(url, fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${url}: ${response.status}`);
    return response.json();
  }));
  return state.cache.get(url);
}

function unitFor(skill) {
  return state.index.units.find((unit) => unit.unitId === skill.unitId);
}

function renderSkillList() {
  const selectedUnit = $("#unitSelect").value;
  const query = $("#skillSearch").value.trim().toLocaleLowerCase("zh-Hant");
  const skills = state.index.skills.filter((skill) => (!selectedUnit || skill.unitId === selectedUnit) && (!query || skill.title.toLocaleLowerCase("zh-Hant").includes(query)));
  const nav = $("#skillList");
  nav.replaceChildren(...skills.map((skill) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = skill.title;
    button.dataset.skillId = skill.id;
    button.className = skill.id === state.currentSkill?.id ? "active" : "";
    button.addEventListener("click", () => selectSkill(skill.id));
    return button;
  }));
  if (!skills.length) nav.textContent = "找不到符合條件的技能。";
}

function section(tag, title, body) {
  const wrapper = document.createElement(tag);
  const heading = document.createElement("h2");
  heading.textContent = title;
  wrapper.append(heading, body);
  return wrapper;
}

function list(items, render) {
  const element = document.createElement("ol");
  element.replaceChildren(...items.map((item, index) => {
    const li = document.createElement("li");
    li.append(render(item, index));
    return li;
  }));
  return element;
}

function renderLecture(lecture) {
  const panel = $("#lecturePanel");
  const pathItems = lecture.prerequisites.map((id) => state.index.skills.find((skill) => skill.id === id)).filter(Boolean);
  const learningPath = pathItems.length ? list(pathItems, (skill) => {
    const button = document.createElement("button"); button.type = "button"; button.textContent = `先修：${skill.title}`; button.addEventListener("click", () => selectSkill(skill.id)); return button;
  }) : document.createTextNode("這是此學習路徑的起點，可直接從學習目標開始。");
  const objectives = list(lecture.objectives, (value) => document.createTextNode(value));
  const sections = lecture.sections.map((value) => {
    const article = document.createElement("article");
    const h2 = document.createElement("h2"); h2.textContent = value.title;
    const p = document.createElement("p"); p.textContent = value.content;
    article.append(h2, p); return article;
  });
  const examples = list(lecture.workedExamples, (value) => {
    const box = document.createElement("div");
    const prompt = document.createElement("p"); prompt.className = "example-prompt"; prompt.textContent = value.prompt;
    const steps = list(value.steps, (step) => document.createTextNode(step));
    const answer = document.createElement("p"); answer.innerHTML = `<strong>答案：</strong>${escapeHtml(value.answer)}`;
    const why = document.createElement("p"); why.textContent = value.why;
    box.append(prompt, steps, answer, why); return box;
  });
  const mistakes = document.createElement("div");
  mistakes.className = "mistake-list";
  for (const value of lecture.misconceptions) {
    const item = document.createElement("article");
    const title = document.createElement("h3"); title.textContent = value.belief;
    const why = document.createElement("p"); why.textContent = value.whyWrong;
    const correction = document.createElement("p"); correction.innerHTML = `<strong>修正：</strong>${escapeHtml(value.correction)}`;
    item.append(title, why, correction); mistakes.append(item);
  }
  const checks = list(lecture.checks, (value) => {
    const details = document.createElement("details"); const summary = document.createElement("summary"); summary.textContent = value.prompt;
    const answer = document.createElement("p"); answer.innerHTML = `<strong>答案：</strong>${escapeHtml(value.answer)}`;
    const reason = document.createElement("p"); reason.textContent = value.reason; details.append(summary, answer, reason); return details;
  });
  panel.replaceChildren(section("section", "學習路徑", learningPath), section("section", "學習目標", objectives), ...sections, section("section", "例題與推理", examples), section("section", "常見迷思", mistakes), section("section", "掌握度自我檢核", checks));
}

function escapeHtml(value) {
  const span = document.createElement("span"); span.textContent = value; return span.innerHTML;
}

function questionElement(question, number) {
  const fieldset = document.createElement("fieldset");
  fieldset.dataset.questionId = question.id;
  const legend = document.createElement("legend"); legend.textContent = `${number}. ${question.stem}`;
  fieldset.append(legend);
  question.options.forEach((option, optionIndex) => {
    const label = document.createElement("label");
    const input = document.createElement("input"); input.type = "radio"; input.name = question.id; input.value = String(optionIndex);
    label.append(input, document.createTextNode(` ${String.fromCharCode(65 + optionIndex)}. ${option}`)); fieldset.append(label);
  });
  const explanation = document.createElement("div"); explanation.className = "rationales"; explanation.hidden = true; fieldset.append(explanation);
  return fieldset;
}

function showResults(container, questions, mode) {
  let score = 0;
  const progress = readProgress();
  const now = new Date();
  for (const question of questions) {
    const fieldset = container.querySelector(`[data-question-id="${question.id}"]`);
    const selected = fieldset.querySelector("input:checked");
    const correct = Number(selected?.value) === question.answerIndex;
    if (correct) {
      score += 1;
      if (progress.mistakes[question.id] || mode === "remediation") {
        const previousDays = Number(progress.reviewSchedule[question.id]?.intervalDays) || 1;
        const intervalDays = Math.min(previousDays * 2, 30);
        progress.reviewSchedule[question.id] = { skillId: state.currentSkill.id, dueAt: new Date(now.getTime() + intervalDays * 86400000).toISOString(), intervalDays };
        delete progress.mistakes[question.id];
      }
    } else {
      progress.mistakes[question.id] = {
        skillId: state.currentSkill.id,
        selectedIndex: selected ? Number(selected.value) : null,
        representationType: question.representationType,
        misconceptionTargets: question.misconceptionTargets,
        updatedAt: now.toISOString(),
      };
      progress.reviewSchedule[question.id] = { skillId: state.currentSkill.id, dueAt: new Date(now.getTime() + 86400000).toISOString(), intervalDays: 1 };
    }
    const explanation = fieldset.querySelector(".rationales"); explanation.hidden = false;
    explanation.replaceChildren(...question.optionRationales.map((value) => {
      const p = document.createElement("p"); p.className = value.isCorrect ? "correct" : ""; p.textContent = `${String.fromCharCode(65 + value.optionIndex)}：${value.reason}`; return p;
    }));
  }
  let result = container.querySelector(".score");
  if (!result) { result = document.createElement("p"); result.className = "score"; container.prepend(result); }
  result.textContent = `得分 ${score} / ${questions.length}。${score === questions.length ? "本次全部答對。" : "錯題已加入補救與間隔複習。"}`;
  progress.attempts[state.currentSkill.id] ??= {};
  progress.attempts[state.currentSkill.id][mode] = { score, total: questions.length, updatedAt: now.toISOString() };
  if (mode === "practice" && score >= Math.ceil(questions.length * 0.8) && !progress.completedSkillIds.includes(state.currentSkill.id)) progress.completedSkillIds.push(state.currentSkill.id);
  if (!storageSet(`${V4_PREFIX}progress`, JSON.stringify(progress))) result.textContent += " 這次進度無法寫入瀏覽器儲存空間。";
  renderProgressSummary();
  renderRemediation(state.currentSkill, state.currentQuestions);
}

function assessment(panel, questions, seed, mode) {
  const names = { diagnostic: "零基礎診斷", practice: "單元練習", transfer: "遷移題組", remediation: "補救與間隔複習" };
  const heading = document.createElement("h2"); heading.textContent = names[mode];
  const intro = document.createElement("p"); intro.textContent = mode === "diagnostic" ? "先作答基礎題以找出需要補強的概念；結果不會限制後續學習。" : mode === "remediation" ? "重作目前錯題或到期題；答對後會延長下次複習間隔。" : "題目只依種子排序已審核的靜態 ID，不會在瀏覽器造題。";
  const controls = $("#assessmentControls").content.firstElementChild.cloneNode(true);
  const seedInput = controls.querySelector(".seed-input"); seedInput.value = seed;
  let ordered = orderStaticIds(questions.map((value) => value.id), seed).map((id) => questions.find((value) => value.id === id));
  const listBox = document.createElement("div"); listBox.className = "question-list";
  const draw = () => listBox.replaceChildren(...ordered.map(questionElement));
  controls.querySelector(".reorder").addEventListener("click", () => {
    const value = seedInput.value.trim() || "1"; storageSet(`${V4_PREFIX}lastSeed`, value);
    ordered = orderStaticIds(questions.map((item) => item.id), value).map((id) => questions.find((item) => item.id === id)); draw();
  });
  controls.querySelector(".submit").addEventListener("click", () => showResults(panel, ordered, mode));
  draw(); panel.replaceChildren(heading, intro, controls, listBox);
}

function renderProgressSummary() {
  if (!state.index || !$("#progressSummary")) return;
  const progress = readProgress();
  const due = Object.values(progress.reviewSchedule).filter((value) => Date.parse(value.dueAt) <= Date.now()).length;
  $("#progressSummary").textContent = `已掌握 ${progress.completedSkillIds.length} / ${state.index.skills.length}；錯題 ${Object.keys(progress.mistakes).length}；到期複習 ${due}`;
}

function renderRemediation(skill, questions) {
  const panel = $("#remediationPanel");
  if (!panel || !skill) return;
  const progress = readProgress();
  const ids = new Set([
    ...Object.entries(progress.mistakes).filter(([, value]) => value.skillId === skill.id).map(([id]) => id),
    ...Object.entries(progress.reviewSchedule).filter(([, value]) => value.skillId === skill.id && Date.parse(value.dueAt) <= Date.now()).map(([id]) => id),
  ]);
  const selected = questions.filter((question) => ids.has(question.id));
  if (!selected.length) {
    const heading = document.createElement("h2"); heading.textContent = "補救與間隔複習";
    const message = document.createElement("p"); message.textContent = "此技能目前沒有待補救或已到期的題目。作答後，錯題會在這裡出現。";
    panel.replaceChildren(heading, message); return;
  }
  assessment(panel, selected, storageGet(`${V4_PREFIX}lastSeed`) || "1", "remediation");
}

async function renderStimulus(skill, stimulus, questions) {
  const panel = $("#stimulusPanel");
  const article = document.createElement("article"); article.className = "stimulus";
  const h2 = document.createElement("h2"); h2.textContent = "閱讀材料";
  const p = document.createElement("p"); p.textContent = stimulus.content;
  article.append(h2, p);
  for (const assetId of stimulus.assets) {
    const asset = state.index.assets.find((value) => value.id === assetId);
    if (!asset) continue;
    const figure = document.createElement("figure");
    const frame = document.createElement("iframe"); frame.src = new URL(asset.path.split("/r4/")[1], location.href).href; frame.title = asset.altText; frame.loading = "lazy";
    const caption = document.createElement("figcaption"); caption.textContent = asset.caption;
    const details = document.createElement("details"); const summary = document.createElement("summary"); summary.textContent = "資料表文字說明"; const desc = document.createElement("p"); desc.textContent = asset.longDescription; details.append(summary, desc);
    figure.append(frame, caption, details); article.append(figure);
  }
  const assessmentBox = document.createElement("div"); panel.replaceChildren(article, assessmentBox);
  assessment(assessmentBox, questions, storageGet(`${V4_PREFIX}lastSeed`) || "1", "transfer");
}

async function selectSkill(skillId) {
  const skill = state.index.skills.find((value) => value.id === skillId) || state.index.skills[0];
  state.currentSkill = skill;
  const [lecture, questions, stimulus, stimulusQuestions] = await Promise.all([
    loadJson(skill.lecturePath), Promise.all(skill.questionPaths.map(loadJson)), loadJson(skill.stimulusPath), Promise.all(skill.stimulusQuestionPaths.map(loadJson)),
  ]);
  state.currentLecture = lecture;
  state.currentQuestions = [...questions, ...stimulusQuestions];
  $("#unitLabel").textContent = unitFor(skill).title;
  $("#skillTitle").textContent = skill.title;
  renderLecture(lecture);
  assessment($("#diagnosticPanel"), questions.filter((question) => question.difficulty === "foundation"), storageGet(`${V4_PREFIX}lastSeed`) || "1", "diagnostic");
  assessment($("#practicePanel"), questions.filter((question) => question.difficulty !== "foundation"), storageGet(`${V4_PREFIX}lastSeed`) || "1", "practice");
  await renderStimulus(skill, stimulus, stimulusQuestions);
  renderRemediation(skill, state.currentQuestions);
  $("#loading").hidden = true; $("#skillView").hidden = false;
  history.replaceState(null, "", `?skill=${encodeURIComponent(skill.id)}`);
  renderSkillList();
}

function selectTab(tab) {
  const ids = ["Lecture", "Diagnostic", "Practice", "Stimulus", "Remediation"];
  for (const id of ids) {
    const selected = id === tab;
    $(`#tab${id}`).setAttribute("aria-selected", String(selected));
    $(`#tab${id}`).tabIndex = selected ? 0 : -1;
    $(`#${id.toLowerCase()}Panel`).hidden = !selected;
  }
}

function handleTabKeys(event) {
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const current = tabs.indexOf(event.currentTarget);
  const target = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : event.key === "ArrowRight" ? (current + 1) % tabs.length : event.key === "ArrowLeft" ? (current - 1 + tabs.length) % tabs.length : -1;
  if (target < 0) return;
  event.preventDefault(); tabs[target].focus(); selectTab(tabs[target].id.replace("tab", ""));
}

function updateNetworkStatus() {
  const status = !navigator.onLine ? "離線模式" : state.offlineReady ? "線上，離線內容已準備" : state.offlinePreparing ? "線上，正在準備離線內容" : "線上";
  $("#offlineStatus").textContent = status;
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  try {
    state.offlinePreparing = true; updateNetworkStatus();
    const registration = await navigator.serviceWorker.register("sw.js", { updateViaCache: "none" });
    const worker = registration.installing;
    if (worker) worker.addEventListener("statechange", () => { if (worker.state === "installed") { state.offlineReady = true; state.offlinePreparing = false; updateNetworkStatus(); } });
    navigator.serviceWorker.ready.then(() => { state.offlineReady = true; state.offlinePreparing = false; updateNetworkStatus(); });
  } catch {
    state.offlinePreparing = false; updateNetworkStatus();
  }
}

async function copyCurrentLink() {
  try {
    if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(location.href);
    else {
      const input = document.createElement("textarea"); input.value = location.href; input.setAttribute("readonly", ""); document.body.append(input); input.select();
      if (!document.execCommand("copy")) throw new Error("copy failed"); input.remove();
    }
    $("#copyLink").textContent = "已複製";
  } catch { $("#copyLink").textContent = "請複製網址列"; }
}

async function start() {
  migrateLegacyStorage(localStorage);
  state.index = await loadJson(INDEX_URL);
  applyLegacyProgress(localStorage, state.index);
  $("#unitSelect").replaceChildren(new Option("全部主題", ""), ...state.index.units.map((unit) => new Option(unit.title, unit.unitId)));
  $("#unitSelect").addEventListener("change", renderSkillList);
  $("#skillSearch").addEventListener("input", renderSkillList);
  renderProgressSummary();
  for (const tab of ["Lecture", "Diagnostic", "Practice", "Stimulus", "Remediation"]) { $(`#tab${tab}`).addEventListener("click", () => selectTab(tab)); $(`#tab${tab}`).addEventListener("keydown", handleTabKeys); }
  selectTab("Lecture");
  $("#copyLink").addEventListener("click", copyCurrentLink);
  addEventListener("online", updateNetworkStatus); addEventListener("offline", updateNetworkStatus); updateNetworkStatus();
  registerServiceWorker();
  const requested = new URLSearchParams(location.search).get("skill");
  await selectSkill(requested);
}

if (typeof document !== "undefined") start().catch((error) => { $("#loading").textContent = `載入失敗：${error.message}`; });
