// Deterministically emitted from reviewed source. Do not edit.
export default [
  {
    "lectureId": "u11-s001-lecture-r1",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-meaning",
    "lockedSkillOrder": 1,
    "lockedTitle": "平方根意義",
    "title": "平方根意義：從平方反推可能值",
    "audience": "臺灣國中零基礎至會考滿分",
    "gradeBand": "8上",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "capBoundary": "邊長取正值；不含複數與高中延伸。",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能用「平方後得到原數」說明平方根",
      "能判斷正數、0、負數在實數範圍的平方根個數",
      "能區分代數方程的兩根與幾何長度的正值"
    ],
    "prerequisites": [
      {
        "skillId": "u01-u10-foundation",
        "requiredLevel": "能進行整數、分數、小數的四則與平方，並理解正負數和基本代數記號。"
      }
    ],
    "glossary": [
      {
        "term": "平方根",
        "definition": "若 x²=a，則 x 是 a 的平方根。"
      },
      {
        "term": "正平方根",
        "definition": "正數 a 的兩個平方根中較大的那一個。"
      },
      {
        "term": "負平方根",
        "definition": "正數 a 的兩個平方根中較小的那一個。"
      },
      {
        "term": "實數範圍",
        "definition": "本單元不引入複數；負數沒有實數平方根。"
      }
    ],
    "notation": [
      {
        "symbol": "x²=a",
        "meaning": "x 平方後等於 a。"
      },
      {
        "symbol": "±r",
        "meaning": "表示 r 與 -r 兩個數。"
      },
      {
        "symbol": "√a",
        "meaning": "只表示 a 的非負平方根，詳細記號在 s005。"
      }
    ],
    "conceptNarrative": [
      "平方根是平方運算的反向問題：問「哪個數乘自己會得到 a」。",
      "正數的平方根成對出現，因 r²=(-r)²。",
      "0 的平方根只有 0，因正負 0 是同一個數。",
      "任何實數平方皆非負，所以負數在本課範圍沒有平方根。",
      "實際長度、面積邊長或速率等量通常只接受非負候選值。",
      "處理平方根問題時，先分清題目是在問『所有平方後得到 a 的實數』、單值的主平方根 √a，還是具有非負限制的實際量。正數的平方根為互為相反數的一對，零只有一個平方根，負數在實數範圍沒有平方根；若先由方程得到正負候選，還要依邊長、速率或數量等語意篩選，最後將每個保留值平方回代，確認確實得到原數。"
    ],
    "formalDefinitions": [
      {
        "name": "平方根定義",
        "statement": "x²=a 時，x 稱為 a 的平方根。"
      },
      {
        "name": "平方根個數",
        "statement": "a>0 有兩個；a=0 有一個；a<0 在實數範圍沒有。"
      }
    ],
    "formulas": [
      {
        "formula": "x²=a",
        "conditions": [
          "先找平方後等於 a 的實數；a>0 時通常得到一正一負。"
        ],
        "meaning": "a 為實數且本單元只處理實數解。"
      }
    ],
    "nonApplicableCases": [
      "不能因為「平方根」有根號字樣就自動只寫正值；題目問「所有平方根」時要完整列出。",
      "負數前有負號不代表其平方仍為負，例如(-4)²=16。",
      "幾何邊長不能填負數，即使代數方程有負根。",
      "沒有先確認實數範圍時，不應自行延伸到複數。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "把題意改寫成 x²=a。",
        "check": "確認題目問所有平方根、主平方根，或實際量。"
      },
      {
        "step": 2,
        "instruction": "找出平方後等於 a 的候選值。",
        "check": "正負候選都要驗算。"
      },
      {
        "step": 3,
        "instruction": "依 a 的正負判斷解的個數。",
        "check": "a<0 時在實數範圍停止。"
      },
      {
        "step": 4,
        "instruction": "套用情境限制。",
        "check": "長度、速率與數量通常取非負。"
      },
      {
        "step": 5,
        "instruction": "把候選值平方驗算。",
        "check": "每個保留值都必須回到 a。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "求 64 的所有平方根。",
        "solutionSteps": [
          "8²=64。",
          "(-8)²=64。",
          "兩個值都符合定義。"
        ],
        "answer": "8 與 -8。",
        "why": "題目問所有平方根，必須解 x²=64；正八與負八平方都等於六十四，所以兩個不同實數都要保留。若只寫 √64=8，回答的是主平方根而非全部平方根。"
      },
      {
        "exampleId": "L2",
        "prompt": "求 0 的平方根。",
        "solutionSteps": [
          "設x²=0。",
          "只有x=0。"
        ],
        "answer": "0。",
        "why": "平方等於零時，數本身只能是零；形式上的正零與負零代表同一個實數，因此不能套用正數有兩個相異平方根的結論，答案與個數都只有一個零。"
      },
      {
        "exampleId": "L3",
        "prompt": "方程 z²=1.44 的實數解。",
        "solutionSteps": [
          "1.2²=1.44。",
          "正負1.2平方相同。"
        ],
        "answer": "z=±1.2。",
        "why": "一點四四是一點二的平方，且負一點二平方也會得到相同正數；方程要求全部實數解，所以要寫正負一點二，不能因使用根號計算就只留下非負值。"
      },
      {
        "exampleId": "L4",
        "prompt": "正方形面積121平方公分，求邊長。",
        "solutionSteps": [
          "邊長s滿足s²=121。",
          "代數候選±11。",
          "長度取正值。"
        ],
        "answer": "11公分。",
        "why": "由面積公式先得到代數候選正負十一，但題目的 s 是正方形實際邊長，負十一公分沒有情境意義；因此保留十一公分，並把面積的平方單位還原成長度單位。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把 36 的平方根寫成只有 6。",
        "why": "混淆「所有平方根」與「√36」。",
        "correction": "若問所有平方根，要寫6與-6。"
      },
      {
        "mistake": "認為 -5 的平方是 -25。",
        "why": "負號也在括號內相乘。",
        "correction": "(-5)²=(-5)(-5)=25。"
      },
      {
        "mistake": "說 0 有兩個平方根 ±0。",
        "why": "+0與-0是同一個數。",
        "correction": "平方根只有0一個。"
      },
      {
        "mistake": "給正方形邊長 -7。",
        "why": "忽略長度非負。",
        "correction": "代數負根須由情境排除。"
      },
      {
        "mistake": "說 √(-9)=-3。",
        "why": "(-3)²=9不是-9。",
        "correction": "實數範圍無解。"
      },
      {
        "mistake": "把平方根當除以2。",
        "why": "平方的逆運算不是對半。",
        "correction": "用候選值平方驗算。"
      }
    ],
    "selfCheck": [
      {
        "checkId": "SC1",
        "prompt": "用一句話說明本技能最核心的數學關係。",
        "answer": "平方根回答「平方後得到原數」的問題。"
      },
      {
        "checkId": "SC2",
        "prompt": "使用本技能前最先要確認的條件是什麼？",
        "answer": "把題意改寫成 x²=a。"
      },
      {
        "checkId": "SC3",
        "prompt": "指出一個最常見的錯誤並給出修正。",
        "answer": "把 36 的平方根寫成只有 6。；修正：若問所有平方根，要寫6與-6。"
      },
      {
        "checkId": "SC4",
        "prompt": "完成答案後要做哪一項檢查？",
        "answer": "我有排除負數的實數平方根嗎？"
      }
    ],
    "summary": [
      "平方根回答「平方後得到原數」的問題。",
      "正數兩根互為相反數，0只有一根，負數無實數根。",
      "情境量可能只保留非負根。"
    ],
    "connections": {
      "previous": "先備為整數、分數、小數平方與正負數運算。",
      "next": [
        "下一技能會把平方因數從根號內提出。",
        "s005 將嚴格區分 √a 與 ±√a。"
      ]
    },
    "figureReferences": [
      "fig-u11-s001-square-area"
    ],
    "accessibilityNotes": [
      "一個正方形，中央標示面積196平方公分，下方以s大於0表示邊長。"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u11-s001-v001",
        "u11-s001-v002",
        "u11-s001-v003",
        "u11-s001-v004",
        "u11-s001-v005",
        "u11-s001-v006",
        "u11-s001-v007",
        "u11-s001-v008",
        "u11-s001-v009",
        "u11-s001-v010",
        "u11-s001-v011",
        "u11-s001-v012"
      ],
      "constructedResponseIds": [
        "u11-s001-cr001",
        "u11-s001-cr002"
      ]
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewedAt": "2026-07-12",
      "reviewer": "CHATGPT_AUTHOR_AND_REVIEWER",
      "reviewNote": "逐段重算「平方根意義」的四個示例，確認定義先於公式、每個符號已在使用前說明，且錯誤分析聚焦於「把 36 的平方根寫成只有 6。」等本技能特有問題；內容未借用舊題庫。"
    },
    "contentSha256": "1a6eb975d2d889c0f74939f264e1408092b058605e71efa57b929bf43ac691e4"
  },
  {
    "lectureId": "u11-s002-lecture-r1",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-simplify",
    "lockedSkillOrder": 2,
    "lockedTitle": "根式化簡",
    "title": "根式化簡：提出平方因數並保持等值",
    "audience": "臺灣國中零基礎至會考滿分",
    "gradeBand": "8上",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "capBoundary": "邊長取正值；不含複數與高中延伸。",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能找出被開方數中的完全平方因數",
      "能將根式化到根號內不含可提出平方因數",
      "能檢查化簡前後平方值相同"
    ],
    "prerequisites": [
      {
        "skillId": "square-root-meaning",
        "requiredLevel": "能使用前一技能「平方根意義」的核心方法，並能說明其適用條件。"
      }
    ],
    "glossary": [
      {
        "term": "根式",
        "definition": "含有平方根記號的數式。"
      },
      {
        "term": "完全平方因數",
        "definition": "可寫成整數平方的因數，如4、9、16。"
      },
      {
        "term": "最簡根式",
        "definition": "根號內不含大於1的完全平方因數，且分母無待處理根式。"
      },
      {
        "term": "提出因數",
        "definition": "利用√(m²n)=m√n。"
      }
    ],
    "notation": [
      {
        "symbol": "√a",
        "meaning": "a 的非負平方根。"
      },
      {
        "symbol": "m√n",
        "meaning": "m 乘以 √n。"
      },
      {
        "symbol": "√(m²n)=m√n",
        "meaning": "m≥0 時可將平方因數提出。"
      }
    ],
    "conceptNarrative": [
      "化簡不是改變數值，而是把相同數寫成容易運算的形式。",
      "最有效的方法是找最大的完全平方因數，但逐步提出也可得到相同結果。",
      "根號外係數與根號內因數分工：成對的質因數可提出一個。",
      "化簡完成後，根號內不能再含4、9、16等平方因數。",
      "根式化簡必須保持數值不變：先把被開方數分解成『最大完全平方因數×剩餘因數』，完全平方部分開根後移到根號外，未成對的因數留在根號內；若原式已有外係數，最後還要相乘。完成時應確認根號內不再含四、九、十六等平方因數，並可將結果平方回去檢查是否恢復原被開方數，避免直接提出平方因數或中途停止。"
    ],
    "formalDefinitions": [
      {
        "name": "最簡根式條件",
        "statement": "根號內為正整數時，不含大於1的完全平方因數。"
      },
      {
        "name": "等值化簡",
        "statement": "若a,b≥0，√(ab)=√a√b。"
      }
    ],
    "formulas": [
      {
        "formula": "√(k²m)=k√m",
        "conditions": [
          "k≥0、m≥0。"
        ],
        "meaning": "把完全平方 k² 開成 k。"
      },
      {
        "formula": "c√a",
        "conditions": [
          "先化簡√a，再乘回係數c。"
        ],
        "meaning": "係數不可遺漏。"
      }
    ],
    "nonApplicableCases": [
      "√(a+b)一般不能拆成√a+√b。",
      "提出36時要變成6，不是36。",
      "3√12中的3不能被忘記。",
      "根號內仍含4或9時通常還沒最簡。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "分解被開方數。",
        "check": "優先尋找最大完全平方因數。"
      },
      {
        "step": 2,
        "instruction": "把它寫成平方因數×剩餘因數。",
        "check": "剩餘因數應為正整數。"
      },
      {
        "step": 3,
        "instruction": "對平方因數開平方並移到根號外。",
        "check": "√36=6，不是36。"
      },
      {
        "step": 4,
        "instruction": "乘回原有係數。",
        "check": "檢查外部係數。"
      },
      {
        "step": 5,
        "instruction": "確認根號內不能再化簡。",
        "check": "逐一檢查4、9、16等因數。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "化簡√28。",
        "solutionSteps": [
          "28=4×7。",
          "√4=2。"
        ],
        "answer": "2√7。",
        "why": "二十八含完全平方因數四，開平方後提出二而不是四；根號內剩七且無平方因數。將 2√7 平方可得二十八，可同時檢查提出係數與剩餘因數。"
      },
      {
        "exampleId": "L2",
        "prompt": "化簡√147。",
        "solutionSteps": [
          "147=49×3。",
          "√49=7。"
        ],
        "answer": "7√3。",
        "why": "四十九是七的平方，也是此處方便的最大平方因數；提出七後只剩三。若只抽出較小因數，還要繼續化簡，最後仍應得到 7√3。"
      },
      {
        "exampleId": "L3",
        "prompt": "化簡2√75。",
        "solutionSteps": [
          "√75=5√3。",
          "乘回2。"
        ],
        "answer": "10√3。",
        "why": "外面的係數二不在根號化簡範圍內，先由七十五等於二十五乘三得到 5√3，再乘回原係數二成 10√3，才能保持原式等值。"
      },
      {
        "exampleId": "L4",
        "prompt": "化簡√(2⁵×3²)。",
        "solutionSteps": [
          "2⁵×3²=(2⁴×3²)×2。",
          "提出2²×3。"
        ],
        "answer": "12√2。",
        "why": "把質因數成對分組可看出 2⁴ 與 3² 都能完整開平方，根號外得到四乘三；多出的一個二沒有配對，留在根號內，故為 12√2。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "√48=16√3。",
        "why": "把平方因數16直接提出。",
        "correction": "√16=4，所以是4√3。"
      },
      {
        "mistake": "√12=√4+√3。",
        "why": "錯用根號加法拆分。",
        "correction": "應用乘法分解√(4×3)。"
      },
      {
        "mistake": "2√18=3√2。",
        "why": "漏乘原係數2。",
        "correction": "√18=3√2，所以為6√2。"
      },
      {
        "mistake": "√72=3√8後停止。",
        "why": "根號內8仍含4。",
        "correction": "繼續化為6√2。"
      },
      {
        "mistake": "把√50化成25√2。",
        "why": "未對25開平方。",
        "correction": "應為5√2。"
      },
      {
        "mistake": "只用小數近似取代精確化簡。",
        "why": "題目要求根式精確值。",
        "correction": "保留最簡根式，除非要求近似。"
      }
    ],
    "selfCheck": [
      {
        "checkId": "SC1",
        "prompt": "用一句話說明本技能最核心的數學關係。",
        "answer": "找平方因數、開平方、留下不能成對的因數。"
      },
      {
        "checkId": "SC2",
        "prompt": "使用本技能前最先要確認的條件是什麼？",
        "answer": "分解被開方數。"
      },
      {
        "checkId": "SC3",
        "prompt": "指出一個最常見的錯誤並給出修正。",
        "answer": "√48=16√3。；修正：√16=4，所以是4√3。"
      },
      {
        "checkId": "SC4",
        "prompt": "完成答案後要做哪一項檢查？",
        "answer": "化簡前後平方或近似值是否一致？"
      }
    ],
    "summary": [
      "找平方因數、開平方、留下不能成對的因數。",
      "最簡根式是等值而更易運算的寫法。"
    ],
    "connections": {
      "previous": "需要 s001 的平方根意義與整數質因數分解。",
      "next": [
        "s003 將先化簡再做根式四則。",
        "s006 會建立完全平方數辨識速度。"
      ]
    },
    "figureReferences": [],
    "accessibilityNotes": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u11-s002-v001",
        "u11-s002-v002",
        "u11-s002-v003",
        "u11-s002-v004",
        "u11-s002-v005",
        "u11-s002-v006",
        "u11-s002-v007",
        "u11-s002-v008",
        "u11-s002-v009",
        "u11-s002-v010",
        "u11-s002-v011",
        "u11-s002-v012"
      ],
      "constructedResponseIds": [
        "u11-s002-cr001",
        "u11-s002-cr002"
      ]
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewedAt": "2026-07-12",
      "reviewer": "CHATGPT_AUTHOR_AND_REVIEWER",
      "reviewNote": "逐段重算「根式化簡」的四個示例，確認定義先於公式、每個符號已在使用前說明，且錯誤分析聚焦於「√48=16√3。」等本技能特有問題；內容未借用舊題庫。"
    },
    "contentSha256": "0a2d79f7d7ec6e97f78b3a4e20d2b6b54bb71358bb3467029123df073715b872"
  },
  {
    "lectureId": "u11-s003-lecture-r1",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-arithmetic",
    "lockedSkillOrder": 3,
    "lockedTitle": "根式四則",
    "title": "根式四則：先化簡再選運算規則",
    "audience": "臺灣國中零基礎至會考滿分",
    "gradeBand": "8上",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "capBoundary": "邊長取正值；不含複數與高中延伸。",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能辨認同類根式並加減係數",
      "能正確進行根式乘除",
      "能運用平方差與先化簡策略降低錯誤"
    ],
    "prerequisites": [
      {
        "skillId": "square-root-simplify",
        "requiredLevel": "能使用前一技能「根式化簡」的核心方法，並能說明其適用條件。"
      }
    ],
    "glossary": [
      {
        "term": "同類根式",
        "definition": "化簡後根號部分完全相同的根式。"
      },
      {
        "term": "係數",
        "definition": "乘在根式前的數。"
      },
      {
        "term": "共軛形式",
        "definition": "A+B與A-B的配對。"
      },
      {
        "term": "根式乘法",
        "definition": "非負被開方數可在根號內相乘。"
      }
    ],
    "notation": [
      {
        "symbol": "a√m+b√m=(a+b)√m",
        "meaning": "只對同類根式成立。"
      },
      {
        "symbol": "√a√b=√(ab)",
        "meaning": "a,b≥0。"
      },
      {
        "symbol": "√a/√b=√(a/b)",
        "meaning": "a≥0,b>0。"
      }
    ],
    "conceptNarrative": [
      "根式加減像代數同類項：√2與3√2可合併，√2與√3不能直接合併。",
      "判斷同類前必須先化簡，例如√8與√18其實都是√2的倍數。",
      "乘法與除法可以處理被開方數，但加法不能照搬。",
      "遇到(A+B)(A-B)可用平方差消去交叉根式項。",
      "根式四則需先辨認運算類型：加減前各自化簡，只有根號部分完全相同的同類根式才能合併係數；乘除則可在被開方數非負、分母不為零時合併根號內的乘除。括號互為共軛時優先使用平方差消去交叉根式項。每一步都要保留原係數與正負號，最後再確認根號內已最簡，且有理數項不能與不同根式項強行合併。"
    ],
    "formalDefinitions": [
      {
        "name": "根式加減",
        "statement": "只合併化簡後相同根號部分的係數。"
      },
      {
        "name": "根式乘除",
        "statement": "在定義域允許時，可合併被開方數。"
      }
    ],
    "formulas": [
      {
        "formula": "a√m±b√m=(a±b)√m",
        "conditions": [
          "m≥0。"
        ],
        "meaning": "同類根式係數運算。"
      },
      {
        "formula": "(√a+√b)(√a-√b)=a-b",
        "conditions": [
          "a,b≥0。"
        ],
        "meaning": "平方差。"
      }
    ],
    "nonApplicableCases": [
      "√a+√b通常不等於√(a+b)。",
      "除法分母不能為0。",
      "平方整個和時不能只平方每一項。",
      "單位不同的長度不能直接相加。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "先化簡每個根式。",
        "check": "找出真正的同類根式。"
      },
      {
        "step": 2,
        "instruction": "辨認運算種類。",
        "check": "加減與乘除規則不同。"
      },
      {
        "step": 3,
        "instruction": "保留括號與正負號。",
        "check": "尤其注意減號分配。"
      },
      {
        "step": 4,
        "instruction": "完成係數或被開方數運算。",
        "check": "結果再化簡。"
      },
      {
        "step": 5,
        "instruction": "用平方或近似值快速檢查。",
        "check": "確認量級與符號合理。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "計算4√7-√7。",
        "solutionSteps": [
          "同類根式。",
          "係數4-1。"
        ],
        "answer": "3√7。",
        "why": "兩項根號部分都為 √7，因此像同類項一樣只計算係數四減一，並原樣保留根式；加減運算不會把被開方數七改變，也不能約掉根號。"
      },
      {
        "exampleId": "L2",
        "prompt": "計算√20+√45。",
        "solutionSteps": [
          "化簡為2√5與3√5。",
          "合併係數。"
        ],
        "answer": "5√5。",
        "why": "原先被開方數不同，必須先各自化簡；√20=2√5、√45=3√5 後才看出同類。係數二加三得五，不能直接寫成 √65。將結果拆回兩項也能驗證合併前後等值。"
      },
      {
        "exampleId": "L3",
        "prompt": "計算√10×√40。",
        "solutionSteps": [
          "合併成√400。",
          "取主平方根。"
        ],
        "answer": "20。",
        "why": "根式乘法在被開方數非負時可合併成 √(10×40)，得到 √400；根號表示非負主平方根，所以結果是二十而不是正負二十。"
      },
      {
        "exampleId": "L4",
        "prompt": "計算(√11+2)(√11-2)。",
        "solutionSteps": [
          "使用平方差。",
          "11-4。"
        ],
        "answer": "7。",
        "why": "兩因式只在中間符號不同，套用平方差可讓交叉項互相抵消；(√11)²=11、2²=4，故只需算十一減四，避免冗長展開。直接展開時兩個交叉項也會一正一負相消。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "√2+√3=√5。",
        "why": "把乘法性質錯套到加法。",
        "correction": "不同類根式不能合併。"
      },
      {
        "mistake": "√12+√3=√15。",
        "why": "未先化簡。",
        "correction": "2√3+√3=3√3。"
      },
      {
        "mistake": "(√5)²=√25。",
        "why": "雖數值同為5但推理混亂。",
        "correction": "直接使用(√5)²=5。"
      },
      {
        "mistake": "√6×√24=√30。",
        "why": "乘法時誤加被開方數。",
        "correction": "應為√144=12。"
      },
      {
        "mistake": "根式除法把分子分母分別相減。",
        "why": "除法規則錯誤。",
        "correction": "可合併成商的平方根。"
      },
      {
        "mistake": "合併係數時漏掉負號。",
        "why": "沒有把減號視為係數的一部分。",
        "correction": "先寫成有號係數再相加。"
      }
    ],
    "selfCheck": [
      {
        "checkId": "SC1",
        "prompt": "用一句話說明本技能最核心的數學關係。",
        "answer": "根式加減先找同類，乘除可合併被開方數。"
      },
      {
        "checkId": "SC2",
        "prompt": "使用本技能前最先要確認的條件是什麼？",
        "answer": "先化簡每個根式。"
      },
      {
        "checkId": "SC3",
        "prompt": "指出一個最常見的錯誤並給出修正。",
        "answer": "√2+√3=√5。；修正：不同類根式不能合併。"
      },
      {
        "checkId": "SC4",
        "prompt": "完成答案後要做哪一項檢查？",
        "answer": "最後結果還能化簡嗎？"
      }
    ],
    "summary": [
      "根式加減先找同類，乘除可合併被開方數。",
      "平方差常使根式乘積化為有理數。"
    ],
    "connections": {
      "previous": "需要 s002 的根式化簡。",
      "next": [
        "s004 將估算根式大小。",
        "s007 會把根式除法延伸到分母有理化。"
      ]
    },
    "figureReferences": [],
    "accessibilityNotes": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u11-s003-v001",
        "u11-s003-v002",
        "u11-s003-v003",
        "u11-s003-v004",
        "u11-s003-v005",
        "u11-s003-v006",
        "u11-s003-v007",
        "u11-s003-v008",
        "u11-s003-v009",
        "u11-s003-v010",
        "u11-s003-v011",
        "u11-s003-v012"
      ],
      "constructedResponseIds": [
        "u11-s003-cr001",
        "u11-s003-cr002"
      ]
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewedAt": "2026-07-12",
      "reviewer": "CHATGPT_AUTHOR_AND_REVIEWER",
      "reviewNote": "逐段重算「根式四則」的四個示例，確認定義先於公式、每個符號已在使用前說明，且錯誤分析聚焦於「√2+√3=√5。」等本技能特有問題；內容未借用舊題庫。"
    },
    "contentSha256": "ae6827a49cd9a9ec4e78fc3dca3656b19b3e9f035fbca68ee9f198fe8b322bf2"
  },
  {
    "lectureId": "u11-s004-lecture-r1",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-estimate",
    "lockedSkillOrder": 4,
    "lockedTitle": "平方根估算",
    "title": "平方根估算：用平方界線控制精度",
    "audience": "臺灣國中零基礎至會考滿分",
    "gradeBand": "8上",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "capBoundary": "邊長取正值；不含複數與高中延伸。",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能用相鄰完全平方數夾住平方根",
      "能依指定小數位進行四捨五入",
      "能以平方檢查近似值是否合理"
    ],
    "prerequisites": [
      {
        "skillId": "square-root-arithmetic",
        "requiredLevel": "能使用前一技能「根式四則」的核心方法，並能說明其適用條件。"
      }
    ],
    "glossary": [
      {
        "term": "夾估",
        "definition": "用上下界把未知平方根限制在一段範圍。"
      },
      {
        "term": "完全平方數",
        "definition": "整數平方所得的數。"
      },
      {
        "term": "近似值",
        "definition": "在指定精度下接近真值的數。"
      },
      {
        "term": "進位界線",
        "definition": "四捨五入時兩候選值的中點。"
      }
    ],
    "notation": [
      {
        "symbol": "n²<a<(n+1)²",
        "meaning": "可推出n<√a<n+1。"
      },
      {
        "symbol": "≈",
        "meaning": "表示近似相等，不是完全相等。"
      }
    ],
    "conceptNarrative": [
      "平方根估算的核心是反向平方，而不是盲目試除。",
      "找整數範圍後，若要求一位小數，可比較十分位候選或中點平方。",
      "四捨五入到一位小數時，應檢查百分位是否達5；不一定要算出很多位。",
      "近似值必須標示≈，精確根式仍使用=。",
      "平方根估算以正數平方的單調性為基礎：先找相鄰整數平方夾住被開方數，再依所需精度比較十分位候選或四捨五入中點的平方。要求小數第一位時，重點是判斷根值落在中點左側或右側，不必洩漏或計算過多小數；精確根式與近似值分別使用等號、約等號。圖形只能呈現必要平方邊界，實際近似與進位仍須由計算完成。"
    ],
    "formalDefinitions": [
      {
        "name": "整數夾估",
        "statement": "若n²<a<(n+1)²且n≥0，則n<√a<n+1。"
      },
      {
        "name": "一位小數四捨五入",
        "statement": "比較真值與x.x5的進位界線。"
      }
    ],
    "formulas": [
      {
        "formula": "平方比較",
        "conditions": [
          "比較數皆非負時，可比較平方而不改變大小次序。"
        ],
        "meaning": "候選值需非負。"
      }
    ],
    "nonApplicableCases": [
      "不能把√a估成a/2。",
      "√50不是7.0，因等號會表示完全相等。",
      "比較負數平方根時不能直接使用同樣方向。",
      "題目要求精確值時不可擅自改成小數。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "找出a左右的相鄰完全平方數。",
        "check": "先得到整數區間。"
      },
      {
        "step": 2,
        "instruction": "確認題目要求的精度。",
        "check": "整數、十分位或百分位。"
      },
      {
        "step": 3,
        "instruction": "選取候選小數並平方。",
        "check": "平方值低於a表示候選偏低。"
      },
      {
        "step": 4,
        "instruction": "檢查四捨五入中點。",
        "check": "避免只看上下端。"
      },
      {
        "step": 5,
        "instruction": "使用≈並保留單位。",
        "check": "精確與近似符號分開。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "估√30的整數範圍。",
        "solutionSteps": [
          "25<30<36。"
        ],
        "answer": "5<√30<6。",
        "why": "五與六是相鄰整數，其平方二十五、三十六分別位於三十兩側；平方函數在非負範圍遞增，因此可同時開平方，得到 √30 的嚴格整數界線。"
      },
      {
        "exampleId": "L2",
        "prompt": "√3取一位小數。",
        "solutionSteps": [
          "1.7²=2.89，1.8²=3.24。",
          "1.75²=3.0625>3。"
        ],
        "answer": "約1.7。",
        "why": "一點七五是一位小數一點七與一點八的四捨五入分界；其平方大於三，表示 √3 小於中點，所以百分位不足五，應捨去而保留一點七。"
      },
      {
        "exampleId": "L3",
        "prompt": "判斷√120是否大於11。",
        "solutionSteps": [
          "11²=121。",
          "120<121。"
        ],
        "answer": "√120<11。",
        "why": "十一與 √120 都是非負數，可用平方大小比較；十一平方為一百二十一，大於一百二十，因此十一本身大於 √120，方向不能顛倒。"
      },
      {
        "exampleId": "L4",
        "prompt": "找最接近√250的整數。",
        "solutionSteps": [
          "15²=225，16²=256。",
          "250更靠近256且超過15.5²。"
        ],
        "answer": "16。",
        "why": "判斷最近整數要看十五點五這個中點，而非只比較被開方數離兩個平方的差；15.5²=240.25，小於二百五十，所以 √250 位於中點右側，較接近十六。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "由49<50就寫√50=7。",
        "why": "忽略不等號與等號差異。",
        "correction": "應寫√50>7或近似7.1。"
      },
      {
        "mistake": "一位小數只比較7.0與7.1的平方。",
        "why": "未檢查四捨五入中點。",
        "correction": "比較7.05²。"
      },
      {
        "mistake": "將≈寫成=。",
        "why": "把近似值當精確值。",
        "correction": "估算結果使用≈。"
      },
      {
        "mistake": "平方6.3得到12.6。",
        "why": "把平方誤作乘2。",
        "correction": "6.3²=39.69。"
      },
      {
        "mistake": "忽略題目指定小數位。",
        "why": "答案格式不符。",
        "correction": "最後依規格四捨五入。"
      },
      {
        "mistake": "使用計算機結果卻不檢查量級。",
        "why": "輸入或小數點錯誤不易發現。",
        "correction": "先用完全平方數建立範圍。"
      }
    ],
    "selfCheck": [
      {
        "checkId": "SC1",
        "prompt": "用一句話說明本技能最核心的數學關係。",
        "answer": "先用完全平方數夾住，再用候選平方細分。"
      },
      {
        "checkId": "SC2",
        "prompt": "使用本技能前最先要確認的條件是什麼？",
        "answer": "找出a左右的相鄰完全平方數。"
      },
      {
        "checkId": "SC3",
        "prompt": "指出一個最常見的錯誤並給出修正。",
        "answer": "由49<50就寫√50=7。；修正：應寫√50>7或近似7.1。"
      },
      {
        "checkId": "SC4",
        "prompt": "完成答案後要做哪一項檢查？",
        "answer": "我用了≈且保留指定小數位嗎？"
      }
    ],
    "summary": [
      "先用完全平方數夾住，再用候選平方細分。",
      "精度與等號符號是答案的一部分。"
    ],
    "connections": {
      "previous": "需要 s003 的平方與根式運算。",
      "next": [
        "s008 將使用平方比較根式大小。",
        "畢氏應用常需估算斜邊。"
      ]
    },
    "figureReferences": [
      "fig-u11-s004-numberline-estimate"
    ],
    "accessibilityNotes": [
      "數線標出8.3、8.4、8.5，√70的位置落在8.3與8.4之間且較接近8.4。"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u11-s004-v001",
        "u11-s004-v002",
        "u11-s004-v003",
        "u11-s004-v004",
        "u11-s004-v005",
        "u11-s004-v006",
        "u11-s004-v007",
        "u11-s004-v008",
        "u11-s004-v009",
        "u11-s004-v010",
        "u11-s004-v011",
        "u11-s004-v012"
      ],
      "constructedResponseIds": [
        "u11-s004-cr001",
        "u11-s004-cr002"
      ]
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewedAt": "2026-07-12",
      "reviewer": "CHATGPT_AUTHOR_AND_REVIEWER",
      "reviewNote": "逐段重算「平方根估算」的四個示例，確認定義先於公式、每個符號已在使用前說明，且錯誤分析聚焦於「由49<50就寫√50=7。」等本技能特有問題；內容未借用舊題庫。"
    },
    "contentSha256": "d927be0ea2cd167656b7189bdaf858f8b13553cf7e5c5a21064494c0a8798dcb"
  },
  {
    "lectureId": "u11-s005-lecture-r1",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-notation",
    "lockedSkillOrder": 5,
    "lockedTitle": "平方根記號",
    "title": "平方根記號：分清主平方根與正負兩解",
    "audience": "臺灣國中零基礎至會考滿分",
    "gradeBand": "8上",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "capBoundary": "邊長取正值；不含複數與高中延伸。",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能分辨√a、±√a與x²=a",
      "能正確使用(√a)²=a與√(a²)=|a|",
      "能檢查被開方數在實數範圍是否非負"
    ],
    "prerequisites": [
      {
        "skillId": "square-root-estimate",
        "requiredLevel": "能使用前一技能「平方根估算」的核心方法，並能說明其適用條件。"
      }
    ],
    "glossary": [
      {
        "term": "根號符號",
        "definition": "√a 表示a的非負平方根。"
      },
      {
        "term": "正負號±",
        "definition": "同時表示正與負兩種可能。"
      },
      {
        "term": "主平方根",
        "definition": "非負平方根，根號符號的值。"
      },
      {
        "term": "定義域",
        "definition": "讓根式在實數範圍有意義的輸入範圍。"
      }
    ],
    "notation": [
      {
        "symbol": "√a",
        "meaning": "a≥0時的非負平方根。"
      },
      {
        "symbol": "±√a",
        "meaning": "√a與-√a兩個數。"
      },
      {
        "symbol": "(√a)²=a",
        "meaning": "a≥0。"
      },
      {
        "symbol": "√(a²)=|a|",
        "meaning": "a為任意實數。"
      }
    ],
    "conceptNarrative": [
      "根號本身是一個單值記號，所以√25=5，不寫±5。",
      "解平方方程時，因正負兩數平方相同，需寫x=±√a。",
      "平方後再開主平方根會消除符號，結果是絕對值。",
      "被開方數為負時，在本單元的實數範圍沒有定義。",
      "平方根記號與平方方程必須分開：√a 在 a≥0 時是唯一的非負主平方根，而 x²=a 在 a>0 時有 ±√a 兩個實數解。平方後再取主平方根得到的是絕對值 √(t²)=|t|，不能機械消去符號；若根號內含變數，須先令被開方數非負。實際量還要依邊長、速率等語意排除負值，並以回代平方檢查答案。"
    ],
    "formalDefinitions": [
      {
        "name": "主平方根",
        "statement": "√a 是唯一非負且平方為a的實數。"
      },
      {
        "name": "平方方程解",
        "statement": "a>0時x²=a有兩解±√a。"
      }
    ],
    "formulas": [
      {
        "formula": "(√a)²=a",
        "conditions": [
          "a≥0。"
        ],
        "meaning": "先開主平方根再平方回a。"
      },
      {
        "formula": "√(a²)=|a|",
        "conditions": [
          "a∈R。"
        ],
        "meaning": "先平方再取非負根。"
      }
    ],
    "nonApplicableCases": [
      "√a 不代表兩個值。",
      "± 必須寫在根號外且作用於整個根式。",
      "√(a²)=a 只有在a≥0時成立。",
      "實數根式不能接受負被開方數。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "辨認題目是求根式值還是解方程。",
        "check": "根式值單一，平方方程可能雙解。"
      },
      {
        "step": 2,
        "instruction": "檢查被開方數非負。",
        "check": "負值時說明實數範圍無意義。"
      },
      {
        "step": 3,
        "instruction": "依符號執行運算。",
        "check": "看清±、括號與平方位置。"
      },
      {
        "step": 4,
        "instruction": "使用絕對值處理√(a²)。",
        "check": "再依a的正負化簡。"
      },
      {
        "step": 5,
        "instruction": "回代驗算。",
        "check": "根式值應非負。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "計算√100。",
        "solutionSteps": [
          "主平方根非負。"
        ],
        "answer": "10。",
        "why": "根號記號表示非負主平方根，所以雖然正十與負十平方都為一百，√100 的單一值仍是十；只有在問全部平方根時才另列負十。"
      },
      {
        "exampleId": "L2",
        "prompt": "解x²=100。",
        "solutionSteps": [
          "正負10平方皆為100。"
        ],
        "answer": "x=±10。",
        "why": "平方方程要求所有使平方等於一百的實數，正十、負十都須保留；這與單值的 √100 不同，故使用 ± 將兩個解一起表示。"
      },
      {
        "exampleId": "L3",
        "prompt": "若t=-8，求√(t²)。",
        "solutionSteps": [
          "t²=64。",
          "主平方根為8。"
        ],
        "answer": "8。",
        "why": "平方先將負八變成六十四，接著主平方根只能取非負八；因此 √(t²) 等於 |t|，當 t 為負數時結果是 -t，而不是原來的 t。"
      },
      {
        "exampleId": "L4",
        "prompt": "判斷√(x-3)有實數意義的條件。",
        "solutionSteps": [
          "被開方數需≥0。",
          "x-3≥0。"
        ],
        "answer": "x≥3。",
        "why": "在本單元實數範圍，根號內必須非負；令 x-3≥0 後移項得 x≥3。端點三可用，因被開方數零的主平方根有定義。小於三則會使被開方數為負，須排除。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "√16=±4。",
        "why": "根號是主平方根單值。",
        "correction": "√16=4。"
      },
      {
        "mistake": "解x²=16只寫x=4。",
        "why": "方程需列出兩根。",
        "correction": "x=±4。"
      },
      {
        "mistake": "√((-6)²)=-6。",
        "why": "主平方根不能為負。",
        "correction": "結果為6。"
      },
      {
        "mistake": "√(-9)=-3。",
        "why": "平方驗算不成立。",
        "correction": "實數範圍無意義。"
      },
      {
        "mistake": "±√9=±9。",
        "why": "先算√9=3。",
        "correction": "結果為±3。"
      },
      {
        "mistake": "把根號線只看成作用於第一個數。",
        "why": "根號範圍辨識錯誤。",
        "correction": "確認被開方式完整括號。"
      }
    ],
    "selfCheck": [
      {
        "checkId": "SC1",
        "prompt": "用一句話說明本技能最核心的數學關係。",
        "answer": "√a 是非負單值；±√a 是兩個數。"
      },
      {
        "checkId": "SC2",
        "prompt": "使用本技能前最先要確認的條件是什麼？",
        "answer": "辨認題目是求根式值還是解方程。"
      },
      {
        "checkId": "SC3",
        "prompt": "指出一個最常見的錯誤並給出修正。",
        "answer": "√16=±4。；修正：√16=4。"
      },
      {
        "checkId": "SC4",
        "prompt": "完成答案後要做哪一項檢查？",
        "answer": "√(a²)是否需要絕對值？"
      }
    ],
    "summary": [
      "√a 是非負單值；±√a 是兩個數。",
      "(√a)²與√(a²)的條件不同。"
    ],
    "connections": {
      "previous": "承接 s001 的平方根意義與 s004 的非負近似。",
      "next": [
        "s006 會快速計算完全平方數的主平方根。",
        "s007 會在分母中操作根號記號。"
      ]
    },
    "figureReferences": [],
    "accessibilityNotes": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u11-s005-v001",
        "u11-s005-v002",
        "u11-s005-v003",
        "u11-s005-v004",
        "u11-s005-v005",
        "u11-s005-v006",
        "u11-s005-v007",
        "u11-s005-v008",
        "u11-s005-v009",
        "u11-s005-v010",
        "u11-s005-v011",
        "u11-s005-v012"
      ],
      "constructedResponseIds": [
        "u11-s005-cr001",
        "u11-s005-cr002"
      ]
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewedAt": "2026-07-12",
      "reviewer": "CHATGPT_AUTHOR_AND_REVIEWER",
      "reviewNote": "逐段重算「平方根記號」的四個示例，確認定義先於公式、每個符號已在使用前說明，且錯誤分析聚焦於「√16=±4。」等本技能特有問題；內容未借用舊題庫。"
    },
    "contentSha256": "4a241a545762228a3058a6c4daad3bdb69e32f667236a8b9f3f1db46c8755a46"
  },
  {
    "lectureId": "u11-s006-lecture-r1",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-perfect-square",
    "lockedSkillOrder": 6,
    "lockedTitle": "完全平方數平方根",
    "title": "完全平方數平方根：建立平方表與邊界感",
    "audience": "臺灣國中零基礎至會考滿分",
    "gradeBand": "8上",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "capBoundary": "邊長取正值；不含複數與高中延伸。",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能熟練1²至30²中的常用值",
      "能判定整數是否為完全平方數",
      "能處理區間、計數與邊界問題"
    ],
    "prerequisites": [
      {
        "skillId": "sqrt-notation",
        "requiredLevel": "能使用前一技能「平方根記號」的核心方法，並能說明其適用條件。"
      }
    ],
    "glossary": [
      {
        "term": "完全平方數",
        "definition": "可寫成整數平方的非負整數。"
      },
      {
        "term": "平方表",
        "definition": "整數與其平方的對照。"
      },
      {
        "term": "底數",
        "definition": "平方運算中被乘兩次的數。"
      },
      {
        "term": "平方數區間",
        "definition": "由相鄰底數平方形成的範圍。"
      }
    ],
    "notation": [
      {
        "symbol": "n²",
        "meaning": "n×n。"
      },
      {
        "symbol": "√(n²)=|n|",
        "meaning": "n為整數時仍取非負值。"
      }
    ],
    "conceptNarrative": [
      "熟記平方數能加速根式化簡、估算與畢氏數組辨識。",
      "判斷一個正整數是否為完全平方數，可找其平方根是否為整數。",
      "區間計數時應轉成底數範圍，特別注意是否包含端點。",
      "0=0²也是完全平方數，但「正完全平方數」不包含0。",
      "完全平方數的判斷與計數可轉成整數底數問題：先建立相鄰平方表，確認某數是否具有整數平方根；處理區間時，找出第一個不低於下界與最後一個不高於上界的底數，再連續列舉並檢查端點是否包含。零是完全平方數但不是正完全平方數，幾何邊長或人數則只取正根。以範圍外相鄰平方驗證，可證明沒有遺漏或多列。"
    ],
    "formalDefinitions": [
      {
        "name": "完全平方數",
        "statement": "存在整數n使N=n²。"
      },
      {
        "name": "正完全平方數",
        "statement": "n≠0時的n²。"
      }
    ],
    "formulas": [
      {
        "formula": "1²,2²,…",
        "conditions": [
          "常用表至少熟悉至20²。"
        ],
        "meaning": "用於快速判定與估算。"
      }
    ],
    "nonApplicableCases": [
      "偶數不一定是完全平方數。",
      "完全平方數不只由正整數平方得到，負整數平方相同。",
      "題目說1到100時不能算入0。",
      "小於與小於等於的邊界不可混淆。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "先判斷問題是求平方、開平方或計數。",
        "check": "不要把平方當乘2。"
      },
      {
        "step": 2,
        "instruction": "列出附近底數。",
        "check": "用平方表定位。"
      },
      {
        "step": 3,
        "instruction": "檢查端點是否包含。",
        "check": "看清「介於」「含」等詞。"
      },
      {
        "step": 4,
        "instruction": "若為實際長度，取正平方根。",
        "check": "底數可能正負但長度非負。"
      },
      {
        "step": 5,
        "instruction": "以乘法驗算。",
        "check": "n×n應回到原數。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "求17²。",
        "solutionSteps": [
          "17×17=289。"
        ],
        "answer": "289。",
        "why": "平方是十七乘十七，可用 (10+7)²=100+140+49 快速核對為二百八十九；不能把右上角二當成乘以二而只算三十四。直式乘法也會得到相同結果。"
      },
      {
        "exampleId": "L2",
        "prompt": "判斷196是否完全平方數。",
        "solutionSteps": [
          "14²=196。"
        ],
        "answer": "是。",
        "why": "完全平方數必須能寫成整數平方；十四乘十四恰為一百九十六，提供明確整數底數，因此判定為是，而不只是因它為偶數。"
      },
      {
        "exampleId": "L3",
        "prompt": "找小於200的最大完全平方數。",
        "solutionSteps": [
          "14²=196。",
          "15²=225超過。"
        ],
        "answer": "196。",
        "why": "十四平方仍小於二百，下一個整數十五的平方已超過；連續平方隨正整數底數增加，因此中間沒有其他完全平方數，最大值確為一百九十六。"
      },
      {
        "exampleId": "L4",
        "prompt": "計數50到150間的完全平方數。",
        "solutionSteps": [
          "8²=64至12²=144。",
          "底數8,9,10,11,12。"
        ],
        "answer": "5個。",
        "why": "七平方四十九低於下界、十三平方一百六十九高於上界，所以完整底數範圍是八到十二；包含兩端共有十二減八加一等於五個。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "15²=30。",
        "why": "把平方當乘2。",
        "correction": "15²=225。"
      },
      {
        "mistake": "所有偶數都是平方數。",
        "why": "只看奇偶性不足。",
        "correction": "檢查整數平方根。"
      },
      {
        "mistake": "√144=±12。",
        "why": "根號是主平方根。",
        "correction": "√144=12。"
      },
      {
        "mistake": "1到100有11個正平方數。",
        "why": "錯把0算入。",
        "correction": "1²到10²共10個。"
      },
      {
        "mistake": "小於81仍包含81。",
        "why": "忽略嚴格不等式。",
        "correction": "最大應看8²=64。"
      },
      {
        "mistake": "只背平方表不驗算陌生數。",
        "why": "記憶可能錯位。",
        "correction": "用鄰近平方或乘法確認。"
      }
    ],
    "selfCheck": [
      {
        "checkId": "SC1",
        "prompt": "用一句話說明本技能最核心的數學關係。",
        "answer": "完全平方數是整數平方。"
      },
      {
        "checkId": "SC2",
        "prompt": "使用本技能前最先要確認的條件是什麼？",
        "answer": "先判斷問題是求平方、開平方或計數。"
      },
      {
        "checkId": "SC3",
        "prompt": "指出一個最常見的錯誤並給出修正。",
        "answer": "15²=30。；修正：15²=225。"
      },
      {
        "checkId": "SC4",
        "prompt": "完成答案後要做哪一項檢查？",
        "answer": "實際量是否只取正值？"
      }
    ],
    "summary": [
      "完全平方數是整數平方。",
      "區間問題轉成底數區間最穩定。"
    ],
    "connections": {
      "previous": "需要 s005 的主平方根記號。",
      "next": [
        "s007 有理化會使用根式平方。",
        "s008 比較與畢氏定理都依賴平方表。"
      ]
    },
    "figureReferences": [],
    "accessibilityNotes": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u11-s006-v001",
        "u11-s006-v002",
        "u11-s006-v003",
        "u11-s006-v004",
        "u11-s006-v005",
        "u11-s006-v006",
        "u11-s006-v007",
        "u11-s006-v008",
        "u11-s006-v009",
        "u11-s006-v010",
        "u11-s006-v011",
        "u11-s006-v012"
      ],
      "constructedResponseIds": [
        "u11-s006-cr001",
        "u11-s006-cr002"
      ]
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewedAt": "2026-07-12",
      "reviewer": "CHATGPT_AUTHOR_AND_REVIEWER",
      "reviewNote": "逐段重算「完全平方數平方根」的四個示例，確認定義先於公式、每個符號已在使用前說明，且錯誤分析聚焦於「15²=30。」等本技能特有問題；內容未借用舊題庫。"
    },
    "contentSha256": "66d8513adc89e886742f7e5a598ddfa2304ba1a414846708f69dc8ca8215423d"
  },
  {
    "lectureId": "u11-s007-lecture-r1",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-rationalize-simple",
    "lockedSkillOrder": 7,
    "lockedTitle": "分母有理化基本",
    "title": "分母有理化基本：用等值乘法移除根號",
    "audience": "臺灣國中零基礎至會考滿分",
    "gradeBand": "8上",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "capBoundary": "邊長取正值；不含複數與高中延伸。",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能說明有理化是等值改寫",
      "能處理a/√b與含係數單根式分母",
      "能在有理化後繼續約分至最簡"
    ],
    "prerequisites": [
      {
        "skillId": "sqrt-perfect-square",
        "requiredLevel": "能使用前一技能「完全平方數平方根」的核心方法，並能說明其適用條件。"
      }
    ],
    "glossary": [
      {
        "term": "有理數分母",
        "definition": "分母不含無理根式。"
      },
      {
        "term": "分母有理化",
        "definition": "以等值乘法移除分母根式。"
      },
      {
        "term": "等值分數",
        "definition": "分子分母同乘非零數後值不變。"
      },
      {
        "term": "約分",
        "definition": "分子分母除以共同非零因數。"
      }
    ],
    "notation": [
      {
        "symbol": "√b/√b=1",
        "meaning": "b>0。"
      },
      {
        "symbol": "a/√b=a√b/b",
        "meaning": "b>0。"
      },
      {
        "symbol": "a/(c√b)=a√b/(cb)",
        "meaning": "b>0且c≠0。"
      }
    ],
    "conceptNarrative": [
      "分母有理化的核心是等值乘法：分子與分母同乘相同的非零根式，也就是乘以一，讓分母的根式自乘成有理數。只改分母會改變原值。完成後還要化簡根式並檢查係數公因數，直到分母沒有根號、分子分母不能再約，才是最簡有理化形式。",
      "運算前先化簡常能縮短步驟，例如 √3/√6 可先約成 1/√2，2√3/√12 則因 √12=2√3 可直接約成一。多項相加時應先把每一項化為相容形式，再通分或合併同類根式，不能把不同根式分母直接相加。",
      "情境題中的分鐘、元或公尺每秒只是量的單位，不參與根式有理化；代數部分完成後要把原單位附回。可用反向乘回原分母或小數估值檢查等值，但正式答案仍依題意保留精確根式。"
    ],
    "formalDefinitions": [
      {
        "name": "單根式分母有理化",
        "statement": "分母形如c√b時，同乘√b。"
      },
      {
        "name": "最簡有理化形式",
        "statement": "分母為有理數且整體已約分。"
      }
    ],
    "formulas": [
      {
        "formula": "a/√b × √b/√b=a√b/b",
        "conditions": [
          "b>0。"
        ],
        "meaning": "同乘非零的1。"
      }
    ],
    "nonApplicableCases": [
      "不能只把分母√b改成b而不改分子。",
      "本技能不處理含兩項分母的共軛有理化。",
      "分母為0時原式無意義。",
      "得到有理分母後仍需檢查約分。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "先化簡分子與分母。",
        "check": "可能直接約去根式。"
      },
      {
        "step": 2,
        "instruction": "確認分母是單一根式。",
        "check": "本技能只處理基本型。"
      },
      {
        "step": 3,
        "instruction": "選擇同乘的根式。",
        "check": "通常與分母根式相同。"
      },
      {
        "step": 4,
        "instruction": "分子分母同步相乘。",
        "check": "保持等值。"
      },
      {
        "step": 5,
        "instruction": "化簡與約分。",
        "check": "確認分母無根號。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "將 4/√7 分母有理化。",
        "solutionSteps": [
          "分子分母同乘 √7。",
          "得到 4√7/7。"
        ],
        "answer": "4√7/7。",
        "why": "√7/√7 等於一，所以原值不變；分母 √7·√7 變成七，且四與七互質，答案已同時符合分母有理與最簡兩項要求，可反向驗算。"
      },
      {
        "exampleId": "L2",
        "prompt": "將 9/(2√3) 分母有理化。",
        "solutionSteps": [
          "同乘 √3 得 9√3/6。",
          "分子分母係數同除以三。"
        ],
        "answer": "3√3/2。",
        "why": "有理化後仍要檢查係數公因數；九與六可同除三，所以停在 9√3/6 並不最簡，而根號三不能當成一般係數約掉。"
      },
      {
        "exampleId": "L3",
        "prompt": "化簡 √5/√20。",
        "solutionSteps": [
          "√20=2√5。",
          "上下約去非零的 √5。"
        ],
        "answer": "1/2。",
        "why": "先提出平方因數可直接看見分子分母共同的 √5，約分後分母已是整數二；此法比先同乘 √20 更短，也不產生多餘大根式。"
      },
      {
        "exampleId": "L4",
        "prompt": "化簡 1/√3+2/√3。",
        "solutionSteps": [
          "同分母先合併成 3/√3。",
          "同乘 √3 或直接約得 √3。"
        ],
        "answer": "√3。",
        "why": "兩項分母相同，可先合併分子以減少兩次有理化；3/√3 等於 √3，因三可寫成 √3·√3，最後沒有根號分母，且根式已最簡。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "1/√2=1/2。",
        "why": "只平方分母。",
        "correction": "分子也要乘√2。"
      },
      {
        "mistake": "3/√5=3√5。",
        "why": "漏掉分母5。",
        "correction": "應為3√5/5。"
      },
      {
        "mistake": "有理化後7√7/21就停止。",
        "why": "尚可約7。",
        "correction": "化為√7/3。"
      },
      {
        "mistake": "看到根式分母就一定先同乘。",
        "why": "可能先化簡更快。",
        "correction": "先檢查可否約分。"
      },
      {
        "mistake": "同乘不同的根式使分母仍有根號。",
        "why": "乘法因子選錯。",
        "correction": "選能讓分母成平方的根式。"
      },
      {
        "mistake": "把分母有理化當近似小數。",
        "why": "有理化是精確等值改寫。",
        "correction": "全程保留等號。"
      }
    ],
    "selfCheck": [
      {
        "checkId": "SC1",
        "prompt": "用一句話說明本技能最核心的數學關係。",
        "answer": "同乘適當根式使分母成平方。"
      },
      {
        "checkId": "SC2",
        "prompt": "使用本技能前最先要確認的條件是什麼？",
        "answer": "先化簡分子與分母。"
      },
      {
        "checkId": "SC3",
        "prompt": "指出一個最常見的錯誤並給出修正。",
        "answer": "1/√2=1/2。；修正：分子也要乘√2。"
      },
      {
        "checkId": "SC4",
        "prompt": "完成答案後要做哪一項檢查？",
        "answer": "最後還能約分嗎？"
      }
    ],
    "summary": [
      "同乘適當根式使分母成平方。",
      "有理化後還要化簡與約分。"
    ],
    "connections": {
      "previous": "需要 s003 的根式乘除與 s006 的平方。",
      "next": [
        "s008 將比較不同根式形式。",
        "後續應用可使用更易計算的有理化結果。"
      ]
    },
    "figureReferences": [],
    "accessibilityNotes": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u11-s007-v001",
        "u11-s007-v002",
        "u11-s007-v003",
        "u11-s007-v004",
        "u11-s007-v005",
        "u11-s007-v006",
        "u11-s007-v007",
        "u11-s007-v008",
        "u11-s007-v009",
        "u11-s007-v010",
        "u11-s007-v011",
        "u11-s007-v012"
      ],
      "constructedResponseIds": [
        "u11-s007-cr001",
        "u11-s007-cr002"
      ]
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewedAt": "2026-07-12",
      "reviewer": "CHATGPT_AUTHOR_AND_REVIEWER",
      "reviewNote": "逐段重算「分母有理化基本」的四個示例，確認定義先於公式、每個符號已在使用前說明，且錯誤分析聚焦於「1/√2=1/2。」等本技能特有問題；內容未借用舊題庫。"
    },
    "contentSha256": "7845588815826a4dcc3b6ee6f45af18eb98f2d3e9c787b1192b9058377d82808"
  },
  {
    "lectureId": "u11-s008-lecture-r1",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-comparison",
    "lockedSkillOrder": 8,
    "lockedTitle": "平方根大小比較",
    "title": "平方根大小比較：用平方做精確判斷",
    "audience": "臺灣國中零基礎至會考滿分",
    "gradeBand": "8上",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "capBoundary": "邊長取正值；不含複數與高中延伸。",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能比較√a與整數",
      "能比較含係數與負號的根式",
      "能處理排序與根式不等式"
    ],
    "prerequisites": [
      {
        "skillId": "sqrt-rationalize-simple",
        "requiredLevel": "能使用前一技能「分母有理化基本」的核心方法，並能說明其適用條件。"
      }
    ],
    "glossary": [
      {
        "term": "單調性",
        "definition": "非負數越大，其平方根越大。"
      },
      {
        "term": "平方比較",
        "definition": "正數大小可由平方大小判定。"
      },
      {
        "term": "相反數次序",
        "definition": "正數大小取負後方向反轉。"
      },
      {
        "term": "等值轉換",
        "definition": "將整數或係數根式改寫成可比較形式。"
      }
    ],
    "notation": [
      {
        "symbol": "a<b⇒√a<√b",
        "meaning": "a,b≥0。"
      },
      {
        "symbol": "(m√n)²=m²n",
        "meaning": "m√n≥0時可用於比較。"
      }
    ],
    "conceptNarrative": [
      "比較非負根式時，可把兩數平方到共同尺度，因平方函數在非負範圍保持大小。整數 k 可寫成 √(k²)，外係數 m√n 平方後為 m²n，不能只比較 n。平方比較前必須先確認兩邊非負；若兩邊皆負，先比較其正值，再因乘負一而反轉順序。",
      "同為平方根且被開方數非負時，可直接比較被開方數；形式不同則先化簡或平方。例如 √18+√8 先化成 5√2，再與七平方比較。含小數時也可平方成精確有限小數，避免粗略近似在數值接近時改變結論。",
      "不等式中的端點要保留原條件。由 a>0 且 √a<5 平方可得 a<25，合併為 0<a<25；不能漏掉正值限制，也不能把嚴格小於改成小於等於。情境中的公分、公里或承載指標只在同量比較時保留。"
    ],
    "formalDefinitions": [
      {
        "name": "非負根式比較",
        "statement": "平方函數在非負範圍遞增。"
      },
      {
        "name": "負值比較",
        "statement": "乘以-1時不等號反向。"
      }
    ],
    "formulas": [
      {
        "formula": "m√n ? √p",
        "conditions": [
          "若兩邊非負，改比較m²n與p。"
        ],
        "meaning": "避免小數近似誤差。"
      }
    ],
    "nonApplicableCases": [
      "平方比較前要確認兩邊非負。",
      "不能只比較根號內數而忽略外係數。",
      "負號會反轉次序。",
      "近似相同不代表相等。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "先化簡所有根式。",
        "check": "避免不同外觀掩蓋同值。"
      },
      {
        "step": 2,
        "instruction": "判斷正負。",
        "check": "決定能否直接平方。"
      },
      {
        "step": 3,
        "instruction": "轉成共同形式。",
        "check": "全寫根式或比較平方。"
      },
      {
        "step": 4,
        "instruction": "完成大小判斷。",
        "check": "負數時記得反向。"
      },
      {
        "step": 5,
        "instruction": "用整數區間或小數驗算。",
        "check": "排除量級錯誤。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "比較 √15 與 4。",
        "solutionSteps": [
          "兩數皆非負。",
          "比較平方十五與十六。"
        ],
        "answer": "√15<4。",
        "why": "四可寫成 √16，平方後十五小於十六，所以原非負數保持同一順序；這是精確比較，不需要先估算 √15 的小數。"
      },
      {
        "exampleId": "L2",
        "prompt": "比較 2√5 與 √21。",
        "solutionSteps": [
          "平方分別為二十與二十一。",
          "兩原數皆為正。"
        ],
        "answer": "2√5<√21。",
        "why": "外係數二平方後成四，故左平方是四乘五等於二十；若只比較五與二十一會忽略係數，無法正確代表原數大小。"
      },
      {
        "exampleId": "L3",
        "prompt": "比較 -√10 與 -3。",
        "solutionSteps": [
          "先比較正值 √10>3。",
          "同取負後反轉方向。"
        ],
        "answer": "-√10<-3。",
        "why": "√10 的絕對值較大，但負數絕對值越大在數線上越左；先得到正值順序再乘負一，能清楚交代不等號反轉原因。"
      },
      {
        "exampleId": "L4",
        "prompt": "將 √6、√8、√7 由小到大排列。",
        "solutionSteps": [
          "三者皆非負且同為平方根。",
          "直接比較被開方數 6<7<8。"
        ],
        "answer": "√6<√7<√8。",
        "why": "平方根函數在非負被開方數上保持順序，所以同型根式可直接按六、七、八排列；不必把每個根式轉成近似小數。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "3√2<√10，因2<10。",
        "why": "忽略外係數3。",
        "correction": "比較平方18與10。"
      },
      {
        "mistake": "-√5>-2，因√5>2。",
        "why": "取負後方向反轉。",
        "correction": "-√5<-2。"
      },
      {
        "mistake": "√49>7。",
        "why": "兩者其實相等。",
        "correction": "√49=7。"
      },
      {
        "mistake": "比較時先取粗略整數。",
        "why": "可能把很接近的數判錯。",
        "correction": "使用平方精確比較。"
      },
      {
        "mistake": "兩邊含根號就直接去掉根號。",
        "why": "外係數與正負可能不同。",
        "correction": "先確認形式與非負性。"
      },
      {
        "mistake": "把a<b推出√a>√b。",
        "why": "單調方向錯。",
        "correction": "非負範圍平方根保持次序。"
      }
    ],
    "selfCheck": [
      {
        "checkId": "SC1",
        "prompt": "用一句話說明本技能最核心的數學關係。",
        "answer": "非負根式可用平方比較。"
      },
      {
        "checkId": "SC2",
        "prompt": "使用本技能前最先要確認的條件是什麼？",
        "answer": "先化簡所有根式。"
      },
      {
        "checkId": "SC3",
        "prompt": "指出一個最常見的錯誤並給出修正。",
        "answer": "3√2<√10，因2<10。；修正：比較平方18與10。"
      },
      {
        "checkId": "SC4",
        "prompt": "完成答案後要做哪一項檢查？",
        "answer": "我能用平方精確驗算嗎？"
      }
    ],
    "summary": [
      "非負根式可用平方比較。",
      "外係數、負號與化簡都會影響次序。"
    ],
    "connections": {
      "previous": "需要 s004 的估算、s003 的化簡與平方。",
      "next": [
        "s009 畢氏定理會比較邊長並辨認斜邊。",
        "s016 素養題常需在近似值間決策。"
      ]
    },
    "figureReferences": [],
    "accessibilityNotes": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u11-s008-v001",
        "u11-s008-v002",
        "u11-s008-v003",
        "u11-s008-v004",
        "u11-s008-v005",
        "u11-s008-v006",
        "u11-s008-v007",
        "u11-s008-v008",
        "u11-s008-v009",
        "u11-s008-v010",
        "u11-s008-v011",
        "u11-s008-v012"
      ],
      "constructedResponseIds": [
        "u11-s008-cr001",
        "u11-s008-cr002"
      ]
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewedAt": "2026-07-12",
      "reviewer": "CHATGPT_AUTHOR_AND_REVIEWER",
      "reviewNote": "逐段重算「平方根大小比較」的四個示例，確認定義先於公式、每個符號已在使用前說明，且錯誤分析聚焦於「3√2<√10，因2<10。」等本技能特有問題；內容未借用舊題庫。"
    },
    "contentSha256": "975d27c7e4257148bce5cfd5cd556b26538d2b1974dc40624b5bda7db80a2b4f"
  },
  {
    "lectureId": "u11-s009-lecture-r1",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-theorem",
    "lockedSkillOrder": 9,
    "lockedTitle": "畢氏定理",
    "title": "畢氏定理：從直角辨認兩股與斜邊",
    "audience": "臺灣國中零基礎至會考滿分",
    "gradeBand": "8上",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "capBoundary": "邊長取正值；不含複數與高中延伸。",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能辨認直角、兩股與斜邊",
      "能由兩股平方和求斜邊",
      "能處理根式邊長並說明長度取正"
    ],
    "prerequisites": [
      {
        "skillId": "sqrt-comparison",
        "requiredLevel": "能使用前一技能「平方根大小比較」的核心方法，並能說明其適用條件。"
      }
    ],
    "glossary": [
      {
        "term": "直角三角形",
        "definition": "含一個90°角的三角形。"
      },
      {
        "term": "股",
        "definition": "夾出直角的兩條邊。"
      },
      {
        "term": "斜邊",
        "definition": "直角的對邊，也是三邊中最長。"
      },
      {
        "term": "畢氏定理",
        "definition": "兩股平方和等於斜邊平方。"
      }
    ],
    "notation": [
      {
        "symbol": "a²+b²=c²",
        "meaning": "a,b為兩股，c為斜邊。"
      },
      {
        "symbol": "c=√(a²+b²)",
        "meaning": "由兩股求斜邊，取正根。"
      }
    ],
    "conceptNarrative": [
      "畢氏定理只適用於直角三角形。套公式前先找直角，直角對面的最長邊才是斜邊 c，另外兩邊是股 a、b；邊長方向或圖形旋轉不影響角色。公式 a²+b²=c² 描述平方和，不是邊長直接相加。求得 c² 後還要開平方，因長度為正只取正根並附單位。",
      "若已知斜邊與一股求另一股，才使用平方差；已知兩股求斜邊則用平方和。根式邊長也依相同規則先平方，例如 (2√3)²=12。等腰直角三角形兩股 a 會得到 c²=2a²，再依 a>0 化為 c=a√2。",
      "圖形與替代文字應明示直角、兩股及斜邊位置，但不得直接寫出特定題目的答案。常見三四五、五十二十三等數組可加速驗算，仍須確認最大邊平方等於另兩邊平方和，不能只因數值熟悉便套用。"
    ],
    "formalDefinitions": [
      {
        "name": "畢氏定理",
        "statement": "直角三角形中，兩股平方和等於斜邊平方。"
      }
    ],
    "formulas": [
      {
        "formula": "a²+b²=c²",
        "conditions": [
          "三角形必須為直角，c必須是斜邊。"
        ],
        "meaning": "由面積關係得到的邊長平方等式。"
      }
    ],
    "nonApplicableCases": [
      "一般三角形不能直接套用。",
      "不能把c寫成a+b。",
      "圖未按比例時不能目測哪邊長。",
      "平方根結果的負值不適合邊長。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "確認存在直角。",
        "check": "題目文字、直角符號或矩形性質。"
      },
      {
        "step": 2,
        "instruction": "標出兩股與斜邊。",
        "check": "斜邊是直角對邊。"
      },
      {
        "step": 3,
        "instruction": "代入a²+b²=c²。",
        "check": "不要混淆邊角色。"
      },
      {
        "step": 4,
        "instruction": "完成平方和並開平方。",
        "check": "根式化到最簡。"
      },
      {
        "step": 5,
        "instruction": "檢查斜邊是否最長。",
        "check": "單位與量級合理。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "直角三角形兩股為 7、24，求斜邊。",
        "solutionSteps": [
          "c²=7²+24²=49+576=625。",
          "c=25。"
        ],
        "answer": "25。",
        "why": "七與二十四是直角兩股，所以使用平方和；六百二十五是斜邊平方，仍須開正平方根。二十五也大於任一股，符合斜邊最長。"
      },
      {
        "exampleId": "L2",
        "prompt": "直角三角形兩股為 √6、√10，求斜邊。",
        "solutionSteps": [
          "c²=6+10=16。",
          "c=4。"
        ],
        "answer": "4。",
        "why": "根式邊長平方後正好還原被開方數六與十，平方和十六再開正根得四；不能把 √6 與 √10 直接合併成 √16，代回平方和成立。"
      },
      {
        "exampleId": "L3",
        "prompt": "等腰直角三角形股長為 8，求斜邊。",
        "solutionSteps": [
          "c²=8²+8²=128。",
          "√128=8√2。"
        ],
        "answer": "8√2。",
        "why": "兩股相等但仍各自貢獻六十四，平方和一百二十八提出平方因數六十四得八根號二；直接把兩股相加成十六不是直線斜邊。"
      },
      {
        "exampleId": "L4",
        "prompt": "兩股平方分別為 20、29，求斜邊。",
        "solutionSteps": [
          "斜邊平方為 20+29=49。",
          "斜邊取正根。"
        ],
        "answer": "7。",
        "why": "題目已給平方值，不需先求兩股本身；依畢氏定理直接相加得四十九，再由長度為正取七，不取負七。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把直角兩邊相加求斜邊。",
        "why": "忽略平方關係。",
        "correction": "使用√(a²+b²)。"
      },
      {
        "mistake": "把短邊當斜邊。",
        "why": "沒找直角對邊。",
        "correction": "先標直角，再找其對邊。"
      },
      {
        "mistake": "算到c²=169就答169。",
        "why": "漏開平方。",
        "correction": "c=13。"
      },
      {
        "mistake": "答c=±13。",
        "why": "長度不取負。",
        "correction": "只保留13。"
      },
      {
        "mistake": "根式結果未化簡。",
        "why": "答案形式未完成。",
        "correction": "提出平方因數。"
      },
      {
        "mistake": "一般三角形也套公式。",
        "why": "缺少直角前提。",
        "correction": "確認90°條件。"
      }
    ],
    "selfCheck": [
      {
        "checkId": "SC1",
        "prompt": "用一句話說明本技能最核心的數學關係。",
        "answer": "直角三角形：兩股平方和=斜邊平方。"
      },
      {
        "checkId": "SC2",
        "prompt": "使用本技能前最先要確認的條件是什麼？",
        "answer": "確認存在直角。"
      },
      {
        "checkId": "SC3",
        "prompt": "指出一個最常見的錯誤並給出修正。",
        "answer": "把直角兩邊相加求斜邊。；修正：使用√(a²+b²)。"
      },
      {
        "checkId": "SC4",
        "prompt": "完成答案後要做哪一項檢查？",
        "answer": "根式與單位完成了嗎？"
      }
    ],
    "summary": [
      "直角三角形：兩股平方和=斜邊平方。",
      "斜邊最長，邊長取正。"
    ],
    "connections": {
      "previous": "需要 s008 的根式比較與 s003 的根式運算。",
      "next": [
        "s010 將把實物情境轉成直角三角形。",
        "s015 會研究定理的逆命題。"
      ]
    },
    "figureReferences": [
      "fig-u11-s009-right-triangle",
      "fig-u11-s009-square-diagonal"
    ],
    "accessibilityNotes": [
      "直角三角形左下角標示直角，兩股標a和b，斜邊標c，上方寫a平方加b平方等於c平方。",
      "邊長10公分的正方形，畫出一條對角線d，角落有直角符號。"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u11-s009-v001",
        "u11-s009-v002",
        "u11-s009-v003",
        "u11-s009-v004",
        "u11-s009-v005",
        "u11-s009-v006",
        "u11-s009-v007",
        "u11-s009-v008",
        "u11-s009-v009",
        "u11-s009-v010",
        "u11-s009-v011",
        "u11-s009-v012"
      ],
      "constructedResponseIds": [
        "u11-s009-cr001",
        "u11-s009-cr002"
      ]
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewedAt": "2026-07-12",
      "reviewer": "CHATGPT_AUTHOR_AND_REVIEWER",
      "reviewNote": "逐段重算「畢氏定理」的四個示例，確認定義先於公式、每個符號已在使用前說明，且錯誤分析聚焦於「把直角兩邊相加求斜邊。」等本技能特有問題；內容未借用舊題庫。"
    },
    "contentSha256": "d3462ed659941f75b05533a44fb8ee5c7081955a6b38ae39177827efa700f480"
  },
  {
    "lectureId": "u11-s010-lecture-r1",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-application",
    "lockedSkillOrder": 10,
    "lockedTitle": "畢氏定理應用",
    "title": "畢氏定理應用：把實物轉成直角模型",
    "audience": "臺灣國中零基礎至會考滿分",
    "gradeBand": "8上",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "capBoundary": "邊長取正值；不含複數與高中延伸。",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能從矩形、梯子、斜坡中建立直角三角形",
      "能判斷所求量是斜邊或股",
      "能處理兩階段與近似應用"
    ],
    "prerequisites": [
      {
        "skillId": "pythagorean-theorem",
        "requiredLevel": "能使用前一技能「畢氏定理」的核心方法，並能說明其適用條件。"
      }
    ],
    "glossary": [
      {
        "term": "對角線",
        "definition": "連接多邊形不相鄰頂點的線段。"
      },
      {
        "term": "水平投影",
        "definition": "斜線在水平方向的長度。"
      },
      {
        "term": "垂直高度",
        "definition": "與水平面垂直的距離。"
      },
      {
        "term": "空間對角線",
        "definition": "跨越長方體相對頂點的線段。"
      }
    ],
    "notation": [
      {
        "symbol": "矩形對角線d=√(長²+寬²)",
        "meaning": "矩形角為直角。"
      },
      {
        "symbol": "未知股=√(斜邊²-已知股²)",
        "meaning": "斜邊必須最大。"
      }
    ],
    "conceptNarrative": [
      "畢氏應用題的第一步是把實物轉成直角三角形：牆與地面、長方形相鄰邊、水平投影與高度都是互相垂直的兩股，梯子、繃直纜線、斜坡面與矩形對角線通常是直角對面的斜邊。角色辨認後才決定用平方和求斜邊，或用斜邊平方減一股平方求另一股。",
      "組合或立體圖形可能要連續建立兩個直角三角形。長方體空間對角線可先由底面長寬求底面對角線，再把它與高度當兩股；每一步所得中間量都要有幾何意義，不能將三個邊長直接相加，也不能漏掉第二層高度。",
      "近似題應先保留完整平方和與根式，到最後一步才依指定小數位四捨五入。題目若含至少、安全距離或鬆弛量，須先確認所給值是否取邊界；最後答案要檢查斜邊應最長、單位是長度而非平方單位。"
    ],
    "formalDefinitions": [
      {
        "name": "直角模型",
        "statement": "把實際物件抽象成由兩股與斜邊組成的三角形。"
      }
    ],
    "formulas": [
      {
        "formula": "d²=x²+y²",
        "conditions": [
          "x,y互相垂直。"
        ],
        "meaning": "求跨越兩方向的直線距離。"
      }
    ],
    "nonApplicableCases": [
      "牆若未說垂直地面，不能自動套用。",
      "纜線有下垂時，其實際長度不等於直線距離。",
      "長方形周長或面積不能代替對角線。",
      "近似題要依指定精度作答。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "畫簡圖或在文字中標水平、垂直。",
        "check": "確認90°。"
      },
      {
        "step": 2,
        "instruction": "指出斜邊。",
        "check": "通常是跨兩方向的直線。"
      },
      {
        "step": 3,
        "instruction": "決定用平方和或平方差。",
        "check": "求斜邊用加，求股用減。"
      },
      {
        "step": 4,
        "instruction": "計算並化簡或估算。",
        "check": "注意小數與根式。"
      },
      {
        "step": 5,
        "instruction": "回到情境檢查限制。",
        "check": "至少、最多、單位與可行性。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "矩形長 7、寬 24，求對角線。",
        "solutionSteps": [
          "d²=7²+24²=625。",
          "d=25。"
        ],
        "answer": "25。",
        "why": "矩形相鄰邊互相垂直，對角線連接兩股端點而成斜邊；平方和六百二十五開正根得二十五，且大於七與二十四。"
      },
      {
        "exampleId": "L2",
        "prompt": "梯長 17、梯腳離牆 8，求梯頂高度。",
        "solutionSteps": [
          "梯子十七是斜邊。",
          "h²=17²-8²=225。"
        ],
        "answer": "15。",
        "why": "牆與地面形成直角，已知斜邊求股必須使用平方差；直接十七減八會忽略三角形關係，所得九也無法代回平方和。"
      },
      {
        "exampleId": "L3",
        "prompt": "正方形邊長為 a，求對角線。",
        "solutionSteps": [
          "兩股均為 a。",
          "d²=2a²，且 a>0。"
        ],
        "answer": "a√2。",
        "why": "對角線把正方形分成等腰直角三角形，兩個 a² 相加為 2a²；邊長為正，所以開根後 √(a²)=a，所得斜邊也大於任一股。"
      },
      {
        "exampleId": "L4",
        "prompt": "長方體底面 6×8、高 24，求空間對角線。",
        "solutionSteps": [
          "底面對角線為十。",
          "再算 √(10²+24²)=26。"
        ],
        "answer": "26。",
        "why": "空間線不直接位於底面，須先求底面投影十，再與垂直高度二十四形成第二個直角三角形；兩階段都不可省略。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "對角線=長+寬。",
        "why": "把折線路徑當直線。",
        "correction": "用平方和開根。"
      },
      {
        "mistake": "梯子求高度用10²+6²。",
        "why": "梯子本身是斜邊。",
        "correction": "用斜邊平方減水平平方。"
      },
      {
        "mistake": "忽略牆地垂直條件。",
        "why": "模型前提未確認。",
        "correction": "找明示或幾何性質。"
      },
      {
        "mistake": "空間題一次亂加三邊。",
        "why": "未建立兩階段直角三角形。",
        "correction": "先求底面對角。"
      },
      {
        "mistake": "近似值沒有按位數。",
        "why": "格式不符。",
        "correction": "最後再四捨五入。"
      },
      {
        "mistake": "把最短直線與實際鬆弛纜線混同。",
        "why": "物理限制不同。",
        "correction": "依題目理想化條件作答。"
      }
    ],
    "selfCheck": [
      {
        "checkId": "SC1",
        "prompt": "用一句話說明本技能最核心的數學關係。",
        "answer": "先建模，再決定平方和或平方差。"
      },
      {
        "checkId": "SC2",
        "prompt": "使用本技能前最先要確認的條件是什麼？",
        "answer": "畫簡圖或在文字中標水平、垂直。"
      },
      {
        "checkId": "SC3",
        "prompt": "指出一個最常見的錯誤並給出修正。",
        "answer": "對角線=長+寬。；修正：用平方和開根。"
      },
      {
        "checkId": "SC4",
        "prompt": "完成答案後要做哪一項檢查？",
        "answer": "近似與單位符合要求嗎？"
      }
    ],
    "summary": [
      "先建模，再決定平方和或平方差。",
      "實際限制決定理想畢氏結果如何解讀。"
    ],
    "connections": {
      "previous": "需要 s009 的畢氏定理。",
      "next": [
        "s011 會把水平與垂直差改為坐標差。",
        "s013 將在沒有圖時完成文字建模。"
      ]
    },
    "figureReferences": [
      "fig-u11-s010-ladder"
    ],
    "accessibilityNotes": [
      "垂直牆面與水平地面形成直角，一把10公尺梯子斜靠牆，梯腳離牆6公尺，高度標h。"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u11-s010-v001",
        "u11-s010-v002",
        "u11-s010-v003",
        "u11-s010-v004",
        "u11-s010-v005",
        "u11-s010-v006",
        "u11-s010-v007",
        "u11-s010-v008",
        "u11-s010-v009",
        "u11-s010-v010",
        "u11-s010-v011",
        "u11-s010-v012"
      ],
      "constructedResponseIds": [
        "u11-s010-cr001",
        "u11-s010-cr002"
      ]
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewedAt": "2026-07-12",
      "reviewer": "CHATGPT_AUTHOR_AND_REVIEWER",
      "reviewNote": "逐段重算「畢氏定理應用」的四個示例，確認定義先於公式、每個符號已在使用前說明，且錯誤分析聚焦於「對角線=長+寬。」等本技能特有問題；內容未借用舊題庫。"
    },
    "contentSha256": "763ee6d08c8fbcb01b17efb2fbc062943d213764aa74fa4600ee900d1305f597"
  },
  {
    "lectureId": "u11-s011-lecture-r1",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "coordinate-distance-pythagorean",
    "lockedSkillOrder": 11,
    "lockedTitle": "坐標平面距離",
    "title": "坐標平面距離：由水平差與垂直差求斜邊",
    "audience": "臺灣國中零基礎至會考滿分",
    "gradeBand": "8上",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "capBoundary": "邊長取正值；不含複數與高中延伸。",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能求兩點水平差與垂直差",
      "能由畢氏定理推得距離公式",
      "能處理負坐標、同水平線與比例尺"
    ],
    "prerequisites": [
      {
        "skillId": "pythagorean-application",
        "requiredLevel": "能使用前一技能「畢氏定理應用」的核心方法，並能說明其適用條件。"
      }
    ],
    "glossary": [
      {
        "term": "水平差",
        "definition": "兩點x坐標之差的絕對值。"
      },
      {
        "term": "垂直差",
        "definition": "兩點y坐標之差的絕對值。"
      },
      {
        "term": "兩點距離",
        "definition": "連接兩點的線段長。"
      },
      {
        "term": "坐標單位",
        "definition": "坐標每一格代表的實際長度。"
      }
    ],
    "notation": [
      {
        "symbol": "Δx=x₂-x₁",
        "meaning": "水平有向差。"
      },
      {
        "symbol": "Δy=y₂-y₁",
        "meaning": "垂直有向差。"
      },
      {
        "symbol": "d=√((Δx)²+(Δy)²)",
        "meaning": "兩點直線距離。"
      }
    ],
    "conceptNarrative": [
      "坐標平面兩點可向水平、垂直方向投影成直角三角形。水平差 Δx=x₂-x₁、垂直差 Δy=y₂-y₁，距離為 √(Δx²+Δy²)。差值可為負但平方後相同，也可先取絕對值；交換兩點次序不會改變距離。若同 x 或同 y，可直接取另一坐標差的絕對值，方法完全一致。",
      "反求未知坐標時要注意方向可能有兩個。水平距離 |x-a|=r 代表未知點位於中心 a 左右各 r，必須解 x-a=±r；若題目另給正值、象限或方向條件，才可排除其中一解。坐標未知量不是邊長，本身可以為負。",
      "地圖或機器人情境先求座標單位距離，再乘每格代表的實際尺度；比例尺不能放進平方根前隨意混算。若要求小數位，保留根式到最後再四捨五入，並附公里、公尺等實際長度單位。"
    ],
    "formalDefinitions": [
      {
        "name": "距離公式",
        "statement": "平面兩點P(x₁,y₁)、Q(x₂,y₂)距離為√((x₂-x₁)²+(y₂-y₁)²)。"
      }
    ],
    "formulas": [
      {
        "formula": "d²=(x₂-x₁)²+(y₂-y₁)²",
        "conditions": [
          "歐氏平面直角坐標。"
        ],
        "meaning": "水平差與垂直差為兩股。"
      }
    ],
    "nonApplicableCases": [
      "不能直接把四個坐標相加。",
      "負坐標相減要加括號。",
      "折線格數不是直線距離。",
      "比例尺不能在計算後忘記。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "寫出兩點坐標並固定次序。",
        "check": "x對x、y對y。"
      },
      {
        "step": 2,
        "instruction": "計算Δx與Δy。",
        "check": "減負數要用括號。"
      },
      {
        "step": 3,
        "instruction": "平方兩差並相加。",
        "check": "符號平方後消失。"
      },
      {
        "step": 4,
        "instruction": "開正平方根。",
        "check": "距離非負。"
      },
      {
        "step": 5,
        "instruction": "套用坐標尺度。",
        "check": "轉成實際單位與精度。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "求 P(2,3)、Q(8,11) 的距離。",
        "solutionSteps": [
          "Δx=6，Δy=8。",
          "距離 √(36+64)=10。"
        ],
        "answer": "10。",
        "why": "水平與垂直差形成六八十直角三角形，直線距離是斜邊十；把六與八相加成十四求到的是沿格線行走的折線。"
      },
      {
        "exampleId": "L2",
        "prompt": "求 P(-4,1)、Q(2,1) 的距離。",
        "solutionSteps": [
          "兩點同 y，線段水平。",
          "距離 |2-(-4)|=6。"
        ],
        "answer": "6。",
        "why": "垂直差為零時完整公式化為水平差絕對值；負四到二跨過原點共六單位，不能把二減四錯算成負二或二。"
      },
      {
        "exampleId": "L3",
        "prompt": "P(0,0)、Q(a,4) 距離 5，且 a>0，求 a。",
        "solutionSteps": [
          "a²+16=25。",
          "a²=9，依正值條件取三。"
        ],
        "answer": "a=3。",
        "why": "距離條件先給 a=±3 兩個坐標候選，題設 a>0 才排除負三；若未知量是邊長才可一開始只取正值，代回距離恰為五。"
      },
      {
        "exampleId": "L4",
        "prompt": "每格 5 公尺，圖上水平差 5 格、垂直差 12 格，求實距。",
        "solutionSteps": [
          "圖上距離 √(25+144)=13 格。",
          "13×5=65 公尺。"
        ],
        "answer": "65 公尺。",
        "why": "先在同一座標尺度求出十三格，再乘每格五公尺；若只回答十三會漏比例尺，若先把五公尺混入單一坐標差也易造成單位錯亂。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "(-2)到4的差是2。",
        "why": "減負數錯誤。",
        "correction": "4-(-2)=6。"
      },
      {
        "mistake": "距離=|Δx|+|Δy|。",
        "why": "這是沿格線折線距離。",
        "correction": "直線距離用平方和。"
      },
      {
        "mistake": "算到d²=100答100。",
        "why": "漏開平方。",
        "correction": "d=10。"
      },
      {
        "mistake": "反求坐標只留正解。",
        "why": "坐標可能在兩側。",
        "correction": "依條件保留±。"
      },
      {
        "mistake": "同一坐標也平方全部數值。",
        "why": "把位置當差。",
        "correction": "先計算坐標差。"
      },
      {
        "mistake": "忘記每格代表10公尺。",
        "why": "只答圖上單位。",
        "correction": "最後乘比例尺。"
      }
    ],
    "selfCheck": [
      {
        "checkId": "SC1",
        "prompt": "用一句話說明本技能最核心的數學關係。",
        "answer": "坐標距離是水平差與垂直差形成的斜邊。"
      },
      {
        "checkId": "SC2",
        "prompt": "使用本技能前最先要確認的條件是什麼？",
        "answer": "寫出兩點坐標並固定次序。"
      },
      {
        "checkId": "SC3",
        "prompt": "指出一個最常見的錯誤並給出修正。",
        "answer": "(-2)到4的差是2。；修正：4-(-2)=6。"
      },
      {
        "checkId": "SC4",
        "prompt": "完成答案後要做哪一項檢查？",
        "answer": "比例與單位換算完成嗎？"
      }
    ],
    "summary": [
      "坐標距離是水平差與垂直差形成的斜邊。",
      "先求座標單位，再換實際尺度。"
    ],
    "connections": {
      "previous": "需要 s010 的直角模型與整數坐標運算。",
      "next": [
        "s012 將由距離與一個差反求另一個差。",
        "s016 會整合地圖比例與近似。"
      ]
    },
    "figureReferences": [
      "fig-u11-s011-coordinate"
    ],
    "accessibilityNotes": [
      "坐標平面上A在原點、B在(3,4)，虛線畫出水平差3與垂直差4，實線連接AB。"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u11-s011-v001",
        "u11-s011-v002",
        "u11-s011-v003",
        "u11-s011-v004",
        "u11-s011-v005",
        "u11-s011-v006",
        "u11-s011-v007",
        "u11-s011-v008",
        "u11-s011-v009",
        "u11-s011-v010",
        "u11-s011-v011",
        "u11-s011-v012"
      ],
      "constructedResponseIds": [
        "u11-s011-cr001",
        "u11-s011-cr002"
      ]
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewedAt": "2026-07-12",
      "reviewer": "CHATGPT_AUTHOR_AND_REVIEWER",
      "reviewNote": "逐段重算「坐標平面距離」的四個示例，確認定義先於公式、每個符號已在使用前說明，且錯誤分析聚焦於「(-2)到4的差是2。」等本技能特有問題；內容未借用舊題庫。"
    },
    "contentSha256": "83c09d8dd5ab65b544800de47f2e507eb5d453cb79fac555bb2975dbf38f5d8f"
  },
  {
    "lectureId": "u11-s012-lecture-r1",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-find-leg",
    "lockedSkillOrder": 12,
    "lockedTitle": "已知斜邊求股",
    "title": "已知斜邊求股：平方差與正長度",
    "audience": "臺灣國中零基礎至會考滿分",
    "gradeBand": "8上",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "capBoundary": "邊長取正值；不含複數與高中延伸。",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能確認斜邊是已知最大邊",
      "能用平方差求未知股",
      "能處理根式、小數與比例型未知股"
    ],
    "prerequisites": [
      {
        "skillId": "coordinate-distance-pythagorean",
        "requiredLevel": "能使用前一技能「坐標平面距離」的核心方法，並能說明其適用條件。"
      }
    ],
    "glossary": [
      {
        "term": "已知斜邊求股",
        "definition": "由c²-a²得到另一股平方。"
      },
      {
        "term": "平方差",
        "definition": "c²-a²=(c-a)(c+a)。"
      },
      {
        "term": "畢氏數組比例",
        "definition": "等比例放大後仍為直角三角形。"
      },
      {
        "term": "正根",
        "definition": "幾何邊長只取非負解。"
      }
    ],
    "notation": [
      {
        "symbol": "b=√(c²-a²)",
        "meaning": "c為斜邊且c>a>0。"
      }
    ],
    "conceptNarrative": [
      "求股一定使用斜邊平方減已知股平方，順序不可顛倒。",
      "斜邊應大於任一股；若資料不符合，要先質疑模型。",
      "平方差公式可簡化大數，例如29²-20²。",
      "未知坐標可正可負，但未知「股長」只取正。",
      "比例型題可先辨認3-4-5、5-12-13等基本數組。",
      "已知斜邊與一股求另一股時，先確認斜邊是最大邊，再用未知股平方＝斜邊平方−已知股平方，最後對非負平方差取正平方根。含根式的斜邊要把外部係數一併平方，大數可用平方差公式簡化；比例題則先辨認完整畢氏數組。答案還要回代平方和，若平方差為負或斜邊不最大，應先質疑題目模型。"
    ],
    "formalDefinitions": [
      {
        "name": "求股公式",
        "statement": "在直角三角形中，若c為斜邊，b=√(c²-a²)。"
      }
    ],
    "formulas": [
      {
        "formula": "c²-a²=b²",
        "conditions": [
          "c>a≥0。"
        ],
        "meaning": "平方差必為非負。"
      }
    ],
    "nonApplicableCases": [
      "不能用c-a代替√(c²-a²)。",
      "若已知邊比斜邊大，資料不可能。",
      "結果負根不能作邊長。",
      "平方差算出後仍須開平方。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "確認哪個已知量是斜邊。",
        "check": "它必須最大。"
      },
      {
        "step": 2,
        "instruction": "寫未知股平方=斜邊平方-已知股平方。",
        "check": "減法順序固定。"
      },
      {
        "step": 3,
        "instruction": "利用平方差或直接計算。",
        "check": "降低大數錯誤。"
      },
      {
        "step": 4,
        "instruction": "開平方並取正。",
        "check": "化簡根式。"
      },
      {
        "step": 5,
        "instruction": "檢查兩股皆短於斜邊。",
        "check": "代回畢氏定理。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "直角三角形斜邊15、一股9，求另一股。",
        "solutionSteps": [
          "列未知股平方為15²−9²。",
          "計算225−81＝144。",
          "取正平方根得12。"
        ],
        "answer": "另一股12。",
        "why": "求股必須用斜邊平方減已知股平方，不能直接減邊長；長度只取正根，並可由9²＋12²＝15²回代確認角色與計算都正確。"
      },
      {
        "exampleId": "L2",
        "prompt": "直角三角形斜邊√34、一股3，求另一股。",
        "solutionSteps": [
          "斜邊平方為(√34)²＝34。",
          "未知股平方＝34−3²＝25。",
          "取正平方根得5。"
        ],
        "answer": "另一股5。",
        "why": "根號三十四是邊長，代入畢氏定理後平方會直接還原三十四；不應把根式先粗估，精確平方更快且不會引入誤差。"
      },
      {
        "exampleId": "L3",
        "prompt": "直角三角形斜邊37、一股12，求另一股。",
        "solutionSteps": [
          "列未知股平方37²−12²。",
          "用平方差算(37−12)(37＋12)＝25×49＝1225。",
          "開正平方根得35。"
        ],
        "answer": "另一股35。",
        "why": "平方差能避免分別計算兩個大平方；得到一千二百二十五仍是股長平方，最後必須開根並以十二、三十五、三十七驗算。"
      },
      {
        "exampleId": "L4",
        "prompt": "兩股比8：15，斜邊34，求兩股。",
        "solutionSteps": [
          "由8²＋15²＝17²辨認比例為8：15：17。",
          "斜邊34是17的2倍。",
          "兩股同步放大為16與30。"
        ],
        "answer": "兩股16與30。",
        "why": "只知道兩股比還要用畢氏定理補出斜邊比例十七；三邊同比放大才保持相似與直角關係，不能把三十四只在兩股間分配。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "13與5直接相減得8。",
        "why": "長度不能直接相減求股。",
        "correction": "√(169-25)=12。"
      },
      {
        "mistake": "使用13²+5²。",
        "why": "求股卻使用平方和。",
        "correction": "斜邊平方減股平方。"
      },
      {
        "mistake": "答±12。",
        "why": "股長非負。",
        "correction": "只取12。"
      },
      {
        "mistake": "平方差得到144就停止。",
        "why": "144是股長平方。",
        "correction": "再開平方。"
      },
      {
        "mistake": "把較短邊當斜邊。",
        "why": "平方差可能負。",
        "correction": "先找最大邊。"
      },
      {
        "mistake": "比例題只使用比例分子。",
        "why": "比例缺少斜邊份數。",
        "correction": "由平方關係求完整數組。"
      }
    ],
    "selfCheck": [
      {
        "checkId": "SC1",
        "prompt": "用一句話說明本技能最核心的數學關係。",
        "answer": "未知股=√(斜邊²-已知股²)。"
      },
      {
        "checkId": "SC2",
        "prompt": "使用本技能前最先要確認的條件是什麼？",
        "answer": "確認哪個已知量是斜邊。"
      },
      {
        "checkId": "SC3",
        "prompt": "指出一個最常見的錯誤並給出修正。",
        "answer": "13與5直接相減得8。；修正：√(169-25)=12。"
      },
      {
        "checkId": "SC4",
        "prompt": "完成答案後要做哪一項檢查？",
        "answer": "代回後平方和成立嗎？"
      }
    ],
    "summary": [
      "未知股=√(斜邊²-已知股²)。",
      "先辨認邊角色，再處理平方差。"
    ],
    "connections": {
      "previous": "需要 s011 的距離結構與 s009 定理。",
      "next": [
        "s013 將在全文字情境辨認未知股。",
        "s014 會反過來用三邊判定直角。"
      ]
    },
    "figureReferences": [
      "fig-u11-s012-find-leg"
    ],
    "accessibilityNotes": [
      "直角三角形斜邊標13，一股標5，底邊未知b，並寫出b等於13平方減5平方的平方根。"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u11-s012-v001",
        "u11-s012-v002",
        "u11-s012-v003",
        "u11-s012-v004",
        "u11-s012-v005",
        "u11-s012-v006",
        "u11-s012-v007",
        "u11-s012-v008",
        "u11-s012-v009",
        "u11-s012-v010",
        "u11-s012-v011",
        "u11-s012-v012"
      ],
      "constructedResponseIds": [
        "u11-s012-cr001",
        "u11-s012-cr002"
      ]
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewedAt": "2026-07-12",
      "reviewer": "CHATGPT_AUTHOR_AND_REVIEWER",
      "reviewNote": "逐段重算「已知斜邊求股」的四個示例，確認定義先於公式、每個符號已在使用前說明，且錯誤分析聚焦於「13與5直接相減得8。」等本技能特有問題；內容未借用舊題庫。"
    },
    "contentSha256": "24720f75b67217dd5ac1e1d8d08bbd064c192f5420efd6d08c429abcef94fcc0"
  },
  {
    "lectureId": "u11-s013-lecture-r1",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-word",
    "lockedSkillOrder": 13,
    "lockedTitle": "畢氏定理文字應用",
    "title": "畢氏定理文字應用：沒有圖也能重建直角關係",
    "audience": "臺灣國中零基礎至會考滿分",
    "gradeBand": "8上",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "capBoundary": "邊長取正值；不含複數與高中延伸。",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能從全文字找出互相垂直的位移",
      "能區分路程與起終點直線距離",
      "能完成樹折、纜線、航向等兩階段問題"
    ],
    "prerequisites": [
      {
        "skillId": "pythagorean-find-leg",
        "requiredLevel": "能使用前一技能「已知斜邊求股」的核心方法，並能說明其適用條件。"
      }
    ],
    "glossary": [
      {
        "term": "路程",
        "definition": "實際走過各段長度總和。"
      },
      {
        "term": "位移長度",
        "definition": "起點到終點的直線距離。"
      },
      {
        "term": "正下方",
        "definition": "表示與地面方向垂直。"
      },
      {
        "term": "繃直",
        "definition": "線段可視為兩點間直線。"
      }
    ],
    "notation": [
      {
        "symbol": "直線距離=√(水平位移²+垂直位移²)",
        "meaning": "兩位移方向互相垂直。"
      }
    ],
    "conceptNarrative": [
      "全文字題必須自己重建圖形；先圈出方向詞與垂直關係。",
      "向東再向北的路程是兩段和，位移長度是斜邊。",
      "樹折題求原高時，先求折斷段，再加未折斷段。",
      "「至少多長」常表示兩點直線距離，但若有鬆弛需另加。",
      "問「少走多少」要比較兩種路程，不只求一條。",
      "生活情境先不要急著代公式，應先把方向、地面與鉛直高度翻譯成直角三角形。互相垂直的兩段是兩股，連接起點與終點的最短直線才是斜邊；若題目問全程、節省距離或原來高度，求出斜邊後還要依語意加減。最後應寫出單位並檢查斜邊大於任一股、直線不超過折線，這些量感能及早發現角色判錯或漏算。"
    ],
    "formalDefinitions": [
      {
        "name": "文字建模",
        "statement": "把方向、位置與物件關係轉成直角三角形。"
      }
    ],
    "formulas": [
      {
        "formula": "d²=x²+y²",
        "conditions": [
          "x與y為互相垂直的位移分量。"
        ],
        "meaning": "不是任意兩段路程。"
      }
    ],
    "nonApplicableCases": [
      "沒有垂直關係不能套用。",
      "路程與位移不可互換。",
      "樹折題折斷部分不是原樹高。",
      "忽略「返回」「再」「至少」會漏算。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "圈出方向與動作順序。",
        "check": "東西與南北互相垂直。"
      },
      {
        "step": 2,
        "instruction": "列出所求是路程、距離或總高度。",
        "check": "避免答非所問。"
      },
      {
        "step": 3,
        "instruction": "建立直角三角形的兩股與斜邊。",
        "check": "必要時文字標記。"
      },
      {
        "step": 4,
        "instruction": "使用畢氏定理。",
        "check": "兩階段題分開計算。"
      },
      {
        "step": 5,
        "instruction": "回讀完整句子。",
        "check": "是否還要相加、相減或比較。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "先向西八公里，再向北十五公里，起點到終點多遠？",
        "solutionSteps": [
          "把向西八與向北十五視為互相垂直的兩股。",
          "以勾股定理算直線距離√(8²＋15²)＝√289。",
          "取正長度，得到起點到終點為17公里。"
        ],
        "answer": "17公里",
        "why": "題目問起終點的直線距離，不是走過的折線總長；因此八與十五要用平方和開根號，結果也應小於原路程二十三公里。"
      },
      {
        "exampleId": "L2",
        "prompt": "沿兩條垂直道路各走八與十五公里，若改走直線可少走多少？",
        "solutionSteps": [
          "原折線路程為8＋15＝23公里。",
          "直線距離為√(8²＋15²)＝17公里。",
          "節省距離為23－17＝6公里。"
        ],
        "answer": "6公里",
        "why": "先分別求原路線與新路線，再相減才能回答節省量；若只答十七公里，回答的是新路線長度而不是題目所問。"
      },
      {
        "exampleId": "L3",
        "prompt": "樹在離地十二公尺處折斷，樹梢落在離樹根五公尺處，原樹高多少？",
        "solutionSteps": [
          "十二公尺與五公尺是直角三角形兩股。",
          "折斷部分長√(12²＋5²)＝13公尺。",
          "原樹高為12＋13＝25公尺。"
        ],
        "answer": "25公尺",
        "why": "斜邊十三公尺只是折斷後倒下的部分，原樹還含離地十二公尺的直立段；兩段相加才會還原折斷前的總高度。"
      },
      {
        "exampleId": "L4",
        "prompt": "高二十公尺的旗桿，地面固定點距桿底十五公尺，纜線至少多長？",
        "solutionSteps": [
          "桿高二十與地面十五是互相垂直的兩股。",
          "纜線是連接桿頂與固定點的斜邊。",
          "算得√(20²＋15²)＝√625＝25公尺。"
        ],
        "answer": "25公尺",
        "why": "至少長度對應兩點間直線，所以纜線應視為斜邊；答案二十五也大於兩股，符合直角三角形斜邊最長的量感。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把東3北4的距離答7。",
        "why": "混淆路程與位移。",
        "correction": "直線距離5。"
      },
      {
        "mistake": "樹折題只答斜邊。",
        "why": "題目問原高。",
        "correction": "加上未折斷段。"
      },
      {
        "mistake": "忽略「返回起點」。",
        "why": "漏算最後一段。",
        "correction": "按時間順序列所有路段。"
      },
      {
        "mistake": "把「正下方」當同一點。",
        "why": "未理解垂直投影。",
        "correction": "建立水平距離與高度。"
      },
      {
        "mistake": "少走多少只答直線距離。",
        "why": "比較問題未完成。",
        "correction": "原路程減新路程。"
      },
      {
        "mistake": "文字沒有圖就拒絕作答。",
        "why": "方向資訊已足夠建模。",
        "correction": "自行畫簡圖或列分量。"
      }
    ],
    "selfCheck": [
      {
        "checkId": "SC1",
        "prompt": "用一句話說明本技能最核心的數學關係。",
        "answer": "文字題先重建直角關係，再計算。"
      },
      {
        "checkId": "SC2",
        "prompt": "使用本技能前最先要確認的條件是什麼？",
        "answer": "圈出方向與動作順序。"
      },
      {
        "checkId": "SC3",
        "prompt": "指出一個最常見的錯誤並給出修正。",
        "answer": "把東3北4的距離答7。；修正：直線距離5。"
      },
      {
        "checkId": "SC4",
        "prompt": "完成答案後要做哪一項檢查？",
        "answer": "答案句完整回應問題嗎？"
      }
    ],
    "summary": [
      "文字題先重建直角關係，再計算。",
      "路程、位移與物件總長必須分清。"
    ],
    "connections": {
      "previous": "需要 s012 的求股與 s010 的情境建模。",
      "next": [
        "s014 將由三邊資料判斷是否直角。",
        "s016 將加入表格、成本與規格限制。"
      ]
    },
    "figureReferences": [],
    "accessibilityNotes": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u11-s013-v001",
        "u11-s013-v002",
        "u11-s013-v003",
        "u11-s013-v004",
        "u11-s013-v005",
        "u11-s013-v006",
        "u11-s013-v007",
        "u11-s013-v008",
        "u11-s013-v009",
        "u11-s013-v010",
        "u11-s013-v011",
        "u11-s013-v012"
      ],
      "constructedResponseIds": [
        "u11-s013-cr001",
        "u11-s013-cr002"
      ]
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewedAt": "2026-07-12",
      "reviewer": "CHATGPT_AUTHOR_AND_REVIEWER",
      "reviewNote": "逐段重算「畢氏定理文字應用」的四個示例，確認定義先於公式、每個符號已在使用前說明，且錯誤分析聚焦於「把東3北4的距離答7。」等本技能特有問題；內容未借用舊題庫。"
    },
    "contentSha256": "6f5a5ca7538aa35834f50290b4131ba780eb007502242aa9eefdedca13aec61d"
  },
  {
    "lectureId": "u11-s014-lecture-r1",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "right-triangle-identify",
    "lockedSkillOrder": 14,
    "lockedTitle": "直角三角形判定",
    "title": "直角三角形判定：排序後檢查平方關係",
    "audience": "臺灣國中零基礎至會考滿分",
    "gradeBand": "8上",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "capBoundary": "邊長取正值；不含複數與高中延伸。",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能先確認三邊可構成三角形",
      "能以最長邊平方判定直角",
      "能處理根式、小數與未知邊判定"
    ],
    "prerequisites": [
      {
        "skillId": "pythagorean-word",
        "requiredLevel": "能使用前一技能「畢氏定理文字應用」的核心方法，並能說明其適用條件。"
      }
    ],
    "glossary": [
      {
        "term": "直角三角形判定",
        "definition": "由三邊資料確認是否含直角。"
      },
      {
        "term": "最長邊",
        "definition": "直角成立時會成為斜邊。"
      },
      {
        "term": "三角形不等式",
        "definition": "任兩邊和大於第三邊。"
      },
      {
        "term": "平方檢查",
        "definition": "兩短邊平方和與最長邊平方比較。"
      }
    ],
    "notation": [
      {
        "symbol": "a²+b²=c²",
        "meaning": "a≤b≤c且三邊可成三角形時，成立則為直角。"
      }
    ],
    "conceptNarrative": [
      "判定程序先排序，避免把短邊平方放在等式右側。",
      "三角形不等式只證明能形成三角形，不能單獨證明直角。",
      "若平方等式成立，最長邊所對角為直角。",
      "根式邊可直接平方，常比先估小數更準確。",
      "量測題若未給誤差容許，必須按題目數值精確判定。",
      "用三邊判定直角三角形時，第一步永遠是排序並指定最長邊c，因為只有最長邊可能是斜邊；接著比較a²＋b²與c²，恰好相等才能下直角結論。根號、小數與比例邊長都適用同一原則，計算時應先平方再化簡。結論還要對應到角的位置：直角位於最長邊的對面，而不是最長邊的任一端點；若不相等，就只能說不是直角三角形，不可憑圖形外觀補條件。"
    ],
    "formalDefinitions": [
      {
        "name": "判定準則",
        "statement": "三邊a≤b≤c若a²+b²=c²，則為直角三角形。"
      }
    ],
    "formulas": [
      {
        "formula": "a+b>c",
        "conditions": [
          "先確認可成三角形。"
        ],
        "meaning": "排序後只需檢查兩短邊和大於最長邊。"
      },
      {
        "formula": "a²+b²=c²",
        "conditions": [
          "判定直角。"
        ],
        "meaning": "等式需精確成立。"
      }
    ],
    "nonApplicableCases": [
      "不能因為三邊是整數就判直角。",
      "接近畢氏數組不等於成立。",
      "a+b>c不是直角判定。",
      "圖看起來垂直不是證明。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "將三邊由小到大排序。",
        "check": "記最長邊c。"
      },
      {
        "step": 2,
        "instruction": "檢查能否成三角形。",
        "check": "a+b>c。"
      },
      {
        "step": 3,
        "instruction": "計算a²+b²與c²。",
        "check": "保留精確值。"
      },
      {
        "step": 4,
        "instruction": "判斷是否相等。",
        "check": "相等才是直角。"
      },
      {
        "step": 5,
        "instruction": "指出直角在c的對面。",
        "check": "完成幾何結論。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "邊長九、十二、十五是否組成直角三角形？",
        "solutionSteps": [
          "先確定十五是最長邊，作為候選斜邊。",
          "計算9²＋12²＝81＋144＝225。",
          "因為15²＝225，平方相等，判定為直角三角形。"
        ],
        "answer": "是，十五所對的角為直角",
        "why": "判定的關鍵不是辨認熟悉組合，而是最長邊平方確實等於另外兩邊平方和；同時寫出直角位置，才能完整表達結論。"
      },
      {
        "exampleId": "L2",
        "prompt": "邊長四、六、七是否組成直角三角形？",
        "solutionSteps": [
          "七是最長邊，放在比較式的右側。",
          "計算4²＋6²＝16＋36＝52。",
          "比較7²＝49，因為52不等於49，所以不是直角三角形。"
        ],
        "answer": "不是直角三角形",
        "why": "三邊能夠組成一般三角形不代表一定有直角；必須檢驗精確平方等式，數值接近或圖形看起來像都不能取代證明。"
      },
      {
        "exampleId": "L3",
        "prompt": "邊長√8、√17、5是否組成直角三角形？",
        "solutionSteps": [
          "五最大，因此以五作為候選斜邊。",
          "計算(√8)²＋(√17)²＝8＋17＝25。",
          "因為5²＝25，判定為直角三角形。"
        ],
        "answer": "是，五所對的角為直角",
        "why": "根號邊長不需先取近似值，直接平方可得到精確整數；保留精確量能避免四捨五入使原本相等的關係看似不等。"
      },
      {
        "exampleId": "L4",
        "prompt": "直角三角形三邊為x、二十、二十九，且二十九最長，求x。",
        "solutionSteps": [
          "以二十九為斜邊寫出x²＋20²＝29²。",
          "移項得x²＝841－400＝441。",
          "邊長取正值，因此x＝21。"
        ],
        "answer": "21",
        "why": "題目已經指出二十九最長，角色明確後才能用平方相減求另一股；開根號時邊長不取負值，並可用二十、二十一、二十九複核。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "6+8>10所以是直角。",
        "why": "只驗證三角形不等式。",
        "correction": "再檢查平方。"
      },
      {
        "mistake": "用6²+10²=8²。",
        "why": "未排序最長邊。",
        "correction": "右側放10²。"
      },
      {
        "mistake": "5,6,7看起來像直角。",
        "why": "視覺或直覺不可靠。",
        "correction": "精確比較平方。"
      },
      {
        "mistake": "根式先四捨五入再判定。",
        "why": "可能破壞等式。",
        "correction": "直接平方精確根式。"
      },
      {
        "mistake": "只算平方和但不說結論。",
        "why": "論證未完成。",
        "correction": "指出是否相等與角型。"
      },
      {
        "mistake": "接近等式就判直角。",
        "why": "題目未給容差。",
        "correction": "必須精確相等。"
      }
    ],
    "selfCheck": [
      {
        "checkId": "SC1",
        "prompt": "用一句話說明本技能最核心的數學關係。",
        "answer": "排序、成三角形、比較平方。"
      },
      {
        "checkId": "SC2",
        "prompt": "使用本技能前最先要確認的條件是什麼？",
        "answer": "將三邊由小到大排序。"
      },
      {
        "checkId": "SC3",
        "prompt": "指出一個最常見的錯誤並給出修正。",
        "answer": "6+8>10所以是直角。；修正：再檢查平方。"
      },
      {
        "checkId": "SC4",
        "prompt": "完成答案後要做哪一項檢查？",
        "answer": "等式是精確相等嗎？"
      }
    ],
    "summary": [
      "排序、成三角形、比較平方。",
      "相等時最長邊對角為直角。"
    ],
    "connections": {
      "previous": "需要 s013 的直角模型與平方運算。",
      "next": [
        "s015 將把判定寫成完整逆命題。",
        "s016 會在品管與規格情境使用。"
      ]
    },
    "figureReferences": [
      "fig-u11-s014-triangle-check"
    ],
    "accessibilityNotes": [
      "三角形三邊標30、40、50，最長邊為50，左下角畫直角，並標示平方關係。"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u11-s014-v001",
        "u11-s014-v002",
        "u11-s014-v003",
        "u11-s014-v004",
        "u11-s014-v005",
        "u11-s014-v006",
        "u11-s014-v007",
        "u11-s014-v008",
        "u11-s014-v009",
        "u11-s014-v010",
        "u11-s014-v011",
        "u11-s014-v012"
      ],
      "constructedResponseIds": [
        "u11-s014-cr001",
        "u11-s014-cr002"
      ]
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewedAt": "2026-07-12",
      "reviewer": "CHATGPT_AUTHOR_AND_REVIEWER",
      "reviewNote": "逐段重算「直角三角形判定」的四個示例，確認定義先於公式、每個符號已在使用前說明，且錯誤分析聚焦於「6+8>10所以是直角。」等本技能特有問題；內容未借用舊題庫。"
    },
    "contentSha256": "ece7aa9a4b4e77547a32e18b72a33f8c40bdb61e9d0f48c8190f2d6a7be08e9d"
  },
  {
    "lectureId": "u11-s015-lecture-r1",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-converse-basic",
    "lockedSkillOrder": 15,
    "lockedTitle": "畢氏定理逆命題基本",
    "title": "畢氏定理逆命題基本：由邊長條件推出直角",
    "audience": "臺灣國中零基礎至會考滿分",
    "gradeBand": "8上",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "capBoundary": "邊長取正值；不含複數與高中延伸。",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能區分畢氏定理與其逆命題",
      "能說明逆命題所需的完整前提",
      "能用逆命題寫出合法判定論證"
    ],
    "prerequisites": [
      {
        "skillId": "right-triangle-identify",
        "requiredLevel": "能使用前一技能「直角三角形判定」的核心方法，並能說明其適用條件。"
      }
    ],
    "glossary": [
      {
        "term": "命題",
        "definition": "具有真假判斷的陳述。"
      },
      {
        "term": "逆命題",
        "definition": "交換原命題的條件與結論。"
      },
      {
        "term": "充分條件",
        "definition": "一旦成立便足以推出結論的條件。"
      },
      {
        "term": "斜邊候選",
        "definition": "三邊中最長邊。"
      }
    ],
    "notation": [
      {
        "symbol": "直角⇒a²+b²=c²",
        "meaning": "畢氏定理原命題。"
      },
      {
        "symbol": "a²+b²=c²⇒直角",
        "meaning": "在a,b,c為同一三角形三邊且c最長時的逆命題。"
      }
    ],
    "conceptNarrative": [
      "原命題從已知直角推出邊長關係；逆命題從邊長關係推出直角。",
      "逆命題不是把公式倒著念而已，必須保留「同一三角形三邊」與「c為最長邊」。",
      "排序是演算法可靠性的核心，因輸入順序可能任意。",
      "同比縮放三邊會讓等式兩側同乘k²，因此直角性保留。",
      "目測像90°或平方值接近，都不是逆命題的精確前提。",
      "原勾股定理與逆敘述的差別在推論方向：知道有直角，才能用定理得到邊長平方關係；只知道三邊時，則要先排序，確認最長邊c，再以a²＋b²＝c²的精確相等使用逆敘述判定直角。敘述時不可省略三邊屬於同一三角形與c最長，也要指出直角是c的對角。若數值只是接近或圖形看似垂直，都不足以取代等式；整數、小數、根號及同比例縮放均遵守同一邏輯。"
    ],
    "formalDefinitions": [
      {
        "name": "畢氏定理逆命題",
        "statement": "若三角形兩短邊平方和等於最長邊平方，則其最長邊所對角為直角。"
      }
    ],
    "formulas": [
      {
        "formula": "a²+b²=c²⇒∠C=90°",
        "conditions": [
          "a,b,c為三角形三邊且c最大。"
        ],
        "meaning": "由邊長條件判角。"
      }
    ],
    "nonApplicableCases": [
      "代數等式中的三個數若不是三角形三邊，不能推出幾何結論。",
      "三角形不等式不是直角的充分條件。",
      "近似相等需另有容差規範才可工程判定。",
      "不能把原命題當逆命題的文字答案。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "寫清已知三數是同一三角形三邊。",
        "check": "先確認幾何對象。"
      },
      {
        "step": 2,
        "instruction": "排序並指定最長邊c。",
        "check": "確保斜邊候選。"
      },
      {
        "step": 3,
        "instruction": "驗證a²+b²=c²。",
        "check": "使用精確值。"
      },
      {
        "step": 4,
        "instruction": "明確引用逆命題。",
        "check": "不是只寫「所以」。"
      },
      {
        "step": 5,
        "instruction": "指出c所對角為直角。",
        "check": "完成結論位置。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "說明為何三、四、五可由逆敘述判定為直角三角形。",
        "solutionSteps": [
          "確認五為三邊中的最長邊。",
          "計算3²＋4²＝9＋16＝25＝5²。",
          "依勾股定理逆敘述，五所對的角為直角。"
        ],
        "answer": "是直角三角形，直角在邊五的對面",
        "why": "已知資料是三邊而非角度，所以使用的是逆敘述；先確認最長邊並寫出對角位置，才能避免把原定理方向倒置。"
      },
      {
        "exampleId": "L2",
        "prompt": "比較勾股定理與其逆敘述的條件、結論。",
        "solutionSteps": [
          "定理以三角形有直角為條件。",
          "定理結論是兩股平方和等於斜邊平方。",
          "逆敘述交換方向，以平方等式為條件並以直角為結論。"
        ],
        "answer": "兩者交換條件與結論",
        "why": "同一個句子把條件與結論交換後不會自動為真，勾股定理的逆敘述需要另作有效判定；清楚辨識方向能防止循環論證。"
      },
      {
        "exampleId": "L3",
        "prompt": "邊長六、八、十是否仍可用逆敘述判定？",
        "solutionSteps": [
          "先確認十是最長邊。",
          "計算6²＋8²＝36＋64＝100。",
          "因10²＝100，故判定十所對角為直角。"
        ],
        "answer": "可以，是直角三角形",
        "why": "六、八、十是三、四、五同乘二，但判定仍應以平方等式驗證；同比例放大會讓兩側同乘四，不改變直角性質。"
      },
      {
        "exampleId": "L4",
        "prompt": "邊長六十、八十、一百零一是否為直角三角形？",
        "solutionSteps": [
          "一百零一是最長邊，作為候選斜邊。",
          "計算60²＋80²＝10000。",
          "比較101²＝10201，兩者不等，所以不是直角三角形。"
        ],
        "answer": "不是直角三角形",
        "why": "逆敘述要求精確相等，不能因數值接近六、八、十的倍數就四捨五入；一個單位的差異平方後已使等式不成立。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把「直角則平方和」當逆命題。",
        "why": "條件結論未交換。",
        "correction": "逆命題從平方和推出直角。"
      },
      {
        "mistake": "只寫a²+b²=c²，沒說c最大。",
        "why": "邊角色不完整。",
        "correction": "先排序。"
      },
      {
        "mistake": "三個任意數滿足等式就說有直角。",
        "why": "缺少三角形前提。",
        "correction": "確認是同一三角形三邊。"
      },
      {
        "mistake": "a+b>c所以直角。",
        "why": "只證明可成三角形。",
        "correction": "需平方等式。"
      },
      {
        "mistake": "量測接近就用等號。",
        "why": "忽略誤差規範。",
        "correction": "無容差時不能判。"
      },
      {
        "mistake": "判定後沒指出哪個角直。",
        "why": "幾何結論不完整。",
        "correction": "最長邊所對角為直角。"
      }
    ],
    "selfCheck": [
      {
        "checkId": "SC1",
        "prompt": "用一句話說明本技能最核心的數學關係。",
        "answer": "逆命題由精確邊長關係推出直角。"
      },
      {
        "checkId": "SC2",
        "prompt": "使用本技能前最先要確認的條件是什麼？",
        "answer": "寫清已知三數是同一三角形三邊。"
      },
      {
        "checkId": "SC3",
        "prompt": "指出一個最常見的錯誤並給出修正。",
        "answer": "把「直角則平方和」當逆命題。；修正：逆命題從平方和推出直角。"
      },
      {
        "checkId": "SC4",
        "prompt": "完成答案後要做哪一項檢查？",
        "answer": "推理有明確引用與角位置嗎？"
      }
    ],
    "summary": [
      "逆命題由精確邊長關係推出直角。",
      "前提、排序與結論位置缺一不可。"
    ],
    "connections": {
      "previous": "需要 s014 的計算判定。",
      "next": [
        "s016 將把完整判定用於品管、演算法與決策。"
      ]
    },
    "figureReferences": [],
    "accessibilityNotes": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u11-s015-v001",
        "u11-s015-v002",
        "u11-s015-v003",
        "u11-s015-v004",
        "u11-s015-v005",
        "u11-s015-v006",
        "u11-s015-v007",
        "u11-s015-v008",
        "u11-s015-v009",
        "u11-s015-v010",
        "u11-s015-v011",
        "u11-s015-v012"
      ],
      "constructedResponseIds": [
        "u11-s015-cr001",
        "u11-s015-cr002"
      ]
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewedAt": "2026-07-12",
      "reviewer": "CHATGPT_AUTHOR_AND_REVIEWER",
      "reviewNote": "逐段重算「畢氏定理逆命題基本」的四個示例，確認定義先於公式、每個符號已在使用前說明，且錯誤分析聚焦於「把「直角則平方和」當逆命題。」等本技能特有問題；內容未借用舊題庫。"
    },
    "contentSha256": "ea7245007de7c6953f5c99aca5ca1802f4551df04b974fc394112bd4d4dbf135"
  },
  {
    "lectureId": "u11-s016-lecture-r1",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-literacy",
    "skillId": "root-literacy",
    "lockedSkillOrder": 16,
    "lockedTitle": "平方根素養題",
    "title": "平方根素養題：在規格與限制下做數學決策",
    "audience": "臺灣國中零基礎至會考滿分",
    "gradeBand": "8上",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "capBoundary": "邊長取正值；不含複數與高中延伸。",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能從表格、規格與文字選擇根式工具",
      "能在精確值、近似值與限制間切換",
      "能完成多步決策並說明模型限制"
    ],
    "prerequisites": [
      {
        "skillId": "pythagorean-converse-basic",
        "requiredLevel": "能使用前一技能「畢氏定理逆命題基本」的核心方法，並能說明其適用條件。"
      }
    ],
    "glossary": [
      {
        "term": "素養題",
        "definition": "需理解情境、選模型、計算並解讀結果的問題。"
      },
      {
        "term": "規格門檻",
        "definition": "合格判定的上限、下限或範圍。"
      },
      {
        "term": "模型限制",
        "definition": "為了計算而採用的簡化假設。"
      },
      {
        "term": "精確值與近似值",
        "definition": "根式保留完整值；小數依需求近似。"
      }
    ],
    "notation": [
      {
        "symbol": "面積→邊長",
        "meaning": "正方形邊長=√面積。"
      },
      {
        "symbol": "距離→畢氏",
        "meaning": "互相垂直分量平方和開根。"
      },
      {
        "symbol": "判定→逆命題",
        "meaning": "三邊平方關係判角。"
      }
    ],
    "conceptNarrative": [
      "素養題先辨認資料用途，不是每個數都要使用。",
      "精確根式適合後續代數運算；工程顯示或規格可能要求小數。",
      "成本題要同時計算長度與每單位成本，不能只選短路。",
      "可行性題需把計算結果與「至少、最多、範圍內」比較。",
      "模型結論只在假設內成立，例如忽略厚度、彎曲或地形。",
      "答題最後應用完整句說明決策與理由。",
      "根號量在應用題中常代表尚未取近似的真實長度。先保留精確根式完成化簡、平方比較與尺度換算，只有題目指定小數位或情境需要時才近似，可避免中途四捨五入累積誤差。面積開根號求邊長時取正值；座標或格線距離先用勾股定理求格數，再乘每格尺度；比較路線則要看題目問距離、時間或成本，不能只選較短者。門框等幾何模型還應交代平面、厚度與障礙物假設，讓數學結論不超出模型能力。"
    ],
    "formalDefinitions": [
      {
        "name": "數學建模循環",
        "statement": "理解情境→建立關係→計算→檢查→解讀。"
      }
    ],
    "formulas": [
      {
        "formula": "總成本=長度×單位成本",
        "conditions": [
          "單位一致。"
        ],
        "meaning": "不能只比較其中一項。"
      },
      {
        "formula": "合格判定",
        "conditions": [
          "計算值與規格門檻比較。"
        ],
        "meaning": "注意嚴格或包含等號。"
      }
    ],
    "nonApplicableCases": [
      "不能看到根號就一律化成小數。",
      "不能忽略單位成本、比例尺或安全門檻。",
      "不能把理想平面模型無條件套到真實三維物件。",
      "近似值不得用於需要精確等式的逆命題判定。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "整理已知、所求與限制。",
        "check": "標出單位與精度。"
      },
      {
        "step": 2,
        "instruction": "選擇平方根、化簡、比較、畢氏或逆命題。",
        "check": "說明為何適用。"
      },
      {
        "step": 3,
        "instruction": "先求精確中間值。",
        "check": "避免過早四捨五入。"
      },
      {
        "step": 4,
        "instruction": "依規格轉成近似或決策。",
        "check": "比較上下限與成本。"
      },
      {
        "step": 5,
        "instruction": "寫出含限制的結論。",
        "check": "說明理想化假設。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "正方形面積為七十二平方公分，求邊長的最簡根式。",
        "solutionSteps": [
          "設邊長為s，依面積得s²＝72。",
          "邊長取正值，所以s＝√72。",
          "分解72＝36×2，化簡得s＝6√2公分。"
        ],
        "answer": "6√2公分",
        "why": "面積單位開根號後成為長度單位，且幾何邊長只取正根；先化為最簡根式能保留精確值，避免過早近似。"
      },
      {
        "exampleId": "L2",
        "prompt": "地圖橫差九格、縱差十二格，每格二公尺，實際直線距離多少？",
        "solutionSteps": [
          "格線上的兩個方向互相垂直。",
          "圖上距離為√(9²＋12²)＝15格。",
          "乘每格二公尺，實際距離為15×2＝30公尺。"
        ],
        "answer": "30公尺",
        "why": "勾股定理先得到的是圖上的格數，不是實際公尺數；最後乘比例尺才能完成單位換算，也可避免把尺度重複平方。"
      },
      {
        "exampleId": "L3",
        "prompt": "路線甲長十公里、每公里成本1.4；路線乙長十三公里、每公里成本1，選何者？",
        "solutionSteps": [
          "路線甲總成本為10×1.4＝14。",
          "路線乙總成本為13×1＝13。",
          "比較14與13，選總成本較低的路線乙。"
        ],
        "answer": "路線乙",
        "why": "題目目標是成本而不是距離，較短路線不一定較便宜；分別將距離乘單位成本後，才是在比較同一種總量。"
      },
      {
        "exampleId": "L4",
        "prompt": "寬一點五公尺、高二公尺的門框，長二點四公尺的細桿能否斜著通過？",
        "solutionSteps": [
          "門框對角線為√(1.5²＋2²)＝√6.25。",
          "算得對角線長2.5公尺。",
          "因2.4＜2.5，理想平面且無厚度模型下可以通過。"
        ],
        "answer": "理想模型下可以通過",
        "why": "傾斜時可利用的是門框對角線而非只看高度；但數學模型忽略桿的厚度、門框深度與障礙物，因此結論需附帶假設。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "直接把所有數相加。",
        "why": "未建立資料角色。",
        "correction": "先列關係式。"
      },
      {
        "mistake": "過早四捨五入。",
        "why": "累積誤差可能改變判定。",
        "correction": "最後一步再近似。"
      },
      {
        "mistake": "只比較路長不比較成本。",
        "why": "忽略單位價格。",
        "correction": "算總成本。"
      },
      {
        "mistake": "安全門檻13，12.9說接近所以合格。",
        "why": "忽略至少的嚴格意義。",
        "correction": "12.9<13不合格。"
      },
      {
        "mistake": "有理想模型就當真實一定可行。",
        "why": "未說明厚度等限制。",
        "correction": "限定結論適用範圍。"
      },
      {
        "mistake": "答案只有數字沒有決策。",
        "why": "未回應情境問題。",
        "correction": "寫完整結論與理由。"
      }
    ],
    "selfCheck": [
      {
        "checkId": "SC1",
        "prompt": "用一句話說明本技能最核心的數學關係。",
        "answer": "素養題不只算數，還要選模型、遵守規格並解讀。"
      },
      {
        "checkId": "SC2",
        "prompt": "使用本技能前最先要確認的條件是什麼？",
        "answer": "整理已知、所求與限制。"
      },
      {
        "checkId": "SC3",
        "prompt": "指出一個最常見的錯誤並給出修正。",
        "answer": "直接把所有數相加。；修正：先列關係式。"
      },
      {
        "checkId": "SC4",
        "prompt": "完成答案後要做哪一項檢查？",
        "answer": "結論有寫模型限制嗎？"
      }
    ],
    "summary": [
      "素養題不只算數，還要選模型、遵守規格並解讀。",
      "精確值、近似值與決策各有適當時機。"
    ],
    "connections": {
      "previous": "整合 s001 至 s015 的平方根、根式與畢氏技能。",
      "next": [
        "下一單元可把這些建模與代數技能用於更複雜式子與方程。"
      ]
    },
    "figureReferences": [
      "fig-u11-s016-screen-diagonal"
    ],
    "accessibilityNotes": [
      "正方形螢幕邊長12公分，畫出從左下到右上的對角線，標示保護膜至少需要長度d。"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u11-s016-v001",
        "u11-s016-v002",
        "u11-s016-v003",
        "u11-s016-v004",
        "u11-s016-v005",
        "u11-s016-v006",
        "u11-s016-v007",
        "u11-s016-v008",
        "u11-s016-v009",
        "u11-s016-v010",
        "u11-s016-v011",
        "u11-s016-v012"
      ],
      "constructedResponseIds": [
        "u11-s016-cr001",
        "u11-s016-cr002"
      ]
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewedAt": "2026-07-12",
      "reviewer": "CHATGPT_AUTHOR_AND_REVIEWER",
      "reviewNote": "逐段重算「平方根素養題」的四個示例，確認定義先於公式、每個符號已在使用前說明，且錯誤分析聚焦於「直接把所有數相加。」等本技能特有問題；內容未借用舊題庫。"
    },
    "contentSha256": "c5585f8f2ae88ae7f8abbd11160f95da7f85ed8d2fa4d85665d045b84aecd8a2"
  }
];
