// SERIALIZATION OF REVIEWED CHATGPT HUMAN-AUTHORED CONTENT.

// BATCH-LOCAL STAGING ONLY. DO NOT EDIT OR ACTIVATE IN PRODUCTION.

export const UNIT_ID = "u18";

export const SKILL_SLOT = "s007";

export const SKILL_ID = "similarity-aa";

export const LECTURE = {
  "lectureId": "u18-s007-lecture-r1",
  "unitId": "u18",
  "numericUnitId": 18,
  "topicId": "u18-similarity",
  "skillId": "similarity-aa",
  "lockedSkillOrder": 7,
  "lockedSkillTitle": "AA 相似",
  "title": "AA 相似：兩組角相等就能鎖定三角形形狀",
  "audience": "臺灣國中零基礎至國中教育會考數學滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能說明為何兩組對應角相等足以判定三角形相似。",
    "能由平行線、對頂角或三角形內角和找出兩組相等角。",
    "能依 AA 判定寫出正確相似順序。",
    "能在判定後使用對應邊比例求長度。"
  ],
  "prerequisiteBridge": {
    "prerequisites": [
      {
        "skillId": "similar-triangles",
        "title": "相似三角形",
        "requiredLevel": "能運用「相似三角形」完成本節所需的基本判斷與計算，並能說明主要條件。"
      }
    ],
    "bridgeExplanation": "本節承接「相似三角形」，先複習其核心判斷，再把方法推進到「AA 相似」。"
  },
  "glossary": [
    {
      "term": "AA 判定",
      "definition": "兩三角形有兩組對應角相等時，兩三角形相似。"
    },
    {
      "term": "對頂角",
      "definition": "兩直線相交形成的相對角，角度相等。"
    },
    {
      "term": "同位角",
      "definition": "平行線被截線所截時，位於相同相對位置的角，角度相等。"
    },
    {
      "term": "內錯角",
      "definition": "平行線被截線所截時，位於兩平行線內側且分居截線兩側的角，角度相等。"
    }
  ],
  "notation": [
    {
      "symbol": "∠A=∠D，∠B=∠E",
      "meaning": "兩組對應角相等，可推出 △ABC∼△DEF。"
    },
    {
      "symbol": "l∥m",
      "meaning": "直線 l 與 m 平行，可用同位角或內錯角建立相等角。"
    },
    {
      "symbol": "AA",
      "meaning": "Angle-Angle，角角相似判定。"
    }
  ],
  "conceptNarrative": [
    "三角形內角和固定為 180°。因此兩組對應角相等時，第三組角也必然相等，三角形的形狀完全確定，只可能整體放大、縮小、旋轉或翻轉。",
    "AA 判定最常見的角來源是平行線、共同角、對頂角與已知角度。必須在解答中說出角相等的理由，不能只寫『看圖可知』。",
    "判定相似時，應按已證明的角配對排列頂點。例如 ∠A=∠D、∠B=∠E，則剩餘 C↔F，所以寫 △ABC∼△DEF。",
    "AA 只需要角度條件，不需要先知道邊長比例；相似成立後，才可使用對應邊成比例。"
  ],
  "formalDefinitions": [
    {
      "name": "AA 相似判定",
      "statement": "若兩三角形有兩組對應角分別相等，則兩三角形相似。"
    },
    {
      "name": "第三角自動相等",
      "statement": "兩組角相等時，利用內角和 180° 可得第三組角相等。"
    }
  ],
  "formulas": [
    {
      "formula": "∠A=∠D 且 ∠B=∠E ⇒ △ABC∼△DEF",
      "conditions": [
        "角的對應順序一致"
      ],
      "meaning": "AA 判定。"
    },
    {
      "formula": "相似後 AB/DE=BC/EF=AC/DF",
      "conditions": [
        "已完成 AA 判定"
      ],
      "meaning": "利用相似求邊長。"
    }
  ],
  "nonApplicableCases": [
    "只有一組角相等不足以判定相似。",
    "兩個三角形各自有 90° 仍只是一組角，還需另一組角相等。",
    "平行關係未給定或未證明時，不能宣稱同位角相等。",
    "判定前不能先假設對應邊成比例作為理由，避免循環論證。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "在兩三角形中找第一組相等角並寫理由。",
      "check": "是已知角、共同角、對頂角還是平行線角？"
    },
    {
      "step": 2,
      "instruction": "找第二組相等角並寫理由。",
      "check": "理由是否獨立且成立？"
    },
    {
      "step": 3,
      "instruction": "依兩組角配對排列頂點。",
      "check": "相似記號順序是否符合角配對？"
    },
    {
      "step": 4,
      "instruction": "寫出 AA 判定結論。",
      "check": "是否先判定再用邊比？"
    },
    {
      "step": 5,
      "instruction": "若求長度，列正確對應邊比例。",
      "check": "比例方向一致嗎？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "在 △ABC 中，D 在 AB、E 在 AC，且 DE∥BC。證明 △ADE∼△ABC。",
      "solutionSteps": [
        "因 DE∥BC，∠ADE=∠ABC（同位角或內錯角）。",
        "∠AED=∠ACB。",
        "兩組角相等，所以 △ADE∼△ABC。"
      ],
      "answer": "由 AA 相似"
    },
    {
      "exampleId": "L2",
      "prompt": "兩直線 AC 與 BD 交於 O，若 ∠A=∠D，證明 △AOB∼△DOC。",
      "solutionSteps": [
        "∠AOB=∠DOC，因為是對頂角。",
        "已知 ∠A=∠D。",
        "由 AA 得 △AOB∼△DOC。"
      ],
      "answer": "△AOB∼△DOC"
    },
    {
      "exampleId": "L3",
      "prompt": "直角三角形 ABC 與 DEF 中，∠A=∠D=90°，∠B=35°、∠E=35°，判定是否相似。",
      "solutionSteps": [
        "兩組角分別相等。",
        "因此第三組角也相等。",
        "由 AA 判定相似。"
      ],
      "answer": "相似"
    },
    {
      "exampleId": "L4",
      "prompt": "△ABC∼△DEF 由 AA 判定，AB=4、DE=10、AC=6，求 DF。",
      "solutionSteps": [
        "AB/DE=AC/DF。",
        "4/10=6/DF。",
        "4DF=60，所以 DF=15。"
      ],
      "answer": "15"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "只找到一組共同角就判相似。",
      "why": "忽略 AA 需要兩組角。",
      "correction": "再找平行線角、對頂角或利用已知角。"
    },
    {
      "mistake": "把補角當成相等角。",
      "why": "兩角和 180° 不代表兩角相等。",
      "correction": "只有在各自與同一角互補時才可推得相等，並需說明。"
    },
    {
      "mistake": "相似順序與角配對不一致。",
      "why": "判定後隨意寫字母。",
      "correction": "第一組配對放第一位，第二組放第二位。"
    },
    {
      "mistake": "由圖看似平行就用內錯角。",
      "why": "視覺取代條件。",
      "correction": "確認有平行記號或已證明平行。"
    },
    {
      "mistake": "用欲證的邊比例來證明 AA。",
      "why": "循環論證。",
      "correction": "AA 的理由只來自角度。"
    }
  ],
  "selfCheck": [
    "我有兩組相等角嗎？",
    "每組角都有理由嗎？",
    "是否誤把補角當相等？",
    "相似順序與角配對一致嗎？",
    "判定後才使用邊比嗎？"
  ],
  "summary": [
    "AA：兩組對應角相等即可判定相似。",
    "常見角來源是平行線、共同角與對頂角。",
    "相似記號必須依角的配對順序。",
    "不能只靠一組角或圖形外觀。"
  ],
  "connections": {
    "previous": "相似三角形定義說明了對應角與對應邊。",
    "next": [
      "SAS 會用兩組邊比與夾角判定相似。",
      "測高與影子問題常以 AA 建立相似。"
    ]
  },
  "figureReferences": [
    {
      "figureId": "u18-aa-q010",
      "purpose": "協助辨認「AA 相似」中的對應關係；圖不按比例時不得憑外觀猜答案。"
    },
    {
      "figureId": "u18-aa-cr001",
      "purpose": "協助辨認「AA 相似」中的對應關係；圖不按比例時不得憑外觀猜答案。"
    }
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u18-s007-v001",
      "u18-s007-v002",
      "u18-s007-v003",
      "u18-s007-v004",
      "u18-s007-v005",
      "u18-s007-v006",
      "u18-s007-v007",
      "u18-s007-v008",
      "u18-s007-v009",
      "u18-s007-v010",
      "u18-s007-v011",
      "u18-s007-v012"
    ],
    "constructedResponseIds": [
      "u18-s007-cr001",
      "u18-s007-cr002"
    ]
  },
  "lectureReview": {
    "reviewVersion": "human-lecture-review-r1.0",
    "reviewedAt": "2026-07-12",
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "capScopeCheck": "pass",
    "symbolDefinitionsComplete": true,
    "invalidUseCasesIncluded": true,
    "examplesIndividuallyChosen": true,
    "reviewNote": "逐一核對角度來源與定理名稱，確保沒有將補角直接視為相等，也沒有在 AA 判定前預先使用相似邊比；四個例子涵蓋平行、對頂與直角。"
  },
  "contentSha256": "f8df901b9d3e22bd7e49ee2826c1080f2656fb55056d3d19d6b2386291a76f46"
};

export const QUESTIONS = [
  {
    "questionId": "u18-s007-v001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-aa",
    "lockedSkillOrder": 7,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "若兩個三角形有兩組對應角分別相等，則可用哪一種判定說明兩三角形相似？",
    "text": "若兩個三角形有兩組對應角分別相等，則可用哪一種判定說明兩三角形相似？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "SAS",
      "SSS",
      "AA",
      "SSA"
    ],
    "answerIndex": 2,
    "independentSolution": "AA 代表 Angle-Angle；題目恰給兩組角相等，所以直接適用。",
    "explanation": "兩組對應角相等正是 AA（角角）相似判定。",
    "steps": [
      "辨認已知條件全是角。",
      "對照三種相似判定。",
      "選 AA。"
    ],
    "optionAnalysis": [
      {
        "choice": "SAS",
        "truth": false,
        "reason": "SAS 需要兩組邊成比例與夾角相等。"
      },
      {
        "choice": "SSS",
        "truth": false,
        "reason": "SSS 需要三組邊成比例。"
      },
      {
        "choice": "AA",
        "truth": true,
        "reason": "依獨立推導可得到 AA，符合所有已知條件。"
      },
      {
        "choice": "SSA",
        "truth": false,
        "reason": "SSA 不是一般相似判定。"
      }
    ],
    "misconceptionTarget": "把相似與全等判定名稱混淆。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "直接辨認 AA 判定條件。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "de512ad0164191c2a621042109ac3e0e6a3bd6bd532f901736e209d40ff12b43"
  },
  {
    "questionId": "u18-s007-v002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-aa",
    "lockedSkillOrder": 7,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "在 △ABC 與 △DEF 中，∠A=∠D=90°，∠B=35°，∠E=35°。下列何者正確？",
    "text": "在 △ABC 與 △DEF 中，∠A=∠D=90°，∠B=35°，∠E=35°。下列何者正確？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "△ABC∼△DEF",
      "兩三角形必全等",
      "兩三角形不相似",
      "仍需知道三邊長"
    ],
    "answerIndex": 0,
    "independentSolution": "第三角也都是 55°，兩三角形形狀相同，因此相似。",
    "explanation": "兩組角 A↔D、B↔E 分別相等，故由 AA 得 △ABC∼△DEF。",
    "steps": [
      "配對兩個直角。",
      "配對兩個 35° 角。",
      "依順序寫相似。"
    ],
    "optionAnalysis": [
      {
        "choice": "△ABC∼△DEF",
        "truth": true,
        "reason": "依獨立推導可得到 △ABC∼△DEF，符合所有已知條件。"
      },
      {
        "choice": "兩三角形必全等",
        "truth": false,
        "reason": "角度相同只保證相似，不保證邊長相等。"
      },
      {
        "choice": "兩三角形不相似",
        "truth": false,
        "reason": "已有兩組對應角相等。"
      },
      {
        "choice": "仍需知道三邊長",
        "truth": false,
        "reason": "AA 判定不需要邊長資料。"
      }
    ],
    "misconceptionTarget": "認為相似必須先知道邊長。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "以具體角度使用 AA。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "158b327315ae1ddfeff1b4b2fde50bedf5080de0484a87da753fe01475b97e06"
  },
  {
    "questionId": "u18-s007-v003",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-aa",
    "lockedSkillOrder": 7,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩直線 AC 與 BD 交於 O。若 ∠A=∠D，則 △AOB 與 △DOC 相似的第二組角理由為何？",
    "text": "兩直線 AC 與 BD 交於 O。若 ∠A=∠D，則 △AOB 與 △DOC 相似的第二組角理由為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "∠ABO=∠DCO，因為同位角",
      "∠AOB+∠DOC=180°",
      "∠A=∠D，因為共同角",
      "∠AOB=∠DOC，因為對頂角相等"
    ],
    "answerIndex": 3,
    "independentSolution": "對頂角定理直接給 ∠AOB=∠DOC，這是第二組相等角。",
    "explanation": "AC 與 BD 相交，∠AOB 和 ∠DOC 是對頂角且相等；配合已知 ∠A=∠D，可用 AA。",
    "steps": [
      "找交點 O 的相對角。",
      "辨認為對頂角。",
      "與已知角組成 AA。"
    ],
    "optionAnalysis": [
      {
        "choice": "∠ABO=∠DCO，因為同位角",
        "truth": false,
        "reason": "題目沒有平行線條件。"
      },
      {
        "choice": "∠AOB+∠DOC=180°",
        "truth": false,
        "reason": "對頂角是相等，不是互補。"
      },
      {
        "choice": "∠A=∠D，因為共同角",
        "truth": false,
        "reason": "A 與 D 是不同頂點，不是共同角。"
      },
      {
        "choice": "∠AOB=∠DOC，因為對頂角相等",
        "truth": true,
        "reason": "依獨立推導可得到 ∠AOB=∠DOC，因為對頂角相等，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "把對頂角誤說成補角或同位角。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "辨認 AA 中常見的對頂角來源。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "38c6050d92e03c13680e8e528ab558254b7be0591c86391dfabdf4ace4f0a9a0"
  },
  {
    "questionId": "u18-s007-v004",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-aa",
    "lockedSkillOrder": 7,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "在 △ABC 中，D 在 AB 上、E 在 AC 上，DE∥BC。下列哪一組角可直接用來判定 △ADE∼△ABC？",
    "text": "在 △ABC 中，D 在 AB 上、E 在 AC 上，DE∥BC。下列哪一組角可直接用來判定 △ADE∼△ABC？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "∠ADE=∠ACB，∠AED=∠ABC",
      "∠ADE=∠ABC，∠AED=∠ACB",
      "∠DAE=∠ABC，∠AED=∠BAC",
      "∠ADB=∠AEC，∠ABC=∠ACB"
    ],
    "answerIndex": 1,
    "independentSolution": "D 角由 AD 與 DE 形成，對應 B 角由 BA 與 BC 形成；E 角同理對應 C。",
    "explanation": "DE∥BC，使 ∠ADE=∠ABC、∠AED=∠ACB；兩組角相等，故 AA 相似。",
    "steps": [
      "沿 AB 作截線找同位或內錯角。",
      "沿 AC 找另一組角。",
      "確認角分別位於兩三角形。"
    ],
    "optionAnalysis": [
      {
        "choice": "∠ADE=∠ACB，∠AED=∠ABC",
        "truth": false,
        "reason": "把兩組平行線角交叉配對。"
      },
      {
        "choice": "∠ADE=∠ABC，∠AED=∠ACB",
        "truth": true,
        "reason": "依獨立推導可得到 ∠ADE=∠ABC，∠AED=∠ACB，符合所有已知條件。"
      },
      {
        "choice": "∠DAE=∠ABC，∠AED=∠BAC",
        "truth": false,
        "reason": "共同角與平行角位置不對應。"
      },
      {
        "choice": "∠ADB=∠AEC，∠ABC=∠ACB",
        "truth": false,
        "reason": "第一組角不是兩個三角形的對應角。"
      }
    ],
    "misconceptionTarget": "平行線角的對應位置交叉。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "需從平行線中選出正確兩組角。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ad0d86ee549233f60ef8948fb85bf855cec576dceb1dec38fc029594f82c6e64"
  },
  {
    "questionId": "u18-s007-v005",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-aa",
    "lockedSkillOrder": 7,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "△ABC 與 △DEF 中，∠A=∠D，∠C=∠F。若 AB=8、DE=12、BC=10，則 EF 為何？",
    "text": "△ABC 與 △DEF 中，∠A=∠D，∠C=∠F。若 AB=8、DE=12、BC=10，則 EF 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "15",
      "6.67",
      "14",
      "18"
    ],
    "answerIndex": 0,
    "independentSolution": "從第一三角形到第二三角形放大 12/8=1.5，BC=10 對應 EF=15。",
    "explanation": "由 AA 得 △ABC∼△DEF，AB/DE=BC/EF=8/12=2/3，因此 EF=15。",
    "steps": [
      "先以兩組角判定相似。",
      "列 10/EF=2/3。",
      "求 EF=15。"
    ],
    "optionAnalysis": [
      {
        "choice": "15",
        "truth": true,
        "reason": "依獨立推導可得到 15，符合所有已知條件。"
      },
      {
        "choice": "6.67",
        "truth": false,
        "reason": "相似比方向取反。"
      },
      {
        "choice": "14",
        "truth": false,
        "reason": "用邊長差 4 加到 10。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "把 10 乘錯誤倍率 1.8。"
      }
    ],
    "misconceptionTarget": "未先判定相似或倍率方向錯誤。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "先 AA 判定，再用對應邊比例。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "96ca256d07905f9d8d95f9090439030e5555c94fc4991ffbf45ff267a8379541"
  },
  {
    "questionId": "u18-s007-v006",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-aa",
    "lockedSkillOrder": 7,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩個三角形各有一個 90° 角。下列哪項額外條件足以用 AA 判定相似？",
    "text": "兩個三角形各有一個 90° 角。下列哪項額外條件足以用 AA 判定相似？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "一組對應斜邊相等",
      "面積相等",
      "周長相等",
      "另一組對應銳角相等"
    ],
    "answerIndex": 3,
    "independentSolution": "AA 需要兩組角；『另一組對應銳角相等』正好補足，其他條件都不直接給第二組角。",
    "explanation": "已有一組直角相等，只要再有另一組對應角相等，就符合 AA。",
    "steps": [
      "確認目前只有一組角。",
      "尋找第二組角條件。",
      "排除純長度或面積條件。"
    ],
    "optionAnalysis": [
      {
        "choice": "一組對應斜邊相等",
        "truth": false,
        "reason": "一組邊長不足以配合 AA。"
      },
      {
        "choice": "面積相等",
        "truth": false,
        "reason": "面積相等不保證形狀相同。"
      },
      {
        "choice": "周長相等",
        "truth": false,
        "reason": "周長相等也不保證相似。"
      },
      {
        "choice": "另一組對應銳角相等",
        "truth": true,
        "reason": "依獨立推導可得到 另一組對應銳角相等，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "認為兩個直角三角形一定相似。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "判斷 AA 所缺的最小充分條件。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "975d0005739f9786854eb64eed603c1942c53f06a1c56c6750bcf841d9163cbe"
  },
  {
    "questionId": "u18-s007-v007",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-aa",
    "lockedSkillOrder": 7,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "在 △ABC 中，D 在 BC 上。若 ∠BAD=∠BCA，且 ∠ABD=∠CBA，則下列相似關係何者正確？",
    "text": "在 △ABC 中，D 在 BC 上。若 ∠BAD=∠BCA，且 ∠ABD=∠CBA，則下列相似關係何者正確？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "△BAD∼△CAB",
      "△BAD∼△BCA",
      "△ABD∼△BCA",
      "△BDA∼△BCA"
    ],
    "answerIndex": 1,
    "independentSolution": "從 △BAD 的 B、A、D 依次對應 △BCA 的 B、C、A，因此關系正確。",
    "explanation": "已知 ∠BAD（A）=∠BCA（C），且 ∠ABD（B）=∠CBA（B），所以 B↔B、A↔C、D↔A，寫 △BAD∼△BCA。",
    "steps": [
      "列角配對 A↔C、B↔B。",
      "剩餘 D↔A。",
      "按 BAD 排出 BCA。"
    ],
    "optionAnalysis": [
      {
        "choice": "△BAD∼△CAB",
        "truth": false,
        "reason": "第二個頂點 A 應對 C，不是 A。"
      },
      {
        "choice": "△BAD∼△BCA",
        "truth": true,
        "reason": "依獨立推導可得到 △BAD∼△BCA，符合所有已知條件。"
      },
      {
        "choice": "△ABD∼△BCA",
        "truth": false,
        "reason": "第一組角配對順序不符。"
      },
      {
        "choice": "△BDA∼△BCA",
        "truth": false,
        "reason": "BDA 的第一角 B 對應 B，但第二角 D 没有與 C 的已知配對。"
      }
    ],
    "misconceptionTarget": "有共同字母 B 就随意排列其餘頂點。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 110,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "需由角配對反推完整相似字母順序。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "77868bfab98cb751a6363d6f0b05391d9f64eb3968018ebe5396fe1db1f42483"
  },
  {
    "questionId": "u18-s007-v008",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-aa",
    "lockedSkillOrder": 7,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩三角形中，∠A=∠D=50°，∠B=70°，∠E=60°。能否用 AA 判定 △ABC 與 △DEF 相似？",
    "text": "兩三角形中，∠A=∠D=50°，∠B=70°，∠E=60°。能否用 AA 判定 △ABC 與 △DEF 相似？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "不能，因為只有 ∠A=∠D",
      "能，且 △ABC∼△DEF",
      "能，且 △ABC∼△DFE",
      "能，且兩三角形必全等"
    ],
    "answerIndex": 2,
    "independentSolution": "兩組角集合都是 50°、60°、70°；按位置正確配對後，△ABC∼△DFE。",
    "explanation": "第一三角形角為 A=50°、B=70°、C=60°；第二三角形為 D=50°、E=60°、F=70°。配對 A↔D、B↔F、C↔E，由 AA 得 △ABC∼△DFE。",
    "steps": [
      "求 ∠C=60°。",
      "求 ∠F=70°。",
      "按相等角重排為 A-D、B-F、C-E。"
    ],
    "optionAnalysis": [
      {
        "choice": "不能，因為只有 ∠A=∠D",
        "truth": false,
        "reason": "另有 ∠B=∠F=70° 與 ∠C=∠E=60°。"
      },
      {
        "choice": "能，且 △ABC∼△DEF",
        "truth": false,
        "reason": "該順序會把 B=70° 對到 E=60°。"
      },
      {
        "choice": "能，且 △ABC∼△DFE",
        "truth": true,
        "reason": "依獨立推導可得到 能，且 △ABC∼△DFE，符合所有已知條件。"
      },
      {
        "choice": "能，且兩三角形必全等",
        "truth": false,
        "reason": "角相同只保證相似，邊長未知。"
      }
    ],
    "misconceptionTarget": "只按原字母位置比較，忽略相似順序可依角度重新排列。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 120,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題目問能否判定相似，不预設 DEF 的對應順序；正確順序需自行決定。",
    "difficultyReason": "需要判斷是否可重新排列對應角，而非只看同位置。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "898e7611aef9437844b5c82bb0655a0f46902405362e362f3deb3a2258843ea3"
  },
  {
    "questionId": "u18-s007-v009",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-aa",
    "lockedSkillOrder": 7,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "在一個直角三角形中，從直角頂點向斜邊作高，會形成兩個小三角形。下列敘述何者正確？",
    "text": "在一個直角三角形中，從直角頂點向斜邊作高，會形成兩個小三角形。下列敘述何者正確？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "只有兩個小三角形彼此全等",
      "小三角形與原三角形沒有角度關係",
      "只有面積相同時才相似",
      "兩個小三角形彼此相似，且都與原三角形相似"
    ],
    "answerIndex": 3,
    "independentSolution": "原三角形兩锐角分別出現在兩個小三角形中；每個小三角形的另一锐角與原對應，故三者角集合相同。",
    "explanation": "每個小三角形都有一個直角，並與原三角形共享一個銳角，因此各自由 AA 與原三角形相似，也彼此相似。",
    "steps": [
      "找三個三角形的直角。",
      "找共享或互餘的銳角。",
      "使用 AA 建立相似链。"
    ],
    "optionAnalysis": [
      {
        "choice": "只有兩個小三角形彼此全等",
        "truth": false,
        "reason": "一般不全等。"
      },
      {
        "choice": "小三角形與原三角形沒有角度關係",
        "truth": false,
        "reason": "各自共享一個銳角並都有直角。"
      },
      {
        "choice": "只有面積相同時才相似",
        "truth": false,
        "reason": "相似由角度決定，不需面積相同。"
      },
      {
        "choice": "兩個小三角形彼此相似，且都與原三角形相似",
        "truth": true,
        "reason": "依獨立推導可得到 兩個小三角形彼此相似，且都與原三角形相似，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "把直角三角形內作高誤認為只產生全等圖形。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "需同時追踪三個三角形的角度關系。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "72a06f67fb0d25f758f0db0c4402800fa097445c6c18732e480580560bc821b0"
  },
  {
    "questionId": "u18-s007-v010",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-aa",
    "lockedSkillOrder": 7,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "測量員站在 P 點觀察塔頂 T，地面上豎立標桿 AB。若 PT 與標桿頂 A、塔頂 T 共線，且地面 PB 與塔底距離形成同一直線，下列哪個條件最能保證兩測量三角形由 AA 相似？",
    "text": "測量員站在 P 點觀察塔頂 T，地面上豎立標桿 AB。若 PT 與標桿頂 A、塔頂 T 共線，且地面 PB 與塔底距離形成同一直線，下列哪個條件最能保證兩測量三角形由 AA 相似？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "標桿高度等於測量員身高",
      "標桿與塔都垂直地面",
      "塔影與標桿影一樣長",
      "P 到標桿與塔的距離相等"
    ],
    "answerIndex": 1,
    "independentSolution": "P 點的夹角相同；若標桿與塔均垂直地面，則 B 與塔底的角均為 90°，兩組角足夠。",
    "explanation": "標桿與塔都垂直地面，提供兩組直角；兩三角形又共享 P 點視線角，因此由 AA 相似。",
    "steps": [
      "辨認共同觀察角。",
      "找第二組角需為直角。",
      "選择垂直地面條件。"
    ],
    "optionAnalysis": [
      {
        "choice": "標桿高度等於測量員身高",
        "truth": false,
        "reason": "長度相等不是 AA 的必要條件。"
      },
      {
        "choice": "標桿與塔都垂直地面",
        "truth": true,
        "reason": "依獨立推導可得到 標桿與塔都垂直地面，符合所有已知條件。"
      },
      {
        "choice": "塔影與標桿影一樣長",
        "truth": false,
        "reason": "影長相等不保證視線角模型。"
      },
      {
        "choice": "P 到標桿與塔的距離相等",
        "truth": false,
        "reason": "兩三角形大小相等不是建立相似的角度條件。"
      }
    ],
    "misconceptionTarget": "把長度條件當作 AA 角度條件。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "本題為條件判斷，無單位。",
    "ambiguityAndBoundaryAudit": "視線與地面共線關系已明示，所缺的第二組角來自垂直條件。",
    "difficultyReason": "從測量裝置條件判斷 AA 模型是否有效。",
    "literacyContextNecessity": "實際測量必須確認標桿與塔的鉛直性，否則几何模型不成立。",
    "visualMode": "figure-supported",
    "figureId": "u18-aa-q010",
    "drawingSpecReference": "figures/u18/u18-aa-q010.svg",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3f4fa42940cb25e1bec09d8c616f8b57fac3fd5502b4f7123250ada0500efbf9"
  },
  {
    "questionId": "u18-s007-v011",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-aa",
    "lockedSkillOrder": 7,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "攝影師以平行地面滑軌拍攝一面牆。相機在 C，牆底為 B、牆頂為 A；小取景框對應點 D、E 滿足 DE∥AB。若 CD=30 cm、CE=20 cm、CB=150 cm，則由 AA 相似可求牆高 AB 與框高 DE 的比為何？",
    "text": "攝影師以平行地面滑軌拍攝一面牆。相機在 C，牆底為 B、牆頂為 A；小取景框對應點 D、E 滿足 DE∥AB。若 CD=30 cm、CE=20 cm、CB=150 cm，則由 AA 相似可求牆高 AB 與框高 DE 的比為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "3:2",
      "1:5",
      "5:1",
      "15:2"
    ],
    "answerIndex": 2,
    "independentSolution": "小對大線性比為 CD/CB=1/5，因此大牆高對框高是 5/1。",
    "explanation": "由於 DE∥AB，△CDE∼△CBA；對應邊 CD:CB=DE:AB=30:150=1:5，所以 AB:DE=5:1。",
    "steps": [
      "用平行線找兩組角。",
      "判定兩三角形相似。",
      "根據題目方向取倒比。"
    ],
    "optionAnalysis": [
      {
        "choice": "3:2",
        "truth": false,
        "reason": "這是 CD:CE，不是大圖與小圖對應距離比。"
      },
      {
        "choice": "1:5",
        "truth": false,
        "reason": "方向與題目 AB:DE 相反。"
      },
      {
        "choice": "5:1",
        "truth": true,
        "reason": "依獨立推導可得到 5:1，符合所有已知條件。"
      },
      {
        "choice": "15:2",
        "truth": false,
        "reason": "把 150:20 錯當成對應比。"
      }
    ],
    "misconceptionTarget": "忽略所求比值方向或選錯對應邊。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "長度同為 cm，比例無單位。",
    "ambiguityAndBoundaryAudit": "D、B 位於同一射線，E、A 位於另一射線，且 DE∥AB，配對唯一。",
    "difficultyReason": "先以 AA 建立成像相似，再轉換大小方向。",
    "literacyContextNecessity": "取景框與牆面平行關系決定成像比例，攝影構圖中比值方向具有實際意義。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "1f67e6721ab14fd5e5c19550953c4c027a7d53d584f24acda9b51f229addeb20"
  },
  {
    "questionId": "u18-s007-v012",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-aa",
    "lockedSkillOrder": 7,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "陽光與地面夹角固定時，1.5 m 標桿影長 2 m。若樹影長測得 12 m，但地面在樹處有坡度，能否直接用 AA 求樹高？",
    "text": "陽光與地面夹角固定時，1.5 m 標桿影長 2 m。若樹影長測得 12 m，但地面在樹處有坡度，能否直接用 AA 求樹高？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "不能，坡面影長不一定對應同一水平角模型",
      "能，樹高為 9 m",
      "能，樹高為 16 m",
      "不能，因為 AA 永遠不能用於影子"
    ],
    "answerIndex": 0,
    "independentSolution": "標桿三角形以水平地面形成直角；坡面處的邊與鉛直樹干不一定形成相同角，因此兩三角形不保證有兩組相等角。",
    "explanation": "坡度改變地面與陽光的夹角，沿坡面量得的影長不對應標桿的水平影長模型，因此不能直接套用。",
    "steps": [
      "列出 AA 所需的直角與相等仰角。",
      "检查樹處地面是否水平。",
      "判定模型條件不足。"
    ],
    "optionAnalysis": [
      {
        "choice": "不能，坡面影長不一定對應同一水平角模型",
        "truth": true,
        "reason": "依獨立推導可得到 不能，坡面影長不一定對應同一水平角模型，符合所有已知條件。"
      },
      {
        "choice": "能，樹高為 9 m",
        "truth": false,
        "reason": "只有地面水平且物體鉛直時才可直接得 9 m。"
      },
      {
        "choice": "能，樹高為 16 m",
        "truth": false,
        "reason": "比例方向也不正確。"
      },
      {
        "choice": "不能，因為 AA 永遠不能用於影子",
        "truth": false,
        "reason": "在水平地面同一時刻，AA 正是標準方法。"
      }
    ],
    "misconceptionTarget": "只看到同一陽光就忽略地面几何條件。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "本題不計算高度；已知長度單位一致。",
    "ambiguityAndBoundaryAudit": "題目明確說樹處為坡地，且影長沿坡面測得，不能視為水平投影。",
    "difficultyReason": "评估真實測量條件是否滿足 AA，而非單纯比例計算。",
    "literacyContextNecessity": "現場坡度会使影子測量失效，必須判斷模型條件而非機械算出高度。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a2d5900b247557391a81eb159f3370d73a65ea4469545bbbda597c56271f6819"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u18-s007-cr001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-aa",
    "lockedSkillOrder": 7,
    "itemType": "constructed-response",
    "prompt": "在△ABC中，D在AB上、E在AC上，且DE∥BC。證明△ADE∼△ABC，並指出三組對應頂點。",
    "requiredWork": "使用平行線角關係與共用角完成 AA 證明。",
    "standardSolution": "因DE∥BC，∠ADE=∠ABC、∠AED=∠ACB（同位角或內錯角）；另∠DAE=∠BAC為共用角。因此△ADE∼△ABC。對應為A↔A、D↔B、E↔C。",
    "alternativeMethod": "可用∠DAE=∠BAC與∠ADE=∠ABC兩組角直接判定，第三組角由三角形內角和自動相等。",
    "reasoningSteps": [
      "指出平行線產生的兩組相等角。",
      "或使用一組平行角加共用角。",
      "依 AA 判定相似。",
      "寫出正確頂點順序。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "相等角理由、AA結論與對應順序完整正確。"
      },
      {
        "score": 2,
        "criteria": "有兩組正確相等角並判定相似，但對應順序漏寫或小錯。"
      },
      {
        "score": 1,
        "criteria": "只寫『因平行所以相似』，沒有列出足夠角關係。"
      },
      {
        "score": 0,
        "criteria": "沒有呈現可辨識的相關比例或相似推理，或答案與過程均無法支持題目要求。"
      }
    ],
    "partialCreditRules": [
      "比例式或相似判定正確但後續算術錯誤，可依已完成的關鍵步驟給 2 分。",
      "只有正確公式但沒有把題目數據正確代入，通常給 1 分。"
    ],
    "followThroughPolicy": "若早期僅有單一算術錯誤，後續使用該錯誤值的推理一致且方法正確，保留後續方法分；不得因錯誤值巧合得到正確答案而補足滿分。",
    "unitAndNotationRules": "答案須保留題目要求的單位與符號。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "figure-supported",
    "figureId": "u18-aa-cr001",
    "drawingSpecReference": "figures/u18/u18-aa-cr001.svg",
    "independentReview": {
      "decision": "pass",
      "reviewNote": "已按圖形位置核對D↔B、E↔C，兩組角足以AA，沒有使用未給定的邊長。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "c92f05fc94b9bfea6e0b06b5b600295d038e2bf7ffbb75613a8ce43eada3eb22"
  },
  {
    "questionId": "u18-s007-cr002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-aa",
    "lockedSkillOrder": 7,
    "itemType": "constructed-response",
    "prompt": "兩三角形中，△PQR有∠P=48°、∠Q=67°；△XYZ有∠X=65°、∠Y=67°。判斷是否相似；若相似，寫出正確相似記號。",
    "requiredWork": "先求缺角，再按相等角配對，不能只照字母位置。",
    "standardSolution": "△PQR的∠R=180°−48°−67°=65°；△XYZ的∠Z=180°−65°−67°=48°。配對P(48°)↔Z(48°)、Q(67°)↔Y(67°)、R(65°)↔X(65°)，故△PQR∼△ZYX。",
    "alternativeMethod": "可直接比較角集合：兩者皆為48°、65°、67°，再依角度標記順序。",
    "reasoningSteps": [
      "求∠R=65°與∠Z=48°。",
      "配對相等角。",
      "用AA判定相似。",
      "依配對寫△PQR∼△ZYX。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "缺角、配對與相似記號全部正確。"
      },
      {
        "score": 2,
        "criteria": "判定相似且角度正確，但相似記號順序有一處錯。"
      },
      {
        "score": 1,
        "criteria": "只說兩三角形都有67°而判定相似，未找到第二組角。"
      },
      {
        "score": 0,
        "criteria": "沒有呈現可辨識的相關比例或相似推理，或答案與過程均無法支持題目要求。"
      }
    ],
    "partialCreditRules": [
      "比例式或相似判定正確但後續算術錯誤，可依已完成的關鍵步驟給 2 分。",
      "只有正確公式但沒有把題目數據正確代入，通常給 1 分。"
    ],
    "followThroughPolicy": "若早期僅有單一算術錯誤，後續使用該錯誤值的推理一致且方法正確，保留後續方法分；不得因錯誤值巧合得到正確答案而補足滿分。",
    "unitAndNotationRules": "角度須標示°；相似記號兩側頂點順序須對應。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "獨立計算兩缺角並逐點配對，確認唯一合理記號為△PQR∼△ZYX。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "25b6013b2a0eefd8dd3cbac0251f7f88de1a22a70f97fe8088091b4aa331e1d7"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u18-s007-v001-semantic-review-r1",
    "questionId": "u18-s007-v001",
    "unitId": "u18",
    "skillId": "similarity-aa",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "de512ad0164191c2a621042109ac3e0e6a3bd6bd532f901736e209d40ff12b43",
    "independentSolution": "AA 代表 Angle-Angle；題目恰給兩組角相等，所以直接適用。",
    "derivedAnswer": "AA",
    "storedAnswer": "AA",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「AA 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "直接辨認 AA 判定條件。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：AA 代表 Angle-Angle；題目恰給兩組角相等，所以直接適用。 四個選項逐一核對後，只有「AA」符合；主要排除點是「把相似與全等判定名稱混淆。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s007-v002-semantic-review-r1",
    "questionId": "u18-s007-v002",
    "unitId": "u18",
    "skillId": "similarity-aa",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "158b327315ae1ddfeff1b4b2fde50bedf5080de0484a87da753fe01475b97e06",
    "independentSolution": "第三角也都是 55°，兩三角形形狀相同，因此相似。",
    "derivedAnswer": "△ABC∼△DEF",
    "storedAnswer": "△ABC∼△DEF",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「AA 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "以具體角度使用 AA。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：第三角也都是 55°，兩三角形形狀相同，因此相似。 四個選項逐一核對後，只有「△ABC∼△DEF」符合；主要排除點是「認為相似必須先知道邊長。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s007-v003-semantic-review-r1",
    "questionId": "u18-s007-v003",
    "unitId": "u18",
    "skillId": "similarity-aa",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "38c6050d92e03c13680e8e528ab558254b7be0591c86391dfabdf4ace4f0a9a0",
    "independentSolution": "對頂角定理直接給 ∠AOB=∠DOC，這是第二組相等角。",
    "derivedAnswer": "∠AOB=∠DOC，因為對頂角相等",
    "storedAnswer": "∠AOB=∠DOC，因為對頂角相等",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「AA 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "辨認 AA 中常見的對頂角來源。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：對頂角定理直接給 ∠AOB=∠DOC，這是第二組相等角。 四個選項逐一核對後，只有「∠AOB=∠DOC，因為對頂角相等」符合；主要排除點是「把對頂角誤說成補角或同位角。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s007-v004-semantic-review-r1",
    "questionId": "u18-s007-v004",
    "unitId": "u18",
    "skillId": "similarity-aa",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "ad0d86ee549233f60ef8948fb85bf855cec576dceb1dec38fc029594f82c6e64",
    "independentSolution": "D 角由 AD 與 DE 形成，對應 B 角由 BA 與 BC 形成；E 角同理對應 C。",
    "derivedAnswer": "∠ADE=∠ABC，∠AED=∠ACB",
    "storedAnswer": "∠ADE=∠ABC，∠AED=∠ACB",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「AA 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "需從平行線中選出正確兩組角。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：D 角由 AD 與 DE 形成，對應 B 角由 BA 與 BC 形成；E 角同理對應 C。 四個選項逐一核對後，只有「∠ADE=∠ABC，∠AED=∠ACB」符合；主要排除點是「平行線角的對應位置交叉。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s007-v005-semantic-review-r1",
    "questionId": "u18-s007-v005",
    "unitId": "u18",
    "skillId": "similarity-aa",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "96ca256d07905f9d8d95f9090439030e5555c94fc4991ffbf45ff267a8379541",
    "independentSolution": "從第一三角形到第二三角形放大 12/8=1.5，BC=10 對應 EF=15。",
    "derivedAnswer": "15",
    "storedAnswer": "15",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「AA 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "先 AA 判定，再用對應邊比例。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：從第一三角形到第二三角形放大 12/8=1.5，BC=10 對應 EF=15。 四個選項逐一核對後，只有「15」符合；主要排除點是「未先判定相似或倍率方向錯誤。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s007-v006-semantic-review-r1",
    "questionId": "u18-s007-v006",
    "unitId": "u18",
    "skillId": "similarity-aa",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "975d0005739f9786854eb64eed603c1942c53f06a1c56c6750bcf841d9163cbe",
    "independentSolution": "AA 需要兩組角；『另一組對應銳角相等』正好補足，其他條件都不直接給第二組角。",
    "derivedAnswer": "另一組對應銳角相等",
    "storedAnswer": "另一組對應銳角相等",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「AA 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "判斷 AA 所缺的最小充分條件。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：AA 需要兩組角；『另一組對應銳角相等』正好補足，其他條件都不直接給第二組角。 四個選項逐一核對後，只有「另一組對應銳角相等」符合；主要排除點是「認為兩個直角三角形一定相似。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s007-v007-semantic-review-r1",
    "questionId": "u18-s007-v007",
    "unitId": "u18",
    "skillId": "similarity-aa",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "77868bfab98cb751a6363d6f0b05391d9f64eb3968018ebe5396fe1db1f42483",
    "independentSolution": "從 △BAD 的 B、A、D 依次對應 △BCA 的 B、C、A，因此關系正確。",
    "derivedAnswer": "△BAD∼△BCA",
    "storedAnswer": "△BAD∼△BCA",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「AA 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "需由角配對反推完整相似字母順序。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：從 △BAD 的 B、A、D 依次對應 △BCA 的 B、C、A，因此關系正確。 四個選項逐一核對後，只有「△BAD∼△BCA」符合；主要排除點是「有共同字母 B 就随意排列其餘頂點。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s007-v008-semantic-review-r1",
    "questionId": "u18-s007-v008",
    "unitId": "u18",
    "skillId": "similarity-aa",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "898e7611aef9437844b5c82bb0655a0f46902405362e362f3deb3a2258843ea3",
    "independentSolution": "兩組角集合都是 50°、60°、70°；按位置正確配對後，△ABC∼△DFE。",
    "derivedAnswer": "能，且 △ABC∼△DFE",
    "storedAnswer": "能，且 △ABC∼△DFE",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題目問能否判定相似，不预設 DEF 的對應順序；正確順序需自行決定。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「AA 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "需要判斷是否可重新排列對應角，而非只看同位置。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：兩組角集合都是 50°、60°、70°；按位置正確配對後，△ABC∼△DFE。 四個選項逐一核對後，只有「能，且 △ABC∼△DFE」符合；主要排除點是「只按原字母位置比較，忽略相似順序可依角度重新排列。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s007-v009-semantic-review-r1",
    "questionId": "u18-s007-v009",
    "unitId": "u18",
    "skillId": "similarity-aa",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "72a06f67fb0d25f758f0db0c4402800fa097445c6c18732e480580560bc821b0",
    "independentSolution": "原三角形兩锐角分別出現在兩個小三角形中；每個小三角形的另一锐角與原對應，故三者角集合相同。",
    "derivedAnswer": "兩個小三角形彼此相似，且都與原三角形相似",
    "storedAnswer": "兩個小三角形彼此相似，且都與原三角形相似",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「AA 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "需同時追踪三個三角形的角度關系。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：原三角形兩锐角分別出現在兩個小三角形中；每個小三角形的另一锐角與原對應，故三者角集合相同。 四個選項逐一核對後，只有「兩個小三角形彼此相似，且都與原三角形相似」符合；主要排除點是「把直角三角形內作高誤認為只產生全等圖形。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s007-v010-semantic-review-r1",
    "questionId": "u18-s007-v010",
    "unitId": "u18",
    "skillId": "similarity-aa",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "3f4fa42940cb25e1bec09d8c616f8b57fac3fd5502b4f7123250ada0500efbf9",
    "independentSolution": "P 點的夹角相同；若標桿與塔均垂直地面，則 B 與塔底的角均為 90°，兩組角足夠。",
    "derivedAnswer": "標桿與塔都垂直地面",
    "storedAnswer": "標桿與塔都垂直地面",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "視線與地面共線關系已明示，所缺的第二組角來自垂直條件。",
      "units": "本題為條件判斷，無單位。",
      "scope": "只使用國中會考範圍內的「AA 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "從測量裝置條件判斷 AA 模型是否有效。",
    "literacyNecessityReview": "實際測量必須確認標桿與塔的鉛直性，否則几何模型不成立。",
    "reviewerNote": "重新由已知條件獨立計算：P 點的夹角相同；若標桿與塔均垂直地面，則 B 與塔底的角均為 90°，兩組角足夠。 四個選項逐一核對後，只有「標桿與塔都垂直地面」符合；主要排除點是「把長度條件當作 AA 角度條件。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s007-v011-semantic-review-r1",
    "questionId": "u18-s007-v011",
    "unitId": "u18",
    "skillId": "similarity-aa",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "1f67e6721ab14fd5e5c19550953c4c027a7d53d584f24acda9b51f229addeb20",
    "independentSolution": "小對大線性比為 CD/CB=1/5，因此大牆高對框高是 5/1。",
    "derivedAnswer": "5:1",
    "storedAnswer": "5:1",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "D、B 位於同一射線，E、A 位於另一射線，且 DE∥AB，配對唯一。",
      "units": "長度同為 cm，比例無單位。",
      "scope": "只使用國中會考範圍內的「AA 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "先以 AA 建立成像相似，再轉換大小方向。",
    "literacyNecessityReview": "取景框與牆面平行關系決定成像比例，攝影構圖中比值方向具有實際意義。",
    "reviewerNote": "重新由已知條件獨立計算：小對大線性比為 CD/CB=1/5，因此大牆高對框高是 5/1。 四個選項逐一核對後，只有「5:1」符合；主要排除點是「忽略所求比值方向或選錯對應邊。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s007-v012-semantic-review-r1",
    "questionId": "u18-s007-v012",
    "unitId": "u18",
    "skillId": "similarity-aa",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "a2d5900b247557391a81eb159f3370d73a65ea4469545bbbda597c56271f6819",
    "independentSolution": "標桿三角形以水平地面形成直角；坡面處的邊與鉛直樹干不一定形成相同角，因此兩三角形不保證有兩組相等角。",
    "derivedAnswer": "不能，坡面影長不一定對應同一水平角模型",
    "storedAnswer": "不能，坡面影長不一定對應同一水平角模型",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題目明確說樹處為坡地，且影長沿坡面測得，不能視為水平投影。",
      "units": "本題不計算高度；已知長度單位一致。",
      "scope": "只使用國中會考範圍內的「AA 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "评估真實測量條件是否滿足 AA，而非單纯比例計算。",
    "literacyNecessityReview": "現場坡度会使影子測量失效，必須判斷模型條件而非機械算出高度。",
    "reviewerNote": "重新由已知條件獨立計算：標桿三角形以水平地面形成直角；坡面處的邊與鉛直樹干不一定形成相同角，因此兩三角形不保證有兩組相等角。 四個選項逐一核對後，只有「不能，坡面影長不一定對應同一水平角模型」符合；主要排除點是「只看到同一陽光就忽略地面几何條件。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u18-aa-q010",
    "unitId": "u18",
    "skillId": "similarity-aa",
    "svgPath": "figures/u18/u18-aa-q010.svg",
    "canvas": {
      "width": 640,
      "height": 420,
      "viewBox": "0 0 640 420"
    },
    "title": "視線測高與直立標桿",
    "altText": "觀測點 P 經標桿頂 A 看向塔頂 T；AB 與 QT 直立，PBQ 為地面直線。",
    "drawingSpec": {
      "purpose": "呈現AA測高所需的共用視線角與兩個直角。",
      "coordinateSystem": "SVG origin at upper-left; x increases rightward and y downward.",
      "exactGeometry": {
        "P": [
          70,
          345
        ],
        "B": [
          220,
          345
        ],
        "A": [
          220,
          245
        ],
        "Q": [
          535,
          345
        ],
        "T": [
          535,
          105
        ],
        "sightLine": "P-A-T collinear by construction"
      },
      "labels": {
        "P": [
          50,
          375
        ],
        "B": [
          204,
          375
        ],
        "A": [
          202,
          235
        ],
        "Q": [
          540,
          375
        ],
        "T": [
          542,
          105
        ]
      },
      "lineRules": {
        "visible": [
          "ground PBQ",
          "rod AB",
          "tower QT"
        ],
        "hidden": [],
        "dashed": [
          "sight PAT"
        ]
      },
      "symbolsAndMarks": {
        "rightAngles": [
          "PBA",
          "PQT"
        ]
      },
      "scalePolicy": "not-to-scale",
      "visualInferenceWarning": "圖形不按比例；只能依標示與題目條件推理。",
      "mobileConstraints": "At 320 CSS px width, primary labels must remain at least 9 px apparent height and no label may overlap a segment.",
      "accessibility": {
        "title": "視線測高與直立標桿",
        "description": "觀測點 P、標桿底 B、塔底 Q 位於同一直線；標桿 AB 與塔 QT 垂直地面，P、A、T 共線。",
        "altText": "觀測點 P 經標桿頂 A 看向塔頂 T；AB 與 QT 直立，PBQ 為地面直線。"
      }
    },
    "svgAssertions": [
      "id=\"ground-pbq\"",
      "id=\"rod-ab\"",
      "id=\"tower-qt\"",
      "id=\"sight-pat\""
    ],
    "figureReview": {
      "decision": "pass",
      "reviewedAt": "2026-07-12",
      "geometryCheck": "pass",
      "mobileReadability": "pass",
      "answerLeakageCheck": "pass",
      "reviewNote": "檢查 P、A、T 共線且兩直立線對地面呈直角；未標任何可直接洩漏塔高的數字。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "200c0b1967cb8f6ac99e9dd840c6b10c1db735a9349a3065eca004d511b240ac"
  },
  {
    "figureId": "u18-aa-cr001",
    "unitId": "u18",
    "skillId": "similarity-aa",
    "svgPath": "figures/u18/u18-aa-cr001.svg",
    "canvas": {
      "width": 640,
      "height": 420,
      "viewBox": "0 0 640 420"
    },
    "title": "平行截線的AA證明圖",
    "altText": "三角形ABC內有DE平行BC，供列出AA相似的對應角。",
    "drawingSpec": {
      "purpose": "讓學生明確列出AA相似證明中的頂點與平行線角。",
      "coordinateSystem": "SVG origin at upper-left; x increases rightward and y downward.",
      "exactGeometry": {
        "A": [
          320,
          55
        ],
        "B": [
          90,
          350
        ],
        "C": [
          555,
          350
        ],
        "D": [
          228,
          173
        ],
        "E": [
          414,
          173
        ]
      },
      "labels": {
        "vertices": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ]
      },
      "lineRules": {
        "visible": [
          "AB",
          "AC",
          "BC",
          "DE"
        ],
        "parallel": [
          "DE",
          "BC"
        ],
        "hidden": []
      },
      "symbolsAndMarks": {
        "parallelMarks": "double chevrons",
        "angleArc": "at A to emphasize shared angle only"
      },
      "scalePolicy": "not-to-scale",
      "visualInferenceWarning": "圖形不按比例；只能依標示與題目條件推理。",
      "mobileConstraints": "At 320 CSS px width, primary labels must remain at least 9 px apparent height and no label may overlap a segment.",
      "accessibility": {
        "title": "平行截線的AA證明圖",
        "description": "△ABC中D在AB、E在AC，DE平行BC；圖上標示共用頂點A及平行記號，供證明△ADE與△ABC相似。",
        "altText": "三角形ABC內有DE平行BC，供列出AA相似的對應角。"
      }
    },
    "svgAssertions": [
      "id=\"aa-cr-triangle\"",
      "id=\"aa-cr-de\"",
      "id=\"aa-cr-angle-a\""
    ],
    "figureReview": {
      "decision": "pass",
      "reviewedAt": "2026-07-12",
      "geometryCheck": "pass",
      "mobileReadability": "pass",
      "answerLeakageCheck": "pass",
      "reviewNote": "平行記號與共用角提示足夠，但未直接畫出所有相等角弧，保留學生證明工作。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "fa20589266fffc2398a659a2942f27fe14796bfb21d4a277d3ac154dd62e5143"
  }
];

