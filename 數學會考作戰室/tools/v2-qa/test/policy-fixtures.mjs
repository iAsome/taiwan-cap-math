export function validQuestion(overrides = {}) {
  return {
    questionId: "u01-s001-v001", unitId: "u01", skillId: "skill-a", difficulty: "advanced",
    text: "3公尺長的繩子平均分成3段，每段多長？", choices: ["1公尺", "2公尺", "3公尺", "4公尺"], answerIndex: 0,
    explanation: "題目給定總長為三公尺，並且平均分成三段，因此用總長除以段數，三除以三等於一，所以每段長一公尺，其餘選項都不符合平均分配的結果。",
    steps: ["找出總長與段數", "以總長除以段數", "檢查三段合計是否為三公尺"],
    commonMistake: "將平均分成三段誤看成再增加三公尺。", visualMode: "text-only",
    ...overrides
  };
}

export function validLecture(overrides = {}) {
  const long = "先辨認題目中的已知數量、所求數量與單位，再根據數量之間的關係選擇運算。列式後要依運算順序計算，並把結果代回原情境檢查單位、大小和條件是否一致，不能只看到公式就直接套用。";
  const why = "先以總量除以等分數得到每一份的數量，再用乘法逆向檢查所有份數的合計，因此能同時確認數值與單位都正確。";
  return {
    unitId: "u01", skillId: "skill-a", title: "平均分配", concept: long, formula: "每份=總量÷份數",
    stepGuide: ["讀題", "找總量", "找份數", "列式", "驗算"],
    examples: [{ prompt: "6公尺分3段", answer: "2公尺", why }, { prompt: "8公升分4份", answer: "2公升", why }],
    commonMistakes: ["把除法寫成加法", "將總量與份數對調", "漏寫答案單位", "沒有代回驗算"],
    ...overrides
  };
}

export function legacyLectureExample(question, explanation) {
  return { question, explanation };
}

export const exactAgentsAppend = "\n## Mathematics Content Authority\n\n- `MATH_CONTENT_STANDARD_TW.md` is the sole normative authority for all student-facing mathematics content.\n- `數學會考作戰室/tools/v2-qa/policies/math-tw-v1.mjs` is only the deterministic machine-readable adapter for that document and must not contain an independently editable policy.\n- ChatGPT owns mathematics, pedagogy, terminology, notation, acceptance, migration and release decisions.\n- Executors may modify mathematics content only through an explicitly authorized task with fixed refs and declared file scope.\n- Previously accepted mathematics content is not exempt from a newer policy version or policy hash.\n- A required validation failure prohibits commit and push.\n- Completion means reporting results and stopping; executors must not autonomously begin another task, create a pull request or merge.\n";
