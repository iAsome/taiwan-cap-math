window.TEXT_ONLY_POLICY = (() => {
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

  const IMAGE_REF_RE = /\u5982[\u4e0a\u4e0b\u5de6\u53f3]?\u5716|[\u4e0a\u4e0b\u5de6\u53f3]\u5716|\u6839\u64da\u5716|(?<![形線狀盒規作方條餅表])\u5716\u4e2d|\u9644\u5716|\u898b\u5716|\u5716[\uff08(一二三四五六七八九十0-9]|\u8868[\uff08(一二三四五六七八九十0-9]|\u5716\u6240\u793a|\u8868\u6240\u793a|\u7167\u7247|\u5716\u7247/i;
  const VISUAL_MARKUP_RE = /<(?:img|svg)\b/i;
  const TEXTUAL_FIGURE_DATA_RE = /\u534a\u5f91[^，。；;\n]*\d|\u76f4\u5f91[^，。；;\n]*\d|\u908a\u9577[^，。；;\n]*\d|\u5e95[^，。；;\n]*\d[^。；;\n]*\u9ad8[^，。；;\n]*\d|\u9577[^，。；;\n]*\d[^。；;\n]*\u5bec[^，。；;\n]*\d|[A-Z]\s*\(\s*-?\d+(?:\.\d+)?\s*,\s*-?\d+(?:\.\d+)?\s*\)|\u8cc7\u6599[^。；;\n]*\d|\u6b21\u6578[^。；;\n]*\d|\u8868\u683c[^。；;\n]*\d|\u5713\u5fc3[^。；;\n]*\d|\u89d2[^。；;\n]*\d/i;
  const SYMBOLS = [
    ["r", /\u534a\u5f91|\u5713|\u6247\u5f62|\u5f27|\u5713\u5468|\u9762\u7a4d|\u9ad4\u7a4d|r\s*[=＝]/, "r 代表半徑"],
    ["h", /\u9ad8|\u9ad8\u5ea6|\u4e09\u89d2\u5f62|\u68af\u5f62|\u67f1|\u9310|h\s*[=＝]/, "h 代表高或高度"],
    ["l", /\u659c\u9ad8|\u6bcd\u7dda|\u7dda\u6bb5|\u9577\u5ea6|l\s*[=＝]/, "l 代表斜高、母線或線段長度"],
    ["m", /\u659c\u7387|y\s*[=＝]\s*m|mx|m\s*[=＝]/, "m 代表斜率"],
    ["x", /\u5750\u6a19|\u5ea7\u6a19|\(x\s*,\s*y\)|x\s*\u8ef8|\u51fd\u6578|\u65b9\u7a0b\u5f0f|\u672a\u77e5\u6578|\u516c\u91cc|\u7e3d\u6578|\u500b\u6578|\u8cbb\u7528|\u89d2|x\s*[=＝]/, "x 代表題目中的未知數、橫坐標或輸入量，依題意定義"],
    ["y", /\u5750\u6a19|\u5ea7\u6a19|\(x\s*,\s*y\)|y\s*\u8ef8|\u7e3d\u8cbb\u7528|\u8f38\u51fa\u91cf|\u51fd\u6578|y\s*[=＝]/, "y 代表題目中的未知數、縱坐標或輸出量，依題意定義"],
    ["a", /ax|a\s*[=＝]|\u4e00\u6b21\u9805\u4fc2\u6578|\u4e8c\u6b21\u9805\u4fc2\u6578|\u5e38\u6578|\u7b49\u5dee|\u9996\u9805/, "a 代表題目指定的係數、常數或首項，依題意定義"],
    ["b", /bx|by|b\s*[=＝]|y\s*[=＝]\s*mx\s*[+＋-]|\u5e38\u6578|\u4fc2\u6578|\u516c\u5dee/, "b 代表題目指定的係數、常數或截距，依題意定義"],
    ["c", /c\s*[=＝]|ax|by|\u5e38\u6578|\u4fc2\u6578|\u622a\u8ddd|\u65b9\u7a0b\u5f0f/, "c 代表題目指定的常數、係數或截距，依題意定義"],
    ["n", /\u7b2c\s*n|\u7b2c.*\u9805|\u9805\u6578|\u500b\u6578|\u6b21\u6578|\u6a23\u672c|\u6578\u5217|\u7d1a\u6578|\u6b63\s*n|n\s*\u908a\u5f62|\u591a\u908a\u5f62|2n|\u5076\u6578|\u6574\u6578|\u8b49\u660e|n\s*[=＝]/, "n 代表項數、個數、次數或一個整數"],
    ["k", /\u6b63\u6bd4|\u53cd\u6bd4|\u6bd4\u4f8b\u5e38\u6578|\u76f8\u4f3c\u6bd4|\u9802\u9ede|y\s*[=＝].*k|\u51fd\u6578|k\s*[=＝]/, "k 代表比例常數、相似比或題目指定的常數，依題意定義"]
  ];

  const textOf = q => [
    q?.text,
    q?.formula,
    q?.concept,
    q?.tip,
    q?.trap,
    q?.taxonomyTopic,
    q?.taxonomySection,
    ...(q?.choices || []),
    ...(q?.steps || [])
  ].filter(Boolean).join(" ");

  const hasVisualReference = q => IMAGE_REF_RE.test(textOf(q)) || VISUAL_MARKUP_RE.test(textOf(q));
  const isTextSelfContained = q => !hasVisualReference(q) || TEXTUAL_FIGURE_DATA_RE.test(textOf(q));
  const visualStatus = q => isTextSelfContained(q) ? "self-contained" : "needs-text";

  function symbolNotes(q) {
    const text = textOf(q);
    const notes = [];
    for (const [symbol, trigger, note] of SYMBOLS) {
      const mentionsSymbol = new RegExp(`(^|[^A-Za-z])${symbol}([^A-Za-z]|$)`).test(text);
      if (mentionsSymbol && trigger.test(text) && !notes.includes(note)) notes.push(note);
    }
    return notes;
  }

  function normalizeQuestion(question, subject = "unknown") {
    if (!question || typeof question !== "object") return question;
    const { diagram: _legacyDiagram, diagramSpec: _legacyDiagramSpec, ...rest } = question;
    const status = visualStatus(question);
    return {
      ...rest,
      visualPolicy: "text-only",
      visualReason: "文字模式：不顯示圖片，題目必須靠文字描述即可作答。",
      visualTextStatus: status,
      visualRisk: status === "needs-text" ? ["image-dependent"] : [],
      pausedReason: status === "needs-text" ? "題目仍依賴圖片或表格，待文字化後恢復。" : "",
      ...(subject === "math" ? { symbolNotes: symbolNotes(question) } : {})
    };
  }

  function normalizeQuestions(questions, subject) {
    if (!Array.isArray(questions)) return questions;
    return questions.map(q => normalizeQuestion(q, subject));
  }

  function prepareTextOnlyExam(exam, subject) {
    if (!exam || !Array.isArray(exam.questions)) return exam;
    const questions = normalizeQuestions(exam.questions, subject);
    const kept = questions.filter(q => q.visualTextStatus !== "needs-text");
    const paused = questions.length - kept.length;
    return {
      ...exam,
      questions: kept,
      textOnlyOriginalCount: questions.length,
      textOnlyPausedCount: paused,
      textOnlyPauseNote: paused ? `已暫停 ${paused} 題原圖依賴題，待文字化後恢復作答。` : ""
    };
  }

  function pauseNotice(exam) {
    return exam?.textOnlyPausedCount
      ? `<div class="text-only-notice"><strong>文字化待補</strong><span>${exam.textOnlyPauseNote}</span></div>`
      : "";
  }

  function subjectFromPath(path) {
    for (const [folder, code] of Object.entries(SUBJECTS)) {
      if (String(path).includes(folder)) return code;
    }
    return "math";
  }

  return {
    normalizeQuestion,
    normalizeQuestions,
    prepareTextOnlyExam,
    pauseNotice,
    subjectFromPath,
    symbolNotes,
    SUBJECTS
  };
})();
