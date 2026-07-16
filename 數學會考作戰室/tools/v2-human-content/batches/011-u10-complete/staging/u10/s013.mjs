// Deterministically emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u10-s013-lecture-r1",
    "unitId": "u10",
    "numericUnitId": 10,
    "topicId": "u10-literacy",
    "skillId": "polynomial-literacy-context",
    "lockedTitle": "多項式情境應用",
    "title": "多項式情境應用：從量的關係建立式子",
    "audience": "臺灣國中零基礎至會考滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能由面積、周長、成本與數量變化建立多項式。",
      "能依情境進行加減、乘法或公式化簡。",
      "能解釋係數、常數與變數範圍及單位。"
    ],
    "prerequisites": [
      "formula-mixed-recognition"
    ],
    "prerequisiteBridge": "先備技能 formula-mixed-recognition 已建立下一步所需概念；本節專注於由面積、成本與變化情境建模、運算與解釋。",
    "glossary": [
      {
        "term": "建模",
        "definition": "用變數與運算表示情境中的數量關係。"
      },
      {
        "term": "固定量",
        "definition": "不隨變數改變，通常成為常數項。"
      },
      {
        "term": "變動率",
        "definition": "每增加一單位變數，總量改變的量，常成為係數。"
      },
      {
        "term": "可行範圍",
        "definition": "變數在情境中允許的數值範圍。"
      }
    ],
    "notation": [
      {
        "symbol": "C(x)=ax+b",
        "meaning": "a 可表示每單位成本，b 表示固定成本。"
      },
      {
        "symbol": "A=(x+p)(x+q)",
        "meaning": "長方形兩邊為 x+p 與 x+q 時的面積。"
      }
    ],
    "conceptNarrative": [
      "情境式不是裝飾：每一項都應對應可說明的量。",
      "面積常用乘法，合併區域常用加法，移除區域常用減法。",
      "係數與常數必須帶回單位解釋。",
      "代數上式子可對所有數計算，但長度、件數與天數通常有非負或整數限制。",
      "情境建模先辨認每個量的角色：每單位費用或每日變化要乘數量、時間，固定費只加一次；長方形面積用長乘寬，框形或鋪面用外面積減內面積，利潤用收入減成本。展開後每一項都應能帶回情境解釋，單位也要一致。最後必須檢查變數範圍：件數與天數通常是非負整數，邊長必須為正，分段收費則要遵守題給區間。"
    ],
    "formalDefinitions": [
      {
        "name": "情境多項式",
        "statement": "以多項式表示一個隨變數改變的實際量。"
      }
    ],
    "formulas": [
      {
        "formula": "總成本=固定成本+單位成本×數量",
        "conditions": [
          "數量符合情境範圍"
        ],
        "meaning": "形成一次多項式。"
      },
      {
        "formula": "長方形面積=長×寬",
        "conditions": [
          "邊長為正"
        ],
        "meaning": "乘法展開可形成二次多項式。"
      }
    ],
    "nonApplicableCases": [
      "不能忽略單位。",
      "長度變數不可讓邊長成為負數或 0。",
      "題目問增加量時不能誤答新總量。",
      "不同量如公尺與平方公尺不能直接相加。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "定義變數與單位。",
        "check": "完成此步後，確認內容仍符合「由面積、成本與變化情境建模、運算與解釋」。"
      },
      {
        "step": 2,
        "instruction": "逐句找固定量、每單位量與乘積關係。",
        "check": "完成此步後，確認內容仍符合「由面積、成本與變化情境建模、運算與解釋」。"
      },
      {
        "step": 3,
        "instruction": "建立未化簡式。",
        "check": "完成此步後，確認內容仍符合「由面積、成本與變化情境建模、運算與解釋」。"
      },
      {
        "step": 4,
        "instruction": "依需要展開與合併。",
        "check": "完成此步後，確認內容仍符合「由面積、成本與變化情境建模、運算與解釋」。"
      },
      {
        "step": 5,
        "instruction": "回答所問量並檢查單位、範圍與合理性。",
        "check": "完成此步後，確認內容仍符合「由面積、成本與變化情境建模、運算與解釋」。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "每件材料35元，固定運費80元，買x件，建立總費用。",
        "solutionSteps": [
          "每件費用乘數量得35x元。",
          "固定運費80元只加一次。",
          "總費用C(x)＝35x＋80元，且x為非負整數。"
        ],
        "answer": "C(x)＝35x＋80元。",
        "why": "35x會隨購買件數改變，80則不隨件數改變；將變動量與固定量分開，可避免把運費重複乘上x，也能由x＝0檢查常數意義。"
      },
      {
        "exampleId": "L2",
        "prompt": "長方形長x＋4公尺、寬x＋1公尺，求面積。",
        "solutionSteps": [
          "依長方形面積建立(x＋4)(x＋1)。",
          "逐項相乘得x²＋x＋4x＋4。",
          "合併為x²＋5x＋4平方公尺，且需x＞−1。"
        ],
        "answer": "x²＋5x＋4平方公尺。",
        "why": "面積由兩個長度相乘而不是相加；四個乘積分別對應分割後的區域，合併時仍保留平方公尺單位，範圍則由兩邊為正決定。"
      },
      {
        "exampleId": "L3",
        "prompt": "邊長x的正方形四周向外加寬2公尺，求新增面積。",
        "solutionSteps": [
          "左右、上下各增加2，所以新正方形邊長為x＋4。",
          "新增面積＝(x＋4)²−x²。",
          "展開相減得8x＋16平方公尺，且x＞0。"
        ],
        "answer": "8x＋16平方公尺。",
        "why": "加寬2發生在每個方向的兩側，因此整條新邊增加4而不是2；題目問新增面積，還必須用新總面積扣掉原面積，不能直接回答(x＋4)²。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把面積寫成長加寬",
        "why": "混淆周長與面積",
        "correction": "面積使用乘法。"
      },
      {
        "mistake": "固定費也乘件數",
        "why": "沒有分清固定量與變動量",
        "correction": "固定費只加一次。"
      },
      {
        "mistake": "答案不帶平方單位",
        "why": "未辨認所求為面積",
        "correction": "長度相乘得到平方單位。"
      },
      {
        "mistake": "允許邊長為負",
        "why": "只看代數未看情境",
        "correction": "列出使每條邊為正的範圍。"
      }
    ],
    "selfCheck": [
      "我是否能由面積、周長、成本與數量變化建立多項式？",
      "我是否能依情境進行加減、乘法或公式化簡？",
      "我是否能解釋係數、常數與變數範圍及單位？",
      "我是否檢查了負號、括號、指數與題目所問的量？"
    ],
    "summary": [
      "先定義變數與單位。",
      "每一項都要能回到情境解釋。",
      "面積用乘法，總量用加減。",
      "最後檢查單位與可行範圍。"
    ],
    "connections": {
      "previous": "上一技能 乘法公式辨認與應用 提供本節所需工具。",
      "next": [
        "U10 完成；後續單元可把多項式結果連結平方根與幾何距離，但本單元不提前使用未教內容。"
      ]
    },
    "figureReferences": [
      "u10-fig-garden-frame"
    ],
    "accessibility": {
      "figureAltTextsRequired": true,
      "textOnlyPath": "所有公式與圖形關係均在正文以文字完整說明。"
    },
    "practiceLinks": {
      "mcQuestionIds": [
        "u10-s013-v001",
        "u10-s013-v002",
        "u10-s013-v003",
        "u10-s013-v004",
        "u10-s013-v005",
        "u10-s013-v006",
        "u10-s013-v007",
        "u10-s013-v008",
        "u10-s013-v009",
        "u10-s013-v010",
        "u10-s013-v011",
        "u10-s013-v012"
      ],
      "constructedResponseIds": [
        "u10-s013-cr001",
        "u10-s013-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP only",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段重讀「多項式情境應用：從量的關係建立式子」：定義、3 個例題、錯誤推理與下一技能銜接均針對 polynomial-literacy-context；另逐項檢查負號、係數、指數、括號和條件。",
      "reviewVersion": "human-lecture-review-u10-r1",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "34bcb237942071baae93bc49b208f2b0e6d1cedc42d112fc88a842b4af3c6f7c"
  },
  "mcQuestions": [
    {
      "questionId": "u10-s013-v001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-literacy",
      "skillId": "polynomial-literacy-context",
      "skillSlot": "s013",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "每枝筆 12 元，買 x 枝並加 30 元運費，總費用為何？",
      "givenConditions": [],
      "target": "建立一次成本模型",
      "choices": [
        "12x+30 元",
        "42x 元",
        "12(x+30) 元",
        "30x+12 元"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "商品費 12x，加一次固定運費 30，得 12x+30。",
        "derivedChoice": "12x+30 元",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "固定量與每單位量分開建模。 每枝12元、買x枝產生隨數量變動的12x元；運費30元只收一次，是固定量。因此總費用為12x＋30元，情境中x應為非負整數。",
      "steps": [
        "商品費 12x，加一次固定運費 30，得 12x+30。",
        "把每件費用乘數量得到變動費12x。",
        "再加一次固定運費30，並以x＝0時費用30檢查模型。"
      ],
      "optionAnalysis": [
        {
          "choice": "12x+30 元",
          "truth": true,
          "reason": "固定量與每單位量分開建模。"
        },
        {
          "choice": "42x 元",
          "truth": false,
          "reason": "把固定費也乘 x。"
        },
        {
          "choice": "12(x+30) 元",
          "truth": false,
          "reason": "把 30 當枝數。"
        },
        {
          "choice": "30x+12 元",
          "truth": false,
          "reason": "交換了單價與運費角色。"
        }
      ],
      "misconceptionTarget": "固定費重複乘數量 或把固定運費也乘上枝數寫成30x，或把30誤放進每枝單價的括號。",
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "12 為元/枝，12x 與 30 都是元。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「建立一次成本模型」且四個選項以同一表示層級作答；逐項重算後只有「12x+30 元」成立。",
      "boundaryAudit": "x 應為非負整數。",
      "difficultyReason": "基礎：建立一次成本模型，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s013-v001-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "fbad26394edb222cfe9b0007cb77a09cf2e870c7a3a8cba7e862ed071b20633d"
    },
    {
      "questionId": "u10-s013-v002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-literacy",
      "skillId": "polynomial-literacy-context",
      "skillSlot": "s013",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "長方形長 x+3 公尺、寬 x 公尺，面積為何？",
      "givenConditions": [],
      "target": "建立長方形面積模型",
      "choices": [
        "2x+3 平方公尺",
        "x²+3x 平方公尺",
        "x²+3 平方公尺",
        "3x² 平方公尺"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "面積=x(x+3)=x²+3x。",
        "derivedChoice": "x²+3x 平方公尺",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "長乘寬後分配。 長方形面積是長乘寬：(x＋3)·x。分配後為x²＋3x平方公尺；2x＋3是周長片段式，不符合面積應由兩個長度相乘。兩個因數都是公尺，乘積單位也應是平方公尺。",
      "steps": [
        "面積=x(x+3)=x²+3x。",
        "依面積公式建立x(x＋3)，而不是把邊長相加。",
        "分配x到兩項得x²＋3x，並核對單位為平方公尺。"
      ],
      "optionAnalysis": [
        {
          "choice": "2x+3 平方公尺",
          "truth": false,
          "reason": "這是部分周長。"
        },
        {
          "choice": "x²+3x 平方公尺",
          "truth": true,
          "reason": "長乘寬後分配。"
        },
        {
          "choice": "x²+3 平方公尺",
          "truth": false,
          "reason": "漏乘常數項的 x。"
        },
        {
          "choice": "3x² 平方公尺",
          "truth": false,
          "reason": "把 x+3 誤成 3x。"
        }
      ],
      "misconceptionTarget": "把面積寫成加法或漏分配 或把長與寬直接相加當面積，或只讓x乘到括號中的第一項。",
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "公尺×公尺=平方公尺。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「建立長方形面積模型」且四個選項以同一表示層級作答；逐項重算後只有「x²+3x 平方公尺」成立。",
      "boundaryAudit": "x>0。",
      "difficultyReason": "基礎：建立長方形面積模型，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s013-v002-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "aece86aa0ea0d8c15da4edfd7b8035946bf50e7a4440924fb6b42a46e814ba66"
    },
    {
      "questionId": "u10-s013-v003",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-literacy",
      "skillId": "polynomial-literacy-context",
      "skillSlot": "s013",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "庫存原有 200 件，每天減少 15 件，d 天後庫存為何？",
      "givenConditions": [],
      "target": "建立線性減量模型",
      "choices": [
        "200d-15 件",
        "15d+200 件",
        "200-15 件",
        "200-15d 件"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "每天減少 15 件，d 天共減少 15d，從 200 扣除。",
        "derivedChoice": "200-15d 件",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "模型為 200-15d。 初始庫存200件是固定量，每天減少15件，d天共減少15d件，所以剩餘200−15d件。若庫存不可為負且d為整天，還需0≤d≤13。代入零天會回到原庫存二百件，能檢查常數位置。",
      "steps": [
        "每天減少 15 件，d 天共減少 15d，從 200 扣除。",
        "用每日減量15乘經過天數d得到15d。",
        "以初始200減去總減量，並用d＝0還原200檢查。"
      ],
      "optionAnalysis": [
        {
          "choice": "200d-15 件",
          "truth": false,
          "reason": "把初始量乘天數。"
        },
        {
          "choice": "15d+200 件",
          "truth": false,
          "reason": "把減少寫成增加。"
        },
        {
          "choice": "200-15 件",
          "truth": false,
          "reason": "只扣一天。"
        },
        {
          "choice": "200-15d 件",
          "truth": true,
          "reason": "模型為 200-15d。"
        }
      ],
      "misconceptionTarget": "變動率未乘時間或符號錯 或只減一次15而漏乘天數，也可能把『減少』誤寫成＋15d。",
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "15 為件/天，15d 為件。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「建立線性減量模型」且四個選項以同一表示層級作答；逐項重算後只有「200-15d 件」成立。",
      "boundaryAudit": "d 為非負整數，且模型有效範圍內 200-15d≥0。",
      "difficultyReason": "基礎：建立線性減量模型，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s013-v003-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "251439d1087e5a2ef89caf3b56f46c0afc9887e01e38de45e2ba6f5064159263"
    },
    {
      "questionId": "u10-s013-v004",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-literacy",
      "skillId": "polynomial-literacy-context",
      "skillSlot": "s013",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "正方形邊長 x+4 公尺，其面積化簡為何？",
      "givenConditions": [],
      "target": "正方形面積展開",
      "choices": [
        "x²+16",
        "x²+4x+16",
        "x²+8x+16",
        "2x²+8x+16"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "面積=(x+4)²=x²+8x+16。",
        "derivedChoice": "x²+8x+16",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "和平方的中間項是 2·x·4。 正方形面積是邊長整體平方，故為(x＋4)²。用和的平方展開得x²＋2·x·4＋4²＝x²＋8x＋16平方公尺。中間八x代表兩個寬四的長條區，不能省略。",
      "steps": [
        "面積=(x+4)²=x²+8x+16。",
        "先將邊長x＋4整體平方。",
        "計算首平方、中間兩倍乘積與尾平方，並保留面積單位。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²+16",
          "truth": false,
          "reason": "漏中間項。"
        },
        {
          "choice": "x²+4x+16",
          "truth": false,
          "reason": "中間項少一倍。"
        },
        {
          "choice": "x²+8x+16",
          "truth": true,
          "reason": "和平方的中間項是 2·x·4。"
        },
        {
          "choice": "2x²+8x+16",
          "truth": false,
          "reason": "首項重複。"
        }
      ],
      "misconceptionTarget": "面積公式漏交叉區域 或只平方x與4，漏掉代表兩個長條區的交叉項8x。",
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "公尺×公尺=平方公尺。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「正方形面積展開」且四個選項以同一表示層級作答；逐項重算後只有「x²+8x+16」成立。",
      "boundaryAudit": "x+4>0。",
      "difficultyReason": "標準：正方形面積展開，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s013-v004-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4940cfb3081443660fdfd75210c2e1b61c27f53e94ca660fb8ac7f766010fe76"
    },
    {
      "questionId": "u10-s013-v005",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-literacy",
      "skillId": "polynomial-literacy-context",
      "skillSlot": "s013",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "收入為 90x+500 元，成本為 55x+800 元。利潤為何？",
      "givenConditions": [],
      "target": "利潤模型化簡",
      "choices": [
        "35x+300 元",
        "35x-300 元",
        "145x+1300 元",
        "-35x+300 元"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "利潤=收入-成本=(90-55)x+(500-800)=35x-300。",
        "derivedChoice": "35x-300 元",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "變動部分與固定部分分別相減。 利潤＝收入−成本，所以(90x＋500)−(55x＋800)＝90x＋500−55x−800＝35x−300元。固定成本部分使常數為負。每多一單位的邊際利潤則是九十減五十五所得三十五元。",
      "steps": [
        "利潤=收入-成本=(90-55)x+(500-800)=35x-300。",
        "以收入減成本加括號建立利潤式。",
        "將成本括號內兩項都變號，再合併變動項與固定項。"
      ],
      "optionAnalysis": [
        {
          "choice": "35x+300 元",
          "truth": false,
          "reason": "固定差符號錯。"
        },
        {
          "choice": "35x-300 元",
          "truth": true,
          "reason": "變動部分與固定部分分別相減。"
        },
        {
          "choice": "145x+1300 元",
          "truth": false,
          "reason": "把收入成本相加。"
        },
        {
          "choice": "-35x+300 元",
          "truth": false,
          "reason": "相減方向顛倒。"
        }
      ],
      "misconceptionTarget": "利潤方向或固定成本符號錯 或把收入與成本相加，或減括號時只改55x符號而漏改＋800。",
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "所有項單位為元。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「利潤模型化簡」且四個選項以同一表示層級作答；逐項重算後只有「35x-300 元」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：利潤模型化簡，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s013-v005-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f424c330ffeaf0808cfa18d939f1100896e488af824ff2c25b4883913e1d4759"
    },
    {
      "questionId": "u10-s013-v006",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-literacy",
      "skillId": "polynomial-literacy-context",
      "skillSlot": "s013",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一長方形長 x+5、寬 x-2 公尺。面積為何？",
      "givenConditions": [],
      "target": "不同增減邊長面積",
      "choices": [
        "x²+7x-10",
        "x²-3x-10",
        "x²+3x+10",
        "x²+3x-10"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "(x+5)(x-2)=x²-2x+5x-10=x²+3x-10。",
        "derivedChoice": "x²+3x-10",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "兩個交叉面積合為 3x。 面積為(x＋5)(x−2)。逐項相乘得x²−2x＋5x−10＝x²＋3x−10平方公尺；實際寬x−2為正，需x＞2。四個乘積的符號可對回一正一負的兩個常數。",
      "steps": [
        "(x+5)(x-2)=x²-2x+5x-10=x²+3x-10。",
        "依長乘寬建立兩個二項式的乘積。",
        "列出四項後合併一次項，並檢查常數5×(−2)為−10。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²+7x-10",
          "truth": false,
          "reason": "中間係數相加錯。"
        },
        {
          "choice": "x²-3x-10",
          "truth": false,
          "reason": "交叉項符號顛倒。"
        },
        {
          "choice": "x²+3x+10",
          "truth": false,
          "reason": "尾項符號錯。"
        },
        {
          "choice": "x²+3x-10",
          "truth": true,
          "reason": "兩個交叉面積合為 3x。"
        }
      ],
      "misconceptionTarget": "二項式面積展開符號錯 或把−2只乘x而漏乘5，或把＋5x與−2x合併成＋7x。",
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "若邊長為公尺，面積為平方公尺。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「不同增減邊長面積」且四個選項以同一表示層級作答；逐項重算後只有「x²+3x-10」成立。",
      "boundaryAudit": "x>2。",
      "difficultyReason": "標準：不同增減邊長面積，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s013-v006-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "222c3d8b7004b1066c77bb406729f040fe08c1983754d0355ad1b47acb1e1c3d"
    },
    {
      "questionId": "u10-s013-v007",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-literacy",
      "skillId": "polynomial-literacy-context",
      "skillSlot": "s013",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "某方案總成本 C(x)=2x²+30x+500，收入 R(x)=5x²+10x。利潤 R-C 為何？",
      "givenConditions": [],
      "target": "二次利潤模型",
      "choices": [
        "3x²+40x+500",
        "7x²+40x+500",
        "3x²-20x-500",
        "-3x²+20x+500"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "R-C=(5x²+10x)-(2x²+30x+500)=3x²-20x-500。",
        "derivedChoice": "3x²-20x-500",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "成本整體相減，三類項逐一處理。 利潤R−C＝(5x²＋10x)−(2x²＋30x＋500)。將成本各項變號後合併，得3x²−20x−500；固定成本使常數為負。三種類項分別合併，不能跨次數互相抵消。",
      "steps": [
        "R-C=(5x²+10x)-(2x²+30x+500)=3x²-20x-500。",
        "以整體收入減整體成本並保留括號。",
        "分配負號後分別合併二次項、一次項與常數項。"
      ],
      "optionAnalysis": [
        {
          "choice": "3x²+40x+500",
          "truth": false,
          "reason": "把成本加上。"
        },
        {
          "choice": "7x²+40x+500",
          "truth": false,
          "reason": "所有項相加。"
        },
        {
          "choice": "3x²-20x-500",
          "truth": true,
          "reason": "成本整體相減，三類項逐一處理。"
        },
        {
          "choice": "-3x²+20x+500",
          "truth": false,
          "reason": "相減方向顛倒。"
        }
      ],
      "misconceptionTarget": "減去成本時未逐項變號 或只減二次項，卻把成本的30x與500仍以正號加入。",
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「二次利潤模型」且四個選項以同一表示層級作答；逐項重算後只有「3x²-20x-500」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：二次利潤模型，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s013-v007-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8f3b9935dac6bbec04a6e54b3d4a348b809af3bafa7619a86a5589cc9d27a730"
    },
    {
      "questionId": "u10-s013-v008",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-literacy",
      "skillId": "polynomial-literacy-context",
      "skillSlot": "s013",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "外正方形邊長 x+3，內正方形邊長 x-1。框形面積為何？",
      "givenConditions": [],
      "target": "框形面積建模",
      "choices": [
        "8x+8",
        "4x+8",
        "8x-8",
        "4x²+8"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "框形=(x+3)²-(x-1)²=(x²+6x+9)-(x²-2x+1)=8x+8。",
        "derivedChoice": "8x+8",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "外面積減內面積，二次項抵消。 框形面積＝(x＋3)²−(x−1)²。用平方差反向分解為4·(2x＋2)＝8x＋8；實際內正方形邊長為正需x＞1。結果是面積差而非邊長差，仍須保留平方單位。",
      "steps": [
        "框形=(x+3)²-(x-1)²=(x²+6x+9)-(x²-2x+1)=8x+8。",
        "建立外正方形面積減內正方形面積。",
        "以(A²−B²)＝(A−B)(A＋B)計算4(2x＋2)。"
      ],
      "optionAnalysis": [
        {
          "choice": "8x+8",
          "truth": true,
          "reason": "外面積減內面積，二次項抵消。"
        },
        {
          "choice": "4x+8",
          "truth": false,
          "reason": "中間項少一半。"
        },
        {
          "choice": "8x-8",
          "truth": false,
          "reason": "常數差符號錯。"
        },
        {
          "choice": "4x²+8",
          "truth": false,
          "reason": "未完成抵消。"
        }
      ],
      "misconceptionTarget": "兩平方相減展開錯 或相減邊長後只得4，沒有乘兩邊長的和；也可能漏掉範圍x＞1。",
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "若 x 為公尺，結果為平方公尺。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「框形面積建模」且四個選項以同一表示層級作答；逐項重算後只有「8x+8」成立。",
      "boundaryAudit": "x>1。",
      "difficultyReason": "進階：框形面積建模，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s013-v008-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4b8eda84c084384ebb1bb558986cc98251476b4874b22426dfa24378c77d84d4"
    },
    {
      "questionId": "u10-s013-v009",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-literacy",
      "skillId": "polynomial-literacy-context",
      "skillSlot": "s013",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "售價為 x+40 元，銷量為 200-2x 件。銷售額展開為何？",
      "givenConditions": [],
      "target": "售價銷量乘積",
      "choices": [
        "-2x²+120x+8000",
        "2x²+120x+8000",
        "-2x²+160x+8000",
        "-2x²+200x+80"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "(x+40)(200-2x)=200x-2x²+8000-80x=-2x²+120x+8000。",
        "derivedChoice": "-2x²+120x+8000",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "單價乘銷量後合併一次項。 銷售額＝單價×銷量＝(x＋40)(200−2x)。展開為200x−2x²＋8000−80x，合併一次項後得−2x²＋120x＋8000。負的二次項來自價格變數與減少的銷量相乘。",
      "steps": [
        "(x+40)(200-2x)=200x-2x²+8000-80x=-2x²+120x+8000。",
        "先以價格乘件數建立乘法模型。",
        "列出四個乘積並合併200x−80x＝120x。"
      ],
      "optionAnalysis": [
        {
          "choice": "-2x²+120x+8000",
          "truth": true,
          "reason": "單價乘銷量後合併一次項。"
        },
        {
          "choice": "2x²+120x+8000",
          "truth": false,
          "reason": "二次項符號錯。"
        },
        {
          "choice": "-2x²+160x+8000",
          "truth": false,
          "reason": "一次項合併錯。"
        },
        {
          "choice": "-2x²+200x+80",
          "truth": false,
          "reason": "常數與一次項皆錯。"
        }
      ],
      "misconceptionTarget": "乘法模型中交叉項合併錯 或只做首尾相乘，漏掉兩個交叉項；也可能把−2x²誤寫成正號。",
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "元/件乘件數得到元。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「售價銷量乘積」且四個選項以同一表示層級作答；逐項重算後只有「-2x²+120x+8000」成立。",
      "boundaryAudit": "銷量 200-2x≥0，且售價 x+40>0。",
      "difficultyReason": "進階：售價銷量乘積，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s013-v009-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a8bf4e8dbe7679e353f0640e4096d6847b8ceca65cd008aef5303b68cdd2482f"
    },
    {
      "questionId": "u10-s013-v010",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-literacy",
      "skillId": "polynomial-literacy-context",
      "skillSlot": "s013",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "停車場收費：前 2 小時固定 60 元，超過部分每小時 25 元。若停車 t 小時且 t>2，費用式為何？",
      "givenConditions": [],
      "target": "分段收費建模",
      "choices": [
        "60+25t",
        "25(t-2)",
        "60+25(t-2)",
        "60(t-2)+25"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "超過時間為 t-2，追加費 25(t-2)，再加固定 60。",
        "derivedChoice": "60+25(t-2)",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "分段規則中固定費與超時費角色不同。 前2小時已包含在固定60元內，t＞2時只有超過的t−2小時另收每小時25元，所以費用是60＋25(t−2)，不能再對全部t小時收費。",
      "steps": [
        "超過時間為 t-2，追加費 25(t-2)，再加固定 60。",
        "由分段規則算超時時數t−2。",
        "以25乘超時時數後加固定60，並用t＝2的邊界檢查回到60。"
      ],
      "optionAnalysis": [
        {
          "choice": "60+25t",
          "truth": false,
          "reason": "把前兩小時也再收每小時費。"
        },
        {
          "choice": "25(t-2)",
          "truth": false,
          "reason": "漏固定費。"
        },
        {
          "choice": "60+25(t-2)",
          "truth": true,
          "reason": "分段規則中固定費與超時費角色不同。"
        },
        {
          "choice": "60(t-2)+25",
          "truth": false,
          "reason": "把固定費乘超時時數。"
        }
      ],
      "misconceptionTarget": "未扣除已含在固定費內的 2 小時 或寫60＋25t，讓已含在固定費中的前2小時又被重複計費。",
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "25 為元/小時，25(t-2) 與 60 均為元。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「分段收費建模」且四個選項以同一表示層級作答；逐項重算後只有「60+25(t-2)」成立。",
      "boundaryAudit": "此式只適用 t>2；若計費以整小時進位，題目未提供則不自行加入。",
      "difficultyReason": "素養：分段收費建模，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「前 2 小時固定」與「超過部分」決定使用 t-2，情境不可刪除。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s013-v010-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7154c60c569b589ff22318c1092a947f3ef8ec546aad0b2f356ee917485ce71e"
    },
    {
      "questionId": "u10-s013-v011",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-literacy",
      "skillId": "polynomial-literacy-context",
      "skillSlot": "s013",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一條長 x 公尺、寬 6 公尺的步道，長與寬都增加 2 公尺後，新面積比原面積多多少？",
      "givenConditions": [],
      "target": "面積增加量",
      "choices": [
        "2x+12 平方公尺",
        "2x+16 平方公尺",
        "8x+16 平方公尺",
        "2x+28 平方公尺"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "新面積=(x+2)(8)=8x+16；原面積=6x；增加量=2x+16。",
        "derivedChoice": "2x+16 平方公尺",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "先求新舊面積再相減。 原面積為6x；新長x＋2、新寬8，故新面積8(x＋2)＝8x＋16。增加量是新減舊：(8x＋16)−6x＝2x＋16平方公尺。常數十六來自新增的二乘八角落帶面積。",
      "steps": [
        "新面積=(x+2)(8)=8x+16。",
        "原面積=6x。",
        "增加量=2x+16。",
        "分別建立原面積6x與新面積8(x＋2)。",
        "用新面積減原面積並合併同類項，確認問的是增加量。"
      ],
      "optionAnalysis": [
        {
          "choice": "2x+12 平方公尺",
          "truth": false,
          "reason": "漏新寬帶來的常數。"
        },
        {
          "choice": "2x+16 平方公尺",
          "truth": true,
          "reason": "2x+16 正確。"
        },
        {
          "choice": "8x+16 平方公尺",
          "truth": false,
          "reason": "把新面積當增加量。"
        },
        {
          "choice": "2x+28 平方公尺",
          "truth": false,
          "reason": "常數計算錯。"
        }
      ],
      "misconceptionTarget": "把新總面積誤答為增加面積 或把8x＋16這個新總面積直接當增加面積，沒有扣除原面積6x。",
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "公尺×公尺=平方公尺。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「面積增加量」且四個選項以同一表示層級作答；逐項重算後只有「2x+16 平方公尺」成立。",
      "boundaryAudit": "x>0。",
      "difficultyReason": "素養：面積增加量，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「比原面積多多少」要求新面積減原面積，而非只求新面積。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s013-v011-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "002a75fcb92b1cd166f6d1fbdce57bc7477055f126fa5229007ffa3cec0b5fbe"
    },
    {
      "questionId": "u10-s013-v012",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-literacy",
      "skillId": "polynomial-literacy-context",
      "skillSlot": "s013",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "圖示花園外框長 x+6、寬 x+4 公尺，中央草地長 x+2、寬 x 公尺。外框與草地之間鋪面面積為何？",
      "givenConditions": [],
      "target": "複合圖形鋪面面積",
      "choices": [
        "4x+24 平方公尺",
        "8x+16 平方公尺",
        "x²+8x+24 平方公尺",
        "8x+24 平方公尺"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "外框面積=(x+6)(x+4)=x²+10x+24；草地=x(x+2)=x²+2x；相減為 8x+24。",
        "derivedChoice": "8x+24 平方公尺",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "鋪面是外矩形扣除中央草地。 由圖得外框面積(x＋6)(x＋4)＝x²＋10x＋24，草地面積x(x＋2)＝x²＋2x。鋪面為外減內，二次項抵消後是8x＋24平方公尺。當x大於零時內外四條邊均為正，模型範圍完整。",
      "steps": [
        "外框面積=(x+6)(x+4)=x²+10x+24。",
        "草地=x(x+2)=x²+2x。",
        "相減為 8x+24。",
        "依圖分別寫出外矩形與內草地的長乘寬。",
        "展開後整體相減，並以x＞0檢查四條邊長與面積單位。"
      ],
      "optionAnalysis": [
        {
          "choice": "4x+24 平方公尺",
          "truth": false,
          "reason": "一次項少算 4x。"
        },
        {
          "choice": "8x+16 平方公尺",
          "truth": false,
          "reason": "常數或一次項差錯。"
        },
        {
          "choice": "x²+8x+24 平方公尺",
          "truth": false,
          "reason": "只算外框未扣草地。"
        },
        {
          "choice": "8x+24 平方公尺",
          "truth": true,
          "reason": "8x+24 平方公尺，正確。"
        }
      ],
      "misconceptionTarget": "只求外框面積或內外相減錯 或只算外框面積，或相減時沒有把草地的x²與2x兩項都扣除。",
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "公尺×公尺=平方公尺。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「複合圖形鋪面面積」且四個選項以同一表示層級作答；逐項重算後只有「8x+24 平方公尺」成立。",
      "boundaryAudit": "x>0。",
      "difficultyReason": "素養：複合圖形鋪面面積，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "必須讀圖辨認外框與中央草地的四個邊長，並用外減內。",
      "visualMode": "svg",
      "figureId": "u10-fig-garden-frame",
      "drawingSpecId": "u10-fig-garden-frame",
      "semanticReviewRef": "u10-s013-v012-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f330af5f03fda4e1c1e699059774bcf0d8c97446065c3449db0bd4a70cc50194"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u10-s013-cr001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-literacy",
      "skillId": "polynomial-literacy-context",
      "skillSlot": "s013",
      "difficulty": "standard",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "某活動收入為每人 120 元，另有贊助 2000 元；場地固定成本 3500 元，每人材料成本 45 元。以 n 表示人數，建立並化簡利潤式，解釋各項。",
      "requiredWork": [
        "建立總收入與總成本。",
        "收入減成本。",
        "解釋係數與常數。"
      ],
      "standardSolution": [
        "收入 R=120n+2000。",
        "成本 C=3500+45n。",
        "利潤 R-C=75n-1500。",
        "75 表示每增加 1 人，利潤增加 75 元；-1500 表示 n=0 時仍淨支出 1500 元。",
        "收入120n＋2000減成本3500＋45n，得利潤75n−1500元；75是每多一人的邊際利潤，−1500是無參加者時贊助抵掉部分固定成本後的淨支出，n為非負整數。"
      ],
      "alternativeMethods": [
        "可直接把每人淨貢獻 120-45=75，固定淨額 2000-3500=-1500。"
      ],
      "reasoningSteps": [
        "收入 R=120n+2000。",
        "成本 C=3500+45n。",
        "利潤 R-C=75n-1500。",
        "75 表示每增加 1 人，利潤增加 75 元；-1500 表示 n=0 時仍淨支出 1500 元。",
        "把每人量、固定量與單位逐項對回情境，並以n＝0檢查常數−1500的解釋。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "兩模型、利潤 75n-1500 與解釋完整。"
        },
        {
          "score": 2,
          "criteria": "式子正確但解釋不完整。"
        },
        {
          "score": 1,
          "criteria": "收入或成本其中一式正確。"
        },
        {
          "score": 0,
          "criteria": "把收入成本相加或無合理模型。"
        }
      ],
      "partialCreditRules": [
        "項次序不同等價可接受。"
      ],
      "followThroughPolicy": "若固定差符號錯但每人淨額正確，給 1 分。",
      "unitAndNotationRules": "n 為人數，應為非負整數；金額單位元。",
      "answerOnlyPolicy": "只寫 75n-1500 元，最高 2 分。",
      "commonErrorTargets": [
        "把贊助2000元也乘人數，或把每人材料45元誤當固定成本。",
        "計算利潤時用成本減收入，或只改3500符號而未同時扣除45n。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立重算 (120-45)n+(2000-3500)。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ee7cc61104cefc1950e2212020c25bd8f6e9065ec98b9b4735b4e65b8552eada"
    },
    {
      "questionId": "u10-s013-cr002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-literacy",
      "skillId": "polynomial-literacy-context",
      "skillSlot": "s013",
      "difficulty": "advanced",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "圖示外花園長 x+6、寬 x+4 公尺，內草地長 x+2、寬 x 公尺。求鋪面面積並說明 x 的合理範圍。",
      "requiredWork": [
        "外面積減內面積。",
        "展開化簡。",
        "檢查四條邊長。"
      ],
      "standardSolution": [
        "鋪面=(x+6)(x+4)-x(x+2)。",
        "=x²+10x+24-(x²+2x)=8x+24 平方公尺。",
        "實際長度要求 x>0；此時其他三邊也皆為正。",
        "鋪面面積為(x＋6)(x＋4)−x(x＋2)＝x²＋10x＋24−x²−2x＝8x＋24平方公尺。因草地寬為x且實際矩形邊長需為正，合理範圍是x＞0。"
      ],
      "alternativeMethods": [
        "可分割鋪面為上方寬 4 的長條與側邊等區域，但需避免重疊並得同式。"
      ],
      "reasoningSteps": [
        "鋪面=(x+6)(x+4)-x(x+2)。",
        "=x²+10x+24-(x²+2x)=8x+24 平方公尺。",
        "實際長度要求 x>0；此時其他三邊也皆為正。",
        "逐一檢查x、x＋2、x＋4、x＋6四條邊皆為正；其中最嚴格條件是x＞0。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "外減內、8x+24 平方公尺、x>0 全部正確。"
        },
        {
          "score": 2,
          "criteria": "面積正確但範圍或單位漏一項。"
        },
        {
          "score": 1,
          "criteria": "能建立外減內但展開錯。"
        },
        {
          "score": 0,
          "criteria": "只算外面積或以周長相減。"
        }
      ],
      "partialCreditRules": [
        "若 x=0 被列入，因內草地寬為 0，不符合實際矩形，範圍部分扣分。"
      ],
      "followThroughPolicy": "早期一個交叉項算錯，後續外減內一致可給 1 分。",
      "unitAndNotationRules": "邊長公尺，面積平方公尺；x>0。",
      "answerOnlyPolicy": "只寫 8x+24，最高 2 分。",
      "commonErrorTargets": [
        "只計算外花園面積，未扣除中央草地；或以兩個周長相減代替面積相減。",
        "展開內草地x(x＋2)時漏掉2x，或把x＝0納入實際矩形範圍。"
      ],
      "figureId": "u10-fig-garden-frame",
      "drawingSpecId": "u10-fig-garden-frame",
      "independentReview": {
        "recomputedResult": "獨立展開與圖形邊長檢查均通過。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "68b0b880ef5269a18acefcad2c900b8fc478b6a2131675babf2df97cb541f4f8"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u10-s013-v001-review",
      "questionId": "u10-s013-v001",
      "questionContentSha256": "fbad26394edb222cfe9b0007cb77a09cf2e870c7a3a8cba7e862ed071b20633d",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "商品費 12x，加一次固定運費 30，得 12x+30。",
      "derivedAnswer": "12x+30 元",
      "storedAnswer": "12x+30 元",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：12x+30 元：固定量與每單位量分開建模。；42x 元：把固定費也乘 x。；12(x+30) 元：把 30 當枝數。；30x+12 元：交換了單價與運費角色。",
        "undefinedSymbol": "題幹用語均在「多項式情境應用」講義定義。",
        "unitConflict": "12 為元/枝，12x 與 30 都是元。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "x 應為非負整數。",
        "alternateReading": "常見誤讀「固定費重複乘數量」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：建立一次成本模型，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「每枝筆 12 元，買 x 枝並加 30 元運費，總費用為何？」獨立重算：商品費 12x，加一次固定運費 30，得 12x+30。 正解「12x+30 元」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "ed5dd4ff7d328b9797c539d3e8b59691a59563f6e34c2018f8ad5196dc1706f0"
    },
    {
      "reviewId": "u10-s013-v002-review",
      "questionId": "u10-s013-v002",
      "questionContentSha256": "aece86aa0ea0d8c15da4edfd7b8035946bf50e7a4440924fb6b42a46e814ba66",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "面積=x(x+3)=x²+3x。",
      "derivedAnswer": "x²+3x 平方公尺",
      "storedAnswer": "x²+3x 平方公尺",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2x+3 平方公尺：這是部分周長。；x²+3x 平方公尺：長乘寬後分配。；x²+3 平方公尺：漏乘常數項的 x。；3x² 平方公尺：把 x+3 誤成 3x。",
        "undefinedSymbol": "題幹用語均在「多項式情境應用」講義定義。",
        "unitConflict": "公尺×公尺=平方公尺。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "x>0。",
        "alternateReading": "常見誤讀「把面積寫成加法或漏分配」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：建立長方形面積模型，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「長方形長 x+3 公尺、寬 x 公尺，面積為何？」獨立重算：面積=x(x+3)=x²+3x。 正解「x²+3x 平方公尺」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "8d435423abf6ba98db7ffea2671bf9f1e430cabf7c515717efa005dcefd5d20d"
    },
    {
      "reviewId": "u10-s013-v003-review",
      "questionId": "u10-s013-v003",
      "questionContentSha256": "251439d1087e5a2ef89caf3b56f46c0afc9887e01e38de45e2ba6f5064159263",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "每天減少 15 件，d 天共減少 15d，從 200 扣除。",
      "derivedAnswer": "200-15d 件",
      "storedAnswer": "200-15d 件",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：200d-15 件：把初始量乘天數。；15d+200 件：把減少寫成增加。；200-15 件：只扣一天。；200-15d 件：模型為 200-15d。",
        "undefinedSymbol": "題幹用語均在「多項式情境應用」講義定義。",
        "unitConflict": "15 為件/天，15d 為件。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "d 為非負整數，且模型有效範圍內 200-15d≥0。",
        "alternateReading": "常見誤讀「變動率未乘時間或符號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：建立線性減量模型，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「庫存原有 200 件，每天減少 15 件，d 天後庫存為何？」獨立重算：每天減少 15 件，d 天共減少 15d，從 200 扣除。 正解「200-15d 件」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "d024e68527c691f9be492c715e6bcb47852ec2aea6f4d216c8f08ef8c3a9c3ad"
    },
    {
      "reviewId": "u10-s013-v004-review",
      "questionId": "u10-s013-v004",
      "questionContentSha256": "4940cfb3081443660fdfd75210c2e1b61c27f53e94ca660fb8ac7f766010fe76",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "面積=(x+4)²=x²+8x+16。",
      "derivedAnswer": "x²+8x+16",
      "storedAnswer": "x²+8x+16",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²+16：漏中間項。；x²+4x+16：中間項少一倍。；x²+8x+16：和平方的中間項是 2·x·4。；2x²+8x+16：首項重複。",
        "undefinedSymbol": "題幹用語均在「多項式情境應用」講義定義。",
        "unitConflict": "公尺×公尺=平方公尺。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "x+4>0。",
        "alternateReading": "常見誤讀「面積公式漏交叉區域」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：正方形面積展開，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「正方形邊長 x+4 公尺，其面積化簡為何？」獨立重算：面積=(x+4)²=x²+8x+16。 正解「x²+8x+16」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "71a4df4b88644a17dad33b3e831d26156f7fe9de262855fe2dbe5a472870f523"
    },
    {
      "reviewId": "u10-s013-v005-review",
      "questionId": "u10-s013-v005",
      "questionContentSha256": "f424c330ffeaf0808cfa18d939f1100896e488af824ff2c25b4883913e1d4759",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "利潤=收入-成本=(90-55)x+(500-800)=35x-300。",
      "derivedAnswer": "35x-300 元",
      "storedAnswer": "35x-300 元",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：35x+300 元：固定差符號錯。；35x-300 元：變動部分與固定部分分別相減。；145x+1300 元：把收入成本相加。；-35x+300 元：相減方向顛倒。",
        "undefinedSymbol": "題幹用語均在「多項式情境應用」講義定義。",
        "unitConflict": "所有項單位為元。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「利潤方向或固定成本符號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：利潤模型化簡，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「收入為 90x+500 元，成本為 55x+800 元。利潤為何？」獨立重算：利潤=收入-成本=(90-55)x+(500-800)=35x-300。 正解「35x-300 元」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "283ec5ace481cab4f9ac3446451a3ed4644653091fba427581068efa5d810598"
    },
    {
      "reviewId": "u10-s013-v006-review",
      "questionId": "u10-s013-v006",
      "questionContentSha256": "222c3d8b7004b1066c77bb406729f040fe08c1983754d0355ad1b47acb1e1c3d",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(x+5)(x-2)=x²-2x+5x-10=x²+3x-10。",
      "derivedAnswer": "x²+3x-10",
      "storedAnswer": "x²+3x-10",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²+7x-10：中間係數相加錯。；x²-3x-10：交叉項符號顛倒。；x²+3x+10：尾項符號錯。；x²+3x-10：兩個交叉面積合為 3x。",
        "undefinedSymbol": "題幹用語均在「多項式情境應用」講義定義。",
        "unitConflict": "若邊長為公尺，面積為平方公尺。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "x>2。",
        "alternateReading": "常見誤讀「二項式面積展開符號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：不同增減邊長面積，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一長方形長 x+5、寬 x-2 公尺。面積為何？」獨立重算：(x+5)(x-2)=x²-2x+5x-10=x²+3x-10。 正解「x²+3x-10」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "32743465a85a2899c297001b697d707cca4285a8b39eebf2b9a77be80b7cf1de"
    },
    {
      "reviewId": "u10-s013-v007-review",
      "questionId": "u10-s013-v007",
      "questionContentSha256": "8f3b9935dac6bbec04a6e54b3d4a348b809af3bafa7619a86a5589cc9d27a730",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "R-C=(5x²+10x)-(2x²+30x+500)=3x²-20x-500。",
      "derivedAnswer": "3x²-20x-500",
      "storedAnswer": "3x²-20x-500",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：3x²+40x+500：把成本加上。；7x²+40x+500：所有項相加。；3x²-20x-500：成本整體相減，三類項逐一處理。；-3x²+20x+500：相減方向顛倒。",
        "undefinedSymbol": "題幹用語均在「多項式情境應用」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「減去成本時未逐項變號」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：二次利潤模型，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某方案總成本 C(x)=2x²+30x+500，收入 R(x)=5x²+10x。利潤 R-C 為何？」獨立重算：R-C=(5x²+10x)-(2x²+30x+500)=3x²-20x-500。 正解「3x²-20x-500」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "c0a06f08652783f7f5ab632a099a5bfeadcb2bad196c1acfd96e00b3dcfbc593"
    },
    {
      "reviewId": "u10-s013-v008-review",
      "questionId": "u10-s013-v008",
      "questionContentSha256": "4b8eda84c084384ebb1bb558986cc98251476b4874b22426dfa24378c77d84d4",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "框形=(x+3)²-(x-1)²=(x²+6x+9)-(x²-2x+1)=8x+8。",
      "derivedAnswer": "8x+8",
      "storedAnswer": "8x+8",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：8x+8：外面積減內面積，二次項抵消。；4x+8：中間項少一半。；8x-8：常數差符號錯。；4x²+8：未完成抵消。",
        "undefinedSymbol": "題幹用語均在「多項式情境應用」講義定義。",
        "unitConflict": "若 x 為公尺，結果為平方公尺。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "x>1。",
        "alternateReading": "常見誤讀「兩平方相減展開錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：框形面積建模，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「外正方形邊長 x+3，內正方形邊長 x-1。框形面積為何？」獨立重算：框形=(x+3)²-(x-1)²=(x²+6x+9)-(x²-2x+1)=8x+8。 正解「8x+8」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "c93731ad76b864476cc5cd9b8a25bb13f2bfb882c22f5f13ac9e31c9002d934d"
    },
    {
      "reviewId": "u10-s013-v009-review",
      "questionId": "u10-s013-v009",
      "questionContentSha256": "a8bf4e8dbe7679e353f0640e4096d6847b8ceca65cd008aef5303b68cdd2482f",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(x+40)(200-2x)=200x-2x²+8000-80x=-2x²+120x+8000。",
      "derivedAnswer": "-2x²+120x+8000",
      "storedAnswer": "-2x²+120x+8000",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-2x²+120x+8000：單價乘銷量後合併一次項。；2x²+120x+8000：二次項符號錯。；-2x²+160x+8000：一次項合併錯。；-2x²+200x+80：常數與一次項皆錯。",
        "undefinedSymbol": "題幹用語均在「多項式情境應用」講義定義。",
        "unitConflict": "元/件乘件數得到元。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "銷量 200-2x≥0，且售價 x+40>0。",
        "alternateReading": "常見誤讀「乘法模型中交叉項合併錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：售價銷量乘積，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「售價為 x+40 元，銷量為 200-2x 件。銷售額展開為何？」獨立重算：(x+40)(200-2x)=200x-2x²+8000-80x=-2x²+120x+8000。 正解「-2x²+120x+8000」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "b06fe91a9270c01512292056441725b28d69c1987a60b492e8e3d3694644a846"
    },
    {
      "reviewId": "u10-s013-v010-review",
      "questionId": "u10-s013-v010",
      "questionContentSha256": "7154c60c569b589ff22318c1092a947f3ef8ec546aad0b2f356ee917485ce71e",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "超過時間為 t-2，追加費 25(t-2)，再加固定 60。",
      "derivedAnswer": "60+25(t-2)",
      "storedAnswer": "60+25(t-2)",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：60+25t：把前兩小時也再收每小時費。；25(t-2)：漏固定費。；60+25(t-2)：分段規則中固定費與超時費角色不同。；60(t-2)+25：把固定費乘超時時數。",
        "undefinedSymbol": "題幹用語均在「多項式情境應用」講義定義。",
        "unitConflict": "25 為元/小時，25(t-2) 與 60 均為元。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "此式只適用 t>2；若計費以整小時進位，題目未提供則不自行加入。",
        "alternateReading": "常見誤讀「未扣除已含在固定費內的 2 小時」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：分段收費建模，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「前 2 小時固定」與「超過部分」決定使用 t-2，情境不可刪除。",
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「停車場收費：前 2 小時固定 60 元，超過部分每小時 25 元。若停車 t 小時且 t>2，費用式為何？」獨立重算：超過時間為 t-2，追加費 25(t-2)，再加固定 60。 正解「60+25(t-2)」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "6ece2dc2b12dc2a6bee4c1dd0d3358ab2d97ac71da87a429a2e53caa2e8fc978"
    },
    {
      "reviewId": "u10-s013-v011-review",
      "questionId": "u10-s013-v011",
      "questionContentSha256": "002a75fcb92b1cd166f6d1fbdce57bc7477055f126fa5229007ffa3cec0b5fbe",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "新面積=(x+2)(8)=8x+16；原面積=6x；增加量=2x+16。",
      "derivedAnswer": "2x+16 平方公尺",
      "storedAnswer": "2x+16 平方公尺",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2x+12 平方公尺：漏新寬帶來的常數。；2x+16 平方公尺：2x+16 正確。；8x+16 平方公尺：把新面積當增加量。；2x+28 平方公尺：常數計算錯。",
        "undefinedSymbol": "題幹用語均在「多項式情境應用」講義定義。",
        "unitConflict": "公尺×公尺=平方公尺。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "x>0。",
        "alternateReading": "常見誤讀「把新總面積誤答為增加面積」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：面積增加量，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「比原面積多多少」要求新面積減原面積，而非只求新面積。",
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一條長 x 公尺、寬 6 公尺的步道，長與寬都增加 2 公尺後，新面積比原面積多多少？」獨立重算：新面積=(x+2)(8)=8x+16；原面積=6x；增加量=2x+16。 正解「2x+16 平方公尺」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "cff349152fb6721a3e10da08d3c962d1f277979d3b1069ff519d20cfbe732f19"
    },
    {
      "reviewId": "u10-s013-v012-review",
      "questionId": "u10-s013-v012",
      "questionContentSha256": "f330af5f03fda4e1c1e699059774bcf0d8c97446065c3449db0bd4a70cc50194",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "外框面積=(x+6)(x+4)=x²+10x+24；草地=x(x+2)=x²+2x；相減為 8x+24。",
      "derivedAnswer": "8x+24 平方公尺",
      "storedAnswer": "8x+24 平方公尺",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：4x+24 平方公尺：一次項少算 4x。；8x+16 平方公尺：常數或一次項差錯。；x²+8x+24 平方公尺：只算外框未扣草地。；8x+24 平方公尺：8x+24 平方公尺，正確。",
        "undefinedSymbol": "題幹用語均在「多項式情境應用」講義定義。",
        "unitConflict": "公尺×公尺=平方公尺。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "x>0。",
        "alternateReading": "常見誤讀「只求外框面積或內外相減錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：複合圖形鋪面面積，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "必須讀圖辨認外框與中央草地的四個邊長，並用外減內。",
      "prerequisiteCheck": "使用先備技能：formula-mixed-recognition；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「圖示花園外框長 x+6、寬 x+4 公尺，中央草地長 x+2、寬 x 公尺。外框與草地之間鋪面面積為何？」獨立重算：外框面積=(x+6)(x+4)=x²+10x+24；草地=x(x+2)=x²+2x；相減為 8x+24。 正解「8x+24 平方公尺」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "dd4369a1c3d5e5170954db285724dfc9081443971d4c4888b436aa38be1912a7"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u10-fig-garden-frame",
      "unitId": "u10",
      "skillId": "polynomial-literacy-context",
      "skillSlot": "s013",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "canvas": {
        "width": "460",
        "height": "330"
      },
      "viewBox": "0 0 460 330",
      "drawingSpecification": "外矩形長 x+6、寬 x+4 公尺，中央內矩形草地長 x+2、寬 x 公尺，周圍為鋪面。",
      "exactCoordinates": [
        "outer rect (60,55,340,230)",
        "inner rect (120,105,220,130)"
      ],
      "visibleLineRules": "外框使用 3px 實線；內部分割或內框依圖使用 2px 實線或虛線。",
      "hiddenLineRules": "本單元平面圖無隱藏線。",
      "labelsAndPositions": [
        "外長 x+6 公尺",
        "外寬 x+4 公尺",
        "草地長 x+2 公尺",
        "草地寬 x 公尺",
        "鋪面"
      ],
      "tickMarks": "無刻度；尺寸以文字標示。",
      "units": "依圖標示公尺，或使用抽象長度單位。",
      "arrowsAndSymbols": "尺寸線端點使用簡單箭頭；未使用角度符號。",
      "toScale": false,
      "visualInferenceWarning": "圖形不按比例，內外面積只能依標示式計算。",
      "altText": "外花園是 x+6 乘 x+4 的矩形，中央草地是 x+2 乘 x 的矩形，周圍為鋪面。",
      "svgTitle": "外花園與中央草地的矩形框",
      "svgDesc": "外矩形長 x+6、寬 x+4 公尺，中央內矩形草地長 x+2、寬 x 公尺，周圍為鋪面。",
      "mobileReadabilityReview": "在 360px 寬度下主要標籤字級至少 18px，線條與文字不重疊。",
      "answerLeakageReview": "圖僅提供題幹已知尺寸或未知區域，不直接標示正確選項或完整答案。",
      "geometryTokenAssertions": [
        "SVG 含唯一 title 與 desc。",
        "viewBox 與畫布尺寸已宣告。",
        "所有文字標籤位於 viewBox 內。",
        "外框閉合，分割線端點落在外框。"
      ],
      "questionReferences": [
        "u10-s013-v012",
        "u10-s013-cr002"
      ],
      "svgPath": "figures/u10/u10-fig-garden-frame.svg",
      "contentSha256": "56dc7cccd296366a94446fda4cf0b5259918ff2ea6cc5c8e50cfb7bc7083b35f"
    }
  ]
};
