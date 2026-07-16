// Generated only by serializing reviewed source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u09-s014-lecture-r1",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-comparison",
    "skillId": "data-comparison-context",
    "lockedTitle": "兩組資料與代表值比較",
    "title": "兩組資料與代表值比較：先問比較目的",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewStatus": "independently-reviewed",
    "prerequisiteBridge": {
      "skillIds": [
        "mean-from-table"
      ],
      "explanation": "需能計算平均數、中位數、眾數、全距與次數表平均，並理解各代表值限制。"
    },
    "learningGoals": [
      "比較兩組資料的中心與分散程度。",
      "依資料分布選擇適當代表值。",
      "區分平均較高、較穩定與較一致。",
      "避免只看一個統計量就下全面結論。",
      "用相同單位、相同期間與相同母體作公平比較。"
    ],
    "vocabulary": [
      {
        "term": "代表值",
        "meaning": "用一個數概括資料中心，例如平均數、中位數或眾數。"
      },
      {
        "term": "分散程度",
        "meaning": "資料彼此差異大小；本單元用全距作基礎判斷。"
      },
      {
        "term": "穩定",
        "meaning": "資料波動較小，不能只由平均數判斷。"
      },
      {
        "term": "偏態",
        "meaning": "少數極端值使資料向一側拉長。"
      },
      {
        "term": "可比性",
        "meaning": "兩組資料的定義、單位、期間與對象一致，才適合比較。"
      }
    ],
    "notation": [
      {
        "symbol": "平均數A－平均數B",
        "meaning": "兩組平均表現的差，不代表每一筆都相差此值。"
      },
      {
        "symbol": "全距A、全距B",
        "meaning": "比較兩組總跨度；全距較小通常表示依此指標較集中。"
      },
      {
        "symbol": "中位數",
        "meaning": "偏態或有極端值時常比平均數穩健。"
      }
    ],
    "conceptDevelopment": [
      "比較兩組資料前要先確認同一量、同一單位、同一期間與合理樣本。",
      "平均數比較整體水準，但受極端值影響；中位數適合描述偏態資料的中央位置。",
      "全距較小只表示最大與最小距離較近，不能保證每一筆都更接近中心。",
      "兩組平均相同，分布仍可能完全不同；一組可能很集中，另一組可能兩極化。",
      "結論必須對應問題，例如「典型薪資」常看中位數，「總體每人平均產量」可看平均數。",
      "比較兩組資料時，平均與中位數描述中心位置，全距描述最兩端的跨度，三者回答的問題不同。先確認單位、樣本與抽樣方式可比，再依決策目標選指標：談典型值時中位數較能抵抗極端值，談穩定度時可看離散指標。任何摘要都不能推出每一位個體的情況，也不應只挑支持預設立場的單一數字。"
    ],
    "definitions": [
      {
        "name": "公平比較",
        "statement": "在統計口徑、單位、期間與群體可比的前提下比較。"
      },
      {
        "name": "中心與分散雙重比較",
        "statement": "至少分別檢查代表值與資料跨度，避免把不同面向混為一談。"
      }
    ],
    "formulas": [
      {
        "formula": "平均差＝A平均－B平均",
        "conditions": [
          "兩組同單位且定義一致"
        ]
      },
      {
        "formula": "全距＝最大值－最小值",
        "conditions": [
          "兩組皆以相同量尺衡量"
        ]
      },
      {
        "formula": "合併平均需依各組筆數加權",
        "conditions": [
          "不可由兩個平均數直接推得，除非筆數相同"
        ]
      }
    ],
    "invalidUseCases": [
      "用不同單位的平均數直接比較。",
      "把平均較高解讀為每一筆都較高。",
      "把全距較小直接說成平均較高。",
      "忽略兩組樣本數差異而直接平均群組平均。",
      "有極端值時只報平均數並稱其為典型值。"
    ],
    "stepByStepMethod": [
      {
        "step": 1,
        "action": "確認兩組的對象、期間、單位與資料定義一致。"
      },
      {
        "step": 2,
        "action": "依目的選平均數、中位數或眾數。"
      },
      {
        "step": 3,
        "action": "計算或讀取全距，檢查極端值。"
      },
      {
        "step": 4,
        "action": "分開陳述中心與分散的比較結果。"
      },
      {
        "step": 5,
        "action": "以有限、可由資料支持的語句下結論。"
      }
    ],
    "workedExamples": [
      {
        "id": "L1",
        "prompt": "A、B兩組平均皆80，A全距6、B全距24，若依全距比較一致性，何者較集中？",
        "solution": [
          "平均同為80，中心位置相同。",
          "比較全距6與24。",
          "6較小，所以A依全距較集中。"
        ],
        "answer": "A組較集中。",
        "why": "平均相同不代表分布相同，全距專門反映最大值與最小值的跨度；A的跨度只有6，依題目指定的全距判準，波動小於跨度24的B。"
      },
      {
        "id": "L2",
        "prompt": "A公司薪資中位數42、平均65；B公司中位數48、平均50。若比較典型員工薪資，先看哪一組？",
        "solution": [
          "把『典型』對應到不易受極端值影響的中位數。",
          "比較中位數42與48。",
          "B的中位數較高，並留意A平均可能受高薪者拉高。"
        ],
        "answer": "先以B公司的中位數48判斷較高。",
        "why": "平均65高於中位數42的落差提示A可能有少數高薪值；對典型員工而言，中位數比平均更穩健。這仍不是每位B員工薪資都較高的保證。"
      },
      {
        "id": "L3",
        "prompt": "甲組5人平均70，乙組20人平均80，求合併平均。",
        "solution": [
          "甲組總和5×70＝350。",
          "乙組總和20×80＝1600，合計1950。",
          "總人數25，所以1950÷25＝78。"
        ],
        "answer": "78。",
        "why": "合併平均要按人數加權，不能把70與80直接平均；乙組人數是甲組四倍，因此結果78會明顯靠近80，也可作為合理性檢查。"
      },
      {
        "id": "L4",
        "prompt": "一份資料以每週公斤記錄，另一份以每日公克記錄，能否直接比較平均？",
        "solution": [
          "辨認時間單位一個是每週、一個是每日。",
          "辨認重量單位一個是公斤、一個是公克。",
          "先統一時間基準與重量單位，再比較平均。"
        ],
        "answer": "不能直接比較，必須先統一單位。",
        "why": "數值大小只有在量綱與時間基準一致時才有可比意義；若未換算，較大的數字可能只來自單位選擇，而不是實際量較大。"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "平均相同，所以兩組資料相同。",
        "why": "平均數不決定分布。",
        "fix": "再看全距與個別資料。"
      },
      {
        "wrong": "A全距小，所以A平均一定高。",
        "why": "中心與分散是不同面向。",
        "fix": "分別計算。"
      },
      {
        "wrong": "甲平均薪資高，所以多數員工薪資較高。",
        "why": "極端高薪可能拉高平均。",
        "fix": "查看中位數與分布。"
      },
      {
        "wrong": "兩組平均直接除以2。",
        "why": "忽略樣本數。",
        "fix": "按人數加權。"
      }
    ],
    "selfCheck": [
      "兩組單位、期間與定義一致嗎？",
      "問題要比較典型值還是整體平均？",
      "是否有極端值？",
      "中心與分散是否分開陳述？",
      "結論是否超過資料可支持範圍？"
    ],
    "summary": [
      "先確認可比性，再選代表值。",
      "平均數與中位數各有適用情境。",
      "全距描述跨度，不描述中心。",
      "平均相同不代表分布相同。"
    ],
    "connections": {
      "previous": "已能計算各種代表值與全距，現在學習依目的組合使用。",
      "next": [
        "統計敘述合理性會檢查圖表、百分比與語言是否誇大。",
        "統計素養會進一步檢查樣本與因果。"
      ]
    },
    "figureReferences": [],
    "accessibilityNotes": "本講義可完全以文字理解；若有圖形，替代文字提供所有必要數值。",
    "practiceLinks": {
      "mcQuestionIds": [
        "u09-s014-v001",
        "u09-s014-v002",
        "u09-s014-v003",
        "u09-s014-v004",
        "u09-s014-v005",
        "u09-s014-v006",
        "u09-s014-v007",
        "u09-s014-v008",
        "u09-s014-v009",
        "u09-s014-v010",
        "u09-s014-v011",
        "u09-s014-v012"
      ],
      "constructedResponseIds": [
        "u09-s014-cr001",
        "u09-s014-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "把計算技能提升為選擇統計量、確認可比性與限制結論。",
      "scopeCheck": "符合國中會考範圍；未引入四分位數與盒狀圖。",
      "prerequisiteAudit": "需能計算平均數、中位數、眾數、全距與次數表平均，並理解各代表值限制。",
      "symbolAndUnitAudit": "所有符號在使用前定義；單位與取位規則在例題中明示。",
      "skillSpecificEvidence": "例題涵蓋同平均不同全距、偏態薪資、不同組大小與單位期間不一致。",
      "legacyContentUsed": false,
      "decision": "pass"
    },
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "contentSha256": "1378d0d512be7b1f34142ffea8f871b5dbab0319c60b8bce0fdfd4afbcd90e46"
  },
  "mcQuestions": [
    {
      "questionId": "u09-s014-v001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "data-comparison-context",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "甲組平均 70，乙組平均 75。只比較平均時，哪組中心較高？",
      "givenConditions": [
        "同一量尺。"
      ],
      "target": "比較兩組平均數",
      "choices": [
        "甲組",
        "乙組",
        "兩組相同",
        "無法比較"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "直接比較 75 與 70，乙較高。",
        "derivedAnswer": "乙組",
        "trustStoredAnswer": false
      },
      "explanation": "平均數可比較整體中心水準。 A組平均70、B組平均75，在相同單位與可比資料下，只能由平均判定B組的中心位置較高，不能據此斷言每位B組成員都較高。",
      "steps": [
        "比較兩平均。",
        "先確認比較的是兩組平均而非個別資料。",
        "由75＞70判定B的中心較高，同時保留分布未知的限制。"
      ],
      "optionAnalysis": [
        {
          "choice": "甲組",
          "truth": false,
          "reason": "甲平均較低。"
        },
        {
          "choice": "乙組",
          "truth": true,
          "reason": "75>70。"
        },
        {
          "choice": "兩組相同",
          "truth": false,
          "reason": "兩平均不同。"
        },
        {
          "choice": "無法比較",
          "truth": false,
          "reason": "題目限定只比較平均，資料足夠。"
        }
      ],
      "misconceptionTarget": "忽略比較指標 或把群體平均較高誤解成B組每一筆資料都必定高於A組。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-from-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "乙組。",
      "ambiguityAndBoundaryAudit": "只比較中心，不推論散布。",
      "difficultyReason": "基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3e1b3fa6d62345225d4305cf909256018f02b4d8d68e49e78bfa81cd2362f7e3"
    },
    {
      "questionId": "u09-s014-v002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "data-comparison-context",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "甲組中位數 12，乙組中位數 9。哪組至少一半資料不低於較高的基準？",
      "givenConditions": [
        "資料已各自排序定義。"
      ],
      "target": "比較兩組中位數",
      "choices": [
        "乙組",
        "兩組相同",
        "一定無法判斷",
        "甲組"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "12>9，因此甲組的中央位置較高。",
        "derivedAnswer": "甲組",
        "trustStoredAnswer": false
      },
      "explanation": "中位數比較不等於每筆都較高。 A組中位數12表示排序後至少一半資料不低於12；B組中位數9較低。中位數不提供最大值、平均或每一筆大小。",
      "steps": [
        "比較中位數。",
        "把中位數翻譯成排序後中央位置。",
        "只保留至少一半不低於12的結論，排除涉及全部個體的敘述。"
      ],
      "optionAnalysis": [
        {
          "choice": "乙組",
          "truth": false,
          "reason": "乙中位數較低。"
        },
        {
          "choice": "兩組相同",
          "truth": false,
          "reason": "兩者不同。"
        },
        {
          "choice": "一定無法判斷",
          "truth": false,
          "reason": "中位數可支持中心位置比較。"
        },
        {
          "choice": "甲組",
          "truth": true,
          "reason": "甲中位數較高，至少半數位於 12 附近或以上。"
        }
      ],
      "misconceptionTarget": "把中位數解讀成每筆大小 或把中位數12當成所有A組資料至少都是12，超出中位數能保證的範圍。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-from-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "甲組。",
      "ambiguityAndBoundaryAudit": "不宣稱甲每筆都高。",
      "difficultyReason": "基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "87acf668210bb4f68f8b7bd0129eeca92bb28501220da1d99b9eb75501fab219"
    },
    {
      "questionId": "u09-s014-v003",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "data-comparison-context",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "甲組全距 8，乙組全距 15。以全距衡量，哪組較集中？",
      "givenConditions": [
        "同一單位。"
      ],
      "target": "用全距比較集中程度",
      "choices": [
        "乙組",
        "兩組相同",
        "甲組",
        "無法由全距比較"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "比較全距大小，較小者較集中。",
        "derivedAnswer": "甲組",
        "trustStoredAnswer": false
      },
      "explanation": "散布比較與中心比較不同。 全距＝最大值－最小值，A組全距8小於B組15；若只依全距衡量離散，A組資料較集中，但這不等於每筆都相等。",
      "steps": [
        "比較 8 與 15。",
        "比較同單位下的全距8與15。",
        "由8＜15判定A依全距較集中，並限制結論只針對此指標。"
      ],
      "optionAnalysis": [
        {
          "choice": "乙組",
          "truth": false,
          "reason": "乙全距較大。"
        },
        {
          "choice": "兩組相同",
          "truth": false,
          "reason": "數值不同。"
        },
        {
          "choice": "甲組",
          "truth": true,
          "reason": "8<15，甲兩端差較小。"
        },
        {
          "choice": "無法由全距比較",
          "truth": false,
          "reason": "全距雖粗略但可作此比較。"
        }
      ],
      "misconceptionTarget": "認為全距大代表集中 或把全距較小說成平均一定較小，混淆中心位置與離散程度。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-from-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "甲組。",
      "ambiguityAndBoundaryAudit": "限定『以全距衡量』。",
      "difficultyReason": "基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "fb6d03544002473e3b323fc0886ffdb2a18b9ec525a6a2264658698af9946ee2"
    },
    {
      "questionId": "u09-s014-v004",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "data-comparison-context",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "甲資料 4、5、6，乙資料 1、5、9。兩組平均皆為 5。哪個敘述正確？",
      "givenConditions": [
        "同一量尺。"
      ],
      "target": "同平均不同散布的比較",
      "choices": [
        "乙組全距較大",
        "甲組平均較大",
        "兩組資料完全相同",
        "甲組全距為 8"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "驗算平均皆 5；全距甲 2、乙 8。",
        "derivedAnswer": "乙組全距較大",
        "trustStoredAnswer": false
      },
      "explanation": "相同平均不代表相同散布。 兩組4、5、6與1、5、9的平均都為5，但全距分別為6－4＝2與9－1＝8，所以B較分散，證明同平均不保證同分布。A的資料都落在5附近，B則延伸到1與9，視覺上也符合全距比較。",
      "steps": [
        "算兩平均。",
        "算兩全距。",
        "比較。",
        "分別驗算兩組平均皆為5。",
        "再算全距2與8，用第二個指標區分分布。"
      ],
      "optionAnalysis": [
        {
          "choice": "乙組全距較大",
          "truth": true,
          "reason": "甲全距 2，乙全距 8。"
        },
        {
          "choice": "甲組平均較大",
          "truth": false,
          "reason": "平均皆 5。"
        },
        {
          "choice": "兩組資料完全相同",
          "truth": false,
          "reason": "分布明顯不同。"
        },
        {
          "choice": "甲組全距為 8",
          "truth": false,
          "reason": "甲全距 6-4=2。"
        }
      ],
      "misconceptionTarget": "只看平均便判相同 或看到平均同為5就認為兩組資料完全相同，忽略極端值與全距差異。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-from-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "乙全距 8。",
      "ambiguityAndBoundaryAudit": "資料完整。",
      "difficultyReason": "標準雙指標。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "490662fc86e121966e6b2f1d7c07bbd0335ee3277495aa6fa66550ae8c2e8da8"
    },
    {
      "questionId": "u09-s014-v005",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "data-comparison-context",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "甲組平均 80、中位數 80；乙組平均 80、中位數 70。哪一推論最合理？",
      "givenConditions": [
        "同一測量。"
      ],
      "target": "綜合平均與中位數解讀分布",
      "choices": [
        "甲組一定沒有任何極端值",
        "乙組每個人都低於甲組",
        "乙組可能受較高極端值拉高平均",
        "兩組分布一定相同"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "乙的平均 80 明顯高於中位數 70，合理懷疑高端值拉升；但只說可能。",
        "derivedAnswer": "乙組可能受較高極端值拉高平均",
        "trustStoredAnswer": false
      },
      "explanation": "比較平均與中位數差可提出保守的分布線索。 A的平均與中位數都是80；B平均80但中位數70，表示B的中央位置較低，平均可能被少數較大值向上拉高。這是合理可能性而非唯一分布。",
      "steps": [
        "比較每組兩代表值。",
        "限制語氣為可能。",
        "比較每組平均與中位數是否接近。",
        "由B平均高於中位數10推測高端值可能拉高平均，但不宣稱唯一原因。"
      ],
      "optionAnalysis": [
        {
          "choice": "甲組一定沒有任何極端值",
          "truth": false,
          "reason": "平均等於中位數不能證明沒有極端值。"
        },
        {
          "choice": "乙組每個人都低於甲組",
          "truth": false,
          "reason": "代表值不能推出逐筆比較。"
        },
        {
          "choice": "乙組可能受較高極端值拉高平均",
          "truth": true,
          "reason": "乙平均高於其中位數，可能有右側高值影響。"
        },
        {
          "choice": "兩組分布一定相同",
          "truth": false,
          "reason": "中位數不同表示分布不必相同。"
        }
      ],
      "misconceptionTarget": "把可能線索說成必然 或把平均80直接當成B組典型值，沒有利用中位數70揭露偏斜或高端極端值。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-from-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "無取位。",
      "ambiguityAndBoundaryAudit": "不主張唯一分布形狀。",
      "difficultyReason": "標準解讀。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "6a2e79db01eba2238519dd482a1101b855953de90d9e1f5dc21a901ead42c5a4"
    },
    {
      "questionId": "u09-s014-v006",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "data-comparison-context",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "兩班平均都 75。甲班全距 10，乙班全距 28。老師想找成績較一致的班級，應選哪班？",
      "givenConditions": [
        "同一考試。"
      ],
      "target": "依目的選代表值或散布量",
      "choices": [
        "乙班",
        "甲班",
        "兩班相同",
        "只看平均無法選，但也不能用全距"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "以全距作散布指標，10<28，甲較一致。",
        "derivedAnswer": "甲班",
        "trustStoredAnswer": false
      },
      "explanation": "決策目的若是穩定或一致，不能只看平均。 兩組平均相同時，中心位置無法區分；A全距10、B全距28，依全距判準A的波動較小，因此表現較一致。",
      "steps": [
        "辨認決策指標。",
        "比較全距。",
        "先確認平均相同只代表中心相同。",
        "比較全距10＜28，將『較一致』限定為依全距判斷。"
      ],
      "optionAnalysis": [
        {
          "choice": "乙班",
          "truth": false,
          "reason": "乙全距較大。"
        },
        {
          "choice": "甲班",
          "truth": true,
          "reason": "平均相同下，甲全距較小，分數較一致。"
        },
        {
          "choice": "兩班相同",
          "truth": false,
          "reason": "平均相同但散布不同。"
        },
        {
          "choice": "只看平均無法選，但也不能用全距",
          "truth": false,
          "reason": "全距正可提供一致性資訊。"
        }
      ],
      "misconceptionTarget": "只以平均作所有決策 或只因平均相同就說一致性也相同，忽略全距衡量的是另一個面向。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-from-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "甲班。",
      "ambiguityAndBoundaryAudit": "全距只反映兩端，但題目明示用現有資訊。",
      "difficultyReason": "標準情境。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "004e5518476035993b591db5a03b3eb704a10ce25b52049faff367186e550dd1"
    },
    {
      "questionId": "u09-s014-v007",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "data-comparison-context",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "甲組 5 筆平均 12，乙組 10 筆平均 15。合併平均與哪個數較接近？",
      "givenConditions": [
        "總數 15。"
      ],
      "target": "比較群組大小對合併代表值的影響",
      "choices": [
        "12",
        "13.5",
        "27",
        "15"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "合併平均 14，因乙權重較大所以靠近 15。",
        "derivedAnswer": "15",
        "trustStoredAnswer": false
      },
      "explanation": "群組比較也要考慮樣本大小。 合併平均為(5×12＋10×15)÷15＝210÷15＝14；因15分組人數是12分組的兩倍，結果14也較靠近15。用14×15＝210反向驗算，可還原兩組總和60＋150，分母與權重一致。",
      "steps": [
        "求兩組總和。",
        "算合併平均。",
        "比較距離。",
        "把兩組平均還原成總和60與150。",
        "除以總人數15得14，並檢查靠近較大組平均15。"
      ],
      "optionAnalysis": [
        {
          "choice": "12",
          "truth": false,
          "reason": "不是較接近 12。"
        },
        {
          "choice": "13.5",
          "truth": false,
          "reason": "13.5 是直接平均兩平均，距 15 為 1.5；實際是 14。"
        },
        {
          "choice": "27",
          "truth": false,
          "reason": "27 是相加。"
        },
        {
          "choice": "15",
          "truth": true,
          "reason": "乙組人數較多，合併平均=(60+150)/15=14，與 15 距 1、與 12 距 2。"
        }
      ],
      "misconceptionTarget": "直接平均群組平均 或把12與15直接平均為13.5，未考慮兩組人數5與10不同。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-from-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "合併平均 14；選項問較接近者。",
      "ambiguityAndBoundaryAudit": "14 與 15 距離唯一較小。",
      "difficultyReason": "進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a3785e19215619dc22977189403ff86e652fa5ac7b7bcb7c1d42d3d2979352b1"
    },
    {
      "questionId": "u09-s014-v008",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "data-comparison-context",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "甲資料平均 50、中位數 50、全距 4；乙資料平均 52、中位數 45、全距 40。若要描述『大多數人的典型水準』，哪個說法較穩健？",
      "givenConditions": [
        "同一量尺。"
      ],
      "target": "綜合多個統計量比較兩組",
      "choices": [
        "乙平均較高，所以每個人都較高",
        "甲的典型水準約 50；乙應優先看中位數 45 並注意大全距",
        "只比較全距即可決定典型水準",
        "兩組都只能用平均"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "綜合三指標：甲穩定在 50 附近；乙典型值較適合用中位數 45。",
        "derivedAnswer": "甲的典型水準約 50；乙應優先看中位數 45 並注意大全距",
        "trustStoredAnswer": false
      },
      "explanation": "代表值選擇需配合散布與極端值線索。 A平均與中位數皆50、全距4；B平均52、中位數45、全距40。B平均較高但中央值較低且離散大，因此不能只用平均宣稱B普遍較高。",
      "steps": [
        "比較中心指標一致性。",
        "比較全距。",
        "選保守敘述。",
        "並列平均、中位數、全距三項指標。",
        "尋找同時容納三項證據的敘述，排除『每個人』或『普遍』等過度結論。"
      ],
      "optionAnalysis": [
        {
          "choice": "乙平均較高，所以每個人都較高",
          "truth": false,
          "reason": "平均較高不代表每個人。"
        },
        {
          "choice": "甲的典型水準約 50；乙應優先看中位數 45 並注意大全距",
          "truth": true,
          "reason": "甲中心一致且散布小；乙平均與中位數差大且全距大。"
        },
        {
          "choice": "只比較全距即可決定典型水準",
          "truth": false,
          "reason": "全距不描述中心。"
        },
        {
          "choice": "兩組都只能用平均",
          "truth": false,
          "reason": "乙平均可能受高值影響。"
        }
      ],
      "misconceptionTarget": "單指標過度概括 或只挑B平均52這個有利指標，忽略中位數45與全距40提供的相反訊息。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-from-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "無取位。",
      "ambiguityAndBoundaryAudit": "只根據提供指標作保守結論。",
      "difficultyReason": "進階綜合。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d7b5231e072394e2edecbede46cc444ee062ee716726db558d03d78ffe5ef6c7"
    },
    {
      "questionId": "u09-s014-v009",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "data-comparison-context",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "甲班成績每人都加 5 分，乙班不變。原本兩班平均相同、全距也相同。調整後何者正確？",
      "givenConditions": [
        "每人同加 5。"
      ],
      "target": "分析整體調整對兩組指標的影響",
      "choices": [
        "甲班平均高 5 分，兩班全距仍相同",
        "甲班全距也多 5",
        "兩班平均仍相同",
        "乙班全距變小"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "甲每筆加 5，因此平均加 5；最大最小都加 5，差不變。",
        "derivedAnswer": "甲班平均高 5 分，兩班全距仍相同",
        "trustStoredAnswer": false
      },
      "explanation": "比較政策效果需分清位置與散布。 每筆資料都加5會使總和增加5n，平均因此增加5；最大值與最小值都加5，相減時抵消，所以全距不變。",
      "steps": [
        "套用平均平移性質。",
        "套用全距不變性質。",
        "以總和增加5n證明平均增加5。",
        "以(max＋5)－(min＋5)＝max－min證明全距不變。"
      ],
      "optionAnalysis": [
        {
          "choice": "甲班平均高 5 分，兩班全距仍相同",
          "truth": true,
          "reason": "整體平移使平均加 5，全距不變。"
        },
        {
          "choice": "甲班全距也多 5",
          "truth": false,
          "reason": "全距不受同幅加分影響。"
        },
        {
          "choice": "兩班平均仍相同",
          "truth": false,
          "reason": "甲平均已改變。"
        },
        {
          "choice": "乙班全距變小",
          "truth": false,
          "reason": "乙資料未變。"
        }
      ],
      "misconceptionTarget": "認為所有統計量都加 5 或認為資料整體上移會讓全距也增加5，沒有重新做最大值減最小值。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-from-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "分數單位。",
      "ambiguityAndBoundaryAudit": "未設上限截斷。",
      "difficultyReason": "進階性質整合。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "768bca7b345a6f61893305451cf7e31856aaa88ecde449e00523d283c1682c68"
    },
    {
      "questionId": "u09-s014-v010",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "data-comparison-context",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "兩家分店每日等待時間：甲平均 8 分、中位數 7 分、全距 30 分；乙平均 9 分、中位數 9 分、全距 8 分。顧客重視『穩定、不常遇到超久等待』，較適合選哪家？",
      "givenConditions": [
        "時間單位分鐘。"
      ],
      "target": "依實際需求比較兩組資料",
      "choices": [
        "甲店，因平均少 1 分",
        "兩店完全相同",
        "乙店",
        "資料不足，任何統計量都無用"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "甲中心略低但散布大；乙全距 8，較符合穩定需求。",
        "derivedAnswer": "乙店",
        "trustStoredAnswer": false
      },
      "explanation": "決策指標由使用者偏好決定。 A等待平均8、中位數7但全距30；B平均與中位數9、全距8。若目標是避免極長等待並重視穩定，B雖中心略高，尾端風險依全距較小。",
      "steps": [
        "圈出『穩定』。",
        "優先比較全距並參考中心。",
        "作限制性結論。",
        "先把決策目標翻譯成中心與離散的權衡。",
        "比較A、B三項指標後，說明選B依賴全距較小而非絕對保證。"
      ],
      "optionAnalysis": [
        {
          "choice": "甲店，因平均少 1 分",
          "truth": false,
          "reason": "甲平均略低但全距 30，可能有很長等待。"
        },
        {
          "choice": "兩店完全相同",
          "truth": false,
          "reason": "指標不同。"
        },
        {
          "choice": "乙店",
          "truth": true,
          "reason": "乙全距小且平均中位數一致，較穩定。"
        },
        {
          "choice": "資料不足，任何統計量都無用",
          "truth": false,
          "reason": "現有指標可支持保守選擇。"
        }
      ],
      "misconceptionTarget": "只選平均最低者 或只選平均8較小的A，沒有對照題目重視穩定與避免極長等待的決策條件。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-from-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 130,
      "unitAndRoundingCheck": "無取位。",
      "ambiguityAndBoundaryAudit": "不宣稱乙每次都較短，只說更符合穩定偏好。",
      "difficultyReason": "素養決策。",
      "literacyNecessityReason": "顧客的風險偏好決定應重視散布，而不只是最低平均。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f7472a316089a77a7402fd1da2a63c047b1a52e49d75274d56b082c29d52068c"
    },
    {
      "questionId": "u09-s014-v011",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "data-comparison-context",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "兩所學校公布平均閱讀量：甲 12 本、乙 10 本。甲樣本為閱讀社 20 人，乙樣本為隨機抽 200 人。若要比較全校閱讀量，何者最適當？",
      "givenConditions": [
        "樣本對象不同。"
      ],
      "target": "比較資料前檢查可比性",
      "choices": [
        "不能直接用這兩個平均比較全校，甲樣本偏向愛閱讀者",
        "甲校一定較高",
        "乙校一定較高",
        "樣本數較大就保證乙平均正確"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "比較母群前先檢查樣本來源；甲只選閱讀社，不能代表全校。",
        "derivedAnswer": "不能直接用這兩個平均比較全校，甲樣本偏向愛閱讀者",
        "trustStoredAnswer": false
      },
      "explanation": "資料比較的前提是測量與抽樣可比。 A校只調查閱讀社20人，B校隨機抽200人，樣本來源與大小不同；即使平均可算，代表性不一致，不能把差異直接當成兩校全體差異。",
      "steps": [
        "檢查兩校樣本定義。",
        "辨識選樣偏差。",
        "限制結論。",
        "先審查兩校樣本如何取得與涵蓋誰。",
        "確認抽樣不可比後限制外推，而不是只比較平均數字。"
      ],
      "optionAnalysis": [
        {
          "choice": "不能直接用這兩個平均比較全校，甲樣本偏向愛閱讀者",
          "truth": true,
          "reason": "甲抽樣對象不具代表性。"
        },
        {
          "choice": "甲校一定較高",
          "truth": false,
          "reason": "甲平均可能因選樣偏高。"
        },
        {
          "choice": "乙校一定較高",
          "truth": false,
          "reason": "也不能因此判乙一定較高。"
        },
        {
          "choice": "樣本數較大就保證乙平均正確",
          "truth": false,
          "reason": "大樣本仍需合理抽樣，但乙至少方法較佳。"
        }
      ],
      "misconceptionTarget": "看到平均就直接排序 或把兩個樣本平均當成母群確定值，忽略閱讀社便利樣本的選擇偏誤。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-from-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 130,
      "unitAndRoundingCheck": "無計算。",
      "ambiguityAndBoundaryAudit": "不否定甲樣本內平均，只否定外推。",
      "difficultyReason": "素養抽樣比較。",
      "literacyNecessityReason": "學校政策比較若樣本來源不同，平均高低沒有公平意義。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "781e7696adebb635f2d1297f56e76d8a5084fd2ec17b3e7efcabd5c63d1604c1"
    },
    {
      "questionId": "u09-s014-v012",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "data-comparison-context",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "兩款電池測試：A 平均 10.2 小時、中位數 10.1、全距 0.8；B 平均 10.5、中位數 9.8、全距 5.6。廠商稱 B『普遍較耐用』。哪個評估較合理？",
      "givenConditions": [
        "測試條件假設相同。"
      ],
      "target": "審核多指標產品宣稱",
      "choices": [
        "正確，平均高就代表普遍高",
        "錯誤，因 A 平均較低",
        "正確，因 B 全距較大",
        "證據不足；B 平均較高但中位數較低且全距大"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "比較三指標後，B 的平均優勢不足以支持『普遍』；需看原始分布或更多資料。",
        "derivedAnswer": "證據不足；B 平均較高但中位數較低且全距大",
        "trustStoredAnswer": false
      },
      "explanation": "宣傳用語的強度要與證據匹配。 A平均10.2、中位數10.1、全距0.8；B平均10.5但中位數9.8、全距5.6。B平均可能受高值影響，現有摘要不足以支持『一般都較久』。",
      "steps": [
        "比較平均。",
        "比較中位數。",
        "比較全距。",
        "評估『普遍』。",
        "比較兩組中心指標是否一致指向同一結論。",
        "因B平均與中位數方向不一致且全距大，保留分布與樣本資料需求。"
      ],
      "optionAnalysis": [
        {
          "choice": "正確，平均高就代表普遍高",
          "truth": false,
          "reason": "平均可能受少數高值拉高。"
        },
        {
          "choice": "錯誤，因 A 平均較低",
          "truth": false,
          "reason": "A 平均較低不能單獨否定所有情況。"
        },
        {
          "choice": "正確，因 B 全距較大",
          "truth": false,
          "reason": "大全距表示不穩定，不支持普遍。"
        },
        {
          "choice": "證據不足；B 平均較高但中位數較低且全距大",
          "truth": true,
          "reason": "『普遍』應考慮中位數與散布；B 指標互相衝突。"
        }
      ],
      "misconceptionTarget": "以單一平均過度推論 或只看B平均10.5最大就推論多數B電池較久，忽略中位數與全距。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-from-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 140,
      "unitAndRoundingCheck": "時間小時。",
      "ambiguityAndBoundaryAudit": "不判定哪款一定更好，只說宣稱未充分支持。",
      "difficultyReason": "素養綜合。",
      "literacyNecessityReason": "產品宣稱使用『普遍』，因此必須檢查中心與穩定性，而非只看平均。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "beca4df1036a9a4a2cbb4803cf64c767f4e0e4691bde3227467a004d22c64d0b"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u09-s014-cr001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "data-comparison-context",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "甲、乙兩組各有7筆資料。甲組為72、74、75、76、77、78、80；乙組為60、70、75、76、77、82、92。請分別求平均數、中位數與全距，並回答：(1) 哪組的典型中心較高？(2) 哪組依全距看較穩定？",
      "givenConditions": [],
      "target": "以多個統計量比較同筆數兩組資料，分開中心與分散。",
      "requiredWork": [
        "兩組各算平均、中位、全距。",
        "中心結論須說明採用哪個代表值。",
        "穩定結論依全距而非平均。"
      ],
      "standardSolution": [
        "甲總和532，平均=532/7=76；中位數第4筆=76；全距=80-72=8。",
        "乙總和532，平均=76；中位數=76；全距=92-60=32。",
        "兩組平均與中位數均相同，所以典型中心相同。",
        "甲組全距較小，依全距看較穩定。",
        "兩組總和皆532，所以平均皆76；排序後中位數也皆76，但全距8與32顯示B明顯較分散，結論應同時保留相同中心與不同離散。"
      ],
      "alternativeMethod": "平均可用以76為基準觀察偏差互相抵消；兩組皆總和532。",
      "reasoningSteps": [
        "確認資料已排序且筆數相同。",
        "分別計算總和與平均。",
        "取第4筆中位數。",
        "最大減最小求全距。",
        "把中心與穩定分開陳述。",
        "最後用同一套平均、中位數、全距定義比較兩組，避免選擇性報告單一指標。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "兩組平均76、中位76、全距8與32，以及中心相同、甲較穩定全部正確。"
        },
        {
          "score": 2,
          "criteria": "中心與穩定結論正確，但一個計算或過程小錯。"
        },
        {
          "score": 1,
          "criteria": "至少正確求出兩組中位數，或正確比較全距。"
        },
        {
          "score": 0,
          "criteria": "只看最大值判乙較好，且未計算代表值。"
        }
      ],
      "partialCreditRules": [
        "將『較穩定』表述為『依全距較集中』最佳；不可宣稱每筆都更接近平均。",
        "只答兩組平均相同但未求中位數，不完整。"
      ],
      "followThroughPolicy": "單一總和算錯不應影響中位數與全距的獨立得分。",
      "unitAndNotationRules": "分數以分；全距同樣以分。",
      "answerOnlyPolicy": "只列最終統計量與結論全對，最高2分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "兩組和皆532，均值76；第4均76；全距甲8、乙32。",
        "boundaryAndAmbiguityAudit": "兩組筆數相同、單位相同、資料已排序，可公平比較。",
        "rubricAlignmentEvidence": "六個統計量與兩個不同面向結論皆被涵蓋。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "2ad4dcd256ee9478a6160d7e68d8ee918b01031b0db14f0157cef233154bfad8",
      "commonErrors": [
        "只比平均76就說兩組表現完全相同，沒有再看中位數與全距。",
        "算全距時使用相鄰差或總和，未以最大值減最小值。"
      ]
    },
    {
      "questionId": "u09-s014-cr002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-comparison",
      "skillId": "data-comparison-context",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "甲公司10名員工平均月薪為55千元、中位數為42千元；乙公司10名員工平均月薪為50千元、中位數為48千元。另知甲公司有一位主管月薪170千元。若求職者想了解『多數一般員工較可能拿到的薪資』，應優先參考哪個統計量與哪家公司？請說明平均數差異可能的來源，並指出仍缺少哪類資料才能做更完整判斷。",
      "givenConditions": [],
      "target": "依偏態與極端值選擇代表值，做有限而非過度的實務結論。",
      "requiredWork": [
        "辨認甲的高薪極端值可能拉高平均。",
        "以中位數比較典型員工。",
        "提出至少一項仍需資料，如完整分布、職級或全距。"
      ],
      "standardSolution": [
        "若關心多數一般員工較可能拿到的薪資，應優先看中位數，因中位數較不受170千元主管薪資影響。",
        "乙公司中位數48千元高於甲公司42千元，因此依現有資料，乙公司的典型薪資較高。",
        "甲平均55千元高於乙50千元，可能主要由少數高薪者拉高，不能推論多數甲員工薪資較高。",
        "仍需完整薪資分布、職級人數、最低與最高薪資或全距等，才能判斷穩定性與同職位比較。",
        "若問題是典型員工薪資，應優先比較中位數：B為48高於A的42；A平均65可能受主管170拉高，仍需各職級分布、樣本數與完整薪資分布才能做更穩健判斷。"
      ],
      "alternativeMethod": "可用『平均與中位數差距』判斷甲偏右：55-42=13，大於乙的2，支持甲受高薪尾端影響。",
      "reasoningSteps": [
        "確定問題問典型個人而非公司總薪資。",
        "檢查極端值對平均的敏感性。",
        "比較中位數42與48。",
        "限制結論並列出資料缺口。",
        "把決策中的『典型』對應到中位數，再檢查平均與中位數落差是否可能由極端值造成。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "選中位數與乙公司、解釋170拉高甲平均，並提出具體資料缺口，結論語氣有限。"
        },
        {
          "score": 2,
          "criteria": "核心選擇與理由正確，但缺少資料需求或把結論說得過度肯定。"
        },
        {
          "score": 1,
          "criteria": "知道極端值會影響平均，或正確比較中位數48>42。"
        },
        {
          "score": 0,
          "criteria": "只因甲平均55較高就斷定多數甲員工薪資較高。"
        }
      ],
      "partialCreditRules": [
        "若主張需同職級比較，屬高品質補充。",
        "只說『要更多資料』而無具體項目，資料缺口部分不完整。"
      ],
      "followThroughPolicy": "本題主要評統計解釋，不因小數值抄寫錯誤全扣；但公司選擇須與所用中位數一致。",
      "unitAndNotationRules": "薪資以千元；可寫甲42千、乙48千。",
      "answerOnlyPolicy": "只寫『乙，中位數』，最高1分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "甲中位42、乙48；170遠高於多數，平均受拉升。現有證據支持乙典型值較高，不足以描述完整分布。",
        "boundaryAndAmbiguityAudit": "問題明確鎖定一般員工典型薪資，不是總薪資或最高薪資。",
        "rubricAlignmentEvidence": "代表值選擇、極端值機制、有限結論與資料需求共同受評。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "cde668fc90e106d4209347d4d80a581e247a50f7020a39b47c97950f5a71418b",
      "commonErrors": [
        "因A平均65高於B平均50就宣稱A典型薪資較高，忽略A的170高薪極端值。",
        "只回答選B卻未說明中位數48對42的比較，也未提出職級或完整分布等補充資料。"
      ]
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u09-s014-v001-semantic-r1",
      "questionId": "u09-s014-v001",
      "unitId": "u09",
      "skillId": "data-comparison-context",
      "independentRecalculation": "直接比較 75 與 70，乙較高。",
      "correctChoiceCheck": "獨立計算得到「乙組」，位於索引 1。",
      "distractorAudit": [
        "甲平均較低。",
        "兩平均不同。",
        "題目限定只比較平均，資料足夠。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「乙組」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「兩組資料與代表值比較」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "只比較中心，不推論散布。",
      "difficultyEvidence": "基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "fac56fc6502f0b16809afd49c1e503f359d261d4d7b9122802d9a801ea3bf142"
    },
    {
      "reviewId": "u09-s014-v002-semantic-r1",
      "questionId": "u09-s014-v002",
      "unitId": "u09",
      "skillId": "data-comparison-context",
      "independentRecalculation": "12>9，因此甲組的中央位置較高。",
      "correctChoiceCheck": "獨立計算得到「甲組」，位於索引 3。",
      "distractorAudit": [
        "乙中位數較低。",
        "兩者不同。",
        "中位數可支持中心位置比較。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「甲組」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「兩組資料與代表值比較」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不宣稱甲每筆都高。",
      "difficultyEvidence": "基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "edf0a165e183ba4067119c8550973407b43def84ff16e3e34c658f0869cdcace"
    },
    {
      "reviewId": "u09-s014-v003-semantic-r1",
      "questionId": "u09-s014-v003",
      "unitId": "u09",
      "skillId": "data-comparison-context",
      "independentRecalculation": "比較全距大小，較小者較集中。",
      "correctChoiceCheck": "獨立計算得到「甲組」，位於索引 2。",
      "distractorAudit": [
        "乙全距較大。",
        "數值不同。",
        "全距雖粗略但可作此比較。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「甲組」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「兩組資料與代表值比較」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "限定『以全距衡量』。",
      "difficultyEvidence": "基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "1a9ac1351d52213deb30bd1978035a09e6c41b63df42d8943013a7cd275490ad"
    },
    {
      "reviewId": "u09-s014-v004-semantic-r1",
      "questionId": "u09-s014-v004",
      "unitId": "u09",
      "skillId": "data-comparison-context",
      "independentRecalculation": "驗算平均皆 5；全距甲 2、乙 8。",
      "correctChoiceCheck": "獨立計算得到「乙組全距較大」，位於索引 0。",
      "distractorAudit": [
        "平均皆 5。",
        "分布明顯不同。",
        "甲全距 6-4=2。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「乙組全距較大」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「兩組資料與代表值比較」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "資料完整。",
      "difficultyEvidence": "標準雙指標。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "3ab554814ae5cedc95108f6af183f401968684da0d93db5ce95cc0c153340368"
    },
    {
      "reviewId": "u09-s014-v005-semantic-r1",
      "questionId": "u09-s014-v005",
      "unitId": "u09",
      "skillId": "data-comparison-context",
      "independentRecalculation": "乙的平均 80 明顯高於中位數 70，合理懷疑高端值拉升；但只說可能。",
      "correctChoiceCheck": "獨立計算得到「乙組可能受較高極端值拉高平均」，位於索引 2。",
      "distractorAudit": [
        "平均等於中位數不能證明沒有極端值。",
        "代表值不能推出逐筆比較。",
        "中位數不同表示分布不必相同。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「乙組可能受較高極端值拉高平均」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「兩組資料與代表值比較」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不主張唯一分布形狀。",
      "difficultyEvidence": "標準解讀。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "ed6ae5f26b577123369fbf5d5a78ffb5ffd64ca27d92ce76aac3d56a90bcf80e"
    },
    {
      "reviewId": "u09-s014-v006-semantic-r1",
      "questionId": "u09-s014-v006",
      "unitId": "u09",
      "skillId": "data-comparison-context",
      "independentRecalculation": "以全距作散布指標，10<28，甲較一致。",
      "correctChoiceCheck": "獨立計算得到「甲班」，位於索引 1。",
      "distractorAudit": [
        "乙全距較大。",
        "平均相同但散布不同。",
        "全距正可提供一致性資訊。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「甲班」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「兩組資料與代表值比較」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "全距只反映兩端，但題目明示用現有資訊。",
      "difficultyEvidence": "標準情境。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "8d66169e740db2f278d67b4ac05b8d118d076ccf46abaca96736d27def63c25b"
    },
    {
      "reviewId": "u09-s014-v007-semantic-r1",
      "questionId": "u09-s014-v007",
      "unitId": "u09",
      "skillId": "data-comparison-context",
      "independentRecalculation": "合併平均 14，因乙權重較大所以靠近 15。",
      "correctChoiceCheck": "獨立計算得到「15」，位於索引 3。",
      "distractorAudit": [
        "不是較接近 12。",
        "13.5 是直接平均兩平均，距 15 為 1.5；實際是 14。",
        "27 是相加。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「15」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「兩組資料與代表值比較」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "14 與 15 距離唯一較小。",
      "difficultyEvidence": "進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "4383d9cf32213bcaf3439b23e68729f4fbec3f745840414deafbc9630645a8c9"
    },
    {
      "reviewId": "u09-s014-v008-semantic-r1",
      "questionId": "u09-s014-v008",
      "unitId": "u09",
      "skillId": "data-comparison-context",
      "independentRecalculation": "綜合三指標：甲穩定在 50 附近；乙典型值較適合用中位數 45。",
      "correctChoiceCheck": "獨立計算得到「甲的典型水準約 50；乙應優先看中位數 45 並注意大全距」，位於索引 1。",
      "distractorAudit": [
        "平均較高不代表每個人。",
        "全距不描述中心。",
        "乙平均可能受高值影響。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「甲的典型水準約 50；乙應優先看中位數 45 並注意大全距」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「兩組資料與代表值比較」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "只根據提供指標作保守結論。",
      "difficultyEvidence": "進階綜合。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "8db6adead04d8b9dd371b9cb2cb286f18cd72fcbfede321a45daf5c4d18bbfd3"
    },
    {
      "reviewId": "u09-s014-v009-semantic-r1",
      "questionId": "u09-s014-v009",
      "unitId": "u09",
      "skillId": "data-comparison-context",
      "independentRecalculation": "甲每筆加 5，因此平均加 5；最大最小都加 5，差不變。",
      "correctChoiceCheck": "獨立計算得到「甲班平均高 5 分，兩班全距仍相同」，位於索引 0。",
      "distractorAudit": [
        "全距不受同幅加分影響。",
        "甲平均已改變。",
        "乙資料未變。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「甲班平均高 5 分，兩班全距仍相同」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「兩組資料與代表值比較」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "未設上限截斷。",
      "difficultyEvidence": "進階性質整合。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "b86fc1e054d34c0d1c8d6565bb8d4c1a8934a67ff56e163c035991030411b6e6"
    },
    {
      "reviewId": "u09-s014-v010-semantic-r1",
      "questionId": "u09-s014-v010",
      "unitId": "u09",
      "skillId": "data-comparison-context",
      "independentRecalculation": "甲中心略低但散布大；乙全距 8，較符合穩定需求。",
      "correctChoiceCheck": "獨立計算得到「乙店」，位於索引 2。",
      "distractorAudit": [
        "甲平均略低但全距 30，可能有很長等待。",
        "指標不同。",
        "現有指標可支持保守選擇。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「乙店」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「兩組資料與代表值比較」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不宣稱乙每次都較短，只說更符合穩定偏好。",
      "difficultyEvidence": "素養決策。",
      "literacyEvidence": "顧客的風險偏好決定應重視散布，而不只是最低平均。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "a5cf9bce7f44cd7adb65ff201be53e00d786354f467ac0e1c23f7d1d6884ea55"
    },
    {
      "reviewId": "u09-s014-v011-semantic-r1",
      "questionId": "u09-s014-v011",
      "unitId": "u09",
      "skillId": "data-comparison-context",
      "independentRecalculation": "比較母群前先檢查樣本來源；甲只選閱讀社，不能代表全校。",
      "correctChoiceCheck": "獨立計算得到「不能直接用這兩個平均比較全校，甲樣本偏向愛閱讀者」，位於索引 0。",
      "distractorAudit": [
        "甲平均可能因選樣偏高。",
        "也不能因此判乙一定較高。",
        "大樣本仍需合理抽樣，但乙至少方法較佳。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「不能直接用這兩個平均比較全校，甲樣本偏向愛閱讀者」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「兩組資料與代表值比較」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不否定甲樣本內平均，只否定外推。",
      "difficultyEvidence": "素養抽樣比較。",
      "literacyEvidence": "學校政策比較若樣本來源不同，平均高低沒有公平意義。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "30042298280ccab458caa77995aae110da59279c5c1481806a6efad961afcb0c"
    },
    {
      "reviewId": "u09-s014-v012-semantic-r1",
      "questionId": "u09-s014-v012",
      "unitId": "u09",
      "skillId": "data-comparison-context",
      "independentRecalculation": "比較三指標後，B 的平均優勢不足以支持『普遍』；需看原始分布或更多資料。",
      "correctChoiceCheck": "獨立計算得到「證據不足；B 平均較高但中位數較低且全距大」，位於索引 3。",
      "distractorAudit": [
        "平均可能受少數高值拉高。",
        "A 平均較低不能單獨否定所有情況。",
        "大全距表示不穩定，不支持普遍。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「證據不足；B 平均較高但中位數較低且全距大」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「兩組資料與代表值比較」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不判定哪款一定更好，只說宣稱未充分支持。",
      "difficultyEvidence": "素養綜合。",
      "literacyEvidence": "產品宣稱使用『普遍』，因此必須檢查中心與穩定性，而非只看平均。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "9e9decea0180c5cf3869122308e97952e1c90f4438946b3ee5dccdf36724c3d7"
    }
  ],
  "drawingSpecs": []
};
