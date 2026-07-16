function assert(condition, message) { if (!condition) throw new Error(message); }
function hashSeed(value) { let h = 2166136261 >>> 0; for (const ch of String(value)) { h ^= ch.codePointAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
function mulberry32(seed) { let a = seed >>> 0; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function shuffle(items, rng) { const out = items.slice(); for (let i = out.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [out[i], out[j]] = [out[j], out[i]]; } return out; }
async function browserLoadJson(url) { const response = await fetch(url, { cache: "no-store" }); if (!response.ok) throw new Error(`JSON load failed ${response.status}: ${url}`); return response.json(); }
const abilityByDifficulty = Object.freeze({ basic: "concept", standard: "procedure", advanced: "analysis", literacy: "application" });
const difficultyNumber = Object.freeze({ basic: 1, standard: 2, literacy: 3, advanced: 4 });
const gradeName = grade => grade === 7 ? "國一" : grade === 8 ? "國二" : "國三";
const normPath = value => String(value).replace(/\\/g, "/");
const formatFormula = (item, multiline = false) => {
  if (typeof item === "string") return item;
  const formula = Array.isArray(item) ? item[0] : item?.formula;
  const conditions = Array.isArray(item) ? item[1] : item?.conditions;
  const meaning = Array.isArray(item) ? item[2] : item?.meaning;
  const list = Array.isArray(conditions) ? conditions : [conditions].filter(Boolean);
  return `${formula || ""}${list.length ? (multiline ? `\n適用：${list.join("；")}` : `（${list.join("；")}）`) : ""}${multiline && meaning ? `\n意義：${meaning}` : ""}`;
};
const formulaItems = lecture => lecture?.formulas?.length ? lecture.formulas : (lecture?.formulasAndConditions || []);

export class HumanProductionRuntime {
  constructor({ manifestUrl, syllabusLockUrl, blueprintUrl, expectedContentVersion, loadJson = browserLoadJson }) {
    Object.assign(this, { manifestUrl, syllabusLockUrl, blueprintUrl, expectedContentVersion, loadJson });
    this.units = new Map(); this.questionById = new Map(); this.skillById = new Map(); this.figureById = new Map();
  }
  async initialize() {
    [this.manifest, this.syllabus, this.blueprint] = await Promise.all([
      this.loadJson(this.manifestUrl), this.loadJson(this.syllabusLockUrl), this.loadJson(this.blueprintUrl)
    ]);
    assert(this.manifest.productionRuntime === true, "human production manifest required");
    assert(this.manifest.contentAuthority === "CHATGPT_HUMAN_AUTHORED_R1", "content authority mismatch");
    assert(this.manifest.contentVersion === this.expectedContentVersion, "content version mismatch");
    assert(this.blueprint.contentVersion === this.expectedContentVersion, "blueprint content version mismatch");
    assert(this.manifest.unitCount === 23 && this.manifest.skillCount === 339, "manifest counts mismatch");
    if (!this.manifest.lectureCount) {
      this.manifest.lectureCount = this.manifest.units.reduce((sum, entry) => sum + (entry.counts?.lectures ?? 0), 0);
    }
    assert(this.blueprint.mcQuestionCount === 25 && this.blueprint.constructedResponseCount === 2 && this.blueprint.minutes === 80, "release blueprint format mismatch");
    this.entryByUnit = new Map(this.manifest.units.map(entry => [entry.unitId, entry]));
    this.lockByUnit = new Map(this.syllabus.units.map(unit => [unit.unitId, unit]));
    return this;
  }
  getCatalog() {
    return this.syllabus.units.map(unit => ({
      unitId: unit.unitId, numericId: unit.numericId, title: unit.title, gradeBand: unit.gradeBand,
      domain: unit.domain, description: unit.description, coreGoal: unit.coreGoal, capScopeNote: unit.capScopeNote,
      legacyUnitIds: unit.legacyUnitIds || [], topics: unit.topics, counts: this.entryByUnit.get(unit.unitId)?.counts
    }));
  }
  async loadUnit(unitId) {
    if (this.units.has(unitId)) return this.units.get(unitId);
    const entry = this.entryByUnit.get(unitId); assert(entry, `missing manifest unit ${unitId}`);
    const unit = await this.loadJson(new URL(entry.path, this.manifestUrl));
    assert(unit.productionRuntime === true && unit.contentAuthority === "CHATGPT_HUMAN_AUTHORED_R1", `${unitId} production source is invalid`);
    assert(unit.unitId === unitId && unit.skills.length === entry.counts.skills, `${unitId} identity/count mismatch`);
    const lock = this.lockByUnit.get(unitId); assert(lock, `missing syllabus lock ${unitId}`);
    unit.__lock = lock;
    for (const skill of unit.skills) {
      assert(skill.lecture?.contentAuthority === "CHATGPT_HUMAN_AUTHORED_R1", `${skill.skillId} lecture authority mismatch`);
      assert(skill.mcQuestions.length === 12 && skill.constructedResponses.length >= 2, `${skill.skillId} question counts mismatch`);
      this.skillById.set(skill.skillId, { unit, skill });
      for (const figure of skill.drawingSpecs || []) {
        assert(!this.figureById.has(figure.figureId), `duplicate figure ${figure.figureId}`);
        this.figureById.set(figure.figureId, figure);
      }
      for (const q of [...skill.mcQuestions, ...skill.constructedResponses]) {
        assert(!this.questionById.has(q.questionId), `duplicate question ${q.questionId}`);
        this.questionById.set(q.questionId, q);
      }
    }
    this.units.set(unitId, unit); return unit;
  }
  async loadAllUnits() { return Promise.all(this.getCatalog().map(item => this.loadUnit(item.unitId))); }
  figureUrl(figureId) {
    if (!figureId) return null;
    const entry = this.manifest.figureIndex?.[figureId]; if (!entry?.sourcePath) return null;
    const marker = "數學會考作戰室/";
    const source = normPath(entry.sourcePath);
    const relative = source.includes(marker) ? source.split(marker).slice(1).join(marker) : source;
    return new URL(`../${relative}`, import.meta.url).href;
  }
  figureMetadata(figureId, fallback = {}) {
    if (!figureId) return { figureUrl: null, figureAlt: "", figureCaption: "", figureDescription: "" };
    const source = { ...(this.figureById.get(figureId) || {}), ...fallback };
    const drawing = source.drawingSpec || source.drawingSpecification || {};
    const accessibility = drawing.accessibility;
    const caption = source.title || source.svgTitle || (typeof accessibility === "object" ? accessibility.title : "") || "題目圖形";
    const alt = source.figureAlt || source.altText || (typeof accessibility === "object" ? accessibility.altText : "") || source.description || source.svgDesc || source.svgDescription || caption;
    const asText = value => Array.isArray(value) ? value.join("；") : (typeof value === "string" ? value : "");
    const description = [...new Set([
      source.description, source.svgDesc, source.svgDescription, source.purpose, source.drawingPurpose,
      drawing.description, drawing.purpose, drawing.layoutConstraints, drawing.visualInferenceWarning, drawing.scaleWarning,
      typeof accessibility === "string" ? accessibility : accessibility?.description,
      source.visualInferenceWarning, source.noVisualInferenceWarning, source.figureReview?.reviewNote
    ].map(asText).filter(value => value && value !== alt))].join(" ") || alt;
    return {
      figureUrl: this.figureUrl(figureId),
      figureAlt: alt,
      figureCaption: caption,
      figureDescription: description
    };
  }
  adaptMc(question) {
    const lock = this.lockByUnit.get(question.unitId); const skill = this.skillById.get(question.skillId)?.skill;
    const steps = Array.isArray(question.steps || question.solutionSteps) ? (question.steps || question.solutionSteps) : [question.steps || question.solutionSteps].filter(Boolean);
    const optionAnalysis = (question.optionAnalysis || []).map((item, index) => ({
      ...(item || {}), choice: item?.choice ?? question.choices?.[item?.choiceIndex ?? index]
    }));
    return {
      ...question, id: question.questionId, type: "mc", text: question.text ?? question.prompt ?? question.stem ?? "", v2UnitId: question.unitId, unitId: lock.numericId,
      answer: question.answerIndex, difficultyBand: question.difficulty,
      difficulty: difficultyNumber[question.difficulty] || 2, ability: abilityByDifficulty[question.difficulty] || "application",
      explanation: question.explanation || question.mainExplanation || "",
      concept: question.concept || question.target || question.authoringIntent || skill?.lecture?.title || "",
      steps, optionAnalysis,
      formula: formulaItems(skill?.lecture).map(item => formatFormula(item)).join("\n"),
      tip: steps.at(-1) || question.concept || question.target || "完成後回代或檢查條件。",
      trap: question.commonMistake || question.misconceptionTarget || "注意題目條件與符號。", taxonomyTopic: skill?.lecture?.title || skill?.title || question.skillId,
      quizLevel: question.difficulty === "literacy" ? "素養" : question.difficulty === "advanced" ? "進階" : "",
      ...this.figureMetadata(question.figureId, question), contentVersion: this.manifest.contentVersion
    };
  }
  adaptCr(question) {
    const lock = this.lockByUnit.get(question.unitId); const skill = this.skillById.get(question.skillId)?.skill;
    const asList = value => Array.isArray(value) ? value : (value ? [value] : []);
    const stepText = item => typeof item === "string" ? item : (item?.work || item?.instruction || item?.action || "");
    const lines = value => asList(value).map(stepText).filter(Boolean);
    const byStepCount = values => values.map(lines).sort((left, right) => right.length - left.length)[0] || [];
    const hanLength = values => (values.join(" ").match(/\p{Script=Han}/gu) || []).length;
    const byTextDepth = values => values.map(lines).sort((left, right) => hanLength(right) - hanLength(left))[0] || [];
    const solutionText = byTextDepth([question.explanation, question.fullCreditSolution, question.standardSolution]);
    const solution = byStepCount([question.reasoningSteps, question.solutionSteps, question.fullCreditSolution, question.standardSolution]);
    const requiredWork = asList(question.requiredWork);
    const commonErrors = byTextDepth([question.commonErrors, question.commonErrorTargets]);
    const scoringNotes = asList(question.scoringNotes);
    const answer = question.standardAnswer || solutionText.join("；") || "依完整解法與評分標準作答。";
    return {
      ...question, type: "cr", text: question.prompt, answer, v2UnitId: question.unitId, unitId: lock.numericId,
      difficultyBand: question.difficulty, difficulty: question.difficulty === "advanced" ? 4 : 3,
      ability: question.difficulty === "advanced" ? "analysis" : "application",
      explanation: solutionText.join(" ") || scoringNotes.join(" "),
      concept: requiredWork.join("；"), steps: solution,
      rubric: (question.rubric || []).map(item => [String(item.score), item.criteria]),
      formula: formulaItems(skill?.lecture).map(item => formatFormula(item)).join("\n"),
      tip: requiredWork.at(-1) || "寫出完整推導與結論。",
      trap: commonErrors.join("；") || "只寫答案不能呈現解題能力。",
      taxonomyTopic: skill?.lecture?.title || question.skillId, quizLevel: "非選", ...this.figureMetadata(question.figureId, question),
      contentVersion: this.manifest.contentVersion
    };
  }
  adaptQuestion(question) { return question.type === "mc" ? this.adaptMc(question) : this.adaptCr(question); }
  lectureForApp(skill) {
    const l = skill.lecture;
    const joinField = (value, sep) => Array.isArray(value) ? value.join(sep) : (value || "");
    const richestText = values => values.filter(Boolean).sort((left, right) =>
      (joinField(right, " ").match(/\p{Script=Han}/gu) || []).length - (joinField(left, " ").match(/\p{Script=Han}/gu) || []).length
    )[0] || "";
    const formulas = formulaItems(l).map(item => formatFormula(item, true)).join("\n\n");
    const formatMethod = (item, index) => {
      if (typeof item === "string") return item;
      if (Array.isArray(item)) return `${index + 1}. ${item[0]}${item[1] ? `（檢查：${item[1]}）` : ""}`;
      return `${item.step ?? index + 1}. ${item.instruction || item.action}${item.check ? `（檢查：${item.check}）` : ""}`;
    };
    const formatExample = item => {
      if (Array.isArray(item)) {
        if (item.length < 4) return { prompt: "", answer: "", why: "" };
        return { prompt: item[1] || "", answer: item[3] || "", why: joinField(item[2], "；") };
      }
      if (item && typeof item === "object" && Object.hasOwn(item, "0")) {
        if (!["0", "1", "2", "3", "why"].every(key => Object.hasOwn(item, key))) return { prompt: "", answer: "", why: "" };
        return { prompt: item[1] || "", answer: item[3] || "", why: joinField(item.why, "；") };
      }
      if (!item || typeof item !== "object") return { prompt: "", answer: "", why: "" };
      const derivation = item.why || item.reasoning || item.solutionSteps || item.solution || "";
      return { prompt: item.prompt || item.question || "", answer: item.answer || joinField(item.solution, "；") || joinField(derivation, "；"), why: joinField(derivation, "；") };
    };
    const formatMistake = item => {
      if (typeof item === "string") return item;
      if (Array.isArray(item)) return `${item[0]}${item[1] ? ` 原因：${item[1]}` : ""}${item[2] ? ` 修正：${item[2]}` : ""}`;
      const mistake = item.mistake || item.wrong || item.wrongReasoning || item.mistakeId || "";
      return `${mistake}${item.why ? ` 原因：${item.why}` : ""}${item.correction || item.fix ? ` 修正：${item.correction || item.fix}` : ""}`;
    };
    const formatExtension = item => typeof item === "string" ? item : `${item.prompt || item.text || ""}${item.answer ? `（答案：${item.answer}）` : ""}`;
    const commonMistakes = (l.commonMistakes || l.mistakes || []).map(formatMistake);
    const checks = l.selfCheck ?? l.selfCheckItems ?? l.selfChecks ?? [];
    const next = l.connections?.next ?? l.nextSkillConnection;
    const nextItems = Array.isArray(next) ? next : [next].filter(Boolean);
    return {
      skillId: skill.skillId, title: l.title || skill.title || skill.skillId,
      summary: joinField(l.summary || l.conciseSummary || l.learningOutcomes, "；"), concept: joinField(richestText([l.conceptNarrative, l.conceptDevelopment, l.concept, l.definition]), "\n"), formula: formulas,
      stepGuide: (l.method || l.stepByStepMethod || []).map(formatMethod),
      examples: (l.workedExamples || l.canonicalExamples || l.examples || []).map(formatExample),
      commonMistakes,
      fullScoreExtension: [...checks, ...nextItems].map(formatExtension).join("；"),
      figures: [...(l.figureReferences || []), ...(l.figureRefs || [])].map(reference => {
        const fallback = typeof reference === "string" ? {} : reference;
        return this.figureMetadata(typeof reference === "string" ? reference : reference.figureId, fallback);
      }).filter(figure => figure.figureUrl),
      contentAuthority: l.contentAuthority
    };
  }
  getSkill(skillId) { return this.skillById.get(skillId)?.skill || null; }
  async getLecturesByUnit(unitId) { const unit = await this.loadUnit(unitId); return unit.skills.map(skill => this.lectureForApp(skill)); }
  buildAppUnits() {
    return this.getCatalog().map(unit => {
      const grade = Number(String(unit.gradeBand)[0]);
      return Object.freeze({
        id: unit.numericId, unitId: unit.unitId, grade, term: String(unit.gradeBand).includes("上") ? "上學期" : "下學期",
        gradeBand: unit.gradeBand, domain: unit.domain, title: unit.title, summary: unit.description,
        core: unit.coreGoal, clarify: unit.capScopeNote, formula: "各技能公式與適用條件列於下方人工作者講義。",
        derivation: "先理解定義與條件，再依技能講義完成推導、驗算與表達。",
        steps: ["辨認技能", "整理條件", "選擇方法", "逐步推導", "檢查結論與單位"],
        tips: unit.topics.flatMap(topic => topic.skills).slice(0, 6).map(skill => skill.title),
        skillCount: unit.counts.skills, legacyUnitIds: unit.legacyUnitIds.slice(), topics: unit.topics
      });
    });
  }
  quizCatalog() {
    return this.getCatalog().map(unit => {
      const grade = Number(String(unit.gradeBand)[0]);
      return Object.freeze({
        id: `${unit.unitId}-human-r1`, quizId: `${unit.unitId}-human-r1`, scope: "chapter", grade,
        term: String(unit.gradeBand).includes("上") ? "上學期" : "下學期", book: `${gradeName(grade)}${String(unit.gradeBand).includes("上") ? "上" : "下"}`,
        chapter: unit.unitId.toUpperCase(), title: `${unit.title}單元小考`, minutes: Math.max(20, Math.ceil(unit.counts.skills * 1.5)),
        questionCount: unit.counts.skills, unitIds: [unit.numericId], v2UnitId: unit.unitId, capUnitIds: unit.legacyUnitIds.slice(),
        officialCodes: `${unit.counts.skills} 項人工作者技能｜每技能抽 1 題`
      });
    });
  }
  weightedPick(candidates, rng, usedSkills, unitCounts) {
    assert(candidates.length, "release blueprint candidate pool empty");
    const ranked = candidates.map(item => {
      const weight = Number(this.blueprint.unitWeights[item.unitId] || 1);
      const skillPenalty = usedSkills.has(item.skillId) ? 4 : 1;
      const unitPenalty = (unitCounts.get(item.unitId) || 0) >= this.blueprint.selectionRules.softMaximumPerUnit ? 2.5 : 1;
      return { item, score: (-Math.log(Math.max(rng(), 1e-12)) / weight) * skillPenalty * unitPenalty };
    }).sort((a, b) => a.score - b.score || a.item.questionId.localeCompare(b.item.questionId));
    return ranked[0].item;
  }
  async generateReleaseMock(seed, level = 2) {
    const allUnits = await this.loadAllUnits(); const rng = mulberry32(hashSeed(`human-rc:${seed}:${level}`));
    const difficultyCounts = this.blueprint.difficultyCountsByLevel[String(level)] || this.blueprint.difficultyCountsByLevel["2"];
    const domainSlots = shuffle(Object.entries(this.blueprint.domainCounts).flatMap(([domain, count]) => Array(count).fill(domain)), rng);
    const difficultySlots = shuffle(Object.entries(difficultyCounts).flatMap(([difficulty, count]) => Array(count).fill(difficulty)), rng);
    const pool = allUnits.flatMap(unit => unit.skills.flatMap(skill => skill.mcQuestions.map(question => ({ ...question, domain: unit.__lock.domain }))));
    const selected = []; const usedIds = new Set(); const usedSkills = new Set(); const unitCounts = new Map();
    for (let index = 0; index < this.blueprint.mcQuestionCount; index++) {
      const domain = domainSlots[index], difficulty = difficultySlots[index];
      const candidates = pool.filter(item => item.domain === domain && item.difficulty === difficulty && !usedIds.has(item.questionId));
      const picked = this.weightedPick(candidates, rng, usedSkills, unitCounts);
      selected.push(picked); usedIds.add(picked.questionId); usedSkills.add(picked.skillId);
      unitCounts.set(picked.unitId, (unitCounts.get(picked.unitId) || 0) + 1);
    }
    const minimumFigures = this.blueprint.selectionRules.minimumFigureMc || 0;
    let figureCount = selected.filter(item => item.figureId).length;
    if (figureCount < minimumFigures) {
      for (let index = 0; index < selected.length && figureCount < minimumFigures; index++) {
        if (selected[index].figureId) continue;
        const old = selected[index];
        const candidates = pool.filter(item => item.domain === old.domain && item.difficulty === old.difficulty && item.figureId && !usedIds.has(item.questionId));
        if (!candidates.length) continue;
        const replacement = this.weightedPick(candidates, rng, usedSkills, unitCounts);
        usedIds.delete(old.questionId); usedIds.add(replacement.questionId); selected[index] = replacement; figureCount++;
      }
    }
    assert(figureCount >= minimumFigures, `could not satisfy minimum figure questions: ${figureCount}/${minimumFigures}`);
    const crPool = shuffle(allUnits.flatMap(unit => unit.skills.flatMap(skill => skill.constructedResponses.map(question => ({ ...question, domain: unit.__lock.domain })))), rng);
    const cr = []; const crUnits = new Set(); const crDomains = new Set();
    for (const targetDifficulty of this.blueprint.selectionRules.constructedResponseDifficultyTargets) {
      const preferred = crPool.find(item => item.difficulty === targetDifficulty && !crUnits.has(item.unitId) && !crDomains.has(item.domain));
      const fallback = crPool.find(item => item.difficulty === targetDifficulty && !crUnits.has(item.unitId));
      const picked = preferred || fallback; assert(picked, `no CR candidate for ${targetDifficulty}`);
      cr.push(picked); crUnits.add(picked.unitId); crDomains.add(picked.domain);
    }
    const domainActual = Object.fromEntries(Object.keys(this.blueprint.domainCounts).map(domain => [domain, selected.filter(item => item.domain === domain).length]));
    const difficultyActual = Object.fromEntries(Object.keys(difficultyCounts).map(difficulty => [difficulty, selected.filter(item => item.difficulty === difficulty).length]));
    assert(JSON.stringify(domainActual) === JSON.stringify(this.blueprint.domainCounts), `domain contract mismatch ${JSON.stringify(domainActual)}`);
    assert(JSON.stringify(difficultyActual) === JSON.stringify(difficultyCounts), `difficulty contract mismatch ${JSON.stringify(difficultyActual)}`);
    return {
      kind: "mock", id: `MATH-HUMAN-R1-${seed}-${level}`, title: "國中教育會考數學科人工作者模擬題本",
      minutes: this.blueprint.minutes, seed: Number(seed), level: Number(level), blueprint: this.blueprint.profileId,
      engineVersion: "human-runtime-production-r1", contentVersion: this.manifest.contentVersion,
      questions: [...selected.map(q => this.adaptMc(q)), ...cr.map(q => this.adaptCr(q))],
      blueprintContract: { domainCounts: domainActual, difficultyCounts: difficultyActual, figureMcCount: figureCount, mc: selected.length, cr: cr.length }
    };
  }
  async generateUnitQuiz(unitId, seed) {
    const unit = await this.loadUnit(unitId); const rng = mulberry32(hashSeed(`${unitId}:${seed}:human-rc-quiz`));
    const questions = unit.skills.map(skill => skill.mcQuestions[Math.floor(rng() * skill.mcQuestions.length)]).map(q => this.adaptMc(q));
    return { kind: "quiz", id: `MATH-HUMAN-R1-QUIZ-${unitId}-${seed}`, quizId: `${unitId}-human-r1`, seed: Number(seed),
      title: `${unit.__lock.title}單元小考`, grade: Number(String(unit.__lock.gradeBand)[0]), term: String(unit.__lock.gradeBand).includes("上") ? "上學期" : "下學期",
      chapter: unitId.toUpperCase(), scope: "chapter", minutes: Math.max(20, Math.ceil(questions.length * 1.5)), questionCount: questions.length,
      officialCodes: `${questions.length} 項技能｜每技能 1 題`, unitIds: [unit.__lock.numericId], v2UnitIds: [unitId], blueprint: "human-r1-one-question-per-skill",
      engineVersion: "human-runtime-production-r1", contentVersion: this.manifest.contentVersion, questions };
  }
  async generateUnitDrill(unitId, seed, count = 1, level = 2, excludeKeys = []) {
    const unit = await this.loadUnit(unitId); const excluded = new Set(excludeKeys); const rng = mulberry32(hashSeed(`${unitId}:${seed}:drill:${level}`));
    const pool = shuffle(unit.skills.flatMap(skill => skill.mcQuestions).filter(q => !excluded.has(q.questionId)), rng).slice(0, count);
    return pool.map(q => this.adaptMc(q));
  }
  async generateCorrectionDrill(question, seed, count = 1, excludeKeys = []) {
    const source = this.skillById.get(question.skillId); assert(source, `skill not found ${question.skillId}`); const excluded = new Set(excludeKeys);
    const rng = mulberry32(hashSeed(`${question.skillId}:${seed}:correction`));
    return shuffle(source.skill.mcQuestions.filter(q => q.questionId !== question.questionId && !excluded.has(q.questionId)), rng).slice(0, count).map(q => this.adaptMc(q));
  }
  drillQuestionSignature(question) { return question.questionId; }
  restoreSavedPaper(record) { assert(record?.exam?.contentVersion === this.manifest.contentVersion, "saved paper content version mismatch"); return record.exam; }
}

export function assessmentSignature(assessment) { return assessment.questions.map(item => item.questionId).join("|"); }
