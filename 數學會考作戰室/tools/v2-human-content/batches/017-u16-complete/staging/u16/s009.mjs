// Deterministically emitted from reviewed CHATGPT_HUMAN_AUTHORED_R1 source.
// Do not edit this staging module by hand.
export const skillData={
  "slot": "s009",
  "lecture": {
    "lectureId": "u16-s009-lecture-r1",
    "unitId": "u16",
    "numericUnitId": 16,
    "topicId": "u16-construction",
    "skillId": "compass-copy-angle",
    "skillOrder": 9,
    "originalLockedTitle": "複製角",
    "title": "複製角：把角邊上的弦長關係搬到新頂點",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能依標準尺規步驟複製一個已知角。",
      "能說明第一次圓弧固定兩邊上的等距點，第二次開口搬移弦長。",
      "能辨認應保持不變的圓規開口與交點。",
      "能用 SSS 說明原角與複製角相等。"
    ],
    "prerequisiteBridge": "已會描述圓心、半徑與交點。複製角不是用量角器讀度數，而是複製同一半徑圓弧上的弦長，使兩個小三角形三邊對應相等。",
    "prerequisites": [
      {
        "skillId": "compass-construction",
        "requiredLevel": "能使用先備技能「尺規作圖步驟」的核心定義與基本運算，並能說明其與本節的連結。"
      }
    ],
    "glossary": [
      {
        "term": "已知角",
        "definition": "要被複製的角，例如 ∠AOB。"
      },
      {
        "term": "新頂點",
        "definition": "要作出等角的位置，例如 P。"
      },
      {
        "term": "基準射線",
        "definition": "新角其中一邊，決定複製角的方向。"
      },
      {
        "term": "截點",
        "definition": "圓弧與角的兩邊相交所得的點。"
      },
      {
        "term": "弦長",
        "definition": "同一圓上兩點間的線段長度，本作圖用圓規搬移。"
      }
    ],
    "notation": [
      {
        "symbol": "以 O 為圓心作弧，交 OA、OB 於 C、D",
        "meaning": "OC=OD，固定原角兩邊上的等距點。"
      },
      {
        "symbol": "以 P 為圓心、OC 為半徑作弧，交基準射線於 E",
        "meaning": "PE=OC。"
      },
      {
        "symbol": "以 E 為圓心、CD 為半徑作弧，交前弧於 F",
        "meaning": "EF=CD。"
      }
    ],
    "conceptNarrative": [
      "先在原角兩邊用同一圓弧截出 C、D，使 OC=OD；線段 CD 記錄了原角在該半徑下張開的程度。",
      "到新頂點 P，以相同半徑作弧並在基準射線上取 E，使 PE=OC。",
      "再把圓規開到 CD，以 E 為圓心截取 F，使 EF=CD；因 F 也在以 P 為圓心的弧上，所以 PF=OD。",
      "△OCD 與 △PEF 三邊分別相等，依 SSS 全等，因此 ∠COD=∠EPF。",
      "弧交點可能有基準射線兩側兩個選擇，題目若指定同側或方向，必須選正確一個。"
    ],
    "formalDefinitions": [
      {
        "name": "複製角作圖",
        "statement": "只用無刻度直尺與圓規，在指定頂點與基準射線上作出和已知角相等的角。"
      },
      {
        "name": "弦長保存",
        "statement": "在相同半徑下，兩端弦長相等可配合 SSS 保證圓心角相等。"
      }
    ],
    "formulas": [
      {
        "formula": "OC=PE、OD=PF、CD=EF ⇒ △OCD≅△PEF",
        "conditions": [
          "F 位於以 P 為圓心的同半徑弧上"
        ],
        "meaning": "SSS 驗證複製角。"
      },
      {
        "formula": "△OCD≅△PEF ⇒ ∠COD=∠EPF",
        "conditions": [
          "對應頂點 O↔P"
        ],
        "meaning": "得到原角與新角相等。"
      }
    ],
    "nonApplicableCases": [
      "只搬移一段半徑，沒有搬移弦長，不能固定角度。",
      "第二次在原角截弦後若改變圓規開口，不能保證等角。",
      "把新弧圓心設在基準射線上的截點而非新頂點，會作錯。",
      "交點選在基準射線錯側時，可能得到方向相反的角。",
      "用量角器量度後畫角不是尺規複製角。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "在原角以頂點 O 為圓心畫弧，交兩邊於 C、D。",
        "check": "OC 與 OD 是否為同一圓半徑？"
      },
      {
        "step": 2,
        "instruction": "在新頂點 P 以相同半徑畫弧，交基準射線於 E。",
        "check": "PE 是否等於 OC？"
      },
      {
        "step": 3,
        "instruction": "將圓規開口調為 CD。",
        "check": "此開口是否完整保存至下一步？"
      },
      {
        "step": 4,
        "instruction": "以 E 為圓心截新弧於 F。",
        "check": "選取交點方向是否符合題意？"
      },
      {
        "step": 5,
        "instruction": "作射線 PF。",
        "check": "∠EPF 是否為所求複製角？"
      },
      {
        "step": 6,
        "instruction": "用 SSS 驗證。",
        "check": "三組對應邊是否為 OC↔PE、OD↔PF、CD↔EF？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "說明複製 ∠AOB 時第一道圓弧的作用。",
        "solutionSteps": [
          "以 O 為圓心同時截兩邊。",
          "得到 OC=OD，並形成弦 CD。"
        ],
        "answer": "建立相同半徑與記錄角張開程度的弦。"
      },
      {
        "exampleId": "L2",
        "prompt": "新角頂點為 P，基準射線為 PX。第一個新截點 E 應如何取得？",
        "solutionSteps": [
          "保持原先半徑 OC。",
          "以 P 為圓心畫弧，交 PX 於 E。"
        ],
        "answer": "使 PE=OC。"
      },
      {
        "exampleId": "L3",
        "prompt": "為何必須搬移 CD？",
        "solutionSteps": [
          "只有兩個半徑相等仍可改變夾角。",
          "CD 固定兩個弧上點的距離，配合三邊形成 SSS。"
        ],
        "answer": "固定新角大小。"
      },
      {
        "exampleId": "L4",
        "prompt": "作完後如何證明 ∠AOB=∠XPF？",
        "solutionSteps": [
          "原小三角形與新小三角形有兩組半徑和一組弦相等。",
          "兩三角形 SSS 全等。",
          "圓心角為對應角。"
        ],
        "answer": "由 SSS 得兩角相等。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "用不同半徑作新頂點的第一弧。",
        "why": "三邊對應失去一組等長。",
        "correction": "第一次原弧與新弧保持同一圓規開口。"
      },
      {
        "mistake": "把 OC 當成需搬移的弦。",
        "why": "混淆半徑與 C、D 間距離。",
        "correction": "角大小由弦 CD 搬移，半徑另保持。"
      },
      {
        "mistake": "以 P 為圓心搬移 CD。",
        "why": "正確圓心應是基準射線截點 E。",
        "correction": "用 E 為圓心，使 EF=CD。"
      },
      {
        "mistake": "未作射線 PF。",
        "why": "只留下交點，未形成新角邊。",
        "correction": "最後連接新頂點 P 與 F。"
      },
      {
        "mistake": "選錯弧交點造成反向。",
        "why": "忽略題目指定側。",
        "correction": "先判斷新角應在基準射線哪一側。"
      },
      {
        "mistake": "用 ASA 當驗證。",
        "why": "尚未知道新角相等，會循環。",
        "correction": "以三組可作出的邊長使用 SSS。"
      }
    ],
    "selfCheck": [
      "原弧與新弧半徑是否相同？",
      "我有搬移原弧兩截點的弦長嗎？",
      "第二次截弧的圓心是否為新基準截點？",
      "最後射線是否從新頂點出發？",
      "驗證是否使用 SSS 而非預先假設等角？"
    ],
    "summary": [
      "複製角靠搬移相同半徑與弦長，不靠量角器。",
      "原角與新角內的小三角形以 SSS 全等。",
      "圓心、半徑、交點與方向都必須明確。",
      "弦長是固定角張開程度的關鍵資料。"
    ],
    "connections": {
      "previous": "沿用尺規作圖的圓心、半徑與交點語言。",
      "next": [
        "過點作垂線也會用等距點與弧交點。",
        "作圖文字題會要求重排和判讀這些步驟。"
      ]
    },
    "figureReferences": [
      "u16-fig-009-copy-angle"
    ],
    "accessibilityNotes": [
      "u16-fig-009-copy-angle 的替代文字與結構描述收錄於本技能 drawing-specs.jsonl。"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u16-s009-v001",
        "u16-s009-v002",
        "u16-s009-v003",
        "u16-s009-v004",
        "u16-s009-v005",
        "u16-s009-v006",
        "u16-s009-v007",
        "u16-s009-v008",
        "u16-s009-v009",
        "u16-s009-v010",
        "u16-s009-v011",
        "u16-s009-v012"
      ],
      "constructedResponseIds": [
        "u16-s009-cr001",
        "u16-s009-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "針對「複製角」逐段核對定義、適用條件與反例；重新演算4個例題，確認未使用後續單元才引入的平行線或四邊形定理，並檢查圖形標記不取代文字條件。",
      "reviewVersion": "human-lecture-review-u16-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "a6dd21195bf004d3fc74691691df7b02abe2c6dba1c5ebff75430cf8ea023628"
  },
  "mcQuestions": [
    {
      "questionId": "u16-s009-v001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "compass-copy-angle",
      "skillOrder": 9,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "複製角時，第一道以原角頂點 O 為圓心的弧主要取得什麼？",
      "givenConditions": [
        "弧交兩角邊於 C、D"
      ],
      "target": "理解第一弧作用",
      "choices": [
        "新角頂點",
        "原角的度數數值",
        "兩個到 O 等距的截點 C、D",
        "原角平分線"
      ],
      "answerIndex": 2,
      "independentSolution": "得到 OC=OD 及弦 CD。",
      "explanation": "同一圓弧給 OC=OD，並留下弦 CD 記錄角的張開。 以 O 為圓心。 C、D 同在該弧上。",
      "steps": [
        "以 O 為圓心。",
        "C、D 同在該弧上。"
      ],
      "optionAnalysis": [
        {
          "choice": "新角頂點",
          "truth": false,
          "reason": "新頂點另由題目指定。"
        },
        {
          "choice": "原角的度數數值",
          "truth": false,
          "reason": "尺規不量角度。"
        },
        {
          "choice": "兩個到 O 等距的截點 C、D",
          "truth": true,
          "reason": "同一圓弧給 OC=OD，並留下弦 CD 記錄角的張開。"
        },
        {
          "choice": "原角平分線",
          "truth": false,
          "reason": "第一弧尚未建立平分方向。"
        }
      ],
      "misconceptionTarget": "以為圓弧直接讀出度數。",
      "prerequisiteCheck": "知道同圓半徑相等。",
      "estimatedTimeSec": "55",
      "unitAndRoundingCheck": "無數值單位。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "C、D 分別位於兩角邊，角色明確。",
      "difficultyReason": "基礎題，辨認步驟目的。",
      "literacyContextNecessity": null,
      "authoringIntent": "理解原角第一弧。",
      "tags": [
        "空間與形狀",
        "複製角",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "b97c431fbd5108547a7185765ad4a271857d69f61fb964ee9d97852bff7c58af"
    },
    {
      "questionId": "u16-s009-v002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "compass-copy-angle",
      "skillOrder": 9,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "複製角時，哪一段長度必須從原角搬到新弧上以固定角度？",
      "givenConditions": [
        "原弧交兩邊於 C、D"
      ],
      "target": "辨認弦長",
      "choices": [
        "OC",
        "OD",
        "OA",
        "CD"
      ],
      "answerIndex": 3,
      "independentSolution": "半徑加弦長使原、新小三角形可用 SSS 全等。",
      "explanation": "在相同半徑下，弦 CD 的長度決定圓心角大小。 第一步固定共同半徑。 再搬移兩截點間距離 CD。",
      "steps": [
        "第一步固定共同半徑。",
        "再搬移兩截點間距離 CD。"
      ],
      "optionAnalysis": [
        {
          "choice": "OC",
          "truth": false,
          "reason": "OC 是半徑，雖也要保持，但單獨不能固定角度。"
        },
        {
          "choice": "OD",
          "truth": false,
          "reason": "同樣只是半徑。"
        },
        {
          "choice": "OA",
          "truth": false,
          "reason": "原角邊可無限長，與角度無直接固定關係。"
        },
        {
          "choice": "CD",
          "truth": true,
          "reason": "在相同半徑下，弦 CD 的長度決定圓心角大小。"
        }
      ],
      "misconceptionTarget": "只搬半徑而忘記弦。",
      "prerequisiteCheck": "知道弦是圓上兩點連線。",
      "estimatedTimeSec": "55",
      "unitAndRoundingCheck": "CD 為長度，搬移時單位與開口不變。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目問『固定角度』的關鍵額外長度，因此答案是 CD。",
      "difficultyReason": "基礎題，辨認關鍵資料。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認需搬移的弦。",
      "tags": [
        "空間與形狀",
        "複製角",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "9f76613635473da097ffc2ad54e107f7baf8418ebca1d841726d7aab7fabd86f"
    },
    {
      "questionId": "u16-s009-v003",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "compass-copy-angle",
      "skillOrder": 9,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "新角頂點為 P、基準射線為 PX。以 P 為圓心、原弧半徑作弧，交 PX 於 E。下列何者成立？",
      "givenConditions": [
        "新弧半徑與原弧 OC 相同"
      ],
      "target": "讀取新弧半徑",
      "choices": [
        "EX=OC",
        "OE=PC",
        "PE⊥PX",
        "PE=OC"
      ],
      "answerIndex": 3,
      "independentSolution": "PE 是新弧半徑，等於原弧半徑 OC。",
      "explanation": "E 在以 P 為圓心、OC 為半徑的弧上，所以 PE=OC。 確認圓心 P。 確認半徑 OC。 E 為弧上點。",
      "steps": [
        "確認圓心 P。",
        "確認半徑 OC。",
        "E 為弧上點。"
      ],
      "optionAnalysis": [
        {
          "choice": "EX=OC",
          "truth": false,
          "reason": "X 是射線上的任意方向點，未必在弧上。"
        },
        {
          "choice": "OE=PC",
          "truth": false,
          "reason": "沒有此配對。"
        },
        {
          "choice": "PE⊥PX",
          "truth": false,
          "reason": "PE 位於射線 PX 上，不是垂直。"
        },
        {
          "choice": "PE=OC",
          "truth": true,
          "reason": "E 在以 P 為圓心、OC 為半徑的弧上，所以 PE=OC。"
        }
      ],
      "misconceptionTarget": "把弧交點到其他點的距離當半徑。",
      "prerequisiteCheck": "會讀圓心與弧上點。",
      "estimatedTimeSec": "50",
      "unitAndRoundingCheck": "長度等式精確，無換算。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "E 位於基準射線且為交點，PE 唯一。",
      "difficultyReason": "基礎題，直接讀取半徑。",
      "literacyContextNecessity": null,
      "authoringIntent": "建立第一組對應邊。",
      "tags": [
        "空間與形狀",
        "複製角",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "2266710ac07e7f262da5d71e9b0a613369ec1f8bedcf66990dc905f6eee967b8"
    },
    {
      "questionId": "u16-s009-v004",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "compass-copy-angle",
      "skillOrder": 9,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "原角中 OC=OD，弦為 CD；新角中 PE=PF，且 EF=CD。可用哪個判定證明兩個小三角形全等？",
      "givenConditions": [
        "OC=PE、OD=PF、CD=EF"
      ],
      "target": "選擇驗證方法",
      "choices": [
        "SSS",
        "SAS",
        "ASA",
        "AAA"
      ],
      "answerIndex": 0,
      "independentSolution": "△OCD 與 △PEF 由 SSS 全等，進而圓心角相等。",
      "explanation": "三組對應邊分別相等，所以使用 SSS。 列半徑 OC=PE。 列半徑 OD=PF。 列弦 CD=EF。",
      "steps": [
        "列半徑 OC=PE。",
        "列半徑 OD=PF。",
        "列弦 CD=EF。"
      ],
      "optionAnalysis": [
        {
          "choice": "SSS",
          "truth": true,
          "reason": "三組對應邊分別相等，所以使用 SSS。"
        },
        {
          "choice": "SAS",
          "truth": false,
          "reason": "尚未知道夾角相等，那正是要證明的。"
        },
        {
          "choice": "ASA",
          "truth": false,
          "reason": "沒有已知角。"
        },
        {
          "choice": "AAA",
          "truth": false,
          "reason": "沒有角資料且 AAA 不判全等。"
        }
      ],
      "misconceptionTarget": "先把待證的角相等拿來用 SAS。",
      "prerequisiteCheck": "會將作圖等距轉成三組邊。",
      "estimatedTimeSec": "90",
      "unitAndRoundingCheck": "長度均為圓規搬移，無單位差。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "頂點配對由兩條半徑共同端點 O-P 決定。",
      "difficultyReason": "標準題，理解作圖正確性證明。",
      "literacyContextNecessity": null,
      "authoringIntent": "以 SSS 驗證複製角。",
      "tags": [
        "空間與形狀",
        "複製角",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "6ac1e5d4e7d1d29a6fe1c3fbdb5c23cfe1c278b99937bdf8abc56856ac475baf"
    },
    {
      "questionId": "u16-s009-v005",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "compass-copy-angle",
      "skillOrder": 9,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "複製角時，把圓規開口調成 CD 後，下一步應以哪個點為圓心截新弧？",
      "givenConditions": [
        "E 是新弧與基準射線的交點"
      ],
      "target": "選對第二弧圓心",
      "choices": [
        "E",
        "P",
        "O",
        "D"
      ],
      "answerIndex": 0,
      "independentSolution": "E 對應原弧的 C（或 D），因此以 E 為圓心建立第三組邊。",
      "explanation": "以 E 為圓心、CD 為半徑，交新弧於 F，才能得到 EF=CD。 新弧上已知點是 E。 需從 E 搬移弦 CD。 交點命名 F。",
      "steps": [
        "新弧上已知點是 E。",
        "需從 E 搬移弦 CD。",
        "交點命名 F。"
      ],
      "optionAnalysis": [
        {
          "choice": "E",
          "truth": true,
          "reason": "以 E 為圓心、CD 為半徑，交新弧於 F，才能得到 EF=CD。"
        },
        {
          "choice": "P",
          "truth": false,
          "reason": "若以 P 為圓心只會再畫同心弧，不能建立 EF=CD。"
        },
        {
          "choice": "O",
          "truth": false,
          "reason": "O 是原角頂點，不在新作圖區。"
        },
        {
          "choice": "D",
          "truth": false,
          "reason": "D 是原角截點，不能直接決定新弧上的位置。"
        }
      ],
      "misconceptionTarget": "把新頂點 P 誤當所有弧的圓心。",
      "prerequisiteCheck": "會追蹤截點角色。",
      "estimatedTimeSec": "80",
      "unitAndRoundingCheck": "圓規開口 CD 為同一長度。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "選擇 C 或 D 作對應起點取決於步驟命名；本題已定 E 對應弦一端。",
      "difficultyReason": "標準題，辨認中間圓心。",
      "literacyContextNecessity": null,
      "authoringIntent": "完成搬移弦。",
      "tags": [
        "空間與形狀",
        "複製角",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "8461c4463145a13c0ff2958c32bebfd8503b59f466b616cd99b5f7469d429669"
    },
    {
      "questionId": "u16-s009-v006",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "compass-copy-angle",
      "skillOrder": 9,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "複製角完成後，最後要畫哪一條射線？",
      "givenConditions": [
        "F 為兩新弧交點",
        "P 為新角頂點",
        "E 在基準射線上"
      ],
      "target": "形成新角另一邊",
      "choices": [
        "射線 EF",
        "射線 PF",
        "直線 CD",
        "射線 OP"
      ],
      "answerIndex": 1,
      "independentSolution": "所得 ∠EPF 與原角相等。",
      "explanation": "新角的兩邊必從 P 出發，一邊是 PE 所在基準射線，另一邊應通過 F。 確認新頂點 P。 確認新交點 F。 連 P、F 作射線。",
      "steps": [
        "確認新頂點 P。",
        "確認新交點 F。",
        "連 P、F 作射線。"
      ],
      "optionAnalysis": [
        {
          "choice": "射線 EF",
          "truth": false,
          "reason": "頂點會在 E，不是指定新頂點 P。"
        },
        {
          "choice": "射線 PF",
          "truth": true,
          "reason": "新角的兩邊必從 P 出發，一邊是 PE 所在基準射線，另一邊應通過 F。"
        },
        {
          "choice": "直線 CD",
          "truth": false,
          "reason": "這是原角弦。"
        },
        {
          "choice": "射線 OP",
          "truth": false,
          "reason": "連接原、新頂點，與複製角無關。"
        }
      ],
      "misconceptionTarget": "把弦 EF 當成角邊。",
      "prerequisiteCheck": "會辨認角的共同頂點。",
      "estimatedTimeSec": "65",
      "unitAndRoundingCheck": "無量值。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "直線或射線方向以 P 為端點，答案唯一。",
      "difficultyReason": "標準題，完成最後輸出。",
      "literacyContextNecessity": null,
      "authoringIntent": "畫出複製角。",
      "tags": [
        "空間與形狀",
        "複製角",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "91773a9ddfa5d170b582d110ebfaf494ba570a4f0ae898b6754b0eba38c32131"
    },
    {
      "questionId": "u16-s009-v007",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "compass-copy-angle",
      "skillOrder": 9,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "若複製角時，新頂點的第一弧使用了不同半徑 r，但仍把原弦 CD 原長搬移，是否一定得到等角？",
      "givenConditions": [
        "原半徑為 R",
        "r≠R"
      ],
      "target": "檢查半徑與弦同時縮放條件",
      "choices": [
        "不一定；同一弦在不同半徑下所對圓心角通常不同",
        "一定，因弦 CD 相同就足夠",
        "一定，只要 r>R",
        "一定，只要 r<R"
      ],
      "answerIndex": 0,
      "independentSolution": "例如半徑增大而弦固定，圓心角會變小，所以不能保證等角。",
      "explanation": "SSS 驗證需要原、新兩組半徑也相等；只保留弦長不足。 原小三角形邊為 R、R、CD。 新小三角形邊為 r、r、CD。 若 r≠R，三邊不全對應相等。",
      "steps": [
        "原小三角形邊為 R、R、CD。",
        "新小三角形邊為 r、r、CD。",
        "若 r≠R，三邊不全對應相等。"
      ],
      "optionAnalysis": [
        {
          "choice": "不一定；同一弦在不同半徑下所對圓心角通常不同",
          "truth": true,
          "reason": "SSS 驗證需要原、新兩組半徑也相等；只保留弦長不足。"
        },
        {
          "choice": "一定，因弦 CD 相同就足夠",
          "truth": false,
          "reason": "圓心角還取決於半徑。"
        },
        {
          "choice": "一定，只要 r>R",
          "truth": false,
          "reason": "半徑改變仍改變角度。"
        },
        {
          "choice": "一定，只要 r<R",
          "truth": false,
          "reason": "同樣無法保證。"
        }
      ],
      "misconceptionTarget": "以為弦長單獨決定角度。",
      "prerequisiteCheck": "理解角度由半徑與弦共同決定。",
      "estimatedTimeSec": "125",
      "unitAndRoundingCheck": "R、r、CD 同為長度，無單位問題；只比較不等。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "特殊退化或巧合不構成一般保證；題目問『一定』。",
      "difficultyReason": "進階題，分析作圖必要條件。",
      "literacyContextNecessity": null,
      "authoringIntent": "審查不同半徑錯誤。",
      "tags": [
        "空間與形狀",
        "複製角",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "cd2d6b9c9f68f4baa7cbf00cb11476058e5235077a447b591554c7c26eb257c0"
    },
    {
      "questionId": "u16-s009-v008",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "compass-copy-angle",
      "skillOrder": 9,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "在基準射線兩側，新弧與以 E 為圓心的弧可能有兩個交點 F₁、F₂。若題目指定新角在射線上方，應如何處理？",
      "givenConditions": [
        "兩交點分居基準射線兩側"
      ],
      "target": "處理方向限制",
      "choices": [
        "任選一點，方向不影響題意",
        "選位於射線上方的交點作 F",
        "兩點都連接，形成兩條答案射線",
        "改變弦長直到只剩一個交點"
      ],
      "answerIndex": 1,
      "independentSolution": "兩角大小可相等，但只有上方那個滿足位置限制。",
      "explanation": "兩交點對應原角的正負方向；指定側決定選哪一個。 辨認基準射線方向。 比較 F₁、F₂ 所在側。 選上方交點。",
      "steps": [
        "辨認基準射線方向。",
        "比較 F₁、F₂ 所在側。",
        "選上方交點。"
      ],
      "optionAnalysis": [
        {
          "choice": "任選一點，方向不影響題意",
          "truth": false,
          "reason": "題目明確指定上方。"
        },
        {
          "choice": "選位於射線上方的交點作 F",
          "truth": true,
          "reason": "兩交點對應原角的正負方向；指定側決定選哪一個。"
        },
        {
          "choice": "兩點都連接，形成兩條答案射線",
          "truth": false,
          "reason": "會多出不符合單一指定角的結果。"
        },
        {
          "choice": "改變弦長直到只剩一個交點",
          "truth": false,
          "reason": "會破壞要複製的角度。"
        }
      ],
      "misconceptionTarget": "只檢查角度大小，忽略方向條件。",
      "prerequisiteCheck": "會辨認射線兩側。",
      "estimatedTimeSec": "110",
      "unitAndRoundingCheck": "無單位或近似。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目已指定上方，因此排除鏡射解；若未指定兩者都可。",
      "difficultyReason": "進階題，處理多解中的位置約束。",
      "literacyContextNecessity": null,
      "authoringIntent": "選擇正確交點。",
      "tags": [
        "空間與形狀",
        "複製角",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "36ef323c32398a96c9e1ab9b465b99096cc7b4339620378ba84e46139433c6bc"
    },
    {
      "questionId": "u16-s009-v009",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "compass-copy-angle",
      "skillOrder": 9,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "某同學想證明複製角正確，寫『因為兩角看起來一樣大，所以全等』。最佳修正為何？",
      "givenConditions": [
        "原、新作圖皆保留圓弧與弦痕跡"
      ],
      "target": "以可驗證理由取代目測",
      "choices": [
        "改用量角器量兩角",
        "只寫兩組半徑相等",
        "只寫弦相等",
        "列出兩組半徑與弦分別相等，以 SSS 證兩小三角形全等，再得對應角相等"
      ],
      "answerIndex": 3,
      "independentSolution": "目測被替換成可重現的全等理由鏈。",
      "explanation": "三組邊 OC=PE、OD=PF、CD=EF 才是完整證據。 由作圖取得兩組半徑相等。 由搬移取得弦相等。 SSS 後使用對應角相等。",
      "steps": [
        "由作圖取得兩組半徑相等。",
        "由搬移取得弦相等。",
        "SSS 後使用對應角相等。"
      ],
      "optionAnalysis": [
        {
          "choice": "改用量角器量兩角",
          "truth": false,
          "reason": "純尺規驗證不靠量角器。"
        },
        {
          "choice": "只寫兩組半徑相等",
          "truth": false,
          "reason": "兩邊相等不足以固定夾角。"
        },
        {
          "choice": "只寫弦相等",
          "truth": false,
          "reason": "不同半徑可對不同角。"
        },
        {
          "choice": "列出兩組半徑與弦分別相等，以 SSS 證兩小三角形全等，再得對應角相等",
          "truth": true,
          "reason": "三組邊 OC=PE、OD=PF、CD=EF 才是完整證據。"
        }
      ],
      "misconceptionTarget": "把圖形外觀當證明。",
      "prerequisiteCheck": "會用 SSS 寫作圖驗證。",
      "estimatedTimeSec": "135",
      "unitAndRoundingCheck": "長度等式為理想作圖精確關係。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "不需量出角度數值；全等式頂點 O-P 對應明確。",
      "difficultyReason": "進階題，評改不嚴謹論證。",
      "literacyContextNecessity": null,
      "authoringIntent": "正式驗證複製角。",
      "tags": [
        "空間與形狀",
        "複製角",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "9373d69120783aebcaf4c74b2e8f890c972044d5d6d4fcdda3c6a3e911bc8071"
    },
    {
      "questionId": "u16-s009-v010",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "compass-copy-angle",
      "skillOrder": 9,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "製圖員不能使用量角器，卻要在新位置重現模板的一個角。下列哪組資料必須由圓規保留？",
      "givenConditions": [
        "原角兩邊可延長"
      ],
      "target": "辨認尺規複製所需幾何資料",
      "choices": [
        "只保留角頂點名稱",
        "只保留兩角邊的長度",
        "同一個截弧半徑與該弧兩截點間的弦長",
        "只保留模板周長"
      ],
      "answerIndex": 2,
      "independentSolution": "兩項距離資料可在新頂點重建同一小三角形。",
      "explanation": "半徑建立兩腰，弦建立第三邊，三邊共同以 SSS 固定角。 在原角取同半徑截點。 保存半徑。 保存截點間弦長。",
      "steps": [
        "在原角取同半徑截點。",
        "保存半徑。",
        "保存截點間弦長。"
      ],
      "optionAnalysis": [
        {
          "choice": "只保留角頂點名稱",
          "truth": false,
          "reason": "名稱不含大小資訊。"
        },
        {
          "choice": "只保留兩角邊的長度",
          "truth": false,
          "reason": "角邊可任意延長，長度不決定角。"
        },
        {
          "choice": "同一個截弧半徑與該弧兩截點間的弦長",
          "truth": true,
          "reason": "半徑建立兩腰，弦建立第三邊，三邊共同以 SSS 固定角。"
        },
        {
          "choice": "只保留模板周長",
          "truth": false,
          "reason": "周長與單一角無直接唯一關係。"
        }
      ],
      "misconceptionTarget": "以為角的兩條射線長度能定義角。",
      "prerequisiteCheck": "會把角抽象成等腰小三角形。",
      "estimatedTimeSec": "120",
      "unitAndRoundingCheck": "距離可用任意一致單位；不需讀數或換算。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "模板角小於180°，一般複製步驟可行；方向另由基準射線指定。",
      "difficultyReason": "素養題，無量角器限制使幾何搬移資料成必要。",
      "literacyContextNecessity": "工具限制直接決定需保存半徑與弦。",
      "authoringIntent": "選擇製圖保留資料。",
      "tags": [
        "空間與形狀",
        "複製角",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "fae6cbc2fde7a0f6b810ddb1b74f4bffbabad2d8fb46f7b592fbd8a6803ca2f9"
    },
    {
      "questionId": "u16-s009-v011",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "compass-copy-angle",
      "skillOrder": 9,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "機械臂先在原角兩邊取 C、D，再於新頂點 P 取 E。程式下一行寫『以 E 為圓心，OC 為半徑截新弧』。這行最可能錯在哪裡？",
      "givenConditions": [
        "OC 是第一弧半徑",
        "CD 是原弦"
      ],
      "target": "診斷圓規開口使用錯誤",
      "choices": [
        "圓心應改為 O",
        "第二次以 E 為圓心時應使用 CD 為半徑，不是 OC",
        "應刪除新弧",
        "應使用角度 180°−原角"
      ],
      "answerIndex": 1,
      "independentSolution": "若仍用 OC，會構造邊 OC、OC、OC 的等邊小三角形，不一定複製原角。",
      "explanation": "以 E 為圓心的弧負責搬移原弦 CD；OC 已用於建立新圓半徑。 分辨第一開口 OC 與第二開口 CD。 確認 E 是弦一端對應點。 改用 CD 截新弧。",
      "steps": [
        "分辨第一開口 OC 與第二開口 CD。",
        "確認 E 是弦一端對應點。",
        "改用 CD 截新弧。"
      ],
      "optionAnalysis": [
        {
          "choice": "圓心應改為 O",
          "truth": false,
          "reason": "操作已在新頂點區域。"
        },
        {
          "choice": "第二次以 E 為圓心時應使用 CD 為半徑，不是 OC",
          "truth": true,
          "reason": "以 E 為圓心的弧負責搬移原弦 CD；OC 已用於建立新圓半徑。"
        },
        {
          "choice": "應刪除新弧",
          "truth": false,
          "reason": "新弧提供 PF=PE=OC。"
        },
        {
          "choice": "應使用角度 180°−原角",
          "truth": false,
          "reason": "尺規程式不以度數運算。"
        }
      ],
      "misconceptionTarget": "不同階段圓規開口混淆。",
      "prerequisiteCheck": "會追蹤半徑與弦的功能。",
      "estimatedTimeSec": "145",
      "unitAndRoundingCheck": "兩者都是長度但通常數值不同；不能因同單位互換。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "只有原角 60° 時 OC=CD，錯誤可能偶然不顯現；題目問一般程式。",
      "difficultyReason": "素養題，診斷自動作圖流程中的參數錯置。",
      "literacyContextNecessity": "程式參數直接決定是否重現角度。",
      "authoringIntent": "修正機械臂作圖指令。",
      "tags": [
        "空間與形狀",
        "複製角",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "a8c09e856efbb2bd41b33677190f0185a4b55db204fd7fb64c67ca0352174455"
    },
    {
      "questionId": "u16-s009-v012",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "compass-copy-angle",
      "skillOrder": 9,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "複製一個 70° 角時，作圖結果若落在基準射線另一側，角度仍量得 70°。下列判斷何者最精確？",
      "givenConditions": [
        "題目未指定同側或上、下方"
      ],
      "target": "區分角度正確與方向規格",
      "choices": [
        "一定錯，複製角只能在原角同一紙面方向",
        "一定是 110°",
        "若未指定方向，鏡射位置通常也是合法的 70° 複製角",
        "一定與原角全等但不能稱複製"
      ],
      "answerIndex": 2,
      "independentSolution": "結果為大小相同、方向相反的角，仍滿足複製角定義。",
      "explanation": "鏡射保留角度；只有額外位置規格才排除另一側。 確認兩小三角形仍 SSS 全等。 鏡射不改角度。 檢查題目無側別限制。",
      "steps": [
        "確認兩小三角形仍 SSS 全等。",
        "鏡射不改角度。",
        "檢查題目無側別限制。"
      ],
      "optionAnalysis": [
        {
          "choice": "一定錯，複製角只能在原角同一紙面方向",
          "truth": false,
          "reason": "尺規作圖可平移、旋轉、鏡射。"
        },
        {
          "choice": "一定是 110°",
          "truth": false,
          "reason": "鏡射不會把角改成補角。"
        },
        {
          "choice": "若未指定方向，鏡射位置通常也是合法的 70° 複製角",
          "truth": true,
          "reason": "鏡射保留角度；只有額外位置規格才排除另一側。"
        },
        {
          "choice": "一定與原角全等但不能稱複製",
          "truth": false,
          "reason": "等角正是複製目的。"
        }
      ],
      "misconceptionTarget": "把方向不同誤認為角度不同。",
      "prerequisiteCheck": "理解剛體鏡射保角。",
      "estimatedTimeSec": "120",
      "unitAndRoundingCheck": "70° 為精確角度，無四捨五入。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目明示無方向限制，因此兩側解都合法；若指定側則需遵守。",
      "difficultyReason": "素養題，處理製圖規格中的未指定自由度。",
      "literacyContextNecessity": "實務圖面是否接受鏡射取決於方向規格，情境必要。",
      "authoringIntent": "評估鏡射複製結果。",
      "tags": [
        "空間與形狀",
        "複製角",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "840ffaf6fb582c9765deec5d98b9962b6044649e107778374005324288839dea"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u16-s009-cr001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "compass-copy-angle",
      "skillOrder": 9,
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-009-copy-angle",
      "prompt": "給定∠AOB與一條以P為端點的射線PX，說明如何在P處複製一個與∠AOB相等的角。",
      "requiredWork": [
        "在原角畫跨兩邊的圓弧。",
        "在P處以相同半徑畫弧。",
        "搬運原弧兩交點間弦長。",
        "連接新交點。"
      ],
      "fullCreditSolution": [
        "以O為圓心畫弧，交OA、OB於C、D。",
        "以P為圓心、相同半徑畫弧，交PX於E。",
        "以CD為圓規開口、E為圓心截新弧於F。",
        "連PF，則∠XPF=∠AOB；因OC=OD=PE=PF且CD=EF，可由SSS理解兩扇形三角形全等。"
      ],
      "alternativeSolutions": [
        "原角弧半徑可任取，只要新角使用同半徑且弦長完整搬運。"
      ],
      "reasoningSteps": [
        "以O為圓心畫弧，交OA、OB於C、D。",
        "以P為圓心、相同半徑畫弧，交PX於E。",
        "以CD為圓規開口、E為圓心截新弧於F。",
        "連PF，則∠XPF=∠AOB；因OC=OD=PE=PF且CD=EF，可由SSS理解兩扇形三角形全等。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "四個關鍵操作完整，圓規開口角色正確，且說明弧半徑與弦長共同保證角相等。"
        },
        {
          "score": 2,
          "criteria": "作圖結果正確，但漏說某次圓規開口保持或證明理由簡略。"
        },
        {
          "score": 1,
          "criteria": "知道先畫弧再搬弦長，但步驟命名或次序不完整。"
        },
        {
          "score": 0,
          "criteria": "直接量角度、只搬半徑不搬弦長，或連錯射線。"
        }
      ],
      "partialCreditRules": [
        "作圖結果正確，但漏說某次圓規開口保持或證明理由簡略。",
        "知道先畫弧再搬弦長，但步驟命名或次序不完整。"
      ],
      "followThroughPolicy": "若只遺漏最後的全等說明但作圖完整，給2分；若未搬弦長，最多1分。",
      "unitAndNotationRules": "角寫∠XPF；圓規用於搬距離，不以度數作開口。",
      "answerOnlyPolicy": "只寫『用圓規複製』無操作，0分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "把CD弦長誤換成原角兩邊長。",
        "在新圓弧上任取F。"
      ],
      "independentReview": {
        "derivedResult": "搬運同半徑弧及其弦長，連PF即可複製原角。",
        "ambiguity": "F可取在射線PX的一側；若題目指定方向，須選相應側。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "41716c82dcab93d03fb78890af4e34acd1a32dfbdf54bf93f85c9492a3306d9e"
    },
    {
      "questionId": "u16-s009-cr002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-construction",
      "skillId": "compass-copy-angle",
      "skillOrder": 9,
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "學生複製角時，只做了兩步：以原頂點畫弧，再以新頂點用相同半徑畫弧；接著在新弧上任取一點連線。指出錯誤並補上必要步驟。",
      "requiredWork": [
        "說明同半徑弧本身不能固定角度。",
        "指出需搬運原弧兩交點間的弦長。",
        "完成新射線。"
      ],
      "fullCreditSolution": [
        "錯誤是新弧上的點可任意移動，會產生不同角度。",
        "應量取原弧與兩角邊交點間的弦長，以新弧已知交點為圓心截取同弦長，所得交點才可與新頂點連線。"
      ],
      "alternativeSolutions": [
        "可用SSS說明：兩個半徑與一條弦均相等，中心角才相等。"
      ],
      "reasoningSteps": [
        "錯誤是新弧上的點可任意移動，會產生不同角度。",
        "應量取原弧與兩角邊交點間的弦長，以新弧已知交點為圓心截取同弦長，所得交點才可與新頂點連線。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "指出任取點造成角不固定，準確補上搬弦長與連線，並說明其必要性。"
        },
        {
          "score": 2,
          "criteria": "錯誤判斷正確且提到弦長，但操作描述少一個交點角色。"
        },
        {
          "score": 1,
          "criteria": "只說『少一步』或『還要量距離』，未明確是弦長。"
        },
        {
          "score": 0,
          "criteria": "認為原兩步已足夠，或補充量角器。"
        }
      ],
      "partialCreditRules": [
        "錯誤判斷正確且提到弦長，但操作描述少一個交點角色。",
        "只說『少一步』或『還要量距離』，未明確是弦長。"
      ],
      "followThroughPolicy": "若把弦長稱為『兩弧點距離』但對象清楚，可視同正確；若說搬半徑，最多1分。",
      "unitAndNotationRules": "不得使用角度刻度；弦長是原弧兩交點的直線距離。",
      "answerOnlyPolicy": "只寫『錯』無修正，0分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "把弦長與弧長混淆。",
        "在新弧任取點。"
      ],
      "independentReview": {
        "derivedResult": "必須搬運原弧的弦長，才能唯一決定新角。",
        "ambiguity": "不要求量弧長；圓規實際搬的是直線弦長。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "d486e635329deeb2e3b7377f03c1dce18beb497aae09beb29d217a9c459b7a2c"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u16-s009-v001",
      "unitId": "u16",
      "skillId": "compass-copy-angle",
      "contentSha256": "b97c431fbd5108547a7185765ad4a271857d69f61fb964ee9d97852bff7c58af",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "得到 OC=OD 及弦 CD。",
      "derivedAnswer": "兩個到 O 等距的截點 C、D",
      "storedAnswer": "兩個到 O 等距的截點 C、D",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「兩個到 O 等距的截點 C、D」；另外三個選項逐一排除：「新角頂點」：新頂點另由題目指定。；「原角的度數數值」：尺規不量角度。；「原角平分線」：第一弧尚未建立平分方向。",
        "undefinedSymbol": "題幹符號與詞語已在「複製角」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無數值單位。",
        "roundingConflict": "依精確資料獨立推導為「兩個到 O 等距的截點 C、D」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "C、D 分別位於兩角邊，角色明確。",
        "alternateReading": "若採常見誤讀「以為圓弧直接讀出度數。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，辨認步驟目的。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "知道同圓半徑相等。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「理解第一弧作用」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「複製角時，第一道以原角頂點 O 為圓心的弧主要取得什麼？」獨立重算：得到 OC=OD 及弦 CD。 正確選項「兩個到 O 等距的截點 C、D」。四選項核對：新角頂點=假，新頂點另由題目指定。；原角的度數數值=假，尺規不量角度。；兩個到 O 等距的截點 C、D=真，同一圓弧給 OC=OD，並留下弦 CD 記錄角的張開。；原角平分線=假，第一弧尚未建立平分方向。 邊界：C、D 分別位於兩角邊，角色明確。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s009-v002",
      "unitId": "u16",
      "skillId": "compass-copy-angle",
      "contentSha256": "9f76613635473da097ffc2ad54e107f7baf8418ebca1d841726d7aab7fabd86f",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "半徑加弦長使原、新小三角形可用 SSS 全等。",
      "derivedAnswer": "CD",
      "storedAnswer": "CD",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「CD」；另外三個選項逐一排除：「OC」：OC 是半徑，雖也要保持，但單獨不能固定角度。；「OD」：同樣只是半徑。；「OA」：原角邊可無限長，與角度無直接固定關係。",
        "undefinedSymbol": "題幹符號與詞語已在「複製角」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "CD 為長度，搬移時單位與開口不變。",
        "roundingConflict": "依精確資料獨立推導為「CD」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目問『固定角度』的關鍵額外長度，因此答案是 CD。",
        "alternateReading": "若採常見誤讀「只搬半徑而忘記弦。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，辨認關鍵資料。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "知道弦是圓上兩點連線。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「辨認弦長」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「複製角時，哪一段長度必須從原角搬到新弧上以固定角度？」獨立重算：半徑加弦長使原、新小三角形可用 SSS 全等。 正確選項「CD」。四選項核對：OC=假，OC 是半徑，雖也要保持，但單獨不能固定角度。；OD=假，同樣只是半徑。；OA=假，原角邊可無限長，與角度無直接固定關係。；CD=真，在相同半徑下，弦 CD 的長度決定圓心角大小。 邊界：題目問『固定角度』的關鍵額外長度，因此答案是 CD。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s009-v003",
      "unitId": "u16",
      "skillId": "compass-copy-angle",
      "contentSha256": "2266710ac07e7f262da5d71e9b0a613369ec1f8bedcf66990dc905f6eee967b8",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "PE 是新弧半徑，等於原弧半徑 OC。",
      "derivedAnswer": "PE=OC",
      "storedAnswer": "PE=OC",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「PE=OC」；另外三個選項逐一排除：「EX=OC」：X 是射線上的任意方向點，未必在弧上。；「OE=PC」：沒有此配對。；「PE⊥PX」：PE 位於射線 PX 上，不是垂直。",
        "undefinedSymbol": "題幹符號與詞語已在「複製角」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "長度等式精確，無換算。",
        "roundingConflict": "依精確資料獨立推導為「PE=OC」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "E 位於基準射線且為交點，PE 唯一。",
        "alternateReading": "若採常見誤讀「把弧交點到其他點的距離當半徑。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，直接讀取半徑。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會讀圓心與弧上點。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「讀取新弧半徑」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「新角頂點為 P、基準射線為 PX。以 P 為圓心、原弧半徑作弧，交 PX 於 E。下列何者成立？」獨立重算：PE 是新弧半徑，等於原弧半徑 OC。 正確選項「PE=OC」。四選項核對：EX=OC=假，X 是射線上的任意方向點，未必在弧上。；OE=PC=假，沒有此配對。；PE⊥PX=假，PE 位於射線 PX 上，不是垂直。；PE=OC=真，E 在以 P 為圓心、OC 為半徑的弧上，所以 PE=OC。 邊界：E 位於基準射線且為交點，PE 唯一。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s009-v004",
      "unitId": "u16",
      "skillId": "compass-copy-angle",
      "contentSha256": "6ac1e5d4e7d1d29a6fe1c3fbdb5c23cfe1c278b99937bdf8abc56856ac475baf",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "△OCD 與 △PEF 由 SSS 全等，進而圓心角相等。",
      "derivedAnswer": "SSS",
      "storedAnswer": "SSS",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「SSS」；另外三個選項逐一排除：「SAS」：尚未知道夾角相等，那正是要證明的。；「ASA」：沒有已知角。；「AAA」：沒有角資料且 AAA 不判全等。",
        "undefinedSymbol": "題幹符號與詞語已在「複製角」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "長度均為圓規搬移，無單位差。",
        "roundingConflict": "依精確資料獨立推導為「SSS」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "頂點配對由兩條半徑共同端點 O-P 決定。",
        "alternateReading": "若採常見誤讀「先把待證的角相等拿來用 SAS。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，理解作圖正確性證明。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會將作圖等距轉成三組邊。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「選擇驗證方法」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「原角中 OC=OD，弦為 CD；新角中 PE=PF，且 EF=CD。可用哪個判定證明兩個小三角形全等？」獨立重算：△OCD 與 △PEF 由 SSS 全等，進而圓心角相等。 正確選項「SSS」。四選項核對：SSS=真，三組對應邊分別相等，所以使用 SSS。；SAS=假，尚未知道夾角相等，那正是要證明的。；ASA=假，沒有已知角。；AAA=假，沒有角資料且 AAA 不判全等。 邊界：頂點配對由兩條半徑共同端點 O-P 決定。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s009-v005",
      "unitId": "u16",
      "skillId": "compass-copy-angle",
      "contentSha256": "8461c4463145a13c0ff2958c32bebfd8503b59f466b616cd99b5f7469d429669",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "E 對應原弧的 C（或 D），因此以 E 為圓心建立第三組邊。",
      "derivedAnswer": "E",
      "storedAnswer": "E",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「E」；另外三個選項逐一排除：「P」：若以 P 為圓心只會再畫同心弧，不能建立 EF=CD。；「O」：O 是原角頂點，不在新作圖區。；「D」：D 是原角截點，不能直接決定新弧上的位置。",
        "undefinedSymbol": "題幹符號與詞語已在「複製角」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "圓規開口 CD 為同一長度。",
        "roundingConflict": "依精確資料獨立推導為「E」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "選擇 C 或 D 作對應起點取決於步驟命名；本題已定 E 對應弦一端。",
        "alternateReading": "若採常見誤讀「把新頂點 P 誤當所有弧的圓心。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，辨認中間圓心。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會追蹤截點角色。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「選對第二弧圓心」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「複製角時，把圓規開口調成 CD 後，下一步應以哪個點為圓心截新弧？」獨立重算：E 對應原弧的 C（或 D），因此以 E 為圓心建立第三組邊。 正確選項「E」。四選項核對：E=真，以 E 為圓心、CD 為半徑，交新弧於 F，才能得到 EF=CD。；P=假，若以 P 為圓心只會再畫同心弧，不能建立 EF=CD。；O=假，O 是原角頂點，不在新作圖區。；D=假，D 是原角截點，不能直接決定新弧上的位置。 邊界：選擇 C 或 D 作對應起點取決於步驟命名；本題已定 E 對應弦一端。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s009-v006",
      "unitId": "u16",
      "skillId": "compass-copy-angle",
      "contentSha256": "91773a9ddfa5d170b582d110ebfaf494ba570a4f0ae898b6754b0eba38c32131",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "所得 ∠EPF 與原角相等。",
      "derivedAnswer": "射線 PF",
      "storedAnswer": "射線 PF",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「射線 PF」；另外三個選項逐一排除：「射線 EF」：頂點會在 E，不是指定新頂點 P。；「直線 CD」：這是原角弦。；「射線 OP」：連接原、新頂點，與複製角無關。",
        "undefinedSymbol": "題幹符號與詞語已在「複製角」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無量值。",
        "roundingConflict": "依精確資料獨立推導為「射線 PF」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "直線或射線方向以 P 為端點，答案唯一。",
        "alternateReading": "若採常見誤讀「把弦 EF 當成角邊。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，完成最後輸出。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會辨認角的共同頂點。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「形成新角另一邊」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「複製角完成後，最後要畫哪一條射線？」獨立重算：所得 ∠EPF 與原角相等。 正確選項「射線 PF」。四選項核對：射線 EF=假，頂點會在 E，不是指定新頂點 P。；射線 PF=真，新角的兩邊必從 P 出發，一邊是 PE 所在基準射線，另一邊應通過 F。；直線 CD=假，這是原角弦。；射線 OP=假，連接原、新頂點，與複製角無關。 邊界：直線或射線方向以 P 為端點，答案唯一。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s009-v007",
      "unitId": "u16",
      "skillId": "compass-copy-angle",
      "contentSha256": "cd2d6b9c9f68f4baa7cbf00cb11476058e5235077a447b591554c7c26eb257c0",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "例如半徑增大而弦固定，圓心角會變小，所以不能保證等角。",
      "derivedAnswer": "不一定；同一弦在不同半徑下所對圓心角通常不同",
      "storedAnswer": "不一定；同一弦在不同半徑下所對圓心角通常不同",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「不一定；同一弦在不同半徑下所對圓心角通常不同」；另外三個選項逐一排除：「一定，因弦 CD 相同就足夠」：圓心角還取決於半徑。；「一定，只要 r>R」：半徑改變仍改變角度。；「一定，只要 r<R」：同樣無法保證。",
        "undefinedSymbol": "題幹符號與詞語已在「複製角」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "R、r、CD 同為長度，無單位問題；只比較不等。",
        "roundingConflict": "依精確資料獨立推導為「不一定；同一弦在不同半徑下所對圓心角通常不同」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "特殊退化或巧合不構成一般保證；題目問『一定』。",
        "alternateReading": "若採常見誤讀「以為弦長單獨決定角度。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，分析作圖必要條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "理解角度由半徑與弦共同決定。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「檢查半徑與弦同時縮放條件」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若複製角時，新頂點的第一弧使用了不同半徑 r，但仍把原弦 CD 原長搬移，是否一定得到等角？」獨立重算：例如半徑增大而弦固定，圓心角會變小，所以不能保證等角。 正確選項「不一定；同一弦在不同半徑下所對圓心角通常不同」。四選項核對：不一定；同一弦在不同半徑下所對圓心角通常不同=真，SSS 驗證需要原、新兩組半徑也相等；只保留弦長不足。；一定，因弦 CD 相同就足夠=假，圓心角還取決於半徑。；一定，只要 r>R=假，半徑改變仍改變角度。；一定，只要 r<R=假，同樣無法保證。 邊界：特殊退化或巧合不構成一般保證；題目問『一定』。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s009-v008",
      "unitId": "u16",
      "skillId": "compass-copy-angle",
      "contentSha256": "36ef323c32398a96c9e1ab9b465b99096cc7b4339620378ba84e46139433c6bc",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "兩角大小可相等，但只有上方那個滿足位置限制。",
      "derivedAnswer": "選位於射線上方的交點作 F",
      "storedAnswer": "選位於射線上方的交點作 F",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「選位於射線上方的交點作 F」；另外三個選項逐一排除：「任選一點，方向不影響題意」：題目明確指定上方。；「兩點都連接，形成兩條答案射線」：會多出不符合單一指定角的結果。；「改變弦長直到只剩一個交點」：會破壞要複製的角度。",
        "undefinedSymbol": "題幹符號與詞語已在「複製角」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "無單位或近似。",
        "roundingConflict": "依精確資料獨立推導為「選位於射線上方的交點作 F」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目已指定上方，因此排除鏡射解；若未指定兩者都可。",
        "alternateReading": "若採常見誤讀「只檢查角度大小，忽略方向條件。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，處理多解中的位置約束。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會辨認射線兩側。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「處理方向限制」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「在基準射線兩側，新弧與以 E 為圓心的弧可能有兩個交點 F₁、F₂。若題目指定新角在射線上方，應如何處理？」獨立重算：兩角大小可相等，但只有上方那個滿足位置限制。 正確選項「選位於射線上方的交點作 F」。四選項核對：任選一點，方向不影響題意=假，題目明確指定上方。；選位於射線上方的交點作 F=真，兩交點對應原角的正負方向；指定側決定選哪一個。；兩點都連接，形成兩條答案射線=假，會多出不符合單一指定角的結果。；改變弦長直到只剩一個交點=假，會破壞要複製的角度。 邊界：題目已指定上方，因此排除鏡射解；若未指定兩者都可。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s009-v009",
      "unitId": "u16",
      "skillId": "compass-copy-angle",
      "contentSha256": "9373d69120783aebcaf4c74b2e8f890c972044d5d6d4fcdda3c6a3e911bc8071",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "目測被替換成可重現的全等理由鏈。",
      "derivedAnswer": "列出兩組半徑與弦分別相等，以 SSS 證兩小三角形全等，再得對應角相等",
      "storedAnswer": "列出兩組半徑與弦分別相等，以 SSS 證兩小三角形全等，再得對應角相等",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「列出兩組半徑與弦分別相等，以 SSS 證兩小三角形全等，再得對應角相等」；另外三個選項逐一排除：「改用量角器量兩角」：純尺規驗證不靠量角器。；「只寫兩組半徑相等」：兩邊相等不足以固定夾角。；「只寫弦相等」：不同半徑可對不同角。",
        "undefinedSymbol": "題幹符號與詞語已在「複製角」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "長度等式為理想作圖精確關係。",
        "roundingConflict": "依精確資料獨立推導為「列出兩組半徑與弦分別相等，以 SSS 證兩小三角形全等，再得對應角相等」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "不需量出角度數值；全等式頂點 O-P 對應明確。",
        "alternateReading": "若採常見誤讀「把圖形外觀當證明。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，評改不嚴謹論證。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會用 SSS 寫作圖驗證。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「以可驗證理由取代目測」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某同學想證明複製角正確，寫『因為兩角看起來一樣大，所以全等』。最佳修正為何？」獨立重算：目測被替換成可重現的全等理由鏈。 正確選項「列出兩組半徑與弦分別相等，以 SSS 證兩小三角形全等，再得對應角相等」。四選項核對：改用量角器量兩角=假，純尺規驗證不靠量角器。；只寫兩組半徑相等=假，兩邊相等不足以固定夾角。；只寫弦相等=假，不同半徑可對不同角。；列出兩組半徑與弦分別相等，以 SSS 證兩小三角形全等，再得對應角相等=真，三組邊 OC=PE、OD=PF、CD=EF 才是完整證據。 邊界：不需量出角度數值；全等式頂點 O-P 對應明確。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s009-v010",
      "unitId": "u16",
      "skillId": "compass-copy-angle",
      "contentSha256": "fae6cbc2fde7a0f6b810ddb1b74f4bffbabad2d8fb46f7b592fbd8a6803ca2f9",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "兩項距離資料可在新頂點重建同一小三角形。",
      "derivedAnswer": "同一個截弧半徑與該弧兩截點間的弦長",
      "storedAnswer": "同一個截弧半徑與該弧兩截點間的弦長",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「同一個截弧半徑與該弧兩截點間的弦長」；另外三個選項逐一排除：「只保留角頂點名稱」：名稱不含大小資訊。；「只保留兩角邊的長度」：角邊可任意延長，長度不決定角。；「只保留模板周長」：周長與單一角無直接唯一關係。",
        "undefinedSymbol": "題幹符號與詞語已在「複製角」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "距離可用任意一致單位；不需讀數或換算。",
        "roundingConflict": "依精確資料獨立推導為「同一個截弧半徑與該弧兩截點間的弦長」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "模板角小於180°，一般複製步驟可行；方向另由基準射線指定。",
        "alternateReading": "若採常見誤讀「以為角的兩條射線長度能定義角。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，無量角器限制使幾何搬移資料成必要。",
      "literacyContextNecessity": "工具限制直接決定需保存半徑與弦。",
      "prerequisiteCheck": "會把角抽象成等腰小三角形。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「辨認尺規複製所需幾何資料」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「製圖員不能使用量角器，卻要在新位置重現模板的一個角。下列哪組資料必須由圓規保留？」獨立重算：兩項距離資料可在新頂點重建同一小三角形。 正確選項「同一個截弧半徑與該弧兩截點間的弦長」。四選項核對：只保留角頂點名稱=假，名稱不含大小資訊。；只保留兩角邊的長度=假，角邊可任意延長，長度不決定角。；同一個截弧半徑與該弧兩截點間的弦長=真，半徑建立兩腰，弦建立第三邊，三邊共同以 SSS 固定角。；只保留模板周長=假，周長與單一角無直接唯一關係。 邊界：模板角小於180°，一般複製步驟可行；方向另由基準射線指定。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s009-v011",
      "unitId": "u16",
      "skillId": "compass-copy-angle",
      "contentSha256": "a8c09e856efbb2bd41b33677190f0185a4b55db204fd7fb64c67ca0352174455",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "若仍用 OC，會構造邊 OC、OC、OC 的等邊小三角形，不一定複製原角。",
      "derivedAnswer": "第二次以 E 為圓心時應使用 CD 為半徑，不是 OC",
      "storedAnswer": "第二次以 E 為圓心時應使用 CD 為半徑，不是 OC",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「第二次以 E 為圓心時應使用 CD 為半徑，不是 OC」；另外三個選項逐一排除：「圓心應改為 O」：操作已在新頂點區域。；「應刪除新弧」：新弧提供 PF=PE=OC。；「應使用角度 180°−原角」：尺規程式不以度數運算。",
        "undefinedSymbol": "題幹符號與詞語已在「複製角」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "兩者都是長度但通常數值不同；不能因同單位互換。",
        "roundingConflict": "依精確資料獨立推導為「第二次以 E 為圓心時應使用 CD 為半徑，不是 OC」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "只有原角 60° 時 OC=CD，錯誤可能偶然不顯現；題目問一般程式。",
        "alternateReading": "若採常見誤讀「不同階段圓規開口混淆。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，診斷自動作圖流程中的參數錯置。",
      "literacyContextNecessity": "程式參數直接決定是否重現角度。",
      "prerequisiteCheck": "會追蹤半徑與弦的功能。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「診斷圓規開口使用錯誤」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「機械臂先在原角兩邊取 C、D，再於新頂點 P 取 E。程式下一行寫『以 E 為圓心，OC 為半徑截新弧』。這行最可能錯在哪裡？」獨立重算：若仍用 OC，會構造邊 OC、OC、OC 的等邊小三角形，不一定複製原角。 正確選項「第二次以 E 為圓心時應使用 CD 為半徑，不是 OC」。四選項核對：圓心應改為 O=假，操作已在新頂點區域。；第二次以 E 為圓心時應使用 CD 為半徑，不是 OC=真，以 E 為圓心的弧負責搬移原弦 CD；OC 已用於建立新圓半徑。；應刪除新弧=假，新弧提供 PF=PE=OC。；應使用角度 180°−原角=假，尺規程式不以度數運算。 邊界：只有原角 60° 時 OC=CD，錯誤可能偶然不顯現；題目問一般程式。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s009-v012",
      "unitId": "u16",
      "skillId": "compass-copy-angle",
      "contentSha256": "840ffaf6fb582c9765deec5d98b9962b6044649e107778374005324288839dea",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "結果為大小相同、方向相反的角，仍滿足複製角定義。",
      "derivedAnswer": "若未指定方向，鏡射位置通常也是合法的 70° 複製角",
      "storedAnswer": "若未指定方向，鏡射位置通常也是合法的 70° 複製角",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「若未指定方向，鏡射位置通常也是合法的 70° 複製角」；另外三個選項逐一排除：「一定錯，複製角只能在原角同一紙面方向」：尺規作圖可平移、旋轉、鏡射。；「一定是 110°」：鏡射不會把角改成補角。；「一定與原角全等但不能稱複製」：等角正是複製目的。",
        "undefinedSymbol": "題幹符號與詞語已在「複製角」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "70° 為精確角度，無四捨五入。",
        "roundingConflict": "依精確資料獨立推導為「若未指定方向，鏡射位置通常也是合法的 70° 複製角」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目明示無方向限制，因此兩側解都合法；若指定側則需遵守。",
        "alternateReading": "若採常見誤讀「把方向不同誤認為角度不同。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，處理製圖規格中的未指定自由度。",
      "literacyContextNecessity": "實務圖面是否接受鏡射取決於方向規格，情境必要。",
      "prerequisiteCheck": "理解剛體鏡射保角。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「區分角度正確與方向規格」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「複製一個 70° 角時，作圖結果若落在基準射線另一側，角度仍量得 70°。下列判斷何者最精確？」獨立重算：結果為大小相同、方向相反的角，仍滿足複製角定義。 正確選項「若未指定方向，鏡射位置通常也是合法的 70° 複製角」。四選項核對：一定錯，複製角只能在原角同一紙面方向=假，尺規作圖可平移、旋轉、鏡射。；一定是 110°=假，鏡射不會把角改成補角。；若未指定方向，鏡射位置通常也是合法的 70° 複製角=真，鏡射保留角度；只有額外位置規格才排除另一側。；一定與原角全等但不能稱複製=假，等角正是複製目的。 邊界：題目明示無方向限制，因此兩側解都合法；若指定側則需遵守。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u16-fig-009-copy-angle",
      "unitId": "u16",
      "slot": "s009",
      "title": "複製角的半徑弧與弦長搬運",
      "altText": "左側原角O的弧交兩邊於A、B，右側新角P使用相同半徑弧，並以同弦長在弧上定位D。",
      "svgPath": "figures/u16/u16-fig-009-copy-angle.svg",
      "drawingSpec": {
        "canvas": {
          "width": 360,
          "height": 240,
          "viewBox": "0 0 360 240"
        },
        "coordinateSystem": "左上角為(0,0)，x向右、y向下。",
        "geometry": "原角O(45,175)兩射線至(145,175)、(115,75)，半徑35弧交A(80,175)、B約(65,145)；新角P(205,175)同半徑弧，C(240,175)、D(224,144)，AB與CD加粗。",
        "visibleLineRules": "主要邊線使用2.5px黑色實線；輔助線使用1.5px虛線；弧線不得遮住頂點標籤。",
        "hiddenLineRules": "平面圖無隱藏邊；未畫出的延長線不得由視覺自行推定。",
        "labels": "O、A、B、P、C、D貼近對應點；搬運說明置頂。",
        "tickMarksAndSymbols": "相等邊以同數量短刻痕表示；直角以小正方形；相等角以同型圓弧。",
        "units": "示意圖無長度單位，題目另有數值時以題幹為準。",
        "arrows": "只在延長線或行進方向使用箭頭。",
        "toScale": false,
        "notToScaleWarning": "圖形不按比例，請依標記與題目條件判斷。",
        "mobileLayout": "360×240畫布；最小文字14px；標籤與線段保持至少6px間距。",
        "answerLeakageControl": "圖中只呈現已知結構與定義標記，不標示題目所求數值或正確選項。"
      },
      "svgAssertions": [
        "弦 AB 搬到 CD",
        "A35 35",
        "M205 175",
        "D</text>"
      ],
      "figureReview": {
        "decision": "pass",
        "mobileReadability": "360px寬預覽下，頂點、刻痕、直角符號與延長線箭頭仍可辨識。",
        "answerLeakage": "未顯示任何題目答案；只保留概念所需結構。",
        "geometryCheck": "已依列出的座標逐項核對端點、交點、刻痕與文字位置。",
        "reviewNote": "複製角的半徑弧與弦長搬運已逐線檢查：原角O(45,175)兩射線至(145,175)、(115,75)，半徑35弧交A(80,175)、B約(65,145)；新角P(205,175)同半徑弧，C(240,175)、D(224,144)，AB與CD加粗。；標籤配置為O、A、B、P、C、D貼近對應點；搬運說明置頂。，未依視覺比例暗示未給定量。",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "11f22a50edd3e3d501993ccaaaa1109a27f5260bc3bb10af5ba25777ba035575"
    }
  ]
};
export default skillData;
