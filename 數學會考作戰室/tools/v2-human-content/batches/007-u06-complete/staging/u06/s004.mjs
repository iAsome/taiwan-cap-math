// Deterministically serialized reviewed U06 content. Do not edit.
export default {
  "lecture": {
    "lectureId": "u06-s004-lecture-r1",
    "unitId": "u06",
    "numericUnitId": 6,
    "topicId": "u06-ratio-basics",
    "skillId": "proportion-property",
    "lockedSkillTitle": "比例式性質",
    "title": "比例式性質：乘積不變與合法變形",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "unitTitle": "比例式",
      "topicTitle": "比與比例式基礎",
      "skillOrder": 4,
      "lockedPrerequisiteSkillIds": [
        "ratio-part-total"
      ],
      "capBoundary": "使用國中比例式的交叉乘積、倒比與和比等可由代數驗證的變形；不延伸至高中的複雜比例定理。"
    },
    "prerequisiteBridge": "已會解 a:b=c:d。現在不只求單一未知數，而是理解哪些變形必然保留等值，哪些只是看起來對稱卻不成立。",
    "learningOutcomes": [
      "能由 a:b=c:d 推得 ad=bc，反向使用時確認分母非零。",
      "能判斷同時倒比、交換內項等合法變形。",
      "能證明 (a+b):b=(c+d):d 等和比性質。",
      "能用反例辨認只改一邊或亂加減的錯誤。"
    ],
    "glossary": [
      {
        "term": "外項乘積",
        "definition": "a:b=c:d 中 a×d。"
      },
      {
        "term": "內項乘積",
        "definition": "a:b=c:d 中 b×c。"
      },
      {
        "term": "倒比",
        "definition": "同時交換每個比的前項與後項。"
      },
      {
        "term": "和比",
        "definition": "由原比例把前後項的和與其中一項比較，例如 (a+b):b。"
      }
    ],
    "notation": [
      {
        "symbol": "a:b=c:d",
        "meaning": "a/b=c/d，b、d≠0。"
      },
      {
        "symbol": "b:a=d:c",
        "meaning": "原比例兩邊同時倒比，需 a、c≠0。"
      },
      {
        "symbol": "(a+b):b=(c+d):d",
        "meaning": "兩邊都把 1 加到原比值上所得的和比。"
      }
    ],
    "conceptNarrative": [
      "比例式 a:b=c:d 可寫成 a/b=c/d，後項 b、d 非零。其核心等價條件是外項積等於內項積 ad=bc，可用來驗證比例、求未知數與推導合法變形。",
      "四項皆非零時，可同時倒比得到 b:a=d:c；也可交換內項或外項形成等價比例。每個變形都應回到交叉乘積檢查，不能憑位置相似任意重新配對。",
      "若 a:b=m:n，可設 a=mk、b=nk。這種共同倍數表示法適合處理 a+b、b-a、乘積或總量條件，也能清楚保留正數與非零限制。",
      "判斷『必成立』時，一個合法推導足以證明真命題；要否定不一定成立的式子，只需找一個符合原比例但使該式失敗的反例。選項之間必須互不等價，確保唯一答案。"
    ],
    "formalDefinitions": [
      {
        "name": "比例式基本性質",
        "statement": "當 b、d≠0 時，a:b=c:d 當且僅當 ad=bc。"
      },
      {
        "name": "合法比例變形",
        "statement": "由等式兩邊進行同一可逆運算，且不破壞分母非零條件所得的比例。"
      }
    ],
    "formulas": [
      {
        "formula": "a:b=c:d ⇒ ad=bc",
        "conditions": [
          "b≠0",
          "d≠0"
        ],
        "meaning": "外項積等於內項積。"
      },
      {
        "formula": "a:b=c:d ⇒ b:a=d:c",
        "conditions": [
          "a≠0",
          "b≠0",
          "c≠0",
          "d≠0"
        ],
        "meaning": "同時倒比。"
      },
      {
        "formula": "a:b=c:d ⇒ (a+b):b=(c+d):d",
        "conditions": [
          "b≠0",
          "d≠0"
        ],
        "meaning": "和比性質。"
      }
    ],
    "nonApplicableCases": [
      "只把左邊 a:b 倒成 b:a，右邊不變。",
      "由 a/b=c/d 推成 (a+c)/(b+d)=a/b 雖有時成立，但不能在未檢查分母與結構下機械套用。",
      "原分子為 0 時直接倒比會使後項為 0。",
      "交叉乘積相等但原比例分母為 0，仍不能宣稱原比例有定義。",
      "把 a:b=c:d 誤推成 a+c=b+d。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "寫出比例的分式形式與後項非零條件。",
        "check": "所有倒數或約分所需的非零條件均已明示。"
      },
      {
        "step": 2,
        "instruction": "以外項積等於內項積 ad=bc 作為核心判準。",
        "check": "交叉配對正確，沒有把相鄰項乘積誤當比例性質。"
      },
      {
        "step": 3,
        "instruction": "推導新比例時比較它的交叉乘積是否仍等價於 ad=bc。",
        "check": "每個交換、倒比或合比都有代數依據，不是任意重排。"
      },
      {
        "step": 4,
        "instruction": "含總和、差或乘積時設共同倍數 k，代入附加條件求解。",
        "check": "k 的正負或非零限制符合題目，解值保留精確形式。"
      },
      {
        "step": 5,
        "instruction": "逐一檢查選項；非必然式用符合原條件的反例排除。",
        "check": "四選恰有一真，反例同時滿足原比例且確實違反待判式。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "u06-s004-example-a",
        "prompt": "若 a:b=5:9，求 (a+b):b。",
        "solutionSteps": [
          "設 a=5k、b=9k。",
          "a+b=14k，所以新比為 14k:9k=14:9。"
        ],
        "answer": "14:9。",
        "why": "共同倍數表示法把兩部分轉成份數，總份數十四仍與 b 的九份使用相同 k。約去非零 k 後得到十四比九。"
      },
      {
        "exampleId": "u06-s004-example-b",
        "prompt": "由 a:b=c:d 推導倒比式需要何條件？",
        "solutionSteps": [
          "寫成 a/b=c/d。",
          "若四項非零，兩邊取倒數得 b/a=d/c。"
        ],
        "answer": "a、b、c、d 均須非零。",
        "why": "原比例只保證後項 b、d 非零，但倒比後 a、c 會成為後項，也必須非零。條件完整時取倒數才是合法等價變形。"
      },
      {
        "exampleId": "u06-s004-example-c",
        "prompt": "正數 x:y=4:7 且 x+y=33，求 x、y。",
        "solutionSteps": [
          "設 x=4k、y=7k，得 11k=33。",
          "k=3，所以 x=12、y=21。"
        ],
        "answer": "x=12、y=21。",
        "why": "總量三十三對應四加七共十一份，每份三。共同倍數法同時保留原比，十二加二十一也正好回到三十三。"
      },
      {
        "exampleId": "u06-s004-example-d",
        "prompt": "長:寬=16:9，寬十八公分時求長。",
        "solutionSteps": [
          "寬九份等於十八，每份二公分。",
          "長十六份為 16×2=32 公分。"
        ],
        "answer": "長三十二公分。",
        "why": "寬由九份放大到十八公分的倍數是二，長也必須使用相同倍數。三十二比十八約分後仍為十六比九。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把相鄰項乘積當成交叉乘積。",
        "why": "未辨認外項與內項。",
        "correction": "寫成分式後沿對角線相乘。"
      },
      {
        "mistake": "未檢查倒比的非零條件。",
        "why": "原前項在倒比後成為後項。",
        "correction": "倒比前確認四項皆非零。"
      },
      {
        "mistake": "認為任意配對都形成等值比例。",
        "why": "沒有比較新舊交叉乘積。",
        "correction": "每個變形都化回 ad=bc 檢查。"
      },
      {
        "mistake": "由比例相等推出兩組和相等。",
        "why": "相同比值不限制各組尺度。",
        "correction": "用不同倍數的等值比建立反例。"
      },
      {
        "mistake": "把總量直接當共同倍數 k。",
        "why": "k 只代表每份大小。",
        "correction": "總量除以份數和後才得到 k。"
      },
      {
        "mistake": "選項中保留兩個等價真式。",
        "why": "沒有逐項做交叉乘積審查。",
        "correction": "出題與審查時驗證四選恰有一真。"
      }
    ],
    "selfCheck": [
      "原比例與新比例的後項都非零嗎？",
      "外項與內項辨認正確嗎？",
      "運算是否同步作用在等式兩邊？",
      "可以用共同比值 k 證明嗎？",
      "隨機代入等值比能通過嗎？"
    ],
    "summary": [
      "比例式的基本性質是 ad=bc，但分母非零不可省略。",
      "同時倒比與和比可由等式同操作證明。",
      "任何變形都要保持對應順序與定義域。",
      "可用共同比值 k 或具體反例檢查命題。"
    ],
    "connections": {
      "previous": "由部分量模型理解 a=mk、b=nk。",
      "next": [
        "正比可視為 y:x 固定。",
        "反比則改為 xy 固定。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u06-s004-v001",
        "u06-s004-v002",
        "u06-s004-v003",
        "u06-s004-v004",
        "u06-s004-v005",
        "u06-s004-v006",
        "u06-s004-v007",
        "u06-s004-v008",
        "u06-s004-v009",
        "u06-s004-v010",
        "u06-s004-v011",
        "u06-s004-v012"
      ],
      "constructedResponseIds": [
        "u06-s004-cr001",
        "u06-s004-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "contentAuthorityConfirmed": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐式以共同比值 k 與具體數 2:5=8:20 雙重驗證倒比、和比與差比；另檢查 0 作原分子時倒比失效，避免把交叉乘積條件誤當成無條件定義。",
      "reviewVersion": "human-lecture-review-u06-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "b9d49b7873419a599c0820c982eeca58627bb30383211ccb49131aa183f5d2ba"
  },
  "mcQuestions": [
    {
      "questionId": "u06-s004-v001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "若 3:5=12:20，外項乘積是多少？",
      "text": "若 3:5=12:20，外項乘積是多少？",
      "givenConditions": "後項5、20非0。",
      "target": "辨認外項乘積",
      "choices": [
        "36",
        "100",
        "240",
        "60"
      ],
      "answerIndex": 3,
      "independentSolution": "內項5×12也等於60，交叉驗證。",
      "mainExplanation": "比例式兩端的3、20是外項。",
      "explanation": "比例式 3:5=12:20 的外項是最外側的三與二十，乘積為 3×20=60。內項五與十二的乘積也是六十，符合比例式外項積等於內項積的性質。",
      "steps": [
        "辨認比例式外項為 3 與 20。",
        "計算外項乘積 3×20=60。",
        "以內項 5×12=60 回驗比例成立。"
      ],
      "optionAnalysis": [
        {
          "choice": "36",
          "truth": false,
          "reason": "36是3×12。"
        },
        {
          "choice": "100",
          "truth": false,
          "reason": "100是5×20。"
        },
        {
          "choice": "240",
          "truth": false,
          "reason": "240是12×20。"
        },
        {
          "choice": "60",
          "truth": true,
          "reason": "外項為3與20，乘積3×20=60。"
        }
      ],
      "misconceptionTarget": "把相鄰的三與五當作外項，沒有辨認比例式四項的位置。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 50,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "外項定義唯一。",
      "difficultyReason": "基本名詞與計算。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "249271f0b86f89001401b3da60fd56bde95d50ed750ff62862c3d97b76bd59ab"
    },
    {
      "questionId": "u06-s004-v002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "下列哪一個比例式成立？",
      "text": "下列哪一個比例式成立？",
      "givenConditions": "各後項皆非0。",
      "target": "用乘積性質判比例",
      "choices": [
        "4:6=10:15",
        "2:3=8:15",
        "5:7=15:20",
        "6:9=14:18"
      ],
      "answerIndex": 0,
      "independentSolution": "4/6=2/3，10/15=2/3。",
      "mainExplanation": "用外項積等於內項積逐一檢查。",
      "explanation": "4:6 約分為 2:3，10:15 同除以五也為 2:3，因此兩邊比值相等，比例式 4:6=10:15 成立。也可驗算外項積 4×15 與內項積 6×10 均為六十，兩種方法結論一致。",
      "steps": [
        "分別把 4:6 與 10:15 化成最簡比。",
        "確認兩邊都得到 2:3。",
        "再以 4×15=6×10=60 驗證。"
      ],
      "optionAnalysis": [
        {
          "choice": "4:6=10:15",
          "truth": true,
          "reason": "4×15=60，6×10=60。"
        },
        {
          "choice": "2:3=8:15",
          "truth": false,
          "reason": "2×15=30但3×8=24。"
        },
        {
          "choice": "5:7=15:20",
          "truth": false,
          "reason": "5×20=100但7×15=105。"
        },
        {
          "choice": "6:9=14:18",
          "truth": false,
          "reason": "6×18=108但9×14=126。"
        }
      ],
      "misconceptionTarget": "只看四個數都可約分就判成立，沒有比較兩邊的實際比值。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 75,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "四選項均有定義。",
      "difficultyReason": "需逐項驗證。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "762346c46d7727762ab602ce4dda4ce647fadf6d948ec26de1062ec37c8f8df5"
    },
    {
      "questionId": "u06-s004-v003",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "若 a:b=2:7，則 (a+b):b 等於何者？",
      "text": "若 a:b=2:7，則 (a+b):b 等於何者？",
      "givenConditions": "b非0且份數正。",
      "target": "應用和比性質",
      "choices": [
        "2:9",
        "9:7",
        "7:9",
        "5:7"
      ],
      "answerIndex": 1,
      "independentSolution": "(a+b)/b=a/b+1=2/7+1=9/7。",
      "mainExplanation": "使用份數或兩邊比值加1。",
      "explanation": "由 a:b=2:7，可設 a=2k、b=7k，且 k≠0。則 a+b=9k，所以 (a+b):b=9k:7k=9:7；相同非零倍數 k 可同時約去。這是總份數九對乙七份的關係，與原來共同倍數大小無關，前後項也不會顛倒。",
      "steps": [
        "依原比設 a=2k、b=7k。",
        "計算 a+b=9k。",
        "列出 9k:7k，同除以 k 得 9:7。"
      ],
      "optionAnalysis": [
        {
          "choice": "2:9",
          "truth": false,
          "reason": "2:9是a:(a+b)。"
        },
        {
          "choice": "9:7",
          "truth": true,
          "reason": "令a=2k、b=7k，(a+b):b=9k:7k=9:7。"
        },
        {
          "choice": "7:9",
          "truth": false,
          "reason": "7:9是b:(a+b)。"
        },
        {
          "choice": "5:7",
          "truth": false,
          "reason": "5:7錯把相加當相減。"
        }
      ],
      "misconceptionTarget": "把 a+b 的份數算成九後，卻仍用原前項二作為後項。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 70,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "所求明確為和對b。",
      "difficultyReason": "基礎合法變形。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "da2055a1e14bef1ad045dafbd4b6ac61d75f0d6e2e4fd4789b35520197cf37ac"
    },
    {
      "questionId": "u06-s004-v004",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "已知 a:b=c:d，且 a、b、c、d 均非 0。下列哪一式必成立？",
      "text": "已知 a:b=c:d，且 a、b、c、d 均非 0。下列哪一式必成立？",
      "givenConditions": "四項均非0，倒比有定義。",
      "target": "判斷必然成立的比例變形",
      "choices": [
        "a:c=d:b",
        "a+b=c+d",
        "b:a=d:c",
        "a-b=c-d"
      ],
      "answerIndex": 2,
      "independentSolution": "由a/b=c/d且四項非零，兩邊同取倒數得b/a=d/c，因此b:a=d:c必成立。",
      "mainExplanation": "由a/b=c/d取倒數得b/a=d/c。",
      "explanation": "a:b=c:d 等同 a/b=c/d。四項皆非零時，兩邊可同時取倒數，得到 b/a=d/c，也就是 b:a=d:c。其餘選項不是比例式的一般合法變形，可用反例排除，四選只有倒比式必然成立。",
      "steps": [
        "把 a:b=c:d 寫成 a/b=c/d。",
        "利用四項非零，對等式兩邊同取倒數。",
        "得到 b/a=d/c，即 b:a=d:c，並以反例檢查其餘式。"
      ],
      "optionAnalysis": [
        {
          "choice": "a:c=d:b",
          "truth": false,
          "reason": "此式要求 ab=cd，原比例只保證 ad=bc，兩者不等價。"
        },
        {
          "choice": "a+b=c+d",
          "truth": false,
          "reason": "相同比值不表示兩組項的總和相等。"
        },
        {
          "choice": "b:a=d:c",
          "truth": true,
          "reason": "四項非零時，原比例兩邊同時取倒數仍相等。"
        },
        {
          "choice": "a-b=c-d",
          "truth": false,
          "reason": "相同比值不表示兩組項的差相等。"
        }
      ],
      "misconceptionTarget": "把交叉乘積條件誤擴張成任意重新配對都能形成等值比例。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "第一選項已改為 a:c=d:b，它要求 ab=cd，並非由 ad=bc 必然推出；四個選項現在恰有倒比式一項必成立。",
      "difficultyReason": "需要理解條件而非只算數字。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a085de3c2c095e378acb493f63d2435ffa082b7f3776668b45e56a9961bad933"
    },
    {
      "questionId": "u06-s004-v005",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "若 6:x=9:15，利用比例式性質求 x。",
      "text": "若 6:x=9:15，利用比例式性質求 x。",
      "givenConditions": "x≠0。",
      "target": "用基本性質求未知數",
      "choices": [
        "10",
        "4",
        "12",
        "22.5"
      ],
      "answerIndex": 0,
      "independentSolution": "6:10=3:5，9:15=3:5。",
      "mainExplanation": "由外項積等於內項積求未知數。",
      "explanation": "由 6:x=9:15 交叉相乘得 6×15=9x，也就是 90=9x。兩邊同除以九，求得 x=10；代回 6:10 與 9:15 都可化為 3:5，且未知數後項不為零，外項積與內項積也同為九十。",
      "steps": [
        "依比例式性質列出外項積等於內項積。",
        "計算 6×15=90，得到 9x=90。",
        "求得 x=10，代回約分驗算。"
      ],
      "optionAnalysis": [
        {
          "choice": "10",
          "truth": true,
          "reason": "外項積6×15=90，內項積9x，所以x=10。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "4把15-9當倍率。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "12把6+6。"
        },
        {
          "choice": "22.5",
          "truth": false,
          "reason": "22.5把90÷4。"
        }
      ],
      "misconceptionTarget": "把六乘九、未知數乘十五配成同側相鄰項，而非交叉乘積。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 70,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "正解不違反後項非0。",
      "difficultyReason": "標準交叉乘積。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "790eb08bbbc2486adb59c2387606bb2c6eec8a2f48cc9dbf697ff9df74092c8f"
    },
    {
      "questionId": "u06-s004-v006",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "若 a:b=3:8，則 (b-a):b 為何？",
      "text": "若 a:b=3:8，則 (b-a):b 為何？",
      "givenConditions": "b非0且b>a。",
      "target": "應用差比性質",
      "choices": [
        "3:5",
        "5:8",
        "5:3",
        "11:8"
      ],
      "answerIndex": 1,
      "independentSolution": "(b-a)/b=1-a/b=1-3/8=5/8。",
      "mainExplanation": "差比使用同一份量，8k-3k=5k。",
      "explanation": "設 a=3k、b=8k，則 b-a=8k-3k=5k。因此 (b-a):b=5k:8k=5:8；比的兩項同含非零倍數 k，可同時約去，差量五份對原後項八份，沒有改變前後對應，最簡結果必為五比八。",
      "steps": [
        "依 a:b=3:8 設 a=3k、b=8k。",
        "計算 b-a=5k。",
        "列 5k:8k 並同除以 k，得到 5:8。"
      ],
      "optionAnalysis": [
        {
          "choice": "3:5",
          "truth": false,
          "reason": "3:5是a:(b-a)。"
        },
        {
          "choice": "5:8",
          "truth": true,
          "reason": "令a=3k、b=8k，b-a=5k。"
        },
        {
          "choice": "5:3",
          "truth": false,
          "reason": "5:3是(b-a):a。"
        },
        {
          "choice": "11:8",
          "truth": false,
          "reason": "11:8是和比。"
        }
      ],
      "misconceptionTarget": "把 b-a 的份數算成八加三，或將後項誤用 a 的三份。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 85,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "因3<8，差為正。",
      "difficultyReason": "需正確判讀代數表達。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0fe21c004fbb24d4b3fd5c1ae242e4798994c4f9ffe92589432fb5f5f68a81a3"
    },
    {
      "questionId": "u06-s004-v007",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "若 a:b=c:d 且 b、d≠0，以下推論何者不一定成立？",
      "text": "若 a:b=c:d 且 b、d≠0，以下推論何者不一定成立？",
      "givenConditions": "各選項附帶必要非0條件。",
      "target": "辨認不成立的推論",
      "choices": [
        "ad=bc",
        "(a+b):b=(c+d):d",
        "a+c=b+d",
        "a:c=b:d（當c、d非0）"
      ],
      "answerIndex": 2,
      "independentSolution": "反例足以證明『不一定』。",
      "mainExplanation": "用反例2:3=4:6，但2+4=6、3+6=9，不相等。",
      "explanation": "比例相等只保證交叉乘積 ad=bc，並能做合法倒比、交換內外項等變形，不能推出 a+c=b+d。取 2:3=4:6，便有 a+c=6、b+d=9，不相等，所以此反例足以否定必然性。",
      "steps": [
        "將原比例轉成核心條件 ad=bc。",
        "檢查 a+c=b+d 並非此條件的等價變形。",
        "用 2:3=4:6 算得六不等於九，構成反例。"
      ],
      "optionAnalysis": [
        {
          "choice": "ad=bc",
          "truth": false,
          "reason": "ad=bc是基本性質。"
        },
        {
          "choice": "(a+b):b=(c+d):d",
          "truth": false,
          "reason": "兩邊比值同加1，必成立。"
        },
        {
          "choice": "a+c=b+d",
          "truth": true,
          "reason": "比例相同不保證兩組總和相等。"
        },
        {
          "choice": "a:c=b:d（當c、d非0）",
          "truth": false,
          "reason": "由ad=bc可重排為a/c=b/d，需c、d非0。"
        }
      ],
      "misconceptionTarget": "把比例式兩側相等誤認為四個項可以任意相加仍相等。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 120,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "題目問不一定成立，只有一個反例型選項。",
      "difficultyReason": "需要反例與條件審查。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5af89f0af11345bf5e623591cabcec3af0a67cfdb7bc8d707f416a680d06d7ad"
    },
    {
      "questionId": "u06-s004-v008",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "已知 a:b=4:9，且 a+b=52。下列哪個等式可直接用來求 b？",
      "text": "已知 a:b=4:9，且 a+b=52。下列哪個等式可直接用來求 b？",
      "givenConditions": "a、b為正且b非0。",
      "target": "結合比例性質與總和",
      "choices": [
        "4(52-b)=9b",
        "b=52×4/9",
        "4+b=9+52",
        "4b=9(52-b)"
      ],
      "answerIndex": 3,
      "independentSolution": "解得468-9b=4b，b=36，a=16，比例4:9。",
      "mainExplanation": "把總和條件轉成a=52-b，再用交叉乘積。",
      "explanation": "由 a+b=52 可把 a 表為 52-b。代入 a:b=4:9，得到 (52-b):b=4:9；交叉相乘為 9(52-b)=4b，改寫即 4b=9(52-b)。這個等式同時使用總和與原比例，可直接解出後項 b，且保留原本前後項順序。",
      "steps": [
        "由總和式寫出 a=52-b。",
        "代入比例得到 (52-b):b=4:9。",
        "交叉相乘列出 4b=9(52-b)。"
      ],
      "optionAnalysis": [
        {
          "choice": "4(52-b)=9b",
          "truth": false,
          "reason": "此式把4與9位置對調。"
        },
        {
          "choice": "b=52×4/9",
          "truth": false,
          "reason": "52不是a，不能直接乘4/9。"
        },
        {
          "choice": "4+b=9+52",
          "truth": false,
          "reason": "比例不給和的加法等式。"
        },
        {
          "choice": "4b=9(52-b)",
          "truth": true,
          "reason": "a=52-b，代入a:b=4:9得(52-b)/b=4/9，故9(52-b)=4b。"
        }
      ],
      "misconceptionTarget": "把五十二直接當成比例前項，沒有先扣除 b 求出 a。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 130,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "正確式與4b=9(52-b)只差等式左右交換。",
      "difficultyReason": "高階建模式選擇。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9699ea3e108337c64c7d726d8dc6011e703c2068e398e76fcd9f63245c564841"
    },
    {
      "questionId": "u06-s004-v009",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "若正數 x:y=5:12，且 xy=540，則 x+y 為何？",
      "text": "若正數 x:y=5:12，且 xy=540，則 x+y 為何？",
      "givenConditions": "x、y明示為正數。",
      "target": "比例與乘積的複合推理",
      "choices": [
        "17",
        "51",
        "34",
        "68"
      ],
      "answerIndex": 1,
      "independentSolution": "15×36=540，且15:36=5:12，和51。",
      "mainExplanation": "比例給共同倍數，乘積再決定k；正值條件選k=3。",
      "explanation": "因 x、y 為正數且 x:y=5:12，可設 x=5k、y=12k，k>0。乘積 60k²=540，所以 k²=9、k=3。故 x=15、y=36，x+y=51。正數條件排除了共同倍數負三，十五乘三十六也回到五百四十，故和唯一為五十一。",
      "steps": [
        "依正數比例設 x=5k、y=12k，且 k>0。",
        "代入 xy=540，得到 60k²=540。",
        "取正根 k=3，求 x+y=15+36=51。"
      ],
      "optionAnalysis": [
        {
          "choice": "17",
          "truth": false,
          "reason": "17是5+12未乘k。"
        },
        {
          "choice": "51",
          "truth": true,
          "reason": "令x=5k、y=12k，60k²=540，k²=9；正數故k=3，和51。"
        },
        {
          "choice": "34",
          "truth": false,
          "reason": "34是k=2。"
        },
        {
          "choice": "68",
          "truth": false,
          "reason": "68是k=4。"
        }
      ],
      "misconceptionTarget": "由 k²=9 同時保留負三，忽略題目已指定 x、y 為正數。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 140,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "正數條件排除k=-3。",
      "difficultyReason": "需要兩條件決定倍數。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a3145f4b8091d4037206f6b0714614b12cb0b590bcc3c35558f077054110117d"
    },
    {
      "questionId": "u06-s004-v010",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "某設計將長:寬固定為 16:9。若寬為 27 公分，長為多少？",
      "text": "某設計將長:寬固定為 16:9。若寬為 27 公分，長為多少？",
      "givenConditions": "長寬比例固定。",
      "target": "在螢幕比例情境使用性質",
      "choices": [
        "36公分",
        "43公分",
        "48公分",
        "54公分"
      ],
      "answerIndex": 2,
      "independentSolution": "48:27同除3得16:9。",
      "mainExplanation": "寬27是9的3倍，長16也乘3。",
      "explanation": "長:寬=16:9，寬二十七公分是九份的三倍，所以每份三公分，長十六份為 16×3=48 公分。長寬使用相同倍數，才能維持不變形；四十八比二十七仍可約為十六比九。",
      "steps": [
        "以寬 27÷9 求每份三公分。",
        "將長的十六份乘三，得到四十八公分。",
        "用 48:27 同除以三，回驗為 16:9。"
      ],
      "optionAnalysis": [
        {
          "choice": "36公分",
          "truth": false,
          "reason": "36對應12:9。"
        },
        {
          "choice": "43公分",
          "truth": false,
          "reason": "43是錯誤加法。"
        },
        {
          "choice": "48公分",
          "truth": true,
          "reason": "16:9=x:27，9x=432，x=48。"
        },
        {
          "choice": "54公分",
          "truth": false,
          "reason": "54把27乘2。"
        }
      ],
      "misconceptionTarget": "把寬增加十八公分也直接加到長，沒有依比例使用倍數。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 85,
      "unitCheck": "公分對公分。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "情境中長對長、寬對寬。",
      "difficultyReason": "需要維持對應方向。",
      "literacyContextNecessity": "16:9 的設計規格決定比例式排序，情境具有必要性。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "270c857187c9a9334b4f604c210d3b18815b292ea59211a28e6cebcd3ff1a539"
    },
    {
      "questionId": "u06-s004-v011",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "照片原長寬比 3:2。若長邊由 15 公分放大為 24 公分且不變形，短邊應為多少？",
      "text": "照片原長寬比 3:2。若長邊由 15 公分放大為 24 公分且不變形，短邊應為多少？",
      "givenConditions": "照片不裁切且不變形。",
      "target": "用等值比例維持形狀",
      "choices": [
        "10公分",
        "12公分",
        "18公分",
        "16公分"
      ],
      "answerIndex": 3,
      "independentSolution": "24:16=3:2。",
      "mainExplanation": "不變形表示長寬比保持3:2。",
      "explanation": "原長寬比 3:2，長十五公分對應三份，所以原每份五公分、短邊十公分。放大後長二十四公分的每份為 24÷3=8，短邊兩份為 16 公分。",
      "steps": [
        "保持長:寬=3:2 的對應順序。",
        "由新長 24÷3 求每份八公分。",
        "短邊兩份乘八，得到十六公分並核對不變形。"
      ],
      "optionAnalysis": [
        {
          "choice": "10公分",
          "truth": false,
          "reason": "10是未放大。"
        },
        {
          "choice": "12公分",
          "truth": false,
          "reason": "12把24除2。"
        },
        {
          "choice": "18公分",
          "truth": false,
          "reason": "18把短邊當3/4長。"
        },
        {
          "choice": "16公分",
          "truth": true,
          "reason": "15:10=3:2；放大倍率24/15=1.6，短邊10×1.6=16。"
        }
      ],
      "misconceptionTarget": "把長邊增加九公分也加到短邊，誤用相同差而非相同倍數。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 95,
      "unitCheck": "公分。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "不變形是比例保持的必要條件。",
      "difficultyReason": "生活中的相似縮放。",
      "literacyContextNecessity": "若刪除『不變形』便無法保證短邊按相同比例變化。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2d226b2b3b0e3f4b01ef4ea2e262490a1d4f7e2a7249ec886640e047e822da56"
    },
    {
      "questionId": "u06-s004-v012",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "某調飲標示濃縮液:水=2:7。先倒入 350 毫升水，應加入多少濃縮液？",
      "text": "某調飲標示濃縮液:水=2:7。先倒入 350 毫升水，應加入多少濃縮液？",
      "givenConditions": "350毫升是水，不是總飲料量。",
      "target": "用比例式依標示配方",
      "choices": [
        "100毫升",
        "50毫升",
        "140毫升",
        "175毫升"
      ],
      "answerIndex": 0,
      "independentSolution": "100:350同除50得2:7。",
      "mainExplanation": "水350對應7份，每份50，濃縮液2份100。",
      "explanation": "濃縮液:水=2:7，三百五十毫升水對應七份，所以每份為 350÷7=50 毫升。濃縮液占兩份，應加入 2×50=100 毫升；一百比三百五十可回驗為二比七。",
      "steps": [
        "由水七份等於三百五十，求每份五十毫升。",
        "濃縮液兩份乘五十，得到一百毫升。",
        "用 100:350 同除以五十，回驗為 2:7。"
      ],
      "optionAnalysis": [
        {
          "choice": "100毫升",
          "truth": true,
          "reason": "2:7=x:350，7x=700，x=100。"
        },
        {
          "choice": "50毫升",
          "truth": false,
          "reason": "50把350÷7但未乘2。"
        },
        {
          "choice": "140毫升",
          "truth": false,
          "reason": "140使用2/5。"
        },
        {
          "choice": "175毫升",
          "truth": false,
          "reason": "175把水減半。"
        }
      ],
      "misconceptionTarget": "把三百五十當成總量分成九份，忽略它只代表水的七份。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-part-total"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-part-total'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "毫升。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "題幹明確指出水的量。",
      "difficultyReason": "配方語意判讀。",
      "literacyContextNecessity": "標示中的前後項角色決定350對應7份。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "eac89142f98b2516a35bd2b7fb8257b9bd5cd9ac5da96fb2e791809de2b413c8"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u06-s004-cr001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "已知 a:b=3:7，證明 (a+b):b=10:7。",
      "target": "證明和比性質",
      "requiredWork": [
        "以共同倍數或分數等式表示。",
        "完成合法變形。",
        "指出b不可為0。"
      ],
      "fullCreditSolution": [
        "由 a:b=3:7，可設 a=3k、b=7k，其中 k≠0，才能使比的後項有定義。",
        "則 a+b=10k，所以 (a+b):b=10k:7k；前後項同除以非零 k，得到 10:7。",
        "另一證法是由 a/b=3/7，兩邊同加一，得到 (a+b)/b=10/7，結論相同。"
      ],
      "alternativeSolutions": [
        "直接用和比性質，但須說明其來自兩邊同加1。"
      ],
      "reasoningSteps": [
        "用共同非零倍數 k 表示 a、b。",
        "計算 a+b 並列出與 b 的新比。",
        "約去 k 得 10:7，再用分式加一法交叉驗證。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "用k或分數等式完整證明10:7並處理b≠0。"
        },
        {
          "score": 2,
          "criteria": "推導正確但未明說非零條件。"
        },
        {
          "score": 1,
          "criteria": "只代入一組具體數驗證，未證明一般情形。"
        },
        {
          "score": 0,
          "criteria": "把a+b寫成3+7的實際量而無共同倍數概念，或結論錯。"
        }
      ],
      "partialCreditRules": [
        "具體例子只能支持理解，不能作一般證明。",
        "使用k時不要求討論k的符號，只需比有定義。"
      ],
      "followThroughPolicy": "若設a=3k、b=7k正確但把10k:7k約錯，可給1分。",
      "unitNotationRules": "符號a、b需保持一致；比號或分數表示均可。",
      "answerOnlyPolicy": "只寫10:7最多1分。",
      "commonErrors": [
        "把 a+b 的份數算成十後，仍把後項錯寫成三份。",
        "約去 k 時未說明 k 非零，忽略比例後項定義。",
        "分式兩邊加一時只加分子，沒有寫成同分母形式。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "(a+b):b=10:7。",
        "ambiguity": "命題條件足以推出，無需知道a、b實值。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "21aff55c74f6c7b0e1ccace9fd4dbbdd0a523d188693add18148b056e8c75814"
    },
    {
      "questionId": "u06-s004-cr002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-property",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "判斷命題：若 a:b=c:d，則 a+c=b+d。若不一定成立，給一個反例並說明。",
      "target": "以反例審查比例推論",
      "requiredWork": [
        "判斷命題真假。",
        "給出有定義的比例反例。",
        "核對比例成立但結論失敗。"
      ],
      "fullCreditSolution": [
        "命題不一定成立，比例相等只保證交叉乘積相等，並不保證兩組項的和相等。",
        "取 a=2、b=3、c=4、d=6，則 2:3=4:6，原比例式確實成立且後項皆非零。",
        "但 a+c=2+4=6，而 b+d=3+6=9，六不等於九，所以此例足以否定命題。"
      ],
      "alternativeSolutions": [
        "可選任何兩個等值但倍率不同的比，例如1:2=3:6。"
      ],
      "reasoningSteps": [
        "先辨認待判命題不是比例式的等價變形。",
        "選擇兩個等值且後項非零的簡單整數比。",
        "分別計算兩側和，得到不等結果以完成反例。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "明確判假，給有效反例並同時驗證比例與和不等。"
        },
        {
          "score": 2,
          "criteria": "反例有效但只驗證其中一項或說明略簡。"
        },
        {
          "score": 1,
          "criteria": "知道不一定成立，但反例數值有小錯或未完整核對。"
        },
        {
          "score": 0,
          "criteria": "判為必成立，或反例本身比例不成立。"
        }
      ],
      "partialCreditRules": [
        "反例後項不得為0。",
        "不同有效反例同等給分。"
      ],
      "followThroughPolicy": "若反例比例因單一算術筆誤未成立，但論述方法清楚，最多1分；若自行修正則依最終版本評分。",
      "unitNotationRules": "使用比號或分數皆可，需清楚指派a、b、c、d。",
      "answerOnlyPolicy": "只寫『不一定』最多1分。",
      "commonErrors": [
        "只說不成立卻沒有提供同時滿足原比例的具體反例。",
        "選的四個數本身不構成等值比例，無法反駁命題。",
        "驗證反例時只算 a+c，沒有比較 b+d 的數值。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "命題為假；例2:3=4:6但6≠9。",
        "ambiguity": "反例充分且在比例式定義域內。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "fd3b0928f2274015ddb1bc836db91cb6a37e77d814366cd487127aa8410d6b8c"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u06-s004-v001-semantic-review-r1",
      "questionId": "u06-s004-v001",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "249271f0b86f89001401b3da60fd56bde95d50ed750ff62862c3d97b76bd59ab",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "內項5×12也等於60，交叉驗證。",
      "derivedAnswer": "60",
      "storedAnswer": "60",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "36是3×12。",
        "100是5×20。",
        "240是12×20。",
        "外項為3與20，乘積3×20=60。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「辨認外項乘積」，已明示必要條件：後項5、20非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：外項定義唯一。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "基本名詞與計算。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：內項5×12也等於60，交叉驗證。 正確選項為「60」。逐項檢查後，唯一為真的理由是「外項為3與20，乘積3×20=60。」；其餘三項分別因「36是3×12。」、「100是5×20。」、「240是12×20。」而排除。邊界與語意再檢查：外項定義唯一。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v002-semantic-review-r1",
      "questionId": "u06-s004-v002",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "762346c46d7727762ab602ce4dda4ce647fadf6d948ec26de1062ec37c8f8df5",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "4/6=2/3，10/15=2/3。",
      "derivedAnswer": "4:6=10:15",
      "storedAnswer": "4:6=10:15",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "4×15=60，6×10=60。",
        "2×15=30但3×8=24。",
        "5×20=100但7×15=105。",
        "6×18=108但9×14=126。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「用乘積性質判比例」，已明示必要條件：各後項皆非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：四選項均有定義。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "需逐項驗證。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：4/6=2/3，10/15=2/3。 正確選項為「4:6=10:15」。逐項檢查後，唯一為真的理由是「4×15=60，6×10=60。」；其餘三項分別因「2×15=30但3×8=24。」、「5×20=100但7×15=105。」、「6×18=108但9×14=126。」而排除。邊界與語意再檢查：四選項均有定義。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v003-semantic-review-r1",
      "questionId": "u06-s004-v003",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "da2055a1e14bef1ad045dafbd4b6ac61d75f0d6e2e4fd4789b35520197cf37ac",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(a+b)/b=a/b+1=2/7+1=9/7。",
      "derivedAnswer": "9:7",
      "storedAnswer": "9:7",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "2:9是a:(a+b)。",
        "令a=2k、b=7k，(a+b):b=9k:7k=9:7。",
        "7:9是b:(a+b)。",
        "5:7錯把相加當相減。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「應用和比性質」，已明示必要條件：b非0且份數正。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：所求明確為和對b。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "基礎合法變形。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：(a+b)/b=a/b+1=2/7+1=9/7。 正確選項為「9:7」。逐項檢查後，唯一為真的理由是「令a=2k、b=7k，(a+b):b=9k:7k=9:7。」；其餘三項分別因「2:9是a:(a+b)。」、「7:9是b:(a+b)。」、「5:7錯把相加當相減。」而排除。邊界與語意再檢查：所求明確為和對b。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v004-semantic-review-r1",
      "questionId": "u06-s004-v004",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "a085de3c2c095e378acb493f63d2435ffa082b7f3776668b45e56a9961bad933",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "由a/b=c/d且四項非零，兩邊同取倒數得b/a=d/c，因此b:a=d:c必成立。",
      "derivedAnswer": "b:a=d:c",
      "storedAnswer": "b:a=d:c",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "a:c=d:b 等價於 ab=cd，但原比例只保證 ad=bc，因此不是必然式。",
        "相同比值不表示兩組項的總和相等。",
        "四項非零，可將 a/b=c/d 兩邊同取倒數，得到 b/a=d/c。",
        "相同比值不表示兩組項的差相等。"
      ],
      "ambiguityChecks": {
        "wording": "題目要求判斷必然成立的比例變形，並已明示四項非零，倒比有定義。",
        "units": "本題為無單位代數比例，四個選項均可在相同代數條件下比較。",
        "boundary": "第一選項要求 ab=cd，不再與原式 ad=bc 等價；只有倒比式由原條件必然推出。",
        "rounding": "所有判斷均為精確代數等式，不涉及近似或四捨五入。"
      },
      "difficultyReason": "需要理解條件而非只算數字。",
      "literacyNecessity": null,
      "reviewerNote": "獨立證明：由a/b=c/d且四項非零，兩邊同取倒數得b/a=d/c，因此b:a=d:c必成立。其餘三式都不是原比例的一般等價變形；以2:3=4:6可分別排除和、差與錯誤重排，故倒比式是唯一必然成立的選項。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v005-semantic-review-r1",
      "questionId": "u06-s004-v005",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "790eb08bbbc2486adb59c2387606bb2c6eec8a2f48cc9dbf697ff9df74092c8f",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "6:10=3:5，9:15=3:5。",
      "derivedAnswer": "10",
      "storedAnswer": "10",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "外項積6×15=90，內項積9x，所以x=10。",
        "4把15-9當倍率。",
        "12把6+6。",
        "22.5把90÷4。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「用基本性質求未知數」，已明示必要條件：x≠0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：正解不違反後項非0。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "標準交叉乘積。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：6:10=3:5，9:15=3:5。 正確選項為「10」。逐項檢查後，唯一為真的理由是「外項積6×15=90，內項積9x，所以x=10。」；其餘三項分別因「4把15-9當倍率。」、「12把6+6。」、「22.5把90÷4。」而排除。邊界與語意再檢查：正解不違反後項非0。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v006-semantic-review-r1",
      "questionId": "u06-s004-v006",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "0fe21c004fbb24d4b3fd5c1ae242e4798994c4f9ffe92589432fb5f5f68a81a3",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(b-a)/b=1-a/b=1-3/8=5/8。",
      "derivedAnswer": "5:8",
      "storedAnswer": "5:8",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "3:5是a:(b-a)。",
        "令a=3k、b=8k，b-a=5k。",
        "5:3是(b-a):a。",
        "11:8是和比。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「應用差比性質」，已明示必要條件：b非0且b>a。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：因3<8，差為正。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "需正確判讀代數表達。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：(b-a)/b=1-a/b=1-3/8=5/8。 正確選項為「5:8」。逐項檢查後，唯一為真的理由是「令a=3k、b=8k，b-a=5k。」；其餘三項分別因「3:5是a:(b-a)。」、「5:3是(b-a):a。」、「11:8是和比。」而排除。邊界與語意再檢查：因3<8，差為正。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v007-semantic-review-r1",
      "questionId": "u06-s004-v007",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "5af89f0af11345bf5e623591cabcec3af0a67cfdb7bc8d707f416a680d06d7ad",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "反例足以證明『不一定』。",
      "derivedAnswer": "a+c=b+d",
      "storedAnswer": "a+c=b+d",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "ad=bc是基本性質。",
        "兩邊比值同加1，必成立。",
        "比例相同不保證兩組總和相等。",
        "由ad=bc可重排為a/c=b/d，需c、d非0。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「辨認不成立的推論」，已明示必要條件：各選項附帶必要非0條件。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：題目問不一定成立，只有一個反例型選項。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "需要反例與條件審查。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：反例足以證明『不一定』。 正確選項為「a+c=b+d」。逐項檢查後，唯一為真的理由是「比例相同不保證兩組總和相等。」；其餘三項分別因「ad=bc是基本性質。」、「兩邊比值同加1，必成立。」、「由ad=bc可重排為a/c=b/d，需c、d非0。」而排除。邊界與語意再檢查：題目問不一定成立，只有一個反例型選項。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v008-semantic-review-r1",
      "questionId": "u06-s004-v008",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "9699ea3e108337c64c7d726d8dc6011e703c2068e398e76fcd9f63245c564841",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "解得468-9b=4b，b=36，a=16，比例4:9。",
      "derivedAnswer": "4b=9(52-b)",
      "storedAnswer": "4b=9(52-b)",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "此式把4與9位置對調。",
        "52不是a，不能直接乘4/9。",
        "比例不給和的加法等式。",
        "a=52-b，代入a:b=4:9得(52-b)/b=4/9，故9(52-b)=4b。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「結合比例性質與總和」，已明示必要條件：a、b為正且b非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：正確式與4b=9(52-b)只差等式左右交換。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "高階建模式選擇。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：解得468-9b=4b，b=36，a=16，比例4:9。 正確選項為「4b=9(52-b)」。逐項檢查後，唯一為真的理由是「a=52-b，代入a:b=4:9得(52-b)/b=4/9，故9(52-b)=4b。」；其餘三項分別因「此式把4與9位置對調。」、「52不是a，不能直接乘4/9。」、「比例不給和的加法等式。」而排除。邊界與語意再檢查：正確式與4b=9(52-b)只差等式左右交換。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v009-semantic-review-r1",
      "questionId": "u06-s004-v009",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "a3145f4b8091d4037206f6b0714614b12cb0b590bcc3c35558f077054110117d",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "15×36=540，且15:36=5:12，和51。",
      "derivedAnswer": "51",
      "storedAnswer": "51",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "17是5+12未乘k。",
        "令x=5k、y=12k，60k²=540，k²=9；正數故k=3，和51。",
        "34是k=2。",
        "68是k=4。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「比例與乘積的複合推理」，已明示必要條件：x、y明示為正數。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：正數條件排除k=-3。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "需要兩條件決定倍數。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：15×36=540，且15:36=5:12，和51。 正確選項為「51」。逐項檢查後，唯一為真的理由是「令x=5k、y=12k，60k²=540，k²=9；正數故k=3，和51。」；其餘三項分別因「17是5+12未乘k。」、「34是k=2。」、「68是k=4。」而排除。邊界與語意再檢查：正數條件排除k=-3。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v010-semantic-review-r1",
      "questionId": "u06-s004-v010",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "270c857187c9a9334b4f604c210d3b18815b292ea59211a28e6cebcd3ff1a539",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "48:27同除3得16:9。",
      "derivedAnswer": "48公分",
      "storedAnswer": "48公分",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "36對應12:9。",
        "43是錯誤加法。",
        "16:9=x:27，9x=432，x=48。",
        "54把27乘2。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「在螢幕比例情境使用性質」，已明示必要條件：長寬比例固定。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公分對公分。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：情境中長對長、寬對寬。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "需要維持對應方向。",
      "literacyNecessity": "16:9 的設計規格決定比例式排序，情境具有必要性。",
      "reviewerNote": "獨立重算：48:27同除3得16:9。 正確選項為「48公分」。逐項檢查後，唯一為真的理由是「16:9=x:27，9x=432，x=48。」；其餘三項分別因「36對應12:9。」、「43是錯誤加法。」、「54把27乘2。」而排除。邊界與語意再檢查：情境中長對長、寬對寬。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v011-semantic-review-r1",
      "questionId": "u06-s004-v011",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "2d226b2b3b0e3f4b01ef4ea2e262490a1d4f7e2a7249ec886640e047e822da56",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "24:16=3:2。",
      "derivedAnswer": "16公分",
      "storedAnswer": "16公分",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "10是未放大。",
        "12把24除2。",
        "18把短邊當3/4長。",
        "15:10=3:2；放大倍率24/15=1.6，短邊10×1.6=16。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「用等值比例維持形狀」，已明示必要條件：照片不裁切且不變形。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公分。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：不變形是比例保持的必要條件。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "生活中的相似縮放。",
      "literacyNecessity": "若刪除『不變形』便無法保證短邊按相同比例變化。",
      "reviewerNote": "獨立重算：24:16=3:2。 正確選項為「16公分」。逐項檢查後，唯一為真的理由是「15:10=3:2；放大倍率24/15=1.6，短邊10×1.6=16。」；其餘三項分別因「10是未放大。」、「12把24除2。」、「18把短邊當3/4長。」而排除。邊界與語意再檢查：不變形是比例保持的必要條件。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s004-v012-semantic-review-r1",
      "questionId": "u06-s004-v012",
      "unitId": "u06",
      "skillId": "proportion-property",
      "contentSha256": "eac89142f98b2516a35bd2b7fb8257b9bd5cd9ac5da96fb2e791809de2b413c8",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "100:350同除50得2:7。",
      "derivedAnswer": "100毫升",
      "storedAnswer": "100毫升",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "2:7=x:350，7x=700，x=100。",
        "50把350÷7但未乘2。",
        "140使用2/5。",
        "175把水減半。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「用比例式依標示配方」，已明示必要條件：350毫升是水，不是總飲料量。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：毫升。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：題幹明確指出水的量。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "配方語意判讀。",
      "literacyNecessity": "標示中的前後項角色決定350對應7份。",
      "reviewerNote": "獨立重算：100:350同除50得2:7。 正確選項為「100毫升」。逐項檢查後，唯一為真的理由是「2:7=x:350，7x=700，x=100。」；其餘三項分別因「50把350÷7但未乘2。」、「140使用2/5。」、「175把水減半。」而排除。邊界與語意再檢查：題幹明確指出水的量。",
      "reviewerDecision": "pass"
    }
  ],
  "drawingSpecs": []
};
