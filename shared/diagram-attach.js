window.DIAGRAM_ATTACH = (() => {
  const SUBJECTS = {
    "數學會考作戰室": "math",
    "國文會考作戰室": "chinese",
    "英文會考作戰室": "english",
    "理化會考作戰室": "physics-chem",
    "生物會考作戰室": "biology",
    "地科會考作戰室": "earth",
    "歷史會考作戰室": "history",
    "地理會考作戰室": "geography",
    "公民會考作戰室": "civics"
  };

  function inferCtx(question, subject) {
    return {
      subject,
      topicTitle: question.taxonomyTopic || question.topicTitle || "",
      sectionTitle: question.taxonomySection || question.sectionTitle || "",
      choices: question.choices,
      steps: question.steps,
      taxonomyKey: question.taxonomyKey
    };
  }

  function loadOverride(subject, question) {
    const table = window.DIAGRAM_OVERRIDES?.[subject];
    if (!table) return null;
    const key = question.taxonomyKey || question.id;
    if (key && table[key]) return table[key];
    const infer = window.DIAGRAM_INFER;
    const hash = infer?.stripFrac?.(question.text || "")?.slice(0, 80);
    return hash && table[hash] ? table[hash] : null;
  }

  function attachDiagram(question, subject) {
    if (!question || typeof question !== "object") return question;
    if (question.diagram && typeof question.diagram === "string" && question.diagram.trim()) return question;
    const infer = window.DIAGRAM_INFER;
    const engine = window.DIAGRAM_ENGINE;
    if (!infer || !engine) return question;
    const ctx = inferCtx(question, subject);
    const blob = [question.text, ...(question.choices || []), ...(question.steps || [])].join(" ");
    if (!infer.needsDiagram(blob, subject, ctx)) return question;
    const spec = question.diagramSpec
      || loadOverride(subject, question)
      || infer.inferDiagramSpec(blob, ctx);
    if (!spec?.kind) return question;
    return {
      ...question,
      diagramSpec: spec,
      diagram: engine.renderQuestionDiagram(spec)
    };
  }

  function attachDiagramText(text, subject, extraCtx = {}) {
    const infer = window.DIAGRAM_INFER;
    const engine = window.DIAGRAM_ENGINE;
    if (!infer || !engine || !infer.needsDiagram(text, subject, extraCtx)) return "";
    const spec = infer.inferDiagramSpec(text, { subject, ...extraCtx });
    return spec ? engine.renderDiagram(spec) : "";
  }

  function subjectFromPath(path) {
    for (const [folder, code] of Object.entries(SUBJECTS)) {
      if (String(path).includes(folder)) return code;
    }
    return "math";
  }

  function attachQuestions(questions, subject) {
    if (!Array.isArray(questions)) return questions;
    return questions.map(q => attachDiagram(q, subject));
  }

  return { attachDiagram, attachDiagramText, attachQuestions, subjectFromPath, SUBJECTS };
})();
