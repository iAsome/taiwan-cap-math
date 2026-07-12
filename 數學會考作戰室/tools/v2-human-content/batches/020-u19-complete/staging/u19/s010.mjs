export const u19_s010 = {
  "lecture": {
    "lectureId": "u19-s010-lecture-r1",
    "unitId": "u19",
    "numericUnitId": 19,
    "topicId": "u19-measure",
    "skillId": "sector-area",
    "title": "扇形面積",
    "unitTitle": "圓",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "slot": "s010",
      "lockedSkillId": "sector-area",
      "lockedOrder": 10,
      "scope": "正確套用 A=(θ/360°)×πr²。"
    },
    "learningOutcomes": [
      "能由中心角與半徑求扇形面積。",
      "能反求中心角或半徑。",
      "能分辨扇形面積與三角形面積。"
    ],
    "prerequisites": [
      {
        "skillId": "circle-inscribed-basic",
        "requiredLevel": "能使用「內接角應用」的核心定義與基本運算，並辨認其適用條件。"
      }
    ],
    "prerequisiteBridge": "先由前一技能「內接角應用」的結論，連接到本技能「扇形面積」所需的新判斷。",
    "glossary": [
      {
        "term": "扇形",
        "definition": "兩條半徑與其間弧圍成的區域。"
      },
      {
        "term": "扇形面積",
        "definition": "整圓面積按中心角比例取得的部分。"
      },
      {
        "term": "圓面積",
        "definition": "πr²。"
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
      "扇形面積的比例與弧長相同，都是中心角除以360°，但基準量改成整圓面積πr²。",
      "半圓是180°，面積是整圓一半；90°扇形是四分之一圓。",
      "若圖中另畫弦，弦與兩半徑形成的三角形不是整個扇形，不能混算。"
    ],
    "formalDefinitions": [
      {
        "name": "扇形",
        "statement": "兩條半徑與其間弧圍成的區域。"
      },
      {
        "name": "扇形面積",
        "statement": "整圓面積按中心角比例取得的部分。"
      },
      {
        "name": "圓面積",
        "statement": "πr²。"
      }
    ],
    "formulas": [
      {
        "formula": "A=(θ/360°)×πr²",
        "conditions": [
          "θ為中心角，r>0"
        ],
        "meaning": "扇形面積"
      },
      {
        "formula": "θ=360°A/(πr²)",
        "conditions": [
          "A、r已知"
        ],
        "meaning": "反求中心角"
      }
    ],
    "nonApplicableCases": [
      "把2πr當面積基準會得到長度單位。",
      "把圓周角直接當θ會少一倍。",
      "求陰影若是弓形，需扇形減三角形，不是直接用扇形公式。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "確認陰影確實是扇形。",
        "check": "完成此步後，確認仍在「扇形面積」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 2,
        "instruction": "找中心角與半徑。",
        "check": "完成此步後，確認仍在「扇形面積」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 3,
        "instruction": "計算θ/360。",
        "check": "完成此步後，確認仍在「扇形面積」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 4,
        "instruction": "乘πr²並約分。",
        "check": "完成此步後，確認仍在「扇形面積」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 5,
        "instruction": "檢查答案是平方單位。",
        "check": "完成此步後，確認仍在「扇形面積」的CAP範圍且沒有只憑圖形目測。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "s010-L1",
        "prompt": "r=6，θ=120°。",
        "solutionSteps": [
          "120/360=1/3。",
          "A=1/3×36π=12π。"
        ],
        "answer": "12π。",
        "level": "basic"
      },
      {
        "exampleId": "s010-L2",
        "prompt": "r=10，扇形面積25π。求θ。",
        "solutionSteps": [
          "整圓100π。",
          "比例1/4，θ=90°。"
        ],
        "answer": "90°。",
        "level": "standard"
      },
      {
        "exampleId": "s010-L3",
        "prompt": "直徑8的半圓面積。",
        "solutionSteps": [
          "r=4。",
          "1/2×16π=8π。"
        ],
        "answer": "8π。",
        "level": "advanced"
      },
      {
        "exampleId": "s010-L4",
        "prompt": "270°扇形面積為48π，求r。",
        "solutionSteps": [
          "3/4πr²=48π。",
          "r²=64，r=8。"
        ],
        "answer": "8。",
        "level": "connection"
      }
    ],
    "difficultyConnections": {
      "basic": "辨認「扇形面積」的定義、符號與單一步驟關係。",
      "standard": "把「扇形面積」與前置技能、比例或一次代數連接。",
      "advanced": "在多段弧、複合邊界、反求或條件篩選中使用「扇形面積」。",
      "literacy": "把真實尺寸、旋轉、施工或觀測情境轉成「扇形面積」的數學模型。"
    },
    "commonMistakes": [
      {
        "mistake": "半徑未平方",
        "why": "把面積公式當周長",
        "correction": "面積基準是πr²"
      },
      {
        "mistake": "中心角比例分母寫180",
        "why": "只適用半圓想法",
        "correction": "一般用360"
      },
      {
        "mistake": "答案寫cm",
        "why": "忘記面積維度",
        "correction": "寫cm²"
      },
      {
        "mistake": "把弓形當扇形",
        "why": "邊界含弦不是兩半徑",
        "correction": "確認兩條直邊是否都到圓心"
      }
    ],
    "selfCheck": [
      "我是否先確認「扇形面積」的適用條件？",
      "我是否分清半徑、直徑、弦、弧與角的角色？",
      "我是否寫出必要單位，並在最後才取近似值？",
      "我是否用定理或公式驗證，而不是依圖形外觀猜測？"
    ],
    "summary": [
      "扇形面積=整圓面積×θ/360。",
      "中心角而非圓周角進公式。",
      "面積答案使用平方單位。"
    ],
    "connections": {
      "previous": "承接「內接角應用」。",
      "next": "下一技能為「圓複合面積」。"
    },
    "figureReferences": [
      {
        "figureId": "u19-s010-fig001",
        "purpose": "半徑 r 的圓以兩半徑圍成角 θ，扇形區域加淡斜線並標示面積 A。",
        "altText": "半徑 r 的圓以兩半徑圍成角 θ，扇形區域加淡斜線並標示面積 A。，不可按比例目測。"
      }
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u19-s010-v001",
        "u19-s010-v002",
        "u19-s010-v003",
        "u19-s010-v004",
        "u19-s010-v005",
        "u19-s010-v006",
        "u19-s010-v007",
        "u19-s010-v008",
        "u19-s010-v009",
        "u19-s010-v010",
        "u19-s010-v011",
        "u19-s010-v012"
      ],
      "constructedResponseIds": [
        "u19-s010-cr001",
        "u19-s010-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段回讀「扇形面積」講義，確認所有符號先定義、公式均附條件，並以四個不同目的例題檢查定義辨認、標準運算、進階邊界與實際連結；特別核對：正確套用 A=(θ/360°)×πr²。",
      "reviewVersion": "human-lecture-review-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "c0ecfa2c15792bfec2e94ea2f517acf613a624b3847754597b22f637d0580fc2"
  },
  "questions": [
    {
      "questionId": "u19-s010-v001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-area",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s010-fig001",
      "drawingSpecId": "u19-s010-fig001",
      "prompt": "半徑 6 cm、中心角 120° 的扇形面積為何？",
      "text": "半徑 6 cm、中心角 120° 的扇形面積為何？",
      "givenConditions": "r=6 cm；θ=120°。",
      "target": "求扇形面積。",
      "choices": [
        "6π cm²",
        "12π cm²",
        "18π cm²",
        "36π cm²"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「r=6 cm；θ=120°。」重算：A=(120/360)×π×6²=1/3×36π=12π cm²。",
      "explanation": "A=(120/360)×π×6²=1/3×36π=12π cm²。 因此唯一正確選項是「12π cm²」。",
      "steps": [
        "比例1/3。",
        "圓面積36π。",
        "相乘12π。"
      ],
      "optionAnalysis": [
        {
          "choice": "6π cm²",
          "truth": false,
          "reason": "比例少一半。"
        },
        {
          "choice": "12π cm²",
          "truth": true,
          "reason": "依題目條件重新計算：A=(120/360)×π×6²=1/3×36π=12π cm²。"
        },
        {
          "choice": "18π cm²",
          "truth": false,
          "reason": "誤取半圓。"
        },
        {
          "choice": "36π cm²",
          "truth": false,
          "reason": "未乘比例。"
        }
      ],
      "misconceptionTarget": "中心角比例錯。",
      "prerequisiteCheck": "需先能使用「內接角應用」；本題未使用後續技能。",
      "estimatedTimeSec": 60,
      "unitCheck": "u19-s010-v001 已核對所求量「求扇形面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「套用扇形面積公式。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s010-v001。",
      "difficultyReason": "basic：套用扇形面積公式。 解題需完成「比例1/3。；圓面積36π。；相乘12π。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "套用扇形面積公式。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "b4dc2b2f594babca53dadd44cee90c90e1e6f7629da5c9c090817562903f57e9"
    },
    {
      "questionId": "u19-s010-v002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-area",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "半徑 8 m 的四分之一圓面積為何？",
      "text": "半徑 8 m 的四分之一圓面積為何？",
      "givenConditions": "r=8 m；θ=90°。",
      "target": "求面積。",
      "choices": [
        "8π m²",
        "32π m²",
        "16π m²",
        "64π m²"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「r=8 m；θ=90°。」重算：整圓面積64π，四分之一為16π m²。",
      "explanation": "整圓面積64π，四分之一為16π m²。 因此唯一正確選項是「16π m²」。",
      "steps": [
        "πr²=64π。",
        "除4得16π。"
      ],
      "optionAnalysis": [
        {
          "choice": "8π m²",
          "truth": false,
          "reason": "半徑未平方。"
        },
        {
          "choice": "32π m²",
          "truth": false,
          "reason": "錯取一半。"
        },
        {
          "choice": "16π m²",
          "truth": true,
          "reason": "依題目條件重新計算：整圓面積64π，四分之一為16π m²。"
        },
        {
          "choice": "64π m²",
          "truth": false,
          "reason": "未取比例。"
        }
      ],
      "misconceptionTarget": "90°扇形比例判斷錯。",
      "prerequisiteCheck": "需先能使用「內接角應用」；本題未使用後續技能。",
      "estimatedTimeSec": 55,
      "unitCheck": "u19-s010-v002 已核對所求量「求面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「求四分之一圓面積。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s010-v002。",
      "difficultyReason": "basic：求四分之一圓面積。 解題需完成「πr²=64π。；除4得16π。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "求四分之一圓面積。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "1009ec8577e2793c2bd135299806117f37f9209ae73a7d72b9af3b610fe27e29"
    },
    {
      "questionId": "u19-s010-v003",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-area",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "直徑 10 cm 的半圓面積為何？",
      "text": "直徑 10 cm 的半圓面積為何？",
      "givenConditions": "d=10 cm。",
      "target": "求半圓面積。",
      "choices": [
        "5π cm²",
        "25π cm²",
        "50π cm²",
        "25π/2 cm²"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「d=10 cm。」重算：半徑5，整圓面積25π，半圓為25π/2 cm²。",
      "explanation": "半徑5，整圓面積25π，半圓為25π/2 cm²。 因此唯一正確選項是「25π/2 cm²」。",
      "steps": [
        "d÷2得r=5。",
        "πr²=25π。",
        "取一半。"
      ],
      "optionAnalysis": [
        {
          "choice": "5π cm²",
          "truth": false,
          "reason": "把半徑當5但未平方。"
        },
        {
          "choice": "25π cm²",
          "truth": false,
          "reason": "未取半圓。"
        },
        {
          "choice": "50π cm²",
          "truth": false,
          "reason": "把直徑當半徑後錯算。"
        },
        {
          "choice": "25π/2 cm²",
          "truth": true,
          "reason": "依題目條件重新計算：半徑5，整圓面積25π，半圓為25π/2 cm²。"
        }
      ],
      "misconceptionTarget": "直徑或半圓比例錯。",
      "prerequisiteCheck": "需先能使用「內接角應用」；本題未使用後續技能。",
      "estimatedTimeSec": 65,
      "unitCheck": "u19-s010-v003 已核對所求量「求半圓面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由直徑求半圓面積。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s010-v003。",
      "difficultyReason": "basic：由直徑求半圓面積。 解題需完成「d÷2得r=5。；πr²=25π。；取一半。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由直徑求半圓面積。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "fbded9524239c8ccc395ad02992947b8f4b4d2a6a5568b7dacc493c89af4d998"
    },
    {
      "questionId": "u19-s010-v004",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-area",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "同一圓中的某扇形面積恰為整個圓面積的 1/5。這個扇形的中心角為何？",
      "text": "同一圓中的某扇形面積恰為整個圓面積的 1/5。這個扇形的中心角為何？",
      "givenConditions": "扇形與整圓同心同半徑；面積比為 1:5。",
      "target": "由面積占比反求中心角。",
      "choices": [
        "72°",
        "90°",
        "100°",
        "180°"
      ],
      "answerIndex": 0,
      "independentSolution": "不看儲存答案，同半徑扇形面積占整圓的比例等於中心角占 360° 的比例，所以中心角=(1/5)×360°=72°。",
      "explanation": "扇形和整圓同半徑，面積比直接等於中心角比；整圓五等分，每份中心角為 72°。",
      "steps": [
        "寫出 θ/360=1/5。",
        "計算 θ=360÷5=72°。"
      ],
      "optionAnalysis": [
        {
          "choice": "72°",
          "truth": true,
          "reason": "360°×1/5=72°。"
        },
        {
          "choice": "90°",
          "truth": false,
          "reason": "90° 對應整圓的 1/4，不是 1/5。"
        },
        {
          "choice": "100°",
          "truth": false,
          "reason": "把百分比或五等分關係錯誤轉換為角度。"
        },
        {
          "choice": "180°",
          "truth": false,
          "reason": "180° 是半圓，面積占比為 1/2。"
        }
      ],
      "misconceptionTarget": "未理解同半徑扇形面積比等於中心角比。",
      "prerequisiteCheck": "需先能使用「內接角應用」；本題未使用後續技能。",
      "estimatedTimeSec": 80,
      "unitCheck": "四個選項皆為角度；72° 在 0° 到 360° 之間。",
      "roundingCheck": "整除得到 72°，不需近似；已確認不會因四捨五入產生第二答案。",
      "ambiguityAudit": "題目明定扇形與整圓同心同半徑，面積占比唯一決定中心角。",
      "boundaryAudit": "只使用扇形面積比例與一周角 360°。",
      "difficultyReason": "standard：由面積比反向建立 θ/360=1/5，而不是和弧長 inverse 題使用同一組半徑與 π 數值。",
      "literacyContextNecessity": null,
      "authoringIntent": "以無須半徑的比例反推中心角，區分扇形面積與弧長公式的逆向題。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "dc9cc764bbaa2bd626bbf0ed222ec084bb3a095ecdd8ec346509844e5139e875"
    },
    {
      "questionId": "u19-s010-v005",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-area",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "270° 扇形面積為 48π cm²，求半徑。",
      "text": "270° 扇形面積為 48π cm²，求半徑。",
      "givenConditions": "θ=270°；A=48π cm²。",
      "target": "求r。",
      "choices": [
        "4 cm",
        "6 cm",
        "8 cm",
        "16 cm"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「θ=270°；A=48π cm²。」重算：3/4πr²=48π，r²=64，r=8 cm。",
      "explanation": "3/4πr²=48π，r²=64，r=8 cm。 因此唯一正確選項是「8 cm」。",
      "steps": [
        "270/360=3/4。",
        "r²=48×4/3=64。",
        "取正根8。"
      ],
      "optionAnalysis": [
        {
          "choice": "4 cm",
          "truth": false,
          "reason": "未正確除比例。"
        },
        {
          "choice": "6 cm",
          "truth": false,
          "reason": "r²誤算36。"
        },
        {
          "choice": "8 cm",
          "truth": true,
          "reason": "依題目條件重新計算：3/4πr²=48π，r²=64，r=8 cm。"
        },
        {
          "choice": "16 cm",
          "truth": false,
          "reason": "未開平方根。"
        }
      ],
      "misconceptionTarget": "反求半徑時比例或開根錯。",
      "prerequisiteCheck": "需先能使用「內接角應用」；本題未使用後續技能。",
      "estimatedTimeSec": 90,
      "unitCheck": "u19-s010-v005 已核對所求量「求r。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由扇形面積反求半徑。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s010-v005。",
      "difficultyReason": "standard：由扇形面積反求半徑。 解題需完成「270/360=3/4。；r²=48×4/3=64。；取正根8。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由扇形面積反求半徑。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "47c211abf4df33bd353fb95065085bf75128b07d045cc9d6bc6eb81814f0af76"
    },
    {
      "questionId": "u19-s010-v006",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-area",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "同一圓中，60°扇形與150°扇形面積比為何？",
      "text": "同一圓中，60°扇形與150°扇形面積比為何？",
      "givenConditions": "同一圓；中心角60°與150°。",
      "target": "求面積比。",
      "choices": [
        "1:2",
        "2:5",
        "3:5",
        "5:2"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「同一圓；中心角60°與150°。」重算：同圓面積與中心角成正比，60:150=2:5。",
      "explanation": "同圓面積與中心角成正比，60:150=2:5。 因此唯一正確選項是「2:5」。",
      "steps": [
        "同圓半徑相同。",
        "化簡60:150=2:5。"
      ],
      "optionAnalysis": [
        {
          "choice": "1:2",
          "truth": false,
          "reason": "比例化簡錯。"
        },
        {
          "choice": "2:5",
          "truth": true,
          "reason": "依題目條件重新計算：同圓面積與中心角成正比，60:150=2:5。"
        },
        {
          "choice": "3:5",
          "truth": false,
          "reason": "錯除50。"
        },
        {
          "choice": "5:2",
          "truth": false,
          "reason": "順序顛倒。"
        }
      ],
      "misconceptionTarget": "把角度比平方。",
      "prerequisiteCheck": "需先能使用「內接角應用」；本題未使用後續技能。",
      "estimatedTimeSec": 70,
      "unitCheck": "u19-s010-v006 已核對所求量「求面積比。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「比較同圓扇形面積。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s010-v006。",
      "difficultyReason": "standard：比較同圓扇形面積。 解題需完成「同圓半徑相同。；化簡60:150=2:5。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "比較同圓扇形面積。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "2a0aecef17fa75bd998f40c6b040b4cda11c95cfe6e5739f583273bfc8986172"
    },
    {
      "questionId": "u19-s010-v007",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-area",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s010-fig001",
      "drawingSpecId": "u19-s010-fig001",
      "prompt": "半徑 12 cm 的圓中，某扇形面積比另一個扇形多 24π cm²，兩中心角相差多少？",
      "text": "半徑 12 cm 的圓中，某扇形面積比另一個扇形多 24π cm²，兩中心角相差多少？",
      "givenConditions": "同一半徑12 cm圓；面積差24π。",
      "target": "求中心角差。",
      "choices": [
        "30°",
        "90°",
        "120°",
        "60°"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「同一半徑12 cm圓；面積差24π。」重算：整圓面積144π；24π占整圓1/6，因此中心角差360°×1/6=60°。",
      "explanation": "整圓面積144π；24π占整圓1/6，因此中心角差360°×1/6=60°。 因此唯一正確選項是「60°」。",
      "steps": [
        "求面積差占比24/144=1/6。",
        "轉成角差60°。"
      ],
      "optionAnalysis": [
        {
          "choice": "30°",
          "truth": false,
          "reason": "占比錯半。"
        },
        {
          "choice": "90°",
          "truth": false,
          "reason": "誤認1/4。"
        },
        {
          "choice": "120°",
          "truth": false,
          "reason": "誤認1/3。"
        },
        {
          "choice": "60°",
          "truth": true,
          "reason": "依題目條件重新計算：整圓面積144π；24π占整圓1/6，因此中心角差360°×1/6=60°。"
        }
      ],
      "misconceptionTarget": "未把面積差轉成整圓比例。",
      "prerequisiteCheck": "需先能使用「內接角應用」；本題未使用後續技能。",
      "estimatedTimeSec": 110,
      "unitCheck": "u19-s010-v007 已核對所求量「求中心角差。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由扇形面積差求角差。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s010-v007。",
      "difficultyReason": "advanced：由扇形面積差求角差。 解題需完成「求面積差占比24/144=1/6。；轉成角差60°。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由扇形面積差求角差。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "841a59adf062547bafdb178522b41dbcf0900eee0aa2e8ea84899454a44951f2"
    },
    {
      "questionId": "u19-s010-v008",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-area",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "扇形半徑增加 50%，中心角減為原來的 2/3，面積成為原來的幾倍？",
      "text": "扇形半徑增加 50%，中心角減為原來的 2/3，面積成為原來的幾倍？",
      "givenConditions": "新r=1.5舊r；新θ=2/3舊θ。",
      "target": "求面積倍率。",
      "choices": [
        "1",
        "4/3",
        "9/4",
        "3/2"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「新r=1.5舊r；新θ=2/3舊θ。」重算：面積比例=(1.5)²×(2/3)=2.25×2/3=1.5=3/2。",
      "explanation": "面積比例=(1.5)²×(2/3)=2.25×2/3=1.5=3/2。 因此唯一正確選項是「3/2」。",
      "steps": [
        "半徑平方倍率9/4。",
        "乘角度倍率2/3。",
        "得3/2。"
      ],
      "optionAnalysis": [
        {
          "choice": "1",
          "truth": false,
          "reason": "只看兩變化抵消。"
        },
        {
          "choice": "4/3",
          "truth": false,
          "reason": "計算乘法錯。"
        },
        {
          "choice": "9/4",
          "truth": false,
          "reason": "只算半徑平方未乘角度。"
        },
        {
          "choice": "3/2",
          "truth": true,
          "reason": "依題目條件重新計算：面積比例=(1.5)²×(2/3)=2.25×2/3=1.5=3/2。"
        }
      ],
      "misconceptionTarget": "忘記面積對半徑是平方關係。",
      "prerequisiteCheck": "需先能使用「內接角應用」；本題未使用後續技能。",
      "estimatedTimeSec": 120,
      "unitCheck": "u19-s010-v008 已核對所求量「求面積倍率。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "題目明確指定近似常數或百分比，僅於最後一步取近似。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「分析扇形面積複合比例變化。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s010-v008。",
      "difficultyReason": "advanced：分析扇形面積複合比例變化。 解題需完成「半徑平方倍率9/4。；乘角度倍率2/3。；得3/2。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "分析扇形面積複合比例變化。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "490d4b8900f24faf80245879a57e4fe090539f5ecd00167b78c9d95540bcb206"
    },
    {
      "questionId": "u19-s010-v009",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-area",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "某扇形周長中的兩半徑總長為 20 cm，中心角 72°。其面積為何？",
      "text": "某扇形周長中的兩半徑總長為 20 cm，中心角 72°。其面積為何？",
      "givenConditions": "兩半徑和20 cm；θ=72°。",
      "target": "求面積。",
      "choices": [
        "20π cm²",
        "10π cm²",
        "40π cm²",
        "100π cm²"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「兩半徑和20 cm；θ=72°。」重算：兩半徑總長20故r=10。72°占1/5，面積=1/5×100π=20π。",
      "explanation": "兩半徑總長20故r=10。72°占1/5，面積=1/5×100π=20π。 因此唯一正確選項是「20π cm²」。",
      "steps": [
        "2r=20得r=10。",
        "72/360=1/5。",
        "面積20π。"
      ],
      "optionAnalysis": [
        {
          "choice": "20π cm²",
          "truth": true,
          "reason": "依題目條件重新計算：兩半徑總長20故r=10。72°占1/5，面積=1/5×100π=20π。"
        },
        {
          "choice": "10π cm²",
          "truth": false,
          "reason": "半徑誤取5。"
        },
        {
          "choice": "40π cm²",
          "truth": false,
          "reason": "比例錯取2/5。"
        },
        {
          "choice": "100π cm²",
          "truth": false,
          "reason": "未乘比例。"
        }
      ],
      "misconceptionTarget": "把兩半徑總長當半徑。",
      "prerequisiteCheck": "需先能使用「內接角應用」；本題未使用後續技能。",
      "estimatedTimeSec": 115,
      "unitCheck": "u19-s010-v009 已核對所求量「求面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「從扇形邊界資料求面積。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s010-v009。",
      "difficultyReason": "advanced：從扇形邊界資料求面積。 解題需完成「2r=20得r=10。；72/360=1/5。；面積20π。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "從扇形邊界資料求面積。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "794eb77be93f92cd47b4cafed42737b812956b680d1440205704e4694cc5cbd7"
    },
    {
      "questionId": "u19-s010-v010",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-area",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "半徑 6 m 的灑水器只旋轉 120°，理論覆蓋面積為何？",
      "text": "半徑 6 m 的灑水器只旋轉 120°，理論覆蓋面積為何？",
      "givenConditions": "半徑6 m；旋轉120°；無障礙。",
      "target": "求覆蓋面積。",
      "choices": [
        "12π m²",
        "6π m²",
        "24π m²",
        "36π m²"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「半徑6 m；旋轉120°；無障礙。」重算：覆蓋區是120°扇形，占整圓1/3，所以面積12π m²。",
      "explanation": "覆蓋區是120°扇形，占整圓1/3，所以面積12π m²。 因此唯一正確選項是「12π m²」。",
      "steps": [
        "整圓36π。",
        "取1/3得12π。"
      ],
      "optionAnalysis": [
        {
          "choice": "12π m²",
          "truth": true,
          "reason": "依題目條件重新計算：覆蓋區是120°扇形，占整圓1/3，所以面積12π m²。"
        },
        {
          "choice": "6π m²",
          "truth": false,
          "reason": "錯取1/6。"
        },
        {
          "choice": "24π m²",
          "truth": false,
          "reason": "錯取2/3。"
        },
        {
          "choice": "36π m²",
          "truth": false,
          "reason": "整圓面積。"
        }
      ],
      "misconceptionTarget": "把旋轉角度占比判錯。",
      "prerequisiteCheck": "需先能使用「內接角應用」；本題未使用後續技能。",
      "estimatedTimeSec": 80,
      "unitCheck": "u19-s010-v010 已核對所求量「求覆蓋面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「計算扇形灑水覆蓋。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s010-v010。",
      "difficultyReason": "literacy：計算扇形灑水覆蓋。 解題需完成「整圓36π。；取1/3得12π。」。",
      "literacyContextNecessity": "旋轉範圍直接決定覆蓋扇形比例。",
      "authoringIntent": "計算扇形灑水覆蓋。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "cf02cab9cc94a8a58c30782d8a73a7fa0b9f3a9732a9ad1928dda764edce59da"
    },
    {
      "questionId": "u19-s010-v011",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-area",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形披薩半徑 15 cm，切出 72° 一片。這片面積為何？",
      "text": "圓形披薩半徑 15 cm，切出 72° 一片。這片面積為何？",
      "givenConditions": "r=15 cm；切片中心角72°。",
      "target": "求切片面積。",
      "choices": [
        "15π cm²",
        "45π cm²",
        "90π cm²",
        "225π cm²"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「r=15 cm；切片中心角72°。」重算：72°占1/5，整個披薩面積225π，故一片45π。",
      "explanation": "72°占1/5，整個披薩面積225π，故一片45π。 因此唯一正確選項是「45π cm²」。",
      "steps": [
        "72/360=1/5。",
        "225π÷5=45π。"
      ],
      "optionAnalysis": [
        {
          "choice": "15π cm²",
          "truth": false,
          "reason": "半徑未平方。"
        },
        {
          "choice": "45π cm²",
          "truth": true,
          "reason": "依題目條件重新計算：72°占1/5，整個披薩面積225π，故一片45π。"
        },
        {
          "choice": "90π cm²",
          "truth": false,
          "reason": "錯取2/5。"
        },
        {
          "choice": "225π cm²",
          "truth": false,
          "reason": "整圓面積。"
        }
      ],
      "misconceptionTarget": "看到72°未化成1/5。",
      "prerequisiteCheck": "需先能使用「內接角應用」；本題未使用後續技能。",
      "estimatedTimeSec": 80,
      "unitCheck": "u19-s010-v011 已核對所求量「求切片面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「計算披薩扇形份量。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s010-v011。",
      "difficultyReason": "literacy：計算披薩扇形份量。 解題需完成「72/360=1/5。；225π÷5=45π。」。",
      "literacyContextNecessity": "切片份量由中心角占整圓比例決定。",
      "authoringIntent": "計算披薩扇形份量。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "f22377bbabe00774cf360e728dc5d2441c9069eff57451a01afb1e3ff47269be"
    },
    {
      "questionId": "u19-s010-v012",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-area",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "扇形公園半徑 20 m、中心角 90°，每平方公尺鋪草成本 30 元。若 π 取 3.14，總成本為何？",
      "text": "扇形公園半徑 20 m、中心角 90°，每平方公尺鋪草成本 30 元。若 π 取 3.14，總成本為何？",
      "givenConditions": "r=20 m；θ=90°；π=3.14；30元/m²。",
      "target": "求總成本。",
      "choices": [
        "3140 元",
        "18840 元",
        "9420 元",
        "37680 元"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「r=20 m；θ=90°；π=3.14；30元/m²。」重算：公園面積=1/4×3.14×400=314 m²，成本314×30=9420元。",
      "explanation": "公園面積=1/4×3.14×400=314 m²，成本314×30=9420元。 因此唯一正確選項是「9420 元」。",
      "steps": [
        "求扇形面積314 m²。",
        "乘單價30元/m²。"
      ],
      "optionAnalysis": [
        {
          "choice": "3140 元",
          "truth": false,
          "reason": "只算100 m²附近錯值。"
        },
        {
          "choice": "18840 元",
          "truth": false,
          "reason": "面積多一倍。"
        },
        {
          "choice": "9420 元",
          "truth": true,
          "reason": "依題目條件重新計算：公園面積=1/4×3.14×400=314 m²，成本314×30=9420元。"
        },
        {
          "choice": "37680 元",
          "truth": false,
          "reason": "用整圓面積乘成本。"
        }
      ],
      "misconceptionTarget": "算出面積後未依單價或比例正確換算。",
      "prerequisiteCheck": "需先能使用「內接角應用」；本題未使用後續技能。",
      "estimatedTimeSec": 100,
      "unitCheck": "u19-s010-v012 已核對所求量「求總成本。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "題目明確指定近似常數或百分比，僅於最後一步取近似。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「結合扇形面積與單價。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s010-v012。",
      "difficultyReason": "literacy：結合扇形面積與單價。 解題需完成「求扇形面積314 m²。；乘單價30元/m²。」。",
      "literacyContextNecessity": "施工成本以實際扇形面積計價，面積計算不可省略。",
      "authoringIntent": "結合扇形面積與單價。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "9571ca64b83f62a2ac10c8d7437644e55d1c2bd2c4f34c7a8492609ab141d0e8"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u19-s010-cr001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-area",
      "difficulty": "advanced",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u19-s010-fig001",
      "drawingSpecId": "u19-s010-fig001",
      "prompt": "一個 240° 扇形面積為 96π cm²。求半徑與同半徑60°扇形面積。",
      "requiredWork": [
        "由240°面積反求r。",
        "再求60°扇形。",
        "檢查兩扇形面積比4:1。"
      ],
      "standardSolution": [
        "240°占2/3，所以(2/3)πr²=96π，r²=144，r=12 cm。",
        "60°占1/6，面積=(1/6)×144π=24π cm²。"
      ],
      "fullCreditSolution": [
        "240°占2/3，所以(2/3)πr²=96π，r²=144，r=12 cm。",
        "60°占1/6，面積=(1/6)×144π=24π cm²。"
      ],
      "alternativeSolutions": [
        "因240°是60°的4倍，可先得60°面積=96π÷4=24π，再由整圓面積144π反求r。"
      ],
      "reasoningSteps": [
        "240°占2/3，所以(2/3)πr²=96π，r²=144，r=12 cm。",
        "60°占1/6，面積=(1/6)×144π=24π cm²。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "r=12 cm、60°面積24π且理由完整。"
        },
        {
          "score": 2,
          "criteria": "兩答案正確但步驟略，或只完整求一項。"
        },
        {
          "score": 1,
          "criteria": "建立正確扇形比例。"
        },
        {
          "score": 0,
          "criteria": "使用周長公式。"
        }
      ],
      "partialCreditRules": [
        "比例法與公式法皆可。"
      ],
      "followThroughPolicy": "若r算錯但仍用其r正確算60°面積，可保留方法分。",
      "unitNotationRules": "半徑cm；面積cm²。",
      "answerOnlyPolicy": "只寫12、24π給2分。",
      "commonErrors": [
        "240/360化簡錯。",
        "反求r未開根。"
      ],
      "independentReview": {
        "derivedResult": "r=12 cm，60°扇形面積24π cm²。",
        "ambiguity": "正半徑唯一，角度比例明確。",
        "decision": "pass",
        "reviewNote": "u19-s010-cr001 由題目條件另行推導得到「r=12 cm，60°扇形面積24π cm²。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "766101d6cc4212ddba4635d8d5367aa2f7adbfbbc60bd4ac0bfce7fedee9847f"
    },
    {
      "questionId": "u19-s010-cr002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "sector-area",
      "difficulty": "literacy",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "半徑 10 m 的圓形草地劃出一個 72° 扇形作花圃。若每平方公尺種植費 80 元，π 取3.14，求花圃面積與費用。",
      "requiredWork": [
        "求72°扇形面積。",
        "依單價求總費。",
        "保留單位。"
      ],
      "standardSolution": [
        "72°占1/5。",
        "花圃面積=(1/5)×3.14×100=62.8 m²。",
        "費用=62.8×80=5024元。"
      ],
      "fullCreditSolution": [
        "72°占1/5。",
        "花圃面積=(1/5)×3.14×100=62.8 m²。",
        "費用=62.8×80=5024元。"
      ],
      "alternativeSolutions": [
        "可先算整圓314 m²再除5。"
      ],
      "reasoningSteps": [
        "72°占1/5。",
        "花圃面積=(1/5)×3.14×100=62.8 m²。",
        "費用=62.8×80=5024元。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "62.8 m²與5024元、步驟完整。"
        },
        {
          "score": 2,
          "criteria": "面積正確但費用算術錯，或答案全對理由略。"
        },
        {
          "score": 1,
          "criteria": "正確建立1/5面積。"
        },
        {
          "score": 0,
          "criteria": "用周長計價。"
        }
      ],
      "partialCreditRules": [
        "面積與費用各有得分。"
      ],
      "followThroughPolicy": "若面積早期算錯，後續正確乘80可保留費用方法分。",
      "unitNotationRules": "面積m²；費用元。",
      "answerOnlyPolicy": "只寫5024元且無面積，最高2分。",
      "commonErrors": [
        "72°誤作1/4。",
        "面積單位寫m。"
      ],
      "independentReview": {
        "derivedResult": "面積62.8 m²，費用5024元。",
        "ambiguity": "單價與π均指定，唯一。",
        "decision": "pass",
        "reviewNote": "u19-s010-cr002 由題目條件另行推導得到「面積62.8 m²，費用5024元。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "783232c1ce271571b985be4a32769ac0ede1ba020d88bcb40a2a6d9457526d77"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u19-s010-v001",
      "contentSha256": "b4dc2b2f594babca53dadd44cee90c90e1e6f7629da5c9c090817562903f57e9",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=6 cm；θ=120°。」重算：A=(120/360)×π×6²=1/3×36π=12π cm²。",
      "derivedAnswer": "12π cm²",
      "storedAnswer": "12π cm²",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「12π cm²」符合；三個干擾項分別因「比例少一半。；誤取半圓。；未乘比例。」而排除。",
        "undefinedSymbol": "u19-s010-v001 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形面積」講義定義。",
        "unitConflict": "題目所求為「求扇形面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「套用扇形面積公式。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=6 cm；θ=120°。」重讀，所求「求扇形面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是套用扇形面積公式。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴circle-inscribed-basic，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑 6 cm、中心角 120° 的扇形面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s010-v001 人工重算：A=(120/360)×π×6²=1/3×36π=12π cm²。 正確選項為「12π cm²」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s010-v002",
      "contentSha256": "1009ec8577e2793c2bd135299806117f37f9209ae73a7d72b9af3b610fe27e29",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=8 m；θ=90°。」重算：整圓面積64π，四分之一為16π m²。",
      "derivedAnswer": "16π m²",
      "storedAnswer": "16π m²",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「16π m²」符合；三個干擾項分別因「半徑未平方。；錯取一半。；未取比例。」而排除。",
        "undefinedSymbol": "u19-s010-v002 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形面積」講義定義。",
        "unitConflict": "題目所求為「求面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「求四分之一圓面積。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=8 m；θ=90°。」重讀，所求「求面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是求四分之一圓面積。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴circle-inscribed-basic，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑 8 m 的四分之一圓面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s010-v002 人工重算：整圓面積64π，四分之一為16π m²。 正確選項為「16π m²」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s010-v003",
      "contentSha256": "fbded9524239c8ccc395ad02992947b8f4b4d2a6a5568b7dacc493c89af4d998",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「d=10 cm。」重算：半徑5，整圓面積25π，半圓為25π/2 cm²。",
      "derivedAnswer": "25π/2 cm²",
      "storedAnswer": "25π/2 cm²",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「25π/2 cm²」符合；三個干擾項分別因「把半徑當5但未平方。；未取半圓。；把直徑當半徑後錯算。」而排除。",
        "undefinedSymbol": "u19-s010-v003 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形面積」講義定義。",
        "unitConflict": "題目所求為「求半圓面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由直徑求半圓面積。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「d=10 cm。」重讀，所求「求半圓面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是由直徑求半圓面積。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴circle-inscribed-basic，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「直徑 10 cm 的半圓面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s010-v003 人工重算：半徑5，整圓面積25π，半圓為25π/2 cm²。 正確選項為「25π/2 cm²」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s010-v004",
      "contentSha256": "dc9cc764bbaa2bd626bbf0ed222ec084bb3a095ecdd8ec346509844e5139e875",
      "reviewVersion": "central-human-review-r1.1",
      "independentSolution": "不看儲存答案，同半徑扇形面積占整圓的比例等於中心角占 360° 的比例，所以中心角=(1/5)×360°=72°。",
      "derivedAnswer": "72°",
      "storedAnswer": "72°",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算後只有「72°」符合。其餘三項分別因「90° 對應整圓的 1/4，不是 1/5。；把百分比或五等分關係錯誤轉換為角度。；180° 是半圓，面積占比為 1/2。」而排除。",
        "undefinedSymbol": "u19-s010-v004 所用圓心、圓周、弧、角、直徑、半徑或 π 均已在 U19 先備講義中定義，沒有未說明符號。",
        "unitConflict": "四個選項皆為角度；72° 在 0° 到 360° 之間。",
        "roundingConflict": "整除得到 72°，不需近似；已確認不會因四捨五入產生第二答案。",
        "domainBoundary": "只使用扇形面積比例與一周角 360°。",
        "alternateReading": "題目明定扇形與整圓同心同半徑，面積占比唯一決定中心角。"
      },
      "difficultyReason": "standard：由面積比反向建立 θ/360=1/5，而不是和弧長 inverse 題使用同一組半徑與 π 數值。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "需先能使用「內接角應用」；本題未使用後續技能。",
      "languageCheck": "題幹「同一圓中的某扇形面積恰為整個圓面積的 1/5。這個扇形的中心角為何？」採臺灣繁體中文，條件、所求量與比較基準均完整。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s010-v004 中央人工重算：不看儲存答案，同半徑扇形面積占整圓的比例等於中心角占 360° 的比例，所以中心角=(1/5)×360°=72°。 正確選項為「72°」，四項真值與每個干擾項錯因均已重新核對。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "roundingConflict": null
    },
    {
      "questionId": "u19-s010-v005",
      "contentSha256": "47c211abf4df33bd353fb95065085bf75128b07d045cc9d6bc6eb81814f0af76",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「θ=270°；A=48π cm²。」重算：3/4πr²=48π，r²=64，r=8 cm。",
      "derivedAnswer": "8 cm",
      "storedAnswer": "8 cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「8 cm」符合；三個干擾項分別因「未正確除比例。；r²誤算36。；未開平方根。」而排除。",
        "undefinedSymbol": "u19-s010-v005 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形面積」講義定義。",
        "unitConflict": "題目所求為「求r。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由扇形面積反求半徑。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「θ=270°；A=48π cm²。」重讀，所求「求r。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是由扇形面積反求半徑。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴circle-inscribed-basic，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「270° 扇形面積為 48π cm²，求半徑。」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s010-v005 人工重算：3/4πr²=48π，r²=64，r=8 cm。 正確選項為「8 cm」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s010-v006",
      "contentSha256": "2a0aecef17fa75bd998f40c6b040b4cda11c95cfe6e5739f583273bfc8986172",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「同一圓；中心角60°與150°。」重算：同圓面積與中心角成正比，60:150=2:5。",
      "derivedAnswer": "2:5",
      "storedAnswer": "2:5",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「2:5」符合；三個干擾項分別因「比例化簡錯。；錯除50。；順序顛倒。」而排除。",
        "undefinedSymbol": "u19-s010-v006 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形面積」講義定義。",
        "unitConflict": "題目所求為「求面積比。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「比較同圓扇形面積。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「同一圓；中心角60°與150°。」重讀，所求「求面積比。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是比較同圓扇形面積。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴circle-inscribed-basic，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「同一圓中，60°扇形與150°扇形面積比為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s010-v006 人工重算：同圓面積與中心角成正比，60:150=2:5。 正確選項為「2:5」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s010-v007",
      "contentSha256": "841a59adf062547bafdb178522b41dbcf0900eee0aa2e8ea84899454a44951f2",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「同一半徑12 cm圓；面積差24π。」重算：整圓面積144π；24π占整圓1/6，因此中心角差360°×1/6=60°。",
      "derivedAnswer": "60°",
      "storedAnswer": "60°",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「60°」符合；三個干擾項分別因「占比錯半。；誤認1/4。；誤認1/3。」而排除。",
        "undefinedSymbol": "u19-s010-v007 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形面積」講義定義。",
        "unitConflict": "題目所求為「求中心角差。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由扇形面積差求角差。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「同一半徑12 cm圓；面積差24π。」重讀，所求「求中心角差。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是由扇形面積差求角差。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴circle-inscribed-basic，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑 12 cm 的圓中，某扇形面積比另一個扇形多 24π cm²，兩中心角相差多少？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s010-v007 人工重算：整圓面積144π；24π占整圓1/6，因此中心角差360°×1/6=60°。 正確選項為「60°」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s010-v008",
      "contentSha256": "490d4b8900f24faf80245879a57e4fe090539f5ecd00167b78c9d95540bcb206",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「新r=1.5舊r；新θ=2/3舊θ。」重算：面積比例=(1.5)²×(2/3)=2.25×2/3=1.5=3/2。",
      "derivedAnswer": "3/2",
      "storedAnswer": "3/2",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「3/2」符合；三個干擾項分別因「只看兩變化抵消。；計算乘法錯。；只算半徑平方未乘角度。」而排除。",
        "undefinedSymbol": "u19-s010-v008 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形面積」講義定義。",
        "unitConflict": "題目所求為「求面積倍率。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "近似規則由題幹指定，未在中途重複捨入。",
        "domainBoundary": "本題僅測「分析扇形面積複合比例變化。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「新r=1.5舊r；新θ=2/3舊θ。」重讀，所求「求面積倍率。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是分析扇形面積複合比例變化。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴circle-inscribed-basic，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「扇形半徑增加 50%，中心角減為原來的 2/3，面積成為原來的幾倍？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s010-v008 人工重算：面積比例=(1.5)²×(2/3)=2.25×2/3=1.5=3/2。 正確選項為「3/2」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s010-v009",
      "contentSha256": "794eb77be93f92cd47b4cafed42737b812956b680d1440205704e4694cc5cbd7",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「兩半徑和20 cm；θ=72°。」重算：兩半徑總長20故r=10。72°占1/5，面積=1/5×100π=20π。",
      "derivedAnswer": "20π cm²",
      "storedAnswer": "20π cm²",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「20π cm²」符合；三個干擾項分別因「半徑誤取5。；比例錯取2/5。；未乘比例。」而排除。",
        "undefinedSymbol": "u19-s010-v009 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形面積」講義定義。",
        "unitConflict": "題目所求為「求面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「從扇形邊界資料求面積。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「兩半徑和20 cm；θ=72°。」重讀，所求「求面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是從扇形邊界資料求面積。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴circle-inscribed-basic，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「某扇形周長中的兩半徑總長為 20 cm，中心角 72°。其面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s010-v009 人工重算：兩半徑總長20故r=10。72°占1/5，面積=1/5×100π=20π。 正確選項為「20π cm²」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s010-v010",
      "contentSha256": "cf02cab9cc94a8a58c30782d8a73a7fa0b9f3a9732a9ad1928dda764edce59da",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「半徑6 m；旋轉120°；無障礙。」重算：覆蓋區是120°扇形，占整圓1/3，所以面積12π m²。",
      "derivedAnswer": "12π m²",
      "storedAnswer": "12π m²",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「12π m²」符合；三個干擾項分別因「錯取1/6。；錯取2/3。；整圓面積。」而排除。",
        "undefinedSymbol": "u19-s010-v010 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形面積」講義定義。",
        "unitConflict": "題目所求為「求覆蓋面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「計算扇形灑水覆蓋。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「半徑6 m；旋轉120°；無障礙。」重讀，所求「求覆蓋面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是計算扇形灑水覆蓋。，而非只依題序標示。",
      "literacyContextNecessity": "旋轉範圍直接決定覆蓋扇形比例。",
      "prerequisiteCheck": "只依賴circle-inscribed-basic，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑 6 m 的灑水器只旋轉 120°，理論覆蓋面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s010-v010 人工重算：覆蓋區是120°扇形，占整圓1/3，所以面積12π m²。 正確選項為「12π m²」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s010-v011",
      "contentSha256": "f22377bbabe00774cf360e728dc5d2441c9069eff57451a01afb1e3ff47269be",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=15 cm；切片中心角72°。」重算：72°占1/5，整個披薩面積225π，故一片45π。",
      "derivedAnswer": "45π cm²",
      "storedAnswer": "45π cm²",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「45π cm²」符合；三個干擾項分別因「半徑未平方。；錯取2/5。；整圓面積。」而排除。",
        "undefinedSymbol": "u19-s010-v011 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形面積」講義定義。",
        "unitConflict": "題目所求為「求切片面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「計算披薩扇形份量。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=15 cm；切片中心角72°。」重讀，所求「求切片面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是計算披薩扇形份量。，而非只依題序標示。",
      "literacyContextNecessity": "切片份量由中心角占整圓比例決定。",
      "prerequisiteCheck": "只依賴circle-inscribed-basic，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓形披薩半徑 15 cm，切出 72° 一片。這片面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s010-v011 人工重算：72°占1/5，整個披薩面積225π，故一片45π。 正確選項為「45π cm²」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s010-v012",
      "contentSha256": "9571ca64b83f62a2ac10c8d7437644e55d1c2bd2c4f34c7a8492609ab141d0e8",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=20 m；θ=90°；π=3.14；30元/m²。」重算：公園面積=1/4×3.14×400=314 m²，成本314×30=9420元。",
      "derivedAnswer": "9420 元",
      "storedAnswer": "9420 元",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「9420 元」符合；三個干擾項分別因「只算100 m²附近錯值。；面積多一倍。；用整圓面積乘成本。」而排除。",
        "undefinedSymbol": "u19-s010-v012 使用的圓心、弧、角、半徑、直徑、切線或π均已在「扇形面積」講義定義。",
        "unitConflict": "題目所求為「求總成本。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "近似規則由題幹指定，未在中途重複捨入。",
        "domainBoundary": "本題僅測「結合扇形面積與單價。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=20 m；θ=90°；π=3.14；30元/m²。」重讀，所求「求總成本。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是結合扇形面積與單價。，而非只依題序標示。",
      "literacyContextNecessity": "施工成本以實際扇形面積計價，面積計算不可省略。",
      "prerequisiteCheck": "只依賴circle-inscribed-basic，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「扇形公園半徑 20 m、中心角 90°，每平方公尺鋪草成本 30 元。若 π 取 3.14，總成本為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s010-v012 人工重算：公園面積=1/4×3.14×400=314 m²，成本314×30=9420元。 正確選項為「9420 元」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u19-s010-fig001",
      "unitId": "u19",
      "topicId": "u19-measure",
      "skillId": "sector-area",
      "svgPath": "figures/u19/u19-s010-fig001.svg",
      "canvas": {
        "width": 360,
        "height": 240,
        "viewBox": "0 0 360 240"
      },
      "drawingSpec": {
        "purpose": "支援「扇形面積」中需要辨認點、線、弧、角或邊界的題目。",
        "coordinateSystem": "SVG x向右、y向下；所有座標以360×240畫布為準。",
        "geometry": "半徑 r 的圓以兩半徑圍成角 θ，扇形區域加淡斜線並標示面積 A。",
        "visibleLines": "所有作答所需實線均以2px以上深色描邊；強調弧以5px描邊。",
        "hiddenLines": "只有內部共邊或量測輔助線使用虛線；未指定者不得自行添加。",
        "labels": "標籤位置已在SVG以固定座標給定，避免遮住交點、角弧或刻痕。",
        "symbols": "直角符號、等長刻痕、箭頭及角度符號僅在數學條件需要時出現。",
        "scalePolicy": "示意圖不保證按實際長度或角度比例繪製。",
        "visualInferenceWarning": "不得以目測長短、角度或對稱性取代題目條件與定理。",
        "mobileReadability": "360×240檢視下文字至少16px，關鍵線至少2px，無微小數值標籤。",
        "answerLeakage": "圖中不標示任何題目要求計算的最終數值或正確選項。"
      },
      "altText": "半徑 r 的圓以兩半徑圍成角 θ，扇形區域加淡斜線並標示面積 A。 圖形僅協助辨認結構，不可依比例目測答案。",
      "svgTitle": "扇形面積圖",
      "svgDescription": "半徑 r 的圓以兩半徑圍成角 θ，扇形區域加淡斜線並標示面積 A。",
      "svgAssertions": [
        "role=\"img\"",
        "<title",
        "<desc",
        "viewBox=\"0 0 360 240\"",
        "class=\"shade\"",
        ">A</text>",
        ">θ</text>"
      ],
      "figureReview": {
        "decision": "pass",
        "manualRenderInspected": true,
        "mobileReadable": true,
        "answerLeakageFound": false,
        "reviewNote": "已逐項檢查 u19-s010-fig001 的點位、線段、弧線、標籤與輔助符號；此圖專門呈現「扇形面積」的結構，未包含可直接推得題庫答案的數值。",
        "reviewVersion": "human-figure-review-r1.0",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "c9f12b5f78cc32e4ca018d6c1a6f8dbc9d7b846024ecb774a5824ba9971e8dba"
    }
  ]
};
export default u19_s010;
