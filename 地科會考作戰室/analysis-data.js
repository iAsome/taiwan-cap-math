// 近十年（106-115）官方自然科題本逐題核對地球科學主概念的研究編碼帳本。
// 官方只公布自然科整體題數，沒有逐題公布「地球科學」標籤；要填入這裡，
// 需要跟 taiwan-cap-math 的 analysis-data.js 一樣，把 106-115 年官方
// 自然科題本逐題人工核對後才能寫，目前尚未完成，因此先留空。
//
// ponytail: 空值時 app.js 的 renderAnalysis() 會顯示「尚未建置」提示，
// 不會假造統計數字。之後若完成逐題核對，補上以下結構即可自動顯示：
// window.EARTH_ANALYSIS = {
//   officialByYear: { 115: { count, abilities: { knowledge, comprehension, inquiry } }, ... },
//   primaryUnits: { 115: [unitId, ...], ... },
//   domainByUnit: { 1: "地球的水與地貌", ... }
// };
window.EARTH_ANALYSIS = null;
