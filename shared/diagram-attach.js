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
    const resolve = entry => typeof entry === "function" ? entry(question) : entry;
    if (key && table[key]) return resolve(table[key]);
    const byKey = table.__byKey && resolve(table.__byKey);
    if (byKey?.kind) return byKey;
    const infer = window.DIAGRAM_INFER;
    const hash = infer?.stripFrac?.(question.text || "")?.slice(0, 80);
    return hash && table[hash] ? resolve(table[hash]) : null;
  }

  function attachDiagram(question, subject) {
    if (!question || typeof question !== "object") return question;
    if (question.diagram && typeof question.diagram === "string" && question.diagram.trim()) return question;
    const engine = window.DIAGRAM_ENGINE;
    if (!engine) return question;
    const policy = subject === "math" ? window.DIAGRAM_OVERRIDES?.math?.__policy?.(question) : null;
    if (policy?.diagramPolicy === "none") return { ...question, ...policy, diagram: "", diagramSpec: null };
    const explicitSpec = question.diagramSpec || loadOverride(subject, question);
    if (subject === "math") {
      // ponytail: math figures must be teacher-verified; keyword inference created mismatched textbook-style diagrams.
      if (!explicitSpec?.kind || explicitSpec.verified !== true) return policy ? { ...question, ...policy } : question;
      return {
        ...question,
        ...policy,
        diagramSpec: explicitSpec,
        diagram: engine.renderQuestionDiagram(explicitSpec)
      };
    }
    const infer = window.DIAGRAM_INFER;
    if (!infer) return question;
    const ctx = inferCtx(question, subject);
    const blob = [question.text, ...(question.choices || []), ...(question.steps || [])].join(" ");
    if (!infer.needsDiagram(blob, subject, ctx)) return question;
    const spec = explicitSpec || infer.inferDiagramSpec(blob, ctx);
    if (!spec?.kind) return question;
    return {
      ...question,
      diagramSpec: spec,
      diagram: engine.renderQuestionDiagram(spec)
    };
  }

  function attachDiagramText(text, subject, extraCtx = {}) {
    const engine = window.DIAGRAM_ENGINE;
    if (!engine) return "";
    const policy = subject === "math" ? window.DIAGRAM_OVERRIDES?.math?.__policy?.({
      text,
      taxonomyKey: extraCtx.taxonomyKey,
      taxonomyTopic: extraCtx.topicTitle,
      taxonomySection: extraCtx.sectionTitle
    }) : null;
    if (policy?.diagramPolicy === "none") return "";
    const overrideSpec = loadOverride(subject, {
      text,
      taxonomyKey: extraCtx.taxonomyKey,
      taxonomyTopic: extraCtx.topicTitle,
      taxonomySection: extraCtx.sectionTitle
    });
    const explicitSpec = extraCtx.diagramSpec || extraCtx.spec || overrideSpec;
    if (subject === "math") {
      // ponytail: lecture examples get no guessed diagrams; add verified specs only when the figure matches the exact text.
      return explicitSpec?.kind && explicitSpec.verified === true ? engine.renderDiagram(explicitSpec) : "";
    }
    const infer = window.DIAGRAM_INFER;
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
