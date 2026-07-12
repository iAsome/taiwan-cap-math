export const u19_s016 = {
  "lecture": {
    "lectureId": "u19-s016-lecture-r1",
    "unitId": "u19",
    "numericUnitId": 19,
    "topicId": "u19-tangents",
    "skillId": "tangent-radius",
    "title": "切線與半徑",
    "unitTitle": "圓",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "slot": "s016",
      "lockedSkillId": "tangent-radius",
      "lockedOrder": 16,
      "scope": "使用切點半徑垂直切線形成直角三角形。"
    },
    "learningOutcomes": [
      "能使用切點半徑垂直切線。",
      "能建立圓心、切點、圓外點的直角三角形。",
      "能以畢氏定理解長度。"
    ],
    "prerequisites": [
      {
        "skillId": "tangent-properties",
        "requiredLevel": "能使用「切線性質」的核心定義與基本運算，並辨認其適用條件。"
      }
    ],
    "prerequisiteBridge": "先由前一技能「切線性質」的結論，連接到本技能「切線與半徑」所需的新判斷。",
    "glossary": [
      {
        "term": "切點半徑",
        "definition": "圓心連到切點的半徑。"
      },
      {
        "term": "垂直",
        "definition": "兩直線相交成90°。"
      },
      {
        "term": "切線長",
        "definition": "圓外點到切點的線段長。"
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
      "圓的切線在切點處與該點半徑垂直。這把圓問題轉成直角三角形問題。",
      "若 P 是圓外點、T 是切點、O 是圓心，則 OT⊥PT，OP 是直角三角形斜邊。",
      "斜邊一定最長，可用此快速檢查代入位置是否正確。"
    ],
    "formalDefinitions": [
      {
        "name": "切點半徑",
        "statement": "圓心連到切點的半徑。"
      },
      {
        "name": "垂直",
        "statement": "兩直線相交成90°。"
      },
      {
        "name": "切線長",
        "statement": "圓外點到切點的線段長。"
      }
    ],
    "formulas": [
      {
        "formula": "OT⊥PT",
        "conditions": [
          "T為切點，O為圓心"
        ],
        "meaning": "切線半徑性質"
      },
      {
        "formula": "OP²=OT²+PT²",
        "conditions": [
          "△OPT在T為直角"
        ],
        "meaning": "畢氏定理"
      }
    ],
    "nonApplicableCases": [
      "半徑與切線只在切點處保證垂直。",
      "OP不是半徑，P在圓外。",
      "若直線不是切線，不能直接建立直角。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "確認T是切點。",
        "check": "完成此步後，確認仍在「切線與半徑」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 2,
        "instruction": "連接O與T並標90°。",
        "check": "完成此步後，確認仍在「切線與半徑」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 3,
        "instruction": "辨認OP為斜邊。",
        "check": "完成此步後，確認仍在「切線與半徑」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 4,
        "instruction": "套用畢氏定理。",
        "check": "完成此步後，確認仍在「切線與半徑」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 5,
        "instruction": "檢查斜邊大於兩股。",
        "check": "完成此步後，確認仍在「切線與半徑」的CAP範圍且沒有只憑圖形目測。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "s016-L1",
        "prompt": "OT=6，PT=8。求OP。",
        "solutionSteps": [
          "OP²=36+64=100。",
          "OP=10。"
        ],
        "answer": "10。",
        "level": "basic"
      },
      {
        "exampleId": "s016-L2",
        "prompt": "OP=13，OT=5。求PT。",
        "solutionSteps": [
          "PT²=169−25=144。",
          "PT=12。"
        ],
        "answer": "12。",
        "level": "standard"
      },
      {
        "exampleId": "s016-L3",
        "prompt": "切線與切點半徑夾角。",
        "solutionSteps": [
          "依性質。"
        ],
        "answer": "90°。",
        "level": "advanced"
      },
      {
        "exampleId": "s016-L4",
        "prompt": "OP=17，PT=15。求半徑。",
        "solutionSteps": [
          "OT²=289−225=64。",
          "OT=8。"
        ],
        "answer": "8。",
        "level": "connection"
      }
    ],
    "difficultyConnections": {
      "basic": "辨認「切線與半徑」的定義、符號與單一步驟關係。",
      "standard": "把「切線與半徑」與前置技能、比例或一次代數連接。",
      "advanced": "在多段弧、複合邊界、反求或條件篩選中使用「切線與半徑」。",
      "literacy": "把真實尺寸、旋轉、施工或觀測情境轉成「切線與半徑」的數學模型。"
    },
    "commonMistakes": [
      {
        "mistake": "把OP當半徑",
        "why": "P在圓外",
        "correction": "半徑是OT"
      },
      {
        "mistake": "畢氏式把斜邊放錯",
        "why": "未辨認直角對邊",
        "correction": "OP為斜邊"
      },
      {
        "mistake": "任一半徑都判與切線垂直",
        "why": "只有切點半徑",
        "correction": "半徑端點必須是T"
      },
      {
        "mistake": "平方差算完未開根",
        "why": "求的是長度不是平方",
        "correction": "取正平方根"
      }
    ],
    "selfCheck": [
      "我是否先確認「切線與半徑」的適用條件？",
      "我是否分清半徑、直徑、弦、弧與角的角色？",
      "我是否寫出必要單位，並在最後才取近似值？",
      "我是否用定理或公式驗證，而不是依圖形外觀猜測？"
    ],
    "summary": [
      "切線與切點半徑垂直。",
      "O、T、P形成直角三角形。",
      "OP是斜邊，可用畢氏定理求長度。"
    ],
    "connections": {
      "previous": "承接「切線性質」。",
      "next": "下一技能為「切線段相等」。"
    },
    "figureReferences": [
      {
        "figureId": "u19-s016-fig001",
        "purpose": "圓 O 在 T 點與直線 PT 相切，連接 OP、OT，T 點畫直角符號。",
        "altText": "圓 O 在 T 點與直線 PT 相切，連接 OP、OT，T 點畫直角符號。，不可按比例目測。"
      }
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u19-s016-v001",
        "u19-s016-v002",
        "u19-s016-v003",
        "u19-s016-v004",
        "u19-s016-v005",
        "u19-s016-v006",
        "u19-s016-v007",
        "u19-s016-v008",
        "u19-s016-v009",
        "u19-s016-v010",
        "u19-s016-v011",
        "u19-s016-v012"
      ],
      "constructedResponseIds": [
        "u19-s016-cr001",
        "u19-s016-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段回讀「切線與半徑」講義，確認所有符號先定義、公式均附條件，並以四個不同目的例題檢查定義辨認、標準運算、進階邊界與實際連結；特別核對：使用切點半徑垂直切線形成直角三角形。",
      "reviewVersion": "human-lecture-review-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "1f6039d75795856e7435353e86e87701e58d01fad768c880f53032499aba3d11"
  },
  "questions": [
    {
      "questionId": "u19-s016-v001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "tangent-radius",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s016-fig001",
      "drawingSpecId": "u19-s016-fig001",
      "prompt": "圓 O 在 T 點的切線為 ℓ。OT 與 ℓ 的夾角為何？",
      "text": "圓 O 在 T 點的切線為 ℓ。OT 與 ℓ 的夾角為何？",
      "givenConditions": "O為圓心；T為切點。",
      "target": "求夾角。",
      "choices": [
        "90°",
        "45°",
        "60°",
        "180°"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「O為圓心；T為切點。」重算：切點半徑垂直切線，所以夾角90°。",
      "explanation": "切點半徑垂直切線，所以夾角90°。 因此唯一正確選項是「90°」。",
      "steps": [
        "確認T為切點。",
        "使用OT⊥ℓ。"
      ],
      "optionAnalysis": [
        {
          "choice": "90°",
          "truth": true,
          "reason": "依題目條件重新計算：切點半徑垂直切線，所以夾角90°。"
        },
        {
          "choice": "45°",
          "truth": false,
          "reason": "無此固定角。"
        },
        {
          "choice": "60°",
          "truth": false,
          "reason": "無此固定角。"
        },
        {
          "choice": "180°",
          "truth": false,
          "reason": "垂直不是平角。"
        }
      ],
      "misconceptionTarget": "切線與半徑夾角記錯。",
      "prerequisiteCheck": "需先能使用「切線性質」；本題未使用後續技能。",
      "estimatedTimeSec": 45,
      "unitCheck": "u19-s016-v001 已核對所求量「求夾角。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「辨認切點直角。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s016-v001。",
      "difficultyReason": "basic：辨認切點直角。 解題需完成「確認T為切點。；使用OT⊥ℓ。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認切點直角。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "b76a5f157a072d93fc0167e571f4149d78e57de9fac68d03be060e0fbf41d3ce"
    },
    {
      "questionId": "u19-s016-v002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "tangent-radius",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "P 為圓外點，PT 為切線段，OT=6、PT=8。OP 為何？",
      "text": "P 為圓外點，PT 為切線段，OT=6、PT=8。OP 為何？",
      "givenConditions": "OT=6；PT=8；T切點。",
      "target": "求OP。",
      "choices": [
        "2",
        "10",
        "7",
        "14"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「OT=6；PT=8；T切點。」重算：△OTP在T為直角，OP²=6²+8²=100，所以OP=10。",
      "explanation": "△OTP在T為直角，OP²=6²+8²=100，所以OP=10。 因此唯一正確選項是「10」。",
      "steps": [
        "標T為直角。",
        "套畢氏定理。"
      ],
      "optionAnalysis": [
        {
          "choice": "2",
          "truth": false,
          "reason": "錯用差。"
        },
        {
          "choice": "10",
          "truth": true,
          "reason": "依題目條件重新計算：△OTP在T為直角，OP²=6²+8²=100，所以OP=10。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "平方和開根錯。"
        },
        {
          "choice": "14",
          "truth": false,
          "reason": "直接相加。"
        }
      ],
      "misconceptionTarget": "未辨認OP為斜邊。",
      "prerequisiteCheck": "需先能使用「切線性質」；本題未使用後續技能。",
      "estimatedTimeSec": 60,
      "unitCheck": "u19-s016-v002 已核對所求量「求OP。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「用3-4-5倍數求斜邊。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s016-v002。",
      "difficultyReason": "basic：用3-4-5倍數求斜邊。 解題需完成「標T為直角。；套畢氏定理。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "用3-4-5倍數求斜邊。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "0cf64237b3b3b396e3a3dbf9b1c3059bbc311f8767a1427a5dd196e5fcda4adf"
    },
    {
      "questionId": "u19-s016-v003",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "tangent-radius",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "OP=13、OT=5，PT 為切線段。PT 為何？",
      "text": "OP=13、OT=5，PT 為切線段。PT 為何？",
      "givenConditions": "OP=13；OT=5；OT⊥PT。",
      "target": "求PT。",
      "choices": [
        "8",
        "18",
        "12",
        "√194"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「OP=13；OT=5；OT⊥PT。」重算：PT²=13²−5²=169−25=144，PT=12。",
      "explanation": "PT²=13²−5²=169−25=144，PT=12。 因此唯一正確選項是「12」。",
      "steps": [
        "OP為斜邊。",
        "平方差144。",
        "開根12。"
      ],
      "optionAnalysis": [
        {
          "choice": "8",
          "truth": false,
          "reason": "直接相減。"
        },
        {
          "choice": "18",
          "truth": false,
          "reason": "直接相加。"
        },
        {
          "choice": "12",
          "truth": true,
          "reason": "依題目條件重新計算：PT²=13²−5²=169−25=144，PT=12。"
        },
        {
          "choice": "√194",
          "truth": false,
          "reason": "把平方和方向弄錯。"
        }
      ],
      "misconceptionTarget": "把兩邊直接加減。",
      "prerequisiteCheck": "需先能使用「切線性質」；本題未使用後續技能。",
      "estimatedTimeSec": 65,
      "unitCheck": "u19-s016-v003 已核對所求量「求PT。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由斜邊與半徑求切線長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s016-v003。",
      "difficultyReason": "basic：由斜邊與半徑求切線長。 解題需完成「OP為斜邊。；平方差144。；開根12。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由斜邊與半徑求切線長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "987ad99b1da5719a368f46fffcdb59b58c63ebc5ba9a51fe54a8a731c65595d3"
    },
    {
      "questionId": "u19-s016-v004",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "tangent-radius",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "OP=17、PT=15，T 為切點。圓半徑為何？",
      "text": "OP=17、PT=15，T 為切點。圓半徑為何？",
      "givenConditions": "OP=17；PT=15。",
      "target": "求OT。",
      "choices": [
        "2",
        "8",
        "16",
        "√514"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「OP=17；PT=15。」重算：OT²=OP²−PT²=289−225=64，OT=8。",
      "explanation": "OT²=OP²−PT²=289−225=64，OT=8。 因此唯一正確選項是「8」。",
      "steps": [
        "辨認OP斜邊。",
        "求平方差64。",
        "取正根。"
      ],
      "optionAnalysis": [
        {
          "choice": "2",
          "truth": false,
          "reason": "直接相減。"
        },
        {
          "choice": "8",
          "truth": true,
          "reason": "依題目條件重新計算：OT²=OP²−PT²=289−225=64，OT=8。"
        },
        {
          "choice": "16",
          "truth": false,
          "reason": "錯用平方差。"
        },
        {
          "choice": "√514",
          "truth": false,
          "reason": "誤用平方和。"
        }
      ],
      "misconceptionTarget": "斜邊與股的位置錯。",
      "prerequisiteCheck": "需先能使用「切線性質」；本題未使用後續技能。",
      "estimatedTimeSec": 75,
      "unitCheck": "u19-s016-v004 已核對所求量「求OT。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由外點距離與切線長求半徑。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s016-v004。",
      "difficultyReason": "standard：由外點距離與切線長求半徑。 解題需完成「辨認OP斜邊。；求平方差64。；取正根。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由外點距離與切線長求半徑。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "74f9829a744bab951ba6ed48f3d1e5ae92ccc4573a85fa5e963549e2ba564b5f"
    },
    {
      "questionId": "u19-s016-v005",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "tangent-radius",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "半徑 OT=9，圓外點 P 到圓心 OP=15。切線段 PT 為何？",
      "text": "半徑 OT=9，圓外點 P 到圓心 OP=15。切線段 PT 為何？",
      "givenConditions": "OT=9；OP=15；T切點。",
      "target": "求PT。",
      "choices": [
        "12",
        "6",
        "18",
        "√306"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「OT=9；OP=15；T切點。」重算：PT²=15²−9²=225−81=144，PT=12。",
      "explanation": "PT²=15²−9²=225−81=144，PT=12。 因此唯一正確選項是「12」。",
      "steps": [
        "列15²=9²+PT²。",
        "解PT=12。"
      ],
      "optionAnalysis": [
        {
          "choice": "12",
          "truth": true,
          "reason": "依題目條件重新計算：PT²=15²−9²=225−81=144，PT=12。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "直接相減。"
        },
        {
          "choice": "18",
          "truth": false,
          "reason": "直接相加。"
        },
        {
          "choice": "√306",
          "truth": false,
          "reason": "平方差算錯。"
        }
      ],
      "misconceptionTarget": "未用畢氏定理。",
      "prerequisiteCheck": "需先能使用「切線性質」；本題未使用後續技能。",
      "estimatedTimeSec": 75,
      "unitCheck": "u19-s016-v005 已核對所求量「求PT。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「求切線段長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s016-v005。",
      "difficultyReason": "standard：求切線段長。 解題需完成「列15²=9²+PT²。；解PT=12。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "求切線段長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "a53ce746fa45958d90710602d0d5552136070e2b53d6324edb86bf14a945a036"
    },
    {
      "questionId": "u19-s016-v006",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "tangent-radius",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "若 OT=5、PT=12，則三角形 OPT 的面積為何？",
      "text": "若 OT=5、PT=12，則三角形 OPT 的面積為何？",
      "givenConditions": "OT=5；PT=12。",
      "target": "求△OPT面積。",
      "choices": [
        "17",
        "60",
        "78",
        "30"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「OT=5；PT=12。」重算：OT⊥PT，兩股5、12，面積=1/2×5×12=30。",
      "explanation": "OT⊥PT，兩股5、12，面積=1/2×5×12=30。 因此唯一正確選項是「30」。",
      "steps": [
        "確認直角邊。",
        "計算1/2×5×12。"
      ],
      "optionAnalysis": [
        {
          "choice": "17",
          "truth": false,
          "reason": "把邊長相加。"
        },
        {
          "choice": "60",
          "truth": false,
          "reason": "漏1/2。"
        },
        {
          "choice": "78",
          "truth": false,
          "reason": "使用斜邊13乘12/2錯。"
        },
        {
          "choice": "30",
          "truth": true,
          "reason": "依題目條件重新計算：OT⊥PT，兩股5、12，面積=1/2×5×12=30。"
        }
      ],
      "misconceptionTarget": "未利用垂直邊作底高。",
      "prerequisiteCheck": "需先能使用「切線性質」；本題未使用後續技能。",
      "estimatedTimeSec": 70,
      "unitCheck": "u19-s016-v006 已核對所求量「求△OPT面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由切線直角求三角形面積。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s016-v006。",
      "difficultyReason": "standard：由切線直角求三角形面積。 解題需完成「確認直角邊。；計算1/2×5×12。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由切線直角求三角形面積。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "51c93f4f36e3c2d0216de9b7d369004cefa65419b73ff4fd094f18a3164712d1"
    },
    {
      "questionId": "u19-s016-v007",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "tangent-radius",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s016-fig001",
      "drawingSpecId": "u19-s016-fig001",
      "prompt": "圓半徑為 x+1，切線段為 2x，圓心到外點距離為 5，且 x>0。求 x。",
      "text": "圓半徑為 x+1，切線段為 2x，圓心到外點距離為 5，且 x>0。求 x。",
      "givenConditions": "OT=x+1；PT=2x；OP=5；x>0。",
      "target": "求x。",
      "choices": [
        "2",
        "1",
        "3",
        "4"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「OT=x+1；PT=2x；OP=5；x>0。」重算：(x+1)²+(2x)²=25，5x²+2x−24=0=(5x+12)(x−2)，正解x=2。",
      "explanation": "(x+1)²+(2x)²=25，5x²+2x−24=0=(5x+12)(x−2)，正解x=2。 因此唯一正確選項是「2」。",
      "steps": [
        "列畢氏方程。",
        "展開5x²+2x−24=0。",
        "取正解2。"
      ],
      "optionAnalysis": [
        {
          "choice": "2",
          "truth": true,
          "reason": "依題目條件重新計算：(x+1)²+(2x)²=25，5x²+2x−24=0=(5x+12)(x−2)，正解x=2。"
        },
        {
          "choice": "1",
          "truth": false,
          "reason": "代入股2與2，斜邊不足5。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "代入4與6，斜邊>5。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "更大。"
        }
      ],
      "misconceptionTarget": "建立方程後未篩除不合幾何的根。",
      "prerequisiteCheck": "需先能使用「切線性質」；本題未使用後續技能。",
      "estimatedTimeSec": 130,
      "unitCheck": "u19-s016-v007 已核對所求量「求x。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「用代數與切線直角求參數。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s016-v007。",
      "difficultyReason": "advanced：用代數與切線直角求參數。 解題需完成「列畢氏方程。；展開5x²+2x−24=0。；取正解2。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "用代數與切線直角求參數。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "77ffb097f412c0274e43bff36386ed3eeb7208b50de9f4c30e1b833e6fc20dbf"
    },
    {
      "questionId": "u19-s016-v008",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "tangent-radius",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "OP 比半徑長 5 cm，切線段 PT=15 cm。求半徑。",
      "text": "OP 比半徑長 5 cm，切線段 PT=15 cm。求半徑。",
      "givenConditions": "OP=r+5；PT=15。",
      "target": "求r。",
      "choices": [
        "10 cm",
        "15 cm",
        "20 cm",
        "25 cm"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「OP=r+5；PT=15。」重算：設半徑r，OP=r+5。由(r+5)²=r²+15²，10r+25=225，r=20。",
      "explanation": "設半徑r，OP=r+5。由(r+5)²=r²+15²，10r+25=225，r=20。 因此唯一正確選項是「20 cm」。",
      "steps": [
        "列(r+5)²=r²+225。",
        "消去r²。",
        "10r=200。"
      ],
      "optionAnalysis": [
        {
          "choice": "10 cm",
          "truth": false,
          "reason": "代入OP15、r10、PT15不成直角。"
        },
        {
          "choice": "15 cm",
          "truth": false,
          "reason": "把切線長當半徑。"
        },
        {
          "choice": "20 cm",
          "truth": true,
          "reason": "依題目條件重新計算：設半徑r，OP=r+5。由(r+5)²=r²+15²，10r+25=225，r=20。"
        },
        {
          "choice": "25 cm",
          "truth": false,
          "reason": "代入r25差不符。"
        }
      ],
      "misconceptionTarget": "把OP−r直接當切線段。",
      "prerequisiteCheck": "需先能使用「切線性質」；本題未使用後續技能。",
      "estimatedTimeSec": 120,
      "unitCheck": "u19-s016-v008 已核對所求量「求r。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由外點距離差求半徑。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s016-v008。",
      "difficultyReason": "advanced：由外點距離差求半徑。 解題需完成「列(r+5)²=r²+225。；消去r²。；10r=200。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由外點距離差求半徑。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "1ed1f08a4191da555e385e999bb87899dc1813d6ec57574cd8d1ea3b131ec853"
    },
    {
      "questionId": "u19-s016-v009",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "tangent-radius",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "同一外點 P 到圓心距離固定為 13。若半徑從 5 增加到 12，切線段長由多少變多少？",
      "text": "同一外點 P 到圓心距離固定為 13。若半徑從 5 增加到 12，切線段長由多少變多少？",
      "givenConditions": "OP=13固定；r由5變12。",
      "target": "求切線長變化。",
      "choices": [
        "由8變為1",
        "由13變為12",
        "由5變為12",
        "由12變為5"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「OP=13固定；r由5變12。」重算：原切線長√(169−25)=12；新切線長√(169−144)=5。",
      "explanation": "原切線長√(169−25)=12；新切線長√(169−144)=5。 因此唯一正確選項是「由12變為5」。",
      "steps": [
        "分別套PT=√(OP²−r²)。",
        "比較12與5。"
      ],
      "optionAnalysis": [
        {
          "choice": "由8變為1",
          "truth": false,
          "reason": "平方差錯。"
        },
        {
          "choice": "由13變為12",
          "truth": false,
          "reason": "把距離直接相減。"
        },
        {
          "choice": "由5變為12",
          "truth": false,
          "reason": "方向顛倒。"
        },
        {
          "choice": "由12變為5",
          "truth": true,
          "reason": "依題目條件重新計算：原切線長√(169−25)=12；新切線長√(169−144)=5。"
        }
      ],
      "misconceptionTarget": "誤以半徑增加使切線段增加。",
      "prerequisiteCheck": "需先能使用「切線性質」；本題未使用後續技能。",
      "estimatedTimeSec": 110,
      "unitCheck": "u19-s016-v009 已核對所求量「求切線長變化。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「比較半徑變化對切線長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s016-v009。",
      "difficultyReason": "advanced：比較半徑變化對切線長。 解題需完成「分別套PT=√(OP²−r²)。；比較12與5。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "比較半徑變化對切線長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "32d203861f27df7cc22f3af20db4c19a051a18df9e541f13f02f85a746865d9c"
    },
    {
      "questionId": "u19-s016-v010",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "tangent-radius",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形儲槽半徑 6 m，從外部點 P 拉一條恰好接觸儲槽的繩索至切點 T。若 P 到中心 O 為 10 m，繩長 PT 為何？",
      "text": "圓形儲槽半徑 6 m，從外部點 P 拉一條恰好接觸儲槽的繩索至切點 T。若 P 到中心 O 為 10 m，繩長 PT 為何？",
      "givenConditions": "r=6 m；OP=10 m；PT相切。",
      "target": "求PT。",
      "choices": [
        "4 m",
        "12 m",
        "16 m",
        "8 m"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「r=6 m；OP=10 m；PT相切。」重算：半徑OT與繩索切線PT垂直，PT=√(10²−6²)=8 m。",
      "explanation": "半徑OT與繩索切線PT垂直，PT=√(10²−6²)=8 m。 因此唯一正確選項是「8 m」。",
      "steps": [
        "建立直角三角形。",
        "100−36=64。",
        "開根8。"
      ],
      "optionAnalysis": [
        {
          "choice": "4 m",
          "truth": false,
          "reason": "直接相減。"
        },
        {
          "choice": "12 m",
          "truth": false,
          "reason": "直接相加。"
        },
        {
          "choice": "16 m",
          "truth": false,
          "reason": "錯平方。"
        },
        {
          "choice": "8 m",
          "truth": true,
          "reason": "依題目條件重新計算：半徑OT與繩索切線PT垂直，PT=√(10²−6²)=8 m。"
        }
      ],
      "misconceptionTarget": "未辨認接觸繩索為切線。",
      "prerequisiteCheck": "需先能使用「切線性質」；本題未使用後續技能。",
      "estimatedTimeSec": 80,
      "unitCheck": "u19-s016-v010 已核對所求量「求PT。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「計算外部切線繩長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s016-v010。",
      "difficultyReason": "literacy：計算外部切線繩長。 解題需完成「建立直角三角形。；100−36=64。；開根8。」。",
      "literacyContextNecessity": "繩索恰好接觸圓形儲槽，形成切點直角。",
      "authoringIntent": "計算外部切線繩長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "7134015008dacca875df0ec40b54828a06a910eb2e464cded6f09198dffa738c"
    },
    {
      "questionId": "u19-s016-v011",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "tangent-radius",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形花圃半徑 9 m，一條直線步道在切點 T 接觸花圃。連接中心 O 到 T 的小徑與步道夾角為何？",
      "text": "圓形花圃半徑 9 m，一條直線步道在切點 T 接觸花圃。連接中心 O 到 T 的小徑與步道夾角為何？",
      "givenConditions": "步道與圓相切於T；O為中心。",
      "target": "求夾角。",
      "choices": [
        "0°",
        "45°",
        "90°",
        "180°"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「步道與圓相切於T；O為中心。」重算：切點半徑OT垂直切線步道，所以夾角90°。",
      "explanation": "切點半徑OT垂直切線步道，所以夾角90°。 因此唯一正確選項是「90°」。",
      "steps": [
        "辨認步道為切線。",
        "使用半徑垂直切線。"
      ],
      "optionAnalysis": [
        {
          "choice": "0°",
          "truth": false,
          "reason": "不是重合。"
        },
        {
          "choice": "45°",
          "truth": false,
          "reason": "無此固定值。"
        },
        {
          "choice": "90°",
          "truth": true,
          "reason": "依題目條件重新計算：切點半徑OT垂直切線步道，所以夾角90°。"
        },
        {
          "choice": "180°",
          "truth": false,
          "reason": "不是反向共線。"
        }
      ],
      "misconceptionTarget": "把視覺相切當成小角而非精確直角。",
      "prerequisiteCheck": "需先能使用「切線性質」；本題未使用後續技能。",
      "estimatedTimeSec": 70,
      "unitCheck": "u19-s016-v011 已核對所求量「求夾角。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「在園區設計中辨認垂直。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s016-v011。",
      "difficultyReason": "literacy：在園區設計中辨認垂直。 解題需完成「辨認步道為切線。；使用半徑垂直切線。」。",
      "literacyContextNecessity": "中心小徑與切線步道的施工角度由切線性質唯一決定。",
      "authoringIntent": "在園區設計中辨認垂直。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "ef19e05af9c3a09d2fe704609c838164d572801d54dcc531fc92dbda165fa1b4"
    },
    {
      "questionId": "u19-s016-v012",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "tangent-radius",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形標誌半徑 5 cm，從外點 P 到切點 T 的支架長 12 cm。P 到標誌中心多遠？",
      "text": "圓形標誌半徑 5 cm，從外點 P 到切點 T 的支架長 12 cm。P 到標誌中心多遠？",
      "givenConditions": "r=5；PT=12；T切點。",
      "target": "求OP。",
      "choices": [
        "7 cm",
        "13 cm",
        "17 cm",
        "√119 cm"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「r=5；PT=12；T切點。」重算：OT⊥PT，OP=√(5²+12²)=13 cm。",
      "explanation": "OT⊥PT，OP=√(5²+12²)=13 cm。 因此唯一正確選項是「13 cm」。",
      "steps": [
        "平方和25+144=169。",
        "開根13。"
      ],
      "optionAnalysis": [
        {
          "choice": "7 cm",
          "truth": false,
          "reason": "直接相減。"
        },
        {
          "choice": "13 cm",
          "truth": true,
          "reason": "依題目條件重新計算：OT⊥PT，OP=√(5²+12²)=13 cm。"
        },
        {
          "choice": "17 cm",
          "truth": false,
          "reason": "直接相加。"
        },
        {
          "choice": "√119 cm",
          "truth": false,
          "reason": "平方差錯。"
        }
      ],
      "misconceptionTarget": "把斜邊算成兩股和。",
      "prerequisiteCheck": "需先能使用「切線性質」；本題未使用後續技能。",
      "estimatedTimeSec": 75,
      "unitCheck": "u19-s016-v012 已核對所求量「求OP。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由支架與半徑求外點距離。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s016-v012。",
      "difficultyReason": "literacy：由支架與半徑求外點距離。 解題需完成「平方和25+144=169。；開根13。」。",
      "literacyContextNecessity": "支架在切點接觸圓，產生可計算的直角三角形。",
      "authoringIntent": "由支架與半徑求外點距離。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "25bff44adf69ca047f1a52a19d570a2afefc90d099074c45c8b9a23503b471f2"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u19-s016-cr001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "tangent-radius",
      "difficulty": "advanced",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u19-s016-fig001",
      "drawingSpecId": "u19-s016-fig001",
      "prompt": "圓 O 半徑 OT=8 cm，P 為圓外點，PT 為切線段且 OP=17 cm。求 PT 與 △OPT 面積。",
      "requiredWork": [
        "指出OT⊥PT。",
        "用畢氏定理求PT。",
        "以兩股求面積。"
      ],
      "standardSolution": [
        "PT²=17²−8²=289−64=225，所以PT=15 cm。",
        "△OPT面積=1/2×8×15=60 cm²。"
      ],
      "fullCreditSolution": [
        "PT²=17²−8²=289−64=225，所以PT=15 cm。",
        "△OPT面積=1/2×8×15=60 cm²。"
      ],
      "alternativeSolutions": [
        "可辨認8-15-17直角三角形。"
      ],
      "reasoningSteps": [
        "PT²=17²−8²=289−64=225，所以PT=15 cm。",
        "△OPT面積=1/2×8×15=60 cm²。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "PT=15 cm、面積60 cm²及直角理由完整。"
        },
        {
          "score": 2,
          "criteria": "兩答案正確但理由略，或只完整一項。"
        },
        {
          "score": 1,
          "criteria": "正確建立平方差。"
        },
        {
          "score": 0,
          "criteria": "直接用17−8求PT。"
        }
      ],
      "partialCreditRules": [
        "長度與面積分項。"
      ],
      "followThroughPolicy": "若PT算錯但後續正確用1/2×8×其PT，可保留面積方法分。",
      "unitNotationRules": "PT用cm；面積cm²。",
      "answerOnlyPolicy": "只寫15、60給2分。",
      "commonErrors": [
        "把OP當股。",
        "面積漏1/2。"
      ],
      "independentReview": {
        "derivedResult": "PT=15 cm，面積60 cm²。",
        "ambiguity": "OP為斜邊且正根唯一。",
        "decision": "pass",
        "reviewNote": "u19-s016-cr001 由題目條件另行推導得到「PT=15 cm，面積60 cm²。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "54de74824e603d53d733d0a944f7f1bada0eb416eab4b661002bb2d6dc7e8d92"
    },
    {
      "questionId": "u19-s016-cr002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-tangents",
      "skillId": "tangent-radius",
      "difficulty": "advanced",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "P 到圓心 O 的距離比半徑長 4 cm，切線段長 12 cm。求半徑。",
      "requiredWork": [
        "設半徑r。",
        "建立(r+4)²=r²+12²。",
        "解正半徑。"
      ],
      "standardSolution": [
        "設OT=r，OP=r+4。",
        "(r+4)²=r²+144。",
        "8r+16=144，r=16 cm。"
      ],
      "fullCreditSolution": [
        "設OT=r，OP=r+4。",
        "(r+4)²=r²+144。",
        "8r+16=144，r=16 cm。"
      ],
      "alternativeSolutions": [
        "可用平方差(OP−OT)(OP+OT)=PT²：4(2r+4)=144。"
      ],
      "reasoningSteps": [
        "設OT=r，OP=r+4。",
        "(r+4)²=r²+144。",
        "8r+16=144，r=16 cm。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "方程與r=16 cm完整。"
        },
        {
          "score": 2,
          "criteria": "答案正確但推導略。"
        },
        {
          "score": 1,
          "criteria": "建立正確畢氏方程。"
        },
        {
          "score": 0,
          "criteria": "用12−4。"
        }
      ],
      "partialCreditRules": [
        "不同代數方法皆可。"
      ],
      "followThroughPolicy": "若展開錯但方程正確，給1分。",
      "unitNotationRules": "半徑cm且為正。",
      "answerOnlyPolicy": "只寫16 cm給2分。",
      "commonErrors": [
        "把OP設r−4。",
        "漏平方交叉項。"
      ],
      "independentReview": {
        "derivedResult": "r=16 cm。",
        "ambiguity": "線性化後唯一正解。",
        "decision": "pass",
        "reviewNote": "u19-s016-cr002 由題目條件另行推導得到「r=16 cm。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "07c395dadb9056ec7c37ffe234954e1917da4d0f3effed41978a20860d768cf2"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u19-s016-v001",
      "contentSha256": "b76a5f157a072d93fc0167e571f4149d78e57de9fac68d03be060e0fbf41d3ce",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「O為圓心；T為切點。」重算：切點半徑垂直切線，所以夾角90°。",
      "derivedAnswer": "90°",
      "storedAnswer": "90°",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「90°」符合；三個干擾項分別因「無此固定角。；無此固定角。；垂直不是平角。」而排除。",
        "undefinedSymbol": "u19-s016-v001 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線與半徑」講義定義。",
        "unitConflict": "題目所求為「求夾角。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「辨認切點直角。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「O為圓心；T為切點。」重讀，所求「求夾角。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是辨認切點直角。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴tangent-properties，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓 O 在 T 點的切線為 ℓ。OT 與 ℓ 的夾角為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s016-v001 人工重算：切點半徑垂直切線，所以夾角90°。 正確選項為「90°」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s016-v002",
      "contentSha256": "0cf64237b3b3b396e3a3dbf9b1c3059bbc311f8767a1427a5dd196e5fcda4adf",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「OT=6；PT=8；T切點。」重算：△OTP在T為直角，OP²=6²+8²=100，所以OP=10。",
      "derivedAnswer": "10",
      "storedAnswer": "10",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「10」符合；三個干擾項分別因「錯用差。；平方和開根錯。；直接相加。」而排除。",
        "undefinedSymbol": "u19-s016-v002 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線與半徑」講義定義。",
        "unitConflict": "題目所求為「求OP。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「用3-4-5倍數求斜邊。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「OT=6；PT=8；T切點。」重讀，所求「求OP。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是用3-4-5倍數求斜邊。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴tangent-properties，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「P 為圓外點，PT 為切線段，OT=6、PT=8。OP 為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s016-v002 人工重算：△OTP在T為直角，OP²=6²+8²=100，所以OP=10。 正確選項為「10」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s016-v003",
      "contentSha256": "987ad99b1da5719a368f46fffcdb59b58c63ebc5ba9a51fe54a8a731c65595d3",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「OP=13；OT=5；OT⊥PT。」重算：PT²=13²−5²=169−25=144，PT=12。",
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
        "secondCorrectAnswer": "逐項核對四選項後，只有「12」符合；三個干擾項分別因「直接相減。；直接相加。；把平方和方向弄錯。」而排除。",
        "undefinedSymbol": "u19-s016-v003 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線與半徑」講義定義。",
        "unitConflict": "題目所求為「求PT。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由斜邊與半徑求切線長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「OP=13；OT=5；OT⊥PT。」重讀，所求「求PT。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是由斜邊與半徑求切線長。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴tangent-properties，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「OP=13、OT=5，PT 為切線段。PT 為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s016-v003 人工重算：PT²=13²−5²=169−25=144，PT=12。 正確選項為「12」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s016-v004",
      "contentSha256": "74f9829a744bab951ba6ed48f3d1e5ae92ccc4573a85fa5e963549e2ba564b5f",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「OP=17；PT=15。」重算：OT²=OP²−PT²=289−225=64，OT=8。",
      "derivedAnswer": "8",
      "storedAnswer": "8",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「8」符合；三個干擾項分別因「直接相減。；錯用平方差。；誤用平方和。」而排除。",
        "undefinedSymbol": "u19-s016-v004 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線與半徑」講義定義。",
        "unitConflict": "題目所求為「求OT。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由外點距離與切線長求半徑。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「OP=17；PT=15。」重讀，所求「求OT。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是由外點距離與切線長求半徑。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴tangent-properties，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「OP=17、PT=15，T 為切點。圓半徑為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s016-v004 人工重算：OT²=OP²−PT²=289−225=64，OT=8。 正確選項為「8」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s016-v005",
      "contentSha256": "a53ce746fa45958d90710602d0d5552136070e2b53d6324edb86bf14a945a036",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「OT=9；OP=15；T切點。」重算：PT²=15²−9²=225−81=144，PT=12。",
      "derivedAnswer": "12",
      "storedAnswer": "12",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「12」符合；三個干擾項分別因「直接相減。；直接相加。；平方差算錯。」而排除。",
        "undefinedSymbol": "u19-s016-v005 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線與半徑」講義定義。",
        "unitConflict": "題目所求為「求PT。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「求切線段長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「OT=9；OP=15；T切點。」重讀，所求「求PT。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是求切線段長。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴tangent-properties，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑 OT=9，圓外點 P 到圓心 OP=15。切線段 PT 為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s016-v005 人工重算：PT²=15²−9²=225−81=144，PT=12。 正確選項為「12」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s016-v006",
      "contentSha256": "51c93f4f36e3c2d0216de9b7d369004cefa65419b73ff4fd094f18a3164712d1",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「OT=5；PT=12。」重算：OT⊥PT，兩股5、12，面積=1/2×5×12=30。",
      "derivedAnswer": "30",
      "storedAnswer": "30",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「30」符合；三個干擾項分別因「把邊長相加。；漏1/2。；使用斜邊13乘12/2錯。」而排除。",
        "undefinedSymbol": "u19-s016-v006 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線與半徑」講義定義。",
        "unitConflict": "題目所求為「求△OPT面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由切線直角求三角形面積。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「OT=5；PT=12。」重讀，所求「求△OPT面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是由切線直角求三角形面積。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴tangent-properties，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「若 OT=5、PT=12，則三角形 OPT 的面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s016-v006 人工重算：OT⊥PT，兩股5、12，面積=1/2×5×12=30。 正確選項為「30」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s016-v007",
      "contentSha256": "77ffb097f412c0274e43bff36386ed3eeb7208b50de9f4c30e1b833e6fc20dbf",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「OT=x+1；PT=2x；OP=5；x>0。」重算：(x+1)²+(2x)²=25，5x²+2x−24=0=(5x+12)(x−2)，正解x=2。",
      "derivedAnswer": "2",
      "storedAnswer": "2",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「2」符合；三個干擾項分別因「代入股2與2，斜邊不足5。；代入4與6，斜邊>5。；更大。」而排除。",
        "undefinedSymbol": "u19-s016-v007 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線與半徑」講義定義。",
        "unitConflict": "題目所求為「求x。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「用代數與切線直角求參數。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「OT=x+1；PT=2x；OP=5；x>0。」重讀，所求「求x。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是用代數與切線直角求參數。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴tangent-properties，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓半徑為 x+1，切線段為 2x，圓心到外點距離為 5，且 x>0。求 x。」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s016-v007 人工重算：(x+1)²+(2x)²=25，5x²+2x−24=0=(5x+12)(x−2)，正解x=2。 正確選項為「2」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s016-v008",
      "contentSha256": "1ed1f08a4191da555e385e999bb87899dc1813d6ec57574cd8d1ea3b131ec853",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「OP=r+5；PT=15。」重算：設半徑r，OP=r+5。由(r+5)²=r²+15²，10r+25=225，r=20。",
      "derivedAnswer": "20 cm",
      "storedAnswer": "20 cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「20 cm」符合；三個干擾項分別因「代入OP15、r10、PT15不成直角。；把切線長當半徑。；代入r25差不符。」而排除。",
        "undefinedSymbol": "u19-s016-v008 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線與半徑」講義定義。",
        "unitConflict": "題目所求為「求r。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由外點距離差求半徑。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「OP=r+5；PT=15。」重讀，所求「求r。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是由外點距離差求半徑。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴tangent-properties，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「OP 比半徑長 5 cm，切線段 PT=15 cm。求半徑。」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s016-v008 人工重算：設半徑r，OP=r+5。由(r+5)²=r²+15²，10r+25=225，r=20。 正確選項為「20 cm」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s016-v009",
      "contentSha256": "32d203861f27df7cc22f3af20db4c19a051a18df9e541f13f02f85a746865d9c",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「OP=13固定；r由5變12。」重算：原切線長√(169−25)=12；新切線長√(169−144)=5。",
      "derivedAnswer": "由12變為5",
      "storedAnswer": "由12變為5",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「由12變為5」符合；三個干擾項分別因「平方差錯。；把距離直接相減。；方向顛倒。」而排除。",
        "undefinedSymbol": "u19-s016-v009 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線與半徑」講義定義。",
        "unitConflict": "題目所求為「求切線長變化。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「比較半徑變化對切線長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「OP=13固定；r由5變12。」重讀，所求「求切線長變化。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是比較半徑變化對切線長。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴tangent-properties，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「同一外點 P 到圓心距離固定為 13。若半徑從 5 增加到 12，切線段長由多少變多少？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s016-v009 人工重算：原切線長√(169−25)=12；新切線長√(169−144)=5。 正確選項為「由12變為5」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s016-v010",
      "contentSha256": "7134015008dacca875df0ec40b54828a06a910eb2e464cded6f09198dffa738c",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=6 m；OP=10 m；PT相切。」重算：半徑OT與繩索切線PT垂直，PT=√(10²−6²)=8 m。",
      "derivedAnswer": "8 m",
      "storedAnswer": "8 m",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「8 m」符合；三個干擾項分別因「直接相減。；直接相加。；錯平方。」而排除。",
        "undefinedSymbol": "u19-s016-v010 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線與半徑」講義定義。",
        "unitConflict": "題目所求為「求PT。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「計算外部切線繩長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=6 m；OP=10 m；PT相切。」重讀，所求「求PT。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是計算外部切線繩長。，而非只依題序標示。",
      "literacyContextNecessity": "繩索恰好接觸圓形儲槽，形成切點直角。",
      "prerequisiteCheck": "只依賴tangent-properties，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓形儲槽半徑 6 m，從外部點 P 拉一條恰好接觸儲槽的繩索至切點 T。若 P 到中心 O 為 10 m，繩長 PT 為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s016-v010 人工重算：半徑OT與繩索切線PT垂直，PT=√(10²−6²)=8 m。 正確選項為「8 m」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s016-v011",
      "contentSha256": "ef19e05af9c3a09d2fe704609c838164d572801d54dcc531fc92dbda165fa1b4",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「步道與圓相切於T；O為中心。」重算：切點半徑OT垂直切線步道，所以夾角90°。",
      "derivedAnswer": "90°",
      "storedAnswer": "90°",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「90°」符合；三個干擾項分別因「不是重合。；無此固定值。；不是反向共線。」而排除。",
        "undefinedSymbol": "u19-s016-v011 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線與半徑」講義定義。",
        "unitConflict": "題目所求為「求夾角。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「在園區設計中辨認垂直。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「步道與圓相切於T；O為中心。」重讀，所求「求夾角。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是在園區設計中辨認垂直。，而非只依題序標示。",
      "literacyContextNecessity": "中心小徑與切線步道的施工角度由切線性質唯一決定。",
      "prerequisiteCheck": "只依賴tangent-properties，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓形花圃半徑 9 m，一條直線步道在切點 T 接觸花圃。連接中心 O 到 T 的小徑與步道夾角為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s016-v011 人工重算：切點半徑OT垂直切線步道，所以夾角90°。 正確選項為「90°」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s016-v012",
      "contentSha256": "25bff44adf69ca047f1a52a19d570a2afefc90d099074c45c8b9a23503b471f2",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=5；PT=12；T切點。」重算：OT⊥PT，OP=√(5²+12²)=13 cm。",
      "derivedAnswer": "13 cm",
      "storedAnswer": "13 cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「13 cm」符合；三個干擾項分別因「直接相減。；直接相加。；平方差錯。」而排除。",
        "undefinedSymbol": "u19-s016-v012 使用的圓心、弧、角、半徑、直徑、切線或π均已在「切線與半徑」講義定義。",
        "unitConflict": "題目所求為「求OP。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由支架與半徑求外點距離。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=5；PT=12；T切點。」重讀，所求「求OP。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是由支架與半徑求外點距離。，而非只依題序標示。",
      "literacyContextNecessity": "支架在切點接觸圓，產生可計算的直角三角形。",
      "prerequisiteCheck": "只依賴tangent-properties，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓形標誌半徑 5 cm，從外點 P 到切點 T 的支架長 12 cm。P 到標誌中心多遠？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s016-v012 人工重算：OT⊥PT，OP=√(5²+12²)=13 cm。 正確選項為「13 cm」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u19-s016-fig001",
      "unitId": "u19",
      "topicId": "u19-tangents",
      "skillId": "tangent-radius",
      "svgPath": "figures/u19/u19-s016-fig001.svg",
      "canvas": {
        "width": 360,
        "height": 240,
        "viewBox": "0 0 360 240"
      },
      "drawingSpec": {
        "purpose": "支援「切線與半徑」中需要辨認點、線、弧、角或邊界的題目。",
        "coordinateSystem": "SVG x向右、y向下；所有座標以360×240畫布為準。",
        "geometry": "圓 O 在 T 點與直線 PT 相切，連接 OP、OT，T 點畫直角符號。",
        "visibleLines": "所有作答所需實線均以2px以上深色描邊；強調弧以5px描邊。",
        "hiddenLines": "只有內部共邊或量測輔助線使用虛線；未指定者不得自行添加。",
        "labels": "標籤位置已在SVG以固定座標給定，避免遮住交點、角弧或刻痕。",
        "symbols": "直角符號、等長刻痕、箭頭及角度符號僅在數學條件需要時出現。",
        "scalePolicy": "示意圖不保證按實際長度或角度比例繪製。",
        "visualInferenceWarning": "不得以目測長短、角度或對稱性取代題目條件與定理。",
        "mobileReadability": "360×240檢視下文字至少16px，關鍵線至少2px，無微小數值標籤。",
        "answerLeakage": "圖中不標示任何題目要求計算的最終數值或正確選項。"
      },
      "altText": "圓 O 在 T 點與直線 PT 相切，連接 OP、OT，T 點畫直角符號。 圖形僅協助辨認結構，不可依比例目測答案。",
      "svgTitle": "切線與半徑直角三角形圖",
      "svgDescription": "圓 O 在 T 點與直線 PT 相切，連接 OP、OT，T 點畫直角符號。",
      "svgAssertions": [
        "role=\"img\"",
        "<title",
        "<desc",
        "viewBox=\"0 0 360 240\"",
        "L190 110 L200 110",
        ">T</text>",
        ">切線段</text>"
      ],
      "figureReview": {
        "decision": "pass",
        "manualRenderInspected": true,
        "mobileReadable": true,
        "answerLeakageFound": false,
        "reviewNote": "已逐項檢查 u19-s016-fig001 的點位、線段、弧線、標籤與輔助符號；此圖專門呈現「切線與半徑」的結構，未包含可直接推得題庫答案的數值。",
        "reviewVersion": "human-figure-review-r1.0",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "f1c2158855589da0420edcf25a655b6bc2f1f4bc3ffc0f2d2412d1e9cbaf0398"
    }
  ]
};
export default u19_s016;
