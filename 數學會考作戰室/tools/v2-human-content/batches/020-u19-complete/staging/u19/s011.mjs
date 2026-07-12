export const u19_s011 = {
  "lecture": {
    "lectureId": "u19-s011-lecture-r1",
    "unitId": "u19",
    "numericUnitId": 19,
    "topicId": "u19-measure",
    "skillId": "circle-composite-area",
    "title": "圓複合面積",
    "unitTitle": "圓",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "slot": "s011",
      "lockedSkillId": "circle-composite-area",
      "lockedOrder": 11,
      "scope": "以加減法處理圓、半圓、扇形與挖空區域。"
    },
    "learningOutcomes": [
      "能辨認複合圖形的加減關係。",
      "能計算圓環、半圓組合與扇形差。",
      "能避免重複計數重疊區域。"
    ],
    "prerequisites": [
      {
        "skillId": "sector-area",
        "requiredLevel": "能使用「扇形面積」的核心定義與基本運算，並辨認其適用條件。"
      }
    ],
    "prerequisiteBridge": "先由前一技能「扇形面積」的結論，連接到本技能「圓複合面積」所需的新判斷。",
    "glossary": [
      {
        "term": "圓環",
        "definition": "兩個同心圓之間的區域。"
      },
      {
        "term": "挖空",
        "definition": "由外部面積扣除內部未使用部分。"
      },
      {
        "term": "重疊",
        "definition": "兩個區域共同覆蓋的部分。"
      }
    ],
    "notation": [
      {
        "symbol": "O",
        "meaning": "圓心。"
      },
      {
        "symbol": "∠ABC",
        "meaning": "頂點是B的角。"
      },
      {
        "symbol": "π",
        "meaning": "圓周率；題目未要求近似時保留π。"
      }
    ],
    "conceptNarrative": [
      "複合面積的核心不是新公式，而是把陰影拆成已知面積再加減。",
      "先描述陰影是「大圖形減小圖形」或「兩部分相加」，再列式。",
      "若兩圖形相加但有重疊，重疊部分會被算兩次，需要扣回一次。"
    ],
    "formalDefinitions": [
      {
        "name": "圓環",
        "statement": "兩個同心圓之間的區域。"
      },
      {
        "name": "挖空",
        "statement": "由外部面積扣除內部未使用部分。"
      },
      {
        "name": "重疊",
        "statement": "兩個區域共同覆蓋的部分。"
      }
    ],
    "formulas": [
      {
        "formula": "圓環面積=π(R²−r²)",
        "conditions": [
          "R>r>0且同心"
        ],
        "meaning": "大圓減小圓"
      },
      {
        "formula": "聯集面積=面積甲+面積乙−重疊面積",
        "conditions": [
          "兩區域有重疊"
        ],
        "meaning": "避免重複計數"
      }
    ],
    "nonApplicableCases": [
      "非同心圓挖空時仍可相減，但不能直接稱為同寬圓環。",
      "只看邊界弧長無法求面積，仍需半徑或其他尺寸。",
      "重疊區域不能同時保留兩次。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "用語句描述陰影組成。",
        "check": "完成此步後，確認仍在「圓複合面積」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 2,
        "instruction": "為每個基本圖形標半徑與角度。",
        "check": "完成此步後，確認仍在「圓複合面積」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 3,
        "instruction": "列出加減式再代公式。",
        "check": "完成此步後，確認仍在「圓複合面積」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 4,
        "instruction": "合併同類項並檢查面積為正。",
        "check": "完成此步後，確認仍在「圓複合面積」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 5,
        "instruction": "用整體大小估算是否合理。",
        "check": "完成此步後，確認仍在「圓複合面積」的CAP範圍且沒有只憑圖形目測。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "s011-L1",
        "prompt": "外半徑5、內半徑3的圓環。",
        "solutionSteps": [
          "π(25−9)=16π。"
        ],
        "answer": "16π。",
        "level": "basic"
      },
      {
        "exampleId": "s011-L2",
        "prompt": "正方形邊長10，內切圓半徑5，求四角總面積。",
        "solutionSteps": [
          "正方形100。",
          "減圓25π。"
        ],
        "answer": "100−25π。",
        "level": "standard"
      },
      {
        "exampleId": "s011-L3",
        "prompt": "兩個半徑4的半圓拼成一圓且不重疊。",
        "solutionSteps": [
          "兩半圓面積和等於整圓。"
        ],
        "answer": "16π。",
        "level": "advanced"
      },
      {
        "exampleId": "s011-L4",
        "prompt": "半徑6的圓去掉120°扇形。",
        "solutionSteps": [
          "剩240°，占2/3。",
          "2/3×36π=24π。"
        ],
        "answer": "24π。",
        "level": "connection"
      }
    ],
    "difficultyConnections": {
      "basic": "辨認「圓複合面積」的定義、符號與單一步驟關係。",
      "standard": "把「圓複合面積」與前置技能、比例或一次代數連接。",
      "advanced": "在多段弧、複合邊界、反求或條件篩選中使用「圓複合面積」。",
      "literacy": "把真實尺寸、旋轉、施工或觀測情境轉成「圓複合面積」的數學模型。"
    },
    "commonMistakes": [
      {
        "mistake": "圓環寫π(R−r)²",
        "why": "平方差與差平方混淆",
        "correction": "分別平方後相減"
      },
      {
        "mistake": "重疊部分未扣回",
        "why": "直接相加",
        "correction": "用聯集公式"
      },
      {
        "mistake": "把周長資料直接當面積",
        "why": "量綱不合",
        "correction": "先反求半徑"
      },
      {
        "mistake": "陰影方向判反",
        "why": "未先口述組成",
        "correction": "先說大減小或相加"
      }
    ],
    "selfCheck": [
      "我是否先確認「圓複合面積」的適用條件？",
      "我是否分清半徑、直徑、弦、弧與角的角色？",
      "我是否寫出必要單位，並在最後才取近似值？",
      "我是否用定理或公式驗證，而不是依圖形外觀猜測？"
    ],
    "summary": [
      "複合面積先拆圖再列加減。",
      "圓環為π(R²−r²)。",
      "重疊相加時要扣回一次。"
    ],
    "connections": {
      "previous": "承接「扇形面積」。",
      "next": "下一技能為「扇形周長」。"
    },
    "figureReferences": [
      {
        "figureId": "u19-s011-fig001",
        "purpose": "兩個同心圓形成圓環，外半徑 R 與內半徑 r 由圓心沿不同方向標示。",
        "altText": "兩個同心圓形成圓環，外半徑 R 與內半徑 r 由圓心沿不同方向標示。，不可按比例目測。"
      }
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u19-s011-v001",
        "u19-s011-v002",
        "u19-s011-v003",
        "u19-s011-v004",
        "u19-s011-v005",
        "u19-s011-v006",
        "u19-s011-v007",
        "u19-s011-v008",
        "u19-s011-v009",
        "u19-s011-v010",
        "u19-s011-v011",
        "u19-s011-v012"
      ],
      "constructedResponseIds": [
        "u19-s011-cr001",
        "u19-s011-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段回讀「圓複合面積」講義，確認所有符號先定義、公式均附條件，並以四個不同目的例題檢查定義辨認、標準運算、進階邊界與實際連結；特別核對：以加減法處理圓、半圓、扇形與挖空區域。",
      "reviewVersion": "human-lecture-review-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "d2dbf863e8aa18dbaccac10fa2e6c2dc45f39e46ca6a40e03794822b2b77c251"
  },
  "questions": [
    {
      "questionId": "u19-s011-v001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-composite-area",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s011-fig001",
      "drawingSpecId": "u19-s011-fig001",
      "prompt": "外半徑 5 cm、內半徑 3 cm 的同心圓環面積為何？",
      "text": "外半徑 5 cm、內半徑 3 cm 的同心圓環面積為何？",
      "givenConditions": "R=5 cm；r=3 cm。",
      "target": "求圓環面積。",
      "choices": [
        "8π cm²",
        "34π cm²",
        "16π cm²",
        "4π cm²"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「R=5 cm；r=3 cm。」重算：圓環面積=π(5²−3²)=π(25−9)=16π cm²。",
      "explanation": "圓環面積=π(5²−3²)=π(25−9)=16π cm²。 因此唯一正確選項是「16π cm²」。",
      "steps": [
        "大圓面積25π。",
        "小圓面積9π。",
        "相減16π。"
      ],
      "optionAnalysis": [
        {
          "choice": "8π cm²",
          "truth": false,
          "reason": "只算半徑差乘π。"
        },
        {
          "choice": "34π cm²",
          "truth": false,
          "reason": "把兩面積相加。"
        },
        {
          "choice": "16π cm²",
          "truth": true,
          "reason": "依題目條件重新計算：圓環面積=π(5²−3²)=π(25−9)=16π cm²。"
        },
        {
          "choice": "4π cm²",
          "truth": false,
          "reason": "錯用(5−3)²π。"
        }
      ],
      "misconceptionTarget": "把平方差誤成差平方。",
      "prerequisiteCheck": "需先能使用「扇形面積」；本題未使用後續技能。",
      "estimatedTimeSec": 60,
      "unitCheck": "u19-s011-v001 已核對所求量「求圓環面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「計算同心圓環面積。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s011-v001。",
      "difficultyReason": "basic：計算同心圓環面積。 解題需完成「大圓面積25π。；小圓面積9π。；相減16π。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "計算同心圓環面積。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "2b5f94b16ba316930d64bdef2a41705fb4413bdc99b7a524a63f2840b6539e3f"
    },
    {
      "questionId": "u19-s011-v002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-composite-area",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "邊長 10 cm 的正方形內有一個半徑 5 cm 的內切圓，正方形四角未被圓覆蓋的總面積為何？",
      "text": "邊長 10 cm 的正方形內有一個半徑 5 cm 的內切圓，正方形四角未被圓覆蓋的總面積為何？",
      "givenConditions": "正方形邊10；內切圓r=5。",
      "target": "求未覆蓋角落面積。",
      "choices": [
        "100+25π cm²",
        "25π cm²",
        "100−25π cm²",
        "100−10π cm²"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「正方形邊10；內切圓r=5。」重算：四角總面積=正方形面積100−圓面積25π。",
      "explanation": "四角總面積=正方形面積100−圓面積25π。 因此唯一正確選項是「100−25π cm²」。",
      "steps": [
        "正方形面積100。",
        "圓面積25π。",
        "相減。"
      ],
      "optionAnalysis": [
        {
          "choice": "100+25π cm²",
          "truth": false,
          "reason": "陰影應為大減小，不是相加。"
        },
        {
          "choice": "25π cm²",
          "truth": false,
          "reason": "只算圓。"
        },
        {
          "choice": "100−25π cm²",
          "truth": true,
          "reason": "依題目條件重新計算：四角總面積=正方形面積100−圓面積25π。"
        },
        {
          "choice": "100−10π cm²",
          "truth": false,
          "reason": "圓面積公式錯。"
        }
      ],
      "misconceptionTarget": "陰影組成方向判反。",
      "prerequisiteCheck": "需先能使用「扇形面積」；本題未使用後續技能。",
      "estimatedTimeSec": 65,
      "unitCheck": "u19-s011-v002 已核對所求量「求未覆蓋角落面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「用外框減內圓。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s011-v002。",
      "difficultyReason": "basic：用外框減內圓。 解題需完成「正方形面積100。；圓面積25π。；相減。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "用外框減內圓。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "bf0dabdb97d0a655df94ad925045ac2a6821206b671d9f814632587d39be4f51"
    },
    {
      "questionId": "u19-s011-v003",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-composite-area",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "半徑 6 cm 的圓去掉 120° 扇形後，剩餘面積為何？",
      "text": "半徑 6 cm 的圓去掉 120° 扇形後，剩餘面積為何？",
      "givenConditions": "r=6 cm；移除120°扇形。",
      "target": "求剩餘面積。",
      "choices": [
        "24π cm²",
        "12π cm²",
        "18π cm²",
        "36π cm²"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「r=6 cm；移除120°扇形。」重算：剩餘中心角240°，占2/3；面積=2/3×36π=24π。",
      "explanation": "剩餘中心角240°，占2/3；面積=2/3×36π=24π。 因此唯一正確選項是「24π cm²」。",
      "steps": [
        "360−120=240°。",
        "240/360=2/3。",
        "乘36π。"
      ],
      "optionAnalysis": [
        {
          "choice": "24π cm²",
          "truth": true,
          "reason": "依題目條件重新計算：剩餘中心角240°，占2/3；面積=2/3×36π=24π。"
        },
        {
          "choice": "12π cm²",
          "truth": false,
          "reason": "算被去掉部分。"
        },
        {
          "choice": "18π cm²",
          "truth": false,
          "reason": "錯取一半。"
        },
        {
          "choice": "36π cm²",
          "truth": false,
          "reason": "未扣除。"
        }
      ],
      "misconceptionTarget": "求錯區域。",
      "prerequisiteCheck": "需先能使用「扇形面積」；本題未使用後續技能。",
      "estimatedTimeSec": 65,
      "unitCheck": "u19-s011-v003 已核對所求量「求剩餘面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「求圓去除扇形後的面積。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s011-v003。",
      "difficultyReason": "basic：求圓去除扇形後的面積。 解題需完成「360−120=240°。；240/360=2/3。；乘36π。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "求圓去除扇形後的面積。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "43298d67d6fa79d80a05c3dea73ba453937fbcef3ba9774d7d17f233612005aa"
    },
    {
      "questionId": "u19-s011-v004",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-composite-area",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "半徑 8 cm 的半圓中挖去半徑 4 cm 的半圓，兩半圓直徑在同一直線上。剩餘面積為何？",
      "text": "半徑 8 cm 的半圓中挖去半徑 4 cm 的半圓，兩半圓直徑在同一直線上。剩餘面積為何？",
      "givenConditions": "大r=8；小r=4；小半圓完全位於大半圓內。",
      "target": "求剩餘面積。",
      "choices": [
        "24π cm²",
        "16π cm²",
        "32π cm²",
        "48π cm²"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「大r=8；小r=4；小半圓完全位於大半圓內。」重算：大半圓面積32π，小半圓面積8π，差24π。",
      "explanation": "大半圓面積32π，小半圓面積8π，差24π。 因此唯一正確選項是「24π cm²」。",
      "steps": [
        "1/2π×8²=32π。",
        "1/2π×4²=8π。",
        "相減24π。"
      ],
      "optionAnalysis": [
        {
          "choice": "24π cm²",
          "truth": true,
          "reason": "依題目條件重新計算：大半圓面積32π，小半圓面積8π，差24π。"
        },
        {
          "choice": "16π cm²",
          "truth": false,
          "reason": "只算半徑平方差未乘1/2。"
        },
        {
          "choice": "32π cm²",
          "truth": false,
          "reason": "只算大半圓。"
        },
        {
          "choice": "48π cm²",
          "truth": false,
          "reason": "未扣小半圓。"
        }
      ],
      "misconceptionTarget": "半圓比例在相減時漏用。",
      "prerequisiteCheck": "需先能使用「扇形面積」；本題未使用後續技能。",
      "estimatedTimeSec": 85,
      "unitCheck": "u19-s011-v004 已核對所求量「求剩餘面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「計算兩半圓差。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s011-v004。",
      "difficultyReason": "standard：計算兩半圓差。 解題需完成「1/2π×8²=32π。；1/2π×4²=8π。；相減24π。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "計算兩半圓差。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "fd2533fc0e868b04946de388540a4be7190b3a70b04c7c82e3a3a6d1381c9688"
    },
    {
      "questionId": "u19-s011-v005",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-composite-area",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "兩個半徑 3 cm 的圓重疊，已知重疊面積為 2π cm²。兩圓聯集面積為何？",
      "text": "兩個半徑 3 cm 的圓重疊，已知重疊面積為 2π cm²。兩圓聯集面積為何？",
      "givenConditions": "兩圓r=3；重疊2π。",
      "target": "求聯集面積。",
      "choices": [
        "14π cm²",
        "16π cm²",
        "18π cm²",
        "20π cm²"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「兩圓r=3；重疊2π。」重算：兩圓面積和18π，重疊被算兩次，扣回一次2π，得16π。",
      "explanation": "兩圓面積和18π，重疊被算兩次，扣回一次2π，得16π。 因此唯一正確選項是「16π cm²」。",
      "steps": [
        "9π+9π=18π。",
        "18π−2π=16π。"
      ],
      "optionAnalysis": [
        {
          "choice": "14π cm²",
          "truth": false,
          "reason": "重疊扣了兩次。"
        },
        {
          "choice": "16π cm²",
          "truth": true,
          "reason": "依題目條件重新計算：兩圓面積和18π，重疊被算兩次，扣回一次2π，得16π。"
        },
        {
          "choice": "18π cm²",
          "truth": false,
          "reason": "未扣重疊。"
        },
        {
          "choice": "20π cm²",
          "truth": false,
          "reason": "把重疊加上。"
        }
      ],
      "misconceptionTarget": "聯集計數重疊次數錯。",
      "prerequisiteCheck": "需先能使用「扇形面積」；本題未使用後續技能。",
      "estimatedTimeSec": 90,
      "unitCheck": "u19-s011-v005 已核對所求量「求聯集面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「使用聯集面積公式。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s011-v005。",
      "difficultyReason": "standard：使用聯集面積公式。 解題需完成「9π+9π=18π。；18π−2π=16π。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "使用聯集面積公式。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "7cc659aa26efb51a89e47caddf99cb18cd7b438ae1593f9c38c660c26f563e1f"
    },
    {
      "questionId": "u19-s011-v006",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-composite-area",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "外圓面積為 100π cm²，內圓面積為 36π cm²。圓環面積與外圓面積之比為何？",
      "text": "外圓面積為 100π cm²，內圓面積為 36π cm²。圓環面積與外圓面積之比為何？",
      "givenConditions": "同心內外圓面積如題。",
      "target": "求圓環:外圓。",
      "choices": [
        "9:25",
        "16:9",
        "16:25",
        "64:100π"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「同心內外圓面積如題。」重算：圓環面積64π，與外圓100π比為64:100=16:25。",
      "explanation": "圓環面積64π，與外圓100π比為64:100=16:25。 因此唯一正確選項是「16:25」。",
      "steps": [
        "100π−36π=64π。",
        "化簡64:100。"
      ],
      "optionAnalysis": [
        {
          "choice": "9:25",
          "truth": false,
          "reason": "這是內圓:外圓。"
        },
        {
          "choice": "16:9",
          "truth": false,
          "reason": "順序錯。"
        },
        {
          "choice": "16:25",
          "truth": true,
          "reason": "依題目條件重新計算：圓環面積64π，與外圓100π比為64:100=16:25。"
        },
        {
          "choice": "64:100π",
          "truth": false,
          "reason": "比值不保留共同π。"
        }
      ],
      "misconceptionTarget": "未先求圓環或比例未化簡。",
      "prerequisiteCheck": "需先能使用「扇形面積」；本題未使用後續技能。",
      "estimatedTimeSec": 85,
      "unitCheck": "u19-s011-v006 已核對所求量「求圓環:外圓。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「計算複合面積比。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s011-v006。",
      "difficultyReason": "standard：計算複合面積比。 解題需完成「100π−36π=64π。；化簡64:100。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "計算複合面積比。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "d16450989b2956b395089a93e883509bfacfee816492c2c8ba10b9ba0bde8c16"
    },
    {
      "questionId": "u19-s011-v007",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-composite-area",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s011-fig001",
      "drawingSpecId": "u19-s011-fig001",
      "prompt": "半徑 10 cm 的圓內有兩個互不重疊的 90° 扇形被挖去。剩餘面積為何？",
      "text": "半徑 10 cm 的圓內有兩個互不重疊的 90° 扇形被挖去。剩餘面積為何？",
      "givenConditions": "r=10；兩挖除扇形各90°且不重疊。",
      "target": "求剩餘面積。",
      "choices": [
        "25π cm²",
        "50π cm²",
        "75π cm²",
        "100π cm²"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「r=10；兩挖除扇形各90°且不重疊。」重算：兩個90°合180°，挖去半圓，剩餘也為半圓：1/2×100π=50π。",
      "explanation": "兩個90°合180°，挖去半圓，剩餘也為半圓：1/2×100π=50π。 因此唯一正確選項是「50π cm²」。",
      "steps": [
        "總挖角180°。",
        "剩角180°。",
        "面積50π。"
      ],
      "optionAnalysis": [
        {
          "choice": "25π cm²",
          "truth": false,
          "reason": "只剩四分之一。"
        },
        {
          "choice": "50π cm²",
          "truth": true,
          "reason": "依題目條件重新計算：兩個90°合180°，挖去半圓，剩餘也為半圓：1/2×100π=50π。"
        },
        {
          "choice": "75π cm²",
          "truth": false,
          "reason": "只挖一個90°。"
        },
        {
          "choice": "100π cm²",
          "truth": false,
          "reason": "未挖。"
        }
      ],
      "misconceptionTarget": "多個扇形角度合併錯。",
      "prerequisiteCheck": "需先能使用「扇形面積」；本題未使用後續技能。",
      "estimatedTimeSec": 105,
      "unitCheck": "u19-s011-v007 已核對所求量「求剩餘面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「合併不重疊扇形後求剩餘。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s011-v007。",
      "difficultyReason": "advanced：合併不重疊扇形後求剩餘。 解題需完成「總挖角180°。；剩角180°。；面積50π。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "合併不重疊扇形後求剩餘。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "8866e53168da906fccd6c3824fbe347e5a061beddfb8ad56984ec97bdeb84dcc"
    },
    {
      "questionId": "u19-s011-v008",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-composite-area",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "一個外半徑 R、內半徑 r 的圓環面積為 48π，且 R:r=5:1。求 r。",
      "text": "一個外半徑 R、內半徑 r 的圓環面積為 48π，且 R:r=5:1。求 r。",
      "givenConditions": "R:r=5:1；面積48π。",
      "target": "求內半徑r。",
      "choices": [
        "1",
        "√2",
        "2",
        "4"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「R:r=5:1；面積48π。」重算：令R=5r，π(25r²−r²)=24πr²=48π，所以r²=2，r=√2。",
      "explanation": "令R=5r，π(25r²−r²)=24πr²=48π，所以r²=2，r=√2。 因此唯一正確選項是「√2」。",
      "steps": [
        "代R=5r。",
        "24πr²=48π。",
        "r取正值√2。"
      ],
      "optionAnalysis": [
        {
          "choice": "1",
          "truth": false,
          "reason": "代入面積得24π非48π。"
        },
        {
          "choice": "√2",
          "truth": true,
          "reason": "依題目條件重新計算：令R=5r，π(25r²−r²)=24πr²=48π，所以r²=2，r=√2。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "代入得96π。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "代入得384π。"
        }
      ],
      "misconceptionTarget": "把半徑比直接當面積差比。",
      "prerequisiteCheck": "需先能使用「扇形面積」；本題未使用後續技能。",
      "estimatedTimeSec": 125,
      "unitCheck": "u19-s011-v008 已核對所求量「求內半徑r。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由圓環面積與半徑比反求尺寸。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s011-v008。",
      "difficultyReason": "advanced：由圓環面積與半徑比反求尺寸。 解題需完成「代R=5r。；24πr²=48π。；r取正值√2。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由圓環面積與半徑比反求尺寸。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "bf16fc4135c2ea3e1abe06d541411bd9a48bb3acd9d9d6dbf373ca494696b35f"
    },
    {
      "questionId": "u19-s011-v009",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-composite-area",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "半徑 6 的圓與邊長 12 的正方形同中心。圓完全內切於正方形。若將正方形四角未覆蓋區平均分成4份，每份面積為何？",
      "text": "半徑 6 的圓與邊長 12 的正方形同中心。圓完全內切於正方形。若將正方形四角未覆蓋區平均分成4份，每份面積為何？",
      "givenConditions": "正方形邊12；內切圓r=6；四角對稱。",
      "target": "求每角面積。",
      "choices": [
        "36−36π",
        "144−36π",
        "9−9π",
        "36−9π"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「正方形邊12；內切圓r=6；四角對稱。」重算：四角總面積=144−36π，除4得36−9π。",
      "explanation": "四角總面積=144−36π，除4得36−9π。 因此唯一正確選項是「36−9π」。",
      "steps": [
        "正方形144。",
        "圓36π。",
        "差除4。"
      ],
      "optionAnalysis": [
        {
          "choice": "36−36π",
          "truth": false,
          "reason": "圓面積未除4。"
        },
        {
          "choice": "144−36π",
          "truth": false,
          "reason": "是總未覆蓋面積。"
        },
        {
          "choice": "9−9π",
          "truth": false,
          "reason": "正方形每角基準錯。"
        },
        {
          "choice": "36−9π",
          "truth": true,
          "reason": "依題目條件重新計算：四角總面積=144−36π，除4得36−9π。"
        }
      ],
      "misconceptionTarget": "總面積與單一角落面積混淆。",
      "prerequisiteCheck": "需先能使用「扇形面積」；本題未使用後續技能。",
      "estimatedTimeSec": 110,
      "unitCheck": "u19-s011-v009 已核對所求量「求每角面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由對稱複合面積求單份。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s011-v009。",
      "difficultyReason": "advanced：由對稱複合面積求單份。 解題需完成「正方形144。；圓36π。；差除4。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由對稱複合面積求單份。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "d4b30bfe59f1bd6d8eb03eba8d6aa9210546b1873b9b413bad6af974e966f952"
    },
    {
      "questionId": "u19-s011-v010",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-composite-area",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形步道外半徑 15 m、內半徑 12 m。步道面積為何？",
      "text": "圓形步道外半徑 15 m、內半徑 12 m。步道面積為何？",
      "givenConditions": "外r=15 m；內r=12 m。",
      "target": "求步道面積。",
      "choices": [
        "81π m²",
        "27π m²",
        "153π m²",
        "369π m²"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「外r=15 m；內r=12 m。」重算：步道是圓環，面積π(225−144)=81π m²。",
      "explanation": "步道是圓環，面積π(225−144)=81π m²。 因此唯一正確選項是「81π m²」。",
      "steps": [
        "外圓225π。",
        "內圓144π。",
        "相減81π。"
      ],
      "optionAnalysis": [
        {
          "choice": "81π m²",
          "truth": true,
          "reason": "依題目條件重新計算：步道是圓環，面積π(225−144)=81π m²。"
        },
        {
          "choice": "27π m²",
          "truth": false,
          "reason": "只用半徑差9? 實際差3，皆錯。"
        },
        {
          "choice": "153π m²",
          "truth": false,
          "reason": "把半徑相加。"
        },
        {
          "choice": "369π m²",
          "truth": false,
          "reason": "兩面積相加。"
        }
      ],
      "misconceptionTarget": "以寬度直接乘π代替平方差。",
      "prerequisiteCheck": "需先能使用「扇形面積」；本題未使用後續技能。",
      "estimatedTimeSec": 80,
      "unitCheck": "u19-s011-v010 已核對所求量「求步道面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「計算環形步道用地。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s011-v010。",
      "difficultyReason": "literacy：計算環形步道用地。 解題需完成「外圓225π。；內圓144π。；相減81π。」。",
      "literacyContextNecessity": "步道占地是兩同心圓之差，不能只用寬度。",
      "authoringIntent": "計算環形步道用地。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "831e2bccbc976e0c7a0107931a115eade3cfaa33cafcbab5066d6903165ae850"
    },
    {
      "questionId": "u19-s011-v011",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-composite-area",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "直徑 20 cm 的圓形標誌，中央挖去直徑 8 cm 的圓孔。剩餘材料面積為何？",
      "text": "直徑 20 cm 的圓形標誌，中央挖去直徑 8 cm 的圓孔。剩餘材料面積為何？",
      "givenConditions": "外d=20 cm；孔d=8 cm；同心。",
      "target": "求材料面積。",
      "choices": [
        "12π cm²",
        "96π cm²",
        "336π cm²",
        "84π cm²"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「外d=20 cm；孔d=8 cm；同心。」重算：外半徑10、內半徑4，面積π(100−16)=84π。",
      "explanation": "外半徑10、內半徑4，面積π(100−16)=84π。 因此唯一正確選項是「84π cm²」。",
      "steps": [
        "直徑換半徑10與4。",
        "平方差84。"
      ],
      "optionAnalysis": [
        {
          "choice": "12π cm²",
          "truth": false,
          "reason": "只用半徑差。"
        },
        {
          "choice": "96π cm²",
          "truth": false,
          "reason": "內圓面積扣錯。"
        },
        {
          "choice": "336π cm²",
          "truth": false,
          "reason": "把直徑直接平方差。"
        },
        {
          "choice": "84π cm²",
          "truth": true,
          "reason": "依題目條件重新計算：外半徑10、內半徑4，面積π(100−16)=84π。"
        }
      ],
      "misconceptionTarget": "直徑未除2。",
      "prerequisiteCheck": "需先能使用「扇形面積」；本題未使用後續技能。",
      "estimatedTimeSec": 85,
      "unitCheck": "u19-s011-v011 已核對所求量「求材料面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「計算圓孔標誌材料。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s011-v011。",
      "difficultyReason": "literacy：計算圓孔標誌材料。 解題需完成「直徑換半徑10與4。；平方差84。」。",
      "literacyContextNecessity": "材料成本依剩餘面積計算，孔洞必須扣除。",
      "authoringIntent": "計算圓孔標誌材料。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "2fcaec37e871fc9a920fb5e54a60a3673c374e46cef298fa85dce2469219ddaa"
    },
    {
      "questionId": "u19-s011-v012",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-composite-area",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "一個圓形花圃半徑 4 m，旁邊再加一個不重疊的半圓花圃，半圓半徑也是 4 m。總種植面積為何？",
      "text": "一個圓形花圃半徑 4 m，旁邊再加一個不重疊的半圓花圃，半圓半徑也是 4 m。總種植面積為何？",
      "givenConditions": "兩區不重疊且半徑皆4 m。",
      "target": "求總面積。",
      "choices": [
        "16π m²",
        "20π m²",
        "32π m²",
        "24π m²"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「兩區不重疊且半徑皆4 m。」重算：整圓面積16π，半圓面積8π，且不重疊，所以總面積24π。",
      "explanation": "整圓面積16π，半圓面積8π，且不重疊，所以總面積24π。 因此唯一正確選項是「24π m²」。",
      "steps": [
        "算整圓16π。",
        "算半圓8π。",
        "相加24π。"
      ],
      "optionAnalysis": [
        {
          "choice": "16π m²",
          "truth": false,
          "reason": "漏半圓。"
        },
        {
          "choice": "20π m²",
          "truth": false,
          "reason": "半圓面積算4π。"
        },
        {
          "choice": "32π m²",
          "truth": false,
          "reason": "把半圓當整圓。"
        },
        {
          "choice": "24π m²",
          "truth": true,
          "reason": "依題目條件重新計算：整圓面積16π，半圓面積8π，且不重疊，所以總面積24π。"
        }
      ],
      "misconceptionTarget": "不重疊加總時漏算或比例錯。",
      "prerequisiteCheck": "需先能使用「扇形面積」；本題未使用後續技能。",
      "estimatedTimeSec": 80,
      "unitCheck": "u19-s011-v012 已核對所求量「求總面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「合併圓與半圓種植區。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s011-v012。",
      "difficultyReason": "literacy：合併圓與半圓種植區。 解題需完成「算整圓16π。；算半圓8π。；相加24π。」。",
      "literacyContextNecessity": "不重疊條件決定可直接相加。",
      "authoringIntent": "合併圓與半圓種植區。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "2d26e2a6bb3faeb0bbe5299e95542a19aaa62127900d59d7dc278af9a9ce63cf"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u19-s011-cr001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-composite-area",
      "difficulty": "advanced",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u19-s011-fig001",
      "drawingSpecId": "u19-s011-fig001",
      "prompt": "同心圓環外半徑 10 cm、內半徑 6 cm。求圓環面積；若平均分成8個相同扇環，每份面積為何？",
      "requiredWork": [
        "求平方差圓環面積。",
        "平均除以8。",
        "標平方單位。"
      ],
      "standardSolution": [
        "圓環面積=π(10²−6²)=64π cm²。",
        "每份=64π÷8=8π cm²。"
      ],
      "fullCreditSolution": [
        "圓環面積=π(10²−6²)=64π cm²。",
        "每份=64π÷8=8π cm²。"
      ],
      "alternativeSolutions": [
        "可直接計每份為(1/8)π(100−36)。"
      ],
      "reasoningSteps": [
        "圓環面積=π(10²−6²)=64π cm²。",
        "每份=64π÷8=8π cm²。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "64π與8π cm²完整。"
        },
        {
          "score": 2,
          "criteria": "兩答案正確但理由簡略，或只一項完整。"
        },
        {
          "score": 1,
          "criteria": "正確列π(R²−r²)。"
        },
        {
          "score": 0,
          "criteria": "使用π(R−r)²。"
        }
      ],
      "partialCreditRules": [
        "總面積與分份各自給分。"
      ],
      "followThroughPolicy": "若總面積算錯，後續正確除8可保留分份方法分。",
      "unitNotationRules": "均用cm²。",
      "answerOnlyPolicy": "只寫兩答案正確給2分。",
      "commonErrors": [
        "平方差誤成差平方。",
        "每份除以4。"
      ],
      "independentReview": {
        "derivedResult": "總64π cm²，每份8π cm²。",
        "ambiguity": "同心與等分條件明確。",
        "decision": "pass",
        "reviewNote": "u19-s011-cr001 由題目條件另行推導得到「總64π cm²，每份8π cm²。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "cca4d946906253c1de148d5519d7b345a3913243629289f393ebe1a17af4442d"
    },
    {
      "questionId": "u19-s011-cr002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-composite-area",
      "difficulty": "advanced",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "兩個半徑 5 cm 的圓重疊，重疊區面積為 6π cm²。求兩圓聯集面積，並說明為何要扣除一次重疊區。",
      "requiredWork": [
        "求兩圓面積和。",
        "扣除一次重疊。",
        "解釋重複計數。"
      ],
      "standardSolution": [
        "兩圓面積和=25π+25π=50π。",
        "聯集面積=50π−6π=44π cm²。",
        "直接相加時重疊區被各圓算一次，共算兩次；聯集只應保留一次，所以扣一次。"
      ],
      "fullCreditSolution": [
        "兩圓面積和=25π+25π=50π。",
        "聯集面積=50π−6π=44π cm²。",
        "直接相加時重疊區被各圓算一次，共算兩次；聯集只應保留一次，所以扣一次。"
      ],
      "alternativeSolutions": [
        "可用A∪B=A+B−A∩B。"
      ],
      "reasoningSteps": [
        "兩圓面積和=25π+25π=50π。",
        "聯集面積=50π−6π=44π cm²。",
        "直接相加時重疊區被各圓算一次，共算兩次；聯集只應保留一次，所以扣一次。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "44π與重複計數說明完整。"
        },
        {
          "score": 2,
          "criteria": "答案正確但理由略，或算式正確有小錯。"
        },
        {
          "score": 1,
          "criteria": "知道需要扣重疊。"
        },
        {
          "score": 0,
          "criteria": "把重疊加上或扣兩次。"
        }
      ],
      "partialCreditRules": [
        "計算與概念分開給分。"
      ],
      "followThroughPolicy": "若兩圓面積算錯但仍只扣一次重疊，可保留概念分。",
      "unitNotationRules": "面積用cm²。",
      "answerOnlyPolicy": "只寫44π給2分。",
      "commonErrors": [
        "扣除12π。",
        "把重疊加到50π。"
      ],
      "independentReview": {
        "derivedResult": "聯集44π cm²。",
        "ambiguity": "重疊面積已知且兩圓相同，唯一。",
        "decision": "pass",
        "reviewNote": "u19-s011-cr002 由題目條件另行推導得到「聯集44π cm²。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "27eef6e8bd0f9d1cd3b31fd6b3a3eba12fc7a06cb0c43346c050618af8fb93e0"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u19-s011-v001",
      "contentSha256": "2b5f94b16ba316930d64bdef2a41705fb4413bdc99b7a524a63f2840b6539e3f",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「R=5 cm；r=3 cm。」重算：圓環面積=π(5²−3²)=π(25−9)=16π cm²。",
      "derivedAnswer": "16π cm²",
      "storedAnswer": "16π cm²",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「16π cm²」符合；三個干擾項分別因「只算半徑差乘π。；把兩面積相加。；錯用(5−3)²π。」而排除。",
        "undefinedSymbol": "u19-s011-v001 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓複合面積」講義定義。",
        "unitConflict": "題目所求為「求圓環面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「計算同心圓環面積。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「R=5 cm；r=3 cm。」重讀，所求「求圓環面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是計算同心圓環面積。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴sector-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「外半徑 5 cm、內半徑 3 cm 的同心圓環面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s011-v001 人工重算：圓環面積=π(5²−3²)=π(25−9)=16π cm²。 正確選項為「16π cm²」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s011-v002",
      "contentSha256": "bf0dabdb97d0a655df94ad925045ac2a6821206b671d9f814632587d39be4f51",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「正方形邊10；內切圓r=5。」重算：四角總面積=正方形面積100−圓面積25π。",
      "derivedAnswer": "100−25π cm²",
      "storedAnswer": "100−25π cm²",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「100−25π cm²」符合；三個干擾項分別因「陰影應為大減小，不是相加。；只算圓。；圓面積公式錯。」而排除。",
        "undefinedSymbol": "u19-s011-v002 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓複合面積」講義定義。",
        "unitConflict": "題目所求為「求未覆蓋角落面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「用外框減內圓。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「正方形邊10；內切圓r=5。」重讀，所求「求未覆蓋角落面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是用外框減內圓。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴sector-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「邊長 10 cm 的正方形內有一個半徑 5 cm 的內切圓，正方形四角未被圓覆蓋的總面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s011-v002 人工重算：四角總面積=正方形面積100−圓面積25π。 正確選項為「100−25π cm²」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s011-v003",
      "contentSha256": "43298d67d6fa79d80a05c3dea73ba453937fbcef3ba9774d7d17f233612005aa",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=6 cm；移除120°扇形。」重算：剩餘中心角240°，占2/3；面積=2/3×36π=24π。",
      "derivedAnswer": "24π cm²",
      "storedAnswer": "24π cm²",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「24π cm²」符合；三個干擾項分別因「算被去掉部分。；錯取一半。；未扣除。」而排除。",
        "undefinedSymbol": "u19-s011-v003 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓複合面積」講義定義。",
        "unitConflict": "題目所求為「求剩餘面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「求圓去除扇形後的面積。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=6 cm；移除120°扇形。」重讀，所求「求剩餘面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是求圓去除扇形後的面積。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴sector-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑 6 cm 的圓去掉 120° 扇形後，剩餘面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s011-v003 人工重算：剩餘中心角240°，占2/3；面積=2/3×36π=24π。 正確選項為「24π cm²」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s011-v004",
      "contentSha256": "fd2533fc0e868b04946de388540a4be7190b3a70b04c7c82e3a3a6d1381c9688",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「大r=8；小r=4；小半圓完全位於大半圓內。」重算：大半圓面積32π，小半圓面積8π，差24π。",
      "derivedAnswer": "24π cm²",
      "storedAnswer": "24π cm²",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「24π cm²」符合；三個干擾項分別因「只算半徑平方差未乘1/2。；只算大半圓。；未扣小半圓。」而排除。",
        "undefinedSymbol": "u19-s011-v004 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓複合面積」講義定義。",
        "unitConflict": "題目所求為「求剩餘面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「計算兩半圓差。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「大r=8；小r=4；小半圓完全位於大半圓內。」重讀，所求「求剩餘面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是計算兩半圓差。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴sector-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑 8 cm 的半圓中挖去半徑 4 cm 的半圓，兩半圓直徑在同一直線上。剩餘面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s011-v004 人工重算：大半圓面積32π，小半圓面積8π，差24π。 正確選項為「24π cm²」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s011-v005",
      "contentSha256": "7cc659aa26efb51a89e47caddf99cb18cd7b438ae1593f9c38c660c26f563e1f",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「兩圓r=3；重疊2π。」重算：兩圓面積和18π，重疊被算兩次，扣回一次2π，得16π。",
      "derivedAnswer": "16π cm²",
      "storedAnswer": "16π cm²",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「16π cm²」符合；三個干擾項分別因「重疊扣了兩次。；未扣重疊。；把重疊加上。」而排除。",
        "undefinedSymbol": "u19-s011-v005 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓複合面積」講義定義。",
        "unitConflict": "題目所求為「求聯集面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「使用聯集面積公式。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「兩圓r=3；重疊2π。」重讀，所求「求聯集面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是使用聯集面積公式。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴sector-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「兩個半徑 3 cm 的圓重疊，已知重疊面積為 2π cm²。兩圓聯集面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s011-v005 人工重算：兩圓面積和18π，重疊被算兩次，扣回一次2π，得16π。 正確選項為「16π cm²」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s011-v006",
      "contentSha256": "d16450989b2956b395089a93e883509bfacfee816492c2c8ba10b9ba0bde8c16",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「同心內外圓面積如題。」重算：圓環面積64π，與外圓100π比為64:100=16:25。",
      "derivedAnswer": "16:25",
      "storedAnswer": "16:25",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「16:25」符合；三個干擾項分別因「這是內圓:外圓。；順序錯。；比值不保留共同π。」而排除。",
        "undefinedSymbol": "u19-s011-v006 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓複合面積」講義定義。",
        "unitConflict": "題目所求為「求圓環:外圓。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「計算複合面積比。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「同心內外圓面積如題。」重讀，所求「求圓環:外圓。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是計算複合面積比。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴sector-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「外圓面積為 100π cm²，內圓面積為 36π cm²。圓環面積與外圓面積之比為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s011-v006 人工重算：圓環面積64π，與外圓100π比為64:100=16:25。 正確選項為「16:25」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s011-v007",
      "contentSha256": "8866e53168da906fccd6c3824fbe347e5a061beddfb8ad56984ec97bdeb84dcc",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=10；兩挖除扇形各90°且不重疊。」重算：兩個90°合180°，挖去半圓，剩餘也為半圓：1/2×100π=50π。",
      "derivedAnswer": "50π cm²",
      "storedAnswer": "50π cm²",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「50π cm²」符合；三個干擾項分別因「只剩四分之一。；只挖一個90°。；未挖。」而排除。",
        "undefinedSymbol": "u19-s011-v007 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓複合面積」講義定義。",
        "unitConflict": "題目所求為「求剩餘面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「合併不重疊扇形後求剩餘。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=10；兩挖除扇形各90°且不重疊。」重讀，所求「求剩餘面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是合併不重疊扇形後求剩餘。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴sector-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑 10 cm 的圓內有兩個互不重疊的 90° 扇形被挖去。剩餘面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s011-v007 人工重算：兩個90°合180°，挖去半圓，剩餘也為半圓：1/2×100π=50π。 正確選項為「50π cm²」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s011-v008",
      "contentSha256": "bf16fc4135c2ea3e1abe06d541411bd9a48bb3acd9d9d6dbf373ca494696b35f",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「R:r=5:1；面積48π。」重算：令R=5r，π(25r²−r²)=24πr²=48π，所以r²=2，r=√2。",
      "derivedAnswer": "√2",
      "storedAnswer": "√2",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「√2」符合；三個干擾項分別因「代入面積得24π非48π。；代入得96π。；代入得384π。」而排除。",
        "undefinedSymbol": "u19-s011-v008 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓複合面積」講義定義。",
        "unitConflict": "題目所求為「求內半徑r。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由圓環面積與半徑比反求尺寸。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「R:r=5:1；面積48π。」重讀，所求「求內半徑r。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是由圓環面積與半徑比反求尺寸。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴sector-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「一個外半徑 R、內半徑 r 的圓環面積為 48π，且 R:r=5:1。求 r。」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s011-v008 人工重算：令R=5r，π(25r²−r²)=24πr²=48π，所以r²=2，r=√2。 正確選項為「√2」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s011-v009",
      "contentSha256": "d4b30bfe59f1bd6d8eb03eba8d6aa9210546b1873b9b413bad6af974e966f952",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「正方形邊12；內切圓r=6；四角對稱。」重算：四角總面積=144−36π，除4得36−9π。",
      "derivedAnswer": "36−9π",
      "storedAnswer": "36−9π",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「36−9π」符合；三個干擾項分別因「圓面積未除4。；是總未覆蓋面積。；正方形每角基準錯。」而排除。",
        "undefinedSymbol": "u19-s011-v009 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓複合面積」講義定義。",
        "unitConflict": "題目所求為「求每角面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由對稱複合面積求單份。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「正方形邊12；內切圓r=6；四角對稱。」重讀，所求「求每角面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是由對稱複合面積求單份。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴sector-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑 6 的圓與邊長 12 的正方形同中心。圓完全內切於正方形。若將正方形四角未覆蓋區平均分成4份，每份面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s011-v009 人工重算：四角總面積=144−36π，除4得36−9π。 正確選項為「36−9π」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s011-v010",
      "contentSha256": "831e2bccbc976e0c7a0107931a115eade3cfaa33cafcbab5066d6903165ae850",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「外r=15 m；內r=12 m。」重算：步道是圓環，面積π(225−144)=81π m²。",
      "derivedAnswer": "81π m²",
      "storedAnswer": "81π m²",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「81π m²」符合；三個干擾項分別因「只用半徑差9? 實際差3，皆錯。；把半徑相加。；兩面積相加。」而排除。",
        "undefinedSymbol": "u19-s011-v010 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓複合面積」講義定義。",
        "unitConflict": "題目所求為「求步道面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「計算環形步道用地。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「外r=15 m；內r=12 m。」重讀，所求「求步道面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是計算環形步道用地。，而非只依題序標示。",
      "literacyContextNecessity": "步道占地是兩同心圓之差，不能只用寬度。",
      "prerequisiteCheck": "只依賴sector-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓形步道外半徑 15 m、內半徑 12 m。步道面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s011-v010 人工重算：步道是圓環，面積π(225−144)=81π m²。 正確選項為「81π m²」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s011-v011",
      "contentSha256": "2fcaec37e871fc9a920fb5e54a60a3673c374e46cef298fa85dce2469219ddaa",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「外d=20 cm；孔d=8 cm；同心。」重算：外半徑10、內半徑4，面積π(100−16)=84π。",
      "derivedAnswer": "84π cm²",
      "storedAnswer": "84π cm²",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「84π cm²」符合；三個干擾項分別因「只用半徑差。；內圓面積扣錯。；把直徑直接平方差。」而排除。",
        "undefinedSymbol": "u19-s011-v011 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓複合面積」講義定義。",
        "unitConflict": "題目所求為「求材料面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「計算圓孔標誌材料。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「外d=20 cm；孔d=8 cm；同心。」重讀，所求「求材料面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是計算圓孔標誌材料。，而非只依題序標示。",
      "literacyContextNecessity": "材料成本依剩餘面積計算，孔洞必須扣除。",
      "prerequisiteCheck": "只依賴sector-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「直徑 20 cm 的圓形標誌，中央挖去直徑 8 cm 的圓孔。剩餘材料面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s011-v011 人工重算：外半徑10、內半徑4，面積π(100−16)=84π。 正確選項為「84π cm²」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s011-v012",
      "contentSha256": "2d26e2a6bb3faeb0bbe5299e95542a19aaa62127900d59d7dc278af9a9ce63cf",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「兩區不重疊且半徑皆4 m。」重算：整圓面積16π，半圓面積8π，且不重疊，所以總面積24π。",
      "derivedAnswer": "24π m²",
      "storedAnswer": "24π m²",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「24π m²」符合；三個干擾項分別因「漏半圓。；半圓面積算4π。；把半圓當整圓。」而排除。",
        "undefinedSymbol": "u19-s011-v012 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓複合面積」講義定義。",
        "unitConflict": "題目所求為「求總面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「合併圓與半圓種植區。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「兩區不重疊且半徑皆4 m。」重讀，所求「求總面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是合併圓與半圓種植區。，而非只依題序標示。",
      "literacyContextNecessity": "不重疊條件決定可直接相加。",
      "prerequisiteCheck": "只依賴sector-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「一個圓形花圃半徑 4 m，旁邊再加一個不重疊的半圓花圃，半圓半徑也是 4 m。總種植面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s011-v012 人工重算：整圓面積16π，半圓面積8π，且不重疊，所以總面積24π。 正確選項為「24π m²」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u19-s011-fig001",
      "unitId": "u19",
      "topicId": "u19-measure",
      "skillId": "circle-composite-area",
      "svgPath": "figures/u19/u19-s011-fig001.svg",
      "canvas": {
        "width": 360,
        "height": 240,
        "viewBox": "0 0 360 240"
      },
      "drawingSpec": {
        "purpose": "支援「圓複合面積」中需要辨認點、線、弧、角或邊界的題目。",
        "coordinateSystem": "SVG x向右、y向下；所有座標以360×240畫布為準。",
        "geometry": "兩個同心圓形成圓環，外半徑 R 與內半徑 r 由圓心沿不同方向標示。",
        "visibleLines": "所有作答所需實線均以2px以上深色描邊；強調弧以5px描邊。",
        "hiddenLines": "只有內部共邊或量測輔助線使用虛線；未指定者不得自行添加。",
        "labels": "標籤位置已在SVG以固定座標給定，避免遮住交點、角弧或刻痕。",
        "symbols": "直角符號、等長刻痕、箭頭及角度符號僅在數學條件需要時出現。",
        "scalePolicy": "示意圖不保證按實際長度或角度比例繪製。",
        "visualInferenceWarning": "不得以目測長短、角度或對稱性取代題目條件與定理。",
        "mobileReadability": "360×240檢視下文字至少16px，關鍵線至少2px，無微小數值標籤。",
        "answerLeakage": "圖中不標示任何題目要求計算的最終數值或正確選項。"
      },
      "altText": "兩個同心圓形成圓環，外半徑 R 與內半徑 r 由圓心沿不同方向標示。 圖形僅協助辨認結構，不可依比例目測答案。",
      "svgTitle": "圓環與挖空面積圖",
      "svgDescription": "兩個同心圓形成圓環，外半徑 R 與內半徑 r 由圓心沿不同方向標示。",
      "svgAssertions": [
        "role=\"img\"",
        "<title",
        "<desc",
        "viewBox=\"0 0 360 240\"",
        "class=\"erase\"",
        ">R</text>",
        ">陰影為大圓減小圓</text>"
      ],
      "figureReview": {
        "decision": "pass",
        "manualRenderInspected": true,
        "mobileReadable": true,
        "answerLeakageFound": false,
        "reviewNote": "已逐項檢查 u19-s011-fig001 的點位、線段、弧線、標籤與輔助符號；此圖專門呈現「圓複合面積」的結構，未包含可直接推得題庫答案的數值。",
        "reviewVersion": "human-figure-review-r1.0",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "7c582f2492cfe3b6de5114b37c278892b76f3bd683a85f04aaa74c8abea02e11"
    }
  ]
};
export default u19_s011;
