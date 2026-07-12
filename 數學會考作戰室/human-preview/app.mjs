import { HUMAN_PREVIEW_CONFIG } from "./config.mjs";
import { HumanPreviewRuntime, questionSignature } from "./engine.mjs";

const $ = id => document.getElementById(id);
const esc = value => String(value ?? "").replace(/[&<>\"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]));
const list = values => Array.isArray(values) && values.length ? `<ul>${values.map(v => `<li>${esc(typeof v === "string" ? v : JSON.stringify(v))}</li>`).join("")}</ul>` : "<p>—</p>";
const runtime = new HumanPreviewRuntime({
  manifestUrl: HUMAN_PREVIEW_CONFIG.runtimeManifestUrl,
  syllabusLockUrl: HUMAN_PREVIEW_CONFIG.syllabusLockUrl,
  expectedContentVersion: HUMAN_PREVIEW_CONFIG.expectedContentVersion
});
let currentUnit = null;

function figureHtml(question) {
  if (!question.figureId) return "";
  const url = runtime.getFigureUrl(question.figureId);
  return url ? `<img class="figure" src="${esc(url.href)}" alt="${esc(question.text || question.prompt || question.figureId)}">` : "";
}
function renderMc(question, number) {
  return `<article class="question"><h3>${number}. ${esc(question.text)}</h3>${figureHtml(question)}<div class="choices">${question.choices.map((c,i)=>`<span class="choice">${String.fromCharCode(65+i)}. ${esc(c)}</span>`).join("")}</div><details class="answer"><summary>答案與解析</summary><p><strong>${String.fromCharCode(65+question.answerIndex)}</strong>｜${esc(question.explanation)}</p>${list(question.steps)}</details></article>`;
}
function renderCr(question, number) {
  return `<article class="question"><h3>非選 ${number}. ${esc(question.prompt)}</h3>${figureHtml(question)}<h4>作答要求</h4>${list(question.requiredWork)}<details class="answer"><summary>參考解法與評分規準</summary>${list(question.fullCreditSolution)}<h4>其他方法</h4>${list(question.alternativeSolutions)}<table class="rubric"><thead><tr><th>級分</th><th>規準</th></tr></thead><tbody>${(question.rubric||[]).map(r=>`<tr><td>${esc(r.score)}</td><td>${esc(r.criteria)}</td></tr>`).join("")}</tbody></table></details></article>`;
}
function renderLecture(skill) {
  const l = skill.lecture;
  $("contentPanel").innerHTML = `<p class="eyebrow">${esc(skill.skillId)}</p><h2>${esc(l.title)}</h2><div class="lecture-grid"><section class="block"><h3>學習目標</h3>${list(l.learningOutcomes)}</section><section class="block"><h3>觀念建立</h3>${list(l.conceptNarrative)}</section><section class="block"><h3>步驟</h3>${list((l.method||[]).map(x=>`${x.step}. ${x.instruction}（檢查：${x.check}）`))}</section><section class="block"><h3>常見錯誤</h3>${list((l.commonMistakes||[]).map(x=>`${x.mistake}：${x.correction}`))}</section><section class="block"><h3>例題</h3>${(l.workedExamples||[]).map(x=>`<h4>${esc(x.prompt)}</h4>${list(x.solutionSteps)}<p><strong>${esc(x.answer)}</strong></p>`).join("")}</section><section class="block"><h3>總結</h3>${list(l.summary)}</section></div>`;
  localStorage.setItem(`${HUMAN_PREVIEW_CONFIG.storagePrefix}lastSkill`, skill.skillId);
}
async function loadSelectedUnit() {
  currentUnit = await runtime.loadUnit($("unitSelect").value);
  $("skillSelect").innerHTML = currentUnit.skills.map((s,i)=>`<option value="${i}">${esc(s.title)}</option>`).join("");
  renderLecture(currentUnit.skills[Number($("skillSelect").value || 0)]);
}
function renderCatalog() {
  $("catalogPanel").innerHTML = runtime.getCatalog().map(unit => `<article class="unit-card"><span>${esc(unit.gradeBand)}｜${esc(unit.domain)}</span><strong>${unit.unitId.toUpperCase()} ${esc(unit.title)}</strong><small>${unit.counts.skills} skills｜${unit.counts.mcQuestions} MC｜${unit.counts.constructedResponses} CR</small><button data-unit="${unit.unitId}">開啟</button></article>`).join("");
  $("catalogPanel").addEventListener("click", async event => { const id=event.target.dataset.unit; if(!id)return; $("unitSelect").value=id; await loadSelectedUnit(); scrollTo({top:$("contentPanel").offsetTop-20,behavior:"smooth"}); });
}
async function start() {
  await runtime.initialize();
  const catalog = runtime.getCatalog();
  $("unitSelect").innerHTML = catalog.map(u=>`<option value="${u.unitId}">${u.unitId.toUpperCase()} ${esc(u.title)}</option>`).join("");
  $("contentVersion").textContent = runtime.manifest.contentVersion;
  $("runtimeCounts").textContent = `${runtime.manifest.unitCount} 單元｜${runtime.manifest.skillCount} skills｜${runtime.manifest.mcQuestionCount} MC｜${runtime.manifest.constructedResponseCount} CR`;
  $("runtimeStatus").textContent = "PREVIEW READY";
  renderCatalog(); await loadSelectedUnit();
}
$("unitSelect").addEventListener("change", loadSelectedUnit);
$("skillSelect").addEventListener("change", ()=>renderLecture(currentUnit.skills[Number($("skillSelect").value)]));
$("loadSkillButton").addEventListener("click", ()=>renderLecture(currentUnit.skills[Number($("skillSelect").value)]));
$("unitQuizButton").addEventListener("click", async()=>{ const q=await runtime.generateUnitQuiz($("unitSelect").value,$("seedInput").value); $("contentPanel").innerHTML=`<h2>${q.unitId.toUpperCase()} 單元小考</h2><p>Seed ${q.seed}｜每 skill 1 題｜共 ${q.questionCount} 題</p>${q.questions.map(renderMc).join("")}`; });
$("mockButton").addEventListener("click", async()=>{ const m=await runtime.generateFullMock($("seedInput").value); $("contentPanel").innerHTML=`<h2>工程預覽模考</h2><p>Seed ${m.seed}｜25 MC＋2 CR｜此抽題分布尚非 release blueprint。</p>${m.mcQuestions.map(renderMc).join("")}<h2>非選擇題</h2>${m.constructedResponses.map(renderCr).join("")}`; });
$("selfCheckButton").addEventListener("click", async()=>{ const seed=$("seedInput").value; const a=await runtime.generateFullMock(seed); const b=await runtime.generateFullMock(seed); const pass=questionSignature(a.mcQuestions)===questionSignature(b.mcQuestions)&&questionSignature(a.constructedResponses)===questionSignature(b.constructedResponses); $("runtimeStatus").textContent=pass?"SELF-CHECK PASS":"SELF-CHECK FAIL"; if(!pass) throw new Error("deterministic self-check failed"); });
start().catch(error=>{ $("runtimeStatus").textContent="LOAD FAILED"; $("contentPanel").innerHTML=`<h2>預覽載入失敗</h2><pre>${esc(error.stack||error.message||error)}</pre>`; throw error; });
