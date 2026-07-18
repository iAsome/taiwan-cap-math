export const PHYSICS_CHEMISTRY_AUTHORED_U20 = {
  "unitId": "PHYCHM_R4_U20",
  "title": "熱的傳播與保溫",
  "authorityRefs": [
    "AUTH-NATURAL-LC-BB-4-1",
    "AUTH-NATURAL-LC-BB-4-3",
    "AUTH-NATURAL-LC-BB-4-4",
    "AUTH-NATURAL-LC-BB-4-5",
    "AUTH-NATURAL-LP-TR-4-1"
  ],
  "provenance": {
    "curriculum": "十二年國教自然科學第四學習階段熱傳播與生活應用",
    "calibration": "臺灣國中教育會考自然科導熱、對流、輻射與保溫題型",
    "authorship": "original-static-r4"
  },
  "skills": [
    {
      "id": "PHYCHM_R4_S153",
      "title": "由粒子碰撞解釋熱傳導",
      "authorityRefs": [
        "AUTH-NATURAL-LC-BB-4-1",
        "AUTH-NATURAL-LC-BB-4-3",
        "AUTH-NATURAL-LC-BB-4-4",
        "AUTH-NATURAL-LC-BB-4-5",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "curriculum": "十二年國教自然科學第四學習階段熱傳播與生活應用",
        "calibration": "臺灣國中教育會考自然科導熱、對流、輻射與保溫題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_153",
        "objective": "能以相鄰粒子交互作用與金屬自由電子說明熱傳導，判斷固體中的熱流方向，並區分能量傳遞與物質整體移動。",
        "sections": [
          {
            "title": "相鄰粒子傳遞能量",
            "body": "固體一端受熱後，該處粒子振動較劇烈，透過相鄰粒子作用把能量逐步傳向低溫端；物質本身沒有從熱端整體跑到冷端。"
          },
          {
            "title": "金屬通常傳得較快",
            "body": "金屬除晶格振動外，自由電子也能攜帶能量，因此常比木材、塑膠導熱快。觸摸同溫金屬較冷，是手的熱較快流走，不代表金屬初溫較低。"
          },
          {
            "title": "傳導需要接觸路徑",
            "body": "鍋柄、牆壁與湯匙中的熱傳常有傳導。路徑越長、截面與材質不同，速率也改變；隔熱材料不是完全不傳熱，而是讓能量通過得較慢。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_153_EX_01",
            "prompt": "金屬棒左端加熱，右端為何稍後變熱？",
            "steps": [
              "左端粒子先增能",
              "能量傳給鄰近粒子",
              "沿棒傳向右端"
            ],
            "answer": "熱以傳導沿棒移動。",
            "why": "左端高溫區的能量經粒子作用與金屬電子逐步傳向較冷區，並非熱粒子整體移到右端。"
          },
          {
            "id": "PHYCHM_R4_L_153_EX_02",
            "prompt": "同溫木板與鋁板，手摸鋁板較冷，何解？",
            "steps": [
              "確認初溫相同",
              "比較導熱速率",
              "追蹤手的熱"
            ],
            "answer": "鋁較快把手的熱帶走。",
            "why": "觸感反映短時間熱流速率；鋁導熱較快，所以手部降溫更明顯。"
          },
          {
            "id": "PHYCHM_R4_L_153_EX_03",
            "prompt": "鍋柄包木材能完全阻熱嗎？",
            "steps": [
              "木材導熱慢",
              "仍有溫差",
              "判斷只降低速率"
            ],
            "answer": "不能完全阻止，只能減慢。",
            "why": "木材提供較大熱阻，延後把手升溫，但長時間後仍會有能量傳過。"
          }
        ],
        "misconceptions": [
          {
            "belief": "傳導時熱端原子跑到冷端。",
            "whyWrong": "固體粒子多在平衡位置附近振動。",
            "correction": "描述能量逐鄰傳遞。"
          },
          {
            "belief": "摸起來冷就代表物體溫度低。",
            "whyWrong": "觸感也受導熱率影響。",
            "correction": "用溫度計量初溫。"
          },
          {
            "belief": "隔熱材料完全沒有熱傳導。",
            "whyWrong": "實際材料仍有有限導熱。",
            "correction": "說明熱流速率降低。"
          },
          {
            "belief": "只有金屬能傳導熱。",
            "whyWrong": "所有一般物質皆可不同程度傳導。",
            "correction": "比較快慢而非有無。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_153",
        "title": "四根棒的蠟滴實驗",
        "body": "等長等截面棒一端同時接觸80°C熱源，距熱端10 cm處蠟滴融化時間如下。",
        "dataTable": {
          "columns": [
            "材料",
            "融化時間/s"
          ],
          "rows": [
            [
              "銅",
              "18"
            ],
            [
              "鋁",
              "25"
            ],
            [
              "玻璃",
              "96"
            ],
            [
              "木材",
              "未在180 s內融化"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_153_01",
          "stem": "固體傳導時主要傳遞？",
          "options": [
            "質量",
            "整塊物質",
            "原子種類",
            "能量"
          ],
          "answerIndex": 3,
          "rationales": [
            "質量不轉移。",
            "固體不整體流動。",
            "元素不改。",
            "能量沿溫差傳。"
          ],
          "reviewEvidence": "能量：能量沿溫差傳；質量：質量不轉移；整塊物質：固體不整體流動；原子種類：元素不改。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "概念"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_153_02",
          "stem": "金屬導熱快常與何者有關？",
          "options": [
            "溫度永遠高",
            "自由電子與晶格傳能",
            "沒有粒子",
            "密度必為零"
          ],
          "answerIndex": 1,
          "rationales": [
            "不一定。",
            "金屬微觀機制。",
            "金屬有粒子。",
            "不為零。"
          ],
          "reviewEvidence": "自由電子與晶格傳能：金屬微觀機制；溫度永遠高：不一定；沒有粒子：金屬有粒子；密度必為零：不為零。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "粒子模型"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_153_03",
          "stem": "熱湯中金屬匙柄變熱主要是？",
          "options": [
            "凝固",
            "蒸發",
            "傳導",
            "對流使匙整體流動"
          ],
          "answerIndex": 2,
          "rationales": [
            "未凝固。",
            "非主要。",
            "熱沿金屬匙。",
            "匙不流動。"
          ],
          "reviewEvidence": "傳導：熱沿金屬匙；凝固：未凝固；蒸發：非主要；對流使匙整體流動：匙不流動。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_153_04",
          "stem": "同溫金屬比木頭摸起來冷因？",
          "options": [
            "金屬摸起來較冷即可確定它的實際溫度較低",
            "金屬更快導走手熱",
            "手沒有溫度",
            "木頭會發熱"
          ],
          "answerIndex": 1,
          "rationales": [
            "初溫同。",
            "熱流速率較大。",
            "手有溫度。",
            "無主動發熱。"
          ],
          "reviewEvidence": "金屬更快導走手熱：熱流速率較大；金屬摸起來較冷即可確定它的實際溫度較低：初溫同；手沒有溫度：手有溫度；木頭會發熱：無主動發熱。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "因果"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_153_05",
          "stem": "鍋柄加塑膠套目的？",
          "options": [
            "讓熱由冷到熱",
            "降低傳導速率",
            "消除粒子",
            "提高導熱"
          ],
          "answerIndex": 1,
          "rationales": [
            "方向不反轉。",
            "塑膠導熱較慢。",
            "塑膠套仍由粒子組成，只是導熱較慢，並非消除物質粒子。",
            "效果相反。"
          ],
          "reviewEvidence": "降低傳導速率：塑膠導熱較慢；讓熱由冷到熱：方向不反轉；消除粒子：塑膠套仍由粒子組成，只是導熱較慢，並非消除物質粒子；提高導熱：效果相反。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "性質配對"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_153_06",
          "stem": "傳導的淨熱流方向？",
          "options": [
            "任意",
            "低溫到高溫",
            "質量大到小",
            "高溫到低溫"
          ],
          "answerIndex": 3,
          "rationales": [
            "不任意。",
            "低溫端不會自發把淨熱傳給高溫端，這顛倒了溫差所決定的方向。",
            "非質量。",
            "由溫差決定。"
          ],
          "reviewEvidence": "高溫到低溫：由溫差決定；任意：不任意；低溫到高溫：低溫端不會自發把淨熱傳給高溫端，這顛倒了溫差所決定的方向；質量大到小：非質量。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "判斷"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_153_07",
          "stem": "棒越長、材質截面相同，傳熱通常？",
          "options": [
            "較慢",
            "不變",
            "立即完成",
            "較快"
          ],
          "answerIndex": 0,
          "rationales": [
            "路徑熱阻較大。",
            "長度會影響。",
            "傳熱需要時間；增加棒長會延長路徑，不能視為立即完成。",
            "同材質同截面下，棒較長使傳導路徑增加，通常不會更快。"
          ],
          "reviewEvidence": "較慢：路徑熱阻較大；不變：長度會影響；立即完成：傳熱需要時間；增加棒長會延長路徑，不能視為立即完成；較快：同材質同截面下，棒較長使傳導路徑增加，通常不會更快。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_153_08",
          "stem": "保溫容器的真空層為何能使熱傳導大幅減弱？",
          "options": [
            "真空層缺少可碰撞傳遞能量的物質粒子",
            "真空會增加兩壁間粒子碰撞，使傳導更頻繁",
            "真空使容器內外不再具有溫度",
            "真空能把熱輻射也完全消除"
          ],
          "answerIndex": 0,
          "rationales": [
            "傳導仰賴物質粒子碰撞或自由電子傳遞，真空缺少這條路徑。",
            "真空的粒子數極少，不會增加粒子碰撞。",
            "真空區仍可討論邊界表面的溫度，溫度概念不會消失。",
            "熱輻射可以穿越真空，通常另以亮面降低輻射交換。"
          ],
          "reviewEvidence": "真空層缺少可碰撞傳遞能量的物質粒子：傳導仰賴物質粒子碰撞或自由電子傳遞，真空缺少這條路徑；真空會增加兩壁間粒子碰撞，使傳導更頻繁：真空的粒子數極少，不會增加粒子碰撞；真空使容器內外不再具有溫度：真空區仍可討論邊界表面的溫度，溫度概念不會消失；真空能把熱輻射也完全消除：熱輻射可以穿越真空，通常另以亮面降低輻射交換。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "條件"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_153_09",
          "stem": "多孔泡棉隔熱常利用？",
          "options": [
            "增加金屬接觸",
            "困住導熱慢且不易流動的空氣",
            "產生冷量",
            "讓水循環"
          ],
          "answerIndex": 1,
          "rationales": [
            "會加快。",
            "減少傳導與對流。",
            "無冷量。",
            "泡棉非此設計。"
          ],
          "reviewEvidence": "困住導熱慢且不易流動的空氣：減少傳導與對流；增加金屬接觸：會加快；產生冷量：無冷量；讓水循環：泡棉非此設計。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "工程解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_153_10",
          "stem": "增加棒截面通常使同溫差傳導？",
          "options": [
            "較慢",
            "為零",
            "方向反轉",
            "較快"
          ],
          "answerIndex": 3,
          "rationales": [
            "截面增加提供更多平行傳熱路徑，判成較慢顛倒了截面的作用。",
            "仍有熱流。",
            "方向不變。",
            "並行傳熱面積增。"
          ],
          "reviewEvidence": "較快：並行傳熱面積增；較慢：截面增加提供更多平行傳熱路徑，判成較慢顛倒了截面的作用；為零：仍有熱流；方向反轉：方向不變。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "關係推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_153_11",
          "stem": "達熱平衡後棒內？",
          "options": [
            "能量消失",
            "兩端質量相同",
            "無淨傳導熱流",
            "粒子停止"
          ],
          "answerIndex": 2,
          "rationales": [
            "守恆。",
            "熱平衡只涉及溫度與淨熱流，棒兩端的質量不必相同。",
            "無溫差。",
            "仍振動。"
          ],
          "reviewEvidence": "無淨傳導熱流：無溫差；能量消失：守恆；兩端質量相同：熱平衡只涉及溫度與淨熱流，棒兩端的質量不必相同；粒子停止：仍振動。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "概念"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_153_12",
          "stem": "公平比較導熱材質要固定？",
          "options": [
            "材質",
            "棒名稱",
            "長度、截面與溫差",
            "融化時間"
          ],
          "answerIndex": 2,
          "rationales": [
            "是自變項。",
            "隨材質。",
            "隔離材質。",
            "是結果。"
          ],
          "reviewEvidence": "長度、截面與溫差：隔離材質；材質：是自變項；棒名稱：隨材質；融化時間：是結果。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "設計"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_153_01",
          "stimulusId": "PHYCHM_R4_STIM_153",
          "stem": "導熱最快材料？",
          "options": [
            "銅",
            "玻璃",
            "木材",
            "鋁"
          ],
          "answerIndex": 0,
          "rationales": [
            "蠟最快融18 s。",
            "96 s。",
            "未融。",
            "25 s。"
          ],
          "reviewEvidence": "銅：蠟最快融18 s；玻璃：96 s；木材：未融；鋁：25 s。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "表格"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_153_02",
          "stimulusId": "PHYCHM_R4_STIM_153",
          "stem": "做鍋柄隔熱層，表中優先考慮？",
          "options": [
            "玻璃",
            "銅",
            "鋁",
            "木材"
          ],
          "answerIndex": 3,
          "rationales": [
            "仍較木快。",
            "最快。",
            "次快。",
            "傳熱最慢。"
          ],
          "reviewEvidence": "木材：180 s內蠟滴仍未融化，四種材料中傳熱最慢，最適合優先作隔熱層；玻璃：96 s便融化；銅：18 s最快；鋁：25 s次快。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_153_03",
          "stimulusId": "PHYCHM_R4_STIM_153",
          "stem": "能否由此表比較不同截面棒？",
          "options": [
            "能，等截面實驗已代表所有截面大小的金屬棒",
            "不能，因沒有時間",
            "不能，實驗只測等截面",
            "能，截面無影響"
          ],
          "answerIndex": 2,
          "rationales": [
            "表中只比較等截面金屬棒，沒有不同截面的實測資料可供外推。",
            "有時間。",
            "截面未變化。",
            "截面會影響。"
          ],
          "reviewEvidence": "不能，實驗只測等截面：截面未變化；能，等截面實驗已代表所有截面大小的金屬棒：表中只比較等截面金屬棒，沒有不同截面的實測資料可供外推；不能，因沒有時間：有時間；能，截面無影響：截面會影響。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "限制"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S154",
      "title": "由密度變化解釋流體對流",
      "authorityRefs": [
        "AUTH-NATURAL-LC-BB-4-1",
        "AUTH-NATURAL-LC-BB-4-3",
        "AUTH-NATURAL-LC-BB-4-4",
        "AUTH-NATURAL-LC-BB-4-5",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "curriculum": "十二年國教自然科學第四學習階段熱傳播與生活應用",
        "calibration": "臺灣國中教育會考自然科導熱、對流、輻射與保溫題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_154",
        "objective": "能以流體受熱膨脹、密度改變與浮力形成循環解釋對流，辨認加熱位置、重力與邊界如何影響流向。",
        "sections": [
          {
            "title": "對流伴隨流體移動",
            "body": "液體或氣體局部受熱後多會膨脹、密度降低，在重力場中上升；較冷、密度較大的流體下沉補位，形成循環並攜帶能量。"
          },
          {
            "title": "不是熱本身向上",
            "body": "熱可向各方向傳導與輻射；『熱空氣上升』是受熱空氣密度較小而上升。若從上方加熱，穩定分層可能使整體對流較弱。"
          },
          {
            "title": "看示蹤物判流場",
            "body": "色素、煙或小粒子可顯示流體路徑，但示蹤物本身不應大幅改變密度。風扇造成的強制對流與浮力造成的自然對流來源不同。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_154_EX_01",
            "prompt": "鍋底加熱水時，水如何循環？",
            "steps": [
              "底部水先升溫",
              "密度降低上升",
              "上部冷水下沉"
            ],
            "answer": "形成底部上升、周圍下沉的循環。",
            "why": "密度差與重力使流體整體移動，能量因此由下往其他區域傳送。"
          },
          {
            "id": "PHYCHM_R4_L_154_EX_02",
            "prompt": "冷氣機常裝較高處，有何對流考量？",
            "steps": [
              "冷空氣密度較大",
              "下沉",
              "暖空氣上升回流"
            ],
            "answer": "有利冷暖空氣循環。",
            "why": "高處冷空氣下沉、低處較暖空氣上升，配合風扇可使室內溫度較均勻。"
          },
          {
            "id": "PHYCHM_R4_L_154_EX_03",
            "prompt": "水從上方緩慢加熱，底部升溫較慢，為何？",
            "steps": [
              "上層受熱密度低",
              "仍位於上方",
              "分層穩定"
            ],
            "answer": "自然對流較不易建立。",
            "why": "熱而輕的水已在上方，冷而重的水在下方，缺少位置交換動力。"
          }
        ],
        "misconceptions": [
          {
            "belief": "熱這種物質只會往上跑。",
            "whyWrong": "上升的是低密度流體。",
            "correction": "區分能量傳遞與流體運動。"
          },
          {
            "belief": "固體內也會形成整塊材料對流。",
            "whyWrong": "固體不能像流體持續流動。",
            "correction": "固體主要以傳導。"
          },
          {
            "belief": "任何加熱位置都產生同樣強對流。",
            "whyWrong": "穩定或不穩定密度分層不同。",
            "correction": "分析熱源位置與重力。"
          },
          {
            "belief": "風扇會降低空氣溫度本身。",
            "whyWrong": "風扇主要促進流動與蒸發。",
            "correction": "說明強制對流而非主動製冷。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_154",
        "title": "水槽上下加熱比較",
        "body": "兩水槽水量初溫相同；甲從底部加熱，乙從水面附近加熱。",
        "dataTable": {
          "columns": [
            "水槽",
            "5分鐘底部/°C",
            "5分鐘上部/°C",
            "色素軌跡"
          ],
          "rows": [
            [
              "甲",
              "38",
              "41",
              "明顯循環"
            ],
            [
              "乙",
              "25",
              "48",
              "主要停留上層"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_154_01",
          "stem": "流體受熱膨脹後密度通常？",
          "options": [
            "升高",
            "無限大",
            "不變",
            "降低"
          ],
          "answerIndex": 3,
          "rationales": [
            "流體受熱膨脹而質量近似不變，密度應下降，不是升高。",
            "有限體積和質量不會產生無限密度；受熱膨脹反而降低密度。",
            "體積改變。",
            "同質量體積增。"
          ],
          "reviewEvidence": "降低：同質量體積增；升高：流體受熱膨脹而質量近似不變，密度應下降，不是升高；無限大：有限體積和質量不會產生無限密度；受熱膨脹反而降低密度；不變：體積改變。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "概念"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_154_02",
          "stem": "自然對流中熱流體上升主因？",
          "options": [
            "自然對流上升只因熱量只能向上傳遞",
            "沒有重力",
            "密度較小受浮力",
            "質量消失"
          ],
          "answerIndex": 2,
          "rationales": [
            "錯誤口訣。",
            "需要重力效應。",
            "重力場密度差。",
            "質量未消失。"
          ],
          "reviewEvidence": "密度較小受浮力：重力場密度差；自然對流上升只因熱量只能向上傳遞：錯誤口訣；沒有重力：需要重力效應；質量消失：質量未消失。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_154_03",
          "stem": "對流主要發生於？",
          "options": [
            "理想固定固體",
            "只有金屬",
            "液體與氣體",
            "真空"
          ],
          "answerIndex": 2,
          "rationales": [
            "固體不流。",
            "金屬固體主傳導。",
            "流體可整體移動。",
            "無介質。"
          ],
          "reviewEvidence": "液體與氣體：流體可整體移動；理想固定固體：固體不流；只有金屬：金屬固體主傳導；真空：無介質。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "分類"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_154_04",
          "stem": "暖氣設低處有何理由？",
          "options": [
            "熱只能傳導",
            "暖空氣上升促進循環",
            "地板無溫度",
            "冷空氣上升"
          ],
          "answerIndex": 1,
          "rationales": [
            "空氣可對流。",
            "形成自然對流。",
            "地板有溫度。",
            "冷空氣較重下沉。"
          ],
          "reviewEvidence": "暖空氣上升促進循環：形成自然對流；熱只能傳導：空氣可對流；地板無溫度：地板有溫度；冷空氣上升：冷空氣較重下沉。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_154_05",
          "stem": "從上方加熱液體對流弱，因？",
          "options": [
            "底部更熱",
            "液體消失",
            "沒有粒子",
            "低密度熱液在上、分層穩定"
          ],
          "answerIndex": 3,
          "rationales": [
            "底部較冷。",
            "液體仍在容器中；對流弱是上層先受熱後缺少明顯浮力循環。",
            "有粒子。",
            "缺少翻轉驅力。"
          ],
          "reviewEvidence": "低密度熱液在上、分層穩定：缺少翻轉驅力；底部更熱：底部較冷；液體消失：液體仍在容器中；對流弱是上層先受熱後缺少明顯浮力循環；沒有粒子：有粒子。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "因果"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_154_06",
          "stem": "風扇使室內空氣流動，這主要屬於哪種熱傳方式？",
          "options": [
            "由外力驅動流體的強制對流",
            "不需流體移動便可傳播的熱輻射",
            "能量只在靜止固體內傳遞的傳導",
            "只由冷熱密度差形成的自然對流"
          ],
          "answerIndex": 0,
          "rationales": [
            "風扇對空氣作功並驅動整體流動，屬強制對流。",
            "風扇主要增加空氣流動，不是產生電磁波來傳熱。",
            "此現象有空氣整體移動，不是只靠相鄰粒子傳導。",
            "自然對流由溫差造成密度差與浮力，不以風扇驅動。"
          ],
          "reviewEvidence": "由外力驅動流體的強制對流：風扇對空氣作功並驅動整體流動，屬強制對流；不需流體移動便可傳播的熱輻射：風扇主要增加空氣流動，不是產生電磁波來傳熱；能量只在靜止固體內傳遞的傳導：此現象有空氣整體移動，不是只靠相鄰粒子傳導；只由冷熱密度差形成的自然對流：自然對流由溫差造成密度差與浮力，不以風扇驅動。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_154_07",
          "stem": "色素在水中用途？",
          "options": [
            "提供全部熱量",
            "顯示流動路徑",
            "量質量",
            "消除密度"
          ],
          "answerIndex": 1,
          "rationales": [
            "不是熱源。",
            "作示蹤物。",
            "非天平。",
            "不消除。"
          ],
          "reviewEvidence": "顯示流動路徑：作示蹤物；提供全部熱量：不是熱源；量質量：非天平；消除密度：不消除。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "方法"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_154_08",
          "stem": "熱氣球上升主要因？",
          "options": [
            "球內真空",
            "重力消失",
            "內部熱空氣平均密度較外界小",
            "熱沒有質量"
          ],
          "answerIndex": 2,
          "rationales": [
            "不是完全真空。",
            "仍有重力。",
            "浮力可超過總重。",
            "空氣有質量。"
          ],
          "reviewEvidence": "內部熱空氣平均密度較外界小：浮力可超過總重；球內真空：不是完全真空；重力消失：仍有重力；熱沒有質量：空氣有質量。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "遷移"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_154_09",
          "stem": "煮湯攪拌會加快均溫，主要因？",
          "options": [
            "停止傳熱",
            "使質量消失",
            "強迫流體混合",
            "改變比熱為零"
          ],
          "answerIndex": 2,
          "rationales": [
            "反而加快。",
            "攪拌使流體混合，不會使湯的質量消失。",
            "增強對流。",
            "比熱不歸零。"
          ],
          "reviewEvidence": "強迫流體混合：增強對流；停止傳熱：反而加快；使質量消失：攪拌使流體混合，不會使湯的質量消失；改變比熱為零：比熱不歸零。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "現象"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_154_10",
          "stem": "沒有重力時自然對流可能？",
          "options": [
            "大幅減弱",
            "必增強",
            "方向仍固定向上",
            "使溫度消失"
          ],
          "answerIndex": 0,
          "rationales": [
            "浮力來源弱化。",
            "自然對流依賴浮力；重力減弱時不會因此必定增強。",
            "上方需重力定義。",
            "改變重力不會讓溫度這個狀態量消失，只會影響浮力對流。"
          ],
          "reviewEvidence": "大幅減弱：浮力來源弱化；必增強：自然對流依賴浮力；重力減弱時不會因此必定增強；方向仍固定向上：上方需重力定義；使溫度消失：改變重力不會讓溫度這個狀態量消失，只會影響浮力對流。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "條件推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_154_11",
          "stem": "對流同時傳遞？",
          "options": [
            "只有電荷",
            "能量並伴隨流體質量移動",
            "完全無物質移動",
            "只有光"
          ],
          "answerIndex": 1,
          "rationales": [
            "非必要。",
            "流體整體流動。",
            "這是傳導特徵。",
            "非輻射。"
          ],
          "reviewEvidence": "能量並伴隨流體質量移動：流體整體流動；只有電荷：非必要；完全無物質移動：這是傳導特徵；只有光：非輻射。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "比較"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_154_12",
          "stem": "公平比較上下加熱須固定？",
          "options": [
            "對流強度",
            "終溫",
            "加熱位置",
            "水量、初溫與加熱功率"
          ],
          "answerIndex": 3,
          "rationales": [
            "是結果。",
            "是結果。",
            "是自變項。",
            "隔離位置。"
          ],
          "reviewEvidence": "水量、初溫與加熱功率：隔離位置；對流強度：是結果；終溫：是結果；加熱位置：是自變項。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "設計"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_154_01",
          "stimulusId": "PHYCHM_R4_STIM_154",
          "stem": "哪槽對流較明顯？",
          "options": [
            "甲",
            "無法",
            "乙",
            "相同"
          ],
          "answerIndex": 0,
          "rationales": [
            "色素明顯循環。",
            "表中已給。",
            "停上層。",
            "不同。"
          ],
          "reviewEvidence": "甲：色素明顯循環；無法：表中已給；乙：停上層；相同：不同。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "表格"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_154_02",
          "stimulusId": "PHYCHM_R4_STIM_154",
          "stem": "乙底部仍25°C主要因？",
          "options": [
            "上層受熱形成穩定分層",
            "溫度計壞",
            "水無法傳熱",
            "底部先受熱"
          ],
          "answerIndex": 0,
          "rationales": [
            "熱水留在上層。",
            "無證據。",
            "仍可慢傳。",
            "與設計相反。"
          ],
          "reviewEvidence": "上層受熱形成穩定分層：熱水留在上層；溫度計壞：無證據；水無法傳熱：仍可慢傳；底部先受熱：與設計相反。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "因果"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_154_03",
          "stimulusId": "PHYCHM_R4_STIM_154",
          "stem": "若用攪拌器攪乙槽，最可能？",
          "options": [
            "上層更熱下層不變",
            "密度概念失效",
            "水變固體",
            "上下溫差縮小"
          ],
          "answerIndex": 3,
          "rationales": [
            "攪拌會帶能量下移。",
            "仍適用。",
            "攪拌會促進液體混合與均溫，不會在未達凝固條件時把水變成固體。",
            "強制混合均溫。"
          ],
          "reviewEvidence": "上下溫差縮小：強制混合均溫；上層更熱下層不變：攪拌會帶能量下移；密度概念失效：仍適用；水變固體：攪拌會促進液體混合與均溫，不會在未達凝固條件時把水變成固體。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "預測"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S155",
      "title": "辨識不需介質的熱輻射",
      "authorityRefs": [
        "AUTH-NATURAL-LC-BB-4-1",
        "AUTH-NATURAL-LC-BB-4-3",
        "AUTH-NATURAL-LC-BB-4-4",
        "AUTH-NATURAL-LC-BB-4-5",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "curriculum": "十二年國教自然科學第四學習階段熱傳播與生活應用",
        "calibration": "臺灣國中教育會考自然科導熱、對流、輻射與保溫題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_155",
        "objective": "能以電磁波傳能說明熱輻射不需介質，辨認太陽、火焰與高溫表面的輻射，並區分物體吸收、反射與放射。",
        "sections": [
          {
            "title": "輻射可穿越真空",
            "body": "任何高於絕對零度的物體都會放出電磁輻射，並可吸收其他物體的輻射。太陽能穿越太空到地球，是熱輻射不需物質介質的明顯例子。"
          },
          {
            "title": "淨交換仍由溫差決定",
            "body": "兩物體彼此都放射，但高溫物通常放得更多，因此淨能量由高溫端到低溫端。靠近火焰感到熱，可能同時有輻射與熱空氣對流。"
          },
          {
            "title": "表面會影響吸放射",
            "body": "表面顏色、粗糙與光澤會影響輻射吸收及放射；亮面可反射較多輻射。實際熱傳常三種方式並存，須由是否接觸、是否有流體運動及是否隔著真空判斷。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_155_EX_01",
            "prompt": "太陽到地球之間多為真空，能量如何到達？",
            "steps": [
              "排除傳導",
              "排除流體對流",
              "選電磁輻射"
            ],
            "answer": "以熱輻射傳遞。",
            "why": "電磁波不需要介質，可穿越太空；傳導與對流都需要物質。"
          },
          {
            "id": "PHYCHM_R4_L_155_EX_02",
            "prompt": "手隔著透明耐熱板仍感到火焰熱，可能保留哪種傳熱？",
            "steps": [
              "板阻擋熱氣直接接觸",
              "觀察仍有能量",
              "辨認輻射穿透或被板再放射"
            ],
            "answer": "熱輻射仍可貢獻。",
            "why": "即使對流被大幅阻擋，火焰與熱板仍會以電磁輻射把能量傳向手。"
          },
          {
            "id": "PHYCHM_R4_L_155_EX_03",
            "prompt": "真空瓶夾層仍鍍亮面，目的？",
            "steps": [
              "真空抑制傳導對流",
              "輻射仍可穿越",
              "亮面反射輻射"
            ],
            "answer": "進一步減少輻射熱交換。",
            "why": "真空不能阻斷電磁波，低放射亮面可反射部分紅外輻射。"
          }
        ],
        "misconceptions": [
          {
            "belief": "真空中完全不能傳熱。",
            "whyWrong": "輻射可穿越真空。",
            "correction": "只說傳導與對流被大幅抑制。"
          },
          {
            "belief": "只有發光物體才放熱輻射。",
            "whyWrong": "常溫物體也放紅外輻射。",
            "correction": "可見光不是輻射存在的必要條件。"
          },
          {
            "belief": "輻射只能由太陽產生。",
            "whyWrong": "所有有溫度物體皆可放射。",
            "correction": "比較不同溫度物體的淨交換。"
          },
          {
            "belief": "靠火感到熱一定只有輻射。",
            "whyWrong": "空氣對流也可能參與。",
            "correction": "依位置與遮擋分析多種方式。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_155",
        "title": "熱源與感測器間的屏障",
        "body": "熱源和感測器距離固定，初溫相同，記錄1分鐘後升溫。",
        "dataTable": {
          "columns": [
            "組別",
            "中間條件",
            "升溫/°C"
          ],
          "rows": [
            [
              "甲",
              "空氣",
              "12"
            ],
            [
              "乙",
              "抽成低壓",
              "8"
            ],
            [
              "丙",
              "低壓加亮面金屬屏",
              "2"
            ],
            [
              "丁",
              "空氣加透明板阻氣流",
              "6"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_155_01",
          "stem": "哪種熱傳不需介質？",
          "options": [
            "自然對流",
            "輻射",
            "傳導",
            "強制對流"
          ],
          "answerIndex": 1,
          "rationales": [
            "需流體。",
            "電磁波可過真空。",
            "需物質。",
            "需流體。"
          ],
          "reviewEvidence": "輻射：電磁波可過真空；自然對流：需流體；傳導：需物質；強制對流：需流體。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_155_02",
          "stem": "太陽能到地球主要靠？",
          "options": [
            "海水流動",
            "金屬傳導",
            "輻射",
            "空氣對流穿越真空"
          ],
          "answerIndex": 2,
          "rationales": [
            "海水不在太空。",
            "無金屬棒。",
            "跨越太空。",
            "真空無空氣。"
          ],
          "reviewEvidence": "輻射：跨越太空；海水流動：海水不在太空；金屬傳導：無金屬棒；空氣對流穿越真空：真空無空氣。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_155_03",
          "stem": "常溫桌面會放輻射嗎？",
          "options": [
            "常溫物體不發紅光，所以完全不放出熱輻射",
            "會，主要為不可見紅外",
            "必須真空才會",
            "只有白天會"
          ],
          "answerIndex": 1,
          "rationales": [
            "可見光非必要。",
            "有溫度即放射。",
            "任何介質皆可。",
            "與晝夜無關。"
          ],
          "reviewEvidence": "會，主要為不可見紅外：有溫度即放射；常溫物體不發紅光，所以完全不放出熱輻射：可見光非必要；必須真空才會：任何介質皆可；只有白天會：與晝夜無關。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "概念"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_155_04",
          "stem": "保溫瓶內壁採用亮面處理，主要減少哪一種熱傳？",
          "options": [
            "瓶內流體因密度差造成的對流",
            "瓶塞材料內部發生的熱傳導",
            "容器與內容物所具有的總質量",
            "表面吸收與放出的熱輻射"
          ],
          "answerIndex": 3,
          "rationales": [
            "抑制對流主要靠密閉、小空隙或真空，不是亮面本身。",
            "降低傳導要選低導熱材料或延長傳熱路徑，亮面不是主因。",
            "表面處理不會以減少總質量作為保溫機制。",
            "亮面對紅外線的吸收率與放射率較低，可減少輻射交換。"
          ],
          "reviewEvidence": "表面吸收與放出的熱輻射：亮面對紅外線的吸收率與放射率較低，可減少輻射交換；瓶內流體因密度差造成的對流：抑制對流主要靠密閉、小空隙或真空，不是亮面本身；瓶塞材料內部發生的熱傳導：降低傳導要選低導熱材料或延長傳熱路徑，亮面不是主因；容器與內容物所具有的總質量：表面處理不會以減少總質量作為保溫機制。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "用途"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_155_05",
          "stem": "兩同材質表面，較熱者通常？",
          "options": [
            "較熱表面的放射功率較大是因其質量必較大",
            "只吸收",
            "完全不放射",
            "放射功率較大"
          ],
          "answerIndex": 3,
          "rationales": [
            "無必然。",
            "也放射。",
            "仍放射。",
            "溫度提高放射增強。"
          ],
          "reviewEvidence": "放射功率較大：溫度提高放射增強；較熱表面的放射功率較大是因其質量必較大：無必然；只吸收：也放射；完全不放射：仍放射。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_155_06",
          "stem": "真空層主要抑制？",
          "options": [
            "真空層主要用來消除紅外線的存在",
            "氣體傳導與對流",
            "物體溫度",
            "所有輻射"
          ],
          "answerIndex": 1,
          "rationales": [
            "仍存在。",
            "缺少介質。",
            "不直接消除。",
            "輻射仍在。"
          ],
          "reviewEvidence": "氣體傳導與對流：缺少介質；真空層主要用來消除紅外線的存在：仍存在；物體溫度：不直接消除；所有輻射：輻射仍在。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "比較"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_155_07",
          "stem": "隔著真空兩板仍會趨向熱平衡，原因？",
          "options": [
            "水流",
            "空氣對流",
            "接觸傳導",
            "輻射交換"
          ],
          "answerIndex": 3,
          "rationales": [
            "無水。",
            "無空氣。",
            "未接觸。",
            "電磁波傳能。"
          ],
          "reviewEvidence": "輻射交換：電磁波傳能；水流：無水；空氣對流：無空氣；接觸傳導：未接觸。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "因果"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_155_08",
          "stem": "靠火上方比側面更熱，除了輻射還因？",
          "options": [
            "熱空氣上升對流",
            "火焰上方較熱是因冷空氣受熱後向上沉降",
            "真空傳導",
            "質量消失"
          ],
          "answerIndex": 0,
          "rationales": [
            "上方有熱流體。",
            "冷空氣下沉。",
            "無真空。",
            "靠近火焰不會使物體質量消失；上方較熱與上升熱空氣有關。"
          ],
          "reviewEvidence": "熱空氣上升對流：上方有熱流體；火焰上方較熱是因冷空氣受熱後向上沉降：冷空氣下沉；真空傳導：無真空；質量消失：靠近火焰不會使物體質量消失；上方較熱與上升熱空氣有關。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "生活解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_155_09",
          "stem": "輻射淨熱流方向通常？",
          "options": [
            "只有單向放射",
            "低溫到高溫",
            "高溫到低溫",
            "由顏色決定方向"
          ],
          "answerIndex": 2,
          "rationales": [
            "兩邊都放。",
            "淨值相反。",
            "高溫放得更多。",
            "顏色影響量非基本方向。"
          ],
          "reviewEvidence": "高溫到低溫：高溫放得更多；只有單向放射：兩邊都放；低溫到高溫：淨值相反；由顏色決定方向：顏色影響量非基本方向。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "方向"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_155_10",
          "stem": "黑色表面吸收強是否表示任何情況都較熱？",
          "options": [
            "只在真空不吸收",
            "一定",
            "不一定，還受放射、對流與環境影響",
            "黑色沒有溫度"
          ],
          "answerIndex": 2,
          "rationales": [
            "真空仍吸收輻射。",
            "過度絕對。",
            "需能量平衡。",
            "有溫度。"
          ],
          "reviewEvidence": "不一定，還受放射、對流與環境影響：需能量平衡；只在真空不吸收：真空仍吸收輻射；一定：過度絕對；黑色沒有溫度：有溫度。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_155_11",
          "stem": "遮熱板能降低輻射因？",
          "options": [
            "反射或吸收後改變到達能量",
            "改變重力",
            "使熱由冷到熱",
            "消除所有粒子"
          ],
          "answerIndex": 0,
          "rationales": [
            "屏障改變輻射路徑。",
            "遮熱板攔截輻射路徑，並不是靠改變地球重力。",
            "不反轉。",
            "板材仍含粒子；降低輻射不需要把所有粒子消除。"
          ],
          "reviewEvidence": "反射或吸收後改變到達能量：屏障改變輻射路徑；改變重力：遮熱板攔截輻射路徑，並不是靠改變地球重力；使熱由冷到熱：不反轉；消除所有粒子：板材仍含粒子；降低輻射不需要把所有粒子消除。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "工程"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_155_12",
          "stem": "驗證輻射可過真空的關鍵比較？",
          "options": [
            "空氣與低壓條件仍有升溫",
            "只測空氣",
            "同時改變熱源溫度與距離即可驗證真空輻射",
            "只摸感覺"
          ],
          "answerIndex": 0,
          "rationales": [
            "低壓仍傳能支持輻射。",
            "無真空對照。",
            "多變因。",
            "不定量。"
          ],
          "reviewEvidence": "空氣與低壓條件仍有升溫：低壓仍傳能支持輻射；只測空氣：無真空對照；同時改變熱源溫度與距離即可驗證真空輻射：多變因；只摸感覺：不定量。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "設計"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_155_01",
          "stimulusId": "PHYCHM_R4_STIM_155",
          "stem": "乙在低壓仍升8°C支持？",
          "options": [
            "只有對流",
            "沒有傳熱",
            "低壓下仍升溫是感測器自行發熱，與輻射無關",
            "輻射可不靠空氣"
          ],
          "answerIndex": 3,
          "rationales": [
            "對流被削弱。",
            "有升溫。",
            "無此資料。",
            "低壓仍明顯升溫。"
          ],
          "reviewEvidence": "輻射可不靠空氣：低壓仍明顯升溫；只有對流：對流被削弱；沒有傳熱：有升溫；低壓下仍升溫是感測器自行發熱，與輻射無關：無此資料。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "證據"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_155_02",
          "stimulusId": "PHYCHM_R4_STIM_155",
          "stem": "丙比乙少6°C主要顯示？",
          "options": [
            "丙升溫較少表示低壓環境增加了空氣對流",
            "亮面屏降低輻射到達",
            "熱源變冷",
            "屏障產熱"
          ],
          "answerIndex": 1,
          "rationales": [
            "低壓相同。",
            "主要新增亮面屏。",
            "熱源固定。",
            "無證據。"
          ],
          "reviewEvidence": "亮面屏降低輻射到達：主要新增亮面屏；丙升溫較少表示低壓環境增加了空氣對流：低壓相同；熱源變冷：熱源固定；屏障產熱：無證據。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "對照"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_155_03",
          "stimulusId": "PHYCHM_R4_STIM_155",
          "stem": "甲比丁多升6°C可能包含哪項差異？",
          "options": [
            "透明板阻擋部分熱氣流",
            "丁熱源較遠",
            "甲在真空",
            "丁無輻射"
          ],
          "answerIndex": 0,
          "rationales": [
            "丁阻氣流。",
            "距離固定。",
            "甲為空氣。",
            "仍可有輻射。"
          ],
          "reviewEvidence": "透明板阻擋部分熱氣流：丁阻氣流；丁熱源較遠：距離固定；甲在真空：甲為空氣；丁無輻射：仍可有輻射。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "多機制"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S156",
      "title": "比較材料導熱快慢與隔熱用途",
      "authorityRefs": [
        "AUTH-NATURAL-LC-BB-4-1",
        "AUTH-NATURAL-LC-BB-4-3",
        "AUTH-NATURAL-LC-BB-4-4",
        "AUTH-NATURAL-LC-BB-4-5",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "curriculum": "十二年國教自然科學第四學習階段熱傳播與生活應用",
        "calibration": "臺灣國中教育會考自然科導熱、對流、輻射與保溫題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_156",
        "objective": "能由導熱實驗比較材料，在散熱與隔熱需求間選材，並考慮厚度、接觸、濕度及安全而不把低導熱誤解為永不升溫。",
        "sections": [
          {
            "title": "用途決定快慢需求",
            "body": "鍋底需要快速傳熱常選金屬；把手、建築保溫層需要較慢傳熱，常用木材、塑膠或困住空氣的多孔材料。材料沒有絕對好壞，只有是否適合任務。"
          },
          {
            "title": "厚度與結構同樣重要",
            "body": "同材質加厚通常增加熱阻，多層纖維困住空氣也能隔熱；若材料受潮，水取代空氣可能使傳熱變快。比較時應固定厚度、面積與溫差。"
          },
          {
            "title": "安全不能只看導熱",
            "body": "鍋具還需耐高溫、強度與食品安全；建材須考慮防火與耐久。低導熱塑膠若接觸超過耐熱溫度仍會變形。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_156_EX_01",
            "prompt": "鍋底與鍋柄分別選鋁和木材，理由？",
            "steps": [
              "鍋底需傳熱",
              "鍋柄需隔熱",
              "核對耐用性"
            ],
            "answer": "鋁導熱快，木材導熱慢。",
            "why": "鋁讓熱迅速進入食物，木柄降低手部短時間升溫；兩者功能不同。"
          },
          {
            "id": "PHYCHM_R4_L_156_EX_02",
            "prompt": "乾燥棉衣受潮後較不保暖，為何？",
            "steps": [
              "乾棉困住空氣",
              "水取代孔隙空氣",
              "熱流加快"
            ],
            "answer": "受潮提高有效傳熱。",
            "why": "靜止空氣導熱慢，孔隙進水後隔熱結構被破壞，身體熱較快流失。"
          },
          {
            "id": "PHYCHM_R4_L_156_EX_03",
            "prompt": "同材質隔熱板厚度加倍，通常有何效果？",
            "steps": [
              "傳熱路徑加長",
              "熱阻增加",
              "速率降低"
            ],
            "answer": "導熱速率降低。",
            "why": "相同面積與溫差下，熱需通過更長材料路徑，但並非完全停止。"
          }
        ],
        "misconceptions": [
          {
            "belief": "導熱慢的材料永遠不會變熱。",
            "whyWrong": "只是升溫較慢。",
            "correction": "長時間仍可接近平衡。"
          },
          {
            "belief": "鍋具全部用隔熱材料最好。",
            "whyWrong": "鍋底需要有效傳熱。",
            "correction": "不同部位依功能選材。"
          },
          {
            "belief": "相同材料不論厚度隔熱都一樣。",
            "whyWrong": "傳熱路徑會改變。",
            "correction": "比較時納入厚度。"
          },
          {
            "belief": "蓬鬆衣物靠纖維本身發熱。",
            "whyWrong": "主要是困住空氣降低熱流。",
            "correction": "說明結構隔熱。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_156",
        "title": "隔熱杯套測試",
        "body": "相同熱水杯包覆5 mm材料，10分鐘後外表面升溫。",
        "dataTable": {
          "columns": [
            "材料",
            "外表升溫/°C",
            "是否受潮"
          ],
          "rows": [
            [
              "軟木",
              "4",
              "否"
            ],
            [
              "棉布",
              "5",
              "否"
            ],
            [
              "棉布",
              "11",
              "是"
            ],
            [
              "鋁片",
              "24",
              "否"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_156_01",
          "stem": "鍋底需要何種材料？",
          "options": [
            "只要柔軟",
            "鍋底應使用完全不傳熱但能耐高溫的材料",
            "遇熱即熔",
            "導熱較快且耐熱"
          ],
          "answerIndex": 3,
          "rationales": [
            "非主要。",
            "無法烹煮。",
            "不安全。",
            "需把熱傳入食物。"
          ],
          "reviewEvidence": "導熱較快且耐熱：需把熱傳入食物；只要柔軟：非主要；鍋底應使用完全不傳熱但能耐高溫的材料：無法烹煮；遇熱即熔：不安全。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_156_02",
          "stem": "保溫層常利用什麼？",
          "options": [
            "提高導熱",
            "保溫層靠強迫水循環把熱量留在內部",
            "困住靜止空氣",
            "增加金屬橋"
          ],
          "answerIndex": 2,
          "rationales": [
            "保溫材料應降低熱傳，把提高導熱當成保溫機制正好顛倒作用。",
            "會增對流。",
            "空氣導熱慢。",
            "會加快。"
          ],
          "reviewEvidence": "困住靜止空氣：空氣導熱慢；提高導熱：保溫材料應降低熱傳，把提高導熱當成保溫機制正好顛倒作用；保溫層靠強迫水循環把熱量留在內部：會增對流；增加金屬橋：會加快。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "機制"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_156_03",
          "stem": "隔熱板加厚通常？",
          "options": [
            "隔熱板加厚會使熱傳方向由冷端反轉向熱端",
            "溫差消失",
            "提高傳導",
            "降低傳導速率"
          ],
          "answerIndex": 3,
          "rationales": [
            "方向仍高到低。",
            "仍有溫差。",
            "厚度增加會延長傳導路徑，通常降低而不是提高傳導速率。",
            "熱阻增。"
          ],
          "reviewEvidence": "降低傳導速率：熱阻增；隔熱板加厚會使熱傳方向由冷端反轉向熱端：方向仍高到低；溫差消失：仍有溫差；提高傳導：厚度增加會延長傳導路徑，通常降低而不是提高傳導速率。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_156_04",
          "stem": "在相同厚度、相同溫度且不考慮水分蒸發時，棉衣受潮後隔熱通常變差，主要原因為何？",
          "options": [
            "水分取代纖維間原本導熱較慢的靜止空氣",
            "水完全不能傳熱，因而把熱困在衣物外側",
            "棉纖維遇水後會轉變成導熱良好的金屬",
            "受潮會使衣物與其中水分的質量全部消失"
          ],
          "answerIndex": 0,
          "rationales": [
            "水的導熱能力高於靜止空氣，填入孔隙後增加有效熱傳。",
            "水可以傳導熱量，不能把受潮理解成形成絕熱真空。",
            "受潮是物理狀態改變，棉纖維不會轉化為金屬。",
            "衣物吸水後質量反而增加，不會歸零。"
          ],
          "reviewEvidence": "水分取代纖維間原本導熱較慢的靜止空氣：水的導熱能力高於靜止空氣，填入孔隙後增加有效熱傳；水完全不能傳熱，因而把熱困在衣物外側：水可以傳導熱量，不能把受潮理解成形成絕熱真空；棉纖維遇水後會轉變成導熱良好的金屬：受潮是物理狀態改變，棉纖維不會轉化為金屬；受潮會使衣物與其中水分的質量全部消失：衣物吸水後質量反而增加，不會歸零。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "生活解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_156_05",
          "stem": "同材質比較導熱需固定？",
          "options": [
            "厚度、面積與溫差",
            "終溫結果",
            "融化時間",
            "材料"
          ],
          "answerIndex": 0,
          "rationales": [
            "公平條件。",
            "是結果。",
            "是結果。",
            "若比材質則改變。"
          ],
          "reviewEvidence": "厚度、面積與溫差：公平條件；終溫結果：是結果；融化時間：是結果；材料：若比材質則改變。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "設計"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_156_06",
          "stem": "低導熱塑膠可直接接火嗎？",
          "options": [
            "可，塑膠沒有溫度",
            "可以，材料導熱慢就等於耐火而且不會燃燒",
            "不可，還須看耐熱與可燃性",
            "不可，因完全導電"
          ],
          "answerIndex": 2,
          "rationales": [
            "有溫度。",
            "概念不同。",
            "安全性另評估。",
            "非導電主因。"
          ],
          "reviewEvidence": "不可，還須看耐熱與可燃性：安全性另評估；可，塑膠沒有溫度：有溫度；可以，材料導熱慢就等於耐火而且不會燃燒：概念不同；不可，因完全導電：非導電主因。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "安全評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_156_07",
          "stem": "散熱片常用金屬因？",
          "options": [
            "散熱片用金屬是因金屬具有最佳隔熱效果",
            "金屬吸收冷量",
            "導熱快可把熱攤開",
            "不需空氣"
          ],
          "answerIndex": 2,
          "rationales": [
            "散熱片需要快速導開熱量；把金屬視為最佳隔熱材顛倒了設計目的。",
            "無冷量。",
            "利於傳至大面積。",
            "仍靠空氣散熱。"
          ],
          "reviewEvidence": "導熱快可把熱攤開：利於傳至大面積；散熱片用金屬是因金屬具有最佳隔熱效果：散熱片需要快速導開熱量；把金屬視為最佳隔熱材顛倒了設計目的；金屬吸收冷量：無冷量；不需空氣：仍靠空氣散熱。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_156_08",
          "stem": "熱橋是什麼風險？",
          "options": [
            "完全阻熱",
            "橋會產生熱",
            "只改顏色",
            "高導熱構件穿過隔熱層加快熱流"
          ],
          "answerIndex": 3,
          "rationales": [
            "熱橋是局部導熱較快的路徑，不是完全阻止熱傳的位置。",
            "不主動產熱。",
            "非顏色。",
            "形成低熱阻路徑。"
          ],
          "reviewEvidence": "高導熱構件穿過隔熱層加快熱流：形成低熱阻路徑；完全阻熱：熱橋是局部導熱較快的路徑，不是完全阻止熱傳的位置；橋會產生熱：不主動產熱；只改顏色：非顏色。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "工程分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_156_09",
          "stem": "低導熱材料長時間接觸熱源？",
          "options": [
            "仍可能升溫",
            "必變冷",
            "低導熱材料長時間受熱會失去全部質量",
            "永遠室溫"
          ],
          "answerIndex": 0,
          "rationales": [
            "熱流非零。",
            "無製冷。",
            "低導熱只表示升溫較慢，長時間受熱不會使材料質量全部消失。",
            "不保證。"
          ],
          "reviewEvidence": "仍可能升溫：熱流非零；必變冷：無製冷；低導熱材料長時間受熱會失去全部質量：低導熱只表示升溫較慢，長時間受熱不會使材料質量全部消失；永遠室溫：不保證。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "概念"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_156_10",
          "stem": "同厚度真空層與空氣層相比？",
          "options": [
            "真空層可同時完全阻斷所有形式的熱輻射",
            "真空更能抑制傳導對流",
            "必相同",
            "空氣無傳熱"
          ],
          "answerIndex": 1,
          "rationales": [
            "輻射仍有。",
            "介質更少。",
            "不同。",
            "空氣可傳。"
          ],
          "reviewEvidence": "真空更能抑制傳導對流：介質更少；真空層可同時完全阻斷所有形式的熱輻射：輻射仍有；必相同：不同；空氣無傳熱：空氣可傳。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "比較"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_156_11",
          "stem": "隔熱表現只用觸感評估的限制？",
          "options": [
            "材料無差異",
            "手溫、接觸與導熱會影響感受",
            "溫度無法量",
            "觸感是精密儀器"
          ],
          "answerIndex": 1,
          "rationales": [
            "可有差。",
            "需客觀感測。",
            "可用溫度計。",
            "觸感受導熱與接觸影響，不能當作經校正且可量化的精密儀器。"
          ],
          "reviewEvidence": "手溫、接觸與導熱會影響感受：需客觀感測；材料無差異：可有差；溫度無法量：可用溫度計；觸感是精密儀器：觸感受導熱與接觸影響，不能當作經校正且可量化的精密儀器。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "批判"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_156_12",
          "stem": "選建築隔熱材還需考慮？",
          "options": [
            "只看重量",
            "只有名稱",
            "防火、耐久與濕度",
            "只有顏色"
          ],
          "answerIndex": 2,
          "rationales": [
            "重量一項不能反映導熱、耐火、耐久與安全性，資料不足以選材。",
            "材料名稱沒有提供厚度、導熱係數或防火等級，不能單獨決定。",
            "實際安全條件。",
            "顏色可能影響輻射，但不能取代導熱、結構與耐火條件的評估。"
          ],
          "reviewEvidence": "防火、耐久與濕度：實際安全條件；只看重量：重量一項不能反映導熱、耐火、耐久與安全性，資料不足以選材；只有名稱：材料名稱沒有提供厚度、導熱係數或防火等級，不能單獨決定；只有顏色：顏色可能影響輻射，但不能取代導熱、結構與耐火條件的評估。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "評估"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_156_01",
          "stimulusId": "PHYCHM_R4_STIM_156",
          "stem": "乾燥材料隔熱最佳？",
          "options": [
            "相同",
            "軟木",
            "棉布",
            "鋁片"
          ],
          "answerIndex": 1,
          "rationales": [
            "不同。",
            "外升溫最低4°C。",
            "5°C。",
            "24°C。"
          ],
          "reviewEvidence": "軟木：外升溫最低4°C；相同：不同；棉布：5°C；鋁片：24°C。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "表格"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_156_02",
          "stimulusId": "PHYCHM_R4_STIM_156",
          "stem": "棉布受潮後外升溫增加多少？",
          "options": [
            "6°C",
            "16°C",
            "11°C",
            "5°C"
          ],
          "answerIndex": 0,
          "rationales": [
            "11－5＝6。",
            "誤加。",
            "是終值。",
            "是乾值。"
          ],
          "reviewEvidence": "6°C：11－5＝6；16°C：誤加；11°C：是終值；5°C：是乾值。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_156_03",
          "stimulusId": "PHYCHM_R4_STIM_156",
          "stem": "能否只由此表斷言軟木任何厚度都最佳？",
          "options": [
            "能，已測所有條件",
            "不能，只測5 mm與特定時間",
            "不能，因無數據",
            "能，厚度無影響"
          ],
          "answerIndex": 1,
          "rationales": [
            "表格只測一種厚度與指定材料，不能代表軟木在所有厚度都最佳。",
            "結論有限定。",
            "已有數據。",
            "厚度會影響。"
          ],
          "reviewEvidence": "不能，只測5 mm與特定時間：結論有限定；能，已測所有條件：表格只測一種厚度與指定材料，不能代表軟木在所有厚度都最佳；不能，因無數據：已有數據；能，厚度無影響：厚度會影響。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "限制"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S157",
      "title": "分析保溫容器同時抑制三種傳熱",
      "authorityRefs": [
        "AUTH-NATURAL-LC-BB-4-1",
        "AUTH-NATURAL-LC-BB-4-3",
        "AUTH-NATURAL-LC-BB-4-4",
        "AUTH-NATURAL-LC-BB-4-5",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "curriculum": "十二年國教自然科學第四學習階段熱傳播與生活應用",
        "calibration": "臺灣國中教育會考自然科導熱、對流、輻射與保溫題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_157",
        "objective": "能把真空夾層、低放射表面、絕熱塞與狹窄瓶口分別連結傳導、對流、輻射，並由結構缺陷預測保溫下降。",
        "sections": [
          {
            "title": "夾層削弱介質傳熱",
            "body": "雙層瓶間抽成低壓，可大幅減少氣體傳導和對流；瓶壁支撐點仍有固體傳導，所以設計會縮小接觸面。"
          },
          {
            "title": "亮面處理輻射",
            "body": "內外壁的亮面或低放射塗層反射紅外，減少跨夾層的輻射。真空本身不能阻斷輻射，因此兩種設計需配合。"
          },
          {
            "title": "瓶口是常見弱點",
            "body": "絕熱塞、密封與狹窄瓶口降低空氣交換、蒸發和固體傳導。開蓋越久，暖空氣逸出或冷空氣進入，保溫效果越差。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_157_EX_01",
            "prompt": "真空夾層主要減少哪兩種熱傳？",
            "steps": [
              "移除氣體",
              "傳導介質變少",
              "對流無法形成"
            ],
            "answer": "氣體傳導與對流。",
            "why": "夾層內物質很少，粒子碰撞與流體循環都被抑制，但輻射仍可穿越。"
          },
          {
            "id": "PHYCHM_R4_L_157_EX_02",
            "prompt": "真空瓶鍍銀的必要性？",
            "steps": [
              "確認輻射仍存在",
              "亮面反射紅外",
              "降低淨交換"
            ],
            "answer": "減少熱輻射。",
            "why": "低放射亮面補足真空無法處理的電磁輻射路徑。"
          },
          {
            "id": "PHYCHM_R4_L_157_EX_03",
            "prompt": "瓶塞未鎖緊，熱飲為何冷得快？",
            "steps": [
              "瓶口空氣交換",
              "蒸氣逸散",
              "對流蒸發增強"
            ],
            "answer": "瓶口的對流與蒸發增加。",
            "why": "開口破壞密封，熱空氣和水蒸氣離開，外界冷空氣補入。"
          }
        ],
        "misconceptions": [
          {
            "belief": "真空可阻斷所有熱傳。",
            "whyWrong": "輻射仍能穿越。",
            "correction": "搭配亮面降低輻射。"
          },
          {
            "belief": "保溫瓶會主動加熱飲料。",
            "whyWrong": "它只降低能量交換速率。",
            "correction": "飲料仍趨向環境溫度。"
          },
          {
            "belief": "瓶口大小不影響保溫。",
            "whyWrong": "開口影響對流與蒸發。",
            "correction": "縮小並密封瓶口。"
          },
          {
            "belief": "外殼摸不熱就證明內部溫度不變。",
            "whyWrong": "只表示外表熱流較小。",
            "correction": "直接量內液溫度。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_157",
        "title": "保溫瓶構造拆解",
        "body": "四個樣品裝入同量80°C水，1小時後量溫。",
        "dataTable": {
          "columns": [
            "樣品",
            "夾層",
            "表面",
            "瓶塞",
            "終溫/°C"
          ],
          "rows": [
            [
              "甲",
              "真空",
              "亮面",
              "密封",
              "72"
            ],
            [
              "乙",
              "空氣",
              "亮面",
              "密封",
              "64"
            ],
            [
              "丙",
              "真空",
              "暗面",
              "密封",
              "67"
            ],
            [
              "丁",
              "真空",
              "亮面",
              "鬆開",
              "59"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_157_01",
          "stem": "真空夾層抑制？",
          "options": [
            "傳導與對流",
            "真空夾層可以把所有熱輻射完全阻斷",
            "溫度",
            "質量"
          ],
          "answerIndex": 0,
          "rationales": [
            "缺介質。",
            "輻射仍在。",
            "不消除。",
            "不消除。"
          ],
          "reviewEvidence": "傳導與對流：缺介質；真空夾層可以把所有熱輻射完全阻斷：輻射仍在；溫度：不消除；質量：不消除。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_157_02",
          "stem": "亮面內壁抑制？",
          "options": [
            "比熱",
            "液體質量",
            "重力",
            "輻射"
          ],
          "answerIndex": 3,
          "rationales": [
            "不改。",
            "不改。",
            "不改。",
            "反射紅外。"
          ],
          "reviewEvidence": "輻射：反射紅外；比熱：不改；液體質量：不改；重力：不改。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "配對"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_157_03",
          "stem": "密封瓶塞主要減少？",
          "options": [
            "密封瓶塞主要用來阻止瓶身內所有固體傳導",
            "瓶重",
            "水比熱",
            "空氣交換與蒸發"
          ],
          "answerIndex": 3,
          "rationales": [
            "塞仍接觸。",
            "非目的。",
            "不改。",
            "封住瓶口。"
          ],
          "reviewEvidence": "空氣交換與蒸發：封住瓶口；密封瓶塞主要用來阻止瓶身內所有固體傳導：塞仍接觸；瓶重：非目的；水比熱：不改。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "配對"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_157_04",
          "stem": "保溫瓶最終仍接近室溫因？",
          "options": [
            "會製冷",
            "各路徑熱流只能降低不能全消除",
            "真空漏光",
            "水無能量"
          ],
          "answerIndex": 1,
          "rationales": [
            "不製冷。",
            "實際熱阻有限。",
            "非核心。",
            "水有能量。"
          ],
          "reviewEvidence": "各路徑熱流只能降低不能全消除：實際熱阻有限；會製冷：不製冷；真空漏光：非核心；水無能量：水有能量。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "概念"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_157_05",
          "stem": "裝冷飲時保溫瓶作用？",
          "options": [
            "減少外界熱進入",
            "裝冷飲時保溫瓶會把冷量主動送到外界",
            "主動降溫",
            "增加對流"
          ],
          "answerIndex": 0,
          "rationales": [
            "降低熱交換。",
            "無冷量。",
            "無製冷機。",
            "增加對流會加快外界熱進入冷飲，與保溫瓶降低熱交換的作用相反。"
          ],
          "reviewEvidence": "減少外界熱進入：降低熱交換；裝冷飲時保溫瓶會把冷量主動送到外界：無冷量；主動降溫：無製冷機；增加對流：增加對流會加快外界熱進入冷飲，與保溫瓶降低熱交換的作用相反。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "遷移"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_157_06",
          "stem": "縮小瓶頸主要降低？",
          "options": [
            "縮小瓶頸主要是為了降低熱輻射的傳播速度",
            "對流與蒸發通道",
            "液體比熱",
            "重力"
          ],
          "answerIndex": 1,
          "rationales": [
            "不改波速。",
            "開口面積小。",
            "不改。",
            "不改。"
          ],
          "reviewEvidence": "對流與蒸發通道：開口面積小；縮小瓶頸主要是為了降低熱輻射的傳播速度：不改波速；液體比熱：不改；重力：不改。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "工程"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_157_07",
          "stem": "支撐點做細長是為？",
          "options": [
            "把支撐點做細長是為了增大固體傳熱橋",
            "提高輻射",
            "減少固體傳導",
            "增加對流"
          ],
          "answerIndex": 2,
          "rationales": [
            "細長支撐是縮小截面並拉長路徑，會減少而非增大固體熱橋。",
            "非目的。",
            "截面小路徑長。",
            "固體不對流。"
          ],
          "reviewEvidence": "減少固體傳導：截面小路徑長；把支撐點做細長是為了增大固體傳熱橋：細長支撐是縮小截面並拉長路徑，會減少而非增大固體熱橋；提高輻射：非目的；增加對流：固體不對流。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "結構分析"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_157_08",
          "stem": "頻繁開蓋會？",
          "options": [
            "使熱流為零",
            "降低空氣交換",
            "使保溫變差",
            "提高真空度"
          ],
          "answerIndex": 2,
          "rationales": [
            "開蓋造成溫差下的空氣交換，熱流不會因此變成零。",
            "頻繁開蓋會增加而不是降低瓶內外空氣交換。",
            "增加交換。",
            "開蓋讓空氣進入瓶口，不能提高密封夾層的真空度。"
          ],
          "reviewEvidence": "使保溫變差：增加交換；使熱流為零：開蓋造成溫差下的空氣交換，熱流不會因此變成零；降低空氣交換：頻繁開蓋會增加而不是降低瓶內外空氣交換；提高真空度：開蓋讓空氣進入瓶口，不能提高密封夾層的真空度。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "生活"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_157_09",
          "stem": "瓶外包厚泡棉主要？",
          "options": [
            "讓空氣快速流",
            "增加傳導熱阻",
            "取消瓶塞",
            "增加金屬橋"
          ],
          "answerIndex": 1,
          "rationales": [
            "泡棉困氣。",
            "低導熱且加厚。",
            "不相關。",
            "增加金屬橋會加強傳導，與泡棉降低外壁熱交換的作用相反。"
          ],
          "reviewEvidence": "增加傳導熱阻：低導熱且加厚；讓空氣快速流：泡棉困氣；取消瓶塞：不相關；增加金屬橋：增加金屬橋會加強傳導，與泡棉降低外壁熱交換的作用相反。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_157_10",
          "stem": "真空失效進入空氣，哪兩路徑增強？",
          "options": [
            "傳導與對流",
            "相變與化學反應",
            "沒有",
            "只輻射"
          ],
          "answerIndex": 0,
          "rationales": [
            "氣體回到夾層。",
            "非必然。",
            "會改變。",
            "輻射原已有。"
          ],
          "reviewEvidence": "傳導與對流：氣體回到夾層；相變與化學反應：非必然；沒有：會改變；只輻射：輻射原已有。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "診斷"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_157_11",
          "stem": "比較瓶子保溫須固定？",
          "options": [
            "終溫",
            "瓶型差異全部",
            "保溫效果",
            "水量、初溫、時間與環境"
          ],
          "answerIndex": 3,
          "rationales": [
            "是結果。",
            "結構是自變項。",
            "是結果。",
            "公平測試。"
          ],
          "reviewEvidence": "水量、初溫、時間與環境：公平測試；終溫：是結果；瓶型差異全部：結構是自變項；保溫效果：是結果。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "設計"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_157_12",
          "stem": "只量外殼溫度的限制？",
          "options": [
            "外殼無溫度",
            "不能直接得知內液體保溫程度",
            "溫度計不能使用",
            "可完全取代內溫"
          ],
          "answerIndex": 1,
          "rationales": [
            "有溫度。",
            "需量內容物。",
            "可使用。",
            "不能。"
          ],
          "reviewEvidence": "不能直接得知內液體保溫程度：需量內容物；外殼無溫度：有溫度；溫度計不能使用：可使用；可完全取代內溫：不能。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "評估"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_157_01",
          "stimulusId": "PHYCHM_R4_STIM_157",
          "stem": "保溫最佳樣品？",
          "options": [
            "丁",
            "乙",
            "甲",
            "丙"
          ],
          "answerIndex": 2,
          "rationales": [
            "59。",
            "64。",
            "終溫最高72°C。",
            "67。"
          ],
          "reviewEvidence": "甲：1小時後仍有72°C，是四瓶最高終溫，表示保留熱量最多；丁：59°C；乙：64°C；丙：67°C，三者均低於甲。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "表格"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_157_02",
          "stimulusId": "PHYCHM_R4_STIM_157",
          "stem": "甲丙比較顯示亮面作用？",
          "options": [
            "增加對流",
            "鬆開瓶塞",
            "降低真空",
            "減少輻射使終溫高5°C"
          ],
          "answerIndex": 3,
          "rationales": [
            "夾層真空。",
            "皆密封。",
            "同真空。",
            "只差表面。"
          ],
          "reviewEvidence": "減少輻射使終溫高5°C：只差表面；增加對流：夾層真空；鬆開瓶塞：皆密封；降低真空：同真空。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "對照"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_157_03",
          "stimulusId": "PHYCHM_R4_STIM_157",
          "stem": "丁最差主要凸顯？",
          "options": [
            "初溫較低",
            "亮面無效",
            "瓶塞密封的重要性",
            "丁瓶最差表示真空層一定會主動加熱內容物"
          ],
          "answerIndex": 2,
          "rationales": [
            "初溫同。",
            "仍有亮面。",
            "只把瓶塞鬆開。",
            "真空不加熱。"
          ],
          "reviewEvidence": "瓶塞密封的重要性：只把瓶塞鬆開；初溫較低：初溫同；亮面無效：仍有亮面；丁瓶最差表示真空層一定會主動加熱內容物：真空不加熱。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "因果"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S158",
      "title": "由顏色、表面與溫度判斷輻射差異",
      "authorityRefs": [
        "AUTH-NATURAL-LC-BB-4-1",
        "AUTH-NATURAL-LC-BB-4-3",
        "AUTH-NATURAL-LC-BB-4-4",
        "AUTH-NATURAL-LC-BB-4-5",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "curriculum": "十二年國教自然科學第四學習階段熱傳播與生活應用",
        "calibration": "臺灣國中教育會考自然科導熱、對流、輻射與保溫題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_158",
        "objective": "能在相同條件下比較暗色粗面與亮色光面的輻射吸收、放射，並用溫度、照射強度及表面狀態限制結論。",
        "sections": [
          {
            "title": "暗面常較善吸收",
            "body": "相同材料與照射下，暗色、無光澤表面常吸收較多入射輻射；亮色或金屬光澤面反射較多。這是表面效應，不代表暗色物體在任何環境永遠較熱。"
          },
          {
            "title": "善吸收者也常善放射",
            "body": "同溫同面積時，良好吸收面通常也是良好放射面。白天日照下吸收可能主導，夜間無日照時放射冷卻差異可呈現另一結果。"
          },
          {
            "title": "公平測試要控制",
            "body": "比較罐子升溫需固定材質、體積、初溫、距離和光源；比較冷卻則固定起始溫度與環境。顏料厚度或風速不同會混淆結論。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_158_EX_01",
            "prompt": "黑霧面與銀亮面同時照燈，黑面升溫快，何解？",
            "steps": [
              "光源距離相同",
              "比較反射與吸收",
              "追蹤淨吸熱"
            ],
            "answer": "黑霧面吸收較多輻射。",
            "why": "銀亮面反射較多入射能量，黑霧面淨吸收較大，因此在其他條件相同時升溫較快。"
          },
          {
            "id": "PHYCHM_R4_L_158_EX_02",
            "prompt": "同溫熱水裝在黑罐和亮罐，黑罐冷得快，為何不矛盾？",
            "steps": [
              "取消外部照射",
              "比較放射能力",
              "判斷淨放熱"
            ],
            "answer": "黑面通常也較善放射。",
            "why": "沒有強光輸入時，表面向較冷環境放射的能力主導，良好吸收面也常較有效放射。"
          },
          {
            "id": "PHYCHM_R4_L_158_EX_03",
            "prompt": "黑衣在陰涼強風處是否一定比白衣熱？",
            "steps": [
              "辨認無強日照",
              "加入對流蒸發",
              "拒絕絕對結論"
            ],
            "answer": "不一定。",
            "why": "顏色主要影響輻射，強風造成的對流與汗液蒸發也會影響體感，需看完整條件。"
          }
        ],
        "misconceptions": [
          {
            "belief": "黑色物體在任何情況都較熱。",
            "whyWrong": "溫度由吸收、放射與其他熱傳共同決定。",
            "correction": "限定照射與環境條件。"
          },
          {
            "belief": "亮面完全不吸收輻射。",
            "whyWrong": "只是相對反射較多。",
            "correction": "用程度而非絕對描述。"
          },
          {
            "belief": "吸收強的表面放射一定弱。",
            "whyWrong": "良好吸收面通常也善放射。",
            "correction": "分情境比較淨交換。"
          },
          {
            "belief": "顏色實驗不用控制材質。",
            "whyWrong": "材質與厚度也影響升溫。",
            "correction": "只改表面處理。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_158",
        "title": "四罐燈照升溫",
        "body": "同材質同水量罐，距燈相同，照射10分鐘。",
        "dataTable": {
          "columns": [
            "表面",
            "初溫/°C",
            "終溫/°C"
          ],
          "rows": [
            [
              "黑霧面",
              "25",
              "42"
            ],
            [
              "白霧面",
              "25",
              "35"
            ],
            [
              "銀亮面",
              "25",
              "31"
            ],
            [
              "黑亮面",
              "25",
              "38"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_158_01",
          "stem": "日照下暗色表面常？",
          "options": [
            "吸收較多輻射",
            "暗色表面會把照射到的輻射全部反射",
            "停止傳熱",
            "沒有溫度"
          ],
          "answerIndex": 0,
          "rationales": [
            "相對吸收強。",
            "不完全。",
            "仍傳熱。",
            "有溫度。"
          ],
          "reviewEvidence": "吸收較多輻射：相對吸收強；暗色表面會把照射到的輻射全部反射：不完全；停止傳熱：仍傳熱；沒有溫度：有溫度。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "概念"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_158_02",
          "stem": "銀亮面常用隔熱因？",
          "options": [
            "阻斷所有傳導",
            "比熱為零",
            "產生冷量",
            "反射較多輻射"
          ],
          "answerIndex": 3,
          "rationales": [
            "非全部。",
            "不為零。",
            "無冷量。",
            "低吸收低放射。"
          ],
          "reviewEvidence": "反射較多輻射：低吸收低放射；阻斷所有傳導：非全部；比熱為零：不為零；產生冷量：無冷量。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_158_03",
          "stem": "良好吸收面通常放射能力？",
          "options": [
            "必為零",
            "只在水中存在",
            "也較強",
            "與溫度無關"
          ],
          "answerIndex": 2,
          "rationales": [
            "良好吸收面依熱輻射互易關係通常也是良好放射面，放射能力不為零。",
            "非限定。",
            "表面性質相應。",
            "放射量受溫度。"
          ],
          "reviewEvidence": "也較強：表面性質相應；必為零：良好吸收面依熱輻射互易關係通常也是良好放射面，放射能力不為零；只在水中存在：非限定；與溫度無關：放射量受溫度。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "概念"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_158_04",
          "stem": "公平比顏色吸熱須固定？",
          "options": [
            "吸熱量",
            "終溫",
            "材質、面積、距離與初溫",
            "顏色"
          ],
          "answerIndex": 2,
          "rationales": [
            "是結果。",
            "是結果。",
            "隔離顏色。",
            "是自變項。"
          ],
          "reviewEvidence": "材質、面積、距離與初溫：隔離顏色；吸熱量：是結果；終溫：是結果；顏色：是自變項。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "設計"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_158_05",
          "stem": "夜間黑罐可能冷得較快因？",
          "options": [
            "沒有粒子",
            "放射較強",
            "吸收日光",
            "質量消失"
          ],
          "answerIndex": 1,
          "rationales": [
            "有粒子。",
            "向冷環境放熱。",
            "夜間無日照。",
            "夜間冷卻是能量以輻射散失，不代表罐子的質量消失。"
          ],
          "reviewEvidence": "放射較強：向冷環境放熱；沒有粒子：有粒子；吸收日光：夜間無日照；質量消失：夜間冷卻是能量以輻射散失，不代表罐子的質量消失。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_158_06",
          "stem": "黑亮與黑霧面差異顯示還要看？",
          "options": [
            "黑亮與黑霧面不同只表示兩罐質量必不相同",
            "重力",
            "只有名稱",
            "光澤與粗糙度"
          ],
          "answerIndex": 3,
          "rationales": [
            "可同質量。",
            "重力在兩罐實驗中相同，不能解釋黑亮面與黑霧面的差異。",
            "只看名稱沒有表面光澤與粗糙度資料，無法解釋輻射差異。",
            "表面反射不同。"
          ],
          "reviewEvidence": "光澤與粗糙度：表面反射不同；黑亮與黑霧面不同只表示兩罐質量必不相同：可同質量；重力：重力在兩罐實驗中相同，不能解釋黑亮面與黑霧面的差異；只有名稱：只看名稱沒有表面光澤與粗糙度資料，無法解釋輻射差異。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "比較"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_158_07",
          "stem": "白衣一定比黑衣涼嗎？",
          "options": [
            "白色主動製冷",
            "黑色沒有散熱",
            "不一定，風、濕度與材質也影響",
            "一定"
          ],
          "answerIndex": 2,
          "rationales": [
            "不製冷。",
            "仍散熱。",
            "總熱平衡多因素。",
            "過度絕對。"
          ],
          "reviewEvidence": "不一定，風、濕度與材質也影響：總熱平衡多因素；白色主動製冷：不製冷；黑色沒有散熱：仍散熱；一定：過度絕對。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "評估"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_158_08",
          "stem": "表面溫度升高通常使放射？",
          "options": [
            "減弱到零",
            "增強",
            "方向必反",
            "無變化"
          ],
          "answerIndex": 1,
          "rationales": [
            "表面升溫通常提高熱輻射功率，不會使放射減弱到零。",
            "高溫放射較強。",
            "淨方向仍看環境。",
            "會變。"
          ],
          "reviewEvidence": "增強：高溫放射較強；減弱到零：表面升溫通常提高熱輻射功率，不會使放射減弱到零；方向必反：淨方向仍看環境；無變化：會變。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_158_09",
          "stem": "光譜不同的燈照射，能直接沿用結果嗎？",
          "options": [
            "未必，表面吸收會隨波長變",
            "光譜無能量",
            "顏色不存在",
            "一定"
          ],
          "answerIndex": 0,
          "rationales": [
            "吸收具波長差異。",
            "光有能量。",
            "存在。",
            "需測試。"
          ],
          "reviewEvidence": "未必，表面吸收會隨波長變：吸收具波長差異；光譜無能量：光有能量；顏色不存在：存在；一定：需測試。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "批判"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_158_10",
          "stem": "只摸罐子判溫度限制？",
          "options": [
            "手是完美溫度計，觸感不受接觸或導熱影響",
            "不能碰任何固體",
            "罐無溫度",
            "觸感受導熱與接觸影響"
          ],
          "answerIndex": 3,
          "rationales": [
            "手的熱流感受受材質導熱與接觸狀況影響，不能視為完美溫度計。",
            "過度。",
            "有溫度。",
            "需用感測器。"
          ],
          "reviewEvidence": "觸感受導熱與接觸影響：需用感測器；手是完美溫度計，觸感不受接觸或導熱影響：手的熱流感受受材質導熱與接觸狀況影響，不能視為完美溫度計；不能碰任何固體：過度；罐無溫度：有溫度。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "方法"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_158_11",
          "stem": "太空船外覆反射膜主要？",
          "options": [
            "產生氧氣",
            "太空船反射膜用來增加外部空氣的自然對流",
            "讓真空傳導",
            "控制輻射熱交換"
          ],
          "answerIndex": 3,
          "rationales": [
            "非用途。",
            "無空氣。",
            "真空傳導弱。",
            "太空以輻射為主。"
          ],
          "reviewEvidence": "控制輻射熱交換：太空以輻射為主；產生氧氣：非用途；太空船反射膜用來增加外部空氣的自然對流：無空氣；讓真空傳導：真空傳導弱。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_158_12",
          "stem": "結論『黑面吸熱較多』應限定？",
          "options": [
            "所有宇宙情境",
            "本光源、距離與表面條件",
            "只有質量",
            "無需條件"
          ],
          "answerIndex": 1,
          "rationales": [
            "外推過度。",
            "證據範圍。",
            "質量不是唯一限制；結論還須限定照射、距離、表面與環境條件。",
            "不科學。"
          ],
          "reviewEvidence": "本光源、距離與表面條件：證據範圍；所有宇宙情境：外推過度；只有質量：質量不是唯一限制；結論還須限定照射、距離、表面與環境條件；無需條件：不科學。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "表述"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_158_01",
          "stimulusId": "PHYCHM_R4_STIM_158",
          "stem": "升溫最多者？",
          "options": [
            "黑霧面",
            "黑亮面",
            "白霧面",
            "銀亮面"
          ],
          "answerIndex": 0,
          "rationales": [
            "升17°C。",
            "13°C。",
            "10°C。",
            "6°C。"
          ],
          "reviewEvidence": "黑霧面：升17°C；黑亮面：13°C；白霧面：10°C；銀亮面：6°C。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_158_02",
          "stimulusId": "PHYCHM_R4_STIM_158",
          "stem": "同為黑色，霧面比亮面多升？",
          "options": [
            "13°C",
            "7°C",
            "4°C",
            "17°C"
          ],
          "answerIndex": 2,
          "rationales": [
            "亮面總升。",
            "誤差。",
            "17－13＝4。",
            "霧面總升。"
          ],
          "reviewEvidence": "4°C：17－13＝4；13°C：亮面總升；7°C：誤差；17°C：霧面總升。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "差值"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_158_03",
          "stimulusId": "PHYCHM_R4_STIM_158",
          "stem": "資料最支持何結論？",
          "options": [
            "本條件下顏色與光澤都影響吸熱",
            "白面不放射",
            "銀面不吸收任何能量",
            "任何黑物永遠42°C"
          ],
          "answerIndex": 0,
          "rationales": [
            "黑霧與黑亮、各色皆不同。",
            "未測放射。",
            "仍升6°C。",
            "外推錯。"
          ],
          "reviewEvidence": "本條件下顏色與光澤都影響吸熱：黑霧與黑亮、各色皆不同；白面不放射：未測放射；銀面不吸收任何能量：仍升6°C；任何黑物永遠42°C：外推錯。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "綜合"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S159",
      "title": "解釋海陸風等生活對流現象",
      "authorityRefs": [
        "AUTH-NATURAL-LC-BB-4-1",
        "AUTH-NATURAL-LC-BB-4-3",
        "AUTH-NATURAL-LC-BB-4-4",
        "AUTH-NATURAL-LC-BB-4-5",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "curriculum": "十二年國教自然科學第四學習階段熱傳播與生活應用",
        "calibration": "臺灣國中教育會考自然科導熱、對流、輻射與保溫題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_159",
        "objective": "能由海陸比熱差、地表升降溫與氣壓差說明白天海風、夜間陸風的近地面方向，並知道季風與實際天氣還受更大尺度因素影響。",
        "sections": [
          {
            "title": "白天地面升溫快",
            "body": "白天陸地比海水升溫快，陸地上方空氣受熱上升，近地面氣壓相對較低，較冷海面空氣流向陸地，形成海風。"
          },
          {
            "title": "夜間方向可反轉",
            "body": "夜間陸地降溫較快，海面相對溫暖，海上空氣上升，近地面風由較冷陸地吹向海面，稱陸風。高空有回流完成環流。"
          },
          {
            "title": "模型有尺度限制",
            "body": "海陸風是局地日循環；季風還受季節、地形與大尺度氣壓系統影響。觀察單日風向若受颱風或鋒面控制，不能硬套海陸風。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_159_EX_01",
            "prompt": "晴朗白天下午海岸近地面風常從哪吹？",
            "steps": [
              "陸地升溫快",
              "陸上空氣上升",
              "海上冷空氣補入"
            ],
            "answer": "由海吹向陸。",
            "why": "陸地形成相對低壓，海面較冷空氣沿近地面流向陸地。"
          },
          {
            "id": "PHYCHM_R4_L_159_EX_02",
            "prompt": "夜間漁船可能利用哪個局地風向離岸？",
            "steps": [
              "陸地冷卻快",
              "海面相對暖",
              "近地面陸到海"
            ],
            "answer": "陸風。",
            "why": "夜間海上空氣較暖上升，陸地較冷空氣向海面補入。"
          },
          {
            "id": "PHYCHM_R4_L_159_EX_03",
            "prompt": "颱風天觀測到與海風相反，能否否定海陸比熱模型？",
            "steps": [
              "辨認大尺度天氣",
              "比較作用強度",
              "限制模型情境"
            ],
            "answer": "不能。",
            "why": "颱風環流可能遠強於局地海陸溫差，模型適用於背景風較弱的典型情境。"
          }
        ],
        "misconceptions": [
          {
            "belief": "海風是從陸地吹向海。",
            "whyWrong": "名稱依來源，海風來自海面。",
            "correction": "白天近地面海到陸。"
          },
          {
            "belief": "夜間海水一定比白天更熱。",
            "whyWrong": "比較的是海陸相對溫度。",
            "correction": "夜間陸地降溫較快。"
          },
          {
            "belief": "海陸風只因水會流動。",
            "whyWrong": "核心是比熱差造成地表溫差與氣壓差。",
            "correction": "連結受熱、密度與對流。"
          },
          {
            "belief": "任何海岸風都只由海陸風決定。",
            "whyWrong": "天氣系統與地形也會主導。",
            "correction": "先檢查背景風場。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_159",
        "title": "海岸一日觀測",
        "body": "晴朗且背景風弱，測站記錄海陸溫度與近地面風。",
        "dataTable": {
          "columns": [
            "時刻",
            "陸地/°C",
            "海面/°C",
            "風向"
          ],
          "rows": [
            [
              "06:00",
              "20",
              "22",
              "陸→海"
            ],
            [
              "14:00",
              "32",
              "25",
              "海→陸"
            ],
            [
              "20:00",
              "24",
              "25",
              "陸→海"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_159_01",
          "stem": "白天海風近地面方向？",
          "options": [
            "垂直向下",
            "無固定定義",
            "陸到海",
            "海到陸"
          ],
          "answerIndex": 3,
          "rationales": [
            "非近地水平風。",
            "有定義。",
            "是陸風。",
            "海風源自海。"
          ],
          "reviewEvidence": "海到陸：海風源自海；垂直向下：非近地水平風；無固定定義：有定義；陸到海：是陸風。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_159_02",
          "stem": "白天陸地上空空氣上升因？",
          "options": [
            "冷空氣上升",
            "重力消失",
            "陸地升溫快使空氣受熱密度降",
            "海水比熱小"
          ],
          "answerIndex": 2,
          "rationales": [
            "冷空氣較密。",
            "仍有重力。",
            "形成對流。",
            "海水比熱較大。"
          ],
          "reviewEvidence": "陸地升溫快使空氣受熱密度降：形成對流；冷空氣上升：冷空氣較密；重力消失：仍有重力；海水比熱小：海水比熱較大。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "解釋"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_159_03",
          "stem": "夜間陸風方向？",
          "options": [
            "無空氣",
            "陸到海",
            "只向上",
            "海到陸"
          ],
          "answerIndex": 1,
          "rationales": [
            "有空氣。",
            "陸地較冷。",
            "近地面有水平流。",
            "是海風。"
          ],
          "reviewEvidence": "陸到海：陸地較冷；無空氣：有空氣；只向上：近地面有水平流；海到陸：是海風。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_159_04",
          "stem": "海水日溫變較小主要因？",
          "options": [
            "比熱較大並可混合",
            "海水日溫變小是因海水溫度永遠固定25°C",
            "沒有吸熱",
            "質量為零"
          ],
          "answerIndex": 0,
          "rationales": [
            "熱容量與流動緩衝。",
            "會變。",
            "會吸熱。",
            "不為零。"
          ],
          "reviewEvidence": "比熱較大並可混合：熱容量與流動緩衝；海水日溫變小是因海水溫度永遠固定25°C：會變；沒有吸熱：會吸熱；質量為零：不為零。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "因果"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_159_05",
          "stem": "白天陸地近地面氣壓相對？",
          "options": [
            "較高",
            "與溫度無關",
            "必為零",
            "較低"
          ],
          "answerIndex": 3,
          "rationales": [
            "白天陸地較熱使近地空氣上升，近地面氣壓相對較低而非較高。",
            "有關。",
            "不為零。",
            "暖空氣上升。"
          ],
          "reviewEvidence": "較低：暖空氣上升；較高：白天陸地較熱使近地空氣上升，近地面氣壓相對較低而非較高；與溫度無關：有關；必為零：不為零。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "推論"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_159_06",
          "stem": "高空回流白天通常？",
          "options": [
            "陸到海",
            "無回流",
            "海到陸",
            "只向地底"
          ],
          "answerIndex": 0,
          "rationales": [
            "完成環流。",
            "質量守恆需回流。",
            "近地面方向。",
            "海陸風環流的高空回流在空中進行，不會只向地底移動。"
          ],
          "reviewEvidence": "陸到海：完成環流；無回流：質量守恆需回流；海到陸：近地面方向；只向地底：海陸風環流的高空回流在空中進行，不會只向地底移動。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "空間推理"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_159_07",
          "stem": "陰雨日海陸風可能較弱因？",
          "options": [
            "陰雨時海陸風變弱是因兩者比熱都降為零",
            "海陸溫差較小",
            "空氣消失",
            "沒有重力"
          ],
          "answerIndex": 1,
          "rationales": [
            "陰雨不會讓海水與陸地比熱歸零；主要是日照減弱使溫差縮小。",
            "驅動差減弱。",
            "陰雨時空氣仍存在，海陸風減弱不能用空氣消失解釋。",
            "地表仍有重力；題述變弱來自溫差較小，不是無重力。"
          ],
          "reviewEvidence": "海陸溫差較小：驅動差減弱；陰雨時海陸風變弱是因兩者比熱都降為零：陰雨不會讓海水與陸地比熱歸零；主要是日照減弱使溫差縮小；空氣消失：陰雨時空氣仍存在，海陸風減弱不能用空氣消失解釋；沒有重力：地表仍有重力；題述變弱來自溫差較小，不是無重力。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "預測"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_159_08",
          "stem": "季風可完全用單日海陸風解釋嗎？",
          "options": [
            "能，尺度相同",
            "不能，因沒有風",
            "能，地形無關",
            "不能，還有季節與大尺度氣壓"
          ],
          "answerIndex": 3,
          "rationales": [
            "不同尺度。",
            "有風。",
            "地形可影響。",
            "尺度機制更複雜。"
          ],
          "reviewEvidence": "不能，還有季節與大尺度氣壓：尺度機制更複雜；能，尺度相同：不同尺度；不能，因沒有風：有風；能，地形無關：地形可影響。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "比較"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_159_09",
          "stem": "海風形成屬哪種熱傳？",
          "options": [
            "固體傳導",
            "自然對流",
            "化學反應",
            "只有輻射"
          ],
          "answerIndex": 1,
          "rationales": [
            "空氣流動。",
            "密度差驅動空氣。",
            "非反應。",
            "日照啟動但風為對流。"
          ],
          "reviewEvidence": "自然對流：密度差驅動空氣；固體傳導：空氣流動；化學反應：非反應；只有輻射：日照啟動但風為對流。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "分類"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_159_10",
          "stem": "海岸高樓會不會影響局地風？",
          "options": [
            "會使比熱消失",
            "不會，模型禁止",
            "只改海溫",
            "會，地形建物可改變流路"
          ],
          "answerIndex": 3,
          "rationales": [
            "建築會改變粗糙度與流路，但不會使海水或陸地的比熱消失。",
            "模型可加修正。",
            "不只海溫。",
            "邊界會導流。"
          ],
          "reviewEvidence": "會，地形建物可改變流路：邊界會導流；會使比熱消失：建築會改變粗糙度與流路，但不會使海水或陸地的比熱消失；不會，模型禁止：模型可加修正；只改海溫：不只海溫。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_159_11",
          "stem": "判定海風應同時量？",
          "options": [
            "只量空氣濕度即可判定風由海上或陸地吹來",
            "只有時間",
            "海陸溫度與風向",
            "只有海色"
          ],
          "answerIndex": 2,
          "rationales": [
            "濕度不能單獨指出風向；還要比較海陸溫度並直接量測風向。",
            "只記時間沒有海陸溫度和風向，不能判定當時是否為海風。",
            "檢查驅動與結果。",
            "海面顏色不是氣流方向量測，不能單獨判定海風。"
          ],
          "reviewEvidence": "海陸溫度與風向：檢查驅動與結果；只量空氣濕度即可判定風由海上或陸地吹來：濕度不能單獨指出風向；還要比較海陸溫度並直接量測風向；只有時間：只記時間沒有海陸溫度和風向，不能判定當時是否為海風；只有海色：海面顏色不是氣流方向量測，不能單獨判定海風。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "方法"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_159_12",
          "stem": "背景強風與海風反向時，測站結果可能？",
          "options": [
            "由背景風主導",
            "海陸溫度相同",
            "沒有風",
            "海風必勝"
          ],
          "answerIndex": 0,
          "rationales": [
            "大尺度強迫較強。",
            "不必相同。",
            "仍有背景風。",
            "不保證。"
          ],
          "reviewEvidence": "由背景風主導：大尺度強迫較強；海陸溫度相同：不必相同；沒有風：仍有背景風；海風必勝：不保證。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "情境評估"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_159_01",
          "stimulusId": "PHYCHM_R4_STIM_159",
          "stem": "14:00為何海到陸？",
          "options": [
            "海面較熱",
            "陸地比海面高7°C",
            "兩者同溫",
            "夜間陸風"
          ],
          "answerIndex": 1,
          "rationales": [
            "海面較冷。",
            "陸上暖空氣上升。",
            "不同。",
            "為白天。"
          ],
          "reviewEvidence": "陸地比海面高7°C：陸上暖空氣上升；海面較熱：海面較冷；兩者同溫：不同；夜間陸風：為白天。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "表格"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_159_02",
          "stimulusId": "PHYCHM_R4_STIM_159",
          "stem": "06:00陸風時陸海溫差？",
          "options": [
            "相同",
            "陸地高2°C",
            "陸地低2°C",
            "陸地高12°C"
          ],
          "answerIndex": 2,
          "rationales": [
            "不同。",
            "方向反。",
            "20對22。",
            "誤差。"
          ],
          "reviewEvidence": "陸地低2°C：20對22；相同：不同；陸地高2°C：方向反；陸地高12°C：誤差。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_159_03",
          "stimulusId": "PHYCHM_R4_STIM_159",
          "stem": "資料可否證明颱風天也同方向？",
          "options": [
            "不能，題面限定晴朗背景風弱",
            "能，只有三筆即普遍",
            "不能，因無風向",
            "能，任何天氣相同"
          ],
          "answerIndex": 0,
          "rationales": [
            "適用條件有限。",
            "樣本不足。",
            "有風向。",
            "外推過度。"
          ],
          "reviewEvidence": "不能，題面限定晴朗背景風弱：適用條件有限；能，只有三筆即普遍：樣本不足；不能，因無風向：有風向；能，任何天氣相同：外推過度。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "批判"
          ]
        }
      ]
    },
    {
      "id": "PHYCHM_R4_S160",
      "title": "以能量流向檢查熱現象解釋",
      "authorityRefs": [
        "AUTH-NATURAL-LC-BB-4-1",
        "AUTH-NATURAL-LC-BB-4-3",
        "AUTH-NATURAL-LC-BB-4-4",
        "AUTH-NATURAL-LC-BB-4-5",
        "AUTH-NATURAL-LP-TR-4-1"
      ],
      "provenance": {
        "curriculum": "十二年國教自然科學第四學習階段熱傳播與生活應用",
        "calibration": "臺灣國中教育會考自然科導熱、對流、輻射與保溫題型",
        "authorship": "original-static-r4"
      },
      "assetIds": [],
      "lecture": {
        "id": "PHYCHM_R4_L_160",
        "objective": "能畫出系統與環境間由高溫到低溫的能量流，辨識傳導、對流、輻射可並存，並以守恆、相變與邊界檢查生活熱現象說法。",
        "sections": [
          {
            "title": "先畫系統邊界與箭頭",
            "body": "選定研究物體後，標出每個接觸物、環境及溫度；淨熱箭頭由高溫端指向低溫端。溫度上升通常表示淨吸熱，下降表示淨放熱，相變時則需另看相態。"
          },
          {
            "title": "再標傳熱路徑",
            "body": "接觸固體可傳導，流體移動可對流，任何表面皆可輻射。保溫杯或房屋常三路並存；改善一條路後，其他路可能成為主要熱漏。"
          },
          {
            "title": "最後做守恆與反例檢查",
            "body": "能量不會憑空產生或消失。若說冰飲『釋放冷』、棉被『製造熱』或風扇『降低室內總能量』，都應改成實際的熱流、代謝熱、蒸發或空氣混合。"
          }
        ],
        "workedExamples": [
          {
            "id": "PHYCHM_R4_L_160_EX_01",
            "prompt": "棉被蓋住人體後變暖，能量來源？",
            "steps": [
              "人體代謝產熱",
              "棉被減慢向外熱流",
              "皮膚周圍升溫"
            ],
            "answer": "人體代謝能，棉被負責減少散失。",
            "why": "棉被不主動製熱，而是增加傳導與對流熱阻，讓身體產生的能量較慢離開。"
          },
          {
            "id": "PHYCHM_R4_L_160_EX_02",
            "prompt": "冰袋使傷處降溫，箭頭怎畫？",
            "steps": [
              "傷處較熱",
              "冰袋較冷",
              "高到低"
            ],
            "answer": "由傷處指向冰袋。",
            "why": "冰袋吸收傷處的能量並可能熔化；不是冷量流入皮膚。"
          },
          {
            "id": "PHYCHM_R4_L_160_EX_03",
            "prompt": "風扇吹人感到涼但密閉室內未必降溫，何解？",
            "steps": [
              "增加皮膚對流蒸發",
              "人體較快散熱",
              "風扇電能轉熱"
            ],
            "answer": "體感降溫不等於房間總能量降低。",
            "why": "風使人體熱更快轉移，馬達還向室內輸入能量；沒有把熱排到室外就不是真正製冷。"
          }
        ],
        "misconceptions": [
          {
            "belief": "棉被會自己產生熱量。",
            "whyWrong": "主要熱源是人體。",
            "correction": "棉被降低熱流速率。"
          },
          {
            "belief": "冰把冷傳進食物。",
            "whyWrong": "食物的熱流向冰。",
            "correction": "用能量箭頭描述。"
          },
          {
            "belief": "只要溫度不變就無能量交換。",
            "whyWrong": "平衡交換或相變可恆溫。",
            "correction": "檢查淨值與相態。"
          },
          {
            "belief": "一個現象只能有一種傳熱。",
            "whyWrong": "三種方式常並存。",
            "correction": "逐路徑列出貢獻。"
          }
        ]
      },
      "stimulus": {
        "id": "PHYCHM_R4_STIM_160",
        "title": "熱飲冷卻改裝",
        "body": "同量80°C熱飲置於25°C室內30分鐘。",
        "dataTable": {
          "columns": [
            "組別",
            "改裝",
            "終溫/°C"
          ],
          "rows": [
            [
              "甲",
              "無蓋金屬杯",
              "42"
            ],
            [
              "乙",
              "加蓋金屬杯",
              "49"
            ],
            [
              "丙",
              "加蓋且包泡棉",
              "58"
            ],
            [
              "丁",
              "加蓋、泡棉、外覆亮面",
              "62"
            ]
          ]
        },
        "assetIds": []
      },
      "standaloneQuestions": [
        {
          "id": "PHYCHM_R4_Q_160_01",
          "stem": "畫熱流箭頭先比較？",
          "options": [
            "溫度",
            "顏色",
            "價格",
            "質量"
          ],
          "answerIndex": 0,
          "rationales": [
            "方向由溫差。",
            "不決定初向。",
            "價格不表示兩物體溫度，無法決定熱流箭頭方向。",
            "不決定初向。"
          ],
          "reviewEvidence": "溫度：方向由溫差；顏色：不決定初向；價格：價格不表示兩物體溫度，無法決定熱流箭頭方向；質量：不決定初向。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "方法"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_160_02",
          "stem": "冰飲變暖時熱來自？",
          "options": [
            "飲料放冷",
            "溫度計",
            "較暖環境",
            "質量增加"
          ],
          "answerIndex": 2,
          "rationales": [
            "無冷量。",
            "只量測。",
            "環境到飲料。",
            "非原因。"
          ],
          "reviewEvidence": "較暖環境：環境到飲料；飲料放冷：無冷量；溫度計：只量測；質量增加：非原因。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "方向"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_160_03",
          "stem": "棉被功能？",
          "options": [
            "棉被藉由降低人體比熱來維持身體溫度",
            "消除輻射",
            "主動燃燒產熱",
            "減慢身體熱散失"
          ],
          "answerIndex": 3,
          "rationales": [
            "不改。",
            "不能全消除。",
            "不燃燒。",
            "增加熱阻。"
          ],
          "reviewEvidence": "減慢身體熱散失：增加熱阻；棉被藉由降低人體比熱來維持身體溫度：不改；消除輻射：不能全消除；主動燃燒產熱：不燃燒。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "應用"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_160_04",
          "stem": "熱鍋同時可能以何方式散熱？",
          "options": [
            "只有傳導",
            "只有對流",
            "傳導、對流與輻射",
            "沒有熱傳"
          ],
          "answerIndex": 2,
          "rationales": [
            "漏兩路。",
            "漏兩路。",
            "接觸、空氣、表面皆在。",
            "有溫差。"
          ],
          "reviewEvidence": "傳導、對流與輻射：接觸、空氣、表面皆在；只有傳導：漏兩路；只有對流：漏兩路；沒有熱傳：有溫差。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "綜合"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_160_05",
          "stem": "風扇使人涼主要？",
          "options": [
            "製造冷量",
            "停止代謝",
            "加強對流與蒸發",
            "降低房間能量到零"
          ],
          "answerIndex": 2,
          "rationales": [
            "無冷量。",
            "風扇不會停止人體代謝；涼感主要來自對流與蒸發加快。",
            "人體散熱快。",
            "風扇只促進局部熱交換，不會把整個房間的能量降為零。"
          ],
          "reviewEvidence": "加強對流與蒸發：人體散熱快；製造冷量：無冷量；停止代謝：風扇不會停止人體代謝；涼感主要來自對流與蒸發加快；降低房間能量到零：風扇只促進局部熱交換，不會把整個房間的能量降為零。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "現象"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_160_06",
          "stem": "冷凍庫門開著能冷房嗎？",
          "options": [
            "不能，機器向房內放熱且耗電",
            "不能，冰箱無熱傳",
            "能，冷量無限",
            "能，能量消失"
          ],
          "answerIndex": 0,
          "rationales": [
            "總放熱大於箱內吸熱。",
            "有熱傳。",
            "無冷量。",
            "守恆。"
          ],
          "reviewEvidence": "不能，機器向房內放熱且耗電：總放熱大於箱內吸熱；不能，冰箱無熱傳：有熱傳；能，冷量無限：無冷量；能，能量消失：守恆。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "能量帳"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_160_07",
          "stem": "相變平台溫度不變，箭頭仍可存在嗎？",
          "options": [
            "質量必零",
            "不可",
            "可，能量用於相變",
            "只有冷量"
          ],
          "answerIndex": 2,
          "rationales": [
            "相變時樣品質量仍存在，熱量可用於改變相態而不升溫。",
            "錯。",
            "潛熱交換。",
            "無冷量。"
          ],
          "reviewEvidence": "可，能量用於相變：潛熱交換；質量必零：相變時樣品質量仍存在，熱量可用於改變相態而不升溫；不可：錯；只有冷量：無冷量。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "概念"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_160_08",
          "stem": "保溫層新增後主要熱漏可能轉到？",
          "options": [
            "能量消失",
            "瓶口或支撐熱橋",
            "增加保溫層後，低溫端會成為主要主動熱源",
            "原子停止"
          ],
          "answerIndex": 1,
          "rationales": [
            "不消失。",
            "其他路徑占比增。",
            "不產熱。",
            "不停。"
          ],
          "reviewEvidence": "瓶口或支撐熱橋：其他路徑占比增；能量消失：不消失；增加保溫層後，低溫端會成為主要主動熱源：不產熱；原子停止：不停。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "工程"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_160_09",
          "stem": "熱流入系統通常記為？",
          "options": [
            "質量流",
            "吸熱",
            "無能量",
            "放熱"
          ],
          "answerIndex": 1,
          "rationales": [
            "不必有質量。",
            "系統取得能量。",
            "有交換。",
            "方向反。"
          ],
          "reviewEvidence": "吸熱：系統取得能量；質量流：不必有質量；無能量：有交換；放熱：方向反。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "辨識"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_160_10",
          "stem": "兩物體同溫時淨熱流？",
          "options": [
            "零",
            "由大到小",
            "高到低",
            "低到高"
          ],
          "answerIndex": 0,
          "rationales": [
            "無溫差。",
            "質量無關。",
            "無高低。",
            "無高低。"
          ],
          "reviewEvidence": "零：無溫差；由大到小：質量無關；高到低：無高低；低到高：無高低。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "判斷"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_160_11",
          "stem": "解釋熱現象最完整順序？",
          "options": [
            "先猜答案",
            "定系統、比溫度、列路徑、查守恆",
            "只寫熱往上",
            "只看顏色"
          ],
          "answerIndex": 1,
          "rationales": [
            "非證據。",
            "涵蓋方向與機制。",
            "不普遍。",
            "顏色一項無法交代熱源、路徑、方向與觀察證據，分析不完整。"
          ],
          "reviewEvidence": "定系統、比溫度、列路徑、查守恆：涵蓋方向與機制；先猜答案：非證據；只寫熱往上：不普遍；只看顏色：顏色一項無法交代熱源、路徑、方向與觀察證據，分析不完整。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "方法整合"
          ]
        },
        {
          "id": "PHYCHM_R4_Q_160_12",
          "stem": "說明『降溫』還需交代？",
          "options": [
            "能量流向哪個外部系統",
            "顏色",
            "只有終溫",
            "物體名稱"
          ],
          "answerIndex": 0,
          "rationales": [
            "守恆需能量去向。",
            "非關鍵。",
            "只給終溫不能知道降幅或熱流方向，還需初溫、環境與過程條件。",
            "非關鍵。"
          ],
          "reviewEvidence": "能量流向哪個外部系統：守恆需能量去向；顏色：非關鍵；只有終溫：只給終溫不能知道降幅或熱流方向，還需初溫、環境與過程條件；物體名稱：非關鍵。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "論證"
          ]
        }
      ],
      "stimulusQuestions": [
        {
          "id": "PHYCHM_R4_STIMQ_160_01",
          "stimulusId": "PHYCHM_R4_STIM_160",
          "stem": "加蓋使終溫提高7°C，主要減少？",
          "options": [
            "金屬杯傳導全部",
            "水比熱",
            "初溫",
            "瓶口對流與蒸發"
          ],
          "answerIndex": 3,
          "rationales": [
            "杯身仍在。",
            "不改。",
            "同80°C。",
            "甲乙只差蓋。"
          ],
          "reviewEvidence": "瓶口對流與蒸發：甲乙只差蓋；金屬杯傳導全部：杯身仍在；水比熱：不改；初溫：同80°C。",
          "difficulty": "standard",
          "cognitiveProcess": [
            "因果"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_160_02",
          "stimulusId": "PHYCHM_R4_STIM_160",
          "stem": "泡棉讓乙到丙提高多少？",
          "options": [
            "16°C",
            "58°C",
            "4°C",
            "9°C"
          ],
          "answerIndex": 3,
          "rationales": [
            "甲丙差。",
            "是終溫。",
            "丙丁差。",
            "58－49＝9。"
          ],
          "reviewEvidence": "9°C：58－49＝9；16°C：甲丙差；58°C：是終溫；4°C：丙丁差。",
          "difficulty": "basic",
          "cognitiveProcess": [
            "計算"
          ]
        },
        {
          "id": "PHYCHM_R4_STIMQ_160_03",
          "stimulusId": "PHYCHM_R4_STIM_160",
          "stem": "丁比丙多保留4°C最支持？",
          "options": [
            "丁比丙保溫好是因亮面處理移除了瓶蓋",
            "亮面進一步降低輻射",
            "丁初溫較高",
            "亮面增加對流"
          ],
          "answerIndex": 1,
          "rationales": [
            "仍加蓋。",
            "唯一新增亮面。",
            "初溫同。",
            "非作用。"
          ],
          "reviewEvidence": "亮面進一步降低輻射：唯一新增亮面；丁比丙保溫好是因亮面處理移除了瓶蓋：仍加蓋；丁初溫較高：初溫同；亮面增加對流：非作用。",
          "difficulty": "advanced",
          "cognitiveProcess": [
            "綜合"
          ]
        }
      ]
    }
  ]
};
