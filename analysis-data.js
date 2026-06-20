window.CAP_ANALYSIS = (() => {
  // primaryUnits：逐題人工覆核後的「主概念」編碼；順序為該年度選擇題，再接 2 題非選擇題。
  // 主概念只計一次，確保各年度加總等於官方題數；跨單元特徵不重複灌入題數。
  const primaryUnits = {
    106: [1,13,12,11,6,25,22,3,10,9,21,15,7,19,8,11,3,23,19,2,13,24,6,26,2,19,10,21],
    107: [11,4,17,3,6,25,13,15,22,5,18,1,9,23,26,16,2,22,20,13,24,22,8,21,6,7,25,13],
    108: [4,10,12,26,2,2,7,14,16,1,18,9,11,25,18,17,21,16,23,6,5,3,23,22,18,24,5,21],
    109: [1,2,25,13,19,1,12,3,7,15,17,22,20,8,19,8,13,9,22,13,24,19,16,21,5,23,8,22],
    110: [7,1,6,19,2,13,10,12,10,22,25,9,16,1,18,8,22,24,11,6,19,3,21,17,11,23,9,3],
    111: [1,12,3,26,4,13,7,14,25,15,5,2,22,10,18,16,19,8,23,18,22,24,21,8,9,2,25],
    112: [2,14,26,13,17,1,7,19,3,15,8,25,26,24,16,6,23,17,22,18,8,21,13,10,8,8,19],
    113: [4,26,6,7,16,25,11,2,10,14,13,24,8,9,4,17,18,19,1,18,22,23,19,17,9,8,13],
    114: [2,12,11,6,18,7,10,13,16,12,25,26,15,6,1,21,21,3,9,18,24,23,22,8,8,10,3],
    115: [6,26,13,25,12,10,12,2,15,8,1,18,7,24,19,18,16,22,22,3,21,19,9,17,17,16,21]
  };

  const officialByYear = {
    106: { mc: 26, cr: 2, curriculum: "九年一貫課綱", abilities: { concept: 6, procedure: 4, application: 11, analysis: 7 }, mcAbilities: { concept: 6, procedure: 4, application: 10, analysis: 6 }, crAbilities: { application: 1, analysis: 1 }, crTopics: ["平均數、票數與極端情況判斷", "坐標直線與三角形相似證明"] },
    107: { mc: 26, cr: 2, curriculum: "九年一貫課綱", abilities: { concept: 7, procedure: 3, application: 11, analysis: 7 }, mcAbilities: { concept: 7, procedure: 3, application: 10, analysis: 6 }, crAbilities: { application: 1, analysis: 1 }, crTopics: ["平均數條件與機率", "方格路徑與畢氏距離比較"] },
    108: { mc: 26, cr: 2, curriculum: "九年一貫課綱", abilities: { concept: 5, procedure: 4, application: 11, analysis: 8 }, mcAbilities: { concept: 5, procedure: 4, application: 10, analysis: 7 }, crAbilities: { application: 1, analysis: 1 }, crTopics: ["比例公式與防曬係數判讀", "平行光影與相似三角形"] },
    109: { mc: 26, cr: 2, curriculum: "九年一貫課綱", abilities: { concept: 6, procedure: 5, application: 11, analysis: 6 }, mcAbilities: { concept: 6, procedure: 5, application: 10, analysis: 5 }, crAbilities: { application: 1, analysis: 1 }, crTopics: ["單位價格與比例比較", "圓、切線與複合面積"] },
    110: { mc: 26, cr: 2, curriculum: "九年一貫課綱", abilities: { concept: 6, procedure: 4, application: 11, analysis: 7 }, mcAbilities: { concept: 6, procedure: 4, application: 10, analysis: 6 }, crAbilities: { application: 1, analysis: 1 }, crTopics: ["取概數、區間與百分率", "排列切割、整數因數與所有可能"] },
    111: { mc: 25, cr: 2, curriculum: "十二年國教課綱", abilities: { concept: 7, procedure: 4, application: 10, analysis: 6 }, mcAbilities: { concept: 7, procedure: 4, application: 8, analysis: 6 }, crAbilities: { application: 2, analysis: 0 }, crTopics: ["指數成長與科學記號估算", "條件機率與完整樣本空間"] },
    112: { mc: 25, cr: 2, curriculum: "十二年國教課綱", abilities: { concept: 7, procedure: 4, application: 8, analysis: 8 }, mcAbilities: { concept: 7, procedure: 4, application: 8, analysis: 6 }, crAbilities: { application: 0, analysis: 2 }, crTopics: ["疫苗效力、比例與反例判斷", "正多邊形、周長與圓柱套合"] },
    113: { mc: 25, cr: 2, curriculum: "十二年國教課綱", abilities: { concept: 7, procedure: 4, application: 9, analysis: 7 }, mcAbilities: { concept: 7, procedure: 4, application: 9, analysis: 5 }, crAbilities: { application: 0, analysis: 2 }, crTopics: ["面積比、比例與整數可行性", "圓桌拼接、畢氏定理與長度比較"] },
    114: { mc: 25, cr: 2, curriculum: "十二年國教課綱", abilities: { concept: 6, procedure: 4, application: 11, analysis: 6 }, mcAbilities: { concept: 6, procedure: 4, application: 10, analysis: 5 }, crAbilities: { application: 1, analysis: 1 }, crTopics: ["調整倍率、百分比與資料偏差", "最小公倍數、紙片比例與整數論證"] },
    115: { mc: 25, cr: 2, curriculum: "十二年國教課綱", abilities: { concept: 6, procedure: 4, application: 12, analysis: 5 }, mcAbilities: { concept: 6, procedure: 4, application: 10, analysis: 5 }, crAbilities: { application: 2, analysis: 0 }, crTopics: ["等差數列、規律與達標時間", "正六邊形、相似直角三角形與根式"] }
  };

  // 出題形式由官方原題逐題檢視後歸類；同題只取主要呈現形式。
  const formByYear = {
    106: { basic: 9, geometry: 10, context: 7, chart: 0, set: 0, cr: 2 },
    107: { basic: 7, geometry: 9, context: 9, chart: 1, set: 0, cr: 2 },
    108: { basic: 9, geometry: 9, context: 7, chart: 1, set: 0, cr: 2 },
    109: { basic: 9, geometry: 9, context: 7, chart: 1, set: 0, cr: 2 },
    110: { basic: 10, geometry: 9, context: 5, chart: 2, set: 0, cr: 2 },
    111: { basic: 9, geometry: 8, context: 5, chart: 1, set: 2, cr: 2 },
    112: { basic: 7, geometry: 9, context: 7, chart: 0, set: 2, cr: 2 },
    113: { basic: 4, geometry: 9, context: 9, chart: 1, set: 2, cr: 2 },
    114: { basic: 8, geometry: 9, context: 5, chart: 1, set: 2, cr: 2 },
    115: { basic: 7, geometry: 9, context: 5, chart: 1, set: 3, cr: 2 }
  };

  const domainByUnit = {
    1:"數與量",2:"數與量",3:"數與量",4:"數與量",5:"代數",6:"代數",7:"坐標幾何",8:"數與量",9:"代數",10:"資料與不確定性",11:"空間與形狀",12:"代數",13:"數與量",14:"代數",15:"代數",16:"數與量",17:"函數",18:"空間與形狀",19:"空間與形狀",20:"資料與不確定性",21:"空間與形狀",22:"空間與形狀",23:"空間與形狀",24:"函數",25:"資料與不確定性",26:"空間與形狀"
  };

  const strictBlueprint = {
    version: "115 年官方結構＋111–115 年主題分布",
    total: 27, mc: 25, cr: 2, minutes: 80,
    abilities: { concept: 6, procedure: 4, application: 12, analysis: 5 },
    mcAbilities: { concept: 6, procedure: 4, application: 10, analysis: 5 },
    crAbilities: { application: 2, analysis: 0 },
    domainTargets: { "數與量": [7,9], "空間與形狀": [8,9], "代數": [4,5], "資料與不確定性": [2,3], "坐標幾何": [1,1], "函數": [2,3] },
    presentation: { readingSetItems: [2,3], geometryItems: [8,9], contextItems: [5,8], chartItems: [0,2], constructed: 2 },
    ordering: "25 題選擇題的單題與題組區塊依卷別種子打亂；閱讀題組內容保持連續；兩題非選擇題依然置於第二部分，但兩題順序也會依種子變化。"
  };

  return { primaryUnits, officialByYear, formByYear, domainByUnit, strictBlueprint };
})();
