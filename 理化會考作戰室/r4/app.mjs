const SUBJECT = "physics_chemistry";
const STORAGE_KEY = "capR4.physicsChemistry.progress.v4";
const BACKUP_KEY = "capR4.physicsChemistry.migrationBackup.v1";
const LEGACY_PREFIXES = ["capScience.", "capR4.physicsChemistry."];
const recordCache = new Map();

const $ = (selector) => document.querySelector(selector);
const workspace = $("#workspace");
const status = $("#appStatus");
const unitSelect = $("#unitSelect");
const skillSelect = $("#skillSelect");
const seedInput = $("#seedInput");
let catalog;
let progress = loadOrMigrateProgress();
let renderToken = 0;

function element(tag, attributes = {}, ...children) {
  const value = document.createElement(tag);
  for (const [name, attribute] of Object.entries(attributes)) {
    if (name === "className") value.className = attribute;
    else if (name === "text") value.textContent = attribute;
    else if (name === "htmlFor") value.htmlFor = attribute;
    else if (name.startsWith("on") && typeof attribute === "function") value.addEventListener(name.slice(2).toLowerCase(), attribute);
    else if (attribute !== undefined && attribute !== null) value.setAttribute(name, String(attribute));
  }
  for (const child of children.flat()) {
    if (child === undefined || child === null) continue;
    value.append(child instanceof Node ? child : document.createTextNode(String(child)));
  }
  return value;
}

function replaceWorkspace(title, ...content) {
  workspace.replaceChildren(element("h2", { id: "workspaceHeading", text: title }), ...content.flat());
}

async function fetchJson(url) {
  if (!recordCache.has(url)) {
    recordCache.set(url, fetch(url).then((response) => {
      if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
      return response.json();
    }).catch((error) => {
      recordCache.delete(url);
      throw error;
    }));
  }
  return recordCache.get(url);
}

function recordPath(kind, id) {
  return `runtime/${kind}/${id}.json`;
}

function seedValue() {
  return Math.max(1, Math.min(2147483647, Number(seedInput.value) || 1));
}

// This PRNG orders reviewed IDs only. It never creates or edits student-visible content.
function orderedIds(ids, seed) {
  let state = (Number(seed) || 1) >>> 0;
  const next = () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return state >>> 0;
  };
  const result = [...ids];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = next() % (index + 1);
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

function safeParse(raw, fallback = null) {
  try { return JSON.parse(raw); } catch { return fallback; }
}

function validProgress(value) {
  const skillId = /^PHYCHM_R4_S(?:00[1-9]|0[1-9]\d|[12]\d{2}|300)$/;
  const completed = value?.completedSkillIds;
  const attempts = value?.attempts;
  const validAttempt = (record) => {
    if (!record || typeof record !== "object" || Array.isArray(record)) return false;
    const entries = Object.entries(record);
    return entries.length > 0 && entries.length <= 2 && entries.every(([kind, result]) => {
      const total = { practice: 12, stimulus: 3 }[kind];
      return total && result && typeof result === "object" && !Array.isArray(result)
        && Object.keys(result).sort().join(",") === "best,last,seed,total"
        && [result.best, result.last].every((score) => Number.isInteger(score) && score >= 0 && score <= total)
        && result.total === total && Number.isFinite(result.seed) && result.seed >= 1 && result.seed <= 2147483647;
    });
  };
  return value?.schemaVersion === 4 && value.subject === SUBJECT
    && Array.isArray(completed) && completed.length <= 300 && new Set(completed).size === completed.length
    && completed.every((id) => skillId.test(id))
    && attempts && typeof attempts === "object" && !Array.isArray(attempts)
    && Object.keys(attempts).length <= 300
    && Object.entries(attempts).every(([id, record]) => skillId.test(id) && validAttempt(record));
}

function freshProgress(legacy = {}) {
  return {
    schemaVersion: 4,
    subject: SUBJECT,
    completedSkillIds: [],
    attempts: {},
    legacy,
  };
}

function legacySnapshot() {
  const snapshot = {};
  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    if (key && key !== STORAGE_KEY && key !== BACKUP_KEY && LEGACY_PREFIXES.some((prefix) => key.startsWith(prefix))) {
      snapshot[key] = localStorage.getItem(key);
    }
  }
  return snapshot;
}

function loadOrMigrateProgress() {
  const raw = localStorage.getItem(STORAGE_KEY);
  const parsed = raw ? safeParse(raw) : null;
  if (validProgress(parsed)) return parsed;

  const legacy = legacySnapshot();
  const backup = {
    schemaVersion: 1,
    reason: raw ? "invalid-r4-progress" : "legacy-migration",
    r4Raw: raw,
    legacy,
  };
  localStorage.setItem(BACKUP_KEY, JSON.stringify(backup));
  const next = freshProgress({ preservedKeys: legacy, invalidR4Raw: raw });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  updateProgressSummary();
}

function updateProgressSummary() {
  const completed = new Set(progress.completedSkillIds);
  $("#progressSummary").textContent = `已完成 ${completed.size} / 300 項技能；作答記錄已保存 ${Object.keys(progress.attempts).length} 項技能。`;
}

function selectedSkill() {
  return catalog.skills.find((skill) => skill.id === skillSelect.value) || catalog.skills[0];
}

function selectedMode() {
  return document.querySelector('input[name="mode"]:checked').value;
}

function populateSkills(preferredId) {
  const unit = catalog.units.find((value) => value.id === unitSelect.value) || catalog.units[0];
  skillSelect.replaceChildren(...unit.skillIds.map((id) => {
    const skill = catalog.skills.find((value) => value.id === id);
    return element("option", { value: skill.id, text: `${skill.id.slice(-3)} · ${skill.title}` });
  }));
  if (preferredId && unit.skillIds.includes(preferredId)) skillSelect.value = preferredId;
}

function renderList(items) {
  return element("ul", {}, items.map((item) => element("li", { text: item })));
}

function renderTable(table) {
  return element("table", { className: "data-table" },
    element("caption", { text: table.caption || table.summary || "資料表" }),
    element("thead", {}, element("tr", {}, table.columns.map((column) => element("th", { scope: "col", text: column })))),
    element("tbody", {}, table.rows.map((row) => element("tr", {}, row.map((cell) => element("td", { text: cell })))))
  );
}

async function renderLecture(skill, token) {
  const lecture = await fetchJson(recordPath("lectures", skill.lectureId));
  if (token !== renderToken) return;
  const content = [
    element("p", { className: "eyebrow", text: `${skill.unitId} · ${skill.id}` }),
    element("h3", { text: "學習目標" }),
    renderList(lecture.objectives),
    ...lecture.sections.map((section) => element("section", { className: "lecture-section", "aria-labelledby": `${section.id}-heading` },
      element("h3", { id: `${section.id}-heading`, text: section.title }),
      element("p", { text: section.content })
    )),
    element("h3", { text: "例題詳解" }),
    ...lecture.workedExamples.map((example, index) => element("article", { className: "worked-example" },
      element("h4", { text: `例 ${index + 1}：${example.prompt}` }),
      element("ol", {}, example.steps.map((step) => element("li", { text: step }))),
      element("p", {}, element("strong", { text: "答案：" }), example.answer),
      element("p", {}, element("strong", { text: "為什麼：" }), example.why)
    )),
    element("h3", { text: "四個常見迷思" }),
    ...lecture.misconceptions.map((item, index) => element("article", { className: "misconception" },
      element("h4", { text: `迷思 ${index + 1}：${item.belief}` }),
      element("p", {}, element("strong", { text: "錯在：" }), item.whyWrong),
      element("p", {}, element("strong", { text: "修正：" }), item.correction)
    )),
    element("h3", { text: "診斷與補救檢核" }),
    ...lecture.checks.map((item, index) => element("article", { className: "check-card" },
      element("h4", { text: `檢核 ${index + 1}：${item.prompt}` }),
      element("details", {}, element("summary", { text: "展開答案與理由" }),
        element("p", {}, element("strong", { text: "答案：" }), item.answer),
        element("p", {}, element("strong", { text: "理由：" }), item.reason))
    )),
  ];
  replaceWorkspace(skill.title, content);
}

function questionCard(question, number) {
  const fieldset = element("fieldset", {}, element("legend", { text: `${number}. ${question.stem}` }));
  question.options.forEach((option, index) => {
    const id = `${question.id}-option-${index}`;
    fieldset.append(element("label", { className: "choice", htmlFor: id },
      element("input", { id, type: "radio", name: question.id, value: index }),
      element("span", { text: `${String.fromCharCode(65 + index)}. ${option}` })
    ));
  });
  return element("article", { className: "question-card", "data-question-id": question.id }, fieldset);
}

function gradeQuestions(skill, questions, kind) {
  let correct = 0;
  let answered = 0;
  for (const question of questions) {
    const card = workspace.querySelector(`[data-question-id="${question.id}"]`);
    const selected = card.querySelector(`input[name="${question.id}"]:checked`);
    const selectedIndex = selected ? Number(selected.value) : null;
    if (selected) answered += 1;
    if (selectedIndex === question.answerIndex) correct += 1;
    card.querySelector(".answer-review")?.remove();
    const review = element("div", { className: `answer-review ${selectedIndex === question.answerIndex ? "good" : "bad"}` },
      element("p", {}, element("strong", { text: selected ? (selectedIndex === question.answerIndex ? "答對了。" : "需要修正。") : "未作答。" }),
        ` 正確答案是 ${String.fromCharCode(65 + question.answerIndex)}。`),
      ...question.optionRationales.map((rationale) => element("p", { text: `${String.fromCharCode(65 + rationale.optionIndex)}：${rationale.reason}` }))
    );
    card.append(review);
  }
  const score = workspace.querySelector("#scoreResult");
  score.className = `score ${correct === questions.length ? "good" : "bad"}`;
  score.textContent = `已作答 ${answered}/${questions.length}，答對 ${correct}/${questions.length}。`;
  const previous = progress.attempts[skill.id]?.[kind]?.best || 0;
  progress.attempts[skill.id] = {
    ...(progress.attempts[skill.id] || {}),
    [kind]: { best: Math.max(previous, correct), last: correct, total: questions.length, seed: seedValue() },
  };
  const practiceBest = progress.attempts[skill.id].practice?.best || 0;
  const stimulusBest = progress.attempts[skill.id].stimulus?.best || 0;
  if (practiceBest >= 10 && stimulusBest >= 2 && !progress.completedSkillIds.includes(skill.id)) progress.completedSkillIds.push(skill.id);
  saveProgress();
  score.focus();
}

async function renderPractice(skill, token) {
  const ids = orderedIds(skill.questionIds, seedValue());
  const questions = await Promise.all(ids.map((id) => fetchJson(recordPath("questions", id))));
  if (token !== renderToken) return;
  const score = element("p", { id: "scoreResult", className: "score", tabindex: "-1", "aria-live": "polite", text: "尚未交卷。" });
  const submit = element("button", { type: "button", className: "primary", text: "交卷並查看逐項解析", onclick: () => gradeQuestions(skill, questions, "practice") });
  replaceWorkspace(`${skill.title}：12 題技能練習`,
    element("p", { text: `順序種子 ${seedValue()}；題幹、選項與答案均由固定 ID 載入。` }),
    questions.map((question, index) => questionCard(question, index + 1)),
    element("div", { className: "submit-row" }, submit, score)
  );
}

async function renderFigure(assetId) {
  const asset = await fetchJson(recordPath("assets", assetId));
  const marker = "理化會考作戰室/r4/";
  const source = asset.path.includes(marker) ? asset.path.split(marker)[1] : asset.path;
  return element("figure", { className: "figure-card" },
    element("img", { src: source, alt: asset.altText, loading: "lazy", decoding: "async" }),
    element("figcaption", { text: asset.caption }),
    element("details", {}, element("summary", { text: "圖形長描述與資料表替代" }),
      element("p", { text: asset.longDescription }),
      renderTable({ caption: asset.dataFallback.summary, columns: asset.dataFallback.columns, rows: asset.dataFallback.rows }))
  );
}

async function renderStimulus(skill, token) {
  const ids = orderedIds(skill.stimulusQuestionIds, seedValue() + 911);
  const [stimulus, questions, figures] = await Promise.all([
    fetchJson(recordPath("stimuli", skill.stimulusId)),
    Promise.all(ids.map((id) => fetchJson(recordPath("questions", id)))),
    Promise.all(skill.assetIds.map(renderFigure)),
  ]);
  if (token !== renderToken) return;
  const score = element("p", { id: "scoreResult", className: "score", tabindex: "-1", "aria-live": "polite", text: "尚未交卷。" });
  const submit = element("button", { type: "button", className: "primary", text: "交卷並查看逐項解析", onclick: () => gradeQuestions(skill, questions, "stimulus") });
  replaceWorkspace(`${skill.title}：${stimulus.title}`,
    element("article", { className: "stimulus-card" }, element("p", { text: stimulus.body }), renderTable(stimulus.dataTable), figures),
    questions.map((question, index) => questionCard(question, index + 1)),
    element("div", { className: "submit-row" }, submit, score)
  );
}

async function renderCurrent() {
  if (!catalog) return;
  const token = ++renderToken;
  const skill = selectedSkill();
  status.textContent = `正在載入 ${skill.id}「${skill.title}」…`;
  replaceWorkspace("正在載入…", element("p", { text: "從版本化靜態內容取得資料。" }));
  try {
    const mode = selectedMode();
    if (mode === "lecture") await renderLecture(skill, token);
    else if (mode === "practice") await renderPractice(skill, token);
    else await renderStimulus(skill, token);
    if (token === renderToken) status.textContent = `${skill.id}「${skill.title}」已載入；模式：${mode === "lecture" ? "講義" : mode === "practice" ? "技能練習" : "資料題組"}。`;
  } catch (error) {
    console.error(error);
    if (token === renderToken) replaceWorkspace("內容載入失敗",
      element("p", { text: `無法讀取靜態記錄：${error.message}` }),
      element("button", { type: "button", text: "重試", onclick: renderCurrent }));
    status.textContent = "靜態內容載入失敗；請檢查連線或離線儲存狀態。";
  }
}

function exportProgress() {
  const blob = new Blob([`${JSON.stringify(progress, null, 2)}\n`], { type: "application/json" });
  const link = element("a", { href: URL.createObjectURL(blob), download: "cap-r4-physics-chemistry-progress.json" });
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 0);
}

async function importProgress(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  if (file.size > 5_000_000) {
    status.textContent = "匯入失敗：檔案超過 5 MB，原進度未改動。";
    event.target.value = "";
    return;
  }
  let incoming;
  try { incoming = safeParse(await file.text()); } catch { incoming = null; }
  if (!validProgress(incoming)) {
    status.textContent = "匯入失敗：檔案不是理化 R4 進度格式，原進度未改動。";
    event.target.value = "";
    return;
  }
  localStorage.setItem(BACKUP_KEY, JSON.stringify({ schemaVersion: 1, reason: "before-import", r4Raw: localStorage.getItem(STORAGE_KEY) }));
  progress = incoming;
  saveProgress();
  status.textContent = "進度已匯入；匯入前資料已備份，沒有清除舊版鍵值。";
  event.target.value = "";
}

async function setupOffline() {
  if (!("serviceWorker" in navigator) || !/^https?:$/.test(location.protocol)) {
    $("#offlineStatus").textContent = "離線快取需由 HTTP/HTTPS 開啟；直接以 file: 開檔時不會啟用。";
    return;
  }
  try {
    const registration = await navigator.serviceWorker.register("service-worker.js", { scope: "./" });
    await navigator.serviceWorker.ready;
    const button = $("#cacheAll");
    button.disabled = false;
    button.addEventListener("click", () => {
      const worker = registration.active || registration.waiting || registration.installing;
      worker?.postMessage({ type: "CACHE_ALL" });
      button.disabled = true;
      $("#offlineStatus").textContent = "正在儲存完整靜態題庫…";
    });
    navigator.serviceWorker.addEventListener("message", (event) => {
      if (event.data?.type !== "CACHE_PROGRESS") return;
      const { done, total, failed } = event.data;
      $("#offlineStatus").textContent = done === total
        ? `離線儲存完成：${done - failed}/${total} 個檔案成功，${failed} 個失敗。`
        : `離線儲存進度 ${done}/${total}，失敗 ${failed}。`;
      if (done === total) button.disabled = false;
    });
  } catch (error) {
    console.error(error);
    $("#offlineStatus").textContent = `無法啟用離線快取：${error.message}`;
  }
}

async function start() {
  try {
    catalog = await fetchJson("runtime/content-catalog.json");
    if (catalog.schemaVersion !== "cap8-r4-static-runtime-catalog-v1" || catalog.subject !== SUBJECT
      || catalog.units.length !== 40 || catalog.skills.length !== 300) throw new Error("靜態 catalog 數量或版本不符");
    unitSelect.replaceChildren(...catalog.units.map((unit) => element("option", { value: unit.id, text: `${unit.id.slice(-3)} · ${unit.title}` })));
    populateSkills();
    unitSelect.disabled = false;
    skillSelect.disabled = false;
    unitSelect.addEventListener("change", () => { populateSkills(); renderCurrent(); });
    skillSelect.addEventListener("change", renderCurrent);
    document.querySelectorAll('input[name="mode"]').forEach((radio) => radio.addEventListener("change", renderCurrent));
    seedInput.addEventListener("change", renderCurrent);
    $("#exportProgress").addEventListener("click", exportProgress);
    $("#importProgress").addEventListener("change", importProgress);
    updateProgressSummary();
    await renderCurrent();
  } catch (error) {
    console.error(error);
    replaceWorkspace("無法開啟 R4 靜態題庫", element("p", { text: error.message }));
    status.textContent = "啟動失敗。";
  }
  setupOffline();
}

start();
