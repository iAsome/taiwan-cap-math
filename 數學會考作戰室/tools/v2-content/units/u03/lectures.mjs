export const LECTURES = [
  {
    "unitId": "u03",
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-substitution",
    "title": "文字式與代入求值",
    "concept": "一元一次式的起點是翻譯語句：倍數、和差、倒數關係要寫對；代入時括號不可漏，負數代入更要加括號避免符號錯誤",
    "formula": "代入 x = k 於 f(x) 求 f(k)",
    "stepGuide": [
      "依語句列出文字式",
      "將指定值代入並為負數加括號",
      "依運算順序化簡",
      "檢查同類項是否合併完畢"
    ],
    "examples": [
      {
        "question": "當 x = 3 時，2x + 5 的值為？",
        "explanation": "2×3+5=11。10 是少加 5，8 是只算 2x，13 是多加。代入後依運算順序先乘後加。結果 11。請再核對一次計算與題意。"
      },
      {
        "question": "當 x = −2 時，x − 7 的值為？",
        "explanation": "−2−7=−9。9 是符號錯，−5 和 5 是當加法算了。代入負數時，減法要特別注意符號。負數代入要注意符號。"
      }
    ],
    "commonMistakes": [
      "「3 倍減 4」寫成 3-4x",
      "代入負數未加括號"
    ],
    "quizLink": {
      "unitId": "u03",
      "skillId": "linear-expression-substitution"
    }
  },
  {
    "unitId": "u03",
    "topicId": "u03-linear-expression",
    "skillId": "linear-expression-simplify",
    "title": "一元一次式化簡",
    "concept": "化簡文字式的規則與整數運算相同：同類項（相同文字部分）才能加減；分配律去括號時符號容易出錯，尤其括號前是負號時要變號",
    "formula": "ax + bx = (a+b)x；a(b+c) = ab+ac",
    "stepGuide": [
      "先去括號並注意符號",
      "找出同類項",
      "合併同類項係數",
      "常數項單獨合併"
    ],
    "examples": [
      {
        "question": "化簡 3x + 2x − 5。",
        "explanation": "3x+2x=5x，化簡為 5x−5。6x 是把係數加錯，5x+5 是符號錯。只有同類項才能合併，3x 和 2x 可以合併。常數 −5 單獨保留，化簡結果為 5x−5。"
      },
      {
        "question": "化簡 7x + 4 − 2x + 1。",
        "explanation": "5x+5。9x 是 x 項合併錯，5x+3 是常數合併錯。化簡時 x 項和常數項分開合併。常數項和 x 項分開處理。"
      }
    ],
    "commonMistakes": [
      "3x+2y 合併成 5x",
      "去括號漏乘某一項"
    ],
    "quizLink": {
      "unitId": "u03",
      "skillId": "linear-expression-simplify"
    }
  },
  {
    "unitId": "u03",
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-balance-property",
    "title": "等量公理",
    "concept": "方程式像天平：兩邊同時做相同運算，等式仍成立。移項本質是兩邊同加減同一項；解題時每一步都要維持兩邊平衡",
    "formula": "若 A=B，則 A±c=B±c，A×c=B×c，A÷c=B÷c（c≠0）",
    "stepGuide": [
      "確認等式兩邊結構",
      "選擇同加、同減、同乘或同除消去項",
      "保持兩邊運算一致",
      "逐步化到 x 單獨在一邊"
    ],
    "examples": [
      {
        "question": "若 a = b，則 a + 5 與 b + 5 的關係為？",
        "explanation": "等量公理保證兩邊同加同一數仍相等。其他選項只改一邊或加不同數，破壞平衡。"
      },
      {
        "question": "解 x + 8 = 15。",
        "explanation": "x+8=15，x=7。23 是加了 8，−7 是符號錯，8 是沒解完。移項就是兩邊同加減，讓 x 單獨在一邊。移項本質是同減 8。"
      }
    ],
    "commonMistakes": [
      "只對一邊運算",
      "移項忘記變號"
    ],
    "quizLink": {
      "unitId": "u03",
      "skillId": "linear-equation-balance-property"
    }
  },
  {
    "unitId": "u03",
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-basic-solving",
    "title": "一元一次方程式基本解法",
    "concept": "基本解法三步：整理同類項、移項使含 x 項在一邊常數在另一邊、係數化 1。係數為分數時可乘以分母，為負數時除以負數要變號",
    "formula": "ax + b = c ⇒ x = (c-b)/a（a≠0）",
    "stepGuide": [
      "合併同類項整理兩邊",
      "移項將 x 項與常數分開",
      "x 係數化 1",
      "代入原式檢查（必要時）"
    ],
    "examples": [
      {
        "question": "解 2x = 10。",
        "explanation": "2x=10，x=5。20 是乘了 2，8 和 12 是計算錯。係數化 1 就是兩邊同除以 x 的係數。請再核對一次計算與題意。"
      },
      {
        "question": "解 3x + 6 = 0。",
        "explanation": "3x=−6，x=−2。2 是符號錯，−6 是沒除完，6 是移項錯。移項要變號，+6 移到右邊變 −6。注意負號。請再核對一次計算與題意。"
      }
    ],
    "commonMistakes": [
      "移項未變號",
      "係數化 1 時只除 x 不除整項"
    ],
    "quizLink": {
      "unitId": "u03",
      "skillId": "linear-equation-basic-solving"
    }
  },
  {
    "unitId": "u03",
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-parentheses",
    "title": "含括號的一元一次方程式",
    "concept": "括號方程式要先用分配律展開：括號外係數乘到每一項；括號前是負號時，展開後每一項都要變號。展開後再依基本解法處理",
    "formula": "a(bx+c)=abx+ac",
    "stepGuide": [
      "用分配律去括號",
      "括號前負號則全項變號",
      "合併同類項",
      "移項並係數化 1"
    ],
    "examples": [
      {
        "question": "解 2(x + 3) = 10。",
        "explanation": "x+3=5，x=2。5 是沒除以 2，4 和 1 是計算錯。兩邊先除以括號外係數，有時比展開更簡便。也可以先展開再解。"
      },
      {
        "question": "解 3(2x − 1) = 9。",
        "explanation": "2x−1=3，2x=4，x=2。1 和 3、4 是各步驟可能的錯。先去括號或先除係數都可以，選較簡便的路徑。請再核對一次計算與題意。"
      }
    ],
    "commonMistakes": [
      "2(x+3) 只乘 x 不乘 3",
      "負號去括號未變號"
    ],
    "quizLink": {
      "unitId": "u03",
      "skillId": "linear-equation-parentheses"
    }
  },
  {
    "unitId": "u03",
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-fractions",
    "title": "含分母的一元一次方程式",
    "concept": "分數係數方程式兩邊同乘各分母的最小公倍數，可一次消分母；記得用分配律展開每一項，不可只乘含 x 的項",
    "formula": "兩邊同乘 LCM(分母)",
    "stepGuide": [
      "找出所有分母的 LCM",
      "兩邊同乘 LCM 去分母",
      "展開並合併同類項",
      "依基本步驟解 x"
    ],
    "examples": [
      {
        "question": "解 x/2 = 5。",
        "explanation": "x/2=5，兩邊乘 2 得 x=10。7 是加了 2，2.5 是除以 2，5 是沒乘。分母是 2 就兩邊乘 2，一次去掉分數。去分母最直接。"
      },
      {
        "question": "解 (x + 1)/3 = 4。",
        "explanation": "x+1=12，x=11。13 是加了 1，3 是沒乘 3，12 是沒移項。含分母的式子，兩邊同乘分母就能消分母。去分母後移項。"
      }
    ],
    "commonMistakes": [
      "去分母時漏乘常數項",
      "LCM 選錯"
    ],
    "quizLink": {
      "unitId": "u03",
      "skillId": "linear-equation-fractions"
    }
  },
  {
    "unitId": "u03",
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-check-solution",
    "title": "方程式解的檢查",
    "concept": "解方程式後應養成檢查習慣：把解代入左右兩邊分別計算，若相等則正確；若不等可能是計算錯或該值根本不是解",
    "formula": "代入 x = k，若左邊 = 右邊則 k 為解",
    "stepGuide": [
      "把候選解代入方程式左邊",
      "同值代入右邊",
      "比較兩邊是否相等",
      "不等則該值不是解"
    ],
    "examples": [
      {
        "question": "x = 4 是否為 2x + 1 = 9 的解？",
        "explanation": "2×4+1=9，跟右邊 9 相等，x=4 是解。檢查解要代入原式兩邊比較。右邊也是 9，兩邊相等，是解。請再核對一次計算與題意。"
      },
      {
        "question": "x = −3 是否為 x − 5 = −8 的解？",
        "explanation": "−3−5=−8，等式成立，x=−3 是解。代入負數時括號和符號要特別注意。右邊是 −8，兩邊相等。請再核對一次計算與題意。"
      }
    ],
    "commonMistakes": [
      "只算一邊就下結論",
      "用化簡後的式子檢查卻非原式"
    ],
    "quizLink": {
      "unitId": "u03",
      "skillId": "linear-equation-check-solution"
    }
  },
  {
    "unitId": "u03",
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-age-problem",
    "title": "年齡問題",
    "concept": "年齡題的時間軸要一致：幾年後兩人都加同一年數；幾年前則都減。倍數關係列在相同時間點上，不可一個用現在、一個用未來",
    "formula": "n 年後年齡 = 現在年齡 + n",
    "stepGuide": [
      "設現在年齡未知數",
      "把「幾年後/前」翻譯成 ±n",
      "依倍數或和差關係列方程式",
      "解出後檢查年齡是否合理"
    ],
    "examples": [
      {
        "question": "小明今年 x 歲，3 年後 15 歲，x 為？",
        "explanation": "x+3=15，x=12。18 是把 3 年後當現在，15 是沒解，3 是只算年數差。年齡問題先設現在，再加減年數。現在 12 歲。"
      },
      {
        "question": "爸爸 40 歲，兒子 x 歲，5 年後爸爸是兒子 3 倍，x 為？",
        "explanation": "40+5=3(x+5)，解得 x=10。5 是移項錯，15 和 8 是方程列錯。倍數關係要列在同一時間點，5 年後兩人都加 5。"
      }
    ],
    "commonMistakes": [
      "只替一人加年數",
      "倍數關係時間點不一致"
    ],
    "quizLink": {
      "unitId": "u03",
      "skillId": "linear-equation-age-problem"
    }
  },
  {
    "unitId": "u03",
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-money-problem",
    "title": "金錢問題",
    "concept": "金錢應用題常用總價等於單價乘以數量、找零等於付款減花費、餘額變化等於收入減支出等關係；列式前務必統一單位並確認所求的是單價、數量還是餘額",
    "formula": "找零 = 付款 − 花費；總價 = 單價 × 數量",
    "stepGuide": [
      "整理付款、花費、找零或餘額關係",
      "設未知單價或數量",
      "列一元一次方程式",
      "解後檢查金額是否為正"
    ],
    "examples": [
      {
        "question": "付 100 元買 3 本同價書，找零 16 元，每本幾元？",
        "explanation": "3x=84，x=28。32 是除錯，84 是總價不是單價，24 是找零當單價。找零 = 付款 − 花費，先算花費再求單價。"
      },
      {
        "question": "小明有 x 元，買 45 元午餐後剩 12 元，x 為？",
        "explanation": "x−45=12，x=57。33 是減反了，45 和 12 是搞混所求。剩餘 = 原本 − 花費，求原本用加法。原本有 57 元。請再核對一次計算與題意。"
      }
    ],
    "commonMistakes": [
      "找零 = 付錢 + 花費",
      "混合單價未先算總價"
    ],
    "quizLink": {
      "unitId": "u03",
      "skillId": "linear-equation-money-problem"
    }
  },
  {
    "unitId": "u03",
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-rate-problem",
    "title": "行程問題",
    "concept": "速率問題先畫簡圖：同向追及距離差 ÷ 速率差 = 時間；相向而行則用距離和 ÷ 速率和。單位要統一（公里/小時等）",
    "formula": "D = r × t；追及時間 = 距離差 ÷ 速率差",
    "stepGuide": [
      "確認相向、同向或追及情境",
      "選擇距離和或距離差公式",
      "速率與時間單位統一",
      "列式求解並檢查時間為正"
    ],
    "examples": [
      {
        "question": "以每小時 60 公里走 3 小時，共走幾公里？",
        "explanation": "60×3=180 公里。63 是加了，20 是除了，120 是時間錯。行程基本公式 D=r×t，已知兩個量求第三個。走 3 小時共 180 公里。"
      },
      {
        "question": "120 公里以 40 公里/時前進，需幾小時？",
        "explanation": "120÷40=3 小時。4 和 2 是算錯，80 是減了。求時間用距離除以速率。需 3 小時。請再核對一次計算與題意。"
      }
    ],
    "commonMistakes": [
      "追及用速率和而非差",
      "距離時間單位不統一"
    ],
    "quizLink": {
      "unitId": "u03",
      "skillId": "linear-equation-rate-problem"
    }
  },
  {
    "unitId": "u03",
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-distribution-problem",
    "title": "分配問題",
    "concept": "分配題典型模型：總數 = 人數 × 每人數 + 剩餘；若不足則總數 = 人數 × 每人數 − 不足。列式前要先分清剩還是缺",
    "formula": "總數 = n × 每人量 + 剩餘",
    "stepGuide": [
      "判斷是剩餘還是不足",
      "寫總數與人數、每人量的關係",
      "列一元一次方程式",
      "解出總數或人數並驗算"
    ],
    "examples": [
      {
        "question": "糖果分 6 人，每人 8 顆剩 3 顆，共幾顆？",
        "explanation": "6×8+3=51。48 是忘了加剩餘，54 和 45 是公式錯。有剩餘的分配：總數 = 分出去的 + 剩下的。共 51 顆糖果。"
      },
      {
        "question": "書分 5 堆每堆 12 本，剩 4 本，共幾本？",
        "explanation": "5×12+4=64。60 是忘了剩餘，56 是減了，68 是加錯。剩餘要加在已分出的數量上才是總數。共 64 本書。"
      }
    ],
    "commonMistakes": [
      "剩餘當成減項",
      "每人量與人數對調"
    ],
    "quizLink": {
      "unitId": "u03",
      "skillId": "linear-equation-distribution-problem"
    }
  },
  {
    "unitId": "u03",
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-consecutive-integers",
    "title": "連續整數問題",
    "concept": "連續數問題用單一未知數表示全部：連續整數 x, x+1, x+2；連續偶數 x, x+2。依和、積或關係列方程式，注意偶數與奇數間隔不同",
    "formula": "連續整數：x, x+1, x+2；連續偶數：x, x+2",
    "stepGuide": [
      "判斷連續整數或連續偶/奇數",
      "設最小者為 x 並寫出其餘",
      "依和或關係列方程式",
      "解 x 再求題目要求的特定項"
    ],
    "examples": [
      {
        "question": "三連續整數和 24，最小者為？",
        "explanation": "3x+3=24，x=7。8 和 9 是沒設對未知數，6 是算錯。連續整數差 1，設最小者為 x 最方便。3x=21，x=7。請再核對一次計算與題意。"
      },
      {
        "question": "兩連續偶數和 26，較小者為？",
        "explanation": "x+(x+2)=26，x=12。14 是較大者，13 是差 1 了，10 是算錯。連續偶數差 2 不是差 1，列式時要注意。請再核對一次計算與題意。"
      }
    ],
    "commonMistakes": [
      "連續偶數仍差 1",
      "設中間數導致式子複雜"
    ],
    "quizLink": {
      "unitId": "u03",
      "skillId": "linear-equation-consecutive-integers"
    }
  },
  {
    "unitId": "u03",
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-reasonableness",
    "title": "合理性檢查",
    "concept": "代數解不一定都是題解：長度、面積、人數、年齡等需符合現實；負數、非整數人數通常不合理。合理性檢查是會考素養的重要環節",
    "formula": "",
    "stepGuide": [
      "先完成代數求解",
      "對照題意檢查正負與單位",
      "人數、件數是否應為整數",
      "不合理則重新檢視列式"
    ],
    "examples": [
      {
        "question": "解得 x = −5 表示長度 5 公分，是否合理？",
        "explanation": "長度取負值不符合現實。代數上 x=−5 可能是解，但幾何題要排除。解出負數時要回頭檢查題目是否允許。"
      },
      {
        "question": "年齡解得 x = −3，是否合理？",
        "explanation": "年齡 −3 歲沒有意義，代數解要過情境篩選。年齡問題解出負數，一定是列式或計算有誤。"
      }
    ],
    "commonMistakes": [
      "負年齡直接當答案",
      "2.5 人四捨五入"
    ],
    "quizLink": {
      "unitId": "u03",
      "skillId": "linear-equation-reasonableness"
    }
  },
  {
    "unitId": "u03",
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-plan-comparison",
    "title": "方案比較問題",
    "concept": "月租、通話費、票價等方案比較：固定費 + 變動費 × 用量 = 總費。必須在相同用量下分別計算各方案，必要時也可列方程式求臨界用量",
    "formula": "總費 = 固定費 + 單價 × 用量",
    "stepGuide": [
      "寫出各方案的總費公式",
      "代入相同用量計算",
      "比較總費大小",
      "必要時解兩式相等求臨界點"
    ],
    "examples": [
      {
        "question": "方案 A：月租 300 元 + 每通 2 元；方案 B：月租 500 元 + 每通 1 元。通話 150 次時哪較省？",
        "explanation": "通話 150 次時 A 花 600 元、B 花 650 元，A 較省。不能只看月租或只看通話費。方案比較要在相同用量下算總費。"
      },
      {
        "question": "同一商品甲店 2 件 500 元、乙店 3 件 720 元，買 6 件哪較省？",
        "explanation": "買 6 件甲 1500 元、乙 1440 元，乙較省。要換算成相同數量再比。不同件數的優惠要先換算成相同購買量。"
      }
    ],
    "commonMistakes": [
      "只看月租不看變動費",
      "用量不同卻直接比"
    ],
    "quizLink": {
      "unitId": "u03",
      "skillId": "linear-equation-plan-comparison"
    }
  },
  {
    "unitId": "u03",
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-literacy-context",
    "title": "一元一次方程式素養題",
    "concept": "素養應用整合節水百分比、周長長寬關係、報名費等真實情境：先設未知數、翻譯關係成方程式，解後還要回覆題目所問的實際量",
    "formula": "依情境選擇：周長 = 2(長+寬) 等",
    "stepGuide": [
      "讀懂情境並設適當未知數",
      "把關係翻譯成方程式",
      "解方程式得未知數",
      "回代求題目最終所問量"
    ],
    "examples": [
      {
        "question": "某校節水 20%，原每天 500 公升，現在每天？",
        "explanation": "500×80%=400 公升。100 是減 20 公升（把百分率當絕對量），520 和 480 是算法錯。百分比變化用乘法，節水 20% 是乘 80% 不是減 20。"
      },
      {
        "question": "某班捐書，第一天捐 x 本，第二天比第一天多 5 本，共 45 本，x 為？",
        "explanation": "x+(x+5)=45，x=20。25 是第二天，15 和 22 是方程解錯。兩天共 45 本，設第一天為 x，第二天多 5 本。x=20 本。請再核對一次計算與題意。"
      }
    ],
    "commonMistakes": [
      "節水 20% 直接減 20 公升",
      "周長公式漏乘 2"
    ],
    "quizLink": {
      "unitId": "u03",
      "skillId": "linear-equation-literacy-context"
    }
  }
];

export default LECTURES;
