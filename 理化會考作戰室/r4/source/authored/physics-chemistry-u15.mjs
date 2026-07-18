export const PHYSICS_CHEMISTRY_AUTHORED_U15 = {
  "unitId": "PHYCHM_R4_U15",
  "title": "中和、鹽與生活應用",
  "authorityRefs": [
    "AUTH-NATURAL-LC-BA-4-3",
    "AUTH-NATURAL-LC-JA-4-1",
    "AUTH-NATURAL-LC-JB-4-3",
    "AUTH-NATURAL-LC-JD-4-4",
    "AUTH-NATURAL-LC-JD-4-5",
    "AUTH-NATURAL-LC-JD-4-6",
    "AUTH-NATURAL-LP-PE-4-1"
  ],
  "provenance": {
    "curriculum": "臺灣十二年國教自然科學第四學習階段",
    "calibration": "國中教育會考自然科中和、資料判讀與生活應用層次",
    "authorship": "original-static-r4"
  },
  "skills": [
    {
      "id": "PHYCHM_R4_S113",
      "title": "說明酸鹼中和形成鹽和水",
      "authorityRefs": [
        "AUTH-NATURAL-LC-BA-4-3",
        "AUTH-NATURAL-LC-JA-4-1",
        "AUTH-NATURAL-LC-JB-4-3",
        "AUTH-NATURAL-LC-JD-4-4",
        "AUTH-NATURAL-LC-JD-4-5",
        "AUTH-NATURAL-LC-JD-4-6",
        "AUTH-NATURAL-LP-PE-4-1"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科中和、資料判讀與生活應用層次",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_113",
        "objective": "能用反應物與生成物說明酸鹼中和，並知道中和點、pH 7與「無危險」不是在所有情境下完全等義。",
        "sections": [
          {
            "title": "中和的基本產物",
            "body": "酸與鹼反應時，酸提供的氫離子特徵與鹼提供的氫氧根離子特徵互相消耗形成水；其餘離子組合成鹽。以鹽酸和氫氧化鈉為例，生成氯化鈉和水。鹽是化合物類別，不只指食鹽。"
          },
          {
            "title": "加入量決定最後性質",
            "body": "酸鹼恰好按反應比例消耗時稱達到化學計量上的中和；若酸過量，混合液仍可酸性，鹼過量則仍可鹼性。不能只因「已經混合酸與鹼」就宣稱溶液一定中性。"
          },
          {
            "title": "中性不代表可飲用",
            "body": "生成鹽的種類、濃度與原料毒性仍需考慮。即使pH接近7，溶液也可能含不適合接觸或飲用的物質；中和操作可能放熱，實驗須小量、緩慢混合並遵守防護。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_113_EX_01",
            "prompt": "鹽酸與適量氫氧化鈉完全反應，主要生成什麼？",
            "steps": [
              "辨認酸與鹼",
              "氫離子與氫氧根形成水",
              "剩餘離子形成氯化鈉"
            ],
            "answer": "氯化鈉和水。",
            "why": "鹽酸中的氯離子與氫氧化鈉中的鈉離子保留下來形成氯化鈉，酸鹼共同特徵則結合成水。"
          },
          {
            "id": "PHYCHM_R4_L_113_EX_02",
            "prompt": "20 mL酸恰需20 mL鹼中和，若只加10 mL同濃度鹼，混合液如何？",
            "steps": [
              "比較所需與實加體積",
              "鹼只達所需一半",
              "判斷酸仍有剩餘"
            ],
            "answer": "酸過量，混合液仍呈酸性。",
            "why": "同濃度且反應比例由題目給定為等體積，10 mL鹼不足以消耗20 mL酸，因此不能把混合後稱為中性。"
          },
          {
            "id": "PHYCHM_R4_L_113_EX_03",
            "prompt": "兩種腐蝕性溶液混合後pH 7，是否可直接飲用？",
            "steps": [
              "pH只描述酸鹼",
              "檢查生成鹽與殘留物",
              "區分中性與食用安全"
            ],
            "answer": "不可。",
            "why": "pH接近7不表示生成物可食用，也不排除其他有毒溶質；未經安全與成分確認的實驗溶液一律不可入口。"
          }
        ],
        "misconceptions": [
          {
            "belief": "酸和鹼一碰到就一定立刻得到pH 7。",
            "whyWrong": "若一方過量，剩餘酸或鹼仍決定pH。",
            "correction": "比較反應比例與實際加入量。"
          },
          {
            "belief": "中和只會生成水，不會有其他物質。",
            "whyWrong": "酸鹼中其餘離子會形成鹽。",
            "correction": "完整列出鹽與水兩類生成物。"
          },
          {
            "belief": "所有鹽都是廚房食鹽。",
            "whyWrong": "鹽是多種離子化合物的類別。",
            "correction": "依反應中的離子辨認實際鹽類。"
          },
          {
            "belief": "中性液體一律可飲用。",
            "whyWrong": "毒性、濃度與其他成分不由pH單獨決定。",
            "correction": "把酸鹼分類與食品安全分開。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_113",
        "title": "酸鹼混合結果",
        "body": "同濃度酸與鹼在此反應中恰以等體積完全反應。每組先取20 mL酸，再加入不同體積鹼。",
        "dataTable": {
          "columns": [
            "組別",
            "加入鹼",
            "反應後pH"
          ],
          "rows": [
            [
              "甲",
              "10 mL",
              "2.6"
            ],
            [
              "乙",
              "20 mL",
              "7.0"
            ],
            [
              "丙",
              "30 mL",
              "11.4"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_113_01",
          "stem": "酸與鹼中和的典型生成物是？",
          "options": [
            "只有金屬",
            "鹽和水",
            "酸和酸",
            "只有氧氣"
          ],
          "answerIndex": 1,
          "rationales": [
            "不會只產金屬。",
            "符合中和反應。",
            "反應物含酸與鹼。",
            "不會只產氧。"
          ],
          "reviewEvidence": "鹽和水：符合中和反應；只有金屬：不會只產金屬；酸和酸：反應物含酸與鹼；只有氧氣：不會只產氧。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "產物辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_113_02",
          "stem": "鹽酸與氫氧化鈉完全反應形成哪種鹽？",
          "options": [
            "氯化鈉",
            "硫酸銅",
            "碳酸鈣",
            "氧化鎂"
          ],
          "answerIndex": 0,
          "rationales": [
            "鈉離子與氯離子形成NaCl。",
            "無硫酸根與銅。",
            "反應物無碳酸根與鈣。",
            "無鎂。"
          ],
          "reviewEvidence": "氯化鈉：鈉離子與氯離子形成NaCl；硫酸銅：無硫酸根與銅；碳酸鈣：反應物無碳酸根與鈣；氧化鎂：無鎂。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "離子配對"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_113_03",
          "stem": "酸鹼混合後仍pH 3，最合理解釋是？",
          "options": [
            "酸仍過量",
            "所有離子消失",
            "鹼一定過量",
            "混合液為強鹼"
          ],
          "answerIndex": 0,
          "rationales": [
            "pH 3表示酸性。",
            "溶液仍含粒子。",
            "鹼過量應偏鹼。",
            "pH低於7。"
          ],
          "reviewEvidence": "酸仍過量：pH 3表示酸性；所有離子消失：溶液仍含粒子；鹼一定過量：鹼過量應偏鹼；混合液為強鹼：pH低於7。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "結果推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_113_04",
          "stem": "酸鹼混合後pH 11，表示哪一方可能剩餘？",
          "options": [
            "酸",
            "鹼",
            "一定沒有鹽",
            "只有水"
          ],
          "answerIndex": 1,
          "rationales": [
            "酸過量應低於7。",
            "pH大於7顯示鹼性。",
            "中和部分仍可成鹽。",
            "若只有純水近7。"
          ],
          "reviewEvidence": "鹼：pH大於7顯示鹼性；酸：酸過量應低於7；一定沒有鹽：中和部分仍可成鹽；只有水：若只有純水近7。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "結果推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_113_05",
          "stem": "為何中和操作宜緩慢混合？",
          "options": [
            "酸鹼永遠不反應",
            "反應可能放熱並造成濺灑",
            "可讓質量不守恆",
            "讓鹽全部變氣體"
          ],
          "answerIndex": 1,
          "rationales": [
            "酸鹼會反應。",
            "控制局部升溫。",
            "守恆不因速度失效。",
            "鹽通常留在溶液。"
          ],
          "reviewEvidence": "反應可能放熱並造成濺灑：控制局部升溫；酸鹼永遠不反應：酸鹼會反應；可讓質量不守恆：守恆不因速度失效；讓鹽全部變氣體：鹽通常留在溶液。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "安全理由"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_113_06",
          "stem": "「鹽」在化學中的意思為何？",
          "options": [
            "所有酸性液體",
            "只指可食用氯化鈉",
            "任何白色粉末",
            "一類由正負離子組成的化合物"
          ],
          "answerIndex": 3,
          "rationales": [
            "酸與鹽不同。",
            "食鹽只是其中之一。",
            "顏色不定義鹽。",
            "涵蓋多種離子化合物。"
          ],
          "reviewEvidence": "一類由正負離子組成的化合物：涵蓋多種離子化合物；所有酸性液體：酸與鹽不同；只指可食用氯化鈉：食鹽只是其中之一；任何白色粉末：顏色不定義鹽。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "概念界定"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_113_07",
          "stem": "中和後pH約7，可以直接確定什麼？",
          "options": [
            "中和後pH約7便可確定溶液只含純水",
            "溶質全部消失",
            "酸鹼表現接近中性",
            "溶液必可飲用"
          ],
          "answerIndex": 2,
          "rationales": [
            "會有鹽與水。",
            "鹽仍在溶液。",
            "pH只支持酸鹼分類。",
            "安全性未知。"
          ],
          "reviewEvidence": "酸鹼表現接近中性：pH只支持酸鹼分類；中和後pH約7便可確定溶液只含純水：會有鹽與水；溶質全部消失：鹽仍在溶液；溶液必可飲用：安全性未知。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "推論界限"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_113_08",
          "stem": "若同濃度酸鹼需1：1體積中和，15 mL酸加入25 mL鹼後何者過量？",
          "options": [
            "酸液過量10 mL",
            "鹼液過量10 mL",
            "兩者恰好完全中和",
            "缺少酸鹼濃度而無法判斷"
          ],
          "answerIndex": 1,
          "rationales": [
            "酸是較少的一方，會先被完全消耗。",
            "15 mL酸只需15 mL鹼，剩餘10 mL鹼液。",
            "加入的酸鹼體積不是題設的1：1。",
            "題幹已說同濃度並給定1：1中和條件。"
          ],
          "reviewEvidence": "鹼液過量10 mL：15 mL酸只需15 mL鹼，剩餘10 mL鹼液；酸液過量10 mL：酸是較少的一方，會先被完全消耗；兩者恰好完全中和：加入的酸鹼體積不是題設的1：1；缺少酸鹼濃度而無法判斷：題幹已說同濃度並給定1：1中和條件。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "比例計算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_113_09",
          "stem": "中和反應中形成水的兩種關鍵粒子是？",
          "options": [
            "氧氣與氮氣",
            "由銅原子與鐵原子結合形成中和反應的水",
            "氫離子與氫氧根離子",
            "鈉離子與氯離子"
          ],
          "answerIndex": 2,
          "rationales": [
            "不是酸鹼離子。",
            "與此無關。",
            "H⁺與OH⁻形成水。",
            "這組可形成鹽的成分。"
          ],
          "reviewEvidence": "氫離子與氫氧根離子：H⁺與OH⁻形成水；氧氣與氮氣：不是酸鹼離子；由銅原子與鐵原子結合形成中和反應的水：與此無關；鈉離子與氯離子：這組可形成鹽的成分。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "微觀模型"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_113_10",
          "stem": "酸鹼未按恰好比例混合時，是否仍會生成鹽和水？",
          "options": [
            "會，但過量一方仍留在混合液",
            "只生成氧氣",
            "所有液體都蒸發",
            "完全不會反應"
          ],
          "answerIndex": 0,
          "rationales": [
            "有限量反應仍可進行。",
            "不是典型產物。",
            "無此條件。",
            "接觸部分會反應。"
          ],
          "reviewEvidence": "會，但過量一方仍留在混合液：有限量反應仍可進行；只生成氧氣：不是典型產物；所有液體都蒸發：無此條件；完全不會反應：接觸部分會反應。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "限制反應物"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_113_11",
          "stem": "下列哪項不是判斷中和是否恰好的充分證據？",
          "options": [
            "終點附近pH",
            "已知濃度與體積比例",
            "合適指示劑變色範圍",
            "看見兩液混合"
          ],
          "answerIndex": 3,
          "rationales": [
            "可提供酸鹼結果。",
            "可計算反應量。",
            "可追蹤終點。",
            "混合不代表比例正確。"
          ],
          "reviewEvidence": "看見兩液混合：混合不代表比例正確；終點附近pH：可提供酸鹼結果；已知濃度與體積比例：可計算反應量；合適指示劑變色範圍：可追蹤終點。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_113_12",
          "stem": "中和反應遵守質量守恆，表示？",
          "options": [
            "生成水的質量等於酸液與鹼液的全部質量",
            "酸和鹼質量必相等",
            "封閉系統中反應前後總質量相同",
            "鹽沒有質量"
          ],
          "answerIndex": 2,
          "rationales": [
            "還有鹽。",
            "反應比例未必等質量。",
            "完整系統原子重組。",
            "鹽具有質量。"
          ],
          "reviewEvidence": "封閉系統中反應前後總質量相同：完整系統原子重組；生成水的質量等於酸液與鹼液的全部質量：還有鹽；酸和鹼質量必相等：反應比例未必等質量；鹽沒有質量：鹽具有質量。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "守恆連結"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_113_01",
          "stimulusId": "PHYCHM_R4_STIM_113",
          "stem": "哪組最接近恰好中和？",
          "options": [
            "甲",
            "丙",
            "三組相同",
            "乙"
          ],
          "answerIndex": 3,
          "rationales": [
            "鹼不足。",
            "鹼過量。",
            "pH明顯不同。",
            "20 mL等體積且pH 7。"
          ],
          "reviewEvidence": "乙：20 mL等體積且pH 7；甲：鹼不足；丙：鹼過量；三組相同：pH明顯不同。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "表格判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_113_02",
          "stimulusId": "PHYCHM_R4_STIM_113",
          "stem": "甲組為何呈酸性？",
          "options": [
            "甲組加入的鹼過量10 mL，所以仍呈酸性",
            "酸完全沒有加入",
            "pH 2.6代表鹼性",
            "加入鹼只有所需量的一半"
          ],
          "answerIndex": 3,
          "rationales": [
            "這描述丙。",
            "先有20 mL酸。",
            "2.6小於7。",
            "10 mL不足以中和20 mL酸。"
          ],
          "reviewEvidence": "加入鹼只有所需量的一半：10 mL不足以中和20 mL酸；甲組加入的鹼過量10 mL，所以仍呈酸性：這描述丙；酸完全沒有加入：先有20 mL酸；pH 2.6代表鹼性：2.6小於7。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "比例解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_113_03",
          "stimulusId": "PHYCHM_R4_STIM_113",
          "stem": "丙組再加哪一項最可能使pH往7移動？",
          "options": [
            "更多同濃度鹼",
            "蒸發水使鹼更濃",
            "適量同濃度酸",
            "加入強鹼通管劑"
          ],
          "answerIndex": 2,
          "rationales": [
            "會更鹼。",
            "濃縮使偏離7。",
            "可消耗過量鹼。",
            "增加鹼性且危險。"
          ],
          "reviewEvidence": "適量同濃度酸：可消耗過量鹼；更多同濃度鹼：會更鹼；蒸發水使鹼更濃：濃縮使偏離7；加入強鹼通管劑：增加鹼性且危險。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "調整推論"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S114",
      "title": "用氫離子與氫氧根離子解釋中和",
      "authorityRefs": [
        "AUTH-NATURAL-LC-BA-4-3",
        "AUTH-NATURAL-LC-JA-4-1",
        "AUTH-NATURAL-LC-JB-4-3",
        "AUTH-NATURAL-LC-JD-4-4",
        "AUTH-NATURAL-LC-JD-4-5",
        "AUTH-NATURAL-LC-JD-4-6",
        "AUTH-NATURAL-LP-PE-4-1"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科中和、資料判讀與生活應用層次",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_114",
        "objective": "能以粒子層次解釋H⁺與OH⁻形成水、旁觀離子形成鹽，並以數量關係判斷哪方過量。",
        "sections": [
          {
            "title": "核心粒子一對一消耗",
            "body": "在簡化的一元酸與一價鹼模型中，每個氫離子與一個氫氧根離子結合形成水，可寫成H⁺＋OH⁻→H₂O。若兩者數量相等，酸鹼特徵可同時被消耗；數量不等時，剩餘者決定混合液偏酸或偏鹼。"
          },
          {
            "title": "旁觀離子沒有消失",
            "body": "鹽酸與氫氧化鈉反應時，Na⁺與Cl⁻仍留在溶液中並構成氯化鈉的粒子來源。它們未出現在淨離子式，不代表不存在或沒有質量，只表示它們不是形成水的核心變化。"
          },
          {
            "title": "不能只數溶液體積",
            "body": "離子數量取決於濃度、體積及每單位化學式可提供的粒子數。只有題目說明同濃度且反應比例相同時，才可直接用體積比較；面對多價酸鹼需依給定粒子或反應資訊計算。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_114_EX_01",
            "prompt": "混合前有8個H⁺與5個OH⁻，反應後剩什麼？",
            "steps": [
              "H⁺與OH⁻一對一",
              "5對形成5份水",
              "8減5求剩餘"
            ],
            "answer": "剩3個H⁺，混合物偏酸。",
            "why": "5個OH⁻是限制數量，只能消耗5個H⁺；未配對的3個H⁺保留酸性特徵。"
          },
          {
            "id": "PHYCHM_R4_L_114_EX_02",
            "prompt": "6個H⁺與9個OH⁻完全接觸，剩餘粒子如何？",
            "steps": [
              "配成6對",
              "形成6份水",
              "9減6"
            ],
            "answer": "剩3個OH⁻，混合物偏鹼。",
            "why": "所有H⁺都被消耗，OH⁻尚有3個沒有配對，因此反應後仍呈現鹼性特徵。"
          },
          {
            "id": "PHYCHM_R4_L_114_EX_03",
            "prompt": "NaOH與HCl恰好反應後，Na⁺與Cl⁻去哪裡？",
            "steps": [
              "辨認形成水的是H⁺與OH⁻",
              "Na⁺與Cl⁻未參與核心步驟",
              "在溶液中構成鹽"
            ],
            "answer": "仍在溶液中，成為氯化鈉的粒子。",
            "why": "旁觀離子不因淨離子式省略而消失；它們與水共同存在，使中和後的溶液通常不是純水。"
          }
        ],
        "misconceptions": [
          {
            "belief": "H⁺與OH⁻反應後，所有離子都消失。",
            "whyWrong": "旁觀離子仍留在溶液並構成鹽。",
            "correction": "分開列出核心反應粒子與其餘離子。"
          },
          {
            "belief": "哪一杯體積大，哪一方離子就一定過量。",
            "whyWrong": "濃度與每份溶質提供粒子數也會影響總量。",
            "correction": "先把濃度、體積與粒子比例換成可比較數量。"
          },
          {
            "belief": "H⁺和OH⁻可以任意比例形成水。",
            "whyWrong": "簡化淨反應以一比一互相消耗。",
            "correction": "配對後再算剩餘。"
          },
          {
            "belief": "淨離子式沒寫Na⁺，表示鈉原子被消滅。",
            "whyWrong": "方程式只省略反應前後未改變的旁觀離子。",
            "correction": "以完整系統與質量守恆追蹤所有粒子。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_114",
        "title": "三杯粒子計數",
        "body": "每個H⁺與每個OH⁻恰好一對一形成水，其餘離子不列入表中。",
        "dataTable": {
          "columns": [
            "杯別",
            "混合前H⁺數",
            "混合前OH⁻數"
          ],
          "rows": [
            [
              "甲",
              "12",
              "8"
            ],
            [
              "乙",
              "10",
              "10"
            ],
            [
              "丙",
              "6",
              "11"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_114_01",
          "stem": "中和形成水的核心粒子為？",
          "options": [
            "Na⁺與Cl⁻",
            "O₂與N₂",
            "H⁺與OH⁻",
            "Cu與Fe"
          ],
          "answerIndex": 2,
          "rationales": [
            "常為旁觀離子。",
            "不是酸鹼離子。",
            "兩者一對一成水。",
            "金屬原子不適用。"
          ],
          "reviewEvidence": "H⁺與OH⁻：兩者一對一成水；Na⁺與Cl⁻：常為旁觀離子；O₂與N₂：不是酸鹼離子；Cu與Fe：金屬原子不適用。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "粒子辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_114_02",
          "stem": "7個H⁺與7個OH⁻反應，可形成幾份水且剩多少？",
          "options": [
            "7份水，剩7個H⁺",
            "7份水，兩者皆不剩",
            "0份水",
            "14份水，皆不剩"
          ],
          "answerIndex": 1,
          "rationales": [
            "H⁺全配對。",
            "一對形成一份。",
            "兩者可反應。",
            "把粒子總數誤當水數。"
          ],
          "reviewEvidence": "7份水，兩者皆不剩：一對形成一份；7份水，剩7個H⁺：H⁺全配對；0份水：兩者可反應；14份水，皆不剩：把粒子總數誤當水數。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "配對計數"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_114_03",
          "stem": "9個H⁺與4個OH⁻反應後剩餘？",
          "options": [
            "5個OH⁻",
            "5個H⁺",
            "13個H⁺",
            "沒有粒子"
          ],
          "answerIndex": 1,
          "rationales": [
            "OH⁻已全耗。",
            "4對反應，9－4＝5。",
            "不是相加。",
            "H⁺仍剩。"
          ],
          "reviewEvidence": "5個H⁺：4對反應，9－4＝5；5個OH⁻：OH⁻已全耗；13個H⁺：不是相加；沒有粒子：H⁺仍剩。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "差量計算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_114_04",
          "stem": "4個H⁺與10個OH⁻反應後，溶液偏向？",
          "options": [
            "必定中性",
            "酸性",
            "鹼性",
            "無水"
          ],
          "answerIndex": 2,
          "rationales": [
            "數量不等。",
            "H⁺已耗盡。",
            "剩6個OH⁻。",
            "形成4份水。"
          ],
          "reviewEvidence": "鹼性：剩6個OH⁻；必定中性：數量不等；酸性：H⁺已耗盡；無水：形成4份水。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "結果分類"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_114_05",
          "stem": "Na⁺未寫在淨離子式中，代表？",
          "options": [
            "鈉元素消失",
            "Na⁺變成光",
            "Na⁺一定沉澱",
            "反應前後沒有核心改變，仍存在溶液"
          ],
          "answerIndex": 3,
          "rationales": [
            "違反元素守恆。",
            "無此轉換。",
            "氯化鈉通常可溶。",
            "它是旁觀離子。"
          ],
          "reviewEvidence": "反應前後沒有核心改變，仍存在溶液：它是旁觀離子；鈉元素消失：違反元素守恆；Na⁺變成光：無此轉換；Na⁺一定沉澱：氯化鈉通常可溶。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "表示法理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_114_06",
          "stem": "同濃度HCl與NaOH按等體積混合時，為何可恰好中和？",
          "options": [
            "所有酸鹼都等體積反應",
            "Na⁺與Cl⁻形成水",
            "兩者每份提供的核心粒子數相等",
            "兩杯顏色相同"
          ],
          "answerIndex": 2,
          "rationales": [
            "不能外推所有酸鹼。",
            "形成水的是H⁺、OH⁻。",
            "題設一元酸鹼一比一。",
            "顏色不決定粒子數。"
          ],
          "reviewEvidence": "兩者每份提供的核心粒子數相等：題設一元酸鹼一比一；所有酸鹼都等體積反應：不能外推所有酸鹼；Na⁺與Cl⁻形成水：形成水的是H⁺、OH⁻；兩杯顏色相同：顏色不決定粒子數。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "宏微連結"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_114_07",
          "stem": "若酸濃度為鹼的2倍，等體積混合且反應比例一比一，結果最可能？",
          "options": [
            "兩者都沒有粒子",
            "必定中性",
            "OH⁻過量而偏鹼",
            "H⁺過量而偏酸"
          ],
          "answerIndex": 3,
          "rationales": [
            "仍有過量H⁺。",
            "濃度不等。",
            "鹼較少。",
            "等體積下酸核心粒子較多。"
          ],
          "reviewEvidence": "H⁺過量而偏酸：等體積下酸核心粒子較多；兩者都沒有粒子：仍有過量H⁺；必定中性：濃度不等；OH⁻過量而偏鹼：鹼較少。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "濃度推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_114_08",
          "stem": "為何中和後溶液通常仍可導電？",
          "options": [
            "溶液導電是因杯外導線會在水中產生離子",
            "鹽的離子仍可在水中移動",
            "所有粒子都變成電子",
            "水必定是金屬"
          ],
          "answerIndex": 1,
          "rationales": [
            "離子來自溶液。",
            "旁觀離子仍存在。",
            "不會全變電子。",
            "水不是金屬。"
          ],
          "reviewEvidence": "鹽的離子仍可在水中移動：旁觀離子仍存在；溶液導電是因杯外導線會在水中產生離子：離子來自溶液；所有粒子都變成電子：不會全變電子；水必定是金屬：水不是金屬。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "性質解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_114_09",
          "stem": "哪項計算適合一對一粒子模型？",
          "options": [
            "剩餘量＝較多者－較少者",
            "剩餘量等於兩種粒子加入量相乘",
            "不需比較數量",
            "水份數＝兩者總數"
          ],
          "answerIndex": 0,
          "rationales": [
            "先配對再求差。",
            "乘法無化學意義。",
            "過量判斷需比較。",
            "一對才成一份水。"
          ],
          "reviewEvidence": "剩餘量＝較多者－較少者：先配對再求差；剩餘量等於兩種粒子加入量相乘：乘法無化學意義；不需比較數量：過量判斷需比較；水份數＝兩者總數：一對才成一份水。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "模型運算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_114_10",
          "stem": "12個H⁺與15個OH⁻反應，形成水份數為？",
          "options": [
            "12",
            "15",
            "3",
            "27"
          ],
          "answerIndex": 0,
          "rationales": [
            "較少者12決定配對數。",
            "H⁺不足15對。",
            "3是剩餘OH⁻。",
            "不能相加。"
          ],
          "reviewEvidence": "12：較少者12決定配對數；15：H⁺不足15對；3：3是剩餘OH⁻；27：不能相加。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "限制數量"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_114_11",
          "stem": "H⁺恰好耗盡但OH⁻尚餘，pH最可能？",
          "options": [
            "無法存在",
            "小於7",
            "一定等於7",
            "大於7"
          ],
          "answerIndex": 3,
          "rationales": [
            "此情形可存在。",
            "沒有剩餘H⁺主導。",
            "需兩者無過量才接近中性。",
            "OH⁻過量呈鹼性。"
          ],
          "reviewEvidence": "大於7：OH⁻過量呈鹼性；無法存在：此情形可存在；小於7：沒有剩餘H⁺主導；一定等於7：需兩者無過量才接近中性。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "微宏推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_114_12",
          "stem": "完整描述HCl與NaOH中和後粒子，哪項正確？",
          "options": [
            "所有水都變氫氣",
            "只剩純水",
            "水中仍有Na⁺與Cl⁻",
            "中和完成後Na⁺與Cl⁻也會互相消滅"
          ],
          "answerIndex": 2,
          "rationales": [
            "無此反應。",
            "忽略鹽。",
            "兩者構成溶解的鹽。",
            "違反守恆。"
          ],
          "reviewEvidence": "水中仍有Na⁺與Cl⁻：兩者構成溶解的鹽；所有水都變氫氣：無此反應；只剩純水：忽略鹽；中和完成後Na⁺與Cl⁻也會互相消滅：違反守恆。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "完整系統"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_114_01",
          "stimulusId": "PHYCHM_R4_STIM_114",
          "stem": "甲杯反應後剩餘什麼？",
          "options": [
            "沒有剩餘",
            "4個OH⁻",
            "20個H⁺",
            "4個H⁺"
          ],
          "answerIndex": 3,
          "rationales": [
            "數量不等。",
            "OH⁻較少且耗盡。",
            "不能相加。",
            "12－8＝4。"
          ],
          "reviewEvidence": "4個H⁺：12－8＝4；沒有剩餘：數量不等；4個OH⁻：OH⁻較少且耗盡；20個H⁺：不能相加。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "表格計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_114_02",
          "stimulusId": "PHYCHM_R4_STIM_114",
          "stem": "哪杯在此模型下最接近中性？",
          "options": [
            "乙",
            "三杯都偏酸",
            "甲",
            "丙"
          ],
          "answerIndex": 0,
          "rationales": [
            "10與10恰好配對。",
            "丙偏鹼。",
            "甲剩H⁺。",
            "丙剩OH⁻。"
          ],
          "reviewEvidence": "乙：10與10恰好配對；三杯都偏酸：丙偏鹼；甲：甲剩H⁺；丙：丙剩OH⁻。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "配對判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_114_03",
          "stimulusId": "PHYCHM_R4_STIM_114",
          "stem": "丙杯可形成幾份水並剩多少OH⁻？",
          "options": [
            "6份水，剩5個OH⁻",
            "11份水，剩5個H⁺",
            "17份水，無剩餘",
            "5份水，剩6個H⁺"
          ],
          "answerIndex": 0,
          "rationales": [
            "6個H⁺限制配對，11－6＝5。",
            "H⁺只有6。",
            "不能相加。",
            "配對數不是差。"
          ],
          "reviewEvidence": "6份水，剩5個OH⁻：6個H⁺限制配對，11－6＝5；11份水，剩5個H⁺：H⁺只有6；17份水，無剩餘：不能相加；5份水，剩6個H⁺：配對數不是差。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "雙步計算"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S115",
      "title": "由溫度資料判斷中和放熱",
      "authorityRefs": [
        "AUTH-NATURAL-LC-BA-4-3",
        "AUTH-NATURAL-LC-JA-4-1",
        "AUTH-NATURAL-LC-JB-4-3",
        "AUTH-NATURAL-LC-JD-4-4",
        "AUTH-NATURAL-LC-JD-4-5",
        "AUTH-NATURAL-LC-JD-4-6",
        "AUTH-NATURAL-LP-PE-4-1"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科中和、資料判讀與生活應用層次",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_115",
        "objective": "能從控制良好的溫度—時間資料判斷中和放熱，並區分反應放熱、量測熱損失與溫度變化的其他原因。",
        "sections": [
          {
            "title": "溫升是能量證據",
            "body": "酸鹼中和通常放熱；若兩液初溫相同，混合後溫度明顯升高，且空白對照沒有同樣變化，可支持化學能轉為周圍粒子的熱運動。溫度是熱狀態指標，並不是一種會被製造的物質。"
          },
          {
            "title": "最高溫與反應量",
            "body": "在濃度、總體積與器材相同時，接近恰好中和的混合通常有較多H⁺與OH⁻互相反應，溫升可能較大。任一方嚴重不足時，反應量受限制，不能只用加入體積越大就斷言溫度越高。"
          },
          {
            "title": "實測會散熱",
            "body": "杯壁、溫度計與空氣會吸收熱，讀值也受攪拌和量測延遲影響。因此實驗溫升是系統交換熱後的結果；比較各組要固定初溫、容器、總量與讀值時機，並保留冷卻曲線而非只挑單點。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_115_EX_01",
            "prompt": "酸鹼皆25.0°C，混合後最高31.5°C，空白組仍25.1°C，如何判斷？",
            "steps": [
              "比較混合前後",
              "扣除空白組自然變化",
              "連結反應與熱量釋出"
            ],
            "answer": "中和反應放熱。",
            "why": "反應組升高6.5°C，而空白只變0.1°C，溫升不能由攪拌本身解釋，支持中和向溶液放出熱。"
          },
          {
            "id": "PHYCHM_R4_L_115_EX_02",
            "prompt": "三組總體積相同，酸鹼當量比分別2：1、1：1、1：2，哪組通常溫升最大？",
            "steps": [
              "每對H⁺、OH⁻反應放熱",
              "兩端組有一方限制",
              "1：1可反應配對最多"
            ],
            "answer": "1：1組。",
            "why": "在其餘條件相同下，恰好比例使可配對的核心粒子數最多；兩個過量組都有一方未反應，因此放熱量較小。"
          },
          {
            "id": "PHYCHM_R4_L_115_EX_03",
            "prompt": "最高溫出現在混合後30秒，之後下降，能否說反應改成吸熱？",
            "steps": [
              "分辨反應與後續散熱",
              "環境溫度較低",
              "用初始升溫判斷反應"
            ],
            "answer": "不能；下降主要反映向環境散熱。",
            "why": "反應先使溶液升溫，之後杯中熱量傳到較冷環境而降溫；後段冷卻不表示原中和反應的能量方向反轉。"
          }
        ],
        "misconceptions": [
          {
            "belief": "溫度升高表示溫度這種物質被生成。",
            "whyWrong": "溫度是粒子熱運動狀態的量度，不是物質。",
            "correction": "描述為反應能量轉成熱並使溫度上升。"
          },
          {
            "belief": "加入鹼越多，混合後溫度一定越高。",
            "whyWrong": "酸量有限時，多出的鹼沒有足夠H⁺可反應。",
            "correction": "依限制反應物判斷實際中和量。"
          },
          {
            "belief": "冷卻曲線下降證明中和吸熱。",
            "whyWrong": "反應後的熱會逐漸傳給環境。",
            "correction": "以混合瞬間相對初溫的變化判斷。"
          },
          {
            "belief": "不同容器的最高溫可不控制條件直接比較。",
            "whyWrong": "隔熱、總量與初溫都會改變讀值。",
            "correction": "固定器材與量測流程再比較。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_115",
        "title": "不同混合比例的溫升",
        "body": "酸、鹼濃度相同，每組總體積40 mL、初溫25.0°C，使用相同保麗龍杯。",
        "dataTable": {
          "columns": [
            "組別",
            "酸體積",
            "鹼體積",
            "最高溫"
          ],
          "rows": [
            [
              "甲",
              "30 mL",
              "10 mL",
              "28.1°C"
            ],
            [
              "乙",
              "20 mL",
              "20 mL",
              "31.4°C"
            ],
            [
              "丙",
              "10 mL",
              "30 mL",
              "28.0°C"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_115_01",
          "stem": "酸鹼混合後由25°C升到30°C，且對照不升溫，最合理結論是？",
          "options": [
            "中和放熱",
            "溶液質量消失",
            "溫度是生成物",
            "中和必吸熱"
          ],
          "answerIndex": 0,
          "rationales": [
            "反應組明顯升溫。",
            "升溫不代表失質量。",
            "溫度不是物質。",
            "方向相反。"
          ],
          "reviewEvidence": "中和放熱：反應組明顯升溫；溶液質量消失：升溫不代表失質量；溫度是生成物：溫度不是物質；中和必吸熱：方向相反。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "證據判斷"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_115_02",
          "stem": "公平比較中和溫升時，哪項應控制？",
          "options": [
            "組別名稱",
            "學生座號",
            "初溫、濃度、總體積與容器",
            "紀錄紙顏色"
          ],
          "answerIndex": 2,
          "rationales": [
            "名稱無關。",
            "座號無關。",
            "都會影響熱與溫度。",
            "紙色無關。"
          ],
          "reviewEvidence": "初溫、濃度、總體積與容器：都會影響熱與溫度；組別名稱：名稱無關；學生座號：座號無關；紀錄紙顏色：紙色無關。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "實驗設計"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_115_03",
          "stem": "恰好中和組常有最大溫升的原因是？",
          "options": [
            "鹽沒有熱容量",
            "可反應的H⁺與OH⁻配對數最多",
            "所有粒子都消失",
            "杯子自動加熱"
          ],
          "answerIndex": 1,
          "rationales": [
            "鹽溶液仍有熱容量。",
            "實際反應量較大。",
            "旁觀離子仍在。",
            "熱源是反應。"
          ],
          "reviewEvidence": "可反應的H⁺與OH⁻配對數最多：實際反應量較大；鹽沒有熱容量：鹽溶液仍有熱容量；所有粒子都消失：旁觀離子仍在；杯子自動加熱：熱源是反應。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "限制反應物"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_115_04",
          "stem": "混合後溫度先升後降，後段下降主要表示？",
          "options": [
            "pH必變為0",
            "後段降溫表示所有原子都因冷卻而消失",
            "中和反應倒轉",
            "溶液向較冷環境散熱"
          ],
          "answerIndex": 3,
          "rationales": [
            "無此pH推論。",
            "原子仍守恆。",
            "冷卻不等於反應逆轉。",
            "熱沿溫差傳出。"
          ],
          "reviewEvidence": "溶液向較冷環境散熱：熱沿溫差傳出；pH必變為0：無此pH推論；後段降溫表示所有原子都因冷卻而消失：原子仍守恆；中和反應倒轉：冷卻不等於反應逆轉。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "曲線解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_115_05",
          "stem": "若酸初溫20°C、鹼初溫40°C，混合後30°C，能否直接判中和不放熱？",
          "options": [
            "能，30°C高於酸的20°C就足以證明放熱量",
            "能，30低於40所以吸熱",
            "不能，初溫不同使單一終溫難解讀",
            "不能，因溫度不能量"
          ],
          "answerIndex": 2,
          "rationales": [
            "同樣忽略混合效應。",
            "忽略冷熱混合。",
            "需能量平衡與對照。",
            "溫度可量。"
          ],
          "reviewEvidence": "不能，初溫不同使單一終溫難解讀：需能量平衡與對照；能，30°C高於酸的20°C就足以證明放熱量：同樣忽略混合效應；能，30低於40所以吸熱：忽略冷熱混合；不能，因溫度不能量：溫度可量。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "干擾辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_115_06",
          "stem": "溫度計碰到杯底可能造成什麼問題？",
          "options": [
            "讀值受杯底局部溫度影響",
            "反應物接觸杯底後會立刻轉變成金屬",
            "pH定義改變",
            "溫度計產生酸"
          ],
          "answerIndex": 0,
          "rationales": [
            "未代表整杯液溫。",
            "無此轉化。",
            "pH定義不變。",
            "儀器不造酸。"
          ],
          "reviewEvidence": "讀值受杯底局部溫度影響：未代表整杯液溫；反應物接觸杯底後會立刻轉變成金屬：無此轉化；pH定義改變：pH定義不變；溫度計產生酸：儀器不造酸。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "量測誤差"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_115_07",
          "stem": "為何使用保麗龍杯而非敞口金屬杯？",
          "options": [
            "讓反應不守恆",
            "使酸變成鹼",
            "保麗龍杯可讓溫度計永久不需任何校正",
            "減少與環境的熱交換"
          ],
          "answerIndex": 3,
          "rationales": [
            "不影響質量定律。",
            "不改酸種。",
            "儀器仍需檢查。",
            "保溫較佳。"
          ],
          "reviewEvidence": "減少與環境的熱交換：保溫較佳；讓反應不守恆：不影響質量定律；使酸變成鹼：不改酸種；保麗龍杯可讓溫度計永久不需任何校正：儀器仍需檢查。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "器材功能"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_115_08",
          "stem": "空白對照只混合等溫水，功能為何？",
          "options": [
            "使酸鹼濃度相同",
            "估計攪拌與環境造成的溫度變化",
            "產生更多鹽",
            "增加中和量"
          ],
          "answerIndex": 1,
          "rationales": [
            "分開實驗。",
            "排除非化學溫升。",
            "不產鹽。",
            "對照不含酸鹼。"
          ],
          "reviewEvidence": "估計攪拌與環境造成的溫度變化：排除非化學溫升；使酸鹼濃度相同：分開實驗；產生更多鹽：不產鹽；增加中和量：對照不含酸鹼。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "對照功能"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_115_09",
          "stem": "同條件下溫升越大，最直接表示？",
          "options": [
            "溶液吸收的反應熱較多",
            "溫升較大便能確定所生成的鹽毒性更高",
            "酸一定過量",
            "pH一定最高"
          ],
          "answerIndex": 0,
          "rationales": [
            "熱容量相同時可作比較。",
            "毒性無關。",
            "不必酸過量。",
            "最大溫升常在中和附近。"
          ],
          "reviewEvidence": "溶液吸收的反應熱較多：熱容量相同時可作比較；溫升較大便能確定所生成的鹽毒性更高：毒性無關；酸一定過量：不必酸過量；pH一定最高：最大溫升常在中和附近。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "能量推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_115_10",
          "stem": "重複三次最高溫差異很大，應如何處理？",
          "options": [
            "只留最高值",
            "檢查攪拌、讀值時間與散熱，再重測",
            "宣稱反應沒有能量",
            "把三值改成相同"
          ],
          "answerIndex": 1,
          "rationales": [
            "會選擇性偏高。",
            "尋找可控制誤差。",
            "變異不否定放熱。",
            "竄改數據。"
          ],
          "reviewEvidence": "檢查攪拌、讀值時間與散熱，再重測：尋找可控制誤差；只留最高值：會選擇性偏高；宣稱反應沒有能量：變異不否定放熱；把三值改成相同：竄改數據。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "品質改善"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_115_11",
          "stem": "中和放出的能量最後主要去哪裡？",
          "options": [
            "先提高溶液與器材溫度，再逐漸傳給環境",
            "全部變成新原子",
            "立即消失",
            "永遠留在H⁺內"
          ],
          "answerIndex": 0,
          "rationales": [
            "符合能量轉移。",
            "能量不造原子。",
            "能量守恆。",
            "反應後H⁺可被消耗。"
          ],
          "reviewEvidence": "先提高溶液與器材溫度，再逐漸傳給環境：符合能量轉移；全部變成新原子：能量不造原子；立即消失：能量守恆；永遠留在H⁺內：反應後H⁺可被消耗。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "能量流"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_115_12",
          "stem": "只記錄混合後5分鐘的溫度，可能低估什麼？",
          "options": [
            "鹼的名稱",
            "酸的初始體積",
            "溫度單位",
            "反應後短時間內的最高溫"
          ],
          "answerIndex": 3,
          "rationales": [
            "名稱不由溫度決定。",
            "體積應另量。",
            "單位仍可記。",
            "期間已向環境散熱。"
          ],
          "reviewEvidence": "反應後短時間內的最高溫：期間已向環境散熱；鹼的名稱：名稱不由溫度決定；酸的初始體積：體積應另量；溫度單位：單位仍可記。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "取樣時機"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_115_01",
          "stimulusId": "PHYCHM_R4_STIM_115",
          "stem": "哪組溫升最大？",
          "options": [
            "丙",
            "甲",
            "乙",
            "三組相同"
          ],
          "answerIndex": 2,
          "rationales": [
            "丙升3.0°C。",
            "甲升3.1°C。",
            "31.4－25.0＝6.4°C。",
            "數據不同。"
          ],
          "reviewEvidence": "乙：31.4－25.0＝6.4°C；丙：丙升3.0°C；甲：甲升3.1°C；三組相同：數據不同。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "數據計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_115_02",
          "stimulusId": "PHYCHM_R4_STIM_115",
          "stem": "乙組溫升最大最支持哪一項？",
          "options": [
            "酸越過量放熱越多",
            "鹼越過量放熱越多",
            "總體積決定全部差異",
            "等體積時可中和的酸鹼量最多"
          ],
          "answerIndex": 3,
          "rationales": [
            "甲酸過量但溫升小。",
            "丙鹼過量也小。",
            "總體積皆40 mL。",
            "題設同濃度且1：1核心反應。"
          ],
          "reviewEvidence": "等體積時可中和的酸鹼量最多：題設同濃度且1：1核心反應；酸越過量放熱越多：甲酸過量但溫升小；鹼越過量放熱越多：丙鹼過量也小；總體積決定全部差異：總體積皆40 mL。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據推論"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_115_03",
          "stimulusId": "PHYCHM_R4_STIM_115",
          "stem": "為何甲與丙最高溫接近？",
          "options": [
            "兩組都沒有反應",
            "兩組可反應的限制方體積都為10 mL",
            "最高溫由組名決定",
            "酸鹼完全相同"
          ],
          "answerIndex": 1,
          "rationales": [
            "仍有部分中和。",
            "在同濃度一比一模型下反應量相近。",
            "名稱無關。",
            "過量方不同。"
          ],
          "reviewEvidence": "兩組可反應的限制方體積都為10 mL：在同濃度一比一模型下反應量相近；兩組都沒有反應：仍有部分中和；最高溫由組名決定：名稱無關；酸鹼完全相同：過量方不同。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "對稱關係"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S116",
      "title": "依加入量與pH變化判斷過量一方",
      "authorityRefs": [
        "AUTH-NATURAL-LC-BA-4-3",
        "AUTH-NATURAL-LC-JA-4-1",
        "AUTH-NATURAL-LC-JB-4-3",
        "AUTH-NATURAL-LC-JD-4-4",
        "AUTH-NATURAL-LC-JD-4-5",
        "AUTH-NATURAL-LC-JD-4-6",
        "AUTH-NATURAL-LP-PE-4-1"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科中和、資料判讀與生活應用層次",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_116",
        "objective": "能綜合酸鹼加入量、反應比例與pH趨勢，判斷中和前後哪一方過量及終點所在區間。",
        "sections": [
          {
            "title": "pH指出剩餘方向",
            "body": "中和進行時，pH小於7表示酸性特徵仍較明顯，大於7表示鹼性特徵較明顯。若逐滴把鹼加入酸，pH通常先低、接近終點時快速上升，過終點後由過量鹼控制。實際終點不應只憑「加了一半」猜測。"
          },
          {
            "title": "終點落在相鄰讀值間",
            "body": "若加入19 mL鹼時pH 4、20 mL時pH 9，恰好中和的位置可能在19與20 mL之間。量測間隔太大時，不能宣稱終點精確為某一整數體積；應縮小滴加量或使用合適指示劑。"
          },
          {
            "title": "體積要和濃度、比例合讀",
            "body": "同體積不保證同粒子數。濃酸可能需要較多稀鹼，二價酸鹼也有不同反應比例。只有題目明示濃度相同及一比一關係時，才可直接用體積判定過量。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_116_EX_01",
            "prompt": "往酸中加鹼，15 mL時pH 3.2、20 mL時pH 7.0、25 mL時pH 11.1，各組誰過量？",
            "steps": [
              "以7分類",
              "低於7表示酸餘",
              "高於7表示鹼餘"
            ],
            "answer": "15 mL時酸過量，20 mL恰好附近，25 mL時鹼過量。",
            "why": "pH由酸性跨過中性到鹼性，方向與逐步加入鹼一致；20 mL讀值正好7，支持終點在此附近。"
          },
          {
            "id": "PHYCHM_R4_L_116_EX_02",
            "prompt": "18 mL鹼時pH 5.0，19 mL時pH 6.5，20 mL時pH 8.4，終點如何報告？",
            "steps": [
              "找跨越7的相鄰點",
              "19仍酸、20已鹼",
              "以區間呈現"
            ],
            "answer": "終點在19～20 mL之間。",
            "why": "量測未在pH 7取得讀值，只能確定酸性到鹼性的轉換發生在兩次滴加之間，不能捏造更精確體積。"
          },
          {
            "id": "PHYCHM_R4_L_116_EX_03",
            "prompt": "10 mL、2.0 mol/L酸需多少1.0 mol/L一價鹼恰好中和？",
            "steps": [
              "酸濃度是鹼兩倍",
              "一比一粒子反應",
              "所需鹼體積為酸兩倍"
            ],
            "answer": "20 mL。",
            "why": "10 mL酸含有的反應量相當於20 mL較稀鹼；若只加10 mL鹼，雖體積相同，酸仍會過量。"
          }
        ],
        "misconceptions": [
          {
            "belief": "酸鹼體積相同就一定恰好中和。",
            "whyWrong": "濃度與反應粒子比例可能不同。",
            "correction": "先比較有效反應量，再使用pH確認。"
          },
          {
            "belief": "只要pH上升就已經變成鹼性。",
            "whyWrong": "pH可從2升到5，仍低於7。",
            "correction": "判斷是否跨過7，而不只看升降。"
          },
          {
            "belief": "最大pH跳躍中的某個整數一定是精確終點。",
            "whyWrong": "有限取樣只界定區間。",
            "correction": "縮小滴加間隔或報告終點範圍。"
          },
          {
            "belief": "過終點後再加鹼，酸會重新過量。",
            "whyWrong": "新增鹼只會增加鹼的剩餘量。",
            "correction": "沿加入方向追蹤限制反應物。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_116",
        "title": "鹼滴入酸的pH紀錄",
        "body": "固定20.0 mL酸，逐步加入同一鹼液並攪拌後量測。",
        "dataTable": {
          "columns": [
            "累計鹼體積",
            "pH"
          ],
          "rows": [
            [
              "0 mL",
              "1.8"
            ],
            [
              "16 mL",
              "2.9"
            ],
            [
              "19 mL",
              "5.4"
            ],
            [
              "20 mL",
              "7.1"
            ],
            [
              "21 mL",
              "9.6"
            ],
            [
              "24 mL",
              "11.5"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_116_01",
          "stem": "酸鹼混合液pH 2.5，哪一方過量最合理？",
          "options": [
            "只有鹽",
            "兩者必恰好",
            "酸",
            "鹼"
          ],
          "answerIndex": 2,
          "rationales": [
            "酸性顯示仍有酸特徵。",
            "恰好常近中性。",
            "pH小於7。",
            "鹼過量應大於7。"
          ],
          "reviewEvidence": "酸：pH小於7；只有鹽：酸性顯示仍有酸特徵；兩者必恰好：恰好常近中性；鹼：鹼過量應大於7。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "pH判斷"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_116_02",
          "stem": "混合液pH 12，表示？",
          "options": [
            "鹼過量",
            "沒有離子",
            "酸過量",
            "一定純水"
          ],
          "answerIndex": 0,
          "rationales": [
            "pH明顯大於7。",
            "鹼液含離子。",
            "酸過量方向相反。",
            "純水近7。"
          ],
          "reviewEvidence": "鹼過量：pH明顯大於7；沒有離子：鹼液含離子；酸過量：酸過量方向相反；一定純水：純水近7。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "pH判斷"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_116_03",
          "stem": "滴鹼過程pH由3升到6，能否說已過終點？",
          "options": [
            "能，因6大於3",
            "不能，pH仍低於7",
            "能，因數值上升",
            "不能，因pH不能用於中和"
          ],
          "answerIndex": 1,
          "rationales": [
            "比較只說趨勢。",
            "仍呈酸性。",
            "上升不等於跨界。",
            "pH正可追蹤。"
          ],
          "reviewEvidence": "不能，pH仍低於7：仍呈酸性；能，因6大於3：比較只說趨勢；能，因數值上升：上升不等於跨界；不能，因pH不能用於中和：pH正可追蹤。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "趨勢與分類"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_116_04",
          "stem": "19 mL時pH 6、20 mL時pH 8，終點最合理在哪裡？",
          "options": [
            "19～20 mL之間",
            "一定19.000 mL",
            "一定20.000 mL",
            "0 mL"
          ],
          "answerIndex": 0,
          "rationales": [
            "兩點跨越7。",
            "19仍酸。",
            "20已鹼。",
            "起始未中和。"
          ],
          "reviewEvidence": "19～20 mL之間：兩點跨越7；一定19.000 mL：19仍酸；一定20.000 mL：20已鹼；0 mL：起始未中和。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "區間推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_116_05",
          "stem": "同濃度一價酸鹼以1：1反應，30 mL酸需多少鹼？",
          "options": [
            "15 mL",
            "無限多",
            "60 mL",
            "30 mL"
          ],
          "answerIndex": 3,
          "rationales": [
            "只中和一半。",
            "比例已知。",
            "鹼會過量。",
            "同濃度等反應量。"
          ],
          "reviewEvidence": "30 mL：同濃度等反應量；15 mL：只中和一半；無限多：比例已知；60 mL：鹼會過量。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "比例計算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_116_06",
          "stem": "酸濃度為鹼3倍、體積相同且1：1反應，混合後？",
          "options": [
            "鹼過量",
            "酸過量",
            "無反應",
            "必定中性"
          ],
          "answerIndex": 1,
          "rationales": [
            "鹼較少。",
            "酸反應量是鹼三倍。",
            "仍會部分中和。",
            "反應量不等。"
          ],
          "reviewEvidence": "酸過量：酸反應量是鹼三倍；鹼過量：鹼較少；無反應：仍會部分中和；必定中性：反應量不等。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "濃度比較"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_116_07",
          "stem": "滴定曲線中pH快速改變區通常用來？",
          "options": [
            "pH快速改變區可證明酸鹼之間沒有發生反應",
            "界定中和終點附近",
            "判斷杯子質量",
            "計算液體顏色"
          ],
          "answerIndex": 1,
          "rationales": [
            "快速變化反而支持中和。",
            "少量滴加即可跨酸鹼。",
            "與杯重無關。",
            "顏色非曲線量。"
          ],
          "reviewEvidence": "界定中和終點附近：少量滴加即可跨酸鹼；pH快速改變區可證明酸鹼之間沒有發生反應：快速變化反而支持中和；判斷杯子質量：與杯重無關；計算液體顏色：顏色非曲線量。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "曲線功能"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_116_08",
          "stem": "若加入鹼後pH由10升到12，哪項正確？",
          "options": [
            "回到中性",
            "酸重新過量",
            "原本已鹼過量，新增鹼使鹼性更明顯",
            "鹼被完全消耗"
          ],
          "answerIndex": 2,
          "rationales": [
            "沒有接近7。",
            "方向不符。",
            "兩值都大於7且上升。",
            "若全耗不會更鹼。"
          ],
          "reviewEvidence": "原本已鹼過量，新增鹼使鹼性更明顯：兩值都大於7且上升；回到中性：沒有接近7；酸重新過量：方向不符；鹼被完全消耗：若全耗不會更鹼。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "後終點分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_116_09",
          "stem": "哪項資料不足以單獨判斷過量方？",
          "options": [
            "粒子計數結果",
            "已知濃度與反應比例",
            "只知道兩液體積相等",
            "反應後pH 4"
          ],
          "answerIndex": 2,
          "rationales": [
            "可配對判斷。",
            "可計算。",
            "濃度比例未知。",
            "酸性可判酸餘。"
          ],
          "reviewEvidence": "只知道兩液體積相等：濃度比例未知；粒子計數結果：可配對判斷；已知濃度與反應比例：可計算；反應後pH 4：酸性可判酸餘。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資訊充分性"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_116_10",
          "stem": "縮小終點附近每次滴加體積的目的為何？",
          "options": [
            "改變酸的種類",
            "提高終點體積的解析度",
            "使反應不放熱",
            "縮小滴加量是為了讓pH計不必再校正"
          ],
          "answerIndex": 1,
          "rationales": [
            "酸種不變。",
            "取得更窄跨越區間。",
            "反應仍放熱。",
            "儀器仍需校正。"
          ],
          "reviewEvidence": "提高終點體積的解析度：取得更窄跨越區間；改變酸的種類：酸種不變；使反應不放熱：反應仍放熱；縮小滴加量是為了讓pH計不必再校正：儀器仍需校正。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "方法改善"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_116_11",
          "stem": "在鹼滴入酸的實驗中，哪項是自變項？",
          "options": [
            "自變項是pH所使用的數值單位",
            "最後圖表標題",
            "量得的pH",
            "累計加入鹼的體積"
          ],
          "answerIndex": 3,
          "rationales": [
            "pH無單位。",
            "標題不是變因。",
            "pH是應變項。",
            "由操作者逐步改變。"
          ],
          "reviewEvidence": "累計加入鹼的體積：由操作者逐步改變；自變項是pH所使用的數值單位：pH無單位；最後圖表標題：標題不是變因；量得的pH：pH是應變項。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "變因辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_116_12",
          "stem": "酸滴入鹼時，pH一般先高後低。跨過7後代表？",
          "options": [
            "酸開始過量",
            "酸停止加入",
            "沒有任何鹽生成",
            "鹼變得更過量"
          ],
          "answerIndex": 0,
          "rationales": [
            "新增酸已超過中和所需。",
            "仍在滴酸。",
            "中和階段已有鹽。",
            "pH下降至酸側。"
          ],
          "reviewEvidence": "酸開始過量：新增酸已超過中和所需；酸停止加入：仍在滴酸；沒有任何鹽生成：中和階段已有鹽；鹼變得更過量：pH下降至酸側。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "反向遷移"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_116_01",
          "stimulusId": "PHYCHM_R4_STIM_116",
          "stem": "終點最接近哪個加入量？",
          "options": [
            "24 mL",
            "0 mL",
            "16 mL",
            "20 mL"
          ],
          "answerIndex": 3,
          "rationales": [
            "已pH 11.5。",
            "起始pH 1.8。",
            "仍pH 2.9。",
            "pH 7.1最接近中性。"
          ],
          "reviewEvidence": "20 mL：pH 7.1最接近中性；24 mL：已pH 11.5；0 mL：起始pH 1.8；16 mL：仍pH 2.9。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "資料定位"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_116_02",
          "stimulusId": "PHYCHM_R4_STIM_116",
          "stem": "19 mL時哪一方仍過量？",
          "options": [
            "無法因pH 5.4判斷",
            "鹼",
            "酸",
            "兩者都必過量"
          ],
          "answerIndex": 2,
          "rationales": [
            "酸性已提供方向。",
            "鹼過量應高於7。",
            "pH低於7。",
            "不能雙方同時過量於同一反應。"
          ],
          "reviewEvidence": "酸：pH低於7；無法因pH 5.4判斷：酸性已提供方向；鹼：鹼過量應高於7；兩者都必過量：不能雙方同時過量於同一反應。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "表格推論"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_116_03",
          "stimulusId": "PHYCHM_R4_STIM_116",
          "stem": "哪一區間pH變化最快？",
          "options": [
            "19～21 mL",
            "各區完全相同",
            "0～16 mL",
            "21～24 mL"
          ],
          "answerIndex": 0,
          "rationales": [
            "5.4升至9.6。",
            "數據不相同。",
            "僅1.1變化。",
            "9.6到11.5較緩。"
          ],
          "reviewEvidence": "19～21 mL：5.4升至9.6；各區完全相同：數據不相同；0～16 mL：僅1.1變化；21～24 mL：9.6到11.5較緩。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "變化率比較"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S117",
      "title": "由質量守恆完成中和資料",
      "authorityRefs": [
        "AUTH-NATURAL-LC-BA-4-3",
        "AUTH-NATURAL-LC-JA-4-1",
        "AUTH-NATURAL-LC-JB-4-3",
        "AUTH-NATURAL-LC-JD-4-4",
        "AUTH-NATURAL-LC-JD-4-5",
        "AUTH-NATURAL-LC-JD-4-6",
        "AUTH-NATURAL-LP-PE-4-1"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科中和、資料判讀與生活應用層次",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_117",
        "objective": "能先界定中和系統，再以總質量守恆補足酸、鹼、鹽水與可能逸出物的資料。",
        "sections": [
          {
            "title": "中和通常沒有氣體逸出",
            "body": "典型酸與鹼生成鹽和水，若容器沒有灑漏、蒸發可忽略，秤量範圍內反應前後總質量相同。未知質量可用反應物總和減去其他已知生成物或混合物質量求得。"
          },
          {
            "title": "守恆不等於各項相等",
            "body": "酸的質量不必等於鹼，鹽的質量也不等於全部生成物；守恆比較的是同一系統所有物質總和。溶液中的水既可能來自原溶劑，也有少量由中和形成，資料表若只列總溶液質量，不可任意拆分。"
          },
          {
            "title": "異常差值先找物質流",
            "body": "實測變輕可能來自濺出、蒸發或秤量誤差，不能說原子消失。若酸與碳酸鹽混用則會放CO₂，必須把氣體納入完整系統；這與不產氣的典型中和題不同。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_117_EX_01",
            "prompt": "40.0 g酸液與60.0 g鹼液完全混合且無損失，生成混合液質量多少？",
            "steps": [
              "界定兩液都在系統內",
              "無氣體或灑漏",
              "40.0＋60.0"
            ],
            "answer": "100.0 g。",
            "why": "反應只重新組合粒子，所有物質仍留在容器中，所以總質量為兩反應物質量相加。"
          },
          {
            "id": "PHYCHM_R4_L_117_EX_02",
            "prompt": "25.0 g酸液與x g鹼液反應後總液質量70.0 g，無損失，x為何？",
            "steps": [
              "反應前總質量等於70.0 g",
              "列25.0＋x＝70.0",
              "求差"
            ],
            "answer": "45.0 g。",
            "why": "同一秤量邊界沒有物質進出，未知鹼液質量就是70.0－25.0＝45.0 g。"
          },
          {
            "id": "PHYCHM_R4_L_117_EX_03",
            "prompt": "理論總質量80.0 g，實測79.2 g且桌面有液滴，差值如何解釋？",
            "steps": [
              "計算少0.8 g",
              "觀察系統外液滴",
              "把差值連到濺出"
            ],
            "answer": "約0.8 g液體離開秤量容器。",
            "why": "桌面液滴原本屬於反應系統，濺出後不再被天平計入；這是系統邊界改變，不是質量守恆失效。"
          }
        ],
        "misconceptions": [
          {
            "belief": "酸與鹼反應會互相消失，所以總質量減少。",
            "whyWrong": "原子只是重組成鹽和水。",
            "correction": "計入完整生成物與溶劑。"
          },
          {
            "belief": "質量守恆表示酸與鹼必須等質量。",
            "whyWrong": "守恆約束總和，反應比例未必一比一質量。",
            "correction": "比較反應前後同一系統總質量。"
          },
          {
            "belief": "天平變輕就證明原子消失。",
            "whyWrong": "物質可能濺出、蒸發或逸氣。",
            "correction": "先查物質是否離開秤量範圍。"
          },
          {
            "belief": "開放與密閉系統的秤量結果必完全相同。",
            "whyWrong": "有氣體或蒸發時，開放容器不含離開物質。",
            "correction": "依反應與系統邊界決定計入項目。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_117",
        "title": "中和秤量紀錄",
        "body": "相同反應在三次操作中均不產生氣體，杯重已扣除。",
        "dataTable": {
          "columns": [
            "組別",
            "酸液",
            "鹼液",
            "反應後液體"
          ],
          "rows": [
            [
              "甲",
              "30.0 g",
              "20.0 g",
              "50.0 g"
            ],
            [
              "乙",
              "45.0 g",
              "x",
              "75.0 g"
            ],
            [
              "丙",
              "25.0 g",
              "35.0 g",
              "59.4 g；桌面有液滴"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_117_01",
          "stem": "30 g酸液與50 g鹼液無損失混合，總質量為？",
          "options": [
            "1500 g",
            "30 g",
            "80 g",
            "20 g"
          ],
          "answerIndex": 2,
          "rationales": [
            "錯用相乘。",
            "漏算鹼。",
            "30＋50＝80。",
            "只算差。"
          ],
          "reviewEvidence": "80 g：30＋50＝80；1500 g：錯用相乘；30 g：漏算鹼；20 g：只算差。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "加法計算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_117_02",
          "stem": "18 g酸液與x g鹼液生成總液50 g，x為？",
          "options": [
            "2.8 g",
            "32 g",
            "18 g",
            "68 g"
          ],
          "answerIndex": 1,
          "rationales": [
            "錯誤比例。",
            "50－18＝32。",
            "假設等質量。",
            "錯用相加。"
          ],
          "reviewEvidence": "32 g：50－18＝32；2.8 g：錯誤比例；18 g：假設等質量；68 g：錯用相加。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "未知量"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_117_03",
          "stem": "中和後總質量守恆的根本原因是？",
          "options": [
            "熱量等於質量",
            "酸鹼都沒有粒子",
            "原子種類與數目在反應中守恆",
            "天平製造物質"
          ],
          "answerIndex": 2,
          "rationales": [
            "兩物理量不同。",
            "酸鹼含粒子。",
            "粒子重新排列。",
            "天平只量測。"
          ],
          "reviewEvidence": "原子種類與數目在反應中守恆：粒子重新排列；熱量等於質量：兩物理量不同；酸鹼都沒有粒子：酸鹼含粒子；天平製造物質：天平只量測。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "微觀解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_117_04",
          "stem": "理論100 g、實測98 g且有濺灑，最合理是？",
          "options": [
            "守恆定律只適用固體，液體濺灑不影響分析",
            "2 g原子消失",
            "反應產生負質量",
            "約2 g物質離開容器"
          ],
          "answerIndex": 3,
          "rationales": [
            "守恆適用化學反應。",
            "原子不消失。",
            "無負質量。",
            "差值與液滴相符。"
          ],
          "reviewEvidence": "約2 g物質離開容器：差值與液滴相符；守恆定律只適用固體，液體濺灑不影響分析：守恆適用化學反應；2 g原子消失：原子不消失；反應產生負質量：無負質量。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "差值解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_117_05",
          "stem": "酸液40 g、鹼液60 g，能否說酸鹼反應質量比必為2：3？",
          "options": [
            "能，因總和100",
            "能，任何酸鹼中和的固定質量比都是2：3",
            "不能，因質量不能量",
            "不能，這可能只是溶液加入量"
          ],
          "answerIndex": 3,
          "rationales": [
            "總和不決定比例。",
            "不同酸鹼比例不同。",
            "質量可量。",
            "濃度與化學比例未知。"
          ],
          "reviewEvidence": "不能，這可能只是溶液加入量：濃度與化學比例未知；能，因總和100：總和不決定比例；能，任何酸鹼中和的固定質量比都是2：3：不同酸鹼比例不同；不能，因質量不能量：質量可量。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "推論限制"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_117_06",
          "stem": "中和後溶液含鹽和水，何者正確？",
          "options": [
            "只有新形成水需計入",
            "兩者質量合計等於完整反應前總質量",
            "鹽沒有質量",
            "原溶劑全部消失"
          ],
          "answerIndex": 1,
          "rationales": [
            "原水也需計入。",
            "無物質進出時總和守恆。",
            "鹽有質量。",
            "溶劑仍在。"
          ],
          "reviewEvidence": "兩者質量合計等於完整反應前總質量：無物質進出時總和守恆；只有新形成水需計入：原水也需計入；鹽沒有質量：鹽有質量；原溶劑全部消失：溶劑仍在。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "系統總和"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_117_07",
          "stem": "若反應會產生氣體且開放秤量，應如何維持完整守恆分析？",
          "options": [
            "把逸出氣體質量也計入",
            "忽略氣體",
            "只算容器",
            "宣稱守恆失效"
          ],
          "answerIndex": 0,
          "rationales": [
            "完整系統需含所有產物。",
            "會漏算物質。",
            "容器不是反應物全部。",
            "定律未失效。"
          ],
          "reviewEvidence": "把逸出氣體質量也計入：完整系統需含所有產物；忽略氣體：會漏算物質；只算容器：容器不是反應物全部；宣稱守恆失效：定律未失效。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "邊界修正"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_117_08",
          "stem": "中和放熱會使總質量變小嗎？",
          "options": [
            "會，鹽沒有質量",
            "不會，因反應不產物",
            "會，溫度每上升1°C，總質量就會少1 g",
            "不會，熱傳不等於反應物原子消失"
          ],
          "answerIndex": 3,
          "rationales": [
            "鹽有質量。",
            "有鹽和水。",
            "無此關係。",
            "物質總量仍守恆。"
          ],
          "reviewEvidence": "不會，熱傳不等於反應物原子消失：物質總量仍守恆；會，鹽沒有質量：鹽有質量；不會，因反應不產物：有鹽和水；會，溫度每上升1°C，總質量就會少1 g：無此關係。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "概念區分"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_117_09",
          "stem": "同一杯反應前後都連杯秤量，杯重是否需扣除才能比較總差？",
          "options": [
            "杯重會因中和消失",
            "一定不准秤杯",
            "不一定，杯重前後相同會相消",
            "需把杯重乘兩倍"
          ],
          "answerIndex": 2,
          "rationales": [
            "杯未反應。",
            "連杯秤量可行。",
            "同一容器可直接比較總讀值。",
            "無需倍增。"
          ],
          "reviewEvidence": "不一定，杯重前後相同會相消：同一容器可直接比較總讀值；杯重會因中和消失：杯未反應；一定不准秤杯：連杯秤量可行；需把杯重乘兩倍：無需倍增。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "量測設計"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_117_10",
          "stem": "反應前兩液合計72.5 g，無損失時反應後應為？",
          "options": [
            "72.5 g",
            "0 g",
            "36.25 g",
            "145 g"
          ],
          "answerIndex": 0,
          "rationales": [
            "總質量不變。",
            "物質未消失。",
            "不需除二。",
            "不需乘二。"
          ],
          "reviewEvidence": "72.5 g：總質量不變；0 g：物質未消失；36.25 g：不需除二；145 g：不需乘二。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "直接守恆"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_117_11",
          "stem": "實驗差0.1 g且天平解析度0.1 g，報告應？",
          "options": [
            "斷言守恆失效",
            "記錄差異並考慮量測不確定性",
            "補加0.1 g未知藥品可把讀值修正成完全相等",
            "刪除數據"
          ],
          "answerIndex": 1,
          "rationales": [
            "證據不足。",
            "差值可能在儀器限制內。",
            "會改變系統。",
            "違反誠信。"
          ],
          "reviewEvidence": "記錄差異並考慮量測不確定性：差值可能在儀器限制內；斷言守恆失效：證據不足；補加0.1 g未知藥品可把讀值修正成完全相等：會改變系統；刪除數據：違反誠信。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "不確定性"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_117_12",
          "stem": "下列哪個算式正確表示無損失中和？",
          "options": [
            "鹽的質量等於兩溶液總質量，水可完全忽略",
            "m酸液＋m鹼液＝m反應後全部液體",
            "m反應後＝0",
            "m酸液＝m鹼液"
          ],
          "answerIndex": 1,
          "rationales": [
            "漏算水。",
            "同系統總和守恆。",
            "物質仍存在。",
            "不要求各項相等。"
          ],
          "reviewEvidence": "m酸液＋m鹼液＝m反應後全部液體：同系統總和守恆；鹽的質量等於兩溶液總質量，水可完全忽略：漏算水；m反應後＝0：物質仍存在；m酸液＝m鹼液：不要求各項相等。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "式子選擇"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_117_01",
          "stimulusId": "PHYCHM_R4_STIM_117",
          "stem": "乙組x為多少？",
          "options": [
            "120.0 g",
            "45.0 g",
            "20.0 g",
            "30.0 g"
          ],
          "answerIndex": 3,
          "rationales": [
            "錯用相加。",
            "重複酸量。",
            "無依據。",
            "75.0－45.0＝30.0。"
          ],
          "reviewEvidence": "30.0 g：75.0－45.0＝30.0；120.0 g：錯用相加；45.0 g：重複酸量；20.0 g：無依據。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "資料補值"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_117_02",
          "stimulusId": "PHYCHM_R4_STIM_117",
          "stem": "丙組少量差值最可能來自？",
          "options": [
            "約0.6 g液體濺到桌面",
            "反應使0.6 g原子消失，所以總質量降低",
            "反應產氣0.6 g",
            "酸鹼完全沒混合"
          ],
          "answerIndex": 0,
          "rationales": [
            "60.0－59.4＝0.6且見液滴。",
            "不違反守恆。",
            "題示反應不產氣。",
            "仍有反應後液體。"
          ],
          "reviewEvidence": "約0.6 g液體濺到桌面：60.0－59.4＝0.6且見液滴；反應使0.6 g原子消失，所以總質量降低：不違反守恆；反應產氣0.6 g：題示反應不產氣；酸鹼完全沒混合：仍有反應後液體。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "異常解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_117_03",
          "stimulusId": "PHYCHM_R4_STIM_117",
          "stem": "甲組最能驗證哪一項？",
          "options": [
            "鹼質量必大於酸",
            "酸鹼質量必相等",
            "無損失中和前後總質量相同",
            "反應只生成氣體"
          ],
          "answerIndex": 2,
          "rationales": [
            "本組鹼反而較少。",
            "兩者並不相等。",
            "30＋20＝50。",
            "反應後仍是液體。"
          ],
          "reviewEvidence": "無損失中和前後總質量相同：30＋20＝50；鹼質量必大於酸：本組鹼反而較少；酸鹼質量必相等：兩者並不相等；反應只生成氣體：反應後仍是液體。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據對應"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S118",
      "title": "由名稱與用途辨識生活中常見鹽類",
      "authorityRefs": [
        "AUTH-NATURAL-LC-BA-4-3",
        "AUTH-NATURAL-LC-JA-4-1",
        "AUTH-NATURAL-LC-JB-4-3",
        "AUTH-NATURAL-LC-JD-4-4",
        "AUTH-NATURAL-LC-JD-4-5",
        "AUTH-NATURAL-LC-JD-4-6",
        "AUTH-NATURAL-LP-PE-4-1"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科中和、資料判讀與生活應用層次",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_118",
        "objective": "能由名稱、離子組成與用途辨識氯化鈉、碳酸鈣、碳酸氫鈉等常見鹽類，並避免只憑外觀或「鹽」字判斷。",
        "sections": [
          {
            "title": "鹽類不只食鹽",
            "body": "氯化鈉是調味與生理食鹽水中的常見鹽；碳酸鈣存在於石灰岩、貝殼與部分制酸劑；碳酸氫鈉可用於烘焙與部分清潔。化學上的鹽類範圍很廣，顏色、溶解度與用途不一定相同。"
          },
          {
            "title": "名稱提供組成線索",
            "body": "鹽類名稱常由正離子與負離子相關名稱組成，例如氯化鈣、硫酸銅。相似名稱不能隨意互換；氯化鈉可食用不代表所有氯化物或所有鈉鹽都可食用。"
          },
          {
            "title": "用途需看純度與劑量",
            "body": "食品級與工業級同名物質可能有不同純度規範，藥品用途也需依標示劑量。不能把實驗室試藥拿來烹調，也不能因某鹽可制酸便大量服用；辨識用途時要同時讀成分、規格與警示。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_118_EX_01",
            "prompt": "貝殼主要成分常標示CaCO₃，名稱為何？",
            "steps": [
              "Ca對應鈣",
              "CO₃對應碳酸根",
              "組合鹽類名稱"
            ],
            "answer": "碳酸鈣。",
            "why": "CaCO₃由鈣離子與碳酸根相關粒子組成，名稱為碳酸鈣；它與酸反應可放出二氧化碳。"
          },
          {
            "id": "PHYCHM_R4_L_118_EX_02",
            "prompt": "烘焙配方寫NaHCO₃，應選食鹽還是小蘇打？",
            "steps": [
              "辨認NaHCO₃名稱",
              "區分NaCl",
              "配對生活用途"
            ],
            "answer": "小蘇打（碳酸氫鈉）。",
            "why": "食鹽主要是NaCl，化學式與功能不同；NaHCO₃是碳酸氫鈉，受熱或遇酸可產生氣體幫助膨鬆。"
          },
          {
            "id": "PHYCHM_R4_L_118_EX_03",
            "prompt": "藍色硫酸銅晶體能否因為是「鹽」而用作調味？",
            "steps": [
              "化學鹽類不等於食鹽",
              "辨認硫酸銅非食品",
              "依危害標示處理"
            ],
            "answer": "不能。",
            "why": "硫酸銅雖屬鹽類，但其毒性與用途不同於氯化鈉；化學分類不能作為可食用證明。"
          }
        ],
        "misconceptions": [
          {
            "belief": "化學上稱作鹽的物質都能吃。",
            "whyWrong": "許多鹽類具毒性或不符合食品純度。",
            "correction": "只有標示食品用途且合規的產品才可食用。"
          },
          {
            "belief": "白色晶體一定是氯化鈉。",
            "whyWrong": "多種鹽與糖都可能呈白色晶體。",
            "correction": "用名稱、標示或適當檢驗辨識。"
          },
          {
            "belief": "小蘇打和食鹽都有鈉，所以可完全互換。",
            "whyWrong": "負離子、性質與反應用途不同。",
            "correction": "依化學式與配方指定使用。"
          },
          {
            "belief": "同一化學名稱的工業級試藥可直接入菜。",
            "whyWrong": "純度、雜質與包裝規格不一定符合食品標準。",
            "correction": "用途必須符合產品等級與標示。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_118",
        "title": "四種含鹽產品",
        "body": "比較標籤成分與核准用途，不以外觀判定可食性。",
        "dataTable": {
          "columns": [
            "產品",
            "主要成分",
            "標示用途"
          ],
          "rows": [
            [
              "甲",
              "NaCl",
              "食品調味"
            ],
            [
              "乙",
              "NaHCO₃",
              "食品膨鬆"
            ],
            [
              "丙",
              "CaCO₃",
              "建材原料"
            ],
            [
              "丁",
              "CuSO₄",
              "實驗試藥，不可食用"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_118_01",
          "stem": "食鹽的主要成分是？",
          "options": [
            "硫酸銅",
            "碳酸鈣",
            "氯化鈉",
            "氧化鐵"
          ],
          "answerIndex": 2,
          "rationales": [
            "不可作調味。",
            "常見於石灰岩。",
            "食鹽主要為NaCl。",
            "是鐵氧化物。"
          ],
          "reviewEvidence": "氯化鈉：食鹽主要為NaCl；硫酸銅：不可作調味；碳酸鈣：常見於石灰岩；氧化鐵：是鐵氧化物。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "名稱辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_118_02",
          "stem": "小蘇打的主要化學名稱為？",
          "options": [
            "氯化鈉，因小蘇打和食鹽都是白色粉末",
            "碳酸氫鈉",
            "氧化銅",
            "硫酸鈣"
          ],
          "answerIndex": 1,
          "rationales": [
            "是食鹽。",
            "對應NaHCO₃。",
            "不是鹽類用途。",
            "組成不同。"
          ],
          "reviewEvidence": "碳酸氫鈉：對應NaHCO₃；氯化鈉，因小蘇打和食鹽都是白色粉末：是食鹽；氧化銅：不是鹽類用途；硫酸鈣：組成不同。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "生活連結"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_118_03",
          "stem": "石灰岩與貝殼常含？",
          "options": [
            "碳酸鈣",
            "氯化鈉",
            "純鐵",
            "硝酸鉀一定為主"
          ],
          "answerIndex": 0,
          "rationales": [
            "主要成分常為CaCO₃。",
            "不是主要成分。",
            "不是金屬鐵。",
            "無此一般性。"
          ],
          "reviewEvidence": "碳酸鈣：主要成分常為CaCO₃；氯化鈉：不是主要成分；純鐵：不是金屬鐵；硝酸鉀一定為主：無此一般性。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "材料辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_118_04",
          "stem": "硫酸銅屬鹽類，是否可當調味料？",
          "options": [
            "不可，鹽類分類不等於食品安全",
            "可以，名稱有鹽",
            "不可，因它不是物質",
            "可以，藍色代表營養"
          ],
          "answerIndex": 0,
          "rationales": [
            "用途與毒性不同。",
            "化學分類被誤用。",
            "它確是物質。",
            "顏色不證明可食。"
          ],
          "reviewEvidence": "不可，鹽類分類不等於食品安全：用途與毒性不同；可以，名稱有鹽：化學分類被誤用；不可，因它不是物質：它確是物質；可以，藍色代表營養：顏色不證明可食。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "安全分類"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_118_05",
          "stem": "白色晶體外觀能否證明樣品是食鹽？",
          "options": [
            "不能，因NaCl不是晶體",
            "能，只要能溶於水",
            "能，所有白晶體都是NaCl",
            "不能，多種物質外觀相似"
          ],
          "answerIndex": 3,
          "rationales": [
            "NaCl可形成晶體。",
            "多種鹽可溶。",
            "糖等也是白晶體。",
            "需成分證據。"
          ],
          "reviewEvidence": "不能，多種物質外觀相似：需成分證據；不能，因NaCl不是晶體：NaCl可形成晶體；能，只要能溶於水：多種鹽可溶；能，所有白晶體都是NaCl：糖等也是白晶體。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據限制"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_118_06",
          "stem": "NaCl與NaHCO₃共同含鈉，為何性質不同？",
          "options": [
            "只有包裝不同",
            "兩者其實完全相同",
            "所含負離子與結構不同",
            "鈉原子會改顏色就變元素"
          ],
          "answerIndex": 2,
          "rationales": [
            "本質不只包裝。",
            "化學式不同。",
            "陰離子造成不同反應性。",
            "元素不如此變換。"
          ],
          "reviewEvidence": "所含負離子與結構不同：陰離子造成不同反應性；只有包裝不同：本質不只包裝；兩者其實完全相同：化學式不同；鈉原子會改顏色就變元素：元素不如此變換。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "組成推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_118_07",
          "stem": "食品級與工業級同名鹽最需比較？",
          "options": [
            "純度、雜質與用途標示",
            "只比較晶體是否有影子即可判斷食品級別",
            "包裝字體大小",
            "名稱字數"
          ],
          "answerIndex": 0,
          "rationales": [
            "決定是否符合食品規範。",
            "影子無關。",
            "字體不決定純度。",
            "字數無關。"
          ],
          "reviewEvidence": "純度、雜質與用途標示：決定是否符合食品規範；只比較晶體是否有影子即可判斷食品級別：影子無關；包裝字體大小：字體不決定純度；名稱字數：字數無關。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "產品判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_118_08",
          "stem": "碳酸鈣遇酸冒泡，氣體主要是？",
          "options": [
            "氫氣，因所有酸與白色固體反應都產氫",
            "氮氣",
            "氧氣",
            "二氧化碳"
          ],
          "answerIndex": 3,
          "rationales": [
            "金屬遇酸才常產氫。",
            "無氮來源。",
            "不是產物。",
            "碳酸鹽遇酸放CO₂。"
          ],
          "reviewEvidence": "二氧化碳：碳酸鹽遇酸放CO₂；氫氣，因所有酸與白色固體反應都產氫：金屬遇酸才常產氫；氮氣：無氮來源；氧氣：不是產物。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "性質連結"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_118_09",
          "stem": "碳酸氫鈉用於烘焙的關鍵性質為？",
          "options": [
            "是藍色金屬",
            "永遠不反應",
            "可在配方條件下產生氣體使麵糰膨鬆",
            "能把所有食物變中性"
          ],
          "answerIndex": 2,
          "rationales": [
            "是白色鹽類。",
            "它可受熱或遇酸反應。",
            "氣泡形成孔隙。",
            "效果非任意中和。"
          ],
          "reviewEvidence": "可在配方條件下產生氣體使麵糰膨鬆：氣泡形成孔隙；是藍色金屬：是白色鹽類；永遠不反應：它可受熱或遇酸反應；能把所有食物變中性：效果非任意中和。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "用途原理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_118_10",
          "stem": "「所有氯化物都像氯化鈉可食」錯在哪裡？",
          "options": [
            "所有氯化物都沒有離子",
            "食用性只看顏色",
            "氯化鈉不是氯化物",
            "相同陰離子不代表正離子、毒性與用途相同"
          ],
          "answerIndex": 3,
          "rationales": [
            "鹽含離子。",
            "顏色不足。",
            "NaCl就是氯化物。",
            "另一離子會改變性質。"
          ],
          "reviewEvidence": "相同陰離子不代表正離子、毒性與用途相同：另一離子會改變性質；所有氯化物都沒有離子：鹽含離子；食用性只看顏色：顏色不足；氯化鈉不是氯化物：NaCl就是氯化物。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "分類邊界"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_118_11",
          "stem": "化學上的鹽通常由什麼組成？",
          "options": [
            "只有水分子",
            "正離子與負離子",
            "只由氧氣組成",
            "只有中性原子且無電性粒子"
          ],
          "answerIndex": 1,
          "rationales": [
            "水不是鹽。",
            "離子化合物的基本組成。",
            "氧氣不是鹽。",
            "不符鹽類模型。"
          ],
          "reviewEvidence": "正離子與負離子：離子化合物的基本組成；只有水分子：水不是鹽；只由氧氣組成：氧氣不是鹽；只有中性原子且無電性粒子：不符鹽類模型。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "微觀概念"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_118_12",
          "stem": "辨識無標籤白色鹽粉，最安全做法是？",
          "options": [
            "舔一口",
            "徒手大量搓揉",
            "視為未知化學品並交由教師依程序檢驗",
            "直接加入食物"
          ],
          "answerIndex": 2,
          "rationales": [
            "不可品嘗。",
            "可能刺激皮膚。",
            "避免未知暴露。",
            "未確認不可食。"
          ],
          "reviewEvidence": "視為未知化學品並交由教師依程序檢驗：避免未知暴露；舔一口：不可品嘗；徒手大量搓揉：可能刺激皮膚；直接加入食物：未確認不可食。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "安全處置"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_118_01",
          "stimulusId": "PHYCHM_R4_STIM_118",
          "stem": "烘焙配方指定小蘇打，應選哪項？",
          "options": [
            "乙",
            "丙",
            "丁",
            "甲"
          ],
          "answerIndex": 0,
          "rationales": [
            "乙為NaHCO₃且標食品膨鬆。",
            "丙是建材。",
            "丁不可食。",
            "甲是NaCl調味。"
          ],
          "reviewEvidence": "乙：乙為NaHCO₃且標食品膨鬆；丙：丙是建材；丁：丁不可食；甲：甲是NaCl調味。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "標籤配對"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_118_02",
          "stimulusId": "PHYCHM_R4_STIM_118",
          "stem": "哪項最直接反駁「鹽類都可食」？",
          "options": [
            "丙含鈣",
            "丁標示不可食用",
            "甲可用於調味，所以任何鹽類都可以食用",
            "乙用於食品"
          ],
          "answerIndex": 1,
          "rationales": [
            "含鈣不直接判食用。",
            "丁是鹽類試藥但不可食。",
            "支持可食個例。",
            "也是可食個例。"
          ],
          "reviewEvidence": "丁標示不可食用：丁是鹽類試藥但不可食；丙含鈣：含鈣不直接判食用；甲可用於調味，所以任何鹽類都可以食用：支持可食個例；乙用於食品：也是可食個例。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "反例選擇"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_118_03",
          "stimulusId": "PHYCHM_R4_STIM_118",
          "stem": "甲與乙不可互換的直接依據是？",
          "options": [
            "甲乙外觀都可能白色，因此可互換用途",
            "名稱都含鈉",
            "兩者都含Na",
            "化學式與標示用途不同"
          ],
          "answerIndex": 3,
          "rationales": [
            "外觀不足。",
            "共同名稱片段不足。",
            "共同點不能證明互換。",
            "NaCl與NaHCO₃功能不同。"
          ],
          "reviewEvidence": "化學式與標示用途不同：NaCl與NaHCO₃功能不同；甲乙外觀都可能白色，因此可互換用途：外觀不足；名稱都含鈉：共同名稱片段不足；兩者都含Na：共同點不能證明互換。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料整合"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S119",
      "title": "分析生活中中和應用與安全限制",
      "authorityRefs": [
        "AUTH-NATURAL-LC-BA-4-3",
        "AUTH-NATURAL-LC-JA-4-1",
        "AUTH-NATURAL-LC-JB-4-3",
        "AUTH-NATURAL-LC-JD-4-4",
        "AUTH-NATURAL-LC-JD-4-5",
        "AUTH-NATURAL-LC-JD-4-6",
        "AUTH-NATURAL-LP-PE-4-1"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科中和、資料判讀與生活應用層次",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_119",
        "objective": "能分析制酸、土壤調整與廢液處理等中和應用，並依劑量、成分、放熱和環境條件指出限制。",
        "sections": [
          {
            "title": "應用不是無限加入",
            "body": "制酸劑以適量鹼性成分減少胃酸不適，但過量或不當使用可能影響消化與藥物；酸性土壤可依檢測施用石灰質材料，卻不是pH越高越好。中和目標是調整到合適範圍。"
          },
          {
            "title": "廢液需監測與分段",
            "body": "處理酸鹼廢液時應在專業規範下分次加藥、攪拌、量測pH並控制溫度。達到目標pH不表示其他重金屬或有機污染物消失，因此不能只通過酸鹼測試就任意排放。"
          },
          {
            "title": "家庭情境仍需安全",
            "body": "昆蟲螫傷或清潔劑誤觸不能靠網路流傳的酸鹼配方自行中和，因毒液成分與傷口狀態複雜。優先清水沖洗、移除污染與尋求專業協助；不把課堂中和模型當作通用醫療處方。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_119_EX_01",
            "prompt": "酸性土壤pH 4.5，農民是否應一次加入大量石灰直到pH 12？",
            "steps": [
              "作物有適宜pH範圍",
              "石灰可中和但可能過量",
              "分次施用並複測"
            ],
            "answer": "不應；應依土壤檢測分次調整到作物適宜範圍。",
            "why": "過量石灰會讓土壤轉為強鹼並影響養分可利用性；中和的目的不是追求最高pH。"
          },
          {
            "id": "PHYCHM_R4_L_119_EX_02",
            "prompt": "酸性廢液調到pH 7後能否直接排放？",
            "steps": [
              "pH只反映酸鹼",
              "檢查其他污染物",
              "依排放標準處理"
            ],
            "answer": "不能只憑pH決定。",
            "why": "中和可能留下鹽、重金屬或其他有害成分；必須完成所需檢測並符合規範，不能把中性等同無污染。"
          },
          {
            "id": "PHYCHM_R4_L_119_EX_03",
            "prompt": "服用制酸劑超過標示量是否能更快且更安全？",
            "steps": [
              "制酸反應需適量",
              "過量可能改變胃內環境",
              "遵守藥品標示"
            ],
            "answer": "不能，應按標示或醫囑使用。",
            "why": "更多鹼性成分不等於更好，可能造成副作用或與其他藥物交互影響；用途有效仍有劑量界線。"
          }
        ],
        "misconceptions": [
          {
            "belief": "中和劑加得越多，處理效果越好。",
            "whyWrong": "過量會讓另一方成為問題並偏離目標pH。",
            "correction": "分次加入、攪拌並複測。"
          },
          {
            "belief": "廢液pH 7就代表所有污染物消失。",
            "whyWrong": "中和不能自動去除其他有毒成分。",
            "correction": "依污染物種類完成後續處理與檢驗。"
          },
          {
            "belief": "任何螫傷都可用相反酸鹼液直接塗抹。",
            "whyWrong": "傷害成分不只酸鹼，濃度與皮膚破損也不明。",
            "correction": "按急救指引沖洗並求助。"
          },
          {
            "belief": "土壤pH越接近強鹼，作物一定長得越好。",
            "whyWrong": "不同作物有適宜區間，過酸過鹼都不利。",
            "correction": "依檢測與農業建議調整。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_119",
        "title": "酸性廢液分段處理",
        "body": "技術員每次加入相同小量中和劑，充分攪拌後量pH與溫度；目標pH範圍為6～9。",
        "dataTable": {
          "columns": [
            "累計加入份數",
            "pH",
            "溫度"
          ],
          "rows": [
            [
              "0",
              "2.1",
              "24°C"
            ],
            [
              "2",
              "3.0",
              "27°C"
            ],
            [
              "4",
              "6.4",
              "31°C"
            ],
            [
              "5",
              "8.2",
              "30°C"
            ],
            [
              "6",
              "11.0",
              "29°C"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_119_01",
          "stem": "制酸劑的主要作用是？",
          "options": [
            "永久停止消化",
            "使pH無限升高",
            "以適量鹼性成分減少胃酸酸性",
            "制酸劑會把胃內所有物質完全轉變成純水"
          ],
          "answerIndex": 2,
          "rationales": [
            "不是目的。",
            "過量有害。",
            "利用受控中和。",
            "仍有鹽與其他物質。"
          ],
          "reviewEvidence": "以適量鹼性成分減少胃酸酸性：利用受控中和；永久停止消化：不是目的；使pH無限升高：過量有害；制酸劑會把胃內所有物質完全轉變成純水：仍有鹽與其他物質。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "應用原理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_119_02",
          "stem": "調整酸性土壤最合理的方法是？",
          "options": [
            "一次加鹼直到pH 14，才能確保土壤不再酸化",
            "依檢測分次施用並追蹤pH",
            "加入未知廢鹼",
            "不看作物需求"
          ],
          "answerIndex": 1,
          "rationales": [
            "過鹼有害。",
            "控制在適宜範圍。",
            "未知物有污染風險。",
            "作物需求重要。"
          ],
          "reviewEvidence": "依檢測分次施用並追蹤pH：控制在適宜範圍；一次加鹼直到pH 14，才能確保土壤不再酸化：過鹼有害；加入未知廢鹼：未知物有污染風險；不看作物需求：作物需求重要。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "方案評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_119_03",
          "stem": "廢液中和後仍需檢測其他污染物，因為？",
          "options": [
            "中性液沒有任何粒子",
            "中和會創造所有污染物，所以才要再檢測",
            "pH不表示重金屬等已移除",
            "pH計能測所有毒物"
          ],
          "answerIndex": 2,
          "rationales": [
            "中性液仍有溶質。",
            "並非全部由中和生成。",
            "酸鹼只是污染面向之一。",
            "pH計只測酸鹼。"
          ],
          "reviewEvidence": "pH不表示重金屬等已移除：酸鹼只是污染面向之一；中性液沒有任何粒子：中性液仍有溶質；中和會創造所有污染物，所以才要再檢測：並非全部由中和生成；pH計能測所有毒物：pH計只測酸鹼。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "限制分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_119_04",
          "stem": "中和劑為何要分次加入？",
          "options": [
            "讓質量不守恆",
            "讓廢液一定結冰",
            "使pH計失效",
            "避免過量、控制放熱並可逐步量測"
          ],
          "answerIndex": 3,
          "rationales": [
            "守恆不受此影響。",
            "無此目的。",
            "正要使用pH計。",
            "三項都提升控制性。"
          ],
          "reviewEvidence": "避免過量、控制放熱並可逐步量測：三項都提升控制性；讓質量不守恆：守恆不受此影響；讓廢液一定結冰：無此目的；使pH計失效：正要使用pH計。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "程序理由"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_119_05",
          "stem": "用強酸直接處理鹼液灼傷是否適當？",
          "options": [
            "適當，酸鹼混合永不放熱",
            "不適當，應先大量清水沖洗並求助",
            "不適當，因酸沒有粒子",
            "適當，越濃越好"
          ],
          "answerIndex": 1,
          "rationales": [
            "中和可能放熱。",
            "避免二次腐蝕與放熱。",
            "酸有離子。",
            "濃酸更危險。"
          ],
          "reviewEvidence": "不適當，應先大量清水沖洗並求助：避免二次腐蝕與放熱；適當，酸鹼混合永不放熱：中和可能放熱；不適當，因酸沒有粒子：酸有離子；適當，越濃越好：濃酸更危險。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "急救判斷"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_119_06",
          "stem": "土壤由pH 4調到6.5，最合理描述是？",
          "options": [
            "所有鹽消失",
            "酸性減弱，可能更接近某些作物適宜範圍",
            "變成強鹼",
            "土壤變純水"
          ],
          "answerIndex": 1,
          "rationales": [
            "鹽仍可能存在。",
            "仍略酸但接近中性。",
            "6.5小於7。",
            "土壤不是水。"
          ],
          "reviewEvidence": "酸性減弱，可能更接近某些作物適宜範圍：仍略酸但接近中性；所有鹽消失：鹽仍可能存在；變成強鹼：6.5小於7；土壤變純水：土壤不是水。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "pH應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_119_07",
          "stem": "服用制酸劑應遵守什麼？",
          "options": [
            "每次越多越有效",
            "用工業鹼取代",
            "自己把多種藥混合",
            "產品標示、劑量與醫藥建議"
          ],
          "answerIndex": 3,
          "rationales": [
            "過量不安全。",
            "工業品不可服用。",
            "混藥有風險。",
            "降低副作用與交互作用。"
          ],
          "reviewEvidence": "產品標示、劑量與醫藥建議：降低副作用與交互作用；每次越多越有效：過量不安全；用工業鹼取代：工業品不可服用；自己把多種藥混合：混藥有風險。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "健康素養"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_119_08",
          "stem": "處理廢液時溫度突然快速上升，應？",
          "options": [
            "停止加藥、維持安全並查明放熱狀況",
            "徒手摸容器",
            "密閉容器繼續反應",
            "加倍快速倒入"
          ],
          "answerIndex": 0,
          "rationales": [
            "防止過熱濺灑。",
            "可能燙傷。",
            "密閉可能增壓。",
            "會加劇反應。"
          ],
          "reviewEvidence": "停止加藥、維持安全並查明放熱狀況：防止過熱濺灑；徒手摸容器：可能燙傷；密閉容器繼續反應：密閉可能增壓；加倍快速倒入：會加劇反應。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "異常處置"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_119_09",
          "stem": "pH 7的工業廢液是否必可排入河川？",
          "options": [
            "是，中性等於純水",
            "是，所有污染物已消失",
            "否，仍需符合所有排放標準",
            "否，因pH 7的液體必定屬於強酸"
          ],
          "answerIndex": 2,
          "rationales": [
            "中性不等於純。",
            "無此保證。",
            "還有其他污染項目。",
            "pH 7中性。"
          ],
          "reviewEvidence": "否，仍需符合所有排放標準：還有其他污染項目；是，中性等於純水：中性不等於純；是，所有污染物已消失：無此保證；否，因pH 7的液體必定屬於強酸：pH 7中性。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "法規情境"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_119_10",
          "stem": "中和應用的共同控制原則是？",
          "options": [
            "忽略放熱",
            "設定目標範圍、分次處理並量測",
            "追求最高pH",
            "只看加入物顏色"
          ],
          "answerIndex": 1,
          "rationales": [
            "放熱是風險。",
            "避免過量並可驗證。",
            "目標不是最高。",
            "顏色不足。"
          ],
          "reviewEvidence": "設定目標範圍、分次處理並量測：避免過量並可驗證；忽略放熱：放熱是風險；追求最高pH：目標不是最高；只看加入物顏色：顏色不足。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "共通原則"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_119_11",
          "stem": "酸性湖泊治理能否直接倒大量強鹼？",
          "options": [
            "不宜，會造成局部強鹼與生態衝擊",
            "可以，鹼越多越安全",
            "不宜，因酸鹼不反應",
            "可以，不需監測"
          ],
          "answerIndex": 0,
          "rationales": [
            "環境系統需緩慢評估。",
            "過量有害。",
            "酸鹼會中和。",
            "必須監測。"
          ],
          "reviewEvidence": "不宜，會造成局部強鹼與生態衝擊：環境系統需緩慢評估；可以，鹼越多越安全：過量有害；不宜，因酸鹼不反應：酸鹼會中和；可以，不需監測：必須監測。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "系統評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_119_12",
          "stem": "哪項是中和應用的正確界線？",
          "options": [
            "可調整酸鹼，但不能保證去除所有危害",
            "可取代所有醫療",
            "可使物質無質量",
            "可讓任何廢物變食品"
          ],
          "answerIndex": 0,
          "rationales": [
            "準確描述功能。",
            "化學模型不取代醫療。",
            "違反守恆。",
            "荒謬且危險。"
          ],
          "reviewEvidence": "可調整酸鹼，但不能保證去除所有危害：準確描述功能；可取代所有醫療：化學模型不取代醫療；可使物質無質量：違反守恆；可讓任何廢物變食品：荒謬且危險。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "範圍界定"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_119_01",
          "stimulusId": "PHYCHM_R4_STIM_119",
          "stem": "哪兩次加入結果落在目標pH 6～9？",
          "options": [
            "0份與2份",
            "5份與6份",
            "只有6份",
            "4份與5份"
          ],
          "answerIndex": 3,
          "rationales": [
            "皆低於6。",
            "6份pH 11。",
            "11超標。",
            "pH 6.4與8.2。"
          ],
          "reviewEvidence": "4份與5份：pH 6.4與8.2；0份與2份：皆低於6；5份與6份：6份pH 11；只有6份：11超標。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "範圍篩選"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_119_02",
          "stimulusId": "PHYCHM_R4_STIM_119",
          "stem": "加入6份後的主要問題是？",
          "options": [
            "沒有任何反應",
            "酸仍嚴重過量",
            "溫度低於起始",
            "中和劑過量使pH升到11"
          ],
          "answerIndex": 3,
          "rationales": [
            "前段有升溫與pH變化。",
            "pH高表示鹼餘。",
            "29高於24。",
            "已超過目標上限。"
          ],
          "reviewEvidence": "中和劑過量使pH升到11：已超過目標上限；沒有任何反應：前段有升溫與pH變化；酸仍嚴重過量：pH高表示鹼餘；溫度低於起始：29高於24。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "過量判斷"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_119_03",
          "stimulusId": "PHYCHM_R4_STIM_119",
          "stem": "溫度最高出現在4份時最支持什麼？",
          "options": [
            "中和放熱在接近大量反應時較明顯",
            "6份完全無鹼",
            "反應必定吸熱",
            "溫度越高pH一定越高"
          ],
          "answerIndex": 0,
          "rationales": [
            "由24升31且pH進入目標。",
            "6份鹼過量。",
            "升溫支持放熱。",
            "5、6份pH更高但溫度下降。"
          ],
          "reviewEvidence": "中和放熱在接近大量反應時較明顯：由24升31且pH進入目標；6份完全無鹼：6份鹼過量；反應必定吸熱：升溫支持放熱；溫度越高pH一定越高：5、6份pH更高但溫度下降。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "雙變量整合"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S120",
      "title": "設計以指示劑追蹤中和過程的實驗",
      "authorityRefs": [
        "AUTH-NATURAL-LC-BA-4-3",
        "AUTH-NATURAL-LC-JA-4-1",
        "AUTH-NATURAL-LC-JB-4-3",
        "AUTH-NATURAL-LC-JD-4-4",
        "AUTH-NATURAL-LC-JD-4-5",
        "AUTH-NATURAL-LC-JD-4-6",
        "AUTH-NATURAL-LP-PE-4-1"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科中和、資料判讀與生活應用層次",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_120",
        "objective": "能選擇合適指示劑，以逐滴加入、持續攪拌、空白與重複量測追蹤中和終點，並誠實呈現色階限制。",
        "sections": [
          {
            "title": "指示劑要配合終點",
            "body": "先把固定體積的待測酸或鹼放入錐形瓶，加入少量合適指示劑，再由滴定管逐滴加入另一方。指示劑的變色範圍應落在終點附近的快速pH變化區；不是顏色越鮮豔就越合適。"
          },
          {
            "title": "終點附近放慢",
            "body": "過程中持續輕搖或攪拌，使每滴均勻反應；接近預期終點時改成逐滴加入，出現可持續約定時間的淡色變化便停止並讀取體積。若顏色只在落點局部出現又消失，表示尚未混合均勻或尚未達終點。"
          },
          {
            "title": "重複與空白使結果可信",
            "body": "先做一次粗測找區間，再以新樣品重複精測，體積結果應相近。滴定管尖端氣泡、起始刻度誤讀、過量指示劑與容器污染都會造成偏差；原始讀值不得只抄答案體積。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_120_EX_01",
            "prompt": "滴鹼入酸時，指示劑顏色在滴落處短暫出現，搖勻後消失，是否達終點？",
            "steps": [
              "局部鹼使顏色暫變",
              "搖勻後酸仍過量",
              "繼續逐滴加入"
            ],
            "answer": "尚未達終點。",
            "why": "真正終點的顏色應在整杯混合後維持；局部色斑消失表示新增OH⁻仍被剩餘酸消耗。"
          },
          {
            "id": "PHYCHM_R4_L_120_EX_02",
            "prompt": "粗測終點約18 mL，精測時到17 mL後應如何加液？",
            "steps": [
              "已接近終點",
              "減少單次加入量",
              "每滴後攪拌觀察"
            ],
            "answer": "改為逐滴加入並等待顏色穩定。",
            "why": "終點附近pH變化快，一次加入1 mL容易越過；逐滴操作能把終點體積限制得更窄。"
          },
          {
            "id": "PHYCHM_R4_L_120_EX_03",
            "prompt": "三次終點為18.2、18.3、22.7 mL，如何處理22.7 mL？",
            "steps": [
              "保留三筆原始值",
              "檢查第三次過滴或氣泡",
              "修正程序後重測"
            ],
            "answer": "標記為待查異常，不可無痕刪除。",
            "why": "前兩次相近而第三次差4 mL以上，需查操作原因並增加重複；不能因不合預期直接改寫數字。"
          }
        ],
        "misconceptions": [
          {
            "belief": "顏色在一滴落下處出現就代表終點。",
            "whyWrong": "局部未混勻的pH可與整杯不同。",
            "correction": "每滴後充分攪拌，觀察全杯持續色變。"
          },
          {
            "belief": "接近終點仍一次倒入大量滴定液較省時。",
            "whyWrong": "會越過終點而高估所需體積。",
            "correction": "先粗測，再在終點前改逐滴。"
          },
          {
            "belief": "指示劑加越多，終點越準。",
            "whyWrong": "過量試劑會加深顏色並可能影響酸鹼。",
            "correction": "各次使用相同規定少量。"
          },
          {
            "belief": "重複結果不同時，只留最漂亮的一次。",
            "whyWrong": "選擇性保留會隱藏方法問題。",
            "correction": "保留原始數據、找原因並重測。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_120",
        "title": "滴定操作紀錄",
        "body": "固定取20.00 mL酸，加入2滴指示劑，以同一鹼液滴定。讀值為滴定管終讀數減初讀數。",
        "dataTable": {
          "columns": [
            "次數",
            "初讀數",
            "終讀數",
            "觀察"
          ],
          "rows": [
            [
              "粗測",
              "0.10 mL",
              "18.70 mL",
              "顏色過深"
            ],
            [
              "精測1",
              "1.20 mL",
              "19.45 mL",
              "淡色維持30秒"
            ],
            [
              "精測2",
              "2.05 mL",
              "20.35 mL",
              "淡色維持30秒"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_120_01",
          "stem": "中和滴定中指示劑的功能是？",
          "options": [
            "增加酸的未知濃度",
            "用變色顯示終點附近pH區間",
            "製造鹽的質量",
            "取代所有體積讀值"
          ],
          "answerIndex": 1,
          "rationales": [
            "不應改樣品濃度。",
            "顏色回應酸鹼。",
            "不是主要產物來源。",
            "仍需讀滴定管。"
          ],
          "reviewEvidence": "用變色顯示終點附近pH區間：顏色回應酸鹼；增加酸的未知濃度：不應改樣品濃度；製造鹽的質量：不是主要產物來源；取代所有體積讀值：仍需讀滴定管。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "器材功能"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_120_02",
          "stem": "為何每滴後要攪拌？",
          "options": [
            "降低讀值到零",
            "讓新增液均勻反應，顏色代表全杯",
            "使指示劑變成鹽",
            "讓體積消失"
          ],
          "answerIndex": 1,
          "rationales": [
            "與歸零無關。",
            "避免局部pH誤判。",
            "指示劑仍作顯色。",
            "體積不消失。"
          ],
          "reviewEvidence": "讓新增液均勻反應，顏色代表全杯：避免局部pH誤判；降低讀值到零：與歸零無關；使指示劑變成鹽：指示劑仍作顯色；讓體積消失：體積不消失。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "操作理由"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_120_03",
          "stem": "接近終點時應如何加滴定液？",
          "options": [
            "逐滴加入",
            "一次倒入10 mL",
            "停止攪拌後猛加",
            "直接倒回原瓶"
          ],
          "answerIndex": 0,
          "rationales": [
            "提高終點解析度。",
            "易過滴。",
            "局部顏色誤判。",
            "會污染。"
          ],
          "reviewEvidence": "逐滴加入：提高終點解析度；一次倒入10 mL：易過滴；停止攪拌後猛加：局部顏色誤判；直接倒回原瓶：會污染。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "程序選擇"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_120_04",
          "stem": "滴落處短暫變色，搖勻後消失，代表？",
          "options": [
            "指示劑沒有作用",
            "酸鹼沒有反應",
            "已嚴重過量",
            "尚未達終點"
          ],
          "answerIndex": 3,
          "rationales": [
            "已出現顏色。",
            "正因反應而消失。",
            "過量會維持顏色。",
            "剩餘酸鹼消耗新增滴液。"
          ],
          "reviewEvidence": "尚未達終點：剩餘酸鹼消耗新增滴液；指示劑沒有作用：已出現顏色；酸鹼沒有反應：正因反應而消失；已嚴重過量：過量會維持顏色。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "現象判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_120_05",
          "stem": "滴定管用量如何計算？",
          "options": [
            "只看終讀數",
            "兩讀數相乘",
            "終讀數減初讀數",
            "初讀數減終讀數"
          ],
          "answerIndex": 2,
          "rationales": [
            "若初值不零會錯。",
            "無體積意義。",
            "刻度差是流出體積。",
            "會得負值。"
          ],
          "reviewEvidence": "終讀數減初讀數：刻度差是流出體積；只看終讀數：若初值不零會錯；兩讀數相乘：無體積意義；初讀數減終讀數：會得負值。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "讀值計算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_120_06",
          "stem": "粗測的主要目的為何？",
          "options": [
            "不需指示劑",
            "找出終點大致體積供精測放慢",
            "作為唯一正式結果",
            "讓所有樣品混在一起"
          ],
          "answerIndex": 1,
          "rationales": [
            "仍需判色。",
            "先定位快速變化區。",
            "粗測可能過滴。",
            "每次需新樣品。"
          ],
          "reviewEvidence": "找出終點大致體積供精測放慢：先定位快速變化區；不需指示劑：仍需判色；作為唯一正式結果：粗測可能過滴；讓所有樣品混在一起：每次需新樣品。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "流程規劃"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_120_07",
          "stem": "滴定管尖端有氣泡，初段加入液先填滿尖端，可能造成？",
          "options": [
            "pH計自動校正",
            "樣品得到更多液體",
            "終點一定提前",
            "讀得體積大於實際進入樣品體積"
          ],
          "answerIndex": 3,
          "rationales": [
            "與pH計無關。",
            "實際入杯較少。",
            "可能延後讀值。",
            "部分讀值用於排氣填尖端。"
          ],
          "reviewEvidence": "讀得體積大於實際進入樣品體積：部分讀值用於排氣填尖端；pH計自動校正：與pH計無關；樣品得到更多液體：實際入杯較少；終點一定提前：可能延後讀值。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "系統誤差"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_120_08",
          "stem": "三次終點相近的意義是？",
          "options": [
            "不需校正器材",
            "三次終點相近表示每次結果都絕對沒有誤差",
            "酸鹼種類相同",
            "操作具有較好重現性"
          ],
          "answerIndex": 3,
          "rationales": [
            "器材仍需檢查。",
            "仍可能共同偏差。",
            "不能由此判物種。",
            "重複值接近。"
          ],
          "reviewEvidence": "操作具有較好重現性：重複值接近；不需校正器材：器材仍需檢查；三次終點相近表示每次結果都絕對沒有誤差：仍可能共同偏差；酸鹼種類相同：不能由此判物種。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "品質評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_120_09",
          "stem": "指示劑選擇最重要的依據是？",
          "options": [
            "變色範圍落在終點快速pH區",
            "顏色是自己最喜歡的",
            "價格最高",
            "滴數越多越好"
          ],
          "answerIndex": 0,
          "rationales": [
            "可減少終點誤差。",
            "主觀喜好無關。",
            "價格不保證適用。",
            "過量會干擾。"
          ],
          "reviewEvidence": "變色範圍落在終點快速pH區：可減少終點誤差；顏色是自己最喜歡的：主觀喜好無關；價格最高：價格不保證適用；滴數越多越好：過量會干擾。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "工具選擇"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_120_10",
          "stem": "滴定時眼睛應如何讀液面？",
          "options": [
            "由上方斜看",
            "閉眼估計",
            "與液面同高並依器材規則讀取",
            "只讀標籤容量"
          ],
          "answerIndex": 2,
          "rationales": [
            "會產生視差。",
            "無法量測。",
            "降低視差。",
            "標稱容量不是實際用量。"
          ],
          "reviewEvidence": "與液面同高並依器材規則讀取：降低視差；由上方斜看：會產生視差；閉眼估計：無法量測；只讀標籤容量：標稱容量不是實際用量。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "器材讀值"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_120_11",
          "stem": "過滴後能否倒回一點滴定液來修正同次結果？",
          "options": [
            "不能，因液體不能流動",
            "能，只要不記錄",
            "不能，混合反應已發生，應重取樣品",
            "能，顏色會忘記"
          ],
          "answerIndex": 2,
          "rationales": [
            "液體可流動但方法錯。",
            "違反誠信。",
            "反應與總量無法逆向取回。",
            "無此現象。"
          ],
          "reviewEvidence": "不能，混合反應已發生，應重取樣品：反應與總量無法逆向取回；不能，因液體不能流動：液體可流動但方法錯；能，只要不記錄：違反誠信；能，顏色會忘記：無此現象。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤處理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_120_12",
          "stem": "指示劑本身顏色很深且加量不一，主要影響？",
          "options": [
            "化學元素種類",
            "終點色判斷與各次可比性",
            "滴定管刻度間距",
            "指示劑加量不一會使酸鹼質量守恆失效"
          ],
          "answerIndex": 1,
          "rationales": [
            "元素未變。",
            "試劑量成為干擾。",
            "刻度不受影響。",
            "守恆仍成立。"
          ],
          "reviewEvidence": "終點色判斷與各次可比性：試劑量成為干擾；化學元素種類：元素未變；滴定管刻度間距：刻度不受影響；指示劑加量不一會使酸鹼質量守恆失效：守恆仍成立。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "控制變因"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_120_01",
          "stimulusId": "PHYCHM_R4_STIM_120",
          "stem": "精測1使用鹼液多少？",
          "options": [
            "18.25 mL",
            "19.45 mL",
            "20.65 mL",
            "1.20 mL"
          ],
          "answerIndex": 0,
          "rationales": [
            "19.45－1.20＝18.25。",
            "只讀終值。",
            "錯用相加。",
            "只讀初值。"
          ],
          "reviewEvidence": "18.25 mL：19.45－1.20＝18.25；19.45 mL：只讀終值；20.65 mL：錯用相加；1.20 mL：只讀初值。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "表格計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_120_02",
          "stimulusId": "PHYCHM_R4_STIM_120",
          "stem": "兩次精測所用鹼液體積相差多少？",
          "options": [
            "0.05 mL",
            "18.30 mL",
            "18.25 mL",
            "36.55 mL"
          ],
          "answerIndex": 0,
          "rationales": [
            "精測1用量為19.45－1.20＝18.25 mL，精測2為20.35－2.05＝18.30 mL，兩者相差0.05 mL。",
            "這是精測2的用量，不是兩次差值。",
            "這是精測1的用量，不是兩次差值。",
            "把兩次用量相加，未回答相差量。"
          ],
          "reviewEvidence": "0.05 mL：(20.35－2.05)－(19.45－1.20)＝18.30－18.25＝0.05 mL；18.30 mL：這是精測2的用量，不是兩次差值；18.25 mL：這是精測1的用量，不是兩次差值；36.55 mL：把兩次用量相加，未回答相差量。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "表格計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_120_03",
          "stimulusId": "PHYCHM_R4_STIM_120",
          "stem": "哪個結果最適合當正式終點體積依據？",
          "options": [
            "粗測18.60 mL單獨使用",
            "三次終讀數直接平均",
            "兩次精測的相近用量",
            "只取最大的20.35 mL"
          ],
          "answerIndex": 2,
          "rationales": [
            "粗測顏色過深表示過滴。",
            "初讀數不同，終值不可直接平均。",
            "精測色淡持續且重現。",
            "終值不是用量。"
          ],
          "reviewEvidence": "兩次精測的相近用量：精測色淡持續且重現；粗測18.60 mL單獨使用：粗測顏色過深表示過滴；三次終讀數直接平均：初讀數不同，終值不可直接平均；只取最大的20.35 mL：終值不是用量。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "結果選擇"
          ]
        }
      ]
    }
  ]
};
