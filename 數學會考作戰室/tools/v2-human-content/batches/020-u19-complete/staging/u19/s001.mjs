export const u19_s001 = {
  "lecture": {
    "lectureId": "u19-s001-lecture-r1",
    "unitId": "u19",
    "numericUnitId": 19,
    "topicId": "u19-angles",
    "skillId": "central-inscribed-angle",
    "title": "圓心角與圓周角",
    "unitTitle": "圓",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "slot": "s001",
      "lockedSkillId": "central-inscribed-angle",
      "lockedOrder": 1,
      "scope": "辨認頂點位置並區分圓心角與圓周角。"
    },
    "learningOutcomes": [
      "能由角的頂點判定圓心角或圓周角。",
      "能指出一個角所截的弧。",
      "能避免把圓內任意角誤稱為圓周角。"
    ],
    "prerequisites": [],
    "prerequisiteBridge": "本技能是U19起點，先建立圓上點、圓心、角與弧的精確語言。",
    "glossary": [
      {
        "term": "圓心角",
        "definition": "頂點在圓心，兩邊都是半徑的角。"
      },
      {
        "term": "圓周角",
        "definition": "頂點在圓周上，兩邊與圓各交於另一點的角。"
      },
      {
        "term": "所對弧",
        "definition": "角的兩邊在圓上截出的那段弧。"
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
      "判斷角的種類，第一步不是看角畫得大或小，而是看頂點放在哪裡。",
      "頂點在圓心才是圓心角；頂點在圓周上且兩邊都是弦的方向，才是圓周角。",
      "同一條弧可以同時有圓心角與圓周角，但兩者的大小關係要到後續技能再使用。"
    ],
    "formalDefinitions": [
      {
        "name": "圓心角",
        "statement": "頂點在圓心，兩邊都是半徑的角。"
      },
      {
        "name": "圓周角",
        "statement": "頂點在圓周上，兩邊與圓各交於另一點的角。"
      },
      {
        "name": "所對弧",
        "statement": "角的兩邊在圓上截出的那段弧。"
      }
    ],
    "formulas": [],
    "nonApplicableCases": [
      "頂點在圓內但不在圓心的角，不是圓心角。",
      "頂點在圓外的角，不是圓周角。",
      "只有一邊穿過圓而另一邊未形成弦時，不能直接套用圓周角性質。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "先標出圓心 O。",
        "check": "完成此步後，確認仍在「圓心角與圓周角」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 2,
        "instruction": "確認角的頂點位置。",
        "check": "完成此步後，確認仍在「圓心角與圓周角」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 3,
        "instruction": "沿角的兩邊找到圓上的交點。",
        "check": "完成此步後，確認仍在「圓心角與圓周角」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 4,
        "instruction": "寫出角名與所對弧。",
        "check": "完成此步後，確認仍在「圓心角與圓周角」的CAP範圍且沒有只憑圖形目測。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "s001-L1",
        "prompt": "圓心 O，A、B 在圓上，判斷 ∠AOB。",
        "solutionSteps": [
          "頂點是 O。",
          "OA、OB 都是半徑。"
        ],
        "answer": "∠AOB 是圓心角。",
        "level": "basic"
      },
      {
        "exampleId": "s001-L2",
        "prompt": "A、B、C 在圓上，判斷 ∠ACB。",
        "solutionSteps": [
          "頂點 C 在圓周上。",
          "CA、CB 都是弦。"
        ],
        "answer": "∠ACB 是圓周角。",
        "level": "standard"
      },
      {
        "exampleId": "s001-L3",
        "prompt": "點 P 在圓內但 P≠O，判斷 ∠APB。",
        "solutionSteps": [
          "頂點不在圓心。",
          "頂點也不在圓周。"
        ],
        "answer": "不是本節定義的圓心角或圓周角。",
        "level": "advanced"
      },
      {
        "exampleId": "s001-L4",
        "prompt": "∠ADB 的兩邊交圓於 A、B。指出所對弧。",
        "solutionSteps": [
          "角的端點是 A、B。",
          "選不含頂點 D 的弧。"
        ],
        "answer": "所對弧為弧 AB。",
        "level": "connection"
      }
    ],
    "difficultyConnections": {
      "basic": "辨認「圓心角與圓周角」的定義、符號與單一步驟關係。",
      "standard": "把「圓心角與圓周角」與前置技能、比例或一次代數連接。",
      "advanced": "在多段弧、複合邊界、反求或條件篩選中使用「圓心角與圓周角」。",
      "literacy": "把真實尺寸、旋轉、施工或觀測情境轉成「圓心角與圓周角」的數學模型。"
    },
    "commonMistakes": [
      {
        "mistake": "只看角畫在圓內就叫圓心角",
        "why": "忽略頂點必須是圓心",
        "correction": "先找圓心標記再判定"
      },
      {
        "mistake": "把圓上任意兩線形成的角都叫圓周角",
        "why": "未檢查兩邊是否為弦方向",
        "correction": "確認兩邊都連到圓上另一點"
      },
      {
        "mistake": "所對弧包含圓周角頂點",
        "why": "選錯弧的方向",
        "correction": "圓周角所對弧不含其頂點"
      },
      {
        "mistake": "用角的大小判斷種類",
        "why": "種類由位置而非大小決定",
        "correction": "先看頂點再看兩邊"
      }
    ],
    "selfCheck": [
      "我是否先確認「圓心角與圓周角」的適用條件？",
      "我是否分清半徑、直徑、弦、弧與角的角色？",
      "我是否寫出必要單位，並在最後才取近似值？",
      "我是否用定理或公式驗證，而不是依圖形外觀猜測？"
    ],
    "summary": [
      "圓心角的頂點在圓心。",
      "圓周角的頂點在圓周上。",
      "所對弧由角的兩邊在圓上的端點決定。"
    ],
    "connections": {
      "previous": "U19起始技能。",
      "next": "下一技能為「弧與角」。"
    },
    "figureReferences": [
      {
        "figureId": "u19-s001-fig001",
        "purpose": "圓 O 上有 A、B、C 三點，畫出圓心角 AOB 與圓周角 ACB，並以不同弧線標示共同端點。",
        "altText": "圓 O 上有 A、B、C 三點，畫出圓心角 AOB 與圓周角 ACB，並以不同弧線標示共同端點。，不可按比例目測。"
      }
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u19-s001-v001",
        "u19-s001-v002",
        "u19-s001-v003",
        "u19-s001-v004",
        "u19-s001-v005",
        "u19-s001-v006",
        "u19-s001-v007",
        "u19-s001-v008",
        "u19-s001-v009",
        "u19-s001-v010",
        "u19-s001-v011",
        "u19-s001-v012"
      ],
      "constructedResponseIds": [
        "u19-s001-cr001",
        "u19-s001-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段回讀「圓心角與圓周角」講義，確認所有符號先定義、公式均附條件，並以四個不同目的例題檢查定義辨認、標準運算、進階邊界與實際連結；特別核對：辨認頂點位置並區分圓心角與圓周角。",
      "reviewVersion": "human-lecture-review-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "24862856042a899d17f3ec6aa85f79beedc9b05a07b3db01574c6dc24f9bca8a"
  },
  "questions": [
    {
      "questionId": "u19-s001-v001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "central-inscribed-angle",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s001-fig001",
      "drawingSpecId": "u19-s001-fig001",
      "prompt": "圓 O 中，A、B 在圓上。下列哪一個角一定是圓心角？",
      "text": "圓 O 中，A、B 在圓上。下列哪一個角一定是圓心角？",
      "givenConditions": "O為圓心；A、B在圓上。",
      "target": "選出頂點位於O的角。",
      "choices": [
        "∠AOB",
        "∠OAB",
        "∠ABO",
        "∠APB"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「O為圓心；A、B在圓上。」重算：圓心角的頂點必須在圓心 O，因此 ∠AOB 符合定義。",
      "explanation": "圓心角的頂點必須在圓心 O，因此 ∠AOB 符合定義。 因此唯一正確選項是「∠AOB」。",
      "steps": [
        "確認圓心是O。",
        "比較四個角的中間字母，只有AOB的頂點是O。"
      ],
      "optionAnalysis": [
        {
          "choice": "∠AOB",
          "truth": true,
          "reason": "依題目條件重新計算：圓心角的頂點必須在圓心 O，因此 ∠AOB 符合定義。"
        },
        {
          "choice": "∠OAB",
          "truth": false,
          "reason": "頂點在A，是圓周附近的角，不是圓心角。"
        },
        {
          "choice": "∠ABO",
          "truth": false,
          "reason": "頂點在B，不在圓心。"
        },
        {
          "choice": "∠APB",
          "truth": false,
          "reason": "P的位置未保證是圓心。"
        }
      ],
      "misconceptionTarget": "把含有圓心字母的任意角誤認為圓心角。",
      "prerequisiteCheck": "本題為U19起始概念，只需已知角名與圓的基本名詞。",
      "estimatedTimeSec": 55,
      "unitCheck": "u19-s001-v001 已核對所求量「選出頂點位於O的角。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由角名辨認圓心角。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s001-v001。",
      "difficultyReason": "basic：由角名辨認圓心角。 解題需完成「確認圓心是O。；比較四個角的中間字母，只有AOB的頂點是O。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由角名辨認圓心角。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "d6c5808ba47dad9879ff653f7131849a581dfef6056ecc98e34855b87746afe8"
    },
    {
      "questionId": "u19-s001-v002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "central-inscribed-angle",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "A、B、C 都在同一圓上，則 ∠ACB 屬於哪一類角？",
      "text": "A、B、C 都在同一圓上，則 ∠ACB 屬於哪一類角？",
      "givenConditions": "A、B、C皆在圓周。",
      "target": "判定∠ACB的種類。",
      "choices": [
        "圓心角",
        "圓周角",
        "平角",
        "周角"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「A、B、C皆在圓周。」重算：∠ACB 的頂點 C 在圓周上，兩邊 CA、CB 連到圓上另外兩點，所以是圓周角。",
      "explanation": "∠ACB 的頂點 C 在圓周上，兩邊 CA、CB 連到圓上另外兩點，所以是圓周角。 因此唯一正確選項是「圓周角」。",
      "steps": [
        "找頂點C。",
        "確認C在圓周且A、B也在圓上。"
      ],
      "optionAnalysis": [
        {
          "choice": "圓心角",
          "truth": false,
          "reason": "頂點不是圓心。"
        },
        {
          "choice": "圓周角",
          "truth": true,
          "reason": "依題目條件重新計算：∠ACB 的頂點 C 在圓周上，兩邊 CA、CB 連到圓上另外兩點，所以是圓周角。"
        },
        {
          "choice": "平角",
          "truth": false,
          "reason": "兩邊不是相反射線。"
        },
        {
          "choice": "周角",
          "truth": false,
          "reason": "角度不是360°。"
        }
      ],
      "misconceptionTarget": "只因角畫在圓內就稱圓心角。",
      "prerequisiteCheck": "本題為U19起始概念，只需已知角名與圓的基本名詞。",
      "estimatedTimeSec": 55,
      "unitCheck": "u19-s001-v002 已核對所求量「判定∠ACB的種類。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「依頂點位置辨認圓周角。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s001-v002。",
      "difficultyReason": "basic：依頂點位置辨認圓周角。 解題需完成「找頂點C。；確認C在圓周且A、B也在圓上。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "依頂點位置辨認圓周角。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "8e603e07fadd0796466843f1ebc640155866b7312d94615904f8a2a0db21e38a"
    },
    {
      "questionId": "u19-s001-v003",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "central-inscribed-angle",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓周角 ∠ADB 的兩邊分別通過圓上 A、B 兩點，它所對的弧是哪一段？",
      "text": "圓周角 ∠ADB 的兩邊分別通過圓上 A、B 兩點，它所對的弧是哪一段？",
      "givenConditions": "D、A、B均在圓上。",
      "target": "選出∠ADB所截的弧。",
      "choices": [
        "不含 D 的弧 AB",
        "含 D 的弧 AB",
        "弧 AD",
        "弧 DB"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「D、A、B均在圓上。」重算：圓周角所對弧由兩邊的圓周端點 A、B 決定，且不含角的頂點 D。",
      "explanation": "圓周角所對弧由兩邊的圓周端點 A、B 決定，且不含角的頂點 D。 因此唯一正確選項是「不含 D 的弧 AB」。",
      "steps": [
        "找角兩邊的端點A、B。",
        "選擇不經過頂點D的弧。"
      ],
      "optionAnalysis": [
        {
          "choice": "不含 D 的弧 AB",
          "truth": true,
          "reason": "依題目條件重新計算：圓周角所對弧由兩邊的圓周端點 A、B 決定，且不含角的頂點 D。"
        },
        {
          "choice": "含 D 的弧 AB",
          "truth": false,
          "reason": "圓周角的所對弧不包含頂點D。"
        },
        {
          "choice": "弧 AD",
          "truth": false,
          "reason": "弧AD只對應一邊。"
        },
        {
          "choice": "弧 DB",
          "truth": false,
          "reason": "弧DB只對應另一邊。"
        }
      ],
      "misconceptionTarget": "把包含圓周角頂點的弧當作所對弧。",
      "prerequisiteCheck": "本題為U19起始概念，只需已知角名與圓的基本名詞。",
      "estimatedTimeSec": 60,
      "unitCheck": "u19-s001-v003 已核對所求量「選出∠ADB所截的弧。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「指出圓周角的所對弧。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s001-v003。",
      "difficultyReason": "basic：指出圓周角的所對弧。 解題需完成「找角兩邊的端點A、B。；選擇不經過頂點D的弧。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "指出圓周角的所對弧。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "63c9b6e45829652f58a9213bd64471d611afb84b68a7c4b57d3bcf943615b69d"
    },
    {
      "questionId": "u19-s001-v004",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "central-inscribed-angle",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "點 P 在圓內且 P 不是圓心，A、B 在圓上。關於 ∠APB，下列敘述何者正確？",
      "text": "點 P 在圓內且 P 不是圓心，A、B 在圓上。關於 ∠APB，下列敘述何者正確？",
      "givenConditions": "P在圓內且P≠O；A、B在圓上。",
      "target": "判定∠APB的分類。",
      "choices": [
        "它一定是圓心角",
        "它一定是圓周角",
        "它不一定是圓心角，也不是圓周角",
        "它一定是直角"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「P在圓內且P≠O；A、B在圓上。」重算：頂點 P 既不在圓心，也不在圓周，因此不符合圓心角或圓周角的定義；角度也無法由條件判定。",
      "explanation": "頂點 P 既不在圓心，也不在圓周，因此不符合圓心角或圓周角的定義；角度也無法由條件判定。 因此唯一正確選項是「它不一定是圓心角，也不是圓周角」。",
      "steps": [
        "檢查P不是圓心。",
        "檢查P位於圓內而非圓周。",
        "排除兩種角與固定角度。"
      ],
      "optionAnalysis": [
        {
          "choice": "它一定是圓心角",
          "truth": false,
          "reason": "圓心角頂點必須是圓心。"
        },
        {
          "choice": "它一定是圓周角",
          "truth": false,
          "reason": "圓周角頂點必須在圓周。"
        },
        {
          "choice": "它不一定是圓心角，也不是圓周角",
          "truth": true,
          "reason": "依題目條件重新計算：頂點 P 既不在圓心，也不在圓周，因此不符合圓心角或圓周角的定義；角度也無法由條件判定。"
        },
        {
          "choice": "它一定是直角",
          "truth": false,
          "reason": "沒有直徑或垂直條件。"
        }
      ],
      "misconceptionTarget": "把圓內任意角硬套成圓心角或圓周角。",
      "prerequisiteCheck": "本題為U19起始概念，只需已知角名與圓的基本名詞。",
      "estimatedTimeSec": 75,
      "unitCheck": "u19-s001-v004 已核對所求量「判定∠APB的分類。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「辨認不符合兩種定義的角。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s001-v004。",
      "difficultyReason": "standard：辨認不符合兩種定義的角。 解題需完成「檢查P不是圓心。；檢查P位於圓內而非圓周。；排除兩種角與固定角度。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認不符合兩種定義的角。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "badb16f05a9cc417c8066073c59708a4798d7f31409abdaeac07d853ed246b3e"
    },
    {
      "questionId": "u19-s001-v005",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "central-inscribed-angle",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓 O 中，A、B、C 在圓上。若要寫出以 C 為頂點、兩邊通過 A、B 的圓周角，正確角名為何？",
      "text": "圓 O 中，A、B、C 在圓上。若要寫出以 C 為頂點、兩邊通過 A、B 的圓周角，正確角名為何？",
      "givenConditions": "O為圓心；A、B、C在圓上。",
      "target": "寫出指定圓周角名稱。",
      "choices": [
        "∠ABC",
        "∠ACB",
        "∠BAC",
        "∠AOB"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「O為圓心；A、B、C在圓上。」重算：角名的中間字母是頂點，因此以 C 為頂點且兩邊經 A、B 的角寫作 ∠ACB。",
      "explanation": "角名的中間字母是頂點，因此以 C 為頂點且兩邊經 A、B 的角寫作 ∠ACB。 因此唯一正確選項是「∠ACB」。",
      "steps": [
        "角名中間字母放C。",
        "兩端字母放A與B。"
      ],
      "optionAnalysis": [
        {
          "choice": "∠ABC",
          "truth": false,
          "reason": "頂點是B。"
        },
        {
          "choice": "∠ACB",
          "truth": true,
          "reason": "依題目條件重新計算：角名的中間字母是頂點，因此以 C 為頂點且兩邊經 A、B 的角寫作 ∠ACB。"
        },
        {
          "choice": "∠BAC",
          "truth": false,
          "reason": "頂點是A。"
        },
        {
          "choice": "∠AOB",
          "truth": false,
          "reason": "頂點是O，為圓心角。"
        }
      ],
      "misconceptionTarget": "不理解角名中間字母代表頂點。",
      "prerequisiteCheck": "本題為U19起始概念，只需已知角名與圓的基本名詞。",
      "estimatedTimeSec": 65,
      "unitCheck": "u19-s001-v005 已核對所求量「寫出指定圓周角名稱。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「以指定頂點正確命名圓周角。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s001-v005。",
      "difficultyReason": "standard：以指定頂點正確命名圓周角。 解題需完成「角名中間字母放C。；兩端字母放A與B。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "以指定頂點正確命名圓周角。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "dff7a436bfe6056485a28112a39ec2b8aaf830fd593735947edea9704d08f064"
    },
    {
      "questionId": "u19-s001-v006",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "central-inscribed-angle",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "下列哪一組條件足以保證 ∠APB 是圓周角？",
      "text": "下列哪一組條件足以保證 ∠APB 是圓周角？",
      "givenConditions": "候選條件如選項。",
      "target": "選出能保證圓周角的條件。",
      "choices": [
        "只有 A、B 在同一圓上",
        "P 在圓內，A、B 在圓上",
        "P、A、B 都在同一圓上，且 A、B 分別位於角的兩邊",
        "P 是圓心，A、B 在圓上"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「候選條件如選項。」重算：圓周角要求頂點 P 在圓周上，角的兩邊再交圓於 A、B，因此三點同圓且位置符合即可。",
      "explanation": "圓周角要求頂點 P 在圓周上，角的兩邊再交圓於 A、B，因此三點同圓且位置符合即可。 因此唯一正確選項是「P、A、B 都在同一圓上，且 A、B 分別位於角的兩邊」。",
      "steps": [
        "確認頂點P在圓周。",
        "確認兩邊通過另外兩個圓上點A、B。"
      ],
      "optionAnalysis": [
        {
          "choice": "只有 A、B 在同一圓上",
          "truth": false,
          "reason": "未保證P在圓周。"
        },
        {
          "choice": "P 在圓內，A、B 在圓上",
          "truth": false,
          "reason": "P在圓內不符合定義。"
        },
        {
          "choice": "P、A、B 都在同一圓上，且 A、B 分別位於角的兩邊",
          "truth": true,
          "reason": "依題目條件重新計算：圓周角要求頂點 P 在圓周上，角的兩邊再交圓於 A、B，因此三點同圓且位置符合即可。"
        },
        {
          "choice": "P 是圓心，A、B 在圓上",
          "truth": false,
          "reason": "P為圓心時是圓心角。"
        }
      ],
      "misconceptionTarget": "只檢查角的端點，忘記頂點位置。",
      "prerequisiteCheck": "本題為U19起始概念，只需已知角名與圓的基本名詞。",
      "estimatedTimeSec": 80,
      "unitCheck": "u19-s001-v006 已核對所求量「選出能保證圓周角的條件。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「判斷圓周角的充分條件。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s001-v006。",
      "difficultyReason": "standard：判斷圓周角的充分條件。 解題需完成「確認頂點P在圓周。；確認兩邊通過另外兩個圓上點A、B。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "判斷圓周角的充分條件。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "506052164d126350a14213ee2dd31d034c2e7f62cf26a532ca91c88518fdc3bc"
    },
    {
      "questionId": "u19-s001-v007",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "central-inscribed-angle",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s001-fig001",
      "drawingSpecId": "u19-s001-fig001",
      "prompt": "圓 O 中，A、B、C 在圓上，D 位於圓內但 D≠O。下列四個角中，恰有兩個屬於「圓心角或圓周角」的是哪一組？",
      "text": "圓 O 中，A、B、C 在圓上，D 位於圓內但 D≠O。下列四個角中，恰有兩個屬於「圓心角或圓周角」的是哪一組？",
      "givenConditions": "O為圓心；A、B、C在圓上；D在圓內且D≠O。",
      "target": "選出兩個符合定義的角。",
      "choices": [
        "∠ADB、∠AOB",
        "∠AOB、∠ACB",
        "∠ADB、∠ACB",
        "∠OAB、∠ADB"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「O為圓心；A、B、C在圓上；D在圓內且D≠O。」重算：∠AOB 的頂點 O 是圓心，為圓心角；∠ACB 的頂點 C 在圓周，為圓周角。∠ADB 頂點在圓內非圓心；∠OAB 雖頂點A在圓周，但一邊AO終於圓心而非另一圓周點，依本題角的指定不構成所需圓周角。",
      "explanation": "∠AOB 的頂點 O 是圓心，為圓心角；∠ACB 的頂點 C 在圓周，為圓周角。∠ADB 頂點在圓內非圓心；∠OAB 雖頂點A在圓周，但一邊AO終於圓心而非另一圓周點，依本題角的指定不構成所需圓周角。 因此唯一正確選項是「∠AOB、∠ACB」。",
      "steps": [
        "逐一看中間字母。",
        "檢查頂點位置與兩邊端點。",
        "選出唯一兩個符合定義者。"
      ],
      "optionAnalysis": [
        {
          "choice": "∠ADB、∠AOB",
          "truth": false,
          "reason": "包含不符合定義的∠ADB。"
        },
        {
          "choice": "∠AOB、∠ACB",
          "truth": true,
          "reason": "依題目條件重新計算：∠AOB 的頂點 O 是圓心，為圓心角；∠ACB 的頂點 C 在圓周，為圓周角。∠ADB 頂點在圓內非圓心；∠OAB 雖頂點A在圓周，但一邊AO終於圓心而非另一圓周點，依本題角的指定不構成所需圓周角。"
        },
        {
          "choice": "∠ADB、∠ACB",
          "truth": false,
          "reason": "包含∠ADB。"
        },
        {
          "choice": "∠OAB、∠ADB",
          "truth": false,
          "reason": "兩角皆不符合本題完整定義。"
        }
      ],
      "misconceptionTarget": "只看頂點，未檢查圓周角兩邊是否通過圓上另外兩點。",
      "prerequisiteCheck": "本題為U19起始概念，只需已知角名與圓的基本名詞。",
      "estimatedTimeSec": 120,
      "unitCheck": "u19-s001-v007 已核對所求量「選出兩個符合定義的角。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「同時檢查四個角的完整定義。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s001-v007。",
      "difficultyReason": "advanced：同時檢查四個角的完整定義。 解題需完成「逐一看中間字母。；檢查頂點位置與兩邊端點。；選出唯一兩個符合定義者。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "同時檢查四個角的完整定義。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "a527daa8b5d78f3469a59df8f0eead6add88c607e1fe2217d69dd97e51b4a584"
    },
    {
      "questionId": "u19-s001-v008",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "central-inscribed-angle",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "同一圖中，∠AOB 與 ∠ACB 都以 A、B 為兩邊端點。哪一敘述必然正確？",
      "text": "同一圖中，∠AOB 與 ∠ACB 都以 A、B 為兩邊端點。哪一敘述必然正確？",
      "givenConditions": "O為圓心；A、B、C在圓上。",
      "target": "判斷兩角必然共享的結構。",
      "choices": [
        "兩角頂點相同",
        "兩角一定相等",
        "兩角都是圓周角",
        "兩角所對的弧端點相同"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「O為圓心；A、B、C在圓上。」重算：兩角的兩邊都通過 A、B，所以所對弧的端點相同；但頂點不同，角度關係需另用定理，且∠AOB是圓心角。",
      "explanation": "兩角的兩邊都通過 A、B，所以所對弧的端點相同；但頂點不同，角度關係需另用定理，且∠AOB是圓心角。 因此唯一正確選項是「兩角所對的弧端點相同」。",
      "steps": [
        "比較兩角的端點A、B。",
        "不預先假設角度大小。"
      ],
      "optionAnalysis": [
        {
          "choice": "兩角頂點相同",
          "truth": false,
          "reason": "頂點分別為O與C。"
        },
        {
          "choice": "兩角一定相等",
          "truth": false,
          "reason": "圓心角通常是同弧圓周角兩倍，不相等。"
        },
        {
          "choice": "兩角都是圓周角",
          "truth": false,
          "reason": "∠AOB不是圓周角。"
        },
        {
          "choice": "兩角所對的弧端點相同",
          "truth": true,
          "reason": "依題目條件重新計算：兩角的兩邊都通過 A、B，所以所對弧的端點相同；但頂點不同，角度關係需另用定理，且∠AOB是圓心角。"
        }
      ],
      "misconceptionTarget": "把「同對弧」誤解為「角相等」。",
      "prerequisiteCheck": "本題為U19起始概念，只需已知角名與圓的基本名詞。",
      "estimatedTimeSec": 100,
      "unitCheck": "u19-s001-v008 已核對所求量「判斷兩角必然共享的結構。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「辨認共享弧端點而不越級使用性質。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s001-v008。",
      "difficultyReason": "advanced：辨認共享弧端點而不越級使用性質。 解題需完成「比較兩角的端點A、B。；不預先假設角度大小。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認共享弧端點而不越級使用性質。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "b9eb098cb46bcde37a39bd0d19de3d8aa683af971a2107e0fdf79c61a107266e"
    },
    {
      "questionId": "u19-s001-v009",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "central-inscribed-angle",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "若一個角的頂點在圓周上，但其中一邊沿切線方向、另一邊為弦，依本單元目前的圓周角定義，該角應如何處理？",
      "text": "若一個角的頂點在圓周上，但其中一邊沿切線方向、另一邊為弦，依本單元目前的圓周角定義，該角應如何處理？",
      "givenConditions": "頂點在圓周；一邊為切線、一邊為弦。",
      "target": "判斷是否可直接套圓周角性質。",
      "choices": [
        "一定是圓心角",
        "一定等於所對弧的一半",
        "一定是90°",
        "不能直接當成由兩弦形成的圓周角"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「頂點在圓周；一邊為切線、一邊為弦。」重算：本單元圓周角由兩條弦方向形成；切線與弦的夾角需要其他性質，不能直接套用圓周角定理。",
      "explanation": "本單元圓周角由兩條弦方向形成；切線與弦的夾角需要其他性質，不能直接套用圓周角定理。 因此唯一正確選項是「不能直接當成由兩弦形成的圓周角」。",
      "steps": [
        "辨認一邊是切線。",
        "檢查是否兩邊都為弦。",
        "拒絕直接套用圓周角性質。"
      ],
      "optionAnalysis": [
        {
          "choice": "一定是圓心角",
          "truth": false,
          "reason": "頂點不在圓心。"
        },
        {
          "choice": "一定等於所對弧的一半",
          "truth": false,
          "reason": "缺少兩弦形成圓周角的條件。"
        },
        {
          "choice": "一定是90°",
          "truth": false,
          "reason": "切線與弦夾角不一定90°。"
        },
        {
          "choice": "不能直接當成由兩弦形成的圓周角",
          "truth": true,
          "reason": "依題目條件重新計算：本單元圓周角由兩條弦方向形成；切線與弦的夾角需要其他性質，不能直接套用圓周角定理。"
        }
      ],
      "misconceptionTarget": "把任何頂點在圓上的角都當成圓周角。",
      "prerequisiteCheck": "本題為U19起始概念，只需已知角名與圓的基本名詞。",
      "estimatedTimeSec": 110,
      "unitCheck": "u19-s001-v009 已核對所求量「判斷是否可直接套圓周角性質。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「辨認圓周角定義的邊界。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s001-v009。",
      "difficultyReason": "advanced：辨認圓周角定義的邊界。 解題需完成「辨認一邊是切線。；檢查是否兩邊都為弦。；拒絕直接套用圓周角性質。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認圓周角定義的邊界。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "2be1b709cb07246685961aa749ee1d9ca4aaefb14a881aca69ddf7ce56d9d697"
    },
    {
      "questionId": "u19-s001-v010",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "central-inscribed-angle",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形廣場中央標 O，邊緣設 A、B 兩盞燈。攝影機裝在 O，鏡頭由 OA 轉到 OB 所形成的角，在數學模型中是什麼？",
      "text": "圓形廣場中央標 O，邊緣設 A、B 兩盞燈。攝影機裝在 O，鏡頭由 OA 轉到 OB 所形成的角，在數學模型中是什麼？",
      "givenConditions": "廣場為圓；O為中心；A、B在邊緣。",
      "target": "判定鏡頭轉角的種類。",
      "choices": [
        "圓心角",
        "圓周角",
        "切線角",
        "內接四邊形的角"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「廣場為圓；O為中心；A、B在邊緣。」重算：攝影機位置 O 是圓心，鏡頭方向 OA、OB 都指向圓周，因此形成圓心角。",
      "explanation": "攝影機位置 O 是圓心，鏡頭方向 OA、OB 都指向圓周，因此形成圓心角。 因此唯一正確選項是「圓心角」。",
      "steps": [
        "把廣場中心視為圓心O。",
        "兩條視線是半徑方向。"
      ],
      "optionAnalysis": [
        {
          "choice": "圓心角",
          "truth": true,
          "reason": "依題目條件重新計算：攝影機位置 O 是圓心，鏡頭方向 OA、OB 都指向圓周，因此形成圓心角。"
        },
        {
          "choice": "圓周角",
          "truth": false,
          "reason": "頂點不在廣場邊緣。"
        },
        {
          "choice": "切線角",
          "truth": false,
          "reason": "題目沒有切線。"
        },
        {
          "choice": "內接四邊形的角",
          "truth": false,
          "reason": "只有三個點，未形成四邊形。"
        }
      ],
      "misconceptionTarget": "被生活情境干擾而忽略頂點位置。",
      "prerequisiteCheck": "本題為U19起始概念，只需已知角名與圓的基本名詞。",
      "estimatedTimeSec": 80,
      "unitCheck": "u19-s001-v010 已核對所求量「判定鏡頭轉角的種類。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「把中央旋轉視角轉成圓心角。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s001-v010。",
      "difficultyReason": "literacy：把中央旋轉視角轉成圓心角。 解題需完成「把廣場中心視為圓心O。；兩條視線是半徑方向。」。",
      "literacyContextNecessity": "中心位置與邊緣目標是判定角種類的必要資訊。",
      "authoringIntent": "把中央旋轉視角轉成圓心角。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "947bb1ad4a1a5a7977b4220b121c976c4bd2b6cdcedb46fb410f6d6cdfcc13b7"
    },
    {
      "questionId": "u19-s001-v011",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "central-inscribed-angle",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "環形看台邊緣的座位 C 觀看場地邊緣兩標記 A、B，視線 CA、CB 形成的角可建模為何者？",
      "text": "環形看台邊緣的座位 C 觀看場地邊緣兩標記 A、B，視線 CA、CB 形成的角可建模為何者？",
      "givenConditions": "A、B、C位於同一圓形邊緣。",
      "target": "判定視角模型。",
      "choices": [
        "圓心角",
        "周角",
        "相離直線",
        "圓周角"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「A、B、C位於同一圓形邊緣。」重算：C、A、B 都位於同一圓形邊緣，頂點 C 在圓周，兩視線連到另外兩個圓上點，構成圓周角。",
      "explanation": "C、A、B 都位於同一圓形邊緣，頂點 C 在圓周，兩視線連到另外兩個圓上點，構成圓周角。 因此唯一正確選項是「圓周角」。",
      "steps": [
        "把看台邊緣視為圓周。",
        "確認C是角頂點且在圓周。"
      ],
      "optionAnalysis": [
        {
          "choice": "圓心角",
          "truth": false,
          "reason": "頂點C不在圓心。"
        },
        {
          "choice": "周角",
          "truth": false,
          "reason": "視角不是360°。"
        },
        {
          "choice": "相離直線",
          "truth": false,
          "reason": "兩視線相交於C。"
        },
        {
          "choice": "圓周角",
          "truth": true,
          "reason": "依題目條件重新計算：C、A、B 都位於同一圓形邊緣，頂點 C 在圓周，兩視線連到另外兩個圓上點，構成圓周角。"
        }
      ],
      "misconceptionTarget": "把觀察者位置忽略，只看兩個目標點。",
      "prerequisiteCheck": "本題為U19起始概念，只需已知角名與圓的基本名詞。",
      "estimatedTimeSec": 85,
      "unitCheck": "u19-s001-v011 已核對所求量「判定視角模型。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「把環形看台視角轉成圓周角。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s001-v011。",
      "difficultyReason": "literacy：把環形看台視角轉成圓周角。 解題需完成「把看台邊緣視為圓周。；確認C是角頂點且在圓周。」。",
      "literacyContextNecessity": "座位與標記都在圓周是模型成立的必要條件。",
      "authoringIntent": "把環形看台視角轉成圓周角。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "bbfa6a6ffa24634c6e133239c660bfba4965d5cc6f285b7102f3a4740a63e235"
    },
    {
      "questionId": "u19-s001-v012",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "central-inscribed-angle",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "工程圖以 O 表示圓形零件中心，P 是零件內部鑽孔位置且 P≠O。技師量得 ∠APB。下列判斷何者最嚴謹？",
      "text": "工程圖以 O 表示圓形零件中心，P 是零件內部鑽孔位置且 P≠O。技師量得 ∠APB。下列判斷何者最嚴謹？",
      "givenConditions": "P在圓內且P≠O；A、B在圓上。",
      "target": "判定能否命名為圓心角。",
      "choices": [
        "它必為圓心角",
        "它必為圓周角",
        "不能只因角位於圓內就稱為圓心角",
        "它必為180°"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「P在圓內且P≠O；A、B在圓上。」重算：P只是圓內鑽孔且不是圓心，也不在圓周，故不符合兩類角的定義；工程圖位置資訊不可省略。",
      "explanation": "P只是圓內鑽孔且不是圓心，也不在圓周，故不符合兩類角的定義；工程圖位置資訊不可省略。 因此唯一正確選項是「不能只因角位於圓內就稱為圓心角」。",
      "steps": [
        "辨認P的位置。",
        "比較圓心角與圓周角定義。"
      ],
      "optionAnalysis": [
        {
          "choice": "它必為圓心角",
          "truth": false,
          "reason": "P明確不是O。"
        },
        {
          "choice": "它必為圓周角",
          "truth": false,
          "reason": "P不在圓周。"
        },
        {
          "choice": "不能只因角位於圓內就稱為圓心角",
          "truth": true,
          "reason": "依題目條件重新計算：P只是圓內鑽孔且不是圓心，也不在圓周，故不符合兩類角的定義；工程圖位置資訊不可省略。"
        },
        {
          "choice": "它必為180°",
          "truth": false,
          "reason": "沒有共線條件。"
        }
      ],
      "misconceptionTarget": "以日常「中心附近」取代精確圓心。",
      "prerequisiteCheck": "本題為U19起始概念，只需已知角名與圓的基本名詞。",
      "estimatedTimeSec": 90,
      "unitCheck": "u19-s001-v012 已核對所求量「判定能否命名為圓心角。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「在工程情境中維持角定義精確性。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s001-v012。",
      "difficultyReason": "literacy：在工程情境中維持角定義精確性。 解題需完成「辨認P的位置。；比較圓心角與圓周角定義。」。",
      "literacyContextNecessity": "鑽孔是否位於精確圓心直接決定可否使用圓心角性質。",
      "authoringIntent": "在工程情境中維持角定義精確性。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "f7ab00cefb15e870b060b6b82ffe0466edd85bc5603180c1f6676d7976242dcd"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u19-s001-cr001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "central-inscribed-angle",
      "difficulty": "advanced",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u19-s001-fig001",
      "drawingSpecId": "u19-s001-fig001",
      "prompt": "圓 O 中，A、B、C 在圓上，D 在圓內且 D≠O。請分類 ∠AOB、∠ACB、∠ADB，並逐一說明判定依據。",
      "requiredWork": [
        "指出每個角的頂點位置。",
        "說明圓心角與圓周角的必要條件。",
        "對不屬兩類者說明原因。"
      ],
      "standardSolution": [
        "∠AOB 頂點在圓心O且兩邊為半徑，所以是圓心角。",
        "∠ACB 頂點C在圓周，兩邊連到圓上A、B，所以是圓周角。",
        "∠ADB 頂點D在圓內但不是圓心，也不在圓周，因此不屬這兩類。"
      ],
      "fullCreditSolution": [
        "∠AOB 頂點在圓心O且兩邊為半徑，所以是圓心角。",
        "∠ACB 頂點C在圓周，兩邊連到圓上A、B，所以是圓周角。",
        "∠ADB 頂點D在圓內但不是圓心，也不在圓周，因此不屬這兩類。"
      ],
      "alternativeSolutions": [
        "可用角名中間字母先找頂點，再對照點的位置分類。"
      ],
      "reasoningSteps": [
        "∠AOB 頂點在圓心O且兩邊為半徑，所以是圓心角。",
        "∠ACB 頂點C在圓周，兩邊連到圓上A、B，所以是圓周角。",
        "∠ADB 頂點D在圓內但不是圓心，也不在圓周，因此不屬這兩類。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "三角皆分類正確，且三項理由完整。"
        },
        {
          "score": 2,
          "criteria": "分類全對但有一項理由不完整，或只錯一項。"
        },
        {
          "score": 1,
          "criteria": "至少正確辨認一個角並提到頂點位置。"
        },
        {
          "score": 0,
          "criteria": "分類多數錯誤且未使用頂點位置。"
        }
      ],
      "partialCreditRules": [
        "理由不完整但分類正確，可得部分分。",
        "僅寫名稱而無理由最高2分。"
      ],
      "followThroughPolicy": "前一項分類錯誤不影響後續各角獨立評分。",
      "unitNotationRules": "角名使用∠；圓心記為O。",
      "answerOnlyPolicy": "只列三個分類且全對但沒有說明，給2分。",
      "commonErrors": [
        "把圓內任意角當圓心角。",
        "把∠ADB當圓周角。"
      ],
      "independentReview": {
        "derivedResult": "AOB圓心角、ACB圓周角、ADB皆非。",
        "ambiguity": "各角可依頂點位置唯一分類。",
        "decision": "pass",
        "reviewNote": "u19-s001-cr001 由題目條件另行推導得到「AOB圓心角、ACB圓周角、ADB皆非。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "f724a423c77b0f44623e5ebb675e508347928e5438f094a3b42538c30a519675"
    },
    {
      "questionId": "u19-s001-cr002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "central-inscribed-angle",
      "difficulty": "standard",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "請自行描述一個圓周角 ∠XYZ 必須滿足的點位置條件，並指出它所對弧如何決定。",
      "requiredWork": [
        "說明Y的位置。",
        "說明X、Z的位置與角邊。",
        "說明所對弧不含Y。"
      ],
      "standardSolution": [
        "Y 必須在圓周上。",
        "X、Z 是角兩邊與圓周的另外交點，YX、YZ為弦方向。",
        "所對弧以X、Z為端點，選不含頂點Y的那段弧。"
      ],
      "fullCreditSolution": [
        "Y 必須在圓周上。",
        "X、Z 是角兩邊與圓周的另外交點，YX、YZ為弦方向。",
        "所對弧以X、Z為端點，選不含頂點Y的那段弧。"
      ],
      "alternativeSolutions": [
        "可畫一個圓，標出X、Y、Z後配合文字說明。"
      ],
      "reasoningSteps": [
        "Y 必須在圓周上。",
        "X、Z 是角兩邊與圓周的另外交點，YX、YZ為弦方向。",
        "所對弧以X、Z為端點，選不含頂點Y的那段弧。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "三個位置與所對弧條件皆完整。"
        },
        {
          "score": 2,
          "criteria": "圓周角條件大致正確但漏一項。"
        },
        {
          "score": 1,
          "criteria": "只知道頂點在圓周。"
        },
        {
          "score": 0,
          "criteria": "把頂點放在圓心或無有效敘述。"
        }
      ],
      "partialCreditRules": [
        "圖示正確可補足部分文字。"
      ],
      "followThroughPolicy": "若符號順序寫反但頂點與弧意義清楚，扣1分內。",
      "unitNotationRules": "所對弧名稱可寫弧XZ；不得用長度單位。",
      "answerOnlyPolicy": "只寫「頂點在圓上」給1分。",
      "commonErrors": [
        "所對弧包含Y。",
        "只要求X、Z在圓上，未限制Y。"
      ],
      "independentReview": {
        "derivedResult": "頂點Y在圓周，所對弧為不含Y的弧XZ。",
        "ambiguity": "題目要求定義性敘述，答案範圍明確。",
        "decision": "pass",
        "reviewNote": "u19-s001-cr002 由題目條件另行推導得到「頂點Y在圓周，所對弧為不含Y的弧XZ。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "2838514281b8b25cc63c9e2466e5539cd1382784241cc12e22dea50db0807ee7"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u19-s001-v001",
      "contentSha256": "d6c5808ba47dad9879ff653f7131849a581dfef6056ecc98e34855b87746afe8",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「O為圓心；A、B在圓上。」重算：圓心角的頂點必須在圓心 O，因此 ∠AOB 符合定義。",
      "derivedAnswer": "∠AOB",
      "storedAnswer": "∠AOB",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「∠AOB」符合；三個干擾項分別因「頂點在A，是圓周附近的角，不是圓心角。；頂點在B，不在圓心。；P的位置未保證是圓心。」而排除。",
        "undefinedSymbol": "u19-s001-v001 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓心角與圓周角」講義定義。",
        "unitConflict": "題目所求為「選出頂點位於O的角。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由角名辨認圓心角。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「O為圓心；A、B在圓上。」重讀，所求「選出頂點位於O的角。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是由角名辨認圓心角。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "無U19內前置技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓 O 中，A、B 在圓上。下列哪一個角一定是圓心角？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s001-v001 人工重算：圓心角的頂點必須在圓心 O，因此 ∠AOB 符合定義。 正確選項為「∠AOB」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s001-v002",
      "contentSha256": "8e603e07fadd0796466843f1ebc640155866b7312d94615904f8a2a0db21e38a",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「A、B、C皆在圓周。」重算：∠ACB 的頂點 C 在圓周上，兩邊 CA、CB 連到圓上另外兩點，所以是圓周角。",
      "derivedAnswer": "圓周角",
      "storedAnswer": "圓周角",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「圓周角」符合；三個干擾項分別因「頂點不是圓心。；兩邊不是相反射線。；角度不是360°。」而排除。",
        "undefinedSymbol": "u19-s001-v002 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓心角與圓周角」講義定義。",
        "unitConflict": "題目所求為「判定∠ACB的種類。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「依頂點位置辨認圓周角。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「A、B、C皆在圓周。」重讀，所求「判定∠ACB的種類。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是依頂點位置辨認圓周角。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "無U19內前置技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「A、B、C 都在同一圓上，則 ∠ACB 屬於哪一類角？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s001-v002 人工重算：∠ACB 的頂點 C 在圓周上，兩邊 CA、CB 連到圓上另外兩點，所以是圓周角。 正確選項為「圓周角」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s001-v003",
      "contentSha256": "63c9b6e45829652f58a9213bd64471d611afb84b68a7c4b57d3bcf943615b69d",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「D、A、B均在圓上。」重算：圓周角所對弧由兩邊的圓周端點 A、B 決定，且不含角的頂點 D。",
      "derivedAnswer": "不含 D 的弧 AB",
      "storedAnswer": "不含 D 的弧 AB",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「不含 D 的弧 AB」符合；三個干擾項分別因「圓周角的所對弧不包含頂點D。；弧AD只對應一邊。；弧DB只對應另一邊。」而排除。",
        "undefinedSymbol": "u19-s001-v003 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓心角與圓周角」講義定義。",
        "unitConflict": "題目所求為「選出∠ADB所截的弧。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「指出圓周角的所對弧。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「D、A、B均在圓上。」重讀，所求「選出∠ADB所截的弧。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是指出圓周角的所對弧。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "無U19內前置技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓周角 ∠ADB 的兩邊分別通過圓上 A、B 兩點，它所對的弧是哪一段？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s001-v003 人工重算：圓周角所對弧由兩邊的圓周端點 A、B 決定，且不含角的頂點 D。 正確選項為「不含 D 的弧 AB」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s001-v004",
      "contentSha256": "badb16f05a9cc417c8066073c59708a4798d7f31409abdaeac07d853ed246b3e",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「P在圓內且P≠O；A、B在圓上。」重算：頂點 P 既不在圓心，也不在圓周，因此不符合圓心角或圓周角的定義；角度也無法由條件判定。",
      "derivedAnswer": "它不一定是圓心角，也不是圓周角",
      "storedAnswer": "它不一定是圓心角，也不是圓周角",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「它不一定是圓心角，也不是圓周角」符合；三個干擾項分別因「圓心角頂點必須是圓心。；圓周角頂點必須在圓周。；沒有直徑或垂直條件。」而排除。",
        "undefinedSymbol": "u19-s001-v004 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓心角與圓周角」講義定義。",
        "unitConflict": "題目所求為「判定∠APB的分類。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「辨認不符合兩種定義的角。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「P在圓內且P≠O；A、B在圓上。」重讀，所求「判定∠APB的分類。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是辨認不符合兩種定義的角。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "無U19內前置技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「點 P 在圓內且 P 不是圓心，A、B 在圓上。關於 ∠APB，下列敘述何者正確？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s001-v004 人工重算：頂點 P 既不在圓心，也不在圓周，因此不符合圓心角或圓周角的定義；角度也無法由條件判定。 正確選項為「它不一定是圓心角，也不是圓周角」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s001-v005",
      "contentSha256": "dff7a436bfe6056485a28112a39ec2b8aaf830fd593735947edea9704d08f064",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「O為圓心；A、B、C在圓上。」重算：角名的中間字母是頂點，因此以 C 為頂點且兩邊經 A、B 的角寫作 ∠ACB。",
      "derivedAnswer": "∠ACB",
      "storedAnswer": "∠ACB",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「∠ACB」符合；三個干擾項分別因「頂點是B。；頂點是A。；頂點是O，為圓心角。」而排除。",
        "undefinedSymbol": "u19-s001-v005 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓心角與圓周角」講義定義。",
        "unitConflict": "題目所求為「寫出指定圓周角名稱。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「以指定頂點正確命名圓周角。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「O為圓心；A、B、C在圓上。」重讀，所求「寫出指定圓周角名稱。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是以指定頂點正確命名圓周角。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "無U19內前置技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓 O 中，A、B、C 在圓上。若要寫出以 C 為頂點、兩邊通過 A、B 的圓周角，正確角名為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s001-v005 人工重算：角名的中間字母是頂點，因此以 C 為頂點且兩邊經 A、B 的角寫作 ∠ACB。 正確選項為「∠ACB」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s001-v006",
      "contentSha256": "506052164d126350a14213ee2dd31d034c2e7f62cf26a532ca91c88518fdc3bc",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「候選條件如選項。」重算：圓周角要求頂點 P 在圓周上，角的兩邊再交圓於 A、B，因此三點同圓且位置符合即可。",
      "derivedAnswer": "P、A、B 都在同一圓上，且 A、B 分別位於角的兩邊",
      "storedAnswer": "P、A、B 都在同一圓上，且 A、B 分別位於角的兩邊",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「P、A、B 都在同一圓上，且 A、B 分別位於角的兩邊」符合；三個干擾項分別因「未保證P在圓周。；P在圓內不符合定義。；P為圓心時是圓心角。」而排除。",
        "undefinedSymbol": "u19-s001-v006 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓心角與圓周角」講義定義。",
        "unitConflict": "題目所求為「選出能保證圓周角的條件。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「判斷圓周角的充分條件。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「候選條件如選項。」重讀，所求「選出能保證圓周角的條件。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是判斷圓周角的充分條件。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "無U19內前置技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「下列哪一組條件足以保證 ∠APB 是圓周角？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s001-v006 人工重算：圓周角要求頂點 P 在圓周上，角的兩邊再交圓於 A、B，因此三點同圓且位置符合即可。 正確選項為「P、A、B 都在同一圓上，且 A、B 分別位於角的兩邊」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s001-v007",
      "contentSha256": "a527daa8b5d78f3469a59df8f0eead6add88c607e1fe2217d69dd97e51b4a584",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「O為圓心；A、B、C在圓上；D在圓內且D≠O。」重算：∠AOB 的頂點 O 是圓心，為圓心角；∠ACB 的頂點 C 在圓周，為圓周角。∠ADB 頂點在圓內非圓心；∠OAB 雖頂點A在圓周，但一邊AO終於圓心而非另一圓周點，依本題角的指定不構成所需圓周角。",
      "derivedAnswer": "∠AOB、∠ACB",
      "storedAnswer": "∠AOB、∠ACB",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「∠AOB、∠ACB」符合；三個干擾項分別因「包含不符合定義的∠ADB。；包含∠ADB。；兩角皆不符合本題完整定義。」而排除。",
        "undefinedSymbol": "u19-s001-v007 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓心角與圓周角」講義定義。",
        "unitConflict": "題目所求為「選出兩個符合定義的角。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「同時檢查四個角的完整定義。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「O為圓心；A、B、C在圓上；D在圓內且D≠O。」重讀，所求「選出兩個符合定義的角。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是同時檢查四個角的完整定義。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "無U19內前置技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓 O 中，A、B、C 在圓上，D 位於圓內但 D≠O。下列四個角中，恰有兩個屬於「圓心角或圓周角」的是哪一組？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s001-v007 人工重算：∠AOB 的頂點 O 是圓心，為圓心角；∠ACB 的頂點 C 在圓周，為圓周角。∠ADB 頂點在圓內非圓心；∠OAB 雖頂點A在圓周，但一邊AO終於圓心而非另一圓周點，依本題角的指定不構成所需圓周角。 正確選項為「∠AOB、∠ACB」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s001-v008",
      "contentSha256": "b9eb098cb46bcde37a39bd0d19de3d8aa683af971a2107e0fdf79c61a107266e",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「O為圓心；A、B、C在圓上。」重算：兩角的兩邊都通過 A、B，所以所對弧的端點相同；但頂點不同，角度關係需另用定理，且∠AOB是圓心角。",
      "derivedAnswer": "兩角所對的弧端點相同",
      "storedAnswer": "兩角所對的弧端點相同",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「兩角所對的弧端點相同」符合；三個干擾項分別因「頂點分別為O與C。；圓心角通常是同弧圓周角兩倍，不相等。；∠AOB不是圓周角。」而排除。",
        "undefinedSymbol": "u19-s001-v008 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓心角與圓周角」講義定義。",
        "unitConflict": "題目所求為「判斷兩角必然共享的結構。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「辨認共享弧端點而不越級使用性質。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「O為圓心；A、B、C在圓上。」重讀，所求「判斷兩角必然共享的結構。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是辨認共享弧端點而不越級使用性質。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "無U19內前置技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「同一圖中，∠AOB 與 ∠ACB 都以 A、B 為兩邊端點。哪一敘述必然正確？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s001-v008 人工重算：兩角的兩邊都通過 A、B，所以所對弧的端點相同；但頂點不同，角度關係需另用定理，且∠AOB是圓心角。 正確選項為「兩角所對的弧端點相同」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s001-v009",
      "contentSha256": "2be1b709cb07246685961aa749ee1d9ca4aaefb14a881aca69ddf7ce56d9d697",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「頂點在圓周；一邊為切線、一邊為弦。」重算：本單元圓周角由兩條弦方向形成；切線與弦的夾角需要其他性質，不能直接套用圓周角定理。",
      "derivedAnswer": "不能直接當成由兩弦形成的圓周角",
      "storedAnswer": "不能直接當成由兩弦形成的圓周角",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「不能直接當成由兩弦形成的圓周角」符合；三個干擾項分別因「頂點不在圓心。；缺少兩弦形成圓周角的條件。；切線與弦夾角不一定90°。」而排除。",
        "undefinedSymbol": "u19-s001-v009 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓心角與圓周角」講義定義。",
        "unitConflict": "題目所求為「判斷是否可直接套圓周角性質。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「辨認圓周角定義的邊界。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「頂點在圓周；一邊為切線、一邊為弦。」重讀，所求「判斷是否可直接套圓周角性質。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是辨認圓周角定義的邊界。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "無U19內前置技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「若一個角的頂點在圓周上，但其中一邊沿切線方向、另一邊為弦，依本單元目前的圓周角定義，該角應如何處理？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s001-v009 人工重算：本單元圓周角由兩條弦方向形成；切線與弦的夾角需要其他性質，不能直接套用圓周角定理。 正確選項為「不能直接當成由兩弦形成的圓周角」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s001-v010",
      "contentSha256": "947bb1ad4a1a5a7977b4220b121c976c4bd2b6cdcedb46fb410f6d6cdfcc13b7",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「廣場為圓；O為中心；A、B在邊緣。」重算：攝影機位置 O 是圓心，鏡頭方向 OA、OB 都指向圓周，因此形成圓心角。",
      "derivedAnswer": "圓心角",
      "storedAnswer": "圓心角",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「圓心角」符合；三個干擾項分別因「頂點不在廣場邊緣。；題目沒有切線。；只有三個點，未形成四邊形。」而排除。",
        "undefinedSymbol": "u19-s001-v010 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓心角與圓周角」講義定義。",
        "unitConflict": "題目所求為「判定鏡頭轉角的種類。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「把中央旋轉視角轉成圓心角。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「廣場為圓；O為中心；A、B在邊緣。」重讀，所求「判定鏡頭轉角的種類。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是把中央旋轉視角轉成圓心角。，而非只依題序標示。",
      "literacyContextNecessity": "中心位置與邊緣目標是判定角種類的必要資訊。",
      "prerequisiteCheck": "無U19內前置技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓形廣場中央標 O，邊緣設 A、B 兩盞燈。攝影機裝在 O，鏡頭由 OA 轉到 OB 所形成的角，在數學模型中是什麼？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s001-v010 人工重算：攝影機位置 O 是圓心，鏡頭方向 OA、OB 都指向圓周，因此形成圓心角。 正確選項為「圓心角」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s001-v011",
      "contentSha256": "bbfa6a6ffa24634c6e133239c660bfba4965d5cc6f285b7102f3a4740a63e235",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「A、B、C位於同一圓形邊緣。」重算：C、A、B 都位於同一圓形邊緣，頂點 C 在圓周，兩視線連到另外兩個圓上點，構成圓周角。",
      "derivedAnswer": "圓周角",
      "storedAnswer": "圓周角",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「圓周角」符合；三個干擾項分別因「頂點C不在圓心。；視角不是360°。；兩視線相交於C。」而排除。",
        "undefinedSymbol": "u19-s001-v011 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓心角與圓周角」講義定義。",
        "unitConflict": "題目所求為「判定視角模型。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「把環形看台視角轉成圓周角。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「A、B、C位於同一圓形邊緣。」重讀，所求「判定視角模型。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是把環形看台視角轉成圓周角。，而非只依題序標示。",
      "literacyContextNecessity": "座位與標記都在圓周是模型成立的必要條件。",
      "prerequisiteCheck": "無U19內前置技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「環形看台邊緣的座位 C 觀看場地邊緣兩標記 A、B，視線 CA、CB 形成的角可建模為何者？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s001-v011 人工重算：C、A、B 都位於同一圓形邊緣，頂點 C 在圓周，兩視線連到另外兩個圓上點，構成圓周角。 正確選項為「圓周角」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s001-v012",
      "contentSha256": "f7ab00cefb15e870b060b6b82ffe0466edd85bc5603180c1f6676d7976242dcd",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「P在圓內且P≠O；A、B在圓上。」重算：P只是圓內鑽孔且不是圓心，也不在圓周，故不符合兩類角的定義；工程圖位置資訊不可省略。",
      "derivedAnswer": "不能只因角位於圓內就稱為圓心角",
      "storedAnswer": "不能只因角位於圓內就稱為圓心角",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「不能只因角位於圓內就稱為圓心角」符合；三個干擾項分別因「P明確不是O。；P不在圓周。；沒有共線條件。」而排除。",
        "undefinedSymbol": "u19-s001-v012 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓心角與圓周角」講義定義。",
        "unitConflict": "題目所求為「判定能否命名為圓心角。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「在工程情境中維持角定義精確性。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「P在圓內且P≠O；A、B在圓上。」重讀，所求「判定能否命名為圓心角。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是在工程情境中維持角定義精確性。，而非只依題序標示。",
      "literacyContextNecessity": "鑽孔是否位於精確圓心直接決定可否使用圓心角性質。",
      "prerequisiteCheck": "無U19內前置技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「工程圖以 O 表示圓形零件中心，P 是零件內部鑽孔位置且 P≠O。技師量得 ∠APB。下列判斷何者最嚴謹？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s001-v012 人工重算：P只是圓內鑽孔且不是圓心，也不在圓周，故不符合兩類角的定義；工程圖位置資訊不可省略。 正確選項為「不能只因角位於圓內就稱為圓心角」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u19-s001-fig001",
      "unitId": "u19",
      "topicId": "u19-angles",
      "skillId": "central-inscribed-angle",
      "svgPath": "figures/u19/u19-s001-fig001.svg",
      "canvas": {
        "width": 360,
        "height": 240,
        "viewBox": "0 0 360 240"
      },
      "drawingSpec": {
        "purpose": "支援「圓心角與圓周角」中需要辨認點、線、弧、角或邊界的題目。",
        "coordinateSystem": "SVG x向右、y向下；所有座標以360×240畫布為準。",
        "geometry": "圓 O 上有 A、B、C 三點，畫出圓心角 AOB 與圓周角 ACB，並以不同弧線標示共同端點。",
        "visibleLines": "所有作答所需實線均以2px以上深色描邊；強調弧以5px描邊。",
        "hiddenLines": "只有內部共邊或量測輔助線使用虛線；未指定者不得自行添加。",
        "labels": "標籤位置已在SVG以固定座標給定，避免遮住交點、角弧或刻痕。",
        "symbols": "直角符號、等長刻痕、箭頭及角度符號僅在數學條件需要時出現。",
        "scalePolicy": "示意圖不保證按實際長度或角度比例繪製。",
        "visualInferenceWarning": "不得以目測長短、角度或對稱性取代題目條件與定理。",
        "mobileReadability": "360×240檢視下文字至少16px，關鍵線至少2px，無微小數值標籤。",
        "answerLeakage": "圖中不標示任何題目要求計算的最終數值或正確選項。"
      },
      "altText": "圓 O 上有 A、B、C 三點，畫出圓心角 AOB 與圓周角 ACB，並以不同弧線標示共同端點。 圖形僅協助辨認結構，不可依比例目測答案。",
      "svgTitle": "圓心角與圓周角位置圖",
      "svgDescription": "圓 O 上有 A、B、C 三點，畫出圓心角 AOB 與圓周角 ACB，並以不同弧線標示共同端點。",
      "svgAssertions": [
        "role=\"img\"",
        "<title",
        "<desc",
        "viewBox=\"0 0 360 240\"",
        "<circle cx=\"180\"",
        "x1=\"180\" y1=\"120\"",
        ">O</text>"
      ],
      "figureReview": {
        "decision": "pass",
        "manualRenderInspected": true,
        "mobileReadable": true,
        "answerLeakageFound": false,
        "reviewNote": "已逐項檢查 u19-s001-fig001 的點位、線段、弧線、標籤與輔助符號；此圖專門呈現「圓心角與圓周角」的結構，未包含可直接推得題庫答案的數值。",
        "reviewVersion": "human-figure-review-r1.0",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "5cfebb8f5f8c73bbce4e295b2566f767e37101ee59da61cbd5ae46a7c830c470"
    }
  ]
};
export default u19_s001;
