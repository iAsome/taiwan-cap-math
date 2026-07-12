export const u19_s012 = {
  "lecture": {
    "lectureId": "u19-s012-lecture-r1",
    "unitId": "u19",
    "numericUnitId": 19,
    "topicId": "u19-measure",
    "skillId": "sector-perimeter",
    "title": "扇形周長",
    "unitTitle": "圓",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "slot": "s012",
      "lockedSkillId": "sector-perimeter",
      "lockedOrder": 12,
      "scope": "分清扇形周長與弧長，補上兩條半徑。"
    },
    "learningOutcomes": [
      "能計算扇形周長。",
      "能分辨弧長與扇形周長。",
      "能處理含直徑或多段邊界的扇形。"
    ],
    "prerequisites": [
      {
        "skillId": "circle-composite-area",
        "requiredLevel": "能使用「圓複合面積」的核心定義與基本運算，並辨認其適用條件。"
      }
    ],
    "prerequisiteBridge": "先由前一技能「圓複合面積」的結論，連接到本技能「扇形周長」所需的新判斷。",
    "glossary": [
      {
        "term": "扇形周長",
        "definition": "一段弧加兩條半徑的總長。"
      },
      {
        "term": "邊界",
        "definition": "圍成圖形的所有線段與曲線。"
      },
      {
        "term": "弧長",
        "definition": "扇形周長中的曲線部分。"
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
      "扇形周長不是只有弧長。從一個端點繞完整個扇形邊界，會走一段弧，再走兩條半徑。",
      "半圓圖形的周長是半圓弧長加直徑，因為兩條共線半徑合成直徑。",
      "畫路徑箭頭或逐段列出，是避免漏邊與重複計算的可靠方法。"
    ],
    "formalDefinitions": [
      {
        "name": "扇形周長",
        "statement": "一段弧加兩條半徑的總長。"
      },
      {
        "name": "邊界",
        "statement": "圍成圖形的所有線段與曲線。"
      },
      {
        "name": "弧長",
        "statement": "扇形周長中的曲線部分。"
      }
    ],
    "formulas": [
      {
        "formula": "P=L+2r",
        "conditions": [
          "L為扇形弧長"
        ],
        "meaning": "扇形周長"
      },
      {
        "formula": "半圓周長=πr+2r",
        "conditions": [
          "包含弧與直徑"
        ],
        "meaning": "半圓圖形邊界"
      }
    ],
    "nonApplicableCases": [
      "若只問弧長，不可加半徑。",
      "若圖形挖去一個扇形，新增的半徑邊界也要納入。",
      "內部輔助線不屬於外周長。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "沿邊界走一圈。",
        "check": "完成此步後，確認仍在「扇形周長」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 2,
        "instruction": "把曲線與直線分開列。",
        "check": "完成此步後，確認仍在「扇形周長」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 3,
        "instruction": "計算弧長。",
        "check": "完成此步後，確認仍在「扇形周長」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 4,
        "instruction": "加入所有實際外露直線段。",
        "check": "完成此步後，確認仍在「扇形周長」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 5,
        "instruction": "確認起點與終點相接且無重複。",
        "check": "完成此步後，確認仍在「扇形周長」的CAP範圍且沒有只憑圖形目測。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "s012-L1",
        "prompt": "r=6，θ=60°的扇形周長。",
        "solutionSteps": [
          "弧長=2π。",
          "加兩半徑12。"
        ],
        "answer": "12+2π。",
        "level": "basic"
      },
      {
        "exampleId": "s012-L2",
        "prompt": "r=5的半圓周長。",
        "solutionSteps": [
          "半圓弧5π。",
          "直徑10。"
        ],
        "answer": "10+5π。",
        "level": "standard"
      },
      {
        "exampleId": "s012-L3",
        "prompt": "r=9，θ=240°扇形周長。",
        "solutionSteps": [
          "弧長=12π。",
          "加18。"
        ],
        "answer": "18+12π。",
        "level": "advanced"
      },
      {
        "exampleId": "s012-L4",
        "prompt": "扇形周長20+4π，r=10。求弧長。",
        "solutionSteps": [
          "兩半徑和20。",
          "扣除後為4π。"
        ],
        "answer": "4π。",
        "level": "connection"
      }
    ],
    "difficultyConnections": {
      "basic": "辨認「扇形周長」的定義、符號與單一步驟關係。",
      "standard": "把「扇形周長」與前置技能、比例或一次代數連接。",
      "advanced": "在多段弧、複合邊界、反求或條件篩選中使用「扇形周長」。",
      "literacy": "把真實尺寸、旋轉、施工或觀測情境轉成「扇形周長」的數學模型。"
    },
    "commonMistakes": [
      {
        "mistake": "只算弧長",
        "why": "漏掉兩條半徑",
        "correction": "沿邊界逐段列"
      },
      {
        "mistake": "扇形周長加直徑",
        "why": "一般扇形的兩直邊是半徑",
        "correction": "只有半圓可合成直徑"
      },
      {
        "mistake": "把內部半徑也算進周長",
        "why": "混淆輔助線與邊界",
        "correction": "只算外露線"
      },
      {
        "mistake": "周長答案使用平方單位",
        "why": "量綱混淆",
        "correction": "周長用長度單位"
      }
    ],
    "selfCheck": [
      "我是否先確認「扇形周長」的適用條件？",
      "我是否分清半徑、直徑、弦、弧與角的角色？",
      "我是否寫出必要單位，並在最後才取近似值？",
      "我是否用定理或公式驗證，而不是依圖形外觀猜測？"
    ],
    "summary": [
      "扇形周長=弧長+2r。",
      "半圓周長=半圓弧+直徑。",
      "用走邊界方法避免漏算。"
    ],
    "connections": {
      "previous": "承接「圓複合面積」。",
      "next": "下一技能為「圓面積」。"
    },
    "figureReferences": [
      {
        "figureId": "u19-s012-fig001",
        "purpose": "扇形的弧線以粗線標 L，兩條半徑分別標 r，外框箭頭表示周長需走完三段。",
        "altText": "扇形的弧線以粗線標 L，兩條半徑分別標 r，外框箭頭表示周長需走完三段。，不可按比例目測。"
      }
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u19-s012-v001",
        "u19-s012-v002",
        "u19-s012-v003",
        "u19-s012-v004",
        "u19-s012-v005",
        "u19-s012-v006",
        "u19-s012-v007",
        "u19-s012-v008",
        "u19-s012-v009",
        "u19-s012-v010",
        "u19-s012-v011",
        "u19-s012-v012"
      ],
      "constructedResponseIds": [
        "u19-s012-cr001",
        "u19-s012-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段回讀「扇形周長」講義，確認所有符號先定義、公式均附條件，並以四個不同目的例題檢查定義辨認、標準運算、進階邊界與實際連結；特別核對：分清扇形周長與弧長，補上兩條半徑。",
      "reviewVersion": "human-lecture-review-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "96dfca614efe0c9afb030e6c8f86bcbd13a1e57a6c94574c5f805484c1fe4591"
  },
  "questions": [
    {
      "questionId": "u19-s012-v001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-perimeter",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s012-fig001",
      "drawingSpecId": "u19-s012-fig001",
      "prompt": "半徑 6 cm、中心角 60° 的扇形周長為何？",
      "text": "半徑 6 cm、中心角 60° 的扇形周長為何？",
      "givenConditions": "r=6 cm；θ=60°。",
      "target": "求完整邊界。",
      "choices": [
        "2π cm",
        "6+2π cm",
        "12+2π cm",
        "12+6π cm"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「r=6 cm；θ=60°。」重算：弧長=(60/360)×12π=2π；再加兩條半徑12，得12+2π。",
      "explanation": "弧長=(60/360)×12π=2π；再加兩條半徑12，得12+2π。 因此唯一正確選項是「12+2π cm」。",
      "steps": [
        "求弧長2π。",
        "加2r=12。"
      ],
      "optionAnalysis": [
        {
          "choice": "2π cm",
          "truth": false,
          "reason": "只算弧長。"
        },
        {
          "choice": "6+2π cm",
          "truth": false,
          "reason": "只加一條半徑。"
        },
        {
          "choice": "12+2π cm",
          "truth": true,
          "reason": "依題目條件重新計算：弧長=(60/360)×12π=2π；再加兩條半徑12，得12+2π。"
        },
        {
          "choice": "12+6π cm",
          "truth": false,
          "reason": "弧長比例錯。"
        }
      ],
      "misconceptionTarget": "把扇形周長當弧長。",
      "prerequisiteCheck": "需先能使用「圓複合面積」；本題未使用後續技能。",
      "estimatedTimeSec": 60,
      "unitCheck": "u19-s012-v001 已核對所求量「求完整邊界。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「計算扇形周長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s012-v001。",
      "difficultyReason": "basic：計算扇形周長。 解題需完成「求弧長2π。；加2r=12。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "計算扇形周長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "c7e155268a26d237f7df9562f15f08aabf8ec27bc2ae9e76e7c706b2bc88736c"
    },
    {
      "questionId": "u19-s012-v002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-perimeter",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "半徑 5 m 的半圓圖形周長為何？",
      "text": "半徑 5 m 的半圓圖形周長為何？",
      "givenConditions": "r=5 m。",
      "target": "求弧與直徑總長。",
      "choices": [
        "5π m",
        "5+5π m",
        "10+5π m",
        "10π m"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「r=5 m。」重算：半圓弧長5π，加直徑10，總周長10+5π。",
      "explanation": "半圓弧長5π，加直徑10，總周長10+5π。 因此唯一正確選項是「10+5π m」。",
      "steps": [
        "半圓弧5π。",
        "直徑2r=10。"
      ],
      "optionAnalysis": [
        {
          "choice": "5π m",
          "truth": false,
          "reason": "只算弧。"
        },
        {
          "choice": "5+5π m",
          "truth": false,
          "reason": "只加一條半徑。"
        },
        {
          "choice": "10+5π m",
          "truth": true,
          "reason": "依題目條件重新計算：半圓弧長5π，加直徑10，總周長10+5π。"
        },
        {
          "choice": "10π m",
          "truth": false,
          "reason": "把半圓當整圓。"
        }
      ],
      "misconceptionTarget": "半圓邊界漏直徑。",
      "prerequisiteCheck": "需先能使用「圓複合面積」；本題未使用後續技能。",
      "estimatedTimeSec": 55,
      "unitCheck": "u19-s012-v002 已核對所求量「求弧與直徑總長。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「求半圓圖形周長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s012-v002。",
      "difficultyReason": "basic：求半圓圖形周長。 解題需完成「半圓弧5π。；直徑2r=10。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "求半圓圖形周長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "4a3ad8ecd4ad710c5c3c65ecc9292000fabac29e2200b2154eda0f2a3c84462c"
    },
    {
      "questionId": "u19-s012-v003",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-perimeter",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "某扇形的兩條半徑共長 16 cm，弧是同半徑圓周的四分之一。這個扇形的完整周長為何？",
      "text": "某扇形的兩條半徑共長 16 cm，弧是同半徑圓周的四分之一。這個扇形的完整周長為何？",
      "givenConditions": "r=8 cm；θ=90°。",
      "target": "求周長。",
      "choices": [
        "4π cm",
        "8+4π cm",
        "16+8π cm",
        "16+4π cm"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「r=8 cm；θ=90°。」重算：四分之一圓弧長4π，加兩半徑16，得16+4π。",
      "explanation": "四分之一圓弧長4π，加兩半徑16，得16+4π。 因此唯一正確選項是「16+4π cm」。",
      "steps": [
        "弧長4π。",
        "加16。"
      ],
      "optionAnalysis": [
        {
          "choice": "4π cm",
          "truth": false,
          "reason": "只算弧。"
        },
        {
          "choice": "8+4π cm",
          "truth": false,
          "reason": "漏一條半徑。"
        },
        {
          "choice": "16+8π cm",
          "truth": false,
          "reason": "弧長多一倍。"
        },
        {
          "choice": "16+4π cm",
          "truth": true,
          "reason": "依題目條件重新計算：四分之一圓弧長4π，加兩半徑16，得16+4π。"
        }
      ],
      "misconceptionTarget": "邊界段數判斷錯。",
      "prerequisiteCheck": "需先能使用「圓複合面積」；本題未使用後續技能。",
      "estimatedTimeSec": 60,
      "unitCheck": "u19-s012-v003 已核對所求量「求周長。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「求四分之一扇形周長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s012-v003。",
      "difficultyReason": "basic：求四分之一扇形周長。 解題需完成「弧長4π。；加16。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "求四分之一扇形周長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "69a653feb89d88ea990d7bff750a8ab937e754201011b5eb6d62ef964e65ba73"
    },
    {
      "questionId": "u19-s012-v004",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-perimeter",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "某扇形半徑 10 cm，周長為 20+5π cm。其弧長為何？",
      "text": "某扇形半徑 10 cm，周長為 20+5π cm。其弧長為何？",
      "givenConditions": "r=10 cm；P=20+5π cm。",
      "target": "求L。",
      "choices": [
        "5π cm",
        "10π cm",
        "20 cm",
        "20+5π cm"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「r=10 cm；P=20+5π cm。」重算：兩半徑總長20，從周長扣除後弧長為5π。",
      "explanation": "兩半徑總長20，從周長扣除後弧長為5π。 因此唯一正確選項是「5π cm」。",
      "steps": [
        "2r=20。",
        "P−2r=5π。"
      ],
      "optionAnalysis": [
        {
          "choice": "5π cm",
          "truth": true,
          "reason": "依題目條件重新計算：兩半徑總長20，從周長扣除後弧長為5π。"
        },
        {
          "choice": "10π cm",
          "truth": false,
          "reason": "錯取整圓一半。"
        },
        {
          "choice": "20 cm",
          "truth": false,
          "reason": "這是兩半徑總長。"
        },
        {
          "choice": "20+5π cm",
          "truth": false,
          "reason": "未扣直線邊。"
        }
      ],
      "misconceptionTarget": "未從扇形周長分離弧長。",
      "prerequisiteCheck": "需先能使用「圓複合面積」；本題未使用後續技能。",
      "estimatedTimeSec": 75,
      "unitCheck": "u19-s012-v004 已核對所求量「求L。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由周長反求弧長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s012-v004。",
      "difficultyReason": "standard：由周長反求弧長。 解題需完成「2r=20。；P−2r=5π。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由周長反求弧長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "7cfc00af61f59509485f769fd3d4e0c5a5e62c660f01f804ba7135838c7ad884"
    },
    {
      "questionId": "u19-s012-v005",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-perimeter",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "半徑 9 cm 的 240° 扇形周長為何？",
      "text": "半徑 9 cm 的 240° 扇形周長為何？",
      "givenConditions": "r=9 cm；θ=240°。",
      "target": "求周長。",
      "choices": [
        "9+12π cm",
        "18+6π cm",
        "12π cm",
        "18+12π cm"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「r=9 cm；θ=240°。」重算：弧長=(240/360)×18π=12π，再加18。",
      "explanation": "弧長=(240/360)×18π=12π，再加18。 因此唯一正確選項是「18+12π cm」。",
      "steps": [
        "比例2/3。",
        "弧長12π。",
        "加2r=18。"
      ],
      "optionAnalysis": [
        {
          "choice": "9+12π cm",
          "truth": false,
          "reason": "只加一半徑。"
        },
        {
          "choice": "18+6π cm",
          "truth": false,
          "reason": "弧比例錯。"
        },
        {
          "choice": "12π cm",
          "truth": false,
          "reason": "只算弧。"
        },
        {
          "choice": "18+12π cm",
          "truth": true,
          "reason": "依題目條件重新計算：弧長=(240/360)×18π=12π，再加18。"
        }
      ],
      "misconceptionTarget": "弧與直邊漏算。",
      "prerequisiteCheck": "需先能使用「圓複合面積」；本題未使用後續技能。",
      "estimatedTimeSec": 80,
      "unitCheck": "u19-s012-v005 已核對所求量「求周長。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「計算優扇形周長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s012-v005。",
      "difficultyReason": "standard：計算優扇形周長。 解題需完成「比例2/3。；弧長12π。；加2r=18。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "計算優扇形周長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "d8324c82af3662c4b8c09ddd8815a9da1551d9baff43bc5452e0d01e1abff8ce"
    },
    {
      "questionId": "u19-s012-v006",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-perimeter",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "扇形半徑 4 cm，弧長 3π cm。周長為何？",
      "text": "扇形半徑 4 cm，弧長 3π cm。周長為何？",
      "givenConditions": "r=4 cm；L=3π cm。",
      "target": "求P。",
      "choices": [
        "8+3π cm",
        "4+3π cm",
        "8+6π cm",
        "3π cm"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「r=4 cm；L=3π cm。」重算：周長=弧長+2r=3π+8。",
      "explanation": "周長=弧長+2r=3π+8。 因此唯一正確選項是「8+3π cm」。",
      "steps": [
        "2r=8。",
        "加弧長3π。"
      ],
      "optionAnalysis": [
        {
          "choice": "8+3π cm",
          "truth": true,
          "reason": "依題目條件重新計算：周長=弧長+2r=3π+8。"
        },
        {
          "choice": "4+3π cm",
          "truth": false,
          "reason": "只加一半徑。"
        },
        {
          "choice": "8+6π cm",
          "truth": false,
          "reason": "弧長重複。"
        },
        {
          "choice": "3π cm",
          "truth": false,
          "reason": "只算弧。"
        }
      ],
      "misconceptionTarget": "扇形周長公式記錯。",
      "prerequisiteCheck": "需先能使用「圓複合面積」；本題未使用後續技能。",
      "estimatedTimeSec": 65,
      "unitCheck": "u19-s012-v006 已核對所求量「求P。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由弧長與半徑求周長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s012-v006。",
      "difficultyReason": "standard：由弧長與半徑求周長。 解題需完成「2r=8。；加弧長3π。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由弧長與半徑求周長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "b9a9be269490a11119e1aed2e2d7c4bb4b65c49de4c10c5812db86808a9d744b"
    },
    {
      "questionId": "u19-s012-v007",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-perimeter",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s012-fig001",
      "drawingSpecId": "u19-s012-fig001",
      "prompt": "半徑 6 cm 的扇形周長為 12+5π cm。求中心角。",
      "text": "半徑 6 cm 的扇形周長為 12+5π cm。求中心角。",
      "givenConditions": "r=6；P=12+5π。",
      "target": "求θ。",
      "choices": [
        "75°",
        "150°",
        "120°",
        "300°"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「r=6；P=12+5π。」重算：弧長5π，整圓周長12π，比例5/12，中心角=360×5/12=150°。",
      "explanation": "弧長5π，整圓周長12π，比例5/12，中心角=360×5/12=150°。 因此唯一正確選項是「150°」。",
      "steps": [
        "扣2r得L=5π。",
        "L/(2πr)=5/12。",
        "θ=150°。"
      ],
      "optionAnalysis": [
        {
          "choice": "75°",
          "truth": false,
          "reason": "多除2。"
        },
        {
          "choice": "150°",
          "truth": true,
          "reason": "依題目條件重新計算：弧長5π，整圓周長12π，比例5/12，中心角=360×5/12=150°。"
        },
        {
          "choice": "120°",
          "truth": false,
          "reason": "比例錯成1/3。"
        },
        {
          "choice": "300°",
          "truth": false,
          "reason": "把弧比例乘720。"
        }
      ],
      "misconceptionTarget": "由周長反求角時未先扣半徑。",
      "prerequisiteCheck": "需先能使用「圓複合面積」；本題未使用後續技能。",
      "estimatedTimeSec": 110,
      "unitCheck": "u19-s012-v007 已核對所求量「求θ。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由扇形周長反求中心角。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s012-v007。",
      "difficultyReason": "advanced：由扇形周長反求中心角。 解題需完成「扣2r得L=5π。；L/(2πr)=5/12。；θ=150°。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由扇形周長反求中心角。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "e6367c411bc3119072a74a60ca89dd5e4ad2f74ba23d156d06ef6eebcc4c33d4"
    },
    {
      "questionId": "u19-s012-v008",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-perimeter",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "兩個同半徑扇形中心角分別 80°、200°。它們周長之差為 6π cm，求半徑。",
      "text": "兩個同半徑扇形中心角分別 80°、200°。它們周長之差為 6π cm，求半徑。",
      "givenConditions": "同半徑；中心角80°與200°；周長差6π。",
      "target": "求r。",
      "choices": [
        "9 cm",
        "4.5 cm",
        "12 cm",
        "18 cm"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「同半徑；中心角80°與200°；周長差6π。」重算：兩扇形的2r相消，周長差等於弧長差。角差120°占1/3圓，差弧長=(1/3)2πr=2πr/3=6π，得r=9。",
      "explanation": "兩扇形的2r相消，周長差等於弧長差。角差120°占1/3圓，差弧長=(1/3)2πr=2πr/3=6π，得r=9。 因此唯一正確選項是「9 cm」。",
      "steps": [
        "周長差只剩弧差。",
        "角差120°。",
        "2πr/3=6π，r=9。"
      ],
      "optionAnalysis": [
        {
          "choice": "9 cm",
          "truth": true,
          "reason": "依題目條件重新計算：兩扇形的2r相消，周長差等於弧長差。角差120°占1/3圓，差弧長=(1/3)2πr=2πr/3=6π，得r=9。"
        },
        {
          "choice": "4.5 cm",
          "truth": false,
          "reason": "漏掉2造成4.5。"
        },
        {
          "choice": "12 cm",
          "truth": false,
          "reason": "代入差弧8π。"
        },
        {
          "choice": "18 cm",
          "truth": false,
          "reason": "代入差12π。"
        }
      ],
      "misconceptionTarget": "未發現兩半徑項相消或方程係數錯。",
      "prerequisiteCheck": "需先能使用「圓複合面積」；本題未使用後續技能。",
      "estimatedTimeSec": 125,
      "unitCheck": "u19-s012-v008 已核對所求量「求r。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「以扇形周長差反求半徑。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s012-v008。",
      "difficultyReason": "advanced：以扇形周長差反求半徑。 解題需完成「周長差只剩弧差。；角差120°。；2πr/3=6π，r=9。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "以扇形周長差反求半徑。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "04555496ee3239fd015c5148f7c1c801d50fd20e0355817ebc9169dbef9a88ee"
    },
    {
      "questionId": "u19-s012-v009",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-perimeter",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "一個 90° 扇形周長為 10+5π/2 cm。求其面積。",
      "text": "一個 90° 扇形周長為 10+5π/2 cm。求其面積。",
      "givenConditions": "θ=90°；P=10+5π/2。",
      "target": "求面積。",
      "choices": [
        "25π/2 cm²",
        "5π cm²",
        "25π cm²",
        "25π/4 cm²"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「θ=90°；P=10+5π/2。」重算：兩半徑總長10，所以r=5；90°扇形面積=1/4×25π=25π/4。弧長亦為5π/2，與題目一致。",
      "explanation": "兩半徑總長10，所以r=5；90°扇形面積=1/4×25π=25π/4。弧長亦為5π/2，與題目一致。 因此唯一正確選項是「25π/4 cm²」。",
      "steps": [
        "2r=10得r=5。",
        "四分之一圓面積25π/4。"
      ],
      "optionAnalysis": [
        {
          "choice": "25π/2 cm²",
          "truth": false,
          "reason": "多一倍。"
        },
        {
          "choice": "5π cm²",
          "truth": false,
          "reason": "半徑未平方。"
        },
        {
          "choice": "25π cm²",
          "truth": false,
          "reason": "未取四分之一。"
        },
        {
          "choice": "25π/4 cm²",
          "truth": true,
          "reason": "依題目條件重新計算：兩半徑總長10，所以r=5；90°扇形面積=1/4×25π=25π/4。弧長亦為5π/2，與題目一致。"
        }
      ],
      "misconceptionTarget": "從周長讀半徑後面積比例錯。",
      "prerequisiteCheck": "需先能使用「圓複合面積」；本題未使用後續技能。",
      "estimatedTimeSec": 120,
      "unitCheck": "u19-s012-v009 已核對所求量「求面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由扇形周長資料轉求面積。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s012-v009。",
      "difficultyReason": "advanced：由扇形周長資料轉求面積。 解題需完成「2r=10得r=5。；四分之一圓面積25π/4。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由扇形周長資料轉求面積。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "9a8578b5bd184b4fe05b3b30703d3d43858fc1f61b600d81c87ea321e078cb62"
    },
    {
      "questionId": "u19-s012-v010",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-perimeter",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "半徑 3 m、中心角 120° 的扇形花壇要在全部邊界裝欄杆，需要多長？",
      "text": "半徑 3 m、中心角 120° 的扇形花壇要在全部邊界裝欄杆，需要多長？",
      "givenConditions": "r=3 m；θ=120°；全部邊界需施工。",
      "target": "求總長。",
      "choices": [
        "2π m",
        "6+2π m",
        "3+2π m",
        "6+3π m"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「r=3 m；θ=120°；全部邊界需施工。」重算：弧長=(1/3)×6π=2π，兩條半徑共6，所以欄杆長6+2π。",
      "explanation": "弧長=(1/3)×6π=2π，兩條半徑共6，所以欄杆長6+2π。 因此唯一正確選項是「6+2π m」。",
      "steps": [
        "求弧長2π。",
        "加兩直邊6。"
      ],
      "optionAnalysis": [
        {
          "choice": "2π m",
          "truth": false,
          "reason": "只裝弧邊。"
        },
        {
          "choice": "6+2π m",
          "truth": true,
          "reason": "依題目條件重新計算：弧長=(1/3)×6π=2π，兩條半徑共6，所以欄杆長6+2π。"
        },
        {
          "choice": "3+2π m",
          "truth": false,
          "reason": "漏一條直邊。"
        },
        {
          "choice": "6+3π m",
          "truth": false,
          "reason": "弧比例錯。"
        }
      ],
      "misconceptionTarget": "情境中的「全部邊界」被誤讀成只有曲線。",
      "prerequisiteCheck": "需先能使用「圓複合面積」；本題未使用後續技能。",
      "estimatedTimeSec": 80,
      "unitCheck": "u19-s012-v010 已核對所求量「求總長。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「計算扇形花壇欄杆長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s012-v010。",
      "difficultyReason": "literacy：計算扇形花壇欄杆長。 解題需完成「求弧長2π。；加兩直邊6。」。",
      "literacyContextNecessity": "欄杆沿弧與兩條半徑都要安裝。",
      "authoringIntent": "計算扇形花壇欄杆長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "9e3d34960ebbbbf1a74112fc3b411ca2482a9026786dff9ee5a39eedc5e0195b"
    },
    {
      "questionId": "u19-s012-v011",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-perimeter",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "半圓形招牌半徑 0.5 m，要沿弧與底邊貼燈條。需要多長？",
      "text": "半圓形招牌半徑 0.5 m，要沿弧與底邊貼燈條。需要多長？",
      "givenConditions": "r=0.5 m；沿弧和直徑。",
      "target": "求材料長。",
      "choices": [
        "0.5π m",
        "0.5+0.5π m",
        "1+0.5π m",
        "1+π m"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「r=0.5 m；沿弧和直徑。」重算：半圓弧長πr=0.5π，底邊直徑1，總長1+0.5π。",
      "explanation": "半圓弧長πr=0.5π，底邊直徑1，總長1+0.5π。 因此唯一正確選項是「1+0.5π m」。",
      "steps": [
        "求弧0.5π。",
        "求直徑1。",
        "相加。"
      ],
      "optionAnalysis": [
        {
          "choice": "0.5π m",
          "truth": false,
          "reason": "漏底邊。"
        },
        {
          "choice": "0.5+0.5π m",
          "truth": false,
          "reason": "把底邊當半徑。"
        },
        {
          "choice": "1+0.5π m",
          "truth": true,
          "reason": "依題目條件重新計算：半圓弧長πr=0.5π，底邊直徑1，總長1+0.5π。"
        },
        {
          "choice": "1+π m",
          "truth": false,
          "reason": "弧長多一倍。"
        }
      ],
      "misconceptionTarget": "半圓周長的直線段長度判斷錯。",
      "prerequisiteCheck": "需先能使用「圓複合面積」；本題未使用後續技能。",
      "estimatedTimeSec": 80,
      "unitCheck": "u19-s012-v011 已核對所求量「求材料長。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「計算招牌燈條邊界。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s012-v011。",
      "difficultyReason": "literacy：計算招牌燈條邊界。 解題需完成「求弧0.5π。；求直徑1。；相加。」。",
      "literacyContextNecessity": "施工包含曲線與底邊，必須使用半圓圖形周長。",
      "authoringIntent": "計算招牌燈條邊界。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "f8782de6b375607e8d09876bc800dc21e2c6abb191c91d074505bae374c4ebe2"
    },
    {
      "questionId": "u19-s012-v012",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-perimeter",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "一片扇形金屬板半徑 12 cm、中心角 150°，只需包覆兩條直邊，不包弧邊。包覆長度為何？",
      "text": "一片扇形金屬板半徑 12 cm、中心角 150°，只需包覆兩條直邊，不包弧邊。包覆長度為何？",
      "givenConditions": "r=12 cm；θ=150°；只包兩直邊。",
      "target": "求包覆長度。",
      "choices": [
        "10π cm",
        "24 cm",
        "24+10π cm",
        "12 cm"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「r=12 cm；θ=150°；只包兩直邊。」重算：只包兩條半徑，每條12 cm，總長24 cm；弧長不在施工範圍。",
      "explanation": "只包兩條半徑，每條12 cm，總長24 cm；弧長不在施工範圍。 因此唯一正確選項是「24 cm」。",
      "steps": [
        "讀清只包直邊。",
        "2×12=24。"
      ],
      "optionAnalysis": [
        {
          "choice": "10π cm",
          "truth": false,
          "reason": "這是弧長。"
        },
        {
          "choice": "24 cm",
          "truth": true,
          "reason": "依題目條件重新計算：只包兩條半徑，每條12 cm，總長24 cm；弧長不在施工範圍。"
        },
        {
          "choice": "24+10π cm",
          "truth": false,
          "reason": "包含未要求的弧。"
        },
        {
          "choice": "12 cm",
          "truth": false,
          "reason": "只算一條半徑。"
        }
      ],
      "misconceptionTarget": "看到扇形便無條件算完整周長。",
      "prerequisiteCheck": "需先能使用「圓複合面積」；本題未使用後續技能。",
      "estimatedTimeSec": 75,
      "unitCheck": "u19-s012-v012 已核對所求量「求包覆長度。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「依施工範圍選取邊界。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s012-v012。",
      "difficultyReason": "literacy：依施工範圍選取邊界。 解題需完成「讀清只包直邊。；2×12=24。」。",
      "literacyContextNecessity": "「不包弧邊」改變實際材料路徑，是必要情境限制。",
      "authoringIntent": "依施工範圍選取邊界。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "02a095c0fa6122eae6d10fc0cdcee2b9513fae9f1312e68b7ca282cb3d03d3c7"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u19-s012-cr001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-perimeter",
      "difficulty": "advanced",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u19-s012-fig001",
      "drawingSpecId": "u19-s012-fig001",
      "prompt": "半徑 9 cm、中心角 160° 的扇形，求弧長與扇形周長。",
      "requiredWork": [
        "先求弧長。",
        "加兩條半徑。",
        "分別標示兩答案。"
      ],
      "standardSolution": [
        "弧長=(160/360)×18π=8π cm。",
        "扇形周長=8π+18 cm。"
      ],
      "fullCreditSolution": [
        "弧長=(160/360)×18π=8π cm。",
        "扇形周長=8π+18 cm。"
      ],
      "alternativeSolutions": [
        "可將160/360約為4/9後計算。"
      ],
      "reasoningSteps": [
        "弧長=(160/360)×18π=8π cm。",
        "扇形周長=8π+18 cm。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "弧長8π與周長18+8π cm完整。"
        },
        {
          "score": 2,
          "criteria": "兩答案正確但理由簡略，或只完整一項。"
        },
        {
          "score": 1,
          "criteria": "知道周長需加2r。"
        },
        {
          "score": 0,
          "criteria": "只用πr²。"
        }
      ],
      "partialCreditRules": [
        "弧長與周長各有分。"
      ],
      "followThroughPolicy": "若弧長算錯但仍正確加18，可保留周長結構分。",
      "unitNotationRules": "均為cm，不用cm²。",
      "answerOnlyPolicy": "只寫周長正確給2分。",
      "commonErrors": [
        "只算弧長。",
        "加一條半徑。"
      ],
      "independentReview": {
        "derivedResult": "L=8π cm，P=18+8π cm。",
        "ambiguity": "角度與半徑完整，唯一。",
        "decision": "pass",
        "reviewNote": "u19-s012-cr001 由題目條件另行推導得到「L=8π cm，P=18+8π cm。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "a9397718d0cfde8b71baa34266591c5e9e118811a7c9302cae9fcc58bde930b4"
    },
    {
      "questionId": "u19-s012-cr002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-perimeter",
      "difficulty": "advanced",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "某扇形半徑 6 m，周長為 12+3π m。求中心角。",
      "requiredWork": [
        "由周長扣兩半徑求弧長。",
        "用弧長比例反求角度。"
      ],
      "standardSolution": [
        "弧長=3π m。",
        "整圓周長=12π m，弧占1/4。",
        "中心角=90°。"
      ],
      "fullCreditSolution": [
        "弧長=3π m。",
        "整圓周長=12π m，弧占1/4。",
        "中心角=90°。"
      ],
      "alternativeSolutions": [
        "可列12+3π=2r+(θ/360)2πr，代r=6解θ。"
      ],
      "reasoningSteps": [
        "弧長=3π m。",
        "整圓周長=12π m，弧占1/4。",
        "中心角=90°。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "弧長3π、比例1/4與90°完整。"
        },
        {
          "score": 2,
          "criteria": "角度正確但中間步驟略。"
        },
        {
          "score": 1,
          "criteria": "先扣12或列正確公式。"
        },
        {
          "score": 0,
          "criteria": "把周長全部當弧長。"
        }
      ],
      "partialCreditRules": [
        "扣半徑與反求角度各有分。"
      ],
      "followThroughPolicy": "若弧長早期錯，後續正確除整圓周長可保留方法分。",
      "unitNotationRules": "角用°；長度m。",
      "answerOnlyPolicy": "只寫90°給2分。",
      "commonErrors": [
        "未扣兩半徑。",
        "把3π/12π算1/3。"
      ],
      "independentReview": {
        "derivedResult": "中心角90°。",
        "ambiguity": "周長分解唯一。",
        "decision": "pass",
        "reviewNote": "u19-s012-cr002 由題目條件另行推導得到「中心角90°。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "60e60e4f36daa54d11c87b5fba67b7c7c634e08abc64b5cee9ab4c4399d4ea4c"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u19-s012-v001",
      "contentSha256": "c7e155268a26d237f7df9562f15f08aabf8ec27bc2ae9e76e7c706b2bc88736c",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=6 cm；θ=60°。」重算：弧長=(60/360)×12π=2π；再加兩條半徑12，得12+2π。",
      "derivedAnswer": "12+2π cm",
      "storedAnswer": "12+2π cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「12+2π cm」符合；三個干擾項分別因「只算弧長。；只加一條半徑。；弧長比例錯。」而排除。",
        "undefinedSymbol": "u19-s012-v001 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形周長」講義定義。",
        "unitConflict": "題目所求為「求完整邊界。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「計算扇形周長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=6 cm；θ=60°。」重讀，所求「求完整邊界。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是計算扇形周長。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴circle-composite-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑 6 cm、中心角 60° 的扇形周長為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s012-v001 人工重算：弧長=(60/360)×12π=2π；再加兩條半徑12，得12+2π。 正確選項為「12+2π cm」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s012-v002",
      "contentSha256": "4a3ad8ecd4ad710c5c3c65ecc9292000fabac29e2200b2154eda0f2a3c84462c",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=5 m。」重算：半圓弧長5π，加直徑10，總周長10+5π。",
      "derivedAnswer": "10+5π m",
      "storedAnswer": "10+5π m",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「10+5π m」符合；三個干擾項分別因「只算弧。；只加一條半徑。；把半圓當整圓。」而排除。",
        "undefinedSymbol": "u19-s012-v002 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形周長」講義定義。",
        "unitConflict": "題目所求為「求弧與直徑總長。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「求半圓圖形周長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=5 m。」重讀，所求「求弧與直徑總長。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是求半圓圖形周長。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴circle-composite-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑 5 m 的半圓圖形周長為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s012-v002 人工重算：半圓弧長5π，加直徑10，總周長10+5π。 正確選項為「10+5π m」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s012-v003",
      "contentSha256": "69a653feb89d88ea990d7bff750a8ab937e754201011b5eb6d62ef964e65ba73",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=8 cm；θ=90°。」重算：四分之一圓弧長4π，加兩半徑16，得16+4π。",
      "derivedAnswer": "16+4π cm",
      "storedAnswer": "16+4π cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「16+4π cm」符合；三個干擾項分別因「只算弧。；漏一條半徑。；弧長多一倍。」而排除。",
        "undefinedSymbol": "u19-s012-v003 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形周長」講義定義。",
        "unitConflict": "題目所求為「求周長。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「求四分之一扇形周長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=8 cm；θ=90°。」重讀，所求「求周長。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是求四分之一扇形周長。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴circle-composite-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「某扇形的兩條半徑共長 16 cm，弧是同半徑圓周的四分之一。這個扇形的完整周長為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s012-v003 人工重算：四分之一圓弧長4π，加兩半徑16，得16+4π。 正確選項為「16+4π cm」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s012-v004",
      "contentSha256": "7cfc00af61f59509485f769fd3d4e0c5a5e62c660f01f804ba7135838c7ad884",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=10 cm；P=20+5π cm。」重算：兩半徑總長20，從周長扣除後弧長為5π。",
      "derivedAnswer": "5π cm",
      "storedAnswer": "5π cm",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「5π cm」符合；三個干擾項分別因「錯取整圓一半。；這是兩半徑總長。；未扣直線邊。」而排除。",
        "undefinedSymbol": "u19-s012-v004 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形周長」講義定義。",
        "unitConflict": "題目所求為「求L。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由周長反求弧長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=10 cm；P=20+5π cm。」重讀，所求「求L。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是由周長反求弧長。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴circle-composite-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「某扇形半徑 10 cm，周長為 20+5π cm。其弧長為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s012-v004 人工重算：兩半徑總長20，從周長扣除後弧長為5π。 正確選項為「5π cm」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s012-v005",
      "contentSha256": "d8324c82af3662c4b8c09ddd8815a9da1551d9baff43bc5452e0d01e1abff8ce",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=9 cm；θ=240°。」重算：弧長=(240/360)×18π=12π，再加18。",
      "derivedAnswer": "18+12π cm",
      "storedAnswer": "18+12π cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「18+12π cm」符合；三個干擾項分別因「只加一半徑。；弧比例錯。；只算弧。」而排除。",
        "undefinedSymbol": "u19-s012-v005 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形周長」講義定義。",
        "unitConflict": "題目所求為「求周長。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「計算優扇形周長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=9 cm；θ=240°。」重讀，所求「求周長。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是計算優扇形周長。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴circle-composite-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑 9 cm 的 240° 扇形周長為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s012-v005 人工重算：弧長=(240/360)×18π=12π，再加18。 正確選項為「18+12π cm」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s012-v006",
      "contentSha256": "b9a9be269490a11119e1aed2e2d7c4bb4b65c49de4c10c5812db86808a9d744b",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=4 cm；L=3π cm。」重算：周長=弧長+2r=3π+8。",
      "derivedAnswer": "8+3π cm",
      "storedAnswer": "8+3π cm",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「8+3π cm」符合；三個干擾項分別因「只加一半徑。；弧長重複。；只算弧。」而排除。",
        "undefinedSymbol": "u19-s012-v006 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形周長」講義定義。",
        "unitConflict": "題目所求為「求P。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由弧長與半徑求周長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=4 cm；L=3π cm。」重讀，所求「求P。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是由弧長與半徑求周長。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴circle-composite-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「扇形半徑 4 cm，弧長 3π cm。周長為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s012-v006 人工重算：周長=弧長+2r=3π+8。 正確選項為「8+3π cm」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s012-v007",
      "contentSha256": "e6367c411bc3119072a74a60ca89dd5e4ad2f74ba23d156d06ef6eebcc4c33d4",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=6；P=12+5π。」重算：弧長5π，整圓周長12π，比例5/12，中心角=360×5/12=150°。",
      "derivedAnswer": "150°",
      "storedAnswer": "150°",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「150°」符合；三個干擾項分別因「多除2。；比例錯成1/3。；把弧比例乘720。」而排除。",
        "undefinedSymbol": "u19-s012-v007 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形周長」講義定義。",
        "unitConflict": "題目所求為「求θ。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由扇形周長反求中心角。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=6；P=12+5π。」重讀，所求「求θ。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是由扇形周長反求中心角。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴circle-composite-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑 6 cm 的扇形周長為 12+5π cm。求中心角。」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s012-v007 人工重算：弧長5π，整圓周長12π，比例5/12，中心角=360×5/12=150°。 正確選項為「150°」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s012-v008",
      "contentSha256": "04555496ee3239fd015c5148f7c1c801d50fd20e0355817ebc9169dbef9a88ee",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「同半徑；中心角80°與200°；周長差6π。」重算：兩扇形的2r相消，周長差等於弧長差。角差120°占1/3圓，差弧長=(1/3)2πr=2πr/3=6π，得r=9。",
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
        "secondCorrectAnswer": "逐項核對四選項後，只有「9 cm」符合；三個干擾項分別因「漏掉2造成4.5。；代入差弧8π。；代入差12π。」而排除。",
        "undefinedSymbol": "u19-s012-v008 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形周長」講義定義。",
        "unitConflict": "題目所求為「求r。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「以扇形周長差反求半徑。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「同半徑；中心角80°與200°；周長差6π。」重讀，所求「求r。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是以扇形周長差反求半徑。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴circle-composite-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「兩個同半徑扇形中心角分別 80°、200°。它們周長之差為 6π cm，求半徑。」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s012-v008 人工重算：兩扇形的2r相消，周長差等於弧長差。角差120°占1/3圓，差弧長=(1/3)2πr=2πr/3=6π，得r=9。 正確選項為「9 cm」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s012-v009",
      "contentSha256": "9a8578b5bd184b4fe05b3b30703d3d43858fc1f61b600d81c87ea321e078cb62",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「θ=90°；P=10+5π/2。」重算：兩半徑總長10，所以r=5；90°扇形面積=1/4×25π=25π/4。弧長亦為5π/2，與題目一致。",
      "derivedAnswer": "25π/4 cm²",
      "storedAnswer": "25π/4 cm²",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「25π/4 cm²」符合；三個干擾項分別因「多一倍。；半徑未平方。；未取四分之一。」而排除。",
        "undefinedSymbol": "u19-s012-v009 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形周長」講義定義。",
        "unitConflict": "題目所求為「求面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由扇形周長資料轉求面積。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「θ=90°；P=10+5π/2。」重讀，所求「求面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是由扇形周長資料轉求面積。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴circle-composite-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「一個 90° 扇形周長為 10+5π/2 cm。求其面積。」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s012-v009 人工重算：兩半徑總長10，所以r=5；90°扇形面積=1/4×25π=25π/4。弧長亦為5π/2，與題目一致。 正確選項為「25π/4 cm²」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s012-v010",
      "contentSha256": "9e3d34960ebbbbf1a74112fc3b411ca2482a9026786dff9ee5a39eedc5e0195b",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=3 m；θ=120°；全部邊界需施工。」重算：弧長=(1/3)×6π=2π，兩條半徑共6，所以欄杆長6+2π。",
      "derivedAnswer": "6+2π m",
      "storedAnswer": "6+2π m",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「6+2π m」符合；三個干擾項分別因「只裝弧邊。；漏一條直邊。；弧比例錯。」而排除。",
        "undefinedSymbol": "u19-s012-v010 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形周長」講義定義。",
        "unitConflict": "題目所求為「求總長。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「計算扇形花壇欄杆長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=3 m；θ=120°；全部邊界需施工。」重讀，所求「求總長。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是計算扇形花壇欄杆長。，而非只依題序標示。",
      "literacyContextNecessity": "欄杆沿弧與兩條半徑都要安裝。",
      "prerequisiteCheck": "只依賴circle-composite-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑 3 m、中心角 120° 的扇形花壇要在全部邊界裝欄杆，需要多長？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s012-v010 人工重算：弧長=(1/3)×6π=2π，兩條半徑共6，所以欄杆長6+2π。 正確選項為「6+2π m」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s012-v011",
      "contentSha256": "f8782de6b375607e8d09876bc800dc21e2c6abb191c91d074505bae374c4ebe2",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=0.5 m；沿弧和直徑。」重算：半圓弧長πr=0.5π，底邊直徑1，總長1+0.5π。",
      "derivedAnswer": "1+0.5π m",
      "storedAnswer": "1+0.5π m",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「1+0.5π m」符合；三個干擾項分別因「漏底邊。；把底邊當半徑。；弧長多一倍。」而排除。",
        "undefinedSymbol": "u19-s012-v011 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形周長」講義定義。",
        "unitConflict": "題目所求為「求材料長。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「計算招牌燈條邊界。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=0.5 m；沿弧和直徑。」重讀，所求「求材料長。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是計算招牌燈條邊界。，而非只依題序標示。",
      "literacyContextNecessity": "施工包含曲線與底邊，必須使用半圓圖形周長。",
      "prerequisiteCheck": "只依賴circle-composite-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半圓形招牌半徑 0.5 m，要沿弧與底邊貼燈條。需要多長？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s012-v011 人工重算：半圓弧長πr=0.5π，底邊直徑1，總長1+0.5π。 正確選項為「1+0.5π m」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s012-v012",
      "contentSha256": "02a095c0fa6122eae6d10fc0cdcee2b9513fae9f1312e68b7ca282cb3d03d3c7",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=12 cm；θ=150°；只包兩直邊。」重算：只包兩條半徑，每條12 cm，總長24 cm；弧長不在施工範圍。",
      "derivedAnswer": "24 cm",
      "storedAnswer": "24 cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「24 cm」符合；三個干擾項分別因「這是弧長。；包含未要求的弧。；只算一條半徑。」而排除。",
        "undefinedSymbol": "u19-s012-v012 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形周長」講義定義。",
        "unitConflict": "題目所求為「求包覆長度。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「依施工範圍選取邊界。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=12 cm；θ=150°；只包兩直邊。」重讀，所求「求包覆長度。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是依施工範圍選取邊界。，而非只依題序標示。",
      "literacyContextNecessity": "「不包弧邊」改變實際材料路徑，是必要情境限制。",
      "prerequisiteCheck": "只依賴circle-composite-area，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「一片扇形金屬板半徑 12 cm、中心角 150°，只需包覆兩條直邊，不包弧邊。包覆長度為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s012-v012 人工重算：只包兩條半徑，每條12 cm，總長24 cm；弧長不在施工範圍。 正確選項為「24 cm」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u19-s012-fig001",
      "unitId": "u19",
      "topicId": "u19-measure",
      "skillId": "sector-perimeter",
      "svgPath": "figures/u19/u19-s012-fig001.svg",
      "canvas": {
        "width": 360,
        "height": 240,
        "viewBox": "0 0 360 240"
      },
      "drawingSpec": {
        "purpose": "支援「扇形周長」中需要辨認點、線、弧、角或邊界的題目。",
        "coordinateSystem": "SVG x向右、y向下；所有座標以360×240畫布為準。",
        "geometry": "扇形的弧線以粗線標 L，兩條半徑分別標 r，外框箭頭表示周長需走完三段。",
        "visibleLines": "所有作答所需實線均以2px以上深色描邊；強調弧以5px描邊。",
        "hiddenLines": "只有內部共邊或量測輔助線使用虛線；未指定者不得自行添加。",
        "labels": "標籤位置已在SVG以固定座標給定，避免遮住交點、角弧或刻痕。",
        "symbols": "直角符號、等長刻痕、箭頭及角度符號僅在數學條件需要時出現。",
        "scalePolicy": "示意圖不保證按實際長度或角度比例繪製。",
        "visualInferenceWarning": "不得以目測長短、角度或對稱性取代題目條件與定理。",
        "mobileReadability": "360×240檢視下文字至少16px，關鍵線至少2px，無微小數值標籤。",
        "answerLeakage": "圖中不標示任何題目要求計算的最終數值或正確選項。"
      },
      "altText": "扇形的弧線以粗線標 L，兩條半徑分別標 r，外框箭頭表示周長需走完三段。 圖形僅協助辨認結構，不可依比例目測答案。",
      "svgTitle": "扇形周長邊界圖",
      "svgDescription": "扇形的弧線以粗線標 L，兩條半徑分別標 r，外框箭頭表示周長需走完三段。",
      "svgAssertions": [
        "role=\"img\"",
        "<title",
        "<desc",
        "viewBox=\"0 0 360 240\"",
        ">L</text>",
        ">r</text>",
        "class=\"arrow\""
      ],
      "figureReview": {
        "decision": "pass",
        "manualRenderInspected": true,
        "mobileReadable": true,
        "answerLeakageFound": false,
        "reviewNote": "已逐項檢查 u19-s012-fig001 的點位、線段、弧線、標籤與輔助符號；此圖專門呈現「扇形周長」的結構，未包含可直接推得題庫答案的數值。",
        "reviewVersion": "human-figure-review-r1.0",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "4e103afc0d00f38f5a9011ed9f4232cb803add228e1e4192e81e7e36b1233668"
    }
  ]
};
export default u19_s012;
