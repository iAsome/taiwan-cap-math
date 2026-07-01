window.CAP_ANALYSIS = (() => {
  // primaryUnits：逐題人工覆核後的「主概念」編碼，直接取自 archive-exams.js 已完整轉錄的年度。
  // 目前只有 115 年完成全題逐句核對；106–114 年題本原始 PDF 與官方答案已下載，
  // 但尚未逐題轉錄配對單元，因此不列入下面帳本，避免用未核實的資料充數。
  // ponytail: 補完 106–114 年逐題轉錄後，比照 115 年格式加入下面兩個物件即可，
  // 其餘分析頁面渲染邏輯已經是依 Object.keys(...) 迴圈寫的，不用再改 app.js。
  const primaryUnits = {
    115: [6,17,19,3,11,2,1,17,26,16,20,23,25,18,17,14,17,25,8,25,24,25,26,21,19,17,22,17,19,21,20,21,17,17,17,18,17,22,10,25,24,25]
  };

  // 國文科考試結構：官方規定全部為選擇題（無非選題），115 年題本為 42 題、70 分鐘。
  // 官方《試題說明》另有逐年能力層次（如擷取訊息／統整解釋／省思評鑑）題數統計，
  // 本站尚未取得並核對該份文件，因此不在此假造能力層次數字。
  const officialByYear = {
    115: { mc: 42, cr: 0, curriculum: "十二年國教課綱", readingSetItems: 18, readingSets: 8 }
  };

  const domainByUnit = Object.fromEntries(window.CHINESE_DATA.units.map(u => [u.id, u.domain]));
  const domainOrder = window.CHINESE_DATA.domains.map(d => d.name);

  const structureNote = {
    version: "115 年官方結構（現行 42 題、70 分鐘、全選擇題格式）",
    total: 42, mc: 42, cr: 0, minutes: 70,
    domainOrder,
    presentation: { readingSets: "115 年題本含 8 組共用選文，橫跨 18 題", note: "本站模擬考同樣採 42 題、70 分鐘、全四選一格式" }
  };

  return { primaryUnits, officialByYear, domainByUnit, domainOrder, structureNote };
})();
