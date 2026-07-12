// Deterministically emitted from reviewed CHATGPT_HUMAN_AUTHORED_R1 source.
// Do not edit this staging module by hand.
export const skillData={
  "slot": "s011",
  "lecture": {
    "lectureId": "u16-s011-lecture-r1",
    "unitId": "u16",
    "numericUnitId": 16,
    "topicId": "u16-construction",
    "skillId": "construction-word-steps",
    "skillOrder": 11,
    "originalLockedTitle": "作圖步驟文字題",
    "title": "作圖步驟文字題：由圓心和半徑與交點反推作圖目的",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能把混亂的尺規作圖敘述排成可執行順序。",
      "能由圓弧的圓心、半徑與交點判斷正在作中垂線、角平分線、複製角或垂線。",
      "能找出作圖步驟中缺漏、重複或不可能的操作。",
      "能以幾何性質說明文字步驟最後得到的圖形。"
    ],
    "prerequisiteBridge": "前面已實作複製角與過點作垂線。會考常把圖省略，改用文字描述圓弧與交點；本技能訓練從文字重建幾何關係。",
    "prerequisites": [
      {
        "skillId": "compass-perpendicular",
        "requiredLevel": "能使用先備技能「過點作垂線」的核心定義與基本運算，並能說明其與本節的連結。"
      }
    ],
    "glossary": [
      {
        "term": "步驟順序",
        "definition": "後一步所需的點或半徑必須已在前一步建立。"
      },
      {
        "term": "依存關係",
        "definition": "某操作需要先前產生的圓心、交點或線段。"
      },
      {
        "term": "目標辨識",
        "definition": "由等距條件判斷最後線是中垂線、角平分線、垂線或等角線。"
      },
      {
        "term": "有效交點",
        "definition": "由兩條已存在的弧、線或射線相交而得到的點。"
      },
      {
        "term": "驗證理由",
        "definition": "說明作圖結果成立的定義、等距性質或全等判定。"
      }
    ],
    "notation": [
      {
        "symbol": "步驟甲→乙→丙",
        "meaning": "乙使用甲產生的物件，丙使用乙產生的物件。"
      },
      {
        "symbol": "P=弧₁∩弧₂",
        "meaning": "P 是兩弧交點，兩弧必須先存在。"
      },
      {
        "symbol": "作直線 PQ",
        "meaning": "P、Q 兩點必須已定義且不同。"
      }
    ],
    "conceptNarrative": [
      "排步驟時先找不依賴新點的操作，通常是以原有端點或角頂點為圓心畫第一弧。",
      "若某一步提到『以 C、D 為圓心』，就必須先有一步產生 C、D；若提到『連接 O、P』，P 必須先由交點產生。",
      "兩端點為圓心、相同半徑畫兩組交弧，再連兩交點，通常是作線段中垂線。",
      "角頂點先畫弧交兩邊，再以兩截點畫交弧，最後連角頂點，通常是作角平分線。",
      "複製角比角平分線多一個新頂點與基準射線，並搬移原弧上的弦長。",
      "判斷錯誤步驟時，不只看語句通順，還要檢查圓弧能否相交、半徑是否相同以及最後結果是否通過指定點。"
    ],
    "formalDefinitions": [
      {
        "name": "可執行作圖敘述",
        "statement": "每一步的圓心、半徑、交點與連線端點均已由已知或前一步定義。"
      },
      {
        "name": "作圖目的判讀",
        "statement": "由步驟建立的等距或全等關係，辨認最後圖形滿足的條件。"
      }
    ],
    "formulas": [
      {
        "formula": "依存圖無循環且每個引用已定義 ⇒ 步驟可執行",
        "conditions": [
          "圓弧幾何上確實能相交"
        ],
        "meaning": "文字排序的基本檢查。"
      },
      {
        "formula": "PA=PB、QA=QB ⇒ PQ 為 AB 中垂線",
        "conditions": [
          "P、Q 為兩個不同交點"
        ],
        "meaning": "常見作圖目的辨識。"
      }
    ],
    "nonApplicableCases": [
      "只按句子長短或編號猜順序，不檢查點的來源。",
      "先使用尚未產生的交點，步驟無法執行。",
      "相同半徑條件被改成任意半徑，可能破壞等距結論。",
      "最後連線端點錯誤時，即使前面圓弧正確也得不到目標。",
      "文字未指定哪一側而結果有兩種方向時，需檢查題目是否兩者皆可或需補條件。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "列出題目一開始就存在的點、線、射線與線段。",
        "check": "哪些名稱不需由作圖產生？"
      },
      {
        "step": 2,
        "instruction": "為每個步驟標記它需要的輸入。",
        "check": "圓心、半徑端點、交點是否已存在？"
      },
      {
        "step": 3,
        "instruction": "先放置只使用原始物件的步驟。",
        "check": "第一步能否實際執行？"
      },
      {
        "step": 4,
        "instruction": "依交點產生順序排後續步驟。",
        "check": "是否出現先使用後定義？"
      },
      {
        "step": 5,
        "instruction": "由等距關係辨認作圖目的。",
        "check": "最後線為何平分、垂直或等角？"
      },
      {
        "step": 6,
        "instruction": "檢查半徑、交點數與方向。",
        "check": "文字是否足以排除不可能或錯側結果？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "步驟：以 A、B 為圓心作同半徑弧交於 P、Q；連接 PQ。所得為何？",
        "solutionSteps": [
          "PA=PB 且 QA=QB。",
          "P、Q 都在 AB 的中垂線上。"
        ],
        "answer": "直線 PQ 是 AB 的中垂線。"
      },
      {
        "exampleId": "L2",
        "prompt": "排序：①連接 OP；②以 C、D 為圓心作同半徑弧交於 P；③以 O 為圓心作弧交角邊於 C、D。",
        "solutionSteps": [
          "先產生 C、D，故③先。",
          "再以 C、D 產生 P，故②。",
          "最後才能連 OP，故①。"
        ],
        "answer": "③→②→①，作角平分線。"
      },
      {
        "exampleId": "L3",
        "prompt": "某步驟先寫『以 E 為圓心、CD 為半徑作弧』，但 E 尚未定義，問題何在？",
        "solutionSteps": [
          "圓心 E 不存在。",
          "需先在新基準射線上由新頂點圓弧取得 E。"
        ],
        "answer": "依存順序錯誤，無法執行。"
      },
      {
        "exampleId": "L4",
        "prompt": "兩端點畫同半徑弧只有一個交點，能否連兩交點作中垂線？",
        "solutionSteps": [
          "需要兩個不同交點決定直線。",
          "相切時只有一點。"
        ],
        "answer": "不能；應增大半徑使兩弧有兩個交點。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "按題目列出的順序照抄。",
        "why": "選項可能故意打亂。",
        "correction": "依每個點第一次被產生的時間排序。"
      },
      {
        "mistake": "只看最後畫的是直線就猜中垂線。",
        "why": "不同作圖都會畫直線。",
        "correction": "檢查哪些點到哪些端點等距。"
      },
      {
        "mistake": "忽略半徑相同。",
        "why": "把『任意弧』視為都能作。",
        "correction": "等距結論通常要求同一圓規開口。"
      },
      {
        "mistake": "交點尚未存在就拿來當圓心。",
        "why": "未追蹤依存關係。",
        "correction": "在文字旁標記每個新點的來源。"
      },
      {
        "mistake": "角平分線與複製角混淆。",
        "why": "兩者都有先截角邊再畫弧。",
        "correction": "複製角另有新頂點與基準射線，並搬移弦長。"
      },
      {
        "mistake": "忽略兩弧是否有足夠交點。",
        "why": "只做語文排序。",
        "correction": "同時檢查半徑大小與幾何可行性。"
      }
    ],
    "selfCheck": [
      "每個新點在第一次使用前已經產生嗎？",
      "我能列出每步所依賴的圓心與半徑嗎？",
      "相同半徑是否被保留？",
      "最後線段或直線滿足什麼等距關係？",
      "是否存在方向或交點數的歧義？"
    ],
    "summary": [
      "文字作圖題先追蹤物件依存，再排列步驟。",
      "圓心、半徑、交點與連線端點缺一不可。",
      "中垂線、角平分線、複製角與垂線可由等距結構辨認。",
      "排序完成後仍要檢查幾何可行性與正確性理由。"
    ],
    "connections": {
      "previous": "整合複製角與過點作垂線的完整步驟。",
      "next": [
        "三角形邊長關係會用尺規觀點理解兩圓是否相交。",
        "素養題常要求從施工文字還原幾何。"
      ]
    },
    "figureReferences": [
      "u16-fig-011-construction-sequence"
    ],
    "accessibilityNotes": [
      "u16-fig-011-construction-sequence 的替代文字與結構描述收錄於本技能 drawing-specs.jsonl。"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u16-s011-v001",
        "u16-s011-v002",
        "u16-s011-v003",
        "u16-s011-v004",
        "u16-s011-v005",
        "u16-s011-v006",
        "u16-s011-v007",
        "u16-s011-v008",
        "u16-s011-v009",
        "u16-s011-v010",
        "u16-s011-v011",
        "u16-s011-v012"
      ],
      "constructedResponseIds": [
        "u16-s011-cr001",
        "u16-s011-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "針對「作圖步驟文字題」逐段核對定義、適用條件與反例；重新演算4個例題，確認未使用後續單元才引入的平行線或四邊形定理，並檢查圖形標記不取代文字條件。",
      "reviewVersion": "human-lecture-review-u16-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "43d04f15af0a995b69a8010b9ad6aeb8fb38b3ab22493ec32e84944e2c2d3d0e"
  },
  "mcQuestions": [
    {
      "questionId": "u16-s011-v001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "construction-word-steps",
      "skillOrder": 11,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "作圖文字寫『以 C、D 為圓心作弧交於 P』。在此之前至少必須先完成什麼？",
      "givenConditions": [
        "C、D 不是原始已知點"
      ],
      "target": "追蹤點的依存關係",
      "choices": [
        "先連接 O、P",
        "先刪除所有圓弧",
        "先量出 ∠P",
        "先由其他作圖步驟產生並定義 C、D"
      ],
      "answerIndex": 3,
      "independentSolution": "必先有一個步驟建立 C、D，例如第一弧與角邊的交點。",
      "explanation": "圓心必須是已存在的點，否則該步無法執行。 找出本步輸入 C、D。 檢查其首次出現位置。",
      "steps": [
        "找出本步輸入 C、D。",
        "檢查其首次出現位置。"
      ],
      "optionAnalysis": [
        {
          "choice": "先連接 O、P",
          "truth": false,
          "reason": "P 尚未產生。"
        },
        {
          "choice": "先刪除所有圓弧",
          "truth": false,
          "reason": "會失去 C、D 的來源。"
        },
        {
          "choice": "先量出 ∠P",
          "truth": false,
          "reason": "P 不存在且純尺規不量角。"
        },
        {
          "choice": "先由其他作圖步驟產生並定義 C、D",
          "truth": true,
          "reason": "圓心必須是已存在的點，否則該步無法執行。"
        }
      ],
      "misconceptionTarget": "先使用後定義。",
      "prerequisiteCheck": "知道圓心必須是已知點。",
      "estimatedTimeSec": "50",
      "unitAndRoundingCheck": "無量值。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目明示 C、D 非原始點，答案唯一。",
      "difficultyReason": "基礎題，直接追蹤依存。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認前置步驟。",
      "tags": [
        "空間與形狀",
        "作圖步驟文字題",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "6f8e1244f1b22d756a15d9c036580591d4fbb4c7259131a8efb59bd5a1dfd784"
    },
    {
      "questionId": "u16-s011-v002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "construction-word-steps",
      "skillOrder": 11,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "步驟為：①作射線 OP；②以 C、D 為圓心作同半徑弧交於 P；③以 O 為圓心作弧交角兩邊於 C、D。正確順序為何？",
      "givenConditions": [
        "O 與原角兩邊最初已知"
      ],
      "target": "排序角平分線步驟",
      "choices": [
        "①→②→③",
        "③→②→①",
        "②→③→①",
        "③→①→②"
      ],
      "answerIndex": 1,
      "independentSolution": "唯一可執行順序是 ③、②、①。",
      "explanation": "先由 O 弧產生 C、D，再由 C、D 弧產生 P，最後才能連 O、P。 列依存：②依賴 C、D。 ①依賴 P。 ③無新點依賴。",
      "steps": [
        "列依存：②依賴 C、D。",
        "①依賴 P。",
        "③無新點依賴。"
      ],
      "optionAnalysis": [
        {
          "choice": "①→②→③",
          "truth": false,
          "reason": "P、C、D 都在使用時尚未定義。"
        },
        {
          "choice": "③→②→①",
          "truth": true,
          "reason": "先由 O 弧產生 C、D，再由 C、D 弧產生 P，最後才能連 O、P。"
        },
        {
          "choice": "②→③→①",
          "truth": false,
          "reason": "②需要先有 C、D。"
        },
        {
          "choice": "③→①→②",
          "truth": false,
          "reason": "①需要先有 P。"
        }
      ],
      "misconceptionTarget": "按編號或句長猜順序。",
      "prerequisiteCheck": "會建立點的產生鏈。",
      "estimatedTimeSec": "65",
      "unitAndRoundingCheck": "無量值。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "每個新點只有一個來源，無平行可交換步驟。",
      "difficultyReason": "基礎題，單一依存鏈排序。",
      "literacyContextNecessity": null,
      "authoringIntent": "排序角平分線作圖。",
      "tags": [
        "空間與形狀",
        "作圖步驟文字題",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "ea3e2e7e8e2adfe103b63abb4180700df3e4f736c229148e60f3d309bf94ab23"
    },
    {
      "questionId": "u16-s011-v003",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "construction-word-steps",
      "skillOrder": 11,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "兩端點 A、B 為圓心作同半徑弧，交於 P、Q，再連 PQ。這段文字最可能在作什麼？",
      "givenConditions": [
        "半徑大於 AB 一半"
      ],
      "target": "由等距結構辨認目的",
      "choices": [
        "複製角",
        "作 AB 的平行線",
        "線段 AB 的中垂線",
        "作圓 A 的切線"
      ],
      "answerIndex": 2,
      "independentSolution": "等距軌跡唯一對應 AB 中垂線。",
      "explanation": "P、Q 都到 A、B 等距，連線即中垂線。 由同半徑得 PA=PB。 同理 QA=QB。",
      "steps": [
        "由同半徑得 PA=PB。",
        "同理 QA=QB。"
      ],
      "optionAnalysis": [
        {
          "choice": "複製角",
          "truth": false,
          "reason": "沒有原角與新頂點。"
        },
        {
          "choice": "作 AB 的平行線",
          "truth": false,
          "reason": "等距交弧不直接給平行。"
        },
        {
          "choice": "線段 AB 的中垂線",
          "truth": true,
          "reason": "P、Q 都到 A、B 等距，連線即中垂線。"
        },
        {
          "choice": "作圓 A 的切線",
          "truth": false,
          "reason": "沒有切點或半徑垂直條件。"
        }
      ],
      "misconceptionTarget": "只看有兩圓就猜任意作圖。",
      "prerequisiteCheck": "會從等距關係辨認中垂線。",
      "estimatedTimeSec": "55",
      "unitAndRoundingCheck": "無量值。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "兩交點已確保可決定直線。",
      "difficultyReason": "基礎題，辨認常見作圖模式。",
      "literacyContextNecessity": null,
      "authoringIntent": "由步驟判斷目的。",
      "tags": [
        "空間與形狀",
        "作圖步驟文字題",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "a77afd1d0a838a6195d87ac4a6d7100d3f26c67ddd8d908351e3ab364adef0ed"
    },
    {
      "questionId": "u16-s011-v004",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "construction-word-steps",
      "skillOrder": 11,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "某文字作圖先『以 O 為圓心作弧交 OA、OB 於 C、D』，再『以 C、D 為圓心作同半徑弧交於 P』，最後『作射線 OP』。所得射線具有何性質？",
      "givenConditions": [
        "P 取在 ∠AOB 內部"
      ],
      "target": "辨認角平分線",
      "choices": [
        "OP⊥OA",
        "OP 是 CD 的中垂線但不通過 O",
        "OP 複製 ∠AOB 到 P",
        "OP 平分 ∠AOB"
      ],
      "answerIndex": 3,
      "independentSolution": "∠AOP=∠POB。",
      "explanation": "OC=OD、CP=DP、OP 共用，兩小三角形 SSS 全等，兩半角相等。 辨認 C、D 是原角兩邊截點。 P 到 C、D 等距。 連角頂點 O 與 P。",
      "steps": [
        "辨認 C、D 是原角兩邊截點。",
        "P 到 C、D 等距。",
        "連角頂點 O 與 P。"
      ],
      "optionAnalysis": [
        {
          "choice": "OP⊥OA",
          "truth": false,
          "reason": "角平分線不必垂直角邊。"
        },
        {
          "choice": "OP 是 CD 的中垂線但不通過 O",
          "truth": false,
          "reason": "OP 確實也是 CD 的中垂線，且通過 O；但題目主要目標是平分原角。"
        },
        {
          "choice": "OP 複製 ∠AOB 到 P",
          "truth": false,
          "reason": "P 不是新角頂點，OP 是原角內射線。"
        },
        {
          "choice": "OP 平分 ∠AOB",
          "truth": true,
          "reason": "OC=OD、CP=DP、OP 共用，兩小三角形 SSS 全等，兩半角相等。"
        }
      ],
      "misconceptionTarget": "把角平分線與複製角混淆。",
      "prerequisiteCheck": "會用 SSS 驗證角平分線。",
      "estimatedTimeSec": "95",
      "unitAndRoundingCheck": "無量值。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "P 指定在角內，排除外角平分線。",
      "difficultyReason": "標準題，從完整文字重建結果。",
      "literacyContextNecessity": null,
      "authoringIntent": "判讀角平分線。",
      "tags": [
        "空間與形狀",
        "作圖步驟文字題",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "bda25da5f9676493934176f6f6b172ea8b17e92008ad8f55b9b03897354a0d16"
    },
    {
      "questionId": "u16-s011-v005",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "construction-word-steps",
      "skillOrder": 11,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "某作圖步驟最後寫『連接 P、Q』，但前文只產生了一個交點 P，從未定義 Q。最精確的問題是什麼？",
      "givenConditions": [
        "P、Q 應為兩個不同點"
      ],
      "target": "辨認未定義引用",
      "choices": [
        "線段 PQ 一定為 0",
        "可把 Q 任意選在紙上",
        "步驟不可執行，因 Q 沒有來源",
        "只要把 P 重複寫成 Q 即可"
      ],
      "answerIndex": 2,
      "independentSolution": "因此文字規格缺漏，需補出第二交點的作法。",
      "explanation": "作線前兩端點都必須已知且不同。 掃描所有點首次出現。 找不到 Q 的產生步驟。",
      "steps": [
        "掃描所有點首次出現。",
        "找不到 Q 的產生步驟。"
      ],
      "optionAnalysis": [
        {
          "choice": "線段 PQ 一定為 0",
          "truth": false,
          "reason": "Q 未定義，不能談距離。"
        },
        {
          "choice": "可把 Q 任意選在紙上",
          "truth": false,
          "reason": "任意點不能保證作圖性質。"
        },
        {
          "choice": "步驟不可執行，因 Q 沒有來源",
          "truth": true,
          "reason": "作線前兩端點都必須已知且不同。"
        },
        {
          "choice": "只要把 P 重複寫成 Q 即可",
          "truth": false,
          "reason": "同一點不能決定直線方向。"
        }
      ],
      "misconceptionTarget": "對未定義符號自行猜測。",
      "prerequisiteCheck": "會檢查作圖敘述完整性。",
      "estimatedTimeSec": "80",
      "unitAndRoundingCheck": "無量值。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目未提供可唯一推定的 Q，不能擅自修補。",
      "difficultyReason": "標準題，做符號與依存稽核。",
      "literacyContextNecessity": null,
      "authoringIntent": "找出缺失點。",
      "tags": [
        "空間與形狀",
        "作圖步驟文字題",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "02e556cc0365cb5c708bad4b27cf660923f9e94b64eb1209fd0312860c02bf46"
    },
    {
      "questionId": "u16-s011-v006",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "construction-word-steps",
      "skillOrder": 11,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "作 AB 中垂線的文字中，兩弧只交於一點 P，卻寫『連兩交點作直線』。最合理修正是哪一項？",
      "givenConditions": [
        "兩弧目前相切"
      ],
      "target": "修正交點數不足",
      "choices": [
        "縮小半徑",
        "增大相同半徑，使兩弧交於兩個不同點 P、Q，再連 PQ",
        "把 A、B 當兩交點",
        "保留一點 P，任畫通過 P 的線"
      ],
      "answerIndex": 1,
      "independentSolution": "同時保持兩圓半徑相同，才能保證等距。",
      "explanation": "中垂線方向需兩個等距交點；相切只給中點。 辨認相切半徑等於 AB/2。 改為大於 AB/2。 取得兩交點。",
      "steps": [
        "辨認相切半徑等於 AB/2。",
        "改為大於 AB/2。",
        "取得兩交點。"
      ],
      "optionAnalysis": [
        {
          "choice": "縮小半徑",
          "truth": false,
          "reason": "會變成不相交。"
        },
        {
          "choice": "增大相同半徑，使兩弧交於兩個不同點 P、Q，再連 PQ",
          "truth": true,
          "reason": "中垂線方向需兩個等距交點；相切只給中點。"
        },
        {
          "choice": "把 A、B 當兩交點",
          "truth": false,
          "reason": "A、B 是圓心且連線為原線段。"
        },
        {
          "choice": "保留一點 P，任畫通過 P 的線",
          "truth": false,
          "reason": "方向不唯一。"
        }
      ],
      "misconceptionTarget": "只修交點數卻破壞相同半徑。",
      "prerequisiteCheck": "知道圓相交條件與兩點定線。",
      "estimatedTimeSec": "105",
      "unitAndRoundingCheck": "半徑同單位且改為嚴格增大，無取整。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目要求標準交弧法，修正唯一合理。",
      "difficultyReason": "標準題，結合文字與幾何可行性。",
      "literacyContextNecessity": null,
      "authoringIntent": "修正相切錯誤。",
      "tags": [
        "空間與形狀",
        "作圖步驟文字題",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "5f61c27677b1730717174f42741859d51479380ec63642ee71abdfa435ece0e0"
    },
    {
      "questionId": "u16-s011-v007",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "construction-word-steps",
      "skillOrder": 11,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "複製角文字題中，下列哪個依存順序正確？",
      "givenConditions": [
        "O 為原角頂點",
        "P 為新頂點",
        "PX 為基準射線"
      ],
      "target": "排列複製角核心物件",
      "choices": [
        "先在原角產生 C、D，再在新弧產生 E，最後用弦 CD 從 E 產生 F",
        "先用 F 作圓心，再產生 E",
        "先連 P、F，再畫產生 F 的弧",
        "先在新頂點產生 E、F，再決定原角的 C、D"
      ],
      "answerIndex": 0,
      "independentSolution": "此順序讓每個圓心與半徑在使用前已存在。",
      "explanation": "F 的產生依賴 CD，而 CD 依賴 C、D；E 則由新頂點第一弧產生。 原角第一弧→C、D。 新頂點同半徑弧→E。 以 E、CD→F。",
      "steps": [
        "原角第一弧→C、D。",
        "新頂點同半徑弧→E。",
        "以 E、CD→F。"
      ],
      "optionAnalysis": [
        {
          "choice": "先在原角產生 C、D，再在新弧產生 E，最後用弦 CD 從 E 產生 F",
          "truth": true,
          "reason": "F 的產生依賴 CD，而 CD 依賴 C、D；E 則由新頂點第一弧產生。"
        },
        {
          "choice": "先用 F 作圓心，再產生 E",
          "truth": false,
          "reason": "F 尚未定義。"
        },
        {
          "choice": "先連 P、F，再畫產生 F 的弧",
          "truth": false,
          "reason": "先使用後定義。"
        },
        {
          "choice": "先在新頂點產生 E、F，再決定原角的 C、D",
          "truth": false,
          "reason": "F 的半徑需要原弦 CD。"
        }
      ],
      "misconceptionTarget": "忽略半徑資料也有依存關係。",
      "prerequisiteCheck": "會追蹤點與線段兩種輸入。",
      "estimatedTimeSec": "120",
      "unitAndRoundingCheck": "無數值。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "C、D 與 E 的兩個第一弧步驟在技術上可交換，但 F 必須在兩者之後；選項描述的整體先後唯一正確。",
      "difficultyReason": "進階題，分析分支依存圖。",
      "literacyContextNecessity": null,
      "authoringIntent": "排序複製角。",
      "tags": [
        "空間與形狀",
        "作圖步驟文字題",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "2da8c8968af28058f923798bd654c91c61c4eb3e56a8994274dc62f640ae925d"
    },
    {
      "questionId": "u16-s011-v008",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "construction-word-steps",
      "skillOrder": 11,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "文字作圖：『以 A、B 為圓心，使用相同半徑作弧交於 P、Q；作直線 AQ。』若目標是 AB 中垂線，錯誤為何？",
      "givenConditions": [
        "P、Q 均為等距點"
      ],
      "target": "辨認最後連線端點",
      "choices": [
        "應作直線 PQ，而不是 AQ",
        "圓心應改為 P、Q",
        "半徑應不同",
        "只需作直線 AB"
      ],
      "answerIndex": 0,
      "independentSolution": "AQ 只是一條經端點 A 的斜線，無垂直保證。",
      "explanation": "中垂線由兩個等距點 P、Q 決定；A 本身通常不到 A、B 等距。 保留前述弧。 確認 P、Q 皆在中垂線。 改連 P、Q。",
      "steps": [
        "保留前述弧。",
        "確認 P、Q 皆在中垂線。",
        "改連 P、Q。"
      ],
      "optionAnalysis": [
        {
          "choice": "應作直線 PQ，而不是 AQ",
          "truth": true,
          "reason": "中垂線由兩個等距點 P、Q 決定；A 本身通常不到 A、B 等距。"
        },
        {
          "choice": "圓心應改為 P、Q",
          "truth": false,
          "reason": "A、B 作圓心正確。"
        },
        {
          "choice": "半徑應不同",
          "truth": false,
          "reason": "必須相同。"
        },
        {
          "choice": "只需作直線 AB",
          "truth": false,
          "reason": "AB 是原線段。"
        }
      ],
      "misconceptionTarget": "認為任一圓心連交點都可作答案。",
      "prerequisiteCheck": "會辨認答案線上的點須滿足等距。",
      "estimatedTimeSec": "105",
      "unitAndRoundingCheck": "無量值。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "除非特殊退化，A 不在自身與 B 的中垂線上；A≠B 已假設。",
      "difficultyReason": "進階題，定位最後一步錯誤。",
      "literacyContextNecessity": null,
      "authoringIntent": "修正中垂線文字。",
      "tags": [
        "空間與形狀",
        "作圖步驟文字題",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "12e4ee94f8294ea482330377ccbcad24a44923d12e03f0140372909f922e088d"
    },
    {
      "questionId": "u16-s011-v009",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "construction-word-steps",
      "skillOrder": 11,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "某作圖敘述同時可得到一條線平分 ∠AOB，又垂直 CD。這是否矛盾？已知 C、D 是以 O 為圓心的弧在兩角邊上的截點。",
      "givenConditions": [
        "OC=OD",
        "另取 P 使 PC=PD"
      ],
      "target": "理解同一線可有多種身分",
      "choices": [
        "矛盾，一條線不能同時有兩種性質",
        "不矛盾；OP 是 ∠AOB 的角平分線，同時是弦 CD 的中垂線",
        "矛盾，角平分線一定與任何弦平行",
        "只有當原角 90° 才可能"
      ],
      "answerIndex": 1,
      "independentSolution": "兩種性質來自同一對稱結構，並不衝突。",
      "explanation": "O、P 都到 C、D 等距，所以 OP 是 CD 中垂線；兩小三角形全等又使 OP 平分角。 由 OC=OD 得 O 等距。 由 PC=PD 得 P 等距。 連 OP 為中垂線。 SSS 得兩半角相等。",
      "steps": [
        "由 OC=OD 得 O 等距。",
        "由 PC=PD 得 P 等距。",
        "連 OP 為中垂線。",
        "SSS 得兩半角相等。"
      ],
      "optionAnalysis": [
        {
          "choice": "矛盾，一條線不能同時有兩種性質",
          "truth": false,
          "reason": "同一線可由不同定義描述。"
        },
        {
          "choice": "不矛盾；OP 是 ∠AOB 的角平分線，同時是弦 CD 的中垂線",
          "truth": true,
          "reason": "O、P 都到 C、D 等距，所以 OP 是 CD 中垂線；兩小三角形全等又使 OP 平分角。"
        },
        {
          "choice": "矛盾，角平分線一定與任何弦平行",
          "truth": false,
          "reason": "沒有此性質。"
        },
        {
          "choice": "只有當原角 90° 才可能",
          "truth": false,
          "reason": "對任意非退化角，對稱構造都成立。"
        }
      ],
      "misconceptionTarget": "把名稱視為互斥分類。",
      "prerequisiteCheck": "會從作圖步驟推多重性質。",
      "estimatedTimeSec": "135",
      "unitAndRoundingCheck": "無量值。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "C、D 不重合且 P≠O，直線可定義；原角不為 0°或180°。",
      "difficultyReason": "進階題，理解作圖結構的雙重結果。",
      "literacyContextNecessity": null,
      "authoringIntent": "連結角平分線與中垂線。",
      "tags": [
        "空間與形狀",
        "作圖步驟文字題",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "e777cc48c08e18d4f5fe2353995a686bc63903de892767a30da46370066bf344"
    },
    {
      "questionId": "u16-s011-v010",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "construction-word-steps",
      "skillOrder": 11,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "自動繪圖系統收到打亂指令：甲『連接 O、P』；乙『以 C、D 為圓心作同半徑弧交 P』；丙『以 O 為圓心作弧交兩邊於 C、D』。系統應採哪個執行序？",
      "givenConditions": [
        "目標是作 ∠AOB 的角平分線"
      ],
      "target": "將作圖規格轉成可執行流程",
      "choices": [
        "丙→乙→甲",
        "甲→乙→丙",
        "乙→甲→丙",
        "丙→甲→乙"
      ],
      "answerIndex": 0,
      "independentSolution": "拓樸排序唯一為丙、乙、甲。",
      "explanation": "丙建立 C、D，乙建立 P，甲才有兩端點可連。 建立依存表 C,D←丙；P←乙(C,D)；OP←甲(P)。",
      "steps": [
        "建立依存表 C,D←丙；P←乙(C,D)；OP←甲(P)。"
      ],
      "optionAnalysis": [
        {
          "choice": "丙→乙→甲",
          "truth": true,
          "reason": "丙建立 C、D，乙建立 P，甲才有兩端點可連。"
        },
        {
          "choice": "甲→乙→丙",
          "truth": false,
          "reason": "P、C、D 均未定義。"
        },
        {
          "choice": "乙→甲→丙",
          "truth": false,
          "reason": "乙一開始缺 C、D。"
        },
        {
          "choice": "丙→甲→乙",
          "truth": false,
          "reason": "甲在 P 產生前執行。"
        }
      ],
      "misconceptionTarget": "把文字順序當任意，未做依存檢查。",
      "prerequisiteCheck": "會追蹤新物件產生順序。",
      "estimatedTimeSec": "105",
      "unitAndRoundingCheck": "無單位。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "三步無可交換分支，順序唯一。",
      "difficultyReason": "素養題，模擬軟體需嚴格遵守依存。",
      "literacyContextNecessity": "系統執行成敗直接取決於順序。",
      "authoringIntent": "排序自動繪圖指令。",
      "tags": [
        "空間與形狀",
        "作圖步驟文字題",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "01b3e51afc095707929bbc9e9655a9d68a34e6fc626b79378b4ac4452caabb40"
    },
    {
      "questionId": "u16-s011-v011",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "construction-word-steps",
      "skillOrder": 11,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "施工手冊寫『以兩端點為圓心，各畫一個任意半徑的弧，連交點』，但未寫『相同半徑』。審查員應要求補上這四字，主要原因是什麼？",
      "givenConditions": [
        "目標為作中垂線"
      ],
      "target": "說明規格缺詞的數學後果",
      "choices": [
        "相同半徑可讓圖更美觀",
        "不同半徑一定沒有交點",
        "相同半徑可使原線段變短",
        "只有相同半徑才能保證每個交點到兩端點等距"
      ],
      "answerIndex": 3,
      "independentSolution": "缺詞會讓手冊允許錯誤構造，無法驗收垂直與平分。",
      "explanation": "中垂線的判定依賴 PA=PB、QA=QB；半徑若不同，等式失效。 把兩弧半徑寫成 rA、rB。 交點滿足 PA=rA、PB=rB。 需 rA=rB 才等距。",
      "steps": [
        "把兩弧半徑寫成 rA、rB。",
        "交點滿足 PA=rA、PB=rB。",
        "需 rA=rB 才等距。"
      ],
      "optionAnalysis": [
        {
          "choice": "相同半徑可讓圖更美觀",
          "truth": false,
          "reason": "核心是幾何保證，不是外觀。"
        },
        {
          "choice": "不同半徑一定沒有交點",
          "truth": false,
          "reason": "不同半徑也可能相交，但交點不等距。"
        },
        {
          "choice": "相同半徑可使原線段變短",
          "truth": false,
          "reason": "作圖不改變原線段。"
        },
        {
          "choice": "只有相同半徑才能保證每個交點到兩端點等距",
          "truth": true,
          "reason": "中垂線的判定依賴 PA=PB、QA=QB；半徑若不同，等式失效。"
        }
      ],
      "misconceptionTarget": "把技術規格精確度當文字潤飾。",
      "prerequisiteCheck": "會從文字限制推等距。",
      "estimatedTimeSec": "125",
      "unitAndRoundingCheck": "兩半徑同單位但需數值相同；不涉及四捨五入。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "即使某次不同半徑偶然連線近似垂直，也無必然性。",
      "difficultyReason": "素養題，規格文字直接控制工程正確性。",
      "literacyContextNecessity": "『相同』是中垂線幾何證明不可缺少的條件。",
      "authoringIntent": "補全施工手冊。",
      "tags": [
        "空間與形狀",
        "作圖步驟文字題",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "02eb0d42658e7d86b81955b29e2cb33667f215e818cbc78469d2722ba6bec643"
    },
    {
      "questionId": "u16-s011-v012",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "construction-word-steps",
      "skillOrder": 11,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "線上教學影片把作角平分線的圓弧全部擦掉，只留下射線 OP。學生還能只靠成品判定它一定平分原角嗎？",
      "givenConditions": [
        "圖不按比例",
        "沒有角度標記"
      ],
      "target": "評估證據是否保留",
      "choices": [
        "能，因 OP 畫在角中央",
        "能，只要 OP 比兩角邊短",
        "不能；需保留或說明等半徑弧、交點等作圖依據",
        "能，任何從頂點出發的射線都平分角"
      ],
      "answerIndex": 2,
      "independentSolution": "教學應保留必要痕跡或附文字理由，才能驗證。",
      "explanation": "沒有弧痕或等角標記，成品線的位置不能證明兩半角相等。 檢查可用證據。 沒有 OC=OD、CP=DP 等資訊。 目測不能替代。",
      "steps": [
        "檢查可用證據。",
        "沒有 OC=OD、CP=DP 等資訊。",
        "目測不能替代。"
      ],
      "optionAnalysis": [
        {
          "choice": "能，因 OP 畫在角中央",
          "truth": false,
          "reason": "視覺中央不代表精確平分。"
        },
        {
          "choice": "能，只要 OP 比兩角邊短",
          "truth": false,
          "reason": "射線長度與角平分無關。"
        },
        {
          "choice": "不能；需保留或說明等半徑弧、交點等作圖依據",
          "truth": true,
          "reason": "沒有弧痕或等角標記，成品線的位置不能證明兩半角相等。"
        },
        {
          "choice": "能，任何從頂點出發的射線都平分角",
          "truth": false,
          "reason": "角內有無數射線，只有一條內角平分線。"
        }
      ],
      "misconceptionTarget": "把示意圖外觀當作精確條件。",
      "prerequisiteCheck": "會區分結果與證據。",
      "estimatedTimeSec": "115",
      "unitAndRoundingCheck": "無量值。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "若另有等角符號可判定，但題目明示沒有。",
      "difficultyReason": "素養題，媒體呈現是否保留驗證資訊是核心。",
      "literacyContextNecessity": "作圖教育需要讓學生看見理由，情境不可刪除。",
      "authoringIntent": "審查教學影片。",
      "tags": [
        "空間與形狀",
        "作圖步驟文字題",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "0266ec9f382be5d0df5d3681f37427ea978c66ee822a29f3f18526588aa6a6a7"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u16-s011-cr001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "construction-word-steps",
      "skillOrder": 11,
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-011-construction-sequence",
      "prompt": "下列文字步驟想作線段 AB 的垂直平分線，但順序混亂：①連接兩弧交點P、Q；②以B為圓心、同半徑畫弧；③以A為圓心畫弧；④選大於AB一半的半徑。請排出正確順序並說明每一步的作用。",
      "requiredWork": [
        "排出④③②①或④②③①。",
        "說明半徑條件。",
        "說明同半徑建立等距點。",
        "說明連線得到所求。"
      ],
      "fullCreditSolution": [
        "正確順序可為④→③→②→①。",
        "先選足夠半徑確保兩圓有兩交點；再以A、B為圓心且開口不變畫弧，使P、Q到A、B等距；最後連PQ，得到AB的垂直平分線。"
      ],
      "alternativeSolutions": [
        "③與②可互換，因兩個等半徑弧的先後不影響交點。"
      ],
      "reasoningSteps": [
        "正確順序可為④→③→②→①。",
        "先選足夠半徑確保兩圓有兩交點；再以A、B為圓心且開口不變畫弧，使P、Q到A、B等距；最後連PQ，得到AB的垂直平分線。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "排序正確並逐步說明半徑、等距、連線三個作用，承認②③可交換。"
        },
        {
          "score": 2,
          "criteria": "排序正確且主要作用正確，但漏一項原因。"
        },
        {
          "score": 1,
          "criteria": "只給正確排序，未說明作用。"
        },
        {
          "score": 0,
          "criteria": "先連不存在的交點、改變半徑，或排序與目的皆錯。"
        }
      ],
      "partialCreditRules": [
        "排序正確且主要作用正確，但漏一項原因。",
        "只給正確排序，未說明作用。"
      ],
      "followThroughPolicy": "若答案為④②③①且理由完整，視為滿分；若堅稱③必須先於②但其餘正確，仍可滿分。",
      "unitAndNotationRules": "步驟編號需清楚；半徑『大於AB一半』不可改成小於。",
      "answerOnlyPolicy": "只列編號最多1分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "把畫弧先後當成唯一。",
        "未先確保半徑足夠。"
      ],
      "independentReview": {
        "derivedResult": "④→③→②→①（②③可互換）。",
        "ambiguity": "兩個圓的繪製順序無依賴，評分接受兩種等價排序。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "d44d41eebe6d32881825351d5834dbf6faa3c73951b43563b61b7eaef4209dfb"
    },
    {
      "questionId": "u16-s011-cr002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "construction-word-steps",
      "skillOrder": 11,
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "閱讀作圖敘述：『以O為圓心畫弧交角的兩邊於A、B；以P為圓心、OA為半徑畫弧交既有射線於C；以C為圓心、AB為半徑截新弧於D；連PD。』判斷此作圖的目的，並證明結果。",
      "requiredWork": [
        "辨認原弧半徑OA=OB。",
        "辨認新弧半徑PC=PD。",
        "辨認弦AB=CD。",
        "用SSS推出中心角相等。"
      ],
      "fullCreditSolution": [
        "目的為在P處複製以O為頂點的原角。",
        "OA=OB=PC=PD（兩組同半徑），且AB=CD（搬運弦長）。",
        "故△OAB與△PCD依SSS全等，中心角∠AOB=∠CPD，所以連PD完成複製角。"
      ],
      "alternativeSolutions": [
        "若原角邊命名方向不同，只要C在指定的新射線上，結論仍是新角等於原角。"
      ],
      "reasoningSteps": [
        "目的為在P處複製以O為頂點的原角。",
        "OA=OB=PC=PD（兩組同半徑），且AB=CD（搬運弦長）。",
        "故△OAB與△PCD依SSS全等，中心角∠AOB=∠CPD，所以連PD完成複製角。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確辨認複製角，列三組邊與SSS，推出中心角相等。"
        },
        {
          "score": 2,
          "criteria": "目的與結論正確，但全等三組邊或角對應少一項。"
        },
        {
          "score": 1,
          "criteria": "只辨認是複製角，未證明。"
        },
        {
          "score": 0,
          "criteria": "誤判為作垂線/中垂線，或弦長配對錯誤。"
        }
      ],
      "partialCreditRules": [
        "目的與結論正確，但全等三組邊或角對應少一項。",
        "只辨認是複製角，未證明。"
      ],
      "followThroughPolicy": "若全等三角形命名順序不同但三邊與中心角對應一致，給滿分。",
      "unitAndNotationRules": "角度不需數值；OA作半徑時等於OB，AB是弦而非弧長。",
      "answerOnlyPolicy": "只答『複製角』最多1分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "把AB當作半徑。",
        "以為同半徑圓必有相同任意中心角。"
      ],
      "independentReview": {
        "derivedResult": "作圖目的為複製角，利用兩半徑與弦長的SSS保證中心角相等。",
        "ambiguity": "原角大小未給，不影響一般性證明。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "fc0553f982bc7cbe94a4c8bb5c0051aee8231afab718f56682e8f00841356700"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u16-s011-v001",
      "unitId": "u16",
      "skillId": "construction-word-steps",
      "contentSha256": "6f8e1244f1b22d756a15d9c036580591d4fbb4c7259131a8efb59bd5a1dfd784",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "必先有一個步驟建立 C、D，例如第一弧與角邊的交點。",
      "derivedAnswer": "先由其他作圖步驟產生並定義 C、D",
      "storedAnswer": "先由其他作圖步驟產生並定義 C、D",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「先由其他作圖步驟產生並定義 C、D」；另外三個選項逐一排除：「先連接 O、P」：P 尚未產生。；「先刪除所有圓弧」：會失去 C、D 的來源。；「先量出 ∠P」：P 不存在且純尺規不量角。",
        "undefinedSymbol": "題幹符號與詞語已在「作圖步驟文字題」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無量值。",
        "roundingConflict": "依精確資料獨立推導為「先由其他作圖步驟產生並定義 C、D」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目明示 C、D 非原始點，答案唯一。",
        "alternateReading": "若採常見誤讀「先使用後定義。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，直接追蹤依存。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "知道圓心必須是已知點。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「追蹤點的依存關係」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「作圖文字寫『以 C、D 為圓心作弧交於 P』。在此之前至少必須先完成什麼？」獨立重算：必先有一個步驟建立 C、D，例如第一弧與角邊的交點。 正確選項「先由其他作圖步驟產生並定義 C、D」。四選項核對：先連接 O、P=假，P 尚未產生。；先刪除所有圓弧=假，會失去 C、D 的來源。；先量出 ∠P=假，P 不存在且純尺規不量角。；先由其他作圖步驟產生並定義 C、D=真，圓心必須是已存在的點，否則該步無法執行。 邊界：題目明示 C、D 非原始點，答案唯一。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s011-v002",
      "unitId": "u16",
      "skillId": "construction-word-steps",
      "contentSha256": "ea3e2e7e8e2adfe103b63abb4180700df3e4f736c229148e60f3d309bf94ab23",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "唯一可執行順序是 ③、②、①。",
      "derivedAnswer": "③→②→①",
      "storedAnswer": "③→②→①",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「③→②→①」；另外三個選項逐一排除：「①→②→③」：P、C、D 都在使用時尚未定義。；「②→③→①」：②需要先有 C、D。；「③→①→②」：①需要先有 P。",
        "undefinedSymbol": "題幹符號與詞語已在「作圖步驟文字題」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無量值。",
        "roundingConflict": "依精確資料獨立推導為「③→②→①」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "每個新點只有一個來源，無平行可交換步驟。",
        "alternateReading": "若採常見誤讀「按編號或句長猜順序。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，單一依存鏈排序。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會建立點的產生鏈。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「排序角平分線步驟」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「步驟為：①作射線 OP；②以 C、D 為圓心作同半徑弧交於 P；③以 O 為圓心作弧交角兩邊於 C、D。正確順序為何？」獨立重算：唯一可執行順序是 ③、②、①。 正確選項「③→②→①」。四選項核對：①→②→③=假，P、C、D 都在使用時尚未定義。；③→②→①=真，先由 O 弧產生 C、D，再由 C、D 弧產生 P，最後才能連 O、P。；②→③→①=假，②需要先有 C、D。；③→①→②=假，①需要先有 P。 邊界：每個新點只有一個來源，無平行可交換步驟。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s011-v003",
      "unitId": "u16",
      "skillId": "construction-word-steps",
      "contentSha256": "a77afd1d0a838a6195d87ac4a6d7100d3f26c67ddd8d908351e3ab364adef0ed",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "等距軌跡唯一對應 AB 中垂線。",
      "derivedAnswer": "線段 AB 的中垂線",
      "storedAnswer": "線段 AB 的中垂線",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「線段 AB 的中垂線」；另外三個選項逐一排除：「複製角」：沒有原角與新頂點。；「作 AB 的平行線」：等距交弧不直接給平行。；「作圓 A 的切線」：沒有切點或半徑垂直條件。",
        "undefinedSymbol": "題幹符號與詞語已在「作圖步驟文字題」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無量值。",
        "roundingConflict": "依精確資料獨立推導為「線段 AB 的中垂線」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "兩交點已確保可決定直線。",
        "alternateReading": "若採常見誤讀「只看有兩圓就猜任意作圖。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，辨認常見作圖模式。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會從等距關係辨認中垂線。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「由等距結構辨認目的」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩端點 A、B 為圓心作同半徑弧，交於 P、Q，再連 PQ。這段文字最可能在作什麼？」獨立重算：等距軌跡唯一對應 AB 中垂線。 正確選項「線段 AB 的中垂線」。四選項核對：複製角=假，沒有原角與新頂點。；作 AB 的平行線=假，等距交弧不直接給平行。；線段 AB 的中垂線=真，P、Q 都到 A、B 等距，連線即中垂線。；作圓 A 的切線=假，沒有切點或半徑垂直條件。 邊界：兩交點已確保可決定直線。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s011-v004",
      "unitId": "u16",
      "skillId": "construction-word-steps",
      "contentSha256": "bda25da5f9676493934176f6f6b172ea8b17e92008ad8f55b9b03897354a0d16",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "∠AOP=∠POB。",
      "derivedAnswer": "OP 平分 ∠AOB",
      "storedAnswer": "OP 平分 ∠AOB",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「OP 平分 ∠AOB」；另外三個選項逐一排除：「OP⊥OA」：角平分線不必垂直角邊。；「OP 是 CD 的中垂線但不通過 O」：OP 確實也是 CD 的中垂線，且通過 O；但題目主要目標是平分原角。；「OP 複製 ∠AOB 到 P」：P 不是新角頂點，OP 是原角內射線。",
        "undefinedSymbol": "題幹符號與詞語已在「作圖步驟文字題」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無量值。",
        "roundingConflict": "依精確資料獨立推導為「OP 平分 ∠AOB」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "P 指定在角內，排除外角平分線。",
        "alternateReading": "若採常見誤讀「把角平分線與複製角混淆。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，從完整文字重建結果。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會用 SSS 驗證角平分線。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「辨認角平分線」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某文字作圖先『以 O 為圓心作弧交 OA、OB 於 C、D』，再『以 C、D 為圓心作同半徑弧交於 P』，最後『作射線 OP』。所得射線具有何性質？」獨立重算：∠AOP=∠POB。 正確選項「OP 平分 ∠AOB」。四選項核對：OP⊥OA=假，角平分線不必垂直角邊。；OP 是 CD 的中垂線但不通過 O=假，OP 確實也是 CD 的中垂線，且通過 O；但題目主要目標是平分原角。；OP 複製 ∠AOB 到 P=假，P 不是新角頂點，OP 是原角內射線。；OP 平分 ∠AOB=真，OC=OD、CP=DP、OP 共用，兩小三角形 SSS 全等，兩半角相等。 邊界：P 指定在角內，排除外角平分線。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s011-v005",
      "unitId": "u16",
      "skillId": "construction-word-steps",
      "contentSha256": "02e556cc0365cb5c708bad4b27cf660923f9e94b64eb1209fd0312860c02bf46",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "因此文字規格缺漏，需補出第二交點的作法。",
      "derivedAnswer": "步驟不可執行，因 Q 沒有來源",
      "storedAnswer": "步驟不可執行，因 Q 沒有來源",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「步驟不可執行，因 Q 沒有來源」；另外三個選項逐一排除：「線段 PQ 一定為 0」：Q 未定義，不能談距離。；「可把 Q 任意選在紙上」：任意點不能保證作圖性質。；「只要把 P 重複寫成 Q 即可」：同一點不能決定直線方向。",
        "undefinedSymbol": "題幹符號與詞語已在「作圖步驟文字題」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無量值。",
        "roundingConflict": "依精確資料獨立推導為「步驟不可執行，因 Q 沒有來源」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目未提供可唯一推定的 Q，不能擅自修補。",
        "alternateReading": "若採常見誤讀「對未定義符號自行猜測。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，做符號與依存稽核。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會檢查作圖敘述完整性。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「辨認未定義引用」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某作圖步驟最後寫『連接 P、Q』，但前文只產生了一個交點 P，從未定義 Q。最精確的問題是什麼？」獨立重算：因此文字規格缺漏，需補出第二交點的作法。 正確選項「步驟不可執行，因 Q 沒有來源」。四選項核對：線段 PQ 一定為 0=假，Q 未定義，不能談距離。；可把 Q 任意選在紙上=假，任意點不能保證作圖性質。；步驟不可執行，因 Q 沒有來源=真，作線前兩端點都必須已知且不同。；只要把 P 重複寫成 Q 即可=假，同一點不能決定直線方向。 邊界：題目未提供可唯一推定的 Q，不能擅自修補。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s011-v006",
      "unitId": "u16",
      "skillId": "construction-word-steps",
      "contentSha256": "5f61c27677b1730717174f42741859d51479380ec63642ee71abdfa435ece0e0",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "同時保持兩圓半徑相同，才能保證等距。",
      "derivedAnswer": "增大相同半徑，使兩弧交於兩個不同點 P、Q，再連 PQ",
      "storedAnswer": "增大相同半徑，使兩弧交於兩個不同點 P、Q，再連 PQ",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「增大相同半徑，使兩弧交於兩個不同點 P、Q，再連 PQ」；另外三個選項逐一排除：「縮小半徑」：會變成不相交。；「把 A、B 當兩交點」：A、B 是圓心且連線為原線段。；「保留一點 P，任畫通過 P 的線」：方向不唯一。",
        "undefinedSymbol": "題幹符號與詞語已在「作圖步驟文字題」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "半徑同單位且改為嚴格增大，無取整。",
        "roundingConflict": "依精確資料獨立推導為「增大相同半徑，使兩弧交於兩個不同點 P、Q，再連 PQ」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目要求標準交弧法，修正唯一合理。",
        "alternateReading": "若採常見誤讀「只修交點數卻破壞相同半徑。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，結合文字與幾何可行性。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "知道圓相交條件與兩點定線。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「修正交點數不足」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「作 AB 中垂線的文字中，兩弧只交於一點 P，卻寫『連兩交點作直線』。最合理修正是哪一項？」獨立重算：同時保持兩圓半徑相同，才能保證等距。 正確選項「增大相同半徑，使兩弧交於兩個不同點 P、Q，再連 PQ」。四選項核對：縮小半徑=假，會變成不相交。；增大相同半徑，使兩弧交於兩個不同點 P、Q，再連 PQ=真，中垂線方向需兩個等距交點；相切只給中點。；把 A、B 當兩交點=假，A、B 是圓心且連線為原線段。；保留一點 P，任畫通過 P 的線=假，方向不唯一。 邊界：題目要求標準交弧法，修正唯一合理。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s011-v007",
      "unitId": "u16",
      "skillId": "construction-word-steps",
      "contentSha256": "2da8c8968af28058f923798bd654c91c61c4eb3e56a8994274dc62f640ae925d",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "此順序讓每個圓心與半徑在使用前已存在。",
      "derivedAnswer": "先在原角產生 C、D，再在新弧產生 E，最後用弦 CD 從 E 產生 F",
      "storedAnswer": "先在原角產生 C、D，再在新弧產生 E，最後用弦 CD 從 E 產生 F",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「先在原角產生 C、D，再在新弧產生 E，最後用弦 CD 從 E 產生 F」；另外三個選項逐一排除：「先用 F 作圓心，再產生 E」：F 尚未定義。；「先連 P、F，再畫產生 F 的弧」：先使用後定義。；「先在新頂點產生 E、F，再決定原角的 C、D」：F 的半徑需要原弦 CD。",
        "undefinedSymbol": "題幹符號與詞語已在「作圖步驟文字題」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無數值。",
        "roundingConflict": "依精確資料獨立推導為「先在原角產生 C、D，再在新弧產生 E，最後用弦 CD 從 E 產生 F」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "C、D 與 E 的兩個第一弧步驟在技術上可交換，但 F 必須在兩者之後；選項描述的整體先後唯一正確。",
        "alternateReading": "若採常見誤讀「忽略半徑資料也有依存關係。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，分析分支依存圖。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會追蹤點與線段兩種輸入。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「排列複製角核心物件」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「複製角文字題中，下列哪個依存順序正確？」獨立重算：此順序讓每個圓心與半徑在使用前已存在。 正確選項「先在原角產生 C、D，再在新弧產生 E，最後用弦 CD 從 E 產生 F」。四選項核對：先在原角產生 C、D，再在新弧產生 E，最後用弦 CD 從 E 產生 F=真，F 的產生依賴 CD，而 CD 依賴 C、D；E 則由新頂點第一弧產生。；先用 F 作圓心，再產生 E=假，F 尚未定義。；先連 P、F，再畫產生 F 的弧=假，先使用後定義。；先在新頂點產生 E、F，再決定原角的 C、D=假，F 的半徑需要原弦 CD。 邊界：C、D 與 E 的兩個第一弧步驟在技術上可交換，但 F 必須在兩者之後；選項描述的整體先後唯一正確。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s011-v008",
      "unitId": "u16",
      "skillId": "construction-word-steps",
      "contentSha256": "12e4ee94f8294ea482330377ccbcad24a44923d12e03f0140372909f922e088d",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "AQ 只是一條經端點 A 的斜線，無垂直保證。",
      "derivedAnswer": "應作直線 PQ，而不是 AQ",
      "storedAnswer": "應作直線 PQ，而不是 AQ",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「應作直線 PQ，而不是 AQ」；另外三個選項逐一排除：「圓心應改為 P、Q」：A、B 作圓心正確。；「半徑應不同」：必須相同。；「只需作直線 AB」：AB 是原線段。",
        "undefinedSymbol": "題幹符號與詞語已在「作圖步驟文字題」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無量值。",
        "roundingConflict": "依精確資料獨立推導為「應作直線 PQ，而不是 AQ」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "除非特殊退化，A 不在自身與 B 的中垂線上；A≠B 已假設。",
        "alternateReading": "若採常見誤讀「認為任一圓心連交點都可作答案。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，定位最後一步錯誤。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會辨認答案線上的點須滿足等距。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「辨認最後連線端點」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「文字作圖：『以 A、B 為圓心，使用相同半徑作弧交於 P、Q；作直線 AQ。』若目標是 AB 中垂線，錯誤為何？」獨立重算：AQ 只是一條經端點 A 的斜線，無垂直保證。 正確選項「應作直線 PQ，而不是 AQ」。四選項核對：應作直線 PQ，而不是 AQ=真，中垂線由兩個等距點 P、Q 決定；A 本身通常不到 A、B 等距。；圓心應改為 P、Q=假，A、B 作圓心正確。；半徑應不同=假，必須相同。；只需作直線 AB=假，AB 是原線段。 邊界：除非特殊退化，A 不在自身與 B 的中垂線上；A≠B 已假設。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s011-v009",
      "unitId": "u16",
      "skillId": "construction-word-steps",
      "contentSha256": "e777cc48c08e18d4f5fe2353995a686bc63903de892767a30da46370066bf344",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "兩種性質來自同一對稱結構，並不衝突。",
      "derivedAnswer": "不矛盾；OP 是 ∠AOB 的角平分線，同時是弦 CD 的中垂線",
      "storedAnswer": "不矛盾；OP 是 ∠AOB 的角平分線，同時是弦 CD 的中垂線",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「不矛盾；OP 是 ∠AOB 的角平分線，同時是弦 CD 的中垂線」；另外三個選項逐一排除：「矛盾，一條線不能同時有兩種性質」：同一線可由不同定義描述。；「矛盾，角平分線一定與任何弦平行」：沒有此性質。；「只有當原角 90° 才可能」：對任意非退化角，對稱構造都成立。",
        "undefinedSymbol": "題幹符號與詞語已在「作圖步驟文字題」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無量值。",
        "roundingConflict": "依精確資料獨立推導為「不矛盾；OP 是 ∠AOB 的角平分線，同時是弦 CD 的中垂線」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "C、D 不重合且 P≠O，直線可定義；原角不為 0°或180°。",
        "alternateReading": "若採常見誤讀「把名稱視為互斥分類。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，理解作圖結構的雙重結果。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會從作圖步驟推多重性質。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「理解同一線可有多種身分」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某作圖敘述同時可得到一條線平分 ∠AOB，又垂直 CD。這是否矛盾？已知 C、D 是以 O 為圓心的弧在兩角邊上的截點。」獨立重算：兩種性質來自同一對稱結構，並不衝突。 正確選項「不矛盾；OP 是 ∠AOB 的角平分線，同時是弦 CD 的中垂線」。四選項核對：矛盾，一條線不能同時有兩種性質=假，同一線可由不同定義描述。；不矛盾；OP 是 ∠AOB 的角平分線，同時是弦 CD 的中垂線=真，O、P 都到 C、D 等距，所以 OP 是 CD 中垂線；兩小三角形全等又使 OP 平分角。；矛盾，角平分線一定與任何弦平行=假，沒有此性質。；只有當原角 90° 才可能=假，對任意非退化角，對稱構造都成立。 邊界：C、D 不重合且 P≠O，直線可定義；原角不為 0°或180°。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s011-v010",
      "unitId": "u16",
      "skillId": "construction-word-steps",
      "contentSha256": "01b3e51afc095707929bbc9e9655a9d68a34e6fc626b79378b4ac4452caabb40",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "拓樸排序唯一為丙、乙、甲。",
      "derivedAnswer": "丙→乙→甲",
      "storedAnswer": "丙→乙→甲",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「丙→乙→甲」；另外三個選項逐一排除：「甲→乙→丙」：P、C、D 均未定義。；「乙→甲→丙」：乙一開始缺 C、D。；「丙→甲→乙」：甲在 P 產生前執行。",
        "undefinedSymbol": "題幹符號與詞語已在「作圖步驟文字題」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無單位。",
        "roundingConflict": "依精確資料獨立推導為「丙→乙→甲」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "三步無可交換分支，順序唯一。",
        "alternateReading": "若採常見誤讀「把文字順序當任意，未做依存檢查。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，模擬軟體需嚴格遵守依存。",
      "literacyContextNecessity": "系統執行成敗直接取決於順序。",
      "prerequisiteCheck": "會追蹤新物件產生順序。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「將作圖規格轉成可執行流程」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「自動繪圖系統收到打亂指令：甲『連接 O、P』；乙『以 C、D 為圓心作同半徑弧交 P』；丙『以 O 為圓心作弧交兩邊於 C、D』。系統應採哪個執行序？」獨立重算：拓樸排序唯一為丙、乙、甲。 正確選項「丙→乙→甲」。四選項核對：丙→乙→甲=真，丙建立 C、D，乙建立 P，甲才有兩端點可連。；甲→乙→丙=假，P、C、D 均未定義。；乙→甲→丙=假，乙一開始缺 C、D。；丙→甲→乙=假，甲在 P 產生前執行。 邊界：三步無可交換分支，順序唯一。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s011-v011",
      "unitId": "u16",
      "skillId": "construction-word-steps",
      "contentSha256": "02eb0d42658e7d86b81955b29e2cb33667f215e818cbc78469d2722ba6bec643",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "缺詞會讓手冊允許錯誤構造，無法驗收垂直與平分。",
      "derivedAnswer": "只有相同半徑才能保證每個交點到兩端點等距",
      "storedAnswer": "只有相同半徑才能保證每個交點到兩端點等距",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「只有相同半徑才能保證每個交點到兩端點等距」；另外三個選項逐一排除：「相同半徑可讓圖更美觀」：核心是幾何保證，不是外觀。；「不同半徑一定沒有交點」：不同半徑也可能相交，但交點不等距。；「相同半徑可使原線段變短」：作圖不改變原線段。",
        "undefinedSymbol": "題幹符號與詞語已在「作圖步驟文字題」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "兩半徑同單位但需數值相同；不涉及四捨五入。",
        "roundingConflict": "依精確資料獨立推導為「只有相同半徑才能保證每個交點到兩端點等距」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "即使某次不同半徑偶然連線近似垂直，也無必然性。",
        "alternateReading": "若採常見誤讀「把技術規格精確度當文字潤飾。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，規格文字直接控制工程正確性。",
      "literacyContextNecessity": "『相同』是中垂線幾何證明不可缺少的條件。",
      "prerequisiteCheck": "會從文字限制推等距。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「說明規格缺詞的數學後果」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「施工手冊寫『以兩端點為圓心，各畫一個任意半徑的弧，連交點』，但未寫『相同半徑』。審查員應要求補上這四字，主要原因是什麼？」獨立重算：缺詞會讓手冊允許錯誤構造，無法驗收垂直與平分。 正確選項「只有相同半徑才能保證每個交點到兩端點等距」。四選項核對：相同半徑可讓圖更美觀=假，核心是幾何保證，不是外觀。；不同半徑一定沒有交點=假，不同半徑也可能相交，但交點不等距。；相同半徑可使原線段變短=假，作圖不改變原線段。；只有相同半徑才能保證每個交點到兩端點等距=真，中垂線的判定依賴 PA=PB、QA=QB；半徑若不同，等式失效。 邊界：即使某次不同半徑偶然連線近似垂直，也無必然性。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s011-v012",
      "unitId": "u16",
      "skillId": "construction-word-steps",
      "contentSha256": "0266ec9f382be5d0df5d3681f37427ea978c66ee822a29f3f18526588aa6a6a7",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "教學應保留必要痕跡或附文字理由，才能驗證。",
      "derivedAnswer": "不能；需保留或說明等半徑弧、交點等作圖依據",
      "storedAnswer": "不能；需保留或說明等半徑弧、交點等作圖依據",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「不能；需保留或說明等半徑弧、交點等作圖依據」；另外三個選項逐一排除：「能，因 OP 畫在角中央」：視覺中央不代表精確平分。；「能，只要 OP 比兩角邊短」：射線長度與角平分無關。；「能，任何從頂點出發的射線都平分角」：角內有無數射線，只有一條內角平分線。",
        "undefinedSymbol": "題幹符號與詞語已在「作圖步驟文字題」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無量值。",
        "roundingConflict": "依精確資料獨立推導為「不能；需保留或說明等半徑弧、交點等作圖依據」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "若另有等角符號可判定，但題目明示沒有。",
        "alternateReading": "若採常見誤讀「把示意圖外觀當作精確條件。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，媒體呈現是否保留驗證資訊是核心。",
      "literacyContextNecessity": "作圖教育需要讓學生看見理由，情境不可刪除。",
      "prerequisiteCheck": "會區分結果與證據。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「評估證據是否保留」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「線上教學影片把作角平分線的圓弧全部擦掉，只留下射線 OP。學生還能只靠成品判定它一定平分原角嗎？」獨立重算：教學應保留必要痕跡或附文字理由，才能驗證。 正確選項「不能；需保留或說明等半徑弧、交點等作圖依據」。四選項核對：能，因 OP 畫在角中央=假，視覺中央不代表精確平分。；能，只要 OP 比兩角邊短=假，射線長度與角平分無關。；不能；需保留或說明等半徑弧、交點等作圖依據=真，沒有弧痕或等角標記，成品線的位置不能證明兩半角相等。；能，任何從頂點出發的射線都平分角=假，角內有無數射線，只有一條內角平分線。 邊界：若另有等角符號可判定，但題目明示沒有。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u16-fig-011-construction-sequence",
      "unitId": "u16",
      "slot": "s011",
      "title": "垂直平分線文字步驟的四格順序",
      "altText": "四個編號小格依序顯示選半徑、以A畫弧、以B畫弧、連結兩弧交點。",
      "svgPath": "figures/u16/u16-fig-011-construction-sequence.svg",
      "drawingSpec": {
        "canvas": {
          "width": 360,
          "height": 240,
          "viewBox": "0 0 360 240"
        },
        "coordinateSystem": "左上角為(0,0)，x向右、y向下。",
        "geometry": "四格矩形x=10、98、186、274；各格依序顯示線段、單弧、雙弧、交點連線；最右有方向箭頭。",
        "visibleLineRules": "主要邊線使用2.5px黑色實線；輔助線使用1.5px虛線；弧線不得遮住頂點標籤。",
        "hiddenLineRules": "平面圖無隱藏邊；未畫出的延長線不得由視覺自行推定。",
        "labels": "每格上方有步驟編號與短語。",
        "tickMarksAndSymbols": "相等邊以同數量短刻痕表示；直角以小正方形；相等角以同型圓弧。",
        "units": "示意圖無長度單位，題目另有數值時以題幹為準。",
        "arrows": "只在延長線或行進方向使用箭頭。",
        "toScale": false,
        "notToScaleWarning": "圖形不按比例，請依標記與題目條件判斷。",
        "mobileLayout": "360×240畫布；最小文字14px；標籤與線段保持至少6px間距。",
        "answerLeakageControl": "圖中只呈現已知結構與定義標記，不標示題目所求數值或正確選項。"
      },
      "svgAssertions": [
        "1 選半徑",
        "2 A畫弧",
        "3 B畫弧",
        "4 連交點"
      ],
      "figureReview": {
        "decision": "pass",
        "mobileReadability": "360px寬預覽下，頂點、刻痕、直角符號與延長線箭頭仍可辨識。",
        "answerLeakage": "未顯示任何題目答案；只保留概念所需結構。",
        "geometryCheck": "已依列出的座標逐項核對端點、交點、刻痕與文字位置。",
        "reviewNote": "垂直平分線文字步驟的四格順序已逐線檢查：四格矩形x=10、98、186、274；各格依序顯示線段、單弧、雙弧、交點連線；最右有方向箭頭。；標籤配置為每格上方有步驟編號與短語。，未依視覺比例暗示未給定量。",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "0edb91b12231f90a8162d37336d7b171ca67f143384e9b049e410d1877c50340"
    }
  ]
};
export default skillData;
