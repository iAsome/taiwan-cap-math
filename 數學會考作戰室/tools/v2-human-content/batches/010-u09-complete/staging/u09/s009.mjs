// Generated only by serializing reviewed source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u09-s009-lecture-r1",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-summary",
    "skillId": "mean-basic",
    "lockedTitle": "平均數",
    "title": "平均數：先合計再平均分配",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewStatus": "independently-reviewed",
    "prerequisiteBridge": {
      "skillIds": [
        "contingency-table"
      ],
      "explanation": "需能從資料表取出完整資料，並能做整數、小數與分數的四則運算。"
    },
    "learningGoals": [
      "理解平均數是總和平均分給每一筆的結果。",
      "正確計算一組資料的平均數。",
      "由平均數與筆數回推總和或缺值。",
      "判斷極端值對平均數的影響。",
      "在有單位與取位要求時正確表達答案。"
    ],
    "vocabulary": [
      {
        "term": "平均數",
        "meaning": "所有資料總和除以資料筆數所得的代表值。"
      },
      {
        "term": "資料總和",
        "meaning": "把每一筆資料依原符號相加的結果。"
      },
      {
        "term": "資料筆數",
        "meaning": "資料值的個數，不是不同數值的種類數。"
      },
      {
        "term": "極端值",
        "meaning": "明顯大於或小於大多數資料的值，可能拉動平均數。"
      },
      {
        "term": "平均分配",
        "meaning": "在總量不變下，把總量平均分到每一筆。"
      }
    ],
    "notation": [
      {
        "symbol": "x̄",
        "meaning": "一組資料的平均數；讀作 x bar，本單元可直接寫「平均數」。"
      },
      {
        "symbol": "n",
        "meaning": "資料筆數。"
      },
      {
        "symbol": "Σx",
        "meaning": "資料總和；Σ 表示把所有資料相加。"
      }
    ],
    "conceptDevelopment": [
      "平均數表示把總量平均分配到每一筆後的數值，基本關係是平均數等於總和除以筆數，反向則是總和等於平均數乘筆數。求缺值、加入資料、刪除資料或訂正誤值時，先把平均還原成總和，完成總量變動後再除以新的筆數；直接對平均做加減通常會忽略資料筆數。",
      "合併兩組資料須以各組人數加權：各組平均乘各組人數還原總量，加總後除以總人數。只有兩組人數相等時，合併平均才恰好等於兩個平均的算術平均；人數不同時直接平均兩個平均會給每組相同權重而失真。",
      "每筆資料同加一個常數，平均也同加該常數；加入高於原平均的資料會拉高平均，加入低於原平均的資料會拉低平均。平均數會受極端值影響，因此解讀薪資、房價等偏斜資料時，還要檢查多數資料分布，不能說每筆都接近平均。"
    ],
    "definitions": [
      {
        "name": "算術平均數",
        "statement": "對 n 筆數值資料，將所有資料相加後除以 n。"
      },
      {
        "name": "平均數的平衡意義",
        "statement": "每筆資料與平均數的差相加為 0；高於平均的總量可平衡低於平均的總量。"
      }
    ],
    "formulas": [
      {
        "formula": "平均數＝資料總和÷資料筆數",
        "conditions": [
          "資料均屬同一量與相同單位",
          "筆數不為 0"
        ]
      },
      {
        "formula": "資料總和＝平均數×資料筆數",
        "conditions": [
          "平均數與筆數屬於同一組資料"
        ]
      },
      {
        "formula": "未知值＝所需總和－已知資料總和",
        "conditions": [
          "先由平均數乘筆數求所需總和"
        ]
      }
    ],
    "invalidUseCases": [
      "把最大值與最小值相加再除以 2，除非題目問的是兩數平均。",
      "資料重複出現時只算一次。",
      "平均數有小數就自行四捨五入，忽略題目要求。",
      "以平均數代表每個人實際值，或推論所有資料都接近平均。",
      "不同單位未換算就相加。"
    ],
    "stepByStepMethod": [
      {
        "step": 1,
        "action": "確認資料屬於同一群體、同一單位，並數出筆數。"
      },
      {
        "step": 2,
        "action": "逐筆相加求總和，保留負號與小數。"
      },
      {
        "step": 3,
        "action": "用總和除以筆數。"
      },
      {
        "step": 4,
        "action": "依題意處理單位與取位。"
      },
      {
        "step": 5,
        "action": "用平均數×筆數回算總和，檢查是否一致。"
      }
    ],
    "workedExamples": [
      {
        "id": "L1",
        "prompt": "5 次小考分數為 72、81、85、76、86。",
        "solution": [
          "總和為 400。",
          "筆數為 5。",
          "400÷5=80。"
        ],
        "answer": "平均 80 分。",
        "why": "平均計算先合計全部分數，再依五次平均分配；八十介於最低七十二與最高八十六之間，且八十乘五回到四百，可作逆向驗算。"
      },
      {
        "id": "L2",
        "prompt": "4 天用水量平均 18 公升，前三天為 16、20、17 公升。",
        "solution": [
          "四天總量為 18×4=72 公升。",
          "前三天總量為 53 公升。",
          "第四天為 72-53=19 公升。"
        ],
        "answer": "19 公升。",
        "why": "已知平均不能直接與前三天相減，必須先乘四還原所需總量；再扣已知五十三得到十九，代回四天合計七十二才與平均十八一致。"
      },
      {
        "id": "L3",
        "prompt": "資料為 8、9、9、10、44。",
        "solution": [
          "總和為 80，平均為 16。",
          "四十四遠高於其餘四筆，使平均向上移動。"
        ],
        "answer": "平均 16，但不代表典型值接近 16。",
        "why": "平均十六的算術計算沒有錯，但五筆中沒有任何一筆接近十六；檢視原資料可看出四十四是極端高值，所以平均不宜單獨描述多數資料。"
      },
      {
        "id": "L4",
        "prompt": "3 筆長度分別為 1.2 公尺、0.85 公尺與 95 公分，求平均長度。",
        "solution": [
          "先將 1.2 公尺、0.85 公尺分別換成 120 公分、85 公分。",
          "統一單位後相加：120+85+95=300 公分，再用 300÷3=100 公分。"
        ],
        "answer": "平均長度為 100 公分，也就是 1 公尺。",
        "why": "長度相加前必須先使用相同單位，否則數字大小沒有共同量尺；三筆都換成公分後求總和再除以三，答案最後也要清楚標示長度單位。"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "把 4、4、7、9 的筆數算成 3。",
        "why": "只數不同數值。",
        "fix": "重複的 4 是兩筆，筆數為 4。"
      },
      {
        "wrong": "平均數=(最大值+最小值)÷2。",
        "why": "忽略中間資料。",
        "fix": "所有資料都要納入總和。"
      },
      {
        "wrong": "平均 75 分、6 人，總分寫 75÷6。",
        "why": "逆向關係用錯。",
        "fix": "總分=75×6。"
      },
      {
        "wrong": "平均收入高就說每個人都收入高。",
        "why": "平均數不揭露分布。",
        "fix": "檢查中位數、全距與極端值。"
      }
    ],
    "selfCheck": [
      "我是否數對資料筆數？",
      "每一筆資料都相加了嗎？",
      "單位是否一致？",
      "是否依題目要求取位？",
      "極端值是否使平均數失去代表性？"
    ],
    "summary": [
      "平均數＝總和÷筆數。",
      "總和＝平均數×筆數。",
      "平均數可不在原資料中。",
      "極端值會拉動平均數。"
    ],
    "connections": {
      "previous": "列聯表訓練完整讀取資料與總數，現在把數值資料濃縮成代表值。",
      "next": [
        "中位數將用排序後的位置代表資料中心。",
        "由次數表求平均會把重複資料改寫成乘法。"
      ]
    },
    "figureReferences": [],
    "accessibilityNotes": "本講義可完全以文字理解；若有圖形，替代文字提供所有必要數值。",
    "practiceLinks": {
      "mcQuestionIds": [
        "u09-s009-v001",
        "u09-s009-v002",
        "u09-s009-v003",
        "u09-s009-v004",
        "u09-s009-v005",
        "u09-s009-v006",
        "u09-s009-v007",
        "u09-s009-v008",
        "u09-s009-v009",
        "u09-s009-v010",
        "u09-s009-v011",
        "u09-s009-v012"
      ],
      "constructedResponseIds": [
        "u09-s009-cr001",
        "u09-s009-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "從平均分配意義出發，涵蓋直接計算、逆推總和、缺值與極端值判讀。",
      "scopeCheck": "符合國中會考範圍；未引入四分位數與盒狀圖。",
      "prerequisiteAudit": "需能從資料表取出完整資料，並能做整數、小數與分數的四則運算。",
      "symbolAndUnitAudit": "所有符號在使用前定義；單位與取位規則在例題中明示。",
      "skillSpecificEvidence": "例題分別檢驗直接平均、平均反推、極端值與單位一致性。",
      "legacyContentUsed": false,
      "decision": "pass"
    },
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "contentSha256": "4071ce85c2f214644fe35bdc6f3abd463d6b64f677340fcc98c646d635d6b4db"
  },
  "mcQuestions": [
    {
      "questionId": "u09-s009-v001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "資料 6、8、10 的平均數是多少？",
      "givenConditions": [
        "三筆資料同一單位。"
      ],
      "target": "計算基本平均數",
      "choices": [
        "8",
        "6",
        "10",
        "24"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "總和 24，資料個數 3，平均 24÷3=8。",
        "derivedAnswer": "8",
        "trustStoredAnswer": false
      },
      "explanation": "平均數是總和除以個數。 平均數是把資料總和平均分配到每一筆，六加八加十為二十四，再除以三筆得到八；二十四是總和而非平均。",
      "steps": [
        "加總資料。",
        "除以資料個數。",
        "計算二十四除以三得八，並確認八位於最小六與最大十之間。"
      ],
      "optionAnalysis": [
        {
          "choice": "8",
          "truth": true,
          "reason": "(6+8+10)÷3=8。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "6 是最小值。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "10 是最大值。"
        },
        {
          "choice": "24",
          "truth": false,
          "reason": "24 是總和。"
        }
      ],
      "misconceptionTarget": "只答總和或極值 求出總和二十四後忘記除以資料筆數三。",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "結果 8 精確。",
      "ambiguityAndBoundaryAudit": "資料個數為 3。",
      "difficultyReason": "直接套定義，屬基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7bfaa2d8bf9ab5e7dc2710158eea29811418baffda41be3d03fa033b1704ff23"
    },
    {
      "questionId": "u09-s009-v002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "5 筆資料的平均數是 12，總和是多少？",
      "givenConditions": [
        "5 筆資料。"
      ],
      "target": "由平均反推總和",
      "choices": [
        "17",
        "60",
        "12",
        "2.4"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "總和＝平均×個數＝12×5=60。",
        "derivedAnswer": "60",
        "trustStoredAnswer": false
      },
      "explanation": "平均公式可反推總和。 平均十二表示五筆資料平均分配後每筆十二，因此反推總和要用平均乘筆數，十二乘五等於六十；十二本身不是總和。",
      "steps": [
        "辨認平均與個數。",
        "相乘。",
        "使用總和等於平均乘筆數，算十二乘五為六十。"
      ],
      "optionAnalysis": [
        {
          "choice": "17",
          "truth": false,
          "reason": "17 是 12+5。"
        },
        {
          "choice": "60",
          "truth": true,
          "reason": "12×5=60。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "12 是平均本身。"
        },
        {
          "choice": "2.4",
          "truth": false,
          "reason": "2.4 是 12÷5。"
        }
      ],
      "misconceptionTarget": "把平均加上個數 把已知平均十二直接當總和，或錯用十二除以五。",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "60。",
      "ambiguityAndBoundaryAudit": "個數明確。",
      "difficultyReason": "基礎反向運算。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e6e26a8eb6ebac88f45a8df85ef2df95c1eb2cab147d7f88795c59a2df47ff98"
    },
    {
      "questionId": "u09-s009-v003",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "每筆資料都增加 3，平均數會如何變化？",
      "givenConditions": [
        "每筆都增加相同 3。"
      ],
      "target": "理解平均數平移性質",
      "choices": [
        "不變",
        "乘以 3",
        "增加 3",
        "增加資料個數"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "設原平均為 m、共 n 筆；新總和為 nm+3n=n(m+3)，新平均 m+3。",
        "derivedAnswer": "增加 3",
        "trustStoredAnswer": false
      },
      "explanation": "所有資料加同一常數，平均加同一常數。 每筆都加三會使總和增加三乘資料筆數，除回相同筆數後恰好增加三；資料間差距不變，也不是把原平均乘三。",
      "steps": [
        "用小例子或代數檢查。",
        "設原總和為筆數乘原平均。",
        "加入的總量除回原筆數，得到新平均為原平均加三。"
      ],
      "optionAnalysis": [
        {
          "choice": "不變",
          "truth": false,
          "reason": "全部資料平移會使平均同步平移。"
        },
        {
          "choice": "乘以 3",
          "truth": false,
          "reason": "只有每筆乘 3 時平均才乘 3。"
        },
        {
          "choice": "增加 3",
          "truth": true,
          "reason": "總和增加 3n，除以 n 後平均增加 3。"
        },
        {
          "choice": "增加資料個數",
          "truth": false,
          "reason": "變化與資料個數本身不同。"
        }
      ],
      "misconceptionTarget": "認為平均不受所有資料同幅變化影響 只看到常數三就把平均數乘三，沒有考慮每筆同加。",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "無單位特定。",
      "ambiguityAndBoundaryAudit": "若只有部分資料增加則不能直接套用。",
      "difficultyReason": "概念性基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f38b255921b73a76d6137289a57ab4b088469bf47a8f8c8bccbd35cc4ae1b04a"
    },
    {
      "questionId": "u09-s009-v004",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "四個數 7、9、11、x 的平均是 10，x 是多少？",
      "givenConditions": [
        "四筆同尺度。"
      ],
      "target": "由平均求單一缺值",
      "choices": [
        "10",
        "12",
        "17",
        "13"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "10×4=40；7+9+11=27；x=40-27=13。",
        "derivedAnswer": "13",
        "trustStoredAnswer": false
      },
      "explanation": "先由平均求總和，再扣已知資料。 四筆平均十表示所需總和四十，三個已知數合計二十七，缺值為四十減二十七等於十三；代回後四數平均確為十。",
      "steps": [
        "求目標總和。",
        "加總已知數。",
        "相減。"
      ],
      "optionAnalysis": [
        {
          "choice": "10",
          "truth": false,
          "reason": "平均不一定等於缺值。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "12 會使平均 9.75。"
        },
        {
          "choice": "17",
          "truth": false,
          "reason": "17 會使平均 11。"
        },
        {
          "choice": "13",
          "truth": true,
          "reason": "總和應為 40，已知和 27，x=13。"
        }
      ],
      "misconceptionTarget": "把平均直接填入 直接以平均十當缺值，未先反推四筆資料總和。",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "13 精確。",
      "ambiguityAndBoundaryAudit": "唯一缺值。",
      "difficultyReason": "兩步逆推，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2302609bb00a3cbb053a127670cb06902112c7923c3e23b7d00b62049d83e785"
    },
    {
      "questionId": "u09-s009-v005",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "甲組 4 人平均 15，乙組 4 人平均 19。兩組合併平均是多少？",
      "givenConditions": [
        "兩組各 4 人。"
      ],
      "target": "合併等人數群組平均",
      "choices": [
        "17",
        "34",
        "16",
        "19"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "總分 4×15+4×19=136，總人數 8，平均 17。",
        "derivedAnswer": "17",
        "trustStoredAnswer": false
      },
      "explanation": "只有在人數相同時，兩組平均可直接再平均。 兩組人數同為四人，可先分別還原總分六十與七十六，再用總和一百三十六除八得十七；此處也等於兩平均的算術平均。",
      "steps": [
        "求兩組總和。",
        "除以總人數。",
        "合計兩組總分一百三十六，再除八人得到十七。"
      ],
      "optionAnalysis": [
        {
          "choice": "17",
          "truth": true,
          "reason": "兩組人數相同，可平均 15 與 19 得 17。"
        },
        {
          "choice": "34",
          "truth": false,
          "reason": "34 是相加未除 2。"
        },
        {
          "choice": "16",
          "truth": false,
          "reason": "16 計算錯誤。"
        },
        {
          "choice": "19",
          "truth": false,
          "reason": "19 只取乙組。"
        }
      ],
      "misconceptionTarget": "忽略群組人數 把兩組平均直接相加成三十四，沒有除以總人數。",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "17。",
      "ambiguityAndBoundaryAudit": "人數相同條件已明示。",
      "difficultyReason": "標準群組整合。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0432f31ffa250abf98a02c0609ed47d9e1de6de81c395ff3d7cf99e6c1a196fe"
    },
    {
      "questionId": "u09-s009-v006",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "原有 5 筆資料平均 20，加入一筆 26 後，新平均是多少？",
      "givenConditions": [
        "新個數為 6。"
      ],
      "target": "更新加入資料後的平均",
      "choices": [
        "20",
        "21",
        "23",
        "46"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "5×20=100；(100+26)÷6=21。",
        "derivedAnswer": "21",
        "trustStoredAnswer": false
      },
      "explanation": "加入資料後需更新總和與個數。 原五筆總和為一百，加入二十六後總和一百二十六且筆數變六，故新平均二十一；不能只把二十與二十六取平均。",
      "steps": [
        "還原原總和。",
        "加入新值。",
        "除以新個數。"
      ],
      "optionAnalysis": [
        {
          "choice": "20",
          "truth": false,
          "reason": "加入較大值後平均不會仍為 20。"
        },
        {
          "choice": "21",
          "truth": true,
          "reason": "原總和 100，加 26 得 126，除 6 得 21。"
        },
        {
          "choice": "23",
          "truth": false,
          "reason": "直接平均 20 與 26 忽略原有 5 筆權重。"
        },
        {
          "choice": "46",
          "truth": false,
          "reason": "46 是相加。"
        }
      ],
      "misconceptionTarget": "直接平均舊平均與新值 忽略原平均代表五筆資料，誤把二十和二十六平均。",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "21 精確。",
      "ambiguityAndBoundaryAudit": "26 是一筆而非一組平均。",
      "difficultyReason": "需要權重觀念，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "321b741889cd90c00b3b9429ce1bf846d8918b51cac5bfaa521989428f853313"
    },
    {
      "questionId": "u09-s009-v007",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "六筆資料平均 14，其中一筆 9 誤登為 19。更正後平均是多少？",
      "givenConditions": [
        "六筆資料不變。"
      ],
      "target": "處理資料更正對平均的影響",
      "choices": [
        "13",
        "14",
        "12⅓",
        "15⅔"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "錯誤總和 6×14=84；改 19 為 9，總和減 10 成 74；74÷6=37/3。",
        "derivedAnswer": "12⅓",
        "trustStoredAnswer": false
      },
      "explanation": "資料更正影響平均＝總和變化÷個數。 誤登十九比正確九多十，因此錯誤總和八十四要減十成七十四；六筆資料筆數不變，七十四除六為十二又三分之一。",
      "steps": [
        "還原錯誤總和。",
        "調整錯誤差值。",
        "重新除以 6。"
      ],
      "optionAnalysis": [
        {
          "choice": "13",
          "truth": false,
          "reason": "13 是四捨五入錯誤。"
        },
        {
          "choice": "14",
          "truth": false,
          "reason": "未更正仍為 14。"
        },
        {
          "choice": "12⅓",
          "truth": true,
          "reason": "原錯誤總和 84，更正減少 10，正確總和 74，平均 74/6=12⅓。"
        },
        {
          "choice": "15⅔",
          "truth": false,
          "reason": "方向反了，像是增加 10。"
        }
      ],
      "misconceptionTarget": "把 9 與 19 的差方向弄反 只把平均十四減十，沒有把總和差平均分到六筆。",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "答案可寫 37/3 或 12⅓。",
      "ambiguityAndBoundaryAudit": "題目未要求小數取位。",
      "difficultyReason": "需多步校正，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "b56c5e43bc35ee48216c53b401da3e78b4fe6c90cc65d526375e6b1f2dc722ee"
    },
    {
      "questionId": "u09-s009-v008",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "甲組 10 人平均 72，乙組 20 人平均 81。合併平均是多少？",
      "givenConditions": [
        "總人數 30。"
      ],
      "target": "計算不同群組大小的合併平均",
      "choices": [
        "76.5",
        "81",
        "153",
        "78"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "10×72+20×81=2340；2340÷30=78。",
        "derivedAnswer": "78",
        "trustStoredAnswer": false
      },
      "explanation": "不同人數群組必須依人數加權。 合併平均必須以人數加權，甲組總分七百二十、乙組一千六百二十，合計二千三百四十除三十人得七十八。",
      "steps": [
        "求各組總分。",
        "加總。",
        "除以 30。"
      ],
      "optionAnalysis": [
        {
          "choice": "76.5",
          "truth": false,
          "reason": "直接平均 72 與 81 得 76.5，忽略人數。"
        },
        {
          "choice": "81",
          "truth": false,
          "reason": "只取較大組平均。"
        },
        {
          "choice": "153",
          "truth": false,
          "reason": "兩平均相加。"
        },
        {
          "choice": "78",
          "truth": true,
          "reason": "總分 720+1620=2340，除 30 得 78。"
        }
      ],
      "misconceptionTarget": "直接平均群組平均 直接平均七十二與八十一，忽略乙組人數是甲組兩倍。",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "78。",
      "ambiguityAndBoundaryAudit": "群組互斥。",
      "difficultyReason": "加權合併，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "80d22a874ad8636d8340056490819f2f9006b0cd5aa0fe9b4068f43e17c064e3"
    },
    {
      "questionId": "u09-s009-v009",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "資料平均為 50。若刪除一筆 50，剩餘資料平均如何？",
      "givenConditions": [
        "原資料至少兩筆。"
      ],
      "target": "判斷刪除資料對平均的影響",
      "choices": [
        "仍為 50",
        "一定變大",
        "一定變小",
        "無法判斷"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "原有 n 筆總和 50n；刪除 50 後為 50(n-1)，除以 n-1 仍 50。",
        "derivedAnswer": "仍為 50",
        "trustStoredAnswer": false
      },
      "explanation": "刪除恰等於平均的資料，平均不變。 刪除的數值恰等於原平均，總和與筆數各減去一份五十，剩餘總和仍可表示為五十乘剩餘筆數，所以平均不變。",
      "steps": [
        "用總和表示驗證。",
        "將新總和寫成五十乘原筆數減五十。",
        "提出公因數後除以少一筆的筆數，仍得五十。"
      ],
      "optionAnalysis": [
        {
          "choice": "仍為 50",
          "truth": true,
          "reason": "刪除值等於原平均，總和與個數同比例減少，平均不變。"
        },
        {
          "choice": "一定變大",
          "truth": false,
          "reason": "刪除平均值不會使平均變大。"
        },
        {
          "choice": "一定變小",
          "truth": false,
          "reason": "也不會變小。"
        },
        {
          "choice": "無法判斷",
          "truth": false,
          "reason": "由等於平均即可確定。"
        }
      ],
      "misconceptionTarget": "認為刪除任何資料都無法判斷 認為刪除任何資料都必然使平均變大或變小。",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "50。",
      "ambiguityAndBoundaryAudit": "刪除值明確等於平均。",
      "difficultyReason": "代數性質判斷，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f09d2d196cf615b005ca77ca58e9887702e4aa231d2f8dc84b2be0e04d826de7"
    },
    {
      "questionId": "u09-s009-v010",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "某班三次小考平均為 76、82、79 分，但每次參加人數分別 30、28、32。若要算所有應試成績的總平均，哪個方法正確？",
      "givenConditions": [
        "每次成績單位分。"
      ],
      "target": "選擇多次測驗總平均公式",
      "choices": [
        "(76+82+79)÷3",
        "(76×30+82×28+79×32)÷90",
        "(76×30+82×28+79×32)÷3",
        "(30+28+32)÷(76+82+79)"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "總平均＝各次總分合計÷總應試人次，公式如正解。",
        "derivedAnswer": "(76×30+82×28+79×32)÷90",
        "trustStoredAnswer": false
      },
      "explanation": "參加人數不同使加權不可省略。 每次平均須先乘該次應試人數還原總分，三次總分相加後再除總應試人次九十；直接平均三個平均數會把人數不同的三次視為同權重。",
      "steps": [
        "求各次總分。",
        "加總總人次。",
        "相除。"
      ],
      "optionAnalysis": [
        {
          "choice": "(76+82+79)÷3",
          "truth": false,
          "reason": "直接平均忽略人數差異。"
        },
        {
          "choice": "(76×30+82×28+79×32)÷90",
          "truth": true,
          "reason": "各次平均需乘參加人數還原總分，再除總人次 90。"
        },
        {
          "choice": "(76×30+82×28+79×32)÷3",
          "truth": false,
          "reason": "分母應是總人次，不是場次 3。"
        },
        {
          "choice": "(30+28+32)÷(76+82+79)",
          "truth": false,
          "reason": "分子分母意義顛倒。"
        }
      ],
      "misconceptionTarget": "直接平均不同人數的平均 把三次平均直接相加除三，忽略每次應試人數不同。",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 130,
      "unitAndRoundingCheck": "題目只問方法，不要求算小數。",
      "ambiguityAndBoundaryAudit": "同一學生可能重複參加，但目標是所有應試成績，分母用人次合理。",
      "difficultyReason": "需解讀統計對象與權重。",
      "literacyNecessityReason": "不同測驗參加人數直接決定各平均的權重，情境不可刪除。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "59ab16d2688dce988e9bbf8cb4b3fcac31dd216c8a639fe7138db98ffa39be51"
    },
    {
      "questionId": "u09-s009-v011",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "某公司公布員工平均月薪 55,000 元，但 10 人中 1 位主管薪資 190,000 元，其餘 9 人皆 40,000 元。下列解讀何者適當？",
      "givenConditions": [
        "金額單位元。"
      ],
      "target": "解讀平均數受極端值影響",
      "choices": [
        "平均計算錯誤",
        "至少 5 人領超過 55,000",
        "平均 55,000 正確，但不代表多數員工領 55,000",
        "每人薪資都接近 55,000"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "總薪資 550,000，除 10 得 55,000；但 9 人為 40,000。",
        "derivedAnswer": "平均 55,000 正確，但不代表多數員工領 55,000",
        "trustStoredAnswer": false
      },
      "explanation": "平均能描述總量分攤，不保證典型個體接近平均。 主管十九萬元與九名各四萬元合計五十五萬元，平均確為五萬五千元；但九成員工薪資低於平均，顯示極端高值會拉高平均。",
      "steps": [
        "驗算平均。",
        "查看個別分布。",
        "限制平均的代表性解讀。"
      ],
      "optionAnalysis": [
        {
          "choice": "平均計算錯誤",
          "truth": false,
          "reason": "計算正確。"
        },
        {
          "choice": "至少 5 人領超過 55,000",
          "truth": false,
          "reason": "只有主管超過 55000。"
        },
        {
          "choice": "平均 55,000 正確，但不代表多數員工領 55,000",
          "truth": true,
          "reason": "總薪資 190000+9×40000=550000，平均 55000；多數其實 40000。"
        },
        {
          "choice": "每人薪資都接近 55,000",
          "truth": false,
          "reason": "極端高值使平均偏高。"
        }
      ],
      "misconceptionTarget": "把平均當成多數人的薪資 把平均數解讀成多數人的實際薪資或每人都接近平均。",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 130,
      "unitAndRoundingCheck": "平均精確。",
      "ambiguityAndBoundaryAudit": "只評論這 10 人，不外推公司其他群體。",
      "difficultyReason": "需區分計算正確與解讀合理。",
      "literacyNecessityReason": "薪資平均常被用於公共溝通，極端值使情境成為統計素養核心。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "de3b1bc6debf8de5ffd97dccce16866f0d22e6678fc827b910475d6a666b22b7"
    },
    {
      "questionId": "u09-s009-v012",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "某球員前 4 場平均得 18 分。第 5 場後平均升為 20 分。第 5 場得幾分？",
      "givenConditions": [
        "每場得分同一單位。"
      ],
      "target": "由前後平均反推新增資料",
      "choices": [
        "20 分",
        "22 分",
        "38 分",
        "28 分"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "4×18=72；5×20=100；100-72=28。",
        "derivedAnswer": "28 分",
        "trustStoredAnswer": false
      },
      "explanation": "新平均提升 2 分不表示新增那場只高 2 分。 前四場總得分七十二，第五場後五場總分需達一百，兩總分相減得第五場二十八分；新平均二十分不是第五場單場分數。",
      "steps": [
        "還原前總分。",
        "求五場總分。",
        "相減。"
      ],
      "optionAnalysis": [
        {
          "choice": "20 分",
          "truth": false,
          "reason": "20 是新平均。"
        },
        {
          "choice": "22 分",
          "truth": false,
          "reason": "22 是平均增加 2 的錯誤加法。"
        },
        {
          "choice": "38 分",
          "truth": false,
          "reason": "38 是錯誤相加。"
        },
        {
          "choice": "28 分",
          "truth": true,
          "reason": "前四場總分 72，五場總分 100，第五場 28。"
        }
      ],
      "misconceptionTarget": "把平均增幅直接加到新值 把五場平均二十分直接當成第五場得分，未比較總分。",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 120,
      "unitAndRoundingCheck": "28 分。",
      "ambiguityAndBoundaryAudit": "第 5 場唯一。",
      "difficultyReason": "多階段平均逆推，屬素養。",
      "literacyNecessityReason": "運動紀錄以累積平均呈現，必須還原總分才能推得單場表現。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "6efa34d7762c4fc1da84416ee8a4924306d531d3f2fa94788c8485df048d6266"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u09-s009-cr001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "一名學生5次數學小考分數為72、84、76、88、x，已知平均數為80。求x，並說明若第5次分數誤記為90，則用誤記資料算出的平均數會比正確平均高多少。",
      "givenConditions": [],
      "target": "由平均數反推缺值，再分析單筆誤植對平均的影響。",
      "requiredWork": [
        "先由80×5求正確總分。",
        "扣除四筆已知分數求x。",
        "誤植後平均差以錯值與正值的差除以5。"
      ],
      "standardSolution": [
        "正確總分=80×5=400。",
        "已知四次總分=72+84+76+88=320，所以x=400-320=80。",
        "若誤記為90，總分多10分，平均數多10÷5=2分；誤記平均為82分。",
        "代回正確第五次八十分後，五次總分為四百分；把八十誤記為九十只使總和增加十分，因此平均增加量要再除以五，而不是直接增加十分。"
      ],
      "alternativeMethod": "可直接列方程式(72+84+76+88+x)/5=80，解得x=80；誤植平均再計算一次。",
      "reasoningSteps": [
        "把平均轉成總和。",
        "求已知資料和。",
        "以所需總和減已知和。",
        "比較錯值與正值對總和的差，再平均到5筆。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "x=80、誤記平均82及高2分，且總和反推過程完整。"
        },
        {
          "score": 2,
          "criteria": "x正確但誤植影響有一處小錯，或方法完整但四數加總小錯並一致跟隨。"
        },
        {
          "score": 1,
          "criteria": "能寫出總分400，或正確建立含x的平均方程。"
        },
        {
          "score": 0,
          "criteria": "把80當x而無理由，且未理解平均與總和關係。"
        }
      ],
      "partialCreditRules": [
        "只答高10分是總分差，不是平均差，誤植部分不完整。",
        "方程式正確但算錯可給方法分。"
      ],
      "followThroughPolicy": "若四次總和算錯，x與誤植平均依該錯誤一致計算，最高2分；誤植差10÷5仍可獨立得分。",
      "unitAndNotationRules": "分數與平均均以「分」；x為單次分數。",
      "answerOnlyPolicy": "只寫80與2，無任何推導，最高2分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "5筆總和400，已知和320，缺80；誤加10使平均增加2。",
        "boundaryAndAmbiguityAudit": "分數範圍未造成衝突；x=80合理且唯一。",
        "rubricAlignmentEvidence": "逆推缺值與誤植敏感度各有清楚配分。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "708376578328dde0a1c924fdc7d1224f1cc5e09ceb15a5d1fd409bd171f7ecb2",
      "commonErrors": [
        "把平均八十直接當成第五次分數而未先驗證四次已知總分與所需總分。",
        "將誤記值多出的十分直接加到平均，忘記這十分會平均分攤到五筆資料。"
      ]
    },
    {
      "questionId": "u09-s009-cr002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "甲組6人的平均體重為52公斤，乙組4人的平均體重為58公斤。兩組合併後又加入一位體重x公斤的新成員，使11人的平均體重變為54公斤。求x，並判斷x相對於原10人平均是高或低，以及為何新平均會往該方向移動。",
      "givenConditions": [],
      "target": "由分組平均還原總量，再分析新增資料對平均的方向影響。",
      "requiredWork": [
        "甲乙總量須依各組人數加權。",
        "由新平均×11求新總量。",
        "比較x與原10人平均。"
      ],
      "standardSolution": [
        "甲組總重=52×6=312公斤；乙組=58×4=232公斤；原10人總重544公斤，原平均54.4公斤。",
        "新11人總重=54×11=594公斤，所以x=594-544=50公斤。",
        "50低於原平均54.4，因此加入後平均由54.4下降到54。"
      ],
      "alternativeMethod": "可用平均變化式：原總重544，加x後為594，直接得x=50；方向再比較50與54.4。",
      "reasoningSteps": [
        "把各組平均乘人數還原總重。",
        "相加求原總重與原平均。",
        "由目標新平均求新總重。",
        "新舊總重相減求x。",
        "用x與原平均比較解釋方向。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "x=50、原平均54.4及低於原平均所以新平均下降的解釋全部正確。"
        },
        {
          "score": 2,
          "criteria": "x正確且方向正確，但漏算或未明示原平均54.4；或一處乘法小錯而後續一致。"
        },
        {
          "score": 1,
          "criteria": "能正確算出任一組總重，或正確寫出52×6+58×4+x=54×11。"
        },
        {
          "score": 0,
          "criteria": "直接平均52與58，且未按人數還原總量。"
        }
      ],
      "partialCreditRules": [
        "若原平均誤寫55但仍知道50低於原平均，概念部分可給分。",
        "只算x而未回答方向與理由，最高2分。"
      ],
      "followThroughPolicy": "早期總重算術錯誤可依方程式結構與一致後續給至2分，但x若不合理應檢查。",
      "unitAndNotationRules": "體重與平均均為公斤；人數無單位或寫人。",
      "answerOnlyPolicy": "只寫50公斤，最高2分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "312+232=544，594-544=50；544/10=54.4，50較低，故平均下降。",
        "boundaryAndAmbiguityAudit": "所有權重與總人數6+4+1=11一致，解唯一。",
        "rubricAlignmentEvidence": "評分涵蓋分組加權、缺值與平均移動方向。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "e92091ce65b454a82451a2e260af059d1c55f979b2ca1c58436a23a7f4417bba",
      "commonErrors": [
        "直接平均五十二與五十八而未依六人、四人加權，求錯原十人平均與總重。",
        "用五十四減五十四點四猜新成員體重，沒有由新舊總重相減求五十公斤。"
      ]
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u09-s009-v001-semantic-r1",
      "questionId": "u09-s009-v001",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "總和 24，資料個數 3，平均 24÷3=8。",
      "correctChoiceCheck": "獨立計算得到「8」，位於索引 0。",
      "distractorAudit": [
        "6 是最小值。",
        "10 是最大值。",
        "24 是總和。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「8」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "資料個數為 3。",
      "difficultyEvidence": "直接套定義，屬基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "75acfaaa5ef4c8526aa985cc4bcb7516740241f2d2826cfa3e027cb833b68880"
    },
    {
      "reviewId": "u09-s009-v002-semantic-r1",
      "questionId": "u09-s009-v002",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "總和＝平均×個數＝12×5=60。",
      "correctChoiceCheck": "獨立計算得到「60」，位於索引 1。",
      "distractorAudit": [
        "17 是 12+5。",
        "12 是平均本身。",
        "2.4 是 12÷5。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「60」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "個數明確。",
      "difficultyEvidence": "基礎反向運算。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "dd87ea10f0e7664a47b0d85eb195fb0c294813374c1d44d3422e480a9fd67c5e"
    },
    {
      "reviewId": "u09-s009-v003-semantic-r1",
      "questionId": "u09-s009-v003",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "設原平均為 m、共 n 筆；新總和為 nm+3n=n(m+3)，新平均 m+3。",
      "correctChoiceCheck": "獨立計算得到「增加 3」，位於索引 2。",
      "distractorAudit": [
        "全部資料平移會使平均同步平移。",
        "只有每筆乘 3 時平均才乘 3。",
        "變化與資料個數本身不同。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「增加 3」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "若只有部分資料增加則不能直接套用。",
      "difficultyEvidence": "概念性基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "6947d525d034e8e0147061fe4a24bbad337f19f7f40a0faea645d3db86884f6d"
    },
    {
      "reviewId": "u09-s009-v004-semantic-r1",
      "questionId": "u09-s009-v004",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "10×4=40；7+9+11=27；x=40-27=13。",
      "correctChoiceCheck": "獨立計算得到「13」，位於索引 3。",
      "distractorAudit": [
        "平均不一定等於缺值。",
        "12 會使平均 9.75。",
        "17 會使平均 11。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「13」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "唯一缺值。",
      "difficultyEvidence": "兩步逆推，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "94184ec52bcf138ad7b27a6b5926746b81874a65de3937bafe351432ba083455"
    },
    {
      "reviewId": "u09-s009-v005-semantic-r1",
      "questionId": "u09-s009-v005",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "總分 4×15+4×19=136，總人數 8，平均 17。",
      "correctChoiceCheck": "獨立計算得到「17」，位於索引 0。",
      "distractorAudit": [
        "34 是相加未除 2。",
        "16 計算錯誤。",
        "19 只取乙組。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「17」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "人數相同條件已明示。",
      "difficultyEvidence": "標準群組整合。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "bdc2cf211f9fd7d81e3d16c91bc3ac119c54805bd3e1318045c5d830d10170e2"
    },
    {
      "reviewId": "u09-s009-v006-semantic-r1",
      "questionId": "u09-s009-v006",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "5×20=100；(100+26)÷6=21。",
      "correctChoiceCheck": "獨立計算得到「21」，位於索引 1。",
      "distractorAudit": [
        "加入較大值後平均不會仍為 20。",
        "直接平均 20 與 26 忽略原有 5 筆權重。",
        "46 是相加。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「21」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "26 是一筆而非一組平均。",
      "difficultyEvidence": "需要權重觀念，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "673a4c041da154c1fa6c22c48c8f005d7c94213bf74de99f13d4c7820dddfe52"
    },
    {
      "reviewId": "u09-s009-v007-semantic-r1",
      "questionId": "u09-s009-v007",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "錯誤總和 6×14=84；改 19 為 9，總和減 10 成 74；74÷6=37/3。",
      "correctChoiceCheck": "獨立計算得到「12⅓」，位於索引 2。",
      "distractorAudit": [
        "13 是四捨五入錯誤。",
        "未更正仍為 14。",
        "方向反了，像是增加 10。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「12⅓」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "題目未要求小數取位。",
      "difficultyEvidence": "需多步校正，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "0294cb31830afa04b7769dcf822acd9de4e0a9772e566283c983f277216827f3"
    },
    {
      "reviewId": "u09-s009-v008-semantic-r1",
      "questionId": "u09-s009-v008",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "10×72+20×81=2340；2340÷30=78。",
      "correctChoiceCheck": "獨立計算得到「78」，位於索引 3。",
      "distractorAudit": [
        "直接平均 72 與 81 得 76.5，忽略人數。",
        "只取較大組平均。",
        "兩平均相加。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「78」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "群組互斥。",
      "difficultyEvidence": "加權合併，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "e4562c4d898fefc433360107d1029c5375e0807e315345653a7d3f8c326c7ed1"
    },
    {
      "reviewId": "u09-s009-v009-semantic-r1",
      "questionId": "u09-s009-v009",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "原有 n 筆總和 50n；刪除 50 後為 50(n-1)，除以 n-1 仍 50。",
      "correctChoiceCheck": "獨立計算得到「仍為 50」，位於索引 0。",
      "distractorAudit": [
        "刪除平均值不會使平均變大。",
        "也不會變小。",
        "由等於平均即可確定。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「仍為 50」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "刪除值明確等於平均。",
      "difficultyEvidence": "代數性質判斷，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "cf3a1bf581dc7cbcb7a89cc0e3717c9ca1b4b704e51920e4c10bade08b3a4c9b"
    },
    {
      "reviewId": "u09-s009-v010-semantic-r1",
      "questionId": "u09-s009-v010",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "總平均＝各次總分合計÷總應試人次，公式如正解。",
      "correctChoiceCheck": "獨立計算得到「(76×30+82×28+79×32)÷90」，位於索引 1。",
      "distractorAudit": [
        "直接平均忽略人數差異。",
        "分母應是總人次，不是場次 3。",
        "分子分母意義顛倒。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「(76×30+82×28+79×32)÷90」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "同一學生可能重複參加，但目標是所有應試成績，分母用人次合理。",
      "difficultyEvidence": "需解讀統計對象與權重。",
      "literacyEvidence": "不同測驗參加人數直接決定各平均的權重，情境不可刪除。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "c5ba5612c73e4b1803aa756e604e946fb03801d569fc04de981ebc6ed778cedd"
    },
    {
      "reviewId": "u09-s009-v011-semantic-r1",
      "questionId": "u09-s009-v011",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "總薪資 550,000，除 10 得 55,000；但 9 人為 40,000。",
      "correctChoiceCheck": "獨立計算得到「平均 55,000 正確，但不代表多數員工領 55,000」，位於索引 2。",
      "distractorAudit": [
        "計算正確。",
        "只有主管超過 55000。",
        "極端高值使平均偏高。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「平均 55,000 正確，但不代表多數員工領 55,000」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "只評論這 10 人，不外推公司其他群體。",
      "difficultyEvidence": "需區分計算正確與解讀合理。",
      "literacyEvidence": "薪資平均常被用於公共溝通，極端值使情境成為統計素養核心。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "348e51288984701a80027a61b0191247785dad64bd2110b5b16020a81d7921ad"
    },
    {
      "reviewId": "u09-s009-v012-semantic-r1",
      "questionId": "u09-s009-v012",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "4×18=72；5×20=100；100-72=28。",
      "correctChoiceCheck": "獨立計算得到「28 分」，位於索引 3。",
      "distractorAudit": [
        "20 是新平均。",
        "22 是平均增加 2 的錯誤加法。",
        "38 是錯誤相加。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「28 分」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "第 5 場唯一。",
      "difficultyEvidence": "多階段平均逆推，屬素養。",
      "literacyEvidence": "運動紀錄以累積平均呈現，必須還原總分才能推得單場表現。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "8d2a5233b536774ded9b2ad3739b9c0e2890675484cee8a578e3eabd7e158407"
    }
  ],
  "drawingSpecs": []
};
