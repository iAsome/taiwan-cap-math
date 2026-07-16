const CATALOG_URL = "r4/runtime/catalog.json";
const MANIFEST_URL = "content-manifest-v4.json";
const CONTENT_VERSION = "4.0.0";
const STORAGE_KEY = "cap8.r4.biology.progress.v1";
const BACKUP_KEY = "cap8.r4.biology.legacyBackup.v1";
const RECOVERY_KEY = "cap8.r4.biology.invalidProgressBackup.v1";
const THEME_KEY = "cap8.r4.biology.theme.v1";
const SEED_KEY = "cap8.r4.biology.examSeed.v1";
const MASTERY_THRESHOLD = 0.8;
const REVIEW_INTERVAL_MS = 24 * 60 * 60 * 1000;
const LEGACY_COMPLETION_MAP = Object.freeze({
  1: ["BIO_R4_S017", "BIO_R4_S018", "BIO_R4_S019", "BIO_R4_S020", "BIO_R4_S022"],
  2: ["BIO_R4_S033", "BIO_R4_S034", "BIO_R4_S041", "BIO_R4_S042", "BIO_R4_S043"],
  3: ["BIO_R4_S165", "BIO_R4_S166", "BIO_R4_S167", "BIO_R4_S168", "BIO_R4_S172", "BIO_R4_S173", "BIO_R4_S174"],
  4: ["BIO_R4_S060", "BIO_R4_S061", "BIO_R4_S064"],
  5: ["BIO_R4_S151", "BIO_R4_S153", "BIO_R4_S154", "BIO_R4_S155"],
  6: ["BIO_R4_S049", "BIO_R4_S050", "BIO_R4_S051", "BIO_R4_S052", "BIO_R4_S053", "BIO_R4_S054", "BIO_R4_S055", "BIO_R4_S056"],
  7: ["BIO_R4_S065", "BIO_R4_S066", "BIO_R4_S067", "BIO_R4_S068"],
  8: ["BIO_R4_S057", "BIO_R4_S058", "BIO_R4_S059", "BIO_R4_S060", "BIO_R4_S061", "BIO_R4_S062", "BIO_R4_S063", "BIO_R4_S064"],
  9: ["BIO_R4_S073", "BIO_R4_S074", "BIO_R4_S075", "BIO_R4_S076", "BIO_R4_S077", "BIO_R4_S078", "BIO_R4_S079", "BIO_R4_S080"],
  10: ["BIO_R4_S081", "BIO_R4_S082", "BIO_R4_S083", "BIO_R4_S084", "BIO_R4_S085", "BIO_R4_S087", "BIO_R4_S088", "BIO_R4_S089", "BIO_R4_S090", "BIO_R4_S091", "BIO_R4_S092", "BIO_R4_S093", "BIO_R4_S094"],
  11: ["BIO_R4_S102", "BIO_R4_S103", "BIO_R4_S104", "BIO_R4_S105", "BIO_R4_S106", "BIO_R4_S107", "BIO_R4_S108"],
  12: ["BIO_R4_S123", "BIO_R4_S124", "BIO_R4_S125", "BIO_R4_S126", "BIO_R4_S127", "BIO_R4_S128", "BIO_R4_S130", "BIO_R4_S131", "BIO_R4_S132", "BIO_R4_S133", "BIO_R4_S134", "BIO_R4_S135", "BIO_R4_S136"],
  13: ["BIO_R4_S137", "BIO_R4_S138", "BIO_R4_S139", "BIO_R4_S144", "BIO_R4_S145", "BIO_R4_S146", "BIO_R4_S147", "BIO_R4_S148", "BIO_R4_S149", "BIO_R4_S150"],
  14: ["BIO_R4_S179", "BIO_R4_S180", "BIO_R4_S183", "BIO_R4_S186", "BIO_R4_S187", "BIO_R4_S188", "BIO_R4_S189", "BIO_R4_S190", "BIO_R4_S191", "BIO_R4_S193", "BIO_R4_S194", "BIO_R4_S195", "BIO_R4_S198"],
  15: ["BIO_R4_S155", "BIO_R4_S156", "BIO_R4_S183", "BIO_R4_S200", "BIO_R4_S201", "BIO_R4_S202", "BIO_R4_S203", "BIO_R4_S204", "BIO_R4_S205", "BIO_R4_S206"],
});

const view = document.querySelector("#view");
const status = document.querySelector("#status");
const navigation = document.querySelector("#unitNavigation");
const progressSummary = document.querySelector("#progressSummary");
const progressBar = document.querySelector("#progressBar");
const offlineButton = document.querySelector("#offlineButton");
const cache = new Map();
let catalog;
let progress;
let canPersistProgress = true;
let serviceWorkerRegistrationPromise = null;
offlineButton.disabled = true;

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function safeJson(raw, fallback) {
  try { return raw === null ? fallback : JSON.parse(raw); }
  catch { return fallback; }
}

function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function storeJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

function storageGet(key) {
  try { return localStorage.getItem(key); }
  catch { return null; }
}

function legacySnapshot() {
  try {
    return Object.fromEntries(Array.from({ length: localStorage.length }, (_, index) => localStorage.key(index))
      .filter((key) => key?.startsWith("capBio."))
      .sort()
      .map((key) => [key, localStorage.getItem(key)]));
  } catch {
    return {};
  }
}

function migrateLegacy() {
  if (!storageGet(BACKUP_KEY)) {
    const raw = legacySnapshot();
    if (!storeJson(BACKUP_KEY, { schemaVersion: 1, capturedAt: "2026-07-16", raw, preservedInPlace: true })) {
      storeJson(BACKUP_KEY, { schemaVersion: 1, capturedAt: "2026-07-16", rawKeys: Object.keys(raw), preservedInPlace: true, copySkippedBecauseStorageWasFull: true });
    }
  }
  const savedRaw = storageGet(STORAGE_KEY);
  const saved = safeJson(savedRaw, null);
  if (saved?.schemaVersion === 1 && Array.isArray(saved.completedSkills) && isRecord(saved.attempts)) return saved;
  if (savedRaw !== null) {
    const existingRecovery = safeJson(storageGet(RECOVERY_KEY), null);
    const alreadyPreserved = existingRecovery?.raw === savedRaw;
    if (!alreadyPreserved && (existingRecovery || !storeJson(RECOVERY_KEY, { schemaVersion: 1, capturedAt: "2026-07-16", raw: savedRaw }))) canPersistProgress = false;
  }
  const legacyCompleted = safeJson(storageGet("capBio.completed"), []);
  const legacyHistory = safeJson(storageGet("capBio.paperHistory"), []);
  const mappedCompletedSkills = Array.isArray(legacyCompleted)
    ? [...new Set(legacyCompleted.flatMap((id) => LEGACY_COMPLETION_MAP[String(id)] ?? []))].sort()
    : [];
  const initial = {
    schemaVersion: 1,
    contentVersion: CONTENT_VERSION,
    completedSkills: mappedCompletedSkills,
    attempts: {},
    legacy: {
      completed: Array.isArray(legacyCompleted) ? legacyCompleted : [],
      mappedCompletedSkills,
      paperHistoryStorageKey: "capBio.paperHistory",
      paperHistoryCount: Array.isArray(legacyHistory) ? legacyHistory.length : 0,
      lastSeed: storageGet("capBio.lastSeed"),
    },
  };
  if (canPersistProgress) storeJson(STORAGE_KEY, initial);
  return initial;
}

function normalizeProgress(value, validSkillIds) {
  return {
    ...value,
    contentVersion: CONTENT_VERSION,
    attempts: isRecord(value.attempts) ? value.attempts : {},
    completedSkills: [...new Set(value.completedSkills.filter((id) => validSkillIds.has(id)))].sort(),
    reviewQueue: Array.isArray(value.reviewQueue)
      ? value.reviewQueue.filter((item) => isRecord(item) && validSkillIds.has(item.skillId) && Array.isArray(item.questionIds))
      : [],
  };
}

function saveProgress() {
  if (!canPersistProgress || !storeJson(STORAGE_KEY, progress)) {
    status.className = "status error";
    status.textContent = "進度備份或儲存失敗；本次作答仍可使用，但重新載入後不會保留新進度。";
  }
  updateProgress();
}

function updateProgress() {
  const count = new Set(progress.completedSkills).size;
  progressSummary.textContent = `已完成 ${count} / ${catalog?.counts.skills ?? 220} 個技能`;
  progressBar.value = count;
}

async function fetchJson(url) {
  if (!cache.has(url)) {
    cache.set(url, fetch(url).then((response) => {
      if (!response.ok) throw new Error(`${url} 載入失敗（${response.status}）`);
      return response.json();
    }));
  }
  return cache.get(url);
}

function skillById(id) {
  return catalog.skills.find((skill) => skill.id === id);
}

function unitById(id) {
  return catalog.units.find((unit) => unit.unitId === id);
}

function currentRoute() {
  const params = new URLSearchParams(location.search);
  return {
    view: params.get("view") || "home",
    skill: params.get("skill") || catalog.skills[0].id,
    seed: params.get("seed") || storageGet(SEED_KEY) || storageGet("capBio.lastSeed") || "2026",
  };
}

function routeHref(targetView, skillId, extra = {}) {
  const params = new URLSearchParams({ view: targetView });
  if (skillId) params.set("skill", skillId);
  for (const [key, value] of Object.entries(extra)) params.set(key, value);
  return `?${params}`;
}

function incompletePrerequisites(skill) {
  const completed = new Set(progress.completedSkills);
  return skill.prerequisites.map(skillById).filter((item) => item && !completed.has(item.id));
}

function prerequisiteHtml(skill) {
  const missing = incompletePrerequisites(skill);
  if (!missing.length) return `<p class="path-status success">先備技能已完成，可以進入本技能練習。</p>`;
  return `<section class="path-status" aria-labelledby="prerequisiteHeading"><h2 id="prerequisiteHeading">先備補救</h2><p>先完成下列技能，再回來挑戰本技能。</p><ul>${missing.map((item) => `<li><a href="${routeHref("lecture", item.id)}">${escapeHtml(item.title)}</a></li>`).join("")}</ul></section>`;
}

function reviewForSkill(skillId) {
  return progress.reviewQueue.find((item) => item.skillId === skillId);
}

function tabs(skillId, active) {
  const items = [
    ["diagnostic", "診斷起點"],
    ["lecture", "完整講義"],
    ["practice", "技能練習"],
    ["stimulus", "資料題組"],
    ["review", "間隔複習"],
    ["exam", "全範圍練習"],
  ];
  return `<nav class="tabs" aria-label="學習模式">${items.map(([id, label]) => `<a class="tab" href="${routeHref(id, skillId)}"${id === active ? ' aria-current="page"' : ""}>${label}</a>`).join("")}</nav>`;
}

function renderNavigation(activeSkill) {
  navigation.innerHTML = catalog.units.map((unit) => {
    const skills = unit.skillIds.map(skillById);
    const expanded = skills.some((skill) => skill.id === activeSkill);
    return `<section class="unit-group">
      <button class="unit-button" type="button" aria-expanded="${expanded}" aria-controls="nav-${unit.unitId}">${escapeHtml(unit.title)}</button>
      <div class="skill-links" id="nav-${unit.unitId}"${expanded ? "" : " hidden"}>
        ${skills.map((skill) => `<a href="${routeHref("lecture", skill.id)}"${skill.id === activeSkill ? ' aria-current="page"' : ""}>${escapeHtml(skill.title)}</a>`).join("")}
      </div>
    </section>`;
  }).join("");
  for (const button of navigation.querySelectorAll(".unit-button")) {
    button.addEventListener("click", () => {
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      panel.hidden = expanded;
    });
  }
}

function sectionHeading(skill, description) {
  return `<header class="page-heading"><h1>${escapeHtml(skill.title)}</h1><p>${escapeHtml(description)}</p></header>`;
}

function tableHtml(data, caption = "題目資料表") {
  if (!data?.columns?.length || !Array.isArray(data.rows)) return "";
  return `<div class="figure-wrap"><table class="data-table"><caption>${escapeHtml(data.caption || caption)}</caption><thead><tr>${data.columns.map((column) => `<th scope="col">${escapeHtml(column)}</th>`).join("")}</tr></thead><tbody>${data.rows.map((row) => `<tr>${row.map((cell, index) => index === 0 ? `<th scope="row">${escapeHtml(cell)}</th>` : `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function genericContentHtml(content, fallback = null) {
  const chunks = [];
  let renderedTable = false;
  const addTable = (value) => {
    const html = tableHtml(value);
    if (!html) return;
    chunks.push(html);
    renderedTable = true;
  };
  if (content?.columns?.length && Array.isArray(content.rows)) addTable(content);
  for (const [key, value] of Object.entries(content ?? {})) {
    if (key === "title" || key === "columns" || key === "rows") continue;
    if (key === "data" || key === "table") { addTable(value); continue; }
    if (key === "visualNeed") continue;
    if (typeof value === "string") chunks.push(`<p>${escapeHtml(value)}</p>`);
    else if (Array.isArray(value)) chunks.push(`<ul>${value.map((item) => `<li>${escapeHtml(typeof item === "string" ? item : JSON.stringify(item))}</li>`).join("")}</ul>`);
    else if (value?.columns && value?.rows) addTable(value);
  }
  if (!renderedTable) addTable(fallback);
  return chunks.join("");
}

async function assetHtml(assetIds) {
  const items = [];
  for (const id of assetIds ?? []) {
    const metadata = await fetchJson(`r4/runtime/assets/${id}.json`);
    items.push(`<figure class="figure-wrap"><img src="${escapeHtml(metadata.path.replace(/^生物會考作戰室\//u, ""))}" alt="${escapeHtml(metadata.altText)}"><figcaption>${escapeHtml(metadata.caption)}</figcaption><details><summary>圖形文字說明</summary><p>${escapeHtml(metadata.longDescription)}</p>${tableHtml(metadata.dataFallback, `${metadata.caption}的資料替代`)}</details></figure>`);
  }
  return items.join("");
}

async function renderLecture(skill) {
  const lecture = await fetchJson(`r4/runtime/lectures/${skill.lectureId}.json`);
  view.innerHTML = `${sectionHeading(skill, "本技能依第四學習階段課綱編寫，包含基礎概念、例題、常見迷思與理解檢核。")} ${tabs(skill.id, "lecture")}
    <section class="band"><h2>學習目標</h2><ul>${lecture.objectives.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>
    ${lecture.sections.map((section) => `<section class="band"><h2>${escapeHtml(section.title)}</h2><p>${escapeHtml(section.content)}</p></section>`).join("")}
    <section class="band"><h2>逐步例題</h2>${lecture.workedExamples.map((example, index) => `<article class="example"><h3>例題 ${index + 1}</h3><p>${escapeHtml(example.prompt)}</p><ol>${example.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol><p class="answer-note"><strong>答案：</strong>${escapeHtml(example.answer)}<br>${escapeHtml(example.why)}</p></article>`).join("")}</section>
    <section class="band"><h2>常見迷思</h2><div class="section-grid">${lecture.misconceptions.map((item) => `<article class="misconception"><h3>${escapeHtml(item.belief)}</h3><p class="why-wrong">${escapeHtml(item.whyWrong)}</p><p>${escapeHtml(item.correction)}</p></article>`).join("")}</div></section>
    <section class="band"><h2>理解檢核</h2>${lecture.checks.map((item) => `<details class="example"><summary>${escapeHtml(item.prompt)}</summary><p><strong>${escapeHtml(item.answer)}</strong></p><p>${escapeHtml(item.reason)}</p></details>`).join("")}</section>
    <section class="band"><h2>下一步</h2>${prerequisiteHtml(skill)}<p><a class="command primary" href="${routeHref("practice", skill.id)}">進入技能練習並檢查達標</a></p></section>`;
  const assets = await assetHtml(lecture.assets);
  if (assets) lecture.sections[0] && view.querySelectorAll(".band")[1]?.insertAdjacentHTML("beforeend", assets);
}

function appendAttempt(attemptId, record) {
  const previous = progress.attempts[attemptId];
  const history = Array.isArray(previous) ? previous : previous ? [previous] : [];
  progress.attempts[attemptId] = [...history, record].slice(-20);
}

function updateReviewQueue(skillId, missedQuestions, mistakeTypes) {
  progress.reviewQueue = progress.reviewQueue.filter((item) => item.skillId !== skillId);
  if (!missedQuestions.length) return;
  progress.reviewQueue.push({
    skillId,
    questionIds: missedQuestions.map((question) => question.id),
    mistakeTypes,
    dueAt: new Date(Date.now() + REVIEW_INTERVAL_MS).toISOString(),
  });
}

function questionHtml(question, index) {
  return `<article class="question-box" data-question-id="${question.id}" data-skill-id="${escapeHtml(question.skillIds[0])}">
    <fieldset><legend>${index + 1}. ${escapeHtml(question.stem)}</legend><div class="choices">${question.options.map((option, optionIndex) => `<label class="choice"><input type="radio" name="answer-${escapeHtml(question.id)}" value="${optionIndex}"><span class="choice-label">${String.fromCharCode(65 + optionIndex)}</span><span>${escapeHtml(option)}</span></label>`).join("")}</div></fieldset>
    <div class="rationales" hidden></div>
  </article>`;
}

function bindQuestions(questions, attemptId, { skill = null, classifyForReview = false, onComplete = null } = {}) {
  for (const input of view.querySelectorAll('.choice input[type="radio"]')) {
    input.addEventListener("change", () => {
      input.closest(".question-box").querySelectorAll(".choice").forEach((item) => item.classList.toggle("selected", item.contains(input)));
    });
  }
  const submitButton = document.querySelector("#submitAnswers");
  submitButton.addEventListener("click", () => {
    submitButton.disabled = true;
    let score = 0;
    const answerRecords = [];
    const missedQuestions = [];
    const mistakeTypes = new Set();
    for (const question of questions) {
      const box = view.querySelector(`[data-question-id="${question.id}"]`);
      const selectedInput = box.querySelector('input[type="radio"]:checked');
      const selected = selectedInput ? Number(selectedInput.value) : undefined;
      if (selected === question.answerIndex) score += 1;
      box.querySelectorAll(".choice").forEach((choice) => {
        const input = choice.querySelector("input");
        const value = Number(input.value);
        choice.classList.toggle("correct", value === question.answerIndex);
        choice.classList.toggle("wrong", value === selected && value !== question.answerIndex);
        input.disabled = true;
      });
      answerRecords.push({ questionId: question.id, selectedIndex: selected ?? null, correct: selected === question.answerIndex });
      if (selected !== question.answerIndex) {
        missedQuestions.push(question);
        for (const label of selected === undefined ? ["未作答"] : question.misconceptionTargets?.length ? question.misconceptionTargets : ["題意與證據判讀"]) mistakeTypes.add(label);
      }
      const rationale = box.querySelector(".rationales");
      rationale.hidden = false;
      rationale.innerHTML = `<strong>${selected === question.answerIndex ? "答對" : `正確答案是 ${String.fromCharCode(65 + question.answerIndex)}`}</strong><ol>${question.optionRationales.map((item) => `<li>${String.fromCharCode(65 + item.optionIndex)}：${escapeHtml(item.reason)}</li>`).join("")}</ol><p><a href="${routeHref("lecture", question.skillIds[0])}">複習這題對應的技能講義</a></p>`;
    }
    const record = { score, total: questions.length, answeredAt: new Date().toISOString(), answers: answerRecords, mistakeTypes: [...mistakeTypes] };
    appendAttempt(attemptId, record);
    if (classifyForReview && skill) updateReviewQueue(skill.id, missedQuestions, [...mistakeTypes]);
    const completionHtml = onComplete?.({ ...record, missedQuestions }) ?? "";
    saveProgress();
    const result = document.querySelector("#result");
    result.innerHTML = `<strong>得分 ${score} / ${questions.length}</strong>${mistakeTypes.size ? `<span>建議複習：${[...mistakeTypes].map(escapeHtml).join("、")}</span>` : ""}${completionHtml}`;
    result.focus();
  });
}

async function renderDiagnostic(skill) {
  const questions = await Promise.all(skill.questionIds.slice(0, 3).map((id) => fetchJson(`r4/runtime/questions/${id}.json`)));
  view.innerHTML = `${sectionHeading(skill, "先用三題基礎題確認起點，再依結果補強先備技能或進入完整練習。")} ${tabs(skill.id, "diagnostic")}${prerequisiteHtml(skill)}${questions.map(questionHtml).join("")}<div class="exam-toolbar"><button class="command primary" id="submitAnswers" type="button">完成診斷</button><p class="score" id="result" tabindex="-1" aria-live="polite"></p></div>`;
  bindQuestions(questions, `diagnostic:${skill.id}`, {
    skill,
    classifyForReview: true,
    onComplete: ({ score, total }) => {
      const missing = incompletePrerequisites(skill);
      if (missing.length) return `<span>下一步：先完成上方列出的先備技能。</span>`;
      return score >= 2 ? `<span><a href="${routeHref("practice", skill.id)}">診斷通過，進入完整技能練習</a></span>` : `<span><a href="${routeHref("lecture", skill.id)}">先讀完整講義，再回來挑戰 ${total} 題診斷</a></span>`;
    },
  });
}

async function renderPractice(skill) {
  if (incompletePrerequisites(skill).length) {
    view.innerHTML = `${sectionHeading(skill, "完成先備技能後，再進入十二題完整練習。")} ${tabs(skill.id, "practice")}${prerequisiteHtml(skill)}`;
    return;
  }
  const questions = await Promise.all(skill.questionIds.map((id) => fetchJson(`r4/runtime/questions/${id}.json`)));
  const required = Math.ceil(questions.length * MASTERY_THRESHOLD);
  view.innerHTML = `${sectionHeading(skill, `十二題完整技能練習：答對至少 ${required} 題即達標，錯題會排入間隔複習。`)}${tabs(skill.id, "practice")}${questions.map(questionHtml).join("")}<div class="exam-toolbar"><button class="command primary" id="submitAnswers" type="button">交卷並看逐項解析</button><p class="score" id="result" tabindex="-1" aria-live="polite"></p></div>`;
  bindQuestions(questions, `practice:${skill.id}`, {
    skill,
    classifyForReview: true,
    onComplete: ({ score }) => {
      if (score < required) return `<span>尚未達標；請依解析複習後再試一次。</span>`;
      progress.completedSkills = [...new Set([...progress.completedSkills, skill.id])].sort();
      return `<span class="success">已達標並記錄完成。</span>`;
    },
  });
}

async function renderStimulus(skill) {
  const [stimulus, ...questions] = await Promise.all([
    fetchJson(`r4/runtime/stimuli/${skill.stimulusId}.json`),
    ...skill.stimulusQuestionIds.map((id) => fetchJson(`r4/runtime/questions/${id}.json`)),
  ]);
  const assets = await assetHtml(stimulus.assets);
  view.innerHTML = `${sectionHeading(skill, "一組原創資料情境，三題依序評量讀取、推論與遷移。")}${tabs(skill.id, "stimulus")}<article class="stimulus"><h2>${escapeHtml(stimulus.content.title || "資料題組")}</h2>${genericContentHtml(stimulus.content, stimulus.accessibility?.dataFallback)}${assets}</article>${questions.map(questionHtml).join("")}<div class="exam-toolbar"><button class="command primary" id="submitAnswers" type="button">交卷並看逐項解析</button><p class="score" id="result" tabindex="-1" aria-live="polite"></p></div>`;
  bindQuestions(questions, `stimulus:${skill.id}`);
}

async function renderReview(skill) {
  const review = reviewForSkill(skill.id);
  const heading = `${sectionHeading(skill, "重新作答先前錯題；答對後移出佇列，仍需加強的題目會在一天後再次出現。")} ${tabs(skill.id, "review")}`;
  if (!review) {
    view.innerHTML = `${heading}<section class="band"><h2>目前沒有待複習題目</h2><p><a href="${routeHref("diagnostic", skill.id)}">從診斷起點開始</a></p></section>`;
    return;
  }
  const dueAt = new Date(review.dueAt);
  if (Number.isFinite(dueAt.getTime()) && dueAt.getTime() > Date.now()) {
    view.innerHTML = `${heading}<section class="band"><h2>下一次複習</h2><p>預定於 ${escapeHtml(dueAt.toLocaleString("zh-TW"))} 開放。</p><p>等待期間可先回到<a href="${routeHref("lecture", skill.id)}">技能講義</a>。</p></section>`;
    return;
  }
  const allowedIds = new Set([...skill.questionIds, ...skill.stimulusQuestionIds]);
  const questionIds = review.questionIds.filter((id) => allowedIds.has(id));
  const questions = await Promise.all(questionIds.map((id) => fetchJson(`r4/runtime/questions/${id}.json`)));
  if (!questions.length) {
    progress.reviewQueue = progress.reviewQueue.filter((item) => item.skillId !== skill.id);
    saveProgress();
    view.innerHTML = `${heading}<section class="band"><h2>複習題已更新</h2><p><a href="${routeHref("diagnostic", skill.id)}">重新診斷本技能</a></p></section>`;
    return;
  }
  view.innerHTML = `${heading}${questions.map(questionHtml).join("")}<div class="exam-toolbar"><button class="command primary" id="submitAnswers" type="button">完成間隔複習</button><p class="score" id="result" tabindex="-1" aria-live="polite"></p></div>`;
  bindQuestions(questions, `review:${skill.id}`, {
    skill,
    classifyForReview: true,
    onComplete: ({ missedQuestions }) => missedQuestions.length ? `<span>未答對題目已排入下一次複習。</span>` : `<span class="success">本輪錯題已全部答對。</span>`,
  });
}

function seedNumber(value) {
  let hash = 2166136261;
  for (const char of String(value)) { hash ^= char.codePointAt(0); hash = Math.imul(hash, 16777619); }
  return hash >>> 0;
}

function seededOrder(values, seed) {
  let state = seedNumber(seed) || 1;
  const random = () => { state ^= state << 13; state ^= state >>> 17; state ^= state << 5; return (state >>> 0) / 4294967296; };
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

async function renderExam(skill, seed) {
  view.innerHTML = `<header class="page-heading"><h1>生物全範圍練習卷</h1><p>50 題涵蓋 30 個生物單元，不是正式會考自然科的完整模擬卷；自然科還包含理化與地球科學。相同種子碼會得到相同題序。</p></header>${tabs(skill.id, "exam")}<form class="exam-toolbar" id="examForm"><label>種子碼<input id="examSeed" value="${escapeHtml(seed)}" inputmode="numeric"></label><button class="command primary" type="submit">產生 50 題練習卷</button></form><div id="examPaper"></div>`;
  document.querySelector("#examForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const nextSeed = document.querySelector("#examSeed").value.trim() || "2026";
    try { localStorage.setItem(SEED_KEY, nextSeed); } catch { /* Preserve the exam even when storage is full. */ }
    const orderedUnits = seededOrder(catalog.units, `${nextSeed}:units`);
    const skillQuestionIds = orderedUnits.slice(0, 20).map((unit) => {
      const selectedSkill = seededOrder(unit.skillIds.map(skillById), `${nextSeed}:${unit.unitId}:skill`)[0];
      return seededOrder(selectedSkill.questionIds, `${nextSeed}:${selectedSkill.id}:question`)[0];
    });
    const stimulusSkills = orderedUnits.slice(20).map((unit) => seededOrder(unit.skillIds.map(skillById), `${nextSeed}:${unit.unitId}:stimulus`)[0]);
    const blocks = [];
    for (const id of skillQuestionIds) blocks.push({ type: "question", question: await fetchJson(`r4/runtime/questions/${id}.json`) });
    for (const item of stimulusSkills) {
      const stimulus = await fetchJson(`r4/runtime/stimuli/${item.stimulusId}.json`);
      const questions = await Promise.all(item.stimulusQuestionIds.map((id) => fetchJson(`r4/runtime/questions/${id}.json`)));
      blocks.push({ type: "stimulus", stimulus, questions, assets: await assetHtml(stimulus.assets) });
    }
    const allQuestions = blocks.flatMap((block) => block.type === "question" ? [block.question] : block.questions);
    let number = 0;
    let groupNumber = 0;
    document.querySelector("#examPaper").innerHTML = blocks.map((block) => {
      if (block.type === "question") return questionHtml(block.question, number++);
      const start = number;
      number += block.questions.length;
      groupNumber += 1;
      return `<article class="stimulus"><h2>題組 ${groupNumber}</h2>${genericContentHtml(block.stimulus.content, block.stimulus.accessibility?.dataFallback)}${block.assets}</article>${block.questions.map((question, offset) => questionHtml(question, start + offset)).join("")}`;
    }).join("") + `<div class="exam-toolbar"><button class="command primary" id="submitAnswers" type="button">交卷並看逐項解析</button><p class="score" id="result" tabindex="-1" aria-live="polite"></p></div>`;
    bindQuestions(allQuestions, `exam:all:${nextSeed}`);
    history.replaceState(null, "", routeHref("exam", skill.id, { seed: nextSeed }));
  });
}

function renderHome() {
  const dueReviews = progress.reviewQueue.filter((item) => new Date(item.dueAt).getTime() <= Date.now());
  view.innerHTML = `<header class="page-heading"><h1>從證據理解生命</h1><p>30 個主題、220 個核心技能。每個技能都有完整講義、12 題靜態練習與一組 3 題資料題；內容依第四學習階段課綱與 106–115 年官方會考自然科題型校準。</p></header>${dueReviews.length ? `<section class="band"><h2>今日間隔複習</h2><ul>${dueReviews.map((item) => `<li><a href="${routeHref("review", item.skillId)}">${escapeHtml(skillById(item.skillId)?.title ?? item.skillId)}</a></li>`).join("")}</ul></section>` : ""}<section class="dashboard-grid">${catalog.units.map((unit) => `<article class="dashboard-item"><h2>${escapeHtml(unit.title)}</h2><p>${unit.skillIds.length} 個技能</p><a href="${routeHref("diagnostic", unit.skillIds[0])}">從診斷開始</a></article>`).join("")}</section>`;
}

function renderOfficial() {
  const years = Array.from({ length: 10 }, (_, index) => 115 - index);
  view.innerHTML = `<header class="page-heading"><h1>歷屆自然科官方題本</h1><p>生物是自然科的一部分，以下保留完整官方 PDF 供下載與核對；本站不改寫這些檔案。</p></header><section class="band"><table class="data-table"><caption>106 至 115 年國中教育會考自然科</caption><thead><tr><th scope="col">年度</th><th scope="col">題本</th><th scope="col">答案</th></tr></thead><tbody>${years.map((year) => `<tr><th scope="row">${year}</th><td><a href="official-data/${year}/${year}-exam.pdf" download>下載自然科題本</a></td><td><a href="official-data/${year}/${year}-answer.pdf" download>下載官方答案</a></td></tr>`).join("")}</tbody></table><p><a href="https://cap.rcpet.edu.tw/examination.html" rel="noreferrer">國中教育會考官方歷屆試題頁</a></p></section>`;
}

async function offlineUnit(skill) {
  if (!("caches" in window) || !("serviceWorker" in navigator)) throw new Error("此瀏覽器不支援離線快取");
  const registered = await serviceWorkerRegistrationPromise;
  if (!registered) throw new Error("離線服務無法啟用，請重新載入後再試");
  const registration = await Promise.race([
    navigator.serviceWorker.ready,
    new Promise((_, reject) => setTimeout(() => reject(new Error("離線服務尚未就緒，請稍後再試")), 10_000)),
  ]);
  if (!registration.active) throw new Error("離線服務尚未就緒，請稍後再試");
  const unit = unitById(skill.unitId);
  const skills = unit.skillIds.map(skillById);
  const urls = ["./", MANIFEST_URL, CATALOG_URL, "r4/ui/app.js?v=biology-r4-1", "r4/ui/styles.css?v=biology-r4-1", "sw.js"];
  const assetIds = new Set();
  for (const item of skills) {
    const lectureUrl = `r4/runtime/lectures/${item.lectureId}.json`;
    const stimulusUrl = `r4/runtime/stimuli/${item.stimulusId}.json`;
    const [lecture, stimulus] = await Promise.all([fetchJson(lectureUrl), fetchJson(stimulusUrl)]);
    urls.push(lectureUrl, stimulusUrl);
    for (const id of [...(lecture.assets ?? []), ...(stimulus.assets ?? [])]) assetIds.add(id);
    urls.push(...[...item.questionIds, ...item.stimulusQuestionIds].map((id) => `r4/runtime/questions/${id}.json`));
  }
  for (const id of assetIds) {
    const metadataUrl = `r4/runtime/assets/${id}.json`;
    const metadata = await fetchJson(metadataUrl);
    urls.push(metadataUrl, metadata.path.replace(/^生物會考作戰室\//u, ""));
  }
  const store = await caches.open(`cap8-r4-biology-content-${CONTENT_VERSION.replaceAll(".", "-")}`);
  await store.addAll([...new Set(urls)]);
  return unit.title;
}

async function render() {
  const route = currentRoute();
  const skill = skillById(route.skill) ?? catalog.skills[0];
  renderNavigation(skill.id);
  status.className = "status";
  status.textContent = "";
  if (route.view === "home") renderHome();
  else if (route.view === "official") renderOfficial();
  else if (route.view === "diagnostic") await renderDiagnostic(skill);
  else if (route.view === "lecture") await renderLecture(skill);
  else if (route.view === "practice") await renderPractice(skill);
  else if (route.view === "stimulus") await renderStimulus(skill);
  else if (route.view === "review") await renderReview(skill);
  else if (route.view === "exam") await renderExam(skill, route.seed);
  else renderHome();
  const pageTitle = route.view === "home" ? "生物會考作戰室" : route.view === "official" ? "歷屆自然科官方題本" : route.view === "exam" ? "生物全範圍練習卷" : skill.title;
  document.title = `${pageTitle} | 生物會考作戰室`;
  const unitRoute = ["diagnostic", "lecture", "practice", "stimulus", "review"].includes(route.view);
  const offlineAvailable = unitRoute && "caches" in window && "serviceWorker" in navigator;
  offlineButton.disabled = !offlineAvailable;
  offlineButton.textContent = unitRoute ? "下載本單元" : "請先進入單元";
  offlineButton.setAttribute("aria-label", offlineAvailable ? `下載「${unitById(skill.unitId).title}」供離線使用` : unitRoute ? "此瀏覽器不支援離線下載" : "請先進入單元後再下載離線內容");
}

async function start() {
  progress = migrateLegacy();
  if (storageGet(SEED_KEY) === null) {
    const legacySeed = storageGet("capBio.lastSeed");
    if (legacySeed !== null) try { localStorage.setItem(SEED_KEY, legacySeed); } catch { /* The route can still use the legacy value in memory. */ }
  }
  const storedTheme = storageGet(THEME_KEY) ?? (storageGet("capBio.dark") === "1" ? "dark" : "light");
  document.body.classList.toggle("dark", storedTheme === "dark");
  document.querySelector("#themeButton").setAttribute("aria-pressed", String(storedTheme === "dark"));
  const [manifest, nextCatalog] = await Promise.all([fetchJson(MANIFEST_URL), fetchJson(CATALOG_URL)]);
  if (manifest.schemaVersion !== "cap8-content-manifest-v4" || manifest.subjectId !== "biology" || manifest.contentVersion !== CONTENT_VERSION || manifest.contentVersion !== nextCatalog.contentVersion || nextCatalog.schemaVersion !== "cap8-r4-biology-catalog-v1") {
    throw new Error("生物內容版本或清單不一致，已停止載入");
  }
  for (const key of ["skills", "lectures", "skillQuestions", "stimuli", "stimulusQuestions", "assets"]) {
    if (manifest.counts[key] !== nextCatalog.counts[key]) throw new Error(`生物內容數量不一致：${key}`);
  }
  catalog = nextCatalog;
  progress = normalizeProgress(progress, new Set(catalog.skills.map((skill) => skill.id)));
  if (canPersistProgress && !storeJson(STORAGE_KEY, progress)) canPersistProgress = false;
  updateProgress();
  if ("serviceWorker" in navigator) {
    serviceWorkerRegistrationPromise = navigator.serviceWorker.register("sw.js", { scope: "./" }).catch((error) => {
      console.error(error);
      return null;
    });
  }
  await render();
}

document.querySelector("#themeButton").addEventListener("click", () => {
  const dark = !document.body.classList.contains("dark");
  document.body.classList.toggle("dark", dark);
  document.querySelector("#themeButton").setAttribute("aria-pressed", String(dark));
  try { localStorage.setItem(THEME_KEY, dark ? "dark" : "light"); } catch { /* Theme still applies for this page view. */ }
});

offlineButton.addEventListener("click", async () => {
  try {
    const skill = skillById(currentRoute().skill) ?? catalog.skills[0];
    status.textContent = "正在下載本單元的靜態內容";
    const title = await offlineUnit(skill);
    status.textContent = `${title}已可離線使用`;
  } catch (error) {
    status.className = "status error";
    status.textContent = error.message;
  }
});

window.addEventListener("popstate", () => render().catch(showError));

function showError(error) {
  console.error(error);
  status.className = "status error";
  status.textContent = `內容載入失敗：${error.message}`;
}

start().catch(showError);
