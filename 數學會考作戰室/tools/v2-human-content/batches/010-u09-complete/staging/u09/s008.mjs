// Generated only by serializing reviewed source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u09-s008-lecture-r1",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-display",
    "skillId": "contingency-table",
    "lockedTitle": "列聯表",
    "title": "列聯表：同時看兩個分類與正確分母",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewStatus": "independently-reviewed",
    "prerequisiteBridge": {
      "skillIds": [
        "cumulative-frequency"
      ],
      "explanation": "需能判讀資料表、總計、次數與相對次數。"
    },
    "learningGoals": [
      "讀取兩分類的交叉格。",
      "計算列總、欄總與總計。",
      "由邊際總數補缺格。",
      "比較各群組內的條件比例。",
      "避免把關聯誤寫成因果。"
    ],
    "vocabulary": [
      {
        "term": "列聯表",
        "meaning": "同時整理兩個分類變項次數的表。"
      },
      {
        "term": "交叉格",
        "meaning": "同時符合某列條件與某欄條件的人數。"
      },
      {
        "term": "邊際總數",
        "meaning": "列總或欄總。"
      },
      {
        "term": "條件比例",
        "meaning": "在指定群組內，以該群組總數作分母的比例。"
      },
      {
        "term": "關聯",
        "meaning": "兩分類在樣本中的比例分布不同。"
      }
    ],
    "notation": [
      {
        "symbol": "列總",
        "meaning": "同一列各交叉格相加。"
      },
      {
        "symbol": "欄總",
        "meaning": "同一欄各交叉格相加。"
      },
      {
        "symbol": "組內率",
        "meaning": "目標交叉格÷所屬群組總數。"
      }
    ],
    "conceptDevelopment": [
      "列聯表的內格同時符合列分類與欄分類，例如女生且喜歡音樂；列總與欄總是各方向的邊際總數，從列總相加或欄總相加都必須得到同一總計。補未知格時先鎖定同一列或同一欄，以邊際總數減去其餘內格，完成後再用另一方向加總交叉驗算。",
      "比較群組表現時必須使用條件比例，每一組都以自己的列總或欄總作分母。群組人數不同時，事件人數較多不保證比例較高；合併比例則要先加事件人數與總人數再相除，不能直接平均兩個百分率，除非兩組分母相同。",
      "列聯表可呈現樣本中兩個分類變項的關聯，例如一組的睡眠充足比例較高；但若資料不是隨機實驗且未控制其他因素，只能描述觀察到的比例差，不能把較高比例改寫成某因素必然造成另一結果。"
    ],
    "definitions": [
      {
        "name": "交叉次數",
        "statement": "同時符合一個列分類與一個欄分類的資料筆數。"
      },
      {
        "name": "條件比例",
        "statement": "在指定列或欄的範圍內，目標格占該範圍總數的比例。"
      }
    ],
    "formulas": [
      {
        "formula": "列總＝該列各交叉格相加",
        "conditions": [
          "欄分類互斥且完整"
        ]
      },
      {
        "formula": "缺格＝對應列總或欄總－其他已知格",
        "conditions": [
          "只有一格未知"
        ]
      },
      {
        "formula": "組內比例＝目標格÷群組總數",
        "conditions": [
          "分母與比較群組一致"
        ]
      }
    ],
    "invalidUseCases": [
      "把列總讀成交叉格。",
      "用全體總數算各組內成功率。",
      "只看成功人數就比較風險。",
      "看到比例差就宣稱因果。"
    ],
    "stepByStepMethod": [
      {
        "step": 1,
        "action": "讀兩個分類變項與各類別。"
      },
      {
        "step": 2,
        "action": "定位交叉格。"
      },
      {
        "step": 3,
        "action": "利用列總、欄總與總計補值。"
      },
      {
        "step": 4,
        "action": "比較比例時先圈定分母群組。"
      },
      {
        "step": 5,
        "action": "把結論限制在樣本關聯。"
      }
    ],
    "workedExamples": [
      {
        "id": "L1",
        "prompt": "男生共 36 人，其中 22 人喜歡運動，求男生不喜歡運動人數。",
        "solution": [
          "男生列由喜歡與不喜歡運動兩格組成。",
          "36-22=14。"
        ],
        "answer": "14 人。",
        "why": "題目給的是男生列總與其中一格，用同列相減才會得到另一格；若拿全體總數或女生資料相減，就會混入不同分類而失去列聯表交集意義。"
      },
      {
        "id": "L2",
        "prompt": "A 組 20 人中 12 人答對，B 組 30 人中 15 人答對，哪組答對率高？",
        "solution": [
          "A 組為 12÷20=60%。",
          "B 組為 15÷30=50%。"
        ],
        "answer": "A 組答對率較高。",
        "why": "十五人雖多於十二人，但兩組分母也不同；分別除以各組總數後才能建立公平比例基準，百分之六十與百分之五十顯示人數比較會得出相反判斷。"
      },
      {
        "id": "L3",
        "prompt": "運動者睡眠充足率 75%，未運動者 60%，能否說運動造成睡眠充足？",
        "solution": [
          "樣本中兩組比例相差 15 個百分點。",
          "未說明隨機分派，也未控制作息等因素。"
        ],
        "answer": "可描述樣本關聯，不可由此證明因果。",
        "why": "比例差的算術結果成立，但列聯表沒有排除年齡、工作與健康狀況等共同因素；因果結論需要研究設計支持，不能只把觀察到的關聯換成造成。"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "女生總數 20 就填入女生音樂格。",
        "why": "列總含多個欄。",
        "fix": "扣除同列其他格。"
      },
      {
        "wrong": "B 成功 15 人比 A 12 人多，所以 B 成功率高。",
        "why": "分母 30 與 20 不同。",
        "fix": "分別除各組總數。"
      },
      {
        "wrong": "合併比例直接平均 70% 與 40%。",
        "why": "群組大小不同。",
        "fix": "加總次數與分母。"
      },
      {
        "wrong": "吸菸者咳嗽率較高，所以吸菸必然造成咳嗽。",
        "why": "觀察關聯非因果證明。",
        "fix": "使用保守語氣。"
      }
    ],
    "selfCheck": [
      "我讀的是交叉格還是邊際總數？",
      "每個比例的分母是哪一群？",
      "兩組樣本大小相同嗎？",
      "結論是否越過關聯到因果？"
    ],
    "summary": [
      "列聯表同時整理兩個分類。",
      "列總、欄總可補缺值。",
      "比較群組要用各自分母。",
      "比例差描述關聯，不自動證明因果。"
    ],
    "connections": {
      "previous": "資料表與相對次數提供表格及比例基礎。",
      "next": [
        "平均數將開始用單一數值摘要一組資料。",
        "統計素養會再次使用列聯表檢查樣本與因果語言。"
      ]
    },
    "figureReferences": [],
    "accessibilityNotes": "本講義可完全以文字理解；若有圖形，替代文字提供所有必要數值。",
    "practiceLinks": {
      "mcQuestionIds": [
        "u09-s008-v001",
        "u09-s008-v002",
        "u09-s008-v003",
        "u09-s008-v004",
        "u09-s008-v005",
        "u09-s008-v006",
        "u09-s008-v007",
        "u09-s008-v008",
        "u09-s008-v009",
        "u09-s008-v010",
        "u09-s008-v011",
        "u09-s008-v012"
      ],
      "constructedResponseIds": [
        "u09-s008-cr001",
        "u09-s008-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "將機械補表、分母選擇與因果界線連成完整技能。",
      "scopeCheck": "符合國中會考範圍；未引入四分位數與盒狀圖。",
      "prerequisiteAudit": "需能判讀資料表、總計、次數與相對次數。",
      "symbolAndUnitAudit": "所有符號在使用前定義；單位與取位規則在例題中明示。",
      "skillSpecificEvidence": "包含次數與比例相反、合併比例、健康風險與營運接受度。",
      "legacyContentUsed": false,
      "decision": "pass"
    },
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "contentSha256": "df85a68161466b71bf9526ddd34df243c2d0e3207c0fb2e95b79d7280d2ffe27"
  },
  "mcQuestions": [
    {
      "questionId": "u09-s008-v001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "contingency-table",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "列聯表中，男生喜歡籃球 12 人、喜歡音樂 8 人；女生喜歡籃球 9 人、喜歡音樂 11 人。『女生且喜歡音樂』有幾人？",
      "givenConditions": [
        "每人只屬一個性別列與一個偏好欄。"
      ],
      "target": "讀取列聯表交叉格",
      "choices": [
        "8 人",
        "9 人",
        "20 人",
        "11 人"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "定位女生列與音樂欄，讀得 11。",
        "derivedAnswer": "11 人",
        "trustStoredAnswer": false
      },
      "explanation": "列聯表的交叉格代表同時符合兩個分類。 交叉格必須同時符合女生與喜歡音樂兩個條件，沿女生列和音樂欄找到十一人；二十是女生列合計，不是指定交集。",
      "steps": [
        "找女生列。",
        "找音樂欄。",
        "讀交會值。"
      ],
      "optionAnalysis": [
        {
          "choice": "8 人",
          "truth": false,
          "reason": "8 是男生音樂。"
        },
        {
          "choice": "9 人",
          "truth": false,
          "reason": "9 是女生籃球。"
        },
        {
          "choice": "20 人",
          "truth": false,
          "reason": "20 是女生總數。"
        },
        {
          "choice": "11 人",
          "truth": true,
          "reason": "女生列與音樂欄交會格是 11。"
        }
      ],
      "misconceptionTarget": "只讀列總或相鄰格 只看女生總數或音樂欄其他格，沒有定位列欄交會處。",
      "prerequisiteCheck": {
        "skillIds": [
          "cumulative-frequency"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "11 人。",
      "ambiguityAndBoundaryAudit": "分類交叉唯一。",
      "difficultyReason": "單格讀值，屬基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c534f77dcb20ca893dd9a3109a4bf8a7e430b000971f265e2db5a5834bcf10f7"
    },
    {
      "questionId": "u09-s008-v002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "contingency-table",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "同一列聯表中，甲組通過 15 人、未通過 5 人。甲組總人數是多少？",
      "givenConditions": [
        "兩結果互斥且完整。"
      ],
      "target": "計算列總",
      "choices": [
        "10 人",
        "20 人",
        "15 人",
        "75 人"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "甲組列合計 15+5=20。",
        "derivedAnswer": "20 人",
        "trustStoredAnswer": false
      },
      "explanation": "列總等於該列各欄相加。 通過與未通過是甲組內互斥且完整的兩類，列合計為十五加五等於二十人；七十五是兩格相乘，沒有總人數意義。",
      "steps": [
        "加同列兩格。",
        "確認甲組只有通過與未通過兩類。",
        "相加十五與五得到甲組總數二十人。"
      ],
      "optionAnalysis": [
        {
          "choice": "10 人",
          "truth": false,
          "reason": "10 是相減。"
        },
        {
          "choice": "20 人",
          "truth": true,
          "reason": "15+5=20。"
        },
        {
          "choice": "15 人",
          "truth": false,
          "reason": "15 只算通過。"
        },
        {
          "choice": "75 人",
          "truth": false,
          "reason": "75 是相乘。"
        }
      ],
      "misconceptionTarget": "只抄其中一格 只抄通過人數十五，或把兩個分類人數相乘。",
      "prerequisiteCheck": {
        "skillIds": [
          "cumulative-frequency"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "20 人。",
      "ambiguityAndBoundaryAudit": "無重複計數。",
      "difficultyReason": "基本列合計。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0b358db9356a45cd3185ee018fe2318d2820345e3cfd5a5f8e9aa93ed103b516"
    },
    {
      "questionId": "u09-s008-v003",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "contingency-table",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "列聯表中戴眼鏡者 18 人，其中男生 7 人。戴眼鏡女生有幾人？",
      "givenConditions": [
        "性別兩類完整。"
      ],
      "target": "由邊際總數補交叉格",
      "choices": [
        "11 人",
        "7 人",
        "18 人",
        "25 人"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "戴眼鏡欄總 18，扣男生 7，得到女生 11。",
        "derivedAnswer": "11 人",
        "trustStoredAnswer": false
      },
      "explanation": "由欄總補單一交叉格用減法。 戴眼鏡欄總十八人由男生七人和女生人數組成，因此女生為十八減七等於十一；不能把欄總與男生再相加。",
      "steps": [
        "找欄總。",
        "扣已知另一列。",
        "用戴眼鏡欄總十八扣除男生七，得到女生十一人。"
      ],
      "optionAnalysis": [
        {
          "choice": "11 人",
          "truth": true,
          "reason": "18-7=11。"
        },
        {
          "choice": "7 人",
          "truth": false,
          "reason": "7 是男生。"
        },
        {
          "choice": "18 人",
          "truth": false,
          "reason": "18 是戴眼鏡總數。"
        },
        {
          "choice": "25 人",
          "truth": false,
          "reason": "25 是相加。"
        }
      ],
      "misconceptionTarget": "把欄總直接填入 把欄總十八當成女生人數，忽略其中已含七名男生。",
      "prerequisiteCheck": {
        "skillIds": [
          "cumulative-frequency"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "11 人。",
      "ambiguityAndBoundaryAudit": "只有一格未知。",
      "difficultyReason": "基礎缺值。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "59854a5ea2018cff97edb97482a294e62702b11dc1bd31086dc01869725884e9"
    },
    {
      "questionId": "u09-s008-v004",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "contingency-table",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "列聯表：甲班男 14、女 16；乙班男 18、女 12。全部男生共有多少人？",
      "givenConditions": [
        "班級互斥。"
      ],
      "target": "計算欄總",
      "choices": [
        "30 人",
        "28 人",
        "32 人",
        "60 人"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "男生欄合計 14+18=32。",
        "derivedAnswer": "32 人",
        "trustStoredAnswer": false
      },
      "explanation": "欄總要跨列加總同一類別。 全部男生是男生欄的甲班十四人與乙班十八人合計，共三十二人；女生十六與十二屬另一欄，不應納入。",
      "steps": [
        "辨識男生欄。",
        "相加兩班數值。",
        "沿男生欄相加十四與十八，得到三十二人。"
      ],
      "optionAnalysis": [
        {
          "choice": "30 人",
          "truth": false,
          "reason": "30 是甲班總數。"
        },
        {
          "choice": "28 人",
          "truth": false,
          "reason": "28 是女生總數。"
        },
        {
          "choice": "32 人",
          "truth": true,
          "reason": "14+18=32。"
        },
        {
          "choice": "60 人",
          "truth": false,
          "reason": "60 是全部學生。"
        }
      ],
      "misconceptionTarget": "把列總當欄總 沿班級列加男女得到班級總數，沒有沿男生欄加總。",
      "prerequisiteCheck": {
        "skillIds": [
          "cumulative-frequency"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "32 人。",
      "ambiguityAndBoundaryAudit": "同一學生只在一班。",
      "difficultyReason": "標準跨列合計。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "93ebdec8ce4f68b4e4aef5659105629ee62ff9383a079552de2fa11259aef512"
    },
    {
      "questionId": "u09-s008-v005",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "contingency-table",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "列聯表總共 80 人，男生總數 36，喜歡運動總數 50，男生且喜歡運動 22。女生且不喜歡運動有幾人？",
      "givenConditions": [
        "四格分類完整。"
      ],
      "target": "由多個邊際總數補列聯表缺格",
      "choices": [
        "16 人",
        "14 人",
        "28 人",
        "30 人"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "男不運動=36-22=14；不運動總數=80-50=30；女不運動=30-14=16。",
        "derivedAnswer": "16 人",
        "trustStoredAnswer": false
      },
      "explanation": "可由列總與欄總沿兩條路補值，結果應一致。 先由全體八十扣喜歡運動五十得不喜歡運動三十人，再扣男生不運動十四人，剩下女生不運動十六人；列欄總數彼此一致。",
      "steps": [
        "求不運動總數。",
        "求男不運動。",
        "相減得女不運動。"
      ],
      "optionAnalysis": [
        {
          "choice": "16 人",
          "truth": true,
          "reason": "女生總數 44；女生運動 50-22=28；女生不運動 44-28=16。"
        },
        {
          "choice": "14 人",
          "truth": false,
          "reason": "14 是男生不運動。"
        },
        {
          "choice": "28 人",
          "truth": false,
          "reason": "28 是女生運動。"
        },
        {
          "choice": "30 人",
          "truth": false,
          "reason": "30 是不運動總數。"
        }
      ],
      "misconceptionTarget": "只做一步相減 只做其中一次補集，或把男生運動二十二直接從三十扣除。",
      "prerequisiteCheck": {
        "skillIds": [
          "cumulative-frequency"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "16 人。",
      "ambiguityAndBoundaryAudit": "兩種補表路徑一致。",
      "difficultyReason": "多步缺值推理，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "534776628cb86282232c3f23bc2a3811cb5ae2e342dad27434184d8439cd3d8b"
    },
    {
      "questionId": "u09-s008-v006",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "contingency-table",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "A 組 20 人中 12 人答對，B 組 30 人中 15 人答對。哪組答對率較高？",
      "givenConditions": [
        "各組總數不同。"
      ],
      "target": "比較列條件比例",
      "choices": [
        "B 組",
        "兩組相同",
        "只看表無法判斷",
        "A 組"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "分別以各組總數作分母，A=0.6、B=0.5。",
        "derivedAnswer": "A 組",
        "trustStoredAnswer": false
      },
      "explanation": "比較組內比例時，分母要使用各組列總。 比較答對率要各用該組總人數當分母，甲組十二除二十為百分之六十，乙組十五除三十為百分之五十，所以甲組較高。",
      "steps": [
        "求 A 組內答對率。",
        "求 B 組內答對率。",
        "比較。"
      ],
      "optionAnalysis": [
        {
          "choice": "B 組",
          "truth": false,
          "reason": "B 答對人數多但比例低。"
        },
        {
          "choice": "兩組相同",
          "truth": false,
          "reason": "60% 不等於 50%。"
        },
        {
          "choice": "只看表無法判斷",
          "truth": false,
          "reason": "列總與答對格都已知。"
        },
        {
          "choice": "A 組",
          "truth": true,
          "reason": "A 12/20=60%，B 15/30=50%。"
        }
      ],
      "misconceptionTarget": "只看交叉格次數 只比較答對人數十五大於十二，忽略兩組人數不同。",
      "prerequisiteCheck": {
        "skillIds": [
          "cumulative-frequency"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "60% 與 50% 精確。",
      "ambiguityAndBoundaryAudit": "比較目標是組內答對率。",
      "difficultyReason": "需選對分母，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "b055a061be6c1b4de8757cbca09c5711e94c4597ffefb3048dd70223298a9bb7"
    },
    {
      "questionId": "u09-s008-v007",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "contingency-table",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "列聯表中，城市學生 40 人，鄉鎮學生 60 人；城市選公車 24 人，鄉鎮選公車 30 人。下列哪個敘述正確？",
      "givenConditions": [
        "地區群組大小不同。"
      ],
      "target": "用列聯表辨識次數與比例結論差異",
      "choices": [
        "鄉鎮學生選公車的比例較高",
        "城市學生選公車的比例較高",
        "兩地比例相同",
        "鄉鎮因 30 人較多所以比例較高"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "計算各列條件比例，60%>50%。",
        "derivedAnswer": "城市學生選公車的比例較高",
        "trustStoredAnswer": false
      },
      "explanation": "列聯表比較常需在每個群組內標準化。 城市組公車比例為二十四除四十等於百分之六十，鄉鎮為三十除六十等於百分之五十；人數三十較大不代表組內比例較大。",
      "steps": [
        "選各地學生總數作分母。",
        "計算兩個比例。",
        "比較。"
      ],
      "optionAnalysis": [
        {
          "choice": "鄉鎮學生選公車的比例較高",
          "truth": false,
          "reason": "鄉鎮比例較低。"
        },
        {
          "choice": "城市學生選公車的比例較高",
          "truth": true,
          "reason": "城市 24/40=60%，鄉鎮 30/60=50%。"
        },
        {
          "choice": "兩地比例相同",
          "truth": false,
          "reason": "60% 不等於 50%。"
        },
        {
          "choice": "鄉鎮因 30 人較多所以比例較高",
          "truth": false,
          "reason": "次數較多不保證比例較高。"
        }
      ],
      "misconceptionTarget": "以人數高低代替比例 以搭公車人數三十對二十四直接比較，沒有除以各組總數。",
      "prerequisiteCheck": {
        "skillIds": [
          "cumulative-frequency"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "比例精確。",
      "ambiguityAndBoundaryAudit": "只比較調查樣本內。",
      "difficultyReason": "反直覺比例比較，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "538cb85ba30c536815144f3676256d9dbbdecb75d7a32d748cd003e057af690a"
    },
    {
      "questionId": "u09-s008-v008",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "contingency-table",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "列聯表四格為 a=18、b=12、c=27、d=x，且第二列總數是 45。x 是多少？",
      "givenConditions": [
        "x 為非負整數。"
      ],
      "target": "以列總方程補缺格",
      "choices": [
        "15",
        "27",
        "57",
        "18"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "x=45-27=18。",
        "derivedAnswer": "18",
        "trustStoredAnswer": false
      },
      "explanation": "列總限制直接決定缺格。 第二列由二十七與未知格組成且列總四十五，因此未知格等於四十五減二十七為十八；第一列的十八與十二不參與這次列合計。",
      "steps": [
        "建立 27+x=45。",
        "相減求 x。",
        "列出二十七加未知數等於四十五，解得十八。"
      ],
      "optionAnalysis": [
        {
          "choice": "15",
          "truth": false,
          "reason": "15 是 45-30 的無關計算。"
        },
        {
          "choice": "27",
          "truth": false,
          "reason": "27 是同列已知格。"
        },
        {
          "choice": "57",
          "truth": false,
          "reason": "57 是相加。"
        },
        {
          "choice": "18",
          "truth": true,
          "reason": "27+x=45，所以 x=18。"
        }
      ],
      "misconceptionTarget": "抄已知格或加總錯誤 把第一列數值混入第二列，或把列總四十五再相加。",
      "prerequisiteCheck": {
        "skillIds": [
          "cumulative-frequency"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "18 人。",
      "ambiguityAndBoundaryAudit": "唯一缺值。",
      "difficultyReason": "代數化補表，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "506c8bb3cac396c7d04396c6d0c416840fc5bd9be00f1966c0263e534ab9fdb2"
    },
    {
      "questionId": "u09-s008-v009",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "contingency-table",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "某列聯表顯示有運動習慣者中 30 人睡眠充足、10 人不足；無運動習慣者中 24 人充足、16 人不足。哪個結論最保守且由表支持？",
      "givenConditions": [
        "兩組各 40 人。"
      ],
      "target": "由列聯表提出不過度的統計結論",
      "choices": [
        "運動一定造成睡眠充足",
        "所有人運動後都會改善",
        "在這份樣本中，有運動習慣者睡眠充足比例較高",
        "兩變項完全無關"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "比較組內比例 75% 與 60%；只能描述樣本中的關聯。",
        "derivedAnswer": "在這份樣本中，有運動習慣者睡眠充足比例較高",
        "trustStoredAnswer": false
      },
      "explanation": "列聯表能顯示關聯模式，但觀察資料不能直接證明因果。 有運動組睡眠充足率為三十除四十等於百分之七十五，無運動組為二十四除四十等於百分之六十；表格支持樣本關聯，不能單憑觀察資料宣稱因果。",
      "steps": [
        "算兩組充足比例。",
        "比較。",
        "限制結論為樣本關聯。"
      ],
      "optionAnalysis": [
        {
          "choice": "運動一定造成睡眠充足",
          "truth": false,
          "reason": "列聯表關聯不證明因果。"
        },
        {
          "choice": "所有人運動後都會改善",
          "truth": false,
          "reason": "不能由群體比例推論每個人。"
        },
        {
          "choice": "在這份樣本中，有運動習慣者睡眠充足比例較高",
          "truth": true,
          "reason": "有運動者 30/40=75%，無運動者 24/40=60%。"
        },
        {
          "choice": "兩變項完全無關",
          "truth": false,
          "reason": "兩組比例不同，不能說完全無關。"
        }
      ],
      "misconceptionTarget": "把關聯誤寫成因果 把較高比例直接解讀成運動必然造成睡眠充足。",
      "prerequisiteCheck": {
        "skillIds": [
          "cumulative-frequency"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "比例精確。",
      "ambiguityAndBoundaryAudit": "未控制其他因素，因此不作因果推論。",
      "difficultyReason": "需辨識推論界線，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "215a3fd8209c86e02302681ac22afeeaca5691ca4db23107391dffebfc8d1aad"
    },
    {
      "questionId": "u09-s008-v010",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "contingency-table",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "餐廳調查列聯表：午餐顧客 80 人，其中 52 人點套餐；晚餐顧客 120 人，其中 66 人點套餐。經理問哪個時段套餐接受度較高。答案為何？",
      "givenConditions": [
        "時段總人數不同。"
      ],
      "target": "用列聯表支援營運決策",
      "choices": [
        "午餐，65% 高於晚餐 55%",
        "晚餐，因 66 人較多",
        "兩時段相同",
        "午餐，因總人數較少"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "午餐套餐率 0.65；晚餐 0.55；午餐較高。",
        "derivedAnswer": "午餐，65% 高於晚餐 55%",
        "trustStoredAnswer": false
      },
      "explanation": "營運接受度應以各時段顧客為分母。 接受度是各時段點套餐者占該時段顧客的比例，午餐五十二除八十為百分之六十五，晚餐六十六除一百二十為百分之五十五，故午餐較高。",
      "steps": [
        "分別計算套餐率。",
        "比較兩率。",
        "用比例而非次數回覆。"
      ],
      "optionAnalysis": [
        {
          "choice": "午餐，65% 高於晚餐 55%",
          "truth": true,
          "reason": "52/80=65%，66/120=55%。"
        },
        {
          "choice": "晚餐，因 66 人較多",
          "truth": false,
          "reason": "66 是次數，不是接受度比例。"
        },
        {
          "choice": "兩時段相同",
          "truth": false,
          "reason": "65% 與 55% 不同。"
        },
        {
          "choice": "午餐，因總人數較少",
          "truth": false,
          "reason": "總人數少本身不是理由。"
        }
      ],
      "misconceptionTarget": "只看銷售數量 只看晚餐套餐六十六人較多，沒有校正兩時段總人數。",
      "prerequisiteCheck": {
        "skillIds": [
          "cumulative-frequency"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 120,
      "unitAndRoundingCheck": "65% 與 55%。",
      "ambiguityAndBoundaryAudit": "只評估接受度，不比較套餐總銷量。",
      "difficultyReason": "情境要求選擇恰當指標。",
      "literacyNecessityReason": "餐廳決策中的『接受度』是組內比例，時段人流差異不可忽略。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4c89bdab273acd65924ec98ce8e6fe0cc3cf6f0a9719957754983319b2f1503a"
    },
    {
      "questionId": "u09-s008-v011",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "contingency-table",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "健康調查中，吸菸者 50 人有 20 人咳嗽；不吸菸者 150 人有 30 人咳嗽。報告寫『不吸菸者咳嗽人數較多，所以咳嗽風險較高』。何者正確？",
      "givenConditions": [
        "人數與比例皆精確。"
      ],
      "target": "審核健康列聯表的風險敘述",
      "choices": [
        "報告合理，30 大於 20",
        "兩組風險都是 25%",
        "報告不合理；吸菸者咳嗽率 40%，不吸菸者 20%",
        "資料可直接證明吸菸造成咳嗽"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "分別算風險比例，吸菸組較高；但仍只能描述樣本關聯。",
        "derivedAnswer": "報告不合理；吸菸者咳嗽率 40%，不吸菸者 20%",
        "trustStoredAnswer": false
      },
      "explanation": "健康風險比較應以各暴露組人數為分母。 吸菸組咳嗽二十除五十為百分之四十，不吸菸組三十除一百五十為百分之二十；後者人數雖多，組內風險反而較低，且資料仍不能證明因果。",
      "steps": [
        "辨認兩組分母。",
        "計算咳嗽率。",
        "修正報告並限制因果語氣。"
      ],
      "optionAnalysis": [
        {
          "choice": "報告合理，30 大於 20",
          "truth": false,
          "reason": "只比人數忽略組大小。"
        },
        {
          "choice": "兩組風險都是 25%",
          "truth": false,
          "reason": "兩組分母不同，不能合併成同率。"
        },
        {
          "choice": "報告不合理；吸菸者咳嗽率 40%，不吸菸者 20%",
          "truth": true,
          "reason": "20/50=40%，30/150=20%。"
        },
        {
          "choice": "資料可直接證明吸菸造成咳嗽",
          "truth": false,
          "reason": "觀察關聯不等於因果證明。"
        }
      ],
      "misconceptionTarget": "以病例數取代組內風險 混淆事件人數與條件比例，並把樣本關聯誇大為因果。",
      "prerequisiteCheck": {
        "skillIds": [
          "cumulative-frequency"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 130,
      "unitAndRoundingCheck": "40% 與 20%。",
      "ambiguityAndBoundaryAudit": "不推論真實母群或因果。",
      "difficultyReason": "需同時糾正比例與因果語言。",
      "literacyNecessityReason": "健康風險判斷若使用錯誤分母會造成嚴重誤導，情境必要。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f6af15498ff29a07a30ea03b91de660a7a9504e5233f07468aa63388d58ff282"
    },
    {
      "questionId": "u09-s008-v012",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "contingency-table",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "學校問卷中，七年級 100 人有 70 人支持延後到校；八年級 50 人有 20 人支持。合併後支持率是多少？",
      "givenConditions": [
        "兩年級樣本大小不同。"
      ],
      "target": "由列聯表計算合併比例",
      "choices": [
        "(70%+40%)÷2=55%",
        "90/150=60%",
        "70%",
        "40%"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "七年級 70 人支持，八年級 20 人，共 90/150=60%。",
        "derivedAnswer": "90/150=60%",
        "trustStoredAnswer": false
      },
      "explanation": "合併列聯表比例需加總次數與分母，不是平均組別百分比。 七年級支持七十人、八年級支持二十人，共九十人；合併分母是一百五十人，所以支持率為百分之六十，不能把兩個比例不加權平均。",
      "steps": [
        "加總支持人數。",
        "加總樣本數。",
        "相除。"
      ],
      "optionAnalysis": [
        {
          "choice": "(70%+40%)÷2=55%",
          "truth": false,
          "reason": "兩年級樣本大小不同，不能直接平均百分比。"
        },
        {
          "choice": "90/150=60%",
          "truth": true,
          "reason": "總支持 90、總人數 150，比例 60%。"
        },
        {
          "choice": "70%",
          "truth": false,
          "reason": "70% 只屬七年級。"
        },
        {
          "choice": "40%",
          "truth": false,
          "reason": "40% 只屬八年級。"
        }
      ],
      "misconceptionTarget": "直接平均不同大小群組的百分比 忽略兩年級樣本數不同，直接平均百分之七十與四十。",
      "prerequisiteCheck": {
        "skillIds": [
          "cumulative-frequency"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 120,
      "unitAndRoundingCheck": "60% 精確。",
      "ambiguityAndBoundaryAudit": "合併範圍只含兩年級。",
      "difficultyReason": "需加權合併，屬素養。",
      "literacyNecessityReason": "校務政策需要全體支持率，群組大小差異使直接平均百分比失真。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f9b1264f4f27a79bc1ae13bd63e017a341ad3eebd7d8069ff65901bf5469687f"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u09-s008-cr001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "contingency-table",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "某班學生參加社團與是否搭校車的列聯表資料如下：搭校車者中參加社團18人、不參加12人；不搭校車者中參加社團14人、不參加16人。請完成列總、欄總與總計，並比較兩群中參加社團的比例。",
      "givenConditions": [],
      "target": "計算列聯表邊際總數與條件比例。",
      "requiredWork": [
        "兩列、兩欄與總計均須完成。",
        "各群比例分母分別為該群總數。",
        "以百分比或分數比較。"
      ],
      "standardSolution": [
        "搭校車總數=18+12=30；不搭校車總數=14+16=30。",
        "參加社團欄總=18+14=32；不參加欄總=12+16=28；總計60。",
        "搭校車者參加比例=18/30=60%；不搭校車者=14/30=46又2/3%。",
        "樣本中搭校車者參加社團比例較高，差13又1/3個百分點。"
      ],
      "alternativeMethod": "可將兩群比例約分為3/5與7/15，再比較9/15>7/15。",
      "reasoningSteps": [
        "先做每列加總。",
        "再做每欄加總並核對總計一致。",
        "各自圈定群組分母30。",
        "計算並比較條件比例。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "所有邊際總數與60總計正確，兩群比例及比較結論完整。"
        },
        {
          "score": 2,
          "criteria": "總數全對但一個比例算錯，或比例與比較正確但漏一個欄總。"
        },
        {
          "score": 1,
          "criteria": "至少正確完成一列一欄總數，或知道分母應為各群30。"
        },
        {
          "score": 0,
          "criteria": "用全體60作兩群比例分母且表格總數大多錯誤。"
        }
      ],
      "partialCreditRules": [
        "若只比較18>14而未除分母，本題兩群恰同為30，可得正確方向但理由不足，最高1分。",
        "百分點差非必要，但若寫須正確。"
      ],
      "followThroughPolicy": "邊際總數一處加法錯，可依錯誤分母的後續一致比例保留方法分。",
      "unitAndNotationRules": "人數以人；條件比例用分數或百分比。",
      "answerOnlyPolicy": "只列比例與結論、未完成邊際總數，最高2分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "列總30、30；欄總32、28；總60；18/30=60%，14/30=46.67%。",
        "boundaryAndAmbiguityAudit": "兩分類互斥完整，群組大小相同但仍要求正確分母。",
        "rubricAlignmentEvidence": "邊際總數、條件分母與比較結論均有獨立要求。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "8e60d89ea471a1e61d91ca9a0bc70725007b74ad40be30741ba03d4840d41604",
      "commonErrors": [
        "列總與欄總交叉加總時重複計數，導致兩種方式算出的總計不一致。",
        "比較社團比例時用全班六十人作兩組共同分母，沒有各用該列三十人。"
      ]
    },
    {
      "questionId": "u09-s008-cr002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "contingency-table",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "某健康調查列聯表顯示：每週運動者120人，其中睡眠充足90人；不運動者80人，其中睡眠充足48人。請計算兩組睡眠充足率與全體睡眠充足率，並評估「運動使睡眠充足率提高15個百分點」這句話。",
      "givenConditions": [],
      "target": "計算條件比例與合併比例，並區分關聯與因果。",
      "requiredWork": [
        "運動組分母120，不運動組分母80。",
        "全體比例以總睡眠充足人數除以200。",
        "說明15個百分點是樣本差異，不能單由觀察表證明因果。"
      ],
      "standardSolution": [
        "運動組=90/120=75%。",
        "不運動組=48/80=60%。",
        "全體睡眠充足=(90+48)/(120+80)=138/200=69%。",
        "兩組相差15個百分點的計算正確，但列聯表只顯示樣本中的關聯；年齡、作息、健康狀況等混淆因素未控制，不能說運動『使』比率提高。"
      ],
      "alternativeMethod": "可把結論改寫為「此樣本中，每週運動者的睡眠充足率比不運動者高15個百分點」。",
      "reasoningSteps": [
        "計算兩組內比例。",
        "加總交叉格與分母求全體比例。",
        "確認百分點差75%-60%=15。",
        "審查研究設計與因果語言。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "75%、60%、69%與『差15個百分點但不能證明因果』及至少一個合理混淆因素全部正確。"
        },
        {
          "score": 2,
          "criteria": "三比例與差值正確，但因果限制說明不足；或概念完整但一個比例算錯。"
        },
        {
          "score": 1,
          "criteria": "至少正確算出兩組比例，或明確指出相關不等於因果。"
        },
        {
          "score": 0,
          "criteria": "分母錯誤且直接接受因果敘述。"
        }
      ],
      "partialCreditRules": [
        "全體比例不可直接平均75%與60%，因兩組人數不同；若如此計得67.5%，該項不給分。",
        "只寫『可能有其他因素』但未舉例，可得部分概念分。"
      ],
      "followThroughPolicy": "單一比例算術錯誤不影響因果審查得分；若差值跟隨錯誤比例計算一致可保留方法分。",
      "unitAndNotationRules": "百分率與百分點用語分明；人數分母需明示。",
      "answerOnlyPolicy": "只寫三比例與不合理，無理由，最高2分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "90/120=.75, 48/80=.60, 138/200=.69；差.15，但觀察性列聯表無因果識別。",
        "boundaryAndAmbiguityAudit": "題目稱調查而非隨機實驗，因果限制明確。",
        "rubricAlignmentEvidence": "計算、合併與推論限制三面向共同構成滿分。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "2819f008d258a241752af11a9816c62f7d4fe4dbcf504a6bc3381415b7e643e1",
      "commonErrors": [
        "把百分之七十五與百分之六十直接平均成百分之六十七點五，忽略兩組人數不同。",
        "看到相差十五個百分點便寫成運動造成改善，沒有區分觀察關聯與因果結論。"
      ]
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u09-s008-v001-semantic-r1",
      "questionId": "u09-s008-v001",
      "unitId": "u09",
      "skillId": "contingency-table",
      "independentRecalculation": "定位女生列與音樂欄，讀得 11。",
      "correctChoiceCheck": "獨立計算得到「11 人」，位於索引 3。",
      "distractorAudit": [
        "8 是男生音樂。",
        "9 是女生籃球。",
        "20 是女生總數。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「11 人」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「列聯表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "分類交叉唯一。",
      "difficultyEvidence": "單格讀值，屬基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "0bc11a5a8fdcd2c18be64b7551b6604e4fc67485ec773cc22a7cd78f9fc71f62"
    },
    {
      "reviewId": "u09-s008-v002-semantic-r1",
      "questionId": "u09-s008-v002",
      "unitId": "u09",
      "skillId": "contingency-table",
      "independentRecalculation": "甲組列合計 15+5=20。",
      "correctChoiceCheck": "獨立計算得到「20 人」，位於索引 1。",
      "distractorAudit": [
        "10 是相減。",
        "15 只算通過。",
        "75 是相乘。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「20 人」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「列聯表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "無重複計數。",
      "difficultyEvidence": "基本列合計。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "ba28865eda34ddd6c293a048bcc3c82abca62b2bd8a7d6bd2f4de78415c3d297"
    },
    {
      "reviewId": "u09-s008-v003-semantic-r1",
      "questionId": "u09-s008-v003",
      "unitId": "u09",
      "skillId": "contingency-table",
      "independentRecalculation": "戴眼鏡欄總 18，扣男生 7，得到女生 11。",
      "correctChoiceCheck": "獨立計算得到「11 人」，位於索引 0。",
      "distractorAudit": [
        "7 是男生。",
        "18 是戴眼鏡總數。",
        "25 是相加。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「11 人」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「列聯表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "只有一格未知。",
      "difficultyEvidence": "基礎缺值。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "4f418d1d90c4909d075cf598b806d82530a884196f70d78e37d56dc1a7c5d4e1"
    },
    {
      "reviewId": "u09-s008-v004-semantic-r1",
      "questionId": "u09-s008-v004",
      "unitId": "u09",
      "skillId": "contingency-table",
      "independentRecalculation": "男生欄合計 14+18=32。",
      "correctChoiceCheck": "獨立計算得到「32 人」，位於索引 2。",
      "distractorAudit": [
        "30 是甲班總數。",
        "28 是女生總數。",
        "60 是全部學生。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「32 人」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「列聯表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "同一學生只在一班。",
      "difficultyEvidence": "標準跨列合計。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "9f3f994fcffc0b1b568a4ed882a661728026a449b3a15e0c8be722ad08a32cde"
    },
    {
      "reviewId": "u09-s008-v005-semantic-r1",
      "questionId": "u09-s008-v005",
      "unitId": "u09",
      "skillId": "contingency-table",
      "independentRecalculation": "男不運動=36-22=14；不運動總數=80-50=30；女不運動=30-14=16。",
      "correctChoiceCheck": "獨立計算得到「16 人」，位於索引 0。",
      "distractorAudit": [
        "14 是男生不運動。",
        "28 是女生運動。",
        "30 是不運動總數。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「16 人」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「列聯表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "兩種補表路徑一致。",
      "difficultyEvidence": "多步缺值推理，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "d189053054f12dca8fd15b24014c273044cfa8395d9a0af5b00ed4f977ca395b"
    },
    {
      "reviewId": "u09-s008-v006-semantic-r1",
      "questionId": "u09-s008-v006",
      "unitId": "u09",
      "skillId": "contingency-table",
      "independentRecalculation": "分別以各組總數作分母，A=0.6、B=0.5。",
      "correctChoiceCheck": "獨立計算得到「A 組」，位於索引 3。",
      "distractorAudit": [
        "B 答對人數多但比例低。",
        "60% 不等於 50%。",
        "列總與答對格都已知。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「A 組」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「列聯表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "比較目標是組內答對率。",
      "difficultyEvidence": "需選對分母，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "2f7b464d3f79f4078497261a497c774431ea2790b8fac83d786412c073747f97"
    },
    {
      "reviewId": "u09-s008-v007-semantic-r1",
      "questionId": "u09-s008-v007",
      "unitId": "u09",
      "skillId": "contingency-table",
      "independentRecalculation": "計算各列條件比例，60%>50%。",
      "correctChoiceCheck": "獨立計算得到「城市學生選公車的比例較高」，位於索引 1。",
      "distractorAudit": [
        "鄉鎮比例較低。",
        "60% 不等於 50%。",
        "次數較多不保證比例較高。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「城市學生選公車的比例較高」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「列聯表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "只比較調查樣本內。",
      "difficultyEvidence": "反直覺比例比較，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "46307e927680a3c1b0b4a67911ae7f02145dfd06cfdcf38f41f33206a37010e4"
    },
    {
      "reviewId": "u09-s008-v008-semantic-r1",
      "questionId": "u09-s008-v008",
      "unitId": "u09",
      "skillId": "contingency-table",
      "independentRecalculation": "x=45-27=18。",
      "correctChoiceCheck": "獨立計算得到「18」，位於索引 3。",
      "distractorAudit": [
        "15 是 45-30 的無關計算。",
        "27 是同列已知格。",
        "57 是相加。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「18」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「列聯表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "唯一缺值。",
      "difficultyEvidence": "代數化補表，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "c2956b1de14268b965ec077c35d66eeec480a7d10f34c38c53d0dc331a34f1bc"
    },
    {
      "reviewId": "u09-s008-v009-semantic-r1",
      "questionId": "u09-s008-v009",
      "unitId": "u09",
      "skillId": "contingency-table",
      "independentRecalculation": "比較組內比例 75% 與 60%；只能描述樣本中的關聯。",
      "correctChoiceCheck": "獨立計算得到「在這份樣本中，有運動習慣者睡眠充足比例較高」，位於索引 2。",
      "distractorAudit": [
        "列聯表關聯不證明因果。",
        "不能由群體比例推論每個人。",
        "兩組比例不同，不能說完全無關。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「在這份樣本中，有運動習慣者睡眠充足比例較高」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「列聯表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "未控制其他因素，因此不作因果推論。",
      "difficultyEvidence": "需辨識推論界線，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "07e6ff347fda10e80ce2a3e967b8e6bb1e62d7512bc59f91003c136ad0b7bed2"
    },
    {
      "reviewId": "u09-s008-v010-semantic-r1",
      "questionId": "u09-s008-v010",
      "unitId": "u09",
      "skillId": "contingency-table",
      "independentRecalculation": "午餐套餐率 0.65；晚餐 0.55；午餐較高。",
      "correctChoiceCheck": "獨立計算得到「午餐，65% 高於晚餐 55%」，位於索引 0。",
      "distractorAudit": [
        "66 是次數，不是接受度比例。",
        "65% 與 55% 不同。",
        "總人數少本身不是理由。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「午餐，65% 高於晚餐 55%」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「列聯表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "只評估接受度，不比較套餐總銷量。",
      "difficultyEvidence": "情境要求選擇恰當指標。",
      "literacyEvidence": "餐廳決策中的『接受度』是組內比例，時段人流差異不可忽略。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "c243b8e6fc889512e352344818c1a8896411d9b1dd8396036eadfb59337dc404"
    },
    {
      "reviewId": "u09-s008-v011-semantic-r1",
      "questionId": "u09-s008-v011",
      "unitId": "u09",
      "skillId": "contingency-table",
      "independentRecalculation": "分別算風險比例，吸菸組較高；但仍只能描述樣本關聯。",
      "correctChoiceCheck": "獨立計算得到「報告不合理；吸菸者咳嗽率 40%，不吸菸者 20%」，位於索引 2。",
      "distractorAudit": [
        "只比人數忽略組大小。",
        "兩組分母不同，不能合併成同率。",
        "觀察關聯不等於因果證明。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「報告不合理；吸菸者咳嗽率 40%，不吸菸者 20%」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「列聯表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不推論真實母群或因果。",
      "difficultyEvidence": "需同時糾正比例與因果語言。",
      "literacyEvidence": "健康風險判斷若使用錯誤分母會造成嚴重誤導，情境必要。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "5e18e24a0c35d0262500d8cf96e75ce1ebc523eaab4d9da165eb0a5840b84959"
    },
    {
      "reviewId": "u09-s008-v012-semantic-r1",
      "questionId": "u09-s008-v012",
      "unitId": "u09",
      "skillId": "contingency-table",
      "independentRecalculation": "七年級 70 人支持，八年級 20 人，共 90/150=60%。",
      "correctChoiceCheck": "獨立計算得到「90/150=60%」，位於索引 1。",
      "distractorAudit": [
        "兩年級樣本大小不同，不能直接平均百分比。",
        "70% 只屬七年級。",
        "40% 只屬八年級。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「90/150=60%」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「列聯表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "合併範圍只含兩年級。",
      "difficultyEvidence": "需加權合併，屬素養。",
      "literacyEvidence": "校務政策需要全體支持率，群組大小差異使直接平均百分比失真。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "5c4cb01cb2c1b7d175dc573445bc87fa66af9e3a1ce13ecb0a8153e649450507"
    }
  ],
  "drawingSpecs": []
};
