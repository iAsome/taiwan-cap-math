const integrated = "d4275613e3b4464c3fa7b22b7c9eed807feaa3ff";
export const sharedQaRef = "4bdfccf97b35d768224acb79859699143305fee0";
export const legacyUiRef = integrated;
export const legacySourcePaths = ["數學會考作戰室/quiz-taxonomy.js", "數學會考作戰室/quiz-variant-bank.js", "數學會考作戰室/lecture-taxonomy.js", "數學會考作戰室/questions.js"];
export const uiPaths = ["數學會考作戰室/index.html", "數學會考作戰室/app.js"];

const specs = [
  ["U01", integrated, 60, 15, 15, false, true], ["U02", integrated, 60, 15, 15, false, true],
  ["U03", integrated, 60, 15, 15, false, true], ["U04", integrated, 168, 14, 14, true, true],
  ["U05", integrated, 144, 12, 12, true, true], ["U06", integrated, 144, 12, 12, true, true],
  ["U07", integrated, 144, 12, 12, true, true], ["U08", "56a55474dbcbdb65309eb83127e5280b358d168f", 144, 12, 12, true, true],
  ["U09", "d60bdc261c9210465a0a59ede7028c933e305e7f", 144, 12, 12, true, true],
  ["U10", "8c54029901b590ef9dc725c5da8ed0570488cf63", 144, 12, 12, true, true]
];

export const units = Object.fromEntries(specs.map(([id, ref, questions, lectures, skills, advanced, literacy]) => {
  const slug = id.toLowerCase();
  return [id, {
    id, ref,
    questionBankPath: `數學會考作戰室/v2/math-question-bank-v2-${slug}.js`,
    lectureBankPath: `數學會考作戰室/v2/math-lecture-v2-${slug}.js`,
    expected: { questions, lectures, skills },
    legacySourcePaths, uiPaths,
    coverage: { advanced, literacy }
  }];
}));

export default Object.freeze({ sharedQaRef, legacyUiRef, legacySourcePaths, uiPaths, units });
