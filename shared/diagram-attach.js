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

  // ponytail: hybrid — exam stem-only for image-ref; tip/trap 的「盒狀圖中線」不算圖依賴
  const IMAGE_REF_RE = /\u5982[\u4e0a\u4e0b\u5de6\u53f3]?\u5716|[\u4e0a\u4e0b\u5de6\u53f3]\u5716|\u6839\u64da\u5716|(?<![形線狀盒規作])\u5716\u4e2d|\u9644\u5716|\u898b\u5716|\u5716[\uff08(\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u53410-9]|\u8868[\uff08(\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u53410-9]|\u5716\u6240\u793a|\u8868\u6240\u793a|\u5716\u7247/i;
  const SELF_CONTAINED_RE = /[:：]|分別為|依序|上方|下方|左側|右側|中央|橫軸|縱軸|座標|坐標|Q[₁₁₂₃3]|四分位|\([A-D]\)|（[A-D]）|（[^）]{1,40}）|\(-?\d+(?:\.\d+)?\s*,\s*-?\d+(?:\.\d+)?\)|甲.*乙|A.*B|\d+(?:\.\d+)?%/;
  const SYMBOLS = [
    ["r", /半徑|圓|圓柱|圓錐|扇形|弧長|周長|面積/, "r 代表半徑"],
    ["h", /高|高度|圓柱|圓錐|三角形|梯形|柱體|錐體/, "h 代表高"],
    ["l", /母線|斜高|圓錐/, "l 代表母線（斜高）"],
    ["m", /斜率|y\s*[=＝]\s*m|mx|線型函數|直線/, "m 代表斜率"],
    ["x", /\u5750\u6a19|\u5ea7\u6a19|\(x\s*,\s*y\)|x\s*\u8ef8|\u51fd\u6578|\u65b9\u7a0b\u5f0f|\u672a\u77e5\u6578|\u516c\u91cc|\u7e3d\u6578|\u500b\u6578|\u8cbb\u7528|x\s*[\u00b0\u5ea6]|\u89d2|當\s*x|若\s*x|令\s*x|代入|解/, "x 代表題目中的未知數、橫坐標或輸入量，依題意定義"],
    ["y", /坐標|座標|\(x\s*,\s*y\)|y\s*軸|函數|方程式|費用|輸出|當\s*y|若\s*y|令\s*y|代入|變數|常數/, "y 代表題目中的未知數、縱坐標或輸出量，依題意定義"],
    ["a", /a[₁1]?|ax|二次函數|等差|係數|常數|公式|連比|比例|a\s*:\s*b/, "a 代表比例或代數量，依題意定義"],
    ["b", /by|bx|y\s*[=＝]\s*mx\s*[+＋-]|截距|係數|常數|公式|連比|比例|a\s*:\s*b/, "b 代表比例或代數量，依題意定義"],
    ["c", /ax|by|方程式|係數|常數|斜邊|公式|連比|:\s*c\s*:/, "c 代表比例或代數量，依題意定義"],
    ["n", /\u7b2c\s*n|\u7b2c.*\u9805|\u9805\u6578|\u500b\u6578|\u6b21\u6578|\u6a23\u672c|\u6578\u5217|\u7d1a\u6578|\u6b63\s*n|n\s*\u908a\u5f62|\u591a\u908a\u5f62|2n|\u5076\u6578|\u6574\u6578|\u8b49\u660e/, "n 代表項數、個數、次數或一個整數"],
    ["k", /\u6b63\u6bd4|\u53cd\u6bd4|\u6bd4\u4f8b\u5e38\u6578|\u9802\u9ede|y\s*[=\uff1d].*k|\u51fd\u6578|\u76f8\u4f3c\u6bd4|\u76f8\u4f3c|\u5468\u9577\u6bd4|\u9762\u7a4d\u6bd4|k\s*[=\uff1d]/, "k 代表比例常數、相似比或頂點的 y 值，依題意定義"],
  ];

  const examBlob = q => [q?.text, ...(q?.choices || [])].filter(Boolean).join(" ");
  const metaBlob = q => [q?.text, q?.formula, q?.concept, q?.tip, q?.trap, q?.taxonomyTopic, q?.taxonomySection, ...(q?.choices || []), ...(q?.steps || [])].filter(Boolean).join(" ");
  const hasImageRef = text => IMAGE_REF_RE.test(String(text || ""));
  const isSelfContained = q => !hasImageRef(examBlob(q)) || SELF_CONTAINED_RE.test(examBlob(q));
  const visualStatus = q => isSelfContained(q) ? "self-contained" : "needs-text";

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
    if (key && typeof table[key] === "function") {
      try { return table[key](question); } catch { /* optional override */ }
    }
    if (key && table[key] && typeof table[key] === "object") return table[key];
    const infer = window.DIAGRAM_INFER;
    const hash = infer?.stripFrac?.(question.text || "")?.slice(0, 80);
    return hash && table[hash] ? table[hash] : null;
  }

  function symbolNotes(q) {
    const text = metaBlob(q);
    const notes = [];
    for (const [symbol, trigger, note] of SYMBOLS) {
      const mentionsSymbol = new RegExp(`(^|[^A-Za-z])${symbol}([^A-Za-z]|$)`, "i").test(text);
      if (mentionsSymbol && trigger.test(text) && !notes.includes(note)) notes.push(note);
    }
    return notes;
  }

  function textOnlyQuestion(question, subject = "unknown") {
    if (!question || typeof question !== "object") return question;
    const { diagram, diagramSpec, ...rest } = question;
    const status = visualStatus(question);
    return {
      ...rest,
      visualPolicy: "text-only",
      visualReason: "測驗作答頁不顯示圖；題目須靠文字作答。",
      visualTextStatus: status,
      visualRisk: status === "needs-text" ? ["image-dependent"] : [],
      pausedReason: status === "needs-text" ? "題幹仍依賴圖片，待文字化後恢復出題。" : "",
      ...(subject === "math" ? { symbolNotes: symbolNotes(question) } : {})
    };
  }

  function attachDiagram(question, subject) {
    return textOnlyQuestion(question, subject);
  }

  function attachDiagramText(_text, _subject, _extraCtx = {}) {
    return "";
  }

  function subjectFromPath(path) {
    for (const [folder, code] of Object.entries(SUBJECTS)) {
      if (String(path).includes(folder)) return code;
    }
    return "math";
  }

  function attachQuestions(questions, subject) {
    if (!Array.isArray(questions)) return questions;
    return questions.map(q => textOnlyQuestion(q, subject));
  }

  function prepareTextOnlyExam(exam, subject) {
    if (!exam || !Array.isArray(exam.questions)) return exam;
    const questions = attachQuestions(exam.questions, subject);
    const kept = questions.filter(q => q.visualTextStatus !== "needs-text");
    const paused = questions.length - kept.length;
    return {
      ...exam,
      questions: kept,
      textOnlyOriginalCount: questions.length,
      textOnlyPausedCount: paused,
      textOnlyPauseNote: paused ? `已暫停 ${paused} 題原圖依賴題，待文字描述補完後恢復。` : ""
    };
  }

  function pauseNotice(exam) {
    return exam?.textOnlyPausedCount
      ? `<div class="text-only-notice"><strong>文字模式</strong><span>${exam.textOnlyPauseNote}</span></div>`
      : "";
  }

  return {
    attachDiagram,
    attachDiagramText,
    attachQuestions,
    prepareTextOnlyExam,
    pauseNotice,
    subjectFromPath,
    symbolNotes,
    SUBJECTS
  };
})();
