// Deterministically serialized reviewed U06 content. Do not edit.
export default {
  "lecture": {
    "lectureId": "u06-s008-lecture-r1",
    "unitId": "u06",
    "numericUnitId": 6,
    "topicId": "u06-applications",
    "skillId": "scale-drawing",
    "lockedSkillTitle": "比例尺",
    "title": "比例尺：圖上距離與實際距離的同單位比",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "unitTitle": "比例式",
      "topicTitle": "比例應用",
      "skillOrder": 8,
      "lockedPrerequisiteSkillIds": [
        "inverse-variation-graph"
      ],
      "capBoundary": "處理數字比例尺、圖上與實際長度、簡單面積倍率；不延伸到地理投影誤差。"
    },
    "prerequisiteBridge": "比例尺是圖上長度:實際長度的固定比，因此本質上是正比。關鍵不是公式多，而是先統一單位與辨認方向。",
    "learningOutcomes": [
      "能解讀 1:n 的數字比例尺。",
      "能在公分、公尺、公里間正確換算。",
      "能由圖上距離求實際距離，或反求圖上距離。",
      "能理解長度放大 n 倍時面積放大 n² 倍。"
    ],
    "glossary": [
      {
        "term": "比例尺",
        "definition": "圖上距離與實際距離的比，兩者必須使用相同單位。"
      },
      {
        "term": "圖上距離",
        "definition": "地圖、設計圖或模型上量得的長度。"
      },
      {
        "term": "實際距離",
        "definition": "真實物體或地面上的對應長度。"
      },
      {
        "term": "縮尺",
        "definition": "把實際物縮小畫在圖上，例如 1:50000。"
      }
    ],
    "notation": [
      {
        "symbol": "1:n",
        "meaning": "圖上 1 個長度單位代表實際 n 個相同長度單位。"
      },
      {
        "symbol": "圖上距離/實際距離=1/n",
        "meaning": "兩者須先換成同單位。"
      },
      {
        "symbol": "1 km=100000 cm",
        "meaning": "地圖常用的公分與公里換算。"
      }
    ],
    "conceptNarrative": [
      "比例尺 1:50000 表示圖上 1 公分代表實際 50000 公分，也就是 500 公尺。",
      "求實際距離通常用圖上距離×縮小倍數；反求圖上距離則用實際距離÷縮小倍數。",
      "單位換算可在列比例式前或後進行，但比例中的兩項必須同單位。",
      "若圖的每一條長度都縮為 1/n，面積會縮為 1/n²，不能只乘一次 n。",
      "印刷或螢幕縮放可能改變實際量得長度，所以題目若註明『不按比例』，不可拿尺量。"
    ],
    "formalDefinitions": [
      {
        "name": "數字比例尺",
        "statement": "以 1:n 表示圖上長度是實際長度的 1/n。"
      },
      {
        "name": "面積比例",
        "statement": "相似圖形的長度比為 1:n 時，面積比為 1:n²。"
      }
    ],
    "formulas": [
      {
        "formula": "實際距離=圖上距離×n",
        "conditions": [
          "比例尺為1:n",
          "單位一致"
        ],
        "meaning": "由圖求實際。"
      },
      {
        "formula": "圖上距離=實際距離÷n",
        "conditions": [
          "比例尺為1:n",
          "單位一致"
        ],
        "meaning": "由實際求圖。"
      },
      {
        "formula": "面積比=(長度比)²",
        "conditions": [
          "對應圖形相似"
        ],
        "meaning": "面積倍率。"
      }
    ],
    "nonApplicableCases": [
      "把 1:50000 讀成圖上 1 公分代表 50000 公里。",
      "未將公里換成公分便直接列 3:6。",
      "比例尺方向寫成實際:圖上。",
      "面積題仍只乘長度倍率一次。",
      "用尺量標示『示意圖不按比例』的線段。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "先判斷題目給的是圖上距離、實際距離或比例尺中的哪一項。",
        "check": "比例尺方向固定為圖上:實際。"
      },
      {
        "step": 2,
        "instruction": "把圖上與實際長度統一成相同單位後再列比例。",
        "check": "1公里已換成100000公分。"
      },
      {
        "step": 3,
        "instruction": "求實距時乘分母，求圖距時除以分母。",
        "check": "答案量級符合縮圖應小於實物。"
      },
      {
        "step": 4,
        "instruction": "周長依長度倍率一次處理，面積則使用長度倍率的平方。",
        "check": "平方單位的換算也使用平方倍率。"
      },
      {
        "step": 5,
        "instruction": "把答案換回原單位反算圖距，且不量測不按比例示意圖。",
        "check": "反算回題目標示值。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "比例尺1:25000，圖上6公分，實際多遠？",
        "solutionSteps": [
          "計算6×25000=150000公分。",
          "用100000公分=1公里換算。",
          "得到1.5公里並反算回6公分。"
        ],
        "answer": "1.5公里。",
        "why": "比例尺的兩項先視為相同單位，圖上六公分放大二萬五千倍得到十五萬公分。再換成一點五公里，最後除回二萬五千可恢復六公分，確保方向沒有顛倒。"
      },
      {
        "exampleId": "L2",
        "prompt": "比例尺1:80000，實際4公里，圖上幾公分？",
        "solutionSteps": [
          "把4公里換成400000公分。",
          "計算400000÷80000=5。",
          "以5×80000=400000公分驗算。"
        ],
        "answer": "5公分。",
        "why": "要求的是較短的圖上距離，所以應把同單位的實際距離除以縮小倍數。四十萬除以八萬得到五公分，反向放大又回到四公里，符合縮尺方向。"
      },
      {
        "exampleId": "L3",
        "prompt": "模型長18公分，實物長4.5公尺，求比例尺。",
        "solutionSteps": [
          "將4.5公尺換成450公分。",
          "列模型:實物=18:450。",
          "同除以18得到1:25。"
        ],
        "answer": "1:25。",
        "why": "模型與實物必須先統一為公分才能化簡，否則十八與四點五直接相比會混入單位錯誤。十八比四百五十同除十八為一比二十五，且模型確實較小。"
      },
      {
        "exampleId": "L4",
        "prompt": "平面圖比例尺1:100，圖上房間面積24平方公分，實際面積？",
        "solutionSteps": [
          "判斷長度倍率為100。",
          "面積倍率為100²=10000。",
          "算24×10000平方公分=24平方公尺。"
        ],
        "answer": "24平方公尺。",
        "why": "面積由兩個互相垂直的長度相乘而成，兩個方向各放大一百倍，所以總倍率是一萬。二十四萬平方公分再除以一萬換成平方公尺，得到二十四。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "1:20000 寫成實際÷圖上=1/20000。",
        "why": "方向顛倒。",
        "correction": "圖上÷實際=1/20000。"
      },
      {
        "mistake": "2 公分代表 2 萬公里。",
        "why": "忽略相同單位。",
        "correction": "先讀作 2×20000 公分。"
      },
      {
        "mistake": "公里換公分只乘 1000。",
        "why": "把公尺與公分漏一層。",
        "correction": "1 公里=100000 公分。"
      },
      {
        "mistake": "求圖上距離時仍乘 n。",
        "why": "沒有辨認未知量。",
        "correction": "實際距離除以 n。"
      },
      {
        "mistake": "面積只乘 n。",
        "why": "面積含兩個長度方向。",
        "correction": "乘 n²。"
      },
      {
        "mistake": "從示意圖目測長度。",
        "why": "圖可能縮放或不按比例。",
        "correction": "只使用題目標示數值。"
      }
    ],
    "selfCheck": [
      "比例尺順序是圖上:實際嗎？",
      "兩項已換成相同單位嗎？",
      "乘或除 n 的方向正確嗎？",
      "答案單位符合題目嗎？",
      "面積是否使用平方倍率？"
    ],
    "summary": [
      "比例尺是圖上距離與實際距離的同單位比。",
      "1:n 表示實際長是圖上長的 n 倍。",
      "公里與公分換算是常見關鍵。",
      "面積倍率是長度倍率的平方。"
    ],
    "connections": {
      "previous": "比例尺是 y=kx 的正比實例。",
      "next": [
        "比例應用題會把單價、配方、速度等關係轉成比例式。",
        "複合題可能連續使用比例尺與其他比率。"
      ]
    },
    "figureReferences": [
      "u06-fig-scale-map-01"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u06-s008-v001",
        "u06-s008-v002",
        "u06-s008-v003",
        "u06-s008-v004",
        "u06-s008-v005",
        "u06-s008-v006",
        "u06-s008-v007",
        "u06-s008-v008",
        "u06-s008-v009",
        "u06-s008-v010",
        "u06-s008-v011",
        "u06-s008-v012"
      ],
      "constructedResponseIds": [
        "u06-s008-cr001",
        "u06-s008-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "contentAuthorityConfirmed": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "重新換算 150000 公分=1.5 公里、400000÷80000=5 與 4.5 公尺=450 公分；面積例另以 18 公尺×約 13.33 公尺的等面積概念核對 24 平方公尺，確認使用平方倍率。",
      "reviewVersion": "human-lecture-review-u06-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "880f6ee6e72de24abc695833bb13b566b16e74e51ceed5d5d300f8905ea5e9ee"
  },
  "mcQuestions": [
    {
      "questionId": "u06-s008-v001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "scale-drawing",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "比例尺 1:50000 表示圖上 1 公分代表實際多少公尺？",
      "text": "比例尺 1:50000 表示圖上 1 公分代表實際多少公尺？",
      "givenConditions": "圖上與實際使用相同長度單位。",
      "target": "解讀數字比例尺",
      "choices": [
        "50公尺",
        "5000公尺",
        "50000公尺",
        "500公尺"
      ],
      "answerIndex": 3,
      "independentSolution": "500公尺=50000公分。",
      "mainExplanation": "1:50000的兩項同單位，將50000公分換算。",
      "explanation": "比例尺1:50000的前後項必須使用相同單位，所以圖上1公分代表實際50000公分。因100公分=1公尺，50000÷100=500公尺；反算500公尺=50000公分，確實與比例尺後項一致。",
      "steps": [
        "把比例尺讀成1公分對50000公分。",
        "用50000÷100換成500公尺。",
        "將500公尺換回50000公分驗算。"
      ],
      "optionAnalysis": [
        {
          "choice": "50公尺",
          "truth": false,
          "reason": "少除一個10。"
        },
        {
          "choice": "5000公尺",
          "truth": false,
          "reason": "多一個0。"
        },
        {
          "choice": "50000公尺",
          "truth": false,
          "reason": "未把公分換成公尺。"
        },
        {
          "choice": "500公尺",
          "truth": true,
          "reason": "50000公分=500公尺。"
        }
      ],
      "misconceptionTarget": "把比例尺後項五萬直接當成公尺，沒有先維持同單位再換算。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation-graph"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation-graph'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 55,
      "unitCheck": "公分轉公尺。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "1公尺=100公分。",
      "difficultyReason": "基礎單位換算。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9c66b975d76906e016410534ba76173e05df8934a94200b8da337f21bf4528b8"
    },
    {
      "questionId": "u06-s008-v002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "scale-drawing",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "比例尺 1:25000，圖上 4 公分的實際距離為何？",
      "text": "比例尺 1:25000，圖上 4 公分的實際距離為何？",
      "givenConditions": "比例尺固定。",
      "target": "由圖上距離求實際距離",
      "choices": [
        "100公尺",
        "1公里",
        "2.5公里",
        "10公里"
      ],
      "answerIndex": 1,
      "independentSolution": "1公里在圖上為100000/25000=4公分。",
      "mainExplanation": "先求實際公分，再換公里。",
      "explanation": "圖上4公分在1:25000地圖中代表4×25000=100000公分。因1公里=1000公尺=100000公分，所以實際距離是1公里。反算100000÷25000=4公分，與題目的圖距相同，單位與比例方向都正確。",
      "steps": [
        "計算實際距離4×25000=100000公分。",
        "用100000公分=1公里完成換算。",
        "以100000÷25000=4公分反算。"
      ],
      "optionAnalysis": [
        {
          "choice": "100公尺",
          "truth": false,
          "reason": "少乘10。"
        },
        {
          "choice": "1公里",
          "truth": true,
          "reason": "4×25000=100000公分=1公里。"
        },
        {
          "choice": "2.5公里",
          "truth": false,
          "reason": "把4當10公分。"
        },
        {
          "choice": "10公里",
          "truth": false,
          "reason": "公分換公里錯。"
        }
      ],
      "misconceptionTarget": "公里換公分時只乘一千，漏掉公尺到公分還要再乘一百。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation-graph"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation-graph'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 65,
      "unitCheck": "1公里=100000公分。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "圖上4公分為標示值。",
      "difficultyReason": "基礎比例尺。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "b68f16919980da724c8ffa95e64f890b4c53e9994002292167aa626ba2a39bbd"
    },
    {
      "questionId": "u06-s008-v003",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "scale-drawing",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "比例尺 1:80000，實際 2.4 公里在圖上長多少公分？",
      "text": "比例尺 1:80000，實際 2.4 公里在圖上長多少公分？",
      "givenConditions": "比例尺1:80000。",
      "target": "由實際距離反求圖上",
      "choices": [
        "3公分",
        "1.92公分",
        "12公分",
        "30公分"
      ],
      "answerIndex": 0,
      "independentSolution": "3×80000=240000公分。",
      "mainExplanation": "實際距離除以縮小倍數。",
      "explanation": "先把實際2.4公里換成240000公分，再依比例尺用實際距離除以80000，得到圖上距離240000÷80000=3公分。反算3×80000=240000公分=2.4公里，方向與單位都正確，也符合圖距小於實距的縮尺特徵。",
      "steps": [
        "將2.4公里換成240000公分。",
        "計算圖距240000÷80000=3公分。",
        "用3×80000換回2.4公里驗算。"
      ],
      "optionAnalysis": [
        {
          "choice": "3公分",
          "truth": true,
          "reason": "2.4公里=240000公分，除80000得3。"
        },
        {
          "choice": "1.92公分",
          "truth": false,
          "reason": "把2.4×0.8。"
        },
        {
          "choice": "12公分",
          "truth": false,
          "reason": "少除一個0。"
        },
        {
          "choice": "30公分",
          "truth": false,
          "reason": "公里換公分或除法錯。"
        }
      ],
      "misconceptionTarget": "求縮小後的圖距仍乘比例尺分母，或沒有先把公里換成公分。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation-graph"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation-graph'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 70,
      "unitCheck": "公里換公分。",
      "roundingCheck": "2.4為精確值。",
      "ambiguityBoundaryAudit": "答案應小於實際數值且單位為公分。",
      "difficultyReason": "基礎反向計算。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d46c25542f6fee1d6c314c5944710a05038fc7d52d263c1339b7ffca5b3de05b"
    },
    {
      "questionId": "u06-s008-v004",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "scale-drawing",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "模型車長 18 公分，實車長 4.5 公尺。模型比例尺為何？",
      "text": "模型車長 18 公分，實車長 4.5 公尺。模型比例尺為何？",
      "givenConditions": "模型與實車對應同一長度。",
      "target": "由兩個長度求比例尺",
      "choices": [
        "1:4",
        "1:40",
        "1:25",
        "4:25"
      ],
      "answerIndex": 2,
      "independentSolution": "18×25=450。",
      "mainExplanation": "統一單位後化簡模型:實物。",
      "explanation": "比例尺是模型長與實車長的同單位比。先把4.5公尺換成450公分，再化簡18:450；兩項同除以18得到1:25。驗算18×25=450公分，正好等於實車長。",
      "steps": [
        "把實車4.5公尺換成450公分。",
        "列模型:實車=18:450。",
        "同除以18得1:25，並以18×25=450驗算。"
      ],
      "optionAnalysis": [
        {
          "choice": "1:4",
          "truth": false,
          "reason": "只用4.5與18。"
        },
        {
          "choice": "1:40",
          "truth": false,
          "reason": "450÷18誤成40。"
        },
        {
          "choice": "1:25",
          "truth": true,
          "reason": "4.5公尺=450公分，18:450=1:25。"
        },
        {
          "choice": "4:25",
          "truth": false,
          "reason": "未化成圖上:實際。"
        }
      ],
      "misconceptionTarget": "未統一公分與公尺就直接相比，或把實物與模型的比例方向顛倒。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation-graph"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation-graph'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 85,
      "unitCheck": "公尺轉公分。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "模型為前項。",
      "difficultyReason": "標準反求比例尺。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3c2b1c69620bd6bfffa504edd19319d5ece2fd59beec869f555d906078ef3514"
    },
    {
      "questionId": "u06-s008-v005",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "scale-drawing",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "地圖比例尺 1:60000，兩地圖上距離 7.5 公分。實際距離為何？",
      "text": "地圖比例尺 1:60000，兩地圖上距離 7.5 公分。實際距離為何？",
      "givenConditions": "比例尺固定。",
      "target": "小數圖距求實距",
      "choices": [
        "0.45公里",
        "4.5公里",
        "7.5公里",
        "45公里"
      ],
      "answerIndex": 1,
      "independentSolution": "4.5公里換回圖上為7.5公分。",
      "mainExplanation": "完成乘法與公分轉公里。",
      "explanation": "題幹已完整給出比例尺1:60000與圖距7.5公分，不使用數值不同的共用示意圖。實距為7.5×60000=450000公分；因100000公分=1公里，所以450000公分=4.5公里。反算4.5公里÷60000回到7.5公分。",
      "steps": [
        "計算7.5×60000=450000公分。",
        "把450000公分換成4.5公里。",
        "將4.5公里換回公分後除60000，驗證圖距7.5公分。"
      ],
      "optionAnalysis": [
        {
          "choice": "0.45公里",
          "truth": false,
          "reason": "少一個10。"
        },
        {
          "choice": "4.5公里",
          "truth": true,
          "reason": "7.5×60000=450000公分=4.5公里。"
        },
        {
          "choice": "7.5公里",
          "truth": false,
          "reason": "把圖上數字直接當公里。"
        },
        {
          "choice": "45公里",
          "truth": false,
          "reason": "多一個10。"
        }
      ],
      "misconceptionTarget": "把其他圖的比例尺或圖距套入本題，或在公分轉公里時差一個十倍。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation-graph"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation-graph'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "公分與公里。",
      "roundingCheck": "精確小數。",
      "ambiguityBoundaryAudit": "結果介於合理公里級。",
      "difficultyReason": "標準小數運算。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8097af224872ac10cf7a18f7620185fb680a61f25f13ce3214e65d1f4e824607"
    },
    {
      "questionId": "u06-s008-v006",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "scale-drawing",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "一張平面圖比例尺 1:200。圖上長方形長 6 公分、寬 4 公分，實際周長多少公尺？",
      "text": "一張平面圖比例尺 1:200。圖上長方形長 6 公分、寬 4 公分，實際周長多少公尺？",
      "givenConditions": "長方形且各邊按同倍率。",
      "target": "比例尺與周長整合",
      "choices": [
        "20公尺",
        "24公尺",
        "80公尺",
        "40公尺"
      ],
      "answerIndex": 3,
      "independentSolution": "圖上周長20公分×200=4000公分=40公尺。",
      "mainExplanation": "先將兩邊長放大200倍，再算周長。",
      "explanation": "圖上長6公分、寬4公分，在1:200下分別代表實際1200公分與800公分，也就是12公尺與8公尺。實際周長=2×(12+8)=40公尺；也可先算圖上周長20公分，再乘200得4000公分。",
      "steps": [
        "把長寬放大200倍，得到12公尺與8公尺。",
        "計算周長2×(12+8)=40公尺。",
        "另以圖上周長20公分×200=4000公分驗算。"
      ],
      "optionAnalysis": [
        {
          "choice": "20公尺",
          "truth": false,
          "reason": "只算長寬和。"
        },
        {
          "choice": "24公尺",
          "truth": false,
          "reason": "把圖上面積24當周長。"
        },
        {
          "choice": "80公尺",
          "truth": false,
          "reason": "周長重複乘2。"
        },
        {
          "choice": "40公尺",
          "truth": true,
          "reason": "實際長12公尺、寬8公尺，周長2(12+8)=40。"
        }
      ],
      "misconceptionTarget": "把長方形周長誤用成長乘寬，或只放大其中一條邊就作答。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation-graph"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation-graph'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 105,
      "unitCheck": "公分轉公尺。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "可用先周長後縮放驗證。",
      "difficultyReason": "多步幾何與比例尺。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "110cee312dc843ab500c3fe2404b3cd3a1a2c9a0ad75097b887744938ea18823"
    },
    {
      "questionId": "u06-s008-v007",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "scale-drawing",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "比例尺 1:100 的平面圖上，某正方形面積為 25 平方公分。實際面積為何？",
      "text": "比例尺 1:100 的平面圖上，某正方形面積為 25 平方公分。實際面積為何？",
      "givenConditions": "圖形相似且比例尺作用於兩個長度方向。",
      "target": "比例尺的面積倍率",
      "choices": [
        "0.25平方公尺",
        "250平方公尺",
        "25平方公尺",
        "2500平方公尺"
      ],
      "answerIndex": 2,
      "independentSolution": "圖上正方形邊5公分，實際邊5公尺，面積25平方公尺。",
      "mainExplanation": "面積倍率需平方，平方單位換算也需平方處理。",
      "explanation": "圖上正方形面積25平方公分，所以邊長為5公分。比例尺1:100使實際邊長為500公分=5公尺，因此實際面積=5×5=25平方公尺。長度倍率100在面積中要使用兩次，面積倍率為10000。",
      "steps": [
        "由25平方公分求圖上邊長5公分。",
        "放大100倍得實際邊長5公尺。",
        "計算實際面積5×5=25平方公尺。"
      ],
      "optionAnalysis": [
        {
          "choice": "0.25平方公尺",
          "truth": false,
          "reason": "只把25平方公分換單位，未放大面積。"
        },
        {
          "choice": "250平方公尺",
          "truth": false,
          "reason": "多乘10倍。"
        },
        {
          "choice": "25平方公尺",
          "truth": true,
          "reason": "長度倍率100，面積倍率10000；25×10000=250000平方公分=25平方公尺。"
        },
        {
          "choice": "2500平方公尺",
          "truth": false,
          "reason": "把平方公分轉平方公尺漏除10000。"
        }
      ],
      "misconceptionTarget": "面積只乘一次長度倍率，或把平方公分換平方公尺時只除以一百。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation-graph"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation-graph'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 130,
      "unitCheck": "平方公分轉平方公尺。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "1平方公尺=10000平方公分。",
      "difficultyReason": "高階面積倍率。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "45834137b2f58968f03c3dce52fe9e6698ee6dc5baed238461308aa13841972f"
    },
    {
      "questionId": "u06-s008-v008",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "scale-drawing",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "某地圖印刷時長、寬都放大為原來的 150%，原比例尺 1:90000。放大後比例尺為何？",
      "text": "某地圖印刷時長、寬都放大為原來的 150%，原比例尺 1:90000。放大後比例尺為何？",
      "givenConditions": "印刷均勻放大且實際地物不變。",
      "target": "印刷縮放後更新比例尺",
      "choices": [
        "1:60000",
        "1:135000",
        "1:90000",
        "3:200000"
      ],
      "answerIndex": 0,
      "independentSolution": "原圖1公分代表90000公分；放大後1.5公分代表同距，故1公分代表60000。",
      "mainExplanation": "同一實際距離下圖上距離放大，縮小倍數變小。",
      "explanation": "原圖1公分代表90000公分實距。印刷後原來1公分變成1.5公分，但仍代表同一段90000公分，所以放大圖的1公分代表90000÷1.5=60000公分，新的比例尺為1:60000。分母變小符合圖畫得更大的直覺。",
      "steps": [
        "把150%寫成圖距乘1.5。",
        "列1.5公分對90000公分實距。",
        "兩項同除以1.5，得到比例尺1:60000。"
      ],
      "optionAnalysis": [
        {
          "choice": "1:60000",
          "truth": true,
          "reason": "圖上同一實距變為1.5倍，比例尺分母90000÷1.5=60000。"
        },
        {
          "choice": "1:135000",
          "truth": false,
          "reason": "把分母也乘1.5。"
        },
        {
          "choice": "1:90000",
          "truth": false,
          "reason": "忽略印刷放大。"
        },
        {
          "choice": "3:200000",
          "truth": false,
          "reason": "比例值不等於1/60000。"
        }
      ],
      "misconceptionTarget": "讓比例尺分母也乘一點五，忽略圖距放大時每公分代表的實距反而變小。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation-graph"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation-graph'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 130,
      "unitCheck": "同單位比。",
      "roundingCheck": "150%=1.5精確。",
      "ambiguityBoundaryAudit": "長寬均勻放大，不扭曲。",
      "difficultyReason": "抽象比例尺變換。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9834d91eb9149167c8d76c468e2658924841e5dc16cfbaebeaf25a9ef59f313e"
    },
    {
      "questionId": "u06-s008-v009",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "scale-drawing",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "兩張地圖比例尺分別為甲 1:40000、乙 1:100000。表示同一段實際道路時，甲圖上的線段長是乙圖的幾倍？",
      "text": "兩張地圖比例尺分別為甲 1:40000、乙 1:100000。表示同一段實際道路時，甲圖上的線段長是乙圖的幾倍？",
      "givenConditions": "同一實際道路。",
      "target": "比較兩種比例尺圖距",
      "choices": [
        "0.4倍",
        "1.5倍",
        "2.5倍",
        "4倍"
      ],
      "answerIndex": 2,
      "independentSolution": "若實距4公里，甲10公分、乙4公分，比2.5。",
      "mainExplanation": "同一實距在分母較小的地圖上畫得較長。",
      "explanation": "同一實際距離D在甲、乙圖上的長度分別為D/40000與D/100000，所以甲對乙的倍率=(D/40000)÷(D/100000)=100000/40000=2.5。也可取4公里驗算，甲圖10公分、乙圖4公分，線段長度比確為2.5倍。",
      "steps": [
        "寫甲圖距D/40000與乙圖距D/100000。",
        "相除並消去D，得到100000/40000=2.5。",
        "取4公里反算10公分對4公分驗證。"
      ],
      "optionAnalysis": [
        {
          "choice": "0.4倍",
          "truth": false,
          "reason": "0.4是反向比。"
        },
        {
          "choice": "1.5倍",
          "truth": false,
          "reason": "用分母相減。"
        },
        {
          "choice": "2.5倍",
          "truth": true,
          "reason": "圖上長與比例尺分母成反比，100000/40000=2.5。"
        },
        {
          "choice": "4倍",
          "truth": false,
          "reason": "把100000/25000。"
        }
      ],
      "misconceptionTarget": "只比較分母大小卻把倍率方向顛倒，或誤以為分母差六萬就是倍數。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation-graph"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation-graph'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 120,
      "unitCheck": "倍數無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "兩圖未縮放變形。",
      "difficultyReason": "跨比例尺比較。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "26e6eb344d5c631ef5ee4e702d01d9f21ad43fa80727c306c57ea3c26c45d857"
    },
    {
      "questionId": "u06-s008-v010",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "scale-drawing",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "校園地圖比例尺 1:2000，圖上操場長 5 公分。實際長多少公尺？",
      "text": "校園地圖比例尺 1:2000，圖上操場長 5 公分。實際長多少公尺？",
      "givenConditions": "比例尺與標示線段對應。",
      "target": "在校園圖讀實際長度",
      "choices": [
        "100公尺",
        "10公尺",
        "250公尺",
        "1000公尺"
      ],
      "answerIndex": 0,
      "independentSolution": "100公尺換回10000公分，除2000得5公分。",
      "mainExplanation": "圖距乘比例尺分母。",
      "explanation": "本題直接使用題幹的校園比例尺1:2000與圖上長5公分，不使用數值不同的共用示意圖。實際長=5×2000=10000公分，再除以100得到100公尺。反算100公尺=10000公分，除2000正好為5公分。",
      "steps": [
        "計算實際長5×2000=10000公分。",
        "將10000公分換成100公尺。",
        "用10000÷2000=5公分反算。"
      ],
      "optionAnalysis": [
        {
          "choice": "100公尺",
          "truth": true,
          "reason": "5×2000=10000公分=100公尺。"
        },
        {
          "choice": "10公尺",
          "truth": false,
          "reason": "少除一個10。"
        },
        {
          "choice": "250公尺",
          "truth": false,
          "reason": "把5×50。"
        },
        {
          "choice": "1000公尺",
          "truth": false,
          "reason": "未正確換單位。"
        }
      ],
      "misconceptionTarget": "把其他地圖的比例尺套入校園題，或將一萬公分錯換成十公尺。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation-graph"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation-graph'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 80,
      "unitCheck": "公分轉公尺。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "圖示僅提供標示長度，不需目測。",
      "difficultyReason": "生活地圖應用。",
      "literacyContextNecessity": "校園比例尺決定圖上與實際的轉換。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "cbb9199062ab9e01e950ef1d5e4e4f8aecea815a1b48899234eedff1a9a29125"
    },
    {
      "questionId": "u06-s008-v011",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "scale-drawing",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "建築圖比例尺 1:50，圖上門寬 1.8 公分。實際門寬多少公分？",
      "text": "建築圖比例尺 1:50，圖上門寬 1.8 公分。實際門寬多少公分？",
      "givenConditions": "圖上與實際均用公分。",
      "target": "建築圖尺寸換算",
      "choices": [
        "36公分",
        "50公分",
        "180公分",
        "90公分"
      ],
      "answerIndex": 3,
      "independentSolution": "90÷50=1.8。",
      "mainExplanation": "同單位直接放大50倍。",
      "explanation": "比例尺1:50表示圖上1公分對實際50公分，題目也明確要求以公分作答。實際門寬=1.8×50=90公分；這是0.9公尺，但不是0.9公里。用90÷50=1.8公分反算，單位與圖距完全一致。",
      "steps": [
        "確認比例尺兩項與答案都使用公分。",
        "計算1.8×50=90公分。",
        "用90÷50=1.8公分驗算，並排除公里單位。"
      ],
      "optionAnalysis": [
        {
          "choice": "36公分",
          "truth": false,
          "reason": "1.8×20。"
        },
        {
          "choice": "50公分",
          "truth": false,
          "reason": "把比例尺後項直接作答案。"
        },
        {
          "choice": "180公分",
          "truth": false,
          "reason": "多乘2。"
        },
        {
          "choice": "90公分",
          "truth": true,
          "reason": "1.8×50=90。"
        }
      ],
      "misconceptionTarget": "把公分誤寫成公里，或未依題目指定單位就把九十公分任意改成其他量級。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation-graph"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation-graph'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 75,
      "unitCheck": "圖上與實際門寬均以公分表示；本題不換算公里。",
      "roundingCheck": "精確到題目給定位數。",
      "ambiguityBoundaryAudit": "不需換其他單位。",
      "difficultyReason": "小數比例尺應用。",
      "literacyContextNecessity": "門寬情境提供合理尺寸檢查，90公分符合常見量級。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "17e1d36fd83e88fe76b592c6bd0f0eecd433b5397bb29369fdef85d47b4f782e"
    },
    {
      "questionId": "u06-s008-v012",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "scale-drawing",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "登山圖比例尺 1:50000，路線在圖上量得 8.6 公分。考量路線起伏，實際行走距離比平面距離多 20%。約需走多少公里？",
      "text": "登山圖比例尺 1:50000，路線在圖上量得 8.6 公分。考量路線起伏，實際行走距離比平面距離多 20%。約需走多少公里？",
      "givenConditions": "起伏增量以平面距離為基準。",
      "target": "比例尺與百分比複合",
      "choices": [
        "4.3公里",
        "5.16公里",
        "5公里",
        "6.2公里"
      ],
      "answerIndex": 1,
      "independentSolution": "5.16/1.2=4.3，逆向驗證。",
      "mainExplanation": "先用比例尺求平面距離，再套起伏倍率。",
      "explanation": "先求地圖所示的平面距離：8.6×50000=430000公分=4.3公里。實際行走距離比平面距離多20%，所以再乘1.2，得到4.3×1.2=5.16公里。反算5.16÷1.2=4.3公里，兩階段模型一致。",
      "steps": [
        "用比例尺算平面距離430000公分。",
        "換算為4.3公里後乘起伏倍率1.2。",
        "得到5.16公里，並除以1.2反算平面距離。"
      ],
      "optionAnalysis": [
        {
          "choice": "4.3公里",
          "truth": false,
          "reason": "4.3只算平面距離。"
        },
        {
          "choice": "5.16公里",
          "truth": true,
          "reason": "平面距離8.6×50000=430000公分=4.3公里；行走距離4.3×1.2=5.16。"
        },
        {
          "choice": "5公里",
          "truth": false,
          "reason": "把5.16過早取整。"
        },
        {
          "choice": "6.2公里",
          "truth": false,
          "reason": "計算20%錯。"
        }
      ],
      "misconceptionTarget": "漏掉路線起伏的第二步，或把增加百分之二十錯解成直接增加二十公里。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation-graph"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation-graph'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 120,
      "unitCheck": "公分轉公里。",
      "roundingCheck": "題目問約但選項保留到0.01公里，不再取整。",
      "ambiguityBoundaryAudit": "20%視為給定估計。",
      "difficultyReason": "同時處理地圖比例尺、單位轉換與路線比較，屬於比例尺複合素養。",
      "literacyContextNecessity": "地形起伏條件改變最後距離，不能只做比例尺。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "624625d3b5adf4b1a82cdbcd29ef3dd4048a0f9668b2c18217748ff0f3ba858f"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u06-s008-cr001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "scale-drawing",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "地圖比例尺1:40000，題目標示A到B的圖上距離為6.5公分。求實際距離，以公里表示，並以反算驗證換算。",
      "target": "由地圖求實距",
      "requiredWork": [
        "圖距乘比例尺分母。",
        "把公分換成公里。",
        "用反算驗證。"
      ],
      "fullCreditSolution": [
        "比例尺1:40000表示圖上1公分對實際40000公分，因此A到B的實距=6.5×40000=260000公分。",
        "因1公里=100000公分，260000公分=2.6公里。",
        "反算2.6公里=260000公分，再除以40000得到6.5公分，與題幹標示完全一致。",
        "計算只使用題幹數值，不以任何不按比例示意圖的像素長度作為資料。"
      ],
      "alternativeSolutions": [
        "可先求1公分代表0.4公里，再算6.5×0.4=2.6公里。"
      ],
      "reasoningSteps": [
        "由比例尺將6.5公分放大40000倍。",
        "把260000公分換成2.6公里。",
        "將2.6公里換回公分後除40000。",
        "確認反算回到原圖距6.5公分。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "得到2.6公里，公分換算與反算完整。"
        },
        {
          "score": 2,
          "criteria": "2.6公里正確但漏反算或中間單位。"
        },
        {
          "score": 1,
          "criteria": "得到260000公分但公里換算錯。"
        },
        {
          "score": 0,
          "criteria": "直接答260000公里或比例尺方向錯。"
        }
      ],
      "partialCreditRules": [
        "單位換算是主要得分點。",
        "只在示意圖上量線段而不用標示6.5公分不給分。"
      ],
      "followThroughPolicy": "若乘法正確但公里換算差10倍，給1分；後續依錯誤公里值不再加分。",
      "unitNotationRules": "最後必須以公里表示；1公里=100000公分。",
      "answerOnlyPolicy": "只寫2.6公里最多2分。",
      "commonErrors": [
        "把1:40000讀成一公分代表四萬公里，沒有維持同單位。",
        "用6.5除以40000，或拿不按比例圖形的線段重新量測而忽略標示值。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "2.6公里。",
        "ambiguity": "圖上標示值與比例尺充分，圖不按比例警告排除量測。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "9e8526aacc138c6fb3c0aaad9a6778454592f47b0aab08e7cb5ccee47b6a3b8c"
    },
    {
      "questionId": "u06-s008-cr002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "scale-drawing",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "一張1:200的平面圖上，長方形長8公分、寬5公分。求實際面積，以平方公尺表示，並解釋為何不能只把圖上面積乘200。",
      "target": "比例尺面積倍率",
      "requiredWork": [
        "求實際長寬或使用面積倍率。",
        "正確處理平方單位。",
        "說明面積倍率為200²。"
      ],
      "fullCreditSolution": [
        "比例尺1:200使實際長=8×200=1600公分=16公尺，實際寬=5×200=1000公分=10公尺。",
        "實際面積=16×10=160平方公尺。",
        "長與寬各放大200倍，所以面積倍率為200×200=40000，而不是只乘一次200。",
        "另以圖上面積40平方公分×40000=1600000平方公分=160平方公尺驗算。"
      ],
      "alternativeSolutions": [
        "圖上面積40平方公分×40000=1600000平方公分=160平方公尺。"
      ],
      "reasoningSteps": [
        "把圖上長寬各放大200倍並換成公尺。",
        "用實際長16公尺與寬10公尺求面積。",
        "說明面積含兩個長度方向，因此倍率為200²。",
        "用面積倍率法得到相同160平方公尺。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "得到160平方公尺，並清楚說明面積倍率200²。"
        },
        {
          "score": 2,
          "criteria": "答案正確且有長寬換算，但未明確解釋平方倍率。"
        },
        {
          "score": 1,
          "criteria": "能算出實際長16公尺與寬10公尺，但面積或單位錯。"
        },
        {
          "score": 0,
          "criteria": "只用40×200或無有效過程。"
        }
      ],
      "partialCreditRules": [
        "兩種方法皆可滿分。",
        "平方公分轉平方公尺需除10000。"
      ],
      "followThroughPolicy": "若長寬之一換算小錯，後續使用其值一致算面積可給1分；若核心只乘200，不採跟隨。",
      "unitNotationRules": "最後用平方公尺；中間可用公分。",
      "answerOnlyPolicy": "只寫160平方公尺最多2分。",
      "commonErrors": [
        "只把圖上面積乘200，忽略長與寬都各自放大一次。",
        "把1600000平方公分錯換成16000平方公尺，沒有使用平方單位倍率。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "160平方公尺，面積倍率40000。",
        "ambiguity": "長方形與比例尺條件完整。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "d81bb779a95618eb6729e53b8909f545c32e7c3d92f6203e30c6c631307be2a5"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u06-s008-v001-semantic-review-r1",
      "questionId": "u06-s008-v001",
      "unitId": "u06",
      "skillId": "scale-drawing",
      "contentSha256": "9c66b975d76906e016410534ba76173e05df8934a94200b8da337f21bf4528b8",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "500公尺=50000公分。",
      "derivedAnswer": "500公尺",
      "storedAnswer": "500公尺",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "少除一個10。",
        "多一個0。",
        "未把公分換成公尺。",
        "50000公分=500公尺。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「解讀數字比例尺」，已明示必要條件：圖上與實際使用相同長度單位。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公分轉公尺。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：1公尺=100公分。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "基礎單位換算。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：500公尺=50000公分。 正確選項為「500公尺」。逐項檢查後，唯一為真的理由是「50000公分=500公尺。」；其餘三項分別因「少除一個10。」、「多一個0。」、「未把公分換成公尺。」而排除。邊界與語意再檢查：1公尺=100公分。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s008-v002-semantic-review-r1",
      "questionId": "u06-s008-v002",
      "unitId": "u06",
      "skillId": "scale-drawing",
      "contentSha256": "b68f16919980da724c8ffa95e64f890b4c53e9994002292167aa626ba2a39bbd",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "1公里在圖上為100000/25000=4公分。",
      "derivedAnswer": "1公里",
      "storedAnswer": "1公里",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "少乘10。",
        "4×25000=100000公分=1公里。",
        "把4當10公分。",
        "公分換公里錯。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由圖上距離求實際距離」，已明示必要條件：比例尺固定。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：1公里=100000公分。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：圖上4公分為標示值。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "基礎比例尺。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：1公里在圖上為100000/25000=4公分。 正確選項為「1公里」。逐項檢查後，唯一為真的理由是「4×25000=100000公分=1公里。」；其餘三項分別因「少乘10。」、「把4當10公分。」、「公分換公里錯。」而排除。邊界與語意再檢查：圖上4公分為標示值。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s008-v003-semantic-review-r1",
      "questionId": "u06-s008-v003",
      "unitId": "u06",
      "skillId": "scale-drawing",
      "contentSha256": "d46c25542f6fee1d6c314c5944710a05038fc7d52d263c1339b7ffca5b3de05b",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "3×80000=240000公分。",
      "derivedAnswer": "3公分",
      "storedAnswer": "3公分",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "2.4公里=240000公分，除80000得3。",
        "把2.4×0.8。",
        "少除一個0。",
        "公里換公分或除法錯。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由實際距離反求圖上」，已明示必要條件：比例尺1:80000。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公里換公分。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：答案應小於實際數值且單位為公分。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：2.4為精確值。。"
      },
      "difficultyReason": "基礎反向計算。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：3×80000=240000公分。 正確選項為「3公分」。逐項檢查後，唯一為真的理由是「2.4公里=240000公分，除80000得3。」；其餘三項分別因「把2.4×0.8。」、「少除一個0。」、「公里換公分或除法錯。」而排除。邊界與語意再檢查：答案應小於實際數值且單位為公分。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s008-v004-semantic-review-r1",
      "questionId": "u06-s008-v004",
      "unitId": "u06",
      "skillId": "scale-drawing",
      "contentSha256": "3c2b1c69620bd6bfffa504edd19319d5ece2fd59beec869f555d906078ef3514",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "18×25=450。",
      "derivedAnswer": "1:25",
      "storedAnswer": "1:25",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "只用4.5與18。",
        "450÷18誤成40。",
        "4.5公尺=450公分，18:450=1:25。",
        "未化成圖上:實際。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由兩個長度求比例尺」，已明示必要條件：模型與實車對應同一長度。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公尺轉公分。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：模型為前項。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "標準反求比例尺。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：18×25=450。 正確選項為「1:25」。逐項檢查後，唯一為真的理由是「4.5公尺=450公分，18:450=1:25。」；其餘三項分別因「只用4.5與18。」、「450÷18誤成40。」、「未化成圖上:實際。」而排除。邊界與語意再檢查：模型為前項。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s008-v005-semantic-review-r1",
      "questionId": "u06-s008-v005",
      "unitId": "u06",
      "skillId": "scale-drawing",
      "contentSha256": "8097af224872ac10cf7a18f7620185fb680a61f25f13ce3214e65d1f4e824607",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "4.5公里換回圖上為7.5公分。",
      "derivedAnswer": "4.5公里",
      "storedAnswer": "4.5公里",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "少一個10。",
        "7.5×60000=450000公分=4.5公里。",
        "把圖上數字直接當公里。",
        "多一個10。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「小數圖距求實距」，已明示必要條件：比例尺固定。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公分與公里。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：結果介於合理公里級。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確小數。。"
      },
      "difficultyReason": "標準小數運算。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：4.5公里換回圖上為7.5公分。 正確選項為「4.5公里」。逐項檢查後，唯一為真的理由是「7.5×60000=450000公分=4.5公里。」；其餘三項分別因「少一個10。」、「把圖上數字直接當公里。」、「多一個10。」而排除。邊界與語意再檢查：結果介於合理公里級。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s008-v006-semantic-review-r1",
      "questionId": "u06-s008-v006",
      "unitId": "u06",
      "skillId": "scale-drawing",
      "contentSha256": "110cee312dc843ab500c3fe2404b3cd3a1a2c9a0ad75097b887744938ea18823",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "圖上周長20公分×200=4000公分=40公尺。",
      "derivedAnswer": "40公尺",
      "storedAnswer": "40公尺",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "只算長寬和。",
        "把圖上面積24當周長。",
        "周長重複乘2。",
        "實際長12公尺、寬8公尺，周長2(12+8)=40。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「比例尺與周長整合」，已明示必要條件：長方形且各邊按同倍率。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公分轉公尺。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：可用先周長後縮放驗證。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "多步幾何與比例尺。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：圖上周長20公分×200=4000公分=40公尺。 正確選項為「40公尺」。逐項檢查後，唯一為真的理由是「實際長12公尺、寬8公尺，周長2(12+8)=40。」；其餘三項分別因「只算長寬和。」、「把圖上面積24當周長。」、「周長重複乘2。」而排除。邊界與語意再檢查：可用先周長後縮放驗證。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s008-v007-semantic-review-r1",
      "questionId": "u06-s008-v007",
      "unitId": "u06",
      "skillId": "scale-drawing",
      "contentSha256": "45834137b2f58968f03c3dce52fe9e6698ee6dc5baed238461308aa13841972f",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "圖上正方形邊5公分，實際邊5公尺，面積25平方公尺。",
      "derivedAnswer": "25平方公尺",
      "storedAnswer": "25平方公尺",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "只把25平方公分換單位，未放大面積。",
        "多乘10倍。",
        "長度倍率100，面積倍率10000；25×10000=250000平方公分=25平方公尺。",
        "把平方公分轉平方公尺漏除10000。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「比例尺的面積倍率」，已明示必要條件：圖形相似且比例尺作用於兩個長度方向。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：平方公分轉平方公尺。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：1平方公尺=10000平方公分。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "高階面積倍率。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：圖上正方形邊5公分，實際邊5公尺，面積25平方公尺。 正確選項為「25平方公尺」。逐項檢查後，唯一為真的理由是「長度倍率100，面積倍率10000；25×10000=250000平方公分=25平方公尺。」；其餘三項分別因「只把25平方公分換單位，未放大面積。」、「多乘10倍。」、「把平方公分轉平方公尺漏除10000。」而排除。邊界與語意再檢查：1平方公尺=10000平方公分。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s008-v008-semantic-review-r1",
      "questionId": "u06-s008-v008",
      "unitId": "u06",
      "skillId": "scale-drawing",
      "contentSha256": "9834d91eb9149167c8d76c468e2658924841e5dc16cfbaebeaf25a9ef59f313e",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "原圖1公分代表90000公分；放大後1.5公分代表同距，故1公分代表60000。",
      "derivedAnswer": "1:60000",
      "storedAnswer": "1:60000",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "圖上同一實距變為1.5倍，比例尺分母90000÷1.5=60000。",
        "把分母也乘1.5。",
        "忽略印刷放大。",
        "比例值不等於1/60000。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「印刷縮放後更新比例尺」，已明示必要條件：印刷均勻放大且實際地物不變。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：同單位比。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：長寬均勻放大，不扭曲。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：150%=1.5精確。。"
      },
      "difficultyReason": "抽象比例尺變換。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：原圖1公分代表90000公分；放大後1.5公分代表同距，故1公分代表60000。 正確選項為「1:60000」。逐項檢查後，唯一為真的理由是「圖上同一實距變為1.5倍，比例尺分母90000÷1.5=60000。」；其餘三項分別因「把分母也乘1.5。」、「忽略印刷放大。」、「比例值不等於1/60000。」而排除。邊界與語意再檢查：長寬均勻放大，不扭曲。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s008-v009-semantic-review-r1",
      "questionId": "u06-s008-v009",
      "unitId": "u06",
      "skillId": "scale-drawing",
      "contentSha256": "26e6eb344d5c631ef5ee4e702d01d9f21ad43fa80727c306c57ea3c26c45d857",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "若實距4公里，甲10公分、乙4公分，比2.5。",
      "derivedAnswer": "2.5倍",
      "storedAnswer": "2.5倍",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "0.4是反向比。",
        "用分母相減。",
        "圖上長與比例尺分母成反比，100000/40000=2.5。",
        "把100000/25000。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「比較兩種比例尺圖距」，已明示必要條件：同一實際道路。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：倍數無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：兩圖未縮放變形。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "跨比例尺比較。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：若實距4公里，甲10公分、乙4公分，比2.5。 正確選項為「2.5倍」。逐項檢查後，唯一為真的理由是「圖上長與比例尺分母成反比，100000/40000=2.5。」；其餘三項分別因「0.4是反向比。」、「用分母相減。」、「把100000/25000。」而排除。邊界與語意再檢查：兩圖未縮放變形。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s008-v010-semantic-review-r1",
      "questionId": "u06-s008-v010",
      "unitId": "u06",
      "skillId": "scale-drawing",
      "contentSha256": "cbb9199062ab9e01e950ef1d5e4e4f8aecea815a1b48899234eedff1a9a29125",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "100公尺換回10000公分，除2000得5公分。",
      "derivedAnswer": "100公尺",
      "storedAnswer": "100公尺",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "5×2000=10000公分=100公尺。",
        "少除一個10。",
        "把5×50。",
        "未正確換單位。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「在校園圖讀實際長度」，已明示必要條件：比例尺與標示線段對應。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公分轉公尺。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：題幹已提供圖上長度，不需要任何示意圖或目測。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "生活地圖應用。",
      "literacyNecessity": "校園比例尺決定圖上與實際的轉換。",
      "reviewerNote": "獨立重算：100公尺換回10000公分，除2000得5公分。 正確選項為「100公尺」。逐項檢查後，唯一為真的理由是「5×2000=10000公分=100公尺。」；其餘三項分別因「少除一個10。」、「把5×50。」、「未正確換單位。」而排除。邊界與語意再檢查：題幹已提供圖上長度，不需要任何示意圖或目測。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s008-v011-semantic-review-r1",
      "questionId": "u06-s008-v011",
      "unitId": "u06",
      "skillId": "scale-drawing",
      "contentSha256": "17e1d36fd83e88fe76b592c6bd0f0eecd433b5397bb29369fdef85d47b4f782e",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "90÷50=1.8。",
      "derivedAnswer": "90公分",
      "storedAnswer": "90公分",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "1.8×20。",
        "把比例尺後項直接作答案。",
        "多乘2。",
        "1.8×50=90。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「建築圖尺寸換算」，已明示必要條件：圖上與實際均用公分。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：圖上與實際門寬都以公分表示，本題不使用公里。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：題目明確要求公分，無須也不得把答案誤寫為公里。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確到題目給定位數。。"
      },
      "difficultyReason": "小數比例尺應用。",
      "literacyNecessity": "門寬情境提供合理尺寸檢查，90公分符合常見量級。",
      "reviewerNote": "獨立重算：90÷50=1.8。 正確選項為「90公分」。逐項檢查後，唯一為真的理由是「1.8×50=90。」；其餘三項分別因「1.8×20。」、「把比例尺後項直接作答案。」、「多乘2。」而排除。邊界與語意再檢查：題目明確要求公分，無須也不得把答案誤寫為公里。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s008-v012-semantic-review-r1",
      "questionId": "u06-s008-v012",
      "unitId": "u06",
      "skillId": "scale-drawing",
      "contentSha256": "624625d3b5adf4b1a82cdbcd29ef3dd4048a0f9668b2c18217748ff0f3ba858f",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "5.16/1.2=4.3，逆向驗證。",
      "derivedAnswer": "5.16公里",
      "storedAnswer": "5.16公里",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "4.3只算平面距離。",
        "平面距離8.6×50000=430000公分=4.3公里；行走距離4.3×1.2=5.16。",
        "把5.16過早取整。",
        "計算20%錯。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「比例尺與百分比複合」，已明示必要條件：起伏增量以平面距離為基準。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公分轉公里。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：20%視為給定估計。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：題目問約但選項保留到0.01公里，不再取整。。"
      },
      "difficultyReason": "同時處理地圖比例尺、單位轉換與路線比較，屬於比例尺複合素養。",
      "literacyNecessity": "地形起伏條件改變最後距離，不能只做比例尺。",
      "reviewerNote": "獨立重算：5.16/1.2=4.3，逆向驗證。 正確選項為「5.16公里」。逐項檢查後，唯一為真的理由是「平面距離8.6×50000=430000公分=4.3公里；行走距離4.3×1.2=5.16。」；其餘三項分別因「4.3只算平面距離。」、「把5.16過早取整。」、「計算20%錯。」而排除。邊界與語意再檢查：20%視為給定估計。",
      "reviewerDecision": "pass"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u06-fig-scale-map-01",
      "unitId": "u06",
      "topicId": "u06-applications",
      "skillId": "scale-drawing",
      "purpose": "把圖上距離、實際距離和數值比例尺集中在同一圖中，強化先統一單位再換算的程序。",
      "svgPath": "figures/u06/u06-fig-scale-map-01.svg",
      "canvas": {
        "width": 720,
        "height": 360,
        "viewBox": "0 0 720 360"
      },
      "drawingSpec": {
        "pointA": {
          "center": [
            130,
            145
          ],
          "radius": 10,
          "label": [
            130,
            105
          ]
        },
        "pointB": {
          "center": [
            590,
            145
          ],
          "radius": 10,
          "label": [
            590,
            105
          ]
        },
        "routeLine": "from (140,145) to (580,145), stroke 5",
        "endpointTicks": [
          "x=130, y=120..170",
          "x=590, y=120..170"
        ],
        "distanceLabel": {
          "text": "圖上距離 3.6 cm",
          "x": 360,
          "y": 125
        },
        "scaleBar": "from (250,220) to (470,220) with endpoint ticks",
        "scaleLabel": {
          "text": "比例尺 1：50,000",
          "x": 360,
          "y": 260
        },
        "visibleLines": "A、B 連線和比例尺示意橫線均為實線",
        "hiddenLines": "無",
        "scaleStatus": "not-to-scale map schematic"
      },
      "labelsAndPositions": [
        "A、B 位於端點上方",
        "3.6 cm 位於連線中央上方",
        "比例尺置於下方中央",
        "不按比例警語置於最下方"
      ],
      "ticksUnitsArrows": "端點刻線顯示量測界線；單位 cm 明列；無方向箭頭。",
      "toScale": false,
      "visualInferenceWarning": "A、B 的螢幕像素距離不是 3.6 cm；只能使用題面標示和比例尺計算。",
      "altText": "不按比例的地圖線段示意圖：A、B兩端點以黑線相連，標示圖上距離3.6公分與比例尺1:50000，下方提醒計算只能使用標示數值。",
      "svgTitle": "比例尺一比五萬的地圖線段示意圖",
      "svgDesc": "不按比例的地圖線段示意圖：A、B兩端點以黑線相連，標示圖上距離3.6公分與比例尺1:50000，下方提醒計算只能使用標示數值。",
      "mobileReadabilityReview": "以360 px寬顯示時，A、B、3.6公分與比例尺文字仍可分辨，底部警語可換行且不與線段或端點重疊。",
      "answerLeakageReview": "此圖只由講義引用，示範3.6公分與1:50000的讀法；數值不同的題庫題已移除共用figureId，因此不會由alt、desc或圖面直接得到選項答案。",
      "manualVisualInspection": {
        "status": "pass-after-render",
        "inspectionNote": "以 720×360 PNG 實際轉譯檢查；A、B 端點、3.6 cm、1：50,000 和不按比例警語均清楚，線段與文字無重疊。"
      },
      "svgAssertions": [
        "<title id=\"title\">比例尺一比五萬的地圖線段示意圖</title>",
        "圖上距離 3.6 cm",
        "比例尺 1：50,000",
        "示意圖不按實際方向或距離繪製"
      ],
      "figureReview": {
        "decision": "pass",
        "reviewNote": "逐項核對SVG與drawing spec的A、B端點、3.6公分、1:50000和不按比例警語；alt與desc一致，手機及黑白列印可讀，且題庫不再誤掛此講義示意圖。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "63df144f38f8fa18c8b2016f23a60488b5f4adb25ab8bab71d65929446fa2e33",
      "printReadabilityReview": "以A4黑白列印並縮至版心寬度時，5 px路線、3 px端點刻線與黑色端點保持清楚；資訊全以形狀和文字表達，不依賴顏色。"
    }
  ]
};
