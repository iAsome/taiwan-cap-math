export const PHYSICS_CHEMISTRY_AUTHORED_U19 = {
  "unitId": "PHYCHM_R4_U19",
  "title": "溫度、熱量與相變",
  "authorityRefs": [
    "AUTH-NATURAL-LC-AB-4-2",
    "AUTH-NATURAL-LC-BA-4-1",
    "AUTH-NATURAL-LC-BB-4-1",
    "AUTH-NATURAL-LC-BB-4-2",
    "AUTH-NATURAL-LC-BB-4-3",
    "AUTH-NATURAL-LC-BB-4-5",
    "AUTH-NATURAL-LP-PA-4-2"
  ],
  "provenance": {
    "curriculum": "十二年國教自然科學第四學習階段熱學與能量",
    "calibration": "臺灣國中教育會考自然科熱量、比熱、相變與生活現象題型",
    "authorship": "original-static-r4"
  },
  "skills": [
    {
      "id": "PHYCHM_R4_S145",
      "title": "區分溫度與熱量概念",
      "authorityRefs": [
        "AUTH-NATURAL-LC-AB-4-2",
        "AUTH-NATURAL-LC-BA-4-1",
        "AUTH-NATURAL-LC-BB-4-1",
        "AUTH-NATURAL-LC-BB-4-2",
        "AUTH-NATURAL-LC-BB-4-3",
        "AUTH-NATURAL-LC-BB-4-5",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "curriculum": "十二年國教自然科學第四學習階段熱學與能量",
        "calibration": "臺灣國中教育會考自然科熱量、比熱、相變與生活現象題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_145",
        "objective": "能區分溫度是冷熱程度的狀態量，熱量是因溫差傳遞的能量，並用質量、材質與溫度變化解釋同溫物體未必具有相同內能變化。",
        "sections": [
          {
            "title": "溫度不是熱量存量",
            "body": "溫度描述物體冷熱程度，常用°C；熱量是能量傳遞，常用J或cal。物體不會『裝著幾度熱量』，而是在與另一物體有溫差時吸收或放出能量。"
          },
          {
            "title": "同溫不代表同樣能量",
            "body": "一杯與一桶水都可為60°C，但桶中水質量較大，若降到同一終溫通常放出更多熱量。比較熱效應要看質量、材質、溫差及是否相變，不能只比溫度數字。"
          },
          {
            "title": "量測工具各有對象",
            "body": "溫度計直接量溫度；熱量常由質量、比熱與溫差計算，或用量熱裝置推估。兩物體達熱平衡後溫度相同，並不表示質量、材質或總能量相同。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_145_EX_01",
            "prompt": "50°C的一杯水與一桶水，何者溫度較高？",
            "steps": [
              "讀兩個溫度",
              "確認數值相同",
              "區分質量"
            ],
            "answer": "溫度相同。",
            "why": "兩者溫度計都讀50°C；桶水較多可能在相同降溫下放出更多熱量，但不能因此說其溫度較高。"
          },
          {
            "id": "PHYCHM_R4_L_145_EX_02",
            "prompt": "手握冰塊感到冷，能量主要如何傳遞？",
            "steps": [
              "比較手與冰溫度",
              "找高溫端",
              "判斷傳遞方向"
            ],
            "answer": "能量由手傳給冰塊。",
            "why": "手的溫度高於冰，熱由手流向冰；手失去能量所以感到冷，而不是『冷量』從冰流入手。"
          },
          {
            "id": "PHYCHM_R4_L_145_EX_03",
            "prompt": "水從20°C升到30°C，10°C代表什麼？",
            "steps": [
              "計算終溫減初溫",
              "辨認為溫度變化",
              "不誤當熱量"
            ],
            "answer": "溫度上升10°C。",
            "why": "10°C是溫差，不是吸收10焦耳；實際吸熱量還要知道水的質量與比熱。"
          }
        ],
        "misconceptions": [
          {
            "belief": "溫度高的物體一定含有較多熱量。",
            "whyWrong": "熱量是傳遞量，且熱效應還受質量材質影響。",
            "correction": "分開比較溫度與能量傳遞。"
          },
          {
            "belief": "冰把冷傳給手。",
            "whyWrong": "能量由較熱的手流向較冷的冰。",
            "correction": "用熱由高溫端傳向低溫端描述。"
          },
          {
            "belief": "升高5°C就是吸收5 J。",
            "whyWrong": "溫差與能量單位不同。",
            "correction": "需搭配質量與比熱計算熱量。"
          },
          {
            "belief": "達熱平衡後兩物體所有性質都相同。",
            "whyWrong": "只代表溫度不再有淨差異。",
            "correction": "質量、材質與體積仍可不同。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_145",
        "title": "三杯水的冷卻",
        "body": "三杯水皆由60°C放到25°C環境，忽略蒸發，水的比熱相同。",
        "dataTable": {
          "columns": [
            "杯別",
            "水質量/g",
            "初溫/°C",
            "30分鐘後/°C"
          ],
          "rows": [
            [
              "甲",
              "100",
              "60",
              "30"
            ],
            [
              "乙",
              "200",
              "60",
              "38"
            ],
            [
              "丙",
              "100",
              "40",
              "28"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_145_01",
          "stem": "溫度主要描述什麼？",
          "options": [
            "物體的冷熱程度",
            "體積",
            "物體質量",
            "溫度表示物體在過程中傳遞的能量總量"
          ],
          "answerIndex": 0,
          "rationales": [
            "這是溫度意義。",
            "體積另量。",
            "質量另量。",
            "那是熱量概念。"
          ],
          "reviewEvidence": "物體的冷熱程度：這是溫度意義；體積：體積另量；物體質量：質量另量；溫度表示物體在過程中傳遞的能量總量：那是熱量概念。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "概念辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_145_02",
          "stem": "熱量的常用單位為何？",
          "options": [
            "J",
            "kg",
            "m",
            "°C"
          ],
          "answerIndex": 0,
          "rationales": [
            "焦耳是能量單位。",
            "公斤量質量。",
            "公尺量長度。",
            "攝氏度量溫度。"
          ],
          "reviewEvidence": "J：焦耳是能量單位；kg：公斤量質量；m：公尺量長度；°C：攝氏度量溫度。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "單位辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_145_03",
          "stem": "兩杯水都是40°C，可直接確定什麼？",
          "options": [
            "放熱量相同",
            "質量相同",
            "體積相同",
            "溫度相同"
          ],
          "answerIndex": 3,
          "rationales": [
            "需看質量與溫差。",
            "未給質量。",
            "未給體積。",
            "題面只給相同溫度。"
          ],
          "reviewEvidence": "溫度相同：題面只給相同溫度；放熱量相同：需看質量與溫差；質量相同：未給質量；體積相同：未給體積。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "資訊界線"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_145_04",
          "stem": "冷湯吸收熱量後，最可能先觀察到什麼？",
          "options": [
            "變成金屬",
            "質量必定加倍",
            "溫度上升",
            "溫度必定不變"
          ],
          "answerIndex": 2,
          "rationales": [
            "不會變金屬。",
            "質量不因此加倍。",
            "未相變時吸熱常使溫度升。",
            "一般會改變。"
          ],
          "reviewEvidence": "溫度上升：未相變時吸熱常使溫度升；變成金屬：不會變金屬；質量必定加倍：質量不因此加倍；溫度必定不變：一般會改變。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "現象預測"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_145_05",
          "stem": "100 g與200 g水同升10°C，何者吸熱較多？",
          "options": [
            "必定相同",
            "無法因水相同而判斷",
            "100 g水",
            "200 g水"
          ],
          "answerIndex": 3,
          "rationales": [
            "不相同。",
            "資料足夠。",
            "質量較小。",
            "同材質同溫差，熱量與質量成正比。"
          ],
          "reviewEvidence": "200 g水：同材質同溫差，熱量與質量成正比；必定相同：不相同；無法因水相同而判斷：資料足夠；100 g水：質量較小。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "比例推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_145_06",
          "stem": "溫度計直接量到的是什麼？",
          "options": [
            "比熱",
            "化學能",
            "溫度",
            "熱量"
          ],
          "answerIndex": 2,
          "rationales": [
            "比熱是物質性質。",
            "不直接量化學能。",
            "溫度計量溫。",
            "熱量需推估。"
          ],
          "reviewEvidence": "溫度：溫度計量溫；比熱：比熱是物質性質；化學能：不直接量化學能；熱量：熱量需推估。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "器材理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_145_07",
          "stem": "30°C物體與20°C物體接觸，最初熱如何流？",
          "options": [
            "兩端都不流",
            "30°C端流向20°C端",
            "20°C端流向30°C端",
            "只由質量小者流出"
          ],
          "answerIndex": 1,
          "rationales": [
            "有溫差。",
            "由高溫向低溫。",
            "方向相反。",
            "方向由溫差定。"
          ],
          "reviewEvidence": "30°C端流向20°C端：由高溫向低溫；兩端都不流：有溫差；20°C端流向30°C端：方向相反；只由質量小者流出：方向由溫差定。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "方向判斷"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_145_08",
          "stem": "5°C與5 J為何不能相加？",
          "options": [
            "代表不同物理量與單位",
            "5不能運算",
            "兩者都是長度",
            "J是溫度"
          ],
          "answerIndex": 0,
          "rationales": [
            "一是溫差，一是能量。",
            "數字可運算但量綱須同。",
            "都不是長度。",
            "J是能量。"
          ],
          "reviewEvidence": "代表不同物理量與單位：一是溫差，一是能量；5不能運算：數字可運算但量綱須同；兩者都是長度：都不是長度；J是溫度：J是能量。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "單位推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_145_09",
          "stem": "熱平衡最合適的判準為何？",
          "options": [
            "質量相同",
            "都變成固體",
            "顏色相同",
            "接觸物體溫度相同且無淨熱流"
          ],
          "answerIndex": 3,
          "rationales": [
            "質量可不同。",
            "相態可不同。",
            "顏色無關。",
            "這是熱平衡意義。"
          ],
          "reviewEvidence": "接觸物體溫度相同且無淨熱流：這是熱平衡意義；質量相同：質量可不同；都變成固體：相態可不同；顏色相同：顏色無關。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "概念解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_145_10",
          "stem": "說『這杯水有80°C的熱量』錯在哪裡？",
          "options": [
            "80一定太大",
            "°C描述溫度，不是熱量",
            "水沒有溫度",
            "熱量只能為負"
          ],
          "answerIndex": 1,
          "rationales": [
            "大小不是問題。",
            "物理量用語混淆。",
            "水有溫度。",
            "熱量方向可依系統定義。"
          ],
          "reviewEvidence": "°C描述溫度，不是熱量：物理量用語混淆；80一定太大：大小不是問題；水沒有溫度：水有溫度；熱量只能為負：熱量方向可依系統定義。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "語意批判"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_145_11",
          "stem": "一大桶30°C水與一滴90°C水，哪個溫度較高？",
          "options": [
            "30°C水桶",
            "必定相同",
            "90°C水滴",
            "看質量才知溫度"
          ],
          "answerIndex": 2,
          "rationales": [
            "數值較低。",
            "不相同。",
            "90大於30。",
            "溫度已給。"
          ],
          "reviewEvidence": "90°C水滴：90大於30；30°C水桶：數值較低；必定相同：不相同；看質量才知溫度：溫度已給。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "比較"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_145_12",
          "stem": "要比較兩物體冷卻時放熱量，至少還需哪些資料？",
          "options": [
            "只有初溫",
            "位置與價格",
            "顏色與名稱",
            "質量、材質比熱與溫差"
          ],
          "answerIndex": 3,
          "rationales": [
            "缺終溫等。",
            "位置與價格不會進入Q＝mcΔT，拿消費資訊代替物理量會漏掉質量、比熱與溫差。",
            "不足以算熱量。",
            "Q與m、c、ΔT相關。"
          ],
          "reviewEvidence": "質量、材質比熱與溫差：Q與m、c、ΔT相關；只有初溫：缺終溫等；位置與價格：位置與價格不會進入Q＝mcΔT，拿消費資訊代替物理量會漏掉質量、比熱與溫差；顏色與名稱：不足以算熱量。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "資訊需求"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_145_01",
          "stimulusId": "PHYCHM_R4_STIM_145",
          "stem": "甲與乙起初何者溫度較高？",
          "options": [
            "甲",
            "相同",
            "乙",
            "無法測量"
          ],
          "answerIndex": 1,
          "rationales": [
            "沒有較高。",
            "均為60°C。",
            "沒有較高。",
            "表中已給。"
          ],
          "reviewEvidence": "相同：均為60°C；甲：沒有較高；乙：沒有較高；無法測量：表中已給。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "表格判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_145_02",
          "stimulusId": "PHYCHM_R4_STIM_145",
          "stem": "甲與丙質量相同，30分鐘內何者溫降較大？",
          "options": [
            "相同",
            "甲",
            "乙",
            "丙"
          ],
          "answerIndex": 1,
          "rationales": [
            "數值不同。",
            "甲降30°C。",
            "題目指定甲丙。",
            "丙降12°C。"
          ],
          "reviewEvidence": "甲：甲降30°C；相同：數值不同；乙：題目指定甲丙；丙：丙降12°C。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "數值比較"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_145_03",
          "stimulusId": "PHYCHM_R4_STIM_145",
          "stem": "為何不能只由乙終溫較高就說乙吸熱？",
          "options": [
            "終溫高必定吸熱",
            "質量大不會放熱",
            "乙仍由60°C降至38°C，過程是放熱",
            "環境25°C比乙高"
          ],
          "answerIndex": 2,
          "rationales": [
            "終溫須與初溫比。",
            "質量不改方向。",
            "乙冷卻且高於環境。",
            "25低於38。"
          ],
          "reviewEvidence": "乙仍由60°C降至38°C，過程是放熱：乙冷卻且高於環境；終溫高必定吸熱：終溫須與初溫比；質量大不會放熱：質量不改方向；環境25°C比乙高：25低於38。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "趨勢解釋"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S146",
      "title": "判斷熱由高溫物體傳向低溫物體",
      "authorityRefs": [
        "AUTH-NATURAL-LC-AB-4-2",
        "AUTH-NATURAL-LC-BA-4-1",
        "AUTH-NATURAL-LC-BB-4-1",
        "AUTH-NATURAL-LC-BB-4-2",
        "AUTH-NATURAL-LC-BB-4-3",
        "AUTH-NATURAL-LC-BB-4-5",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "curriculum": "十二年國教自然科學第四學習階段熱學與能量",
        "calibration": "臺灣國中教育會考自然科熱量、比熱、相變與生活現象題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_146",
        "objective": "能由接觸物體的溫度差判斷淨熱流方向，追蹤吸熱放熱與平衡，並區分熱流方向和物體內能總量。",
        "sections": [
          {
            "title": "方向只看當下溫差",
            "body": "兩物體有熱接觸時，淨熱由高溫端傳向低溫端，直到達平衡。大物體不一定是放熱端，質量也不決定方向；只要小物體溫度較高，仍會把能量傳給較冷的大物體。"
          },
          {
            "title": "系統邊界決定吸放熱說法",
            "body": "熱流入某物體就說它吸熱，熱流出就說它放熱。例如冰放進溫水，冰吸熱、溫水放熱。若連容器與環境也交換能量，分析時須交代是否忽略。"
          },
          {
            "title": "平衡不等於沒有微觀運動",
            "body": "達相同溫度後沒有淨熱流，但粒子仍運動，微觀能量交換也可持續且雙向平均相等。若環境溫度又改變，原平衡會被打破並產生新的熱流。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_146_EX_01",
            "prompt": "80°C金屬塊放入20°C水中，初期熱流方向？",
            "steps": [
              "比較80與20",
              "找高溫端",
              "畫向低溫箭頭"
            ],
            "answer": "由金屬塊流向水。",
            "why": "金屬塊溫度較高而放熱，水吸熱升溫；方向不因水質量可能較大而改變。"
          },
          {
            "id": "PHYCHM_R4_L_146_EX_02",
            "prompt": "5°C飲料放在25°C房間，飲料吸熱還是放熱？",
            "steps": [
              "比較飲料與室溫",
              "判斷熱進入飲料",
              "預測升溫"
            ],
            "answer": "飲料吸熱。",
            "why": "環境比飲料熱，能量由空氣與接觸面流入飲料，直到接近室溫。"
          },
          {
            "id": "PHYCHM_R4_L_146_EX_03",
            "prompt": "兩杯水都是40°C並接觸，是否有淨熱流？",
            "steps": [
              "確認無溫差",
              "區分微觀交換",
              "判斷淨值"
            ],
            "answer": "沒有淨熱流。",
            "why": "兩邊同溫時平均交換相抵，不會有固定方向的淨能量轉移；粒子運動並未停止。"
          }
        ],
        "misconceptions": [
          {
            "belief": "熱一定由質量大的物體流向小物體。",
            "whyWrong": "方向由溫度差決定。",
            "correction": "先比較接觸時溫度。"
          },
          {
            "belief": "冰使水變冷是冷量流入水。",
            "whyWrong": "實際是水的能量流向冰。",
            "correction": "冰吸熱，水放熱。"
          },
          {
            "belief": "同溫後粒子完全停止。",
            "whyWrong": "熱平衡不代表微觀運動停止。",
            "correction": "只有淨熱流為零。"
          },
          {
            "belief": "物體溫度下降代表沒有能量傳出。",
            "whyWrong": "下降通常正是放熱結果。",
            "correction": "追蹤系統的能量流向。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_146",
        "title": "三物體接觸前後",
        "body": "甲、乙、丙可兩兩接觸，忽略環境；初溫如下。",
        "dataTable": {
          "columns": [
            "物體",
            "初溫/°C",
            "質量/g"
          ],
          "rows": [
            [
              "甲",
              "70",
              "50"
            ],
            [
              "乙",
              "30",
              "500"
            ],
            [
              "丙",
              "30",
              "20"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_146_01",
          "stem": "90°C湯與25°C湯匙接觸，熱流向何處？",
          "options": [
            "湯匙",
            "都不流",
            "湯",
            "由質量大者決定"
          ],
          "answerIndex": 0,
          "rationales": [
            "湯匙較冷。",
            "有溫差。",
            "湯是高溫端。",
            "方向不由質量。"
          ],
          "reviewEvidence": "湯匙：湯匙較冷；都不流：有溫差；湯：湯是高溫端；由質量大者決定：方向不由質量。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "方向判斷"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_146_02",
          "stem": "冰塊放入水中，冰塊的能量變化為何？",
          "options": [
            "吸熱",
            "放熱",
            "必定不變",
            "產生冷量"
          ],
          "answerIndex": 0,
          "rationales": [
            "水通常較熱。",
            "方向相反。",
            "會升溫或融化。",
            "沒有冷量傳遞。"
          ],
          "reviewEvidence": "吸熱：水通常較熱；放熱：方向相反；必定不變：會升溫或融化；產生冷量：沒有冷量傳遞。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "吸放熱"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_146_03",
          "stem": "熱平衡時哪項正確？",
          "options": [
            "粒子停止",
            "材質相同",
            "質量相等",
            "接觸物體同溫且無淨熱流"
          ],
          "answerIndex": 3,
          "rationales": [
            "仍運動。",
            "熱平衡只要求溫度相同且無淨熱流，接觸物體仍可由不同材質製成。",
            "質量不是熱平衡條件；不同質量的物體也能達到相同溫度。",
            "這是平衡判準。"
          ],
          "reviewEvidence": "接觸物體同溫且無淨熱流：這是平衡判準；粒子停止：仍運動；材質相同：熱平衡只要求溫度相同且無淨熱流，接觸物體仍可由不同材質製成；質量相等：質量不是熱平衡條件；不同質量的物體也能達到相同溫度。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "定義"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_146_04",
          "stem": "一小塊100°C金屬接觸一大盆20°C水，初始方向？",
          "options": [
            "沒有熱流",
            "水到金屬",
            "金屬到水",
            "因水較多所以不定"
          ],
          "answerIndex": 2,
          "rationales": [
            "有溫差。",
            "方向相反。",
            "金屬溫度高。",
            "質量不改初始方向。"
          ],
          "reviewEvidence": "金屬到水：金屬溫度高；沒有熱流：有溫差；水到金屬：方向相反；因水較多所以不定：質量不改初始方向。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "概念應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_146_05",
          "stem": "冷藏牛奶放桌上逐漸變暖，能量來源主要為何？",
          "options": [
            "溫度計",
            "牛奶產生冷量",
            "質量消失",
            "較暖環境"
          ],
          "answerIndex": 3,
          "rationales": [
            "溫度計只量測。",
            "沒有冷量。",
            "質量未消失。",
            "環境向牛奶傳熱。"
          ],
          "reviewEvidence": "較暖環境：環境向牛奶傳熱；溫度計：溫度計只量測；牛奶產生冷量：沒有冷量；質量消失：質量未消失。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "生活解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_146_06",
          "stem": "甲放熱給乙時，短時間內哪項可能？",
          "options": [
            "乙一定放熱",
            "甲乙都必定降溫",
            "熱由乙流回甲為淨方向",
            "甲降溫、乙升溫"
          ],
          "answerIndex": 3,
          "rationales": [
            "方向相反。",
            "乙吸熱。",
            "淨方向已知。",
            "未相變時常見結果。"
          ],
          "reviewEvidence": "甲降溫、乙升溫：未相變時常見結果；乙一定放熱：方向相反；甲乙都必定降溫：乙吸熱；熱由乙流回甲為淨方向：淨方向已知。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "結果預測"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_146_07",
          "stem": "若環境比已達平衡的兩物體更冷，接下來如何？",
          "options": [
            "兩物體會向環境放熱",
            "永遠保持不變",
            "較冷環境會向已平衡的較熱物體持續放熱",
            "質量變零"
          ],
          "answerIndex": 0,
          "rationales": [
            "物體溫度較高。",
            "新溫差打破平衡。",
            "方向相反。",
            "向較冷環境放熱不會使物體質量歸零，這把能量轉移誤當成物質消失。"
          ],
          "reviewEvidence": "兩物體會向環境放熱：物體溫度較高；永遠保持不變：新溫差打破平衡；較冷環境會向已平衡的較熱物體持續放熱：方向相反；質量變零：向較冷環境放熱不會使物體質量歸零，這把能量轉移誤當成物質消失。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "系統推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_146_08",
          "stem": "木桌與金屬桌同為25°C，摸起來金屬較冷，能否說金屬溫度較低？",
          "options": [
            "不能，觸感還受導熱快慢影響",
            "不能，因兩種材料都會向手傳入所謂冷量",
            "能，觸感就是溫度計",
            "能，金屬沒有溫度"
          ],
          "answerIndex": 0,
          "rationales": [
            "金屬更快帶走手的熱。",
            "無冷量概念。",
            "觸感非精確量測。",
            "金屬有溫度。"
          ],
          "reviewEvidence": "不能，觸感還受導熱快慢影響：金屬更快帶走手的熱；不能，因兩種材料都會向手傳入所謂冷量：無冷量概念；能，觸感就是溫度計：觸感非精確量測；能，金屬沒有溫度：金屬有溫度。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "現象解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_146_09",
          "stem": "熱流方向在何時可能反轉？",
          "options": [
            "顏色改變時必反轉",
            "質量不變時永不反轉",
            "單位改寫時",
            "外界加熱使原低溫端變成高溫端"
          ],
          "answerIndex": 3,
          "rationales": [
            "顏色不決定。",
            "質量不是關鍵。",
            "單位不改物理。",
            "方向隨當下溫差。"
          ],
          "reviewEvidence": "外界加熱使原低溫端變成高溫端：方向隨當下溫差；顏色改變時必反轉：顏色不決定；質量不變時永不反轉：質量不是關鍵；單位改寫時：單位不改物理。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_146_10",
          "stem": "物體A溫度不變，能否斷定沒有熱交換？",
          "options": [
            "不能，因溫度沒有單位",
            "不能，可能同時吸放熱相等或正在相變",
            "能，熱量必為零",
            "能，絕對沒有粒子運動"
          ],
          "answerIndex": 1,
          "rationales": [
            "溫度有單位。",
            "淨效應可為零或能量用於相變。",
            "交換量未必零。",
            "粒子仍動。"
          ],
          "reviewEvidence": "不能，可能同時吸放熱相等或正在相變：淨效應可為零或能量用於相變；不能，因溫度沒有單位：溫度有單位；能，熱量必為零：交換量未必零；能，絕對沒有粒子運動：粒子仍動。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "反例推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_146_11",
          "stem": "保溫杯能完全阻止熱傳嗎？",
          "options": [
            "能，保溫杯內沒有任何粒子，所以溫度永久固定",
            "不能，因它會製冷",
            "不能，只能降低傳熱速率",
            "能，溫度永遠固定"
          ],
          "answerIndex": 2,
          "rationales": [
            "杯內有物質。",
            "不主動製冷。",
            "實際隔熱非完美。",
            "仍會慢慢接近平衡。"
          ],
          "reviewEvidence": "不能，只能降低傳熱速率：實際隔熱非完美；能，保溫杯內沒有任何粒子，所以溫度永久固定：杯內有物質；不能，因它會製冷：不主動製冷；能，溫度永遠固定：仍會慢慢接近平衡。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "工程理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_146_12",
          "stem": "要判斷兩物體接觸後初始熱流，最低限度需知道什麼？",
          "options": [
            "顏色",
            "兩者接觸時溫度",
            "只知道兩物體價格就能判斷初始熱流方向",
            "名稱長度"
          ],
          "answerIndex": 1,
          "rationales": [
            "顏色不能決定淨熱流方向；必須比較接觸當下的溫度。",
            "比較高低即可判初向。",
            "價格是消費資訊，不是熱學狀態量，無法指出哪一端溫度較高。",
            "名稱長短和物體溫度沒有固定關係，不能用來判定熱流。"
          ],
          "reviewEvidence": "兩者接觸時溫度：比較高低即可判初向；顏色：顏色不能決定淨熱流方向；必須比較接觸當下的溫度；只知道兩物體價格就能判斷初始熱流方向：價格是消費資訊，不是熱學狀態量，無法指出哪一端溫度較高；名稱長度：名稱長短和物體溫度沒有固定關係，不能用來判定熱流。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "資訊選擇"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_146_01",
          "stimulusId": "PHYCHM_R4_STIM_146",
          "stem": "甲與乙接觸，初始熱流方向為何？",
          "options": [
            "由乙質量大決定",
            "乙到甲",
            "甲到乙",
            "無淨流"
          ],
          "answerIndex": 2,
          "rationales": [
            "質量不決定方向。",
            "方向反。",
            "70°C高於30°C。",
            "有溫差。"
          ],
          "reviewEvidence": "甲到乙：70°C高於30°C；由乙質量大決定：質量不決定方向；乙到甲：方向反；無淨流：有溫差。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "表格應用"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_146_02",
          "stimulusId": "PHYCHM_R4_STIM_146",
          "stem": "乙與丙接觸初始是否有淨熱流？",
          "options": [
            "因質量不同必有",
            "丙到乙",
            "沒有",
            "乙到丙"
          ],
          "answerIndex": 2,
          "rationales": [
            "質量差不產生方向。",
            "無溫差。",
            "兩者均30°C。",
            "無溫差。"
          ],
          "reviewEvidence": "沒有：兩者均30°C；因質量不同必有：質量差不產生方向；丙到乙：無溫差；乙到丙：無溫差。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "平衡判斷"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_146_03",
          "stimulusId": "PHYCHM_R4_STIM_146",
          "stem": "甲先與乙達平衡後再接觸丙，為何需知道平衡溫度才能判斷新方向？",
          "options": [
            "只看甲原溫",
            "新方向取決於甲乙系統與丙的當下溫差",
            "只看乙質量",
            "方向永遠甲到丙"
          ],
          "answerIndex": 1,
          "rationales": [
            "原溫不再代表當下。",
            "前次交換已改變溫度。",
            "質量不足以判方向。",
            "甲、乙先達平衡後溫度已改變，若新溫低於丙，熱流就不會由甲指向丙。"
          ],
          "reviewEvidence": "新方向取決於甲乙系統與丙的當下溫差：前次交換已改變溫度；只看甲原溫：原溫不再代表當下；只看乙質量：質量不足以判方向；方向永遠甲到丙：甲、乙先達平衡後溫度已改變，若新溫低於丙，熱流就不會由甲指向丙。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "序列推理"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S147",
      "title": "計算水溫變化對應的熱量",
      "authorityRefs": [
        "AUTH-NATURAL-LC-AB-4-2",
        "AUTH-NATURAL-LC-BA-4-1",
        "AUTH-NATURAL-LC-BB-4-1",
        "AUTH-NATURAL-LC-BB-4-2",
        "AUTH-NATURAL-LC-BB-4-3",
        "AUTH-NATURAL-LC-BB-4-5",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "curriculum": "十二年國教自然科學第四學習階段熱學與能量",
        "calibration": "臺灣國中教育會考自然科熱量、比熱、相變與生活現象題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_147",
        "objective": "能使用Q＝mcΔT計算水在未相變時的吸放熱量，正確處理質量、比熱、溫差、單位與正負方向。",
        "sections": [
          {
            "title": "公式中的四個量",
            "body": "熱量Q等於質量m、比熱c與溫度變化ΔT的乘積。水常取c＝4.2 J/(g·°C)。質量用g時可直接配此單位，ΔT為終溫減初溫。"
          },
          {
            "title": "大小與方向分開",
            "body": "升溫時物體吸熱，ΔT為正；降溫時放熱，若求放出熱量大小可取溫差絕對值。計算前先說明研究的是水吸收或放出的能量。"
          },
          {
            "title": "公式有適用條件",
            "body": "Q＝mcΔT適用於物質同一相態內的溫度改變。沸騰或熔化平台另涉及潛熱，不能只因溫度不變就算Q為零。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_147_EX_01",
            "prompt": "100 g水由20°C升到30°C，c＝4.2 J/(g·°C)，吸熱多少？",
            "steps": [
              "ΔT＝10°C",
              "代入100×4.2×10",
              "標J"
            ],
            "answer": "4200 J。",
            "why": "Q＝mcΔT＝100×4.2×(30－20)＝4200 J；水升溫，所以是吸收4200 J。"
          },
          {
            "id": "PHYCHM_R4_L_147_EX_02",
            "prompt": "200 g水由50°C降到40°C，放熱量大小？",
            "steps": [
              "溫降10°C",
              "代入200×4.2×10",
              "判斷放熱"
            ],
            "answer": "8400 J。",
            "why": "放熱量大小為200×4.2×10＝8400 J；若以水吸收熱量為正，則Q可寫−8400 J。"
          },
          {
            "id": "PHYCHM_R4_L_147_EX_03",
            "prompt": "同量水升5°C與升15°C，吸熱量比為何？",
            "steps": [
              "m與c相同",
              "比較ΔT",
              "5:15化簡"
            ],
            "answer": "1：3。",
            "why": "質量與比熱固定時Q和ΔT成正比，因此5°C與15°C對應1：3。"
          }
        ],
        "misconceptions": [
          {
            "belief": "終溫30°C就把30直接當ΔT。",
            "whyWrong": "溫差須扣除初溫。",
            "correction": "先算終溫減初溫。"
          },
          {
            "belief": "質量用kg也可直接乘4.2。",
            "whyWrong": "4.2的質量單位是g。",
            "correction": "統一單位或改用4200 J/(kg·°C)。"
          },
          {
            "belief": "降溫表示熱量大小為負。",
            "whyWrong": "負號描述方向，大小仍為正。",
            "correction": "明確區分Q符號與放熱量大小。"
          },
          {
            "belief": "沸騰時ΔT為0，所以完全不吸熱。",
            "whyWrong": "相變仍需能量。",
            "correction": "相變不能只用mcΔT處理。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_147",
        "title": "三次水加熱資料",
        "body": "忽略散熱，水比熱取4.2 J/(g·°C)。",
        "dataTable": {
          "columns": [
            "組別",
            "質量/g",
            "初溫/°C",
            "終溫/°C"
          ],
          "rows": [
            [
              "甲",
              "100",
              "20",
              "25"
            ],
            [
              "乙",
              "100",
              "20",
              "30"
            ],
            [
              "丙",
              "200",
              "20",
              "25"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_147_01",
          "stem": "Q＝mcΔT中m代表？",
          "options": [
            "時間",
            "質量",
            "體積",
            "溫度"
          ],
          "answerIndex": 1,
          "rationales": [
            "式中無時間。",
            "m為質量。",
            "式中無體積。",
            "溫差是ΔT。"
          ],
          "reviewEvidence": "質量：m為質量；時間：式中無時間；體積：式中無體積；溫度：溫差是ΔT。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "公式辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_147_02",
          "stem": "水由15°C升到23°C，ΔT為？",
          "options": [
            "38°C",
            "8°C",
            "−8°C",
            "23°C"
          ],
          "answerIndex": 1,
          "rationales": [
            "誤加。",
            "23－15＝8。",
            "方向相反。",
            "是終溫。"
          ],
          "reviewEvidence": "8°C：23－15＝8；38°C：誤加；−8°C：方向相反；23°C：是終溫。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "計算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_147_03",
          "stem": "50 g水升10°C吸熱？",
          "options": [
            "2100 J",
            "21000 J",
            "500 J",
            "420 J"
          ],
          "answerIndex": 0,
          "rationales": [
            "50×4.2×10。",
            "多十倍。",
            "未用比熱。",
            "少乘5。"
          ],
          "reviewEvidence": "2100 J：50×4.2×10；21000 J：多十倍；500 J：未用比熱；420 J：少乘5。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "公式運算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_147_04",
          "stem": "同溫差下水量加倍，吸熱量如何？",
          "options": [
            "不變",
            "變零",
            "加倍",
            "減半"
          ],
          "answerIndex": 2,
          "rationales": [
            "忽略質量。",
            "無依據。",
            "Q與m成正比。",
            "方向反。"
          ],
          "reviewEvidence": "加倍：Q與m成正比；不變：忽略質量；變零：無依據；減半：方向反。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "比例"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_147_05",
          "stem": "100 g水由40°C降20°C，放熱量大小？",
          "options": [
            "8400 J",
            "4200 J",
            "800 J",
            "16800 J"
          ],
          "answerIndex": 0,
          "rationales": [
            "100×4.2×20。",
            "少一半。",
            "未正確乘。",
            "多一倍。"
          ],
          "reviewEvidence": "8400 J：100×4.2×20；4200 J：少一半；800 J：未正確乘；16800 J：多一倍。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "運算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_147_06",
          "stem": "使用c＝4.2 J/(g·°C)時，2 kg水應先寫成？",
          "options": [
            "0.002 g",
            "200 g",
            "20 g",
            "2000 g"
          ],
          "answerIndex": 3,
          "rationales": [
            "換算反向。",
            "少十倍。",
            "少百倍。",
            "1 kg＝1000 g。"
          ],
          "reviewEvidence": "2000 g：1 kg＝1000 g；0.002 g：換算反向；200 g：少十倍；20 g：少百倍。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "換算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_147_07",
          "stem": "水吸收840 J、質量20 g，升溫多少？",
          "options": [
            "10°C",
            "100°C",
            "20°C",
            "4°C"
          ],
          "answerIndex": 0,
          "rationales": [
            "840÷(20×4.2)＝10。",
            "多十倍。",
            "等同質量。",
            "誤除。"
          ],
          "reviewEvidence": "10°C：840÷(20×4.2)＝10；100°C：多十倍；20°C：等同質量；4°C：誤除。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "公式變形"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_147_08",
          "stem": "水降溫時，若以吸熱為正，Q符號為？",
          "options": [
            "無單位",
            "正",
            "一定零",
            "負"
          ],
          "answerIndex": 3,
          "rationales": [
            "仍有J。",
            "正代表吸熱。",
            "有溫變。",
            "水放出能量。"
          ],
          "reviewEvidence": "負：水放出能量；無單位：仍有J；正：正代表吸熱；一定零：有溫變。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "符號判斷"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_147_09",
          "stem": "何時不能只用mcΔT？",
          "options": [
            "液態水20升30°C",
            "液態水降5°C",
            "水正在沸騰相變",
            "同相態小溫變"
          ],
          "answerIndex": 2,
          "rationales": [
            "可用。",
            "可用。",
            "相變需潛熱。",
            "可用。"
          ],
          "reviewEvidence": "水正在沸騰相變：相變需潛熱；液態水20升30°C：可用；液態水降5°C：可用；同相態小溫變：可用。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "適用判斷"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_147_10",
          "stem": "Q相同、同為水，質量越大則ΔT？",
          "options": [
            "必為零",
            "越小",
            "越大",
            "不變"
          ],
          "answerIndex": 1,
          "rationales": [
            "不必為零。",
            "ΔT＝Q/(mc)。",
            "關係相反。",
            "m會影響。"
          ],
          "reviewEvidence": "越小：ΔT＝Q/(mc)；必為零：不必為零；越大：關係相反；不變：m會影響。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "關係推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_147_11",
          "stem": "100 g水升1°C與10 g水升10°C吸熱相比？",
          "options": [
            "前者十倍",
            "無法",
            "後者十倍",
            "相同"
          ],
          "answerIndex": 3,
          "rationales": [
            "乘積相同。",
            "資料足夠。",
            "乘積相同。",
            "mΔT皆100。"
          ],
          "reviewEvidence": "相同：mΔT皆100；前者十倍：乘積相同；無法：資料足夠；後者十倍：乘積相同。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "等量推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_147_12",
          "stem": "實測吸熱比理論小，最可能因何簡化失效？",
          "options": [
            "質量必增加",
            "實測偏小是因焦耳並不是能量的單位",
            "部分能量散失到環境",
            "水沒有比熱"
          ],
          "answerIndex": 2,
          "rationales": [
            "不必增加。",
            "J是能量。",
            "加熱非完全絕熱。",
            "水有比熱。"
          ],
          "reviewEvidence": "部分能量散失到環境：加熱非完全絕熱；質量必增加：不必增加；實測偏小是因焦耳並不是能量的單位：J是能量；水沒有比熱：水有比熱。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "誤差解釋"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_147_01",
          "stimulusId": "PHYCHM_R4_STIM_147",
          "stem": "甲吸熱多少？",
          "options": [
            "2100 J",
            "8400 J",
            "4200 J",
            "1050 J"
          ],
          "answerIndex": 0,
          "rationales": [
            "100×4.2×5。",
            "對應丙兩倍。",
            "對應乙。",
            "少一半。"
          ],
          "reviewEvidence": "2100 J：100×4.2×5；8400 J：對應丙兩倍；4200 J：對應乙；1050 J：少一半。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_147_02",
          "stimulusId": "PHYCHM_R4_STIM_147",
          "stem": "乙與甲吸熱量比？",
          "options": [
            "4：1",
            "2：1",
            "1：1",
            "1：2"
          ],
          "answerIndex": 1,
          "rationales": [
            "多估。",
            "質量同，溫差10比5。",
            "忽略溫差。",
            "反向。"
          ],
          "reviewEvidence": "2：1：質量同，溫差10比5；4：1：多估；1：1：忽略溫差；1：2：反向。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "比例"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_147_03",
          "stimulusId": "PHYCHM_R4_STIM_147",
          "stem": "甲與丙吸熱量關係？",
          "options": [
            "相同",
            "丙是甲四倍",
            "甲是丙兩倍",
            "丙是甲兩倍"
          ],
          "answerIndex": 3,
          "rationales": [
            "忽略質量。",
            "過大。",
            "方向反。",
            "溫差同，質量兩倍。"
          ],
          "reviewEvidence": "丙是甲兩倍：溫差同，質量兩倍；相同：忽略質量；丙是甲四倍：過大；甲是丙兩倍：方向反。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料推理"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S148",
      "title": "比較不同物質比熱與升溫差異",
      "authorityRefs": [
        "AUTH-NATURAL-LC-AB-4-2",
        "AUTH-NATURAL-LC-BA-4-1",
        "AUTH-NATURAL-LC-BB-4-1",
        "AUTH-NATURAL-LC-BB-4-2",
        "AUTH-NATURAL-LC-BB-4-3",
        "AUTH-NATURAL-LC-BB-4-5",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "curriculum": "十二年國教自然科學第四學習階段熱學與能量",
        "calibration": "臺灣國中教育會考自然科熱量、比熱、相變與生活現象題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_148",
        "objective": "能把比熱解釋為單位質量升高1°C所需熱量，於質量與吸熱相同時比較升溫，並連結海陸溫差及材料選擇。",
        "sections": [
          {
            "title": "比熱是材料的熱性質",
            "body": "比熱較大表示相同質量升高1°C需要更多能量。水比熱大，吸收同量熱時溫度變化較小；金屬比熱多較小，常較快升溫。"
          },
          {
            "title": "比較前先控制其他量",
            "body": "由ΔT＝Q/(mc)可知，要用升溫比較比熱，Q和m須相同。若樣品質量不同或散熱不同，不能只看溫升就排名比熱。"
          },
          {
            "title": "生活效應有條件",
            "body": "水體升降溫較慢，有助緩和沿海日夜溫差；鍋具升溫快還涉及導熱性，不可把比熱與導熱率混成同一性質。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_148_EX_01",
            "prompt": "同質量甲乙吸收同熱量，甲升20°C、乙升5°C，何者比熱大？",
            "steps": [
              "Q與m相同",
              "ΔT和c反比",
              "選溫升較小者"
            ],
            "answer": "乙。",
            "why": "乙在相同能量下只升5°C，表示每升1°C需要較多能量，因此比熱較大。"
          },
          {
            "id": "PHYCHM_R4_L_148_EX_02",
            "prompt": "水與砂白天受相近日照，水升溫較慢，如何解釋？",
            "steps": [
              "比較比熱",
              "連結同能量溫升",
              "限制在其他條件近似"
            ],
            "answer": "水的比熱較大。",
            "why": "相近質量吸收相近能量時，水因比熱較大而溫升較小；實際環境還受蒸發、流動等影響。"
          },
          {
            "id": "PHYCHM_R4_L_148_EX_03",
            "prompt": "同量熱給100 g與200 g同材質，哪個升溫較小？",
            "steps": [
              "c相同",
              "Q相同",
              "比較m"
            ],
            "answer": "200 g樣品。",
            "why": "ΔT＝Q/(mc)，質量加倍時溫升減半；這不是比熱改變。"
          }
        ],
        "misconceptions": [
          {
            "belief": "比熱大代表物體一定比較熱。",
            "whyWrong": "比熱不是當下溫度。",
            "correction": "比熱描述升溫所需能量。"
          },
          {
            "belief": "升溫快就只可能因比熱小。",
            "whyWrong": "質量、功率與散熱也會影響。",
            "correction": "控制其他條件再比較。"
          },
          {
            "belief": "比熱與導熱快慢完全相同。",
            "whyWrong": "兩者是不同材料性質。",
            "correction": "分別討論儲熱與傳熱。"
          },
          {
            "belief": "樣品變多會使材質比熱變大。",
            "whyWrong": "比熱是單位質量性質。",
            "correction": "總熱容量會增大，比熱不因此改變。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_148",
        "title": "同功率加熱三種液體",
        "body": "各取100 g，以相同加熱器加熱120 s，忽略散熱。",
        "dataTable": {
          "columns": [
            "液體",
            "初溫/°C",
            "終溫/°C"
          ],
          "rows": [
            [
              "甲",
              "20",
              "32"
            ],
            [
              "乙",
              "20",
              "25"
            ],
            [
              "丙",
              "20",
              "40"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_148_01",
          "stem": "比熱較大表示？",
          "options": [
            "導電較強",
            "單位質量升1°C需較多熱",
            "質量較大",
            "當下溫度較高"
          ],
          "answerIndex": 1,
          "rationales": [
            "無必然關係。",
            "定義如此。",
            "非質量。",
            "非溫度。"
          ],
          "reviewEvidence": "單位質量升1°C需較多熱：定義如此；導電較強：無必然關係；質量較大：非質量；當下溫度較高：非溫度。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "定義"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_148_02",
          "stem": "同m、Q時，比熱大者ΔT？",
          "options": [
            "必為零",
            "較大",
            "較小",
            "相同"
          ],
          "answerIndex": 2,
          "rationales": [
            "不必為零。",
            "方向反。",
            "ΔT與c反比。",
            "c不同會影響。"
          ],
          "reviewEvidence": "較小：ΔT與c反比；必為零：不必為零；較大：方向反；相同：c不同會影響。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "比例"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_148_03",
          "stem": "水比熱大有何日常表現？",
          "options": [
            "吸收較多熱才有相同溫升",
            "一定導熱最快",
            "一定沸點最低",
            "沒有溫度"
          ],
          "answerIndex": 0,
          "rationales": [
            "符合比熱。",
            "導熱另論。",
            "無此關係。",
            "水有溫度。"
          ],
          "reviewEvidence": "吸收較多熱才有相同溫升：符合比熱；一定導熱最快：導熱另論；一定沸點最低：無此關係；沒有溫度：水有溫度。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "生活連結"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_148_04",
          "stem": "比較比熱時為何控制質量？",
          "options": [
            "質量等於比熱",
            "質量也會影響溫升",
            "質量沒有單位",
            "控制質量是為了改變受測材料的名稱"
          ],
          "answerIndex": 1,
          "rationales": [
            "兩者不同。",
            "ΔT受m影響。",
            "有單位。",
            "控制質量不會改變材料名稱；目的是排除Q＝mcΔT中的m對溫升的影響。"
          ],
          "reviewEvidence": "質量也會影響溫升：ΔT受m影響；質量等於比熱：兩者不同；質量沒有單位：有單位；控制質量是為了改變受測材料的名稱：控制質量不會改變材料名稱；目的是排除Q＝mcΔT中的m對溫升的影響。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "實驗設計"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_148_05",
          "stem": "同量水，吸熱加倍時溫升如何？",
          "options": [
            "歸零",
            "加倍",
            "不變",
            "減半"
          ],
          "answerIndex": 1,
          "rationales": [
            "無依據。",
            "ΔT與Q成正比。",
            "忽略Q。",
            "方向反。"
          ],
          "reviewEvidence": "加倍：ΔT與Q成正比；歸零：無依據；不變：忽略Q；減半：方向反。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "比例"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_148_06",
          "stem": "100 g銅與200 g銅比熱如何？",
          "options": [
            "後者兩倍",
            "無法定義",
            "相同",
            "前者兩倍"
          ],
          "answerIndex": 2,
          "rationales": [
            "總熱容量才較大。",
            "可定義。",
            "同材質比熱相同。",
            "比熱是材質性質；兩塊都是銅，質量加倍不會使比熱減半或加倍。"
          ],
          "reviewEvidence": "相同：同材質比熱相同；後者兩倍：總熱容量才較大；無法定義：可定義；前者兩倍：比熱是材質性質；兩塊都是銅，質量加倍不會使比熱減半或加倍。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "概念比較"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_148_07",
          "stem": "沿海日夜溫差常較小，水的哪項性質有助解釋？",
          "options": [
            "不會蒸發",
            "永不流動",
            "比熱較大",
            "密度必為零"
          ],
          "answerIndex": 2,
          "rationales": [
            "水會蒸發。",
            "水會流動。",
            "水溫變化較慢。",
            "密度不為零。"
          ],
          "reviewEvidence": "比熱較大：水溫變化較慢；不會蒸發：水會蒸發；永不流動：水會流動；密度必為零：密度不為零。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "現象解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_148_08",
          "stem": "金屬摸起來冷能直接證明比熱小嗎？",
          "options": [
            "能，金屬無溫度",
            "不能，因金屬完全不會傳熱，所以觸感無效",
            "能，觸感只由比熱",
            "不能，觸感也受導熱性影響"
          ],
          "answerIndex": 3,
          "rationales": [
            "金屬有溫度。",
            "金屬會傳熱。",
            "因素不只比熱。",
            "導熱快會快速帶走手熱。"
          ],
          "reviewEvidence": "不能，觸感也受導熱性影響：導熱快會快速帶走手熱；能，金屬無溫度：金屬有溫度；不能，因金屬完全不會傳熱，所以觸感無效：金屬會傳熱；能，觸感只由比熱：因素不只比熱。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "反例分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_148_09",
          "stem": "同條件加熱，A升8°C、B升16°C，何者比熱較小？",
          "options": [
            "A",
            "相同",
            "看顏色",
            "B"
          ],
          "answerIndex": 3,
          "rationales": [
            "A溫升小。",
            "不相同。",
            "顏色未出現在Q＝mcΔT中；同質量同供熱量時應比較溫升。",
            "溫升較大表示c較小。"
          ],
          "reviewEvidence": "B：溫升較大表示c較小；A：A溫升小；相同：不相同；看顏色：顏色未出現在Q＝mcΔT中；同質量同供熱量時應比較溫升。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "資料推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_148_10",
          "stem": "保溫材料選擇只看比熱是否充分？",
          "options": [
            "不充分，還要看導熱與結構",
            "充分，比熱一項即可決定所有材料的隔熱效果",
            "充分，質量無關",
            "不充分，因沒有熱傳"
          ],
          "answerIndex": 0,
          "rationales": [
            "保溫重點還含傳熱阻力。",
            "過度簡化。",
            "質量可影響熱容量。",
            "仍有熱傳。"
          ],
          "reviewEvidence": "不充分，還要看導熱與結構：保溫重點還含傳熱阻力；充分，比熱一項即可決定所有材料的隔熱效果：過度簡化；充分，質量無關：質量可影響熱容量；不充分，因沒有熱傳：仍有熱傳。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_148_11",
          "stem": "比熱單位J/(g·°C)表示什麼？",
          "options": [
            "每焦耳的克數",
            "每克每升1°C所需焦耳",
            "每秒溫度",
            "每公尺能量"
          ],
          "answerIndex": 1,
          "rationales": [
            "倒置。",
            "單位直接解讀。",
            "無時間。",
            "無長度。"
          ],
          "reviewEvidence": "每克每升1°C所需焦耳：單位直接解讀；每焦耳的克數：倒置；每秒溫度：無時間；每公尺能量：無長度。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "單位解讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_148_12",
          "stem": "加熱實驗散熱不同會造成何問題？",
          "options": [
            "吸收熱量不再相同，不能只由ΔT比比熱",
            "比熱自動相同",
            "質量消失",
            "溫度計失去單位"
          ],
          "answerIndex": 0,
          "rationales": [
            "Q條件未控制。",
            "無此效果。",
            "散熱會改變測得溫升，但不會使樣品質量憑空消失。",
            "仍有單位。"
          ],
          "reviewEvidence": "吸收熱量不再相同，不能只由ΔT比比熱：Q條件未控制；比熱自動相同：無此效果；質量消失：散熱會改變測得溫升，但不會使樣品質量憑空消失；溫度計失去單位：仍有單位。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "限制判斷"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_148_01",
          "stimulusId": "PHYCHM_R4_STIM_148",
          "stem": "哪種液體比熱最大？",
          "options": [
            "丙",
            "甲",
            "乙",
            "相同"
          ],
          "answerIndex": 2,
          "rationales": [
            "丙升20°C。",
            "甲升12°C。",
            "乙溫升最小5°C。",
            "不同。"
          ],
          "reviewEvidence": "乙：乙溫升最小5°C；丙：丙升20°C；甲：甲升12°C；相同：不同。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "表格推理"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_148_02",
          "stimulusId": "PHYCHM_R4_STIM_148",
          "stem": "比熱最小者為？",
          "options": [
            "甲",
            "乙",
            "無法",
            "丙"
          ],
          "answerIndex": 3,
          "rationales": [
            "居中。",
            "最大比熱。",
            "控制條件足夠。",
            "丙溫升最大。"
          ],
          "reviewEvidence": "丙：丙溫升最大；甲：居中；乙：最大比熱；無法：控制條件足夠。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "比較"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_148_03",
          "stimulusId": "PHYCHM_R4_STIM_148",
          "stem": "若丙改取200 g，其溫升約為？",
          "options": [
            "10°C",
            "20°C",
            "40°C",
            "5°C"
          ],
          "answerIndex": 0,
          "rationales": [
            "質量加倍，溫升減半。",
            "原值。",
            "加倍錯誤。",
            "減為四分之一。"
          ],
          "reviewEvidence": "10°C：質量加倍，溫升減半；20°C：原值；40°C：加倍錯誤；5°C：減為四分之一。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "模型預測"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S149",
      "title": "由質量、比熱與溫差比較吸放熱",
      "authorityRefs": [
        "AUTH-NATURAL-LC-AB-4-2",
        "AUTH-NATURAL-LC-BA-4-1",
        "AUTH-NATURAL-LC-BB-4-1",
        "AUTH-NATURAL-LC-BB-4-2",
        "AUTH-NATURAL-LC-BB-4-3",
        "AUTH-NATURAL-LC-BB-4-5",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "curriculum": "十二年國教自然科學第四學習階段熱學與能量",
        "calibration": "臺灣國中教育會考自然科熱量、比熱、相變與生活現象題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_149",
        "objective": "能不必逐題完整計算，利用m、c、|ΔT|的乘積比較同相態物體吸放熱大小，並用能量守恆檢查混合題。",
        "sections": [
          {
            "title": "三因子共同決定",
            "body": "未相變時熱量大小為mc|ΔT|。只比較其中一項可能錯判；質量較小的物體若比熱或溫差較大，仍可能交換較多能量。"
          },
          {
            "title": "比例法減少運算",
            "body": "若兩物體同材質，比熱可約去；同質量時則比較c|ΔT|。先列比值再代數字，可避免把初溫當溫差。"
          },
          {
            "title": "隔離系統中的守恆",
            "body": "忽略環境與容器吸熱時，熱物體放出的熱量等於冷物體吸收的熱量。若實測不等，可能有散熱、相變或容器熱容量未納入。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_149_EX_01",
            "prompt": "同材質A為100 g降20°C，B為200 g降5°C，誰放熱較多？",
            "steps": [
              "約去c",
              "比較m|ΔT|",
              "A=2000、B=1000"
            ],
            "answer": "A是B的2倍。",
            "why": "同材質時只比質量乘溫差：100×20對200×5，故A放熱量較大。"
          },
          {
            "id": "PHYCHM_R4_L_149_EX_02",
            "prompt": "同質量水與油都升10°C，水比熱為油2倍，吸熱比？",
            "steps": [
              "約去m與ΔT",
              "比較c",
              "寫水:油"
            ],
            "answer": "2：1。",
            "why": "其餘量相同時Q和比熱成正比，所以水需兩倍熱量。"
          },
          {
            "id": "PHYCHM_R4_L_149_EX_03",
            "prompt": "隔熱混合中熱水放4200 J，冷水應吸收多少？",
            "steps": [
              "設定系統隔熱",
              "套用能量守恆",
              "大小相等方向相反"
            ],
            "answer": "4200 J。",
            "why": "忽略容器與環境時，熱水失去的能量全由冷水取得。"
          }
        ],
        "misconceptions": [
          {
            "belief": "質量大者一定交換較多熱。",
            "whyWrong": "比熱與溫差也參與。",
            "correction": "比較mc|ΔT|。"
          },
          {
            "belief": "放熱量一定小於零，所以不能比較大小。",
            "whyWrong": "負號只表方向。",
            "correction": "大小用絕對值比較。"
          },
          {
            "belief": "混合後兩物體熱量都相同。",
            "whyWrong": "守恆的是交換量大小，不是內能總量。",
            "correction": "區分能量轉移與物體總能量。"
          },
          {
            "belief": "有散熱時仍可令兩物體吸放熱完全相等。",
            "whyWrong": "環境也取得能量。",
            "correction": "把環境或容器納入系統。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_149",
        "title": "三金屬塊冷卻",
        "body": "三塊皆未相變；列出質量、比熱與溫降。",
        "dataTable": {
          "columns": [
            "金屬",
            "m/g",
            "c/(J/g°C)",
            "溫降/°C"
          ],
          "rows": [
            [
              "甲",
              "100",
              "0.4",
              "20"
            ],
            [
              "乙",
              "200",
              "0.2",
              "20"
            ],
            [
              "丙",
              "100",
              "0.8",
              "10"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_149_01",
          "stem": "熱量大小比較應看？",
          "options": [
            "只看m",
            "只比較兩物體的最終溫度即可得到熱量大小",
            "只看顏色",
            "mc|ΔT|"
          ],
          "answerIndex": 3,
          "rationales": [
            "少c、ΔT。",
            "不是溫差。",
            "顏色不能取代質量、比熱與溫差，無法由顏色計算熱量。",
            "三因子完整。"
          ],
          "reviewEvidence": "mc|ΔT|：三因子完整；只看m：少c、ΔT；只比較兩物體的最終溫度即可得到熱量大小：不是溫差；只看顏色：顏色不能取代質量、比熱與溫差，無法由顏色計算熱量。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "公式"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_149_02",
          "stem": "同材質同溫差，m比2:3，Q比？",
          "options": [
            "1:1",
            "4:9",
            "3:2",
            "2:3"
          ],
          "answerIndex": 3,
          "rationales": [
            "忽略m。",
            "誤平方。",
            "反向。",
            "Q正比m。"
          ],
          "reviewEvidence": "2:3：Q正比m；1:1：忽略m；4:9：誤平方；3:2：反向。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "比例"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_149_03",
          "stem": "同m同ΔT，c比3:1，Q比？",
          "options": [
            "1:1",
            "3:1",
            "1:3",
            "9:1"
          ],
          "answerIndex": 1,
          "rationales": [
            "忽略c。",
            "Q正比c。",
            "反向。",
            "誤平方。"
          ],
          "reviewEvidence": "3:1：Q正比c；1:1：忽略c；1:3：反向；9:1：誤平方。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "比例"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_149_04",
          "stem": "同m同c，溫降15與5°C，放熱比？",
          "options": [
            "1:1",
            "3:1",
            "9:1",
            "1:3"
          ],
          "answerIndex": 1,
          "rationales": [
            "忽略溫差。",
            "15:5。",
            "誤平方。",
            "反向。"
          ],
          "reviewEvidence": "3:1：15:5；1:1：忽略溫差；9:1：誤平方；1:3：反向。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "比例"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_149_05",
          "stem": "隔熱系統A放100 J，B吸？",
          "options": [
            "100 J",
            "50 J",
            "0 J",
            "200 J"
          ],
          "answerIndex": 0,
          "rationales": [
            "交換量守恆。",
            "少一半。",
            "違反守恆。",
            "多一倍。"
          ],
          "reviewEvidence": "100 J：交換量守恆；50 J：少一半；0 J：違反守恆；200 J：多一倍。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "守恆"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_149_06",
          "stem": "若容器也升溫，熱物放熱等於？",
          "options": [
            "只等於冷物",
            "一定為零",
            "冷物吸熱加容器吸熱",
            "只等於容器"
          ],
          "answerIndex": 2,
          "rationales": [
            "漏掉容器。",
            "有交換。",
            "能量分給兩者。",
            "漏掉冷物。"
          ],
          "reviewEvidence": "冷物吸熱加容器吸熱：能量分給兩者；只等於冷物：漏掉容器；一定為零：有交換；只等於容器：漏掉冷物。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "能量帳"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_149_07",
          "stem": "A的m兩倍、c一半、ΔT相同，Q與B相比？",
          "options": [
            "四倍",
            "一半",
            "兩倍",
            "相同"
          ],
          "answerIndex": 3,
          "rationales": [
            "誤乘。",
            "未乘m。",
            "未乘c。",
            "2×1/2＝1。"
          ],
          "reviewEvidence": "相同：2×1/2＝1；四倍：誤乘；一半：未乘m；兩倍：未乘c。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "乘積推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_149_08",
          "stem": "降溫30°C的10 g物體與降3°C的100 g同材質，放熱？",
          "options": [
            "相同",
            "後者十倍",
            "無法",
            "前者十倍"
          ],
          "answerIndex": 0,
          "rationales": [
            "mΔT皆300。",
            "乘積相同。",
            "資料足夠。",
            "乘積相同。"
          ],
          "reviewEvidence": "相同：mΔT皆300；後者十倍：乘積相同；無法：資料足夠；前者十倍：乘積相同。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "比較"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_149_09",
          "stem": "放熱Q寫負號表示？",
          "options": [
            "計算錯誤",
            "熱量大小為負物質",
            "能量離開所選系統",
            "溫度必低於0"
          ],
          "answerIndex": 2,
          "rationales": [
            "可為正確慣例。",
            "大小仍正。",
            "符號表方向。",
            "無此關係。"
          ],
          "reviewEvidence": "能量離開所選系統：符號表方向；計算錯誤：可為正確慣例；熱量大小為負物質：大小仍正；溫度必低於0：無此關係。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "概念"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_149_10",
          "stem": "混合實測熱失不等於熱得，先檢查？",
          "options": [
            "座號",
            "環境散熱與容器吸熱",
            "名稱",
            "顏色"
          ],
          "answerIndex": 1,
          "rationales": [
            "座號與能量收支無關，應先查容器、溫度計及環境的吸放熱。",
            "常見能量去向。",
            "物體名稱不能量化散熱或容器吸熱，不能解釋熱失與熱得的差。",
            "顏色不是這次量熱計算中的能量項，不能用來修正差值。"
          ],
          "reviewEvidence": "環境散熱與容器吸熱：常見能量去向；座號：座號與能量收支無關，應先查容器、溫度計及環境的吸放熱；名稱：物體名稱不能量化散熱或容器吸熱，不能解釋熱失與熱得的差；顏色：顏色不是這次量熱計算中的能量項，不能用來修正差值。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "誤差"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_149_11",
          "stem": "比較相變中的熱量可只用mcΔT嗎？",
          "options": [
            "能，相態無關",
            "不能使用mcΔT，是因相變時沒有任何能量轉移",
            "不能，還要考慮潛熱",
            "能，ΔT必大"
          ],
          "answerIndex": 2,
          "rationales": [
            "相態很重要。",
            "仍有能量。",
            "相變吸放潛熱。",
            "平台ΔT可零。"
          ],
          "reviewEvidence": "不能，還要考慮潛熱：相變吸放潛熱；能，相態無關：相態很重要；不能使用mcΔT，是因相變時沒有任何能量轉移：仍有能量；能，ΔT必大：平台ΔT可零。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "適用性"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_149_12",
          "stem": "要使比較只反映比熱，須固定？",
          "options": [
            "質量與溫差",
            "只有終溫",
            "顏色與形狀",
            "材質與比熱"
          ],
          "answerIndex": 0,
          "rationales": [
            "約去m、ΔT。",
            "只固定終溫仍可能有不同質量與不同初溫，無法把差異只歸因於比熱。",
            "顏色與形狀不是Q＝mcΔT中待控制的主要變量，質量與溫差仍未固定。",
            "材質是比較對象。"
          ],
          "reviewEvidence": "質量與溫差：約去m、ΔT；只有終溫：只固定終溫仍可能有不同質量與不同初溫，無法把差異只歸因於比熱；顏色與形狀：顏色與形狀不是Q＝mcΔT中待控制的主要變量，質量與溫差仍未固定；材質與比熱：材質是比較對象。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "設計"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_149_01",
          "stimulusId": "PHYCHM_R4_STIM_149",
          "stem": "甲放熱量？",
          "options": [
            "80 J",
            "1600 J",
            "400 J",
            "800 J"
          ],
          "answerIndex": 3,
          "rationales": [
            "少十倍。",
            "多倍。",
            "少半。",
            "100×0.4×20。"
          ],
          "reviewEvidence": "800 J：100×0.4×20；80 J：少十倍；1600 J：多倍；400 J：少半。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_149_02",
          "stimulusId": "PHYCHM_R4_STIM_149",
          "stem": "甲乙放熱關係？",
          "options": [
            "乙兩倍",
            "相同",
            "甲四倍",
            "甲兩倍"
          ],
          "answerIndex": 1,
          "rationales": [
            "依表中m、c與溫差計算，乙不是甲的兩倍；不能只挑單一欄位作比。",
            "兩者皆800 J。",
            "甲的mc|ΔT|並非乙的四倍，這個倍數沒有對應表中乘積。",
            "甲也不是乙的兩倍；兩組熱量須各自代入質量、比熱與溫差。"
          ],
          "reviewEvidence": "相同：兩者皆800 J；乙兩倍：依表中m、c與溫差計算，乙不是甲的兩倍；不能只挑單一欄位作比；甲四倍：甲的mc|ΔT|並非乙的四倍，這個倍數沒有對應表中乘積；甲兩倍：甲也不是乙的兩倍；兩組熱量須各自代入質量、比熱與溫差。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "比較"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_149_03",
          "stimulusId": "PHYCHM_R4_STIM_149",
          "stem": "丙放熱與甲相比？",
          "options": [
            "一半",
            "兩倍",
            "相同",
            "四倍"
          ],
          "answerIndex": 2,
          "rationales": [
            "錯。",
            "錯。",
            "100×0.8×10＝800。",
            "錯。"
          ],
          "reviewEvidence": "相同：100×0.8×10＝800；一半：錯；兩倍：錯；四倍：錯。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料推理"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S150",
      "title": "解讀加熱冷卻曲線與相變平台",
      "authorityRefs": [
        "AUTH-NATURAL-LC-AB-4-2",
        "AUTH-NATURAL-LC-BA-4-1",
        "AUTH-NATURAL-LC-BB-4-1",
        "AUTH-NATURAL-LC-BB-4-2",
        "AUTH-NATURAL-LC-BB-4-3",
        "AUTH-NATURAL-LC-BB-4-5",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "curriculum": "十二年國教自然科學第四學習階段熱學與能量",
        "calibration": "臺灣國中教育會考自然科熱量、比熱、相變與生活現象題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_150",
        "objective": "能從溫度—時間曲線辨認升溫、降溫與相變平台，判斷各段相態並比較斜率，而不把水平段誤認為停止供熱。",
        "sections": [
          {
            "title": "斜段代表同相態溫變",
            "body": "固定功率加熱時，曲線上升表示溫度增加；同質量下斜率還受比熱影響。冷卻曲線向下，不能只由斜率判斷物質名稱。"
          },
          {
            "title": "平台常對應相變",
            "body": "純物質在固定壓力熔化或沸騰時可出現近水平段，能量用於改變粒子排列或分離程度，溫度暫時近似不變。"
          },
          {
            "title": "平台前後辨相態",
            "body": "加熱曲線的熔點平台前多為固態，平台中固液共存，之後為液態；沸點平台中液氣共存。須看曲線方向與題目條件。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_150_EX_01",
            "prompt": "純物質加熱曲線在60°C水平5分鐘，最可能發生什麼？",
            "steps": [
              "確認持續加熱",
              "辨認恆溫平台",
              "查前後相態"
            ],
            "answer": "可能正在相變。",
            "why": "能量仍輸入但溫度近似不變，符合熔化或沸騰平台；需由前後狀態決定是哪一種。"
          },
          {
            "id": "PHYCHM_R4_L_150_EX_02",
            "prompt": "平台前是固體、平台後是液體，平台代表？",
            "steps": [
              "讀前相態",
              "讀後相態",
              "判斷固到液"
            ],
            "answer": "熔化。",
            "why": "平台期間固液共存，吸收的能量用於破壞部分粒子間束縛。"
          },
          {
            "id": "PHYCHM_R4_L_150_EX_03",
            "prompt": "同功率下A斜率較小，能否直接說A質量相同且比熱大？",
            "steps": [
              "列斜率因素",
              "檢查質量是否已知",
              "限制結論"
            ],
            "answer": "只有質量等條件相同時才可如此推論。",
            "why": "升溫速率同時受功率、質量、比熱與散熱影響。"
          }
        ],
        "misconceptions": [
          {
            "belief": "平台表示加熱器關閉。",
            "whyWrong": "相變中可持續吸熱而溫度不變。",
            "correction": "查看供熱與相態證據。"
          },
          {
            "belief": "平台中物質只有一種相態。",
            "whyWrong": "相變過程常兩相共存。",
            "correction": "標出起點、終點與共存區。"
          },
          {
            "belief": "所有水平線都一定是沸騰。",
            "whyWrong": "也可能是熔化或儀器限制。",
            "correction": "結合前後相態。"
          },
          {
            "belief": "曲線越陡代表溫度越高。",
            "whyWrong": "斜率代表變化速率，不是當下值。",
            "correction": "分開讀座標與斜率。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_150",
        "title": "物質X加熱紀錄",
        "body": "固定功率加熱，0分鐘時為固體。",
        "dataTable": {
          "columns": [
            "時間/min",
            "0",
            "2",
            "4",
            "6",
            "8",
            "10",
            "12"
          ],
          "rows": [
            [
              "溫度/°C",
              "20",
              "40",
              "60",
              "60",
              "60",
              "80",
              "100"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_150_01",
          "stem": "加熱曲線上升斜段表示？",
          "options": [
            "加熱曲線的上升斜段表示樣品質量持續增加",
            "時間停止",
            "溫度隨時間增加",
            "必定相變"
          ],
          "answerIndex": 2,
          "rationales": [
            "無依據。",
            "時間前進。",
            "座標如此。",
            "平台較常見。"
          ],
          "reviewEvidence": "溫度隨時間增加：座標如此；加熱曲線的上升斜段表示樣品質量持續增加：無依據；時間停止：時間前進；必定相變：平台較常見。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "圖表"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_150_02",
          "stem": "持續供熱的水平段最可能？",
          "options": [
            "無能量輸入",
            "溫度計消失",
            "質量變零",
            "相變"
          ],
          "answerIndex": 3,
          "rationales": [
            "題面持續供熱。",
            "溫度計仍在量測；水平線不能解讀成儀器從裝置中消失。",
            "相變時物質仍在系統內，持續供熱不會使其質量突然歸零。",
            "潛熱吸收。"
          ],
          "reviewEvidence": "相變：潛熱吸收；無能量輸入：題面持續供熱；溫度計消失：溫度計仍在量測；水平線不能解讀成儀器從裝置中消失；質量變零：相變時物質仍在系統內，持續供熱不會使其質量突然歸零。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "現象"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_150_03",
          "stem": "熔化平台中相態？",
          "options": [
            "固液共存",
            "只有氣態",
            "只有固態",
            "真空"
          ],
          "answerIndex": 0,
          "rationales": [
            "熔化進行中。",
            "熔化是固態轉成液態，平台期間不是只有氣態。",
            "僅平台前。",
            "平台中的樣品仍是固液混合物，不會因熔化形成真空。"
          ],
          "reviewEvidence": "固液共存：熔化進行中；只有氣態：熔化是固態轉成液態，平台期間不是只有氣態；只有固態：僅平台前；真空：平台中的樣品仍是固液混合物，不會因熔化形成真空。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "概念"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_150_04",
          "stem": "沸騰平台後繼續加熱氣體，曲線通常？",
          "options": [
            "必下降",
            "再上升",
            "變成質量軸",
            "永遠水平"
          ],
          "answerIndex": 1,
          "rationales": [
            "供熱下非必然。",
            "氣體溫度可上升。",
            "座標不變。",
            "相變完成後改變。"
          ],
          "reviewEvidence": "再上升：氣體溫度可上升；必下降：供熱下非必然；變成質量軸：座標不變；永遠水平：相變完成後改變。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "預測"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_150_05",
          "stem": "冷卻曲線平台可能表示？",
          "options": [
            "凝固或凝結",
            "加熱停止",
            "只可能熔化",
            "沒有能量交換"
          ],
          "answerIndex": 0,
          "rationales": [
            "放熱相變可恆溫。",
            "是冷卻。",
            "方向不符。",
            "仍放熱。"
          ],
          "reviewEvidence": "凝固或凝結：放熱相變可恆溫；加熱停止：是冷卻；只可能熔化：方向不符；沒有能量交換：仍放熱。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_150_06",
          "stem": "斜率單位若縱軸°C、橫軸min，為？",
          "options": [
            "min/°C²",
            "°C/min",
            "J",
            "g/°C"
          ],
          "answerIndex": 1,
          "rationales": [
            "多平方。",
            "縱除橫。",
            "能量單位。",
            "非斜率。"
          ],
          "reviewEvidence": "°C/min：縱除橫；min/°C²：多平方；J：能量單位；g/°C：非斜率。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "單位"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_150_07",
          "stem": "曲線較陡直接代表？",
          "options": [
            "溫度變化較快",
            "質量一定較少",
            "溫度一定較高",
            "比熱一定較小"
          ],
          "answerIndex": 0,
          "rationales": [
            "斜率較大。",
            "也需條件。",
            "當下值另讀。",
            "需控制條件。"
          ],
          "reviewEvidence": "溫度變化較快：斜率較大；質量一定較少：也需條件；溫度一定較高：當下值另讀；比熱一定較小：需控制條件。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "圖表解讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_150_08",
          "stem": "辨認平台是熔化或沸騰，最需知道？",
          "options": [
            "只看曲線線條顏色就能判斷熔化或沸騰平台",
            "紙張大小",
            "樣品價格",
            "平台前後相態"
          ],
          "answerIndex": 3,
          "rationales": [
            "線條顏色只是繪圖方式，不能指出平台前後的固、液、氣相態。",
            "紙張大小不改變樣品相態，也不能區分熔化與沸騰。",
            "價格不包含相態資訊，無法判斷平台對應的相變種類。",
            "決定相變種類。"
          ],
          "reviewEvidence": "平台前後相態：決定相變種類；只看曲線線條顏色就能判斷熔化或沸騰平台：線條顏色只是繪圖方式，不能指出平台前後的固、液、氣相態；紙張大小：紙張大小不改變樣品相態，也不能區分熔化與沸騰；樣品價格：價格不包含相態資訊，無法判斷平台對應的相變種類。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "資訊選擇"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_150_09",
          "stem": "混合物相變是否必有完全水平平台？",
          "options": [
            "一定",
            "不一定，可能跨溫度範圍",
            "永不相變",
            "只在0°C"
          ],
          "answerIndex": 1,
          "rationales": [
            "過度絕對。",
            "組成可使範圍展寬。",
            "會相變。",
            "非限定。"
          ],
          "reviewEvidence": "不一定，可能跨溫度範圍：組成可使範圍展寬；一定：過度絕對；永不相變：會相變；只在0°C：非限定。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "邊界"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_150_10",
          "stem": "平台越長，在同功率同質量下通常表示？",
          "options": [
            "時間更短",
            "溫度更高",
            "相變吸收或放出能量較多",
            "沒有相變"
          ],
          "answerIndex": 2,
          "rationales": [
            "實際更長。",
            "平台溫度另讀。",
            "能量＝功率×時間。",
            "平台支持相變。"
          ],
          "reviewEvidence": "相變吸收或放出能量較多：能量＝功率×時間；時間更短：實際更長；溫度更高：平台溫度另讀；沒有相變：平台支持相變。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "能量推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_150_11",
          "stem": "溫度計量程頂端造成水平線，如何排除是假平台？",
          "options": [
            "換更大量程並觀察相態",
            "刪除線段",
            "直接宣稱沸騰",
            "增加顏色"
          ],
          "answerIndex": 0,
          "rationales": [
            "檢查儀器飽和。",
            "不解決。",
            "證據不足。",
            "增加圖線顏色不會擴大溫度計量程，仍無法排除頂格造成的假平台。"
          ],
          "reviewEvidence": "換更大量程並觀察相態：檢查儀器飽和；刪除線段：不解決；直接宣稱沸騰：證據不足；增加顏色：增加圖線顏色不會擴大溫度計量程，仍無法排除頂格造成的假平台。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "實驗批判"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_150_12",
          "stem": "平台中持續吸熱卻不升溫，能量主要用於？",
          "options": [
            "增加質量",
            "消除原子",
            "改變粒子間排列與距離",
            "停止粒子運動"
          ],
          "answerIndex": 2,
          "rationales": [
            "質量近似守恆。",
            "原子不消失。",
            "相態改變。",
            "仍運動。"
          ],
          "reviewEvidence": "改變粒子間排列與距離：相態改變；增加質量：質量近似守恆；消除原子：原子不消失；停止粒子運動：仍運動。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "粒子解釋"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_150_01",
          "stimulusId": "PHYCHM_R4_STIM_150",
          "stem": "平台溫度？",
          "options": [
            "80°C",
            "100°C",
            "40°C",
            "60°C"
          ],
          "answerIndex": 3,
          "rationales": [
            "後段。",
            "末值。",
            "前段。",
            "4至8分皆60。"
          ],
          "reviewEvidence": "60°C：4至8分皆60；80°C：後段；100°C：末值；40°C：前段。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "讀值"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_150_02",
          "stimulusId": "PHYCHM_R4_STIM_150",
          "stem": "平台歷時多久？",
          "options": [
            "2 min",
            "8 min",
            "6 min",
            "4 min"
          ],
          "answerIndex": 3,
          "rationales": [
            "少。",
            "起點時間。",
            "多。",
            "4到8分。"
          ],
          "reviewEvidence": "4 min：4到8分；2 min：少；8 min：起點時間；6 min：多。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_150_03",
          "stimulusId": "PHYCHM_R4_STIM_150",
          "stem": "已知初態固體，平台最可能？",
          "options": [
            "凝固",
            "沸騰",
            "熔化",
            "凝結"
          ],
          "answerIndex": 2,
          "rationales": [
            "為冷卻。",
            "需先液態高溫。",
            "固體加熱後成液體。",
            "為冷卻。"
          ],
          "reviewEvidence": "熔化：固體加熱後成液體；凝固：為冷卻；沸騰：需先液態高溫；凝結：為冷卻。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "相態推理"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S151",
      "title": "說明相變期間能量改變但溫度可不變",
      "authorityRefs": [
        "AUTH-NATURAL-LC-AB-4-2",
        "AUTH-NATURAL-LC-BA-4-1",
        "AUTH-NATURAL-LC-BB-4-1",
        "AUTH-NATURAL-LC-BB-4-2",
        "AUTH-NATURAL-LC-BB-4-3",
        "AUTH-NATURAL-LC-BB-4-5",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "curriculum": "十二年國教自然科學第四學習階段熱學與能量",
        "calibration": "臺灣國中教育會考自然科熱量、比熱、相變與生活現象題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_151",
        "objective": "能以粒子間位能變化解釋熔化、汽化、凝固與凝結期間溫度可保持不變，並判斷各相變吸放熱方向。",
        "sections": [
          {
            "title": "溫度反映平均動能",
            "body": "相變平台中溫度近似不變，表示粒子平均動能沒有明顯增加；輸入或釋出的能量主要改變粒子間距與排列所關聯的位能。"
          },
          {
            "title": "分開需要能量，靠近放出能量",
            "body": "熔化與汽化使粒子較鬆散，需要吸熱；凝固與凝結使粒子較有序或靠近，會放熱。物質仍可在恆溫相變中和環境交換大量能量。"
          },
          {
            "title": "完成比例隨能量改變",
            "body": "平台期間持續加熱時，液化或汽化的比例增加；同一壓力下純物質溫度保持相變點附近。相變完成後，再供熱才主要反映為新相態升溫。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_151_EX_01",
            "prompt": "0°C冰熔化時持續吸熱，為何仍約0°C？",
            "steps": [
              "確認正在熔化",
              "區分動能與位能",
              "追蹤液態比例"
            ],
            "answer": "能量用於改變粒子排列，液態比例增加。",
            "why": "熔化完成前，平均動能與溫度近似不變，吸收的能量主要克服粒子間作用。"
          },
          {
            "id": "PHYCHM_R4_L_151_EX_02",
            "prompt": "水蒸氣凝結成水時吸熱還是放熱？",
            "steps": [
              "辨認氣到液",
              "粒子靠近",
              "判斷向環境放能"
            ],
            "answer": "放熱。",
            "why": "凝結使粒子由分散氣態轉為較靠近的液態，多餘能量傳給環境。"
          },
          {
            "id": "PHYCHM_R4_L_151_EX_03",
            "prompt": "沸水持續加熱，水量減少但溫度近似不變，能量去哪裡？",
            "steps": [
              "確認沸騰",
              "觀察氣態量增加",
              "連結汽化潛熱"
            ],
            "answer": "用於把液態水轉成水蒸氣。",
            "why": "能量增加粒子分離所需位能，而非繼續提高液體平均動能。"
          }
        ],
        "misconceptions": [
          {
            "belief": "溫度不變就沒有吸放熱。",
            "whyWrong": "相變可在恆溫下交換潛熱。",
            "correction": "觀察相態比例與能量方向。"
          },
          {
            "belief": "凝結會吸熱。",
            "whyWrong": "氣體粒子靠近時向外放能。",
            "correction": "凝結、凝固為放熱相變。"
          },
          {
            "belief": "平台中粒子完全靜止。",
            "whyWrong": "平均動能不增加不等於零。",
            "correction": "粒子仍運動且相態比例改變。"
          },
          {
            "belief": "沸騰後供熱只會讓液體超過沸點。",
            "whyWrong": "開放定壓下先促進汽化。",
            "correction": "相變完成後才看氣體升溫。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_151",
        "title": "冰水混合物吸熱",
        "body": "0°C、100 g冰水混合物持續吸熱，壓力固定。數值依相同量熱條件記錄，熱量取到0.1 kJ。",
        "dataTable": {
          "columns": [
            "累積吸熱/kJ",
            "冰/g",
            "水/g",
            "溫度/°C"
          ],
          "rows": [
            [
              "0",
              "80",
              "20",
              "0"
            ],
            [
              "8",
              "56",
              "44",
              "0"
            ],
            [
              "16",
              "32",
              "68",
              "0"
            ],
            [
              "24",
              "8",
              "92",
              "0"
            ],
            [
              "27.1",
              "0",
              "100",
              "1"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_151_01",
          "stem": "熔化是吸熱或放熱？",
          "options": [
            "只看質量",
            "吸熱",
            "無能量",
            "放熱"
          ],
          "answerIndex": 1,
          "rationales": [
            "相變方向已知。",
            "固到液需能量。",
            "有潛熱。",
            "方向反。"
          ],
          "reviewEvidence": "吸熱：固到液需能量；只看質量：相變方向已知；無能量：有潛熱；放熱：方向反。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_151_02",
          "stem": "凝固過程？",
          "options": [
            "溫度必升",
            "吸熱",
            "不交換",
            "放熱"
          ],
          "answerIndex": 3,
          "rationales": [
            "平台可不變。",
            "方向反。",
            "有交換。",
            "液到固放能。"
          ],
          "reviewEvidence": "放熱：液到固放能；溫度必升：平台可不變；吸熱：方向反；不交換：有交換。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_151_03",
          "stem": "汽化期間能量主要改變？",
          "options": [
            "粒子間位能",
            "總質量必增加",
            "原子種類",
            "電荷"
          ],
          "answerIndex": 0,
          "rationales": [
            "粒子分離。",
            "不增加。",
            "元素不變。",
            "非重點。"
          ],
          "reviewEvidence": "粒子間位能：粒子分離；總質量必增加：不增加；原子種類：元素不變；電荷：非重點。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "微觀解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_151_04",
          "stem": "凝結常使周圍？",
          "options": [
            "失去所有能量",
            "變真空",
            "質量歸零",
            "得到熱量"
          ],
          "answerIndex": 3,
          "rationales": [
            "凝結會放出潛熱，但物體不會失去所有內能；把放熱誤成能量歸零。",
            "氣體凝結成液體不會把周圍抽成真空，周圍反而接收到熱量。",
            "守恆。",
            "物質放熱。"
          ],
          "reviewEvidence": "得到熱量：物質放熱；失去所有能量：凝結會放出潛熱，但物體不會失去所有內能；把放熱誤成能量歸零；變真空：氣體凝結成液體不會把周圍抽成真空，周圍反而接收到熱量；質量歸零：守恆。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "方向"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_151_05",
          "stem": "相變平台中溫度不變表示平均動能？",
          "options": [
            "必為零",
            "無限大",
            "近似不變",
            "等於質量"
          ],
          "answerIndex": 2,
          "rationales": [
            "粒子仍動。",
            "平台時溫度固定，粒子平均動能不會變成無限大。",
            "溫度對應平均動能。",
            "量綱不同。"
          ],
          "reviewEvidence": "近似不變：溫度對應平均動能；必為零：粒子仍動；無限大：平台時溫度固定，粒子平均動能不會變成無限大；等於質量：量綱不同。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "概念"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_151_06",
          "stem": "沸騰時持續供熱，最直接增加？",
          "options": [
            "沸點數值無限升",
            "液體質量",
            "原子數",
            "轉成氣態的比例"
          ],
          "answerIndex": 3,
          "rationales": [
            "定壓近似固定。",
            "液體量反而減。",
            "原子守恆。",
            "更多液體汽化。"
          ],
          "reviewEvidence": "轉成氣態的比例：更多液體汽化；沸點數值無限升：定壓近似固定；液體質量：液體量反而減；原子數：原子守恆。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "相態推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_151_07",
          "stem": "液化與凝結關係？",
          "options": [
            "液化與凝結都表示固體直接轉變成液體",
            "液體變氣體",
            "皆可指氣體變液體",
            "元素改變"
          ],
          "answerIndex": 2,
          "rationales": [
            "是熔化。",
            "是汽化。",
            "相同相態方向。",
            "非化學變化。"
          ],
          "reviewEvidence": "皆可指氣體變液體：相同相態方向；液化與凝結都表示固體直接轉變成液體：是熔化；液體變氣體：是汽化；元素改變：非化學變化。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "名詞"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_151_08",
          "stem": "冰熔化一半時系統含？",
          "options": [
            "只有冰",
            "冰與水",
            "只有蒸氣",
            "只有水"
          ],
          "answerIndex": 1,
          "rationales": [
            "已有熔化。",
            "兩相共存。",
            "非汽化。",
            "尚未完成。"
          ],
          "reviewEvidence": "冰與水：兩相共存；只有冰：已有熔化；只有蒸氣：非汽化；只有水：尚未完成。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "相態"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_151_09",
          "stem": "蒸發讓皮膚變涼，因為液體？",
          "options": [
            "放冷量",
            "凝固",
            "吸收皮膚熱量汽化",
            "變金屬"
          ],
          "answerIndex": 2,
          "rationales": [
            "無冷量。",
            "凝固是液體變固體，不是皮膚上液體分子逸出並帶走能量的蒸發。",
            "汽化吸熱。",
            "蒸發只改變相態與能量分布，液體不會因此轉化成金屬。"
          ],
          "reviewEvidence": "吸收皮膚熱量汽化：汽化吸熱；放冷量：無冷量；凝固：凝固是液體變固體，不是皮膚上液體分子逸出並帶走能量的蒸發；變金屬：蒸發只改變相態與能量分布，液體不會因此轉化成金屬。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "現象解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_151_10",
          "stem": "結霜是水蒸氣直接變固體，此過程？",
          "options": [
            "吸熱",
            "放熱",
            "無能量",
            "只升溫"
          ],
          "answerIndex": 1,
          "rationales": [
            "方向反。",
            "粒子更束縛。",
            "有潛熱。",
            "可恆溫。"
          ],
          "reviewEvidence": "放熱：粒子更束縛；吸熱：方向反；無能量：有潛熱；只升溫：可恆溫。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "遷移"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_151_11",
          "stem": "壓力改變時沸點可改變，這表示平台溫度？",
          "options": [
            "須連同壓力條件描述",
            "只由質量決定",
            "相變平台溫度永遠固定為100°C，與壓力無關",
            "沒有單位"
          ],
          "answerIndex": 0,
          "rationales": [
            "沸點受壓力影響。",
            "非質量決定。",
            "只在特定壓力近似。",
            "有°C。"
          ],
          "reviewEvidence": "須連同壓力條件描述：沸點受壓力影響；只由質量決定：非質量決定；相變平台溫度永遠固定為100°C，與壓力無關：只在特定壓力近似；沒有單位：有°C。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "條件分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_151_12",
          "stem": "平台終了後再供熱，溫度通常？",
          "options": [
            "開始改變",
            "永遠不變",
            "必降到零",
            "失去單位"
          ],
          "answerIndex": 0,
          "rationales": [
            "新相態開始升溫。",
            "相變已完成。",
            "無依據。",
            "仍有單位。"
          ],
          "reviewEvidence": "開始改變：新相態開始升溫；永遠不變：相變已完成；必降到零：無依據；失去單位：仍有單位。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "預測"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_151_01",
          "stimulusId": "PHYCHM_R4_STIM_151",
          "stem": "吸收24 kJ後熔化多少冰？",
          "options": [
            "92 g",
            "72 g",
            "8 g",
            "24 g"
          ],
          "answerIndex": 1,
          "rationales": [
            "是水總量。",
            "80－8＝72。",
            "是剩餘冰。",
            "把能量當質量。"
          ],
          "reviewEvidence": "72 g：80－8＝72；92 g：是水總量；8 g：是剩餘冰；24 g：把能量當質量。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "數據計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_151_02",
          "stimulusId": "PHYCHM_R4_STIM_151",
          "stem": "0到24 kJ溫度不變但何者改變？",
          "options": [
            "壓力",
            "元素種類",
            "總質量",
            "冰水比例"
          ],
          "answerIndex": 3,
          "rationales": [
            "題面固定。",
            "冰和水都是H₂O，熔化只改變相態比例，沒有改變元素種類。",
            "仍100 g。",
            "冰減水增。"
          ],
          "reviewEvidence": "冰水比例：冰減水增；壓力：題面固定；元素種類：冰和水都是H₂O，熔化只改變相態比例，沒有改變元素種類；總質量：仍100 g。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "表格解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_151_03",
          "stimulusId": "PHYCHM_R4_STIM_151",
          "stem": "累積吸熱27.1 kJ時溫度升到1°C，這項資料說明什麼？",
          "options": [
            "冰已全熔，後續熱量使液態水升溫",
            "液態水已經到達沸點",
            "仍有80 g冰與20 g水共存",
            "混合物在此之前沒有吸收熱量"
          ],
          "answerIndex": 0,
          "rationales": [
            "該列冰為0 g且水為100 g，離開0°C熔化平台後水升溫。",
            "表中溫度僅1°C，遠低於一般壓力下水的沸點。",
            "80 g冰只出現在累積吸熱0 kJ的起始列。",
            "累積吸熱欄已記為27.1 kJ，不能解讀為未吸熱。"
          ],
          "reviewEvidence": "冰已全熔，後續熱量使液態水升溫：該列冰為0 g且水為100 g，離開0°C熔化平台後水升溫；液態水已經到達沸點：表中溫度僅1°C，遠低於一般壓力下水的沸點；仍有80 g冰與20 g水共存：80 g冰只出現在累積吸熱0 kJ的起始列；混合物在此之前沒有吸收熱量：累積吸熱欄已記為27.1 kJ，不能解讀為未吸熱。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "分段推理"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S152",
      "title": "連結熱脹冷縮與生活現象",
      "authorityRefs": [
        "AUTH-NATURAL-LC-AB-4-2",
        "AUTH-NATURAL-LC-BA-4-1",
        "AUTH-NATURAL-LC-BB-4-1",
        "AUTH-NATURAL-LC-BB-4-2",
        "AUTH-NATURAL-LC-BB-4-3",
        "AUTH-NATURAL-LC-BB-4-5",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "curriculum": "十二年國教自然科學第四學習階段熱學與能量",
        "calibration": "臺灣國中教育會考自然科熱量、比熱、相變與生活現象題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_152",
        "objective": "能以粒子平均間距隨溫度改變解釋多數物質熱脹冷縮，分辨長度、面積與體積變化，並說明伸縮縫、溫度計與雙金屬片應用。",
        "sections": [
          {
            "title": "多數物質受熱膨脹",
            "body": "升溫時粒子振動加劇，平均間距常增加，使固體長度、液體體積或氣體體積改變；冷卻時通常收縮。這不是粒子本身變大，也不是增加物質。"
          },
          {
            "title": "結構需預留位移",
            "body": "橋梁、鐵軌與管線設伸縮縫，讓季節溫差產生的長度變化有空間。若完全固定，熱脹冷縮會累積應力而彎曲或破壞。"
          },
          {
            "title": "不同材料膨脹程度不同",
            "body": "雙金屬片由膨脹率不同的金屬結合，升溫時彎曲，可控制開關。液體溫度計利用液體體積變化，但讀值需校正；水在接近結冰時有特殊行為，不能把一般規則絕對化。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_152_EX_01",
            "prompt": "夏天鐵軌伸縮縫變小，原因？",
            "steps": [
              "確認升溫",
              "判斷鐵軌膨脹",
              "連結間隙變小"
            ],
            "answer": "鐵軌受熱伸長。",
            "why": "溫度升高使金屬平均粒子間距略增，各段向縫隙延伸，所以預留間隙變窄。"
          },
          {
            "id": "PHYCHM_R4_L_152_EX_02",
            "prompt": "金屬瓶蓋淋溫水後較易打開，可能原因？",
            "steps": [
              "金屬受熱",
              "瓶蓋直徑略增",
              "鬆開接合"
            ],
            "answer": "瓶蓋熱膨脹後較鬆。",
            "why": "適度加熱使金屬蓋尺寸略增，與瓶口咬合減弱；操作仍須避免燙傷與玻璃熱衝擊。"
          },
          {
            "id": "PHYCHM_R4_L_152_EX_03",
            "prompt": "雙金屬片受熱彎曲而非整片平移，為何？",
            "steps": [
              "兩金屬黏合",
              "膨脹量不同",
              "較長側形成外弧"
            ],
            "answer": "兩種金屬熱膨脹程度不同。",
            "why": "黏合限制它們分開伸長，膨脹較多的一層被迫位於外側，整片因此彎曲。"
          }
        ],
        "misconceptions": [
          {
            "belief": "熱膨脹是原子本身變大。",
            "whyWrong": "主要是平均間距改變。",
            "correction": "用粒子間距解釋尺寸變化。"
          },
          {
            "belief": "伸縮縫是施工沒接好。",
            "whyWrong": "它是容納溫度位移的設計。",
            "correction": "以降低熱應力說明用途。"
          },
          {
            "belief": "所有物質膨脹率都相同。",
            "whyWrong": "材料性質不同。",
            "correction": "比較膨脹係數與結構。"
          },
          {
            "belief": "冷卻一定讓任何物質體積單調變小。",
            "whyWrong": "水等物質在特定範圍有例外。",
            "correction": "一般規則須保留條件。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_152",
        "title": "三根金屬桿加熱",
        "body": "三桿原長均1000 mm，均勻升高50°C。丙與甲材質相同；表中長度是相同材質在未受限制時的預測值。",
        "dataTable": {
          "columns": [
            "金屬",
            "若自由伸長的預測長度/mm",
            "實際邊界條件與現象"
          ],
          "rows": [
            [
              "甲",
              "1000.6",
              "兩端可移動，保持筆直"
            ],
            [
              "乙",
              "1001.1",
              "兩端可移動，保持筆直"
            ],
            [
              "丙",
              "1000.6",
              "兩端固定，出現彎曲"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_152_01",
          "stem": "熱膨脹主要源自？",
          "options": [
            "原子數增加",
            "粒子平均間距增加",
            "質量加倍",
            "熱膨脹是因每個粒子本身受熱後變成巨型"
          ],
          "answerIndex": 1,
          "rationales": [
            "未增物質。",
            "微觀解釋正確。",
            "質量近似不變。",
            "粒子不如此變大。"
          ],
          "reviewEvidence": "粒子平均間距增加：微觀解釋正確；原子數增加：未增物質；質量加倍：質量近似不變；熱膨脹是因每個粒子本身受熱後變成巨型：粒子不如此變大。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "微觀解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_152_02",
          "stem": "橋梁設伸縮縫目的？",
          "options": [
            "阻止所有傳熱",
            "增加質量",
            "讓橋面漏水",
            "容納溫度造成的長度變化"
          ],
          "answerIndex": 3,
          "rationales": [
            "不能阻止所有熱傳。",
            "非目的。",
            "非目的。",
            "降低熱應力。"
          ],
          "reviewEvidence": "容納溫度造成的長度變化：降低熱應力；阻止所有傳熱：不能阻止所有熱傳；增加質量：非目的；讓橋面漏水：非目的。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_152_03",
          "stem": "金屬環加熱後內孔通常？",
          "options": [
            "變大",
            "不變",
            "消失",
            "變小"
          ],
          "answerIndex": 0,
          "rationales": [
            "整體等比例膨脹。",
            "尺寸會變。",
            "整個金屬環受熱時內外尺寸都膨脹，內孔不會憑空消失。",
            "非向內填滿。"
          ],
          "reviewEvidence": "變大：整體等比例膨脹；不變：尺寸會變；消失：整個金屬環受熱時內外尺寸都膨脹，內孔不會憑空消失；變小：非向內填滿。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "空間推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_152_04",
          "stem": "液體溫度計利用？",
          "options": [
            "液體溫度計利用液體質量隨升溫而消失",
            "玻璃導電",
            "液體體積隨溫度改變",
            "液體顏色必變"
          ],
          "answerIndex": 2,
          "rationales": [
            "質量不消失。",
            "非原理。",
            "液柱高度隨體積。",
            "不必變色。"
          ],
          "reviewEvidence": "液體體積隨溫度改變：液柱高度隨體積；液體溫度計利用液體質量隨升溫而消失：質量不消失；玻璃導電：非原理；液體顏色必變：不必變色。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "儀器理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_152_05",
          "stem": "鐵軌無縫又完全固定，夏季可能？",
          "options": [
            "受壓彎曲",
            "自動縮短",
            "質量歸零",
            "完全不受影響"
          ],
          "answerIndex": 0,
          "rationales": [
            "膨脹受限產生應力。",
            "升溫通常伸長。",
            "鐵軌受熱仍保有質量；風險來自受限膨脹產生的應力。",
            "忽略熱膨脹。"
          ],
          "reviewEvidence": "受壓彎曲：膨脹受限產生應力；自動縮短：升溫通常伸長；質量歸零：鐵軌受熱仍保有質量；風險來自受限膨脹產生的應力；完全不受影響：忽略熱膨脹。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "因果"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_152_06",
          "stem": "雙金屬片彎曲原因？",
          "options": [
            "溫度沒有變",
            "兩層質量必相同",
            "兩層膨脹率不同",
            "其中一層消失"
          ],
          "answerIndex": 2,
          "rationales": [
            "受熱。",
            "非關鍵。",
            "伸長不一致。",
            "雙金屬片的兩層都存在，因膨脹量不同而彎曲，不是其中一層消失。"
          ],
          "reviewEvidence": "兩層膨脹率不同：伸長不一致；溫度沒有變：受熱；兩層質量必相同：非關鍵；其中一層消失：雙金屬片的兩層都存在，因膨脹量不同而彎曲，不是其中一層消失。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "機制"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_152_07",
          "stem": "熱膨脹時物體密度通常如何（質量不變）？",
          "options": [
            "密度必增大",
            "質量加倍",
            "體積歸零",
            "體積增大使密度減小"
          ],
          "answerIndex": 3,
          "rationales": [
            "方向反。",
            "質量不變。",
            "體積受熱通常增加而非歸零；質量固定時密度因此下降。",
            "ρ=m/V。"
          ],
          "reviewEvidence": "體積增大使密度減小：ρ=m/V；密度必增大：方向反；質量加倍：質量不變；體積歸零：體積受熱通常增加而非歸零；質量固定時密度因此下降。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "公式推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_152_08",
          "stem": "冬天電線較繃緊，合理原因？",
          "options": [
            "受熱膨脹",
            "質量增加",
            "冷卻收縮",
            "電流停止"
          ],
          "answerIndex": 2,
          "rationales": [
            "季節相反。",
            "不增質量。",
            "長度略減。",
            "非必要。"
          ],
          "reviewEvidence": "冷卻收縮：長度略減；受熱膨脹：季節相反；質量增加：不增質量；電流停止：非必要。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_152_09",
          "stem": "膨脹率較大的金屬位於雙金屬片哪側？",
          "options": [
            "彎曲外側",
            "中心必不變",
            "無法形成彎曲",
            "內側"
          ],
          "answerIndex": 0,
          "rationales": [
            "外弧較長。",
            "非答案。",
            "會彎。",
            "內弧較短。"
          ],
          "reviewEvidence": "彎曲外側：外弧較長；中心必不變：非答案；無法形成彎曲：會彎；內側：內弧較短。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "空間推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_152_10",
          "stem": "加熱玻璃瓶口後立刻沖冰水有何風險？",
          "options": [
            "熱應力不均導致破裂",
            "玻璃變成水",
            "瓶口遇冷一定均勻縮到零，不會因熱應力破裂",
            "沒有風險"
          ],
          "answerIndex": 0,
          "rationales": [
            "快速溫差造成不均收縮。",
            "玻璃不會因沖冷水化成水；危險是內外收縮不均造成熱應力。",
            "急冷時各處溫度不同，收縮不均；假設整圈同步縮到零忽略了熱應力。",
            "有熱衝擊。"
          ],
          "reviewEvidence": "熱應力不均導致破裂：快速溫差造成不均收縮；玻璃變成水：玻璃不會因沖冷水化成水；危險是內外收縮不均造成熱應力；瓶口遇冷一定均勻縮到零，不會因熱應力破裂：急冷時各處溫度不同，收縮不均；假設整圈同步縮到零忽略了熱應力；沒有風險：有熱衝擊。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "安全推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_152_11",
          "stem": "為何不能說所有物質冷卻都均勻收縮？",
          "options": [
            "冷卻不存在",
            "材料可能各向異性或有特殊溫區行為",
            "只有固體有溫度",
            "質量決定一切"
          ],
          "answerIndex": 1,
          "rationales": [
            "冷卻存在。",
            "一般規則有邊界。",
            "各相都有溫度。",
            "非唯一因素。"
          ],
          "reviewEvidence": "材料可能各向異性或有特殊溫區行為：一般規則有邊界；冷卻不存在：冷卻存在；只有固體有溫度：各相都有溫度；質量決定一切：非唯一因素。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "批判"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_152_12",
          "stem": "比較金屬膨脹率的公平實驗須固定？",
          "options": [
            "膨脹量",
            "材質",
            "只固定金屬名稱，不需控制原長或溫度變化",
            "原長與溫度變化"
          ],
          "answerIndex": 3,
          "rationales": [
            "膨脹量是結果。",
            "材質是自變項。",
            "名稱隨材質。",
            "隔離材質差異。"
          ],
          "reviewEvidence": "原長與溫度變化：隔離材質差異；膨脹量：膨脹量是結果；材質：材質是自變項；只固定金屬名稱，不需控制原長或溫度變化：名稱隨材質。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "設計"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_152_01",
          "stimulusId": "PHYCHM_R4_STIM_152",
          "stem": "自由伸長最多者？",
          "options": [
            "丙",
            "相同",
            "乙",
            "甲"
          ],
          "answerIndex": 2,
          "rationales": [
            "受固定。",
            "不同。",
            "增加1.1 mm。",
            "增加0.6。"
          ],
          "reviewEvidence": "乙：增加1.1 mm；丙：受固定；相同：不同；甲：增加0.6。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "讀表"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_152_02",
          "stimulusId": "PHYCHM_R4_STIM_152",
          "stem": "甲的伸長量？",
          "options": [
            "50 mm",
            "0.6 mm",
            "1.1 mm",
            "1000.6 mm"
          ],
          "answerIndex": 1,
          "rationales": [
            "是溫升。",
            "1000.6－1000。",
            "乙的。",
            "是終長。"
          ],
          "reviewEvidence": "0.6 mm：1000.6－1000；50 mm：是溫升；1.1 mm：乙的；1000.6 mm：是終長。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_152_03",
          "stimulusId": "PHYCHM_R4_STIM_152",
          "stem": "丙與甲材質相同，但丙加熱後彎曲，最合理的原因為何？",
          "options": [
            "甲是液體，只有丙屬於會膨脹的固體",
            "丙兩端固定，使原本應有的熱膨脹受到限制",
            "丙彎曲是因其預測伸長比乙大且超過容器範圍",
            "丙沒有升溫，所以只能靠外力改變形狀"
          ],
          "answerIndex": 1,
          "rationales": [
            "刺激將甲、乙、丙都稱為金屬桿，甲不是液體。",
            "丙若自由伸長應與甲同為1000.6 mm，但固定端阻礙伸長而產生熱應力。",
            "丙預測1000.6 mm，小於乙的1001.1 mm，不能用伸長最多解釋。",
            "刺激明說三桿均勻升高50°C，丙並非沒有受熱。"
          ],
          "reviewEvidence": "丙兩端固定，使原本應有的熱膨脹受到限制：丙若自由伸長應與甲同為1000.6 mm，但固定端阻礙伸長而產生熱應力；甲是液體，只有丙屬於會膨脹的固體：刺激將甲、乙、丙都稱為金屬桿，甲不是液體；丙彎曲是因其預測伸長比乙大且超過容器範圍：丙預測1000.6 mm，小於乙的1001.1 mm，不能用伸長最多解釋；丙沒有升溫，所以只能靠外力改變形狀：刺激明說三桿均勻升高50°C，丙並非沒有受熱。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "因果推理"
          ]
        }
      ]
    }
  ]
};
