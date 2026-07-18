import { createExam, SUBJECT_LABELS } from "./exam-engine.mjs";
import { migrateStorage, recordAttempt, saveProgress } from "./migration.mjs";

const $ = (selector) => document.querySelector(selector);
const setupForm = $("#setupForm");
const setupStatus = $("#setupStatus");
const examShell = $("#examShell");
const examPaper = $("#examPaper");
const resultShell = $("#resultShell");
const resumeButton = $("#resumeButton");
const timer = $("#timer");

let catalog;
let progress;
let currentExam;
let answers = {};
let remainingSeconds = 70 * 60;
let timerHandle;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function renderTable(table, label) {
  if (!table?.columns || !table?.rows) return "";
  return `<div class="table-wrap" role="region" aria-label="${escapeHtml(label || "資料表")}" tabindex="0"><table>${table.caption ? `<caption>${escapeHtml(table.caption)}</caption>` : ""}<thead><tr>${table.columns.map((column) => `<th scope="col">${escapeHtml(column)}</th>`).join("")}</tr></thead><tbody>${table.rows.map((row) => `<tr>${row.map((cell, index) => index ? `<td>${escapeHtml(cell)}</td>` : `<th scope="row">${escapeHtml(cell)}</th>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function renderAsset(asset) {
  if (!asset) return "";
  return `<figure class="science-figure">
    <img src="${escapeHtml(asset.runtimePath)}" alt="${escapeHtml(asset.altText)}">
    <figcaption>${escapeHtml(asset.caption)}</figcaption>
    <details><summary>圖形文字與資料說明</summary><p>${escapeHtml(asset.longDescription)}</p>${renderTable(asset.dataFallback, `${asset.caption}替代資料`)}</details>
  </figure>`;
}

function stimulusParts(stimulus) {
  const content = stimulus?.content || {};
  return {
    title: stimulus?.title || content.title || "題組資料",
    body: stimulus?.body || content.text || content.scenario || "",
    guide: content.readingGuide || content.caution || "",
    table: stimulus?.dataTable || content.table || stimulus?.accessibility?.dataFallback,
    assetIds: stimulus?.assetIds || stimulus?.assets || [],
  };
}

function renderStimulus(stimulus, groupNumber) {
  const parts = stimulusParts(stimulus);
  const assetMap = new Map(catalog.assets.map((asset) => [asset.id, asset]));
  return `<section class="stimulus" aria-labelledby="stimulus-${escapeHtml(stimulus.id)}">
    <p class="group-label">題組 ${groupNumber}</p>
    <h2 id="stimulus-${escapeHtml(stimulus.id)}">${escapeHtml(parts.title)}</h2>
    ${parts.body ? `<p>${escapeHtml(parts.body)}</p>` : ""}
    ${parts.assetIds.map((id) => renderAsset(assetMap.get(id))).join("")}
    ${renderTable(parts.table, parts.title)}
    ${parts.guide ? `<p class="reading-guide">${escapeHtml(parts.guide)}</p>` : ""}
  </section>`;
}

function remediationHref(subject, skillId) {
  if (subject === "biology") return `../生物會考作戰室/r4/index.html?view=lecture&skill=${encodeURIComponent(skillId)}`;
  if (subject === "physics_chemistry") return "../理化會考作戰室/r4/index.html";
  return "../地科會考作戰室/r4/index.html";
}

function renderQuestion(entry) {
  const question = entry.question;
  const skill = catalog.skills.find((item) => item.id === question.skillIds[0]);
  const assetMap = new Map(catalog.assets.map((asset) => [asset.id, asset]));
  const directAssets = question.stimulusId ? [] : (question.assets || []);
  return `<article class="question" id="question-${entry.number}" data-question-id="${escapeHtml(question.id)}">
    <fieldset>
      <legend><span class="question-number">${entry.number}</span><span>${escapeHtml(question.stem)}</span></legend>
      <p class="question-meta">${escapeHtml(SUBJECT_LABELS[entry.subject])} · ${escapeHtml(skill?.title || question.skillIds[0])}</p>
      ${directAssets.map((id) => renderAsset(assetMap.get(id))).join("")}
      <div class="options">${question.options.map((option, index) => `<label class="option"><input type="radio" name="answer-${escapeHtml(question.id)}" value="${index}"><span class="option-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(option)}</span></label>`).join("")}</div>
    </fieldset>
  </article>`;
}

function updateProgressText() {
  const answered = Object.keys(answers).filter((id) => answers[id] !== undefined).length;
  $("#progressText").textContent = `已答 ${answered} 題，共 ${currentExam.questionCount} 題`;
}

function renderExam() {
  const stimuli = new Map(catalog.stimuli.map((stimulus) => [stimulus.id, stimulus]));
  let previousStimulus = null;
  let groupNumber = 0;
  examPaper.innerHTML = currentExam.entries.map((entry) => {
    const stimulusId = entry.question.stimulusId;
    let block = "";
    if (stimulusId && stimulusId !== previousStimulus) {
      groupNumber += 1;
      block = renderStimulus(stimuli.get(stimulusId), groupNumber);
    }
    previousStimulus = stimulusId || null;
    return block + renderQuestion(entry);
  }).join("");

  const jump = $("#jumpSelect");
  jump.replaceChildren(...currentExam.entries.map((entry) => new Option(`${entry.number}. ${SUBJECT_LABELS[entry.subject]}`, String(entry.number))));
  $("#subjectCounts").textContent = Object.entries(currentExam.quotas).map(([subject, count]) => `${SUBJECT_LABELS[subject]} ${count}`).join(" · ");
  for (const [questionId, answer] of Object.entries(answers)) {
    const input = examPaper.querySelector(`input[name="answer-${CSS.escape(questionId)}"][value="${answer}"]`);
    if (input) input.checked = true;
  }
  updateProgressText();
}

function saveActiveSession() {
  if (!currentExam) return;
  progress.activeSession = {
    seed: currentExam.seed,
    count: currentExam.questionCount,
    answers,
    remainingSeconds,
  };
  saveProgress(progress);
}

function formatTime(seconds) {
  const minutes = Math.floor(Math.max(0, seconds) / 60);
  const remainder = Math.max(0, seconds) % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
}

function startTimer() {
  clearInterval(timerHandle);
  timer.textContent = formatTime(remainingSeconds);
  timer.dateTime = `PT${remainingSeconds}S`;
  timerHandle = setInterval(() => {
    remainingSeconds -= 1;
    timer.textContent = formatTime(remainingSeconds);
    timer.dateTime = `PT${Math.max(0, remainingSeconds)}S`;
    if (remainingSeconds % 30 === 0) saveActiveSession();
    if (remainingSeconds <= 0) submitCurrentExam();
  }, 1000);
}

function validSession(session) {
  return session && typeof session.seed === "string" && Number.isInteger(session.count)
    && session.count >= 45 && session.count <= 55 && session.answers && typeof session.answers === "object";
}

function beginExam(seed, count, restored = null) {
  currentExam = createExam(catalog, { seed, count });
  const questionIds = new Set(currentExam.entries.map((entry) => entry.question.id));
  answers = Object.fromEntries(Object.entries(restored?.answers || {}).filter(([id, answer]) => questionIds.has(id) && Number.isInteger(answer) && answer >= 0 && answer < 4));
  remainingSeconds = Number.isInteger(restored?.remainingSeconds) ? Math.min(70 * 60, Math.max(1, restored.remainingSeconds)) : 70 * 60;
  setupForm.closest("section").hidden = true;
  resultShell.hidden = true;
  examShell.hidden = false;
  renderExam();
  saveActiveSession();
  startTimer();
  const params = new URLSearchParams({ seed: currentExam.seed, count: String(currentExam.questionCount) });
  history.replaceState(null, "", `?${params}`);
  $("#question-1").scrollIntoView({ block: "start" });
}

function resultFor(entry) {
  const question = entry.question;
  const selected = answers[question.id];
  return { entry, selected, correct: selected === question.answerIndex };
}

function renderReview(result) {
  const { entry, selected, correct } = result;
  const question = entry.question;
  const skill = catalog.skills.find((item) => item.id === question.skillIds[0]);
  return `<details class="review-item"${correct ? "" : " open"}>
    <summary>第 ${entry.number} 題 · ${correct ? "答對" : "需要複習"} · ${escapeHtml(SUBJECT_LABELS[entry.subject])}</summary>
    <p>${escapeHtml(question.stem)}</p>
    <p><strong>你的答案：</strong>${selected === undefined ? "未作答" : `${String.fromCharCode(65 + selected)} ${escapeHtml(question.options[selected])}`}</p>
    <p><strong>正確答案：</strong>${String.fromCharCode(65 + question.answerIndex)} ${escapeHtml(question.options[question.answerIndex])}</p>
    <ol class="rationales">${question.optionRationales.map((item) => `<li class="${item.isCorrect ? "correct" : ""}"><strong>${String.fromCharCode(65 + item.optionIndex)}</strong> ${escapeHtml(item.reason)}</li>`).join("")}</ol>
    <p><a href="${remediationHref(entry.subject, question.skillIds[0])}">複習：${escapeHtml(skill?.title || question.skillIds[0])}</a> <span class="skill-id">${escapeHtml(question.skillIds[0])}</span></p>
  </details>`;
}

function submitCurrentExam() {
  if (!currentExam) return;
  clearInterval(timerHandle);
  const results = currentExam.entries.map(resultFor);
  const correct = results.filter((result) => result.correct).length;
  const bySubject = Object.fromEntries(Object.keys(currentExam.quotas).map((subject) => {
    const subjectResults = results.filter((result) => result.entry.subject === subject);
    return [subject, { correct: subjectResults.filter((result) => result.correct).length, total: subjectResults.length }];
  }));
  const mistakes = results.filter((result) => !result.correct).map((result) => ({
    questionId: result.entry.question.id,
    skillId: result.entry.question.skillIds[0],
    subject: result.entry.subject,
  }));
  recordAttempt(progress, {
    id: currentExam.id,
    seed: currentExam.seed,
    questionCount: currentExam.questionCount,
    correct,
    bySubject,
    mistakes,
  });
  saveProgress(progress);

  examShell.hidden = true;
  resultShell.hidden = false;
  $("#resultSummary").innerHTML = `<p class="score"><strong>${correct}</strong> / ${currentExam.questionCount}</p><ul class="subject-results">${Object.entries(bySubject).map(([subject, value]) => `<li>${escapeHtml(SUBJECT_LABELS[subject])}：${value.correct} / ${value.total}</li>`).join("")}</ul><p>未答與答錯題已列入錯題複習；下方可查看每個選項的判斷理由與對應技能。</p>`;
  $("#resultReview").innerHTML = results.map(renderReview).join("");
  resultShell.scrollIntoView({ block: "start" });
}

setupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const count = Number($("#countInput").value);
  if (!Number.isInteger(count) || count < 45 || count > 55) {
    setupStatus.textContent = "題數必須是 45 到 55 的整數。";
    $("#countInput").focus();
    return;
  }
  beginExam($("#seedInput").value, count);
});

examPaper.addEventListener("change", (event) => {
  if (!(event.target instanceof HTMLInputElement) || event.target.type !== "radio") return;
  const article = event.target.closest("[data-question-id]");
  answers[article.dataset.questionId] = Number(event.target.value);
  updateProgressText();
  saveActiveSession();
});

$("#jumpSelect").addEventListener("change", (event) => {
  $(`#question-${event.target.value}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
});
$("#submitExam").addEventListener("click", submitCurrentExam);
$("#newExam").addEventListener("click", () => {
  resultShell.hidden = true;
  setupForm.closest("section").hidden = false;
  setupForm.closest("section").scrollIntoView({ block: "start" });
});
resumeButton.addEventListener("click", () => {
  const session = progress.activeSession;
  if (validSession(session)) beginExam(session.seed, session.count, session);
});

async function start() {
  try {
    catalog = await fetch("runtime/catalog.json").then((response) => {
      if (!response.ok) throw new Error(`題庫載入失敗：${response.status}`);
      return response.json();
    });
    progress = migrateStorage();
    const params = new URLSearchParams(location.search);
    if (params.has("seed")) $("#seedInput").value = params.get("seed");
    if (params.has("count")) $("#countInput").value = params.get("count");
    if (validSession(progress.activeSession)) resumeButton.hidden = false;
    setupStatus.textContent = `題庫已就緒，共 ${catalog.pool.length} 個已審核靜態題目。`;
  } catch (error) {
    setupStatus.textContent = `無法載入整合自然：${error.message}`;
    setupForm.querySelector("button[type=submit]").disabled = true;
  }
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

addEventListener("offline", () => { setupStatus.textContent = "目前離線，已快取的模擬卷仍可使用。"; });
addEventListener("online", () => { setupStatus.textContent = "網路已恢復。"; });
start();
