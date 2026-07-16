// Deterministically serialized reviewed U06 content. Do not edit.
export default {
  "lecture": {
    "lectureId": "u06-s001-lecture-r1",
    "unitId": "u06",
    "numericUnitId": 6,
    "topicId": "u06-ratio-basics",
    "skillId": "ratio-simplify",
    "lockedSkillTitle": "比的化簡",
    "title": "比的化簡：先統一單位再找最簡整數比",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "unitTitle": "比例式",
      "topicTitle": "比與比例式基礎",
      "skillOrder": 1,
      "lockedPrerequisiteSkillIds": [],
      "capBoundary": "只處理兩量的比與最簡整數比；連比的完整技巧留在 U18。"
    },
    "prerequisiteBridge": "本技能從整數、分數、小數的四則運算出發。即使沒有前置技能 ID，也必須先會約分、通分、把小數化成整數，以及辨認相同單位。",
    "learningOutcomes": [
      "能說明 a:b 表示 a÷b，且後項 b 不可為 0。",
      "能將整數比、分數比、小數比化成互質整數比。",
      "能先換成相同單位再化簡。",
      "能判斷兩個比是否等值，並解釋共同乘除的理由。"
    ],
    "glossary": [
      {
        "term": "比",
        "definition": "用除法比較兩個同類量的關係，寫作前項:後項。"
      },
      {
        "term": "前項",
        "definition": "比號左邊的量。"
      },
      {
        "term": "後項",
        "definition": "比號右邊的量；因為相當於除數，所以不能是 0。"
      },
      {
        "term": "比值",
        "definition": "前項除以後項所得的數。"
      },
      {
        "term": "最簡整數比",
        "definition": "前項與後項都是整數，而且最大公因數為 1 的比。"
      }
    ],
    "notation": [
      {
        "symbol": "a:b",
        "meaning": "a 與 b 的比，等同 a÷b；b≠0。"
      },
      {
        "symbol": "a:b=ka:kb",
        "meaning": "k≠0 時，前後項同乘 k，比值不變。"
      },
      {
        "symbol": "a:b=(a÷d):(b÷d)",
        "meaning": "d 為前後項的共同非零因數時，可同除 d。"
      }
    ],
    "conceptNarrative": [
      "比 a:b 表示前項 a 與後項 b 的相對關係，也可視為比值 a/b，其中後項不可為零。比的兩項同乘或同除以同一個非零數，比值不變，因此可化成等值比。",
      "最簡整數比要求前後項都是整數且互質。若原比含小數，可同乘十的次方清除小數；含分數則同乘各分母的最小公倍數，再用最大公因數約分。",
      "比較有單位的兩個同類量之前，必須先統一單位。公尺與公分、公斤與公克若直接把數字組成比，所得比值沒有共同基準，化簡即使算術正確也沒有意義。",
      "部分量與總量的比、前後項順序及帶分數的完整量值都不可省略。完成化簡後可比較原比值與新比值，並確認新兩項互質，避免只約一部分便過早停止。"
    ],
    "formalDefinitions": [
      {
        "name": "等值比",
        "statement": "若 a:b 與 c:d 的比值相等，即 a/b=c/d，則兩比等值；b、d 均不可為 0。"
      },
      {
        "name": "最簡整數比",
        "statement": "前後項皆為整數，且除 1 外沒有共同正因數。"
      }
    ],
    "formulas": [
      {
        "formula": "a:b=a/b",
        "conditions": [
          "b≠0"
        ],
        "meaning": "以除法理解比值。"
      },
      {
        "formula": "a:b=ka:kb",
        "conditions": [
          "k≠0"
        ],
        "meaning": "前後項同乘同一非零數，比值不變。"
      },
      {
        "formula": "分數比同乘分母最小公倍數",
        "conditions": [
          "所有分母均非0"
        ],
        "meaning": "先化成整數比，再約成互質。"
      }
    ],
    "nonApplicableCases": [
      "後項為 0 時，比值沒有定義。",
      "未統一公尺與公分、公斤與公克等單位時，不可直接化簡。",
      "只除前項或只除後項會改變比值。",
      "把 4:6 化成 2:2 並非同除同一數，屬錯誤。",
      "最簡比要求整數；0.5:1 雖等值，仍應寫成 1:2。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "依題意確認前項、後項順序及後項非零。",
        "check": "比的順序與文字敘述一致，沒有把部分對總量誤成部分對其餘。"
      },
      {
        "step": 2,
        "instruction": "有單位時先換成相同單位，帶分數先化為假分數。",
        "check": "兩個數值具有相同量值基準，換算倍數正確。"
      },
      {
        "step": 3,
        "instruction": "小數比或分數比的兩項同乘適當數，化成整數比。",
        "check": "前後項接受同一倍數，所有小數或分母均已清除。"
      },
      {
        "step": 4,
        "instruction": "求整數兩項的最大公因數，前後項同步約分。",
        "check": "所得兩項互質，不能再同除大於一的整數。"
      },
      {
        "step": 5,
        "instruction": "以比值或共同倍數回驗原比與最簡比等值。",
        "check": "前後順序、單位與比值全部一致，答案確為最簡整數比。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "u06-s001-example-a",
        "prompt": "將 42:63 化成最簡整數比。",
        "solutionSteps": [
          "最大公因數為二十一。",
          "兩項同除以二十一，得到 2:3。"
        ],
        "answer": "2:3。",
        "why": "四十二與六十三同除以最大公因數二十一，比值不變；二與三互質，已無共同因數可約，因此符合最簡整數比的完整條件。"
      },
      {
        "exampleId": "u06-s001-example-b",
        "prompt": "將 0.75 公尺:45 公分化成最簡整數比。",
        "solutionSteps": [
          "0.75 公尺換成 75 公分。",
          "75:45 同除以十五，得到 5:3。"
        ],
        "answer": "5:3。",
        "why": "先統一為公分後才能比較，七十五與四十五的最大公因數是十五。若用零點七五直接對四十五，會混用公尺與公分。"
      },
      {
        "exampleId": "u06-s001-example-c",
        "prompt": "將 2/3:5/12 化成最簡整數比。",
        "solutionSteps": [
          "兩項同乘分母最小公倍數十二。",
          "得到 8:5，兩項互質。"
        ],
        "answer": "8:5。",
        "why": "十二同時清除三與十二的分母，得到整數八與五。前後項同乘相同非零數保持比值，且八與五沒有共同因數。"
      },
      {
        "exampleId": "u06-s001-example-d",
        "prompt": "將 1又3/4:2又5/8 化成最簡整數比。",
        "solutionSteps": [
          "帶分數化為 7/4:21/8。",
          "同乘八得 14:21，再同除以七得 2:3。"
        ],
        "answer": "2:3。",
        "why": "帶分數必須先視為完整量值，不能只比較整數部分。清除分母後仍要再約分，十四比二十一的最簡形式才是二比三。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "不同單位直接組成比。",
        "why": "兩個數字沒有共同量值基準。",
        "correction": "先換成同一單位再化簡。"
      },
      {
        "mistake": "只把前項乘倍數清除小數。",
        "why": "改變了原來的比值。",
        "correction": "前後項必須同乘同一非零數。"
      },
      {
        "mistake": "分數比只比較分子。",
        "why": "忽略分母對完整量值的影響。",
        "correction": "同乘分母最小公倍數後再比較。"
      },
      {
        "mistake": "約到整數比就停止。",
        "why": "整數兩項可能仍有共同因數。",
        "correction": "使用最大公因數約到互質。"
      },
      {
        "mistake": "部分:總量寫成部分:其餘。",
        "why": "誤解題目後項代表的集合。",
        "correction": "先寫出前後項名稱再代數值。"
      },
      {
        "mistake": "帶分數只取整數部分。",
        "why": "捨棄分數造成量值改變。",
        "correction": "先化成假分數，保留完整數值。"
      }
    ],
    "selfCheck": [
      "我有先確認比的順序嗎？",
      "兩個量的單位一致嗎？",
      "小數或分數是否同時處理兩項？",
      "結果是否為互質整數？",
      "原比值與化簡後比值相同嗎？"
    ],
    "summary": [
      "比 a:b 表示 a÷b，後項不可為 0。",
      "化簡必須對前後項做相同的非零乘除。",
      "小數比先整數化，分數比先消分母。",
      "有單位時先統一單位，最後檢查互質與比值。"
    ],
    "connections": {
      "previous": "承接整數、分數與小數運算。",
      "next": [
        "等值比可寫成比例式並求未知數。",
        "部分量與總量問題會使用最簡比的份數。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u06-s001-v001",
        "u06-s001-v002",
        "u06-s001-v003",
        "u06-s001-v004",
        "u06-s001-v005",
        "u06-s001-v006",
        "u06-s001-v007",
        "u06-s001-v008",
        "u06-s001-v009",
        "u06-s001-v010",
        "u06-s001-v011",
        "u06-s001-v012"
      ],
      "constructedResponseIds": [
        "u06-s001-cr001",
        "u06-s001-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "contentAuthorityConfirmed": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐一重算四個例題的共同因數、分母最小公倍數與單位換算，並檢查後項為零、順序交換、只除單項等失效情況；內容未引入連比的完整分配技巧。",
      "reviewVersion": "human-lecture-review-u06-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "dc3db819ac89a7df937875b5b55f3b4bd2e30f191da9cfb8c24fcfc750e60992"
  },
  "mcQuestions": [
    {
      "questionId": "u06-s001-v001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-simplify",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "將 18:24 化成最簡整數比。",
      "text": "將 18:24 化成最簡整數比。",
      "givenConditions": "前項 18、後項 24，後項非 0。",
      "target": "求最簡整數比",
      "choices": [
        "3:4",
        "2:3",
        "4:5",
        "6:7"
      ],
      "answerIndex": 0,
      "independentSolution": "直接算 18/24=3/4，因此最簡整數比是 3:4。",
      "mainExplanation": "最大公因數是 6，前後項同除可保持比值，所以 18:24=3:4。",
      "explanation": "十八與二十四的最大公因數是六，比的前項與後項同除以六，得到 18÷6:24÷6=3:4。三與四互質，不能再同除大於一的整數，所以已是最簡整數比。",
      "steps": [
        "求出 18 與 24 的最大公因數為 6。",
        "前後項同除以 6，得到 3:4。",
        "確認 3、4 互質，判定已化到最簡。"
      ],
      "optionAnalysis": [
        {
          "choice": "3:4",
          "truth": true,
          "reason": "18、24 同除以最大公因數 6 得 3:4。"
        },
        {
          "choice": "2:3",
          "truth": false,
          "reason": "2:3 的比值是 2/3，不等於 18/24。"
        },
        {
          "choice": "4:5",
          "truth": false,
          "reason": "4:5 的比值是 0.8，不等於 0.75。"
        },
        {
          "choice": "6:7",
          "truth": false,
          "reason": "6:7 仍與原比不同。"
        }
      ],
      "misconceptionTarget": "只把其中一項除以六，或得到六比八後沒有繼續化簡。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "本題只使用已鎖定前置技能 ['無'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 50,
      "unitCheck": "無單位，兩項可直接比較。",
      "roundingCheck": "無需近似。",
      "ambiguityBoundaryAudit": "答案要求互質整數，3 與 4 互質。",
      "difficultyReason": "單一步驟整數約分。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "18490aea1a6658841eca745820fd7853b5cdc0ff7054a88d180b0bb8c966aa4d"
    },
    {
      "questionId": "u06-s001-v002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-simplify",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "一張長方形卡片的寬是 6 公分、高是 15 公分。若把卡片等比例縮小，寬與高的最簡整數比應保持為何？",
      "text": "一張長方形卡片的寬是 6 公分、高是 15 公分。若把卡片等比例縮小，寬與高的最簡整數比應保持為何？",
      "givenConditions": "寬6公分；高15公分；等比例縮放不改變比值",
      "target": "用實際尺寸建立並化簡比",
      "choices": [
        "3:5",
        "2:5",
        "5:2",
        "6:5"
      ],
      "answerIndex": 1,
      "independentSolution": "寬與高的比為 6:15，兩項同除以最大公因數 3，得到 2:5。等比例縮放後此比不變。",
      "mainExplanation": "先按題目順序寫成寬:高，再把兩項同除以3。",
      "explanation": "寬與高使用相同的公分單位，所以原比為 6:15。兩項的最大公因數是三，同除以三得到 2:5；等比例縮小會同時乘相同倍數，因此這個最簡比保持不變。",
      "steps": [
        "依寬:高順序列出 6:15。",
        "求最大公因數三，前後項同除以三。",
        "得到 2:5，確認縮放不改變比值。"
      ],
      "optionAnalysis": [
        {
          "choice": "3:5",
          "truth": false,
          "reason": "3:5的比值不等於6÷15。"
        },
        {
          "choice": "2:5",
          "truth": true,
          "reason": "6:15同除3得到2:5。"
        },
        {
          "choice": "5:2",
          "truth": false,
          "reason": "5:2把寬高順序顛倒。"
        },
        {
          "choice": "6:5",
          "truth": false,
          "reason": "6:5只化簡其中一項。"
        }
      ],
      "misconceptionTarget": "把寬高順序寫反，或認為縮小後最簡比也要跟著變小。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "本題只使用已鎖定前置技能 ['無'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 60,
      "unitCheck": "兩項同為純數。",
      "roundingCheck": "精確計算，不用四捨五入。",
      "ambiguityBoundaryAudit": "寬高順序與單位均明示，答案唯一。",
      "difficultyReason": "基礎：依指定順序建立尺寸比並約成最簡。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "cc56f48d3b5bedbe1163d75b6ef27fde826d4d2b0a8e82ee42a11074eeb985fe"
    },
    {
      "questionId": "u06-s001-v003",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-simplify",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "將 3/4:5/8 化成最簡整數比。",
      "text": "將 3/4:5/8 化成最簡整數比。",
      "givenConditions": "兩個分母皆非 0。",
      "target": "化簡分數比",
      "choices": [
        "3:5",
        "5:6",
        "6:5",
        "12:5"
      ],
      "answerIndex": 2,
      "independentSolution": "比值為 (3/4)÷(5/8)=3/4×8/5=6/5，所以比為 6:5。",
      "mainExplanation": "分母 4、8 的最小公倍數是 8；同乘後得 6:5，已互質。",
      "explanation": "兩個分數的分母四與八的最小公倍數是八，前後項同乘八，可得 (3/4)×8:(5/8)×8=6:5。六與五互質，因此最簡整數比為 6:5，原比與新比的比值前後一致。",
      "steps": [
        "找分母 4、8 的最小公倍數 8。",
        "比的兩項同乘 8，化為 6:5。",
        "確認 6 與 5 互質，完成化簡。"
      ],
      "optionAnalysis": [
        {
          "choice": "3:5",
          "truth": false,
          "reason": "只消去第一個分母，改變比值。"
        },
        {
          "choice": "5:6",
          "truth": false,
          "reason": "把前後項顛倒。"
        },
        {
          "choice": "6:5",
          "truth": true,
          "reason": "前後項同乘 8 得 6:5。"
        },
        {
          "choice": "12:5",
          "truth": false,
          "reason": "第一項多乘 2。"
        }
      ],
      "misconceptionTarget": "只清除一個分母，或把兩個分數的分子直接寫成三比五。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "本題只使用已鎖定前置技能 ['無'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 70,
      "unitCheck": "無單位。",
      "roundingCheck": "全程為精確分數。",
      "ambiguityBoundaryAudit": "6 與 5 互質且後項非 0。",
      "difficultyReason": "需要分數除法觀念。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "547f5fa43801550aeac801672e54bb13fc4fda6a045d36d539e08d63276b703b"
    },
    {
      "questionId": "u06-s001-v004",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-simplify",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "2.4 公尺:80 公分的最簡整數比為何？",
      "text": "2.4 公尺:80 公分的最簡整數比為何？",
      "givenConditions": "公尺與公分需先統一。",
      "target": "處理不同單位的比",
      "choices": [
        "3:10",
        "24:8",
        "1:3",
        "3:1"
      ],
      "answerIndex": 3,
      "independentSolution": "2.4 公尺÷0.8 公尺=3，因此前項:後項=3:1。",
      "mainExplanation": "先統一成公分，再約分得 3:1。",
      "explanation": "比較長度前須先統一單位。2.4 公尺等於 240 公分，所以原比為 240:80；兩項同除以八十得到 3:1。若直接用 2.4:80，會混用公尺與公分；換算後兩項單位一致。",
      "steps": [
        "把 2.4 公尺換成 240 公分。",
        "列出同單位的比 240:80。",
        "前後項同除以 80，得到 3:1。"
      ],
      "optionAnalysis": [
        {
          "choice": "3:10",
          "truth": false,
          "reason": "把 2.4 直接視為 240 卻又多除 10。"
        },
        {
          "choice": "24:8",
          "truth": false,
          "reason": "24:8 雖等值但不是最簡。"
        },
        {
          "choice": "1:3",
          "truth": false,
          "reason": "將比較順序倒置。"
        },
        {
          "choice": "3:1",
          "truth": true,
          "reason": "2.4 公尺=240 公分，240:80=3:1。"
        }
      ],
      "misconceptionTarget": "沒有先統一公尺與公分，就直接拿二點四和八十相比。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "本題只使用已鎖定前置技能 ['無'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 80,
      "unitCheck": "統一為公分後約分。",
      "roundingCheck": "2.4 為精確值，不取近似。",
      "ambiguityBoundaryAudit": "題意明確指定 2.4 公尺在前。",
      "difficultyReason": "需同時完成單位換算與化簡。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3a05fac03aa29c57ec9e01e14e581614fbe826a1caa5fce13cd87b343b71e93f"
    },
    {
      "questionId": "u06-s001-v005",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-simplify",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "下列哪一個比與 14:21 等值且已化為最簡？",
      "text": "下列哪一個比與 14:21 等值且已化為最簡？",
      "givenConditions": "答案需符合兩個條件。",
      "target": "同時判斷等值與最簡",
      "choices": [
        "7:14",
        "2:3",
        "4:6",
        "3:2"
      ],
      "answerIndex": 1,
      "independentSolution": "14/21=2/3，四個選項中只有 2:3 同時等值且最簡。",
      "mainExplanation": "原比的最大公因數是 7，最簡比為 2:3。",
      "explanation": "十四與二十一的最大公因數是七，同除以七得到 2:3。二與三互質，因此 2:3 既與 14:21 等值，也已是最簡整數比，符合題目兩項要求。",
      "steps": [
        "求 14、21 的最大公因數為 7。",
        "前後項同除以 7，得到 2:3。",
        "確認比值相同且 2、3 互質。"
      ],
      "optionAnalysis": [
        {
          "choice": "7:14",
          "truth": false,
          "reason": "7:14=1:2，不等值。"
        },
        {
          "choice": "2:3",
          "truth": true,
          "reason": "14、21 同除以 7 得 2:3。"
        },
        {
          "choice": "4:6",
          "truth": false,
          "reason": "4:6 等值但尚可同除以 2，不是最簡。"
        },
        {
          "choice": "3:2",
          "truth": false,
          "reason": "3:2 是倒比。"
        }
      ],
      "misconceptionTarget": "只檢查比值相等，沒有再確認選項是否已經化成最簡。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "本題只使用已鎖定前置技能 ['無'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 75,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "4:6 被刻意排除，因題幹要求已化最簡。",
      "difficultyReason": "雙條件判斷。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "fa14f6d1f2ed8f56fb5b3f5633c8ee333a86d899e8d7cc7f69097bad87cea1af"
    },
    {
      "questionId": "u06-s001-v006",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-simplify",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "將 1又1/2:2又1/4 化成最簡整數比。",
      "text": "將 1又1/2:2又1/4 化成最簡整數比。",
      "givenConditions": "兩個帶分數皆為正且後項非0。",
      "target": "化簡帶分數比",
      "choices": [
        "3:4",
        "4:5",
        "2:3",
        "6:9"
      ],
      "answerIndex": 2,
      "independentSolution": "比值 (3/2)÷(9/4)=2/3，因此最簡比 2:3。",
      "mainExplanation": "帶分數先化假分數，再消分母與約分。",
      "explanation": "先把帶分數化為假分數：一又二分之一是 3/2，二又四分之一是 9/4。兩項同乘四得到 6:9，再同除以三，最簡整數比為 2:3，最後兩項互質且不能再約。",
      "steps": [
        "將帶分數改寫為 3/2:9/4。",
        "前後項同乘 4，清除分母得 6:9。",
        "同除以 3，得到最簡比 2:3。"
      ],
      "optionAnalysis": [
        {
          "choice": "3:4",
          "truth": false,
          "reason": "3:4 忽略第二個帶分數的分母。"
        },
        {
          "choice": "4:5",
          "truth": false,
          "reason": "4:5 並非等值比。"
        },
        {
          "choice": "2:3",
          "truth": true,
          "reason": "1又1/2=3/2，2又1/4=9/4；同乘 4 得 6:9，再約成 2:3。"
        },
        {
          "choice": "6:9",
          "truth": false,
          "reason": "6:9 等值但不是最簡。"
        }
      ],
      "misconceptionTarget": "只比較帶分數的整數部分，或清除分母後忘記繼續約分。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "本題只使用已鎖定前置技能 ['無'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 100,
      "unitCheck": "無單位。",
      "roundingCheck": "精確分數。",
      "ambiguityBoundaryAudit": "題目要求最簡整數比。",
      "difficultyReason": "三步驟分數處理。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "64465c86a9d5cf73e67ccf9f50a29b3ffd3e63dc676a8a91865e074d684dd254"
    },
    {
      "questionId": "u06-s001-v007",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-simplify",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "若 36:n 化成最簡比為 4:7，則 n 為何？",
      "text": "若 36:n 化成最簡比為 4:7，則 n 為何？",
      "givenConditions": "n 為正數且後項不可為0。",
      "target": "由最簡比反求原項",
      "choices": [
        "42",
        "54",
        "72",
        "63"
      ],
      "answerIndex": 3,
      "independentSolution": "36:63 同除以 9 得 4:7，直接驗證 n=63。",
      "mainExplanation": "由 36/ n=4/7，交叉相乘 4n=252，得 n=63。",
      "explanation": "36:n 與 4:7 等值，前項三十六是四的九倍，所以後項 n 也必須是七的九倍，得到 n=63。驗算 36:63 同除以九，確實化為 4:7，前後項使用完全相同的放大倍數。",
      "steps": [
        "比較前項，求出 36÷4=9 的放大倍數。",
        "將後項七同乘九，得到 n=63。",
        "把 36:63 同除以九，回驗為 4:7。"
      ],
      "optionAnalysis": [
        {
          "choice": "42",
          "truth": false,
          "reason": "42 對應每份6，前項會是24。"
        },
        {
          "choice": "54",
          "truth": false,
          "reason": "54 使比為2:3。"
        },
        {
          "choice": "72",
          "truth": false,
          "reason": "72 使比為1:2。"
        },
        {
          "choice": "63",
          "truth": true,
          "reason": "36 對應 4 份，每份 9；n 對應 7 份，所以 n=63。"
        }
      ],
      "misconceptionTarget": "只放大前項而不同比例放大後項，或用三十六減四求倍數。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "本題只使用已鎖定前置技能 ['無'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "只有一個正數 n 使比例成立。",
      "difficultyReason": "需要由比的倍率反推未知項。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8933403269a230b0dd14665a513b6c83466c655c91dbdeb576ae0fed3833563a"
    },
    {
      "questionId": "u06-s001-v008",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-simplify",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "某比的前後項皆為正整數，化簡後為 5:8，且兩項和為 91。原比為何？",
      "text": "某比的前後項皆為正整數，化簡後為 5:8，且兩項和為 91。原比為何？",
      "givenConditions": "兩項為正整數。",
      "target": "由最簡比與總和還原兩項",
      "choices": [
        "35:56",
        "25:66",
        "40:51",
        "45:46"
      ],
      "answerIndex": 0,
      "independentSolution": "35:56 同除7為5:8，且35+56=91，雙條件皆成立。",
      "mainExplanation": "令原比為 5k:8k，13k=91，k=7。",
      "explanation": "最簡比 5:8 的總份數是十三，兩原項皆為正整數且和為九十一，所以每份為 91÷13=7。前項 5×7=35、後項 8×7=56，原比是 35:56；三十五加五十六正好等於九十一。",
      "steps": [
        "把 5+8=13 視為總份數。",
        "用 91÷13 求得每份為 7。",
        "分別算 5×7=35、8×7=56，並核對和為 91。"
      ],
      "optionAnalysis": [
        {
          "choice": "35:56",
          "truth": true,
          "reason": "總份數 13，每份 91÷13=7，所以原比 35:56。"
        },
        {
          "choice": "25:66",
          "truth": false,
          "reason": "25:66 雖和91，但比值不是5:8。"
        },
        {
          "choice": "40:51",
          "truth": false,
          "reason": "40:51 和91但不符5:8。"
        },
        {
          "choice": "45:46",
          "truth": false,
          "reason": "45:46 近似1:1。"
        }
      ],
      "misconceptionTarget": "把九十一直接按五與八相減，或忘記兩項必須使用同一倍數。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "本題只使用已鎖定前置技能 ['無'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 110,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "正整數 k 唯一為7。",
      "difficultyReason": "結合份數與總和的兩條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "24f272b1ea2211178bf8a7a3bd1e599db542c76899a1a5bb4bfc7ef72f522a46"
    },
    {
      "questionId": "u06-s001-v009",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-simplify",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "84:126 化成最簡比後，前後項的和是多少？",
      "text": "84:126 化成最簡比後，前後項的和是多少？",
      "givenConditions": "84、126為正整數。",
      "target": "最簡比的衍生量",
      "choices": [
        "3",
        "7",
        "5",
        "10"
      ],
      "answerIndex": 2,
      "independentSolution": "84/126=2/3，因此最簡比項和為 2+3=5。",
      "mainExplanation": "先求最大公因數 42，再計算最簡比兩項和。",
      "explanation": "八十四與一百二十六的最大公因數是四十二，同除後得到 2:3。題目問化簡後前後項的和，因此計算 2+3=5，而不是把原來兩數相加。",
      "steps": [
        "求 84、126 的最大公因數 42。",
        "同除以 42，得到最簡比 2:3。",
        "將最簡比兩項相加，得到五。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "3 是後項，不是兩項和。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "7 來自錯誤約分 3:4。"
        },
        {
          "choice": "5",
          "truth": true,
          "reason": "84、126 同除以 42 得 2:3，和為 5。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "10 是把 2:3 再同乘2後的和，非最簡比。"
        }
      ],
      "misconceptionTarget": "直接計算八十四加一百二十六，沒有先依題意完成化簡。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "本題只使用已鎖定前置技能 ['無'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "題目問化簡後的項和，不是原數和。",
      "difficultyReason": "兩階段計算。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5e96459be76144dc6ff0f78f928591945cf3f2bbbb276b74846574dcb23a96de"
    },
    {
      "questionId": "u06-s001-v010",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-simplify",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "果汁配方使用 750 公克果肉與 1.2 公斤水。果肉:水的最簡比為何？",
      "text": "果汁配方使用 750 公克果肉與 1.2 公斤水。果肉:水的最簡比為何？",
      "givenConditions": "配方比例需保留果肉在前、水在後。",
      "target": "在配方標示中化簡跨單位比",
      "choices": [
        "3:4",
        "5:12",
        "8:5",
        "5:8"
      ],
      "answerIndex": 3,
      "independentSolution": "750÷1200=0.625=5/8，因此果肉:水=5:8。",
      "mainExplanation": "把水換成1200公克後，750/1200=5/8。",
      "explanation": "水的一點二公斤要先換成 1200 公克，才能與果肉七百五十公克相比。750:1200 同除以一百五十得到 5:8，所以果肉與水的最簡比為 5:8。",
      "steps": [
        "將 1.2 公斤水換算為 1200 公克。",
        "依果肉:水列出 750:1200。",
        "前後項同除以 150，得到 5:8。"
      ],
      "optionAnalysis": [
        {
          "choice": "3:4",
          "truth": false,
          "reason": "3:4 對應900:1200。"
        },
        {
          "choice": "5:12",
          "truth": false,
          "reason": "5:12 忽略共同因數。"
        },
        {
          "choice": "8:5",
          "truth": false,
          "reason": "8:5 是水:果肉。"
        },
        {
          "choice": "5:8",
          "truth": true,
          "reason": "1.2公斤=1200公克，750:1200 同除150得5:8。"
        }
      ],
      "misconceptionTarget": "混用公克與公斤，或把配方順序錯寫成水比果肉。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "本題只使用已鎖定前置技能 ['無'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 100,
      "unitCheck": "公斤換公克後比較。",
      "roundingCheck": "1.2公斤視為精確標示。",
      "ambiguityBoundaryAudit": "情境中的單位換算不可省略，否則數字比無意義。",
      "difficultyReason": "素養題需解讀配方與單位。",
      "literacyContextNecessity": "配方的兩種材料用不同單位，必須換算才能得到可用比例。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a2919a38c14bfa02c08fcc21d5a077c772defdc12479218ba672ec51fb282138"
    },
    {
      "questionId": "u06-s001-v011",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-simplify",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "校隊 48 人中有 18 人是七年級。七年級人數:全隊人數的最簡比為何？",
      "text": "校隊 48 人中有 18 人是七年級。七年級人數:全隊人數的最簡比為何？",
      "givenConditions": "全隊48已包含七年級18。",
      "target": "辨認情境中的比之分母",
      "choices": [
        "3:8",
        "3:5",
        "5:8",
        "8:3"
      ],
      "answerIndex": 0,
      "independentSolution": "18/48=3/8，故部分對總量為3:8。",
      "mainExplanation": "題目指定部分:總量，直接化簡18:48。",
      "explanation": "題目要求七年級人數比全隊人數，所以依順序列 18:48。兩項最大公因數是六，同除以六得到 3:8；分母使用全隊四十八人，不是其餘隊員人數。",
      "steps": [
        "依七年級:全隊列出 18:48。",
        "求最大公因數六，前後項同除。",
        "得到 3:8，核對後項代表全隊總數。"
      ],
      "optionAnalysis": [
        {
          "choice": "3:8",
          "truth": true,
          "reason": "18:48 同除以 6 得 3:8。"
        },
        {
          "choice": "3:5",
          "truth": false,
          "reason": "3:5 是七年級:非七年級。"
        },
        {
          "choice": "5:8",
          "truth": false,
          "reason": "5:8 是非七年級:全隊。"
        },
        {
          "choice": "8:3",
          "truth": false,
          "reason": "8:3 是倒比。"
        }
      ],
      "misconceptionTarget": "把全隊人數誤換成非七年級三十人，算成部分對其餘。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "本題只使用已鎖定前置技能 ['無'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "人數單位一致。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "題幹明確問七年級:全隊，不是七年級:其他。",
      "difficultyReason": "需要讀懂部分與總量的角色。",
      "literacyContextNecessity": "若刪除『全隊』語意就會改變分母，因此情境是數學必要的。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "56f862599c2fed4f8c82163c499034a387cb3f572bd1b06de7f1acfc02a2930b"
    },
    {
      "questionId": "u06-s001-v012",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-simplify",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "一條步道前 1.5 公里為木棧道，後 900 公尺為石板路。木棧道長:石板路長的最簡比為何？",
      "text": "一條步道前 1.5 公里為木棧道，後 900 公尺為石板路。木棧道長:石板路長的最簡比為何？",
      "givenConditions": "兩段長度皆為正。",
      "target": "在路程資料中建立最簡比",
      "choices": [
        "3:5",
        "5:3",
        "5:9",
        "15:9"
      ],
      "answerIndex": 1,
      "independentSolution": "1500/900=5/3，故最簡比5:3。",
      "mainExplanation": "統一為公尺後化簡，並保持題目指定順序。",
      "explanation": "一點五公里等於 1500 公尺，與石板路九百公尺同單位後，木棧道:石板路為 1500:900。兩項同除以三百得到最簡整數比 5:3，且五與三已經互質。",
      "steps": [
        "把 1.5 公里換成 1500 公尺。",
        "依木棧道:石板路列出 1500:900。",
        "同除以 300，得到 5:3。"
      ],
      "optionAnalysis": [
        {
          "choice": "3:5",
          "truth": false,
          "reason": "3:5 是反向比。"
        },
        {
          "choice": "5:3",
          "truth": true,
          "reason": "1.5公里=1500公尺，1500:900同除300得5:3。"
        },
        {
          "choice": "5:9",
          "truth": false,
          "reason": "5:9 把1.5公里誤當500公尺。"
        },
        {
          "choice": "15:9",
          "truth": false,
          "reason": "15:9 等值但不是最簡。"
        }
      ],
      "misconceptionTarget": "用一點五直接和九百相比，或把前後兩段的順序顛倒。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "本題只使用已鎖定前置技能 ['無'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 100,
      "unitCheck": "公里換公尺。",
      "roundingCheck": "1.5公里為精確值。",
      "ambiguityBoundaryAudit": "前後兩段已明確且無重疊。",
      "difficultyReason": "同時考單位與順序。",
      "literacyContextNecessity": "路線分段資訊決定前項與後項，不能移除情境而保持同一任務。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ed2f455245eb4e201d51955099cf229b7a2859569984b110e44ca49031c439d3"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u06-s001-cr001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-simplify",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "將 2.7 公尺:1.08 公尺化成最簡整數比，並用比值驗算。",
      "target": "化簡含小數的同比",
      "requiredWork": [
        "寫出消去小數的共同倍率。",
        "化到互質整數。",
        "比較原比值與最簡比值。"
      ],
      "fullCreditSolution": [
        "兩項同為公尺，可直接將 2.7:1.08 同乘一百，化成整數比 270:108。",
        "270 與 108 的最大公因數為 54，前後項同除以 54，得到最簡整數比 5:2。",
        "原比值 2.7÷1.08=2.5，而 5÷2=2.5，兩個比值相同，化簡正確。"
      ],
      "alternativeSolutions": [
        "可先同除0.54，直接得到5:2。"
      ],
      "reasoningSteps": [
        "確認兩量單位相同，再將小數比兩項同乘一百。",
        "求整數兩項最大公因數並同步約分。",
        "分別計算原比與最簡比的比值完成驗算。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "得到5:2，完整呈現共同乘除並以比值2.5驗算。"
        },
        {
          "score": 2,
          "criteria": "答案5:2正確，但驗算或最大公因數說明缺一。"
        },
        {
          "score": 1,
          "criteria": "能將小數化為270:108或得到等值但未最簡的比。"
        },
        {
          "score": 0,
          "criteria": "只改一項小數點、答案不等值或未作答。"
        }
      ],
      "partialCreditRules": [
        "等值但未最簡最多1分。",
        "比值驗算正確但約分計算小錯，可依其前一步給1分。"
      ],
      "followThroughPolicy": "若前一步把270:108約成15:6，後續再約成5:2可得滿分；若共同倍率寫錯但後續比值驗證發現並修正，按修正後成果計分。",
      "unitNotationRules": "兩項同為公尺，可省略單位於比內；驗算需保留等號與小數2.5。",
      "answerOnlyPolicy": "只寫5:2且無過程，最多2分。",
      "commonErrors": [
        "只把前項二點七乘一百，沒有同步放大後項。",
        "將 270:108 同除以二後就停止，未化到互質。",
        "驗算時用前項加後項，沒有比較兩個真正比值。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "5:2，兩個比值皆為2.5。",
        "ambiguity": "題目兩項同單位、後項非0，答案唯一。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "50711ef2f599ac1ce31db7d9455fbae83e3ea851dabbc403c04e296c74954643"
    },
    {
      "questionId": "u06-s001-cr002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "ratio-simplify",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "將 3/10 公斤:450 公克化成最簡整數比，說明為何不能直接約分 3:450。",
      "target": "跨單位比的化簡與理由",
      "requiredWork": [
        "先統一公斤與公克。",
        "化成最簡整數比。",
        "解釋不同單位數字不可直接比較。"
      ],
      "fullCreditSolution": [
        "先統一單位：3/10 公斤等於 300 公克，所以原比是 300:450。",
        "300 與 450 的最大公因數為 150，同除以 150 得最簡整數比 2:3。",
        "不能直接寫 3:450，因為三只是公斤分數的分子，不是以公克計的完整前項量，兩項基準不同。"
      ],
      "alternativeSolutions": [
        "也可把450公克化為0.45公斤，0.3:0.45=30:45=2:3。"
      ],
      "reasoningSteps": [
        "把十分之三公斤完整換算成三百公克。",
        "列出同單位比 300:450，再用最大公因數約分。",
        "說明分子三不是原量，不能和四百五十公克直接相比。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確統一單位並得2:3，且清楚說明3不是0.3公斤的完整數值。"
        },
        {
          "score": 2,
          "criteria": "得2:3且有單位換算，但解釋簡略。"
        },
        {
          "score": 1,
          "criteria": "能換成300:450或0.3:0.45，但未完成最簡。"
        },
        {
          "score": 0,
          "criteria": "直接以3:450約分或結果不等值。"
        }
      ],
      "partialCreditRules": [
        "單位換算正確是核心；只寫正答無說明最多2分。",
        "把0.3公斤誤成30公克但後續一致運算，不給單位核心分。"
      ],
      "followThroughPolicy": "若學生先用錯換算但明確以原比值檢查並自行修正，依最終正確過程評分；未修正的錯誤不給後續跟隨分。",
      "unitNotationRules": "答案比不帶單位，但過程必須標示300公克或0.3公斤。",
      "answerOnlyPolicy": "只寫2:3最多1分，因題目明確要求說明。",
      "commonErrors": [
        "把十分之三公斤當成三公克，列出錯誤的 3:450。",
        "單位換算後得到 300:450，卻沒有繼續化簡。",
        "將公斤轉公克時只乘分子，忽略分數代表完整量值。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "300:450=2:3。",
        "ambiguity": "兩種換算路徑一致，無四捨五入。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "34a5d595d06bbca88c3684b8d00ea90859d818d9d829972b70f0130e61002d42"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u06-s001-v001-semantic-review-r1",
      "questionId": "u06-s001-v001",
      "unitId": "u06",
      "skillId": "ratio-simplify",
      "contentSha256": "18490aea1a6658841eca745820fd7853b5cdc0ff7054a88d180b0bb8c966aa4d",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "直接算 18/24=3/4，因此最簡整數比是 3:4。",
      "derivedAnswer": "3:4",
      "storedAnswer": "3:4",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "18、24 同除以最大公因數 6 得 3:4。",
        "2:3 的比值是 2/3，不等於 18/24。",
        "4:5 的比值是 0.8，不等於 0.75。",
        "6:7 仍與原比不同。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「求最簡整數比」，已明示必要條件：前項 18、後項 24，後項非 0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位，兩項可直接比較。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：答案要求互質整數，3 與 4 互質。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無需近似。。"
      },
      "difficultyReason": "單一步驟整數約分。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：直接算 18/24=3/4，因此最簡整數比是 3:4。 正確選項為「3:4」。逐項檢查後，唯一為真的理由是「18、24 同除以最大公因數 6 得 3:4。」；其餘三項分別因「2:3 的比值是 2/3，不等於 18/24。」、「4:5 的比值是 0.8，不等於 0.75。」、「6:7 仍與原比不同。」而排除。邊界與語意再檢查：答案要求互質整數，3 與 4 互質。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s001-v002-semantic-review-r1",
      "questionId": "u06-s001-v002",
      "unitId": "u06",
      "skillId": "ratio-simplify",
      "contentSha256": "cc56f48d3b5bedbe1163d75b6ef27fde826d4d2b0a8e82ee42a11074eeb985fe",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "寬與高的比為 6:15，兩項同除以最大公因數 3，得到 2:5。等比例縮放後此比不變。",
      "derivedAnswer": "2:5",
      "storedAnswer": "2:5",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "3:5的比值不等於6÷15。",
        "6:15同除3得到2:5。",
        "5:2把寬高順序顛倒。",
        "6:5只化簡其中一項。"
      ],
      "ambiguityChecks": {
        "wording": "題幹明確要求「用實際尺寸建立並化簡比」，沒有第二種合理所求。",
        "units": "單位審查結果：兩項同為純數。；因此選項可在同一基準下比較。",
        "boundary": "寬高順序與單位均明示，答案唯一。",
        "rounding": "近似與取整審查：精確計算，不用四捨五入。。"
      },
      "difficultyReason": "基礎：依指定順序建立尺寸比並約成最簡。",
      "literacyNecessity": null,
      "reviewerNote": "u06-s001-v002 中央修訂後獨立重算：寬與高的比為 6:15，兩項同除以最大公因數 3，得到 2:5。等比例縮放後此比不變。 四個選項逐項核對，唯一正解為「2:5」；其餘選項排除理由為：3:5的比值不等於6÷15。；5:2把寬高順序顛倒。；6:5只化簡其中一項。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s001-v003-semantic-review-r1",
      "questionId": "u06-s001-v003",
      "unitId": "u06",
      "skillId": "ratio-simplify",
      "contentSha256": "547f5fa43801550aeac801672e54bb13fc4fda6a045d36d539e08d63276b703b",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "比值為 (3/4)÷(5/8)=3/4×8/5=6/5，所以比為 6:5。",
      "derivedAnswer": "6:5",
      "storedAnswer": "6:5",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "只消去第一個分母，改變比值。",
        "把前後項顛倒。",
        "前後項同乘 8 得 6:5。",
        "第一項多乘 2。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「化簡分數比」，已明示必要條件：兩個分母皆非 0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：6 與 5 互質且後項非 0。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：全程為精確分數。。"
      },
      "difficultyReason": "需要分數除法觀念。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：比值為 (3/4)÷(5/8)=3/4×8/5=6/5，所以比為 6:5。 正確選項為「6:5」。逐項檢查後，唯一為真的理由是「前後項同乘 8 得 6:5。」；其餘三項分別因「只消去第一個分母，改變比值。」、「把前後項顛倒。」、「第一項多乘 2。」而排除。邊界與語意再檢查：6 與 5 互質且後項非 0。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s001-v004-semantic-review-r1",
      "questionId": "u06-s001-v004",
      "unitId": "u06",
      "skillId": "ratio-simplify",
      "contentSha256": "3a05fac03aa29c57ec9e01e14e581614fbe826a1caa5fce13cd87b343b71e93f",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "2.4 公尺÷0.8 公尺=3，因此前項:後項=3:1。",
      "derivedAnswer": "3:1",
      "storedAnswer": "3:1",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "把 2.4 直接視為 240 卻又多除 10。",
        "24:8 雖等值但不是最簡。",
        "將比較順序倒置。",
        "2.4 公尺=240 公分，240:80=3:1。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「處理不同單位的比」，已明示必要條件：公尺與公分需先統一。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：統一為公分後約分。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：題意明確指定 2.4 公尺在前。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：2.4 為精確值，不取近似。。"
      },
      "difficultyReason": "需同時完成單位換算與化簡。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：2.4 公尺÷0.8 公尺=3，因此前項:後項=3:1。 正確選項為「3:1」。逐項檢查後，唯一為真的理由是「2.4 公尺=240 公分，240:80=3:1。」；其餘三項分別因「把 2.4 直接視為 240 卻又多除 10。」、「24:8 雖等值但不是最簡。」、「將比較順序倒置。」而排除。邊界與語意再檢查：題意明確指定 2.4 公尺在前。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s001-v005-semantic-review-r1",
      "questionId": "u06-s001-v005",
      "unitId": "u06",
      "skillId": "ratio-simplify",
      "contentSha256": "fa14f6d1f2ed8f56fb5b3f5633c8ee333a86d899e8d7cc7f69097bad87cea1af",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "14/21=2/3，四個選項中只有 2:3 同時等值且最簡。",
      "derivedAnswer": "2:3",
      "storedAnswer": "2:3",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "7:14=1:2，不等值。",
        "14、21 同除以 7 得 2:3。",
        "4:6 等值但尚可同除以 2，不是最簡。",
        "3:2 是倒比。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「同時判斷等值與最簡」，已明示必要條件：答案需符合兩個條件。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：4:6 被刻意排除，因題幹要求已化最簡。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "雙條件判斷。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：14/21=2/3，四個選項中只有 2:3 同時等值且最簡。 正確選項為「2:3」。逐項檢查後，唯一為真的理由是「14、21 同除以 7 得 2:3。」；其餘三項分別因「7:14=1:2，不等值。」、「4:6 等值但尚可同除以 2，不是最簡。」、「3:2 是倒比。」而排除。邊界與語意再檢查：4:6 被刻意排除，因題幹要求已化最簡。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s001-v006-semantic-review-r1",
      "questionId": "u06-s001-v006",
      "unitId": "u06",
      "skillId": "ratio-simplify",
      "contentSha256": "64465c86a9d5cf73e67ccf9f50a29b3ffd3e63dc676a8a91865e074d684dd254",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "比值 (3/2)÷(9/4)=2/3，因此最簡比 2:3。",
      "derivedAnswer": "2:3",
      "storedAnswer": "2:3",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "3:4 忽略第二個帶分數的分母。",
        "4:5 並非等值比。",
        "1又1/2=3/2，2又1/4=9/4；同乘 4 得 6:9，再約成 2:3。",
        "6:9 等值但不是最簡。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「化簡帶分數比」，已明示必要條件：兩個帶分數皆為正且後項非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：題目要求最簡整數比。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確分數。。"
      },
      "difficultyReason": "三步驟分數處理。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：比值 (3/2)÷(9/4)=2/3，因此最簡比 2:3。 正確選項為「2:3」。逐項檢查後，唯一為真的理由是「1又1/2=3/2，2又1/4=9/4；同乘 4 得 6:9，再約成 2:3。」；其餘三項分別因「3:4 忽略第二個帶分數的分母。」、「4:5 並非等值比。」、「6:9 等值但不是最簡。」而排除。邊界與語意再檢查：題目要求最簡整數比。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s001-v007-semantic-review-r1",
      "questionId": "u06-s001-v007",
      "unitId": "u06",
      "skillId": "ratio-simplify",
      "contentSha256": "8933403269a230b0dd14665a513b6c83466c655c91dbdeb576ae0fed3833563a",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "36:63 同除以 9 得 4:7，直接驗證 n=63。",
      "derivedAnswer": "63",
      "storedAnswer": "63",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "42 對應每份6，前項會是24。",
        "54 使比為2:3。",
        "72 使比為1:2。",
        "36 對應 4 份，每份 9；n 對應 7 份，所以 n=63。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由最簡比反求原項」，已明示必要條件：n 為正數且後項不可為0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：只有一個正數 n 使比例成立。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "需要由比的倍率反推未知項。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：36:63 同除以 9 得 4:7，直接驗證 n=63。 正確選項為「63」。逐項檢查後，唯一為真的理由是「36 對應 4 份，每份 9；n 對應 7 份，所以 n=63。」；其餘三項分別因「42 對應每份6，前項會是24。」、「54 使比為2:3。」、「72 使比為1:2。」而排除。邊界與語意再檢查：只有一個正數 n 使比例成立。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s001-v008-semantic-review-r1",
      "questionId": "u06-s001-v008",
      "unitId": "u06",
      "skillId": "ratio-simplify",
      "contentSha256": "24f272b1ea2211178bf8a7a3bd1e599db542c76899a1a5bb4bfc7ef72f522a46",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "35:56 同除7為5:8，且35+56=91，雙條件皆成立。",
      "derivedAnswer": "35:56",
      "storedAnswer": "35:56",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "總份數 13，每份 91÷13=7，所以原比 35:56。",
        "25:66 雖和91，但比值不是5:8。",
        "40:51 和91但不符5:8。",
        "45:46 近似1:1。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由最簡比與總和還原兩項」，已明示必要條件：兩項為正整數。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：正整數 k 唯一為7。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "結合份數與總和的兩條件。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：35:56 同除7為5:8，且35+56=91，雙條件皆成立。 正確選項為「35:56」。逐項檢查後，唯一為真的理由是「總份數 13，每份 91÷13=7，所以原比 35:56。」；其餘三項分別因「25:66 雖和91，但比值不是5:8。」、「40:51 和91但不符5:8。」、「45:46 近似1:1。」而排除。邊界與語意再檢查：正整數 k 唯一為7。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s001-v009-semantic-review-r1",
      "questionId": "u06-s001-v009",
      "unitId": "u06",
      "skillId": "ratio-simplify",
      "contentSha256": "5e96459be76144dc6ff0f78f928591945cf3f2bbbb276b74846574dcb23a96de",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "84/126=2/3，因此最簡比項和為 2+3=5。",
      "derivedAnswer": "5",
      "storedAnswer": "5",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "3 是後項，不是兩項和。",
        "7 來自錯誤約分 3:4。",
        "84、126 同除以 42 得 2:3，和為 5。",
        "10 是把 2:3 再同乘2後的和，非最簡比。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「最簡比的衍生量」，已明示必要條件：84、126為正整數。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：題目問化簡後的項和，不是原數和。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "兩階段計算。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：84/126=2/3，因此最簡比項和為 2+3=5。 正確選項為「5」。逐項檢查後，唯一為真的理由是「84、126 同除以 42 得 2:3，和為 5。」；其餘三項分別因「3 是後項，不是兩項和。」、「7 來自錯誤約分 3:4。」、「10 是把 2:3 再同乘2後的和，非最簡比。」而排除。邊界與語意再檢查：題目問化簡後的項和，不是原數和。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s001-v010-semantic-review-r1",
      "questionId": "u06-s001-v010",
      "unitId": "u06",
      "skillId": "ratio-simplify",
      "contentSha256": "a2919a38c14bfa02c08fcc21d5a077c772defdc12479218ba672ec51fb282138",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "750÷1200=0.625=5/8，因此果肉:水=5:8。",
      "derivedAnswer": "5:8",
      "storedAnswer": "5:8",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "3:4 對應900:1200。",
        "5:12 忽略共同因數。",
        "8:5 是水:果肉。",
        "1.2公斤=1200公克，750:1200 同除150得5:8。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「在配方標示中化簡跨單位比」，已明示必要條件：配方比例需保留果肉在前、水在後。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公斤換公克後比較。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：情境中的單位換算不可省略，否則數字比無意義。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：1.2公斤視為精確標示。。"
      },
      "difficultyReason": "素養題需解讀配方與單位。",
      "literacyNecessity": "配方的兩種材料用不同單位，必須換算才能得到可用比例。",
      "reviewerNote": "獨立重算：750÷1200=0.625=5/8，因此果肉:水=5:8。 正確選項為「5:8」。逐項檢查後，唯一為真的理由是「1.2公斤=1200公克，750:1200 同除150得5:8。」；其餘三項分別因「3:4 對應900:1200。」、「5:12 忽略共同因數。」、「8:5 是水:果肉。」而排除。邊界與語意再檢查：情境中的單位換算不可省略，否則數字比無意義。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s001-v011-semantic-review-r1",
      "questionId": "u06-s001-v011",
      "unitId": "u06",
      "skillId": "ratio-simplify",
      "contentSha256": "56f862599c2fed4f8c82163c499034a387cb3f572bd1b06de7f1acfc02a2930b",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "18/48=3/8，故部分對總量為3:8。",
      "derivedAnswer": "3:8",
      "storedAnswer": "3:8",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "18:48 同除以 6 得 3:8。",
        "3:5 是七年級:非七年級。",
        "5:8 是非七年級:全隊。",
        "8:3 是倒比。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「辨認情境中的比之分母」，已明示必要條件：全隊48已包含七年級18。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：人數單位一致。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：題幹明確問七年級:全隊，不是七年級:其他。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "需要讀懂部分與總量的角色。",
      "literacyNecessity": "若刪除『全隊』語意就會改變分母，因此情境是數學必要的。",
      "reviewerNote": "獨立重算：18/48=3/8，故部分對總量為3:8。 正確選項為「3:8」。逐項檢查後，唯一為真的理由是「18:48 同除以 6 得 3:8。」；其餘三項分別因「3:5 是七年級:非七年級。」、「5:8 是非七年級:全隊。」、「8:3 是倒比。」而排除。邊界與語意再檢查：題幹明確問七年級:全隊，不是七年級:其他。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s001-v012-semantic-review-r1",
      "questionId": "u06-s001-v012",
      "unitId": "u06",
      "skillId": "ratio-simplify",
      "contentSha256": "ed2f455245eb4e201d51955099cf229b7a2859569984b110e44ca49031c439d3",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "1500/900=5/3，故最簡比5:3。",
      "derivedAnswer": "5:3",
      "storedAnswer": "5:3",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "3:5 是反向比。",
        "1.5公里=1500公尺，1500:900同除300得5:3。",
        "5:9 把1.5公里誤當500公尺。",
        "15:9 等值但不是最簡。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「在路程資料中建立最簡比」，已明示必要條件：兩段長度皆為正。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公里換公尺。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：前後兩段已明確且無重疊。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：1.5公里為精確值。。"
      },
      "difficultyReason": "同時考單位與順序。",
      "literacyNecessity": "路線分段資訊決定前項與後項，不能移除情境而保持同一任務。",
      "reviewerNote": "獨立重算：1500/900=5/3，故最簡比5:3。 正確選項為「5:3」。逐項檢查後，唯一為真的理由是「1.5公里=1500公尺，1500:900同除300得5:3。」；其餘三項分別因「3:5 是反向比。」、「5:9 把1.5公里誤當500公尺。」、「15:9 等值但不是最簡。」而排除。邊界與語意再檢查：前後兩段已明確且無重疊。",
      "reviewerDecision": "pass"
    }
  ],
  "drawingSpecs": []
};
