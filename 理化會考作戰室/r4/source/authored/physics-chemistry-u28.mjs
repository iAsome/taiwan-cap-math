export const PHYSICS_CHEMISTRY_AUTHORED_U28 = {
  "unitId": "PHYCHM_R4_U28",
  "title": "加速度與速度改變",
  "authorityRefs": [
    "AUTH-NATURAL-LC-EB-4-11",
    "AUTH-NATURAL-LC-EB-4-8",
    "AUTH-NATURAL-LC-EB-4-9",
    "AUTH-NATURAL-LP-PA-4-2"
  ],
  "provenance": {
    "status": "original",
    "authorRole": "Codex R4 physics and chemistry content author",
    "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
  },
  "skills": [
    {
      "id": "PHYCHM_R4_S210",
      "title": "由速度改變理解加速度",
      "authorityRefs": [
        "AUTH-NATURAL-LC-EB-4-11",
        "AUTH-NATURAL-LC-EB-4-8",
        "AUTH-NATURAL-LC-EB-4-9",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_008"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_210",
        "objective": "能掌握速度改變理解加速度的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "加速度表示速度隨時間的變化；速度大小、方向或兩者改變都可產生加速度。"
          },
          {
            "title": "證據判讀",
            "content": "向右為正，每秒記錄一次小車速度；加速度由速度變化除以時間。 (7−1)÷3＝2 m/s²。 2 s 所在列為 5 m/s。"
          },
          {
            "title": "適用界線",
            "content": "加速度表示速度隨時間的變化；速度大小、方向或兩者改變都可產生加速度。 每秒速度增量固定 +2 m/s。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_210_EX_01",
            "prompt": "小車速度逐秒紀錄：向右為正，每秒記錄一次小車速度；加速度由速度變化除以時間。 平均加速度為何？",
            "steps": [
              "向右為正，每秒記錄一次小車速度；加速度由速度變化除以時間。",
              "(7−1)÷3＝2 m/s²。",
              "(7−1)÷3＝2 m/s²。"
            ],
            "answer": "2 m/s²；(7−1)÷3＝2 m/s²。",
            "why": "(7−1)÷3＝2 m/s²。"
          },
          {
            "id": "PHYCHM_R4_L_210_EX_02",
            "prompt": "小車速度逐秒紀錄：向右為正，每秒記錄一次小車速度；加速度由速度變化除以時間。 2 s 時速度為何？",
            "steps": [
              "向右為正，每秒記錄一次小車速度；加速度由速度變化除以時間。",
              "2 s 所在列為 5 m/s。",
              "2 s 所在列為 5 m/s。"
            ],
            "answer": "5 m/s；2 s 所在列為 5 m/s。",
            "why": "2 s 所在列為 5 m/s。"
          },
          {
            "id": "PHYCHM_R4_L_210_EX_03",
            "prompt": "小車速度逐秒紀錄：向右為正，每秒記錄一次小車速度；加速度由速度變化除以時間。 資料表示何種運動？",
            "steps": [
              "向右為正，每秒記錄一次小車速度；加速度由速度變化除以時間。",
              "每秒速度增量固定 +2 m/s。",
              "每秒速度增量固定 +2 m/s。"
            ],
            "answer": "速度每秒增加 2 m/s；每秒速度增量固定 +2 m/s。",
            "why": "每秒速度增量固定 +2 m/s。"
          }
        ],
        "misconceptions": [
          {
            "belief": "把加速度當成速度本身，看到速度大就判定加速度一定大。",
            "whyWrong": "加速度描述速度隨時間的變化率；速度很大但保持不變時，加速度仍為零。",
            "correction": "使用速度變化量除以時間，不能用單一速度值取代。"
          },
          {
            "belief": "速度為零的物體一定沒有加速度。",
            "whyWrong": "物體在換向瞬間速度可為零，但速度仍正在改變，因此加速度可不為零。",
            "correction": "比較前後速度或受力狀態，分別判斷速度與加速度。"
          },
          {
            "belief": "只要運動方向不變就認為加速度為零。",
            "whyWrong": "同方向運動若快慢改變，速度大小仍變化，故有加速度。",
            "correction": "方向或速率任一改變，都代表速度改變並可能有加速度。"
          },
          {
            "belief": "把加速度單位寫成 m/s，與速度單位混用。",
            "whyWrong": "加速度是每秒速度改變多少，單位應為 m/s²。",
            "correction": "先算速度差的 m/s，再除以秒，得到 m/s²。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_210",
        "title": "小車速度逐秒紀錄",
        "body": "向右為正，每秒記錄一次小車速度；加速度由速度變化除以時間。",
        "dataTable": {
          "caption": "小車速度逐秒紀錄",
          "columns": [
            "時間",
            "速度",
            "每秒變化"
          ],
          "rows": [
            [
              "0 s",
              "1 m/s",
              "—"
            ],
            [
              "1 s",
              "3 m/s",
              "+2 m/s"
            ],
            [
              "2 s",
              "5 m/s",
              "+2 m/s"
            ],
            [
              "3 s",
              "7 m/s",
              "+2 m/s"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_008"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_210_01",
          "stem": "物體速度每 1 s 增加 2 m/s，其加速度為何？",
          "options": [
            "加速度為 2 m/s²",
            "物體的加速度為 2 m/s",
            "物體的加速度為 0.5 m/s²",
            "物體的加速度為 4 m/s²"
          ],
          "answerIndex": 0,
          "rationales": [
            "加速度=速度變化量÷時間=2÷1=2 m/s²。",
            "物體的加速度為 2 m/s不成立。加速度=速度變化量÷時間=2÷1=2 m/s²。",
            "物體的加速度為 0.5 m/s²不成立。加速度=速度變化量÷時間=2÷1=2 m/s²。",
            "物體的加速度為 4 m/s²不成立。加速度=速度變化量÷時間=2÷1=2 m/s²。"
          ],
          "reviewEvidence": "加速度=速度變化量÷時間=2÷1=2 m/s²。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_210_02",
          "stem": "汽車速度保持 15 m/s 不變，其加速度為何？",
          "options": [
            "物體的加速度為 15 m/s²",
            "物體的加速度為 1 m/s²",
            "物體的加速度為 -15 m/s²",
            "加速度為 0 m/s²"
          ],
          "answerIndex": 3,
          "rationales": [
            "物體的加速度為 15 m/s²不成立。速度大小與方向都不變，速度變化量為零。",
            "物體的加速度為 1 m/s²不成立。速度大小與方向都不變，速度變化量為零。",
            "物體的加速度為 -15 m/s²不成立。速度大小與方向都不變，速度變化量為零。",
            "速度大小與方向都不變，速度變化量為零。"
          ],
          "reviewEvidence": "速度大小與方向都不變，速度變化量為零。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_210_03",
          "stem": "速度由 4 m/s 增至 10 m/s，共用 3 s。平均加速度為何？",
          "options": [
            "平均加速度為 6 m/s²",
            "平均加速度為 2 m/s²",
            "平均加速度為 3 m/s²",
            "平均加速度為 14 m/s²"
          ],
          "answerIndex": 1,
          "rationales": [
            "平均加速度為 6 m/s²不成立。速度變化 10-4=6 m/s，6÷3=2 m/s²。",
            "速度變化 10-4=6 m/s，6÷3=2 m/s²。",
            "平均加速度為 3 m/s²不成立。速度變化 10-4=6 m/s，6÷3=2 m/s²。",
            "平均加速度為 14 m/s²不成立。速度變化 10-4=6 m/s，6÷3=2 m/s²。"
          ],
          "reviewEvidence": "速度變化 10-4=6 m/s，6÷3=2 m/s²。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_210_04",
          "stem": "下列哪一情況必有加速度？",
          "options": [
            "物體以固定速度直線前進",
            "物體運動方向正在改變",
            "物體靜止且持續靜止",
            "物體位置座標為正值"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體以固定速度直線前進不成立。速度包含方向，方向改變即代表速度改變。",
            "速度包含方向，方向改變即代表速度改變。",
            "物體靜止且持續靜止不成立。速度包含方向，方向改變即代表速度改變。",
            "物體位置座標為正值不成立。速度包含方向，方向改變即代表速度改變。"
          ],
          "reviewEvidence": "速度包含方向，方向改變即代表速度改變。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_210_05",
          "stem": "速度為 20 m/s 是否能單獨決定加速度？",
          "options": [
            "能，加速度就是 20 m/s²",
            "能，加速度必為零",
            "不能，因為速度沒有單位",
            "不能，還需知道速度如何隨時間改變"
          ],
          "answerIndex": 3,
          "rationales": [
            "能，加速度就是 20 m/s²不成立。單一時刻速度不含速度差與時間差，無法求加速度。",
            "能，加速度必為零不成立。單一時刻速度不含速度差與時間差，無法求加速度。",
            "不能，因為速度沒有單位不成立。單一時刻速度不含速度差與時間差，無法求加速度。",
            "單一時刻速度不含速度差與時間差，無法求加速度。"
          ],
          "reviewEvidence": "單一時刻速度不含速度差與時間差，無法求加速度。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_210_06",
          "stem": "物體向東運動且速率逐漸增加，是否有加速度？",
          "options": [
            "沒有，因為方向不變",
            "沒有，因為位置為正",
            "有，但加速度必向西",
            "有，加速度具有向東分量"
          ],
          "answerIndex": 3,
          "rationales": [
            "沒有，因為方向不變不成立。向東速度大小增加，速度變化指向東方。",
            "沒有，因為位置為正不成立。向東速度大小增加，速度變化指向東方。",
            "有，但加速度必向西不成立。向東速度大小增加，速度變化指向東方。",
            "向東速度大小增加，速度變化指向東方。"
          ],
          "reviewEvidence": "向東速度大小增加，速度變化指向東方。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_210_07",
          "stem": "物體向東運動但逐漸變慢，加速度方向如何？",
          "options": [
            "物體的加速度必向東",
            "物體的加速度必為零",
            "加速度具有向西分量",
            "物體的加速度方向無法與速度相反"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體的加速度必向東不成立。減慢時加速度與現有速度方向相反。",
            "物體的加速度必為零不成立。減慢時加速度與現有速度方向相反。",
            "減慢時加速度與現有速度方向相反。",
            "物體的加速度方向無法與速度相反不成立。減慢時加速度與現有速度方向相反。"
          ],
          "reviewEvidence": "減慢時加速度與現有速度方向相反。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_210_08",
          "stem": "加速度的 SI 單位為何？",
          "options": [
            "m/s",
            "m²/s",
            "m/s²",
            "s/m"
          ],
          "answerIndex": 2,
          "rationales": [
            "m/s不成立。速度單位 m/s 再除以時間 s，得到 m/s²。",
            "m²/s不成立。速度單位 m/s 再除以時間 s，得到 m/s²。",
            "速度單位 m/s 再除以時間 s，得到 m/s²。",
            "s/m不成立。速度單位 m/s 再除以時間 s，得到 m/s²。"
          ],
          "reviewEvidence": "速度單位 m/s 再除以時間 s，得到 m/s²。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_210_09",
          "stem": "物體由靜止開始，2 s 後速度為 8 m/s。平均加速度為何？",
          "options": [
            "平均加速度為 4 m/s²",
            "平均加速度為 16 m/s²",
            "平均加速度為 8 m/s²",
            "平均加速度為 0.25 m/s²"
          ],
          "answerIndex": 0,
          "rationales": [
            "速度變化為 8-0=8 m/s，8÷2=4 m/s²。",
            "平均加速度為 16 m/s²不成立。速度變化為 8-0=8 m/s，8÷2=4 m/s²。",
            "平均加速度為 8 m/s²不成立。速度變化為 8-0=8 m/s，8÷2=4 m/s²。",
            "平均加速度為 0.25 m/s²不成立。速度變化為 8-0=8 m/s，8÷2=4 m/s²。"
          ],
          "reviewEvidence": "速度變化為 8-0=8 m/s，8÷2=4 m/s²。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_210_10",
          "stem": "速度由 +3 m/s 變為 -3 m/s，速度變化量為何？",
          "options": [
            "物體的速度變化量為 0 m/s",
            "速度變化量為 -6 m/s",
            "物體的速度變化量為 +6 m/s",
            "物體的速度變化量為 -3 m/s"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體的速度變化量為 0 m/s不成立。末速度減初速度，-3-(+3)=-6 m/s。",
            "末速度減初速度，-3-(+3)=-6 m/s。",
            "物體的速度變化量為 +6 m/s不成立。末速度減初速度，-3-(+3)=-6 m/s。",
            "物體的速度變化量為 -3 m/s不成立。末速度減初速度，-3-(+3)=-6 m/s。"
          ],
          "reviewEvidence": "末速度減初速度，-3-(+3)=-6 m/s。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_210_11",
          "stem": "球在圓周上保持速率不變，是否有加速度？",
          "options": [
            "沒有，因速率不變",
            "沒有，因路徑閉合",
            "只有通過最高點才有",
            "有，因速度方向持續改變"
          ],
          "answerIndex": 3,
          "rationales": [
            "沒有，因速率不變不成立。速度向量方向持續改變，因此存在指向圓心的加速度。",
            "沒有，因路徑閉合不成立。速度向量方向持續改變，因此存在指向圓心的加速度。",
            "只有通過最高點才有不成立。速度向量方向持續改變，因此存在指向圓心的加速度。",
            "速度向量方向持續改變，因此存在指向圓心的加速度。"
          ],
          "reviewEvidence": "速度向量方向持續改變，因此存在指向圓心的加速度。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_210_12",
          "stem": "若加速度固定為 -2 m/s²，表示什麼？",
          "options": [
            "速度每秒改變 -2 m/s",
            "物體的速率每秒必減少 2 m/s",
            "物體的位置每秒減少 2 m",
            "物體的速度永遠為 -2 m/s"
          ],
          "answerIndex": 0,
          "rationales": [
            "負加速度表示速度數值每秒減少 2 m/s；是否變慢仍視速度方向而定。",
            "物體的速率每秒必減少 2 m/s不成立。負加速度表示速度數值每秒減少 2 m/s；是否變慢仍視速度方向而定。",
            "物體的位置每秒減少 2 m不成立。負加速度表示速度數值每秒減少 2 m/s；是否變慢仍視速度方向而定。",
            "物體的速度永遠為 -2 m/s不成立。負加速度表示速度數值每秒減少 2 m/s；是否變慢仍視速度方向而定。"
          ],
          "reviewEvidence": "負加速度表示速度數值每秒減少 2 m/s；是否變慢仍視速度方向而定。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_210_01",
          "stimulusId": "PHYCHM_R4_STIM_210",
          "stem": "依表格，速度由 1 m/s、3 m/s、5 m/s 到 7 m/s，變化特徵為何？",
          "options": [
            "此時物體每秒增加 1 m/s",
            "此時物體每秒減少 2 m/s",
            "每秒增加 2 m/s",
            "物體的速度始終不變"
          ],
          "answerIndex": 2,
          "rationales": [
            "此時物體每秒增加 1 m/s不成立。相鄰速度差均為 +2 m/s，時間間隔皆為 1 s。",
            "此時物體每秒減少 2 m/s不成立。相鄰速度差均為 +2 m/s，時間間隔皆為 1 s。",
            "相鄰速度差均為 +2 m/s，時間間隔皆為 1 s。",
            "物體的速度始終不變不成立。相鄰速度差均為 +2 m/s，時間間隔皆為 1 s。"
          ],
          "reviewEvidence": "相鄰速度差均為 +2 m/s，時間間隔皆為 1 s。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_210_02",
          "stimulusId": "PHYCHM_R4_STIM_210",
          "stem": "依表格，物體的加速度為何？",
          "options": [
            "加速度為 +2 m/s²",
            "物體的加速度為 +1 m/s²",
            "物體的加速度為 +7 m/s²",
            "物體的加速度為 0 m/s²"
          ],
          "answerIndex": 0,
          "rationales": [
            "每 1 s 速度增加 2 m/s，所以加速度為 +2 m/s²。",
            "物體的加速度為 +1 m/s²不成立。每 1 s 速度增加 2 m/s，所以加速度為 +2 m/s²。",
            "物體的加速度為 +7 m/s²不成立。每 1 s 速度增加 2 m/s，所以加速度為 +2 m/s²。",
            "物體的加速度為 0 m/s²不成立。每 1 s 速度增加 2 m/s，所以加速度為 +2 m/s²。"
          ],
          "reviewEvidence": "每 1 s 速度增加 2 m/s，所以加速度為 +2 m/s²。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "加速度計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_210_03",
          "stimulusId": "PHYCHM_R4_STIM_210",
          "stem": "依表格，若同樣趨勢延續，下一秒速度最可能為何？",
          "options": [
            "物體的速度為 7 m/s",
            "物體的速度為 8 m/s",
            "速度為 9 m/s",
            "物體的速度為 14 m/s"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體的速度為 7 m/s不成立。速度每秒固定增加 2 m/s，7+2=9 m/s。",
            "物體的速度為 8 m/s不成立。速度每秒固定增加 2 m/s，7+2=9 m/s。",
            "速度每秒固定增加 2 m/s，7+2=9 m/s。",
            "物體的速度為 14 m/s不成立。速度每秒固定增加 2 m/s，7+2=9 m/s。"
          ],
          "reviewEvidence": "速度每秒固定增加 2 m/s，7+2=9 m/s。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "向量評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S211",
      "title": "區分快慢改變與方向改變造成的加速度",
      "authorityRefs": [
        "AUTH-NATURAL-LC-EB-4-11",
        "AUTH-NATURAL-LC-EB-4-8",
        "AUTH-NATURAL-LC-EB-4-9",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_008"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_211",
        "objective": "能掌握快慢改變與方向改變造成的加速度的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "直線上快慢改變有加速度；物體以恆定快慢轉彎時方向改變，也有加速度。"
          },
          {
            "title": "證據判讀",
            "content": "四個物體在相同短時間內的初、末速度以向東為正表示。 乙初末皆 +4 m/s。 丙由 +4 變 −4，大小相同方向反轉。"
          },
          {
            "title": "適用界線",
            "content": "直線上快慢改變有加速度；物體以恆定快慢轉彎時方向改變，也有加速度。 方向改變使速度改變，因此有加速度。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_211_EX_01",
            "prompt": "速度大小與方向改變：四個物體在相同短時間內的初、末速度以向東為正表示。 哪個速度完全不變？",
            "steps": [
              "四個物體在相同短時間內的初、末速度以向東為正表示。",
              "乙初末皆 +4 m/s。",
              "乙初末皆 +4 m/s。"
            ],
            "answer": "乙；乙初末皆 +4 m/s。",
            "why": "乙初末皆 +4 m/s。"
          },
          {
            "id": "PHYCHM_R4_L_211_EX_02",
            "prompt": "速度大小與方向改變：四個物體在相同短時間內的初、末速度以向東為正表示。 哪個只改方向而速率相同？",
            "steps": [
              "四個物體在相同短時間內的初、末速度以向東為正表示。",
              "丙由 +4 變 −4，大小相同方向反轉。",
              "丙由 +4 變 −4，大小相同方向反轉。"
            ],
            "answer": "丙；丙由 +4 變 −4，大小相同方向反轉。",
            "why": "丙由 +4 變 −4，大小相同方向反轉。"
          },
          {
            "id": "PHYCHM_R4_L_211_EX_03",
            "prompt": "速度大小與方向改變：四個物體在相同短時間內的初、末速度以向東為正表示。 丙有沒有加速度？",
            "steps": [
              "四個物體在相同短時間內的初、末速度以向東為正表示。",
              "方向改變使速度改變，因此有加速度。",
              "方向改變使速度改變，因此有加速度。"
            ],
            "answer": "有，速度向量改變；方向改變使速度改變，因此有加速度。",
            "why": "方向改變使速度改變，因此有加速度。"
          }
        ],
        "misconceptions": [
          {
            "belief": "計算速度變化量時用初速度減末速度，符號完全顛倒。",
            "whyWrong": "定義是末速度減初速度；相減順序決定變化方向。",
            "correction": "固定寫成 Δv=v末-v初，再代入有號速度。"
          },
          {
            "belief": "遇到負速度就先取絕對值再相減。",
            "whyWrong": "取絕對值會丟失方向，無法判斷速度向量的真正改變。",
            "correction": "保留初末速度正負號完成相減，最後再解釋方向。"
          },
          {
            "belief": "速度由正變負時只把兩個大小相減。",
            "whyWrong": "跨越零代表方向反轉，速度變化量包含兩側的總差。",
            "correction": "例如 +4 到 -4 應算 -4-(+4)=-8 m/s。"
          },
          {
            "belief": "速度變化量為正就判定物體一定向正方向運動。",
            "whyWrong": "正變化量表示速度數值增加；物體仍可能具有負速度而向負方向。",
            "correction": "分別看當下速度符號與速度變化量符號。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_211",
        "title": "速度大小與方向改變",
        "body": "四個物體在相同短時間內的初、末速度以向東為正表示。",
        "dataTable": {
          "caption": "速度大小與方向改變",
          "columns": [
            "物體",
            "初速度",
            "末速度"
          ],
          "rows": [
            [
              "甲",
              "+4 m/s",
              "+7 m/s"
            ],
            [
              "乙",
              "+4 m/s",
              "+4 m/s"
            ],
            [
              "丙",
              "+4 m/s",
              "−4 m/s"
            ],
            [
              "丁",
              "−6 m/s",
              "−3 m/s"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_008"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_211_01",
          "stem": "速度由 +4 m/s 變為 +7 m/s，速度變化量為何？",
          "options": [
            "速度變化量為 +3 m/s",
            "物體的速度變化量為 -3 m/s",
            "物體的速度變化量為 +11 m/s",
            "物體的速度變化量為 0 m/s"
          ],
          "answerIndex": 0,
          "rationales": [
            "Δv=7-4=+3 m/s。",
            "物體的速度變化量為 -3 m/s不成立。Δv=7-4=+3 m/s。",
            "物體的速度變化量為 +11 m/s不成立。Δv=7-4=+3 m/s。",
            "物體的速度變化量為 0 m/s不成立。Δv=7-4=+3 m/s。"
          ],
          "reviewEvidence": "Δv=7-4=+3 m/s。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_211_02",
          "stem": "速度由 +4 m/s 保持為 +4 m/s，速度變化量為何？",
          "options": [
            "速度變化量為 0 m/s",
            "物體的速度變化量為 +8 m/s",
            "物體的速度變化量為 +4 m/s",
            "物體的速度變化量為 -4 m/s"
          ],
          "answerIndex": 0,
          "rationales": [
            "初末速度相同，Δv=4-4=0。",
            "物體的速度變化量為 +8 m/s不成立。初末速度相同，Δv=4-4=0。",
            "物體的速度變化量為 +4 m/s不成立。初末速度相同，Δv=4-4=0。",
            "物體的速度變化量為 -4 m/s不成立。初末速度相同，Δv=4-4=0。"
          ],
          "reviewEvidence": "初末速度相同，Δv=4-4=0。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_211_03",
          "stem": "球原先以 +4 m/s 運動，碰牆後變成 -4 m/s；以原方向為正，速度變化量是多少？",
          "options": [
            "物體的速度變化量為 0 m/s",
            "物體的速度變化量為 +8 m/s",
            "物體的速度變化量為 -4 m/s",
            "速度變化量為 -8 m/s"
          ],
          "answerIndex": 3,
          "rationales": [
            "物體的速度變化量為 0 m/s不成立。Δv=-4-(+4)=-8 m/s，包含方向反轉。",
            "物體的速度變化量為 +8 m/s不成立。Δv=-4-(+4)=-8 m/s，包含方向反轉。",
            "物體的速度變化量為 -4 m/s不成立。Δv=-4-(+4)=-8 m/s，包含方向反轉。",
            "Δv=-4-(+4)=-8 m/s，包含方向反轉。"
          ],
          "reviewEvidence": "Δv=-4-(+4)=-8 m/s，包含方向反轉。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_211_04",
          "stem": "速度由 -6 m/s 變為 -3 m/s，速度變化量為何？",
          "options": [
            "物體的速度變化量為 -3 m/s",
            "速度變化量為 +3 m/s",
            "物體的速度變化量為 -9 m/s",
            "物體的速度變化量為 +9 m/s"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體的速度變化量為 -3 m/s不成立。Δv=-3-(-6)=+3 m/s。",
            "Δv=-3-(-6)=+3 m/s。",
            "物體的速度變化量為 -9 m/s不成立。Δv=-3-(-6)=+3 m/s。",
            "物體的速度變化量為 +9 m/s不成立。Δv=-3-(-6)=+3 m/s。"
          ],
          "reviewEvidence": "Δv=-3-(-6)=+3 m/s。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_211_05",
          "stem": "速度由 -2 m/s 變為 +5 m/s，速度變化量為何？",
          "options": [
            "物體的速度變化量為 +3 m/s",
            "速度變化量為 +7 m/s",
            "物體的速度變化量為 -7 m/s",
            "物體的速度變化量為 -3 m/s"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體的速度變化量為 +3 m/s不成立。Δv=5-(-2)=+7 m/s。",
            "Δv=5-(-2)=+7 m/s。",
            "物體的速度變化量為 -7 m/s不成立。Δv=5-(-2)=+7 m/s。",
            "物體的速度變化量為 -3 m/s不成立。Δv=5-(-2)=+7 m/s。"
          ],
          "reviewEvidence": "Δv=5-(-2)=+7 m/s。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_211_06",
          "stem": "速度由 +8 m/s 變為 +2 m/s，速度變化量為何？",
          "options": [
            "物體的速度變化量為 +6 m/s",
            "物體的速度變化量為 +10 m/s",
            "速度變化量為 -6 m/s",
            "物體的速度變化量為 -10 m/s"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體的速度變化量為 +6 m/s不成立。Δv=2-8=-6 m/s。",
            "物體的速度變化量為 +10 m/s不成立。Δv=2-8=-6 m/s。",
            "Δv=2-8=-6 m/s。",
            "物體的速度變化量為 -10 m/s不成立。Δv=2-8=-6 m/s。"
          ],
          "reviewEvidence": "Δv=2-8=-6 m/s。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_211_07",
          "stem": "速度由 -7 m/s 變為 -10 m/s，速度變化量為何？",
          "options": [
            "物體的速度變化量為 +3 m/s",
            "速度變化量為 -3 m/s",
            "物體的速度變化量為 -17 m/s",
            "物體的速度變化量為 +17 m/s"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體的速度變化量為 +3 m/s不成立。Δv=-10-(-7)=-3 m/s。",
            "Δv=-10-(-7)=-3 m/s。",
            "物體的速度變化量為 -17 m/s不成立。Δv=-10-(-7)=-3 m/s。",
            "物體的速度變化量為 +17 m/s不成立。Δv=-10-(-7)=-3 m/s。"
          ],
          "reviewEvidence": "Δv=-10-(-7)=-3 m/s。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_211_08",
          "stem": "速度變化量的正負主要表示什麼？",
          "options": [
            "物體所在位置的正負",
            "物體的路程是否為負",
            "速度向量改變的方向",
            "時間是否倒流"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體所在位置的正負不成立。Δv 是有方向的速度差，其符號依所選正方向表示改變方向。",
            "物體的路程是否為負不成立。Δv 是有方向的速度差，其符號依所選正方向表示改變方向。",
            "Δv 是有方向的速度差，其符號依所選正方向表示改變方向。",
            "時間是否倒流不成立。Δv 是有方向的速度差，其符號依所選正方向表示改變方向。"
          ],
          "reviewEvidence": "Δv 是有方向的速度差，其符號依所選正方向表示改變方向。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_211_09",
          "stem": "計算 Δv 時，正確算式為何？",
          "options": [
            "初速度減末速度",
            "末速率加初速率",
            "末位置減初位置",
            "末速度減初速度"
          ],
          "answerIndex": 3,
          "rationales": [
            "初速度減末速度不成立。速度變化量定義為 v末-v初。",
            "末速率加初速率不成立。速度變化量定義為 v末-v初。",
            "末位置減初位置不成立。速度變化量定義為 v末-v初。",
            "速度變化量定義為 v末-v初。"
          ],
          "reviewEvidence": "速度變化量定義為 v末-v初。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_211_10",
          "stem": "初速度 +3 m/s，速度變化量 -5 m/s，末速度為何？",
          "options": [
            "末速度為 +8 m/s",
            "末速度為 -2 m/s",
            "末速度為 +2 m/s",
            "末速度為 -8 m/s"
          ],
          "answerIndex": 1,
          "rationales": [
            "末速度為 +8 m/s不成立。v末=v初+Δv=3+(-5)=-2 m/s。",
            "v末=v初+Δv=3+(-5)=-2 m/s。",
            "末速度為 +2 m/s不成立。v末=v初+Δv=3+(-5)=-2 m/s。",
            "末速度為 -8 m/s不成立。v末=v初+Δv=3+(-5)=-2 m/s。"
          ],
          "reviewEvidence": "v末=v初+Δv=3+(-5)=-2 m/s。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_211_11",
          "stem": "末速度 +6 m/s，速度變化量 +2 m/s，初速度為何？",
          "options": [
            "初速度為 +4 m/s",
            "初速度為 +8 m/s",
            "初速度為 -4 m/s",
            "初速度為 +3 m/s"
          ],
          "answerIndex": 0,
          "rationales": [
            "由 Δv=v末-v初，2=6-v初，所以初速度為 4 m/s。",
            "初速度為 +8 m/s不成立。由 Δv=v末-v初，2=6-v初，所以初速度為 4 m/s。",
            "初速度為 -4 m/s不成立。由 Δv=v末-v初，2=6-v初，所以初速度為 4 m/s。",
            "初速度為 +3 m/s不成立。由 Δv=v末-v初，2=6-v初，所以初速度為 4 m/s。"
          ],
          "reviewEvidence": "由 Δv=v末-v初，2=6-v初，所以初速度為 4 m/s。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_211_12",
          "stem": "速度變化量為零，可直接確定什麼？",
          "options": [
            "物體全程靜止",
            "物體位置未改變",
            "物體的路程一定為零",
            "初速度與末速度相同"
          ],
          "answerIndex": 3,
          "rationales": [
            "物體全程靜止不成立。Δv=0 只保證比較的初末速度相等，中間仍可能改變。",
            "物體位置未改變不成立。Δv=0 只保證比較的初末速度相等，中間仍可能改變。",
            "物體的路程一定為零不成立。Δv=0 只保證比較的初末速度相等，中間仍可能改變。",
            "Δv=0 只保證比較的初末速度相等，中間仍可能改變。"
          ],
          "reviewEvidence": "Δv=0 只保證比較的初末速度相等，中間仍可能改變。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_211_01",
          "stimulusId": "PHYCHM_R4_STIM_211",
          "stem": "依表格，A 的速度由 +4 變 +7 m/s，Δv 為何？",
          "options": [
            "A 的 Δv 為 -3 m/s",
            "A 的 Δv 為 +11 m/s",
            "A 的 Δv 為 +3 m/s",
            "A 的 Δv 為 0 m/s"
          ],
          "answerIndex": 2,
          "rationales": [
            "A 的 Δv 為 -3 m/s不成立。7-4=+3 m/s。",
            "A 的 Δv 為 +11 m/s不成立。7-4=+3 m/s。",
            "7-4=+3 m/s。",
            "A 的 Δv 為 0 m/s不成立。7-4=+3 m/s。"
          ],
          "reviewEvidence": "速度變化量為末速度減初速度，7-4=+3 m/s。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_211_02",
          "stimulusId": "PHYCHM_R4_STIM_211",
          "stem": "依表格，C 的速度由 +4 變 -4 m/s，Δv 為何？",
          "options": [
            "C 的 Δv 為 -8 m/s",
            "C 的 Δv 為 0 m/s",
            "C 的 Δv 為 +8 m/s",
            "C 的 Δv 為 -4 m/s"
          ],
          "answerIndex": 0,
          "rationales": [
            "-4-(+4)=-8 m/s。",
            "C 的 Δv 為 0 m/s不成立。-4-(+4)=-8 m/s。",
            "C 的 Δv 為 +8 m/s不成立。-4-(+4)=-8 m/s。",
            "C 的 Δv 為 -4 m/s不成立。-4-(+4)=-8 m/s。"
          ],
          "reviewEvidence": "-4-(+4)=-8 m/s。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "加速度計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_211_03",
          "stimulusId": "PHYCHM_R4_STIM_211",
          "stem": "依表格，D 的速度由 -6 變 -3 m/s，Δv 為何？",
          "options": [
            "D 的 Δv 為 -3 m/s",
            "D 的 Δv 為 -9 m/s",
            "D 的 Δv 為 +9 m/s",
            "D 的 Δv 為 +3 m/s"
          ],
          "answerIndex": 3,
          "rationales": [
            "D 的 Δv 為 -3 m/s不成立。-3-(-6)=+3 m/s。",
            "D 的 Δv 為 -9 m/s不成立。-3-(-6)=+3 m/s。",
            "D 的 Δv 為 +9 m/s不成立。-3-(-6)=+3 m/s。",
            "-3-(-6)=+3 m/s。"
          ],
          "reviewEvidence": "-3-(-6)=+3 m/s。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "向量評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S212",
      "title": "計算平均加速度的基本情境",
      "authorityRefs": [
        "AUTH-NATURAL-LC-EB-4-11",
        "AUTH-NATURAL-LC-EB-4-8",
        "AUTH-NATURAL-LC-EB-4-9",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_008"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_212",
        "objective": "能掌握平均加速度的基本情境的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "速度由 4 m/s 在 3 s 內均勻變為 10 m/s，平均加速度為 (10−4)/3＝2 m/s²。"
          },
          {
            "title": "證據判讀",
            "content": "每次都沿同一直線，以向右為正；表中給初速、末速與時間。 (8−0)÷4＝2 m/s²。 (4−10)÷2＝−3 m/s²。"
          },
          {
            "title": "適用界線",
            "content": "速度由 4 m/s 在 3 s 內均勻變為 10 m/s，平均加速度為 (10−4)/3＝2 m/s²。 甲 2、乙 2、丙 2，丁 −3 m/s²。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_212_EX_01",
            "prompt": "四次平均加速度計算：每次都沿同一直線，以向右為正；表中給初速、末速與時間。 甲平均加速度為何？",
            "steps": [
              "每次都沿同一直線，以向右為正；表中給初速、末速與時間。",
              "(8−0)÷4＝2 m/s²。",
              "(8−0)÷4＝2 m/s²。"
            ],
            "answer": "2 m/s²；(8−0)÷4＝2 m/s²。",
            "why": "(8−0)÷4＝2 m/s²。"
          },
          {
            "id": "PHYCHM_R4_L_212_EX_02",
            "prompt": "四次平均加速度計算：每次都沿同一直線，以向右為正；表中給初速、末速與時間。 丁平均加速度為何？",
            "steps": [
              "每次都沿同一直線，以向右為正；表中給初速、末速與時間。",
              "(4−10)÷2＝−3 m/s²。",
              "(4−10)÷2＝−3 m/s²。"
            ],
            "answer": "−3 m/s²；(4−10)÷2＝−3 m/s²。",
            "why": "(4−10)÷2＝−3 m/s²。"
          },
          {
            "id": "PHYCHM_R4_L_212_EX_03",
            "prompt": "四次平均加速度計算：每次都沿同一直線，以向右為正；表中給初速、末速與時間。 哪些試次加速度為 +2 m/s²？",
            "steps": [
              "每次都沿同一直線，以向右為正；表中給初速、末速與時間。",
              "甲 2、乙 2、丙 2，丁 −3 m/s²。",
              "甲 2、乙 2、丙 2，丁 −3 m/s²。"
            ],
            "answer": "甲、乙、丙；甲 2、乙 2、丙 2，丁 −3 m/s²。",
            "why": "甲 2、乙 2、丙 2，丁 −3 m/s²。"
          }
        ],
        "misconceptions": [
          {
            "belief": "用末速度直接除以時間求平均加速度，忽略初速度。",
            "whyWrong": "平均加速度取決於速度變化量，不是末速度本身。",
            "correction": "先算末速度減初速度，再除以經過時間。"
          },
          {
            "belief": "把秒數乘上速度變化量，得到錯誤單位。",
            "whyWrong": "加速度是每單位時間的速度變化，應除以時間。",
            "correction": "使用 a平均=Δv÷Δt，單位為 m/s²。"
          },
          {
            "belief": "負平均加速度就認為物體一定在減速。",
            "whyWrong": "若速度本來為負，負加速度可能使速率增加。",
            "correction": "加速度符號描述速度變化方向，快慢要與速度符號合併判斷。"
          },
          {
            "belief": "不同試次只比較速度差，不考慮時間長短。",
            "whyWrong": "相同速度差若耗時不同，平均加速度不同。",
            "correction": "各試次都計算 Δv/Δt 後再比較。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_212",
        "title": "四次平均加速度計算",
        "body": "每次都沿同一直線，以向右為正；表中給初速、末速與時間。",
        "dataTable": {
          "caption": "四次平均加速度計算",
          "columns": [
            "試次",
            "速度變化",
            "時間"
          ],
          "rows": [
            [
              "甲",
              "0→8 m/s",
              "4 s"
            ],
            [
              "乙",
              "2→12 m/s",
              "5 s"
            ],
            [
              "丙",
              "−6→0 m/s",
              "3 s"
            ],
            [
              "丁",
              "10→4 m/s",
              "2 s"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_008"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_212_01",
          "stem": "物體由 0 m/s 增至 8 m/s，用時 4 s。平均加速度為何？",
          "options": [
            "平均加速度為 2 m/s²",
            "平均加速度為 8 m/s²",
            "平均加速度為 32 m/s²",
            "平均加速度為 0.5 m/s²"
          ],
          "answerIndex": 0,
          "rationales": [
            "a=(8-0)÷4=2 m/s²。",
            "平均加速度為 8 m/s²不成立。a=(8-0)÷4=2 m/s²。",
            "平均加速度為 32 m/s²不成立。a=(8-0)÷4=2 m/s²。",
            "平均加速度為 0.5 m/s²不成立。a=(8-0)÷4=2 m/s²。"
          ],
          "reviewEvidence": "a=(8-0)÷4=2 m/s²。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_212_02",
          "stem": "速度由 2 m/s 增至 12 m/s，用時 5 s。平均加速度為何？",
          "options": [
            "平均加速度為 2 m/s²",
            "平均加速度為 10 m/s²",
            "平均加速度為 2.8 m/s²",
            "平均加速度為 50 m/s²"
          ],
          "answerIndex": 0,
          "rationales": [
            "a=(12-2)÷5=10÷5=2 m/s²。",
            "平均加速度為 10 m/s²不成立。a=(12-2)÷5=10÷5=2 m/s²。",
            "平均加速度為 2.8 m/s²不成立。a=(12-2)÷5=10÷5=2 m/s²。",
            "平均加速度為 50 m/s²不成立。a=(12-2)÷5=10÷5=2 m/s²。"
          ],
          "reviewEvidence": "a=(12-2)÷5=10÷5=2 m/s²。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_212_03",
          "stem": "速度由 -6 m/s 增至 0 m/s，用時 3 s。平均加速度為何？",
          "options": [
            "平均加速度為 +2 m/s²",
            "平均加速度為 -2 m/s²",
            "平均加速度為 +6 m/s²",
            "平均加速度為 0 m/s²"
          ],
          "answerIndex": 0,
          "rationales": [
            "a=[0-(-6)]÷3=+2 m/s²。",
            "平均加速度為 -2 m/s²不成立。a=[0-(-6)]÷3=+2 m/s²。",
            "平均加速度為 +6 m/s²不成立。a=[0-(-6)]÷3=+2 m/s²。",
            "平均加速度為 0 m/s²不成立。a=[0-(-6)]÷3=+2 m/s²。"
          ],
          "reviewEvidence": "a=[0-(-6)]÷3=+2 m/s²。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_212_04",
          "stem": "速度由 10 m/s 降至 4 m/s，用時 2 s。平均加速度為何？",
          "options": [
            "平均加速度為 +3 m/s²",
            "平均加速度為 -3 m/s²",
            "平均加速度為 -6 m/s²",
            "平均加速度為 +7 m/s²"
          ],
          "answerIndex": 1,
          "rationales": [
            "平均加速度為 +3 m/s²不成立。a=(4-10)÷2=-6÷2=-3 m/s²。",
            "a=(4-10)÷2=-6÷2=-3 m/s²。",
            "平均加速度為 -6 m/s²不成立。a=(4-10)÷2=-6÷2=-3 m/s²。",
            "平均加速度為 +7 m/s²不成立。a=(4-10)÷2=-6÷2=-3 m/s²。"
          ],
          "reviewEvidence": "a=(4-10)÷2=-6÷2=-3 m/s²。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_212_05",
          "stem": "初速度 5 m/s、末速度 5 m/s，經過 10 s。平均加速度為何？",
          "options": [
            "平均加速度為 0.5 m/s²",
            "平均加速度為 1 m/s²",
            "平均加速度為 10 m/s²",
            "平均加速度為 0 m/s²"
          ],
          "answerIndex": 3,
          "rationales": [
            "平均加速度為 0.5 m/s²不成立。初末速度相同，速度變化量為零。",
            "平均加速度為 1 m/s²不成立。初末速度相同，速度變化量為零。",
            "平均加速度為 10 m/s²不成立。初末速度相同，速度變化量為零。",
            "初末速度相同，速度變化量為零。"
          ],
          "reviewEvidence": "初末速度相同，速度變化量為零。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_212_06",
          "stem": "速度由 +3 m/s 變 -3 m/s，用時 2 s。平均加速度為何？",
          "options": [
            "平均加速度為 0 m/s²",
            "平均加速度為 +3 m/s²",
            "平均加速度為 -3 m/s²",
            "平均加速度為 -6 m/s²"
          ],
          "answerIndex": 2,
          "rationales": [
            "平均加速度為 0 m/s²不成立。a=[-3-(+3)]÷2=-6÷2=-3 m/s²。",
            "平均加速度為 +3 m/s²不成立。a=[-3-(+3)]÷2=-6÷2=-3 m/s²。",
            "a=[-3-(+3)]÷2=-6÷2=-3 m/s²。",
            "平均加速度為 -6 m/s²不成立。a=[-3-(+3)]÷2=-6÷2=-3 m/s²。"
          ],
          "reviewEvidence": "a=[-3-(+3)]÷2=-6÷2=-3 m/s²。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_212_07",
          "stem": "平均加速度的定義式為何？",
          "options": [
            "末速度除以經過時間",
            "物體的路程除以經過時間",
            "速度變化量除以經過時間",
            "物體的速度變化量乘以時間"
          ],
          "answerIndex": 2,
          "rationales": [
            "末速度除以經過時間不成立。平均加速度是單位時間內的速度變化。",
            "物體的路程除以經過時間不成立。平均加速度是單位時間內的速度變化。",
            "平均加速度是單位時間內的速度變化。",
            "物體的速度變化量乘以時間不成立。平均加速度是單位時間內的速度變化。"
          ],
          "reviewEvidence": "平均加速度是單位時間內的速度變化。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_212_08",
          "stem": "平均加速度為 4 m/s²，經過 3 s，速度變化量為何？",
          "options": [
            "物體的速度變化量為 1.33 m/s",
            "物體的速度變化量為 7 m/s",
            "速度變化量為 12 m/s",
            "物體的速度變化量為 4 m/s"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體的速度變化量為 1.33 m/s不成立。Δv=aΔt=4×3=12 m/s。",
            "物體的速度變化量為 7 m/s不成立。Δv=aΔt=4×3=12 m/s。",
            "Δv=aΔt=4×3=12 m/s。",
            "物體的速度變化量為 4 m/s不成立。Δv=aΔt=4×3=12 m/s。"
          ],
          "reviewEvidence": "Δv=aΔt=4×3=12 m/s。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_212_09",
          "stem": "平均加速度 -2 m/s² 持續 5 s，速度變化量為何？",
          "options": [
            "物體的速度變化量為 +10 m/s",
            "速度變化量為 -10 m/s",
            "物體的速度變化量為 -2.5 m/s",
            "物體的速度變化量為 +3 m/s"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體的速度變化量為 +10 m/s不成立。Δv=(-2)×5=-10 m/s。",
            "Δv=(-2)×5=-10 m/s。",
            "物體的速度變化量為 -2.5 m/s不成立。Δv=(-2)×5=-10 m/s。",
            "物體的速度變化量為 +3 m/s不成立。Δv=(-2)×5=-10 m/s。"
          ],
          "reviewEvidence": "Δv=(-2)×5=-10 m/s。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_212_10",
          "stem": "兩物體速度變化量同為 6 m/s，甲用 2 s、乙用 3 s。何者平均加速度較大？",
          "options": [
            "乙較大",
            "兩者相同",
            "甲較大",
            "無法比較"
          ],
          "answerIndex": 2,
          "rationales": [
            "乙較大不成立。甲為 3 m/s²，乙為 2 m/s²。",
            "兩者相同不成立。甲為 3 m/s²，乙為 2 m/s²。",
            "甲為 3 m/s²，乙為 2 m/s²。",
            "無法比較不成立。甲為 3 m/s²，乙為 2 m/s²。"
          ],
          "reviewEvidence": "甲為 3 m/s²，乙為 2 m/s²。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_212_11",
          "stem": "平均加速度單位 m/s² 的意義為何？",
          "options": [
            "每秒速度改變多少 m/s",
            "此時物體每秒走過多少平方公尺",
            "每平方秒的位置",
            "物體的速度本身的大小"
          ],
          "answerIndex": 0,
          "rationales": [
            "加速度表示速度的時間變化率，所以是每秒改變多少 m/s。",
            "此時物體每秒走過多少平方公尺不成立。加速度表示速度的時間變化率，所以是每秒改變多少 m/s。",
            "每平方秒的位置不成立。加速度表示速度的時間變化率，所以是每秒改變多少 m/s。",
            "物體的速度本身的大小不成立。加速度表示速度的時間變化率，所以是每秒改變多少 m/s。"
          ],
          "reviewEvidence": "加速度表示速度的時間變化率，所以是每秒改變多少 m/s。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_212_12",
          "stem": "初速度 -4 m/s，加速度 +3 m/s² 持續 2 s，末速度為何？",
          "options": [
            "末速度為 -10 m/s",
            "末速度為 +2 m/s",
            "末速度為 -1 m/s",
            "末速度為 +6 m/s"
          ],
          "answerIndex": 1,
          "rationales": [
            "末速度為 -10 m/s不成立。v末=v初+aΔt=-4+3×2=+2 m/s。",
            "v末=v初+aΔt=-4+3×2=+2 m/s。",
            "末速度為 -1 m/s不成立。v末=v初+aΔt=-4+3×2=+2 m/s。",
            "末速度為 +6 m/s不成立。v末=v初+aΔt=-4+3×2=+2 m/s。"
          ],
          "reviewEvidence": "v末=v初+aΔt=-4+3×2=+2 m/s。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_212_01",
          "stimulusId": "PHYCHM_R4_STIM_212",
          "stem": "依試次表，A 的平均加速度為何？",
          "options": [
            "A 為 4 m/s²",
            "A 為 8 m/s²",
            "A 為 0.5 m/s²",
            "A 為 2 m/s²"
          ],
          "answerIndex": 3,
          "rationales": [
            "A 為 4 m/s²不成立。A 由 0 到 8 m/s，歷時 4 s，8÷4=2 m/s²。",
            "A 為 8 m/s²不成立。A 由 0 到 8 m/s，歷時 4 s，8÷4=2 m/s²。",
            "A 為 0.5 m/s²不成立。A 由 0 到 8 m/s，歷時 4 s，8÷4=2 m/s²。",
            "A 由 0 到 8 m/s，歷時 4 s，8÷4=2 m/s²。"
          ],
          "reviewEvidence": "A 由 0 到 8 m/s，歷時 4 s，8÷4=2 m/s²。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_212_02",
          "stimulusId": "PHYCHM_R4_STIM_212",
          "stem": "依試次表，A、B、C 的平均加速度有何關係？",
          "options": [
            "A 最大",
            "三者皆為 +2 m/s²",
            "B 最大",
            "C 為負值"
          ],
          "answerIndex": 1,
          "rationales": [
            "A 最大不成立。A 為 8÷4、B 為 10÷5、C 為 6÷3，皆等於 +2 m/s²。",
            "A 為 8÷4、B 為 10÷5、C 為 6÷3，皆等於 +2 m/s²。",
            "B 最大不成立。A 為 8÷4、B 為 10÷5、C 為 6÷3，皆等於 +2 m/s²。",
            "C 為負值不成立。A 為 8÷4、B 為 10÷5、C 為 6÷3，皆等於 +2 m/s²。"
          ],
          "reviewEvidence": "A 為 8÷4、B 為 10÷5、C 為 6÷3，皆等於 +2 m/s²。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "加速度計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_212_03",
          "stimulusId": "PHYCHM_R4_STIM_212",
          "stem": "依試次表，D 由 10 變 4 m/s、歷時 2 s，平均加速度為何？",
          "options": [
            "D 為 +3 m/s²",
            "D 為 -7 m/s²",
            "D 為 +2 m/s²",
            "D 為 -3 m/s²"
          ],
          "answerIndex": 3,
          "rationales": [
            "D 為 +3 m/s²不成立。D 的 Δv=4-10=-6 m/s，除以 2 s 得 -3 m/s²。",
            "D 為 -7 m/s²不成立。D 的 Δv=4-10=-6 m/s，除以 2 s 得 -3 m/s²。",
            "D 為 +2 m/s²不成立。D 的 Δv=4-10=-6 m/s，除以 2 s 得 -3 m/s²。",
            "D 的 Δv=4-10=-6 m/s，除以 2 s 得 -3 m/s²。"
          ],
          "reviewEvidence": "D 的 Δv=4-10=-6 m/s，除以 2 s 得 -3 m/s²。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "向量評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S213",
      "title": "由速度時間圖比較加速度大小",
      "authorityRefs": [
        "AUTH-NATURAL-LC-EB-4-11",
        "AUTH-NATURAL-LC-EB-4-8",
        "AUTH-NATURAL-LC-EB-4-9",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_008"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_213",
        "objective": "能掌握速度時間圖比較加速度大小的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "速度—時間圖斜率為加速度；相同時間內速度變化較大的線段斜率絕對值較大。"
          },
          {
            "title": "證據判讀",
            "content": "四條直線速度—時間圖以起末速度和時間摘要，斜率即平均加速度。 丁斜率 (3−(−3))÷2＝3 m/s²。 (0−6)÷3＝−2 m/s²。"
          },
          {
            "title": "適用界線",
            "content": "速度—時間圖斜率為加速度；相同時間內速度變化較大的線段斜率絕對值較大。 甲 +2、丙 −2 m/s²。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_213_EX_01",
            "prompt": "速度—時間斜率比較：四條直線速度—時間圖以起末速度和時間摘要，斜率即平均加速度。 哪條正加速度最大？",
            "steps": [
              "四條直線速度—時間圖以起末速度和時間摘要，斜率即平均加速度。",
              "丁斜率 (3−(−3))÷2＝3 m/s²。",
              "丁斜率 (3−(−3))÷2＝3 m/s²。"
            ],
            "answer": "丁；丁斜率 (3−(−3))÷2＝3 m/s²。",
            "why": "丁斜率 (3−(−3))÷2＝3 m/s²。"
          },
          {
            "id": "PHYCHM_R4_L_213_EX_02",
            "prompt": "速度—時間斜率比較：四條直線速度—時間圖以起末速度和時間摘要，斜率即平均加速度。 丙的加速度為何？",
            "steps": [
              "四條直線速度—時間圖以起末速度和時間摘要，斜率即平均加速度。",
              "(0−6)÷3＝−2 m/s²。",
              "(0−6)÷3＝−2 m/s²。"
            ],
            "answer": "−2 m/s²；(0−6)÷3＝−2 m/s²。",
            "why": "(0−6)÷3＝−2 m/s²。"
          },
          {
            "id": "PHYCHM_R4_L_213_EX_03",
            "prompt": "速度—時間斜率比較：四條直線速度—時間圖以起末速度和時間摘要，斜率即平均加速度。 甲與丙斜率關係如何？",
            "steps": [
              "四條直線速度—時間圖以起末速度和時間摘要，斜率即平均加速度。",
              "甲 +2、丙 −2 m/s²。",
              "甲 +2、丙 −2 m/s²。"
            ],
            "answer": "大小相同方向相反；甲 +2、丙 −2 m/s²。",
            "why": "甲 +2、丙 −2 m/s²。"
          }
        ],
        "misconceptions": [
          {
            "belief": "把速度—時間圖的斜率當成速度，重複讀取縱座標。",
            "whyWrong": "縱座標已是速度；斜率是速度變化量除以時間，即加速度。",
            "correction": "先讀兩點速度差，再除以兩點時間差求加速度。"
          },
          {
            "belief": "圖線較高就認為加速度較大。",
            "whyWrong": "高度表示速度大小；水平高線的加速度仍為零。",
            "correction": "比較加速度應比較斜率，而不是比較圖線高度。"
          },
          {
            "belief": "負斜率一律解釋成向負方向運動。",
            "whyWrong": "負斜率表示負加速度；若速度仍在零上，物體仍向正方向。",
            "correction": "速度方向看縱值正負，加速度方向看斜率正負。"
          },
          {
            "belief": "求斜率只用速度差，不除以時間差。",
            "whyWrong": "加速度是變化率，缺少時間分母會得到速度而非加速度單位。",
            "correction": "依座標刻度完整計算 Δv/Δt。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_213",
        "title": "速度—時間斜率比較",
        "body": "四條直線速度—時間圖以起末速度和時間摘要，斜率即平均加速度。",
        "dataTable": {
          "caption": "速度—時間斜率比較",
          "columns": [
            "線段",
            "速度變化",
            "時間"
          ],
          "rows": [
            [
              "甲",
              "0→6 m/s",
              "3 s"
            ],
            [
              "乙",
              "0→6 m/s",
              "6 s"
            ],
            [
              "丙",
              "6→0 m/s",
              "3 s"
            ],
            [
              "丁",
              "−3→3 m/s",
              "2 s"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_008"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_213_01",
          "stem": "速度—時間圖由 0 s 的 0 m/s 升至 3 s 的 6 m/s。加速度為何？",
          "options": [
            "物體的加速度為 6 m/s²",
            "加速度為 2 m/s²",
            "物體的加速度為 3 m/s²",
            "物體的加速度為 18 m/s²"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體的加速度為 6 m/s²不成立。斜率=(6-0)÷3=2 m/s²。",
            "斜率=(6-0)÷3=2 m/s²。",
            "物體的加速度為 3 m/s²不成立。斜率=(6-0)÷3=2 m/s²。",
            "物體的加速度為 18 m/s²不成立。斜率=(6-0)÷3=2 m/s²。"
          ],
          "reviewEvidence": "斜率=(6-0)÷3=2 m/s²。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_213_02",
          "stem": "圖線由 0 s 的 6 m/s 降至 3 s 的 0 m/s。加速度為何？",
          "options": [
            "物體的加速度為 +2 m/s²",
            "加速度為 -2 m/s²",
            "物體的加速度為 -6 m/s²",
            "物體的加速度為 0 m/s²"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體的加速度為 +2 m/s²不成立。斜率=(0-6)÷3=-2 m/s²。",
            "斜率=(0-6)÷3=-2 m/s²。",
            "物體的加速度為 -6 m/s²不成立。斜率=(0-6)÷3=-2 m/s²。",
            "物體的加速度為 0 m/s²不成立。斜率=(0-6)÷3=-2 m/s²。"
          ],
          "reviewEvidence": "斜率=(0-6)÷3=-2 m/s²。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_213_03",
          "stem": "速度—時間圖為水平線 v=5 m/s。加速度為何？",
          "options": [
            "加速度為 0 m/s²",
            "物體的加速度為 5 m/s²",
            "物體的加速度為 1 m/s²",
            "物體的加速度為 -5 m/s²"
          ],
          "answerIndex": 0,
          "rationales": [
            "速度不變，圖線斜率為零。",
            "物體的加速度為 5 m/s²不成立。速度不變，圖線斜率為零。",
            "物體的加速度為 1 m/s²不成立。速度不變，圖線斜率為零。",
            "物體的加速度為 -5 m/s²不成立。速度不變，圖線斜率為零。"
          ],
          "reviewEvidence": "速度不變，圖線斜率為零。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_213_04",
          "stem": "速度—時間圖斜率代表哪一物理量？",
          "options": [
            "物體的位置",
            "物體的速度本身",
            "物體的路程",
            "加速度"
          ],
          "answerIndex": 3,
          "rationales": [
            "物體的位置不成立。斜率是速度變化量除以時間，等於加速度。",
            "物體的速度本身不成立。斜率是速度變化量除以時間，等於加速度。",
            "物體的路程不成立。斜率是速度變化量除以時間，等於加速度。",
            "斜率是速度變化量除以時間，等於加速度。"
          ],
          "reviewEvidence": "斜率是速度變化量除以時間，等於加速度。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_213_05",
          "stem": "甲圖斜率 +3 m/s²，乙圖斜率 +1 m/s²。何者速度增加較快？",
          "options": [
            "乙",
            "兩者相同",
            "甲",
            "只看圖線高度才能判斷"
          ],
          "answerIndex": 2,
          "rationales": [
            "乙不成立。每秒速度增加量分別為 3 與 1 m/s，甲較快。",
            "兩者相同不成立。每秒速度增加量分別為 3 與 1 m/s，甲較快。",
            "每秒速度增加量分別為 3 與 1 m/s，甲較快。",
            "只看圖線高度才能判斷不成立。每秒速度增加量分別為 3 與 1 m/s，甲較快。"
          ],
          "reviewEvidence": "每秒速度增加量分別為 3 與 1 m/s，甲較快。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_213_06",
          "stem": "圖線在零上方但斜率為負，物體如何？",
          "options": [
            "此時物體向負方向運動且加速",
            "向正方向運動且速度數值減小",
            "此時物體保持靜止",
            "此時物體向正方向且速度增加"
          ],
          "answerIndex": 1,
          "rationales": [
            "此時物體向負方向運動且加速不成立。正縱值表示正向，負斜率表示速度下降。",
            "正縱值表示正向，負斜率表示速度下降。",
            "此時物體保持靜止不成立。正縱值表示正向，負斜率表示速度下降。",
            "此時物體向正方向且速度增加不成立。正縱值表示正向，負斜率表示速度下降。"
          ],
          "reviewEvidence": "正縱值表示正向，負斜率表示速度下降。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_213_07",
          "stem": "圖線在零下方且斜率為正，物體如何？",
          "options": [
            "此時物體向正方向運動且變快",
            "此時物體向負方向運動且速度絕對值增加",
            "此時物體保持等速",
            "向負方向運動且速度逐漸接近零"
          ],
          "answerIndex": 3,
          "rationales": [
            "速度與加速度的符號不支持這種判斷。負速度配正加速度，速度由較負向零增加，速率下降。",
            "此時物體向負方向運動且速度絕對值增加不成立。負速度配正加速度，速度由較負向零增加，速率下降。",
            "此時物體保持等速不成立。負速度配正加速度，速度由較負向零增加，速率下降。",
            "負速度配正加速度，速度由較負向零增加，速率下降。"
          ],
          "reviewEvidence": "負速度配正加速度，速度由較負向零增加，速率下降。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_213_08",
          "stem": "圖線由 -4 m/s 經 2 s 升至 +2 m/s，加速度為何？",
          "options": [
            "物體的加速度為 -3 m/s²",
            "物體的加速度為 +6 m/s²",
            "物體的加速度為 -1 m/s²",
            "加速度為 +3 m/s²"
          ],
          "answerIndex": 3,
          "rationales": [
            "物體的加速度為 -3 m/s²不成立。斜率=[2-(-4)]÷2=6÷2=3 m/s²。",
            "物體的加速度為 +6 m/s²不成立。斜率=[2-(-4)]÷2=6÷2=3 m/s²。",
            "物體的加速度為 -1 m/s²不成立。斜率=[2-(-4)]÷2=6÷2=3 m/s²。",
            "斜率=[2-(-4)]÷2=6÷2=3 m/s²。"
          ],
          "reviewEvidence": "斜率=[2-(-4)]÷2=6÷2=3 m/s²。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_213_09",
          "stem": "兩條速度—時間圖互相平行，可直接判定什麼？",
          "options": [
            "兩物體速度始終相同",
            "兩物體位置相同",
            "兩物體加速度相同",
            "兩物體質量相同"
          ],
          "answerIndex": 2,
          "rationales": [
            "兩物體速度始終相同不成立。平行線斜率相同，而速度圖斜率就是加速度。",
            "兩物體位置相同不成立。平行線斜率相同，而速度圖斜率就是加速度。",
            "平行線斜率相同，而速度圖斜率就是加速度。",
            "兩物體質量相同不成立。平行線斜率相同，而速度圖斜率就是加速度。"
          ],
          "reviewEvidence": "平行線斜率相同，而速度圖斜率就是加速度。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_213_10",
          "stem": "圖線越陡，代表什麼？",
          "options": [
            "物體的速度必越大",
            "加速度絕對值越大",
            "物體的位置必越遠",
            "時間必越長"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體的速度必越大不成立。在相同軸刻度下，陡峭表示速度對時間變化率的絕對值較大。",
            "在相同軸刻度下，陡峭表示速度對時間變化率的絕對值較大。",
            "物體的位置必越遠不成立。在相同軸刻度下，陡峭表示速度對時間變化率的絕對值較大。",
            "時間必越長不成立。在相同軸刻度下，陡峭表示速度對時間變化率的絕對值較大。"
          ],
          "reviewEvidence": "在相同軸刻度下，陡峭表示速度對時間變化率的絕對值較大。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_213_11",
          "stem": "速度—時間圖線穿過橫軸時，斜率仍為 +2 m/s²。當下加速度為何？",
          "options": [
            "物體的加速度為 0",
            "物體的加速度改為負值",
            "仍為 +2 m/s²",
            "無法定義加速度"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體的加速度為 0不成立。速度為零不會使圖線斜率消失，加速度仍是 +2 m/s²。",
            "物體的加速度改為負值不成立。速度為零不會使圖線斜率消失，加速度仍是 +2 m/s²。",
            "速度為零不會使圖線斜率消失，加速度仍是 +2 m/s²。",
            "無法定義加速度不成立。速度為零不會使圖線斜率消失，加速度仍是 +2 m/s²。"
          ],
          "reviewEvidence": "速度為零不會使圖線斜率消失，加速度仍是 +2 m/s²。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_213_12",
          "stem": "以圖上兩點求斜率時，應使用哪個比值？",
          "options": [
            "時間差除以速度差",
            "兩速度相加",
            "兩時間相乘",
            "速度差除以時間差"
          ],
          "answerIndex": 3,
          "rationales": [
            "時間差除以速度差不成立。速度—時間圖斜率定義為 Δv/Δt。",
            "兩速度相加不成立。速度—時間圖斜率定義為 Δv/Δt。",
            "兩時間相乘不成立。速度—時間圖斜率定義為 Δv/Δt。",
            "速度—時間圖斜率定義為 Δv/Δt。"
          ],
          "reviewEvidence": "速度—時間圖斜率定義為 Δv/Δt。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_213_01",
          "stimulusId": "PHYCHM_R4_STIM_213",
          "stem": "依表格，A 由 0 到 6 m/s 用 3 s，加速度為何？",
          "options": [
            "A 為 2 m/s²",
            "A 為 3 m/s²",
            "A 為 6 m/s²",
            "A 為 18 m/s²"
          ],
          "answerIndex": 0,
          "rationales": [
            "6÷3=2 m/s²。",
            "A 為 3 m/s²不成立。6÷3=2 m/s²。",
            "A 為 6 m/s²不成立。6÷3=2 m/s²。",
            "A 為 18 m/s²不成立。6÷3=2 m/s²。"
          ],
          "reviewEvidence": "速度增加 6 m/s 且歷時 3 s，所以加速度為 6÷3=2 m/s²。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_213_02",
          "stimulusId": "PHYCHM_R4_STIM_213",
          "stem": "依表格，C 由 6 降到 0 m/s 用 3 s，加速度為何？",
          "options": [
            "C 為 +2 m/s²",
            "C 為 -6 m/s²",
            "C 為 -2 m/s²",
            "C 為 0 m/s²"
          ],
          "answerIndex": 2,
          "rationales": [
            "C 為 +2 m/s²不成立。(0-6)÷3=-2 m/s²。",
            "C 為 -6 m/s²不成立。(0-6)÷3=-2 m/s²。",
            "(0-6)÷3=-2 m/s²。",
            "C 為 0 m/s²不成立。(0-6)÷3=-2 m/s²。"
          ],
          "reviewEvidence": "(0-6)÷3=-2 m/s²。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "加速度計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_213_03",
          "stimulusId": "PHYCHM_R4_STIM_213",
          "stem": "依表格，哪一圖線的加速度絕對值最大？",
          "options": [
            "D 的加速度絕對值最大",
            "A 最大",
            "B 最大",
            "C 最大"
          ],
          "answerIndex": 0,
          "rationales": [
            "A、B、C、D 的加速度絕對值為 2、1、2、3 m/s²，D 最大。",
            "A 最大不成立。A、B、C、D 的加速度絕對值為 2、1、2、3 m/s²，D 最大。",
            "B 最大不成立。A、B、C、D 的加速度絕對值為 2、1、2、3 m/s²，D 最大。",
            "C 最大不成立。A、B、C、D 的加速度絕對值為 2、1、2、3 m/s²，D 最大。"
          ],
          "reviewEvidence": "A、B、C、D 的加速度絕對值為 2、1、2、3 m/s²，D 最大。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "向量評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S214",
      "title": "說明等速圓周運動仍具有加速度",
      "authorityRefs": [
        "AUTH-NATURAL-LC-EB-4-11",
        "AUTH-NATURAL-LC-EB-4-8",
        "AUTH-NATURAL-LC-EB-4-9",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_008"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_214",
        "objective": "能掌握等速圓周運動仍具有加速度的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "等速圓周運動雖速度大小不變，速度方向持續改變，因此具有指向圓心的加速度。"
          },
          {
            "title": "證據判讀",
            "content": "小球逆時針沿圓周等速運動，記錄四個四分之一圈位置的速度與向心方向。 向心方向由最高點指向圓心，向下。 切線速度與半徑向內方向垂直。"
          },
          {
            "title": "適用界線",
            "content": "等速圓周運動雖速度大小不變，速度方向持續改變，因此具有指向圓心的加速度。 速度是向量，方向改變即有加速度。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_214_EX_01",
            "prompt": "等速圓周運動方向：小球逆時針沿圓周等速運動，記錄四個四分之一圈位置的速度與向心方向。 最高點的加速度朝哪裡？",
            "steps": [
              "小球逆時針沿圓周等速運動，記錄四個四分之一圈位置的速度與向心方向。",
              "向心方向由最高點指向圓心，向下。",
              "向心方向由最高點指向圓心，向下。"
            ],
            "answer": "下；向心方向由最高點指向圓心，向下。",
            "why": "向心方向由最高點指向圓心，向下。"
          },
          {
            "id": "PHYCHM_R4_L_214_EX_02",
            "prompt": "等速圓周運動方向：小球逆時針沿圓周等速運動，記錄四個四分之一圈位置的速度與向心方向。 速度與向心加速度關係為何？",
            "steps": [
              "小球逆時針沿圓周等速運動，記錄四個四分之一圈位置的速度與向心方向。",
              "切線速度與半徑向內方向垂直。",
              "切線速度與半徑向內方向垂直。"
            ],
            "answer": "互相垂直；切線速度與半徑向內方向垂直。",
            "why": "切線速度與半徑向內方向垂直。"
          },
          {
            "id": "PHYCHM_R4_L_214_EX_03",
            "prompt": "等速圓周運動方向：小球逆時針沿圓周等速運動，記錄四個四分之一圈位置的速度與向心方向。 速率不變為何仍有加速度？",
            "steps": [
              "小球逆時針沿圓周等速運動，記錄四個四分之一圈位置的速度與向心方向。",
              "速度是向量，方向改變即有加速度。",
              "速度是向量，方向改變即有加速度。"
            ],
            "answer": "速度方向持續改變；速度是向量，方向改變即有加速度。",
            "why": "速度是向量，方向改變即有加速度。"
          }
        ],
        "misconceptions": [
          {
            "belief": "認為圓周運動速率不變，所以速度也不變且沒有加速度。",
            "whyWrong": "速度方向沿圓周持續改變，因此即使速率固定仍有向心加速度。",
            "correction": "在每個位置分別畫切線速度與指向圓心的加速度。"
          },
          {
            "belief": "把圓周運動速度畫向圓心。",
            "whyWrong": "瞬時速度沿軌跡切線；指向圓心的是向心加速度。",
            "correction": "先畫半徑，再畫垂直半徑的切線速度。"
          },
          {
            "belief": "把向心加速度畫在運動方向前方，認為它只會讓物體更快。",
            "whyWrong": "等速圓周運動的向心加速度垂直速度，主要改變方向。",
            "correction": "向心加速度永遠指向當下圓心。"
          },
          {
            "belief": "認為物體轉到圓周另一側後，向心加速度仍固定指同一地理方向。",
            "whyWrong": "加速度隨物體位置改變方向，始終由物體指向圓心。",
            "correction": "每次以當下位置重新連線圓心決定向心方向。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_214",
        "title": "等速圓周運動方向",
        "body": "小球逆時針沿圓周等速運動，記錄四個四分之一圈位置的速度與向心方向。",
        "dataTable": {
          "caption": "等速圓周運動方向",
          "columns": [
            "位置",
            "速度方向",
            "向心方向"
          ],
          "rows": [
            [
              "最右點",
              "向上",
              "向左"
            ],
            [
              "最高點",
              "向左",
              "向下"
            ],
            [
              "最左點",
              "向下",
              "向右"
            ],
            [
              "最低點",
              "向右",
              "向上"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_008"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_214_01",
          "stem": "物體做等速圓周運動，瞬時速度方向為何？",
          "options": [
            "沿圓周切線方向",
            "指向圓心",
            "背離圓心",
            "固定向右"
          ],
          "answerIndex": 0,
          "rationales": [
            "瞬時速度沿軌跡切線，並與半徑垂直。",
            "指向圓心不成立。瞬時速度沿軌跡切線，並與半徑垂直。",
            "背離圓心不成立。瞬時速度沿軌跡切線，並與半徑垂直。",
            "固定向右不成立。瞬時速度沿軌跡切線，並與半徑垂直。"
          ],
          "reviewEvidence": "瞬時速度沿軌跡切線，並與半徑垂直。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_214_02",
          "stem": "等速圓周運動的加速度方向為何？",
          "options": [
            "此時物體始終沿切線方向",
            "此時物體始終背離圓心",
            "始終指向圓心",
            "此時物體始終向上"
          ],
          "answerIndex": 2,
          "rationales": [
            "此時物體始終沿切線方向不成立。維持圓周軌跡所需的向心加速度沿半徑指向圓心。",
            "此時物體始終背離圓心不成立。維持圓周軌跡所需的向心加速度沿半徑指向圓心。",
            "維持圓周軌跡所需的向心加速度沿半徑指向圓心。",
            "此時物體始終向上不成立。維持圓周軌跡所需的向心加速度沿半徑指向圓心。"
          ],
          "reviewEvidence": "維持圓周軌跡所需的向心加速度沿半徑指向圓心。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_214_03",
          "stem": "速率不變的圓周運動為何仍有加速度？",
          "options": [
            "物體質量持續改變",
            "速度方向持續改變",
            "圓心位置必改變",
            "物體的路程為零"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體質量持續改變不成立。加速度反映速度向量變化，方向變化也會產生加速度。",
            "加速度反映速度向量變化，方向變化也會產生加速度。",
            "圓心位置必改變不成立。加速度反映速度向量變化，方向變化也會產生加速度。",
            "物體的路程為零不成立。加速度反映速度向量變化，方向變化也會產生加速度。"
          ],
          "reviewEvidence": "加速度反映速度向量變化，方向變化也會產生加速度。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_214_04",
          "stem": "物體在圓的最右端且逆時針運動，瞬時速度向何方？",
          "options": [
            "物體的速度向左",
            "速度向上",
            "物體的速度向右",
            "物體的速度向下"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體的速度向左不成立。逆時針在最右端的切線方向向上。",
            "逆時針在最右端的切線方向向上。",
            "物體的速度向右不成立。逆時針在最右端的切線方向向上。",
            "物體的速度向下不成立。逆時針在最右端的切線方向向上。"
          ],
          "reviewEvidence": "逆時針在最右端的切線方向向上。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_214_05",
          "stem": "物體在圓的最右端時，向心加速度向何方？",
          "options": [
            "物體的加速度向上",
            "物體的加速度向右",
            "加速度向左",
            "物體的加速度向下"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體的加速度向上不成立。圓心在物體左方，所以向心加速度向左。",
            "物體的加速度向右不成立。圓心在物體左方，所以向心加速度向左。",
            "圓心在物體左方，所以向心加速度向左。",
            "物體的加速度向下不成立。圓心在物體左方，所以向心加速度向左。"
          ],
          "reviewEvidence": "圓心在物體左方，所以向心加速度向左。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_214_06",
          "stem": "物體在圓的最高點且逆時針運動，瞬時速度向何方？",
          "options": [
            "速度向左",
            "物體的速度向下",
            "物體的速度向右",
            "物體的速度向上"
          ],
          "answerIndex": 0,
          "rationales": [
            "最高點的逆時針切線方向向左。",
            "物體的速度向下不成立。最高點的逆時針切線方向向左。",
            "物體的速度向右不成立。最高點的逆時針切線方向向左。",
            "物體的速度向上不成立。最高點的逆時針切線方向向左。"
          ],
          "reviewEvidence": "最高點的逆時針切線方向向左。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_214_07",
          "stem": "物體在圓的最高點時，向心加速度向何方？",
          "options": [
            "物體的加速度向左",
            "物體的加速度向上",
            "物體的加速度向右",
            "加速度向下"
          ],
          "answerIndex": 3,
          "rationales": [
            "物體的加速度向左不成立。圓心位於最高點下方。",
            "物體的加速度向上不成立。圓心位於最高點下方。",
            "物體的加速度向右不成立。圓心位於最高點下方。",
            "圓心位於最高點下方。"
          ],
          "reviewEvidence": "最高點的圓心位於物體下方，所以向心加速度方向向下。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_214_08",
          "stem": "物體在圓的最左端且逆時針運動，瞬時速度向何方？",
          "options": [
            "物體的速度向右",
            "物體的速度向左",
            "物體的速度向上",
            "速度向下"
          ],
          "answerIndex": 3,
          "rationales": [
            "物體的速度向右不成立。最左端的逆時針切線方向向下。",
            "物體的速度向左不成立。最左端的逆時針切線方向向下。",
            "物體的速度向上不成立。最左端的逆時針切線方向向下。",
            "最左端的逆時針切線方向向下。"
          ],
          "reviewEvidence": "最左端的逆時針切線方向向下。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_214_09",
          "stem": "物體在圓的最左端時，向心加速度向何方？",
          "options": [
            "物體的加速度向下",
            "物體的加速度向左",
            "加速度向右",
            "物體的加速度向上"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體的加速度向下不成立。圓心位於物體右方。",
            "物體的加速度向左不成立。圓心位於物體右方。",
            "圓心位於物體右方。",
            "物體的加速度向上不成立。圓心位於物體右方。"
          ],
          "reviewEvidence": "最左端物體的圓心位於右方，所以向心加速度方向向右。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_214_10",
          "stem": "切斷維持圓周運動的繩子後，物體最初沿何方向離開？",
          "options": [
            "此時物體立即沿半徑飛向圓心",
            "此時物體立即沿半徑背離圓心",
            "垂直紙面飛出",
            "沿切線方向"
          ],
          "answerIndex": 3,
          "rationales": [
            "此時物體立即沿半徑飛向圓心不成立。失去向心力後，物體依當下速度沿切線前進。",
            "此時物體立即沿半徑背離圓心不成立。失去向心力後，物體依當下速度沿切線前進。",
            "垂直紙面飛出不成立。失去向心力後，物體依當下速度沿切線前進。",
            "失去向心力後，物體依當下速度沿切線前進。"
          ],
          "reviewEvidence": "失去向心力後，物體依當下速度沿切線前進。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_214_11",
          "stem": "等速圓周運動中，速度與向心加速度夾角為何？",
          "options": [
            "夾角為 0°",
            "夾角為 180°",
            "夾角為 90°",
            "夾角為 45°"
          ],
          "answerIndex": 2,
          "rationales": [
            "夾角為 0°不成立。切線垂直半徑，而向心加速度沿半徑。",
            "夾角為 180°不成立。切線垂直半徑，而向心加速度沿半徑。",
            "切線垂直半徑，而向心加速度沿半徑。",
            "夾角為 45°不成立。切線垂直半徑，而向心加速度沿半徑。"
          ],
          "reviewEvidence": "切線垂直半徑，而向心加速度沿半徑。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_214_12",
          "stem": "若物體位置改變，向心加速度方向如何？",
          "options": [
            "此時物體始終保持原方向",
            "隨位置改變但始終指向圓心",
            "此時物體始終沿速度方向",
            "只在最高點存在"
          ],
          "answerIndex": 1,
          "rationales": [
            "此時物體始終保持原方向不成立。向心方向是當下位置到圓心的方向，因此會持續轉動。",
            "向心方向是當下位置到圓心的方向，因此會持續轉動。",
            "此時物體始終沿速度方向不成立。向心方向是當下位置到圓心的方向，因此會持續轉動。",
            "只在最高點存在不成立。向心方向是當下位置到圓心的方向，因此會持續轉動。"
          ],
          "reviewEvidence": "向心方向是當下位置到圓心的方向，因此會持續轉動。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_214_01",
          "stimulusId": "PHYCHM_R4_STIM_214",
          "stem": "依示意表，物體在最右端時，速度與向心方向依序為何？",
          "options": [
            "速度向上、向心向左",
            "物體的速度向左、向心向上",
            "物體的速度向下、向心向右",
            "物體的速度向右、向心向下"
          ],
          "answerIndex": 0,
          "rationales": [
            "逆時針切線向上，圓心在左方。",
            "物體的速度向左、向心向上不成立。逆時針切線向上，圓心在左方。",
            "物體的速度向下、向心向右不成立。逆時針切線向上，圓心在左方。",
            "物體的速度向右、向心向下不成立。逆時針切線向上，圓心在左方。"
          ],
          "reviewEvidence": "逆時針切線向上，圓心在左方。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_214_02",
          "stimulusId": "PHYCHM_R4_STIM_214",
          "stem": "依示意表，物體在最高點時，速度與向心方向依序為何？",
          "options": [
            "物體的速度向下、向心向左",
            "物體的速度向右、向心向上",
            "物體的速度向上、向心向右",
            "速度向左、向心向下"
          ],
          "answerIndex": 3,
          "rationales": [
            "物體的速度向下、向心向左不成立。最高點逆時針速度向左，圓心方向向下。",
            "物體的速度向右、向心向上不成立。最高點逆時針速度向左，圓心方向向下。",
            "物體的速度向上、向心向右不成立。最高點逆時針速度向左，圓心方向向下。",
            "最高點逆時針速度向左，圓心方向向下。"
          ],
          "reviewEvidence": "最高點逆時針速度向左，圓心方向向下。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "加速度計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_214_03",
          "stimulusId": "PHYCHM_R4_STIM_214",
          "stem": "依示意表，物體在最低點時，速度與向心方向依序為何？",
          "options": [
            "速度向右、向心向上",
            "物體的速度向上、向心向右",
            "物體的速度向左、向心向下",
            "物體的速度向下、向心向左"
          ],
          "answerIndex": 0,
          "rationales": [
            "最低點逆時針切線向右，圓心位於上方。",
            "物體的速度向上、向心向右不成立。最低點逆時針切線向右，圓心位於上方。",
            "物體的速度向左、向心向下不成立。最低點逆時針切線向右，圓心位於上方。",
            "物體的速度向下、向心向左不成立。最低點逆時針切線向右，圓心位於上方。"
          ],
          "reviewEvidence": "最低點逆時針切線向右，圓心位於上方。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "向量評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S215",
      "title": "由受力與質量定性比較速度改變",
      "authorityRefs": [
        "AUTH-NATURAL-LC-EB-4-11",
        "AUTH-NATURAL-LC-EB-4-8",
        "AUTH-NATURAL-LC-EB-4-9",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_008"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_215",
        "objective": "能掌握受力與質量定性比較速度改變的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "質量相同時，合力較大者速度改變較快；合力相同時，質量較大者速度改變較慢。"
          },
          {
            "title": "證據判讀",
            "content": "四台小車由靜止受固定合力 2 s，忽略摩擦，記錄質量與合力。 乙 a＝4÷1＝4 m/s²。 同力同時間，甲質量較小、加速度較大。"
          },
          {
            "title": "適用界線",
            "content": "質量相同時，合力較大者速度改變較快；合力相同時，質量較大者速度改變較慢。 乙 4 m/s²、丁 2 m/s²，為 2:1。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_215_EX_01",
            "prompt": "力與質量對速度改變：四台小車由靜止受固定合力 2 s，忽略摩擦，記錄質量與合力。 哪車加速度最大？",
            "steps": [
              "四台小車由靜止受固定合力 2 s，忽略摩擦，記錄質量與合力。",
              "乙 a＝4÷1＝4 m/s²。",
              "乙 a＝4÷1＝4 m/s²。"
            ],
            "answer": "乙；乙 a＝4÷1＝4 m/s²。",
            "why": "乙 a＝4÷1＝4 m/s²。"
          },
          {
            "id": "PHYCHM_R4_L_215_EX_02",
            "prompt": "力與質量對速度改變：四台小車由靜止受固定合力 2 s，忽略摩擦，記錄質量與合力。 甲與丙比較，誰速度改變較大？",
            "steps": [
              "四台小車由靜止受固定合力 2 s，忽略摩擦，記錄質量與合力。",
              "同力同時間，甲質量較小、加速度較大。",
              "同力同時間，甲質量較小、加速度較大。"
            ],
            "answer": "甲；同力同時間，甲質量較小、加速度較大。",
            "why": "同力同時間，甲質量較小、加速度較大。"
          },
          {
            "id": "PHYCHM_R4_L_215_EX_03",
            "prompt": "力與質量對速度改變：四台小車由靜止受固定合力 2 s，忽略摩擦，記錄質量與合力。 乙與丁加速度比為何？",
            "steps": [
              "四台小車由靜止受固定合力 2 s，忽略摩擦，記錄質量與合力。",
              "乙 4 m/s²、丁 2 m/s²，為 2:1。",
              "乙 4 m/s²、丁 2 m/s²，為 2:1。"
            ],
            "answer": "2:1；乙 4 m/s²、丁 2 m/s²，為 2:1。",
            "why": "乙 4 m/s²、丁 2 m/s²，為 2:1。"
          }
        ],
        "misconceptions": [
          {
            "belief": "認為施力相同時，質量越大加速度越大。",
            "whyWrong": "由 a=F/m，同力下質量越大，加速度反而越小。",
            "correction": "固定合力比較質量，或固定質量比較合力，再使用 F/m。"
          },
          {
            "belief": "只看施力大小比較加速度，忽略各車質量不同。",
            "whyWrong": "加速度同時取決於合力和質量。",
            "correction": "每一車都計算合力除以質量後再比較。"
          },
          {
            "belief": "把質量與加速度視為正比，直接用 mF。",
            "whyWrong": "牛頓第二定律為 F=ma，所以 a=F/m。",
            "correction": "先確認單位 N 與 kg，再做除法得到 m/s²。"
          },
          {
            "belief": "物體有質量就一定有加速度，即使合力為零。",
            "whyWrong": "合力為零時 a=0，物體可靜止或等速。",
            "correction": "先求合力；只有非零合力才造成非零加速度。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_215",
        "title": "力與質量對速度改變",
        "body": "四台小車由靜止受固定合力 2 s，忽略摩擦，記錄質量與合力。",
        "dataTable": {
          "caption": "力與質量對速度改變",
          "columns": [
            "小車",
            "質量",
            "合力"
          ],
          "rows": [
            [
              "甲",
              "1 kg",
              "2 N"
            ],
            [
              "乙",
              "1 kg",
              "4 N"
            ],
            [
              "丙",
              "2 kg",
              "2 N"
            ],
            [
              "丁",
              "2 kg",
              "4 N"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_008"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_215_01",
          "stem": "質量 2 kg 的車受水平合力 6 N，加速度為何？",
          "options": [
            "加速度為 3 m/s²",
            "物體的加速度為 12 m/s²",
            "物體的加速度為 0.33 m/s²",
            "物體的加速度為 8 m/s²"
          ],
          "answerIndex": 0,
          "rationales": [
            "a=F/m=6÷2=3 m/s²。",
            "物體的加速度為 12 m/s²不成立。a=F/m=6÷2=3 m/s²。",
            "物體的加速度為 0.33 m/s²不成立。a=F/m=6÷2=3 m/s²。",
            "物體的加速度為 8 m/s²不成立。a=F/m=6÷2=3 m/s²。"
          ],
          "reviewEvidence": "a=F/m=6÷2=3 m/s²。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_215_02",
          "stem": "兩車質量相同，甲受合力 8 N、乙受 4 N。加速度關係為何？",
          "options": [
            "乙是甲的 2 倍",
            "兩者相同",
            "甲是乙的 4 倍",
            "甲的加速度是乙的 2 倍"
          ],
          "answerIndex": 3,
          "rationales": [
            "乙是甲的 2 倍不成立。同質量下 a 與 F 成正比，8:4=2:1。",
            "兩者相同不成立。同質量下 a 與 F 成正比，8:4=2:1。",
            "甲是乙的 4 倍不成立。同質量下 a 與 F 成正比，8:4=2:1。",
            "同質量下 a 與 F 成正比，8:4=2:1。"
          ],
          "reviewEvidence": "同質量下 a 與 F 成正比，8:4=2:1。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_215_03",
          "stem": "兩車受相同合力，甲質量 1 kg、乙質量 2 kg。加速度關係為何？",
          "options": [
            "乙是甲的 2 倍",
            "兩者相同",
            "甲是乙的 4 倍",
            "甲的加速度是乙的 2 倍"
          ],
          "answerIndex": 3,
          "rationales": [
            "乙是甲的 2 倍不成立。同力下 a 與 m 成反比，1 kg 車加速度為 2 kg 車兩倍。",
            "兩者相同不成立。同力下 a 與 m 成反比，1 kg 車加速度為 2 kg 車兩倍。",
            "甲是乙的 4 倍不成立。同力下 a 與 m 成反比，1 kg 車加速度為 2 kg 車兩倍。",
            "同力下 a 與 m 成反比，1 kg 車加速度為 2 kg 車兩倍。"
          ],
          "reviewEvidence": "同力下 a 與 m 成反比，1 kg 車加速度為 2 kg 車兩倍。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_215_04",
          "stem": "合力固定時，增加物體質量會如何影響加速度？",
          "options": [
            "物體的加速度增大",
            "物體的加速度不變",
            "加速度減小",
            "物體的加速度方向反轉"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體的加速度增大不成立。a=F/m，分母增加使加速度變小。",
            "物體的加速度不變不成立。a=F/m，分母增加使加速度變小。",
            "a=F/m，分母增加使加速度變小。",
            "物體的加速度方向反轉不成立。a=F/m，分母增加使加速度變小。"
          ],
          "reviewEvidence": "a=F/m，分母增加使加速度變小。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_215_05",
          "stem": "質量固定時，合力加倍會如何影響加速度？",
          "options": [
            "物體的加速度減半",
            "加速度加倍",
            "物體的加速度不變",
            "物體的加速度變為零"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體的加速度減半不成立。a 與 F 成正比，合力加倍使加速度加倍。",
            "a 與 F 成正比，合力加倍使加速度加倍。",
            "物體的加速度不變不成立。a 與 F 成正比，合力加倍使加速度加倍。",
            "物體的加速度變為零不成立。a 與 F 成正比，合力加倍使加速度加倍。"
          ],
          "reviewEvidence": "a 與 F 成正比，合力加倍使加速度加倍。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_215_06",
          "stem": "質量 4 kg、加速度 2 m/s²，所受合力為何？",
          "options": [
            "物體的合力為 2 N",
            "物體的合力為 0.5 N",
            "物體的合力為 6 N",
            "合力為 8 N"
          ],
          "answerIndex": 3,
          "rationales": [
            "物體的合力為 2 N不成立。F=ma=4×2=8 N。",
            "物體的合力為 0.5 N不成立。F=ma=4×2=8 N。",
            "物體的合力為 6 N不成立。F=ma=4×2=8 N。",
            "F=ma=4×2=8 N。"
          ],
          "reviewEvidence": "F=ma=4×2=8 N。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_215_07",
          "stem": "物體合力為零，依牛頓第二定律加速度為何？",
          "options": [
            "加速度為零",
            "物體的加速度等於質量",
            "物體的加速度無限大",
            "物體的加速度方向任意"
          ],
          "answerIndex": 0,
          "rationales": [
            "a=F/m，非零質量且 F=0 時 a=0。",
            "物體的加速度等於質量不成立。a=F/m，非零質量且 F=0 時 a=0。",
            "物體的加速度無限大不成立。a=F/m，非零質量且 F=0 時 a=0。",
            "物體的加速度方向任意不成立。a=F/m，非零質量且 F=0 時 a=0。"
          ],
          "reviewEvidence": "a=F/m，非零質量且 F=0 時 a=0。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_215_08",
          "stem": "同一推力作用於空車和載重車，哪一車加速度較大？",
          "options": [
            "載重車加速度較大",
            "兩車相同",
            "空車加速度較大",
            "無法由質量判斷"
          ],
          "answerIndex": 2,
          "rationales": [
            "載重車加速度較大不成立。空車質量較小，同力下 F/m 較大。",
            "兩車相同不成立。空車質量較小，同力下 F/m 較大。",
            "空車質量較小，同力下 F/m 較大。",
            "無法由質量判斷不成立。空車質量較小，同力下 F/m 較大。"
          ],
          "reviewEvidence": "空車質量較小，同力下 F/m 較大。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_215_09",
          "stem": "要讓質量加倍的車保持原加速度，合力應如何？",
          "options": [
            "物體的合力減半",
            "合力也加倍",
            "物體的合力不變",
            "物體的合力變為零"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體的合力減半不成立。F=ma，m 加倍而 a 固定，F 必須加倍。",
            "F=ma，m 加倍而 a 固定，F 必須加倍。",
            "物體的合力不變不成立。F=ma，m 加倍而 a 固定，F 必須加倍。",
            "物體的合力變為零不成立。F=ma，m 加倍而 a 固定，F 必須加倍。"
          ],
          "reviewEvidence": "F=ma，m 加倍而 a 固定，F 必須加倍。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_215_10",
          "stem": "甲 F=3 N、m=1 kg；乙 F=6 N、m=2 kg。加速度有何關係？",
          "options": [
            "甲較大",
            "乙較大",
            "乙是甲的 4 倍",
            "兩者加速度相同"
          ],
          "answerIndex": 3,
          "rationales": [
            "甲較大不成立。甲 3÷1=3，乙 6÷2=3 m/s²。",
            "乙較大不成立。甲 3÷1=3，乙 6÷2=3 m/s²。",
            "乙是甲的 4 倍不成立。甲 3÷1=3，乙 6÷2=3 m/s²。",
            "甲 3÷1=3，乙 6÷2=3 m/s²。"
          ],
          "reviewEvidence": "甲 3÷1=3，乙 6÷2=3 m/s²。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_215_11",
          "stem": "哪一個比值可直接比較不同小車的加速度？",
          "options": [
            "物體的合力乘以質量",
            "物體的質量除以合力",
            "合力除以質量",
            "物體的合力加上質量"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體的合力乘以質量不成立。由牛頓第二定律，加速度等於 F/m。",
            "物體的質量除以合力不成立。由牛頓第二定律，加速度等於 F/m。",
            "由牛頓第二定律，加速度等於 F/m。",
            "物體的合力加上質量不成立。由牛頓第二定律，加速度等於 F/m。"
          ],
          "reviewEvidence": "由牛頓第二定律，加速度等於 F/m。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_215_12",
          "stem": "同質量車受相反方向但等大合力，加速度有何關係？",
          "options": [
            "大小相同、方向相反",
            "大小與方向都相同",
            "大小不同、方向相同",
            "兩者加速度都為零"
          ],
          "answerIndex": 0,
          "rationales": [
            "a=F/m，質量同且力等大反向，故加速度等大反向。",
            "大小與方向都相同不成立。a=F/m，質量同且力等大反向，故加速度等大反向。",
            "大小不同、方向相同不成立。a=F/m，質量同且力等大反向，故加速度等大反向。",
            "兩者加速度都為零不成立。a=F/m，質量同且力等大反向，故加速度等大反向。"
          ],
          "reviewEvidence": "a=F/m，質量同且力等大反向，故加速度等大反向。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_215_01",
          "stimulusId": "PHYCHM_R4_STIM_215",
          "stem": "依表格，哪一車加速度最大？",
          "options": [
            "A 車最大",
            "B 車加速度最大",
            "C 車最大",
            "D 車最大"
          ],
          "answerIndex": 1,
          "rationales": [
            "A 車最大不成立。A、B、C、D 的 F/m 分別為 2、4、1、2 m/s²，B 最大。",
            "A、B、C、D 的 F/m 分別為 2、4、1、2 m/s²，B 最大。",
            "C 車最大不成立。A、B、C、D 的 F/m 分別為 2、4、1、2 m/s²，B 最大。",
            "D 車最大不成立。A、B、C、D 的 F/m 分別為 2、4、1、2 m/s²，B 最大。"
          ],
          "reviewEvidence": "A、B、C、D 的 F/m 分別為 2、4、1、2 m/s²，B 最大。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_215_02",
          "stimulusId": "PHYCHM_R4_STIM_215",
          "stem": "依表格，比較 A 與 C，在同為 2 N 合力下何者加速度較大？",
          "options": [
            "A 較大",
            "C 較大",
            "兩者相同",
            "兩者皆為零"
          ],
          "answerIndex": 0,
          "rationales": [
            "A 質量 1 kg 得 2 m/s²；C 質量 2 kg 得 1 m/s²。",
            "C 較大不成立。A 質量 1 kg 得 2 m/s²；C 質量 2 kg 得 1 m/s²。",
            "兩者相同不成立。A 質量 1 kg 得 2 m/s²；C 質量 2 kg 得 1 m/s²。",
            "兩者皆為零不成立。A 質量 1 kg 得 2 m/s²；C 質量 2 kg 得 1 m/s²。"
          ],
          "reviewEvidence": "A 質量 1 kg 得 2 m/s²；C 質量 2 kg 得 1 m/s²。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "加速度計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_215_03",
          "stimulusId": "PHYCHM_R4_STIM_215",
          "stem": "依表格，B 與 D 的加速度比為何？",
          "options": [
            "B:D=1:2",
            "B:D=2:1",
            "B:D=1:1",
            "B:D=4:1"
          ],
          "answerIndex": 1,
          "rationales": [
            "B:D=1:2不成立。B 為 4÷1=4，D 為 4÷2=2 m/s²，比為 2:1。",
            "B 為 4÷1=4，D 為 4÷2=2 m/s²，比為 2:1。",
            "B:D=1:1不成立。B 為 4÷1=4，D 為 4÷2=2 m/s²，比為 2:1。",
            "B:D=4:1不成立。B 為 4÷1=4，D 為 4÷2=2 m/s²，比為 2:1。"
          ],
          "reviewEvidence": "B 為 4÷1=4，D 為 4÷2=2 m/s²，比為 2:1。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "向量評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S216",
      "title": "避免把加速度一律解讀為速度增加",
      "authorityRefs": [
        "AUTH-NATURAL-LC-EB-4-11",
        "AUTH-NATURAL-LC-EB-4-8",
        "AUTH-NATURAL-LC-EB-4-9",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_008"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_216",
        "objective": "能掌握把加速度一律解讀為速度增加的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "加速度與速度同向時快慢增加，反向時快慢減少；加速度為負不代表一定減速。"
          },
          {
            "title": "證據判讀",
            "content": "直線運動以向右為正，表中列某時刻速度與加速度。 速度與加速度同號時速率增加。 速度向右而加速度向左，速率減小。"
          },
          {
            "title": "適用界線",
            "content": "加速度與速度同向時快慢增加，反向時快慢減少；加速度為負不代表一定減速。 丙速度與加速度都負，反而向左變快。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_216_EX_01",
            "prompt": "速度與加速度符號組合：直線運動以向右為正，表中列某時刻速度與加速度。 哪兩個速率正在增加？",
            "steps": [
              "直線運動以向右為正，表中列某時刻速度與加速度。",
              "速度與加速度同號時速率增加。",
              "速度與加速度同號時速率增加。"
            ],
            "answer": "甲、丙；速度與加速度同號時速率增加。",
            "why": "速度與加速度同號時速率增加。"
          },
          {
            "id": "PHYCHM_R4_L_216_EX_02",
            "prompt": "速度與加速度符號組合：直線運動以向右為正，表中列某時刻速度與加速度。 乙的運動如何？",
            "steps": [
              "直線運動以向右為正，表中列某時刻速度與加速度。",
              "速度向右而加速度向左，速率減小。",
              "速度向右而加速度向左，速率減小。"
            ],
            "answer": "向右變慢；速度向右而加速度向左，速率減小。",
            "why": "速度向右而加速度向左，速率減小。"
          },
          {
            "id": "PHYCHM_R4_L_216_EX_03",
            "prompt": "速度與加速度符號組合：直線運動以向右為正，表中列某時刻速度與加速度。 負加速度一定代表變慢嗎？",
            "steps": [
              "直線運動以向右為正，表中列某時刻速度與加速度。",
              "丙速度與加速度都負，反而向左變快。",
              "丙速度與加速度都負，反而向左變快。"
            ],
            "answer": "不一定，要看速度方向；丙速度與加速度都負，反而向左變快。",
            "why": "丙速度與加速度都負，反而向左變快。"
          }
        ],
        "misconceptions": [
          {
            "belief": "只看加速度正負判斷加速或減速，不考慮速度方向。",
            "whyWrong": "加速度與速度同向時速率增加，反向時速率減小。",
            "correction": "以速度和加速度的符號組合判斷速率變化。"
          },
          {
            "belief": "速度為負就說物體正在減速。",
            "whyWrong": "負速度只表示方向；若加速度也為負，速率會增加。",
            "correction": "比較速度絕對值，並判斷加速度是否與速度同向。"
          },
          {
            "belief": "速度與加速度異號時認為物體立刻反向。",
            "whyWrong": "異號先使速率降低，只有速度降到零並越過零後才換向。",
            "correction": "先判斷短時間的變慢，再依持續時間判斷是否換向。"
          },
          {
            "belief": "速度與加速度同號時認為位置一定也是同號。",
            "whyWrong": "位置、速度、加速度是不同量；物體可在負位置向正方向加速。",
            "correction": "位置看座標，運動方向看速度，速度變化看加速度。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_216",
        "title": "速度與加速度符號組合",
        "body": "直線運動以向右為正，表中列某時刻速度與加速度。",
        "dataTable": {
          "caption": "速度與加速度符號組合",
          "columns": [
            "情況",
            "速度",
            "加速度"
          ],
          "rows": [
            [
              "甲",
              "+6 m/s",
              "+2 m/s²"
            ],
            [
              "乙",
              "+6 m/s",
              "−2 m/s²"
            ],
            [
              "丙",
              "−6 m/s",
              "−2 m/s²"
            ],
            [
              "丁",
              "−6 m/s",
              "+2 m/s²"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_008"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_216_01",
          "stem": "v=+6 m/s、a=+2 m/s²，短時間內運動如何？",
          "options": [
            "此時物體向正方向且變慢",
            "此時物體向負方向且變快",
            "此時物體保持等速",
            "向正方向且變快"
          ],
          "answerIndex": 3,
          "rationales": [
            "此時物體向正方向且變慢不成立。速度與加速度同為正，速率增加。",
            "此時物體向負方向且變快不成立。速度與加速度同為正，速率增加。",
            "此時物體保持等速不成立。速度與加速度同為正，速率增加。",
            "速度與加速度同為正，速率增加。"
          ],
          "reviewEvidence": "速度與加速度同為正，速率增加。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_216_02",
          "stem": "v=+6 m/s、a=-2 m/s²，短時間內運動如何？",
          "options": [
            "向正方向但變慢",
            "此時物體向負方向且變快",
            "此時物體向正方向且變快",
            "此時物體保持靜止"
          ],
          "answerIndex": 0,
          "rationales": [
            "速度為正但加速度反向，正速度大小減小。",
            "此時物體向負方向且變快不成立。速度為正但加速度反向，正速度大小減小。",
            "此時物體向正方向且變快不成立。速度為正但加速度反向，正速度大小減小。",
            "此時物體保持靜止不成立。速度為正但加速度反向，正速度大小減小。"
          ],
          "reviewEvidence": "速度為正但加速度反向，正速度大小減小。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_216_03",
          "stem": "v=-6 m/s、a=-2 m/s²，短時間內運動如何？",
          "options": [
            "向負方向且變快",
            "此時物體向負方向且變慢",
            "此時物體向正方向且變快",
            "此時物體保持等速"
          ],
          "answerIndex": 0,
          "rationales": [
            "速度與加速度同為負，速度絕對值增加。",
            "此時物體向負方向且變慢不成立。速度與加速度同為負，速度絕對值增加。",
            "此時物體向正方向且變快不成立。速度與加速度同為負，速度絕對值增加。",
            "此時物體保持等速不成立。速度與加速度同為負，速度絕對值增加。"
          ],
          "reviewEvidence": "速度與加速度同為負，速度絕對值增加。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_216_04",
          "stem": "v=-6 m/s、a=+2 m/s²，短時間內運動如何？",
          "options": [
            "此時物體向正方向且變快",
            "此時物體向負方向且變快",
            "向負方向但變慢",
            "此時物體保持靜止"
          ],
          "answerIndex": 2,
          "rationales": [
            "此時物體向正方向且變快不成立。正加速度與負速度反向，使速率降低。",
            "此時物體向負方向且變快不成立。正加速度與負速度反向，使速率降低。",
            "正加速度與負速度反向，使速率降低。",
            "此時物體保持靜止不成立。正加速度與負速度反向，使速率降低。"
          ],
          "reviewEvidence": "正加速度與負速度反向，使速率降低。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_216_05",
          "stem": "速度與加速度同號時，速率通常如何？",
          "options": [
            "速率增加",
            "物體的速率減小",
            "物體的速率一定為零",
            "方向立即反轉"
          ],
          "answerIndex": 0,
          "rationales": [
            "同向加速度增加速度向量的絕對值。",
            "物體的速率減小不成立。同向加速度增加速度向量的絕對值。",
            "物體的速率一定為零不成立。同向加速度增加速度向量的絕對值。",
            "方向立即反轉不成立。同向加速度增加速度向量的絕對值。"
          ],
          "reviewEvidence": "同向加速度增加速度向量的絕對值。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_216_06",
          "stem": "速度與加速度異號時，在換向前速率通常如何？",
          "options": [
            "物體的速率增加",
            "物體的速率不變",
            "物體的位置變為零",
            "速率減小"
          ],
          "answerIndex": 3,
          "rationales": [
            "物體的速率增加不成立。反向加速度先抵消原有速度。",
            "物體的速率不變不成立。反向加速度先抵消原有速度。",
            "物體的位置變為零不成立。反向加速度先抵消原有速度。",
            "反向加速度先抵消原有速度。"
          ],
          "reviewEvidence": "反向加速度先抵消原有速度。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_216_07",
          "stem": "物體向西且越來越快。若向東為正，v 與 a 的符號為何？",
          "options": [
            "v>0 且 a>0",
            "v<0 且 a<0",
            "v<0 且 a>0",
            "v>0 且 a<0"
          ],
          "answerIndex": 1,
          "rationales": [
            "v>0 且 a>0不成立。向西速度為負，向西加快表示加速度也向西為負。",
            "向西速度為負，向西加快表示加速度也向西為負。",
            "v<0 且 a>0不成立。向西速度為負，向西加快表示加速度也向西為負。",
            "v>0 且 a<0不成立。向西速度為負，向西加快表示加速度也向西為負。"
          ],
          "reviewEvidence": "向西速度為負，向西加快表示加速度也向西為負。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_216_08",
          "stem": "物體向西但越來越慢。若向東為正，v 與 a 的符號為何？",
          "options": [
            "v<0 且 a<0",
            "v>0 且 a>0",
            "v<0 且 a>0",
            "v>0 且 a<0"
          ],
          "answerIndex": 2,
          "rationales": [
            "v<0 且 a<0不成立。速度向西為負，減速所需加速度向東為正。",
            "v>0 且 a>0不成立。速度向西為負，減速所需加速度向東為正。",
            "速度向西為負，減速所需加速度向東為正。",
            "v>0 且 a<0不成立。速度向西為負，減速所需加速度向東為正。"
          ],
          "reviewEvidence": "速度向西為負，減速所需加速度向東為正。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_216_09",
          "stem": "物體向東且越來越慢。若向東為正，v 與 a 的符號為何？",
          "options": [
            "v>0 且 a>0",
            "v<0 且 a<0",
            "v>0 且 a<0",
            "v<0 且 a>0"
          ],
          "answerIndex": 2,
          "rationales": [
            "v>0 且 a>0不成立。正速度配反向的負加速度，速率下降。",
            "v<0 且 a<0不成立。正速度配反向的負加速度，速率下降。",
            "正速度配反向的負加速度，速率下降。",
            "v<0 且 a>0不成立。正速度配反向的負加速度，速率下降。"
          ],
          "reviewEvidence": "正速度配反向的負加速度，速率下降。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_216_10",
          "stem": "v=+1 m/s、a=-3 m/s² 持續 1 s，末速度為何？",
          "options": [
            "末速度為 -2 m/s",
            "末速度為 +4 m/s",
            "末速度為 +2 m/s",
            "末速度為 -3 m/s"
          ],
          "answerIndex": 0,
          "rationales": [
            "v末=1+(-3)×1=-2 m/s，期間已換向。",
            "末速度為 +4 m/s不成立。v末=1+(-3)×1=-2 m/s，期間已換向。",
            "末速度為 +2 m/s不成立。v末=1+(-3)×1=-2 m/s，期間已換向。",
            "末速度為 -3 m/s不成立。v末=1+(-3)×1=-2 m/s，期間已換向。"
          ],
          "reviewEvidence": "v末=1+(-3)×1=-2 m/s，期間已換向。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_216_11",
          "stem": "v=-2 m/s、a=+1 m/s² 持續 1 s，末速度與快慢如何？",
          "options": [
            "末速度 -3 m/s，負向變快",
            "末速度 +1 m/s，正向變快",
            "末速度 0 m/s，保持靜止",
            "末速度 -1 m/s，仍負向但變慢"
          ],
          "answerIndex": 3,
          "rationales": [
            "末速度 -3 m/s，負向變快不成立。v末=-2+1=-1 m/s，速率由 2 降為 1。",
            "末速度 +1 m/s，正向變快不成立。v末=-2+1=-1 m/s，速率由 2 降為 1。",
            "末速度 0 m/s，保持靜止不成立。v末=-2+1=-1 m/s，速率由 2 降為 1。",
            "v末=-2+1=-1 m/s，速率由 2 降為 1。"
          ],
          "reviewEvidence": "v末=-2+1=-1 m/s，速率由 2 降為 1。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_216_12",
          "stem": "判斷「加速」時，最應比較哪兩個方向？",
          "options": [
            "物體的位置與原點的方向",
            "物體的路程與時間的方向",
            "速度與加速度的方向",
            "物體的質量與合力的單位"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體的位置與原點的方向不成立。速度和加速度同向時速率增大，反向時速率減小。",
            "物體的路程與時間的方向不成立。速度和加速度同向時速率增大，反向時速率減小。",
            "速度和加速度同向時速率增大，反向時速率減小。",
            "物體的質量與合力的單位不成立。速度和加速度同向時速率增大，反向時速率減小。"
          ],
          "reviewEvidence": "速度和加速度同向時速率增大，反向時速率減小。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_216_01",
          "stimulusId": "PHYCHM_R4_STIM_216",
          "stem": "依表格，A 的 v=+6、a=+2，速率如何？",
          "options": [
            "A 的速率減小",
            "A 的速率增加",
            "A 的速率不變",
            "A 立即反向"
          ],
          "answerIndex": 1,
          "rationales": [
            "A 的速率減小不成立。v 與 a 同為正，故速率增加。",
            "v 與 a 同為正，故速率增加。",
            "A 的速率不變不成立。v 與 a 同為正，故速率增加。",
            "A 立即反向不成立。v 與 a 同為正，故速率增加。"
          ],
          "reviewEvidence": "v 與 a 同為正，故速率增加。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_216_02",
          "stimulusId": "PHYCHM_R4_STIM_216",
          "stem": "依表格，C 的 v=-6、a=-2，速率如何？",
          "options": [
            "C 的速率減小",
            "C 的速率增加",
            "C 的速率不變",
            "C 立即向正方向"
          ],
          "answerIndex": 1,
          "rationales": [
            "C 的速率減小不成立。v 與 a 同為負且同向，速度絕對值增加。",
            "v 與 a 同為負且同向，速度絕對值增加。",
            "C 的速率不變不成立。v 與 a 同為負且同向，速度絕對值增加。",
            "C 立即向正方向不成立。v 與 a 同為負且同向，速度絕對值增加。"
          ],
          "reviewEvidence": "v 與 a 同為負且同向，速度絕對值增加。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "加速度計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_216_03",
          "stimulusId": "PHYCHM_R4_STIM_216",
          "stem": "依表格，哪兩組狀態代表速率正在增加？",
          "options": [
            "A 與 B",
            "A 與 C",
            "B 與 D",
            "C 與 D"
          ],
          "answerIndex": 1,
          "rationales": [
            "A 與 B不成立。A、C 的速度與加速度同號；B、D 異號而變慢。",
            "A、C 的速度與加速度同號；B、D 異號而變慢。",
            "B 與 D不成立。A、C 的速度與加速度同號；B、D 異號而變慢。",
            "C 與 D不成立。A、C 的速度與加速度同號；B、D 異號而變慢。"
          ],
          "reviewEvidence": "A、C 的速度與加速度同號；B、D 異號而變慢。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "向量評估"
          ]
        }
      ]
    }
  ]
};
