export const PHYSICS_CHEMISTRY_AUTHORED_U16 = {
  "unitId": "PHYCHM_R4_U16",
  "title": "反應速率與平衡",
  "authorityRefs": [
    "AUTH-NATURAL-LC-JE-4-1",
    "AUTH-NATURAL-LC-JE-4-2",
    "AUTH-NATURAL-LC-JE-4-3",
    "AUTH-NATURAL-LP-PA-4-2",
    "AUTH-NATURAL-LP-PE-4-1",
    "AUTH-NATURAL-LP-TM-4-1"
  ],
  "provenance": {
    "curriculum": "臺灣十二年國教自然科學第四學習階段",
    "calibration": "國中教育會考自然科反應速率、控制變因與動態平衡層次",
    "authorship": "original-static-r4"
  },
  "skills": [
    {
      "id": "PHYCHM_R4_S121",
      "title": "由反應物消耗或生成物形成判斷速率",
      "authorityRefs": [
        "AUTH-NATURAL-LC-JE-4-1",
        "AUTH-NATURAL-LC-JE-4-2",
        "AUTH-NATURAL-LC-JE-4-3",
        "AUTH-NATURAL-LP-PA-4-2",
        "AUTH-NATURAL-LP-PE-4-1",
        "AUTH-NATURAL-LP-TM-4-1"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科反應速率、控制變因與動態平衡層次",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_121",
        "objective": "能由單位時間內反應物減少量或生成物增加量比較反應速率，並從圖表區分瞬間快慢與總生成量。",
        "sections": [
          {
            "title": "速率是變化量除以時間",
            "body": "化學反應速率可用一段時間內反應物消耗多少，或生成物形成多少來描述。比較時必須統一物理量與時間，例如每分鐘產生的氣體體積；只看最後總量，不能知道中途哪段最快。"
          },
          {
            "title": "曲線斜率代表快慢",
            "body": "生成物—時間圖越陡，單位時間增加量越大，反應越快；曲線逐漸變平表示速率下降。水平平台只表示量測期間生成量不再明顯增加，可能是限制反應物耗盡，不表示生成物消失。"
          },
          {
            "title": "同一反應可有不同指標",
            "body": "可量質量減少、氣體體積增加、顏色變淡或特定濃度改變，但指標必須確實隨反應變化。若開放容器的質量因氣體逸出而下降，要說清楚系統邊界，不能把秤重下降誤稱物質不守恆。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_121_EX_01",
            "prompt": "0～2分鐘產氣40 mL，2～6分鐘再產40 mL，哪段較快？",
            "steps": [
              "第一段40÷2",
              "第二段40÷4",
              "比較每分鐘產量"
            ],
            "answer": "0～2分鐘較快。",
            "why": "前段平均20 mL/min，後段平均10 mL/min；雖兩段都增加40 mL，所用時間不同，速率不相同。"
          },
          {
            "id": "PHYCHM_R4_L_121_EX_02",
            "prompt": "反應物由12 g在3分鐘降到6 g，平均消耗速率為何？",
            "steps": [
              "消耗量12－6＝6 g",
              "時間3分鐘",
              "6÷3"
            ],
            "answer": "2 g/min。",
            "why": "速率用反應物減少量除以經過時間，得到每分鐘平均消耗2 g；負方向可用「消耗」文字表達。"
          },
          {
            "id": "PHYCHM_R4_L_121_EX_03",
            "prompt": "產物曲線在8分鐘後成水平，最合理解釋是？",
            "steps": [
              "水平表示產量不再增加",
              "檢查限制反應物",
              "區分速率與產物存在"
            ],
            "answer": "反應已極慢或停止，產物總量維持。",
            "why": "平台的斜率接近零，表示單位時間新增產物接近零；既有產物仍保留在系統中。"
          }
        ],
        "misconceptions": [
          {
            "belief": "最後產物最多的一組在每一時刻都反應最快。",
            "whyWrong": "總量與曲線斜率是不同資訊。",
            "correction": "比較同一時間區間的變化量。"
          },
          {
            "belief": "兩段都產生40 mL，所以速率相同。",
            "whyWrong": "若耗時不同，單位時間產量不同。",
            "correction": "將變化量除以各段時間。"
          },
          {
            "belief": "曲線水平表示產物已消失。",
            "whyWrong": "水平代表產物量保持不變。",
            "correction": "以縱軸讀總量、以斜率讀速率。"
          },
          {
            "belief": "開放容器變輕表示質量守恆失效。",
            "whyWrong": "氣體可能離開秤量系統。",
            "correction": "把逸出氣體納入完整系統。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_121",
        "title": "反應產氣紀錄",
        "body": "同一反應每隔1分鐘記錄累積氣體體積。",
        "dataTable": {
          "columns": [
            "時間",
            "累積氣體"
          ],
          "rows": [
            [
              "0 min",
              "0 mL"
            ],
            [
              "1 min",
              "30 mL"
            ],
            [
              "2 min",
              "52 mL"
            ],
            [
              "3 min",
              "66 mL"
            ],
            [
              "4 min",
              "72 mL"
            ],
            [
              "5 min",
              "74 mL"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_121_01",
          "stem": "2分鐘生成50 mL氣體，平均速率為？",
          "options": [
            "0.04 min/mL",
            "25 mL/min",
            "100 mL/min",
            "48 mL/min"
          ],
          "answerIndex": 1,
          "rationales": [
            "單位倒置。",
            "50÷2＝25。",
            "錯用相乘。",
            "錯用相減。"
          ],
          "reviewEvidence": "25 mL/min：50÷2＝25；0.04 min/mL：單位倒置；100 mL/min：錯用相乘；48 mL/min：錯用相減。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "速率計算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_121_02",
          "stem": "反應物5分鐘由20 g降到10 g，平均消耗速率為？",
          "options": [
            "50 g/min",
            "10 g/min",
            "6 g/min",
            "2 g/min"
          ],
          "answerIndex": 3,
          "rationales": [
            "錯用相乘。",
            "只算消耗量。",
            "錯加數值。",
            "(20－10)÷5＝2。"
          ],
          "reviewEvidence": "2 g/min：(20－10)÷5＝2；50 g/min：錯用相乘；10 g/min：只算消耗量；6 g/min：錯加數值。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "速率計算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_121_03",
          "stem": "生成物量—時間圖中，哪一段反應最快？",
          "options": [
            "生成物累積量最高的時刻",
            "曲線呈水平的區段",
            "曲線斜率最大的區段",
            "實驗時間最晚的時刻"
          ],
          "answerIndex": 2,
          "rationales": [
            "累積量高只表示已生成較多，不能代表當下速率最大。",
            "水平區段的生成物量不再增加，速率接近零。",
            "斜率最大表示單位時間內生成物增加量最大。",
            "時間先後本身不能決定曲線斜率。"
          ],
          "reviewEvidence": "曲線斜率最大的區段：斜率最大表示單位時間內生成物增加量最大；生成物累積量最高的時刻：累積量高只表示已生成較多，不能代表當下速率最大；曲線呈水平的區段：水平區段的生成物量不再增加，速率接近零；實驗時間最晚的時刻：時間先後本身不能決定曲線斜率。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "圖形判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_121_04",
          "stem": "產物曲線達平台後，最合理的是？",
          "options": [
            "累積產物量不再明顯增加",
            "反應物全部增加",
            "速率達最大",
            "產物量變成零"
          ],
          "answerIndex": 0,
          "rationales": [
            "平台為固定縱值。",
            "不由平台推出。",
            "斜率反而小。",
            "既有產物仍在。"
          ],
          "reviewEvidence": "累積產物量不再明顯增加：平台為固定縱值；反應物全部增加：不由平台推出；速率達最大：斜率反而小；產物量變成零：既有產物仍在。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "平台解讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_121_05",
          "stem": "A組10秒產20 mL，B組20秒產30 mL，何者平均較快？",
          "options": [
            "B組",
            "相同",
            "A組",
            "無法算"
          ],
          "answerIndex": 2,
          "rationales": [
            "B為1.5 mL/s。",
            "速率不同。",
            "A為2 mL/s。",
            "資料足夠。"
          ],
          "reviewEvidence": "A組：A為2 mL/s；B組：B為1.5 mL/s；相同：速率不同；無法算：資料足夠。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "跨組比較"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_121_06",
          "stem": "只知道兩組最後都產生80 mL，能否比較誰反應快？",
          "options": [
            "不能，因體積不能量",
            "不能，還需要達到該量所需時間",
            "能，容器大者較快",
            "能，兩組必同速"
          ],
          "answerIndex": 1,
          "rationales": [
            "氣體體積可量。",
            "速率需要時間。",
            "容器大小非充分資訊。",
            "同總量可有不同歷程。"
          ],
          "reviewEvidence": "不能，還需要達到該量所需時間：速率需要時間；不能，因體積不能量：氣體體積可量；能，容器大者較快：容器大小非充分資訊；能，兩組必同速：同總量可有不同歷程。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資訊充分性"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_121_07",
          "stem": "0～1分鐘產30 mL，1～2分鐘再產15 mL，速率如何？",
          "options": [
            "完全相同",
            "反應倒轉",
            "第二分鐘較快",
            "第二分鐘較慢"
          ],
          "answerIndex": 3,
          "rationales": [
            "30與15不同。",
            "減速不等於逆反應。",
            "增量下降。",
            "同為1分鐘但增量較小。"
          ],
          "reviewEvidence": "第二分鐘較慢：同為1分鐘但增量較小；完全相同：30與15不同；反應倒轉：減速不等於逆反應；第二分鐘較快：增量下降。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "分段比較"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_121_08",
          "stem": "以開放容器質量減少追蹤產氣反應時，質量下降代表？",
          "options": [
            "天平會在反應時產生負質量，與逸出氣體無關",
            "氣體離開秤量範圍",
            "原子被消滅",
            "反應必吸熱"
          ],
          "answerIndex": 1,
          "rationales": [
            "無此現象。",
            "逸出氣體未被秤入。",
            "完整系統仍守恆。",
            "與能量方向無必然關係。"
          ],
          "reviewEvidence": "氣體離開秤量範圍：逸出氣體未被秤入；天平會在反應時產生負質量，與逸出氣體無關：無此現象；原子被消滅：完整系統仍守恆；反應必吸熱：與能量方向無必然關係。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "系統邊界"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_121_09",
          "stem": "哪個速率單位合理？",
          "options": [
            "g/min",
            "沒有時間的g",
            "min＋mL",
            "g×min"
          ],
          "answerIndex": 0,
          "rationales": [
            "變化量除以時間。",
            "只表示質量。",
            "不同量不能相加。",
            "乘積不表示速率。"
          ],
          "reviewEvidence": "g/min：變化量除以時間；沒有時間的g：只表示質量；min＋mL：不同量不能相加；g×min：乘積不表示速率。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "單位辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_121_10",
          "stem": "反應前期常比後期快，合理原因之一是？",
          "options": [
            "時間會消滅化學定律",
            "反應物逐漸消耗，有效碰撞機會降低",
            "後期溫度一定為零",
            "產物越多必讓反應物增加"
          ],
          "answerIndex": 1,
          "rationales": [
            "定律不隨時間消失。",
            "可反應粒子減少。",
            "無此條件。",
            "不必然。"
          ],
          "reviewEvidence": "反應物逐漸消耗，有效碰撞機會降低：可反應粒子減少；時間會消滅化學定律：定律不隨時間消失；後期溫度一定為零：無此條件；產物越多必讓反應物增加：不必然。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "微觀解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_121_11",
          "stem": "平均速率與某一瞬間速率的差別是？",
          "options": [
            "兩者永遠相同",
            "平均速率不需時間",
            "瞬間速率只看最後總量",
            "平均速率用一段時間總變化，瞬間速率看某時刻斜率"
          ],
          "answerIndex": 3,
          "rationales": [
            "速率可隨時間變。",
            "仍需時間。",
            "最後量非瞬時。",
            "正確區分區間與切線概念。"
          ],
          "reviewEvidence": "平均速率用一段時間總變化，瞬間速率看某時刻斜率：正確區分區間與切線概念；兩者永遠相同：速率可隨時間變；平均速率不需時間：仍需時間；瞬間速率只看最後總量：最後量非瞬時。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "概念比較"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_121_12",
          "stem": "同一資料改用反應物剩餘量作圖，反應最快處通常？",
          "options": [
            "縱軸為零後",
            "剩餘量最大必等於平台",
            "曲線向下最陡處",
            "完全水平處"
          ],
          "answerIndex": 2,
          "rationales": [
            "反應物耗盡後速率近零。",
            "最大量只是起點。",
            "單位時間消耗量最大。",
            "水平表示不再消耗。"
          ],
          "reviewEvidence": "曲線向下最陡處：單位時間消耗量最大；縱軸為零後：反應物耗盡後速率近零；剩餘量最大必等於平台：最大量只是起點；完全水平處：水平表示不再消耗。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "圖形轉換"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_121_01",
          "stimulusId": "PHYCHM_R4_STIM_121",
          "stem": "哪一分鐘產氣最多？",
          "options": [
            "第2分鐘",
            "第3分鐘",
            "第1分鐘",
            "第5分鐘"
          ],
          "answerIndex": 2,
          "rationales": [
            "增22 mL。",
            "增14 mL。",
            "0到30，增30 mL。",
            "增2 mL。"
          ],
          "reviewEvidence": "第1分鐘：0到30，增30 mL；第2分鐘：增22 mL；第3分鐘：增14 mL；第5分鐘：增2 mL。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "差分計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_121_02",
          "stimulusId": "PHYCHM_R4_STIM_121",
          "stem": "3～4分鐘平均產氣速率為？",
          "options": [
            "6 mL/min",
            "18 mL/min",
            "72 mL/min",
            "138 mL/min"
          ],
          "answerIndex": 0,
          "rationales": [
            "72－66＝6。",
            "錯用差除錯。",
            "只讀累積值。",
            "錯用相加。"
          ],
          "reviewEvidence": "6 mL/min：72－66＝6；18 mL/min：錯用差除錯；72 mL/min：只讀累積值；138 mL/min：錯用相加。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "區間速率"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_121_03",
          "stimulusId": "PHYCHM_R4_STIM_121",
          "stem": "資料顯示速率隨時間如何？",
          "options": [
            "4分鐘後產物消失",
            "逐漸加快",
            "保持30 mL/min",
            "逐漸減慢"
          ],
          "answerIndex": 3,
          "rationales": [
            "累積量仍增加至74。",
            "增量方向相反。",
            "只有首段30。",
            "每分鐘增量30、22、14、6、2。"
          ],
          "reviewEvidence": "逐漸減慢：每分鐘增量30、22、14、6、2；4分鐘後產物消失：累積量仍增加至74；逐漸加快：增量方向相反；保持30 mL/min：只有首段30。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "趨勢整合"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S122",
      "title": "比較物質本性對反應速率的影響",
      "authorityRefs": [
        "AUTH-NATURAL-LC-JE-4-1",
        "AUTH-NATURAL-LC-JE-4-2",
        "AUTH-NATURAL-LC-JE-4-3",
        "AUTH-NATURAL-LP-PA-4-2",
        "AUTH-NATURAL-LP-PE-4-1",
        "AUTH-NATURAL-LP-TM-4-1"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科反應速率、控制變因與動態平衡層次",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_122",
        "objective": "能在溫度、濃度、表面積等條件相同時，以實驗證據比較不同反應物本性造成的速率差。",
        "sections": [
          {
            "title": "本性是反應物種類差異",
            "body": "不同物質的粒子結構與反應傾向不同，即使外在條件相同，速率也可能差很大。例如鎂與酸常比銅與同一酸更容易反應。要把差異歸因於本性，必須控制金屬質量、表面積、酸濃度、體積與溫度。"
          },
          {
            "title": "不反應也是有條件的結果",
            "body": "某物質在觀察時間內無明顯變化，只能說在該條件與靈敏度下反應不明顯；不能外推它永遠不反應。延長時間、改變反應物或提高檢測靈敏度可能得到不同結果。"
          },
          {
            "title": "現象需量化",
            "body": "「比較劇烈」可轉成達到固定產氣量的時間、固定時間的質量損失或初始斜率。亮度、氣泡大小會受觀察角度影響，若沒有控制與量化，難以公平比較物質本性。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_122_EX_01",
            "prompt": "同質量同表面積的鎂、鋅各加入同酸，鎂30秒產氣40 mL，鋅90秒才達40 mL，何者較快？",
            "steps": [
              "產氣量固定40 mL",
              "比較所需時間",
              "時間較短者速率較大"
            ],
            "answer": "鎂較快。",
            "why": "外在條件受控且達到相同產氣量時，鎂只需鋅的三分之一時間，支持兩金屬本性造成速率差。"
          },
          {
            "id": "PHYCHM_R4_L_122_EX_02",
            "prompt": "鎂粉與銅片加入同酸，鎂反應快，能只歸因金屬本性嗎？",
            "steps": [
              "金屬種類不同",
              "形狀表面積也不同",
              "辨認多重變因"
            ],
            "answer": "不能。",
            "why": "粉末比片狀接觸面積大，觀察差異同時混入表面積效應；應把兩者做成相近面積與質量再比較。"
          },
          {
            "id": "PHYCHM_R4_L_122_EX_03",
            "prompt": "銅在稀鹽酸中10分鐘無明顯氣泡，可說銅永遠不反應嗎？",
            "steps": [
              "結論限於稀鹽酸",
              "觀察時間為10分鐘",
              "避免無限外推"
            ],
            "answer": "不能，只能說此條件下反應不明顯。",
            "why": "改用其他反應物或條件時銅仍可能發生化學反應；實驗的陰性結果有明確適用範圍。"
          }
        ],
        "misconceptions": [
          {
            "belief": "不同物質反應快慢只由質量決定。",
            "whyWrong": "粒子本性可使等質量物質有不同反應傾向。",
            "correction": "控制外在條件後比較物質種類。"
          },
          {
            "belief": "粉末較快證明粉末是另一種更活潑物質。",
            "whyWrong": "同物質粉末只是表面積較大。",
            "correction": "把本性與物理形狀分成不同變因。"
          },
          {
            "belief": "看不到氣泡就代表永遠不會反應。",
            "whyWrong": "反應可能太慢、無氣體或低於檢測限。",
            "correction": "將結論限制在測量指標與條件。"
          },
          {
            "belief": "氣泡較大的一杯必定總速率較快。",
            "whyWrong": "氣泡大小不等於單位時間氣體總體積。",
            "correction": "量測累積體積或固定時間增量。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_122",
        "title": "三種金屬與同一酸",
        "body": "三片金屬質量、浸入面積相同；酸的濃度、體積與溫度相同。記錄達到30 mL氣體所需時間。",
        "dataTable": {
          "columns": [
            "金屬",
            "時間"
          ],
          "rows": [
            [
              "鎂",
              "18 s"
            ],
            [
              "鋅",
              "55 s"
            ],
            [
              "銅",
              "300 s內未達30 mL"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_122_01",
          "stem": "比較金屬本性時應控制？",
          "options": [
            "質量、表面積、酸與溫度",
            "只控制標籤",
            "反應結果相同",
            "金屬種類相同"
          ],
          "answerIndex": 0,
          "rationales": [
            "排除外在速率因素。",
            "標籤不足。",
            "結果是應變項。",
            "金屬種類是自變項。"
          ],
          "reviewEvidence": "質量、表面積、酸與溫度：排除外在速率因素；只控制標籤：標籤不足；反應結果相同：結果是應變項；金屬種類相同：金屬種類是自變項。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "控制變因"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_122_02",
          "stem": "同條件下A達40 mL氣體需20秒，B需80秒，何者較快？",
          "options": [
            "B",
            "A",
            "相同",
            "只看時間無法比較固定產量"
          ],
          "answerIndex": 1,
          "rationales": [
            "B較慢。",
            "相同產量用時較短。",
            "時間差四倍。",
            "固定產量正可比較。"
          ],
          "reviewEvidence": "A：相同產量用時較短；B：B較慢；相同：時間差四倍；只看時間無法比較固定產量：固定產量正可比較。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "達標時間"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_122_03",
          "stem": "鐵粉比鐵塊反應快，差異主要不是？",
          "options": [
            "粒子暴露程度",
            "表面積",
            "物質本性",
            "接觸反應物機會"
          ],
          "answerIndex": 2,
          "rationales": [
            "暴露粒子增多。",
            "粉末表面積大。",
            "兩者都是鐵。",
            "接觸機會增加。"
          ],
          "reviewEvidence": "物質本性：兩者都是鐵；粒子暴露程度：暴露粒子增多；表面積：粉末表面積大；接觸反應物機會：接觸機會增加。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "因素區分"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_122_04",
          "stem": "某金屬在一種酸中不明顯反應，可直接推論？",
          "options": [
            "此金屬永遠不反應",
            "只能限於該條件下反應不明顯",
            "所有酸都無效",
            "此金屬不是物質"
          ],
          "answerIndex": 1,
          "rationales": [
            "過度外推。",
            "保留實驗界限。",
            "不同酸性質不同。",
            "金屬仍是物質。"
          ],
          "reviewEvidence": "只能限於該條件下反應不明顯：保留實驗界限；此金屬永遠不反應：過度外推；所有酸都無效：不同酸性質不同；此金屬不是物質：金屬仍是物質。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "結論界限"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_122_05",
          "stem": "鎂粉與銅塊反應差很大，為何設計不公平？",
          "options": [
            "酸是液體",
            "種類與表面積同時改變",
            "兩者都有質量",
            "兩者都是金屬"
          ],
          "answerIndex": 1,
          "rationales": [
            "液態酸是正常條件。",
            "無法分辨差異來源。",
            "可量質量。",
            "共同點不是問題。"
          ],
          "reviewEvidence": "種類與表面積同時改變：無法分辨差異來源；酸是液體：液態酸是正常條件；兩者都有質量：可量質量；兩者都是金屬：共同點不是問題。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "設計批判"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_122_06",
          "stem": "要量化反應劇烈程度，哪項較客觀？",
          "options": [
            "依金屬價格",
            "看誰的泡泡漂亮",
            "聽一次聲音大小",
            "每10秒產生的氣體體積"
          ],
          "answerIndex": 3,
          "rationales": [
            "價格非速率。",
            "主觀。",
            "單一聲音受干擾。",
            "有明確量與時間。"
          ],
          "reviewEvidence": "每10秒產生的氣體體積：有明確量與時間；依金屬價格：價格非速率；看誰的泡泡漂亮：主觀；聽一次聲音大小：單一聲音受干擾。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "指標選擇"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_122_07",
          "stem": "同酸中鎂比鋅快，可否說鎂在所有反應都較快？",
          "options": [
            "不能，結論限於題設反應與條件",
            "不能，因速率不存在",
            "可以，時間永遠相同",
            "可以，單一反應中的快慢排序適用所有物質與條件"
          ],
          "answerIndex": 0,
          "rationales": [
            "不同反應機制可能改變。",
            "速率可量。",
            "資料不支持。",
            "過度外推。"
          ],
          "reviewEvidence": "不能，結論限於題設反應與條件：不同反應機制可能改變；不能，因速率不存在：速率可量；可以，時間永遠相同：資料不支持；可以，單一反應中的快慢排序適用所有物質與條件：過度外推。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "外推限制"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_122_08",
          "stem": "比較兩種酸與同一金屬反應，何者是自變項？",
          "options": [
            "溫度",
            "金屬質量",
            "酸的種類",
            "金屬表面積"
          ],
          "answerIndex": 2,
          "rationales": [
            "應控制。",
            "應控制。",
            "刻意改變反應物本性。",
            "應控制。"
          ],
          "reviewEvidence": "酸的種類：刻意改變反應物本性；溫度：應控制；金屬質量：應控制；金屬表面積：應控制。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "變因辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_122_09",
          "stem": "若A反應不產氣，是否能用氣體體積與B公平比較速率？",
          "options": [
            "不能，因所有反應都產氣",
            "能，A一律算零反應",
            "能，不產氣就表示沒有發生任何化學變化",
            "不能，應選兩反應都適用的指標"
          ],
          "answerIndex": 3,
          "rationales": [
            "許多反應不產氣。",
            "A可能有非產氣反應。",
            "可能生成固體或變色。",
            "指標需對兩者有效。"
          ],
          "reviewEvidence": "不能，應選兩反應都適用的指標：指標需對兩者有效；不能，因所有反應都產氣：許多反應不產氣；能，A一律算零反應：A可能有非產氣反應；能，不產氣就表示沒有發生任何化學變化：可能生成固體或變色。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "方法適配"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_122_10",
          "stem": "物質本性影響速率的微觀理由是？",
          "options": [
            "所有粒子完全相同",
            "顏色創造能量",
            "名稱字數決定碰撞",
            "不同粒子結構使有效碰撞難易不同"
          ],
          "answerIndex": 3,
          "rationales": [
            "物質粒子不同。",
            "顏色非能量來源。",
            "文字無關。",
            "反應傾向與鍵結不同。"
          ],
          "reviewEvidence": "不同粒子結構使有效碰撞難易不同：反應傾向與鍵結不同；所有粒子完全相同：物質粒子不同；顏色創造能量：顏色非能量來源；名稱字數決定碰撞：文字無關。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "微觀解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_122_11",
          "stem": "兩組達相同產物量時間相同，能否證明物質本性完全相同？",
          "options": [
            "不能，只能說該條件下平均速率相近",
            "能，化學式必相同",
            "不能，因時間不能量",
            "能，速率唯一決定物質"
          ],
          "answerIndex": 0,
          "rationales": [
            "不同因素可產生相同速率。",
            "無此推論。",
            "時間可量。",
            "速率非身分指紋。"
          ],
          "reviewEvidence": "不能，只能說該條件下平均速率相近：不同因素可產生相同速率；能，化學式必相同：無此推論；不能，因時間不能量：時間可量；能，速率唯一決定物質：速率非身分指紋。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "逆向推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_122_12",
          "stem": "同條件下木材與鐵對氧的反應表現不同，最合理說明？",
          "options": [
            "氧在兩組不是同物質",
            "所有物質與氧反應的條件及速率都相同",
            "只有質量有作用",
            "物質本性影響反應條件與速率"
          ],
          "answerIndex": 3,
          "rationales": [
            "氧仍是O₂。",
            "實際差異明顯。",
            "本性也重要。",
            "組成與反應機制不同。"
          ],
          "reviewEvidence": "物質本性影響反應條件與速率：組成與反應機制不同；氧在兩組不是同物質：氧仍是O₂；所有物質與氧反應的條件及速率都相同：實際差異明顯；只有質量有作用：本性也重要。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "概念遷移"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_122_01",
          "stimulusId": "PHYCHM_R4_STIM_122",
          "stem": "哪種金屬最快達30 mL？",
          "options": [
            "銅",
            "三者相同",
            "鎂",
            "鋅"
          ],
          "answerIndex": 2,
          "rationales": [
            "300秒仍未達。",
            "時間不同。",
            "只需18秒。",
            "需55秒。"
          ],
          "reviewEvidence": "鎂：只需18秒；銅：300秒仍未達；三者相同：時間不同；鋅：需55秒。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "表格比較"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_122_02",
          "stimulusId": "PHYCHM_R4_STIM_122",
          "stem": "資料可歸因於金屬本性的關鍵是？",
          "options": [
            "質量、面積、酸與溫度都相同",
            "三金屬名稱不同",
            "銅沒有數值",
            "時間用秒"
          ],
          "answerIndex": 0,
          "rationales": [
            "其他速率因素受控。",
            "只是自變項。",
            "仍有觀察上限資訊。",
            "單位不是控制原因。"
          ],
          "reviewEvidence": "質量、面積、酸與溫度都相同：其他速率因素受控；三金屬名稱不同：只是自變項；銅沒有數值：仍有觀察上限資訊；時間用秒：單位不是控制原因。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "設計判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_122_03",
          "stimulusId": "PHYCHM_R4_STIM_122",
          "stem": "對銅最精確的結論是？",
          "options": [
            "銅永遠不反應",
            "銅完全沒有原子",
            "此條件下300秒內產氣未達30 mL",
            "銅速率恰為零"
          ],
          "answerIndex": 2,
          "rationales": [
            "超出資料。",
            "荒謬。",
            "忠實重述觀測範圍。",
            "可能有低於門檻的反應。"
          ],
          "reviewEvidence": "此條件下300秒內產氣未達30 mL：忠實重述觀測範圍；銅永遠不反應：超出資料；銅完全沒有原子：荒謬；銅速率恰為零：可能有低於門檻的反應。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "精確表達"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S123",
      "title": "分析溫度濃度與接觸面積的影響",
      "authorityRefs": [
        "AUTH-NATURAL-LC-JE-4-1",
        "AUTH-NATURAL-LC-JE-4-2",
        "AUTH-NATURAL-LC-JE-4-3",
        "AUTH-NATURAL-LP-PA-4-2",
        "AUTH-NATURAL-LP-PE-4-1",
        "AUTH-NATURAL-LP-TM-4-1"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科反應速率、控制變因與動態平衡層次",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_123",
        "objective": "能用粒子碰撞觀點解釋溫度、濃度與接觸面積如何影響反應速率，並在指定條件下預測方向。",
        "sections": [
          {
            "title": "溫度提高有效碰撞",
            "body": "升溫使粒子平均運動較快，碰撞更頻繁，具有足夠能量成功反應的比例通常也增加，因此反應常加快。降溫可減慢食物腐敗等反應，但不代表微生物或所有反應永久停止。"
          },
          {
            "title": "濃度改變同體積粒子數",
            "body": "溶液濃度提高時，單位體積含較多反應粒子，彼此碰撞機會增加。比較濃度效應時要固定溫度、體積、反應物種類與固體形狀；濃度高不等於最後一定生成更多產物，還要看限制反應物。"
          },
          {
            "title": "粉碎增加接觸界面",
            "body": "相同質量固體磨成小顆粒，總表面積增加，更多粒子能同時接觸溶液或氣體，反應通常較快。物質本性與總量沒有因此改變；粉塵反應過快可能提高燃燒或爆炸風險。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_123_EX_01",
            "prompt": "兩組相同反應分別在20°C與40°C進行，40°C達50 mL氣體時間較短，原因是？",
            "steps": [
              "唯一差異為溫度",
              "高溫粒子運動較快",
              "有效碰撞頻率增加"
            ],
            "answer": "升溫使反應加快。",
            "why": "在其餘條件相同時，高溫組較快達相同產量，符合粒子碰撞頻率與足夠能量碰撞比例增加。"
          },
          {
            "id": "PHYCHM_R4_L_123_EX_02",
            "prompt": "1.0 mol/L酸與0.5 mol/L酸各加相同鋅片，前者初期較快，如何解釋？",
            "steps": [
              "鋅條件相同",
              "高濃度單位體積粒子較多",
              "碰撞機會增加"
            ],
            "answer": "1.0 mol/L酸的反應粒子濃度較高。",
            "why": "同體積中可碰到鋅表面的相關粒子較多，使初期有效碰撞更頻繁；結論不表示其最後產氣必為兩倍。"
          },
          {
            "id": "PHYCHM_R4_L_123_EX_03",
            "prompt": "等質量大理石粉比大理石塊遇酸快，總產氣量是否必不同？",
            "steps": [
              "粉末表面積較大",
              "速率先變快",
              "總量取決於相同碳酸鈣莫耳數"
            ],
            "answer": "若酸足量，總產氣量可相同，只是粉末較快。",
            "why": "粉碎不增加碳酸鈣總量，只讓更多表面同時反應；在完全反應條件下兩組最後CO₂可相等。"
          }
        ],
        "misconceptions": [
          {
            "belief": "升溫會增加反應物原子數。",
            "whyWrong": "溫度改變運動與能量，不新增原子。",
            "correction": "用碰撞頻率與有效比例解釋加速。"
          },
          {
            "belief": "濃度加倍，最後產物在任何情況必加倍。",
            "whyWrong": "另一反應物可能成為限制。",
            "correction": "把初速與最終產量分開。"
          },
          {
            "belief": "粉末較快是因為粉碎創造更多物質。",
            "whyWrong": "相同質量只是總表面積增加。",
            "correction": "區分接觸面積與總量。"
          },
          {
            "belief": "冷藏使所有化學反應完全停止。",
            "whyWrong": "低溫通常只是降低速率。",
            "correction": "描述為延緩，並保留保存期限。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_123",
        "title": "大理石與酸的四組比較",
        "body": "各組大理石皆2.0 g、酸50 mL；記錄產生40 mL CO₂所需時間。",
        "dataTable": {
          "columns": [
            "組別",
            "形狀",
            "酸濃度",
            "溫度",
            "時間"
          ],
          "rows": [
            [
              "甲",
              "塊狀",
              "1.0 mol/L",
              "25°C",
              "80 s"
            ],
            [
              "乙",
              "粉末",
              "1.0 mol/L",
              "25°C",
              "28 s"
            ],
            [
              "丙",
              "塊狀",
              "2.0 mol/L",
              "25°C",
              "43 s"
            ],
            [
              "丁",
              "塊狀",
              "1.0 mol/L",
              "40°C",
              "46 s"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_123_01",
          "stem": "升高溫度常加快反應，主要因為？",
          "options": [
            "產物先出現",
            "質量守恆失效",
            "有效碰撞更頻繁",
            "原子數憑空增加"
          ],
          "answerIndex": 2,
          "rationales": [
            "不是原因。",
            "守恆仍成立。",
            "粒子運動與能量提高。",
            "原子數不變。"
          ],
          "reviewEvidence": "有效碰撞更頻繁：粒子運動與能量提高；產物先出現：不是原因；質量守恆失效：守恆仍成立；原子數憑空增加：原子數不變。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "微觀解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_123_02",
          "stem": "提高溶液濃度通常加快反應，因為？",
          "options": [
            "單位體積反應粒子較多",
            "提高濃度會使反應溫度固定升到100°C",
            "每個粒子質量消失",
            "容器變小"
          ],
          "answerIndex": 0,
          "rationales": [
            "碰撞機會增加。",
            "濃度不決定溫度。",
            "質量不消失。",
            "容器不必變。"
          ],
          "reviewEvidence": "單位體積反應粒子較多：碰撞機會增加；提高濃度會使反應溫度固定升到100°C：濃度不決定溫度；每個粒子質量消失：質量不消失；容器變小：容器不必變。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "微觀解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_123_03",
          "stem": "相同質量固體磨粉後較快，主要改變？",
          "options": [
            "總質量",
            "化學式",
            "磨粉會改變固體所含的原子種類",
            "總接觸表面積"
          ],
          "answerIndex": 3,
          "rationales": [
            "題設相同質量。",
            "物質未變。",
            "元素未變。",
            "更多界面暴露。"
          ],
          "reviewEvidence": "總接觸表面積：更多界面暴露；總質量：題設相同質量；化學式：物質未變；磨粉會改變固體所含的原子種類：元素未變。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "因素辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_123_04",
          "stem": "比較溫度效應時應控制？",
          "options": [
            "溫度完全相同",
            "濃度、用量、形狀與物質種類",
            "只改容器標籤",
            "結果時間相同"
          ],
          "answerIndex": 1,
          "rationales": [
            "溫度是自變項。",
            "其餘速率因素固定。",
            "標籤無關。",
            "時間是結果。"
          ],
          "reviewEvidence": "濃度、用量、形狀與物質種類：其餘速率因素固定；溫度完全相同：溫度是自變項；只改容器標籤：標籤無關；結果時間相同：時間是結果。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "控制設計"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_123_05",
          "stem": "粉末與塊狀完全反應後產物總量可相同，表示？",
          "options": [
            "塊狀創造更多原子",
            "速率與時間無關",
            "表面積改變速率而不改反應物總量",
            "粉末沒有反應"
          ],
          "answerIndex": 2,
          "rationales": [
            "原子不創造。",
            "速率包含時間。",
            "快慢與終量分離。",
            "粉末通常較快。"
          ],
          "reviewEvidence": "表面積改變速率而不改反應物總量：快慢與終量分離；塊狀創造更多原子：原子不創造；速率與時間無關：速率包含時間；粉末沒有反應：粉末通常較快。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "速率與產量"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_123_06",
          "stem": "冷藏食物的主要化學意義是？",
          "options": [
            "冷藏可使所有變質反應永久完全停止",
            "增加食物原子",
            "把微生物變成鹽",
            "降低部分變質反應速率"
          ],
          "answerIndex": 3,
          "rationales": [
            "仍有保存期限。",
            "原子不增加。",
            "無此轉換。",
            "低溫減慢反應。"
          ],
          "reviewEvidence": "降低部分變質反應速率：低溫減慢反應；冷藏可使所有變質反應永久完全停止：仍有保存期限；增加食物原子：原子不增加；把微生物變成鹽：無此轉換。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "生活應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_123_07",
          "stem": "粉塵比大塊固體更需防火，因為？",
          "options": [
            "大表面積可使燃燒非常迅速",
            "粉塵沒有質量",
            "大塊永遠不燃",
            "粉塵不含原子"
          ],
          "answerIndex": 0,
          "rationales": [
            "與氧接觸界面大。",
            "仍有質量。",
            "大塊也可能燃燒。",
            "由原子構成。"
          ],
          "reviewEvidence": "大表面積可使燃燒非常迅速：與氧接觸界面大；粉塵沒有質量：仍有質量；大塊永遠不燃：大塊也可能燃燒；粉塵不含原子：由原子構成。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "風險分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_123_08",
          "stem": "濃酸組產氣較快，能否說總產氣必較多？",
          "options": [
            "不能，因氣體不可量",
            "能，快就必多",
            "能，濃度就是總體積",
            "不能，還要看限制反應物與是否完全反應"
          ],
          "answerIndex": 3,
          "rationales": [
            "氣體可量。",
            "過度推論。",
            "概念混淆。",
            "初速和終量不同。"
          ],
          "reviewEvidence": "不能，還要看限制反應物與是否完全反應：初速和終量不同；不能，因氣體不可量：氣體可量；能，快就必多：過度推論；能，濃度就是總體積：概念混淆。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "結論界限"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_123_09",
          "stem": "同濃度同溫度下，小顆粒達固定產量較快，支持？",
          "options": [
            "溫度必上升",
            "顆粒變小會使溶液濃度自行增加",
            "接觸面積影響速率",
            "物質本性改變"
          ],
          "answerIndex": 2,
          "rationales": [
            "題設同溫。",
            "溶液濃度固定。",
            "唯一改變形狀。",
            "化學物種相同。"
          ],
          "reviewEvidence": "接觸面積影響速率：唯一改變形狀；溫度必上升：題設同溫；顆粒變小會使溶液濃度自行增加：溶液濃度固定；物質本性改變：化學物種相同。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據歸因"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_123_10",
          "stem": "升溫後粒子運動較快，哪項不一定改變？",
          "options": [
            "碰撞頻率",
            "反應物原子總數",
            "達固定產量時間",
            "平均動能"
          ],
          "answerIndex": 1,
          "rationales": [
            "通常增加。",
            "封閉系統原子數守恆。",
            "通常縮短。",
            "通常增加。"
          ],
          "reviewEvidence": "反應物原子總數：封閉系統原子數守恆；碰撞頻率：通常增加；達固定產量時間：通常縮短；平均動能：通常增加。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "不變量"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_123_11",
          "stem": "A高溫低濃度、B低溫高濃度，哪組較快？",
          "options": [
            "資料不足，兩因素方向相反",
            "A必較快",
            "必完全相同",
            "B必較快"
          ],
          "answerIndex": 0,
          "rationales": [
            "需量化相對影響。",
            "低濃度可能抵消。",
            "無相等依據。",
            "低溫可能抵消。"
          ],
          "reviewEvidence": "資料不足，兩因素方向相反：需量化相對影響；A必較快：低濃度可能抵消；必完全相同：無相等依據；B必較快：低溫可能抵消。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "多因素判斷"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_123_12",
          "stem": "攪拌溶液與固體反應常加快，合理原因是？",
          "options": [
            "使新鮮反應物更常接觸固體表面",
            "增加原子種類",
            "改變化學定律",
            "使質量變零"
          ],
          "answerIndex": 0,
          "rationales": [
            "減少表面附近耗盡層。",
            "元素未變。",
            "定律不變。",
            "質量仍在。"
          ],
          "reviewEvidence": "使新鮮反應物更常接觸固體表面：減少表面附近耗盡層；增加原子種類：元素未變；改變化學定律：定律不變；使質量變零：質量仍在。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "延伸解釋"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_123_01",
          "stimulusId": "PHYCHM_R4_STIM_123",
          "stem": "比較甲乙可研究哪一因素？",
          "options": [
            "物質本性",
            "接觸面積",
            "溫度",
            "濃度"
          ],
          "answerIndex": 1,
          "rationales": [
            "皆大理石。",
            "只有形狀不同。",
            "皆25°C。",
            "皆1.0 mol/L。"
          ],
          "reviewEvidence": "接觸面積：只有形狀不同；物質本性：皆大理石；溫度：皆25°C；濃度：皆1.0 mol/L。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "對照選擇"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_123_02",
          "stimulusId": "PHYCHM_R4_STIM_123",
          "stem": "比較甲丙支持哪一項？",
          "options": [
            "粉末一定較慢",
            "溫度是唯一差異",
            "降低濃度加快",
            "提高酸濃度使達標時間縮短"
          ],
          "answerIndex": 3,
          "rationales": [
            "兩者都塊狀。",
            "皆25°C。",
            "方向相反。",
            "2.0 mol/L只需43秒。"
          ],
          "reviewEvidence": "提高酸濃度使達標時間縮短：2.0 mol/L只需43秒；粉末一定較慢：兩者都塊狀；溫度是唯一差異：皆25°C；降低濃度加快：方向相反。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料歸因"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_123_03",
          "stimulusId": "PHYCHM_R4_STIM_123",
          "stem": "比較甲丁可得？",
          "options": [
            "丁使用粉末",
            "40°C比25°C較快達40 mL",
            "低溫組較快",
            "酸濃度不同"
          ],
          "answerIndex": 1,
          "rationales": [
            "皆塊狀。",
            "46秒少於80秒。",
            "數據相反。",
            "皆1.0 mol/L。"
          ],
          "reviewEvidence": "40°C比25°C較快達40 mL：46秒少於80秒；丁使用粉末：皆塊狀；低溫組較快：數據相反；酸濃度不同：皆1.0 mol/L。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "溫度證據"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S124",
      "title": "說明催化劑改變速率而不被大量消耗",
      "authorityRefs": [
        "AUTH-NATURAL-LC-JE-4-1",
        "AUTH-NATURAL-LC-JE-4-2",
        "AUTH-NATURAL-LC-JE-4-3",
        "AUTH-NATURAL-LP-PA-4-2",
        "AUTH-NATURAL-LP-PE-4-1",
        "AUTH-NATURAL-LP-TM-4-1"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科反應速率、控制變因與動態平衡層次",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_124",
        "objective": "能以較低能量反應途徑說明催化劑加快速率，並由回收量、終產量與對照資料辨識其不被大量消耗的特徵。",
        "sections": [
          {
            "title": "催化劑提供較容易途徑",
            "body": "催化劑能讓反應沿較容易發生的途徑進行，使更多碰撞成為有效碰撞，因此加快正、逆反應達到狀態的速度。催化劑不靠提高反應物濃度，也不會把原本不守恆的反應變守恆。"
          },
          {
            "title": "反應前後可回收",
            "body": "催化劑會參與中間步驟，但在整體反應後重新形成，因此理想上不被大量消耗。實驗回收質量略少可能是黏附、過濾或轉移損失，不能立刻說它是反應物；可重複使用是重要證據之一。"
          },
          {
            "title": "改快慢、不改平衡終量",
            "body": "在反應物量與條件相同時，催化劑通常使產物更快達到相同最終量，不會憑空增加可生成的最大產物。對可逆反應，它同時加快兩方向，因此不改變平衡組成，只縮短達平衡時間。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_124_EX_01",
            "prompt": "加催化劑組2分鐘達80 mL氣體，無催化劑組8分鐘也達80 mL，說明什麼？",
            "steps": [
              "比較達標時間",
              "比較最終體積",
              "分開速率與總量"
            ],
            "answer": "催化劑加快速率，但未改變最終產氣量。",
            "why": "兩組反應物相同且終量皆80 mL，差別只在到達時間；這符合催化功能而非新增反應物。"
          },
          {
            "id": "PHYCHM_R4_L_124_EX_02",
            "prompt": "反應前催化劑1.00 g，洗滌乾燥後回收0.97 g，能否說消耗0.03 g？",
            "steps": [
              "差值可能有操作損失",
              "檢查重複使用活性",
              "避免單次過度結論"
            ],
            "answer": "不能直接判定被反應消耗。",
            "why": "少量粉末可能留在濾紙或器壁；若回收物仍能催化下一次反應，更支持它未被大量消耗。"
          },
          {
            "id": "PHYCHM_R4_L_124_EX_03",
            "prompt": "可逆反應加催化劑後較快達平衡，平衡產物比例是否提高？",
            "steps": [
              "催化劑加快兩方向",
              "平衡條件未改",
              "比較達平衡時間與組成"
            ],
            "answer": "不提高；只較快達到原平衡組成。",
            "why": "正、逆反應都走較容易的途徑，平衡位置沒有偏向任一側，改變的是所需時間。"
          }
        ],
        "misconceptions": [
          {
            "belief": "催化劑完全不參與反應。",
            "whyWrong": "它可參與中間步驟，只在總反應後再生。",
            "correction": "說明不被大量淨消耗，而非完全旁觀。"
          },
          {
            "belief": "催化劑越多，最後產物一定無限增加。",
            "whyWrong": "終量受反應物與平衡限制。",
            "correction": "區分較快達標與最大產量。"
          },
          {
            "belief": "回收少一點就證明催化劑是反應物。",
            "whyWrong": "實驗轉移、過濾可能造成損失。",
            "correction": "做空白回收與重複使用檢驗。"
          },
          {
            "belief": "催化劑會把平衡永久推向生成物。",
            "whyWrong": "它同時加快正逆反應。",
            "correction": "平衡組成由溫度、濃度等條件決定。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_124",
        "title": "催化劑對產氣反應的影響",
        "body": "兩組反應物量、濃度與溫度相同，乙組另加0.50 g催化劑。",
        "dataTable": {
          "columns": [
            "時間",
            "甲無催化劑",
            "乙有催化劑"
          ],
          "rows": [
            [
              "1 min",
              "18 mL",
              "55 mL"
            ],
            [
              "2 min",
              "34 mL",
              "78 mL"
            ],
            [
              "4 min",
              "61 mL",
              "80 mL"
            ],
            [
              "8 min",
              "80 mL",
              "80 mL"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_124_01",
          "stem": "催化劑主要改變？",
          "options": [
            "原子總數",
            "元素種類",
            "質量守恆",
            "反應速率"
          ],
          "answerIndex": 3,
          "rationales": [
            "原子不增加。",
            "元素未變。",
            "守恆本來成立。",
            "提供較容易途徑。"
          ],
          "reviewEvidence": "反應速率：提供較容易途徑；原子總數：原子不增加；元素種類：元素未變；質量守恆：守恆本來成立。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "功能辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_124_02",
          "stem": "理想催化劑反應後？",
          "options": [
            "不被大量淨消耗",
            "一定成氣體",
            "催化劑在反應完成後會全部轉變成產物",
            "質量必為零"
          ],
          "answerIndex": 0,
          "rationales": [
            "總反應後再生。",
            "物態不固定。",
            "不是化學計量反應物。",
            "可回收。"
          ],
          "reviewEvidence": "不被大量淨消耗：總反應後再生；一定成氣體：物態不固定；催化劑在反應完成後會全部轉變成產物：不是化學計量反應物；質量必為零：可回收。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "性質辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_124_03",
          "stem": "加催化劑後最終產物量通常？",
          "options": [
            "必加倍",
            "必變零",
            "在相同反應物下不因催化劑而增加",
            "與反應物無關"
          ],
          "answerIndex": 2,
          "rationales": [
            "無此倍數。",
            "催化不阻止反應。",
            "只改速率。",
            "終量受反應物限制。"
          ],
          "reviewEvidence": "在相同反應物下不因催化劑而增加：只改速率；必加倍：無此倍數；必變零：催化不阻止反應；與反應物無關：終量受反應物限制。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "速率產量區分"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_124_04",
          "stem": "催化劑加快反應的微觀解釋是？",
          "options": [
            "催化劑把時間直接變成物質，所以反應加快",
            "提高所有物質質量",
            "創造更多原子",
            "提供較低能量的反應途徑"
          ],
          "answerIndex": 3,
          "rationales": [
            "時間非物質。",
            "質量不增加。",
            "原子守恆。",
            "有效碰撞比例增加。"
          ],
          "reviewEvidence": "提供較低能量的反應途徑：有效碰撞比例增加；催化劑把時間直接變成物質，所以反應加快：時間非物質；提高所有物質質量：質量不增加；創造更多原子：原子守恆。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "機制解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_124_05",
          "stem": "催化劑回收98%，缺少2%一定是被反應掉嗎？",
          "options": [
            "不一定，可能是操作回收損失",
            "一定違反守恆",
            "一定全部成產物",
            "一定蒸發成電子"
          ],
          "answerIndex": 0,
          "rationales": [
            "需空白與重複證據。",
            "完整系統仍守恆。",
            "單次差值不足。",
            "無此轉換。"
          ],
          "reviewEvidence": "不一定，可能是操作回收損失：需空白與重複證據；一定違反守恆：完整系統仍守恆；一定全部成產物：單次差值不足；一定蒸發成電子：無此轉換。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "誤差分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_124_06",
          "stem": "可逆反應加入催化劑，哪項正確？",
          "options": [
            "只加快生成物方向",
            "只加快逆反應",
            "正逆反應都加快",
            "平衡一定全成產物"
          ],
          "answerIndex": 2,
          "rationales": [
            "不單向。",
            "不單向。",
            "同一途徑門檻雙向降低。",
            "組成不由催化決定。"
          ],
          "reviewEvidence": "正逆反應都加快：同一途徑門檻雙向降低；只加快生成物方向：不單向；只加快逆反應：不單向；平衡一定全成產物：組成不由催化決定。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "平衡機制"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_124_07",
          "stem": "哪項最能證明某粉末是催化劑？",
          "options": [
            "顏色漂亮",
            "加快反應且回收後仍可再次使用",
            "粉末名稱較長",
            "加入後總質量增加"
          ],
          "answerIndex": 1,
          "rationales": [
            "顏色無關。",
            "同時符合速率與不淨耗。",
            "名稱無關。",
            "加入物本來有質量。"
          ],
          "reviewEvidence": "加快反應且回收後仍可再次使用：同時符合速率與不淨耗；顏色漂亮：顏色無關；粉末名稱較長：名稱無關；加入後總質量增加：加入物本來有質量。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據整合"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_124_08",
          "stem": "催化劑會使不可能的質量守恆例外發生嗎？",
          "options": [
            "會，催化劑可造原子",
            "不會，化學反應仍守恆",
            "會，速度快就不守恆",
            "不會，因催化劑沒有質量"
          ],
          "answerIndex": 1,
          "rationales": [
            "不能造原子。",
            "只改途徑。",
            "速率不改定律。",
            "催化劑有質量。"
          ],
          "reviewEvidence": "不會，化學反應仍守恆：只改途徑；會，催化劑可造原子：不能造原子；會，速度快就不守恆：速率不改定律；不會，因催化劑沒有質量：催化劑有質量。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "概念界線"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_124_09",
          "stem": "催化劑組較快到平台，平台高度相同，代表？",
          "options": [
            "催化劑被全部消耗",
            "兩者都沒有反應",
            "速率提高、終量不變",
            "終量提高、速率不變"
          ],
          "answerIndex": 2,
          "rationales": [
            "無此證據。",
            "皆有產物。",
            "到達時間不同、最終值同。",
            "與觀察相反。"
          ],
          "reviewEvidence": "速率提高、終量不變：到達時間不同、最終值同；催化劑被全部消耗：無此證據；兩者都沒有反應：皆有產物；終量提高、速率不變：與觀察相反。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "圖形比較"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_124_10",
          "stem": "酵素作為生物催化劑，超過適宜高溫後反而失效，原因可能是？",
          "options": [
            "溫度不影響蛋白質",
            "結構受高溫破壞",
            "原子全部消失",
            "催化劑必永遠不變"
          ],
          "answerIndex": 1,
          "rationales": [
            "高溫可變性。",
            "蛋白質構形可改變。",
            "原子仍在。",
            "催化劑也可能失活。"
          ],
          "reviewEvidence": "結構受高溫破壞：蛋白質構形可改變；溫度不影響蛋白質：高溫可變性；原子全部消失：原子仍在；催化劑必永遠不變：催化劑也可能失活。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "生物連結"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_124_11",
          "stem": "加入催化劑後反應熱量總變化通常？",
          "options": [
            "必加倍",
            "必變成零",
            "反應起終狀態相同時不因途徑而改變",
            "全部由催化劑提供"
          ],
          "answerIndex": 2,
          "rationales": [
            "加速不加倍總能量。",
            "仍有反應熱。",
            "能量差由起終狀態決定。",
            "催化劑非燃料。"
          ],
          "reviewEvidence": "反應起終狀態相同時不因途徑而改變：能量差由起終狀態決定；必加倍：加速不加倍總能量；必變成零：仍有反應熱；全部由催化劑提供：催化劑非燃料。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "能量途徑"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_124_12",
          "stem": "若加某物質後速率變快，但該物質完全轉成生成物，最合理稱為？",
          "options": [
            "指示劑",
            "溶劑必然",
            "一定催化劑",
            "反應物而非典型催化劑"
          ],
          "answerIndex": 3,
          "rationales": [
            "未顯示顏色功能。",
            "也未必是溶劑。",
            "不符不淨耗特徵。",
            "它被化學計量消耗。"
          ],
          "reviewEvidence": "反應物而非典型催化劑：它被化學計量消耗；指示劑：未顯示顏色功能；溶劑必然：也未必是溶劑；一定催化劑：不符不淨耗特徵。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "角色分類"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_124_01",
          "stimulusId": "PHYCHM_R4_STIM_124",
          "stem": "2分鐘時催化劑組多產多少氣體？",
          "options": [
            "46 mL",
            "44 mL",
            "112 mL",
            "2 mL"
          ],
          "answerIndex": 1,
          "rationales": [
            "差值錯誤。",
            "78－34＝44。",
            "錯用相加。",
            "只看時間。"
          ],
          "reviewEvidence": "44 mL：78－34＝44；46 mL：差值錯誤；112 mL：錯用相加；2 mL：只看時間。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "資料計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_124_02",
          "stimulusId": "PHYCHM_R4_STIM_124",
          "stem": "8分鐘兩組都80 mL支持？",
          "options": [
            "催化劑未改變最終產氣量",
            "催化劑組沒有加快",
            "催化劑被消耗80 mL",
            "無催化劑組較快"
          ],
          "answerIndex": 0,
          "rationales": [
            "平台相同。",
            "早期乙明顯較快。",
            "mL是氣體體積。",
            "甲早期較慢。"
          ],
          "reviewEvidence": "催化劑未改變最終產氣量：平台相同；催化劑組沒有加快：早期乙明顯較快；催化劑被消耗80 mL：mL是氣體體積；無催化劑組較快：甲早期較慢。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "平台判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_124_03",
          "stimulusId": "PHYCHM_R4_STIM_124",
          "stem": "哪段最能顯示催化劑加快速率？",
          "options": [
            "前2分鐘乙78 mL、甲34 mL",
            "8分鐘兩組皆80 mL",
            "兩組反應物量相同",
            "乙加入0.50 g"
          ],
          "answerIndex": 0,
          "rationales": [
            "同時間產量差直接反映速率。",
            "只顯示終量。",
            "是控制條件。",
            "是處理而非結果。"
          ],
          "reviewEvidence": "前2分鐘乙78 mL、甲34 mL：同時間產量差直接反映速率；8分鐘兩組皆80 mL：只顯示終量；兩組反應物量相同：是控制條件；乙加入0.50 g：是處理而非結果。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據選擇"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S125",
      "title": "設計單一變因比較反應速率",
      "authorityRefs": [
        "AUTH-NATURAL-LC-JE-4-1",
        "AUTH-NATURAL-LC-JE-4-2",
        "AUTH-NATURAL-LC-JE-4-3",
        "AUTH-NATURAL-LP-PA-4-2",
        "AUTH-NATURAL-LP-PE-4-1",
        "AUTH-NATURAL-LP-TM-4-1"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科反應速率、控制變因與動態平衡層次",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_125",
        "objective": "能把速率問題轉為自變項、應變項與控制變因，建立對照、重複量測並以公平指標比較。",
        "sections": [
          {
            "title": "一次只改研究因素",
            "body": "研究溫度時，兩組只改溫度，反應物種類、濃度、用量、固體表面積、攪拌與器材都應相同。若同時改溫度和濃度，即使速率不同也無法知道哪個因素造成。"
          },
          {
            "title": "選可量的速率指標",
            "body": "應變項可設為固定時間產氣量、達固定產量時間或質量隨時間變化。兩組須用同一指標與起算規則；「氣泡看起來很多」較主觀，應用量筒、天平或感測器取得數據。"
          },
          {
            "title": "重複與隨機誤差",
            "body": "每個條件至少重複適當次數，保留原始數據並比較平均與離散情形。明顯異常需查氣漏、計時或取樣問題，不能無痕刪除；若裝置漏氣，應先修復再重新測量。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_125_EX_01",
            "prompt": "研究酸濃度對鋅反應速率，兩組應如何設計？",
            "steps": [
              "只改酸濃度",
              "鋅質量表面積、酸體積、溫度相同",
              "量固定時間產氣量"
            ],
            "answer": "設兩個濃度，其餘條件一致並用同一產氣指標。",
            "why": "這樣速率差才能歸因於濃度；若鋅形狀或溫度也不同，便出現混淆變因。"
          },
          {
            "id": "PHYCHM_R4_L_125_EX_02",
            "prompt": "甲用粉末40°C，乙用塊狀20°C，能研究表面積嗎？",
            "steps": [
              "形狀不同",
              "溫度也不同",
              "辨認兩個自變項"
            ],
            "answer": "不能，需把溫度固定。",
            "why": "粉末與高溫都可能加速，結果無法分辨是哪一因素；應只保留粉末與塊狀差異。"
          },
          {
            "id": "PHYCHM_R4_L_125_EX_03",
            "prompt": "三次達50 mL時間為31、30、65秒，如何處理？",
            "steps": [
              "保留三筆",
              "檢查65秒是否漏氣或延遲",
              "修復後增加重複"
            ],
            "answer": "將65秒標為待查異常並追查，不直接刪除。",
            "why": "單一偏離可能是操作失誤也可能是真實變異；只有查明原因與重測，才能決定如何納入結論。"
          }
        ],
        "misconceptions": [
          {
            "belief": "改越多條件，差異越大，結論越清楚。",
            "whyWrong": "多變因使因果來源無法分辨。",
            "correction": "每次實驗只改研究因素。"
          },
          {
            "belief": "每組做一次就能得到可靠速率。",
            "whyWrong": "計時、取樣與裝置有隨機變異。",
            "correction": "重複並呈現原始數據與平均。"
          },
          {
            "belief": "氣泡大的一組一定較快。",
            "whyWrong": "氣泡大小不等於總產氣量。",
            "correction": "量固定時間體積或達標時間。"
          },
          {
            "belief": "異常值可直接刪除，不必留下理由。",
            "whyWrong": "會造成選擇性報告。",
            "correction": "保留、查因並記錄排除準則。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_125",
        "title": "比較酸濃度的實驗方案",
        "body": "學生提出四組設計，目標是研究酸濃度對相同鎂帶反應速率的影響。",
        "dataTable": {
          "columns": [
            "組別",
            "酸濃度",
            "酸體積",
            "鎂帶",
            "溫度"
          ],
          "rows": [
            [
              "甲",
              "0.5 mol/L",
              "50 mL",
              "1.0 g、10 cm²",
              "25°C"
            ],
            [
              "乙",
              "1.0 mol/L",
              "50 mL",
              "1.0 g、10 cm²",
              "25°C"
            ],
            [
              "丙",
              "1.0 mol/L",
              "100 mL",
              "1.0 g、20 cm²",
              "40°C"
            ],
            [
              "丁",
              "0.5 mol/L",
              "50 mL",
              "2.0 g、20 cm²",
              "25°C"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_125_01",
          "stem": "研究溫度對速率時，自變項是？",
          "options": [
            "固體質量",
            "產氣速率",
            "溫度",
            "反應物濃度"
          ],
          "answerIndex": 2,
          "rationales": [
            "應控制。",
            "是應變項。",
            "由實驗者改變。",
            "應控制。"
          ],
          "reviewEvidence": "溫度：由實驗者改變；固體質量：應控制；產氣速率：是應變項；反應物濃度：應控制。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "變因辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_125_02",
          "stem": "研究濃度效應時，適合的應變項是？",
          "options": [
            "酸濃度",
            "以容器標籤內容作為反應速率的應變項",
            "金屬種類",
            "每分鐘產氣體積"
          ],
          "answerIndex": 3,
          "rationales": [
            "是自變項。",
            "容器標籤不是反應結果，不能量化濃度改變造成的速率差異。",
            "應控制。",
            "量化速率結果。"
          ],
          "reviewEvidence": "每分鐘產氣體積：量化速率結果；酸濃度：是自變項；以容器標籤內容作為反應速率的應變項：容器標籤不是反應結果，不能量化濃度改變造成的速率差異；金屬種類：應控制。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "變因辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_125_03",
          "stem": "公平比較表面積時應保持？",
          "options": [
            "塊狀組用不同酸",
            "粉末組同時升溫",
            "固體質量、酸濃度體積與溫度相同",
            "各組計時方式不同"
          ],
          "answerIndex": 2,
          "rationales": [
            "混入物質本性。",
            "混入溫度。",
            "只留下形狀差異。",
            "結果不可比。"
          ],
          "reviewEvidence": "固體質量、酸濃度體積與溫度相同：只留下形狀差異；塊狀組用不同酸：混入物質本性；粉末組同時升溫：混入溫度；各組計時方式不同：結果不可比。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "控制變因"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_125_04",
          "stem": "兩組同時改濃度與溫度，主要問題是？",
          "options": [
            "質量必不守恆",
            "一定沒有反應",
            "無法判定哪個因素造成速率差",
            "無法測溫度"
          ],
          "answerIndex": 2,
          "rationales": [
            "守恆仍成立。",
            "仍可能反應。",
            "存在混淆變因。",
            "可量溫度。"
          ],
          "reviewEvidence": "無法判定哪個因素造成速率差：存在混淆變因；質量必不守恆：守恆仍成立；一定沒有反應：仍可能反應；無法測溫度：可量溫度。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "設計批判"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_125_05",
          "stem": "重複實驗的主要目的？",
          "options": [
            "估計變異並提高結果可信度",
            "刪除所有異常",
            "增加自變項數量",
            "重複實驗是為了讓數據一定符合原先預測"
          ],
          "answerIndex": 0,
          "rationales": [
            "可看重現性。",
            "異常需查因。",
            "條件仍相同。",
            "不能保證預期。"
          ],
          "reviewEvidence": "估計變異並提高結果可信度：可看重現性；刪除所有異常：異常需查因；增加自變項數量：條件仍相同；重複實驗是為了讓數據一定符合原先預測：不能保證預期。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "方法功能"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_125_06",
          "stem": "哪個指標較客觀？",
          "options": [
            "達50 mL氣體所需秒數",
            "顏色比較漂亮",
            "泡泡看起來活潑",
            "聲音似乎很大"
          ],
          "answerIndex": 0,
          "rationales": [
            "有固定門檻與時間。",
            "不代表速率。",
            "主觀。",
            "受環境影響。"
          ],
          "reviewEvidence": "達50 mL氣體所需秒數：有固定門檻與時間；顏色比較漂亮：不代表速率；泡泡看起來活潑：主觀；聲音似乎很大：受環境影響。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "指標選擇"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_125_07",
          "stem": "裝置漏氣會使產氣體積讀值？",
          "options": [
            "必偏高",
            "完全不受影響",
            "變成質量",
            "偏低"
          ],
          "answerIndex": 3,
          "rationales": [
            "漏失不會增加收集。",
            "直接影響。",
            "物理量不互變。",
            "部分氣體未進量筒。"
          ],
          "reviewEvidence": "偏低：部分氣體未進量筒；必偏高：漏失不會增加收集；完全不受影響：直接影響；變成質量：物理量不互變。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "誤差方向"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_125_08",
          "stem": "計時應在何時開始？",
          "options": [
            "各組以相同明確事件為起點",
            "想起來時",
            "各組用不同規則",
            "各組等第一個氣泡破裂後再任意開始計時"
          ],
          "answerIndex": 0,
          "rationales": [
            "確保時間可比。",
            "造成偏差。",
            "破壞一致性。",
            "定義不穩定。"
          ],
          "reviewEvidence": "各組以相同明確事件為起點：確保時間可比；想起來時：造成偏差；各組用不同規則：破壞一致性；各組等第一個氣泡破裂後再任意開始計時：定義不穩定。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "程序標準化"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_125_09",
          "stem": "異常值排除最合理的條件是？",
          "options": [
            "不符合猜想",
            "有事先或可驗證的操作失敗證據",
            "數值不漂亮",
            "是最大值"
          ],
          "answerIndex": 1,
          "rationales": [
            "反證也應保留。",
            "如漏氣或錯讀。",
            "美觀非標準。",
            "極值可是真實。"
          ],
          "reviewEvidence": "有事先或可驗證的操作失敗證據：如漏氣或錯讀；不符合猜想：反證也應保留；數值不漂亮：美觀非標準；是最大值：極值可是真實。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "資料誠信"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_125_10",
          "stem": "達標時間越短表示？",
          "options": [
            "總產量一定越多",
            "在相同產量門檻下平均速率越快",
            "一定加催化劑",
            "反應物質量越大"
          ],
          "answerIndex": 1,
          "rationales": [
            "終量未必。",
            "同變化量用時少。",
            "可能由多因素。",
            "質量受控制。"
          ],
          "reviewEvidence": "在相同產量門檻下平均速率越快：同變化量用時少；總產量一定越多：終量未必；一定加催化劑：可能由多因素；反應物質量越大：質量受控制。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "指標解讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_125_11",
          "stem": "控制組的功能是？",
          "options": [
            "取代重複實驗",
            "增加兩個自變項",
            "提供未施加研究處理的比較基準",
            "保證結果為零"
          ],
          "answerIndex": 2,
          "rationales": [
            "仍需重複。",
            "不應增加變因。",
            "判斷處理造成的差異。",
            "仍可能有反應。"
          ],
          "reviewEvidence": "提供未施加研究處理的比較基準：判斷處理造成的差異；取代重複實驗：仍需重複；增加兩個自變項：不應增加變因；保證結果為零：仍可能有反應。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "對照功能"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_125_12",
          "stem": "若各組酸體積不同但研究濃度，會造成？",
          "options": [
            "速率無法量",
            "總反應量與接觸條件也改變",
            "濃度成為唯一差異",
            "酸不再是液體"
          ],
          "answerIndex": 1,
          "rationales": [
            "仍可量但難歸因。",
            "多一個混淆變因。",
            "體積也不同。",
            "物態未變。"
          ],
          "reviewEvidence": "總反應量與接觸條件也改變：多一個混淆變因；速率無法量：仍可量但難歸因；濃度成為唯一差異：體積也不同；酸不再是液體：物態未變。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "設計修正"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_125_01",
          "stimulusId": "PHYCHM_R4_STIM_125",
          "stem": "哪兩組最適合比較濃度效應？",
          "options": [
            "甲與丁",
            "甲與乙",
            "丙與丁",
            "乙與丙"
          ],
          "answerIndex": 1,
          "rationales": [
            "鎂質量面積不同。",
            "只差酸濃度。",
            "多項皆不同。",
            "體積、面積、溫度也差。"
          ],
          "reviewEvidence": "甲與乙：只差酸濃度；甲與丁：鎂質量面積不同；丙與丁：多項皆不同；乙與丙：體積、面積、溫度也差。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "對照配對"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_125_02",
          "stimulusId": "PHYCHM_R4_STIM_125",
          "stem": "丙組為何不能和乙直接歸因溫度？",
          "options": [
            "溫度可量",
            "兩組濃度相同",
            "兩組都是鎂",
            "酸體積與鎂面積也不同"
          ],
          "answerIndex": 3,
          "rationales": [
            "可量不等於設計公平。",
            "共同點不解決混淆。",
            "共同物質有助但不足。",
            "至少三項差異。"
          ],
          "reviewEvidence": "酸體積與鎂面積也不同：至少三項差異；溫度可量：可量不等於設計公平；兩組濃度相同：共同點不解決混淆；兩組都是鎂：共同物質有助但不足。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "混淆辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_125_03",
          "stimulusId": "PHYCHM_R4_STIM_125",
          "stem": "要讓丁與甲只比較鎂的表面積，丁組應如何修改？",
          "options": [
            "刪除時間量測",
            "換另一金屬",
            "同時改濃度與溫度",
            "改用與甲等質量但表面積不同的鎂，酸量、濃度與溫度均相同"
          ],
          "answerIndex": 3,
          "rationales": [
            "失去速率指標。",
            "改變本性。",
            "增加混淆。",
            "鎂質量及酸的條件相同，只保留表面積為自變項。"
          ],
          "reviewEvidence": "改用與甲等質量但表面積不同的鎂，酸量、濃度與溫度均相同：鎂質量及酸的條件相同，只保留表面積為自變項；刪除時間量測：失去速率指標；換另一金屬：改變本性；同時改濃度與溫度：增加混淆。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "方案修正"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S126",
      "title": "辨識可逆反應與動態平衡概念",
      "authorityRefs": [
        "AUTH-NATURAL-LC-JE-4-1",
        "AUTH-NATURAL-LC-JE-4-2",
        "AUTH-NATURAL-LC-JE-4-3",
        "AUTH-NATURAL-LP-PA-4-2",
        "AUTH-NATURAL-LP-PE-4-1",
        "AUTH-NATURAL-LP-TM-4-1"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科反應速率、控制變因與動態平衡層次",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_126",
        "objective": "能從正逆反應同時進行與巨觀量維持穩定，辨識密閉系統中的動態平衡。",
        "sections": [
          {
            "title": "可逆表示兩方向皆可進行",
            "body": "有些反應在相同系統中，反應物可生成產物，產物也可再形成反應物，常以雙向箭頭表示。能否觀察逆反應取決於物質、溫度與系統是否保留產物，不能把所有反應都視為完全不可逆。"
          },
          {
            "title": "平衡時反應沒有停止",
            "body": "密閉系統達動態平衡後，正反應與逆反應速率相等，因此各物質的濃度等巨觀量維持穩定。微觀上粒子仍持續互相轉換；穩定不等於正逆速率都為零，也不等於反應物、產物濃度相等。"
          },
          {
            "title": "平衡需要條件維持",
            "body": "若溫度、體積或濃度改變，原有速率關係被打破，系統會經歷新的變化，之後可能建立另一平衡。打開容器讓氣體逸出可能使系統無法維持原平衡，所以判斷前要確認邊界與條件。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_126_EX_01",
            "prompt": "密閉容器中A⇌B，達平衡後A、B濃度不變，是否表示反應停止？",
            "steps": [
              "濃度不變是巨觀現象",
              "正逆反應仍進行",
              "兩速率相等使淨變化為零"
            ],
            "answer": "沒有停止，而是正逆速率相等。",
            "why": "A轉成B的量恰被B轉回A的量抵銷，所以量測濃度穩定；粒子層次仍持續反應。"
          },
          {
            "id": "PHYCHM_R4_L_126_EX_02",
            "prompt": "平衡時[A]＝0.8 mol/L、[B]＝0.2 mol/L，是否矛盾？",
            "steps": [
              "平衡條件是速率相等",
              "濃度不必相等",
              "讀取穩定組成"
            ],
            "answer": "不矛盾。",
            "why": "動態平衡要求正逆反應速率相等，而不是各物質濃度相等；0.8與0.2可在該條件下穩定。"
          },
          {
            "id": "PHYCHM_R4_L_126_EX_03",
            "prompt": "平衡混合物加入少量A後，濃度先變再穩定，如何描述？",
            "steps": [
              "加入瞬間破壞原速率關係",
              "系統重新調整",
              "新穩定值表示新平衡"
            ],
            "answer": "原平衡受擾，之後建立新平衡。",
            "why": "外加A使正逆速率暫時不等，濃度因淨反應改變；再次穩定時才表示新的動態平衡。"
          }
        ],
        "misconceptions": [
          {
            "belief": "平衡時所有反應都停止。",
            "whyWrong": "正逆反應仍以相同速率進行。",
            "correction": "用淨變化為零描述巨觀穩定。"
          },
          {
            "belief": "平衡必須反應物與產物濃度相等。",
            "whyWrong": "相等的是正逆速率，不是濃度。",
            "correction": "由平台判斷穩定，不要求同數值。"
          },
          {
            "belief": "可逆反應表示反應方向每秒交替一次。",
            "whyWrong": "兩方向可同時由不同粒子進行。",
            "correction": "以粒子群同時轉換理解。"
          },
          {
            "belief": "平衡建立後不受外界改變影響。",
            "whyWrong": "濃度、溫度或體積改變會打破原平衡。",
            "correction": "每次先確認系統條件是否保持。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_126",
        "title": "密閉系統A與B的變化",
        "body": "固定溫度下，A⇌B在密閉容器中進行。研究者量得濃度與兩方向速率。",
        "dataTable": {
          "columns": [
            "時間",
            "[A]",
            "[B]",
            "正反應速率",
            "逆反應速率"
          ],
          "rows": [
            [
              "0 min",
              "1.00",
              "0.00",
              "0.50",
              "0.00"
            ],
            [
              "2 min",
              "0.72",
              "0.28",
              "0.31",
              "0.18"
            ],
            [
              "6 min",
              "0.60",
              "0.40",
              "0.24",
              "0.24"
            ],
            [
              "10 min",
              "0.60",
              "0.40",
              "0.24",
              "0.24"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_126_01",
          "stem": "可逆反應符號A⇌B表示？",
          "options": [
            "A與B在任何時刻的濃度都必須完全相等",
            "A與B都不反應",
            "只有A成B",
            "A可成B，B也可成A"
          ],
          "answerIndex": 3,
          "rationales": [
            "濃度不必相等。",
            "符號正表示反應。",
            "忽略逆反應。",
            "雙向皆可進行。"
          ],
          "reviewEvidence": "A可成B，B也可成A：雙向皆可進行；A與B在任何時刻的濃度都必須完全相等：濃度不必相等；A與B都不反應：符號正表示反應；只有A成B：忽略逆反應。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "符號辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_126_02",
          "stem": "動態平衡時哪項相等？",
          "options": [
            "正反應速率與逆反應速率",
            "平衡時反應物濃度必須等於產物濃度",
            "反應物種類數",
            "所有物質質量"
          ],
          "answerIndex": 0,
          "rationales": [
            "使淨變化為零。",
            "平衡只要求正逆速率相等，反應物與產物濃度可以不同。",
            "種類數不構成條件。",
            "個別質量可不同。"
          ],
          "reviewEvidence": "正反應速率與逆反應速率：使淨變化為零；平衡時反應物濃度必須等於產物濃度：平衡只要求正逆速率相等，反應物與產物濃度可以不同；反應物種類數：種類數不構成條件；所有物質質量：個別質量可不同。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "定義辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_126_03",
          "stem": "平衡後濃度不變，微觀上？",
          "options": [
            "反應物消失",
            "平衡後產物質量會降到零，反應才停止",
            "正逆反應仍持續",
            "所有粒子靜止"
          ],
          "answerIndex": 2,
          "rationales": [
            "平衡可兩者共存。",
            "產物存在。",
            "動態轉換互相抵銷。",
            "粒子仍運動。"
          ],
          "reviewEvidence": "正逆反應仍持續：動態轉換互相抵銷；反應物消失：平衡可兩者共存；平衡後產物質量會降到零，反應才停止：產物存在；所有粒子靜止：粒子仍運動。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "微觀解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_126_04",
          "stem": "平衡時[A]大於[B]是否可能？",
          "options": [
            "可能，平衡不要求濃度相等",
            "不可能，必各一半",
            "可能，但只因正逆反應都已經完全停止",
            "不可能，A必為零"
          ],
          "answerIndex": 0,
          "rationales": [
            "組成由該系統條件決定。",
            "無一半規則。",
            "反應仍進行。",
            "A可存在。"
          ],
          "reviewEvidence": "可能，平衡不要求濃度相等：組成由該系統條件決定；不可能，必各一半：無一半規則；可能，但只因正逆反應都已經完全停止：反應仍進行；不可能，A必為零：A可存在。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "概念邊界"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_126_05",
          "stem": "哪項最能證明系統達平衡？",
          "options": [
            "只測一次",
            "顏色看起來漂亮",
            "濃度穩定且正逆速率相等",
            "反應物全部消失"
          ],
          "answerIndex": 2,
          "rationales": [
            "無法看穩定。",
            "主觀。",
            "同時有巨觀與速率證據。",
            "不必完全反應。"
          ],
          "reviewEvidence": "濃度穩定且正逆速率相等：同時有巨觀與速率證據；只測一次：無法看穩定；顏色看起來漂亮：主觀；反應物全部消失：不必完全反應。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據整合"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_126_06",
          "stem": "平衡系統加入反應物後立即如何？",
          "options": [
            "所有產物消失",
            "質量守恆失效",
            "原正逆速率關係被打破",
            "仍完全不變"
          ],
          "answerIndex": 2,
          "rationales": [
            "不會瞬間全消失。",
            "完整系統仍守恆。",
            "濃度突變影響速率。",
            "會重新調整。"
          ],
          "reviewEvidence": "原正逆速率關係被打破：濃度突變影響速率；所有產物消失：不會瞬間全消失；質量守恆失效：完整系統仍守恆；仍完全不變：會重新調整。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "擾動判斷"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_126_07",
          "stem": "打開含氣體平衡的容器可能造成？",
          "options": [
            "物質逸出而破壞原平衡條件",
            "平衡永遠不變",
            "正逆速率必為零",
            "容器質量自動增加"
          ],
          "answerIndex": 0,
          "rationales": [
            "系統邊界改變。",
            "開放可改濃度。",
            "仍可能反應。",
            "逸出通常使秤量減少。"
          ],
          "reviewEvidence": "物質逸出而破壞原平衡條件：系統邊界改變；平衡永遠不變：開放可改濃度；正逆速率必為零：仍可能反應；容器質量自動增加：逸出通常使秤量減少。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "邊界分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_126_08",
          "stem": "平衡建立前正反應速率大於逆反應速率，淨結果是？",
          "options": [
            "所有速率為零",
            "產物增加",
            "兩者完全不變",
            "反應物增加"
          ],
          "answerIndex": 1,
          "rationales": [
            "題示非零。",
            "正向轉換較多。",
            "速率不等會有淨變化。",
            "方向相反。"
          ],
          "reviewEvidence": "產物增加：正向轉換較多；所有速率為零：題示非零；兩者完全不變：速率不等會有淨變化；反應物增加：方向相反。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "速率差推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_126_09",
          "stem": "逆反應速率大於正反應速率時？",
          "options": [
            "反應停止",
            "反應物淨增加",
            "逆反應較快時兩側濃度會立即變成相等",
            "產物淨增加"
          ],
          "answerIndex": 1,
          "rationales": [
            "兩方向仍進行。",
            "產物轉回較多。",
            "速率差不要求濃度相同。",
            "方向相反。"
          ],
          "reviewEvidence": "反應物淨增加：產物轉回較多；反應停止：兩方向仍進行；逆反應較快時兩側濃度會立即變成相等：速率差不要求濃度相同；產物淨增加：方向相反。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "速率差推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_126_10",
          "stem": "動態平衡與靜止水面的類比限制是？",
          "options": [
            "兩者都沒有粒子",
            "水面一定有化學反應",
            "平衡必為液體",
            "平衡中微觀反應持續，不是真的靜止"
          ],
          "answerIndex": 3,
          "rationales": [
            "皆有粒子。",
            "類比不代表相同機制。",
            "平衡可在各相。",
            "外觀穩定但內部有動態。"
          ],
          "reviewEvidence": "平衡中微觀反應持續，不是真的靜止：外觀穩定但內部有動態；兩者都沒有粒子：皆有粒子；水面一定有化學反應：類比不代表相同機制；平衡必為液體：平衡可在各相。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "模型限制"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_126_11",
          "stem": "催化劑加入平衡系統主要？",
          "options": [
            "使正逆反應都加快並較快達平衡",
            "只讓產物增加",
            "停止逆反應",
            "使反應物濃度等於產物"
          ],
          "answerIndex": 0,
          "rationales": [
            "雙向門檻都降低。",
            "不改平衡位置。",
            "逆反應也加快。",
            "濃度不必相等。"
          ],
          "reviewEvidence": "使正逆反應都加快並較快達平衡：雙向門檻都降低；只讓產物增加：不改平衡位置；停止逆反應：逆反應也加快；使反應物濃度等於產物：濃度不必相等。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "跨概念整合"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_126_12",
          "stem": "哪項不是平衡的必要條件？",
          "options": [
            "可逆反應",
            "條件維持",
            "正逆速率相等",
            "反應物與產物濃度相等"
          ],
          "answerIndex": 3,
          "rationales": [
            "需兩方向。",
            "條件改變會擾動。",
            "核心條件。",
            "濃度可不同。"
          ],
          "reviewEvidence": "反應物與產物濃度相等：濃度可不同；可逆反應：需兩方向；條件維持：條件改變會擾動；正逆速率相等：核心條件。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "必要條件"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_126_01",
          "stimulusId": "PHYCHM_R4_STIM_126",
          "stem": "何時首次有平衡證據？",
          "options": [
            "無法從表判斷",
            "6分鐘",
            "2分鐘",
            "0分鐘"
          ],
          "answerIndex": 1,
          "rationales": [
            "表有足夠證據。",
            "正逆速率同為0.24且之後濃度穩定。",
            "0.31不等於0.18。",
            "逆速率為0。"
          ],
          "reviewEvidence": "6分鐘：正逆速率同為0.24且之後濃度穩定；無法從表判斷：表有足夠證據；2分鐘：0.31不等於0.18；0分鐘：逆速率為0。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "資料定位"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_126_02",
          "stimulusId": "PHYCHM_R4_STIM_126",
          "stem": "平衡時[A]與[B]是否相等？",
          "options": [
            "A與B都為零",
            "相等，皆0.24",
            "不相等，分別0.60與0.40",
            "相等，皆0.50"
          ],
          "answerIndex": 2,
          "rationales": [
            "兩者都存在。",
            "0.24是速率。",
            "直接讀濃度欄。",
            "表中無0.50。"
          ],
          "reviewEvidence": "不相等，分別0.60與0.40：直接讀濃度欄；A與B都為零：兩者都存在；相等，皆0.24：0.24是速率；相等，皆0.50：表中無0.50。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "欄位辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_126_03",
          "stimulusId": "PHYCHM_R4_STIM_126",
          "stem": "2分鐘時B為何仍淨增加？",
          "options": [
            "兩速率已相等",
            "B濃度大於A",
            "逆反應不存在",
            "正反應速率0.31大於逆反應0.18"
          ],
          "answerIndex": 3,
          "rationales": [
            "數值不同。",
            "B反而較少。",
            "逆速率0.18。",
            "正向每時間轉換較多。"
          ],
          "reviewEvidence": "正反應速率0.31大於逆反應0.18：正向每時間轉換較多；兩速率已相等：數值不同；B濃度大於A：B反而較少；逆反應不存在：逆速率0.18。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "跨欄推論"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S127",
      "title": "定性判斷溫度濃度改變對平衡的影響",
      "authorityRefs": [
        "AUTH-NATURAL-LC-JE-4-1",
        "AUTH-NATURAL-LC-JE-4-2",
        "AUTH-NATURAL-LC-JE-4-3",
        "AUTH-NATURAL-LP-PA-4-2",
        "AUTH-NATURAL-LP-PE-4-1",
        "AUTH-NATURAL-LP-TM-4-1"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科反應速率、控制變因與動態平衡層次",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_127",
        "objective": "能在反應方向與吸放熱資訊明示時，以系統抵銷擾動的觀點定性判斷濃度與溫度改變造成的平衡移動。",
        "sections": [
          {
            "title": "濃度擾動看哪側被補或被移除",
            "body": "對A⇌B加入A後，正反應速率先增加，系統通常淨生成較多B以消耗部分新增A；移走B也會促使系統生成B。這是定性方向，不表示新增物會被完全消耗或平衡回到原濃度。"
          },
          {
            "title": "溫度要先知道熱在哪一側",
            "body": "若題目寫正反應吸熱，可把熱視為正向所需條件，升溫有利正向、降溫有利逆向；若正反應放熱，方向相反。沒有吸放熱資訊時，不能只憑反應式猜溫度效果。"
          },
          {
            "title": "新平衡不是回復原狀",
            "body": "系統的調整只抵銷部分擾動。加入A後，新平衡的A濃度通常仍高於加入前；溫度改變也同時改變平衡條件。催化劑只使新平衡較快建立，不改變最後偏移方向。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_127_EX_01",
            "prompt": "A⇌B達平衡後加入A，其他條件不變，初步往哪方向調整？",
            "steps": [
              "A濃度突然增加",
              "正反應碰撞機會先增",
              "淨生成B以消耗部分A"
            ],
            "answer": "向生成B的正向調整。",
            "why": "新增反應物使正反應速率先超過逆反應；直到兩速率再次相等，系統建立含較多B的新平衡。"
          },
          {
            "id": "PHYCHM_R4_L_127_EX_02",
            "prompt": "X⇌Y的正反應明示為吸熱，升溫時平衡如何？",
            "steps": [
              "熱是正向所需",
              "升溫增加熱條件",
              "系統偏向消耗熱的方向"
            ],
            "answer": "向Y方向移動。",
            "why": "題目已指定正反應吸熱，升溫有利吸收熱的正向；若未給吸放熱，就不能作同樣判斷。"
          },
          {
            "id": "PHYCHM_R4_L_127_EX_03",
            "prompt": "P⇌Q正反應放熱，降溫時哪一方增加？",
            "steps": [
              "正向會放出熱",
              "降溫相當於移走熱",
              "系統偏向補充熱的正向"
            ],
            "answer": "Q增加。",
            "why": "降溫有利放熱方向，而題設正向放熱，所以平衡向Q側移動；結論依賴題目提供的熱方向。"
          }
        ],
        "misconceptions": [
          {
            "belief": "加入反應物後，新增量會被完全消耗。",
            "whyWrong": "平衡調整通常只抵銷部分擾動。",
            "correction": "比較新舊平衡方向，不宣稱回復原濃度。"
          },
          {
            "belief": "升溫永遠使平衡向生成物。",
            "whyWrong": "方向取決於正反應吸熱或放熱。",
            "correction": "先找題目明示的熱效應。"
          },
          {
            "belief": "催化劑會讓平衡往產物移。",
            "whyWrong": "正逆反應同時加快。",
            "correction": "催化劑只縮短建立新平衡的時間。"
          },
          {
            "belief": "移走產物後逆反應必更快。",
            "whyWrong": "產物濃度下降會先降低逆反應速率。",
            "correction": "由速率改變推導淨正向補充產物。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_127",
        "title": "有色平衡的擾動",
        "body": "密閉系統A（淡色）⇌B（藍色），正反應為吸熱。原平衡吸光值0.40；吸光值越高代表B比例越高。移走部分B後立即測得0.20，待數值穩定後再記錄新平衡。",
        "dataTable": {
          "columns": [
            "處理",
            "新平衡吸光值"
          ],
          "rows": [
            [
              "不處理",
              "0.40"
            ],
            [
              "加入A",
              "0.56"
            ],
            [
              "移走部分B",
              "0.31"
            ],
            [
              "升溫",
              "0.63"
            ],
            [
              "降溫",
              "0.22"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_127_01",
          "stem": "A⇌B平衡後加入A，通常先有利？",
          "options": [
            "正反應",
            "兩速率都必為零",
            "A完全消失",
            "逆反應"
          ],
          "answerIndex": 0,
          "rationales": [
            "A濃度提高。",
            "仍有反應。",
            "只部分被消耗。",
            "B未先增加。"
          ],
          "reviewEvidence": "正反應：A濃度提高；兩速率都必為零：仍有反應；A完全消失：只部分被消耗；逆反應：B未先增加。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "濃度擾動"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_127_02",
          "stem": "A⇌B移走部分B後，系統傾向？",
          "options": [
            "向A方向消耗更多B",
            "完全停止",
            "A與B都消失",
            "向B方向補充"
          ],
          "answerIndex": 3,
          "rationales": [
            "方向相反。",
            "仍會調整。",
            "物質守恆。",
            "逆速率先下降。"
          ],
          "reviewEvidence": "向B方向補充：逆速率先下降；向A方向消耗更多B：方向相反；完全停止：仍會調整；A與B都消失：物質守恆。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "產物移除"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_127_03",
          "stem": "正反應吸熱，升溫使平衡？",
          "options": [
            "永遠不變",
            "向逆向移動",
            "向正向移動",
            "所有物質結冰"
          ],
          "answerIndex": 2,
          "rationales": [
            "溫度可改平衡。",
            "逆向為放熱。",
            "正向消耗熱。",
            "無此條件。"
          ],
          "reviewEvidence": "向正向移動：正向消耗熱；永遠不變：溫度可改平衡；向逆向移動：逆向為放熱；所有物質結冰：無此條件。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "溫度判斷"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_127_04",
          "stem": "正反應放熱，升溫時？",
          "options": [
            "吸放熱資訊無用",
            "必全成產物",
            "有利逆向",
            "有利正向"
          ],
          "answerIndex": 2,
          "rationales": [
            "正是判斷依據。",
            "只定性偏移。",
            "逆向可吸收新增熱。",
            "正向會再放熱。"
          ],
          "reviewEvidence": "有利逆向：逆向可吸收新增熱；吸放熱資訊無用：正是判斷依據；必全成產物：只定性偏移；有利正向：正向會再放熱。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "熱效應"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_127_05",
          "stem": "未告知正反應吸放熱，能判斷升溫方向嗎？",
          "options": [
            "一定正向",
            "一定無反應",
            "一定逆向",
            "不能"
          ],
          "answerIndex": 3,
          "rationales": [
            "只對吸熱正向。",
            "升溫不代表停止。",
            "只對放熱正向。",
            "關鍵資訊缺失。"
          ],
          "reviewEvidence": "不能：關鍵資訊缺失；一定正向：只對吸熱正向；一定無反應：升溫不代表停止；一定逆向：只對放熱正向。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資訊充分性"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_127_06",
          "stem": "加入A後新平衡[A]一定回到原值嗎？",
          "options": [
            "A不是物質",
            "一定變零",
            "不一定，調整只抵銷部分擾動",
            "一定完全相同"
          ],
          "answerIndex": 2,
          "rationales": [
            "A代表物質。",
            "仍可剩A。",
            "新平衡組成不同。",
            "無完全補償。"
          ],
          "reviewEvidence": "不一定，調整只抵銷部分擾動：新平衡組成不同；A不是物質：A代表物質；一定變零：仍可剩A；一定完全相同：無完全補償。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "補償界限"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_127_07",
          "stem": "平衡中加入催化劑的效果？",
          "options": [
            "停止逆反應",
            "較快達到同一平衡組成",
            "平衡全部往左",
            "平衡全部往右"
          ],
          "answerIndex": 1,
          "rationales": [
            "逆反應也加快。",
            "雙向皆加快。",
            "不改位置。",
            "不改位置。"
          ],
          "reviewEvidence": "較快達到同一平衡組成：雙向皆加快；停止逆反應：逆反應也加快；平衡全部往左：不改位置；平衡全部往右：不改位置。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "催化整合"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_127_08",
          "stem": "加入B到A⇌B後，初步哪個速率增加較直接？",
          "options": [
            "兩者必降為零",
            "A的質量消失",
            "正反應速率",
            "逆反應速率"
          ],
          "answerIndex": 3,
          "rationales": [
            "仍反應。",
            "會生成部分A。",
            "A未直接增加。",
            "B濃度增高。"
          ],
          "reviewEvidence": "逆反應速率：B濃度增高；兩者必降為零：仍反應；A的質量消失：會生成部分A；正反應速率：A未直接增加。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "速率起因"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_127_09",
          "stem": "移走A會使A⇌B往哪邊調整？",
          "options": [
            "由A生成更多B",
            "由B生成部分A",
            "A永遠為零",
            "完全不變"
          ],
          "answerIndex": 1,
          "rationales": [
            "會更耗A。",
            "逆向補充被移除物。",
            "只部分補充。",
            "濃度擾動會改速率。"
          ],
          "reviewEvidence": "由B生成部分A：逆向補充被移除物；由A生成更多B：會更耗A；A永遠為零：只部分補充；完全不變：濃度擾動會改速率。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "反應物移除"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_127_10",
          "stem": "正反應吸熱，降溫時何者增加？",
          "options": [
            "反應物側",
            "催化劑量",
            "原子總數",
            "產物側"
          ],
          "answerIndex": 0,
          "rationales": [
            "逆向放熱較有利。",
            "未加催化劑。",
            "總數守恆。",
            "方向相反。"
          ],
          "reviewEvidence": "反應物側：逆向放熱較有利；催化劑量：未加催化劑；原子總數：總數守恆；產物側：方向相反。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "降溫判斷"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_127_11",
          "stem": "濃度擾動後重新平衡時，何時停止淨變化？",
          "options": [
            "溫度變零",
            "正逆速率再次相等",
            "所有反應物完全耗盡後才會停止淨變化",
            "兩濃度變相等"
          ],
          "answerIndex": 1,
          "rationales": [
            "無此要求。",
            "建立新動態平衡。",
            "平衡通常共存。",
            "濃度不必相等。"
          ],
          "reviewEvidence": "正逆速率再次相等：建立新動態平衡；溫度變零：無此要求；所有反應物完全耗盡後才會停止淨變化：平衡通常共存；兩濃度變相等：濃度不必相等。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "平衡重建"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_127_12",
          "stem": "下列哪項敘述最精確？",
          "options": [
            "向左即產物為零",
            "平衡移動是定性方向，不表示某側完全消失",
            "任何擾動都無影響",
            "向右即全變產物"
          ],
          "answerIndex": 1,
          "rationales": [
            "過度推論。",
            "兩側通常仍共存。",
            "平衡會調整。",
            "過度推論。"
          ],
          "reviewEvidence": "平衡移動是定性方向，不表示某側完全消失：兩側通常仍共存；向左即產物為零：過度推論；任何擾動都無影響：平衡會調整；向右即全變產物：過度推論。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "語意精確"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_127_01",
          "stimulusId": "PHYCHM_R4_STIM_127",
          "stem": "升溫後B比例如何？",
          "options": [
            "變成零",
            "減少",
            "不變",
            "增加"
          ],
          "answerIndex": 3,
          "rationales": [
            "仍有吸光。",
            "數據相反。",
            "有明顯改變。",
            "吸光值0.63高於0.40。"
          ],
          "reviewEvidence": "增加：吸光值0.63高於0.40；變成零：仍有吸光；減少：數據相反；不變：有明顯改變。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "表格判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_127_02",
          "stimulusId": "PHYCHM_R4_STIM_127",
          "stem": "加入A後吸光值上升支持？",
          "options": [
            "平衡向生成B方向調整",
            "溫度必上升",
            "A完全被消耗",
            "吸光值上升表示逆反應已經永久停止"
          ],
          "answerIndex": 0,
          "rationales": [
            "B比例提高。",
            "未給溫度改變。",
            "只知部分轉換。",
            "新平衡仍有逆反應。"
          ],
          "reviewEvidence": "平衡向生成B方向調整：B比例提高；溫度必上升：未給溫度改變；A完全被消耗：只知部分轉換；吸光值上升表示逆反應已經永久停止：新平衡仍有逆反應。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據連結"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_127_03",
          "stimulusId": "PHYCHM_R4_STIM_127",
          "stem": "移走部分B後，吸光值由立即測得的0.20回升到新平衡0.31，但仍低於原平衡0.40。這表示什麼？",
          "options": [
            "系統補回部分B，但未恢復原比例",
            "吸光值回升只能由溫度上升造成",
            "A與B在擾動後停止互相轉換",
            "B在新平衡時已全部消失"
          ],
          "answerIndex": 0,
          "rationales": [
            "0.20回升至0.31表示B增加，而0.31低於0.40表示未完全恢復。",
            "刺激只提供移走B的操作，沒有溫度升高的資料。",
            "數值由0.20改變到0.31，顯示組成仍在調整。",
            "新平衡仍有0.31的吸光值，不能判為B全部消失。"
          ],
          "reviewEvidence": "系統補回部分B，但未恢復原比例：0.20回升至0.31表示B增加，而0.31低於0.40表示未完全恢復；吸光值回升只能由溫度上升造成：刺激只提供移走B的操作，沒有溫度升高的資料；A與B在擾動後停止互相轉換：數值由0.20改變到0.31，顯示組成仍在調整；B在新平衡時已全部消失：新平衡仍有0.31的吸光值，不能判為B全部消失。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "補償界限"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S128",
      "title": "區分反應較快與生成物一定較多",
      "authorityRefs": [
        "AUTH-NATURAL-LC-JE-4-1",
        "AUTH-NATURAL-LC-JE-4-2",
        "AUTH-NATURAL-LC-JE-4-3",
        "AUTH-NATURAL-LP-PA-4-2",
        "AUTH-NATURAL-LP-PE-4-1",
        "AUTH-NATURAL-LP-TM-4-1"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科反應速率、控制變因與動態平衡層次",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_128",
        "objective": "能分別判讀反應速率、固定時間產量與完全反應後總產量，不把較快、較多、較完全混為同一結論。",
        "sections": [
          {
            "title": "較快描述時間歷程",
            "body": "反應較快表示單位時間變化量較大，或達到同一產量所需時間較短。它不直接決定反應物總量；兩組使用相同反應物且都完全反應時，快組與慢組最後可得到相同產物量。"
          },
          {
            "title": "固定時間與最終量不同",
            "body": "在前2分鐘，快組往往累積較多產物；若延長到兩組都達平台，差距可能消失。比較題要先看問的是「某時刻」還是「反應完成」，不能拿前期數據回答終量。"
          },
          {
            "title": "終量由反應量和平衡決定",
            "body": "增加限制反應物可增加理論產量，改變平衡條件也可能改變平衡組成；催化劑、粉碎或升溫通常先改速率。若升溫同時改變平衡，題目需提供熱效應，不能把所有溫度題一概只談快慢。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_128_EX_01",
            "prompt": "等質量粉末與塊狀大理石遇足量酸，粉末2分鐘完成、塊狀8分鐘完成，最後CO₂如何？",
            "steps": [
              "兩組碳酸鈣質量相同",
              "酸皆足量",
              "表面積只改快慢"
            ],
            "answer": "最後CO₂總量相同。",
            "why": "粉末先達平台，但兩組都有相同可反應的碳酸鈣並完全反應，所以最終產量由物質量決定。"
          },
          {
            "id": "PHYCHM_R4_L_128_EX_02",
            "prompt": "A組1分鐘產40 mL、最後80 mL；B組1分鐘產20 mL、最後120 mL。哪組快、哪組多？",
            "steps": [
              "用前1分鐘比較初速",
              "用平台比較終量",
              "分開作答"
            ],
            "answer": "A初期較快，B最終產量較多。",
            "why": "A在相同一分鐘形成較多氣體，但B的平台高40 mL，顯示快慢與總反應量可以由不同組領先。"
          },
          {
            "id": "PHYCHM_R4_L_128_EX_03",
            "prompt": "加入催化劑後平衡更快建立，平衡產物比例不變，該如何描述？",
            "steps": [
              "催化劑加快正逆反應",
              "達平衡時間縮短",
              "平衡位置不變"
            ],
            "answer": "反應過程變快，平衡終組成不變。",
            "why": "催化劑不偏向任一方向，故不能用較快達平衡宣稱產物比例提高。"
          }
        ],
        "misconceptions": [
          {
            "belief": "最快達平台的一組平台一定最高。",
            "whyWrong": "平台高度由反應物量或平衡決定。",
            "correction": "分別讀曲線斜率與最終縱值。"
          },
          {
            "belief": "粉末反應快，所以粉碎會增加物質總量。",
            "whyWrong": "粉碎只增加表面積。",
            "correction": "相同質量完全反應時終量可相同。"
          },
          {
            "belief": "某時刻產物較多就證明最終也較多。",
            "whyWrong": "慢組可能稍後追上或超過。",
            "correction": "等待平台或取得完整時間序列。"
          },
          {
            "belief": "催化劑提高可逆反應的平衡產率。",
            "whyWrong": "催化劑同時提高正、逆反應速率，不改變同條件下的平衡組成。",
            "correction": "把達平衡時間與平衡組成分開。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_128",
        "title": "三組產物曲線摘要",
        "body": "各組在相同溫度量測累積產物。甲、乙反應物總量相同，乙加催化劑；丙反應物量較多。",
        "dataTable": {
          "columns": [
            "組別",
            "1分鐘",
            "3分鐘",
            "10分鐘平台"
          ],
          "rows": [
            [
              "甲",
              "20 g",
              "45 g",
              "60 g"
            ],
            [
              "乙",
              "42 g",
              "59 g",
              "60 g"
            ],
            [
              "丙",
              "30 g",
              "65 g",
              "90 g"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_128_01",
          "stem": "同量粉末比塊狀快，但皆完全反應，最終產量？",
          "options": [
            "粉末必較多",
            "兩者皆為零",
            "可相同",
            "塊狀必較多"
          ],
          "answerIndex": 2,
          "rationales": [
            "表面積不增總量。",
            "皆有反應。",
            "總反應物量相同。",
            "慢不代表多。"
          ],
          "reviewEvidence": "可相同：總反應物量相同；粉末必較多：表面積不增總量；兩者皆為零：皆有反應；塊狀必較多：慢不代表多。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "概念區分"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_128_02",
          "stem": "哪項表示反應較快？",
          "options": [
            "達50 mL產物所需時間較短",
            "反應物質量必較大",
            "容器必較高",
            "最後產物必較多"
          ],
          "answerIndex": 0,
          "rationales": [
            "固定產量比時間。",
            "質量不必較大。",
            "容器無關。",
            "終量是另一指標。"
          ],
          "reviewEvidence": "達50 mL產物所需時間較短：固定產量比時間；反應物質量必較大：質量不必較大；容器必較高：容器無關；最後產物必較多：終量是另一指標。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "指標辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_128_03",
          "stem": "兩組最終產物相同，能否有不同速率？",
          "options": [
            "能，但只因質量不守恆",
            "不能，終量相同表示每一時刻的速率都相同",
            "能，達到相同終量所需時間可不同",
            "不能，速率不存在"
          ],
          "answerIndex": 2,
          "rationales": [
            "與守恆無關。",
            "錯把終點當全曲線。",
            "歷程可不同。",
            "速率可測。"
          ],
          "reviewEvidence": "能，達到相同終量所需時間可不同：歷程可不同；能，但只因質量不守恆：與守恆無關；不能，終量相同表示每一時刻的速率都相同：錯把終點當全曲線；不能，速率不存在：速率可測。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "反例理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_128_04",
          "stem": "固定時間內產物較多通常支持？",
          "options": [
            "固定時間產物較多表示起始反應物一定較多",
            "該時段平均速率較快",
            "最終平台必較高",
            "平衡一定右移"
          ],
          "answerIndex": 1,
          "rationales": [
            "可能是速率因素。",
            "同時間變化量較大。",
            "仍需後續資料。",
            "非必然平衡反應。"
          ],
          "reviewEvidence": "該時段平均速率較快：同時間變化量較大；固定時間產物較多表示起始反應物一定較多：可能是速率因素；最終平台必較高：仍需後續資料；平衡一定右移：非必然平衡反應。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據界限"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_128_05",
          "stem": "催化劑對相同反應物的典型作用是？",
          "options": [
            "催化劑會增加系統內的原子總數以提高終量",
            "較快達到相同終量",
            "使終量無限大",
            "只增加逆反應"
          ],
          "answerIndex": 1,
          "rationales": [
            "原子守恆。",
            "改速率不改限制量。",
            "不創造物質。",
            "雙向皆加快。"
          ],
          "reviewEvidence": "較快達到相同終量：改速率不改限制量；催化劑會增加系統內的原子總數以提高終量：原子守恆；使終量無限大：不創造物質；只增加逆反應：雙向皆加快。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "催化作用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_128_06",
          "stem": "增加限制反應物的量，另一方足量，最直接可能？",
          "options": [
            "最終產物量增加",
            "讓催化劑消失",
            "只讓速率增加而終量不變",
            "使所有反應停止"
          ],
          "answerIndex": 0,
          "rationales": [
            "可反應總量增加。",
            "與催化無關。",
            "終量會受影響。",
            "仍可反應。"
          ],
          "reviewEvidence": "最終產物量增加：可反應總量增加；讓催化劑消失：與催化無關；只讓速率增加而終量不變：終量會受影響；使所有反應停止：仍可反應。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "產量因素"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_128_07",
          "stem": "升溫後前期較快，能直接說平衡產物更多嗎？",
          "options": [
            "不能，因溫度不影響反應",
            "不能，還需反應吸放熱與平衡資料",
            "能，溫度只影響產量",
            "能，快必多"
          ],
          "answerIndex": 1,
          "rationales": [
            "明顯可影響。",
            "速率與平衡效果分開。",
            "升溫也常改速率。",
            "錯誤等同。"
          ],
          "reviewEvidence": "不能，還需反應吸放熱與平衡資料：速率與平衡效果分開；不能，因溫度不影響反應：明顯可影響；能，溫度只影響產量：升溫也常改速率；能，快必多：錯誤等同。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "多重效應"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_128_08",
          "stem": "曲線較陡但平台較低，表示？",
          "options": [
            "速率與產量相同",
            "較慢且最終較多",
            "初期較快但最終產量較少",
            "沒有反應"
          ],
          "answerIndex": 2,
          "rationales": [
            "兩指標不同。",
            "兩項皆相反。",
            "斜率大、終值低。",
            "曲線有上升。"
          ],
          "reviewEvidence": "初期較快但最終產量較少：斜率大、終值低；速率與產量相同：兩指標不同；較慢且最終較多：兩項皆相反；沒有反應：曲線有上升。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "圖形整合"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_128_09",
          "stem": "反應較慢是否表示不能完成？",
          "options": [
            "一定是可逆反應",
            "一定產物為零",
            "不一定，給足時間仍可能達相同平台",
            "一定永遠不完成"
          ],
          "answerIndex": 2,
          "rationales": [
            "可不可逆未知。",
            "慢組仍產物。",
            "慢只描述時間尺度。",
            "過度推論。"
          ],
          "reviewEvidence": "不一定，給足時間仍可能達相同平台：慢只描述時間尺度；一定是可逆反應：可不可逆未知；一定產物為零：慢組仍產物；一定永遠不完成：過度推論。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "語意界限"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_128_10",
          "stem": "哪項最能比較最終產量？",
          "options": [
            "兩組都達穩定平台後的縱軸值",
            "起始10秒斜率",
            "第一個氣泡時間",
            "催化劑顏色"
          ],
          "answerIndex": 0,
          "rationales": [
            "平台代表終量。",
            "只反映初速。",
            "只反映起始。",
            "顏色不表示生成物累積量，不能取代曲線的平台讀值。"
          ],
          "reviewEvidence": "兩組都達穩定平台後的縱軸值：平台代表終量；起始10秒斜率：只反映初速；第一個氣泡時間：只反映起始；催化劑顏色：顏色不表示生成物累積量，不能取代曲線的平台讀值。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "資料選擇"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_128_11",
          "stem": "兩組前5分鐘產量相同，能說整條曲線相同嗎？",
          "options": [
            "不能，因產量不能量",
            "能，反應物必相同",
            "能，單點決定全部",
            "不能，之後速率或平台可能不同"
          ],
          "answerIndex": 3,
          "rationales": [
            "產量可量。",
            "不同歷程可交會。",
            "需多時點。",
            "單一時點不足。"
          ],
          "reviewEvidence": "不能，之後速率或平台可能不同：單一時點不足；不能，因產量不能量：產量可量；能，反應物必相同：不同歷程可交會；能，單點決定全部：需多時點。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "取樣限制"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_128_12",
          "stem": "最終產物較多的一組一定反應較快嗎？",
          "options": [
            "一定",
            "不一定，可能只是反應物量較多",
            "只有催化劑能增產",
            "最終量與反應物無關"
          ],
          "answerIndex": 1,
          "rationales": [
            "缺少時間資料。",
            "多量慢反應可有高終量。",
            "催化劑不增終量。",
            "終量受物質量限制。"
          ],
          "reviewEvidence": "不一定，可能只是反應物量較多：多量慢反應可有高終量；一定：缺少時間資料；只有催化劑能增產：催化劑不增終量；最終量與反應物無關：終量受物質量限制。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "因果拆解"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_128_01",
          "stimulusId": "PHYCHM_R4_STIM_128",
          "stem": "甲乙比較可得？",
          "options": [
            "乙較快，但兩組平台同為60 g",
            "乙最終較多",
            "甲較快",
            "催化劑使終量加倍"
          ],
          "answerIndex": 0,
          "rationales": [
            "乙早期42、59，平台相同。",
            "平台皆60。",
            "甲早期較少。",
            "沒有加倍。"
          ],
          "reviewEvidence": "乙較快，但兩組平台同為60 g：乙早期42、59，平台相同；乙最終較多：平台皆60；甲較快：甲早期較少；催化劑使終量加倍：沒有加倍。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "雙指標比較"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_128_02",
          "stimulusId": "PHYCHM_R4_STIM_128",
          "stem": "1分鐘時哪組產物最多？10分鐘呢？",
          "options": [
            "兩時皆甲",
            "1分鐘丙；10分鐘甲",
            "兩時皆乙",
            "1分鐘乙；10分鐘丙"
          ],
          "answerIndex": 3,
          "rationales": [
            "甲20與60都非最高。",
            "丙1分鐘30低於42。",
            "乙平台60。",
            "42最高；平台90最高。"
          ],
          "reviewEvidence": "1分鐘乙；10分鐘丙：42最高；平台90最高；兩時皆甲：甲20與60都非最高；1分鐘丙；10分鐘甲：丙1分鐘30低於42；兩時皆乙：乙平台60。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "時點切換"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_128_03",
          "stimulusId": "PHYCHM_R4_STIM_128",
          "stem": "丙平台較高的題幹依據是？",
          "options": [
            "丙的平台較高是因甲乙兩組都不遵守質量守恆",
            "丙1分鐘最快",
            "丙一定有催化劑",
            "丙的反應物量較多"
          ],
          "answerIndex": 3,
          "rationales": [
            "沒有守恆問題。",
            "乙1分鐘42最高。",
            "只有乙明示催化劑。",
            "題幹明示且平台90。"
          ],
          "reviewEvidence": "丙的反應物量較多：題幹明示且平台90；丙的平台較高是因甲乙兩組都不遵守質量守恆：沒有守恆問題；丙1分鐘最快：乙1分鐘42最高；丙一定有催化劑：只有乙明示催化劑。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "因果配對"
          ]
        }
      ]
    }
  ]
};
