import {
  HISTORY_STORAGE_KEY,
  cacheAllHistoryContent,
  createAssessment,
  loadHistoryIndex,
  loadRecords,
  migrateHistoryProgress,
  normalizeHistoryProgress,
} from "./runtime.js";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
let index;
let currentQuestions = [];
let currentStimuli = new Map();
let currentAssets = new Map();
let lectureRequest = 0;
let toastTimer;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/gu, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function readProgress() {
  try { return normalizeHistoryProgress(JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY))); }
  catch { return normalizeHistoryProgress(null); }
}

function writeProgress(value) {
  try { localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(normalizeHistoryProgress(value))); return true; }
  catch { toast("本機儲存空間不足，這次進度未寫入；舊資料沒有被刪除。"); return false; }
}

function toast(message) {
  const node = $("#toast");
  node.textContent = message;
  node.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => node.classList.remove("show"), 2400);
}

function showView(id, focus = true) {
  $$(".view").forEach((view) => { view.hidden = view.id !== id; });
  $$('[data-view]').forEach((button) => button.setAttribute("aria-current", button.dataset.view === id ? "page" : "false"));
  if (id === "progress") renderProgress();
  if (id === "lecture" && $("#lectureSelect").value !== $("#lectureContent").dataset.skillId) void renderLecture($("#lectureSelect").value);
  if (focus) $("#main").focus();
}

function renderOverview() {
  const pairs = [["技能", index.counts.skills], ["講義", index.counts.lectures], ["一般題", index.counts.skillQuestions], ["題組", index.counts.stimuli], ["題組題", index.counts.stimulusQuestions], ["官方校準案例", index.officialCalibration.allRelevantItems]];
  $("#counts").innerHTML = pairs.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${value.toLocaleString("zh-TW")}</dd></div>`).join("");
  $("#unitGrid").innerHTML = index.units.map((unit) => `<button type="button" data-unit="${unit.id}"><span>${escapeHtml(unit.id.slice(-2))}</span><strong>${escapeHtml(unit.title)}</strong><small>${unit.skillIds.length} 個技能</small></button>`).join("");
  $$('[data-unit]').forEach((button) => button.addEventListener("click", () => {
    const firstSkill = index.units.find((unit) => unit.id === button.dataset.unit).skillIds[0];
    $("#lectureSelect").value = firstSkill;
    showView("lecture");
  }));
}

function skillOptionsHtml() {
  return index.units.map((unit) => `<optgroup label="第 ${Number(unit.id.slice(-2))} 單元　${escapeHtml(unit.title)}">${unit.skillIds.map((skillId) => {
    const skill = index.skills.find((item) => item.id === skillId);
    return `<option value="${skillId}">${escapeHtml(skill.title)}</option>`;
  }).join("")}</optgroup>`).join("");
}

function renderArchive() {
  $("#archiveGrid").innerHTML = index.officialArchives.map((item) => `<article><h2>${item.year} 年</h2><p>官方社會科題本</p><div><a href="${item.paper}" target="_blank" rel="noopener">題本 PDF</a><a href="${item.answer}" target="_blank" rel="noopener">答案</a><a href="${item.guide}" target="_blank" rel="noopener">試題說明</a><a href="${item.officialPage}" target="_blank" rel="noopener">官方頁面</a></div></article>`).join("");
}

async function renderLecture(skillId) {
  if (!skillId) return;
  const request = ++lectureRequest;
  const host = $("#lectureContent");
  host.dataset.skillId = skillId;
  host.setAttribute("aria-busy", "true");
  host.innerHTML = '<p class="inline-status">正在載入講義…</p>';
  try {
    const descriptor = index.lectures.find((item) => item.skillId === skillId);
    const skill = index.skills.find((item) => item.id === skillId);
    const unit = index.units.find((item) => item.skillIds.includes(skillId));
    if (!descriptor || !skill || !unit) throw new Error("索引缺少這項講義資料");
    const [lecture] = await loadRecords(index, [descriptor.id]);
    const lectureAssets = new Map((await loadRecords(index, lecture.assets ?? [])).map((asset) => [asset.id, asset]));
    if (request !== lectureRequest) return;
    const progress = readProgress();
    const complete = progress.completedSkills.includes(skillId);
    const prerequisites = lecture.prerequisites.map((id) => {
      const prerequisite = index.skills.find((item) => item.id === id);
      return `<li>${escapeHtml(prerequisite?.title ?? id)}：${progress.completedSkills.includes(id) ? "已完成" : "尚未完成"}</li>`;
    }).join("");
    host.innerHTML = `
      <header><p>第 ${Number(unit.id.slice(-2))} 單元</p><h2>${escapeHtml(skill.title)}</h2></header>
      ${prerequisites ? `<section><h3>先備技能</h3><ul>${prerequisites}</ul></section>` : ""}
      <section><h3>學習目標</h3><ul>${lecture.objectives.map((value) => `<li>${escapeHtml(value)}</li>`).join("")}</ul></section>
      ${lecture.assets?.map((id) => assetHtml(lectureAssets.get(id))).join("") ?? ""}
      ${lecture.sections.map((section) => `<section><h3>${escapeHtml(section.title)}</h3><p>${escapeHtml(section.content)}</p></section>`).join("")}
      <section><h3>例題拆解</h3>${lecture.workedExamples.map((example) => `<article class="example"><h4>${escapeHtml(example.prompt)}</h4><ol>${example.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol><p><strong>答案：</strong>${escapeHtml(example.answer)}</p><p>${escapeHtml(example.why)}</p></article>`).join("")}</section>
      <section><h3>常見誤會</h3>${lecture.misconceptions.map((item) => `<article class="misconception"><h4>${escapeHtml(item.belief)}</h4><p>${escapeHtml(item.whyWrong)}</p><p><strong>修正：</strong>${escapeHtml(item.correction)}</p></article>`).join("")}</section>
      <section><h3>自我檢核</h3>${lecture.checks.map((check) => `<article class="example self-check"><h4>${escapeHtml(check.prompt)}</h4><details><summary>查看答案與理由</summary><p><strong>答案：</strong>${escapeHtml(check.answer)}</p><p>${escapeHtml(check.reason)}</p></details></article>`).join("")}</section>
      <button type="button" id="completeSkill" aria-pressed="${complete}">${complete ? "取消完成標記" : "標記為已完成"}</button>`;
    $("#completeSkill").addEventListener("click", (event) => {
      const next = readProgress();
      const set = new Set(next.completedSkills);
      set.has(skillId) ? set.delete(skillId) : set.add(skillId);
      next.completedSkills = [...set].sort();
      if (!writeProgress(next)) return;
      const nowComplete = set.has(skillId);
      event.currentTarget.setAttribute("aria-pressed", String(nowComplete));
      event.currentTarget.textContent = nowComplete ? "取消完成標記" : "標記為已完成";
      toast(nowComplete ? "已標記為完成" : "已取消完成標記");
    });
  } catch (error) {
    if (request !== lectureRequest) return;
    delete host.dataset.skillId;
    host.innerHTML = `<p class="inline-status error" role="alert">講義載入失敗：${escapeHtml(error instanceof Error ? error.message : error)}</p>`;
  } finally {
    if (request === lectureRequest) host.setAttribute("aria-busy", "false");
  }
}

function assetHtml(asset) {
  if (!asset) throw new Error("內容引用了索引中不存在的圖表資產");
  const descriptor = index.assets.find((item) => item.id === asset.id);
  if (!descriptor) throw new Error(`索引缺少圖表資產 ${asset.id}`);
  const fallback = asset.dataFallback;
  return `<figure class="asset"><img src="${escapeHtml(descriptor.filePath)}" alt="${escapeHtml(asset.altText)}"><figcaption>${escapeHtml(asset.caption)}</figcaption><details><summary>圖形文字說明與資料表</summary><p>${escapeHtml(asset.longDescription)}</p><table><caption>${escapeHtml(fallback.summary)}</caption><thead><tr>${fallback.columns.map((column) => `<th scope="col">${escapeHtml(column)}</th>`).join("")}</tr></thead><tbody>${fallback.rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></details></figure>`;
}

function stimulusBlockHtml(block) {
  if (typeof block === "string") return `<p>${escapeHtml(block)}</p>`;
  if (block && typeof block === "object" && typeof block.text === "string") {
    return `<article class="source-block">${block.heading ? `<h4>${escapeHtml(block.heading)}</h4>` : ""}<p>${escapeHtml(block.text)}</p></article>`;
  }
  throw new Error("題組含有無法顯示的資料區塊");
}

function stimulusHtml(stimulus) {
  const content = stimulus.content;
  const blocks = Array.isArray(content.blocks) ? content.blocks : [content.body ?? content.text ?? ""];
  return `<section class="stimulus" aria-label="${escapeHtml(content.label ?? "共用資料")}"><h3>${escapeHtml(content.label ?? "共用資料")}</h3>${blocks.map(stimulusBlockHtml).join("")}${stimulus.assets.map((id) => assetHtml(currentAssets.get(id))).join("")}${content.sourceNote ? `<small>${escapeHtml(content.sourceNote)}</small>` : ""}</section>`;
}

function renderPaper(seed) {
  let lastStimulusId = null;
  const questionsHtml = currentQuestions.map((question, indexValue) => {
    const stimulus = question.stimulusId ? currentStimuli.get(question.stimulusId) : null;
    const passage = question.stimulusId && question.stimulusId !== lastStimulusId ? stimulusHtml(stimulus) : "";
    const stimulusAssetIds = new Set(stimulus?.assets ?? []);
    const questionAssets = (question.assets ?? []).filter((id) => !stimulusAssetIds.has(id)).map((id) => assetHtml(currentAssets.get(id))).join("");
    lastStimulusId = question.stimulusId;
    return `${passage}${questionAssets}<fieldset data-question="${question.id}"><legend><span>${indexValue + 1}.</span> ${escapeHtml(question.stem)}</legend>${question.options.map((option, optionIndex) => `<label><input type="radio" name="q${indexValue}" value="${optionIndex}"><span>${String.fromCharCode(65 + optionIndex)}. ${escapeHtml(option)}</span></label>`).join("")}<div class="explanation" hidden></div></fieldset>`;
  }).join("");
  const scope = $("#practiceUnit").selectedOptions[0]?.textContent ?? "全部單元";
  $("#paper").innerHTML = `<header class="paper-header"><h2>歷史練習</h2><p>範圍：${escapeHtml(scope)}　種子碼：${escapeHtml(seed)}　共 ${currentQuestions.length} 題</p></header>${questionsHtml}`;
  $("#paper").dataset.seed = seed;
  $("#paper").dataset.submitted = "false";
  $("#paper").hidden = false;
  $("#paperActions").hidden = false;
  $("#submitButton").disabled = false;
  $("#result").textContent = "";
  $("#result").removeAttribute("role");
  $("#result").hidden = true;
  $("#paper").focus();
}

async function generatePractice(event) {
  event.preventDefault();
  const submitter = event.submitter;
  if (submitter) submitter.disabled = true;
  const seed = $("#seedInput").value.trim();
  $("#paper").hidden = true;
  $("#paperActions").hidden = true;
  $("#result").hidden = true;
  try {
    const unit = index.units.find((item) => item.id === $("#practiceUnit").value);
    const assessment = createAssessment(index, {
      seed,
      skillIds: unit?.skillIds ?? [],
      skillQuestionCount: Number($("#questionCount").value),
      stimulusSetCount: Number($("#stimulusCount").value),
    });
    currentQuestions = await loadRecords(index, assessment.questionIds);
    currentStimuli = new Map((await loadRecords(index, assessment.stimulusIds)).map((stimulus) => [stimulus.id, stimulus]));
    const assetIds = [...new Set([...currentQuestions, ...currentStimuli.values()].flatMap((record) => record.assets ?? []))];
    currentAssets = new Map((await loadRecords(index, assetIds)).map((asset) => [asset.id, asset]));
    renderPaper(seed);
  } catch (error) {
    $("#result").hidden = false;
    $("#result").setAttribute("role", "alert");
    $("#result").textContent = `練習載入失敗：${error instanceof Error ? error.message : error}`;
  } finally {
    if (submitter) submitter.disabled = false;
  }
}

function submitPractice() {
  if ($("#paper").dataset.submitted === "true") return;
  const data = new FormData($("#paper"));
  const answers = currentQuestions.map((_, questionIndex) => {
    const raw = data.get(`q${questionIndex}`);
    return raw === null ? -1 : Number(raw);
  });
  const score = answers.filter((answer, questionIndex) => answer === currentQuestions[questionIndex].answerIndex).length;
  currentQuestions.forEach((question, questionIndex) => {
    const host = $(`[data-question="${question.id}"] .explanation`);
    host.hidden = false;
    host.innerHTML = `<strong>${answers[questionIndex] === question.answerIndex ? "答對" : `正確答案：${String.fromCharCode(65 + question.answerIndex)}`}</strong>${question.optionRationales.map((item) => `<p>${String.fromCharCode(65 + item.optionIndex)}：${escapeHtml(item.reason)}</p>`).join("")}<button type="button" data-review-skill="${question.skillIds[0]}">回到這題的講義</button>`;
  });
  $$('[data-review-skill]', $("#paper")).forEach((button) => button.addEventListener("click", () => {
    $("#lectureSelect").value = button.dataset.reviewSkill;
    showView("lecture");
  }));
  const progress = readProgress();
  progress.attempts.unshift({ seed: $("#paper").dataset.seed, score, total: currentQuestions.length, completedAt: new Date().toISOString() });
  progress.attempts = progress.attempts.slice(0, 50);
  writeProgress(progress);
  $("#paper").dataset.submitted = "true";
  $$('#paper input[type="radio"]').forEach((input) => { input.disabled = true; });
  $("#submitButton").disabled = true;
  $("#result").removeAttribute("role");
  $("#result").hidden = false;
  $("#result").textContent = `本次答對 ${score}／${currentQuestions.length} 題，未作答 ${answers.filter((answer) => answer < 0).length} 題。`;
}

function renderProgress() {
  const progress = readProgress();
  const unmapped = Array.isArray(progress.migration?.unmappedCompleted) ? progress.migration.unmappedCompleted.length : 0;
  $("#progressContent").innerHTML = `<p>已完成技能：<strong>${progress.completedSkills.length}／${index.counts.skills}</strong></p>${unmapped ? `<p class="notice">舊版 ${unmapped} 個完成標記已保留；因新舊單元劃分不同，未自動換算為技能。</p>` : ""}<h2>最近練習</h2>${progress.attempts.length ? `<ol>${progress.attempts.map((attempt) => `<li>種子 ${escapeHtml(attempt.seed)}：${escapeHtml(attempt.score)}／${escapeHtml(attempt.total)}</li>`).join("")}</ol>` : "<p>尚無練習紀錄。</p>"}`;
}

async function start() {
  const migration = migrateHistoryProgress(localStorage);
  if (migration.status === "backup-failed") toast("舊版資料仍原封不動保留，但空間不足，暫時無法建立遷移備份。");
  if (migration.status === "progress-write-failed") toast("舊版備份已建立，但空間不足，這次無法寫入新版進度。");
  index = await loadHistoryIndex();
  $("#lectureSelect").innerHTML = skillOptionsHtml();
  $("#practiceUnit").innerHTML = `<option value="">全部單元</option>${index.units.map((unit) => `<option value="${unit.id}">第 ${Number(unit.id.slice(-2))} 單元　${escapeHtml(unit.title)}</option>`).join("")}`;
  $("#lectureSelect").addEventListener("change", (event) => { void renderLecture(event.target.value); });
  renderOverview();
  renderArchive();
  $("#loading").hidden = true;
  showView("overview", false);
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      $("#offlineButton").disabled = true;
      $("#offlineButton").textContent = "離線功能無法啟用";
      toast("離線功能啟用失敗；線上內容仍可使用。");
    });
  } else {
    $("#offlineButton").disabled = true;
    $("#offlineButton").textContent = "此瀏覽器不支援離線功能";
  }
}

$$('[data-view]').forEach((button) => button.addEventListener("click", () => showView(button.dataset.view)));
$("#practiceForm").addEventListener("submit", generatePractice);
$("#submitButton").addEventListener("click", submitPractice);
$("#printButton").addEventListener("click", () => window.print());
$("#offlineButton").addEventListener("click", async () => {
  const button = $("#offlineButton");
  button.disabled = true;
  try {
    await Promise.race([
      navigator.serviceWorker.ready,
      new Promise((_, reject) => setTimeout(() => reject(new Error("離線服務啟用逾時，請重新整理後再試。")), 10_000)),
    ]);
    const count = await cacheAllHistoryContent(index, (done, total) => { button.textContent = `下載中 ${done}／${total}`; });
    toast(`已快取 ${count} 個歷史內容檔案`);
  } catch (error) { toast(`離線內容下載失敗：${error instanceof Error ? error.message : error}`); }
  finally { button.disabled = false; button.textContent = "下載完整離線內容"; }
});

start().catch((error) => {
  $("#loading").setAttribute("role", "alert");
  $("#loading").textContent = `載入失敗：${error instanceof Error ? error.message : error}`;
});
