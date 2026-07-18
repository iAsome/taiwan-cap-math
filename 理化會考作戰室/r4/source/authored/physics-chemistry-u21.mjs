export const PHYSICS_CHEMISTRY_AUTHORED_U21 = {
  "unitId": "PHYCHM_R4_U21",
  "title": "波的基本量與傳播模型",
  "authorityRefs": [
    "AUTH-NATURAL-LC-KA-4-1",
    "AUTH-NATURAL-LC-KA-4-2",
    "AUTH-NATURAL-LP-PA-4-1",
    "AUTH-NATURAL-LP-TM-4-1"
  ],
  "provenance": {
    "status": "original",
    "authorRole": "Codex R4 physics and chemistry content author",
    "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
  },
  "skills": [
    {
      "id": "PHYCHM_R4_S161",
      "title": "辨識波峰波谷振幅與波長",
      "authorityRefs": [
        "AUTH-NATURAL-LC-KA-4-1",
        "AUTH-NATURAL-LC-KA-4-2",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-TM-4-1"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_002"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_161",
        "objective": "能掌握波峰波谷振幅與波長的判準與適用條件。",
        "sections": [
          {
            "title": "波形上的四個量",
            "content": "橫波最高處稱波峰、最低處稱波谷。振幅是平衡位置到波峰或波谷的垂直距離；峰到谷的距離是兩倍振幅。波長則沿傳播方向量取相鄰兩個同相位點。"
          },
          {
            "title": "讀圖方法",
            "content": "先確認橫軸表示位置還是時間。位置波形圖可量振幅與波長；某一點的位移—時間圖可量振幅與週期，若沒有波速資料便不能只靠時間圖求波長。"
          },
          {
            "title": "容易混淆的距離",
            "content": "相鄰波峰的水平間距是一個波長，波峰到相鄰波谷只有半個波長。把峰谷全高當振幅，會使讀值恰好多一倍。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_161_EX_01",
            "prompt": "位置波形圖的平衡線為 0 cm，波峰為 +4 cm、波谷為 −4 cm。振幅和峰谷全高各是多少？",
            "steps": [
              "由平衡線量到波峰：|4−0|＝4 cm。",
              "由波峰量到波谷：4−(−4)＝8 cm。",
              "檢查峰谷全高應為振幅的兩倍。"
            ],
            "answer": "振幅 4 cm，峰谷全高 8 cm。",
            "why": "振幅只量平衡位置到極端位置；從 +4 cm 跨到 −4 cm 經過兩個振幅，所以是 8 cm。"
          },
          {
            "id": "PHYCHM_R4_L_161_EX_02",
            "prompt": "同一時刻的繩波圖上，兩個相鄰波峰位於 x＝1.2 m 與 x＝3.8 m。波長為何？",
            "steps": [
              "確認橫軸是位置 x。",
              "相鄰波峰屬於同相位點。",
              "計算 3.8−1.2＝2.6 m。"
            ],
            "answer": "波長為 2.6 m。",
            "why": "波長沿傳播方向量取相鄰同相位點；兩個波峰的水平座標差正好是一個完整波長。"
          },
          {
            "id": "PHYCHM_R4_L_161_EX_03",
            "prompt": "某質點的位移—時間圖每 0.25 s 重複一次。能否直接由此圖讀出波長？",
            "steps": [
              "橫軸為時間，不是空間位置。",
              "0.25 s 是週期。",
              "波長還需波速或位置波形資料。"
            ],
            "answer": "不能直接讀波長；只能先得到週期 0.25 s。",
            "why": "時間圖描述同一質點隨時間振動，不提供相鄰波峰的空間距離；除非另有波速，否則無法換算波長。"
          }
        ],
        "misconceptions": [
          {
            "belief": "把波峰到波谷的全高直接記成振幅，會使振幅讀值變成正確值的兩倍。",
            "whyWrong": "振幅的起點是平衡位置，終點才是波峰或波谷；峰谷全高跨過平衡線，包含兩個振幅。",
            "correction": "先找平衡線，再量平衡線到任一極端位置的垂直距離；峰谷全高需再除以二。"
          },
          {
            "belief": "量波長時沿鉛直方向比較兩個波峰的高度，波峰越高就表示波長越長。",
            "whyWrong": "波峰高度反映振幅；波長必須沿波的傳播方向，量相鄰兩個同相位點的間距。",
            "correction": "在位置波形圖上找相鄰波峰或相鄰波谷，取兩者的水平座標差作為波長。"
          },
          {
            "belief": "位移—時間圖相鄰波峰相隔 0.5 s，所以波長就是 0.5 m。",
            "whyWrong": "時間圖的橫軸單位是秒，峰峰間隔是週期；沒有波速便不能把時間直接當成空間長度。",
            "correction": "先由時間圖求週期或頻率；若另知波速，再用波長等於波速乘週期換算。"
          },
          {
            "belief": "任取兩個波峰相減都只算一個波長，即使兩峰之間還隔著另一個波峰。",
            "whyWrong": "波長是相鄰同相位點的距離；跨過一個中間波峰的兩端波峰相距兩個波長。",
            "correction": "先數兩個標記波峰之間有幾段峰峰間隔，再以總距離除以間隔數。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_161",
        "title": "繩波同時刻位置紀錄",
        "body": "攝影機在同一時刻讀取繩上四個標記點的水平位置與相對平衡線的位移。相鄰的 A、C 都位於局部最高處，正位移方向定為向上。",
        "dataTable": {
          "caption": "標記點位置與位移",
          "columns": [
            "標記點",
            "水平位置 x",
            "位移 y"
          ],
          "rows": [
            [
              "A",
              "1.0 m",
              "+3.0 cm"
            ],
            [
              "B",
              "2.0 m",
              "0 cm"
            ],
            [
              "C",
              "3.0 m",
              "+3.0 cm"
            ],
            [
              "D",
              "4.0 m",
              "0 cm"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_002"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_161_01",
          "stem": "位置波形圖的平衡線為 0 cm，波峰為 +4 cm、波谷為 −4 cm。振幅和峰谷全高各是多少？",
          "options": [
            "振幅 4 cm，峰谷全高 8 cm",
            "此波的振幅 8 cm，峰谷全高 4 cm",
            "此波的振幅 4 cm，峰谷全高 4 cm",
            "此波的振幅 8 cm，峰谷全高 8 cm"
          ],
          "answerIndex": 0,
          "rationales": [
            "平衡線到波峰是 4 cm，波峰到波谷則為 4−(−4)＝8 cm。",
            "8 cm 是峰谷全高，不能反過來當成振幅。",
            "峰谷全高跨越平衡線上下兩段，應是振幅的兩倍。",
            "把全高同時當成振幅，忽略了振幅只由平衡線量到極端位置。"
          ],
          "reviewEvidence": "由 y＝0 到 y＝+4 cm 的距離為 4 cm；由 +4 cm 到 −4 cm 的距離為 8 cm。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_161_02",
          "stem": "一條橫波的波峰位於 +6 cm，波谷位於 −6 cm。由波峰量到平衡位置的距離為何？",
          "options": [
            "12 cm，這就是振幅",
            "6 cm，這就是振幅",
            "3 cm，這就是半個振幅",
            "0 cm，因為平均位移為零"
          ],
          "answerIndex": 1,
          "rationales": [
            "12 cm 是波峰到波谷的全高，不是平衡位置到波峰的距離。",
            "平衡位置為 0 cm，|6−0|＝6 cm，符合振幅定義。",
            "題目已給波峰相對平衡線的位移為 6 cm，無須再除以二。",
            "平均位移可能為零，但波峰當下離平衡位置仍有 6 cm。"
          ],
          "reviewEvidence": "振幅為極端位移的絕對值，所以 A＝|+6−0|＝6 cm。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_161_03",
          "stem": "同一時刻的繩波圖上，兩個相鄰波峰位於 x＝1.2 m 與 x＝3.8 m。波長為何？",
          "options": [
            "5.0 m",
            "2.6 m",
            "1.3 m",
            "3.8 m"
          ],
          "answerIndex": 1,
          "rationales": [
            "把兩個位置座標相加不代表兩峰間距。",
            "相鄰波峰同相位，座標差 3.8−1.2＝2.6 m 即一個波長。",
            "2.6 m 不需再除以二，因為兩點已是相鄰同相位點。",
            "3.8 m 是第二個波峰的位置，不是相對第一峰的距離。"
          ],
          "reviewEvidence": "λ＝x₂−x₁＝3.8 m−1.2 m＝2.6 m。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_161_04",
          "stem": "位置波形圖上，某波峰到右側相鄰波谷的水平距離為 0.75 m。此波的波長是多少？",
          "options": [
            "0.75 m",
            "0.375 m",
            "1.50 m",
            "3.00 m"
          ],
          "answerIndex": 2,
          "rationales": [
            "0.75 m 只涵蓋由波峰到波谷的半個週期空間。",
            "再除以二會把半波誤縮成四分之一波長。",
            "波峰到相鄰波谷是半個波長，因此 λ＝2×0.75＝1.50 m。",
            "乘以四會把峰谷間距誤當成四分之一波長。"
          ],
          "reviewEvidence": "峰到相鄰谷的距離為 λ/2，故 λ＝2(0.75 m)＝1.50 m。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_161_05",
          "stem": "某質點的位移—時間圖每 0.25 s 重複一次。由此圖可直接得到哪項結果？",
          "options": [
            "此波的波長 0.25 m，波速 1.0 m/s",
            "此波的週期 4.0 s，頻率 0.25 Hz",
            "此波的振幅 0.25 m，頻率 4.0 Hz",
            "週期 0.25 s，頻率 4.0 Hz"
          ],
          "answerIndex": 3,
          "rationales": [
            "圖上沒有空間座標或波速，不能直接求波長與波速。",
            "把週期與頻率的數值對調，違反 f＝1/T。",
            "0.25 s 是橫軸時間間隔，不是縱軸振幅。",
            "重複一次所需時間是週期，取倒數得 f＝1/0.25＝4.0 Hz。"
          ],
          "reviewEvidence": "T＝0.25 s，f＝1/T＝4.0 s⁻¹；此時間圖未提供波長。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_161_06",
          "stem": "一列波在同一介質中的波速為 4.8 m/s，位置波形顯示波長為 1.6 m。波源頻率為何？",
          "options": [
            "7.68 Hz",
            "3.0 Hz",
            "0.33 Hz",
            "6.4 Hz"
          ],
          "answerIndex": 1,
          "rationales": [
            "把波速與波長相乘，所得單位不是每秒。",
            "由 v＝fλ 得 f＝4.8÷1.6＝3.0 Hz。",
            "用波長除以波速得到的是週期約 0.33 s。",
            "把波速與波長直接相加沒有物理意義。"
          ],
          "reviewEvidence": "f＝v/λ＝(4.8 m/s)/(1.6 m)＝3.0 Hz。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_161_07",
          "stem": "某位置波形圖的平衡線在 y＝2 cm，最高點為 5 cm，最低點為 −1 cm。振幅是多少？",
          "options": [
            "5 cm",
            "3 cm",
            "6 cm",
            "2 cm"
          ],
          "answerIndex": 1,
          "rationales": [
            "5 cm 是波峰座標，未扣除位於 2 cm 的平衡線。",
            "最高點到平衡線為 5−2＝3 cm，最低點到平衡線也為 2−(−1)＝3 cm。",
            "6 cm 是最高點到最低點的全高，等於兩個振幅。",
            "2 cm 是平衡線座標，不是極端位置到平衡線的距離。"
          ],
          "reviewEvidence": "A＝|5−2|＝|−1−2|＝3 cm。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_161_08",
          "stem": "在位置波形圖上，波峰位於 x＝1.0 m，向右第一個通過平衡線的位置為 x＝1.5 m。波長為何？",
          "options": [
            "0.5 m",
            "1.0 m",
            "2.0 m",
            "2.5 m"
          ],
          "answerIndex": 2,
          "rationales": [
            "0.5 m 只是由波峰到相鄰平衡位置的四分之一波長。",
            "乘以二只得到半個波長。",
            "由波峰到下一個平衡線交點是四分之一波長，故 λ＝4×0.5＝2.0 m。",
            "把兩個座標相加不是兩點的間距換算。"
          ],
          "reviewEvidence": "Δx＝1.5−1.0＝0.5 m＝λ/4，所以 λ＝2.0 m。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_161_09",
          "stem": "甲、乙兩張位置波形圖使用相同比例尺；甲的極端位移為 ±2 cm，乙為 ±4 cm。哪項比較正確？",
          "options": [
            "乙的波長必為甲的兩倍",
            "甲的振幅是乙的兩倍",
            "乙的振幅是甲的兩倍",
            "兩圖振幅都為 6 cm"
          ],
          "answerIndex": 2,
          "rationales": [
            "極端位移只提供振幅，沒有峰峰水平距離便不能比較波長。",
            "數值 2 cm 小於 4 cm，比例方向顛倒。",
            "兩圖平衡線皆為零，振幅分別為 2 cm 與 4 cm。",
            "振幅不把兩張圖的極端位移相加。"
          ],
          "reviewEvidence": "A甲＝2 cm、A乙＝4 cm，因此 A乙/A甲＝2。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_161_10",
          "stem": "只有某一時刻的完整位置波形圖，且沒有波速資料。下列哪個物理量無法由圖上直接求得？",
          "options": [
            "此波的振幅",
            "此波的波長",
            "波峰位置",
            "頻率"
          ],
          "answerIndex": 3,
          "rationales": [
            "可由平衡線到極端位置的縱向距離讀取振幅。",
            "可由相鄰同相位點的水平距離讀取波長。",
            "可直接由曲線的局部最高點讀出其座標。",
            "單一空間快照沒有時間間隔，不能知道每秒振動次數。"
          ],
          "reviewEvidence": "位置圖提供空間尺度但不含時間尺度；缺少波速時，f 無法由 v＝fλ 求出。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_161_11",
          "stem": "彈簧縱波的相鄰兩個密部中心位於 x＝0.40 m 與 x＝1.00 m。此波的波長為何？",
          "options": [
            "1.40 m",
            "0.30 m",
            "1.00 m",
            "0.60 m"
          ],
          "answerIndex": 3,
          "rationales": [
            "相加兩個位置不等於相鄰密部的間距。",
            "密部到相鄰密部已是一個波長，不需再除以二。",
            "第二密部的位置不是從第一密部量起的距離。",
            "相鄰密部是同相位區域，距離 1.00−0.40＝0.60 m。"
          ],
          "reviewEvidence": "λ＝1.00 m−0.40 m＝0.60 m。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_161_12",
          "stem": "某質點的位移—時間圖在 0.30 s 與 0.90 s 各出現一個相鄰波峰。週期是多少？",
          "options": [
            "1.20 s",
            "0.30 s",
            "0.90 s",
            "0.60 s"
          ],
          "answerIndex": 3,
          "rationales": [
            "兩峰已相鄰，不需把時刻差再乘以二。",
            "0.30 s 是第一個波峰發生的時刻，不是重複間隔。",
            "0.90 s 是第二個波峰的時刻，不是從前一峰算起的時間。",
            "時間圖相鄰波峰的時刻差為週期，0.90−0.30＝0.60 s。"
          ],
          "reviewEvidence": "T＝t₂−t₁＝0.90 s−0.30 s＝0.60 s。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_161_01",
          "stimulusId": "PHYCHM_R4_STIM_161",
          "stem": "由表中 A、C 的資料可求得此波的波長為何？",
          "options": [
            "1.0 m",
            "3.0 m",
            "2.0 m",
            "4.0 m"
          ],
          "answerIndex": 2,
          "rationales": [
            "1.0 m 是相鄰標記點的間隔，A 到 C 跨兩個此間隔。",
            "3.0 m 是 C 點的座標，不是相對 A 點的距離。",
            "A、C 是相鄰波峰，水平座標差 3.0−1.0＝2.0 m。",
            "4.0 m 是 D 點的座標，與相鄰波峰間距無關。"
          ],
          "reviewEvidence": "A、C 同為相鄰波峰，λ＝3.0 m−1.0 m＝2.0 m。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_161_02",
          "stimulusId": "PHYCHM_R4_STIM_161",
          "stem": "若平衡線為 y＝0，表中波的振幅是多少？",
          "options": [
            "3.0 cm",
            "1.0 cm",
            "2.0 cm",
            "6.0 cm"
          ],
          "answerIndex": 0,
          "rationales": [
            "波峰 A、C 的位移為 +3.0 cm，離平衡線 3.0 cm。",
            "1.0 是 A 點的水平座標，不能當作鉛直振幅。",
            "2.0 cm 來自波長數值，與振幅的縱向讀值不同。",
            "6.0 cm 會是從 +3.0 cm 到 −3.0 cm 的峰谷全高，但表中振幅仍為 3.0 cm。"
          ],
          "reviewEvidence": "A＝|+3.0−0|＝3.0 cm。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "資料分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_161_03",
          "stimulusId": "PHYCHM_R4_STIM_161",
          "stem": "只使用這張同時刻位置表，哪一個量仍無法確定？",
          "options": [
            "頻率",
            "波峰位置",
            "此波的振幅",
            "此波的波長"
          ],
          "answerIndex": 0,
          "rationales": [
            "表格只有同一時刻的空間資料，沒有振動次數或時間間隔。",
            "A、C 已被說明位於局部最高處，位置可由表中讀出。",
            "由波峰相對 y＝0 的位移可求振幅 3.0 cm。",
            "由相鄰波峰 A、C 的水平座標差可求波長 2.0 m。"
          ],
          "reviewEvidence": "資料提供位置與位移，卻沒有任何時間尺度，所以頻率不能確定。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "證據評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S162",
      "title": "由週期與頻率判斷振動快慢",
      "authorityRefs": [
        "AUTH-NATURAL-LC-KA-4-1",
        "AUTH-NATURAL-LC-KA-4-2",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-TM-4-1"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_002"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_162",
        "objective": "能掌握週期與頻率判斷振動快慢的判準與適用條件。",
        "sections": [
          {
            "title": "週期與頻率",
            "content": "週期 T 是完成一次振動所需時間，頻率 f 是每秒完成的振動次數，兩者互為倒數：f＝1/T。頻率越大表示振動越快，週期則越短。"
          },
          {
            "title": "從計數求值",
            "content": "若 t 秒內完成 N 次完整振動，頻率為 N/t，週期為 t/N。起點與終點必須選在相同運動狀態，否則「一次」的計數會多算或少算。"
          },
          {
            "title": "單位與比較",
            "content": "週期用秒，頻率用赫茲（Hz，等同 s⁻¹）。比較振動快慢時應比較同一時間內的完整次數，不能只看總次數而忽略觀察時間。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_162_EX_01",
            "prompt": "擺錘在 12 s 內完成 6 次往復，頻率與週期各是多少？",
            "steps": [
              "頻率 f＝6÷12＝0.50 Hz。",
              "週期 T＝12÷6＝2.0 s。",
              "核對 0.50×2.0＝1。"
            ],
            "answer": "頻率 0.50 Hz，週期 2.0 s。",
            "why": "六次振動平均分布在 12 秒中，每秒完成半次；一次完整振動因此需要兩秒。"
          },
          {
            "id": "PHYCHM_R4_L_162_EX_02",
            "prompt": "甲振子週期 0.20 s，乙振子頻率 4.0 Hz，誰振動較快？",
            "steps": [
              "將甲換成頻率：1÷0.20＝5.0 Hz。",
              "乙為 4.0 Hz。",
              "同用頻率比較大小。"
            ],
            "answer": "甲較快。",
            "why": "甲每秒完成 5 次，乙每秒完成 4 次；必須先把週期換成頻率，不能直接比較 0.20 與 4.0。"
          },
          {
            "id": "PHYCHM_R4_L_162_EX_03",
            "prompt": "學生從擺球最左端出發，經過最右端就記一次振動。這個計法有何問題？",
            "steps": [
              "最左端到最右端只經過半個循環。",
              "完整一次必須回到最左端且運動狀態相同。",
              "原計法會把半週期當成週期。"
            ],
            "answer": "會把振動次數算成兩倍、週期算成一半。",
            "why": "由一端到另一端只需半個週期；把半次當一次會使頻率高估兩倍。"
          }
        ],
        "misconceptions": [
          {
            "belief": "只比較振動總次數，不理會兩組的觀察時間，次數較多就判成頻率較高。",
            "whyWrong": "頻率是單位時間內的完整振動次數；觀察時間不同時，總次數不能直接比較。",
            "correction": "各組都先算 N/t，或換成相同的一秒，再比較頻率。"
          },
          {
            "belief": "把擺球從最左端走到最右端算一次完整振動，導致頻率高估兩倍。",
            "whyWrong": "由一端到另一端只經過半個週期；完整振動必須回到相同位置且運動方向相同。",
            "correction": "從左端出發要回到左端才計一次，或從通過平衡點的同方向狀態計到下一次同狀態。"
          },
          {
            "belief": "週期數值越大代表每秒振動越多，因此振動越快。",
            "whyWrong": "週期是一次振動所需時間，週期越長表示完成一次越慢；頻率才是每秒次數。",
            "correction": "使用 f＝1/T；週期增加時頻率減少。"
          },
          {
            "belief": "把 5 Hz 解讀成完成一次振動需要 5 s。",
            "whyWrong": "赫茲表示每秒的次數，5 Hz 是一秒五次；一次所需時間是 1/5 s。",
            "correction": "先辨認單位：Hz 對應頻率，s 對應週期，再用互為倒數換算。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_162",
        "title": "四個振子的計時紀錄",
        "body": "小組從振子通過平衡位置且向右時開始計時，回到相同位置與方向才算完成一次。每組都記錄完整振動次數與總時間。",
        "dataTable": {
          "caption": "振動次數與時間",
          "columns": [
            "振子",
            "完整次數 N",
            "總時間 t"
          ],
          "rows": [
            [
              "甲",
              "10 次",
              "5.0 s"
            ],
            [
              "乙",
              "8 次",
              "8.0 s"
            ],
            [
              "丙",
              "6 次",
              "12.0 s"
            ],
            [
              "丁",
              "12 次",
              "4.0 s"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_002"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_162_01",
          "stem": "擺錘在 12 s 內完成 6 次往復，頻率與週期各是多少？",
          "options": [
            "此波的頻率 2.0 Hz，週期 0.50 s",
            "此波的頻率 6.0 Hz，週期 12 s",
            "此波的頻率 0.50 Hz，週期 12 s",
            "頻率 0.50 Hz，週期 2.0 s"
          ],
          "answerIndex": 3,
          "rationales": [
            "把 N/t 與 t/N 對調了；6÷12 才是頻率。",
            "總次數與總時間不是頻率、週期本身。",
            "週期須以總時間除以次數，不是沿用 12 s。",
            "f＝6/12＝0.50 Hz，T＝12/6＝2.0 s。"
          ],
          "reviewEvidence": "f＝6/12＝0.50 Hz，T＝12/6＝2.0 s。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_162_02",
          "stem": "振子在 5.0 s 內完成 20 次完整振動。它的頻率與週期為何？",
          "options": [
            "此波的頻率 0.25 Hz，週期 4.0 s",
            "頻率 4.0 Hz，週期 0.25 s",
            "此波的頻率 20 Hz，週期 5.0 s",
            "此波的頻率 4.0 Hz，週期 5.0 s"
          ],
          "answerIndex": 1,
          "rationales": [
            "把頻率與週期互換；20/5 應為每秒次數。",
            "f＝20/5.0＝4.0 Hz，T＝1/f＝0.25 s。",
            "直接抄總次數與總時間，沒有換算成每次或每秒。",
            "5.0 s 是 20 次的總時間，一次只需 0.25 s。"
          ],
          "reviewEvidence": "f＝20/5.0＝4.0 Hz，T＝1/f＝0.25 s。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_162_03",
          "stem": "甲振子週期 0.20 s，乙振子頻率 4.0 Hz。哪一個振動較快？",
          "options": [
            "甲較快，因甲頻率為 5.0 Hz",
            "乙較快，因 4.0 大於 0.20",
            "兩者相同，因週期和頻率可直接相比",
            "無法比較，因兩者單位不同"
          ],
          "answerIndex": 0,
          "rationales": [
            "甲 f＝1/0.20＝5.0 Hz，大於乙的 4.0 Hz。",
            "直接比較不同物理量的數字沒有意義；甲要先換成 5.0 Hz。",
            "T 與 f 雖相關但不是同一數值；甲為 5.0 Hz。",
            "可用 f＝1/T 將甲換成頻率後比較。"
          ],
          "reviewEvidence": "甲 f＝1/0.20＝5.0 Hz，大於乙的 4.0 Hz。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_162_04",
          "stem": "甲、乙頻率分別為 8 Hz 與 2 Hz。兩者週期關係為何？",
          "options": [
            "甲週期是乙的四倍",
            "兩者週期相同",
            "甲週期是乙的四分之一",
            "甲週期是乙的一半"
          ],
          "answerIndex": 2,
          "rationales": [
            "頻率較高者週期較短，比例方向反了。",
            "T甲＝0.125 s、T乙＝0.50 s，並不相同。",
            "T甲＝1/8 s，T乙＝1/2 s，所以 T甲/T乙＝1/4。",
            "8 Hz 是 2 Hz 的四倍，因此週期應縮為四分之一。"
          ],
          "reviewEvidence": "T甲＝1/8 s，T乙＝1/2 s，所以 T甲/T乙＝1/4。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_162_05",
          "stem": "擺球從最左端出發，到最右端時學生便記一次振動。這樣計數會造成什麼結果？",
          "options": [
            "振動次數算成兩倍，週期算成一半",
            "振動次數算成一半，週期算成兩倍",
            "振動次數與週期都不受影響",
            "此波的頻率與週期都算成兩倍"
          ],
          "answerIndex": 0,
          "rationales": [
            "一端到另一端只經過 T/2；當作一次會令 N、f 加倍而 T 減半。",
            "把半次漏算的方向相反；此做法其實把半次當整次。",
            "左右端狀態不同，不能視為完成一次。",
            "次數高估會使頻率加倍，但週期會減半。"
          ],
          "reviewEvidence": "一端到另一端只經過 T/2；當作一次會令 N、f 加倍而 T 減半。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_162_06",
          "stem": "某低頻振動每 4.0 s 完成一次。其頻率為何？",
          "options": [
            "0.25 Hz",
            "4.0 Hz",
            "2.0 Hz",
            "0.40 Hz"
          ],
          "answerIndex": 0,
          "rationales": [
            "f＝1/T＝1/4.0＝0.25 Hz。",
            "4.0 s 是週期，頻率應取倒數。",
            "每 4 s 一次不可能每秒完成 2 次。",
            "1/4.0＝0.25，不是 0.40。"
          ],
          "reviewEvidence": "f＝1/T＝1/4.0＝0.25 Hz。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_162_07",
          "stem": "機器在 10 s 內完成 15 次完整循環，平均頻率是多少？",
          "options": [
            "0.67 Hz",
            "1.5 Hz",
            "5 Hz",
            "150 Hz"
          ],
          "answerIndex": 1,
          "rationales": [
            "0.67 s 是每次約需的週期，不是頻率。",
            "f＝N/t＝15/10＝1.5 Hz。",
            "把 10 s 誤當成兩次分配，未用 N/t。",
            "把次數和時間相乘，單位與頻率不符。"
          ],
          "reviewEvidence": "f＝N/t＝15/10＝1.5 Hz。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_162_08",
          "stem": "同一振子從通過平衡點且向右開始計時，3.0 s 後第 6 次回到相同狀態。週期為何？",
          "options": [
            "0.50 s",
            "2.0 s",
            "3.0 s",
            "18 s"
          ],
          "answerIndex": 0,
          "rationales": [
            "T＝t/N＝3.0/6＝0.50 s。",
            "2.0 是 6/3 的頻率數值，單位應為 Hz。",
            "3.0 s 是六次振動的總時間。",
            "把次數與總時間相乘，並非每次時間。"
          ],
          "reviewEvidence": "T＝t/N＝3.0/6＝0.50 s。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_162_09",
          "stem": "甲在 8 s 完成 12 次，乙在 5 s 完成 10 次。哪項判斷正確？",
          "options": [
            "甲頻率較高，因總次數較多",
            "兩者頻率相同",
            "乙頻率較高",
            "甲週期較短"
          ],
          "answerIndex": 2,
          "rationales": [
            "甲雖有 12 次，但 f甲＝1.5 Hz 小於乙的 2.0 Hz。",
            "兩組換算成每秒後分別是 1.5 與 2.0 次。",
            "f甲＝12/8＝1.5 Hz，f乙＝10/5＝2.0 Hz。",
            "週期與頻率反向；甲週期較長。"
          ],
          "reviewEvidence": "f甲＝12/8＝1.5 Hz，f乙＝10/5＝2.0 Hz。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_162_10",
          "stem": "同一振動系統的頻率由 3 Hz 調成 6 Hz。週期如何改變？",
          "options": [
            "由 1/3 s 增長為 2/3 s",
            "由 3 s 增長為 6 s",
            "維持 1/3 s 不變",
            "由 1/3 s 縮短為 1/6 s"
          ],
          "answerIndex": 3,
          "rationales": [
            "頻率加倍時週期應減半，不是加倍。",
            "3 與 6 的單位是 Hz，不能直接當秒。",
            "f 改變後 T＝1/f 也必改變。",
            "T初＝1/3 s，T末＝1/6 s，故週期減半。"
          ],
          "reviewEvidence": "T初＝1/3 s，T末＝1/6 s，故週期減半。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_162_11",
          "stem": "「頻率為 2.5 Hz」的物理意義為何？",
          "options": [
            "每次振動需要 2.5 s",
            "2.5 s 內只完成一次振動",
            "平均每秒完成 2.5 次振動",
            "每分鐘完成 2.5 次振動"
          ],
          "answerIndex": 2,
          "rationales": [
            "每次所需時間為 1/2.5＝0.40 s。",
            "若 2.5 s 一次，頻率會是 0.40 Hz。",
            "1 Hz＝1 s⁻¹，因此 2.5 Hz 表示每秒 2.5 次。",
            "Hz 的時間基準是一秒，不是一分鐘。"
          ],
          "reviewEvidence": "1 Hz＝1 s⁻¹，因此 2.5 Hz 表示每秒 2.5 次。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_162_12",
          "stem": "位移—時間圖的相鄰波峰出現在 0.10 s 與 0.35 s。頻率為何？",
          "options": [
            "0.25 Hz",
            "2.5 Hz",
            "4.0 Hz",
            "10 Hz"
          ],
          "answerIndex": 2,
          "rationales": [
            "0.25 s 是週期，尚需取倒數。",
            "2.5 來自錯誤相減或倒數。",
            "T＝0.35−0.10＝0.25 s，f＝1/T＝4.0 Hz。",
            "10 Hz 只對應 0.10 s，忽略下一峰時刻。"
          ],
          "reviewEvidence": "T＝0.35−0.10＝0.25 s，f＝1/T＝4.0 Hz。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_162_01",
          "stimulusId": "PHYCHM_R4_STIM_162",
          "stem": "表中哪一個振子的頻率最大？",
          "options": [
            "甲",
            "乙",
            "丙",
            "丁"
          ],
          "answerIndex": 3,
          "rationales": [
            "甲頻率為 10/5.0＝2.0 Hz，小於丁。",
            "乙頻率為 8/8.0＝1.0 Hz。",
            "丙頻率為 6/12.0＝0.50 Hz。",
            "四者頻率依序為 2.0、1.0、0.50、3.0 Hz，故丁最大。"
          ],
          "reviewEvidence": "四者頻率依序為 2.0、1.0、0.50、3.0 Hz，故丁最大。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_162_02",
          "stimulusId": "PHYCHM_R4_STIM_162",
          "stem": "乙振子的週期為多少？",
          "options": [
            "0.125 s",
            "0.50 s",
            "8.0 s",
            "1.0 s"
          ],
          "answerIndex": 3,
          "rationales": [
            "0.125 是 1/8，卻忽略 8 次共用 8 s。",
            "乙每次不是半秒，而是 8/8＝1 s。",
            "8.0 s 是八次振動的總時間。",
            "T乙＝8.0 s/8＝1.0 s。"
          ],
          "reviewEvidence": "T乙＝8.0 s/8＝1.0 s。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "資料分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_162_03",
          "stimulusId": "PHYCHM_R4_STIM_162",
          "stem": "甲的頻率是丙的幾倍？",
          "options": [
            "2 倍",
            "4 倍",
            "3 倍",
            "5 倍"
          ],
          "answerIndex": 1,
          "rationales": [
            "甲 2.0 Hz 除以丙 0.50 Hz 不是 2。",
            "f甲/f丙＝(10/5.0)/(6/12.0)＝2.0/0.50＝4。",
            "只比較次數差會得到錯誤比例。",
            "2.0/0.50＝4，不是 5。"
          ],
          "reviewEvidence": "f甲/f丙＝(10/5.0)/(6/12.0)＝2.0/0.50＝4。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "證據評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S163",
      "title": "使用波速等於頻率乘波長的關係",
      "authorityRefs": [
        "AUTH-NATURAL-LC-KA-4-1",
        "AUTH-NATURAL-LC-KA-4-2",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-TM-4-1"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_002"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_163",
        "objective": "能掌握波速等於頻率乘波長的關係的判準與適用條件。",
        "sections": [
          {
            "title": "波速關係",
            "content": "同一波列的波速 v、頻率 f 與波長 λ 滿足 v＝fλ。頻率表示每秒送出幾個完整波，乘上每個波所占長度，就得到波形每秒前進距離。"
          },
          {
            "title": "未知量換算",
            "content": "已知 v、f 可用 λ＝v/f；已知 v、λ 可用 f＝v/λ。代入前先把公分換成公尺，兆赫換成赫茲，最後檢查單位是否為目標物理量。"
          },
          {
            "title": "介質條件",
            "content": "波速主要由介質狀態決定。在同一介質且條件不變時，波源提高頻率會使波長縮短，使 fλ 維持原波速；不能據此說頻率越高波速必越大。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_163_EX_01",
            "prompt": "一列波頻率 5.0 Hz、波長 0.80 m，波速為何？",
            "steps": [
              "寫出 v＝fλ。",
              "代入 5.0×0.80。",
              "Hz×m＝m/s。"
            ],
            "answer": "波速為 4.0 m/s。",
            "why": "每秒有五個波長通過，每個波長 0.80 m，所以波形每秒前進 4.0 m。"
          },
          {
            "id": "PHYCHM_R4_L_163_EX_02",
            "prompt": "水波速率 1.5 m/s，頻率 3.0 Hz，波長是多少？",
            "steps": [
              "改寫 λ＝v/f。",
              "計算 1.5÷3.0。",
              "以公尺表示。"
            ],
            "answer": "波長為 0.50 m。",
            "why": "在一秒送出三個完整波且總長 1.5 m，每個波所占長度是 0.50 m。"
          },
          {
            "id": "PHYCHM_R4_L_163_EX_03",
            "prompt": "同一繩上頻率由 4 Hz 增為 8 Hz，而張力不變。原波長 1.2 m，新波長為何？",
            "steps": [
              "原波速 4×1.2＝4.8 m/s。",
              "介質條件不變，波速仍 4.8 m/s。",
              "新波長 4.8÷8＝0.60 m。"
            ],
            "answer": "新波長為 0.60 m。",
            "why": "頻率加倍時，同一繩上的波速不變，因此波長必減半，兩次的 fλ 都是 4.8 m/s。"
          }
        ],
        "misconceptions": [
          {
            "belief": "計算波速時把頻率與波長相加，得到的數字雖大卻沒有速度單位。",
            "whyWrong": "頻率單位為 s⁻¹、波長單位為 m，兩者不能相加；相乘才得到 m/s。",
            "correction": "統一單位後使用 v＝fλ，並檢查結果單位必為 m/s。"
          },
          {
            "belief": "波由一種介質進入另一種介質後，仍把原來的波速與波長都保留不變。",
            "whyWrong": "頻率由波源決定並保持，但介質改變會改變波速，因此波長也隨 v/f 改變。",
            "correction": "跨介質先保留頻率，再以新介質的波速計算新波長。"
          },
          {
            "belief": "同一條繩的張力不變時，提高造波頻率會讓波速同比增加。",
            "whyWrong": "同一介質條件下波速主要由介質決定；頻率增加時，波長會縮短以維持 fλ。",
            "correction": "先判斷介質條件是否改變；若未改變，就令波速固定並反比調整波長。"
          },
          {
            "belief": "代入 40 cm 時直接把 40 當成公尺，算出的波速放大一百倍。",
            "whyWrong": "公式各量的單位必須相容；40 cm＝0.40 m。",
            "correction": "代入前先把長度換成公尺、時間換成秒，再進行乘除。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_163",
        "title": "同一繩上的四次造波",
        "body": "繩子張力與線密度保持不變，造波器依序改變頻率。攝影機量出每次穩定波列的波長，資料保留兩位有效數字。",
        "dataTable": {
          "caption": "頻率、波長與波速",
          "columns": [
            "試次",
            "頻率 f",
            "波長 λ"
          ],
          "rows": [
            [
              "甲",
              "4.0 Hz",
              "1.00 m"
            ],
            [
              "乙",
              "5.0 Hz",
              "0.80 m"
            ],
            [
              "丙",
              "8.0 Hz",
              "0.50 m"
            ],
            [
              "丁",
              "10.0 Hz",
              "0.40 m"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_002"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_163_01",
          "stem": "一列波的頻率為 5.0 Hz、波長為 0.80 m，波速為何？",
          "options": [
            "6.25 m/s",
            "0.16 m/s",
            "5.8 m/s",
            "4.0 m/s"
          ],
          "answerIndex": 3,
          "rationales": [
            "6.25 是以頻率除以波長，並非 v＝fλ。",
            "0.16 是以波長除以頻率，單位也不是波速。",
            "把 5.0 與 0.80 相加不符合波速關係。",
            "v＝fλ＝5.0×0.80＝4.0 m/s。"
          ],
          "reviewEvidence": "v＝fλ＝5.0×0.80＝4.0 m/s。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_163_02",
          "stem": "水波速度為 1.5 m/s，頻率為 3.0 Hz。波長是多少？",
          "options": [
            "4.5 m",
            "0.50 m",
            "2.0 m",
            "0.20 m"
          ],
          "answerIndex": 1,
          "rationales": [
            "相乘得到的不是待求波長；應用 v/f。",
            "λ＝v/f＝1.5/3.0＝0.50 m。",
            "1.5 與 3.0 的差不代表波長。",
            "倒數頻率是週期約 0.33 s，不是 0.20 m。"
          ],
          "reviewEvidence": "λ＝v/f＝1.5/3.0＝0.50 m。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_163_03",
          "stem": "同一繩上頻率由 4 Hz 增為 8 Hz，張力不變；原波長 1.2 m。新波長為何？",
          "options": [
            "0.60 m",
            "2.4 m",
            "1.2 m",
            "9.6 m"
          ],
          "answerIndex": 0,
          "rationales": [
            "原波速 4×1.2＝4.8 m/s；新 λ＝4.8/8＝0.60 m。",
            "頻率加倍時波長應減半，不是加倍。",
            "波速不變不代表波長不變。",
            "9.6 是原來 fλ 的波速數值誤配成長度。"
          ],
          "reviewEvidence": "原波速 4×1.2＝4.8 m/s；新 λ＝4.8/8＝0.60 m。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_163_04",
          "stem": "某波速為 12 m/s，波長為 3.0 m。頻率是多少？",
          "options": [
            "36 Hz",
            "4.0 Hz",
            "0.25 Hz",
            "9.0 Hz"
          ],
          "answerIndex": 1,
          "rationales": [
            "36 是把波速和波長相乘。",
            "f＝v/λ＝12/3.0＝4.0 Hz。",
            "0.25 是 3/12 的週期數值。",
            "相減兩個物理量不能求頻率。"
          ],
          "reviewEvidence": "f＝v/λ＝12/3.0＝4.0 Hz。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_163_05",
          "stem": "造波器頻率為 5.0 Hz，量得波長 40 cm。波速是多少？",
          "options": [
            "200 m/s",
            "8.0 m/s",
            "0.125 m/s",
            "2.0 m/s"
          ],
          "answerIndex": 3,
          "rationales": [
            "未把 40 cm 換成 0.40 m，結果放大百倍。",
            "用 40÷5 得到的數字忽略單位換算。",
            "0.125 是錯把 0.40 除以 5。",
            "40 cm＝0.40 m，v＝5.0×0.40＝2.0 m/s。"
          ],
          "reviewEvidence": "40 cm＝0.40 m，v＝5.0×0.40＝2.0 m/s。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_163_06",
          "stem": "空氣中聲速取 340 m/s，一聲波波長為 0.17 m。頻率為何？",
          "options": [
            "57.8 Hz",
            "500 Hz",
            "2000 Hz",
            "340.17 Hz"
          ],
          "answerIndex": 2,
          "rationales": [
            "340×0.17＝57.8 的運算方向錯誤。",
            "若為 500 Hz，波長應是 0.68 m。",
            "f＝340/0.17＝2000 Hz。",
            "相加波速與波長沒有物理意義。"
          ],
          "reviewEvidence": "f＝340/0.17＝2000 Hz。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_163_07",
          "stem": "同一介質中甲、乙波速相同，甲頻率是乙的三倍。兩者波長關係為何？",
          "options": [
            "甲波長是乙的三分之一",
            "甲波長是乙的三倍",
            "兩者波長相同",
            "甲波長比乙多三公尺"
          ],
          "answerIndex": 0,
          "rationales": [
            "v＝f甲λ甲＝f乙λ乙 且 f甲＝3f乙，所以 λ甲＝λ乙/3。",
            "v 固定時 f 與 λ 成反比，不是同向增加。",
            "頻率不同且波速相同，波長不能相同。",
            "倍數關係不能直接轉成固定的三公尺差。"
          ],
          "reviewEvidence": "v＝f甲λ甲＝f乙λ乙 且 f甲＝3f乙，所以 λ甲＝λ乙/3。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_163_08",
          "stem": "波進入另一介質後速度變為原來一半，波源頻率不變。波長如何改變？",
          "options": [
            "變為原來兩倍",
            "此時物體保持不變",
            "變為原來一半",
            "變為原來四分之一"
          ],
          "answerIndex": 2,
          "rationales": [
            "頻率固定時波長與波速同方向改變。",
            "跨介質後波速已改變，λ＝v/f 也會改變。",
            "λ′/λ＝(v′/f)/(v/f)＝v′/v＝1/2。",
            "波速只減半，沒有平方關係。"
          ],
          "reviewEvidence": "λ′/λ＝(v′/f)/(v/f)＝v′/v＝1/2。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_163_09",
          "stem": "已知一列波每秒通過 7 個完整波，且每個波長 0.30 m。可直接求得哪項量？",
          "options": [
            "此波的週期 7 s",
            "此波的振幅 0.30 m",
            "介質密度 2.1 kg/m³",
            "波速 2.1 m/s"
          ],
          "answerIndex": 3,
          "rationales": [
            "每秒七次表示週期 1/7 s。",
            "0.30 m 是波長，不是垂直振幅。",
            "頻率與波長不足以求介質密度。",
            "f＝7 Hz、λ＝0.30 m，所以 v＝2.1 m/s。"
          ],
          "reviewEvidence": "f＝7 Hz、λ＝0.30 m，所以 v＝2.1 m/s。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_163_10",
          "stem": "關係式 v＝fλ 的單位檢查何者正確？",
          "options": [
            "Hz×m 可化為 m²",
            "m/s 除以 Hz 可化為 1/m",
            "Hz×m 可化為 m/s",
            "m/s 乘以 m 可化為 Hz"
          ],
          "answerIndex": 2,
          "rationales": [
            "Hz 是 s⁻¹，相乘長度不會得到面積。",
            "(m/s)/(s⁻¹)＝m，並非 1/m。",
            "Hz＝s⁻¹，因此 Hz×m＝m/s。",
            "速度乘長度的單位是 m²/s，不是 Hz。"
          ],
          "reviewEvidence": "Hz＝s⁻¹，因此 Hz×m＝m/s。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_163_11",
          "stem": "兩秒內有 6 個完整波通過某點，波長為 0.50 m。波速為何？",
          "options": [
            "3.0 m/s",
            "6.5 m/s",
            "0.17 m/s",
            "1.5 m/s"
          ],
          "answerIndex": 3,
          "rationales": [
            "頻率是 3 Hz，不是直接用總次數 6 Hz。",
            "把頻率與波長相加不能得到波速。",
            "0.17 是用波長除以頻率。",
            "f＝6/2＝3 Hz，v＝3×0.50＝1.5 m/s。"
          ],
          "reviewEvidence": "f＝6/2＝3 Hz，v＝3×0.50＝1.5 m/s。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_163_12",
          "stem": "聲波頻率為 300 Hz、波長為 1.1 m。以有效數字估算波速為何？",
          "options": [
            "330 m/s",
            "273 m/s",
            "301.1 m/s",
            "0.0037 m/s"
          ],
          "answerIndex": 0,
          "rationales": [
            "v＝300×1.1＝330 m/s。",
            "273 來自不相干的相減或換算。",
            "把頻率與波長相加不符合 v＝fλ。",
            "1.1/300 的結果是錯誤的除法方向。"
          ],
          "reviewEvidence": "v＝300×1.1＝330 m/s。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_163_01",
          "stimulusId": "PHYCHM_R4_STIM_163",
          "stem": "由甲試次計算繩波速度為何？",
          "options": [
            "4.0 m/s",
            "0.25 m/s",
            "5.0 m/s",
            "10 m/s"
          ],
          "answerIndex": 0,
          "rationales": [
            "甲的 v＝4.0 Hz×1.00 m＝4.0 m/s。",
            "1.00/4.0＝0.25 是週期尺度，不是波速。",
            "5.0 是乙試次的頻率，未乘波長。",
            "10.0 是丁試次的頻率，也不是速度。"
          ],
          "reviewEvidence": "甲的 v＝4.0 Hz×1.00 m＝4.0 m/s。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_163_02",
          "stimulusId": "PHYCHM_R4_STIM_163",
          "stem": "四次資料最支持哪項敘述？",
          "options": [
            "此波的頻率越大，波速越大",
            "四次波速皆約 4.0 m/s",
            "此波的頻率越大，波長越長",
            "此波的波長與頻率同時增加"
          ],
          "answerIndex": 1,
          "rationales": [
            "逐列計算 fλ 都為 4.0，波速沒有增加。",
            "甲至丁的 fλ 分別皆為 4.0 m/s。",
            "表中頻率增加時波長由 1.00 降至 0.40 m。",
            "兩量呈反向變化，不是同時增加。"
          ],
          "reviewEvidence": "甲至丁的 fλ 分別皆為 4.0 m/s。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "資料分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_163_03",
          "stimulusId": "PHYCHM_R4_STIM_163",
          "stem": "若同一繩上頻率調為 20 Hz，依表中趨勢波長應約為何？",
          "options": [
            "0.10 m",
            "0.20 m",
            "0.40 m",
            "5.0 m"
          ],
          "answerIndex": 1,
          "rationales": [
            "0.10 m 對應波速 2.0 m/s，與表中 4.0 不符。",
            "同繩波速約 4.0 m/s，λ＝4.0/20＝0.20 m。",
            "0.40 m 是 10 Hz 時的波長；頻率加倍後應減半。",
            "5.0 m 會使波速成為 100 m/s。"
          ],
          "reviewEvidence": "同繩波速約 4.0 m/s，λ＝4.0/20＝0.20 m。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "證據評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S164",
      "title": "區分橫波與縱波的振動方向",
      "authorityRefs": [
        "AUTH-NATURAL-LC-KA-4-1",
        "AUTH-NATURAL-LC-KA-4-2",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-TM-4-1"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_002"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_164",
        "objective": "能掌握橫波與縱波的振動方向的判準與適用條件。",
        "sections": [
          {
            "title": "分類標準",
            "content": "橫波的介質振動方向與波傳方向互相垂直；縱波的振動方向與波傳方向平行。分類時要同時找出擾動前進方向和介質粒子的往復方向。"
          },
          {
            "title": "典型模型",
            "content": "拉直繩子上下振動時，波沿繩前進而繩粒子上下動，是橫波。彈簧沿長度方向推拉產生疏密區，線圈與波都沿彈簧方向，是縱波。"
          },
          {
            "title": "模型限制",
            "content": "紙上畫成正弦曲線不代表實際粒子一定上下移動；聲波常用曲線表示壓力變化，但空氣粒子是沿傳播方向前後振動。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_164_EX_01",
            "prompt": "繩波向右傳，繩上標記點上下振動。它屬於哪一類？",
            "steps": [
              "波向右，傳播方向水平。",
              "粒子上下，振動方向垂直。",
              "兩方向互相垂直。"
            ],
            "answer": "屬於橫波。",
            "why": "分類依振動方向與傳播方向的相對關係；水平與鉛直互相垂直，因此是橫波。"
          },
          {
            "id": "PHYCHM_R4_L_164_EX_02",
            "prompt": "彈簧上的壓縮區向左移，線圈本身也左右振動。如何分類？",
            "steps": [
              "壓縮區向左表示波沿彈簧傳。",
              "線圈左右往復也沿彈簧方向。",
              "振動與傳播方向平行。"
            ],
            "answer": "屬於縱波。",
            "why": "線圈不隨壓縮區一路向左，而是在原處前後振動；兩方向平行符合縱波定義。"
          },
          {
            "id": "PHYCHM_R4_L_164_EX_03",
            "prompt": "聲波圖畫成上下起伏曲線，能否據此判定空氣上下振動？",
            "steps": [
              "辨認曲線通常表示壓力或密度。",
              "查明空氣粒子實際沿聲波方向前後振動。",
              "圖形外觀不是分類依據。"
            ],
            "answer": "不能；空氣中的聲波仍是縱波。",
            "why": "曲線只是把壓力隨位置的變化畫出來，並不是空氣粒子的實際運動軌跡。"
          }
        ],
        "misconceptions": [
          {
            "belief": "只要波形畫成上下起伏的曲線，就把介質粒子判成上下振動的橫波。",
            "whyWrong": "曲線可能只是壓力或位移對位置的圖，不一定是粒子的實際運動路徑。",
            "correction": "另找波傳方向與粒子振動方向；垂直才是橫波，平行才是縱波。"
          },
          {
            "belief": "縱波的粒子會跟著壓縮區一路前進，所以粒子沒有往復運動。",
            "whyWrong": "壓縮區向前傳播，但各線圈只在平衡位置附近沿傳播方向前後振動。",
            "correction": "分開追蹤波形與單一標記粒子，判斷兩者方向關係而非是否遠移。"
          },
          {
            "belief": "波向左傳、粒子向右振動時方向相反，因此誤判為橫波。",
            "whyWrong": "向左與向右仍在同一直線上；平行或反平行都屬縱波的方向關係。",
            "correction": "比較直線是否平行，不以箭頭是否同向作分類。"
          },
          {
            "belief": "看到疏部與密部就認為介質只被壓縮、不會恢復，忽略粒子的週期振動。",
            "whyWrong": "疏密區是不同位置粒子位移與間距的瞬時分布，會隨粒子往復而傳播。",
            "correction": "以多時刻標記點位置檢查粒子在原平衡位置兩側來回。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_164",
        "title": "四種波動觀察",
        "body": "學生以箭頭分別記錄擾動前進方向與介質標記點的往復方向。方向相同或相反都視為在同一直線上。",
        "dataTable": {
          "caption": "傳播與振動方向",
          "columns": [
            "觀察",
            "波傳方向",
            "粒子振動方向"
          ],
          "rows": [
            [
              "甲繩波",
              "向右",
              "上下"
            ],
            [
              "乙彈簧波",
              "向左",
              "左右"
            ],
            [
              "丙水面小振幅波",
              "向前",
              "上下"
            ],
            [
              "丁空氣聲波",
              "向右",
              "左右"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_002"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_164_01",
          "stem": "繩波向右傳播，繩上標記點只做上下振動。此波如何分類？",
          "options": [
            "橫波，因振動方向與傳播方向垂直",
            "縱波，因波向右傳",
            "橫波，因標記點會隨波向右移",
            "縱波，因繩子是固體"
          ],
          "answerIndex": 0,
          "rationales": [
            "水平傳播與鉛直振動互相垂直，所以是橫波。",
            "傳播方向本身不能決定分類，須與粒子振動方向比較。",
            "題目說標記點上下振動，並未隨波向右遠移。",
            "介質狀態不是橫縱波的分類標準。"
          ],
          "reviewEvidence": "水平傳播與鉛直振動互相垂直，所以是橫波。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_164_02",
          "stem": "彈簧的壓縮區向左移動，而線圈沿彈簧方向左右振動。此波屬於哪一類？",
          "options": [
            "橫波，因傳播方向向左",
            "縱波，因線圈跟著壓縮區遠移",
            "橫波，因壓縮區可畫成曲線",
            "縱波，因線圈振動與傳播在同一直線"
          ],
          "answerIndex": 3,
          "rationales": [
            "向左只是傳播箭頭，不能單獨判為橫波。",
            "線圈在原處附近往復，不隨壓縮區一路移走。",
            "圖的畫法不取代實際振動方向。",
            "線圈左右振動與波向左傳皆沿彈簧軸線，故為縱波。"
          ],
          "reviewEvidence": "線圈左右振動與波向左傳皆沿彈簧軸線，故為縱波。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_164_03",
          "stem": "聲壓隨位置的圖畫成正弦曲線。對空氣粒子運動的判斷何者正確？",
          "options": [
            "曲線上下起伏，所以粒子上下移動",
            "只要是正弦圖就一定是橫波",
            "聲波沒有粒子振動，無法分類",
            "仍須依粒子前後振動判為縱波"
          ],
          "answerIndex": 3,
          "rationales": [
            "曲線縱軸是聲壓，不是空氣粒子的高度。",
            "正弦形是表示週期變化的圖形，不是分類依據。",
            "聲波由空氣粒子的壓縮與疏鬆傳遞，可依振動方向分類。",
            "空氣粒子沿聲波傳播方向前後振動，兩方向平行。"
          ],
          "reviewEvidence": "空氣粒子沿聲波傳播方向前後振動，兩方向平行。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_164_04",
          "stem": "波向北傳，介質粒子沿東西方向往復。兩方向的關係與分類為何？",
          "options": [
            "互相平行，屬縱波",
            "方向相反，屬縱波",
            "互相垂直，屬橫波",
            "無法分類，因沒有波速"
          ],
          "answerIndex": 2,
          "rationales": [
            "南北與東西互相垂直，不是平行。",
            "東西振動不與向北傳播反向，而是垂直。",
            "北向傳播與東西振動夾角 90°，符合橫波。",
            "分類只需兩個方向，不需要波速。"
          ],
          "reviewEvidence": "北向傳播與東西振動夾角 90°，符合橫波。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_164_05",
          "stem": "一列波向下傳播，粒子在水平方向左右振動。此波屬於哪一類？",
          "options": [
            "縱波",
            "橫波",
            "無法分類",
            "同時是橫波與縱波"
          ],
          "answerIndex": 1,
          "rationales": [
            "向下與水平方向垂直，不符合縱波。",
            "鉛直傳播與水平振動互相垂直。",
            "題目已同時給傳播和振動方向，資料足以分類。",
            "在此理想模型中方向關係單一，不會同時平行又垂直。"
          ],
          "reviewEvidence": "鉛直傳播與水平振動互相垂直。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_164_06",
          "stem": "彈簧波向右傳，某線圈先向右再向左越過平衡位置。這項觀察最支持哪個描述？",
          "options": [
            "線圈隨波永久移到右端",
            "線圈垂直彈簧振動，形成橫波",
            "線圈沿傳播方向往復，形成縱波",
            "線圈不動，只有影像移動"
          ],
          "answerIndex": 2,
          "rationales": [
            "往復越過平衡位置不等於永久運輸。",
            "題目描述的是左右運動，不是垂直彈簧軸線。",
            "粒子左右振動與向右傳播平行，且粒子做往復運動。",
            "實際線圈位置隨時間改變，並非完全不動。"
          ],
          "reviewEvidence": "粒子左右振動與向右傳播平行，且粒子做往復運動。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_164_07",
          "stem": "波沿 x 軸正向傳播，介質粒子的位移也只沿 x 軸。此波如何分類？",
          "options": [
            "橫波",
            "縱波",
            "無法分類",
            "只可能是光波"
          ],
          "answerIndex": 1,
          "rationales": [
            "兩方向同軸而非垂直。",
            "振動方向與傳播方向平行，故為縱波。",
            "傳播軸與位移軸都已給定，足以分類。",
            "機械縱波也可符合此方向關係。"
          ],
          "reviewEvidence": "振動方向與傳播方向平行，故為縱波。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_164_08",
          "stem": "波沿 x 軸負向傳播，粒子只沿 y 軸振動。此波如何分類？",
          "options": [
            "縱波",
            "橫波",
            "方向相反所以無波",
            "需知道頻率才能分類"
          ],
          "answerIndex": 1,
          "rationales": [
            "x 軸與 y 軸垂直，不符合縱波。",
            "−x 傳播方向與 y 振動方向夾角 90°。",
            "負 x 與 y 仍是有效且垂直的兩方向。",
            "橫縱分類與頻率大小無關。"
          ],
          "reviewEvidence": "−x 傳播方向與 y 振動方向夾角 90°。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_164_09",
          "stem": "同一縱波中，一個粒子當下向左移，而波形向右傳。為何仍是縱波？",
          "options": [
            "兩個方向雖相反但位在同一直線",
            "粒子與波必須同向才是縱波",
            "粒子向左表示波也立刻改向",
            "任何相反方向都屬橫波"
          ],
          "answerIndex": 0,
          "rationales": [
            "粒子運動與波傳都沿同一軸線，反平行也符合縱波。",
            "縱波要求平行，不要求瞬間箭頭同向。",
            "單一粒子的瞬時速度不決定整列波的傳播方向。",
            "相反方向的夾角是 180°，仍屬平行而非垂直。"
          ],
          "reviewEvidence": "粒子運動與波傳都沿同一軸線，反平行也符合縱波。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_164_10",
          "stem": "要判斷一張聲波曲線代表橫波或縱波，最需要補充哪項資料？",
          "options": [
            "曲線使用的顏色",
            "聲音是否悅耳",
            "空氣粒子的實際振動方向",
            "紙張的長與寬"
          ],
          "answerIndex": 2,
          "rationales": [
            "圖線顏色與粒子運動方向無關。",
            "主觀聽感不提供傳播與振動的幾何關係。",
            "必須把粒子振動方向和聲波傳播方向作比較。",
            "紙張尺寸只改變呈現比例。"
          ],
          "reviewEvidence": "必須把粒子振動方向和聲波傳播方向作比較。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_164_11",
          "stem": "下列哪個現象最能顯示彈簧縱波中的線圈沒有隨波整體前進？",
          "options": [
            "壓縮區逐漸移到彈簧另一端",
            "標記線圈在固定中心兩側反覆通過",
            "不同線圈先後開始振動",
            "彈簧上可看到疏部和密部"
          ],
          "answerIndex": 1,
          "rationales": [
            "壓縮區前進描述波形傳播，不能追蹤單一線圈。",
            "同一標記線圈多次回到固定中心，顯示它只在平衡位置附近往復。",
            "先後振動顯示傳播延遲，但未直接顯示平均位置。",
            "疏密分布可確認縱波，卻未證明某線圈沒有遠移。"
          ],
          "reviewEvidence": "同一標記線圈多次回到固定中心，顯示它只在平衡位置附近往復。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_164_12",
          "stem": "某機械波的粒子振動方向與波傳方向夾角為 0° 或 180°。應判為何種波？",
          "options": [
            "橫波",
            "兩角分別代表兩種波",
            "沒有介質的波",
            "縱波"
          ],
          "answerIndex": 3,
          "rationales": [
            "橫波要求夾角約 90°。",
            "0° 與 180° 都表示兩方向共線。",
            "題目已稱機械波，且方向關係不代表沒有介質。",
            "共線方向屬平行或反平行，符合縱波。"
          ],
          "reviewEvidence": "共線方向屬平行或反平行，符合縱波。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_164_01",
          "stimulusId": "PHYCHM_R4_STIM_164",
          "stem": "表中哪些觀察可依方向關係判為橫波？",
          "options": [
            "甲、丙",
            "只有甲",
            "乙、丁",
            "四者都是"
          ],
          "answerIndex": 0,
          "rationales": [
            "甲與丙的傳播方向皆和粒子上下振動垂直。",
            "丙也是向前傳、上下振動，兩方向垂直。",
            "乙與丁的左右振動和左右傳播共線。",
            "乙、丁屬縱波，不能四者全選。"
          ],
          "reviewEvidence": "甲與丙的傳播方向皆和粒子上下振動垂直。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_164_02",
          "stimulusId": "PHYCHM_R4_STIM_164",
          "stem": "乙彈簧波的分類與理由何者正確？",
          "options": [
            "縱波，因為振動與傳播在同一直線",
            "橫波，因為向左傳",
            "橫波，因為有疏密區",
            "縱波，因為速度較慢"
          ],
          "answerIndex": 0,
          "rationales": [
            "乙的波向左傳、粒子左右振動，兩者沿同一直線。",
            "向左只是傳播方向，不能推出橫波。",
            "疏密區通常支持縱波，不支持橫波。",
            "波速快慢不是分類條件。"
          ],
          "reviewEvidence": "乙的波向左傳、粒子左右振動，兩者沿同一直線。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "資料分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_164_03",
          "stimulusId": "PHYCHM_R4_STIM_164",
          "stem": "若只看到聲波被畫成上下曲線，還需哪項資料才能分類？",
          "options": [
            "曲線顏色",
            "紙張大小",
            "空氣粒子的實際振動方向",
            "聲音響度"
          ],
          "answerIndex": 2,
          "rationales": [
            "顏色不表示粒子振動方向。",
            "紙張大小只影響圖的比例。",
            "聲波的圖線可表示聲壓；分類仍需粒子振動與傳播方向。",
            "響度主要與振幅相關，不能區分橫縱波。"
          ],
          "reviewEvidence": "聲波的圖線可表示聲壓；分類仍需粒子振動與傳播方向。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "證據評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S165",
      "title": "由波形圖比較振幅頻率與波長",
      "authorityRefs": [
        "AUTH-NATURAL-LC-KA-4-1",
        "AUTH-NATURAL-LC-KA-4-2",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-TM-4-1"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_002"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_165",
        "objective": "能掌握波形圖比較振幅頻率與波長的判準與適用條件。",
        "sections": [
          {
            "title": "先讀座標軸",
            "content": "橫軸是位置時，曲線是某一時刻的空間波形，可比較振幅與波長；橫軸是時間時，曲線描述某一位置的振動，可比較振幅與週期。"
          },
          {
            "title": "量取方式",
            "content": "振幅由縱軸零線到極值量取。位置圖上相鄰同相位點的橫向距離是波長；時間圖上相鄰同相位時刻的間隔則是週期。"
          },
          {
            "title": "不能直接推出的量",
            "content": "單張位置波形圖沒有時間尺度，不能只數波峰就得到頻率。若另知波速，可由 f＝v/λ 換算；若只有時間圖，也需波速才能求波長。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_165_EX_01",
            "prompt": "位置波形甲的振幅 2 cm、波長 0.5 m；乙的振幅 4 cm、波長 1.0 m。哪個振幅較大、哪個波長較長？",
            "steps": [
              "兩圖縱軸單位同為 cm。",
              "4 cm 大於 2 cm。",
              "1.0 m 大於 0.5 m。"
            ],
            "answer": "乙的振幅較大，波長也較長。",
            "why": "振幅比較縱向極值，波長比較同相位點的水平距離；兩項都需先確認座標比例一致。"
          },
          {
            "id": "PHYCHM_R4_L_165_EX_02",
            "prompt": "時間圖中相鄰兩個波峰出現在 0.2 s 與 0.7 s。可讀得哪個量？",
            "steps": [
              "確認橫軸為時間。",
              "計算相鄰同相位時刻差 0.7−0.2。",
              "將結果解讀為週期。"
            ],
            "answer": "週期為 0.5 s，頻率為 2.0 Hz。",
            "why": "時間圖的峰峰間隔是週期；再取倒數可得頻率，但不能把 0.5 s 說成波長。"
          },
          {
            "id": "PHYCHM_R4_L_165_EX_03",
            "prompt": "兩張圖看起來波峰數不同，但橫軸範圍也不同。能直接說波峰較多者頻率較高嗎？",
            "steps": [
              "比較兩圖橫軸代表量與範圍。",
              "若為位置圖，波峰數反映顯示範圍與波長。",
              "頻率還需要時間資訊。"
            ],
            "answer": "不能直接比較頻率。",
            "why": "同一張紙上的波峰數受橫軸跨度與比例影響；沒有共同時間尺度時，無法據此判斷每秒振動次數。"
          }
        ],
        "misconceptions": [
          {
            "belief": "只看圖上波峰數較多，就斷定該波頻率較高，沒有檢查橫軸是位置還是時間。",
            "whyWrong": "位置圖的波峰數反映圖示範圍與波長；只有共同時間尺度才能直接比較頻率。",
            "correction": "先讀橫軸；位置圖比較波長，時間圖以週期倒數比較頻率。"
          },
          {
            "belief": "把時間圖相鄰波峰的 0.4 s 間隔寫成波長 0.4 m。",
            "whyWrong": "秒是時間單位，峰峰間隔在時間圖表示週期；缺少波速不能換成公尺。",
            "correction": "將 0.4 s 記為週期，先求頻率 2.5 Hz；另有波速時才求波長。"
          },
          {
            "belief": "用波峰到波谷的全高比較振幅，導致每張圖的振幅都讀成兩倍。",
            "whyWrong": "振幅是平衡線到單一極端位置的距離，全高含上下兩個振幅。",
            "correction": "找出縱軸零線，以零線到波峰或波谷的絕對距離讀振幅。"
          },
          {
            "belief": "兩張曲線外觀看起來一樣高，就認為振幅相同，即使縱軸比例尺不同。",
            "whyWrong": "圖形在紙面上的高度受比例尺影響，必須用座標刻度換成物理量。",
            "correction": "先確認兩圖縱軸單位與每格數值，再比較實際極端位移。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_165",
        "title": "四張波形圖的讀值摘要",
        "body": "四張圖的縱軸都是位移，橫軸與讀得的間隔列於表中。位置圖的間隔取相鄰波峰距離；時間圖的間隔取相鄰波峰時刻差。",
        "dataTable": {
          "caption": "波形圖座標與量測",
          "columns": [
            "圖",
            "橫軸",
            "讀得間隔"
          ],
          "rows": [
            [
              "甲",
              "位置 x（m）",
              "0.80 m"
            ],
            [
              "乙",
              "位置 x（m）",
              "1.20 m"
            ],
            [
              "丙",
              "時間 t（s）",
              "0.40 s"
            ],
            [
              "丁",
              "時間 t（s）",
              "0.25 s"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_002"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_165_01",
          "stem": "位置波形甲的振幅 2 cm、波長 0.5 m；乙的振幅 4 cm、波長 1.0 m。何者正確？",
          "options": [
            "乙的振幅較大，波長也較長",
            "甲振幅較大，乙波長較長",
            "乙振幅較大，甲波長較長",
            "兩者振幅與波長都相同"
          ],
          "answerIndex": 0,
          "rationales": [
            "A乙/A甲＝2，且 λ乙/λ甲＝2。",
            "2 cm 小於 4 cm，甲振幅不較大。",
            "0.5 m 小於 1.0 m，甲波長不較長。",
            "兩組數值皆不同。"
          ],
          "reviewEvidence": "A乙/A甲＝2，且 λ乙/λ甲＝2。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_165_02",
          "stem": "某點位移—時間圖的相鄰波峰在 0.20 s 與 0.70 s。週期與頻率為何？",
          "options": [
            "週期 0.50 s，頻率 2.0 Hz",
            "此波的週期 0.90 s，頻率 1.1 Hz",
            "此波的波長 0.50 m，頻率 2.0 Hz",
            "此波的週期 0.50 s，頻率 0.50 Hz"
          ],
          "answerIndex": 0,
          "rationales": [
            "T＝0.70−0.20＝0.50 s，f＝1/T＝2.0 Hz。",
            "週期是時刻差 0.70−0.20，不是時刻和。",
            "時間圖直接給週期，沒有波速不能稱此間隔為波長。",
            "頻率是週期倒數，不等於週期數值。"
          ],
          "reviewEvidence": "T＝0.70−0.20＝0.50 s，f＝1/T＝2.0 Hz。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_165_03",
          "stem": "兩張位置波形圖顯示的波峰數不同，橫軸範圍也不同。可否直接以波峰數比較頻率？",
          "options": [
            "可以；波峰多者頻率一定高",
            "可以；波峰少者振幅一定大",
            "不可；因位置圖不能讀波長",
            "不可；位置圖且範圍不同，沒有共同時間尺度"
          ],
          "answerIndex": 3,
          "rationales": [
            "峰數受顯示空間範圍與波長共同影響。",
            "波峰數也不能決定振幅，振幅要讀縱軸。",
            "位置圖可由相鄰同相位點讀波長。",
            "單張位置圖不含時間，不能只由峰數求每秒振動次數。"
          ],
          "reviewEvidence": "單張位置圖不含時間，不能只由峰數求每秒振動次數。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_165_04",
          "stem": "位置波形圖相鄰波峰位於 x＝0.5 m 與 x＝2.0 m。圖上波長為何？",
          "options": [
            "1.5 m",
            "2.5 m",
            "0.75 m",
            "2.0 m"
          ],
          "answerIndex": 0,
          "rationales": [
            "λ＝2.0−0.5＝1.5 m。",
            "相加座標不是兩峰間距。",
            "相鄰波峰已隔一個完整波長，不需除以二。",
            "2.0 m 是第二峰的位置。"
          ],
          "reviewEvidence": "λ＝2.0−0.5＝1.5 m。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_165_05",
          "stem": "位移—時間圖最高為 +3 cm、最低為 −3 cm，每 0.40 s 重複。可讀得哪些量？",
          "options": [
            "此波的振幅 6 cm、波長 0.40 m",
            "此波的振幅 3 cm、波長 0.40 m",
            "此波的振幅 6 cm、頻率 0.40 Hz",
            "振幅 3 cm、週期 0.40 s"
          ],
          "answerIndex": 3,
          "rationales": [
            "6 cm 是峰谷全高，0.40 s 也不是波長。",
            "時間間隔是週期；沒有波速不能求波長。",
            "振幅應為 3 cm，頻率則為 2.5 Hz。",
            "A＝3 cm，T＝0.40 s；圖中未提供 λ。"
          ],
          "reviewEvidence": "A＝3 cm，T＝0.40 s；圖中未提供 λ。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_165_06",
          "stem": "只有一張位置波形圖，讀得波長 0.80 m，但沒有波速。哪項仍無法確定？",
          "options": [
            "此波的波長",
            "頻率",
            "波峰座標",
            "此波的振幅"
          ],
          "answerIndex": 1,
          "rationales": [
            "題目已由相鄰波峰讀得 0.80 m。",
            "缺少時間資訊與波速，無法由 f＝v/λ 求頻率。",
            "位置圖可直接讀出各波峰所在位置。",
            "若有縱軸刻度即可讀平衡線到極值。"
          ],
          "reviewEvidence": "缺少時間資訊與波速，無法由 f＝v/λ 求頻率。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_165_07",
          "stem": "甲、乙位移—時間圖尺度相同，週期分別 0.20 s 與 0.50 s。哪個頻率較高？",
          "options": [
            "乙",
            "相同",
            "甲",
            "需知道振幅"
          ],
          "answerIndex": 2,
          "rationales": [
            "乙頻率為 2 Hz，小於甲的 5 Hz。",
            "週期不同，所以頻率倒數也不同。",
            "f甲＝5 Hz，f乙＝2 Hz，故甲較高。",
            "頻率比較不需要振幅。"
          ],
          "reviewEvidence": "f甲＝5 Hz，f乙＝2 Hz，故甲較高。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_165_08",
          "stem": "兩張位置波形圖的相鄰波峰間距都為 1.2 m，但極端位移分別為 2 cm 與 5 cm。可得何結論？",
          "options": [
            "第二張波長較長",
            "第一張頻率一定較高",
            "兩張振幅相同",
            "波長相同，第二張振幅較大"
          ],
          "answerIndex": 3,
          "rationales": [
            "峰峰間距相同即波長相同。",
            "位置快照且未知波速，不能斷定頻率。",
            "極端位移 2 cm 與 5 cm 不相同。",
            "兩圖 λ＝1.2 m，振幅分別 2 cm、5 cm。"
          ],
          "reviewEvidence": "兩圖 λ＝1.2 m，振幅分別 2 cm、5 cm。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_165_09",
          "stem": "甲圖每格縱軸 1 cm、波峰高 4 格；乙圖每格 2 cm、波峰高 3 格。哪張振幅較大？",
          "options": [
            "甲，振幅 4 cm",
            "甲，振幅 8 cm",
            "兩者都是 4 格所以相同",
            "乙，振幅 6 cm"
          ],
          "answerIndex": 3,
          "rationales": [
            "甲只有 4×1＝4 cm，小於乙的 6 cm。",
            "甲每格 1 cm，不能按 2 cm 計。",
            "乙雖格數少，比例尺較大。",
            "A甲＝4×1＝4 cm，A乙＝3×2＝6 cm。"
          ],
          "reviewEvidence": "A甲＝4×1＝4 cm，A乙＝3×2＝6 cm。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_165_10",
          "stem": "位置波形圖讀得 λ＝0.75 m，另知波速 3.0 m/s。頻率為何？",
          "options": [
            "2.25 Hz",
            "0.25 Hz",
            "4.0 Hz",
            "3.75 Hz"
          ],
          "answerIndex": 2,
          "rationales": [
            "2.25 是 vλ，並非 v/λ。",
            "0.25 s 是週期 λ/v。",
            "f＝v/λ＝3.0/0.75＝4.0 Hz。",
            "相加 v 與 λ 不具意義。"
          ],
          "reviewEvidence": "f＝v/λ＝3.0/0.75＝4.0 Hz。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_165_11",
          "stem": "讀波形圖時，第一個應確認的資訊是什麼？",
          "options": [
            "曲線使用哪種顏色",
            "橫、縱軸所代表的量與單位",
            "波峰畫得是否圓滑",
            "圖框面積大小"
          ],
          "answerIndex": 1,
          "rationales": [
            "顏色不決定物理量。",
            "座標軸決定橫向間隔是位置或時間，也決定縱向讀值的單位。",
            "線條外觀不取代座標定義。",
            "圖框大小不能提供比例尺。"
          ],
          "reviewEvidence": "座標軸決定橫向間隔是位置或時間，也決定縱向讀值的單位。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_165_12",
          "stem": "一張圖的橫軸標示 x（m），相鄰波谷相距 0.90 格且每格 2.0 m。波長為何？",
          "options": [
            "0.45 m",
            "2.9 m",
            "1.8 m",
            "0.90 s"
          ],
          "answerIndex": 2,
          "rationales": [
            "再除以二不符合相鄰波谷即一個波長。",
            "格數與每格長度應相乘，不是相加。",
            "λ＝0.90×2.0 m＝1.8 m。",
            "橫軸是位置，單位不能寫秒。"
          ],
          "reviewEvidence": "λ＝0.90×2.0 m＝1.8 m。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_165_01",
          "stimulusId": "PHYCHM_R4_STIM_165",
          "stem": "哪兩張圖的「讀得間隔」可直接解讀為波長？",
          "options": [
            "甲、丙",
            "甲、乙",
            "乙、丁",
            "丙、丁"
          ],
          "answerIndex": 1,
          "rationales": [
            "丙橫軸是時間，其間隔是週期。",
            "甲、乙橫軸皆為位置 x，相鄰波峰距離就是波長。",
            "丁也是時間圖，不能把 0.25 s 當波長。",
            "丙、丁兩者都只提供時間間隔。"
          ],
          "reviewEvidence": "甲、乙橫軸皆為位置 x，相鄰波峰距離就是波長。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_165_02",
          "stimulusId": "PHYCHM_R4_STIM_165",
          "stem": "丙圖所表示振動的頻率是多少？",
          "options": [
            "0.40 Hz",
            "2.5 Hz",
            "1.6 Hz",
            "4.0 Hz"
          ],
          "answerIndex": 1,
          "rationales": [
            "0.40 s 是週期，不是頻率。",
            "丙圖 T＝0.40 s，f＝1/0.40＝2.5 Hz。",
            "1.6 不是 0.40 的倒數。",
            "4.0 Hz 對應週期 0.25 s，屬丁圖。"
          ],
          "reviewEvidence": "丙圖 T＝0.40 s，f＝1/0.40＝2.5 Hz。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "資料分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_165_03",
          "stimulusId": "PHYCHM_R4_STIM_165",
          "stem": "比較甲、乙可得到哪項結論？",
          "options": [
            "甲頻率一定較高",
            "乙振幅一定較大",
            "乙的波長較長",
            "甲波速一定較快"
          ],
          "answerIndex": 2,
          "rationales": [
            "位置圖未給時間或波速，不能比較頻率。",
            "表中未列縱向極端位移，不能比較振幅。",
            "甲 λ＝0.80 m、乙 λ＝1.20 m，所以乙較長。",
            "只有波長資料不能決定波速。"
          ],
          "reviewEvidence": "甲 λ＝0.80 m、乙 λ＝1.20 m，所以乙較長。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "證據評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S166",
      "title": "區分波傳遞能量與介質整體移動",
      "authorityRefs": [
        "AUTH-NATURAL-LC-KA-4-1",
        "AUTH-NATURAL-LC-KA-4-2",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-TM-4-1"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_002"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_166",
        "objective": "能掌握波傳遞能量與介質整體移動的判準與適用條件。",
        "sections": [
          {
            "title": "傳遞的是擾動",
            "content": "機械波向前傳遞能量與擾動形狀，介質粒子通常只在各自平衡位置附近往復。粒子的瞬時速度可與波傳方向不同，平均位置不會跟著波前遠移。"
          },
          {
            "title": "標記點觀察",
            "content": "在繩上畫一個色點，波峰通過時色點上升再下降；波峰繼續向前，但色點回到原來附近。水面浮標也會上下或小範圍運動，不隨每個波峰漂到岸邊。"
          },
          {
            "title": "適用邊界",
            "content": "實際水面可能同時有水流或風造成整體漂移，必須把流動與波動分開。看到物體移動不代表那段位移全由波造成。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_166_EX_01",
            "prompt": "繩波向右傳，紅色標記點先上升、再下降回平衡位置。紅點是否隨波峰向右移？",
            "steps": [
              "追蹤同一個紅點的位置。",
              "紅點水平座標近似不變。",
              "波峰位置卻持續向右。"
            ],
            "answer": "紅點不隨波峰向右遠移。",
            "why": "波形由相鄰繩段依序振動形成，能量向右傳；單一繩粒子主要上下往復。"
          },
          {
            "id": "PHYCHM_R4_L_166_EX_02",
            "prompt": "浮標在無明顯水流的水槽中隨水波上下起伏，十個波峰通過後仍在原處附近。這支持什麼模型？",
            "steps": [
              "排除穩定水流。",
              "比較浮標平均位置。",
              "區分波前移動與介質運動。"
            ],
            "answer": "水波傳遞擾動，水面粒子沒有隨波整體前進。",
            "why": "浮標的上下運動顯示局部粒子受擾動；平均位置近似不變，說明傳到遠處的是波的能量。"
          },
          {
            "id": "PHYCHM_R4_L_166_EX_03",
            "prompt": "河面浮葉一面起伏一面向下游移動，能否把下游位移全歸因於水波？",
            "steps": [
              "辨認河水本身有流速。",
              "起伏是波動，平均下游移動是水流。",
              "兩種運動可同時存在。"
            ],
            "answer": "不能；需分開考慮水流與波動。",
            "why": "波動模型不否認介質可另有整體流動；浮葉的下游漂移提供的是水流資訊。"
          }
        ],
        "misconceptions": [
          {
            "belief": "看到波峰向右移，就認為形成波峰的同一批介質粒子也一路向右移。",
            "whyWrong": "波峰由相鄰粒子依序振動形成；單一粒子通常在自己的平衡位置附近往復。",
            "correction": "同時追蹤波峰與一個有色標記點，分別比較兩者的平均位置。"
          },
          {
            "belief": "水面浮標向下游漂移，便把全部位移都歸因於水波傳播。",
            "whyWrong": "真實水面可同時有水流；水流運送物質，波動主要傳遞擾動與能量。",
            "correction": "量浮標的平均漂移與上下週期運動，分開估計流動和波動。"
          },
          {
            "belief": "介質粒子沒有隨波遠移，所以波不可能把能量傳到遠處。",
            "whyWrong": "相鄰粒子之間能傳遞作用與擾動，能量可前進而粒子只做局部振動。",
            "correction": "用遠端物體受波推動或吸收波能作為能量傳遞證據。"
          },
          {
            "belief": "波通過後標記點沒有永久位移，就判定該點從未運動。",
            "whyWrong": "平均位置不變不等於瞬時位置不變；標記點可先偏離再回到平衡位置。",
            "correction": "查看多時刻位移紀錄，區分往復路程與最後位移。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_166",
        "title": "繩上波峰與標記點追蹤",
        "body": "高速攝影同時記錄向右傳播的波峰位置，以及繩上固定紅點 P 的水平位置。紅點只在鉛直方向振動，表中列出四個時刻。",
        "dataTable": {
          "caption": "波峰與紅點位置",
          "columns": [
            "時刻",
            "波峰水平位置",
            "P 點水平位置"
          ],
          "rows": [
            [
              "0.0 s",
              "0.5 m",
              "2.0 m"
            ],
            [
              "0.2 s",
              "1.1 m",
              "2.0 m"
            ],
            [
              "0.4 s",
              "1.7 m",
              "2.0 m"
            ],
            [
              "0.6 s",
              "2.3 m",
              "2.0 m"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_002"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_166_01",
          "stem": "繩波向右傳，紅色標記點先上升、再下降回到原高度。紅點是否隨波峰向右遠移？",
          "options": [
            "沒有；紅點主要在原平衡位置附近振動",
            "有；波峰到哪裡紅點就到哪裡",
            "沒有；紅點全程完全靜止",
            "有；紅點以波速移到繩端"
          ],
          "answerIndex": 0,
          "rationales": [
            "紅點回到原水平位置附近，而波峰繼續前進，顯示介質未整體搬運。",
            "波峰不是固定一批繩粒子組成。",
            "紅點曾上下移動，不能說完全靜止。",
            "粒子振動速度與波形傳播速度不是同一件事。"
          ],
          "reviewEvidence": "紅點回到原水平位置附近，而波峰繼續前進，顯示介質未整體搬運。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_166_02",
          "stem": "無明顯水流的水槽中，浮標隨波上下起伏，十個波峰後仍在原處附近。這支持哪個模型？",
          "options": [
            "每個波峰都由同一批水帶到槽端",
            "浮標不動，所以水波沒有能量",
            "波傳遞擾動，水面粒子沒有隨波整體前進",
            "水面粒子只向前、不會上下振動"
          ],
          "answerIndex": 2,
          "rationales": [
            "同一批水若遠移，浮標平均位置也應明顯改變。",
            "浮標上下運動已顯示波對它做功與傳遞能量。",
            "浮標有局部振動但平均水平位置近似不變。",
            "觀察明確記錄上下起伏。"
          ],
          "reviewEvidence": "浮標有局部振動但平均水平位置近似不變。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_166_03",
          "stem": "河面浮葉一面起伏一面向下游移動。能否把下游位移全歸因於水波？",
          "options": [
            "能；任何水面位移都只由波造成",
            "不能；因水波完全不傳遞能量",
            "不能；必須另考慮水流造成的物質運輸",
            "能；波峰會永久帶走每片葉子"
          ],
          "answerIndex": 2,
          "rationales": [
            "河流本身可使浮葉平均位置向下游改變。",
            "波仍可傳遞能量，不能因分離水流就否定。",
            "平均向下游漂移可由水流造成，上下往復才是波動成分。",
            "是否永久漂移取決於水流等條件，不是一般波動模型。"
          ],
          "reviewEvidence": "平均向下游漂移可由水流造成，上下往復才是波動成分。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_166_04",
          "stem": "一個水波波峰通過軟木塞後，軟木塞回到原水平位置附近。最合理的解釋是什麼？",
          "options": [
            "波峰沒有通過軟木塞",
            "軟木塞已變成下一個波峰",
            "波把軟木塞帶走後又換了一個新的",
            "擾動已通過，軟木塞只做局部運動"
          ],
          "answerIndex": 3,
          "rationales": [
            "軟木塞的上下反應可證明擾動曾通過。",
            "波峰是形狀，不是某一物體。",
            "沒有證據顯示軟木塞被替換。",
            "波形前進與介質標記物回到原平均位置可以同時發生。"
          ],
          "reviewEvidence": "波形前進與介質標記物回到原平均位置可以同時發生。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_166_05",
          "stem": "繩脈衝到達末端時使小鈴響起，但繩上的色點沒有移到末端。此現象顯示什麼？",
          "options": [
            "只有介質搬到末端才能使鈴響",
            "波能傳遞能量而不搬運同一批介質到末端",
            "色點沒有遠移，所以末端未收到能量",
            "小鈴的能量來自色點的質量增加"
          ],
          "answerIndex": 1,
          "rationales": [
            "相鄰繩段依序作用即可把能量送到末端。",
            "末端受擾動而發聲，色點卻留在原處附近，分離了能量與物質傳遞。",
            "鈴聲正是末端接收能量的證據。",
            "色點質量未增加，亦非能量來源。"
          ],
          "reviewEvidence": "末端受擾動而發聲，色點卻留在原處附近，分離了能量與物質傳遞。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_166_06",
          "stem": "機械波傳過一列相連小球時，各球依序左右振動。哪項描述正確？",
          "options": [
            "第一顆球依序變成後面的每顆球",
            "所有小球以波速一起平移",
            "擾動向前傳，各球在平衡位置附近往復",
            "後方小球振動表示前方小球已消失"
          ],
          "answerIndex": 2,
          "rationales": [
            "粒子身分不會因波傳遞而互換。",
            "若全部一起平移，就不會出現依序延遲。",
            "相位延遲使波形前進，而每顆小球的中心位置大致固定。",
            "前方粒子仍存在並可繼續振動。"
          ],
          "reviewEvidence": "相位延遲使波形前進，而每顆小球的中心位置大致固定。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_166_07",
          "stem": "波峰以 3.0 m/s 前進，繩上 P 點的水平位置始終約 2.0 m。可得何結論？",
          "options": [
            "P 點水平速度也是 3.0 m/s",
            "波峰其實靜止",
            "波速描述波形傳播，不是 P 點的水平速度",
            "P 點沒有任何鉛直運動"
          ],
          "answerIndex": 2,
          "rationales": [
            "P 的水平位置資料顯示其水平速度近零。",
            "波峰位置隨時間改變，並非靜止。",
            "波峰位移可給 3.0 m/s，而 P 的水平座標不變。",
            "水平位置固定不能排除上下振動。"
          ],
          "reviewEvidence": "波峰位移可給 3.0 m/s，而 P 的水平座標不變。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_166_08",
          "stem": "在無水流水槽投入一滴不擴散的示蹤液，水波經過後示蹤液仍在原區域附近。此結果最直接排除什麼？",
          "options": [
            "水波能使局部水面振動",
            "水波可以傳遞能量",
            "波峰能向前傳播",
            "水波把介質整體帶到水槽另一端"
          ],
          "answerIndex": 3,
          "rationales": [
            "局部振動與示蹤液留在附近相容。",
            "物質未遠移不等於能量未傳。",
            "波峰可由相鄰區域依序振動而前進。",
            "示蹤液標記物質，其平均位置未隨波峰遠移。"
          ],
          "reviewEvidence": "示蹤液標記物質，其平均位置未隨波峰遠移。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_166_09",
          "stem": "要區分河面的水流與波動，哪一種量測最有用？",
          "options": [
            "追蹤浮標的長時間平均位置與短時間往復位移",
            "只拍一張波峰照片",
            "只記水面顏色",
            "只數河岸石頭數量"
          ],
          "answerIndex": 0,
          "rationales": [
            "平均位置持續改變顯示流動；繞平均位置的週期變化顯示波動。",
            "單張照片沒有時間變化，難分平均漂移與振動。",
            "顏色通常不提供速度或位移資料。",
            "石頭數量與浮標運動無關。"
          ],
          "reviewEvidence": "平均位置持續改變顯示流動；繞平均位置的週期變化顯示波動。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_166_10",
          "stem": "連續波通過繩上固定色環，色環每次上升後又下降。十個週期內色環的路程與位移可能如何？",
          "options": [
            "物體的路程與位移都必為零",
            "路程大於零，最後位移可為零",
            "物體的路程為零，位移大於零",
            "物體的位移必等於波傳十個波長"
          ],
          "answerIndex": 1,
          "rationales": [
            "色環反覆運動，因此路程不會為零。",
            "色環累積上下路程，但回到出發位置時淨位移為零。",
            "有運動就有正路程，不可能路程為零。",
            "波形前進距離不等於色環位移。"
          ],
          "reviewEvidence": "色環累積上下路程，但回到出發位置時淨位移為零。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_166_11",
          "stem": "波到達薄板使薄板振動並發聲。這項觀察最直接證明什麼？",
          "options": [
            "波把能量傳到薄板",
            "介質粒子全部堆在薄板上",
            "薄板以波速離開原位",
            "波只傳物質而不傳能量"
          ],
          "answerIndex": 0,
          "rationales": [
            "薄板由靜止轉為振動，需要接收波傳來的能量。",
            "若粒子堆積，應見介質永久轉移，題目未顯示。",
            "薄板振動不等於以波速平移。",
            "薄板獲得振動能正好反駁此說。"
          ],
          "reviewEvidence": "薄板由靜止轉為振動，需要接收波傳來的能量。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_166_12",
          "stem": "關於機械波與介質的敘述，何者正確？",
          "options": [
            "介質粒子可局部振動，而擾動與能量向外傳播",
            "每個粒子都跟著波前走完全程",
            "介質不動就不可能形成波",
            "波停止後所有粒子必留在最大位移"
          ],
          "answerIndex": 0,
          "rationales": [
            "波形由相鄰粒子的相位延遲形成，無須整體搬運介質。",
            "粒子通常只在平衡位置附近往復。",
            "局部振動正是機械波傳遞的基礎。",
            "阻尼後粒子會趨近平衡位置，不會必留在極端。"
          ],
          "reviewEvidence": "波形由相鄰粒子的相位延遲形成，無須整體搬運介質。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_166_01",
          "stimulusId": "PHYCHM_R4_STIM_166",
          "stem": "由表估算波峰向右傳播的速度為何？",
          "options": [
            "0 m/s",
            "1.0 m/s",
            "4.6 m/s",
            "3.0 m/s"
          ],
          "answerIndex": 3,
          "rationales": [
            "0 是 P 點水平速度，不是波峰速度。",
            "波峰每 0.2 s 前進 0.6 m，不是 0.2 m。",
            "用末位置除時間忽略初位置，運算錯誤。",
            "v＝(2.3−0.5)/0.6＝3.0 m/s。"
          ],
          "reviewEvidence": "v＝(2.3−0.5)/0.6＝3.0 m/s。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_166_02",
          "stimulusId": "PHYCHM_R4_STIM_166",
          "stem": "P 點資料最直接支持哪項結論？",
          "options": [
            "P 點以 3.0 m/s 向右移",
            "P 點水平平均位置近似不變",
            "P 點沒有受到波影響",
            "波峰沒有傳遞能量"
          ],
          "answerIndex": 1,
          "rationales": [
            "四筆 P 的 x 都是 2.0 m，不支持向右移。",
            "P 點在四個時刻的水平座標皆為 2.0 m。",
            "只記水平位置不變，不能否定 P 的鉛直振動。",
            "表格沒有量能量，且波峰確實前進。"
          ],
          "reviewEvidence": "P 點在四個時刻的水平座標皆為 2.0 m。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "資料分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_166_03",
          "stimulusId": "PHYCHM_R4_STIM_166",
          "stem": "波峰越過 P 點後，最合理的描述為何？",
          "options": [
            "P 點永久停在 2.3 m",
            "P 點被帶到繩端",
            "P 點不再具有平衡位置",
            "擾動通過後 P 點仍回到 2.0 m 附近"
          ],
          "answerIndex": 3,
          "rationales": [
            "2.3 m 是 0.6 s 時波峰位置，不是 P 的位置。",
            "P 的水平位置紀錄不支持被帶走。",
            "介質標記點仍有原本的平衡位置。",
            "波峰與 P 是不同追蹤對象；P 的水平中心一直在 2.0 m。"
          ],
          "reviewEvidence": "波峰與 P 是不同追蹤對象；P 的水平中心一直在 2.0 m。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "證據評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S167",
      "title": "用模型說明介質粒子在平衡位置附近振動",
      "authorityRefs": [
        "AUTH-NATURAL-LC-KA-4-1",
        "AUTH-NATURAL-LC-KA-4-2",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-TM-4-1"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_002"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_167",
        "objective": "能掌握模型說明介質粒子在平衡位置附近振動的判準與適用條件。",
        "sections": [
          {
            "title": "粒子運動模型",
            "content": "把介質分成許多相鄰粒子時，每個粒子受鄰近粒子作用而在平衡位置附近振動。前一粒子先開始、後一粒子稍晚開始，這個相位延遲形成向前移動的波形。"
          },
          {
            "title": "波形不是軌跡",
            "content": "某時刻把各粒子位移連成曲線，可得到波形；曲線描述不同粒子在同一時刻的位置，不是任一粒子沿著曲線前進的路線。"
          },
          {
            "title": "模型檢查",
            "content": "若模型讓標記粒子的平均位置隨波速持續前進，就把介質運輸和波動混為一談。可用同一標記點多時刻座標驗證它是否在固定中心附近往復。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_167_EX_01",
            "prompt": "繩上 P 點的平衡位置為 y＝0，依序量得 +2、0、−2、0、+2 cm。這表示什麼？",
            "steps": [
              "找出最大正、負位移。",
              "觀察序列繞著 0 cm 重複。",
              "判斷平均位置沒有改變。"
            ],
            "answer": "P 點在平衡位置兩側做週期性往復。",
            "why": "位移從正到負再回正，且中心為零；這是同一粒子的振動紀錄，不是它沿繩向前移動。"
          },
          {
            "id": "PHYCHM_R4_L_167_EX_02",
            "prompt": "相鄰 Q 點比 P 點晚 0.10 s 出現同樣位移序列，如何解讀？",
            "steps": [
              "兩點運動形式相同。",
              "Q 的相位比 P 延遲。",
              "延遲沿位置依序出現。"
            ],
            "answer": "擾動由 P 所在處傳向 Q。",
            "why": "後方粒子較晚開始同樣的振動，顯示相位向前傳遞；不需要假設 P 粒子移到 Q。"
          },
          {
            "id": "PHYCHM_R4_L_167_EX_03",
            "prompt": "一張繩波照片畫出正弦曲線。紅點接下來會沿曲線斜向移動嗎？",
            "steps": [
              "照片是同一時刻各點的集合。",
              "紅點受繩的約束主要上下移動。",
              "波形曲線不是單一粒子軌跡。"
            ],
            "answer": "不會；紅點在自身平衡位置附近振動。",
            "why": "把空間波形當路徑會錯把不同粒子的瞬間位置拼成一個粒子的運動。"
          }
        ],
        "misconceptions": [
          {
            "belief": "把某時刻的正弦波形當成單一粒子的移動軌跡，認為粒子會沿曲線向前爬行。",
            "whyWrong": "波形連接的是不同粒子在同一時刻的位移，不是一顆粒子的多時刻位置。",
            "correction": "固定追蹤一個標記粒子，畫它的位移—時間圖來描述實際運動。"
          },
          {
            "belief": "粒子位於波峰時就具有向前的波速，會與波峰一起離開原平衡位置。",
            "whyWrong": "波速是相位或擾動的傳播速度；橫波粒子在波峰的瞬時速度甚至可為零。",
            "correction": "分別標示波傳方向與粒子振動方向，不把兩種速度混為一談。"
          },
          {
            "belief": "相鄰粒子必須在同一時刻同方向、同位移，波形才能向前傳。",
            "whyWrong": "若全部完全同相，只會整段一起振動；波的傳播來自相鄰粒子開始振動的時間差。",
            "correction": "在模型中保留相位延遲，讓後方粒子稍晚重現前方粒子的運動。"
          },
          {
            "belief": "粒子通過平衡位置時位移為零，所以該時刻粒子一定靜止。",
            "whyWrong": "位移為零只表示位在中心；振動粒子通過平衡位置時通常速度最大。",
            "correction": "位移與速度分開判讀，需由相鄰時刻的位置變化決定運動方向與快慢。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_167",
        "title": "標記粒子的時間序列",
        "body": "繩上 P 點的平衡水平位置固定在 x＝1.5 m。攝影機每 0.10 s 記錄一次 P 的鉛直位移，正值代表在平衡線上方。",
        "dataTable": {
          "caption": "P 點位移紀錄",
          "columns": [
            "時刻",
            "水平位置 x",
            "鉛直位移 y"
          ],
          "rows": [
            [
              "0.00 s",
              "1.5 m",
              "+2.0 cm"
            ],
            [
              "0.10 s",
              "1.5 m",
              "0 cm"
            ],
            [
              "0.20 s",
              "1.5 m",
              "−2.0 cm"
            ],
            [
              "0.30 s",
              "1.5 m",
              "0 cm"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_002"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_167_01",
          "stem": "繩上 P 點依序量得鉛直位移 +2、0、−2、0、+2 cm。這表示什麼？",
          "options": [
            "P 點沿繩向前移了 8 cm",
            "P 點在平衡位置兩側做週期性往復",
            "P 點只向上運動",
            "整條繩永久下降 2 cm"
          ],
          "answerIndex": 1,
          "rationales": [
            "這些是鉛直位移，不能相加成水平前進距離。",
            "位移以 0 為中心由正到負再回正，呈現週期往復。",
            "序列含負位移，顯示 P 也向下運動。",
            "末值回到 +2 cm，不表示整條繩永久位移。"
          ],
          "reviewEvidence": "位移以 0 為中心由正到負再回正，呈現週期往復。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_167_02",
          "stem": "相鄰 Q 點比 P 點晚 0.10 s 出現相同位移序列。最合理的解讀為何？",
          "options": [
            "P 粒子在 0.10 s 內變成 Q 粒子",
            "P、Q 永遠保持相同位移",
            "Q 的平衡位置向 P 移動",
            "擾動由 P 所在處傳向 Q"
          ],
          "answerIndex": 3,
          "rationales": [
            "粒子身分不互換；是運動狀態依序重現。",
            "晚 0.10 s 表示兩點有相位差。",
            "平衡位置不需移動即可傳遞擾動。",
            "Q 延遲重現 P 的振動，顯示相位由 P 向 Q 傳遞。"
          ],
          "reviewEvidence": "Q 延遲重現 P 的振動，顯示相位由 P 向 Q 傳遞。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_167_03",
          "stem": "一張繩波照片呈正弦形，紅點接下來會沿曲線斜向前進嗎？",
          "options": [
            "不會；紅點在自己的平衡位置附近振動",
            "會；曲線就是紅點未來路徑",
            "會；紅點速度必等於波速",
            "不會；因紅點完全不會移動"
          ],
          "answerIndex": 0,
          "rationales": [
            "空間波形不是單一標記粒子的時間軌跡。",
            "照片連接不同粒子的當下位置，不是未來軌跡。",
            "粒子速度與波形傳播速度不同。",
            "紅點仍會做局部振動。"
          ],
          "reviewEvidence": "空間波形不是單一標記粒子的時間軌跡。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_167_04",
          "stem": "某橫波向右傳，繩上 P 點的水平座標保持 1.5 m，鉛直位移改變。P 點的運動方向主要為何？",
          "options": [
            "以波速持續向右",
            "在 1.5 m 處上下往復",
            "此時物體沿正弦線斜向移動",
            "固定不動"
          ],
          "answerIndex": 1,
          "rationales": [
            "水平座標不變，不能說 P 隨波右移。",
            "P 的中心 x 固定而 y 隨時間正負變化。",
            "正弦線是各粒子的空間分布。",
            "鉛直位移改變表示 P 確實在運動。"
          ],
          "reviewEvidence": "P 的中心 x 固定而 y 隨時間正負變化。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_167_05",
          "stem": "若一列相鄰粒子全部同時到達最高點，且始終同相，這個模型缺少什麼才能描述行進波？",
          "options": [
            "更大的粒子質量",
            "把波形畫得更高",
            "讓所有粒子永久向前",
            "相鄰粒子的相位延遲"
          ],
          "answerIndex": 3,
          "rationales": [
            "質量大小不會補上傳播的先後次序。",
            "增加振幅只改變位移大小。",
            "整體前進是物質流，不是必要的波動。",
            "行進波需要後方粒子稍晚重現前方粒子的振動。"
          ],
          "reviewEvidence": "行進波需要後方粒子稍晚重現前方粒子的振動。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_167_06",
          "stem": "P 點通過平衡位置 y＝0 時，能否只由位移為零判定它靜止？",
          "options": [
            "不能；還需比較前後時刻的位置",
            "能；位移為零就是速度為零",
            "能；平衡位置不允許粒子運動",
            "不能；因粒子此時一定以波速前進"
          ],
          "answerIndex": 0,
          "rationales": [
            "速度由位移對時間的變化判斷，單一 y＝0 資料不足。",
            "位置在原點不代表位置沒有隨時間改變。",
            "振動粒子會穿越平衡位置。",
            "粒子速度不必等於波速。"
          ],
          "reviewEvidence": "速度由位移對時間的變化判斷，單一 y＝0 資料不足。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_167_07",
          "stem": "某時刻把一列粒子的位移連成曲線，曲線上的一個波峰代表什麼？",
          "options": [
            "該時刻附近粒子的位移分布達局部最大",
            "同一粒子走過的最高路段",
            "一團固定物質向前移動",
            "所有粒子的平衡位置都升高"
          ],
          "answerIndex": 0,
          "rationales": [
            "波峰由不同位置粒子的瞬時位移共同形成。",
            "曲線是同時刻的空間資料，不是歷程。",
            "波峰不是固定的一團介質。",
            "平衡位置不因瞬時波峰而全部改變。"
          ],
          "reviewEvidence": "波峰由不同位置粒子的瞬時位移共同形成。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_167_08",
          "stem": "兩個相鄰粒子做相同週期振動，但 Q 比 P 晚四分之一週期。此差異會造成什麼？",
          "options": [
            "兩粒子週期不同",
            "P、Q 在同一時刻具有不同相位",
            "Q 永遠不會振動",
            "P 粒子會搬到 Q 的位置"
          ],
          "answerIndex": 1,
          "rationales": [
            "延遲不改變兩者各自的週期。",
            "時間延遲 T/4 對應四分之一週期的相位差。",
            "Q 只是較晚開始同樣振動。",
            "相位傳遞不需要粒子互換位置。"
          ],
          "reviewEvidence": "時間延遲 T/4 對應四分之一週期的相位差。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_167_09",
          "stem": "高速攝影顯示波峰連續前進，但每個色點都繞固定中心運動。最符合哪項敘述？",
          "options": [
            "波形前進源於各點依序振動",
            "色點共同搬運波峰",
            "波峰前進表示平衡位置全向前移",
            "只有第一個色點真正振動"
          ],
          "answerIndex": 0,
          "rationales": [
            "相鄰點的振動時間差使局部最大位移的位置向前移。",
            "色點中心固定，不支持共同搬運。",
            "平衡位置未隨波峰改變。",
            "後續色點也有紀錄到振動。"
          ],
          "reviewEvidence": "相鄰點的振動時間差使局部最大位移的位置向前移。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_167_10",
          "stem": "P 點在 t＝0 位於波峰，四分之一週期後通過平衡線。此過程顯示什麼？",
          "options": [
            "P 隨波前進四分之一波長",
            "P 從極端位置回到平衡位置，仍留在原水平座標附近",
            "P 的平衡位置移到波谷",
            "P 在波峰時已停止振動"
          ],
          "answerIndex": 1,
          "rationales": [
            "四分之一週期描述局部振動，不是水平搬移。",
            "同一粒子的 y 隨時間改變，而其平衡水平位置可不變。",
            "平衡位置是固定中心，不移到波谷。",
            "波峰時瞬時速度可為零，但隨後仍會運動。"
          ],
          "reviewEvidence": "同一粒子的 y 隨時間改變，而其平衡水平位置可不變。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_167_11",
          "stem": "要驗證粒子只在平衡位置附近振動，哪組資料最直接？",
          "options": [
            "單一時刻整條繩的照片",
            "波源的外觀顏色",
            "同一標記點在多個時刻的座標",
            "繩子的總長度"
          ],
          "answerIndex": 2,
          "rationales": [
            "單張照片不能顯示標記點是否回到中心。",
            "顏色不提供運動資料。",
            "多時刻座標可檢查平均位置與往復範圍。",
            "總長度不能追蹤局部粒子。"
          ],
          "reviewEvidence": "多時刻座標可檢查平均位置與往復範圍。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_167_12",
          "stem": "在波的粒子模型中，「相位向前傳」不表示什麼？",
          "options": [
            "後方粒子較晚開始振動",
            "相鄰位置依序出現相似狀態",
            "擾動可到達遠處",
            "同一粒子從波源一路移到遠端"
          ],
          "answerIndex": 3,
          "rationales": [
            "這正是波動與介質運輸要區分之處。",
            "較晚開始是相位傳遞的表現。",
            "狀態依序重現形成移動波形。",
            "波傳遞運動狀態，粒子仍在各自平衡位置附近。"
          ],
          "reviewEvidence": "波傳遞運動狀態，粒子仍在各自平衡位置附近。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_167_01",
          "stimulusId": "PHYCHM_R4_STIM_167",
          "stem": "表中 P 點的振幅為何？",
          "options": [
            "0.5 cm",
            "1.0 cm",
            "2.0 cm",
            "4.0 cm"
          ],
          "answerIndex": 2,
          "rationales": [
            "0.5 cm 與表中極端位移不符。",
            "1.0 cm 只是極端值的一半。",
            "P 相對 y＝0 的最大位移絕對值為 2.0 cm。",
            "4.0 cm 是從 +2 到 −2 的全高。"
          ],
          "reviewEvidence": "P 相對 y＝0 的最大位移絕對值為 2.0 cm。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_167_02",
          "stimulusId": "PHYCHM_R4_STIM_167",
          "stem": "這四筆資料最能排除哪個說法？",
          "options": [
            "P 點會上下振動",
            "P 點會通過平衡位置",
            "P 點隨波以水平速度持續前進",
            "P 點位移可為負值"
          ],
          "answerIndex": 2,
          "rationales": [
            "y 由 +2 到 −2 支持上下振動。",
            "0.10 s 與 0.30 s 的 y＝0 支持通過平衡位置。",
            "四筆水平位置都為 1.5 m，排除持續水平前進。",
            "0.20 s 的 −2.0 cm 證明位移可為負。"
          ],
          "reviewEvidence": "四筆水平位置都為 1.5 m，排除持續水平前進。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "資料分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_167_03",
          "stimulusId": "PHYCHM_R4_STIM_167",
          "stem": "若下一筆 0.40 s 回到 +2.0 cm，P 點週期最可能是多少？",
          "options": [
            "0.10 s",
            "0.20 s",
            "0.30 s",
            "0.40 s"
          ],
          "answerIndex": 3,
          "rationales": [
            "0.10 s 只從波峰到平衡線，約四分之一週期。",
            "0.20 s 從波峰到波谷，約半週期。",
            "0.30 s 時 P 回到平衡線，尚未重現初態。",
            "0.00 s 與 0.40 s 的位移及循環狀態相同，故 T＝0.40 s。"
          ],
          "reviewEvidence": "0.00 s 與 0.40 s 的位移及循環狀態相同，故 T＝0.40 s。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "證據評估"
          ]
        }
      ]
    }
  ]
};
