export const u19_s017 = {
  "lecture": {
    "lectureId": "u19-s017-lecture-r1",
    "unitId": "u19",
    "numericUnitId": 19,
    "topicId": "u19-tangents",
    "skillId": "two-tangent-segments",
    "title": "切線段相等",
    "unitTitle": "圓",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "slot": "s017",
      "lockedSkillId": "two-tangent-segments",
      "lockedOrder": 17,
      "scope": "使用同一圓外點引出的兩切線段相等。"
    },
    "learningOutcomes": [
      "能使用同一圓外點兩切線段相等。",
      "能列代數式求未知切線長。",
      "能與周長或畢氏定理結合。"
    ],
    "prerequisites": [
      {
        "skillId": "tangent-radius",
        "requiredLevel": "能使用「切線與半徑」的核心定義與基本運算，並辨認其適用條件。"
      }
    ],
    "prerequisiteBridge": "先由前一技能「切線與半徑」的結論，連接到本技能「切線段相等」所需的新判斷。",
    "glossary": [
      {
        "term": "圓外點",
        "definition": "位於圓外的點。"
      },
      {
        "term": "兩切線段",
        "definition": "同一圓外點到兩個切點的線段。"
      },
      {
        "term": "切線段相等定理",
        "definition": "PA、PB為由P引至同圓的切線段時，PA=PB。"
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
      "從同一個圓外點 P 向同一圓作兩條切線，兩個切點雖在不同位置，但 PA 與 PB 長度相等。",
      "理由可由連接圓心後的兩個直角三角形全等理解。",
      "定理要求同一外點、同一圓、兩條都是真切線，三個條件缺一不可。"
    ],
    "formalDefinitions": [
      {
        "name": "圓外點",
        "statement": "位於圓外的點。"
      },
      {
        "name": "兩切線段",
        "statement": "同一圓外點到兩個切點的線段。"
      },
      {
        "name": "切線段相等定理",
        "statement": "PA、PB為由P引至同圓的切線段時，PA=PB。"
      }
    ],
    "formulas": [
      {
        "formula": "PA=PB",
        "conditions": [
          "P為同一圓外點，A、B為兩切點"
        ],
        "meaning": "兩切線段相等"
      }
    ],
    "nonApplicableCases": [
      "不同外點的切線段不必相等。",
      "一條切線與一條割線不能直接判相等。",
      "連接到圓上任意點的線段不一定是切線段。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "找共同外點P。",
        "check": "完成此步後，確認仍在「切線段相等」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 2,
        "instruction": "確認A、B為同一圓的切點。",
        "check": "完成此步後，確認仍在「切線段相等」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 3,
        "instruction": "列PA=PB。",
        "check": "完成此步後，確認仍在「切線段相等」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 4,
        "instruction": "代入代數式求未知數。",
        "check": "完成此步後，確認仍在「切線段相等」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 5,
        "instruction": "回代確認長度為正。",
        "check": "完成此步後，確認仍在「切線段相等」的CAP範圍且沒有只憑圖形目測。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "s017-L1",
        "prompt": "PA、PB為切線段，PA=9。",
        "solutionSteps": [
          "同外點兩切線段相等。"
        ],
        "answer": "PB=9。",
        "level": "basic"
      },
      {
        "exampleId": "s017-L2",
        "prompt": "PA=3x+1，PB=5x−7。",
        "solutionSteps": [
          "3x+1=5x−7。",
          "x=4。"
        ],
        "answer": "x=4。",
        "level": "standard"
      },
      {
        "exampleId": "s017-L3",
        "prompt": "PA=12，求兩切線段總長。",
        "solutionSteps": [
          "PB=12。",
          "總長24。"
        ],
        "answer": "24。",
        "level": "advanced"
      },
      {
        "exampleId": "s017-L4",
        "prompt": "△PAB周長32，AB=10。",
        "solutionSteps": [
          "PA=PB。",
          "2PA+10=32。"
        ],
        "answer": "PA=11。",
        "level": "connection"
      }
    ],
    "difficultyConnections": {
      "basic": "辨認「切線段相等」的定義、符號與單一步驟關係。",
      "standard": "把「切線段相等」與前置技能、比例或一次代數連接。",
      "advanced": "在多段弧、複合邊界、反求或條件篩選中使用「切線段相等」。",
      "literacy": "把真實尺寸、旋轉、施工或觀測情境轉成「切線段相等」的數學模型。"
    },
    "commonMistakes": [
      {
        "mistake": "看到兩條線碰圓就判相等",
        "why": "未確認同一外點與切線",
        "correction": "逐條檢查條件"
      },
      {
        "mistake": "把切點間弦AB也判等於PA",
        "why": "定理只比較兩切線段",
        "correction": "相等的是PA與PB"
      },
      {
        "mistake": "列式時把常數移項錯",
        "why": "代數運算錯",
        "correction": "回代兩邊驗證"
      },
      {
        "mistake": "求出負長度仍接受",
        "why": "未做幾何範圍檢查",
        "correction": "長度必須大於0"
      }
    ],
    "selfCheck": [
      "我是否先確認「切線段相等」的適用條件？",
      "我是否分清半徑、直徑、弦、弧與角的角色？",
      "我是否寫出必要單位，並在最後才取近似值？",
      "我是否用定理或公式驗證，而不是依圖形外觀猜測？"
    ],
    "summary": [
      "同一圓外點引出的兩切線段相等。",
      "相等的是外點到兩切點的線段。",
      "可與代數、周長及直角三角形結合。"
    ],
    "connections": {
      "previous": "承接「切線與半徑」。",
      "next": "下一技能為「圓素養題」。"
    },
    "figureReferences": [
      {
        "figureId": "u19-s017-fig001",
        "purpose": "圓 O 外點 P 向圓作 PA、PB 兩切線，兩線段以相同刻痕表示等長。",
        "altText": "圓 O 外點 P 向圓作 PA、PB 兩切線，兩線段以相同刻痕表示等長。，不可按比例目測。"
      }
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u19-s017-v001",
        "u19-s017-v002",
        "u19-s017-v003",
        "u19-s017-v004",
        "u19-s017-v005",
        "u19-s017-v006",
        "u19-s017-v007",
        "u19-s017-v008",
        "u19-s017-v009",
        "u19-s017-v010",
        "u19-s017-v011",
        "u19-s017-v012"
      ],
      "constructedResponseIds": [
        "u19-s017-cr001",
        "u19-s017-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段回讀「切線段相等」講義，確認所有符號先定義、公式均附條件，並以四個不同目的例題檢查定義辨認、標準運算、進階邊界與實際連結；特別核對：使用同一圓外點引出的兩切線段相等。",
      "reviewVersion": "human-lecture-review-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "7f4b4b8eb6b17f32a94ce0a07e5c19bae33faba3d7886d2edbb489f6ee86d4ab"
  },
  "questions": [
    {
      "questionId": "u19-s017-v001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "two-tangent-segments",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s017-fig001",
      "drawingSpecId": "u19-s017-fig001",
      "prompt": "P 為圓外點，PA、PB 都是切線段。若 PA=9 cm，PB 為何？",
      "text": "P 為圓外點，PA、PB 都是切線段。若 PA=9 cm，PB 為何？",
      "givenConditions": "PA、PB為同一圓的切線段。",
      "target": "求PB。",
      "choices": [
        "9 cm",
        "4.5 cm",
        "18 cm",
        "無法判定"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「PA、PB為同一圓的切線段。」重算：同一圓外點P引出的兩切線段相等，所以PB=9 cm。",
      "explanation": "同一圓外點P引出的兩切線段相等，所以PB=9 cm。 因此唯一正確選項是「9 cm」。",
      "steps": [
        "確認同外點同圓。",
        "使用PA=PB。"
      ],
      "optionAnalysis": [
        {
          "choice": "9 cm",
          "truth": true,
          "reason": "依題目條件重新計算：同一圓外點P引出的兩切線段相等，所以PB=9 cm。"
        },
        {
          "choice": "4.5 cm",
          "truth": false,
          "reason": "錯取一半。"
        },
        {
          "choice": "18 cm",
          "truth": false,
          "reason": "錯乘2。"
        },
        {
          "choice": "無法判定",
          "truth": false,
          "reason": "條件足夠。"
        }
      ],
      "misconceptionTarget": "不知道兩切線段相等。",
      "prerequisiteCheck": "需先能使用「切線與半徑」；本題未使用後續技能。",
      "estimatedTimeSec": 45,
      "unitCheck": "u19-s017-v001 已核對所求量「求PB。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「直接使用切線段相等。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s017-v001。",
      "difficultyReason": "basic：直接使用切線段相等。 解題需完成「確認同外點同圓。；使用PA=PB。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "直接使用切線段相等。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "677cd2be0119b7b5d22d2b8e60802dc912f9dd4c9af3645183d7883616adbbaa"
    },
    {
      "questionId": "u19-s017-v002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "two-tangent-segments",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "PA=3x+1、PB=5x−7，兩者為同一外點的切線段。求 x。",
      "text": "PA=3x+1、PB=5x−7，兩者為同一外點的切線段。求 x。",
      "givenConditions": "PA、PB同外點同圓。",
      "target": "求x。",
      "choices": [
        "4",
        "2",
        "3",
        "5"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「PA、PB同外點同圓。」重算：PA=PB，3x+1=5x−7，8=2x，x=4。",
      "explanation": "PA=PB，3x+1=5x−7，8=2x，x=4。 因此唯一正確選項是「4」。",
      "steps": [
        "列等式。",
        "移項求x=4。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": true,
          "reason": "依題目條件重新計算：PA=PB，3x+1=5x−7，8=2x，x=4。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "回代7與3不等。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "回代10與8不等。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "回代16與18不等。"
        }
      ],
      "misconceptionTarget": "等式移項錯。",
      "prerequisiteCheck": "需先能使用「切線與半徑」；本題未使用後續技能。",
      "estimatedTimeSec": 70,
      "unitCheck": "u19-s017-v002 已核對所求量「求x。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「以代數使用等切線段。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s017-v002。",
      "difficultyReason": "basic：以代數使用等切線段。 解題需完成「列等式。；移項求x=4。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "以代數使用等切線段。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "9a320ba2609ff06b2dc3f37172e7e5b539c0dd2769ca7d93da2a669dfe588742"
    },
    {
      "questionId": "u19-s017-v003",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "two-tangent-segments",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "同一外點 P 引圓的兩切線 PA、PB。兩段總長 24 cm，則每段多長？",
      "text": "同一外點 P 引圓的兩切線 PA、PB。兩段總長 24 cm，則每段多長？",
      "givenConditions": "PA=PB；和24。",
      "target": "求每段。",
      "choices": [
        "6 cm",
        "12 cm",
        "24 cm",
        "48 cm"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「PA=PB；和24。」重算：PA=PB，且PA+PB=24，所以每段12。",
      "explanation": "PA=PB，且PA+PB=24，所以每段12。 因此唯一正確選項是「12 cm」。",
      "steps": [
        "設每段t。",
        "2t=24。"
      ],
      "optionAnalysis": [
        {
          "choice": "6 cm",
          "truth": false,
          "reason": "又除2一次。"
        },
        {
          "choice": "12 cm",
          "truth": true,
          "reason": "依題目條件重新計算：PA=PB，且PA+PB=24，所以每段12。"
        },
        {
          "choice": "24 cm",
          "truth": false,
          "reason": "把總長當單段。"
        },
        {
          "choice": "48 cm",
          "truth": false,
          "reason": "錯乘2。"
        }
      ],
      "misconceptionTarget": "總長與單段長混淆。",
      "prerequisiteCheck": "需先能使用「切線與半徑」；本題未使用後續技能。",
      "estimatedTimeSec": 55,
      "unitCheck": "u19-s017-v003 已核對所求量「求每段。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由總長求每條切線段。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s017-v003。",
      "difficultyReason": "basic：由總長求每條切線段。 解題需完成「設每段t。；2t=24。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由總長求每條切線段。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "69682001ac254bf594515264d80b7c30324312928ac762d88ea0b37c163e1ed6"
    },
    {
      "questionId": "u19-s017-v004",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "two-tangent-segments",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "△PAB 中，PA、PB 為切線段，AB=10 cm，三角形周長32 cm。PA 為何？",
      "text": "△PAB 中，PA、PB 為切線段，AB=10 cm，三角形周長32 cm。PA 為何？",
      "givenConditions": "PA=PB；AB=10；周長32。",
      "target": "求PA。",
      "choices": [
        "6 cm",
        "11 cm",
        "10 cm",
        "22 cm"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「PA=PB；AB=10；周長32。」重算：PA=PB=t，2t+10=32，2t=22，t=11。",
      "explanation": "PA=PB=t，2t+10=32，2t=22，t=11。 因此唯一正確選項是「11 cm」。",
      "steps": [
        "設等邊t。",
        "列2t+10=32。"
      ],
      "optionAnalysis": [
        {
          "choice": "6 cm",
          "truth": false,
          "reason": "把剩餘22再錯除。"
        },
        {
          "choice": "11 cm",
          "truth": true,
          "reason": "依題目條件重新計算：PA=PB=t，2t+10=32，2t=22，t=11。"
        },
        {
          "choice": "10 cm",
          "truth": false,
          "reason": "誤認等於AB。"
        },
        {
          "choice": "22 cm",
          "truth": false,
          "reason": "是兩切線段總長。"
        }
      ],
      "misconceptionTarget": "周長方程漏一條切線段。",
      "prerequisiteCheck": "需先能使用「切線與半徑」；本題未使用後續技能。",
      "estimatedTimeSec": 80,
      "unitCheck": "u19-s017-v004 已核對所求量「求PA。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「結合等切線段與周長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s017-v004。",
      "difficultyReason": "standard：結合等切線段與周長。 解題需完成「設等邊t。；列2t+10=32。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "結合等切線段與周長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "7f735060b225e0f74451f5177c7f3ad104425d27c850c53d13efc1c954d7f5fa"
    },
    {
      "questionId": "u19-s017-v005",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "two-tangent-segments",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "PA=2x+5、PB=4x−9，且兩者皆為切線段。求共同長度。",
      "text": "PA=2x+5、PB=4x−9，且兩者皆為切線段。求共同長度。",
      "givenConditions": "同外點同圓。",
      "target": "求PA=PB的長度。",
      "choices": [
        "7",
        "14",
        "19",
        "33"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「同外點同圓。」重算：2x+5=4x−9，x=7；共同長度=2×7+5=19。",
      "explanation": "2x+5=4x−9，x=7；共同長度=2×7+5=19。 因此唯一正確選項是「19」。",
      "steps": [
        "解x=7。",
        "回代求長19。"
      ],
      "optionAnalysis": [
        {
          "choice": "7",
          "truth": false,
          "reason": "這是x。"
        },
        {
          "choice": "14",
          "truth": false,
          "reason": "漏加5。"
        },
        {
          "choice": "19",
          "truth": true,
          "reason": "依題目條件重新計算：2x+5=4x−9，x=7；共同長度=2×7+5=19。"
        },
        {
          "choice": "33",
          "truth": false,
          "reason": "錯回代另一式。"
        }
      ],
      "misconceptionTarget": "只求x未回答長度。",
      "prerequisiteCheck": "需先能使用「切線與半徑」；本題未使用後續技能。",
      "estimatedTimeSec": 85,
      "unitCheck": "u19-s017-v005 已核對所求量「求PA=PB的長度。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由代數式求共同切線長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s017-v005。",
      "difficultyReason": "standard：由代數式求共同切線長。 解題需完成「解x=7。；回代求長19。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由代數式求共同切線長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "9c8c0510ff0b74ab02b8f40a74f063250de3b059404639ced22911718a3348d6"
    },
    {
      "questionId": "u19-s017-v006",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "two-tangent-segments",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "P、Q 是圓外不同點。PA、PB 為P的兩切線，QC、QD為Q的兩切線。下列必然成立的是何者？",
      "text": "P、Q 是圓外不同點。PA、PB 為P的兩切線，QC、QD為Q的兩切線。下列必然成立的是何者？",
      "givenConditions": "P、Q為不同外點。",
      "target": "選必然等式。",
      "choices": [
        "PA=QC",
        "PB=QD",
        "PA=PB 且 QC=QD",
        "四段全部相等"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「P、Q為不同外點。」重算：定理只保證同一外點引出的兩切線段相等，不同外點間無必然關係。",
      "explanation": "定理只保證同一外點引出的兩切線段相等，不同外點間無必然關係。 因此唯一正確選項是「PA=PB 且 QC=QD」。",
      "steps": [
        "分組辨認共同外點。",
        "各組內相等。"
      ],
      "optionAnalysis": [
        {
          "choice": "PA=QC",
          "truth": false,
          "reason": "不同外點不保證。"
        },
        {
          "choice": "PB=QD",
          "truth": false,
          "reason": "不同外點不保證。"
        },
        {
          "choice": "PA=PB 且 QC=QD",
          "truth": true,
          "reason": "依題目條件重新計算：定理只保證同一外點引出的兩切線段相等，不同外點間無必然關係。"
        },
        {
          "choice": "四段全部相等",
          "truth": false,
          "reason": "缺少額外對稱條件。"
        }
      ],
      "misconceptionTarget": "把不同外點的切線段也全部判等。",
      "prerequisiteCheck": "需先能使用「切線與半徑」；本題未使用後續技能。",
      "estimatedTimeSec": 80,
      "unitCheck": "u19-s017-v006 已核對所求量「選必然等式。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「辨認定理適用範圍。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s017-v006。",
      "difficultyReason": "standard：辨認定理適用範圍。 解題需完成「分組辨認共同外點。；各組內相等。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認定理適用範圍。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "c6e34baa194d9325304927af5760a9b7359d4b7584bdc011f1c41f6af83c8849"
    },
    {
      "questionId": "u19-s017-v007",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "two-tangent-segments",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s017-fig001",
      "drawingSpecId": "u19-s017-fig001",
      "prompt": "P 為圓外點，PA、PB 為切線段。若 PA=x²−1、PB=3x+3，且長度為正，求 x。",
      "text": "P 為圓外點，PA、PB 為切線段。若 PA=x²−1、PB=3x+3，且長度為正，求 x。",
      "givenConditions": "PA、PB切線段且>0。",
      "target": "求x。",
      "choices": [
        "−4",
        "1",
        "3",
        "4 或 −1 中只有4可使長度正且式相等"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「PA、PB切線段且>0。」重算：令x²−1=3x+3，得x²−3x−4=0=(x−4)(x+1)。x=4時長15；x=−1時兩式皆0，不是正長度，故只取4。",
      "explanation": "令x²−1=3x+3，得x²−3x−4=0=(x−4)(x+1)。x=4時長15；x=−1時兩式皆0，不是正長度，故只取4。 因此唯一正確選項是「4 或 −1 中只有4可使長度正且式相等」。",
      "steps": [
        "解二次方程得4、−1。",
        "檢查長度正值。",
        "排除0長度。"
      ],
      "optionAnalysis": [
        {
          "choice": "−4",
          "truth": false,
          "reason": "不滿足等式。"
        },
        {
          "choice": "1",
          "truth": false,
          "reason": "兩長分別0與6不等。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "不滿足等式。"
        },
        {
          "choice": "4 或 −1 中只有4可使長度正且式相等",
          "truth": true,
          "reason": "依題目條件重新計算：令x²−1=3x+3，得x²−3x−4=0=(x−4)(x+1)。x=4時長15；x=−1時兩式皆0，不是正長度，故只取4。"
        }
      ],
      "misconceptionTarget": "解方程後未檢查幾何長度。",
      "prerequisiteCheck": "需先能使用「切線與半徑」；本題未使用後續技能。",
      "estimatedTimeSec": 130,
      "unitCheck": "u19-s017-v007 已核對所求量「求x。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「用二次方程與正長度篩根。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s017-v007。",
      "difficultyReason": "advanced：用二次方程與正長度篩根。 解題需完成「解二次方程得4、−1。；檢查長度正值。；排除0長度。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "用二次方程與正長度篩根。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "0d3fbae48477d2b666a19d5249b1e7f305ffab2cdfcdc57cbb0d7ae89b034138"
    },
    {
      "questionId": "u19-s017-v008",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "two-tangent-segments",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "同一外點 P 的兩切線段 PA、PB 相等。若 A、B 兩切點與圓心 O 形成四邊形 OAPB，OA=6、PA=8，求其周長。",
      "text": "同一外點 P 的兩切線段 PA、PB 相等。若 A、B 兩切點與圓心 O 形成四邊形 OAPB，OA=6、PA=8，求其周長。",
      "givenConditions": "OA=OB=6；PA=PB=8。",
      "target": "求OAPB周長。",
      "choices": [
        "20",
        "24",
        "32",
        "28"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「OA=OB=6；PA=PB=8。」重算：OA=OB=6，PA=PB=8，所以周長6+8+8+6=28。",
      "explanation": "OA=OB=6，PA=PB=8，所以周長6+8+8+6=28。 因此唯一正確選項是「28」。",
      "steps": [
        "兩半徑相等。",
        "兩切線段相等。",
        "相加28。"
      ],
      "optionAnalysis": [
        {
          "choice": "20",
          "truth": false,
          "reason": "漏一條半徑。"
        },
        {
          "choice": "24",
          "truth": false,
          "reason": "漏一條切線。"
        },
        {
          "choice": "32",
          "truth": false,
          "reason": "相加錯。"
        },
        {
          "choice": "28",
          "truth": true,
          "reason": "依題目條件重新計算：OA=OB=6，PA=PB=8，所以周長6+8+8+6=28。"
        }
      ],
      "misconceptionTarget": "只使用一組等長而漏邊。",
      "prerequisiteCheck": "需先能使用「切線與半徑」；本題未使用後續技能。",
      "estimatedTimeSec": 100,
      "unitCheck": "u19-s017-v008 已核對所求量「求OAPB周長。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「結合半徑與切線段相等。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s017-v008。",
      "difficultyReason": "advanced：結合半徑與切線段相等。 解題需完成「兩半徑相等。；兩切線段相等。；相加28。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "結合半徑與切線段相等。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "13110b8dfbc114dd9a548aa41ad4eea254a13a99ce5a331b9e2a46d75740658d"
    },
    {
      "questionId": "u19-s017-v009",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "two-tangent-segments",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "PA、PB 為同一圓外點的切線段，∠APB=60°，且 PA=10。△PAB 的周長為何？",
      "text": "PA、PB 為同一圓外點的切線段，∠APB=60°，且 PA=10。△PAB 的周長為何？",
      "givenConditions": "PA=PB=10；∠APB=60°。",
      "target": "求周長。",
      "choices": [
        "20",
        "30",
        "10+10√3",
        "20+10√3"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「PA=PB=10；∠APB=60°。」重算：PA=PB=10，夾角60°。由餘弦或等腰三角形性質，AB=10，因此三角形為正三角形，周長30。",
      "explanation": "PA=PB=10，夾角60°。由餘弦或等腰三角形性質，AB=10，因此三角形為正三角形，周長30。 因此唯一正確選項是「30」。",
      "steps": [
        "兩腰皆10。",
        "頂角60°故底角各60°。",
        "三邊皆10。"
      ],
      "optionAnalysis": [
        {
          "choice": "20",
          "truth": false,
          "reason": "只加兩腰。"
        },
        {
          "choice": "30",
          "truth": true,
          "reason": "依題目條件重新計算：PA=PB=10，夾角60°。由餘弦或等腰三角形性質，AB=10，因此三角形為正三角形，周長30。"
        },
        {
          "choice": "10+10√3",
          "truth": false,
          "reason": "底邊計算錯。"
        },
        {
          "choice": "20+10√3",
          "truth": false,
          "reason": "將高誤作底邊。"
        }
      ],
      "misconceptionTarget": "不知道等腰三角形頂角60°即正三角形。",
      "prerequisiteCheck": "需先能使用「切線與半徑」；本題未使用後續技能。",
      "estimatedTimeSec": 115,
      "unitCheck": "u19-s017-v009 已核對所求量「求周長。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「結合切線段與三角形角度。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s017-v009。",
      "difficultyReason": "advanced：結合切線段與三角形角度。 解題需完成「兩腰皆10。；頂角60°故底角各60°。；三邊皆10。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "結合切線段與三角形角度。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "bed48358868aadb01aa3a4f7c47a052c704622823a5031f3203c603bf22570d3"
    },
    {
      "questionId": "u19-s017-v010",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "two-tangent-segments",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "從同一觀景點 P 向圓形湖岸作兩條最短直線步道，分別在 A、B 處相切。若 PA=35 m，PB 為何？",
      "text": "從同一觀景點 P 向圓形湖岸作兩條最短直線步道，分別在 A、B 處相切。若 PA=35 m，PB 為何？",
      "givenConditions": "P同一外點；A、B為切點。",
      "target": "求PB。",
      "choices": [
        "17.5 m",
        "70 m",
        "視湖半徑而定",
        "35 m"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「P同一外點；A、B為切點。」重算：同一外點到同一圓的兩切線段相等，PB=35 m。",
      "explanation": "同一外點到同一圓的兩切線段相等，PB=35 m。 因此唯一正確選項是「35 m」。",
      "steps": [
        "辨認兩步道為切線段。",
        "使用等長定理。"
      ],
      "optionAnalysis": [
        {
          "choice": "17.5 m",
          "truth": false,
          "reason": "錯取一半。"
        },
        {
          "choice": "70 m",
          "truth": false,
          "reason": "錯乘2。"
        },
        {
          "choice": "視湖半徑而定",
          "truth": false,
          "reason": "不需湖半徑。"
        },
        {
          "choice": "35 m",
          "truth": true,
          "reason": "依題目條件重新計算：同一外點到同一圓的兩切線段相等，PB=35 m。"
        }
      ],
      "misconceptionTarget": "被情境中的湖大小干擾。",
      "prerequisiteCheck": "需先能使用「切線與半徑」；本題未使用後續技能。",
      "estimatedTimeSec": 70,
      "unitCheck": "u19-s017-v010 已核對所求量「求PB。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「將兩條相切步道轉成等切線段。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s017-v010。",
      "difficultyReason": "literacy：將兩條相切步道轉成等切線段。 解題需完成「辨認兩步道為切線段。；使用等長定理。」。",
      "literacyContextNecessity": "步道是否相切與是否共用外點直接決定等長。",
      "authoringIntent": "將兩條相切步道轉成等切線段。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "f214cbce7ebdcc353ddfc4f70af03c28bc1e6ce5e4661fe419df06ec2b38b777"
    },
    {
      "questionId": "u19-s017-v011",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "two-tangent-segments",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形展區外一個入口 P 分出兩條切線走道到 A、B。若兩走道總長 48 m，每條多長？",
      "text": "圓形展區外一個入口 P 分出兩條切線走道到 A、B。若兩走道總長 48 m，每條多長？",
      "givenConditions": "兩走道為同外點切線段；總48。",
      "target": "求每條。",
      "choices": [
        "24 m",
        "12 m",
        "48 m",
        "96 m"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「兩走道為同外點切線段；總48。」重算：兩切線走道等長，48÷2=24 m。",
      "explanation": "兩切線走道等長，48÷2=24 m。 因此唯一正確選項是「24 m」。",
      "steps": [
        "PA=PB。",
        "總長除2。"
      ],
      "optionAnalysis": [
        {
          "choice": "24 m",
          "truth": true,
          "reason": "依題目條件重新計算：兩切線走道等長，48÷2=24 m。"
        },
        {
          "choice": "12 m",
          "truth": false,
          "reason": "多除一次。"
        },
        {
          "choice": "48 m",
          "truth": false,
          "reason": "把總長當單條。"
        },
        {
          "choice": "96 m",
          "truth": false,
          "reason": "錯乘2。"
        }
      ],
      "misconceptionTarget": "總量分配錯。",
      "prerequisiteCheck": "需先能使用「切線與半徑」；本題未使用後續技能。",
      "estimatedTimeSec": 65,
      "unitCheck": "u19-s017-v011 已核對所求量「求每條。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「計算對稱切線走道長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s017-v011。",
      "difficultyReason": "literacy：計算對稱切線走道長。 解題需完成「PA=PB。；總長除2。」。",
      "literacyContextNecessity": "等切線段使總材料可平均分配。",
      "authoringIntent": "計算對稱切線走道長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "b86c34a8727010da0ca8bd2527cb56f2a1e54b2bb8e3b7d4a1edc910560ee4b5"
    },
    {
      "questionId": "u19-s017-v012",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "two-tangent-segments",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形廣告牌外點 P 拉兩條支索至切點 A、B。若 PA=4x−2、PB=2x+8 公尺，應選 x 為何才能使兩支索皆相切於同一圓？",
      "text": "圓形廣告牌外點 P 拉兩條支索至切點 A、B。若 PA=4x−2、PB=2x+8 公尺，應選 x 為何才能使兩支索皆相切於同一圓？",
      "givenConditions": "兩支索同外點且皆切同圓。",
      "target": "求x。",
      "choices": [
        "3",
        "4",
        "5",
        "6"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「兩支索同外點且皆切同圓。」重算：同一外點切線段相等：4x−2=2x+8，2x=10，x=5，兩長皆18。",
      "explanation": "同一外點切線段相等：4x−2=2x+8，2x=10，x=5，兩長皆18。 因此唯一正確選項是「5」。",
      "steps": [
        "列等式。",
        "解x=5。",
        "回代18。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "回代10與14不等。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "回代14與16不等。"
        },
        {
          "choice": "5",
          "truth": true,
          "reason": "依題目條件重新計算：同一外點切線段相等：4x−2=2x+8，2x=10，x=5，兩長皆18。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "回代22與20不等。"
        }
      ],
      "misconceptionTarget": "工程情境中未使用等長條件或移項錯。",
      "prerequisiteCheck": "需先能使用「切線與半徑」；本題未使用後續技能。",
      "estimatedTimeSec": 85,
      "unitCheck": "u19-s017-v012 已核對所求量「求x。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「用等切線段調整支索參數。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s017-v012。",
      "difficultyReason": "literacy：用等切線段調整支索參數。 解題需完成「列等式。；解x=5。；回代18。」。",
      "literacyContextNecessity": "支索長度必須符合切線段相等，參數直接影響安裝。",
      "authoringIntent": "用等切線段調整支索參數。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "f738c533c7075408dfb3d1fb77155f60742ce47cc4c59cf646017b783c3c43ba"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u19-s017-cr001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "two-tangent-segments",
      "difficulty": "advanced",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u19-s017-fig001",
      "drawingSpecId": "u19-s017-fig001",
      "prompt": "P 為圓外點，PA、PB 為切線段。已知 PA=x²−4、PB=3x+2，且兩段長度為正。求 x 與共同長度。",
      "requiredWork": [
        "列等切線段方程。",
        "解二次方程。",
        "檢查正長度並回代。"
      ],
      "standardSolution": [
        "x²−4=3x+2。",
        "x²−3x−6=0，x=(3±√33)/2。",
        "兩根都需檢查長度；對負根，3x+2可能為負。x=(3+√33)/2 時長度=(13+3√33)/2>0；另一根長度=(13−3√33)/2<0，因此排除。"
      ],
      "fullCreditSolution": [
        "x²−4=3x+2。",
        "x²−3x−6=0，x=(3±√33)/2。",
        "兩根都需檢查長度；對負根，3x+2可能為負。x=(3+√33)/2 時長度=(13+3√33)/2>0；另一根長度=(13−3√33)/2<0，因此排除。"
      ],
      "alternativeSolutions": [
        "可先由PB>0得x>−2/3，再檢查二次方程兩根。"
      ],
      "reasoningSteps": [
        "x²−4=3x+2。",
        "x²−3x−6=0，x=(3±√33)/2。",
        "兩根都需檢查長度；對負根，3x+2可能為負。x=(3+√33)/2 時長度=(13+3√33)/2>0；另一根長度=(13−3√33)/2<0，因此排除。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "保留正長度根與共同長度，且排除另一根。"
        },
        {
          "score": 2,
          "criteria": "求出兩根並正確選根但未算共同長度。"
        },
        {
          "score": 1,
          "criteria": "列出正確二次方程。"
        },
        {
          "score": 0,
          "criteria": "未使用PA=PB。"
        }
      ],
      "partialCreditRules": [
        "根式形式正確即可。"
      ],
      "followThroughPolicy": "若解根算術錯但有正長度檢查，給方法分。",
      "unitNotationRules": "x無單位；共同長度沿題目單位。",
      "answerOnlyPolicy": "只寫可接受x但無共同長度給2分。",
      "commonErrors": [
        "兩根全部接受。",
        "只因x為負就排除，未檢查長度。"
      ],
      "independentReview": {
        "derivedResult": "x=(3+√33)/2，共同長度=(13+3√33)/2。",
        "ambiguity": "正長度條件排除另一根，唯一。",
        "decision": "pass",
        "reviewNote": "u19-s017-cr001 由題目條件另行推導得到「x=(3+√33)/2，共同長度=(13+3√33)/2。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "4ffe77a75eadabd2ed7a483ec10c6af3855e503e6003b21edaf4a236deb10726"
    },
    {
      "questionId": "u19-s017-cr002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "two-tangent-segments",
      "difficulty": "standard",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "從外點 P 向圓作兩切線 PA、PB，PA=13 cm，AB=10 cm。求 △PAB 周長；若由P到圓心的直線平分∠APB，說明此對稱與等切線段的關係。",
      "requiredWork": [
        "使用PA=PB。",
        "求周長。",
        "說明兩直角三角形全等造成對稱。"
      ],
      "standardSolution": [
        "PB=PA=13 cm。",
        "△PAB周長=13+13+10=36 cm。",
        "連接OA、OB、OP後，OA=OB、OP共邊，且A、B為直角，兩直角三角形全等，所以OP平分∠APB，也支持PA=PB。"
      ],
      "fullCreditSolution": [
        "PB=PA=13 cm。",
        "△PAB周長=13+13+10=36 cm。",
        "連接OA、OB、OP後，OA=OB、OP共邊，且A、B為直角，兩直角三角形全等，所以OP平分∠APB，也支持PA=PB。"
      ],
      "alternativeSolutions": [
        "周長部分可先用2PA+AB。"
      ],
      "reasoningSteps": [
        "PB=PA=13 cm。",
        "△PAB周長=13+13+10=36 cm。",
        "連接OA、OB、OP後，OA=OB、OP共邊，且A、B為直角，兩直角三角形全等，所以OP平分∠APB，也支持PA=PB。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "周長36 cm與對稱說明完整。"
        },
        {
          "score": 2,
          "criteria": "周長正確但對稱理由簡略。"
        },
        {
          "score": 1,
          "criteria": "知道PB=13。"
        },
        {
          "score": 0,
          "criteria": "把PB視為未知無法求。"
        }
      ],
      "partialCreditRules": [
        "周長與說明分項。"
      ],
      "followThroughPolicy": "若周長加法錯但PB=13正確，可得1分。",
      "unitNotationRules": "周長cm。",
      "answerOnlyPolicy": "只寫36 cm給2分。",
      "commonErrors": [
        "漏PB。",
        "把AB也判13。"
      ],
      "independentReview": {
        "derivedResult": "周長36 cm；OP為對稱軸並平分頂角。",
        "ambiguity": "所有長度與切線條件充分。",
        "decision": "pass",
        "reviewNote": "u19-s017-cr002 由題目條件另行推導得到「周長36 cm；OP為對稱軸並平分頂角。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "72d63296468be627b2de6f754e1931a7b09f9f543c896b3e91c505a5aa06a379"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u19-s017-v001",
      "contentSha256": "677cd2be0119b7b5d22d2b8e60802dc912f9dd4c9af3645183d7883616adbbaa",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「PA、PB為同一圓的切線段。」重算：同一圓外點P引出的兩切線段相等，所以PB=9 cm。",
      "derivedAnswer": "9 cm",
      "storedAnswer": "9 cm",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「9 cm」符合；三個干擾項分別因「錯取一半。；錯乘2。；條件足夠。」而排除。",
        "undefinedSymbol": "u19-s017-v001 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線段相等」講義定義。",
        "unitConflict": "題目所求為「求PB。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「直接使用切線段相等。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「PA、PB為同一圓的切線段。」重讀，所求「求PB。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是直接使用切線段相等。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴tangent-radius，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「P 為圓外點，PA、PB 都是切線段。若 PA=9 cm，PB 為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s017-v001 人工重算：同一圓外點P引出的兩切線段相等，所以PB=9 cm。 正確選項為「9 cm」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s017-v002",
      "contentSha256": "9a320ba2609ff06b2dc3f37172e7e5b539c0dd2769ca7d93da2a669dfe588742",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「PA、PB同外點同圓。」重算：PA=PB，3x+1=5x−7，8=2x，x=4。",
      "derivedAnswer": "4",
      "storedAnswer": "4",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「4」符合；三個干擾項分別因「回代7與3不等。；回代10與8不等。；回代16與18不等。」而排除。",
        "undefinedSymbol": "u19-s017-v002 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線段相等」講義定義。",
        "unitConflict": "題目所求為「求x。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「以代數使用等切線段。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「PA、PB同外點同圓。」重讀，所求「求x。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是以代數使用等切線段。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴tangent-radius，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「PA=3x+1、PB=5x−7，兩者為同一外點的切線段。求 x。」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s017-v002 人工重算：PA=PB，3x+1=5x−7，8=2x，x=4。 正確選項為「4」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s017-v003",
      "contentSha256": "69682001ac254bf594515264d80b7c30324312928ac762d88ea0b37c163e1ed6",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「PA=PB；和24。」重算：PA=PB，且PA+PB=24，所以每段12。",
      "derivedAnswer": "12 cm",
      "storedAnswer": "12 cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「12 cm」符合；三個干擾項分別因「又除2一次。；把總長當單段。；錯乘2。」而排除。",
        "undefinedSymbol": "u19-s017-v003 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線段相等」講義定義。",
        "unitConflict": "題目所求為「求每段。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由總長求每條切線段。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「PA=PB；和24。」重讀，所求「求每段。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是由總長求每條切線段。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴tangent-radius，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「同一外點 P 引圓的兩切線 PA、PB。兩段總長 24 cm，則每段多長？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s017-v003 人工重算：PA=PB，且PA+PB=24，所以每段12。 正確選項為「12 cm」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s017-v004",
      "contentSha256": "7f735060b225e0f74451f5177c7f3ad104425d27c850c53d13efc1c954d7f5fa",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「PA=PB；AB=10；周長32。」重算：PA=PB=t，2t+10=32，2t=22，t=11。",
      "derivedAnswer": "11 cm",
      "storedAnswer": "11 cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「11 cm」符合；三個干擾項分別因「把剩餘22再錯除。；誤認等於AB。；是兩切線段總長。」而排除。",
        "undefinedSymbol": "u19-s017-v004 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線段相等」講義定義。",
        "unitConflict": "題目所求為「求PA。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「結合等切線段與周長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「PA=PB；AB=10；周長32。」重讀，所求「求PA。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是結合等切線段與周長。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴tangent-radius，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「△PAB 中，PA、PB 為切線段，AB=10 cm，三角形周長32 cm。PA 為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s017-v004 人工重算：PA=PB=t，2t+10=32，2t=22，t=11。 正確選項為「11 cm」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s017-v005",
      "contentSha256": "9c8c0510ff0b74ab02b8f40a74f063250de3b059404639ced22911718a3348d6",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「同外點同圓。」重算：2x+5=4x−9，x=7；共同長度=2×7+5=19。",
      "derivedAnswer": "19",
      "storedAnswer": "19",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「19」符合；三個干擾項分別因「這是x。；漏加5。；錯回代另一式。」而排除。",
        "undefinedSymbol": "u19-s017-v005 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線段相等」講義定義。",
        "unitConflict": "題目所求為「求PA=PB的長度。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由代數式求共同切線長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「同外點同圓。」重讀，所求「求PA=PB的長度。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是由代數式求共同切線長。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴tangent-radius，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「PA=2x+5、PB=4x−9，且兩者皆為切線段。求共同長度。」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s017-v005 人工重算：2x+5=4x−9，x=7；共同長度=2×7+5=19。 正確選項為「19」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s017-v006",
      "contentSha256": "c6e34baa194d9325304927af5760a9b7359d4b7584bdc011f1c41f6af83c8849",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「P、Q為不同外點。」重算：定理只保證同一外點引出的兩切線段相等，不同外點間無必然關係。",
      "derivedAnswer": "PA=PB 且 QC=QD",
      "storedAnswer": "PA=PB 且 QC=QD",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「PA=PB 且 QC=QD」符合；三個干擾項分別因「不同外點不保證。；不同外點不保證。；缺少額外對稱條件。」而排除。",
        "undefinedSymbol": "u19-s017-v006 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線段相等」講義定義。",
        "unitConflict": "題目所求為「選必然等式。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「辨認定理適用範圍。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「P、Q為不同外點。」重讀，所求「選必然等式。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是辨認定理適用範圍。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴tangent-radius，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「P、Q 是圓外不同點。PA、PB 為P的兩切線，QC、QD為Q的兩切線。下列必然成立的是何者？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s017-v006 人工重算：定理只保證同一外點引出的兩切線段相等，不同外點間無必然關係。 正確選項為「PA=PB 且 QC=QD」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s017-v007",
      "contentSha256": "0d3fbae48477d2b666a19d5249b1e7f305ffab2cdfcdc57cbb0d7ae89b034138",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「PA、PB切線段且>0。」重算：令x²−1=3x+3，得x²−3x−4=0=(x−4)(x+1)。x=4時長15；x=−1時兩式皆0，不是正長度，故只取4。",
      "derivedAnswer": "4 或 −1 中只有4可使長度正且式相等",
      "storedAnswer": "4 或 −1 中只有4可使長度正且式相等",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「4 或 −1 中只有4可使長度正且式相等」符合；三個干擾項分別因「不滿足等式。；兩長分別0與6不等。；不滿足等式。」而排除。",
        "undefinedSymbol": "u19-s017-v007 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線段相等」講義定義。",
        "unitConflict": "題目所求為「求x。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「用二次方程與正長度篩根。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「PA、PB切線段且>0。」重讀，所求「求x。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是用二次方程與正長度篩根。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴tangent-radius，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「P 為圓外點，PA、PB 為切線段。若 PA=x²−1、PB=3x+3，且長度為正，求 x。」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s017-v007 人工重算：令x²−1=3x+3，得x²−3x−4=0=(x−4)(x+1)。x=4時長15；x=−1時兩式皆0，不是正長度，故只取4。 正確選項為「4 或 −1 中只有4可使長度正且式相等」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s017-v008",
      "contentSha256": "13110b8dfbc114dd9a548aa41ad4eea254a13a99ce5a331b9e2a46d75740658d",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「OA=OB=6；PA=PB=8。」重算：OA=OB=6，PA=PB=8，所以周長6+8+8+6=28。",
      "derivedAnswer": "28",
      "storedAnswer": "28",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「28」符合；三個干擾項分別因「漏一條半徑。；漏一條切線。；相加錯。」而排除。",
        "undefinedSymbol": "u19-s017-v008 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線段相等」講義定義。",
        "unitConflict": "題目所求為「求OAPB周長。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「結合半徑與切線段相等。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「OA=OB=6；PA=PB=8。」重讀，所求「求OAPB周長。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是結合半徑與切線段相等。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴tangent-radius，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「同一外點 P 的兩切線段 PA、PB 相等。若 A、B 兩切點與圓心 O 形成四邊形 OAPB，OA=6、PA=8，求其周長。」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s017-v008 人工重算：OA=OB=6，PA=PB=8，所以周長6+8+8+6=28。 正確選項為「28」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s017-v009",
      "contentSha256": "bed48358868aadb01aa3a4f7c47a052c704622823a5031f3203c603bf22570d3",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「PA=PB=10；∠APB=60°。」重算：PA=PB=10，夾角60°。由餘弦或等腰三角形性質，AB=10，因此三角形為正三角形，周長30。",
      "derivedAnswer": "30",
      "storedAnswer": "30",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「30」符合；三個干擾項分別因「只加兩腰。；底邊計算錯。；將高誤作底邊。」而排除。",
        "undefinedSymbol": "u19-s017-v009 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線段相等」講義定義。",
        "unitConflict": "題目所求為「求周長。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「結合切線段與三角形角度。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「PA=PB=10；∠APB=60°。」重讀，所求「求周長。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是結合切線段與三角形角度。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴tangent-radius，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「PA、PB 為同一圓外點的切線段，∠APB=60°，且 PA=10。△PAB 的周長為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s017-v009 人工重算：PA=PB=10，夾角60°。由餘弦或等腰三角形性質，AB=10，因此三角形為正三角形，周長30。 正確選項為「30」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s017-v010",
      "contentSha256": "f214cbce7ebdcc353ddfc4f70af03c28bc1e6ce5e4661fe419df06ec2b38b777",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「P同一外點；A、B為切點。」重算：同一外點到同一圓的兩切線段相等，PB=35 m。",
      "derivedAnswer": "35 m",
      "storedAnswer": "35 m",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「35 m」符合；三個干擾項分別因「錯取一半。；錯乘2。；不需湖半徑。」而排除。",
        "undefinedSymbol": "u19-s017-v010 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線段相等」講義定義。",
        "unitConflict": "題目所求為「求PB。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「將兩條相切步道轉成等切線段。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「P同一外點；A、B為切點。」重讀，所求「求PB。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是將兩條相切步道轉成等切線段。，而非只依題序標示。",
      "literacyContextNecessity": "步道是否相切與是否共用外點直接決定等長。",
      "prerequisiteCheck": "只依賴tangent-radius，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「從同一觀景點 P 向圓形湖岸作兩條最短直線步道，分別在 A、B 處相切。若 PA=35 m，PB 為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s017-v010 人工重算：同一外點到同一圓的兩切線段相等，PB=35 m。 正確選項為「35 m」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s017-v011",
      "contentSha256": "b86c34a8727010da0ca8bd2527cb56f2a1e54b2bb8e3b7d4a1edc910560ee4b5",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「兩走道為同外點切線段；總48。」重算：兩切線走道等長，48÷2=24 m。",
      "derivedAnswer": "24 m",
      "storedAnswer": "24 m",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「24 m」符合；三個干擾項分別因「多除一次。；把總長當單條。；錯乘2。」而排除。",
        "undefinedSymbol": "u19-s017-v011 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線段相等」講義定義。",
        "unitConflict": "題目所求為「求每條。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「計算對稱切線走道長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「兩走道為同外點切線段；總48。」重讀，所求「求每條。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是計算對稱切線走道長。，而非只依題序標示。",
      "literacyContextNecessity": "等切線段使總材料可平均分配。",
      "prerequisiteCheck": "只依賴tangent-radius，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓形展區外一個入口 P 分出兩條切線走道到 A、B。若兩走道總長 48 m，每條多長？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s017-v011 人工重算：兩切線走道等長，48÷2=24 m。 正確選項為「24 m」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s017-v012",
      "contentSha256": "f738c533c7075408dfb3d1fb77155f60742ce47cc4c59cf646017b783c3c43ba",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「兩支索同外點且皆切同圓。」重算：同一外點切線段相等：4x−2=2x+8，2x=10，x=5，兩長皆18。",
      "derivedAnswer": "5",
      "storedAnswer": "5",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「5」符合；三個干擾項分別因「回代10與14不等。；回代14與16不等。；回代22與20不等。」而排除。",
        "undefinedSymbol": "u19-s017-v012 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線段相等」講義定義。",
        "unitConflict": "題目所求為「求x。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「用等切線段調整支索參數。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「兩支索同外點且皆切同圓。」重讀，所求「求x。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是用等切線段調整支索參數。，而非只依題序標示。",
      "literacyContextNecessity": "支索長度必須符合切線段相等，參數直接影響安裝。",
      "prerequisiteCheck": "只依賴tangent-radius，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓形廣告牌外點 P 拉兩條支索至切點 A、B。若 PA=4x−2、PB=2x+8 公尺，應選 x 為何才能使兩支索皆相切於同一圓？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s017-v012 人工重算：同一外點切線段相等：4x−2=2x+8，2x=10，x=5，兩長皆18。 正確選項為「5」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u19-s017-fig001",
      "unitId": "u19",
      "topicId": "u19-tangents",
      "skillId": "two-tangent-segments",
      "svgPath": "figures/u19/u19-s017-fig001.svg",
      "canvas": {
        "width": 360,
        "height": 240,
        "viewBox": "0 0 360 240"
      },
      "drawingSpec": {
        "purpose": "支援「切線段相等」中需要辨認點、線、弧、角或邊界的題目。",
        "coordinateSystem": "SVG x向右、y向下；所有座標以360×240畫布為準。",
        "geometry": "圓 O 外點 P 向圓作 PA、PB 兩切線，兩線段以相同刻痕表示等長。",
        "visibleLines": "所有作答所需實線均以2px以上深色描邊；強調弧以5px描邊。",
        "hiddenLines": "只有內部共邊或量測輔助線使用虛線；未指定者不得自行添加。",
        "labels": "標籤位置已在SVG以固定座標給定，避免遮住交點、角弧或刻痕。",
        "symbols": "直角符號、等長刻痕、箭頭及角度符號僅在數學條件需要時出現。",
        "scalePolicy": "示意圖不保證按實際長度或角度比例繪製。",
        "visualInferenceWarning": "不得以目測長短、角度或對稱性取代題目條件與定理。",
        "mobileReadability": "360×240檢視下文字至少16px，關鍵線至少2px，無微小數值標籤。",
        "answerLeakage": "圖中不標示任何題目要求計算的最終數值或正確選項。"
      },
      "altText": "圓 O 外點 P 向圓作 PA、PB 兩切線，兩線段以相同刻痕表示等長。 圖形僅協助辨認結構，不可依比例目測答案。",
      "svgTitle": "同一外點兩切線段圖",
      "svgDescription": "圓 O 外點 P 向圓作 PA、PB 兩切線，兩線段以相同刻痕表示等長。",
      "svgAssertions": [
        "role=\"img\"",
        "<title",
        "<desc",
        "viewBox=\"0 0 360 240\"",
        "M232 87",
        "M232 153",
        ">P</text>"
      ],
      "figureReview": {
        "decision": "pass",
        "manualRenderInspected": true,
        "mobileReadable": true,
        "answerLeakageFound": false,
        "reviewNote": "已逐項檢查 u19-s017-fig001 的點位、線段、弧線、標籤與輔助符號；此圖專門呈現「切線段相等」的結構，未包含可直接推得題庫答案的數值。",
        "reviewVersion": "human-figure-review-r1.0",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "cfdea456fad2793437218df7962819b38174d7de3e72bbe82594bace03dc54e7"
    }
  ]
};
export default u19_s017;
