export const PHYSICS_CHEMISTRY_AUTHORED_U27 = {
  "unitId": "PHYCHM_R4_U27",
  "title": "運動圖表",
  "authorityRefs": [
    "AUTH-NATURAL-LC-EB-4-8",
    "AUTH-NATURAL-LP-PA-4-1",
    "AUTH-NATURAL-LP-PA-4-2",
    "AUTH-NATURAL-LP-PC-4-2"
  ],
  "provenance": {
    "status": "original",
    "authorRole": "Codex R4 physics and chemistry content author",
    "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
  },
  "skills": [
    {
      "id": "PHYCHM_R4_S203",
      "title": "讀取位置時間圖上的位置與時刻",
      "authorityRefs": [
        "AUTH-NATURAL-LC-EB-4-8",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-PA-4-2",
        "AUTH-NATURAL-LP-PC-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_007"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_203",
        "objective": "能掌握位置時間圖上的位置與時刻的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "位置—時間圖的橫軸是時間、縱軸是相對參考點的位置，某點座標即表示該時刻位置。"
          },
          {
            "title": "證據判讀",
            "content": "向東為正，感測器每 2 s 記錄小車位置，這些點將連成位置—時間圖。 4 s 所在列為 6 m。 座標橫軸是時間、縱軸是位置。"
          },
          {
            "title": "適用界線",
            "content": "位置—時間圖的橫軸是時間、縱軸是相對參考點的位置，某點座標即表示該時刻位置。 10−(−2)＝12 m。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_203_EX_01",
            "prompt": "位置—時間資料點：向東為正，感測器每 2 s 記錄小車位置，這些點將連成位置—時間圖。 4 s 時位置為何？",
            "steps": [
              "向東為正，感測器每 2 s 記錄小車位置，這些點將連成位置—時間圖。",
              "4 s 所在列為 6 m。",
              "4 s 所在列為 6 m。"
            ],
            "answer": "6 m；4 s 所在列為 6 m。",
            "why": "4 s 所在列為 6 m。"
          },
          {
            "id": "PHYCHM_R4_L_203_EX_02",
            "prompt": "位置—時間資料點：向東為正，感測器每 2 s 記錄小車位置，這些點將連成位置—時間圖。 圖上 (2,2) 代表什麼？",
            "steps": [
              "向東為正，感測器每 2 s 記錄小車位置，這些點將連成位置—時間圖。",
              "座標橫軸是時間、縱軸是位置。",
              "座標橫軸是時間、縱軸是位置。"
            ],
            "answer": "2 s 時在 2 m；座標橫軸是時間、縱軸是位置。",
            "why": "座標橫軸是時間、縱軸是位置。"
          },
          {
            "id": "PHYCHM_R4_L_203_EX_03",
            "prompt": "位置—時間資料點：向東為正，感測器每 2 s 記錄小車位置，這些點將連成位置—時間圖。 0 到 6 s 位置改變多少？",
            "steps": [
              "向東為正，感測器每 2 s 記錄小車位置，這些點將連成位置—時間圖。",
              "10−(−2)＝12 m。",
              "10−(−2)＝12 m。"
            ],
            "answer": "12 m；10−(−2)＝12 m。",
            "why": "10−(−2)＝12 m。"
          }
        ],
        "misconceptions": [
          {
            "belief": "認為位置—時間圖的縱軸是物體走過的總路程，所以曲線不能下降。",
            "whyWrong": "縱軸表示相對原點的位置；物體向負方向運動時位置值可以下降。",
            "correction": "先確認縱軸是位置，再由每個時刻的座標判斷所在位置。"
          },
          {
            "belief": "把圖上的一個點高度當成物體速率。",
            "whyWrong": "點的縱座標是位置，速率需由一段時間內的位置變化率判斷。",
            "correction": "用兩點位置差除以時間差求斜率，才得到速度。"
          },
          {
            "belief": "看到位置為負就判定物體的速度也必為負。",
            "whyWrong": "負位置只表示位於原點負側；若圖線向上，速度仍可為正。",
            "correction": "位置看縱座標符號，速度方向看圖線斜率符號。"
          },
          {
            "belief": "只讀圖線終點而忽略橫軸刻度，直接猜測運動時間。",
            "whyWrong": "每個位置都必須與其橫座標時刻配對。",
            "correction": "讀值時由指定時刻垂直對到圖線，再水平讀取位置。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_203",
        "title": "位置—時間資料點",
        "body": "向東為正，感測器每 2 s 記錄小車位置，這些點將連成位置—時間圖。",
        "dataTable": {
          "caption": "位置—時間資料點",
          "columns": [
            "時間 t",
            "位置 x",
            "圖上點"
          ],
          "rows": [
            [
              "0 s",
              "−2 m",
              "(0,−2)"
            ],
            [
              "2 s",
              "2 m",
              "(2,2)"
            ],
            [
              "4 s",
              "6 m",
              "(4,6)"
            ],
            [
              "6 s",
              "10 m",
              "(6,10)"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_007"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_203_01",
          "stem": "位置—時間圖上，t=3 s 時圖線位於 x=5 m。此資訊表示什麼？",
          "options": [
            "物體在 3 s 內走了 5 m",
            "物體在 3 s 時的位置為 5 m",
            "物體速率為 5 m/s",
            "物體加速度為 5 m/s²"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體在 3 s 內走了 5 m不成立。圖上一點的橫座標是時刻，縱座標是該時刻的位置。",
            "圖上一點的橫座標是時刻，縱座標是該時刻的位置。",
            "物體速率為 5 m/s不成立。圖上一點的橫座標是時刻，縱座標是該時刻的位置。",
            "物體加速度為 5 m/s²不成立。圖上一點的橫座標是時刻，縱座標是該時刻的位置。"
          ],
          "reviewEvidence": "圖上一點的橫座標是時刻，縱座標是該時刻的位置。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_203_02",
          "stem": "一位置—時間圖通過點 t=2 s、x=-4 m。物體在該時刻位於何處？",
          "options": [
            "位於原點負方向 4 m",
            "此時物體位於原點正方向 4 m",
            "已走過總路程 4 m",
            "正以 4 m/s 運動"
          ],
          "answerIndex": 0,
          "rationales": [
            "位置 -4 m 表示物體在原點負側 4 m，不直接給路程或速度。",
            "此時物體位於原點正方向 4 m不成立。位置 -4 m 表示物體在原點負側 4 m，不直接給路程或速度。",
            "已走過總路程 4 m不成立。位置 -4 m 表示物體在原點負側 4 m，不直接給路程或速度。",
            "正以 4 m/s 運動不成立。位置 -4 m 表示物體在原點負側 4 m，不直接給路程或速度。"
          ],
          "reviewEvidence": "位置 -4 m 表示物體在原點負側 4 m，不直接給路程或速度。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_203_03",
          "stem": "圖線由 t=0 的 x=1 m 上升到 t=4 s 的 x=9 m。位置改變量為何？",
          "options": [
            "物體的位置改變量為 +10 m",
            "物體的位置改變量為 -8 m",
            "物體的位置改變量為 +2 m",
            "位置改變量為 +8 m"
          ],
          "answerIndex": 3,
          "rationales": [
            "物體的位置改變量為 +10 m不成立。末位置減初位置，9-1=+8 m。",
            "物體的位置改變量為 -8 m不成立。末位置減初位置，9-1=+8 m。",
            "物體的位置改變量為 +2 m不成立。末位置減初位置，9-1=+8 m。",
            "末位置減初位置，9-1=+8 m。"
          ],
          "reviewEvidence": "末位置減初位置，9-1=+8 m。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_203_04",
          "stem": "若位置—時間圖在某時刻穿過 x=0，代表什麼？",
          "options": [
            "物體該時刻必定停止",
            "物體全程路程為零",
            "物體該時刻通過原點",
            "物體速度必為零"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體該時刻必定停止不成立。縱座標為零只表示位置在原點，圖線仍可能有斜率。",
            "物體全程路程為零不成立。縱座標為零只表示位置在原點，圖線仍可能有斜率。",
            "縱座標為零只表示位置在原點，圖線仍可能有斜率。",
            "物體速度必為零不成立。縱座標為零只表示位置在原點，圖線仍可能有斜率。"
          ],
          "reviewEvidence": "縱座標為零只表示位置在原點，圖線仍可能有斜率。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_203_05",
          "stem": "同一位置—時間圖上，A 點為 t=1 s、x=2 m，B 點為 t=5 s、x=2 m。可確定什麼？",
          "options": [
            "物體在兩時刻位置相同",
            "物體在兩時刻間全程靜止",
            "物體路程必為零",
            "物體速率始終為 2 m/s"
          ],
          "answerIndex": 0,
          "rationales": [
            "兩點縱座標相同只保證端點位置相同，中間仍可能移動。",
            "物體在兩時刻間全程靜止不成立。兩點縱座標相同只保證端點位置相同，中間仍可能移動。",
            "物體路程必為零不成立。兩點縱座標相同只保證端點位置相同，中間仍可能移動。",
            "物體速率始終為 2 m/s不成立。兩點縱座標相同只保證端點位置相同，中間仍可能移動。"
          ],
          "reviewEvidence": "兩點縱座標相同只保證端點位置相同，中間仍可能移動。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_203_06",
          "stem": "圖線在 t=6 s 時位於 x=-3 m。若正方向向東，物體位置為何？",
          "options": [
            "此時物體在原點東方 3 m",
            "在原點西方 3 m",
            "此時物體在原點西方 6 m",
            "就在原點"
          ],
          "answerIndex": 1,
          "rationales": [
            "此時物體在原點東方 3 m不成立。負位置位於正方向反側，因此是西方 3 m。",
            "負位置位於正方向反側，因此是西方 3 m。",
            "此時物體在原點西方 6 m不成立。負位置位於正方向反側，因此是西方 3 m。",
            "就在原點不成立。負位置位於正方向反側，因此是西方 3 m。"
          ],
          "reviewEvidence": "負位置位於正方向反側，因此是西方 3 m。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_203_07",
          "stem": "讀取位置—時間圖上 t=4 s 的位置，正確步驟為何？",
          "options": [
            "直接讀圖線終點",
            "把 4 s 當成位置 4 m",
            "只比較圖線顏色",
            "由 4 s 沿縱向找到圖線，再沿橫向讀位置軸"
          ],
          "answerIndex": 3,
          "rationales": [
            "直接讀圖線終點不成立。指定時刻先在時間軸定位，再對應圖線的縱座標。",
            "把 4 s 當成位置 4 m不成立。指定時刻先在時間軸定位，再對應圖線的縱座標。",
            "只比較圖線顏色不成立。指定時刻先在時間軸定位，再對應圖線的縱座標。",
            "指定時刻先在時間軸定位，再對應圖線的縱座標。"
          ],
          "reviewEvidence": "指定時刻先在時間軸定位，再對應圖線的縱座標。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_203_08",
          "stem": "物體位置由 -5 m 變到 -1 m，其位置改變方向為何？",
          "options": [
            "此時物體向負方向改變 4 m",
            "此時物體向正方向改變 6 m",
            "物體的位置沒有改變",
            "向正方向改變 4 m"
          ],
          "answerIndex": 3,
          "rationales": [
            "此時物體向負方向改變 4 m不成立。末減初為 -1-(-5)=+4 m，所以向正方向。",
            "此時物體向正方向改變 6 m不成立。末減初為 -1-(-5)=+4 m，所以向正方向。",
            "物體的位置沒有改變不成立。末減初為 -1-(-5)=+4 m，所以向正方向。",
            "末減初為 -1-(-5)=+4 m，所以向正方向。"
          ],
          "reviewEvidence": "末減初為 -1-(-5)=+4 m，所以向正方向。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_203_09",
          "stem": "位置—時間圖的橫軸通常表示什麼？",
          "options": [
            "物體的位置",
            "物體的速率",
            "時間",
            "受力大小"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體的位置不成立。位置—時間圖以時間為自變量放在橫軸，位置在縱軸。",
            "物體的速率不成立。位置—時間圖以時間為自變量放在橫軸，位置在縱軸。",
            "位置—時間圖以時間為自變量放在橫軸，位置在縱軸。",
            "受力大小不成立。位置—時間圖以時間為自變量放在橫軸，位置在縱軸。"
          ],
          "reviewEvidence": "位置—時間圖以時間為自變量放在橫軸，位置在縱軸。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_203_10",
          "stem": "位置—時間圖的縱軸通常表示什麼？",
          "options": [
            "經過的總時間",
            "相對參考點的位置",
            "物體的加速度大小",
            "物體質量"
          ],
          "answerIndex": 1,
          "rationales": [
            "經過的總時間不成立。縱軸讀出各時刻相對原點的有號位置。",
            "縱軸讀出各時刻相對原點的有號位置。",
            "物體的加速度大小不成立。縱軸讀出各時刻相對原點的有號位置。",
            "物體質量不成立。縱軸讀出各時刻相對原點的有號位置。"
          ],
          "reviewEvidence": "縱軸讀出各時刻相對原點的有號位置。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_203_11",
          "stem": "圖線在 t=0 時 x=-2 m，這表示什麼？",
          "options": [
            "計時開始時物體在原點負側 2 m",
            "物體尚未存在",
            "物體速度為 -2 m/s",
            "物體必已走 2 m"
          ],
          "answerIndex": 0,
          "rationales": [
            "初始位置可為非零；-2 m 只描述計時起點的位置。",
            "物體尚未存在不成立。初始位置可為非零；-2 m 只描述計時起點的位置。",
            "物體速度為 -2 m/s不成立。初始位置可為非零；-2 m 只描述計時起點的位置。",
            "物體必已走 2 m不成立。初始位置可為非零；-2 m 只描述計時起點的位置。"
          ],
          "reviewEvidence": "初始位置可為非零；-2 m 只描述計時起點的位置。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_203_12",
          "stem": "兩條位置—時間圖在 t=5 s 交於 x=7 m。交點代表什麼？",
          "options": [
            "兩物體全程速度相同",
            "兩物體全程路程相同",
            "兩物體質量相同",
            "兩物體在 5 s 時位於同一位置"
          ],
          "answerIndex": 3,
          "rationales": [
            "兩物體全程速度相同不成立。相同時刻具有相同縱座標，表示該時刻位置重合。",
            "兩物體全程路程相同不成立。相同時刻具有相同縱座標，表示該時刻位置重合。",
            "兩物體質量相同不成立。相同時刻具有相同縱座標，表示該時刻位置重合。",
            "相同時刻具有相同縱座標，表示該時刻位置重合。"
          ],
          "reviewEvidence": "相同時刻具有相同縱座標，表示該時刻位置重合。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_203_01",
          "stimulusId": "PHYCHM_R4_STIM_203",
          "stem": "依表格資料，t=4 s 時物體的位置為何？",
          "options": [
            "物體的位置為 4 m",
            "位置為 6 m",
            "物體的位置為 10 m",
            "物體的位置為 -6 m"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體的位置為 4 m不成立。表中 t=4 s 對應的位置欄是 6 m。",
            "表中 t=4 s 對應的位置欄是 6 m。",
            "物體的位置為 10 m不成立。表中 t=4 s 對應的位置欄是 6 m。",
            "物體的位置為 -6 m不成立。表中 t=4 s 對應的位置欄是 6 m。"
          ],
          "reviewEvidence": "表中 t=4 s 對應的位置欄是 6 m。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "圖表讀值"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_203_02",
          "stimulusId": "PHYCHM_R4_STIM_203",
          "stem": "依表格，哪一組時刻與位置配對正確？",
          "options": [
            "t=2 s 時，x=2 m",
            "t=2 s 時，x=6 m",
            "t=4 s 時，x=2 m",
            "t=6 s 時，x=-2 m"
          ],
          "answerIndex": 0,
          "rationales": [
            "資料列明 2 s 對應 2 m，其餘配對交換或符號錯誤。",
            "t=2 s 時，x=6 m不成立。資料列明 2 s 對應 2 m，其餘配對交換或符號錯誤。",
            "t=4 s 時，x=2 m不成立。資料列明 2 s 對應 2 m，其餘配對交換或符號錯誤。",
            "t=6 s 時，x=-2 m不成立。資料列明 2 s 對應 2 m，其餘配對交換或符號錯誤。"
          ],
          "reviewEvidence": "資料列明 2 s 對應 2 m，其餘配對交換或符號錯誤。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "圖形分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_203_03",
          "stimulusId": "PHYCHM_R4_STIM_203",
          "stem": "依表格，從 t=0 到 t=6 s 的位置改變量為何？",
          "options": [
            "物體的位置改變量為 +8 m",
            "物體的位置改變量為 -12 m",
            "位置改變量為 +12 m",
            "物體的位置改變量為 +10 m"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體的位置改變量為 +8 m不成立。末位置 10 m 減初位置 -2 m，得到 +12 m。",
            "物體的位置改變量為 -12 m不成立。末位置 10 m 減初位置 -2 m，得到 +12 m。",
            "末位置 10 m 減初位置 -2 m，得到 +12 m。",
            "物體的位置改變量為 +10 m不成立。末位置 10 m 減初位置 -2 m，得到 +12 m。"
          ],
          "reviewEvidence": "末位置 10 m 減初位置 -2 m，得到 +12 m。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境轉譯"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S204",
      "title": "由位置時間圖斜率比較速度",
      "authorityRefs": [
        "AUTH-NATURAL-LC-EB-4-8",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-PA-4-2",
        "AUTH-NATURAL-LP-PC-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_007"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_204",
        "objective": "能掌握位置時間圖斜率比較速度的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "位置—時間圖的斜率為位置變化除以時間變化；斜率絕對值較大表示速度大小較大。"
          },
          {
            "title": "證據判讀",
            "content": "兩車都做直線等速運動，以相同時間間隔記位置。 甲在 6 s 內位移 18 m，平均速度為 18÷6＝3 m/s。 甲每 2 s 增 6 m，乙只增 4 m。"
          },
          {
            "title": "適用界線",
            "content": "位置—時間圖的斜率為位置變化除以時間變化；斜率絕對值較大表示速度大小較大。 乙在 6 s 內位移 12 m，平均速度為 12÷6＝2 m/s。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_204_EX_01",
            "prompt": "兩車位置—時間斜率：兩車都做直線等速運動，以相同時間間隔記位置。 甲速度為何？",
            "steps": [
              "兩車都做直線等速運動，以相同時間間隔記位置。",
              "18÷6＝3 m/s。",
              "甲在 6 s 內位移 18 m，平均速度為 18÷6＝3 m/s。"
            ],
            "answer": "3 m/s；甲在 6 s 內位移 18 m，平均速度為 18÷6＝3 m/s。",
            "why": "甲在 6 s 內位移 18 m，平均速度為 18÷6＝3 m/s。"
          },
          {
            "id": "PHYCHM_R4_L_204_EX_02",
            "prompt": "兩車位置—時間斜率：兩車都做直線等速運動，以相同時間間隔記位置。 哪車圖線斜率較大？",
            "steps": [
              "兩車都做直線等速運動，以相同時間間隔記位置。",
              "甲每 2 s 增 6 m，乙只增 4 m。",
              "甲每 2 s 增 6 m，乙只增 4 m。"
            ],
            "answer": "甲；甲每 2 s 增 6 m，乙只增 4 m。",
            "why": "甲每 2 s 增 6 m，乙只增 4 m。"
          },
          {
            "id": "PHYCHM_R4_L_204_EX_03",
            "prompt": "兩車位置—時間斜率：兩車都做直線等速運動，以相同時間間隔記位置。 乙速度為何？",
            "steps": [
              "兩車都做直線等速運動，以相同時間間隔記位置。",
              "12÷6＝2 m/s。",
              "乙在 6 s 內位移 12 m，平均速度為 12÷6＝2 m/s。"
            ],
            "answer": "2 m/s；乙在 6 s 內位移 12 m，平均速度為 12÷6＝2 m/s。",
            "why": "乙在 6 s 內位移 12 m，平均速度為 12÷6＝2 m/s。"
          }
        ],
        "misconceptions": [
          {
            "belief": "認為位置—時間圖線越高就代表速度越大。",
            "whyWrong": "圖線高度表示位置；速度大小取決於圖線斜率。",
            "correction": "在相同時間尺度下比較位置變化量，斜率絕對值較大者較快。"
          },
          {
            "belief": "比較斜率時只看位置差，不看所用時間。",
            "whyWrong": "相同位置差若耗時不同，速度就不同。",
            "correction": "以位置差除以時間差，使用完整的斜率比值。"
          },
          {
            "belief": "看到負斜率就說速度大小為負。",
            "whyWrong": "負號表示方向，速率是斜率絕對值且不為負。",
            "correction": "斜率符號判方向，斜率絕對值判快慢。"
          },
          {
            "belief": "把兩條平行圖線判成不同速度，因為它們起始位置不同。",
            "whyWrong": "平行線斜率相同，即使位置不同，速度仍相同。",
            "correction": "比較速度只比較斜率，不以截距高低取代斜率。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_204",
        "title": "兩車位置—時間斜率",
        "body": "兩車都做直線等速運動，以相同時間間隔記位置。",
        "dataTable": {
          "caption": "兩車位置—時間斜率",
          "columns": [
            "時間",
            "甲位置",
            "乙位置"
          ],
          "rows": [
            [
              "0 s",
              "0 m",
              "0 m"
            ],
            [
              "2 s",
              "6 m",
              "4 m"
            ],
            [
              "4 s",
              "12 m",
              "8 m"
            ],
            [
              "6 s",
              "18 m",
              "12 m"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_007"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_204_01",
          "stem": "位置—時間圖為一直線，從 0 s 的 0 m 到 4 s 的 12 m。速度為何？",
          "options": [
            "物體的速度為 +12 m/s",
            "物體的速度為 +4 m/s",
            "速度為 +3 m/s",
            "物體的速度為 -3 m/s"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體的速度為 +12 m/s不成立。斜率=(12-0)÷(4-0)=+3 m/s。",
            "物體的速度為 +4 m/s不成立。斜率=(12-0)÷(4-0)=+3 m/s。",
            "斜率=(12-0)÷(4-0)=+3 m/s。",
            "物體的速度為 -3 m/s不成立。斜率=(12-0)÷(4-0)=+3 m/s。"
          ],
          "reviewEvidence": "斜率=(12-0)÷(4-0)=+3 m/s。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_204_02",
          "stem": "圖線從 1 s 的 8 m 降到 3 s 的 2 m。速度為何？",
          "options": [
            "速度為 -3 m/s",
            "物體的速度為 +3 m/s",
            "物體的速度為 -6 m/s",
            "物體的速度為 +5 m/s"
          ],
          "answerIndex": 0,
          "rationales": [
            "斜率=(2-8)÷(3-1)=-6÷2=-3 m/s。",
            "物體的速度為 +3 m/s不成立。斜率=(2-8)÷(3-1)=-6÷2=-3 m/s。",
            "物體的速度為 -6 m/s不成立。斜率=(2-8)÷(3-1)=-6÷2=-3 m/s。",
            "物體的速度為 +5 m/s不成立。斜率=(2-8)÷(3-1)=-6÷2=-3 m/s。"
          ],
          "reviewEvidence": "斜率=(2-8)÷(3-1)=-6÷2=-3 m/s。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_204_03",
          "stem": "甲圖線斜率為 5 m/s，乙為 2 m/s，兩者均為正。何者較快？",
          "options": [
            "甲較快",
            "乙較快",
            "兩者同樣快",
            "無法由斜率比較"
          ],
          "answerIndex": 0,
          "rationales": [
            "斜率絕對值代表速率，5 大於 2。",
            "乙較快不成立。斜率絕對值代表速率，5 大於 2。",
            "兩者同樣快不成立。斜率絕對值代表速率，5 大於 2。",
            "無法由斜率比較不成立。斜率絕對值代表速率，5 大於 2。"
          ],
          "reviewEvidence": "斜率絕對值代表速率，5 大於 2。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_204_04",
          "stem": "位置—時間圖為水平直線，其速度為何？",
          "options": [
            "物體的速度為正且固定",
            "速度為 0",
            "物體的速度為負且固定",
            "物體的速度持續增加"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體的速度為正且固定不成立。位置不隨時間改變，斜率為零，所以物體靜止。",
            "位置不隨時間改變，斜率為零，所以物體靜止。",
            "物體的速度為負且固定不成立。位置不隨時間改變，斜率為零，所以物體靜止。",
            "物體的速度持續增加不成立。位置不隨時間改變，斜率為零，所以物體靜止。"
          ],
          "reviewEvidence": "位置不隨時間改變，斜率為零，所以物體靜止。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_204_05",
          "stem": "兩條位置—時間圖互相平行，但縱軸截距不同。可判定什麼？",
          "options": [
            "兩物體位置始終相同",
            "兩物體速度相同、初位置不同",
            "較高圖線速度一定較快",
            "兩物體都靜止"
          ],
          "answerIndex": 1,
          "rationales": [
            "兩物體位置始終相同不成立。平行代表斜率相同；不同截距代表初位置不同。",
            "平行代表斜率相同；不同截距代表初位置不同。",
            "較高圖線速度一定較快不成立。平行代表斜率相同；不同截距代表初位置不同。",
            "兩物體都靜止不成立。平行代表斜率相同；不同截距代表初位置不同。"
          ],
          "reviewEvidence": "平行代表斜率相同；不同截距代表初位置不同。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_204_06",
          "stem": "某圖線斜率由陡變緩且保持正值，物體運動如何？",
          "options": [
            "仍向正方向，但速率變小",
            "方向反轉且速率變大",
            "此時物體保持相同速度",
            "立刻停在原點"
          ],
          "answerIndex": 0,
          "rationales": [
            "正斜率表示正向，斜率絕對值減小表示變慢。",
            "方向反轉且速率變大不成立。正斜率表示正向，斜率絕對值減小表示變慢。",
            "此時物體保持相同速度不成立。正斜率表示正向，斜率絕對值減小表示變慢。",
            "立刻停在原點不成立。正斜率表示正向，斜率絕對值減小表示變慢。"
          ],
          "reviewEvidence": "正斜率表示正向，斜率絕對值減小表示變慢。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_204_07",
          "stem": "下列哪一個量等於位置—時間圖的斜率？",
          "options": [
            "物體的位置",
            "物體的路程",
            "物體的質量",
            "速度"
          ],
          "answerIndex": 3,
          "rationales": [
            "物體的位置不成立。位置變化量除以時間變化量正是平均速度。",
            "物體的路程不成立。位置變化量除以時間變化量正是平均速度。",
            "物體的質量不成立。位置變化量除以時間變化量正是平均速度。",
            "位置變化量除以時間變化量正是平均速度。"
          ],
          "reviewEvidence": "位置變化量除以時間變化量正是平均速度。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_204_08",
          "stem": "甲在 2 s 內位置增加 8 m，乙在 4 s 內位置增加 12 m。何者速度較大？",
          "options": [
            "乙的速度較大",
            "兩者速度相同",
            "甲的速度較大",
            "只看時間即可判定乙較大"
          ],
          "answerIndex": 2,
          "rationales": [
            "乙的速度較大不成立。甲為 8÷2=4 m/s，乙為 12÷4=3 m/s。",
            "兩者速度相同不成立。甲為 8÷2=4 m/s，乙為 12÷4=3 m/s。",
            "甲為 8÷2=4 m/s，乙為 12÷4=3 m/s。",
            "只看時間即可判定乙較大不成立。甲為 8÷2=4 m/s，乙為 12÷4=3 m/s。"
          ],
          "reviewEvidence": "甲為 8÷2=4 m/s，乙為 12÷4=3 m/s。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_204_09",
          "stem": "圖線斜率為 -4 m/s。若向右為正，物體如何運動？",
          "options": [
            "以 4 m/s 向右運動",
            "以 -4 m/s 的速率靜止",
            "以 4 m/s 向左運動",
            "此時物體每秒位置增加 4 m"
          ],
          "answerIndex": 2,
          "rationales": [
            "以 4 m/s 向右運動不成立。負斜率表示向左，斜率絕對值 4 m/s 是速率。",
            "以 -4 m/s 的速率靜止不成立。負斜率表示向左，斜率絕對值 4 m/s 是速率。",
            "負斜率表示向左，斜率絕對值 4 m/s 是速率。",
            "此時物體每秒位置增加 4 m不成立。負斜率表示向左，斜率絕對值 4 m/s 是速率。"
          ],
          "reviewEvidence": "負斜率表示向左，斜率絕對值 4 m/s 是速率。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_204_10",
          "stem": "圖線通過 0 s、5 m 與 5 s、5 m 兩點，且兩點間為水平線。速度為何？",
          "options": [
            "物體的速度為 1 m/s",
            "物體的速度為 5 m/s",
            "物體的速度為 -1 m/s",
            "速度為 0 m/s"
          ],
          "answerIndex": 3,
          "rationales": [
            "物體的速度為 1 m/s不成立。位置始終 5 m，位置差為零，所以斜率為零。",
            "物體的速度為 5 m/s不成立。位置始終 5 m，位置差為零，所以斜率為零。",
            "物體的速度為 -1 m/s不成立。位置始終 5 m，位置差為零，所以斜率為零。",
            "位置始終 5 m，位置差為零，所以斜率為零。"
          ],
          "reviewEvidence": "位置始終 5 m，位置差為零，所以斜率為零。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_204_11",
          "stem": "比較不同圖線快慢時，為何要確認兩軸刻度？",
          "options": [
            "刻度會影響由圖面傾斜換算出的數值斜率",
            "刻度只影響顏色",
            "刻度決定物體質量",
            "只要線較長就不需刻度"
          ],
          "answerIndex": 0,
          "rationales": [
            "速度是座標變化比，必須依實際位置與時間刻度計算。",
            "刻度只影響顏色不成立。速度是座標變化比，必須依實際位置與時間刻度計算。",
            "刻度決定物體質量不成立。速度是座標變化比，必須依實際位置與時間刻度計算。",
            "只要線較長就不需刻度不成立。速度是座標變化比，必須依實際位置與時間刻度計算。"
          ],
          "reviewEvidence": "速度是座標變化比，必須依實際位置與時間刻度計算。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_204_12",
          "stem": "一條直線圖的斜率固定為 +2 m/s，表示什麼？",
          "options": [
            "物體位置固定為 2 m",
            "物體以固定速度向正方向運動",
            "物體每秒加速 2 m/s²",
            "物體向負方向運動"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體位置固定為 2 m不成立。固定正斜率表示位置每秒增加 2 m，速度固定為 +2 m/s。",
            "固定正斜率表示位置每秒增加 2 m，速度固定為 +2 m/s。",
            "物體每秒加速 2 m/s²不成立。固定正斜率表示位置每秒增加 2 m，速度固定為 +2 m/s。",
            "物體向負方向運動不成立。固定正斜率表示位置每秒增加 2 m，速度固定為 +2 m/s。"
          ],
          "reviewEvidence": "固定正斜率表示位置每秒增加 2 m，速度固定為 +2 m/s。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_204_01",
          "stimulusId": "PHYCHM_R4_STIM_204",
          "stem": "依表格，A 每 2 s 位置增加 6 m，其速度為何？",
          "options": [
            "A 的速度為 2 m/s",
            "A 的速度為 6 m/s",
            "A 的速度為 3 m/s",
            "A 的速度為 12 m/s"
          ],
          "answerIndex": 2,
          "rationales": [
            "A 的速度為 2 m/s不成立。A 的斜率為 6 m÷2 s=3 m/s。",
            "A 的速度為 6 m/s不成立。A 的斜率為 6 m÷2 s=3 m/s。",
            "A 的斜率為 6 m÷2 s=3 m/s。",
            "A 的速度為 12 m/s不成立。A 的斜率為 6 m÷2 s=3 m/s。"
          ],
          "reviewEvidence": "A 的斜率為 6 m÷2 s=3 m/s。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "圖表讀值"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_204_02",
          "stimulusId": "PHYCHM_R4_STIM_204",
          "stem": "依表格，B 每 2 s 位置增加 4 m，其速度為何？",
          "options": [
            "B 的速度為 4 m/s",
            "B 的速度為 2 m/s",
            "B 的速度為 8 m/s",
            "B 的速度為 0.5 m/s"
          ],
          "answerIndex": 1,
          "rationales": [
            "B 的速度為 4 m/s不成立。B 的斜率為 4 m÷2 s=2 m/s。",
            "B 的斜率為 4 m÷2 s=2 m/s。",
            "B 的速度為 8 m/s不成立。B 的斜率為 4 m÷2 s=2 m/s。",
            "B 的速度為 0.5 m/s不成立。B 的斜率為 4 m÷2 s=2 m/s。"
          ],
          "reviewEvidence": "B 的斜率為 4 m÷2 s=2 m/s。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "圖形分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_204_03",
          "stimulusId": "PHYCHM_R4_STIM_204",
          "stem": "依表格比較 A、B，何者位置—時間圖較陡？",
          "options": [
            "B 的圖線較陡",
            "兩圖線同樣陡",
            "兩圖線都水平",
            "A 的圖線較陡"
          ],
          "answerIndex": 3,
          "rationales": [
            "B 的圖線較陡不成立。A 速度 3 m/s 大於 B 的 2 m/s，因此 A 的正斜率較大。",
            "兩圖線同樣陡不成立。A 速度 3 m/s 大於 B 的 2 m/s，因此 A 的正斜率較大。",
            "兩圖線都水平不成立。A 速度 3 m/s 大於 B 的 2 m/s，因此 A 的正斜率較大。",
            "A 速度 3 m/s 大於 B 的 2 m/s，因此 A 的正斜率較大。"
          ],
          "reviewEvidence": "A 速度 3 m/s 大於 B 的 2 m/s，因此 A 的正斜率較大。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境轉譯"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S205",
      "title": "辨識靜止等速與折返圖形",
      "authorityRefs": [
        "AUTH-NATURAL-LC-EB-4-8",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-PA-4-2",
        "AUTH-NATURAL-LP-PC-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_007"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_205",
        "objective": "能掌握靜止等速與折返圖形的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "位置—時間圖的水平線表示靜止，直線斜率不變表示等速，斜率變號表示折返。"
          },
          {
            "title": "證據判讀",
            "content": "小車沿直線運動，正位置方向向右；相鄰資料點以直線連接。 位置不變的兩段斜率為零。 位置在 4–6 s 由 4 m 減到 1 m，方向向左。"
          },
          {
            "title": "適用界線",
            "content": "位置—時間圖的水平線表示靜止，直線斜率不變表示等速，斜率變號表示折返。 (4−0)÷2＝2 m/s。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_205_EX_01",
            "prompt": "分段位置紀錄：小車沿直線運動，正位置方向向右；相鄰資料點以直線連接。 何時小車靜止？",
            "steps": [
              "小車沿直線運動，正位置方向向右；相鄰資料點以直線連接。",
              "位置不變的兩段斜率為零。",
              "位置不變的兩段斜率為零。"
            ],
            "answer": "2–4 與 6–8 s；位置不變的兩段斜率為零。",
            "why": "位置不變的兩段斜率為零。"
          },
          {
            "id": "PHYCHM_R4_L_205_EX_02",
            "prompt": "分段位置紀錄：小車沿直線運動，正位置方向向右；相鄰資料點以直線連接。 哪段發生折返？",
            "steps": [
              "小車沿直線運動，正位置方向向右；相鄰資料點以直線連接。",
              "位置在 4–6 s 由 4 m 減到 1 m，方向向左。",
              "位置在 4–6 s 由 4 m 減到 1 m，方向向左。"
            ],
            "answer": "4–6 s；位置在 4–6 s 由 4 m 減到 1 m，方向向左。",
            "why": "位置在 4–6 s 由 4 m 減到 1 m，方向向左。"
          },
          {
            "id": "PHYCHM_R4_L_205_EX_03",
            "prompt": "分段位置紀錄：小車沿直線運動，正位置方向向右；相鄰資料點以直線連接。 0–2 s 速度為何？",
            "steps": [
              "小車沿直線運動，正位置方向向右；相鄰資料點以直線連接。",
              "(4−0)÷2＝2 m/s。",
              "(4−0)÷2＝2 m/s。"
            ],
            "answer": "2 m/s；(4−0)÷2＝2 m/s。",
            "why": "(4−0)÷2＝2 m/s。"
          }
        ],
        "misconceptions": [
          {
            "belief": "認為位置—時間圖的水平線表示物體沿水平方向移動。",
            "whyWrong": "水平線表示位置不隨時間改變，也就是靜止。",
            "correction": "以圖線斜率判斷運動；斜率為零就是靜止。"
          },
          {
            "belief": "圖線向下時把物體判成減速，而不先判方向。",
            "whyWrong": "向下只表示位置隨時間減少，即速度為負；是否減速還要看斜率絕對值如何變化。",
            "correction": "先用斜率正負判方向，再用斜率絕對值判快慢。"
          },
          {
            "belief": "每遇到折點就認為物體回到原點。",
            "whyWrong": "折點表示速度或運動狀態改變，只有縱座標為零才是原點。",
            "correction": "分段讀取每段斜率，並另看折點的實際位置。"
          },
          {
            "belief": "把不同斜率的各段合併成單一速度，忽略停留與反向。",
            "whyWrong": "折線圖各段可代表不同速度，合併會遺失運動狀態。",
            "correction": "以每個折點為界，逐段描述方向、快慢或靜止。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_205",
        "title": "分段位置紀錄",
        "body": "小車沿直線運動，正位置方向向右；相鄰資料點以直線連接。",
        "dataTable": {
          "caption": "分段位置紀錄",
          "columns": [
            "時間區間",
            "位置變化",
            "運動狀態"
          ],
          "rows": [
            [
              "0–2 s",
              "0→4 m",
              "向右等速"
            ],
            [
              "2–4 s",
              "4→4 m",
              "靜止"
            ],
            [
              "4–6 s",
              "4→1 m",
              "向左等速"
            ],
            [
              "6–8 s",
              "1→1 m",
              "靜止"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_007"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_205_01",
          "stem": "位置—時間圖在 0 至 2 s 由 0 m 上升到 4 m。此段運動為何？",
          "options": [
            "此時物體向負方向運動，速度為 2 m/s",
            "此時物體保持靜止",
            "向正方向運動，速度為 2 m/s",
            "此時物體向正方向運動，速度為 4 m/s"
          ],
          "answerIndex": 2,
          "rationales": [
            "此時物體向負方向運動，速度為 2 m/s不成立。斜率=(4-0)÷2=+2 m/s，正號表示正向。",
            "此時物體保持靜止不成立。斜率=(4-0)÷2=+2 m/s，正號表示正向。",
            "斜率=(4-0)÷2=+2 m/s，正號表示正向。",
            "此時物體向正方向運動，速度為 4 m/s不成立。斜率=(4-0)÷2=+2 m/s，正號表示正向。"
          ],
          "reviewEvidence": "斜率=(4-0)÷2=+2 m/s，正號表示正向。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_205_02",
          "stem": "圖線在 2 至 4 s 保持 x=4 m 水平。此段物體如何？",
          "options": [
            "停在 x=4 m",
            "以 4 m/s 向正方向運動",
            "以 2 m/s 向負方向運動",
            "此時物體回到原點"
          ],
          "answerIndex": 0,
          "rationales": [
            "水平段斜率為零，位置固定在 4 m。",
            "以 4 m/s 向正方向運動不成立。水平段斜率為零，位置固定在 4 m。",
            "以 2 m/s 向負方向運動不成立。水平段斜率為零，位置固定在 4 m。",
            "此時物體回到原點不成立。水平段斜率為零，位置固定在 4 m。"
          ],
          "reviewEvidence": "水平段斜率為零，位置固定在 4 m。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_205_03",
          "stem": "圖線在 4 至 6 s 由 x=4 m 降到 x=1 m。此段速度為何？",
          "options": [
            "物體的速度為 +1.5 m/s",
            "速度為 -1.5 m/s",
            "物體的速度為 -3 m/s",
            "物體的速度為 0 m/s"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體的速度為 +1.5 m/s不成立。斜率=(1-4)÷2=-1.5 m/s。",
            "斜率=(1-4)÷2=-1.5 m/s。",
            "物體的速度為 -3 m/s不成立。斜率=(1-4)÷2=-1.5 m/s。",
            "物體的速度為 0 m/s不成立。斜率=(1-4)÷2=-1.5 m/s。"
          ],
          "reviewEvidence": "斜率=(1-4)÷2=-1.5 m/s。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_205_04",
          "stem": "圖線在 6 至 8 s 保持 x=1 m。此段表示什麼？",
          "options": [
            "物體以 1 m/s 移動",
            "物體停在原點正側 1 m",
            "物體回到原點",
            "物體以 -1 m/s 移動"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體以 1 m/s 移動不成立。水平線代表靜止，縱座標 1 m 表示停在原點正側。",
            "水平線代表靜止，縱座標 1 m 表示停在原點正側。",
            "物體回到原點不成立。水平線代表靜止，縱座標 1 m 表示停在原點正側。",
            "物體以 -1 m/s 移動不成立。水平線代表靜止，縱座標 1 m 表示停在原點正側。"
          ],
          "reviewEvidence": "水平線代表靜止，縱座標 1 m 表示停在原點正側。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_205_05",
          "stem": "折線圖由正斜率轉為水平線，代表運動如何改變？",
          "options": [
            "此時物體由靜止改為負向運動",
            "由負向改為正向運動",
            "此時物體始終保持同一速度",
            "由向正方向運動改為靜止"
          ],
          "answerIndex": 3,
          "rationales": [
            "此時物體由靜止改為負向運動不成立。正斜率代表正向運動，水平段代表速度變為零。",
            "由負向改為正向運動不成立。正斜率代表正向運動，水平段代表速度變為零。",
            "此時物體始終保持同一速度不成立。正斜率代表正向運動，水平段代表速度變為零。",
            "正斜率代表正向運動，水平段代表速度變為零。"
          ],
          "reviewEvidence": "正斜率代表正向運動，水平段代表速度變為零。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_205_06",
          "stem": "折線圖由水平線轉為負斜率，代表什麼？",
          "options": [
            "由正向運動改為靜止",
            "由負向運動改為正向運動",
            "物體的位置瞬間變為零",
            "由靜止改為向負方向運動"
          ],
          "answerIndex": 3,
          "rationales": [
            "由正向運動改為靜止不成立。水平段速度為零，接著負斜率表示向負方向。",
            "由負向運動改為正向運動不成立。水平段速度為零，接著負斜率表示向負方向。",
            "物體的位置瞬間變為零不成立。水平段速度為零，接著負斜率表示向負方向。",
            "水平段速度為零，接著負斜率表示向負方向。"
          ],
          "reviewEvidence": "水平段速度為零，接著負斜率表示向負方向。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_205_07",
          "stem": "一段圖線斜率為零，但位置為 5 m。物體是否在原點？",
          "options": [
            "此時物體在原點且靜止",
            "正以 5 m/s 移動",
            "不在原點，而是靜止於 5 m",
            "正在返回原點"
          ],
          "answerIndex": 2,
          "rationales": [
            "此時物體在原點且靜止不成立。斜率零判靜止，位置則由縱座標 5 m 判定。",
            "正以 5 m/s 移動不成立。斜率零判靜止，位置則由縱座標 5 m 判定。",
            "斜率零判靜止，位置則由縱座標 5 m 判定。",
            "正在返回原點不成立。斜率零判靜止，位置則由縱座標 5 m 判定。"
          ],
          "reviewEvidence": "斜率零判靜止，位置則由縱座標 5 m 判定。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_205_08",
          "stem": "折線圖的折點通常表示什麼？",
          "options": [
            "物體質量突然改變",
            "速度或運動狀態在該時刻改變",
            "時間停止流動",
            "物體必定位於原點"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體質量突然改變不成立。折點前後斜率不同，因此代表速度發生改變。",
            "折點前後斜率不同，因此代表速度發生改變。",
            "時間停止流動不成立。折點前後斜率不同，因此代表速度發生改變。",
            "物體必定位於原點不成立。折點前後斜率不同，因此代表速度發生改變。"
          ],
          "reviewEvidence": "折點前後斜率不同，因此代表速度發生改變。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_205_09",
          "stem": "第一段斜率 +3 m/s，第二段斜率 +1 m/s。運動如何改變？",
          "options": [
            "方向反轉且速率變大",
            "此時物體由靜止開始運動",
            "方向不變但速率變小",
            "物體的速度完全不變"
          ],
          "answerIndex": 2,
          "rationales": [
            "方向反轉且速率變大不成立。兩段斜率均正但絕對值由 3 降為 1。",
            "此時物體由靜止開始運動不成立。兩段斜率均正但絕對值由 3 降為 1。",
            "兩段斜率均正但絕對值由 3 降為 1。",
            "物體的速度完全不變不成立。兩段斜率均正但絕對值由 3 降為 1。"
          ],
          "reviewEvidence": "兩段斜率均正但絕對值由 3 降為 1。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_205_10",
          "stem": "第一段斜率 -2 m/s，第二段斜率 0。運動如何改變？",
          "options": [
            "此時物體先停止，後向負方向運動",
            "先向負方向運動，後來停止",
            "此時物體始終向正方向",
            "此時物體先向負方向，後向正方向"
          ],
          "answerIndex": 1,
          "rationales": [
            "此時物體先停止，後向負方向運動不成立。負斜率後接水平線，表示負向運動後停下。",
            "負斜率後接水平線，表示負向運動後停下。",
            "此時物體始終向正方向不成立。負斜率後接水平線，表示負向運動後停下。",
            "此時物體先向負方向，後向正方向不成立。負斜率後接水平線，表示負向運動後停下。"
          ],
          "reviewEvidence": "負斜率後接水平線，表示負向運動後停下。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_205_11",
          "stem": "某折線圖依序為正斜率、負斜率。物體在哪一時刻改變方向？",
          "options": [
            "在兩段相接的折點時刻",
            "在計時開始前",
            "在圖線最高位置以外任意時刻",
            "只在位置為零時"
          ],
          "answerIndex": 0,
          "rationales": [
            "斜率符號在折點由正變負，運動方向於該時刻改變。",
            "在計時開始前不成立。斜率符號在折點由正變負，運動方向於該時刻改變。",
            "在圖線最高位置以外任意時刻不成立。斜率符號在折點由正變負，運動方向於該時刻改變。",
            "只在位置為零時不成立。斜率符號在折點由正變負，運動方向於該時刻改變。"
          ],
          "reviewEvidence": "斜率符號在折點由正變負，運動方向於該時刻改變。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_205_12",
          "stem": "分段描述折線圖時，最應先計算哪個量？",
          "options": [
            "每一段的位置變化量除以時間變化量",
            "整張圖的顏色數",
            "所有位置值相加",
            "折點個數乘以時間"
          ],
          "answerIndex": 0,
          "rationales": [
            "每段斜率就是該段速度，可判斷方向與快慢。",
            "整張圖的顏色數不成立。每段斜率就是該段速度，可判斷方向與快慢。",
            "所有位置值相加不成立。每段斜率就是該段速度，可判斷方向與快慢。",
            "折點個數乘以時間不成立。每段斜率就是該段速度，可判斷方向與快慢。"
          ],
          "reviewEvidence": "每段斜率就是該段速度，可判斷方向與快慢。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_205_01",
          "stimulusId": "PHYCHM_R4_STIM_205",
          "stem": "依圖表，0 至 2 s 的運動狀態為何？",
          "options": [
            "此時物體停在 0 m",
            "由 4 m 向負方向回原點",
            "此時物體停在 4 m",
            "由 0 m 向正方向移到 4 m"
          ],
          "answerIndex": 3,
          "rationales": [
            "此時物體停在 0 m不成立。資料顯示位置由 0 增至 4 m，故向正方向運動。",
            "由 4 m 向負方向回原點不成立。資料顯示位置由 0 增至 4 m，故向正方向運動。",
            "此時物體停在 4 m不成立。資料顯示位置由 0 增至 4 m，故向正方向運動。",
            "資料顯示位置由 0 增至 4 m，故向正方向運動。"
          ],
          "reviewEvidence": "資料顯示位置由 0 增至 4 m，故向正方向運動。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "圖表讀值"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_205_02",
          "stimulusId": "PHYCHM_R4_STIM_205",
          "stem": "依圖表，哪兩個時段物體保持靜止？",
          "options": [
            "0 至 2 s 與 4 至 6 s",
            "0 至 4 s 與 4 至 8 s",
            "2 至 4 s 與 6 至 8 s",
            "只有 4 至 6 s"
          ],
          "answerIndex": 2,
          "rationales": [
            "0 至 2 s 與 4 至 6 s不成立。這兩段位置分別固定為 4 m 與 1 m，位置—時間線皆水平。",
            "0 至 4 s 與 4 至 8 s不成立。這兩段位置分別固定為 4 m 與 1 m，位置—時間線皆水平。",
            "這兩段位置分別固定為 4 m 與 1 m，位置—時間線皆水平。",
            "只有 4 至 6 s不成立。這兩段位置分別固定為 4 m 與 1 m，位置—時間線皆水平。"
          ],
          "reviewEvidence": "這兩段位置分別固定為 4 m 與 1 m，位置—時間線皆水平。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "圖形分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_205_03",
          "stimulusId": "PHYCHM_R4_STIM_205",
          "stem": "依圖表，4 至 6 s 的運動方向為何？",
          "options": [
            "此時物體向正方向運動",
            "此時物體保持靜止",
            "此時物體先正向再靜止",
            "向負方向運動"
          ],
          "answerIndex": 3,
          "rationales": [
            "此時物體向正方向運動不成立。位置由 4 m 降為 1 m，斜率為負，所以向負方向。",
            "此時物體保持靜止不成立。位置由 4 m 降為 1 m，斜率為負，所以向負方向。",
            "此時物體先正向再靜止不成立。位置由 4 m 降為 1 m，斜率為負，所以向負方向。",
            "位置由 4 m 降為 1 m，斜率為負，所以向負方向。"
          ],
          "reviewEvidence": "位置由 4 m 降為 1 m，斜率為負，所以向負方向。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境轉譯"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S206",
      "title": "讀取速度時間圖的速度變化",
      "authorityRefs": [
        "AUTH-NATURAL-LC-EB-4-8",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-PA-4-2",
        "AUTH-NATURAL-LP-PC-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_007"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_206",
        "objective": "能掌握速度時間圖的速度變化的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "速度—時間圖的縱座標直接給各時刻速度；水平線表示速度恆定。"
          },
          {
            "title": "證據判讀",
            "content": "向右速度為正，小車的速度在各時刻由感測器記錄。 速度 −2 m/s 表示向左。 由速度資料可直接讀出 2 s 時速度為 0 m/s。"
          },
          {
            "title": "適用界線",
            "content": "速度—時間圖的縱座標直接給各時刻速度；水平線表示速度恆定。 速度由 4 s 的 2 m/s 增至 6 s 的 4 m/s，增加 2 m/s。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_206_EX_01",
            "prompt": "速度—時間讀值：向右速度為正，小車的速度在各時刻由感測器記錄。 0 s 小車往哪裡？",
            "steps": [
              "向右速度為正，小車的速度在各時刻由感測器記錄。",
              "速度 −2 m/s 表示向左。",
              "速度 −2 m/s 表示向左。"
            ],
            "answer": "左；速度 −2 m/s 表示向左。",
            "why": "速度 −2 m/s 表示向左。"
          },
          {
            "id": "PHYCHM_R4_L_206_EX_02",
            "prompt": "速度—時間讀值：向右速度為正，小車的速度在各時刻由感測器記錄。 何時速度為零？",
            "steps": [
              "向右速度為正，小車的速度在各時刻由感測器記錄。",
              "2 s 的讀值為 0。",
              "由速度資料可直接讀出 2 s 時速度為 0 m/s。"
            ],
            "answer": "2 s；由速度資料可直接讀出 2 s 時速度為 0 m/s。",
            "why": "由速度資料可直接讀出 2 s 時速度為 0 m/s。"
          },
          {
            "id": "PHYCHM_R4_L_206_EX_03",
            "prompt": "速度—時間讀值：向右速度為正，小車的速度在各時刻由感測器記錄。 4 到 6 s 速度增加多少？",
            "steps": [
              "向右速度為正，小車的速度在各時刻由感測器記錄。",
              "4−2＝2 m/s。",
              "速度由 4 s 的 2 m/s 增至 6 s 的 4 m/s，增加 2 m/s。"
            ],
            "answer": "2 m/s；速度由 4 s 的 2 m/s 增至 6 s 的 4 m/s，增加 2 m/s。",
            "why": "速度由 4 s 的 2 m/s 增至 6 s 的 4 m/s，增加 2 m/s。"
          }
        ],
        "misconceptions": [
          {
            "belief": "把速度—時間圖的縱座標誤認為位置。",
            "whyWrong": "縱軸表示各時刻速度；位置變化需由速度與時間共同判斷。",
            "correction": "先讀速度的正負與大小，再依題目需要分析位移或加速度。"
          },
          {
            "belief": "速度—時間圖位於時間軸下方就判定物體位置為負。",
            "whyWrong": "圖線在軸下只表示速度方向為負，物體可能仍在原點正側。",
            "correction": "速度符號判運動方向，不能直接取代位置座標。"
          },
          {
            "belief": "圖線穿過速度零點時認為時間也歸零。",
            "whyWrong": "穿越橫軸表示該時刻速度為零，橫座標時刻仍依時間軸讀取。",
            "correction": "交點的縱值為零，橫值指出停止或換向的時刻。"
          },
          {
            "belief": "只看圖線上升就判定物體向正方向運動。",
            "whyWrong": "上升代表速度數值增加；若仍在零以下，物體仍向負方向。",
            "correction": "方向看速度符號，速度變化看圖線升降。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_206",
        "title": "速度—時間讀值",
        "body": "向右速度為正，小車的速度在各時刻由感測器記錄。",
        "dataTable": {
          "caption": "速度—時間讀值",
          "columns": [
            "時間",
            "速度",
            "方向"
          ],
          "rows": [
            [
              "0 s",
              "−2 m/s",
              "左"
            ],
            [
              "2 s",
              "0 m/s",
              "瞬間靜止"
            ],
            [
              "4 s",
              "+2 m/s",
              "右"
            ],
            [
              "6 s",
              "+4 m/s",
              "右"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_007"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_206_01",
          "stem": "速度—時間圖在 t=2 s 的縱座標為 -3 m/s。物體此刻如何運動？",
          "options": [
            "以 3 m/s 向正方向運動",
            "此時物體位於原點負側 3 m",
            "以 3 m/s 向負方向運動",
            "此時物體保持靜止"
          ],
          "answerIndex": 2,
          "rationales": [
            "以 3 m/s 向正方向運動不成立。速度 -3 m/s 的負號表示方向，絕對值 3 m/s 表示速率。",
            "此時物體位於原點負側 3 m不成立。速度 -3 m/s 的負號表示方向，絕對值 3 m/s 表示速率。",
            "速度 -3 m/s 的負號表示方向，絕對值 3 m/s 表示速率。",
            "此時物體保持靜止不成立。速度 -3 m/s 的負號表示方向，絕對值 3 m/s 表示速率。"
          ],
          "reviewEvidence": "速度 -3 m/s 的負號表示方向，絕對值 3 m/s 表示速率。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_206_02",
          "stem": "速度—時間圖穿過 v=0 軸時，代表什麼？",
          "options": [
            "該時刻位置為零",
            "該時刻時間為零",
            "物體全程未移動",
            "該時刻速度為零"
          ],
          "answerIndex": 3,
          "rationales": [
            "該時刻位置為零不成立。縱座標 v=0 直接表示瞬時速度為零。",
            "該時刻時間為零不成立。縱座標 v=0 直接表示瞬時速度為零。",
            "物體全程未移動不成立。縱座標 v=0 直接表示瞬時速度為零。",
            "縱座標 v=0 直接表示瞬時速度為零。"
          ],
          "reviewEvidence": "縱座標 v=0 直接表示瞬時速度為零。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_206_03",
          "stem": "圖線在 v=+5 m/s 處保持水平。運動狀態為何？",
          "options": [
            "此時物體保持在位置 5 m",
            "以固定速度向正方向運動",
            "物體的速度持續增加",
            "此時物體向負方向運動"
          ],
          "answerIndex": 1,
          "rationales": [
            "此時物體保持在位置 5 m不成立。速度值固定為正 5 m/s，因此為正向等速運動。",
            "速度值固定為正 5 m/s，因此為正向等速運動。",
            "物體的速度持續增加不成立。速度值固定為正 5 m/s，因此為正向等速運動。",
            "此時物體向負方向運動不成立。速度值固定為正 5 m/s，因此為正向等速運動。"
          ],
          "reviewEvidence": "速度值固定為正 5 m/s，因此為正向等速運動。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_206_04",
          "stem": "圖線由 -4 m/s 上升到 -1 m/s。此期間物體如何？",
          "options": [
            "仍向負方向，但速率減小",
            "轉為正方向且速率增大",
            "此時物體向負方向且速率增大",
            "此時物體保持靜止"
          ],
          "answerIndex": 0,
          "rationales": [
            "速度仍為負所以方向不變；絕對值由 4 降到 1。",
            "轉為正方向且速率增大不成立。速度仍為負所以方向不變；絕對值由 4 降到 1。",
            "此時物體向負方向且速率增大不成立。速度仍為負所以方向不變；絕對值由 4 降到 1。",
            "此時物體保持靜止不成立。速度仍為負所以方向不變；絕對值由 4 降到 1。"
          ],
          "reviewEvidence": "速度仍為負所以方向不變；絕對值由 4 降到 1。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_206_05",
          "stem": "圖線由 +2 m/s 降到 -2 m/s，途中穿越零。最合理的描述為何？",
          "options": [
            "先向正方向減速至停下，再向負方向加快",
            "此時物體始終向正方向加快",
            "此時物體始終向負方向減速",
            "全程保持同一速率方向"
          ],
          "answerIndex": 0,
          "rationales": [
            "速度由正經零到負，表示先正向、停止、再反向。",
            "此時物體始終向正方向加快不成立。速度由正經零到負，表示先正向、停止、再反向。",
            "此時物體始終向負方向減速不成立。速度由正經零到負，表示先正向、停止、再反向。",
            "全程保持同一速率方向不成立。速度由正經零到負，表示先正向、停止、再反向。"
          ],
          "reviewEvidence": "速度由正經零到負，表示先正向、停止、再反向。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_206_06",
          "stem": "速度—時間圖的橫軸通常表示什麼？",
          "options": [
            "物體的位置",
            "物體的速度",
            "時間",
            "物體的路程"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體的位置不成立。速度—時間圖以時間為橫軸、速度為縱軸。",
            "物體的速度不成立。速度—時間圖以時間為橫軸、速度為縱軸。",
            "速度—時間圖以時間為橫軸、速度為縱軸。",
            "物體的路程不成立。速度—時間圖以時間為橫軸、速度為縱軸。"
          ],
          "reviewEvidence": "速度—時間圖以時間為橫軸、速度為縱軸。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_206_07",
          "stem": "速度—時間圖的縱軸通常表示什麼？",
          "options": [
            "物體位置",
            "經過路程",
            "物體重量",
            "有方向的速度"
          ],
          "answerIndex": 3,
          "rationales": [
            "物體位置不成立。縱座標讀出每個時刻的速度大小與正負方向。",
            "經過路程不成立。縱座標讀出每個時刻的速度大小與正負方向。",
            "物體重量不成立。縱座標讀出每個時刻的速度大小與正負方向。",
            "縱座標讀出每個時刻的速度大小與正負方向。"
          ],
          "reviewEvidence": "縱座標讀出每個時刻的速度大小與正負方向。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_206_08",
          "stem": "圖線在 3 s 時為 +6 m/s，這一點不能直接告訴哪一項？",
          "options": [
            "物體此刻向正方向",
            "物體在 3 s 時的確切位置",
            "物體此刻速率為 6 m/s",
            "物體此刻速度為 +6 m/s"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體此刻向正方向不成立。單一速度讀值不含初位置與先前位移，無法確定當下位置。",
            "單一速度讀值不含初位置與先前位移，無法確定當下位置。",
            "物體此刻速率為 6 m/s不成立。單一速度讀值不含初位置與先前位移，無法確定當下位置。",
            "物體此刻速度為 +6 m/s不成立。單一速度讀值不含初位置與先前位移，無法確定當下位置。"
          ],
          "reviewEvidence": "單一速度讀值不含初位置與先前位移，無法確定當下位置。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_206_09",
          "stem": "圖線從 v=-2 m/s 線性上升，在 t=2 s 到達 0。何時可能改變方向？",
          "options": [
            "t=0 s 前",
            "任何時刻都不會",
            "t=2 s 附近",
            "只在位置為零時"
          ],
          "answerIndex": 2,
          "rationales": [
            "t=0 s 前不成立。方向由速度符號決定，速度在 2 s 達零並可能由負轉正。",
            "任何時刻都不會不成立。方向由速度符號決定，速度在 2 s 達零並可能由負轉正。",
            "方向由速度符號決定，速度在 2 s 達零並可能由負轉正。",
            "只在位置為零時不成立。方向由速度符號決定，速度在 2 s 達零並可能由負轉正。"
          ],
          "reviewEvidence": "方向由速度符號決定，速度在 2 s 達零並可能由負轉正。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_206_10",
          "stem": "兩條速度—時間圖在同一時刻交會，代表什麼？",
          "options": [
            "兩物體該時刻位置相同",
            "兩物體該時刻速度相同",
            "兩物體全程路程相同",
            "兩物體質量相同"
          ],
          "answerIndex": 1,
          "rationales": [
            "兩物體該時刻位置相同不成立。交點具有相同時間與速度座標，只能直接判定當下速度相同。",
            "交點具有相同時間與速度座標，只能直接判定當下速度相同。",
            "兩物體全程路程相同不成立。交點具有相同時間與速度座標，只能直接判定當下速度相同。",
            "兩物體質量相同不成立。交點具有相同時間與速度座標，只能直接判定當下速度相同。"
          ],
          "reviewEvidence": "交點具有相同時間與速度座標，只能直接判定當下速度相同。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_206_11",
          "stem": "圖線始終在 v=0 下方，但逐漸接近零。物體如何運動？",
          "options": [
            "此時物體向正方向運動且變快",
            "此時物體向負方向運動且變快",
            "此時物體始終靜止",
            "向負方向運動且逐漸變慢"
          ],
          "answerIndex": 3,
          "rationales": [
            "速度圖的正負值不能如此解讀。負速度表示負向，絕對值減小表示速率下降。",
            "此時物體向負方向運動且變快不成立。負速度表示負向，絕對值減小表示速率下降。",
            "此時物體始終靜止不成立。負速度表示負向，絕對值減小表示速率下降。",
            "負速度表示負向，絕對值減小表示速率下降。"
          ],
          "reviewEvidence": "負速度表示負向，絕對值減小表示速率下降。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_206_12",
          "stem": "圖線始終在 v=0 上方且逐漸升高。物體如何運動？",
          "options": [
            "此時物體向負方向運動且變快",
            "此時物體向正方向運動且變慢",
            "向正方向運動且逐漸變快",
            "此時物體始終靜止"
          ],
          "answerIndex": 2,
          "rationales": [
            "此時物體向負方向運動且變快不成立。正速度表示正向，數值增大表示速率增加。",
            "此時物體向正方向運動且變慢不成立。正速度表示正向，數值增大表示速率增加。",
            "正速度表示正向，數值增大表示速率增加。",
            "此時物體始終靜止不成立。正速度表示正向，數值增大表示速率增加。"
          ],
          "reviewEvidence": "正速度表示正向，數值增大表示速率增加。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_206_01",
          "stimulusId": "PHYCHM_R4_STIM_206",
          "stem": "依表格，t=0 s 時速度為何？",
          "options": [
            "速度為 -2 m/s",
            "物體的速度為 0 m/s",
            "物體的速度為 +2 m/s",
            "物體的速度為 +4 m/s"
          ],
          "answerIndex": 0,
          "rationales": [
            "資料首列 t=0 s 對應 v=-2 m/s。",
            "物體的速度為 0 m/s不成立。資料首列 t=0 s 對應 v=-2 m/s。",
            "物體的速度為 +2 m/s不成立。資料首列 t=0 s 對應 v=-2 m/s。",
            "物體的速度為 +4 m/s不成立。資料首列 t=0 s 對應 v=-2 m/s。"
          ],
          "reviewEvidence": "資料首列 t=0 s 對應 v=-2 m/s。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "圖表讀值"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_206_02",
          "stimulusId": "PHYCHM_R4_STIM_206",
          "stem": "依速度符號變化表，物體由負向轉為正向前，在哪一時刻速度為零？",
          "options": [
            "t=0 s",
            "t=4 s",
            "t=6 s",
            "t=2 s"
          ],
          "answerIndex": 3,
          "rationales": [
            "t=0 s不成立。表中 t=2 s 對應 v=0，為停止或換向時刻。",
            "t=4 s不成立。表中 t=2 s 對應 v=0，為停止或換向時刻。",
            "t=6 s不成立。表中 t=2 s 對應 v=0，為停止或換向時刻。",
            "表中 t=2 s 對應 v=0，為停止或換向時刻。"
          ],
          "reviewEvidence": "表中 t=2 s 對應 v=0，為停止或換向時刻。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "圖形分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_206_03",
          "stimulusId": "PHYCHM_R4_STIM_206",
          "stem": "依表格，從 t=0 到 t=6 s，速度如何變化？",
          "options": [
            "由 -2 m/s 增加到 +4 m/s",
            "由 +4 m/s 降到 -2 m/s",
            "此時物體始終維持 0 m/s",
            "由 -2 m/s 降到 -4 m/s"
          ],
          "answerIndex": 0,
          "rationales": [
            "速度依序為 -2、0、+2、+4 m/s，數值持續增加。",
            "由 +4 m/s 降到 -2 m/s不成立。速度依序為 -2、0、+2、+4 m/s，數值持續增加。",
            "此時物體始終維持 0 m/s不成立。速度依序為 -2、0、+2、+4 m/s，數值持續增加。",
            "由 -2 m/s 降到 -4 m/s不成立。速度依序為 -2、0、+2、+4 m/s，數值持續增加。"
          ],
          "reviewEvidence": "速度依序為 -2、0、+2、+4 m/s，數值持續增加。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境轉譯"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S207",
      "title": "由速度時間圖判斷加速減速與方向",
      "authorityRefs": [
        "AUTH-NATURAL-LC-EB-4-8",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-PA-4-2",
        "AUTH-NATURAL-LP-PC-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_007"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_207",
        "objective": "能掌握速度時間圖判斷加速減速與方向的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "速度—時間圖上數值由 2 增至 6 m/s 表示正向加速；速度由 −2 變 −6 m/s 則是負向快慢增大。"
          },
          {
            "title": "證據判讀",
            "content": "向東為正，表中速度每秒記一次；需同時看大小與正負。 速度由 −6 到 −3，仍向西但大小減小。 速度在 2 s 經過零並改變符號。"
          },
          {
            "title": "適用界線",
            "content": "速度—時間圖上數值由 2 增至 6 m/s 表示正向加速；速度由 −2 變 −6 m/s 則是負向快慢增大。 [3−(−3)]÷2＝3 m/s²。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_207_EX_01",
            "prompt": "速度正負與變化：向東為正，表中速度每秒記一次；需同時看大小與正負。 0 到 1 s 物體如何？",
            "steps": [
              "向東為正，表中速度每秒記一次；需同時看大小與正負。",
              "速度由 −6 到 −3，仍向西但大小減小。",
              "速度由 −6 到 −3，仍向西但大小減小。"
            ],
            "answer": "向西且速率減小；速度由 −6 到 −3，仍向西但大小減小。",
            "why": "速度由 −6 到 −3，仍向西但大小減小。"
          },
          {
            "id": "PHYCHM_R4_L_207_EX_02",
            "prompt": "速度正負與變化：向東為正，表中速度每秒記一次；需同時看大小與正負。 何時改變方向？",
            "steps": [
              "向東為正，表中速度每秒記一次；需同時看大小與正負。",
              "速度在 2 s 經過零並改變符號。",
              "速度在 2 s 經過零並改變符號。"
            ],
            "answer": "約 2 s；速度在 2 s 經過零並改變符號。",
            "why": "速度在 2 s 經過零並改變符號。"
          },
          {
            "id": "PHYCHM_R4_L_207_EX_03",
            "prompt": "速度正負與變化：向東為正，表中速度每秒記一次；需同時看大小與正負。 1 到 3 s 平均加速度為何？",
            "steps": [
              "向東為正，表中速度每秒記一次；需同時看大小與正負。",
              "[3−(−3)]÷2＝3 m/s²。",
              "[3−(−3)]÷2＝3 m/s²。"
            ],
            "answer": "+3 m/s²；[3−(−3)]÷2＝3 m/s²。",
            "why": "[3−(−3)]÷2＝3 m/s²。"
          }
        ],
        "misconceptions": [
          {
            "belief": "認為速度與加速度同號才叫加速，異號就代表沒有加速度。",
            "whyWrong": "異號時仍有加速度，只是其方向與速度相反而使速率減小。",
            "correction": "比較速度與加速度符號：同號通常變快，異號通常變慢。"
          },
          {
            "belief": "看到負加速度就一律判定物體減速。",
            "whyWrong": "若速度也為負，負加速度與速度同向，速率反而增加。",
            "correction": "負號代表方向；是否變快要比較速度和加速度方向。"
          },
          {
            "belief": "物體速度等於零的瞬間，認為加速度也必為零。",
            "whyWrong": "換向瞬間速度可為零而加速度仍非零。",
            "correction": "速度與加速度是不同物理量，須分別由圖或資料求得。"
          },
          {
            "belief": "將速度數值由 -6 變 -3 說成「更負所以變快」。",
            "whyWrong": "速率看絕對值，|-6| 降到 |-3|，物體其實變慢。",
            "correction": "先取速度絕對值比較快慢，再用符號判方向。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_207",
        "title": "速度正負與變化",
        "body": "向東為正，表中速度每秒記一次；需同時看大小與正負。",
        "dataTable": {
          "caption": "速度正負與變化",
          "columns": [
            "時間",
            "速度",
            "判讀"
          ],
          "rows": [
            [
              "0 s",
              "−6 m/s",
              "向西"
            ],
            [
              "1 s",
              "−3 m/s",
              "向西變慢"
            ],
            [
              "2 s",
              "0 m/s",
              "轉折"
            ],
            [
              "3 s",
              "+3 m/s",
              "向東變快"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_007"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_207_01",
          "stem": "物體速度為 +5 m/s、加速度為 +2 m/s²，速率如何變化？",
          "options": [
            "物體的速率減小",
            "速率增加",
            "物體的速率不變",
            "物體立即換向"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體的速率減小不成立。速度與加速度同為正，作用方向相同，因此變快。",
            "速度與加速度同為正，作用方向相同，因此變快。",
            "物體的速率不變不成立。速度與加速度同為正，作用方向相同，因此變快。",
            "物體立即換向不成立。速度與加速度同為正，作用方向相同，因此變快。"
          ],
          "reviewEvidence": "速度與加速度同為正，作用方向相同，因此變快。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_207_02",
          "stem": "物體速度為 +5 m/s、加速度為 -2 m/s²，短時間內速率如何？",
          "options": [
            "物體的速率增加",
            "物體的速率不變",
            "物體的速度立刻變為 -5 m/s",
            "速率減小"
          ],
          "answerIndex": 3,
          "rationales": [
            "物體的速率增加不成立。加速度與正速度反向，速度大小先減小。",
            "物體的速率不變不成立。加速度與正速度反向，速度大小先減小。",
            "物體的速度立刻變為 -5 m/s不成立。加速度與正速度反向，速度大小先減小。",
            "加速度與正速度反向，速度大小先減小。"
          ],
          "reviewEvidence": "加速度與正速度反向，速度大小先減小。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_207_03",
          "stem": "物體速度為 -5 m/s、加速度為 -2 m/s²，速率如何？",
          "options": [
            "速率增加",
            "物體的速率減小",
            "物體的速率不變",
            "物體向正方向加快"
          ],
          "answerIndex": 0,
          "rationales": [
            "速度與加速度同向負方向，速度絕對值增加。",
            "物體的速率減小不成立。速度與加速度同向負方向，速度絕對值增加。",
            "物體的速率不變不成立。速度與加速度同向負方向，速度絕對值增加。",
            "物體向正方向加快不成立。速度與加速度同向負方向，速度絕對值增加。"
          ],
          "reviewEvidence": "速度與加速度同向負方向，速度絕對值增加。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_207_04",
          "stem": "物體速度為 -5 m/s、加速度為 +2 m/s²，短時間內速率如何？",
          "options": [
            "物體的速率增加",
            "物體的速率不變",
            "速率減小",
            "物體的加速度必為零"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體的速率增加不成立。正加速度與負速度反向，使負速度逐步接近零。",
            "物體的速率不變不成立。正加速度與負速度反向，使負速度逐步接近零。",
            "正加速度與負速度反向，使負速度逐步接近零。",
            "物體的加速度必為零不成立。正加速度與負速度反向，使負速度逐步接近零。"
          ],
          "reviewEvidence": "正加速度與負速度反向，使負速度逐步接近零。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_207_05",
          "stem": "速度由 -6 m/s 變為 -3 m/s，運動方向與快慢如何？",
          "options": [
            "此時物體仍向負方向，且變快",
            "此時物體改向正方向，且變快",
            "此時物體保持靜止",
            "仍向負方向，但變慢"
          ],
          "answerIndex": 3,
          "rationales": [
            "此時物體仍向負方向，且變快不成立。速度仍為負，速率則由 6 降為 3 m/s。",
            "此時物體改向正方向，且變快不成立。速度仍為負，速率則由 6 降為 3 m/s。",
            "此時物體保持靜止不成立。速度仍為負，速率則由 6 降為 3 m/s。",
            "速度仍為負，速率則由 6 降為 3 m/s。"
          ],
          "reviewEvidence": "速度仍為負，速率則由 6 降為 3 m/s。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_207_06",
          "stem": "速度由 -2 m/s 變為 +1 m/s，必經過哪一狀態？",
          "options": [
            "物體的速率始終不變",
            "物體的位置必經過原點",
            "速度曾等於零並改變方向",
            "物體的加速度必等於零"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體的速率始終不變不成立。連續變化由負到正必先通過速度零點，之後方向反轉。",
            "物體的位置必經過原點不成立。連續變化由負到正必先通過速度零點，之後方向反轉。",
            "連續變化由負到正必先通過速度零點，之後方向反轉。",
            "物體的加速度必等於零不成立。連續變化由負到正必先通過速度零點，之後方向反轉。"
          ],
          "reviewEvidence": "連續變化由負到正必先通過速度零點，之後方向反轉。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_207_07",
          "stem": "若速度與加速度符號相同，通常表示什麼？",
          "options": [
            "物體的速率正在減小",
            "速率正在增加",
            "物體的位置必為正",
            "物體必在原點"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體的速率正在減小不成立。同號表示加速度沿運動方向，會增大速度絕對值。",
            "同號表示加速度沿運動方向，會增大速度絕對值。",
            "物體的位置必為正不成立。同號表示加速度沿運動方向，會增大速度絕對值。",
            "物體必在原點不成立。同號表示加速度沿運動方向，會增大速度絕對值。"
          ],
          "reviewEvidence": "同號表示加速度沿運動方向，會增大速度絕對值。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_207_08",
          "stem": "若速度與加速度符號相反，且尚未換向，通常表示什麼？",
          "options": [
            "物體的速率正在增加",
            "速率正在減小",
            "物體一定靜止",
            "物體的加速度為零"
          ],
          "answerIndex": 1,
          "rationales": [
            "物體的速率正在增加不成立。反向加速度抵消現有速度，使其絕對值下降。",
            "反向加速度抵消現有速度，使其絕對值下降。",
            "物體一定靜止不成立。反向加速度抵消現有速度，使其絕對值下降。",
            "物體的加速度為零不成立。反向加速度抵消現有速度，使其絕對值下降。"
          ],
          "reviewEvidence": "反向加速度抵消現有速度，使其絕對值下降。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_207_09",
          "stem": "拋上球到達最高點的瞬間，速度可為零而加速度仍向下。這說明什麼？",
          "options": [
            "物體的速度與加速度永遠同向",
            "最高點沒有任何受力",
            "物體的速度為零代表位置也為零",
            "速度為零不代表加速度為零"
          ],
          "answerIndex": 3,
          "rationales": [
            "物體的速度與加速度永遠同向不成立。重力仍使球有向下加速度，即使最高點瞬時速度為零。",
            "最高點沒有任何受力不成立。重力仍使球有向下加速度，即使最高點瞬時速度為零。",
            "物體的速度為零代表位置也為零不成立。重力仍使球有向下加速度，即使最高點瞬時速度為零。",
            "重力仍使球有向下加速度，即使最高點瞬時速度為零。"
          ],
          "reviewEvidence": "重力仍使球有向下加速度，即使最高點瞬時速度為零。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_207_10",
          "stem": "速度—時間圖斜率為正，但圖線仍在零下方。物體如何？",
          "options": [
            "向負方向運動，速度數值增加",
            "此時物體向正方向運動且加速",
            "此時物體保持靜止",
            "物體的位置必為負"
          ],
          "answerIndex": 0,
          "rationales": [
            "速度負表示負向；正斜率表示加速度為正，負速度逐漸接近零。",
            "此時物體向正方向運動且加速不成立。速度負表示負向；正斜率表示加速度為正，負速度逐漸接近零。",
            "此時物體保持靜止不成立。速度負表示負向；正斜率表示加速度為正，負速度逐漸接近零。",
            "物體的位置必為負不成立。速度負表示負向；正斜率表示加速度為正，負速度逐漸接近零。"
          ],
          "reviewEvidence": "速度負表示負向；正斜率表示加速度為正，負速度逐漸接近零。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_207_11",
          "stem": "速度—時間圖斜率為負，圖線也在零下方。物體如何？",
          "options": [
            "此時物體向負方向運動且變慢",
            "此時物體向正方向運動且變快",
            "向負方向運動且變快",
            "此時物體保持等速"
          ],
          "answerIndex": 2,
          "rationales": [
            "此時物體向負方向運動且變慢不成立。速度與加速度皆為負，速率絕對值增加。",
            "速度圖的正負值不能如此解讀。速度與加速度皆為負，速率絕對值增加。",
            "速度與加速度皆為負，速率絕對值增加。",
            "此時物體保持等速不成立。速度與加速度皆為負，速率絕對值增加。"
          ],
          "reviewEvidence": "速度與加速度皆為負，速率絕對值增加。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_207_12",
          "stem": "判斷物體變快或變慢時，最可靠的比較方式為何？",
          "options": [
            "只看速度正負號",
            "只看位置正負號",
            "只看時間是否增加",
            "比較速度絕對值隨時間的變化"
          ],
          "answerIndex": 3,
          "rationales": [
            "只看速度正負號不成立。速率就是速度絕對值，其增減直接表示變快或變慢。",
            "只看位置正負號不成立。速率就是速度絕對值，其增減直接表示變快或變慢。",
            "只看時間是否增加不成立。速率就是速度絕對值，其增減直接表示變快或變慢。",
            "速率就是速度絕對值，其增減直接表示變快或變慢。"
          ],
          "reviewEvidence": "速率就是速度絕對值，其增減直接表示變快或變慢。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_207_01",
          "stimulusId": "PHYCHM_R4_STIM_207",
          "stem": "依表格，t=0 到 1 s 速度由 -6 變 -3 m/s。物體如何？",
          "options": [
            "向負方向運動且變慢",
            "此時物體向正方向運動且變快",
            "此時物體向負方向運動且變快",
            "此時物體保持靜止"
          ],
          "answerIndex": 0,
          "rationales": [
            "速度保持負號，速率由 6 降為 3 m/s。",
            "速度圖的正負值不能如此解讀。速度保持負號，速率由 6 降為 3 m/s。",
            "此時物體向負方向運動且變快不成立。速度保持負號，速率由 6 降為 3 m/s。",
            "此時物體保持靜止不成立。速度保持負號，速率由 6 降為 3 m/s。"
          ],
          "reviewEvidence": "速度保持負號，速率由 6 降為 3 m/s。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "圖表讀值"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_207_02",
          "stimulusId": "PHYCHM_R4_STIM_207",
          "stem": "依表格，物體在哪一時刻速度為零？",
          "options": [
            "t=0 s",
            "t=2 s",
            "t=1 s",
            "t=3 s"
          ],
          "answerIndex": 1,
          "rationales": [
            "t=0 s不成立。表中 t=2 s 對應速度 0 m/s。",
            "表中 t=2 s 對應速度 0 m/s。",
            "t=1 s不成立。表中 t=2 s 對應速度 0 m/s。",
            "t=3 s不成立。表中 t=2 s 對應速度 0 m/s。"
          ],
          "reviewEvidence": "表中 t=2 s 對應速度 0 m/s。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "圖形分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_207_03",
          "stimulusId": "PHYCHM_R4_STIM_207",
          "stem": "依表格，速度每秒增加 3 m/s，其加速度為何？",
          "options": [
            "加速度為 +3 m/s²",
            "物體的加速度為 -3 m/s²",
            "物體的加速度為 0 m/s²",
            "物體的加速度為 +6 m/s²"
          ],
          "answerIndex": 0,
          "rationales": [
            "相鄰每 1 s 的速度變化都是 +3 m/s，所以 a=+3 m/s²。",
            "物體的加速度為 -3 m/s²不成立。相鄰每 1 s 的速度變化都是 +3 m/s，所以 a=+3 m/s²。",
            "物體的加速度為 0 m/s²不成立。相鄰每 1 s 的速度變化都是 +3 m/s，所以 a=+3 m/s²。",
            "物體的加速度為 +6 m/s²不成立。相鄰每 1 s 的速度變化都是 +3 m/s，所以 a=+3 m/s²。"
          ],
          "reviewEvidence": "相鄰每 1 s 的速度變化都是 +3 m/s，所以 a=+3 m/s²。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境轉譯"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S208",
      "title": "把文字運動情境轉成合適圖形",
      "authorityRefs": [
        "AUTH-NATURAL-LC-EB-4-8",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-PA-4-2",
        "AUTH-NATURAL-LP-PC-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_007"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_208",
        "objective": "能掌握運動圖表中的現象的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "「向東等速、停留、向西返回」的位置—時間圖應依序是正斜率、水平、負斜率。"
          },
          {
            "title": "證據判讀",
            "content": "四段旅程以位置—時間圖的斜率和方向摘要。 水平線表示位置不隨時間改變。 斜率由正變負表示方向反轉。"
          },
          {
            "title": "適用界線",
            "content": "「向東等速、停留、向西返回」的位置—時間圖應依序是正斜率、水平、負斜率。 負斜率直線表示位置均勻減少。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_208_EX_01",
            "prompt": "文字情境的圖形特徵：四段旅程以位置—時間圖的斜率和方向摘要。 哪個表示靜止？",
            "steps": [
              "四段旅程以位置—時間圖的斜率和方向摘要。",
              "水平線表示位置不隨時間改變。",
              "水平線表示位置不隨時間改變。"
            ],
            "answer": "乙；水平線表示位置不隨時間改變。",
            "why": "水平線表示位置不隨時間改變。"
          },
          {
            "id": "PHYCHM_R4_L_208_EX_02",
            "prompt": "文字情境的圖形特徵：四段旅程以位置—時間圖的斜率和方向摘要。 哪個表示折返？",
            "steps": [
              "四段旅程以位置—時間圖的斜率和方向摘要。",
              "斜率由正變負表示方向反轉。",
              "斜率由正變負表示方向反轉。"
            ],
            "answer": "丁；斜率由正變負表示方向反轉。",
            "why": "斜率由正變負表示方向反轉。"
          },
          {
            "id": "PHYCHM_R4_L_208_EX_03",
            "prompt": "文字情境的圖形特徵：四段旅程以位置—時間圖的斜率和方向摘要。 向負方向等速對應哪個？",
            "steps": [
              "四段旅程以位置—時間圖的斜率和方向摘要。",
              "負斜率直線表示位置均勻減少。",
              "負斜率直線表示位置均勻減少。"
            ],
            "answer": "丙；負斜率直線表示位置均勻減少。",
            "why": "負斜率直線表示位置均勻減少。"
          }
        ],
        "misconceptions": [
          {
            "belief": "只用圖線上升或下降判斷快慢，忽略圖是位置—時間還是速度—時間。",
            "whyWrong": "不同圖的斜率意義不同；位置圖斜率是速度，速度圖斜率是加速度。",
            "correction": "先讀軸標與單位，再解釋高度、斜率與正負。"
          },
          {
            "belief": "認為位置—時間圖的水平段表示等速運動。",
            "whyWrong": "位置固定時斜率為零，物體是靜止，不是非零等速。",
            "correction": "水平位置圖對應速度零；斜直線才對應固定非零速度。"
          },
          {
            "belief": "認為速度—時間圖的水平段表示物體停止。",
            "whyWrong": "水平段表示速度不變；只有水平線位於 v=0 才是停止。",
            "correction": "同時看圖線是否水平及其速度高度。"
          },
          {
            "belief": "看到圖線穿過橫軸就說物體通過空間原點。",
            "whyWrong": "在速度圖中橫軸代表 v=0，不是位置 x=0。",
            "correction": "依縱軸名稱判讀交軸意義，不能跨圖種套用。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_208",
        "title": "文字情境的圖形特徵",
        "body": "四段旅程以位置—時間圖的斜率和方向摘要。",
        "dataTable": {
          "caption": "文字情境的圖形特徵",
          "columns": [
            "情境",
            "圖線特徵",
            "物理解讀"
          ],
          "rows": [
            [
              "甲",
              "正斜率直線",
              "向正方向等速"
            ],
            [
              "乙",
              "水平線",
              "位置不變"
            ],
            [
              "丙",
              "負斜率直線",
              "向負方向等速"
            ],
            [
              "丁",
              "先正後負",
              "前進後折返"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_007"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_208_01",
          "stem": "位置—時間圖為正斜率直線，代表什麼？",
          "options": [
            "物體的位置固定不動",
            "此時物體向負方向等速運動",
            "物體的速度持續增加",
            "以固定速度向正方向運動"
          ],
          "answerIndex": 3,
          "rationales": [
            "物體的位置固定不動不成立。直線斜率固定且為正，因此速度固定為正。",
            "此時物體向負方向等速運動不成立。直線斜率固定且為正，因此速度固定為正。",
            "物體的速度持續增加不成立。直線斜率固定且為正，因此速度固定為正。",
            "直線斜率固定且為正，因此速度固定為正。"
          ],
          "reviewEvidence": "直線斜率固定且為正，因此速度固定為正。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_208_02",
          "stem": "位置—時間圖為負斜率直線，代表什麼？",
          "options": [
            "此時物體向正方向加速",
            "物體的位置固定不動",
            "以固定速度向負方向運動",
            "物體的速度為正且增加"
          ],
          "answerIndex": 2,
          "rationales": [
            "此時物體向正方向加速不成立。固定負斜率就是固定負速度。",
            "物體的位置固定不動不成立。固定負斜率就是固定負速度。",
            "固定負斜率就是固定負速度。",
            "物體的速度為正且增加不成立。固定負斜率就是固定負速度。"
          ],
          "reviewEvidence": "固定負斜率就是固定負速度。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_208_03",
          "stem": "位置—時間圖呈水平線，代表什麼？",
          "options": [
            "物體以固定正速度運動",
            "物體以固定負速度運動",
            "物體保持靜止",
            "物體持續加速"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體以固定正速度運動不成立。位置不變使斜率與速度都為零。",
            "物體以固定負速度運動不成立。位置不變使斜率與速度都為零。",
            "位置不變使斜率與速度都為零。",
            "物體持續加速不成立。位置不變使斜率與速度都為零。"
          ],
          "reviewEvidence": "位置不變使斜率與速度都為零。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_208_04",
          "stem": "速度—時間圖在 +4 m/s 呈水平線，代表什麼？",
          "options": [
            "此時物體停在位置 4 m",
            "以 +4 m/s 做等速運動",
            "此時物體每秒加速 4 m/s²",
            "此時物體向負方向運動"
          ],
          "answerIndex": 1,
          "rationales": [
            "此時物體停在位置 4 m不成立。水平線表示速度固定，且縱值為正 4 m/s。",
            "水平線表示速度固定，且縱值為正 4 m/s。",
            "此時物體每秒加速 4 m/s²不成立。水平線表示速度固定，且縱值為正 4 m/s。",
            "此時物體向負方向運動不成立。水平線表示速度固定，且縱值為正 4 m/s。"
          ],
          "reviewEvidence": "水平線表示速度固定，且縱值為正 4 m/s。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_208_05",
          "stem": "速度—時間圖由 0 線性上升，代表什麼？",
          "options": [
            "具有正加速度",
            "物體的位置線性增加",
            "物體的速度固定不變",
            "具有負加速度"
          ],
          "answerIndex": 0,
          "rationales": [
            "速度隨時間增加，速度圖斜率為正，所以加速度為正。",
            "物體的位置線性增加不成立。速度隨時間增加，速度圖斜率為正，所以加速度為正。",
            "物體的速度固定不變不成立。速度隨時間增加，速度圖斜率為正，所以加速度為正。",
            "具有負加速度不成立。速度隨時間增加，速度圖斜率為正，所以加速度為正。"
          ],
          "reviewEvidence": "速度隨時間增加，速度圖斜率為正，所以加速度為正。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_208_06",
          "stem": "速度—時間圖由正值線性下降到零，代表什麼？",
          "options": [
            "向正方向運動並逐漸減速至停止",
            "此時物體向負方向逐漸加速",
            "物體的位置回到原點",
            "此時物體始終保持等速"
          ],
          "answerIndex": 0,
          "rationales": [
            "速度保持正但數值減小，至零時停止。",
            "此時物體向負方向逐漸加速不成立。速度保持正但數值減小，至零時停止。",
            "物體的位置回到原點不成立。速度保持正但數值減小，至零時停止。",
            "此時物體始終保持等速不成立。速度保持正但數值減小，至零時停止。"
          ],
          "reviewEvidence": "速度保持正但數值減小，至零時停止。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_208_07",
          "stem": "要判斷圖線斜率的物理意義，第一步應做什麼？",
          "options": [
            "只看圖線顏色",
            "確認橫軸與縱軸的物理量及單位",
            "此時物體先數折點個數",
            "直接把斜率當成速率"
          ],
          "answerIndex": 1,
          "rationales": [
            "只看圖線顏色不成立。軸標決定斜率是位置對時間或速度對時間的變化率。",
            "軸標決定斜率是位置對時間或速度對時間的變化率。",
            "此時物體先數折點個數不成立。軸標決定斜率是位置對時間或速度對時間的變化率。",
            "直接把斜率當成速率不成立。軸標決定斜率是位置對時間或速度對時間的變化率。"
          ],
          "reviewEvidence": "軸標決定斜率是位置對時間或速度對時間的變化率。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_208_08",
          "stem": "同樣一條上升直線，出現在位置—時間圖與速度—時間圖時，意義如何？",
          "options": [
            "兩者都只表示位置增加",
            "兩者都只表示速度固定",
            "前者表示正速度，後者表示正加速度",
            "兩者都表示物體靜止"
          ],
          "answerIndex": 2,
          "rationales": [
            "兩者都只表示位置增加不成立。位置圖斜率是速度；速度圖斜率是加速度。",
            "兩者都只表示速度固定不成立。位置圖斜率是速度；速度圖斜率是加速度。",
            "位置圖斜率是速度；速度圖斜率是加速度。",
            "兩者都表示物體靜止不成立。位置圖斜率是速度；速度圖斜率是加速度。"
          ],
          "reviewEvidence": "位置圖斜率是速度；速度圖斜率是加速度。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_208_09",
          "stem": "速度—時間圖位於零下方且水平，代表什麼？",
          "options": [
            "以固定速度向負方向運動",
            "物體位於原點負側不動",
            "此時物體向負方向加速",
            "物體的速度為零"
          ],
          "answerIndex": 0,
          "rationales": [
            "負縱值表示負向，水平表示速度數值不變。",
            "物體位於原點負側不動不成立。負縱值表示負向，水平表示速度數值不變。",
            "此時物體向負方向加速不成立。負縱值表示負向，水平表示速度數值不變。",
            "物體的速度為零不成立。負縱值表示負向，水平表示速度數值不變。"
          ],
          "reviewEvidence": "負縱值表示負向，水平表示速度數值不變。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_208_10",
          "stem": "位置—時間圖斜率逐漸增加，最合理的解釋為何？",
          "options": [
            "物體的位置保持不變",
            "物體的加速度一定為零",
            "物體質量增加",
            "速度數值逐漸增加"
          ],
          "answerIndex": 3,
          "rationales": [
            "物體的位置保持不變不成立。位置圖斜率就是速度，斜率增加代表速度增加。",
            "物體的加速度一定為零不成立。位置圖斜率就是速度，斜率增加代表速度增加。",
            "物體質量增加不成立。位置圖斜率就是速度，斜率增加代表速度增加。",
            "位置圖斜率就是速度，斜率增加代表速度增加。"
          ],
          "reviewEvidence": "位置圖斜率就是速度，斜率增加代表速度增加。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_208_11",
          "stem": "速度—時間圖斜率為零，最直接可知什麼？",
          "options": [
            "物體的速度必為零",
            "物體的位置必為零",
            "物體的路程必為零",
            "加速度為零"
          ],
          "answerIndex": 3,
          "rationales": [
            "物體的速度必為零不成立。速度不隨時間變化，所以速度變化率即加速度為零。",
            "物體的位置必為零不成立。速度不隨時間變化，所以速度變化率即加速度為零。",
            "物體的路程必為零不成立。速度不隨時間變化，所以速度變化率即加速度為零。",
            "速度不隨時間變化，所以速度變化率即加速度為零。"
          ],
          "reviewEvidence": "速度不隨時間變化，所以速度變化率即加速度為零。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_208_12",
          "stem": "速度—時間圖穿過 v=0 從正到負，代表什麼？",
          "options": [
            "物體由正方向運動轉為負方向運動",
            "物體通過空間原點",
            "物體質量變為零",
            "時間重新開始"
          ],
          "answerIndex": 0,
          "rationales": [
            "速度符號由正變負，表示方向反轉。",
            "物體通過空間原點不成立。速度符號由正變負，表示方向反轉。",
            "物體質量變為零不成立。速度符號由正變負，表示方向反轉。",
            "時間重新開始不成立。速度符號由正變負，表示方向反轉。"
          ],
          "reviewEvidence": "速度符號由正變負，表示方向反轉。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_208_01",
          "stimulusId": "PHYCHM_R4_STIM_208",
          "stem": "依圖例，正斜率的位置—時間線代表哪種運動？",
          "options": [
            "此時物體向負方向運動",
            "向正方向運動",
            "此時物體保持靜止",
            "無法判斷方向"
          ],
          "answerIndex": 1,
          "rationales": [
            "此時物體向負方向運動不成立。位置隨時間增加，斜率為正，速度方向為正。",
            "位置隨時間增加，斜率為正，速度方向為正。",
            "此時物體保持靜止不成立。位置隨時間增加，斜率為正，速度方向為正。",
            "無法判斷方向不成立。位置隨時間增加，斜率為正，速度方向為正。"
          ],
          "reviewEvidence": "位置隨時間增加，斜率為正，速度方向為正。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "圖表讀值"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_208_02",
          "stimulusId": "PHYCHM_R4_STIM_208",
          "stem": "依圖例，水平的位置—時間線代表哪種運動？",
          "options": [
            "物體的速度固定且不為零",
            "此時物體向負方向加速",
            "位置不變、物體靜止",
            "通過原點"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體的速度固定且不為零不成立。水平線的位移變化量為零，所以速度為零。",
            "此時物體向負方向加速不成立。水平線的位移變化量為零，所以速度為零。",
            "水平線的位移變化量為零，所以速度為零。",
            "通過原點不成立。水平線的位移變化量為零，所以速度為零。"
          ],
          "reviewEvidence": "水平線的位移變化量為零，所以速度為零。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "圖形分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_208_03",
          "stimulusId": "PHYCHM_R4_STIM_208",
          "stem": "依圖例，先正斜率再負斜率的折線代表什麼？",
          "options": [
            "全程向正方向加速",
            "先向正方向運動，再改向負方向",
            "全程保持靜止",
            "此時物體先向負再向正"
          ],
          "answerIndex": 1,
          "rationales": [
            "全程向正方向加速不成立。前段斜率正、後段斜率負，方向在折點改變。",
            "前段斜率正、後段斜率負，方向在折點改變。",
            "全程保持靜止不成立。前段斜率正、後段斜率負，方向在折點改變。",
            "此時物體先向負再向正不成立。前段斜率正、後段斜率負，方向在折點改變。"
          ],
          "reviewEvidence": "前段斜率正、後段斜率負，方向在折點改變。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境轉譯"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S209",
      "title": "排除把曲線軌跡誤當位置時間圖的解讀",
      "authorityRefs": [
        "AUTH-NATURAL-LC-EB-4-8",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-PA-4-2",
        "AUTH-NATURAL-LP-PC-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_007"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_209",
        "objective": "能掌握把曲線軌跡誤當位置時間圖的解讀的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "位置—時間圖的線形描述位置如何隨時間變化，不是物體在空間中的軌跡外觀。"
          },
          {
            "title": "證據判讀",
            "content": "同一小車沿直線走，表中比較實際空間路徑與位置—時間圖形狀。 位置—時間曲線反映速度變化，不是空間軌跡。 位置—時間圖的斜率大小代表速度大小；丙圖斜率變小表示速率降低。"
          },
          {
            "title": "適用界線",
            "content": "位置—時間圖的線形描述位置如何隨時間變化，不是物體在空間中的軌跡外觀。 位置不變，因此該段速度為零。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_209_EX_01",
            "prompt": "圖線與實際路徑對照：同一小車沿直線走，表中比較實際空間路徑與位置—時間圖形狀。 小車實際走直線，圖線可彎曲嗎？",
            "steps": [
              "同一小車沿直線走，表中比較實際空間路徑與位置—時間圖形狀。",
              "位置—時間曲線反映速度變化，不是空間軌跡。",
              "位置—時間曲線反映速度變化，不是空間軌跡。"
            ],
            "answer": "可以，斜率可隨速度改變；位置—時間曲線反映速度變化，不是空間軌跡。",
            "why": "位置—時間曲線反映速度變化，不是空間軌跡。"
          },
          {
            "id": "PHYCHM_R4_L_209_EX_02",
            "prompt": "圖線與實際路徑對照：同一小車沿直線走，表中比較實際空間路徑與位置—時間圖形狀。 丙圖斜率變小表示什麼？",
            "steps": [
              "同一小車沿直線走，表中比較實際空間路徑與位置—時間圖形狀。",
              "斜率大小代表速度大小。",
              "位置—時間圖的斜率大小代表速度大小；丙圖斜率變小表示速率降低。"
            ],
            "answer": "速率變小；位置—時間圖的斜率大小代表速度大小；丙圖斜率變小表示速率降低。",
            "why": "位置—時間圖的斜率大小代表速度大小；丙圖斜率變小表示速率降低。"
          },
          {
            "id": "PHYCHM_R4_L_209_EX_03",
            "prompt": "圖線與實際路徑對照：同一小車沿直線走，表中比較實際空間路徑與位置—時間圖形狀。 丁的水平段表示什麼？",
            "steps": [
              "同一小車沿直線走，表中比較實際空間路徑與位置—時間圖形狀。",
              "位置不變，因此該段速度為零。",
              "位置不變，因此該段速度為零。"
            ],
            "answer": "小車停留；位置不變，因此該段速度為零。",
            "why": "位置不變，因此該段速度為零。"
          }
        ],
        "misconceptions": [
          {
            "belief": "認為實際路徑向左彎，位置—時間圖也必須畫成向左彎曲的線。",
            "whyWrong": "運動圖不是地圖；圖線形狀呈現物理量隨時間的變化。",
            "correction": "先把實際運動轉成各時刻的位置，再在座標圖上連點。"
          },
          {
            "belief": "看到直線路徑就一律畫水平的運動圖。",
            "whyWrong": "路徑筆直只描述空間形狀；若位置隨時間改變，位置圖仍有斜率。",
            "correction": "路徑判空間方向，運動圖判時間變化，兩者分開處理。"
          },
          {
            "belief": "物體轉彎時認為一維位置—時間圖一定能完整呈現轉彎方向。",
            "whyWrong": "單一座標軸只能描述該方向的位置分量，無法完整呈現二維路徑。",
            "correction": "需要路徑圖或多個座標分量，才能重建平面運動。"
          },
          {
            "belief": "將位置—時間圖的線長當成實際路程。",
            "whyWrong": "圖紙上的線長受刻度與繪圖方式影響，不等於物體走過的空間長度。",
            "correction": "由位置變化與方向分段計算路程，不量圖線的紙面長度。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_209",
        "title": "圖線與實際路徑對照",
        "body": "同一小車沿直線走，表中比較實際空間路徑與位置—時間圖形狀。",
        "dataTable": {
          "caption": "圖線與實際路徑對照",
          "columns": [
            "試次",
            "實際路徑",
            "位置—時間圖"
          ],
          "rows": [
            [
              "甲",
              "直線向右等速",
              "正斜率直線"
            ],
            [
              "乙",
              "直線向左等速",
              "負斜率直線"
            ],
            [
              "丙",
              "直線先快後慢",
              "斜率先大後小"
            ],
            [
              "丁",
              "直線停留再走",
              "水平後斜線"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_007"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_209_01",
          "stem": "小車沿直線向右做等速運動，其位置—時間圖應有何特徵？",
          "options": [
            "位置隨時間等量增加，呈正斜率直線",
            "物體的位置保持不變，呈水平線",
            "物體的位置隨時間等量減少",
            "圖線畫成道路的俯視形狀"
          ],
          "answerIndex": 0,
          "rationales": [
            "等速向右使位置對時間以固定正斜率增加。",
            "物體的位置保持不變，呈水平線不成立。等速向右使位置對時間以固定正斜率增加。",
            "物體的位置隨時間等量減少不成立。等速向右使位置對時間以固定正斜率增加。",
            "圖線畫成道路的俯視形狀不成立。等速向右使位置對時間以固定正斜率增加。"
          ],
          "reviewEvidence": "等速向右使位置對時間以固定正斜率增加。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_209_02",
          "stem": "小車沿直線向左做等速運動，其位置—時間圖應有何特徵？",
          "options": [
            "物體的位置隨時間等量增加",
            "物體的位置始終為零",
            "位置隨時間等量減少，呈負斜率直線",
            "圖線必為圓弧"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體的位置隨時間等量增加不成立。向左若定為負方向，位置以固定速率下降。",
            "物體的位置始終為零不成立。向左若定為負方向，位置以固定速率下降。",
            "向左若定為負方向，位置以固定速率下降。",
            "圖線必為圓弧不成立。向左若定為負方向，位置以固定速率下降。"
          ],
          "reviewEvidence": "向左若定為負方向，位置以固定速率下降。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_209_03",
          "stem": "小車先快速向右、後慢速向右，位置—時間圖如何改變？",
          "options": [
            "前段正斜率較陡，後段正斜率較緩",
            "前段水平，後段負斜率",
            "前後斜率都相同",
            "前段負斜率，後段正斜率"
          ],
          "answerIndex": 0,
          "rationales": [
            "兩段都正向；速率較大對應較陡的正斜率。",
            "前段水平，後段負斜率不成立。兩段都正向；速率較大對應較陡的正斜率。",
            "前後斜率都相同不成立。兩段都正向；速率較大對應較陡的正斜率。",
            "前段負斜率，後段正斜率不成立。兩段都正向；速率較大對應較陡的正斜率。"
          ],
          "reviewEvidence": "兩段都正向；速率較大對應較陡的正斜率。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_209_04",
          "stem": "小車先停 2 s，再向右等速行駛。圖形應如何？",
          "options": [
            "此時物體先負斜率，後水平",
            "先水平，後接正斜率直線",
            "全程水平",
            "此時物體先正斜率，後負斜率"
          ],
          "answerIndex": 1,
          "rationales": [
            "此時物體先負斜率，後水平不成立。停留時位置不變，出發向右後位置線性增加。",
            "停留時位置不變，出發向右後位置線性增加。",
            "全程水平不成立。停留時位置不變，出發向右後位置線性增加。",
            "此時物體先正斜率，後負斜率不成立。停留時位置不變，出發向右後位置線性增加。"
          ],
          "reviewEvidence": "停留時位置不變，出發向右後位置線性增加。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_209_05",
          "stem": "運動路徑圖與位置—時間圖的主要差異為何？",
          "options": [
            "兩者都只呈現道路形狀",
            "兩者的橫軸都一定是時間",
            "兩者圖線長都等於路程",
            "前者呈現空間路線，後者呈現位置隨時間的變化"
          ],
          "answerIndex": 3,
          "rationales": [
            "兩者都只呈現道路形狀不成立。路徑圖是空間幾何，位置—時間圖則以時間為橫軸描述運動。",
            "兩者的橫軸都一定是時間不成立。路徑圖是空間幾何，位置—時間圖則以時間為橫軸描述運動。",
            "兩者圖線長都等於路程不成立。路徑圖是空間幾何，位置—時間圖則以時間為橫軸描述運動。",
            "路徑圖是空間幾何，位置—時間圖則以時間為橫軸描述運動。"
          ],
          "reviewEvidence": "路徑圖是空間幾何，位置—時間圖則以時間為橫軸描述運動。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_209_06",
          "stem": "物體沿圓形跑道運動一圈，能否只用一張一維位置—時間圖完整重建路徑？",
          "options": [
            "能，圖線必定是一個圓",
            "能，只要圖線長度等於周長",
            "不能，因為時間不能作橫軸",
            "不能，單一位置分量不足以描述整個平面路徑"
          ],
          "answerIndex": 3,
          "rationales": [
            "能，圖線必定是一個圓不成立。圓周運動需要至少兩個空間座標或直接的路徑圖。",
            "能，只要圖線長度等於周長不成立。圓周運動需要至少兩個空間座標或直接的路徑圖。",
            "不能，因為時間不能作橫軸不成立。圓周運動需要至少兩個空間座標或直接的路徑圖。",
            "圓周運動需要至少兩個空間座標或直接的路徑圖。"
          ],
          "reviewEvidence": "圓周運動需要至少兩個空間座標或直接的路徑圖。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_209_07",
          "stem": "位置—時間圖上的斜線長度是否等於物體實際路程？",
          "options": [
            "等於，可直接用尺量",
            "只要圖線直就等於",
            "只要單位寫公尺就等於",
            "不等於，應由座標值計算物理量"
          ],
          "answerIndex": 3,
          "rationales": [
            "等於，可直接用尺量不成立。圖面線長受兩軸比例影響，實際路程須由位置資料求得。",
            "只要圖線直就等於不成立。圖面線長受兩軸比例影響，實際路程須由位置資料求得。",
            "只要單位寫公尺就等於不成立。圖面線長受兩軸比例影響，實際路程須由位置資料求得。",
            "圖面線長受兩軸比例影響，實際路程須由位置資料求得。"
          ],
          "reviewEvidence": "圖面線長受兩軸比例影響，實際路程須由位置資料求得。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_209_08",
          "stem": "道路向右延伸但車停在路邊，位置—時間圖應如何？",
          "options": [
            "呈水平線",
            "呈正斜率直線",
            "畫成道路形狀",
            "呈負斜率直線"
          ],
          "answerIndex": 0,
          "rationales": [
            "道路方向不等於運動；車未移動時位置不變。",
            "呈正斜率直線不成立。道路方向不等於運動；車未移動時位置不變。",
            "畫成道路形狀不成立。道路方向不等於運動；車未移動時位置不變。",
            "呈負斜率直線不成立。道路方向不等於運動；車未移動時位置不變。"
          ],
          "reviewEvidence": "道路方向不等於運動；車未移動時位置不變。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_209_09",
          "stem": "甲、乙走不同彎曲路徑，卻有相同起點、終點與到達時間。可否有相同平均速度？",
          "options": [
            "不可以，路徑不同速度必不同",
            "不可以，彎路沒有位移",
            "可以，位移與時間相同即可",
            "可以，但路程也必相同"
          ],
          "answerIndex": 2,
          "rationales": [
            "不可以，路徑不同速度必不同不成立。平均速度由位移除以時間決定，不依賴中間路徑。",
            "不可以，彎路沒有位移不成立。平均速度由位移除以時間決定，不依賴中間路徑。",
            "平均速度由位移除以時間決定，不依賴中間路徑。",
            "可以，但路程也必相同不成立。平均速度由位移除以時間決定，不依賴中間路徑。"
          ],
          "reviewEvidence": "平均速度由位移除以時間決定，不依賴中間路徑。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_209_10",
          "stem": "要由實際運動紀錄畫位置—時間圖，應先整理哪項資料？",
          "options": [
            "道路的照片顏色",
            "物體的質量",
            "各時刻相對原點的位置",
            "圖紙上預定線長"
          ],
          "answerIndex": 2,
          "rationales": [
            "道路的照片顏色不成立。位置—時間圖需要成對的時間與位置資料。",
            "物體的質量不成立。位置—時間圖需要成對的時間與位置資料。",
            "位置—時間圖需要成對的時間與位置資料。",
            "圖紙上預定線長不成立。位置—時間圖需要成對的時間與位置資料。"
          ],
          "reviewEvidence": "位置—時間圖需要成對的時間與位置資料。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_209_11",
          "stem": "物體先向右再回到原點，位置—時間圖最可能如何？",
          "options": [
            "全程水平",
            "先上升，後下降回到 x=0",
            "只上升不下降",
            "圖線必畫成閉合圓"
          ],
          "answerIndex": 1,
          "rationales": [
            "全程水平不成立。正向離開使位置增加，返回原點使位置再降到零。",
            "正向離開使位置增加，返回原點使位置再降到零。",
            "只上升不下降不成立。正向離開使位置增加，返回原點使位置再降到零。",
            "圖線必畫成閉合圓不成立。正向離開使位置增加，返回原點使位置再降到零。"
          ],
          "reviewEvidence": "正向離開使位置增加，返回原點使位置再降到零。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_209_12",
          "stem": "物體走曲線但其 x 座標保持不變，x—時間圖如何？",
          "options": [
            "呈現與路徑相同的曲線",
            "呈水平線",
            "呈正斜率直線",
            "呈負斜率直線"
          ],
          "answerIndex": 1,
          "rationales": [
            "呈現與路徑相同的曲線不成立。x 分量未改變，所以 x 對時間為常數，即使其他方向有運動。",
            "x 分量未改變，所以 x 對時間為常數，即使其他方向有運動。",
            "呈正斜率直線不成立。x 分量未改變，所以 x 對時間為常數，即使其他方向有運動。",
            "呈負斜率直線不成立。x 分量未改變，所以 x 對時間為常數，即使其他方向有運動。"
          ],
          "reviewEvidence": "x 分量未改變，所以 x 對時間為常數，即使其他方向有運動。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_209_01",
          "stimulusId": "PHYCHM_R4_STIM_209",
          "stem": "依配對表，直線向右等速運動應配哪種位置—時間圖？",
          "options": [
            "固定負斜率直線",
            "固定正斜率直線",
            "水平線",
            "此時物體先水平後正斜率"
          ],
          "answerIndex": 1,
          "rationales": [
            "固定負斜率直線不成立。向右等速表示位置以固定速率增加。",
            "向右等速表示位置以固定速率增加。",
            "水平線不成立。向右等速表示位置以固定速率增加。",
            "此時物體先水平後正斜率不成立。向右等速表示位置以固定速率增加。"
          ],
          "reviewEvidence": "向右等速表示位置以固定速率增加。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "圖表讀值"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_209_02",
          "stimulusId": "PHYCHM_R4_STIM_209",
          "stem": "依配對表，先快後慢但都向右，應配哪種圖？",
          "options": [
            "此時物體先緩後陡的負斜率折線",
            "全程水平線",
            "斜率完全不變的直線",
            "先陡後緩的正斜率折線"
          ],
          "answerIndex": 3,
          "rationales": [
            "此時物體先緩後陡的負斜率折線不成立。速度都為正，且速率由大變小，所以正斜率由陡變緩。",
            "全程水平線不成立。速度都為正，且速率由大變小，所以正斜率由陡變緩。",
            "斜率完全不變的直線不成立。速度都為正，且速率由大變小，所以正斜率由陡變緩。",
            "速度都為正，且速率由大變小，所以正斜率由陡變緩。"
          ],
          "reviewEvidence": "速度都為正，且速率由大變小，所以正斜率由陡變緩。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "圖形分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_209_03",
          "stimulusId": "PHYCHM_R4_STIM_209",
          "stem": "依配對表，先停止再步行向右，應配哪種圖？",
          "options": [
            "此時物體先正斜率再水平",
            "全程負斜率",
            "先水平再接正斜率線",
            "此時物體先負斜率再正斜率"
          ],
          "answerIndex": 2,
          "rationales": [
            "此時物體先正斜率再水平不成立。停止時位置不變，之後向右使位置增加。",
            "全程負斜率不成立。停止時位置不變，之後向右使位置增加。",
            "停止時位置不變，之後向右使位置增加。",
            "此時物體先負斜率再正斜率不成立。停止時位置不變，之後向右使位置增加。"
          ],
          "reviewEvidence": "停止時位置不變，之後向右使位置增加。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境轉譯"
          ]
        }
      ]
    }
  ]
};
