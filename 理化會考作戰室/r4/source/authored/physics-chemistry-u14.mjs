export const PHYSICS_CHEMISTRY_AUTHORED_U14 = {
  "unitId": "PHYCHM_R4_U14",
  "title": "酸、鹼與pH",
  "authorityRefs": [
    "AUTH-NATURAL-LC-JB-4-2",
    "AUTH-NATURAL-LC-JB-4-3",
    "AUTH-NATURAL-LC-JD-4-1",
    "AUTH-NATURAL-LC-JD-4-2",
    "AUTH-NATURAL-LC-JD-4-3",
    "AUTH-NATURAL-LC-JD-4-4",
    "AUTH-NATURAL-LC-JD-4-5",
    "AUTH-NATURAL-LP-PE-4-2"
  ],
  "provenance": {
    "curriculum": "臺灣十二年國教自然科學第四學習階段",
    "calibration": "國中教育會考自然科酸鹼證據與生活安全題型",
    "authorship": "original-static-r4"
  },
  "skills": [
    {
      "id": "PHYCHM_R4_S105",
      "title": "由水溶液中離子概念區分酸與鹼",
      "authorityRefs": [
        "AUTH-NATURAL-LC-JB-4-2",
        "AUTH-NATURAL-LC-JB-4-3",
        "AUTH-NATURAL-LC-JD-4-1",
        "AUTH-NATURAL-LC-JD-4-2",
        "AUTH-NATURAL-LC-JD-4-3",
        "AUTH-NATURAL-LC-JD-4-4",
        "AUTH-NATURAL-LC-JD-4-5",
        "AUTH-NATURAL-LP-PE-4-2"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科酸鹼證據與生活安全題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_105",
        "objective": "能由水溶液中的氫離子與氫氧根離子特徵區分酸、鹼，並知道導電不等於一定是酸或鹼。",
        "sections": [
          {
            "title": "酸鹼判斷看水溶液",
            "body": "酸溶於水後具有氫離子的共同特徵，鹼溶於水後具有氫氧根離子的共同特徵。判斷必須放在水溶液情境中；只看化學式含H或OH並不足夠，還要考慮它在水中的粒子與性質。"
          },
          {
            "title": "離子使溶液可導電",
            "body": "酸、鹼水溶液都有可移動離子，因此通常能導電；鹽水也含離子而能導電，卻可能接近中性。所以導電性可以支持「有離子」，不能單獨證明溶液是酸性或鹼性。"
          },
          {
            "title": "用多項證據確認",
            "body": "可結合pH、指示劑顏色及特定反應判斷。酸性不等於一定危險，鹼性也不等於可徒手接觸；腐蝕風險還受種類與濃度影響，未知溶液不得以觸摸或品嘗辨認。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_105_EX_01",
            "prompt": "甲溶液在水中有明顯氫離子特徵，應歸為哪一類？",
            "steps": [
              "確認討論的是水溶液",
              "找共同離子特徵",
              "連結酸的定義"
            ],
            "answer": "酸性溶液。",
            "why": "水溶液呈現氫離子的共同特徵，符合國中階段酸的判準；仍需用pH或指示劑補充確認，不能直接用手試。"
          },
          {
            "id": "PHYCHM_R4_L_105_EX_02",
            "prompt": "乙溶液含可移動離子且能導電，能否因此判定為鹼？",
            "steps": [
              "導電只證明有離子",
              "鹽水也可能導電",
              "尋找氫氧根離子或pH證據"
            ],
            "answer": "不能。",
            "why": "導電性沒有指出離子種類；酸、鹼與鹽溶液都可能導電，必須再檢查氫氧根離子特徵或酸鹼測試。"
          },
          {
            "id": "PHYCHM_R4_L_105_EX_03",
            "prompt": "某溶液使紅色石蕊試紙變藍，並具有氫氧根離子特徵，如何分類？",
            "steps": [
              "讀取指示劑變化",
              "核對離子特徵",
              "以兩項證據交叉確認"
            ],
            "answer": "鹼性溶液。",
            "why": "紅色石蕊變藍符合鹼性反應，而水中氫氧根離子的特徵與此一致，兩項獨立證據都支持鹼性。"
          }
        ],
        "misconceptions": [
          {
            "belief": "能導電的水溶液一定是酸。",
            "whyWrong": "鹼與許多鹽溶液也有可移動離子。",
            "correction": "導電後仍以pH、指示劑或離子種類判斷酸鹼。"
          },
          {
            "belief": "化學式含H的物質溶於水後必為酸。",
            "whyWrong": "化學式字面不能取代水中粒子與性質證據。",
            "correction": "檢查溶於水後是否呈現氫離子共同特徵。"
          },
          {
            "belief": "中性水中完全沒有氫離子與氫氧根離子。",
            "whyWrong": "水中仍有極少量兩者，只是在中性時呈平衡。",
            "correction": "把中性理解為酸鹼特徵平衡，不是所有相關粒子為零。"
          },
          {
            "belief": "鹼性溶液都可安全用手摸。",
            "whyWrong": "強鹼或高濃度鹼液可嚴重腐蝕。",
            "correction": "依標示與防護規範操作，不用觸覺辨認。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_105",
        "title": "未知溶液粒子與測試",
        "body": "四杯無色水溶液以儀器和試紙檢測，未讓皮膚接觸。",
        "dataTable": {
          "columns": [
            "溶液",
            "主要酸鹼特徵",
            "紅色石蕊",
            "導電"
          ],
          "rows": [
            [
              "甲",
              "氫離子特徵",
              "不變",
              "是"
            ],
            [
              "乙",
              "氫氧根離子特徵",
              "變藍",
              "是"
            ],
            [
              "丙",
              "兩者無明顯偏向",
              "不變",
              "是"
            ],
            [
              "丁",
              "兩者無明顯偏向",
              "不變",
              "否"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_105_01",
          "stem": "酸性水溶液的共同粒子特徵為何？",
          "options": [
            "只含氫氧根離子",
            "只含金屬原子",
            "完全沒有離子",
            "具有氫離子特徵"
          ],
          "answerIndex": 3,
          "rationales": [
            "這是鹼的共同特徵。",
            "不只金屬粒子。",
            "酸液可導電，含離子。",
            "符合酸的水溶液判準。"
          ],
          "reviewEvidence": "具有氫離子特徵：符合酸的水溶液判準；只含氫氧根離子：這是鹼的共同特徵；只含金屬原子：不只金屬粒子；完全沒有離子：酸液可導電，含離子。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "定義辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_105_02",
          "stem": "鹼性水溶液的共同粒子特徵為何？",
          "options": [
            "只含氫離子",
            "鹼性水溶液中完全不存在任何水分子",
            "只含氧氣",
            "具有氫氧根離子特徵"
          ],
          "answerIndex": 3,
          "rationales": [
            "這偏向酸性特徵。",
            "仍以水為溶劑。",
            "氧氣不是共同判準。",
            "符合鹼的判準。"
          ],
          "reviewEvidence": "具有氫氧根離子特徵：符合鹼的判準；只含氫離子：這偏向酸性特徵；鹼性水溶液中完全不存在任何水分子：仍以水為溶劑；只含氧氣：氧氣不是共同判準。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "定義辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_105_03",
          "stem": "食鹽水能導電但接近中性，最能說明什麼？",
          "options": [
            "水分子不參與溶液，所以導電一定代表酸鹼性",
            "所有鹽都是酸",
            "導電不能單獨判定酸鹼",
            "中性溶液沒有離子"
          ],
          "answerIndex": 2,
          "rationales": [
            "水是溶劑。",
            "題示為中性。",
            "鹽水提供導電反例。",
            "食鹽水有離子。"
          ],
          "reviewEvidence": "導電不能單獨判定酸鹼：鹽水提供導電反例；水分子不參與溶液，所以導電一定代表酸鹼性：水是溶劑；所有鹽都是酸：題示為中性；中性溶液沒有離子：食鹽水有離子。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "反例推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_105_04",
          "stem": "某溶液使紅色石蕊變藍，最合理的初步分類為？",
          "options": [
            "一定是純水",
            "酸性",
            "一定無離子",
            "鹼性"
          ],
          "answerIndex": 3,
          "rationales": [
            "純水不會使其變藍。",
            "酸不造成此變化。",
            "顏色變化顯示有酸鹼作用。",
            "紅石蕊遇鹼變藍。"
          ],
          "reviewEvidence": "鹼性：紅石蕊遇鹼變藍；一定是純水：純水不會使其變藍；酸性：酸不造成此變化；一定無離子：顏色變化顯示有酸鹼作用。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "指示劑判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_105_05",
          "stem": "判斷未知溶液酸鹼時，哪一做法安全且有效？",
          "options": [
            "靠近深吸蒸氣",
            "徒手觸摸未知液後可憑感覺安全判斷酸鹼",
            "使用指示劑或pH儀",
            "用舌頭品嘗"
          ],
          "answerIndex": 2,
          "rationales": [
            "可能吸入有害物。",
            "可能腐蝕皮膚。",
            "可取得酸鹼證據且降低暴露。",
            "未知物不可品嘗。"
          ],
          "reviewEvidence": "使用指示劑或pH儀：可取得酸鹼證據且降低暴露；靠近深吸蒸氣：可能吸入有害物；徒手觸摸未知液後可憑感覺安全判斷酸鹼：可能腐蝕皮膚；用舌頭品嘗：未知物不可品嘗。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "安全方法"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_105_06",
          "stem": "下列何者只證明溶液中有可移動帶電粒子？",
          "options": [
            "藍石蕊變紅",
            "pH為2",
            "可導電",
            "紅石蕊變藍"
          ],
          "answerIndex": 2,
          "rationales": [
            "變紅指向酸性。",
            "pH 2同時指向酸性。",
            "導電反映可移動電荷。",
            "變藍指向鹼性。"
          ],
          "reviewEvidence": "可導電：導電反映可移動電荷；藍石蕊變紅：變紅指向酸性；pH為2：pH 2同時指向酸性；紅石蕊變藍：變藍指向鹼性。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據範圍"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_105_07",
          "stem": "純水接近中性，較合理的微觀描述是？",
          "options": [
            "氫離子與氫氧根離子特徵平衡",
            "只剩大量氫離子",
            "只剩大量氫氧根離子",
            "完全沒有任何粒子"
          ],
          "answerIndex": 0,
          "rationales": [
            "中性表示兩方無偏向。",
            "會呈酸性。",
            "會呈鹼性。",
            "水仍由粒子構成。"
          ],
          "reviewEvidence": "氫離子與氫氧根離子特徵平衡：中性表示兩方無偏向；只剩大量氫離子：會呈酸性；只剩大量氫氧根離子：會呈鹼性；完全沒有任何粒子：水仍由粒子構成。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "微觀模型"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_105_08",
          "stem": "哪一組證據共同支持溶液為鹼性？",
          "options": [
            "能導電且無色",
            "裝在玻璃杯且透明",
            "氫氧根離子特徵且紅石蕊變藍",
            "含水且可流動"
          ],
          "answerIndex": 2,
          "rationales": [
            "酸鹽也可導電無色。",
            "容器與透明度無關。",
            "離子與指示劑證據一致。",
            "多種溶液皆符合。"
          ],
          "reviewEvidence": "氫氧根離子特徵且紅石蕊變藍：離子與指示劑證據一致；能導電且無色：酸鹽也可導電無色；裝在玻璃杯且透明：容器與透明度無關；含水且可流動：多種溶液皆符合。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據整合"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_105_09",
          "stem": "只看到化學式中有OH，為何仍不宜直接下結論？",
          "options": [
            "所有化學式都錯",
            "需確認物質在水中的粒子與酸鹼表現",
            "OH永遠不存在",
            "酸鹼只由顏色決定"
          ],
          "answerIndex": 1,
          "rationales": [
            "化學式仍有意義。",
            "水溶液行為才是判準。",
            "許多物質含OH。",
            "顏色僅是測試之一。"
          ],
          "reviewEvidence": "需確認物質在水中的粒子與酸鹼表現：水溶液行為才是判準；所有化學式都錯：化學式仍有意義；OH永遠不存在：許多物質含OH；酸鹼只由顏色決定：顏色僅是測試之一。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "判準限制"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_105_10",
          "stem": "酸、鹼水溶液通常都可導電，原因是？",
          "options": [
            "溶液一定高溫",
            "含有可移動離子",
            "容器提供電流",
            "水分子全部變成電子"
          ],
          "answerIndex": 1,
          "rationales": [
            "室溫也可導電。",
            "離子能攜帶電荷。",
            "容器不是能源。",
            "水不會全變電子。"
          ],
          "reviewEvidence": "含有可移動離子：離子能攜帶電荷；溶液一定高溫：室溫也可導電；容器提供電流：容器不是能源；水分子全部變成電子：水不會全變電子。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "機制解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_105_11",
          "stem": "若溶液有氫離子特徵且藍色石蕊變紅，兩項結果如何？",
          "options": [
            "互相支持酸性判斷",
            "彼此矛盾",
            "只能證明物態",
            "互相支持鹼性判斷"
          ],
          "answerIndex": 0,
          "rationales": [
            "兩者皆為酸性證據。",
            "結果方向一致。",
            "不只說明液態。",
            "鹼使紅石蕊變藍。"
          ],
          "reviewEvidence": "互相支持酸性判斷：兩者皆為酸性證據；彼此矛盾：結果方向一致；只能證明物態：不只說明液態；互相支持鹼性判斷：鹼使紅石蕊變藍。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "一致性檢查"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_105_12",
          "stem": "未知溶液導電且pH接近7，最合理分類為？",
          "options": [
            "可能是含離子的近中性溶液",
            "一定沒有溶質",
            "一定是強酸",
            "一定是強鹼"
          ],
          "answerIndex": 0,
          "rationales": [
            "中性鹽水可符合。",
            "導電暗示有離子。",
            "強酸pH低。",
            "強鹼pH高。"
          ],
          "reviewEvidence": "可能是含離子的近中性溶液：中性鹽水可符合；一定沒有溶質：導電暗示有離子；一定是強酸：強酸pH低；一定是強鹼：強鹼pH高。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "多證據分類"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_105_01",
          "stimulusId": "PHYCHM_R4_STIM_105",
          "stem": "哪一杯最明確為鹼性？",
          "options": [
            "甲",
            "乙",
            "丙",
            "丁"
          ],
          "answerIndex": 1,
          "rationales": [
            "甲有氫離子特徵。",
            "有氫氧根特徵且紅石蕊變藍。",
            "丙無明顯偏向。",
            "丁亦無偏向且不導電。"
          ],
          "reviewEvidence": "乙：有氫氧根特徵且紅石蕊變藍；甲：甲有氫離子特徵；丙：丙無明顯偏向；丁：丁亦無偏向且不導電。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "表格篩選"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_105_02",
          "stimulusId": "PHYCHM_R4_STIM_105",
          "stem": "丙杯的資料最能反駁哪一說法？",
          "options": [
            "離子可參與導電",
            "酸液可導電",
            "鹼會使紅石蕊變藍，因此所有導電液都是鹼",
            "能導電者一定是酸或鹼"
          ],
          "answerIndex": 3,
          "rationales": [
            "丙並未反駁離子導電。",
            "甲支持此說法。",
            "乙支持此說法。",
            "丙導電但無酸鹼偏向。"
          ],
          "reviewEvidence": "能導電者一定是酸或鹼：丙導電但無酸鹼偏向；離子可參與導電：丙並未反駁離子導電；酸液可導電：甲支持此說法；鹼會使紅石蕊變藍，因此所有導電液都是鹼：乙支持此說法。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "反例辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_105_03",
          "stimulusId": "PHYCHM_R4_STIM_105",
          "stem": "若只看導電欄，為何無法分出甲乙？",
          "options": [
            "兩者都一定中性",
            "兩者都導電，未指出離子種類",
            "導電會消除酸鹼性",
            "導電欄表示相同pH"
          ],
          "answerIndex": 1,
          "rationales": [
            "甲乙特徵不同。",
            "需粒子或指示劑證據。",
            "測量不改變本質。",
            "導電不等於pH。"
          ],
          "reviewEvidence": "兩者都導電，未指出離子種類：需粒子或指示劑證據；兩者都一定中性：甲乙特徵不同；導電會消除酸鹼性：測量不改變本質；導電欄表示相同pH：導電不等於pH。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資訊限制"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S106",
      "title": "依pH值判斷酸性中性與鹼性",
      "authorityRefs": [
        "AUTH-NATURAL-LC-JB-4-2",
        "AUTH-NATURAL-LC-JB-4-3",
        "AUTH-NATURAL-LC-JD-4-1",
        "AUTH-NATURAL-LC-JD-4-2",
        "AUTH-NATURAL-LC-JD-4-3",
        "AUTH-NATURAL-LC-JD-4-4",
        "AUTH-NATURAL-LC-JD-4-5",
        "AUTH-NATURAL-LP-PE-4-2"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科酸鹼證據與生活安全題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_106",
        "objective": "能在常溫水溶液情境中，以pH小於7、等於7或大於7判斷酸性、中性與鹼性。",
        "sections": [
          {
            "title": "以7為分類界線",
            "body": "國中常見常溫水溶液中，pH小於7判為酸性，等於7為中性，大於7為鹼性。pH是無單位的數值，不能在後面加公克或毫升。分類要看數值與7的關係，不是看數字有沒有小數。"
          },
          {
            "title": "數值方向要分清",
            "body": "酸性範圍內，pH越小通常酸性越明顯；鹼性範圍內，pH越大通常鹼性越明顯。pH 6雖接近7仍是酸性，pH 8則是鹼性；「接近中性」不等於「等於中性」。"
          },
          {
            "title": "量測有精度",
            "body": "試紙常只能估計範圍，pH計可提供較細數值，但都受溫度、污染與校正影響。若讀值在界線附近，報告應保留量測精度，不把6.9武斷改寫成精確7.0。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_106_EX_01",
            "prompt": "某飲料pH＝3.5，屬哪一類？",
            "steps": [
              "把3.5與7比較",
              "3.5小於7",
              "套用分類"
            ],
            "answer": "酸性。",
            "why": "pH 3.5位於7以下，所以歸為酸性；是否可以飲用還需看成分，不能由酸性直接判定危險。"
          },
          {
            "id": "PHYCHM_R4_L_106_EX_02",
            "prompt": "蒸餾水量得pH＝7.0，如何分類？",
            "steps": [
              "讀取數值",
              "確認等於7",
              "標示中性"
            ],
            "answer": "中性。",
            "why": "在題目設定的常溫水溶液下，pH等於7代表酸鹼特徵平衡，因此分類為中性。"
          },
          {
            "id": "PHYCHM_R4_L_106_EX_03",
            "prompt": "清潔液pH＝10，與pH＝8的溶液相比哪一杯鹼性較明顯？",
            "steps": [
              "兩者都大於7",
              "在鹼性範圍比較大小",
              "較大者鹼性較明顯"
            ],
            "answer": "pH＝10的清潔液。",
            "why": "兩杯都屬鹼性，但10比8更遠離中性界線且方向朝鹼性端，因此pH 10的鹼性較明顯。"
          }
        ],
        "misconceptions": [
          {
            "belief": "pH數字越大，酸性越強。",
            "whyWrong": "酸性方向恰好是pH降低。",
            "correction": "先以7分區，再在各區判斷方向。"
          },
          {
            "belief": "pH 6.9可以直接算中性。",
            "whyWrong": "分類界線是等於7，6.9仍小於7。",
            "correction": "區分接近中性與精確分類。"
          },
          {
            "belief": "pH有公克這個單位。",
            "whyWrong": "pH是描述酸鹼程度的無單位數值。",
            "correction": "記錄為pH＝數值，不附質量或體積單位。"
          },
          {
            "belief": "任何酸性液體都不能食用。",
            "whyWrong": "許多食物飲料呈酸性，危害由物質種類與濃度共同決定。",
            "correction": "酸鹼分類與食用安全分開判斷。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_106",
        "title": "四杯溶液pH",
        "body": "同一支已校正pH計依序量測四杯溶液，探頭每次都先清洗。",
        "dataTable": {
          "columns": [
            "溶液",
            "pH"
          ],
          "rows": [
            [
              "甲",
              "2.8"
            ],
            [
              "乙",
              "6.9"
            ],
            [
              "丙",
              "7.0"
            ],
            [
              "丁",
              "11.2"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_106_01",
          "stem": "常溫下pH＝5的水溶液屬於？",
          "options": [
            "鹼性",
            "無法由任何方式判斷",
            "中性",
            "酸性"
          ],
          "answerIndex": 3,
          "rationales": [
            "鹼性須大於7。",
            "pH已足以分類。",
            "中性須等於7。",
            "5小於7。"
          ],
          "reviewEvidence": "酸性：5小於7；鹼性：鹼性須大於7；無法由任何方式判斷：pH已足以分類；中性：中性須等於7。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "數值分類"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_106_02",
          "stem": "pH＝7的水溶液在題設常溫下為？",
          "options": [
            "中性",
            "酸性",
            "鹼性",
            "一定有毒"
          ],
          "answerIndex": 0,
          "rationales": [
            "7是中性界線。",
            "酸性小於7。",
            "鹼性大於7。",
            "pH不能單獨判毒性。"
          ],
          "reviewEvidence": "中性：7是中性界線；酸性：酸性小於7；鹼性：鹼性大於7；一定有毒：pH不能單獨判毒性。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "數值分類"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_106_03",
          "stem": "pH＝9.2的溶液應分類為？",
          "options": [
            "固體",
            "中性",
            "酸性",
            "鹼性"
          ],
          "answerIndex": 3,
          "rationales": [
            "pH不表示物態。",
            "不是正好7。",
            "酸性值低於7。",
            "9.2大於7。"
          ],
          "reviewEvidence": "鹼性：9.2大於7；固體：pH不表示物態；中性：不是正好7；酸性：酸性值低於7。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "數值分類"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_106_04",
          "stem": "下列哪一杯酸性最明顯？",
          "options": [
            "pH 10",
            "pH 5",
            "pH 2",
            "pH 7"
          ],
          "answerIndex": 2,
          "rationales": [
            "鹼性。",
            "酸性但較接近7。",
            "酸性區中pH最低。",
            "中性。"
          ],
          "reviewEvidence": "pH 2：酸性區中pH最低；pH 10：鹼性；pH 5：酸性但較接近7；pH 7：中性。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "比較"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_106_05",
          "stem": "下列哪一杯鹼性最明顯？",
          "options": [
            "pH 7的溶液鹼性最強，因7是中間值",
            "pH 13",
            "pH 4",
            "pH 9"
          ],
          "answerIndex": 1,
          "rationales": [
            "中性。",
            "鹼性區中數值最大。",
            "酸性。",
            "亦鹼性但較弱。"
          ],
          "reviewEvidence": "pH 13：鹼性區中數值最大；pH 7的溶液鹼性最強，因7是中間值：中性；pH 4：酸性；pH 9：亦鹼性但較弱。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "比較"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_106_06",
          "stem": "pH 6.8最精確的分類是？",
          "options": [
            "沒有水",
            "酸性但接近中性",
            "鹼性",
            "中性"
          ],
          "answerIndex": 1,
          "rationales": [
            "pH表示水溶液情境。",
            "6.8小於7。",
            "並未大於7。",
            "接近不等於等於。"
          ],
          "reviewEvidence": "酸性但接近中性：6.8小於7；沒有水：pH表示水溶液情境；鹼性：並未大於7；中性：接近不等於等於。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "界線判斷"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_106_07",
          "stem": "pH的正確記錄方式為？",
          "options": [
            "pH＝4.2 g",
            "pH＝4.2 °C",
            "pH＝4.2 mL",
            "pH＝4.2"
          ],
          "answerIndex": 3,
          "rationales": [
            "g是質量單位。",
            "°C是溫度單位。",
            "mL是體積單位。",
            "pH無單位。"
          ],
          "reviewEvidence": "pH＝4.2：pH無單位；pH＝4.2 g：g是質量單位；pH＝4.2 °C：°C是溫度單位；pH＝4.2 mL：mL是體積單位。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "單位辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_106_08",
          "stem": "pH由4變成6，酸鹼方向如何變化？",
          "options": [
            "仍酸性，但較接近中性",
            "已成鹼性",
            "變得更酸",
            "必定成中性"
          ],
          "answerIndex": 0,
          "rationales": [
            "4與6皆小於7，6較接近7。",
            "須大於7才鹼性。",
            "酸性方向是數值降低。",
            "6不等於7。"
          ],
          "reviewEvidence": "仍酸性，但較接近中性：4與6皆小於7，6較接近7；已成鹼性：須大於7才鹼性；變得更酸：酸性方向是數值降低；必定成中性：6不等於7。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "變化判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_106_09",
          "stem": "pH由8升到11，最合理描述為？",
          "options": [
            "失去所有離子",
            "轉為酸性",
            "鹼性更明顯",
            "保持中性"
          ],
          "answerIndex": 2,
          "rationales": [
            "pH變化不表示離子全失。",
            "未低於7。",
            "兩值都大於7且增加。",
            "不等於7。"
          ],
          "reviewEvidence": "鹼性更明顯：兩值都大於7且增加；失去所有離子：pH變化不表示離子全失；轉為酸性：未低於7；保持中性：不等於7。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "趨勢判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_106_10",
          "stem": "哪一對溶液分居中性兩側？",
          "options": [
            "pH 6與pH 8",
            "pH 3與pH 5",
            "pH 7與pH 7",
            "pH 9與pH 12"
          ],
          "answerIndex": 0,
          "rationales": [
            "一小於7、一大於7。",
            "皆酸性。",
            "兩者皆中性。",
            "皆鹼性。"
          ],
          "reviewEvidence": "pH 6與pH 8：一小於7、一大於7；pH 3與pH 5：皆酸性；pH 7與pH 7：兩者皆中性；pH 9與pH 12：皆鹼性。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "區間比較"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_106_11",
          "stem": "試紙估得pH約7，最恰當的報告是？",
          "options": [
            "在試紙精度下接近中性",
            "精確等於7.0000",
            "必定可飲用",
            "必定不含溶質"
          ],
          "answerIndex": 0,
          "rationales": [
            "保留工具精度。",
            "試紙無此精度。",
            "飲用安全需更多資料。",
            "中性可含鹽。"
          ],
          "reviewEvidence": "在試紙精度下接近中性：保留工具精度；精確等於7.0000：試紙無此精度；必定可飲用：飲用安全需更多資料；必定不含溶質：中性可含鹽。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "量測表達"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_106_12",
          "stem": "某液體pH低於7，能直接推論哪一項？",
          "options": [
            "必定完全不導電",
            "在題設條件下呈酸性",
            "pH低於7就必定完全不能接觸任何食品",
            "必定是濃硫酸"
          ],
          "answerIndex": 1,
          "rationales": [
            "酸液常可導電。",
            "這是pH分類可支持的結論。",
            "安全性不能只看酸性。",
            "物質種類未知。"
          ],
          "reviewEvidence": "在題設條件下呈酸性：這是pH分類可支持的結論；必定完全不導電：酸液常可導電；pH低於7就必定完全不能接觸任何食品：安全性不能只看酸性；必定是濃硫酸：物質種類未知。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "推論界限"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_106_01",
          "stimulusId": "PHYCHM_R4_STIM_106",
          "stem": "哪一杯為中性？",
          "options": [
            "丁",
            "乙",
            "丙",
            "甲"
          ],
          "answerIndex": 2,
          "rationales": [
            "丁大於7。",
            "乙仍小於7。",
            "丙pH正好7.0。",
            "甲明顯酸性。"
          ],
          "reviewEvidence": "丙：丙pH正好7.0；丁：丁大於7；乙：乙仍小於7；甲：甲明顯酸性。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "表格分類"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_106_02",
          "stimulusId": "PHYCHM_R4_STIM_106",
          "stem": "甲與乙相比，何者酸性較明顯？",
          "options": [
            "乙",
            "相同",
            "無法比較",
            "甲"
          ],
          "answerIndex": 3,
          "rationales": [
            "乙更接近7。",
            "數值不同。",
            "同儀器同條件可比較。",
            "2.8低於6.9。"
          ],
          "reviewEvidence": "甲：2.8低於6.9；乙：乙更接近7；相同：數值不同；無法比較：同儀器同條件可比較。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "數據比較"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_106_03",
          "stimulusId": "PHYCHM_R4_STIM_106",
          "stem": "乙杯最精確的描述是？",
          "options": [
            "pH數值沒有物理意義，不能描述酸鹼程度",
            "強鹼性",
            "微酸性並接近中性",
            "完全中性"
          ],
          "answerIndex": 2,
          "rationales": [
            "量測程序已控制。",
            "未大於7。",
            "6.9小於但接近7。",
            "不等於7.0。"
          ],
          "reviewEvidence": "微酸性並接近中性：6.9小於但接近7；pH數值沒有物理意義，不能描述酸鹼程度：量測程序已控制；強鹼性：未大於7；完全中性：不等於7.0。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "界線解讀"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S107",
      "title": "比較pH值與酸鹼強度方向",
      "authorityRefs": [
        "AUTH-NATURAL-LC-JB-4-2",
        "AUTH-NATURAL-LC-JB-4-3",
        "AUTH-NATURAL-LC-JD-4-1",
        "AUTH-NATURAL-LC-JD-4-2",
        "AUTH-NATURAL-LC-JD-4-3",
        "AUTH-NATURAL-LC-JD-4-4",
        "AUTH-NATURAL-LC-JD-4-5",
        "AUTH-NATURAL-LP-PE-4-2"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科酸鹼證據與生活安全題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_107",
        "objective": "能在同類水溶液比較中正確讀出pH方向，並避免把數值差直接當成可隨意相減的線性濃度差。",
        "sections": [
          {
            "title": "酸端向下、鹼端向上",
            "body": "兩杯都在酸性範圍時，pH較小者酸性較明顯；兩杯都在鹼性範圍時，pH較大者鹼性較明顯。跨越7比較時，先分類，不用「數字大所以比較強」這種單一規則。"
          },
          {
            "title": "pH不是線性尺",
            "body": "pH相差1不表示酸性只差一個固定單位，也不能說pH 2是pH 4的兩倍酸。國中題目若未提供進一步濃度關係，可靠結論是方向與排序，不任意把pH做比例。"
          },
          {
            "title": "強弱、濃淡要分開",
            "body": "溶液呈現的pH受物質本性與濃度共同影響。「強酸」描述物質在水中的解離特性，「酸性較明顯」則可由當下pH比較；兩個詞不能在沒有條件時互換。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_107_EX_01",
            "prompt": "甲pH 2、乙pH 5，何者酸性較明顯？",
            "steps": [
              "兩者都小於7",
              "在酸性區比較pH",
              "較小者更酸"
            ],
            "answer": "甲。",
            "why": "甲、乙都屬酸性，甲的pH 2低於乙的5，因此甲更偏向酸性端；不能把這說成甲只有乙的五分之二。"
          },
          {
            "id": "PHYCHM_R4_L_107_EX_02",
            "prompt": "丙pH 9、丁pH 12，何者鹼性較明顯？",
            "steps": [
              "兩者都大於7",
              "比較鹼性區數值",
              "較大者更鹼"
            ],
            "answer": "丁。",
            "why": "pH 12比pH 9更遠離中性並朝鹼性方向，所以丁鹼性較明顯；這只給出排序，不直接給濃度倍數。"
          },
          {
            "id": "PHYCHM_R4_L_107_EX_03",
            "prompt": "有人說pH 3的酸性是pH 6的兩倍，哪裡錯？",
            "steps": [
              "辨認pH不是線性尺度",
              "3與6都屬酸性",
              "保留可支持的比較"
            ],
            "answer": "只能說pH 3酸性較明顯，不能說兩倍。",
            "why": "pH數字不能像長度一樣直接做倍數比較；題目未提供粒子濃度換算，因此「兩倍」沒有依據。"
          }
        ],
        "misconceptions": [
          {
            "belief": "pH 10比pH 5數字大，所以酸性更強。",
            "whyWrong": "pH 10已在鹼性區，pH 5才是酸性。",
            "correction": "先以7分類，再比較同一側的方向。"
          },
          {
            "belief": "pH差2就代表酸性差兩倍。",
            "whyWrong": "pH不是線性比例尺。",
            "correction": "未提供換算時只作酸鹼方向與排序。"
          },
          {
            "belief": "pH越接近0，鹼性越強。",
            "whyWrong": "較低pH代表酸性方向。",
            "correction": "把0端連到酸、較高端連到鹼。"
          },
          {
            "belief": "酸性較明顯必定等於該物質是較強酸。",
            "whyWrong": "實測pH也受濃度影響。",
            "correction": "區分溶液當下pH與物質本性的強弱用語。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_107",
        "title": "稀釋前後的pH",
        "body": "甲、乙為兩杯酸性溶液，分別加入相同體積的水後再次量測。",
        "dataTable": {
          "columns": [
            "溶液",
            "稀釋前pH",
            "稀釋後pH"
          ],
          "rows": [
            [
              "甲",
              "2.0",
              "3.1"
            ],
            [
              "乙",
              "4.0",
              "4.8"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_107_01",
          "stem": "pH 3與pH 6相比，哪杯酸性較明顯？",
          "options": [
            "pH 3",
            "相同",
            "pH 6",
            "兩杯皆鹼性"
          ],
          "answerIndex": 0,
          "rationales": [
            "酸性區中數值較小。",
            "pH不同。",
            "較接近中性。",
            "兩者皆小於7。"
          ],
          "reviewEvidence": "pH 3：酸性區中數值較小；相同：pH不同；pH 6：較接近中性；兩杯皆鹼性：兩者皆小於7。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "方向比較"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_107_02",
          "stem": "pH 8與pH 11相比，哪杯鹼性較明顯？",
          "options": [
            "pH 11",
            "pH 8",
            "相同",
            "兩杯皆酸性"
          ],
          "answerIndex": 0,
          "rationales": [
            "鹼性區中數值較大。",
            "較接近7。",
            "數值不同。",
            "皆大於7。"
          ],
          "reviewEvidence": "pH 11：鹼性區中數值較大；pH 8：較接近7；相同：數值不同；兩杯皆酸性：皆大於7。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "方向比較"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_107_03",
          "stem": "哪一敘述正確？",
          "options": [
            "pH 12比pH 9酸性明顯",
            "pH 7比pH 6鹼性明顯且一定強鹼",
            "pH 4是pH 8的一半酸",
            "pH 2比pH 5酸性明顯"
          ],
          "answerIndex": 3,
          "rationales": [
            "12較鹼。",
            "7為中性。",
            "pH不可線性比。",
            "兩者酸性且2較低。"
          ],
          "reviewEvidence": "pH 2比pH 5酸性明顯：兩者酸性且2較低；pH 12比pH 9酸性明顯：12較鹼；pH 7比pH 6鹼性明顯且一定強鹼：7為中性；pH 4是pH 8的一半酸：pH不可線性比。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "敘述檢核"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_107_04",
          "stem": "「pH 3是pH 6的兩倍酸」錯在何處？",
          "options": [
            "兩者都是鹼",
            "3其實大於6",
            "把非線性的pH當線性倍數",
            "pH有公克單位"
          ],
          "answerIndex": 2,
          "rationales": [
            "皆酸性。",
            "3小於6。",
            "不能直接以數字比倍數。",
            "雖無單位但不是此句核心錯誤。"
          ],
          "reviewEvidence": "把非線性的pH當線性倍數：不能直接以數字比倍數；兩者都是鹼：皆酸性；3其實大於6：3小於6；pH有公克單位：雖無單位但不是此句核心錯誤。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_107_05",
          "stem": "pH由3升到5但仍小於7，表示？",
          "options": [
            "已變強鹼",
            "酸性增強",
            "pH小於7時溶液中必定完全沒有離子",
            "酸性減弱並接近中性"
          ],
          "answerIndex": 3,
          "rationales": [
            "未跨過7。",
            "方向相反。",
            "酸液仍有離子。",
            "酸端數值上升朝7移動。"
          ],
          "reviewEvidence": "酸性減弱並接近中性：酸端數值上升朝7移動；已變強鹼：未跨過7；酸性增強：方向相反；pH小於7時溶液中必定完全沒有離子：酸液仍有離子。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "變化解讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_107_06",
          "stem": "pH由11降到9且仍大於7，表示？",
          "options": [
            "已變強酸",
            "鹼性減弱並接近中性",
            "鹼性增強",
            "pH 11與9無法比較，所以鹼性變化不明"
          ],
          "answerIndex": 1,
          "rationales": [
            "仍大於7。",
            "鹼端數值下降朝7移動。",
            "方向相反。",
            "同尺度可比較方向。"
          ],
          "reviewEvidence": "鹼性減弱並接近中性：鹼端數值下降朝7移動；已變強酸：仍大於7；鹼性增強：方向相反；pH 11與9無法比較，所以鹼性變化不明：同尺度可比較方向。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "變化解讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_107_07",
          "stem": "跨越中性比較pH 4與pH 10，何者正確？",
          "options": [
            "兩者都是酸性",
            "pH 10的酸性比pH 4強，因數值比較大",
            "前者酸性、後者鹼性",
            "4的鹼性較強"
          ],
          "answerIndex": 2,
          "rationales": [
            "10不屬酸性。",
            "10為鹼性。",
            "4小於7、10大於7。",
            "4為酸性。"
          ],
          "reviewEvidence": "前者酸性、後者鹼性：4小於7、10大於7；兩者都是酸性：10不屬酸性；pH 10的酸性比pH 4強，因數值比較大：10為鹼性；4的鹼性較強：4為酸性。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "跨區分類"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_107_08",
          "stem": "要比較兩杯同種酸溶液的酸性表現，哪一資料最直接？",
          "options": [
            "杯子高度",
            "標籤顏色",
            "液體總價",
            "在相同條件量得的pH"
          ],
          "answerIndex": 3,
          "rationales": [
            "容器尺寸無關。",
            "標籤非證據。",
            "價格不決定酸鹼。",
            "pH直接描述酸鹼表現。"
          ],
          "reviewEvidence": "在相同條件量得的pH：pH直接描述酸鹼表現；杯子高度：容器尺寸無關；標籤顏色：標籤非證據；液體總價：價格不決定酸鹼。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "指標選擇"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_107_09",
          "stem": "同為pH 3的兩杯溶液，能直接判定是同一種酸嗎？",
          "options": [
            "不能，pH相同不代表物質種類相同",
            "能，兩杯濃度也必相同",
            "不能，因pH不能量測",
            "能，pH唯一決定化學式"
          ],
          "answerIndex": 0,
          "rationales": [
            "不同物質與濃度可呈相同pH。",
            "濃度未必相同。",
            "pH可以量測。",
            "pH不給化學式。"
          ],
          "reviewEvidence": "不能，pH相同不代表物質種類相同：不同物質與濃度可呈相同pH；能，兩杯濃度也必相同：濃度未必相同；不能，因pH不能量測：pH可以量測；能，pH唯一決定化學式：pH不給化學式。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "推論限制"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_107_10",
          "stem": "若題目只給pH 2與pH 4，最安全的結論是？",
          "options": [
            "pH 2的酸性較明顯",
            "兩者必是同一物質",
            "pH 4的酸濃度必為兩倍",
            "pH 2的質量一定較大"
          ],
          "answerIndex": 0,
          "rationales": [
            "方向可直接判斷。",
            "身分未知。",
            "不能線性換算。",
            "pH不給質量。"
          ],
          "reviewEvidence": "pH 2的酸性較明顯：方向可直接判斷；兩者必是同一物質：身分未知；pH 4的酸濃度必為兩倍：不能線性換算；pH 2的質量一定較大：pH不給質量。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據界限"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_107_11",
          "stem": "「強酸」與「溶液pH較低」為何不宜無條件畫等號？",
          "options": [
            "強酸完全沒有離子",
            "pH只受杯子形狀影響",
            "pH也受溶液濃度影響",
            "濃度與pH永遠無關"
          ],
          "answerIndex": 2,
          "rationales": [
            "強酸會形成離子。",
            "杯形不是主因。",
            "本性與濃度共同影響表現。",
            "濃度確會影響。"
          ],
          "reviewEvidence": "pH也受溶液濃度影響：本性與濃度共同影響表現；強酸完全沒有離子：強酸會形成離子；pH只受杯子形狀影響：杯形不是主因；濃度與pH永遠無關：濃度確會影響。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "概念區分"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_107_12",
          "stem": "哪一排序由酸性最明顯到鹼性最明顯？",
          "options": [
            "pH 12、pH 7、pH 5、pH 1",
            "pH 1、pH 5、pH 7、pH 12",
            "pH 5、pH 1、pH 7、pH 12",
            "pH 7、pH 1、pH 12、pH 5"
          ],
          "answerIndex": 1,
          "rationales": [
            "方向相反。",
            "由低pH經中性到高pH。",
            "酸端5與1顛倒。",
            "順序混亂。"
          ],
          "reviewEvidence": "pH 1、pH 5、pH 7、pH 12：由低pH經中性到高pH；pH 12、pH 7、pH 5、pH 1：方向相反；pH 5、pH 1、pH 7、pH 12：酸端5與1顛倒；pH 7、pH 1、pH 12、pH 5：順序混亂。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "序列建構"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_107_01",
          "stimulusId": "PHYCHM_R4_STIM_107",
          "stem": "稀釋前哪杯酸性較明顯？",
          "options": [
            "相同",
            "兩杯皆鹼性",
            "乙",
            "甲"
          ],
          "answerIndex": 3,
          "rationales": [
            "pH不同。",
            "兩者皆酸性。",
            "乙較接近7。",
            "甲pH 2低於乙的4。"
          ],
          "reviewEvidence": "甲：甲pH 2低於乙的4；相同：pH不同；兩杯皆鹼性：兩者皆酸性；乙：乙較接近7。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "資料比較"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_107_02",
          "stimulusId": "PHYCHM_R4_STIM_107",
          "stem": "兩杯稀釋後仍為酸性，依據是？",
          "options": [
            "加入的是水",
            "3.1與4.8都小於7",
            "兩值都等於7",
            "兩值都大於7"
          ],
          "answerIndex": 1,
          "rationales": [
            "加水本身不足以分類。",
            "直接符合酸性範圍。",
            "並非7。",
            "數據相反。"
          ],
          "reviewEvidence": "3.1與4.8都小於7：直接符合酸性範圍；加入的是水：加水本身不足以分類；兩值都等於7：並非7；兩值都大於7：數據相反。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "界線判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_107_03",
          "stimulusId": "PHYCHM_R4_STIM_107",
          "stem": "資料能支持哪一項？",
          "options": [
            "稀釋讓酸性更明顯",
            "加水後兩杯pH都朝中性方向移動",
            "pH增加幾倍就代表溶液質量也增加相同倍數",
            "甲稀釋後變鹼"
          ],
          "answerIndex": 1,
          "rationales": [
            "酸性方向應降低。",
            "兩者pH上升但仍小於7。",
            "pH非線性質量尺。",
            "3.1仍酸性。"
          ],
          "reviewEvidence": "加水後兩杯pH都朝中性方向移動：兩者pH上升但仍小於7；稀釋讓酸性更明顯：酸性方向應降低；pH增加幾倍就代表溶液質量也增加相同倍數：pH非線性質量尺；甲稀釋後變鹼：3.1仍酸性。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "趨勢整合"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S108",
      "title": "使用廣用指示劑判讀酸鹼範圍",
      "authorityRefs": [
        "AUTH-NATURAL-LC-JB-4-2",
        "AUTH-NATURAL-LC-JB-4-3",
        "AUTH-NATURAL-LC-JD-4-1",
        "AUTH-NATURAL-LC-JD-4-2",
        "AUTH-NATURAL-LC-JD-4-3",
        "AUTH-NATURAL-LC-JD-4-4",
        "AUTH-NATURAL-LC-JD-4-5",
        "AUTH-NATURAL-LP-PE-4-2"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科酸鹼證據與生活安全題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_108",
        "objective": "能正確加入廣用指示劑、對照標準色卡估讀pH範圍，並辨識樣品顏色、光線與交叉污染造成的限制。",
        "sections": [
          {
            "title": "色卡提供範圍",
            "body": "廣用指示劑在不同pH呈現不同顏色，通常由紅橙黃的酸性端，經綠色附近的中性，轉到藍紫的鹼性端。應使用同品牌對應色卡，在白色背景與相近光線下比色，結果多為近似範圍，不是假裝精確到小數多位。"
          },
          {
            "title": "操作量與順序",
            "body": "各樣品取相同體積並加入相同滴數指示劑，使用乾淨滴管避免互相污染。滴管尖端不可碰到樣品；若要測多杯，應分開取樣，不把測過的液體倒回原瓶。"
          },
          {
            "title": "有色或混濁樣品有限制",
            "body": "深色飲料、混濁液或自帶螢光的樣品會遮蔽指示劑顏色，此時應改用已校正pH計或適當方法。色卡讀值差異也可能來自照明與觀察者，重複測量並記錄範圍比強行選一個精確值可靠。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_108_EX_01",
            "prompt": "無色樣品加廣用指示劑呈綠色，色卡綠色對應約pH 7，如何報告？",
            "steps": [
              "確認樣品顏色不干擾",
              "在同光線對照色卡",
              "保留估讀精度"
            ],
            "answer": "樣品接近中性，pH約7。",
            "why": "顏色與標準色卡的中性區相符，但指示劑是比色估測，應寫「約7」而非宣稱儀器級精確值。"
          },
          {
            "id": "PHYCHM_R4_L_108_EX_02",
            "prompt": "深紫色果汁加入指示劑後仍呈深紫，能否判定為強鹼？",
            "steps": [
              "辨認樣品原有顏色",
              "判斷是否遮蔽指示劑",
              "選擇替代量測"
            ],
            "answer": "不能，應改用pH計等方法。",
            "why": "果汁原色可能掩蓋指示劑顏色，看到紫色不能確認是指示劑造成；沒有排除干擾就不能判為強鹼。"
          },
          {
            "id": "PHYCHM_R4_L_108_EX_03",
            "prompt": "同一樣品兩人分別判為pH 5與6，如何處理？",
            "steps": [
              "檢查光線與背景",
              "重複以同一色卡比較",
              "以範圍表達"
            ],
            "answer": "控制比色條件並報告約pH 5～6。",
            "why": "相鄰色階的主觀差異在指示劑估測中可能出現；重測後以可支持的範圍呈現，比任選單一整數更誠實。"
          }
        ],
        "misconceptions": [
          {
            "belief": "指示劑呈紫色就一定是強鹼，不必看樣品原色。",
            "whyWrong": "深色樣品可能直接遮蔽指示劑。",
            "correction": "先評估色彩干擾，必要時改用pH計。"
          },
          {
            "belief": "廣用指示劑可精確量到pH 6.237。",
            "whyWrong": "肉眼色階通常只支持近似值或範圍。",
            "correction": "依色卡解析度報告合理有效位數。"
          },
          {
            "belief": "滴管碰過酸液後可直接伸進下一杯。",
            "whyWrong": "殘液會改變下一杯pH與顏色。",
            "correction": "使用乾淨分開滴管或徹底清洗。"
          },
          {
            "belief": "加入越多指示劑，pH判讀一定越準。",
            "whyWrong": "過量指示劑可能改變色深甚至干擾樣品。",
            "correction": "依規定使用相同少量滴數。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_108",
        "title": "廣用指示劑比色",
        "body": "四份各5 mL的無色樣品，各加入2滴同批廣用指示劑，在白色背景下與色卡比較。",
        "dataTable": {
          "columns": [
            "樣品",
            "觀察色",
            "色卡對應"
          ],
          "rows": [
            [
              "甲",
              "紅",
              "pH 2～3"
            ],
            [
              "乙",
              "黃綠",
              "pH 6～7"
            ],
            [
              "丙",
              "綠",
              "pH約7"
            ],
            [
              "丁",
              "藍紫",
              "pH 11～12"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_108_01",
          "stem": "廣用指示劑呈紅色通常指向？",
          "options": [
            "中性",
            "酸性",
            "鹼性",
            "完全無水"
          ],
          "answerIndex": 1,
          "rationales": [
            "中性多接近綠。",
            "紅色在酸性端。",
            "鹼性多藍紫。",
            "不能判斷含水量。"
          ],
          "reviewEvidence": "酸性：紅色在酸性端；中性：中性多接近綠；鹼性：鹼性多藍紫；完全無水：不能判斷含水量。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "色階判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_108_02",
          "stem": "綠色且與pH 7色卡相近，最合理報告為？",
          "options": [
            "精確pH 7.00000",
            "必為強鹼",
            "必為強酸",
            "接近中性"
          ],
          "answerIndex": 3,
          "rationales": [
            "比色不支持此精度。",
            "強鹼偏紫。",
            "強酸偏紅。",
            "綠色對應中性附近。"
          ],
          "reviewEvidence": "接近中性：綠色對應中性附近；精確pH 7.00000：比色不支持此精度；必為強鹼：強鹼偏紫；必為強酸：強酸偏紅。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "合理表達"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_108_03",
          "stem": "藍紫色在一般色卡上多表示？",
          "options": [
            "酸性",
            "中性",
            "鹼性",
            "一定是純水"
          ],
          "answerIndex": 2,
          "rationales": [
            "酸性偏紅黃。",
            "中性接近綠。",
            "位於高pH端。",
            "純水通常中性。"
          ],
          "reviewEvidence": "鹼性：位於高pH端；酸性：酸性偏紅黃；中性：中性接近綠；一定是純水：純水通常中性。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "色階判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_108_04",
          "stem": "比色時使用白色背景的主要目的為何？",
          "options": [
            "增加樣品質量",
            "中和所有酸鹼",
            "減少背景色干擾",
            "讓pH自動變成7"
          ],
          "answerIndex": 2,
          "rationales": [
            "不改質量。",
            "不發生中和。",
            "有助一致觀察顏色。",
            "背景不改pH。"
          ],
          "reviewEvidence": "減少背景色干擾：有助一致觀察顏色；增加樣品質量：不改質量；中和所有酸鹼：不發生中和；讓pH自動變成7：背景不改pH。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "方法解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_108_05",
          "stem": "為何不同樣品應用乾淨滴管？",
          "options": [
            "避免交叉污染改變pH",
            "只要讓各次指示劑顏色相同，就不必更換滴管",
            "增加樣品溫度",
            "使指示劑失效"
          ],
          "answerIndex": 0,
          "rationales": [
            "殘液會帶入酸或鹼。",
            "目的不是相同顏色。",
            "與升溫無關。",
            "正要保持試劑有效。"
          ],
          "reviewEvidence": "避免交叉污染改變pH：殘液會帶入酸或鹼；只要讓各次指示劑顏色相同，就不必更換滴管：目的不是相同顏色；增加樣品溫度：與升溫無關；使指示劑失效：正要保持試劑有效。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "誤差控制"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_108_06",
          "stem": "測深色可樂的pH時，哪項限制最重要？",
          "options": [
            "原色可能遮蔽指示劑顏色",
            "可樂完全沒有水",
            "指示劑加入可樂後一定會使液體立即沸騰",
            "色卡只能測固體"
          ],
          "answerIndex": 0,
          "rationales": [
            "視覺疊色使判讀失真。",
            "可樂含水。",
            "少量指示劑不致沸騰。",
            "色卡用於溶液。"
          ],
          "reviewEvidence": "原色可能遮蔽指示劑顏色：視覺疊色使判讀失真；可樂完全沒有水：可樂含水；指示劑加入可樂後一定會使液體立即沸騰：少量指示劑不致沸騰；色卡只能測固體：色卡用於溶液。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "限制分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_108_07",
          "stem": "指示劑估得介於pH 5與6兩色之間，應如何記錄？",
          "options": [
            "完全不記錄",
            "精確pH 5.500000",
            "一定pH 7",
            "約pH 5～6"
          ],
          "answerIndex": 3,
          "rationales": [
            "仍有可用範圍。",
            "肉眼無此精度。",
            "顏色不在7區。",
            "符合色階解析度。"
          ],
          "reviewEvidence": "約pH 5～6：符合色階解析度；完全不記錄：仍有可用範圍；精確pH 5.500000：肉眼無此精度；一定pH 7：顏色不在7區。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "數據表達"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_108_08",
          "stem": "若各杯加入不同滴數指示劑，會有何問題？",
          "options": [
            "pH定義消失",
            "顏色深淺比較可能失去一致基準",
            "所有杯自動中性",
            "液體都變固體"
          ],
          "answerIndex": 1,
          "rationales": [
            "pH仍有定義。",
            "試劑量成為額外變因。",
            "不會自動中和。",
            "物態不因此改變。"
          ],
          "reviewEvidence": "顏色深淺比較可能失去一致基準：試劑量成為額外變因；pH定義消失：pH仍有定義；所有杯自動中性：不會自動中和；液體都變固體：物態不因此改變。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "控制變因"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_108_09",
          "stem": "指示劑比色與pH計相比，通常哪項正確？",
          "options": [
            "比色較適合估範圍，pH計可有較細讀值",
            "比色永遠比儀器精確",
            "兩者都不受污染影響",
            "pH計不需校正"
          ],
          "answerIndex": 0,
          "rationales": [
            "符合兩方法解析度。",
            "肉眼色階有限。",
            "兩者都需避免污染。",
            "pH計需校正。"
          ],
          "reviewEvidence": "比色較適合估範圍，pH計可有較細讀值：符合兩方法解析度；比色永遠比儀器精確：肉眼色階有限；兩者都不受污染影響：兩者都需避免污染；pH計不需校正：pH計需校正。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "工具比較"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_108_10",
          "stem": "用過的測試液為何不倒回原試劑瓶？",
          "options": [
            "可能把指示劑或樣品污染帶回",
            "色卡會消失",
            "回倒測試液只會讓試劑瓶變輕並違反質量守恆",
            "液體一定爆炸"
          ],
          "answerIndex": 0,
          "rationales": [
            "回倒會污染整瓶。",
            "色卡與瓶內液無關。",
            "質量轉移不違反守恆。",
            "不是必然爆炸。"
          ],
          "reviewEvidence": "可能把指示劑或樣品污染帶回：回倒會污染整瓶；色卡會消失：色卡與瓶內液無關；回倒測試液只會讓試劑瓶變輕並違反質量守恆：質量轉移不違反守恆；液體一定爆炸：不是必然爆炸。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "實驗規範"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_108_11",
          "stem": "兩人在黃光與白光下對同杯樣品判讀不同，應優先改善什麼？",
          "options": [
            "改變樣品化學式",
            "增加杯子高度",
            "把色卡剪碎",
            "統一照明與背景"
          ],
          "answerIndex": 3,
          "rationales": [
            "樣品不需改變。",
            "高度非主要因素。",
            "會破壞比較工具。",
            "光源影響色覺。"
          ],
          "reviewEvidence": "統一照明與背景：光源影響色覺；改變樣品化學式：樣品不需改變；增加杯子高度：高度非主要因素；把色卡剪碎：會破壞比較工具。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "誤差改善"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_108_12",
          "stem": "廣用指示劑最適合回答哪一問題？",
          "options": [
            "液體的沸點精確值",
            "溶質的精確分子量",
            "未知無色溶液大致落在哪個pH區間",
            "樣品中每種離子數目"
          ],
          "answerIndex": 2,
          "rationales": [
            "不能測沸點。",
            "不能測分子量。",
            "色階可估酸鹼範圍。",
            "不能計數離子。"
          ],
          "reviewEvidence": "未知無色溶液大致落在哪個pH區間：色階可估酸鹼範圍；液體的沸點精確值：不能測沸點；溶質的精確分子量：不能測分子量；樣品中每種離子數目：不能計數離子。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "工具功能"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_108_01",
          "stimulusId": "PHYCHM_R4_STIM_108",
          "stem": "哪一樣品酸性最明顯？",
          "options": [
            "丁",
            "甲",
            "丙",
            "乙"
          ],
          "answerIndex": 1,
          "rationales": [
            "丁鹼性。",
            "甲色卡pH最低。",
            "丙約中性。",
            "乙接近中性。"
          ],
          "reviewEvidence": "甲：甲色卡pH最低；丁：丁鹼性；丙：丙約中性；乙：乙接近中性。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "表格比較"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_108_02",
          "stimulusId": "PHYCHM_R4_STIM_108",
          "stem": "為何丙不宜報告成pH 7.000？",
          "options": [
            "丙沒有加入指示劑",
            "指示劑比色只支持約值",
            "綠色一定表示pH 2",
            "白色背景使pH改變"
          ],
          "answerIndex": 1,
          "rationales": [
            "各杯皆加2滴。",
            "色卡解析度有限。",
            "綠色約中性。",
            "背景不改化學性質。"
          ],
          "reviewEvidence": "指示劑比色只支持約值：色卡解析度有限；丙沒有加入指示劑：各杯皆加2滴；綠色一定表示pH 2：綠色約中性；白色背景使pH改變：背景不改化學性質。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "精度判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_108_03",
          "stimulusId": "PHYCHM_R4_STIM_108",
          "stem": "這組資料可公平比較的主要原因是？",
          "options": [
            "各杯顏色完全相同",
            "每杯使用不同品牌色卡",
            "樣品體積、指示劑滴數、背景與色卡一致",
            "四杯pH都相等"
          ],
          "answerIndex": 2,
          "rationales": [
            "顏色實際不同。",
            "題示同批與同色卡。",
            "比色條件受到控制。",
            "對應範圍不同。"
          ],
          "reviewEvidence": "樣品體積、指示劑滴數、背景與色卡一致：比色條件受到控制；各杯顏色完全相同：顏色實際不同；每杯使用不同品牌色卡：題示同批與同色卡；四杯pH都相等：對應範圍不同。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "設計評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S109",
      "title": "正確使用pH計並避免污染溶液",
      "authorityRefs": [
        "AUTH-NATURAL-LC-JB-4-2",
        "AUTH-NATURAL-LC-JB-4-3",
        "AUTH-NATURAL-LC-JD-4-1",
        "AUTH-NATURAL-LC-JD-4-2",
        "AUTH-NATURAL-LC-JD-4-3",
        "AUTH-NATURAL-LC-JD-4-4",
        "AUTH-NATURAL-LC-JD-4-5",
        "AUTH-NATURAL-LP-PE-4-2"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科酸鹼證據與生活安全題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_109",
        "objective": "能完成pH計校正、清洗、吸乾、浸測與紀錄，並由漂移或異常讀值找出污染與操作問題。",
        "sections": [
          {
            "title": "量測前先校正",
            "body": "pH計需依儀器說明使用標準緩衝液校正，並記錄溫度或啟用適當補償。校正液不可倒回原瓶，探頭也不能在乾燥狀態久放；不同型號的保存方式應遵循說明書。"
          },
          {
            "title": "清洗而不擦傷",
            "body": "每次換樣品前用適當純水沖洗探頭，再以無棉絮紙輕觸吸去表面水滴，不用力摩擦感測玻璃。量測時讓感測端完全浸入、避免碰杯底，輕柔攪拌並等待讀值穩定。"
          },
          {
            "title": "讀值異常先查流程",
            "body": "若中性標準液讀成明顯酸性，先檢查校正、探頭污染、保存與溫度，而不是直接修改數據。測過的樣品不倒回原瓶；少量前一杯殘液就可能使下一杯pH偏移，尤其樣品體積小時更明顯。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_109_EX_01",
            "prompt": "探頭量過pH 2溶液後未清洗，直接測近中性樣品，讀得pH 5.8，如何處理？",
            "steps": [
              "辨認酸液殘留",
              "丟棄受污染分取樣品",
              "清洗探頭後重新取樣"
            ],
            "answer": "重新清洗探頭並用新樣品複測。",
            "why": "探頭附著的酸液會降低下一杯pH；不能把5.8當真值或直接改成7，應排除污染後重新量測。"
          },
          {
            "id": "PHYCHM_R4_L_109_EX_02",
            "prompt": "校正後pH計在標準pH 7液中穩定顯示7.02，應如何看待？",
            "steps": [
              "比較標準值與讀值",
              "考慮儀器解析度",
              "保留實際記錄"
            ],
            "answer": "讀值接近標準，可依規範接受並記錄7.02。",
            "why": "差0.02可能在儀器允收範圍內；是否需重校應依說明書，不應為了整數外觀把數據硬改成7.00。"
          },
          {
            "id": "PHYCHM_R4_L_109_EX_03",
            "prompt": "探頭讀值持續跳動，學生用力擦拭玻璃球，做法有何問題？",
            "steps": [
              "感測玻璃易受損",
              "跳動可能來自未穩定或接觸不良",
              "改採沖洗、輕吸與檢查"
            ],
            "answer": "不應用力擦，應依程序清洗並檢查穩定條件。",
            "why": "摩擦可能刮傷感測端或產生靜電影響；正確作法是輕觸吸水、確認浸入深度並等待穩定。"
          }
        ],
        "misconceptions": [
          {
            "belief": "pH計開機後永遠準確，不需要校正。",
            "whyWrong": "探頭會隨時間與保存狀態產生偏差。",
            "correction": "依規範以標準緩衝液校正並檢核。"
          },
          {
            "belief": "探頭用力擦得越乾淨，讀值越好。",
            "whyWrong": "感測玻璃可能被刮傷或受靜電影響。",
            "correction": "沖洗後用無棉絮紙輕觸吸乾。"
          },
          {
            "belief": "前一杯殘液只有一滴，不會影響下一杯。",
            "whyWrong": "酸鹼差大或樣品少時，一滴足以造成偏移。",
            "correction": "每杯之間完整清洗並分取新樣品。"
          },
          {
            "belief": "異常數據直接改成預期值即可。",
            "whyWrong": "這會隱藏儀器或操作問題並製造假資料。",
            "correction": "保留異常、查明原因、重測並並列紀錄。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_109",
        "title": "清洗程序比較",
        "body": "同一pH計依序測pH 3標準液後，再測pH 7標準液；每組重複三次。",
        "dataTable": {
          "columns": [
            "程序",
            "pH 7液三次讀值"
          ],
          "rows": [
            [
              "不清洗探頭",
              "5.9、6.1、6.0"
            ],
            [
              "純水沖洗並輕吸乾",
              "7.0、7.0、7.1"
            ],
            [
              "沖洗後用粗紙大力擦",
              "6.7、7.3、6.8"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_109_01",
          "stem": "pH計量測前使用標準緩衝液的主要目的為何？",
          "options": [
            "增加樣品體積",
            "校正儀器",
            "中和所有樣品",
            "改變溶質種類"
          ],
          "answerIndex": 1,
          "rationales": [
            "不是量體積。",
            "建立讀值基準。",
            "校正液不加入樣品。",
            "不改樣品。"
          ],
          "reviewEvidence": "校正儀器：建立讀值基準；增加樣品體積：不是量體積；中和所有樣品：校正液不加入樣品；改變溶質種類：不改樣品。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "程序功能"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_109_02",
          "stem": "更換樣品前應先怎麼處理探頭？",
          "options": [
            "用砂紙磨亮",
            "直接帶著前一杯殘液測下一杯，讀值會更穩定",
            "以適當純水沖洗並輕觸吸乾",
            "放在火焰上烘乾"
          ],
          "answerIndex": 2,
          "rationales": [
            "會刮傷感測端。",
            "會污染下一杯。",
            "可降低交叉污染且保護玻璃。",
            "高溫會損壞。"
          ],
          "reviewEvidence": "以適當純水沖洗並輕觸吸乾：可降低交叉污染且保護玻璃；用砂紙磨亮：會刮傷感測端；直接帶著前一杯殘液測下一杯，讀值會更穩定：會污染下一杯；放在火焰上烘乾：高溫會損壞。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "正確操作"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_109_03",
          "stem": "量測時讀值尚未穩定，應如何做？",
          "options": [
            "把樣品倒回原瓶",
            "立刻選自己喜歡的數值",
            "依說明等待穩定再記錄",
            "用力撞擊探頭"
          ],
          "answerIndex": 2,
          "rationales": [
            "會污染原液。",
            "屬主觀造數據。",
            "感測需時間達平衡。",
            "可能損壞儀器。"
          ],
          "reviewEvidence": "依說明等待穩定再記錄：感測需時間達平衡；把樣品倒回原瓶：會污染原液；立刻選自己喜歡的數值：屬主觀造數據；用力撞擊探頭：可能損壞儀器。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "量測規範"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_109_04",
          "stem": "為何探頭不應碰撞杯底？",
          "options": [
            "感測玻璃可能破裂",
            "碰底會讓樣品消失",
            "杯底會改變pH定義",
            "所有玻璃都帶強酸"
          ],
          "answerIndex": 0,
          "rationales": [
            "玻璃球脆弱。",
            "樣品不會消失。",
            "定義不因接觸改變。",
            "杯底不必含酸。"
          ],
          "reviewEvidence": "感測玻璃可能破裂：玻璃球脆弱；碰底會讓樣品消失：樣品不會消失；杯底會改變pH定義：定義不因接觸改變；所有玻璃都帶強酸：杯底不必含酸。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "設備保護"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_109_05",
          "stem": "量過強酸後直接測中性液，讀值偏低的主要可能原因是？",
          "options": [
            "中性定義改成pH 5",
            "酸液殘留造成污染",
            "杯子質量變大",
            "儀器創造酸"
          ],
          "answerIndex": 1,
          "rationales": [
            "中性界線未改。",
            "殘酸混入下一杯。",
            "質量不是pH偏低原因。",
            "儀器不創造物質。"
          ],
          "reviewEvidence": "酸液殘留造成污染：殘酸混入下一杯；中性定義改成pH 5：中性界線未改；杯子質量變大：質量不是pH偏低原因；儀器創造酸：儀器不創造物質。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "誤差診斷"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_109_06",
          "stem": "校正液使用後為何不倒回原瓶？",
          "options": [
            "原瓶沒有空間概念",
            "校正液倒回原瓶會因質量守恆而使濃度改變",
            "液體會變成固體",
            "可能已被探頭或容器污染"
          ],
          "answerIndex": 3,
          "rationales": [
            "可有空間但仍不回倒。",
            "質量轉移不違反守恆。",
            "不會因此凝固。",
            "會破壞整瓶標準值。"
          ],
          "reviewEvidence": "可能已被探頭或容器污染：會破壞整瓶標準值；原瓶沒有空間概念：可有空間但仍不回倒；校正液倒回原瓶會因質量守恆而使濃度改變：質量轉移不違反守恆；液體會變成固體：不會因此凝固。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "品質控制"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_109_07",
          "stem": "同一樣品重測差異很大，合理的處理是？",
          "options": [
            "把所有值改成平均7",
            "宣布pH不存在",
            "只保留最接近期望的值",
            "檢查校正、清洗、溫度與探頭狀態"
          ],
          "answerIndex": 3,
          "rationales": [
            "無根據竄改。",
            "量測問題不否定概念。",
            "屬選擇性刪除。",
            "先找變異來源。"
          ],
          "reviewEvidence": "檢查校正、清洗、溫度與探頭狀態：先找變異來源；把所有值改成平均7：無根據竄改；宣布pH不存在：量測問題不否定概念；只保留最接近期望的值：屬選擇性刪除。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "品質判斷"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_109_08",
          "stem": "探頭沖洗後殘留大量純水，直接放入1 mL樣品可能造成？",
          "options": [
            "稀釋小體積樣品而使pH偏移",
            "pH計變成天平",
            "溶質質量自動增加",
            "樣品必定沸騰"
          ],
          "answerIndex": 0,
          "rationales": [
            "水滴相對1 mL不可忽略。",
            "儀器功能不變。",
            "稀釋不增加溶質。",
            "沒有加熱。"
          ],
          "reviewEvidence": "稀釋小體積樣品而使pH偏移：水滴相對1 mL不可忽略；pH計變成天平：儀器功能不變；溶質質量自動增加：稀釋不增加溶質；樣品必定沸騰：沒有加熱。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "量級推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_109_09",
          "stem": "異常讀值應如何記錄？",
          "options": [
            "改成課本答案",
            "保留原值、註明情況並重測",
            "只寫「正常」",
            "直接刪除不留痕跡"
          ],
          "answerIndex": 1,
          "rationales": [
            "不是實測值。",
            "可追查原因並保持誠信。",
            "資訊不足。",
            "隱藏證據。"
          ],
          "reviewEvidence": "保留原值、註明情況並重測：可追查原因並保持誠信；改成課本答案：不是實測值；只寫「正常」：資訊不足；直接刪除不留痕跡：隱藏證據。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "科學誠信"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_109_10",
          "stem": "pH計比試紙多提供小數讀值，是否表示永遠正確？",
          "options": [
            "否，仍需校正並考慮精度與污染",
            "是，儀器不會老化",
            "否，因pH計本來就不能測量任何液體",
            "是，小數位保證真值"
          ],
          "answerIndex": 0,
          "rationales": [
            "數位顯示不等於無誤差。",
            "探頭會老化。",
            "它正用於溶液。",
            "位數不保證準確。"
          ],
          "reviewEvidence": "否，仍需校正並考慮精度與污染：數位顯示不等於無誤差；是，儀器不會老化：探頭會老化；否，因pH計本來就不能測量任何液體：它正用於溶液；是，小數位保證真值：位數不保證準確。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "儀器素養"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_109_11",
          "stem": "量測多杯未知液時，哪個順序最能降低污染？",
          "options": [
            "所有液體先混在一起",
            "用同一滴管回抽每個原瓶可使各杯濃度一致",
            "探頭只在最後清洗",
            "每杯分取、測前後清洗探頭"
          ],
          "answerIndex": 3,
          "rationales": [
            "混合後失去個別性。",
            "會污染原瓶。",
            "前杯會污染後杯。",
            "隔離樣品並清潔。"
          ],
          "reviewEvidence": "每杯分取、測前後清洗探頭：隔離樣品並清潔；所有液體先混在一起：混合後失去個別性；用同一滴管回抽每個原瓶可使各杯濃度一致：會污染原瓶；探頭只在最後清洗：前杯會污染後杯。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "流程設計"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_109_12",
          "stem": "溫度改變時重測pH，報告中應包含什麼？",
          "options": [
            "只寫杯子顏色",
            "刪除所有小數",
            "量測溫度與是否使用溫度補償",
            "假設溫度永遠無影響"
          ],
          "answerIndex": 2,
          "rationales": [
            "顏色不足。",
            "小數處理依精度。",
            "pH與電極響應可能受溫度影響。",
            "假設不可靠。"
          ],
          "reviewEvidence": "量測溫度與是否使用溫度補償：pH與電極響應可能受溫度影響；只寫杯子顏色：顏色不足；刪除所有小數：小數處理依精度；假設溫度永遠無影響：假設不可靠。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "條件紀錄"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_109_01",
          "stimulusId": "PHYCHM_R4_STIM_109",
          "stem": "哪一程序的結果最準確且穩定？",
          "options": [
            "用粗紙大力擦拭探頭可提高讀值準確度",
            "純水沖洗並輕吸乾",
            "完全不清洗",
            "三者相同"
          ],
          "answerIndex": 1,
          "rationales": [
            "數據分散且偏差。",
            "讀值接近7且變異小。",
            "結果約6，明顯偏低。",
            "表格顯示不同。"
          ],
          "reviewEvidence": "純水沖洗並輕吸乾：讀值接近7且變異小；用粗紙大力擦拭探頭可提高讀值準確度：數據分散且偏差；完全不清洗：結果約6，明顯偏低；三者相同：表格顯示不同。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "準確度與精密度"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_109_02",
          "stimulusId": "PHYCHM_R4_STIM_109",
          "stem": "不清洗組讀值偏低的合理原因為何？",
          "options": [
            "pH 7標準液突然變強鹼",
            "儀器讀值越低越好",
            "前一杯pH 3液殘留",
            "時間停止"
          ],
          "answerIndex": 2,
          "rationales": [
            "資料顯示偏酸。",
            "低不代表好。",
            "殘酸污染使讀值降低。",
            "與時間無關。"
          ],
          "reviewEvidence": "前一杯pH 3液殘留：殘酸污染使讀值降低；pH 7標準液突然變強鹼：資料顯示偏酸；儀器讀值越低越好：低不代表好；時間停止：與時間無關。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "因果推論"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_109_03",
          "stimulusId": "PHYCHM_R4_STIM_109",
          "stem": "粗紙擦拭組的主要問題由哪項數據顯示？",
          "options": [
            "所有值完全一致",
            "平均一定等於7",
            "沒有任何讀值",
            "三次讀值6.7、7.3、6.8分散"
          ],
          "answerIndex": 3,
          "rationales": [
            "三值不同。",
            "平均也非恰好7。",
            "表中有三值。",
            "重現性差且可能受探頭狀態影響。"
          ],
          "reviewEvidence": "三次讀值6.7、7.3、6.8分散：重現性差且可能受探頭狀態影響；所有值完全一致：三值不同；平均一定等於7：平均也非恰好7；沒有任何讀值：表中有三值。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "變異分析"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S110",
      "title": "由金屬大理石反應辨識酸性溶液",
      "authorityRefs": [
        "AUTH-NATURAL-LC-JB-4-2",
        "AUTH-NATURAL-LC-JB-4-3",
        "AUTH-NATURAL-LC-JD-4-1",
        "AUTH-NATURAL-LC-JD-4-2",
        "AUTH-NATURAL-LC-JD-4-3",
        "AUTH-NATURAL-LC-JD-4-4",
        "AUTH-NATURAL-LC-JD-4-5",
        "AUTH-NATURAL-LP-PE-4-2"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科酸鹼證據與生活安全題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_110",
        "objective": "能以酸與特定金屬或碳酸鈣反應的氣體、質量與產物證據辨識酸性，並知道單一冒泡現象不足以定性。",
        "sections": [
          {
            "title": "酸與部分金屬",
            "body": "適當酸性溶液可與某些活性金屬反應並產生氫氣，但不是所有金屬都在同一條件下明顯反應。檢驗氣體需用小量並遵守教師指示；不能因任何金屬未冒泡就斷定溶液不酸。"
          },
          {
            "title": "酸與碳酸鈣",
            "body": "大理石主要成分為碳酸鈣，遇酸會生成二氧化碳、水與相應鹽。二氧化碳可使澄清石灰水變混濁；反應中固體變小與氣體逸出可作為多項相互支持的證據。"
          },
          {
            "title": "排除物理冒泡",
            "body": "加熱、搖晃或原本溶有氣體的液體也會冒泡。辨認酸性反應時要有對照、氣體檢驗與反應物選擇，不能只看「有泡泡」。未知液體仍應先用pH或指示劑，避免直接加入大量反應物。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_110_EX_01",
            "prompt": "大理石加入未知液後冒泡，氣體使石灰水混濁，能支持什麼？",
            "steps": [
              "大理石含碳酸鈣",
              "石灰水混濁支持CO₂",
              "連結酸與碳酸鹽反應"
            ],
            "answer": "未知液具有酸性反應特徵。",
            "why": "碳酸鈣遇酸會放出二氧化碳，而氣體檢驗排除了單純搖晃產生空氣泡的解釋，因此支持酸性。"
          },
          {
            "id": "PHYCHM_R4_L_110_EX_02",
            "prompt": "銅片放入某酸性溶液沒有明顯氣泡，能否證明溶液中性？",
            "steps": [
              "不同金屬活性不同",
              "銅未必與該酸明顯反應",
              "改用pH或合適反應物"
            ],
            "answer": "不能。",
            "why": "金屬反應取決於金屬種類與酸的條件，銅不冒泡不是中性的充分證據；應以pH或大理石等合適測試確認。"
          },
          {
            "id": "PHYCHM_R4_L_110_EX_03",
            "prompt": "鋅粒遇未知液產生可燃氣體，而大理石也放出CO₂，兩測試共同指向什麼？",
            "steps": [
              "鋅反應符合產氫特徵",
              "碳酸鈣反應符合產CO₂",
              "整合不同反應證據"
            ],
            "answer": "未知液呈酸性。",
            "why": "兩種不同反應物都出現酸性溶液的典型產物，證據彼此獨立，比只觀察一種冒泡更可靠。"
          }
        ],
        "misconceptions": [
          {
            "belief": "任何液體冒泡都表示酸性。",
            "whyWrong": "沸騰、搖晃或溶解氣體逸出也會產生氣泡。",
            "correction": "檢驗氣體並使用合適反應物與對照。"
          },
          {
            "belief": "所有金屬碰到酸都以同樣速率放氫。",
            "whyWrong": "金屬活性、酸種類與濃度都影響反應。",
            "correction": "只在指定條件下比較，不把一種金屬結果外推全部。"
          },
          {
            "belief": "大理石冒出的氣體一定是氧氣。",
            "whyWrong": "碳酸鈣與酸反應主要生成二氧化碳。",
            "correction": "用澄清石灰水混濁確認CO₂。"
          },
          {
            "belief": "銅不冒泡就證明溶液不是酸。",
            "whyWrong": "銅對某些非氧化性酸不產生明顯氫氣。",
            "correction": "改用pH、指示劑或合適的碳酸鹽證據。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_110",
        "title": "未知液的兩項反應",
        "body": "各取5 mL同一未知液。甲杯加0.50 g大理石，乙杯加0.20 g鋅粒；另以純水做相同對照。",
        "dataTable": {
          "columns": [
            "組別",
            "現象",
            "氣體檢驗"
          ],
          "rows": [
            [
              "未知液＋大理石",
              "持續冒泡、固體變小",
              "石灰水混濁"
            ],
            [
              "純水＋大理石",
              "無明顯變化",
              "無"
            ],
            [
              "未知液＋鋅",
              "冒泡、鋅變小",
              "小量氣體依規範檢驗呈氫氣特徵"
            ],
            [
              "純水＋鋅",
              "無明顯變化",
              "無"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_110_01",
          "stem": "大理石主要成分碳酸鈣遇酸常產生哪種氣體？",
          "options": [
            "氯氣，因大理石中的氯化物遇酸會逸出",
            "氧氣",
            "二氧化碳",
            "氮氣"
          ],
          "answerIndex": 2,
          "rationales": [
            "不能由此反應生成氯氣。",
            "不是主要產物。",
            "碳酸鹽遇酸放CO₂。",
            "反應物未提供氮。"
          ],
          "reviewEvidence": "二氧化碳：碳酸鹽遇酸放CO₂；氯氣，因大理石中的氯化物遇酸會逸出：不能由此反應生成氯氣；氧氣：不是主要產物；氮氣：反應物未提供氮。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "反應產物"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_110_02",
          "stem": "檢驗二氧化碳常用哪一現象？",
          "options": [
            "使澄清石灰水混濁",
            "使磁鐵吸力增加",
            "使餘燼復燃",
            "讓藍石蕊必定變白"
          ],
          "answerIndex": 0,
          "rationales": [
            "CO₂與石灰水反應成混濁。",
            "與磁性無關。",
            "餘燼復燃是氧氣特徵。",
            "不是標準檢驗。"
          ],
          "reviewEvidence": "使澄清石灰水混濁：CO₂與石灰水反應成混濁；使磁鐵吸力增加：與磁性無關；使餘燼復燃：餘燼復燃是氧氣特徵；讓藍石蕊必定變白：不是標準檢驗。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "氣體檢驗"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_110_03",
          "stem": "酸與適當活性金屬反應常產生？",
          "options": [
            "純氧一定生成",
            "氫氣",
            "大理石",
            "食鹽固體一定析出"
          ],
          "answerIndex": 1,
          "rationales": [
            "不生成純氧。",
            "常見反應生成氫與鹽。",
            "大理石是反應物。",
            "鹽未必析出。"
          ],
          "reviewEvidence": "氫氣：常見反應生成氫與鹽；純氧一定生成：不生成純氧；大理石：大理石是反應物；食鹽固體一定析出：鹽未必析出。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "反應產物"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_110_04",
          "stem": "哪項最能排除「氣泡只是空氣」？",
          "options": [
            "把杯子換顏色",
            "提高桌面高度",
            "收集氣體並做特性檢驗",
            "只數氣泡顆數"
          ],
          "answerIndex": 2,
          "rationales": [
            "杯色無關。",
            "高度非關鍵。",
            "氣體身分提供化學證據。",
            "數量不辨種類。"
          ],
          "reviewEvidence": "收集氣體並做特性檢驗：氣體身分提供化學證據；把杯子換顏色：杯色無關；提高桌面高度：高度非關鍵；只數氣泡顆數：數量不辨種類。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "替代解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_110_05",
          "stem": "銅片放入稀鹽酸無明顯氣泡，合理結論是？",
          "options": [
            "鹽酸一定中性",
            "此條件下銅未明顯產氫，不能據此否定酸性",
            "銅已變成氧氣",
            "所有金屬都不與酸反應"
          ],
          "answerIndex": 1,
          "rationales": [
            "鹽酸呈酸性。",
            "金屬種類會影響反應。",
            "元素不如此轉變。",
            "鋅等可反應。"
          ],
          "reviewEvidence": "此條件下銅未明顯產氫，不能據此否定酸性：金屬種類會影響反應；鹽酸一定中性：鹽酸呈酸性；銅已變成氧氣：元素不如此轉變；所有金屬都不與酸反應：鋅等可反應。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據限制"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_110_06",
          "stem": "未知液與大理石反應後固體變小，且有CO₂，何者最合理？",
          "options": [
            "CO₂來自空杯",
            "質量守恆失效",
            "碳酸鈣被酸消耗",
            "大理石只熔化"
          ],
          "answerIndex": 2,
          "rationales": [
            "對照可排除。",
            "氣體逸出但完整系統守恆。",
            "反應物轉成可溶鹽、水與氣體。",
            "室溫不是熔化。"
          ],
          "reviewEvidence": "碳酸鈣被酸消耗：反應物轉成可溶鹽、水與氣體；CO₂來自空杯：對照可排除；質量守恆失效：氣體逸出但完整系統守恆；大理石只熔化：室溫不是熔化。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "現象解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_110_07",
          "stem": "只觀察到汽水冒泡，能否判定汽水正在與大理石反應？",
          "options": [
            "能，任何泡都是新反應",
            "能，因泡泡必是氫氣",
            "不能，因汽水不含液體",
            "不能，原先溶解的CO₂也會逸出"
          ],
          "answerIndex": 3,
          "rationales": [
            "物理逸氣是替代解釋。",
            "汽水氣泡多為CO₂。",
            "汽水是溶液。",
            "需要對照與反應物資訊。"
          ],
          "reviewEvidence": "不能，原先溶解的CO₂也會逸出：需要對照與反應物資訊；能，任何泡都是新反應：物理逸氣是替代解釋；能，因泡泡必是氫氣：汽水氣泡多為CO₂；不能，因汽水不含液體：汽水是溶液。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "反例分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_110_08",
          "stem": "安全檢驗氫氣時，為何只用小量並依教師指示？",
          "options": [
            "氫氣易燃，與空氣混合可能快速燃燒",
            "氫氣沒有任何反應性",
            "氫氣會使所有金屬消失",
            "氫氣是強酸"
          ],
          "answerIndex": 0,
          "rationales": [
            "控制燃燒風險。",
            "它可燃。",
            "不會如此。",
            "氫氣不是酸液。"
          ],
          "reviewEvidence": "氫氣易燃，與空氣混合可能快速燃燒：控制燃燒風險；氫氣沒有任何反應性：它可燃；氫氣會使所有金屬消失：不會如此；氫氣是強酸：氫氣不是酸液。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "安全理由"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_110_09",
          "stem": "比較未知液與純水對大理石的作用，純水組的功能是？",
          "options": [
            "純水組用來生成更多CO₂以放大實驗差異",
            "改變大理石成分",
            "增加未知液酸性",
            "提供無酸條件的對照"
          ],
          "answerIndex": 3,
          "rationales": [
            "純水無明顯反應。",
            "材料應相同。",
            "分開組別不增加酸性。",
            "可排除水與操作本身。"
          ],
          "reviewEvidence": "提供無酸條件的對照：可排除水與操作本身；純水組用來生成更多CO₂以放大實驗差異：純水無明顯反應；改變大理石成分：材料應相同；增加未知液酸性：分開組別不增加酸性。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "對照功能"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_110_10",
          "stem": "若大理石加入液體後無反應，能直接說液體pH＝7嗎？",
          "options": [
            "不能，可能酸度低、反應慢或操作條件不同",
            "能，所有酸都立刻劇烈冒泡",
            "能，沒有泡必等於7",
            "不能，因pH只適用固體"
          ],
          "answerIndex": 0,
          "rationales": [
            "陰性結果有多種解釋。",
            "速率依條件。",
            "無此一一對應。",
            "pH用於溶液。"
          ],
          "reviewEvidence": "不能，可能酸度低、反應慢或操作條件不同：陰性結果有多種解釋；能，所有酸都立刻劇烈冒泡：速率依條件；能，沒有泡必等於7：無此一一對應；不能，因pH只適用固體：pH用於溶液。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "陰性證據"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_110_11",
          "stem": "酸與大理石反應後，開放容器總質量可能下降，原因是？",
          "options": [
            "天平不遵守物理",
            "生成的CO₂逸出秤量範圍",
            "原子被消滅",
            "酸會直接轉變成沒有質量的熱量而使讀值下降"
          ],
          "answerIndex": 1,
          "rationales": [
            "是系統邊界問題。",
            "氣體離開開放系統。",
            "原子守恆。",
            "物質不全變成熱。"
          ],
          "reviewEvidence": "生成的CO₂逸出秤量範圍：氣體離開開放系統；天平不遵守物理：是系統邊界問題；原子被消滅：原子守恆；酸會直接轉變成沒有質量的熱量而使讀值下降：物質不全變成熱。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "守恆連結"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_110_12",
          "stem": "哪組證據最能辨識酸性未知液？",
          "options": [
            "pH低於7且與大理石產生經檢驗的CO₂",
            "無色且透明",
            "液體溫度是25°C",
            "杯中有氣泡但未檢驗"
          ],
          "answerIndex": 0,
          "rationales": [
            "直接測量與反應證據一致。",
            "許多溶液無色。",
            "溫度不分類酸鹼。",
            "泡泡來源未知。"
          ],
          "reviewEvidence": "pH低於7且與大理石產生經檢驗的CO₂：直接測量與反應證據一致；無色且透明：許多溶液無色；液體溫度是25°C：溫度不分類酸鹼；杯中有氣泡但未檢驗：泡泡來源未知。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據整合"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_110_01",
          "stimulusId": "PHYCHM_R4_STIM_110",
          "stem": "未知液與大理石組的氣體是？",
          "options": [
            "氧氣，因所有冒泡的酸反應都會放出氧",
            "氫氣",
            "二氧化碳",
            "氮氣"
          ],
          "answerIndex": 2,
          "rationales": [
            "氧氣使餘燼復燃。",
            "鋅組才呈氫特徵。",
            "使石灰水混濁。",
            "無氮來源證據。"
          ],
          "reviewEvidence": "二氧化碳：使石灰水混濁；氧氣，因所有冒泡的酸反應都會放出氧：氧氣使餘燼復燃；氫氣：鋅組才呈氫特徵；氮氣：無氮來源證據。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "表格判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_110_02",
          "stimulusId": "PHYCHM_R4_STIM_110",
          "stem": "純水兩組的主要用途是？",
          "options": [
            "讓反應物質量變零",
            "證明所有水都中性",
            "提高未知液濃度",
            "排除水與固體本身會產生相同現象"
          ],
          "answerIndex": 3,
          "rationales": [
            "材料仍在。",
            "實驗目的不是所有水。",
            "組別分開。",
            "它們是無未知液對照。"
          ],
          "reviewEvidence": "排除水與固體本身會產生相同現象：它們是無未知液對照；讓反應物質量變零：材料仍在；證明所有水都中性：實驗目的不是所有水；提高未知液濃度：組別分開。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "對照解讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_110_03",
          "stimulusId": "PHYCHM_R4_STIM_110",
          "stem": "兩種固體測試共同支持未知液酸性的理由是？",
          "options": [
            "固體質量都增加",
            "純水也出現相同現象",
            "兩組氣體完全相同",
            "各自產生符合酸反應的不同氣體證據"
          ],
          "answerIndex": 3,
          "rationales": [
            "固體都變小。",
            "純水無變化。",
            "兩者氣體不同。",
            "大理石產CO₂、鋅產H₂特徵。"
          ],
          "reviewEvidence": "各自產生符合酸反應的不同氣體證據：大理石產CO₂、鋅產H₂特徵；固體質量都增加：固體都變小；純水也出現相同現象：純水無變化；兩組氣體完全相同：兩者氣體不同。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據匯聚"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S111",
      "title": "辨認日常酸鹼物質用途與危險",
      "authorityRefs": [
        "AUTH-NATURAL-LC-JB-4-2",
        "AUTH-NATURAL-LC-JB-4-3",
        "AUTH-NATURAL-LC-JD-4-1",
        "AUTH-NATURAL-LC-JD-4-2",
        "AUTH-NATURAL-LC-JD-4-3",
        "AUTH-NATURAL-LC-JD-4-4",
        "AUTH-NATURAL-LC-JD-4-5",
        "AUTH-NATURAL-LP-PE-4-2"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科酸鹼證據與生活安全題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_111",
        "objective": "能依成分、濃度、標示與用途辨認日常酸鹼物質，選擇正確防護、儲存及誤觸處置。",
        "sections": [
          {
            "title": "酸鹼存在於生活用品",
            "body": "食醋、檸檬汁呈酸性；部分除垢劑利用酸與水垢反應。肥皂水與某些清潔劑呈鹼性，能協助去除油汙。用途來自特定成分與配方，不能因同屬酸或鹼就互相替代。"
          },
          {
            "title": "危險由多項條件決定",
            "body": "酸性飲料可食用，而濃酸會嚴重腐蝕；稀碳酸氫鈉溶液風險較低，濃強鹼卻會傷害皮膚。pH、濃度、暴露量與物質毒性都重要，不能用「天然」或「家用」推論絕對安全。"
          },
          {
            "title": "看標示、不混用",
            "body": "清潔用品保留原容器與標籤，戴適當手套、保持通風，且不任意混合。含氯漂白劑遇酸可能產生有毒氣體；誤觸時按標示以大量清水沖洗並尋求協助，不自行用另一強酸或強鹼中和。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_111_EX_01",
            "prompt": "酸性除垢劑可去除碳酸鈣水垢，是否可與含氯漂白劑混合增加效果？",
            "steps": [
              "辨認兩產品成分風險",
              "含氯品遇酸可能放毒氣",
              "選擇分開依標示使用"
            ],
            "answer": "不可混合。",
            "why": "除垢效果不能抵銷混合風險；酸性產品與含氯漂白劑可能釋出有毒氣體，必須分開使用並充分沖洗。"
          },
          {
            "id": "PHYCHM_R4_L_111_EX_02",
            "prompt": "檸檬汁pH低於7，為何不等於可以拿來處理任何酸液灼傷？",
            "steps": [
              "酸性分類不等於醫療用途",
              "成分與濃度不同",
              "依急救標示沖洗求助"
            ],
            "answer": "酸鹼分類不能取代正確急救。",
            "why": "檸檬汁本身也是酸性混合物，加入傷處可能刺激且無法控制反應；化學濺灑應先大量清水沖洗並通報。"
          },
          {
            "id": "PHYCHM_R4_L_111_EX_03",
            "prompt": "兩瓶透明清潔液外觀相同，一瓶pH 2、一瓶pH 13，該如何處理？",
            "steps": [
              "外觀不能辨酸鹼",
              "兩端pH皆可能腐蝕",
              "保留標籤與防護"
            ],
            "answer": "都按腐蝕性用品標示謹慎操作。",
            "why": "pH 2明顯酸性、pH 13明顯鹼性，兩者都可能傷害皮膚；不能因透明無色就徒手接觸或改裝飲料瓶。"
          }
        ],
        "misconceptions": [
          {
            "belief": "家用品一定比實驗室藥品安全。",
            "whyWrong": "清潔劑仍可能高濃度、腐蝕或產生危險混合反應。",
            "correction": "依成分、標示與暴露方式評估。"
          },
          {
            "belief": "酸才會腐蝕，鹼不會。",
            "whyWrong": "濃強鹼也會嚴重破壞組織。",
            "correction": "酸鹼兩端都遵守個人防護。"
          },
          {
            "belief": "用強鹼直接沖酸灼傷最能快速中和。",
            "whyWrong": "濃度難控且中和放熱可能加重傷害。",
            "correction": "先大量清水沖洗並依專業指示處置。"
          },
          {
            "belief": "清潔用品混合越多，效果必定越好。",
            "whyWrong": "可能產生毒氣、熱或降低原本效果。",
            "correction": "不同產品不混用，依單一標示完成操作。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_111",
        "title": "四種家用品標示",
        "body": "閱讀產品標示後再決定用途與防護。",
        "dataTable": {
          "columns": [
            "產品",
            "pH",
            "標示重點"
          ],
          "rows": [
            [
              "甲：食醋",
              "2.8",
              "食品，勿入眼"
            ],
            [
              "乙：酸性除垢劑",
              "1.5",
              "戴手套，勿與漂白劑混用"
            ],
            [
              "丙：洗碗精",
              "8.5",
              "避免長時間接觸"
            ],
            [
              "丁：強力通管劑",
              "13.5",
              "腐蝕性，戴手套與護目鏡"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_111_01",
          "stem": "食醋呈酸性的主要生活用途之一是？",
          "options": [
            "調味",
            "與漂白劑混合",
            "取代所有實驗酸",
            "直接洗眼"
          ],
          "answerIndex": 0,
          "rationales": [
            "食醋是食品調味料。",
            "可能有危險。",
            "純度濃度不適合任意替代。",
            "會刺激眼睛。"
          ],
          "reviewEvidence": "調味：食醋是食品調味料；與漂白劑混合：可能有危險；取代所有實驗酸：純度濃度不適合任意替代；直接洗眼：會刺激眼睛。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "用途辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_111_02",
          "stem": "強鹼通管劑的主要風險為何？",
          "options": [
            "可腐蝕皮膚與眼睛",
            "只會讓水變冷",
            "一定可飲用",
            "完全不與油脂作用"
          ],
          "answerIndex": 0,
          "rationales": [
            "高pH強鹼具腐蝕性。",
            "反應可能放熱。",
            "絕不可飲用。",
            "常用於分解部分堵塞物。"
          ],
          "reviewEvidence": "可腐蝕皮膚與眼睛：高pH強鹼具腐蝕性；只會讓水變冷：反應可能放熱；一定可飲用：絕不可飲用；完全不與油脂作用：常用於分解部分堵塞物。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "危害辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_111_03",
          "stem": "酸性除垢劑能去水垢，主要利用哪種性質？",
          "options": [
            "只靠顏色覆蓋水垢",
            "酸不參與化學反應",
            "酸與碳酸鹽反應",
            "酸使所有固體熔化"
          ],
          "answerIndex": 2,
          "rationales": [
            "不是遮色。",
            "確有化學反應。",
            "水垢常含碳酸鈣。",
            "不是普遍熔化。"
          ],
          "reviewEvidence": "酸與碳酸鹽反應：水垢常含碳酸鈣；只靠顏色覆蓋水垢：不是遮色；酸不參與化學反應：確有化學反應；酸使所有固體熔化：不是普遍熔化。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "用途原理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_111_04",
          "stem": "含氯漂白劑不可與酸性清潔劑混合，原因是？",
          "options": [
            "會讓pH永遠等於7且安全",
            "會生成可食用糖",
            "可能產生有毒氣體",
            "兩者完全不反應"
          ],
          "answerIndex": 2,
          "rationales": [
            "中和不保證安全。",
            "無此產物。",
            "混合可能釋放含氯危險氣體。",
            "實際可能反應。"
          ],
          "reviewEvidence": "可能產生有毒氣體：混合可能釋放含氯危險氣體；會讓pH永遠等於7且安全：中和不保證安全；會生成可食用糖：無此產物；兩者完全不反應：實際可能反應。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "安全規範"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_111_05",
          "stem": "酸液濺到皮膚，第一步通常應？",
          "options": [
            "塗濃鹼",
            "以大量流動清水沖洗並通報",
            "用紙巾乾擦後不理",
            "加入漂白劑"
          ],
          "answerIndex": 1,
          "rationales": [
            "可能加重腐蝕與放熱。",
            "可稀釋並移除化學物。",
            "殘液仍在。",
            "混合更危險。"
          ],
          "reviewEvidence": "以大量流動清水沖洗並通報：可稀釋並移除化學物；塗濃鹼：可能加重腐蝕與放熱；用紙巾乾擦後不理：殘液仍在；加入漂白劑：混合更危險。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "緊急處置"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_111_06",
          "stem": "「天然檸檬汁所以絕對安全」錯在哪裡？",
          "options": [
            "安全只由顏色決定",
            "天然來源不排除酸性刺激與過敏風險",
            "檸檬汁完全沒有化學物質",
            "天然物一定是強鹼"
          ],
          "answerIndex": 1,
          "rationales": [
            "顏色不足。",
            "天然不等於無風險。",
            "一切物質都有化學組成。",
            "檸檬汁呈酸性。"
          ],
          "reviewEvidence": "天然來源不排除酸性刺激與過敏風險：天然不等於無風險；安全只由顏色決定：顏色不足；檸檬汁完全沒有化學物質：一切物質都有化學組成；天然物一定是強鹼：檸檬汁呈酸性。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "風險素養"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_111_07",
          "stem": "為何清潔劑應保留原標籤？",
          "options": [
            "標籤能提高pH",
            "只為裝飾",
            "標籤會中和液體",
            "可辨成分、危害與正確用法"
          ],
          "answerIndex": 3,
          "rationales": [
            "不改溶液pH。",
            "有安全資訊。",
            "紙張不會中和。",
            "處置與混用禁忌需可追溯。"
          ],
          "reviewEvidence": "可辨成分、危害與正確用法：處置與混用禁忌需可追溯；標籤能提高pH：不改溶液pH；只為裝飾：有安全資訊；標籤會中和液體：紙張不會中和。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "標示功能"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_111_08",
          "stem": "pH 2與pH 13的家用品共同需要注意什麼？",
          "options": [
            "兩者一定能互相混合",
            "只有pH 13可入口",
            "只有pH 2有危險",
            "兩者都可能腐蝕，需依標示防護"
          ],
          "answerIndex": 3,
          "rationales": [
            "混合可能放熱或產毒。",
            "不可入口。",
            "強鹼也危險。",
            "酸鹼兩端皆可能傷害。"
          ],
          "reviewEvidence": "兩者都可能腐蝕，需依標示防護：酸鹼兩端皆可能傷害；兩者一定能互相混合：混合可能放熱或產毒；只有pH 13可入口：不可入口；只有pH 2有危險：強鹼也危險。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "共同風險"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_111_09",
          "stem": "洗碗精呈弱鹼性，能否據此喝下少量？",
          "options": [
            "不能，因它必是強酸",
            "不能，產品用途與毒性不由弱鹼性保證",
            "能，pH大於7即營養",
            "能，所有弱鹼都是食品"
          ],
          "answerIndex": 1,
          "rationales": [
            "它不是強酸。",
            "非食品不得入口。",
            "pH不是營養指標。",
            "弱鹼不等於可食。"
          ],
          "reviewEvidence": "不能，產品用途與毒性不由弱鹼性保證：非食品不得入口；不能，因它必是強酸：它不是強酸；能，pH大於7即營養：pH不是營養指標；能，所有弱鹼都是食品：弱鹼不等於可食。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "推論限制"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_111_10",
          "stem": "哪項最能降低清潔劑誤食？",
          "options": [
            "保留原容器並放在兒童拿不到處",
            "裝入飲料瓶",
            "放在食品旁",
            "撕掉標籤"
          ],
          "answerIndex": 0,
          "rationales": [
            "降低誤認與接觸。",
            "容易誤飲。",
            "增加混淆。",
            "失去危害資訊。"
          ],
          "reviewEvidence": "保留原容器並放在兒童拿不到處：降低誤認與接觸；裝入飲料瓶：容易誤飲；放在食品旁：增加混淆；撕掉標籤：失去危害資訊。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "風險預防"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_111_11",
          "stem": "為何不能只用pH判斷毒性？",
          "options": [
            "所有中性物都無毒",
            "pH完全不能量測",
            "毒性還受物質種類、濃度與暴露量影響",
            "所有酸都同一種"
          ],
          "answerIndex": 2,
          "rationales": [
            "中性物也可能有毒。",
            "可量測pH。",
            "pH只描述酸鹼面向。",
            "酸種類很多。"
          ],
          "reviewEvidence": "毒性還受物質種類、濃度與暴露量影響：pH只描述酸鹼面向；所有中性物都無毒：中性物也可能有毒；pH完全不能量測：可量測pH；所有酸都同一種：酸種類很多。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "多因素評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_111_12",
          "stem": "使用酸性除垢劑後再用其他產品前，較安全做法是？",
          "options": [
            "立刻混入含氯漂白劑可把殘留酸完全消除",
            "密閉空間混合",
            "不讀任何警示",
            "依標示充分沖洗並保持通風"
          ],
          "answerIndex": 3,
          "rationales": [
            "可能產毒氣。",
            "通風不足更危險。",
            "應讀標示。",
            "減少殘留與暴露。"
          ],
          "reviewEvidence": "依標示充分沖洗並保持通風：減少殘留與暴露；立刻混入含氯漂白劑可把殘留酸完全消除：可能產毒氣；密閉空間混合：通風不足更危險；不讀任何警示：應讀標示。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "操作規劃"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_111_01",
          "stimulusId": "PHYCHM_R4_STIM_111",
          "stem": "哪項產品的標示要求最完整的眼手防護？",
          "options": [
            "丁",
            "丙",
            "甲與丙",
            "甲"
          ],
          "answerIndex": 0,
          "rationales": [
            "丁明列腐蝕性、手套與護目鏡。",
            "丙只提醒久觸。",
            "兩者警示較低。",
            "甲是食品但勿入眼。"
          ],
          "reviewEvidence": "丁：丁明列腐蝕性、手套與護目鏡；丙：丙只提醒久觸；甲與丙：兩者警示較低；甲：甲是食品但勿入眼。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "標示判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_111_02",
          "stimulusId": "PHYCHM_R4_STIM_111",
          "stem": "甲與乙都呈酸性，為何不能互換用途？",
          "options": [
            "乙一定可食用",
            "配方、濃度與產品用途不同",
            "只要pH都小於7，兩種產品的配方與用途就相同",
            "甲一定可除任何水垢"
          ],
          "answerIndex": 1,
          "rationales": [
            "乙標示為清潔劑。",
            "食醋與除垢劑規格不同。",
            "酸性只是共同性質。",
            "食品不等於專用除垢劑。"
          ],
          "reviewEvidence": "配方、濃度與產品用途不同：食醋與除垢劑規格不同；乙一定可食用：乙標示為清潔劑；只要pH都小於7，兩種產品的配方與用途就相同：酸性只是共同性質；甲一定可除任何水垢：食品不等於專用除垢劑。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "用途比較"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_111_03",
          "stimulusId": "PHYCHM_R4_STIM_111",
          "stem": "哪項資料最能反駁「只有酸性用品會腐蝕」？",
          "options": [
            "甲pH 2.8",
            "丙pH 8.5",
            "乙不得混用",
            "丁為pH 13.5且標示腐蝕性"
          ],
          "answerIndex": 3,
          "rationales": [
            "甲仍是酸。",
            "丙未標腐蝕性。",
            "未直接證明鹼腐蝕。",
            "強鹼丁是直接反例。"
          ],
          "reviewEvidence": "丁為pH 13.5且標示腐蝕性：強鹼丁是直接反例；甲pH 2.8：甲仍是酸；丙pH 8.5：丙未標腐蝕性；乙不得混用：未直接證明鹼腐蝕。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "反例證據"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S112",
      "title": "避免把濃度與酸鹼強度完全等同",
      "authorityRefs": [
        "AUTH-NATURAL-LC-JB-4-2",
        "AUTH-NATURAL-LC-JB-4-3",
        "AUTH-NATURAL-LC-JD-4-1",
        "AUTH-NATURAL-LC-JD-4-2",
        "AUTH-NATURAL-LC-JD-4-3",
        "AUTH-NATURAL-LC-JD-4-4",
        "AUTH-NATURAL-LC-JD-4-5",
        "AUTH-NATURAL-LP-PE-4-2"
      ],
      "provenance": {
        "curriculum": "臺灣十二年國教自然科學第四學習階段",
        "calibration": "國中教育會考自然科酸鹼證據與生活安全題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_112",
        "objective": "能區分溶液濃度、酸鹼物質本性與實測pH，並由控制資料避免把「濃」與「強」混為同一概念。",
        "sections": [
          {
            "title": "濃度說多少，強弱說本性",
            "body": "濃度描述一定量溶液中含多少溶質；強酸、弱酸則描述酸在水中的解離特性。濃的弱酸與稀的強酸可能呈現不同pH，不能只看「濃」字就判定哪杯pH最低。"
          },
          {
            "title": "稀釋通常改變pH",
            "body": "對同一酸性溶液加水，酸性粒子在單位體積中的量降低，pH通常向7上升；同一鹼液稀釋時pH通常向7下降。稀釋改變濃度與當下酸鹼表現，不會把強酸這種物質本性自動改名成弱酸。"
          },
          {
            "title": "比較要固定條件",
            "body": "若要比較不同酸的解離特性，需控制形式濃度與溫度，再觀察pH或導電等證據。若濃度不同，就只能描述各杯實際量測結果，不能把差異全部歸因於酸的強弱。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_112_EX_01",
            "prompt": "同一鹽酸加水後pH由2變4，鹽酸是否因此變成弱酸？",
            "steps": [
              "辨認加水改變濃度",
              "pH朝中性移動",
              "區分溶液表現與物質本性"
            ],
            "answer": "沒有；它仍是同一種酸，只是較稀。",
            "why": "加水降低單位體積中的酸性粒子，使pH上升；溶質仍是鹽酸，不能把稀釋後的低濃度叫成弱酸。"
          },
          {
            "id": "PHYCHM_R4_L_112_EX_02",
            "prompt": "0.10 mol/L甲酸pH 2、同濃度乙酸pH 3，在題設模型下哪一杯解離程度較大？",
            "steps": [
              "確認兩酸濃度相同",
              "較低pH表示酸性粒子較多",
              "在控制條件下比較"
            ],
            "answer": "甲酸的解離程度較大。",
            "why": "濃度與量測條件相同時，甲的pH較低，支持它在水中產生較多酸性粒子；結論限於題設兩種酸與條件。"
          },
          {
            "id": "PHYCHM_R4_L_112_EX_03",
            "prompt": "一杯濃弱酸與一杯很稀的強酸，能否只憑名稱預測哪杯pH較低？",
            "steps": [
              "強弱與濃度是兩個變因",
              "兩者方向可能互相影響",
              "需要濃度或實測pH"
            ],
            "answer": "不能。",
            "why": "強酸解離程度大，但若非常稀，實際酸性表現未必比濃弱酸明顯；沒有量化條件就不能排序。"
          }
        ],
        "misconceptions": [
          {
            "belief": "濃酸就是強酸，稀酸就是弱酸。",
            "whyWrong": "濃淡是含量，強弱是解離本性。",
            "correction": "分別記錄酸種、濃度與pH。"
          },
          {
            "belief": "強酸加水後會變成弱酸。",
            "whyWrong": "稀釋改變濃度，不改變溶質種類的分類。",
            "correction": "說「稀的強酸溶液」，不要改名。"
          },
          {
            "belief": "弱酸的pH一定比任何強酸高。",
            "whyWrong": "實際pH同時受濃度影響。",
            "correction": "比較前確認濃度條件或直接量測。"
          },
          {
            "belief": "相同pH就表示兩杯濃度與酸種都相同。",
            "whyWrong": "不同酸與濃度組合可能得到相同pH。",
            "correction": "pH只是一項溶液性質，不能唯一反推組成。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_112",
        "title": "同一酸稀釋與不同酸比較",
        "body": "所有數據在相同溫度量得。A1與A2為同一種強酸，B為另一種弱酸。",
        "dataTable": {
          "columns": [
            "溶液",
            "標示濃度",
            "pH"
          ],
          "rows": [
            [
              "A1",
              "0.10 mol/L",
              "1.0"
            ],
            [
              "A2",
              "0.0010 mol/L",
              "3.0"
            ],
            [
              "B",
              "0.10 mol/L",
              "2.9"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_112_01",
          "stem": "溶液濃度主要描述什麼？",
          "options": [
            "容器顏色",
            "液體是否透明",
            "酸在水中解離的本性名稱",
            "一定量溶液中溶質的多寡"
          ],
          "answerIndex": 3,
          "rationales": [
            "與濃度無必然關係。",
            "透明不代表濃度。",
            "這較接近強弱概念。",
            "這是濃度概念。"
          ],
          "reviewEvidence": "一定量溶液中溶質的多寡：這是濃度概念；容器顏色：與濃度無必然關係；液體是否透明：透明不代表濃度；酸在水中解離的本性名稱：這較接近強弱概念。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "定義辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_112_02",
          "stem": "強酸加大量水後，最精確的描述是？",
          "options": [
            "完全沒有酸",
            "自動變成另一種弱酸",
            "形成較稀的強酸溶液",
            "變成強鹼"
          ],
          "answerIndex": 2,
          "rationales": [
            "仍有溶質。",
            "本性不因稀釋改名。",
            "酸種未變，濃度下降。",
            "加水不會反轉酸鹼。"
          ],
          "reviewEvidence": "形成較稀的強酸溶液：酸種未變，濃度下降；完全沒有酸：仍有溶質；自動變成另一種弱酸：本性不因稀釋改名；變成強鹼：加水不會反轉酸鹼。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "概念區分"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_112_03",
          "stem": "要公平比較兩種酸的解離表現，應優先控制？",
          "options": [
            "形式濃度與溫度相同",
            "一杯濃一杯稀",
            "杯子標籤顏色不同",
            "量測者使用不同儀器且不校正"
          ],
          "answerIndex": 0,
          "rationales": [
            "可減少濃度與溫度干擾。",
            "濃度不同會混淆。",
            "顏色非科學變因。",
            "儀器差會加誤差。"
          ],
          "reviewEvidence": "形式濃度與溫度相同：可減少濃度與溫度干擾；一杯濃一杯稀：濃度不同會混淆；杯子標籤顏色不同：顏色非科學變因；量測者使用不同儀器且不校正：儀器差會加誤差。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "實驗設計"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_112_04",
          "stem": "同一酸稀釋後pH由2升到3，表示？",
          "options": [
            "酸性更強",
            "酸性表現減弱但酸種未變",
            "已成鹼性",
            "強酸定義失效"
          ],
          "answerIndex": 1,
          "rationales": [
            "酸性方向相反。",
            "pH朝7上升。",
            "3仍小於7。",
            "本性未改。"
          ],
          "reviewEvidence": "酸性表現減弱但酸種未變：pH朝7上升；酸性更強：酸性方向相反；已成鹼性：3仍小於7；強酸定義失效：本性未改。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "稀釋判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_112_05",
          "stem": "同一鹼液加水後，通常pH如何變化？",
          "options": [
            "完全不能量測",
            "遠離7而上升",
            "立刻變成0",
            "向7下降"
          ],
          "answerIndex": 3,
          "rationales": [
            "仍可量測。",
            "這表示更鹼，不符稀釋。",
            "不會成0。",
            "鹼性粒子濃度降低。"
          ],
          "reviewEvidence": "向7下降：鹼性粒子濃度降低；完全不能量測：仍可量測；遠離7而上升：這表示更鹼，不符稀釋；立刻變成0：不會成0。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "類比推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_112_06",
          "stem": "濃弱酸與稀強酸何者pH較低？",
          "options": [
            "稀強酸必較低",
            "兩者必相等",
            "資料不足，需濃度與實測資訊",
            "濃弱酸必較低"
          ],
          "answerIndex": 2,
          "rationales": [
            "強也不抵消任意稀釋。",
            "無理由相等。",
            "兩個因素同時改變。",
            "濃度高不保證。"
          ],
          "reviewEvidence": "資料不足，需濃度與實測資訊：兩個因素同時改變；稀強酸必較低：強也不抵消任意稀釋；兩者必相等：無理由相等；濃弱酸必較低：濃度高不保證。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "資訊充分性"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_112_07",
          "stem": "兩杯酸pH相同，能直接推論什麼？",
          "options": [
            "當下酸性表現相近，但組成未必相同",
            "酸種與濃度必完全相同",
            "兩杯必是純水",
            "兩杯都沒有離子"
          ],
          "answerIndex": 0,
          "rationales": [
            "pH相同只給表現資訊。",
            "不同組合可同pH。",
            "酸液非純水。",
            "酸液有離子。"
          ],
          "reviewEvidence": "當下酸性表現相近，但組成未必相同：pH相同只給表現資訊；酸種與濃度必完全相同：不同組合可同pH；兩杯必是純水：酸液非純水；兩杯都沒有離子：酸液有離子。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "逆向推論限制"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_112_08",
          "stem": "下列哪一詞組沒有混淆概念？",
          "options": [
            "稀的強酸溶液",
            "稀酸必為弱酸",
            "濃酸必為強酸",
            "pH低所以濃度必最高"
          ],
          "answerIndex": 0,
          "rationales": [
            "同時正確描述本性與濃度。",
            "把兩概念等同。",
            "仍混淆。",
            "不同酸時不能直接推濃度。"
          ],
          "reviewEvidence": "稀的強酸溶液：同時正確描述本性與濃度；稀酸必為弱酸：把兩概念等同；濃酸必為強酸：仍混淆；pH低所以濃度必最高：不同酸時不能直接推濃度。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "語意辨析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_112_09",
          "stem": "0.10 mol/L的兩種酸pH不同，較低pH可支持什麼？",
          "options": [
            "其容器一定較小",
            "其溶液質量一定較大",
            "同濃度條件下產生較多酸性粒子",
            "另一杯一定不是酸"
          ],
          "answerIndex": 2,
          "rationales": [
            "容器無關。",
            "pH不決定總質量。",
            "控制濃度後可比較解離表現。",
            "另一杯仍可能酸性。"
          ],
          "reviewEvidence": "同濃度條件下產生較多酸性粒子：控制濃度後可比較解離表現；其容器一定較小：容器無關；其溶液質量一定較大：pH不決定總質量；另一杯一定不是酸：另一杯仍可能酸性。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "控制推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_112_10",
          "stem": "為何稀釋酸液時要把酸慢慢加入水中並依規範操作？",
          "options": [
            "可使酸自動變鹼",
            "混合可能放熱，需控制局部升溫與濺出",
            "水一定燃燒",
            "酸不會和水混合"
          ],
          "answerIndex": 1,
          "rationales": [
            "稀釋不反轉酸鹼。",
            "降低劇烈放熱濺灑風險。",
            "水不可燃。",
            "酸可與水混合。"
          ],
          "reviewEvidence": "混合可能放熱，需控制局部升溫與濺出：降低劇烈放熱濺灑風險；可使酸自動變鹼：稀釋不反轉酸鹼；水一定燃燒：水不可燃；酸不會和水混合：酸可與水混合。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "安全解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_112_11",
          "stem": "哪一資料不足以單獨判定酸的強弱本性？",
          "options": [
            "相同條件下的離子證據",
            "控制濃度後的比較結果",
            "同濃度同溫度的相對pH",
            "不同濃度兩杯溶液的pH"
          ],
          "answerIndex": 3,
          "rationales": [
            "可支持解離比較。",
            "已控制干擾。",
            "可提供相對證據。",
            "濃度變因會混淆。"
          ],
          "reviewEvidence": "不同濃度兩杯溶液的pH：濃度變因會混淆；相同條件下的離子證據：可支持解離比較；控制濃度後的比較結果：已控制干擾；同濃度同溫度的相對pH：可提供相對證據。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_112_12",
          "stem": "同一強酸溶液濃度降低100倍，哪項一定不因此改變？",
          "options": [
            "酸性粒子濃度不變",
            "溶質仍是同一種酸",
            "pH必保持原值",
            "每毫升溶質量不變"
          ],
          "answerIndex": 1,
          "rationales": [
            "濃度會下降。",
            "物質身分未換。",
            "稀釋會改pH。",
            "單位體積含量降低。"
          ],
          "reviewEvidence": "溶質仍是同一種酸：物質身分未換；酸性粒子濃度不變：濃度會下降；pH必保持原值：稀釋會改pH；每毫升溶質量不變：單位體積含量降低。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "不變量"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_112_01",
          "stimulusId": "PHYCHM_R4_STIM_112",
          "stem": "A1與A2資料最能說明什麼？",
          "options": [
            "同一強酸稀釋後pH上升，但酸種未變",
            "濃度降低使pH下降",
            "強酸稀釋後變弱酸",
            "兩杯濃度相同"
          ],
          "answerIndex": 0,
          "rationales": [
            "A2濃度較低且pH 3。",
            "pH實際上升。",
            "A1、A2標示同種強酸。",
            "相差100倍。"
          ],
          "reviewEvidence": "同一強酸稀釋後pH上升，但酸種未變：A2濃度較低且pH 3；濃度降低使pH下降：pH實際上升；強酸稀釋後變弱酸：A1、A2標示同種強酸；兩杯濃度相同：相差100倍。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_112_02",
          "stimulusId": "PHYCHM_R4_STIM_112",
          "stem": "A1與B同為0.10 mol/L，哪一項受資料支持？",
          "options": [
            "兩者pH必相同",
            "B一定不是酸",
            "A1在相同濃度下酸性表現更明顯",
            "B的pH較低"
          ],
          "answerIndex": 2,
          "rationales": [
            "表中不同。",
            "B pH 2.9仍酸性。",
            "A1 pH 1.0低於B的2.9。",
            "數值相反。"
          ],
          "reviewEvidence": "A1在相同濃度下酸性表現更明顯：A1 pH 1.0低於B的2.9；兩者pH必相同：表中不同；B一定不是酸：B pH 2.9仍酸性；B的pH較低：數值相反。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "控制比較"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_112_03",
          "stimulusId": "PHYCHM_R4_STIM_112",
          "stem": "A2與B的pH接近，能否說兩杯濃度相同？",
          "options": [
            "能，兩杯都是強酸",
            "不能，A2為0.0010 mol/L而B為0.10 mol/L",
            "不能，因B是鹼",
            "能，pH相近保證濃度相同"
          ],
          "answerIndex": 1,
          "rationales": [
            "B標示弱酸。",
            "表中濃度差100倍。",
            "B pH低於7。",
            "pH不唯一決定濃度。"
          ],
          "reviewEvidence": "不能，A2為0.0010 mol/L而B為0.10 mol/L：表中濃度差100倍；能，兩杯都是強酸：B標示弱酸；不能，因B是鹼：B pH低於7；能，pH相近保證濃度相同：pH不唯一決定濃度。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "反例整合"
          ]
        }
      ]
    }
  ]
};
