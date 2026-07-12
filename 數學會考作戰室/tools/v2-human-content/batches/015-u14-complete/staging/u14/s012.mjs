// Generated only from reviewed immutable source. Do not hand edit.
export default {
  "lecture": {
    "lectureId": "u14-s012-lecture-r1",
    "unitId": "u14",
    "numericUnitId": 14,
    "topicId": "u14-literacy",
    "skillId": "sequence-literacy",
    "lockedTitle": "數列素養題",
    "title": "數列素養題：從表格和圖形與限制中選擇正確模型",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能從多重資訊中辨認項數、項值與總和。",
      "能比較等差、等比與其他規律。",
      "能處理表格缺值、門檻與累積條件。",
      "能用完整語句說明模型選擇與答案限制。"
    ],
    "prerequisiteBridge": [
      {
        "skillId": "series-sum-word",
        "title": "級數求和應用",
        "requiredLevel": "能說明「級數求和應用」的核心定義並完成基本計算，作為本技能的直接前置。"
      }
    ],
    "glossary": [
      {
        "term": "模型",
        "definition": "用數列或級數表示真實情境的數學關係。"
      },
      {
        "term": "資料表",
        "definition": "以列或欄呈現項數與項值。"
      },
      {
        "term": "門檻",
        "definition": "首次達到、超過或低於某值的條件。"
      },
      {
        "term": "累積限制",
        "definition": "總和不得超過預算、容量或時間。"
      }
    ],
    "notation": [
      {
        "symbol": "n",
        "meaning": "期數、階段、列數或編號。"
      },
      {
        "symbol": "a_n",
        "meaning": "第n期單次量。"
      },
      {
        "symbol": "S_n",
        "meaning": "截至第n期的累積量。"
      }
    ],
    "conceptNarrative": [
      "素養題的難點通常不在公式，而在辨認資料哪一欄是位置、哪一欄是項值，以及題目問單次還是累積。",
      "表格中固定差表示等差，固定比表示等比；若兩者都不固定，需找其他結構。",
      "「第一次超過」要同時檢查前一項未超過與本項已超過。",
      "實際情境常有限制，例如列數為整數、數量不可為負、容量不可超標，最後必須驗證。"
    ],
    "formalDefinitions": [
      {
        "name": "素養建模",
        "statement": "把文字、圖表與限制轉成可計算的數列關係。"
      },
      {
        "name": "首次達標",
        "statement": "找到最小的正整數n使條件成立。"
      }
    ],
    "formulas": [
      {
        "formula": "a_n=a_1+(n-1)d",
        "conditions": [
          "固定增加或減少"
        ],
        "meaning": "等差模型。"
      },
      {
        "formula": "a_n=a_1r^{n-1}",
        "conditions": [
          "固定倍率"
        ],
        "meaning": "等比模型。"
      },
      {
        "formula": "S_n=n(a_1+a_n)/2",
        "conditions": [
          "累積等差量"
        ],
        "meaning": "等差總量模型。"
      }
    ],
    "nonApplicableCases": [
      "資料只呈現少數點時不可忽略題目說明自行延伸。",
      "問單次量不能用累積總和回答。",
      "首次達標不可只找任一達標項。",
      "等比累積若未教授公式，可逐項列出有限項相加，不做高中延伸。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "整理資訊表",
        "check": "標出位置、單次量、總量與單位。"
      },
      {
        "step": 2,
        "instruction": "檢查差、比或圖形結構",
        "check": "選擇模型。"
      },
      {
        "step": 3,
        "instruction": "翻譯關鍵詞",
        "check": "第n次、共、首次、最多。"
      },
      {
        "step": 4,
        "instruction": "計算並處理整數限制",
        "check": "必要時比較相鄰兩個n。"
      },
      {
        "step": 5,
        "instruction": "回到原情境驗證",
        "check": "說明為何其他模型不合。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "表中1、2、3日分別7、11、15件",
        "reasoning": "差為4。",
        "solutionSteps": [
          "差為4。",
          "a_n=7+4(n-1)。"
        ],
        "answer": "第20日83件"
      },
      {
        "exampleId": "L2",
        "prompt": "細胞每輪為前一輪3倍，首輪2個",
        "reasoning": "等比r=3。",
        "solutionSteps": [
          "等比r=3。",
          "a_6=2×3^5。"
        ],
        "answer": "486個"
      },
      {
        "exampleId": "L3",
        "prompt": "每排12席，下一排多4席，共8排",
        "reasoning": "等差且求總量。",
        "solutionSteps": [
          "等差且求總量。",
          "末排40席，S_8=208。"
        ],
        "answer": "208席"
      },
      {
        "exampleId": "L4",
        "prompt": "讀數30、27、24、…，首次低於10",
        "reasoning": "a_n=30-3(n-1)。",
        "solutionSteps": [
          "a_n=30-3(n-1)。",
          "第7項12，第8項9。"
        ],
        "answer": "第8次"
      }
    ],
    "difficultyConnections": {
      "basic": "能辨認定義與完成單一步驟。",
      "standard": "能在多個表示間轉換並處理兩至三步推理。",
      "advanced": "能整合位置、條件、反推或代數驗證。",
      "literacy": "能從表格、圖形或實際單位中選擇模型並檢查邊界。"
    },
    "commonMistakes": [
      {
        "mistake": "把表格列號當項值",
        "why": "位置與資料欄混淆。",
        "correction": "為欄位加上名稱與單位。"
      },
      {
        "mistake": "固定差與固定比只看一段",
        "why": "模型判斷不充分。",
        "correction": "至少核對兩段。"
      },
      {
        "mistake": "首次達標只解不等式不驗前項",
        "why": "可能不是最小n。",
        "correction": "檢查n-1與n。"
      },
      {
        "mistake": "問總量只讀最後一列",
        "why": "單項與累積混淆。",
        "correction": "看到「合計」寫S_n。"
      },
      {
        "mistake": "忽略項數整數性",
        "why": "出現半排或半天。",
        "correction": "依題意取最小或最大可行整數並驗證。"
      },
      {
        "mistake": "超出會考範圍使用等比級數公式",
        "why": "方法過度延伸。",
        "correction": "有限項直接列出或逐項相加。"
      }
    ],
    "selfCheck": [
      "表格哪一欄是n、哪一欄是a_n？",
      "題目問單次、總和還是首次達標？",
      "差或比是否對所有資料成立？",
      "整數與容量限制是否處理？",
      "答案是否附單位並回到情境？"
    ],
    "summary": [
      "素養題先整理位置、項值、總和與單位。",
      "固定差、固定比與圖形結構決定模型。",
      "首次達標要驗前一項。",
      "最後必須檢查整數性、範圍與情境合理性。"
    ],
    "connections": {
      "previous": "整合本單元所有數列與等差級數技能。",
      "next": [
        "可銜接 U15 函數，以輸入n與輸出a_n理解函數關係。"
      ]
    },
    "figureReferences": [
      "u14-fig-s012-triangular-dots"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u14-s012-v001",
        "u14-s012-v002",
        "u14-s012-v003",
        "u14-s012-v004",
        "u14-s012-v005",
        "u14-s012-v006",
        "u14-s012-v007",
        "u14-s012-v008",
        "u14-s012-v009",
        "u14-s012-v010",
        "u14-s012-v011",
        "u14-s012-v012"
      ],
      "constructedResponseIds": [
        "u14-s012-cr001",
        "u14-s012-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "capBoundary": "pass",
      "undefinedSymbolAudit": "pass",
      "futureKnowledgeLeakage": "pass",
      "examplesNotCopiedFromQuestionBank": true,
      "reviewVersion": "human-lecture-review-r4.0",
      "reviewedAt": "2026-07-12",
      "reviewNote": "逐段檢查「數列素養題」的定義、符號、適用條件與六類常見錯誤；四個例題均以不同數值與推理路徑重算，並確認未直接複製本技能題庫題幹。"
    },
    "contentSha256": "a873a8d0b91b9e586bc23535244cd0dc094c4f59443f102054bc501af2b60d87"
  },
  "mcQuestions": [
    {
      "questionId": "u14-s012-v001",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-literacy",
      "skillId": "sequence-literacy",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "資料表顯示第 1、2、3 天的完成量依序為 7、11、15 件，且每天固定增加。第 10 天完成多少件？",
      "givenConditions": [
        "日數1、2、3",
        "完成量7、11、15"
      ],
      "target": "第10天單日量",
      "choices": [
        "39",
        "40",
        "47",
        "43"
      ],
      "answerIndex": 3,
      "independentSolution": "表中相鄰差11-7=4、15-11=4，所以使用等差模型；第10天43件。",
      "mainExplanation": "依題意依序處理：由表格辨認d=4。；計算9次增加。，所以唯一正確選項是「43」。",
      "steps": [
        "由表格辨認d=4。",
        "計算9次增加。"
      ],
      "optionAnalysis": [
        {
          "choice": "39",
          "truth": false,
          "reason": "39只增加8次。"
        },
        {
          "choice": "40",
          "truth": false,
          "reason": "40把首項或公差相乘錯。"
        },
        {
          "choice": "47",
          "truth": false,
          "reason": "47增加10次。"
        },
        {
          "choice": "43",
          "truth": true,
          "reason": "公差4，a_10=7+9×4=43。"
        }
      ],
      "misconceptionTarget": "把表格第3天15件直接乘比例延伸。",
      "prerequisiteSkillIds": [
        "series-sum-word"
      ],
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "每天量為整數；只求第10天。",
      "difficultyReason": "基礎：表格資料短且固定差明顯。",
      "literacyContextNecessity": null,
      "authoringIntent": "從表格辨認固定差。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c7f55140a3b9bae5d76ecb58e5e19e3784c93b00347a8039493a4b472a97e903"
    },
    {
      "questionId": "u14-s012-v002",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-literacy",
      "skillId": "sequence-literacy",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "某細胞數第 1、2、3 輪依序為 2、6、18，且每輪按同一倍率增加。第 5 輪有多少個？",
      "givenConditions": [
        "前三輪2、6、18"
      ],
      "target": "第5輪",
      "choices": [
        "162",
        "54",
        "108",
        "486"
      ],
      "answerIndex": 0,
      "independentSolution": "6÷2=3、18÷6=3；第4輪54、第5輪162。",
      "mainExplanation": "依題意依序處理：由表格求公比3。；延伸兩輪。，所以唯一正確選項是「162」。",
      "steps": [
        "由表格求公比3。",
        "延伸兩輪。"
      ],
      "optionAnalysis": [
        {
          "choice": "162",
          "truth": true,
          "reason": "公比3，第5輪=2×3^4=162。"
        },
        {
          "choice": "54",
          "truth": false,
          "reason": "54是第4輪。"
        },
        {
          "choice": "108",
          "truth": false,
          "reason": "108不是固定3倍鏈。"
        },
        {
          "choice": "486",
          "truth": false,
          "reason": "486是第6輪。"
        }
      ],
      "misconceptionTarget": "把每輪增加4、12誤作固定差。",
      "prerequisiteSkillIds": [
        "series-sum-word"
      ],
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "前項非0；只求單輪數量。",
      "difficultyReason": "基礎：需比較相鄰比並延伸。",
      "literacyContextNecessity": null,
      "authoringIntent": "從表格辨認固定比。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3741d6087850ced4e0e77627ec5819270e82a72f8b945f6bf13bcbac7dc32f79"
    },
    {
      "questionId": "u14-s012-v003",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-literacy",
      "skillId": "sequence-literacy",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u14-fig-s012-triangular-dots",
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "點陣前三個階段的點數為 1、3、6，依序表示 1、1+2、1+2+3。第 6 階段有幾點？",
      "givenConditions": [
        "前三階段1、3、6",
        "第n階段為1加到n"
      ],
      "target": "第6階段點數",
      "choices": [
        "15",
        "18",
        "21",
        "36"
      ],
      "answerIndex": 2,
      "independentSolution": "使用三角數T_6=6×7/2=21；圖中的列數逐階增加一列。",
      "mainExplanation": "依題意依序處理：辨認累積正整數。；代入三角數公式。，所以唯一正確選項是「21」。",
      "steps": [
        "辨認累積正整數。",
        "代入三角數公式。"
      ],
      "optionAnalysis": [
        {
          "choice": "15",
          "truth": false,
          "reason": "15是第5階段。"
        },
        {
          "choice": "18",
          "truth": false,
          "reason": "18漏加部分項。"
        },
        {
          "choice": "21",
          "truth": true,
          "reason": "第6階段為1+2+3+4+5+6=21。"
        },
        {
          "choice": "36",
          "truth": false,
          "reason": "36是6²。"
        }
      ],
      "misconceptionTarget": "只看差2、3後錯當固定增加3。",
      "prerequisiteSkillIds": [
        "series-sum-word"
      ],
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "estimatedTimeSec": 110,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "圖不按比例，依可數點與明示列構造。",
      "difficultyReason": "基礎：由圖與文字辨認累積型數列。",
      "literacyContextNecessity": null,
      "authoringIntent": "圖像三角數規律。",
      "figureDrawingSpecRef": "units/u14/s012/drawing-specs.jsonl#u14-fig-s012-triangular-dots",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9f3e9a0af48120021eae6421b3f8732ddfdb072d34d5f65f477b16f0c463e14e"
    },
    {
      "questionId": "u14-s012-v004",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-literacy",
      "skillId": "sequence-literacy",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "方案甲每期數量為 10、15、20、25；方案乙為 3、6、12、24。下列敘述何者正確？",
      "givenConditions": [
        "兩組四期資料"
      ],
      "target": "判斷模型類型",
      "choices": [
        "兩者都是等差數列",
        "甲為等差數列，乙為等比數列",
        "兩者都是等比數列",
        "甲為等比數列，乙為等差數列"
      ],
      "answerIndex": 1,
      "independentSolution": "甲：15-10=5、20-15=5、25-20=5。乙：6/3=2、12/6=2、24/12=2。故甲等差、乙等比。",
      "mainExplanation": "依題意依序處理：分別檢查甲的差。；分別檢查乙的比。，所以唯一正確選項是「甲為等差數列，乙為等比數列」。",
      "steps": [
        "分別檢查甲的差。",
        "分別檢查乙的比。"
      ],
      "optionAnalysis": [
        {
          "choice": "兩者都是等差數列",
          "truth": false,
          "reason": "乙的相鄰差3、6、12不固定。"
        },
        {
          "choice": "甲為等差數列，乙為等比數列",
          "truth": true,
          "reason": "甲相鄰差固定5；乙相鄰比固定2。"
        },
        {
          "choice": "兩者都是等比數列",
          "truth": false,
          "reason": "甲的相鄰比不固定。"
        },
        {
          "choice": "甲為等比數列，乙為等差數列",
          "truth": false,
          "reason": "兩種判準完全對調。"
        }
      ],
      "misconceptionTarget": "只看兩方案都遞增就認為同類。",
      "prerequisiteSkillIds": [
        "series-sum-word"
      ],
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "所有乙方案前項非0；分類唯一。",
      "difficultyReason": "標準：需在同題中切換固定差與固定比兩個判準。",
      "literacyContextNecessity": null,
      "authoringIntent": "比較兩種模型的判準。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1a2be86292a87ab695e25a96354a7e242f1bde74810c7a02c5f0f4a0f4f83294"
    },
    {
      "questionId": "u14-s012-v005",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-literacy",
      "skillId": "sequence-literacy",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "公車座位各排數量為 12、16、20、…，共有 8 排。總座位數是多少？",
      "givenConditions": [
        "前3排12、16、20",
        "共8排"
      ],
      "target": "總座位",
      "choices": [
        "40",
        "208",
        "192",
        "224"
      ],
      "answerIndex": 1,
      "independentSolution": "固定差4，8排依序到40；平均26，總數208席。",
      "mainExplanation": "依題意依序處理：由資料辨認等差。；求末排與總和。，所以唯一正確選項是「208」。",
      "steps": [
        "由資料辨認等差。",
        "求末排與總和。"
      ],
      "optionAnalysis": [
        {
          "choice": "40",
          "truth": false,
          "reason": "40只是末排。"
        },
        {
          "choice": "208",
          "truth": true,
          "reason": "第8排40席，S=8(12+40)/2=208。"
        },
        {
          "choice": "192",
          "truth": false,
          "reason": "192末項少4。"
        },
        {
          "choice": "224",
          "truth": false,
          "reason": "224末項多4。"
        }
      ],
      "misconceptionTarget": "題目問總座位卻只讀第8排。",
      "prerequisiteSkillIds": [
        "series-sum-word"
      ],
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "8排均包含；答案208席。",
      "difficultyReason": "標準：需從省略號資料自行求末項並累積。",
      "literacyContextNecessity": null,
      "authoringIntent": "由簡短資料轉成等差級數。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e0d01092a66f832b6fd6ed251ce94c0c065882031a6cfc112032cb17895f4829"
    },
    {
      "questionId": "u14-s012-v006",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-literacy",
      "skillId": "sequence-literacy",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "感測器讀數為 30、27、24、…，每次下降 3。第一次低於 10 的是第幾次讀數？",
      "givenConditions": [
        "首讀30",
        "每次-3"
      ],
      "target": "首次低於10的讀數序號",
      "choices": [
        "7",
        "9",
        "8",
        "10"
      ],
      "answerIndex": 2,
      "independentSolution": "a_n=30-3(n-1)<10，得n>23/3，所以最小正整數n=8；驗前一項。",
      "mainExplanation": "依題意依序處理：解嚴格不等式。；檢查a_7與a_8。，所以唯一正確選項是「8」。",
      "steps": [
        "解嚴格不等式。",
        "檢查a_7與a_8。"
      ],
      "optionAnalysis": [
        {
          "choice": "7",
          "truth": false,
          "reason": "第7次仍為12。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "第9次雖低於但非第一次。"
        },
        {
          "choice": "8",
          "truth": true,
          "reason": "a_7=12不低於10，a_8=9低於10，所以第8次。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "10是門檻值而非項次。"
        }
      ],
      "misconceptionTarget": "把「低於10」當成「不高於10」，或未驗首次。",
      "prerequisiteSkillIds": [
        "series-sum-word"
      ],
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "嚴格低於；第8次值9。",
      "difficultyReason": "標準：需要整數取值與前一項驗證。",
      "literacyContextNecessity": null,
      "authoringIntent": "等差門檻與嚴格不等式。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "b5470b7e5adc352fae25737004a90f074c74d9eba1d478d856e830bc0eafe688"
    },
    {
      "questionId": "u14-s012-v007",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-literacy",
      "skillId": "sequence-literacy",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "某表格的第 n 列數值符合 n²+n。表中第 6 列的數值遺漏，應填多少？",
      "givenConditions": [
        "規則n²+n",
        "缺第6列"
      ],
      "target": "補表格數值",
      "choices": [
        "36",
        "41",
        "48",
        "42"
      ],
      "answerIndex": 3,
      "independentSolution": "依表格規則T_n=n(n+1)，第6列為6×7=42。可用前列2、6、12、20、30驗證。",
      "mainExplanation": "依題意依序處理：代入n=6。；以乘積形式驗算。，所以唯一正確選項是「42」。",
      "steps": [
        "代入n=6。",
        "以乘積形式驗算。"
      ],
      "optionAnalysis": [
        {
          "choice": "36",
          "truth": false,
          "reason": "36漏加n。"
        },
        {
          "choice": "41",
          "truth": false,
          "reason": "41少1。"
        },
        {
          "choice": "48",
          "truth": false,
          "reason": "48把第二項誤作2n。"
        },
        {
          "choice": "42",
          "truth": true,
          "reason": "6²+6=36+6=42。"
        }
      ],
      "misconceptionTarget": "只看到平方就填36。",
      "prerequisiteSkillIds": [
        "series-sum-word"
      ],
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "列號為正整數；答案42。",
      "difficultyReason": "進階：需將列號視為輸入並處理二次規律。",
      "literacyContextNecessity": null,
      "authoringIntent": "由表格欄位規則補缺值。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f486ac4e52ac5aaa3c5dbba8590d89c761f053139ecd12086751697e6bd8e21b"
    },
    {
      "questionId": "u14-s012-v008",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-literacy",
      "skillId": "sequence-literacy",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "某檔案分成 5 份，大小依序為 50、100、200、400、800 MB。五份總大小是多少？",
      "givenConditions": [
        "5份完整大小"
      ],
      "target": "總大小",
      "choices": [
        "1550",
        "800",
        "1500",
        "1600"
      ],
      "answerIndex": 0,
      "independentSolution": "雖然各項等比，但本題只需有限五項直接相加：50+100=150，+200=350，+400=750，+800=1550。",
      "mainExplanation": "依題意依序處理：確認問總大小。；逐項累加避免使用超綱等比級數公式。，所以唯一正確選項是「1550」。",
      "steps": [
        "確認問總大小。",
        "逐項累加避免使用超綱等比級數公式。"
      ],
      "optionAnalysis": [
        {
          "choice": "1550",
          "truth": true,
          "reason": "逐項相加50+100+200+400+800=1550 MB。"
        },
        {
          "choice": "800",
          "truth": false,
          "reason": "800只是第5份。"
        },
        {
          "choice": "1500",
          "truth": false,
          "reason": "1500漏掉50。"
        },
        {
          "choice": "1600",
          "truth": false,
          "reason": "1600把總和誤作下一個倍增項。"
        }
      ],
      "misconceptionTarget": "把下一項1600當成前五項和。",
      "prerequisiteSkillIds": [
        "series-sum-word"
      ],
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "限五項直接相加；MB單位一致，不使用等比級數公式。",
      "difficultyReason": "進階：需分清等比下一項與有限總和，且刻意不用高中等比級數公式。",
      "literacyContextNecessity": null,
      "authoringIntent": "有限等比資料的直接累積。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "b7b2b34b3cb1685879e51145c46d5feb0b0284bd22dc087e6a1a3303f2ad48f4"
    },
    {
      "questionId": "u14-s012-v009",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-literacy",
      "skillId": "sequence-literacy",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "一個會場每排座位形成等差數列，首排 14 席、每排多 2 席。若總座位為 420 席，則共有幾排？",
      "givenConditions": [
        "首排14",
        "d=2",
        "總420"
      ],
      "target": "求排數",
      "choices": [
        "15",
        "14",
        "16",
        "20"
      ],
      "answerIndex": 0,
      "independentSolution": "建立14+16+…的前n項和n(n+13)=420，解得n=15或-28；排數取15。代回末排42，總和15×56/2=420。",
      "mainExplanation": "依題意依序處理：建立總和方程式。；解二次式並代回。，所以唯一正確選項是「15」。",
      "steps": [
        "建立總和方程式。",
        "解二次式並代回。"
      ],
      "optionAnalysis": [
        {
          "choice": "15",
          "truth": true,
          "reason": "S_n=n[28+2(n-1)]/2=n(n+13)=420；n²+13n-420=(n-15)(n+28)=0，取15。"
        },
        {
          "choice": "14",
          "truth": false,
          "reason": "14排總數378席。"
        },
        {
          "choice": "16",
          "truth": false,
          "reason": "16排總數464席。"
        },
        {
          "choice": "20",
          "truth": false,
          "reason": "20排總數660席。"
        }
      ],
      "misconceptionTarget": "以420÷14=30直接當排數，忽略後排增加。",
      "prerequisiteSkillIds": [
        "series-sum-word"
      ],
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "排數正整數；負根排除。",
      "difficultyReason": "進階：整合級數建模、二次方程式與正整數篩選。",
      "literacyContextNecessity": null,
      "authoringIntent": "由總座位反推排數。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "772e704bcb9550193ca9f12ecac9e8ba8bf02e5fbd89da3c6003c408cde75cc8"
    },
    {
      "questionId": "u14-s012-v010",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-literacy",
      "skillId": "sequence-literacy",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "回收站 20 個區域的回收量形成等差數列，第 1 區 24 kg，每一區比前一區多 5 kg。20 區合計多少公斤？",
      "givenConditions": [
        "20區",
        "首區24kg",
        "每區+5kg"
      ],
      "target": "合計回收量",
      "choices": [
        "119",
        "1380",
        "1480",
        "1430"
      ],
      "answerIndex": 3,
      "independentSolution": "區域回收量24、29、…、119，共20區；平均71.5kg，總量1430kg。",
      "mainExplanation": "依題意依序處理：求末區。；累加20區。，所以唯一正確選項是「1430」。",
      "steps": [
        "求末區。",
        "累加20區。"
      ],
      "optionAnalysis": [
        {
          "choice": "119",
          "truth": false,
          "reason": "119只是第20區。"
        },
        {
          "choice": "1380",
          "truth": false,
          "reason": "1380末項少5。"
        },
        {
          "choice": "1480",
          "truth": false,
          "reason": "1480末項多5。"
        },
        {
          "choice": "1430",
          "truth": true,
          "reason": "第20區119kg，S=20(24+119)/2=10×143=1430kg。"
        }
      ],
      "misconceptionTarget": "因平均有0.5就錯誤捨去成71。",
      "prerequisiteSkillIds": [
        "series-sum-word"
      ],
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "不對平均71.5四捨五入；總量1430kg。",
      "difficultyReason": "素養：需保留小數平均或改用配對，不能對中間結果任意取整。",
      "literacyContextNecessity": "回收量情境提供kg單位與20區合計要求，且平均71.5仍可產生整數總量。",
      "authoringIntent": "區域資料的等差總量。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "b807ee733463af20b90f83d65ccb8ec10f5cb081f790a6e56cbf3df35cc948ce"
    },
    {
      "questionId": "u14-s012-v011",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-literacy",
      "skillId": "sequence-literacy",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "備份檔案大小依序為 3、6、12、24、48、96 MB。六個檔案合計多少 MB？",
      "givenConditions": [
        "六個完整檔案大小"
      ],
      "target": "合計容量",
      "choices": [
        "96",
        "189",
        "186",
        "192"
      ],
      "answerIndex": 1,
      "independentSolution": "有限六項逐項相加：3+6=9，+12=21，+24=45，+48=93，+96=189。",
      "mainExplanation": "依題意依序處理：辨認題目問合計。；直接加總六項。，所以唯一正確選項是「189」。",
      "steps": [
        "辨認題目問合計。",
        "直接加總六項。"
      ],
      "optionAnalysis": [
        {
          "choice": "96",
          "truth": false,
          "reason": "96只是最大檔案。"
        },
        {
          "choice": "189",
          "truth": true,
          "reason": "3+6+12+24+48+96=189 MB。"
        },
        {
          "choice": "186",
          "truth": false,
          "reason": "186漏掉第一個3。"
        },
        {
          "choice": "192",
          "truth": false,
          "reason": "192是下一個倍增數或錯誤總和。"
        }
      ],
      "misconceptionTarget": "把下一個檔案192 MB誤當前六個總和。",
      "prerequisiteSkillIds": [
        "series-sum-word"
      ],
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "僅六項直接相加；MB一致。",
      "difficultyReason": "素養：要分清單一最大檔案、下一項與所有檔案總量，並遵守不使用等比級數深題。",
      "literacyContextNecessity": "備份檔案情境提供容量合計語意，刪除會失去單項與總量區辨。",
      "authoringIntent": "有限倍增序列的總容量。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "bedddcac9964e29638bac01b15b16ee1e0b4f0d81f3d620d595f3b538ea9a6f9"
    },
    {
      "questionId": "u14-s012-v012",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-literacy",
      "skillId": "sequence-literacy",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "觀眾席首排 12 席，每後一排多 4 席。已知全部座位為 408 席，則共有幾排？",
      "givenConditions": [
        "首排12",
        "每排+4",
        "總408"
      ],
      "target": "排數",
      "choices": [
        "10",
        "11",
        "12",
        "13"
      ],
      "answerIndex": 2,
      "independentSolution": "解n²+5n-204=0=(n-12)(n+17)，排數取12。代回末排56，總和12(12+56)/2=408。",
      "mainExplanation": "依題意依序處理：建立等差總和方程式。；取正根並驗算。，所以唯一正確選項是「12」。",
      "steps": [
        "建立等差總和方程式。",
        "取正根並驗算。"
      ],
      "optionAnalysis": [
        {
          "choice": "10",
          "truth": false,
          "reason": "10排總數300席。"
        },
        {
          "choice": "11",
          "truth": false,
          "reason": "11排總數352席。"
        },
        {
          "choice": "12",
          "truth": true,
          "reason": "S_n=n[24+4(n-1)]/2=2n(n+5)=408，n(n+5)=204，n=12。"
        },
        {
          "choice": "13",
          "truth": false,
          "reason": "13排總數468席。"
        }
      ],
      "misconceptionTarget": "用408÷12=34直接當排數或平均，未建立變化模型。",
      "prerequisiteSkillIds": [
        "series-sum-word"
      ],
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "n=12為正整數；負根-17排除。",
      "difficultyReason": "素養：需將座位總量、首排與固定增量整合，並排除負根。",
      "literacyContextNecessity": "觀眾席情境提供排數必為正整數及總座位驗算的真實限制。",
      "authoringIntent": "在場館資料中由總量反推離散排數。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "fb0d3a73513f93b97acf1c957f81f0cc6b75e49bf2dd1bec6ae9f9432fa3972c"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u14-s012-cr001",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-literacy",
      "skillId": "sequence-literacy",
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "某展場的每區燈數如表：第1區18盞、第2區22盞、第3區26盞。共有12區，且維持固定增加。請求第12區燈數與12區總燈數，並說明你採用的模型。",
      "requiredWork": [
        "由表格確認固定差。",
        "求第12區單項。",
        "求12區總和並說明等差模型。"
      ],
      "fullCreditSolution": [
        "相鄰差22-18=4、26-22=4，所以使用首項18、公差4的等差模型。",
        "a_12=18+11×4=62盞。",
        "S_12=12(18+62)/2=6×80=480盞。"
      ],
      "alternativeSolutions": [
        "可配對第1與第12區、第2與第11區等，共6對，每對80盞。"
      ],
      "reasoningSteps": [
        "相鄰差22-18=4、26-22=4，所以使用首項18、公差4的等差模型。",
        "a_12=18+11×4=62盞。",
        "S_12=12(18+62)/2=6×80=480盞。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "模型判定、公差4、第12區62盞、總數480盞全部正確。"
        },
        {
          "score": 2,
          "criteria": "兩個答案正確但模型說明不足；或模型與末項正確而總和小算錯。"
        },
        {
          "score": 1,
          "criteria": "只辨認公差4或只求出62盞。"
        },
        {
          "score": 0,
          "criteria": "誤用等比模型且答案無法支持。"
        }
      ],
      "partialCreditRules": [
        "單項與總和均要求；只完成一者最高1分。"
      ],
      "followThroughPolicy": "若末項小錯但後續正確使用首尾和公式，可給2分錯誤追隨。",
      "unitAndNotationRules": "單位盞；區號為項次。",
      "answerOnlyPolicy": "只答62、480而無過程最多2分。",
      "commonErrors": [
        "只看18到22增加4就未核對第二段。",
        "把第12區62當總燈數。"
      ],
      "figureDrawingSpecRef": null,
      "independentReview": {
        "derivedResult": "第12區62盞，總480盞，模型為等差數列與等差級數。",
        "ambiguity": "兩段差皆4，資料足以依題意建模。",
        "unitBoundaryCheck": "單位盞；區號為項次。",
        "decision": "pass",
        "reviewNote": "獨立依題目條件重新推導，得到「第12區62盞，總480盞，模型為等差數列與等差級數。」。評分規準逐分對應本題必要步驟，並已檢查錯誤追隨與只寫答案的處理。"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8cd7c6ad3ecda4013166e68b3aa0ce0c1fc3247404f1c8cfddb2a904a773b6f0"
    },
    {
      "questionId": "u14-s012-cr002",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-literacy",
      "skillId": "sequence-literacy",
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一個資料備份系統依序產生 4、8、16、32、64 MB 的五個檔案。管理員說：「第五個檔案是 64 MB，所以五個檔案共 64 MB。」請判斷說法，算出正確總量，並指出錯誤概念。",
      "requiredWork": [
        "判斷管理員說法正誤。",
        "逐項求五檔總量。",
        "說明第5項與前5項和不同。"
      ],
      "fullCreditSolution": [
        "管理員說法錯誤。",
        "五個檔案總量=4+8+16+32+64=124 MB。",
        "64 MB只是第5個檔案的大小a_5，不是前5個檔案的總和。",
        "本題只加有限五項，不需要使用等比級數公式。"
      ],
      "alternativeSolutions": [
        "可逐步累加：4+8=12，+16=28，+32=60，+64=124。"
      ],
      "reasoningSteps": [
        "管理員說法錯誤。",
        "五個檔案總量=4+8+16+32+64=124 MB。",
        "64 MB只是第5個檔案的大小a_5，不是前5個檔案的總和。",
        "本題只加有限五項，不需要使用等比級數公式。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "判斷錯誤、總量124MB、清楚區分a_5與五項和。"
        },
        {
          "score": 2,
          "criteria": "總量與判斷正確，但概念說明略；或加總單一算術錯但區分清楚。"
        },
        {
          "score": 1,
          "criteria": "只說錯或只給124MB，沒有指出末項與總和。"
        },
        {
          "score": 0,
          "criteria": "接受64MB為總量。"
        }
      ],
      "partialCreditRules": [
        "不要求等比級數公式；使用直接加總即可滿分。"
      ],
      "followThroughPolicy": "若加總算術小錯但列式4+8+16+32+64正確，保留2分。",
      "unitAndNotationRules": "單位MB；五個檔案全部包含。",
      "answerOnlyPolicy": "只答124MB最多1分。",
      "commonErrors": [
        "把下一項128或第5項64當總和。",
        "誤以為等比數列最後一項代表累積。"
      ],
      "figureDrawingSpecRef": null,
      "independentReview": {
        "derivedResult": "說法錯，正確總量124MB。",
        "ambiguity": "檔案清單完整，直接加總唯一。",
        "unitBoundaryCheck": "單位MB；五個檔案全部包含。",
        "decision": "pass",
        "reviewNote": "獨立依題目條件重新推導，得到「說法錯，正確總量124MB。」。評分規準逐分對應本題必要步驟，並已檢查錯誤追隨與只寫答案的處理。"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e8100aa646f31abb3688d791d288072fd8fd351afb6d3d9db85c254d7d15027c"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u14-s012-v001",
      "unitId": "u14",
      "skillId": "sequence-literacy",
      "contentSha256": "c7f55140a3b9bae5d76ecb58e5e19e3784c93b00347a8039493a4b472a97e903",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "表中相鄰差11-7=4、15-11=4，所以使用等差模型；第10天43件。",
      "derivedAnswer": "43",
      "storedAnswer": "43",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「43」符合。其餘三項各自違反：39只增加8次。；40把首項或公差相乘錯。；47增加10次。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列素養題」講義中定義；本題目標為「第10天單日量」。",
        "unitConflict": "每天量為整數；只求第10天。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「43」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：每天量為整數；只求第10天。",
        "alternateReading": "最可能的誤讀是「把表格第3天15件直接乘比例延伸。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "基礎：表格資料短且固定差明顯。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「資料表顯示第 1、2、3 天的完成量依序為 7、11、15 件，且每天固定增加。第 10 天完成多少件？」獨立重算為：表中相鄰差11-7=4、15-11=4，所以使用等差模型；第10天43件。 四選項逐項核對後唯一正解為「43」；邊界檢查：每天量為整數；只求第10天。",
      "reviewContentSha256": "109537abcbd77bf7f878cb859942fdef814f8e6b8b8965e9a552d6bbba629b07"
    },
    {
      "questionId": "u14-s012-v002",
      "unitId": "u14",
      "skillId": "sequence-literacy",
      "contentSha256": "3741d6087850ced4e0e77627ec5819270e82a72f8b945f6bf13bcbac7dc32f79",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "6÷2=3、18÷6=3；第4輪54、第5輪162。",
      "derivedAnswer": "162",
      "storedAnswer": "162",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「162」符合。其餘三項各自違反：54是第4輪。；108不是固定3倍鏈。；486是第6輪。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列素養題」講義中定義；本題目標為「第5輪」。",
        "unitConflict": "前項非0；只求單輪數量。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「162」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：前項非0；只求單輪數量。",
        "alternateReading": "最可能的誤讀是「把每輪增加4、12誤作固定差。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "基礎：需比較相鄰比並延伸。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某細胞數第 1、2、3 輪依序為 2、6、18，且每輪按同一倍率增加。第 5 輪有多少個？」獨立重算為：6÷2=3、18÷6=3；第4輪54、第5輪162。 四選項逐項核對後唯一正解為「162」；邊界檢查：前項非0；只求單輪數量。",
      "reviewContentSha256": "ee39b64cef0e868d6d6b22c83996e33bdb87057729d6af7c2740a3a4921deb7a"
    },
    {
      "questionId": "u14-s012-v003",
      "unitId": "u14",
      "skillId": "sequence-literacy",
      "contentSha256": "9f3e9a0af48120021eae6421b3f8732ddfdb072d34d5f65f477b16f0c463e14e",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "使用三角數T_6=6×7/2=21；圖中的列數逐階增加一列。",
      "derivedAnswer": "21",
      "storedAnswer": "21",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「21」符合。其餘三項各自違反：15是第5階段。；18漏加部分項。；36是6²。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列素養題」講義中定義；本題目標為「第6階段點數」。",
        "unitConflict": "圖不按比例，依可數點與明示列構造。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「21」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：圖不按比例，依可數點與明示列構造。",
        "alternateReading": "最可能的誤讀是「只看差2、3後錯當固定增加3。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "基礎：由圖與文字辨認累積型數列。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「點陣前三個階段的點數為 1、3、6，依序表示 1、1+2、1+2+3。第 6 階段有幾點？」獨立重算為：使用三角數T_6=6×7/2=21；圖中的列數逐階增加一列。 四選項逐項核對後唯一正解為「21」；邊界檢查：圖不按比例，依可數點與明示列構造。",
      "reviewContentSha256": "35865a067d00b0de5178466cfb62c7ee71860d552355c69d3cea04c9806f25fb"
    },
    {
      "questionId": "u14-s012-v004",
      "unitId": "u14",
      "skillId": "sequence-literacy",
      "contentSha256": "1a2be86292a87ab695e25a96354a7e242f1bde74810c7a02c5f0f4a0f4f83294",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "甲：15-10=5、20-15=5、25-20=5。乙：6/3=2、12/6=2、24/12=2。故甲等差、乙等比。",
      "derivedAnswer": "甲為等差數列，乙為等比數列",
      "storedAnswer": "甲為等差數列，乙為等比數列",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「甲為等差數列，乙為等比數列」符合。其餘三項各自違反：乙的相鄰差3、6、12不固定。；甲的相鄰比不固定。；兩種判準完全對調。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列素養題」講義中定義；本題目標為「判斷模型類型」。",
        "unitConflict": "所有乙方案前項非0；分類唯一。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「甲為等差數列，乙為等比數列」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：所有乙方案前項非0；分類唯一。",
        "alternateReading": "最可能的誤讀是「只看兩方案都遞增就認為同類。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "標準：需在同題中切換固定差與固定比兩個判準。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「方案甲每期數量為 10、15、20、25；方案乙為 3、6、12、24。下列敘述何者正確？」獨立重算為：甲：15-10=5、20-15=5、25-20=5。乙：6/3=2、12/6=2、24/12=2。故甲等差、乙等比。 四選項逐項核對後唯一正解為「甲為等差數列，乙為等比數列」；邊界檢查：所有乙方案前項非0；分類唯一。",
      "reviewContentSha256": "b5b3a4a464589dd667180e2960c82db3013069cc88f88f44ac45ce3fa4dbeabb"
    },
    {
      "questionId": "u14-s012-v005",
      "unitId": "u14",
      "skillId": "sequence-literacy",
      "contentSha256": "e0d01092a66f832b6fd6ed251ce94c0c065882031a6cfc112032cb17895f4829",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "固定差4，8排依序到40；平均26，總數208席。",
      "derivedAnswer": "208",
      "storedAnswer": "208",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「208」符合。其餘三項各自違反：40只是末排。；192末項少4。；224末項多4。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列素養題」講義中定義；本題目標為「總座位」。",
        "unitConflict": "8排均包含；答案208席。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「208」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：8排均包含；答案208席。",
        "alternateReading": "最可能的誤讀是「題目問總座位卻只讀第8排。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "標準：需從省略號資料自行求末項並累積。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「公車座位各排數量為 12、16、20、…，共有 8 排。總座位數是多少？」獨立重算為：固定差4，8排依序到40；平均26，總數208席。 四選項逐項核對後唯一正解為「208」；邊界檢查：8排均包含；答案208席。",
      "reviewContentSha256": "296b9edba2e0584c2c8020ad9dcc340db07b532eb1631f9dc269ea2cc327d1ec"
    },
    {
      "questionId": "u14-s012-v006",
      "unitId": "u14",
      "skillId": "sequence-literacy",
      "contentSha256": "b5470b7e5adc352fae25737004a90f074c74d9eba1d478d856e830bc0eafe688",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "a_n=30-3(n-1)<10，得n>23/3，所以最小正整數n=8；驗前一項。",
      "derivedAnswer": "8",
      "storedAnswer": "8",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「8」符合。其餘三項各自違反：第7次仍為12。；第9次雖低於但非第一次。；10是門檻值而非項次。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列素養題」講義中定義；本題目標為「首次低於10的讀數序號」。",
        "unitConflict": "嚴格低於；第8次值9。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「8」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：嚴格低於；第8次值9。",
        "alternateReading": "最可能的誤讀是「把「低於10」當成「不高於10」，或未驗首次。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "標準：需要整數取值與前一項驗證。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「感測器讀數為 30、27、24、…，每次下降 3。第一次低於 10 的是第幾次讀數？」獨立重算為：a_n=30-3(n-1)<10，得n>23/3，所以最小正整數n=8；驗前一項。 四選項逐項核對後唯一正解為「8」；邊界檢查：嚴格低於；第8次值9。",
      "reviewContentSha256": "0e6f473ad6798016421a8ee7704a9bb89a0de6035869bab440a0afda29def6bd"
    },
    {
      "questionId": "u14-s012-v007",
      "unitId": "u14",
      "skillId": "sequence-literacy",
      "contentSha256": "f486ac4e52ac5aaa3c5dbba8590d89c761f053139ecd12086751697e6bd8e21b",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "依表格規則T_n=n(n+1)，第6列為6×7=42。可用前列2、6、12、20、30驗證。",
      "derivedAnswer": "42",
      "storedAnswer": "42",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「42」符合。其餘三項各自違反：36漏加n。；41少1。；48把第二項誤作2n。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列素養題」講義中定義；本題目標為「補表格數值」。",
        "unitConflict": "列號為正整數；答案42。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「42」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：列號為正整數；答案42。",
        "alternateReading": "最可能的誤讀是「只看到平方就填36。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：需將列號視為輸入並處理二次規律。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某表格的第 n 列數值符合 n²+n。表中第 6 列的數值遺漏，應填多少？」獨立重算為：依表格規則T_n=n(n+1)，第6列為6×7=42。可用前列2、6、12、20、30驗證。 四選項逐項核對後唯一正解為「42」；邊界檢查：列號為正整數；答案42。",
      "reviewContentSha256": "9ce90201d06d9e38c8f999137872af08469a45d589bc3429795a22e0537256de"
    },
    {
      "questionId": "u14-s012-v008",
      "unitId": "u14",
      "skillId": "sequence-literacy",
      "contentSha256": "b7b2b34b3cb1685879e51145c46d5feb0b0284bd22dc087e6a1a3303f2ad48f4",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "雖然各項等比，但本題只需有限五項直接相加：50+100=150，+200=350，+400=750，+800=1550。",
      "derivedAnswer": "1550",
      "storedAnswer": "1550",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「1550」符合。其餘三項各自違反：800只是第5份。；1500漏掉50。；1600把總和誤作下一個倍增項。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列素養題」講義中定義；本題目標為「總大小」。",
        "unitConflict": "限五項直接相加；MB單位一致，不使用等比級數公式。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「1550」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：限五項直接相加；MB單位一致，不使用等比級數公式。",
        "alternateReading": "最可能的誤讀是「把下一項1600當成前五項和。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：需分清等比下一項與有限總和，且刻意不用高中等比級數公式。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某檔案分成 5 份，大小依序為 50、100、200、400、800 MB。五份總大小是多少？」獨立重算為：雖然各項等比，但本題只需有限五項直接相加：50+100=150，+200=350，+400=750，+800=1550。 四選項逐項核對後唯一正解為「1550」；邊界檢查：限五項直接相加；MB單位一致，不使用等比級數公式。",
      "reviewContentSha256": "536e54a4b8eacfe4d59cb5502da9bc6c47dd41ab8dae698651f34fab9a848d94"
    },
    {
      "questionId": "u14-s012-v009",
      "unitId": "u14",
      "skillId": "sequence-literacy",
      "contentSha256": "772e704bcb9550193ca9f12ecac9e8ba8bf02e5fbd89da3c6003c408cde75cc8",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "建立14+16+…的前n項和n(n+13)=420，解得n=15或-28；排數取15。代回末排42，總和15×56/2=420。",
      "derivedAnswer": "15",
      "storedAnswer": "15",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「15」符合。其餘三項各自違反：14排總數378席。；16排總數464席。；20排總數660席。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列素養題」講義中定義；本題目標為「求排數」。",
        "unitConflict": "排數正整數；負根排除。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「15」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：排數正整數；負根排除。",
        "alternateReading": "最可能的誤讀是「以420÷14=30直接當排數，忽略後排增加。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：整合級數建模、二次方程式與正整數篩選。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一個會場每排座位形成等差數列，首排 14 席、每排多 2 席。若總座位為 420 席，則共有幾排？」獨立重算為：建立14+16+…的前n項和n(n+13)=420，解得n=15或-28；排數取15。代回末排42，總和15×56/2=420。 四選項逐項核對後唯一正解為「15」；邊界檢查：排數正整數；負根排除。",
      "reviewContentSha256": "1164b40f7b60098b1392868d940dba93bcbef6cb94ff496d62301051d16081c1"
    },
    {
      "questionId": "u14-s012-v010",
      "unitId": "u14",
      "skillId": "sequence-literacy",
      "contentSha256": "b807ee733463af20b90f83d65ccb8ec10f5cb081f790a6e56cbf3df35cc948ce",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "區域回收量24、29、…、119，共20區；平均71.5kg，總量1430kg。",
      "derivedAnswer": "1430",
      "storedAnswer": "1430",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「1430」符合。其餘三項各自違反：119只是第20區。；1380末項少5。；1480末項多5。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列素養題」講義中定義；本題目標為「合計回收量」。",
        "unitConflict": "不對平均71.5四捨五入；總量1430kg。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「1430」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：不對平均71.5四捨五入；總量1430kg。",
        "alternateReading": "最可能的誤讀是「因平均有0.5就錯誤捨去成71。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：需保留小數平均或改用配對，不能對中間結果任意取整。",
      "literacyContextNecessity": "回收量情境提供kg單位與20區合計要求，且平均71.5仍可產生整數總量。",
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「回收站 20 個區域的回收量形成等差數列，第 1 區 24 kg，每一區比前一區多 5 kg。20 區合計多少公斤？」獨立重算為：區域回收量24、29、…、119，共20區；平均71.5kg，總量1430kg。 四選項逐項核對後唯一正解為「1430」；邊界檢查：不對平均71.5四捨五入；總量1430kg。",
      "reviewContentSha256": "418a8603deb1e91974d0dcb843e84b508f848349da998981ea217c8c30302da7"
    },
    {
      "questionId": "u14-s012-v011",
      "unitId": "u14",
      "skillId": "sequence-literacy",
      "contentSha256": "bedddcac9964e29638bac01b15b16ee1e0b4f0d81f3d620d595f3b538ea9a6f9",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "有限六項逐項相加：3+6=9，+12=21，+24=45，+48=93，+96=189。",
      "derivedAnswer": "189",
      "storedAnswer": "189",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「189」符合。其餘三項各自違反：96只是最大檔案。；186漏掉第一個3。；192是下一個倍增數或錯誤總和。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列素養題」講義中定義；本題目標為「合計容量」。",
        "unitConflict": "僅六項直接相加；MB一致。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「189」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：僅六項直接相加；MB一致。",
        "alternateReading": "最可能的誤讀是「把下一個檔案192 MB誤當前六個總和。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：要分清單一最大檔案、下一項與所有檔案總量，並遵守不使用等比級數深題。",
      "literacyContextNecessity": "備份檔案情境提供容量合計語意，刪除會失去單項與總量區辨。",
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「備份檔案大小依序為 3、6、12、24、48、96 MB。六個檔案合計多少 MB？」獨立重算為：有限六項逐項相加：3+6=9，+12=21，+24=45，+48=93，+96=189。 四選項逐項核對後唯一正解為「189」；邊界檢查：僅六項直接相加；MB一致。",
      "reviewContentSha256": "86790cca2999cfc7a20b319c8c1eb70f5b296da06f6a7446777d6739776685f8"
    },
    {
      "questionId": "u14-s012-v012",
      "unitId": "u14",
      "skillId": "sequence-literacy",
      "contentSha256": "fb0d3a73513f93b97acf1c957f81f0cc6b75e49bf2dd1bec6ae9f9432fa3972c",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "解n²+5n-204=0=(n-12)(n+17)，排數取12。代回末排56，總和12(12+56)/2=408。",
      "derivedAnswer": "12",
      "storedAnswer": "12",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「12」符合。其餘三項各自違反：10排總數300席。；11排總數352席。；13排總數468席。",
        "undefinedSymbol": "題幹所用符號與用語均在「數列素養題」講義中定義；本題目標為「排數」。",
        "unitConflict": "n=12為正整數；負根-17排除。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「12」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：n=12為正整數；負根-17排除。",
        "alternateReading": "最可能的誤讀是「用408÷12=34直接當排數或平均，未建立變化模型。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：需將座位總量、首排與固定增量整合，並排除負根。",
      "literacyContextNecessity": "觀眾席情境提供排數必為正整數及總座位驗算的真實限制。",
      "prerequisiteCheck": "使用前置技能「級數求和應用」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「觀眾席首排 12 席，每後一排多 4 席。已知全部座位為 408 席，則共有幾排？」獨立重算為：解n²+5n-204=0=(n-12)(n+17)，排數取12。代回末排56，總和12(12+56)/2=408。 四選項逐項核對後唯一正解為「12」；邊界檢查：n=12為正整數；負根-17排除。",
      "reviewContentSha256": "52adf59bc3ae6a5d66ad3b790ec463095f2a167b96d95eb86ee9cab4e1652ee1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u14-fig-s012-triangular-dots",
      "unitId": "u14",
      "skillId": "sequence-literacy",
      "svgPath": "figures/u14/u14-fig-s012-triangular-dots.svg",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "canvas": "720×260",
      "viewBox": "0 0 720 260",
      "altText": "三組點陣由左至右分別有1、3、6點，排列成一列、兩列、三列的三角形。",
      "drawingSpec": {
        "canvas": "720×260",
        "viewBox": "0 0 720 260",
        "coordinates": "三組中心x約105、300、545；圓點半徑8，列距35。",
        "visibleLines": "僅黑色圓點與外框。",
        "hiddenLines": "無。",
        "labels": "各階段下方標示點數。",
        "ticksUnitsArrows": "無刻度與箭頭；單位點。",
        "scale": "不表示實際距離，僅表示排列與數量。",
        "warning": "不得以三角形面積估算點數。",
        "mobile": "圓點直徑16px、文字22px。",
        "answerLeakage": "不呈現第6階段或21點答案。"
      },
      "svgAssertions": [
        "第1階段：1點",
        "第3階段：6點",
        "circle",
        "viewBox=\"0 0 720 260\""
      ],
      "figureReview": {
        "decision": "pass",
        "mobileReadability": "pass",
        "answerLeakage": "pass",
        "geometryTokenCheck": "pass",
        "manualVisualInspection": "pass",
        "reviewNote": "u14-fig-s012-triangular-dots 已渲染為PNG並人工核對標籤、座標、可數元素、手機縮放可讀性與答案洩漏；所有可見元素均落在畫布安全邊界內。"
      },
      "contentSha256": "2dcd57007a46f53d7eae6ab10249fa9ee83e84a1ac8ee2756b3152fd8b490710"
    }
  ]
};
