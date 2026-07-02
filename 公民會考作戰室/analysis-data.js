// 近十年（106-115）官方社會科題本逐題核對「公民」主概念的研究編碼帳本。
// 官方只公布社會科整體題數，沒有逐題公布歷史／地理／公民科目標籤與單元標籤，以下資料是依
// archive-exams.js 中已逐題轉錄、核對答案的公民題目，人工判讀其對應單元與
// 能力向度（知識理解／統整判讀／科學探究）後編碼而成。
window.CIVICS_ANALYSIS = (() => {
  const primaryUnits = {
    106: [3, 3, 8, 20, 20, 6, 10, 15, 7, 13, 11, 13, 7, 14, 1, 8, 10],
    107: [19, 11, 6, 10, 7, 12, 7, 7, 5, 13, 20, 13, 4],
    108: [9, 6, 20, 7, 7, 11, 13, 11, 3, 3, 10, 11, 11, 13, 13, 4, 7],
    109: [6, 7, 10, 7, 7, 1, 7, 13, 7, 13, 13, 13, 12, 14, 3, 16, 11, 13, 4],
    110: [13, 8, 2, 10, 15, 13, 7, 13, 7, 13, 13, 4, 2, 13, 17, 4, 19],
    111: [4, 7, 11, 13, 6, 11, 10, 7, 10, 8, 18, 16, 8, 19],
    112: [6, 6, 3, 17, 17, 10, 19, 13, 7, 3, 14, 7, 2, 18, 5],
    113: [18, 14, 5, 2, 13, 3, 14, 11, 2, 18, 8, 4, 6, 13, 10, 7, 11, 6],
    114: [3, 3, 3, 6, 13, 20, 12, 16, 9, 16, 2, 14, 8, 4, 16, 8],
    115: [3, 3, 18, 11, 2, 13, 6, 13, 7, 9, 8, 10, 13, 4, 20, 20, 13],
  };

  const officialByYear = {
    106: { count: 17, abilities: { knowledge: 2, comprehension: 10, inquiry: 5 } },
    107: { count: 13, abilities: { knowledge: 4, comprehension: 6, inquiry: 3 } },
    108: { count: 17, abilities: { knowledge: 2, comprehension: 11, inquiry: 4 } },
    109: { count: 19, abilities: { knowledge: 2, comprehension: 10, inquiry: 7 } },
    110: { count: 17, abilities: { knowledge: 1, comprehension: 9, inquiry: 7 } },
    111: { count: 14, abilities: { knowledge: 3, comprehension: 10, inquiry: 1 } },
    112: { count: 15, abilities: { knowledge: 3, comprehension: 9, inquiry: 3 } },
    113: { count: 18, abilities: { knowledge: 1, comprehension: 14, inquiry: 3 } },
    114: { count: 16, abilities: { knowledge: 0, comprehension: 13, inquiry: 3 } },
    115: { count: 17, abilities: { knowledge: 0, comprehension: 12, inquiry: 5 } },
  };

  const domainByUnit = Object.fromEntries(
    window.CIVICS_DATA.units.map(unit => [unit.id, unit.domain])
  );

  return { officialByYear, primaryUnits, domainByUnit };
})();
