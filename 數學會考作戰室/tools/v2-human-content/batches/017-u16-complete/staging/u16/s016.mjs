// Deterministically emitted from reviewed CHATGPT_HUMAN_AUTHORED_R1 source.
// Do not edit this staging module by hand.
export const skillData={
  "slot": "s016",
  "lecture": {
    "lectureId": "u16-s016-lecture-r1",
    "unitId": "u16",
    "numericUnitId": 16,
    "topicId": "u16-properties",
    "skillId": "triangle-medians",
    "skillOrder": 16,
    "originalLockedTitle": "中線概念",
    "title": "中線概念：從頂點連到對邊中點",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能辨認三角形中線的起點、終點與中點條件。",
      "能由中點求被分線段兩部分長度。",
      "能知道每個三角形有三條中線，且三中線交於同一點。",
      "能分辨中線、高線、中垂線與角平分線。"
    ],
    "prerequisiteBridge": "等腰與等邊三角形中曾出現『由頂角連到底邊中點』。現在不假設等腰，正式定義任何三角形的中線；一般情況下它不必垂直，也不必平分頂角。",
    "prerequisites": [
      {
        "skillId": "exterior-angle-sum",
        "requiredLevel": "能使用先備技能「多邊形外角和」的核心定義與基本運算，並能說明其與本節的連結。"
      }
    ],
    "glossary": [
      {
        "term": "中點",
        "definition": "線段上到兩端距離相等的點。"
      },
      {
        "term": "三角形中線",
        "definition": "由一個頂點連到其對邊中點的線段。"
      },
      {
        "term": "對邊",
        "definition": "不接觸該頂點的三角形邊。"
      },
      {
        "term": "重心",
        "definition": "三條中線的共同交點；本技能只建立交會概念，不延伸向量或面積座標。"
      },
      {
        "term": "中垂線",
        "definition": "通過一條線段中點且垂直該線段的直線，不必通過三角形頂點。"
      }
    ],
    "notation": [
      {
        "symbol": "M 為 BC 中點",
        "meaning": "B、M、C 共線且 BM=MC。"
      },
      {
        "symbol": "AM 為 △ABC 的中線",
        "meaning": "A 是頂點，M 是對邊 BC 的中點。"
      },
      {
        "symbol": "三中線交於 G",
        "meaning": "G 稱為重心。"
      }
    ],
    "conceptNarrative": [
      "中線的定義包含兩個必要條件：一端是三角形頂點，另一端是對邊中點。",
      "只通過中點但起點不是對面頂點，不是該三角形的中線；從頂點出發但落點不是中點，也不是中線。",
      "每個頂點都可連到其對邊中點，因此一個三角形有三條中線。",
      "三條中線一定交於同一點重心，而且重心位於三角形內部。",
      "在一般三角形，中線不必垂直對邊，也不必平分頂角；只有等腰等特殊條件下才可能三線合一。",
      "中線把三角形分成底相等且高相同的兩個小三角形，所以兩部分面積相等；此為常見應用。"
    ],
    "formalDefinitions": [
      {
        "name": "三角形中線",
        "statement": "連接三角形一個頂點與其對邊中點的線段。"
      },
      {
        "name": "重心",
        "statement": "三角形三條中線的交點。"
      },
      {
        "name": "中線面積性質",
        "statement": "一條中線把三角形分成面積相等的兩個三角形。"
      }
    ],
    "formulas": [
      {
        "formula": "BM=MC=BC÷2",
        "conditions": [
          "M 為 BC 中點"
        ],
        "meaning": "中點分段。"
      },
      {
        "formula": "面積(△ABM)=面積(△ACM)",
        "conditions": [
          "AM 為中線，兩小三角形對 BC 有相同高"
        ],
        "meaning": "中線平分三角形面積。"
      },
      {
        "formula": "AG:GM=2:1",
        "conditions": [
          "G 為重心，M 為 BC 中點"
        ],
        "meaning": "會考常見重心分中線比例；由頂點到重心較長。"
      }
    ],
    "nonApplicableCases": [
      "中線不等於線段的中垂線。",
      "一般三角形中線不一定垂直對邊。",
      "一般三角形中線不一定平分頂角。",
      "落點在對邊延長線上不可能是對邊中點，因此不是中線。",
      "重心 2:1 比例是頂點到重心：重心到中點，不能顛倒。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "確認線段一端是三角形頂點。",
        "check": "它所對的邊是哪一條？"
      },
      {
        "step": 2,
        "instruction": "確認另一端位於對邊且把對邊分成兩段相等。",
        "check": "是否有 BM=MC 或中點文字？"
      },
      {
        "step": 3,
        "instruction": "若求分段，使用對邊長除以 2。",
        "check": "單位是否一致？"
      },
      {
        "step": 4,
        "instruction": "若涉及面積，利用同高與等底。",
        "check": "兩小三角形是否共用從頂點到對邊的高？"
      },
      {
        "step": 5,
        "instruction": "若涉及重心，沿同一中線使用 2:1。",
        "check": "較長段是否靠近頂點？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "M 為 BC 中點，判斷 AM。",
        "solutionSteps": [
          "A 是 △ABC 的頂點。",
          "M 是對邊 BC 的中點。"
        ],
        "answer": "AM 是 △ABC 的中線。"
      },
      {
        "exampleId": "L2",
        "prompt": "BC=18，M 為 BC 中點，求 BM、MC。",
        "solutionSteps": [
          "中點分成兩段相等。",
          "18÷2=9。"
        ],
        "answer": "BM=MC=9。"
      },
      {
        "exampleId": "L3",
        "prompt": "AM 為中線，△ABC 面積 30，求 △ABM 面積。",
        "solutionSteps": [
          "BM=MC。",
          "兩小三角形對直線 BC 高相同，面積相等。"
        ],
        "answer": "15。"
      },
      {
        "exampleId": "L4",
        "prompt": "G 為重心，AG=12，求 GM。",
        "solutionSteps": [
          "AG:GM=2:1。",
          "GM=12÷2。"
        ],
        "answer": "6。"
      },
      {
        "exampleId": "L5",
        "prompt": "一線段由 A 連到 BC 且與 BC 垂直，能否必定稱中線？",
        "solutionSteps": [
          "垂直只表示高線。",
          "還需垂足為 BC 中點。"
        ],
        "answer": "不能，除非再知其平分 BC。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "看到通過中點的線就叫中線。",
        "why": "漏掉必須從對面頂點出發。",
        "correction": "中線兩端角色都要檢查。"
      },
      {
        "mistake": "把中線當垂線。",
        "why": "受等腰三線合一印象影響。",
        "correction": "一般三角形中兩者獨立。"
      },
      {
        "mistake": "把中線當角平分線。",
        "why": "只看線段位於圖形中央。",
        "correction": "需另外有等角標記才可平分角。"
      },
      {
        "mistake": "重心比例寫成 1:2。",
        "why": "未記方向。",
        "correction": "從頂點到重心：重心到中點=2:1。"
      },
      {
        "mistake": "中線把周長平分。",
        "why": "把面積性質誤套到周長。",
        "correction": "中線必平分面積，但不必平分周長。"
      },
      {
        "mistake": "落點在對邊延長線仍稱中線。",
        "why": "忽略中點必在線段上。",
        "correction": "中點位於對邊線段內。"
      }
    ],
    "selfCheck": [
      "線段是否從頂點到對邊中點？",
      "中點兩側長度是否相等？",
      "我是否誤把中線當成垂線或角平分線？",
      "中線分出的兩個面積是否相等？",
      "重心比例方向是否為頂點側 2、底邊側 1？"
    ],
    "summary": [
      "中線從頂點連到對邊中點。",
      "每個三角形有三條中線，交於重心。",
      "一條中線平分三角形面積。",
      "一般中線不必垂直或平分角；重心沿中線分成 2:1。"
    ],
    "connections": {
      "previous": "多邊形角度後回到三角形內部線段。",
      "next": [
        "高線只要求垂直，不要求落在中點。",
        "三角形素養題常結合中線面積與重心比例。"
      ]
    },
    "figureReferences": [
      "u16-fig-016-median"
    ],
    "accessibilityNotes": [
      "u16-fig-016-median 的替代文字與結構描述收錄於本技能 drawing-specs.jsonl。"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u16-s016-v001",
        "u16-s016-v002",
        "u16-s016-v003",
        "u16-s016-v004",
        "u16-s016-v005",
        "u16-s016-v006",
        "u16-s016-v007",
        "u16-s016-v008",
        "u16-s016-v009",
        "u16-s016-v010",
        "u16-s016-v011",
        "u16-s016-v012"
      ],
      "constructedResponseIds": [
        "u16-s016-cr001",
        "u16-s016-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "針對「中線概念」逐段核對定義、適用條件與反例；重新演算5個例題，確認未使用後續單元才引入的平行線或四邊形定理，並檢查圖形標記不取代文字條件。",
      "reviewVersion": "human-lecture-review-u16-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "5e2761def61fa30b25903dfdcd8f9fa668fc69accd1852d02c835f4bab9752c1"
  },
  "mcQuestions": [
    {
      "questionId": "u16-s016-v001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-medians",
      "skillOrder": 16,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-016-median",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "三角形的中線是下列哪一種線段？",
      "givenConditions": [
        "線段位於三角形內或邊界"
      ],
      "target": "辨認中線定義",
      "choices": [
        "由一個頂點向對邊作垂線",
        "連結兩邊中點的線段",
        "把一個內角平分的射線",
        "由一個頂點連到對邊中點的線段"
      ],
      "answerIndex": 3,
      "independentSolution": "只有『頂點連到對邊中點』符合定義。",
      "explanation": "中線的兩端是一個頂點與其對邊中點。 找出頂點端。 確認另一端是對邊中點。",
      "steps": [
        "找出頂點端。",
        "確認另一端是對邊中點。"
      ],
      "optionAnalysis": [
        {
          "choice": "由一個頂點向對邊作垂線",
          "truth": false,
          "reason": "這是高線的描述。"
        },
        {
          "choice": "連結兩邊中點的線段",
          "truth": false,
          "reason": "這是中點連線，不是中線。"
        },
        {
          "choice": "把一個內角平分的射線",
          "truth": false,
          "reason": "這是角平分線。"
        },
        {
          "choice": "由一個頂點連到對邊中點的線段",
          "truth": true,
          "reason": "中線的兩端是一個頂點與其對邊中點。"
        }
      ],
      "misconceptionTarget": "把中線與高線、角平分線混淆。",
      "prerequisiteCheck": "認識頂點與對邊。",
      "estimatedTimeSec": "55",
      "unitAndRoundingCheck": "無單位計算。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "選項描述的三種特殊線不同，答案唯一。",
      "difficultyReason": "基礎題，直接辨認定義。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認中線。",
      "tags": [
        "空間與形狀",
        "中線概念",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "323544be388c333ed069ef3a450242b8b1c6cb54b8ee40e16818ace0119c9d21"
    },
    {
      "questionId": "u16-s016-v002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-medians",
      "skillOrder": 16,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "在 △ABC 中，D 是 BC 的中點，BC=14 cm。BD 長多少？",
      "givenConditions": [
        "D在線段BC上"
      ],
      "target": "使用中點性質",
      "choices": [
        "7 cm",
        "3.5 cm",
        "14 cm",
        "28 cm"
      ],
      "answerIndex": 0,
      "independentSolution": "BD=DC=7 cm。",
      "explanation": "中點把BC分成相等兩段，BD=14÷2=7 cm。 使用BD=DC。 將整段除以2。",
      "steps": [
        "使用BD=DC。",
        "將整段除以2。"
      ],
      "optionAnalysis": [
        {
          "choice": "7 cm",
          "truth": true,
          "reason": "中點把BC分成相等兩段，BD=14÷2=7 cm。"
        },
        {
          "choice": "3.5 cm",
          "truth": false,
          "reason": "再多除一次2。"
        },
        {
          "choice": "14 cm",
          "truth": false,
          "reason": "把整段當半段。"
        },
        {
          "choice": "28 cm",
          "truth": false,
          "reason": "把半段關係反向。"
        }
      ],
      "misconceptionTarget": "看到中線就以為要算線段AD。",
      "prerequisiteCheck": "會做除以2。",
      "estimatedTimeSec": "55",
      "unitAndRoundingCheck": "單位為cm，答案精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "D為中點且在BC上，兩半唯一。",
      "difficultyReason": "基礎題，單一步驟中點計算。",
      "literacyContextNecessity": null,
      "authoringIntent": "計算中點分段。",
      "tags": [
        "空間與形狀",
        "中線概念",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "844c506cc5fae044bee63e2880578b7597f5e2ae67421dd8c705238e50988532"
    },
    {
      "questionId": "u16-s016-v003",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-medians",
      "skillOrder": 16,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "一個非退化三角形共有幾條中線？",
      "givenConditions": [
        "每個頂點可連到對邊中點"
      ],
      "target": "知道中線數量",
      "choices": [
        "3條",
        "1條",
        "2條",
        "6條"
      ],
      "answerIndex": 0,
      "independentSolution": "共有3條中線。",
      "explanation": "三角形有三個頂點，每個頂點各決定一條中線。 數三個頂點。 每頂點對應唯一對邊中點。",
      "steps": [
        "數三個頂點。",
        "每頂點對應唯一對邊中點。"
      ],
      "optionAnalysis": [
        {
          "choice": "3條",
          "truth": true,
          "reason": "三角形有三個頂點，每個頂點各決定一條中線。"
        },
        {
          "choice": "1條",
          "truth": false,
          "reason": "只畫出其中一條。"
        },
        {
          "choice": "2條",
          "truth": false,
          "reason": "漏掉一個頂點。"
        },
        {
          "choice": "6條",
          "truth": false,
          "reason": "把每條中線重複計兩次。"
        }
      ],
      "misconceptionTarget": "以圖形對稱性判斷只有等腰三角形才有中線。",
      "prerequisiteCheck": "認識三角形三頂點。",
      "estimatedTimeSec": "50",
      "unitAndRoundingCheck": "無近似。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "任意非退化三角形均成立。",
      "difficultyReason": "基礎題，概念計數。",
      "literacyContextNecessity": null,
      "authoringIntent": "確認所有三角形都有三中線。",
      "tags": [
        "空間與形狀",
        "中線概念",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "40b3677c716fe45dc96a44170782f7e31eed67c4ae6c058a3106de71b05672df"
    },
    {
      "questionId": "u16-s016-v004",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-medians",
      "skillOrder": 16,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-016-median",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "△ABC 的中線 AD 交另外兩條中線於 G。若 AG=8 cm，GD 長多少？",
      "givenConditions": [
        "G為三條中線交點"
      ],
      "target": "使用重心分中線比",
      "choices": [
        "2 cm",
        "8 cm",
        "4 cm",
        "16 cm"
      ],
      "answerIndex": 2,
      "independentSolution": "AG是兩份，8÷2=4，所以GD為一份4 cm。",
      "explanation": "重心G把中線分成AG：GD=2：1，因此GD=8÷2=4 cm。 辨認頂點到重心為較長段。 依2：1換算。",
      "steps": [
        "辨認頂點到重心為較長段。",
        "依2：1換算。"
      ],
      "optionAnalysis": [
        {
          "choice": "2 cm",
          "truth": false,
          "reason": "誤用4：1。"
        },
        {
          "choice": "8 cm",
          "truth": false,
          "reason": "誤認G為AD中點。"
        },
        {
          "choice": "4 cm",
          "truth": true,
          "reason": "重心G把中線分成AG：GD=2：1，因此GD=8÷2=4 cm。"
        },
        {
          "choice": "16 cm",
          "truth": false,
          "reason": "把AG視為短段。"
        }
      ],
      "misconceptionTarget": "把2：1方向顛倒。",
      "prerequisiteCheck": "已知道中線交於重心。",
      "estimatedTimeSec": "75",
      "unitAndRoundingCheck": "長度單位cm，精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "A為頂點、D為對邊中點，比例方向明確。",
      "difficultyReason": "標準題，直接運用重心比例。",
      "literacyContextNecessity": null,
      "authoringIntent": "計算中線分段。",
      "tags": [
        "空間與形狀",
        "中線概念",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "41c07860639e59ce5c6c9770c38b2f2cdff0f4a2816433e11ab3ed24fdd87f8c"
    },
    {
      "questionId": "u16-s016-v005",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-medians",
      "skillOrder": 16,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "△PQR 中，M 是 QR 中點，PM=15 cm，重心為 G。PG 長多少？",
      "givenConditions": [
        "G在線段PM上"
      ],
      "target": "由整條中線求頂點到重心",
      "choices": [
        "5 cm",
        "7.5 cm",
        "10 cm",
        "30 cm"
      ],
      "answerIndex": 2,
      "independentSolution": "PG=10 cm，GM=5 cm，合為15 cm。",
      "explanation": "PG佔整條中線的2/3，所以15×2/3=10 cm。 PM分成3等份比例量。 PG取其中2份。",
      "steps": [
        "PM分成3等份比例量。",
        "PG取其中2份。"
      ],
      "optionAnalysis": [
        {
          "choice": "5 cm",
          "truth": false,
          "reason": "這是重心到中點GM。"
        },
        {
          "choice": "7.5 cm",
          "truth": false,
          "reason": "誤認重心為中點。"
        },
        {
          "choice": "10 cm",
          "truth": true,
          "reason": "PG佔整條中線的2/3，所以15×2/3=10 cm。"
        },
        {
          "choice": "30 cm",
          "truth": false,
          "reason": "把比例當倍數放大整條。"
        }
      ],
      "misconceptionTarget": "記住2：1卻不會換成整體的2/3。",
      "prerequisiteCheck": "會算分數乘法。",
      "estimatedTimeSec": "80",
      "unitAndRoundingCheck": "單位cm，答案精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "G為重心使比例固定，方向清楚。",
      "difficultyReason": "標準題，從部分比轉為整體分率。",
      "literacyContextNecessity": null,
      "authoringIntent": "整條中線與重心比例。",
      "tags": [
        "空間與形狀",
        "中線概念",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "1e3cd1eb001d43d707043bf232d47fdb319bedc480caa023e45c5f8c44c3a18d"
    },
    {
      "questionId": "u16-s016-v006",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-medians",
      "skillOrder": 16,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "△ABC 中，AD 是中線。若 △ABD 的面積為 18 cm²，△ACD 的面積是多少？",
      "givenConditions": [
        "兩小三角形共用從A到BC的高"
      ],
      "target": "利用中線等分面積",
      "choices": [
        "9 cm²",
        "18 cm²",
        "36 cm²",
        "無法判斷"
      ],
      "answerIndex": 1,
      "independentSolution": "兩面積相等，所以為18 cm²。",
      "explanation": "BD=DC，兩小三角形對同一直線BC有相同高，因此面積相等。 由中線得BD=DC。 共同高使面積比等於底比1：1。",
      "steps": [
        "由中線得BD=DC。",
        "共同高使面積比等於底比1：1。"
      ],
      "optionAnalysis": [
        {
          "choice": "9 cm²",
          "truth": false,
          "reason": "誤認一邊是另一邊一半。"
        },
        {
          "choice": "18 cm²",
          "truth": true,
          "reason": "BD=DC，兩小三角形對同一直線BC有相同高，因此面積相等。"
        },
        {
          "choice": "36 cm²",
          "truth": false,
          "reason": "把兩小面積和當單一面積。"
        },
        {
          "choice": "無法判斷",
          "truth": false,
          "reason": "共同高且底BD=DC足以判斷。"
        }
      ],
      "misconceptionTarget": "以三角形外觀判斷而忽略同底線高。",
      "prerequisiteCheck": "已會三角形面積公式。",
      "estimatedTimeSec": "85",
      "unitAndRoundingCheck": "面積單位cm²。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "不需知道AD長或角度，資料足夠。",
      "difficultyReason": "標準題，連結中線與等面積。",
      "literacyContextNecessity": null,
      "authoringIntent": "中線的面積意義。",
      "tags": [
        "空間與形狀",
        "中線概念",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "a3ef0c9b5e435897752f30d19212189482fbe2da7c807af0e6fbb81477f0a5f9"
    },
    {
      "questionId": "u16-s016-v007",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-medians",
      "skillOrder": 16,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "△ABC 的三條中線交於 G。若三條完整中線長分別為 12、15、18 cm，三個『頂點到G』線段長的總和是多少？",
      "givenConditions": [
        "G為重心"
      ],
      "target": "同時使用三條中線的2/3比例",
      "choices": [
        "30 cm",
        "15 cm",
        "22.5 cm",
        "45 cm"
      ],
      "answerIndex": 0,
      "independentSolution": "總長30 cm。",
      "explanation": "頂點到G各為完整中線的2/3，總和=(12+15+18)×2/3=45×2/3=30 cm。 加三條中線得45。 取2/3。",
      "steps": [
        "加三條中線得45。",
        "取2/3。"
      ],
      "optionAnalysis": [
        {
          "choice": "30 cm",
          "truth": true,
          "reason": "頂點到G各為完整中線的2/3，總和=(12+15+18)×2/3=45×2/3=30 cm。"
        },
        {
          "choice": "15 cm",
          "truth": false,
          "reason": "把總中線45除以3。"
        },
        {
          "choice": "22.5 cm",
          "truth": false,
          "reason": "誤取每條的一半。"
        },
        {
          "choice": "45 cm",
          "truth": false,
          "reason": "未乘2/3。"
        }
      ],
      "misconceptionTarget": "逐條比例方向混亂。",
      "prerequisiteCheck": "會做分配律與分數。",
      "estimatedTimeSec": "105",
      "unitAndRoundingCheck": "皆為cm且精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "三條中線可各自使用相同比例，線段不需相連。",
      "difficultyReason": "進階題，整合三條比例並求總量。",
      "literacyContextNecessity": null,
      "authoringIntent": "重心比例的總和。",
      "tags": [
        "空間與形狀",
        "中線概念",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "1fc599e05a555a07865f81f1bba91951ff47fa42e93f8147bf87ec1472b4a30d"
    },
    {
      "questionId": "u16-s016-v008",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-medians",
      "skillOrder": 16,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "△ABC 中，AD 是中線，G 是重心。若 AG−GD=5 cm，AD 長多少？",
      "givenConditions": [
        "A為頂點，D為BC中點"
      ],
      "target": "由差值重建2：1分段",
      "choices": [
        "5 cm",
        "10 cm",
        "20 cm",
        "15 cm"
      ],
      "answerIndex": 3,
      "independentSolution": "GD=5、AG=10，AD=15 cm。",
      "explanation": "設GD=k，AG=2k，差為k=5；AD=3k=15 cm。 設短段為k。 用2k−k=5求k。 整條為3k。",
      "steps": [
        "設短段為k。",
        "用2k−k=5求k。",
        "整條為3k。"
      ],
      "optionAnalysis": [
        {
          "choice": "5 cm",
          "truth": false,
          "reason": "把差當整條。"
        },
        {
          "choice": "10 cm",
          "truth": false,
          "reason": "只算AG。"
        },
        {
          "choice": "20 cm",
          "truth": false,
          "reason": "誤設比例3：1。"
        },
        {
          "choice": "15 cm",
          "truth": true,
          "reason": "設GD=k，AG=2k，差為k=5；AD=3k=15 cm。"
        }
      ],
      "misconceptionTarget": "看到差5就直接加倍。",
      "prerequisiteCheck": "會處理比例差。",
      "estimatedTimeSec": "105",
      "unitAndRoundingCheck": "單位cm，精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "比例方向由A是頂點決定。",
      "difficultyReason": "進階題，從比例差反求全長。",
      "literacyContextNecessity": null,
      "authoringIntent": "重心比例逆推。",
      "tags": [
        "空間與形狀",
        "中線概念",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "f75eb2764ac91f8a2460808c8d8c0df5ca0d259f0b23717882e6767323f2d428"
    },
    {
      "questionId": "u16-s016-v009",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-medians",
      "skillOrder": 16,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "在 △ABC 中，D、E 分別是 BC、CA 的中點，中線 AD 與 BE 交於 G。若 AG=6、GE=3，能否據此判定 BE=9？",
      "givenConditions": [
        "G為兩條中線的交點"
      ],
      "target": "判斷跨中線資料中哪些真正足夠",
      "choices": [
        "能，因AG+GE=9",
        "不能，因AG與GE不在同一直線",
        "能，由 BG：GE=2：1 得 BE=9",
        "不能，因兩條中線不一定相交"
      ],
      "answerIndex": 2,
      "independentSolution": "GE=3可獨立推出BG=6與BE=9；AG=6只是無關的另一條中線資料。",
      "explanation": "E是CA中點，所以BE為中線；G為重心，BG=2GE=6，故BE=6+3=9。 確認BE為中線。 在同一條BE上使用BG：GE=2：1。 求BE=9。",
      "steps": [
        "確認BE為中線。",
        "在同一條BE上使用BG：GE=2：1。",
        "求BE=9。"
      ],
      "optionAnalysis": [
        {
          "choice": "能，因AG+GE=9",
          "truth": false,
          "reason": "AG與GE分屬不同中線，不能直接相加。"
        },
        {
          "choice": "不能，因AG與GE不在同一直線",
          "truth": false,
          "reason": "雖不能直接相加，但GE單獨足以利用重心比例。"
        },
        {
          "choice": "能，由 BG：GE=2：1 得 BE=9",
          "truth": true,
          "reason": "E是CA中點，所以BE為中線；G為重心，BG=2GE=6，故BE=6+3=9。"
        },
        {
          "choice": "不能，因兩條中線不一定相交",
          "truth": false,
          "reason": "三角形中線必交於重心。"
        }
      ],
      "misconceptionTarget": "把不同中線的兩段直接相加，或因有無關資料就誤判無法求。",
      "prerequisiteCheck": "已會重心分中線比例。",
      "estimatedTimeSec": "120",
      "unitAndRoundingCheck": "長度同單位且精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "推理只在BE同一直線上使用比例；AG不作為相加依據。",
      "difficultyReason": "進階題，測試資料相關性與同線比例限制。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認足夠資訊。",
      "tags": [
        "空間與形狀",
        "中線概念",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "b683ff1448c21e6a5c6f7b45aa9f4ca08c84b60cdc5d4b941d4b5291b97e454e"
    },
    {
      "questionId": "u16-s016-v010",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-medians",
      "skillOrder": 16,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-016-median",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "一塊均勻三角形薄板要用單一支點保持平衡。工程師畫出三條中線，支點應放在哪裡？",
      "givenConditions": [
        "薄板厚度與密度均勻",
        "忽略外加物"
      ],
      "target": "將重心概念用於平衡",
      "choices": [
        "任一邊的中點",
        "三條中線的交點",
        "最高頂點",
        "三條高線的交點"
      ],
      "answerIndex": 1,
      "independentSolution": "支點置於重心即可平衡理想均勻薄板。",
      "explanation": "均勻三角形薄板的重心位於三條中線交點。 把幾何中線交點連結到質量平衡。 選三中線交點。",
      "steps": [
        "把幾何中線交點連結到質量平衡。",
        "選三中線交點。"
      ],
      "optionAnalysis": [
        {
          "choice": "任一邊的中點",
          "truth": false,
          "reason": "邊中點不一定是整片重心。"
        },
        {
          "choice": "三條中線的交點",
          "truth": true,
          "reason": "均勻三角形薄板的重心位於三條中線交點。"
        },
        {
          "choice": "最高頂點",
          "truth": false,
          "reason": "頂點不是面積平衡位置。"
        },
        {
          "choice": "三條高線的交點",
          "truth": false,
          "reason": "垂心不代表均勻薄板質心。"
        }
      ],
      "misconceptionTarget": "把名稱『重心』與任意特殊線交點混用。",
      "prerequisiteCheck": "知道中線交點。",
      "estimatedTimeSec": "90",
      "unitAndRoundingCheck": "無數值與近似。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "均勻、單一平面薄板條件使幾何重心適用。",
      "difficultyReason": "素養題，需把幾何重心轉成物理平衡位置。",
      "literacyContextNecessity": "均勻材質與支點平衡是使用中線交點的必要物理條件，刪除情境會改成純定義題。",
      "authoringIntent": "薄板支點設計。",
      "tags": [
        "空間與形狀",
        "中線概念",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "df077bf6fdb4ce9ebf35648545c2bb62b6c910ba6ba4f8bcdc49fdf820605ea5"
    },
    {
      "questionId": "u16-s016-v011",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-medians",
      "skillOrder": 16,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "三角形帆布沿一條中線裁成兩片。原帆布面積為 7.2 m²，忽略裁縫耗損，每片面積是多少？",
      "givenConditions": [
        "裁線從頂點到對邊中點"
      ],
      "target": "運用中線等分面積",
      "choices": [
        "2.4 m²",
        "4.8 m²",
        "無法判斷",
        "3.6 m²"
      ],
      "answerIndex": 3,
      "independentSolution": "每片3.6 m²。",
      "explanation": "中線兩側三角形共高且底相等，面積各為7.2÷2=3.6 m²。 確認裁線是中線。 將總面積除以2。",
      "steps": [
        "確認裁線是中線。",
        "將總面積除以2。"
      ],
      "optionAnalysis": [
        {
          "choice": "2.4 m²",
          "truth": false,
          "reason": "誤以為三條中線分成三份。"
        },
        {
          "choice": "4.8 m²",
          "truth": false,
          "reason": "誤取2/3。"
        },
        {
          "choice": "無法判斷",
          "truth": false,
          "reason": "中線必將面積二等分。"
        },
        {
          "choice": "3.6 m²",
          "truth": true,
          "reason": "中線兩側三角形共高且底相等，面積各為7.2÷2=3.6 m²。"
        }
      ],
      "misconceptionTarget": "把重心2：1比例套到面積分割。",
      "prerequisiteCheck": "會做小數除法。",
      "estimatedTimeSec": "85",
      "unitAndRoundingCheck": "面積單位m²，結果精確到題示小數位。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "忽略耗損使兩片面積和保持7.2。",
      "difficultyReason": "素養題，裁布需求使中線的等面積功能成為核心。",
      "literacyContextNecessity": "情境要求兩片同面積，必須辨認中線而非高線；材料與面積資料不可刪除。",
      "authoringIntent": "規劃等面積裁切。",
      "tags": [
        "空間與形狀",
        "中線概念",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "f3fe95b374c68d1cb9a23748d812bbbd3d225ee14b8c2146cb3e5793a12a41a2"
    },
    {
      "questionId": "u16-s016-v012",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-medians",
      "skillOrder": 16,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "三角形展示板的頂點 A 到對邊中點 D 裝一根支撐桿，支撐桿長 1.8 m。感測器要裝在重心 G，且沿著 AD 從 A 量起。應量多少公尺？",
      "givenConditions": [
        "G為展示板三條中線交點"
      ],
      "target": "把2：1比例轉成安裝距離",
      "choices": [
        "0.6 m",
        "1.2 m",
        "0.9 m",
        "1.8 m"
      ],
      "answerIndex": 1,
      "independentSolution": "從A量1.2 m到G。",
      "explanation": "AG=2/3 AD=2/3×1.8=1.2 m。 辨認A到G為長段。 計算1.8×2/3。",
      "steps": [
        "辨認A到G為長段。",
        "計算1.8×2/3。"
      ],
      "optionAnalysis": [
        {
          "choice": "0.6 m",
          "truth": false,
          "reason": "這是G到D的距離。"
        },
        {
          "choice": "1.2 m",
          "truth": true,
          "reason": "AG=2/3 AD=2/3×1.8=1.2 m。"
        },
        {
          "choice": "0.9 m",
          "truth": false,
          "reason": "誤認重心是中點。"
        },
        {
          "choice": "1.8 m",
          "truth": false,
          "reason": "把感測器裝到D。"
        }
      ],
      "misconceptionTarget": "從錯誤端點量短段。",
      "prerequisiteCheck": "會做小數乘分數。",
      "estimatedTimeSec": "95",
      "unitAndRoundingCheck": "單位m，精確到0.1 m。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題幹明定從A量起，排除0.6 m。",
      "difficultyReason": "素養題，安裝方向決定選用比例的哪一段。",
      "literacyContextNecessity": "工程安裝必須知道從哪個端點量測；刪除『從A量起』會產生1.2與0.6的操作歧義。",
      "authoringIntent": "定位感測器。",
      "tags": [
        "空間與形狀",
        "中線概念",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "dc9b6ccaf5f25129fd0a229bd96c14e32b5f30b09a5131434def3a1a0eb8bab3"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u16-s016-cr001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-medians",
      "skillOrder": 16,
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-016-median",
      "prompt": "△ABC 中，AD 是中線，G 是重心。已知 AG=14 cm。求 GD 與 AD，並寫出所用比例。",
      "requiredWork": [
        "寫AG：GD=2：1。",
        "求一份長。",
        "求完整中線。"
      ],
      "fullCreditSolution": [
        "AG：GD=2：1，所以GD=14÷2=7 cm。",
        "AD=AG+GD=14+7=21 cm。"
      ],
      "alternativeSolutions": [
        "也可用AG=2/3 AD，得AD=14×3/2=21，再求GD=7。"
      ],
      "reasoningSteps": [
        "AG：GD=2：1，所以GD=14÷2=7 cm。",
        "AD=AG+GD=14+7=21 cm。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "比例、GD=7 cm與AD=21 cm三者完整正確。"
        },
        {
          "score": 2,
          "criteria": "方法正確但兩長度有單一算術或抄寫錯。"
        },
        {
          "score": 1,
          "criteria": "只求對GD或AD，且顯示2：1概念。"
        },
        {
          "score": 0,
          "criteria": "把比例方向顛倒、得到GD=28且未檢查，或無作答。"
        }
      ],
      "partialCreditRules": [
        "方法正確但兩長度有單一算術或抄寫錯。",
        "只求對GD或AD，且顯示2：1概念。"
      ],
      "followThroughPolicy": "若AG誤抄但後續正確使用2：1，最高2分。",
      "unitAndNotationRules": "長度附cm；A是頂點，D是對邊中點，比例方向不可反。",
      "answerOnlyPolicy": "只寫兩數無比例或過程，最多1分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "把G視為AD中點。",
        "將2：1套成AD：AG。"
      ],
      "independentReview": {
        "derivedResult": "GD=7 cm，AD=21 cm。",
        "ambiguity": "A為頂點端，故AG是較長的兩份。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "85abe49c0647efdb92c157344e9accb067adeec4f2d3f89c6771074f8f3fda6b"
    },
    {
      "questionId": "u16-s016-cr002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-medians",
      "skillOrder": 16,
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "一塊三角形帆布面積為 24 m²。從一個頂點沿中線裁開後，其中一片又沿該小三角形的一條中線裁開。若兩次裁切均無耗損，四周不重疊，第二次產生的兩片各多少面積？另一大半片多少面積？",
      "requiredWork": [
        "第一次中線把24二等分。",
        "第二次只把其中12再二等分。",
        "列出三片面積並核對總和。"
      ],
      "fullCreditSolution": [
        "第一次得到12 m²與12 m²。",
        "其中一個12 m²小三角形再沿中線裁，得到6 m²與6 m²。",
        "未再裁的另一片仍12 m²；6+6+12=24。"
      ],
      "alternativeSolutions": [
        "可用面積分率表示：第二次兩片各為原面積1/4，另一片為1/2。"
      ],
      "reasoningSteps": [
        "第一次得到12 m²與12 m²。",
        "其中一個12 m²小三角形再沿中線裁，得到6 m²與6 m²。",
        "未再裁的另一片仍12 m²；6+6+12=24。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "清楚得到6、6、12 m²並核對總面積24。"
        },
        {
          "score": 2,
          "criteria": "第一次或第二次分配概念正確，但有單一算術錯或漏核對。"
        },
        {
          "score": 1,
          "criteria": "只正確完成第一次12與12，或知道第二次為6但未列完整。"
        },
        {
          "score": 0,
          "criteria": "把每片當8 m²、套重心2：1或無有效作答。"
        }
      ],
      "partialCreditRules": [
        "第一次或第二次分配概念正確，但有單一算術錯或漏核對。",
        "只正確完成第一次12與12，或知道第二次為6但未列完整。"
      ],
      "followThroughPolicy": "若第一步算術錯但後續每次都正確二等分並核對自己的總量，最高2分。",
      "unitAndNotationRules": "面積使用m²；題目最後共有3片，不是4片。",
      "answerOnlyPolicy": "只答6 m²未說另一片，最多1分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "誤以為兩條中線把原三角形分成三等份。",
        "把第二次裁切作用於兩個12 m²半片。"
      ],
      "independentReview": {
        "derivedResult": "第二次兩片各6 m²，另一片12 m²。",
        "ambiguity": "『其中一片』明示只再裁一個半片，最終三片。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "e29fcb61755abc3ca8bdf23801baab39cba1e1e2d6eb3f1d6b4ec0279484609f"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u16-s016-v001",
      "unitId": "u16",
      "skillId": "triangle-medians",
      "contentSha256": "323544be388c333ed069ef3a450242b8b1c6cb54b8ee40e16818ace0119c9d21",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "只有『頂點連到對邊中點』符合定義。",
      "derivedAnswer": "由一個頂點連到對邊中點的線段",
      "storedAnswer": "由一個頂點連到對邊中點的線段",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「由一個頂點連到對邊中點的線段」；另外三個選項逐一排除：「由一個頂點向對邊作垂線」：這是高線的描述。；「連結兩邊中點的線段」：這是中點連線，不是中線。；「把一個內角平分的射線」：這是角平分線。",
        "undefinedSymbol": "題幹符號與詞語已在「中線概念」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無單位計算。",
        "roundingConflict": "依精確資料獨立推導為「由一個頂點連到對邊中點的線段」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "選項描述的三種特殊線不同，答案唯一。",
        "alternateReading": "若採常見誤讀「把中線與高線、角平分線混淆。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，直接辨認定義。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "認識頂點與對邊。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「辨認中線定義」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形的中線是下列哪一種線段？」獨立重算：只有『頂點連到對邊中點』符合定義。 正確選項「由一個頂點連到對邊中點的線段」。四選項核對：由一個頂點向對邊作垂線=假，這是高線的描述。；連結兩邊中點的線段=假，這是中點連線，不是中線。；把一個內角平分的射線=假，這是角平分線。；由一個頂點連到對邊中點的線段=真，中線的兩端是一個頂點與其對邊中點。 邊界：選項描述的三種特殊線不同，答案唯一。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s016-v002",
      "unitId": "u16",
      "skillId": "triangle-medians",
      "contentSha256": "844c506cc5fae044bee63e2880578b7597f5e2ae67421dd8c705238e50988532",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "BD=DC=7 cm。",
      "derivedAnswer": "7 cm",
      "storedAnswer": "7 cm",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「7 cm」；另外三個選項逐一排除：「3.5 cm」：再多除一次2。；「14 cm」：把整段當半段。；「28 cm」：把半段關係反向。",
        "undefinedSymbol": "題幹符號與詞語已在「中線概念」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "單位為cm，答案精確。",
        "roundingConflict": "依精確資料獨立推導為「7 cm」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "D為中點且在BC上，兩半唯一。",
        "alternateReading": "若採常見誤讀「看到中線就以為要算線段AD。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，單一步驟中點計算。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會做除以2。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「使用中點性質」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「在 △ABC 中，D 是 BC 的中點，BC=14 cm。BD 長多少？」獨立重算：BD=DC=7 cm。 正確選項「7 cm」。四選項核對：7 cm=真，中點把BC分成相等兩段，BD=14÷2=7 cm。；3.5 cm=假，再多除一次2。；14 cm=假，把整段當半段。；28 cm=假，把半段關係反向。 邊界：D為中點且在BC上，兩半唯一。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s016-v003",
      "unitId": "u16",
      "skillId": "triangle-medians",
      "contentSha256": "40b3677c716fe45dc96a44170782f7e31eed67c4ae6c058a3106de71b05672df",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "共有3條中線。",
      "derivedAnswer": "3條",
      "storedAnswer": "3條",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「3條」；另外三個選項逐一排除：「1條」：只畫出其中一條。；「2條」：漏掉一個頂點。；「6條」：把每條中線重複計兩次。",
        "undefinedSymbol": "題幹符號與詞語已在「中線概念」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無近似。",
        "roundingConflict": "依精確資料獨立推導為「3條」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "任意非退化三角形均成立。",
        "alternateReading": "若採常見誤讀「以圖形對稱性判斷只有等腰三角形才有中線。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，概念計數。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "認識三角形三頂點。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「知道中線數量」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一個非退化三角形共有幾條中線？」獨立重算：共有3條中線。 正確選項「3條」。四選項核對：3條=真，三角形有三個頂點，每個頂點各決定一條中線。；1條=假，只畫出其中一條。；2條=假，漏掉一個頂點。；6條=假，把每條中線重複計兩次。 邊界：任意非退化三角形均成立。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s016-v004",
      "unitId": "u16",
      "skillId": "triangle-medians",
      "contentSha256": "41c07860639e59ce5c6c9770c38b2f2cdff0f4a2816433e11ab3ed24fdd87f8c",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "AG是兩份，8÷2=4，所以GD為一份4 cm。",
      "derivedAnswer": "4 cm",
      "storedAnswer": "4 cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「4 cm」；另外三個選項逐一排除：「2 cm」：誤用4：1。；「8 cm」：誤認G為AD中點。；「16 cm」：把AG視為短段。",
        "undefinedSymbol": "題幹符號與詞語已在「中線概念」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "長度單位cm，精確。",
        "roundingConflict": "依精確資料獨立推導為「4 cm」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "A為頂點、D為對邊中點，比例方向明確。",
        "alternateReading": "若採常見誤讀「把2：1方向顛倒。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，直接運用重心比例。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "已知道中線交於重心。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「使用重心分中線比」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「△ABC 的中線 AD 交另外兩條中線於 G。若 AG=8 cm，GD 長多少？」獨立重算：AG是兩份，8÷2=4，所以GD為一份4 cm。 正確選項「4 cm」。四選項核對：2 cm=假，誤用4：1。；8 cm=假，誤認G為AD中點。；4 cm=真，重心G把中線分成AG：GD=2：1，因此GD=8÷2=4 cm。；16 cm=假，把AG視為短段。 邊界：A為頂點、D為對邊中點，比例方向明確。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s016-v005",
      "unitId": "u16",
      "skillId": "triangle-medians",
      "contentSha256": "1e3cd1eb001d43d707043bf232d47fdb319bedc480caa023e45c5f8c44c3a18d",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "PG=10 cm，GM=5 cm，合為15 cm。",
      "derivedAnswer": "10 cm",
      "storedAnswer": "10 cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「10 cm」；另外三個選項逐一排除：「5 cm」：這是重心到中點GM。；「7.5 cm」：誤認重心為中點。；「30 cm」：把比例當倍數放大整條。",
        "undefinedSymbol": "題幹符號與詞語已在「中線概念」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "單位cm，答案精確。",
        "roundingConflict": "依精確資料獨立推導為「10 cm」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "G為重心使比例固定，方向清楚。",
        "alternateReading": "若採常見誤讀「記住2：1卻不會換成整體的2/3。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，從部分比轉為整體分率。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會算分數乘法。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「由整條中線求頂點到重心」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「△PQR 中，M 是 QR 中點，PM=15 cm，重心為 G。PG 長多少？」獨立重算：PG=10 cm，GM=5 cm，合為15 cm。 正確選項「10 cm」。四選項核對：5 cm=假，這是重心到中點GM。；7.5 cm=假，誤認重心為中點。；10 cm=真，PG佔整條中線的2/3，所以15×2/3=10 cm。；30 cm=假，把比例當倍數放大整條。 邊界：G為重心使比例固定，方向清楚。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s016-v006",
      "unitId": "u16",
      "skillId": "triangle-medians",
      "contentSha256": "a3ef0c9b5e435897752f30d19212189482fbe2da7c807af0e6fbb81477f0a5f9",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "兩面積相等，所以為18 cm²。",
      "derivedAnswer": "18 cm²",
      "storedAnswer": "18 cm²",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「18 cm²」；另外三個選項逐一排除：「9 cm²」：誤認一邊是另一邊一半。；「36 cm²」：把兩小面積和當單一面積。；「無法判斷」：共同高且底BD=DC足以判斷。",
        "undefinedSymbol": "題幹符號與詞語已在「中線概念」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "面積單位cm²。",
        "roundingConflict": "依精確資料獨立推導為「18 cm²」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "不需知道AD長或角度，資料足夠。",
        "alternateReading": "若採常見誤讀「以三角形外觀判斷而忽略同底線高。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，連結中線與等面積。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "已會三角形面積公式。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「利用中線等分面積」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「△ABC 中，AD 是中線。若 △ABD 的面積為 18 cm²，△ACD 的面積是多少？」獨立重算：兩面積相等，所以為18 cm²。 正確選項「18 cm²」。四選項核對：9 cm²=假，誤認一邊是另一邊一半。；18 cm²=真，BD=DC，兩小三角形對同一直線BC有相同高，因此面積相等。；36 cm²=假，把兩小面積和當單一面積。；無法判斷=假，共同高且底BD=DC足以判斷。 邊界：不需知道AD長或角度，資料足夠。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s016-v007",
      "unitId": "u16",
      "skillId": "triangle-medians",
      "contentSha256": "1fc599e05a555a07865f81f1bba91951ff47fa42e93f8147bf87ec1472b4a30d",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "總長30 cm。",
      "derivedAnswer": "30 cm",
      "storedAnswer": "30 cm",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「30 cm」；另外三個選項逐一排除：「15 cm」：把總中線45除以3。；「22.5 cm」：誤取每條的一半。；「45 cm」：未乘2/3。",
        "undefinedSymbol": "題幹符號與詞語已在「中線概念」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "皆為cm且精確。",
        "roundingConflict": "依精確資料獨立推導為「30 cm」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "三條中線可各自使用相同比例，線段不需相連。",
        "alternateReading": "若採常見誤讀「逐條比例方向混亂。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，整合三條比例並求總量。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會做分配律與分數。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「同時使用三條中線的2/3比例」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「△ABC 的三條中線交於 G。若三條完整中線長分別為 12、15、18 cm，三個『頂點到G』線段長的總和是多少？」獨立重算：總長30 cm。 正確選項「30 cm」。四選項核對：30 cm=真，頂點到G各為完整中線的2/3，總和=(12+15+18)×2/3=45×2/3=30 cm。；15 cm=假，把總中線45除以3。；22.5 cm=假，誤取每條的一半。；45 cm=假，未乘2/3。 邊界：三條中線可各自使用相同比例，線段不需相連。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s016-v008",
      "unitId": "u16",
      "skillId": "triangle-medians",
      "contentSha256": "f75eb2764ac91f8a2460808c8d8c0df5ca0d259f0b23717882e6767323f2d428",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "GD=5、AG=10，AD=15 cm。",
      "derivedAnswer": "15 cm",
      "storedAnswer": "15 cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「15 cm」；另外三個選項逐一排除：「5 cm」：把差當整條。；「10 cm」：只算AG。；「20 cm」：誤設比例3：1。",
        "undefinedSymbol": "題幹符號與詞語已在「中線概念」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "單位cm，精確。",
        "roundingConflict": "依精確資料獨立推導為「15 cm」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "比例方向由A是頂點決定。",
        "alternateReading": "若採常見誤讀「看到差5就直接加倍。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，從比例差反求全長。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會處理比例差。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「由差值重建2：1分段」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「△ABC 中，AD 是中線，G 是重心。若 AG−GD=5 cm，AD 長多少？」獨立重算：GD=5、AG=10，AD=15 cm。 正確選項「15 cm」。四選項核對：5 cm=假，把差當整條。；10 cm=假，只算AG。；20 cm=假，誤設比例3：1。；15 cm=真，設GD=k，AG=2k，差為k=5；AD=3k=15 cm。 邊界：比例方向由A是頂點決定。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s016-v009",
      "unitId": "u16",
      "skillId": "triangle-medians",
      "contentSha256": "b683ff1448c21e6a5c6f7b45aa9f4ca08c84b60cdc5d4b941d4b5291b97e454e",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "GE=3可獨立推出BG=6與BE=9；AG=6只是無關的另一條中線資料。",
      "derivedAnswer": "能，由 BG：GE=2：1 得 BE=9",
      "storedAnswer": "能，由 BG：GE=2：1 得 BE=9",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「能，由 BG：GE=2：1 得 BE=9」；另外三個選項逐一排除：「能，因AG+GE=9」：AG與GE分屬不同中線，不能直接相加。；「不能，因AG與GE不在同一直線」：雖不能直接相加，但GE單獨足以利用重心比例。；「不能，因兩條中線不一定相交」：三角形中線必交於重心。",
        "undefinedSymbol": "題幹符號與詞語已在「中線概念」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "長度同單位且精確。",
        "roundingConflict": "依精確資料獨立推導為「能，由 BG：GE=2：1 得 BE=9」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "推理只在BE同一直線上使用比例；AG不作為相加依據。",
        "alternateReading": "若採常見誤讀「把不同中線的兩段直接相加，或因有無關資料就誤判無法求。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，測試資料相關性與同線比例限制。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "已會重心分中線比例。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「判斷跨中線資料中哪些真正足夠」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「在 △ABC 中，D、E 分別是 BC、CA 的中點，中線 AD 與 BE 交於 G。若 AG=6、GE=3，能否據此判定 BE=9？」獨立重算：GE=3可獨立推出BG=6與BE=9；AG=6只是無關的另一條中線資料。 正確選項「能，由 BG：GE=2：1 得 BE=9」。四選項核對：能，因AG+GE=9=假，AG與GE分屬不同中線，不能直接相加。；不能，因AG與GE不在同一直線=假，雖不能直接相加，但GE單獨足以利用重心比例。；能，由 BG：GE=2：1 得 BE=9=真，E是CA中點，所以BE為中線；G為重心，BG=2GE=6，故BE=6+3=9。；不能，因兩條中線不一定相交=假，三角形中線必交於重心。 邊界：推理只在BE同一直線上使用比例；AG不作為相加依據。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s016-v010",
      "unitId": "u16",
      "skillId": "triangle-medians",
      "contentSha256": "df077bf6fdb4ce9ebf35648545c2bb62b6c910ba6ba4f8bcdc49fdf820605ea5",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "支點置於重心即可平衡理想均勻薄板。",
      "derivedAnswer": "三條中線的交點",
      "storedAnswer": "三條中線的交點",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「三條中線的交點」；另外三個選項逐一排除：「任一邊的中點」：邊中點不一定是整片重心。；「最高頂點」：頂點不是面積平衡位置。；「三條高線的交點」：垂心不代表均勻薄板質心。",
        "undefinedSymbol": "題幹符號與詞語已在「中線概念」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無數值與近似。",
        "roundingConflict": "依精確資料獨立推導為「三條中線的交點」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "均勻、單一平面薄板條件使幾何重心適用。",
        "alternateReading": "若採常見誤讀「把名稱『重心』與任意特殊線交點混用。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，需把幾何重心轉成物理平衡位置。",
      "literacyContextNecessity": "均勻材質與支點平衡是使用中線交點的必要物理條件，刪除情境會改成純定義題。",
      "prerequisiteCheck": "知道中線交點。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「將重心概念用於平衡」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一塊均勻三角形薄板要用單一支點保持平衡。工程師畫出三條中線，支點應放在哪裡？」獨立重算：支點置於重心即可平衡理想均勻薄板。 正確選項「三條中線的交點」。四選項核對：任一邊的中點=假，邊中點不一定是整片重心。；三條中線的交點=真，均勻三角形薄板的重心位於三條中線交點。；最高頂點=假，頂點不是面積平衡位置。；三條高線的交點=假，垂心不代表均勻薄板質心。 邊界：均勻、單一平面薄板條件使幾何重心適用。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s016-v011",
      "unitId": "u16",
      "skillId": "triangle-medians",
      "contentSha256": "f3fe95b374c68d1cb9a23748d812bbbd3d225ee14b8c2146cb3e5793a12a41a2",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "每片3.6 m²。",
      "derivedAnswer": "3.6 m²",
      "storedAnswer": "3.6 m²",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「3.6 m²」；另外三個選項逐一排除：「2.4 m²」：誤以為三條中線分成三份。；「4.8 m²」：誤取2/3。；「無法判斷」：中線必將面積二等分。",
        "undefinedSymbol": "題幹符號與詞語已在「中線概念」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "面積單位m²，結果精確到題示小數位。",
        "roundingConflict": "依精確資料獨立推導為「3.6 m²」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "忽略耗損使兩片面積和保持7.2。",
        "alternateReading": "若採常見誤讀「把重心2：1比例套到面積分割。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，裁布需求使中線的等面積功能成為核心。",
      "literacyContextNecessity": "情境要求兩片同面積，必須辨認中線而非高線；材料與面積資料不可刪除。",
      "prerequisiteCheck": "會做小數除法。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「運用中線等分面積」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形帆布沿一條中線裁成兩片。原帆布面積為 7.2 m²，忽略裁縫耗損，每片面積是多少？」獨立重算：每片3.6 m²。 正確選項「3.6 m²」。四選項核對：2.4 m²=假，誤以為三條中線分成三份。；4.8 m²=假，誤取2/3。；無法判斷=假，中線必將面積二等分。；3.6 m²=真，中線兩側三角形共高且底相等，面積各為7.2÷2=3.6 m²。 邊界：忽略耗損使兩片面積和保持7.2。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s016-v012",
      "unitId": "u16",
      "skillId": "triangle-medians",
      "contentSha256": "dc9b6ccaf5f25129fd0a229bd96c14e32b5f30b09a5131434def3a1a0eb8bab3",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "從A量1.2 m到G。",
      "derivedAnswer": "1.2 m",
      "storedAnswer": "1.2 m",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「1.2 m」；另外三個選項逐一排除：「0.6 m」：這是G到D的距離。；「0.9 m」：誤認重心是中點。；「1.8 m」：把感測器裝到D。",
        "undefinedSymbol": "題幹符號與詞語已在「中線概念」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "單位m，精確到0.1 m。",
        "roundingConflict": "依精確資料獨立推導為「1.2 m」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題幹明定從A量起，排除0.6 m。",
        "alternateReading": "若採常見誤讀「從錯誤端點量短段。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，安裝方向決定選用比例的哪一段。",
      "literacyContextNecessity": "工程安裝必須知道從哪個端點量測；刪除『從A量起』會產生1.2與0.6的操作歧義。",
      "prerequisiteCheck": "會做小數乘分數。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「把2：1比例轉成安裝距離」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形展示板的頂點 A 到對邊中點 D 裝一根支撐桿，支撐桿長 1.8 m。感測器要裝在重心 G，且沿著 AD 從 A 量起。應量多少公尺？」獨立重算：從A量1.2 m到G。 正確選項「1.2 m」。四選項核對：0.6 m=假，這是G到D的距離。；1.2 m=真，AG=2/3 AD=2/3×1.8=1.2 m。；0.9 m=假，誤認重心是中點。；1.8 m=假，把感測器裝到D。 邊界：題幹明定從A量起，排除0.6 m。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u16-fig-016-median",
      "unitId": "u16",
      "slot": "s016",
      "title": "三角形中線與重心2比1",
      "altText": "三角形ABC中D為BC中點，AD為中線，三條中線以虛線相交於G；AD上標AG比GD為2比1。",
      "svgPath": "figures/u16/u16-fig-016-median.svg",
      "drawingSpec": {
        "canvas": {
          "width": 360,
          "height": 240,
          "viewBox": "0 0 360 240"
        },
        "coordinateSystem": "左上角為(0,0)，x向右、y向下。",
        "geometry": "A(180,35)、B(45,195)、C(315,195)、D(180,195)、重心G(180,142)；AD實線，另兩中線虛線；BD=DC刻痕。",
        "visibleLineRules": "主要邊線使用2.5px黑色實線；輔助線使用1.5px虛線；弧線不得遮住頂點標籤。",
        "hiddenLineRules": "平面圖無隱藏邊；未畫出的延長線不得由視覺自行推定。",
        "labels": "A、B、C、D、G均貼近對應點；比例置右上。",
        "tickMarksAndSymbols": "相等邊以同數量短刻痕表示；直角以小正方形；相等角以同型圓弧。",
        "units": "示意圖無長度單位，題目另有數值時以題幹為準。",
        "arrows": "只在延長線或行進方向使用箭頭。",
        "toScale": false,
        "notToScaleWarning": "圖形不按比例，請依標記與題目條件判斷。",
        "mobileLayout": "360×240畫布；最小文字14px；標籤與線段保持至少6px間距。",
        "answerLeakageControl": "圖中只呈現已知結構與定義標記，不標示題目所求數值或正確選項。"
      },
      "svgAssertions": [
        "AG：GD=2：1",
        "stroke-dasharray",
        "circle cx=\"180\" cy=\"142\"",
        "D</text>"
      ],
      "figureReview": {
        "decision": "pass",
        "mobileReadability": "360px寬預覽下，頂點、刻痕、直角符號與延長線箭頭仍可辨識。",
        "answerLeakage": "未顯示任何題目答案；只保留概念所需結構。",
        "geometryCheck": "已依列出的座標逐項核對端點、交點、刻痕與文字位置。",
        "reviewNote": "三角形中線與重心2比1已逐線檢查：A(180,35)、B(45,195)、C(315,195)、D(180,195)、重心G(180,142)；AD實線，另兩中線虛線；BD=DC刻痕。；標籤配置為A、B、C、D、G均貼近對應點；比例置右上。，未依視覺比例暗示未給定量。",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "4640c78453740e043810b4e5f717192033ce20ab742830048518a152879126ed"
    }
  ]
};
export default skillData;
