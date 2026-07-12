// Emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u22-s009-lecture-r1",
    "unitId": "u22",
    "numericUnitId": 22,
    "topicId": "u22-quartiles",
    "skillId": "box-plot-compare",
    "lockedSkillOrder": 9,
    "title": "兩盒狀圖比較：以中位數與IQR與全距與偏態比較兩組資料。",
    "originalLockedTitle": "兩盒狀圖比較",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能在同尺度下比較兩盒狀圖。",
      "能同時比較中位數、IQR與全距。",
      "能辨識箱體重疊與端點重疊。",
      "能寫出不超過證據的比較句。"
    ],
    "prerequisiteSkillIds": [
      "range-iqr-compare"
    ],
    "prerequisiteBridge": "整合前面所有四分位與盒狀圖技能。",
    "glossary": [
      {
        "term": "中心位置比較",
        "definition": "以中位數高低比較典型中心。"
      },
      {
        "term": "中段分散比較",
        "definition": "以IQR大小比較中間50%。"
      },
      {
        "term": "整體分散比較",
        "definition": "以全距比較端點跨度。"
      },
      {
        "term": "重疊",
        "definition": "兩組位置區間交錯，個體可能互有高低。"
      }
    ],
    "notation": [
      {
        "symbol": "Δ中位數=Q2甲-Q2乙",
        "meaning": "中心差。"
      },
      {
        "symbol": "IQR甲與IQR乙",
        "meaning": "箱寬比較。"
      },
      {
        "symbol": "R甲與R乙",
        "meaning": "總跨度比較。"
      }
    ],
    "conceptNarrative": [
      "比較前先確定兩圖數軸方向、單位與刻度相同。",
      "中位數較高只代表中心位置較高；若分布重疊，不能說每一筆都高。",
      "箱體完全在另一箱體右側表示Q1甲>Q3乙，但鬚線仍可能重疊。",
      "相同五數摘要不代表原始資料或筆數相同。",
      "實務決策可依需求在中心、穩定度與極端風險間取捨，但要說明指標。"
    ],
    "formalDefinitions": [
      {
        "name": "雙重條件比較",
        "statement": "同時滿足例如中心較高且全距較小。"
      },
      {
        "name": "保守結論",
        "statement": "使用「中位數較高」「較可能較穩定」而非絕對個體敘述。"
      }
    ],
    "formulas": [
      {
        "formula": "IQR=箱寬",
        "conditions": [
          "同尺度圖可直接比較數值。"
        ],
        "meaning": "同尺度圖可直接比較數值。"
      },
      {
        "formula": "R=max-min",
        "conditions": [
          "由兩端計算。"
        ],
        "meaning": "由兩端計算。"
      }
    ],
    "nonApplicableCases": [
      "不同刻度不可直接比視覺寬度。",
      "不能由盒狀圖比較平均數。",
      "不能由中位數比較推出個體勝率。",
      "不能把樣本數相同當分布完整資訊。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "同尺度檢查",
        "check": "必要時換算。"
      },
      {
        "step": 2,
        "instruction": "比中心",
        "check": "記中位數。"
      },
      {
        "step": 3,
        "instruction": "比中段",
        "check": "算IQR。"
      },
      {
        "step": 4,
        "instruction": "比整體",
        "check": "算全距與看重疊。"
      },
      {
        "step": 5,
        "instruction": "依題目需求下結論",
        "check": "附上不能推出的事項。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "甲五數5、10、14、18、25；乙6、9、15、21、24",
        "solutionSteps": [
          "乙中位高1且IQR大4。"
        ],
        "answer": "乙中位高1且IQR大4。"
      },
      {
        "exampleId": "L2",
        "prompt": "A 0、10、11、12、40；B 5、8、11、14、17",
        "solutionSteps": [
          "中位相同；A IQR小、全距大。"
        ],
        "answer": "中位相同；A IQR小、全距大。"
      },
      {
        "exampleId": "L3",
        "prompt": "甲每格2、箱4格；乙每格5、箱2格",
        "solutionSteps": [
          "IQR甲8、乙10。"
        ],
        "answer": "IQR甲8、乙10。"
      },
      {
        "exampleId": "L4",
        "prompt": "箱體完全分離但鬚線重疊",
        "solutionSteps": [
          "只能說中間50%位置分離。"
        ],
        "answer": "只能說中間50%位置分離。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "只看中位數便選「全面較好」",
        "why": "還要看分散與任務需求。",
        "correction": "還要看分散與任務需求。"
      },
      {
        "mistake": "只看圖上格數",
        "why": "先換成實際刻度。",
        "correction": "先換成實際刻度。"
      },
      {
        "mistake": "相同盒狀圖就說資料相同",
        "why": "摘要遺失內部細節。",
        "correction": "摘要遺失內部細節。"
      },
      {
        "mistake": "把重疊解讀為沒有差異",
        "why": "中心或分散仍可不同。",
        "correction": "中心或分散仍可不同。"
      }
    ],
    "selfCheck": [
      "單位刻度是否一致？",
      "三個指標是否分開比較？",
      "是否把群體結論誇成個體必然？",
      "決策需求是否明確？"
    ],
    "summary": [
      "比較兩盒狀圖要同時看中心、中段與端點。",
      "不同指標可能互有優勢。",
      "重疊使個體結論不確定。",
      "報告句子需與證據強度一致。"
    ],
    "connections": {
      "previous": "整合前面所有四分位與盒狀圖技能。",
      "next": [
        "下一主題進入機率；統計摘要仍會在綜合素養題中使用。"
      ]
    },
    "figureReferences": [
      "fig-u22-boxplot-compare"
    ],
    "figureAccessibility": [
      {
        "figureId": "fig-u22-boxplot-compare",
        "altText": "同一數軸上的甲乙兩個水平盒狀圖。甲五數4、10、15、18、24；乙五數6、9、15、22、25。"
      }
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u22-s009-v001",
        "u22-s009-v002",
        "u22-s009-v003",
        "u22-s009-v004",
        "u22-s009-v005",
        "u22-s009-v006",
        "u22-s009-v007",
        "u22-s009-v008",
        "u22-s009-v009",
        "u22-s009-v010",
        "u22-s009-v011",
        "u22-s009-v012"
      ],
      "constructedResponseIds": [
        "u22-s009-cr001",
        "u22-s009-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "skillSpecificReviewEvidence": "以三組五數逐項重算中位數、IQR與全距；所有結論均移除「每位」「一定」等盒狀圖無法支持的措辭。",
      "futureKnowledgeCheck": "pass; all methods use this skill or declared prerequisites only",
      "contentBoundary": "以中位數、IQR、全距與偏態比較兩組資料。",
      "reviewVersion": "human-lecture-review-u22-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "32becafdc25f6c61d21196528848f8e0d7ba72ab6cca4bb14e5dabe792d2f478"
  },
  "mcQuestions": [
    {
      "questionId": "u22-s009-v001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-compare",
      "lockedSkillOrder": 9,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "甲盒狀圖中位數20，乙中位數24。能直接確定什麼？",
      "text": "甲盒狀圖中位數20，乙中位數24。能直接確定什麼？",
      "givenConditions": [],
      "target": "比較中心位置",
      "choices": [
        "乙的中位位置較高",
        "乙每筆資料都較大",
        "乙平均數較高",
        "乙資料筆數較多"
      ],
      "answerIndex": 0,
      "independentSolution": "只能確定乙的中位數24大於甲的20，也就是中心位置較高。",
      "explanation": "只能確定乙的中位數24大於甲的20，也就是中心位置較高。",
      "steps": [
        "比較中位數。",
        "限制結論範圍。"
      ],
      "optionAnalysis": [
        {
          "choice": "乙的中位位置較高",
          "truth": true,
          "reason": "正確。獨立重算：只能確定乙的中位數24大於甲的20，也就是中心位置較高。"
        },
        {
          "choice": "乙每筆資料都較大",
          "truth": false,
          "reason": "兩分布可能重疊。"
        },
        {
          "choice": "乙平均數較高",
          "truth": false,
          "reason": "中位數不決定平均數。"
        },
        {
          "choice": "乙資料筆數較多",
          "truth": false,
          "reason": "盒狀圖不顯示筆數。"
        }
      ],
      "misconceptionTarget": "由中位數比較推成逐筆比較。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "兩圖需用相同尺度。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：比較中心位置",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "比較中心位置",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "26909232d2dc84b3620ce0a632c658e7d1d450e71795cb76a6993bcd2f1914e1"
    },
    {
      "questionId": "u22-s009-v002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-compare",
      "lockedSkillOrder": 9,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "甲IQR=5，乙IQR=9。哪組中間50%較集中？",
      "text": "甲IQR=5，乙IQR=9。哪組中間50%較集中？",
      "givenConditions": [],
      "target": "比較中段集中程度",
      "choices": [
        "乙",
        "一樣",
        "無法判斷",
        "甲"
      ],
      "answerIndex": 3,
      "independentSolution": "IQR越小，中間50%跨度越小；5<9，所以甲較集中。",
      "explanation": "IQR越小，中間50%跨度越小；5<9，所以甲較集中。",
      "steps": [
        "比較IQR大小。"
      ],
      "optionAnalysis": [
        {
          "choice": "乙",
          "truth": false,
          "reason": "乙IQR較大。"
        },
        {
          "choice": "一樣",
          "truth": false,
          "reason": "IQR不同。"
        },
        {
          "choice": "無法判斷",
          "truth": false,
          "reason": "IQR正是中間50%跨度。"
        },
        {
          "choice": "甲",
          "truth": true,
          "reason": "正確。獨立重算：IQR越小，中間50%跨度越小；5<9，所以甲較集中。"
        }
      ],
      "misconceptionTarget": "把較大的IQR誤作資料較多。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "只針對中間50%。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：比較中段集中程度",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "比較中段集中程度",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "f5f81f7cd30fadf2c60de58abe3c3547339efff94a581802616a7b7165395f78"
    },
    {
      "questionId": "u22-s009-v003",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-compare",
      "lockedSkillOrder": 9,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "甲全距30，乙全距18。若只比較整體跨度，哪組較大？",
      "text": "甲全距30，乙全距18。若只比較整體跨度，哪組較大？",
      "givenConditions": [],
      "target": "比較整體跨度",
      "choices": [
        "乙",
        "甲",
        "相同",
        "需知道中位數"
      ],
      "answerIndex": 1,
      "independentSolution": "30>18，所以甲整體從最小到最大跨度較大。",
      "explanation": "30>18，所以甲整體從最小到最大跨度較大。",
      "steps": [
        "比較全距。"
      ],
      "optionAnalysis": [
        {
          "choice": "乙",
          "truth": false,
          "reason": "18小於30。"
        },
        {
          "choice": "甲",
          "truth": true,
          "reason": "正確。獨立重算：30>18，所以甲整體從最小到最大跨度較大。"
        },
        {
          "choice": "相同",
          "truth": false,
          "reason": "數值不同。"
        },
        {
          "choice": "需知道中位數",
          "truth": false,
          "reason": "全距比較不需中位數。"
        }
      ],
      "misconceptionTarget": "把中心量當作全距必要條件。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "兩組使用同單位。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：比較整體跨度",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "比較整體跨度",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "3a99fe794f3e24142d3517578d4797582c14d83e09507cb38250af482c7db343"
    },
    {
      "questionId": "u22-s009-v004",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-compare",
      "lockedSkillOrder": 9,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "甲五數 5、10、14、18、25；乙五數 6、9、15、21、24。下列何者正確？",
      "text": "甲五數 5、10、14、18、25；乙五數 6、9、15、21、24。下列何者正確？",
      "givenConditions": [],
      "target": "比較中心與IQR",
      "choices": [
        "甲中位數較高且IQR較大",
        "乙中位數較高但IQR較小",
        "乙中位數較高且IQR較大",
        "兩組中位數與IQR都相同"
      ],
      "answerIndex": 2,
      "independentSolution": "甲中位14、IQR8；乙中位15、IQR12，所以乙中心略高但中段較分散。",
      "explanation": "甲中位14、IQR8；乙中位15、IQR12，所以乙中心略高但中段較分散。",
      "steps": [
        "分別算中心與IQR。"
      ],
      "optionAnalysis": [
        {
          "choice": "甲中位數較高且IQR較大",
          "truth": false,
          "reason": "甲中位14<15，IQR8<12。"
        },
        {
          "choice": "乙中位數較高但IQR較小",
          "truth": false,
          "reason": "乙IQR12較大。"
        },
        {
          "choice": "乙中位數較高且IQR較大",
          "truth": true,
          "reason": "正確。獨立重算：甲中位14、IQR8；乙中位15、IQR12，所以乙中心略高但中段較分散。"
        },
        {
          "choice": "兩組中位數與IQR都相同",
          "truth": false,
          "reason": "均不同。"
        }
      ],
      "misconceptionTarget": "只看五數端點而未計算箱寬。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "兩組五數同尺度。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：比較中心與IQR",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "比較中心與IQR",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "88d162ea2aef3fca0b979f5f0442455666c42f5bdeee0464ff91f0751976b250"
    },
    {
      "questionId": "u22-s009-v005",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-compare",
      "lockedSkillOrder": 9,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "兩盒狀圖中，甲的箱體完全位於乙箱體右側。可保守地說什麼？",
      "text": "兩盒狀圖中，甲的箱體完全位於乙箱體右側。可保守地說什麼？",
      "givenConditions": [],
      "target": "解讀箱體相對位置",
      "choices": [
        "甲每筆資料都大於乙",
        "甲的Q1大於乙的Q3",
        "甲平均數一定較大",
        "甲全距一定較小"
      ],
      "answerIndex": 1,
      "independentSolution": "箱體完全在右側表示甲箱體左端Q1仍大於乙箱體右端Q3。",
      "explanation": "箱體完全在右側表示甲箱體左端Q1仍大於乙箱體右端Q3。",
      "steps": [
        "把箱體端點轉成不等式。"
      ],
      "optionAnalysis": [
        {
          "choice": "甲每筆資料都大於乙",
          "truth": false,
          "reason": "鬚線可能重疊。"
        },
        {
          "choice": "甲的Q1大於乙的Q3",
          "truth": true,
          "reason": "正確。獨立重算：箱體完全在右側表示甲箱體左端Q1仍大於乙箱體右端Q3。"
        },
        {
          "choice": "甲平均數一定較大",
          "truth": false,
          "reason": "盒狀圖不給平均數。"
        },
        {
          "choice": "甲全距一定較小",
          "truth": false,
          "reason": "箱體位置不決定全距。"
        }
      ],
      "misconceptionTarget": "把箱體不重疊誤成所有資料不重疊。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "「完全位於右側」指不接觸；若接觸則應為≥。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：解讀箱體相對位置",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "解讀箱體相對位置",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "8a20d18c3755c394a09876ccc169c6f36ecb74ea454fe2b766527db24ec0e4e5"
    },
    {
      "questionId": "u22-s009-v006",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-compare",
      "lockedSkillOrder": 9,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "甲乙中位數相同，甲箱寬較小，乙鬚線總長較小。哪個敘述最精確？",
      "text": "甲乙中位數相同，甲箱寬較小，乙鬚線總長較小。哪個敘述最精確？",
      "givenConditions": [],
      "target": "同時比較箱內與箱外",
      "choices": [
        "甲整體一定較集中",
        "乙中段較集中",
        "兩組分布完全相同",
        "甲中段較集中，乙端點相對中段較近"
      ],
      "answerIndex": 3,
      "independentSolution": "甲IQR較小，所以中段較集中；乙箱外兩鬚總長較小，表示端點距Q1、Q3總和較小。",
      "explanation": "甲IQR較小，所以中段較集中；乙箱外兩鬚總長較小，表示端點距Q1、Q3總和較小。",
      "steps": [
        "分別解讀箱寬與鬚長。",
        "不強行給單一整體排名。"
      ],
      "optionAnalysis": [
        {
          "choice": "甲整體一定較集中",
          "truth": false,
          "reason": "乙鬚線資訊可能使全距關係不同。"
        },
        {
          "choice": "乙中段較集中",
          "truth": false,
          "reason": "乙箱寬較大。"
        },
        {
          "choice": "兩組分布完全相同",
          "truth": false,
          "reason": "箱寬與鬚線不同。"
        },
        {
          "choice": "甲中段較集中，乙端點相對中段較近",
          "truth": true,
          "reason": "正確。獨立重算：甲IQR較小，所以中段較集中；乙箱外兩鬚總長較小，表示端點距Q1、Q3總和較小。"
        }
      ],
      "misconceptionTarget": "把不同局部特徵合成「一定較集中」。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "鬚線總長小不必然使乙全距小，還要與箱寬合併。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：同時比較箱內與箱外",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "同時比較箱內與箱外",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "8673ea1ef6711bc628ddde70798bfb299f526e925d2baa3621d54bacf4a0fbd6"
    },
    {
      "questionId": "u22-s009-v007",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-compare",
      "lockedSkillOrder": 9,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "A五數為0、10、11、12、40；B為5、8、11、14、17。哪個描述正確？",
      "text": "A五數為0、10、11、12、40；B為5、8、11、14、17。哪個描述正確？",
      "givenConditions": [],
      "target": "多指標比較兩盒狀圖",
      "choices": [
        "A中位數相同但IQR較小、全距較大",
        "A的IQR與全距都較大",
        "B中位數較高",
        "B的全距較大"
      ],
      "answerIndex": 0,
      "independentSolution": "A：中位11、IQR2、全距40；B：中位11、IQR6、全距12。",
      "explanation": "A：中位11、IQR2、全距40；B：中位11、IQR6、全距12。",
      "steps": [
        "算A三項。",
        "算B三項。",
        "比較。"
      ],
      "optionAnalysis": [
        {
          "choice": "A中位數相同但IQR較小、全距較大",
          "truth": true,
          "reason": "正確。獨立重算：A：中位11、IQR2、全距40；B：中位11、IQR6、全距12。"
        },
        {
          "choice": "A的IQR與全距都較大",
          "truth": false,
          "reason": "A IQR2小於B6。"
        },
        {
          "choice": "B中位數較高",
          "truth": false,
          "reason": "兩者中位數都是11。"
        },
        {
          "choice": "B的全距較大",
          "truth": false,
          "reason": "B全距12小於A40。"
        }
      ],
      "misconceptionTarget": "只看一個圖形寬度。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "摘要不能說明A端點是否為離群，需原資料或規則。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：多指標比較兩盒狀圖",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "多指標比較兩盒狀圖",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "cdad1d063948cd5d6b1c0a5fec43d7580ca0d37bebb524a4f1254aebf2fdd1eb"
    },
    {
      "questionId": "u22-s009-v008",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-compare",
      "lockedSkillOrder": 9,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "若兩組盒狀圖五數每一項都相同，下列何者仍可能不同？",
      "text": "若兩組盒狀圖五數每一項都相同，下列何者仍可能不同？",
      "givenConditions": [],
      "target": "理解盒狀圖資訊限制",
      "choices": [
        "中位數",
        "IQR",
        "原始資料的分布細節與筆數",
        "全距"
      ],
      "answerIndex": 2,
      "independentSolution": "五數摘要相同會使中位數、IQR、全距相同，但箱內各筆位置、重複次數與樣本數仍可能不同。",
      "explanation": "五數摘要相同會使中位數、IQR、全距相同，但箱內各筆位置、重複次數與樣本數仍可能不同。",
      "steps": [
        "辨認摘要壓縮資訊。"
      ],
      "optionAnalysis": [
        {
          "choice": "中位數",
          "truth": false,
          "reason": "五數相同已固定。"
        },
        {
          "choice": "IQR",
          "truth": false,
          "reason": "Q1、Q3相同。"
        },
        {
          "choice": "原始資料的分布細節與筆數",
          "truth": true,
          "reason": "正確。獨立重算：五數摘要相同會使中位數、IQR、全距相同，但箱內各筆位置、重複次數與樣本數仍可能不同。"
        },
        {
          "choice": "全距",
          "truth": false,
          "reason": "最小、最大相同。"
        }
      ],
      "misconceptionTarget": "以為相同盒狀圖代表原資料完全相同。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "標準盒狀圖通常不編碼樣本數。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：理解盒狀圖資訊限制",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "理解盒狀圖資訊限制",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "196c789497c1fff736297939be25afa2180b742a8bd84dd892891b963acca92c"
    },
    {
      "questionId": "u22-s009-v009",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-compare",
      "lockedSkillOrder": 9,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "兩組資料使用不同數軸刻度：甲每格2單位，乙每格5單位。圖上甲箱寬4格、乙箱寬2格。哪組IQR較大？",
      "text": "兩組資料使用不同數軸刻度：甲每格2單位，乙每格5單位。圖上甲箱寬4格、乙箱寬2格。哪組IQR較大？",
      "givenConditions": [],
      "target": "處理不同刻度的盒狀圖",
      "choices": [
        "甲",
        "相同",
        "無法判斷",
        "乙"
      ],
      "answerIndex": 3,
      "independentSolution": "甲IQR=4×2=8；乙IQR=2×5=10，所以乙較大。",
      "explanation": "甲IQR=4×2=8；乙IQR=2×5=10，所以乙較大。",
      "steps": [
        "先換算格數成數值。",
        "比較8與10。"
      ],
      "optionAnalysis": [
        {
          "choice": "甲",
          "truth": false,
          "reason": "甲IQR=8，小於乙10。"
        },
        {
          "choice": "相同",
          "truth": false,
          "reason": "格數不可直接比較。"
        },
        {
          "choice": "無法判斷",
          "truth": false,
          "reason": "刻度已提供，可換算。"
        },
        {
          "choice": "乙",
          "truth": true,
          "reason": "正確。獨立重算：甲IQR=4×2=8；乙IQR=2×5=10，所以乙較大。"
        }
      ],
      "misconceptionTarget": "直接比較圖上格數而忽略刻度。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "單位相同但每格尺度不同。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：處理不同刻度的盒狀圖",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "處理不同刻度的盒狀圖",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "11d6d017f80422e21ed1d16504b214af3d32724939452ac7a62cfce86cac8c1d"
    },
    {
      "questionId": "u22-s009-v010",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-compare",
      "lockedSkillOrder": 9,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "兩班同一份測驗盒狀圖如圖：甲五數50、62、70、78、94；乙55、66、74、80、88。若要兼顧「典型成績較高」與「總體極端差距較小」，哪班較符合？",
      "text": "兩班同一份測驗盒狀圖如圖：甲五數50、62、70、78、94；乙55、66、74、80、88。若要兼顧「典型成績較高」與「總體極端差距較小」，哪班較符合？",
      "givenConditions": [],
      "target": "依雙重條件比較班級",
      "choices": [
        "乙班",
        "甲班",
        "兩班相同",
        "資料不足"
      ],
      "answerIndex": 0,
      "independentSolution": "乙中位74>甲70，且乙全距33<甲44，因此兩個指定條件都符合。",
      "explanation": "乙中位74>甲70，且乙全距33<甲44，因此兩個指定條件都符合。",
      "steps": [
        "比較中位數。",
        "比較最大減最小。",
        "選乙。"
      ],
      "optionAnalysis": [
        {
          "choice": "乙班",
          "truth": true,
          "reason": "正確。獨立重算：乙中位74>甲70，且乙全距33<甲44，因此兩個指定條件都符合。"
        },
        {
          "choice": "甲班",
          "truth": false,
          "reason": "甲中位數較低且全距較大。"
        },
        {
          "choice": "兩班相同",
          "truth": false,
          "reason": "中心與全距都不同。"
        },
        {
          "choice": "資料不足",
          "truth": false,
          "reason": "中位數與全距已足以依指定條件比較。"
        }
      ],
      "misconceptionTarget": "只比較最高分或Q3。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "estimatedTimeSec": 180,
      "unitCheck": "兩班使用同一份滿分相同的測驗。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "不能由此說乙每位學生都較高。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：依雙重條件比較班級",
      "literacyContextNecessity": "班級評估需同時看典型表現與整體落差。",
      "visualMode": "figure",
      "figureId": "fig-u22-boxplot-compare",
      "drawingSpecReference": "fig-u22-boxplot-compare",
      "authoringIntent": "依雙重條件比較班級",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "efba5842519dc94cac38fe1dd10431fc03e87fde0eac22bec2b87c1a7ec4531a"
    },
    {
      "questionId": "u22-s009-v011",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-compare",
      "lockedSkillOrder": 9,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "甲乙兩台機器加工時間盒狀圖：甲中位數較短但IQR較大；乙中位數稍長但IQR較小。若訂單最重視準時一致，何者較合理？",
      "text": "甲乙兩台機器加工時間盒狀圖：甲中位數較短但IQR較大；乙中位數稍長但IQR較小。若訂單最重視準時一致，何者較合理？",
      "givenConditions": [],
      "target": "以需求選擇盒狀圖指標",
      "choices": [
        "甲一定較好，因中位數短",
        "兩者完全相同",
        "乙較可能符合一致性需求",
        "無法作任何比較"
      ],
      "answerIndex": 2,
      "independentSolution": "一致性主要關注分散，乙IQR較小較穩；但若有明確交期，仍需檢查乙中心是否超標。",
      "explanation": "一致性主要關注分散，乙IQR較小較穩；但若有明確交期，仍需檢查乙中心是否超標。",
      "steps": [
        "把需求對應IQR。",
        "保留中心門檻限制。"
      ],
      "optionAnalysis": [
        {
          "choice": "甲一定較好，因中位數短",
          "truth": false,
          "reason": "忽略較大波動。"
        },
        {
          "choice": "兩者完全相同",
          "truth": false,
          "reason": "中心與分散都不同。"
        },
        {
          "choice": "乙較可能符合一致性需求",
          "truth": true,
          "reason": "正確。獨立重算：一致性主要關注分散，乙IQR較小較穩；但若有明確交期，仍需檢查乙中心是否超標。"
        },
        {
          "choice": "無法作任何比較",
          "truth": false,
          "reason": "IQR可比較一致性，雖仍需看規格門檻。"
        }
      ],
      "misconceptionTarget": "只看速度不看波動。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "estimatedTimeSec": 180,
      "unitCheck": "兩圖加工時間單位相同。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "使用「較可能」而非絕對，因未提供規格與尾端。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：以需求選擇盒狀圖指標",
      "literacyContextNecessity": "生產決策需在速度與穩定間取捨。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "以需求選擇盒狀圖指標",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "fb54d003345271f4810e8c1b26a3173c2f38244bb5ada198f7fd49d9de41eb68"
    },
    {
      "questionId": "u22-s009-v012",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-compare",
      "lockedSkillOrder": 9,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某研究比較兩地空氣品質指標。甲盒狀圖整體位於乙右側，但兩圖大量重疊。下列報告句子何者最嚴謹？",
      "text": "某研究比較兩地空氣品質指標。甲盒狀圖整體位於乙右側，但兩圖大量重疊。下列報告句子何者最嚴謹？",
      "givenConditions": [],
      "target": "撰寫有限且正確的比較結論",
      "choices": [
        "甲每天都比乙差",
        "甲的中位數較高，但不能說每一天都高於乙",
        "乙的平均一定較低",
        "兩地沒有差異"
      ],
      "answerIndex": 1,
      "independentSolution": "右移支持甲中心較高；大量重疊表示仍有許多交錯值，不能轉為逐日必然關係。",
      "explanation": "右移支持甲中心較高；大量重疊表示仍有許多交錯值，不能轉為逐日必然關係。",
      "steps": [
        "讀中心位置。",
        "讀重疊。",
        "限制個體層級推論。"
      ],
      "optionAnalysis": [
        {
          "choice": "甲每天都比乙差",
          "truth": false,
          "reason": "分布重疊否定逐日全面比較。"
        },
        {
          "choice": "甲的中位數較高，但不能說每一天都高於乙",
          "truth": true,
          "reason": "正確。獨立重算：右移支持甲中心較高；大量重疊表示仍有許多交錯值，不能轉為逐日必然關係。"
        },
        {
          "choice": "乙的平均一定較低",
          "truth": false,
          "reason": "盒狀圖未提供平均。"
        },
        {
          "choice": "兩地沒有差異",
          "truth": false,
          "reason": "中位數位置已顯示中心差異。"
        }
      ],
      "misconceptionTarget": "把群體中心差異誇大為每一筆都成立。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "estimatedTimeSec": 180,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "空氣品質指標高低代表好壞需依指標定義，題目只比較數值。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：撰寫有限且正確的比較結論",
      "literacyContextNecessity": "公共報告需避免由分布摘要製造過度確定的敘述。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "撰寫有限且正確的比較結論",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "ca29b23a4ccca0c0148cc6dcf90200464ba56f0152c6933fc597736f1135bceb"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u22-s009-cr001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-compare",
      "lockedSkillOrder": 9,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "甲、乙兩組盒狀圖五數分別為甲：4、10、15、18、24；乙：6、9、15、22、25。比較兩組中位數、IQR、全距與箱內左右半段，並寫出不能由此判斷的一件事。",
      "requiredWork": [
        "計算中位數、IQR、全距。",
        "比較箱內左右半段。",
        "提出資訊限制。"
      ],
      "standardSolution": [
        "兩組中位數都為15。",
        "甲IQR=8、全距=20；乙IQR=13、全距=19。",
        "甲箱內左半5、右半3；乙左半6、右半7。乙中間50%較分散，兩組整體跨度相近。",
        "不能由盒狀圖判斷平均數、樣本數或每一筆誰較大。"
      ],
      "reasoningSteps": [
        "兩組中位數都為15。",
        "甲IQR=8、全距=20；乙IQR=13、全距=19。",
        "甲箱內左半5、右半3；乙左半6、右半7。乙中間50%較分散，兩組整體跨度相近。",
        "不能由盒狀圖判斷平均數、樣本數或每一筆誰較大。"
      ],
      "alternativeMethods": [
        "可畫同尺度盒狀圖後量各段，但仍須以座標差計算。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "所有指標、箱內段比較與一項正確限制完整。"
        },
        {
          "score": 2,
          "criteria": "只錯一個差值，其他比較與限制正確。"
        },
        {
          "score": 1,
          "criteria": "能正確比較中位數與至少一種分散量。"
        },
        {
          "score": 0,
          "criteria": "只寫「乙較不穩定」而沒有指標或作個體推論。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "一處算術錯可追蹤給分；不合理的個體或因果推論不給限制分。",
      "unitNotationRules": "無特殊單位；分數須可辨識且機率介於0與1。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "把箱寬當全距。",
        "因中位數相同就說兩分布完全相同。",
        "由圖推平均數相同。"
      ],
      "visualMode": "figure",
      "figureId": "fig-u22-boxplot-compare",
      "drawingSpecReference": "fig-u22-boxplot-compare",
      "independentReview": {
        "recomputedResult": "兩組中位數都為15。；甲IQR=8、全距=20；乙IQR=13、全距=19。；甲箱內左半5、右半3；乙左半6、右半7。乙中間50%較分散，兩組整體跨度相近。；不能由盒狀圖判斷平均數、樣本數或每一筆誰較大。",
        "alternativeMethodCheck": "可畫同尺度盒狀圖後量各段，但仍須以座標差計算。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "2735555a2c7c1a29163f2575ef9dd382f35abf86febef51a6a82dc636bf41cab"
    },
    {
      "questionId": "u22-s009-cr002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-compare",
      "lockedSkillOrder": 9,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "兩班考試盒狀圖顯示：A班Q1=60、中位數=72、Q3=84；B班Q1=68、中位數=74、Q3=80。校長說「B班所有學生都比A班穩定且成績更高」。請用盒狀圖可支持與不可支持的資訊改寫。",
      "requiredWork": [
        "計算兩班IQR。",
        "比較中位數。",
        "指出「所有學生」不能由圖證明。"
      ],
      "standardSolution": [
        "A班IQR=24，B班IQR=12，所以B班中間50%的成績較集中。",
        "B班中位數74略高於A班72。",
        "合理改寫：B班的中位數略高，且中間50%成績較集中；但不能說所有B班學生都比A班高，也不能由IQR直接判定每個人都更穩定。"
      ],
      "reasoningSteps": [
        "A班IQR=24，B班IQR=12，所以B班中間50%的成績較集中。",
        "B班中位數74略高於A班72。",
        "合理改寫：B班的中位數略高，且中間50%成績較集中；但不能說所有B班學生都比A班高，也不能由IQR直接判定每個人都更穩定。"
      ],
      "alternativeMethods": [
        "可補充最小值、最大值未提供，因此連全距也無法比較。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "兩個IQR、中位數比較及嚴謹改寫全部正確。"
        },
        {
          "score": 2,
          "criteria": "數值正確但限制語句少一項，或改寫正確但漏算一個IQR。"
        },
        {
          "score": 1,
          "criteria": "能指出「所有學生」過度推論並寫出一個可支持結論。"
        },
        {
          "score": 0,
          "criteria": "接受原說法或以中位數推論每個人。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "若只寫「B班較集中」但沒有指明中間50%，最高2分。",
      "unitNotationRules": "成績單位為分。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "把IQR較小說成所有人成績都相近。",
        "把中位數高2分說成平均高2分。",
        "自行補出全距。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "independentReview": {
        "recomputedResult": "A班IQR=24，B班IQR=12，所以B班中間50%的成績較集中。；B班中位數74略高於A班72。；合理改寫：B班的中位數略高，且中間50%成績較集中；但不能說所有B班學生都比A班高，也不能由IQR直接判定每個人都更穩定。",
        "alternativeMethodCheck": "可補充最小值、最大值未提供，因此連全距也無法比較。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "eaebc2d6558cdb816cc51b4d408ff6cbeb0f0d6219094226659d11269656e7fb"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u22-s009-v001",
      "unitId": "u22",
      "skillId": "box-plot-compare",
      "contentSha256": "26909232d2dc84b3620ce0a632c658e7d1d450e71795cb76a6993bcd2f1914e1",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "只能確定乙的中位數24大於甲的20，也就是中心位置較高。",
      "derivedAnswer": "乙的中位位置較高",
      "storedAnswer": "乙的中位位置較高",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「乙的中位位置較高」；其餘選項逐項排除：「乙每筆資料都較大」：兩分布可能重疊。；「乙平均數較高」：中位數不決定平均數。；「乙資料筆數較多」：盒狀圖不顯示筆數。",
        "undefinedSymbol": "題幹術語均已在「兩盒狀圖比較」講義定義；實際目標為「比較中心位置」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "兩圖需用相同尺度。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「由中位數比較推成逐筆比較。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：比較中心位置",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「甲盒狀圖中位數20，乙中位數24。能直接確定什麼？」；獨立解法「只能確定乙的中位數24大於甲的20，也就是中心位置較高。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s009-v002",
      "unitId": "u22",
      "skillId": "box-plot-compare",
      "contentSha256": "f5f81f7cd30fadf2c60de58abe3c3547339efff94a581802616a7b7165395f78",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "IQR越小，中間50%跨度越小；5<9，所以甲較集中。",
      "derivedAnswer": "甲",
      "storedAnswer": "甲",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「甲」；其餘選項逐項排除：「乙」：乙IQR較大。；「一樣」：IQR不同。；「無法判斷」：IQR正是中間50%跨度。",
        "undefinedSymbol": "題幹術語均已在「兩盒狀圖比較」講義定義；實際目標為「比較中段集中程度」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "只針對中間50%。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把較大的IQR誤作資料較多。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：比較中段集中程度",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「甲IQR=5，乙IQR=9。哪組中間50%較集中？」；獨立解法「IQR越小，中間50%跨度越小；5<9，所以甲較集中。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s009-v003",
      "unitId": "u22",
      "skillId": "box-plot-compare",
      "contentSha256": "3a99fe794f3e24142d3517578d4797582c14d83e09507cb38250af482c7db343",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "30>18，所以甲整體從最小到最大跨度較大。",
      "derivedAnswer": "甲",
      "storedAnswer": "甲",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「甲」；其餘選項逐項排除：「乙」：18小於30。；「相同」：數值不同。；「需知道中位數」：全距比較不需中位數。",
        "undefinedSymbol": "題幹術語均已在「兩盒狀圖比較」講義定義；實際目標為「比較整體跨度」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "兩組使用同單位。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把中心量當作全距必要條件。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：比較整體跨度",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「甲全距30，乙全距18。若只比較整體跨度，哪組較大？」；獨立解法「30>18，所以甲整體從最小到最大跨度較大。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s009-v004",
      "unitId": "u22",
      "skillId": "box-plot-compare",
      "contentSha256": "88d162ea2aef3fca0b979f5f0442455666c42f5bdeee0464ff91f0751976b250",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "甲中位14、IQR8；乙中位15、IQR12，所以乙中心略高但中段較分散。",
      "derivedAnswer": "乙中位數較高且IQR較大",
      "storedAnswer": "乙中位數較高且IQR較大",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「乙中位數較高且IQR較大」；其餘選項逐項排除：「甲中位數較高且IQR較大」：甲中位14<15，IQR8<12。；「乙中位數較高但IQR較小」：乙IQR12較大。；「兩組中位數與IQR都相同」：均不同。",
        "undefinedSymbol": "題幹術語均已在「兩盒狀圖比較」講義定義；實際目標為「比較中心與IQR」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "兩組五數同尺度。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「只看五數端點而未計算箱寬。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：比較中心與IQR",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「甲五數 5、10、14、18、25；乙五數 6、9、15、21、24。下列何者正確？」；獨立解法「甲中位14、IQR8；乙中位15、IQR12，所以乙中心略高但中段較分散。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s009-v005",
      "unitId": "u22",
      "skillId": "box-plot-compare",
      "contentSha256": "8a20d18c3755c394a09876ccc169c6f36ecb74ea454fe2b766527db24ec0e4e5",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "箱體完全在右側表示甲箱體左端Q1仍大於乙箱體右端Q3。",
      "derivedAnswer": "甲的Q1大於乙的Q3",
      "storedAnswer": "甲的Q1大於乙的Q3",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「甲的Q1大於乙的Q3」；其餘選項逐項排除：「甲每筆資料都大於乙」：鬚線可能重疊。；「甲平均數一定較大」：盒狀圖不給平均數。；「甲全距一定較小」：箱體位置不決定全距。",
        "undefinedSymbol": "題幹術語均已在「兩盒狀圖比較」講義定義；實際目標為「解讀箱體相對位置」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "「完全位於右側」指不接觸；若接觸則應為≥。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把箱體不重疊誤成所有資料不重疊。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：解讀箱體相對位置",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩盒狀圖中，甲的箱體完全位於乙箱體右側。可保守地說什麼？」；獨立解法「箱體完全在右側表示甲箱體左端Q1仍大於乙箱體右端Q3。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s009-v006",
      "unitId": "u22",
      "skillId": "box-plot-compare",
      "contentSha256": "8673ea1ef6711bc628ddde70798bfb299f526e925d2baa3621d54bacf4a0fbd6",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "甲IQR較小，所以中段較集中；乙箱外兩鬚總長較小，表示端點距Q1、Q3總和較小。",
      "derivedAnswer": "甲中段較集中，乙端點相對中段較近",
      "storedAnswer": "甲中段較集中，乙端點相對中段較近",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「甲中段較集中，乙端點相對中段較近」；其餘選項逐項排除：「甲整體一定較集中」：乙鬚線資訊可能使全距關係不同。；「乙中段較集中」：乙箱寬較大。；「兩組分布完全相同」：箱寬與鬚線不同。",
        "undefinedSymbol": "題幹術語均已在「兩盒狀圖比較」講義定義；實際目標為「同時比較箱內與箱外」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "鬚線總長小不必然使乙全距小，還要與箱寬合併。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把不同局部特徵合成「一定較集中」。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：同時比較箱內與箱外",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「甲乙中位數相同，甲箱寬較小，乙鬚線總長較小。哪個敘述最精確？」；獨立解法「甲IQR較小，所以中段較集中；乙箱外兩鬚總長較小，表示端點距Q1、Q3總和較小。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s009-v007",
      "unitId": "u22",
      "skillId": "box-plot-compare",
      "contentSha256": "cdad1d063948cd5d6b1c0a5fec43d7580ca0d37bebb524a4f1254aebf2fdd1eb",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "A：中位11、IQR2、全距40；B：中位11、IQR6、全距12。",
      "derivedAnswer": "A中位數相同但IQR較小、全距較大",
      "storedAnswer": "A中位數相同但IQR較小、全距較大",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「A中位數相同但IQR較小、全距較大」；其餘選項逐項排除：「A的IQR與全距都較大」：A IQR2小於B6。；「B中位數較高」：兩者中位數都是11。；「B的全距較大」：B全距12小於A40。",
        "undefinedSymbol": "題幹術語均已在「兩盒狀圖比較」講義定義；實際目標為「多指標比較兩盒狀圖」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "摘要不能說明A端點是否為離群，需原資料或規則。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「只看一個圖形寬度。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：多指標比較兩盒狀圖",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「A五數為0、10、11、12、40；B為5、8、11、14、17。哪個描述正確？」；獨立解法「A：中位11、IQR2、全距40；B：中位11、IQR6、全距12。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s009-v008",
      "unitId": "u22",
      "skillId": "box-plot-compare",
      "contentSha256": "196c789497c1fff736297939be25afa2180b742a8bd84dd892891b963acca92c",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "五數摘要相同會使中位數、IQR、全距相同，但箱內各筆位置、重複次數與樣本數仍可能不同。",
      "derivedAnswer": "原始資料的分布細節與筆數",
      "storedAnswer": "原始資料的分布細節與筆數",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「原始資料的分布細節與筆數」；其餘選項逐項排除：「中位數」：五數相同已固定。；「IQR」：Q1、Q3相同。；「全距」：最小、最大相同。",
        "undefinedSymbol": "題幹術語均已在「兩盒狀圖比較」講義定義；實際目標為「理解盒狀圖資訊限制」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "標準盒狀圖通常不編碼樣本數。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「以為相同盒狀圖代表原資料完全相同。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：理解盒狀圖資訊限制",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若兩組盒狀圖五數每一項都相同，下列何者仍可能不同？」；獨立解法「五數摘要相同會使中位數、IQR、全距相同，但箱內各筆位置、重複次數與樣本數仍可能不同。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s009-v009",
      "unitId": "u22",
      "skillId": "box-plot-compare",
      "contentSha256": "11d6d017f80422e21ed1d16504b214af3d32724939452ac7a62cfce86cac8c1d",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "甲IQR=4×2=8；乙IQR=2×5=10，所以乙較大。",
      "derivedAnswer": "乙",
      "storedAnswer": "乙",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「乙」；其餘選項逐項排除：「甲」：甲IQR=8，小於乙10。；「相同」：格數不可直接比較。；「無法判斷」：刻度已提供，可換算。",
        "undefinedSymbol": "題幹術語均已在「兩盒狀圖比較」講義定義；實際目標為「處理不同刻度的盒狀圖」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "單位相同但每格尺度不同。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「直接比較圖上格數而忽略刻度。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：處理不同刻度的盒狀圖",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩組資料使用不同數軸刻度：甲每格2單位，乙每格5單位。圖上甲箱寬4格、乙箱寬2格。哪組IQR較大？」；獨立解法「甲IQR=4×2=8；乙IQR=2×5=10，所以乙較大。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s009-v010",
      "unitId": "u22",
      "skillId": "box-plot-compare",
      "contentSha256": "efba5842519dc94cac38fe1dd10431fc03e87fde0eac22bec2b87c1a7ec4531a",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "乙中位74>甲70，且乙全距33<甲44，因此兩個指定條件都符合。",
      "derivedAnswer": "乙班",
      "storedAnswer": "乙班",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「乙班」；其餘選項逐項排除：「甲班」：甲中位數較低且全距較大。；「兩班相同」：中心與全距都不同。；「資料不足」：中位數與全距已足以依指定條件比較。",
        "undefinedSymbol": "題幹術語均已在「兩盒狀圖比較」講義定義；實際目標為「依雙重條件比較班級」。",
        "unitConflict": "兩班使用同一份滿分相同的測驗。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "不能由此說乙每位學生都較高。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「只比較最高分或Q3。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：依雙重條件比較班級",
      "literacyContextNecessity": "班級評估需同時看典型表現與整體落差。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩班同一份測驗盒狀圖如圖：甲五數50、62、70、78、94；乙55、66、74、80、88。若要兼顧「典型成績較高」與「總體極端差距較小」，哪班較符合？」；獨立解法「乙中位74>甲70，且乙全距33<甲44，因此兩個指定條件都符合。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s009-v011",
      "unitId": "u22",
      "skillId": "box-plot-compare",
      "contentSha256": "fb54d003345271f4810e8c1b26a3173c2f38244bb5ada198f7fd49d9de41eb68",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "一致性主要關注分散，乙IQR較小較穩；但若有明確交期，仍需檢查乙中心是否超標。",
      "derivedAnswer": "乙較可能符合一致性需求",
      "storedAnswer": "乙較可能符合一致性需求",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「乙較可能符合一致性需求」；其餘選項逐項排除：「甲一定較好，因中位數短」：忽略較大波動。；「兩者完全相同」：中心與分散都不同。；「無法作任何比較」：IQR可比較一致性，雖仍需看規格門檻。",
        "undefinedSymbol": "題幹術語均已在「兩盒狀圖比較」講義定義；實際目標為「以需求選擇盒狀圖指標」。",
        "unitConflict": "兩圖加工時間單位相同。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "使用「較可能」而非絕對，因未提供規格與尾端。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「只看速度不看波動。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：以需求選擇盒狀圖指標",
      "literacyContextNecessity": "生產決策需在速度與穩定間取捨。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「甲乙兩台機器加工時間盒狀圖：甲中位數較短但IQR較大；乙中位數稍長但IQR較小。若訂單最重視準時一致，何者較合理？」；獨立解法「一致性主要關注分散，乙IQR較小較穩；但若有明確交期，仍需檢查乙中心是否超標。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s009-v012",
      "unitId": "u22",
      "skillId": "box-plot-compare",
      "contentSha256": "ca29b23a4ccca0c0148cc6dcf90200464ba56f0152c6933fc597736f1135bceb",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "右移支持甲中心較高；大量重疊表示仍有許多交錯值，不能轉為逐日必然關係。",
      "derivedAnswer": "甲的中位數較高，但不能說每一天都高於乙",
      "storedAnswer": "甲的中位數較高，但不能說每一天都高於乙",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「甲的中位數較高，但不能說每一天都高於乙」；其餘選項逐項排除：「甲每天都比乙差」：分布重疊否定逐日全面比較。；「乙的平均一定較低」：盒狀圖未提供平均。；「兩地沒有差異」：中位數位置已顯示中心差異。",
        "undefinedSymbol": "題幹術語均已在「兩盒狀圖比較」講義定義；實際目標為「撰寫有限且正確的比較結論」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "空氣品質指標高低代表好壞需依指標定義，題目只比較數值。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把群體中心差異誇大為每一筆都成立。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：撰寫有限且正確的比較結論",
      "literacyContextNecessity": "公共報告需避免由分布摘要製造過度確定的敘述。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：range-iqr-compare。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某研究比較兩地空氣品質指標。甲盒狀圖整體位於乙右側，但兩圖大量重疊。下列報告句子何者最嚴謹？」；獨立解法「右移支持甲中心較高；大量重疊表示仍有許多交錯值，不能轉為逐日必然關係。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "fig-u22-boxplot-compare",
      "unitId": "u22",
      "skillId": "box-plot-compare",
      "drawingPurpose": "支援兩組中位數、IQR、全距與箱內左右段比較。",
      "canvas": {
        "width": 760,
        "height": 300
      },
      "viewBox": "0 0 760 300",
      "coordinateSystem": "SVG pixels; origin at upper-left; x increases right and y increases down.",
      "layoutConstraints": [
        "共用0到30數軸",
        "甲盒狀圖五數4、10、15、18、24",
        "乙盒狀圖五數6、9、15、22、25",
        "甲乙標籤",
        "每5單位主刻度"
      ],
      "visibleLineRules": "All mathematical boundaries and axes use solid black lines; helper gridlines, when present, are lighter and never encode an answer by color.",
      "hiddenLineRules": "No hidden geometric lines are needed. Dashed lines are used only for explicitly labelled statistical fences.",
      "labelsAndPositions": "Labels are placed adjacent to their corresponding points, branches, sectors or groups with at least 14 px text.",
      "tickMarksUnitsArrowsSymbols": "Axes include labelled ticks and units where applicable; tree branches show exact fractions; arrowheads do not replace numeric labels.",
      "toScale": true,
      "visualInferenceWarning": null,
      "altText": "同一數軸上的甲乙兩個水平盒狀圖。甲五數4、10、15、18、24；乙五數6、9、15、22、25。",
      "svgTitle": "支援兩組中位數、IQR、全距與箱內左右段比較。",
      "svgDescription": "同一數軸上的甲乙兩個水平盒狀圖。甲五數4、10、15、18、24；乙五數6、9、15、22、25。",
      "mobileReadabilityReview": "Reviewed at 360 CSS px width; minimum label size remains legible and no labels overlap critical marks.",
      "answerLeakageReview": "The figure contains only data explicitly supplied by its associated prompt or lecture example; it does not mark a multiple-choice option as correct.",
      "geometryTokenAssertions": {
        "sharedScale": true,
        "aMedian": 15,
        "bMedian": 15,
        "aIqr": 8,
        "bIqr": 13
      },
      "manualVisualInspection": "pass; rendered PNG inspected for clipping, label overlap, scale consistency and mathematical placement.",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ]
};
