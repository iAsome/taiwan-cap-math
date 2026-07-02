// 近十年（106-115）官方社會科題本逐題核對「地理」主概念的研究編碼帳本。
// 官方只公布社會科整體題數，沒有逐題公布歷史／地理／公民科目標籤與單元標籤，以下資料是依
// archive-exams.js 中已逐題轉錄、核對答案的地理題目，人工判讀其對應單元與
// 能力向度（知識理解／統整判讀／科學探究）後編碼而成。
window.GEOGRAPHY_ANALYSIS = (() => {
  const primaryUnits = {
    106: [15, 15, 12, 17, 5, 7, 19, 20, 16, 16, 1],
    107: [15, 5, 12, 13, 17, 14, 9, 13, 16, 8],
    108: [7, 14, 4, 16, 6, 3, 7, 16, 16],
    109: [9, 7, 12, 3, 5, 8, 19, 16, 16, 2, 7, 16],
    110: [6, 10, 9, 15, 3, 18, 16, 16, 15, 13, 16, 5, 8],
    111: [14, 6, 13, 7, 12, 6, 16],
    112: [7, 7, 17, 11, 16, 9, 16, 13, 16, 6, 13, 2, 16, 16],
    113: [7, 6, 20, 3, 14, 16, 16],
    114: [5, 8, 16, 15, 17, 6, 16],
    115: [6, 5, 17, 10, 3, 13, 9, 7],
  };

  const officialByYear = {
    106: { count: 11, abilities: { knowledge: 3, comprehension: 5, inquiry: 3 } },
    107: { count: 10, abilities: { knowledge: 2, comprehension: 5, inquiry: 3 } },
    108: { count: 9, abilities: { knowledge: 4, comprehension: 2, inquiry: 3 } },
    109: { count: 12, abilities: { knowledge: 2, comprehension: 6, inquiry: 4 } },
    110: { count: 13, abilities: { knowledge: 3, comprehension: 7, inquiry: 3 } },
    111: { count: 7, abilities: { knowledge: 0, comprehension: 7, inquiry: 0 } },
    112: { count: 14, abilities: { knowledge: 2, comprehension: 11, inquiry: 1 } },
    113: { count: 7, abilities: { knowledge: 0, comprehension: 5, inquiry: 2 } },
    114: { count: 7, abilities: { knowledge: 1, comprehension: 5, inquiry: 1 } },
    115: { count: 8, abilities: { knowledge: 0, comprehension: 6, inquiry: 2 } },
  };

  const domainByUnit = Object.fromEntries(
    window.GEOGRAPHY_DATA.units.map(unit => [unit.id, unit.domain])
  );

  return { officialByYear, primaryUnits, domainByUnit };
})();
