export const PHYSICS_CHEMISTRY_AUTHORED_U12 = {
  "unitId": "PHYCHM_R4_U12",
  "title": "化學反應的定量關係",
  "authorityRefs": [
    "AUTH-NATURAL-LC-AA-4-2",
    "AUTH-NATURAL-LC-JA-4-1",
    "AUTH-NATURAL-LC-JA-4-4",
    "AUTH-NATURAL-LC-JB-4-4",
    "AUTH-NATURAL-LP-PA-4-1",
    "AUTH-NATURAL-LP-PA-4-2"
  ],
  "provenance": {
    "status": "original",
    "authorRole": "Codex R4 physics and chemistry content author",
    "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
  },
  "skills": [
    {
      "id": "PHYCHM_R4_S089",
      "title": "由原子量加總求簡單分子量",
      "authorityRefs": [
        "AUTH-NATURAL-LC-AA-4-2",
        "AUTH-NATURAL-LC-JA-4-1",
        "AUTH-NATURAL-LC-JA-4-4",
        "AUTH-NATURAL-LC-JB-4-4",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_089",
        "objective": "能依題目提供的相對原子量，讀取化學式下標並計算簡單物質的相對分子量或式量。",
        "sections": [
          {
            "title": "化學式是一張原子清單",
            "content": "相對分子量要把一個分子內所有原子的相對原子量加總。CO₂ 含1個C與2個O，因此不是只把12與16各加一次，而是12＋2×16。離子化合物也可用同樣方法求式量。"
          },
          {
            "title": "括號外下標乘括號內整組",
            "content": "Ca(OH)₂ 中有1個Ca、2個O與2個H。閱讀時先展開括號，再依每種元素的個數乘相對原子量，最後加總。反應式前的係數不屬於單一分子的相對分子量。"
          },
          {
            "title": "結果是相對值，不是單一分子的克數",
            "content": "相對分子量本身沒有g單位。題目若問一批物質的實際質量，還需要粒子數或其他定量資訊；不能把水的相對分子量18直接說成每個水分子重18 g。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_089_EX_01",
            "prompt": "已知 C＝12、O＝16，求 CO₂ 的相對分子量。",
            "steps": [
              "CO₂ 含1個C與2個O。",
              "列式12＋2×16。",
              "算得44。"
            ],
            "answer": "44。",
            "why": "氧的下標2表示兩個氧原子都要計入；12＋32＝44。"
          },
          {
            "id": "PHYCHM_R4_L_089_EX_02",
            "prompt": "已知 H＝1、O＝16，求 3H₂O 中一個 H₂O 的相對分子量。",
            "steps": [
              "前方3是分子個數，不改變單一分子組成。",
              "一個H₂O含H2、O1。",
              "2×1＋16＝18。"
            ],
            "answer": "18。",
            "why": "問題問單一水分子，因此不把反應式或樣本中的三個分子一起加總。"
          },
          {
            "id": "PHYCHM_R4_L_089_EX_03",
            "prompt": "已知 Ca＝40、O＝16、H＝1，求 Ca(OH)₂ 的式量。",
            "steps": [
              "括號外2使O與H各有2個。",
              "列40＋2×16＋2×1。",
              "總和為74。"
            ],
            "answer": "74。",
            "why": "Ca只有1個，OH整組有2份；展開後逐元素加總可避免漏掉括號作用。"
          }
        ],
        "misconceptions": [
          {
            "belief": "同種元素在化學式中只加一次原子量。",
            "whyWrong": "下標表示同種原子出現多次。",
            "correction": "先寫每種元素的原子個數，再乘原子量。"
          },
          {
            "belief": "反應式係數要乘進單一分子的相對分子量。",
            "whyWrong": "係數改變粒子個數，不改變每個粒子的組成。",
            "correction": "先確認問題問單一粒子或整組粒子。"
          },
          {
            "belief": "相對分子量44表示每個CO₂分子重44 g。",
            "whyWrong": "相對分子量是相對尺度，沒有克單位。",
            "correction": "不要把相對值直接當成宏觀質量。"
          },
          {
            "belief": "Ca(OH)₂ 的下標2只乘H。",
            "whyWrong": "括號外下標作用於括號內全部元素。",
            "correction": "展開成Ca₁O₂H₂再計算。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_089",
        "title": "常用相對原子量表",
        "body": "學生只使用下表數值計算，不需查閱其他資料。",
        "dataTable": {
          "caption": "相對原子量",
          "columns": [
            "元素",
            "H",
            "C",
            "N",
            "O",
            "Na",
            "Cl",
            "Ca"
          ],
          "rows": [
            [
              "相對原子量",
              "1",
              "12",
              "14",
              "16",
              "23",
              "35.5",
              "40"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_089_01",
          "stem": "已知H＝1、O＝16，H₂O的相對分子量是多少？",
          "options": [
            "17",
            "34",
            "18",
            "32"
          ],
          "answerIndex": 2,
          "rationales": [
            "只算一個H。",
            "把H₂與O₂相加。",
            "2×1＋16＝18。",
            "誤算成2個O。"
          ],
          "reviewEvidence": "18：2×1＋16＝18；17：只算一個H；34：把H₂與O₂相加；32：誤算成2個O。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "化學式解讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_089_02",
          "stem": "已知N＝14、H＝1，NH₃的相對分子量為何？",
          "options": [
            "16",
            "15",
            "42",
            "17"
          ],
          "answerIndex": 3,
          "rationales": [
            "漏一個H。",
            "只加一個H。",
            "把14乘3。",
            "14＋3＝17。"
          ],
          "reviewEvidence": "17：14＋3＝17；16：漏一個H；15：只加一個H；42：把14乘3。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "加總"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_089_03",
          "stem": "CO₂ 中氧原子量應計算幾次？",
          "options": [
            "依係數決定",
            "0次",
            "2次",
            "1次"
          ],
          "answerIndex": 2,
          "rationales": [
            "單一分子組成不看前方係數。",
            "CO₂含氧。",
            "O下標2表示兩個氧。",
            "漏讀下標2。"
          ],
          "reviewEvidence": "2次：O下標2表示兩個氧；依係數決定：單一分子組成不看前方係數；0次：CO₂含氧；1次：漏讀下標2。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "下標辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_089_04",
          "stem": "已知Na＝23、Cl＝35.5，NaCl的式量是多少？",
          "options": [
            "12.5",
            "58.5",
            "35.5",
            "46"
          ],
          "answerIndex": 1,
          "rationales": [
            "錯誤相減。",
            "23＋35.5＝58.5。",
            "只算Cl。",
            "只把Na乘2。"
          ],
          "reviewEvidence": "58.5：23＋35.5＝58.5；12.5：錯誤相減；35.5：只算Cl；46：只把Na乘2。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "式量計算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_089_05",
          "stem": "已知C＝12、H＝1，CH₄的相對分子量為何？",
          "options": [
            "16",
            "13",
            "48",
            "52"
          ],
          "answerIndex": 0,
          "rationales": [
            "12＋4×1＝16。",
            "漏算3個H。",
            "把C乘H下標。",
            "錯誤加乘。"
          ],
          "reviewEvidence": "16：12＋4×1＝16；13：漏算3個H；48：把C乘H下標；52：錯誤加乘。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "定量計算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_089_06",
          "stem": "已知H＝1、O＝16，H₂O₂的相對分子量為何？",
          "options": [
            "18",
            "34",
            "33",
            "36"
          ],
          "answerIndex": 1,
          "rationales": [
            "這是H₂O。",
            "2＋32＝34。",
            "漏一個H。",
            "多算兩個H。"
          ],
          "reviewEvidence": "34：2＋32＝34；18：這是H₂O；33：漏一個H；36：多算兩個H。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "雙下標"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_089_07",
          "stem": "2CO₂中的『2』對一個CO₂分子的相對分子量有何影響？",
          "options": [
            "不影響單一分子的44",
            "係數2會使單一碳原子的相對原子量變成24",
            "使44變88",
            "使氧下標變4"
          ],
          "answerIndex": 0,
          "rationales": [
            "單一CO₂組成不變。",
            "元素原子量不變。",
            "88是兩個分子的相對總量。",
            "係數不改下標。"
          ],
          "reviewEvidence": "不影響單一分子的44：單一CO₂組成不變；係數2會使單一碳原子的相對原子量變成24：元素原子量不變；使44變88：88是兩個分子的相對總量；使氧下標變4：係數不改下標。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "係數區辨"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_089_08",
          "stem": "已知Ca＝40、Cl＝35.5，CaCl₂的式量是多少？",
          "options": [
            "75.5",
            "146.5",
            "151",
            "111"
          ],
          "answerIndex": 3,
          "rationales": [
            "只算一個Cl。",
            "錯誤倍乘Ca。",
            "加總錯誤。",
            "40＋2×35.5＝111。"
          ],
          "reviewEvidence": "111：40＋2×35.5＝111；75.5：只算一個Cl；146.5：錯誤倍乘Ca；151：加總錯誤。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "下標乘法"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_089_09",
          "stem": "某生把CO₂算成12＋16＝28。他漏掉哪個資訊？",
          "options": [
            "C的係數",
            "反應溫度",
            "分子的顏色",
            "O的下標2"
          ],
          "answerIndex": 3,
          "rationales": [
            "C前係數不是問題。",
            "溫度不改相對分子量。",
            "顏色無關。",
            "氧應計兩次。"
          ],
          "reviewEvidence": "O的下標2：氧應計兩次；C的係數：C前係數不是問題；反應溫度：溫度不改相對分子量；分子的顏色：顏色無關。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "錯誤診斷"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_089_10",
          "stem": "已知N＝14、O＝16，N₂O₄的相對分子量為何？",
          "options": [
            "60",
            "76",
            "92",
            "30"
          ],
          "answerIndex": 2,
          "rationales": [
            "錯把下標相乘。",
            "漏一個氧。",
            "2×14＋4×16＝92。",
            "只各加一次。"
          ],
          "reviewEvidence": "92：2×14＋4×16＝92；60：錯把下標相乘；76：漏一個氧；30：只各加一次。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "多原子加總"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_089_11",
          "stem": "已知Ca＝40、O＝16、H＝1，Ca(OH)₂的式量是多少？",
          "options": [
            "74",
            "58",
            "73",
            "57"
          ],
          "answerIndex": 0,
          "rationales": [
            "40＋32＋2＝74。",
            "括號展開後加總錯。",
            "漏一個H。",
            "只算一組OH。"
          ],
          "reviewEvidence": "74：40＋32＋2＝74；58：括號展開後加總錯；73：漏一個H；57：只算一組OH。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "括號展開"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_089_12",
          "stem": "若X₂Y的式量為46，已知X的相對原子量為15，Y為多少？",
          "options": [
            "23",
            "31",
            "16",
            "8"
          ],
          "answerIndex": 2,
          "rationales": [
            "把46除2。",
            "只減一個X。",
            "46−30＝16。",
            "46−2×15不是8。"
          ],
          "reviewEvidence": "16：46−30＝16；23：把46除2；31：只減一個X；8：46−2×15不是8。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "逆向代數"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_089_01",
          "stimulusId": "PHYCHM_R4_STIM_089",
          "stem": "利用表格，CO的相對分子量是多少？",
          "options": [
            "16",
            "28",
            "32",
            "44"
          ],
          "answerIndex": 1,
          "rationales": [
            "只算O。",
            "12＋16＝28。",
            "誤算O₂。",
            "這是CO₂。"
          ],
          "reviewEvidence": "28：12＋16＝28；16：只算O；32：誤算O₂；44：這是CO₂。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料表使用"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_089_02",
          "stimulusId": "PHYCHM_R4_STIM_089",
          "stem": "Na₂CO₃的式量為何？",
          "options": [
            "118",
            "94",
            "83",
            "106"
          ],
          "answerIndex": 3,
          "rationales": [
            "錯誤加總。",
            "少一個碳。",
            "漏算部分氧。",
            "2×23＋12＋3×16＝106。"
          ],
          "reviewEvidence": "106：2×23＋12＋3×16＝106；118：錯誤加總；94：少一個碳；83：漏算部分氧。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "多元素計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_089_03",
          "stimulusId": "PHYCHM_R4_STIM_089",
          "stem": "哪個物質的相對分子量最大？",
          "options": [
            "NH₃，因它含有四個原子所以式量最大",
            "NaCl",
            "CO₂",
            "H₂O"
          ],
          "answerIndex": 1,
          "rationales": [
            "NH₃為17。",
            "NaCl為58.5。",
            "CO₂為44。",
            "H₂O為18。"
          ],
          "reviewEvidence": "NaCl：NaCl為58.5；NH₃，因它含有四個原子所以式量最大：NH₃為17；CO₂：CO₂為44；H₂O：H₂O為18。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "比較"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S090",
      "title": "由配平方程式判斷粒子數比例",
      "authorityRefs": [
        "AUTH-NATURAL-LC-AA-4-2",
        "AUTH-NATURAL-LC-JA-4-1",
        "AUTH-NATURAL-LC-JA-4-4",
        "AUTH-NATURAL-LC-JB-4-4",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_090",
        "objective": "能先確認反應式已配平，再由最簡係數讀出粒子比例並進行整組倍增或約簡。",
        "sections": [
          {
            "title": "比例必須來自已配平反應式",
            "content": "未配平式不符合原子守恆，不能拿來推算反應量。先逐元素驗算，再依物質排列順序讀係數；沒有係數視為1。"
          },
          {
            "title": "係數可以同比放大",
            "content": "N₂＋3H₂→2NH₃ 表示1：3：2，也可為2：6：4或5：15：10。若只有某一項不按同倍數變化，就不是恰好反應的完整比例。"
          },
          {
            "title": "粒子比例回答數量，不回答質量",
            "content": "粒子數比可判斷需要幾個分子或形成幾個粒子。要轉成質量，需再考慮每種物質的相對分子量；不能把係數直接加上g。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_090_EX_01",
            "prompt": "由N₂＋3H₂→2NH₃推算4個N₂恰好反應時的H₂與NH₃。",
            "steps": [
              "基本比例1：3：2。",
              "N₂由1變4，倍數是4。",
              "H₂為12，NH₃為8。"
            ],
            "answer": "需12個H₂，形成8個NH₃。",
            "why": "三個係數同乘4才能保持原子守恆與恰好反應比例。"
          },
          {
            "id": "PHYCHM_R4_L_090_EX_02",
            "prompt": "2CO＋O₂→2CO₂中，10個CO需要多少O₂？",
            "steps": [
              "CO：O₂＝2：1。",
              "10是2的5倍。",
              "O₂需5個。"
            ],
            "answer": "5個O₂。",
            "why": "每兩個CO消耗一個O₂，五組反應正好消耗十個CO。"
          },
          {
            "id": "PHYCHM_R4_L_090_EX_03",
            "prompt": "資料寫成6H₂、2O₂、6H₂O，是否符合2：1：2？",
            "steps": [
              "將三項與基本比例比較。",
              "6H₂對應倍數3時，O₂應為3。",
              "實際只有2，比例不足。"
            ],
            "answer": "不符合。",
            "why": "只把H₂與H₂O放大三倍，O₂沒有同比增加，不能代表恰好反應。"
          }
        ],
        "misconceptions": [
          {
            "belief": "未配平的式子也能直接讀比例。",
            "whyWrong": "原子數不守恆的比例不代表實際反應。",
            "correction": "先配平並驗算，再讀係數。"
          },
          {
            "belief": "係數前沒寫數字就是0。",
            "whyWrong": "省略係數代表1。",
            "correction": "把空白係數補成1再列比例。"
          },
          {
            "belief": "比例放大時只增加反應物，不改生成物。",
            "whyWrong": "整組反應量必須同比例變化。",
            "correction": "找共同倍數並乘所有係數。"
          },
          {
            "belief": "3H₂表示一個分子內有3個氫。",
            "whyWrong": "3是H₂分子個數，每個仍有2個H。",
            "correction": "區分係數3與下標2。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_090",
        "title": "氨生成模型批次",
        "body": "反應式為N₂＋3H₂→2NH₃。表中每列列出投入或生成的粒子數，有一列不符合完整反應比例。",
        "dataTable": {
          "caption": "粒子批次",
          "columns": [
            "批次",
            "N₂",
            "H₂",
            "NH₃"
          ],
          "rows": [
            [
              "甲",
              "1",
              "3",
              "2"
            ],
            [
              "乙",
              "2",
              "6",
              "4"
            ],
            [
              "丙",
              "3",
              "8",
              "6"
            ],
            [
              "丁",
              "4",
              "12",
              "8"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_090_01",
          "stem": "N₂＋3H₂→2NH₃的粒子數比為何？",
          "options": [
            "1：3：2",
            "1：2：3",
            "2：3：1",
            "2：2：3"
          ],
          "answerIndex": 0,
          "rationales": [
            "依係數1、3、2。",
            "生成物係數錯。",
            "順序與數值不符。",
            "混用下標。"
          ],
          "reviewEvidence": "1：3：2：依係數1、3、2；1：2：3：生成物係數錯；2：3：1：順序與數值不符；2：2：3：混用下標。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "比例讀取"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_090_02",
          "stem": "2CO＋O₂→2CO₂中，O₂係數為多少？",
          "options": [
            "2",
            "依下標2",
            "0",
            "1"
          ],
          "answerIndex": 3,
          "rationales": [
            "2是下標。",
            "係數與下標分開。",
            "O₂參與反應。",
            "未標係數視為1。"
          ],
          "reviewEvidence": "1：未標係數視為1；2：2是下標；依下標2：係數與下標分開；0：O₂參與反應。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "符號慣例"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_090_03",
          "stem": "比例1：3：2放大2倍為何？",
          "options": [
            "2：4：3",
            "2：6：4",
            "1：6：2",
            "3：5：4"
          ],
          "answerIndex": 1,
          "rationales": [
            "不是同比。",
            "三項皆乘2。",
            "只改中項。",
            "使用加2。"
          ],
          "reviewEvidence": "2：6：4：三項皆乘2；2：4：3：不是同比；1：6：2：只改中項；3：5：4：使用加2。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "同比放大"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_090_04",
          "stem": "若6個H₂依N₂＋3H₂→2NH₃恰好反應，需要幾個N₂？",
          "options": [
            "2",
            "6",
            "3",
            "1"
          ],
          "answerIndex": 0,
          "rationales": [
            "6是3的2倍，N₂為2。",
            "誤認1：1。",
            "誤認2：1。",
            "只足3H₂。"
          ],
          "reviewEvidence": "2：6是3的2倍，N₂為2；6：誤認1：1；3：誤認2：1；1：只足3H₂。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "反向比例"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_090_05",
          "stem": "4Al＋3O₂→2Al₂O₃中，8個Al完全反應需多少O₂？",
          "options": [
            "6",
            "4",
            "8",
            "3"
          ],
          "answerIndex": 0,
          "rationales": [
            "Al倍增2，O₂為6。",
            "誤認2：1。",
            "誤認1：1。",
            "只是一個基本組。"
          ],
          "reviewEvidence": "6：Al倍增2，O₂為6；4：誤認2：1；8：誤認1：1；3：只是一個基本組。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "多係數推算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_090_06",
          "stem": "哪組不是1：3：2的等值比例？",
          "options": [
            "2：6：4",
            "5：12：10",
            "3：9：6",
            "4：12：8不是1：3：2，因三數都較大"
          ],
          "answerIndex": 1,
          "rationales": [
            "同乘2。",
            "中項應為15。",
            "同乘3。",
            "同乘4。"
          ],
          "reviewEvidence": "5：12：10：中項應為15；2：6：4：同乘2；3：9：6：同乘3；4：12：8不是1：3：2，因三數都較大：同乘4。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "比例檢查"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_090_07",
          "stem": "讀反應比例前必須先做哪項檢查？",
          "options": [
            "先確認反應容器透明，才能讀出係數比例",
            "天氣是否晴朗",
            "反應式是否已配平",
            "物質名稱字數"
          ],
          "answerIndex": 2,
          "rationales": [
            "透明與否無關。",
            "天氣無關。",
            "只有配平係數能表達守恆比例。",
            "字數無關。"
          ],
          "reviewEvidence": "反應式是否已配平：只有配平係數能表達守恆比例；先確認反應容器透明，才能讀出係數比例：透明與否無關；天氣是否晴朗：天氣無關；物質名稱字數：字數無關。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "程序"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_090_08",
          "stem": "2H₂＋O₂→2H₂O中，8個H₂最多可形成幾個H₂O（O₂足量）？",
          "options": [
            "2",
            "4",
            "16",
            "8"
          ],
          "answerIndex": 3,
          "rationales": [
            "只算一組。",
            "少一半。",
            "多一倍。",
            "H₂與H₂O係數相同。"
          ],
          "reviewEvidence": "8：H₂與H₂O係數相同；2：只算一組；4：少一半；16：多一倍。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "產物推算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_090_09",
          "stem": "某式尚未配平為H₂＋O₂→H₂O，直接讀成1：1：1有何問題？",
          "options": [
            "三項係數必須不同",
            "水沒有氧",
            "氧原子左2右1",
            "氫原子左1右2"
          ],
          "answerIndex": 2,
          "rationales": [
            "係數可有相同項。",
            "水含氧。",
            "指出未平衡處。",
            "氫左2右2。"
          ],
          "reviewEvidence": "氧原子左2右1：指出未平衡處；三項係數必須不同：係數可有相同項；水沒有氧：水含氧；氫原子左1右2：氫左2右2。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "前提檢查"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_090_10",
          "stem": "反應比例2：1：2，提供12個第一物質與5個第二物質。要讓第二物質全用完，第一物質實際消耗多少？",
          "options": [
            "24",
            "12",
            "10",
            "5"
          ],
          "answerIndex": 2,
          "rationales": [
            "倍數過大。",
            "12會剩2。",
            "每1第二物質需2第一物質。",
            "誤認1：1。"
          ],
          "reviewEvidence": "10：每1第二物質需2第一物質；24：倍數過大；12：12會剩2；5：誤認1：1。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "限制條件"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_090_11",
          "stem": "3A＋2B→C中，形成7個C需要多少A與B？",
          "options": [
            "A21、B14",
            "A7、B7",
            "A14、B21",
            "A10、B9"
          ],
          "answerIndex": 0,
          "rationales": [
            "三項同乘7。",
            "忽略係數。",
            "A、B顛倒。",
            "不成比例。"
          ],
          "reviewEvidence": "A21、B14：三項同乘7；A7、B7：忽略係數；A14、B21：A、B顛倒；A10、B9：不成比例。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "三元比例"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_090_12",
          "stem": "某學生用係數比例推算出粒子數，下一步若要談質量，還需什麼？",
          "options": [
            "更多顏色",
            "各物質相對分子量",
            "把反應式係數直接改成各物質化學式下標",
            "刪除生成物"
          ],
          "answerIndex": 1,
          "rationales": [
            "顏色不提供質量。",
            "質量取決於每粒子相對質量。",
            "會改物質。",
            "生成物不能刪。"
          ],
          "reviewEvidence": "各物質相對分子量：質量取決於每粒子相對質量；更多顏色：顏色不提供質量；把反應式係數直接改成各物質化學式下標：會改物質；刪除生成物：生成物不能刪。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "跨表徵"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_090_01",
          "stimulusId": "PHYCHM_R4_STIM_090",
          "stem": "哪一批不符合1：3：2？",
          "options": [
            "丁",
            "乙",
            "甲",
            "丙"
          ],
          "answerIndex": 3,
          "rationales": [
            "同乘4。",
            "同乘2。",
            "基本比例。",
            "3個N₂應配9個H₂。"
          ],
          "reviewEvidence": "丙：3個N₂應配9個H₂；丁：同乘4；乙：同乘2；甲：基本比例。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料驗錯"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_090_02",
          "stimulusId": "PHYCHM_R4_STIM_090",
          "stem": "若修正丙批次且維持N₂、NH₃數量，H₂應改為多少？",
          "options": [
            "6",
            "8",
            "9",
            "12"
          ],
          "answerIndex": 2,
          "rationales": [
            "只對應2個N₂。",
            "原錯誤值。",
            "3×3＝9。",
            "對應4個N₂。"
          ],
          "reviewEvidence": "9：3×3＝9；6：只對應2個N₂；8：原錯誤值；12：對應4個N₂。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "資料修正"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_090_03",
          "stimulusId": "PHYCHM_R4_STIM_090",
          "stem": "只憑表格係數，能否比較各列反應物總質量？",
          "options": [
            "能，N₂與H₂質量相同",
            "能，粒子總數較多即可換算出精確克數",
            "不能，因係數不表示粒子數",
            "不能，還需N₂與H₂每粒子的相對質量"
          ],
          "answerIndex": 3,
          "rationales": [
            "兩分子組成不同。",
            "缺少每粒子質量。",
            "係數正表示粒子數比。",
            "這是由粒子數轉質量的必要資訊。"
          ],
          "reviewEvidence": "不能，還需N₂與H₂每粒子的相對質量：這是由粒子數轉質量的必要資訊；能，N₂與H₂質量相同：兩分子組成不同；能，粒子總數較多即可換算出精確克數：缺少每粒子質量；不能，因係數不表示粒子數：係數正表示粒子數比。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "資訊界線"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S091",
      "title": "用質量守恆補足反應資料表",
      "authorityRefs": [
        "AUTH-NATURAL-LC-AA-4-2",
        "AUTH-NATURAL-LC-JA-4-1",
        "AUTH-NATURAL-LC-JA-4-4",
        "AUTH-NATURAL-LC-JB-4-4",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_091",
        "objective": "能依資料表欄位辨識反應前後物質，逐列建立質量守恆式，補足未知值並檢查是否存在剩餘或逸散。",
        "sections": [
          {
            "title": "表頭先分類時間與角色",
            "content": "同一列可能列出反應物初始質量、反應後生成物與剩餘量。先在欄位上標記『前』或『後』，再將同一時刻的所有物質相加；不能把相鄰欄位不分時刻全加。"
          },
          {
            "title": "未知格用總量差求出",
            "content": "密閉且欄位完整時，反應前總量等於反應後總量。若未知在生成物欄，用反應物總量減其他反應後項；未知在反應物欄，則由生成物總量扣除其餘反應物。"
          },
          {
            "title": "多列資料還能互相驗證",
            "content": "每列應個別守恆。若同一反應只有某列出現大差值，先查單位、抄錄與密封狀態。不能因整體趨勢好看，就用平均值掩蓋一列不平衡。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_091_EX_01",
            "prompt": "表列A 8 g、B 12 g，生成C 15 g、D未知。求D。",
            "steps": [
              "反應前總量20 g。",
              "反應後15＋D＝20。",
              "D＝5 g。"
            ],
            "answer": "5 g。",
            "why": "資料表同列表示同一次密閉反應，未知生成物補足前後總量差。"
          },
          {
            "id": "PHYCHM_R4_L_091_EX_02",
            "prompt": "反應後C 26 g並剩B 4 g；反應前A 18 g、B未知。求B初始量。",
            "steps": [
              "反應後總量26＋4＝30 g。",
              "反應前18＋B＝30。",
              "B＝12 g。"
            ],
            "answer": "12 g。",
            "why": "剩餘B屬於反應後系統，不能漏掉；初始B有12 g，其中4 g未反應。"
          },
          {
            "id": "PHYCHM_R4_L_091_EX_03",
            "prompt": "某列反應前25.0 g、反應後24.9 g，天平解析度0.1 g。如何記錄？",
            "steps": [
              "保留原始兩筆讀值。",
              "差值與最小顯示相同。",
              "標記末位差異並檢查重複試驗。"
            ],
            "answer": "保留資料，不把未知物質硬補成0.1 g。",
            "why": "量測解析度內的差值不必然代表另有產物；先確認欄位完整、密封與重複性。"
          }
        ],
        "misconceptions": [
          {
            "belief": "資料表缺一格時，直接把同列所有已知數相加。",
            "whyWrong": "欄位分屬反應前後，不能跨時刻疊加。",
            "correction": "先分組，再令兩組總和相等。"
          },
          {
            "belief": "反應後剩餘物不屬生成物，所以不列入總量。",
            "whyWrong": "它仍在系統內並具有質量。",
            "correction": "反應後總量包含生成物與剩餘反應物。"
          },
          {
            "belief": "每列都可用其他列的未知值直接照抄。",
            "whyWrong": "投入量可能不同，每列需獨立守恆。",
            "correction": "逐列列式，再比較比例或趨勢。"
          },
          {
            "belief": "小差值一定代表存在未列出的新物質。",
            "whyWrong": "儀器解析度與操作也會造成末位差異。",
            "correction": "先比較差值與不確定性並檢查系統。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_091",
        "title": "密閉反應資料缺格",
        "body": "A與B在密閉容器中反應，生成C，部分實驗可能有B剩餘。",
        "dataTable": {
          "caption": "各次質量",
          "columns": [
            "實驗",
            "A初始",
            "B初始",
            "C生成",
            "B剩餘"
          ],
          "rows": [
            [
              "1",
              "6 g",
              "9 g",
              "15 g",
              "0 g"
            ],
            [
              "2",
              "8 g",
              "14 g",
              "20 g",
              "?"
            ],
            [
              "3",
              "10 g",
              "18 g",
              "25 g",
              "3 g"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_091_01",
          "stem": "資料表中A 5 g、B 7 g完全反應，只生成C。C應填多少？",
          "options": [
            "7 g，因生成物質量只取較重的反應物",
            "12 g",
            "5 g",
            "2 g"
          ],
          "answerIndex": 1,
          "rationales": [
            "只算B。",
            "5＋7＝12 g。",
            "只算A。",
            "相減。"
          ],
          "reviewEvidence": "12 g：5＋7＝12 g；7 g，因生成物質量只取較重的反應物：只算B；5 g：只算A；2 g：相減。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "表格補值"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_091_02",
          "stem": "反應前總量18 g，反應後已知產物11 g與未知產物。未知為何？",
          "options": [
            "18 g",
            "11 g",
            "29 g",
            "7 g"
          ],
          "answerIndex": 3,
          "rationales": [
            "總量。",
            "已知產物。",
            "錯誤相加。",
            "18−11＝7。"
          ],
          "reviewEvidence": "7 g：18−11＝7；18 g：總量；11 g：已知產物；29 g：錯誤相加。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "差值"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_091_03",
          "stem": "資料表的『剩餘B』應列在哪一側的質量總和？",
          "options": [
            "當成儀器誤差",
            "反應前",
            "兩側都不列",
            "反應後"
          ],
          "answerIndex": 3,
          "rationales": [
            "不是誤差。",
            "是反應結束後留下的物質。",
            "不能忽略質量。",
            "反應後仍在系統。"
          ],
          "reviewEvidence": "反應後：反應後仍在系統；當成儀器誤差：不是誤差；反應前：是反應結束後留下的物質；兩側都不列：不能忽略質量。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "欄位分類"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_091_04",
          "stem": "A初始12 g、B初始16 g，生成C 24 g，B剩餘多少？",
          "options": [
            "8 g",
            "12 g",
            "4 g",
            "28 g"
          ],
          "answerIndex": 2,
          "rationales": [
            "錯誤差值。",
            "等於A但無依據。",
            "28−24＝4。",
            "反應前總量。"
          ],
          "reviewEvidence": "4 g：28−24＝4；8 g：錯誤差值；12 g：等於A但無依據；28 g：反應前總量。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "剩餘補值"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_091_05",
          "stem": "反應後C 30 g、A剩2 g；反應前B 12 g、A初始未知。A初始為何？",
          "options": [
            "18 g",
            "20 g",
            "16 g",
            "44 g"
          ],
          "answerIndex": 1,
          "rationales": [
            "計算未含剩餘。",
            "30＋2−12＝20。",
            "少2 g。",
            "錯誤相加。"
          ],
          "reviewEvidence": "20 g：30＋2−12＝20；18 g：計算未含剩餘；16 g：少2 g；44 g：錯誤相加。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "逆向補值"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_091_06",
          "stem": "哪個列式符合A、B反應生成C並剩A？",
          "options": [
            "A初＝B初＝C",
            "A初＋B初＋C＝A剩",
            "A初＋B初＝C＋A剩",
            "A初−B初＝C"
          ],
          "answerIndex": 2,
          "rationales": [
            "各物質不必相等。",
            "跨時刻相加。",
            "完整列出前後。",
            "漏剩餘且運算錯。"
          ],
          "reviewEvidence": "A初＋B初＝C＋A剩：完整列出前後；A初＝B初＝C：各物質不必相等；A初＋B初＋C＝A剩：跨時刻相加；A初−B初＝C：漏剩餘且運算錯。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "方程建模"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_091_07",
          "stem": "同一列質量單位為kg、g混用，第一步應做什麼？",
          "options": [
            "把kg數字直接當成同數值的體積再相加",
            "挑較大的數",
            "直接相加",
            "統一成同一質量單位"
          ],
          "answerIndex": 3,
          "rationales": [
            "kg是質量單位。",
            "數值大小受單位影響。",
            "會得到錯誤。",
            "同單位才可相加減。"
          ],
          "reviewEvidence": "統一成同一質量單位：同單位才可相加減；把kg數字直接當成同數值的體積再相加：kg是質量單位；挑較大的數：數值大小受單位影響；直接相加：會得到錯誤。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "單位處理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_091_08",
          "stem": "反應前42.0 g，反應後表格兩項合計41.9 g，天平最小顯示0.1 g。哪個處理合理？",
          "options": [
            "保留數據並檢查量測與重複結果",
            "刪除整列",
            "把任一項加0.1 g",
            "宣布原子消失"
          ],
          "answerIndex": 0,
          "rationales": [
            "差值在解析度一格。",
            "沒有排除原因。",
            "不可改數據。",
            "證據不足。"
          ],
          "reviewEvidence": "保留數據並檢查量測與重複結果：差值在解析度一格；刪除整列：沒有排除原因；把任一項加0.1 g：不可改數據；宣布原子消失：證據不足。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "數據品質"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_091_09",
          "stem": "三列密閉資料中只有一列前後差5 g，其餘完全相等。最先檢查什麼？",
          "options": [
            "改變化學式下標",
            "該列是否漏填氣體或剩餘物",
            "把三列全部平均",
            "只保留前後相差5 g的那列作為代表資料"
          ],
          "answerIndex": 1,
          "rationales": [
            "下標與表格無關。",
            "單列差異可能是漏項。",
            "平均會掩蓋錯誤。",
            "選擇性保留不合理。"
          ],
          "reviewEvidence": "該列是否漏填氣體或剩餘物：單列差異可能是漏項；改變化學式下標：下標與表格無關；把三列全部平均：平均會掩蓋錯誤；只保留前後相差5 g的那列作為代表資料：選擇性保留不合理。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "異常診斷"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_091_10",
          "stem": "資料列A初8 g、B初12 g、C生成15 g、B剩7 g。哪裡不一致？",
          "options": [
            "反應前20 g、反應後22 g",
            "C不可有質量",
            "反應前與後都20 g",
            "B剩餘必為12 g"
          ],
          "answerIndex": 0,
          "rationales": [
            "15＋7超過20。",
            "C有質量。",
            "後為22。",
            "B可部分反應。"
          ],
          "reviewEvidence": "反應前20 g、反應後22 g：15＋7超過20；C不可有質量：C有質量；反應前與後都20 g：後為22；B剩餘必為12 g：B可部分反應。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "一致性檢查"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_091_11",
          "stem": "某列反應前A 0.015 kg、B 5 g，反應後C 18 g、D未知。D為何？",
          "options": [
            "2 g",
            "0.002 g",
            "10 g",
            "20 g"
          ],
          "answerIndex": 0,
          "rationales": [
            "15＋5−18＝2 g。",
            "單位換算錯。",
            "漏一項。",
            "反應前總量。"
          ],
          "reviewEvidence": "2 g：15＋5−18＝2 g；0.002 g：單位換算錯；10 g：漏一項；20 g：反應前總量。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "單位整合"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_091_12",
          "stem": "若資料表未說明容器是否密閉且有大量氣泡逸出，能否只用前後容器讀值補氣體質量？",
          "options": [
            "能，因氣體都相同",
            "能，差值一定全是目標氣體",
            "不能，需排除蒸發、飛濺與其他進出",
            "不能，因質量永不守恆"
          ],
          "answerIndex": 2,
          "rationales": [
            "氣體種類與量可不同。",
            "差值來源未唯一。",
            "需完整系統假設。",
            "完整系統仍守恆。"
          ],
          "reviewEvidence": "不能，需排除蒸發、飛濺與其他進出：需完整系統假設；能，因氣體都相同：氣體種類與量可不同；能，差值一定全是目標氣體：差值來源未唯一；不能，因質量永不守恆：完整系統仍守恆。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "前提評估"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_091_01",
          "stimulusId": "PHYCHM_R4_STIM_091",
          "stem": "第2次B剩餘多少？",
          "options": [
            "22 g",
            "0 g",
            "6 g",
            "2 g"
          ],
          "answerIndex": 3,
          "rationales": [
            "反應前總量。",
            "前總量22、C20。",
            "非差值。",
            "22−20＝2。"
          ],
          "reviewEvidence": "2 g：22−20＝2；22 g：反應前總量；0 g：前總量22、C20；6 g：非差值。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "表格計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_091_02",
          "stimulusId": "PHYCHM_R4_STIM_091",
          "stem": "第3次資料如何驗證守恆？",
          "options": [
            "10＋25＝18＋3",
            "10＋18＝25＋3",
            "只看C為25",
            "10−18＝25−3"
          ],
          "answerIndex": 1,
          "rationales": [
            "跨時刻配對錯。",
            "兩側均28 g。",
            "漏其他物質。",
            "差值不等。"
          ],
          "reviewEvidence": "10＋18＝25＋3：兩側均28 g；10＋25＝18＋3：跨時刻配對錯；只看C為25：漏其他物質；10−18＝25−3：差值不等。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "列式驗證"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_091_03",
          "stimulusId": "PHYCHM_R4_STIM_091",
          "stem": "由三列資料可看出A是否每次完全用完？",
          "options": [
            "是，反應後只列B剩餘",
            "否，因每列B的初始量不同就無法判斷A",
            "無法，因沒有溫度",
            "否，因C有質量"
          ],
          "answerIndex": 0,
          "rationales": [
            "表格指定可能剩餘者為B，A未列剩餘。",
            "B量不同不影響此欄位解讀。",
            "溫度非必要。",
            "C是生成物。"
          ],
          "reviewEvidence": "是，反應後只列B剩餘：表格指定可能剩餘者為B，A未列剩餘；否，因每列B的初始量不同就無法判斷A：B量不同不影響此欄位解讀；無法，因沒有溫度：溫度非必要；否，因C有質量：C是生成物。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "表格結構推論"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S092",
      "title": "由反應資料找出反應物的消耗比例",
      "authorityRefs": [
        "AUTH-NATURAL-LC-AA-4-2",
        "AUTH-NATURAL-LC-JA-4-1",
        "AUTH-NATURAL-LC-JA-4-4",
        "AUTH-NATURAL-LC-JB-4-4",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_092",
        "objective": "能由多組完全反應或含剩餘量的資料，算出兩反應物實際消耗質量，辨認固定消耗比並用於同一反應。",
        "sections": [
          {
            "title": "初始量不一定等於消耗量",
            "content": "若反應後有物質剩餘，實際消耗量＝初始量−剩餘量。找反應比例時要比較消耗量，不可把含過量物的初始比例直接當成反應比例。"
          },
          {
            "title": "至少用兩組可靠資料確認",
            "content": "把各組消耗量約成最簡比；相同反應在相同條件下應得到一致比例。若某列不一致，先查是否未完全反應、單位不同或量測有誤。"
          },
          {
            "title": "比例只適用同一反應與同一物理量",
            "content": "質量消耗比不能直接套到體積或粒子數，也不能跨到另一個化學反應。推算後應檢查所需量是否超過提供量，否則代表會有剩餘物。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_092_EX_01",
            "prompt": "A 6 g與B 9 g恰好完全反應，消耗比為何？",
            "steps": [
              "兩者都無剩餘，消耗量等於初始量。",
              "寫6：9。",
              "同除3得2：3。"
            ],
            "answer": "A：B＝2：3。",
            "why": "資料明確說恰好完全反應，沒有過量物需要扣除。"
          },
          {
            "id": "PHYCHM_R4_L_092_EX_02",
            "prompt": "A初始8 g全用完，B初始15 g剩3 g。求消耗比。",
            "steps": [
              "A消耗8 g。",
              "B消耗15−3＝12 g。",
              "8：12約成2：3。"
            ],
            "answer": "2：3。",
            "why": "B的15 g不是全部參與反應；扣除3 g剩餘後才得到真實消耗量。"
          },
          {
            "id": "PHYCHM_R4_L_092_EX_03",
            "prompt": "兩列消耗比分別為2：3與4：7。可直接視為同一固定比例嗎？",
            "steps": [
              "把4：7與2：3比較。",
              "4：7不能約成2：3。",
              "回查實驗是否完全、單位與數據。"
            ],
            "answer": "不能。",
            "why": "同一反應的固定消耗比不應互相矛盾；必須先找出異常原因。"
          }
        ],
        "misconceptions": [
          {
            "belief": "初始量較多者的全部質量都一定被消耗。",
            "whyWrong": "過量反應物可能剩餘。",
            "correction": "用初始量減剩餘量求實際消耗。"
          },
          {
            "belief": "只用一組含剩餘物的初始比就可定出反應比。",
            "whyWrong": "初始比包含未反應部分。",
            "correction": "改用消耗量並以多組資料核對。"
          },
          {
            "belief": "2：3和4：6是不同反應比例。",
            "whyWrong": "4：6可約成2：3。",
            "correction": "先化成最簡整數比再比較。"
          },
          {
            "belief": "質量比2：3可直接說體積比也為2：3。",
            "whyWrong": "不同物理量需要密度或粒子資訊才能轉換。",
            "correction": "只在同單位、同物理量範圍內使用比例。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_092",
        "title": "A與B的消耗紀錄",
        "body": "A與B進行同一反應。每次A均完全用完，B可能剩餘。",
        "dataTable": {
          "caption": "初始與剩餘質量",
          "columns": [
            "實驗",
            "A初始",
            "B初始",
            "B剩餘"
          ],
          "rows": [
            [
              "甲",
              "4 g",
              "8 g",
              "2 g"
            ],
            [
              "乙",
              "6 g",
              "10 g",
              "1 g"
            ],
            [
              "丙",
              "8 g",
              "14 g",
              "2 g"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_092_01",
          "stem": "A 4 g與B 6 g恰好反應，A：B消耗比為何？",
          "options": [
            "4：10",
            "3：2",
            "2：3",
            "1：1"
          ],
          "answerIndex": 2,
          "rationales": [
            "錯誤相加。",
            "順序相反。",
            "4：6約成2：3。",
            "兩量不同。"
          ],
          "reviewEvidence": "2：3：4：6約成2：3；4：10：錯誤相加；3：2：順序相反；1：1：兩量不同。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "比例約簡"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_092_02",
          "stem": "B初始10 g、反應後剩4 g，B實際消耗多少？",
          "options": [
            "4 g",
            "14 g",
            "10 g",
            "6 g"
          ],
          "answerIndex": 3,
          "rationales": [
            "是剩餘量。",
            "相加不代表消耗。",
            "是初始量。",
            "10−4＝6。"
          ],
          "reviewEvidence": "6 g：10−4＝6；4 g：是剩餘量；14 g：相加不代表消耗；10 g：是初始量。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "差值"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_092_03",
          "stem": "找消耗比時，哪項資料最直接？",
          "options": [
            "反應物初始量與剩餘量",
            "容器顏色",
            "用生成物名稱的字數代表反應物消耗量",
            "實驗日期星期幾"
          ],
          "answerIndex": 0,
          "rationales": [
            "可算實際消耗。",
            "顏色無法給質量。",
            "字數無關。",
            "星期無關。"
          ],
          "reviewEvidence": "反應物初始量與剩餘量：可算實際消耗；容器顏色：顏色無法給質量；用生成物名稱的字數代表反應物消耗量：字數無關；實驗日期星期幾：星期無關。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "資訊辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_092_04",
          "stem": "A消耗8 g、B消耗12 g，最簡比為何？",
          "options": [
            "3：2",
            "2：3",
            "4：5",
            "8：20"
          ],
          "answerIndex": 1,
          "rationales": [
            "順序相反。",
            "8：12同除4。",
            "不能由資料得到。",
            "把兩數相加成20。"
          ],
          "reviewEvidence": "2：3：8：12同除4；3：2：順序相反；4：5：不能由資料得到；8：20：把兩數相加成20。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "約比"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_092_05",
          "stem": "A初始10 g剩2 g，B初始15 g剩3 g。實際消耗量的最簡整數比A：B為何？",
          "options": [
            "5：6",
            "2：3",
            "10：15",
            "8：12"
          ],
          "answerIndex": 1,
          "rationales": [
            "5：6不是8：12的等值比。",
            "A消耗8 g、B消耗12 g，8：12約成2：3。",
            "10：15使用初始量，沒有先扣除剩餘量。",
            "8：12是未化簡的消耗量比，不符合最簡整數比。"
          ],
          "reviewEvidence": "2：3：A消耗8 g、B消耗12 g，8：12約成2：3；5：6：5：6不是8：12的等值比；10：15：10：15使用初始量，沒有先扣除剩餘量；8：12：8：12是未化簡的消耗量比，不符合最簡整數比。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "剩餘整合"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_092_06",
          "stem": "哪組比例和2：3相同？",
          "options": [
            "8：12",
            "10：12",
            "4：5",
            "6：8"
          ],
          "answerIndex": 0,
          "rationales": [
            "同除4得2：3。",
            "約成5：6。",
            "不等值。",
            "約成3：4。"
          ],
          "reviewEvidence": "8：12：同除4得2：3；10：12：約成5：6；4：5：不等值；6：8：約成3：4。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "等值比例"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_092_07",
          "stem": "某列A初始6 g、B初始12 g，反應後B剩3 g。消耗比為何？",
          "options": [
            "3：2",
            "1：2",
            "6：12",
            "2：3"
          ],
          "answerIndex": 3,
          "rationales": [
            "順序反。",
            "使用初始B。",
            "未扣剩餘且非最簡。",
            "A消耗6，B消耗9，約2：3。"
          ],
          "reviewEvidence": "2：3：A消耗6，B消耗9，約2：3；3：2：順序反；1：2：使用初始B；6：12：未扣剩餘且非最簡。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料轉換"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_092_08",
          "stem": "兩組同一反應算得2：3與6：9，應如何判斷？",
          "options": [
            "互相矛盾",
            "是相同最簡比例的倍數",
            "第二組一定錯",
            "不能比較質量"
          ],
          "answerIndex": 1,
          "rationales": [
            "6：9可約成2：3。",
            "兩組一致。",
            "沒有錯誤證據。",
            "同為質量可比較。"
          ],
          "reviewEvidence": "是相同最簡比例的倍數：兩組一致；互相矛盾：6：9可約成2：3；第二組一定錯：沒有錯誤證據；不能比較質量：同為質量可比較。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "一致性判讀"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_092_09",
          "stem": "A：B消耗比2：3。若A消耗14 g，B應消耗多少？",
          "options": [
            "21 g",
            "28 g",
            "9 g",
            "14 g"
          ],
          "answerIndex": 0,
          "rationales": [
            "14÷2×3＝21。",
            "乘2錯誤。",
            "比例倒置。",
            "誤認1：1。"
          ],
          "reviewEvidence": "21 g：14÷2×3＝21；28 g：乘2錯誤；9 g：比例倒置；14 g：誤認1：1。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "比例推算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_092_10",
          "stem": "資料得到A：B＝4 g：6 mL。能直接稱為質量消耗比2：3嗎？",
          "options": [
            "不能，比例不能約分",
            "能，所有液體密度都相同，所以g可直接比mL",
            "能，數字可約分",
            "不能，g與mL是不同物理量"
          ],
          "answerIndex": 3,
          "rationales": [
            "比例可以約分。",
            "液體密度未必相同。",
            "單位不同不能直接稱質量比。",
            "一項是質量、一項是體積。"
          ],
          "reviewEvidence": "不能，g與mL是不同物理量：一項是質量、一項是體積；不能，比例不能約分：比例可以約分；能，所有液體密度都相同，所以g可直接比mL：液體密度未必相同；能，數字可約分：單位不同不能直接稱質量比。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "單位檢查"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_092_11",
          "stem": "三組消耗比為2：3、4：6、6：10。哪組需優先回查？",
          "options": [
            "三組完全相同",
            "第一組",
            "第三組",
            "第二組"
          ],
          "answerIndex": 2,
          "rationales": [
            "第三組不同。",
            "是基準比例。",
            "6：10約3：5，不一致。",
            "約成2：3。"
          ],
          "reviewEvidence": "第三組：6：10約3：5，不一致；三組完全相同：第三組不同；第一組：是基準比例；第二組：約成2：3。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "異常辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_092_12",
          "stem": "A、B初始比為2：5，反應後B有剩餘。為何不能直接把2：5當消耗比？",
          "options": [
            "B的初始量含未反應部分",
            "A可能也有剩餘",
            "5不能當比值",
            "比例只能用整數"
          ],
          "answerIndex": 0,
          "rationales": [
            "過量B使初始比偏大。",
            "題目未說A剩餘。",
            "5可用於比例。",
            "比例可為其他數。"
          ],
          "reviewEvidence": "B的初始量含未反應部分：過量B使初始比偏大；A可能也有剩餘：題目未說A剩餘；5不能當比值：5可用於比例；比例只能用整數：比例可為其他數。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "前提反思"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_092_01",
          "stimulusId": "PHYCHM_R4_STIM_092",
          "stem": "甲組A：B消耗比為何？",
          "options": [
            "2：4",
            "1：2",
            "2：3",
            "4：8"
          ],
          "answerIndex": 2,
          "rationales": [
            "未約且B錯。",
            "使用B初始8。",
            "B消耗8−2＝6，4：6＝2：3。",
            "使用初始量。"
          ],
          "reviewEvidence": "2：3：B消耗8−2＝6，4：6＝2：3；2：4：未約且B錯；1：2：使用B初始8；4：8：使用初始量。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "表格約比"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_092_02",
          "stimulusId": "PHYCHM_R4_STIM_092",
          "stem": "哪一組的B實際消耗量為9 g？",
          "options": [
            "甲與丙",
            "乙",
            "丙",
            "甲"
          ],
          "answerIndex": 1,
          "rationales": [
            "兩者皆非9。",
            "乙10−1＝9。",
            "丙14−2＝12。",
            "甲消耗6。"
          ],
          "reviewEvidence": "乙：乙10−1＝9；甲與丙：兩者皆非9；丙：丙14−2＝12；甲：甲消耗6。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "差值比較"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_092_03",
          "stimulusId": "PHYCHM_R4_STIM_092",
          "stem": "三組資料是否支持固定消耗比？",
          "options": [
            "支持A：B＝1：2",
            "不支持，因三組B的初始量並不相同",
            "支持，皆約成A：B＝2：3",
            "不支持，剩餘量不是0"
          ],
          "answerIndex": 2,
          "rationales": [
            "消耗比不是1：2。",
            "投入量可不同。",
            "4：6、6：9、8：12均為2：3。",
            "剩餘可扣除。"
          ],
          "reviewEvidence": "支持，皆約成A：B＝2：3：4：6、6：9、8：12均為2：3；支持A：B＝1：2：消耗比不是1：2；不支持，因三組B的初始量並不相同：投入量可不同；不支持，剩餘量不是0：剩餘可扣除。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "跨列歸納"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S093",
      "title": "由已知反應資料判斷未反應物質",
      "authorityRefs": [
        "AUTH-NATURAL-LC-AA-4-2",
        "AUTH-NATURAL-LC-JA-4-1",
        "AUTH-NATURAL-LC-JA-4-4",
        "AUTH-NATURAL-LC-JB-4-4",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_093",
        "objective": "能依固定消耗比例比較可完成的反應組數，判斷先用完者、過量者與剩餘質量。",
        "sections": [
          {
            "title": "不要只看哪個初始質量較小",
            "content": "限量反應物由所需比例決定。若A：B消耗比1：2，3 g A需要6 g B；即使B初始質量較大，也可能是先用完或仍過量，必須和比例比較。"
          },
          {
            "title": "用『可完成幾組』比較",
            "content": "將提供量分別除以其比例份數。較小的商代表能完成的反應組數，也指出先用完者。再用組數乘另一物質的比例份數，求實際消耗與剩餘。"
          },
          {
            "title": "生成物量由先用完者限制",
            "content": "增加已經過量的反應物不會增加生成物，除非同時補入先用完者。計算結束要檢查剩餘量非負，且消耗量不超過初始量。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_093_EX_01",
            "prompt": "A：B消耗比1：2，提供3 g A與10 g B。判斷剩餘。",
            "steps": [
              "3 g A需要6 g B。",
              "B有10 g，因此A先用完。",
              "B剩10−6＝4 g。"
            ],
            "answer": "A用完，B剩4 g。",
            "why": "雖B的初始質量較大，真正判定依所需比例；每1份A只消耗2份B。"
          },
          {
            "id": "PHYCHM_R4_L_093_EX_02",
            "prompt": "A：B＝2：3，提供8 g A與9 g B。誰先用完？",
            "steps": [
              "8÷2＝4組。",
              "9÷3＝3組。",
              "B只能支持3組，故B先用完，A消耗6 g。"
            ],
            "answer": "B先用完，A剩2 g。",
            "why": "以比例份數標準化後才能公平比較；B對應的反應組數較少。"
          },
          {
            "id": "PHYCHM_R4_L_093_EX_03",
            "prompt": "A：B＝4：5，提供12 g A與15 g B。反應後有剩餘嗎？",
            "steps": [
              "12÷4＝3組。",
              "15÷5＝3組。",
              "兩者恰好支持相同組數。"
            ],
            "answer": "兩者都恰好用完。",
            "why": "提供量正好是基本比例4：5的三倍，沒有過量反應物。"
          }
        ],
        "misconceptions": [
          {
            "belief": "初始質量較少的物質一定過量。",
            "whyWrong": "過量與否取決於反應所需比例。",
            "correction": "各自除以比例份數比較反應組數。"
          },
          {
            "belief": "把兩反應物相減就得到剩餘量。",
            "whyWrong": "兩物質通常不是1：1消耗。",
            "correction": "先算限量物與另一物質實際消耗量。"
          },
          {
            "belief": "增加過量物一定能增加產量。",
            "whyWrong": "生成物受先用完的限量物限制。",
            "correction": "要增加產量，至少補足限量物。"
          },
          {
            "belief": "算出負剩餘量只是表示反應更完全。",
            "whyWrong": "負值表示假定消耗量超過提供量。",
            "correction": "回查限量物判定或比例方向。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_093",
        "title": "不同投入量的反應",
        "body": "A與B恰好反應的質量比為2：3。表中列出三組投入量，反應均進行到其中一種反應物用完。",
        "dataTable": {
          "caption": "投入質量",
          "columns": [
            "組別",
            "A",
            "B"
          ],
          "rows": [
            [
              "甲",
              "4 g",
              "9 g"
            ],
            [
              "乙",
              "8 g",
              "9 g"
            ],
            [
              "丙",
              "10 g",
              "15 g"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_093_01",
          "stem": "A：B消耗比1：2，2 g A需要多少B？",
          "options": [
            "2 g",
            "1 g",
            "4 g",
            "6 g"
          ],
          "answerIndex": 2,
          "rationales": [
            "誤認1：1。",
            "比例倒置。",
            "2×2＝4 g。",
            "多一份。"
          ],
          "reviewEvidence": "4 g：2×2＝4 g；2 g：誤認1：1；1 g：比例倒置；6 g：多一份。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "比例需求"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_093_02",
          "stem": "A：B＝2：3，提供4 g A與6 g B。結果為何？",
          "options": [
            "A剩2 g",
            "B剩3 g",
            "兩者都剩一半",
            "兩者恰好用完"
          ],
          "answerIndex": 3,
          "rationales": [
            "4：6正是兩倍比例。",
            "B不剩。",
            "反應會消耗完。",
            "符合2：3。"
          ],
          "reviewEvidence": "兩者恰好用完：符合2：3；A剩2 g：4：6正是兩倍比例；B剩3 g：B不剩；兩者都剩一半：反應會消耗完。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "恰量判斷"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_093_03",
          "stem": "判斷限量物時，哪個方法正確？",
          "options": [
            "選名稱較短者",
            "各提供量除以其比例份數",
            "只比較兩種反應物的初始數字，較小者即限量",
            "把兩質量直接相加"
          ],
          "answerIndex": 1,
          "rationales": [
            "名稱無關。",
            "商較小者先用完。",
            "未考慮所需比例。",
            "總量不能判限量物。"
          ],
          "reviewEvidence": "各提供量除以其比例份數：商較小者先用完；選名稱較短者：名稱無關；只比較兩種反應物的初始數字，較小者即限量：未考慮所需比例；把兩質量直接相加：總量不能判限量物。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "方法選擇"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_093_04",
          "stem": "A：B＝1：2，3 g A與10 g B反應，B剩多少？",
          "options": [
            "2 g",
            "7 g",
            "6 g",
            "4 g"
          ],
          "answerIndex": 3,
          "rationales": [
            "B消耗量不是8。",
            "錯用10−3。",
            "是消耗量。",
            "需6 g，剩4 g。"
          ],
          "reviewEvidence": "4 g：需6 g，剩4 g；2 g：B消耗量不是8；7 g：錯用10−3；6 g：是消耗量。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "剩餘計算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_093_05",
          "stem": "A：B＝2：3，8 g A與9 g B反應，A剩多少？",
          "options": [
            "0 g",
            "3 g",
            "5 g",
            "2 g"
          ],
          "answerIndex": 3,
          "rationales": [
            "B只能支持3組。",
            "等於一份B。",
            "錯誤相減。",
            "B9配A6，剩2。"
          ],
          "reviewEvidence": "2 g：B9配A6，剩2；0 g：B只能支持3組；3 g：等於一份B；5 g：錯誤相減。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "限量推算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_093_06",
          "stem": "A：B＝4：5，A有8 g、B有15 g。哪個先用完？",
          "options": [
            "無法判斷",
            "A",
            "同時",
            "B"
          ],
          "answerIndex": 1,
          "rationales": [
            "比例與數量足夠。",
            "A支持2組，B支持3組。",
            "組數不同。",
            "B較過量。"
          ],
          "reviewEvidence": "A：A支持2組，B支持3組；無法判斷：比例與數量足夠；同時：組數不同；B：B較過量。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "組數比較"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_093_07",
          "stem": "承上題，B剩多少？",
          "options": [
            "5 g",
            "0 g",
            "7 g",
            "10 g"
          ],
          "answerIndex": 0,
          "rationales": [
            "兩組消耗10 g B，剩5 g。",
            "A只支持2組。",
            "未依比例。",
            "是消耗量。"
          ],
          "reviewEvidence": "5 g：兩組消耗10 g B，剩5 g；0 g：A只支持2組；7 g：未依比例；10 g：是消耗量。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "後續計算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_093_08",
          "stem": "增加哪一項能提升由限量A控制的產量？",
          "options": [
            "移除一部分限量反應物A可以提高產量",
            "增加A並提供足夠B",
            "降低A純度",
            "只增加過量B"
          ],
          "answerIndex": 1,
          "rationales": [
            "會降低產量。",
            "補限量物才可增加反應組數。",
            "有效A更少。",
            "B已過量。"
          ],
          "reviewEvidence": "增加A並提供足夠B：補限量物才可增加反應組數；移除一部分限量反應物A可以提高產量：會降低產量；降低A純度：有效A更少；只增加過量B：B已過量。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "因果推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_093_09",
          "stem": "A：B＝3：4，A 15 g、B 16 g。反應後A剩多少？",
          "options": [
            "7 g",
            "0 g",
            "3 g",
            "4 g"
          ],
          "answerIndex": 2,
          "rationales": [
            "直接相減錯誤。",
            "B只支持4組。",
            "B16消耗A12，剩3。",
            "比例份數不是剩餘。"
          ],
          "reviewEvidence": "3 g：B16消耗A12，剩3；7 g：直接相減錯誤；0 g：B只支持4組；4 g：比例份數不是剩餘。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "多步比例"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_093_10",
          "stem": "某計算得到B剩−2 g，這表示什麼？",
          "options": [
            "反應產生2 g B",
            "B是限量物，原先假設消耗過多",
            "B真的具有負質量",
            "應把負號刪掉"
          ],
          "answerIndex": 1,
          "rationales": [
            "與列式不符。",
            "消耗量超過供應量，B先用完。",
            "質量不可負。",
            "不能任意改答案。"
          ],
          "reviewEvidence": "B是限量物，原先假設消耗過多：消耗量超過供應量，B先用完；反應產生2 g B：與列式不符；B真的具有負質量：質量不可負；應把負號刪掉：不能任意改答案。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "合理性檢查"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_093_11",
          "stem": "A：B＝2：3，提供14 g A與18 g B。反應後哪項正確？",
          "options": [
            "A用完、B剩4 g",
            "A剩8 g、B剩9 g",
            "兩者恰好用完",
            "B用完、A剩2 g"
          ],
          "answerIndex": 3,
          "rationales": [
            "14 g A需21 g B，不足。",
            "不是完整反應結果。",
            "比為14：18≠2：3。",
            "18 g B配12 g A，A剩2。"
          ],
          "reviewEvidence": "B用完、A剩2 g：18 g B配12 g A，A剩2；A用完、B剩4 g：14 g A需21 g B，不足；A剩8 g、B剩9 g：不是完整反應結果；兩者恰好用完：比為14：18≠2：3。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "比較推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_093_12",
          "stem": "兩反應物都沒有剩餘，能推出什麼？",
          "options": [
            "兩物質質量必相等",
            "反應式係數都為1",
            "投入量符合其完全反應消耗比",
            "生成物必只有一種"
          ],
          "answerIndex": 2,
          "rationales": [
            "比例可不為1：1。",
            "係數可不同。",
            "恰好用完表示投入比例適合。",
            "可有多種生成物。"
          ],
          "reviewEvidence": "投入量符合其完全反應消耗比：恰好用完表示投入比例適合；兩物質質量必相等：比例可不為1：1；反應式係數都為1：係數可不同；生成物必只有一種：可有多種生成物。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "反向推論"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_093_01",
          "stimulusId": "PHYCHM_R4_STIM_093",
          "stem": "甲組反應後誰有剩餘？",
          "options": [
            "B剩3 g",
            "A、B各剩1 g",
            "A剩2 g",
            "兩者都不剩"
          ],
          "answerIndex": 0,
          "rationales": [
            "B9−6＝3。",
            "不依比例。",
            "A4需B6，A用完。",
            "B過量。"
          ],
          "reviewEvidence": "B剩3 g：B9−6＝3；A、B各剩1 g：不依比例；A剩2 g：A4需B6，A用完；兩者都不剩：B過量。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "表格限制"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_093_02",
          "stimulusId": "PHYCHM_R4_STIM_093",
          "stem": "乙組A剩多少？",
          "options": [
            "2 g",
            "3 g",
            "5 g",
            "0 g"
          ],
          "answerIndex": 0,
          "rationales": [
            "B9配A6，8−6＝2。",
            "等於一份B。",
            "錯誤相減。",
            "B是限量物。"
          ],
          "reviewEvidence": "2 g：B9配A6，8−6＝2；3 g：等於一份B；5 g：錯誤相減；0 g：B是限量物。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "剩餘計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_093_03",
          "stimulusId": "PHYCHM_R4_STIM_093",
          "stem": "哪組恰好完全反應？",
          "options": [
            "乙",
            "三組皆是",
            "丙",
            "甲"
          ],
          "answerIndex": 2,
          "rationales": [
            "8：9不是2：3。",
            "前兩組有剩餘。",
            "10：15約成2：3。",
            "4：9不是2：3。"
          ],
          "reviewEvidence": "丙：10：15約成2：3；乙：8：9不是2：3；三組皆是：前兩組有剩餘；甲：4：9不是2：3。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "跨組比較"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S094",
      "title": "把重量百分濃度資料連到反應物質量",
      "authorityRefs": [
        "AUTH-NATURAL-LC-AA-4-2",
        "AUTH-NATURAL-LC-JA-4-1",
        "AUTH-NATURAL-LC-JA-4-4",
        "AUTH-NATURAL-LC-JB-4-4",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_094",
        "objective": "能由溶液總質量與重量百分濃度求溶質質量，並把真正參與反應的溶質質量帶入守恆或比例計算。",
        "sections": [
          {
            "title": "百分濃度描述溶質占整份溶液的比例",
            "content": "重量百分濃度＝溶質質量÷溶液質量×100%。200 g的10%溶液含20 g溶質與180 g溶劑；整份200 g不能都當成可反應溶質。"
          },
          {
            "title": "反應計算先取出有效成分",
            "content": "題目若指定只有溶質參與反應，先算溶質質量，再依反應比例判斷消耗量。溶劑仍有質量並留在系統中，但不一定是該化學反應的反應物。"
          },
          {
            "title": "百分號要先除以一百",
            "content": "8%寫成小數是0.08。濃度與溶液質量相乘才得到溶質質量；若已知溶質與濃度，可用溶質質量除以濃度求所需溶液總質量。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_094_EX_01",
            "prompt": "200 g的10%食鹽水含多少食鹽？",
            "steps": [
              "10%＝0.10。",
              "溶質＝200×0.10。",
              "得到20 g。"
            ],
            "answer": "20 g食鹽。",
            "why": "剩下180 g主要是溶劑；不能把整瓶200 g都當食鹽。"
          },
          {
            "id": "PHYCHM_R4_L_094_EX_02",
            "prompt": "50 g的8%溶液中，只有溶質A參與反應。A質量為何？",
            "steps": [
              "8%轉成0.08。",
              "50×0.08＝4。",
              "反應計算使用4 g A。"
            ],
            "answer": "4 g。",
            "why": "重量百分濃度是質量比例；有效反應物是溶液內4 g溶質，不是50 g溶液。"
          },
          {
            "id": "PHYCHM_R4_L_094_EX_03",
            "prompt": "需要12 g溶質，使用15%溶液，至少需多少克溶液？",
            "steps": [
              "令溶液質量為m。",
              "0.15m＝12。",
              "m＝80 g。"
            ],
            "answer": "80 g溶液。",
            "why": "80 g的15%為12 g，剩餘68 g是溶劑。"
          }
        ],
        "misconceptions": [
          {
            "belief": "100 g的5%溶液含95 g溶質。",
            "whyWrong": "5%直接表示每100 g溶液有5 g溶質。",
            "correction": "溶質5 g、其餘95 g為溶劑。"
          },
          {
            "belief": "百分濃度10%可直接當數字10相乘。",
            "whyWrong": "百分比代表除以100。",
            "correction": "計算時改寫為0.10。"
          },
          {
            "belief": "反應時整份溶液質量都是溶質。",
            "whyWrong": "溶液含溶質與溶劑。",
            "correction": "先由濃度求出真正反應的溶質質量。"
          },
          {
            "belief": "同濃度溶液無論取多少都含相同溶質質量。",
            "whyWrong": "溶質量與所取溶液質量成正比。",
            "correction": "同時使用濃度與取用質量。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_094",
        "title": "三瓶反應溶液",
        "body": "只有標示的溶質A會參與目標反應，水在此反應中視為溶劑。",
        "dataTable": {
          "caption": "溶液標示",
          "columns": [
            "瓶別",
            "取用溶液質量",
            "重量百分濃度"
          ],
          "rows": [
            [
              "甲",
              "100 g",
              "6%"
            ],
            [
              "乙",
              "80 g",
              "10%"
            ],
            [
              "丙",
              "50 g",
              "12%"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_094_01",
          "stem": "100 g的8%溶液含溶質多少克？",
          "options": [
            "92 g",
            "8 g",
            "108 g",
            "0.08 g"
          ],
          "answerIndex": 1,
          "rationales": [
            "是溶劑量。",
            "100×0.08＝8。",
            "錯誤相加。",
            "把百分比當克數錯。"
          ],
          "reviewEvidence": "8 g：100×0.08＝8；92 g：是溶劑量；108 g：錯誤相加；0.08 g：把百分比當克數錯。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "百分比"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_094_02",
          "stem": "200 g的5%溶液中溶質為何？",
          "options": [
            "10 g",
            "195 g",
            "5 g",
            "40 g"
          ],
          "answerIndex": 0,
          "rationales": [
            "200×0.05＝10。",
            "是近似溶劑量。",
            "忽略溶液質量倍數。",
            "用200÷5。"
          ],
          "reviewEvidence": "10 g：200×0.05＝10；195 g：是近似溶劑量；5 g：忽略溶液質量倍數；40 g：用200÷5。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "濃度計算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_094_03",
          "stem": "重量百分濃度公式中的分母是什麼？",
          "options": [
            "分母只使用溶質本身的質量",
            "容器質量",
            "溶液總質量",
            "溶劑質量"
          ],
          "answerIndex": 2,
          "rationales": [
            "溶質在分子。",
            "容器不屬溶液。",
            "濃度為溶質/溶液。",
            "不能只用溶劑。"
          ],
          "reviewEvidence": "溶液總質量：濃度為溶質/溶液；分母只使用溶質本身的質量：溶質在分子；容器質量：容器不屬溶液；溶劑質量：不能只用溶劑。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "公式辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_094_04",
          "stem": "50 g的12%溶液含多少溶質？",
          "options": [
            "4.17 g",
            "12 g",
            "6 g",
            "38 g"
          ],
          "answerIndex": 2,
          "rationales": [
            "是50÷12。",
            "把百分數當克數。",
            "50×0.12＝6。",
            "錯誤相減。"
          ],
          "reviewEvidence": "6 g：50×0.12＝6；4.17 g：是50÷12；12 g：把百分數當克數；38 g：錯誤相減。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "乘法應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_094_05",
          "stem": "120 g的15%溶液中，溶劑質量是多少？",
          "options": [
            "102 g",
            "105 g",
            "18 g",
            "138 g"
          ],
          "answerIndex": 0,
          "rationales": [
            "120−18＝102。",
            "錯誤扣15。",
            "18 g是溶質。",
            "錯誤相加。"
          ],
          "reviewEvidence": "102 g：120−18＝102；105 g：錯誤扣15；18 g：18 g是溶質；138 g：錯誤相加。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "組成計算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_094_06",
          "stem": "一瓶10%溶液取40 g，只有溶質反應。可反應溶質為多少？",
          "options": [
            "10 g",
            "4 g",
            "36 g",
            "40 g"
          ],
          "answerIndex": 1,
          "rationales": [
            "是濃度數字。",
            "40×0.10＝4。",
            "是溶劑量。",
            "整份溶液不是全溶質。"
          ],
          "reviewEvidence": "4 g：40×0.10＝4；10 g：是濃度數字；36 g：是溶劑量；40 g：整份溶液不是全溶質。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "有效量"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_094_07",
          "stem": "需要5 g溶質，使用20%溶液，需多少克溶液？",
          "options": [
            "10 g",
            "1 g",
            "100 g",
            "25 g"
          ],
          "answerIndex": 3,
          "rationales": [
            "其中只有2 g溶質。",
            "錯乘。",
            "其中有20 g溶質。",
            "5÷0.20＝25。"
          ],
          "reviewEvidence": "25 g：5÷0.20＝25；10 g：其中只有2 g溶質；1 g：錯乘；100 g：其中有20 g溶質。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "逆向計算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_094_08",
          "stem": "同為10%溶液，甲取30 g、乙取90 g。乙的溶質質量是甲的幾倍？",
          "options": [
            "3倍",
            "1倍",
            "2倍",
            "9倍"
          ],
          "answerIndex": 0,
          "rationales": [
            "濃度同，溶質量隨溶液量三倍。",
            "取量不同。",
            "90不是30的2倍。",
            "誤用90/10。"
          ],
          "reviewEvidence": "3倍：濃度同，溶質量隨溶液量三倍；1倍：取量不同；2倍：90不是30的2倍；9倍：誤用90/10。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "比例比較"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_094_09",
          "stem": "200 g、10%溶液參與反應，學生以200 g當溶質。他的結果會如何？",
          "options": [
            "把溶質高估10倍",
            "只高估2 g，因百分濃度不必換算成小數",
            "低估10倍",
            "完全正確"
          ],
          "answerIndex": 0,
          "rationales": [
            "實際溶質20 g，200是10倍。",
            "差180 g。",
            "方向相反。",
            "忽略濃度。"
          ],
          "reviewEvidence": "把溶質高估10倍：實際溶質20 g，200是10倍；只高估2 g，因百分濃度不必換算成小數：差180 g；低估10倍：方向相反；完全正確：忽略濃度。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "誤差分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_094_10",
          "stem": "A、B恰好反應質量比1：2。某10% A溶液100 g中的A，需純B多少？",
          "options": [
            "5 g",
            "10 g",
            "20 g",
            "200 g"
          ],
          "answerIndex": 2,
          "rationales": [
            "低估一半。",
            "只是A質量。",
            "A為10 g，B需20 g。",
            "把溶液全當A再乘2。"
          ],
          "reviewEvidence": "20 g：A為10 g，B需20 g；5 g：低估一半；10 g：只是A質量；200 g：把溶液全當A再乘2。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "濃度與反應比"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_094_11",
          "stem": "60 g溶液含9 g溶質，其重量百分濃度為何？",
          "options": [
            "9%",
            "6%",
            "51%",
            "15%"
          ],
          "answerIndex": 3,
          "rationales": [
            "把克數當百分比。",
            "用溶液/溶質錯。",
            "用溶劑差值。",
            "9÷60×100%＝15%。"
          ],
          "reviewEvidence": "15%：9÷60×100%＝15%；9%：把克數當百分比；6%：用溶液/溶質錯；51%：用溶劑差值。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "反求濃度"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_094_12",
          "stem": "兩瓶都標10%，一瓶是100 g，另一瓶是100 mL。能否斷言溶質質量相同？",
          "options": [
            "不能，百分比沒有意義",
            "能，mL等於g",
            "不能，第二瓶需知道溶液密度才能轉質量",
            "能，數字都是100"
          ],
          "answerIndex": 2,
          "rationales": [
            "百分比有明確定義。",
            "只有特定密度才近似。",
            "重量百分比需要溶液質量。",
            "物理量不同。"
          ],
          "reviewEvidence": "不能，第二瓶需知道溶液密度才能轉質量：重量百分比需要溶液質量；不能，百分比沒有意義：百分比有明確定義；能，mL等於g：只有特定密度才近似；能，數字都是100：物理量不同。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "單位與密度"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_094_01",
          "stimulusId": "PHYCHM_R4_STIM_094",
          "stem": "哪兩瓶含有相同質量的A？",
          "options": [
            "乙與丙",
            "甲與丙",
            "甲與乙",
            "三瓶都相同"
          ],
          "answerIndex": 1,
          "rationales": [
            "乙8 g、丙6 g。",
            "甲6 g、丙6 g。",
            "甲6 g、乙8 g。",
            "乙不同。"
          ],
          "reviewEvidence": "甲與丙：甲6 g、丙6 g；乙與丙：乙8 g、丙6 g；甲與乙：甲6 g、乙8 g；三瓶都相同：乙不同。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "表格計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_094_02",
          "stimulusId": "PHYCHM_R4_STIM_094",
          "stem": "乙瓶中溶劑質量是多少？",
          "options": [
            "88 g",
            "80 g",
            "8 g",
            "72 g"
          ],
          "answerIndex": 3,
          "rationales": [
            "錯誤相加。",
            "是溶液總量。",
            "8 g是溶質。",
            "80−8＝72 g。"
          ],
          "reviewEvidence": "72 g：80−8＝72 g；88 g：錯誤相加；80 g：是溶液總量；8 g：8 g是溶質。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "表格組成"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_094_03",
          "stimulusId": "PHYCHM_R4_STIM_094",
          "stem": "若目標反應每次需8 g A，應選哪瓶的整份取用量？",
          "options": [
            "甲與丙混合才唯一",
            "丙",
            "甲",
            "乙"
          ],
          "answerIndex": 3,
          "rationales": [
            "混合會有12 g。",
            "丙只有6 g。",
            "甲只有6 g。",
            "乙正好8 g。"
          ],
          "reviewEvidence": "乙：乙正好8 g；甲與丙混合才唯一：混合會有12 g；丙：丙只有6 g；甲：甲只有6 g。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "決策"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S095",
      "title": "檢查單位與比例是否對應同一物理量",
      "authorityRefs": [
        "AUTH-NATURAL-LC-AA-4-2",
        "AUTH-NATURAL-LC-JA-4-1",
        "AUTH-NATURAL-LC-JA-4-4",
        "AUTH-NATURAL-LC-JB-4-4",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_095",
        "objective": "能在建立或套用反應比例前，辨認質量、體積、濃度與粒子數，統一同類單位並拒絕跨物理量的無依據比例。",
        "sections": [
          {
            "title": "比例兩端要回答同一類問題",
            "content": "6 g：9 g是質量比，4個：6個是粒子數比，20 mL：30 mL是體積比。數字可同樣約成2：3，但物理意義不同，不能只因數字相似就互換。"
          },
          {
            "title": "同物理量仍須先統一單位",
            "content": "0.020 kg與30 g都是質量，但要先把0.020 kg換成20 g，才能得到2：3。mL與L也可在體積內換算；g和mL之間則需密度，不能只移小數點。"
          },
          {
            "title": "比例旁要保留物質名稱與單位",
            "content": "寫成A質量：B質量＝2 g：3 g，比只寫2：3更不易誤用。推算後檢查答案單位是否符合題問，並確認沒有把溶液總質量當成溶質質量。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_095_EX_01",
            "prompt": "比較0.020 kg A與30 g B的質量比。",
            "steps": [
              "把0.020 kg換成20 g。",
              "寫20 g：30 g。",
              "同除10得2：3。"
            ],
            "answer": "A：B質量比＝2：3。",
            "why": "兩者原本都是質量，但單位不同；換成g後才能合理約比。"
          },
          {
            "id": "PHYCHM_R4_L_095_EX_02",
            "prompt": "A為4 g，B為6 mL，能否直接寫質量比2：3？",
            "steps": [
              "辨認A是質量、B是體積。",
              "沒有B的密度。",
              "不能把不同物理量直接相比。"
            ],
            "answer": "不能。",
            "why": "即使4：6可約成2：3，單位g與mL的意義不同；需先用密度把B體積換成質量。"
          },
          {
            "id": "PHYCHM_R4_L_095_EX_03",
            "prompt": "反應粒子比2：1，是否可直接說質量比2 kg：1 kg？",
            "steps": [
              "確認2：1來自係數，表示粒子數。",
              "不同物質粒子質量未知。",
              "缺少相對分子量，不能換成質量。"
            ],
            "answer": "不可直接換成質量比。",
            "why": "同樣兩個粒子可能比另一物質一個粒子更輕或更重，須知道粒子相對質量。"
          }
        ],
        "misconceptions": [
          {
            "belief": "數字可約成相同比例，就代表物理意義相同。",
            "whyWrong": "單位與物理量決定比例所描述的內容。",
            "correction": "在每個數值旁保留量名與單位。"
          },
          {
            "belief": "g與mL都可放在實驗表，所以能直接相除。",
            "whyWrong": "g是質量，mL是體積。",
            "correction": "有密度資料時才能在質量與體積間轉換。"
          },
          {
            "belief": "kg與g不同，不能比較。",
            "whyWrong": "兩者都是質量單位。",
            "correction": "先換成同一單位即可比較。"
          },
          {
            "belief": "反應式係數附上g就是質量比。",
            "whyWrong": "係數先表示粒子數比。",
            "correction": "結合相對分子量後才得到質量關係。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_095",
        "title": "四筆待檢查比例",
        "body": "學生整理同一反應的資料，老師要求判斷哪些比例可以直接約比，哪些還缺換算資訊。",
        "dataTable": {
          "caption": "比例資料",
          "columns": [
            "編號",
            "A",
            "B",
            "附加資訊"
          ],
          "rows": [
            [
              "甲",
              "0.040 kg",
              "60 g",
              "皆為質量"
            ],
            [
              "乙",
              "20 mL",
              "30 mL",
              "皆為體積"
            ],
            [
              "丙",
              "8 g",
              "12 mL",
              "未提供密度"
            ],
            [
              "丁",
              "4個粒子",
              "6個粒子",
              "皆為粒子數"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_095_01",
          "stem": "哪一組可直接形成質量比？",
          "options": [
            "4 g：6 mL",
            "4個：6 g",
            "4%：6 mL",
            "4 g：6 g"
          ],
          "answerIndex": 3,
          "rationales": [
            "質量比體積。",
            "個數比質量。",
            "濃度比體積。",
            "同為質量。"
          ],
          "reviewEvidence": "4 g：6 g：同為質量；4 g：6 mL：質量比體積；4個：6 g：個數比質量；4%：6 mL：濃度比體積。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "單位辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_095_02",
          "stem": "0.03 kg等於多少g？",
          "options": [
            "30 g",
            "300 g",
            "3 g",
            "0.3 g"
          ],
          "answerIndex": 0,
          "rationales": [
            "0.03×1000＝30。",
            "大10倍。",
            "小10倍。",
            "小100倍。"
          ],
          "reviewEvidence": "30 g：0.03×1000＝30；300 g：大10倍；3 g：小10倍；0.3 g：小100倍。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "換算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_095_03",
          "stem": "g與mL分別描述什麼？",
          "options": [
            "體積與時間",
            "都描述質量",
            "質量與體積",
            "濃度與粒子數"
          ],
          "answerIndex": 2,
          "rationales": [
            "g不是體積。",
            "mL是體積。",
            "g質量、mL體積。",
            "兩者都不是該配對。"
          ],
          "reviewEvidence": "質量與體積：g質量、mL體積；體積與時間：g不是體積；都描述質量：mL是體積；濃度與粒子數：兩者都不是該配對。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "物理量分類"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_095_04",
          "stem": "20 g：0.03 kg化成同單位最簡比為何？",
          "options": [
            "2：3",
            "20：3",
            "2：30",
            "200：3"
          ],
          "answerIndex": 0,
          "rationales": [
            "0.03 kg＝30 g，20：30＝2：3。",
            "未正確換算。",
            "未約簡。",
            "多一個零。"
          ],
          "reviewEvidence": "2：3：0.03 kg＝30 g，20：30＝2：3；20：3：未正確換算；2：30：未約簡；200：3：多一個零。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "單位與比例"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_095_05",
          "stem": "8 g液體與10 mL液體之間，還需什麼才能轉成質量比？",
          "options": [
            "容器顏色",
            "分子名稱字數",
            "液體密度",
            "反應時間"
          ],
          "answerIndex": 2,
          "rationales": [
            "顏色無關。",
            "字數無關。",
            "m＝ρV可轉換。",
            "時間不連結g與mL。"
          ],
          "reviewEvidence": "液體密度：m＝ρV可轉換；容器顏色：顏色無關；分子名稱字數：字數無關；反應時間：時間不連結g與mL。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資訊需求"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_095_06",
          "stem": "粒子數比2：3可否直接稱為體積比2 mL：3 mL？",
          "options": [
            "不可，mL不是單位",
            "不可，缺少物態與條件等轉換依據",
            "可，所有粒子體積相同",
            "可，比例數字相同"
          ],
          "answerIndex": 1,
          "rationales": [
            "mL是體積單位。",
            "粒子數到體積需額外條件。",
            "不同粒子與狀態不可假設。",
            "數字相同不等於物理量相同。"
          ],
          "reviewEvidence": "不可，缺少物態與條件等轉換依據：粒子數到體積需額外條件；不可，mL不是單位：mL是體積單位；可，所有粒子體積相同：不同粒子與狀態不可假設；可，比例數字相同：數字相同不等於物理量相同。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "比例語意"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_095_07",
          "stem": "500 mL：1.5 L的體積比為何？",
          "options": [
            "2：3",
            "1：2",
            "500：1.5",
            "1：3"
          ],
          "answerIndex": 3,
          "rationales": [
            "約分錯。",
            "換算錯。",
            "單位未統一。",
            "1.5 L＝1500 mL，500：1500＝1：3。"
          ],
          "reviewEvidence": "1：3：1.5 L＝1500 mL，500：1500＝1：3；2：3：約分錯；1：2：換算錯；500：1.5：單位未統一。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "體積換算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_095_08",
          "stem": "下列紀錄哪個最不容易被誤用？",
          "options": [
            "兩者差1",
            "A質量：B質量＝2 g：3 g",
            "A：B＝大：小",
            "比例2：3"
          ],
          "answerIndex": 1,
          "rationales": [
            "差值不等於比例。",
            "量名、物質、單位完整。",
            "沒有數值。",
            "缺物理量與單位。"
          ],
          "reviewEvidence": "A質量：B質量＝2 g：3 g：量名、物質、單位完整；兩者差1：差值不等於比例；A：B＝大：小：沒有數值；比例2：3：缺物理量與單位。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "科學表達"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_095_09",
          "stem": "A 5 g、B 10 mL，已知B密度0.5 g/mL。A：B質量比為何？",
          "options": [
            "1：1",
            "2：1",
            "5：10",
            "1：2"
          ],
          "answerIndex": 0,
          "rationales": [
            "B＝0.5×10＝5 g，故1：1。",
            "順序不符。",
            "仍把mL當g。",
            "B質量不是10 g。"
          ],
          "reviewEvidence": "1：1：B＝0.5×10＝5 g，故1：1；2：1：順序不符；5：10：仍把mL當g；1：2：B質量不是10 g。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "密度轉換"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_095_10",
          "stem": "某反應資料寫A消耗0.2 kg、B消耗300 g。最簡質量比為何？",
          "options": [
            "200：3000",
            "1：1500",
            "20：3",
            "2：3"
          ],
          "answerIndex": 3,
          "rationales": [
            "B多一個零。",
            "換算錯。",
            "未正確換算。",
            "0.2 kg＝200 g，200：300＝2：3。"
          ],
          "reviewEvidence": "2：3：0.2 kg＝200 g，200：300＝2：3；200：3000：B多一個零；1：1500：換算錯；20：3：未正確換算。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "資料標準化"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_095_11",
          "stem": "同一表中A以g、B以個數記錄，能否直接求A：B質量比？",
          "options": [
            "能，將兩個數相除",
            "不能，還需B每個粒子的質量",
            "能，個數就是克數",
            "不能，因g不是質量"
          ],
          "answerIndex": 1,
          "rationales": [
            "跨物理量。",
            "需把B個數轉成質量。",
            "個數與克數不同。",
            "g是質量單位。"
          ],
          "reviewEvidence": "不能，還需B每個粒子的質量：需把B個數轉成質量；能，將兩個數相除：跨物理量；能，個數就是克數：個數與克數不同；不能，因g不是質量：g是質量單位。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "資料可比性"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_095_12",
          "stem": "為何反應比例旁保留單位很重要？",
          "options": [
            "可讓不同物理量直接相加",
            "可防止把質量比誤當粒子比或體積比",
            "可取代反應式配平",
            "可使所有比例變成1：1"
          ],
          "answerIndex": 1,
          "rationales": [
            "反而提醒不能混用。",
            "單位明示比例意義。",
            "仍需配平。",
            "單位不會改數值比例。"
          ],
          "reviewEvidence": "可防止把質量比誤當粒子比或體積比：單位明示比例意義；可讓不同物理量直接相加：反而提醒不能混用；可取代反應式配平：仍需配平；可使所有比例變成1：1：單位不會改數值比例。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "科學溝通"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_095_01",
          "stimulusId": "PHYCHM_R4_STIM_095",
          "stem": "甲的最簡質量比為何？",
          "options": [
            "400：60",
            "40：60",
            "2：3",
            "4：6"
          ],
          "answerIndex": 2,
          "rationales": [
            "把0.040 kg誤寫成400 g。",
            "40：60尚未約分。",
            "0.040 kg＝40 g，40：60＝2：3。",
            "4：6雖等值，但尚未化為最簡整數比。"
          ],
          "reviewEvidence": "2：3：0.040 kg＝40 g，40：60＝2：3；400：60：把0.040 kg誤寫成400 g；40：60：40：60尚未約分；4：6：4：6雖等值，但尚未化為最簡整數比。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "表格換算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_095_02",
          "stimulusId": "PHYCHM_R4_STIM_095",
          "stem": "哪一筆不能在現有資訊下直接約成同物理量比例？",
          "options": [
            "乙",
            "甲",
            "丁",
            "丙"
          ],
          "answerIndex": 3,
          "rationales": [
            "乙均為體積。",
            "甲均為質量。",
            "丁均為個數。",
            "丙混合g與mL且無密度。"
          ],
          "reviewEvidence": "丙：丙混合g與mL且無密度；乙：乙均為體積；甲：甲均為質量；丁：丁均為個數。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "資料審核"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_095_03",
          "stimulusId": "PHYCHM_R4_STIM_095",
          "stem": "乙與丁都可約成2：3，能否因此說兩筆資料意義相同？",
          "options": [
            "不能，乙是體積比、丁是粒子數比",
            "不能，因2：3不是比例",
            "能，最簡比相同",
            "能，mL等於粒子"
          ],
          "answerIndex": 0,
          "rationales": [
            "物理量與單位明確不同。",
            "2：3是比例。",
            "數字比相同不等於量相同。",
            "mL不是粒子個數。"
          ],
          "reviewEvidence": "不能，乙是體積比、丁是粒子數比：物理量與單位明確不同；不能，因2：3不是比例：2：3是比例；能，最簡比相同：數字比相同不等於量相同；能，mL等於粒子：mL不是粒子個數。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "語意比較"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S096",
      "title": "避免用係數直接當成質量比",
      "authorityRefs": [
        "AUTH-NATURAL-LC-AA-4-2",
        "AUTH-NATURAL-LC-JA-4-1",
        "AUTH-NATURAL-LC-JA-4-4",
        "AUTH-NATURAL-LC-JB-4-4",
        "AUTH-NATURAL-LP-PA-4-1",
        "AUTH-NATURAL-LP-PA-4-2"
      ],
      "provenance": {
        "status": "original",
        "authorRole": "Codex R4 physics and chemistry content author",
        "copyrightStatus": "Original wording; official curriculum and CAP materials used for scope and assessment calibration only."
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_096",
        "objective": "能說明反應式係數先表示粒子數比，並以係數乘各物質相對分子量，求出同一反應的相對質量比。",
        "sections": [
          {
            "title": "係數只數粒子，不衡量每粒子重量",
            "content": "2H₂＋O₂→2H₂O的2：1：2是分子個數比。H₂相對分子量2、O₂為32、H₂O為18；不同粒子重量差很多，所以係數不能直接加上g。"
          },
          {
            "title": "質量貢獻等於係數乘相對質量",
            "content": "同一基本反應組中，H₂質量貢獻2×2＝4，O₂為1×32＝32，H₂O為2×18＝36。反應物4＋32＝36，正好對應生成物36。"
          },
          {
            "title": "已知實際質量可再同比放大",
            "content": "相對質量比只提供比例。若基本質量比A：B＝1：8，實驗使用5 g A，就需40 g B。套用前仍要確認反應式、相對原子量與單位都正確。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_096_EX_01",
            "prompt": "求2H₂＋O₂→2H₂O的相對質量關係。",
            "steps": [
              "Mr(H₂)=2、Mr(O₂)=32、Mr(H₂O)=18。",
              "乘係數得H₂ 4、O₂ 32、水36。",
              "反應物4＋32＝生成物36。"
            ],
            "answer": "H₂：O₂：H₂O的相對質量為4：32：36。",
            "why": "每項質量需同時包含粒子個數與每粒子的相對質量。"
          },
          {
            "id": "PHYCHM_R4_L_096_EX_02",
            "prompt": "N₂＋3H₂→2NH₃，已知Mr分別28、2、17，求質量關係。",
            "steps": [
              "N₂：1×28＝28。",
              "H₂：3×2＝6。",
              "NH₃：2×17＝34。"
            ],
            "answer": "28：6：34。",
            "why": "28＋6＝34同時驗證反應前後相對質量守恆。"
          },
          {
            "id": "PHYCHM_R4_L_096_EX_03",
            "prompt": "有人把N₂＋3H₂→2NH₃說成1 g：3 g：2 g，如何檢查？",
            "steps": [
              "係數只先給粒子數1：3：2。",
              "乘相對分子量後為28：6：34。",
              "1：3：2不是質量比例。"
            ],
            "answer": "該說法錯誤。",
            "why": "一個N₂分子比一個H₂分子重許多，不能把分子個數直接換成克數。"
          }
        ],
        "misconceptions": [
          {
            "belief": "係數2就代表2 g。",
            "whyWrong": "係數沒有質量單位，只表示粒子倍數。",
            "correction": "先乘該物質的相對分子量。"
          },
          {
            "belief": "所有分子質量相同，所以粒子比等於質量比。",
            "whyWrong": "元素種類與原子數不同會造成相對分子量不同。",
            "correction": "逐一計算每種物質Mr。"
          },
          {
            "belief": "求質量比只需乘反應物，生成物沿用係數。",
            "whyWrong": "生成物也有自身相對分子量。",
            "correction": "對反應式每一項都做係數×Mr。"
          },
          {
            "belief": "相對質量比4：32：36表示只能用這些克數。",
            "whyWrong": "比例可同比縮放。",
            "correction": "依實際投入量找共同倍數。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_096",
        "title": "兩個配平式的係數與Mr",
        "body": "表中反應式皆已配平，相對分子量已提供。質量貢獻可由係數×Mr求得。",
        "dataTable": {
          "caption": "反應資料",
          "columns": [
            "反應",
            "物質",
            "係數",
            "Mr"
          ],
          "rows": [
            [
              "甲",
              "H₂",
              "2",
              "2"
            ],
            [
              "甲",
              "O₂",
              "1",
              "32"
            ],
            [
              "甲",
              "H₂O",
              "2",
              "18"
            ],
            [
              "乙",
              "CO",
              "2",
              "28"
            ],
            [
              "乙",
              "O₂",
              "1",
              "32"
            ],
            [
              "乙",
              "CO₂",
              "2",
              "44"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_096_01",
          "stem": "反應式係數直接表示哪種比例？",
          "options": [
            "質量克數比",
            "密度比",
            "粒子數比",
            "溫度比"
          ],
          "answerIndex": 2,
          "rationales": [
            "需Mr才得質量比。",
            "與密度無關。",
            "係數數完整化學式粒子。",
            "與溫度無關。"
          ],
          "reviewEvidence": "粒子數比：係數數完整化學式粒子；質量克數比：需Mr才得質量比；密度比：與密度無關；溫度比：與溫度無關。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "概念辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_096_02",
          "stem": "由粒子數比轉質量比，需把係數乘什麼？",
          "options": [
            "係數只需乘反應所經過的時間",
            "容器體積",
            "pH值",
            "相對分子量"
          ],
          "answerIndex": 3,
          "rationales": [
            "時間不給每粒子質量。",
            "體積非必要。",
            "pH無關。",
            "係數×Mr得到相對質量貢獻。"
          ],
          "reviewEvidence": "相對分子量：係數×Mr得到相對質量貢獻；係數只需乘反應所經過的時間：時間不給每粒子質量；容器體積：體積非必要；pH值：pH無關。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "程序"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_096_03",
          "stem": "H₂的Mr為2，係數2時相對質量貢獻是多少？",
          "options": [
            "4",
            "1",
            "2",
            "8"
          ],
          "answerIndex": 0,
          "rationales": [
            "2×2＝4。",
            "非除法。",
            "只取Mr或係數。",
            "多乘2。"
          ],
          "reviewEvidence": "4：2×2＝4；1：非除法；2：只取Mr或係數；8：多乘2。",
          "difficulty": "foundation",
          "cognitiveProcess": [
            "乘法"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_096_04",
          "stem": "2H₂＋O₂→2H₂O中，H₂與O₂相對質量比為何？",
          "options": [
            "1：8",
            "2：1",
            "4：18",
            "1：16"
          ],
          "answerIndex": 0,
          "rationales": [
            "4：32約成1：8。",
            "是係數比。",
            "把水Mr混入。",
            "漏係數2。"
          ],
          "reviewEvidence": "1：8：4：32約成1：8；2：1：是係數比；4：18：把水Mr混入；1：16：漏係數2。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "質量比"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_096_05",
          "stem": "為何2H₂與1O₂的質量不會是2：1？",
          "options": [
            "氧氣沒有質量",
            "氫氣不是粒子",
            "O₂每個粒子的相對質量遠大於H₂",
            "係數不能是1"
          ],
          "answerIndex": 2,
          "rationales": [
            "氧氣有質量。",
            "H₂是分子。",
            "O₂ Mr32、H₂ Mr2。",
            "係數可為1。"
          ],
          "reviewEvidence": "O₂每個粒子的相對質量遠大於H₂：O₂ Mr32、H₂ Mr2；氧氣沒有質量：氧氣有質量；氫氣不是粒子：H₂是分子；係數不能是1：係數可為1。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "微觀解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_096_06",
          "stem": "N₂＋3H₂→2NH₃，Mr為28、2、17。H₂的相對質量貢獻是多少？",
          "options": [
            "17",
            "2",
            "6",
            "3"
          ],
          "answerIndex": 2,
          "rationales": [
            "是NH₃ Mr。",
            "只取Mr。",
            "3×2＝6。",
            "只取係數。"
          ],
          "reviewEvidence": "6：3×2＝6；17：是NH₃ Mr；2：只取Mr；3：只取係數。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "資料套用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_096_07",
          "stem": "承上題，反應物相對質量總和是多少？",
          "options": [
            "34",
            "45",
            "30",
            "31"
          ],
          "answerIndex": 0,
          "rationales": [
            "28＋6＝34。",
            "錯誤加總。",
            "28＋2，漏係數。",
            "28＋3。"
          ],
          "reviewEvidence": "34：28＋6＝34；45：錯誤加總；30：28＋2，漏係數；31：28＋3。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "守恆驗算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_096_08",
          "stem": "質量比A：B＝1：8，若A用3 g，B需多少？",
          "options": [
            "8 g",
            "24 g",
            "11 g",
            "16 g"
          ],
          "answerIndex": 1,
          "rationales": [
            "只取比例份數。",
            "3×8＝24 g。",
            "錯誤相加。",
            "少一倍。"
          ],
          "reviewEvidence": "24 g：3×8＝24 g；8 g：只取比例份數；11 g：錯誤相加；16 g：少一倍。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "比例應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_096_09",
          "stem": "2CO＋O₂→2CO₂，Mr為28、32、44。三者相對質量為何？",
          "options": [
            "2：1：2",
            "56：32：88",
            "28：32：44",
            "56：64：88"
          ],
          "answerIndex": 1,
          "rationales": [
            "是粒子比。",
            "2×28、1×32、2×44。",
            "漏乘CO與CO₂係數。",
            "O₂係數不是2。"
          ],
          "reviewEvidence": "56：32：88：2×28、1×32、2×44；2：1：2：是粒子比；28：32：44：漏乘CO與CO₂係數；56：64：88：O₂係數不是2。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "完整換算"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_096_10",
          "stem": "某生說4Al＋3O₂→2Al₂O₃的質量比是4：3：2。應如何修正？",
          "options": [
            "只計算Al",
            "把各化學式的右下角下標直接改寫成克數",
            "係數乘各物質相對式量",
            "把係數全部加1"
          ],
          "answerIndex": 2,
          "rationales": [
            "會漏掉其餘物質。",
            "下標不是克數。",
            "這才連結粒子數與質量。",
            "沒有科學依據。"
          ],
          "reviewEvidence": "係數乘各物質相對式量：這才連結粒子數與質量；只計算Al：會漏掉其餘物質；把各化學式的右下角下標直接改寫成克數：下標不是克數；把係數全部加1：沒有科學依據。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "錯誤修正"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_096_11",
          "stem": "某反應質量關係為4：32：36。若生成18 g產物，需要反應物總質量多少？",
          "options": [
            "18 g",
            "16 g",
            "36 g",
            "32 g"
          ],
          "answerIndex": 0,
          "rationales": [
            "質量守恆，產物18對反應物合計18。",
            "反應物總量隨比例為18。",
            "未按一半縮放。",
            "只取第二反應物基準。"
          ],
          "reviewEvidence": "18 g：質量守恆，產物18對反應物合計18；16 g：反應物總量隨比例為18；36 g：未按一半縮放；32 g：只取第二反應物基準。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "比例縮放",
            "守恆"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_096_12",
          "stem": "要檢查質量比換算是否合理，可做哪項驗算？",
          "options": [
            "所有Mr是否相同",
            "係數和是否相等",
            "分子總數是否相等",
            "反應物各項質量和是否等於生成物各項質量和"
          ],
          "answerIndex": 3,
          "rationales": [
            "不同物質Mr通常不同。",
            "係數和可不同。",
            "分子總數可變。",
            "符合質量守恆。"
          ],
          "reviewEvidence": "反應物各項質量和是否等於生成物各項質量和：符合質量守恆；所有Mr是否相同：不同物質Mr通常不同；係數和是否相等：係數和可不同；分子總數是否相等：分子總數可變。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "驗算策略"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_096_01",
          "stimulusId": "PHYCHM_R4_STIM_096",
          "stem": "甲反應中O₂的相對質量貢獻是多少？",
          "options": [
            "1",
            "16",
            "64",
            "32"
          ],
          "answerIndex": 3,
          "rationales": [
            "只取係數。",
            "是O原子量的一半資訊。",
            "誤乘下標2再乘Mr。",
            "1×32＝32。"
          ],
          "reviewEvidence": "32：1×32＝32；1：只取係數；16：是O原子量的一半資訊；64：誤乘下標2再乘Mr。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "表格乘積"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_096_02",
          "stimulusId": "PHYCHM_R4_STIM_096",
          "stem": "乙反應左右相對質量總和各為多少？",
          "options": [
            "32與176",
            "88與88",
            "56與44",
            "60與88"
          ],
          "answerIndex": 1,
          "rationales": [
            "錯誤倍增。",
            "左56＋32＝88，右2×44＝88。",
            "未乘完整係數。",
            "漏算一部分CO。"
          ],
          "reviewEvidence": "88與88：左56＋32＝88，右2×44＝88；32與176：錯誤倍增；56與44：未乘完整係數；60與88：漏算一部分CO。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "守恆核對"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_096_03",
          "stimulusId": "PHYCHM_R4_STIM_096",
          "stem": "比較甲、乙中的O₂，相同係數1是否表示它在兩反應的質量貢獻相同？",
          "options": [
            "否，甲O₂沒有質量",
            "是，兩者都是1個Mr32的O₂",
            "無法，因表中沒有Mr",
            "否，即使都是1個O₂，其質量也必定不同"
          ],
          "answerIndex": 1,
          "rationales": [
            "氧氣有質量。",
            "化學式和Mr也相同，均貢獻32。",
            "表中已給32。",
            "同一物質同係數貢獻相同。"
          ],
          "reviewEvidence": "是，兩者都是1個Mr32的O₂：化學式和Mr也相同，均貢獻32；否，甲O₂沒有質量：氧氣有質量；無法，因表中沒有Mr：表中已給32；否，即使都是1個O₂，其質量也必定不同：同一物質同係數貢獻相同。",
          "difficulty": "transfer",
          "cognitiveProcess": [
            "跨反應比較"
          ]
        }
      ]
    }
  ]
};
