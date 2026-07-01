window.BIO_ANALYSIS = (() => {
  // primaryUnits[year] = 該年自然科題本中，逐題比對挑出並轉錄進 archive-exams.js 的生物題目，
  // 依 archive-exams.js 中的出現順序列出對應單元 id。
  // 尚未完成核對的年度不列入 key；建置中的年度會在畫面顯示「建置中」。
    const primaryUnits = {
      115: [1, 10, 8, 11, 9, 14, 3, 12, 6, 7, 3, 3],
      114: [15, 3, 10, 10, 3, 5, 5, 6, 7, 7],
      113: [10, 1, 12, 14, 5, 3, 3, 11, 9, 5, 6, 15, 15, 3],
      106: [15, 11, 12, 3, 1, 6, 9, 14, 5],
      107: [13, 11, 6, 10, 3, 7, 12, 15, 5],
      108: [1, 3, 11, 8, 5, 10, 12, 7, 14, 3, 11],
      109: [15, 6, 5, 10, 13, 11, 14, 12, 9, 1, 7],
      110: [9, 11, 5, 10, 5, 7, 13],
      111: [3, 1, 4, 7, 6, 9, 11, 10],
      112: [15, 5, 10, 14, 3, 2, 3, 12]
    };

  const domainByUnit = Object.fromEntries(
    window.BIO_DATA.units.map(unit => [unit.id, unit.domain])
  );

  return { primaryUnits, domainByUnit };
})();
