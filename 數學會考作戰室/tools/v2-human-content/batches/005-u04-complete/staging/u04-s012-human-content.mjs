// SERIALIZATION OF REVIEWED CHATGPT_HUMAN_AUTHORED_R1 CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u04-s012-lecture-r1",
  "unitId": "u04",
  "numericUnitId": 4,
  "topicId": "u04-system-apps",
  "skillId": "system-rate-problem",
  "lockedSkillTitle": "速率與行程問題",
  "title": "速率與行程問題：每一段都用路程等於速率乘時間",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "exactSkillIdentity": {
    "unitTitle": "二元一次聯立方程式",
    "skillTitle": "速率與行程問題",
    "scope": "使用路程等於速率乘時間，區分相向、同向與分段行程。"
  },
  "prerequisiteBridge": "先備技能 system-quantity-price-problem 已建立必要基礎；本節將其用於「使用路程等於速率乘時間，區分相向、同向與分段行程。」",
  "learningGoals": [
    "能區分路程、速率與時間。",
    "能處理相向、同向追趕與分段行程。",
    "能先統一時間和距離單位。",
    "能將未知速率或未知時間建立為聯立方程式。"
  ],
  "vocabulary": [
    {
      "term": "路程",
      "definition": "移動所經過的長度。"
    },
    {
      "term": "速率",
      "definition": "每單位時間行進的路程。"
    },
    {
      "term": "相向",
      "definition": "從兩端朝彼此移動。"
    },
    {
      "term": "同向追趕",
      "definition": "後方較快者縮短與前方的距離差。"
    },
    {
      "term": "分段行程",
      "definition": "不同路段使用不同速率或時間。"
    }
  ],
  "notation": [
    {
      "symbol": "d=vt",
      "meaning": "路程=速率×時間。"
    },
    {
      "symbol": "(v₁+v₂)t=D",
      "meaning": "相向同時出發，相遇時路程和為總距離。"
    },
    {
      "symbol": "(v₁-v₂)t=D",
      "meaning": "同向追趕且 v₁>v₂，縮短距離為初距。"
    }
  ],
  "conceptDevelopment": [
    "先為每個人或每一段各寫 d=vt，再依題意把路程相加、相減或設為相等。",
    "分鐘與小時不可直接混用；30 分鐘要寫成 0.5 小時。",
    "來迴路程相同不代表來回時間相同。"
  ],
  "definitions": [
    {
      "name": "相遇條件",
      "statement": "相向時兩者路程和等於原距離。"
    },
    {
      "name": "追及條件",
      "statement": "同向時快者比慢者多走的路程等於原先距離。"
    }
  ],
  "formulas": [
    {
      "formula": "d=vt",
      "conditions": [
        "路程、速率、時間單位相容。"
      ],
      "meaning": "所有行程模型的基礎。"
    }
  ],
  "invalidUseCases": [
    "不可用速率相加處理同向追趕。",
    "不可把 20 分鐘直接當 20 小時。",
    "平均速率通常不是兩速率的算術平均，除非時間相等。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "畫文字流程或表格",
      "check": "列每段 v、t、d。"
    },
    {
      "step": 2,
      "instruction": "統一單位",
      "check": "分鐘換小時、公里與公尺統一。"
    },
    {
      "step": 3,
      "instruction": "逐段寫 d=vt",
      "check": "不要先合併。"
    },
    {
      "step": 4,
      "instruction": "依相遇、追及或總路程列第二關係",
      "check": "建立聯立。"
    },
    {
      "step": 5,
      "instruction": "求解並檢查時間正值",
      "check": "代迴路程。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "兩地相距 180 公里，兩車相向 2 小時相遇，速率差 10。",
      "solutionSteps": [
        "設快車 x、慢車 y 公里／時，由兩小時路程和列 2x+2y=180。",
        "化簡得 x+y=90，並由快車比慢車快十列 x-y=10。",
        "兩式相加得 x=50，再求 y=40，回算兩小時路程。"
      ],
      "answer": "速率 50、40 公里/時。",
      "why": "相向兩小時相遇表示速率和為九十，而題目另給速率差十。和差兩式可唯一決定五十與四十；兩車兩小時分別走一百與八十公里，合計正好一百八十。"
    },
    {
      "exampleId": "L2",
      "prompt": "甲先行 12 公里，乙同向追趕，2 小時追上，乙比甲快多少？",
      "solutionSteps": [
        "同向追趕使用乙速率減甲速率，設速率差為 r。",
        "兩小時補足十二公里，列 2r=12。",
        "求得 r=6 公里／時，並驗算每小時縮短六公里。"
      ],
      "answer": "快 6 公里/時。",
      "why": "甲仍持續前進，所以乙不是獨自走完十二公里，而是靠相對速率逐步縮短距離。每小時多走六公里，兩小時共多走十二公里，恰好補足原本的領先距離。"
    },
    {
      "exampleId": "L3",
      "prompt": "上坡 3 公里、下坡 3 公里，速率 x、y，總時間 1 小時且下坡比上坡快 6。",
      "solutionSteps": [
        "由時間等於路程除速率，寫出上坡時間 3/x、下坡時間 3/y。",
        "總時間條件形成 3/x+3/y=1，式中未知數位於分母。",
        "因此此條件不是二元一次式，本單元不繼續用一次聯立求解。"
      ],
      "answer": "屬本單元邊界外的非線性形式。",
      "why": "雖然題目有兩個未知速率與另一條速率差條件，但總時間式含有 x、y 的倒數，不能整理成兩未知數皆一次的形式。先辨識方程式類型可避免強行套用本單元方法。"
    },
    {
      "exampleId": "L4",
      "prompt": "步行 4 公里/時、騎車 12 公里/時，共 2 小時走 16 公里。",
      "solutionSteps": [
        "設步行 x 小時、騎車 y 小時，列 x+y=2。",
        "各段路程相加，列 4x+12y=16。",
        "減去四倍時間式得 8y=8，所以 y=1、x=1。"
      ],
      "answer": "各 1 小時。",
      "why": "兩段時間合計兩小時，路程則須分別用各自速率乘時間後相加。求得各一小時時，步行四公里、騎車十二公里，合計十六公里，兩個條件同時成立。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "相向用速率差",
      "correction": "相向路程和對應速率和。"
    },
    {
      "mistake": "同向用速率和",
      "correction": "追趕看相對速率差。"
    },
    {
      "mistake": "時間單位未換算",
      "correction": "先把分鐘除以 60。"
    },
    {
      "mistake": "把含 1/x 的式子當二元一次",
      "correction": "未知數在分母不是一次方程式。"
    }
  ],
  "selfCheck": [
    {
      "prompt": "30 分鐘是幾小時？",
      "answer": "0.5 小時。"
    },
    {
      "prompt": "相向相遇用速率和還差？",
      "answer": "和。"
    },
    {
      "prompt": "同向追趕用什麼？",
      "answer": "快慢速率差。"
    },
    {
      "prompt": "d=vt 中單位要如何？",
      "answer": "相互一致。"
    }
  ],
  "summary": [
    "每段先寫 d=vt。",
    "相向看路程和，同向追趕看路程差。",
    "先統一單位。",
    "含未知速率倒數的非線性題不屬本技能。"
  ],
  "connections": {
    "previous": "先備技能 system-quantity-price-problem 已建立必要基礎；本節將其用於「使用路程等於速率乘時間，區分相向、同向與分段行程。」",
    "next": "下一技能「基礎混合問題」會延伸目前能力。"
  },
  "figureReferences": [],
  "accessibilityNote": "本講義不需要圖形；所有關係均以文字、等式與逐步運算完整呈現，避擴音前使用 U05 坐標圖形。",
  "lectureReview": {
    "decision": "pass",
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "capBoundary": "pass",
    "skillSpecificEvidence": "刻意標示等路程來回造成 1/x 的非線性邊界，不強行納入一次聯立；其餘例題均由線性時間或速率條件建立。",
    "reviewNote": "刻意標示等路程來回造成 1/x 的非線性邊界，不強行納入一次聯立；其餘例題均由線性時間或速率條件建立。",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "102b87284289e98f3369d0a96cad3a706821dd48ddc6ab06e2a90c2a18a78ea4",
  "conceptNarrative": [
    "行程題的基本關係是路程=速率×時間。建立聯立方程式前，先為每一個人或每一段行程分別標出速率、時間、路程；同一段的三個量才能放進同一個乘法關係。",
    "相向相遇時，兩車走過的路程和等於原距離，所以接近速率是兩速率和；同向追趕時，後車要補足領先距離，每單位時間縮短的距離是快慢速率差。兩種模型不可互換。",
    "分段行程常以各段時間和與各段路程和形成兩個方程式。分鐘與小時、公尺與公里必須先統一，否則即使代數運算正確，等式兩邊也會使用不同單位。",
    "不是所有速率題都能列成二元一次聯立。若未知數本身是速率，而時間寫成路程除以速率，未知數會出現在分母；這類倒數式不屬本單元的一次形式，應先辨識範圍。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "定義未知數並為每一段列出速率、時間、路程及其單位。",
      "check": "未知數意義固定，各段量沒有交叉使用。"
    },
    {
      "step": 2,
      "instruction": "把分鐘換成小時或統一其他單位，再逐段使用路程=速率×時間。",
      "check": "乘法後的單位確實是路程，沒有混用公里與公尺。"
    },
    {
      "step": 3,
      "instruction": "依相向、追趕或分段總和建立第一個情境關係。",
      "check": "相向用路程和，追趕用領先距離與速率差。"
    },
    {
      "step": 4,
      "instruction": "利用另一項獨立條件建立第二式並解聯立方程式。",
      "check": "兩式不是同一資訊的倍數，所得時間與速率皆為正。"
    },
    {
      "step": 5,
      "instruction": "把結果回算各段路程、總時間與相遇或追上條件。",
      "check": "每一段計算與題目單位一致，且答案回應正確對象。"
    }
  ]
};

export const QUESTIONS = [
  {
    "questionId": "u04-s012-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "路程、速率、時間的基本關係式為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "辨認基本公式",
    "choices": [
      "速率=路程×時間",
      "時間=速率×路程",
      "路程=速率+時間",
      "路程=速率×時間"
    ],
    "answerIndex": 3,
    "independentSolution": "由速率定義，每單位時間路程乘時間得到總路程。",
    "explanation": "速率表示每單位時間行走的路程，因此經過若干時間後，總路程等於速率乘時間。單位也可驗證：(公里／時)×小時=公里，所以正確關係是路程=速率×時間；其餘乘除關係或相加式都不合單位。",
    "steps": [
      "辨認速率是每單位時間的路程。",
      "用每單位時間路程乘經過時間，得到總路程。",
      "以單位相消檢查，寫出路程=速率×時間。"
    ],
    "optionAnalysis": [
      {
        "choice": "速率=路程×時間",
        "truth": false,
        "reason": "應為路程除時間。"
      },
      {
        "choice": "時間=速率×路程",
        "truth": false,
        "reason": "應為路程除速率。"
      },
      {
        "choice": "路程=速率+時間",
        "truth": false,
        "reason": "單位不相容。"
      },
      {
        "choice": "路程=速率×時間",
        "truth": true,
        "reason": "速率乘時間得到路程。"
      }
    ],
    "misconceptionTarget": "背誦公式時把乘除位置顛倒，或把速率與時間直接相加而忽略單位。",
    "prerequisiteCheck": "只需先備 system-quantity-price-problem，並使用本技能「速率與行程問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "距離單位。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「辨認基本公式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "直接公式。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "e8a7dbfa2267d51b2908b52821b7270f66e3f2a31f72d93279b32d7351acdffb"
  },
  {
    "questionId": "u04-s012-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "30 分鐘等於多少小時？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "時間單位換算",
    "choices": [
      "0.3 小時",
      "2 小時",
      "0.5 小時",
      "30 小時"
    ],
    "answerIndex": 2,
    "independentSolution": "30÷60=0.5 小時。",
    "explanation": "一小時有六十分鐘，把分鐘換成小時要除以六十。三十分鐘為 30÷60=1/2 小時，也就是零點五小時。零點三小時其實是十八分鐘，不能只把三十分鐘的小數點向左移。",
    "steps": [
      "寫出六十分鐘等於一小時。",
      "計算 30÷60=1/2。",
      "把二分之一改寫為零點五小時。"
    ],
    "optionAnalysis": [
      {
        "choice": "0.3 小時",
        "truth": false,
        "reason": "把 30 當百分數。"
      },
      {
        "choice": "2 小時",
        "truth": false,
        "reason": "反向換算。"
      },
      {
        "choice": "0.5 小時",
        "truth": true,
        "reason": "半小時就是 0.5 小時。"
      },
      {
        "choice": "30 小時",
        "truth": false,
        "reason": "未換單位。"
      }
    ],
    "misconceptionTarget": "把三十分鐘直接寫成零點三小時，沒有依一小時六十分鐘換算。",
    "prerequisiteCheck": "只需先備 system-quantity-price-problem，並使用本技能「速率與行程問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "分鐘轉換為小時。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「時間單位換算」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "基礎單位。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "1827be6ea08ad860ee4498ad7092a4ebc21ba64bd9517275deb3eed900112e33"
  },
  {
    "questionId": "u04-s012-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "兩車相向而行時，若同時出發到相遇，兩車路程有何關係？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "理解相向相遇條件",
    "choices": [
      "兩車路程差等於原距離",
      "兩車路程和等於原距離",
      "兩車路程一定相等",
      "每車都走完整原距離"
    ],
    "answerIndex": 1,
    "independentSolution": "相向從兩端靠近，相遇時兩段路程拼成原距離。",
    "explanation": "兩車從原距離的兩端相向出發，相遇點把原距離分成甲車與乙車各自走過的兩段。因此相遇時兩車路程和等於原距離。只有速率相同時兩段才相等，題目並未保證兩車路程相同。",
    "steps": [
      "把相遇點視為原距離中的一個分點。",
      "分別標出兩車從兩端到相遇點的路程。",
      "將兩段相加，得到兩車路程和等於原距離。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩車路程差等於原距離",
        "truth": false,
        "reason": "這是同向追趕常見關係。"
      },
      {
        "choice": "兩車路程和等於原距離",
        "truth": true,
        "reason": "兩段路程剛好覆蓋兩地間距。"
      },
      {
        "choice": "兩車路程一定相等",
        "truth": false,
        "reason": "速率不同則不等。"
      },
      {
        "choice": "每車都走完整原距離",
        "truth": false,
        "reason": "相遇前各走一部分。"
      }
    ],
    "misconceptionTarget": "把相向相遇誤套同向追趕的路程差，或認為兩車必各走一半。",
    "prerequisiteCheck": "只需先備 system-quantity-price-problem，並使用本技能「速率與行程問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「理解相向相遇條件」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "概念判斷。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "f4268c0e65e029365d9d6e95bc95fefe68408ce3d5bbd00e27647397ec5731ae"
  },
  {
    "questionId": "u04-s012-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "甲速率 40 公里/時、乙 50 公里/時，相向 2 小時，原距離多少？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "計算相向原距離",
    "choices": [
      "180 公里",
      "20 公里",
      "90 公里",
      "200 公里"
    ],
    "answerIndex": 0,
    "independentSolution": "相對接近速率 40+50=90；2 小時共縮短 180 公里。",
    "explanation": "兩車相向時每小時共同縮短的距離為速率和 40+50=90 公里。經過兩小時相遇，原距離就是 90×2=180 公里。也可分別算八十公里與一百公里再相加，結果一致。",
    "steps": [
      "相向行駛使用速率和，計算 40+50=90 公里／時。",
      "以路程等於速率乘時間，計算 90×2=180 公里。",
      "用 40×2+50×2=180 公里驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "180 公里",
        "truth": true,
        "reason": "(40+50)×2=180。"
      },
      {
        "choice": "20 公里",
        "truth": false,
        "reason": "誤用速率差。"
      },
      {
        "choice": "90 公里",
        "truth": false,
        "reason": "只算一小時總路程。"
      },
      {
        "choice": "200 公里",
        "truth": false,
        "reason": "把較快者速率乘 4。"
      }
    ],
    "misconceptionTarget": "把相向的接近速率算成五十減四十，錯用同向追趕的速率差。",
    "prerequisiteCheck": "只需先備 system-quantity-price-problem，並使用本技能「速率與行程問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "公里/時×時=公里。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「計算相向原距離」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "標準公式應用。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "507597c580ae79f98bfca319c826e0755b833d0ecc4b70946058c5b663b18db2"
  },
  {
    "questionId": "u04-s012-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "甲先行 12 公里，乙同向追趕，2 小時追上。乙每小時比甲快多少？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "求同向相對速率",
    "choices": [
      "4 公里/時",
      "6 公里/時",
      "12 公里/時",
      "24 公里/時"
    ],
    "answerIndex": 1,
    "independentSolution": "相對速率差×2=12，所以差為 6 公里/時。",
    "explanation": "乙在甲後方同向追趕，必須靠每小時比甲多走的距離補足十二公里。設兩車速率差為 r，兩小時共補 r×2=12，所以 r=6 公里／時；十二公里是初始距離，不是每小時速率差。",
    "steps": [
      "辨認同向追趕使用乙速率減甲速率。",
      "列出速率差×2 小時=12 公里。",
      "兩邊除以二，得到每小時快六公里。"
    ],
    "optionAnalysis": [
      {
        "choice": "4 公里/時",
        "truth": false,
        "reason": "12÷3。"
      },
      {
        "choice": "6 公里/時",
        "truth": true,
        "reason": "每小時多 6 公里，2 小時補 12 公里。"
      },
      {
        "choice": "12 公里/時",
        "truth": false,
        "reason": "未除時間。"
      },
      {
        "choice": "24 公里/時",
        "truth": false,
        "reason": "把距離乘時間。"
      }
    ],
    "misconceptionTarget": "把同向追趕的速率相加，或把十二公里差距直接當成每小時速率差。",
    "prerequisiteCheck": "只需先備 system-quantity-price-problem，並使用本技能「速率與行程問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "公里÷小時=公里/時。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「求同向相對速率」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "標準追趕。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "35133fcbe9ecac9fb244efe2de0124976a0721104f302b036d611454a2736e97"
  },
  {
    "questionId": "u04-s012-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "步行 4 公里/時、騎車 12 公里/時，共 2 小時走 16 公里。若步行 x 小時、騎車 y 小時，正確聯立為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "建立分段行程聯立",
    "choices": [
      "x+y=16，4x+12y=2",
      "4x+12y=18，x-y=2",
      "x+y=2，4x+12y=16",
      "xy=2，48xy=16"
    ],
    "answerIndex": 2,
    "independentSolution": "總時間為 x+y，分段路程為 4x+12y。",
    "explanation": "x、y 分別是步行與騎車的時間，總時間兩小時給出 x+y=2。各段路程為速率乘時間，所以步行路程是 4x、騎車路程是 12y，總路程十六公里給出 4x+12y=16。",
    "steps": [
      "依變數定義將兩段時間相加，列 x+y=2。",
      "分別寫出步行路程 4x 與騎車路程 12y。",
      "將兩段路程相加，列 4x+12y=16。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+y=16，4x+12y=2",
        "truth": false,
        "reason": "時間與路程對調。"
      },
      {
        "choice": "4x+12y=18，x-y=2",
        "truth": false,
        "reason": "無題意依據。"
      },
      {
        "choice": "x+y=2，4x+12y=16",
        "truth": true,
        "reason": "兩式分別表達總時間與總路程。"
      },
      {
        "choice": "xy=2，48xy=16",
        "truth": false,
        "reason": "錯誤使用乘積。"
      }
    ],
    "misconceptionTarget": "把總時間二與總路程十六放到相反方程式，造成兩邊單位不一致。",
    "prerequisiteCheck": "只需先備 system-quantity-price-problem，並使用本技能「速率與行程問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "小時式與公里式各自一致。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「建立分段行程聯立」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需要兩條守恆。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "9062fec42fceea250987b993165b3cdb55b464fa669421d4edb35e7dc8f1e9a2"
  },
  {
    "questionId": "u04-s012-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "兩車相向 2 小時相遇，速率和 90 公里/時、速率差 10 公里/時，較快車速率為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由相對資料求個別速率",
    "choices": [
      "50 公里/時",
      "40 公里/時",
      "45 公里/時",
      "100 公里/時"
    ],
    "answerIndex": 0,
    "independentSolution": "設快 x、慢 y：x+y=90、x-y=10；相加得 2x=100，x=50。",
    "explanation": "設較快車速率為 x、較慢車為 y，題意給 x+y=90、x-y=10。兩式相加可消去 y，得到 2x=100，所以 x=50 公里／時；再求 y=40，可驗證和為九十、差為十。較快車也確實高於兩車速率平均值四十五，大小順序合理。",
    "steps": [
      "依快慢順序列 x+y=90 與 x-y=10。",
      "兩式相加消去 y，得到 2x=100。",
      "求 x=50，並以慢車四十檢查和與差。"
    ],
    "optionAnalysis": [
      {
        "choice": "50 公里/時",
        "truth": true,
        "reason": "50+40=90 且 50-40=10。"
      },
      {
        "choice": "40 公里/時",
        "truth": false,
        "reason": "這是較慢車。"
      },
      {
        "choice": "45 公里/時",
        "truth": false,
        "reason": "只取平均。"
      },
      {
        "choice": "100 公里/時",
        "truth": false,
        "reason": "將和與差相加未除 2。"
      }
    ],
    "misconceptionTarget": "把速率和九十直接當成快車速率，或把和與差相加後忘記除以二。",
    "prerequisiteCheck": "只需先備 system-quantity-price-problem，並使用本技能「速率與行程問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由相對資料求個別速率」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需聯立和差。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "df578e1b89819dbad5f1e39dff2a791e77702e9bc5abf4074b894a081f978103"
  },
  {
    "questionId": "u04-s012-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "某人以 5 公里/時步行 x 小時、以 15 公里/時騎車 y 小時，總時間 3 小時、總路程 25 公里。騎車多久？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "分段速率消去",
    "choices": [
      "0.5 小時",
      "2 小時",
      "2.5 小時",
      "1 小時"
    ],
    "answerIndex": 3,
    "independentSolution": "x+y=3，5x+15y=25。以 5(x+y)=15 相減得 10y=10，y=1。",
    "explanation": "步行與騎車時間合計三小時，所以 x+y=3；路程合計為 5x+15y=25。用路程式減去時間式的五倍，得 10y=10，所以騎車一小時、步行兩小時，回算路程為十加十五公里。",
    "steps": [
      "列總時間式 x+y=3 與總路程式 5x+15y=25。",
      "用第二式減 5(x+y)=15，得到 10y=10。",
      "求 y=1，並以步行兩小時、騎車一小時回算。"
    ],
    "optionAnalysis": [
      {
        "choice": "0.5 小時",
        "truth": false,
        "reason": "總路程 20。"
      },
      {
        "choice": "2 小時",
        "truth": false,
        "reason": "總路程 35。"
      },
      {
        "choice": "2.5 小時",
        "truth": false,
        "reason": "總路程 40。"
      },
      {
        "choice": "1 小時",
        "truth": true,
        "reason": "步行 2 小時 10 公里，騎車 1 小時 15 公里。"
      }
    ],
    "misconceptionTarget": "把二十五除以三當成固定平均速率後猜時間，沒有處理兩段不同速率。",
    "prerequisiteCheck": "只需先備 system-quantity-price-problem，並使用本技能「速率與行程問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "小時。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「分段速率消去」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "完整聯立。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "6398c32cd6183faf5744410dd750b0a51d5b519819df1e16569cbb66f65949f0"
  },
  {
    "questionId": "u04-s012-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "上坡 3 公里速率 x、下坡 3 公里速率 y，總時間 1 小時。為何 3/x+3/y=1 不屬二元一次聯立形式？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "辨認行程模型邊界",
    "choices": [
      "未知數在分母",
      "因為有兩個未知數",
      "因為常數是 1",
      "因為路程相同"
    ],
    "answerIndex": 0,
    "independentSolution": "時間=路程÷速率，因此出現 1/x、1/y，未知數在分母。",
    "explanation": "每段時間等於路程除以速率，因此上坡與下坡時間分別是 3/x、3/y。未知數 x、y 位於分母，式子包含倒數，無法整理成 ax+by=c 的二元一次形式；兩個未知數或常數一都不是排除理由。",
    "steps": [
      "依時間等於路程除以速率，寫出兩段時間。",
      "觀察式中出現未知數倒數 1/x 與 1/y。",
      "依一次方程式判準，判定此式不是二元一次形式。"
    ],
    "optionAnalysis": [
      {
        "choice": "未知數在分母",
        "truth": true,
        "reason": "1/x 與 1/y 不是一次項。"
      },
      {
        "choice": "因為有兩個未知數",
        "truth": false,
        "reason": "二元本身不是問題。"
      },
      {
        "choice": "因為常數是 1",
        "truth": false,
        "reason": "常數大小無關。"
      },
      {
        "choice": "因為路程相同",
        "truth": false,
        "reason": "路程相同不造成非一次。"
      }
    ],
    "misconceptionTarget": "看到行程題有兩個未知數就強行列二元一次聯立，忽略未知數在分母。",
    "prerequisiteCheck": "只需先備 system-quantity-price-problem，並使用本技能「速率與行程問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「辨認行程模型邊界」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "明確排除未知數在分母的非線性速率模型。",
    "difficultyReason": "需要識別非線性。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "d566f96dbb255841227919bdef99e3b20a537fec1069460a8b28ddafe01cfb72"
  },
  {
    "questionId": "u04-s012-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "公車 A 每小時 60 公里、公車 B 每小時 45 公里，從相距 210 公里的兩站相向同時出發。多久相遇？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "從時刻表資料求相遇時間",
    "choices": [
      "1.5 小時",
      "2 小時",
      "3 小時",
      "14 小時"
    ],
    "answerIndex": 1,
    "independentSolution": "相向相對速率 105 公里/時；210÷105=2。",
    "explanation": "兩班公車相向行駛，每小時共同縮短 60+45=105 公里。站距二百一十公里除以接近速率，得到 210÷105=2 小時；此時兩車分別走一百二十與九十公里，總和正好等於站距。",
    "steps": [
      "相向行駛先求速率和 60+45=105 公里／時。",
      "用站距除以接近速率，計算 210÷105=2 小時。",
      "驗算兩小時路程 120+90=210 公里。"
    ],
    "optionAnalysis": [
      {
        "choice": "1.5 小時",
        "truth": false,
        "reason": "共走 157.5 公里。"
      },
      {
        "choice": "2 小時",
        "truth": true,
        "reason": "兩小時內分別走 120 與 90 公里，合計 210。"
      },
      {
        "choice": "3 小時",
        "truth": false,
        "reason": "共走 315 公里。"
      },
      {
        "choice": "14 小時",
        "truth": false,
        "reason": "誤用距離除速率差。"
      }
    ],
    "misconceptionTarget": "相向相遇卻用十五公里的速率差，導致錯誤地算成十四小時。",
    "prerequisiteCheck": "只需先備 system-quantity-price-problem，並使用本技能「速率與行程問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "公里÷(公里/時)=小時。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「從時刻表資料求相遇時間」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "交通資料不可省略。",
    "literacyContextNecessity": "兩車速率和與站距是相遇時間的必要資料。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "cc8a82dcff7b31654dea648781dc2500cb62b585bd90e682e9ac22df414e844f"
  },
  {
    "questionId": "u04-s012-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "外送員先以 12 公里/時騎 0.5 小時，再以 4 公里/時走 x 小時，總路程 10 公里。x 為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "從配送紀錄求剩餘時間",
    "choices": [
      "0.5 小時",
      "2 小時",
      "4 小時",
      "1 小時"
    ],
    "answerIndex": 3,
    "independentSolution": "騎車路程 12×0.5=6 公里，剩 4 公里；步行 4 公里/時需 1 小時。",
    "explanation": "前半小時騎車的路程為 12×0.5=6 公里，十公里總路程尚餘四公里。步行速率為每小時四公里，所以所需時間 x=4÷4=1 小時。不能把全部十公里都除以步行速率。",
    "steps": [
      "計算已知騎車段路程 12×0.5=6 公里。",
      "從總路程扣除，得到步行尚需四公里。",
      "以 4÷4=1，求得步行一小時。"
    ],
    "optionAnalysis": [
      {
        "choice": "0.5 小時",
        "truth": false,
        "reason": "總路程 8。"
      },
      {
        "choice": "2 小時",
        "truth": false,
        "reason": "總路程 14。"
      },
      {
        "choice": "4 小時",
        "truth": false,
        "reason": "把剩餘距離當時間。"
      },
      {
        "choice": "1 小時",
        "truth": true,
        "reason": "4 公里以 4 公里/時行走需 1 小時。"
      }
    ],
    "misconceptionTarget": "忽略已完成的騎車路程，直接用十公里除以步行速率求時間。",
    "prerequisiteCheck": "只需先備 system-quantity-price-problem，並使用本技能「速率與行程問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "小時。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「從配送紀錄求剩餘時間」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "分段資料是必要情境。",
    "literacyContextNecessity": "0.5 小時騎車段決定剩餘路程，不能刪去。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "33228c176820966fee8f6914554ab190cf793ab3fb15fbe394ff073ccd9e0383"
  },
  {
    "questionId": "u04-s012-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "跑道上甲、乙同向，甲在前方 300 公尺；乙每秒 8 公尺、甲每秒 5 公尺。乙多久追上？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由跑道追趕資料求時間",
    "choices": [
      "37.5 秒",
      "60 秒",
      "100 秒",
      "150 秒"
    ],
    "answerIndex": 2,
    "independentSolution": "相對速率 8-5=3 公尺/秒；300÷3=100 秒。",
    "explanation": "乙在後方同向追甲，每秒只能用兩人速率差縮短距離。速率差是 8-5=3 公尺／秒，前方三百公尺需要 300÷3=100 秒補足。用八或五單獨除距離都忽略甲仍在前進。",
    "steps": [
      "辨認同向追趕，計算速率差 8-5=3 公尺／秒。",
      "用領先距離除相對速率，計算 300÷3=100 秒。",
      "驗算一百秒內乙比甲多走三百公尺。"
    ],
    "optionAnalysis": [
      {
        "choice": "37.5 秒",
        "truth": false,
        "reason": "用 300÷8。"
      },
      {
        "choice": "60 秒",
        "truth": false,
        "reason": "用 300÷5。"
      },
      {
        "choice": "100 秒",
        "truth": true,
        "reason": "每秒縮短 3 公尺，100 秒縮短 300 公尺。"
      },
      {
        "choice": "150 秒",
        "truth": false,
        "reason": "把三百公尺錯誤除以二，沒有使用每秒三公尺的速率差。"
      }
    ],
    "misconceptionTarget": "只用乙或甲的單獨速率除領先距離，沒有扣除甲持續前進的影響。",
    "prerequisiteCheck": "只需先備 system-quantity-price-problem，並使用本技能「速率與行程問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "公尺÷(公尺/秒)=秒。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由跑道追趕資料求時間」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "位置差與速率差均必要。",
    "literacyContextNecessity": "前距 300 與兩人速率決定追趕時間。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "00ff5455d391174bac8a3e2032fe212af5861a735689bc55e9310fbe41207eaf"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u04-s012-cr001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "standard",
    "itemType": "constructed-response",
    "prompt": "兩地相距 270 公里，甲乙兩車相向同時出發，3 小時相遇；甲每小時比乙快 10 公里。求兩車速率。",
    "requiredWork": [
      "列速率和與差。",
      "單位完整。"
    ],
    "standardSolution": [
      "設甲車速率為 x 公里／時、乙車為 y 公里／時。相向三小時相遇，兩車路程和為 270，所以 3x+3y=270，即 x+y=90。",
      "甲每小時比乙快十公里，列 x-y=10。將和式與差式相加，得到 2x=100，所以 x=50、y=40。",
      "驗算三小時內甲走 150 公里、乙走 120 公里，合計 270 公里；兩車速率差 50-40=10 公里／時，均符合題意。"
    ],
    "alternativeMethods": [
      "可先求平均速率 45，再由差 10 各增減 5。"
    ],
    "reasoningSteps": [
      "依相向相遇的總路程建立速率和方程式。",
      "依甲比乙快十公里建立速率差方程式，解出兩車速率。",
      "以三小時路程和與速率差兩項條件回代檢查。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "50與40公里/時，模型與單位完整。"
      },
      {
        "score": 2,
        "criteria": "答案正確但少寫相遇式或單位。"
      },
      {
        "score": 1,
        "criteria": "正確得到速率和 90 與差 10，計算小錯。"
      },
      {
        "score": 0,
        "criteria": "相向誤用速率差求總距離。"
      }
    ],
    "partialCreditRules": [
      "和式一分，差式一分，解與單位一分。"
    ],
    "followThroughPolicy": "若甲乙名稱互換但同時把“甲快”關係寫反，不算一致，應扣方向分。",
    "unitNotationRules": "速率寫公里/時。",
    "answerOnlyPolicy": "只答 50、40 最高 1 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "甲50、乙40公里/時。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立回算三小時路程 150+120=270，差10。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "c649dcec83c7e099bb4a299066598accf4af98e8c60e8100c5183642d9755a9b",
    "commonErrors": [
      "相向相遇誤用速率差，將三小時路程列成 3x-3y=270。",
      "由 3x+3y=270 化簡時忘記三要除每一項，誤得速率和二百七十。",
      "求得甲五十後未求乙四十，或沒有檢查兩車三小時路程和。"
    ]
  },
  {
    "questionId": "u04-s012-cr002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "difficulty": "advanced",
    "itemType": "constructed-response",
    "prompt": "某人步行 5 公里/時、騎車 15 公里/時，共移動 4 小時、走了 40 公里。求步行與騎車時間，並檢查。",
    "requiredWork": [
      "變數為時間。",
      "列總時間與總路程。"
    ],
    "standardSolution": [
      "設步行 x 小時、騎車 y 小時。總時間四小時給出 x+y=4；兩段路程和為四十公里，給出 5x+15y=40。",
      "把時間式乘五得 5x+5y=20，與路程式相減得到 10y=20，所以 y=2，再由 x+y=4 得 x=2。",
      "檢查總時間 2+2=4 小時；步行路程 5×2=10 公里、騎車路程 15×2=30 公里，合計四十公里。"
    ],
    "alternativeMethods": [
      "平均速率為 10，正好是 5 與 15 中點，且總時間相等，所以各2小時。"
    ],
    "reasoningSteps": [
      "固定變數為兩段所用時間，分別列總時間與總路程方程式。",
      "用五倍時間式消去步行項，求騎車時間後再求步行時間。",
      "回算兩段時間和與兩段路程和，確認答案完整。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "步行2小時、騎車2小時且完整。"
      },
      {
        "score": 2,
        "criteria": "答案正確但少一項檢查。"
      },
      {
        "score": 1,
        "criteria": "兩式正確，後續算術錯。"
      },
      {
        "score": 0,
        "criteria": "把 x、y 設為路程卻仍寫時間式導致單位混亂。"
      }
    ],
    "partialCreditRules": [
      "定義與兩式兩分，答案檢查一分。"
    ],
    "followThroughPolicy": "若變數設為路程且能正確建立 x+y=40、x/5+y/15=4，雖含分母但計算正確可給滿分；然而本單元首選時間變數。",
    "unitNotationRules": "單位為小時與公里。",
    "answerOnlyPolicy": "只答各2小時最高 1 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "各2小時。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立驗證總時間4、總路程40。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "c3c7eb9b7bcb89784477179801d312f903976db8792737955c614f584bd343d9",
    "commonErrors": [
      "把 x、y 設成路程卻仍寫 x+y=4，造成變數意義與單位不一致。",
      "總路程式漏乘時間，錯寫成 5+15=40。",
      "把四十公里除以四小時的平均速率十直接當成某一段速率或時間。"
    ]
  }
];

export const DRAWING_SPECS = [];
