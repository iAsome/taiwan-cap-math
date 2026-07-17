import {
  SOCIAL_STORAGE_KEY,
  createSocialAssessment,
  loadSocialCatalog,
  migrateSocialProgress,
  normalizeSocialProgress,
} from "./runtime.js";

const SUBJECT_LABELS = { geography: "地理", history: "歷史", civics: "公民" };
const SUBJECT_LINKS = {
  geography: "../地理會考作戰室/r4/index.html",
  history: "../歷史會考作戰室/r4/index.html",
  civics: "../公民會考作戰室/r4/index.html",
};

const REDUNDANT_RATIONALE_SUFFIXES = [
  "這項內容無法支持題幹所要求的地理判斷。",
  "這項證據可直接支持題幹所要求的地理判斷。",
];

const $ = (selector) => document.querySelector(selector);
const state = {
  catalog: null,
  assessment: null,
  progress: null,
  timerId: null,
  deadline: 0,
  submitted: false,
};

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function announce(message) { $("#liveRegion").textContent = message; }

function saveProgress() {
  try { localStorage.setItem(SOCIAL_STORAGE_KEY, JSON.stringify(state.progress)); }
  catch { announce("瀏覽器無法儲存本次進度。考卷仍可繼續作答。"); }
}

function renderAttempts() {
  const root = $("#recentAttempts");
  root.replaceChildren();
  if (!state.progress.attempts.length) {
    root.append(element("p", null, "尚無整合模考紀錄。"));
    return;
  }
  root.append(element("h3", null, "最近紀錄"));
  const list = element("ol");
  state.progress.attempts.slice(0, 5).forEach((attempt) => {
    const date = attempt.completedAt ? new Date(attempt.completedAt).toLocaleDateString("zh-TW") : "日期未記錄";
    list.append(element("li", null, `${date}｜種子 ${attempt.seed}｜${attempt.score}／${attempt.total}`));
  });
  root.append(list);
}

function subjectLabel(subject) { return SUBJECT_LABELS[subject] ?? subject; }

function conciseRationale(reason) {
  let text = String(reason).trim();
  for (const suffix of REDUNDANT_RATIONALE_SUFFIXES) {
    if (text.endsWith(suffix)) text = text.slice(0, -suffix.length).trim();
  }
  return text;
}

function appendTable(root, table) {
  const node = document.createElement("table");
  node.append(element("caption", null, table.caption));
  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  for (const value of table.columns ?? []) {
    const cell = element("th", null, String(value));
    cell.scope = "col";
    headRow.append(cell);
  }
  thead.append(headRow);
  const tbody = document.createElement("tbody");
  for (const row of table.rows ?? []) {
    const rowNode = document.createElement("tr");
    row.forEach((value, index) => {
      const cell = element(table.rowHeader && index === 0 ? "th" : "td", null, String(value));
      if (cell.tagName === "TH") cell.scope = "row";
      rowNode.append(cell);
    });
    tbody.append(rowNode);
  }
  node.append(thead, tbody);
  root.append(node);
}

function appendStimulusContent(root, stimulus) {
  const content = stimulus.content;
  if (typeof content === "string") {
    root.append(element("p", null, content));
  } else if (content && typeof content === "object") {
    if (content.prompt) root.append(element("p", null, content.prompt));
    if (content.table) appendTable(root, content.table);
    if (Array.isArray(content.blocks)) {
      for (const block of content.blocks) {
        if (typeof block === "string") root.append(element("p", null, block));
        else {
          const section = element("section");
          if (block.heading) section.append(element("h4", null, block.heading));
          if (block.text) section.append(element("p", null, block.text));
          section.querySelector("p:last-child")?.style.setProperty("margin-bottom", "8px");
          root.append(section);
        }
      }
    }
  }
  const sourceNote = stimulus.sourceNote ?? content?.sourceNote;
  if (sourceNote) root.append(element("p", "source-note", sourceNote));
}

function stimulusBlock(stimulus, number) {
  const root = element("section", "stimulus-block");
  root.dataset.setId = stimulus.integratedSetId;
  root.append(element("h3", null, `跨科題組 ${number}｜${stimulus.integratedTitle}`));
  root.append(element("p", "subject-label", stimulus.integratedDomains.map(subjectLabel).join(" × ")));
  appendStimulusContent(root, stimulus);
  return root;
}

function questionCard(question, number) {
  const fieldset = element("fieldset", "question-card");
  fieldset.dataset.questionId = question.id;
  fieldset.dataset.subject = question.subject;
  const legend = document.createElement("legend");
  legend.append(element("span", "subject-label", subjectLabel(question.subject)));
  legend.append(document.createTextNode(`${number}. ${question.stem}`));
  fieldset.append(legend);
  question.options.forEach((option, index) => {
    const label = element("label", "option");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `answer-${question.id}`;
    input.value = String(index);
    input.addEventListener("change", updateAnswerProgress);
    label.append(input, element("span", null, `${String.fromCharCode(65 + index)}. ${option}`));
    fieldset.append(label);
  });
  return fieldset;
}

function updateAnswerProgress() {
  if (!state.assessment) return;
  const answered = new Set([...$("#paper").querySelectorAll("input:checked")].map((input) => input.name)).size;
  $("#answerProgress").textContent = `已答 ${answered}／${state.assessment.questionCount} 題`;
}

function renderPaper() {
  const paper = $("#paper");
  paper.replaceChildren();
  const questionById = new Map(state.catalog.questions.map((question) => [question.id, question]));
  const stimulusBySetId = new Map(state.catalog.stimuli.map((stimulus) => [stimulus.integratedSetId, stimulus]));
  let number = 1;
  for (const id of state.assessment.singleQuestionIds) paper.append(questionCard(questionById.get(id), number++));
  state.assessment.setIds.forEach((setId, setIndex) => {
    const stimulus = stimulusBySetId.get(setId);
    paper.append(stimulusBlock(stimulus, setIndex + 1));
    for (const id of stimulus.questionIds) paper.append(questionCard(questionById.get(id), number++));
  });
  updateAnswerProgress();
}

function formatTime(seconds) {
  const safe = Math.max(0, seconds);
  return `${String(Math.floor(safe / 60)).padStart(2, "0")}:${String(safe % 60).padStart(2, "0")}`;
}

function updateTimer() {
  const seconds = Math.max(0, Math.ceil((state.deadline - Date.now()) / 1000));
  const timer = $("#timer");
  timer.textContent = formatTime(seconds);
  timer.classList.toggle("warning", seconds <= 300);
  if (seconds === 0 && !state.submitted) submitExam(true);
}

function startTimer(minutes) {
  clearInterval(state.timerId);
  state.deadline = Date.now() + minutes * 60 * 1000;
  updateTimer();
  state.timerId = setInterval(updateTimer, 1000);
}

function showView(name) {
  $("#setupView").hidden = name !== "setup";
  $("#examView").hidden = name !== "exam";
  $("#resultView").hidden = name !== "result";
}

function startExam(event) {
  event?.preventDefault();
  const seed = $("#seedInput").value.trim() || "115";
  const questionCount = Number($("#questionCount").value);
  state.assessment = createSocialAssessment(state.catalog, { seed, questionCount });
  state.submitted = false;
  state.progress.lastSeed = seed;
  state.progress.questionCount = questionCount;
  saveProgress();
  history.replaceState(null, "", `?seed=${encodeURIComponent(seed)}&count=${questionCount}`);
  $("#examMeta").textContent = `種子 ${seed}｜${questionCount} 題｜地理 ${state.assessment.subjectCounts.geography}、歷史 ${state.assessment.subjectCounts.history}、公民 ${state.assessment.subjectCounts.civics}`;
  renderPaper();
  showView("exam");
  startTimer(state.assessment.minutes);
  window.scrollTo({ top: 0, behavior: "auto" });
  $("#examTitle").setAttribute("tabindex", "-1");
  $("#examTitle").focus({ preventScroll: true });
  announce(`已建立 ${questionCount} 題考卷，作答時間 70 分鐘。`);
}

function selectedAnswer(questionId) {
  const input = document.querySelector(`input[name="answer-${CSS.escape(questionId)}"]:checked`);
  return input ? Number(input.value) : null;
}

function renderSubjectStats(results) {
  const root = $("#subjectStats");
  root.replaceChildren();
  for (const subject of ["geography", "history", "civics"]) {
    const rows = results.filter((result) => result.question.subject === subject);
    const score = rows.filter((result) => result.correct).length;
    const block = element("div", "stat");
    block.append(element("span", null, subjectLabel(subject)), element("strong", null, `${score}／${rows.length}`));
    root.append(block);
  }
}

function renderRemediation(results) {
  const root = $("#remediationList");
  root.replaceChildren();
  const skillById = new Map(state.catalog.skills.map((skill) => [skill.id, skill]));
  const wrongCounts = new Map();
  for (const result of results.filter((item) => !item.correct)) {
    for (const skillId of result.question.skillIds) wrongCounts.set(skillId, (wrongCounts.get(skillId) ?? 0) + 1);
  }
  const rows = [...wrongCounts.entries()].sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0], "en"));
  if (!rows.length) {
    root.append(element("p", null, "本次沒有答錯題目。"));
    return;
  }
  for (const [skillId, count] of rows) {
    const skill = skillById.get(skillId);
    const item = element("div", "remediation-item");
    const link = element("a", null, `${subjectLabel(skill.subject)}｜${skill.title}`);
    link.href = SUBJECT_LINKS[skill.subject];
    item.append(link, element("span", null, `錯 ${count} 題`));
    root.append(item);
  }
}

function renderAnswerReview(results) {
  const root = $("#answerReview");
  root.replaceChildren();
  results.forEach((result, index) => {
    const item = element("article", `review-item ${result.correct ? "correct" : "incorrect"}`);
    item.append(element("h4", null, `${index + 1}. ${result.question.stem}`));
    const status = element("p", result.correct ? "answer-correct" : "answer-wrong", result.correct ? "答對" : `答錯；正確答案為 ${String.fromCharCode(65 + result.question.answerIndex)}`);
    item.append(status);
    const list = element("ol");
    list.type = "A";
    result.question.options.forEach((option, optionIndex) => {
      const rationale = result.question.optionRationales.find((entry) => entry.optionIndex === optionIndex);
      const marker = optionIndex === result.question.answerIndex ? "（正確）" : result.answerIndex === optionIndex ? "（你的答案）" : "";
      const row = element("li");
      row.append(element("strong", null, `${option}${marker}`), document.createTextNode(`：${conciseRationale(rationale.reason)}`));
      list.append(row);
    });
    item.append(list);
    root.append(item);
  });
}

function submitExam(fromTimer = false) {
  if (state.submitted) return;
  const questionById = new Map(state.catalog.questions.map((question) => [question.id, question]));
  const answered = state.assessment.questionIds.filter((id) => selectedAnswer(id) !== null).length;
  if (!fromTimer && answered < state.assessment.questionCount && !window.confirm(`尚有 ${state.assessment.questionCount - answered} 題未作答，仍要交卷嗎？`)) return;
  state.submitted = true;
  clearInterval(state.timerId);
  const results = state.assessment.questionIds.map((id) => {
    const question = questionById.get(id);
    const answerIndex = selectedAnswer(id);
    return { question, answerIndex, correct: answerIndex === question.answerIndex };
  });
  const score = results.filter((result) => result.correct).length;
  state.progress.attempts.unshift({
    seed: state.assessment.seed,
    total: state.assessment.questionCount,
    score,
    subjectStats: Object.fromEntries(Object.keys(SUBJECT_LABELS).map((subject) => {
      const rows = results.filter((result) => result.question.subject === subject);
      return [subject, { score: rows.filter((result) => result.correct).length, total: rows.length }];
    })),
    wrongSkillIds: [...new Set(results.filter((result) => !result.correct).flatMap((result) => result.question.skillIds))].sort(),
    completedAt: new Date().toISOString(),
  });
  state.progress.attempts = state.progress.attempts.slice(0, 50);
  saveProgress();
  $("#scoreText").textContent = `${score}／${state.assessment.questionCount} 題正確`;
  renderSubjectStats(results);
  renderRemediation(results);
  renderAnswerReview(results);
  showView("result");
  window.scrollTo({ top: 0, behavior: "auto" });
  $("#resultTitle").focus({ preventScroll: true });
  announce(`已交卷，答對 ${score} 題，共 ${state.assessment.questionCount} 題。`);
}

function newExam() {
  clearInterval(state.timerId);
  $("#seedInput").value = state.progress.lastSeed;
  $("#questionCount").value = String(state.progress.questionCount);
  renderAttempts();
  showView("setup");
  window.scrollTo({ top: 0, behavior: "auto" });
  $("#setupTitle").setAttribute("tabindex", "-1");
  $("#setupTitle").focus({ preventScroll: true });
}

function updateNetworkStatus() {
  $("#networkStatus").textContent = navigator.onLine ? "已連線" : "離線可用";
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  try { await navigator.serviceWorker.register("./sw.js"); }
  catch { announce("離線快取未能啟用；連線時仍可正常使用。 "); }
}

async function start() {
  const migration = migrateSocialProgress(localStorage);
  state.progress = normalizeSocialProgress(migration.progress);
  const params = new URLSearchParams(location.search);
  const count = Number(params.get("count"));
  $("#seedInput").value = params.get("seed") || state.progress.lastSeed;
  $("#questionCount").value = String(Number.isInteger(count) && count >= 50 && count <= 60 ? count : state.progress.questionCount);
  state.catalog = await loadSocialCatalog();
  renderAttempts();
  updateNetworkStatus();
  addEventListener("online", updateNetworkStatus);
  addEventListener("offline", updateNetworkStatus);
  $("#setupForm").addEventListener("submit", startExam);
  $("#submitButton").addEventListener("click", () => submitExam(false));
  $("#newExamButton").addEventListener("click", newExam);
  $("#printButton").addEventListener("click", () => window.print());
  registerServiceWorker();
}

start().catch((error) => {
  $("#setupView").replaceChildren(element("p", "answer-wrong", `整合社會載入失敗：${error.message}`));
});
