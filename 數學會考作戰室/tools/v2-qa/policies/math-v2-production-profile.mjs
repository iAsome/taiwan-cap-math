export const UNIT_INVENTORY = Object.freeze([
  ["u01", "整數運算", 15], ["u02", "分數運算", 15], ["u03", "一元一次方程式", 15],
  ["u04", "二元一次聯立方程式", 14], ["u05", "平面直角坐標系", 12], ["u06", "比例式", 12],
  ["u07", "一元一次不等式", 12], ["u08", "平面幾何圖形與三視圖", 14], ["u09", "統計圖表與資料處理", 16],
  ["u10", "乘法公式與多項式", 13], ["u11", "平方根與畢氏定理", 16], ["u12", "因式分解", 10],
  ["u13", "一元二次方程式", 15], ["u14", "數列與等差級數", 12], ["u15", "函數及其圖形", 13],
  ["u16", "三角形的性質與尺規作圖", 18], ["u17", "平行與四邊形", 18], ["u18", "連比與相似形", 16],
  ["u19", "圓", 18], ["u20", "推理證明與三角形的心", 15], ["u21", "二次函數", 12],
  ["u22", "統計與機率", 18], ["u23", "立體幾何圖形", 20]
].map(([unitId, title, skills]) => Object.freeze({ unitId, title, skills, questions: skills * 12, lectures: skills })));

export const productionProfile = Object.freeze({
  id: "math-v2-production",
  version: "1.0.0",
  documentPath: "MATH_V2_PRODUCTION_PROFILE.md",
  units: 23,
  skills: 339,
  questions: 4068,
  lectures: 339,
  questionsPerSkill: 12,
  difficultyCountsPerSkill: Object.freeze({ basic: 3, standard: 3, advanced: 3, literacy: 3 }),
  answerIndexCountsPerSkill: Object.freeze({ 0: 3, 1: 3, 2: 3, 3: 3 }),
  type: "mc",
  visualMode: "text-only",
  unitQuiz: Object.freeze({ onePerSkill: true, minutes: 20, shuffleQuestions: true, shuffleChoices: true }),
  mockExam: Object.freeze({ questions: 25, minutes: 80, type: "mc", constructedResponse: false }),
  release: Object.freeze({ unresolvedBlocking: 0, unresolvedTargeted: 0, deterministicBuild: true, sourceGeneratedEquality: true, defaultConsumer: "v2", legacyDefaultConsumer: false })
});

export default productionProfile;
