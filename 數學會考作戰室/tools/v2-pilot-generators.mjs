import { mkQuestion, mkLecture } from "./v2-shared.mjs";
import { ANSWER_INDEX_PATTERN, countZh } from "./v2-quality.mjs";
import { PILOT_CONTENT } from "./v2-pilot-content.mjs";

/** ponytail: pilot content lives inline; upgrade path = split SKILL_META per unit file if this grows past ~3k lines */
const PILOT_UNITS = {
  "u01": {
    "numericId": 1,
    "domain": "數與量",
    "skills": [
      {
        "skillId": "integer-number-classification",
        "title": "數的分類",
        "topicId": "u01-integer-basics"
      },
      {
        "skillId": "integer-positive-negative-meaning",
        "title": "正負數的意義",
        "topicId": "u01-integer-basics"
      },
      {
        "skillId": "integer-number-line-position",
        "title": "數線位置",
        "topicId": "u01-integer-basics"
      },
      {
        "skillId": "integer-number-comparison",
        "title": "數的大小比較",
        "topicId": "u01-integer-basics"
      },
      {
        "skillId": "integer-opposite-number",
        "title": "相反數",
        "topicId": "u01-integer-basics"
      },
      {
        "skillId": "integer-absolute-value-basic",
        "title": "絕對值基本意義",
        "topicId": "u01-integer-basics"
      },
      {
        "skillId": "integer-absolute-value-distance",
        "title": "絕對值與距離",
        "topicId": "u01-integer-basics"
      },
      {
        "skillId": "integer-addition",
        "title": "整數加法",
        "topicId": "u01-integer-arithmetic"
      },
      {
        "skillId": "integer-subtraction",
        "title": "整數減法",
        "topicId": "u01-integer-arithmetic"
      },
      {
        "skillId": "integer-multiplication-division",
        "title": "整數乘除",
        "topicId": "u01-integer-arithmetic"
      },
      {
        "skillId": "integer-mixed-operations",
        "title": "整數四則混合",
        "topicId": "u01-integer-arithmetic"
      },
      {
        "skillId": "integer-exponent-meaning",
        "title": "指數意義",
        "topicId": "u01-integer-exponents"
      },
      {
        "skillId": "integer-exponent-laws",
        "title": "指數律",
        "topicId": "u01-integer-exponents"
      },
      {
        "skillId": "integer-scientific-notation",
        "title": "科學記號",
        "topicId": "u01-integer-exponents"
      },
      {
        "skillId": "integer-literacy-context",
        "title": "整數素養題",
        "topicId": "u01-integer-literacy"
      }
    ]
  },
  "u02": {
    "numericId": 2,
    "domain": "數與量",
    "skills": [
      {
        "skillId": "fraction-factor-multiple",
        "title": "因數與倍數",
        "topicId": "u02-factors"
      },
      {
        "skillId": "fraction-prime-composite",
        "title": "質數與合數",
        "topicId": "u02-factors"
      },
      {
        "skillId": "fraction-prime-factorization",
        "title": "質因數分解",
        "topicId": "u02-factors"
      },
      {
        "skillId": "fraction-gcd-basic",
        "title": "最大公因數",
        "topicId": "u02-factors"
      },
      {
        "skillId": "fraction-lcm-basic",
        "title": "最小公倍數",
        "topicId": "u02-factors"
      },
      {
        "skillId": "fraction-gcd-application",
        "title": "最大公因數應用",
        "topicId": "u02-factors-apps"
      },
      {
        "skillId": "fraction-lcm-application",
        "title": "最小公倍數應用",
        "topicId": "u02-factors-apps"
      },
      {
        "skillId": "fraction-compare",
        "title": "分數大小比較",
        "topicId": "u02-fraction-ops"
      },
      {
        "skillId": "fraction-add-subtract",
        "title": "分數加減",
        "topicId": "u02-fraction-ops"
      },
      {
        "skillId": "fraction-multiply-divide",
        "title": "分數乘除",
        "topicId": "u02-fraction-ops"
      },
      {
        "skillId": "fraction-mixed-number",
        "title": "帶分數與假分數",
        "topicId": "u02-fraction-ops"
      },
      {
        "skillId": "fraction-complex-fraction-basic",
        "title": "繁分數基本化簡",
        "topicId": "u02-fraction-ops"
      },
      {
        "skillId": "fraction-percent-discount",
        "title": "百分率、折扣、成數",
        "topicId": "u02-fraction-ratio"
      },
      {
        "skillId": "fraction-base-quantity",
        "title": "基準量判斷",
        "topicId": "u02-fraction-ratio"
      },
      {
        "skillId": "fraction-literacy-context",
        "title": "分數素養題",
        "topicId": "u02-fraction-literacy"
      }
    ]
  },
  "u03": {
    "numericId": 3,
    "domain": "代數",
    "skills": [
      {
        "skillId": "linear-expression-substitution",
        "title": "文字式與代入求值",
        "topicId": "u03-linear-expression"
      },
      {
        "skillId": "linear-expression-simplify",
        "title": "一元一次式化簡",
        "topicId": "u03-linear-expression"
      },
      {
        "skillId": "linear-equation-balance-property",
        "title": "等量公理",
        "topicId": "u03-linear-equation-solving"
      },
      {
        "skillId": "linear-equation-basic-solving",
        "title": "一元一次方程式基本解法",
        "topicId": "u03-linear-equation-solving"
      },
      {
        "skillId": "linear-equation-parentheses",
        "title": "含括號的一元一次方程式",
        "topicId": "u03-linear-equation-solving"
      },
      {
        "skillId": "linear-equation-fractions",
        "title": "含分母的一元一次方程式",
        "topicId": "u03-linear-equation-solving"
      },
      {
        "skillId": "linear-equation-check-solution",
        "title": "方程式解的檢查",
        "topicId": "u03-linear-equation-solving"
      },
      {
        "skillId": "linear-equation-age-problem",
        "title": "年齡問題",
        "topicId": "u03-linear-equation-apps"
      },
      {
        "skillId": "linear-equation-money-problem",
        "title": "金錢問題",
        "topicId": "u03-linear-equation-apps"
      },
      {
        "skillId": "linear-equation-rate-problem",
        "title": "行程問題",
        "topicId": "u03-linear-equation-apps"
      },
      {
        "skillId": "linear-equation-distribution-problem",
        "title": "分配問題",
        "topicId": "u03-linear-equation-apps"
      },
      {
        "skillId": "linear-equation-consecutive-integers",
        "title": "連續整數問題",
        "topicId": "u03-linear-equation-apps"
      },
      {
        "skillId": "linear-equation-reasonableness",
        "title": "合理性檢查",
        "topicId": "u03-linear-equation-reasoning"
      },
      {
        "skillId": "linear-equation-plan-comparison",
        "title": "方案比較問題",
        "topicId": "u03-linear-equation-reasoning"
      },
      {
        "skillId": "linear-equation-literacy-context",
        "title": "一元一次方程式素養題",
        "topicId": "u03-linear-equation-reasoning"
      }
    ]
  }
};

const SKILL_META = {
  "integer-number-classification": {
    "concept": "整數沒有小數或分數部分；有理數可寫成兩整數之比；無理數不能。判斷時先看題目要哪一類，再逐項檢查",
    "lectureConcept": "國中數與量單元把數分成整數、有理數、無理數等層級；判斷時先看能否寫成 p/q（q 為非零整數），並注意 0 與 1 的特殊地位，有限小數仍屬有理數",
    "formula": "",
    "stepGuide": [
      "先看題目要整數、有理數還是無理數",
      "整數看有無分數或小數部分；有理數看能否寫成 p/q",
      "根號數先化簡：√4=2 是有理數，√2 才是無理數",
      "有限小數、循環小數、分數都是有理數"
    ],
    "lectureMistakes": [
      "看到小數就當無理數，忽略有限小數仍是有理數",
      "把 1 當成質數或把 0 當成正整數"
    ],
    "variantMistakes": [
      "把有限小數誤判為無理數",
      "忽略負整數仍屬整數",
      "把分數與無理數混淆",
      "以為 0 是正整數或負整數"
    ]
  },
  "integer-positive-negative-meaning": {
    "concept": "正負數用來表示與基準量相比的增減方向，低於或虧損基準應記為負",
    "lectureConcept": "正負數不是單純大小，而是相對基準的方向：高於、收入、上升常用正號，低於、支出、下降常用負號；列式前要先約定基準點與正方向",
    "formula": "",
    "stepGuide": [
      "找出題目的基準量（海平面、0 元、0°C 等）",
      "判斷情境是高出還是低於基準",
      "高出基準記正、低於基準記負",
      "寫成帶正負號的數並核對單位"
    ],
    "lectureMistakes": [
      "只把數字變小卻不加負號",
      "基準點選錯導致正負顛倒"
    ],
    "variantMistakes": [
      "氣溫低於零卻寫成正數",
      "海平面下深度忘記加負號",
      "透支金額未用負數表示",
      "地下樓層與上升層數混淆"
    ]
  },
  "integer-number-line-position": {
    "concept": "數線上原點右側為正、左側為負，坐標由方向與到原點距離共同決定",
    "lectureConcept": "數線把數與位置對應：向右移動坐標增加、向左減少；寫坐標時要同時決定正負方向與距離，不可只寫距離而漏掉符號",
    "formula": "",
    "stepGuide": [
      "標出原點與正方向（向右為正）",
      "判斷點在原點左側或右側以決定正負",
      "量出到原點的單位距離",
      "合併方向與距離寫成坐標"
    ],
    "lectureMistakes": [
      "左側距離 4 寫成 4 而非 -4",
      "比較兩點位置時只看距離不看正負"
    ],
    "variantMistakes": [
      "左側點忘記加負號",
      "把距離當坐標直接書寫",
      "比較位置時誤以為左側較大",
      "原點左右坐標符號寫反"
    ]
  },
  "integer-number-comparison": {
    "concept": "整數與負數比大小要看數線位置，負數絕對值越大數值反而越小",
    "lectureConcept": "比較數的大小等同看數線上誰在右邊；正數大於零、零大於負數；兩負數比較時絕對值較小者反而較大，這是國中整數單元最常考的陷阱",
    "formula": "",
    "stepGuide": [
      "先在數線上標出各數的大概位置",
      "正數與負數先分層：正數大於零大於負數",
      "若兩數同為負，比較絕對值大小再反轉",
      "由左到右寫出大小關係或選最大最小"
    ],
    "lectureMistakes": [
      "兩負數比較時以為絕對值大者較大",
      "忽略 0 介於正負數之間"
    ],
    "variantMistakes": [
      "-8 與 -3 誤以為 -8 較大",
      "負數與正數大小關係搞反",
      "排序時未由左到右檢查",
      "把 0 當成最小負數"
    ]
  },
  "integer-opposite-number": {
    "concept": "相反數是指與原數相加為零的數，符號相反但絕對值相同",
    "lectureConcept": "數 a 的相反數是 -a，兩者相加為 0；0 的相反數仍是 0。相反數不是倒數、也不是絕對值，求 -a 時要特別注意 a 本身是否為負數",
    "formula": "a 的相反數為 -a，且 a + (-a) = 0",
    "stepGuide": [
      "確認題目要求的是相反數而非倒數或絕對值",
      "將原數的正負號改變",
      "若原數為負，相反數為其絕對值",
      "驗算兩數相加是否為 0"
    ],
    "lectureMistakes": [
      "把相反數當成倒數",
      "求 -(-4) 時只改一次符號"
    ],
    "variantMistakes": [
      "相反數與倒數混淆",
      "負數的相反數仍寫成負數",
      "0 的相反數誤寫成 1 或 -1",
      "雙重負號化簡錯誤"
    ]
  },
  "integer-absolute-value-basic": {
    "concept": "絕對值是數到原點的距離，距離不會是負數，所以絕對值的結果恆為非負",
    "lectureConcept": "絕對值 |a| 是 a 到數線原點的距離，因此永遠不為負；正數的絕對值是自己，負數的絕對值是其相反數，這是後續距離與方程式應用的基礎",
    "formula": "|a| = a（a ≥ 0）；|a| = -a（a < 0）",
    "stepGuide": [
      "判斷數是正、負還是零",
      "正數與零的絕對值等於本身",
      "負數的絕對值改為其相反數",
      "確認結果不為負數"
    ],
    "lectureMistakes": [
      "以為 |-3| = -3",
      "把絕對值與相反數混為一談"
    ],
    "variantMistakes": [
      "負數絕對值仍保留負號",
      "絕對值與平方混淆",
      "0 的絕對值誤判",
      "以為絕對值可為負"
    ]
  },
  "integer-absolute-value-distance": {
    "concept": "數線上兩點距離等於兩坐標差的絕對值，結果恆非負",
    "lectureConcept": "兩點距離與絕對值密切相關：數線上 A、B 兩點距離為兩坐標差的絕對值，與相減順序無關；到原點距離為坐標的絕對值，因此絕對值方程式通常有正負兩解",
    "formula": "距離 = |a - b|；|x| = k ⇒ x = k 或 x = -k",
    "stepGuide": [
      "寫出兩點坐標並相減",
      "對相減結果取絕對值得距離",
      "若求到原點距離為 k，列出 x = ±k",
      "檢查距離答案不為負"
    ],
    "lectureMistakes": [
      "距離寫成負數",
      "相減順序顛倒卻未取絕對值"
    ],
    "variantMistakes": [
      "距離結果為負",
      "忽略絕對值導致順序影響答案",
      "到原點距離只寫正解",
      "兩負數距離計算符號錯誤"
    ]
  },
  "integer-addition": {
    "concept": "整數加法依同號或異號分別處理：同號相加取共同符號，異號相減取絕對值較大者的符號",
    "lectureConcept": "整數加法可結合數線方向理解：加上正數向右移、加上負數向左移；同號相加把絕對值相加再保留符號，異號相加則看絕對值差與較大者的正負",
    "formula": "同號：|a|+|b| 再取共同符號；異號：||a|-|b|| 取絕對值較大者的符號",
    "stepGuide": [
      "判斷兩加數是否同號",
      "同號則絕對值相加並保留符號",
      "異號則絕對值相減取較大者的符號",
      "可用數線驗算最終位置"
    ],
    "lectureMistakes": [
      "異號相加直接把絕對值相加",
      "忽略符號只算數字部分"
    ],
    "variantMistakes": [
      "異號相加符號判斷錯誤",
      "同號相加卻相減",
      "正負抵消時未得 0",
      "數線方向與符號對應錯誤"
    ]
  },
  "integer-subtraction": {
    "concept": "減去一個數等於加上它的相反數，再依整數加法規則計算",
    "lectureConcept": "整數減法一律改寫成加法：a - b = a + (-b)；特別是減去負數會變成加正數，這是學生最容易出錯的符號轉換步驟",
    "formula": "a - b = a + (-b)",
    "stepGuide": [
      "把減法改寫成加上相反數",
      "將減數符號變號",
      "依整數加法規則合併",
      "用數線確認位移方向"
    ],
    "lectureMistakes": [
      "5 - (-3) 算成 2 而非 8",
      "減法未改寫就直接相減符號"
    ],
    "variantMistakes": [
      "減負數未變加法",
      "減正數符號處理錯誤",
      "連續減法只變一次號",
      "0 減負數方向搞錯"
    ]
  },
  "integer-multiplication-division": {
    "concept": "整數乘除符號規則：同號結果為正、異號結果為負，再計算絕對值乘除",
    "lectureConcept": "整數乘除先看符號個數：同號得正、異號得負；兩個負數相乘或相除結果為正。計算時先定符號，再處理絕對值的乘法或除法",
    "formula": "同號正、異號負；(-a)×(-b)=ab",
    "stepGuide": [
      "數出負號個數判斷結果正負",
      "同號取正、異號取負",
      "計算絕對值部分的乘積或商",
      "檢查能否整除並化簡"
    ],
    "lectureMistakes": [
      "負負得負",
      "只做絕對值運算忽略符號"
    ],
    "variantMistakes": [
      "異號相乘得正",
      "同號相除得負",
      "忽略負號個數",
      "除法未化為倒數（分數除法才需）"
    ]
  },
  "integer-mixed-operations": {
    "concept": "整數四則混合運算須遵守先乘除後加減，括號與次方優先於乘除",
    "lectureConcept": "混合運算順序是會考基本功：括號內最優先，其次次方，再來乘除由左到右，最後加減由左到右；違反順序常導致符號與數值雙重錯誤",
    "formula": "括號 → 次方 → 乘除 → 加減",
    "stepGuide": [
      "標出括號與次方並先計算",
      "再算乘除（由左而右）",
      "最後進行加減",
      "檢查符號是否因順序錯誤而改變"
    ],
    "lectureMistakes": [
      "由左到右一路加減乘除",
      "忽略次方只算一次乘法"
    ],
    "variantMistakes": [
      "先加後乘",
      "次方只乘底數一次",
      "括號外係數分配錯誤",
      "負數平方符號處理錯誤"
    ]
  },
  "integer-exponent-meaning": {
    "concept": "指數表示底數連乘次數，負數平方為正但負數奇次方可為負",
    "lectureConcept": "指數表示底數連乘的次數，不是把底數與指數直接相乘；特別注意負底數帶括號的平方與不帶括號的平方意義不同，這是符號題最常見的失分點",
    "formula": "aⁿ = a×a×…×a（n 個）；a⁰=1（a≠0）",
    "stepGuide": [
      "確認底數是否含括號",
      "把指數寫成連乘形式",
      "逐項相乘並注意負號個數",
      "化簡特殊指數 0 與 1"
    ],
    "lectureMistakes": [
      "2³ 算成 6 而非 8",
      "把指數當成乘數"
    ],
    "variantMistakes": [
      "指數與乘法混淆",
      "負底數平方符號錯",
      "a⁰ 誤為 0",
      "a¹ 誤寫成 1"
    ]
  },
  "integer-exponent-laws": {
    "concept": "同底數指數運算：相乘指數加、相除指數減、幂的幂指數乘",
    "lectureConcept": "指數律讓同底數的連乘連除可以合併：相乘時指數相加、相除時指數相減、再乘方時指數相乘；負指數代表倒數，底數必須相同才能直接套用",
    "formula": "aᵐ×aⁿ=aᵐ⁺ⁿ；aᵐ÷aⁿ=aᵐ⁻ⁿ；(aᵐ)ⁿ=aᵐⁿ；a⁻ⁿ=1/aⁿ",
    "stepGuide": [
      "確認是否同底數",
      "乘法則指數相加、除法則指數相減",
      "幂的幂則指數相乘",
      "負指數改寫為倒數並化簡"
    ],
    "lectureMistakes": [
      "2³×2² 把底數也相乘",
      "不同底數硬加指數"
    ],
    "variantMistakes": [
      "相乘卻把指數相乘",
      "相除指數相加",
      "幂的幂指數相加",
      "負指數倒數方向錯"
    ]
  },
  "integer-scientific-notation": {
    "concept": "科學記號是把很大或很小的數寫成係數乘以十的次方，且係數必須介於一到十之間不含十",
    "lectureConcept": "科學記號用來簡潔表示很大或很小的數：係數 a 必須在 1 到 10 之間（含 1、不含 10），整數位移決定 n 正負；這是閱讀新聞與科學情境的必備工具",
    "formula": "N = a×10ⁿ，1 ≤ a < 10",
    "stepGuide": [
      "把小數點移到第一個非零數字後",
      "數移動位數即為 n 的絕對值",
      "原數較大則 n 為正、較小則 n 為負",
      "確認係數 a 落在 1 到 10 之間"
    ],
    "lectureMistakes": [
      "係數寫成 36×10⁵ 而非 3.6×10⁶",
      "指數正負方向搞反"
    ],
    "variantMistakes": [
      "係數超出 1 到 10",
      "小數指數符號錯誤",
      "還原位數移動錯誤",
      "把 10 的次方與係數相乘混淆"
    ]
  },
  "integer-literacy-context": {
    "concept": "整數情境題需先建立正負方向與基準，再列加減算式或距離算式求解",
    "lectureConcept": "素養題把整數放在溫度、海拔、電梯、帳戶等真實情境；解題關鍵是翻譯情境為正負數與算式，並用絕對值或減法處理差距與變化量",
    "formula": "變化量 = 終點值 − 起點值；溫差可用絕對值",
    "stepGuide": [
      "定義基準與正方向",
      "把情境數據寫成正負數",
      "依題意列加減或距離算式",
      "檢查答案是否符合生活常理"
    ],
    "lectureMistakes": [
      "未先定正方向就列式",
      "溫差直接相減忘記取絕對值"
    ],
    "variantMistakes": [
      "溫差符號處理錯誤",
      "上升下降層數混淆",
      "透支與存款符號顛倒",
      "起訖點相減順序錯誤"
    ]
  },
  "fraction-factor-multiple": {
    "concept": "若整數 a 除以整數 b 的商為整數，則 b 是 a 的因數、a 是 b 的倍數",
    "lectureConcept": "因數與倍數描述整除關係：因數較小、倍數較大，兩者互為表述。判斷時用除法看商是否為整數，並能列出所有正因數或指定倍數",
    "formula": "a 是 b 的倍數 ⇔ b 是 a 的因數 ⇔ b|a",
    "stepGuide": [
      "確認兩數的整除關係",
      "用除法檢查商是否為整數",
      "區分因數（較小）與倍數（較大）",
      "必要時列出所有因數個數"
    ],
    "lectureMistakes": [
      "因數與倍數角色對調",
      "把 1 當成質數"
    ],
    "variantMistakes": [
      "因數倍數關係搞反",
      "忽略 1 與本身也是因數",
      "倍數判斷未整除",
      "因數個數漏列"
    ]
  },
  "fraction-prime-composite": {
    "concept": "質數只有 1 與本身兩個正因數，合數還有其他正因數，1 兩者皆非",
    "lectureConcept": "質數是整數的建築磚：只有 1 與自己兩個正因數；合數可再分解；1 既不是質數也不是合數。2 是最小質數且是唯一偶質數",
    "formula": "",
    "stepGuide": [
      "檢查正因數個數",
      "只有 1 與本身 → 質數",
      "還有其他因數 → 合數",
      "特別記住 1 與 2 的特殊性"
    ],
    "lectureMistakes": [
      "把 1 當質數",
      "以為所有偶數都是合數而忽略 2"
    ],
    "variantMistakes": [
      "1 當成質數",
      "合數判斷只看偶數",
      "質數含 0 或 1",
      "把 2 當成合數"
    ]
  },
  "fraction-prime-factorization": {
    "concept": "質因數分解是把合數寫成質數的連乘積，標準分解式每個質因數只出現一次",
    "lectureConcept": "質因數分解是 GCD、LCM 與分數化簡的基礎：反覆除以質數直到商為 1，最後寫成指數形式；同一合數的標準分解式唯一",
    "formula": "N = p₁^a × p₂^b × …（pᵢ 為質數）",
    "stepGuide": [
      "從最小質數 2 開始試除",
      "商仍為合數則繼續除下一質數",
      "全部寫成質數的乘積",
      "合併同底指數成標準分解式"
    ],
    "lectureMistakes": [
      "分解式仍含合數因數",
      "漏掉質因數 2"
    ],
    "variantMistakes": [
      "標準式含合數",
      "指數次方漏寫",
      "偶數未先除 2",
      "分解順序錯誤導致重複"
    ]
  },
  "fraction-gcd-basic": {
    "concept": "最大公因數是兩數所有公因數中最大的那個，可用質因數分解取較小次方",
    "lectureConcept": "GCD 表示兩數同時整除的最大整數；求法可用列舉法或質因數分解法：共同質因數取較小指數再相乘。互質時 GCD 為 1",
    "formula": "GCD(a,b) = 共同質因數取較小次方之積",
    "stepGuide": [
      "列出兩數質因數分解",
      "找出共同質因數",
      "各共同質因數取較小次方",
      "相乘得 GCD"
    ],
    "lectureMistakes": [
      "取較大次方而非較小",
      "把 LCM 算法用在 GCD"
    ],
    "variantMistakes": [
      "GCD 取較大次方",
      "互質時 GCD 寫成 0",
      "漏掉共同質因數",
      "列舉公因數時漏最大者"
    ]
  },
  "fraction-lcm-basic": {
    "concept": "最小公倍數是兩數的公倍數中最小的正整數，質因數分解取較大次方",
    "lectureConcept": "LCM 是兩數同時整除的最小正整數；分解後取所有出現過的質因數，每一質因數用較大的次方，再相乘。互質時 LCM 等於兩數乘積",
    "formula": "LCM(a,b) = 各質因數取較大次方之積",
    "stepGuide": [
      "分解兩數成質因數",
      "收集所有出現的質因數",
      "每一質因數取較大次方",
      "相乘得 LCM"
    ],
    "lectureMistakes": [
      "取較小次方算 LCM",
      "互質時未直接相乘"
    ],
    "variantMistakes": [
      "LCM 取較小次方",
      "漏掉非共同質因數",
      "互質 LCM 算法錯誤",
      "把 GCD 當 LCM"
    ]
  },
  "fraction-gcd-application": {
    "concept": "分組無剩且每組盡可能多時，每組數量為總量的最大公因數",
    "lectureConcept": "GCD 應用題關鍵字是「等長切割」「每組最多」「無剩餘」：總長或總數必須同時整除，因此取 GCD。與 LCM 的「同時再次」不同",
    "formula": "等分無剩且最大份數 → GCD",
    "stepGuide": [
      "辨認題意是否求等分且無剩",
      "確認是求最大份數或最大單位長",
      "對相關數量求 GCD",
      "檢查答案能整除所有總量"
    ],
    "lectureMistakes": [
      "把同時再次問題誤用 GCD",
      "求 LCM 而非 GCD"
    ],
    "variantMistakes": [
      "繩長切割用 LCM",
      "每組最多卻求 LCM",
      "忽略無剩餘條件",
      "單位未統一就求 GCD"
    ]
  },
  "fraction-lcm-application": {
    "concept": "兩事件同時再次發生的最短間隔為兩週期的最小公倍數",
    "lectureConcept": "LCM 應用於「同時」「再次一起」「最小共同週期」；也可處理等距排列使間距最大但起點對齊的情境，要與 GCD 關鍵字區分",
    "formula": "同時再次間隔 = LCM(週期₁, 週期₂)",
    "stepGuide": [
      "確認題意求同時再次或共同週期",
      "列出相關週期或間隔",
      "求 LCM",
      "驗算是否為最小正整數解"
    ],
    "lectureMistakes": [
      "同時再次卻求 GCD",
      "把間距問題與週期混淆"
    ],
    "variantMistakes": [
      "響鈴週期用 GCD",
      "同時發信間隔算錯",
      "列數問題誤用 LCM",
      "未取最小正解"
    ]
  },
  "fraction-compare": {
    "concept": "異分母分數比大小須先通分或化小數，負分數則絕對值小者較大",
    "lectureConcept": "分數比較常用通分、交叉相乘或化小數；正分數越接近 1 越大；負分數則絕對值越小數值越大。帶分數可先化假分數再比",
    "formula": "a/b 與 c/d：比較 ad 與 bc",
    "stepGuide": [
      "判斷是否同分母或同分子",
      "異分母則通分或交叉相乘",
      "負分數注意絕對值與大小反向",
      "與小數比較時先統一形式"
    ],
    "lectureMistakes": [
      "異分母直接比分子",
      "負分數絕對值大者當較大"
    ],
    "variantMistakes": [
      "未通分就比大小",
      "負分數比較方向錯",
      "小數與分數未統一",
      "帶分數未化假分數"
    ]
  },
  "fraction-add-subtract": {
    "concept": "分數加減必須先通分使分母相同，再對分子加減並化簡",
    "lectureConcept": "分數加減的核心是通分：找公分母（通常用 LCM），分子加減後分母不變，最後約分。帶分數可先化假分數或整數與分數部分分開處理",
    "formula": "a/b ± c/d：先通分為同分母再分子運算",
    "stepGuide": [
      "找兩分母的最小公倍數當公分母",
      "擴分使分母相同",
      "分子加減、分母不變",
      "約分並檢查是否需帶分數"
    ],
    "lectureMistakes": [
      "分子分母直接相加",
      "通分時只擴一邊"
    ],
    "variantMistakes": [
      "分母也相加",
      "通分錯誤",
      "減法分子符號錯",
      "未約分"
    ]
  },
  "fraction-multiply-divide": {
    "concept": "分數乘法分子乘分子、分母乘分母；除法改乘除數的倒數",
    "lectureConcept": "分數乘除與加減不同：乘法可直接分子分母分別相乘；除法則將除數倒數後相乘。計算前可先約分簡化，帶分數宜先化假分數",
    "formula": "a/b × c/d = ac/bd；a/b ÷ c/d = a/b × d/c",
    "stepGuide": [
      "除法先改寫成乘倒數",
      "分子分母分別相乘",
      "能約分就先約分",
      "結果化為最簡分數"
    ],
    "lectureMistakes": [
      "除法未乘倒數",
      "加法規則誤用在乘法"
    ],
    "variantMistakes": [
      "除法直接分子相除",
      "倒數方向寫反",
      "約分不完整",
      "帶分數未先化假分數"
    ]
  },
  "fraction-mixed-number": {
    "concept": "帶分數含整數與真分數部分，與假分數可互化：整數×分母+分子",
    "lectureConcept": "帶分數方便閱讀數量，計算時常化為假分數：整數部分乘分母再加分子，分母不變。化回帶分數則用除法得商與餘數",
    "formula": "a b/c = (a×c+b)/c",
    "stepGuide": [
      "帶分數化假分數：整×分母+分子",
      "假分數化帶分數：分子÷分母",
      "運算後再決定是否化回帶分數",
      "確認真分數部分小於分母"
    ],
    "lectureMistakes": [
      "1 3/4 化成 4/7",
      "餘數當分母"
    ],
    "variantMistakes": [
      "帶分數化假分數分子錯",
      "假分數化帶分數商餘對調",
      "整數部分未乘分母",
      "真分數部分超過分母"
    ]
  },
  "fraction-complex-fraction-basic": {
    "concept": "繁分數化簡等於分子除以分母分數，再依分數除法規則計算",
    "lectureConcept": "繁分數是分數的分數，化簡時把主分數線看成除號：分子分數除以分母分數，等於乘除數的倒數。這是進階分數運算的橋梁",
    "formula": "(a/b)/(c/d) = a/b × d/c",
    "stepGuide": [
      "辨認繁分數的分子與分母分數",
      "改寫成除法算式",
      "除數分數取倒數改乘法",
      "乘完約分化簡"
    ],
    "lectureMistakes": [
      "分子分母直接上下相乘",
      "忘記除法要乘倒數"
    ],
    "variantMistakes": [
      "繁分數當一般分數加",
      "倒數取錯方向",
      "只算分子不算分母",
      "約分步驟遺漏"
    ]
  },
  "fraction-percent-discount": {
    "concept": "百分率、折扣、成數都是基準量的比例，打折用乘法而非直接減折數",
    "lectureConcept": "折扣與成數描述售價占原價的比例：8 折是 80%、7 成是 70%；漲價則用 100% 加漲幅。列式時先確認基準量，再乘百分率",
    "formula": "售價 = 原價 × 折扣百分率",
    "stepGuide": [
      "確認基準量是原價或新價",
      "把折扣成數換算成百分率",
      "基準量乘以百分率",
      "漲價則用 1 加漲幅比例"
    ],
    "lectureMistakes": [
      "8 折從原價減 8 元",
      "把 8 折當 8%"
    ],
    "variantMistakes": [
      "打折用減法",
      "成數換算錯誤",
      "漲價百分率基準錯",
      "折扣與折數金額混淆"
    ]
  },
  "fraction-base-quantity": {
    "concept": "基準量是百分率所對應的整體，比較量除以基準量可得百分率",
    "lectureConcept": "百分率問題三分量：基準量、比較量、百分率。基準量通常是「全部」「原價」「總數」；已知部分與百分率時，基準量 = 部分 ÷ 百分率",
    "formula": "百分率 = 比較量 ÷ 基準量；基準量 = 比較量 ÷ 百分率",
    "stepGuide": [
      "圈出題目中的基準量關鍵字",
      "區分比較量與基準量",
      "選擇乘或除百分率列式",
      "檢查答案量級是否合理"
    ],
    "lectureMistakes": [
      "把比較量當基準量",
      "百分率直接當分母不加 %"
    ],
    "variantMistakes": [
      "基準量與比較量對調",
      "反推原價用乘法",
      "百分率小數點移動錯",
      "基準量關鍵字判斷錯"
    ]
  },
  "fraction-literacy-context": {
    "concept": "分數情境題要辨識單位量與基準量，分次取用時逐段計算剩餘",
    "lectureConcept": "分數素養題常結合用量、分配、剩餘：「幾分之幾桶」可能要先換算實際公升；多次取用時每步的基準量可能不同，需逐段列式",
    "formula": "部分量 = 基準量 × 分數",
    "stepGuide": [
      "釐清每次取用所對應的基準量",
      "分數部分換算成實際數量",
      "加總已用量並求剩餘",
      "檢查單位一致與答案合理性"
    ],
    "lectureMistakes": [
      "把分數當人數直接相減",
      "多次取用卻只用一個基準量"
    ],
    "variantMistakes": [
      "分數桶數未換算",
      "剩餘量基準錯誤",
      "加總參加人數重複計算",
      "帶分數長度減法錯誤"
    ]
  },
  "linear-expression-substitution": {
    "concept": "文字式先依題意正確列式，再將指定數值代入並依運算順序求值",
    "lectureConcept": "一元一次式的起點是翻譯語句：倍數、和差、倒數關係要寫對；代入時括號不可漏，負數代入更要加括號避免符號錯誤",
    "formula": "代入 x = k 於 f(x) 求 f(k)",
    "stepGuide": [
      "依語句列出文字式",
      "將指定值代入並為負數加括號",
      "依運算順序化簡",
      "檢查同類項是否合併完畢"
    ],
    "lectureMistakes": [
      "「3 倍減 4」寫成 3-4x",
      "代入負數未加括號"
    ],
    "variantMistakes": [
      "列式順序顛倒",
      "代入後運算順序錯",
      "同類項未合併",
      "負數代入符號錯"
    ]
  },
  "linear-expression-simplify": {
    "concept": "一元一次式化簡只能合併同類項，去括號時括號外係數要分配到每一項",
    "lectureConcept": "化簡文字式的規則與整數運算相同：同類項（相同文字部分）才能加減；分配律去括號時符號容易出錯，尤其括號前是負號時要變號",
    "formula": "ax + bx = (a+b)x；a(b+c) = ab+ac",
    "stepGuide": [
      "先去括號並注意符號",
      "找出同類項",
      "合併同類項係數",
      "常數項單獨合併"
    ],
    "lectureMistakes": [
      "3x+2y 合併成 5x",
      "去括號漏乘某一項"
    ],
    "variantMistakes": [
      "異類項硬合併",
      "負號去括號未變號",
      "分配律漏項",
      "常數項歸類錯誤"
    ]
  },
  "linear-equation-balance-property": {
    "concept": "等量公理：等式兩邊同加同減同乘同除（除數非零）結果仍相等",
    "lectureConcept": "方程式像天平：兩邊同時做相同運算，等式仍成立。移項本質是兩邊同加減同一項；解題時每一步都要維持兩邊平衡",
    "formula": "若 A=B，則 A±c=B±c，A×c=B×c，A÷c=B÷c（c≠0）",
    "stepGuide": [
      "確認等式兩邊結構",
      "選擇同加、同減、同乘或同除消去項",
      "保持兩邊運算一致",
      "逐步化到 x 單獨在一邊"
    ],
    "lectureMistakes": [
      "只對一邊運算",
      "移項忘記變號"
    ],
    "variantMistakes": [
      "只變一邊",
      "移項符號未變",
      "除以零",
      "同乘時漏乘常數項"
    ]
  },
  "linear-equation-basic-solving": {
    "concept": "一元一次方程式解法：移項合併同類項，再將 x 係數化為 1",
    "lectureConcept": "基本解法三步：整理同類項、移項使含 x 項在一邊常數在另一邊、係數化 1。係數為分數時可乘以分母，為負數時除以負數要變號",
    "formula": "ax + b = c ⇒ x = (c-b)/a（a≠0）",
    "stepGuide": [
      "合併同類項整理兩邊",
      "移項將 x 項與常數分開",
      "x 係數化 1",
      "代入原式檢查（必要時）"
    ],
    "lectureMistakes": [
      "移項未變號",
      "係數化 1 時只除 x 不除整項"
    ],
    "variantMistakes": [
      "移項符號錯",
      "係數化 1 漏除",
      "負係數除法符號錯",
      "常數項未移項"
    ]
  },
  "linear-equation-parentheses": {
    "concept": "含括號方程式先去括號（分配律），再移項合併求解",
    "lectureConcept": "括號方程式要先用分配律展開：括號外係數乘到每一項；括號前是負號時，展開後每一項都要變號。展開後再依基本解法處理",
    "formula": "a(bx+c)=abx+ac",
    "stepGuide": [
      "用分配律去括號",
      "括號前負號則全項變號",
      "合併同類項",
      "移項並係數化 1"
    ],
    "lectureMistakes": [
      "2(x+3) 只乘 x 不乘 3",
      "負號去括號未變號"
    ],
    "variantMistakes": [
      "分配律漏常數項",
      "負號展開錯誤",
      "展開後同類項未合併",
      "移項順序混亂"
    ]
  },
  "linear-equation-fractions": {
    "concept": "含分母方程式可兩邊同乘公分母消去分數，再解整數係數方程式",
    "lectureConcept": "分數係數方程式兩邊同乘各分母的最小公倍數，可一次消分母；記得用分配律展開每一項，不可只乘含 x 的項",
    "formula": "兩邊同乘 LCM(分母)",
    "stepGuide": [
      "找出所有分母的 LCM",
      "兩邊同乘 LCM 去分母",
      "展開並合併同類項",
      "依基本步驟解 x"
    ],
    "lectureMistakes": [
      "去分母時漏乘常數項",
      "LCM 選錯"
    ],
    "variantMistakes": [
      "只乘一邊",
      "去分母漏項",
      "LCM 計算錯誤",
      "分數係數未消淨"
    ]
  },
  "linear-equation-check-solution": {
    "concept": "檢查方程式解要將值代入原式兩邊，兩邊相等才是正確解",
    "lectureConcept": "解方程式後應養成檢查習慣：把解代入左右兩邊分別計算，若相等則正確；若不等可能是計算錯或該值根本不是解",
    "formula": "代入 x = k，若左邊 = 右邊則 k 為解",
    "stepGuide": [
      "把候選解代入方程式左邊",
      "同值代入右邊",
      "比較兩邊是否相等",
      "不等則該值不是解"
    ],
    "lectureMistakes": [
      "只算一邊就下結論",
      "用化簡後的式子檢查卻非原式"
    ],
    "variantMistakes": [
      "只驗左邊",
      "代入錯誤變數",
      "運算順序錯導致誤判",
      "把解當成題目條件"
    ]
  },
  "linear-equation-age-problem": {
    "concept": "年齡問題要對兩人同時加減相同年數，並依倍數關係列方程式",
    "lectureConcept": "年齡題的時間軸要一致：幾年後兩人都加同一年數；幾年前則都減。倍數關係列在相同時間點上，不可一個用現在、一個用未來",
    "formula": "n 年後年齡 = 現在年齡 + n",
    "stepGuide": [
      "設現在年齡未知數",
      "把「幾年後/前」翻譯成 ±n",
      "依倍數或和差關係列方程式",
      "解出後檢查年齡是否合理"
    ],
    "lectureMistakes": [
      "只替一人加年數",
      "倍數關係時間點不一致"
    ],
    "variantMistakes": [
      "年齡和未拆兩人",
      "幾年後只加一次",
      "倍數列在錯誤時間點",
      "解出負年齡未檢查"
    ]
  },
  "linear-equation-money-problem": {
    "concept": "金錢問題依付錢、找零、單價數量關係列一元一次方程式",
    "lectureConcept": "金錢應用題常用總價等於單價乘以數量、找零等於付款減花費、餘額變化等於收入減支出等關係；列式前務必統一單位並確認所求的是單價、數量還是餘額",
    "formula": "找零 = 付款 − 花費；總價 = 單價 × 數量",
    "stepGuide": [
      "整理付款、花費、找零或餘額關係",
      "設未知單價或數量",
      "列一元一次方程式",
      "解後檢查金額是否為正"
    ],
    "lectureMistakes": [
      "找零 = 付錢 + 花費",
      "混合單價未先算總價"
    ],
    "variantMistakes": [
      "找零公式寫反",
      "數量單價對調",
      "混合商品未分項",
      "存款提款符號錯"
    ]
  },
  "linear-equation-rate-problem": {
    "concept": "行程問題核心公式：距離 = 速率 × 時間，同向追及用速率差",
    "lectureConcept": "速率問題先畫簡圖：同向追及距離差 ÷ 速率差 = 時間；相向而行則用距離和 ÷ 速率和。單位要統一（公里/小時等）",
    "formula": "D = r × t；追及時間 = 距離差 ÷ 速率差",
    "stepGuide": [
      "確認相向、同向或追及情境",
      "選擇距離和或距離差公式",
      "速率與時間單位統一",
      "列式求解並檢查時間為正"
    ],
    "lectureMistakes": [
      "追及用速率和而非差",
      "距離時間單位不統一"
    ],
    "variantMistakes": [
      "追及公式用加",
      "時間距離對調",
      "平均速率直接相加",
      "單位換算錯誤"
    ]
  },
  "linear-equation-distribution-problem": {
    "concept": "分配問題總數等於每人份數乘人數再加上剩餘（或減去不足）",
    "lectureConcept": "分配題典型模型：總數 = 人數 × 每人數 + 剩餘；若不足則總數 = 人數 × 每人數 − 不足。列式前要先分清剩還是缺",
    "formula": "總數 = n × 每人量 + 剩餘",
    "stepGuide": [
      "判斷是剩餘還是不足",
      "寫總數與人數、每人量的關係",
      "列一元一次方程式",
      "解出總數或人數並驗算"
    ],
    "lectureMistakes": [
      "剩餘當成減項",
      "每人量與人數對調"
    ],
    "variantMistakes": [
      "剩餘用減法列式",
      "不足仍用加剩餘",
      "人數與每份混淆",
      "總數公式顛倒"
    ]
  },
  "linear-equation-consecutive-integers": {
    "concept": "連續整數差 1、連續偶數差 2，設第一個為 x 再表達其餘",
    "lectureConcept": "連續數問題用單一未知數表示全部：連續整數 x, x+1, x+2；連續偶數 x, x+2。依和、積或關係列方程式，注意偶數與奇數間隔不同",
    "formula": "連續整數：x, x+1, x+2；連續偶數：x, x+2",
    "stepGuide": [
      "判斷連續整數或連續偶/奇數",
      "設最小者為 x 並寫出其餘",
      "依和或關係列方程式",
      "解 x 再求題目要求的特定項"
    ],
    "lectureMistakes": [
      "連續偶數仍差 1",
      "設中間數導致式子複雜"
    ],
    "variantMistakes": [
      "連續偶數差 1",
      "和的項數漏列",
      "設未知數位置不當",
      "解最大項卻只答 x"
    ]
  },
  "linear-equation-reasonableness": {
    "concept": "應用題解出 x 後要檢查是否符合實際：長度、人數、年齡須合理",
    "lectureConcept": "代數解不一定都是題解：長度、面積、人數、年齡等需符合現實；負數、非整數人數通常不合理。合理性檢查是會考素養的重要環節",
    "formula": "",
    "stepGuide": [
      "先完成代數求解",
      "對照題意檢查正負與單位",
      "人數、件數是否應為整數",
      "不合理則重新檢視列式"
    ],
    "lectureMistakes": [
      "負年齡直接當答案",
      "2.5 人四捨五入"
    ],
    "variantMistakes": [
      "負長度當答案",
      "人數非整數未質疑",
      "忽略題意條件",
      "只驗代數不驗情境"
    ]
  },
  "linear-equation-plan-comparison": {
    "concept": "方案比較要在相同使用量下計算各方案總費用，再比大小",
    "lectureConcept": "月租、通話費、票價等方案比較：固定費 + 變動費 × 用量 = 總費。必須在相同用量下分別計算各方案，必要時也可列方程式求臨界用量",
    "formula": "總費 = 固定費 + 單價 × 用量",
    "stepGuide": [
      "寫出各方案的總費公式",
      "代入相同用量計算",
      "比較總費大小",
      "必要時解兩式相等求臨界點"
    ],
    "lectureMistakes": [
      "只看月租不看變動費",
      "用量不同卻直接比"
    ],
    "variantMistakes": [
      "用量不一致就比較",
      "固定費漏加",
      "單價單位搞錯",
      "臨界點兩邊未驗算"
    ]
  },
  "linear-equation-literacy-context": {
    "concept": "方程式素養題需結合節能、幾何量或活動費用等情境正確設未知數列式",
    "lectureConcept": "素養應用整合節水百分比、周長長寬關係、報名費等真實情境：先設未知數、翻譯關係成方程式，解後還要回覆題目所問的實際量",
    "formula": "依情境選擇：周長 = 2(長+寬) 等",
    "stepGuide": [
      "讀懂情境並設適當未知數",
      "把關係翻譯成方程式",
      "解方程式得未知數",
      "回代求題目最終所問量"
    ],
    "lectureMistakes": [
      "節水 20% 直接減 20 公升",
      "周長公式漏乘 2"
    ],
    "variantMistakes": [
      "百分比當絕對量減",
      "長寬關係列錯",
      "總收入公式漏括號",
      "解 x 卻未答題目所求"
    ]
  }
};

const RAW_Q = {
  "integer-number-classification": [
    [
      "下列哪一個數是整數？",
      [
        "-7",
        "1/2",
        "0.333…",
        "√2"
      ],
      0,
      "整數包含正整數、0、負整數。-7 是負整數。"
    ],
    [
      "下列哪一個數是有理數？",
      [
        "-3/4",
        "π",
        "√5",
        "√7"
      ],
      0,
      "-3/4 可寫成兩整數比，是有理數。"
    ],
    [
      "下列哪一個數不是有理數？",
      [
        "√2",
        "-5",
        "0",
        "3/8"
      ],
      0,
      "√2 無法寫成兩整數比，是無理數。"
    ],
    [
      "0 屬於下列哪一類？",
      [
        "整數",
        "正整數",
        "負整數",
        "無理數"
      ],
      0,
      "0 是整數，但不是正整數或負整數。"
    ]
  ],
  "integer-positive-negative-meaning": [
    [
      "某地氣溫比 0°C 低 5°C，應記為？",
      [
        "-5°C",
        "+5°C",
        "0°C",
        "10°C"
      ],
      0,
      "低於 0 用負數表示。"
    ],
    [
      "潛水艇在海平面下 20 公尺，以海平面為基準可記為？",
      [
        "-20 公尺",
        "+20 公尺",
        "0 公尺",
        "20 公尺"
      ],
      0,
      "海平面下為負方向。"
    ],
    [
      "帳戶透支 300 元，以 0 元為基準可記為？",
      [
        "-300 元",
        "+300 元",
        "0 元",
        "600 元"
      ],
      0,
      "透支表示比 0 少，用負數。"
    ],
    [
      "電梯從 1 樓下降 3 層到地下 2 樓，地下 2 樓可記為？",
      [
        "-2 樓",
        "+2 樓",
        "-3 樓",
        "+3 樓"
      ],
      0,
      "地下樓層以負數表示。"
    ]
  ],
  "integer-number-line-position": [
    [
      "數線上 A 在原點左側 4 單位，A 的坐標為？",
      [
        "-4",
        "4",
        "-3",
        "0"
      ],
      0,
      "左側為負，距離 4 即 -4。"
    ],
    [
      "數線上 B 在原點右側 7 單位，B 的坐標為？",
      [
        "7",
        "-7",
        "0",
        "14"
      ],
      0,
      "右側為正。"
    ],
    [
      "A(-3)、B(5) 在數線上，B 在 A 的哪一側？",
      [
        "右側",
        "左側",
        "重合",
        "無法判斷"
      ],
      0,
      "5 > -3，B 在右側。"
    ],
    [
      "原點左側 2 單位、右側 6 單位的兩點坐標依序為？",
      [
        "-2 與 6",
        "2 與 -6",
        "-6 與 2",
        "2 與 6"
      ],
      0,
      "左負右正。"
    ]
  ],
  "integer-number-comparison": [
    [
      "比較 -8 與 -3 的大小。",
      [
        "-8 < -3",
        "-8 > -3",
        "-8 = -3",
        "無法比較"
      ],
      0,
      "負數絕對值越大，數值越小。"
    ],
    [
      "下列何者正確？",
      [
        "-1 > -5",
        "-1 < -5",
        "-5 > 0",
        "-1 > 0"
      ],
      0,
      "-1 在數線上較右。"
    ],
    [
      "-12、-7、0 由小到大排列為？",
      [
        "-12, -7, 0",
        "-7, -12, 0",
        "0, -7, -12",
        "-12, 0, -7"
      ],
      0,
      "越左越小。"
    ],
    [
      "下列哪一個數最大？",
      [
        "3",
        "-2",
        "-9",
        "0"
      ],
      0,
      "正數大於 0 與負數。"
    ]
  ],
  "integer-opposite-number": [
    [
      "-6 的相反數為？",
      [
        "6",
        "-6",
        "0",
        "1/6"
      ],
      0,
      "相反數改變正負。"
    ],
    [
      "7 的相反數為？",
      [
        "-7",
        "7",
        "0",
        "1/7"
      ],
      0,
      "a 的相反數是 -a。"
    ],
    [
      "0 的相反數為？",
      [
        "0",
        "1",
        "-1",
        "無"
      ],
      0,
      "0 的相反數仍是 0。"
    ],
    [
      "若 a = -4，則 -a 為？",
      [
        "4",
        "-4",
        "0",
        "8"
      ],
      0,
      "-(-4)=4。"
    ]
  ],
  "integer-absolute-value-basic": [
    [
      "|-9| 的值為？",
      [
        "9",
        "-9",
        "0",
        "18"
      ],
      0,
      "絕對值是到原點距離。"
    ],
    [
      "|5| 的值為？",
      [
        "5",
        "-5",
        "0",
        "10"
      ],
      0,
      "正數的絕對值是自己。"
    ],
    [
      "|0| 的值為？",
      [
        "0",
        "1",
        "-1",
        "無"
      ],
      0,
      "原點距離為 0。"
    ],
    [
      "下列何者正確？",
      [
        "|-3| = 3",
        "|-3| = -3",
        "|3| = -3",
        "|-3| = 0"
      ],
      0,
      "絕對值非負。"
    ]
  ],
  "integer-absolute-value-distance": [
    [
      "數線上 -2 與 5 的距離為？",
      [
        "7",
        "3",
        "-7",
        "10"
      ],
      0,
      "距離 = |5-(-2)|=7。"
    ],
    [
      "| -4 - 3 | 表示兩點距離，其值為？",
      [
        "7",
        "1",
        "-7",
        "12"
      ],
      0,
      "|-7|=7。"
    ],
    [
      "A(-8)、B(-1) 的距離為？",
      [
        "7",
        "9",
        "-9",
        "8"
      ],
      0,
      "|-1-(-8)|=7。"
    ],
    [
      "到原點距離為 6 的點可表示為？",
      [
        "6 或 -6",
        "只有 6",
        "只有 -6",
        "0"
      ],
      0,
      "|x|=6 → x=±6。"
    ]
  ],
  "integer-addition": [
    [
      "計算 (-3) + 8。",
      [
        "5",
        "-5",
        "11",
        "-11"
      ],
      0,
      "從 -3 向右 8 單位得 5。"
    ],
    [
      "計算 (-7) + (-2)。",
      [
        "-9",
        "9",
        "-5",
        "5"
      ],
      0,
      "同號相加，絕對值相加再取負。"
    ],
    [
      "計算 4 + (-9)。",
      [
        "-5",
        "5",
        "13",
        "-13"
      ],
      0,
      "異號相減，取絕對值較大者的符號。"
    ],
    [
      "計算 (-1) + 1。",
      [
        "0",
        "2",
        "-2",
        "1"
      ],
      0,
      "相反數相加為 0。"
    ]
  ],
  "integer-subtraction": [
    [
      "計算 5 - (-3)。",
      [
        "8",
        "2",
        "-8",
        "-2"
      ],
      0,
      "減負等於加正：5+3=8。"
    ],
    [
      "計算 (-4) - 6。",
      [
        "-10",
        "10",
        "2",
        "-2"
      ],
      0,
      "(-4)+(-6)=-10。"
    ],
    [
      "計算 (-2) - (-7)。",
      [
        "5",
        "-5",
        "9",
        "-9"
      ],
      0,
      "(-2)+7=5。"
    ],
    [
      "計算 0 - (-5)。",
      [
        "5",
        "-5",
        "0",
        "10"
      ],
      0,
      "0+5=5。"
    ]
  ],
  "integer-multiplication-division": [
    [
      "計算 (-3) × 4。",
      [
        "-12",
        "12",
        "-7",
        "7"
      ],
      0,
      "異號相乘為負。"
    ],
    [
      "計算 (-5) × (-2)。",
      [
        "10",
        "-10",
        "7",
        "-7"
      ],
      0,
      "同號相乘為正。"
    ],
    [
      "計算 (-12) ÷ 3。",
      [
        "-4",
        "4",
        "-9",
        "9"
      ],
      0,
      "異號相除為負。"
    ],
    [
      "計算 (-8) ÷ (-4)。",
      [
        "2",
        "-2",
        "4",
        "-4"
      ],
      0,
      "同號相除為正。"
    ]
  ],
  "integer-mixed-operations": [
    [
      "計算 6 + 2 × (-3)。",
      [
        "0",
        "24",
        "-12",
        "12"
      ],
      0,
      "先乘後加：6+(-6)=0。"
    ],
    [
      "計算 (-4) × 2 + 10。",
      [
        "2",
        "-2",
        "18",
        "-18"
      ],
      0,
      "(-8)+10=2。"
    ],
    [
      "計算 15 - 3 × (-2)。",
      [
        "21",
        "9",
        "27",
        "6"
      ],
      0,
      "15-(-6)=21。"
    ],
    [
      "計算 (-2)² + 1。",
      [
        "5",
        "-3",
        "3",
        "-5"
      ],
      0,
      "(-2)²=4，4+1=5。"
    ]
  ],
  "integer-exponent-meaning": [
    [
      "2 × 2 × 2 可記成？",
      [
        "2³",
        "2×3",
        "3²",
        "2+3"
      ],
      0,
      "同底連乘 3 次。"
    ],
    [
      "(-3)² 的值為？",
      [
        "9",
        "-9",
        "6",
        "-6"
      ],
      0,
      "負數平方為正。"
    ],
    [
      "5¹ 的值為？",
      [
        "5",
        "1",
        "0",
        "25"
      ],
      0,
      "任何數的 1 次方是自己。"
    ],
    [
      "10⁰ 的值為？",
      [
        "1",
        "0",
        "10",
        "100"
      ],
      0,
      "a≠0 時 a⁰=1。"
    ]
  ],
  "integer-exponent-laws": [
    [
      "2³ × 2² 可化簡為？",
      [
        "2⁵",
        "2⁶",
        "4⁵",
        "2¹"
      ],
      0,
      "同底相乘指數加。"
    ],
    [
      "5⁴ ÷ 5² 可化簡為？",
      [
        "5²",
        "5⁶",
        "5⁸",
        "25²"
      ],
      0,
      "同底相除指數減。"
    ],
    [
      "(3²)³ 可化簡為？",
      [
        "3⁶",
        "3⁵",
        "9³",
        "3⁸"
      ],
      0,
      "幂的幂指數相乘。"
    ],
    [
      "2⁻² 的值為？",
      [
        "1/4",
        "4",
        "-4",
        "-1/4"
      ],
      0,
      "負指數取倒數。"
    ]
  ],
  "integer-scientific-notation": [
    [
      "3600000 的科學記號為？",
      [
        "3.6×10⁶",
        "36×10⁵",
        "3.6×10⁵",
        "0.36×10⁷"
      ],
      0,
      "係數須 1≤a<10。"
    ],
    [
      "0.00052 的科學記號為？",
      [
        "5.2×10⁻⁴",
        "52×10⁻⁵",
        "5.2×10⁴",
        "0.52×10⁻³"
      ],
      0,
      "小數點右移 4 位。"
    ],
    [
      "4.2×10³ 表示的數為？",
      [
        "4200",
        "420",
        "42000",
        "0.0042"
      ],
      0,
      "小數點右移 3 位。"
    ],
    [
      "1.5×10⁻² 表示的數為？",
      [
        "0.015",
        "0.15",
        "150",
        "0.0015"
      ],
      0,
      "負指數向左移。"
    ]
  ],
  "integer-literacy-context": [
    [
      "某市週一最高溫 3°C、最低溫 -4°C，溫差為？",
      [
        "7°C",
        "1°C",
        "-1°C",
        "4°C"
      ],
      0,
      "溫差 = |3-(-4)|=7。"
    ],
    [
      "潛水艇在海面下 15 公尺，上升 8 公尺後位置為？",
      [
        "-7 公尺",
        "-23 公尺",
        "7 公尺",
        "-8 公尺"
      ],
      0,
      "-15+8=-7。"
    ],
    [
      "某帳戶存 500 元後支出 800 元，餘額為？",
      [
        "-300 元",
        "300 元",
        "1300 元",
        "-1300 元"
      ],
      0,
      "500-800=-300。"
    ],
    [
      "電梯從 -2 樓到 5 樓共上升幾層？",
      [
        "7 層",
        "3 層",
        "5 層",
        "2 層"
      ],
      0,
      "5-(-2)=7。"
    ]
  ],
  "fraction-factor-multiple": [
    [
      "24 的因數中，下列何者正確？",
      [
        "6 是 24 的因數",
        "24 是 6 的因數",
        "6 不是 24 的倍數",
        "24 不是 6 的倍數"
      ],
      0,
      "24÷6=4 為整數。"
    ],
    [
      "下列哪一個是 15 的倍數？",
      [
        "45",
        "10",
        "8",
        "7"
      ],
      0,
      "45÷15=3。"
    ],
    [
      "18 與 6 的關係為？",
      [
        "6 是 18 的因數",
        "18 是 6 的因數",
        "無關",
        "互為質數"
      ],
      0,
      "18=6×3。"
    ],
    [
      "30 的所有正因數個數為？",
      [
        "8 個",
        "6 個",
        "4 個",
        "10 個"
      ],
      0,
      "1,2,3,5,6,10,15,30 共 8 個。"
    ]
  ],
  "fraction-prime-composite": [
    [
      "下列何者是質數？",
      [
        "29",
        "21",
        "1",
        "39"
      ],
      0,
      "29 只有 1 與 29 兩個正因數。"
    ],
    [
      "下列何者是合數？",
      [
        "35",
        "2",
        "13",
        "17"
      ],
      0,
      "35=5×7 還有其他因數。"
    ],
    [
      "1 的敘述何者正確？",
      [
        "1 既不是質數也不是合數",
        "1 是質數",
        "1 是合數",
        "1 是最小質數"
      ],
      0,
      "1 只有一個正因數。"
    ],
    [
      "最小的質數是？",
      [
        "2",
        "3",
        "1",
        "0"
      ],
      0,
      "2 是唯一的偶質數。"
    ]
  ],
  "fraction-prime-factorization": [
    [
      "36 的標準分解式為？",
      [
        "2²×3²",
        "6²",
        "2×18",
        "4×9"
      ],
      0,
      "36=4×9=2²×3²。"
    ],
    [
      "60 的標準分解式為？",
      [
        "2²×3×5",
        "6×10",
        "2×30",
        "4×15"
      ],
      0,
      "60=4×15=2²×3×5。"
    ],
    [
      "72 的質因數中一定包含？",
      [
        "2",
        "5",
        "7",
        "11"
      ],
      0,
      "72 是偶數，含質因數 2。"
    ],
    [
      "90 的標準分解式為？",
      [
        "2×3²×5",
        "9×10",
        "2×45",
        "3×30"
      ],
      0,
      "90=2×9×5=2×3²×5。"
    ]
  ],
  "fraction-gcd-basic": [
    [
      "12 與 18 的最大公因數為？",
      [
        "6",
        "3",
        "36",
        "2"
      ],
      0,
      "公因數 1,2,3,6，最大為 6。"
    ],
    [
      "24 與 36 的最大公因數為？",
      [
        "12",
        "6",
        "72",
        "4"
      ],
      0,
      "24=2³×3，36=2²×3²，GCD=2²×3=12。"
    ],
    [
      "15 與 28 的最大公因數為？",
      [
        "1",
        "3",
        "5",
        "7"
      ],
      0,
      "15 與 28 互質。"
    ],
    [
      "48 與 60 的最大公因數為？",
      [
        "12",
        "6",
        "240",
        "24"
      ],
      0,
      "48=2⁴×3，60=2²×3×5，GCD=2²×3=12。"
    ]
  ],
  "fraction-lcm-basic": [
    [
      "4 與 6 的最小公倍數為？",
      [
        "12",
        "24",
        "2",
        "10"
      ],
      0,
      "4=2²，6=2×3，LCM=2²×3=12。"
    ],
    [
      "8 與 12 的最小公倍數為？",
      [
        "24",
        "48",
        "4",
        "96"
      ],
      0,
      "LCM=2³×3=24。"
    ],
    [
      "5 與 7 的最小公倍數為？",
      [
        "35",
        "12",
        "1",
        "70"
      ],
      0,
      "互質時 LCM=乘積。"
    ],
    [
      "9 與 15 的最小公倍數為？",
      [
        "45",
        "135",
        "3",
        "30"
      ],
      0,
      "9=3²，15=3×5，LCM=3²×5=45。"
    ]
  ],
  "fraction-gcd-application": [
    [
      "48 與 36 公分長的繩子剪成等長且無剩，每段最長幾公分？",
      [
        "12 公分",
        "6 公分",
        "24 公分",
        "18 公分"
      ],
      0,
      "求 GCD(48,36)=12。"
    ],
    [
      "30 與 45 個蘋果分組，每組數相同且最多，每組幾個？",
      [
        "15 個",
        "5 個",
        "3 個",
        "90 個"
      ],
      0,
      "GCD(30,45)=15。"
    ],
    [
      "42 與 56 面積相同且無剩的正方形瓷磚，邊長最大幾公分？",
      [
        "14 公分",
        "7 公分",
        "28 公分",
        "21 公分"
      ],
      0,
      "GCD(42,56)=14。"
    ],
    [
      "24 與 18 本書要分成若干堆，每堆本數相同且盡可能多，每堆幾本？",
      [
        "6 本",
        "3 本",
        "2 本",
        "12 本"
      ],
      0,
      "GCD(24,18)=6。"
    ]
  ],
  "fraction-lcm-application": [
    [
      "4 與 6 分鐘各響一次，同時響後再同時響至少幾分鐘？",
      [
        "12 分鐘",
        "24 分鐘",
        "10 分鐘",
        "2 分鐘"
      ],
      0,
      "LCM(4,6)=12。"
    ],
    [
      "6 與 8 公尺長的路燈等距排列，間距最大幾公尺？",
      [
        "2 公尺",
        "14 公尺",
        "48 公尺",
        "4 公尺"
      ],
      0,
      "GCD(6,8)=2。"
    ],
    [
      "3 與 5 天各發一次信，同一天發信後再同時發至少幾天？",
      [
        "15 天",
        "8 天",
        "30 天",
        "2 天"
      ],
      0,
      "LCM(3,5)=15。"
    ],
    [
      "12 與 18 人排成相同列數且列數最多，可排幾列？",
      [
        "6 列",
        "3 列",
        "2 列",
        "36 列"
      ],
      0,
      "GCD(12,18)=6。"
    ]
  ],
  "fraction-compare": [
    [
      "比較 3/4 與 5/6 的大小。",
      [
        "3/4 < 5/6",
        "3/4 > 5/6",
        "3/4 = 5/6",
        "無法比較"
      ],
      0,
      "通分：3/4=9/12，5/6=10/12。"
    ],
    [
      "下列何者最大？",
      [
        "7/8",
        "2/3",
        "5/9",
        "1/2"
      ],
      0,
      "7/8 最接近 1。"
    ],
    [
      "-1/2 與 -3/4 何者較大？",
      [
        "-1/2",
        "-3/4",
        "相等",
        "無法比較"
      ],
      0,
      "負分數絕對值小者較大。"
    ],
    [
      "0.75 與 2/3 何者較大？",
      [
        "0.75",
        "2/3",
        "相等",
        "無法比較"
      ],
      0,
      "0.75=3/4 > 2/3。"
    ]
  ],
  "fraction-add-subtract": [
    [
      "計算 1/3 + 1/6。",
      [
        "1/2",
        "2/9",
        "2/6",
        "1/9"
      ],
      0,
      "通分：2/6+1/6=3/6=1/2。"
    ],
    [
      "計算 5/8 − 1/4。",
      [
        "3/8",
        "4/8",
        "1/4",
        "6/8"
      ],
      0,
      "1/4=2/8，5/8−2/8=3/8。"
    ],
    [
      "計算 2/5 + 3/10。",
      [
        "7/10",
        "5/15",
        "1/2",
        "6/10"
      ],
      0,
      "4/10+3/10=7/10。"
    ],
    [
      "計算 1 − 2/3。",
      [
        "1/3",
        "2/3",
        "1/2",
        "−1/3"
      ],
      0,
      "1=3/3，3/3−2/3=1/3。"
    ]
  ],
  "fraction-multiply-divide": [
    [
      "計算 2/3 × 3/4。",
      [
        "1/2",
        "6/7",
        "5/7",
        "2/4"
      ],
      0,
      "分子乘分子、分母乘分母：6/12=1/2。"
    ],
    [
      "計算 3/5 ÷ 2/3。",
      [
        "9/10",
        "6/15",
        "5/6",
        "2/5"
      ],
      0,
      "除以分數 = 乘倒數：3/5×3/2=9/10。"
    ],
    [
      "計算 4/7 × 14。",
      [
        "8",
        "4",
        "56/7",
        "2"
      ],
      0,
      "4/7×14=4×2=8。"
    ],
    [
      "計算 5/6 ÷ 5。",
      [
        "1/6",
        "25/6",
        "1/5",
        "5/30"
      ],
      0,
      "5/6×1/5=1/6。"
    ]
  ],
  "fraction-mixed-number": [
    [
      "1 3/4 化成假分數為？",
      [
        "7/4",
        "4/7",
        "13/4",
        "3/4"
      ],
      0,
      "1×4+3=7，得 7/4。"
    ],
    [
      "11/4 化成帶分數為？",
      [
        "2 3/4",
        "1 3/4",
        "2 1/4",
        "3 1/4"
      ],
      0,
      "11÷4=2 餘 3。"
    ],
    [
      "2 1/2 + 1 1/2 等於？",
      [
        "4",
        "3",
        "3 1/2",
        "4 1/2"
      ],
      0,
      "2+1+1/2+1/2=4。"
    ],
    [
      "下列何者是帶分數？",
      [
        "2 1/3",
        "5/3",
        "0.333…",
        "3/2"
      ],
      0,
      "帶分數含整數與真分數部分。"
    ]
  ],
  "fraction-complex-fraction-basic": [
    [
      "化簡 (1/2)/(1/4)。",
      [
        "2",
        "1/8",
        "1/2",
        "4"
      ],
      0,
      "(1/2)÷(1/4)=1/2×4=2。"
    ],
    [
      "化簡 (3/4)/(1/2)。",
      [
        "3/2",
        "3/8",
        "6/4",
        "1/2"
      ],
      0,
      "3/4×2=3/2。"
    ],
    [
      "化簡 (2/3)/(4/5)。",
      [
        "5/6",
        "8/15",
        "6/5",
        "10/12"
      ],
      0,
      "2/3×5/4=10/12=5/6。"
    ],
    [
      "(1/3)/(2) 等於？",
      [
        "1/6",
        "2/3",
        "3/2",
        "1/5"
      ],
      0,
      "1/3÷2=1/3×1/2=1/6。"
    ]
  ],
  "fraction-percent-discount": [
    [
      "原價 400 元打 8 折，售價為？",
      [
        "320 元",
        "380 元",
        "80 元",
        "480 元"
      ],
      0,
      "400×80%=320。"
    ],
    [
      "某商品漲價 20%，原價 500 元，新價為？",
      [
        "600 元",
        "520 元",
        "100 元",
        "580 元"
      ],
      0,
      "500×120%=600。"
    ],
    [
      "8 折表示售價是原價的百分之幾？",
      [
        "80%",
        "8%",
        "20%",
        "88%"
      ],
      0,
      "8 折 = 原價的 80%。"
    ],
    [
      "成數 7 成表示？",
      [
        "70%",
        "7%",
        "0.7 倍原價的 10 倍",
        "700%"
      ],
      0,
      "1 成 = 10%，7 成 = 70%。"
    ]
  ],
  "fraction-base-quantity": [
    [
      "某數的 25% 是 30，某數為？",
      [
        "120",
        "7.5",
        "55",
        "750"
      ],
      0,
      "30÷25%=120。"
    ],
    [
      "原價打 9 折後 450 元，原價為？",
      [
        "500 元",
        "405 元",
        "490 元",
        "540 元"
      ],
      0,
      "450÷90%=500。"
    ],
    [
      "比較量 60 是基準量 240 的百分之幾？",
      [
        "25%",
        "40%",
        "15%",
        "4%"
      ],
      0,
      "60÷240=25%。"
    ],
    [
      "基準量未知時，應先判斷？",
      [
        "題目中的「全部」「原價」通常為基準量",
        "比較量一定是基準量",
        "百分率是分母",
        "基準量永遠較小"
      ],
      0,
      "基準量是百分率對應的「整體」。"
    ]
  ],
  "fraction-literacy-context": [
    [
      "一桶水 24 公升，上午用 1/3，下午用 1/4 桶，剩幾公升？",
      [
        "10 公升",
        "8 公升",
        "12 公升",
        "6 公升"
      ],
      0,
      "上午 8 公升、下午 6 公升，24−8−6=10。"
    ],
    [
      "三人分 120 元，甲得 1/3、乙得 1/4，丙得其餘，丙得幾元？",
      [
        "50 元",
        "40 元",
        "30 元",
        "60 元"
      ],
      0,
      "甲 40、乙 30，丙 120−70=50。"
    ],
    [
      "某班 40 人，1/5 參加籃球、1/4 參加排球，兩項都未參加幾人？",
      [
        "22 人",
        "18 人",
        "24 人",
        "16 人"
      ],
      0,
      "8+10=18 人參加，剩 22 人。"
    ],
    [
      "長 3 1/2 公尺的繩子剪去 3/4 公尺，剩幾公尺？",
      [
        "2 3/4 公尺",
        "2 1/2 公尺",
        "3 公尺",
        "2 1/4 公尺"
      ],
      0,
      "3.5−0.75=2.75=2 3/4。"
    ]
  ],
  "linear-expression-substitution": [
    [
      "當 x = 3 時，2x + 5 的值為？",
      [
        "11",
        "10",
        "8",
        "13"
      ],
      0,
      "2×3+5=11。"
    ],
    [
      "當 x = −2 時，x − 7 的值為？",
      [
        "−9",
        "9",
        "−5",
        "5"
      ],
      0,
      "−2−7=−9。"
    ],
    [
      "某數為 x，其 3 倍減 4 可記為？",
      [
        "3x − 4",
        "3 − 4x",
        "x − 12",
        "3(x − 4)"
      ],
      0,
      "先 3 倍再減 4。"
    ],
    [
      "當 x = 4 時，5x − 3x 的值為？",
      [
        "8",
        "2",
        "20",
        "12"
      ],
      0,
      "5×4−3×4=20−12=8。"
    ]
  ],
  "linear-expression-simplify": [
    [
      "化簡 3x + 2x − 5。",
      [
        "5x − 5",
        "6x − 5",
        "5x + 5",
        "x − 5"
      ],
      0,
      "合併 x 項得 5x。"
    ],
    [
      "化簡 7x + 4 − 2x + 1。",
      [
        "5x + 5",
        "9x + 5",
        "5x + 3",
        "9x + 3"
      ],
      0,
      "5x+5。"
    ],
    [
      "化簡 2(x + 3) + x。",
      [
        "3x + 6",
        "2x + 6",
        "3x + 3",
        "2x + 3"
      ],
      0,
      "2x+6+x=3x+6。"
    ],
    [
      "化簡 4x − (2x − 1)。",
      [
        "2x + 1",
        "2x − 1",
        "6x − 1",
        "2x + 2"
      ],
      0,
      "4x−2x+1=2x+1。"
    ]
  ],
  "linear-equation-balance-property": [
    [
      "若 a = b，則 a + 5 與 b + 5 的關係為？",
      [
        "相等",
        "a + 5 較大",
        "b + 5 較大",
        "不一定"
      ],
      0,
      "等量公理：同加仍相等。"
    ],
    [
      "解 x + 8 = 15。",
      [
        "x = 7",
        "x = 23",
        "x = −7",
        "x = 8"
      ],
      0,
      "移項 x=15−8=7。"
    ],
    [
      "解 x − 4 = −1。",
      [
        "x = 3",
        "x = −5",
        "x = 5",
        "x = −3"
      ],
      0,
      "x=−1+4=3。"
    ],
    [
      "下列哪一步符合等量公理？",
      [
        "等式兩邊同減 3",
        "只有左邊減 3",
        "兩邊加不同數",
        "只除一邊"
      ],
      0,
      "兩邊須做相同運算。"
    ]
  ],
  "linear-equation-basic-solving": [
    [
      "解 2x = 10。",
      [
        "x = 5",
        "x = 20",
        "x = 8",
        "x = 12"
      ],
      0,
      "x=10÷2=5。"
    ],
    [
      "解 3x + 6 = 0。",
      [
        "x = −2",
        "x = 2",
        "x = −6",
        "x = 6"
      ],
      0,
      "3x=−6，x=−2。"
    ],
    [
      "解 5x − 3 = 12。",
      [
        "x = 3",
        "x = 9",
        "x = 15",
        "x = 2"
      ],
      0,
      "5x=15，x=3。"
    ],
    [
      "解 −4x = 20。",
      [
        "x = −5",
        "x = 5",
        "x = −20",
        "x = 24"
      ],
      0,
      "x=20÷(−4)=−5。"
    ]
  ],
  "linear-equation-parentheses": [
    [
      "解 2(x + 3) = 10。",
      [
        "x = 2",
        "x = 5",
        "x = 4",
        "x = 1"
      ],
      0,
      "x+3=5，x=2。"
    ],
    [
      "解 3(2x − 1) = 9。",
      [
        "x = 2",
        "x = 1",
        "x = 3",
        "x = 4"
      ],
      0,
      "2x−1=3，2x=4，x=2。"
    ],
    [
      "解 5 − 2(x − 1) = 11。",
      [
        "x = −2",
        "x = 2",
        "x = −4",
        "x = 4"
      ],
      0,
      "−2(x−1)=6，x−1=−3，x=−2。"
    ],
    [
      "解 4x + 2(3 − x) = 8。",
      [
        "x = 1",
        "x = 2",
        "x = 0",
        "x = 4"
      ],
      0,
      "4x+6−2x=8，2x=2，x=1。"
    ]
  ],
  "linear-equation-fractions": [
    [
      "解 x/2 = 5。",
      [
        "x = 10",
        "x = 7",
        "x = 2.5",
        "x = 5"
      ],
      0,
      "x=10。"
    ],
    [
      "解 (x + 1)/3 = 4。",
      [
        "x = 11",
        "x = 13",
        "x = 3",
        "x = 12"
      ],
      0,
      "x+1=12，x=11。"
    ],
    [
      "解 (2x − 1)/5 = 3。",
      [
        "x = 8",
        "x = 7",
        "x = 9",
        "x = 6"
      ],
      0,
      "2x−1=15，2x=16，x=8。"
    ],
    [
      "解 x/4 + 2 = 5。",
      [
        "x = 12",
        "x = 28",
        "x = 8",
        "x = 20"
      ],
      0,
      "x/4=3，x=12。"
    ]
  ],
  "linear-equation-check-solution": [
    [
      "x = 4 是否為 2x + 1 = 9 的解？",
      [
        "是",
        "否",
        "無法判斷",
        "條件不足"
      ],
      0,
      "2×4+1=9。"
    ],
    [
      "x = −3 是否為 x − 5 = −8 的解？",
      [
        "是",
        "否",
        "無法判斷",
        "條件不足"
      ],
      0,
      "−3−5=−8。"
    ],
    [
      "檢驗解時應做什麼？",
      [
        "代入方程式看兩邊是否相等",
        "只算左邊",
        "只算右邊",
        "比較係數"
      ],
      0,
      "代入後兩邊相等才是解。"
    ],
    [
      "x = 2 是否為 3x − 4 = 2 的解？",
      [
        "是",
        "否",
        "無法判斷",
        "條件不足"
      ],
      0,
      "3×2−4=2，兩邊相等。"
    ]
  ],
  "linear-equation-age-problem": [
    [
      "小明今年 x 歲，3 年後 15 歲，x 為？",
      [
        "12",
        "18",
        "15",
        "3"
      ],
      0,
      "x+3=15，x=12。"
    ],
    [
      "爸爸 40 歲，兒子 x 歲，5 年後爸爸是兒子 3 倍，x 為？",
      [
        "5",
        "10",
        "15",
        "8"
      ],
      1,
      "40+5=3(x+5)，解得 x=10。"
    ],
    [
      "姐姐比弟弟大 4 歲，兩人年齡和 20 歲，弟弟幾歲？",
      [
        "8 歲",
        "12 歲",
        "10 歲",
        "6 歲"
      ],
      0,
      "2x+4=20，x=8。"
    ],
    [
      "5 年前媽媽年齡是女兒 4 倍，現在女兒 10 歲，媽媽現在幾歲？",
      [
        "35 歲",
        "40 歲",
        "45 歲",
        "30 歲"
      ],
      0,
      "5 年前女兒 5、媽 20，現在 35。"
    ]
  ],
  "linear-equation-money-problem": [
    [
      "付 100 元買 3 本同價書，找零 16 元，每本幾元？",
      [
        "28 元",
        "32 元",
        "84 元",
        "24 元"
      ],
      0,
      "3x=84，x=28。"
    ],
    [
      "小明有 x 元，買 45 元午餐後剩 12 元，x 為？",
      [
        "57 元",
        "33 元",
        "45 元",
        "12 元"
      ],
      0,
      "x−45=12，x=57。"
    ],
    [
      "2 支筆與 1 本筆記本共 85 元，筆每支 20 元，筆記本幾元？",
      [
        "45 元",
        "65 元",
        "25 元",
        "40 元"
      ],
      0,
      "85−40=45。"
    ],
    [
      "存 500 元後共有 780 元，原本有多少？",
      [
        "280 元",
        "1280 元",
        "500 元",
        "780 元"
      ],
      0,
      "x+500=780。"
    ]
  ],
  "linear-equation-rate-problem": [
    [
      "以每小時 60 公里走 3 小時，共走幾公里？",
      [
        "180 公里",
        "63 公里",
        "20 公里",
        "120 公里"
      ],
      0,
      "60×3=180。"
    ],
    [
      "120 公里以 40 公里/時前進，需幾小時？",
      [
        "3 小時",
        "4 小時",
        "2 小時",
        "80 小時"
      ],
      0,
      "120÷40=3。"
    ],
    [
      "甲乙相距 90 公里同向而行，甲 50 公里/時、乙 35 公里/時，甲追上乙需幾小時？",
      [
        "6 小時",
        "3 小時",
        "2 小時",
        "90 小時"
      ],
      0,
      "90÷(50−35)=6。"
    ],
    [
      "某車 2 小時走 130 公里，平均速率？",
      [
        "65 公里/時",
        "132 公里/時",
        "128 公里/時",
        "260 公里/時"
      ],
      0,
      "130÷2=65。"
    ]
  ],
  "linear-equation-distribution-problem": [
    [
      "糖果分 6 人，每人 8 顆剩 3 顆，共幾顆？",
      [
        "51 顆",
        "48 顆",
        "54 顆",
        "45 顆"
      ],
      0,
      "6×8+3=51。"
    ],
    [
      "書分 5 堆每堆 12 本，剩 4 本，共幾本？",
      [
        "64 本",
        "60 本",
        "56 本",
        "68 本"
      ],
      0,
      "5×12+4=64。"
    ],
    [
      "x 個蘋果分 4 人每人 7 個，剩 2 個，x 為？",
      [
        "30",
        "28",
        "26",
        "32"
      ],
      0,
      "4×7+2=30。"
    ],
    [
      "分配問題列式時，剩餘應？",
      [
        "加在總數關係中",
        "忽略",
        "當作減數",
        "當作除數"
      ],
      0,
      "總數 = 每人×人數 + 剩餘。"
    ]
  ],
  "linear-equation-consecutive-integers": [
    [
      "三連續整數和 24，最小者為？",
      [
        "7",
        "8",
        "9",
        "6"
      ],
      0,
      "x+(x+1)+(x+2)=24，x=7。"
    ],
    [
      "兩連續偶數和 26，較小者為？",
      [
        "12",
        "14",
        "13",
        "10"
      ],
      0,
      "x+(x+2)=26，x=12。"
    ],
    [
      "某數的 2 倍加 1 等於下一個整數，某數為？",
      [
        "0",
        "1",
        "−1",
        "2"
      ],
      0,
      "2x+1=x+1，解得 x=0。"
    ],
    [
      "四連續整數和 38，最大者為？",
      [
        "11",
        "10",
        "12",
        "9"
      ],
      0,
      "x+(x+1)+(x+2)+(x+3)=38，x=8，最大 11。"
    ]
  ],
  "linear-equation-reasonableness": [
    [
      "解得 x = −5 表示長度 5 公分，是否合理？",
      [
        "不合理，長度通常取正值",
        "一定合理",
        "無法判斷",
        "只看代數"
      ],
      0,
      "幾何量需檢查是否合理。"
    ],
    [
      "年齡解得 x = −3，是否合理？",
      [
        "不合理",
        "合理",
        "無法判斷",
        "看題目"
      ],
      0,
      "年齡不可為負。"
    ],
    [
      "解應用題最後一步應？",
      [
        "檢查解是否符合題意",
        "直接寫答案",
        "只驗算代數",
        "改題目"
      ],
      0,
      "合理性檢查不可少。"
    ],
    [
      "人數解得 2.5 人，是否合理？",
      [
        "不合理，人數應為整數",
        "合理",
        "看情況",
        "可四捨五入"
      ],
      0,
      "人數通常需為正整數。"
    ]
  ],
  "linear-equation-plan-comparison": [
    [
      "方案 A：月租 300 元 + 每通 2 元；方案 B：月租 500 元 + 每通 1 元。通話 150 次時哪較省？",
      [
        "方案 A",
        "方案 B",
        "相同",
        "無法比"
      ],
      0,
      "A=600 元，B=650 元。"
    ],
    [
      "同一商品甲店 2 件 500 元、乙店 3 件 720 元，買 6 件哪較省？",
      [
        "乙店",
        "甲店",
        "相同",
        "無法比"
      ],
      0,
      "甲 1500 元、乙 1440 元。"
    ],
    [
      "月租 399 元 vs 499 元，若用量少，通常？",
      [
        "月租較低較省",
        "月租較高較省",
        "一定相同",
        "與用量無關"
      ],
      0,
      "用量少時固定費低較有利。"
    ],
    [
      "比較方案應？",
      [
        "依相同使用量計算總費用",
        "只看單價",
        "只看月租",
        "隨機選"
      ],
      0,
      "要在相同條件下比總成本。"
    ]
  ],
  "linear-equation-literacy-context": [
    [
      "某校節水 20%，原每天 500 公升，現在每天？",
      [
        "400 公升",
        "100 公升",
        "520 公升",
        "480 公升"
      ],
      0,
      "500×80%=400。"
    ],
    [
      "某班捐書，第一天捐 x 本，第二天比第一天多 5 本，共 45 本，x 為？",
      [
        "20",
        "25",
        "15",
        "22"
      ],
      0,
      "x+(x+5)=45，x=20。"
    ],
    [
      "長方形長比寬多 3，周長 26，寬為？",
      [
        "5",
        "8",
        "10",
        "13"
      ],
      0,
      "2(x+x+3)=26，x=5。"
    ],
    [
      "某活動參加費每人 150 元，已有 20 人報名，再 x 人報名後總收入 7500 元，x 為？",
      [
        "30",
        "50",
        "25",
        "35"
      ],
      0,
      "150(20+x)=7500，20+x=50，x=30。"
    ]
  ]
};

function arrangeChoices(correct, wrongs, answerIndex) {
  const d = wrongs.slice(0, 3);
  const choices = new Array(4);
  let di = 0;
  for (let i = 0; i < 4; i++) {
    if (i === answerIndex) choices[i] = correct;
    else choices[i] = d[di++];
  }
  return choices;
}

function buildQuestionsForUnit(unitId, pilotDef) {
  const questions = [];
  pilotDef.skills.forEach((s, i) => {
    const templates = RAW_Q[s.skillId];
    const meta = SKILL_META[s.skillId];
    const contents = PILOT_CONTENT[s.skillId];
    if (!templates || templates.length !== 4) throw new Error("Need 4 questions for " + s.skillId);
    if (!contents || contents.length !== 4) throw new Error("Need 4 content blocks for " + s.skillId);
    templates.forEach((t, vi) => {
      const [text, oldChoices, oldAns] = t;
      const { steps, explanation, commonMistake } = contents[vi];
      const correct = oldChoices[oldAns];
      const wrongs = oldChoices.filter((_, idx) => idx !== oldAns);
      const answerIndex = ANSWER_INDEX_PATTERN[vi];
      const choices = arrangeChoices(correct, wrongs, answerIndex);
      const diff = s.skillId.includes("literacy") ? (vi % 2 ? "literacy" : "standard") : (vi < 2 ? "basic" : "standard");
      questions.push(mkQuestion({
        unitId,
        numericUnitId: pilotDef.numericId,
        topicId: s.topicId,
        skillId: s.skillId,
        skillSeq: i + 1,
        variant: vi + 1,
        difficulty: diff,
        text,
        choices,
        answerIndex,
        explanation,
        steps,
        commonMistake,
        concept: meta.concept,
        tags: [pilotDef.domain, s.title, diff === "basic" ? "基礎概念" : "應用"],
        estimatedTimeSec: diff === "literacy" ? 75 : 45
      }));
    });
  });
  return questions;
}

function buildLecturesForUnit(unitId, pilotDef) {
  return pilotDef.skills.map(s => {
    const meta = SKILL_META[s.skillId];
    const templates = RAW_Q[s.skillId];
    const contents = PILOT_CONTENT[s.skillId];
    const examples = templates.slice(0, 2).map(([q], ei) => {
      const c = contents[ei];
      const lec = c.lectureExplanation && countZh(c.lectureExplanation) >= 30
        ? c.lectureExplanation
        : c.explanation;
      return { question: q, explanation: lec };
    });
    return mkLecture({
      unitId,
      topicId: s.topicId,
      skillId: s.skillId,
      title: s.title,
      concept: meta.lectureConcept,
      formula: meta.formula,
      stepGuide: meta.stepGuide,
      examples,
      commonMistakes: meta.lectureMistakes,
      quizLink: { unitId, skillId: s.skillId }
    });
  });
}

export function buildAllPilotContent() {
  return {
    questionsByUnit: {
      u01: buildQuestionsForUnit("u01", PILOT_UNITS.u01),
      u02: buildQuestionsForUnit("u02", PILOT_UNITS.u02),
      u03: buildQuestionsForUnit("u03", PILOT_UNITS.u03)
    },
    lecturesByUnit: {
      u01: buildLecturesForUnit("u01", PILOT_UNITS.u01),
      u02: buildLecturesForUnit("u02", PILOT_UNITS.u02),
      u03: buildLecturesForUnit("u03", PILOT_UNITS.u03)
    }
  };
}
