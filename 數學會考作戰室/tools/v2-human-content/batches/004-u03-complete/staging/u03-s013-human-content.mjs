// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
// CONTENT AUTHORITY: CHATGPT_HUMAN_AUTHORED_R1
// OLD GENERATED CONTENT MUST NOT BE IMPORTED OR MERGED.
export const LECTURE = {
  "lectureId": "u03-s013-lecture-r1",
  "unitId": "u03",
  "topicId": "u03-linear-equation-reasoning",
  "skillId": "linear-equation-reasonableness",
  "title": "解的合理性檢查：代數正確後仍要通過情境限制",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能區分代數解與情境可接受解。",
    "能檢查正負、整數、範圍與單位。",
    "能判斷是否允許小數與四捨五入。",
    "能指出不合理結果應回查模型而非自行修改。"
  ],
  "prerequisites": [
    {
      "skillId": "linear-equation-consecutive-integers",
      "requiredLevel": "能用一個未知數表示連續整數、偶數或奇數並列式。"
    }
  ],
  "glossary": [
    {
      "term": "允許範圍",
      "definition": "未知數依題目情境可以採用的數值範圍。"
    },
    {
      "term": "離散量",
      "definition": "只能以完整個數計算的量，如人數、票數、箱數。"
    },
    {
      "term": "連續量",
      "definition": "可取小數的量，如長度、時間、重量。"
    },
    {
      "term": "情境解",
      "definition": "既滿足方程式又符合題目限制的解。"
    }
  ],
  "notation": [
    {
      "symbol": "x為整數",
      "meaning": "未知數只能是完整個數，不能使用小數。"
    },
    {
      "symbol": "x>0",
      "meaning": "未知數必須為正值。"
    }
  ],
  "conceptNarrative": [
    "解出 x 只是第一層代數檢查，還必須回到題目情境判斷能否接受。",
    "人數、座位與箱數通常需非負整數；長度、重量與時間可依精度取小數。",
    "負長度、負人數或超過容量的結果，即使代數步驟正確也不合理。",
    "不合理時應回查列式、資料或題目是否無可行解，不能直接取絕對值或四捨五入。"
  ],
  "formalDefinitions": [
    {
      "name": "可接受解",
      "statement": "同時滿足方程式與所有情境限制。"
    },
    {
      "name": "不可接受解",
      "statement": "雖可能滿足代數式，但違反正值、整數、範圍、容量或精度條件。"
    }
  ],
  "formulas": [
    {
      "formula": "代數驗算+定義域檢查=情境驗收",
      "conditions": [
        "題幹限制完整列出"
      ],
      "meaning": "合理性檢查流程。"
    }
  ],
  "nonApplicableCases": [
    "題目沒有指定近似時不可自行四捨五入。",
    "百分率可超過100%，但特定容量情境可能不允許。",
    "0是否可接受取決於量的意義。",
    "年齡是否可用小數取決於題目是實際年齡或完整歲數。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先代回原方程式。",
      "check": "代數上是否成立？"
    },
    {
      "step": 2,
      "instruction": "辨認未知數屬於離散量或連續量。",
      "check": "是否必須整數？"
    },
    {
      "step": 3,
      "instruction": "檢查正負與範圍。",
      "check": "是否超過容量或低於0？"
    },
    {
      "step": 4,
      "instruction": "檢查單位與精度。",
      "check": "小數是否可被量測？"
    },
    {
      "step": 5,
      "instruction": "若不合理，回查模型。",
      "check": "是否有人為取整或改符號？"
    }
  ],
  "workedExamples": [
    {
      "prompt": "每組人數解為-2。",
      "answer": "不可接受，應回查列式。",
      "solutionSteps": [
        "先代回原方程式，區分代數驗算與情境判斷。",
        "辨認未知數是每組完整人數，必須為非負整數。",
        "排除 -2，回查題目資料、比較方向與方程式。"
      ],
      "why": "方程式有負二這個代數解，不表示情境中真能有負二人的組別。人數是離散的非負整數，所以此值違反未知數的意義；也不能直接取絕對值改成兩人，因為正兩不一定是原方程式的解。"
    },
    {
      "prompt": "布長解為3.25公尺，尺可量到0.01公尺。",
      "answer": "合理。",
      "solutionSteps": [
        "檢查 3.25 公尺為正值，符合布長條件。",
        "辨認布長是可取小數的連續量。",
        "比較量尺精度 0.01 公尺，3.25 可被精確表示。"
      ],
      "why": "布長不像人數或箱數必須是整數，它是可量測的連續量。三點二五公尺是正值，而且小數點後兩位剛好在量尺可讀到的零點零一公尺精度內，因此既符合量的類型，也沒有不必要的取整問題。"
    },
    {
      "prompt": "巴士數解為4.6台。",
      "answer": "不可直接接受。",
      "solutionSteps": [
        "辨認未知數代表完整巴士台數，必須為非負整數。",
        "檢查 4.6 非整數，不能表示可實際使用的巴士數。",
        "回查題目是否改問最少車數；若未授權進位，不得直接改為 5。"
      ],
      "why": "巴士是必須整台計數的離散量，四點六台無法作為實際安排。如果題目問「最少需幾台」且允許不滿載，才能依容量需求向上取成五台；本例未給這項授權，所以應先判為不可直接接受並回查模型。"
    },
    {
      "prompt": "容納率為110%，且規定不得超載。",
      "answer": "不合理。",
      "solutionSteps": [
        "將 110% 寫成容量的 1.10 倍。",
        "與不得超載的上限 100% 比較。",
        "因 110%>100%，排除該結果並回查人數或容量資料。"
      ],
      "why": "百分率在增加率等其他情境中可能超過百分之百，所以不能只因數值大於一百就一律判錯。然而本題額外明定不得超載，容納率上限就是百分之百；百分之一百一十代表超出容量一成，因此違反情境限制。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "代回正確就直接接受。",
      "why": "忽略情境限制。",
      "correction": "再檢查單位與範圍。"
    },
    {
      "mistake": "負數取絕對值。",
      "why": "改變原方程式解。",
      "correction": "判定模型不合或重查。"
    },
    {
      "mistake": "小數箱數直接向上取整。",
      "why": "題目未授權取整。",
      "correction": "保留不可接受判定。"
    },
    {
      "mistake": "所有小數都否定。",
      "why": "重量與時間可為小數。",
      "correction": "依量型與精度判斷。"
    },
    {
      "mistake": "百分率超過100%一律錯。",
      "why": "增加率可超過100%。",
      "correction": "看情境是否有上限。"
    },
    {
      "mistake": "忽略題目額外條件。",
      "why": "只看方程式。",
      "correction": "將x>0等限制列成檢查表。"
    }
  ],
  "selfCheck": [
    "代數上是否成立？",
    "未知數是離散量還是連續量？",
    "是否需要正值或整數？",
    "是否有容量與範圍限制？",
    "是否有明確近似規則？"
  ],
  "summary": [
    "方程式解不一定是情境答案。",
    "離散量常需整數。",
    "連續量可依精度用小數。",
    "不合理時不可任意修改解。"
  ],
  "connections": {
    "previous": "需要會驗算方程式並理解各類應用量的單位。",
    "next": [
      "方案比較要檢查交點是否位於可用範圍。",
      "綜合素養題會同時檢查模型與情境。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u03-s013-v001",
      "u03-s013-v002",
      "u03-s013-v003",
      "u03-s013-v004",
      "u03-s013-v005",
      "u03-s013-v006",
      "u03-s013-v007",
      "u03-s013-v008",
      "u03-s013-v009",
      "u03-s013-v010",
      "u03-s013-v011",
      "u03-s013-v012"
    ],
    "constructedResponseIds": [
      "u03-s013-cr001",
      "u03-s013-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四例分別檢查負人數、量測精度、小數巴士與容量上限；確認判定依據來自題幹，而非一律接受或拒絕小數。 並移除非必要集合符號，改以國中生可直接理解的整數與正值文字表示。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "d1586ed7c14fdd12d72d3f0024db690035dc179d3d18620ce9c7fd03df20961c",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "legacyContentDisposition": "replace-old-lecture-at-final-integration"
};

export const QUESTIONS = [
  {
    "questionId": "u03-s013-v001",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-reasonableness",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某分組方程式解得每組－4人。此結果如何判斷？",
    "choices": [
      "不合理，人數不能為負",
      "合理，負號表示少4人",
      "合理，方程式有解即可",
      "不合理，應直接改成4人"
    ],
    "answerIndex": 0,
    "explanation": "辨認未知數代表人數；人數不可為負；回頭檢查模型而非改答案。所以答案是「不合理，人數不能為負」。 負號不能當成「少四人」的標記，也不能未經重算就改成正四人。",
    "steps": [
      "辨認未知數代表人數",
      "人數不可為負",
      "回頭檢查模型而非改答案"
    ],
    "optionAnalysis": [
      {
        "choice": "不合理，人數不能為負",
        "truth": true,
        "reason": "人數必須是非負整數；-4不符合情境，所以原列式或資料需重新檢查，不能自行改正號。 因此此選項符合題目。"
      },
      {
        "choice": "合理，負號表示少4人",
        "truth": false,
        "reason": "負號不是「少」的標記。"
      },
      {
        "choice": "合理，方程式有解即可",
        "truth": false,
        "reason": "代數有解不代表情境可接受。"
      },
      {
        "choice": "不合理，應直接改成4人",
        "truth": false,
        "reason": "不能未經重算就把-4改成4。"
      }
    ],
    "commonMistake": "只看代數步驟不看未知數意義。",
    "concept": "情境限制是解的一部分。",
    "tags": [
      "代數",
      "解的合理性檢查",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-consecutive-integers"
    ],
    "authoringIntent": "檢查解是否符合數量範圍。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "27123392088ab8db899f3c7b9c968dc43df283de0dacf362a53a428fc5da2ab7",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s013-v002",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-reasonableness",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "題目問完整學年數，方程式解得 x＝13.5。下列判斷何者正確？",
    "choices": [
      "一定合理，年齡都可有小數",
      "若以已完成整年計，13.5 不符合整數條件",
      "一定應四捨五入成14",
      "直接捨去成13即可"
    ],
    "answerIndex": 1,
    "explanation": "確認題目要求完整整年；13.5非整數；不應任意四捨五入。所以答案是「若以已完成整年計，13.5 不符合整數條件」。 十三點五不能表示已完成的整學年數，所以應回查題意與列式。",
    "steps": [
      "確認題目要求完整整年",
      "13.5非整數",
      "不應任意四捨五入"
    ],
    "optionAnalysis": [
      {
        "choice": "一定合理，年齡都可有小數",
        "truth": false,
        "reason": "忽略題幹的完整年限制。"
      },
      {
        "choice": "若以已完成整年計，13.5 不符合整數條件",
        "truth": true,
        "reason": "題幹若要求完整學年數，答案需為整數；13.5表示模型或資料與題意不相容，不能自行取整。 因此此選項符合題目。"
      },
      {
        "choice": "一定應四捨五入成14",
        "truth": false,
        "reason": "四捨五入會改變方程式。"
      },
      {
        "choice": "直接捨去成13即可",
        "truth": false,
        "reason": "無條件捨去也不是解。"
      }
    ],
    "commonMistake": "看到「年」就一律接受小數，忽略題幹特別要求已完成的整學年數。",
    "concept": "是否能用小數取決於量的定義。",
    "tags": [
      "代數",
      "解的合理性檢查",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-consecutive-integers"
    ],
    "authoringIntent": "辨認整數限制。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0a5ec712c64cfff78523a1b099351d9e87af401e593b4041e36c3c8e622355b4",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s013-v003",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-reasonableness",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "每箱需裝相同且完整的瓶數。方程式解得箱數 x＝7.2。下列處理何者正確？",
    "choices": [
      "直接回答7.2箱",
      "無條件四捨五入成7箱",
      "7.2 不是可接受箱數，應檢查題意或模型",
      "一定改成8箱"
    ],
    "answerIndex": 2,
    "explanation": "未知數代表完整箱數；必須為整數；重新檢查資料或列式。所以答案是「7.2 不是可接受箱數，應檢查題意或模型」。 四捨五入或無條件進位都會改變原方程式的精確解。",
    "steps": [
      "未知數代表完整箱數",
      "必須為整數",
      "重新檢查資料或列式"
    ],
    "optionAnalysis": [
      {
        "choice": "直接回答7.2箱",
        "truth": false,
        "reason": "完整箱不可為0.2箱。"
      },
      {
        "choice": "無條件四捨五入成7箱",
        "truth": false,
        "reason": "7箱不滿足原方程式。"
      },
      {
        "choice": "7.2 不是可接受箱數，應檢查題意或模型",
        "truth": true,
        "reason": "完整箱數必須是整數；7.2不是原方程式在情境中的合法解，不能隨意取整。 因此此選項符合題目。"
      },
      {
        "choice": "一定改成8箱",
        "truth": false,
        "reason": "8箱也不一定滿足原方程式。"
      }
    ],
    "commonMistake": "遇到小數箱數就自動向上取整。",
    "concept": "取整規則必須由題意另行指定。",
    "tags": [
      "代數",
      "解的合理性檢查",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-consecutive-integers"
    ],
    "authoringIntent": "檢查離散數量的整數性。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f82a80572d962a970dc4209f9e1f47d860ca29b7e0f4310ea6c8d69e575dffe4",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s013-v004",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-reasonableness",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長方形邊長方程式解得 x＝－3 公分。此結果代表什麼？",
    "choices": [
      "合理，表示方向相反",
      "合理，取絕對值3公分即可",
      "應把所有負號刪除",
      "不合理，長度不可為負"
    ],
    "answerIndex": 3,
    "explanation": "未知數代表長度；長度需為正；拒絕-3並檢查列式。所以答案是「不合理，長度不可為負」。 幾何邊長沒有「方向相反」的負值詮釋，也不能直接取絕對值。",
    "steps": [
      "未知數代表長度",
      "長度需為正",
      "拒絕-3並檢查列式"
    ],
    "optionAnalysis": [
      {
        "choice": "合理，表示方向相反",
        "truth": false,
        "reason": "邊長沒有方向正負。"
      },
      {
        "choice": "合理，取絕對值3公分即可",
        "truth": false,
        "reason": "取絕對值不再是原方程式的解。"
      },
      {
        "choice": "應把所有負號刪除",
        "truth": false,
        "reason": "刪負號沒有數學依據。"
      },
      {
        "choice": "不合理，長度不可為負",
        "truth": true,
        "reason": "幾何長度必須大於0；-3不屬於可接受範圍，表示模型或條件需重查。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "把負三公分直接取絕對值改成正三公分，但這已不是原方程式的解。",
    "concept": "代數解還要落在情境定義域。",
    "tags": [
      "代數",
      "解的合理性檢查",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-consecutive-integers"
    ],
    "authoringIntent": "檢查幾何量正值條件。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c7ac0500514f059f35307688ac942000a05abd108a51bb0484b35426d53a6659",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s013-v005",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-reasonableness",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某人走了正距離，但模型解得速率 x＝0 公里/時。判斷為何？",
    "choices": [
      "合理，0表示慢速",
      "不合理，正距離在有限時間內速率不能為0",
      "合理，只要時間夠長",
      "應改成1公里/時"
    ],
    "answerIndex": 1,
    "explanation": "核對距離為正；速率0使距離為0；判定模型不合理。所以答案是「不合理，正距離在有限時間內速率不能為0」。 因此不能只用速率非負就接受零，也不能任意改成一公里每小時。",
    "steps": [
      "核對距離為正",
      "速率0使距離為0",
      "判定模型不合理"
    ],
    "optionAnalysis": [
      {
        "choice": "合理，0表示慢速",
        "truth": false,
        "reason": "0不是慢速而是靜止。"
      },
      {
        "choice": "不合理，正距離在有限時間內速率不能為0",
        "truth": true,
        "reason": "若距離為正且時間有限，速率0無法完成路程，因此解與情境衝突。 因此此選項符合題目。"
      },
      {
        "choice": "合理，只要時間夠長",
        "truth": false,
        "reason": "再長的有限時間乘0仍為0。"
      },
      {
        "choice": "應改成1公里/時",
        "truth": false,
        "reason": "不能任意改為1。"
      }
    ],
    "commonMistake": "只檢查速率不是負數就接受零，沒有再對照正距離與有限時間。",
    "concept": "d=vt必須同時成立。",
    "tags": [
      "代數",
      "解的合理性檢查",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-consecutive-integers"
    ],
    "authoringIntent": "檢查速率與路程的一致性。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3578e2d9fa1d91713c371e749332f2f8839775770d5e60808ef5544f1ab2b2cd",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s013-v006",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-reasonableness",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "購物單價方程式解得 x＝42.5 元。若店家允許以 0.5 元為單位定價，此解是否合理？",
    "choices": [
      "不合理，金額一定是整數",
      "不合理，必須四捨五入成43",
      "合理",
      "合理，但只能寫42元"
    ],
    "answerIndex": 2,
    "explanation": "檢查允許的最小貨幣單位；42.5是0.5的整數倍；判定合理。所以答案是「合理」。 四十二點五除以零點五為八十五，確實是允許計價單位的整數倍，無需取整。",
    "steps": [
      "檢查允許的最小貨幣單位",
      "42.5是0.5的整數倍",
      "判定合理"
    ],
    "optionAnalysis": [
      {
        "choice": "不合理，金額一定是整數",
        "truth": false,
        "reason": "金額不一定只能整數元。"
      },
      {
        "choice": "不合理，必須四捨五入成43",
        "truth": false,
        "reason": "無需改變精確解。"
      },
      {
        "choice": "合理",
        "truth": true,
        "reason": "題幹允許0.5元為計價單位，42.5正好符合，所以可接受。 因此此選項符合題目。"
      },
      {
        "choice": "合理，但只能寫42元",
        "truth": false,
        "reason": "少寫0.5會不符合方程式。"
      }
    ],
    "commonMistake": "看到小數金額就直接否定，沒有檢查它是否符合店家允許的零點五元單位。",
    "concept": "可接受範圍由題幹定義。",
    "tags": [
      "代數",
      "解的合理性檢查",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-consecutive-integers"
    ],
    "authoringIntent": "依計價單位判斷小數金額。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "db12ab685ee281a3f97ce804ae0e1e5c569831f3092e894c5354cda07f83916b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s013-v007",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-reasonableness",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "票數方程式解得 x＝12，且代回總價完全相符。此結果如何？",
    "choices": [
      "不合理，票數不能超過10",
      "不合理，所有票數都要偶數",
      "只要代回正確就不必看單位",
      "合理，12 是非負整數且通過驗算"
    ],
    "answerIndex": 3,
    "explanation": "檢查整數與非負；代回原式；兩項都通過。所以答案是「合理，12 是非負整數且通過驗算」。 題目沒有最多十張或必須為偶數之類的額外限制，不能自行加入。",
    "steps": [
      "檢查整數與非負",
      "代回原式",
      "兩項都通過"
    ],
    "optionAnalysis": [
      {
        "choice": "不合理，票數不能超過10",
        "truth": false,
        "reason": "題目未限制最多10張。"
      },
      {
        "choice": "不合理，所有票數都要偶數",
        "truth": false,
        "reason": "票數不必為偶數。"
      },
      {
        "choice": "只要代回正確就不必看單位",
        "truth": false,
        "reason": "仍需檢查情境條件。"
      },
      {
        "choice": "合理，12 是非負整數且通過驗算",
        "truth": true,
        "reason": "12符合票數需為非負整數，也使原方程式成立，因此合理。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "只看代回或只看單位其中一項。",
    "concept": "合理解需通過所有限制。",
    "tags": [
      "代數",
      "解的合理性檢查",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-consecutive-integers"
    ],
    "authoringIntent": "同時檢查代數與情境。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "24a264de10fb5adaaaf9973f122599285bdbcbe9f417ca3f12c0515e3ed67f59",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s013-v008",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-reasonableness",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "方程式解得 x＝5，但題目明定 x＞8。此解如何判斷？",
    "choices": [
      "不是題目可接受的解",
      "仍是解，因為方程式算出5",
      "將5改成9即可",
      "把條件x＞8刪除"
    ],
    "answerIndex": 0,
    "explanation": "分開檢查方程式與限制；5不大於8；排除該解。所以答案是「不是題目可接受的解」。 不能把五任意改成九，也不能刪除題幹給定的 x>8 限制。",
    "steps": [
      "分開檢查方程式與限制",
      "5不大於8",
      "排除該解"
    ],
    "optionAnalysis": [
      {
        "choice": "不是題目可接受的解",
        "truth": true,
        "reason": "雖然5可能滿足方程式，但不滿足題目額外條件x>8，所以不能作為情境答案。 因此此選項符合題目。"
      },
      {
        "choice": "仍是解，因為方程式算出5",
        "truth": false,
        "reason": "忽略額外限制。"
      },
      {
        "choice": "將5改成9即可",
        "truth": false,
        "reason": "9未必滿足原方程式。"
      },
      {
        "choice": "把條件x＞8刪除",
        "truth": false,
        "reason": "條件不能任意刪除。"
      }
    ],
    "commonMistake": "只驗算五是否滿足方程式，完全忽略題幹另外要求 x 必須大於八。",
    "concept": "額外條件與方程式同樣重要。",
    "tags": [
      "代數",
      "解的合理性檢查",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-consecutive-integers"
    ],
    "authoringIntent": "檢查解是否落在指定範圍。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8a68418dedbe25873408a25dfba0a616d0b1f95ae6ad0641f25aac5d78375ffa",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s013-v009",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-reasonableness",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "食材計算得到需要 2.75 公斤，量秤可精確到 0.01 公斤。此結果是否合理？",
    "choices": [
      "不合理，重量必須整數",
      "應改成3公斤",
      "合理",
      "應改成2.7公斤"
    ],
    "answerIndex": 2,
    "explanation": "檢查重量為正；檢查量測精度；2.75可被精確表示。所以答案是「合理」。 這是可量測的連續量，不需強制改成整數公斤，也不應降低題目給定的精度。",
    "steps": [
      "檢查重量為正",
      "檢查量測精度",
      "2.75可被精確表示"
    ],
    "optionAnalysis": [
      {
        "choice": "不合理，重量必須整數",
        "truth": false,
        "reason": "重量可為小數。"
      },
      {
        "choice": "應改成3公斤",
        "truth": false,
        "reason": "不能任意四捨五入。"
      },
      {
        "choice": "合理",
        "truth": true,
        "reason": "2.75公斤為正，且量秤精度0.01公斤可表示此值，所以合理。 因此此選項符合題目。"
      },
      {
        "choice": "應改成2.7公斤",
        "truth": false,
        "reason": "2.7會改變精確答案。"
      }
    ],
    "commonMistake": "把重量也當成必須用整數表示的離散數量，因而任意改寫精確值。",
    "concept": "重量通常允許小數。",
    "tags": [
      "代數",
      "解的合理性檢查",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-consecutive-integers"
    ],
    "authoringIntent": "依連續量與精度判斷。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c7c9e4a99476de6171d8f19645b6abee3eae1e901331632897695cc0aafa1da9",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s013-v010",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-reasonableness",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "巴士座位數模型解得 x＝38.2 張。題目要求每台巴士相同且座位完整。此解如何？",
    "choices": [
      "合理，38.2可視為平均",
      "直接向下取38",
      "直接向上取39",
      "不合理，座位數需為整數"
    ],
    "answerIndex": 3,
    "explanation": "辨認座位為離散數量；38.2非整數；回查模型。所以答案是「不合理，座位數需為整數」。 「每台座位數相同」不是平均值的意思，而是每台都要有同一整數座位數。",
    "steps": [
      "辨認座位為離散數量",
      "38.2非整數",
      "回查模型"
    ],
    "optionAnalysis": [
      {
        "choice": "合理，38.2可視為平均",
        "truth": false,
        "reason": "題目不是平均座位數。"
      },
      {
        "choice": "直接向下取38",
        "truth": false,
        "reason": "38不滿足原式。"
      },
      {
        "choice": "直接向上取39",
        "truth": false,
        "reason": "39也未必滿足原式。"
      },
      {
        "choice": "不合理，座位數需為整數",
        "truth": true,
        "reason": "單台完整座位數必須是整數；38.2不能直接作答，也不能未經題意授權取整。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "用「平均座位數」解釋三十八點二，掩蓋單台完整座位數必須為整數。",
    "concept": "離散量不能用任意小數。",
    "tags": [
      "代數",
      "解的合理性檢查",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-consecutive-integers"
    ],
    "authoringIntent": "檢查設備數量的整數條件。",
    "literacyContextNecessity": "巴士與座位是不可分割的離散物件，情境直接決定答案必須是整數。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c0892a4a5ee7ef710b423eb7532b35f0910242d04e59cac1f1952abefe59fe4d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s013-v011",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-reasonableness",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "路程計算得到時間 1.5 小時，且題目允許以半小時計。此結果是否合理？",
    "choices": [
      "合理",
      "不合理，時間必須整數",
      "必須改成2小時",
      "必須改成90小時"
    ],
    "answerIndex": 0,
    "explanation": "換算1.5小時=90分鐘；符合半小時倍數；判定合理。所以答案是「合理」。 一點五小時表示一小時三十分，不是一小時五分，也不必向上取整。",
    "steps": [
      "換算1.5小時=90分鐘",
      "符合半小時倍數",
      "判定合理"
    ],
    "optionAnalysis": [
      {
        "choice": "合理",
        "truth": true,
        "reason": "1.5小時等於1小時30分，符合允許的半小時計量，且為正值。 因此此選項符合題目。"
      },
      {
        "choice": "不合理，時間必須整數",
        "truth": false,
        "reason": "時間可以是小數。"
      },
      {
        "choice": "必須改成2小時",
        "truth": false,
        "reason": "不需向上取整。"
      },
      {
        "choice": "必須改成90小時",
        "truth": false,
        "reason": "1.5小時不是90小時。"
      }
    ],
    "commonMistake": "把小時的小數部分零點五誤當成五分鐘，而非三十分鐘。",
    "concept": "小數時間可換成分鐘檢查。",
    "tags": [
      "代數",
      "解的合理性檢查",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-consecutive-integers"
    ],
    "authoringIntent": "判斷時間小數與單位換算。",
    "literacyContextNecessity": "題目允許半小時計量，這項精度條件決定1.5小時可以被接受。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "be3975edf4d88cec41ae1c3fc6bc2f2fec53489d6d565b8b28f11e2c8f940679",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s013-v012",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-reasonableness",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "場館容量 200 人，模型解得入場人數為容量的 125%。若規定不得超載，判斷為何？",
    "choices": [
      "合理，百分率可超過100%",
      "不合理，250人超過容量",
      "合理，125%代表125人",
      "不合理，但應改成200%"
    ],
    "answerIndex": 1,
    "explanation": "把125%換成1.25；計算1.25×200=250；與容量200比較。所以答案是「不合理，250人超過容量」。 百分率本身雖可超過百分之百，但入場人數仍必須遵守不得超載的額外條件。",
    "steps": [
      "把125%換成1.25",
      "計算1.25×200=250",
      "與容量200比較"
    ],
    "optionAnalysis": [
      {
        "choice": "合理，百分率可超過100%",
        "truth": false,
        "reason": "百分率可超100但不代表符合容量限制。"
      },
      {
        "choice": "不合理，250人超過容量",
        "truth": true,
        "reason": "125%×200=250人，超過規定容量200，因此在不得超載的條件下不合理。 因此此選項符合題目。"
      },
      {
        "choice": "合理，125%代表125人",
        "truth": false,
        "reason": "125%不是125人。"
      },
      {
        "choice": "不合理，但應改成200%",
        "truth": false,
        "reason": "改成200%更超載。"
      }
    ],
    "commonMistake": "只判斷百分率形式是否存在。",
    "concept": "數學上可計算不代表情境允許。",
    "tags": [
      "代數",
      "解的合理性檢查",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-consecutive-integers"
    ],
    "authoringIntent": "整合百分率結果與容量上限。",
    "literacyContextNecessity": "容量上限與不得超載規定決定125%是否可接受，若刪除限制，125%本身並非數學錯誤。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "256c594953a833111d94b8314ea67113b24b701136032f04713762943f213ee4",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u03-s013-cr001",
    "unitId": "u03",
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-reasonableness",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某題求『每艘船可載的人數』，方程式解得 x＝24.5。題目又說每艘船座位固定且不可超載。請判斷此解能否直接採用，並說明下一步。",
    "requiredWork": [
      "指出人數與座位為整數。",
      "說明不能任意四捨五入。",
      "提出回查列式或判定無精確方案。"
    ],
    "fullCreditSolution": [
      "先辨認未知數是「每艘船可載的完整人數」。雖然代數方程式解得 24.5，但人數與固定座位數都必須是非負整數，因此 24.5 不能直接採用。",
      "不能無條件把 24.5 四捨五入為 25，也不能直接捨去為 24，因為這兩個整數都不再是原方程式的精確解。",
      "下一步應回查列式與題目資料，並確認題目是否允許各船載客數不同，或其實要求最少船數。若都沒有，應判定不存在精確符合等分條件的整數方案。"
    ],
    "alternativeSolutions": [
      "可用代回說明24與25都不等於原方程式的精確解。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整說明整數限制、禁止任意取整與後續檢查。"
      },
      {
        "score": 2,
        "criteria": "判斷不可接受但理由或後續少一項。"
      },
      {
        "score": 1,
        "criteria": "指出24.5不是完整人數。"
      },
      {
        "score": 0,
        "criteria": "直接採用或任意取整且無依據。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "看到二十四點五就直接向上取成二十五人，但題目未說是求最少容量，而且新值不滿足原方程式。",
      "只檢查 24.5 能代回方程式，忽略每艘船的人數與固定座位數不可為半個的情境限制。"
    ],
    "independentReview": {
      "derivedResult": "不可直接採用24.5",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "c4e12c34ee4a8fe326608439f6cf49078dec79890f69a8772d0cb1b5f011031b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s013-cr002",
    "unitId": "u03",
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-reasonableness",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "一個長方形的長為 x 公分、寬為 x－8 公分，面積資訊經錯誤建模後解得 x＝5。只根據邊長條件，說明此結果是否可接受。",
    "requiredWork": [
      "計算寬x-8。",
      "檢查兩個邊長都必須為正。",
      "說明不合理不等於改成絕對值。"
    ],
    "fullCreditSolution": [
      "將 x=5 代入邊長條件，長為 5 公分，寬為 x-8=5-8=-3 公分。代數計算雖得到 -3，但這不是可接受的幾何邊長。",
      "長方形的長與寬都必須大於 0。由寬 x-8>0 可知 x>8，而 x=5 不滿足此基本範圍，所以不能作為本情境的解。",
      "應回查面積資料或建模過程，找出為何產生不合法的解。不能把 -3 直接取絕對值改成 3 公分，因為那會改變原本 x-8 的關係。"
    ],
    "alternativeSolutions": [
      "可用限制x>8直接排除x=5。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "計算寬、指出正值限制並說明回查模型。"
      },
      {
        "score": 2,
        "criteria": "判斷不合理但未明確計算寬或理由不足。"
      },
      {
        "score": 1,
        "criteria": "能指出x必須大於8。"
      },
      {
        "score": 0,
        "criteria": "接受負邊長或任意改值。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "只檢查長 x=5 是正數，未將 x 代入寬 x-8，因而漏掉寬為 -3 公分的矛盾。",
      "把負寬度 -3 公分直接取絕對值改成 3 公分，但 3 並不等於當 x=5 時的 x-8。"
    ],
    "independentReview": {
      "derivedResult": "不可接受，因寬為-3公分",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "2aaf9554354dfa504624ffa244c22fbdc673fc4e56d4d7c1d6f234ddab9de74b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const DRAWING_SPECS = [];
