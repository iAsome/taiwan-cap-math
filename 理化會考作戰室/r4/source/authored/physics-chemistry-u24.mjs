export const PHYSICS_CHEMISTRY_AUTHORED_U24 = {
  "unitId": "PHYCHM_R4_U24",
  "title": "折射、透鏡與成像",
  "authorityRefs": [
    "AUTH-NATURAL-LC-KA-4-7",
    "AUTH-NATURAL-LC-KA-4-8",
    "AUTH-NATURAL-LC-KA-4-9",
    "AUTH-NATURAL-LP-PE-4-1",
    "AUTH-NATURAL-LP-TR-4-1"
  ],
  "provenance": {
    "status": "original",
    "authorRole": "Codex R4 physics and chemistry content author",
    "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
  },
  "skills": [
    {
      "id": "PHYCHM_R4_S182",
      "title": "由介質改變判斷光速與折射方向",
      "authorityRefs": [
        "AUTH-NATURAL-LC-KA-4-7",
        "AUTH-NATURAL-LC-KA-4-8",
        "AUTH-NATURAL-LC-KA-4-9",
        "AUTH-NATURAL-LP-PE-4-1",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_005"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_182",
        "objective": "能掌握介質改變判斷光速與折射方向的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "光由空氣進入玻璃時速率降低，斜入射通常折向法線；由玻璃進空氣則通常偏離法線。"
          },
          {
            "title": "證據判讀",
            "content": "入射角固定 40°，量折射角；各介質均透明且表面平整。 玻璃列為 1.90×10⁸ m/s，四者最小。 折射角 29° 小於入射角 40°，所以靠近法線。"
          },
          {
            "title": "適用界線",
            "content": "光由空氣進入玻璃時速率降低，斜入射通常折向法線；由玻璃進空氣則通常偏離法線。 由水到玻璃，光速與折射角一起減小。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_182_EX_01",
            "prompt": "光由空氣進入三種介質：入射角固定 40°，量折射角；各介質均透明且表面平整。 哪種介質中光速最小？",
            "steps": [
              "入射角固定 40°，量折射角；各介質均透明且表面平整。",
              "玻璃列為 1.90×10⁸ m/s，四者最小。",
              "玻璃列為 1.90×10⁸ m/s，四者最小。"
            ],
            "answer": "玻璃；玻璃列為 1.90×10⁸ m/s，四者最小。",
            "why": "玻璃列為 1.90×10⁸ m/s，四者最小。"
          },
          {
            "id": "PHYCHM_R4_L_182_EX_02",
            "prompt": "光由空氣進入三種介質：入射角固定 40°，量折射角；各介質均透明且表面平整。 空氣進入水時折射線如何偏？",
            "steps": [
              "入射角固定 40°，量折射角；各介質均透明且表面平整。",
              "折射角 29° 小於入射角 40°，所以靠近法線。",
              "折射角 29° 小於入射角 40°，所以靠近法線。"
            ],
            "answer": "靠近法線；折射角 29° 小於入射角 40°，所以靠近法線。",
            "why": "折射角 29° 小於入射角 40°，所以靠近法線。"
          },
          {
            "id": "PHYCHM_R4_L_182_EX_03",
            "prompt": "光由空氣進入三種介質：入射角固定 40°，量折射角；各介質均透明且表面平整。 資料呈現何種關係？",
            "steps": [
              "入射角固定 40°，量折射角；各介質均透明且表面平整。",
              "由水到玻璃，光速與折射角一起減小。",
              "由水到玻璃，光速與折射角一起減小。"
            ],
            "answer": "介質光速較小時折射角較小；由水到玻璃，光速與折射角一起減小。",
            "why": "由水到玻璃，光速與折射角一起減小。"
          }
        ],
        "misconceptions": [
          {
            "belief": "光由空氣進入玻璃速度變慢時，卻畫成折射線遠離法線。",
            "whyWrong": "斜入射由較快介質進入較慢介質時，折射角通常小於入射角，光線靠近法線。",
            "correction": "比較兩介質光速；進入較慢介質畫向法線偏折。"
          },
          {
            "belief": "光折射後方向改變，就認為頻率也在界面突然改變。",
            "whyWrong": "頻率由光源決定並在跨界面時保持；改變的是光速與波長。",
            "correction": "跨介質保留頻率，依新光速調整波長與方向。"
          },
          {
            "belief": "光沿法線入射仍畫出向一側偏折，認為只要換介質就一定改方向。",
            "whyWrong": "正入射時入射方向與法線重合，雖光速改變但方向不偏折。",
            "correction": "先檢查入射角是否為零；零度入射沿法線直進。"
          },
          {
            "belief": "以光線和介面的夾角比較折射方向，將靠近法線與遠離法線判反。",
            "whyWrong": "入射角與折射角都從法線量；介面角與法線角互餘。",
            "correction": "先畫法線，再比較折射角 r 與入射角 i。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_182",
        "title": "光由空氣進入三種介質",
        "body": "入射角固定 40°，量折射角；各介質均透明且表面平整。",
        "dataTable": {
          "caption": "光由空氣進入三種介質",
          "columns": [
            "介質",
            "光速約值",
            "折射角"
          ],
          "rows": [
            [
              "空氣",
              "3.00×10⁸ m/s",
              "40°"
            ],
            [
              "水",
              "2.25×10⁸ m/s",
              "29°"
            ],
            [
              "壓克力",
              "2.00×10⁸ m/s",
              "25°"
            ],
            [
              "玻璃",
              "1.90×10⁸ m/s",
              "24°"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_005"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_182_01",
          "stem": "光由空氣斜射入玻璃，玻璃中光速較小。折射線通常如何偏折？",
          "options": [
            "遠離法線",
            "此時物體沿介面前進",
            "靠近法線",
            "必沿原路返回"
          ],
          "answerIndex": 2,
          "rationales": [
            "進入較慢介質通常折射角變小。",
            "斜入射不會通常沿介面。",
            "由較快空氣進入較慢玻璃時 r＜i。",
            "原路返回是反射或特定方向，不是一般折射。"
          ],
          "reviewEvidence": "由較快空氣進入較慢玻璃時 r＜i。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_182_02",
          "stem": "光由玻璃斜射入空氣，空氣中光速較大。忽略特殊極端情況，折射線通常如何？",
          "options": [
            "靠近法線",
            "遠離法線",
            "光線的折射角必為零",
            "光速保持不變"
          ],
          "answerIndex": 1,
          "rationales": [
            "由慢介質進入快介質時 r 通常增大。",
            "玻璃到空氣時折射角通常大於入射角。",
            "斜入射不會令折射角必為零。",
            "介質改變使光速改變。"
          ],
          "reviewEvidence": "玻璃到空氣時折射角通常大於入射角。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_182_03",
          "stem": "光沿法線由空氣進入水中。方向與速率如何變化？",
          "options": [
            "方向偏向介面，速率增加",
            "方向不偏折，速率降低",
            "方向沿原路反射，速率為零",
            "方向不變，速率也必不變"
          ],
          "answerIndex": 1,
          "rationales": [
            "進入水中光速較空氣小。",
            "i＝0° 時沿法線直進，但水中光速較小。",
            "仍有透射光，不會速率為零。",
            "介質不同使速率改變。"
          ],
          "reviewEvidence": "i＝0° 時沿法線直進，但水中光速較小。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_182_04",
          "stem": "光跨過空氣與水界面時，哪個量由光源決定並保持不變？",
          "options": [
            "光速",
            "此波的波長",
            "頻率",
            "光線的折射角"
          ],
          "answerIndex": 2,
          "rationales": [
            "光速隨介質改變。",
            "v＝fλ 且 f 固定，v 變會使 λ 變。",
            "界面兩側振動必連續，頻率保持。",
            "光線的折射角由介質和入射角決定。"
          ],
          "reviewEvidence": "界面兩側振動必連續，頻率保持。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_182_05",
          "stem": "入射角固定 40°，折射角在水中 29°、玻璃中 24°。何者光線更靠近法線？",
          "options": [
            "玻璃中的光",
            "水中的光",
            "兩者相同",
            "無法由角度判定"
          ],
          "answerIndex": 0,
          "rationales": [
            "折射角較小代表更靠近法線。",
            "29° 大於24°，水中較遠離法線。",
            "兩折射角不同。",
            "角度由法線量，數值可直接比較。"
          ],
          "reviewEvidence": "折射角較小代表更靠近法線。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_182_06",
          "stem": "光在空氣、水、玻璃中的速率約為 3.0、2.25、1.9×10⁸ m/s。哪種介質中最慢？",
          "options": [
            "玻璃",
            "空氣",
            "水",
            "三者相同"
          ],
          "answerIndex": 0,
          "rationales": [
            "1.9×10⁸ m/s 是三者最小值。",
            "3.0×10⁸ 最大。",
            "2.25×10⁸ 仍大於1.9×10⁸。",
            "數值並不相同。"
          ],
          "reviewEvidence": "1.9×10⁸ m/s 是三者最小值。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_182_07",
          "stem": "光由水進入玻璃，若玻璃中速率較慢，折射線相對法線如何？",
          "options": [
            "通常更遠離法線",
            "必沿介面",
            "通常更靠近法線",
            "必反向回水中"
          ],
          "answerIndex": 2,
          "rationales": [
            "由快到慢應折向法線。",
            "沒有條件支持沿介面。",
            "進入較慢玻璃時折射角小於水中的入射角。",
            "折射不等於必然全反射。"
          ],
          "reviewEvidence": "進入較慢玻璃時折射角小於水中的入射角。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_182_08",
          "stem": "一束光在新介質中速度變為原來 0.8 倍，頻率不變。波長如何？",
          "options": [
            "變為原來 1.25 倍",
            "變為原來 0.8 倍",
            "此時物體保持不變",
            "變為原來 0.64 倍"
          ],
          "answerIndex": 1,
          "rationales": [
            "λ＝v/f，速度下降時波長不會反向增加。",
            "λ′/λ＝v′/v＝0.8。",
            "頻率不變但速度改變，波長必變。",
            "沒有平方關係。"
          ],
          "reviewEvidence": "λ′/λ＝v′/v＝0.8。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_182_09",
          "stem": "學生說「折射角 60°」但量的是折射線與介面的夾角。真正折射角為何？",
          "options": [
            "30°",
            "60°",
            "120°",
            "150°"
          ],
          "answerIndex": 0,
          "rationales": [
            "法線垂直介面，r＝90°−60°＝30°。",
            "60° 是介面基準角。",
            "不需加倍。",
            "折射角取法線與光線較小角。"
          ],
          "reviewEvidence": "法線垂直介面，r＝90°−60°＝30°。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_182_10",
          "stem": "光由空氣進入透明材料，入射角40°、折射角25°。哪項判讀合理？",
          "options": [
            "材料中光速較大，光離開法線",
            "兩介質光速相同",
            "此波的頻率在材料中降為零",
            "材料中光速小於空氣中，光折向法線"
          ],
          "answerIndex": 3,
          "rationales": [
            "若更快通常折射角會較大。",
            "方向已改變，不支持光速完全相同。",
            "透射光仍有非零頻率。",
            "25°＜40°，符合進入較慢介質折向法線。"
          ],
          "reviewEvidence": "25°＜40°，符合進入較慢介質折向法線。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_182_11",
          "stem": "比較介質對折射的影響時，哪項實驗條件應固定？",
          "options": [
            "每次任意改變入射角",
            "每次使用不同顏色且不記錄",
            "只固定屏幕顏色",
            "入射角與入射介質"
          ],
          "answerIndex": 3,
          "rationales": [
            "同時改角度會混淆介質效果。",
            "不同頻率可能帶來另一變因。",
            "屏幕顏色不是主要折射幾何條件。",
            "固定入射條件後，折射角差異才可主要歸因於介質。"
          ],
          "reviewEvidence": "固定入射條件後，折射角差異才可主要歸因於介質。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_182_12",
          "stem": "同一材料中，入射角由0°增大為斜入射。哪項敘述正確？",
          "options": [
            "0°時折射角為90°",
            "任何角度都沿介面",
            "斜入射時光速才開始改變",
            "0°時不偏折；斜入射時才可觀察方向改變"
          ],
          "answerIndex": 3,
          "rationales": [
            "0°時光線與法線重合。",
            "一般不會全部沿介面。",
            "進入材料時光速即改變，與是否斜入射無關。",
            "正入射只有速率與波長改變，斜入射另顯示方向偏折。"
          ],
          "reviewEvidence": "正入射只有速率與波長改變，斜入射另顯示方向偏折。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_182_01",
          "stimulusId": "PHYCHM_R4_STIM_182",
          "stem": "表中哪種介質內的光速最小？",
          "options": [
            "空氣",
            "水",
            "玻璃",
            "壓克力"
          ],
          "answerIndex": 2,
          "rationales": [
            "空氣為3.00×10⁸ m/s。",
            "水為2.25×10⁸ m/s。",
            "玻璃列1.90×10⁸ m/s為最小。",
            "壓克力為2.00×10⁸ m/s，仍大於玻璃。"
          ],
          "reviewEvidence": "玻璃列1.90×10⁸ m/s為最小。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_182_02",
          "stimulusId": "PHYCHM_R4_STIM_182",
          "stem": "空氣中的光以40°入射水面，表中折射角29°。折射線如何偏？",
          "options": [
            "靠近法線",
            "遠離法線",
            "此時物體沿界面",
            "原路返回"
          ],
          "answerIndex": 0,
          "rationales": [
            "r＝29°＜i＝40°，因此折向法線。",
            "29°小於40°，不是遠離。",
            "折射角不是90°。",
            "仍有透射且方向未反轉。"
          ],
          "reviewEvidence": "r＝29°＜i＝40°，因此折向法線。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "光路分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_182_03",
          "stimulusId": "PHYCHM_R4_STIM_182",
          "stem": "表中資料呈現哪項關係？",
          "options": [
            "物體的速度越小折射角越大",
            "所有折射角固定40°",
            "光線的折射角與介質無關",
            "介質中光速較小時，固定入射角所得折射角較小"
          ],
          "answerIndex": 3,
          "rationales": [
            "表中速度與角度同方向減小。",
            "只有空氣列40°。",
            "水、壓克力、玻璃角度不同。",
            "由水到玻璃，光速2.25→1.90且折射角29°→24°。"
          ],
          "reviewEvidence": "由水到玻璃，光速2.25→1.90且折射角29°→24°。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "證據評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S183",
      "title": "辨識入射角折射角與法線",
      "authorityRefs": [
        "AUTH-NATURAL-LC-KA-4-7",
        "AUTH-NATURAL-LC-KA-4-8",
        "AUTH-NATURAL-LC-KA-4-9",
        "AUTH-NATURAL-LP-PE-4-1",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_005"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_183",
        "objective": "能掌握入射角折射角與法線的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "入射角是入射光與法線夾角，折射角是折射光與法線夾角，都不從介面量。"
          },
          {
            "title": "證據判讀",
            "content": "光由空氣射入水，角度都由通過入射點的法線量取。 直接讀取丙列資料，可見其折射角欄記錄為 29°。 界面與法線垂直，90°−37°＝53°。"
          },
          {
            "title": "適用界線",
            "content": "入射角是入射光與法線夾角，折射角是折射光與法線夾角，都不從介面量。 53° 是折射線與界面的夾角。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_183_EX_01",
            "prompt": "入射角與折射角量測：光由空氣射入水，角度都由通過入射點的法線量取。 丙的折射角為何？",
            "steps": [
              "光由空氣射入水，角度都由通過入射點的法線量取。",
              "丙列折射角為 29°。",
              "直接讀取丙列資料，可見其折射角欄記錄為 29°。"
            ],
            "answer": "29°；直接讀取丙列資料，可見其折射角欄記錄為 29°。",
            "why": "直接讀取丙列資料，可見其折射角欄記錄為 29°。"
          },
          {
            "id": "PHYCHM_R4_L_183_EX_02",
            "prompt": "入射角與折射角量測：光由空氣射入水，角度都由通過入射點的法線量取。 丁折射線與界面夾角為何？",
            "steps": [
              "光由空氣射入水，角度都由通過入射點的法線量取。",
              "界面與法線垂直，90°−37°＝53°。",
              "界面與法線垂直，90°−37°＝53°。"
            ],
            "answer": "53°；界面與法線垂直，90°−37°＝53°。",
            "why": "界面與法線垂直，90°−37°＝53°。"
          },
          {
            "id": "PHYCHM_R4_L_183_EX_03",
            "prompt": "入射角與折射角量測：光由空氣射入水，角度都由通過入射點的法線量取。 為何不能把 53° 稱折射角？",
            "steps": [
              "光由空氣射入水，角度都由通過入射點的法線量取。",
              "53° 是折射線與界面的夾角。",
              "53° 是折射線與界面的夾角。"
            ],
            "answer": "折射角由法線量；53° 是折射線與界面的夾角。",
            "why": "53° 是折射線與界面的夾角。"
          }
        ],
        "misconceptions": [
          {
            "belief": "把折射線與水面的夾角稱為折射角，導致讀值與標準答案互餘。",
            "whyWrong": "折射角是折射線與入射點法線的夾角。",
            "correction": "畫出垂直界面的法線，再從法線量折射角。"
          },
          {
            "belief": "法線只畫在入射介質一側，認為進入第二介質後沒有法線可量折射角。",
            "whyWrong": "法線是一條穿過入射點並垂直界面的直線，可延伸到界面兩側。",
            "correction": "將同一法線跨過界面延長，分別量入射角與折射角。"
          },
          {
            "belief": "把入射角量在折射點以外的位置，角的頂點沒有落在界面交點。",
            "whyWrong": "入射、折射與法線三線必在入射點相交。",
            "correction": "量角器中心對準光線與界面的交點。"
          },
          {
            "belief": "看到入射角40°、折射角29°，就把兩角相減的11°稱為折射角。",
            "whyWrong": "11°只是偏折量；折射角本身仍是折射線與法線的29°。",
            "correction": "題目若問偏折量才算 i−r，問折射角則直接讀 r。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_183",
        "title": "入射角與折射角量測",
        "body": "光由空氣射入水，角度都由通過入射點的法線量取。",
        "dataTable": {
          "caption": "入射角與折射角量測",
          "columns": [
            "試次",
            "入射角",
            "折射角"
          ],
          "rows": [
            [
              "甲",
              "10°",
              "7°"
            ],
            [
              "乙",
              "25°",
              "18°"
            ],
            [
              "丙",
              "40°",
              "29°"
            ],
            [
              "丁",
              "55°",
              "37°"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_005"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_183_01",
          "stem": "光由空氣進入水，入射線與法線夾40°，折射線與法線夾29°。折射角為何？",
          "options": [
            "40°",
            "11°",
            "61°",
            "29°"
          ],
          "answerIndex": 3,
          "rationales": [
            "40°是入射角。",
            "11°是兩角差。",
            "61°是折射線與水面的夾角。",
            "折射角定義為折射線與法線的29°。"
          ],
          "reviewEvidence": "折射角定義為折射線與法線的29°。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_183_02",
          "stem": "折射線與界面夾53°，折射角為何？",
          "options": [
            "53°",
            "106°",
            "127°",
            "37°"
          ],
          "answerIndex": 3,
          "rationales": [
            "53°以界面為基準。",
            "不需把角度加倍。",
            "不取外側鈍角。",
            "法線垂直界面，r＝90°−53°＝37°。"
          ],
          "reviewEvidence": "法線垂直界面，r＝90°−53°＝37°。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_183_03",
          "stem": "入射角與折射角的角頂點都應位於哪裡？",
          "options": [
            "光源中心",
            "光線穿越兩介質界面的入射點",
            "屏幕邊緣",
            "任意法線位置"
          ],
          "answerIndex": 1,
          "rationales": [
            "光源不是折射發生處。",
            "入射線、折射線與法線在界面入射點相交。",
            "屏幕不一定在界面。",
            "離開入射點量得的不是定義角。"
          ],
          "reviewEvidence": "入射線、折射線與法線在界面入射點相交。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_183_04",
          "stem": "法線在折射作圖中的正確描述為何？",
          "options": [
            "此時物體沿界面方向",
            "通過入射點且垂直界面，延伸到兩側介質",
            "只存在空氣側",
            "必與入射線重合"
          ],
          "answerIndex": 1,
          "rationales": [
            "沿界面的是切線方向。",
            "同一條法線提供i與r的共同基準。",
            "折射角需在第二介質側由同一法線量。",
            "只有正入射時才重合。"
          ],
          "reviewEvidence": "同一條法線提供i與r的共同基準。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_183_05",
          "stem": "入射線與界面夾50°，入射角為何？",
          "options": [
            "50°",
            "100°",
            "40°",
            "130°"
          ],
          "answerIndex": 2,
          "rationales": [
            "50°是界面基準角。",
            "不需加倍。",
            "i＝90°−50°＝40°。",
            "入射角取較小角。"
          ],
          "reviewEvidence": "i＝90°−50°＝40°。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_183_06",
          "stem": "折射角29°時，折射線與界面的較小夾角是多少？",
          "options": [
            "61°",
            "29°",
            "58°",
            "119°"
          ],
          "answerIndex": 0,
          "rationales": [
            "90°−29°＝61°。",
            "29°是與法線角。",
            "不需加倍。",
            "取小於90°的互餘角。"
          ],
          "reviewEvidence": "90°−29°＝61°。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_183_07",
          "stem": "某圖標示入射角35°，但箭弧畫在入射線與界面之間。應如何修正標示？",
          "options": [
            "該弧是界面角；真正入射角為55°",
            "此時物體仍稱入射角35°",
            "真正入射角為70°",
            "刪除法線"
          ],
          "answerIndex": 0,
          "rationales": [
            "i＝90°−35°＝55°。",
            "角度基準不符合定義。",
            "35×2不是換算。",
            "法線是必要基準。"
          ],
          "reviewEvidence": "i＝90°−35°＝55°。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_183_08",
          "stem": "光沿法線進入水中，入射角與折射角各為何？",
          "options": [
            "兩者皆為90°",
            "入射0°、折射90°",
            "入射90°、折射0°",
            "兩者皆為0°"
          ],
          "answerIndex": 3,
          "rationales": [
            "與界面的夾角才是90°。",
            "折射線仍沿法線。",
            "入射線不沿界面。",
            "兩光線都與法線重合。"
          ],
          "reviewEvidence": "光線垂直入射時，入射光與折射光都和法線重合。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_183_09",
          "stem": "入射角55°、折射角37°。偏折量若定義為兩角差，數值為何？",
          "options": [
            "18°",
            "37°",
            "55°",
            "92°"
          ],
          "answerIndex": 0,
          "rationales": [
            "偏折量＝55°−37°＝18°。",
            "37°是折射角。",
            "55°是入射角。",
            "92°是兩角和。"
          ],
          "reviewEvidence": "偏折量＝55°−37°＝18°。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_183_10",
          "stem": "量角器中心放在入射點，零線對準界面。讀到37°時，若這是折射線與界面角，折射角應記多少？",
          "options": [
            "37°",
            "74°",
            "143°",
            "53°"
          ],
          "answerIndex": 3,
          "rationales": [
            "37°基準為界面。",
            "不需加倍。",
            "折射角取互餘小角。",
            "r＝90°−37°＝53°。"
          ],
          "reviewEvidence": "r＝90°−37°＝53°。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_183_11",
          "stem": "要比較不同入射角下的折射角，資料表最少應成對記錄哪些量？",
          "options": [
            "光線顏色與紙張尺寸",
            "只記i+r",
            "i與r，且註明都由法線量",
            "只記界面角且不說基準"
          ],
          "answerIndex": 2,
          "rationales": [
            "外觀不能代替角度。",
            "和無法保留各角關係。",
            "成對法線角才能直接比較入射與折射。",
            "缺少基準會造成互餘混淆。"
          ],
          "reviewEvidence": "成對法線角才能直接比較入射與折射。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_183_12",
          "stem": "學生讀得折射角大於90°。最可能的操作錯誤為何？",
          "options": [
            "水中沒有折射光",
            "讀了外側鈍角而非光線與法線的較小夾角",
            "法線必平行界面",
            "光速必為零"
          ],
          "answerIndex": 1,
          "rationales": [
            "有折射光仍可能誤讀量角器。",
            "國中折射角取折射線與法線的0°到90°夾角。",
            "法線垂直界面。",
            "角度讀錯與光速為零無關。"
          ],
          "reviewEvidence": "國中折射角取折射線與法線的0°到90°夾角。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_183_01",
          "stimulusId": "PHYCHM_R4_STIM_183",
          "stem": "表中丙試次的折射角為何？",
          "options": [
            "11°",
            "40°",
            "29°",
            "51°"
          ],
          "answerIndex": 2,
          "rationales": [
            "11°是i−r。",
            "40°是入射角。",
            "丙列折射角欄直接記29°。",
            "51°是入射線與界面的夾角。"
          ],
          "reviewEvidence": "丙列折射角欄直接記29°。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_183_02",
          "stimulusId": "PHYCHM_R4_STIM_183",
          "stem": "丁的折射線與界面夾角為何？",
          "options": [
            "35°",
            "53°",
            "37°",
            "55°"
          ],
          "answerIndex": 1,
          "rationales": [
            "35°不是丁的相關互餘角。",
            "90°−37°＝53°。",
            "37°是丁折射角。",
            "55°是丁入射角。"
          ],
          "reviewEvidence": "90°−37°＝53°。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "光路分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_183_03",
          "stimulusId": "PHYCHM_R4_STIM_183",
          "stem": "為何不能把53°稱為丁的折射角？",
          "options": [
            "53°由界面量，折射角應由法線量得37°",
            "因53°是光速",
            "因水中沒有法線",
            "因折射角必等於入射角55°"
          ],
          "answerIndex": 0,
          "rationales": [
            "53°與37°互餘，只有37°符合折射角定義。",
            "角度不是速度。",
            "法線可延伸到水中。",
            "折射不遵循反射角相等規則。"
          ],
          "reviewEvidence": "53°與37°互餘，只有37°符合折射角定義。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "證據評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S184",
      "title": "用折射解釋水中物體視位置",
      "authorityRefs": [
        "AUTH-NATURAL-LC-KA-4-7",
        "AUTH-NATURAL-LC-KA-4-8",
        "AUTH-NATURAL-LC-KA-4-9",
        "AUTH-NATURAL-LP-PE-4-1",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_005"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_184",
        "objective": "能掌握折射解釋水中物體視位置的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "水中物體的光進入空氣後折射，眼睛沿折射光反向延伸，使物體看來比實際淺。"
          },
          {
            "title": "證據判讀",
            "content": "由接近水面上方觀察池底標記，量實際深度與視覺上判定的深度。 丙的視深為 60 cm。 四列視深都只有實際深度的約四分之三。"
          },
          {
            "title": "適用界線",
            "content": "水中物體的光進入空氣後折射，眼睛沿折射光反向延伸，使物體看來比實際淺。 100−75＝25 cm。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_184_EX_01",
            "prompt": "水深與視深比較：由接近水面上方觀察池底標記，量實際深度與視覺上判定的深度。 丙標記看起來多深？",
            "steps": [
              "由接近水面上方觀察池底標記，量實際深度與視覺上判定的深度。",
              "丙的視深為 60 cm。",
              "丙的視深為 60 cm。"
            ],
            "answer": "60 cm；丙的視深為 60 cm。",
            "why": "丙的視深為 60 cm。"
          },
          {
            "id": "PHYCHM_R4_L_184_EX_02",
            "prompt": "水深與視深比較：由接近水面上方觀察池底標記，量實際深度與視覺上判定的深度。 標記看起來較淺的直接證據是什麼？",
            "steps": [
              "由接近水面上方觀察池底標記，量實際深度與視覺上判定的深度。",
              "四列視深都只有實際深度的約四分之三。",
              "四列視深都只有實際深度的約四分之三。"
            ],
            "answer": "視深小於實深；四列視深都只有實際深度的約四分之三。",
            "why": "四列視深都只有實際深度的約四分之三。"
          },
          {
            "id": "PHYCHM_R4_L_184_EX_03",
            "prompt": "水深與視深比較：由接近水面上方觀察池底標記，量實際深度與視覺上判定的深度。 丁的表觀上移量為何？",
            "steps": [
              "由接近水面上方觀察池底標記，量實際深度與視覺上判定的深度。",
              "100−75＝25 cm。",
              "100−75＝25 cm。"
            ],
            "answer": "25 cm；100−75＝25 cm。",
            "why": "100−75＝25 cm。"
          }
        ],
        "misconceptions": [
          {
            "belief": "從空氣看水底時認為物體看起來更深，因此伸手抓取會估得過低。",
            "whyWrong": "水中光進入空氣後通常遠離法線，眼睛反向延長光線，視位置比實際位置淺。",
            "correction": "將折射光反向延長到水中，交點作為視位置。"
          },
          {
            "belief": "物體看起來上移，就認為物體真的在水中向上移動。",
            "whyWrong": "改變的是光線進入眼睛後的視位置，物體實際座標沒有改變。",
            "correction": "同時記錄尺量實深與觀察視深，分開實際位置和表觀位置。"
          },
          {
            "belief": "把實深減視深的差值直接叫作視深，混淆兩個量。",
            "whyWrong": "視深是水面到視位置的距離；實深減視深才是表觀上移量。",
            "correction": "先標水面、實際物點與視物點，再分別量三段距離。"
          },
          {
            "belief": "認為光線在水面折射後，眼睛會自動知道它彎折過，所以能直接看見真實位置。",
            "whyWrong": "視覺系統通常沿到達眼睛的光線直線反向追溯，造成錯誤定位。",
            "correction": "用折射線的反向延長線解釋視位置。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_184",
        "title": "水深與視深比較",
        "body": "由接近水面上方觀察池底標記，量實際深度與視覺上判定的深度。",
        "dataTable": {
          "caption": "水深與視深比較",
          "columns": [
            "位置",
            "實際深度",
            "視深"
          ],
          "rows": [
            [
              "甲",
              "40 cm",
              "30 cm"
            ],
            [
              "乙",
              "60 cm",
              "45 cm"
            ],
            [
              "丙",
              "80 cm",
              "60 cm"
            ],
            [
              "丁",
              "100 cm",
              "75 cm"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_005"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_184_01",
          "stem": "池底標記實際深度80 cm，從水面上方看見的視深為60 cm。標記看起來如何？",
          "options": [
            "比實際位置深20 cm",
            "恰在實際位置",
            "比實際位置淺140 cm",
            "比實際位置淺20 cm"
          ],
          "answerIndex": 3,
          "rationales": [
            "視深小於實深，不是更深。",
            "80與60不相等。",
            "上移量是差，不是和。",
            "表觀上移量＝80−60＝20 cm。"
          ],
          "reviewEvidence": "表觀上移量＝80−60＝20 cm。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_184_02",
          "stem": "水中物體的光進入空氣後，眼睛為何把它判得較淺？",
          "options": [
            "物體真的向上漂移",
            "水面把光完全反射回底部",
            "眼睛沿折射光反向直線延長，交點位於較淺處",
            "光進入空氣後停止"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體位置沒有改變。",
            "仍有光進入眼睛。",
            "折射使到眼光線方向改變，反向追溯產生較淺虛位置。",
            "眼睛能接收光表示光未停止。"
          ],
          "reviewEvidence": "折射使到眼光線方向改變，反向追溯產生較淺虛位置。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_184_03",
          "stem": "實深100 cm、視深75 cm。表觀上移量為何？",
          "options": [
            "25 cm",
            "75 cm",
            "100 cm",
            "175 cm"
          ],
          "answerIndex": 0,
          "rationales": [
            "100−75＝25 cm。",
            "75 cm是視深。",
            "100 cm是實深。",
            "175 cm是兩深度相加。"
          ],
          "reviewEvidence": "100−75＝25 cm。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_184_04",
          "stem": "把硬幣放在杯底，注水後從斜上方看硬幣位置改變。硬幣實際位置如何？",
          "options": [
            "真的上升到水面",
            "沉到杯底下方",
            "仍在杯底，改變的是視位置",
            "移到觀察者眼睛"
          ],
          "answerIndex": 2,
          "rationales": [
            "沒有力使硬幣上升。",
            "硬幣仍由杯底支撐。",
            "注水改變光路，不改變硬幣的機械位置。",
            "光進眼不搬運物體。"
          ],
          "reviewEvidence": "注水改變光路，不改變硬幣的機械位置。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_184_05",
          "stem": "由空氣看水中標記，表中每次視深約為實深的四分之三。實深60 cm時視深約多少？",
          "options": [
            "15 cm",
            "60 cm",
            "80 cm",
            "45 cm"
          ],
          "answerIndex": 3,
          "rationales": [
            "15 cm是表觀上移量。",
            "視深小於實深。",
            "80 cm是反向比例。",
            "60×3/4＝45 cm。"
          ],
          "reviewEvidence": "60×3/4＝45 cm。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_184_06",
          "stem": "實深40 cm、視深30 cm。若學生把10 cm填成視深，錯在哪裡？",
          "options": [
            "10 cm是實深",
            "視深應為40 cm",
            "10 cm是表觀上移量，視深應為30 cm",
            "表觀上移量應為70 cm"
          ],
          "answerIndex": 2,
          "rationales": [
            "實深是40 cm。",
            "40 cm是實際深度。",
            "實深−視深＝10 cm，只表示兩位置差。",
            "上移量用差不是和。"
          ],
          "reviewEvidence": "實深−視深＝10 cm，只表示兩位置差。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_184_07",
          "stem": "魚在水中看岸上的物體涉及光由空氣進入水。能否直接套用「水中物體看來較淺」結論？",
          "options": [
            "能；所有跨水面物體都一定看來較淺",
            "不能；光行進方向與觀察介質不同，需重新畫折射光路",
            "能；折射與方向無關",
            "不能；因水中沒有光"
          ],
          "answerIndex": 1,
          "rationales": [
            "該結論特指由空氣看水中。",
            "必須依實際入射介質、觀察者位置和法線作圖。",
            "折射路徑具方向與介質條件。",
            "水中可有光傳播。"
          ],
          "reviewEvidence": "必須依實際入射介質、觀察者位置和法線作圖。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_184_08",
          "stem": "游泳池看起來較淺，安全上最合理的處理為何？",
          "options": [
            "以實際量測與標示水深為準，不用視深估算",
            "依看起來的深度跳入",
            "把視深當實深",
            "認為折射使真實水深變小"
          ],
          "answerIndex": 0,
          "rationales": [
            "水深標示提供實際幾何資料，可避免表觀誤判。",
            "視深可能低估水深。",
            "兩者不相等。",
            "折射只改視位置。"
          ],
          "reviewEvidence": "水深標示提供實際幾何資料，可避免表觀誤判。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_184_09",
          "stem": "同一池底標記由越斜的方向觀察，視位置可能改變。這表示什麼？",
          "options": [
            "表觀位置取決於進眼光線路徑",
            "實際池底隨觀察者移動",
            "水的質量隨視角消失",
            "標記會追著眼睛移動"
          ],
          "answerIndex": 0,
          "rationales": [
            "不同出射方向經眼睛反向延長可得到不同表觀位置。",
            "池底實際座標固定。",
            "質量不由視角決定。",
            "只是光學定位改變。"
          ],
          "reviewEvidence": "不同出射方向經眼睛反向延長可得到不同表觀位置。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_184_10",
          "stem": "要測量視深，哪個方法較合理？",
          "options": [
            "只量杯子質量",
            "用可移動標記調到與水中物體看來同高並記其位置",
            "關燈後猜測",
            "把水面當成物體位置"
          ],
          "answerIndex": 1,
          "rationales": [
            "質量不能給視覺深度。",
            "以視差消失或同高比較可定位表觀位置。",
            "缺乏觀察資料。",
            "視位置通常不在水面。"
          ],
          "reviewEvidence": "以視差消失或同高比較可定位表觀位置。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_184_11",
          "stem": "水中光射入空氣，通常偏離法線。觀察者沿折射線反向延長時，交點相對真物在哪裡？",
          "options": [
            "更深於池底",
            "較靠近水面",
            "正好在眼睛",
            "一定在水面上方"
          ],
          "answerIndex": 1,
          "rationales": [
            "由空氣看水中通常形成較淺視位置。",
            "反向延長線在實物上方交會。",
            "像點在水中延長線上，不在眼睛。",
            "不必越過水面。"
          ],
          "reviewEvidence": "反向延長線在實物上方交會。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_184_12",
          "stem": "某表格實深與視深都增加，但比值大致固定。最合理的圖形趨勢為何？",
          "options": [
            "視深固定不變",
            "視深隨實深近似成正比增加",
            "實深越大視深反而變零",
            "兩者必相加為固定值"
          ],
          "answerIndex": 1,
          "rationales": [
            "表中視深30、45、60、75並非固定。",
            "四列視深/實深皆約0.75。",
            "數值隨實深增加。",
            "兩者和逐列增加。"
          ],
          "reviewEvidence": "四列視深/實深皆約0.75。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_184_01",
          "stimulusId": "PHYCHM_R4_STIM_184",
          "stem": "表中丙標記看起來多深？",
          "options": [
            "20 cm",
            "80 cm",
            "140 cm",
            "60 cm"
          ],
          "answerIndex": 3,
          "rationales": [
            "20 cm是表觀上移量。",
            "80 cm是實際深度。",
            "140 cm是兩值相加。",
            "丙列視深直接記為60 cm。"
          ],
          "reviewEvidence": "丙列視深直接記為60 cm。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_184_02",
          "stimulusId": "PHYCHM_R4_STIM_184",
          "stem": "標記看起來較淺的直接證據是什麼？",
          "options": [
            "每列視深大於實深",
            "兩者完全相等",
            "每列視深都小於實際深度",
            "實深都為零"
          ],
          "answerIndex": 2,
          "rationales": [
            "表中30<40等，方向相反。",
            "四列均不相等。",
            "四列視深約為實深的四分之三。",
            "實深為40至100 cm。"
          ],
          "reviewEvidence": "四列視深約為實深的四分之三。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "光路分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_184_03",
          "stimulusId": "PHYCHM_R4_STIM_184",
          "stem": "丁的表觀上移量為何？",
          "options": [
            "25 cm",
            "75 cm",
            "100 cm",
            "175 cm"
          ],
          "answerIndex": 0,
          "rationales": [
            "100−75＝25 cm。",
            "75 cm是視深。",
            "100 cm是實深。",
            "175 cm是相加。"
          ],
          "reviewEvidence": "100−75＝25 cm。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "證據評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S185",
      "title": "比較凸透鏡與凹透鏡對光線作用",
      "authorityRefs": [
        "AUTH-NATURAL-LC-KA-4-7",
        "AUTH-NATURAL-LC-KA-4-8",
        "AUTH-NATURAL-LC-KA-4-9",
        "AUTH-NATURAL-LP-PE-4-1",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_005"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_185",
        "objective": "能掌握凸透鏡與凹透鏡對光線作用的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "凸透鏡可使與主軸平行的光近似會聚至焦點，凹透鏡使光發散，反向延長似來自虛焦點。"
          },
          {
            "title": "證據判讀",
            "content": "四束與主軸平行的光射向薄透鏡，記錄離開透鏡後的方向。 凸透鏡甲、乙的出射情形皆為會聚。 出射光發散，反向延長線在鏡前相交。"
          },
          {
            "title": "適用界線",
            "content": "凸透鏡可使與主軸平行的光近似會聚至焦點，凹透鏡使光發散，反向延長似來自虛焦點。 平行光會聚於鏡後 12 cm，該距離為焦距。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_185_EX_01",
            "prompt": "平行光通過兩種透鏡：四束與主軸平行的光射向薄透鏡，記錄離開透鏡後的方向。 哪兩個使平行光會聚？",
            "steps": [
              "四束與主軸平行的光射向薄透鏡，記錄離開透鏡後的方向。",
              "凸透鏡甲、乙的出射情形皆為會聚。",
              "凸透鏡甲、乙的出射情形皆為會聚。"
            ],
            "answer": "兩凸透鏡；凸透鏡甲、乙的出射情形皆為會聚。",
            "why": "凸透鏡甲、乙的出射情形皆為會聚。"
          },
          {
            "id": "PHYCHM_R4_L_185_EX_02",
            "prompt": "平行光通過兩種透鏡：四束與主軸平行的光射向薄透鏡，記錄離開透鏡後的方向。 凹透鏡的焦點為何在鏡前？",
            "steps": [
              "四束與主軸平行的光射向薄透鏡，記錄離開透鏡後的方向。",
              "出射光發散，反向延長線在鏡前相交。",
              "出射光發散，反向延長線在鏡前相交。"
            ],
            "answer": "發散光反向延長線交會；出射光發散，反向延長線在鏡前相交。",
            "why": "出射光發散，反向延長線在鏡前相交。"
          },
          {
            "id": "PHYCHM_R4_L_185_EX_03",
            "prompt": "平行光通過兩種透鏡：四束與主軸平行的光射向薄透鏡，記錄離開透鏡後的方向。 凸透鏡甲焦距約多少？",
            "steps": [
              "四束與主軸平行的光射向薄透鏡，記錄離開透鏡後的方向。",
              "平行光會聚於鏡後 12 cm，該距離為焦距。",
              "平行光會聚於鏡後 12 cm，該距離為焦距。"
            ],
            "answer": "12 cm；平行光會聚於鏡後 12 cm，該距離為焦距。",
            "why": "平行光會聚於鏡後 12 cm，該距離為焦距。"
          }
        ],
        "misconceptions": [
          {
            "belief": "認為凸透鏡在任何物距下都只會把物體放大，忽略它也可成縮小實像。",
            "whyWrong": "像的大小與虛實取決於物距和焦距；遠物可形成倒立縮小實像。",
            "correction": "先判物體相對焦點與兩倍焦距的位置，再判像性質。"
          },
          {
            "belief": "把凹透鏡的發散光直接延長到鏡後，畫成鏡後真實會聚。",
            "whyWrong": "凹透鏡出射光實際發散，反向延長線才在物側虛焦點交會。",
            "correction": "出射光畫實線向外，反向延長畫虛線至鏡前焦點。"
          },
          {
            "belief": "平行光經凸透鏡會聚的位置叫像高，不把鏡到交點的距離辨認為焦距。",
            "whyWrong": "平行主軸光的會聚點是焦點，透鏡到焦點的距離是焦距。",
            "correction": "沿主軸量透鏡中心到焦點的距離。"
          },
          {
            "belief": "只看透鏡外形名稱，不追蹤出射光，就認為兩種透鏡都能在屏幕上接到平行光焦點。",
            "whyWrong": "凹透鏡的焦點是虛焦點，實際光不在鏡前或鏡後直接會聚成屏幕亮點。",
            "correction": "以實際出射線是否交會判斷能否投屏。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_185",
        "title": "平行光通過兩種透鏡",
        "body": "四束與主軸平行的光射向薄透鏡，記錄離開透鏡後的方向。",
        "dataTable": {
          "caption": "平行光通過兩種透鏡",
          "columns": [
            "透鏡",
            "出射情形",
            "延長線交點"
          ],
          "rows": [
            [
              "凸透鏡甲",
              "會聚",
              "鏡後 12 cm"
            ],
            [
              "凸透鏡乙",
              "會聚",
              "鏡後 20 cm"
            ],
            [
              "凹透鏡甲",
              "發散",
              "鏡前 10 cm"
            ],
            [
              "凹透鏡乙",
              "發散",
              "鏡前 16 cm"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_005"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_185_01",
          "stem": "與主軸平行的光束通過凸透鏡後，通常如何？",
          "options": [
            "會聚到像側焦點附近",
            "此時物體保持完全平行",
            "發散且似乎來自物側焦點",
            "此時物體沿原路反射"
          ],
          "answerIndex": 0,
          "rationales": [
            "平行主軸光經凸透鏡折射後通過像側焦點。",
            "凸透鏡會改變平行光方向。",
            "這是凹透鏡的典型描述。",
            "透鏡主要折射，不是鏡面反射。"
          ],
          "reviewEvidence": "平行主軸光經凸透鏡折射後通過像側焦點。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_185_02",
          "stem": "平行光通過凹透鏡後，出射光如何？",
          "options": [
            "向外發散，反向延長線交於物側虛焦點",
            "在鏡後形成實焦點",
            "全部沿主軸不偏折",
            "反射回光源"
          ],
          "answerIndex": 0,
          "rationales": [
            "凹透鏡使光發散，焦點由延長線定義。",
            "凹透鏡不使平行光實際會聚。",
            "只有光心附近一條特殊光可近似不偏。",
            "透鏡不是反射鏡。"
          ],
          "reviewEvidence": "凹透鏡使光發散，焦點由延長線定義。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_185_03",
          "stem": "平行光經凸透鏡後在鏡後12 cm會聚。焦距約為何？",
          "options": [
            "6 cm",
            "24 cm",
            "0 cm",
            "12 cm"
          ],
          "answerIndex": 3,
          "rationales": [
            "焦距不需再除以二。",
            "12 cm就是透鏡到焦點距離。",
            "會聚點不在透鏡中心。",
            "焦距定義為光心到焦點的距離12 cm。"
          ],
          "reviewEvidence": "焦距定義為光心到焦點的距離12 cm。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_185_04",
          "stem": "能否用白屏直接接到凹透鏡對平行光形成的焦點？",
          "options": [
            "能；屏放在鏡後任意位置",
            "能；屏放在鏡前焦點會有實際會聚",
            "不能；凹透鏡焦點是反向延長所得虛焦點",
            "不能；因凹透鏡完全不折射"
          ],
          "answerIndex": 2,
          "rationales": [
            "出射光在鏡後持續發散。",
            "鏡前焦點也沒有實際出射光會聚。",
            "虛焦點沒有實際光線交會，不能直接投屏。",
            "凹透鏡會折射，只是不會聚。"
          ],
          "reviewEvidence": "虛焦點沒有實際光線交會，不能直接投屏。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_185_05",
          "stem": "兩個凸透鏡對平行光的焦距分別12 cm與20 cm。哪個會聚能力較強？",
          "options": [
            "光線的焦距20 cm者",
            "焦距12 cm者",
            "兩者必相同",
            "無法由焦距比較"
          ],
          "answerIndex": 1,
          "rationales": [
            "相同入射條件下較短焦距偏折較強。",
            "較短距離內把平行光會聚，表示作用較強。",
            "焦距不同表示能力不相同。",
            "已給平行光焦距可定性比較。"
          ],
          "reviewEvidence": "較短距離內把平行光會聚，表示作用較強。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_185_06",
          "stem": "一道通過薄透鏡光心的光，在近軸作圖中通常如何處理？",
          "options": [
            "凸透鏡時必轉90°",
            "凹透鏡時必反射",
            "近似沿原方向直進",
            "必通過物側焦點後停止"
          ],
          "answerIndex": 2,
          "rationales": [
            "光心光線不作90°急轉。",
            "透鏡不是鏡面。",
            "薄透鏡主光線規則把通過光心者近似視為不偏折。",
            "它不必先通過焦點。"
          ],
          "reviewEvidence": "薄透鏡主光線規則把通過光心者近似視為不偏折。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_185_07",
          "stem": "凸透鏡一定使所有入射光線彼此會聚嗎？",
          "options": [
            "一定，任何光都到同一焦點",
            "不一定，因凸透鏡完全不折射",
            "一定，且焦點在物側",
            "不一定；應依入射方向作折射光路判定"
          ],
          "answerIndex": 3,
          "rationales": [
            "只有平行主軸光會聚到同一像側焦點。",
            "凸透鏡確實折射。",
            "平行光焦點在像側。",
            "焦點規則有入射條件，不能套給任意光束。"
          ],
          "reviewEvidence": "焦點規則有入射條件，不能套給任意光束。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_185_08",
          "stem": "若平行光經透鏡後越來越分開，該透鏡最可能為何？",
          "options": [
            "凸透鏡",
            "平面鏡",
            "凹透鏡",
            "不透明板"
          ],
          "answerIndex": 2,
          "rationales": [
            "凸透鏡通常使平行光會聚。",
            "平面鏡反射而非透射發散。",
            "平行出射光發散是凹透鏡特徵。",
            "不透明板不讓光束通過形成此路徑。"
          ],
          "reviewEvidence": "平行出射光發散是凹透鏡特徵。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_185_09",
          "stem": "焦距20 cm的凸透鏡與焦距12 cm者相比，平行光交點在哪裡？",
          "options": [
            "離透鏡較近",
            "都在12 cm",
            "此時物體位於鏡前",
            "離透鏡較遠"
          ],
          "answerIndex": 3,
          "rationales": [
            "20 cm大於12 cm。",
            "焦距資料不同。",
            "凸透鏡平行光實焦點在鏡後。",
            "平行光會聚距離就是焦距。"
          ],
          "reviewEvidence": "平行光會聚距離就是焦距。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_185_10",
          "stem": "要量凸透鏡焦距，哪種方法適合？",
          "options": [
            "用手摸透鏡厚度直接當焦距",
            "讓遠處物體或平行光成清晰實像，量透鏡到屏幕距離",
            "把屏幕放在物側任意位置",
            "只量透鏡直徑"
          ],
          "answerIndex": 1,
          "rationales": [
            "厚度不等於焦距。",
            "遠物入射近似平行，清晰像位置接近焦平面。",
            "實像通常在像側屏幕。",
            "直徑不是焦距。"
          ],
          "reviewEvidence": "遠物入射近似平行，清晰像位置接近焦平面。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_185_11",
          "stem": "凹透鏡出射光反向延長交在鏡前10 cm。此10 cm代表什麼？",
          "options": [
            "鏡後實像距離",
            "凹透鏡焦距的大小",
            "光實際倒退10 cm",
            "透鏡直徑"
          ],
          "answerIndex": 1,
          "rationales": [
            "交點在物側且為虛焦點。",
            "平行光發散的反向延長交點定義物側焦點。",
            "延長線不是實際光倒退。",
            "表中沒有直徑資訊。"
          ],
          "reviewEvidence": "平行光發散的反向延長交點定義物側焦點。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_185_12",
          "stem": "兩種透鏡最根本的平行光比較為何？",
          "options": [
            "兩者都會聚",
            "兩者都完全平行",
            "凸透鏡使其會聚，凹透鏡使其發散",
            "凸透鏡發散、凹透鏡會聚"
          ],
          "answerIndex": 2,
          "rationales": [
            "凹透鏡不會聚平行光。",
            "兩者都會改變方向。",
            "平行主軸光的出射趨勢可區分兩類透鏡。",
            "作用方向顛倒。"
          ],
          "reviewEvidence": "平行主軸光的出射趨勢可區分兩類透鏡。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_185_01",
          "stimulusId": "PHYCHM_R4_STIM_185",
          "stem": "表中哪兩個透鏡使平行光會聚？",
          "options": [
            "兩個凹透鏡",
            "凸甲與凹甲",
            "凸乙與凹乙",
            "凸透鏡甲、凸透鏡乙"
          ],
          "answerIndex": 3,
          "rationales": [
            "凹透鏡甲乙皆記為發散。",
            "凹甲不會聚。",
            "凹乙不會聚。",
            "表中兩個凸透鏡出射情形都為會聚。"
          ],
          "reviewEvidence": "表中兩個凸透鏡出射情形都為會聚。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_185_02",
          "stimulusId": "PHYCHM_R4_STIM_185",
          "stem": "凹透鏡的焦點為何標在鏡前？",
          "options": [
            "發散光的反向延長線在鏡前交會",
            "光真的倒退到鏡前",
            "鏡前另有光源",
            "凹透鏡不折射"
          ],
          "answerIndex": 0,
          "rationales": [
            "物側焦點是虛焦點，由延長線定位。",
            "延長線不是實際光路。",
            "不需要額外光源。",
            "凹透鏡靠折射使光發散。"
          ],
          "reviewEvidence": "物側焦點是虛焦點，由延長線定位。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "光路分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_185_03",
          "stimulusId": "PHYCHM_R4_STIM_185",
          "stem": "凸透鏡甲的焦距約多少？",
          "options": [
            "10 cm",
            "12 cm",
            "16 cm",
            "20 cm"
          ],
          "answerIndex": 1,
          "rationales": [
            "10 cm是凹透鏡甲的虛焦距大小。",
            "凸透鏡甲的平行光在鏡後12 cm會聚。",
            "16 cm屬凹透鏡乙。",
            "20 cm屬凸透鏡乙。"
          ],
          "reviewEvidence": "凸透鏡甲的平行光在鏡後12 cm會聚。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "證據評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S186",
      "title": "由物距判斷凸透鏡像的基本性質",
      "authorityRefs": [
        "AUTH-NATURAL-LC-KA-4-7",
        "AUTH-NATURAL-LC-KA-4-8",
        "AUTH-NATURAL-LC-KA-4-9",
        "AUTH-NATURAL-LP-PE-4-1",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_005"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_186",
        "objective": "能掌握物距判斷凸透鏡像的基本性質的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "物距大於凸透鏡焦距時可成倒立實像；物在焦點內時成正立放大虛像。"
          },
          {
            "title": "證據判讀",
            "content": "同一凸透鏡焦距 10 cm，改變物距並在能成實像時移動屏幕接像。 物距為 2f，形成倒立等大實像。 物距小於焦距時形成虛像，屏幕接不到。"
          },
          {
            "title": "適用界線",
            "content": "物距大於凸透鏡焦距時可成倒立實像；物在焦點內時成正立放大虛像。 表中由倒立縮小變為倒立放大。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_186_EX_01",
            "prompt": "凸透鏡物距與成像：同一凸透鏡焦距 10 cm，改變物距並在能成實像時移動屏幕接像。 物距 20 cm 的像如何？",
            "steps": [
              "同一凸透鏡焦距 10 cm，改變物距並在能成實像時移動屏幕接像。",
              "物距為 2f，形成倒立等大實像。",
              "物距為 2f，形成倒立等大實像。"
            ],
            "answer": "倒立等大實像；物距為 2f，形成倒立等大實像。",
            "why": "物距為 2f，形成倒立等大實像。"
          },
          {
            "id": "PHYCHM_R4_L_186_EX_02",
            "prompt": "凸透鏡物距與成像：同一凸透鏡焦距 10 cm，改變物距並在能成實像時移動屏幕接像。 哪次無法在屏上接到像？",
            "steps": [
              "同一凸透鏡焦距 10 cm，改變物距並在能成實像時移動屏幕接像。",
              "物距小於焦距時形成虛像，屏幕接不到。",
              "物距小於焦距時形成虛像，屏幕接不到。"
            ],
            "answer": "6 cm；物距小於焦距時形成虛像，屏幕接不到。",
            "why": "物距小於焦距時形成虛像，屏幕接不到。"
          },
          {
            "id": "PHYCHM_R4_L_186_EX_03",
            "prompt": "凸透鏡物距與成像：同一凸透鏡焦距 10 cm，改變物距並在能成實像時移動屏幕接像。 物距由 30 降到 15 cm，實像大小如何？",
            "steps": [
              "同一凸透鏡焦距 10 cm，改變物距並在能成實像時移動屏幕接像。",
              "表中由倒立縮小變為倒立放大。",
              "表中由倒立縮小變為倒立放大。"
            ],
            "answer": "由縮小變放大；表中由倒立縮小變為倒立放大。",
            "why": "表中由倒立縮小變為倒立放大。"
          }
        ],
        "misconceptions": [
          {
            "belief": "認為凸透鏡形成的像都能投在屏幕上，包括物體位於焦距內的放大像。",
            "whyWrong": "焦距內形成正立放大虛像，出射光未實際會聚，屏幕接不到。",
            "correction": "以是否有實際折射光交會區分實像與虛像。"
          },
          {
            "belief": "把凸透鏡所有像都判成倒立，忽略放大鏡的正立虛像。",
            "whyWrong": "物距小於焦距時，眼睛看到的是折射光延長形成的正立虛像。",
            "correction": "先比較物距與焦距，再判正倒與虛實。"
          },
          {
            "belief": "物體在兩倍焦距外向焦點靠近時，認為實像會越來越小。",
            "whyWrong": "物體由遠處移近至焦點外時，實像通常變大且像距增加。",
            "correction": "用主光線交點或標準區間比較，不憑直覺。"
          },
          {
            "belief": "物體恰在焦點時，認為屏幕放在兩倍焦距處就能得到等大像。",
            "whyWrong": "物在焦點時出射光近似平行，有限距離屏幕無法接到清晰像。",
            "correction": "等大實像條件是物距兩倍焦距，不是焦距。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_186",
        "title": "凸透鏡物距與成像",
        "body": "同一凸透鏡焦距 10 cm，改變物距並在能成實像時移動屏幕接像。",
        "dataTable": {
          "caption": "凸透鏡物距與成像",
          "columns": [
            "物距",
            "屏幕結果",
            "像的性質"
          ],
          "rows": [
            [
              "30 cm",
              "可接到",
              "倒立縮小"
            ],
            [
              "20 cm",
              "可接到",
              "倒立等大"
            ],
            [
              "15 cm",
              "可接到",
              "倒立放大"
            ],
            [
              "6 cm",
              "接不到",
              "正立放大虛像"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_005"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_186_01",
          "stem": "凸透鏡焦距10 cm，物距20 cm。像的性質為何？",
          "options": [
            "正立、等大、實像",
            "倒立、縮小、虛像",
            "倒立、等大、實像",
            "正立、放大、虛像"
          ],
          "answerIndex": 2,
          "rationales": [
            "實像在2f時為倒立。",
            "2f條件不是虛像。",
            "物距＝2f，形成倒立等大實像。",
            "正立放大虛像需物距小於f。"
          ],
          "reviewEvidence": "物距＝2f，形成倒立等大實像。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_186_02",
          "stem": "同一透鏡焦距10 cm，物距30 cm。像的性質為何？",
          "options": [
            "倒立、放大、實像",
            "正立、放大、虛像",
            "正立、縮小、實像",
            "倒立、縮小、實像"
          ],
          "answerIndex": 3,
          "rationales": [
            "放大實像出現在f與2f間。",
            "虛像需物距小於f。",
            "實像為倒立。",
            "物距大於2f，形成倒立縮小實像。"
          ],
          "reviewEvidence": "物距大於2f，形成倒立縮小實像。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_186_03",
          "stem": "焦距10 cm、物距15 cm時，像的性質為何？",
          "options": [
            "倒立、縮小、實像",
            "正立、放大、虛像",
            "正立、等大、實像",
            "倒立、放大、實像"
          ],
          "answerIndex": 3,
          "rationales": [
            "15 cm介於f與2f，不是縮小區。",
            "物距仍大於f，可成實像。",
            "此區不成正立等大像。",
            "f＜物距＜2f，形成倒立放大實像。"
          ],
          "reviewEvidence": "f＜物距＜2f，形成倒立放大實像。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_186_04",
          "stem": "焦距10 cm、物距6 cm時，屏幕能否接到清晰像？",
          "options": [
            "能；形成倒立縮小像",
            "能；形成倒立等大像",
            "不能；形成正立放大虛像",
            "不能；因完全沒有像"
          ],
          "answerIndex": 2,
          "rationales": [
            "物距小於f不成倒立實像。",
            "等大實像需物距2f。",
            "6 cm＜10 cm，折射光延長形成正立放大虛像。",
            "仍可由眼睛觀察虛像。"
          ],
          "reviewEvidence": "6 cm＜10 cm，折射光延長形成正立放大虛像。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_186_05",
          "stem": "物體恰放在凸透鏡焦點上，出射光近似如何？",
          "options": [
            "在2f處會聚成等大像",
            "此時物體立即反射回物體",
            "互相平行，有限屏距難成清晰像",
            "形成焦距內正立虛像"
          ],
          "answerIndex": 2,
          "rationales": [
            "2f等大條件是物在2f。",
            "透鏡主要折射。",
            "物點在物側焦點時，主要出射光平行。",
            "焦點本身是區間邊界，不等同焦內。"
          ],
          "reviewEvidence": "物點在物側焦點時，主要出射光平行。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_186_06",
          "stem": "物距由30 cm減到15 cm，焦距維持10 cm。實像大小如何？",
          "options": [
            "由放大變為縮小",
            "此時物體始終等大",
            "由縮小變為放大",
            "兩次都為虛像"
          ],
          "answerIndex": 2,
          "rationales": [
            "區間方向判反。",
            "只有物距20 cm時等大。",
            "30 cm＞2f為縮小；15 cm介於f、2f為放大。",
            "兩物距皆大於焦距。"
          ],
          "reviewEvidence": "30 cm＞2f為縮小；15 cm介於f、2f為放大。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_186_07",
          "stem": "用凸透鏡當放大鏡時，物體應放在哪裡？",
          "options": [
            "透鏡與焦點之間",
            "兩倍焦距外",
            "恰在兩倍焦距",
            "像側焦點後方"
          ],
          "answerIndex": 0,
          "rationales": [
            "物距小於焦距時可觀察正立放大虛像。",
            "2f外形成縮小實像。",
            "2f形成等大實像。",
            "物體需位於物側。"
          ],
          "reviewEvidence": "物距小於焦距時可觀察正立放大虛像。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_186_08",
          "stem": "要在屏幕上取得凸透鏡像，物距應滿足什麼？",
          "options": [
            "大於焦距",
            "小於焦距",
            "必等於焦距",
            "任何物距皆可"
          ],
          "answerIndex": 0,
          "rationales": [
            "物距大於f時折射光可在像側實際會聚。",
            "焦內像是虛像。",
            "焦點出射光近似平行。",
            "並非所有物距都成實像。"
          ],
          "reviewEvidence": "物距大於f時折射光可在像側實際會聚。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_186_09",
          "stem": "相機要把遠景清晰投到感光元件，鏡頭形成哪種像？",
          "options": [
            "倒立縮小實像",
            "正立放大虛像",
            "正立等大實像",
            "倒立放大虛像"
          ],
          "answerIndex": 0,
          "rationales": [
            "遠物相對焦距很大，凸透鏡形成靠近焦點的縮小實像。",
            "感光元件需接到實際光。",
            "遠景通常不是等大。",
            "虛像不能直接落在感光面。"
          ],
          "reviewEvidence": "遠物相對焦距很大，凸透鏡形成靠近焦點的縮小實像。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_186_10",
          "stem": "投影機要在遠處屏幕形成放大像，物體相對凸透鏡通常放在哪個區間？",
          "options": [
            "光線的焦距內",
            "兩倍焦距外",
            "恰在焦點",
            "焦距與兩倍焦距之間"
          ],
          "answerIndex": 3,
          "rationales": [
            "焦內成虛像不能投屏。",
            "2f外成縮小實像。",
            "焦點處難在有限屏距成像。",
            "f與2f間可形成倒立放大實像。"
          ],
          "reviewEvidence": "f與2f間可形成倒立放大實像。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_186_11",
          "stem": "學生把物體放焦距內，四處移動屏幕都接不到像。合理結論為何？",
          "options": [
            "透鏡一定損壞",
            "像是虛像，需要由透鏡另一側用眼睛觀察",
            "物體沒有發光或反射光",
            "像必在屏幕後方成實像"
          ],
          "answerIndex": 1,
          "rationales": [
            "焦內接不到屏是預期結果。",
            "折射光發散，其延長線在物側形成虛像。",
            "若眼睛能看見物體光，仍可成虛像。",
            "沒有實際會聚位置。"
          ],
          "reviewEvidence": "折射光發散，其延長線在物側形成虛像。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_186_12",
          "stem": "焦距12 cm的凸透鏡，物距24 cm。像高與物高關係為何？",
          "options": [
            "像高約物高一半",
            "像高約物高兩倍",
            "無像",
            "理想近軸下約等大"
          ],
          "answerIndex": 3,
          "rationales": [
            "一半對應較遠物距區。",
            "兩倍不是2f條件。",
            "物距大於焦距可成像。",
            "物距＝2f，成倒立等大實像。"
          ],
          "reviewEvidence": "物距＝2f，成倒立等大實像。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_186_01",
          "stimulusId": "PHYCHM_R4_STIM_186",
          "stem": "表中物距20 cm時的像為何？",
          "options": [
            "倒立等大實像",
            "正立等大實像",
            "倒立縮小虛像",
            "沒有像"
          ],
          "answerIndex": 0,
          "rationales": [
            "焦距10 cm，20 cm＝2f。",
            "實像方向倒立。",
            "虛實與大小都不符2f。",
            "表中屏幕可接到。"
          ],
          "reviewEvidence": "焦距10 cm，20 cm＝2f。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_186_02",
          "stimulusId": "PHYCHM_R4_STIM_186",
          "stem": "表中哪一物距無法在屏幕接到像？",
          "options": [
            "30 cm",
            "6 cm",
            "20 cm",
            "15 cm"
          ],
          "answerIndex": 1,
          "rationales": [
            "30 cm大於f。",
            "6 cm小於10 cm焦距，形成虛像。",
            "20 cm大於f。",
            "15 cm也大於f。"
          ],
          "reviewEvidence": "6 cm小於10 cm焦距，形成虛像。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "光路分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_186_03",
          "stimulusId": "PHYCHM_R4_STIM_186",
          "stem": "物距由30 cm減到15 cm時，實像大小如何？",
          "options": [
            "此時物體始終等大",
            "由縮小變為放大",
            "由放大變縮小",
            "直接消失"
          ],
          "answerIndex": 1,
          "rationales": [
            "只有20 cm時等大。",
            "跨過2f後由縮小區進入放大實像區。",
            "變化方向相反。",
            "15 cm仍大於f，可成實像。"
          ],
          "reviewEvidence": "跨過2f後由縮小區進入放大實像區。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "證據評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S187",
      "title": "用光線作圖判斷透鏡成像",
      "authorityRefs": [
        "AUTH-NATURAL-LC-KA-4-7",
        "AUTH-NATURAL-LC-KA-4-8",
        "AUTH-NATURAL-LC-KA-4-9",
        "AUTH-NATURAL-LP-PE-4-1",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_005"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_187",
        "objective": "能掌握光線作圖判斷透鏡成像的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "凸透鏡作圖可選用平行主軸後通過焦點、通過光心近似不偏折等主要光線。"
          },
          {
            "title": "證據判讀",
            "content": "學生畫凸透鏡成像，逐條記錄入射光與折射光的關係。 平行主軸光經凸透鏡後通過像側焦點。 通過薄透鏡光心的丙近似直進。"
          },
          {
            "title": "適用界線",
            "content": "凸透鏡作圖可選用平行主軸後通過焦點、通過光心近似不偏折等主要光線。 兩條折射光的實際或延長交會才能定位像。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_187_EX_01",
            "prompt": "三條主光線作圖檢核：學生畫凸透鏡成像，逐條記錄入射光與折射光的關係。 甲折射後通過何處？",
            "steps": [
              "學生畫凸透鏡成像，逐條記錄入射光與折射光的關係。",
              "平行主軸光經凸透鏡後通過像側焦點。",
              "平行主軸光經凸透鏡後通過像側焦點。"
            ],
            "answer": "像側焦點；平行主軸光經凸透鏡後通過像側焦點。",
            "why": "平行主軸光經凸透鏡後通過像側焦點。"
          },
          {
            "id": "PHYCHM_R4_L_187_EX_02",
            "prompt": "三條主光線作圖檢核：學生畫凸透鏡成像，逐條記錄入射光與折射光的關係。 哪條可近似不偏折？",
            "steps": [
              "學生畫凸透鏡成像，逐條記錄入射光與折射光的關係。",
              "通過薄透鏡光心的丙近似直進。",
              "通過薄透鏡光心的丙近似直進。"
            ],
            "answer": "丙；通過薄透鏡光心的丙近似直進。",
            "why": "通過薄透鏡光心的丙近似直進。"
          },
          {
            "id": "PHYCHM_R4_L_187_EX_03",
            "prompt": "三條主光線作圖檢核：學生畫凸透鏡成像，逐條記錄入射光與折射光的關係。 定位像至少需要什麼？",
            "steps": [
              "學生畫凸透鏡成像，逐條記錄入射光與折射光的關係。",
              "兩條折射光的實際或延長交會才能定位像。",
              "兩條折射光的實際或延長交會才能定位像。"
            ],
            "answer": "兩條可追蹤光線交會；兩條折射光的實際或延長交會才能定位像。",
            "why": "兩條折射光的實際或延長交會才能定位像。"
          }
        ],
        "misconceptions": [
          {
            "belief": "只畫一條主光線就任意指定像點，沒有第二條光線交會作證。",
            "whyWrong": "一條光線只能限制像在該線上，不能唯一決定位置。",
            "correction": "至少畫兩條獨立主光線，以實際交會或延長線交會定位像。"
          },
          {
            "belief": "把平行主軸入射光畫成折射後通過物側焦點，焦點方向用反。",
            "whyWrong": "凸透鏡平行光折射後通過像側焦點。",
            "correction": "先標物側與像側，沿光傳方向使用像側焦點。"
          },
          {
            "belief": "通過光心的主光線畫成在透鏡處大幅折向主軸。",
            "whyWrong": "薄透鏡近軸模型中，通過光心的光近似不偏折。",
            "correction": "讓該線穿過光心後沿原直線延伸。"
          },
          {
            "belief": "兩條折射光交會到像點後就停止，認為像點會吸收所有光。",
            "whyWrong": "像點是光線會聚後再發散的位置，光仍可繼續傳播到屏幕或眼睛。",
            "correction": "作圖可延伸交會後光線，並在交點標像而不畫終止符。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_187",
        "title": "三條主光線作圖檢核",
        "body": "學生畫凸透鏡成像，逐條記錄入射光與折射光的關係。",
        "dataTable": {
          "caption": "三條主光線作圖檢核",
          "columns": [
            "光線",
            "入射方向",
            "折射後"
          ],
          "rows": [
            [
              "甲",
              "平行主軸",
              "通過像側焦點"
            ],
            [
              "乙",
              "通過物側焦點",
              "平行主軸"
            ],
            [
              "丙",
              "通過光心",
              "近似直進"
            ],
            [
              "丁",
              "任意方向",
              "待由折射判定"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_005"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_187_01",
          "stem": "凸透鏡前一條光平行主軸入射，折射後應通過哪裡？",
          "options": [
            "像側焦點",
            "物側焦點",
            "光心後沿原路",
            "鏡面入射點"
          ],
          "answerIndex": 0,
          "rationales": [
            "平行主軸光經凸透鏡後通過像側焦點。",
            "物側焦點是入射規則的另一端。",
            "平行光不等同通過光心光。",
            "透鏡不是鏡面。"
          ],
          "reviewEvidence": "平行主軸光經凸透鏡後通過像側焦點。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_187_02",
          "stem": "入射光先通過物側焦點再到凸透鏡，折射後如何？",
          "options": [
            "通過像側焦點再彎折",
            "此時物體沿原路反射",
            "垂直主軸",
            "平行主軸"
          ],
          "answerIndex": 3,
          "rationales": [
            "通過像側焦點是平行入射規則。",
            "透鏡主要折射。",
            "沒有規則使其垂直主軸。",
            "凸透鏡主光線規則為物側焦點入射後平行主軸。"
          ],
          "reviewEvidence": "凸透鏡主光線規則為物側焦點入射後平行主軸。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_187_03",
          "stem": "一條光通過薄凸透鏡光心，近軸作圖時如何畫？",
          "options": [
            "折向像側焦點",
            "反射回物側",
            "近似沿原直線",
            "轉90°沿主軸"
          ],
          "answerIndex": 2,
          "rationales": [
            "通過光心者不是平行光規則。",
            "透鏡不作鏡面反射。",
            "光心光線在薄透鏡模型中近似不偏折。",
            "不會突然轉直角。"
          ],
          "reviewEvidence": "光心光線在薄透鏡模型中近似不偏折。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_187_04",
          "stem": "定位凸透鏡實像，至少需要什麼？",
          "options": [
            "任意一條光線",
            "兩條可追蹤折射光的實際交會",
            "只標透鏡焦距數字",
            "只畫物體高度"
          ],
          "answerIndex": 1,
          "rationales": [
            "一條線上有無限多可能點。",
            "兩條來自同一物點的折射線交點唯一定位像點。",
            "焦點本身不等於任意物體像點。",
            "物高不給像位置。"
          ],
          "reviewEvidence": "兩條來自同一物點的折射線交點唯一定位像點。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_187_05",
          "stem": "物在焦距內時，兩條折射光在像側發散。如何定位虛像？",
          "options": [
            "把折射光反向延長到物側交會",
            "把實際光硬折到像側交會",
            "在屏幕任意點標像",
            "不需任何光線"
          ],
          "answerIndex": 0,
          "rationales": [
            "發散光的物側反向延長線交會形成虛像。",
            "實際路徑不能任意更改。",
            "虛像位置不是任意屏幕點。",
            "仍需延長線作圖。"
          ],
          "reviewEvidence": "發散光的物側反向延長線交會形成虛像。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_187_06",
          "stem": "畫主光線時，為何要先標主軸、光心與兩焦點？",
          "options": [
            "用來決定物體質量",
            "用來改變光的顏色",
            "這些基準決定三條常用光線的折射方向",
            "只是裝飾，和作圖無關"
          ],
          "answerIndex": 2,
          "rationales": [
            "質量不由光學基準決定。",
            "幾何標記不改色。",
            "平行、焦點與光心規則都依這些位置定義。",
            "缺少基準無法套規則。"
          ],
          "reviewEvidence": "平行、焦點與光心規則都依這些位置定義。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_187_07",
          "stem": "兩條折射光在像側交會後，光會如何？",
          "options": [
            "此時物體停在像點",
            "變成物體質量",
            "此時物體沿原路全部返回",
            "繼續傳播並由交點向外發散"
          ],
          "answerIndex": 3,
          "rationales": [
            "像點不是吸收終點。",
            "光不變成質量。",
            "沒有鏡面使全部原路反射。",
            "實像點是光線穿越的會聚位置。"
          ],
          "reviewEvidence": "實像點是光線穿越的會聚位置。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_187_08",
          "stem": "作圖中一條平行主軸光折射後沒有通過像側焦點。最可能的問題為何？",
          "options": [
            "焦點標錯或折射線規則用錯",
            "物體一定沒有像",
            "光心必須移到物體上",
            "平行線不能通過透鏡"
          ],
          "answerIndex": 0,
          "rationales": [
            "規則直接要求該折射線通過像側焦點。",
            "其他主光線仍可能成像，先查作圖。",
            "光心屬透鏡。",
            "平行光可入射透鏡。"
          ],
          "reviewEvidence": "規則直接要求該折射線通過像側焦點。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_187_09",
          "stem": "物體頂端發出的兩條主光線交於主軸下方。像的方向如何？",
          "options": [
            "正立",
            "無法由交點高度判斷",
            "一定等大",
            "倒立"
          ],
          "answerIndex": 3,
          "rationales": [
            "主軸下方相對物體頂端在上方，方向相反。",
            "交點相對主軸可判正倒。",
            "大小還需比較像高。",
            "物體頂端像落在主軸下方，形成倒立像。"
          ],
          "reviewEvidence": "物體頂端像落在主軸下方，形成倒立像。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_187_10",
          "stem": "兩條作圖光線沒有精確交於同一點，只差少量。應如何處理？",
          "options": [
            "檢查線寬、焦點與量角，取合理交會區並報告作圖誤差",
            "任意選最遠點",
            "宣稱透鏡不成像",
            "刪除其中一條光線"
          ],
          "answerIndex": 0,
          "rationales": [
            "幾何作圖有線寬與標點誤差，應先檢查基準。",
            "最遠點沒有依據。",
            "小差異常來自繪圖精度。",
            "刪線會失去交會驗證。"
          ],
          "reviewEvidence": "幾何作圖有線寬與標點誤差，應先檢查基準。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_187_11",
          "stem": "若只知道一條任意入射光，沒有透鏡參數，能否唯一畫出折射線？",
          "options": [
            "能，永遠沿原線",
            "不能，還需透鏡類型與焦點等資訊",
            "能，永遠通過光心",
            "能，永遠平行主軸"
          ],
          "answerIndex": 1,
          "rationales": [
            "任意光不一定通過光心。",
            "折射方向取決於透鏡光學性質與入射幾何。",
            "題目未說通過光心。",
            "也未說入射光通過物側焦點。"
          ],
          "reviewEvidence": "折射方向取決於透鏡光學性質與入射幾何。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_187_12",
          "stem": "凸透鏡作圖中，哪兩條光線最常用來快速定位像？",
          "options": [
            "兩條都沿鏡面反射",
            "兩條都停在透鏡",
            "任意兩條互不相關直線",
            "平行主軸後過焦點，以及通過光心近似直進"
          ],
          "answerIndex": 3,
          "rationales": [
            "透鏡不是平面鏡。",
            "光會穿透並折射。",
            "需使用正確可追蹤規則。",
            "兩條規則光從同一物點出發，其交會即可定位。"
          ],
          "reviewEvidence": "兩條規則光從同一物點出發，其交會即可定位。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_187_01",
          "stimulusId": "PHYCHM_R4_STIM_187",
          "stem": "表中甲光線折射後通過何處？",
          "options": [
            "光心",
            "像側焦點",
            "物側焦點",
            "鏡面"
          ],
          "answerIndex": 1,
          "rationales": [
            "甲入射平行主軸，不是通過光心。",
            "平行主軸光經凸透鏡後通過像側焦點。",
            "物側焦點在入射側。",
            "透鏡不是鏡面。"
          ],
          "reviewEvidence": "平行主軸光經凸透鏡後通過像側焦點。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_187_02",
          "stimulusId": "PHYCHM_R4_STIM_187",
          "stem": "表中哪一條光線可近似不偏折？",
          "options": [
            "甲",
            "丙",
            "乙",
            "丁"
          ],
          "answerIndex": 1,
          "rationales": [
            "甲折向像側焦點。",
            "丙通過光心，近似沿原方向。",
            "乙折成平行主軸。",
            "丁方向需依條件判定。"
          ],
          "reviewEvidence": "丙通過光心，近似沿原方向。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "光路分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_187_03",
          "stimulusId": "PHYCHM_R4_STIM_187",
          "stem": "定位一個像點至少需要什麼？",
          "options": [
            "只畫物體",
            "只標焦點",
            "兩條可追蹤光線的實際或延長交會",
            "任意猜一點"
          ],
          "answerIndex": 2,
          "rationales": [
            "物體位置不足以標像。",
            "焦點不等於所有像點。",
            "兩條獨立光路的交點提供唯一幾何位置。",
            "猜測不可重現。"
          ],
          "reviewEvidence": "兩條獨立光路的交點提供唯一幾何位置。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "證據評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S188",
      "title": "連結透鏡成像與眼鏡相機等應用",
      "authorityRefs": [
        "AUTH-NATURAL-LC-KA-4-7",
        "AUTH-NATURAL-LC-KA-4-8",
        "AUTH-NATURAL-LC-KA-4-9",
        "AUTH-NATURAL-LP-PE-4-1",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_005"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_188",
        "objective": "能掌握透鏡成像與眼鏡相機等應用的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "近視眼需發散透鏡輔助將遠物像後移至視網膜；相機和眼睛均利用會聚系統成實像。"
          },
          {
            "title": "證據判讀",
            "content": "表中列出光學裝置的主要透鏡及是否把像接在感光面或視網膜。 相機鏡頭把實像投到感光元件。 表中近視眼鏡以凹透鏡使光先發散。"
          },
          {
            "title": "適用界線",
            "content": "近視眼需發散透鏡輔助將遠物像後移至視網膜；相機和眼睛均利用會聚系統成實像。 物在凸透鏡焦距內可見正立放大虛像。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_188_EX_01",
            "prompt": "眼鏡與相機透鏡功能：表中列出光學裝置的主要透鏡及是否把像接在感光面或視網膜。 哪個直接把實像接在感光元件？",
            "steps": [
              "表中列出光學裝置的主要透鏡及是否把像接在感光面或視網膜。",
              "相機鏡頭把實像投到感光元件。",
              "相機鏡頭把實像投到感光元件。"
            ],
            "answer": "相機；相機鏡頭把實像投到感光元件。",
            "why": "相機鏡頭把實像投到感光元件。"
          },
          {
            "id": "PHYCHM_R4_L_188_EX_02",
            "prompt": "眼鏡與相機透鏡功能：表中列出光學裝置的主要透鏡及是否把像接在感光面或視網膜。 近視眼鏡使用哪種透鏡？",
            "steps": [
              "表中列出光學裝置的主要透鏡及是否把像接在感光面或視網膜。",
              "表中近視眼鏡以凹透鏡使光先發散。",
              "表中近視眼鏡以凹透鏡使光先發散。"
            ],
            "answer": "凹透鏡；表中近視眼鏡以凹透鏡使光先發散。",
            "why": "表中近視眼鏡以凹透鏡使光先發散。"
          },
          {
            "id": "PHYCHM_R4_L_188_EX_03",
            "prompt": "眼鏡與相機透鏡功能：表中列出光學裝置的主要透鏡及是否把像接在感光面或視網膜。 放大鏡常讓物體置於何處？",
            "steps": [
              "表中列出光學裝置的主要透鏡及是否把像接在感光面或視網膜。",
              "物在凸透鏡焦距內可見正立放大虛像。",
              "物在凸透鏡焦距內可見正立放大虛像。"
            ],
            "answer": "焦距內；物在凸透鏡焦距內可見正立放大虛像。",
            "why": "物在凸透鏡焦距內可見正立放大虛像。"
          }
        ],
        "misconceptions": [
          {
            "belief": "近視眼看遠處不清楚，就選凸透鏡再加強會聚，使焦點更往視網膜前移。",
            "whyWrong": "近視遠物焦點原已在視網膜前，需要凹透鏡先發散使焦點後移。",
            "correction": "依未矯正焦點位置選鏡片；視網膜前用凹透鏡。"
          },
          {
            "belief": "相機螢幕能看到照片，就認為鏡頭形成的是正立虛像，無法落在感光元件。",
            "whyWrong": "感光元件必須接到實際會聚光，相機鏡頭形成倒立實像。",
            "correction": "以能否在感光面接到像判斷實像。"
          },
          {
            "belief": "使用放大鏡時把物體放在兩倍焦距外，仍期待看到正立放大虛像。",
            "whyWrong": "物距大於兩倍焦距形成倒立縮小實像；放大鏡需物距小於焦距。",
            "correction": "將物體置於凸透鏡與物側焦點之間。"
          },
          {
            "belief": "眼球的視網膜只接收神經訊號，不接收光學成像，認為像形成在視神經中。",
            "whyWrong": "角膜與水晶體把光會聚在視網膜，感光細胞再轉換為神經訊號。",
            "correction": "依序區分光學成像位置與神經傳遞路徑。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_188",
        "title": "眼鏡與相機透鏡功能",
        "body": "表中列出光學裝置的主要透鏡及是否把像接在感光面或視網膜。",
        "dataTable": {
          "caption": "眼鏡與相機透鏡功能",
          "columns": [
            "裝置",
            "主要透鏡作用",
            "接像位置"
          ],
          "rows": [
            [
              "相機",
              "凸透鏡會聚",
              "感光元件"
            ],
            [
              "眼球",
              "凸透鏡系統會聚",
              "視網膜"
            ],
            [
              "近視眼鏡",
              "凹透鏡發散",
              "由眼球再成像"
            ],
            [
              "放大鏡",
              "凸透鏡",
              "眼睛觀察虛像"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_005"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_188_01",
          "stem": "相機鏡頭要把景物記錄在感光元件上，應形成哪種像？",
          "options": [
            "鏡頭前的虛像",
            "平面鏡等大像",
            "落在感光面的實像",
            "無法投屏的虛像"
          ],
          "answerIndex": 2,
          "rationales": [
            "感光面在鏡後接收光。",
            "相機鏡頭不是平面鏡。",
            "凸透鏡系統使景物光實際會聚在感光元件。",
            "若無實際光到達就無法感光。"
          ],
          "reviewEvidence": "凸透鏡系統使景物光實際會聚在感光元件。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_188_02",
          "stem": "近視眼看遠物時焦點落在視網膜前，應配何種鏡片？",
          "options": [
            "凸透鏡",
            "平面鏡",
            "三稜鏡",
            "凹透鏡"
          ],
          "answerIndex": 3,
          "rationales": [
            "凸透鏡會再加強會聚。",
            "平面鏡不提供所需屈光矯正。",
            "三稜鏡偏折方向但非此標準矯正。",
            "凹透鏡先使入眼光發散，讓眼球成像位置後移到視網膜。"
          ],
          "reviewEvidence": "凹透鏡先使入眼光發散，讓眼球成像位置後移到視網膜。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_188_03",
          "stem": "放大鏡要讓眼睛看到正立放大像，物體應放在哪裡？",
          "options": [
            "凸透鏡焦距內",
            "兩倍焦距外",
            "恰在兩倍焦距",
            "鏡後感光面"
          ],
          "answerIndex": 0,
          "rationales": [
            "物距小於焦距形成正立放大虛像。",
            "2f外形成縮小實像。",
            "2f形成等大實像。",
            "物體位於透鏡物側。"
          ],
          "reviewEvidence": "物距小於焦距形成正立放大虛像。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_188_04",
          "stem": "眼球中實際接收光學實像的構造為何？",
          "options": [
            "視網膜",
            "視神經",
            "瞳孔外空氣",
            "眼皮"
          ],
          "answerIndex": 0,
          "rationales": [
            "角膜與水晶體將光會聚於眼球後方視網膜。",
            "視神經傳遞轉換後訊號。",
            "空氣不屬眼球接像面。",
            "眼皮不是感光成像構造。"
          ],
          "reviewEvidence": "角膜與水晶體將光會聚於眼球後方視網膜。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_188_05",
          "stem": "相機對焦時移動鏡片或感光元件的目的為何？",
          "options": [
            "把實像改成聲波",
            "讓所有物距都成同一像距且不調整",
            "使光速變慢到零",
            "使不同物距的實像清晰落在感光面"
          ],
          "answerIndex": 3,
          "rationales": [
            "相機記錄光，不轉聲。",
            "物距改變時像距需配合。",
            "對焦不令光速為零。",
            "調整鏡頭與感光面相對位置，使會聚面重合。"
          ],
          "reviewEvidence": "調整鏡頭與感光面相對位置，使會聚面重合。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_188_06",
          "stem": "遠視眼在未矯正時焦點傾向落在視網膜後，可用何種鏡片輔助？",
          "options": [
            "凹透鏡",
            "平面鏡",
            "凸透鏡",
            "不透明片"
          ],
          "answerIndex": 2,
          "rationales": [
            "凹透鏡會使光更發散。",
            "平面鏡不加強會聚。",
            "凸透鏡先會聚入眼光，使焦點前移至視網膜。",
            "不透明片只減少光量。"
          ],
          "reviewEvidence": "凸透鏡先會聚入眼光，使焦點前移至視網膜。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_188_07",
          "stem": "近視眼鏡為何不能說「把像直接投在眼鏡片上」？",
          "options": [
            "眼鏡片就是視網膜",
            "鏡片先改變入眼光方向，最後仍由眼球在視網膜成像",
            "眼鏡完全不折射光",
            "近視不涉及光路"
          ],
          "answerIndex": 1,
          "rationales": [
            "視網膜位於眼球內。",
            "眼鏡是前置光學元件，不是接像屏。",
            "凹透鏡正是靠折射作用。",
            "近視矯正是光路問題。"
          ],
          "reviewEvidence": "眼鏡是前置光學元件，不是接像屏。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_188_08",
          "stem": "相機與眼球的共同點為何？",
          "options": [
            "都用凹透鏡作主要成像元件",
            "都以會聚光學系統把實像形成在感光面",
            "都只形成鏡後虛像",
            "都用耳朵接收光"
          ],
          "answerIndex": 1,
          "rationales": [
            "主要成像需會聚系統。",
            "相機感光元件與眼球視網膜都接收光學實像。",
            "感光面需實際光會聚。",
            "耳朵不是光感受器。"
          ],
          "reviewEvidence": "相機感光元件與眼球視網膜都接收光學實像。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_188_09",
          "stem": "放大鏡與相機在成像用途上的主要差別為何？",
          "options": [
            "兩者都只形成虛像",
            "放大鏡供眼睛看虛像，相機把實像落在感光面",
            "兩者都必用凹透鏡",
            "放大鏡不會折射光"
          ],
          "answerIndex": 1,
          "rationales": [
            "相機需實像。",
            "不同物距與接像方式使一者觀察虛像、一者記錄實像。",
            "兩者主要元件皆可為凸透鏡。",
            "放大鏡靠折射成像。"
          ],
          "reviewEvidence": "不同物距與接像方式使一者觀察虛像、一者記錄實像。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_188_10",
          "stem": "眼睛看近物時水晶體調節，主要目的為何？",
          "options": [
            "改變會聚能力，使像仍清晰落在視網膜",
            "把視網膜移出眼球",
            "把光變成聲音",
            "讓近物成像在角膜外"
          ],
          "answerIndex": 0,
          "rationales": [
            "調節補償物距改變，使固定視網膜位置保持對焦。",
            "視網膜位置不如此移動。",
            "視覺系統處理光。",
            "清晰像應落在視網膜。"
          ],
          "reviewEvidence": "調節補償物距改變，使固定視網膜位置保持對焦。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_188_11",
          "stem": "若相機感光元件放在鏡頭實像面之前，照片會如何？",
          "options": [
            "因光尚未在感光面清楚會聚而模糊",
            "此時物體仍必完全清晰",
            "變成沒有任何光",
            "物體質量改變"
          ],
          "answerIndex": 0,
          "rationales": [
            "光束在正確像面才形成最小清晰物點。",
            "對焦面不重合會失焦。",
            "光仍可到達感光元件。",
            "光學位置不改物體質量。"
          ],
          "reviewEvidence": "光束在正確像面才形成最小清晰物點。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_188_12",
          "stem": "老花閱讀時使用凸透鏡的目的最接近何者？",
          "options": [
            "使近物光更加發散",
            "把文字投到鏡片表面",
            "補助會聚近物光，使眼球較易在視網膜成像",
            "降低文字發光頻率"
          ],
          "answerIndex": 2,
          "rationales": [
            "老花近物調節不足，需要會聚協助。",
            "鏡片不是閱讀投影屏。",
            "閱讀鏡片先會聚光，補償眼球近距調節不足。",
            "鏡片不改文字光源頻率。"
          ],
          "reviewEvidence": "閱讀鏡片先會聚光，補償眼球近距調節不足。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_188_01",
          "stimulusId": "PHYCHM_R4_STIM_188",
          "stem": "表中哪個裝置直接把實像接在感光元件？",
          "options": [
            "眼球",
            "相機",
            "近視眼鏡",
            "放大鏡"
          ],
          "answerIndex": 1,
          "rationales": [
            "眼球接像位置是視網膜。",
            "相機列主要作用為凸透鏡會聚、接像位置為感光元件。",
            "近視眼鏡只預先發散光。",
            "放大鏡供眼睛觀察虛像。"
          ],
          "reviewEvidence": "相機列主要作用為凸透鏡會聚、接像位置為感光元件。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_188_02",
          "stimulusId": "PHYCHM_R4_STIM_188",
          "stem": "近視眼鏡使用哪種透鏡？",
          "options": [
            "凸透鏡",
            "平面鏡",
            "三稜鏡",
            "凹透鏡"
          ],
          "answerIndex": 3,
          "rationales": [
            "凸透鏡用於加強會聚。",
            "平面鏡不矯正近視焦點。",
            "三稜鏡不是標準近視矯正。",
            "凹透鏡使遠物光先發散，讓眼球焦點後移。"
          ],
          "reviewEvidence": "凹透鏡使遠物光先發散，讓眼球焦點後移。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "光路分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_188_03",
          "stimulusId": "PHYCHM_R4_STIM_188",
          "stem": "放大鏡常把物體放在哪個位置？",
          "options": [
            "無限遠",
            "透鏡後方",
            "焦距內",
            "兩倍焦距外"
          ],
          "answerIndex": 2,
          "rationales": [
            "遠物會形成靠近焦點的實像。",
            "被觀察物在物側。",
            "焦內物體形成正立放大虛像供眼睛觀察。",
            "2f外成縮小實像。"
          ],
          "reviewEvidence": "焦內物體形成正立放大虛像供眼睛觀察。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "證據評估"
          ]
        }
      ]
    }
  ]
};
