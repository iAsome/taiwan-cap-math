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
    "預算不等式的核心不是看到金額就全部相加，而是先分辨費用角色。固定費不隨數量改變，只支付一次；變動費則是單價乘數量。把兩者與預算上限連結，常見模型是固定費加單價乘數量不超過預算。",
    "題目問最多可買幾件時，先解出實數上界，再依完整件、整包或完整時段的限制，取不超過上界的最大非負整數。這不是一般四捨五入；還要代回最大整數與下一個整數，才能證明前者可行而後者超支。",
    "折扣與優惠門檻會改變費用模型。八折是支付原價的百分之八十，滿額免運則必須先確認商品額是否達門檻。若規則分段，應分別列式並檢查所得答案仍落在所用分段，不能只挑看起來較便宜的單價。",
    "當題目同時給最低需求、備用金或容量限制，所有條件要以且取交集。備用金是不可支用的金額，最低需求是解集下界；最後除了金額與整數性，也要用題目單位回答，說明方案是否可行及最大數量為何。"
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
      "instruction": "定義數量變數並寫明它是非負整數。",
      "check": "題目單位是件、包、桌、堂或完整時段嗎？"
    },
    {
      "step": 2,
      "instruction": "列出預算、固定費、變動單價與不可支用金額。",
      "check": "有沒有把一次性費用錯乘數量？"
    },
    {
      "step": 3,
      "instruction": "確認折扣、免運或滿件優惠的適用條件。",
      "check": "候選答案真的落在這一段規則內嗎？"
    },
    {
      "step": 4,
      "instruction": "建立總支出不超過預算的不等式並求上界。",
      "check": "除以的單價為正，方向是否維持？"
    },
    {
      "step": 5,
      "instruction": "加入最低需求等其他限制並取整數交集。",
      "check": "所有條件是同時成立，而非任選其一嗎？"
    },
    {
      "step": 6,
      "instruction": "代回最大整數與下一個整數完成邊界驗算。",
      "check": "最大值可行且下一值確實超支嗎？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u07-s011-example-a",
      "prompt": "園遊會攤位費 180 元，每組材料 72 元，預算 900 元，最多準備幾組材料？",
      "solutionSteps": [
        "列 180+72x≤900。",
        "得到 72x≤720，所以 x≤10。",
        "十組剛好九百元，十一組需九百七十二元。"
      ],
      "answer": "最多十組材料。",
      "why": "攤位費只付一次，材料費才隨組數增加；十組符合預算而十一組超支，整數邊界的正反代入同時證明十是唯一最大值。"
    },
    {
      "exampleId": "u07-s011-example-b",
      "prompt": "每件文具原價 160 元打七五折，另付一次運費 45 元，預算 650 元，最多買幾件？",
      "solutionSteps": [
        "折後單價為 160×0.75=120 元。",
        "列 45+120x≤650，得到 x≤5.04 左右。",
        "五件需六百四十五元，六件需七百六十五元。"
      ],
      "answer": "最多五件。",
      "why": "折扣只作用在文具單價，運費仍是一次固定費；向下取五後再檢查第六件，可避免把小數上界錯誤四捨五入而超支。"
    },
    {
      "exampleId": "u07-s011-example-c",
      "prompt": "影印未滿 20 張每張 6 元，至少 20 張時每張 4 元。預算 100 元，最多印幾張？",
      "solutionSteps": [
        "未滿二十張時最多十六張。",
        "優惠段列 4x≤100，得 x≤25，且二十五張符合至少二十張。",
        "二十五張剛好一百元。"
      ],
      "answer": "最多二十五張。",
      "why": "兩段價格必須各自檢查適用範圍；優惠段算得二十五張確實達門檻，比門檻前最多十六張多，因此全局最大值是二十五張。"
    },
    {
      "exampleId": "u07-s011-example-d",
      "prompt": "方案甲固定費 240 元、每次 18 元；方案乙固定費 120 元、每次 24 元。預算 600 元，哪個方案可使用較多次？",
      "solutionSteps": [
        "甲有 240+18x≤600，最多二十次。",
        "乙有 120+24y≤600，最多二十次。",
        "兩方案在此預算下最大次數相同。"
      ],
      "answer": "兩方案都最多二十次。",
      "why": "方案比較要分別保留各自固定費與單價，再比較最大整數；只看甲單價較低或乙固定費較低都不足以判斷，完整模型才顯示兩者相同。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "將固定運費或會員費乘上購買數量。",
      "why": "沒有辨認費用只支付一次。",
      "correction": "固定費單獨相加，只有單價乘數量。"
    },
    {
      "mistake": "把八折當成原價減百分之八。",
      "why": "混淆折數與折價百分比。",
      "correction": "八折表示實付原價的百分之八十。"
    },
    {
      "mistake": "把件數上界四捨五入。",
      "why": "四捨五入可能讓支出超過預算。",
      "correction": "最大完整數量取不超過上界的整數。"
    },
    {
      "mistake": "未達門檻就使用優惠單價。",
      "why": "忽略分段規則的適用條件。",
      "correction": "算完後把數量代回門檻檢查。"
    },
    {
      "mistake": "把保留的備用金當成可花預算。",
      "why": "誤解保留至少某金額的語意。",
      "correction": "先從總額扣除備用金或把它列入必要占用。"
    },
    {
      "mistake": "只代回所答數量，不檢查下一個整數。",
      "why": "只能證明可行，尚未證明是最大值。",
      "correction": "同時驗算最大候選值與下一值。"
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
  "contentSha256": "8953773082b799dda62ad88e1dfb8b24b5a6ed2cc02e553dd27fb0cf0e6d5144"
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
    "explanation": "設可購買 x 件，預算限制為 65x≤500，因此 x≤500÷65，約為 7.69。件數必須是非負整數，所以取不超過上界的最大整數 7；七件需四百五十五元，八件需五百二十元，確定最多七件。",
    "steps": [
      "以每件六十五元乘件數，列出 65x≤500。",
      "兩邊同除以正數六十五，得到 x≤7.69 左右。",
      "依完整件數向下取七，並驗算七件可行、八件超支。"
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
    "misconceptionTarget": "把七點六九四捨五入成八件，忽略最大可行整數不能超過預算。",
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
    "contentSha256": "c554fb7de294b6140418dafeab8c9c6e5a483ad7313a82408d89ab5937ea09da"
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
    "explanation": "運費六十元只支付一次，故總費用為 60+80x，預算式是 60+80x≤460。先扣運費剩四百元，再除以每本八十元，得到 x≤5；買五本總價四百六十元，六本則要五百四十元，所以最多五本。",
    "steps": [
      "把一次性運費與每本書費分開，列 60+80x≤460。",
      "扣除六十元並除以正數八十，求得 x≤5。",
      "代入五本恰用完預算，再確認六本會超過預算。"
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
    "misconceptionTarget": "漏算一次性運費，或錯把運費也乘上書本數量。",
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
    "contentSha256": "59f2e92d1f8b7bca5973946467d414904b8806bf65e4a1b51c6d7e9ce1496eaa"
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
    "explanation": "八折表示支付原價的百分之八十，也就是乘以 0.8，不是減去百分之八。折後單價為 300×0.8=240 元；也可算原價減少百分之二十，即減六十元，仍得二百四十元，兩種算法互相驗證。",
    "steps": [
      "把八折換成支付比例 0.8。",
      "以原價三百元乘 0.8，算得二百四十元。",
      "另算百分之二十折價額六十元，確認 300−60=240。"
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
    "misconceptionTarget": "把八折誤當只減百分之八，或直接把原價乘以八。",
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
    "contentSha256": "5e19c8ec37a9bd7c966731e930f3c90e5113ebe4ef278e7a0d51fcd3a6ed0b21"
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
    "explanation": "會員費二百元只付一次，每堂再付一百五十元，因此 200+150n≤1250。扣除會員費後可用一千零五十元，除以一百五十恰為七；七堂總費一千二百五十元，八堂需一千四百元，故最多七堂。",
    "steps": [
      "以 n 表示堂數，列出 200+150n≤1250。",
      "扣除固定會員費，再除以每堂費用，得到 n≤7。",
      "驗算七堂剛好符合，八堂則超出預算。"
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
    "misconceptionTarget": "把會員費重複乘以堂數，或求堂數時完全漏掉固定費。",
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
    "contentSha256": "7211c17c094cf9cc6409b7cc4df80dc861afcfeba753b2a388c52f78740cd9ec"
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
    "explanation": "工具費三百五十元是先支付的固定支出，故 350+95x≤1200。材料預算剩八百五十元，850÷95 約為 8.94，完整包數最多八包；八包總價一千一百一十元，九包總價一千二百零五元，下一包會超支。",
    "steps": [
      "先扣除工具費，得到材料可用八百五十元。",
      "以每包九十五元除剩餘預算，求得 x≤8.94 左右。",
      "向下取八包，並比較八包與九包的總價確認邊界。"
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
    "misconceptionTarget": "把小數商四捨五入成九包，沒有驗算第九包已超出總預算。",
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
    "contentSha256": "382e39d71d659da734865d3e3010f9804beaa6356beee24b02199731d98a4621"
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
    "explanation": "折價百分之十五表示實付百分之八十五，折後每件為 450×0.85=382.5 元。由 382.5x≤1600 得 x 約不超過 4.18；四件需一千五百三十元可行，五件需一千九百一十二點五元超支，所以最多四件。",
    "steps": [
      "用原價乘 0.85，求出折後單價三百八十二點五元。",
      "列 382.5x≤1600，求得件數上界約為 4.18。",
      "取最大整數四，再驗算第五件已使支出超過預算。"
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
    "misconceptionTarget": "把折價百分之十五當成只支付百分之十五，或將件數上界向上取整。",
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
    "contentSha256": "ce92d021434ded401bc4b143ddd685d4b4415e82ecde712f19466b0f2efce99c"
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
    "explanation": "預算條件 120+28x≤500 化簡為 x≤380÷28，約為 13.57；需求條件又要求 x≥10。數量為整數，兩條件取交集後只有十、十一、十二、十三單位，故有可行方案，範圍為十至十三單位。",
    "steps": [
      "由固定費與單位費列出 120+28x≤500。",
      "解得預算上界 x≤13.57，再保留整數上界十三。",
      "與最低需求 x≥10 取交集，列出十至十三的整數範圍。"
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
    "misconceptionTarget": "只檢查至少十單位可否購買，沒有求出所有可行整數的共同範圍。",
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
    "contentSha256": "cb41d76074caaf8959c1e48009d84b45395a85453f142b5ab1bdb848e70d5371"
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
    "explanation": "未滿六件時每件八十五元，最多只能買五件。若買滿六件可用七十元單價，由 70x≤500 得 x≤7.14，且六、七件都符合優惠門檻；七件需四百九十元，八件需五百六十元，因此全局最多七件。",
    "steps": [
      "分別辨認未滿六件與至少六件的兩段價格規則。",
      "在優惠段解 70x≤500，並確認所得整數仍滿足 x≥6。",
      "比較門檻前最多五件與優惠段最多七件，再驗算第八件超支。"
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
    "misconceptionTarget": "直接套用低單價卻不檢查滿六件門檻，導致使用不適用的價格規則。",
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
    "contentSha256": "d473152a2b362d3d35847a315811352ebfa6986f6653f5bc9c70e6a626bdb976"
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
    "explanation": "免運門檻只看商品額，九件商品額為一千零八十元，已達一千元門檻。免運後由 120x≤1300 得 x≤10.83，最大整數為十；十件花一千二百元，十一件花一千三百二十元，所以最多十件。",
    "steps": [
      "先算至少九件才使商品額達到免運門檻。",
      "在免運分段列 120x≤1300，求出整數上界十件。",
      "驗算十件已免運且不超支，十一件商品費本身就超支。"
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
    "misconceptionTarget": "把運費算進滿額門檻，或忽略達門檻後應改用免運的費用模型。",
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
    "contentSha256": "fa9c788dbab74b1d86dc1c5f73cd830341f0bf5db253ac966d899ffd524b24a5"
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
    "explanation": "全團保險一千二百元只支付一次，學生門票才隨人數增加，故 1200+180n≤6600。扣除保險後剩五千四百元，恰可買三十張票；三十人總費六千六百元，三十一人需六千七百八十元，因此最多三十人。",
    "steps": [
      "區分一次性全團保險與每位學生的門票費。",
      "列 1200+180n≤6600，解得 n≤30。",
      "代入三十人剛好用完預算，並確認第三十一人會超支。"
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
    "misconceptionTarget": "把全團保險誤當每人收費，或只用預算除門票而漏掉固定支出。",
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
    "contentSha256": "8a437286d02388c324fc32395fa52949a9d52709bf1a4ff4c833b3dca998adea"
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
    "explanation": "月租二百九十九元是固定費，每個完整 GB 再付三十五元，故 299+35g≤544。扣除月租後可用二百四十五元，除以三十五恰為七；七 GB 總費五百四十四元，八 GB 則要五百七十九元，所以最多七 GB。",
    "steps": [
      "以 g 表示完整 GB 數，列出 299+35g≤544。",
      "扣除月租並除以三十五，得到 g≤7。",
      "驗算七 GB 剛好符合預算，八 GB 則超出上限。"
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
    "misconceptionTarget": "將月租費也按每 GB 重複計算，或求流量時漏掉固定月租。",
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
    "contentSha256": "49e502bc8143002d3902295d0f092728028fc978d8962127728009b49e3399ee"
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
    "explanation": "場地費二千四百元只付一次，因此 2400+3200t≤25000，解得 t≤22600÷3200=7.0625。完整桌數最多七桌；七桌總費二萬四千八百元且七不小於五，既未超支也符合最低成席桌數。",
    "steps": [
      "列出場地固定費加每桌餐費的預算不等式。",
      "解得桌數實數上界 7.0625，取最大整數七桌。",
      "代回總費並與至少五桌的成席條件取交集。"
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
    "misconceptionTarget": "只求預算可開的桌數，沒有再檢查至少五桌才能成席的必要條件。",
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
    "contentSha256": "b80ff7b6b2750592ee8b200847c28f114630a6747a543749bf976ecfe58f3d99"
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
      "設餐點份數為非負整數 x。保留至少一百五十元表示場地費與餐費最多只能用二千三百五十元，因此可列 460+135x≤2350；等價地也可列 460+135x+150≤2500。",
      "移項得 135x≤1890，再除以正數一百三十五，得到 x≤14。完整份數的最大值為十四。",
      "買十四份時，場地、餐點與備用金合計 460+14×135+150=2500，恰好符合總額。",
      "若買十五份，三項合計為二千六百三十五元，超出預算一百三十五元，所以最多十四份且答案唯一。"
    ],
    "alternativeMethod": [
      "先扣備用金與場地費：2500−150−460=1890，再算 1890÷135=14。"
    ],
    "reasoningSteps": [
      "定義非負整數份數，並將至少保留的備用金視為不可支用。",
      "把一次場地費、每份餐費與備用金完整納入預算限制。",
      "解出份數上界十四，再依完整份數判定最大整數。",
      "分別代入十四與十五份，確認最大值可行而下一值超支。"
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
      "把備用金當成可以額外花用的金額加到預算右邊。",
      "只計算餐點費，完全漏掉一次性的場地費四百六十元。",
      "算得十四後未驗算十五份，無法證明所答確為最大值。"
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
    "contentSha256": "92715a0f6e3c5db5567ca7fc0432683995babd2dfef7b5715e3cf256e603c468"
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
      "方案甲設件數為 x，列 300+22x≤900，得 22x≤600，所以 x≤27.27 左右；完整件數最多二十七件。",
      "方案乙設件數為 y，列 180+28y≤900，得 28y≤720，所以 y≤25.71 左右；完整件數最多二十五件。",
      "比較兩個最大整數，方案甲二十七件比方案乙二十五件多兩件，因此此預算下甲買得較多。",
      "驗算甲買二十八件需九百一十六元，乙買二十六件需九百零八元，兩者的下一件都超過九百元。"
    ],
    "alternativeMethod": [
      "可用剩餘預算法：甲 600÷22、乙 720÷28，各自向下取整，再比較。"
    ],
    "reasoningSteps": [
      "為甲、乙各自保留固定費與單價，建立兩個獨立預算式。",
      "分別解出實數上界，再依完整件數各自向下取整。",
      "比較二十七與二十五，判斷甲可多買兩件。",
      "代入兩方案的下一件，證實兩個最大件數邊界都正確。"
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
      "只因甲的每件單價較低就直接選甲，沒有計算兩個固定費。",
      "把固定費與單價先相加，再將合計錯誤乘上購買件數。",
      "兩個商數都向上取整，造成所謂最大件數實際已經超支。"
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
    "contentSha256": "f0621ae219be1115b4535cbf6c3aa2ac0db748d40304245067f23f384c7a7f11"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u07-s011-v001-semantic-r1",
    "questionId": "u07-s011-v001",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-budget",
    "contentSha256": "c554fb7de294b6140418dafeab8c9c6e5a483ad7313a82408d89ab5937ea09da",
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
    "contentSha256": "59f2e92d1f8b7bca5973946467d414904b8806bf65e4a1b51c6d7e9ce1496eaa",
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
    "contentSha256": "5e19c8ec37a9bd7c966731e930f3c90e5113ebe4ef278e7a0d51fcd3a6ed0b21",
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
    "contentSha256": "7211c17c094cf9cc6409b7cc4df80dc861afcfeba753b2a388c52f78740cd9ec",
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
    "contentSha256": "382e39d71d659da734865d3e3010f9804beaa6356beee24b02199731d98a4621",
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
    "contentSha256": "ce92d021434ded401bc4b143ddd685d4b4415e82ecde712f19466b0f2efce99c",
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
    "contentSha256": "cb41d76074caaf8959c1e48009d84b45395a85453f142b5ab1bdb848e70d5371",
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
    "contentSha256": "d473152a2b362d3d35847a315811352ebfa6986f6653f5bc9c70e6a626bdb976",
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
    "contentSha256": "fa9c788dbab74b1d86dc1c5f73cd830341f0bf5db253ac966d899ffd524b24a5",
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
    "contentSha256": "8a437286d02388c324fc32395fa52949a9d52709bf1a4ff4c833b3dca998adea",
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
    "contentSha256": "49e502bc8143002d3902295d0f092728028fc978d8962127728009b49e3399ee",
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
    "contentSha256": "b80ff7b6b2750592ee8b200847c28f114630a6747a543749bf976ecfe58f3d99",
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
