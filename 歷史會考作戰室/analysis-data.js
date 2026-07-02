// 近十年（106-115）官方社會科題本逐題核對「歷史」主概念的研究編碼帳本。
// 官方只公布社會科整體題數，沒有逐題公布歷史／地理／公民科目標籤與單元標籤，以下資料是依
// archive-exams.js 中已逐題轉錄、核對答案的歷史題目，人工判讀其對應單元與
// 能力向度（知識理解／統整判讀／科學探究）後編碼而成。
window.HISTORY_ANALYSIS = (() => {
  const primaryUnits = {
    106: [6, 12, 10, 3, 16, 12, 9, 15, 16],
    107: [6, 14, 5, 12, 16, 2, 10, 7, 11, 12, 16, 14],
    108: [12, 12, 1, 14, 15, 5, 12, 2, 12, 15, 3, 16],
    109: [4, 5, 4, 7, 15, 12, 16, 14, 12, 12, 5],
    110: [1, 5, 12, 9, 16, 14, 16, 4, 11, 6, 14, 12, 13, 13],
    111: [13, 15, 16, 12, 12, 4, 4, 16],
    112: [12, 7, 16, 3, 4, 15, 5, 12, 13, 12, 16, 9, 14, 5, 11, 4, 15],
    113: [4, 12, 16, 2, 14, 11, 12, 9, 12, 16, 5, 7, 7],
    114: [10, 12, 9, 2, 8, 13, 15, 14, 12, 16],
    115: [13, 7, 10, 16, 4, 15, 5, 10, 4, 12, 12, 16],
  };

  const officialByYear = {
    106: { count: 9, abilities: { knowledge: 3, comprehension: 5, inquiry: 1 } },
    107: { count: 12, abilities: { knowledge: 2, comprehension: 9, inquiry: 1 } },
    108: { count: 12, abilities: { knowledge: 5, comprehension: 7, inquiry: 0 } },
    109: { count: 11, abilities: { knowledge: 2, comprehension: 8, inquiry: 1 } },
    110: { count: 14, abilities: { knowledge: 5, comprehension: 8, inquiry: 1 } },
    111: { count: 8, abilities: { knowledge: 0, comprehension: 8, inquiry: 0 } },
    112: { count: 17, abilities: { knowledge: 6, comprehension: 10, inquiry: 1 } },
    113: { count: 13, abilities: { knowledge: 3, comprehension: 10, inquiry: 0 } },
    114: { count: 10, abilities: { knowledge: 4, comprehension: 5, inquiry: 1 } },
    115: { count: 12, abilities: { knowledge: 3, comprehension: 9, inquiry: 0 } },
  };

  const domainByUnit = Object.fromEntries(
    window.HISTORY_DATA.units.map(unit => [unit.id, unit.domain])
  );

  return { officialByYear, primaryUnits, domainByUnit };
})();
