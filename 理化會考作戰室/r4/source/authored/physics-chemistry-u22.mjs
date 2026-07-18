export const PHYSICS_CHEMISTRY_AUTHORED_U22 = {
  "unitId": "PHYCHM_R4_U22",
  "title": "聲音、回聲與噪音",
  "authorityRefs": [
    "AUTH-NATURAL-LC-KA-4-3",
    "AUTH-NATURAL-LC-KA-4-4",
    "AUTH-NATURAL-LC-KA-4-5",
    "AUTH-NATURAL-LC-ME-4-7",
    "AUTH-NATURAL-LP-TR-4-1"
  ],
  "provenance": {
    "status": "original",
    "authorRole": "Codex R4 physics and chemistry content author",
    "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
  },
  "skills": [
    {
      "id": "PHYCHM_R4_S168",
      "title": "說明聲音由物體振動產生",
      "authorityRefs": [
        "AUTH-NATURAL-LC-KA-4-3",
        "AUTH-NATURAL-LC-KA-4-4",
        "AUTH-NATURAL-LC-KA-4-5",
        "AUTH-NATURAL-LC-ME-4-7",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_003"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_168",
        "objective": "能掌握聲音由物體振動產生的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "音叉、鼓面與聲帶發聲時都在振動；停止振動後，持續產生的聲波也會停止。"
          },
          {
            "title": "證據判讀",
            "content": "音叉敲響後每隔 0.5 s 同時記錄叉腳最大位移與麥克風訊號；環境與距離不變。 叉腳位移與麥克風訊號同步衰減。 1.0 s 對應 0.7 mm 與 0.36 V。"
          },
          {
            "title": "適用界線",
            "content": "音叉、鼓面與聲帶發聲時都在振動；停止振動後，持續產生的聲波也會停止。 振動量與聲音訊號共同下降，支持振動是發聲來源。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_168_EX_01",
            "prompt": "音叉振幅與麥克風訊號：音叉敲響後每隔 0.5 s 同時記錄叉腳最大位移與麥克風訊號；環境與距離不變。 哪項趨勢符合資料？",
            "steps": [
              "音叉敲響後每隔 0.5 s 同時記錄叉腳最大位移與麥克風訊號；環境與距離不變。",
              "兩欄同步下降。",
              "叉腳位移與麥克風訊號同步衰減。"
            ],
            "answer": "位移變小時訊號也變小；叉腳位移與麥克風訊號同步衰減。",
            "why": "叉腳位移與麥克風訊號同步衰減。"
          },
          {
            "id": "PHYCHM_R4_L_168_EX_02",
            "prompt": "音叉振幅與麥克風訊號：音叉敲響後每隔 0.5 s 同時記錄叉腳最大位移與麥克風訊號；環境與距離不變。 1.0 s 的讀值為何？",
            "steps": [
              "音叉敲響後每隔 0.5 s 同時記錄叉腳最大位移與麥克風訊號；環境與距離不變。",
              "表中 1.0 s 的紀錄。",
              "1.0 s 對應 0.7 mm 與 0.36 V。"
            ],
            "answer": "0.7 mm、0.36 V；1.0 s 對應 0.7 mm 與 0.36 V。",
            "why": "1.0 s 對應 0.7 mm 與 0.36 V。"
          },
          {
            "id": "PHYCHM_R4_L_168_EX_03",
            "prompt": "音叉振幅與麥克風訊號：音叉敲響後每隔 0.5 s 同時記錄叉腳最大位移與麥克風訊號；環境與距離不變。 此資料最支持哪項因果？",
            "steps": [
              "音叉敲響後每隔 0.5 s 同時記錄叉腳最大位移與麥克風訊號；環境與距離不變。",
              "兩個量同步減小。",
              "振動量與聲音訊號共同下降，支持振動是發聲來源。"
            ],
            "answer": "振動衰減時聲音訊號也衰減；振動量與聲音訊號共同下降，支持振動是發聲來源。",
            "why": "振動量與聲音訊號共同下降，支持振動是發聲來源。"
          }
        ],
        "misconceptions": [
          {
            "belief": "只要物體能發出聲音，就認為它本身不必振動，聲音可能憑空產生。",
            "whyWrong": "音叉、鼓膜、聲帶與揚聲器發聲時都可量到週期振動；振動停止後持續聲也停止。",
            "correction": "以觸摸、影像或感測器確認發聲體的振動，並比較振動前後的聲音訊號。"
          },
          {
            "belief": "看不見音叉叉腳移動，就判定音叉沒有振動。",
            "whyWrong": "叉腳振幅可能小且頻率高，肉眼難以分辨，但水花或感測器仍能顯示振動。",
            "correction": "用水面、輕球或位移感測器放大振動證據。"
          },
          {
            "belief": "用手按住鼓面後聲音變小，是因手把聲音吸走，與鼓面振動無關。",
            "whyWrong": "手的接觸增加阻尼，使鼓面振幅快速衰減，聲波振幅也隨之減小。",
            "correction": "同時觀察鼓面位移與麥克風訊號，檢查兩者是否一起衰減。"
          },
          {
            "belief": "發聲物振幅變小時，便認為它的振動頻率一定也同比降低。",
            "whyWrong": "振幅主要影響聲音強弱，頻率主要影響音調；兩者是不同的振動量。",
            "correction": "分別量峰值位移與每秒週期數，不以其中一量替代另一量。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_168",
        "title": "音叉振幅與麥克風訊號",
        "body": "音叉敲響後每隔 0.5 s 同時記錄叉腳最大位移與麥克風訊號；環境與距離不變。",
        "dataTable": {
          "caption": "音叉振幅與麥克風訊號",
          "columns": [
            "時間",
            "叉腳位移",
            "訊號振幅"
          ],
          "rows": [
            [
              "0.0 s",
              "1.8 mm",
              "0.90 V"
            ],
            [
              "0.5 s",
              "1.2 mm",
              "0.61 V"
            ],
            [
              "1.0 s",
              "0.7 mm",
              "0.36 V"
            ],
            [
              "1.5 s",
              "0.3 mm",
              "0.16 V"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_003"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_168_01",
          "stem": "敲響音叉後把叉腳輕觸水面，水面濺起小水花。此現象最直接顯示什麼？",
          "options": [
            "水自行發聲而音叉不動",
            "發聲中的音叉叉腳正在振動",
            "音叉只產生光而沒有運動",
            "水花證明聲音不需振動"
          ],
          "answerIndex": 1,
          "rationales": [
            "水花由叉腳反覆推動水面造成。",
            "叉腳週期位移把水推開，與聽到音叉聲同時發生。",
            "觀察到的是機械接觸與水面位移，不是光。",
            "水花恰好提供音叉振動的證據。"
          ],
          "reviewEvidence": "叉腳週期位移把水推開，與聽到音叉聲同時發生。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_168_02",
          "stem": "在鼓面放少量紙屑並敲鼓，紙屑上下跳動。若用手按住鼓面，聲音與跳動都迅速減弱。合理解釋為何？",
          "options": [
            "鼓面振幅衰減，使產生的聲波也減弱",
            "紙屑吸收空氣，所以聲音消失",
            "手使鼓面振動更快，音調超出可聽範圍",
            "鼓聲與鼓面運動沒有關係"
          ],
          "answerIndex": 0,
          "rationales": [
            "按住鼓面增加阻尼，鼓面位移與麥克風振幅會一起下降。",
            "紙屑量少，且關鍵變化是按住鼓面。",
            "按住主要增加阻尼，不是必然提高頻率。",
            "兩項同步衰減正支持振動與發聲相關。"
          ],
          "reviewEvidence": "按住鼓面增加阻尼，鼓面位移與麥克風振幅會一起下降。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_168_03",
          "stem": "撥動吉他弦後，手指輕觸琴弦使其停止振動。接著最可能觀察到什麼？",
          "options": [
            "聲音維持不變但弦靜止",
            "聲音的音調必提高一個八度",
            "琴弦停止後聲音持續增強",
            "弦聲快速停止"
          ],
          "answerIndex": 3,
          "rationales": [
            "持續聲需要弦持續振動。",
            "輕觸阻尼不等於把頻率固定加倍。",
            "失去振動來源後訊號不會持續增強。",
            "弦振動被阻尼後，後續產生的聲波也迅速減少。"
          ],
          "reviewEvidence": "弦振動被阻尼後，後續產生的聲波也迅速減少。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_168_04",
          "stem": "揚聲器播放低音時，紙片放在振膜前會來回擺動。哪項敘述最合理？",
          "options": [
            "紙片證明空氣整體移到遠方",
            "揚聲器不振動，只是電流直接變成聲音",
            "揚聲器振膜往復推動空氣形成聲波",
            "振膜只向外移動而不會返回"
          ],
          "answerIndex": 2,
          "rationales": [
            "聲波中空氣粒子主要局部往復。",
            "電流驅動振膜振動，振膜才擾動空氣。",
            "振膜的週期運動造成空氣壓力週期變化。",
            "持續聲需要振膜反覆往返。"
          ],
          "reviewEvidence": "振膜的週期運動造成空氣壓力週期變化。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_168_05",
          "stem": "一把鋼尺伸出桌邊並撥動。當鋼尺振幅逐漸變小時，聽到的聲音也變弱。這項資料支持什麼？",
          "options": [
            "鋼尺質量持續減少",
            "此波的振幅越小，聲速一定越慢",
            "聲音變弱代表鋼尺停止存在",
            "發聲強弱與振動幅度的衰減相關"
          ],
          "answerIndex": 3,
          "rationales": [
            "鋼尺質量沒有因短暫振動明顯改變。",
            "聲速主要由介質條件決定。",
            "鋼尺仍在，只是振動能量耗散。",
            "相同裝置中，位移幅度與麥克風訊號同步下降。"
          ],
          "reviewEvidence": "相同裝置中，位移幅度與麥克風訊號同步下降。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_168_06",
          "stem": "下列何者是物體振動產生聲音的例子？",
          "options": [
            "手電筒發光使空氣發聲",
            "靜止鼓面自行送出持續鼓聲",
            "聲帶往復振動使周圍空氣產生壓力波",
            "真空中靜止物體直接把聲音送出"
          ],
          "answerIndex": 2,
          "rationales": [
            "發光不是產生一般聲波的必要機制。",
            "鼓面若不振動，不能持續擾動空氣。",
            "聲帶的週期開合與位移擾動空氣，形成聲波。",
            "聲音需要振動來源與傳播介質。"
          ],
          "reviewEvidence": "聲帶的週期開合與位移擾動空氣，形成聲波。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_168_07",
          "stem": "音叉發聲時肉眼看不清叉腳移動。要驗證它正在振動，哪個方法最適合？",
          "options": [
            "只記錄音叉的顏色",
            "讓叉腳輕觸懸掛小球並觀察小球反覆彈開",
            "把音叉放遠但不量任何變化",
            "關閉照明後憑猜測判定"
          ],
          "answerIndex": 1,
          "rationales": [
            "顏色不反映快速微小位移。",
            "小球受叉腳週期碰撞會重複偏轉，放大不可見的振動。",
            "改變距離只改聽感，不能直接顯示叉腳運動。",
            "缺少可觀察證據，無法驗證。"
          ],
          "reviewEvidence": "小球受叉腳週期碰撞會重複偏轉，放大不可見的振動。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_168_08",
          "stem": "同一音叉敲響後，叉腳振幅由 1.5 mm 降到 0.5 mm，但頻率仍約 440 Hz。哪項判讀正確？",
          "options": [
            "聲音通常變弱，音調大致不變",
            "聲音變高三倍",
            "聲速降為三分之一",
            "音叉已完全停止振動"
          ],
          "answerIndex": 0,
          "rationales": [
            "振幅減小影響響度；440 Hz 未變使音調大致維持。",
            "頻率沒有增加，音調不會高三倍。",
            "空氣聲速不由音叉振幅決定。",
            "仍有 0.5 mm 振幅，並未停止。"
          ],
          "reviewEvidence": "振幅減小影響響度；440 Hz 未變使音調大致維持。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_168_09",
          "stem": "研究「振動是否為發聲來源」時，哪個設計較能建立證據？",
          "options": [
            "只問同學覺得聲音好不好聽",
            "同步量發聲體位移與麥克風訊號，並逐步增加阻尼",
            "每次同時更換音叉、房間與麥克風",
            "只量音叉質量一次"
          ],
          "answerIndex": 1,
          "rationales": [
            "喜好不提供振動量。",
            "控制距離與設備，改變阻尼並同步量兩個訊號可比較共同變化。",
            "同時改多個變因無法判定因果。",
            "靜態質量不能顯示發聲時的振動。"
          ],
          "reviewEvidence": "控制距離與設備，改變阻尼並同步量兩個訊號可比較共同變化。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_168_10",
          "stem": "敲響音叉後把叉柄壓在桌面，聲音變得較明顯。最合理的原因是什麼？",
          "options": [
            "桌面受迫振動，帶動較多空氣",
            "桌面讓音叉頻率變成零",
            "桌面產生真空使聲音增強",
            "聲音由桌面顏色決定"
          ],
          "answerIndex": 0,
          "rationales": [
            "音叉把振動傳給面積較大的桌面，桌面更有效擾動空氣。",
            "若頻率為零就不會有持續聲。",
            "真空反而不利聲音傳播。",
            "顏色與機械振動無關。"
          ],
          "reviewEvidence": "音叉把振動傳給面積較大的桌面，桌面更有效擾動空氣。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_168_11",
          "stem": "某蜂鳴片仍以固定頻率振動，但振幅逐秒減小。麥克風最可能記錄到哪種趨勢？",
          "options": [
            "訊號振幅增加，週期加倍",
            "訊號完全不變",
            "訊號振幅減小，週期間隔近似不變",
            "此波的週期間隔變零而振幅不變"
          ],
          "answerIndex": 2,
          "rationales": [
            "阻尼不會使訊號振幅反向增加。",
            "來源振幅已改變，訊號不應完全不變。",
            "來源頻率固定而位移幅度衰減，對應聲音週期不變、振幅下降。",
            "固定頻率表示週期間隔不會變零。"
          ],
          "reviewEvidence": "來源頻率固定而位移幅度衰減，對應聲音週期不變、振幅下降。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_168_12",
          "stem": "一只玻璃杯邊緣被摩擦後發聲，輕觸杯壁可感到顫動。停止摩擦並按住杯壁後聲音消失。可得何結論？",
          "options": [
            "手指產生聲音而杯壁無關",
            "杯壁振動是持續發聲的直接來源",
            "玻璃杯只在無聲時振動",
            "按住杯壁使空氣聲速為零"
          ],
          "answerIndex": 1,
          "rationales": [
            "發聲前已由摩擦使杯壁顫動。",
            "杯壁顫動與聲音同時存在，阻止杯壁振動後聲音停止。",
            "觀察顯示有聲時振動，按住後兩者一起停止。",
            "按住局部杯壁不會使整個空氣介質聲速為零。"
          ],
          "reviewEvidence": "杯壁顫動與聲音同時存在，阻止杯壁振動後聲音停止。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_168_01",
          "stimulusId": "PHYCHM_R4_STIM_168",
          "stem": "哪項趨勢符合表中資料？",
          "options": [
            "叉腳位移變小時，訊號變大",
            "兩個量沒有任何共同趨勢",
            "叉腳位移變小時，麥克風訊號也變小",
            "麥克風訊號始終不變"
          ],
          "answerIndex": 2,
          "rationales": [
            "0.90 V 隨位移下降到 0.16 V，並非變大。",
            "四列兩量皆同方向下降。",
            "位移 1.8→0.3 mm 時，訊號也由 0.90→0.16 V。",
            "訊號由 0.90 V 逐步降到 0.16 V。"
          ],
          "reviewEvidence": "位移 1.8→0.3 mm 時，訊號也由 0.90→0.16 V。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_168_02",
          "stimulusId": "PHYCHM_R4_STIM_168",
          "stem": "音叉振動 1.0 s 時的叉腳位移與訊號振幅為何？",
          "options": [
            "1.8 mm、0.90 V",
            "1.2 mm、0.61 V",
            "0.3 mm、0.16 V",
            "0.7 mm、0.36 V"
          ],
          "answerIndex": 3,
          "rationales": [
            "這是 0.0 s 的讀值。",
            "這是 0.5 s 的讀值。",
            "這是 1.5 s 的讀值。",
            "直接讀取 1.0 s 那一列，兩值為 0.7 mm 與 0.36 V。"
          ],
          "reviewEvidence": "直接讀取 1.0 s 那一列，兩值為 0.7 mm 與 0.36 V。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "資料分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_168_03",
          "stimulusId": "PHYCHM_R4_STIM_168",
          "stem": "此資料最支持哪項解釋？",
          "options": [
            "音叉振動衰減時，聲音訊號也隨之衰減",
            "音叉頻率必隨時間持續增加",
            "麥克風訊號造成叉腳質量減少",
            "叉腳位移越小，聲音反而越強"
          ],
          "answerIndex": 0,
          "rationales": [
            "控制環境與距離後，叉腳位移和聲音訊號同步減小。",
            "表中沒有頻率資料，不能推出持續增加。",
            "資料未量質量，也沒有此因果機制。",
            "訊號與位移同方向下降，不是反向。"
          ],
          "reviewEvidence": "控制環境與距離後，叉腳位移和聲音訊號同步減小。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "證據評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S169",
      "title": "說明聲音傳播需要介質",
      "authorityRefs": [
        "AUTH-NATURAL-LC-KA-4-3",
        "AUTH-NATURAL-LC-KA-4-4",
        "AUTH-NATURAL-LC-KA-4-5",
        "AUTH-NATURAL-LC-ME-4-7",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_003"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_169",
        "objective": "能掌握聲音傳播需要介質的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "聲波需要氣體、液體或固體介質傳播；真空中沒有可傳遞振動的介質。"
          },
          {
            "title": "證據判讀",
            "content": "蜂鳴器電壓固定，逐步降低鐘罩內氣壓；外部麥克風距離不變。 蜂鳴片頻率始終為 500 Hz。 聲源條件固定時，介質減少使外部訊號減弱。"
          },
          {
            "title": "適用界線",
            "content": "聲波需要氣體、液體或固體介質傳播；真空中沒有可傳遞振動的介質。 外部訊號依趨勢應趨近零。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_169_EX_01",
            "prompt": "抽氣鐘罩的聲音量測：蜂鳴器電壓固定，逐步降低鐘罩內氣壓；外部麥克風距離不變。 哪個變因保持不變？",
            "steps": [
              "蜂鳴器電壓固定，逐步降低鐘罩內氣壓；外部麥克風距離不變。",
              "皆 500 Hz。",
              "蜂鳴片頻率始終為 500 Hz。"
            ],
            "answer": "頻率；蜂鳴片頻率始終為 500 Hz。",
            "why": "蜂鳴片頻率始終為 500 Hz。"
          },
          {
            "id": "PHYCHM_R4_L_169_EX_02",
            "prompt": "抽氣鐘罩的聲音量測：蜂鳴器電壓固定，逐步降低鐘罩內氣壓；外部麥克風距離不變。 資料最支持什麼？",
            "steps": [
              "蜂鳴器電壓固定，逐步降低鐘罩內氣壓；外部麥克風距離不變。",
              "訊號由 1.00 降到 0.08。",
              "聲源條件固定時，介質減少使外部訊號減弱。"
            ],
            "answer": "壓力降低時外部訊號減弱；聲源條件固定時，介質減少使外部訊號減弱。",
            "why": "聲源條件固定時，介質減少使外部訊號減弱。"
          },
          {
            "id": "PHYCHM_R4_L_169_EX_03",
            "prompt": "抽氣鐘罩的聲音量測：蜂鳴器電壓固定，逐步降低鐘罩內氣壓；外部麥克風距離不變。 壓力趨近真空時最可能如何？",
            "steps": [
              "蜂鳴器電壓固定，逐步降低鐘罩內氣壓；外部麥克風距離不變。",
              "缺少介質使傳聲困難。",
              "外部訊號依趨勢應趨近零。"
            ],
            "answer": "外部訊號趨近零；外部訊號依趨勢應趨近零。",
            "why": "外部訊號依趨勢應趨近零。"
          }
        ],
        "misconceptions": [
          {
            "belief": "蜂鳴器在抽氣鐘罩中聽不見，就認為蜂鳴片一定已停止振動。",
            "whyWrong": "電源與振動頻率可維持不變；減少的是傳遞聲波的空氣粒子。",
            "correction": "同時量蜂鳴片振動與罩外麥克風訊號，分辨聲源和傳播條件。"
          },
          {
            "belief": "聲音可以像光一樣直接穿越真空，所以太空中不需通訊設備也能交談。",
            "whyWrong": "聲波是介質粒子的機械擾動；真空沒有粒子可傳遞壓力變化。",
            "correction": "太空通訊使用可在真空傳播的電磁波，再由設備轉成聲音。"
          },
          {
            "belief": "只有空氣能傳聲，固體和液體都會完全阻擋聲音。",
            "whyWrong": "固體、液體與氣體都有粒子，可藉粒子間作用傳遞機械振動。",
            "correction": "以敲桌、隔水聽聲等實驗比較不同介質中的傳聲。"
          },
          {
            "belief": "鐘罩內氣壓降低時外部聲音變小，是因蜂鳴器頻率必然跟著氣壓下降。",
            "whyWrong": "表中頻率固定 500 Hz，改變的是外部訊號振幅；音調與強弱被混為一談。",
            "correction": "分別讀頻率欄與訊號欄，不用響度變化推測頻率。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_169",
        "title": "抽氣鐘罩的聲音量測",
        "body": "蜂鳴器電壓固定，逐步降低鐘罩內氣壓；外部麥克風距離不變。",
        "dataTable": {
          "caption": "抽氣鐘罩的聲音量測",
          "columns": [
            "罩內壓力",
            "蜂鳴片頻率",
            "外部訊號"
          ],
          "rows": [
            [
              "100 kPa",
              "500 Hz",
              "1.00"
            ],
            [
              "70 kPa",
              "500 Hz",
              "0.73"
            ],
            [
              "40 kPa",
              "500 Hz",
              "0.39"
            ],
            [
              "10 kPa",
              "500 Hz",
              "0.08"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_003"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_169_01",
          "stem": "抽氣鐘罩內的蜂鳴器持續振動，抽氣後罩外聲音逐漸變小。最合理的解釋是什麼？",
          "options": [
            "罩內空氣粒子減少，聲音較難傳到外部",
            "蜂鳴器必然立即停止振動",
            "真空使聲音傳得更快而聽不見",
            "抽氣使人耳的可聽頻率消失"
          ],
          "answerIndex": 0,
          "rationales": [
            "聲源維持時，外部訊號隨氣壓降低而減弱，指出傳播需要介質。",
            "題目已說蜂鳴器持續振動。",
            "沒有介質時機械聲波不能傳播。",
            "人耳範圍不會因鐘罩抽氣而消失。"
          ],
          "reviewEvidence": "聲源維持時，外部訊號隨氣壓降低而減弱，指出傳播需要介質。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_169_02",
          "stem": "若鐘罩接近真空，蜂鳴片仍以 500 Hz 振動，罩外麥克風最可能如何？",
          "options": [
            "此時物體仍收到與大氣中相同訊號",
            "訊號振幅無限增大",
            "收到的聲音訊號趨近零",
            "此波的頻率變成 0 Hz 且蜂鳴片靜止"
          ],
          "answerIndex": 2,
          "rationales": [
            "介質顯著減少，外傳訊號不會維持相同。",
            "真空不會放大機械聲波。",
            "真空缺少傳遞振動的粒子，因此罩外聲音訊號趨近零。",
            "蜂鳴片仍振動，不能說頻率為零。"
          ],
          "reviewEvidence": "真空缺少傳遞振動的粒子，因此罩外聲音訊號趨近零。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_169_03",
          "stem": "把耳朵貼近長桌一端，另一端輕敲桌面，常可經桌子聽見敲擊聲。這表示什麼？",
          "options": [
            "只有桌面上方空氣能傳聲",
            "固體可以傳遞聲波",
            "固體會把所有振動消除",
            "聲音不需要任何介質"
          ],
          "answerIndex": 1,
          "rationales": [
            "貼桌觀察增加了經固體傳來的振動。",
            "敲擊振動經桌內粒子相互作用傳到耳朵。",
            "若完全消除振動，耳朵不會收到聲音。",
            "桌子本身就是介質。"
          ],
          "reviewEvidence": "敲擊振動經桌內粒子相互作用傳到耳朵。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_169_04",
          "stem": "潛水員在水中可聽到附近金屬敲擊聲。此現象最直接說明什麼？",
          "options": [
            "水中沒有粒子卻能傳聲",
            "聲音只能沿水面傳",
            "液體也能作為聲音傳播介質",
            "金屬聲先變成光再進入耳朵"
          ],
          "answerIndex": 2,
          "rationales": [
            "水由粒子組成，可傳遞壓力擾動。",
            "聲波可在水體內傳播，不限水面。",
            "水中的粒子傳遞金屬造成的機械振動。",
            "不需要先轉成光。"
          ],
          "reviewEvidence": "水中的粒子傳遞金屬造成的機械振動。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_169_05",
          "stem": "兩名太空人位於艙外近真空環境，彼此頭盔沒有接觸。要交談需使用無線電，原因為何？",
          "options": [
            "無線電波可穿越真空，聲波不能",
            "真空中的聲速無限大",
            "頭盔會讓聲音質量消失",
            "人耳在太空不會振動"
          ],
          "answerIndex": 0,
          "rationales": [
            "無線電以電磁波跨越真空，接收器再於頭盔內產生聲波。",
            "真空中沒有機械聲速可談，更非無限大。",
            "聲音沒有此種質量消失機制。",
            "耳朵仍可接收頭盔內設備產生的聲音。"
          ],
          "reviewEvidence": "無線電以電磁波跨越真空，接收器再於頭盔內產生聲波。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_169_06",
          "stem": "在空氣、清水與鋼棒中都可偵測到同一敲擊造成的振動。哪項結論合理？",
          "options": [
            "只有氣體可傳聲",
            "三種物態都可傳聲，但傳播特性可不同",
            "液體與固體內聲速必完全相同",
            "介質種類不影響任何傳播量"
          ],
          "answerIndex": 1,
          "rationales": [
            "實驗已在水與鋼中偵測到聲音。",
            "氣、液、固皆有粒子可傳遞機械擾動。",
            "不同介質中的粒子作用不同，聲速不必相同。",
            "介質種類會影響聲速與能量損耗。"
          ],
          "reviewEvidence": "氣、液、固皆有粒子可傳遞機械擾動。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_169_07",
          "stem": "驗證聲音傳播需要空氣時，為何要固定蜂鳴器電壓與麥克風距離？",
          "options": [
            "讓罩內壓力保持不變",
            "避免聲源強弱或距離同時改變造成混淆",
            "使真空產生更多粒子",
            "保證聲速等於光速"
          ],
          "answerIndex": 1,
          "rationales": [
            "實驗仍需改變罩內壓力。",
            "控制電壓與距離後，外部訊號差異才可主要歸因於氣壓。",
            "抽氣不會因固定設備而產生粒子。",
            "聲速與光速不相等。"
          ],
          "reviewEvidence": "控制電壓與距離後，外部訊號差異才可主要歸因於氣壓。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_169_08",
          "stem": "抽氣過程中罩外訊號降低，但直接貼在蜂鳴器外殼的接觸感測器仍量到振動。這證明什麼？",
          "options": [
            "蜂鳴器已停止發聲",
            "接觸感測器量到的是光",
            "氣壓越低聲源頻率必越低",
            "聲源仍振動，減弱主要發生在聲音傳播過程"
          ],
          "answerIndex": 3,
          "rationales": [
            "接觸感測器已量到外殼振動。",
            "感測器接收的是機械振動。",
            "題目沒有顯示頻率降低。",
            "聲源振動與外部空氣聲訊號被分開量測。"
          ],
          "reviewEvidence": "聲源振動與外部空氣聲訊號被分開量測。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_169_09",
          "stem": "在月球表面放置一個外露鬧鐘，即使機械鈴槌振動，遠處人也不能直接聽到。主要原因為何？",
          "options": [
            "月球重力較小，所以所有聲音頻率為零",
            "鬧鐘沒有質量",
            "月球表面近真空，缺少傳聲介質",
            "聲音只會向地球傳"
          ],
          "answerIndex": 2,
          "rationales": [
            "重力大小不是聲波是否可在真空傳播的原因。",
            "鬧鐘仍有質量。",
            "鈴槌能振動，但兩者間沒有足夠介質傳遞壓力波。",
            "聲波不是只朝地球的定向現象。"
          ],
          "reviewEvidence": "鈴槌能振動，但兩者間沒有足夠介質傳遞壓力波。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_169_10",
          "stem": "隔著關閉的玻璃窗仍可聽見戶外聲音。下列過程何者合理？",
          "options": [
            "聲音直接穿過沒有振動的玻璃",
            "玻璃把聲波變成永久物質流",
            "室外聲音在玻璃內成為真空波",
            "空氣振動使玻璃振動，再擾動室內空氣"
          ],
          "answerIndex": 3,
          "rationales": [
            "玻璃必須受迫振動才能傳遞機械擾動。",
            "傳聲不需永久搬運物質。",
            "玻璃是固體介質，不是真空。",
            "聲音可依序透過室外空氣、玻璃與室內空氣傳遞。"
          ],
          "reviewEvidence": "聲音可依序透過室外空氣、玻璃與室內空氣傳遞。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_169_11",
          "stem": "某學生說「抽氣後聽不見，所以沒有任何能量離開蜂鳴器」。哪項修正較完整？",
          "options": [
            "完全正確，聽不見就代表所有能量為零",
            "應改成真空會產生更強聲音",
            "仍可能有微弱聲、固體振動或熱傳遞，只是空氣聲路徑大幅減弱",
            "應改成蜂鳴器頻率必變成負值"
          ],
          "answerIndex": 2,
          "rationales": [
            "聽覺閾值不能證明所有能量形式皆為零。",
            "抽氣使機械聲傳播減弱，不會增強。",
            "外部空氣聲訊號趨近零，不等於系統沒有其他能量轉移。",
            "頻率不會因抽氣成為負值。"
          ],
          "reviewEvidence": "外部空氣聲訊號趨近零，不等於系統沒有其他能量轉移。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_169_12",
          "stem": "聲音傳播需要介質的微觀原因是什麼？",
          "options": [
            "聲源把同一批空氣送到聽者耳中",
            "粒子完全不動而聲音自行跳躍",
            "真空粒子把壓力傳下去",
            "介質粒子受迫振動並把作用傳給鄰近粒子"
          ],
          "answerIndex": 3,
          "rationales": [
            "聲音傳播主要是局部粒子往復，不是整批運輸。",
            "沒有粒子運動就無法形成機械壓力擾動。",
            "真空定義上沒有足夠介質粒子。",
            "相鄰粒子的作用使壓縮與疏鬆擾動逐步前進。"
          ],
          "reviewEvidence": "相鄰粒子的作用使壓縮與疏鬆擾動逐步前進。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_169_01",
          "stimulusId": "PHYCHM_R4_STIM_169",
          "stem": "表中哪個量在抽氣過程保持不變？",
          "options": [
            "罩內氣壓",
            "外部訊號",
            "介質粒子數",
            "蜂鳴片頻率 500 Hz"
          ],
          "answerIndex": 3,
          "rationales": [
            "氣壓由 100 kPa 降到 10 kPa。",
            "外部訊號由 1.00 降到 0.08。",
            "抽氣使罩內粒子數減少。",
            "四列蜂鳴片頻率都記為 500 Hz。"
          ],
          "reviewEvidence": "四列蜂鳴片頻率都記為 500 Hz。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_169_02",
          "stimulusId": "PHYCHM_R4_STIM_169",
          "stem": "表中資料最支持哪項敘述？",
          "options": [
            "罩內壓力降低時，外部聲音訊號減弱",
            "壓力越低，外部訊號越強",
            "蜂鳴片頻率隨壓力下降",
            "真空中的聲音會加速傳播"
          ],
          "answerIndex": 0,
          "rationales": [
            "在聲源頻率固定時，壓力 100→10 kPa 對應訊號 1.00→0.08。",
            "數據 1.00→0.08 顯示反向趨勢。",
            "頻率四列皆為 500 Hz。",
            "表格沒有真空聲速，且真空不能傳機械聲波。"
          ],
          "reviewEvidence": "在聲源頻率固定時，壓力 100→10 kPa 對應訊號 1.00→0.08。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "資料分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_169_03",
          "stimulusId": "PHYCHM_R4_STIM_169",
          "stem": "依表中趨勢，罩內壓力繼續趨近真空時最可能如何？",
          "options": [
            "蜂鳴片一定停止振動",
            "罩外聲音訊號繼續趨近零",
            "此波的頻率上升到無限大",
            "外部訊號回升到 1.00"
          ],
          "answerIndex": 1,
          "rationales": [
            "抽氣不必使通電蜂鳴片停止。",
            "介質粒子越少，經空氣傳出的聲音訊號越弱。",
            "頻率在表中保持固定。",
            "現有單調下降資料不支持突然回升。"
          ],
          "reviewEvidence": "介質粒子越少，經空氣傳出的聲音訊號越弱。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "證據評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S170",
      "title": "比較介質溫度等因素對聲速影響",
      "authorityRefs": [
        "AUTH-NATURAL-LC-KA-4-3",
        "AUTH-NATURAL-LC-KA-4-4",
        "AUTH-NATURAL-LC-KA-4-5",
        "AUTH-NATURAL-LC-ME-4-7",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_003"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_170",
        "objective": "能掌握介質溫度等因素對聲速影響的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "聲速由介質與溫度等條件決定；在同一介質同條件下，高低音的聲速近似相同。"
          },
          {
            "title": "證據判讀",
            "content": "喇叭與麥克風相距 68.0 m，使用同一設備在無風環境量測平均單程時間。 68.0 m 除以 0.198 s 得約 343 m/s。 相同距離下溫度越高，傳播時間略短。"
          },
          {
            "title": "適用界線",
            "content": "聲速由介質與溫度等條件決定；在同一介質同條件下，高低音的聲速近似相同。 路程與設備受控制，主要變因是溫度。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_170_EX_01",
            "prompt": "不同氣溫下的傳播時間：喇叭與麥克風相距 68.0 m，使用同一設備在無風環境量測平均單程時間。 25 °C 時聲速約為何？",
            "steps": [
              "喇叭與麥克風相距 68.0 m，使用同一設備在無風環境量測平均單程時間。",
              "68.0÷0.198≈343。",
              "68.0 m 除以 0.198 s 得約 343 m/s。"
            ],
            "answer": "343 m/s；68.0 m 除以 0.198 s 得約 343 m/s。",
            "why": "68.0 m 除以 0.198 s 得約 343 m/s。"
          },
          {
            "id": "PHYCHM_R4_L_170_EX_02",
            "prompt": "不同氣溫下的傳播時間：喇叭與麥克風相距 68.0 m，使用同一設備在無風環境量測平均單程時間。 資料呈現何種趨勢？",
            "steps": [
              "喇叭與麥克風相距 68.0 m，使用同一設備在無風環境量測平均單程時間。",
              "時間由 0.204 降到 0.195 s。",
              "相同距離下溫度越高，傳播時間略短。"
            ],
            "answer": "溫度升高，時間縮短；相同距離下溫度越高，傳播時間略短。",
            "why": "相同距離下溫度越高，傳播時間略短。"
          },
          {
            "id": "PHYCHM_R4_L_170_EX_03",
            "prompt": "不同氣溫下的傳播時間：喇叭與麥克風相距 68.0 m，使用同一設備在無風環境量測平均單程時間。 為何可比較溫度影響？",
            "steps": [
              "喇叭與麥克風相距 68.0 m，使用同一設備在無風環境量測平均單程時間。",
              "相同路程使時間可比。",
              "路程與設備受控制，主要變因是溫度。"
            ],
            "answer": "距離固定 68.0 m；路程與設備受控制，主要變因是溫度。",
            "why": "路程與設備受控制，主要變因是溫度。"
          }
        ],
        "misconceptions": [
          {
            "belief": "在同一空氣條件下，音調較高的聲音一定傳得較快，因此先到達麥克風。",
            "whyWrong": "音調由頻率決定；同一介質與溫度下，不同可聽頻率的聲速近似相同。",
            "correction": "比較聲速時先看介質與溫度，不以音調高低替代。"
          },
          {
            "belief": "聲音較響代表能量較大，就把響度增加誤判成聲速增加。",
            "whyWrong": "響度主要和波的振幅、距離有關；聲速主要由介質狀態與溫度決定。",
            "correction": "固定介質條件，分別量傳播時間與訊號振幅。"
          },
          {
            "belief": "用距離除以回聲往返時間直接當單程聲速，算出的結果只有正確值一半。",
            "whyWrong": "回聲走到反射面再返回，總路程是牆距的兩倍。",
            "correction": "先辨認單程或往返；回聲聲速用 2d/t，牆距用 vt/2。"
          },
          {
            "belief": "相同距離下高溫時傳播時間較短，卻判成高溫聲速較慢。",
            "whyWrong": "距離固定時 v＝d/t，時間越短表示速率越大。",
            "correction": "先固定路程，再用時間倒數關係判讀聲速趨勢。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_170",
        "title": "不同氣溫下的傳播時間",
        "body": "喇叭與麥克風相距 68.0 m，使用同一設備在無風環境量測平均單程時間。",
        "dataTable": {
          "caption": "不同氣溫下的傳播時間",
          "columns": [
            "空氣溫度",
            "距離",
            "平均時間"
          ],
          "rows": [
            [
              "5 °C",
              "68.0 m",
              "0.204 s"
            ],
            [
              "15 °C",
              "68.0 m",
              "0.201 s"
            ],
            [
              "25 °C",
              "68.0 m",
              "0.198 s"
            ],
            [
              "35 °C",
              "68.0 m",
              "0.195 s"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_003"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_170_01",
          "stem": "喇叭與麥克風相距 68.0 m，25 °C 時單程傳播時間為 0.198 s。聲速約為何？",
          "options": [
            "172 m/s",
            "13.5 m/s",
            "686 m/s",
            "343 m/s"
          ],
          "answerIndex": 3,
          "rationales": [
            "172 把單程距離誤除以兩倍時間。",
            "13.5 來自不正確的乘除。",
            "686 把單程路程無故加倍。",
            "v＝68.0/0.198≈343 m/s。"
          ],
          "reviewEvidence": "v＝68.0/0.198≈343 m/s。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_170_02",
          "stem": "同一 68.0 m 距離下，氣溫由 5 °C 升到 35 °C，時間由 0.204 s 降到 0.195 s。可得何趨勢？",
          "options": [
            "此範圍內溫度升高，空氣聲速增加",
            "溫度升高，聲速降低",
            "聲速完全不受溫度影響",
            "距離隨溫度縮短"
          ],
          "answerIndex": 0,
          "rationales": [
            "v＝d/t 且 d 固定；t 下降表示 v 上升。",
            "相同距離下時間變短代表聲速變大。",
            "傳播時間有系統地下降，不支持完全無關。",
            "題目固定喇叭與麥克風距離。"
          ],
          "reviewEvidence": "v＝d/t 且 d 固定；t 下降表示 v 上升。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_170_03",
          "stem": "研究空氣溫度對聲速的影響，為何要固定喇叭與麥克風距離？",
          "options": [
            "讓每次聲音頻率變成零",
            "使時間差主要反映聲速而非路程改變",
            "使空氣介質改為鋼材",
            "保證所有量測時間相同"
          ],
          "answerIndex": 1,
          "rationales": [
            "固定距離不會使頻率為零。",
            "控制路程後，可由各溫度的 d/t 比較聲速。",
            "改介質會引入另一變因。",
            "聲速改變時時間本來就可能不同。"
          ],
          "reviewEvidence": "控制路程後，可由各溫度的 d/t 比較聲速。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_170_04",
          "stem": "同一房間中同時發出 400 Hz 與 800 Hz 的短聲，兩者沿相同路徑傳到麥克風。哪項預測合理？",
          "options": [
            "800 Hz 一定早一倍到達",
            "400 Hz 一定早一倍到達",
            "只有較響者能傳播",
            "兩者到達時間近似相同"
          ],
          "answerIndex": 3,
          "rationales": [
            "同介質中聲速不因頻率加倍而加倍。",
            "低頻也不因此傳得較快。",
            "聲音強弱不決定是否能傳播。",
            "同一空氣條件下兩頻率的聲速近似相同。"
          ],
          "reviewEvidence": "同一空氣條件下兩頻率的聲速近似相同。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_170_05",
          "stem": "要比較聲音在空氣與鋼棒中的傳播時間，哪個設計最合理？",
          "options": [
            "讓鋼棒路程是空氣的十倍",
            "空氣用低音、鋼棒用高音且不校時",
            "只比較聽起來哪個較響",
            "使用相同路程並同步記錄敲擊起點與到達訊號"
          ],
          "answerIndex": 3,
          "rationales": [
            "路程不同會混淆介質與距離。",
            "同時改頻率又不校時，無法公平比較。",
            "響度不能直接代表聲速。",
            "固定路程並量時間，才能用 v＝d/t 比較介質。"
          ],
          "reviewEvidence": "固定路程並量時間，才能用 v＝d/t 比較介質。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_170_06",
          "stem": "聲音在某介質中走 102 m 需 0.30 s。平均聲速為何？",
          "options": [
            "30.6 m/s",
            "0.0029 m/s",
            "340 m/s",
            "102.3 m/s"
          ],
          "answerIndex": 2,
          "rationales": [
            "102×0.30 不是速率。",
            "0.30/102 是每公尺時間。",
            "v＝102/0.30＝340 m/s。",
            "把距離與時間相加不具物理意義。"
          ],
          "reviewEvidence": "v＝102/0.30＝340 m/s。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_170_07",
          "stem": "無風環境改成有穩定順風後，若量地面上的單向到達時間，為何需重新控制條件？",
          "options": [
            "風會讓所有聲源停止振動",
            "風把聲音變成光",
            "風會使相對地面的順風與逆風傳播時間不同",
            "風使距離單位由公尺變秒"
          ],
          "answerIndex": 2,
          "rationales": [
            "聲源仍可振動。",
            "聲音仍是機械波。",
            "風造成介質相對地面流動，會影響單向地面量測。",
            "單位不因風而改變。"
          ],
          "reviewEvidence": "風造成介質相對地面流動，會影響單向地面量測。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_170_08",
          "stem": "兩個麥克風相距 34 m，聲音由第一個到第二個需 0.10 s。這是單程量測，聲速為何？",
          "options": [
            "340 m/s",
            "170 m/s",
            "680 m/s",
            "3.4 m/s"
          ],
          "answerIndex": 0,
          "rationales": [
            "v＝34/0.10＝340 m/s。",
            "單程量測不需把 34 m 除以二。",
            "也不需把路程加倍成 68 m。",
            "34×0.10 不是 d/t。"
          ],
          "reviewEvidence": "v＝34/0.10＝340 m/s。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_170_09",
          "stem": "聲速寫成 340 m/s 的意義為何？",
          "options": [
            "每個空氣粒子每秒永久移動 340 m",
            "聲音頻率固定為 340 Hz",
            "所有聲音波長都是 340 m",
            "聲波在該條件下每秒傳播約 340 m"
          ],
          "answerIndex": 3,
          "rationales": [
            "介質粒子主要局部振動，不隨波遠移此距離。",
            "m/s 是速率單位，不是 Hz。",
            "波長還取決於頻率。",
            "340 m/s 描述擾動相對地面的傳播速率。"
          ],
          "reviewEvidence": "340 m/s 描述擾動相對地面的傳播速率。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_170_10",
          "stem": "相同距離下四次量得時間 0.203、0.202、0.204、0.203 s。報告聲速前最適合怎麼做？",
          "options": [
            "先取平均時間並保留合理有效數字",
            "只保留最短時間",
            "把四個時間相加當單次時間",
            "刪除與預期不同的所有資料"
          ],
          "answerIndex": 0,
          "rationales": [
            "重複量測平均可降低隨機讀值波動。",
            "只取極端值容易受隨機誤差影響。",
            "總和不是一次平均傳播時間。",
            "資料相近且無明確異常理由，不應任意刪除。"
          ],
          "reviewEvidence": "重複量測平均可降低隨機讀值波動。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_170_11",
          "stem": "同一空氣條件下把傳播距離由 34 m 加倍為 68 m。若聲速不變，單程時間如何？",
          "options": [
            "約減半",
            "此時物體保持不變",
            "約加倍",
            "變成四倍"
          ],
          "answerIndex": 2,
          "rationales": [
            "t＝d/v，距離增加不會使時間減半。",
            "v 固定時時間與距離成正比。",
            "t＝d/v；d 加倍且 v 固定，t 也加倍。",
            "沒有平方關係。"
          ],
          "reviewEvidence": "t＝d/v；d 加倍且 v 固定，t 也加倍。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_170_12",
          "stem": "學生算得室溫空氣聲速 34 m/s，檢查後發現距離 68.0 m 卻誤寫成 6.80 m。修正後結果如何？",
          "options": [
            "由 34 m/s 改為 3.4 m/s",
            "此時物體仍為 34 m/s",
            "由 34 m/s 改為約 340 m/s",
            "由 34 m/s 改為 3400 m/s"
          ],
          "answerIndex": 2,
          "rationales": [
            "修正距離是增加十倍，不是減少。",
            "v＝d/t，距離更正會同比改變結果。",
            "同一時間下，距離由 6.80 改為 68.0 m，使聲速增加十倍。",
            "只增加十倍，不是百倍。"
          ],
          "reviewEvidence": "同一時間下，距離由 6.80 改為 68.0 m，使聲速增加十倍。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_170_01",
          "stimulusId": "PHYCHM_R4_STIM_170",
          "stem": "25 °C 時由表中資料算得的聲速約為何？",
          "options": [
            "343 m/s",
            "172 m/s",
            "337 m/s",
            "686 m/s"
          ],
          "answerIndex": 0,
          "rationales": [
            "68.0/0.198≈343 m/s。",
            "把單程距離誤減半。",
            "337 m/s 接近 5 °C 的 68/0.204。",
            "把 68 m 誤當往返半距問題而加倍。"
          ],
          "reviewEvidence": "68.0/0.198≈343 m/s。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_170_02",
          "stimulusId": "PHYCHM_R4_STIM_170",
          "stem": "表中資料呈現哪項趨勢？",
          "options": [
            "溫度升高時時間變長",
            "溫度升高時，固定距離的傳播時間縮短",
            "距離隨溫度增加",
            "35 °C 時聲音停止"
          ],
          "answerIndex": 1,
          "rationales": [
            "數據由 0.204 降至 0.195 s。",
            "四列溫度遞增時，平均時間單調減少。",
            "每列距離都固定 68.0 m。",
            "35 °C 仍量到 0.195 s。"
          ],
          "reviewEvidence": "四列溫度遞增時，平均時間單調減少。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "資料分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_170_03",
          "stimulusId": "PHYCHM_R4_STIM_170",
          "stem": "為何這組資料可以用來比較溫度對聲速的影響？",
          "options": [
            "每次都更換傳播介質",
            "四次距離固定為 68.0 m，設備與風況也受控制",
            "四次距離完全不同",
            "只量到一個溫度"
          ],
          "answerIndex": 1,
          "rationales": [
            "介質都為空氣，沒有更換。",
            "主要改變的是空氣溫度，路程與設備條件維持一致。",
            "距離欄每列相同。",
            "表中有 5、15、25、35 °C。"
          ],
          "reviewEvidence": "主要改變的是空氣溫度，路程與設備條件維持一致。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "證據評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S171",
      "title": "由頻率振幅與波形判斷音調響度音色",
      "authorityRefs": [
        "AUTH-NATURAL-LC-KA-4-3",
        "AUTH-NATURAL-LC-KA-4-4",
        "AUTH-NATURAL-LC-KA-4-5",
        "AUTH-NATURAL-LC-ME-4-7",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_003"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_171",
        "objective": "能掌握頻率振幅與波形判斷音調響度音色的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "頻率主要影響音調，振幅與響度有關，波形特徵與音色有關，三者不可互換。"
          },
          {
            "title": "證據判讀",
            "content": "同一麥克風與顯示尺度記錄四個穩定聲音；波形類型只表示形狀。 甲的頻率為 250 Hz，是表中最低值，因此音調最低。 丙振幅較大而頻率相同，主要是響度差。"
          },
          {
            "title": "適用界線",
            "content": "頻率主要影響音調，振幅與響度有關，波形特徵與音色有關，三者不可互換。 正弦波與複合波的諧音組成不同。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_171_EX_01",
            "prompt": "四個聲音的波形摘要：同一麥克風與顯示尺度記錄四個穩定聲音；波形類型只表示形狀。 哪個音調最低？",
            "steps": [
              "同一麥克風與顯示尺度記錄四個穩定聲音；波形類型只表示形狀。",
              "250 Hz 最小。",
              "甲的頻率為 250 Hz，是表中最低值，因此音調最低。"
            ],
            "answer": "甲；甲的頻率為 250 Hz，是表中最低值，因此音調最低。",
            "why": "甲的頻率為 250 Hz，是表中最低值，因此音調最低。"
          },
          {
            "id": "PHYCHM_R4_L_171_EX_02",
            "prompt": "四個聲音的波形摘要：同一麥克風與顯示尺度記錄四個穩定聲音；波形類型只表示形狀。 乙與丙主要聽感差異為何？",
            "steps": [
              "同一麥克風與顯示尺度記錄四個穩定聲音；波形類型只表示形狀。",
              "丙振幅較大。",
              "丙振幅較大而頻率相同，主要是響度差。"
            ],
            "answer": "丙通常較響；丙振幅較大而頻率相同，主要是響度差。",
            "why": "丙振幅較大而頻率相同，主要是響度差。"
          },
          {
            "id": "PHYCHM_R4_L_171_EX_03",
            "prompt": "四個聲音的波形摘要：同一麥克風與顯示尺度記錄四個穩定聲音；波形類型只表示形狀。 丙與丁仍可能有何差別？",
            "steps": [
              "同一麥克風與顯示尺度記錄四個穩定聲音；波形類型只表示形狀。",
              "波形不同可造成音色不同。",
              "正弦波與複合波的諧音組成不同。"
            ],
            "answer": "音色；正弦波與複合波的諧音組成不同。",
            "why": "正弦波與複合波的諧音組成不同。"
          }
        ],
        "misconceptions": [
          {
            "belief": "波形振幅較大就判定音調較高，把響度與音調混為一談。",
            "whyWrong": "音調主要由頻率決定；振幅增加通常使聲音較響，不必改變頻率。",
            "correction": "先比較週期間隔或頻率判音調，再用振幅比較響度。"
          },
          {
            "belief": "兩個聲音頻率與振幅相同，就認為聽起來必完全一樣。",
            "whyWrong": "不同樂器可有不同諧音組成與波形，造成音色差異。",
            "correction": "除頻率和振幅外，也比較波形形狀或頻譜。"
          },
          {
            "belief": "頻率較高的聲音在同一空氣中一定傳得較快，所以音調高低來自聲速。",
            "whyWrong": "同一介質條件下各可聽頻率的聲速近似相同；音調來自每秒振動次數。",
            "correction": "用頻率描述音調，不以到達速度解釋高低音。"
          },
          {
            "belief": "麥克風圖上的波形較複雜，就判成聲音一定較大聲。",
            "whyWrong": "複雜形狀主要反映音色與諧音；響度仍需看同尺度下的振幅。",
            "correction": "固定顯示比例，分開讀振幅、週期與波形形狀。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_171",
        "title": "四個聲音的波形摘要",
        "body": "同一麥克風與顯示尺度記錄四個穩定聲音；波形類型只表示形狀。",
        "dataTable": {
          "caption": "四個聲音的波形摘要",
          "columns": [
            "聲音",
            "頻率",
            "相對振幅／波形"
          ],
          "rows": [
            [
              "甲",
              "250 Hz",
              "1.0／正弦"
            ],
            [
              "乙",
              "500 Hz",
              "1.0／正弦"
            ],
            [
              "丙",
              "500 Hz",
              "2.0／正弦"
            ],
            [
              "丁",
              "500 Hz",
              "2.0／複合波"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_003"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_171_01",
          "stem": "甲聲音頻率 250 Hz，乙聲音頻率 500 Hz，振幅相同。哪項比較正確？",
          "options": [
            "甲音調較高",
            "乙音調較高，兩者響度未必不同",
            "乙一定比甲傳得快",
            "甲音色一定比乙複雜"
          ],
          "answerIndex": 1,
          "rationales": [
            "250 Hz 小於 500 Hz，甲音調較低。",
            "頻率主要決定音調；振幅相同只能支持響度條件相近。",
            "同一空氣中聲速近似相同。",
            "只知頻率不能判定波形複雜度。"
          ],
          "reviewEvidence": "頻率主要決定音調；振幅相同只能支持響度條件相近。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_171_02",
          "stem": "兩個 440 Hz 聲音使用同一麥克風量測，甲振幅 0.5 V、乙振幅 1.5 V。最可能的聽感差異為何？",
          "options": [
            "乙較響，音調相同",
            "乙音調高三倍",
            "甲較響，音調相同",
            "乙傳播速度高三倍"
          ],
          "answerIndex": 0,
          "rationales": [
            "頻率相同決定同音調；1.5 V 大於 0.5 V，表示乙訊號較強。",
            "兩者頻率同為 440 Hz，音調相同。",
            "同尺度下乙振幅較大，通常較響。",
            "振幅不使同介質聲速同比改變。"
          ],
          "reviewEvidence": "頻率相同決定同音調；1.5 V 大於 0.5 V，表示乙訊號較強。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_171_03",
          "stem": "長笛與小提琴演奏同一音高、調到相近響度，仍可分辨樂器。主要依據為何？",
          "options": [
            "兩者聲速一定不同",
            "較重的樂器頻率必較低",
            "兩者波形與諧音組成不同，形成不同音色",
            "只有振幅不同才能分辨"
          ],
          "answerIndex": 2,
          "rationales": [
            "聲音進入同一空氣後聲速近似相同。",
            "樂器總質量不直接決定所奏頻率。",
            "同基頻、近似振幅下，頻譜與波形差異仍造成音色。",
            "題目已將響度調得相近。"
          ],
          "reviewEvidence": "同基頻、近似振幅下，頻譜與波形差異仍造成音色。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_171_04",
          "stem": "某聲波的頻率由 300 Hz 升到 600 Hz，而振幅維持不變。聽感最可能如何？",
          "options": [
            "聲音的音調不變，響度加倍",
            "聲音的音調降低，響度不變",
            "音調升高，響度大致不變",
            "聲速加倍"
          ],
          "answerIndex": 2,
          "rationales": [
            "振幅未變，不支持響度加倍。",
            "頻率加倍使音調上升。",
            "頻率控制音調；振幅維持表示響度條件近似不變。",
            "同介質聲速不因頻率加倍而加倍。"
          ],
          "reviewEvidence": "頻率控制音調；振幅維持表示響度條件近似不變。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_171_05",
          "stem": "某 500 Hz 正弦聲的振幅加倍，頻率與波形形狀不變。哪項描述合理？",
          "options": [
            "通常變得較響，但音調與音色類型不變",
            "聲音的音調變成 1000 Hz",
            "音色必由正弦變成複合波",
            "聲音改成 250 Hz"
          ],
          "answerIndex": 0,
          "rationales": [
            "只改振幅主要改變聲音強弱。",
            "頻率明示不變，仍為 500 Hz。",
            "波形形狀明示不變。",
            "振幅加倍不會把頻率減半。"
          ],
          "reviewEvidence": "只改振幅主要改變聲音強弱。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_171_06",
          "stem": "示波圖相鄰兩波峰間隔縮短，但峰值高度不變。最合理的判讀是什麼？",
          "options": [
            "此波的頻率降低、音調降低",
            "頻率升高、音調升高，響度條件近似不變",
            "此波的振幅增大、聲音變響",
            "音色必完全改變"
          ],
          "answerIndex": 1,
          "rationales": [
            "週期縮短使頻率升高。",
            "T 變短令 f＝1/T 增大；振幅仍相同。",
            "峰值高度未變，振幅沒有增大。",
            "單由週期改變不能斷定音色完全改變。"
          ],
          "reviewEvidence": "T 變短令 f＝1/T 增大；振幅仍相同。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_171_07",
          "stem": "兩個訊號頻率和最大振幅都相同，但一個為正弦波、一個為複合波。可合理預測哪項差異？",
          "options": [
            "聲音的音調一定不同",
            "聲音的響度一定相差十倍",
            "音色可能不同",
            "聲速一定不同"
          ],
          "answerIndex": 2,
          "rationales": [
            "頻率相同使基本音調相同。",
            "沒有十倍聲強資料。",
            "波形與諧音成分不同可造成音色差異。",
            "同介質聲速不由波形複雜度決定。"
          ],
          "reviewEvidence": "波形與諧音成分不同可造成音色差異。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_171_08",
          "stem": "要比較兩個聲音的振幅，示波圖需具備什麼條件？",
          "options": [
            "只需曲線顏色相同",
            "只需頻率相同",
            "一張圖放大十倍也可直接比紙面高度",
            "使用相同麥克風距離與相同縱軸比例"
          ],
          "answerIndex": 3,
          "rationales": [
            "顏色不影響量測值。",
            "頻率相同不保證振幅可直接比。",
            "顯示比例不同會扭曲紙面高度比較。",
            "控制量測與顯示尺度後，峰值高度才可代表相對振幅。"
          ],
          "reviewEvidence": "控制量測與顯示尺度後，峰值高度才可代表相對振幅。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_171_09",
          "stem": "某學生說「丁的波形最複雜，所以丁音調最高」。錯誤在哪裡？",
          "options": [
            "聲音的音調應比較振幅",
            "聲音的音調只由傳播距離決定",
            "波形越複雜頻率一定越低",
            "音調應比較頻率，不是波形複雜度"
          ],
          "answerIndex": 3,
          "rationales": [
            "振幅主要對應響度。",
            "距離主要影響接收強弱，不決定聲源音調。",
            "複雜波仍可有各種基頻。",
            "頻率欄才是音調比較依據；波形主要提供音色資訊。"
          ],
          "reviewEvidence": "頻率欄才是音調比較依據；波形主要提供音色資訊。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_171_10",
          "stem": "A 聲 600 Hz、振幅 1；B 聲 300 Hz、振幅 2。哪項比較最有根據？",
          "options": [
            "A 音調較高，B 通常較響",
            "A 音調較低且較響",
            "B 音調較高，A 較響",
            "A 與 B 聽感必完全相同"
          ],
          "answerIndex": 0,
          "rationales": [
            "A 頻率較高；B 在同尺度下振幅較大。",
            "600 Hz 大於 300 Hz，A 音調不較低。",
            "頻率與振幅兩項都判反。",
            "兩項物理量都不同，不會支持完全相同。"
          ],
          "reviewEvidence": "A 頻率較高；B 在同尺度下振幅較大。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_171_11",
          "stem": "人轉小收音機音量旋鈕後，頻率分析的峰位置不變但整體振幅下降。主要改變哪項聽感？",
          "options": [
            "聲音的音調降低",
            "響度降低",
            "音色必改成另一樂器",
            "聲速降低"
          ],
          "answerIndex": 1,
          "rationales": [
            "頻率峰位置未變，音調不因而降低。",
            "訊號振幅下降而頻率成分維持，主要使聲音變小。",
            "比例縮小不必改變頻譜形狀。",
            "空氣聲速不由音量旋鈕決定。"
          ],
          "reviewEvidence": "訊號振幅下降而頻率成分維持，主要使聲音變小。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_171_12",
          "stem": "同一 500 Hz 音調由兩種樂器發出，頻譜中泛音比例不同。哪項敘述正確？",
          "options": [
            "此波的頻率相同所以音色必相同",
            "泛音只改變聲速",
            "兩者振幅必為零",
            "基頻相同但音色可不同"
          ],
          "answerIndex": 3,
          "rationales": [
            "音色還取決於泛音組成。",
            "泛音比例不改變介質聲速。",
            "有可測頻譜不表示振幅為零。",
            "500 Hz 基頻支持相同音高，泛音差異支持不同音色。"
          ],
          "reviewEvidence": "500 Hz 基頻支持相同音高，泛音差異支持不同音色。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_171_01",
          "stimulusId": "PHYCHM_R4_STIM_171",
          "stem": "表中哪個聲音的音調最低？",
          "options": [
            "甲",
            "乙",
            "丙",
            "丁"
          ],
          "answerIndex": 0,
          "rationales": [
            "甲頻率 250 Hz，是四者最低。",
            "乙為 500 Hz，高於甲。",
            "丙同為 500 Hz。",
            "丁也為 500 Hz。"
          ],
          "reviewEvidence": "甲頻率 250 Hz，是四者最低。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_171_02",
          "stimulusId": "PHYCHM_R4_STIM_171",
          "stem": "乙與丙的主要聽感差異為何？",
          "options": [
            "乙音調較高",
            "兩者音色必不同",
            "丙傳播較快",
            "丙通常較響"
          ],
          "answerIndex": 3,
          "rationales": [
            "兩者頻率同為 500 Hz。",
            "兩者同為正弦波，表中不支持音色必異。",
            "同介質中振幅不決定聲速。",
            "乙、丙頻率與波形相同，丙振幅 2.0 大於乙的 1.0。"
          ],
          "reviewEvidence": "乙、丙頻率與波形相同，丙振幅 2.0 大於乙的 1.0。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "資料分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_171_03",
          "stimulusId": "PHYCHM_R4_STIM_171",
          "stem": "丙與丁仍可能有何差別？",
          "options": [
            "距離",
            "音色",
            "聲音的音調",
            "是否具有振動"
          ],
          "answerIndex": 1,
          "rationales": [
            "表中沒有不同距離資料。",
            "丙為正弦、丁為複合波，波形差異可造成音色不同。",
            "兩者頻率同為 500 Hz。",
            "兩個訊號都有振幅，皆來自振動。"
          ],
          "reviewEvidence": "丙為正弦、丁為複合波，波形差異可造成音色不同。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "證據評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S172",
      "title": "由反射解釋回聲與測距應用",
      "authorityRefs": [
        "AUTH-NATURAL-LC-KA-4-3",
        "AUTH-NATURAL-LC-KA-4-4",
        "AUTH-NATURAL-LC-KA-4-5",
        "AUTH-NATURAL-LC-ME-4-7",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_003"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_172",
        "objective": "能掌握反射解釋回聲與測距應用的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "回聲測距的聲波經往返路程；若聲速 340 m/s、往返 0.40 s，距離為 68 m。"
          },
          {
            "title": "證據判讀",
            "content": "發聲器與麥克風放在同一位置，空氣聲速取 340 m/s。 甲的單程牆距為 17 m。 丙的回聲時間對應 51 m。"
          },
          {
            "title": "適用界線",
            "content": "回聲測距的聲波經往返路程；若聲速 340 m/s、往返 0.40 s，距離為 68 m。 同聲速下時間加倍，牆距也加倍。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_172_EX_01",
            "prompt": "不同牆距的回聲紀錄：發聲器與麥克風放在同一位置，空氣聲速取 340 m/s。 甲的牆距為何？",
            "steps": [
              "發聲器與麥克風放在同一位置，空氣聲速取 340 m/s。",
              "340×0.10÷2。",
              "甲的單程牆距為 17 m。"
            ],
            "answer": "17 m；甲的單程牆距為 17 m。",
            "why": "甲的單程牆距為 17 m。"
          },
          {
            "id": "PHYCHM_R4_L_172_EX_02",
            "prompt": "不同牆距的回聲紀錄：發聲器與麥克風放在同一位置，空氣聲速取 340 m/s。 哪次牆距 51 m？",
            "steps": [
              "發聲器與麥克風放在同一位置，空氣聲速取 340 m/s。",
              "340×0.30÷2＝51。",
              "丙的回聲時間對應 51 m。"
            ],
            "answer": "丙；丙的回聲時間對應 51 m。",
            "why": "丙的回聲時間對應 51 m。"
          },
          {
            "id": "PHYCHM_R4_L_172_EX_03",
            "prompt": "不同牆距的回聲紀錄：發聲器與麥克風放在同一位置，空氣聲速取 340 m/s。 時間由 0.20 s 加倍，牆距如何？",
            "steps": [
              "發聲器與麥克風放在同一位置，空氣聲速取 340 m/s。",
              "0.20 與 0.40 s 分別得 34、68 m。",
              "同聲速下時間加倍，牆距也加倍。"
            ],
            "answer": "34 m 變 68 m；同聲速下時間加倍，牆距也加倍。",
            "why": "同聲速下時間加倍，牆距也加倍。"
          }
        ],
        "misconceptions": [
          {
            "belief": "回聲延遲 0.40 s 時直接算 340×0.40＝136 m，並把往返路程當成牆距。",
            "whyWrong": "聲波先到牆再返回，同地點收音時總路程為牆距的兩倍。",
            "correction": "使用 d＝vt/2；0.40 s 對應牆距 68 m。"
          },
          {
            "belief": "把 0.10 s 當成聲音到牆的單程時間，再另外乘兩倍，算出牆距 34 m。",
            "whyWrong": "題目量到的回聲延遲已包含去程與回程；0.10 s 是往返時間。",
            "correction": "先確認計時起點為發聲、終點為回聲返回，再將 vt 除以二。"
          },
          {
            "belief": "回聲較晚到達就判定聲音頻率較低，把時間延遲當成音調變化。",
            "whyWrong": "延遲由路程與聲速決定；頻率主要決定音調，並非由牆距決定。",
            "correction": "測距使用發射與接收的時間差，不用回聲延遲推測頻率。"
          },
          {
            "belief": "牆距加倍時認為聲速也加倍，所以回聲時間保持不變。",
            "whyWrong": "同一空氣條件下聲速近似固定；路程加倍會使往返時間也加倍。",
            "correction": "固定 v，使用 t＝2d/v 判斷距離與回聲時間成正比。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_172",
        "title": "不同牆距的回聲紀錄",
        "body": "發聲器與麥克風放在同一位置，空氣聲速取 340 m/s。",
        "dataTable": {
          "caption": "不同牆距的回聲紀錄",
          "columns": [
            "試次",
            "回聲時間",
            "牆面距離"
          ],
          "rows": [
            [
              "甲",
              "0.10 s",
              "待算"
            ],
            [
              "乙",
              "0.20 s",
              "待算"
            ],
            [
              "丙",
              "0.30 s",
              "待算"
            ],
            [
              "丁",
              "0.40 s",
              "待算"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_003"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_172_01",
          "stem": "發聲器與麥克風在同一位置，聲速取 340 m/s；發聲後 0.10 s 收到牆面回聲。牆面距離為何？",
          "options": [
            "17 m",
            "34 m",
            "68 m",
            "8.5 m"
          ],
          "answerIndex": 0,
          "rationales": [
            "牆距 d＝vt/2＝340×0.10/2＝17 m。",
            "34 m 是聲音在 0.10 s 的往返總路程，還要除以二。",
            "68 m 對應 0.40 s 的回聲時間。",
            "8.5 m 又多除了一次二。"
          ],
          "reviewEvidence": "牆距 d＝vt/2＝340×0.10/2＝17 m。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_172_02",
          "stem": "同地點發射並接收回聲，空氣聲速 340 m/s，往返時間 0.40 s。反射牆距離為何？",
          "options": [
            "68 m",
            "136 m",
            "34 m",
            "85 m"
          ],
          "answerIndex": 0,
          "rationales": [
            "d＝340×0.40/2＝68 m。",
            "136 m 是往返總路程。",
            "34 m 對應回聲時間 0.20 s。",
            "85 m 不符合 340×0.40/2。"
          ],
          "reviewEvidence": "d＝340×0.40/2＝68 m。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_172_03",
          "stem": "空氣中聲速 340 m/s，回聲往返時間為 0.30 s。聲源到牆的單程距離是多少？",
          "options": [
            "102 m",
            "51 m",
            "25.5 m",
            "340.3 m"
          ],
          "answerIndex": 1,
          "rationales": [
            "102 m 是完整往返路程。",
            "d＝340×0.30/2＝51 m。",
            "25.5 m 把正確單程距離再除以二。",
            "把聲速和時間相加沒有意義。"
          ],
          "reviewEvidence": "d＝340×0.30/2＝51 m。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_172_04",
          "stem": "船底聲納在水中發出聲波，0.080 s 後收到海床回波；水中聲速取 1500 m/s。水深約多少？",
          "options": [
            "120 m",
            "18.75 m",
            "18750 m",
            "60 m"
          ],
          "answerIndex": 3,
          "rationales": [
            "120 m 是聲波往返總路程。",
            "18.75 來自錯誤除法。",
            "把 0.080 當成除數會得到不合理大值。",
            "水深＝1500×0.080/2＝60 m。"
          ],
          "reviewEvidence": "水深＝1500×0.080/2＝60 m。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_172_05",
          "stem": "學生以 d＝vt 計算同地點回聲測距，得到 136 m。已知 v＝340 m/s、t＝0.40 s，錯誤為何？",
          "options": [
            "少乘一次二，牆距應為 272 m",
            "聲速應改成 170 m/s",
            "0.40 s 應視為頻率",
            "136 m 是往返路程，牆距應為 68 m"
          ],
          "answerIndex": 3,
          "rationales": [
            "回聲公式應除以二，不是再乘二。",
            "空氣聲速條件已給 340 m/s。",
            "0.40 s 是時間延遲，不是 Hz。",
            "同處收發時 2d＝vt，所以 d＝136/2＝68 m。"
          ],
          "reviewEvidence": "同處收發時 2d＝vt，所以 d＝136/2＝68 m。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_172_06",
          "stem": "牆距由 34 m 增為 68 m，空氣聲速不變。回聲時間如何改變？",
          "options": [
            "由 0.20 s 減為 0.10 s",
            "維持 0.20 s",
            "由 0.20 s 增為 0.40 s",
            "由 0.20 s 增為 0.80 s"
          ],
          "answerIndex": 2,
          "rationales": [
            "距離加倍不會讓時間減半。",
            "t＝2d/v，距離改變時時間也改變。",
            "t初＝2×34/340＝0.20 s；t末＝2×68/340＝0.40 s。",
            "距離只加倍，時間不會增為四倍。"
          ],
          "reviewEvidence": "t初＝2×34/340＝0.20 s；t末＝2×68/340＝0.40 s。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_172_07",
          "stem": "同地點收發的回聲測距中，為何公式含有除以二？",
          "options": [
            "量到的時間涵蓋聲源到反射面再返回的兩段路程",
            "因聲速必為偶數",
            "因回聲頻率只有原聲一半",
            "因麥克風只記錄一半訊號"
          ],
          "answerIndex": 0,
          "rationales": [
            "總路程 vt＝d去＋d回＝2d。",
            "數值奇偶與路程無關。",
            "理想靜止牆反射不使頻率必減半。",
            "麥克風記錄的是返回時刻，除二來自幾何路程。"
          ],
          "reviewEvidence": "總路程 vt＝d去＋d回＝2d。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_172_08",
          "stem": "山谷中先後在 0.20 s 與 0.50 s 收到兩面岩壁的回聲，聲速 340 m/s。兩岩壁距離分別為何？",
          "options": [
            "68 m 與 170 m",
            "34 m 與 85 m",
            "17 m 與 42.5 m",
            "34 m 與 170 m"
          ],
          "answerIndex": 1,
          "rationales": [
            "兩個數都是往返路程，未除以二。",
            "d₁＝340×0.20/2＝34 m；d₂＝340×0.50/2＝85 m。",
            "把正確距離又除以二。",
            "第二個 170 m 是往返路程。"
          ],
          "reviewEvidence": "d₁＝340×0.20/2＝34 m；d₂＝340×0.50/2＝85 m。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_172_09",
          "stem": "回聲延遲為 200 ms，空氣聲速取 340 m/s。牆距是多少？",
          "options": [
            "68 m",
            "34 m",
            "3.4 m",
            "34000 m"
          ],
          "answerIndex": 1,
          "rationales": [
            "68 m 是 0.20 s 內的往返路程。",
            "200 ms＝0.200 s，d＝340×0.200/2＝34 m。",
            "200 ms＝0.20 s，不是 0.020 s。",
            "未把毫秒換成秒會造成巨大錯誤。"
          ],
          "reviewEvidence": "200 ms＝0.200 s，d＝340×0.200/2＝34 m。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_172_10",
          "stem": "回聲測距要提高可信度，下列哪個作法最適合？",
          "options": [
            "每次任意更換牆面與位置",
            "只保留最接近期望值的一次",
            "在已知溫度下重複量延遲並取平均",
            "把發聲頻率當成往返時間"
          ],
          "answerIndex": 2,
          "rationales": [
            "同時換幾何條件無法比較。",
            "任意挑值會造成選擇偏差。",
            "控制聲速條件與幾何位置，重複計時可降低隨機誤差。",
            "Hz 與 s 是不同物理量。"
          ],
          "reviewEvidence": "控制聲速條件與幾何位置，重複計時可降低隨機誤差。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_172_11",
          "stem": "同一牆面測得回聲總路程為 204 m。牆面離收發器多遠？",
          "options": [
            "204 m",
            "408 m",
            "51 m",
            "102 m"
          ],
          "answerIndex": 3,
          "rationales": [
            "204 m 包含去回兩段。",
            "408 m 是把總路程再加倍。",
            "51 m 是多除一次二。",
            "同處收發時總路程為 2d，所以 d＝204/2＝102 m。"
          ],
          "reviewEvidence": "同處收發時總路程為 2d，所以 d＝204/2＝102 m。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_172_12",
          "stem": "聲速取 340 m/s，牆距 25.5 m。預期回聲延遲為何？",
          "options": [
            "0.15 s",
            "0.075 s",
            "0.30 s",
            "8.67 s"
          ],
          "answerIndex": 0,
          "rationales": [
            "t＝2d/v＝51/340＝0.15 s。",
            "0.075 s 只算單程時間。",
            "0.30 s 對應牆距 51 m。",
            "25.5×340 不是時間。"
          ],
          "reviewEvidence": "t＝2d/v＝51/340＝0.15 s。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_172_01",
          "stimulusId": "PHYCHM_R4_STIM_172",
          "stem": "表中甲試次的牆距為何？",
          "options": [
            "8.5 m",
            "17 m",
            "34 m",
            "68 m"
          ],
          "answerIndex": 1,
          "rationales": [
            "8.5 m 是把 17 m 再除以二。",
            "甲明列回聲時間 0.10 s，d＝340×0.10/2＝17 m。",
            "34 m 是 0.10 s 的往返路程。",
            "68 m 對應丁的 0.40 s。"
          ],
          "reviewEvidence": "甲明列回聲時間 0.10 s，d＝340×0.10/2＝17 m。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_172_02",
          "stimulusId": "PHYCHM_R4_STIM_172",
          "stem": "表中哪一試次的牆距為 51 m？",
          "options": [
            "甲",
            "乙",
            "丙",
            "丁"
          ],
          "answerIndex": 2,
          "rationales": [
            "甲為 17 m。",
            "乙為 34 m。",
            "51＝340×0.30/2，因此對應丙的 0.30 s。",
            "丁為 68 m。"
          ],
          "reviewEvidence": "51＝340×0.30/2，因此對應丙的 0.30 s。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "資料分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_172_03",
          "stimulusId": "PHYCHM_R4_STIM_172",
          "stem": "回聲時間由 0.20 s 加倍為 0.40 s，牆距如何改變？",
          "options": [
            "由 34 m 減為 17 m",
            "維持 34 m",
            "由 34 m 增為 68 m",
            "只增加 17 m"
          ],
          "answerIndex": 2,
          "rationales": [
            "時間加倍時距離不會減半。",
            "同聲速下 d 與 t 成正比。",
            "d＝340t/2；0.20 s 得 34 m，0.40 s 得 68 m。",
            "牆距增加 34 m，不是 17 m。"
          ],
          "reviewEvidence": "d＝340t/2；0.20 s 得 34 m，0.40 s 得 68 m。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "證據評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S173",
      "title": "區分可聽聲超聲波與人耳限制",
      "authorityRefs": [
        "AUTH-NATURAL-LC-KA-4-3",
        "AUTH-NATURAL-LC-KA-4-4",
        "AUTH-NATURAL-LC-KA-4-5",
        "AUTH-NATURAL-LC-ME-4-7",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_003"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_173",
        "objective": "能掌握可聽聲超聲波與人耳限制的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "人耳可聽頻率有範圍；超聲波是頻率高於人類一般可聽範圍的聲波，仍可傳能與反射。"
          },
          {
            "title": "證據判讀",
            "content": "聲壓儀確認四種訊號都有空氣壓力振動，受試者另回報是否聽見。 丁為 30 kHz，屬超聲波。 乙與丙的頻率落在受試者可聽範圍內，因此兩者都被聽見。"
          },
          {
            "title": "適用界線",
            "content": "人耳可聽頻率有範圍；超聲波是頻率高於人類一般可聽範圍的聲波，仍可傳能與反射。 聲壓儀確認甲與丁都造成介質振動。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_173_EX_01",
            "prompt": "不同頻率訊號的偵測：聲壓儀確認四種訊號都有空氣壓力振動，受試者另回報是否聽見。 哪個屬超聲波？",
            "steps": [
              "聲壓儀確認四種訊號都有空氣壓力振動，受試者另回報是否聽見。",
              "30 kHz 高於一般上限。",
              "丁為 30 kHz，屬超聲波。"
            ],
            "answer": "丁；丁為 30 kHz，屬超聲波。",
            "why": "丁為 30 kHz，屬超聲波。"
          },
          {
            "id": "PHYCHM_R4_L_173_EX_02",
            "prompt": "不同頻率訊號的偵測：聲壓儀確認四種訊號都有空氣壓力振動，受試者另回報是否聽見。 哪些被受試者聽見？",
            "steps": [
              "聲壓儀確認四種訊號都有空氣壓力振動，受試者另回報是否聽見。",
              "回報皆為聽見。",
              "乙與丙的頻率落在受試者可聽範圍內，因此兩者都被聽見。"
            ],
            "answer": "乙、丙；乙與丙的頻率落在受試者可聽範圍內，因此兩者都被聽見。",
            "why": "乙與丙的頻率落在受試者可聽範圍內，因此兩者都被聽見。"
          },
          {
            "id": "PHYCHM_R4_L_173_EX_03",
            "prompt": "不同頻率訊號的偵測：聲壓儀確認四種訊號都有空氣壓力振動，受試者另回報是否聽見。 未聽見為何不等於不存在？",
            "steps": [
              "聲壓儀確認四種訊號都有空氣壓力振動，受試者另回報是否聽見。",
              "題幹有儀器證據。",
              "聲壓儀確認甲與丁都造成介質振動。"
            ],
            "answer": "儀器已量到壓力振動；聲壓儀確認甲與丁都造成介質振動。",
            "why": "聲壓儀確認甲與丁都造成介質振動。"
          }
        ],
        "misconceptions": [
          {
            "belief": "人耳聽不到某訊號，就判定那裡沒有聲波，也不可能傳遞能量。",
            "whyWrong": "可聽範圍有限；次聲與超聲仍是介質振動，可被儀器量到並傳遞能量。",
            "correction": "用頻率與感測器讀值判定聲波，不以個人是否聽見作唯一證據。"
          },
          {
            "belief": "把超聲波解讀成特別大聲的聲音，忽略「超」指的是頻率高於可聽上限。",
            "whyWrong": "聲音強弱和振幅相關；超聲分類只看頻率，不表示一定響或能被聽見。",
            "correction": "比較頻率與人耳可聽上限，另以振幅或聲級描述強弱。"
          },
          {
            "belief": "只要把超聲波振幅調大，人耳就一定能聽見。",
            "whyWrong": "振幅增加不會把頻率移入耳朵的感受範圍；高頻仍可能無法產生聽覺。",
            "correction": "要改變可聽性需考慮頻率範圍與個體差異，不能只增大振幅。"
          },
          {
            "belief": "把 15 Hz 和 30 kHz 都稱為超聲波，因為兩者都可能聽不見。",
            "whyWrong": "15 Hz 位於低頻端，屬次聲；30 kHz 才高於一般可聽上限。",
            "correction": "先把 kHz 換成 Hz，再依低於下限或高於上限分類。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_173",
        "title": "不同頻率訊號的偵測",
        "body": "聲壓儀確認四種訊號都有空氣壓力振動，受試者另回報是否聽見。",
        "dataTable": {
          "caption": "不同頻率訊號的偵測",
          "columns": [
            "訊號",
            "頻率",
            "受試者回報"
          ],
          "rows": [
            [
              "甲",
              "15 Hz",
              "未聽見"
            ],
            [
              "乙",
              "500 Hz",
              "聽見"
            ],
            [
              "丙",
              "16 kHz",
              "聽見"
            ],
            [
              "丁",
              "30 kHz",
              "未聽見"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_003"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_173_01",
          "stem": "某儀器量到 30 kHz 的空氣壓力波，人耳未聽見。此訊號應如何分類？",
          "options": [
            "超聲波，因頻率高於一般可聽上限",
            "次聲波，因人耳未聽見",
            "可聽聲，因儀器量得到",
            "不是聲波，因沒有聽感"
          ],
          "answerIndex": 0,
          "rationales": [
            "30 kHz＝30000 Hz，高於人耳一般可聽頻率上限。",
            "未聽見不能區分高於或低於範圍。",
            "儀器可量到不代表人耳可聽。",
            "空氣壓力波已證明它是聲波。"
          ],
          "reviewEvidence": "30 kHz＝30000 Hz，高於人耳一般可聽頻率上限。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_173_02",
          "stem": "15 Hz 的聲音對多數人通常不可聽，較適合稱為什麼？",
          "options": [
            "超聲波",
            "次聲波",
            "高音可聽聲",
            "真空波"
          ],
          "answerIndex": 1,
          "rationales": [
            "超聲波位於高頻端。",
            "15 Hz 低於一般約 20 Hz 的可聽下限。",
            "15 Hz 低於一般可聽下限，不是高音。",
            "它仍需介質，與真空波無關。"
          ],
          "reviewEvidence": "15 Hz 低於一般約 20 Hz 的可聽下限。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_173_03",
          "stem": "超聲波檢查可利用組織界面的反射形成資訊。人耳聽不見並不妨礙使用，原因為何？",
          "options": [
            "超聲波沒有能量，只會顯示顏色",
            "人耳其實能聽見所有超聲波",
            "探頭可發射與接收高頻反射訊號",
            "超聲波不需要介質也能在人體傳播"
          ],
          "answerIndex": 2,
          "rationales": [
            "能形成回波表示它傳遞能量。",
            "人耳有頻率上限。",
            "儀器取代耳朵偵測高頻壓力波與回波時間。",
            "人體超聲仍是機械波，需要組織介質。"
          ],
          "reviewEvidence": "儀器取代耳朵偵測高頻壓力波與回波時間。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_173_04",
          "stem": "把 30 kHz 超聲波的振幅提高，但頻率維持 30 kHz。一般人是否因此必定聽見？",
          "options": [
            "不一定；頻率仍在可聽範圍之外",
            "一定；振幅大就會變成 3 kHz",
            "一定；響度可以取代頻率",
            "不會；因超聲波完全沒有振幅"
          ],
          "answerIndex": 0,
          "rationales": [
            "頻率仍為 30000 Hz，未因振幅改變而進入可聽範圍。",
            "振幅改變不會自動把頻率除以十。",
            "響度與音調頻率是不同性質。",
            "超聲波可以有非零振幅。"
          ],
          "reviewEvidence": "頻率仍為 30000 Hz，未因振幅改變而進入可聽範圍。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_173_05",
          "stem": "500 Hz 與 16 kHz 訊號都被受試者聽見。哪項敘述合理？",
          "options": [
            "16 kHz 必為超聲波",
            "500 Hz 屬次聲波",
            "兩者聲速必因頻率不同而不同",
            "兩者都落在該受試者可聽範圍內"
          ],
          "answerIndex": 3,
          "rationales": [
            "受試者已聽見 16 kHz，且它低於常用 20 kHz 上限。",
            "500 Hz 遠高於低頻下限。",
            "同介質聲速近似相同。",
            "聽覺回報與頻率數值共同支持兩者可聽。"
          ],
          "reviewEvidence": "聽覺回報與頻率數值共同支持兩者可聽。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_173_06",
          "stem": "蝙蝠使用人耳難以聽見的高頻聲波定位。這說明什麼？",
          "options": [
            "超聲波只存在於真空",
            "不同生物的可聽頻率範圍可不同",
            "高頻聲波不會反射",
            "所有動物都只能聽到 500 Hz"
          ],
          "answerIndex": 1,
          "rationales": [
            "聲波定位需介質。",
            "對人屬超聲的頻率仍可被其他動物發射或感受。",
            "回聲定位正利用反射。",
            "不同物種的感覺器官範圍不同。"
          ],
          "reviewEvidence": "對人屬超聲的頻率仍可被其他動物發射或感受。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_173_07",
          "stem": "要判斷某訊號是否為超聲波，最關鍵的量測為何？",
          "options": [
            "此波的振幅",
            "傳播距離",
            "聲源顏色",
            "頻率"
          ],
          "answerIndex": 3,
          "rationales": [
            "此波的振幅描述強弱，不定義超聲。",
            "距離不決定頻率分類。",
            "顏色與聲音頻率無關。",
            "超聲波依頻率高於一般人耳可聽上限定義。"
          ],
          "reviewEvidence": "超聲波依頻率高於一般人耳可聽上限定義。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_173_08",
          "stem": "聲壓儀對 15 Hz 與 30 kHz 都有讀值，但受試者皆未聽見。哪項結論正確？",
          "options": [
            "兩者都是超聲波",
            "兩者都不是聲波",
            "聲壓儀只能量可聽聲",
            "未聽見不代表介質沒有振動"
          ],
          "answerIndex": 3,
          "rationales": [
            "15 Hz 是低頻次聲，不是超聲。",
            "儀器已量到壓力變化。",
            "聲壓儀可量到人耳範圍外的訊號。",
            "客觀儀器讀值證明兩訊號都造成空氣壓力振動。"
          ],
          "reviewEvidence": "客觀儀器讀值證明兩訊號都造成空氣壓力振動。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_173_09",
          "stem": "某訊號由 18 kHz 調到 25 kHz，振幅不變。對多數成人最可能的變化為何？",
          "options": [
            "由可能可聽變成通常不可聽",
            "由超聲變成次聲",
            "聲音的響度必加倍",
            "聲速必增加"
          ],
          "answerIndex": 0,
          "rationales": [
            "25 kHz 高於常用人耳可聽上限，而 18 kHz 仍可能可聽。",
            "頻率是升高，不是移到低頻。",
            "振幅未變，不能說響度加倍。",
            "同介質聲速不因這項頻率改變而必增。"
          ],
          "reviewEvidence": "25 kHz 高於常用人耳可聽上限，而 18 kHz 仍可能可聽。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_173_10",
          "stem": "醫療超聲探頭在皮膚與探頭間塗凝膠，主要為何？",
          "options": [
            "把超聲波變成可見光",
            "使頻率降到人耳可聽範圍",
            "減少空氣間隙，使機械聲波較能進入人體",
            "讓聲波在真空中傳播"
          ],
          "answerIndex": 2,
          "rationales": [
            "成像仍使用聲波。",
            "凝膠不以降低頻率為目的。",
            "連續介質接觸有利高頻機械振動傳入組織。",
            "凝膠提供接觸介質，不是真空。"
          ],
          "reviewEvidence": "連續介質接觸有利高頻機械振動傳入組織。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_173_11",
          "stem": "一個 25 kHz 訊號被儀器偵測到回波。哪項推論有根據？",
          "options": [
            "它一定沒有能量",
            "它可傳播並反射，即使人耳通常聽不見",
            "它的頻率是 25 Hz",
            "它必在真空中傳播"
          ],
          "answerIndex": 1,
          "rationales": [
            "能形成回波表示有能量傳遞。",
            "儀器接收延遲訊號，證明高頻聲波完成傳播與反射。",
            "25 kHz＝25000 Hz。",
            "聲波需要介質。"
          ],
          "reviewEvidence": "儀器接收延遲訊號，證明高頻聲波完成傳播與反射。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_173_12",
          "stem": "可聽範圍會隨年齡與個體而異。面對 18 kHz 測試，哪項作法最科學？",
          "options": [
            "只要一人沒聽見就宣稱訊號不存在",
            "同時記錄受試者回報與儀器確認的聲壓",
            "不量頻率，只比較聲音名稱",
            "把未聽見者資料全部刪除"
          ],
          "answerIndex": 1,
          "rationales": [
            "個人回報不能否定客觀訊號。",
            "主觀聽覺與客觀聲壓並列可區分訊號存在與是否被聽見。",
            "缺少頻率無法分類。",
            "個體差異本來就是需保留的資料。"
          ],
          "reviewEvidence": "主觀聽覺與客觀聲壓並列可區分訊號存在與是否被聽見。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_173_01",
          "stimulusId": "PHYCHM_R4_STIM_173",
          "stem": "表中哪個訊號屬超聲波？",
          "options": [
            "甲",
            "乙",
            "丁",
            "丙"
          ],
          "answerIndex": 2,
          "rationales": [
            "甲為 15 Hz，屬低頻次聲。",
            "乙為 500 Hz，屬可聽範圍。",
            "丁為 30 kHz，高於一般人耳可聽上限。",
            "丙為 16 kHz，受試者也聽見。"
          ],
          "reviewEvidence": "丁為 30 kHz，高於一般人耳可聽上限。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_173_02",
          "stimulusId": "PHYCHM_R4_STIM_173",
          "stem": "表中哪些訊號被受試者聽見？",
          "options": [
            "甲、丁",
            "只有乙",
            "四個訊號",
            "乙、丙"
          ],
          "answerIndex": 3,
          "rationales": [
            "甲與丁均記為未聽見。",
            "丙也記為聽見。",
            "表中不是四者皆聽見。",
            "回報欄顯示乙 500 Hz、丙 16 kHz 為聽見。"
          ],
          "reviewEvidence": "回報欄顯示乙 500 Hz、丙 16 kHz 為聽見。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "資料分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_173_03",
          "stimulusId": "PHYCHM_R4_STIM_173",
          "stem": "甲與丁雖未被聽見，為何不能說訊號不存在？",
          "options": [
            "此波的頻率欄沒有數值",
            "未聽見表示聲速為零",
            "聲壓儀已量到兩者造成的空氣壓力振動",
            "只有可見光才能被儀器量到"
          ],
          "answerIndex": 2,
          "rationales": [
            "表中清楚列出 15 Hz 與 30 kHz。",
            "人耳未感受不等於波速為零。",
            "客觀儀器確認四種訊號都有壓力振動。",
            "聲壓儀專門量機械壓力變化。"
          ],
          "reviewEvidence": "客觀儀器確認四種訊號都有壓力振動。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "證據評估"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S174",
      "title": "以聲音強度與暴露時間評估噪音風險",
      "authorityRefs": [
        "AUTH-NATURAL-LC-KA-4-3",
        "AUTH-NATURAL-LC-KA-4-4",
        "AUTH-NATURAL-LC-KA-4-5",
        "AUTH-NATURAL-LC-ME-4-7",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [
        "PHYCHM_R4_ASSET_003"
      ],
      "lecture": {
        "id": "PHYCHM_R4_L_174",
        "objective": "能掌握聲音強度與暴露時間評估噪音風險的判準與適用條件。",
        "sections": [
          {
            "title": "核心概念",
            "content": "噪音風險同時與聲音強度級和暴露時間有關；較大聲音的安全暴露時間應更短。"
          },
          {
            "title": "證據判讀",
            "content": "聲級計放在耳朵附近量測，時間是當天實際處於該環境的累計值。 汽球爆裂的 110 dB 最高。 圖書整理時間最長，但不代表風險一定最高。"
          },
          {
            "title": "適用界線",
            "content": "噪音風險同時與聲音強度級和暴露時間有關；較大聲音的安全暴露時間應更短。 噪音風險需合併聲級、時間與防護判斷。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_174_EX_01",
            "prompt": "校內活動的聲音暴露：聲級計放在耳朵附近量測，時間是當天實際處於該環境的累計值。 哪項強度級最高？",
            "steps": [
              "聲級計放在耳朵附近量測，時間是當天實際處於該環境的累計值。",
              "110 dB 最大。",
              "汽球爆裂的 110 dB 最高。"
            ],
            "answer": "汽球爆裂；汽球爆裂的 110 dB 最高。",
            "why": "汽球爆裂的 110 dB 最高。"
          },
          {
            "id": "PHYCHM_R4_L_174_EX_02",
            "prompt": "校內活動的聲音暴露：聲級計放在耳朵附近量測，時間是當天實際處於該環境的累計值。 哪項時間最長？",
            "steps": [
              "聲級計放在耳朵附近量測，時間是當天實際處於該環境的累計值。",
              "120 min 最長。",
              "圖書整理時間最長，但不代表風險一定最高。"
            ],
            "answer": "圖書整理；圖書整理時間最長，但不代表風險一定最高。",
            "why": "圖書整理時間最長，但不代表風險一定最高。"
          },
          {
            "id": "PHYCHM_R4_L_174_EX_03",
            "prompt": "校內活動的聲音暴露：聲級計放在耳朵附近量測，時間是當天實際處於該環境的累計值。 評估風險最合理的是？",
            "steps": [
              "聲級計放在耳朵附近量測，時間是當天實際處於該環境的累計值。",
              "三項共同描述暴露。",
              "噪音風險需合併聲級、時間與防護判斷。"
            ],
            "answer": "同時看強度、時間與防護；噪音風險需合併聲級、時間與防護判斷。",
            "why": "噪音風險需合併聲級、時間與防護判斷。"
          }
        ],
        "misconceptions": [
          {
            "belief": "只比較暴露時間，認為待得最久的環境一定最危險，不看聲音強度級。",
            "whyWrong": "噪音風險同時取決於聲級、暴露時間與防護；低聲級長時間不能直接和高聲級短時間只比分鐘數。",
            "correction": "並列聲級與累計時間，再依可靠的暴露指引評估。"
          },
          {
            "belief": "只看瞬間最高 dB，就完全忽略重複次數與累計暴露。",
            "whyWrong": "短暫高峰與長時間暴露都可能重要，單一峰值不能代表整天的總風險。",
            "correction": "記錄峰值、持續時間、重複頻率與防護條件。"
          },
          {
            "belief": "把 110 dB 說成 55 dB 的兩倍強，將分貝刻度當成普通線性數值。",
            "whyWrong": "分貝是對數刻度，不能直接用 110÷55 解讀聲音強度倍數。",
            "correction": "只在未教對數換算時作聲級高低比較，不用數值比例當強度比例。"
          },
          {
            "belief": "戴上耳罩後便認為任何聲級與暴露時間都完全無風險。",
            "whyWrong": "防護效果取決於配戴密合、設備衰減量與環境聲級，並非把聲音降為零。",
            "correction": "量耳旁實際聲級、確認正確配戴，並配合縮短暴露與增加距離。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_174",
        "title": "校內活動的聲音暴露",
        "body": "聲級計放在耳朵附近量測，時間是當天實際處於該環境的累計值。",
        "dataTable": {
          "caption": "校內活動的聲音暴露",
          "columns": [
            "活動",
            "聲音強度級",
            "累計時間"
          ],
          "rows": [
            [
              "圖書整理",
              "55 dB",
              "120 min"
            ],
            [
              "管樂排練",
              "88 dB",
              "90 min"
            ],
            [
              "割草機旁",
              "96 dB",
              "20 min"
            ],
            [
              "汽球爆裂",
              "110 dB",
              "1 min"
            ]
          ]
        },
        "assetIds": [
          "PHYCHM_R4_ASSET_003"
        ]
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_174_01",
          "stem": "評估一名學生當天的噪音暴露，哪組資料最必要？",
          "options": [
            "只記活動名稱",
            "只記待了幾分鐘",
            "耳旁聲級、累計時間與防護情形",
            "只記最喜歡哪種聲音"
          ],
          "answerIndex": 2,
          "rationales": [
            "名稱不能量化聲音或時間。",
            "時間缺少聲級仍不足。",
            "聲級描述強弱，時間描述累積，防護則改變耳朵實際接收量。",
            "喜好不等於聽力風險。"
          ],
          "reviewEvidence": "聲級描述強弱，時間描述累積，防護則改變耳朵實際接收量。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "辨認",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_174_02",
          "stem": "甲在 90 dB 環境 5 min，乙在 70 dB 環境 60 min。能否只由時間判定乙風險較高？",
          "options": [
            "能；60 一定比 5 危險十二倍",
            "不能；還要合併聲級與防護評估",
            "不能；只需比較活動名稱",
            "能；分貝對風險完全無關"
          ],
          "answerIndex": 1,
          "rationales": [
            "分鐘數不能直接轉成風險倍數。",
            "兩人的聲級與時間方向相反，不能只取單一變因排序。",
            "活動名稱不提供聲學量測。",
            "聲級是評估的重要條件。"
          ],
          "reviewEvidence": "兩人的聲級與時間方向相反，不能只取單一變因排序。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "關係判讀",
            "概念理解"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_174_03",
          "stem": "某設備標示 110 dB，另一環境為 55 dB。哪項說法正確？",
          "options": [
            "110 dB 的強度恰為兩倍",
            "110 dB 的聲級較高，但不能說強度只是 55 dB 的兩倍",
            "兩者聲音強度完全相同",
            "55 dB 一定比 110 dB 危險"
          ],
          "answerIndex": 1,
          "rationales": [
            "分貝是對數刻度，不能直接以數值比解讀。",
            "可比較 110 dB 高於 55 dB，但 110/55 不是強度倍數。",
            "聲級數值不同，不能說完全相同。",
            "在其他條件相同時較高聲級通常更需注意。"
          ],
          "reviewEvidence": "可比較 110 dB 高於 55 dB，但 110/55 不是強度倍數。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位檢核",
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_174_04",
          "stem": "要比較耳罩是否降低暴露，最合適的量測方式是什麼？",
          "options": [
            "只比較耳罩顏色",
            "戴耳罩後不量聲音就宣稱完全安全",
            "在相同聲源位置量耳旁配戴前後聲級",
            "配戴前後同時改變聲源距離"
          ],
          "answerIndex": 2,
          "rationales": [
            "顏色不代表衰減性能。",
            "沒有量測不能確認實際效果。",
            "控制聲源與位置，前後量測才能估計耳罩衰減。",
            "同時改距離會混淆耳罩效果。"
          ],
          "reviewEvidence": "控制聲源與位置，前後量測才能估計耳罩衰減。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_174_05",
          "stem": "同一割草機旁，工作者把距離增加並縮短停留時間。這兩項措施的共同目的為何？",
          "options": [
            "降低耳朵接收的聲音與累計暴露",
            "提高聲源頻率",
            "使空氣聲速變為零",
            "讓分貝刻度改成線性"
          ],
          "answerIndex": 0,
          "rationales": [
            "遠離聲源通常降低接收聲級，縮短時間則降低累計暴露。",
            "距離與時間不必改變機器頻率。",
            "空氣仍可傳聲。",
            "措施不改變刻度定義。"
          ],
          "reviewEvidence": "遠離聲源通常降低接收聲級，縮短時間則降低累計暴露。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件判斷",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_174_06",
          "stem": "一聲短促爆裂聲只持續 1 s，是否可因時間短就完全忽略？",
          "options": [
            "不可；仍需考慮峰值聲級與是否重複",
            "可以；少於一分鐘都無風險",
            "不可；因所有短聲都比長聲危險",
            "可以；只要聽起來不討厭"
          ],
          "answerIndex": 0,
          "rationales": [
            "完整紀錄應含峰值、持續時間和發生次數。",
            "極高峰值即使短暫也值得評估。",
            "不能把所有短聲一概判為更危險。",
            "主觀厭惡與聲學暴露不同。"
          ],
          "reviewEvidence": "完整紀錄應含峰值、持續時間和發生次數。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "錯誤分析",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_174_07",
          "stem": "兩次管樂排練的聲級都約 88 dB，一次 30 min、一次 90 min，防護相同。哪次累計暴露較多？",
          "options": [
            "90 min 的排練",
            "30 min 的排練",
            "兩次一定完全相同",
            "無法比較任何資訊"
          ],
          "answerIndex": 0,
          "rationales": [
            "同聲級與防護下，暴露時間較長者累計較多。",
            "聲級相同時較短時間累積較少。",
            "時間不同，暴露不會完全相同。",
            "已有相同聲級與不同時間可作定性比較。"
          ],
          "reviewEvidence": "同聲級與防護下，暴露時間較長者累計較多。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據判讀",
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_174_08",
          "stem": "學生以手機在口袋量聲級，另一組把校正聲級計放在耳旁。哪組資料較適合評估耳朵暴露？",
          "options": [
            "口袋中的手機一定更準",
            "兩者位置與儀器都不影響結果",
            "只需問學生主觀感覺",
            "耳旁的校正聲級計"
          ],
          "answerIndex": 3,
          "rationales": [
            "未校正且位置不同會造成偏差。",
            "量測位置和儀器校正都重要。",
            "感覺可補充但不能取代聲級資料。",
            "耳旁位置較接近實際暴露，校正儀器也提高可比性。"
          ],
          "reviewEvidence": "耳旁位置較接近實際暴露，校正儀器也提高可比性。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係應用",
            "多步驟推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_174_09",
          "stem": "一段聲音令人討厭但聲級不高，另一段音樂很喜歡但聲級很高。風險判斷應以何者為主？",
          "options": [
            "喜歡的聲音一定無害",
            "討厭的聲音一定聲級最高",
            "只看音調高低",
            "客觀聲級、時間與防護，不只看喜好"
          ],
          "answerIndex": 3,
          "rationales": [
            "喜好不會消除物理暴露。",
            "討厭程度不等於聲級。",
            "音調不是完整風險指標。",
            "噪音的主觀感受與聽力暴露需分開記錄。"
          ],
          "reviewEvidence": "噪音的主觀感受與聽力暴露需分開記錄。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "證據判讀",
            "分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_174_10",
          "stem": "為找出校園高暴露區，哪種調查較合理？",
          "options": [
            "每區只憑一次印象排名",
            "在固定位置與時段重複量聲級，並記錄人員停留時間",
            "不同區使用不同未校正儀器且不記位置",
            "只拍照片不量聲音"
          ],
          "answerIndex": 1,
          "rationales": [
            "印象容易受主觀與偶然事件影響。",
            "重複且可比的聲級與時間紀錄可支持風險排序。",
            "儀器與位置不一致使資料難比較。",
            "照片通常不能給聲級。"
          ],
          "reviewEvidence": "重複且可比的聲級與時間紀錄可支持風險排序。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "主張評估",
            "證據評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_174_11",
          "stem": "耳塞標示可降低部分聲音，但使用者配戴鬆脫。評估時應如何處理？",
          "options": [
            "此時物體仍假設達到完整標示效果",
            "把環境聲級記為零",
            "以實際配戴狀況量耳旁聲級，不直接採標示最大值",
            "只增加暴露時間來測試"
          ],
          "answerIndex": 2,
          "rationales": [
            "鬆脫會降低密合與實際衰減。",
            "防護不會把所有聲音消除。",
            "防護效能需依正確配戴與現場量測判定。",
            "刻意增加暴露不是必要的安全作法。"
          ],
          "reviewEvidence": "防護效能需依正確配戴與現場量測判定。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "情境遷移",
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_174_12",
          "stem": "表中圖書整理 55 dB、120 min，割草機旁 96 dB、20 min。哪項解讀最恰當？",
          "options": [
            "圖書整理一定最高風險",
            "割草機旁一定完全無風險",
            "兩者 dB 可直接相加比較",
            "不能只因圖書整理時間長就判它風險一定較高"
          ],
          "answerIndex": 3,
          "rationales": [
            "忽略 55 與 96 dB 的差異。",
            "96 dB 的暴露仍需評估。",
            "聲級不能用這種方式相加成風險。",
            "需同時考慮兩活動的聲級、時間和防護。"
          ],
          "reviewEvidence": "需同時考慮兩活動的聲級、時間和防護。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "限制評估",
            "高層推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_174_01",
          "stimulusId": "PHYCHM_R4_STIM_174",
          "stem": "表中哪項活動的聲音強度級最高？",
          "options": [
            "圖書整理 55 dB",
            "管樂排練 88 dB",
            "汽球爆裂 110 dB",
            "割草機旁 96 dB"
          ],
          "answerIndex": 2,
          "rationales": [
            "55 dB 是最低值。",
            "88 dB 低於 110 dB。",
            "四列最大聲級數值為 110 dB。",
            "96 dB 仍低於 110 dB。"
          ],
          "reviewEvidence": "四列最大聲級數值為 110 dB。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_174_02",
          "stimulusId": "PHYCHM_R4_STIM_174",
          "stem": "表中哪項活動的累計時間最長？",
          "options": [
            "圖書整理 120 min",
            "管樂排練 90 min",
            "割草機旁 20 min",
            "汽球爆裂 1 min"
          ],
          "answerIndex": 0,
          "rationales": [
            "時間欄最大值為圖書整理的 120 min。",
            "90 min 少於 120 min。",
            "20 min 少於 120 min。",
            "1 min 是最短時間。"
          ],
          "reviewEvidence": "時間欄最大值為圖書整理的 120 min。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "資料分析"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_174_03",
          "stimulusId": "PHYCHM_R4_STIM_174",
          "stem": "根據表格評估噪音風險，哪種方法最合理？",
          "options": [
            "只看時間長短",
            "只挑最高 dB 而忽略其他暴露",
            "把 110 dB 當成 55 dB 的兩倍強",
            "同時看聲級、時間與使用的防護"
          ],
          "answerIndex": 3,
          "rationales": [
            "時間不能單獨代表暴露。",
            "最高峰重要，但不能取代整日累計評估。",
            "分貝不是普通線性倍數。",
            "完整評估需整合聲音強弱、持續時間和防護效果。"
          ],
          "reviewEvidence": "完整評估需整合聲音強弱、持續時間和防護效果。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "證據評估"
          ]
        }
      ]
    }
  ]
};
