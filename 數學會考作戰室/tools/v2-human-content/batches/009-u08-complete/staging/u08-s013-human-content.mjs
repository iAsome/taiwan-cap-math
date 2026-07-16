// SERIALIZATION OF REVIEWED HUMAN CONTENT.

// CENTRAL_COORDINATOR_APPROVAL_REQUIRED.

// DO NOT EDIT, REPAIR OR ACTIVATE THIS MODULE DIRECTLY.

export const LECTURE = {
  "lectureId": "u08-s013-lecture-r1",
  "unitId": "u08",
  "numericUnitId": 8,
  "topicId": "u08-views",
  "skillId": "orthographic-description",
  "lockedSkillTitle": "三視圖文字描述",
  "title": "三視圖文字描述：把輪廓條件轉成列高與欄高",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能把文字版俯視占用位置轉成底面配置。",
    "能把正視圖與側視圖的高度序列解讀為最高欄高。",
    "能檢查三個視圖是否相容。",
    "能求可能的最少或最多方塊數。"
  ],
  "prerequisiteBridge": {
    "prerequisiteSkillIds": [
      "solid-views-basic"
    ],
    "bridgeExplanation": "先知道各視圖保留的方向，再把圖像改寫成明確的座標位置與高度序列。"
  },
  "prerequisites": [
    {
      "skillId": "solid-views-basic",
      "requiredLevel": "能辨認正視、俯視、側視所保留的方向，並理解遮蔽與欄高。"
    }
  ],
  "glossary": [
    {
      "term": "底面格",
      "definition": "俯視圖中的一個占用位置。"
    },
    {
      "term": "高度序列",
      "definition": "依固定方向列出各欄可見最高方塊數。"
    },
    {
      "term": "列",
      "definition": "本課文字座標中，沿前後方向排列的一組位置。"
    },
    {
      "term": "欄",
      "definition": "沿左右方向排列的一組位置。"
    },
    {
      "term": "相容",
      "definition": "存在至少一個立體同時符合所有視圖條件。"
    }
  ],
  "notation": [
    {
      "symbol": "(x,y)",
      "meaning": "底面第 x 欄、第 y 列的位置；題目會明確約定方向。"
    },
    {
      "symbol": "[2,1,3]",
      "meaning": "依指定順序三欄的最高高度。"
    },
    {
      "symbol": "h(x,y)",
      "meaning": "位置 (x,y) 的堆疊高度，若占用則為正整數。"
    }
  ],
  "conceptDevelopment": [
    "文字三視圖必須先定義座標方向。俯視提供哪些 (x,y) 有方塊；正視高度序列通常給每個 x 欄在所有 y 中的最大高度；側視則給每個 y 列在所有 x 中的最大高度。",
    "若正視某欄高度為 3，表示該欄至少有一個位置高度 3，不代表該欄每個位置都高 3。",
    "求最少方塊數時，盡量讓同一高堆同時滿足正視與側視的最大值；求最多時，在不超過各欄與各列上限下提高其他占用位置。",
    "相容性檢查包括：俯視占用位置是否能承擔所需高度；正視與側視的全域最高值應一致，因為都是同一立體的最高高度。",
    "判定最少或最多不只要算出界值，還必須同時給下界或上界理由與可達配置；界值若無法由某組正整數高度實現，就不是實際答案。"
  ],
  "formalDefinitions": [
    {
      "name": "正視欄高",
      "statement": "對固定 x，所有占用 y 位置高度的最大值。"
    },
    {
      "name": "側視列高",
      "statement": "對固定 y，所有占用 x 位置高度的最大值。"
    },
    {
      "name": "最少方塊配置",
      "statement": "在滿足全部視圖條件下，使所有 h(x,y) 總和最小。"
    }
  ],
  "formulas": [
    {
      "formula": "正視第 x 欄=max_y h(x,y)",
      "conditions": [
        "該 x 欄至少有一個俯視占用位置"
      ],
      "meaning": "沿前後方向投影後只見最高輪廓。"
    },
    {
      "formula": "側視第 y 列=max_x h(x,y)",
      "conditions": [
        "該 y 列至少有一個俯視占用位置"
      ],
      "meaning": "沿左右方向投影後只見最高輪廓。"
    },
    {
      "formula": "總方塊數=Σh(x,y)",
      "conditions": [
        "只對俯視占用位置求和"
      ],
      "meaning": "每一位置高度即方塊數。"
    }
  ],
  "invalidUseCases": [
    "正視高度 3 不能解讀為整欄每個底面格都有 3 塊。",
    "俯視未占用的位置高度必須是 0，不能為了滿足側視偷偷加方塊。",
    "正視與側視的最大高度不同時，不一定相容；需檢查是否有方向或順序誤讀。",
    "沒有俯視位置資訊時，最少與最多方塊數常無法唯一。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "明確寫出所有俯視占用座標。",
      "check": "未列出的座標高度設 0。"
    },
    {
      "step": 2,
      "instruction": "把正視序列轉成每個 x 的最大值條件。",
      "check": "每欄至少一個位置達到該高度。"
    },
    {
      "step": 3,
      "instruction": "把側視序列轉成每個 y 的最大值條件。",
      "check": "每列至少一個位置達到該高度。"
    },
    {
      "step": 4,
      "instruction": "配置高度並逐欄逐列驗證。",
      "check": "求最少時合併高峰；求最多時不超過雙向上限。"
    },
    {
      "step": 5,
      "instruction": "對最小或最大界值建立可達配置，並逐欄逐列代回。",
      "check": "每個占用位置為正整數高度，且所有指定最大值都恰好達到。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "俯視占用 (1,1)、(1,2)、(2,1)，正視兩欄高度 [2,1]。這表示什麼？",
      "solutionSteps": [
        "依x座標把位置分成第一欄兩格與第二欄一格。",
        "第一欄兩高度最大值為二。",
        "第二欄唯一高度為一。"
      ],
      "answer": "max(h11,h12)=2，且 h21=1。",
      "why": "正視沿前後方向壓縮，同一x欄只留下最高堆；欄高是最大值而不是欄內總和，也不要求每格都達到最大值。"
    },
    {
      "exampleId": "L2",
      "prompt": "若側視兩列高度 [2,1]，且沿用上例，配置 h11=2、h12=1、h21=1 是否相容？",
      "solutionSteps": [
        "正視第一欄最大二、第二欄最大一。",
        "側視第一列取h11與h21最大值二。",
        "側視第二列只有h12等於一，兩序列皆相符。"
      ],
      "answer": "相容。",
      "why": "相容配置必須同時通過正視的逐欄最大值與側視的逐列最大值；只驗其中一個方向不能保證來自同一立體。"
    },
    {
      "exampleId": "L3",
      "prompt": "俯視只有 (1,1)、(2,1)，正視 [3,2]，側視只有一列高度 [3]，最少方塊數？",
      "solutionSteps": [
        "兩位置各自是唯一正視欄，故高度必為三與二。",
        "側視唯一一列的最大值為三，已由三高堆滿足。",
        "總數三加二等於五。"
      ],
      "answer": "5 塊。",
      "why": "兩個正視欄的需求不能合併到同一位置，但側視最高三可由既有三高堆共享；逐項分辨可合併與不可合併的限制才會得到最少值。"
    },
    {
      "exampleId": "L4",
      "prompt": "正視最高為 4，側視所有列最高都不超過 3，能否相容？",
      "solutionSteps": [
        "正視最高四表示存在一個實際四高堆。",
        "該位置必屬於某一側視列。",
        "那一列最高至少四，與所有列至多三矛盾。"
      ],
      "answer": "不能相容。",
      "why": "同一立體的全域最高堆從正面與側面都會出現在某個輪廓中，因此兩個水平視圖的全域最大高度必須一致。"
    }
  ],
  "levelConnections": {
    "basic": "把視圖文字轉成最大值條件。",
    "standard": "驗證指定高度配置。",
    "advanced": "求最少或最多方塊數與檢查相容性。",
    "literacy": "倉儲堆疊、城市天際線與貨架配置可用俯視占位和兩方向最高高度描述。"
  },
  "commonMistakes": [
    {
      "mistake": "把正視序列當每格高度。",
      "why": "忽略投影只留最大值。",
      "correction": "每個值是該欄最大高度。"
    },
    {
      "mistake": "在俯視空格加方塊。",
      "why": "無視占用限制。",
      "correction": "未占用位置高度固定為 0。"
    },
    {
      "mistake": "只驗正視不驗側視。",
      "why": "配置可能違反另一方向。",
      "correction": "完成後逐 x 欄與 y 列取最大值。"
    },
    {
      "mistake": "正視 [3,2] 就把側視寫成 [3,2]。",
      "why": "兩序列方向與格數不同。",
      "correction": "側視依前後列而非左右欄。"
    },
    {
      "mistake": "求最少時讓每格都達到欄高。",
      "why": "過度配置。",
      "correction": "只需至少一格達每個最大值。"
    },
    {
      "mistake": "認為不同最大高度仍可相容。",
      "why": "忽略全域最高方塊同時會出現在兩水平視圖。",
      "correction": "正視與側視的最大值必須相同。"
    }
  ],
  "selfCheckItems": [
    "座標方向是否明確？",
    "每個視圖值是最大值還是總和？",
    "俯視空格是否保持 0？",
    "配置後是否同時通過正視與側視？"
  ],
  "conciseSummary": [
    "俯視決定占用位置。",
    "正視與側視給欄或列的最大高度。",
    "總方塊數是各占用位置高度總和。",
    "最少配置可讓同一高堆同時滿足兩方向需求。"
  ],
  "connections": {
    "previous": "上一技能建立三視圖的方向與投影概念。",
    "next": [
      "最後一技能把角度、面積、單位與三視圖整合到真實資訊判讀。"
    ]
  },
  "figureReferences": [],
  "accessibilityNote": "本技能依鎖定範圍採全文字敘述；方向、位置與視圖關係均以明確語句表達，不要求由未提供的圖形推測。",
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "u08 locked CAP text-only boundary",
    "examplesNotCopiedFromLegacyOrProductionBank": true,
    "skillSpecificEvidence": "以座標與最大值逐一驗證四例；配置 (2,1,1) 同時產生正視 [2,1] 與側視 [2,1]，最少方塊例為 5，並檢查兩水平視圖的全域最大高度一致。",
    "manualSymbolAndUnitCheck": true,
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "ed628852ee7984ac61aba5af225d9dd86487379353b4db29d43a22dedd621579"
};

export const QUESTIONS = [
  {
    "questionId": "u08-s013-v001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "orthographic-description",
    "lockedSkillTitle": "三視圖文字描述",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "俯視圖的文字紀錄顯示第 1 欄有兩個占用位置 (1,1)、(1,2)，正視圖第 1 欄高度為 3。下列何者必定正確？",
    "givenConditions": [
      "俯視占用位置為 (1,1)、(1,2)。",
      "正視第 1 欄高度為 3。"
    ],
    "target": "解讀正視欄高的最大值意義",
    "choices": [
      "max(h(1,1), h(1,2))＝3",
      "h(1,1)＝h(1,2)＝3",
      "h(1,1)+h(1,2)＝3",
      "min(h(1,1), h(1,2))＝3"
    ],
    "answerIndex": 0,
    "independentSolution": "正視欄高 3 只限制最大值為 3，故必定成立的是 max(h(1,1),h(1,2))=3。",
    "explanation": "沿前後方向投影時，同一 x 欄只留下最高輪廓，因此兩個高度的最大值為 3。 最大值等於三只保證兩堆中至少一堆達三，另一堆可為一、二或三；因此相等、總和與最小值敘述都不是必然。",
    "steps": [
      "找出同一 x 欄的兩個位置。",
      "依定義取最大高度。",
      "寫成 max(h(1,1),h(1,2))=3。",
      "用高度組合三與一作反例排除兩堆皆三。",
      "確認最大值式在所有符合輪廓的配置中都成立。"
    ],
    "optionAnalysis": [
      {
        "choice": "max(h(1,1), h(1,2))＝3",
        "truth": true,
        "reason": "正視第 1 欄高度就是該欄各前後位置高度的最大值。"
      },
      {
        "choice": "h(1,1)＝h(1,2)＝3",
        "truth": false,
        "reason": "正視輪廓只保留最高值，不表示兩堆同高。"
      },
      {
        "choice": "h(1,1)+h(1,2)＝3",
        "truth": false,
        "reason": "正視高度不是該欄總和。"
      },
      {
        "choice": "min(h(1,1), h(1,2))＝3",
        "truth": false,
        "reason": "正視高度不代表較小值。"
      }
    ],
    "misconceptionTarget": "把投影高度誤當成每一堆高度或高度總和。 也可能把欄高三平均分配到兩個位置，誤把最大值條件當成總和條件。",
    "prerequisiteCheck": "只需知道正視欄高是同欄各堆高度的最大值。",
    "estimatedTimeSec": 90,
    "unitCheck": "高度皆以方塊層數表示，沒有長度單位混用。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "直接套用一個欄高的定義，屬基本判讀。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "087d69dfe009fc4d2ca00da55db73e130591289f6e8370804ab4bb09562f2330"
  },
  {
    "questionId": "u08-s013-v002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "orthographic-description",
    "lockedSkillTitle": "三視圖文字描述",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "俯視只有 (1,1)、(2,1) 兩個占用位置，兩處高度分別為 2、1。其正視圖兩欄高度與側視圖唯一一列高度依序為何？",
    "givenConditions": [
      "占用位置只有 (1,1)、(2,1)。",
      "高度依序為 2、1。"
    ],
    "target": "由已知堆高寫出兩個方向的輪廓",
    "choices": [
      "正視 [2,2]，側視 [1]",
      "正視 [2,1]，側視 [2]",
      "正視 [3,1]，側視 [3]",
      "正視 [1,2]，側視 [2]"
    ],
    "answerIndex": 1,
    "independentSolution": "正視序列直接是 [2,1]；側視唯一列為 max(2,1)=2。",
    "explanation": "正視按 x 欄列出高度 2、1；側視沿左右壓縮，同一列最高為 max(2,1)=2。 每個正視欄只有一個占用位置，欄高直接為二、一；側視唯一一列同時看見兩堆，只留下較高的二，不能把兩堆相加成三。",
    "steps": [
      "依 x=1、2 讀出正視欄高。",
      "對 y=1 的兩個位置取最大值。",
      "確認兩位置同屬側視的第一列。",
      "對該列高度二與一取最大值二。"
    ],
    "optionAnalysis": [
      {
        "choice": "正視 [2,2]，側視 [1]",
        "truth": false,
        "reason": "第二欄實際只有 1 層，且側視應取兩堆最大值 2。"
      },
      {
        "choice": "正視 [2,1]，側視 [2]",
        "truth": true,
        "reason": "每個 x 欄只有一堆，所以正視為 [2,1]；唯一 y 列取最大值得 2。"
      },
      {
        "choice": "正視 [3,1]，側視 [3]",
        "truth": false,
        "reason": "投影不會把兩堆高度相加成 3。"
      },
      {
        "choice": "正視 [1,2]，側視 [2]",
        "truth": false,
        "reason": "正視欄序不可把第 1、2 欄顛倒。"
      }
    ],
    "misconceptionTarget": "把投影輪廓當成高度相加，或顛倒欄序。 還可能把正視欄位順序由右向左讀，得到顛倒的高度序列。",
    "prerequisiteCheck": "需能分辨正視按 x 欄、側視按 y 列取最大值。",
    "estimatedTimeSec": 90,
    "unitCheck": "所有數值均為方塊層數。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "每一方向僅做一次最大值判讀。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "bc918fe240d80393f069945a0bc285518d346377f06ae82ed691a7389402b883"
  },
  {
    "questionId": "u08-s013-v003",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "orthographic-description",
    "lockedSkillTitle": "三視圖文字描述",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "俯視文字紀錄有三個占用位置，其高度分別為 2 層、3 層、1 層。這個立體共用了多少個單位方塊？",
    "givenConditions": [
      "三個位置高度為 2、3、1。"
    ],
    "target": "由各位置高度求方塊總數",
    "choices": [
      "3 個",
      "5 個",
      "7 個",
      "6 個"
    ],
    "answerIndex": 3,
    "independentSolution": "2+3+1=6，所以共 6 個單位方塊。",
    "explanation": "每一位置的高度就是該處方塊數，逐處相加即可。 每個占用位置的高度就是該處單位方塊數，三處依序有二、三、一塊；逐處相加為六，而占用格數三只表示底層下限。",
    "steps": [
      "列出三處高度 2、3、1。",
      "相加得 6。",
      "將每一位置高度轉成該處方塊數。",
      "用二加三加一驗算總和為六。"
    ],
    "optionAnalysis": [
      {
        "choice": "3 個",
        "truth": false,
        "reason": "只數占用位置，忽略每處可能堆疊多層。"
      },
      {
        "choice": "5 個",
        "truth": false,
        "reason": "漏加其中一處高度。"
      },
      {
        "choice": "7 個",
        "truth": false,
        "reason": "三個高度相加並不等於 7。"
      },
      {
        "choice": "6 個",
        "truth": true,
        "reason": "總方塊數等於各占用位置高度總和：2+3+1=6。"
      }
    ],
    "misconceptionTarget": "把俯視占用格數直接當成總方塊數。 也可能只取最高的三層當總數，忽略另外兩個占用位置。",
    "prerequisiteCheck": "只使用總方塊數為各堆高度總和。",
    "estimatedTimeSec": 90,
    "unitCheck": "答案單位為「個單位方塊」。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "單一步驟加總，屬基本計數。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "38d7e6c6d0f69aa12cf4142030653429ab6e0b9a83d2eb5e2ce55ef7ce747a21"
  },
  {
    "questionId": "u08-s013-v004",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "orthographic-description",
    "lockedSkillTitle": "三視圖文字描述",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "俯視占用位置為 (1,1)、(1,2)、(2,1)。正視兩欄高度為 [3,2]，側視兩列高度為 [2,3]。位置 (1,2) 的高度必為多少？",
    "givenConditions": [
      "俯視為 L 形三格。",
      "側視第 2 列高度為 3。"
    ],
    "target": "利用只有一個占用位置的列推回堆高",
    "choices": [
      "1",
      "2",
      "3",
      "無法確定"
    ],
    "answerIndex": 2,
    "independentSolution": "y=2 僅含 h(1,2)，而其最大值被指定為 3，因此 h(1,2)=3。",
    "explanation": "先用俯視確認第 2 列沒有其他占用位置；側視該列輪廓 3 就是唯一一堆的高度。 第二列在俯視中只有位置一逗號二，所以側視第二列最大值三只能由這一堆達成；代回正視第一欄也仍能得到高度三。",
    "steps": [
      "找出 y=2 的占用位置。",
      "確認只有 (1,2)。",
      "由側視第 2 列高度得 h(1,2)=3。",
      "把側視第二列的最大值條件寫成單一高度。",
      "代回第一欄最大值，確認與正視高度三相容。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "若為 1，第二列唯一位置的側視高度不會是 3。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "若為 2，第二列最大高度只能是 2。"
      },
      {
        "choice": "3",
        "truth": true,
        "reason": "第 2 列只有 (1,2)，側視第 2 列高度為 3，所以該處必高 3。"
      },
      {
        "choice": "無法確定",
        "truth": false,
        "reason": "第二列只有 (1,2) 一處，占用與側視高度已使其唯一。"
      }
    ],
    "misconceptionTarget": "看到正視第 1 欄高度 3 卻誤以為該欄每一處都無法確定。 也可能只看正視第一欄有兩堆，便忽略側視單一位置已能唯一決定高度。",
    "prerequisiteCheck": "需能由俯視占用與側視最大值共同判讀。",
    "estimatedTimeSec": 90,
    "unitCheck": "高度以層數表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "必須合併兩種視圖條件，屬標準題。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "fbb1a9e3fd47a94fd29a32ae5d88432cc6c66d6e965b43879a87edd74f62de6c"
  },
  {
    "questionId": "u08-s013-v005",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "orthographic-description",
    "lockedSkillTitle": "三視圖文字描述",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個 2×2 俯視範圍四格都有方塊。正視兩欄高度為 [2,3]，側視兩列高度為 [3,2]。在符合三視圖的情況下，最少需要多少個單位方塊？",
    "givenConditions": [
      "2×2 四格全部占用。",
      "正視 [2,3]，側視 [3,2]。"
    ],
    "target": "由兩方向最大高度求最少方塊數",
    "choices": [
      "5 個",
      "6 個",
      "8 個",
      "7 個"
    ],
    "answerIndex": 3,
    "independentSolution": "可配置 h(2,1)=3、h(1,2)=2、其餘兩格各 1，總數 7；少於 7 無法同時保有一個 3 高與另一交叉位置的 2 高。",
    "explanation": "求最少時應讓同一高堆同時滿足一個正視欄高與一個側視列高。 四格先各一塊共四；高度三的堆增加二塊，高度二的交叉堆再增加一塊，合計七。兩個加高位置不能合併，因指定欄列交會不同。",
    "steps": [
      "四個占用格先各放 1 個。",
      "在第 2 欄第 1 列提高到 3。",
      "在第 1 欄第 2 列提高到 2。",
      "相加得 7。",
      "以四個底層加上兩個必要增量建立下界七。",
      "逐欄逐列取最大值，驗證配置確實可達下界。"
    ],
    "optionAnalysis": [
      {
        "choice": "5 個",
        "truth": false,
        "reason": "四格至少各 1 個後，只多放 1 個仍無法同時形成高度 3 與另一個高度 2。"
      },
      {
        "choice": "6 個",
        "truth": false,
        "reason": "高度 3 與另一列、另一欄的高度 2 不能只靠總數 6 完成全部最大值。"
      },
      {
        "choice": "8 個",
        "truth": false,
        "reason": "可把高度 3 放在第 2 欄第 1 列，高度 2 放在第 1 欄第 2 列，其餘各 1，共只需 7。"
      },
      {
        "choice": "7 個",
        "truth": true,
        "reason": "以一堆高度 3 同時滿足第 2 欄與第 1 列，再以一堆高度 2 同時滿足第 1 欄與第 2 列，其餘兩格各 1，總數 3+2+1+1=7。"
      }
    ],
    "misconceptionTarget": "直接把兩個視圖高度相加，或忘記每個占用格至少 1 個。 還可能把高度三與二放在同一格，導致另一個需要高度二的欄或列沒有達標。",
    "prerequisiteCheck": "需掌握正視與側視最大值並能安排共享高堆。",
    "estimatedTimeSec": 120,
    "unitCheck": "方塊數以「個」計，輪廓數值為層數。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "要構造同時滿足兩方向的最省配置，屬標準推理。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "77d619e91b0c1b3291663abe756b05d5635ff3394f6ea2e80395d7a9f5929c6e"
  },
  {
    "questionId": "u08-s013-v006",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "orthographic-description",
    "lockedSkillTitle": "三視圖文字描述",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "某俯視占用配置非空，正視最高欄為 4 層，側視最高列為 3 層。下列判斷何者正確？",
    "givenConditions": [
      "正視全域最高為 4。",
      "側視全域最高為 3。"
    ],
    "target": "檢查兩個視圖的相容性",
    "choices": [
      "可能，只要總方塊數為 7",
      "可能，只要俯視有至少 4 格",
      "兩個視圖不可能來自同一個立體",
      "資料不足，任何情況都可能"
    ],
    "answerIndex": 2,
    "independentSolution": "兩方向輪廓的最大值都應等於最高堆高；4≠3，故不可能。",
    "explanation": "正視最高欄=max所有 h(x,y)，側視最高列也等於同一個全域最大值。 任何實際最高堆都同時屬於某正視欄與某側視列，因此兩方向序列的全域最大值必相同；四與三不同，無論總數或占用格數都無法修補。",
    "steps": [
      "比較正視序列最大值。",
      "比較側視序列最大值。",
      "兩者不同，所以不相容。",
      "指出正視與側視都在同一組高度中取全域最大值。",
      "由四不等於三判定不存在任何相容配置。"
    ],
    "optionAnalysis": [
      {
        "choice": "可能，只要總方塊數為 7",
        "truth": false,
        "reason": "總數無法改變同一立體的全域最高高度。"
      },
      {
        "choice": "可能，只要俯視有至少 4 格",
        "truth": false,
        "reason": "占用格數與全域最高堆高無法消除 4 與 3 的矛盾。"
      },
      {
        "choice": "兩個視圖不可能來自同一個立體",
        "truth": true,
        "reason": "同一立體的全域最高堆高，在正視與側視都應相同；4 與 3 不一致。"
      },
      {
        "choice": "資料不足，任何情況都可能",
        "truth": false,
        "reason": "同一立體從任一水平投影看到的最高高度必相同，已足以判斷。"
      }
    ],
    "misconceptionTarget": "以為不同觀看方向可以得到不同的最高高度。 也可能把兩方向視圖當成互不相關的兩個物體，沒有追蹤同一最高堆。",
    "prerequisiteCheck": "需知道兩方向最大輪廓的最大值必相同。",
    "estimatedTimeSec": 90,
    "unitCheck": "高度都以層數表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需用全域最大值做一致性檢查，屬標準題。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "3f03074dac6d78b4e35254d165d7a9036ad003bc9449c541bf4251b0b3f3f843"
  },
  {
    "questionId": "u08-s013-v007",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "orthographic-description",
    "lockedSkillTitle": "三視圖文字描述",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個 3×2 的俯視範圍六格全部占用。正視三欄高度為 [3,2,3]，側視兩列高度為 [3,2]。最少需要多少個單位方塊？",
    "givenConditions": [
      "3×2 六格皆占用。",
      "正視 [3,2,3]，側視 [3,2]。"
    ],
    "target": "在較大占用範圍中求最省配置",
    "choices": [
      "9 個",
      "11 個",
      "10 個",
      "12 個"
    ],
    "answerIndex": 1,
    "independentSolution": "兩個 3 高堆不可合併，因為位於不同欄；一個 2 高堆可同時滿足第 2 欄與第 2 列，故最少 11。",
    "explanation": "不同 x 欄的最大值必由各欄自己的堆實現；再讓高度 2 同時服務第 2 欄和第 2 列。 六格底層先給六塊，第一與第三欄各需一堆升到三，各增加二塊；第二欄與第二列可共享一個二高堆，再增加一塊，總數十一。",
    "steps": [
      "在第 1、3 欄的第 1 列各放高度 3。",
      "在第 2 欄第 2 列放高度 2。",
      "其他三格各高度 1。",
      "總和為 11。",
      "由三個正視欄分別建立不可合併的高度需求。",
      "代回兩個側視列，確認最高值依序為三與二。"
    ],
    "optionAnalysis": [
      {
        "choice": "9 個",
        "truth": false,
        "reason": "六格各 1 後只增加 3 個，無法同時讓第 1、3 欄都達 3 且另有第 2 列達 2。"
      },
      {
        "choice": "11 個",
        "truth": true,
        "reason": "第 1、3 欄各需一堆高 3；第 2 欄需一堆高 2，並可把它放在第 2 列以同時滿足側視 2；其餘三格各 1，總數 3+3+2+1+1+1=11。"
      },
      {
        "choice": "10 個",
        "truth": false,
        "reason": "兩個不同欄都必須各有一堆高 3，另需讓第 2 欄與第 2 列出現高度 2，總數至少 11。"
      },
      {
        "choice": "12 個",
        "truth": false,
        "reason": "有一個 11 個方塊的配置可達成，所以 12 不是最少。"
      }
    ],
    "misconceptionTarget": "只看最高值 3，忽略每一正視欄都必須達到指定高度。 也可能只設一個三高堆，忽略另一個正視欄也明確要求最高三。",
    "prerequisiteCheck": "需能安排多個欄最大值與列最大值的共享關係。",
    "estimatedTimeSec": 150,
    "unitCheck": "答案是單位方塊個數。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "要先證明下界再給可達配置，屬進階題。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "826b3d34750f6a80d335ff14dd4fc903ddde88fe2a3aae2697cc158e0d256b85"
  },
  {
    "questionId": "u08-s013-v008",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "orthographic-description",
    "lockedSkillTitle": "三視圖文字描述",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個 2×3 的俯視範圍六格全部占用。正視兩欄高度為 [3,2]，側視三列高度為 [2,3,2]。在不改變三視圖的情況下，最多可有多少個單位方塊？",
    "givenConditions": [
      "2×3 六格全部占用。",
      "正視 [3,2]，側視 [2,3,2]。"
    ],
    "target": "由欄上限與列上限求最多方塊數",
    "choices": [
      "13 個",
      "11 個",
      "12 個",
      "15 個"
    ],
    "answerIndex": 0,
    "independentSolution": "逐格最大配置為第一欄 [2,3,2]、第二欄 [2,2,2]，總和 13，且正視與側視最大值完全不變。",
    "explanation": "求最多時，把每格提高到 min(正視欄高, 側視列高)，並檢查各欄列仍達到原最大值。 每格不能超過其正視欄高與側視列高兩者中的較小值；六格上限逐一相加為十三，且第一欄能達三、第二欄達二，各列也達二、三、二。",
    "steps": [
      "第 1 欄三格上限為 min(3,2)、min(3,3)、min(3,2)，和為 7。",
      "第 2 欄上限皆為 min(2,列高)=2，和為 6。",
      "總數 7+6=13。",
      "逐格使用欄高與列高的共同上限。",
      "將最大配置代回全部五個欄列最大值。"
    ],
    "optionAnalysis": [
      {
        "choice": "13 個",
        "truth": true,
        "reason": "每格高度最多是該欄上限與該列上限的較小值，六格上限依序可取 2、3、2 與 2、2、2，總和 13。"
      },
      {
        "choice": "11 個",
        "truth": false,
        "reason": "仍可把不超過欄與列上限的其他位置提高，11 不是最大。"
      },
      {
        "choice": "12 個",
        "truth": false,
        "reason": "逐格取允許上限可得到 13，且不改變任何輪廓。"
      },
      {
        "choice": "15 個",
        "truth": false,
        "reason": "若所有格都提高到較大值，會使原本高度 2 的欄或列超過指定輪廓。"
      }
    ],
    "misconceptionTarget": "求最大時只看全域最高值，未逐格套用欄與列的共同上限。 還可能把每格都設成三，造成第二欄與第一、三列的輪廓超過規格。",
    "prerequisiteCheck": "需能把每格高度限制寫成兩個最大值的較小者。",
    "estimatedTimeSec": 150,
    "unitCheck": "答案是單位方塊個數。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需建立逐格上界並驗證可達，屬進階題。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "2139658c1bb62eb8fcdb00c21591ac0d0e73928e02eaaba93ce7fe36268b3477"
  },
  {
    "questionId": "u08-s013-v009",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "orthographic-description",
    "lockedSkillTitle": "三視圖文字描述",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "2×2 四格全部占用，每格高度只能是 1 或 2。若正視兩欄與側視兩列的高度都為 [2,2]，共有多少種不同的高度配置？",
    "givenConditions": [
      "四格高度只能為 1 或 2。",
      "每一欄和每一列最大值都須為 2。"
    ],
    "target": "計數所有符合兩方向輪廓的配置",
    "choices": [
      "2 種",
      "7 種",
      "6 種",
      "9 種"
    ],
    "answerIndex": 1,
    "independentSolution": "符合每列每欄至少一個 2 的 2×2 配置共有 1+4+2=7。",
    "explanation": "把高度 2 視為必須覆蓋每一列與每一欄，再依 2 的個數分類。 每列每欄至少有一個二；四個二有一種，三個二可任缺一格有四種，兩個二只能位於兩條對角線有兩種，合計七種且互不重複。",
    "steps": [
      "四個 2：1 種。",
      "三個 2：缺哪一格皆可，共 4 種。",
      "兩個 2：只能放在兩條對角線，共 2 種。",
      "合計 1+4+2=7。",
      "證明只有一個二時必有一列或一欄全為一。",
      "依二的個數二、三、四分類並相加。"
    ],
    "optionAnalysis": [
      {
        "choice": "2 種",
        "truth": false,
        "reason": "只計算兩個對角線為 2 的配置，漏掉三個或四個位置為 2 的情況。"
      },
      {
        "choice": "7 種",
        "truth": true,
        "reason": "每列每欄至少要有一個 2：四格全為 2 有 1 種，恰三格為 2 有 4 種，恰兩格為 2 只能在兩條對角線上，有 2 種，共 7 種。"
      },
      {
        "choice": "6 種",
        "truth": false,
        "reason": "符合條件的配置包含 1 個全為 2、4 個恰有三個 2、2 個對角線 2，共 7。"
      },
      {
        "choice": "9 種",
        "truth": false,
        "reason": "含有某一整列或整欄全為 1 的配置不符合輪廓 [2,2]。"
      }
    ],
    "misconceptionTarget": "只找出代表性配置，未完整計數所有可能。 也可能把旋轉後的配置全部視為同一種，或遺漏三個二的四個缺格位置。",
    "prerequisiteCheck": "需掌握欄列最大值條件，並能做小規模分類枚舉。",
    "estimatedTimeSec": 180,
    "unitCheck": "答案單位為「種配置」。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "同時涉及相容條件與不重複計數，屬進階題。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "6c865515cef4fe0b133428a591fb8e6d139130ebb808858fdb0432a4050b1117"
  },
  {
    "questionId": "u08-s013-v010",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "orthographic-description",
    "lockedSkillTitle": "三視圖文字描述",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "倉庫以單位箱堆成貨架模型。俯視紀錄有四個占用位置；正視最高欄為 3 層，側視最高列也為 3 層。下列哪一項一定可以由資料推出？",
    "givenConditions": [
      "俯視有四個占用位置。",
      "兩個方向的最高輪廓都是 3 層。"
    ],
    "target": "由倉庫三視圖紀錄推最低材料數",
    "choices": [
      "恰好使用 12 個箱子",
      "每個占用位置都至少 2 層",
      "四個位置一定排成正方形",
      "至少使用 6 個箱子"
    ],
    "answerIndex": 3,
    "independentSolution": "最低情況是一堆高 3、其餘三堆高 1，總數 3+1+1+1=6。",
    "explanation": "同一個 3 層高堆可同時出現在正視與側視的最高輪廓，因此最低下界為 4+2=6。 四個占用位置先各一箱共四箱；為使全域最高達三，其中一堆要再加兩箱，同一高堆可同時滿足正視與側視，所以至少六箱。",
    "steps": [
      "四個占用位置提供 4 個底層箱。",
      "至少一處高度必為 3，該處比底層多 2 箱。",
      "得至少 6 箱。",
      "以四個占用位置建立四箱底層。",
      "讓同一位置升到三層並驗證兩方向最高皆為三。"
    ],
    "optionAnalysis": [
      {
        "choice": "恰好使用 12 個箱子",
        "truth": false,
        "reason": "只知最高輪廓，無法確定每個位置都高 3。"
      },
      {
        "choice": "每個占用位置都至少 2 層",
        "truth": false,
        "reason": "占用只保證至少 1 層，其他位置可能只有 1 層。"
      },
      {
        "choice": "四個位置一定排成正方形",
        "truth": false,
        "reason": "俯視只給占用位置數，沒有提供排列形狀。"
      },
      {
        "choice": "至少使用 6 個箱子",
        "truth": true,
        "reason": "四個占用位置先各至少 1 箱，共 4 箱；為出現最高 3 層，至少有一堆從 1 增至 3，多 2 箱，所以至少 6 箱。"
      }
    ],
    "misconceptionTarget": "把最高高度誤套到每一個占用位置。 還可能為正視與側視各另設一個三高堆，將下界不必要地提高。",
    "prerequisiteCheck": "需能把俯視占用數與投影最高值轉為最少箱數。",
    "estimatedTimeSec": 120,
    "unitCheck": "箱子以「個」計，高度以「層」計。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "生活情境要求先辨認占用與高度各提供何種限制。",
    "literacyContextNecessity": "倉庫盤點只能取得占用位置與兩方向最高輪廓；要估算最低箱數，情境中的投影資料不可刪除。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "8e008d7f788f0b3a26d24993f1299bda54f691143b9c0aa776cbd6c91a819460"
  },
  {
    "questionId": "u08-s013-v011",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "orthographic-description",
    "lockedSkillTitle": "三視圖文字描述",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "展場模組的俯視占用為 (1,1)、(1,2)、(2,2)。規格寫：正視兩欄高度 [2,3]，側視兩列高度 [2,3]。下列哪一組高度配置符合規格？",
    "givenConditions": [
      "俯視為三格 L 形。",
      "正視與側視序列都為 [2,3]。"
    ],
    "target": "檢核展場堆疊是否符合文字三視圖",
    "choices": [
      "h(1,1)=2，h(1,2)=1，h(2,2)=3",
      "h(1,1)=1，h(1,2)=2，h(2,2)=2",
      "h(1,1)=2，h(1,2)=3，h(2,2)=1",
      "h(1,1)=3，h(1,2)=2，h(2,2)=3"
    ],
    "answerIndex": 0,
    "independentSolution": "對正確配置重算：正視 [max(2,1),3]=[2,3]；側視 [2,max(1,3)]=[2,3]。",
    "explanation": "把每一候選配置分別計算兩個正視欄最大值與兩個側視列最大值。 正確配置的兩欄最大值為二、三，兩列最大值也為二、三；其餘配置至少有一個欄或列的最大值錯誤，不能只核對一半條件。",
    "steps": [
      "檢查第 1、2 欄最大值。",
      "檢查第 1、2 列最大值。",
      "只有指定配置同時得到 [2,3] 與 [2,3]。",
      "對每個候選分別計算兩個欄最大值。",
      "再計算兩個列最大值並要求兩序列同時相符。"
    ],
    "optionAnalysis": [
      {
        "choice": "h(1,1)=2，h(1,2)=1，h(2,2)=3",
        "truth": true,
        "reason": "第 1 欄最大值 max(2,1)=2，第 2 欄為 3；第 1 列為 2，第 2 列 max(1,3)=3，完全符合。"
      },
      {
        "choice": "h(1,1)=1，h(1,2)=2，h(2,2)=2",
        "truth": false,
        "reason": "正視第 2 欄與側視第 2 列最高都只有 2，不是 3。"
      },
      {
        "choice": "h(1,1)=2，h(1,2)=3，h(2,2)=1",
        "truth": false,
        "reason": "正視第 1 欄會高 3，不是指定的 2。"
      },
      {
        "choice": "h(1,1)=3，h(1,2)=2，h(2,2)=3",
        "truth": false,
        "reason": "正視第 1 欄與側視第 1 列會出現高度 3，違反指定 2。"
      }
    ],
    "misconceptionTarget": "只核對其中一個視圖，未同時檢查另一方向。 也可能看到配置中出現二與三就選取，沒有依指定座標分欄分列驗算。",
    "prerequisiteCheck": "需能由座標占用與欄列最大值判讀配置。",
    "estimatedTimeSec": 150,
    "unitCheck": "高度為整數層數。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "情境中的模組座標與兩方向規格都是驗收必要條件。",
    "literacyContextNecessity": "展場驗收必須同時核對俯視占用及正視、側視輪廓；移除規格情境便失去要檢核的工程條件。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "9c0ad984a93ce54567181b98e9d2da6a98beefaaa1dd2ecc659e21808acc784f"
  },
  {
    "questionId": "u08-s013-v012",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "orthographic-description",
    "lockedSkillTitle": "三視圖文字描述",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "自動倉儲有 2×2 四個堆位，四格都占用。系統要求正視欄高 [2,4]、側視列高 [4,2]，並限制每堆不得超過 4 層。下列哪一項是符合要求的最少箱數？",
    "givenConditions": [
      "四個堆位皆占用。",
      "正視 [2,4]，側視 [4,2]。",
      "單堆上限 4 層。"
    ],
    "target": "依倉儲視圖規格找最省箱數",
    "choices": [
      "6 個箱子",
      "7 個箱子",
      "8 個箱子",
      "10 個箱子"
    ],
    "answerIndex": 2,
    "independentSolution": "可達配置總數是 8；少於 8 時無法同時保留另一欄與另一列的高度 2。",
    "explanation": "最少配置要讓同一堆共享正視與側視的高值要求。 四格底層共四箱；在第二欄第一列設四高堆增加三箱，再於第一欄第二列設二高堆增加一箱，其餘維持一層，總數八且四個輪廓值都吻合。",
    "steps": [
      "先放第 2 欄第 1 列高度 4。",
      "再放第 1 欄第 2 列高度 2。",
      "其餘兩堆各高度 1。",
      "總數為 8。",
      "先用四個占用格建立四箱下界。",
      "代回正視二、四與側視四、二，確認八箱配置可達且最少。"
    ],
    "optionAnalysis": [
      {
        "choice": "6 個箱子",
        "truth": false,
        "reason": "四格基底 4 箱加一個 4 層堆只得 7 箱，且還須另一交叉位置達 2；6 更不可能。"
      },
      {
        "choice": "7 個箱子",
        "truth": false,
        "reason": "一個 4 層堆可滿足第 2 欄與第 1 列，但第 1 欄與第 2 列仍需一個 2 層堆，總數至少 8。"
      },
      {
        "choice": "8 個箱子",
        "truth": true,
        "reason": "把 4 層堆放在第 2 欄第 1 列，同時滿足兩個 4；把 2 層堆放在第 1 欄第 2 列，同時滿足兩個 2；另兩格各 1，共 4+2+1+1=8。"
      },
      {
        "choice": "10 個箱子",
        "truth": false,
        "reason": "配置 4、2、1、1 已能達成全部輪廓，只需 8 箱。"
      }
    ],
    "misconceptionTarget": "只看全域最高堆，忽略其他欄列也有指定輪廓。 也可能把題目問的最少箱數誤讀成不同配置的種類數，或忽略高度二的欄列要求。",
    "prerequisiteCheck": "需整合占用、兩向最大高度與層數上限。",
    "estimatedTimeSec": 150,
    "unitCheck": "箱數以「個」計，堆高以「層」計。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "倉儲情境中的最少箱數直接影響容量估算，所有投影限制皆不可省略。",
    "literacyContextNecessity": "自動倉儲需用三視圖輪廓檢核容量與最省堆法；工程規格使共享高堆的安排成為題目核心。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "f23cd4a161670258616bbdf2eab033452dc34ec0a101f08df424a37717ef0224"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u08-s013-cr001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "orthographic-description",
    "lockedSkillTitle": "三視圖文字描述",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "俯視占用位置為 (1,1)、(1,2)、(2,1)。正視兩欄高度為 [3,2]，側視兩列高度為 [2,3]。求每個位置所有可能的高度範圍，並給出一個符合的配置。",
    "requiredWork": [
      "將正視欄高與側視列高寫成最大值條件。",
      "推定唯一位置高度並求其餘範圍。",
      "給出至少一個符合配置。"
    ],
    "standardSolution": [
      "設h11=h(1,1)、h12=h(1,2)、h21=h(2,1)。",
      "第2欄只有h21，所以h21=2；第2列只有h12，所以h12=3。",
      "第1列最大值為2，故h11≤2；占用使h11≥1，所以1≤h11≤2。",
      "配置例如(h11,h12,h21)=(1,3,2)或(2,3,2)，兩者都符合。",
      "分別代入h11等於一與二，都得到正視三、二及側視二、三；h11若超過二會破壞第一列側視上限，範圍完整。"
    ],
    "alternativeMethods": [
      "可逐列逐欄先找只有一格的投影，再處理交會位置。"
    ],
    "reasoningSteps": [
      "寫max(h11,h12)=3與h21=2。",
      "寫max(h11,h21)=2與h12=3。",
      "交叉得到h11為1或2。",
      "代回驗證配置。",
      "用兩個端點配置與超界反例確認所有可能。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "h12=3、h21=2、h11可為1或2，並給出一個正確配置與最大值驗證。"
      },
      {
        "score": 2,
        "criteria": "高度範圍全對但未給配置；或配置正確且推理足以看出範圍但少一個不等式。"
      },
      {
        "score": 1,
        "criteria": "至少正確推出h12=3或h21=2，並顯示使用單格列欄。"
      },
      {
        "score": 0,
        "criteria": "把每個第1欄位置都定為3，或給出不符合側視[2,3]的配置。"
      }
    ],
    "partialCreditRules": [
      "占用位置高度為正整數，這使h11不能為0。"
    ],
    "followThroughPolicy": "若某一座標抄錯但最大值方法與其餘推理清楚，最多2分。",
    "unitAndNotationRules": "高度以層數表示；h(1,1)等記號需與座標一致。",
    "answerOnlyPolicy": "只列一個符合配置但無範圍，最高1分。",
    "commonErrors": [
      "把正視欄高當欄內總和。",
      "忘記占用位置至少1層。",
      "只給一組配置便宣稱高度唯一，沒有檢查h11的另一個正整數可能。"
    ],
    "independentReview": {
      "derivedResult": "h12=3，h21=2，h11∈{1,2}。",
      "ambiguityAudit": "俯視L形使第2欄、第2列各只有一格，推定關係唯一。",
      "reviewNote": "獨立枚舉h11=1、2皆通過，h11≥3會使側視第1列超過2，確認完整範圍。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "solid-views-basic"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "408cc39960b76fd6386e5317930209439dc239b9219c9366288b77b1aafce194"
  },
  {
    "questionId": "u08-s013-cr002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "orthographic-description",
    "lockedSkillTitle": "三視圖文字描述",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "2×2 四格全部占用，正視兩欄高度為 [3,2]，側視兩列高度為 [2,3]。求最少與最多方塊數，並各給一個高度配置。",
    "requiredWork": [
      "求最少配置與總數。",
      "逐格套用欄列上限求最多配置。",
      "驗證兩組配置的正視與側視。"
    ],
    "standardSolution": [
      "最少時把3放在第1欄第2列，同時滿足正視3與側視第2列3；把2放在第2欄第1列，同時滿足另兩個2；其餘兩格各1，總數3+2+1+1=7。",
      "最多時每格取min(欄高,列高)：高度矩陣可取 [[2,2],[3,2]]（列為y=1,2、欄為x=1,2），總數9。",
      "最少配置與最多配置都得到正視[3,2]、側視[2,3]。",
      "最少配置總和七、最多配置總和九；兩端的每欄最大值都為三、二，每列最大值都為二、三，故上下界均可達。"
    ],
    "alternativeMethods": [
      "最多也可逐格列上限：h11≤2、h21≤2、h12≤3、h22≤2，相加上限9，且可達。"
    ],
    "reasoningSteps": [
      "最少讓高值在交會位置共享。",
      "最多用每格的欄列共同上限。",
      "分別相加。",
      "代回各列欄最大值。",
      "用逐欄逐列最大值驗證兩個端點配置。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "最少7、最多9，兩個可達配置與輪廓驗證完整。"
      },
      {
        "score": 2,
        "criteria": "兩個界值正確但少一個配置或驗證；或一個界完整、另一個有小算術錯。"
      },
      {
        "score": 1,
        "criteria": "正確求出最少7或最多9其中一項，並有最大值推理。"
      },
      {
        "score": 0,
        "criteria": "只把欄高相加或列高相加當總數，未處理四格高度。"
      }
    ],
    "partialCreditRules": [
      "高度矩陣的列欄書寫方向可不同，只要座標或輪廓驗證清楚。"
    ],
    "followThroughPolicy": "若配置矩陣抄位但總數與共享/上限方法正確，最高2分。",
    "unitAndNotationRules": "方塊總數為整數；高度為正整數層。",
    "answerOnlyPolicy": "只答7與9無配置最高1分。",
    "commonErrors": [
      "最多把每格都設3而破壞高度2的欄列。",
      "最少忘記其餘占用格各至少1。",
      "求最多時只把四個共同上限相加，卻未確認每個規定最大值實際有位置達到。"
    ],
    "independentReview": {
      "derivedResult": "最少7塊，最多9塊。",
      "ambiguityAudit": "四格全部占用與兩方向序列都明示；最小和最大均可由構造達到。",
      "reviewNote": "獨立枚舉共同上限與共享高堆，驗證7≤總數≤9且兩端皆可達。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "solid-views-basic"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "a3e18ef566383515be67b42c6d74974174f10cdb366ee173ff2539f36ec3812c"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u08-s013-v001",
    "unitId": "u08",
    "skillId": "orthographic-description",
    "contentSha256": "087d69dfe009fc4d2ca00da55db73e130591289f6e8370804ab4bb09562f2330",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "由投影定義重算，該欄至少一堆高 3 且沒有一堆超過 3，所以最大值恰為 3。",
    "derivedAnswer": "max(h(1,1), h(1,2))＝3",
    "storedAnswer": "max(h(1,1), h(1,2))＝3",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「max(h(1,1), h(1,2))＝3」符合目標「解讀正視欄高的最大值意義」。其餘選項分別違反：正視輪廓只保留最高值，不表示兩堆同高。；正視高度不是該欄總和。；正視高度不代表較小值。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖文字描述」講義已定義範圍；本題特別使用：俯視占用位置為 (1,1)、(1,2)。",
      "unitConflict": "高度皆以方塊層數表示，沒有長度單位混用。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「解讀正視欄高的最大值意義」重新讀題，並針對誤解「把投影高度誤當成每一堆高度或高度總和。」排除另一解讀。"
    },
    "difficultyReason": "直接套用一個欄高的定義，屬基本判讀。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "只需知道正視欄高是同欄各堆高度的最大值。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「解讀正視欄高的最大值意義」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：由投影定義重算，該欄至少一堆高 3 且沒有一堆超過 3，所以最大值恰為 3。 正確選項為「max(h(1,1), h(1,2))＝3」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "606a480010628b5090d1beb957dbab505d4dd7f71f8a8c954602a34a43967108"
  },
  {
    "questionId": "u08-s013-v002",
    "unitId": "u08",
    "skillId": "orthographic-description",
    "contentSha256": "bc918fe240d80393f069945a0bc285518d346377f06ae82ed691a7389402b883",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立依座標方向計算：x 欄輪廓 2、1；y 列輪廓 2，因此答案為正視 [2,1]、側視 [2]。",
    "derivedAnswer": "正視 [2,1]，側視 [2]",
    "storedAnswer": "正視 [2,1]，側視 [2]",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「正視 [2,1]，側視 [2]」符合目標「由已知堆高寫出兩個方向的輪廓」。其餘選項分別違反：第二欄實際只有 1 層，且側視應取兩堆最大值 2。；投影不會把兩堆高度相加成 3。；正視欄序不可把第 1、2 欄顛倒。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖文字描述」講義已定義範圍；本題特別使用：占用位置只有 (1,1)、(2,1)。",
      "unitConflict": "所有數值均為方塊層數。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由已知堆高寫出兩個方向的輪廓」重新讀題，並針對誤解「把投影輪廓當成高度相加，或顛倒欄序。」排除另一解讀。"
    },
    "difficultyReason": "每一方向僅做一次最大值判讀。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需能分辨正視按 x 欄、側視按 y 列取最大值。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由已知堆高寫出兩個方向的輪廓」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立依座標方向計算：x 欄輪廓 2、1；y 列輪廓 2，因此答案為正視 [2,1]、側視 [2]。 正確選項為「正視 [2,1]，側視 [2]」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "410a571bb3b13083a17f480a2c90df3fdfe2d0b510d1b329cc2e10eda6a3d56b"
  },
  {
    "questionId": "u08-s013-v003",
    "unitId": "u08",
    "skillId": "orthographic-description",
    "contentSha256": "38d7e6c6d0f69aa12cf4142030653429ab6e0b9a83d2eb5e2ce55ef7ce747a21",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "重新逐堆計數得到 2+3+1=6，沒有把俯視格數與方塊總數混為一談。",
    "derivedAnswer": "6 個",
    "storedAnswer": "6 個",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「6 個」符合目標「由各位置高度求方塊總數」。其餘選項分別違反：只數占用位置，忽略每處可能堆疊多層。；漏加其中一處高度。；三個高度相加並不等於 7。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖文字描述」講義已定義範圍；本題特別使用：三個位置高度為 2、3、1。",
      "unitConflict": "答案單位為「個單位方塊」。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由各位置高度求方塊總數」重新讀題，並針對誤解「把俯視占用格數直接當成總方塊數。」排除另一解讀。"
    },
    "difficultyReason": "單一步驟加總，屬基本計數。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "只使用總方塊數為各堆高度總和。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由各位置高度求方塊總數」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：重新逐堆計數得到 2+3+1=6，沒有把俯視格數與方塊總數混為一談。 正確選項為「6 個」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "09c41321d6eaaa0b5229500f3b1905f0e2df2941442e2ee0f9245a482d9781cb"
  },
  {
    "questionId": "u08-s013-v004",
    "unitId": "u08",
    "skillId": "orthographic-description",
    "contentSha256": "fbb1a9e3fd47a94fd29a32ae5d88432cc6c66d6e965b43879a87edd74f62de6c",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立以側視限制重算：max_x h(x,2)=h(1,2)=3，故答案唯一為 3。",
    "derivedAnswer": "3",
    "storedAnswer": "3",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「3」符合目標「利用只有一個占用位置的列推回堆高」。其餘選項分別違反：若為 1，第二列唯一位置的側視高度不會是 3。；若為 2，第二列最大高度只能是 2。；第二列只有 (1,2) 一處，占用與側視高度已使其唯一。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖文字描述」講義已定義範圍；本題特別使用：俯視為 L 形三格。",
      "unitConflict": "高度以層數表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「利用只有一個占用位置的列推回堆高」重新讀題，並針對誤解「看到正視第 1 欄高度 3 卻誤以為該欄每一處都無法確定。」排除另一解讀。"
    },
    "difficultyReason": "必須合併兩種視圖條件，屬標準題。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需能由俯視占用與側視最大值共同判讀。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「利用只有一個占用位置的列推回堆高」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立以側視限制重算：max_x h(x,2)=h(1,2)=3，故答案唯一為 3。 正確選項為「3」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "18fbafb2a27abc25dc303d69e7d0ed17ca8cf9c37bf39cbc04f6fd92cc4410a2"
  },
  {
    "questionId": "u08-s013-v005",
    "unitId": "u08",
    "skillId": "orthographic-description",
    "contentSha256": "77d619e91b0c1b3291663abe756b05d5635ff3394f6ea2e80395d7a9f5929c6e",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立建立最省配置：3 與 2 分別放在 (2,1)、(1,2)，另兩格必為正高度 1，故下界與可達值皆為 7。",
    "derivedAnswer": "7 個",
    "storedAnswer": "7 個",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「7 個」符合目標「由兩方向最大高度求最少方塊數」。其餘選項分別違反：四格至少各 1 個後，只多放 1 個仍無法同時形成高度 3 與另一個高度 2。；高度 3 與另一列、另一欄的高度 2 不能只靠總數 6 完成全部最大值。；可把高度 3 放在第 2 欄第 1 列，高度 2 放在第 1 欄第 2 列，其餘各 1，共只需 7。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖文字描述」講義已定義範圍；本題特別使用：2×2 四格全部占用。",
      "unitConflict": "方塊數以「個」計，輪廓數值為層數。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由兩方向最大高度求最少方塊數」重新讀題，並針對誤解「直接把兩個視圖高度相加，或忘記每個占用格至少 1 個。」排除另一解讀。"
    },
    "difficultyReason": "要構造同時滿足兩方向的最省配置，屬標準推理。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需掌握正視與側視最大值並能安排共享高堆。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由兩方向最大高度求最少方塊數」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立建立最省配置：3 與 2 分別放在 (2,1)、(1,2)，另兩格必為正高度 1，故下界與可達值皆為 7。 正確選項為「7 個」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "b21a4977a34de06b961673c6d62319da07f8b2927c82d41ec8abc0962cf98b0b"
  },
  {
    "questionId": "u08-s013-v006",
    "unitId": "u08",
    "skillId": "orthographic-description",
    "contentSha256": "3f03074dac6d78b4e35254d165d7a9036ad003bc9449c541bf4251b0b3f3f843",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "重新寫成 max_x max_y h(x,y)=4 與 max_y max_x h(x,y)=3；兩式左側相同而右側不同，因此矛盾。",
    "derivedAnswer": "兩個視圖不可能來自同一個立體",
    "storedAnswer": "兩個視圖不可能來自同一個立體",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「兩個視圖不可能來自同一個立體」符合目標「檢查兩個視圖的相容性」。其餘選項分別違反：總數無法改變同一立體的全域最高高度。；占用格數與全域最高堆高無法消除 4 與 3 的矛盾。；同一立體從任一水平投影看到的最高高度必相同，已足以判斷。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖文字描述」講義已定義範圍；本題特別使用：正視全域最高為 4。",
      "unitConflict": "高度都以層數表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「檢查兩個視圖的相容性」重新讀題，並針對誤解「以為不同觀看方向可以得到不同的最高高度。」排除另一解讀。"
    },
    "difficultyReason": "需用全域最大值做一致性檢查，屬標準題。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需知道兩方向最大輪廓的最大值必相同。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「檢查兩個視圖的相容性」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：重新寫成 max_x max_y h(x,y)=4 與 max_y max_x h(x,y)=3；兩式左側相同而右側不同，因此矛盾。 正確選項為「兩個視圖不可能來自同一個立體」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "f96fc765c3b8a73a078a6abd8c64dfac36c664ef45c776e500c67d6c0d4e0965"
  },
  {
    "questionId": "u08-s013-v007",
    "unitId": "u08",
    "skillId": "orthographic-description",
    "contentSha256": "826b3d34750f6a80d335ff14dd4fc903ddde88fe2a3aae2697cc158e0d256b85",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立由必要下界計算：六格基底 6，加上兩個 3 高堆各多 2，再加上一個 2 高堆多 1，共 11；所述配置可達到此下界。",
    "derivedAnswer": "11 個",
    "storedAnswer": "11 個",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「11 個」符合目標「在較大占用範圍中求最省配置」。其餘選項分別違反：六格各 1 後只增加 3 個，無法同時讓第 1、3 欄都達 3 且另有第 2 列達 2。；兩個不同欄都必須各有一堆高 3，另需讓第 2 欄與第 2 列出現高度 2，總數至少 11。；有一個 11 個方塊的配置可達成，所以 12 不是最少。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖文字描述」講義已定義範圍；本題特別使用：3×2 六格皆占用。",
      "unitConflict": "答案是單位方塊個數。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「在較大占用範圍中求最省配置」重新讀題，並針對誤解「只看最高值 3，忽略每一正視欄都必須達到指定高度。」排除另一解讀。"
    },
    "difficultyReason": "要先證明下界再給可達配置，屬進階題。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需能安排多個欄最大值與列最大值的共享關係。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「在較大占用範圍中求最省配置」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立由必要下界計算：六格基底 6，加上兩個 3 高堆各多 2，再加上一個 2 高堆多 1，共 11；所述配置可達到此下界。 正確選項為「11 個」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "733070ff1057a4bcfd879641287cdae563f095c08d135ad2f78145157c0028be"
  },
  {
    "questionId": "u08-s013-v008",
    "unitId": "u08",
    "skillId": "orthographic-description",
    "contentSha256": "2139658c1bb62eb8fcdb00c21591ac0d0e73928e02eaaba93ce7fe36268b3477",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立檢查六格上界相加得 13；該配置在第 1 欄達 3、第 2 欄達 2，各列也達 2、3、2，因此上界可達。",
    "derivedAnswer": "13 個",
    "storedAnswer": "13 個",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「13 個」符合目標「由欄上限與列上限求最多方塊數」。其餘選項分別違反：仍可把不超過欄與列上限的其他位置提高，11 不是最大。；逐格取允許上限可得到 13，且不改變任何輪廓。；若所有格都提高到較大值，會使原本高度 2 的欄或列超過指定輪廓。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖文字描述」講義已定義範圍；本題特別使用：2×3 六格全部占用。",
      "unitConflict": "答案是單位方塊個數。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由欄上限與列上限求最多方塊數」重新讀題，並針對誤解「求最大時只看全域最高值，未逐格套用欄與列的共同上限。」排除另一解讀。"
    },
    "difficultyReason": "需建立逐格上界並驗證可達，屬進階題。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需能把每格高度限制寫成兩個最大值的較小者。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由欄上限與列上限求最多方塊數」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立檢查六格上界相加得 13；該配置在第 1 欄達 3、第 2 欄達 2，各列也達 2、3、2，因此上界可達。 正確選項為「13 個」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "54e84f7757ab7de91fd600a3bdf24f01be7ed40cd886452795bc37d2fcdb5806"
  },
  {
    "questionId": "u08-s013-v009",
    "unitId": "u08",
    "skillId": "orthographic-description",
    "contentSha256": "6c865515cef4fe0b133428a591fb8e6d139130ebb808858fdb0432a4050b1117",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立枚舉 16 種 1/2 配置後，排除任何全為 1 的列或欄；留下 7 種，與分類計數一致。",
    "derivedAnswer": "7 種",
    "storedAnswer": "7 種",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「7 種」符合目標「計數所有符合兩方向輪廓的配置」。其餘選項分別違反：只計算兩個對角線為 2 的配置，漏掉三個或四個位置為 2 的情況。；符合條件的配置包含 1 個全為 2、4 個恰有三個 2、2 個對角線 2，共 7。；含有某一整列或整欄全為 1 的配置不符合輪廓 [2,2]。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖文字描述」講義已定義範圍；本題特別使用：四格高度只能為 1 或 2。",
      "unitConflict": "答案單位為「種配置」。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「計數所有符合兩方向輪廓的配置」重新讀題，並針對誤解「只找出代表性配置，未完整計數所有可能。」排除另一解讀。"
    },
    "difficultyReason": "同時涉及相容條件與不重複計數，屬進階題。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需掌握欄列最大值條件，並能做小規模分類枚舉。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「計數所有符合兩方向輪廓的配置」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立枚舉 16 種 1/2 配置後，排除任何全為 1 的列或欄；留下 7 種，與分類計數一致。 正確選項為「7 種」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "0a7051ea6aaf08e7c75c039db3f3d5496a6d6a602388242b97e71f138af56d03"
  },
  {
    "questionId": "u08-s013-v010",
    "unitId": "u08",
    "skillId": "orthographic-description",
    "contentSha256": "8e008d7f788f0b3a26d24993f1299bda54f691143b9c0aa776cbd6c91a819460",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "重新從占用數與全域最高高度求下界：4 個基底加最高堆額外 2 個，確定至少 6 個箱子。",
    "derivedAnswer": "至少使用 6 個箱子",
    "storedAnswer": "至少使用 6 個箱子",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「至少使用 6 個箱子」符合目標「由倉庫三視圖紀錄推最低材料數」。其餘選項分別違反：只知最高輪廓，無法確定每個位置都高 3。；占用只保證至少 1 層，其他位置可能只有 1 層。；俯視只給占用位置數，沒有提供排列形狀。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖文字描述」講義已定義範圍；本題特別使用：俯視有四個占用位置。",
      "unitConflict": "箱子以「個」計，高度以「層」計。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由倉庫三視圖紀錄推最低材料數」重新讀題，並針對誤解「把最高高度誤套到每一個占用位置。」排除另一解讀。"
    },
    "difficultyReason": "生活情境要求先辨認占用與高度各提供何種限制。",
    "literacyContextNecessity": "倉庫盤點只能取得占用位置與兩方向最高輪廓；要估算最低箱數，情境中的投影資料不可刪除。",
    "prerequisiteCheck": "需能把俯視占用數與投影最高值轉為最少箱數。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由倉庫三視圖紀錄推最低材料數」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：重新從占用數與全域最高高度求下界：4 個基底加最高堆額外 2 個，確定至少 6 個箱子。 正確選項為「至少使用 6 個箱子」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "858f5da1125e6325ba1c72614bd87175522640e6b1134ed6f167469dcbea341a"
  },
  {
    "questionId": "u08-s013-v011",
    "unitId": "u08",
    "skillId": "orthographic-description",
    "contentSha256": "9c0ad984a93ce54567181b98e9d2da6a98beefaaa1dd2ecc659e21808acc784f",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立將四個候選逐一代入欄列最大值；只有 h11=2、h12=1、h22=3 同時通過四個輪廓條件。",
    "derivedAnswer": "h(1,1)=2，h(1,2)=1，h(2,2)=3",
    "storedAnswer": "h(1,1)=2，h(1,2)=1，h(2,2)=3",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「h(1,1)=2，h(1,2)=1，h(2,2)=3」符合目標「檢核展場堆疊是否符合文字三視圖」。其餘選項分別違反：正視第 2 欄與側視第 2 列最高都只有 2，不是 3。；正視第 1 欄會高 3，不是指定的 2。；正視第 1 欄與側視第 1 列會出現高度 3，違反指定 2。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖文字描述」講義已定義範圍；本題特別使用：俯視為三格 L 形。",
      "unitConflict": "高度為整數層數。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「檢核展場堆疊是否符合文字三視圖」重新讀題，並針對誤解「只核對其中一個視圖，未同時檢查另一方向。」排除另一解讀。"
    },
    "difficultyReason": "情境中的模組座標與兩方向規格都是驗收必要條件。",
    "literacyContextNecessity": "展場驗收必須同時核對俯視占用及正視、側視輪廓；移除規格情境便失去要檢核的工程條件。",
    "prerequisiteCheck": "需能由座標占用與欄列最大值判讀配置。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「檢核展場堆疊是否符合文字三視圖」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立將四個候選逐一代入欄列最大值；只有 h11=2、h12=1、h22=3 同時通過四個輪廓條件。 正確選項為「h(1,1)=2，h(1,2)=1，h(2,2)=3」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "e69b481312729808cee6bf7ab2170d3decc4935ac41c160897a9a368ce90ee6e"
  },
  {
    "questionId": "u08-s013-v012",
    "unitId": "u08",
    "skillId": "orthographic-description",
    "contentSha256": "f23cd4a161670258616bbdf2eab033452dc34ec0a101f08df424a37717ef0224",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立建立下界：四格底層 4，4 層堆額外 3，另需一個 2 層堆額外 1，共 8；交叉配置達到下界。",
    "derivedAnswer": "8 個箱子",
    "storedAnswer": "8 個箱子",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「8 個箱子」符合目標「依倉儲視圖規格找最省箱數」。其餘選項分別違反：四格基底 4 箱加一個 4 層堆只得 7 箱，且還須另一交叉位置達 2；6 更不可能。；一個 4 層堆可滿足第 2 欄與第 1 列，但第 1 欄與第 2 列仍需一個 2 層堆，總數至少 8。；配置 4、2、1、1 已能達成全部輪廓，只需 8 箱。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖文字描述」講義已定義範圍；本題特別使用：四個堆位皆占用。",
      "unitConflict": "箱數以「個」計，堆高以「層」計。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「依倉儲視圖規格找最省箱數」重新讀題，並針對誤解「只看全域最高堆，忽略其他欄列也有指定輪廓。」排除另一解讀。"
    },
    "difficultyReason": "倉儲情境中的最少箱數直接影響容量估算，所有投影限制皆不可省略。",
    "literacyContextNecessity": "自動倉儲需用三視圖輪廓檢核容量與最省堆法；工程規格使共享高堆的安排成為題目核心。",
    "prerequisiteCheck": "需整合占用、兩向最大高度與層數上限。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「依倉儲視圖規格找最省箱數」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立建立下界：四格底層 4，4 層堆額外 3，另需一個 2 層堆額外 1，共 8；交叉配置達到下界。 正確選項為「8 個箱子」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "f7e86a2b45c8d6a2c50b1c2e80331e57f972bd1638ea93c54a91c87ab57a0762"
  }
];

export const DRAWING_SPECS = [];

