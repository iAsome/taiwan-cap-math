// Generated only by serializing reviewed source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u09-s016-lecture-r1",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-literacy",
    "skillId": "statistics-literacy-context",
    "lockedTitle": "統計資料素養",
    "title": "統計資料素養：從資料來源到負責任決策",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewStatus": "independently-reviewed",
    "prerequisiteBridge": {
      "skillIds": [
        "misleading-statistics-basic"
      ],
      "explanation": "需綜合資料表、圖表、代表值、比例比較與統計敘述合理性。"
    },
    "learningGoals": [
      "辨認母體、樣本與抽樣方式。",
      "評估樣本代表性與不回應偏誤。",
      "區分相關、因果與混淆因素。",
      "檢查缺失資料、定義與時間範圍。",
      "在不確定資訊下提出有限且可行的決策。"
    ],
    "vocabulary": [
      {
        "term": "母體",
        "meaning": "研究真正想了解的全部對象。"
      },
      {
        "term": "樣本",
        "meaning": "實際蒐集資料的一部分對象。"
      },
      {
        "term": "代表性",
        "meaning": "樣本在重要特徵上能合理反映母體。"
      },
      {
        "term": "抽樣偏誤",
        "meaning": "抽樣方式使某些類型較容易或較不容易被選中。"
      },
      {
        "term": "混淆因素",
        "meaning": "同時影響兩個變項，使表面關聯不一定是直接因果。"
      },
      {
        "term": "缺失資料",
        "meaning": "應蒐集但未取得的資料，可能非隨機缺漏。"
      }
    ],
    "notation": [
      {
        "symbol": "母體",
        "meaning": "結論希望推廣的全部對象。"
      },
      {
        "symbol": "樣本 n",
        "meaning": "實際觀察的樣本筆數。"
      },
      {
        "symbol": "相關≠因果",
        "meaning": "兩變項一起變化，不足以證明一者造成另一者。"
      }
    ],
    "conceptDevelopment": [
      "統計推論的可信度不只取決於樣本大小，也取決於抽樣方式；很大的偏誤樣本仍可能不代表母體。",
      "便利抽樣、自願回覆與只調查單一時間地點都可能造成代表性問題。",
      "缺失資料若集中在特定群體，刪除缺值可能改變結論。",
      "觀察研究能發現關聯，但因果判斷還需時間先後、控制其他因素或合理實驗設計。",
      "負責任決策要寫出資料支持什麼、不支持什麼，以及還需要哪些資料。",
      "統計資料素養的最後一步是把計算結果與證據強度分開：樣本內的平均、比例與差值可以精確重算，但能否外推取決於母體定義、抽樣方式、未回覆、分母與研究設計。觀察到關聯時應主動尋找混淆因素，只有較強的控制或隨機分派才能支持因果；負責任結論還要明說資料支持到哪裡、尚缺哪些資訊。"
    ],
    "definitions": [
      {
        "name": "隨機抽樣",
        "statement": "母體中的每個對象有已知且公平的機會被選入樣本。"
      },
      {
        "name": "便利抽樣",
        "statement": "選擇最容易接觸的對象，速度快但常有偏誤。"
      },
      {
        "name": "不回應偏誤",
        "statement": "未回覆者與回覆者可能系統性不同，造成結果偏移。"
      },
      {
        "name": "混淆",
        "statement": "第三因素使兩變項呈現關聯，卻不代表直接因果。"
      }
    ],
    "formulas": [
      {
        "formula": "樣本比例＝樣本中符合條件人數÷有效樣本數",
        "conditions": [
          "分母排除規則透明",
          "缺失資料處理已說明"
        ]
      },
      {
        "formula": "回覆率＝有效回覆數÷受邀數×100%",
        "conditions": [
          "受邀名單與有效回覆定義明確"
        ]
      },
      {
        "formula": "條件比例需以指定群組為分母",
        "conditions": [
          "比較群組定義一致"
        ]
      }
    ],
    "invalidUseCases": [
      "只因樣本很大就說完全沒有偏誤。",
      "網路自願投票直接代表全體居民。",
      "刪除所有缺值卻不說明缺值分布。",
      "由相關係數或比例差直接宣稱因果。",
      "只報平均數、不報樣本數與資料期間就做重大決策。"
    ],
    "stepByStepMethod": [
      {
        "step": 1,
        "action": "明確寫出母體、樣本與資料蒐集期間。"
      },
      {
        "step": 2,
        "action": "檢查抽樣方式、回覆率與缺失資料。"
      },
      {
        "step": 3,
        "action": "確認變項定義、單位、分母與圖表尺度。"
      },
      {
        "step": 4,
        "action": "區分描述、關聯與因果，列出可能混淆因素。"
      },
      {
        "step": 5,
        "action": "提出與證據強度相稱的結論、限制與下一步資料需求。"
      }
    ],
    "workedExamples": [
      {
        "id": "L1",
        "prompt": "學校只在籃球社群組調查全校學生的運動時間，能否代表全校？",
        "solution": [
          "母體是全校學生，樣本只有籃球社群組成員。",
          "籃球社成員被選入的機會較高，且可能更喜愛運動。",
          "將結論限制在受訪群組，另以跨年級隨機抽樣補強。"
        ],
        "answer": "屬便利且偏誤的樣本，不能直接代表全校。",
        "why": "樣本中的人雖然也是學生，但與全校母體的運動偏好可能系統性不同；代表性看抽樣機會是否公平，不是只看受訪者是否屬於母體。"
      },
      {
        "id": "L2",
        "prompt": "1000人問卷只有120人回覆，回覆者滿意率90%，如何報告？",
        "solution": [
          "先算回覆率120÷1000＝12%。",
          "辨認未回覆的880人可能與回覆者意見不同。",
          "只報回覆者中的90%，並明示低回覆率與不回應偏誤。"
        ],
        "answer": "可報回覆者90%，但不能直接當成1000人或母群的滿意率。",
        "why": "90%的比例計算可以正確，問題在於只有12%的人回覆；若回覆意願與滿意度相關，已回覆樣本會系統性偏離原邀請對象。"
      },
      {
        "id": "L3",
        "prompt": "帶水壺的學生平均成績較高，能否說帶水壺會提高成績？",
        "solution": [
          "確認資料只觀察學生原本是否帶水壺。",
          "列出家庭支持、自律、年級或健康習慣等混淆因素。",
          "在未控制與未隨機分派前，只能說樣本中有關聯。"
        ],
        "answer": "不能僅由此觀察資料證明因果。",
        "why": "同一個第三因素可能同時提高帶水壺機會與成績，使兩者看似相關；若沒有更強研究設計，直接把關聯改寫成因果會超過證據。"
      },
      {
        "id": "L4",
        "prompt": "決定是否延長圖書館時間時，只調查午休使用者，資料足夠嗎？",
        "solution": [
          "辨認決策關心的是晚間需求，樣本卻只含午休使用者。",
          "午休使用者不一定代表未來晚間使用者。",
          "跨時段、年級抽樣並記錄實際進館量後再決策。"
        ],
        "answer": "目前資料不足，需補充具代表性的需求資料。",
        "why": "抽樣的時間與地點會決定誰有機會被調查；只問午休使用者容易漏掉白天不進館但晚間有需求的人，與決策目標不一致。"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "樣本有5000人，所以一定代表臺灣所有學生。",
        "why": "樣本大小不能修正系統性抽樣偏誤。",
        "fix": "檢查抽樣框與選取方式。"
      },
      {
        "wrong": "刪掉未填收入者後直接算平均。",
        "why": "未填者可能集中在高收入或低收入群。",
        "fix": "報告缺失比例與可能方向。"
      },
      {
        "wrong": "睡眠與成績相關，所以延長睡眠必定提高每個人成績。",
        "why": "相關不等於因果且個體差異存在。",
        "fix": "限制為樣本關聯並尋找更強證據。"
      },
      {
        "wrong": "只看單月資料決定全年政策。",
        "why": "可能有季節性。",
        "fix": "擴大時間範圍或標示限制。"
      }
    ],
    "selfCheck": [
      "母體與樣本分別是誰？",
      "誰較容易被選到或回覆？",
      "缺失資料如何處理？",
      "是否有可能的混淆因素？",
      "結論是否只涵蓋資料能支持的範圍？"
    ],
    "summary": [
      "代表性比單純樣本大小更重要。",
      "抽樣與不回應都可能造成偏誤。",
      "相關不等於因果。",
      "負責任結論要包含限制與下一步。"
    ],
    "connections": {
      "previous": "統計敘述合理性提供計算、圖表與語言審查。",
      "next": [
        "後續機率與更進階統計會延續樣本、條件比例與不確定性的觀念。",
        "U22 才處理四分位數與盒狀圖。"
      ]
    },
    "figureReferences": [],
    "accessibilityNotes": "本講義可完全以文字理解；若有圖形，替代文字提供所有必要數值。",
    "practiceLinks": {
      "mcQuestionIds": [
        "u09-s016-v001",
        "u09-s016-v002",
        "u09-s016-v003",
        "u09-s016-v004",
        "u09-s016-v005",
        "u09-s016-v006",
        "u09-s016-v007",
        "u09-s016-v008",
        "u09-s016-v009",
        "u09-s016-v010",
        "u09-s016-v011",
        "u09-s016-v012"
      ],
      "constructedResponseIds": [
        "u09-s016-cr001",
        "u09-s016-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "以完整資料生命週期審查：問題、抽樣、蒐集、分析、解釋與決策。",
      "scopeCheck": "符合國中會考範圍；未引入四分位數與盒狀圖。",
      "prerequisiteAudit": "需綜合資料表、圖表、代表值、比例比較與統計敘述合理性。",
      "symbolAndUnitAudit": "所有符號在使用前定義；單位與取位規則在例題中明示。",
      "skillSpecificEvidence": "例題涵蓋社群便利抽樣、低回覆率、混淆因素與政策資料不足。",
      "legacyContentUsed": false,
      "decision": "pass"
    },
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "contentSha256": "07bc42ded4587d704d931acaaf952a6388dc66776c211d12cb9e2de05ec79cf3"
  },
  "mcQuestions": [
    {
      "questionId": "u09-s016-v001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-literacy",
      "skillId": "statistics-literacy-context",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "一項調查要推論全校學生意見。哪種抽樣較合適？",
      "givenConditions": [
        "不要求完整普查。"
      ],
      "target": "選擇較具代表性的抽樣方法",
      "choices": [
        "只問學生會幹部",
        "只問午休在操場的人",
        "讓支持方案者自行填答",
        "從各年級隨機抽取學生"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "母群是全校，分層涵蓋各年級再隨機抽樣較合理。",
        "derivedAnswer": "從各年級隨機抽取學生",
        "trustStoredAnswer": false
      },
      "explanation": "抽樣設計要對應推論母群。 要推論全校，樣本應讓各年級學生都有可知且較公平的抽取機會；分年級隨機抽樣比只問幹部、操場學生或自願支持者更能涵蓋母體。",
      "steps": [
        "辨認母群。",
        "比較樣本涵蓋性。",
        "把目標母體寫成全校各年級學生。",
        "逐一排除便利、自願與單一群體抽樣，保留分層隨機方案。"
      ],
      "optionAnalysis": [
        {
          "choice": "只問學生會幹部",
          "truth": false,
          "reason": "幹部可能與一般學生不同。"
        },
        {
          "choice": "只問午休在操場的人",
          "truth": false,
          "reason": "地點選樣會漏掉其他學生。"
        },
        {
          "choice": "讓支持方案者自行填答",
          "truth": false,
          "reason": "自願回覆易有自我選擇偏差。"
        },
        {
          "choice": "從各年級隨機抽取學生",
          "truth": true,
          "reason": "涵蓋各年級並隨機抽取較具代表性。"
        }
      ],
      "misconceptionTarget": "以方便取樣代替代表性 或只選容易接觸的人，沒有檢查各年級與不同意見者是否有機會入樣。",
      "prerequisiteCheck": {
        "skillIds": [
          "misleading-statistics-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "無計算。",
      "ambiguityAndBoundaryAudit": "『較合適』不宣稱完全無偏差。",
      "difficultyReason": "基礎統計素養。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "073355b14db02f05a62d93073befb5d2c4706eba497aa097e4c65e615bdeedbb"
    },
    {
      "questionId": "u09-s016-v002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-literacy",
      "skillId": "statistics-literacy-context",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "報告寫『樣本平均 68 分』。下列何者一定正確？",
      "givenConditions": [
        "樣本數正。"
      ],
      "target": "辨認樣本平均能支持的結論",
      "choices": [
        "每個人都是 68 分",
        "樣本總分除以樣本數等於 68",
        "中位數一定 68",
        "母群平均一定 68"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "平均定義直接支持總分/人數=68。",
        "derivedAnswer": "樣本總分除以樣本數等於 68",
        "trustStoredAnswer": false
      },
      "explanation": "要分清樣本統計量與個體、母群。 『樣本平均68分』依定義只保證樣本總分÷樣本數＝68；個別分數、中位數與母群平均都可能不同，不能由一個樣本平均唯一推出。",
      "steps": [
        "逐一檢查敘述層次。",
        "將平均定義改寫成樣本總分除以樣本數。",
        "檢查其他選項都額外加入個體、中央位置或母群層次的未給條件。"
      ],
      "optionAnalysis": [
        {
          "choice": "每個人都是 68 分",
          "truth": false,
          "reason": "個別值可不同。"
        },
        {
          "choice": "樣本總分除以樣本數等於 68",
          "truth": true,
          "reason": "這是平均的定義。"
        },
        {
          "choice": "中位數一定 68",
          "truth": false,
          "reason": "平均不決定中位數。"
        },
        {
          "choice": "母群平均一定 68",
          "truth": false,
          "reason": "樣本平均不保證母群平均相同。"
        }
      ],
      "misconceptionTarget": "過度外推 或把樣本平均同時當成每個人的分數、中位數及母群平均。",
      "prerequisiteCheck": {
        "skillIds": [
          "misleading-statistics-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "68 分。",
      "ambiguityAndBoundaryAudit": "只有定義性敘述必然。",
      "difficultyReason": "基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "14f4ad1d90ee4bff5847d2e38b6a3c63e604e24e70f3f6842993754aa8cfde20"
    },
    {
      "questionId": "u09-s016-v003",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-literacy",
      "skillId": "statistics-literacy-context",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "問卷回覆率是 30%。最合理的關注是什麼？",
      "givenConditions": [
        "回覆率 30%。"
      ],
      "target": "認識未回覆偏差",
      "choices": [
        "未回覆者可能與回覆者意見不同",
        "30% 一定代表調查錯誤",
        "只要有回覆就能代表全部",
        "回覆率與偏差完全無關"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "回覆者若與未回覆者系統性不同，樣本結論會偏。",
        "derivedAnswer": "未回覆者可能與回覆者意見不同",
        "trustStoredAnswer": false
      },
      "explanation": "統計素養不只看計算，也看資料如何取得。 回覆率30%表示70%未回覆；若未回覆者的意見與回覆者系統性不同，只分析已回覆資料就會產生不回應偏誤。30%本身不證明調查必錯。",
      "steps": [
        "辨識缺失資料來源。",
        "算出未回覆比例為70%。",
        "詢問未回覆是否與意見相關，將結論限定為可能偏誤而非必然錯誤。"
      ],
      "optionAnalysis": [
        {
          "choice": "未回覆者可能與回覆者意見不同",
          "truth": true,
          "reason": "低回覆率可能產生未回覆偏差。"
        },
        {
          "choice": "30% 一定代表調查錯誤",
          "truth": false,
          "reason": "不一定錯，但需評估。"
        },
        {
          "choice": "只要有回覆就能代表全部",
          "truth": false,
          "reason": "不能自動代表全部。"
        },
        {
          "choice": "回覆率與偏差完全無關",
          "truth": false,
          "reason": "回覆模式可能影響結果。"
        }
      ],
      "misconceptionTarget": "只看已回覆樣本大小 或只看已收回的樣本數，完全忽略未回覆者可能集中於特定立場。",
      "prerequisiteCheck": {
        "skillIds": [
          "misleading-statistics-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "無取位。",
      "ambiguityAndBoundaryAudit": "不斷言一定偏，只指出風險。",
      "difficultyReason": "基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "327a653051321ea4e9598b0b69de9f57637adb2c9f0127fb285e01128d3b6963"
    },
    {
      "questionId": "u09-s016-v004",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-literacy",
      "skillId": "statistics-literacy-context",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "研究發現常運動者平均睡眠較長。下列哪個結論最合理？",
      "givenConditions": [
        "研究設計未說是隨機實驗。"
      ],
      "target": "限制因果推論",
      "choices": [
        "運動一定造成睡眠變長",
        "睡眠長一定造成運動",
        "兩者在樣本中有關聯，但不能僅此證明運動造成睡眠變長",
        "兩者完全無關"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "平均差只能描述關聯；作因果結論需更嚴謹設計。",
        "derivedAnswer": "兩者在樣本中有關聯，但不能僅此證明運動造成睡眠變長",
        "trustStoredAnswer": false
      },
      "explanation": "相關不等於因果。 這是觀察到常運動者與較長睡眠同時出現，只能支持樣本中的關聯；年齡、健康、自律或作息都可能同時影響兩者，不能僅此確定因果方向。",
      "steps": [
        "區分觀察與因果。",
        "辨認研究未說明隨機分派或控制。",
        "保留『樣本中有關聯』，排除兩個方向的必然因果敘述。"
      ],
      "optionAnalysis": [
        {
          "choice": "運動一定造成睡眠變長",
          "truth": false,
          "reason": "缺乏實驗控制。"
        },
        {
          "choice": "睡眠長一定造成運動",
          "truth": false,
          "reason": "反向因果也未證明。"
        },
        {
          "choice": "兩者在樣本中有關聯，但不能僅此證明運動造成睡眠變長",
          "truth": true,
          "reason": "觀察到關聯，因果仍可能受其他因素影響。"
        },
        {
          "choice": "兩者完全無關",
          "truth": false,
          "reason": "資料顯示至少有關聯。"
        }
      ],
      "misconceptionTarget": "把關聯直接當因果 或把平均差異直接改寫成運動必然造成睡眠變長，沒有控制混淆因素。",
      "prerequisiteCheck": {
        "skillIds": [
          "misleading-statistics-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "無計算。",
      "ambiguityAndBoundaryAudit": "結論使用保守語氣。",
      "difficultyReason": "標準素養。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "314069ab5ae7dbf1d771d44723bf9682570330d8609e3bb66e6bff0f03021ee7"
    },
    {
      "questionId": "u09-s016-v005",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-literacy",
      "skillId": "statistics-literacy-context",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "兩篇報導分別說失業率『增加 1%』與『增加 1 個百分點』。原率 4%、新率 5%。哪篇較精確？",
      "givenConditions": [
        "原率與新率明確。"
      ],
      "target": "精確解讀百分比變化",
      "choices": [
        "增加 1 個百分點；相對增幅為 25%",
        "增加 1% 完全等同",
        "相對增幅為 1%",
        "增加 5 個百分點"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "直接差 1 個百分點，相對於原 4% 是 25%。",
        "derivedAnswer": "增加 1 個百分點；相對增幅為 25%",
        "trustStoredAnswer": false
      },
      "explanation": "統計語言需標明比較方式。 失業率由4%到5%的直接差是1個百分點；相對原率4%的增幅為(5－4)÷4＝25%，所以應明確區分兩種表達。用4%×1.25＝5%反向驗算，可確認相對增幅以原率為基準。",
      "steps": [
        "算直接差。",
        "算相對差。",
        "以5%－4%得到1個百分點。",
        "以原率4%作分母算1%÷4%＝25%。"
      ],
      "optionAnalysis": [
        {
          "choice": "增加 1 個百分點；相對增幅為 25%",
          "truth": true,
          "reason": "5%-4%=1 個百分點；1/4=25%。"
        },
        {
          "choice": "增加 1% 完全等同",
          "truth": false,
          "reason": "百分點與相對百分比不同。"
        },
        {
          "choice": "相對增幅為 1%",
          "truth": false,
          "reason": "相對增幅不是 1%。"
        },
        {
          "choice": "增加 5 個百分點",
          "truth": false,
          "reason": "差不是 5。"
        }
      ],
      "misconceptionTarget": "混淆百分點與百分比 或把增加1個百分點簡寫成增加1%，使讀者無法判斷指直接差或相對增幅。",
      "prerequisiteCheck": {
        "skillIds": [
          "misleading-statistics-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "25% 精確。",
      "ambiguityAndBoundaryAudit": "兩種數值回答不同問題。",
      "difficultyReason": "標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e66e23a70c8b507ed262708fad7fa088a58abdbdf604f3a3571f5a633eeb7de1"
    },
    {
      "questionId": "u09-s016-v006",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-literacy",
      "skillId": "statistics-literacy-context",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "一項民調樣本 1000 人，支持率 52%。下列哪個說法最穩健？",
      "givenConditions": [
        "1000 人。"
      ],
      "target": "區分樣本描述與母群推論",
      "choices": [
        "全體民眾恰有 52% 支持",
        "樣本大所以不需知道抽樣方法",
        "不可能換算支持人數",
        "在該樣本中約 520 人支持；推論母群仍需抽樣方法與誤差資訊"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "樣本內支持人數約 520；母群推論要考慮代表性與誤差。",
        "derivedAnswer": "在該樣本中約 520 人支持；推論母群仍需抽樣方法與誤差資訊",
        "trustStoredAnswer": false
      },
      "explanation": "同時保留可計算事實與推論限制。 52%乘1000得到樣本內約520人支持，這是可直接計算的事實；要推論全體仍需知道抽樣方法、抽樣誤差與未回覆情形，不能寫成母群恰為52%。",
      "steps": [
        "換算樣本內人數。",
        "檢查外推前提。",
        "先算0.52×1000＝520人。",
        "再把樣本內描述與母群推論分開，列出外推需要的條件。"
      ],
      "optionAnalysis": [
        {
          "choice": "全體民眾恰有 52% 支持",
          "truth": false,
          "reason": "樣本比例不是母群真值保證。"
        },
        {
          "choice": "樣本大所以不需知道抽樣方法",
          "truth": false,
          "reason": "大樣本不能修正偏差抽樣。"
        },
        {
          "choice": "不可能換算支持人數",
          "truth": false,
          "reason": "可換算樣本內人數。"
        },
        {
          "choice": "在該樣本中約 520 人支持；推論母群仍需抽樣方法與誤差資訊",
          "truth": true,
          "reason": "0.52×1000=520；外推仍需方法。"
        }
      ],
      "misconceptionTarget": "把樣本比例當母群確定值 或因樣本有1000人就跳過代表性與誤差，將樣本比例視為母群確定值。",
      "prerequisiteCheck": {
        "skillIds": [
          "misleading-statistics-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "若 52% 為四捨五入，故用約 520。",
      "ambiguityAndBoundaryAudit": "不自行提供未給定的誤差範圍。",
      "difficultyReason": "標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c3b88a35b36c1604d7a01356be647d10383f99bd311a556b2e852da823d974ad"
    },
    {
      "questionId": "u09-s016-v007",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-literacy",
      "skillId": "statistics-literacy-context",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "A 藥試驗 100 人改善 60 人，B 藥試驗 20 人改善 14 人。只看改善率 B 為 70% 高於 A 60%。哪個下一步最合理？",
      "givenConditions": [
        "兩個樣本大小不同。"
      ],
      "target": "評估跨研究比例比較",
      "choices": [
        "立即宣布 B 一定較有效",
        "檢查兩試驗分組、樣本數與受試者條件是否可比",
        "只比較改善人數，A 一定較好",
        "把兩率直接平均成 65%"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "先確認隨機分派、對照條件、樣本特徵，再評估 70% 與 60% 差異。",
        "derivedAnswer": "檢查兩試驗分組、樣本數與受試者條件是否可比",
        "trustStoredAnswer": false
      },
      "explanation": "統計素養要求先審查可比性。 B的樣本改善率70%高於A的60%，但兩試驗樣本數100與20不同，受試者與分組也可能不可比；下一步應審查設計與條件，而非直接宣布療效。",
      "steps": [
        "辨認兩研究差異。",
        "提出必要補充資訊。",
        "保留60/100與14/20的原始分子分母。",
        "檢查隨機分派、受試條件與樣本數後才評估藥效差異。"
      ],
      "optionAnalysis": [
        {
          "choice": "立即宣布 B 一定較有效",
          "truth": false,
          "reason": "小樣本 20 人不足以保證更有效。"
        },
        {
          "choice": "檢查兩試驗分組、樣本數與受試者條件是否可比",
          "truth": true,
          "reason": "跨研究比較前需確認設計與不確定性。"
        },
        {
          "choice": "只比較改善人數，A 一定較好",
          "truth": false,
          "reason": "人數也受樣本大小影響。"
        },
        {
          "choice": "把兩率直接平均成 65%",
          "truth": false,
          "reason": "直接平均沒有明確權重與目的。"
        }
      ],
      "misconceptionTarget": "只看最高百分比 或只挑最高百分比，忽略小樣本波動、分組方法及病況差異。",
      "prerequisiteCheck": {
        "skillIds": [
          "misleading-statistics-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "比例精確。",
      "ambiguityAndBoundaryAudit": "不提供醫療建議，只評估資料。",
      "difficultyReason": "進階素養。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "24ceb05c35335bea7245ebe62dce3b725210506fe53e04a9261942df7c40270b"
    },
    {
      "questionId": "u09-s016-v008",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-literacy",
      "skillId": "statistics-literacy-context",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "某校平均成績提高，但中位數下降。哪個情況可能造成？",
      "givenConditions": [
        "同一批或可比群體。"
      ],
      "target": "解釋衝突統計指標",
      "choices": [
        "所有人都同幅進步",
        "所有分數都下降",
        "平均與中位數必須同方向",
        "少數高分大幅上升，拉高平均；多數中央位置略降"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "例如多數人略降、少數人進步很多，總和仍可能提高。",
        "derivedAnswer": "少數高分大幅上升，拉高平均；多數中央位置略降",
        "trustStoredAnswer": false
      },
      "explanation": "不同代表值反應分布不同面向。 少數高分大幅上升會拉高對極端值敏感的平均；若中央附近多數資料略降，排序後的中位數仍可下降，因此兩指標方向可以不同。",
      "steps": [
        "構造或想像反例。",
        "檢查兩指標方向。",
        "分別回想平均使用全部數值、中位數只看中央位置。",
        "構造少數高值大升、多數中央值略降的情況，驗證兩方向可並存。"
      ],
      "optionAnalysis": [
        {
          "choice": "所有人都同幅進步",
          "truth": false,
          "reason": "同幅進步會使兩者都上升。"
        },
        {
          "choice": "所有分數都下降",
          "truth": false,
          "reason": "所有下降平均也會下降。"
        },
        {
          "choice": "平均與中位數必須同方向",
          "truth": false,
          "reason": "兩者可不同方向。"
        },
        {
          "choice": "少數高分大幅上升，拉高平均；多數中央位置略降",
          "truth": true,
          "reason": "平均對極高值敏感，中位數反映中央位置。"
        }
      ],
      "misconceptionTarget": "認為代表值必同方向 或認為平均與中位數一定同方向變化，沒有考慮少數極端值的拉動。",
      "prerequisiteCheck": {
        "skillIds": [
          "misleading-statistics-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "無計算。",
      "ambiguityAndBoundaryAudit": "只問可能情況，不聲稱唯一。",
      "difficultyReason": "進階推理。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a19ce43e64b462f03e33280083c23390b241e10f2aa0d8d577ed65d7e9a16c22"
    },
    {
      "questionId": "u09-s016-v009",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-literacy",
      "skillId": "statistics-literacy-context",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "一張圖只顯示百分比，沒有樣本數。最主要缺少哪項資訊？",
      "givenConditions": [
        "未提供樣本數。"
      ],
      "target": "辨識百分比圖缺少分母",
      "choices": [
        "圖的顏色",
        "標題字體",
        "各百分比背後的實際分母與證據量",
        "類別排列順序一定要照筆畫"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "沒有分母就難判斷實際人數與穩定性。",
        "derivedAnswer": "各百分比背後的實際分母與證據量",
        "trustStoredAnswer": false
      },
      "explanation": "百分比應盡量與樣本數一起揭露。 相同百分比若來自10人或10000人，證據量與波動程度不同；沒有各類別的實際分母，就無法判斷比例背後有多少觀察資料。",
      "steps": [
        "找影響解讀的未提供資訊。",
        "把百分比寫成分子除以分母的形式。",
        "辨認圖中缺少的是各類實際分母與樣本數，而非裝飾性資訊。"
      ],
      "optionAnalysis": [
        {
          "choice": "圖的顏色",
          "truth": false,
          "reason": "顏色非主要統計資訊。"
        },
        {
          "choice": "標題字體",
          "truth": false,
          "reason": "字體不影響證據量。"
        },
        {
          "choice": "各百分比背後的實際分母與證據量",
          "truth": true,
          "reason": "相同百分比可能來自 10 人或 10000 人。"
        },
        {
          "choice": "類別排列順序一定要照筆畫",
          "truth": false,
          "reason": "排列可影響閱讀但不是核心缺失。"
        }
      ],
      "misconceptionTarget": "只重視視覺設計 或只看百分比圖形與顏色，完全不問百分比是由多少樣本計算。",
      "prerequisiteCheck": {
        "skillIds": [
          "misleading-statistics-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "無計算。",
      "ambiguityAndBoundaryAudit": "不要求所有圖都顯示個資。",
      "difficultyReason": "進階資料揭露。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "71e39d16cb915d1e1c65cd5f4cd2b4a5ee29b62873cf5b0586e9460ed055eb47"
    },
    {
      "questionId": "u09-s016-v010",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-literacy",
      "skillId": "statistics-literacy-context",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "社群貼文說『9 成網友支持』，來源是作者限時動態的 20 票，其中 18 票支持。哪個回覆最合理？",
      "givenConditions": [
        "20 票。"
      ],
      "target": "批判社群投票的外推",
      "choices": [
        "18/20=90% 的計算正確，但樣本小且自我選擇，不能代表所有網友",
        "所以全網路 90% 支持",
        "因只有 20 票，90% 計算錯誤",
        "所有社群投票都完全沒有任何價值"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "分開評價計算與推論：計算對，代表性不足。",
        "derivedAnswer": "18/20=90% 的計算正確，但樣本小且自我選擇，不能代表所有網友",
        "trustStoredAnswer": false
      },
      "explanation": "好的統計批判不應因外推錯誤而否定正確算術。 18÷20＝90%的算術正確，但20票很少且是作者限時動態中的自我選擇樣本；可描述這20票，不能外推成所有網友支持率。",
      "steps": [
        "驗算比例。",
        "檢查樣本來源。",
        "限制結論。",
        "驗算18/20的樣本比例確為90%。",
        "再審查樣本大小與自我選擇來源，將結論限制在參與投票者。"
      ],
      "optionAnalysis": [
        {
          "choice": "18/20=90% 的計算正確，但樣本小且自我選擇，不能代表所有網友",
          "truth": true,
          "reason": "樣本內比例正確，外推不合理。"
        },
        {
          "choice": "所以全網路 90% 支持",
          "truth": false,
          "reason": "不能從 20 名自選受眾推全網。"
        },
        {
          "choice": "因只有 20 票，90% 計算錯誤",
          "truth": false,
          "reason": "18/20 確實是 90%。"
        },
        {
          "choice": "所有社群投票都完全沒有任何價值",
          "truth": false,
          "reason": "可描述該次投票，但需限制範圍。"
        }
      ],
      "misconceptionTarget": "不是全盤接受就是全盤否定 或在全盤接受與全盤否定間二選一，沒有分開評估計算正確性與外推有效性。",
      "prerequisiteCheck": {
        "skillIds": [
          "misleading-statistics-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 130,
      "unitAndRoundingCheck": "90% 精確。",
      "ambiguityAndBoundaryAudit": "只評論該次投票。",
      "difficultyReason": "素養媒體。",
      "literacyNecessityReason": "社群投票的自選受眾與小樣本直接影響『網友』外推，情境不可刪除。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7eba6d2aef9e6f32ff9949c93ab0533576b2f6c0c9ddefe011bb4b10612e54f4"
    },
    {
      "questionId": "u09-s016-v011",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-literacy",
      "skillId": "statistics-literacy-context",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "市府比較兩區交通事故：甲區 120 件、人口 20 萬；乙區 90 件、人口 10 萬。若評估居民事故風險，哪個結論較合理？",
      "givenConditions": [
        "件／十萬人。"
      ],
      "target": "用標準化率比較不同人口區域",
      "choices": [
        "甲區事故件數多，所以風險較高",
        "乙區件數少，所以風險較低",
        "乙區每十萬人 90 件，高於甲區 60 件",
        "兩區風險相同"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "換算每十萬人事故率後比較。",
        "derivedAnswer": "乙區每十萬人 90 件，高於甲區 60 件",
        "trustStoredAnswer": false
      },
      "explanation": "風險比較需要適當人口分母。 甲區每十萬人事故率為120÷20萬×10萬＝60件，乙區為90÷10萬×10萬＝90件；比較居民風險要統一人口分母，乙較高。",
      "steps": [
        "計算甲率。",
        "計算乙率。",
        "比較。",
        "將兩區都換算成每十萬人的事故件數。",
        "比較60與90，而不是直接比較總件數120與90。"
      ],
      "optionAnalysis": [
        {
          "choice": "甲區事故件數多，所以風險較高",
          "truth": false,
          "reason": "總件數忽略人口。"
        },
        {
          "choice": "乙區件數少，所以風險較低",
          "truth": false,
          "reason": "乙總件數少但率較高。"
        },
        {
          "choice": "乙區每十萬人 90 件，高於甲區 60 件",
          "truth": true,
          "reason": "甲 120/20萬×10萬=60；乙=90。"
        },
        {
          "choice": "兩區風險相同",
          "truth": false,
          "reason": "60 不等於 90。"
        }
      ],
      "misconceptionTarget": "以總件數代替風險率 或以總事故120大於90判定甲風險較高，忽略甲人口也是乙的兩倍。",
      "prerequisiteCheck": {
        "skillIds": [
          "misleading-statistics-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 130,
      "unitAndRoundingCheck": "60 與 90 精確。",
      "ambiguityAndBoundaryAudit": "未調整道路里程等其他因素，只用題目指標。",
      "difficultyReason": "素養政策比較。",
      "literacyNecessityReason": "區域人口不同，使事故總數不能直接代表居民風險。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8b92ed2afd6c90336bebb9a975e6770babf334fca4225898ca160c9d2da89b9d"
    },
    {
      "questionId": "u09-s016-v012",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-literacy",
      "skillId": "statistics-literacy-context",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "環保報告稱工廠排放『下降 30%』，但未說明比較年份、污染物種類與計算基準。讀者最適合怎麼做？",
      "givenConditions": [
        "污染物與期間未定。"
      ],
      "target": "面對不完整統計宣稱提出查證需求",
      "choices": [
        "直接相信 30%",
        "要求完整基準、時間範圍與原始數值後再判斷",
        "直接認定報告造假",
        "只看圖表顏色判斷"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "百分比必須有分母、比較期與測量定義；應要求補充。",
        "derivedAnswer": "要求完整基準、時間範圍與原始數值後再判斷",
        "trustStoredAnswer": false
      },
      "explanation": "統計資料素養包含知道何時不能下結論。 『下降30%』若缺少比較年份、污染物種類、原始值與計算基準，無法重算也無法判斷涵蓋範圍；應先要求完整資料，而非直接相信或直接指控造假。",
      "steps": [
        "列出缺失資訊。",
        "暫緩判斷。",
        "列出重算30%所需的原值、新值與期間。",
        "補問污染物種類與計算口徑，在資料齊全前暫緩結論。"
      ],
      "optionAnalysis": [
        {
          "choice": "直接相信 30%",
          "truth": false,
          "reason": "資訊不足，不宜直接接受。"
        },
        {
          "choice": "要求完整基準、時間範圍與原始數值後再判斷",
          "truth": true,
          "reason": "缺少基準無法知道 30% 的意義與絕對量。"
        },
        {
          "choice": "直接認定報告造假",
          "truth": false,
          "reason": "資訊不足也不等於造假。"
        },
        {
          "choice": "只看圖表顏色判斷",
          "truth": false,
          "reason": "顏色不是證據。"
        }
      ],
      "misconceptionTarget": "在資訊不足時強行二分判斷 或在資訊不足時強迫作真偽二分判斷，不先補齊基準與原始數。",
      "prerequisiteCheck": {
        "skillIds": [
          "misleading-statistics-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 130,
      "unitAndRoundingCheck": "無計算。",
      "ambiguityAndBoundaryAudit": "回應不預設真偽。",
      "difficultyReason": "素養查證。",
      "literacyNecessityReason": "環境排放宣稱可能影響政策與健康判斷，基準與原始量不可省略。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1afba080ad4041fae4cfe7a93b4927649672d126903ff9c629ff9482a024f860"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u09-s016-cr001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-literacy",
      "skillId": "statistics-literacy-context",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "學校想估計全校學生每天使用手機時間，研究者只在電競社群組張貼自願問卷，共收到120份回覆，平均為4.6小時。請指出母體、樣本、至少兩個可能偏誤，並把可以合理發布的結論改寫出來。",
      "givenConditions": [],
      "target": "辨認母體與便利自願樣本，限制推論範圍。",
      "requiredWork": [
        "母體為全校學生。",
        "樣本為電競社群組中自願回覆的120人。",
        "至少兩項偏誤與有限結論。"
      ],
      "standardSolution": [
        "母體是全校學生；樣本是電競社群組中願意填答的120人。",
        "可能偏誤一：電競社成員或群組使用者可能比一般學生更常使用手機，屬便利抽樣偏誤。",
        "可能偏誤二：願意回覆者可能與未回覆者不同，屬自願回覆或不回應偏誤。",
        "合理結論：『在此次電競社群組自願回覆的120人中，平均每天使用手機4.6小時；此結果不能直接代表全校學生。』",
        "核對結論中的每個量詞：4.6小時只描述電競社群組內自願回覆的120人；沒有跨年級隨機樣本時，不得改寫成全校平均。"
      ],
      "alternativeMethod": "也可指出未涵蓋不在群組者、年級比例失衡或自報時間誤差，只要與設計具體相關。",
      "reasoningSteps": [
        "寫出研究想推論的全部對象。",
        "寫出實際被蒐集的對象。",
        "比較誰有較高被選入或回覆機會。",
        "將結論限制在樣本。",
        "逐一檢查結論是否明確寫出樣本來源、120人及不能代表全校的限制。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "母體、樣本、兩個具體偏誤及有限結論全部正確。"
        },
        {
          "score": 2,
          "criteria": "母體樣本正確，且有一個具體偏誤與合理限制；或兩偏誤正確但結論略含糊。"
        },
        {
          "score": 1,
          "criteria": "至少能正確區分全校母體與120人樣本。"
        },
        {
          "score": 0,
          "criteria": "把120人當全校母體，並直接宣稱全校平均4.6小時。"
        }
      ],
      "partialCreditRules": [
        "兩個偏誤若只是同一句的同義改寫，只算一項。",
        "『樣本太小』不是本題主要偏誤，因120大小本身不能修正抽樣來源。"
      ],
      "followThroughPolicy": "本題無算術跟隨錯誤；統計對象與偏誤需分項評。",
      "unitAndNotationRules": "手機時間以小時；樣本數以人。",
      "answerOnlyPolicy": "只寫『不能代表全校』而無母體樣本與原因，最高1分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "抽樣框限電競社群且採自願回覆，故120人的4.6只描述回覆者。",
        "boundaryAndAmbiguityAudit": "研究目的與蒐集管道明確，偏誤來源可具體辨識。",
        "rubricAlignmentEvidence": "完整資料素養需從對象、機制到結論逐層說明。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "5beacd75c8768018ab6b75319fed034a3dbc1bc77d0ac3b53ce14a365de160ad",
      "commonErrors": [
        "把電競社群組中的120名自願回覆者寫成全校母體，直接外推4.6小時。",
        "只說樣本太小，卻未指出便利抽樣、自願回覆與不回應偏誤的具體機制。"
      ]
    },
    {
      "questionId": "u09-s016-cr002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-literacy",
      "skillId": "statistics-literacy-context",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "某市觀察到帶環保杯的居民每週購買含糖飲料平均2.1杯，未帶者平均3.4杯，報告因此主張『發放環保杯可使每人每週少喝1.3杯含糖飲料』。請評估這項因果主張，提出至少三個可能混淆因素，並設計一個比原調查更能檢驗因果的研究方案，說明要比較什麼。",
      "givenConditions": [],
      "target": "由觀察性平均差辨認關聯與因果界線，提出控制混淆的研究設計。",
      "requiredWork": [
        "承認樣本平均差1.3但否定其單獨證明因果。",
        "至少三個具體混淆因素。",
        "提出隨機分派或等效控制方案及比較指標。"
      ],
      "standardSolution": [
        "觀察到的平均差為3.4-2.1=1.3杯，但帶環保杯是居民自行選擇，不是隨機分派，因此只能說兩群在樣本中有關聯。",
        "可能混淆因素包括健康意識、年齡、收入、工作地點是否有飲水機、原本飲料習慣、運動習慣或環保態度。",
        "較強方案：招募符合條件的居民，先量測基準含糖飲料量，再隨機分為『免費提供環保杯並鼓勵使用』與『不提供』兩組；在相同期間記錄每人每週含糖飲料杯數，比較兩組從基準到追蹤期的平均變化，並監測遵從與流失。",
        "隨機試驗應比較兩組從基準期到追蹤期的平均變化，而不只比較追蹤期絕對值；同時記錄遵從、流失與含糖飲料定義，才能判斷差異是否可歸因於介入。"
      ],
      "alternativeMethod": "若不能隨機，可配對相似居民並控制基準飲用量、年齡等，但因果證據仍弱於隨機實驗。",
      "reasoningSteps": [
        "重新計算觀察差。",
        "辨認暴露不是隨機。",
        "列出同時影響帶杯與飲料量的因素。",
        "設計對照與隨機分派。",
        "明確寫出追蹤指標與比較方式。",
        "確認三個混淆因素各能同時影響是否帶杯及飲料量，再檢查研究方案是否真正打破自行選擇。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確解釋1.3為觀察差非因果、列出至少三個合理混淆因素，並提出含隨機分派、對照、基準與追蹤比較的方案。"
        },
        {
          "score": 2,
          "criteria": "因果限制與三個混淆因素正確，但研究方案缺少一項關鍵元素；或方案完整但只列兩個混淆因素。"
        },
        {
          "score": 1,
          "criteria": "知道相關不等於因果並能舉一個具體混淆因素。"
        },
        {
          "score": 0,
          "criteria": "直接接受發放環保杯必然減少1.3杯，無混淆或設計概念。"
        }
      ],
      "partialCreditRules": [
        "混淆因素必須可能同時影響帶杯行為與含糖飲料量。",
        "只擴大樣本但仍便利觀察，不能視為因果設計。"
      ],
      "followThroughPolicy": "差值若誤算但因果審查與設計完整，可保留大部分概念分。",
      "unitAndNotationRules": "飲料量以杯/人/週；研究比較需保持相同期間。",
      "answerOnlyPolicy": "只寫『相關不等於因果』，最高1分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "兩群差1.3，但自我選擇造成混淆；隨機對照並比較基準後變化能提高因果識別。",
        "boundaryAndAmbiguityAudit": "未要求實際執行研究；倫理與遵從可在設計限制中說明。",
        "rubricAlignmentEvidence": "滿分需從數值、混淆到可檢驗研究設計完整推進。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "75a602f959139f62669a9556a5d83248f8afe007b2d4729a359dd860b80120e3",
      "commonErrors": [
        "由3.4－2.1＝1.3就宣稱環保杯造成減量，沒有區分觀察差與因果效果。",
        "研究方案只再做一次問卷，未加入隨機分派、對照組、基準量測與相同追蹤期。"
      ]
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u09-s016-v001-semantic-r1",
      "questionId": "u09-s016-v001",
      "unitId": "u09",
      "skillId": "statistics-literacy-context",
      "independentRecalculation": "母群是全校，分層涵蓋各年級再隨機抽樣較合理。",
      "correctChoiceCheck": "獨立計算得到「從各年級隨機抽取學生」，位於索引 3。",
      "distractorAudit": [
        "幹部可能與一般學生不同。",
        "地點選樣會漏掉其他學生。",
        "自願回覆易有自我選擇偏差。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「從各年級隨機抽取學生」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計資料素養」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "『較合適』不宣稱完全無偏差。",
      "difficultyEvidence": "基礎統計素養。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "fc6ecc3b53b8ec7bd533b76b779c8628b54bfa1ede3fc06c2fa371d64f8368a2"
    },
    {
      "reviewId": "u09-s016-v002-semantic-r1",
      "questionId": "u09-s016-v002",
      "unitId": "u09",
      "skillId": "statistics-literacy-context",
      "independentRecalculation": "平均定義直接支持總分/人數=68。",
      "correctChoiceCheck": "獨立計算得到「樣本總分除以樣本數等於 68」，位於索引 1。",
      "distractorAudit": [
        "個別值可不同。",
        "平均不決定中位數。",
        "樣本平均不保證母群平均相同。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「樣本總分除以樣本數等於 68」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計資料素養」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "只有定義性敘述必然。",
      "difficultyEvidence": "基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "6b4a222071a284fdc0c113c6907b61139ddfa293e87a6ca8ace626e6a7e83868"
    },
    {
      "reviewId": "u09-s016-v003-semantic-r1",
      "questionId": "u09-s016-v003",
      "unitId": "u09",
      "skillId": "statistics-literacy-context",
      "independentRecalculation": "回覆者若與未回覆者系統性不同，樣本結論會偏。",
      "correctChoiceCheck": "獨立計算得到「未回覆者可能與回覆者意見不同」，位於索引 0。",
      "distractorAudit": [
        "不一定錯，但需評估。",
        "不能自動代表全部。",
        "回覆模式可能影響結果。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「未回覆者可能與回覆者意見不同」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計資料素養」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不斷言一定偏，只指出風險。",
      "difficultyEvidence": "基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "584dcac7c658e7405698a6b2967e0bb1dc00ff0ad2412643a11899d1044a7d9a"
    },
    {
      "reviewId": "u09-s016-v004-semantic-r1",
      "questionId": "u09-s016-v004",
      "unitId": "u09",
      "skillId": "statistics-literacy-context",
      "independentRecalculation": "平均差只能描述關聯；作因果結論需更嚴謹設計。",
      "correctChoiceCheck": "獨立計算得到「兩者在樣本中有關聯，但不能僅此證明運動造成睡眠變長」，位於索引 2。",
      "distractorAudit": [
        "缺乏實驗控制。",
        "反向因果也未證明。",
        "資料顯示至少有關聯。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「兩者在樣本中有關聯，但不能僅此證明運動造成睡眠變長」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計資料素養」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "結論使用保守語氣。",
      "difficultyEvidence": "標準素養。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "9aa71acedc6fe1fea9a9eaa3029906f197e54da14432058a65ffdd5715442e01"
    },
    {
      "reviewId": "u09-s016-v005-semantic-r1",
      "questionId": "u09-s016-v005",
      "unitId": "u09",
      "skillId": "statistics-literacy-context",
      "independentRecalculation": "直接差 1 個百分點，相對於原 4% 是 25%。",
      "correctChoiceCheck": "獨立計算得到「增加 1 個百分點；相對增幅為 25%」，位於索引 0。",
      "distractorAudit": [
        "百分點與相對百分比不同。",
        "相對增幅不是 1%。",
        "差不是 5。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「增加 1 個百分點；相對增幅為 25%」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計資料素養」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "兩種數值回答不同問題。",
      "difficultyEvidence": "標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "a94c777662d1d17bb2ec198be16c1b2fd0384a4848b3243673e054d6a2082de4"
    },
    {
      "reviewId": "u09-s016-v006-semantic-r1",
      "questionId": "u09-s016-v006",
      "unitId": "u09",
      "skillId": "statistics-literacy-context",
      "independentRecalculation": "樣本內支持人數約 520；母群推論要考慮代表性與誤差。",
      "correctChoiceCheck": "獨立計算得到「在該樣本中約 520 人支持；推論母群仍需抽樣方法與誤差資訊」，位於索引 3。",
      "distractorAudit": [
        "樣本比例不是母群真值保證。",
        "大樣本不能修正偏差抽樣。",
        "可換算樣本內人數。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「在該樣本中約 520 人支持；推論母群仍需抽樣方法與誤差資訊」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計資料素養」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不自行提供未給定的誤差範圍。",
      "difficultyEvidence": "標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "dadd3c3c607f0379f056744a071162fb6d48b11b2a2a02c464f4c6f3a7e9db04"
    },
    {
      "reviewId": "u09-s016-v007-semantic-r1",
      "questionId": "u09-s016-v007",
      "unitId": "u09",
      "skillId": "statistics-literacy-context",
      "independentRecalculation": "先確認隨機分派、對照條件、樣本特徵，再評估 70% 與 60% 差異。",
      "correctChoiceCheck": "獨立計算得到「檢查兩試驗分組、樣本數與受試者條件是否可比」，位於索引 1。",
      "distractorAudit": [
        "小樣本 20 人不足以保證更有效。",
        "人數也受樣本大小影響。",
        "直接平均沒有明確權重與目的。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「檢查兩試驗分組、樣本數與受試者條件是否可比」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計資料素養」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不提供醫療建議，只評估資料。",
      "difficultyEvidence": "進階素養。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "ecd2aeaa68222553ee9937d87b20584661f42ccdf08b2d2ffcc6d2c3555d5e79"
    },
    {
      "reviewId": "u09-s016-v008-semantic-r1",
      "questionId": "u09-s016-v008",
      "unitId": "u09",
      "skillId": "statistics-literacy-context",
      "independentRecalculation": "例如多數人略降、少數人進步很多，總和仍可能提高。",
      "correctChoiceCheck": "獨立計算得到「少數高分大幅上升，拉高平均；多數中央位置略降」，位於索引 3。",
      "distractorAudit": [
        "同幅進步會使兩者都上升。",
        "所有下降平均也會下降。",
        "兩者可不同方向。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「少數高分大幅上升，拉高平均；多數中央位置略降」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計資料素養」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "只問可能情況，不聲稱唯一。",
      "difficultyEvidence": "進階推理。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "2d3c525a0ee019dfc902e9ba4a5fa61322630b6da0c9860d04121d588c187459"
    },
    {
      "reviewId": "u09-s016-v009-semantic-r1",
      "questionId": "u09-s016-v009",
      "unitId": "u09",
      "skillId": "statistics-literacy-context",
      "independentRecalculation": "沒有分母就難判斷實際人數與穩定性。",
      "correctChoiceCheck": "獨立計算得到「各百分比背後的實際分母與證據量」，位於索引 2。",
      "distractorAudit": [
        "顏色非主要統計資訊。",
        "字體不影響證據量。",
        "排列可影響閱讀但不是核心缺失。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「各百分比背後的實際分母與證據量」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計資料素養」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不要求所有圖都顯示個資。",
      "difficultyEvidence": "進階資料揭露。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "52eb8a83d418be2c35f34354f0a9b5aabb58bf6e5c8b43f63b6c15abc576876a"
    },
    {
      "reviewId": "u09-s016-v010-semantic-r1",
      "questionId": "u09-s016-v010",
      "unitId": "u09",
      "skillId": "statistics-literacy-context",
      "independentRecalculation": "分開評價計算與推論：計算對，代表性不足。",
      "correctChoiceCheck": "獨立計算得到「18/20=90% 的計算正確，但樣本小且自我選擇，不能代表所有網友」，位於索引 0。",
      "distractorAudit": [
        "不能從 20 名自選受眾推全網。",
        "18/20 確實是 90%。",
        "可描述該次投票，但需限制範圍。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「18/20=90% 的計算正確，但樣本小且自我選擇，不能代表所有網友」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計資料素養」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "只評論該次投票。",
      "difficultyEvidence": "素養媒體。",
      "literacyEvidence": "社群投票的自選受眾與小樣本直接影響『網友』外推，情境不可刪除。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "84f830488164f66a6d781df0b17be7adde472410b866cbd85b567afe1868fb26"
    },
    {
      "reviewId": "u09-s016-v011-semantic-r1",
      "questionId": "u09-s016-v011",
      "unitId": "u09",
      "skillId": "statistics-literacy-context",
      "independentRecalculation": "換算每十萬人事故率後比較。",
      "correctChoiceCheck": "獨立計算得到「乙區每十萬人 90 件，高於甲區 60 件」，位於索引 2。",
      "distractorAudit": [
        "總件數忽略人口。",
        "乙總件數少但率較高。",
        "60 不等於 90。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「乙區每十萬人 90 件，高於甲區 60 件」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計資料素養」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "未調整道路里程等其他因素，只用題目指標。",
      "difficultyEvidence": "素養政策比較。",
      "literacyEvidence": "區域人口不同，使事故總數不能直接代表居民風險。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "55ee2308fff54ea755e3f5381596d5035777a61f5d12b8900c11dce89fd2295f"
    },
    {
      "reviewId": "u09-s016-v012-semantic-r1",
      "questionId": "u09-s016-v012",
      "unitId": "u09",
      "skillId": "statistics-literacy-context",
      "independentRecalculation": "百分比必須有分母、比較期與測量定義；應要求補充。",
      "correctChoiceCheck": "獨立計算得到「要求完整基準、時間範圍與原始數值後再判斷」，位於索引 1。",
      "distractorAudit": [
        "資訊不足，不宜直接接受。",
        "資訊不足也不等於造假。",
        "顏色不是證據。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「要求完整基準、時間範圍與原始數值後再判斷」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「統計資料素養」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "回應不預設真偽。",
      "difficultyEvidence": "素養查證。",
      "literacyEvidence": "環境排放宣稱可能影響政策與健康判斷，基準與原始量不可省略。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "dcfda9ba94a57017042eafd9aa73a0503ab5ffedf525ba927436f3283147b809"
    }
  ],
  "drawingSpecs": []
};
