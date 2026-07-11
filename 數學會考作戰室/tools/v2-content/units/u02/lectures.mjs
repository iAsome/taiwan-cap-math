export const LECTURES = [
  {
    "unitId": "u02",
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "title": "因數與倍數",
    "concept": "因數與倍數描述整除關係：因數較小、倍數較大，兩者互為表述。判斷時用除法看商是否為整數，並能列出所有正因數或指定倍數",
    "formula": "a 是 b 的倍數 ⇔ b 是 a 的因數 ⇔ b|a",
    "stepGuide": [
      "確認兩數的整除關係",
      "用除法檢查商是否為整數",
      "區分因數（較小）與倍數（較大）",
      "必要時列出所有因數個數"
    ],
    "examples": [
      {
        "question": "24 的因數中，下列何者正確？",
        "explanation": "因數與倍數互為表述：6 能整除 24，所以 6 是 24 的因數。說 24 是 6 的因數是把角色對調了，其餘選項也搞反了關係。"
      },
      {
        "question": "下列哪一個是 15 的倍數？",
        "explanation": "45÷15=3，所以 45 是 15 的倍數。10、8、7 都不能被 15 整除。判斷倍數用除法看商是否為整數，不是看數字大小。"
      }
    ],
    "commonMistakes": [
      "因數與倍數角色對調",
      "把 1 當成質數"
    ],
    "quizLink": {
      "unitId": "u02",
      "skillId": "fraction-factor-multiple"
    }
  },
  {
    "unitId": "u02",
    "topicId": "u02-factors",
    "skillId": "fraction-prime-composite",
    "title": "質數與合數",
    "concept": "質數是整數的建築磚：只有 1 與自己兩個正因數；合數可再分解；1 既不是質數也不是合數。2 是最小質數且是唯一偶質數",
    "formula": "",
    "stepGuide": [
      "檢查正因數個數",
      "只有 1 與本身 → 質數",
      "還有其他因數 → 合數",
      "特別記住 1 與 2 的特殊性"
    ],
    "examples": [
      {
        "question": "下列何者是質數？",
        "explanation": "29 是質數。21=3×7 是合數，1 既不是質數也不是合數，39=3×13 是合數。判斷質數要看正因數個數，不是看奇偶。"
      },
      {
        "question": "下列何者是合數？",
        "explanation": "35=5×7 是合數。2 和 13、17 都是質數。合數一定能分解為兩個較小的正整數相乘。35 是合數。請再核對一次計算與題意。"
      }
    ],
    "commonMistakes": [
      "把 1 當質數",
      "以為所有偶數都是合數而忽略 2"
    ],
    "quizLink": {
      "unitId": "u02",
      "skillId": "fraction-prime-composite"
    }
  },
  {
    "unitId": "u02",
    "topicId": "u02-factors",
    "skillId": "fraction-prime-factorization",
    "title": "質因數分解",
    "concept": "質因數分解是 GCD、LCM 與分數化簡的基礎：反覆除以質數直到商為 1，最後寫成指數形式；同一合數的標準分解式唯一",
    "formula": "N = p₁^a × p₂^b × …（pᵢ 為質數）",
    "stepGuide": [
      "從最小質數 2 開始試除",
      "商仍為合數則繼續除下一質數",
      "全部寫成質數的乘積",
      "合併同底指數成標準分解式"
    ],
    "examples": [
      {
        "question": "36 的標準分解式為？",
        "explanation": "36=2²×3²。6² 和 2×18、4×9 都還含合數，不是標準分解式。標準分解式每個因數都必須是質數。標準分解式只用質數。"
      },
      {
        "question": "60 的標準分解式為？",
        "explanation": "60=2²×3×5。6×10、2×30、4×15 都含合數因數。分解時從最小質數 2 開始試除比較有系統。標準式為 2²×3×5。請再核對一次計算與題意。"
      }
    ],
    "commonMistakes": [
      "分解式仍含合數因數",
      "漏掉質因數 2"
    ],
    "quizLink": {
      "unitId": "u02",
      "skillId": "fraction-prime-factorization"
    }
  },
  {
    "unitId": "u02",
    "topicId": "u02-factors",
    "skillId": "fraction-gcd-basic",
    "title": "最大公因數",
    "concept": "GCD 表示兩數同時整除的最大整數；求法可用列舉法或質因數分解法：共同質因數取較小指數再相乘。互質時 GCD 為 1",
    "formula": "GCD(a,b) = 共同質因數取較小次方之積",
    "stepGuide": [
      "列出兩數質因數分解",
      "找出共同質因數",
      "各共同質因數取較小次方",
      "相乘得 GCD"
    ],
    "examples": [
      {
        "question": "12 與 18 的最大公因數為？",
        "explanation": "12 和 18 的公因數最大是 6。3 不是最大，36 是 LCM，2 也太小了。GCD 取公因數中最大的那個，不是最小的。"
      },
      {
        "question": "24 與 36 的最大公因數為？",
        "explanation": "GCD(24,36)=2²×3=12。6 是次方取錯，72 是 LCM，4 太小。質因數分解法：共同質因數取較小次方。GCD = 12。請再核對一次計算與題意。"
      }
    ],
    "commonMistakes": [
      "取較大次方而非較小",
      "把 LCM 算法用在 GCD"
    ],
    "quizLink": {
      "unitId": "u02",
      "skillId": "fraction-gcd-basic"
    }
  },
  {
    "unitId": "u02",
    "topicId": "u02-factors",
    "skillId": "fraction-lcm-basic",
    "title": "最小公倍數",
    "concept": "LCM 是兩數同時整除的最小正整數；分解後取所有出現過的質因數，每一質因數用較大的次方，再相乘。互質時 LCM 等於兩數乘積",
    "formula": "LCM(a,b) = 各質因數取較大次方之積",
    "stepGuide": [
      "分解兩數成質因數",
      "收集所有出現的質因數",
      "每一質因數取較大次方",
      "相乘得 LCM"
    ],
    "examples": [
      {
        "question": "4 與 6 的最小公倍數為？",
        "explanation": "LCM(4,6)=12。24 是乘積未約簡，2 是 GCD，10 無關。LCM 取各質因數的較大次方再相乘。請再核對一次計算與題意。"
      },
      {
        "question": "8 與 12 的最小公倍數為？",
        "explanation": "LCM=24。48 是兩數直接相乘，4 是 GCD，96 太大。LCM 要包含兩數所有質因數的最高次方。LCM(8, 12) = 24。請再核對一次計算與題意。"
      }
    ],
    "commonMistakes": [
      "取較小次方算 LCM",
      "互質時未直接相乘"
    ],
    "quizLink": {
      "unitId": "u02",
      "skillId": "fraction-lcm-basic"
    }
  },
  {
    "unitId": "u02",
    "topicId": "u02-factors-apps",
    "skillId": "fraction-gcd-application",
    "title": "最大公因數應用",
    "concept": "GCD 應用題關鍵字是「等長切割」「每組最多」「無剩餘」：總長或總數必須同時整除，因此取 GCD。與 LCM 的「同時再次」不同",
    "formula": "等分無剩且最大份數 → GCD",
    "stepGuide": [
      "辨認題意是否求等分且無剩",
      "確認是求最大份數或最大單位長",
      "對相關數量求 GCD",
      "檢查答案能整除所有總量"
    ],
    "examples": [
      {
        "question": "48 與 36 公分長的繩子剪成等長且無剩，每段最長幾公分？",
        "explanation": "繩子等長切割取 GCD=12。6 不是最大，24 和 18 也不能同時整除兩條繩。無剩餘等分問題用 GCD，不是 LCM。"
      },
      {
        "question": "30 與 45 個蘋果分組，每組數相同且最多，每組幾個？",
        "explanation": "GCD(30,45)=15。5 和 3 不是最大，90 是 LCM。分組最多且各組相等，總數的 GCD 就是每組數量。每組 15 個。請再核對一次計算與題意。"
      }
    ],
    "commonMistakes": [
      "把同時再次問題誤用 GCD",
      "求 LCM 而非 GCD"
    ],
    "quizLink": {
      "unitId": "u02",
      "skillId": "fraction-gcd-application"
    }
  },
  {
    "unitId": "u02",
    "topicId": "u02-factors-apps",
    "skillId": "fraction-lcm-application",
    "title": "最小公倍數應用",
    "concept": "LCM 應用於「同時」「再次一起」「最小共同週期」；也可處理等距排列使間距最大但起點對齊的情境，要與 GCD 關鍵字區分",
    "formula": "同時再次間隔 = LCM(週期₁, 週期₂)",
    "stepGuide": [
      "確認題意求同時再次或共同週期",
      "列出相關週期或間隔",
      "求 LCM",
      "驗算是否為最小正整數解"
    ],
    "examples": [
      {
        "question": "4 與 6 分鐘各響一次，同時響後再同時響至少幾分鐘？",
        "explanation": "LCM(4,6)=12 分鐘。24 是 12 的倍數但不是最小，10 和 2 不對。同時再次發生用 LCM，不是 GCD。至少 12 分鐘後再同時響。"
      },
      {
        "question": "6 與 8 公尺長的路燈等距排列，間距最大幾公尺？",
        "explanation": "這題求等距排列的最大間距，用 GCD=2。14 是相加，48 是 LCM，4 不是最大公因數。路燈等距排列取 GCD，同時響才取 LCM。"
      }
    ],
    "commonMistakes": [
      "同時再次卻求 GCD",
      "把間距問題與週期混淆"
    ],
    "quizLink": {
      "unitId": "u02",
      "skillId": "fraction-lcm-application"
    }
  },
  {
    "unitId": "u02",
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-compare",
    "title": "分數大小比較",
    "concept": "分數比較常用通分、交叉相乘或化小數；正分數越接近 1 越大；負分數則絕對值越小數值越大。帶分數可先化假分數再比",
    "formula": "a/b 與 c/d：比較 ad 與 bc",
    "stepGuide": [
      "判斷是否同分母或同分子",
      "異分母則通分或交叉相乘",
      "負分數注意絕對值與大小反向",
      "與小數比較時先統一形式"
    ],
    "examples": [
      {
        "question": "比較 3/4 與 5/6 的大小。",
        "explanation": "通分後 9/12 < 10/12，3/4 < 5/6。大小關係搞反就錯了。異分母比大小一定要先通分或交叉相乘。請再核對一次計算與題意。"
      },
      {
        "question": "下列何者最大？",
        "explanation": "7/8 最大，因為最接近 1。2/3、5/9、1/2 都更小。正分數越接近 1 越大，7/8 只差 1/8。7/8 > 2/3 > 5/9 > 1/2。請再核對一次計算與題意。"
      }
    ],
    "commonMistakes": [
      "異分母直接比分子",
      "負分數絕對值大者當較大"
    ],
    "quizLink": {
      "unitId": "u02",
      "skillId": "fraction-compare"
    }
  },
  {
    "unitId": "u02",
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "title": "分數加減",
    "concept": "分數加減的核心是通分：找公分母（通常用 LCM），分子加減後分母不變，最後約分。帶分數可先化假分數或整數與分數部分分開處理",
    "formula": "a/b ± c/d：先通分為同分母再分子運算",
    "stepGuide": [
      "找兩分母的最小公倍數當公分母",
      "擴分使分母相同",
      "分子加減、分母不變",
      "約分並檢查是否需帶分數"
    ],
    "examples": [
      {
        "question": "計算 1/3 + 1/6。",
        "explanation": "通分後 2/6+1/6=3/6=1/2。2/9 是分子直接加，2/6 未約分。分數加法先通分，分子加、分母不變。2/6 + 1/6 = 3/6 = 1/2。請再核對一次計算與題意。"
      },
      {
        "question": "計算 5/8 − 1/4。",
        "explanation": "5/8−2/8=3/8。4/8 是減錯，1/4 未通分，6/8 是加了。減法也要先通分，分子相減、分母不變。分母不變，分子相減。"
      }
    ],
    "commonMistakes": [
      "分子分母直接相加",
      "通分時只擴一邊"
    ],
    "quizLink": {
      "unitId": "u02",
      "skillId": "fraction-add-subtract"
    }
  },
  {
    "unitId": "u02",
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "title": "分數乘除",
    "concept": "分數乘除與加減不同：乘法可直接分子分母分別相乘；除法則將除數倒數後相乘。計算前可先約分簡化，帶分數宜先化假分數",
    "formula": "a/b × c/d = ac/bd；a/b ÷ c/d = a/b × d/c",
    "stepGuide": [
      "除法先改寫成乘倒數",
      "分子分母分別相乘",
      "能約分就先約分",
      "結果化為最簡分數"
    ],
    "examples": [
      {
        "question": "計算 2/3 × 3/4。",
        "explanation": "2/3×3/4=6/12=1/2。6/7 是分子相加，5/7 和 2/4 是算法錯。分數乘法：分子乘分子、分母乘分母，最後約分。6/12 約分為 1/2。"
      },
      {
        "question": "計算 3/5 ÷ 2/3。",
        "explanation": "3/5÷2/3=3/5×3/2=9/10。6/15 是分子直接除，5/6 和 2/5 是倒數搞反。分數除法要乘除數的倒數。除法變乘法。請再核對一次計算與題意。"
      }
    ],
    "commonMistakes": [
      "除法未乘倒數",
      "加法規則誤用在乘法"
    ],
    "quizLink": {
      "unitId": "u02",
      "skillId": "fraction-multiply-divide"
    }
  },
  {
    "unitId": "u02",
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-mixed-number",
    "title": "帶分數與假分數",
    "concept": "帶分數方便閱讀數量，計算時常化為假分數：整數部分乘分母再加分子，分母不變。化回帶分數則用除法得商與餘數",
    "formula": "a b/c = (a×c+b)/c",
    "stepGuide": [
      "帶分數化假分數：整×分母+分子",
      "假分數化帶分數：分子÷分母",
      "運算後再決定是否化回帶分數",
      "確認真分數部分小於分母"
    ],
    "examples": [
      {
        "question": "1 3/4 化成假分數為？",
        "explanation": "1 3/4=7/4。4/7 是分子分母對調，13/4 是多加了，3/4 少了整數部分。帶分數化假分數：整×分母+分子。1 3/4 = 7/4。請再核對一次計算與題意。"
      },
      {
        "question": "11/4 化成帶分數為？",
        "explanation": "11÷4=2 餘 3，所以 2 3/4。1 3/4 商錯，2 1/4 餘數錯，3 1/4 商太大。假分數化帶分數：分子除以分母，商是整數、餘數是分子。"
      }
    ],
    "commonMistakes": [
      "1 3/4 化成 4/7",
      "餘數當分母"
    ],
    "quizLink": {
      "unitId": "u02",
      "skillId": "fraction-mixed-number"
    }
  },
  {
    "unitId": "u02",
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-complex-fraction-basic",
    "title": "繁分數基本化簡",
    "concept": "繁分數是分數的分數，化簡時把主分數線看成除號：分子分數除以分母分數，等於乘除數的倒數。這是進階分數運算的橋梁",
    "formula": "(a/b)/(c/d) = a/b × d/c",
    "stepGuide": [
      "辨認繁分數的分子與分母分數",
      "改寫成除法算式",
      "除數分數取倒數改乘法",
      "乘完約分化簡"
    ],
    "examples": [
      {
        "question": "化簡 (1/2)/(1/4)。",
        "explanation": "(1/2)÷(1/4)=1/2×4=2。1/8 是上下直接乘，1/2 是只算分子，4 是只乘分母。繁分數化簡就是分子分數除以分母分數。"
      },
      {
        "question": "化簡 (3/4)/(1/2)。",
        "explanation": "3/4×2=3/2。3/8 是上下相乘，6/4 未約分，1/2 是只除分子。繁分數的主分數線就是除號。結果 3/2。請再核對一次計算與題意。"
      }
    ],
    "commonMistakes": [
      "分子分母直接上下相乘",
      "忘記除法要乘倒數"
    ],
    "quizLink": {
      "unitId": "u02",
      "skillId": "fraction-complex-fraction-basic"
    }
  },
  {
    "unitId": "u02",
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-percent-discount",
    "title": "百分率、折扣、成數",
    "concept": "折扣與成數描述售價占原價的比例：8 折是 80%、7 成是 70%；漲價則用 100% 加漲幅。列式時先確認基準量，再乘百分率",
    "formula": "售價 = 原價 × 折扣百分率",
    "stepGuide": [
      "確認基準量是原價或新價",
      "把折扣成數換算成百分率",
      "基準量乘以百分率",
      "漲價則用 1 加漲幅比例"
    ],
    "examples": [
      {
        "question": "原價 400 元打 8 折，售價為？",
        "explanation": "400×80%=320 元。380 是減 20 元而非打折，80 元是折數金額，480 是漲價了。打折用乘法不是減法，8 折是乘 80%。"
      },
      {
        "question": "某商品漲價 20%，原價 500 元，新價為？",
        "explanation": "500×120%=600 元。520 是只漲 20 元，100 元是漲幅金額，580 是折扣算法。漲價要用 100% 加漲幅，不是只加漲幅的數字。"
      }
    ],
    "commonMistakes": [
      "8 折從原價減 8 元",
      "把 8 折當 8%"
    ],
    "quizLink": {
      "unitId": "u02",
      "skillId": "fraction-percent-discount"
    }
  },
  {
    "unitId": "u02",
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-base-quantity",
    "title": "基準量判斷",
    "concept": "百分率問題三分量：基準量、比較量、百分率。基準量通常是「全部」「原價」「總數」；已知部分與百分率時，基準量 = 部分 ÷ 百分率",
    "formula": "百分率 = 比較量 ÷ 基準量；基準量 = 比較量 ÷ 百分率",
    "stepGuide": [
      "圈出題目中的基準量關鍵字",
      "區分比較量與基準量",
      "選擇乘或除百分率列式",
      "檢查答案量級是否合理"
    ],
    "examples": [
      {
        "question": "某數的 25% 是 30，某數為？",
        "explanation": "30÷25%=120。7.5 是乘了，55 和 750 是運算方向錯。已知部分和百分率，求整體用除法。30 ÷ 25% = 120。請再核對一次計算與題意。"
      },
      {
        "question": "原價打 9 折後 450 元，原價為？",
        "explanation": "450÷90%=500 元。405 是再打折，490 和 540 是方向錯。打折後的價格是比較量，求原價要除以折扣百分率。"
      }
    ],
    "commonMistakes": [
      "把比較量當基準量",
      "百分率直接當分母不加 %"
    ],
    "quizLink": {
      "unitId": "u02",
      "skillId": "fraction-base-quantity"
    }
  },
  {
    "unitId": "u02",
    "topicId": "u02-fraction-literacy",
    "skillId": "fraction-literacy-context",
    "title": "分數素養題",
    "concept": "分數素養題常結合用量、分配、剩餘：「幾分之幾桶」可能要先換算實際公升；多次取用時每步的基準量可能不同，需逐段列式",
    "formula": "部分量 = 基準量 × 分數",
    "stepGuide": [
      "釐清每次取用所對應的基準量",
      "分數部分換算成實際數量",
      "加總已用量並求剩餘",
      "檢查單位一致與答案合理性"
    ],
    "examples": [
      {
        "question": "一桶水 24 公升，上午用 1/3，下午用 1/4 桶，剩幾公升？",
        "explanation": "上午 8 公升、下午 6 公升，剩 10 公升。8 和 12 是漏算一段，6 是只算一段。分數桶數要先換算成實際公升再計算。"
      },
      {
        "question": "三人分 120 元，甲得 1/3、乙得 1/4，丙得其餘，丙得幾元？",
        "explanation": "甲 40、乙 30，丙得 50 元。40 是只算甲，30 是只算乙，60 是加總錯。分完後的剩餘 = 總數 − 各份之和。丙得 120−40−30=50 元。"
      }
    ],
    "commonMistakes": [
      "把分數當人數直接相減",
      "多次取用卻只用一個基準量"
    ],
    "quizLink": {
      "unitId": "u02",
      "skillId": "fraction-literacy-context"
    }
  }
];

export default LECTURES;
