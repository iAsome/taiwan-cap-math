// Generated only by serializing reviewed source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u09-s001-lecture-r1",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-display",
    "skillId": "data-table-reading",
    "lockedTitle": "資料表判讀",
    "title": "資料表判讀：先看標題再讀列與欄",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewStatus": "independently-reviewed",
    "prerequisiteBridge": {
      "skillIds": [],
      "explanation": "本技能無鎖定先備技能，從表格的列、欄、單位與註記開始。"
    },
    "learningGoals": [
      "辨認表名、列標題、欄標題與單位。",
      "精確讀取交叉格。",
      "由總計或欄位關係補缺值。",
      "比較不同列或欄而不混用單位。",
      "檢查腳註與摘要列是否合理。"
    ],
    "vocabulary": [
      {
        "term": "列",
        "meaning": "橫向排列的一排資料。"
      },
      {
        "term": "欄",
        "meaning": "直向排列、具有共同意義的一組資料。"
      },
      {
        "term": "儲存格",
        "meaning": "一列與一欄交會的位置。"
      },
      {
        "term": "總計",
        "meaning": "把指定範圍內資料合併後的結果。"
      },
      {
        "term": "註記",
        "meaning": "補充資料定義、期間或例外的文字。"
      }
    ],
    "notation": [
      {
        "symbol": "—",
        "meaning": "可能表示沒有資料、不適用或零；必須看表格說明，不能自行判定。"
      },
      {
        "symbol": "%",
        "meaning": "百分比，分母需由欄位或註記確認。"
      }
    ],
    "conceptDevelopment": [
      "資料表把大量資訊分成『誰或什麼』與『測量了什麼』。讀任何數字前，先用列標題和欄標題替它命名。",
      "同一個 20 可能是 20 人、20 元或 20%，意義由單位決定。",
      "總計列是檢查工具，不是一定可信；原始列加總後應與總計一致。",
      "比較資料前要確認觀察期間、單位與分母相同。",
      "腳註常決定能否公平比較，例如月份天數不同就不能直接用總量代表每日量。",
      "完整判讀資料表時，先用表名界定資料主題，再把列標題、欄標題與單位組成每個數值的完整名稱；若題目要求比較、補缺值或檢查摘要，還要確認所選資料來自相同期間與相同分母，並用總計或逆運算回查。這套流程能避免沿錯列、混用單位、重複加入總計，以及把腳註所揭示的天數差異忽略掉。"
    ],
    "definitions": [
      {
        "name": "讀取交叉格",
        "statement": "先選定列，再選定欄，交會格即同時符合兩個條件的資料。"
      },
      {
        "name": "一致性檢查",
        "statement": "用列合計、欄合計或已知關係重新計算，確認表內數值相容。"
      }
    ],
    "formulas": [
      {
        "formula": "合計＝各互斥類別數值相加",
        "conditions": [
          "類別沒有重複且涵蓋所求全體"
        ]
      },
      {
        "formula": "缺值＝總計－其他已知部分",
        "conditions": [
          "只有一個未知部分"
        ]
      },
      {
        "formula": "平均每日量＝期間總量÷天數",
        "conditions": [
          "比較目標是每日水準"
        ]
      }
    ],
    "invalidUseCases": [
      "未看單位就把不同欄相加。",
      "把空白格自動當作 0。",
      "只看最大數字，卻沒有回答它屬於哪一列。",
      "忽略腳註後比較不同期間總量。"
    ],
    "stepByStepMethod": [
      {
        "step": 1,
        "action": "讀表名，確認表格在說什麼。"
      },
      {
        "step": 2,
        "action": "圈出列標題、欄標題與單位。"
      },
      {
        "step": 3,
        "action": "依題目指定條件定位格子。"
      },
      {
        "step": 4,
        "action": "需要運算時，只取相關資料並寫出關係。"
      },
      {
        "step": 5,
        "action": "用總計、單位與情境回查答案。"
      }
    ],
    "workedExamples": [
      {
        "id": "L1",
        "prompt": "A 線 24 公里票價 36 元，B 線 30 公里票價 42 元，哪線較長？",
        "solution": [
          "先依欄位把 24、30 解讀為公里數。",
          "30＞24，所以 B 線較長 6 公里。"
        ],
        "answer": "B 線，長 6 公里。",
        "why": "每列同時有公里數與票價，若只看數字而不看欄名，就可能拿二十四元和三十元比較。先鎖定全程公里數欄，再以三十減二十四，才能讓比較對象與六公里的單位一致。"
      },
      {
        "id": "L2",
        "prompt": "原有 80 枝、售出 27 枝，剩餘欄空白。",
        "solution": [
          "剩餘＝原有－售出。",
          "80－27＝53。"
        ],
        "answer": "53 枝。",
        "why": "空格位於剩餘欄，表示要由原有量扣除已流出的售出量，而不是把兩欄相加。五十三枝加回二十七枝正好恢復八十枝，這項逆運算可同時核對數值與欄位關係。"
      },
      {
        "id": "L3",
        "prompt": "四次測量 12.4、12.6、12.5、12.5，摘要寫平均 12.8。",
        "solution": [
          "原始資料總和 50.0。",
          "50.0÷4＝12.5，摘要列不一致。"
        ],
        "answer": "正確平均 12.5。",
        "why": "摘要列是由原始資料計算出的結論，不應被視為第五筆測量或無條件相信。把四筆數值重新相加並除以四，所得十二點五與摘要十二點八不同，因此可確定摘要抄錄有誤。"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "沿錯列讀到鄰格。",
        "why": "眼睛未同時對準列與欄。",
        "fix": "用手指或直尺沿列移動。"
      },
      {
        "wrong": "把 24 公里當 24 元。",
        "why": "忽略欄標題。",
        "fix": "每個數值旁暫寫單位。"
      },
      {
        "wrong": "總計列再次加入總和。",
        "why": "未辨認摘要列。",
        "fix": "先標記原始類別與摘要。"
      },
      {
        "wrong": "直接比較月用水總量。",
        "why": "忽略月份天數。",
        "fix": "先換成每日量。"
      }
    ],
    "selfCheck": [
      "我能用一句話說明每一欄嗎？",
      "所有運算資料的單位相同嗎？",
      "總計是否被重複計入？",
      "註記是否改變比較方法？"
    ],
    "summary": [
      "讀數字前先讀列、欄與單位。",
      "交叉格要同時滿足兩個標題。",
      "總計可以補缺值，也應被重新驗算。",
      "公平比較常需要利用腳註標準化。"
    ],
    "connections": {
      "previous": "無；本技能建立統計資料閱讀的共同語言。",
      "next": [
        "下一技能把原始資料整理成次數與相對次數分配表。",
        "後續所有統計圖都需要同樣的標題、尺度與單位意識。"
      ]
    },
    "figureReferences": [],
    "accessibilityNotes": "本講義可完全以文字理解；若有圖形，替代文字提供所有必要數值。",
    "practiceLinks": {
      "mcQuestionIds": [
        "u09-s001-v001",
        "u09-s001-v002",
        "u09-s001-v003",
        "u09-s001-v004",
        "u09-s001-v005",
        "u09-s001-v006",
        "u09-s001-v007",
        "u09-s001-v008",
        "u09-s001-v009",
        "u09-s001-v010",
        "u09-s001-v011",
        "u09-s001-v012"
      ],
      "constructedResponseIds": [
        "u09-s001-cr001",
        "u09-s001-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "從表格最基本結構開始，例題依序進入讀格、補值與一致性檢查。",
      "scopeCheck": "符合國中會考範圍；未引入四分位數與盒狀圖。",
      "prerequisiteAudit": "本技能無鎖定先備技能，從表格的列、欄、單位與註記開始。",
      "symbolAndUnitAudit": "所有符號在使用前定義；單位與取位規則在例題中明示。",
      "skillSpecificEvidence": "特別處理欄位錯置、空白格、總計重複與腳註期間差異。",
      "legacyContentUsed": false,
      "decision": "pass"
    },
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "contentSha256": "a571d0e5a28af28264a7b340fcae77ecbed83ca9ddc9d1cccdef1090782d2bac"
  },
  "mcQuestions": [
    {
      "questionId": "u09-s001-v001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "data-table-reading",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "下表記錄四位學生借書本數：甲 3、乙 5、丙 2、丁 4。乙借了幾本？",
      "givenConditions": [
        "每列代表一位學生，單位為本。"
      ],
      "target": "讀取指定儲存格",
      "choices": [
        "5 本",
        "3 本",
        "2 本",
        "4 本"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "找到「乙」所在列，再讀取借書本數欄，得到 5。",
        "derivedAnswer": "5 本",
        "trustStoredAnswer": false
      },
      "explanation": "資料表要先對準列標題與欄標題；乙對應的數值是 5。 題目只問乙的借書本數，沿乙列與借書欄交會處讀得五本；甲、丙、丁的數字分屬其他列，不能因排列較前就選取。",
      "steps": [
        "確認列標題是學生姓名。",
        "沿乙所在列讀到借書本數 5。",
        "將答案五本放回乙列核對，確認姓名、數值與單位完全對應。"
      ],
      "optionAnalysis": [
        {
          "choice": "5 本",
          "truth": true,
          "reason": "乙欄直接標示 5 本。"
        },
        {
          "choice": "3 本",
          "truth": false,
          "reason": "3 是甲的資料。"
        },
        {
          "choice": "2 本",
          "truth": false,
          "reason": "2 是丙的資料。"
        },
        {
          "choice": "4 本",
          "truth": false,
          "reason": "4 是丁的資料。"
        }
      ],
      "misconceptionTarget": "看見第一個數就作答 未同時對準學生列與借書欄，讀成相鄰學生的資料。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "答案保留「本」，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "姓名與數值一一對應，沒有合計列干擾。",
      "difficultyReason": "只需直接定位單一儲存格，屬基礎判讀。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f950c102c875b3a9ed965a5618978b1cfc12857b9e35ffe030781a447102d106"
    },
    {
      "questionId": "u09-s001-v002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "data-table-reading",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "某班值日表如下：星期一 2 人、星期二 3 人、星期三 2 人、星期四 4 人、星期五 3 人。哪一天人數最多？",
      "givenConditions": [
        "單位皆為人。"
      ],
      "target": "由表格找最大值對應類別",
      "choices": [
        "星期一",
        "星期四",
        "星期二",
        "星期五"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "比較 2、3、2、4、3，最大值 4 對應星期四。",
        "derivedAnswer": "星期四",
        "trustStoredAnswer": false
      },
      "explanation": "判讀表格時，最大數值與其列標籤必須一起回答。 五天人數依序是二、三、二、四、三，最大值四只出現在星期四；答案須回到該數值的日期標籤，而不是只寫四人。",
      "steps": [
        "列出各日人數。",
        "找最大值 4。",
        "回到該列讀出星期四。"
      ],
      "optionAnalysis": [
        {
          "choice": "星期一",
          "truth": false,
          "reason": "星期一只有 2 人。"
        },
        {
          "choice": "星期四",
          "truth": true,
          "reason": "星期四為 4 人，是五天最大值。"
        },
        {
          "choice": "星期二",
          "truth": false,
          "reason": "星期二為 3 人，小於 4。"
        },
        {
          "choice": "星期五",
          "truth": false,
          "reason": "星期五為 3 人，小於 4。"
        }
      ],
      "misconceptionTarget": "只寫最大值而忘記類別 找到最大數值後沒有回讀日期標籤，或把相同的三人列當最大。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "答案是日期類別，不需附數值也可；附 4 人更完整。",
      "ambiguityAndBoundaryAudit": "星期二與星期五同為 3，但不是最大。",
      "difficultyReason": "需比較全表五個數值，仍屬基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d720be13e7a11dfed19d870e08fe3f812806032b905b18d9b0e34f3c4573aaa0"
    },
    {
      "questionId": "u09-s001-v003",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "data-table-reading",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "飲料銷售表列出紅茶 18 杯、綠茶 15 杯、奶茶 22 杯、果茶 10 杯。總共售出多少杯？",
      "givenConditions": [
        "四類互不重複，單位皆為杯。"
      ],
      "target": "由分類資料求總數",
      "choices": [
        "55 杯",
        "60 杯",
        "65 杯",
        "75 杯"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "逐項相加：18+15=33，33+22=55，55+10=65。",
        "derivedAnswer": "65 杯",
        "trustStoredAnswer": false
      },
      "explanation": "表中沒有總計列時，應確認每一類都只加一次。 四種飲料互不重疊，總杯數要把十八、十五、二十二、十各加一次，得到六十五；結果大於任何單項且未把總計重複納入。",
      "steps": [
        "核對四個品項。",
        "依序加總。",
        "檢查總數大於最大單項 22。"
      ],
      "optionAnalysis": [
        {
          "choice": "55 杯",
          "truth": false,
          "reason": "少加了果茶 10 杯。"
        },
        {
          "choice": "60 杯",
          "truth": false,
          "reason": "加總計算錯誤。"
        },
        {
          "choice": "65 杯",
          "truth": true,
          "reason": "18+15+22+10=65。"
        },
        {
          "choice": "75 杯",
          "truth": false,
          "reason": "把其中一項重複計入。"
        }
      ],
      "misconceptionTarget": "漏加或重複加一列 加總時漏掉果茶或重複計入奶茶，沒有逐類勾選已使用資料。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "總數為整數杯，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "題目明示四類為全部品項，可直接加總。",
      "difficultyReason": "除讀表外需完成四數加總，為基礎綜合。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "86e4f8451eeb4cc27fd454e9a73fec68e1ea03d8c5a29b3602a3a995c43400c3"
    },
    {
      "questionId": "u09-s001-v004",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "data-table-reading",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "氣溫表顯示：8 時 18°C、10 時 22°C、12 時 27°C、14 時 25°C。12 時比 8 時高多少？",
      "givenConditions": [
        "同一測站、同一溫標。"
      ],
      "target": "跨列擷取後求差",
      "choices": [
        "5°C",
        "7°C",
        "45°C",
        "9°C"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "先讀 12 時為 27°C、8 時為 18°C，再算 27-18=9°C。",
        "derivedAnswer": "9°C",
        "trustStoredAnswer": false
      },
      "explanation": "「高多少」求差，不是求和；要先選對兩個時點。 十二時的二十七度是比較終值，八時的十八度是基準值，以終值減基準值才得到升高九度；兩溫度相加沒有溫差意義。",
      "steps": [
        "定位 12 時與 8 時。",
        "用較高值減較低值。",
        "保留溫差單位 °C。"
      ],
      "optionAnalysis": [
        {
          "choice": "5°C",
          "truth": false,
          "reason": "5 是 12 時與 10 時之差。"
        },
        {
          "choice": "7°C",
          "truth": false,
          "reason": "7 是 14 時與 8 時之差。"
        },
        {
          "choice": "45°C",
          "truth": false,
          "reason": "45 是把兩溫度相加。"
        },
        {
          "choice": "9°C",
          "truth": true,
          "reason": "27-18=9°C。"
        }
      ],
      "misconceptionTarget": "把「高多少」誤算為相加 把升高多少誤解成兩時刻溫度總和，或顛倒相減得到負值。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "溫差寫 9°C；此題不涉及負溫度。",
      "ambiguityAndBoundaryAudit": "兩時點唯一，差值方向明確。",
      "difficultyReason": "需要跨兩列取值並運算，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "78c282ac7b78f155b7cb2bc4d4ce413999d68fcde88945c7d17d8b08239adea0"
    },
    {
      "questionId": "u09-s001-v005",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "data-table-reading",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "庫存表：鉛筆原有 80 枝，售出 27 枝，表中「剩餘」空白。剩餘應填多少？",
      "givenConditions": [
        "售出數不超過原有數。"
      ],
      "target": "利用欄位關係補缺值",
      "choices": [
        "53 枝",
        "107 枝",
        "27 枝",
        "63 枝"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "剩餘＝原有－售出＝80-27=53。",
        "derivedAnswer": "53 枝",
        "trustStoredAnswer": false
      },
      "explanation": "空格的位置由欄標題「剩餘」決定應做減法。 剩餘量是原有庫存扣除已售數量，八十減二十七為五十三；再驗算五十三加二十七回到八十，證明欄位關係一致。",
      "steps": [
        "讀懂三欄關係。",
        "以 80 減 27。",
        "回填 53 枝。"
      ],
      "optionAnalysis": [
        {
          "choice": "53 枝",
          "truth": true,
          "reason": "80-27=53。"
        },
        {
          "choice": "107 枝",
          "truth": false,
          "reason": "把原有與售出相加。"
        },
        {
          "choice": "27 枝",
          "truth": false,
          "reason": "直接抄售出數。"
        },
        {
          "choice": "63 枝",
          "truth": false,
          "reason": "減法計算錯誤。"
        }
      ],
      "misconceptionTarget": "不看欄意義而任意相加 未讀剩餘欄的意義而把原有與售出相加，得到不可能超過原有的庫存。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "枝數為整數。",
      "ambiguityAndBoundaryAudit": "欄位關係唯一；未提進貨，因此不另加數量。",
      "difficultyReason": "要由語意建立等量關係，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "98c03ece295369192de35381f6148feb7c4b1e75a2b8fcbf9dc4cf8f2683deec"
    },
    {
      "questionId": "u09-s001-v006",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "data-table-reading",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "某交通表的欄位依序是「路線、全程公里數、票價」。A 線資料為 24、36；B 線為 30、42。下列敘述何者正確？",
      "givenConditions": [
        "公里數與元不可混算。"
      ],
      "target": "避免欄位錯置並比較",
      "choices": [
        "A 線票價 24 元",
        "B 線比 A 線長 6 公里",
        "B 線票價 30 元",
        "兩線票價相差 12 元"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "依欄位順序，A 線長 24 公里票價 36 元；B 線長 30 公里票價 42 元，長度差 6。",
        "derivedAnswer": "B 線比 A 線長 6 公里",
        "trustStoredAnswer": false
      },
      "explanation": "沒有格線時更要依欄位標題確認數字的意義。 欄位順序使二十四、三十都代表公里數，三十減二十四為六公里；三十與二十四不是票價，兩票價四十二與三十六也只差六元。",
      "steps": [
        "重建每列兩個欄位。",
        "分別檢查四個敘述。",
        "確認只有長度差 6 正確。"
      ],
      "optionAnalysis": [
        {
          "choice": "A 線票價 24 元",
          "truth": false,
          "reason": "24 位於公里數欄，不是票價。"
        },
        {
          "choice": "B 線比 A 線長 6 公里",
          "truth": true,
          "reason": "30-24=6 公里。"
        },
        {
          "choice": "B 線票價 30 元",
          "truth": false,
          "reason": "30 位於公里數欄，不是票價。"
        },
        {
          "choice": "兩線票價相差 12 元",
          "truth": false,
          "reason": "42-36=6 元，不是 12 元。"
        }
      ],
      "misconceptionTarget": "把同列第一個數當票價 忽略欄位順序，把每列第一個數誤讀成票價或跨欄相減。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "長度差用公里；票價差用元。",
      "ambiguityAndBoundaryAudit": "每列數值順序已明示，無其他解讀。",
      "difficultyReason": "同時考欄位配對與選項核驗，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a2b71b88b8d6bd808ac869e121722ba52a255b59e61fcab760d54f60dc6ec273"
    },
    {
      "questionId": "u09-s001-v007",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "data-table-reading",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "表中列出四次測量值 12.4、12.6、12.5、12.5 公分，另有一列「平均 12.8 公分」。下列判斷何者正確？",
      "givenConditions": [
        "單位皆為公分，平均保留一位小數。"
      ],
      "target": "檢查表內資料一致性",
      "choices": [
        "平均 12.8 公分一定正確",
        "四次總和是 50.8 公分",
        "平均列可能抄錯，因四次平均是 12.5 公分",
        "最大值是 12.8 公分"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "總和 50.0，除以 4 得 12.5；因此平均列 12.8 與原始資料矛盾。",
        "derivedAnswer": "平均列可能抄錯，因四次平均是 12.5 公分",
        "trustStoredAnswer": false
      },
      "explanation": "判讀資料表也包含檢查摘要列是否與資料一致。 四筆原始值相加為五十，除以四得到十二點五；摘要十二點八不是原始測量，也不能拿來當最大值或再加入平均計算。",
      "steps": [
        "只取四次原始測量。",
        "重新計算平均。",
        "比較計算值與摘要列。"
      ],
      "optionAnalysis": [
        {
          "choice": "平均 12.8 公分一定正確",
          "truth": false,
          "reason": "表中的摘要值仍應核算，不能因印在表內就必然正確。"
        },
        {
          "choice": "四次總和是 50.8 公分",
          "truth": false,
          "reason": "四次總和是 50.0。"
        },
        {
          "choice": "平均列可能抄錯，因四次平均是 12.5 公分",
          "truth": true,
          "reason": "(12.4+12.6+12.5+12.5)÷4=12.5，與表列不符。"
        },
        {
          "choice": "最大值是 12.8 公分",
          "truth": false,
          "reason": "12.8 是摘要列，不是一次測量值。"
        }
      ],
      "misconceptionTarget": "盲目信任表格摘要 把摘要列視為不可質疑的原始資料，沒有用四筆測量重新驗證平均。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "50.0÷4=12.5，無額外四捨五入。",
      "ambiguityAndBoundaryAudit": "明確區分原始資料列與摘要列。",
      "difficultyReason": "需辨識異常摘要並重算，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8c28b06a2709beee34693ef1f2d998715f6b2806dc9a9fb9c6482d28725ba674"
    },
    {
      "questionId": "u09-s001-v008",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "data-table-reading",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "某表列出甲、乙兩店週一至週三來客數。甲：40、50、60；乙：55、45、50。哪一敘述正確？",
      "givenConditions": [
        "人數皆為整數。"
      ],
      "target": "跨欄整合並驗證敘述",
      "choices": [
        "甲每天都比乙多",
        "乙三天總數為 140",
        "週二兩店相差 15 人",
        "三天總來客數兩店相同"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "分別加總：甲 40+50+60=150；乙 55+45+50=150。",
        "derivedAnswer": "三天總來客數兩店相同",
        "trustStoredAnswer": false
      },
      "explanation": "比較多列資料時不能只看單日，敘述「三天總數」要完整加總。 甲店三日合計一百五十，乙店三日也合計一百五十；逐日高低雖不同，題目所述的三天總數仍完全相同，其他敘述可由單日數值排除。",
      "steps": [
        "辨識敘述所需範圍。",
        "計算兩店三日總數。",
        "逐一排除其餘選項。"
      ],
      "optionAnalysis": [
        {
          "choice": "甲每天都比乙多",
          "truth": false,
          "reason": "週一甲 40 小於乙 55。"
        },
        {
          "choice": "乙三天總數為 140",
          "truth": false,
          "reason": "乙總數 55+45+50=150。"
        },
        {
          "choice": "週二兩店相差 15 人",
          "truth": false,
          "reason": "週二差 50-45=5。"
        },
        {
          "choice": "三天總來客數兩店相同",
          "truth": true,
          "reason": "甲總數 150，乙總數也 150。"
        }
      ],
      "misconceptionTarget": "以單一天的大小代替整體比較 只挑某一天比較大小，便把局部高低錯當三日合計的整體結論。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "總數單位為人，不求平均。",
      "ambiguityAndBoundaryAudit": "「每天」與「三天總數」範圍不同，題目語意明確。",
      "difficultyReason": "需要同時檢查多個量詞與總量，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "21465dd953a74790b4f258c584283a7a668fe122914d643f2372b22159ae4fec"
    },
    {
      "questionId": "u09-s001-v009",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "data-table-reading",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "成績表有 5 人：72、88、91、缺值、79，總分列為 415。缺值是多少？",
      "givenConditions": [
        "分數無單位，皆視為同一量尺。"
      ],
      "target": "由總計反推單一缺值",
      "choices": [
        "85",
        "80",
        "90",
        "95"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "已知四人總分 330，缺值＝415-330=85。",
        "derivedAnswer": "85",
        "trustStoredAnswer": false
      },
      "explanation": "利用總計列回推缺值時，要先加已知項，再由總數扣除。 四個已知分數七十二、八十八、九十一、七十九合計三百三十，以總分四百一十五扣除後得到八十五；代回五人總分正好吻合。",
      "steps": [
        "加總已知四項得 330。",
        "以總分 415 減 330。",
        "代回驗證總和。"
      ],
      "optionAnalysis": [
        {
          "choice": "85",
          "truth": true,
          "reason": "415-(72+88+91+79)=85。"
        },
        {
          "choice": "80",
          "truth": false,
          "reason": "若為 80，總分只到 410。"
        },
        {
          "choice": "90",
          "truth": false,
          "reason": "若為 90，總分會是 420。"
        },
        {
          "choice": "95",
          "truth": false,
          "reason": "若為 95，總分會是 425。"
        }
      ],
      "misconceptionTarget": "把總分除以人數當成缺值 把總分直接除以五當缺值，混淆全班平均與單一學生分數。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "答案 85 為整數，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "只有一個缺值，總分唯一決定它。",
      "difficultyReason": "需要建立總和方程並回代，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5809723611bee2db826ed8b62b9611a9d750e226b4f122b70203f7412ac488a7"
    },
    {
      "questionId": "u09-s001-v010",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "data-table-reading",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "社區用水表（單位：立方公尺）列出 1 月 120、2 月 108、3 月 135；備註指出 2 月只有 28 天。若要比較『平均每日用水量』，哪個做法正確？",
      "givenConditions": [
        "用水量單位轉為立方公尺／日；不要求實際算到小數。"
      ],
      "target": "使用表格備註選擇公平比較基準",
      "choices": [
        "直接比較 120、108、135",
        "各月用水量分別除以該月天數再比較",
        "三個月都除以 30",
        "只比較 1 月與 3 月"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "比較每日量需算 120÷31、108÷28、135÷31，再比較商。",
        "derivedAnswer": "各月用水量分別除以該月天數再比較",
        "trustStoredAnswer": false
      },
      "explanation": "備註中的天數是必要條件，決定合理的標準化方式。 各月天數不同，總用水量不能直接代表每日用量；一月與三月各除三十一日，二月除二十八日，所得商才具有相同的每日基準。",
      "steps": [
        "辨認比較目標是每日。",
        "讀取各月天數備註。",
        "以各月總量除以相應天數。"
      ],
      "optionAnalysis": [
        {
          "choice": "直接比較 120、108、135",
          "truth": false,
          "reason": "總量受天數影響，不能直接代表每日使用。"
        },
        {
          "choice": "各月用水量分別除以該月天數再比較",
          "truth": true,
          "reason": "月份天數不同，需換成每日量才公平。"
        },
        {
          "choice": "三個月都除以 30",
          "truth": false,
          "reason": "2 月不是 30 天，統一除 30 會扭曲。"
        },
        {
          "choice": "只比較 1 月與 3 月",
          "truth": false,
          "reason": "忽略 2 月不能回答三月比較。"
        }
      ],
      "misconceptionTarget": "忽略腳註而直接比較總量 忽略二月天數註記，直接以月總量或統一除以三十日比較。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 120,
      "unitAndRoundingCheck": "題目只問方法，不需規定四捨五入。",
      "ambiguityAndBoundaryAudit": "月份天數依一般曆法，備註已補充 2 月資訊。",
      "difficultyReason": "情境中的不同觀察天數使標準化不可省略。",
      "literacyNecessityReason": "必須理解水費管理中總量與每日量的差別，情境不可刪除。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e99cc3f0bbd9ecadc1eaeae2fce850bae121087bb28fee9a212930d1b6769f02"
    },
    {
      "questionId": "u09-s001-v011",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "data-table-reading",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "校車紀錄表列出『上車人數、下車人數、車上人數』。某站上車 7 人、下車 3 人，站前車上 26 人。站後車上人數應為多少？",
      "givenConditions": [
        "人數為整數，結果不得為負。"
      ],
      "target": "依資料欄位還原動態總量",
      "choices": [
        "16 人",
        "22 人",
        "30 人",
        "36 人"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "站後＝26+7-3=30。",
        "derivedAnswer": "30 人",
        "trustStoredAnswer": false
      },
      "explanation": "欄位名稱描述人流方向；必須先加上車、再減下車。 站前二十六人是起始量，上車七人使人數增加，下車三人使人數減少，因此站後為三十人；以三十減七再加三也能回到站前量。",
      "steps": [
        "讀出站前基準 26。",
        "加入上車 7。",
        "扣除下車 3。"
      ],
      "optionAnalysis": [
        {
          "choice": "16 人",
          "truth": false,
          "reason": "把三個數字相減錯誤。"
        },
        {
          "choice": "22 人",
          "truth": false,
          "reason": "只扣下車，漏加上車。"
        },
        {
          "choice": "30 人",
          "truth": true,
          "reason": "26+7-3=30。"
        },
        {
          "choice": "36 人",
          "truth": false,
          "reason": "把上車與下車都加上。"
        }
      ],
      "misconceptionTarget": "不辨認流入與流出方向 沒有分辨上車是流入、下車是流出，把兩個人數都加上或都減去。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 110,
      "unitAndRoundingCheck": "答案單位為人。",
      "ambiguityAndBoundaryAudit": "上、下車發生先後不影響淨變化；無其他乘客變動。",
      "difficultyReason": "需要把交通紀錄的三欄關係轉成運算。",
      "literacyNecessityReason": "校車載客量必須由表中流入與流出共同決定，刪除情境會失去欄位意義。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0d3b314fa899436a76116b54782066dc30edaf1f2b964fdc34a8662e4704619e"
    },
    {
      "questionId": "u09-s001-v012",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "data-table-reading",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "食品標示表寫『每份 30 公克，本包裝含 2.5 份，每份糖 8 公克』。若吃完整包，糖攝取量是多少？",
      "givenConditions": [
        "公克乘份數仍為公克。"
      ],
      "target": "整合表頭與份數計算總攝取",
      "choices": [
        "8 公克",
        "10.5 公克",
        "24 公克",
        "20 公克"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "整包糖量＝每份糖量×份數＝8×2.5=20。",
        "derivedAnswer": "20 公克",
        "trustStoredAnswer": false
      },
      "explanation": "營養表同時含『每份』與『每包』，不能只抄單一格。 每份八公克是單份糖量，整包共有二點五份，故完整食用量為八乘二點五等於二十公克；每份三十公克是食品重量，不是糖量。",
      "steps": [
        "辨認每份糖 8 公克。",
        "辨認整包 2.5 份。",
        "相乘求整包總量。"
      ],
      "optionAnalysis": [
        {
          "choice": "8 公克",
          "truth": false,
          "reason": "8 是每份，不是整包。"
        },
        {
          "choice": "10.5 公克",
          "truth": false,
          "reason": "把 8 與 2.5 相加。"
        },
        {
          "choice": "24 公克",
          "truth": false,
          "reason": "把份數錯看成 3 份。"
        },
        {
          "choice": "20 公克",
          "truth": true,
          "reason": "8×2.5=20 公克。"
        }
      ],
      "misconceptionTarget": "混淆每份數值與整包數值 只抄每份糖量，或把每份食品重量三十公克誤當整包糖量。",
      "prerequisiteCheck": {
        "skillIds": [],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 110,
      "unitAndRoundingCheck": "結果 20 公克，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "2.5 份可直接乘；未涉及每日參考值百分比。",
      "difficultyReason": "需跨越三個標示欄位並理解乘法關係。",
      "literacyNecessityReason": "食品標示的每份與整包差異是計算核心，情境不可刪除。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "adb8531c3a11bec79af68b37d5c939a92feea549c979529195c65c9ce8b040ba"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u09-s001-cr001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "data-table-reading",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "校刊整理四個社團上學期與本學期的參與人數如下：科學社 28、35；美術社 32、30；籃球社 25、40；閱讀社 36、36（每組數字依序為上學期、本學期）。請完成：(1) 找出本學期人數最多的社團；(2) 計算各社團人數變化；(3) 判斷「所有社團本學期人數都增加」是否正確並說明。",
      "givenConditions": [],
      "target": "正確交叉讀表、計算差值並以反例檢查整體敘述。",
      "requiredWork": [
        "必須明示比較的是本學期欄。",
        "四個變化量均以本學期減上學期。",
        "用表中至少一個反例判斷敘述。"
      ],
      "standardSolution": [
        "本學期人數：科學35、美術30、籃球40、閱讀36，所以籃球社最多。",
        "變化量：科學+7、美術-2、籃球+15、閱讀0。",
        "敘述錯誤；美術社減少2人，閱讀社也沒有增加。",
        "用本學期欄再核對可得最大值四十只屬籃球社；變化量的正、負、零也分別對應增加、減少、不變，因此美術與閱讀兩列已足以反駁「所有社團都增加」。"
      ],
      "alternativeMethod": "也可先逐列標記「增加、減少、不變」，再比較本學期欄最大值。",
      "reasoningSteps": [
        "辨認列是社團、兩欄是學期。",
        "固定讀本學期欄找最大值40。",
        "逐列做後期減前期。",
        "用減少或不變的列否定全稱敘述。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "籃球社、四個變化量與敘述錯誤的具體理由全部正確。"
        },
        {
          "score": 2,
          "criteria": "主要讀表與敘述判斷正確，但一個變化量算錯或漏寫一個反例。"
        },
        {
          "score": 1,
          "criteria": "能正確讀出本學期最多者，或至少算對兩個變化量並顯示後減前。"
        },
        {
          "score": 0,
          "criteria": "混用兩欄，且無可辨認的正確比較或差值方法。"
        }
      ],
      "partialCreditRules": [
        "若變化量符號全相反但數值正確，最多2分。",
        "只寫「錯」而無表中理由，敘述判斷部分不給完整分。"
      ],
      "followThroughPolicy": "若學生誤讀單一表格數字，但後續差值與判斷一致，可保留方法分；若整欄顛倒，最高2分。",
      "unitAndNotationRules": "所有人數與變化量以「人」為單位；+、-、0 或「增加、減少、不變」均可。",
      "answerOnlyPolicy": "只寫籃球社而無其餘要求，最高1分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "重新讀本學期欄35、30、40、36，最大40；逐列相減得7、-2、15、0，因此全稱命題不成立。",
        "boundaryAndAmbiguityAudit": "欄位順序已明示；沒有總計或單位歧義。",
        "rubricAlignmentEvidence": "3分要求涵蓋定位、運算與邏輯判斷三個任務。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "81157066677d548032afaff29923c162fcb6aec5cbe2617f9695cfaf0c2421d0",
      "commonErrors": [
        "把兩學期欄位顛倒，以前期減後期而反轉各社團變化量。",
        "只看到科學社與籃球社增加，就忽略美術社減少及閱讀社不變，錯誤接受全稱敘述。"
      ]
    },
    {
      "questionId": "u09-s001-cr002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "data-table-reading",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "某展覽四日入場資料表列出：週四上午120人、下午180人；週五上午150人、下午210人；週六上午240人、下午欄缺失；週日上午200人、下午260人。已知四日總入場人數為1,660人。求週六下午人數，並比較週六與週日的單日總人數。",
      "givenConditions": [],
      "target": "利用總計補缺格，再依列合計進行公平比較。",
      "requiredWork": [
        "先加總七個已知格。",
        "由總計求週六下午缺值。",
        "分別算週六與週日單日總數並比較差額。"
      ],
      "standardSolution": [
        "七個已知格總和=120+180+150+210+240+200+260=1,360。",
        "週六下午=1,660-1,360=300人。",
        "週六總數=240+300=540人；週日總數=200+260=460人。",
        "週六比週日多80人。",
        "代回八個時段後總數為一千六百六十，週六五百四十也確實比週日四百六十多八十人；缺值、日合計與比較結果三層驗算一致。"
      ],
      "alternativeMethod": "可先求除週六外三日總數1,120，再由1,660-1,120=540得週六全日，最後扣上午240得下午300。",
      "reasoningSteps": [
        "確認總計包含8個時段。",
        "建立已知總和或先求其他三日總和。",
        "以總計減已知量補缺值。",
        "做列合計後相減。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "求得週六下午300人、週六540人、週日460人及多80人，計算脈絡完整。"
        },
        {
          "score": 2,
          "criteria": "補缺值正確且能正確判斷週六較多，但單日總數或差額有一處小錯。"
        },
        {
          "score": 1,
          "criteria": "正確列出1660減已知總和，或正確算出週日460人。"
        },
        {
          "score": 0,
          "criteria": "把總計當作週六資料，或無合理的補值與比較方法。"
        }
      ],
      "partialCreditRules": [
        "若七格加總有單一算術錯誤，後續一致採錯誤值可依跟隨錯誤給至2分。",
        "只求300人但未比較，最高2分。"
      ],
      "followThroughPolicy": "允許早期加總錯誤的後續一致計算；不可因錯誤導致負人數仍不檢查。",
      "unitAndNotationRules": "所有結果須標「人」；差額應為非負80人並說明週六較多。",
      "answerOnlyPolicy": "只寫300、540、460、80且全部正確，因缺乏必要過程最高2分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "七個已知值和1360，缺值300；週六540、週日460，差80。",
        "boundaryAndAmbiguityAudit": "四日總計涵蓋上午與下午已明示；不存在重複計數。",
        "rubricAlignmentEvidence": "補缺值與列比較各占實質評分，跟隨錯誤規則對應加總步驟。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "9e5e3c54036293848eb5463ddca92d01f2c4aa4c3e21144fee48096919a1b45f",
      "commonErrors": [
        "把四日總計再加入七個已知格，或漏加其中一個時段而求錯週六下午。",
        "求得週六下午三百人後直接和週日總數比較，沒有先算週六單日總數五百四十。"
      ]
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u09-s001-v001-semantic-r1",
      "questionId": "u09-s001-v001",
      "unitId": "u09",
      "skillId": "data-table-reading",
      "independentRecalculation": "找到「乙」所在列，再讀取借書本數欄，得到 5。",
      "correctChoiceCheck": "獨立計算得到「5 本」，位於索引 0。",
      "distractorAudit": [
        "3 是甲的資料。",
        "2 是丙的資料。",
        "4 是丁的資料。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「5 本」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「資料表判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "姓名與數值一一對應，沒有合計列干擾。",
      "difficultyEvidence": "只需直接定位單一儲存格，屬基礎判讀。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "af4c4411cd8359c34d5e73bd8b4d0b5584f614f1ddf1a026c71634a7f6c0e242"
    },
    {
      "reviewId": "u09-s001-v002-semantic-r1",
      "questionId": "u09-s001-v002",
      "unitId": "u09",
      "skillId": "data-table-reading",
      "independentRecalculation": "比較 2、3、2、4、3，最大值 4 對應星期四。",
      "correctChoiceCheck": "獨立計算得到「星期四」，位於索引 1。",
      "distractorAudit": [
        "星期一只有 2 人。",
        "星期二為 3 人，小於 4。",
        "星期五為 3 人，小於 4。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「星期四」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「資料表判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "星期二與星期五同為 3，但不是最大。",
      "difficultyEvidence": "需比較全表五個數值，仍屬基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "b6b8d085b20f263d014dad9951211aec8ce70407dc83c8655835906b81bf4fb5"
    },
    {
      "reviewId": "u09-s001-v003-semantic-r1",
      "questionId": "u09-s001-v003",
      "unitId": "u09",
      "skillId": "data-table-reading",
      "independentRecalculation": "逐項相加：18+15=33，33+22=55，55+10=65。",
      "correctChoiceCheck": "獨立計算得到「65 杯」，位於索引 2。",
      "distractorAudit": [
        "少加了果茶 10 杯。",
        "加總計算錯誤。",
        "把其中一項重複計入。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「65 杯」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「資料表判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "題目明示四類為全部品項，可直接加總。",
      "difficultyEvidence": "除讀表外需完成四數加總，為基礎綜合。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "49b85fd1a38c9bb76cecbe3f5275ca307bbf3affda904a03e43e641e904d664d"
    },
    {
      "reviewId": "u09-s001-v004-semantic-r1",
      "questionId": "u09-s001-v004",
      "unitId": "u09",
      "skillId": "data-table-reading",
      "independentRecalculation": "先讀 12 時為 27°C、8 時為 18°C，再算 27-18=9°C。",
      "correctChoiceCheck": "獨立計算得到「9°C」，位於索引 3。",
      "distractorAudit": [
        "5 是 12 時與 10 時之差。",
        "7 是 14 時與 8 時之差。",
        "45 是把兩溫度相加。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「9°C」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「資料表判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "兩時點唯一，差值方向明確。",
      "difficultyEvidence": "需要跨兩列取值並運算，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "deabcee9f9bc9fae6e81f8fbb648ad67b0e72dffec28b592fa130e73604f5b0b"
    },
    {
      "reviewId": "u09-s001-v005-semantic-r1",
      "questionId": "u09-s001-v005",
      "unitId": "u09",
      "skillId": "data-table-reading",
      "independentRecalculation": "剩餘＝原有－售出＝80-27=53。",
      "correctChoiceCheck": "獨立計算得到「53 枝」，位於索引 0。",
      "distractorAudit": [
        "把原有與售出相加。",
        "直接抄售出數。",
        "減法計算錯誤。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「53 枝」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「資料表判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "欄位關係唯一；未提進貨，因此不另加數量。",
      "difficultyEvidence": "要由語意建立等量關係，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "b20df02f1dea175ec803eb6245d16037bcb0b4138e325ea2d37756c8b58cb0bc"
    },
    {
      "reviewId": "u09-s001-v006-semantic-r1",
      "questionId": "u09-s001-v006",
      "unitId": "u09",
      "skillId": "data-table-reading",
      "independentRecalculation": "依欄位順序，A 線長 24 公里票價 36 元；B 線長 30 公里票價 42 元，長度差 6。",
      "correctChoiceCheck": "獨立計算得到「B 線比 A 線長 6 公里」，位於索引 1。",
      "distractorAudit": [
        "24 位於公里數欄，不是票價。",
        "30 位於公里數欄，不是票價。",
        "42-36=6 元，不是 12 元。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「B 線比 A 線長 6 公里」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「資料表判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "每列數值順序已明示，無其他解讀。",
      "difficultyEvidence": "同時考欄位配對與選項核驗，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "ccab8d24362960f477fdc26545f7c38834b0eeb70e395f03557f36fe884a820a"
    },
    {
      "reviewId": "u09-s001-v007-semantic-r1",
      "questionId": "u09-s001-v007",
      "unitId": "u09",
      "skillId": "data-table-reading",
      "independentRecalculation": "總和 50.0，除以 4 得 12.5；因此平均列 12.8 與原始資料矛盾。",
      "correctChoiceCheck": "獨立計算得到「平均列可能抄錯，因四次平均是 12.5 公分」，位於索引 2。",
      "distractorAudit": [
        "表中的摘要值仍應核算，不能因印在表內就必然正確。",
        "四次總和是 50.0。",
        "12.8 是摘要列，不是一次測量值。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「平均列可能抄錯，因四次平均是 12.5 公分」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「資料表判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "明確區分原始資料列與摘要列。",
      "difficultyEvidence": "需辨識異常摘要並重算，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "fd2c3eb521a9b79b76ae61c5aeae23be5095547b6fa479fae73a832b1252741f"
    },
    {
      "reviewId": "u09-s001-v008-semantic-r1",
      "questionId": "u09-s001-v008",
      "unitId": "u09",
      "skillId": "data-table-reading",
      "independentRecalculation": "分別加總：甲 40+50+60=150；乙 55+45+50=150。",
      "correctChoiceCheck": "獨立計算得到「三天總來客數兩店相同」，位於索引 3。",
      "distractorAudit": [
        "週一甲 40 小於乙 55。",
        "乙總數 55+45+50=150。",
        "週二差 50-45=5。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「三天總來客數兩店相同」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「資料表判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "「每天」與「三天總數」範圍不同，題目語意明確。",
      "difficultyEvidence": "需要同時檢查多個量詞與總量，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "184467027f0dd01238902d75cae1fad5060721852f05b4293d169f71e75f4c9a"
    },
    {
      "reviewId": "u09-s001-v009-semantic-r1",
      "questionId": "u09-s001-v009",
      "unitId": "u09",
      "skillId": "data-table-reading",
      "independentRecalculation": "已知四人總分 330，缺值＝415-330=85。",
      "correctChoiceCheck": "獨立計算得到「85」，位於索引 0。",
      "distractorAudit": [
        "若為 80，總分只到 410。",
        "若為 90，總分會是 420。",
        "若為 95，總分會是 425。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「85」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「資料表判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "只有一個缺值，總分唯一決定它。",
      "difficultyEvidence": "需要建立總和方程並回代，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "1e450cb6423bc68c2181bcae5e403edc5355e46892c5b9129602ca419fc033cc"
    },
    {
      "reviewId": "u09-s001-v010-semantic-r1",
      "questionId": "u09-s001-v010",
      "unitId": "u09",
      "skillId": "data-table-reading",
      "independentRecalculation": "比較每日量需算 120÷31、108÷28、135÷31，再比較商。",
      "correctChoiceCheck": "獨立計算得到「各月用水量分別除以該月天數再比較」，位於索引 1。",
      "distractorAudit": [
        "總量受天數影響，不能直接代表每日使用。",
        "2 月不是 30 天，統一除 30 會扭曲。",
        "忽略 2 月不能回答三月比較。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「各月用水量分別除以該月天數再比較」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「資料表判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "月份天數依一般曆法，備註已補充 2 月資訊。",
      "difficultyEvidence": "情境中的不同觀察天數使標準化不可省略。",
      "literacyEvidence": "必須理解水費管理中總量與每日量的差別，情境不可刪除。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "b4012ff1b05cc62973c18e27ba9c56d657c46db82624bdd008328a9ec899acf9"
    },
    {
      "reviewId": "u09-s001-v011-semantic-r1",
      "questionId": "u09-s001-v011",
      "unitId": "u09",
      "skillId": "data-table-reading",
      "independentRecalculation": "站後＝26+7-3=30。",
      "correctChoiceCheck": "獨立計算得到「30 人」，位於索引 2。",
      "distractorAudit": [
        "把三個數字相減錯誤。",
        "只扣下車，漏加上車。",
        "把上車與下車都加上。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「30 人」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「資料表判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "上、下車發生先後不影響淨變化；無其他乘客變動。",
      "difficultyEvidence": "需要把交通紀錄的三欄關係轉成運算。",
      "literacyEvidence": "校車載客量必須由表中流入與流出共同決定，刪除情境會失去欄位意義。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "e525454e5739bd3519a2b1722ba4adeeae22fb4491c34902d6f54bc428261a18"
    },
    {
      "reviewId": "u09-s001-v012-semantic-r1",
      "questionId": "u09-s001-v012",
      "unitId": "u09",
      "skillId": "data-table-reading",
      "independentRecalculation": "整包糖量＝每份糖量×份數＝8×2.5=20。",
      "correctChoiceCheck": "獨立計算得到「20 公克」，位於索引 3。",
      "distractorAudit": [
        "8 是每份，不是整包。",
        "把 8 與 2.5 相加。",
        "把份數錯看成 3 份。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「20 公克」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「資料表判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "2.5 份可直接乘；未涉及每日參考值百分比。",
      "difficultyEvidence": "需跨越三個標示欄位並理解乘法關係。",
      "literacyEvidence": "食品標示的每份與整包差異是計算核心，情境不可刪除。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "420156fe5b5fcdd4a0c89aa93df147701353f24f62725861247a8d4ef14727ff"
    }
  ],
  "drawingSpecs": []
};
