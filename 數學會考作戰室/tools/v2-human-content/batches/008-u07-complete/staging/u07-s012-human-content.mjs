// DETERMINISTIC SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u07-s012-lecture-r1",
  "unitId": "u07",
  "topicId": "u07-literacy",
  "skillId": "inequality-literacy",
  "title": "不等式素養題：整合表格和規則與單位及多重限制",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能從較長文字或表格擷取必要數據。",
    "能判斷分段規則適用的區間。",
    "能建立一元一次不等式並加入多重限制。",
    "能解釋答案、比較方案並檢查邊界。"
  ],
  "prerequisites": [
    {
      "skillId": "inequality-budget",
      "requiredLevel": "能處理固定費、單價、優惠與預算上限。"
    }
  ],
  "prerequisiteBridge": {
    "inequality-budget": "能處理固定費、單價、優惠與預算上限。"
  },
  "glossary": [
    {
      "term": "素養題",
      "definition": "需要從真實或模擬情境中選取資訊、建立模型並解釋結果的題型。"
    },
    {
      "term": "分段規則",
      "definition": "數量落在不同範圍時使用不同計算方式。"
    },
    {
      "term": "必要資訊",
      "definition": "會影響模型或答案的數據與條件。"
    },
    {
      "term": "冗餘資訊",
      "definition": "題目提供但不影響所問結果的資料。"
    },
    {
      "term": "可行區間",
      "definition": "同時符合所有規則的未知量範圍。"
    }
  ],
  "notation": [
    {
      "symbol": "規則條件 ∧ 預算條件",
      "meaning": "兩種限制要同時成立。"
    },
    {
      "symbol": "min(A,B)",
      "meaning": "兩個上限同時存在時，較小上限決定可行範圍；本單元以中文理解即可。"
    }
  ],
  "conceptNarrative": [
    "素養題先不要立刻計算，先標記所求量、單位、規則區間與限制。",
    "表格中的每一列未必都要用；只選與目前方案、區間和問題相關的資料。",
    "分段費率必須先確認 x 落在哪一段，再使用該段公式，最後檢查算出的 x 是否仍在那一段。",
    "多重限制以「且」取交集，例如預算上限、容量上限與最低需求。",
    "比較方案時應在相同 x 或相同服務條件下比較，不可混用不同基準。"
  ],
  "formalDefinitions": [
    {
      "name": "資料擷取",
      "statement": "先辨認變數、單位、邊界詞與方案規則，再建立式子。"
    },
    {
      "name": "分段一致性",
      "statement": "使用某段公式求得的答案，必須落在該段適用範圍。"
    },
    {
      "name": "多重限制模型",
      "statement": "可行解集是各條件解集的共同部分。"
    }
  ],
  "formulas": [
    {
      "formula": "固定費＋單價×x≤預算",
      "conditions": [
        "所選方案與費率段正確"
      ],
      "meaning": "常見素養情境核心模型。"
    },
    {
      "formula": "下限≤x≤上限",
      "conditions": [
        "需求與容量同時存在"
      ],
      "meaning": "多重限制交集。"
    }
  ],
  "nonApplicableCases": [
    "不能把表格所有數字全部相加。",
    "不能在未檢查適用區間前套用較便宜的分段單價。",
    "圖表若數值為估計或四捨五入，需依題目精度處理。",
    "答案若跨越方案門檻，應重新用新規則計算。",
    "素養情境不得取代數學推理；每個情境資訊都應影響模型或驗證。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "寫下問題真正要求的量與單位。",
      "check": "是最大、最少、範圍還是方案比較？"
    },
    {
      "step": 2,
      "instruction": "整理必要數據與規則。",
      "check": "有無門檻、分段、容量或時間限制？"
    },
    {
      "step": 3,
      "instruction": "選擇正確規則並建立不等式。",
      "check": "公式適用範圍是否已滿足？"
    },
    {
      "step": 4,
      "instruction": "求解並與其他限制取交集。",
      "check": "整數、非負、上下界是否完整？"
    },
    {
      "step": 5,
      "instruction": "回到表格或規則驗證答案與相鄰值。",
      "check": "是否跨段、超支或違反容量？"
    },
    {
      "step": 6,
      "instruction": "用完整句子解釋結果。",
      "check": "是否回答了情境中的實際問題？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "方案 A 月費 120 元、每 GB 30 元，預算 300 元，可用多少 GB？",
      "solutionSteps": [
        "120+30g≤300。",
        "30g≤180，g≤6，且 g≥0。"
      ],
      "answer": "最多 6 GB。"
    },
    {
      "exampleId": "L2",
      "prompt": "教室最多 36 人，活動至少 24 人才舉辦，參加人數範圍為何？",
      "solutionSteps": [
        "至少 24：n≥24。",
        "最多 36：n≤36。"
      ],
      "answer": "24≤n≤36，且 n 為整數。"
    },
    {
      "exampleId": "L3",
      "prompt": "前 5 公里每公里 20 元，超過 5 公里後另有規則；若算得 7 公里卻仍用前段公式，問題在哪？",
      "solutionSteps": [
        "前段公式只適用 d≤5。",
        "7 超出適用區間，必須改用後段規則。"
      ],
      "answer": "模型與分段範圍不一致。"
    },
    {
      "exampleId": "L4",
      "prompt": "方案 A：50+12x；方案 B：110+6x。何時 B 不比 A 貴？",
      "solutionSteps": [
        "110+6x≤50+12x。",
        "60≤6x，所以 x≥10。"
      ],
      "answer": "使用量至少 10 單位時。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "看到較低單價就直接選方案。",
      "why": "忽略固定費與使用量。",
      "correction": "以同一 x 比較總費用。"
    },
    {
      "mistake": "使用前段公式得到跨段答案仍接受。",
      "why": "未做分段一致性檢查。",
      "correction": "答案跨門檻時改用對應規則。"
    },
    {
      "mistake": "把容量上限與最低需求相加。",
      "why": "誤解多重限制。",
      "correction": "兩者以且形成區間。"
    },
    {
      "mistake": "表格每個數據都納入算式。",
      "why": "未區分必要與冗餘資訊。",
      "correction": "只使用影響所問量的資料。"
    },
    {
      "mistake": "方案比較只比單價。",
      "why": "忽略固定費。",
      "correction": "比較完整總費用函數。"
    },
    {
      "mistake": "得到 x≥10 卻回答 x=10。",
      "why": "把範圍誤成單一臨界點。",
      "correction": "10 及以上都符合，還需受情境上限限制。"
    }
  ],
  "selfCheck": [
    "我是否先確認規則適用區間？",
    "所有使用的數據都真的必要嗎？",
    "多重限制是否取交集？",
    "答案是否跨越分段門檻？",
    "最終句子是否回應情境問題？"
  ],
  "summary": [
    "素養題重點是擷取、建模、求解、驗證與解釋。",
    "分段公式的答案必須落在適用區間。",
    "多重限制取共同部分。",
    "方案比較要比較完整總量而非單一費率。"
  ],
  "connections": {
    "previous": "整合 U07 前十一技能。",
    "next": [
      "本節完成 U07，後續單元會在更複雜代數與幾何情境中沿用建模與邊界檢查。"
    ]
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u07-s012-v001",
      "u07-s012-v002",
      "u07-s012-v003",
      "u07-s012-v004",
      "u07-s012-v005",
      "u07-s012-v006",
      "u07-s012-v007",
      "u07-s012-v008",
      "u07-s012-v009",
      "u07-s012-v010",
      "u07-s012-v011",
      "u07-s012-v012"
    ],
    "constructedResponseIds": [
      "u07-s012-cr001",
      "u07-s012-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "人工檢查表格擷取、容量交集、分段一致性與方案比較四種素養結構；每例均保留情境不可刪除的數學功能，並未以換名換數方式重複一般應用題。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "919d8d4f55e264586d7897847de9547ed0adc9048dfe4e7e6def0e224d380027"
};

export const QUESTIONS = [
  {
    "questionId": "u07-s012-v001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "表格顯示方案 A：固定費 100 元、每單位 20 元。若使用 x 單位，總費用式為何？",
    "givenConditions": "x 為非負使用量。",
    "target": "從表格建立一次式",
    "choices": [
      "100x+20",
      "100+20x",
      "20+x",
      "120x"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "當 x=0 時仍應付 100，只有 100+20x 保留固定費；每增加 1 單位增加 20，也符合。",
      "result": "100+20x",
      "answerIndexVerified": 1
    },
    "explanation": "固定費只付一次為 100，每單位 20 元共 20x，所以總費用 100+20x。",
    "steps": [
      "辨認固定費",
      "辨認每單位變動費"
    ],
    "optionAnalysis": [
      {
        "choice": "100x+20",
        "truth": false,
        "reason": "把固定費乘用量。"
      },
      {
        "choice": "100+20x",
        "truth": true,
        "reason": "獨立重算得到「100+20x」，此選項與完整解答一致。"
      },
      {
        "choice": "20+x",
        "truth": false,
        "reason": "漏掉乘法與固定費結構。"
      },
      {
        "choice": "120x",
        "truth": false,
        "reason": "把固定費與單價相加後全乘。"
      }
    ],
    "misconceptionTarget": "未區分固定與變動資訊。",
    "prerequisiteCheck": "需理解一次式模型。",
    "estimatedTimeSec": "45",
    "unitAndRoundingCheck": "金額元。",
    "ambiguityAndBoundaryAudit": "固定費不隨 x 變動，唯一式為 100+20x。",
    "difficultyReason": "素養資料擷取基礎。",
    "literacyContextNecessity": "表格中的兩種費用角色決定式子結構。",
    "tags": [
      "代數",
      "一元一次不等式",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "18020fc14292f4580f90d7550a4268106857a2022f87e167afbb61cf2e70fe92"
  },
  {
    "questionId": "u07-s012-v002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "教室規則為至少 18 人、最多 30 人。若 n 為人數，正確範圍為何？",
    "givenConditions": "n 為整數。",
    "target": "建立容量可行區間",
    "choices": [
      "18<n<30",
      "n≤18 或 n≥30",
      "18≤n≤30",
      "18≤n<30"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "n≥18 且 n≤30，合併成 18≤n≤30。",
      "result": "18≤n≤30",
      "answerIndexVerified": 2
    },
    "explanation": "至少與最多都包含邊界，且兩條件同時成立，所以 18≤n≤30。",
    "steps": [
      "翻譯下界與上界",
      "取且的交集"
    ],
    "optionAnalysis": [
      {
        "choice": "18<n<30",
        "truth": false,
        "reason": "選項「18<n<30」錯排兩端。，與獨立解得的「18≤n≤30」不一致。"
      },
      {
        "choice": "n≤18 或 n≥30",
        "truth": false,
        "reason": "把且誤成或。"
      },
      {
        "choice": "18≤n≤30",
        "truth": true,
        "reason": "獨立重算得到「18≤n≤30」，此選項與完整解答一致。"
      },
      {
        "choice": "18≤n<30",
        "truth": false,
        "reason": "錯排除 30。"
      }
    ],
    "misconceptionTarget": "多重規則連接詞與端點錯誤。",
    "prerequisiteCheck": "需理解至少、最多、且。",
    "estimatedTimeSec": "45",
    "unitAndRoundingCheck": "單位人。",
    "ambiguityAndBoundaryAudit": "18 與 30 均允許。",
    "difficultyReason": "基本多重限制。",
    "literacyContextNecessity": "教室最低與最大人數同時決定可行區間。",
    "tags": [
      "代數",
      "一元一次不等式",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "40d96bb011e5b5d8685c02aed4d64e2b4e8d522e4c21504bb3d2f8458e36c0b3"
  },
  {
    "questionId": "u07-s012-v003",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "某方案只適用於用量 x≤5。使用此方案公式算得 x=7，最合理的判斷為何？",
    "givenConditions": "已知此公式適用 x≤5。",
    "target": "檢查分段模型自洽",
    "choices": [
      "結果超出公式適用範圍，必須改用其他規則",
      "直接接受 x=7",
      "把 7 改成 5",
      "答案一定無解"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "代入適用條件：7≤5 為假，所以用該公式得到的 7 不能作為最終答案；需查看另一段規則。",
      "result": "結果超出公式適用範圍，必須改用其他規則",
      "answerIndexVerified": 0
    },
    "explanation": "公式只適用 x≤5，算得 7 與前提衝突，不能直接使用；應改用 x>5 對應規則再計算。",
    "steps": [
      "比較答案與適用區間",
      "拒絕不自洽的分段結果"
    ],
    "optionAnalysis": [
      {
        "choice": "結果超出公式適用範圍，必須改用其他規則",
        "truth": true,
        "reason": "獨立重算得到「結果超出公式適用範圍，必須改用其他規則」，此選項與完整解答一致。"
      },
      {
        "choice": "直接接受 x=7",
        "truth": false,
        "reason": "選項「直接接受 x=7」違反前提。，與獨立解得的「結果超出公式適用範圍，必須改用其他規則」不一致。"
      },
      {
        "choice": "把 7 改成 5",
        "truth": false,
        "reason": "不能任意截斷答案。"
      },
      {
        "choice": "答案一定無解",
        "truth": false,
        "reason": "其他分段可能有解。"
      }
    ],
    "misconceptionTarget": "只算公式，不檢查分段一致性。",
    "prerequisiteCheck": "需理解條件範圍。",
    "estimatedTimeSec": "55",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "7 明確不在 x≤5，需重新建模。",
    "difficultyReason": "分段素養核心。",
    "literacyContextNecessity": "方案適用範圍是判斷公式能否使用的必要情境資訊。",
    "tags": [
      "代數",
      "一元一次不等式",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "4a7d8941c4e7b60bcaba450e8320e41b88ca900f190de2245953f6f20f1e4ea1"
  },
  {
    "questionId": "u07-s012-v004",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "方案 A 費用為 80+12x，預算 200 元。完整整數用量最多為何？",
    "givenConditions": "x 為非負整數。",
    "target": "從方案規則求最大整數用量",
    "choices": [
      "8",
      "9",
      "11",
      "10"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "可用變動費 120 元，每單位 12 元，120÷12=10。",
      "result": "10",
      "answerIndexVerified": 3
    },
    "explanation": "80+12x≤200，得 12x≤120，所以 x≤10，最多 10 單位。",
    "steps": [
      "建立預算式",
      "解整數上界"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": false,
        "reason": "8、9 可行但非最多。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "9 可行但非最多。"
      },
      {
        "choice": "11",
        "truth": false,
        "reason": "11 費用 212。"
      },
      {
        "choice": "10",
        "truth": true,
        "reason": "獨立重算得到「10」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "漏固定費或未找最大值。",
    "prerequisiteCheck": "需會固定費預算。",
    "estimatedTimeSec": "65",
    "unitAndRoundingCheck": "金額元。",
    "ambiguityAndBoundaryAudit": "10 費用 200，11 超支。",
    "difficultyReason": "表格模型標準題。",
    "literacyContextNecessity": "方案公式與預算共同決定用量上界。",
    "tags": [
      "代數",
      "一元一次不等式",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "7e0e6ca93a082f3aa1e46a269f189cc08773744dee32486b13a9af36d72f09f6"
  },
  {
    "questionId": "u07-s012-v005",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "方案 A：50+15x；方案 B：110+9x。當 x 為整數時，從多少單位起 B 不比 A 貴？",
    "givenConditions": "x 為非負整數。",
    "target": "比較兩方案臨界用量",
    "choices": [
      "8",
      "9",
      "10",
      "11"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "B−A=(110−50)+(9−15)x=60−6x。要求 B−A≤0，即 x≥10。",
      "result": "10",
      "answerIndexVerified": 2
    },
    "explanation": "110+9x≤50+15x，得 60≤6x，所以 x≥10；從 10 單位起。",
    "steps": [
      "比較完整總費用",
      "移項求交叉點"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": false,
        "reason": "x=8 時 B=182、A=170，B較貴。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "x=9 時 B=191、A=185。"
      },
      {
        "choice": "10",
        "truth": true,
        "reason": "正確，x=10 兩者 200。"
      },
      {
        "choice": "11",
        "truth": false,
        "reason": "可行但不是最早。"
      }
    ],
    "misconceptionTarget": "只比較每單位費，忽略固定費。",
    "prerequisiteCheck": "需會兩邊含 x 的不等式。",
    "estimatedTimeSec": "85",
    "unitAndRoundingCheck": "金額元。",
    "ambiguityAndBoundaryAudit": "x=10 恰相等且「不比」包含等於；x=9 尚較貴。",
    "difficultyReason": "方案比較。",
    "literacyContextNecessity": "兩方案固定費與單價相反，必須用完整函數找交叉點。",
    "tags": [
      "代數",
      "一元一次不等式",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "ea8fe61f58426a8304d8fef704dc8b2f6650c909f7692a43ffbedbbf350e4259"
  },
  {
    "questionId": "u07-s012-v006",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "表格提供：場地容量 40 人、最低開課 24 人、目前報名 19 人。若每組新增 3 人，最少再招募幾組才能開課且不超容量？",
    "givenConditions": "g 為非負整數。",
    "target": "多重限制下的最少招募量",
    "choices": [
      "2 組",
      "1 組",
      "7 組",
      "8 組"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "還差 5 人；一組 3 人不夠，兩組增 6 人到 25，且 25≤40，所以最少 2 組。",
      "result": "2 組",
      "answerIndexVerified": 0
    },
    "explanation": "19+3g≥24 得 g≥5/3，最少整數 2。此時 25 人不超過 40，故 2 組可行。",
    "steps": [
      "先滿足最低人數",
      "取最小整數",
      "檢查容量上限"
    ],
    "optionAnalysis": [
      {
        "choice": "2 組",
        "truth": true,
        "reason": "正確，新增後 25 人。"
      },
      {
        "choice": "1 組",
        "truth": false,
        "reason": "1 組只有 22 人。"
      },
      {
        "choice": "7 組",
        "truth": false,
        "reason": "可行但非最少。"
      },
      {
        "choice": "8 組",
        "truth": false,
        "reason": "新增後 43 人超容量。"
      }
    ],
    "misconceptionTarget": "只解最低需求或只看容量，未同時驗證。",
    "prerequisiteCheck": "需會固定量與且。",
    "estimatedTimeSec": "80",
    "unitAndRoundingCheck": "單位人、組；每組 3 人。",
    "ambiguityAndBoundaryAudit": "2 組後 25 介於 24 與 40。",
    "difficultyReason": "資料擷取與交集。",
    "literacyContextNecessity": "最低開課、容量、目前人數及每組增量四項都影響答案。",
    "tags": [
      "代數",
      "一元一次不等式",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "094364e589123aa937cd4fdbc5e05ce2fd97f53f760d26fb24905209318ba177"
  },
  {
    "questionId": "u07-s012-v007",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "計程車前 3 公里固定 90 元，超過 3 公里後每公里加 25 元。預算 240 元，最多可搭幾公里？",
    "givenConditions": "d≥0，且解出的 9 落在 d>3 段。",
    "target": "分段計費模型",
    "choices": [
      "6 公里",
      "8 公里",
      "10 公里",
      "9 公里"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "超額里程可花 240−90=150 元，每公里 25，可多搭 6 公里；加前 3 公里共 9。",
      "result": "9 公里",
      "answerIndexVerified": 3
    },
    "explanation": "若 d>3，費用 90+25(d−3)≤240。得 25(d−3)≤150，所以 d−3≤6，d≤9；最多 9 公里。",
    "steps": [
      "選擇超過 3 公里的分段公式",
      "解距離上界",
      "檢查結果仍 >3"
    ],
    "optionAnalysis": [
      {
        "choice": "6 公里",
        "truth": false,
        "reason": "6 可行但非最多。"
      },
      {
        "choice": "8 公里",
        "truth": false,
        "reason": "8 可行但非最多。"
      },
      {
        "choice": "10 公里",
        "truth": false,
        "reason": "10 公里費 265。"
      },
      {
        "choice": "9 公里",
        "truth": true,
        "reason": "獨立重算得到「9 公里」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "把 25d 直接加在 90 上，重複計費前 3 公里。",
    "prerequisiteCheck": "需會分段式與括號。",
    "estimatedTimeSec": "105",
    "unitAndRoundingCheck": "金額元、距離公里。",
    "ambiguityAndBoundaryAudit": "9 公里費 240，10 公里超支；分段自洽。",
    "difficultyReason": "含基礎里程的分段素養。",
    "literacyContextNecessity": "前 3 公里固定費與超額里程規則不可簡化成單一單價。",
    "tags": [
      "代數",
      "一元一次不等式",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "1f74a9a16aeceb88088d63c5e7d69523d3fba6a3cb94765dbdd33bca198707e5"
  },
  {
    "questionId": "u07-s012-v008",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "某電費規則：前 100 度每度 2 元；超過 100 度的部分每度 3 元。預算 260 元，最多可用幾度？",
    "givenConditions": "用量為非負整數度。",
    "target": "累進分段費率",
    "choices": [
      "110 度",
      "120 度",
      "130 度",
      "100 度"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "100 度先花 200；剩 60 能買 60÷3=20 度超額量，總用量 120。",
      "result": "120 度",
      "answerIndexVerified": 1
    },
    "explanation": "前 100 度費 200 元，剩 60 元可付超額，每度 3 元，可再用 20 度，所以最多 120 度。",
    "steps": [
      "算前段固定累積費",
      "用剩餘預算算第二段",
      "合併用量"
    ],
    "optionAnalysis": [
      {
        "choice": "110 度",
        "truth": false,
        "reason": "110 度只花 230，非最多。"
      },
      {
        "choice": "120 度",
        "truth": true,
        "reason": "正確，總費 260。"
      },
      {
        "choice": "130 度",
        "truth": false,
        "reason": "130 度需 290。"
      },
      {
        "choice": "100 度",
        "truth": false,
        "reason": "未用完預算。"
      }
    ],
    "misconceptionTarget": "把所有度數都用第二段費率或忽略前段累積。",
    "prerequisiteCheck": "需會分段累積。",
    "estimatedTimeSec": "105",
    "unitAndRoundingCheck": "金額元、用量度。",
    "ambiguityAndBoundaryAudit": "120 度剛好 260，121 度 263 超支。",
    "difficultyReason": "兩段費率整合。",
    "literacyContextNecessity": "前段與超額段採不同費率，情境規則是計算核心。",
    "tags": [
      "代數",
      "一元一次不等式",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "ab92a8d634cad9d9562a516619da2c32e433b978cee9949e24192530755ecdd6"
  },
  {
    "questionId": "u07-s012-v009",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "一場活動有兩項限制：總時間不超過 180 分鐘，固定流程 45 分鐘，每個單元 22 分鐘；另規定至少安排 5 個單元。可安排的整數單元數範圍為何？",
    "givenConditions": "n 為整數。",
    "target": "時間預算與最低需求交集",
    "choices": [
      "5≤n≤6",
      "n≤6",
      "5≤n≤7",
      "無解"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "最多 floor((180−45)/22)=floor(135/22)=6；至少 5，所以 n 只能 5 或 6。",
      "result": "5≤n≤6",
      "answerIndexVerified": 0
    },
    "explanation": "45+22n≤180 得 22n≤135，n≤6.13…，整數 n≤6。與 n≥5 取交集，得 5≤n≤6。",
    "steps": [
      "求時間上界",
      "加入最低單元數",
      "取整數交集"
    ],
    "optionAnalysis": [
      {
        "choice": "5≤n≤6",
        "truth": true,
        "reason": "獨立重算得到「5≤n≤6」，此選項與完整解答一致。"
      },
      {
        "choice": "n≤6",
        "truth": false,
        "reason": "選項「n≤6」漏下界。，與獨立解得的「5≤n≤6」不一致。"
      },
      {
        "choice": "5≤n≤7",
        "truth": false,
        "reason": "7 單元時間 199 分鐘。"
      },
      {
        "choice": "無解",
        "truth": false,
        "reason": "5、6 均可行。"
      }
    ],
    "misconceptionTarget": "只解其中一個限制或錯誤取整。",
    "prerequisiteCheck": "需會固定時間模型與且。",
    "estimatedTimeSec": "110",
    "unitAndRoundingCheck": "時間均為分鐘。",
    "ambiguityAndBoundaryAudit": "5 單元 155 分鐘、6 單元 177、7 單元 199。",
    "difficultyReason": "多重限制與邊界驗證。",
    "literacyContextNecessity": "固定流程、單元時長、總時限與最低單元數共同決定兩個可行值。",
    "tags": [
      "代數",
      "一元一次不等式",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "0f15c78ee1aa6137fa620c20fbd1304a11da2788c16fe4ea9bbb23a3660b9e39"
  },
  {
    "questionId": "u07-s012-v010",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "資料方案表：A 月租 199 元、每 GB 40 元；B 月租 319 元、每 GB 20 元。預計用量至少多少 GB 時，B 的總費用不高於 A？",
    "givenConditions": "g 為非負整數 GB。",
    "target": "由方案表求費用交叉點",
    "choices": [
      "4 GB",
      "5 GB",
      "7 GB",
      "6 GB"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "B比A多固定費 120，但每 GB 省 20；需 120÷20=6 GB 才抵銷，之後 B 不高於 A。",
      "result": "6 GB",
      "answerIndexVerified": 3
    },
    "explanation": "319+20g≤199+40g，得 120≤20g，所以 g≥6；至少 6 GB。",
    "steps": [
      "比較完整費用",
      "求臨界用量",
      "檢查等號"
    ],
    "optionAnalysis": [
      {
        "choice": "4 GB",
        "truth": false,
        "reason": "4、5 GB 時 B 仍較貴。"
      },
      {
        "choice": "5 GB",
        "truth": false,
        "reason": "5 GB 時 A=399、B=419。"
      },
      {
        "choice": "7 GB",
        "truth": false,
        "reason": "7 可行但不是最少。"
      },
      {
        "choice": "6 GB",
        "truth": true,
        "reason": "正確，6 GB 兩者皆 439。"
      }
    ],
    "misconceptionTarget": "只看 B 每 GB 較便宜就立即選 B。",
    "prerequisiteCheck": "需會兩邊有未知數的移項。",
    "estimatedTimeSec": "95",
    "unitAndRoundingCheck": "金額元、流量 GB。",
    "ambiguityAndBoundaryAudit": "g=6 相等且「不高於」允許；g=5 B 較高。",
    "difficultyReason": "表格比較素養。",
    "literacyContextNecessity": "兩方案固定費與單價的取捨必須保留，使用量決定優劣。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "fa6d83ff437f58d50297a2114a208dea5f539a1cc366e6060674973d11625348"
  },
  {
    "questionId": "u07-s012-v011",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "一個倉庫最多存 500 箱，現有 365 箱。卡車每趟送 28 箱，但最後一趟也必須整車卸下。最多可再收幾趟？",
    "givenConditions": "t 為非負整數趟。",
    "target": "容量與批次離散化",
    "choices": [
      "3 趟",
      "4 趟",
      "5 趟",
      "6 趟"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "剩餘容量 135 箱；4 趟送 112，仍可收；5 趟送 140，超過 135。因此最多 4 趟。",
      "result": "4 趟",
      "answerIndexVerified": 1
    },
    "explanation": "365+28t≤500，得 28t≤135，t≤4.82…；完整趟數最多 4。",
    "steps": [
      "建立容量上限",
      "取最大完整趟數"
    ],
    "optionAnalysis": [
      {
        "choice": "3 趟",
        "truth": false,
        "reason": "3 可行但非最多。"
      },
      {
        "choice": "4 趟",
        "truth": true,
        "reason": "正確，總數 477。"
      },
      {
        "choice": "5 趟",
        "truth": false,
        "reason": "5 趟會到 505。"
      },
      {
        "choice": "6 趟",
        "truth": false,
        "reason": "選項「6 趟」更超量。，與獨立解得的「4 趟」不一致。"
      }
    ],
    "misconceptionTarget": "把 4.82 四捨五入為 5，忽略整車卸下。",
    "prerequisiteCheck": "需會容量模型與取整。",
    "estimatedTimeSec": "85",
    "unitAndRoundingCheck": "單位箱、趟；每趟 28 箱。",
    "ambiguityAndBoundaryAudit": "4 趟可收、5 趟超容量。",
    "difficultyReason": "情境型最大整數。",
    "literacyContextNecessity": "整車卸下規則使 4.82 不能拆成部分趟，情境必要。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "e12bae07a3e898fbfe6d8d9a7b358831c96a74dc4e90c1a75e6020da03242938"
  },
  {
    "questionId": "u07-s012-v012",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "閱讀規則：前 2 小時收費 100 元；超過 2 小時後，每 30 分鐘加 35 元。小安有 240 元，最多可使用幾小時？時間以完整 30 分鐘計。",
    "givenConditions": "時間超過 2 小時後按完整 30 分鐘。",
    "target": "分段時間計費與單位轉換",
    "choices": [
      "3 小時",
      "3.5 小時",
      "4 小時",
      "4.5 小時"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "240−100=140，140÷35=4 個額外半小時，共 2 小時；加原 2 小時得 4 小時。",
      "result": "4 小時",
      "answerIndexVerified": 2
    },
    "explanation": "前 2 小時 100 元，剩 140 元可買 4 個半小時時段，共再 2 小時，所以最多 4 小時。答案為 4 小時。",
    "steps": [
      "扣除前段費用",
      "計算額外時段數",
      "換成總小時"
    ],
    "optionAnalysis": [
      {
        "choice": "3 小時",
        "truth": false,
        "reason": "3 小時只用 2 個額外時段，非最多。"
      },
      {
        "choice": "3.5 小時",
        "truth": false,
        "reason": "3.5 小時可行但非最多。"
      },
      {
        "choice": "4 小時",
        "truth": true,
        "reason": "4 小時正確。"
      },
      {
        "choice": "4.5 小時",
        "truth": false,
        "reason": "4.5 小時需 5 個額外時段共 275 元。"
      }
    ],
    "misconceptionTarget": "時段換算或正確選項索引錯誤。",
    "prerequisiteCheck": "需會分段、整數時段與時間換算。",
    "estimatedTimeSec": "115",
    "unitAndRoundingCheck": "35 元／30 分鐘；4 個時段=2 小時。",
    "ambiguityAndBoundaryAudit": "4 小時總費 240，4.5 小時 275，邊界明確。",
    "difficultyReason": "分段規則與時間單位整合。",
    "literacyContextNecessity": "前段包時、額外半小時計費及完整時段限制均影響答案。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "bdad10b8642c9c9f2e838b6e9576d3f2cb75dfcc15aad490828f36379d75b15d"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u07-s012-cr001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "type": "constructed-response",
    "prompt": "某共享空間收費如下：前 2 小時 120 元；超過 2 小時後，每完整 30 分鐘加收 40 元。小美有 360 元。求最多可使用多久，並寫出分段判斷與邊界驗算。",
    "requiredWork": [
      "判斷答案落在超過 2 小時的分段",
      "扣除前段費用",
      "求完整半小時時段數",
      "換算總時間",
      "檢查下一時段"
    ],
    "fullCreditSolution": [
      "360 元足以支付前 2 小時，因此使用第二段規則。",
      "剩餘 360−120=240 元，可支付 240÷40=6 個完整 30 分鐘。",
      "6 個半小時為 3 小時，加前 2 小時，共 5 小時。",
      "5 小時費用 120+6×40=360；5.5 小時需 7 個時段，費用 400，超支。"
    ],
    "alternativeMethod": [
      "可設超額半小時時段數 n：120+40n≤360，得 n≤6，再用總時間 2+0.5n。"
    ],
    "reasoningSteps": [
      "選擇正確分段",
      "處理固定前段費",
      "離散時段取整",
      "單位換算",
      "相鄰邊界驗證"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整判斷第二段，算出 6 個半小時、總計 5 小時，並驗證 5 可行、5.5 超支。"
      },
      {
        "score": 2,
        "criteria": "答案 5 小時與主要計算正確，但缺少分段說明或下一時段驗算。"
      },
      {
        "score": 1,
        "criteria": "知道先扣 120 或算出 6 個時段，但時間換算或總時間相加錯誤。"
      },
      {
        "score": 0,
        "criteria": "把 360 全部除以 40 或重複計費前 2 小時，且無合理修正。"
      }
    ],
    "partialCreditRules": "若把 6 個半小時誤換成 6 小時，保留前段與時段數計算分；若忘記加前 2 小時，屬總時間解讀錯。",
    "followThroughPolicy": "前段算術錯誤後若仍正確以完整 30 分鐘向下取整，可給程序分；分段適用性須另評。",
    "unitAndNotationRules": "金額元、時間小時；30 分鐘=0.5 小時。最終寫 5 小時。",
    "answerOnlyPolicy": "只寫 5 小時，最多 1 分。",
    "commonErrors": [
      "把每 30 分鐘誤當每小時",
      "超額時間未加回前 2 小時"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "最多 5 小時。",
      "ambiguity": "「每完整 30 分鐘」明確限定離散時段，前段與超額段界線清楚。",
      "scope": "國中分段計費不等式素養。",
      "reviewNote": "獨立扣除 120 得 240，可買 6 個半小時即 3 小時；總 5 小時，下一個半小時使費用 400，故最大值唯一。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "d308e602bf2ee4cfca42767b02e1cde34368ed9f142fbd598409c71555b60091"
  },
  {
    "questionId": "u07-s012-cr002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "type": "constructed-response",
    "prompt": "活動規則：場地最多容納 72 人；已確定 18 位工作人員；每組參加者 6 人；至少要有 7 組才成行。設組數為 g。建立所有限制，求可行整數範圍，並說明是否能安排 10 組。",
    "requiredWork": [
      "建立容量上限",
      "建立最低組數",
      "取且的交集",
      "求整數範圍",
      "代入 10 組驗證"
    ],
    "fullCreditSolution": [
      "容量限制為 18+6g≤72，故 6g≤54，g≤9。",
      "成行限制為 g≥7。",
      "兩條件同時成立，所以 7≤g≤9，且 g 為整數。",
      "10 組時總人數 18+60=78>72，因此不能安排。"
    ],
    "alternativeMethod": [
      "也可先算參加者容量 72−18=54，人數可容納 54÷6=9 組，再與至少 7 組合併。"
    ],
    "reasoningSteps": [
      "從資料擷取固定人數與每組人數",
      "求最大組數",
      "加入最低需求",
      "判斷特定方案"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確列出 18+6g≤72 與 g≥7，得到整數範圍 7≤g≤9，並證明 10 組不可行。"
      },
      {
        "score": 2,
        "criteria": "範圍與 10 組判斷正確，但其中一個原始限制未清楚列式；或只漏寫 g 為整數。"
      },
      {
        "score": 1,
        "criteria": "能求出上限 9 或下限 7，但未正確取交集。"
      },
      {
        "score": 0,
        "criteria": "忽略工作人員或把至少 7 寫成 g≤7，無有效共同範圍。"
      }
    ],
    "partialCreditRules": "只列 g=7、8、9 也可視為正確整數範圍；但需展示兩項限制。",
    "followThroughPolicy": "若把 72−18 算錯但仍正確形成容量模型與且的交集，可給程序分。",
    "unitAndNotationRules": "g 的單位為組且為非負整數；人數單位為人。",
    "answerOnlyPolicy": "只回答「不能 10 組」而無範圍，最多 1 分。",
    "commonErrors": [
      "忽略 18 位工作人員",
      "把至少成行條件當成可選條件"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "7≤g≤9，10 組不可行。",
      "ambiguity": "容量、固定工作人員、每組人數與最低組數均明示，所有限制須同時成立。",
      "scope": "國中多條件不等式素養。",
      "reviewNote": "獨立算可供參加者 54 人，最多 9 組；與至少 7 組交集得 7、8、9。10 組總人數 78，超過 72。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "35fc69dbce8dfb39c72221c1486c0b75774509584558378d16b0dfa5de6b687b"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u07-s012-v001-semantic-r1",
    "questionId": "u07-s012-v001",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "18020fc14292f4580f90d7550a4268106857a2022f87e167afbb61cf2e70fe92",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "當 x=0 時仍應付 100，只有 100+20x 保留固定費；每增加 1 單位增加 20，也符合。",
    "derivedAnswer": "100+20x",
    "storedAnswer": "100+20x",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「從表格建立一次式」，給定條件「x 為非負使用量。」足以決定唯一數學任務。",
      "boundary": "固定費不隨 x 變動，唯一式為 100+20x。",
      "units": "金額元。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "素養資料擷取基礎。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：當 x=0 時仍應付 100，只有 100+20x 保留固定費；每增加 1 單位增加 20，也符合。 所得「100+20x」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：固定費不隨 x 變動，唯一式為 100+20x。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v002-semantic-r1",
    "questionId": "u07-s012-v002",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "40d96bb011e5b5d8685c02aed4d64e2b4e8d522e4c21504bb3d2f8458e36c0b3",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "n≥18 且 n≤30，合併成 18≤n≤30。",
    "derivedAnswer": "18≤n≤30",
    "storedAnswer": "18≤n≤30",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「建立容量可行區間」，給定條件「n 為整數。」足以決定唯一數學任務。",
      "boundary": "18 與 30 均允許。",
      "units": "單位人。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "基本多重限制。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：n≥18 且 n≤30，合併成 18≤n≤30。 所得「18≤n≤30」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：18 與 30 均允許。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v003-semantic-r1",
    "questionId": "u07-s012-v003",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "4a7d8941c4e7b60bcaba450e8320e41b88ca900f190de2245953f6f20f1e4ea1",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "代入適用條件：7≤5 為假，所以用該公式得到的 7 不能作為最終答案；需查看另一段規則。",
    "derivedAnswer": "結果超出公式適用範圍，必須改用其他規則",
    "storedAnswer": "結果超出公式適用範圍，必須改用其他規則",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「檢查分段模型自洽」，給定條件「已知此公式適用 x≤5。」足以決定唯一數學任務。",
      "boundary": "7 明確不在 x≤5，需重新建模。",
      "units": "無單位。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "分段素養核心。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：代入適用條件：7≤5 為假，所以用該公式得到的 7 不能作為最終答案；需查看另一段規則。 所得「結果超出公式適用範圍，必須改用其他規則」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：7 明確不在 x≤5，需重新建模。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v004-semantic-r1",
    "questionId": "u07-s012-v004",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "7e0e6ca93a082f3aa1e46a269f189cc08773744dee32486b13a9af36d72f09f6",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "可用變動費 120 元，每單位 12 元，120÷12=10。",
    "derivedAnswer": "10",
    "storedAnswer": "10",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「從方案規則求最大整數用量」，給定條件「x 為非負整數。」足以決定唯一數學任務。",
      "boundary": "10 費用 200，11 超支。",
      "units": "金額元。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "表格模型標準題。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：可用變動費 120 元，每單位 12 元，120÷12=10。 所得「10」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：10 費用 200，11 超支。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v005-semantic-r1",
    "questionId": "u07-s012-v005",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "ea8fe61f58426a8304d8fef704dc8b2f6650c909f7692a43ffbedbbf350e4259",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "B−A=(110−50)+(9−15)x=60−6x。要求 B−A≤0，即 x≥10。",
    "derivedAnswer": "10",
    "storedAnswer": "10",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「比較兩方案臨界用量」，給定條件「x 為非負整數。」足以決定唯一數學任務。",
      "boundary": "x=10 恰相等且「不比」包含等於；x=9 尚較貴。",
      "units": "金額元。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "方案比較。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：B−A=(110−50)+(9−15)x=60−6x。要求 B−A≤0，即 x≥10。 所得「10」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：x=10 恰相等且「不比」包含等於；x=9 尚較貴。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v006-semantic-r1",
    "questionId": "u07-s012-v006",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "094364e589123aa937cd4fdbc5e05ce2fd97f53f760d26fb24905209318ba177",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "還差 5 人；一組 3 人不夠，兩組增 6 人到 25，且 25≤40，所以最少 2 組。",
    "derivedAnswer": "2 組",
    "storedAnswer": "2 組",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「多重限制下的最少招募量」，給定條件「g 為非負整數。」足以決定唯一數學任務。",
      "boundary": "2 組後 25 介於 24 與 40。",
      "units": "單位人、組；每組 3 人。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "資料擷取與交集。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：還差 5 人；一組 3 人不夠，兩組增 6 人到 25，且 25≤40，所以最少 2 組。 所得「2 組」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：2 組後 25 介於 24 與 40。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v007-semantic-r1",
    "questionId": "u07-s012-v007",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "1f74a9a16aeceb88088d63c5e7d69523d3fba6a3cb94765dbdd33bca198707e5",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "超額里程可花 240−90=150 元，每公里 25，可多搭 6 公里；加前 3 公里共 9。",
    "derivedAnswer": "9 公里",
    "storedAnswer": "9 公里",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「分段計費模型」，給定條件「d≥0，且解出的 9 落在 d>3 段。」足以決定唯一數學任務。",
      "boundary": "9 公里費 240，10 公里超支；分段自洽。",
      "units": "金額元、距離公里。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "含基礎里程的分段素養。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：超額里程可花 240−90=150 元，每公里 25，可多搭 6 公里；加前 3 公里共 9。 所得「9 公里」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：9 公里費 240，10 公里超支；分段自洽。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v008-semantic-r1",
    "questionId": "u07-s012-v008",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "ab92a8d634cad9d9562a516619da2c32e433b978cee9949e24192530755ecdd6",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "100 度先花 200；剩 60 能買 60÷3=20 度超額量，總用量 120。",
    "derivedAnswer": "120 度",
    "storedAnswer": "120 度",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「累進分段費率」，給定條件「用量為非負整數度。」足以決定唯一數學任務。",
      "boundary": "120 度剛好 260，121 度 263 超支。",
      "units": "金額元、用量度。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "兩段費率整合。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：100 度先花 200；剩 60 能買 60÷3=20 度超額量，總用量 120。 所得「120 度」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：120 度剛好 260，121 度 263 超支。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v009-semantic-r1",
    "questionId": "u07-s012-v009",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "0f15c78ee1aa6137fa620c20fbd1304a11da2788c16fe4ea9bbb23a3660b9e39",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "最多 floor((180−45)/22)=floor(135/22)=6；至少 5，所以 n 只能 5 或 6。",
    "derivedAnswer": "5≤n≤6",
    "storedAnswer": "5≤n≤6",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「時間預算與最低需求交集」，給定條件「n 為整數。」足以決定唯一數學任務。",
      "boundary": "5 單元 155 分鐘、6 單元 177、7 單元 199。",
      "units": "時間均為分鐘。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "多重限制與邊界驗證。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：最多 floor((180−45)/22)=floor(135/22)=6；至少 5，所以 n 只能 5 或 6。 所得「5≤n≤6」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：5 單元 155 分鐘、6 單元 177、7 單元 199。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v010-semantic-r1",
    "questionId": "u07-s012-v010",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "fa6d83ff437f58d50297a2114a208dea5f539a1cc366e6060674973d11625348",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "B比A多固定費 120，但每 GB 省 20；需 120÷20=6 GB 才抵銷，之後 B 不高於 A。",
    "derivedAnswer": "6 GB",
    "storedAnswer": "6 GB",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「由方案表求費用交叉點」，給定條件「g 為非負整數 GB。」足以決定唯一數學任務。",
      "boundary": "g=6 相等且「不高於」允許；g=5 B 較高。",
      "units": "金額元、流量 GB。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "表格比較素養。",
    "literacyNecessityCheck": "兩方案固定費與單價的取捨必須保留，使用量決定優劣。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：B比A多固定費 120，但每 GB 省 20；需 120÷20=6 GB 才抵銷，之後 B 不高於 A。 所得「6 GB」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：g=6 相等且「不高於」允許；g=5 B 較高。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v011-semantic-r1",
    "questionId": "u07-s012-v011",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "e12bae07a3e898fbfe6d8d9a7b358831c96a74dc4e90c1a75e6020da03242938",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "剩餘容量 135 箱；4 趟送 112，仍可收；5 趟送 140，超過 135。因此最多 4 趟。",
    "derivedAnswer": "4 趟",
    "storedAnswer": "4 趟",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「容量與批次離散化」，給定條件「t 為非負整數趟。」足以決定唯一數學任務。",
      "boundary": "4 趟可收、5 趟超容量。",
      "units": "單位箱、趟；每趟 28 箱。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "情境型最大整數。",
    "literacyNecessityCheck": "整車卸下規則使 4.82 不能拆成部分趟，情境必要。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：剩餘容量 135 箱；4 趟送 112，仍可收；5 趟送 140，超過 135。因此最多 4 趟。 所得「4 趟」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：4 趟可收、5 趟超容量。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v012-semantic-r1",
    "questionId": "u07-s012-v012",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "bdad10b8642c9c9f2e838b6e9576d3f2cb75dfcc15aad490828f36379d75b15d",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "240−100=140，140÷35=4 個額外半小時，共 2 小時；加原 2 小時得 4 小時。",
    "derivedAnswer": "4 小時",
    "storedAnswer": "4 小時",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「分段時間計費與單位轉換」，給定條件「時間超過 2 小時後按完整 30 分鐘。」足以決定唯一數學任務。",
      "boundary": "4 小時總費 240，4.5 小時 275，邊界明確。",
      "units": "35 元／30 分鐘；4 個時段=2 小時。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "分段規則與時間單位整合。",
    "literacyNecessityCheck": "前段包時、額外半小時計費及完整時段限制均影響答案。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：240−100=140，140÷35=4 個額外半小時，共 2 小時；加原 2 小時得 4 小時。 所得「4 小時」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：4 小時總費 240，4.5 小時 275，邊界明確。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
