// 近十年（106-115）官方自然科題本逐題核對地球科學主概念的研究編碼帳本。
// 官方只公布自然科整體題數，沒有逐題公布「地球科學」標籤，以下資料是依
// archive-exams.js 中已逐題轉錄、核對答案的地科題目，人工判讀其對應單元與
// 能力向度（知識理解／統整判讀／科學探究）後編碼而成。
window.EARTH_ANALYSIS = (() => {
  // primaryUnits[年度]：依 archive-exams.js 該年度題目出現順序列出對應單元 id。
  const primaryUnits = {
    106: [13,16,17,19,17,10],
    107: [16,7,13,17],
    108: [4,16,7,19],
    109: [3,13,13,14,11,15,17],
    110: [16,14,19,14],
    111: [17,14,9,16],
    112: [12,6,19,19,15,11],
    113: [15,7,14],
    114: [14,19,10,13,15],
    115: [11,16,10,17,19],
  };

  // officialByYear[年度]：地科題數，以及能力向度（知識理解／統整判讀／科學探究）逐題人工分類的統計。
  const officialByYear = {
    115: { count: 5, abilities: { knowledge: 0, comprehension: 5, inquiry: 0 } },
    114: { count: 5, abilities: { knowledge: 1, comprehension: 2, inquiry: 2 } },
    113: { count: 3, abilities: { knowledge: 0, comprehension: 2, inquiry: 1 } },
    112: { count: 6, abilities: { knowledge: 2, comprehension: 4, inquiry: 0 } },
    111: { count: 4, abilities: { knowledge: 2, comprehension: 1, inquiry: 1 } },
    110: { count: 4, abilities: { knowledge: 1, comprehension: 3, inquiry: 0 } },
    109: { count: 7, abilities: { knowledge: 2, comprehension: 5, inquiry: 0 } },
    108: { count: 4, abilities: { knowledge: 0, comprehension: 4, inquiry: 0 } },
    107: { count: 4, abilities: { knowledge: 2, comprehension: 2, inquiry: 0 } },
    106: { count: 6, abilities: { knowledge: 4, comprehension: 2, inquiry: 0 } }
  };

  const domainByUnit = Object.fromEntries(
    window.EARTH_DATA.units.map(unit => [unit.id, unit.domain])
  );

  return { officialByYear, primaryUnits, domainByUnit };
})();
