const url = "https://iasome.github.io/taiwan-cap-math/%E6%95%B8%E5%AD%B8%E6%9C%83%E8%80%83%E4%BD%9C%E6%88%B0%E5%AE%A4/index.html";
const text = await fetch(url).then(r => r.text());
const cache = text.match(/\?v=202607[^"' ]+/)?.[0] || "none";
const checks = {
  cache,
  sanitize: text.includes("math-text-sanitize.js"),
  fractionMarkup: text.includes("fraction-markup.js"),
  variantBank: text.includes("quiz-variant-bank.js"),
  variantsLoader: text.includes("quiz-variants.js"),
  lecture: text.includes("lecture-taxonomy.js"),
  quizSeed: text.includes("quizSeedInput")
};
console.log("math live:", checks);
const ok = checks.sanitize && checks.fractionMarkup && checks.variantBank && checks.variantsLoader && checks.lecture && checks.quizSeed;
process.exit(ok ? 0 : 1);
