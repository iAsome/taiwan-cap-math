// DETERMINISTIC SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u07-s011-lecture-r1",
  "unitId": "u07",
  "topicId": "u07-applications",
  "skillId": "inequality-budget",
  "title": "預算不等式應用：固定費和單價與折扣及可購數量",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能建立固定費加變動費的預算不等式。",
    "能處理折扣、優惠門檻與多項支出。",
    "能求最多可購數量或最低所需預算。",
    "能比較方案並驗證取整後是否超支。"
  ],
  "prerequisites": [
    {
      "skillId": "inequality-reasonableness",
      "requiredLevel": "能加入非負整數與預算上限等情境限制。"
    }
  ],
  "prerequisiteBridge": {
    "inequality-reasonableness": "能加入非負整數與預算上限等情境限制。"
  },
  "glossary": [
    {
      "term": "預算",
      "definition": "可使用金額的上限。"
    },
    {
      "term": "固定費",
      "definition": "不論購買數量多少都需支付的費用。"
    },
    {
      "term": "變動費",
      "definition": "隨數量增加而增加的費用。"
    },
    {
      "term": "折扣後單價",
      "definition": "原價乘上折扣比例後的每件價格。"
    },
    {
      "term": "餘額",
      "definition": "預算減去實際支出。"
    }
  ],
  "notation": [
    {
      "symbol": "F+px≤B",
      "meaning": "固定費 F 加單價 p 乘數量 x，不超過預算 B。"
    },
    {
      "symbol": "p(1−r)",
      "meaning": "原單價 p 打 r 比例折扣後的單價。"
    }
  ],
  "conceptNarrative": [
    "預算題先確認所有價格單位一致，並找出哪些費用只付一次。",
    "「不超過預算」包含剛好用完，因此使用≤。",
    "折扣應作用在題目指定的品項或總額，不能自行套到固定費。",
    "求最多件數時解出上界，再取不超過它的最大非負整數，並代入下一件確認會超支。"
  ],
  "formalDefinitions": [
    {
      "name": "預算限制",
      "statement": "總支出≤可用預算。"
    },
    {
      "name": "固定加變動模型",
      "statement": "總支出=固定費＋單價×數量。"
    },
    {
      "name": "方案可行性",
      "statement": "同時滿足優惠條件與預算上限才是可行購買方案。"
    }
  ],
  "formulas": [
    {
      "formula": "F+px≤B ⇒ x≤(B−F)/p",
      "conditions": [
        "p>0",
        "B≥F 才可能購買非負件數"
      ],
      "meaning": "最多數量的實數上界。"
    },
    {
      "formula": "折扣價=p×折數",
      "conditions": [
        "八折寫 0.8"
      ],
      "meaning": "計算優惠後單價。"
    }
  ],
  "nonApplicableCases": [
    "若固定費已超過預算，可能連 0 件都無法購買。",
    "滿額折扣有條件，未達門檻不能使用折扣價。",
    "運費是否固定或按件計算，必須依題意。",
    "同時買不同品項若有兩個未知數，不宜強行套成一元不等式；本單元題目會給其中一種數量或關係。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "列出預算與全部支出。",
      "check": "元、點數或其他單位是否一致？"
    },
    {
      "step": 2,
      "instruction": "分辨固定費、單價與折扣範圍。",
      "check": "哪些費用只付一次？"
    },
    {
      "step": 3,
      "instruction": "寫總支出≤預算。",
      "check": "優惠條件是否也需滿足？"
    },
    {
      "step": 4,
      "instruction": "解出數量上界。",
      "check": "除數是否為正單價？"
    },
    {
      "step": 5,
      "instruction": "取最大可行整數並驗證相鄰值。",
      "check": "x 件不超支，x+1 件會超支嗎？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "預算 1000 元，運費 80 元，每本書 115 元，最多買幾本？",
      "solutionSteps": [
        "80+115x≤1000。",
        "115x≤920，x≤8。"
      ],
      "answer": "最多 8 本。"
    },
    {
      "exampleId": "L2",
      "prompt": "每張票 250 元打八折，預算 1100 元，最多買幾張？",
      "solutionSteps": [
        "折扣後每張 200 元。",
        "200x≤1100，x≤5.5。"
      ],
      "answer": "最多 5 張。"
    },
    {
      "exampleId": "L3",
      "prompt": "會員費 300 元，每次課程 180 元，總支出至多 1560 元，最多上幾次？",
      "solutionSteps": [
        "300+180n≤1560。",
        "180n≤1260，n≤7。"
      ],
      "answer": "最多 7 次。"
    },
    {
      "exampleId": "L4",
      "prompt": "預算 500 元，固定入場費 560 元，還能購買紀念品嗎？",
      "solutionSteps": [
        "即使買 0 件，支出 560 元仍超過 500 元。",
        "可行集合為空。"
      ],
      "answer": "不能，連入場費都超出預算。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把運費乘上書本數量。",
      "why": "把固定費誤當每件費用。",
      "correction": "總支出為一次運費加單價乘數量。"
    },
    {
      "mistake": "八折算成原價減 8%。",
      "why": "混淆八折與 92 折。",
      "correction": "八折是原價×0.8。"
    },
    {
      "mistake": "x≤5.5 回答 6 張。",
      "why": "向上取整造成超支。",
      "correction": "最大可行整數為 5。"
    },
    {
      "mistake": "總支出剛好等於預算時排除。",
      "why": "把「不超過」當嚴格小於。",
      "correction": "預算上限通常包含等於。"
    },
    {
      "mistake": "固定費超預算仍回答 0 件可行。",
      "why": "沒有檢查 0 件時的總支出。",
      "correction": "若必要固定費已超支，無可行方案。"
    },
    {
      "mistake": "未達滿額門檻仍套折扣。",
      "why": "忽略優惠條件。",
      "correction": "先驗證門檻，再決定價格模型。"
    }
  ],
  "selfCheck": [
    "所有支出是否完整且單位一致？",
    "折扣作用範圍與門檻是否正確？",
    "數量是否為非負整數？",
    "最大件數與下一件是否都代回驗證？"
  ],
  "summary": [
    "總支出不超過預算。",
    "固定費只加一次，變動費為單價乘數量。",
    "折扣需依題意與門檻使用。",
    "最多數量向下取到最大可行整數，再驗證下一個整數。"
  ],
  "connections": {
    "previous": "承接模型合理性與整數取整。",
    "next": [
      "最後技能會把預算與表格、分段規則、容量等資訊整合。"
    ]
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u07-s011-v001",
      "u07-s011-v002",
      "u07-s011-v003",
      "u07-s011-v004",
      "u07-s011-v005",
      "u07-s011-v006",
      "u07-s011-v007",
      "u07-s011-v008",
      "u07-s011-v009",
      "u07-s011-v010",
      "u07-s011-v011",
      "u07-s011-v012"
    ],
    "constructedResponseIds": [
      "u07-s011-cr001",
      "u07-s011-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四個例題包含固定運費、折扣、會員費與固定費已超支；所有最大數量均以相鄰整數回代，並特別檢查 0 件仍不可行的空集合情況。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "f1da6394a5c71b0b610a45288b117ddf2fd30a622e95858a87c7937d54c8a271"
};

export const QUESTIONS = [
  {
    "questionId": "u07-s011-v001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "預算 500 元，每件商品 65 元，不計其他費用。最多可買幾件？",
    "givenConditions": "x 為非負整數。",
    "target": "純單價預算上限",
    "choices": [
      "6 件",
      "8 件",
      "7 件",
      "9 件"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "7 件花 455≤500；8 件花 520>500，所以最多 7 件。",
      "result": "7 件",
      "answerIndexVerified": 2
    },
    "explanation": "65x≤500，得 x≤500/65≈7.69。件數為整數，所以最多 7 件。",
    "steps": [
      "列單價乘數量",
      "取最大可行整數"
    ],
    "optionAnalysis": [
      {
        "choice": "6 件",
        "truth": false,
        "reason": "6 可行但非最多。"
      },
      {
        "choice": "8 件",
        "truth": false,
        "reason": "8 件需 520 元。"
      },
      {
        "choice": "7 件",
        "truth": true,
        "reason": "獨立重算得到「7 件」，此選項與完整解答一致。"
      },
      {
        "choice": "9 件",
        "truth": false,
        "reason": "9 件更超支。"
      }
    ],
    "misconceptionTarget": "把 7.69 四捨五入為 8。",
    "prerequisiteCheck": "需會除法與整數上界。",
    "estimatedTimeSec": "60",
    "unitAndRoundingCheck": "金額元；65×7=455、65×8=520。",
    "ambiguityAndBoundaryAudit": "相鄰件數驗證唯一。",
    "difficultyReason": "基本預算題。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "1000cb82723d556574abb29ef89dfcf7b0878569cc7e08c8560c0c2c723c6ab4"
  },
  {
    "questionId": "u07-s011-v002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "網購運費 60 元，每本書 80 元，預算 460 元。最多可買幾本？",
    "givenConditions": "x 為非負整數。",
    "target": "固定運費加單價的預算模型",
    "choices": [
      "4 本",
      "5 本",
      "6 本",
      "3 本"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "預算扣運費 460−60=400；每本 80，400÷80=5。買 5 本剛好用完。",
      "result": "5 本",
      "answerIndexVerified": 1
    },
    "explanation": "60+80x≤460，得 80x≤400，所以 x≤5，最多 5 本。",
    "steps": [
      "扣除固定運費",
      "除以單價"
    ],
    "optionAnalysis": [
      {
        "choice": "4 本",
        "truth": false,
        "reason": "4 可行但非最多。"
      },
      {
        "choice": "5 本",
        "truth": true,
        "reason": "正確，總價 460。"
      },
      {
        "choice": "6 本",
        "truth": false,
        "reason": "6 本總價 540。"
      },
      {
        "choice": "3 本",
        "truth": false,
        "reason": "3 本非最大。"
      }
    ],
    "misconceptionTarget": "漏掉運費或把運費按本計算。",
    "prerequisiteCheck": "需會固定費模型。",
    "estimatedTimeSec": "65",
    "unitAndRoundingCheck": "金額元。",
    "ambiguityAndBoundaryAudit": "x=5 剛好等於預算且允許。",
    "difficultyReason": "基本固定費預算。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "b26a73f85d4ffaf51f751c0086339f53bad956026a4e8f8ec80a1383f1e24990"
  },
  {
    "questionId": "u07-s011-v003",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "一張原價 300 元的票打八折，折後單價是多少？",
    "givenConditions": "折扣作用於票價。",
    "target": "計算預算模型中的折扣單價",
    "choices": [
      "2400 元",
      "276 元",
      "270 元",
      "240 元"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "八折=80%=0.8；300×0.8=240。亦可算減少 20% 即 60，300−60=240。",
      "result": "240 元",
      "answerIndexVerified": 3
    },
    "explanation": "八折表示原價乘 0.8，300×0.8=240 元。",
    "steps": [
      "把八折寫成 0.8",
      "相乘"
    ],
    "optionAnalysis": [
      {
        "choice": "2400 元",
        "truth": false,
        "reason": "把 8 當整數倍。"
      },
      {
        "choice": "276 元",
        "truth": false,
        "reason": "錯當 92 折。"
      },
      {
        "choice": "270 元",
        "truth": false,
        "reason": "選項「270 元」錯當九折。，與獨立解得的「240 元」不一致。"
      },
      {
        "choice": "240 元",
        "truth": true,
        "reason": "獨立重算得到「240 元」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "把「八折」誤解為減 8% 或乘 8。",
    "prerequisiteCheck": "需會百分率小數。",
    "estimatedTimeSec": "45",
    "unitAndRoundingCheck": "單位元；結果精確。",
    "ambiguityAndBoundaryAudit": "300 的 80% 唯一為 240。",
    "difficultyReason": "折扣基礎。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "396184b4f18aab80b15f674ec6aaec3ff9d43008d47a29a948aa5fff00afed4a"
  },
  {
    "questionId": "u07-s011-v004",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "會員費 200 元，每堂課 150 元，總預算不超過 1250 元。最多上幾堂？",
    "givenConditions": "n 為非負整數。",
    "target": "固定會員費預算",
    "choices": [
      "7 堂",
      "6 堂",
      "8 堂",
      "9 堂"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "可用於課程費 1050 元；1050÷150=7，所以剛好 7 堂。",
      "result": "7 堂",
      "answerIndexVerified": 0
    },
    "explanation": "200+150n≤1250，得 150n≤1050，所以 n≤7，最多 7 堂。",
    "steps": [
      "扣除會員費",
      "求堂數上界"
    ],
    "optionAnalysis": [
      {
        "choice": "7 堂",
        "truth": true,
        "reason": "獨立重算得到「7 堂」，此選項與完整解答一致。"
      },
      {
        "choice": "6 堂",
        "truth": false,
        "reason": "6 可行但非最多。"
      },
      {
        "choice": "8 堂",
        "truth": false,
        "reason": "8 堂需 1400 元。"
      },
      {
        "choice": "9 堂",
        "truth": false,
        "reason": "選項「9 堂」更超支。，與獨立解得的「7 堂」不一致。"
      }
    ],
    "misconceptionTarget": "會員費重複乘堂數或漏算。",
    "prerequisiteCheck": "需會兩步不等式。",
    "estimatedTimeSec": "70",
    "unitAndRoundingCheck": "金額元、堂數整數。",
    "ambiguityAndBoundaryAudit": "7 堂總價 1250，8 堂超支。",
    "difficultyReason": "標準固定費。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "59cd1f85413b907c3b8e8c245c04a5cf58d6a6d17c7ce6d0c8476d216f92f447"
  },
  {
    "questionId": "u07-s011-v005",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "預算 1200 元，先購買 350 元工具，再以每包 95 元購買材料。最多買幾包？",
    "givenConditions": "x 為非負整數。",
    "target": "固定先購支出後求最大包數",
    "choices": [
      "7 包",
      "8 包",
      "9 包",
      "10 包"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "可用於材料的金額為 1200−350=850；850÷95=8.94…，完整包數最多 8。9 包時總價 1205。",
      "result": "8 包",
      "answerIndexVerified": 1
    },
    "explanation": "350+95x≤1200，得 95x≤850，x≤8.94…；材料必須整包購買，所以最多 8 包。",
    "steps": [
      "扣除工具固定費",
      "除以每包價格",
      "取最大整數並驗證下一包"
    ],
    "optionAnalysis": [
      {
        "choice": "7 包",
        "truth": false,
        "reason": "可行但不是最大。"
      },
      {
        "choice": "8 包",
        "truth": true,
        "reason": "總價 350+760=1110 元，可行。"
      },
      {
        "choice": "9 包",
        "truth": false,
        "reason": "總價 1205 元，超過預算。"
      },
      {
        "choice": "10 包",
        "truth": false,
        "reason": "總價 1300 元，更超支。"
      }
    ],
    "misconceptionTarget": "重複選項破壞唯一答案，且可能錯誤四捨五入。",
    "prerequisiteCheck": "需會除法與選項品質檢查。",
    "estimatedTimeSec": "80",
    "unitAndRoundingCheck": "金額元。",
    "ambiguityAndBoundaryAudit": "8 包可行，9 包首次超支；修正後四個選項互異且只有 8 包正確。",
    "difficultyReason": "標準預算並暴露選項重複問題。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "b3783ad58ed8e93892f9d0ea328bfc1d356a13e94f4e72c7194d8a1c812cfb76"
  },
  {
    "questionId": "u07-s011-v006",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "一件商品 450 元，折價 15% 後，用 1600 元最多買幾件？",
    "givenConditions": "x 為非負整數。",
    "target": "折扣後預算上限",
    "choices": [
      "3 件",
      "5 件",
      "2 件",
      "4 件"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "折價後支付 85%，單價 382.5。4 件 1530≤1600，5 件 1912.5>1600，故最多 4。",
      "result": "4 件",
      "answerIndexVerified": 3
    },
    "explanation": "折後單價 450×0.85=382.5 元。382.5x≤1600，x≤4.18…，最多 4 件。",
    "steps": [
      "算折後單價",
      "求最大整數件數"
    ],
    "optionAnalysis": [
      {
        "choice": "3 件",
        "truth": false,
        "reason": "3 可行但非最多。"
      },
      {
        "choice": "5 件",
        "truth": false,
        "reason": "5 件需 1912.5。"
      },
      {
        "choice": "2 件",
        "truth": false,
        "reason": "2 非最大。"
      },
      {
        "choice": "4 件",
        "truth": true,
        "reason": "獨立重算得到「4 件」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "把 15% 當成付 15%，或最大件數錯誤取整。",
    "prerequisiteCheck": "需會百分率與小數除法。",
    "estimatedTimeSec": "90",
    "unitAndRoundingCheck": "金額元；382.5×4=1530，×5=1912.5。",
    "ambiguityAndBoundaryAudit": "4 可行、5 超支。",
    "difficultyReason": "折扣與取整。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "fc06316f8f410b2c385aec1e73662cffd5818a552b0c68ceeebc80bf04e9929c"
  },
  {
    "questionId": "u07-s011-v007",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "方案收取固定費 120 元，每單位 28 元。預算 500 元且至少要買 10 單位，是否有可行方案？",
    "givenConditions": "x 為整數單位。",
    "target": "預算上限與最低需求共同限制",
    "choices": [
      "有，可買 10 至 13 單位",
      "有，只能買 10 單位",
      "無，固定費已超支",
      "無，10 單位總價超過預算"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "預算容許 x≤380/28≈13.57；需求 x≥10。整數交集為 10≤x≤13。",
      "result": "有，可買 10 至 13 單位",
      "answerIndexVerified": 0
    },
    "explanation": "120+28x≤500 得 28x≤380，x≤13.57…；再與 x≥10 取交集，整數可買 10、11、12、13。",
    "steps": [
      "求預算上界",
      "加入最低需求",
      "列整數交集"
    ],
    "optionAnalysis": [
      {
        "choice": "有，可買 10 至 13 單位",
        "truth": true,
        "reason": "獨立重算得到「有，可買 10 至 13 單位」，此選項與完整解答一致。"
      },
      {
        "choice": "有，只能買 10 單位",
        "truth": false,
        "reason": "11至13也可行。"
      },
      {
        "choice": "無，固定費已超支",
        "truth": false,
        "reason": "固定費 120 未超支。"
      },
      {
        "choice": "無，10 單位總價超過預算",
        "truth": false,
        "reason": "10 單位總價 400，未超支。"
      }
    ],
    "misconceptionTarget": "只檢查最低值或只解預算，不取交集。",
    "prerequisiteCheck": "需會且與整數範圍。",
    "estimatedTimeSec": "100",
    "unitAndRoundingCheck": "金額元；單位數整數。",
    "ambiguityAndBoundaryAudit": "10 至 13 均驗證可行，14 總價 512 超支。",
    "difficultyReason": "雙重限制預算。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "1fb06824a02f0b8a19ecdac9122762a9a44b0a687d3e8e9fbd91c6d85217a825"
  },
  {
    "questionId": "u07-s011-v008",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "商店規則：買滿 6 件才享每件 70 元，否則每件 85 元。預算 500 元，最多可買幾件？",
    "givenConditions": "x 為非負整數。",
    "target": "含門檻的分段預算",
    "choices": [
      "5 件",
      "8 件",
      "7 件",
      "6 件"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "未滿 6 件時最多 floor(500/85)=5；滿 6 後用 70 元，floor(500/70)=7 且 7≥6，故全局最多 7。",
      "result": "7 件",
      "answerIndexVerified": 2
    },
    "explanation": "若享優惠需 x≥6，優惠模型 70x≤500 得 x≤7.14，所以可買 6 或 7 件，最多 7。未優惠最多 5 件。",
    "steps": [
      "分別檢查門檻前後",
      "確認優惠段解仍滿足 x≥6"
    ],
    "optionAnalysis": [
      {
        "choice": "5 件",
        "truth": false,
        "reason": "5 件是未優惠段最大但不是全局最大。"
      },
      {
        "choice": "8 件",
        "truth": false,
        "reason": "8 件需 560。"
      },
      {
        "choice": "7 件",
        "truth": true,
        "reason": "獨立重算得到「7 件」，此選項與完整解答一致。"
      },
      {
        "choice": "6 件",
        "truth": false,
        "reason": "6 可行但非最多。"
      }
    ],
    "misconceptionTarget": "直接套低單價而不檢查滿件門檻。",
    "prerequisiteCheck": "需會分段規則與驗證。",
    "estimatedTimeSec": "115",
    "unitAndRoundingCheck": "金額元。",
    "ambiguityAndBoundaryAudit": "優惠段 x=7 可行，x=8 超支；門檻自洽。",
    "difficultyReason": "分段一致性。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "86273c807985648d3fb812293119a7ecf6938ec0a364469f726b7ef124d04202"
  },
  {
    "questionId": "u07-s011-v009",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "運費 100 元；商品每件 120 元。若購物滿 1000 元（含商品但不含運費）可免運，預算 1300 元，最多買幾件？",
    "givenConditions": "x 為非負整數。",
    "target": "條件式運費預算",
    "choices": [
      "9 件",
      "11 件",
      "8 件",
      "10 件"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "要免運至少 ceil(1000/120)=9 件。免運段預算允許 floor(1300/120)=10 件，且 10≥9；11 件超支，故最多 10。",
      "result": "10 件",
      "answerIndexVerified": 3
    },
    "explanation": "未免運時 100+120x≤1300 得 x≤10，但 x=10 商品額 1200 已滿 1000，應免運。免運模型 120x≤1300 得 x≤10.83，所以最多 10 件。",
    "steps": [
      "先辨認免運門檻按商品額",
      "檢查 10 件是否觸發免運",
      "求免運段上界"
    ],
    "optionAnalysis": [
      {
        "choice": "9 件",
        "truth": false,
        "reason": "9 可行但非最多。"
      },
      {
        "choice": "11 件",
        "truth": false,
        "reason": "11 件 1320 超支。"
      },
      {
        "choice": "8 件",
        "truth": false,
        "reason": "8 非最多。"
      },
      {
        "choice": "10 件",
        "truth": true,
        "reason": "獨立重算得到「10 件」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "忽略免運條件或把運費算入滿額門檻。",
    "prerequisiteCheck": "需會分段與門檻一致性。",
    "estimatedTimeSec": "125",
    "unitAndRoundingCheck": "金額元；商品額門檻明示不含運費。",
    "ambiguityAndBoundaryAudit": "10 件商品額 1200 免運且總價 1200；11 件 1320。",
    "difficultyReason": "多步分段預算。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "ddd97c7d89b25ea100e816e64e7ec1d021a63a81f805b0b97f8b7542d7d3915d"
  },
  {
    "questionId": "u07-s011-v010",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "校外教學每人門票 180 元，另有全團保險 1200 元。總預算 6600 元，最多可有幾名學生？",
    "givenConditions": "n 為非負整數人。",
    "target": "團體固定費預算",
    "choices": [
      "30 人",
      "32 人",
      "28 人",
      "36 人"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "扣除全團保險 1200 後，門票預算 5400；5400÷180=30。",
      "result": "30 人",
      "answerIndexVerified": 0
    },
    "explanation": "1200+180n≤6600，得 180n≤5400，所以 n≤30，最多 30 人。",
    "steps": [
      "區分全團固定費與每人費",
      "解人數上界"
    ],
    "optionAnalysis": [
      {
        "choice": "30 人",
        "truth": true,
        "reason": "獨立重算得到「30 人」，此選項與完整解答一致。"
      },
      {
        "choice": "32 人",
        "truth": false,
        "reason": "32 人總價 6960。"
      },
      {
        "choice": "28 人",
        "truth": false,
        "reason": "28 可行但非最多。"
      },
      {
        "choice": "36 人",
        "truth": false,
        "reason": "36 更超支。"
      }
    ],
    "misconceptionTarget": "把保險費乘人數或漏算。",
    "prerequisiteCheck": "需會固定費模型。",
    "estimatedTimeSec": "75",
    "unitAndRoundingCheck": "金額元、人數整數。",
    "ambiguityAndBoundaryAudit": "30 人總價剛好 6600，31 人超支。",
    "difficultyReason": "情境固定與變動費。",
    "literacyContextNecessity": "全團保險與每人門票的費用結構不可互換，情境對模型必要。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "91cf3b3103b58a5634ddf4635f30bec1f9537eaf7f09f0403cb54dc5b638c7c6"
  },
  {
    "questionId": "u07-s011-v011",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "手機方案月租 299 元，流量每 GB 35 元。預算不超過 544 元，最多可用幾個完整 GB？",
    "givenConditions": "g 為非負整數 GB。",
    "target": "月租加用量費預算",
    "choices": [
      "6 GB",
      "8 GB",
      "7 GB",
      "9 GB"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "可付流量費 544−299=245；245÷35=7，剛好 7 GB。",
      "result": "7 GB",
      "answerIndexVerified": 2
    },
    "explanation": "299+35g≤544，得 35g≤245，所以 g≤7，最多 7 GB。",
    "steps": [
      "扣除月租",
      "求完整 GB 上界"
    ],
    "optionAnalysis": [
      {
        "choice": "6 GB",
        "truth": false,
        "reason": "6 可行但非最多。"
      },
      {
        "choice": "8 GB",
        "truth": false,
        "reason": "8 GB 總費 579。"
      },
      {
        "choice": "7 GB",
        "truth": true,
        "reason": "獨立重算得到「7 GB」，此選項與完整解答一致。"
      },
      {
        "choice": "9 GB",
        "truth": false,
        "reason": "選項「9 GB」更超支。，與獨立解得的「7 GB」不一致。"
      }
    ],
    "misconceptionTarget": "把月租當每 GB 費或漏掉固定費。",
    "prerequisiteCheck": "需會固定費與整數上界。",
    "estimatedTimeSec": "75",
    "unitAndRoundingCheck": "金額元、流量 GB。",
    "ambiguityAndBoundaryAudit": "7 GB 總價 544，8 GB 超支。",
    "difficultyReason": "標準素養預算。",
    "literacyContextNecessity": "月租與每 GB 費共同決定可用量，且完整 GB 限制需要整數解。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "2c1b0629c1ed9fc32ec9cb89ba435426d6d7c61b0271f69e00c89d887a6f948d"
  },
  {
    "questionId": "u07-s011-v012",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "餐會場地費 2400 元，每桌餐費 3200 元，總預算 25000 元。至少要開 5 桌才成席，最多可開幾桌且是否符合最低桌數？",
    "givenConditions": "t 為整數桌數。",
    "target": "預算與最低需求的雙重回答",
    "choices": [
      "6 桌，不符合",
      "7 桌，符合",
      "8 桌，符合",
      "5 桌，符合"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "扣場地費剩 22600，最多 floor(22600/3200)=7 桌。因 7≥5，所以方案可成席。",
      "result": "7 桌，符合",
      "answerIndexVerified": 1
    },
    "explanation": "2400+3200t≤25000，得 3200t≤22600，t≤7.0625，所以最多 7 桌；7≥5，符合最低桌數。",
    "steps": [
      "求預算上界",
      "取整數 7",
      "檢查最低 5 桌"
    ],
    "optionAnalysis": [
      {
        "choice": "6 桌，不符合",
        "truth": false,
        "reason": "6 桌其實符合，但不是最多。"
      },
      {
        "choice": "7 桌，符合",
        "truth": true,
        "reason": "獨立重算得到「7 桌，符合」，此選項與完整解答一致。"
      },
      {
        "choice": "8 桌，符合",
        "truth": false,
        "reason": "8 桌總價 28000 超支。"
      },
      {
        "choice": "5 桌，符合",
        "truth": false,
        "reason": "5 桌可行但非最多。"
      }
    ],
    "misconceptionTarget": "只回答預算上界，未檢查最低成席條件。",
    "prerequisiteCheck": "需會固定費與且。",
    "estimatedTimeSec": "95",
    "unitAndRoundingCheck": "金額元、桌數整數。",
    "ambiguityAndBoundaryAudit": "7 桌總價 24800，可行；8 桌超支；7 也達最低 5。",
    "difficultyReason": "多重限制與完整解釋。",
    "literacyContextNecessity": "場地固定費、每桌費與最低桌數三項均影響答案與可行性。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "40a7298f621c414b3dfb861def08a60645a613357367e0718b6586c9b0eb5ec3"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u07-s011-cr001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "type": "constructed-response",
    "prompt": "社團有 2500 元。先支付場地費 460 元，每份餐點 135 元。若還要保留至少 150 元備用金，最多可買幾份餐點？請建立不等式並驗算。",
    "requiredWork": [
      "定義餐點份數為非負整數",
      "把固定費、餐費與備用金納入",
      "求最大整數",
      "驗算最大值與下一值"
    ],
    "fullCreditSolution": [
      "設可買 x 份。保留至少 150 元等同支出不超過 2500−150，故 460+135x≤2350；也可寫 460+135x+150≤2500。",
      "135x≤1890，所以 x≤14。",
      "最多買 14 份。",
      "14 份總占用 460+1890+150=2500；15 份需 2635，超出。"
    ],
    "alternativeMethod": [
      "先扣備用金與場地費：2500−150−460=1890，再算 1890÷135=14。"
    ],
    "reasoningSteps": [
      "正確處理預留金",
      "建立固定加變動費",
      "求整數上界",
      "驗證相鄰份數"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確列任一等價不等式、得到最多 14 份，並驗證 14 可行、15 超支。"
      },
      {
        "score": 2,
        "criteria": "列式與答案正確但只驗算 14；或剩餘預算法完整且清楚保留 150 元。"
      },
      {
        "score": 1,
        "criteria": "知道先扣 150 與 460 或形成 135x≤1890，但除法或最大值解讀錯。"
      },
      {
        "score": 0,
        "criteria": "忽略備用金與場地費，或將保留至少 150 寫成必須花掉超過 150。"
      }
    ],
    "partialCreditRules": "兩種列式 460+135x≤2350 與 460+135x+150≤2500 均接受；不得重複扣除備用金。",
    "followThroughPolicy": "若剩餘金額算術錯誤，但模型含三部分且後續正確取最大整數，可給程序分。",
    "unitAndNotationRules": "金額單位元、餐點單位份；x 為非負整數。",
    "answerOnlyPolicy": "只寫 14 份，最多 1 分。",
    "commonErrors": [
      "把備用金當可花預算加入右邊",
      "漏固定場地費"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "460+135x+150≤2500，最多 14 份。",
      "ambiguity": "「保留至少」明確表示備用金不可用，餐點為完整份數。",
      "scope": "國中預算不等式含保留款。",
      "reviewNote": "獨立扣除 150 與 460 得可用餐費 1890，除以 135 恰為 14；15 份多 135 元，明確超支。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "50efdcdab37bd95e6368a2743772421d1911244f3fcd427a9d483c83c0bbf054"
  },
  {
    "questionId": "u07-s011-cr002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "type": "constructed-response",
    "prompt": "方案甲收固定費 300 元，每件 22 元；方案乙收固定費 180 元，每件 28 元。預算 900 元。分別求兩方案最多可買幾件，並判斷在此預算下哪個方案買得較多。",
    "requiredWork": [
      "為兩方案各列不等式",
      "分別求最大非負整數",
      "比較最大件數",
      "檢查下一件是否超支"
    ],
    "fullCreditSolution": [
      "甲：300+22x≤900，22x≤600，x≤27.27…，最多 27 件。",
      "乙：180+28y≤900，28y≤720，y≤25.71…，最多 25 件。",
      "因此方案甲可買較多，27 件比 25 件多 2 件。",
      "甲 28 件費 916；乙 26 件費 908，均超支。"
    ],
    "alternativeMethod": [
      "可用剩餘預算法：甲 600÷22、乙 720÷28，各自向下取整，再比較。"
    ],
    "reasoningSteps": [
      "建立兩個模型",
      "保留各自固定費與單價",
      "向下取整",
      "以相鄰值驗證並比較"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "甲 27、乙 25 均正確，有列式與取整，並判斷甲多 2 件且驗證下一件。"
      },
      {
        "score": 2,
        "criteria": "兩個最大件數與比較正確，但驗算缺少；或一方案完整、另一方案僅算術小錯。"
      },
      {
        "score": 1,
        "criteria": "至少一個方案模型與最大件數正確，另一方案或比較錯誤。"
      },
      {
        "score": 0,
        "criteria": "只比較單價而未考慮固定費，兩個模型皆錯。"
      }
    ],
    "partialCreditRules": "甲乙可使用同一未知數分開計算，也可用 x、y；比較必須基於各自最大整數。",
    "followThroughPolicy": "某方案早期算術錯誤可在該方案給程序分，不影響另一方案獨立評分。",
    "unitAndNotationRules": "金額元、數量件；最大件數需為非負整數。",
    "answerOnlyPolicy": "只寫「甲」而無兩方案計算，最多 1 分。",
    "commonErrors": [
      "只看每件 22<28 就直接選甲",
      "固定費與單價相加後再乘件數"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "甲最多 27 件，乙最多 25 件，甲多 2 件。",
      "ambiguity": "兩方案費率與共同預算清楚，數量為整數。",
      "scope": "國中兩方案預算比較。",
      "reviewNote": "獨立計算甲剩 600、600/22=27.27…取 27；乙剩 720、720/28=25.71…取 25；再算下一件費用均超 900。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "955908f02aaf6219716b716011e37f5ae7be668321c30ec8beeda0f3c3e61ca7"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u07-s011-v001-semantic-r1",
    "questionId": "u07-s011-v001",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "contentSha256": "1000cb82723d556574abb29ef89dfcf7b0878569cc7e08c8560c0c2c723c6ab4",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "7 件花 455≤500；8 件花 520>500，所以最多 7 件。",
    "derivedAnswer": "7 件",
    "storedAnswer": "7 件",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「純單價預算上限」，給定條件「x 為非負整數。」足以決定唯一數學任務。",
      "boundary": "相鄰件數驗證唯一。",
      "units": "金額元；65×7=455、65×8=520。",
      "scope": "本題只使用 預算不等式應用 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "基本預算題。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：7 件花 455≤500；8 件花 520>500，所以最多 7 件。 所得「7 件」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：相鄰件數驗證唯一。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s011-v002-semantic-r1",
    "questionId": "u07-s011-v002",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "contentSha256": "b26a73f85d4ffaf51f751c0086339f53bad956026a4e8f8ec80a1383f1e24990",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "預算扣運費 460−60=400；每本 80，400÷80=5。買 5 本剛好用完。",
    "derivedAnswer": "5 本",
    "storedAnswer": "5 本",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「固定運費加單價的預算模型」，給定條件「x 為非負整數。」足以決定唯一數學任務。",
      "boundary": "x=5 剛好等於預算且允許。",
      "units": "金額元。",
      "scope": "本題只使用 預算不等式應用 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "基本固定費預算。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：預算扣運費 460−60=400；每本 80，400÷80=5。買 5 本剛好用完。 所得「5 本」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：x=5 剛好等於預算且允許。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s011-v003-semantic-r1",
    "questionId": "u07-s011-v003",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "contentSha256": "396184b4f18aab80b15f674ec6aaec3ff9d43008d47a29a948aa5fff00afed4a",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "八折=80%=0.8；300×0.8=240。亦可算減少 20% 即 60，300−60=240。",
    "derivedAnswer": "240 元",
    "storedAnswer": "240 元",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「計算預算模型中的折扣單價」，給定條件「折扣作用於票價。」足以決定唯一數學任務。",
      "boundary": "300 的 80% 唯一為 240。",
      "units": "單位元；結果精確。",
      "scope": "本題只使用 預算不等式應用 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "折扣基礎。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：八折=80%=0.8；300×0.8=240。亦可算減少 20% 即 60，300−60=240。 所得「240 元」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：300 的 80% 唯一為 240。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s011-v004-semantic-r1",
    "questionId": "u07-s011-v004",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "contentSha256": "59cd1f85413b907c3b8e8c245c04a5cf58d6a6d17c7ce6d0c8476d216f92f447",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "可用於課程費 1050 元；1050÷150=7，所以剛好 7 堂。",
    "derivedAnswer": "7 堂",
    "storedAnswer": "7 堂",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「固定會員費預算」，給定條件「n 為非負整數。」足以決定唯一數學任務。",
      "boundary": "7 堂總價 1250，8 堂超支。",
      "units": "金額元、堂數整數。",
      "scope": "本題只使用 預算不等式應用 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "標準固定費。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：可用於課程費 1050 元；1050÷150=7，所以剛好 7 堂。 所得「7 堂」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：7 堂總價 1250，8 堂超支。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s011-v005-semantic-r1",
    "questionId": "u07-s011-v005",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "contentSha256": "b3783ad58ed8e93892f9d0ea328bfc1d356a13e94f4e72c7194d8a1c812cfb76",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "可用於材料的金額為 1200−350=850；850÷95=8.94…，完整包數最多 8。9 包時總價 1205。",
    "derivedAnswer": "8 包",
    "storedAnswer": "8 包",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「固定先購支出後求最大包數」，給定條件「x 為非負整數。」足以決定唯一數學任務。",
      "boundary": "8 包可行，9 包首次超支；修正後四個選項互異且只有 8 包正確。",
      "units": "金額元。",
      "scope": "本題只使用 預算不等式應用 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "標準預算並暴露選項重複問題。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：可用於材料的金額為 1200−350=850；850÷95=8.94…，完整包數最多 8。9 包時總價 1205。 所得「8 包」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：8 包可行，9 包首次超支；修正後四個選項互異且只有 8 包正確。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s011-v006-semantic-r1",
    "questionId": "u07-s011-v006",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "contentSha256": "fc06316f8f410b2c385aec1e73662cffd5818a552b0c68ceeebc80bf04e9929c",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "折價後支付 85%，單價 382.5。4 件 1530≤1600，5 件 1912.5>1600，故最多 4。",
    "derivedAnswer": "4 件",
    "storedAnswer": "4 件",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「折扣後預算上限」，給定條件「x 為非負整數。」足以決定唯一數學任務。",
      "boundary": "4 可行、5 超支。",
      "units": "金額元；382.5×4=1530，×5=1912.5。",
      "scope": "本題只使用 預算不等式應用 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "折扣與取整。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：折價後支付 85%，單價 382.5。4 件 1530≤1600，5 件 1912.5>1600，故最多 4。 所得「4 件」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：4 可行、5 超支。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s011-v007-semantic-r1",
    "questionId": "u07-s011-v007",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "contentSha256": "1fb06824a02f0b8a19ecdac9122762a9a44b0a687d3e8e9fbd91c6d85217a825",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "預算容許 x≤380/28≈13.57；需求 x≥10。整數交集為 10≤x≤13。",
    "derivedAnswer": "有，可買 10 至 13 單位",
    "storedAnswer": "有，可買 10 至 13 單位",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「預算上限與最低需求共同限制」，給定條件「x 為整數單位。」足以決定唯一數學任務。",
      "boundary": "10 至 13 均驗證可行，14 總價 512 超支。",
      "units": "金額元；單位數整數。",
      "scope": "本題只使用 預算不等式應用 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "雙重限制預算。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：預算容許 x≤380/28≈13.57；需求 x≥10。整數交集為 10≤x≤13。 所得「有，可買 10 至 13 單位」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：10 至 13 均驗證可行，14 總價 512 超支。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s011-v008-semantic-r1",
    "questionId": "u07-s011-v008",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "contentSha256": "86273c807985648d3fb812293119a7ecf6938ec0a364469f726b7ef124d04202",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "未滿 6 件時最多 floor(500/85)=5；滿 6 後用 70 元，floor(500/70)=7 且 7≥6，故全局最多 7。",
    "derivedAnswer": "7 件",
    "storedAnswer": "7 件",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「含門檻的分段預算」，給定條件「x 為非負整數。」足以決定唯一數學任務。",
      "boundary": "優惠段 x=7 可行，x=8 超支；門檻自洽。",
      "units": "金額元。",
      "scope": "本題只使用 預算不等式應用 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "分段一致性。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：未滿 6 件時最多 floor(500/85)=5；滿 6 後用 70 元，floor(500/70)=7 且 7≥6，故全局最多 7。 所得「7 件」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：優惠段 x=7 可行，x=8 超支；門檻自洽。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s011-v009-semantic-r1",
    "questionId": "u07-s011-v009",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "contentSha256": "ddd97c7d89b25ea100e816e64e7ec1d021a63a81f805b0b97f8b7542d7d3915d",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "要免運至少 ceil(1000/120)=9 件。免運段預算允許 floor(1300/120)=10 件，且 10≥9；11 件超支，故最多 10。",
    "derivedAnswer": "10 件",
    "storedAnswer": "10 件",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「條件式運費預算」，給定條件「x 為非負整數。」足以決定唯一數學任務。",
      "boundary": "10 件商品額 1200 免運且總價 1200；11 件 1320。",
      "units": "金額元；商品額門檻明示不含運費。",
      "scope": "本題只使用 預算不等式應用 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "多步分段預算。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：要免運至少 ceil(1000/120)=9 件。免運段預算允許 floor(1300/120)=10 件，且 10≥9；11 件超支，故最多 10。 所得「10 件」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：10 件商品額 1200 免運且總價 1200；11 件 1320。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s011-v010-semantic-r1",
    "questionId": "u07-s011-v010",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "contentSha256": "91cf3b3103b58a5634ddf4635f30bec1f9537eaf7f09f0403cb54dc5b638c7c6",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "扣除全團保險 1200 後，門票預算 5400；5400÷180=30。",
    "derivedAnswer": "30 人",
    "storedAnswer": "30 人",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「團體固定費預算」，給定條件「n 為非負整數人。」足以決定唯一數學任務。",
      "boundary": "30 人總價剛好 6600，31 人超支。",
      "units": "金額元、人數整數。",
      "scope": "本題只使用 預算不等式應用 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "情境固定與變動費。",
    "literacyNecessityCheck": "全團保險與每人門票的費用結構不可互換，情境對模型必要。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：扣除全團保險 1200 後，門票預算 5400；5400÷180=30。 所得「30 人」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：30 人總價剛好 6600，31 人超支。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s011-v011-semantic-r1",
    "questionId": "u07-s011-v011",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "contentSha256": "2c1b0629c1ed9fc32ec9cb89ba435426d6d7c61b0271f69e00c89d887a6f948d",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "可付流量費 544−299=245；245÷35=7，剛好 7 GB。",
    "derivedAnswer": "7 GB",
    "storedAnswer": "7 GB",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「月租加用量費預算」，給定條件「g 為非負整數 GB。」足以決定唯一數學任務。",
      "boundary": "7 GB 總價 544，8 GB 超支。",
      "units": "金額元、流量 GB。",
      "scope": "本題只使用 預算不等式應用 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "標準素養預算。",
    "literacyNecessityCheck": "月租與每 GB 費共同決定可用量，且完整 GB 限制需要整數解。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：可付流量費 544−299=245；245÷35=7，剛好 7 GB。 所得「7 GB」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：7 GB 總價 544，8 GB 超支。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s011-v012-semantic-r1",
    "questionId": "u07-s011-v012",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "contentSha256": "40a7298f621c414b3dfb861def08a60645a613357367e0718b6586c9b0eb5ec3",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "扣場地費剩 22600，最多 floor(22600/3200)=7 桌。因 7≥5，所以方案可成席。",
    "derivedAnswer": "7 桌，符合",
    "storedAnswer": "7 桌，符合",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「預算與最低需求的雙重回答」，給定條件「t 為整數桌數。」足以決定唯一數學任務。",
      "boundary": "7 桌總價 24800，可行；8 桌超支；7 也達最低 5。",
      "units": "金額元、桌數整數。",
      "scope": "本題只使用 預算不等式應用 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "多重限制與完整解釋。",
    "literacyNecessityCheck": "場地固定費、每桌費與最低桌數三項均影響答案與可行性。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：扣場地費剩 22600，最多 floor(22600/3200)=7 桌。因 7≥5，所以方案可成席。 所得「7 桌，符合」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：7 桌總價 24800，可行；8 桌超支；7 也達最低 5。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
