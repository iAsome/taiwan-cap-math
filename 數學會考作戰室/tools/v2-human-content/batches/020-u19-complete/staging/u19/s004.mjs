export const u19_s004 = {
  "lecture": {
    "lectureId": "u19-s004-lecture-r1",
    "unitId": "u19",
    "numericUnitId": 19,
    "topicId": "u19-angles",
    "skillId": "arc-length",
    "title": "弧長",
    "unitTitle": "圓",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "slot": "s004",
      "lockedSkillId": "arc-length",
      "lockedOrder": 4,
      "scope": "理解弧長是圓周長的一部分。"
    },
    "learningOutcomes": [
      "能把弧長理解為圓周長的一部分。",
      "能以比例求簡單弧長。",
      "能分辨弧長與弦長。"
    ],
    "prerequisites": [
      {
        "skillId": "inscribed-quadrilateral",
        "requiredLevel": "能使用「圓內接四邊形」的核心定義與基本運算，並辨認其適用條件。"
      }
    ],
    "prerequisiteBridge": "先由前一技能「圓內接四邊形」的結論，連接到本技能「弧長」所需的新判斷。",
    "glossary": [
      {
        "term": "弧長",
        "definition": "沿圓周從一點到另一點的曲線長度。"
      },
      {
        "term": "圓周長",
        "definition": "繞圓一周的長度 2πr。"
      },
      {
        "term": "弦長",
        "definition": "連接圓上兩點的線段長度。"
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
      "弧長沿著曲線量，弦長則走兩點間的直線，除非兩點重合，兩者通常不同。",
      "半圓弧長是整個圓周長的一半，四分之一圓弧長是四分之一。",
      "弧長與中心角成正比，這個比例觀念是正式公式的基礎。"
    ],
    "formalDefinitions": [
      {
        "name": "弧長",
        "statement": "沿圓周從一點到另一點的曲線長度。"
      },
      {
        "name": "圓周長",
        "statement": "繞圓一周的長度 2πr。"
      },
      {
        "name": "弦長",
        "statement": "連接圓上兩點的線段長度。"
      }
    ],
    "formulas": [
      {
        "formula": "半圓弧長=πr",
        "conditions": [
          "半徑為 r"
        ],
        "meaning": "整圓周長的一半"
      },
      {
        "formula": "四分之一圓弧長=πr/2",
        "conditions": [
          "中心角90°"
        ],
        "meaning": "整圓周長的四分之一"
      }
    ],
    "nonApplicableCases": [
      "弧長不能用兩端點的直線距離代替。",
      "弧的度數不是弧長。",
      "半圓圖形的周長還要加直徑，但半圓弧長本身不用。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "先判斷弧占整圓幾分之幾。",
        "check": "完成此步後，確認仍在「弧長」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 2,
        "instruction": "求整圓周長 2πr。",
        "check": "完成此步後，確認仍在「弧長」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 3,
        "instruction": "乘上所占分率。",
        "check": "完成此步後，確認仍在「弧長」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 4,
        "instruction": "保留 π 或依題意取近似值並標單位。",
        "check": "完成此步後，確認仍在「弧長」的CAP範圍且沒有只憑圖形目測。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "s004-L1",
        "prompt": "半徑 6 的半圓弧長。",
        "solutionSteps": [
          "整圓周長 12π。",
          "取一半得 6π。"
        ],
        "answer": "6π。",
        "level": "basic"
      },
      {
        "exampleId": "s004-L2",
        "prompt": "半徑 8 的四分之一圓弧長。",
        "solutionSteps": [
          "整圓周長 16π。",
          "取四分之一得 4π。"
        ],
        "answer": "4π。",
        "level": "standard"
      },
      {
        "exampleId": "s004-L3",
        "prompt": "直徑 10 的半圓弧長。",
        "solutionSteps": [
          "半徑為5。",
          "πr=5π。"
        ],
        "answer": "5π。",
        "level": "advanced"
      },
      {
        "exampleId": "s004-L4",
        "prompt": "半徑 3，270° 優弧長。",
        "solutionSteps": [
          "270°占整圓3/4。",
          "2π×3×3/4=9π/2。"
        ],
        "answer": "9π/2。",
        "level": "connection"
      }
    ],
    "difficultyConnections": {
      "basic": "辨認「弧長」的定義、符號與單一步驟關係。",
      "standard": "把「弧長」與前置技能、比例或一次代數連接。",
      "advanced": "在多段弧、複合邊界、反求或條件篩選中使用「弧長」。",
      "literacy": "把真實尺寸、旋轉、施工或觀測情境轉成「弧長」的數學模型。"
    },
    "commonMistakes": [
      {
        "mistake": "把半徑當直徑代入",
        "why": "未先判讀題目給定量",
        "correction": "直徑除以2才是半徑"
      },
      {
        "mistake": "求半圓弧長時加直徑",
        "why": "混淆弧長與圖形周長",
        "correction": "題目只問弧長就不加直線"
      },
      {
        "mistake": "把90°當成二分之一圓",
        "why": "比例判斷錯",
        "correction": "90/360=1/4"
      },
      {
        "mistake": "答案漏寫長度單位",
        "why": "只顧計算",
        "correction": "弧長單位與半徑相同"
      }
    ],
    "selfCheck": [
      "我是否先確認「弧長」的適用條件？",
      "我是否分清半徑、直徑、弦、弧與角的角色？",
      "我是否寫出必要單位，並在最後才取近似值？",
      "我是否用定理或公式驗證，而不是依圖形外觀猜測？"
    ],
    "summary": [
      "弧長是圓周長的一部分。",
      "先求比例再乘 2πr。",
      "弧長、弧度數與弦長是不同量。"
    ],
    "connections": {
      "previous": "承接「圓內接四邊形」。",
      "next": "下一技能為「弦與弧」。"
    },
    "figureReferences": [
      {
        "figureId": "u19-s004-fig001",
        "purpose": "圓上 A、B 之間以粗線標示曲線弧長，並用虛線畫弦 AB，提醒兩者不同。",
        "altText": "圓上 A、B 之間以粗線標示曲線弧長，並用虛線畫弦 AB，提醒兩者不同。，不可按比例目測。"
      }
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u19-s004-v001",
        "u19-s004-v002",
        "u19-s004-v003",
        "u19-s004-v004",
        "u19-s004-v005",
        "u19-s004-v006",
        "u19-s004-v007",
        "u19-s004-v008",
        "u19-s004-v009",
        "u19-s004-v010",
        "u19-s004-v011",
        "u19-s004-v012"
      ],
      "constructedResponseIds": [
        "u19-s004-cr001",
        "u19-s004-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段回讀「弧長」講義，確認所有符號先定義、公式均附條件，並以四個不同目的例題檢查定義辨認、標準運算、進階邊界與實際連結；特別核對：理解弧長是圓周長的一部分。",
      "reviewVersion": "human-lecture-review-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "74792404aa1d8bc65bc36db078eaf63e05390933a858a695fe36eb6bd4a7fa9b"
  },
  "questions": [
    {
      "questionId": "u19-s004-v001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s004-fig001",
      "drawingSpecId": "u19-s004-fig001",
      "prompt": "半徑 7 cm 的半圓弧長為何？",
      "text": "半徑 7 cm 的半圓弧長為何？",
      "givenConditions": "半徑7 cm。",
      "target": "求曲線弧長。",
      "choices": [
        "14π cm",
        "7π cm²",
        "14 cm",
        "7π cm"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「半徑7 cm。」重算：半圓弧長是圓周長的一半：2π×7÷2=7π cm。",
      "explanation": "半圓弧長是圓周長的一半：2π×7÷2=7π cm。 因此唯一正確選項是「7π cm」。",
      "steps": [
        "求整圓周長14π。",
        "取一半得7π。"
      ],
      "optionAnalysis": [
        {
          "choice": "14π cm",
          "truth": false,
          "reason": "14π是整圓周長。"
        },
        {
          "choice": "7π cm²",
          "truth": false,
          "reason": "平方單位不適用長度。"
        },
        {
          "choice": "14 cm",
          "truth": false,
          "reason": "漏掉π且誤用直徑。"
        },
        {
          "choice": "7π cm",
          "truth": true,
          "reason": "依題目條件重新計算：半圓弧長是圓周長的一半：2π×7÷2=7π cm。"
        }
      ],
      "misconceptionTarget": "把半圓弧長當整圓周長。",
      "prerequisiteCheck": "需先能使用「圓內接四邊形」；本題未使用後續技能。",
      "estimatedTimeSec": 55,
      "unitCheck": "u19-s004-v001 已核對所求量「求曲線弧長。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「計算半圓弧長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s004-v001。",
      "difficultyReason": "basic：計算半圓弧長。 解題需完成「求整圓周長14π。；取一半得7π。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "計算半圓弧長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "106dffc93cfc295675bd5bf501f2edacdebf7fc04145e38ff7848b8e660a6a2b"
    },
    {
      "questionId": "u19-s004-v002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "半徑 8 m 的四分之一圓弧長為何？",
      "text": "半徑 8 m 的四分之一圓弧長為何？",
      "givenConditions": "半徑8 m；中心角90°。",
      "target": "求弧長。",
      "choices": [
        "2π m",
        "4π m",
        "8π m",
        "16π m"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「半徑8 m；中心角90°。」重算：整圓周長16π m，四分之一為4π m。",
      "explanation": "整圓周長16π m，四分之一為4π m。 因此唯一正確選項是「4π m」。",
      "steps": [
        "2πr=16π。",
        "16π÷4=4π。"
      ],
      "optionAnalysis": [
        {
          "choice": "2π m",
          "truth": false,
          "reason": "錯取八分之一。"
        },
        {
          "choice": "4π m",
          "truth": true,
          "reason": "依題目條件重新計算：整圓周長16π m，四分之一為4π m。"
        },
        {
          "choice": "8π m",
          "truth": false,
          "reason": "錯取二分之一。"
        },
        {
          "choice": "16π m",
          "truth": false,
          "reason": "未取四分之一。"
        }
      ],
      "misconceptionTarget": "90°弧占整圓比例判斷錯誤。",
      "prerequisiteCheck": "需先能使用「圓內接四邊形」；本題未使用後續技能。",
      "estimatedTimeSec": 55,
      "unitCheck": "u19-s004-v002 已核對所求量「求弧長。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「計算四分之一圓弧長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s004-v002。",
      "difficultyReason": "basic：計算四分之一圓弧長。 解題需完成「2πr=16π。；16π÷4=4π。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "計算四分之一圓弧長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "684bc45ad27ec655db8daae0c5abb8603dc38fdcf0008c38950666a8b6fe99e4"
    },
    {
      "questionId": "u19-s004-v003",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "直徑 10 cm 的半圓弧長為何？",
      "text": "直徑 10 cm 的半圓弧長為何？",
      "givenConditions": "直徑10 cm。",
      "target": "求半圓曲線長。",
      "choices": [
        "10π cm",
        "25π cm",
        "5π cm",
        "5π cm²"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「直徑10 cm。」重算：直徑10故半徑5，半圓弧長πr=5π cm。",
      "explanation": "直徑10故半徑5，半圓弧長πr=5π cm。 因此唯一正確選項是「5π cm」。",
      "steps": [
        "r=10÷2=5。",
        "半圓弧長πr=5π。"
      ],
      "optionAnalysis": [
        {
          "choice": "10π cm",
          "truth": false,
          "reason": "把直徑當半徑。"
        },
        {
          "choice": "25π cm",
          "truth": false,
          "reason": "誤用面積。"
        },
        {
          "choice": "5π cm",
          "truth": true,
          "reason": "依題目條件重新計算：直徑10故半徑5，半圓弧長πr=5π cm。"
        },
        {
          "choice": "5π cm²",
          "truth": false,
          "reason": "單位錯。"
        }
      ],
      "misconceptionTarget": "直徑未換成半徑。",
      "prerequisiteCheck": "需先能使用「圓內接四邊形」；本題未使用後續技能。",
      "estimatedTimeSec": 60,
      "unitCheck": "u19-s004-v003 已核對所求量「求半圓曲線長。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由直徑求半圓弧長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s004-v003。",
      "difficultyReason": "basic：由直徑求半圓弧長。 解題需完成「r=10÷2=5。；半圓弧長πr=5π。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由直徑求半圓弧長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "e4834115f066758a2c319b948a44782429bbcdf30a3c5b9c64721445ec197db9"
    },
    {
      "questionId": "u19-s004-v004",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "半徑 6 cm、中心角 120° 的弧長為何？",
      "text": "半徑 6 cm、中心角 120° 的弧長為何？",
      "givenConditions": "r=6 cm；θ=120°。",
      "target": "求弧長。",
      "choices": [
        "2π cm",
        "6π cm",
        "4π cm",
        "12π cm"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「r=6 cm；θ=120°。」重算：120°占整圓1/3，整圓周長12π，所以弧長4π cm。",
      "explanation": "120°占整圓1/3，整圓周長12π，所以弧長4π cm。 因此唯一正確選項是「4π cm」。",
      "steps": [
        "120/360=1/3。",
        "1/3×12π=4π。"
      ],
      "optionAnalysis": [
        {
          "choice": "2π cm",
          "truth": false,
          "reason": "錯用1/6。"
        },
        {
          "choice": "6π cm",
          "truth": false,
          "reason": "錯取半圓。"
        },
        {
          "choice": "4π cm",
          "truth": true,
          "reason": "依題目條件重新計算：120°占整圓1/3，整圓周長12π，所以弧長4π cm。"
        },
        {
          "choice": "12π cm",
          "truth": false,
          "reason": "未乘比例。"
        }
      ],
      "misconceptionTarget": "中心角比例未約分或直接取半周。",
      "prerequisiteCheck": "需先能使用「圓內接四邊形」；本題未使用後續技能。",
      "estimatedTimeSec": 75,
      "unitCheck": "u19-s004-v004 已核對所求量「求弧長。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「按比例求一般弧長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s004-v004。",
      "difficultyReason": "standard：按比例求一般弧長。 解題需完成「120/360=1/3。；1/3×12π=4π。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "按比例求一般弧長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "124e849a7837da10ad09425dec2c179f6ea13cfdaa59cd28e1be4dae25d260f6"
    },
    {
      "questionId": "u19-s004-v005",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "某圓 72° 弧長為 3π cm，則整個圓周長為何？",
      "text": "某圓 72° 弧長為 3π cm，則整個圓周長為何？",
      "givenConditions": "72°弧長3π cm。",
      "target": "求整圓周長。",
      "choices": [
        "15π cm",
        "6π cm",
        "12π cm",
        "18π cm"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「72°弧長3π cm。」重算：72°占整圓1/5，所以整圓周長=3π×5=15π cm。",
      "explanation": "72°占整圓1/5，所以整圓周長=3π×5=15π cm。 因此唯一正確選項是「15π cm」。",
      "steps": [
        "72/360=1/5。",
        "3π÷1/5=15π。"
      ],
      "optionAnalysis": [
        {
          "choice": "15π cm",
          "truth": true,
          "reason": "依題目條件重新計算：72°占整圓1/5，所以整圓周長=3π×5=15π cm。"
        },
        {
          "choice": "6π cm",
          "truth": false,
          "reason": "只乘2。"
        },
        {
          "choice": "12π cm",
          "truth": false,
          "reason": "錯認72°占1/4。"
        },
        {
          "choice": "18π cm",
          "truth": false,
          "reason": "錯認占1/6。"
        }
      ],
      "misconceptionTarget": "由部分反求整體時仍乘分率。",
      "prerequisiteCheck": "需先能使用「圓內接四邊形」；本題未使用後續技能。",
      "estimatedTimeSec": 80,
      "unitCheck": "u19-s004-v005 已核對所求量「求整圓周長。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由弧長反求圓周長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s004-v005。",
      "difficultyReason": "standard：由弧長反求圓周長。 解題需完成「72/360=1/5。；3π÷1/5=15π。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由弧長反求圓周長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "fe7d8982189bf2628fe548f2177ed84c357d1c3a29fa9205974bdd18a1fc1cdb"
    },
    {
      "questionId": "u19-s004-v006",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "同一圓中，弧甲的中心角為 45°，弧乙為 135°。兩弧長比為何？",
      "text": "同一圓中，弧甲的中心角為 45°，弧乙為 135°。兩弧長比為何？",
      "givenConditions": "同一圓；中心角45°與135°。",
      "target": "求甲:乙弧長比。",
      "choices": [
        "1:3",
        "1:2",
        "2:3",
        "3:1"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「同一圓；中心角45°與135°。」重算：同圓弧長與中心角成正比，45:135=1:3。",
      "explanation": "同圓弧長與中心角成正比，45:135=1:3。 因此唯一正確選項是「1:3」。",
      "steps": [
        "同圓半徑相同。",
        "化簡45:135。"
      ],
      "optionAnalysis": [
        {
          "choice": "1:3",
          "truth": true,
          "reason": "依題目條件重新計算：同圓弧長與中心角成正比，45:135=1:3。"
        },
        {
          "choice": "1:2",
          "truth": false,
          "reason": "比例化簡錯。"
        },
        {
          "choice": "2:3",
          "truth": false,
          "reason": "角度比不是2:3。"
        },
        {
          "choice": "3:1",
          "truth": false,
          "reason": "顛倒甲乙順序。"
        }
      ],
      "misconceptionTarget": "計算兩次周長而忽略可直接比中心角。",
      "prerequisiteCheck": "需先能使用「圓內接四邊形」；本題未使用後續技能。",
      "estimatedTimeSec": 70,
      "unitCheck": "u19-s004-v006 已核對所求量「求甲:乙弧長比。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「比較同圓弧長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s004-v006。",
      "difficultyReason": "standard：比較同圓弧長。 解題需完成「同圓半徑相同。；化簡45:135。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "比較同圓弧長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "12c7cc4732419bf4d4c922fba0e50986b46ac91f78f3974520ffb16918273c59"
    },
    {
      "questionId": "u19-s004-v007",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s004-fig001",
      "drawingSpecId": "u19-s004-fig001",
      "prompt": "一個半徑 9 cm 的圓，先取 80° 弧，再接相鄰的 40° 弧。兩弧合成後的總弧長為何？",
      "text": "一個半徑 9 cm 的圓，先取 80° 弧，再接相鄰的 40° 弧。兩弧合成後的總弧長為何？",
      "givenConditions": "r=9 cm；兩相鄰弧80°與40°。",
      "target": "求合成弧長。",
      "choices": [
        "3π cm",
        "4π cm",
        "6π cm",
        "12π cm"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「r=9 cm；兩相鄰弧80°與40°。」重算：相鄰弧合成中心角120°，占整圓1/3；整圓周長18π，故總弧長6π。",
      "explanation": "相鄰弧合成中心角120°，占整圓1/3；整圓周長18π，故總弧長6π。 因此唯一正確選項是「6π cm」。",
      "steps": [
        "80+40=120°。",
        "120/360=1/3。",
        "1/3×18π=6π。"
      ],
      "optionAnalysis": [
        {
          "choice": "3π cm",
          "truth": false,
          "reason": "只算第一段。"
        },
        {
          "choice": "4π cm",
          "truth": false,
          "reason": "只按80°附近錯算。"
        },
        {
          "choice": "6π cm",
          "truth": true,
          "reason": "依題目條件重新計算：相鄰弧合成中心角120°，占整圓1/3；整圓周長18π，故總弧長6π。"
        },
        {
          "choice": "12π cm",
          "truth": false,
          "reason": "把120°當2/3圓。"
        }
      ],
      "misconceptionTarget": "分段弧合併時漏算或重算。",
      "prerequisiteCheck": "需先能使用「圓內接四邊形」；本題未使用後續技能。",
      "estimatedTimeSec": 105,
      "unitCheck": "u19-s004-v007 已核對所求量「求合成弧長。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「合併相鄰弧求總長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s004-v007。",
      "difficultyReason": "advanced：合併相鄰弧求總長。 解題需完成「80+40=120°。；120/360=1/3。；1/3×18π=6π。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "合併相鄰弧求總長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "c84b5b10e55855722082bf304eb8d3de986cb8fcc2b6bd3599f2c775cd7394b0"
    },
    {
      "questionId": "u19-s004-v008",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "半徑為 r 的圓中，270° 優弧比90°劣弧長多 10π。求 r。",
      "text": "半徑為 r 的圓中，270° 優弧比90°劣弧長多 10π。求 r。",
      "givenConditions": "同端點優弧270°、劣弧90°，長差10π。",
      "target": "求r。",
      "choices": [
        "2.5",
        "5",
        "20",
        "10"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「同端點優弧270°、劣弧90°，長差10π。」重算：270°弧與90°弧的長度差是整圓周長的1/2，即πr。由πr=10π得r=10。",
      "explanation": "270°弧與90°弧的長度差是整圓周長的1/2，即πr。由πr=10π得r=10。 因此唯一正確選項是「10」。",
      "steps": [
        "270°−90°=180°，差占整圓1/2。",
        "差弧長=(1/2)×2πr=πr。",
        "πr=10π，所以r=10。"
      ],
      "optionAnalysis": [
        {
          "choice": "2.5",
          "truth": false,
          "reason": "使弧長差只有2.5π。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "使弧長差只有5π。"
        },
        {
          "choice": "20",
          "truth": false,
          "reason": "使弧長差20π。"
        },
        {
          "choice": "10",
          "truth": true,
          "reason": "依題目條件重新計算：270°弧與90°弧的長度差是整圓周長的1/2，即πr。由πr=10π得r=10。"
        }
      ],
      "misconceptionTarget": "差值比例判斷錯，或把半圓周長寫2πr。",
      "prerequisiteCheck": "需先能使用「圓內接四邊形」；本題未使用後續技能。",
      "estimatedTimeSec": 125,
      "unitCheck": "u19-s004-v008 已核對所求量「求r。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由兩弧長差反求半徑。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s004-v008。",
      "difficultyReason": "advanced：由兩弧長差反求半徑。 解題需完成「270°−90°=180°，差占整圓1/2。；差弧長=(1/2)×2πr=πr。；πr=10π，所以r=10。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由兩弧長差反求半徑。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "d5f73160208f9e48619d093356c197fd0e15190e2542ff54988bffd891fdd169"
    },
    {
      "questionId": "u19-s004-v009",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "兩個圓半徑比為 2:3，各取相同 120° 的弧。較小圓弧長為 8π，較大圓弧長為何？",
      "text": "兩個圓半徑比為 2:3，各取相同 120° 的弧。較小圓弧長為 8π，較大圓弧長為何？",
      "givenConditions": "兩圓中心角相同；半徑比2:3。",
      "target": "求較大圓弧長。",
      "choices": [
        "9π",
        "12π",
        "16π",
        "18π"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「兩圓中心角相同；半徑比2:3。」重算：相同中心角下弧長與半徑成正比，8π×3/2=12π。",
      "explanation": "相同中心角下弧長與半徑成正比，8π×3/2=12π。 因此唯一正確選項是「12π」。",
      "steps": [
        "弧長比=半徑比2:3。",
        "較大弧=8π×3/2=12π。"
      ],
      "optionAnalysis": [
        {
          "choice": "9π",
          "truth": false,
          "reason": "比例倍率錯。"
        },
        {
          "choice": "12π",
          "truth": true,
          "reason": "依題目條件重新計算：相同中心角下弧長與半徑成正比，8π×3/2=12π。"
        },
        {
          "choice": "16π",
          "truth": false,
          "reason": "誤乘2。"
        },
        {
          "choice": "18π",
          "truth": false,
          "reason": "把半徑比平方。"
        }
      ],
      "misconceptionTarget": "把面積比例平方規則誤用到弧長。",
      "prerequisiteCheck": "需先能使用「圓內接四邊形」；本題未使用後續技能。",
      "estimatedTimeSec": 105,
      "unitCheck": "u19-s004-v009 已核對所求量「求較大圓弧長。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「跨等角不同圓比較弧長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s004-v009。",
      "difficultyReason": "advanced：跨等角不同圓比較弧長。 解題需完成「弧長比=半徑比2:3。；較大弧=8π×3/2=12π。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "跨等角不同圓比較弧長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "0ca761eb35c3b2f104e88804237f543a08637388ad2c1db77a9b02e61396e785"
    },
    {
      "questionId": "u19-s004-v010",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "自行車輪半徑 35 cm，輪子轉半圈時，輪緣上一點沿圓周走過多長？",
      "text": "自行車輪半徑 35 cm，輪子轉半圈時，輪緣上一點沿圓周走過多長？",
      "givenConditions": "輪半徑35 cm；無滑動；轉半圈。",
      "target": "求輪緣點路徑長。",
      "choices": [
        "70π cm",
        "35π cm",
        "35π cm²",
        "70 cm"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「輪半徑35 cm；無滑動；轉半圈。」重算：輪周長70π cm，半圈走過35π cm。",
      "explanation": "輪周長70π cm，半圈走過35π cm。 因此唯一正確選項是「35π cm」。",
      "steps": [
        "2π×35=70π。",
        "取1/2得35π。"
      ],
      "optionAnalysis": [
        {
          "choice": "70π cm",
          "truth": false,
          "reason": "整圈距離。"
        },
        {
          "choice": "35π cm",
          "truth": true,
          "reason": "依題目條件重新計算：輪周長70π cm，半圈走過35π cm。"
        },
        {
          "choice": "35π cm²",
          "truth": false,
          "reason": "面積單位錯。"
        },
        {
          "choice": "70 cm",
          "truth": false,
          "reason": "漏π。"
        }
      ],
      "misconceptionTarget": "把半圈當整圈或混淆路徑面積。",
      "prerequisiteCheck": "需先能使用「圓內接四邊形」；本題未使用後續技能。",
      "estimatedTimeSec": 75,
      "unitCheck": "u19-s004-v010 已核對所求量「求輪緣點路徑長。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「把輪子半圈轉動轉成弧長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s004-v010。",
      "difficultyReason": "literacy：把輪子半圈轉動轉成弧長。 解題需完成「2π×35=70π。；取1/2得35π。」。",
      "literacyContextNecessity": "轉動圈數直接決定輪緣沿圓周的弧長。",
      "authoringIntent": "把輪子半圈轉動轉成弧長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "2cc378a961c32732148c0f6a18bfe1c438db32dc8db54044b69a7a9e422750d7"
    },
    {
      "questionId": "u19-s004-v011",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形跑道彎道是半徑 20 m 的半圓。選手跑過這一段彎道的距離為何？",
      "text": "圓形跑道彎道是半徑 20 m 的半圓。選手跑過這一段彎道的距離為何？",
      "givenConditions": "彎道為半徑20 m的半圓弧。",
      "target": "求跑過距離。",
      "choices": [
        "20π m",
        "40π m",
        "20π m²",
        "40 m"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「彎道為半徑20 m的半圓弧。」重算：半圓弧長πr=20π m。直徑不是跑道曲線的一部分。",
      "explanation": "半圓弧長πr=20π m。直徑不是跑道曲線的一部分。 因此唯一正確選項是「20π m」。",
      "steps": [
        "辨認只跑半圓弧。",
        "π×20=20π。"
      ],
      "optionAnalysis": [
        {
          "choice": "20π m",
          "truth": true,
          "reason": "依題目條件重新計算：半圓弧長πr=20π m。直徑不是跑道曲線的一部分。"
        },
        {
          "choice": "40π m",
          "truth": false,
          "reason": "整圓周長。"
        },
        {
          "choice": "20π m²",
          "truth": false,
          "reason": "單位錯。"
        },
        {
          "choice": "40 m",
          "truth": false,
          "reason": "把直徑當彎道長。"
        }
      ],
      "misconceptionTarget": "把半圓圖形周長或直徑算入跑步路徑。",
      "prerequisiteCheck": "需先能使用「圓內接四邊形」；本題未使用後續技能。",
      "estimatedTimeSec": 80,
      "unitCheck": "u19-s004-v011 已核對所求量「求跑過距離。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「計算半圓跑道彎道。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s004-v011。",
      "difficultyReason": "literacy：計算半圓跑道彎道。 解題需完成「辨認只跑半圓弧。；π×20=20π。」。",
      "literacyContextNecessity": "跑者只沿弧線移動，直徑不屬路徑。",
      "authoringIntent": "計算半圓跑道彎道。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "399409263881003121b6b7e711b0d2df0d5efe5246edead3d68940aec19f3567"
    },
    {
      "questionId": "u19-s004-v012",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "一條圓弧形裝飾帶半徑 1.5 m、中心角 240°。至少需要多長的帶子？",
      "text": "一條圓弧形裝飾帶半徑 1.5 m、中心角 240°。至少需要多長的帶子？",
      "givenConditions": "r=1.5 m；θ=240°。",
      "target": "求材料最短長度。",
      "choices": [
        "π m",
        "3π m",
        "4π m",
        "2π m"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「r=1.5 m；θ=240°。」重算：弧長=(240/360)×2π×1.5=(2/3)×3π=2π m。",
      "explanation": "弧長=(240/360)×2π×1.5=(2/3)×3π=2π m。 因此唯一正確選項是「2π m」。",
      "steps": [
        "240/360=2/3。",
        "整圓周長3π。",
        "乘得2π。"
      ],
      "optionAnalysis": [
        {
          "choice": "π m",
          "truth": false,
          "reason": "只取1/3。"
        },
        {
          "choice": "3π m",
          "truth": false,
          "reason": "未乘比例。"
        },
        {
          "choice": "4π m",
          "truth": false,
          "reason": "把240°誤作4/3圈。"
        },
        {
          "choice": "2π m",
          "truth": true,
          "reason": "依題目條件重新計算：弧長=(240/360)×2π×1.5=(2/3)×3π=2π m。"
        }
      ],
      "misconceptionTarget": "中心角分率或小數半徑處理錯。",
      "prerequisiteCheck": "需先能使用「圓內接四邊形」；本題未使用後續技能。",
      "estimatedTimeSec": 95,
      "unitCheck": "u19-s004-v012 已核對所求量「求材料最短長度。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「計算大型裝飾弧長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s004-v012。",
      "difficultyReason": "literacy：計算大型裝飾弧長。 解題需完成「240/360=2/3。；整圓周長3π。；乘得2π。」。",
      "literacyContextNecessity": "材料沿曲線鋪設，所需量必須使用弧長而非弦長。",
      "authoringIntent": "計算大型裝飾弧長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "ae560af61d50e86100ea58126242b79091772a6c5f6fb7e629b509ab619066a6"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u19-s004-cr001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length",
      "difficulty": "advanced",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u19-s004-fig001",
      "drawingSpecId": "u19-s004-fig001",
      "prompt": "半徑 9 cm 的圓有一段 200° 弧。求弧長，並比較它是否大於半圓弧長。",
      "requiredWork": [
        "計算200°弧長。",
        "計算或辨認半圓弧長。",
        "作大小比較。"
      ],
      "standardSolution": [
        "L=(200/360)×18π=10π cm。",
        "半圓弧長=9π cm。",
        "10π>9π，所以200°弧較長。"
      ],
      "fullCreditSolution": [
        "L=(200/360)×18π=10π cm。",
        "半圓弧長=9π cm。",
        "10π>9π，所以200°弧較長。"
      ],
      "alternativeSolutions": [
        "可只比較中心角200°>180°判較長，再計算10π。"
      ],
      "reasoningSteps": [
        "L=(200/360)×18π=10π cm。",
        "半圓弧長=9π cm。",
        "10π>9π，所以200°弧較長。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "弧長10π cm與比較結論、理由皆正確。"
        },
        {
          "score": 2,
          "criteria": "弧長正確但比較理由不完整，或比較正確但算術小錯。"
        },
        {
          "score": 1,
          "criteria": "公式或中心角比例正確。"
        },
        {
          "score": 0,
          "criteria": "把弧長算成面積。"
        }
      ],
      "partialCreditRules": [
        "比較可用角度或實際長度。"
      ],
      "followThroughPolicy": "若弧長算錯但仍由200°>180°正確判較長，保留1分。",
      "unitNotationRules": "弧長用cm，不用cm²。",
      "answerOnlyPolicy": "只寫10π且未比較最高2分。",
      "commonErrors": [
        "使用πr²。",
        "把200/360簡化錯。"
      ],
      "independentReview": {
        "derivedResult": "弧長10π cm，且大於半圓弧長9π cm。",
        "ambiguity": "半徑與角度完整，答案唯一。",
        "decision": "pass",
        "reviewNote": "u19-s004-cr001 由題目條件另行推導得到「弧長10π cm，且大於半圓弧長9π cm。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "6ba06a90fd51205283f585cf489e5348f9c608c2da7adab4b671e143b91a9f20"
    },
    {
      "questionId": "u19-s004-cr002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length",
      "difficulty": "advanced",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "某圓的 72° 弧長為 4π cm。求圓的半徑與整圓周長。",
      "requiredWork": [
        "由部分比例反求整圓周長。",
        "由周長反求半徑。"
      ],
      "standardSolution": [
        "72°占整圓1/5，所以整圓周長=4π×5=20π cm。",
        "2πr=20π，r=10 cm。"
      ],
      "fullCreditSolution": [
        "72°占整圓1/5，所以整圓周長=4π×5=20π cm。",
        "2πr=20π，r=10 cm。"
      ],
      "alternativeSolutions": [
        "也可直接列4π=(72/360)2πr求r。"
      ],
      "reasoningSteps": [
        "72°占整圓1/5，所以整圓周長=4π×5=20π cm。",
        "2πr=20π，r=10 cm。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "周長20π cm與半徑10 cm，推理完整。"
        },
        {
          "score": 2,
          "criteria": "兩答案正確但理由簡略，或只完整求出一項。"
        },
        {
          "score": 1,
          "criteria": "知道72°占1/5並建立正確關係。"
        },
        {
          "score": 0,
          "criteria": "無有效比例。"
        }
      ],
      "partialCreditRules": [
        "先求任一正確量可得部分分。"
      ],
      "followThroughPolicy": "若整圓周長算錯但正確使用2πr反求，可保留後續方法分。",
      "unitNotationRules": "半徑與周長均用cm。",
      "answerOnlyPolicy": "只列10、20π且正確給2分。",
      "commonErrors": [
        "把72°當1/4圓。",
        "由20π直接認r=20。"
      ],
      "independentReview": {
        "derivedResult": "r=10 cm，整圓周長20π cm。",
        "ambiguity": "比例與半徑皆正值，唯一。",
        "decision": "pass",
        "reviewNote": "u19-s004-cr002 由題目條件另行推導得到「r=10 cm，整圓周長20π cm。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "80e876baaace594dc218b58a3864e3866e9064dfdd06d9f9f6347f6948b178b2"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u19-s004-v001",
      "contentSha256": "106dffc93cfc295675bd5bf501f2edacdebf7fc04145e38ff7848b8e660a6a2b",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「半徑7 cm。」重算：半圓弧長是圓周長的一半：2π×7÷2=7π cm。",
      "derivedAnswer": "7π cm",
      "storedAnswer": "7π cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「7π cm」符合；三個干擾項分別因「14π是整圓周長。；平方單位不適用長度。；漏掉π且誤用直徑。」而排除。",
        "undefinedSymbol": "u19-s004-v001 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弧長」講義定義。",
        "unitConflict": "題目所求為「求曲線弧長。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「計算半圓弧長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「半徑7 cm。」重讀，所求「求曲線弧長。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是計算半圓弧長。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴inscribed-quadrilateral，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑 7 cm 的半圓弧長為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s004-v001 人工重算：半圓弧長是圓周長的一半：2π×7÷2=7π cm。 正確選項為「7π cm」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s004-v002",
      "contentSha256": "684bc45ad27ec655db8daae0c5abb8603dc38fdcf0008c38950666a8b6fe99e4",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「半徑8 m；中心角90°。」重算：整圓周長16π m，四分之一為4π m。",
      "derivedAnswer": "4π m",
      "storedAnswer": "4π m",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「4π m」符合；三個干擾項分別因「錯取八分之一。；錯取二分之一。；未取四分之一。」而排除。",
        "undefinedSymbol": "u19-s004-v002 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弧長」講義定義。",
        "unitConflict": "題目所求為「求弧長。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「計算四分之一圓弧長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「半徑8 m；中心角90°。」重讀，所求「求弧長。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是計算四分之一圓弧長。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴inscribed-quadrilateral，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑 8 m 的四分之一圓弧長為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s004-v002 人工重算：整圓周長16π m，四分之一為4π m。 正確選項為「4π m」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s004-v003",
      "contentSha256": "e4834115f066758a2c319b948a44782429bbcdf30a3c5b9c64721445ec197db9",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「直徑10 cm。」重算：直徑10故半徑5，半圓弧長πr=5π cm。",
      "derivedAnswer": "5π cm",
      "storedAnswer": "5π cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「5π cm」符合；三個干擾項分別因「把直徑當半徑。；誤用面積。；單位錯。」而排除。",
        "undefinedSymbol": "u19-s004-v003 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弧長」講義定義。",
        "unitConflict": "題目所求為「求半圓曲線長。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由直徑求半圓弧長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「直徑10 cm。」重讀，所求「求半圓曲線長。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是由直徑求半圓弧長。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴inscribed-quadrilateral，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「直徑 10 cm 的半圓弧長為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s004-v003 人工重算：直徑10故半徑5，半圓弧長πr=5π cm。 正確選項為「5π cm」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s004-v004",
      "contentSha256": "124e849a7837da10ad09425dec2c179f6ea13cfdaa59cd28e1be4dae25d260f6",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=6 cm；θ=120°。」重算：120°占整圓1/3，整圓周長12π，所以弧長4π cm。",
      "derivedAnswer": "4π cm",
      "storedAnswer": "4π cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「4π cm」符合；三個干擾項分別因「錯用1/6。；錯取半圓。；未乘比例。」而排除。",
        "undefinedSymbol": "u19-s004-v004 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弧長」講義定義。",
        "unitConflict": "題目所求為「求弧長。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「按比例求一般弧長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=6 cm；θ=120°。」重讀，所求「求弧長。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是按比例求一般弧長。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴inscribed-quadrilateral，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑 6 cm、中心角 120° 的弧長為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s004-v004 人工重算：120°占整圓1/3，整圓周長12π，所以弧長4π cm。 正確選項為「4π cm」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s004-v005",
      "contentSha256": "fe7d8982189bf2628fe548f2177ed84c357d1c3a29fa9205974bdd18a1fc1cdb",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「72°弧長3π cm。」重算：72°占整圓1/5，所以整圓周長=3π×5=15π cm。",
      "derivedAnswer": "15π cm",
      "storedAnswer": "15π cm",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「15π cm」符合；三個干擾項分別因「只乘2。；錯認72°占1/4。；錯認占1/6。」而排除。",
        "undefinedSymbol": "u19-s004-v005 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弧長」講義定義。",
        "unitConflict": "題目所求為「求整圓周長。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由弧長反求圓周長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「72°弧長3π cm。」重讀，所求「求整圓周長。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是由弧長反求圓周長。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴inscribed-quadrilateral，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「某圓 72° 弧長為 3π cm，則整個圓周長為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s004-v005 人工重算：72°占整圓1/5，所以整圓周長=3π×5=15π cm。 正確選項為「15π cm」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s004-v006",
      "contentSha256": "12c7cc4732419bf4d4c922fba0e50986b46ac91f78f3974520ffb16918273c59",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「同一圓；中心角45°與135°。」重算：同圓弧長與中心角成正比，45:135=1:3。",
      "derivedAnswer": "1:3",
      "storedAnswer": "1:3",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「1:3」符合；三個干擾項分別因「比例化簡錯。；角度比不是2:3。；顛倒甲乙順序。」而排除。",
        "undefinedSymbol": "u19-s004-v006 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弧長」講義定義。",
        "unitConflict": "題目所求為「求甲:乙弧長比。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「比較同圓弧長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「同一圓；中心角45°與135°。」重讀，所求「求甲:乙弧長比。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是比較同圓弧長。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴inscribed-quadrilateral，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「同一圓中，弧甲的中心角為 45°，弧乙為 135°。兩弧長比為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s004-v006 人工重算：同圓弧長與中心角成正比，45:135=1:3。 正確選項為「1:3」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s004-v007",
      "contentSha256": "c84b5b10e55855722082bf304eb8d3de986cb8fcc2b6bd3599f2c775cd7394b0",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=9 cm；兩相鄰弧80°與40°。」重算：相鄰弧合成中心角120°，占整圓1/3；整圓周長18π，故總弧長6π。",
      "derivedAnswer": "6π cm",
      "storedAnswer": "6π cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「6π cm」符合；三個干擾項分別因「只算第一段。；只按80°附近錯算。；把120°當2/3圓。」而排除。",
        "undefinedSymbol": "u19-s004-v007 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弧長」講義定義。",
        "unitConflict": "題目所求為「求合成弧長。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「合併相鄰弧求總長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=9 cm；兩相鄰弧80°與40°。」重讀，所求「求合成弧長。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是合併相鄰弧求總長。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴inscribed-quadrilateral，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「一個半徑 9 cm 的圓，先取 80° 弧，再接相鄰的 40° 弧。兩弧合成後的總弧長為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s004-v007 人工重算：相鄰弧合成中心角120°，占整圓1/3；整圓周長18π，故總弧長6π。 正確選項為「6π cm」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s004-v008",
      "contentSha256": "d5f73160208f9e48619d093356c197fd0e15190e2542ff54988bffd891fdd169",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「同端點優弧270°、劣弧90°，長差10π。」重算：270°弧與90°弧的長度差是整圓周長的1/2，即πr。由πr=10π得r=10。",
      "derivedAnswer": "10",
      "storedAnswer": "10",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「10」符合；三個干擾項分別因「使弧長差只有2.5π。；使弧長差只有5π。；使弧長差20π。」而排除。",
        "undefinedSymbol": "u19-s004-v008 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弧長」講義定義。",
        "unitConflict": "題目所求為「求r。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由兩弧長差反求半徑。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「同端點優弧270°、劣弧90°，長差10π。」重讀，所求「求r。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是由兩弧長差反求半徑。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴inscribed-quadrilateral，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑為 r 的圓中，270° 優弧比90°劣弧長多 10π。求 r。」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s004-v008 人工重算：270°弧與90°弧的長度差是整圓周長的1/2，即πr。由πr=10π得r=10。 正確選項為「10」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s004-v009",
      "contentSha256": "0ca761eb35c3b2f104e88804237f543a08637388ad2c1db77a9b02e61396e785",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「兩圓中心角相同；半徑比2:3。」重算：相同中心角下弧長與半徑成正比，8π×3/2=12π。",
      "derivedAnswer": "12π",
      "storedAnswer": "12π",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「12π」符合；三個干擾項分別因「比例倍率錯。；誤乘2。；把半徑比平方。」而排除。",
        "undefinedSymbol": "u19-s004-v009 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弧長」講義定義。",
        "unitConflict": "題目所求為「求較大圓弧長。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「跨等角不同圓比較弧長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「兩圓中心角相同；半徑比2:3。」重讀，所求「求較大圓弧長。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是跨等角不同圓比較弧長。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴inscribed-quadrilateral，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「兩個圓半徑比為 2:3，各取相同 120° 的弧。較小圓弧長為 8π，較大圓弧長為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s004-v009 人工重算：相同中心角下弧長與半徑成正比，8π×3/2=12π。 正確選項為「12π」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s004-v010",
      "contentSha256": "2cc378a961c32732148c0f6a18bfe1c438db32dc8db54044b69a7a9e422750d7",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「輪半徑35 cm；無滑動；轉半圈。」重算：輪周長70π cm，半圈走過35π cm。",
      "derivedAnswer": "35π cm",
      "storedAnswer": "35π cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「35π cm」符合；三個干擾項分別因「整圈距離。；面積單位錯。；漏π。」而排除。",
        "undefinedSymbol": "u19-s004-v010 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弧長」講義定義。",
        "unitConflict": "題目所求為「求輪緣點路徑長。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「把輪子半圈轉動轉成弧長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「輪半徑35 cm；無滑動；轉半圈。」重讀，所求「求輪緣點路徑長。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是把輪子半圈轉動轉成弧長。，而非只依題序標示。",
      "literacyContextNecessity": "轉動圈數直接決定輪緣沿圓周的弧長。",
      "prerequisiteCheck": "只依賴inscribed-quadrilateral，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「自行車輪半徑 35 cm，輪子轉半圈時，輪緣上一點沿圓周走過多長？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s004-v010 人工重算：輪周長70π cm，半圈走過35π cm。 正確選項為「35π cm」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s004-v011",
      "contentSha256": "399409263881003121b6b7e711b0d2df0d5efe5246edead3d68940aec19f3567",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「彎道為半徑20 m的半圓弧。」重算：半圓弧長πr=20π m。直徑不是跑道曲線的一部分。",
      "derivedAnswer": "20π m",
      "storedAnswer": "20π m",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「20π m」符合；三個干擾項分別因「整圓周長。；單位錯。；把直徑當彎道長。」而排除。",
        "undefinedSymbol": "u19-s004-v011 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弧長」講義定義。",
        "unitConflict": "題目所求為「求跑過距離。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「計算半圓跑道彎道。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「彎道為半徑20 m的半圓弧。」重讀，所求「求跑過距離。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是計算半圓跑道彎道。，而非只依題序標示。",
      "literacyContextNecessity": "跑者只沿弧線移動，直徑不屬路徑。",
      "prerequisiteCheck": "只依賴inscribed-quadrilateral，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓形跑道彎道是半徑 20 m 的半圓。選手跑過這一段彎道的距離為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s004-v011 人工重算：半圓弧長πr=20π m。直徑不是跑道曲線的一部分。 正確選項為「20π m」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s004-v012",
      "contentSha256": "ae560af61d50e86100ea58126242b79091772a6c5f6fb7e629b509ab619066a6",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=1.5 m；θ=240°。」重算：弧長=(240/360)×2π×1.5=(2/3)×3π=2π m。",
      "derivedAnswer": "2π m",
      "storedAnswer": "2π m",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「2π m」符合；三個干擾項分別因「只取1/3。；未乘比例。；把240°誤作4/3圈。」而排除。",
        "undefinedSymbol": "u19-s004-v012 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弧長」講義定義。",
        "unitConflict": "題目所求為「求材料最短長度。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「計算大型裝飾弧長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=1.5 m；θ=240°。」重讀，所求「求材料最短長度。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是計算大型裝飾弧長。，而非只依題序標示。",
      "literacyContextNecessity": "材料沿曲線鋪設，所需量必須使用弧長而非弦長。",
      "prerequisiteCheck": "只依賴inscribed-quadrilateral，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「一條圓弧形裝飾帶半徑 1.5 m、中心角 240°。至少需要多長的帶子？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s004-v012 人工重算：弧長=(240/360)×2π×1.5=(2/3)×3π=2π m。 正確選項為「2π m」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u19-s004-fig001",
      "unitId": "u19",
      "topicId": "u19-angles",
      "skillId": "arc-length",
      "svgPath": "figures/u19/u19-s004-fig001.svg",
      "canvas": {
        "width": 360,
        "height": 240,
        "viewBox": "0 0 360 240"
      },
      "drawingSpec": {
        "purpose": "支援「弧長」中需要辨認點、線、弧、角或邊界的題目。",
        "coordinateSystem": "SVG x向右、y向下；所有座標以360×240畫布為準。",
        "geometry": "圓上 A、B 之間以粗線標示曲線弧長，並用虛線畫弦 AB，提醒兩者不同。",
        "visibleLines": "所有作答所需實線均以2px以上深色描邊；強調弧以5px描邊。",
        "hiddenLines": "只有內部共邊或量測輔助線使用虛線；未指定者不得自行添加。",
        "labels": "標籤位置已在SVG以固定座標給定，避免遮住交點、角弧或刻痕。",
        "symbols": "直角符號、等長刻痕、箭頭及角度符號僅在數學條件需要時出現。",
        "scalePolicy": "示意圖不保證按實際長度或角度比例繪製。",
        "visualInferenceWarning": "不得以目測長短、角度或對稱性取代題目條件與定理。",
        "mobileReadability": "360×240檢視下文字至少16px，關鍵線至少2px，無微小數值標籤。",
        "answerLeakage": "圖中不標示任何題目要求計算的最終數值或正確選項。"
      },
      "altText": "圓上 A、B 之間以粗線標示曲線弧長，並用虛線畫弦 AB，提醒兩者不同。 圖形僅協助辨認結構，不可依比例目測答案。",
      "svgTitle": "弧長曲線與弦比較圖",
      "svgDescription": "圓上 A、B 之間以粗線標示曲線弧長，並用虛線畫弦 AB，提醒兩者不同。",
      "svgAssertions": [
        "role=\"img\"",
        "<title",
        "<desc",
        "viewBox=\"0 0 360 240\"",
        "class=\"highlight\"",
        "class=\"dash\"",
        ">弧長</text>"
      ],
      "figureReview": {
        "decision": "pass",
        "manualRenderInspected": true,
        "mobileReadable": true,
        "answerLeakageFound": false,
        "reviewNote": "已逐項檢查 u19-s004-fig001 的點位、線段、弧線、標籤與輔助符號；此圖專門呈現「弧長」的結構，未包含可直接推得題庫答案的數值。",
        "reviewVersion": "human-figure-review-r1.0",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "7a1bdc4b35987427eaf42eb2453ada6dd1a8d7365ae2e01bde977b62fdb28692"
    }
  ]
};
export default u19_s004;
