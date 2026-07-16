import { selectReviewedQuestionIds } from "./assessment.mjs";
import { migrateLegacyStorage, saveProgress } from "./migration.mjs";

const unitList = document.querySelector("#unit-list");
const skillList = document.querySelector("#skill-list");
const content = document.querySelector("#content");
const status = document.querySelector("#status");
const seedInput = document.querySelector("#seed");
const practiceButton = document.querySelector("#practice");
const state = { manifest: null, unit: null, skill: null, bundle: null, assetById: new Map(), progress: migrateLegacyStorage() };

function text(tag, value, className) {
  const element = document.createElement(tag);
  element.textContent = value;
  if (className) element.className = className;
  return element;
}

function renderStructured(value) {
  if (Array.isArray(value)) {
    if (value.length && value.every((row) => row && typeof row === "object" && !Array.isArray(row))) {
      const table = document.createElement("table");
      const keys = [...new Set(value.flatMap((row) => Object.keys(row)))];
      const head = table.createTHead().insertRow();
      for (const key of keys) head.append(text("th", key));
      const body = table.createTBody();
      for (const row of value) {
        const tr = body.insertRow();
        for (const key of keys) tr.append(text("td", row[key] ?? ""));
      }
      return table;
    }
    const list = document.createElement("ul");
    for (const item of value) {
      const li = document.createElement("li");
      li.append(typeof item === "object" ? renderStructured(item) : document.createTextNode(String(item)));
      list.append(li);
    }
    return list;
  }
  if (value && typeof value === "object") {
    const list = document.createElement("dl");
    for (const [key, item] of Object.entries(value)) {
      list.append(text("dt", key));
      const detail = document.createElement("dd");
      detail.append(typeof item === "object" ? renderStructured(item) : document.createTextNode(String(item)));
      list.append(detail);
    }
    return list;
  }
  return document.createTextNode(String(value));
}

function assetUrl(asset) {
  return asset.path.split("/r4/").at(-1);
}

function renderAssets(ids) {
  const fragment = document.createDocumentFragment();
  for (const id of ids) {
    const asset = state.assetById.get(id);
    if (!asset) continue;
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = assetUrl(asset);
    image.alt = asset.altText;
    image.loading = "lazy";
    const caption = document.createElement("figcaption");
    caption.textContent = asset.caption;
    const description = document.createElement("details");
    description.className = "figure-description";
    description.append(text("summary", "圖形長描述與資料表"), text("p", asset.longDescription));
    const table = renderStructured(asset.dataFallback.rows.map((row) => Object.fromEntries(asset.dataFallback.columns.map((column, index) => [column, row[index]]))));
    table.setAttribute("aria-label", asset.dataFallback.summary);
    description.append(table);
    figure.append(image, caption, description);
    fragment.append(figure);
  }
  return fragment;
}

function renderStimulus(stimulus) {
  const block = document.createElement("section");
  block.className = "stimulus";
  block.append(text("h3", stimulus.content.title), renderStructured(stimulus.content));
  if (stimulus.assets.length) block.append(renderAssets(stimulus.assets));
  const alternative = text("p", stimulus.accessibility.textAlternative, "text-alternative");
  alternative.hidden = stimulus.assets.length === 0;
  block.append(alternative);
  return block;
}

function renderLecture(skill, lecture) {
  content.replaceChildren();
  const header = document.createElement("header");
  header.className = "content-header";
  header.append(text("p", state.unit.id.replace("EARTH_R4_", "單元 "), "eyebrow"), text("h1", skill.title));
  content.append(header);

  const objective = document.createElement("section");
  objective.append(text("h2", "學習目標"));
  const objectiveList = document.createElement("ul");
  lecture.objectives.forEach((item) => objectiveList.append(text("li", item)));
  objective.append(objectiveList);
  content.append(objective);

  for (const section of lecture.sections) {
    const block = document.createElement("section");
    block.append(text("h2", section.title), text("p", section.content));
    content.append(block);
  }
  if (lecture.assets.length) content.append(renderAssets(lecture.assets));

  const examples = document.createElement("section");
  examples.append(text("h2", "例題與推理"));
  lecture.workedExamples.forEach((example, index) => {
    const article = document.createElement("article");
    article.className = "worked-example";
    article.append(text("h3", `例題 ${index + 1}`), text("p", example.prompt));
    const steps = document.createElement("ol");
    example.steps.forEach((step) => steps.append(text("li", step)));
    article.append(steps, text("p", `答案：${example.answer}`, "answer"), text("p", example.why));
    examples.append(article);
  });
  content.append(examples);

  const misconceptions = document.createElement("section");
  misconceptions.append(text("h2", "常見迷思"));
  lecture.misconceptions.forEach((item) => {
    const article = document.createElement("article");
    article.className = "misconception";
    article.append(text("h3", item.belief), text("p", item.whyWrong), text("p", item.correction, "correction"));
    misconceptions.append(article);
  });
  content.append(misconceptions);

  const checks = document.createElement("section");
  checks.append(text("h2", "診斷、練習、遷移與補救"));
  lecture.checks.forEach((item) => {
    const detail = document.createElement("details");
    detail.append(text("summary", item.prompt), text("p", `答案：${item.answer}`, "answer"), text("p", item.reason));
    checks.append(detail);
  });
  const completed = text("button", state.progress.completedSkillIds.includes(skill.id) ? "已完成此重點" : "標記此重點完成", "complete-skill");
  completed.type = "button";
  completed.disabled = state.progress.completedSkillIds.includes(skill.id);
  completed.addEventListener("click", () => {
    state.progress.completedSkillIds.push(skill.id);
    saveProgress(state.progress);
    completed.textContent = "已完成此重點";
    completed.disabled = true;
    status.textContent = `已儲存「${skill.title}」完成狀態。`;
  });
  checks.append(completed);
  content.append(checks);
}

function renderQuestion(question, index) {
  const article = document.createElement("article");
  article.className = "question";
  article.dataset.question = question.id;
  article.append(text("h2", `第 ${index + 1} 題`), text("p", question.stem, "stem"));
  if (question.stimulusId) {
    const stimulus = state.bundle.stimuli.find((value) => value.id === question.stimulusId);
    if (stimulus) article.insertBefore(renderStimulus(stimulus), article.querySelector(".stem"));
  }
  const choices = document.createElement("fieldset");
  choices.append(text("legend", `第 ${index + 1} 題選項`));
  question.options.forEach((option, optionIndex) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = question.id;
    input.value = String(optionIndex);
    label.append(input, document.createTextNode(`${String.fromCharCode(65 + optionIndex)}　${option}`));
    choices.append(label);
  });
  const details = document.createElement("details");
  details.className = "rationale";
  details.hidden = true;
  details.append(text("summary", "查看逐選項解析"));
  const list = document.createElement("ol");
  question.optionRationales.forEach((item) => list.append(text("li", item.reason)));
  details.append(list);
  article.append(choices, details);
  return article;
}

function renderPractice() {
  const seed = seedInput.value.trim() || "1";
  const ids = selectReviewedQuestionIds(state.unit, seed);
  const byId = new Map(state.bundle.questions.map((question) => [question.id, question]));
  content.replaceChildren(text("h1", `${state.unit.id.replace("EARTH_R4_", "單元 ")} 練習`));
  ids.forEach((id, index) => content.append(renderQuestion(byId.get(id), index)));
  const submit = text("button", "交卷", "submit");
  submit.type = "button";
  submit.addEventListener("click", () => {
    let correct = 0;
    ids.forEach((id) => {
      const question = byId.get(id);
      const checked = content.querySelector(`input[name="${id}"]:checked`);
      if (checked && Number(checked.value) === question.answerIndex) correct += 1;
      const article = content.querySelector(`[data-question="${id}"]`);
      article.querySelectorAll("input").forEach((input) => { input.disabled = true; });
      article.querySelector(".rationale").hidden = false;
      const result = text("p", checked
        ? (Number(checked.value) === question.answerIndex ? "作答正確。" : `作答不正確；正確答案為 ${String.fromCharCode(65 + question.answerIndex)}。`)
        : `未作答；正確答案為 ${String.fromCharCode(65 + question.answerIndex)}。`,
      Number(checked?.value) === question.answerIndex ? "question-result correct" : "question-result incorrect");
      article.append(result);
    });
    state.progress.attempts[`${state.unit.id}:${seed}`] = { correct, total: ids.length, questionIds: ids };
    saveProgress(state.progress);
    status.textContent = `本次答對 ${correct} / ${ids.length} 題。`;
    status.focus();
    submit.disabled = true;
  });
  content.append(submit);
  document.querySelector("#main").focus();
}

function openSkill(skill, { focus = true } = {}) {
  state.skill = skill;
  skillList.querySelectorAll("button").forEach((button) => button.removeAttribute("aria-current"));
  skillList.querySelector(`[data-skill="${skill.id}"]`)?.setAttribute("aria-current", "page");
  renderLecture(skill, state.bundle.lectures.find((lecture) => lecture.id === skill.lectureId));
  status.textContent = `已載入「${skill.title}」。`;
  if (focus) document.querySelector("#main").focus();
}

async function openUnit(unit) {
  state.unit = unit;
  state.bundle = await fetch(`runtime/${unit.bundle}`, { cache: "no-cache" }).then((response) => {
    if (!response.ok) throw new Error(`無法載入 ${unit.id}`);
    return response.json();
  });
  unitList.querySelectorAll("button").forEach((button) => button.removeAttribute("aria-current"));
  unitList.querySelector(`[data-unit="${unit.id}"]`)?.setAttribute("aria-current", "page");
  skillList.replaceChildren();
  unit.skills.forEach((skill, index) => {
    const button = text("button", `${index + 1}. ${skill.title}`);
    button.type = "button";
    button.dataset.skill = skill.id;
    button.addEventListener("click", () => openSkill(skill));
    skillList.append(button);
  });
  openSkill(unit.skills[0], { focus: false });
  status.textContent = `${unit.id.replace("EARTH_R4_", "單元 ")} 已載入，共 ${unit.skills.length} 個學習重點。`;
}

async function init() {
  const [manifest, assets] = await Promise.all([fetch("runtime/content-manifest.json", { cache: "no-cache" }).then((response) => {
    if (!response.ok) throw new Error("找不到地科 R4 內容索引");
    return response.json();
  }), fetch("runtime/assets.json", { cache: "no-cache" }).then((response) => {
    if (!response.ok) throw new Error("找不到地科 R4 圖資索引");
    return response.json();
  })]);
  state.manifest = manifest;
  state.assetById = new Map(assets.map((asset) => [asset.id, asset]));
  state.manifest.units.forEach((unit, index) => {
    const button = text("button", `單元 ${index + 1}`);
    button.type = "button";
    button.dataset.unit = unit.id;
    button.addEventListener("click", () => openUnit(unit).catch(showError));
    unitList.append(button);
  });
  practiceButton.addEventListener("click", renderPractice);
  await openUnit(state.manifest.units[0]);
  practiceButton.disabled = false;
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
}

function showError(error) {
  status.textContent = `載入失敗：${error.message}`;
}

init().catch(showError);
