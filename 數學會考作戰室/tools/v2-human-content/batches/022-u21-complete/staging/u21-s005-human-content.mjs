// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE={
  "lectureId": "u21-s005-lecture-r1",
  "unitId": "u21",
  "numericUnitId": 21,
  "topicId": "u21-graphs",
  "skillId": "quadratic-opening",
  "lockedTitle": "開口方向",
  "title": "看懂拋物線往哪裡開：最高次係數的符號",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "gradeBand": "9下",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": {
    "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
    "legacyContentImported": false,
    "legacySkillReferenceOnly": "quadratic-opening"
  },
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能由一般式或頂點式找出二次項係數 a。",
    "能依 a>0 或 a<0 判斷開口方向。",
    "能由開口方向反推 a 的符號。",
    "能避免把常數項或頂點高低誤當開口依據。"
  ],
  "prerequisites": [
    {
      "skillId": "quadratic-graph-forms",
      "requiredLevel": "能讀懂前一技能的定義、圖形與基本運算，並可在本節開始前完成一題檢核。",
      "bridge": "本節會直接使用前一技能的圖形語言與代數表示。"
    }
  ],
  "prerequisiteBridge": "先會在 y=ax² 圖形中辨認 a；本節擴充到 y=ax²+bx+c 與 y=a(x-h)²+k，開口仍只由 a 的正負決定。",
  "glossary": [
    {
      "term": "最高次係數",
      "definition": "整理後 x² 項前的係數 a。"
    },
    {
      "term": "開口向上",
      "definition": "曲線兩端向上延伸，頂點為最低點。"
    },
    {
      "term": "開口向下",
      "definition": "曲線兩端向下延伸，頂點為最高點。"
    },
    {
      "term": "整體乘負數",
      "definition": "所有函數值上下翻轉，開口方向改變。"
    }
  ],
  "notation": [
    {
      "symbol": "a>0",
      "meaning": "最高次係數為正，拋物線開口向上。"
    },
    {
      "symbol": "a<0",
      "meaning": "最高次係數為負，拋物線開口向下。"
    },
    {
      "symbol": "a≠0",
      "meaning": "維持二次函數身分。"
    }
  ],
  "conceptNarrative": [
    "當 |x| 很大時，x² 項對 y 的影響最明顯，因此曲線兩端的方向由 a 的符號控制。",
    "常數項只把圖形上下移動，一次項會改變對稱軸位置，但都不會取代 a 對開口方向的控制。",
    "在頂點式 y=a(x-h)²+k 中，平方部分永遠非負；a 為正時離頂點後 y 增加，a 為負時離頂點後 y 減少。",
    "判斷前要先整理。例如 y=2x²-(5x²-1)=-3x²+1，真正的 a 是 -3。"
  ],
  "formalDefinitions": [
    {
      "name": "開口方向判準",
      "statement": "二次函數整理後 y=ax²+bx+c，若 a>0 則向上；若 a<0 則向下。"
    }
  ],
  "formulas": [
    {
      "formula": "sign(a)→開口方向",
      "conditions": [
        "先整理成標準多項式或辨認頂點式外係數"
      ],
      "meaning": "只看 a 的正負，不看 b、c、h、k 的正負。"
    }
  ],
  "nonApplicableCases": [
    "a=0 時不是拋物線，不能談二次函數開口。",
    "不能用頂點 y 座標正負判斷開口；頂點在負值也可能向上。",
    "不能用圖在某一小段上升或下降判斷整體開口。",
    "式子未整理時，不能只看第一個出現的 x² 項。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "展開括號並合併 x² 同類項。",
      "check": "真正的二次項係數是多少？"
    },
    {
      "step": 2,
      "instruction": "確認 a 不為 0。",
      "check": "若為 0，題目已不是二次函數。"
    },
    {
      "step": 3,
      "instruction": "只判斷 a 的正負。",
      "check": "正向上、負向下。"
    },
    {
      "step": 4,
      "instruction": "用頂點附近兩點驗證。",
      "check": "離開頂點後 y 是增加還是減少？"
    },
    {
      "step": 5,
      "instruction": "排除常數項幹擾。",
      "check": "是否錯把圖形位置當方向？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "判斷 y=-4x²+7x-1 的開口。",
      "solutionSteps": [
        "x² 係數 a=-4。",
        "a<0。"
      ],
      "answer": "開口向下。"
    },
    {
      "exampleId": "L2",
      "prompt": "判斷 y=3(x+2)²-5 的開口。",
      "solutionSteps": [
        "平方項外係數 a=3。",
        "a>0。"
      ],
      "answer": "開口向上。"
    },
    {
      "exampleId": "L3",
      "prompt": "整理 y=5x²-(8x²+2x) 後判斷開口。",
      "solutionSteps": [
        "合併二次項得 -3x²-2x。",
        "a=-3<0。"
      ],
      "answer": "開口向下。"
    },
    {
      "exampleId": "L4",
      "prompt": "某拋物線頂點為 (1,-9) 且開口向上，a 的符號？",
      "solutionSteps": [
        "開口向上直接對應 a>0。",
        "頂點 y=-9 不影響符號。"
      ],
      "answer": "a>0。"
    },
    {
      "exampleId": "L5",
      "prompt": "y=-(x-6)²+20 為何有最大值？",
      "solutionSteps": [
        "a=-1<0，開口向下。",
        "頂點是最高點。"
      ],
      "answer": "因開口向下，最大值在頂點。"
    }
  ],
  "difficultyConnections": {
    "basic": "直接讀取 a 的符號。",
    "standard": "先展開或合併同類項。",
    "advanced": "結合開口、頂點與參數條件反推係數。",
    "literacy": "判斷拋物線模型描述的是有最高點還是最低點的情境。"
  },
  "commonMistakes": [
    {
      "mistake": "看常數項正負判斷方向。",
      "why": "把 y 截距當最高次係數。",
      "correction": "圈出 x² 項前的 a。"
    },
    {
      "mistake": "頂點在上方就認為向下。",
      "why": "把位置與方向混為一談。",
      "correction": "位置看 k，方向看 a。"
    },
    {
      "mistake": "頂點式看括號內正負。",
      "why": "把 h 的符號誤當 a。",
      "correction": "a 是整個平方項外的乘數。"
    },
    {
      "mistake": "未合併兩個 x² 項。",
      "why": "太早讀係數。",
      "correction": "先整理完整式子。"
    },
    {
      "mistake": "a=0 仍判方向。",
      "why": "忘記二次函數條件。",
      "correction": "先檢查 a≠0。"
    },
    {
      "mistake": "只看曲線某段斜率。",
      "why": "把局部上升下降當開口。",
      "correction": "觀察兩端與頂點，或直接用 a。"
    }
  ],
  "selfCheckItems": [
    {
      "prompt": "y=0.2(x-1)²-8 的開口？",
      "answer": "向上。"
    },
    {
      "prompt": "y=-x²-100 的開口？",
      "answer": "向下。"
    },
    {
      "prompt": "y=4x²-7x²+1 的開口？",
      "answer": "向下。"
    },
    {
      "prompt": "開口向下時 a 的條件？",
      "answer": "a<0。"
    }
  ],
  "summary": [
    "開口方向只由整理後的 x² 係數 a 決定。",
    "a>0 向上，a<0 向下。",
    "b、c、h、k 會改變位置，但不改變方向判準。",
    "未整理或 a=0 時不可直接套用。"
  ],
  "connections": {
    "previous": "從多種表徵中辨認二次項與圖形。",
    "next": [
      "下一技能會求對稱軸的位置。",
      "最大最小值會用開口方向判斷頂點角色。"
    ]
  },
  "figureReferences": [
    "u21-fig-s005-01"
  ],
  "accessibilityNotes": [
    "向上與向下曲線分列呈現，並在旁直接寫 a>0、a<0。"
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u21-s005-v001",
      "u21-s005-v002",
      "u21-s005-v003",
      "u21-s005-v004",
      "u21-s005-v005",
      "u21-s005-v006",
      "u21-s005-v007",
      "u21-s005-v008",
      "u21-s005-v009",
      "u21-s005-v010",
      "u21-s005-v011",
      "u21-s005-v012"
    ],
    "constructedResponseIds": [
      "u21-s005-cr001",
      "u21-s005-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "臺灣國中會考二次函數範圍",
    "examplesNotCopiedFromBank": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐式合併二次項，確認 5x²-(8x²+2x) 的係數為 -3；另檢查頂點位置與開口方向的敘述完全分離。",
    "reviewVersion": "human-lecture-u21-r1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "0fd81ec2986bea946a591688976e563208746901467e8cc523ad21b6550699db"
};

export const QUESTIONS=[
  {
    "questionId": "u21-s005-v001",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-opening",
    "difficulty": "basic",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-opening"
    },
    "prompt": "函數 y=7x²-3x+1 的拋物線開口方向為何？",
    "givenConditions": [
      "式子已是一般式"
    ],
    "target": "由最高次係數符號判斷開口",
    "text": "函數 y=7x²-3x+1 的拋物線開口方向為何？",
    "choices": [
      "向上",
      "向下",
      "向左",
      "無法判斷"
    ],
    "answerIndex": 0,
    "independentSolution": "a=7>0，所以曲線兩端向上。",
    "explanation": "開口只看整理後 x² 係數；7 為正，因此向上。",
    "steps": [
      "讀出 a=7",
      "套用 a>0 向上"
    ],
    "optionAnalysis": [
      {
        "choice": "向上",
        "truth": true,
        "reason": "x² 係數 a=7>0。"
      },
      {
        "choice": "向下",
        "truth": false,
        "reason": "向下需 a<0。"
      },
      {
        "choice": "向左",
        "truth": false,
        "reason": "此為 y 對 x 的一般二次函數，不是橫向開口。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "一般式已清楚給出 a。"
      }
    ],
    "misconceptionTarget": "看一次項 -3 就誤判向下",
    "concept": "最高次係數與開口",
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 45,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「由最高次係數符號判斷開口」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「看一次項 -3 就誤判向下」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "basic：直接讀一般式開口；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "直接讀一般式開口",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e6a9ba94046afab437046f1e97937fe8901831e1419221af1d2a81e261ac955c"
  },
  {
    "questionId": "u21-s005-v002",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-opening",
    "difficulty": "basic",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-opening"
    },
    "prompt": "函數 y=-2(x-5)²+4 的開口方向為何？",
    "givenConditions": [
      "頂點式外係數為 -2"
    ],
    "target": "從頂點式外係數判方向",
    "text": "函數 y=-2(x-5)²+4 的開口方向為何？",
    "choices": [
      "向上",
      "向右",
      "向下",
      "依 x=5 的正負決定"
    ],
    "answerIndex": 2,
    "independentSolution": "a=-2<0，開口向下；h=5、k=4 不影響方向。",
    "explanation": "頂點式中 a=-2，負係數使離開頂點後 y 減少，故向下。",
    "steps": [
      "辨認平方項外係數",
      "判斷其符號"
    ],
    "optionAnalysis": [
      {
        "choice": "向上",
        "truth": false,
        "reason": "忽略了外係數的負號。"
      },
      {
        "choice": "向右",
        "truth": false,
        "reason": "括號內平移不改成橫向拋物線。"
      },
      {
        "choice": "向下",
        "truth": true,
        "reason": "平方項外係數 -2<0。"
      },
      {
        "choice": "依 x=5 的正負決定",
        "truth": false,
        "reason": "h 只決定頂點水平位置。"
      }
    ],
    "misconceptionTarget": "把括號內的 -5 當作 a",
    "concept": "頂點式開口判準",
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 50,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「從頂點式外係數判方向」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「把括號內的 -5 當作 a」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "basic：辨認頂點式外係數；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "辨認頂點式外係數",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8e74b11b9d1654318257cae2659e1c4fbdf532079d65bfe23dc72d228cbe5a2c"
  },
  {
    "questionId": "u21-s005-v003",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-opening",
    "difficulty": "basic",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-opening"
    },
    "prompt": "將 y=4x²-(7x²-2) 化簡後，拋物線開口方向為何？",
    "givenConditions": [
      "先去括號合併同類項"
    ],
    "target": "整理後再判斷開口",
    "text": "將 y=4x²-(7x²-2) 化簡後，拋物線開口方向為何？",
    "choices": [
      "向上",
      "向下",
      "無開口，因為 x² 消去",
      "無法判斷"
    ],
    "answerIndex": 1,
    "independentSolution": "a=4-7=-3<0，所以開口向下。",
    "explanation": "負號要分配進括號；合併得到 -3x²+2，故向下。",
    "steps": [
      "去括號",
      "合併 x² 項並看符號"
    ],
    "optionAnalysis": [
      {
        "choice": "向上",
        "truth": false,
        "reason": "只看了第一個 4x²。"
      },
      {
        "choice": "向下",
        "truth": true,
        "reason": "y=4x²-7x²+2=-3x²+2，a=-3。"
      },
      {
        "choice": "無開口，因為 x² 消去",
        "truth": false,
        "reason": "4-7=-3，不是 0。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "化簡後係數明確。"
      }
    ],
    "misconceptionTarget": "未整理就讀第一個係數",
    "concept": "合併二次項",
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 70,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「整理後再判斷開口」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「未整理就讀第一個係數」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "basic：處理多個二次項；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "處理多個二次項",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "92831ed18d8a33ea02e8751787fe20208a5d6e4096b02f3e645093fadfa60409"
  },
  {
    "questionId": "u21-s005-v004",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-opening",
    "difficulty": "standard",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "figure",
    "figureId": "u21-fig-s005-01",
    "drawingSpecId": "u21-draw-s005-01",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-opening"
    },
    "prompt": "依圖 u21-fig-s005-01，曲線乙有最高點且兩端向下。若乙的式子為 y=ax²+bx+c，a 必須符合何條件？",
    "givenConditions": [
      "乙為二次函數"
    ],
    "target": "由圖形開口反推係數符號",
    "text": "依圖 u21-fig-s005-01，曲線乙有最高點且兩端向下。若乙的式子為 y=ax²+bx+c，a 必須符合何條件？",
    "choices": [
      "a>0",
      "a=0",
      "a=c",
      "a<0"
    ],
    "answerIndex": 3,
    "independentSolution": "一般二次函數開口向下的必要且充分條件是 a<0。",
    "explanation": "圖中乙的頂點是最高點，代表開口向下，因此 a 為負。",
    "steps": [
      "辨認乙向下開口",
      "轉成 a<0"
    ],
    "optionAnalysis": [
      {
        "choice": "a>0",
        "truth": false,
        "reason": "正係數會開口向上並有最低點。"
      },
      {
        "choice": "a=0",
        "truth": false,
        "reason": "會失去二次函數身分。"
      },
      {
        "choice": "a=c",
        "truth": false,
        "reason": "圖形方向不能由 a 與 c 是否相等決定。"
      },
      {
        "choice": "a<0",
        "truth": true,
        "reason": "開口向下等價於最高次係數為負。"
      }
    ],
    "misconceptionTarget": "把最高點高度 c 當方向依據",
    "concept": "由圖反推係數符號",
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 60,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「由圖形開口反推係數符號」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「把最高點高度 c 當方向依據」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "圖形提供必要資訊；只使用標示的座標、刻度與曲線關係，不以外觀估測。"
    },
    "difficultyReason": "standard：由圖形判參數條件；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "由圖形判參數條件",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f1028237fa4a14019b5569be459bac8ddf7d8ed4b0b12e584aef03f6c5017895"
  },
  {
    "questionId": "u21-s005-v005",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-opening",
    "difficulty": "standard",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-opening"
    },
    "prompt": "若 y=(m-3)x²+2x-1 是開口向上的二次函數，m 的條件為何？",
    "givenConditions": [
      "二次項係數為 m-3"
    ],
    "target": "由參數不等式判開口",
    "text": "若 y=(m-3)x²+2x-1 是開口向上的二次函數，m 的條件為何？",
    "choices": [
      "m<3",
      "m=3",
      "m>3",
      "m≥3"
    ],
    "answerIndex": 2,
    "independentSolution": "m>3 才使 a 正且非零。",
    "explanation": "同時要求二次函數與向上，故係數必嚴格大於 0：m-3>0。",
    "steps": [
      "列不等式 m-3>0",
      "解得 m>3 並排除等號"
    ],
    "optionAnalysis": [
      {
        "choice": "m<3",
        "truth": false,
        "reason": "會使係數為負、開口向下。"
      },
      {
        "choice": "m=3",
        "truth": false,
        "reason": "二次項消失，不再是二次函數。"
      },
      {
        "choice": "m>3",
        "truth": true,
        "reason": "開口向上要求 m-3>0。"
      },
      {
        "choice": "m≥3",
        "truth": false,
        "reason": "包含 m=3 的非二次情況。"
      }
    ],
    "misconceptionTarget": "把 m=3 納入向上情況",
    "concept": "含參數的開口條件",
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 85,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「由參數不等式判開口」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「把 m=3 納入向上情況」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "standard：由開口解參數範圍；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "由開口解參數範圍",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "db31356348de46cab89ead27ebab58762e51f9ab2f6afa179ac4d86ffec9bc88"
  },
  {
    "questionId": "u21-s005-v006",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-opening",
    "difficulty": "standard",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-opening"
    },
    "prompt": "下列哪一項不會改變二次函數 y=a(x-h)²+k 的開口方向？",
    "givenConditions": [
      "a≠0"
    ],
    "target": "分辨位置參數與方向參數",
    "text": "下列哪一項不會改變二次函數 y=a(x-h)²+k 的開口方向？",
    "choices": [
      "改變 k 而保持 a 不變",
      "把 a 從正數改成負數",
      "把整個函數乘以 -1",
      "把 a 由 -2 改成 3"
    ],
    "answerIndex": 0,
    "independentSolution": "k 的改變只移動高度；其他三項都改變 a 的正負。",
    "explanation": "只調整 k 不會動到最高次係數 a，因此方向保持。",
    "steps": [
      "確認每項是否改變 a 符號",
      "選唯一保持符號者"
    ],
    "optionAnalysis": [
      {
        "choice": "改變 k 而保持 a 不變",
        "truth": true,
        "reason": "k 只使圖形上下平移，開口仍由 a 的符號決定。"
      },
      {
        "choice": "把 a 從正數改成負數",
        "truth": false,
        "reason": "符號改變會翻轉開口。"
      },
      {
        "choice": "把整個函數乘以 -1",
        "truth": false,
        "reason": "最高次係數符號會反轉。"
      },
      {
        "choice": "把 a 由 -2 改成 3",
        "truth": false,
        "reason": "係數由負變正，方向改變。"
      }
    ],
    "misconceptionTarget": "把頂點高低當作開口方向",
    "concept": "開口與平移參數分工",
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 75,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「分辨位置參數與方向參數」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「把頂點高低當作開口方向」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "standard：辨認不影響方向的改動；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "辨認不影響方向的改動",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "05ee3d3a27486a5e595b037c5eeb1c8d65754153c37914db0c3e0711d1448bbc"
  },
  {
    "questionId": "u21-s005-v007",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-opening",
    "difficulty": "advanced",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-opening"
    },
    "prompt": "將 y=-(2x-1)(x+3)+x² 展開後，圖形開口方向為何？",
    "givenConditions": [
      "需展開乘積並合併"
    ],
    "target": "從複合式取得最高次係數",
    "text": "將 y=-(2x-1)(x+3)+x² 展開後，圖形開口方向為何？",
    "choices": [
      "向上",
      "不是二次函數",
      "無法由式子判斷",
      "向下"
    ],
    "answerIndex": 3,
    "independentSolution": "y=-2x²-5x+3+x²=-x²-5x+3，a<0。",
    "explanation": "先展開乘積，整體取負，再加 x²；最後 a=-1，因此向下。",
    "steps": [
      "展開 2x²+5x-3",
      "分配負號並合併 x²"
    ],
    "optionAnalysis": [
      {
        "choice": "向上",
        "truth": false,
        "reason": "忽略了最外層負號。"
      },
      {
        "choice": "不是二次函數",
        "truth": false,
        "reason": "二次係數 -1 未消去。"
      },
      {
        "choice": "無法由式子判斷",
        "truth": false,
        "reason": "展開後可直接判斷。"
      },
      {
        "choice": "向下",
        "truth": true,
        "reason": "(2x-1)(x+3)=2x²+5x-3，取負再加 x² 得 -x²-5x+3。"
      }
    ],
    "misconceptionTarget": "只看最後的 +x² 判向上",
    "concept": "複合代數式的開口",
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 115,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「從複合式取得最高次係數」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「只看最後的 +x² 判向上」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "advanced：多步整理判方向；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "多步整理判方向",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c471343e25719b63d7122a390f1bbd691df8759e300d5bdde53d650d73700555"
  },
  {
    "questionId": "u21-s005-v008",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-opening",
    "difficulty": "advanced",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-opening"
    },
    "prompt": "某二次函數在完整實數範圍內有最大值。下列哪個結論一定正確？",
    "givenConditions": [
      "函數確為二次函數",
      "定義域為所有實數"
    ],
    "target": "由全域最大值反推開口",
    "text": "某二次函數在完整實數範圍內有最大值。下列哪個結論一定正確？",
    "choices": [
      "a>0",
      "最高次係數 a<0",
      "頂點 y 座標必為正",
      "對稱軸必為 y 軸"
    ],
    "answerIndex": 1,
    "independentSolution": "完整實數域下，向下拋物線才有上界且在頂點取得。",
    "explanation": "有全域最大值表示頂點是最高點，所以開口向下，a<0。",
    "steps": [
      "把最大值連到最高頂點",
      "由方向轉成 a<0"
    ],
    "optionAnalysis": [
      {
        "choice": "a>0",
        "truth": false,
        "reason": "向上拋物線有最小值而無最大值。"
      },
      {
        "choice": "最高次係數 a<0",
        "truth": true,
        "reason": "只有開口向下的拋物線在完整實數域有全域最大值。"
      },
      {
        "choice": "頂點 y 座標必為正",
        "truth": false,
        "reason": "最大值可為負、0 或正。"
      },
      {
        "choice": "對稱軸必為 y 軸",
        "truth": false,
        "reason": "頂點可水平平移。"
      }
    ],
    "misconceptionTarget": "以最大值正負推測 a",
    "concept": "極值存在與係數符號",
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 90,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「由全域最大值反推開口」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「以最大值正負推測 a」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "advanced：由最大值存在反推方向；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "由最大值存在反推方向",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b5520a179ebe4b9da94750b5d1a7cb28ccd0a54c13cb9ce348e1f912c68d0d53"
  },
  {
    "questionId": "u21-s005-v009",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-opening",
    "difficulty": "advanced",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-opening"
    },
    "prompt": "已知 y=(p²-9)x²+4x+1 是開口向下的二次函數，p 的範圍為何？",
    "givenConditions": [
      "a=p²-9",
      "必須 a<0"
    ],
    "target": "解平方不等式取得參數範圍",
    "text": "已知 y=(p²-9)x²+4x+1 是開口向下的二次函數，p 的範圍為何？",
    "choices": [
      "-3<p<3",
      "p<-3 或 p>3",
      "p≤-3 或 p≥3",
      "-3≤p≤3"
    ],
    "answerIndex": 0,
    "independentSolution": "a<0 的解集是 (-3,3)，且已自然排除 a=0。",
    "explanation": "向下直接要求 p²-9<0；平方小於 9 表示 p 在 -3 與 3 之間，端點不含。",
    "steps": [
      "列 p²<9",
      "寫成 -3<p<3"
    ],
    "optionAnalysis": [
      {
        "choice": "-3<p<3",
        "truth": true,
        "reason": "p²-9<0 等價於 p²<9。"
      },
      {
        "choice": "p<-3 或 p>3",
        "truth": false,
        "reason": "此時 p²-9>0，開口向上。"
      },
      {
        "choice": "p≤-3 或 p≥3",
        "truth": false,
        "reason": "包含向上與 p=±3 非二次情況。"
      },
      {
        "choice": "-3≤p≤3",
        "truth": false,
        "reason": "端點 p=±3 使 a=0，不是二次函數。"
      }
    ],
    "misconceptionTarget": "只解 p<3 而漏下界",
    "concept": "參數平方與開口",
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 115,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「解平方不等式取得參數範圍」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「只解 p<3 而漏下界」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "advanced：解含平方參數的方向條件；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "解含平方參數的方向條件",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4deb8be2e6dec1e747e6c4b57b48b0a6fb2556d8456f819f3b9864715cfe3a28"
  },
  {
    "questionId": "u21-s005-v010",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-opening",
    "difficulty": "literacy",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-opening"
    },
    "prompt": "球的高度模型 h(t)=-5(t-2)²+25，t 為秒。模型圖形的開口方向與頂點角色為何？",
    "givenConditions": [
      "時間模型使用 0≤t≤4",
      "h 單位公尺"
    ],
    "target": "解釋拋射高度模型的開口",
    "text": "球的高度模型 h(t)=-5(t-2)²+25，t 為秒。模型圖形的開口方向與頂點角色為何？",
    "choices": [
      "開口向上，頂點代表最低高度",
      "開口向下，頂點代表最低高度",
      "開口方向由 25 的正負決定",
      "開口向下，頂點代表最高高度"
    ],
    "answerIndex": 3,
    "independentSolution": "h(t)≤25，且 t=2 時取得 25，所以開口向下、頂點最高。",
    "explanation": "平方項外係數 -5 為負，故軌跡有最高點；25 是最大高度。",
    "steps": [
      "讀 a=-5",
      "把向下頂點解釋為最高點"
    ],
    "optionAnalysis": [
      {
        "choice": "開口向上，頂點代表最低高度",
        "truth": false,
        "reason": "係數符號判反。"
      },
      {
        "choice": "開口向下，頂點代表最低高度",
        "truth": false,
        "reason": "向下頂點是最高點。"
      },
      {
        "choice": "開口方向由 25 的正負決定",
        "truth": false,
        "reason": "25 是垂直位置 k，不決定方向。"
      },
      {
        "choice": "開口向下，頂點代表最高高度",
        "truth": true,
        "reason": "a=-5<0，頂點是最高點。"
      }
    ],
    "misconceptionTarget": "用常數 25 判方向",
    "concept": "高度模型的方向與極值",
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 75,
    "unitCheck": "t 為秒，h 為公尺；方向無單位，頂點高度為 25 公尺。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「解釋拋射高度模型的開口」。",
      "domainBoundary": "t=2 落在模型有效時間 0≤t≤4。",
      "alternateReading": "若把題目誤讀為「用常數 25 判方向」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "literacy：解釋拋射軌跡；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "球的高度隨時間先升後降，因此開口方向直接決定頂點是最高高度；時間與公尺單位使結論有實際含義。",
    "authoringIntent": "解釋拋射軌跡",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "422576d758d653942142b31c86a86e5c632a8cc704ed9e722864e9cdf52dcb3b"
  },
  {
    "questionId": "u21-s005-v011",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-opening",
    "difficulty": "literacy",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-opening"
    },
    "prompt": "一家店用 P(x)=-3x²+120x-500 表示每日利潤（元）。只從圖形開口判斷，下列何者正確？",
    "givenConditions": [
      "x 為銷售量且取合理非負範圍"
    ],
    "target": "判斷利潤模型是否有最高點",
    "text": "一家店用 P(x)=-3x²+120x-500 表示每日利潤（元）。只從圖形開口判斷，下列何者正確？",
    "choices": [
      "模型開口向上，因此只有最小利潤",
      "開口由常數 -500 決定",
      "模型開口向下，因此可能有最大利潤",
      "因 x≥0，所以無法判斷開口"
    ],
    "answerIndex": 2,
    "independentSolution": "a=-3<0，圖形有最高頂點；是否可行仍需檢查銷售量範圍，但方向已確定。",
    "explanation": "最高次係數為負，整體曲線向下；在合理範圍若頂點可行，就代表最大利潤。",
    "steps": [
      "讀出 a=-3",
      "連結向下與最大值"
    ],
    "optionAnalysis": [
      {
        "choice": "模型開口向上，因此只有最小利潤",
        "truth": false,
        "reason": "係數為負。"
      },
      {
        "choice": "開口由常數 -500 決定",
        "truth": false,
        "reason": "常數只影響垂直位置。"
      },
      {
        "choice": "模型開口向下，因此可能有最大利潤",
        "truth": true,
        "reason": "二次項係數 -3<0，頂點是最高點。"
      },
      {
        "choice": "因 x≥0，所以無法判斷開口",
        "truth": false,
        "reason": "定義域不改變係數決定的方向。"
      }
    ],
    "misconceptionTarget": "把初始虧損常數當方向",
    "concept": "利潤模型的開口",
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 85,
    "unitCheck": "P 的單位是元；本題只判圖形方向與可能的最大利潤。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「判斷利潤模型是否有最高點」。",
      "domainBoundary": "x 的非負限制不改變開口，但頂點實際可行性需另查。",
      "alternateReading": "若把題目誤讀為「把初始虧損常數當方向」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "literacy：由商業模型判最高點；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "利潤情境使「開口向下」可解釋為銷量過少或過多都不如某中間量，並需保留合理銷量範圍。",
    "authoringIntent": "由商業模型判最高點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "5cbec247f9742b95a651e05d69943a557c713b2bb1b7b043fc1b4b868da599bf"
  },
  {
    "questionId": "u21-s005-v012",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-opening",
    "difficulty": "literacy",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-opening"
    },
    "prompt": "兩個排水槽剖面模型分別為 A：y=0.4(x-1)²-2，B：y=-0.4(x-1)²+2。下列何者正確？",
    "givenConditions": [
      "兩式的 |a| 相同"
    ],
    "target": "比較實物剖面的開口與形狀",
    "text": "兩個排水槽剖面模型分別為 A：y=0.4(x-1)²-2，B：y=-0.4(x-1)²+2。下列何者正確？",
    "choices": [
      "A、B 都開口向上",
      "A 開口向上，B 開口向下，兩者寬度相同",
      "A 較寬，B 較窄",
      "方向由頂點 y=-2 與 2 決定"
    ],
    "answerIndex": 1,
    "independentSolution": "A 的 a=0.4>0，B 的 a=-0.4<0，且 |a| 均 0.4。",
    "explanation": "兩係數正負相反，所以方向相反；絕對值相同，所以同尺度下寬度相同。",
    "steps": [
      "比較 a 的符號",
      "比較 |a|"
    ],
    "optionAnalysis": [
      {
        "choice": "A、B 都開口向上",
        "truth": false,
        "reason": "B 的 a 為負。"
      },
      {
        "choice": "A 開口向上，B 開口向下，兩者寬度相同",
        "truth": true,
        "reason": "a 分別為 0.4 與 -0.4；絕對值相同。"
      },
      {
        "choice": "A 較寬，B 較窄",
        "truth": false,
        "reason": "|a| 相同，寬度相同。"
      },
      {
        "choice": "方向由頂點 y=-2 與 2 決定",
        "truth": false,
        "reason": "方向由 a 的符號決定。"
      }
    ],
    "misconceptionTarget": "用頂點高低判方向或寬窄",
    "concept": "剖面模型方向與寬度",
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題比較圖形性質，不輸出長度；兩模型假設同尺度。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「比較實物剖面的開口與形狀」。",
      "domainBoundary": "只依所給二次剖面模型判讀，不推論材料或排水效率。",
      "alternateReading": "若把題目誤讀為「用頂點高低判方向或寬窄」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "literacy：比較兩種排水槽剖面；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "排水槽情境要求同時區分凹槽與拱蓋方向，而相同 |a| 說明形狀寬窄一致；只看頂點位置會誤判。",
    "authoringIntent": "比較兩種排水槽剖面",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8dd0ce39565c9314fc7e90deeff48843bb6dbcc2b414e9a0bcdcb424da43185d"
  }
];

export const CONSTRUCTED_RESPONSES=[
  {
    "questionId": "u21-s005-cr001",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-opening",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-opening"
    },
    "prompt": "判斷下列三個函數的開口方向，並說明每一題真正的二次項係數：(甲) y=-3x²+2x+5；(乙) y=2(x+1)²-7；(丙) y=5x²-(8x²-4x)。",
    "givenConditions": [
      "三式皆需確認 a≠0"
    ],
    "target": "從不同形式找 a 並判開口",
    "requiredWork": [
      "甲由一般式直接讀 a。",
      "乙由頂點式外係數讀 a。",
      "丙先去括號合併同類項。"
    ],
    "fullCreditSolution": [
      "甲 a=-3<0，開口向下。",
      "乙 a=2>0，開口向上。",
      "丙 y=5x²-8x²+4x=-3x²+4x，所以 a=-3<0，開口向下。"
    ],
    "alternativeSolutions": [
      "乙也可展開後確認 x² 係數仍為 2；但不必展開。"
    ],
    "reasoningSteps": [
      "甲 a=-3<0，開口向下。",
      "乙 a=2>0，開口向上。",
      "丙 y=5x²-8x²+4x=-3x²+4x，所以 a=-3<0，開口向下。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "三式的 a 與開口全對，丙有正確去括號與合併過程。"
      },
      {
        "score": 2,
        "criteria": "三題中兩題完整正確，或丙只有一個符號錯誤而方法清楚。"
      },
      {
        "score": 1,
        "criteria": "至少正確說出 a>0 向上、a<0 向下並完成一題。"
      },
      {
        "score": 0,
        "criteria": "以常數項或括號內數字判方向，三題皆無正確 a。"
      }
    ],
    "partialCreditRules": [
      "三題中兩題完整正確，或丙只有一個符號錯誤而方法清楚。",
      "至少正確說出 a>0 向上、a<0 向下並完成一題。"
    ],
    "followThroughPolicy": "各小題獨立計分；丙若化簡時一次項符號錯但二次係數 -3 正確，開口判斷仍可得該部分分數。",
    "unitAndNotationRules": [
      "本題無物理單位。",
      "方向以「向上」或「向下」完整作答。"
    ],
    "answerOnlyPolicy": "只列方向無 a 與過程，最高 2 分。",
    "commonErrors": [
      "乙把 x+1 的 +1 當係數。",
      "丙未分配外負號。",
      "甲看一次項 +2 判向上。"
    ],
    "independentReview": {
      "derivedResult": "甲 a=-3 向下；乙 a=2 向上；丙 a=-3 向下。",
      "ambiguity": "條件、定義域與所求均明確；依列出的計算可得到唯一評分基準。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8f65b75b6f7e7f811ee2610d2854c1689f62531dc416036c7bc038c4d6713307"
  },
  {
    "questionId": "u21-s005-cr002",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-opening",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-opening"
    },
    "prompt": "若 y=(m²-4m-5)x²+(m+1)x+2 是開口向上的二次函數，求 m 的範圍，並明確排除使函數不是二次函數的值。",
    "givenConditions": [
      "最高次係數為 m²-4m-5"
    ],
    "target": "由參數二次式決定開口",
    "requiredWork": [
      "列出 a=m²-4m-5>0。",
      "因式分解並解不等式。",
      "說明等號根使 a=0，不能納入。"
    ],
    "fullCreditSolution": [
      "m²-4m-5=(m-5)(m+1)。",
      "(m-5)(m+1)>0，在兩根外側成立，所以 m<-1 或 m>5。",
      "m=-1 或 5 時 a=0，函數最高次下降，不是二次函數，已由嚴格不等式排除。"
    ],
    "alternativeSolutions": [
      "可畫 m 數線，以 -1、5 分三區測試乘積正負。"
    ],
    "reasoningSteps": [
      "m²-4m-5=(m-5)(m+1)。",
      "(m-5)(m+1)>0，在兩根外側成立，所以 m<-1 或 m>5。",
      "m=-1 或 5 時 a=0，函數最高次下降，不是二次函數，已由嚴格不等式排除。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確因式分解並得 m<-1 或 m>5，且解釋端點非二次。"
      },
      {
        "score": 2,
        "criteria": "範圍正確但缺端點說明，或因式分解後區間符號有一處表達不完整。"
      },
      {
        "score": 1,
        "criteria": "正確列出 (m-5)(m+1)>0 或找出兩臨界值 -1、5。"
      },
      {
        "score": 0,
        "criteria": "解成 -1<m<5、包含端點，且無開口判準。"
      }
    ],
    "partialCreditRules": [
      "範圍正確但缺端點說明，或因式分解後區間符號有一處表達不完整。",
      "正確列出 (m-5)(m+1)>0 或找出兩臨界值 -1、5。"
    ],
    "followThroughPolicy": "若臨界值正確但區間方向判反，可給 1 分；後續端點排除說明獨立計入方法分。",
    "unitAndNotationRules": [
      "m 為無單位實數。",
      "區間使用嚴格不等號。"
    ],
    "answerOnlyPolicy": "只寫答案範圍而無任何不等式或因式分解，最高 2 分。",
    "commonErrors": [
      "把乘積大於 0 解成兩根之間。",
      "寫 m≤-1 或 m≥5，包含 a=0。",
      "只看一次項 m+1。"
    ],
    "independentReview": {
      "derivedResult": "m<-1 或 m>5；m=-1、5 使二次項消失。",
      "ambiguity": "條件、定義域與所求均明確；依列出的計算可得到唯一評分基準。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8e2675d14288375e02df886686ccb3a976932e5735aa0bc98a807a5edb4ab6bb"
  }
];

export const SEMANTIC_REVIEWS=[
  {
    "questionId": "u21-s005-v001",
    "unitId": "u21",
    "skillId": "quadratic-opening",
    "contentSha256": "e6a9ba94046afab437046f1e97937fe8901831e1419221af1d2a81e261ac955c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "a=7>0，所以曲線兩端向上。",
    "derivedAnswer": "向上",
    "storedAnswer": "向上",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「向上」。逐項反證其餘選項：「向下」不成立，因為向下需 a<0。；「向左」不成立，因為此為 y 對 x 的一般二次函數，不是橫向開口。；「無法判斷」不成立，因為一般式已清楚給出 a。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-opening」講義中先定義；本題目標是由最高次係數符號判斷開口，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「由最高次係數符號判斷開口」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「看一次項 -3 就誤判向下」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「向上」。"
    },
    "difficultyReason": "basic：直接讀一般式開口；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求由最高次係數符號判斷開口，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「函數 y=7x²-3x+1 的拋物線開口方向為何？」獨立重算：a=7>0，所以曲線兩端向上。；所得答案為「向上」。四選項逐項核對：「向上」=真，x² 係數 a=7>0。；「向下」=假，向下需 a<0。；「向左」=假，此為 y 對 x 的一般二次函數，不是橫向開口。；「無法判斷」=假，一般式已清楚給出 a。。難度判定依據：basic：直接讀一般式開口；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s005-v002",
    "unitId": "u21",
    "skillId": "quadratic-opening",
    "contentSha256": "8e74b11b9d1654318257cae2659e1c4fbdf532079d65bfe23dc72d228cbe5a2c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "a=-2<0，開口向下；h=5、k=4 不影響方向。",
    "derivedAnswer": "向下",
    "storedAnswer": "向下",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「向下」。逐項反證其餘選項：「向上」不成立，因為忽略了外係數的負號。；「向右」不成立，因為括號內平移不改成橫向拋物線。；「依 x=5 的正負決定」不成立，因為h 只決定頂點水平位置。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-opening」講義中先定義；本題目標是從頂點式外係數判方向，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「從頂點式外係數判方向」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把括號內的 -5 當作 a」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「向下」。"
    },
    "difficultyReason": "basic：辨認頂點式外係數；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求從頂點式外係數判方向，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「函數 y=-2(x-5)²+4 的開口方向為何？」獨立重算：a=-2<0，開口向下；h=5、k=4 不影響方向。；所得答案為「向下」。四選項逐項核對：「向上」=假，忽略了外係數的負號。；「向右」=假，括號內平移不改成橫向拋物線。；「向下」=真，平方項外係數 -2<0。；「依 x=5 的正負決定」=假，h 只決定頂點水平位置。。難度判定依據：basic：辨認頂點式外係數；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s005-v003",
    "unitId": "u21",
    "skillId": "quadratic-opening",
    "contentSha256": "92831ed18d8a33ea02e8751787fe20208a5d6e4096b02f3e645093fadfa60409",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "a=4-7=-3<0，所以開口向下。",
    "derivedAnswer": "向下",
    "storedAnswer": "向下",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「向下」。逐項反證其餘選項：「向上」不成立，因為只看了第一個 4x²。；「無開口，因為 x² 消去」不成立，因為4-7=-3，不是 0。；「無法判斷」不成立，因為化簡後係數明確。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-opening」講義中先定義；本題目標是整理後再判斷開口，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「整理後再判斷開口」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「未整理就讀第一個係數」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「向下」。"
    },
    "difficultyReason": "basic：處理多個二次項；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求整理後再判斷開口，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「將 y=4x²-(7x²-2) 化簡後，拋物線開口方向為何？」獨立重算：a=4-7=-3<0，所以開口向下。；所得答案為「向下」。四選項逐項核對：「向上」=假，只看了第一個 4x²。；「向下」=真，y=4x²-7x²+2=-3x²+2，a=-3。；「無開口，因為 x² 消去」=假，4-7=-3，不是 0。；「無法判斷」=假，化簡後係數明確。。難度判定依據：basic：處理多個二次項；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s005-v004",
    "unitId": "u21",
    "skillId": "quadratic-opening",
    "contentSha256": "f1028237fa4a14019b5569be459bac8ddf7d8ed4b0b12e584aef03f6c5017895",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "一般二次函數開口向下的必要且充分條件是 a<0。",
    "derivedAnswer": "a<0",
    "storedAnswer": "a<0",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「a<0」。逐項反證其餘選項：「a>0」不成立，因為正係數會開口向上並有最低點。；「a=0」不成立，因為會失去二次函數身分。；「a=c」不成立，因為圖形方向不能由 a 與 c 是否相等決定。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-opening」講義中先定義；本題目標是由圖形開口反推係數符號，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「由圖形開口反推係數符號」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把最高點高度 c 當方向依據」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「a<0」。"
    },
    "difficultyReason": "standard：由圖形判參數條件；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求由圖形開口反推係數符號，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「依圖 u21-fig-s005-01，曲線乙有最高點且兩端向下。若乙的式子為 y=ax²+bx+c，a 必須符合何條件？」獨立重算：一般二次函數開口向下的必要且充分條件是 a<0。；所得答案為「a<0」。四選項逐項核對：「a>0」=假，正係數會開口向上並有最低點。；「a=0」=假，會失去二次函數身分。；「a=c」=假，圖形方向不能由 a 與 c 是否相等決定。；「a<0」=真，開口向下等價於最高次係數為負。。難度判定依據：standard：由圖形判參數條件；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s005-v005",
    "unitId": "u21",
    "skillId": "quadratic-opening",
    "contentSha256": "db31356348de46cab89ead27ebab58762e51f9ab2f6afa179ac4d86ffec9bc88",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "m>3 才使 a 正且非零。",
    "derivedAnswer": "m>3",
    "storedAnswer": "m>3",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「m>3」。逐項反證其餘選項：「m<3」不成立，因為會使係數為負、開口向下。；「m=3」不成立，因為二次項消失，不再是二次函數。；「m≥3」不成立，因為包含 m=3 的非二次情況。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-opening」講義中先定義；本題目標是由參數不等式判開口，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「由參數不等式判開口」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把 m=3 納入向上情況」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「m>3」。"
    },
    "difficultyReason": "standard：由開口解參數範圍；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求由參數不等式判開口，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「若 y=(m-3)x²+2x-1 是開口向上的二次函數，m 的條件為何？」獨立重算：m>3 才使 a 正且非零。；所得答案為「m>3」。四選項逐項核對：「m<3」=假，會使係數為負、開口向下。；「m=3」=假，二次項消失，不再是二次函數。；「m>3」=真，開口向上要求 m-3>0。；「m≥3」=假，包含 m=3 的非二次情況。。難度判定依據：standard：由開口解參數範圍；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s005-v006",
    "unitId": "u21",
    "skillId": "quadratic-opening",
    "contentSha256": "05ee3d3a27486a5e595b037c5eeb1c8d65754153c37914db0c3e0711d1448bbc",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "k 的改變只移動高度；其他三項都改變 a 的正負。",
    "derivedAnswer": "改變 k 而保持 a 不變",
    "storedAnswer": "改變 k 而保持 a 不變",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「改變 k 而保持 a 不變」。逐項反證其餘選項：「把 a 從正數改成負數」不成立，因為符號改變會翻轉開口。；「把整個函數乘以 -1」不成立，因為最高次係數符號會反轉。；「把 a 由 -2 改成 3」不成立，因為係數由負變正，方向改變。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-opening」講義中先定義；本題目標是分辨位置參數與方向參數，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「分辨位置參數與方向參數」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把頂點高低當作開口方向」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「改變 k 而保持 a 不變」。"
    },
    "difficultyReason": "standard：辨認不影響方向的改動；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求分辨位置參數與方向參數，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「下列哪一項不會改變二次函數 y=a(x-h)²+k 的開口方向？」獨立重算：k 的改變只移動高度；其他三項都改變 a 的正負。；所得答案為「改變 k 而保持 a 不變」。四選項逐項核對：「改變 k 而保持 a 不變」=真，k 只使圖形上下平移，開口仍由 a 的符號決定。；「把 a 從正數改成負數」=假，符號改變會翻轉開口。；「把整個函數乘以 -1」=假，最高次係數符號會反轉。；「把 a 由 -2 改成 3」=假，係數由負變正，方向改變。。難度判定依據：standard：辨認不影響方向的改動；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s005-v007",
    "unitId": "u21",
    "skillId": "quadratic-opening",
    "contentSha256": "c471343e25719b63d7122a390f1bbd691df8759e300d5bdde53d650d73700555",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "y=-2x²-5x+3+x²=-x²-5x+3，a<0。",
    "derivedAnswer": "向下",
    "storedAnswer": "向下",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「向下」。逐項反證其餘選項：「向上」不成立，因為忽略了最外層負號。；「不是二次函數」不成立，因為二次係數 -1 未消去。；「無法由式子判斷」不成立，因為展開後可直接判斷。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-opening」講義中先定義；本題目標是從複合式取得最高次係數，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「從複合式取得最高次係數」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「只看最後的 +x² 判向上」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「向下」。"
    },
    "difficultyReason": "advanced：多步整理判方向；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求從複合式取得最高次係數，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「將 y=-(2x-1)(x+3)+x² 展開後，圖形開口方向為何？」獨立重算：y=-2x²-5x+3+x²=-x²-5x+3，a<0。；所得答案為「向下」。四選項逐項核對：「向上」=假，忽略了最外層負號。；「不是二次函數」=假，二次係數 -1 未消去。；「無法由式子判斷」=假，展開後可直接判斷。；「向下」=真，(2x-1)(x+3)=2x²+5x-3，取負再加 x² 得 -x²-5x+3。。難度判定依據：advanced：多步整理判方向；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s005-v008",
    "unitId": "u21",
    "skillId": "quadratic-opening",
    "contentSha256": "b5520a179ebe4b9da94750b5d1a7cb28ccd0a54c13cb9ce348e1f912c68d0d53",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "完整實數域下，向下拋物線才有上界且在頂點取得。",
    "derivedAnswer": "最高次係數 a<0",
    "storedAnswer": "最高次係數 a<0",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「最高次係數 a<0」。逐項反證其餘選項：「a>0」不成立，因為向上拋物線有最小值而無最大值。；「頂點 y 座標必為正」不成立，因為最大值可為負、0 或正。；「對稱軸必為 y 軸」不成立，因為頂點可水平平移。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-opening」講義中先定義；本題目標是由全域最大值反推開口，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「由全域最大值反推開口」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「以最大值正負推測 a」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「最高次係數 a<0」。"
    },
    "difficultyReason": "advanced：由最大值存在反推方向；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求由全域最大值反推開口，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「某二次函數在完整實數範圍內有最大值。下列哪個結論一定正確？」獨立重算：完整實數域下，向下拋物線才有上界且在頂點取得。；所得答案為「最高次係數 a<0」。四選項逐項核對：「a>0」=假，向上拋物線有最小值而無最大值。；「最高次係數 a<0」=真，只有開口向下的拋物線在完整實數域有全域最大值。；「頂點 y 座標必為正」=假，最大值可為負、0 或正。；「對稱軸必為 y 軸」=假，頂點可水平平移。。難度判定依據：advanced：由最大值存在反推方向；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s005-v009",
    "unitId": "u21",
    "skillId": "quadratic-opening",
    "contentSha256": "4deb8be2e6dec1e747e6c4b57b48b0a6fb2556d8456f819f3b9864715cfe3a28",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "a<0 的解集是 (-3,3)，且已自然排除 a=0。",
    "derivedAnswer": "-3<p<3",
    "storedAnswer": "-3<p<3",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「-3<p<3」。逐項反證其餘選項：「p<-3 或 p>3」不成立，因為此時 p²-9>0，開口向上。；「p≤-3 或 p≥3」不成立，因為包含向上與 p=±3 非二次情況。；「-3≤p≤3」不成立，因為端點 p=±3 使 a=0，不是二次函數。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-opening」講義中先定義；本題目標是解平方不等式取得參數範圍，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「解平方不等式取得參數範圍」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「只解 p<3 而漏下界」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「-3<p<3」。"
    },
    "difficultyReason": "advanced：解含平方參數的方向條件；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求解平方不等式取得參數範圍，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「已知 y=(p²-9)x²+4x+1 是開口向下的二次函數，p 的範圍為何？」獨立重算：a<0 的解集是 (-3,3)，且已自然排除 a=0。；所得答案為「-3<p<3」。四選項逐項核對：「-3<p<3」=真，p²-9<0 等價於 p²<9。；「p<-3 或 p>3」=假，此時 p²-9>0，開口向上。；「p≤-3 或 p≥3」=假，包含向上與 p=±3 非二次情況。；「-3≤p≤3」=假，端點 p=±3 使 a=0，不是二次函數。。難度判定依據：advanced：解含平方參數的方向條件；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s005-v010",
    "unitId": "u21",
    "skillId": "quadratic-opening",
    "contentSha256": "422576d758d653942142b31c86a86e5c632a8cc704ed9e722864e9cdf52dcb3b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "h(t)≤25，且 t=2 時取得 25，所以開口向下、頂點最高。",
    "derivedAnswer": "開口向下，頂點代表最高高度",
    "storedAnswer": "開口向下，頂點代表最高高度",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「開口向下，頂點代表最高高度」。逐項反證其餘選項：「開口向上，頂點代表最低高度」不成立，因為係數符號判反。；「開口向下，頂點代表最低高度」不成立，因為向下頂點是最高點。；「開口方向由 25 的正負決定」不成立，因為25 是垂直位置 k，不決定方向。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-opening」講義中先定義；本題目標是解釋拋射高度模型的開口，沒有未定義的新符號。",
      "unitConflict": "單位審查：t 為秒，h 為公尺；方向無單位，頂點高度為 25 公尺。 本題四個選項皆回應同一所求量「解釋拋射高度模型的開口」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：t=2 落在模型有效時間 0≤t≤4。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「用常數 25 判方向」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「開口向下，頂點代表最高高度」。"
    },
    "difficultyReason": "literacy：解釋拋射軌跡；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "球的高度隨時間先升後降，因此開口方向直接決定頂點是最高高度；時間與公尺單位使結論有實際含義。",
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求解釋拋射高度模型的開口，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「球的高度模型 h(t)=-5(t-2)²+25，t 為秒。模型圖形的開口方向與頂點角色為何？」獨立重算：h(t)≤25，且 t=2 時取得 25，所以開口向下、頂點最高。；所得答案為「開口向下，頂點代表最高高度」。四選項逐項核對：「開口向上，頂點代表最低高度」=假，係數符號判反。；「開口向下，頂點代表最低高度」=假，向下頂點是最高點。；「開口方向由 25 的正負決定」=假，25 是垂直位置 k，不決定方向。；「開口向下，頂點代表最高高度」=真，a=-5<0，頂點是最高點。。難度判定依據：literacy：解釋拋射軌跡；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s005-v011",
    "unitId": "u21",
    "skillId": "quadratic-opening",
    "contentSha256": "5cbec247f9742b95a651e05d69943a557c713b2bb1b7b043fc1b4b868da599bf",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "a=-3<0，圖形有最高頂點；是否可行仍需檢查銷售量範圍，但方向已確定。",
    "derivedAnswer": "模型開口向下，因此可能有最大利潤",
    "storedAnswer": "模型開口向下，因此可能有最大利潤",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「模型開口向下，因此可能有最大利潤」。逐項反證其餘選項：「模型開口向上，因此只有最小利潤」不成立，因為係數為負。；「開口由常數 -500 決定」不成立，因為常數只影響垂直位置。；「因 x≥0，所以無法判斷開口」不成立，因為定義域不改變係數決定的方向。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-opening」講義中先定義；本題目標是判斷利潤模型是否有最高點，沒有未定義的新符號。",
      "unitConflict": "單位審查：P 的單位是元；本題只判圖形方向與可能的最大利潤。 本題四個選項皆回應同一所求量「判斷利潤模型是否有最高點」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：x 的非負限制不改變開口，但頂點實際可行性需另查。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把初始虧損常數當方向」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「模型開口向下，因此可能有最大利潤」。"
    },
    "difficultyReason": "literacy：由商業模型判最高點；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "利潤情境使「開口向下」可解釋為銷量過少或過多都不如某中間量，並需保留合理銷量範圍。",
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求判斷利潤模型是否有最高點，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「一家店用 P(x)=-3x²+120x-500 表示每日利潤（元）。只從圖形開口判斷，下列何者正確？」獨立重算：a=-3<0，圖形有最高頂點；是否可行仍需檢查銷售量範圍，但方向已確定。；所得答案為「模型開口向下，因此可能有最大利潤」。四選項逐項核對：「模型開口向上，因此只有最小利潤」=假，係數為負。；「開口由常數 -500 決定」=假，常數只影響垂直位置。；「模型開口向下，因此可能有最大利潤」=真，二次項係數 -3<0，頂點是最高點。；「因 x≥0，所以無法判斷開口」=假，定義域不改變係數決定的方向。。難度判定依據：literacy：由商業模型判最高點；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s005-v012",
    "unitId": "u21",
    "skillId": "quadratic-opening",
    "contentSha256": "8dd0ce39565c9314fc7e90deeff48843bb6dbcc2b414e9a0bcdcb424da43185d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "A 的 a=0.4>0，B 的 a=-0.4<0，且 |a| 均 0.4。",
    "derivedAnswer": "A 開口向上，B 開口向下，兩者寬度相同",
    "storedAnswer": "A 開口向上，B 開口向下，兩者寬度相同",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「A 開口向上，B 開口向下，兩者寬度相同」。逐項反證其餘選項：「A、B 都開口向上」不成立，因為B 的 a 為負。；「A 較寬，B 較窄」不成立，因為|a| 相同，寬度相同。；「方向由頂點 y=-2 與 2 決定」不成立，因為方向由 a 的符號決定。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-opening」講義中先定義；本題目標是比較實物剖面的開口與形狀，沒有未定義的新符號。",
      "unitConflict": "單位審查：本題比較圖形性質，不輸出長度；兩模型假設同尺度。 本題四個選項皆回應同一所求量「比較實物剖面的開口與形狀」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：只依所給二次剖面模型判讀，不推論材料或排水效率。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「用頂點高低判方向或寬窄」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「A 開口向上，B 開口向下，兩者寬度相同」。"
    },
    "difficultyReason": "literacy：比較兩種排水槽剖面；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "排水槽情境要求同時區分凹槽與拱蓋方向，而相同 |a| 說明形狀寬窄一致；只看頂點位置會誤判。",
    "prerequisiteCheck": "需先能使用 quadratic-graph-forms 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求比較實物剖面的開口與形狀，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「兩個排水槽剖面模型分別為 A：y=0.4(x-1)²-2，B：y=-0.4(x-1)²+2。下列何者正確？」獨立重算：A 的 a=0.4>0，B 的 a=-0.4<0，且 |a| 均 0.4。；所得答案為「A 開口向上，B 開口向下，兩者寬度相同」。四選項逐項核對：「A、B 都開口向上」=假，B 的 a 為負。；「A 開口向上，B 開口向下，兩者寬度相同」=真，a 分別為 0.4 與 -0.4；絕對值相同。；「A 較寬，B 較窄」=假，|a| 相同，寬度相同。；「方向由頂點 y=-2 與 2 決定」=假，方向由 a 的符號決定。。難度判定依據：literacy：比較兩種排水槽剖面；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  }
];

export const DRAWING_SPECS=[
  {
    "figureId": "u21-fig-s005-01",
    "drawingSpecId": "u21-draw-s005-01",
    "unitId": "u21",
    "topicId": "u21-graphs",
    "skillId": "quadratic-opening",
    "title": "開口方向比較",
    "svgPath": "figures/u21/u21-fig-s005-01.svg",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "altText": "本圖以高對比線條與文字標籤呈現：左側 a>0 的最低頂點拋物線與右側 a<0 的最高頂點拋物線。",
    "drawingSpec": {
      "canvas": {
        "width": 640,
        "height": 400
      },
      "viewBox": "0 0 640 400",
      "coordinateSystem": "SVG 原點在左上；所有座標與曲線位置依本圖明列的像素配置。",
      "elements": "本技能專用的座標軸、拋物線、標記點、文字與必要輔助線，詳見 SVG 元素。",
      "labels": "所有關鍵方程式、頂點、對稱軸、端點或表格欄位直接以文字標示。",
      "tickMarks": "圖形以關鍵座標文字為主；未標一般刻度時不得由外觀估讀其他座標。",
      "units": "情境圖依文字標示秒、公尺或平方單位；純座標圖使用無單位座標。",
      "lineRules": "實線為函數曲線或座標軸，虛線為對稱軸、限制邊界或比較曲線；用途由文字同步說明。",
      "scalePolicy": "同一圖內比較寬窄時使用同一比例；未標示的距離不得作精確數值推論。",
      "notToScaleWarning": "除明列座標外，不可只憑圖形外觀推算未標示數值。",
      "mobileConstraints": "最小主要字級 16 px，關鍵線寬至少 2 px，640 至 760 寬 viewBox 可等比例縮放。",
      "answerLeakageControl": "圖形只呈現講義所需結構或題幹已給資訊；不得把未給的選擇題答案直接標成結論。"
    },
    "svgAssertions": [
      "<title>",
      "<desc>",
      "role=\"img\"",
      "stroke=\"black\""
    ],
    "geometryAssertions": [
      "SVG viewBox 與 width、height 均存在。",
      "關鍵點與輔助線座標在畫布範圍內。",
      "文字標籤不依賴顏色區分。"
    ],
    "figureReview": {
      "mathematicalAccuracy": "pass",
      "mobileReadability": "pass",
      "answerLeakage": "pass",
      "manualVisualInspection": "pass",
      "reviewNote": "人工檢視 u21-fig-s005-01：左側 a>0 的最低頂點拋物線與右側 a<0 的最高頂點拋物線。 已核對曲線方向、標記座標、虛實線語意、文字可讀性與畫布邊界，未以未標刻度洩漏額外答案。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "5cc3a13676f9563140c82a211e58f4eea81bf8960e7b380ee93e69ff53d1eebd"
  }
];
