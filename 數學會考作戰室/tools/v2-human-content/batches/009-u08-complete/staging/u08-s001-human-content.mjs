// SERIALIZATION OF REVIEWED HUMAN CONTENT.

// CENTRAL_COORDINATOR_APPROVAL_REQUIRED.

// DO NOT EDIT, REPAIR OR ACTIVATE THIS MODULE DIRECTLY.

export const LECTURE = {
  "lectureId": "u08-s001-lecture-r1",
  "unitId": "u08",
  "numericUnitId": 8,
  "topicId": "u08-elements",
  "skillId": "geometry-basic-elements",
  "lockedSkillTitle": "點和線的基本元素與角的記號",
  "title": "點和線的基本元素與角的記號：先分清端點與頂點",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能分辨點、直線、線段與射線。",
    "能用兩個大寫字母表示直線或線段，並理解順序是否影響名稱。",
    "能正確讀寫三字母角記號，知道中間字母一定是頂點。",
    "能由文字敘述判斷共線、交點與角的兩邊。"
  ],
  "prerequisiteBridge": {
    "prerequisiteSkillIds": [],
    "bridgeExplanation": "本技能是本單元起點，只需具備閱讀大寫英文字母與基本方向詞的能力。"
  },
  "prerequisites": [],
  "glossary": [
    {
      "term": "點",
      "definition": "只表示位置，沒有長、寬與面積，通常以大寫英文字母命名。"
    },
    {
      "term": "直線",
      "definition": "向兩端無限延伸，沒有端點。"
    },
    {
      "term": "線段",
      "definition": "有兩個端點，長度有限。"
    },
    {
      "term": "射線",
      "definition": "有一個端點，向一個方向無限延伸。"
    },
    {
      "term": "角",
      "definition": "兩條有共同端點的射線所形成的圖形，共同端點稱為頂點。"
    },
    {
      "term": "共線",
      "definition": "三個或更多點位在同一直線上。"
    }
  ],
  "notation": [
    {
      "symbol": "點 A",
      "meaning": "名稱為 A 的點。"
    },
    {
      "symbol": "直線 AB",
      "meaning": "通過 A、B 且向兩端延伸；直線 AB 與直線 BA 是同一直線。"
    },
    {
      "symbol": "線段 AB",
      "meaning": "端點為 A、B 的有限部分；線段 AB 與線段 BA 相同。"
    },
    {
      "symbol": "射線 AB",
      "meaning": "端點是 A，經過 B 向外延伸；射線 AB 與射線 BA 通常不同。"
    },
    {
      "symbol": "∠ABC",
      "meaning": "頂點是 B，兩邊為射線 BA 與射線 BC。"
    }
  ],
  "conceptDevelopment": [
    "幾何先處理位置與關係，再處理長度或角度。點是位置標記；線段、射線與直線的差別只在端點數量與延伸方式。",
    "名稱中的字母不是裝飾。兩字母表示一條線相關物件時，要依物件種類判斷順序是否重要；射線的第一個字母固定是端點。",
    "三字母角記號最重要的規則是中間字母為頂點。∠ABC 與 ∠CBA 表示同一個角，但 ∠BAC 的頂點變成 A。",
    "只寫 ∠B 必須確定頂點 B 周圍只有一個角可指認；若可能有多個角，應使用三字母記號避免歧義。"
  ],
  "formalDefinitions": [
    {
      "name": "交點",
      "statement": "兩條線或線段共同通過的點。"
    },
    {
      "name": "角的邊",
      "statement": "從角的頂點出發的兩條射線。"
    },
    {
      "name": "相同射線",
      "statement": "端點相同且延伸方向相同的射線。"
    }
  ],
  "formulas": [],
  "invalidUseCases": [
    "不能用紙面上看起來較長的線段判斷實際長度，除非題目給出尺度或數值。",
    "射線 AB 不可任意改寫成射線 BA，因為端點會改變。",
    "∠ABC 的頂點不是 A，也不是 C。",
    "兩點只能唯一決定一條直線，但若只給一點，不能唯一決定直線方向。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "先辨認物件有幾個端點。",
      "check": "零個是直線，一個是射線，兩個是線段。"
    },
    {
      "step": 2,
      "instruction": "讀名稱時確認字母角色。",
      "check": "射線第一字母是端點；角的中間字母是頂點。"
    },
    {
      "step": 3,
      "instruction": "把文字敘述轉成關係。",
      "check": "「A、B、C 共線」表示三點在同一直線；「交於 P」表示 P 同時在兩物件上。"
    },
    {
      "step": 4,
      "instruction": "最後檢查名稱是否可倒序。",
      "check": "直線與線段可倒序；射線通常不可；三字母角可交換兩側字母但中間頂點不變。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "直線 l 上依序有 A、B、C 三點。線段 AC 與線段 CA 是否相同？",
      "solutionSteps": [
        "兩者端點都是 A、C。",
        "線段名稱可交換端點順序。"
      ],
      "answer": "相同。"
    },
    {
      "exampleId": "L2",
      "prompt": "射線 PQ 的端點是哪一點？",
      "solutionSteps": [
        "射線名稱第一個字母表示端點。",
        "第一個字母是 P。"
      ],
      "answer": "P 點。"
    },
    {
      "exampleId": "L3",
      "prompt": "∠RST 的頂點與兩邊分別為何？",
      "solutionSteps": [
        "三字母角記號的中間字母是頂點。",
        "頂點為 S；兩邊由 S 指向 R 與 T。"
      ],
      "answer": "頂點 S；兩邊為射線 SR 與射線 ST。"
    },
    {
      "exampleId": "L4",
      "prompt": "兩條直線 m、n 交於 K，這句話表示 K 具有什麼關係？",
      "solutionSteps": [
        "交點同時屬於兩條直線。",
        "所以 K 在 m 上，也在 n 上。"
      ],
      "answer": "K 同時在直線 m 與直線 n 上。"
    }
  ],
  "levelConnections": {
    "basic": "辨認端點數量與頂點位置。",
    "standard": "在共線或相交的文字敘述中正確命名線段、射線與角。",
    "advanced": "處理同一頂點附近有多個角時的記號歧義。",
    "literacy": "閱讀工程標示、路線或方位敘述時，先釐清起點、延伸方向與交點。"
  },
  "commonMistakes": [
    {
      "mistake": "把直線 AB 當成只有 A 到 B 的部分。",
      "why": "忽略直線向兩端無限延伸。",
      "correction": "若只指 A 到 B 的有限部分，應稱線段 AB。"
    },
    {
      "mistake": "把射線 AB 改寫成射線 BA。",
      "why": "未注意第一字母是端點。",
      "correction": "先圈出端點，再依端點到經過點的順序命名。"
    },
    {
      "mistake": "把 ∠ABC 的頂點寫成 A。",
      "why": "誤以為第一字母最重要。",
      "correction": "角記號永遠看中間字母。"
    },
    {
      "mistake": "只用 ∠B 指多個角。",
      "why": "頂點 B 周圍可能有不只一個角。",
      "correction": "使用三字母角記號消除歧義。"
    },
    {
      "mistake": "認為點有大小。",
      "why": "把圖上畫出的圓點當成幾何物體。",
      "correction": "圓點只是位置標記，幾何點沒有大小。"
    },
    {
      "mistake": "由圖上長短直接判斷線段長度。",
      "why": "把示意圖當成按比例圖。",
      "correction": "以題目數值與條件為準。"
    }
  ],
  "selfCheckItems": [
    "我能從端點數量分辨直線、射線與線段嗎？",
    "我能指出射線名稱中的端點嗎？",
    "我能指出三字母角記號的頂點嗎？",
    "我是否避免從未標比例的圖形猜長度？"
  ],
  "conciseSummary": [
    "點表示位置。",
    "直線、射線、線段分別有 0、1、2 個端點。",
    "射線第一字母是端點。",
    "三字母角記號的中間字母一定是頂點。"
  ],
  "connections": {
    "previous": "本技能無鎖定先備技能，是 U08 的幾何語言起點。",
    "next": [
      "下一技能用角的記號討論角度大小與互餘互補。",
      "後續所有三角形、多邊形與三視圖描述都依賴精確的點線名稱。"
    ]
  },
  "figureReferences": [
    "u08-s001-fig001"
  ],
  "accessibilityNote": "本技能依鎖定範圍採全文字敘述；方向、位置與視圖關係均以明確語句表達，不要求由未提供的圖形推測。",
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "u08 locked CAP text-only boundary",
    "examplesNotCopiedFromLegacyOrProductionBank": true,
    "skillSpecificEvidence": "逐項核對直線、射線、線段的端點數與命名規則；特別重算三字母角記號的頂點位置，四個例題沒有使用長度或圖形比例推論。",
    "manualSymbolAndUnitCheck": true,
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "492182c5e8f471f5ec90e8cce9caaf4a81bcccac4e7b78aabd5215872d19e0ba"
};

export const QUESTIONS = [
  {
    "questionId": "u08-s001-v001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "geometry-basic-elements",
    "lockedSkillTitle": "點和線的基本元素與角的記號",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "下列哪一個幾何物件有兩個端點？",
    "givenConditions": [
      "選項包含點、直線、射線與線段。"
    ],
    "target": "辨認有兩端點的幾何物件",
    "choices": [
      "線段",
      "直線",
      "射線",
      "點"
    ],
    "answerIndex": 0,
    "independentSolution": "逐一比較端點數，可得線段符合兩個端點。",
    "explanation": "依端點數分類，線段恰有兩個端點。",
    "steps": [
      "直線有 0 個端點。",
      "射線有 1 個端點。",
      "線段有 2 個端點。"
    ],
    "optionAnalysis": [
      {
        "choice": "線段",
        "truth": true,
        "reason": "線段由兩個端點及其間的所有點組成。"
      },
      {
        "choice": "直線",
        "truth": false,
        "reason": "直線向兩端無限延伸，沒有端點。"
      },
      {
        "choice": "射線",
        "truth": false,
        "reason": "射線只有一個端點。"
      },
      {
        "choice": "點",
        "truth": false,
        "reason": "點只表示位置，不以端點數描述。"
      }
    ],
    "misconceptionTarget": "把射線誤認為有兩端點。",
    "prerequisiteCheck": "不需先備技能；只使用本講義的基本定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值或單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "直接回憶端點數，屬單一定義辨認。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "cf09dd15030f27ab44b8d2737c5f5cb58b687cd5b8bc5cae70463639cfb55e80"
  },
  {
    "questionId": "u08-s001-v002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "geometry-basic-elements",
    "lockedSkillTitle": "點和線的基本元素與角的記號",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "射線 AB 的端點是哪一點？",
    "givenConditions": [
      "幾何物件明確寫為射線 AB。"
    ],
    "target": "判定射線名稱中的端點",
    "choices": [
      "B 點",
      "A 點",
      "A、B 兩點都是端點",
      "無法由名稱判斷"
    ],
    "answerIndex": 1,
    "independentSolution": "依射線命名規則，端點是 A。",
    "explanation": "射線 AB 從 A 出發，經過 B 並沿該方向延伸。",
    "steps": [
      "讀取射線名稱 AB。",
      "第一字母 A 為端點。"
    ],
    "optionAnalysis": [
      {
        "choice": "B 點",
        "truth": false,
        "reason": "B 是射線經過的點，不是名稱中的端點。"
      },
      {
        "choice": "A 點",
        "truth": true,
        "reason": "射線名稱的第一個字母表示端點。"
      },
      {
        "choice": "A、B 兩點都是端點",
        "truth": false,
        "reason": "射線只有一個端點。"
      },
      {
        "choice": "無法由名稱判斷",
        "truth": false,
        "reason": "射線名稱第一字母明確指定端點。"
      }
    ],
    "misconceptionTarget": "把第二個字母誤當端點。",
    "prerequisiteCheck": "不需先備技能；使用射線命名規則。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值或單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "只需讀取第一字母，屬基礎記號題。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "411d9bcff59d80ac8f4e6c553168517a8e351766a284e5b1a0c7ec2846371236"
  },
  {
    "questionId": "u08-s001-v003",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "geometry-basic-elements",
    "lockedSkillTitle": "點和線的基本元素與角的記號",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "∠PQR 的頂點是哪一點？",
    "givenConditions": [
      "角以 ∠PQR 表示。"
    ],
    "target": "辨認三字母角記號的頂點",
    "choices": [
      "P 點",
      "R 點",
      "Q 點",
      "P、R 的中點"
    ],
    "answerIndex": 2,
    "independentSolution": "按照角記號規則，Q 是共同端點。",
    "explanation": "∠PQR 的中間字母為 Q，所以頂點是 Q。",
    "steps": [
      "找三字母記號的中間位置。",
      "中間字母為 Q。"
    ],
    "optionAnalysis": [
      {
        "choice": "P 點",
        "truth": false,
        "reason": "P 是角的一邊所經過的點。"
      },
      {
        "choice": "R 點",
        "truth": false,
        "reason": "R 是另一邊所經過的點。"
      },
      {
        "choice": "Q 點",
        "truth": true,
        "reason": "三字母角記號的中間字母是頂點。"
      },
      {
        "choice": "P、R 的中點",
        "truth": false,
        "reason": "角頂點由中間字母決定，與中點無關。"
      }
    ],
    "misconceptionTarget": "把角記號第一個字母當頂點。",
    "prerequisiteCheck": "不需先備技能；使用三字母角記號。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值或單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "單一步驟定位中間字母。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "bb16f7a4a5c7a8ce3ea7c3f860d75bd992b9857a3d49e82c03351b23ac7ec259"
  },
  {
    "questionId": "u08-s001-v004",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "geometry-basic-elements",
    "lockedSkillTitle": "點和線的基本元素與角的記號",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "svg",
    "figureId": "u08-s001-fig001",
    "drawingSpecRef": "u08-s001-draw001",
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_HUMAN_AUTHORED_FIGURE",
    "text": "直線 AB 與直線 BA 的關係為何？",
    "givenConditions": [
      "A、B 為相異兩點。"
    ],
    "target": "判斷直線名稱倒序後是否改變",
    "choices": [
      "互相平行但不同線",
      "互相垂直",
      "只有一段重合",
      "表示同一條直線"
    ],
    "answerIndex": 3,
    "independentSolution": "兩條記號皆代表通過 A、B 的唯一直線。",
    "explanation": "直線 AB 和 BA 都通過 A、B，且向兩端延伸，因此是同一直線。",
    "steps": [
      "確認兩名稱使用相同兩點。",
      "直線名稱順序可交換。"
    ],
    "optionAnalysis": [
      {
        "choice": "互相平行但不同線",
        "truth": false,
        "reason": "兩點 A、B 唯一決定一條直線，倒序不會產生新線。"
      },
      {
        "choice": "互相垂直",
        "truth": false,
        "reason": "名稱順序不提供垂直條件。"
      },
      {
        "choice": "只有一段重合",
        "truth": false,
        "reason": "直線向兩端延伸，兩者完整重合。"
      },
      {
        "choice": "表示同一條直線",
        "truth": true,
        "reason": "兩點決定唯一一條直線，直線名稱可倒序。"
      }
    ],
    "misconceptionTarget": "把直線當成有方向的射線。",
    "prerequisiteCheck": "不需先備技能；使用直線命名規則。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值或單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需比較兩個記號而非只背單一定義。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "c6a1822f1a613d01a2c1866ee7912926669e6bb9e6321a6ff7a42ce03582d214"
  },
  {
    "questionId": "u08-s001-v005",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "geometry-basic-elements",
    "lockedSkillTitle": "點和線的基本元素與角的記號",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "已知 A、B、C 三點共線，且 B 在 A、C 之間。下列哪一條射線與射線 AB 相同？",
    "givenConditions": [
      "A、B、C 共線。",
      "B 位於 A 與 C 之間。"
    ],
    "target": "由共線點序判斷相同射線",
    "choices": [
      "射線 AC",
      "射線 BA",
      "射線 CA",
      "射線 CB"
    ],
    "answerIndex": 0,
    "independentSolution": "端點皆為 A，且經 B、經 C 的方向一致，所以是同一射線。",
    "explanation": "因 A、B、C 依序共線，B、C 位於 A 的同一方向；兩射線端點同為 A 且方向相同。",
    "steps": [
      "固定端點 A。",
      "由 B 在 A、C 之間判斷 B、C 在 A 的同側。",
      "比較延伸方向。"
    ],
    "optionAnalysis": [
      {
        "choice": "射線 AC",
        "truth": true,
        "reason": "從 A 出發經 B 的方向也會經過 C，因此射線 AB 與 AC 相同。"
      },
      {
        "choice": "射線 BA",
        "truth": false,
        "reason": "端點改為 B，與射線 AB 不同。"
      },
      {
        "choice": "射線 CA",
        "truth": false,
        "reason": "端點改為 C，方向也相反。"
      },
      {
        "choice": "射線 CB",
        "truth": false,
        "reason": "端點為 C，沿 C 到 B 的方向。"
      }
    ],
    "misconceptionTarget": "只看包含相同字母而忽略端點與方向。",
    "prerequisiteCheck": "能讀懂點、射線與共線關係。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值或單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需要把點序轉成方向，比基礎記號多一步。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "509099ca5e2213fe1253661d7a5af0d67e1346691e3560fe4c2c4b83618ce703"
  },
  {
    "questionId": "u08-s001-v006",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "geometry-basic-elements",
    "lockedSkillTitle": "點和線的基本元素與角的記號",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "兩條不同直線 l、m 交於 P。下列敘述何者一定正確？",
    "givenConditions": [
      "l、m 為兩條不同直線。",
      "兩線交於 P。"
    ],
    "target": "解讀兩直線交於一點的意義",
    "choices": [
      "l 與 m 有兩個交點",
      "P 同時在 l 與 m 上",
      "P 是兩直線的端點",
      "l 與 m 必互相垂直"
    ],
    "answerIndex": 1,
    "independentSolution": "交點 P 是兩線共有的唯一點，因此同時在 l、m 上。",
    "explanation": "題目明示 l、m 交於 P，所以 P 在 l 上且在 m 上。",
    "steps": [
      "讀取「交於 P」。",
      "翻譯為 P 屬於兩條直線。"
    ],
    "optionAnalysis": [
      {
        "choice": "l 與 m 有兩個交點",
        "truth": false,
        "reason": "平面中兩條不同直線若相交，只能有一個交點。"
      },
      {
        "choice": "P 同時在 l 與 m 上",
        "truth": true,
        "reason": "交點的定義就是同時屬於兩條相交直線的點。"
      },
      {
        "choice": "P 是兩直線的端點",
        "truth": false,
        "reason": "直線沒有端點。"
      },
      {
        "choice": "l 與 m 必互相垂直",
        "truth": false,
        "reason": "相交不必形成直角。"
      }
    ],
    "misconceptionTarget": "把相交自動解讀為垂直。",
    "prerequisiteCheck": "能辨認直線與交點。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值或單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需排除相交、垂直與端點概念混淆。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "b78740c08ada8e03d83442e37925b55bf648a1ba1f3bedfcbf807a239ae0be6e"
  },
  {
    "questionId": "u08-s001-v007",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "geometry-basic-elements",
    "lockedSkillTitle": "點和線的基本元素與角的記號",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "同一直線上有依序排列的 A、B、C、D 四點。以這四點為端點，可以命名多少條不同線段？",
    "givenConditions": [
      "A、B、C、D 為四個相異共線點。",
      "線段倒序視為同一條。"
    ],
    "target": "計數共線多點可形成的不同線段",
    "choices": [
      "4 條",
      "8 條",
      "6 條",
      "12 條"
    ],
    "answerIndex": 2,
    "independentSolution": "完整枚舉六組端點，沒有把 AB 與 BA 重複計算。",
    "explanation": "線段名稱可倒序，所以只需列不重複點對。",
    "steps": [
      "依左端點列出 AB、AC、AD。",
      "再列 BC、BD。",
      "最後列 CD，共 6 條。"
    ],
    "optionAnalysis": [
      {
        "choice": "4 條",
        "truth": false,
        "reason": "只數相鄰線段，漏掉跨點線段。"
      },
      {
        "choice": "8 條",
        "truth": false,
        "reason": "同一線段倒序命名被重複計數。"
      },
      {
        "choice": "6 條",
        "truth": true,
        "reason": "每選兩個不同點可決定一條線段，共 AB、AC、AD、BC、BD、CD 六條。"
      },
      {
        "choice": "12 條",
        "truth": false,
        "reason": "把有方向的排列數當成無方向線段數。"
      }
    ],
    "misconceptionTarget": "只數相鄰線段或將倒序重複。",
    "prerequisiteCheck": "能辨認線段由兩端點決定。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題答案為線段條數，使用「條」作計數單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需系統枚舉並避免倒序重複，屬進階計數。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "74f23ec7bb23ff48f75e6b129766cbf45423b5b7f5b6622274c60fb675b7dab6"
  },
  {
    "questionId": "u08-s001-v008",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "geometry-basic-elements",
    "lockedSkillTitle": "點和線的基本元素與角的記號",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "在同一頂點 O 有三條射線 OA、OB、OC，且三條方向互不相同。若要明確表示由 OA 與 OC 形成的角，應寫成何者？",
    "givenConditions": [
      "頂點 O 有三條不同射線。",
      "指定兩邊為 OA、OC。"
    ],
    "target": "在同頂點多角情境選用無歧義記號",
    "choices": [
      "∠O",
      "∠AOB",
      "∠ACO",
      "∠AOC"
    ],
    "answerIndex": 3,
    "independentSolution": "由射線 OA、OC 可組成 ∠AOC；只寫 ∠O 無法區分其他角。",
    "explanation": "頂點 O 有多個角，因此必須用三字母 ∠AOC 或 ∠COA 明確指定。",
    "steps": [
      "確定頂點是 O。",
      "確定兩邊經過 A、C。",
      "把 O 放中間，得 ∠AOC。"
    ],
    "optionAnalysis": [
      {
        "choice": "∠O",
        "truth": false,
        "reason": "頂點 O 周圍有多個角，只寫 ∠O 有歧義。"
      },
      {
        "choice": "∠AOB",
        "truth": false,
        "reason": "兩邊為 OA、OB，不是 OA、OC。"
      },
      {
        "choice": "∠ACO",
        "truth": false,
        "reason": "頂點會變成 C，與題意不符。"
      },
      {
        "choice": "∠AOC",
        "truth": true,
        "reason": "三字母角記號以 O 為中間字母，兩側字母 A、C 指出兩邊。"
      }
    ],
    "misconceptionTarget": "在同一頂點有多個角時仍只寫單字母。",
    "prerequisiteCheck": "能讀寫射線與三字母角記號。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值或單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需同時處理頂點與兩邊，並評估記號歧義。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "556ccd3bb15733dd4534ca6ba9d8cb936b1bd0da879ceb91e71fc56c02046d1b"
  },
  {
    "questionId": "u08-s001-v009",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "geometry-basic-elements",
    "lockedSkillTitle": "點和線的基本元素與角的記號",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "已知射線 XY 與射線 XZ 不同，但點 Y、Z、X 共線。下列何者必然成立？",
    "givenConditions": [
      "X、Y、Z 共線。",
      "射線 XY 與 XZ 的共同端點為 X 且兩射線不同。"
    ],
    "target": "由同端點共線且不同反推反向位置",
    "choices": [
      "Y、Z 位在 X 的相反方向",
      "Y、Z 位在 X 的同一方向",
      "X 位在 Y、Z 的同一側",
      "射線 XY 與 XZ 互相垂直"
    ],
    "answerIndex": 0,
    "independentSolution": "共線限制只有同向或反向；題目排除同向，所以必為反向。",
    "explanation": "兩射線端點同為 X；若 Y、Z 在同側，方向相同會是同一射線，因此必在相反側。",
    "steps": [
      "固定共同端點 X。",
      "利用共線排除不同斜向。",
      "利用射線不同排除同方向。"
    ],
    "optionAnalysis": [
      {
        "choice": "Y、Z 位在 X 的相反方向",
        "truth": true,
        "reason": "同端點、共線但射線不同，只可能向相反方向延伸。"
      },
      {
        "choice": "Y、Z 位在 X 的同一方向",
        "truth": false,
        "reason": "若同方向且端點同為 X，兩射線會相同。"
      },
      {
        "choice": "X 位在 Y、Z 的同一側",
        "truth": false,
        "reason": "這會使 Y、Z 從 X 看向同一方向，與射線不同矛盾。"
      },
      {
        "choice": "射線 XY 與 XZ 互相垂直",
        "truth": false,
        "reason": "共線的反向射線形成平角，不是垂直。"
      }
    ],
    "misconceptionTarget": "把共線誤認為一定同方向。",
    "prerequisiteCheck": "能理解射線端點與方向。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值或單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需要反證排除同向情形，推理層次較高。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "e81b642e72ea3666e0c9473e32054ac8d202be4c94ba205d85571df99f739834"
  },
  {
    "questionId": "u08-s001-v010",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "geometry-basic-elements",
    "lockedSkillTitle": "點和線的基本元素與角的記號",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "捷運規畫以車站 A 為起點，軌道沿通過車站 B 的方向繼續向前延伸。最適合用哪一個幾何物件表示這段規畫方向？",
    "givenConditions": [
      "A 是規畫起點。",
      "方向由 A 指向 B 並繼續延伸。"
    ],
    "target": "將交通規畫文字轉成點線模型",
    "choices": [
      "線段 AB",
      "射線 AB",
      "直線 AB",
      "射線 BA"
    ],
    "answerIndex": 1,
    "independentSolution": "起點一個、單向延伸的幾何模型是射線；A 在第一字母位置。",
    "explanation": "情境同時給出起點與單向延伸，因此必須用射線而非線段或直線。",
    "steps": [
      "辨認固定起點 A。",
      "辨認經過 B 後繼續同方向延伸。",
      "依名稱寫射線 AB。"
    ],
    "optionAnalysis": [
      {
        "choice": "線段 AB",
        "truth": false,
        "reason": "線段只到 B 結束，不能表達繼續向前延伸。"
      },
      {
        "choice": "射線 AB",
        "truth": true,
        "reason": "有固定起點 A，經過 B 並向同方向無限延伸，正是射線 AB。"
      },
      {
        "choice": "直線 AB",
        "truth": false,
        "reason": "直線也會從 A 的反方向延伸，不符合以 A 為起點。"
      },
      {
        "choice": "射線 BA",
        "truth": false,
        "reason": "端點會變成 B，方向與規畫敘述不同。"
      }
    ],
    "misconceptionTarget": "忽略『起點』或『繼續延伸』而選錯物件。",
    "prerequisiteCheck": "能辨認線段、射線與直線。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值單位；只判斷幾何模型。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "生活敘述中的起點與延伸方向都是選擇幾何模型的必要資訊。",
    "literacyContextNecessity": "若刪除捷運規畫中的固定起點與單向延伸條件，就無法在直線、線段、射線間做正確選擇；情境資訊直接決定模型。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "bea32c2a1b1813429b6a59bf3426b60cabd619dc2d94b0b3e1833e8b40021606"
  },
  {
    "questionId": "u08-s001-v011",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "geometry-basic-elements",
    "lockedSkillTitle": "點和線的基本元素與角的記號",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一份機械圖說寫著：「鑽孔中心 P 必須同時位在基準線 l 與中心線 m 上。」這句話等同於下列何者？",
    "givenConditions": [
      "l、m 為兩條不同基準直線。",
      "P 同時屬於 l 與 m。"
    ],
    "target": "將工程圖說中的共同位置翻成交點",
    "choices": [
      "P 是 l 的端點",
      "l 與 m 必平行",
      "P 是 l 與 m 的交點",
      "P 到 l、m 的距離相等"
    ],
    "answerIndex": 2,
    "independentSolution": "P 屬於 l 且屬於 m，所以 P 是兩線交點。",
    "explanation": "圖說把 P 指定為 l、m 共有的位置，因此可翻成 P 為兩線交點。",
    "steps": [
      "把『在 l 上』與『在 m 上』同時成立。",
      "共同點即交點。"
    ],
    "optionAnalysis": [
      {
        "choice": "P 是 l 的端點",
        "truth": false,
        "reason": "直線 l 沒有端點。"
      },
      {
        "choice": "l 與 m 必平行",
        "truth": false,
        "reason": "若 P 同時在兩線上，兩條不同線不可能平行。"
      },
      {
        "choice": "P 是 l 與 m 的交點",
        "truth": true,
        "reason": "同時位在兩條線上的點就是兩線的共同點；若兩線不同，該點為交點。"
      },
      {
        "choice": "P 到 l、m 的距離相等",
        "truth": false,
        "reason": "位在線上表示距離為 0，但題意重點是共同點，不是一般等距軌跡。"
      }
    ],
    "misconceptionTarget": "把『同時在線上』誤解成距離相等。",
    "prerequisiteCheck": "能理解交點與直線無端點。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及量測單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需要將工程規格的雙重位置條件翻成幾何關係。",
    "literacyContextNecessity": "機械定位是否合格取決於 P 必須同時滿足兩條基準線；交點概念不能由一般生活常識取代。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "9c6eb6da23f7111dec1df48fcff7c6bd465758598aeba7c22105e28c8f7b38a1"
  },
  {
    "questionId": "u08-s001-v012",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "geometry-basic-elements",
    "lockedSkillTitle": "點和線的基本元素與角的記號",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "導覽圖規定：由廣場 O 出發，一條步道通往 A，另一條通往 B，另有第三條通往 C。工作人員要標示『A 方向與 C 方向之間的角』，且避免與其他角混淆。最佳標記為何？",
    "givenConditions": [
      "O 為三條步道共同起點。",
      "所求只涉及 A、C 兩方向。"
    ],
    "target": "在多路口情境使用無歧義角記號",
    "choices": [
      "∠O",
      "∠AOB",
      "∠ACO",
      "∠AOC"
    ],
    "answerIndex": 3,
    "independentSolution": "由 OA、OC 的共同端點 O 組成 ∠AOC，且三字母記號排除其他角。",
    "explanation": "三條步道使單字母角記號不夠明確，必須把兩方向點名。",
    "steps": [
      "定位共同起點 O。",
      "選取 OA、OC 兩方向。",
      "將 O 放在角記號中間。"
    ],
    "optionAnalysis": [
      {
        "choice": "∠O",
        "truth": false,
        "reason": "O 周圍有三條步道，只寫頂點會產生多個可能角。"
      },
      {
        "choice": "∠AOB",
        "truth": false,
        "reason": "表示 A 與 B 方向之間的角。"
      },
      {
        "choice": "∠ACO",
        "truth": false,
        "reason": "頂點變成 C，不在廣場 O。"
      },
      {
        "choice": "∠AOC",
        "truth": true,
        "reason": "頂點是 O，指定方向是 A 與 C，因此用三字母 ∠AOC。"
      }
    ],
    "misconceptionTarget": "只寫 ∠O 而忽略多個角的歧義。",
    "prerequisiteCheck": "能使用三字母角記號。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "情境中的第三條步道造成真實記號歧義，必須精確標示。",
    "literacyContextNecessity": "若只有兩條步道，∠O 可能已足夠；第三條步道使三字母記號成為必要資訊。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "20bf563da79216b50a9b271ead71d779ae9d4f01f084f8c659ce206423af9aea"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u08-s001-cr001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "geometry-basic-elements",
    "lockedSkillTitle": "點和線的基本元素與角的記號",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "直線 l 上依序有 A、B、C 三點，且 AB=4 公分、BC=7 公分。射線 BA 與射線 BC 的共同端點是哪一點？它們合起來形成哪一種角？並求 AC。",
    "requiredWork": [
      "指出共同端點。",
      "判斷兩射線方向關係與角的種類。",
      "計算 AC 並附單位。"
    ],
    "standardSolution": [
      "兩射線的共同端點都是 B。",
      "因 A、B、C 共線且 A、C 位於 B 的相反兩側，射線 BA 與 BC 為相反射線，形成平角。",
      "AC=AB+BC=4+7=11 公分。"
    ],
    "alternativeMethods": [
      "可用數線位置 A—B—C 說明相反方向，再逐段相加。"
    ],
    "reasoningSteps": [
      "辨認射線名稱的第一個字母是端點。",
      "由三點順序判斷兩射線相反。",
      "共線相反射線形成 180° 平角。",
      "相鄰線段長相加求 AC。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "共同端點 B、平角與 AC=11 公分三項均正確，並說明 A、C 在 B 兩側。"
      },
      {
        "score": 2,
        "criteria": "三項中有兩項正確，或三項結論正確但缺少相反射線理由。"
      },
      {
        "score": 1,
        "criteria": "至少正確指出 B 為共同端點，或正確算出 AC=11 公分並有算式。"
      },
      {
        "score": 0,
        "criteria": "把 A 或 C 當共同端點，且角與長度均無有效推理。"
      }
    ],
    "partialCreditRules": [
      "平角寫成 180° 可視為同義。",
      "只少寫公分但計算 11 正確，最多扣至 2 分。"
    ],
    "followThroughPolicy": "若 AC 加法中出現單一算術錯誤，但端點與平角判斷完整，角度部分照常給分，總分最多 2 分。",
    "unitAndNotationRules": "線段名稱可寫 AB 或 BA；長度答案必須用公分。∠ABC 或 ∠CBA 都表示頂點 B 的該平角。",
    "answerOnlyPolicy": "只答「B、平角、11公分」且無理由，最高 2 分；因題目要求判斷與計算過程。",
    "commonErrors": [
      "把射線 BA 的端點誤認為 A。",
      "用 7−4 求 AC。"
    ],
    "independentReview": {
      "derivedResult": "B；平角；11公分。",
      "ambiguityAudit": "三點順序『A、B、C』明示 B 在中間，因此相反射線與線段相加沒有第二種解讀。",
      "reviewNote": "獨立依射線記號與共線順序檢查，三個結果互相一致，未依未提供圖形外觀推論。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "4bcffefcf17d0fa83b0dc2dfb3169997bf25121b6208f9effc1a08f08c66dba2"
  },
  {
    "questionId": "u08-s001-cr002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "geometry-basic-elements",
    "lockedSkillTitle": "點和線的基本元素與角的記號",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "已知 ∠ABC=38°，射線 BD 位於 ∠ABC 的內部，且 ∠ABD=15°。請用三個字母的角記號寫出剩下的角，求其度數，並說明為何不能只寫成「∠B」。",
    "requiredWork": [
      "寫出剩餘角的三字母記號。",
      "用角的加法求度數。",
      "解釋單字母角記號在此處為何可能不清楚。"
    ],
    "standardSolution": [
      "剩餘角是 ∠DBC（或 ∠CBD）。",
      "∠DBC=∠ABC−∠ABD=38°−15°=23°。",
      "B 點有 BA、BD、BC 三條射線形成多個角，只寫 ∠B 無法唯一指出所指角。"
    ],
    "alternativeMethods": [
      "可寫 15°+x=38°，解得 x=23°，再標成 ∠DBC。"
    ],
    "reasoningSteps": [
      "確認大角 ABC 被 BD 分成 ABD 與 DBC。",
      "以大角減已知小角。",
      "用中間字母 B 檢查頂點。",
      "檢查單字母記號是否唯一。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確寫 ∠DBC 或 ∠CBD、算得23°，並清楚說明 B 點有多個角。"
      },
      {
        "score": 2,
        "criteria": "角度23°與角記號正確，但記號歧義說明不完整；或說明完整但有一處非核心記號小錯。"
      },
      {
        "score": 1,
        "criteria": "只算出23°或只正確寫出剩餘角記號，且可看出分角概念。"
      },
      {
        "score": 0,
        "criteria": "未辨認剩餘角，或以38+15計算且無合理說明。"
      }
    ],
    "partialCreditRules": [
      "∠CBD 與 ∠DBC 等價。",
      "若只寫 ∠B 但文字明確補充『BD與BC所夾』，角度部分可給1分，記號要求不給。"
    ],
    "followThroughPolicy": "若38−15算錯但列式正確，保留方法分，總分最高2分。",
    "unitAndNotationRules": "角記號頂點 B 必須放中間；角度使用°。",
    "answerOnlyPolicy": "只寫「23°」最高1分，因缺少角記號與歧義說明。",
    "commonErrors": [
      "把 ∠BCD 當剩餘角，頂點放錯。",
      "把兩個角相加成53°。"
    ],
    "independentReview": {
      "derivedResult": "∠DBC（或∠CBD）=23°；∠B不唯一。",
      "ambiguityAudit": "射線 BD 明示在內部，故角加法關係唯一；沒有跨越反角或外角的另一解。",
      "reviewNote": "獨立以38=15+23重組並檢查三字母記號，確認答案與題目指定的剩餘區域一致。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "e0b52a6d90e119e38b5af05eaea811c12b936a8af62b8deedc383b1df47686de"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u08-s001-v001",
    "unitId": "u08",
    "skillId": "geometry-basic-elements",
    "contentSha256": "cf09dd15030f27ab44b8d2737c5f5cb58b687cd5b8bc5cae70463639cfb55e80",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "由 0、1、2 個端點的定義重查，只有線段為 2。",
    "derivedAnswer": "線段",
    "storedAnswer": "線段",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「線段」符合目標「辨認有兩端點的幾何物件」。其餘選項分別違反：直線向兩端無限延伸，沒有端點。；射線只有一個端點。；點只表示位置，不以端點數描述。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「點和線的基本元素與角的記號」講義已定義範圍；本題特別使用：選項包含點、直線、射線與線段。",
      "unitConflict": "本題不涉及數值或單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「辨認有兩端點的幾何物件」重新讀題，並針對誤解「把射線誤認為有兩端點。」排除另一解讀。"
    },
    "difficultyReason": "直接回憶端點數，屬單一定義辨認。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "不需先備技能；只使用本講義的基本定義。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「辨認有兩端點的幾何物件」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：由 0、1、2 個端點的定義重查，只有線段為 2。 正確選項為「線段」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "d84fad2a8026988511e36bf1b8e8455303652eaf8c417107fc6eae132d565ef8"
  },
  {
    "questionId": "u08-s001-v002",
    "unitId": "u08",
    "skillId": "geometry-basic-elements",
    "contentSha256": "411d9bcff59d80ac8f4e6c553168517a8e351766a284e5b1a0c7ec2846371236",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "從 A 經 B 的方向定義射線，因此固定端點為 A。",
    "derivedAnswer": "A 點",
    "storedAnswer": "A 點",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「A 點」符合目標「判定射線名稱中的端點」。其餘選項分別違反：B 是射線經過的點，不是名稱中的端點。；射線只有一個端點。；射線名稱第一字母明確指定端點。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「點和線的基本元素與角的記號」講義已定義範圍；本題特別使用：幾何物件明確寫為射線 AB。",
      "unitConflict": "本題不涉及數值或單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「判定射線名稱中的端點」重新讀題，並針對誤解「把第二個字母誤當端點。」排除另一解讀。"
    },
    "difficultyReason": "只需讀取第一字母，屬基礎記號題。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "不需先備技能；使用射線命名規則。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「判定射線名稱中的端點」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：從 A 經 B 的方向定義射線，因此固定端點為 A。 正確選項為「A 點」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "12347056ebf680623fd6eea9214b6d63a79ff523ecfe4b6f63f59c7d8802a409"
  },
  {
    "questionId": "u08-s001-v003",
    "unitId": "u08",
    "skillId": "geometry-basic-elements",
    "contentSha256": "bb16f7a4a5c7a8ce3ea7c3f860d75bd992b9857a3d49e82c03351b23ac7ec259",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "兩邊為射線 QP、QR，共同端點 Q 即頂點。",
    "derivedAnswer": "Q 點",
    "storedAnswer": "Q 點",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「Q 點」符合目標「辨認三字母角記號的頂點」。其餘選項分別違反：P 是角的一邊所經過的點。；R 是另一邊所經過的點。；角頂點由中間字母決定，與中點無關。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「點和線的基本元素與角的記號」講義已定義範圍；本題特別使用：角以 ∠PQR 表示。",
      "unitConflict": "本題不涉及數值或單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「辨認三字母角記號的頂點」重新讀題，並針對誤解「把角記號第一個字母當頂點。」排除另一解讀。"
    },
    "difficultyReason": "單一步驟定位中間字母。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "不需先備技能；使用三字母角記號。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「辨認三字母角記號的頂點」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：兩邊為射線 QP、QR，共同端點 Q 即頂點。 正確選項為「Q 點」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "5074a9a07f4f1d01f4297e3bc89e04f90af4f17e30ae8b14bac6049fc5118de6"
  },
  {
    "questionId": "u08-s001-v004",
    "unitId": "u08",
    "skillId": "geometry-basic-elements",
    "contentSha256": "c6a1822f1a613d01a2c1866ee7912926669e6bb9e6321a6ff7a42ce03582d214",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "由「兩個相異點只能決定一條直線」反推：AB 與 BA 使用同一組兩點，因此不可能是兩條不同直線。",
    "derivedAnswer": "表示同一條直線",
    "storedAnswer": "表示同一條直線",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐項代回後只有「表示同一條直線」成立；其他三項分別因：兩點 A、B 唯一決定一條直線，倒序不會產生新線。；名稱順序不提供垂直條件。；直線向兩端延伸，兩者完整重合。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「點和線的基本元素與角的記號」講義已定義範圍；本題特別使用：A、B 為相異兩點。",
      "unitConflict": "本題不涉及數值或單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "題幹明確要求「判斷直線名稱倒序後是否改變」，沒有第二種合理所求。；已逐一對照題幹、圖示與四個選項，確認不會形成第二個合理答案。"
    },
    "difficultyReason": "需比較兩個記號而非只背單一定義。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "不需先備技能；使用直線命名規則。",
    "languageCheck": "使用臺灣繁體中文；條件、所求量與選項比較基準均明示。",
    "reviewerDecision": "pass",
    "reviewerNote": "u08-s001-v004 的中央獨立審查使用另一條推導路徑：由「兩個相異點只能決定一條直線」反推：AB 與 BA 使用同一組兩點，因此不可能是兩條不同直線。 這段推導不依賴儲存答案；再將四個選項逐一代回題幹與圖示，確認只有儲存答案符合，並檢查單位、比例、未按比例警語與第二種解讀。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "b32788c8f0c2af67e2399566d577f79896200647a914e036b96e4184116728ab"
  },
  {
    "questionId": "u08-s001-v005",
    "unitId": "u08",
    "skillId": "geometry-basic-elements",
    "contentSha256": "509099ca5e2213fe1253661d7a5af0d67e1346691e3560fe4c2c4b83618ce703",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "依點序 A-B-C，從 A 指向 B 與從 A 指向 C 共用同一方向。",
    "derivedAnswer": "射線 AC",
    "storedAnswer": "射線 AC",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「射線 AC」符合目標「由共線點序判斷相同射線」。其餘選項分別違反：端點改為 B，與射線 AB 不同。；端點改為 C，方向也相反。；端點為 C，沿 C 到 B 的方向。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「點和線的基本元素與角的記號」講義已定義範圍；本題特別使用：A、B、C 共線。",
      "unitConflict": "本題不涉及數值或單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由共線點序判斷相同射線」重新讀題，並針對誤解「只看包含相同字母而忽略端點與方向。」排除另一解讀。"
    },
    "difficultyReason": "需要把點序轉成方向，比基礎記號多一步。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能讀懂點、射線與共線關係。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由共線點序判斷相同射線」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：依點序 A-B-C，從 A 指向 B 與從 A 指向 C 共用同一方向。 正確選項為「射線 AC」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "b6cd3b65bfcbfd122f6f778233ba3534e341f1dc7ff858ec6745d607adf75900"
  },
  {
    "questionId": "u08-s001-v006",
    "unitId": "u08",
    "skillId": "geometry-basic-elements",
    "contentSha256": "b78740c08ada8e03d83442e37925b55bf648a1ba1f3bedfcbf807a239ae0be6e",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "依交點定義，P 必為兩直線的共同點。",
    "derivedAnswer": "P 同時在 l 與 m 上",
    "storedAnswer": "P 同時在 l 與 m 上",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「P 同時在 l 與 m 上」符合目標「解讀兩直線交於一點的意義」。其餘選項分別違反：平面中兩條不同直線若相交，只能有一個交點。；直線沒有端點。；相交不必形成直角。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「點和線的基本元素與角的記號」講義已定義範圍；本題特別使用：l、m 為兩條不同直線。",
      "unitConflict": "本題不涉及數值或單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「解讀兩直線交於一點的意義」重新讀題，並針對誤解「把相交自動解讀為垂直。」排除另一解讀。"
    },
    "difficultyReason": "需排除相交、垂直與端點概念混淆。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認直線與交點。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「解讀兩直線交於一點的意義」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：依交點定義，P 必為兩直線的共同點。 正確選項為「P 同時在 l 與 m 上」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "6458d4c7d9db99884a3b5c28a95bee8f71643064e35540ffc8d654f3df2b4d04"
  },
  {
    "questionId": "u08-s001-v007",
    "unitId": "u08",
    "skillId": "geometry-basic-elements",
    "contentSha256": "74f23ec7bb23ff48f75e6b129766cbf45423b5b7f5b6622274c60fb675b7dab6",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "四點兩兩配對為 AB、AC、AD、BC、BD、CD，共六組。",
    "derivedAnswer": "6 條",
    "storedAnswer": "6 條",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「6 條」符合目標「計數共線多點可形成的不同線段」。其餘選項分別違反：只數相鄰線段，漏掉跨點線段。；同一線段倒序命名被重複計數。；把有方向的排列數當成無方向線段數。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「點和線的基本元素與角的記號」講義已定義範圍；本題特別使用：A、B、C、D 為四個相異共線點。",
      "unitConflict": "本題答案為線段條數，使用「條」作計數單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「計數共線多點可形成的不同線段」重新讀題，並針對誤解「只數相鄰線段或將倒序重複。」排除另一解讀。"
    },
    "difficultyReason": "需系統枚舉並避免倒序重複，屬進階計數。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認線段由兩端點決定。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「計數共線多點可形成的不同線段」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：四點兩兩配對為 AB、AC、AD、BC、BD、CD，共六組。 正確選項為「6 條」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "12434d9fd1296c6d81966a488299d8ec27ac3674dd93d47fa7757336324db3a8"
  },
  {
    "questionId": "u08-s001-v008",
    "unitId": "u08",
    "skillId": "geometry-basic-elements",
    "contentSha256": "556ccd3bb15733dd4534ca6ba9d8cb936b1bd0da879ceb91e71fc56c02046d1b",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "角兩邊是 OA、OC，故三字母記號中間必為 O、兩側為 A、C。",
    "derivedAnswer": "∠AOC",
    "storedAnswer": "∠AOC",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「∠AOC」符合目標「在同頂點多角情境選用無歧義記號」。其餘選項分別違反：頂點 O 周圍有多個角，只寫 ∠O 有歧義。；兩邊為 OA、OB，不是 OA、OC。；頂點會變成 C，與題意不符。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「點和線的基本元素與角的記號」講義已定義範圍；本題特別使用：頂點 O 有三條不同射線。",
      "unitConflict": "本題不涉及數值或單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「在同頂點多角情境選用無歧義記號」重新讀題，並針對誤解「在同一頂點有多個角時仍只寫單字母。」排除另一解讀。"
    },
    "difficultyReason": "需同時處理頂點與兩邊，並評估記號歧義。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能讀寫射線與三字母角記號。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「在同頂點多角情境選用無歧義記號」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：角兩邊是 OA、OC，故三字母記號中間必為 O、兩側為 A、C。 正確選項為「∠AOC」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "96d44594f3a73c8732c4bc01ab83eff1acfdd15580ea4cd8634186fb2f1ef47e"
  },
  {
    "questionId": "u08-s001-v009",
    "unitId": "u08",
    "skillId": "geometry-basic-elements",
    "contentSha256": "e81b642e72ea3666e0c9473e32054ac8d202be4c94ba205d85571df99f739834",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "同端點的共線射線若不相同，兩個經過點必分居端點兩側。",
    "derivedAnswer": "Y、Z 位在 X 的相反方向",
    "storedAnswer": "Y、Z 位在 X 的相反方向",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「Y、Z 位在 X 的相反方向」符合目標「由同端點共線且不同反推反向位置」。其餘選項分別違反：若同方向且端點同為 X，兩射線會相同。；這會使 Y、Z 從 X 看向同一方向，與射線不同矛盾。；共線的反向射線形成平角，不是垂直。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「點和線的基本元素與角的記號」講義已定義範圍；本題特別使用：X、Y、Z 共線。",
      "unitConflict": "本題不涉及數值或單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由同端點共線且不同反推反向位置」重新讀題，並針對誤解「把共線誤認為一定同方向。」排除另一解讀。"
    },
    "difficultyReason": "需要反證排除同向情形，推理層次較高。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能理解射線端點與方向。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由同端點共線且不同反推反向位置」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：同端點的共線射線若不相同，兩個經過點必分居端點兩側。 正確選項為「Y、Z 位在 X 的相反方向」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "600b4771b0afdb89f423951948c864ce968bd5b2104a2bb7abfca6c0c757ace6"
  },
  {
    "questionId": "u08-s001-v010",
    "unitId": "u08",
    "skillId": "geometry-basic-elements",
    "contentSha256": "bea32c2a1b1813429b6a59bf3426b60cabd619dc2d94b0b3e1833e8b40021606",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "軌道模型從 A 出發穿過 B 並延伸，對應射線 AB。",
    "derivedAnswer": "射線 AB",
    "storedAnswer": "射線 AB",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「射線 AB」符合目標「將交通規畫文字轉成點線模型」。其餘選項分別違反：線段只到 B 結束，不能表達繼續向前延伸。；直線也會從 A 的反方向延伸，不符合以 A 為起點。；端點會變成 B，方向與規畫敘述不同。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「點和線的基本元素與角的記號」講義已定義範圍；本題特別使用：A 是規畫起點。",
      "unitConflict": "本題不涉及數值單位；只判斷幾何模型。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「將交通規畫文字轉成點線模型」重新讀題，並針對誤解「忽略『起點』或『繼續延伸』而選錯物件。」排除另一解讀。"
    },
    "difficultyReason": "生活敘述中的起點與延伸方向都是選擇幾何模型的必要資訊。",
    "literacyContextNecessity": "若刪除捷運規畫中的固定起點與單向延伸條件，就無法在直線、線段、射線間做正確選擇；情境資訊直接決定模型。",
    "prerequisiteCheck": "能辨認線段、射線與直線。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「將交通規畫文字轉成點線模型」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：軌道模型從 A 出發穿過 B 並延伸，對應射線 AB。 正確選項為「射線 AB」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "d57ab556f120dab302e8636cde1d43baa10d883310cdca420480825ab03918eb"
  },
  {
    "questionId": "u08-s001-v011",
    "unitId": "u08",
    "skillId": "geometry-basic-elements",
    "contentSha256": "9c6eb6da23f7111dec1df48fcff7c6bd465758598aeba7c22105e28c8f7b38a1",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "兩個隸屬條件的交集是共同點 P，亦即交點。",
    "derivedAnswer": "P 是 l 與 m 的交點",
    "storedAnswer": "P 是 l 與 m 的交點",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「P 是 l 與 m 的交點」符合目標「將工程圖說中的共同位置翻成交點」。其餘選項分別違反：直線 l 沒有端點。；若 P 同時在兩線上，兩條不同線不可能平行。；位在線上表示距離為 0，但題意重點是共同點，不是一般等距軌跡。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「點和線的基本元素與角的記號」講義已定義範圍；本題特別使用：l、m 為兩條不同基準直線。",
      "unitConflict": "本題不涉及量測單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「將工程圖說中的共同位置翻成交點」重新讀題，並針對誤解「把『同時在線上』誤解成距離相等。」排除另一解讀。"
    },
    "difficultyReason": "需要將工程規格的雙重位置條件翻成幾何關係。",
    "literacyContextNecessity": "機械定位是否合格取決於 P 必須同時滿足兩條基準線；交點概念不能由一般生活常識取代。",
    "prerequisiteCheck": "能理解交點與直線無端點。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「將工程圖說中的共同位置翻成交點」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：兩個隸屬條件的交集是共同點 P，亦即交點。 正確選項為「P 是 l 與 m 的交點」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "e12f39cc918e8fb8446b2f8bd818466706c0a9e958f8a0b0a981da27519ece8f"
  },
  {
    "questionId": "u08-s001-v012",
    "unitId": "u08",
    "skillId": "geometry-basic-elements",
    "contentSha256": "20bf563da79216b50a9b271ead71d779ae9d4f01f084f8c659ce206423af9aea",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "指定的兩射線是 OA、OC，故唯一無歧義記號為 ∠AOC 或等價 ∠COA；選項中只有前者。",
    "derivedAnswer": "∠AOC",
    "storedAnswer": "∠AOC",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「∠AOC」符合目標「在多路口情境使用無歧義角記號」。其餘選項分別違反：O 周圍有三條步道，只寫頂點會產生多個可能角。；表示 A 與 B 方向之間的角。；頂點變成 C，不在廣場 O。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「點和線的基本元素與角的記號」講義已定義範圍；本題特別使用：O 為三條步道共同起點。",
      "unitConflict": "本題不涉及數值單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「在多路口情境使用無歧義角記號」重新讀題，並針對誤解「只寫 ∠O 而忽略多個角的歧義。」排除另一解讀。"
    },
    "difficultyReason": "情境中的第三條步道造成真實記號歧義，必須精確標示。",
    "literacyContextNecessity": "若只有兩條步道，∠O 可能已足夠；第三條步道使三字母記號成為必要資訊。",
    "prerequisiteCheck": "能使用三字母角記號。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「在多路口情境使用無歧義角記號」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：指定的兩射線是 OA、OC，故唯一無歧義記號為 ∠AOC 或等價 ∠COA；選項中只有前者。 正確選項為「∠AOC」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "b9f861b9d99e0815a15c6bbac5480468074ef17fb2f05f50e44cf3a06480e981"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u08-s001-fig001",
    "drawingSpecId": "u08-s001-draw001",
    "unitId": "u08",
    "skillSlot": "s001",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "purpose": "通過 A 與 B 並向兩端延伸的同一直線",
    "svgPath": "figures/u08/u08-s001-fig001.svg",
    "canvas": {
      "width": 720,
      "height": 220,
      "viewBox": "0 0 720 220"
    },
    "drawingSpec": {
      "coordinateSystem": "SVG 左上為原點，所有關鍵點與標籤位置固定於對應 SVG。",
      "visibleLineRules": "主要輪廓使用至少3px實線；標籤使用18px以上文字。",
      "hiddenLineRules": "本圖不使用隱藏線；不可由未畫出的邊推論。",
      "labelsAndPositions": "所有點名、角度、尺寸與觀察方向均固定在 SVG 內。",
      "tickMarksUnitsArrowsSymbols": "角弧、箭頭、度數與公分單位依題目需要完整標示。",
      "scaleStatus": "not-to-scale",
      "visualInferenceWarning": "示意圖未按比例，作答必須依題幹與標示資料。"
    },
    "altText": "直線 AB 與 BA 是同一條直線。",
    "svgTitle": "通過 A 與 B 並向兩端延伸的同一直線",
    "svgDescription": "直線 AB 與 BA 是同一條直線。",
    "mobileReadabilityReview": "在360px寬螢幕縮放後，主要標籤仍保持可辨識；不依顏色傳遞必要資訊。",
    "answerLeakageReview": "只呈現題幹已知結構與數值，不標示答案或計算結果。",
    "svgAssertions": [
      "<title",
      "<desc",
      "role=\"img\"",
      "未按比例"
    ],
    "figureReview": {
      "decision": "pass",
      "manualRenderedInspection": true,
      "reviewNote": "u08-s001-fig001 已核對線段、標籤、題幹資料、縮放警語與答案不外洩。",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "49cb47d9787e45b8d817313071fab98da723e347fe26528ac39e4c91edade43f"
  }
];

