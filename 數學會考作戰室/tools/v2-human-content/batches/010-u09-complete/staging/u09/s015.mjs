// Generated only by serializing reviewed source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u09-s015-lecture-r1",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-comparison",
    "skillId": "misleading-statistics-basic",
    "lockedTitle": "統計敘述的合理性",
    "title": "統計敘述的合理性：數字正確不等於結論合理",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewStatus": "independently-reviewed",
    "prerequisiteBridge": {
      "skillIds": [
        "data-comparison-context"
      ],
      "explanation": "需能判讀各種圖表、百分比與代表值，並比較兩組資料。"
    },
    "learningGoals": [
      "檢查敘述是否符合圖表與計算。",
      "分辨百分點與相對百分比。",
      "辨認截斷座標軸造成的視覺誇大。",
      "檢查分母、基期、樣本與資料口徑。",
      "把過度肯定的結論改寫成資料可支持的語句。"
    ],
    "vocabulary": [
      {
        "term": "百分點",
        "meaning": "兩個百分率直接相減的差，例如40%到50%增加10個百分點。"
      },
      {
        "term": "相對增幅",
        "meaning": "變化量除以原值，例如40%到50%的相對增幅為25%。"
      },
      {
        "term": "截斷座標軸",
        "meaning": "縱軸不從0開始，使小差異看起來很大。"
      },
      {
        "term": "基期",
        "meaning": "計算成長率所使用的原始比較值。"
      },
      {
        "term": "口徑",
        "meaning": "資料的定義、納入範圍與計算方式。"
      }
    ],
    "notation": [
      {
        "symbol": "百分點差",
        "meaning": "新百分率−舊百分率。"
      },
      {
        "symbol": "相對增幅",
        "meaning": "(新值−舊值)÷舊值×100%。"
      },
      {
        "symbol": "n",
        "meaning": "樣本數；比例相同時，n小通常不確定性較大。"
      }
    ],
    "conceptDevelopment": [
      "一個敘述可在算術上正確，仍可能因分母、基期、樣本或語氣而誤導。",
      "百分率從40%到50%是增加10個百分點，但相對於原40%增加25%；兩種說法不可混用。",
      "截斷縱軸不必然錯，但必須清楚標示；讀者應看刻度而非柱高比例。",
      "「增加一倍」表示新值為原值的2倍，也就是增加100%，不是增加到原值的1倍後再加其他量。",
      "觀察到差異只能描述這批資料；若樣本不具代表性，不能推廣到所有人。"
    ],
    "definitions": [
      {
        "name": "合理統計敘述",
        "statement": "計算、分母、圖表尺度、樣本範圍與語氣均與資料一致的敘述。"
      },
      {
        "name": "誤導性呈現",
        "statement": "未必捏造數值，但透過不完整尺度、基期或語言使讀者形成超出資料的印象。"
      }
    ],
    "formulas": [
      {
        "formula": "百分點差＝新百分率－舊百分率",
        "conditions": [
          "比較兩個百分率"
        ]
      },
      {
        "formula": "相對增幅＝(新值－舊值)÷舊值×100%",
        "conditions": [
          "舊值不為0",
          "新舊口徑一致"
        ]
      },
      {
        "formula": "新值＝舊值×(1＋增幅率)",
        "conditions": [
          "增幅率以小數表示"
        ]
      }
    ],
    "invalidUseCases": [
      "把10個百分點說成增加10%。",
      "舊值為0仍計算相對增幅。",
      "只依截斷軸柱高宣稱成長數倍。",
      "從自願填答者推論全體學生。",
      "把同時發生的兩件事直接說成因果。"
    ],
    "stepByStepMethod": [
      {
        "step": 1,
        "action": "重新計算差值、百分率或代表值。"
      },
      {
        "step": 2,
        "action": "確認分母、基期與資料口徑。"
      },
      {
        "step": 3,
        "action": "檢查圖表起點、刻度、單位與是否缺資料。"
      },
      {
        "step": 4,
        "action": "確認樣本來源與可推廣範圍。"
      },
      {
        "step": 5,
        "action": "把結論改寫為精確且不超出證據的語句。"
      }
    ],
    "workedExamples": [
      {
        "id": "L1",
        "prompt": "支持率由40%升至50%。",
        "solution": [
          "百分點差=50%-40%=10個百分點。",
          "相對增幅=10%÷40%=25%。"
        ],
        "answer": "增加10個百分點，或相對增加25%。"
      },
      {
        "id": "L2",
        "prompt": "銷量由100件到120件，圖的縱軸從95開始。",
        "solution": [
          "實際增加20件、20%。",
          "截斷軸會放大外觀差距。"
        ],
        "answer": "應依刻度讀值，不可說柱高顯示成長數倍。"
      },
      {
        "id": "L3",
        "prompt": "網站投票80%贊成，因此全校80%贊成。",
        "solution": [
          "參與者是自願樣本。",
          "未必代表未投票者。"
        ],
        "answer": "只能說投票者中80%贊成。"
      },
      {
        "id": "L4",
        "prompt": "雨天冰品銷量下降，故下雨一定造成所有店冰品下降。",
        "solution": [
          "資料可能只來自部分店與期間。",
          "還可能有溫度、促銷等因素。"
        ],
        "answer": "可描述樣本關聯，不可斷言普遍必然因果。"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "30%到45%增加15%。",
        "why": "直接相減得到的是15個百分點。",
        "fix": "相對增幅為15÷30=50%。"
      },
      {
        "wrong": "縱軸從90起，柱高兩倍就是數值兩倍。",
        "why": "柱高受截斷基線影響。",
        "fix": "讀刻度數值。"
      },
      {
        "wrong": "抽樣班級平均較高，所以全校一定較高。",
        "why": "樣本可能不具代表性。",
        "fix": "限制推論範圍。"
      },
      {
        "wrong": "兩變項一起上升就互為因果。",
        "why": "共同因素可能同時影響兩者。",
        "fix": "使用關聯語句。"
      }
    ],
    "selfCheck": [
      "百分點與相對百分比有分清楚嗎？",
      "舊值與分母正確嗎？",
      "座標軸是否截斷或刻度不等距？",
      "樣本能代表誰？",
      "結論語氣是否過度肯定？"
    ],
    "summary": [
      "數字正確仍可能因呈現方式誤導。",
      "百分點與相對增幅不同。",
      "圖表要看刻度與基線。",
      "樣本與因果限制必須寫入結論。"
    ],
    "connections": {
      "previous": "兩組資料比較提供代表值與可比性基礎。",
      "next": [
        "統計資料素養會整合抽樣、缺失資料、相關與決策風險。"
      ]
    },
    "figureReferences": [],
    "accessibilityNotes": "本講義可完全以文字理解；若有圖形，替代文字提供所有必要數值。",
    "practiceLinks": {
      "mcQuestionIds": [
        "u09-s015-v001",
        "u09-s015-v002",
        "u09-s015-v003",
        "u09-s015-v004",
        "u09-s015-v005",
        "u09-s015-v006",
        "u09-s015-v007",
        "u09-s015-v008",
        "u09-s015-v009",
        "u09-s015-v010",
        "u09-s015-v011",
        "u09-s015-v012"
      ],
      "constructedResponseIds": [
        "u09-s015-cr001",
        "u09-s015-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "將算術、圖表視覺、樣本與語言四層審查整合為固定流程。",
      "scopeCheck": "符合國中會考範圍；未引入四分位數與盒狀圖。",
      "prerequisiteAudit": "需能判讀各種圖表、百分比與代表值，並比較兩組資料。",
      "symbolAndUnitAudit": "所有符號在使用前定義；單位與取位規則在例題中明示。",
      "skillSpecificEvidence": "例題涵蓋百分點、截斷軸、自願樣本與因果過度延伸。",
      "legacyContentUsed": false,
      "decision": "pass"
    },
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "contentSha256": "7a8444720b58302e5fc338aa695a393a5f4fcd97cb7262958acd6b62ccdc80d3"
  },
  "mcQuestions": [
    {
      "questionId": "u09-s015-v001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "misleading-statistics-basic",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "某圖縱軸從 95 開始，兩組數值為 96 與 100。哪個判斷正確？",
      "givenConditions": [
        "同一單位。"
      ],
      "target": "辨識截斷軸誤導",
      "choices": [
        "100 是 96 的五倍",
        "差為 20",
        "實際差 4，截斷軸會放大視覺差異",
        "縱軸起點不影響圖形印象"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "讀刻度實值後相減得 4。",
        "derivedAnswer": "實際差 4，截斷軸會放大視覺差異",
        "trustStoredAnswer": false
      },
      "explanation": "統計圖的視覺比例不能取代刻度。",
      "steps": [
        "讀軸起點。",
        "讀兩值。",
        "以實值比較。"
      ],
      "optionAnalysis": [
        {
          "choice": "100 是 96 的五倍",
          "truth": false,
          "reason": "實際比約 1.04，不是 5。"
        },
        {
          "choice": "差為 20",
          "truth": false,
          "reason": "差不是 20。"
        },
        {
          "choice": "實際差 4，截斷軸會放大視覺差異",
          "truth": true,
          "reason": "100-96=4；可見柱長卻可能是 1 與 5。"
        },
        {
          "choice": "縱軸起點不影響圖形印象",
          "truth": false,
          "reason": "截斷會影響視覺。"
        }
      ],
      "misconceptionTarget": "以可見長度比當數值比",
      "prerequisiteCheck": {
        "skillIds": [
          "data-comparison-context"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "差 4。",
      "ambiguityAndBoundaryAudit": "圖軸明示 95 起。",
      "difficultyReason": "基礎圖表合理性。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7c2626ffab6c21f0c84cacdd471192ff85d8f66d052e1a5a8ae76078e55dda9f"
    },
    {
      "questionId": "u09-s015-v002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "misleading-statistics-basic",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "報告說『平均每戶 2.4 輛車，所以每戶都有 2.4 輛車』。錯在哪裡？",
      "givenConditions": [
        "車輛數個體為整數，平均可小數。"
      ],
      "target": "判斷平均敘述層次",
      "choices": [
        "平均不是每一戶的實際值",
        "車輛不能計算平均",
        "2.4 一定應四捨五入成 2",
        "平均一定等於中位數"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "例如 5 戶共 12 輛，平均 2.4，但各戶可為不同整數。",
        "derivedAnswer": "平均不是每一戶的實際值",
        "trustStoredAnswer": false
      },
      "explanation": "群體平均不可直接套到每個個體。",
      "steps": [
        "區分群體統計量與個體。"
      ],
      "optionAnalysis": [
        {
          "choice": "平均不是每一戶的實際值",
          "truth": true,
          "reason": "平均可為小數，只描述總量除戶數。"
        },
        {
          "choice": "車輛不能計算平均",
          "truth": false,
          "reason": "車輛數可計算平均。"
        },
        {
          "choice": "2.4 一定應四捨五入成 2",
          "truth": false,
          "reason": "是否取整取決於目的，不能改稱每戶實際值。"
        },
        {
          "choice": "平均一定等於中位數",
          "truth": false,
          "reason": "平均與中位數不必相同。"
        }
      ],
      "misconceptionTarget": "把平均當每個人的數值",
      "prerequisiteCheck": {
        "skillIds": [
          "data-comparison-context"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "2.4 不需強制取整。",
      "ambiguityAndBoundaryAudit": "反例足以否定『每戶都有』。",
      "difficultyReason": "基礎統計語句。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9a6c2f3d3482f5b953f03cdd75e3aff5595e77904a0ec910858dbb9fe52f6e59"
    },
    {
      "questionId": "u09-s015-v003",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "misleading-statistics-basic",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "抽樣只訪問籃球隊，卻結論『全校最喜歡籃球』。主要問題是什麼？",
      "givenConditions": [
        "母群為全校。"
      ],
      "target": "辨識代表性偏差",
      "choices": [
        "樣本一定太大",
        "不能調查喜好",
        "百分比不能用於問卷",
        "樣本不具全校代表性"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "選樣與研究問題高度相關，造成選樣偏差。",
        "derivedAnswer": "樣本不具全校代表性",
        "trustStoredAnswer": false
      },
      "explanation": "要推論全校，樣本應涵蓋全校不同學生。",
      "steps": [
        "辨認母群。",
        "檢查樣本來源。"
      ],
      "optionAnalysis": [
        {
          "choice": "樣本一定太大",
          "truth": false,
          "reason": "問題不在樣本太大。"
        },
        {
          "choice": "不能調查喜好",
          "truth": false,
          "reason": "喜好可調查。"
        },
        {
          "choice": "百分比不能用於問卷",
          "truth": false,
          "reason": "百分比可用。"
        },
        {
          "choice": "樣本不具全校代表性",
          "truth": true,
          "reason": "籃球隊成員對籃球偏好可能偏高。"
        }
      ],
      "misconceptionTarget": "只看樣本有數據便接受",
      "prerequisiteCheck": {
        "skillIds": [
          "data-comparison-context"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "無取位。",
      "ambiguityAndBoundaryAudit": "不需知道實際樣本數也能判斷偏差。",
      "difficultyReason": "基礎抽樣合理性。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d913a0ff88e542687b72a050ced3c2dd7a7248a54467cc2f6d2dd296fcd9340f"
    },
    {
      "questionId": "u09-s015-v004",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "misleading-statistics-basic",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "商品價格從 100 元漲到 120 元，之後降到 100 元。廣告說『先漲 20%，再降 20%，所以回到原價』。哪裡錯？",
      "givenConditions": [
        "金額元。"
      ],
      "target": "檢查百分比基準錯置",
      "choices": [
        "兩次百分比一定可相消",
        "第二次 20% 的基準是 120 元，降後是 96 元",
        "120-20=100 所以正確",
        "百分比不能用於價格"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "100×1.2=120；120×0.8=96。",
        "derivedAnswer": "第二次 20% 的基準是 120 元，降後是 96 元",
        "trustStoredAnswer": false
      },
      "explanation": "百分比變化必須標明基準量。",
      "steps": [
        "依序計算。",
        "比較基準。"
      ],
      "optionAnalysis": [
        {
          "choice": "兩次百分比一定可相消",
          "truth": false,
          "reason": "不同基準的同百分比不相消。"
        },
        {
          "choice": "第二次 20% 的基準是 120 元，降後是 96 元",
          "truth": true,
          "reason": "120×0.8=96。"
        },
        {
          "choice": "120-20=100 所以正確",
          "truth": false,
          "reason": "降 20% 不是減 20 元。"
        },
        {
          "choice": "百分比不能用於價格",
          "truth": false,
          "reason": "價格可用百分比。"
        }
      ],
      "misconceptionTarget": "把百分比當固定量",
      "prerequisiteCheck": {
        "skillIds": [
          "data-comparison-context"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "96 元。",
      "ambiguityAndBoundaryAudit": "兩步變化次序明確。",
      "difficultyReason": "標準敘述合理性。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "23a40307c82f9009752271d199ecaae8f2274bd78d13c16011d82db2a1647ff0"
    },
    {
      "questionId": "u09-s015-v005",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "misleading-statistics-basic",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "某班平均由 70 升到 72，報告稱『每位學生都進步 2 分』。何者正確？",
      "givenConditions": [
        "假設班級人數相同。"
      ],
      "target": "審核平均變化的個體化敘述",
      "choices": [
        "報告必然正確",
        "至少一半人一定增加 2",
        "所有人分數總和沒有改變",
        "平均增加 2 不代表每個人都增加 2"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "可有部分進步很多、部分退步，平均仍升 2。",
        "derivedAnswer": "平均增加 2 不代表每個人都增加 2",
        "trustStoredAnswer": false
      },
      "explanation": "群體變化不能直接推論個體變化。",
      "steps": [
        "區分平均與個人。",
        "用可能反例檢查。"
      ],
      "optionAnalysis": [
        {
          "choice": "報告必然正確",
          "truth": false,
          "reason": "平均變化不固定每人變化。"
        },
        {
          "choice": "至少一半人一定增加 2",
          "truth": false,
          "reason": "也不能推出至少半數。"
        },
        {
          "choice": "所有人分數總和沒有改變",
          "truth": false,
          "reason": "總分若人數相同則增加 2n。"
        },
        {
          "choice": "平均增加 2 不代表每個人都增加 2",
          "truth": true,
          "reason": "總分平均上升可由不同個別變化造成。"
        }
      ],
      "misconceptionTarget": "把群體差值套到每人",
      "prerequisiteCheck": {
        "skillIds": [
          "data-comparison-context"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "平均差 2 分。",
      "ambiguityAndBoundaryAudit": "結論只否定必然性。",
      "difficultyReason": "標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1c5ace3a1bf5ffded5f3009a706d63c56360558894b9cb719650a02832b11286"
    },
    {
      "questionId": "u09-s015-v006",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "misleading-statistics-basic",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "網站稱『使用者滿意率從 2% 增至 4%，成長 2%』。較精確說法是什麼？",
      "givenConditions": [
        "百分比基準 2%。"
      ],
      "target": "修正百分比變化用語",
      "choices": [
        "增加 2%，兩種說法完全相同",
        "增加 4 個百分點",
        "增加 2 個百分點，或相對成長 100%",
        "相對成長 50%"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "直接差 2 個百分點；以原 2% 為基準，增幅 100%。",
        "derivedAnswer": "增加 2 個百分點，或相對成長 100%",
        "trustStoredAnswer": false
      },
      "explanation": "統計報導應區分百分點與百分比。",
      "steps": [
        "算直接差。",
        "算相對變化。",
        "選精確用語。"
      ],
      "optionAnalysis": [
        {
          "choice": "增加 2%，兩種說法完全相同",
          "truth": false,
          "reason": "百分點與相對百分比不同。"
        },
        {
          "choice": "增加 4 個百分點",
          "truth": false,
          "reason": "差不是 4。"
        },
        {
          "choice": "增加 2 個百分點，或相對成長 100%",
          "truth": true,
          "reason": "4%-2%=2 個百分點；(4-2)/2=100%。"
        },
        {
          "choice": "相對成長 50%",
          "truth": false,
          "reason": "2/2=100%，不是 50%。"
        }
      ],
      "misconceptionTarget": "混淆百分點與相對成長",
      "prerequisiteCheck": {
        "skillIds": [
          "data-comparison-context"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "精確值。",
      "ambiguityAndBoundaryAudit": "兩種敘述回答不同問題，均可並列。",
      "difficultyReason": "標準語言審核。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "dd78cfa059d6eded211240cb1a44c791cf1baf17375835a213b62b879451e70b"
    },
    {
      "questionId": "u09-s015-v007",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "misleading-statistics-basic",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "某圖比較兩年事故數：去年 100 件、今年 80 件，但今年只統計 8 個月、去年統計 12 個月。報告稱事故已減少 20%。哪個評估合理？",
      "givenConditions": [
        "事故件／月。"
      ],
      "target": "辨識不同觀察期間造成的誤導",
      "choices": [
        "不能直接比較年度總數，觀察期間不同",
        "正確，80 比 100 少 20%",
        "今年一定更危險",
        "只要畫圖就能比較"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "去年月均約 8.33 件，今年月均 10 件；直接說年減 20%不合理。",
        "derivedAnswer": "不能直接比較年度總數，觀察期間不同",
        "trustStoredAnswer": false
      },
      "explanation": "比較前需確認分母與觀察期間相同。",
      "steps": [
        "檢查時間範圍。",
        "換算同期間率。",
        "審核結論。"
      ],
      "optionAnalysis": [
        {
          "choice": "不能直接比較年度總數，觀察期間不同",
          "truth": true,
          "reason": "8 個月與 12 個月不等長，需比較每月率或完整期間。"
        },
        {
          "choice": "正確，80 比 100 少 20%",
          "truth": false,
          "reason": "總數差混入期間差。"
        },
        {
          "choice": "今年一定更危險",
          "truth": false,
          "reason": "也不能因此斷定更危險。"
        },
        {
          "choice": "只要畫圖就能比較",
          "truth": false,
          "reason": "圖形不能修正資料定義。"
        }
      ],
      "misconceptionTarget": "只比總數",
      "prerequisiteCheck": {
        "skillIds": [
          "data-comparison-context"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "月均可保留分數或近似。",
      "ambiguityAndBoundaryAudit": "不外推全年，只指出原結論不成立。",
      "difficultyReason": "進階可比性。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5b1d80dbd9c1549886c6d8c434aeeb46d40e143b2f10bf307292936fff90728f"
    },
    {
      "questionId": "u09-s015-v008",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "misleading-statistics-basic",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "甲醫院治療 10 人成功 9 人，乙醫院治療 1000 人成功 850 人。廣告只說甲成功率 90% 高於乙 85%。哪個補充最重要？",
      "givenConditions": [
        "樣本數 10 與 1000。"
      ],
      "target": "辨識小樣本百分比的限制",
      "choices": [
        "百分比不能比較",
        "乙成功人數較多所以一定較好",
        "兩院樣本數差異很大，應一起揭露",
        "甲一定有較佳治療技術"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "甲 9/10、乙 850/1000；除了比例，樣本數與病例組成也影響解讀。",
        "derivedAnswer": "兩院樣本數差異很大，應一起揭露",
        "trustStoredAnswer": false
      },
      "explanation": "單一百分比若隱藏分母會誤導證據強度。",
      "steps": [
        "驗算比例。",
        "比較分母。",
        "限制因果結論。"
      ],
      "optionAnalysis": [
        {
          "choice": "百分比不能比較",
          "truth": false,
          "reason": "比例可以比較。"
        },
        {
          "choice": "乙成功人數較多所以一定較好",
          "truth": false,
          "reason": "人數多不直接等於技術好。"
        },
        {
          "choice": "兩院樣本數差異很大，應一起揭露",
          "truth": true,
          "reason": "90% 與 85%可比較，但 10 人樣本的不穩定性較高。"
        },
        {
          "choice": "甲一定有較佳治療技術",
          "truth": false,
          "reason": "未控制病例差異，不能判因果。"
        }
      ],
      "misconceptionTarget": "只看百分比高低",
      "prerequisiteCheck": {
        "skillIds": [
          "data-comparison-context"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "比例精確。",
      "ambiguityAndBoundaryAudit": "不評斷治療本身，只要求完整資訊。",
      "difficultyReason": "進階統計溝通。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "210260f1127d4e5bceff55c9abd85e8125b086972f16903ba21928b5951657e6"
    },
    {
      "questionId": "u09-s015-v009",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "misleading-statistics-basic",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "公司只公布『最高薪資 20 萬元』來宣稱待遇優渥。哪項資料最能補充典型員工待遇？",
      "givenConditions": [
        "薪資同一期間。"
      ],
      "target": "指出選擇性統計揭露",
      "choices": [
        "公司名稱",
        "中位數與薪資分布",
        "最高薪員工姓名",
        "辦公室樓層"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "最高值是極端資料；需知道中位數、平均與分布。",
        "derivedAnswer": "中位數與薪資分布",
        "trustStoredAnswer": false
      },
      "explanation": "選擇性揭露單一極端值會造成印象偏差。",
      "steps": [
        "辨識最高值局限。",
        "選擇能描述中心與散布的資訊。"
      ],
      "optionAnalysis": [
        {
          "choice": "公司名稱",
          "truth": false,
          "reason": "名稱不提供薪資分布。"
        },
        {
          "choice": "中位數與薪資分布",
          "truth": true,
          "reason": "最高值可能只代表一人，中位數與分布更能描述典型。"
        },
        {
          "choice": "最高薪員工姓名",
          "truth": false,
          "reason": "個資也不能代表全體。"
        },
        {
          "choice": "辦公室樓層",
          "truth": false,
          "reason": "樓層無關。"
        }
      ],
      "misconceptionTarget": "以極端值代表全體",
      "prerequisiteCheck": {
        "skillIds": [
          "data-comparison-context"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "無計算。",
      "ambiguityAndBoundaryAudit": "答案不要求取得個資。",
      "difficultyReason": "進階資料完整性。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "070f7b3c05888920f3325eb008650b1fee9cb76aac86ce02deb616bda846a606"
    },
    {
      "questionId": "u09-s015-v010",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "misleading-statistics-basic",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "候選人網站引用『本網站 5000 名讀者中支持率 88%』，宣稱全市支持率 88%。最主要問題是什麼？",
      "givenConditions": [
        "5000 名網站讀者。"
      ],
      "target": "審核政治民調樣本代表性",
      "choices": [
        "5000 人一定太少",
        "88% 不能換算人數",
        "網站資料一定造假",
        "自願瀏覽網站的讀者可能不是全市代表樣本"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "即使樣本數大，自我選擇與網站受眾仍可能造成偏差。",
        "derivedAnswer": "自願瀏覽網站的讀者可能不是全市代表樣本",
        "trustStoredAnswer": false
      },
      "explanation": "大樣本不能自動修正偏誤抽樣。",
      "steps": [
        "辨認母群全市。",
        "檢查樣本招募。",
        "限制外推。"
      ],
      "optionAnalysis": [
        {
          "choice": "5000 人一定太少",
          "truth": false,
          "reason": "樣本大小不必然太小，代表性更關鍵。"
        },
        {
          "choice": "88% 不能換算人數",
          "truth": false,
          "reason": "可換算約 4400 人。"
        },
        {
          "choice": "網站資料一定造假",
          "truth": false,
          "reason": "不能無證據指控造假。"
        },
        {
          "choice": "自願瀏覽網站的讀者可能不是全市代表樣本",
          "truth": true,
          "reason": "樣本來源可能高度偏向候選人支持者。"
        }
      ],
      "misconceptionTarget": "以大樣本取代隨機性",
      "prerequisiteCheck": {
        "skillIds": [
          "data-comparison-context"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 130,
      "unitAndRoundingCheck": "88%為樣本內比例。",
      "ambiguityAndBoundaryAudit": "只批評外推，不否定樣本內計算。",
      "difficultyReason": "素養抽樣。",
      "literacyNecessityReason": "政治支持率外推會影響公共判斷，樣本來源是不可省略的核心。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "149366dd1d0d4e4f3722dfbc260bb6665e22ca4829dbff92edfafe656d307ce1"
    },
    {
      "questionId": "u09-s015-v011",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "misleading-statistics-basic",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "食品廣告寫『脂肪降低 50%』，小字註明由每份 2 克降為 1 克，但每包份數由 1 份改為 3 份。整包脂肪如何變化？",
      "givenConditions": [
        "脂肪公克。"
      ],
      "target": "檢查百分比宣稱的基準與包裝變化",
      "choices": [
        "由 2 克降為 1 克",
        "由 2 克增為 3 克",
        "整包也降低 50%",
        "維持 2 克"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "比較整包：舊 2 克，新 3 克；每份下降不代表整包下降。",
        "derivedAnswer": "由 2 克增為 3 克",
        "trustStoredAnswer": false
      },
      "explanation": "廣告分母與包裝規格必須一起讀。",
      "steps": [
        "讀每份數值。",
        "乘每包份數。",
        "比較整包。"
      ],
      "optionAnalysis": [
        {
          "choice": "由 2 克降為 1 克",
          "truth": false,
          "reason": "1 克只是每份。"
        },
        {
          "choice": "由 2 克增為 3 克",
          "truth": true,
          "reason": "舊包 2×1=2 克，新包 1×3=3 克。"
        },
        {
          "choice": "整包也降低 50%",
          "truth": false,
          "reason": "忽略份數變化。"
        },
        {
          "choice": "維持 2 克",
          "truth": false,
          "reason": "新包不是 2 克。"
        }
      ],
      "misconceptionTarget": "只看大字每份數值",
      "prerequisiteCheck": {
        "skillIds": [
          "data-comparison-context"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 130,
      "unitAndRoundingCheck": "2 與 3 克。",
      "ambiguityAndBoundaryAudit": "不評論其他營養成分。",
      "difficultyReason": "素養標示審核。",
      "literacyNecessityReason": "食品廣告同時改變每份與份數，若刪除包裝情境便無法判斷整包攝取。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f98f80d37c72a572a15bc844c879905570634b426ac0df6a75d1f7327ee5c379"
    },
    {
      "questionId": "u09-s015-v012",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "misleading-statistics-basic",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "新聞標題：『本市犯罪增加一倍』；內文資料是由 1 件增加到 2 件，且只涵蓋單一小區一週。哪個改寫較負責？",
      "givenConditions": [
        "件數、地區、週。"
      ],
      "target": "重寫小基數統計新聞",
      "choices": [
        "該小區該週由 1 件增至 2 件，樣本範圍小，不宜代表全市趨勢",
        "全市犯罪暴增 100%",
        "犯罪一定持續惡化",
        "百分比增加一倍所以不必寫件數"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "相對增幅 100% 計算沒錯，但範圍與基數使標題過度。",
        "derivedAnswer": "該小區該週由 1 件增至 2 件，樣本範圍小，不宜代表全市趨勢",
        "trustStoredAnswer": false
      },
      "explanation": "合理統計溝通要同時報相對與絕對變化。",
      "steps": [
        "核對母群與期間。",
        "核對絕對數。",
        "降低外推強度。"
      ],
      "optionAnalysis": [
        {
          "choice": "該小區該週由 1 件增至 2 件，樣本範圍小，不宜代表全市趨勢",
          "truth": true,
          "reason": "應同時揭露絕對數、地區與期間。"
        },
        {
          "choice": "全市犯罪暴增 100%",
          "truth": false,
          "reason": "原資料不是全市。"
        },
        {
          "choice": "犯罪一定持續惡化",
          "truth": false,
          "reason": "兩點不能證明持續趨勢。"
        },
        {
          "choice": "百分比增加一倍所以不必寫件數",
          "truth": false,
          "reason": "小基數百分比易誇大。"
        }
      ],
      "misconceptionTarget": "用大百分比掩蓋小基數與窄範圍",
      "prerequisiteCheck": {
        "skillIds": [
          "data-comparison-context"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 140,
      "unitAndRoundingCheck": "不需取位。",
      "ambiguityAndBoundaryAudit": "承認計算正確但推論不合理。",
      "difficultyReason": "素養媒體審核。",
      "literacyNecessityReason": "犯罪新聞的地區、時間與絕對件數直接決定公眾如何解讀風險。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1fa3d5a1e2ce5c63bbd3e44f8dc5da5ef2983621dc91eca100007bd8807df372"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u09-s015-cr001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "misleading-statistics-basic",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "某商品滿意率由去年的32%上升到今年的40%。廣告寫『滿意率增加8%，成長了四分之一』。請逐句評估，改寫成不混淆的精確說法，並寫出計算。",
      "givenConditions": [],
      "target": "區分百分點差與相對增幅，修正含糊統計語句。",
      "requiredWork": [
        "直接相減得到8個百分點。",
        "相對增幅以32%為分母。",
        "改寫時清楚標示兩種量。"
      ],
      "standardSolution": [
        "40%-32%=8個百分點，所以『增加8%』若想表達直接差，應改為『增加8個百分點』。",
        "相對增幅=(40%-32%)÷32%=8/32=25%，也就是相對去年成長四分之一。",
        "精確說法：『滿意率由32%升至40%，增加8個百分點，相對增幅為25%。』"
      ],
      "alternativeMethod": "可用人數想像：每100人由32人變40人，多8人；多出的8相對原32為1/4。",
      "reasoningSteps": [
        "辨認新舊百分率。",
        "計算直接差。",
        "以舊值作相對增幅分母。",
        "分別使用百分點與百分比。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "8個百分點、25%相對增幅及完整精確改寫全部正確。"
        },
        {
          "score": 2,
          "criteria": "兩個計算正確但改寫仍有一處用語含糊，或概念正確但一個符號表達小錯。"
        },
        {
          "score": 1,
          "criteria": "至少知道40-32是8個百分點，或能算8/32=25%。"
        },
        {
          "score": 0,
          "criteria": "把8個百分點與8%相對增幅視為同一件事。"
        }
      ],
      "partialCreditRules": [
        "『成長四分之一』必須說相對於去年32%，否則仍略含糊。",
        "將8/32寫0.25可接受。"
      ],
      "followThroughPolicy": "若直接差抄錯但仍以舊值作分母，給相對增幅方法分。",
      "unitAndNotationRules": "直接差用『個百分點』；相對變化用%。",
      "answerOnlyPolicy": "只列8個百分點與25%，無句子評估，最高2分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "差0.08；0.08/0.32=0.25。廣告第一句單位不精確，第二句在明確基期下正確。",
        "boundaryAndAmbiguityAudit": "舊值32%非0，可定義相對增幅；基期明確為去年。",
        "rubricAlignmentEvidence": "數值與語言修訂同時納入評分。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "b0b3f7b1a6f7353e04bad0c7b0f6a15a163ddc2ecedfff41e2fe7c10beede800"
    },
    {
      "questionId": "u09-s015-cr002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "misleading-statistics-basic",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "一張銷售長條圖的縱軸從980件開始，甲月銷量1000件、乙月1020件。圖中乙柱可見高度為甲柱的2倍，簡報因此寫『乙月銷量是甲月的2倍』。請檢查此敘述，計算實際增幅，並提出兩項使圖表較不誤導的改進。",
      "givenConditions": [],
      "target": "由截斷軸揭露視覺比例錯覺，量化真實變化並改善呈現。",
      "requiredWork": [
        "比較真實數值比或差值。",
        "相對增幅以1000為分母。",
        "至少提出兩項具體圖表改進。"
      ],
      "standardSolution": [
        "實際差=1020-1000=20件。",
        "相對增幅=20/1000=2%；乙月為甲月的102%，不是2倍。",
        "可見高度是1000-980=20與1020-980=40，才呈現2倍。",
        "改進可包括：縱軸從0開始；若保留截斷軸，清楚標示斷軸與數值標籤；在圖旁寫明差20件與增幅2%。"
      ],
      "alternativeMethod": "直接算1020/1000=1.02即可否定2倍，再分析截斷基線。",
      "reasoningSteps": [
        "讀取軸上數值而非只看柱高。",
        "算差值與相對增幅。",
        "解釋截斷後可見高度比例。",
        "提出能揭露尺度的改圖方案。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "否定2倍、算出20件與2%，解釋20對40可見高度，並提出兩項具體改進。"
        },
        {
          "score": 2,
          "criteria": "真實計算與截斷軸原因正確，但只提一項改進或改進過於籠統。"
        },
        {
          "score": 1,
          "criteria": "能指出1020/1000=1.02或實際只增加20件。"
        },
        {
          "score": 0,
          "criteria": "接受柱高2倍即銷量2倍，未讀實際刻度。"
        }
      ],
      "partialCreditRules": [
        "『標示清楚』需具體到標斷軸、數值或基線才算一項。",
        "只建議改顏色不改善尺度，不算有效改進。"
      ],
      "followThroughPolicy": "相對增幅算術錯誤不影響圖表改進與截斷原因的獨立分。",
      "unitAndNotationRules": "銷量以件；增幅用%；『倍』是無單位比值。",
      "answerOnlyPolicy": "只寫2%與不合理，最高1分。",
      "figureId": "u09-fig-bar-02",
      "drawingSpecId": "u09-draw-bar-02",
      "independentReview": {
        "independentDerivation": "1020/1000=1.02，差20，增幅2%；截斷高度40/20=2造成錯覺。",
        "boundaryAndAmbiguityAudit": "縱軸起點980與兩數值均已給定，可唯一解釋視覺比例。",
        "rubricAlignmentEvidence": "算術檢查、視覺機制與資訊設計改進三層並重。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "b1906aa9d31adfa77098ccc955d23d83b264ebd7bfe81698ecb9b26ece7321a9"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u09-s015-v001-semantic-r1",
      "questionId": "u09-s015-v001",
      "unitId": "u09",
      "skillId": "misleading-statistics-basic",
      "independentRecalculation": "讀刻度實值後相減得 4。",
      "correctChoiceCheck": "獨立計算得到「實際差 4，截斷軸會放大視覺差異」，位於索引 2。",
      "distractorAudit": [
        "實際比約 1.04，不是 5。",
        "差不是 20。",
        "截斷會影響視覺。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「實際差 4，截斷軸會放大視覺差異」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計敘述的合理性」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "圖軸明示 95 起。",
      "difficultyEvidence": "基礎圖表合理性。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "507447048b0003e204c2f300c65b86fc3cd5abdd5fa4d80914d2f3afb899818b"
    },
    {
      "reviewId": "u09-s015-v002-semantic-r1",
      "questionId": "u09-s015-v002",
      "unitId": "u09",
      "skillId": "misleading-statistics-basic",
      "independentRecalculation": "例如 5 戶共 12 輛，平均 2.4，但各戶可為不同整數。",
      "correctChoiceCheck": "獨立計算得到「平均不是每一戶的實際值」，位於索引 0。",
      "distractorAudit": [
        "車輛數可計算平均。",
        "是否取整取決於目的，不能改稱每戶實際值。",
        "平均與中位數不必相同。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「平均不是每一戶的實際值」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計敘述的合理性」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "反例足以否定『每戶都有』。",
      "difficultyEvidence": "基礎統計語句。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "bfd07990cbceeecae6e18679f2fcfdeb7c537b0385c0099b4529e773350c43e0"
    },
    {
      "reviewId": "u09-s015-v003-semantic-r1",
      "questionId": "u09-s015-v003",
      "unitId": "u09",
      "skillId": "misleading-statistics-basic",
      "independentRecalculation": "選樣與研究問題高度相關，造成選樣偏差。",
      "correctChoiceCheck": "獨立計算得到「樣本不具全校代表性」，位於索引 3。",
      "distractorAudit": [
        "問題不在樣本太大。",
        "喜好可調查。",
        "百分比可用。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「樣本不具全校代表性」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計敘述的合理性」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不需知道實際樣本數也能判斷偏差。",
      "difficultyEvidence": "基礎抽樣合理性。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "7a5e27d45125bce9c59609a0df16b8ca01bedf719e2ad8871cdbec2c62448335"
    },
    {
      "reviewId": "u09-s015-v004-semantic-r1",
      "questionId": "u09-s015-v004",
      "unitId": "u09",
      "skillId": "misleading-statistics-basic",
      "independentRecalculation": "100×1.2=120；120×0.8=96。",
      "correctChoiceCheck": "獨立計算得到「第二次 20% 的基準是 120 元，降後是 96 元」，位於索引 1。",
      "distractorAudit": [
        "不同基準的同百分比不相消。",
        "降 20% 不是減 20 元。",
        "價格可用百分比。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「第二次 20% 的基準是 120 元，降後是 96 元」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計敘述的合理性」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "兩步變化次序明確。",
      "difficultyEvidence": "標準敘述合理性。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "10802cbd83c642ec7ba1c655dcdeb68aa686bb53cb4d39a0ad81868e2ed18025"
    },
    {
      "reviewId": "u09-s015-v005-semantic-r1",
      "questionId": "u09-s015-v005",
      "unitId": "u09",
      "skillId": "misleading-statistics-basic",
      "independentRecalculation": "可有部分進步很多、部分退步，平均仍升 2。",
      "correctChoiceCheck": "獨立計算得到「平均增加 2 不代表每個人都增加 2」，位於索引 3。",
      "distractorAudit": [
        "平均變化不固定每人變化。",
        "也不能推出至少半數。",
        "總分若人數相同則增加 2n。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「平均增加 2 不代表每個人都增加 2」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計敘述的合理性」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "結論只否定必然性。",
      "difficultyEvidence": "標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "d13aadc9cc1212b6a22a636893b59bb43d162648436b23d2ebe271ccdb6df4bc"
    },
    {
      "reviewId": "u09-s015-v006-semantic-r1",
      "questionId": "u09-s015-v006",
      "unitId": "u09",
      "skillId": "misleading-statistics-basic",
      "independentRecalculation": "直接差 2 個百分點；以原 2% 為基準，增幅 100%。",
      "correctChoiceCheck": "獨立計算得到「增加 2 個百分點，或相對成長 100%」，位於索引 2。",
      "distractorAudit": [
        "百分點與相對百分比不同。",
        "差不是 4。",
        "2/2=100%，不是 50%。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「增加 2 個百分點，或相對成長 100%」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計敘述的合理性」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "兩種敘述回答不同問題，均可並列。",
      "difficultyEvidence": "標準語言審核。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "2eb9ca60f6d50910eb5845fce497e922bb527006c0a1e02fc66e559d60c09d6b"
    },
    {
      "reviewId": "u09-s015-v007-semantic-r1",
      "questionId": "u09-s015-v007",
      "unitId": "u09",
      "skillId": "misleading-statistics-basic",
      "independentRecalculation": "去年月均約 8.33 件，今年月均 10 件；直接說年減 20%不合理。",
      "correctChoiceCheck": "獨立計算得到「不能直接比較年度總數，觀察期間不同」，位於索引 0。",
      "distractorAudit": [
        "總數差混入期間差。",
        "也不能因此斷定更危險。",
        "圖形不能修正資料定義。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「不能直接比較年度總數，觀察期間不同」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計敘述的合理性」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不外推全年，只指出原結論不成立。",
      "difficultyEvidence": "進階可比性。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "cad7a68eaf7ce6675c44b959b8553da2450e1a694e72795fb3f492da0250f77f"
    },
    {
      "reviewId": "u09-s015-v008-semantic-r1",
      "questionId": "u09-s015-v008",
      "unitId": "u09",
      "skillId": "misleading-statistics-basic",
      "independentRecalculation": "甲 9/10、乙 850/1000；除了比例，樣本數與病例組成也影響解讀。",
      "correctChoiceCheck": "獨立計算得到「兩院樣本數差異很大，應一起揭露」，位於索引 2。",
      "distractorAudit": [
        "比例可以比較。",
        "人數多不直接等於技術好。",
        "未控制病例差異，不能判因果。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「兩院樣本數差異很大，應一起揭露」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計敘述的合理性」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不評斷治療本身，只要求完整資訊。",
      "difficultyEvidence": "進階統計溝通。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "a5b8e6541d8dfcf09cfcd79c8d6ca006f41fa777e74ada33cfe60a013d07fc6c"
    },
    {
      "reviewId": "u09-s015-v009-semantic-r1",
      "questionId": "u09-s015-v009",
      "unitId": "u09",
      "skillId": "misleading-statistics-basic",
      "independentRecalculation": "最高值是極端資料；需知道中位數、平均與分布。",
      "correctChoiceCheck": "獨立計算得到「中位數與薪資分布」，位於索引 1。",
      "distractorAudit": [
        "名稱不提供薪資分布。",
        "個資也不能代表全體。",
        "樓層無關。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「中位數與薪資分布」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計敘述的合理性」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "答案不要求取得個資。",
      "difficultyEvidence": "進階資料完整性。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "2ecb4a102bb2c36a00971a99b1bf81e80d98af71212a67b30962700d462bb7a8"
    },
    {
      "reviewId": "u09-s015-v010-semantic-r1",
      "questionId": "u09-s015-v010",
      "unitId": "u09",
      "skillId": "misleading-statistics-basic",
      "independentRecalculation": "即使樣本數大，自我選擇與網站受眾仍可能造成偏差。",
      "correctChoiceCheck": "獨立計算得到「自願瀏覽網站的讀者可能不是全市代表樣本」，位於索引 3。",
      "distractorAudit": [
        "樣本大小不必然太小，代表性更關鍵。",
        "可換算約 4400 人。",
        "不能無證據指控造假。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「自願瀏覽網站的讀者可能不是全市代表樣本」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計敘述的合理性」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "只批評外推，不否定樣本內計算。",
      "difficultyEvidence": "素養抽樣。",
      "literacyEvidence": "政治支持率外推會影響公共判斷，樣本來源是不可省略的核心。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "78604b48b03390b039b6d81384f15ee665de5bdc1f58f5466c1269c932af073a"
    },
    {
      "reviewId": "u09-s015-v011-semantic-r1",
      "questionId": "u09-s015-v011",
      "unitId": "u09",
      "skillId": "misleading-statistics-basic",
      "independentRecalculation": "比較整包：舊 2 克，新 3 克；每份下降不代表整包下降。",
      "correctChoiceCheck": "獨立計算得到「由 2 克增為 3 克」，位於索引 1。",
      "distractorAudit": [
        "1 克只是每份。",
        "忽略份數變化。",
        "新包不是 2 克。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「由 2 克增為 3 克」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計敘述的合理性」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不評論其他營養成分。",
      "difficultyEvidence": "素養標示審核。",
      "literacyEvidence": "食品廣告同時改變每份與份數，若刪除包裝情境便無法判斷整包攝取。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "c10dd3e63bf78bdb8d2974b46f94385440c15f15d4b8d9454ef0e24b0e2ecceb"
    },
    {
      "reviewId": "u09-s015-v012-semantic-r1",
      "questionId": "u09-s015-v012",
      "unitId": "u09",
      "skillId": "misleading-statistics-basic",
      "independentRecalculation": "相對增幅 100% 計算沒錯，但範圍與基數使標題過度。",
      "correctChoiceCheck": "獨立計算得到「該小區該週由 1 件增至 2 件，樣本範圍小，不宜代表全市趨勢」，位於索引 0。",
      "distractorAudit": [
        "原資料不是全市。",
        "兩點不能證明持續趨勢。",
        "小基數百分比易誇大。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「該小區該週由 1 件增至 2 件，樣本範圍小，不宜代表全市趨勢」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計敘述的合理性」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "承認計算正確但推論不合理。",
      "difficultyEvidence": "素養媒體審核。",
      "literacyEvidence": "犯罪新聞的地區、時間與絕對件數直接決定公眾如何解讀風險。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "d538a6cc6aba18f32aed8c19cf6eec6f78083611d03278e127532cea7bf166f4"
    }
  ],
  "drawingSpecs": []
};
