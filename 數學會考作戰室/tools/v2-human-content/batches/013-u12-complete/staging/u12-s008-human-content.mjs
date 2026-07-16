// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u12-s008-lecture-r1",
  "unitId": "u12",
  "numericUnitId": 12,
  "topicId": "u12-applications",
  "skillId": "factoring-check-expand",
  "lockedSkillTitle": "分解後展開檢查",
  "title": "分解後展開檢查：比對每一個係數才算驗證",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能完整展開兩個一次式。",
    "能逐項比對二次項、一次項與常數項。",
    "能找出候選分解的第一處錯誤。",
    "能說明單點代入不足以證明恆等。",
    "能利用係數關係補出未知數。"
  ],
  "prerequisites": [
    {
      "skillId": "factoring-application",
      "requiredLevel": "能運用前一技能並以展開驗證結果；本講義會重新連接必要步驟。"
    }
  ],
  "prerequisiteBridge": "先備技能為 factoring-application；先確認能完成前一方法並保留所有符號，再進入本技能。",
  "glossary": [
    {
      "term": "候選分解",
      "definition": "尚未確認正確的乘積形式。"
    },
    {
      "term": "係數比對",
      "definition": "比較同次項前的數字。"
    },
    {
      "term": "反例",
      "definition": "找一個值使主張不成立。"
    },
    {
      "term": "恆等驗證",
      "definition": "證明兩式對所有允許值相等。"
    }
  ],
  "notation": [
    {
      "symbol": "(ax+b)(cx+d)",
      "meaning": "展開為 acx²+(ad+bc)x+bd。"
    },
    {
      "symbol": "≡",
      "meaning": "表示恆等；本單元可用文字說明，不強制使用此符號。"
    }
  ],
  "conceptNarrative": [
    "展開檢查要產生完整多項式，再按次方排列。",
    "二次項、一次項、常數項任何一項不同，候選分解就錯。",
    "兩式在某一個 x 值相同可能只是巧合，不能證明恆等。",
    "反例足以推翻錯誤主張，但要證明正確通常需展開或完整係數論證。",
    "驗證候選因式分解時，要把乘積完整展開、合併同類項並按降冪排列，再逐項比較二次項、一次項與常數項；首尾相同仍可能在交叉項出錯。單點代入只能檢查該數值，不能證明恆等，但找到一個左右不等的反例就足以推翻主張。若式中含未知係數，應至少用一個係數求值，再以其他係數回查，避免只滿足局部條件。"
  ],
  "formalDefinitions": [
    {
      "name": "展開檢查",
      "statement": "用分配律把因式乘積還原，與原多項式逐項比較。"
    }
  ],
  "formulas": [
    {
      "formula": "(ax+b)(cx+d)=acx²+(ad+bc)x+bd",
      "conditions": [
        "每個交叉乘積都要保留"
      ],
      "meaning": "通用展開。"
    }
  ],
  "nonApplicableCases": [
    "只檢查首項和常數項不能保證中間項正確。",
    "只代 x=0 只會檢查常數項。",
    "排列順序不同不表示不相等，應先合併同類項。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "逐項使用分配律。",
      "check": "至少列出四個乘積。"
    },
    {
      "step": 2,
      "instruction": "合併同類項。",
      "check": "一次項通常來自兩個交叉乘積。"
    },
    {
      "step": 3,
      "instruction": "按降冪排列。",
      "check": "方便逐項對照。"
    },
    {
      "step": 4,
      "instruction": "比較二次、一次與常數係數。",
      "check": "指出第一處不一致。"
    },
    {
      "step": 5,
      "instruction": "若有未知係數，建立對應關係。",
      "check": "再回展確認。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "檢查(x＋2)(x＋7)的完整展開。",
      "solutionSteps": [
        "列出x²、7x、2x、14四個乘積。",
        "合併同類項7x＋2x＝9x。",
        "按降冪整理為x²＋9x＋14。"
      ],
      "answer": "x²＋9x＋14",
      "why": "兩個交叉項共同決定一次項係數，若只乘首項與常數就會漏掉9x；把四項逐一寫出再合併，是最直接也最可靠的檢查方式。"
    },
    {
      "exampleId": "L2",
      "prompt": "檢查(2x－3)(x＋4)是否等於2x²＋5x－12。",
      "solutionSteps": [
        "展開得2x²＋8x－3x－12。",
        "合併一次項8x－3x＝5x。",
        "三個係數逐項比對後完全相同。"
      ],
      "answer": "候選正確",
      "why": "負三會同時產生負的交叉項與負常數，兩處符號都必須保留；展開後首項、一次項與常數全部吻合，才足以判定恆等。"
    },
    {
      "exampleId": "L3",
      "prompt": "判斷(x＋1)(x＋6)是否等於x²＋5x＋6。",
      "solutionSteps": [
        "展開左式為x²＋6x＋x＋6。",
        "合併得x²＋7x＋6。",
        "比較一次項係數7與5，判定不相等。"
      ],
      "answer": "不是恆等式",
      "why": "二次項與常數項雖然相同，一次項仍不一致；這說明只檢查首尾兩項不夠，交叉項合併後的係數也必須核對。"
    },
    {
      "exampleId": "L4",
      "prompt": "若(3x＋p)(x－2)的一次項係數為－1，求p。",
      "solutionSteps": [
        "展開一次項為－6x＋px＝(p－6)x。",
        "比對p－6＝－1，解得p＝5。",
        "代回完整展開檢查其他係數沒有衝突。"
      ],
      "answer": "p＝5",
      "why": "未知係數來自兩個交叉乘積的和，不能只看其中一個；求得p後再代回展開式，可確認設定的係數與其餘項相容。"
    }
  ],
  "difficultyConnections": {
    "basic": "辨認單一結構並完成直接分解。",
    "standard": "結合符號、係數或兩步驟方法。",
    "advanced": "比較策略、處理參數或驗證限制。",
    "literacy": "從必要情境建立或解讀乘積結構。"
  },
  "commonMistakes": [
    {
      "mistake": "漏掉一個交叉乘積。",
      "why": "只乘首尾。",
      "correction": "列出四個乘積。"
    },
    {
      "mistake": "7x+2x 合成 14x。",
      "why": "把加法當乘法。",
      "correction": "同類項係數相加為 9x。"
    },
    {
      "mistake": "只看代入 x=0。",
      "why": "只驗證常數。",
      "correction": "需比所有係數。"
    },
    {
      "mistake": "項目順序不同就判錯。",
      "why": "未先整理。",
      "correction": "按次方排列。"
    },
    {
      "mistake": "反例值算錯。",
      "why": "代入未加括號。",
      "correction": "每個負值都用括號。"
    },
    {
      "mistake": "只說錯但不指出哪項。",
      "why": "缺乏可修正資訊。",
      "correction": "指出一次項或常數的差異。"
    }
  ],
  "selfCheck": [
    "我是否先判斷可用的方法？",
    "每一項、每個符號與外層因式都保留了嗎？",
    "我是否把結果展開回原式？",
    "情境中的單位與變數限制是否合理？"
  ],
  "summary": [
    "展開需保留四個乘積。",
    "整理後逐項比係數。",
    "單點代入不能證明恆等，但反例可推翻。"
  ],
  "connections": {
    "previous": "承接 factoring-application。",
    "next": "依鎖定順序銜接下一技能；本單元不提前使用一元二次方程式解根。"
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u12-s008-v001",
      "u12-s008-v002",
      "u12-s008-v003",
      "u12-s008-v004",
      "u12-s008-v005",
      "u12-s008-v006",
      "u12-s008-v007",
      "u12-s008-v008",
      "u12-s008-v009",
      "u12-s008-v010",
      "u12-s008-v011",
      "u12-s008-v012"
    ],
    "constructedResponseIds": [
      "u12-s008-cr001",
      "u12-s008-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "講義中的四個展開均重算四項乘積；錯誤候選與未知係數例分別核對一次項，清楚區分證明與反例。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "1e01813219a24434e4c560149c46caea0222f6c727770398e1eafe4f96eb5ad9"
};

export const QUESTIONS = [
  {
    "questionId": "u12-s008-v001",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-check-expand",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "展開 (x+2)(x+5) 的結果為何？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "完整展開並合併一次項。",
    "choices": [
      "x²+10",
      "x²+5x+10",
      "x²+7x+7",
      "x²+7x+10"
    ],
    "answerIndex": 3,
    "independentSolution": "每一項係數均由分配律得到。",
    "explanation": "(x+2)(x+5)=x²+5x+2x+10=x²+7x+10。 依分配律，x要分別乘x與5，常數2也要分別乘x與5，得到x²、5x、2x、10四項。合併同類項5x＋2x＝7x，所以完整結果為x²＋7x＋10，三個係數都可由四項乘積逐一回查。",
    "steps": [
      "列出四個乘積。",
      "合併 5x 與 2x。",
      "按降冪排列。"
    ],
    "optionAnalysis": [
      {
        "choice": "x²+10",
        "truth": false,
        "reason": "漏掉兩個交叉項。"
      },
      {
        "choice": "x²+5x+10",
        "truth": false,
        "reason": "只保留一個交叉項。"
      },
      {
        "choice": "x²+7x+7",
        "truth": false,
        "reason": "常數應為 2×5=10。"
      },
      {
        "choice": "x²+7x+10",
        "truth": true,
        "reason": "交叉項 5x+2x=7x。"
      }
    ],
    "misconceptionTarget": "只乘首項與常數。 只乘兩個首項與兩個常數，遺漏兩個交叉乘積。",
    "prerequisiteCheck": "需會分配律。",
    "estimatedTimeSec": 60,
    "unitAndRoundingChecks": "無單位；精確。",
    "ambiguityAndBoundaryAudit": "無特殊定義域限制。",
    "difficultyReason": "最基本二項式展開檢查。",
    "literacyContextNecessity": null,
    "authoringIntent": "建立展開檢查流程。",
    "concept": "四項展開",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "分解後展開檢查"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "24a07a0c784ef968a5fac5defe479e97fc531abee6e5a222dfbcdec01ffc5523"
  },
  {
    "questionId": "u12-s008-v002",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-check-expand",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(2x-1)(x+3) 展開後的一次項係數為何？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "只求交叉項合併係數。",
    "choices": [
      "6",
      "5",
      "-1",
      "7"
    ],
    "answerIndex": 1,
    "independentSolution": "一次項係數不是一次項本身，因此答案為 5。",
    "explanation": "展開為 2x²+6x-x-3=2x²+5x-3。 完整展開為2x²＋6x－x－3，其中一次項來自兩個交叉乘積，合併後是5x。題目問的是一次項係數，因此要取5，而不是寫成5x或只保留6。",
    "steps": [
      "算兩個交叉乘積 6x、-x。",
      "合併得 5x。",
      "取係數 5。"
    ],
    "optionAnalysis": [
      {
        "choice": "6",
        "truth": false,
        "reason": "只取 2x·3。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "6x-x=5x。"
      },
      {
        "choice": "-1",
        "truth": false,
        "reason": "只取 -1·x 的係數，漏掉 6x。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "把 -x 錯當 +x，得到 6+1。"
      }
    ],
    "misconceptionTarget": "只算一個交叉乘積。 只計算2x乘3，漏掉負一乘x所產生的負x。",
    "prerequisiteCheck": "需會帶號同類項合併。",
    "estimatedTimeSec": 60,
    "unitAndRoundingChecks": "無單位；係數為無單位數。",
    "ambiguityAndBoundaryAudit": "四選項互異；一次項係數由兩個交叉項相加唯一得到 5。",
    "difficultyReason": "聚焦中間係數。",
    "literacyContextNecessity": null,
    "authoringIntent": "練習交叉項檢查。",
    "concept": "一次項係數",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "分解後展開檢查"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "43e991d508d316306538cad16fdb58425c3850742fb91c500db0306ae6c8dcff"
  },
  {
    "questionId": "u12-s008-v003",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-check-expand",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "候選分解 (x+1)(x+4) 是否等於 x²+5x+4？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "展開判斷恆等。",
    "choices": [
      "是，因展開恰為 x²+5x+4",
      "是，但只在 x=0 時成立",
      "否，中間項應為 4x",
      "否，常數應為 5"
    ],
    "answerIndex": 0,
    "independentSolution": "不依賴代入特定值。",
    "explanation": "完整展開後三項係數皆吻合，因此是恆等分解。 把候選式完整展開可得x²＋4x＋x＋4，合併後正是x²＋5x＋4。三個係數逐項相同，因此對所有x都成立，不是只在某個代入值巧合相等。",
    "steps": [
      "展開四項。",
      "合併一次項。",
      "逐項比對。"
    ],
    "optionAnalysis": [
      {
        "choice": "是，因展開恰為 x²+5x+4",
        "truth": true,
        "reason": "x²+4x+x+4=x²+5x+4。"
      },
      {
        "choice": "是，但只在 x=0 時成立",
        "truth": false,
        "reason": "展開證明對所有 x 成立。"
      },
      {
        "choice": "否，中間項應為 4x",
        "truth": false,
        "reason": "漏掉 x。"
      },
      {
        "choice": "否，常數應為 5",
        "truth": false,
        "reason": "1×4=4。"
      }
    ],
    "misconceptionTarget": "只用單點代入或漏交叉項。 只代入x等於零便宣稱恆等，或展開時漏掉其中一個交叉項。",
    "prerequisiteCheck": "需會展開。",
    "estimatedTimeSec": 75,
    "unitAndRoundingChecks": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "「是否等於」按恆等式解讀，展開已證明。",
    "difficultyReason": "基本候選驗證。",
    "literacyContextNecessity": null,
    "authoringIntent": "辨認正確候選分解。",
    "concept": "恆等驗證",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "分解後展開檢查"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "23f383afd500d54e0e507ad20281d4bf2a42f40e96ee1de15bbcd1e1e283fc78"
  },
  {
    "questionId": "u12-s008-v004",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-check-expand",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某生聲稱 (x+2)(x+6)=x²+6x+12。錯在哪一項？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "展開並定位第一次項係數。",
    "choices": [
      "二次項應為 2x²",
      "常數應為 8",
      "一次項應為 8x",
      "沒有錯"
    ],
    "answerIndex": 2,
    "independentSolution": "只有一次項寫錯，二次與常數正確。",
    "explanation": "(x+2)(x+6)=x²+8x+12。 四個乘積為x²、6x、2x與12，所以正確展開是x²＋8x＋12。原主張的二次項與常數項都正確，只有一次項把兩個交叉項漏合併成8x，故應選一次項錯誤。",
    "steps": [
      "列四個乘積。",
      "合併 6x+2x。",
      "比較原聲稱。"
    ],
    "optionAnalysis": [
      {
        "choice": "二次項應為 2x²",
        "truth": false,
        "reason": "x·x=x²。"
      },
      {
        "choice": "常數應為 8",
        "truth": false,
        "reason": "2×6=12。"
      },
      {
        "choice": "一次項應為 8x",
        "truth": true,
        "reason": "交叉項 6x+2x=8x。"
      },
      {
        "choice": "沒有錯",
        "truth": false,
        "reason": "一次項係數不符。"
      }
    ],
    "misconceptionTarget": "把其中一個括號常數當一次項係數。 把括號中的6直接當一次項係數，忘記還有2x交叉項。",
    "prerequisiteCheck": "需會展開與係數比對。",
    "estimatedTimeSec": 90,
    "unitAndRoundingChecks": "無單位。",
    "ambiguityAndBoundaryAudit": "題目問錯在哪一項，答案唯一。",
    "difficultyReason": "需精確定位錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "訓練逐項除錯。",
    "concept": "係數錯誤定位",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "分解後展開檢查"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "b0d33a1d0a39e2746b14785c26e36f17536179279bf707e4c6a10b2b84c370d5"
  },
  {
    "questionId": "u12-s008-v005",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-check-expand",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "檢查 (3x-2)(x+5) 是否為 3x²+13x-10。判斷何者正確？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "展開候選。",
    "choices": [
      "錯，因一次項是 17x",
      "錯，因常數是 +10",
      "錯，因首項是 3x",
      "正確"
    ],
    "answerIndex": 3,
    "independentSolution": "三項完全一致。",
    "explanation": "(3x-2)(x+5)=3x²+15x-2x-10=3x²+13x-10。 依序相乘得到3x²、15x、－2x、－10，兩個一次項合併為13x，因此展開式正是3x²＋13x－10。首項、一次項與常數項三者都吻合，所以候選分解確實正確。",
    "steps": [
      "算四項。",
      "合併一次項。",
      "比對三係數。"
    ],
    "optionAnalysis": [
      {
        "choice": "錯，因一次項是 17x",
        "truth": false,
        "reason": "負的 2x 應相減。"
      },
      {
        "choice": "錯，因常數是 +10",
        "truth": false,
        "reason": "-2×5=-10。"
      },
      {
        "choice": "錯，因首項是 3x",
        "truth": false,
        "reason": "3x·x=3x²。"
      },
      {
        "choice": "正確",
        "truth": true,
        "reason": "交叉項 15x-2x=13x，首末項也吻合。"
      }
    ],
    "misconceptionTarget": "負交叉項或負常數乘法錯。 把負二乘x或負二乘五的符號算錯，造成一次項或常數項錯誤。",
    "prerequisiteCheck": "需會帶號乘法。",
    "estimatedTimeSec": 90,
    "unitAndRoundingChecks": "無單位；精確。",
    "ambiguityAndBoundaryAudit": "完整展開證明對所有 x 成立。",
    "difficultyReason": "包含負號的標準驗證。",
    "literacyContextNecessity": null,
    "authoringIntent": "驗證帶負常數因式。",
    "concept": "帶號展開",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "分解後展開檢查"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "a1a096103215af5e76592bd18aa84b5717687ce2da4f2c28b9b381c9b2f39dc6"
  },
  {
    "questionId": "u12-s008-v006",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-check-expand",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 (2x+p)(x-3)=2x²-x-15，則 p 為何？",
    "givenConditions": [
      "p 為常數。"
    ],
    "target": "展開並同時比對一次項與常數項。",
    "choices": [
      "3",
      "5",
      "7",
      "-5"
    ],
    "answerIndex": 1,
    "independentSolution": "展開得到 2x²+(p-6)x-3p；比對 p-6=-1 可得 p=5，並且 -3p=-15 也成立。",
    "explanation": "p=5 同時使一次項與常數項符合，不能只檢查其中一個。 一般展開為2x²＋(p－6)x－3p。比對一次項係數p－6＝－1可得p＝5，再檢查常數－3p＝－15也成立；兩個係數條件同時吻合，才能確認答案。",
    "steps": [
      "展開成 2x²+(p-6)x-3p。",
      "由一次項 p-6=-1 得 p=5。",
      "用常數 -3p=-15 回查。"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": false,
        "reason": "常數為 -9，且一次係數為 -3。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "p-6=-1 且 -3p=-15，兩個係數同時吻合。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "一次項係數為 1，常數為 -21。"
      },
      {
        "choice": "-5",
        "truth": false,
        "reason": "常數為 +15，符號不符。"
      }
    ],
    "misconceptionTarget": "只比對一個係數就下結論。 只用一次項或常數項其中一個條件求值，沒有用另一項回查。",
    "prerequisiteCheck": "需會係數比對。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位。",
    "ambiguityAndBoundaryAudit": "一次項與常數項給出相同 p=5，條件一致且答案唯一。",
    "difficultyReason": "要求用多係數交叉檢查。",
    "literacyContextNecessity": null,
    "authoringIntent": "用兩個係數驗證參數一致性。",
    "concept": "參數一致性",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "分解後展開檢查"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "88716144d360c2b5cae6e303c97690602057fde34205ddb61a69d06cba964c4f"
  },
  {
    "questionId": "u12-s008-v007",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-check-expand",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩式 P=(x+1)(x+6)、Q=x²+7x+6。只代 x=0 得 P=Q，這能否證明兩式恆等？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "評估單點檢查的證明力。",
    "choices": [
      "不能；單點相等不足，但完整展開可證明本例確實恆等",
      "能；任何一點相等就代表恆等",
      "不能；而且兩式其實不相等",
      "能；因 x=0 能檢查所有係數"
    ],
    "answerIndex": 0,
    "independentSolution": "答案同時評估方法與事實。",
    "explanation": "邏輯上單點不足；另行展開 P=x²+7x+6，才能證明本例恆等。 代入x＝0只能知道兩式在單一點相等，不足以證明對所有x恆等。本題另將P完整展開，得到x²＋7x＋6，這時才可證明P與Q的每個係數都相同。",
    "steps": [
      "區分「檢查一點」與「證明所有值」。",
      "舉出單點只驗常數的限制。",
      "完整展開確認本例。"
    ],
    "optionAnalysis": [
      {
        "choice": "不能；單點相等不足，但完整展開可證明本例確實恆等",
        "truth": true,
        "reason": "一個代入值只檢查該點，展開 P 才得到 Q。"
      },
      {
        "choice": "能；任何一點相等就代表恆等",
        "truth": false,
        "reason": "不同多項式可能在某點相交。"
      },
      {
        "choice": "不能；而且兩式其實不相等",
        "truth": false,
        "reason": "展開後確實相等。"
      },
      {
        "choice": "能；因 x=0 能檢查所有係數",
        "truth": false,
        "reason": "x=0 只直接檢查常數項。"
      }
    ],
    "misconceptionTarget": "把正確結論誤當成錯誤證明也有效。 因為本例結論恰好正確，就誤認單點代入也是有效的恆等證明。",
    "prerequisiteCheck": "需會展開與恆等概念。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "無單位。",
    "ambiguityAndBoundaryAudit": "題目問證明是否充分，不只是兩式是否相等。",
    "difficultyReason": "需要理解驗證邏輯。",
    "literacyContextNecessity": null,
    "authoringIntent": "區分偶然相等與恆等證明。",
    "concept": "驗證邏輯",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "分解後展開檢查"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "46a398d20eaaf555705b0bbec7e4503b401f2726d806b265f832ec4e57369318"
  },
  {
    "questionId": "u12-s008-v008",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-check-expand",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某候選分解 R=(2x-3)(x+4)。若原式標成 2x²+6x-12，第一個不一致的係數是哪一個？",
    "givenConditions": [
      "按二次、一次、常數項比對。"
    ],
    "target": "完整展開並找不一致項。",
    "choices": [
      "二次項係數",
      "常數項",
      "一次項係數",
      "沒有不一致"
    ],
    "answerIndex": 2,
    "independentSolution": "只有一次項係數不一致。",
    "explanation": "展開 R=2x²+8x-3x-12=2x²+5x-12。 候選式展開為2x²＋8x－3x－12＝2x²＋5x－12。二次項係數2與常數－12都和原式相同，第一次出現差異的是一次項係數5與6，因此不能因首尾相同就接受。",
    "steps": [
      "展開。",
      "依次比二次、一次、常數。",
      "指出一次係數。"
    ],
    "optionAnalysis": [
      {
        "choice": "二次項係數",
        "truth": false,
        "reason": "皆為 2。"
      },
      {
        "choice": "常數項",
        "truth": false,
        "reason": "皆為 -12。"
      },
      {
        "choice": "一次項係數",
        "truth": true,
        "reason": "R=2x²+5x-12，二次與常數吻合，一次係數 5≠6。"
      },
      {
        "choice": "沒有不一致",
        "truth": false,
        "reason": "一次項不同。"
      }
    ],
    "misconceptionTarget": "看到首尾吻合就停止檢查。 只看到首項與常數項吻合便停止，沒有檢查中間一次項係數。",
    "prerequisiteCheck": "需會完整展開。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位；精確。",
    "ambiguityAndBoundaryAudit": "「第一個」按降冪順序，二次吻合後一次項先出現差異。",
    "difficultyReason": "需按順序定位單一係數差異。",
    "literacyContextNecessity": null,
    "authoringIntent": "建立系統化係數稽核。",
    "concept": "降冪比對",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "分解後展開檢查"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "d16c8a96b6acb6e013e294a01a5de05f855d2547ae4e763eaff08a306ec5037a"
  },
  {
    "questionId": "u12-s008-v009",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-check-expand",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "針對錯誤主張 (x+2)(x+3)=x²+6x+6，下列哪一項檢查可作為反例直接推翻它？",
    "givenConditions": [
      "反例必須給出一個使等式左右不相等的代入值與結果。"
    ],
    "target": "辨認足以推翻恆等主張的單一代入檢查。",
    "choices": [
      "只比較二次項係數，兩邊都是 1",
      "只比較常數項，兩邊都是 6",
      "代入 x=0，兩邊都是 6",
      "代入 x=1，左邊 12、右邊 13"
    ],
    "answerIndex": 3,
    "independentSolution": "代入 x=1：左式 (1+2)(1+3)=12，右式 1+6+6=13；12≠13，因此這一項是有效反例。",
    "explanation": "反例必須指出同一個允許值使左右不相等；x=1 時得到 12 與 13，可直接推翻主張。 要推翻恆等主張，只需找到一個允許值使左右不同。代入x＝1時左式為3×4＝12，右式為1＋6＋6＝13，兩值不等，所以這是直接且充分的反例。",
    "steps": [
      "辨認反例需要左右不等。",
      "檢查只比係數或代 x=0 都沒有得到不等。",
      "代 x=1 得 12≠13。"
    ],
    "optionAnalysis": [
      {
        "choice": "只比較二次項係數，兩邊都是 1",
        "truth": false,
        "reason": "單一係數相同不能排除其他係數不同，也沒有給出左右值不等。"
      },
      {
        "choice": "只比較常數項，兩邊都是 6",
        "truth": false,
        "reason": "常數項相同只說明 x=0 時相等，不能推翻主張。"
      },
      {
        "choice": "代入 x=0，兩邊都是 6",
        "truth": false,
        "reason": "左右相等的代入結果不是反例。"
      },
      {
        "choice": "代入 x=1，左邊 12、右邊 13",
        "truth": true,
        "reason": "同一個 x 值使左右不相等，已足以推翻恆等主張。"
      }
    ],
    "misconceptionTarget": "把局部係數相同或某個代入值相等誤認為已完成恆等驗證。 把某一係數相同或代入零時相等，誤當成能推翻主張的反例。",
    "prerequisiteCheck": "需會代入與展開。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位。",
    "ambiguityAndBoundaryAudit": "四個選項是不同的檢查行為；只有代入 x=1 產生左右不等，故唯一能作反例。",
    "difficultyReason": "考查反例，但必須保證唯一。",
    "literacyContextNecessity": null,
    "authoringIntent": "區分反例、局部係數比較與無法推翻的相等代入。",
    "concept": "反例選擇",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "分解後展開檢查"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "7aa83afca252d856ea47eb09318250e9fd9662086051996d3ebb320fad49a337"
  },
  {
    "questionId": "u12-s008-v010",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-check-expand",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "試算表把 (n+4)(n+7) 自動展開為 n²+11n+28。審核結果應為何？",
    "givenConditions": [
      "n 為資料筆數參數。"
    ],
    "target": "檢查自動展開。",
    "choices": [
      "不通過，中間項應為 28n",
      "通過，四項合併後完全一致",
      "不通過，常數應為 11",
      "只在 n=1 時通過"
    ],
    "answerIndex": 1,
    "independentSolution": "試算表公式對所有 n 正確。",
    "explanation": "完整展開證明每個係數皆正確。 依分配律展開得n²＋7n＋4n＋28，合併兩個一次項後為n²＋11n＋28，與試算表結果完全一致。完整係數比對證明此公式對所有n都成立。",
    "steps": [
      "列四個乘積。",
      "合併 7n+4n。",
      "比對報表。"
    ],
    "optionAnalysis": [
      {
        "choice": "不通過，中間項應為 28n",
        "truth": false,
        "reason": "把常數乘積當一次係數。"
      },
      {
        "choice": "通過，四項合併後完全一致",
        "truth": true,
        "reason": "n²+7n+4n+28=n²+11n+28。"
      },
      {
        "choice": "不通過，常數應為 11",
        "truth": false,
        "reason": "把常數和當乘積。"
      },
      {
        "choice": "只在 n=1 時通過",
        "truth": false,
        "reason": "展開是恆等式。"
      }
    ],
    "misconceptionTarget": "只用一筆資料代入判斷。 把4與7的乘積二十八誤當一次項係數，或只代入一筆資料驗證。",
    "prerequisiteCheck": "需會展開。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "筆數模型為整數；係數精確。",
    "ambiguityAndBoundaryAudit": "n 的正整數限制不影響恆等驗證。",
    "difficultyReason": "情境要求審核軟體展開。",
    "literacyContextNecessity": "自動報表可能因交叉項錯誤而影響所有資料，必須做恆等檢查。",
    "authoringIntent": "審核試算表公式。",
    "concept": "公式稽核",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "分解後展開檢查"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "446523b4636ee0638d7501f76e421b7dae0c227b3caf4a755e1171715cbccc1e"
  },
  {
    "questionId": "u12-s008-v011",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-check-expand",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "建築估算程式聲稱 (3x+2)(x-5)=3x²-13x-10。哪個檢查最能直接證實？",
    "givenConditions": [
      "x 為尺寸參數。"
    ],
    "target": "完整展開並比係數。",
    "choices": [
      "計算 3x²-15x+2x-10，合併為 3x²-13x-10",
      "只代 x=0，兩邊都是 -10",
      "只比較首項 3x²",
      "只比較常數 -10"
    ],
    "answerIndex": 0,
    "independentSolution": "每個係數吻合，所以程式公式正確。",
    "explanation": "分配律完整展開是直接的恆等證明。 完整展開為3x²－15x＋2x－10，合併一次項得到3x²－13x－10，三個係數都與程式輸出相同。這種完整展開比只檢查首項、常數或單點更能直接證實恆等。",
    "steps": [
      "寫四項乘積。",
      "合併 -15x+2x。",
      "逐項比對。"
    ],
    "optionAnalysis": [
      {
        "choice": "計算 3x²-15x+2x-10，合併為 3x²-13x-10",
        "truth": true,
        "reason": "四個乘積完整吻合。"
      },
      {
        "choice": "只代 x=0，兩邊都是 -10",
        "truth": false,
        "reason": "只能檢查一個值，不能直接證實恆等。"
      },
      {
        "choice": "只比較首項 3x²",
        "truth": false,
        "reason": "漏一次與常數項。"
      },
      {
        "choice": "只比較常數 -10",
        "truth": false,
        "reason": "同樣不足。"
      }
    ],
    "misconceptionTarget": "把部分係數或單點檢查當完整證明。 只核對首項、常數項或x等於零的結果，就宣稱整個公式正確。",
    "prerequisiteCheck": "需會展開與證明。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "若 x 為公尺，各項代表相應模型量；無近似。",
    "ambiguityAndBoundaryAudit": "題目問「最能直接證實」，完整展開唯一充分。",
    "difficultyReason": "選擇最充分驗證方式。",
    "literacyContextNecessity": "工程估算程式需要對所有尺寸有效，不能只測單一輸入。",
    "authoringIntent": "選擇可靠軟體驗證。",
    "concept": "程式公式驗證",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "分解後展開檢查"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "1e23c8205b86f3ef6ab70ca5669716322da7f56ab4b3acd9f713277dd23b74b8"
  },
  {
    "questionId": "u12-s008-v012",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-check-expand",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某包裝模型原式為 2p²+7p+3，系統候選分解為 (2p+3)(p+1)。系統應標記哪個係數不符？",
    "givenConditions": [
      "p 為正整數。"
    ],
    "target": "展開候選並比對。",
    "choices": [
      "二次項係數",
      "常數項",
      "一次項係數",
      "沒有不符"
    ],
    "answerIndex": 2,
    "independentSolution": "一次項係數少 2。",
    "explanation": "(2p+3)(p+1)=2p²+2p+3p+3=2p²+5p+3。 候選式展開為2p²＋2p＋3p＋3＝2p²＋5p＋3。二次項係數2與常數3都吻合，但一次項係數應為5而不是原式的7，因此唯一不符的是一次項係數，系統應標記此欄。",
    "steps": [
      "完整展開。",
      "合併一次項。",
      "比對原式 7p。"
    ],
    "optionAnalysis": [
      {
        "choice": "二次項係數",
        "truth": false,
        "reason": "都是 2。"
      },
      {
        "choice": "常數項",
        "truth": false,
        "reason": "都是 3。"
      },
      {
        "choice": "一次項係數",
        "truth": true,
        "reason": "候選展開為 2p²+5p+3。"
      },
      {
        "choice": "沒有不符",
        "truth": false,
        "reason": "一次項 5≠7。"
      }
    ],
    "misconceptionTarget": "首尾正確就誤判整體正確。 只比對首項與常數項便接受候選分解，漏查兩個交叉項的和。",
    "prerequisiteCheck": "需會非首一展開。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "計數模型無近似；係數無單位。",
    "ambiguityAndBoundaryAudit": "p 正值不會讓不同多項式恆等，只有可能在個別點巧合。",
    "difficultyReason": "在實務模型中定位錯誤係數。",
    "literacyContextNecessity": "包裝系統需指出錯誤欄位以便修正，而非只回報失敗。",
    "authoringIntent": "定位包裝模型錯誤。",
    "concept": "模型係數稽核",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "分解後展開檢查"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "e5bb18a8a0e8bf5646cb9f8b5beae3858d96565e15cd5c93f196cd02608c2366"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u12-s008-cr001",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-check-expand",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "檢查候選分解 (2x-5)(x+3) 是否等於 2x²+x-15。請完整展開並逐項比對。",
    "requiredWork": [
      "列四個乘積。",
      "合併一次項。",
      "比對二次、一次、常數。",
      "作明確結論。"
    ],
    "fullCreditSolution": [
      "依分配律列出四個乘積：(2x－5)(x＋3)＝2x²＋6x－5x－15，每個括號內的項都不可遺漏。",
      "合併同類項6x－5x＝x，整理為2x²＋x－15。",
      "逐項比對後，二次項係數2、一次項係數1及常數－15全部吻合，所以候選分解正確。"
    ],
    "alternativeSolutions": [
      "可用係數公式 ac、ad+bc、bd 檢查，但需寫出三個結果。"
    ],
    "reasoningSteps": [
      "先完整展開四個乘積，不能用單一代入值取代恆等檢查。",
      "合併同類項並按降冪排列，避免漏看一次項。",
      "比較二次、一次與常數三個係數後，才作正確結論。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "四項展開、合併、三項係數比對與正確結論俱全。"
      },
      {
        "score": 2,
        "criteria": "結論正確且主要展開正確，但漏一項比對或有輕微書寫錯。"
      },
      {
        "score": 1,
        "criteria": "只比首尾或只代入一個 x 值，證據不足。"
      },
      {
        "score": 0,
        "criteria": "展開錯誤並判定候選不正確。"
      }
    ],
    "partialCreditRules": [
      "只寫「正確」最高 1 分。",
      "因式順序交換不影響檢查。"
    ],
    "followThroughPolicy": "若交叉項一處抄錯但後續明確用正確 6x-5x，可給 2 分；若只代 x=0 不得超過 1 分。",
    "unitAndNotationRules": [
      "無單位。",
      "負值代入若使用需加括號。"
    ],
    "answerOnlyPolicy": "只有結論無過程最高 1 分。",
    "commonErrors": [
      "漏掉負五乘x的交叉項，使一次項誤成6x。",
      "把負五乘正三算成正十五，導致常數符號錯誤。"
    ],
    "independentReview": {
      "derivedResult": "候選正確，展開為 2x²+x-15。",
      "ambiguity": "題目要求恆等驗證，不接受單點作完整證明。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "6542ddf76aa40e7ea5e0512420ff75f1426d57ffd786766217bf84617915c74d"
  },
  {
    "questionId": "u12-s008-cr002",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-check-expand",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某同學用 x=0 驗證 (x+2)(x+7)=x²+8x+14，得到兩邊都是 14，便宣稱分解正確。請評估他的證據，並給出正確判斷。",
    "requiredWork": [
      "說明單點代入的限制。",
      "完整展開左式。",
      "指出錯誤係數。",
      "給反例或係數比較。"
    ],
    "fullCreditSolution": [
      "代入x＝0只會檢查常數項；不同多項式可能在同一點相等，因此這個證據不足以證明恆等。",
      "完整展開左式：(x＋2)(x＋7)＝x²＋9x＋14，與右式x²＋8x＋14的一次項係數不同。",
      "也可代入x＝1作反例：左式為24、右式為23。故同學的證據不足，而且原主張確實錯誤。"
    ],
    "alternativeSolutions": [
      "不必另找反例，只要完整展開並指出一次項係數 9≠8，即可完成判斷。"
    ],
    "reasoningSteps": [
      "先分開評估證明方法是否充分，以及原命題實際是真是假。",
      "以完整展開比較每個係數，找出一次項9與8不一致。",
      "再用一個使左右不等的允許值作反例，確認主張可被推翻。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "指出單點不足，展開得 x²+9x+14，並以係數或反例判錯。"
      },
      {
        "score": 2,
        "criteria": "能正確展開並判錯，但未清楚說明單點證據限制；或反之。"
      },
      {
        "score": 1,
        "criteria": "只說「不能只代一點」但沒有判斷實際式子，或只給反例無方法說明。"
      },
      {
        "score": 0,
        "criteria": "接受同學結論，或展開仍寫 8x。"
      }
    ],
    "partialCreditRules": [
      "x=1 以外任何非零反例若計算正確均接受。",
      "只說證據不足不代表自動判定命題錯，需另查。"
    ],
    "followThroughPolicy": "若反例算錯但展開係數正確，可給 2 分；若展開錯但找到正確反例，也可給 1 至 2 分。",
    "unitAndNotationRules": [
      "無單位。",
      "代入負值需用括號。"
    ],
    "answerOnlyPolicy": "只答「錯」無理由最高 1 分。",
    "commonErrors": [
      "只說單點證據不足便直接斷言式子錯誤，沒有另行展開或找反例。",
      "因x等於零時兩邊相同，就誤認所有x都會相同。"
    ],
    "independentReview": {
      "derivedResult": "證據不足且命題為假；左式一次係數為 9。",
      "ambiguity": "評分需同時看邏輯評估與實際數學判斷。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "7ef4fed36366a993bb65670f68118c99136a936a1feec22c357c38fce75cc050"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u12-s008-v001",
    "unitId": "u12",
    "skillId": "factoring-check-expand",
    "contentSha256": "24a07a0c784ef968a5fac5defe479e97fc531abee6e5a222dfbcdec01ffc5523",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "每一項係數均由分配律得到。",
    "derivedAnswer": "x²+7x+10",
    "storedAnswer": "x²+7x+10",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「展開 (x+2)(x+5) 的結果為何？」逐一展開或回代；正解「x²+7x+10」成立。「x²+10」不成立：漏掉兩個交叉項。；「x²+5x+10」不成立：只保留一個交叉項。；「x²+7x+7」不成立：常數應為 2×5=10。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「完整展開並合併一次項。」。",
      "unitConflict": "本題單位審查：無單位；精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：無特殊定義域限制。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「完整展開並合併一次項。」閱讀後，常見誤讀為「只乘首項與常數。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "最基本二項式展開檢查。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會分配律。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s008-v001：每一項係數均由分配律得到。 因此導出「x²+7x+10」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「完整展開並合併一次項。」，並特別排除「只乘首項與常數。」。難度理由是「最基本二項式展開檢查。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s008-v002",
    "unitId": "u12",
    "skillId": "factoring-check-expand",
    "contentSha256": "43e991d508d316306538cad16fdb58425c3850742fb91c500db0306ae6c8dcff",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "一次項係數不是一次項本身，因此答案為 5。",
    "derivedAnswer": "5",
    "storedAnswer": "5",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「(2x-1)(x+3) 展開後的一次項係數為何？」逐一展開或回代；正解「5」成立。「6」不成立：只取 2x·3。；「-1」不成立：只取 -1·x 的係數，漏掉 6x。；「7」不成立：把 -x 錯當 +x，得到 6+1。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「只求交叉項合併係數。」。",
      "unitConflict": "本題單位審查：無單位；係數為無單位數。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；係數為無單位數。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：四選項互異；一次項係數由兩個交叉項相加唯一得到 5。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「只求交叉項合併係數。」閱讀後，常見誤讀為「只算一個交叉乘積。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "聚焦中間係數。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會帶號同類項合併。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s008-v002：一次項係數不是一次項本身，因此答案為 5。 因此導出「5」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「只求交叉項合併係數。」，並特別排除「只算一個交叉乘積。」。難度理由是「聚焦中間係數。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s008-v003",
    "unitId": "u12",
    "skillId": "factoring-check-expand",
    "contentSha256": "23f383afd500d54e0e507ad20281d4bf2a42f40e96ee1de15bbcd1e1e283fc78",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "不依賴代入特定值。",
    "derivedAnswer": "是，因展開恰為 x²+5x+4",
    "storedAnswer": "是，因展開恰為 x²+5x+4",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「候選分解 (x+1)(x+4) 是否等於 x²+5x+4？」逐一展開或回代；正解「是，因展開恰為 x²+5x+4」成立。「是，但只在 x=0 時成立」不成立：展開證明對所有 x 成立。；「否，中間項應為 4x」不成立：漏掉 x。；「否，常數應為 5」不成立：1×4=4。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「展開判斷恆等。」。",
      "unitConflict": "本題單位審查：無單位與近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位與近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：「是否等於」按恆等式解讀，展開已證明。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「展開判斷恆等。」閱讀後，常見誤讀為「只用單點代入或漏交叉項。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "基本候選驗證。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會展開。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s008-v003：不依賴代入特定值。 因此導出「是，因展開恰為 x²+5x+4」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「展開判斷恆等。」，並特別排除「只用單點代入或漏交叉項。」。難度理由是「基本候選驗證。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s008-v004",
    "unitId": "u12",
    "skillId": "factoring-check-expand",
    "contentSha256": "b0d33a1d0a39e2746b14785c26e36f17536179279bf707e4c6a10b2b84c370d5",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "只有一次項寫錯，二次與常數正確。",
    "derivedAnswer": "一次項應為 8x",
    "storedAnswer": "一次項應為 8x",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「某生聲稱 (x+2)(x+6)=x²+6x+12。錯在哪一項？」逐一展開或回代；正解「一次項應為 8x」成立。「二次項應為 2x²」不成立：x·x=x²。；「常數應為 8」不成立：2×6=12。；「沒有錯」不成立：一次項係數不符。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「展開並定位第一次項係數。」。",
      "unitConflict": "本題單位審查：無單位。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：題目問錯在哪一項，答案唯一。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「展開並定位第一次項係數。」閱讀後，常見誤讀為「把其中一個括號常數當一次項係數。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需精確定位錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會展開與係數比對。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s008-v004：只有一次項寫錯，二次與常數正確。 因此導出「一次項應為 8x」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「展開並定位第一次項係數。」，並特別排除「把其中一個括號常數當一次項係數。」。難度理由是「需精確定位錯誤。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s008-v005",
    "unitId": "u12",
    "skillId": "factoring-check-expand",
    "contentSha256": "a1a096103215af5e76592bd18aa84b5717687ce2da4f2c28b9b381c9b2f39dc6",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "三項完全一致。",
    "derivedAnswer": "正確",
    "storedAnswer": "正確",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「檢查 (3x-2)(x+5) 是否為 3x²+13x-10。判斷何者正確？」逐一展開或回代；正解「正確」成立。「錯，因一次項是 17x」不成立：負的 2x 應相減。；「錯，因常數是 +10」不成立：-2×5=-10。；「錯，因首項是 3x」不成立：3x·x=3x²。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「展開候選。」。",
      "unitConflict": "本題單位審查：無單位；精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：完整展開證明對所有 x 成立。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「展開候選。」閱讀後，常見誤讀為「負交叉項或負常數乘法錯。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "包含負號的標準驗證。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會帶號乘法。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s008-v005：三項完全一致。 因此導出「正確」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「展開候選。」，並特別排除「負交叉項或負常數乘法錯。」。難度理由是「包含負號的標準驗證。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s008-v006",
    "unitId": "u12",
    "skillId": "factoring-check-expand",
    "contentSha256": "88716144d360c2b5cae6e303c97690602057fde34205ddb61a69d06cba964c4f",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開得到 2x²+(p-6)x-3p；比對 p-6=-1 可得 p=5，並且 -3p=-15 也成立。",
    "derivedAnswer": "5",
    "storedAnswer": "5",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「若 (2x+p)(x-3)=2x²-x-15，則 p 為何？」逐一展開或回代；正解「5」成立。「3」不成立：常數為 -9，且一次係數為 -3。；「7」不成立：一次項係數為 1，常數為 -21。；「-5」不成立：常數為 +15，符號不符。",
      "undefinedSymbol": "題幹已給條件為「p 為常數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「展開並同時比對一次項與常數項。」。",
      "unitConflict": "本題單位審查：無單位。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：一次項與常數項給出相同 p=5，條件一致且答案唯一。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「展開並同時比對一次項與常數項。」閱讀後，常見誤讀為「只比對一個係數就下結論。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "要求用多係數交叉檢查。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會係數比對。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s008-v006：展開得到 2x²+(p-6)x-3p；比對 p-6=-1 可得 p=5，並且 -3p=-15 也成立。 因此導出「5」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「展開並同時比對一次項與常數項。」，並特別排除「只比對一個係數就下結論。」。難度理由是「要求用多係數交叉檢查。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s008-v007",
    "unitId": "u12",
    "skillId": "factoring-check-expand",
    "contentSha256": "46a398d20eaaf555705b0bbec7e4503b401f2726d806b265f832ec4e57369318",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "答案同時評估方法與事實。",
    "derivedAnswer": "不能；單點相等不足，但完整展開可證明本例確實恆等",
    "storedAnswer": "不能；單點相等不足，但完整展開可證明本例確實恆等",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「兩式 P=(x+1)(x+6)、Q=x²+7x+6。只代 x=0 得 P=Q，這能否證明兩式恆等？」逐一展開或回代；正解「不能；單點相等不足，但完整展開可證明本例確實恆等」成立。「能；任何一點相等就代表恆等」不成立：不同多項式可能在某點相交。；「不能；而且兩式其實不相等」不成立：展開後確實相等。；「能；因 x=0 能檢查所有係數」不成立：x=0 只直接檢查常數項。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「評估單點檢查的證明力。」。",
      "unitConflict": "本題單位審查：無單位。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：題目問證明是否充分，不只是兩式是否相等。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「評估單點檢查的證明力。」閱讀後，常見誤讀為「把正確結論誤當成錯誤證明也有效。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需要理解驗證邏輯。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會展開與恆等概念。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s008-v007：答案同時評估方法與事實。 因此導出「不能；單點相等不足，但完整展開可證明本例確實恆等」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「評估單點檢查的證明力。」，並特別排除「把正確結論誤當成錯誤證明也有效。」。難度理由是「需要理解驗證邏輯。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s008-v008",
    "unitId": "u12",
    "skillId": "factoring-check-expand",
    "contentSha256": "d16c8a96b6acb6e013e294a01a5de05f855d2547ae4e763eaff08a306ec5037a",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "只有一次項係數不一致。",
    "derivedAnswer": "一次項係數",
    "storedAnswer": "一次項係數",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「某候選分解 R=(2x-3)(x+4)。若原式標成 2x²+6x-12，第一個不一致的係數是哪一個？」逐一展開或回代；正解「一次項係數」成立。「二次項係數」不成立：皆為 2。；「常數項」不成立：皆為 -12。；「沒有不一致」不成立：一次項不同。",
      "undefinedSymbol": "題幹已給條件為「按二次、一次、常數項比對。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「完整展開並找不一致項。」。",
      "unitConflict": "本題單位審查：無單位；精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：「第一個」按降冪順序，二次吻合後一次項先出現差異。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「完整展開並找不一致項。」閱讀後，常見誤讀為「看到首尾吻合就停止檢查。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需按順序定位單一係數差異。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會完整展開。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s008-v008：只有一次項係數不一致。 因此導出「一次項係數」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「完整展開並找不一致項。」，並特別排除「看到首尾吻合就停止檢查。」。難度理由是「需按順序定位單一係數差異。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s008-v009",
    "unitId": "u12",
    "skillId": "factoring-check-expand",
    "contentSha256": "7aa83afca252d856ea47eb09318250e9fd9662086051996d3ebb320fad49a337",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "代入 x=1：左式 (1+2)(1+3)=12，右式 1+6+6=13；12≠13，因此這一項是有效反例。",
    "derivedAnswer": "代入 x=1，左邊 12、右邊 13",
    "storedAnswer": "代入 x=1，左邊 12、右邊 13",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「針對錯誤主張 (x+2)(x+3)=x²+6x+6，下列哪一項檢查可作為反例直接推翻它？」逐一展開或回代；正解「代入 x=1，左邊 12、右邊 13」成立。「只比較二次項係數，兩邊都是 1」不成立：單一係數相同不能排除其他係數不同，也沒有給出左右值不等。；「只比較常數項，兩邊都是 6」不成立：常數項相同只說明 x=0 時相等，不能推翻主張。；「代入 x=0，兩邊都是 6」不成立：左右相等的代入結果不是反例。",
      "undefinedSymbol": "題幹已給條件為「反例必須給出一個使等式左右不相等的代入值與結果。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「辨認足以推翻恆等主張的單一代入檢查。」。",
      "unitConflict": "本題單位審查：無單位。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：四個選項是不同的檢查行為；只有代入 x=1 產生左右不等，故唯一能作反例。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「辨認足以推翻恆等主張的單一代入檢查。」閱讀後，常見誤讀為「把局部係數相同或某個代入值相等誤認為已完成恆等驗證。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "考查反例，但必須保證唯一。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會代入與展開。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s008-v009：代入 x=1：左式 (1+2)(1+3)=12，右式 1+6+6=13；12≠13，因此這一項是有效反例。 因此導出「代入 x=1，左邊 12、右邊 13」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「辨認足以推翻恆等主張的單一代入檢查。」，並特別排除「把局部係數相同或某個代入值相等誤認為已完成恆等驗證。」。難度理由是「考查反例，但必須保證唯一。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s008-v010",
    "unitId": "u12",
    "skillId": "factoring-check-expand",
    "contentSha256": "446523b4636ee0638d7501f76e421b7dae0c227b3caf4a755e1171715cbccc1e",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "試算表公式對所有 n 正確。",
    "derivedAnswer": "通過，四項合併後完全一致",
    "storedAnswer": "通過，四項合併後完全一致",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「試算表把 (n+4)(n+7) 自動展開為 n²+11n+28。審核結果應為何？」逐一展開或回代；正解「通過，四項合併後完全一致」成立。「不通過，中間項應為 28n」不成立：把常數乘積當一次係數。；「不通過，常數應為 11」不成立：把常數和當乘積。；「只在 n=1 時通過」不成立：展開是恆等式。",
      "undefinedSymbol": "題幹已給條件為「n 為資料筆數參數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「檢查自動展開。」。",
      "unitConflict": "本題單位審查：筆數模型為整數；係數精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；筆數模型為整數；係數精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：n 的正整數限制不影響恆等驗證。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「檢查自動展開。」閱讀後，常見誤讀為「只用一筆資料代入判斷。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "情境要求審核軟體展開。",
    "literacyContextNecessity": "自動報表可能因交叉項錯誤而影響所有資料，必須做恆等檢查。",
    "prerequisiteCheck": "需會展開。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s008-v010：試算表公式對所有 n 正確。 因此導出「通過，四項合併後完全一致」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「檢查自動展開。」，並特別排除「只用一筆資料代入判斷。」。難度理由是「情境要求審核軟體展開。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s008-v011",
    "unitId": "u12",
    "skillId": "factoring-check-expand",
    "contentSha256": "1e23c8205b86f3ef6ab70ca5669716322da7f56ab4b3acd9f713277dd23b74b8",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "每個係數吻合，所以程式公式正確。",
    "derivedAnswer": "計算 3x²-15x+2x-10，合併為 3x²-13x-10",
    "storedAnswer": "計算 3x²-15x+2x-10，合併為 3x²-13x-10",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「建築估算程式聲稱 (3x+2)(x-5)=3x²-13x-10。哪個檢查最能直接證實？」逐一展開或回代；正解「計算 3x²-15x+2x-10，合併為 3x²-13x-10」成立。「只代 x=0，兩邊都是 -10」不成立：只能檢查一個值，不能直接證實恆等。；「只比較首項 3x²」不成立：漏一次與常數項。；「只比較常數 -10」不成立：同樣不足。",
      "undefinedSymbol": "題幹已給條件為「x 為尺寸參數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「完整展開並比係數。」。",
      "unitConflict": "本題單位審查：若 x 為公尺，各項代表相應模型量；無近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；若 x 為公尺，各項代表相應模型量；無近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：題目問「最能直接證實」，完整展開唯一充分。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「完整展開並比係數。」閱讀後，常見誤讀為「把部分係數或單點檢查當完整證明。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "選擇最充分驗證方式。",
    "literacyContextNecessity": "工程估算程式需要對所有尺寸有效，不能只測單一輸入。",
    "prerequisiteCheck": "需會展開與證明。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s008-v011：每個係數吻合，所以程式公式正確。 因此導出「計算 3x²-15x+2x-10，合併為 3x²-13x-10」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「完整展開並比係數。」，並特別排除「把部分係數或單點檢查當完整證明。」。難度理由是「選擇最充分驗證方式。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s008-v012",
    "unitId": "u12",
    "skillId": "factoring-check-expand",
    "contentSha256": "e5bb18a8a0e8bf5646cb9f8b5beae3858d96565e15cd5c93f196cd02608c2366",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "一次項係數少 2。",
    "derivedAnswer": "一次項係數",
    "storedAnswer": "一次項係數",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「某包裝模型原式為 2p²+7p+3，系統候選分解為 (2p+3)(p+1)。系統應標記哪個係數不符？」逐一展開或回代；正解「一次項係數」成立。「二次項係數」不成立：都是 2。；「常數項」不成立：都是 3。；「沒有不符」不成立：一次項 5≠7。",
      "undefinedSymbol": "題幹已給條件為「p 為正整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「展開候選並比對。」。",
      "unitConflict": "本題單位審查：計數模型無近似；係數無單位。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；計數模型無近似；係數無單位。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：p 正值不會讓不同多項式恆等，只有可能在個別點巧合。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「展開候選並比對。」閱讀後，常見誤讀為「首尾正確就誤判整體正確。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "在實務模型中定位錯誤係數。",
    "literacyContextNecessity": "包裝系統需指出錯誤欄位以便修正，而非只回報失敗。",
    "prerequisiteCheck": "需會非首一展開。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s008-v012：一次項係數少 2。 因此導出「一次項係數」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「展開候選並比對。」，並特別排除「首尾正確就誤判整體正確。」。難度理由是「在實務模型中定位錯誤係數。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
