import { HUMAN_PREVIEW_CONFIG } from "./config.mjs";
import { HumanPreviewRuntime, questionSignature } from "./engine.mjs";

const $ = id => document.getElementById(id);
const esc = value => String(value ?? "").replace(/[&<>\"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
const list = values => Array.isArray(values) && values.length
  ? `<ul>${values.map(value => `<li>${esc(typeof value === "string" ? value : JSON.stringify(value))}</li>`).join("")}</ul>`
  : "<p>—</p>";
const rows = (values, cells) => Array.isArray(values) && values.length
  ? values.map(value => `<tr>${cells(value).map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")
  : `<tr><td colspan="4">—</td></tr>`;
const table = (headers, body) => `<div class="table-wrap"><table><thead><tr>${headers.map(header => `<th>${esc(header)}</th>`).join("")}</tr></thead><tbody>${body}</tbody></table></div>`;

const runtime = new HumanPreviewRuntime({
  manifestUrl: HUMAN_PREVIEW_CONFIG.runtimeManifestUrl,
  syllabusLockUrl: HUMAN_PREVIEW_CONFIG.syllabusLockUrl,
  expectedContentVersion: HUMAN_PREVIEW_CONFIG.expectedContentVersion
});

let currentUnit = null;
let actionInProgress = false;

function setStatus(text) {
  $("runtimeStatus").textContent = text;
}

async function withBusy(button, label, action) {
  if (actionInProgress) return;
  actionInProgress = true;
  const controls = [...document.querySelectorAll("button, select, input")];
  const priorDisabled = controls.map(control => control.disabled);
  controls.forEach(control => { control.disabled = true; });
  const priorText = button?.textContent;
  if (button) button.textContent = label;
  try {
    return await action();
  } finally {
    controls.forEach((control, index) => { control.disabled = priorDisabled[index]; });
    if (button && priorText != null) button.textContent = priorText;
    actionInProgress = false;
  }
}

function figureHtml(question) {
  if (!question.figureId) return "";
  const url = runtime.getFigureUrl(question.figureId);
  return url
    ? `<figure><img class="figure" src="${esc(url.href)}" alt="${esc(question.text || question.prompt || question.figureId)}"><figcaption>${esc(question.figureId)}</figcaption></figure>`
    : `<p class="error-note">找不到圖形：${esc(question.figureId)}</p>`;
}

function renderMc(question, number) {
  const optionRows = rows(question.optionAnalysis || [], item => [
    esc(item.choice),
    item.truth ? "正確" : "錯誤",
    esc(item.reason)
  ]);
  return `<article class="question" data-question-id="${esc(question.questionId)}" data-question-type="mc">
    <p class="question-meta">${esc(question.questionId)}｜${esc(question.difficulty)}｜${esc(question.skillId)}</p>
    <h3>${number}. ${esc(question.text)}</h3>
    ${figureHtml(question)}
    <ol class="choices" type="A">${question.choices.map(choice => `<li class="choice">${esc(choice)}</li>`).join("")}</ol>
    <details class="answer">
      <summary>答案與完整解析</summary>
      <p><strong>答案 ${String.fromCharCode(65 + question.answerIndex)}</strong>｜${esc(question.explanation)}</p>
      <h4>解題步驟</h4>${list(question.steps)}
      <h4>選項分析</h4>${table(["選項", "判定", "理由"], optionRows)}
      <h4>常見錯誤</h4><p>${esc(question.commonMistake || "—")}</p>
      <h4>核心概念</h4><p>${esc(question.concept || "—")}</p>
    </details>
  </article>`;
}

function renderCr(question, number) {
  const rubricRows = rows(question.rubric || [], item => [esc(item.score), esc(item.criteria)]);
  return `<article class="question" data-question-id="${esc(question.questionId)}" data-question-type="constructed-response">
    <p class="question-meta">${esc(question.questionId)}｜${esc(question.difficulty)}｜${esc(question.skillId)}</p>
    <h3>非選 ${number}. ${esc(question.prompt)}</h3>
    ${figureHtml(question)}
    <h4>作答要求</h4>${list(question.requiredWork)}
    <details class="answer">
      <summary>參考解法與評分規準</summary>
      <h4>完整解法</h4>${list(question.fullCreditSolution)}
      <h4>其他可接受方法</h4>${list(question.alternativeSolutions)}
      <h4>評分規準</h4>${table(["級分", "規準"], rubricRows)}
      <h4>評分注意事項</h4>${list(question.scoringNotes)}
      <h4>常見錯誤</h4>${list(question.commonErrors)}
    </details>
  </article>`;
}

function renderLecture(skill) {
  const lecture = skill.lecture;
  const prerequisiteRows = rows(lecture.prerequisites || [], item => [esc(item.name), esc(item.requiredLevel)]);
  const glossaryRows = rows(lecture.glossary || [], item => [esc(item.term), esc(item.definition)]);
  const notationRows = rows(lecture.notation || [], item => [esc(item.symbol), esc(item.meaning)]);
  const definitionRows = rows(lecture.formalDefinitions || [], item => [esc(item.name), esc(item.statement)]);
  const classificationRows = rows(lecture.classificationMap || [], item => [esc(item.number), esc((item.classifications || []).join("、"))]);
  const formulaRows = rows(lecture.formulas || [], item => [esc(item.formula), esc((item.conditions || []).join("；")), esc(item.meaning)]);
  const methodRows = rows(lecture.method || [], item => [esc(item.step), esc(item.instruction), esc(item.check)]);
  const mistakeRows = rows(lecture.commonMistakes || [], item => [esc(item.mistake), esc(item.why), esc(item.correction)]);
  const workedExamples = (lecture.workedExamples || []).map(example => `<article class="worked-example">
    <h4>${esc(example.exampleId || "例題")}｜${esc(example.prompt)}</h4>
    ${list(example.solutionSteps)}
    <p><strong>答案：</strong>${esc(example.answer)}</p>
  </article>`).join("") || "<p>—</p>";
  const connections = lecture.connections || {};

  $("contentPanel").innerHTML = `<article class="lecture" data-skill-id="${esc(skill.skillId)}">
    <p class="eyebrow">${esc(skill.skillId)}</p>
    <h2>${esc(lecture.title)}</h2>
    <p class="question-meta">${esc(skill.topicId)}｜${esc(lecture.audience || "")}</p>
    <div class="lecture-grid">
      <section class="block"><h3>學習目標</h3>${list(lecture.learningOutcomes)}</section>
      <section class="block"><h3>前置知識</h3>${table(["項目", "需要程度"], prerequisiteRows)}</section>
      <section class="block wide"><h3>名詞與符號</h3>${table(["名詞", "定義"], glossaryRows)}${table(["符號", "意義"], notationRows)}</section>
      <section class="block"><h3>觀念建立</h3>${list(lecture.conceptNarrative)}</section>
      <section class="block"><h3>正式定義</h3>${table(["名稱", "敘述"], definitionRows)}</section>
      <section class="block"><h3>分類與對照</h3>${table(["對象", "分類"], classificationRows)}</section>
      <section class="block"><h3>公式與條件</h3>${table(["公式", "適用條件", "意義"], formulaRows)}</section>
      <section class="block"><h3>不適用情況</h3>${list(lecture.nonApplicableCases)}</section>
      <section class="block wide"><h3>解題方法</h3>${table(["步驟", "操作", "檢查"], methodRows)}</section>
      <section class="block wide"><h3>完整例題</h3>${workedExamples}</section>
      <section class="block wide"><h3>常見錯誤</h3>${table(["錯誤", "原因", "修正"], mistakeRows)}</section>
      <section class="block"><h3>自我檢查</h3>${list(lecture.selfCheck)}</section>
      <section class="block"><h3>重點總結</h3>${list(lecture.summary)}</section>
      <section class="block"><h3>前後連結</h3><p><strong>前：</strong>${esc(connections.previous || "—")}</p><p><strong>後：</strong></p>${list(connections.next)}</section>
    </div>
  </article>`;
  localStorage.setItem(`${HUMAN_PREVIEW_CONFIG.storagePrefix}lastSkill`, skill.skillId);
}

async function loadSelectedUnit() {
  currentUnit = await runtime.loadUnit($("unitSelect").value);
  $("skillSelect").innerHTML = currentUnit.skills.map((skill, index) => `<option value="${index}">${esc(skill.title)}</option>`).join("");
  renderLecture(currentUnit.skills[0]);
}

function renderCatalog() {
  $("catalogPanel").innerHTML = runtime.getCatalog().map(unit => `<article class="unit-card">
    <span>${esc(unit.gradeBand)}｜${esc(unit.domain)}</span>
    <strong>${unit.unitId.toUpperCase()} ${esc(unit.title)}</strong>
    <small>${unit.counts.skills} skills｜${unit.counts.mcQuestions} MC｜${unit.counts.constructedResponses} CR</small>
    <button type="button" data-unit="${unit.unitId}">開啟</button>
  </article>`).join("");
  $("catalogPanel").addEventListener("click", async event => {
    const button = event.target.closest("button[data-unit]");
    if (!button) return;
    $("unitSelect").value = button.dataset.unit;
    await withBusy(button, "載入中…", loadSelectedUnit);
    scrollTo({ top: $("contentPanel").offsetTop - 20, behavior: "smooth" });
  });
}

async function start() {
  await runtime.initialize();
  const catalog = runtime.getCatalog();
  $("unitSelect").innerHTML = catalog.map(unit => `<option value="${unit.unitId}">${unit.unitId.toUpperCase()} ${esc(unit.title)}</option>`).join("");
  $("contentVersion").textContent = runtime.manifest.contentVersion;
  $("runtimeCounts").textContent = `${runtime.manifest.unitCount} 單元｜${runtime.manifest.skillCount} skills｜${runtime.manifest.mcQuestionCount} MC｜${runtime.manifest.constructedResponseCount} CR`;
  setStatus("PREVIEW READY");
  renderCatalog();
  await loadSelectedUnit();
  Object.defineProperty(window, "__HUMAN_PREVIEW_R1__", {
    value: Object.freeze({ runtime, config: HUMAN_PREVIEW_CONFIG }),
    configurable: false,
    writable: false
  });
}

$("unitSelect").addEventListener("change", event => withBusy(event.currentTarget, "載入中…", loadSelectedUnit));
$("skillSelect").addEventListener("change", () => renderLecture(currentUnit.skills[Number($("skillSelect").value)]));
$("loadSkillButton").addEventListener("click", () => renderLecture(currentUnit.skills[Number($("skillSelect").value)]));
$("unitQuizButton").addEventListener("click", event => withBusy(event.currentTarget, "產生中…", async () => {
  const quiz = await runtime.generateUnitQuiz($("unitSelect").value, $("seedInput").value);
  $("contentPanel").innerHTML = `<section data-view="unit-quiz"><h2>${quiz.unitId.toUpperCase()} 單元小考</h2><p>Seed ${quiz.seed}｜每 skill 1 題｜共 ${quiz.questionCount} 題</p>${quiz.questions.map((question, index) => renderMc(question, index + 1)).join("")}</section>`;
  setStatus("UNIT QUIZ READY");
}));
$("mockButton").addEventListener("click", event => withBusy(event.currentTarget, "產生中…", async () => {
  const mock = await runtime.generateFullMock($("seedInput").value);
  $("contentPanel").innerHTML = `<section data-view="engineering-mock"><h2>工程預覽模考</h2><p>Seed ${mock.seed}｜25 MC＋2 CR｜此抽題分布尚非 release blueprint。</p>${mock.mcQuestions.map((question, index) => renderMc(question, index + 1)).join("")}<h2>非選擇題</h2>${mock.constructedResponses.map((question, index) => renderCr(question, index + 1)).join("")}</section>`;
  setStatus("ENGINEERING MOCK READY");
}));
$("selfCheckButton").addEventListener("click", event => withBusy(event.currentTarget, "檢查中…", async () => {
  const seed = $("seedInput").value;
  const first = await runtime.generateFullMock(seed);
  const second = await runtime.generateFullMock(seed);
  const pass = questionSignature(first.mcQuestions) === questionSignature(second.mcQuestions)
    && questionSignature(first.constructedResponses) === questionSignature(second.constructedResponses);
  setStatus(pass ? "SELF-CHECK PASS" : "SELF-CHECK FAIL");
  if (!pass) throw new Error("deterministic self-check failed");
}));

start().catch(error => {
  setStatus("LOAD FAILED");
  $("contentPanel").innerHTML = `<h2>預覽載入失敗</h2><pre>${esc(error.stack || error.message || error)}</pre>`;
  throw error;
});
