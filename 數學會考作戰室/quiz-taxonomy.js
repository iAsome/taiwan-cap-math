window.QUIZ_TAXONOMY = {
  "g7-1-c1": {
    source: "使用者提供：教育部課綱對照國一上「數與數線」三主題題型表（2026-07 更新）。",
    sections: [
      {
        title: "正負數、數線與絕對值",
        topics: [
          {
            id: "number-classification",
            title: "數的分類",
            template({ r, ri, pick, mc }) {
              const item = pick(r, [
                { q: "下列哪一個數是整數？", correct: "-7", wrong: ["1/2", "0.333…", "√2"] },
                { q: "下列哪一個數是有理數？", correct: "-3/4", wrong: ["π", "√5", "√7"] },
                { q: "下列哪一個數不是有理數？", correct: "√2", wrong: ["-5", "0", "3/8"] }
              ]);
              return mc(r, 1, 1, item.q, item.correct, item.wrong, [`先確認各選項能否寫成 p/q（q≠0）的形式。`, `${item.correct} 符合題目要求的數的分類。`], "整數、分數、有限小數與循環小數都是有理數；無法寫成兩整數比的才是無理數。", "不要把「有小數點」就當成無理數；有限小數仍是有理數。")
            }
          },
          {
            id: "number-line",
            title: "數線",
            template({ r, ri, mc, signed }) {
              const a = -ri(r, 3, 12), b = ri(r, 2, 10);
              return mc(r, 1, 1, `數線上 A 點在原點左側 ${Math.abs(a)} 單位，B 點在原點右側 ${b} 單位，則 A、B 的坐標依序為何？`, `(${signed(a)}, ${b})`, [`(${b}, ${signed(a)})`, `(${Math.abs(a)}, ${-b})`, `(${-b}, ${Math.abs(a)})`], [`原點左側為負，右側為正。`, `A 在左側 ${Math.abs(a)} 單位，坐標為 ${signed(a)}；B 在右側 ${b} 單位，坐標為 ${b}。`], "數線上左負右正；到原點的距離要配合正負方向。", "不要把距離直接當坐標；左側要加負號。")
            }
          },
          {
            id: "opposite-and-absolute-overview",
            title: "相反數與絕對值",
            template({ r, ri, mc, signed }) {
              const n = ri(r, 4, 18);
              return mc(r, 1, 1, `關於 ${signed(-n)}，下列敘述何者正確？`, `其相反數為 ${n}，絕對值為 ${n}`, [`其相反數為 ${signed(-n)}，絕對值為 ${signed(-n)}`, `其相反數為 ${n}，絕對值為 ${signed(-n)}`, `其相反數為 0，絕對值為 0`], [`相反數：到 0 距離相同、方向相反，所以 ${signed(-n)} 的相反數是 ${n}。`, `絕對值：到原點距離，所以 |${signed(-n)}|=${n}。`], "相反數改變正負；絕對值只取到原點的距離。", "絕對值結果不會是負數；相反數可能仍是負數。")
            }
          },
          {
            id: "signed-number-concept",
            title: "正負數的概念",
            template({ r, ri, mc }) {
              const n = ri(r, 3, 18);
              return mc(r, 1, 1, `某地氣溫比 0°C 低 ${n}°C，若用正負數表示，應記為何者？`, `-${n}°C`, [`+${n}°C`, "0°C", `${n * 2}°C`], [`「低於 0」要用負數表示。`, `比 0°C 低 ${n}°C，就是 0-${n}=-${n}，所以記為 -${n}°C。`], "正數表示高於基準，負數表示低於基準。", "不要只看到「低」就把數字變小；重點是方向要用負號。")
            }
          },
          {
            id: "opposite-number-concept",
            title: "相反數的概念",
            template({ r, ri, mc }) {
              const n = ri(r, 4, 24);
              return mc(r, 1, 1, `${-n} 的相反數是多少？`, n, [-n, 0, n + 1], [`相反數是在數線上到 0 距離相同、方向相反的數。`, `${-n} 的相反數是 ${n}。`], "a 的相反數是 -a。", "相反數不是倒數，也不是絕對值；它只改變方向。")
            }
          },
          {
            id: "absolute-value-concept",
            title: "絕對值的概念",
            template({ r, ri, mc }) {
              const n = ri(r, 3, 20);
              return mc(r, 1, 1, `數線上代表 ${-n} 的點到原點的距離是多少？`, n, [-n, 0, n * 2], [`絕對值表示數線上到原點的距離。`, `距離不會是負的，所以 |${-n}|=${n}。`], "絕對值是距離，因此結果一定大於或等於 0。", "不要把 |−a| 寫成 −a；絕對值符號會把距離轉成非負數。")
            }
          },
          {
            id: "opposite-and-absolute-evaluation",
            title: "相反數與絕對值的求值",
            template({ r, ri, mc }) {
              const a = ri(r, 3, 12), b = ri(r, 2, 10);
              const ans = a + b;
              return mc(r, 1, 2, `計算 -(${-a}) + |${-b}| 的值。`, ans, [a - b, -a + b, -ans], [`-(${-a}) 是 ${-a} 的相反數，所以等於 ${a}。`, `|${-b}|=${b}，因此 ${a}+${b}=${ans}。`], "先處理相反數與絕對值，再做加減。", "外面的負號和絕對值符號功能不同，不能混在一起看。")
            }
          },
          {
            id: "absolute-value-position",
            title: "絕對值與數線上點的位置",
            template({ r, ri, mc }) {
              const d = ri(r, 2, 14);
              return mc(r, 1, 2, `若數線上一點 P 到原點的距離為 ${d}，則 P 可能代表哪些數？`, `${-d} 或 ${d}`, [`只有 ${d}`, `只有 ${-d}`, `${-d} 或 0`], [`到原點距離為 ${d}，表示 |x|=${d}。`, `數線上左右兩邊各有一點，所以 x=${-d} 或 ${d}。`], "|x|=d 表示 x 到 0 的距離是 d，通常有左右兩個位置。", "題目問距離，不是方向；除非題目指定在原點右側或左側。")
            }
          }
        ]
      },
      {
        title: "數的四則運算與數線上兩點間的距離",
        topics: [
          {
            id: "addition-operation",
            title: "加法運算",
            template({ r, ri, mc, signed }) {
              const a = -ri(r, 2, 12), b = ri(r, 1, 15);
              const ans = a + b;
              return mc(r, 1, 1, `計算 ${signed(a)} + ${signed(b)} 的值。`, signed(ans), [signed(a - b), signed(Math.abs(a) + Math.abs(b)), signed(b - a)], [`從 ${signed(a)} 出發，${b >= 0 ? `向右移 ${b} 單位` : `向左移 ${Math.abs(b)} 單位`}。`, `所以 ${signed(a)}+${signed(b)}=${signed(ans)}。`], "數線上加法：正數向右、負數向左。", "異號相加時，結果的絕對值是兩數絕對值的差。")
            }
          },
          {
            id: "subtraction-operation",
            title: "減法運算",
            template({ r, ri, mc, signed }) {
              const a = ri(r, 3, 15), b = -ri(r, 2, 10);
              const ans = a - b;
              return mc(r, 1, 1, `計算 ${a} − (${signed(b)}) 的值。`, signed(ans), [signed(a + b), signed(a - Math.abs(b)), signed(b - a)], [`減一個負數等於加它的相反數：${a}−(${signed(b)})=${a}+${Math.abs(b)}。`, `所以答案為 ${signed(ans)}。`], "a−b = a+(−b)；減負數會變加法。", "不要把減號和負號抵消成 0；−(−b)=+b。")
            }
          },
          {
            id: "multiplication-division-operation",
            title: "乘除運算",
            template({ r, ri, mc, signed }) {
              const a = -ri(r, 2, 9), b = ri(r, 2, 8), c = ri(r, 2, 6);
              const prod = a * b, quot = Math.trunc(prod / c);
              return mc(r, 1, 2, `計算 ${signed(a)} × ${b} ÷ ${c} 的值。`, signed(quot), [signed(a + b - c), signed(a * b * c), signed(Math.abs(a) * b / c)], [`先算乘法：${signed(a)}×${b}=${signed(prod)}。`, `再算除法：${signed(prod)}÷${c}=${signed(quot)}。`], "同號相乘為正，異號相乘為負；除法規則相同。", "乘除從左到右依序計算，不要跳過乘法。")
            }
          },
          {
            id: "operation-rules",
            title: "運算規律",
            template({ r, ri, mc, signed }) {
              const k = ri(r, 2, 7), a = ri(r, 3, 12), b = ri(r, 2, 9);
              const ans = k * (a + b);
              return mc(r, 1, 1, `下列哪一個算式與 ${k}×(${a}+${b}) 的值相同？`, `${k}×${a}+${k}×${b}`, [`${k}+${a}+${b}`, `${k}×${a}+${b}`, `(${k}+${a})×${b}`], [`分配律：${k}×(${a}+${b})=${k}×${a}+${k}×${b}。`, `兩式值皆為 ${ans}。`], "乘法對加法的分配律：a(b+c)=ab+ac。", "分配時括號內每一項都要乘到。")
            }
          },
          {
            id: "four-operations",
            title: "四則運算",
            template({ r, ri, mc, signed }) {
              const a = ri(r, 4, 12), b = ri(r, 2, 5), c = ri(r, 2, 6), d = ri(r, 1, 4);
              const ans = a + b * c - d;
              return mc(r, 1, 2, `計算 ${a} + ${b} × ${c} − ${d} 的值。`, signed(ans), [signed((a + b) * c - d), signed(a + b * (c - d)), signed(a - b * c + d)], [`先乘除：${b}×${c}=${b * c}。`, `再加減：${a}+${b * c}−${d}=${ans}。`], "沒有括號時先乘除、後加減。", "加減與乘除混合時，不要從左到右一路算下去。")
            }
          },
          {
            id: "distance-and-midpoint",
            title: "數線上兩點間的距離與中點坐標",
            template({ r, ri, mc, signed }) {
              const a = -ri(r, 3, 10), b = ri(r, 2, 12);
              const dist = Math.abs(a - b), mid = (a + b) / 2;
              return mc(r, 1, 2, `數線上 A(${signed(a)})、B(${b})，線段 AB 的長度與中點坐標依序為何？`, `長度 ${dist}，中點 ${signed(mid)}`, [`長度 ${Math.abs(a) + Math.abs(b)}，中點 ${signed(mid + 1)}`, `長度 ${dist}，中點 ${signed(a)}`, `長度 ${b - a}，中點 ${signed((a - b) / 2)}`], [`距離 AB=|${signed(a)}−${b}|=${dist}。`, `中點坐標 = (${signed(a)}+${b})÷2 = ${signed(mid)}。`], "距離用 |a−b|；中點是兩端點坐標的平均。", "中點不是取較大或較小的坐標；兩端點要相加再除以 2。")
            }
          },
          {
            id: "integer-arithmetic",
            title: "數的四則運算",
            template({ r, ri, mc, signed }) {
              const a = ri(r, 4, 16), b = ri(r, 2, 9), c = ri(r, 2, 6);
              const ans = -a + b * c;
              return mc(r, 1, 2, `計算 ${signed(-a)} + ${b} × ${c} 的值。`, signed(ans), [signed(-a + b + c), signed(a + b * c), signed(-a - b * c)], [`先乘除後加減：${b}×${c}=${b * c}。`, `${signed(-a)}+${b * c}=${signed(ans)}。`], "四則運算先乘除、後加減。", "不要從左到右直接算成 (-a+b)×c。")
            }
          },
          {
            id: "distributive-law",
            title: "分配律的應用",
            template({ r, ri, mc }) {
              const k = ri(r, 2, 8), a = ri(r, 5, 14), b = ri(r, 1, 5);
              const ans = k * (a - b);
              return mc(r, 1, 2, `利用分配律計算 ${k}×(${a}-${b}) 的值。`, ans, [k * a - b, k + a - b, k * (a + b)], [`分配律：${k}×(${a}-${b})=${k}×${a}-${k}×${b}。`, `${k * a}-${k * b}=${ans}。`], "a(b-c)=ab-ac。", "分配時括號內每一項都要乘到，不是只乘第一項。")
            }
          },
          {
            id: "commutative-associative-law",
            title: "交換律和結合律的應用",
            template({ r, ri, mc, signed }) {
              const a = ri(r, 3, 15), b = ri(r, 4, 18), c = ri(r, 2, 12);
              const ans = b + c;
              return mc(r, 1, 2, `計算 ${signed(-a)} + ${b} + ${a} + ${c} 的值。`, signed(ans), [signed(b - c), signed(a + b + c), signed(-a + b + c)], [`利用交換律與結合律，把 ${signed(-a)} 和 ${a} 先配對。`, `${signed(-a)}+${a}=0，所以原式=${b}+${c}=${ans}。`], "加法可以交換、結合，先湊相反數常可簡化。", "看到四個數不要急著照順序算，先找能湊 0 的一對。")
            }
          },
          {
            id: "operation-order",
            title: "依運算規則求值",
            template({ r, ri, mc }) {
              const a = ri(r, 4, 12), b = ri(r, 2, 5), c = ri(r, 3, 8), d = ri(r, 1, 6);
              const ans = a - b * c + d;
              return mc(r, 1, 2, `計算 ${a} - ${b} × ${c} + ${d} 的值。`, ans, [(a - b) * c + d, a - b * (c + d), a + b * c + d], [`先算乘法：${b}×${c}=${b * c}。`, `${a}-${b * c}+${d}=${ans}。`], "有括號先括號；沒有括號時先乘除後加減。", "減號後面接乘法時，不要把前面的減法先算掉。")
            }
          },
          {
            id: "absolute-difference-distance",
            title: "｜a－b｜幾何意義的應用",
            template({ r, ri, mc, signed }) {
              const a = -ri(r, 2, 12), b = ri(r, 3, 15);
              const ans = Math.abs(a - b);
              return mc(r, 1, 2, `數線上 A(${signed(a)})、B(${b})，線段 AB 的長度是多少？`, ans, [Math.abs(a) + Math.abs(b) + 1, b - Math.abs(a), Math.abs(a + b)], [`數線上兩點距離為 |a-b|。`, `AB=|${signed(a)}-${b}|=|${a - b}|=${ans}。`], "數線上兩點 a、b 的距離是 |a-b|。", "距離一定非負；不要把 a-b 的負值直接當答案。")
            }
          },
          {
            id: "arithmetic-application",
            title: "四則運算的應用",
            template({ r, ri, mc }) {
              const start = ri(r, 5, 18), down = ri(r, 7, 20), up = ri(r, 3, 12);
              const ans = start - down + up;
              return mc(r, 1, 2, `某電梯原在 ${start} 樓，先下降 ${down} 層，再上升 ${up} 層，最後在第幾樓？`, ans, [start + down + up, start - down - up, down - start + up], [`下降記為減，上升記為加。`, `${start}-${down}+${up}=${ans}。`], "把情境中的方向轉成正負號，再依序運算。", "不要只把所有數字相加；下降代表負向改變。")
            }
          }
        ]
      },
      {
        title: "指數記法、指數律與科學記號",
        topics: [
          {
            id: "exponent-notation",
            title: "指數記法與性質",
            template({ r, ri, mc }) {
              const base = ri(r, 2, 5), exp = ri(r, 3, 5);
              const value = base ** exp;
              return mc(r, 2, 1, `${Array(exp).fill(base).join("×")} 可記成下列何者？`, `${base}^${exp}`, [`${base}×${exp}`, `${exp}^${base}`, `${base}+${exp}`], [`相同底數連乘 ${exp} 次，記為 ${base}^${exp}。`, `${base}^${exp}=${value}。`], "指數記法表示同底數的連乘次數。", "指數寫在右上角，不是把底數和指數相乘。")
            }
          },
          {
            id: "zero-negative-exponent",
            title: "a⁰與10⁻ᵐ",
            template({ r, ri, pick, mc }) {
              const item = pick(r, [
                { q: "5⁰ 的值是多少？", correct: "1", wrong: ["0", "5", "−1"] },
                { q: "10⁻² 的值是多少？", correct: "0.01", wrong: ["−100", "100", "−0.01"] },
                { q: "2⁻³ 的值是多少？", correct: "1/8", wrong: ["−8", "8", "−1/8"] }
              ]);
              return mc(r, 2, 1, item.q, item.correct, item.wrong, [`a≠0 時，a⁰=1。`, `負指數表示取倒數：10⁻²=1/10²=0.01。`], "零指數為 1（底數不為 0）；負指數表示倒數。", "10⁻² 不是 −100；負號在指數上，表示「分之一」。")
            }
          },
          {
            id: "exponent-comparison",
            title: "指數的比較大小",
            template({ r, ri, mc }) {
              const left = ri(r, 2, 4), right = ri(r, 5, 7);
              const lv = 2 ** left, rv = 3 ** 2;
              return mc(r, 2, 2, `比較 2^${left} 與 3^2 的大小。`, `2^${left} ${lv < rv ? "<" : lv > rv ? ">" : "="} 3^2`, [`2^${left} ${lv < rv ? ">" : "<"} 3^2`, `2^${left} = 3^2`, `無法比較`], [`2^${left}=${lv}，3^2=${rv}。`, `所以 2^${left} ${lv < rv ? "<" : lv > rv ? ">" : "="} 3^2。`], "底數不同時，可先算出數值再比較。", "指數較大不一定整體較大，還要看底數。")
            }
          },
          {
            id: "exponent-laws",
            title: "指數律",
            template({ r, ri, mc }) {
              const base = ri(r, 2, 5), m = ri(r, 2, 4), n = ri(r, 2, 4);
              const exp = m + n;
              return mc(r, 2, 1, `${base}^${m} × ${base}^${n} 可化簡為何者？`, `${base}^${exp}`, [`${base}^${m * n}`, `${2 * base}^${m + n}`, `${base}^${m} + ${base}^${n}`], [`同底數相乘，指數相加。`, `${base}^${m}×${base}^${n}=${base}^(${m}+${n})=${base}^${exp}。`], "同底數相乘：指數相加；同底數相除：指數相減。", "不要把底數相乘，也不要把指數相乘。")
            }
          },
          {
            id: "scientific-notation",
            title: "科學記號表示法",
            template({ r, ri, mc }) {
              const coef = ri(r, 12, 98) / 10, exp = ri(r, 3, 6);
              const normal = Math.round(coef * 10 ** exp);
              const correct = `${coef}×10^${exp}`;
              return mc(r, 2, 2, `${normal.toLocaleString("zh-TW")} 用科學記號表示為何？`, correct, [`${coef}×10^${exp + 1}`, `${coef * 10}×10^${exp - 1}`, `${coef}×10^${exp - 1}`], [`科學記號需寫成 a×10^n，其中 1≤a<10。`, `${normal.toLocaleString("zh-TW")} 的小數點左移 ${exp} 位，得到 ${coef}，所以是 ${correct}。`], "科學記號的係數必須大於等於 1 且小於 10。", "係數不能寫成 10 以上；例如 35×10^2 不是標準科學記號。")
            }
          },
          {
            id: "scientific-notation-digits",
            title: "科學記號與位數的判別",
            template({ r, ri, mc }) {
              const coef = ri(r, 2, 9), exp = ri(r, 4, 8), digits = exp + 1;
              return mc(r, 2, 2, `${coef}×10^${exp} 是幾位整數？`, `${digits} 位`, [`${exp} 位`, `${digits + 1} 位`, `${coef + exp} 位`], [`a×10^n 且 1≤a<10 時，整數位數是 n+1。`, `所以 ${coef}×10^${exp} 是 ${exp}+1=${digits} 位整數。`], "科學記號 a×10^n 的整數位數為 n+1（n 為非負整數）。", "指數 n 不是位數；位數比 n 多 1。")
            }
          },
          {
            id: "scientific-notation-comparison",
            title: "科學記號與數的比較大小",
            template({ r, ri, mc }) {
              const a = ri(r, 11, 49) / 10, b = ri(r, 51, 99) / 10, exp = ri(r, 3, 6);
              return mc(r, 2, 2, `比較 ${a}×10^${exp} 與 ${b}×10^${exp} 的大小。`, `${a}×10^${exp} < ${b}×10^${exp}`, [`${a}×10^${exp} > ${b}×10^${exp}`, `${a}×10^${exp} = ${b}×10^${exp}`, `無法比較`], [`兩數的 10 的次方相同，只要比較前面的係數。`, `因為 ${a}<${b}，所以 ${a}×10^${exp}<${b}×10^${exp}。`], "科學記號比大小：先比 10 的指數；指數相同時比係數。", "不要把係數和指數混在一起加總比較。")
            }
          },
          {
            id: "exponent-arithmetic",
            title: "含有指數的四則運算",
            template({ r, ri, mc }) {
              const a = ri(r, 2, 5), b = ri(r, 2, 4);
              const ans = a ** 2 - b ** 3;
              return mc(r, 2, 2, `計算 ${a}^2 - ${b}^3 的值。`, ans, [a * 2 - b * 3, a ** 2 + b ** 3, a ** 3 - b ** 2], [`先算指數：${a}^2=${a ** 2}，${b}^3=${b ** 3}。`, `${a ** 2}-${b ** 3}=${ans}。`], "指數要先算，再處理乘除與加減。", "a^2 不是 2a；b^3 不是 3b。")
            }
          },
          {
            id: "exponent-law-calculation",
            title: "利用指數律做計算",
            template({ r, ri, mc }) {
              const base = ri(r, 2, 5), m = ri(r, 3, 6), n = ri(r, 2, 5), k = ri(r, 1, Math.min(m, n));
              const exp = m + n - k;
              return mc(r, 2, 2, `${base}^${m} × ${base}^${n} ÷ ${base}^${k} 可化為何者？`, `${base}^${exp}`, [`${base}^${m + n + k}`, `${base}^${m * n - k}`, `${base}^${m + n}`], [`同底數相乘指數相加，同底數相除指數相減。`, `${base}^${m}×${base}^${n}÷${base}^${k}=${base}^(${m}+${n}-${k})=${base}^${exp}。`], "同底數：乘法加指數，除法減指數。", "不要把底數相乘，也不要把指數相乘。")
            }
          },
          {
            id: "exponent-size-comparison",
            title: "利用指數律比較數的大小",
            template({ r, ri, mc }) {
              const a = ri(r, 3, 6), leftExp = ri(r, 2, 4), rightExp = leftExp + ri(r, 1, 3);
              return mc(r, 2, 2, `比較 ${a}^${leftExp} 與 ${a}^${rightExp} 的大小。`, `${a}^${leftExp} < ${a}^${rightExp}`, [`${a}^${leftExp} > ${a}^${rightExp}`, `${a}^${leftExp} = ${a}^${rightExp}`, `無法比較`], [`底數 ${a}>1，指數越大，值越大。`, `因為 ${leftExp}<${rightExp}，所以 ${a}^${leftExp}<${a}^${rightExp}。`], "底數大於 1 時，同底數比大小可直接比較指數。", "這個規則不適用於底數為 0、1 或負數的所有情況；本題底數大於 1。")
            }
          }
        ]
      }
    ]
  },
  "g7-1-c2": {
    source: "使用者提供：教育部課綱對照國一上「標準分解式與分數運算」三主題題型表（2026-07 更新）。",
    sections: [
      {
        title: "因數和倍數與質因數分解",
        topics: [
          {
            id: "factor-and-multiple",
            title: "因數與倍數",
            template({ r, ri, pick, mc }) {
              const n = pick(r, [24, 30, 36, 48]), f = pick(r, [2, 3, 4, 6].filter(x => n % x === 0));
              return mc(r, 3, 1, `下列關於 ${n} 與 ${f} 的敘述，何者正確？`, `${f} 是 ${n} 的因數，${n} 是 ${f} 的倍數`, [`${n} 是 ${f} 的因數，${f} 是 ${n} 的倍數`, `${f} 不是 ${n} 的因數`, `${n} 與 ${f} 沒有因數倍數關係`], [`若 a 能整除 b，則 a 是 b 的因數，b 是 a 的倍數。`, `${n}÷${f}=${n / f} 為整數，所以 ${f}|${n}。`], "因數與倍數成對出現：小的是因數，大的是倍數。", "因數一定小於或等於原數（1 與自身除外仍 ≤ 原數）；倍數一定 ≥ 原數。")
            }
          },
          {
            id: "divisibility-rules",
            title: "特殊整數的倍數判別法",
            template({ r, ri, pick, mc }) {
              const item = pick(r, [
                { n: 234, rule: "9", ok: true, why: "2+3+4=9，可被 9 整除" },
                { n: 315, rule: "5", ok: true, why: "個位數是 5" },
                { n: 418, rule: "3", ok: false, why: "4+1+8=13，不能被 3 整除" }
              ]);
              return mc(r, 3, 1, `${item.n} 是否為 ${item.rule} 的倍數？`, item.ok ? "是" : "否", [item.ok ? "否" : "是", "無法判斷", "條件不足"], [`使用 ${item.rule} 的倍數判別法。`, item.why + `，所以${item.ok ? "是" : "不是"} ${item.rule} 的倍數。`], "2/5 看個位；3/9 看各位數字和；11 看奇偶位差。", "倍數判別是充分條件；不符合規則不一定不是倍數（本題已可直接判定）。")
            }
          },
          {
            id: "prime-and-composite",
            title: "質數與合數",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { q: "下列何者是質數？", correct: "29", wrong: ["1", "21", "39"] },
                { q: "下列何者是合數？", correct: "35", wrong: ["2", "13", "17"] }
              ]);
              return mc(r, 3, 1, item.q, item.correct, item.wrong, [`質數恰有 2 個正因數：1 與自己；1 不是質數。`, `${item.correct} 符合題意。`], "質數只有 1 與本身兩個正因數；合數還有其他因數。", "1 既不是質數也不是合數。")
            }
          },
          {
            id: "prime-factor",
            title: "質因數",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { n: 24, p: 2 },
                { n: 30, p: 5 },
                { n: 42, p: 7 }
              ]);
              return mc(r, 3, 1, `${item.n} 的質因數中，一定包含下列哪一個？`, `${item.p}`, [`${item.p + 1}`, `${item.p * 2}`, `${item.p + 2}`], [`把 ${item.n} 分解成質數的乘積。`, `${item.n} 含有質因數 ${item.p}。`], "質因數只能是質數，且整除原數。", "因數不一定是質數；質因數專指質數因數。")
            }
          },
          {
            id: "prime-factorization-standard",
            title: "質因數分解與標準分解式",
            template({ r, ri, pick, mc }) {
              const item = pick(r, [
                { n: 72, ans: "2^3×3^2" },
                { n: 60, ans: "2^2×3×5" },
                { n: 48, ans: "2^4×3" }
              ]);
              return mc(r, 3, 1, `${item.n} 的標準分解式為何？`, item.ans, [`2^2×3^3`, `2×${item.n / 2}`, `${item.n}`], [`用短除法或連除法分解 ${item.n}。`, `整理成 a×b×… 且各底數為質數、指數寫成次方，得 ${item.ans}。`], "標準分解式：底數為質數，相同底數合併成指數。", "2×2×2×3 不是標準式；應寫成 2³×3。")
            }
          },
          {
            id: "factor-identification-application",
            title: "因數判別的應用",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { n: 36, f: 9, groups: 4 },
                { n: 48, f: 6, groups: 8 },
                { n: 60, f: 12, groups: 5 }
              ]);
              return mc(r, 3, 2, `要把 ${item.n} 個物品平均分成若干組，每組 ${item.f} 個且全部分完，可分成幾組？`, `${item.groups}`, [`${item.f}`, `${item.n - item.f}`, `${item.groups + 1}`], [`每組 ${item.f} 個，且 ${item.f}|${item.n}。`, `${item.n}÷${item.f}=${item.groups} 組。`], "能整除的分組數 = 原數 ÷ 每組個數。", "題目已給每組個數，不是求因數個數。")
            }
          },
          {
            id: "multiple-identification-application",
            title: "倍數判別的應用",
            template({ r, ri, pick, mc }) {
              const base = ri(r, 8, 15), step = pick(r, [3, 4, 5, 6]), target = base + step * ri(r, 2, 4);
              return mc(r, 3, 2, `某數列首項 ${base}，每次加 ${step}，下列哪一個一定是此數列的項？`, `${target}`, [`${target + 1}`, `${base + step - 1}`, `${target + step}`], [`數列各項都是 ${step} 的倍數加上首項餘數的型態。`, `${base}、${base + step}、…、${target} 都在數列中。`], "等差數列中，相鄰兩項差固定；判斷是否為項可先檢查與首項的差能否被公差整除。", "不是每個比首項大的數都在數列中。")
            }
          },
          {
            id: "prime-composite-identification",
            title: "質數與合數的判別",
            template({ r, pick, mc }) {
              const n = pick(r, [51, 57, 91, 93, 87]);
              const ans = "合數";
              return mc(r, 3, 1, `${n} 是質數還是合數？`, ans, ["質數", "既不是質數也不是合數", "無法判別"], [`找 ${n} 是否有 1 與自己以外的因數。`, `${n} 可分解，所以是合數。`], "判別合數：找出一個非平凡因數即可。", "質數判別要確認沒有其他因數，不能只看個位數。")
            }
          },
          {
            id: "standard-form-application",
            title: "標準分解式的應用",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { n: 72, exp2: 3, exp3: 2, ans: 12 },
                { n: 60, exp2: 2, exp3: 1, exp5: 1, ans: 6 }
              ]);
              const wrong = item.ans + 2;
              return mc(r, 3, 2, `已知 ${item.n} 的標準分解式，其所有正因數個數為何？`, `${item.ans}`, [`${wrong}`, `${item.ans - 1}`, `${item.ans + 3}`], [`指數加 1 再相乘：因數個數 = 各指數 +1 的乘積。`, `${item.n} 的因數個數為 ${item.ans}。`], "因數個數公式：(a+1)(b+1)…，a、b 為標準分解式指數。", "不要把指數直接相加當因數個數。")
            }
          },
          {
            id: "factor-multiple-standard-form",
            title: "因數和倍數與標準分解式",
            template({ r, pick, mc }) {
              const a = 24, b = 36;
              return mc(r, 3, 2, `利用 ${a}=2^3×3、${b}=2^2×3^2 的標準分解式，${a} 與 ${b} 的最小公倍數為何？`, "72", ["144", "12", "216"], [`lcm 取各質因數的較大指數：2^max(3,2)×3^max(1,2)=2^3×3^2=72。`, `所以最小公倍數是 72。`], "lcm：各質因數取較大指數相乘。", "lcm 不是兩數相加；也不要把指數相加。")
            }
          }
        ]
      },
      {
        title: "最大公因數與最小公倍數",
        topics: [
          {
            id: "common-factor-gcd",
            title: "公因數與最大公因數",
            template({ r, pick, mc }) {
              const pair = pick(r, [[12, 18], [16, 24], [20, 30]]);
              const [a, b] = pair;
              const g = pair[0] === 12 ? 6 : pair[0] === 16 ? 8 : 10;
              return mc(r, 3, 1, `${a} 與 ${b} 的公因數中，最大的是哪一個？`, `${g}`, [`${g / 2}`, `${a}`, `${b}`], [`列出兩數因數，找共同且最大的。`, `${a} 與 ${b} 的最大公因數是 ${g}。`], "最大公因數是同時整除兩數的最大正整數。", "公因數不會比較小的那個數還大。")
            }
          },
          {
            id: "coprime-concept",
            title: "互質",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { pair: "8 與 15", ok: "互質", why: "公因數只有 1" },
                { pair: "12 與 18", ok: "不互質", why: "公因數有 1、2、3、6" }
              ]);
              return mc(r, 3, 1, `${item.pair} 是否互質？`, item.ok, [item.ok === "互質" ? "不互質" : "互質", "條件不足", "無法判斷"], [`互質指最大公因數為 1。`, item.why + `，所以${item.ok}。`], "互質 = gcd(a,b)=1，不代表兩數都是質數。", "8 與 15 互質，但 8 不是質數。")
            }
          },
          {
            id: "common-multiple-lcm",
            title: "公倍數與最小公倍數",
            template({ r, pick, mc }) {
              const pair = pick(r, [[4, 6], [6, 8], [5, 10]]);
              const [a, b] = pair;
              const l = a === 4 ? 12 : a === 6 ? 24 : 10;
              return mc(r, 3, 1, `${a} 與 ${b} 的最小公倍數是多少？`, `${l}`, [`${a * b}`, `${l / 2}`, `${l + a}`], [`公倍數同時是兩數的倍數；最小公倍數是最小的那個。`, `[${a},${b}]=${l}。`], "最小公倍數是兩數共同倍數中最小正整數。", "兩數相乘不一定是 lcm（除非互質）。")
            }
          },
          {
            id: "coprime-identification",
            title: "互質的判別",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { a: 9, b: 14, ans: "互質" },
                { a: 21, b: 35, ans: "不互質" }
              ]);
              return mc(r, 3, 1, `${item.a} 與 ${item.b} 是否互質？`, item.ans, [item.ans === "互質" ? "不互質" : "互質", "無法判斷", "條件不足"], [`求 gcd(${item.a},${item.b})。`, `gcd${item.ans === "互質" ? "=1，互質" : ">1，不互質"}。`], "互質判別：算 gcd 是否為 1。", "兩個合數也可能互質，如 8 與 9。")
            }
          },
          {
            id: "find-gcd-and-lcm",
            title: "求最大公因數與最小公倍數",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { a: 48, b: 72, g: 24, l: 144 },
                { a: 36, b: 60, g: 12, l: 180 }
              ]);
              return mc(r, 3, 2, `${item.a} 與 ${item.b} 的最大公因數與最小公倍數依序為何？`, `(${item.g}, ${item.l})`, [`(${item.l}, ${item.g})`, `(${item.g}, ${item.g * 2})`, `(${item.g / 2}, ${item.l})`], [`48=2⁴×3，72=2³×3²；gcd=2³×3=${item.g}，lcm=2⁴×3²=${item.l}。`, `所以依序為 (${item.g}, ${item.l})。`], "標準分解式：gcd 取小指數，lcm 取大指數。", "gcd 與 lcm 不可對調；且 a×b=gcd×lcm。")
            }
          },
          {
            id: "gcd-compare-size",
            title: "利用最大公因數比較大小",
            template({ r, ri, mc, frac, over }) {
              const p = ri(r, 2, 5), q = ri(r, p + 2, p + 6), s = ri(r, 3, 7);
              const left = frac(p, q), right = frac(p + 1, q + s);
              const ans = p * (q + s) < (p + 1) * q ? `${left} < ${right}` : `${left} > ${right}`;
              return mc(r, 3, 2, `比較 ${left} 與 ${right} 的大小。`, ans, [ans.includes("<") ? `${left} > ${right}` : `${left} < ${right}`, `${left} = ${right}`, `無法比較`], [`通分或交叉相乘：${p}×${q + s} 與 ${p + 1}×${q} 比較。`, `所以 ${ans.replace(" < ", " 小於 ").replace(" > ", " 大於 ")}。`], "正分數比大小可交叉相乘（分母為正時）。", "比較前先確認兩分數皆為正。")
            }
          },
          {
            id: "lcm-find-dividend",
            title: "利用最小公倍數求被除數",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { a: 4, b: 6, lcm: 12 },
                { a: 5, b: 6, lcm: 30 },
                { a: 6, b: 8, lcm: 24 }
              ]);
              return mc(r, 3, 2, `某數除以 ${item.a} 餘 0、除以 ${item.b} 餘 0，且為最小的正整數，此數為何？`, `${item.lcm}`, [`${item.lcm + item.a}`, `${item.a * item.b}`, `${item.lcm / 2}`], [`同時被 ${item.a}、${item.b} 整除 → 是 lcm 的倍數。`, `最小正解為 [${item.a},${item.b}]=${item.lcm}。`], "餘 0 即為倍數；最小共同倍數用 lcm。", "lcm 已是最小，不要再加公倍數。")
            }
          },
          {
            id: "gcd-application",
            title: "最大公因數的應用",
            template({ r, ri, pick, mc }) {
              const pair = pick(r, [[48, 72], [60, 84], [54, 81]]);
              const [a, b] = pair, g = pair[0] === 48 ? 24 : pair[0] === 60 ? 12 : 27;
              return mc(r, 3, 2, `將 ${a} 個紅球與 ${b} 個藍球分成若干組，每組紅藍數量相同且全部分完，最多幾組？`, `${g}`, [`${a / g + b / g}`, `${a + b}`, `${Math.min(a, b)}`], [`每組紅藍比相同 → 組數是 gcd。`, `gcd(${a},${b})=${g}，最多 ${g} 組。`], "『最多分組且全部分完』→ 最大公因數。", "每組球數總和不是組數。")
            }
          },
          {
            id: "lcm-application",
            title: "最小公倍數的應用",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { a: 6, b: 8, ans: 24, ctx: "兩公車分別每 6、8 分鐘一班，同時出站後至少幾分鐘再同時出站？" },
                { a: 4, b: 10, ans: 20, ctx: "甲每 4 天、乙每 10 天做一次，今天同時做，至少幾天後再同時？" }
              ]);
              return mc(r, 3, 2, item.ctx, `${item.ans}`, [`${item.a + item.b}`, `${item.a * item.b}`, `${item.ans + item.a}`], [`週期問題 → 最小公倍數。`, `[${item.a},${item.b}]=${item.ans}。`], "『同時再次』→ lcm。", "兩週期相加不是 lcm。")
            }
          },
          {
            id: "gcd-lcm-evaluation",
            title: "最大公因數與最小公倍數的求值",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { a: 30, b: 45, g: 15, l: 90 },
                { a: 28, b: 42, g: 14, l: 84 }
              ]);
              return mc(r, 3, 2, `求 ${item.a} 與 ${item.b} 的 gcd 與 lcm。`, `gcd=${item.g}，lcm=${item.l}`, [`gcd=${item.l}，lcm=${item.g}`, `gcd=${item.g}，lcm=${item.g * 2}`, `gcd=${item.g / 2}，lcm=${item.l}`], [`分解或短除法求 gcd、lcm。`, `(gcd,lcm)=(${item.g},${item.l})；檢查 ${item.a}×${item.b}=${item.g}×${item.l}。`], "算完可用 a×b=gcd×lcm 驗算。", "gcd 必須同時整除兩數；lcm 必須是兩數的倍數。")
            }
          }
        ]
      },
      {
        title: "分數的四則運算",
        topics: [
          {
            id: "fraction-basics",
            title: "分數的基本概念",
            template({ r, ri, mc, over }) {
              const q = ri(r, 3, 8);
              return mc(r, 4, 1, `把一塊蛋糕平均分成 ${q} 份，取其中 1 份，是整塊蛋糕的幾分之幾？`, over(1, q), [over(q, 1), over(1, q * 2), over(2, q)], [`平均分成 ${q} 份，每份是 ${over(1, q)}。`, `取 1 份即 ${over(1, q)}。`], "單位量 = 1÷份數；取 k 份 = k÷份數。", "分母是總份數，分子是取的份數。")
            }
          },
          {
            id: "positive-fraction-compare",
            title: "正分數大小的比較",
            template({ r, ri, mc, frac, over }) {
              const p = ri(r, 2, 5), q = ri(r, p + 2, p + 6), s = ri(r, 3, 7);
              const left = frac(p, q), right = frac(p + 1, q + s);
              const cmp = p * (q + s) < (p + 1) * q ? `${left} < ${right}` : `${left} > ${right}`;
              return mc(r, 4, 1, `比較 ${left} 與 ${right} 的大小。`, cmp, [cmp.includes("<") ? `${left} > ${right}` : `${left} < ${right}`, `${left} = ${right}`, `無法比較`], [`正分數可交叉相乘比較。`, `${p}×${q + s} 與 ${p + 1}×${q} 比較得 ${cmp}。`], "同分母比分子；同分子比分母（分母小的大）。", "交叉相乘僅適用分母為正的情況。")
            }
          },
          {
            id: "fraction-add-subtract",
            title: "分數的加減",
            template({ r, ri, mc, frac, over }) {
              const p = ri(r, 1, 4), q = ri(r, 2, 6), s = ri(r, 2, 5);
              const n = p * s + q, d = q * s;
              const ans = frac(n, d);
              return mc(r, 4, 1, `計算 ${over(p, q)} + ${over(1, s)}。`, ans, [frac(p + 1, q + s), frac(n, q + s), frac(p * s - q, q * s)], [`公分母 ${q * s}：${over(p, q)}=${over(p * s, q * s)}，${over(1, s)}=${over(q, q * s)}。`, `相加得 ${ans}。`], "異分母先通分再加减分子。", "分數相加不能分子分母各自相加。")
            }
          },
          {
            id: "fraction-multiply-divide",
            title: "分數的乘除",
            template({ r, ri, mc, frac, over }) {
              const p = ri(r, 2, 5), q = ri(r, 3, 7), s = ri(r, 2, 6), t = ri(r, 3, 8);
              const ans = frac(p * t, q * s);
              return mc(r, 4, 1, `計算 ${over(p, q)} × ${over(t, s)}。`, ans, [frac(p + t, q + s), frac(p * s, q * t), frac(p * t, q + s)], [`分數相乘：分子乘分子、分母乘分母。`, `${over(p, q)}×${over(t, s)}=${over(p * t, q * s)}=${ans}。`], "乘法先交叉約分再算更簡便。", "除法要改乘倒數，不是顛倒被除數。")
            }
          },
          {
            id: "fraction-four-operations",
            title: "分數的四則運算",
            template({ r, ri, mc, frac, over }) {
              const p = ri(r, 2, 4), q = ri(r, 3, 6), s = ri(r, 2, 5);
              const prod = p * s, ans = frac(prod + q, q);
              return mc(r, 4, 2, `計算 ${over(p, q)} × ${s} + 1。`, ans, [frac(p * s + q, q * s), frac(p + s, q), frac(prod, q * s)], [`先乘：${over(p, q)}×${s}=${frac(prod, q)}。`, `再加 1：${frac(prod, q)}+1=${ans}。`], "先乘除後加減；加 1 可寫成 +${over(q,q)} 通分。", "×${s} 只乘分子或只乘分母都不對。")
            }
          },
          {
            id: "fraction-compare-application",
            title: "分數大小的比較與應用",
            template({ r, mc, frac, over }) {
              const a = frac(3, 5), b = frac(5, 8);
              return mc(r, 4, 2, `甲吃了蛋糕的 ${a}，乙吃了 ${b}，誰吃得較多？`, "乙", ["甲", "一樣多", "無法比較"], [`3/5=0.6，5/8=0.625；或通分 24/40 與 25/40。`, `5/8 > 3/5，乙較多。`], "應用題比大小：通分、交叉相乘或換成小數。", "分母大不一定分數小，要看分子。")
            }
          },
          {
            id: "fraction-four-ops-application",
            title: "分數四則運算的應用",
            template({ r, ri, pick, mc, over }) {
              const denom = pick(r, [4, 6, 8]);
              const total = denom * ri(r, 4, 8);
              const morning = total / denom;
              const part = ri(r, 2, Math.max(2, Math.floor(morning / 2)));
              const ans = total - morning - part;
              return mc(r, 4, 2, `一桶水 ${total} 公升，上午用去 ${over(1, denom)} 桶，下午用去 ${part} 公升，剩多少公升？`, `${ans}`, [`${total - morning}`, `${total - part}`, `${ans + part}`], [`上午用 ${over(1, denom)} 桶 = ${morning} 公升。`, `剩 ${total}-${morning}-${part}=${ans} 公升。`], "分數部分先換算成實際量，再與其他量一起算。", "「用去 1/n 桶」= 用去總量的 1/n。")
            }
          }
        ]
      }
    ]
  },
  "g7-1-c3": {
    source: "使用者提供：教育部課綱對照國一上「一元一次方程式」二主題題型表（2026-07 更新）。",
    sections: [
      {
        title: "文字符號的列式與運算",
        topics: [
          {
            id: "literal-expression-setup",
            title: "文字符號的列式",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { q: "某數為 x，其 2 倍加 7 可記為？", ans: "2x + 7", wrong: ["2 + 7x", "x + 27", "2(x + 7)"] },
                { q: "某數為 x，比 15 少 4 可記為？", ans: "x − 4", wrong: ["15 − x", "x + 4", "4 − x"] }
              ]);
              return mc(r, 5, 1, item.q, item.ans, item.wrong, [`依題意把文字轉成含 x 的式子。`, `答案為 ${item.ans}。`], "先確認『倍、加、少、多』對應的運算順序。", "「比 A 少 B」通常是 x = A − B 或 x − B，要看 x 代表誰。")
            }
          },
          {
            id: "multiplication-shorthand",
            title: "乘號的簡記",
            template({ r, ri, mc }) {
              const k = ri(r, 2, 9);
              return mc(r, 5, 1, `${k} × x 的簡記式為何？`, `${k}x`, [`x${k}`, `${k} + x`, `x^${k}`], [`數與文字相乘可省略乘號，數寫在文字前。`, `${k}×x 簡記為 ${k}x。`], "國中代數中 3×x 寫成 3x；x×x 才是 x²。", "不要把 3x 寫成 x3。")
            }
          },
          {
            id: "linear-expression-concept",
            title: "一元一次式",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { correct: "3x − 5", wrong: ["x² + 1", "3/x + 2", "5"] },
                { correct: "−2x + 7", wrong: ["xy + 1", "x³ − x", "2/x"] }
              ]);
              return mc(r, 5, 1, "下列哪一個是一元一次式？", item.correct, item.wrong, [`一元一次式：只含一個未知數，且其次數為 1。`, `${item.correct} 符合。`], "一次式中 x 的指數是 1；分母含 x 的不是一次式。", "常數 5 是零次式，不是一元一次式。")
            }
          },
          {
            id: "linear-expression-operation",
            title: "一元一次式的運算",
            template({ r, ri, mc }) {
              const a = ri(r, 2, 5), b = ri(r, 1, 6), c = ri(r, 2, 4), d = ri(r, 1, 5);
              const ans = `${a + c}x + ${b + d}`;
              return mc(r, 5, 1, `計算 (${a}x + ${b}) + (${c}x + ${d})。`, ans, [`${a + c}x + ${b - d}`, `${a + c + b + d}`, `${a}x + ${c}x + ${b * d}`], [`合併 x 項：${a}x+${c}x=${a + c}x。`, `合併常數項：${b}+${d}=${b + d}。`, `得 ${ans}。`], "一次式加減：合併同類項（x 項、常數項分開）。", "不能把 x 項與常數項直接相加。")
            }
          },
          {
            id: "linear-expression-value",
            title: "一元一次式的值",
            template({ r, ri, mc, signed }) {
              const x = ri(r, 2, 8), a = ri(r, 2, 6), b = ri(r, 1, 9);
              const ans = a * x + b;
              return mc(r, 5, 1, `當 x = ${x} 時，${a}x + ${b} 的值是多少？`, `${ans}`, [`${a + x + b}`, `${a * x - b}`, `${ans + 1}`], [`代入 x=${x}：${a}×${x}+${b}=${a * x}+${b}。`, `所以值為 ${ans}。`], "求值：把未知數代成數字，依運算順序計算。", "先乘後加；不要漏乘 x。")
            }
          },
          {
            id: "linear-expression-simplify",
            title: "一元一次式的化簡",
            template({ r, ri, mc }) {
              const a = ri(r, 2, 5), b = ri(r, 1, 4), c = ri(r, 3, 8);
              const coef = a + b, ans = `${coef}x + ${c}`;
              return mc(r, 5, 1, `化簡 ${a}x + ${b}x + ${c}。`, ans, [`${a + b + c}x`, `${coef}x − ${c}`, `${a}x + ${b + c}x`], [`合併 x 項：${a}x+${b}x=${coef}x。`, `常數項 ${c} 保留，得 ${ans}。`], "化簡 = 合併同類項。", "只有同類項才能合併。")
            }
          },
          {
            id: "linear-expression-word-setup",
            title: "一元一次式的列式",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { q: "長方形長為 x 公分、寬 5 公分，周長（公分）為？", ans: "2(x + 5)", wrong: ["x + 5", "2x + 5", "x × 5"] },
                { q: "每本 x 元，買 4 本共多少元？", ans: "4x", wrong: ["x + 4", "4 + x", "x − 4"] }
              ]);
              return mc(r, 5, 2, item.q, item.ans, item.wrong, [`依題意列出含 x 的式子。`, `答案為 ${item.ans}。`], "周長、總價等情境先確認公式再代入。", "周長是兩長兩寬，不是長加寬一次。")
            }
          },
          {
            id: "linear-expression-setup-and-evaluate",
            title: "一元一次式的列式與求值",
            template({ r, ri, mc }) {
              const x = ri(r, 3, 7), w = ri(r, 2, 5);
              const perimeter = 2 * (x + w), ans = perimeter;
              return mc(r, 5, 2, `長方形長 x = ${x} 公分、寬 ${w} 公分，周長是多少公分？`, `${ans}`, [`${x + w}`, `${2 * x + w}`, `${ans + 2}`], [`周長 = 2(長+寬) = 2(${x}+${w})。`, `2×${x + w}=${ans} 公分。`], "先列 2(x+寬)，再代入已知 x 求值。", "不要只算一條長加一條寬。")
            }
          },
          {
            id: "linear-expression-application",
            title: "一元一次式的應用",
            template({ r, ri, mc }) {
              const son = ri(r, 8, 14), dad = 3 * son + 5;
              return mc(r, 5, 2, `兒子今年 ${son} 歲，爸爸年齡是兒子的 3 倍加 5 歲，爸爸幾歲？`, `${dad}`, [`${son + 5}`, `${3 * son}`, `${dad - 3}`], [`列式：爸爸 = 3×${son}+5。`, `3×${son}+5=${dad} 歲。`], "年齡題先定未知數代表誰，再寫倍數與加減關係。", "「3 倍加 5」是 3×年齡+5，不是 (年齡+5)×3。")
            }
          }
        ]
      },
      {
        title: "解一元一次方程式與應用問題",
        topics: [
          {
            id: "linear-equation-concept",
            title: "一元一次方程式",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { correct: "2x + 3 = 11", wrong: ["2x + 3", "x² = 4", "2x + 3 > 11"] },
                { correct: "5 − x = 2", wrong: ["5 − x", "x + y = 5", "1/x = 2"] }
              ]);
              return mc(r, 5, 1, "下列哪一個是一元一次方程式？", item.correct, item.wrong, [`方程式含有等號，且未知數 x 的次數為 1。`, `${item.correct} 是方程式且一次。`], "方程式 = 含等號的等量關係；一次指 x 的次數為 1。", "沒有等號的是式子，不是方程式。")
            }
          },
          {
            id: "linear-equation-solution",
            title: "一元一次方程式的解",
            template({ r, ri, mc }) {
              const x = ri(r, 2, 9), a = ri(r, 2, 5), b = ri(r, 1, 8), c = a * x + b;
              return mc(r, 5, 1, `x = ${x} 是否為方程式 ${a}x + ${b} = ${c} 的解？`, "是", ["否", "無法判斷", "條件不足"], [`代入 x=${x}：左邊 ${a}×${x}+${b}=${c}，等於右邊 ${c}。`, `所以 x=${x} 是解。`], "檢驗解：把 x 代回方程式，看兩邊是否相等。", "只算左邊或只算右邊不夠，兩邊都要比。")
            }
          },
          {
            id: "balance-and-transposition",
            title: "等量公理與移項法則",
            template({ r, ri, mc, signed }) {
              const b = ri(r, 3, 12), c = ri(r, b + 2, b + 15);
              const ans = c - b;
              return mc(r, 5, 1, `解方程式 x + ${b} = ${c}。`, `x = ${ans}`, [`x = ${ans + b}`, `x = ${c + b}`, `x = ${signed(b - c)}`], [`移項：x = ${c} − ${b}。`, `x = ${ans}。`], "移項 = 把項移到另一邊並變號。", "移項時符號要改變。")
            }
          },
          {
            id: "solve-linear-equation",
            title: "解一元一次方程式",
            template({ r, ri, mc, over }) {
              const x = ri(r, 2, 8), a = ri(r, 2, 5), b = ri(r, 1, 9), c = a * x + b;
              return mc(r, 5, 2, `解方程式 ${a}x + ${b} = ${c}。`, `x = ${x}`, [`x = ${x + 1}`, `x = ${x - 1}`, `x = ${x + b}`], [`兩邊減 ${b}：${a}x = ${c - b}。`, `兩邊除以 ${a}：x = ${over(c - b, a)} = ${x}。`], "ax+b=c：先移常數，再除以 x 的係數。", "移項或除法時別漏掉符號。")
            }
          },
          {
            id: "word-problem-steps",
            title: "解應用問題的步驟",
            template({ r, mc }) {
              return mc(r, 5, 1, "解一元一次方程式應用問題時，第一步通常要做什麼？", "設未知數並說明其代表意義", ["直接猜答案", "先把所有數字相加", "只寫算式不設未知數"], [`應用題需先把文字轉成數學語言。`, `第一步：設未知數 x（或其他）並寫清楚代表什麼。`], "應用題流程：設元 → 列式 → 解方程 → 檢查 → 答。", "沒有未知數就無法建立等量關係。")
            }
          },
          {
            id: "balance-property-concept",
            title: "等量公理的概念",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { q: "若 a = b，則 a + 3 與 b + 3 的關係為？", ans: "相等", wrong: ["a + 3 較大", "b + 3 較大", "無法比較"] },
                { q: "若 a = b 且 c ≠ 0，則 ac 與 bc 的關係為？", ans: "相等", wrong: ["ac 較大", "bc 較大", "不一定相等"] }
              ]);
              return mc(r, 5, 1, item.q, item.ans, item.wrong, [`等量公理：等式兩邊同加、同減、同乘（非 0）、同除（非 0）仍相等。`, `所以兩邊 ${item.ans}。`], "解方程的每一步都在兩邊做相同運算。", "只有同加同減同乘同除（非 0）才保持相等。")
            }
          },
          {
            id: "solution-and-parameter",
            title: "方程式的解與求值問題",
            template({ r, ri, mc }) {
              const x = ri(r, 2, 8), a = ri(r, 2, 6), c = 2 * x + a;
              return mc(r, 5, 2, `若 x = ${x} 是方程式 2x + a = ${c} 的解，則 a =？`, `${a}`, [`${a + 1}`, `${c}`, `${x + a}`], [`代入 x=${x}：2×${x}+a=${c}。`, `${2 * x}+a=${c}，所以 a=${a}。`], "已知解求參數：把解代入方程式。", "a 是待求常數，不要和 x 混淆。")
            }
          },
          {
            id: "linear-equation-word-setup",
            title: "一元一次方程式的列式",
            template({ r, ri, mc }) {
              const x = ri(r, 5, 15), ans = 2 * x - 3;
              return mc(r, 5, 2, `某數的 2 倍減 3 等於 ${ans}，設某數為 x，可列何者？`, `2x − 3 = ${ans}`, [`2(x − 3) = ${ans}`, `2x + 3 = ${ans}`, `x − 3 = ${ans}`], [`「2 倍減 3」→ 2x − 3。`, `等於 ${ans}，所以 2x − 3 = ${ans}。`], "列方程式：左邊寫代數式，右邊寫已知數。", "減 3 是整式減 3，不是只對 x 減 3 再乘 2。")
            }
          },
          {
            id: "distribution-problem",
            title: "分配問題",
            template({ r, ri, mc }) {
              const per = ri(r, 4, 7), rem = ri(r, 1, 4), people = ri(r, 5, 10);
              const total = per * people + rem;
              return mc(r, 5, 2, `糖果分給 ${people} 人，每人 ${per} 顆，最後剩 ${rem} 顆，共有幾顆？`, `${total}`, [`${per * people}`, `${total - rem}`, `${total + rem}`], [`設總數為 x：x = ${per}×${people}+${rem}。`, `x = ${total} 顆。`], "分配問題：總數 = 每人數×人數 + 剩餘（或 − 不足）。", "剩餘要加回，不足要減去。")
            }
          },
          {
            id: "water-saving-problem",
            title: "省水問題",
            template({ r, ri, pick, mc }) {
              const before = ri(r, 20, 40), rate = pick(r, [10, 20, 25]), after = before * (100 - rate) / 100;
              return mc(r, 5, 2, `原本每天用水 ${before} 公升，節省 ${rate}% 後，每天用水多少公升？`, `${after}`, [`${before + rate}`, `${before * rate / 100}`, `${after + before}`], [`節省 ${rate}% 表示用原來的 ${100 - rate}%。`, `${before}×${100 - rate}% = ${after} 公升。`], "省水 %：新用量 = 原用量×(1 − 節省率)。", "節省 20% 不是減 20 公升，是減原量的 20%。")
            }
          },
          {
            id: "shopping-problem",
            title: "購物問題",
            template({ r, ri, mc }) {
              const count = ri(r, 2, 5), change = ri(r, 5, 20), pay = 100, price = (pay - change) / count;
              return mc(r, 5, 2, `用 ${pay} 元買 ${count} 個相同物品，找 ${change} 元，每個多少元？`, `${price}`, [`${pay - change}`, `${price + 1}`, `${count * change}`], [`實付 ${pay}−${change}=${pay - change} 元。`, `${count} 個共 ${pay - change} 元，每個 ${price} 元。`], "購物：總價 = 付錢 − 找零；單價 = 總價÷數量。", "找零是退還的，要從付錢中扣掉。")
            }
          },
          {
            id: "plan-comparison-problem",
            title: "方案問題",
            template({ r, ri, mc }) {
              const baseA = 100, rateA = 2, baseB = 50, rateB = 5;
              const x = (baseA - baseB) / (rateB - rateA);
              return mc(r, 5, 2, `方案甲：月租 ${baseA} 元加每分鐘 ${rateA} 元；方案乙：月租 ${baseB} 元加每分鐘 ${rateB} 元。通話幾分鐘時兩方案費用相同？`, `${x} 分鐘`, [`${x + 5} 分鐘`, `${x - 5} 分鐘`, `${baseA} 分鐘`], [`設 x 分鐘：${baseA}+${rateA}x = ${baseB}+${rateB}x。`, `移項得 ${rateB - rateA}x = ${baseA - baseB}，x = ${x}。`], "方案相同：兩個一次式相等，解 x。", "月租與計次費要分開列。")
            }
          },
          {
            id: "discount-problem",
            title: "折扣問題",
            template({ r, ri, pick, mc }) {
              const discount = pick(r, [0.8, 0.75, 0.85]), sale = ri(r, 12, 20) * 50, original = Math.round(sale / discount);
              const label = discount === 0.8 ? "八" : discount === 0.75 ? "七五" : "八五";
              return mc(r, 5, 2, `某商品打${label}折後售價 ${sale} 元，原價多少元？`, `${original}`, [`${Math.round(sale * discount)}`, `${sale + 100}`, `${original - 50}`], [`打${label}折 = 原價×${discount} = ${sale}。`, `原價 = ${sale}÷${discount} = ${original} 元。`], "折扣：售價 = 原價×折扣率；求原價用除法。", "打八折是×0.8，不是減 80 元。")
            }
          }
        ]
      }
    ]
  },
  "g7-2-c1": {
    source: "使用者提供：教育部課綱對照國一「二元一次聯立方程式」二主題題型表（2026-07 更新；對應國一下第一單元 g7-2-c1）。",
    sections: [
      {
        title: "二元一次方程式",
        topics: [
          {
            id: "two-variable-linear-expression",
            title: "二元一次式",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { correct: "3x + 2y − 5", wrong: ["x² + y", "3/x + y", "5"] },
                { correct: "−x + 4y + 1", wrong: ["xy + 1", "x + y²", "x − y − z"] }
              ]);
              return mc(r, 6, 1, "下列哪一個是二元一次式？", item.correct, item.wrong, [`二元一次式：含 x、y，且兩者最高次數皆為 1。`, `${item.correct} 符合。`], "一次式中 x、y 的指數都是 1；不能有 xy、x² 等。", "三個未知數的不是二元一次式。")
            }
          },
          {
            id: "two-variable-expression-simplify",
            title: "二元一次式的化簡",
            template({ r, ri, mc }) {
              const a = ri(r, 2, 4), b = ri(r, 1, 5), c = ri(r, 2, 4), d = ri(r, 1, 5);
              const ans = `${a + c}x + ${b + d}y`;
              return mc(r, 6, 1, `化簡 (${a}x + ${b}y) + (${c}x + ${d}y)。`, ans, [`${a + c}x + ${b - d}y`, `${a + b}x + ${c + d}y`, `${a + c + b + d}xy`], [`合併 x 項：${a}x+${c}x=${a + c}x。`, `合併 y 項：${b}y+${d}y=${b + d}y。`, `得 ${ans}。`], "化簡時 x 項、y 項、常數項分開合併。", "xy 與 x 不是同類項。")
            }
          },
          {
            id: "two-variable-linear-equation",
            title: "二元一次方程式",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { correct: "2x + y = 7", wrong: ["2x + y", "x² + y = 7", "2x + y > 7"] },
                { correct: "x − 3y = 5", wrong: ["x − 3y", "xy = 5", "x + y + z = 5"] }
              ]);
              return mc(r, 6, 1, "下列哪一個是二元一次方程式？", item.correct, item.wrong, [`含等號，且 x、y 的次數皆為 1。`, `${item.correct} 符合。`], "二元一次方程式：兩個一次未知數 + 等號。", "沒有等號的是式子，不是方程式。")
            }
          },
          {
            id: "two-variable-equation-solution",
            title: "二元一次方程式的解",
            template({ r, ri, mc }) {
              const x = ri(r, 1, 6), y = ri(r, 1, 6), s = x + y, t = x - y;
              return mc(r, 6, 1, `(${x}, ${y}) 是否為 x + y = ${s} 的解？`, "是", ["否", "無法判斷", "條件不足"], [`代入 x=${x}、y=${y}：左邊 ${x}+${y}=${s}。`, `等於右邊 ${s}，所以是解。`], "檢驗解：把 x、y 代入方程式看是否成立。", "解是有序對 (x,y)；順序不能對調。")
            }
          },
          {
            id: "two-variable-expression-value",
            title: "二元一次式的值",
            template({ r, ri, mc }) {
              const x = ri(r, 1, 5), y = ri(r, 1, 5), a = ri(r, 2, 4), b = ri(r, 2, 4);
              const ans = a * x + b * y;
              return mc(r, 6, 1, `當 x = ${x}、y = ${y} 時，${a}x + ${b}y 的值是多少？`, `${ans}`, [`${a + b + x + y}`, `${ans + 1}`, `${a * x - b * y}`], [`代入：${a}×${x}+${b}×${y}=${a * x}+${b * y}。`, `值為 ${ans}。`], "求值時 x、y 各代入一次，注意係數。", "2x+3y 不是 (2+x)+(3+y)。")
            }
          },
          {
            id: "two-variable-expression-word-setup",
            title: "二元一次式的列式",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { q: "蘋果每顆 x 元、橘子每顆 y 元，各買 1 顆共多少元？", ans: "x + y", wrong: ["xy", "x − y", "2(x + y)"] },
                { q: "長 x 公分、寬 y 公分的長方形周長（公分）為？", ans: "2x + 2y", wrong: ["x + y", "xy", "x² + y²"] }
              ]);
              return mc(r, 6, 2, item.q, item.ans, item.wrong, [`依題意用 x、y 表示所求量。`, `答案為 ${item.ans}。`], "列式前先確認求的是和、差還是周長等一次關係。", "周長是 2x+2y，不是 x+y。")
            }
          },
          {
            id: "two-variable-expression-setup-evaluate",
            title: "二元一次式的列式與求值",
            template({ r, ri, mc }) {
              const x = ri(r, 3, 7), y = ri(r, 2, 6);
              const ans = 2 * x + y;
              return mc(r, 6, 2, `某數量為 x 的 2 倍加 y。當 x = ${x}、y = ${y} 時，此數量是多少？`, `${ans}`, [`${2 * (x + y)}`, `${x + 2 * y}`, `${ans + 1}`], [`列式：2x + y。`, `代入 x=${x}、y=${y}：2×${x}+${y}=${ans}。`], "先列式再代入求值。", "2 倍 x 再加 y 是 2x+y，不是 2(x+y)。")
            }
          },
          {
            id: "two-variable-equation-solution-evaluate",
            title: "二元一次方程式的解與求值問題",
            template({ r, ri, mc }) {
              const x = ri(r, 2, 6), y = ri(r, 1, 5), k = 2 * x + 3 * y;
              return mc(r, 6, 2, `若 (x, y) = (${x}, ${y}) 滿足 2x + 3y = ${k}，則 2x + 3y 的值為？`, `${k}`, [`${k + 1}`, `${x + y}`, `${2 * x + y}`], [`(x,y)=(${x},${y}) 代入 2x+3y。`, `2×${x}+3×${y}=${k}。`], "已知解代入方程式，左式值等於右式常數。", "解代入後應使等式成立。")
            }
          },
          {
            id: "two-variable-integer-solutions",
            title: "二元一次方程式的整數解",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { eq: "x + y = 7", pair: "(3, 4)", wrong: ["(3.5, 3.5)", "(7, 0.5)", "(2, 6.5)"] },
                { eq: "2x + y = 10", pair: "(3, 4)", wrong: ["(3, 5)", "(4, 3)", "(2.5, 5)"] }
              ]);
              return mc(r, 6, 2, `下列哪一組是 ${item.eq} 的整數解？`, item.pair, item.wrong, [`整數解：x、y 皆為整數且代入成立。`, `代入 ${item.pair} 符合 ${item.eq}。`], "整數解要同時滿足「是整數」與「代入成立」。", "代入成立但非整數，不算整數解。")
            }
          },
          {
            id: "two-variable-equation-word-application",
            title: "二元一次方程式的列式與應用",
            template({ r, mc }) {
              return mc(r, 6, 2, "甲數比乙數多 4，設甲數為 x、乙數為 y，可列何者？", `x = y + 4`, [`x = y − 4`, `x + y = 4`, `y = x + 4`], [`甲比乙多 4 → 甲 = 乙 + 4。`, `即 x = y + 4。`], "「A 比 B 多 k」→ A = B + k。", "多 4 是加在較小的那個上。")
            }
          }
        ]
      },
      {
        title: "解二元一次聯立方程式與應用問題",
        topics: [
          {
            id: "linear-system-concept",
            title: "二元一次聯立方程式",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { correct: "x + y = 5\n2x − y = 1", wrong: ["x + y = 5", "2x − y", "x + y > 5"] },
                { correct: "3x + 2y = 12\nx − y = 3", wrong: ["3x + 2y = 12", "x − y = 3\nx − y = 4", "x² + y = 3"] }
              ]);
              return mc(r, 6, 1, "下列哪一組是二元一次聯立方程式？", item.correct, item.wrong, [`聯立方程式 = 兩個以上的一次方程式共同求解。`, `需兩式皆為二元一次方程式。`], "聯立要兩個（或以上）方程式同時成立。", "單一式子或不等式不是聯立方程式。")
            }
          },
          {
            id: "linear-system-solution-concept",
            title: "二元一次聯立方程式的解",
            template({ r, ri, mc }) {
              const x = ri(r, 2, 7), y = ri(r, 1, 6);
              return mc(r, 6, 1, `若 (x, y) = (${x}, ${y}) 同時滿足兩式 x + y = ${x + y} 與 x − y = ${x - y}，則此聯立方程式的解為？`, `(${x}, ${y})`, [`(${y}, ${x})`, `(${x + 1}, ${y})`, `(${x}, ${y + 1})`], [`聯立方程式的解是同時使兩式成立的 (x,y)。`, `即 (${x}, ${y})。`], "解是有序對，需同時代入兩式都成立。", "只滿足一式不算聯立解。")
            }
          },
          {
            id: "solve-linear-system",
            title: "解二元一次聯立方程式",
            template({ r, ri, mc }) {
              const x = ri(r, 2, 8), y = ri(r, 1, 7), s = x + y, d = 2 * x - y;
              return mc(r, 6, 2, `解聯立方程式\nx + y = ${s}\n2x − y = ${d}`, `(${x}, ${y})`, [`(${y}, ${x})`, `(${x + 1}, ${y - 1})`, `(${x - 1}, ${y + 1})`], [`兩式相加消去 y：3x = ${s + d}，x = ${x}。`, `代回 x + y = ${s}，y = ${y}。`], "加減消去法：先消去一個未知數，再回代。", "解的顺序是 (x,y)，不要对调。")
            }
          },
          {
            id: "special-linear-system",
            title: "特殊型聯立方程式的解法",
            template({ r, ri, mc }) {
              const x = ri(r, 2, 7), y = ri(r, 1, 6), s = x + y;
              return mc(r, 6, 2, `解聯立方程式\ny = ${y}\nx + y = ${s}`, `(${x}, ${y})`, [`(${y}, ${x})`, `(${x}, ${s})`, `(${x + 1}, ${y})`], [`第一式已給 y = ${y}，直接代入第二式。`, `x + ${y} = ${s}，所以 x = ${x}。`], "某未知數係數為 1 或已單獨解出 → 代入法最快。", "代入後只解一次方程。")
            }
          },
          {
            id: "system-word-problem-steps",
            title: "解應用問題的步驟",
            template({ r, mc }) {
              return mc(r, 6, 1, "解二元一次聯立應用問題時，通常需要幾個獨立的等量關係式？", "2 個", ["1 個", "3 個", "不限個數"], [`兩個未知數需要兩個獨立方程式才能定解。`, `因此需要 2 個等量關係。`], "聯立應用題：2 未知數 → 2 式。", "一個關係式只能消去一個自由度，無法定解。")
            }
          },
          {
            id: "system-solution-parameter",
            title: "方程式的解與求值問題",
            template({ r, ri, mc }) {
              const x = ri(r, 2, 6), y = ri(r, 1, 5), a = ri(r, 2, 4);
              const c = a * x + y;
              return mc(r, 6, 2, `若 (x, y) = (${x}, ${y}) 是 ax + y = ${c} 的解，則 a =？`, `${a}`, [`${a + 1}`, `${x + y}`, `${c}`], [`代入 x=${x}、y=${y}：a×${x}+${y}=${c}。`, `${a * x}+${y}=${c}，所以 a=${a}。`], "已知解求係數：代入後解一次方程。", "a 是係數，不是 x 或 y。")
            }
          },
          {
            id: "system-discount-problem",
            title: "折扣問題",
            template({ r, ri, mc }) {
              const x = ri(r, 80, 120), y = ri(r, 60, 100), total = x + y;
              return mc(r, 6, 2, `兩件商品原價各 x、y 元，合買打九折後付 ${Math.round(total * 0.9)} 元，可列何者？`, `0.9(x + y) = ${Math.round(total * 0.9)}`, [`x + y = ${Math.round(total * 0.9)}`, `0.9x + y = ${Math.round(total * 0.9)}`, `x + y = ${total * 0.9}`], [`合買打九折：0.9×(x+y)。`, `0.9(${x}+${y})=0.9×${total}=${Math.round(total * 0.9)}。`], "整筆折扣：先加總再乘折扣率。", "不要只对其中一件打折。")
            }
          },
          {
            id: "system-quantity-problem",
            title: "數量問題",
            template({ r, ri, mc }) {
              const x = ri(r, 5, 12), y = ri(r, 3, 10), heads = x + y, legs = 2 * x + 4 * y;
              return mc(r, 6, 2, `雞 x 隻、兔 y 隻，共有 ${heads} 隻、${legs} 腳，可列哪一組聯立方程式？`, `x + y = ${heads}\n2x + 4y = ${legs}`, [`x + y = ${legs}\n2x + 4y = ${heads}`, `2x + 2y = ${heads}\n4x + 4y = ${legs}`, `x + 2y = ${heads}\n2x + y = ${legs}`], [`總隻數：x + y = ${heads}。`, `雞 2 腳、兔 4 腳：2x + 4y = ${legs}。`], "雞兔問題：一式數量、一式腳數。", "雞也是 2 腳，不是 1 腳。")
            }
          },
          {
            id: "system-digit-problem",
            title: "數字運算問題",
            template({ r, ri, mc }) {
              const tens = ri(r, 2, 7), ones = ri(r, 1, 8), sum = tens + ones;
              return mc(r, 6, 2, `兩位數的十位數字 x、個位數字 y，數字和為 ${sum}，可列何者？`, `x + y = ${sum}`, [`10x + y = ${sum}`, `x + 10y = ${sum}`, `xy = ${sum}`], [`數字和 = 十位 + 個位。`, `x + y = ${sum}。`], "數字和用 x+y；數值本身用 10x+y。", "不要混淆「數字和」與「兩位數的值」。")
            }
          },
          {
            id: "system-rate-problem",
            title: "速率問題",
            template({ r, ri, mc }) {
              const x = ri(r, 4, 8), y = ri(r, 3, 7), hours = 2, dist = 2 * (x + y);
              return mc(r, 6, 2, `甲乙相距 ${dist} 公里，同時相向而行，甲速 x km/h、乙速 y km/h，${hours} 小時相遇，可列何者？`, `${hours}(x + y) = ${dist}`, [`${hours}(x − y) = ${dist}`, `x + y = ${dist}`, `${hours}x = ${dist}`], [`相向而行：相對速率 x+y。`, `${hours} 小時走 ${hours}(x+y) = ${dist} 公里。`], "相向：距離 = 時間×(甲速+乙速)。", "同向或追及要用速率差，不是相加。")
            }
          }
        ]
      }
    ]
  },
  "g7-2-c2": {
    source: "使用者提供：教育部課綱對照國一「直角坐標與二元一次方程式的圖形」二主題題型表（2026-07 更新；對應國一下第二單元 g7-2-c2）。",
    sections: [
      {
        title: "直角坐標平面",
        topics: [
          {
            id: "coordinate-plane",
            title: "直角坐標平面",
            template({ r, mc }) {
              return mc(r, 7, 1, "直角坐標平面是由哪兩條互相垂直的數線所構成？", "x 軸與 y 軸", ["x 軸與 x 軸", "y 軸與 y 軸", "原點與 x 軸"], [`水平數線為 x 軸，垂直數線為 y 軸，兩者互相垂直。`, `交點為原點 O。`], "坐標平面 = x 軸 + y 軸（互相垂直）。", "原點是交點，不是構成平面的數線本身。")
            }
          },
          {
            id: "point-coordinates",
            title: "坐標平面上點的坐標",
            template({ r, ri, mc, signed }) {
              const x = ri(r, -5, 5), y = ri(r, -5, 5);
              return mc(r, 7, 1, `點 P 在 x 軸右方 ${Math.abs(x)} 單位、y 軸${y >= 0 ? "上方" : "下方"} ${Math.abs(y)} 單位，則 P 的坐標為？`, `(${signed(x)}, ${signed(y)})`, [`(${signed(y)}, ${signed(x)})`, `(${signed(-x)}, ${signed(y)})`, `(${signed(x)}, ${signed(-y)})`], [`先走 x：${signed(x)}；再走 y：${signed(y)}。`, `坐標為 (${signed(x)}, ${signed(y)})。`], "坐標 (x,y)：先 x 後 y。", "不要對調 x、y 的順序。")
            }
          },
          {
            id: "distance-to-axes",
            title: "點到兩軸的距離",
            template({ r, pick, mc, signed }) {
              const item = pick(r, [
                { x: 3, y: -4, ans: "4" },
                { x: -5, y: 2, ans: "2" },
                { x: 2, y: 6, ans: "6" }
              ]);
              return mc(r, 7, 1, `點 (${signed(item.x)}, ${signed(item.y)}) 到 x 軸的距離是多少？`, item.ans, [`${Math.abs(item.x)}`, `${signed(item.y)}`, `${Math.abs(item.x) + Math.abs(item.y)}`], [`到 x 軸的距離 = |y|。`, `|${signed(item.y)}|=${item.ans}。`], "到 x 軸距離 = |y|；到 y 軸距離 = |x|。", "到 x 軸距離不是 x 坐標。")
            }
          },
          {
            id: "point-translation",
            title: "點的平移",
            template({ r, ri, mc, signed }) {
              const x = ri(r, -3, 5), y = ri(r, -3, 5), h = ri(r, 1, 4), k = ri(r, 1, 4);
              const nx = x + h, ny = y + k;
              return mc(r, 7, 1, `點 (${signed(x)}, ${signed(y)}) 向右平移 ${h} 單位、向上平移 ${k} 單位，新坐標為？`, `(${signed(nx)}, ${signed(ny)})`, [`(${signed(x - h)}, ${signed(y + k)})`, `(${signed(nx)}, ${signed(y)})`, `(${signed(x)}, ${signed(ny)})`], [`向右 +h：x 變 ${signed(x)}+${h}=${signed(nx)}。`, `向上 +k：y 變 ${signed(y)}+${k}=${signed(ny)}。`], "平移：右加左減 x，上加下減 y。", "向上是 y 增加，不是 x 增加。")
            }
          },
          {
            id: "quadrant",
            title: "象限",
            template({ r, pick, mc, signed }) {
              const item = pick(r, [
                { p: "(-3, 4)", q: "第二象限" },
                { p: "(2, -5)", q: "第四象限" },
                { p: "(-2, -1)", q: "第三象限" }
              ]);
              return mc(r, 7, 1, `點 ${item.p} 在第幾象限？`, item.q, ["第一象限", item.q === "第二象限" ? "第四象限" : "第二象限", "不在任何象限"], [`看 x、y 的正負：${item.p}。`, `位於${item.q}。`], "象限：I(+,+)、II(−,+)、III(−,−)、IV(+,−)。", "在軸上的點不屬於任何象限。")
            }
          },
          {
            id: "point-and-axes-distances",
            title: "點與兩軸的距離",
            template({ r, mc, signed }) {
              return mc(r, 7, 1, `點 (−4, 3) 到 y 軸、x 軸的距離依序為何？`, "4、3", ["3、4", "−4、3", "4、−3"], [`到 y 軸距離 = |x| = |−4| = 4。`, `到 x 軸距離 = |y| = |3| = 3。`, `依序為 4、3。`], "到 y 軸看 |x|；到 x 軸看 |y|。", "題目問依序，先 y 軸後 x 軸要對應清楚。")
            }
          },
          {
            id: "coincident-points",
            title: "點的重合",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { same: "(2, −1) 與 (2, −1)", ans: "重合" },
                { same: "(3, 4) 與 (4, 3)", ans: "不重合" }
              ]);
              return mc(r, 7, 1, `點 ${item.same} 是否重合？`, item.ans, [item.ans === "重合" ? "不重合" : "重合", "無法判斷", "條件不足"], [`兩點重合 ⟺ x、y 坐標都相同。`, `所以${item.ans}。`], "重合：x 相同且 y 相同。", "(3,4) 與 (4,3) 只是數字相同，坐標不同。")
            }
          },
          {
            id: "point-position-identification",
            title: "點的位置的判別",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { p: "(0, 5)", ans: "在 y 軸上", wrong: ["在 x 軸上", "在第一象限", "在原點"] },
                { p: "(−3, 0)", ans: "在 x 軸上", wrong: ["在 y 軸上", "在第二象限", "在原點"] }
              ]);
              return mc(r, 7, 1, `點 ${item.p} 的位置為何？`, item.ans, item.wrong, [`x=0 在 y 軸；y=0 在 x 軸；皆 0 在原點。`, `${item.p} → ${item.ans}。`], "判別位置先看是否 x=0 或 y=0。", "在軸上的點不屬於象限。")
            }
          },
          {
            id: "polygon-area-from-points",
            title: "點所連成圖形的面積",
            template({ r, mc }) {
              return mc(r, 7, 2, `O(0,0)、A(4,0)、B(4,3) 圍成直角三角形，面積為多少？`, "6", ["12", "7", "5"], [`底 OA=4，高 AB=3（垂直 x 軸）。`, `面積 = 底×高÷2 = 4×3÷2 = 6。`], "在坐標平面上，先找底與對應高。", "矩形面積是長×寬；三角形要除以 2。")
            }
          }
        ]
      },
      {
        title: "二元一次方程式的圖形",
        topics: [
          {
            id: "linear-equation-graph",
            title: "二元一次方程式的圖形",
            template({ r, mc }) {
              return mc(r, 7, 1, "二元一次方程式 ax + by = c（a、b 不全為 0）的圖形是什麼？", "一條直線", ["一個點", "一條射線", "整個平面"], [`二元一次方程式的解有無窮多組，在平面上排成一直線。`, `圖形是一條直線。`], "ax+by=c 的圖形是直線。", "一個點只對應一組解，不足以表示整條線。")
            }
          },
          {
            id: "linear-graph-type",
            title: "二元一次方程式圖形的類型",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { eq: "x = 3", type: "平行 y 軸的直線", wrong: ["平行 x 軸的直線", "通過原點的直線", "不是直線"] },
                { eq: "y = −2", type: "平行 x 軸的直線", wrong: ["平行 y 軸的直線", "通過原點的直線", "不是直線"] }
              ]);
              return mc(r, 7, 1, `方程式 ${item.eq} 的圖形為何？`, item.type, item.wrong, [`${item.eq} 中某一未知數固定。`, `圖形是${item.type}。`], "x=常數 → 垂直線；y=常數 → 水平線。", "x=3 是垂直線，不是水平線。")
            }
          },
          {
            id: "line-through-two-points",
            title: "求過相異兩點的直線方程式",
            template({ r, mc }) {
              return mc(r, 7, 2, "過 (1, 2) 與 (3, 6) 的直線方程式為何？", "y = 2x", ["y = x + 1", "y = 3x − 1", "x + y = 3"], [`斜率 = (6−2)/(3−1) = 2。`, `y − 2 = 2(x − 1)，化簡得 y = 2x。`], "兩點決定一直線；先求斜率再寫式。", "先確認兩點不重合。")
            }
          },
          {
            id: "linear-system-graph",
            title: "二元一次聯立方程式的圖形",
            template({ r, mc }) {
              return mc(r, 7, 1, "二元一次聯立方程式的圖形解，對應到平面上是什麼？", "兩直線的交點", ["兩直線的平行距離", "其中一條直線", "原點"], [`聯立解需同時滿足兩式 → 在兩線上。`, `即兩直線的交點。`], "聯立解 = 兩線交點坐標。", "無解時兩線平行（或重合）。")
            }
          },
          {
            id: "point-on-line-evaluate",
            title: "點在直線上的求值問題",
            template({ r, ri, mc, signed }) {
              const x = ri(r, 1, 5), y = 2 * x + 1;
              return mc(r, 7, 2, `直線 y = 2x + 1 上，x = ${x} 時，y =？`, `${y}`, [`${x + 1}`, `${2 * x}`, `${y + 1}`], [`代入 x = ${x}：y = 2×${x}+1。`, `y = ${y}。`], "点在線上：把已知坐標代入方程式。", "先代入 x 求 y，不要對調。")
            }
          },
          {
            id: "line-axis-intercepts",
            title: "直線與兩軸的交點",
            template({ r, mc, signed }) {
              return mc(r, 7, 2, "直線 2x + y = 6 與 x 軸、y 軸的交點依序為何？", "(3, 0)、(0, 6)", ["(0, 3)、(6, 0)", "(6, 0)、(0, 3)", "(2, 0)、(0, 4)"], [`x 截距：令 y=0，2x=6，x=3 → (3,0)。`, `y 截距：令 x=0，y=6 → (0,6)。`], "x 截距令 y=0；y 截距令 x=0。", "交點坐標是 (x,y)，不要只寫一個數。")
            }
          },
          {
            id: "find-line-equation",
            title: "求直線方程式",
            template({ r, ri, mc, signed }) {
              const x1 = ri(r, 1, 3), y1 = ri(r, 1, 4), m = ri(r, 2, 3);
              const b = y1 - m * x1;
              const eq = b >= 0 ? `y = ${m}x + ${b}` : `y = ${m}x − ${Math.abs(b)}`;
              return mc(r, 7, 2, `斜率 ${m}，且過 (${x1}, ${y1}) 的直線方程式為何？`, eq, [`y = ${m}x + ${b + 1}`, `y = ${m + 1}x + ${b}`, `y = ${m}x`], [`代入 (${x1},${y1})：${y1}=${m}×${x1}+b，b=${b}。`, `方程式為 ${eq}。`], "y=mx+b：先代斜率 m，再用一點求 b。", "b 是 y 截距，不是 x 截距。")
            }
          },
          {
            id: "line-equation-application",
            title: "求直線方程式與應用",
            template({ r, mc }) {
              return mc(r, 7, 2, "某計程車起跳 50 元，每公里 15 元。設走 x 公里、總費 y 元，可列何者？", "y = 15x + 50", ["y = 50x + 15", "y = 15x", "y = 50x"], [`每公里 15 元 → 15x；起跳 50 元 → 常數項 50。`, `y = 15x + 50。`], "固定費 + 單價×用量 → y = kx + b。", "起跳費只收一次，不能乘 x。")
            }
          },
          {
            id: "two-lines-intersection",
            title: "兩直線相交的問題",
            template({ r, mc }) {
              return mc(r, 7, 2, "直線 x + y = 5 與 x − y = 1 的交點為何？", "(3, 2)", ["(2, 3)", "(4, 1)", "(1, 4)"], [`兩式相加：2x = 6，x = 3。`, `代回 x + y = 5，y = 2。`, `交點 (3, 2)。`], "交點 = 聯立解，可用加減消去法。", "解是有序對 (x,y)。")
            }
          },
          {
            id: "system-graph-evaluate",
            title: "聯立方程式圖形的求值問題",
            template({ r, mc }) {
              return mc(r, 7, 2, "兩直線 y = x + 1 與 y = −x + 5 的交點 x 坐標為何？", "2", ["1", "3", "4"], [`聯立 x+1 = −x+5。`, `2x = 4，x = 2。`], "圖形求交點 = 聯立解方程式。", "題目只問 x，解出 x 即可。")
            }
          },
          {
            id: "graph-quadrant-identification",
            title: "方程式圖形與象限的判別",
            template({ r, mc }) {
              return mc(r, 7, 2, "直線 y = −2x + 4 必不會通過哪一象限？", "第三象限", ["第一象限", "第二象限", "第四象限"], [`x=0 時 y=4（y 截距正）；y=0 時 x=2（x 截距正）。`, `直線連接第一、二、四象限部分，不經第三象限。`], "看 x、y 截距正負，可判斷直線經過哪些象限。", "第三象限 x、y 皆負；此線 x、y 截距皆正，不會進入第三象限。")
            }
          }
        ]
      }
    ]
  },
  "g7-2-c3": {
    source: "使用者提供：教育部課綱對照國一「比例」二主題題型表（2026-07 更新；對應國一下第三單元 g7-2-c3）。",
    sections: [
      {
        title: "比與比例式",
        topics: [
          {
            id: "ratio-and-value",
            title: "比與比值",
            template({ r, pick, mc, frac, over }) {
              const item = pick(r, [
                { ratio: "6 : 4", value: frac(3, 2), wrong: [frac(2, 3), "6", "4"] },
                { ratio: "15 : 10", value: frac(3, 2), wrong: [frac(2, 3), "15", "10"] }
              ]);
              return mc(r, 8, 1, `${item.ratio} 的比值為何？`, item.value, item.wrong, [`比值 = 前項÷後項。`, `${item.ratio} 的比值 = ${item.value}。`], "比 a:b 的比值是 a÷b。", "比值是商，不是比本身。")
            }
          },
          {
            id: "equal-ratios",
            title: "相等的比",
            template({ r, mc }) {
              return mc(r, 8, 1, "下列哪一組比與 2 : 3 相等？", "4 : 6", ["3 : 2", "4 : 5", "6 : 8"], [`2 : 3 = 4 : 6（前後項同乘 2）。`, `比值皆為 2/3。`], "相等的比：前後項同乘或同除同一非 0 數。", "3:2 是 2:3 的倒比，不相等。")
            }
          },
          {
            id: "ratio-properties",
            title: "比的性質",
            template({ r, mc }) {
              return mc(r, 8, 1, "若 a : b = 3 : 4，且 a = 15，則 b =？", "20", ["12", "16", "18"], [`a : b = 3 : 4 → a/b = 3/4。`, `15/b = 3/4，b = 20。`], "相等的比可寫成 a/b = c/d 再求解。", "不要只加減 5；要用比例關係。")
            }
          },
          {
            id: "simplest-integer-ratio",
            title: "最簡整數比",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { raw: "12 : 18", ans: "2 : 3" },
                { raw: "20 : 15", ans: "4 : 3" }
              ]);
              return mc(r, 8, 1, `${item.raw} 化成最簡整數比為何？`, item.ans, ["6 : 9", "1 : 1", "3 : 2"], [`找前後項最大公因數再同除。`, `${item.raw} → ${item.ans}。`], "最簡整數比：前後項互質。", "化簡要前後項同除，不能只除一項。")
            }
          },
          {
            id: "proportion",
            title: "比例式",
            template({ r, mc }) {
              return mc(r, 8, 1, "若 2 : 3 = 8 : x，此關係用比例式如何表示？", "2 : 3 = 8 : x", ["2 : 8 = 3 : x", "2 + 3 = 8 + x", "2 × 3 = 8 × x"], [`四個數成比例，可寫成 a : b = c : d。`, `即 2 : 3 = 8 : x。`], "比例式：兩個相等的比用等號連接。", "比例式不是把比加起來。")
            }
          },
          {
            id: "proportion-properties",
            title: "比例式的性質",
            template({ r, mc }) {
              return mc(r, 8, 1, "若 a : b = c : d，則下列何者正確？", "ad = bc", ["ab = cd", "a + d = b + c", "ac = bd"], [`比例式內項積 = 外項積。`, `ad = bc。`], "a:b=c:d ⟺ ad=bc（交叉相乘）。", "交叉相乘是外項×外項 = 內項×內項。")
            }
          },
          {
            id: "ratio-arithmetic",
            title: "比的運算",
            template({ r, mc }) {
              return mc(r, 8, 1, "將 120 元依 2 : 3 分配，較小的一份是多少元？", "48", ["60", "72", "40"], [`總份數 2+3=5；每份 120÷5=24。`, `較小的一份 2 份 = 48 元。`], "按比分配：先算總份數，再求每份。", "2:3 不是一人 2 元一人 3 元。")
            }
          },
          {
            id: "proportion-arithmetic",
            title: "比例式的運算",
            template({ r, mc }) {
              return mc(r, 8, 1, "若 3 : 4 = x : 20，則 x =？", "15", ["12", "16", "18"], [`內項積 = 外項積：4x = 3×20 = 60。`, `x = 15。`], "比例式求未知：交叉相乘。", "3:4 = x:20 中 x 是外項，不是 3+4。")
            }
          },
          {
            id: "ratio-application",
            title: "比的應用問題",
            template({ r, ri, mc, over }) {
              const total = ri(r, 5, 8) * 10, small = 2, large = 3;
              const ans = total * small / (small + large);
              return mc(r, 8, 2, `紅藍彈珠數比 ${small}:${large}，共 ${total} 顆，紅色彈珠幾顆？`, `${ans}`, [`${total - ans}`, `${total / 2}`, `${ans + 10}`], [`總份數 ${small + large}；紅色占 ${small} 份。`, `${total}×${over(small, small + large)}=${ans} 顆。`], "比的应用：總量×（該部分份數÷總份數）。", "先求總份數，再乘總量。")
            }
          },
          {
            id: "proportion-application",
            title: "比例式的應用問題",
            template({ r, pick, mc }) {
              const scale = pick(r, [50000, 100000]), cm = pick(r, [3, 4, 5]), km = cm * scale / 100000;
              return mc(r, 8, 2, `地圖比例尺 1：${scale.toLocaleString("zh-TW")}，圖上 ${cm} 公分，實際距離多少公里？`, `${km} 公里`, [`${cm * scale / 1000} 公里`, `${km * 10} 公里`, `${km / 10} 公里`], [`實際 = ${cm}×${scale} 公分 = ${cm * scale}。`, `換算成公里：${km} 公里。`], "比例尺：圖上：實際 = 1：n。", "1 公里 = 100,000 公分。")
            }
          },
          {
            id: "ratio-proportion-comprehensive",
            title: "比與比例式的綜合應用",
            template({ r, mc, frac, over }) {
              return mc(r, 8, 2, "某班男女生人數比 5 : 4，男生 25 人，全班多少人？", "45", ["36", "40", "50"], [`5 份 = 25 人 → 1 份 = 5 人。`, `全班 5+4=9 份 = 45 人。`], "已知一部分可先求每份，再求總量。", "不要只加 5+4 當人數。")
            }
          }
        ]
      },
      {
        title: "正比與反比",
        topics: [
          {
            id: "direct-proportion",
            title: "正比",
            template({ r, mc }) {
              return mc(r, 8, 1, "y 與 x 成正比，且 y/x 固定為 3，則 y 與 x 的關係為？", "y = 3x", ["y = x + 3", "y = 3/x", "xy = 3"], [`正比：y = kx，k = y/x = 3。`, `所以 y = 3x。`], "正比：y = kx（k 為常數）。", "正比是乘積關係，不是加 3。")
            }
          },
          {
            id: "inverse-proportion",
            title: "反比",
            template({ r, mc }) {
              return mc(r, 8, 1, "y 與 x 成反比，且 xy 固定為 24，則 y 與 x 的關係為？", "y = 24/x", ["y = 24x", "y = x − 24", "y = x + 24"], [`反比：xy = k，k = 24。`, `所以 y = 24/x。`], "反比：xy = k（k 為常數）。", "反比是乘積固定，不是相減固定。")
            }
          },
          {
            id: "identify-proportion-from-formula",
            title: "由式子判別正比和反比",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { f: "y = 5x", ans: "正比", wrong: ["反比", "都不是", "無法判別"] },
                { f: "y = 18/x", ans: "反比", wrong: ["正比", "都不是", "無法判別"] }
              ]);
              return mc(r, 8, 1, `式子 ${item.f} 表示 y 與 x 成何種關係？`, item.ans, item.wrong, [`正比形如 y=kx；反比形如 y=k/x 或 xy=k。`, `${item.f} → ${item.ans}。`], "y=kx → 正比；xy=k → 反比。", "y=kx+b 有常數項，一般不是正比。")
            }
          },
          {
            id: "identify-proportion-from-word",
            title: "由文字敘述判別正比和反比",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { q: "固定速度下，路程與時間的關係", ans: "正比" },
                { q: "固定工作量下，工人數與完成天數的關係", ans: "反比" }
              ]);
              return mc(r, 8, 1, item.q, item.ans, [item.ans === "正比" ? "反比" : "正比", "都不是", "無法判別"], [`分析兩量同增同減還是一增一減。`, `此為${item.ans}關係。`], "同向變化常是正比；反向變化常是反比。", "要確認其他條件（如速度、總量）固定。")
            }
          },
          {
            id: "direct-proportion-evaluate",
            title: "正比的求值問題",
            template({ r, ri, mc }) {
              const k = ri(r, 2, 6), x = ri(r, 3, 9), y = k * x;
              return mc(r, 8, 2, `y 與 x 成正比，且 x = 2 時 y = ${2 * k}，則 x = ${x} 時 y =？`, `${y}`, [`${y + k}`, `${k + x}`, `${y - 1}`], [`先求 k：y/x = ${2 * k}/2 = ${k}。`, `x = ${x} 時 y = ${k}×${x} = ${y}。`], "正比先求比例常數 k，再代入。", "k 是 y/x，不是 y−x。")
            }
          },
          {
            id: "inverse-proportion-evaluate",
            title: "反比的求值問題",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { x1: 3, y1: 8, k: 24, x2: 6, y2: 4 },
                { x1: 4, y1: 5, k: 20, x2: 10, y2: 2 }
              ]);
              return mc(r, 8, 2, `y 與 x 成反比，x = ${item.x1} 時 y = ${item.y1}，則 x = ${item.x2} 時 y =？`, `${item.y2}`, [`${item.y1}`, `${item.y2 + 1}`, `${item.k}`], [`xy = ${item.k}（固定）。`, `x = ${item.x2} 時 y = ${item.k}/${item.x2} = ${item.y2}。`], "反比：先求 xy 的固定值 k。", "x 變大時 y 變小。")
            }
          },
          {
            id: "direct-inverse-application",
            title: "正比和反比的應用問題",
            template({ r, mc }) {
              return mc(r, 8, 2, "6 人 10 天完成的工作，若效率相同，15 人需幾天？", "4", ["6", "8", "25"], [`工作量固定 → 人數×天數固定。`, `6×10 = 15×d，d = 4 天。`], "固定工作量：人數與天數反比。", "人數變多，天數應變少。")
            }
          }
        ]
      }
    ]
  },
  "g7-2-c4": {
    source: "使用者提供：教育部課綱對照國一「一元一次不等式」二主題題型表（2026-07 更新；對應國一下第四單元 g7-2-c4）。",
    sections: [
      {
        title: "一元一次不等式",
        topics: [
          {
            id: "linear-inequality-concept",
            title: "一元一次不等式",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { correct: "2x + 3 > 7", wrong: ["2x + 3 = 7", "x² > 4", "2x + 3"] },
                { correct: "−x + 5 ≤ 2", wrong: ["x + y > 1", "5 ≥ 5", "−x + 5"] }
              ]);
              return mc(r, 9, 1, "下列哪一個是一元一次不等式？", item.correct, item.wrong, [`含一個未知數 x，最高次數 1，且有不等號。`, `${item.correct} 符合。`], "一元一次不等式：一個 x、一次、有 > ≥ < ≤。", "等式或無不等號的不是不等式。")
            }
          },
          {
            id: "inequality-word-association",
            title: "不等式列式的聯想",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { word: "至少 20 元", sym: "≥", ex: "x ≥ 20" },
                { word: "不超過 50 人", sym: "≤", ex: "x ≤ 50" }
              ]);
              return mc(r, 9, 1, `「${item.word}」列式時通常用哪個不等號？`, item.sym, [item.sym === "≥" ? ">" : "<", item.sym === "≥" ? "≤" : "≥", "="], [`「至少」含等號 → ≥；「不超過」含等號 → ≤。`, `例如 ${item.ex}。`], "至少→≥；至多/不超過→≤；超過→>；未滿→<。", "「至少」要含等號，不是 >。")
            }
          },
          {
            id: "inequality-solution-concept",
            title: "一元一次不等式的解",
            template({ r, ri, mc }) {
              const x = ri(r, 2, 8);
              const ok = x + 1 > 5;
              return mc(r, 9, 1, `x = ${x} 是否為 x + 1 > 5 的解？`, ok ? "是" : "否", [ok ? "否" : "是", "無法判斷", "條件不足"], [`代入 x=${x}：左邊 ${x}+1=${x + 1}。`, `${x + 1}${ok ? ">" : "≤"}5，所以${ok ? "是" : "不是"}解。`], "解：代入後使不等式成立的 x 值。", "不是只有邊界值才算解。")
            }
          },
          {
            id: "inequality-properties",
            title: "不等式的運算性質",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { q: "若 a > b，則 a + 3 與 b + 3 的關係？", ans: "a + 3 > b + 3", wrong: ["a + 3 < b + 3", "a + 3 = b + 3", "無法比較"] },
                { q: "若 a > b，則 −2a 與 −2b 的關係？", ans: "−2a < −2b", wrong: ["−2a > −2b", "−2a = −2b", "無法比較"] }
              ]);
              return mc(r, 9, 1, item.q, item.ans, item.wrong, [`同加同減同一數，不等號方向不變。`, `同乘或同除負數，不等號要反向。`, `所以 ${item.ans}。`], "加減不變向；乘除負數要變向。", "乘以負數時立刻改不等號。")
            }
          },
          {
            id: "write-inequality",
            title: "列不等式",
            template({ r, ri, mc }) {
              const limit = ri(r, 15, 30);
              return mc(r, 9, 1, `某商品重量 x 公斤不得超過 ${limit} 公斤，可列何者？`, `x ≤ ${limit}`, [`x < ${limit}`, `x ≥ ${limit}`, `x = ${limit}`], [`「不得超過」含等號 → ≤。`, `x ≤ ${limit}。`], "列不等式前先抓關鍵字：超過、至少、不超過等。", "不得超過要含等號。")
            }
          },
          {
            id: "range-from-chart",
            title: "由圖表判別範圍",
            template({ r, mc }) {
              return mc(r, 9, 2, "某班段考成績可列為 60 ≤ x ≤ 100（x 為分數），下列哪個分數符合？", "85", ["55", "105", "45"], [`合格範圍 60 到 100（含兩端）。`, `85 在此範圍內。`], "圖表或條件給範圍時，檢查是否在界內。", "55、105 超出上下界。")
            }
          },
          {
            id: "inequality-property-application",
            title: "不等式運算性質的應用",
            template({ r, ri, mc, signed }) {
              const a = ri(r, 2, 5), b = ri(r, 1, 8), c = ri(r, 10, 20);
              const bound = (c - b) / a;
              return mc(r, 9, 2, `若 ${a}x + ${b} > ${c}，則 x 的範圍為？`, `x > ${bound}`, [`x < ${bound}`, `x ≥ ${bound}`, `x ≤ ${bound}`], [`兩邊減 ${b}：${a}x > ${c - b}。`, `兩邊除以正數 ${a}：x > ${bound}。`], "移項、除以正係數時不等號不變。", "除以負數才要變向。")
            }
          }
        ]
      },
      {
        title: "解一元一次不等式與應用問題",
        topics: [
          {
            id: "solve-linear-inequality",
            title: "解一元一次不等式",
            template({ r, ri, mc, signed }) {
              const a = ri(r, 2, 5), bound = ri(r, -2, 5), b = ri(r, 1, 8), c = -a * bound + b;
              const ans = `x ≥ ${signed(bound)}`;
              return mc(r, 9, 2, `解不等式 ${signed(-a)}x + ${b} ≤ ${signed(c)}。`, ans, [`x ≤ ${signed(bound)}`, `x > ${signed(bound)}`, `x < ${signed(bound)}`], [`兩邊減 ${b}：${signed(-a)}x ≤ ${signed(c - b)}。`, `兩邊除以 ${signed(-a)}，不等號反向，得 ${ans}。`], "乘除負數時立刻反向。", "加減不會反向。")
            }
          },
          {
            id: "inequality-solution-number-line",
            title: "一元一次不等式解的圖示",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { ineq: "x > 3", circle: "空心圓", wrong: ["實心圓", "不標點", "叉號"] },
                { ineq: "x ≤ −2", circle: "實心圓", wrong: ["空心圓", "不標點", "叉號"] }
              ]);
              return mc(r, 9, 1, `${item.ineq} 在數線上，邊界點應畫成？`, item.circle, item.wrong, [`> 或 < 不含等號 → 空心圓；≥ 或 ≤ 含等號 → 實心圓。`, `${item.ineq} 的邊界用${item.circle}。`], "嚴格不等用空心；含等號用實心。", "方向與不等號一致：> 向右，< 向左。")
            }
          },
          {
            id: "inequality-word-problem-steps",
            title: "解應用問題的步驟",
            template({ r, mc }) {
              return mc(r, 9, 1, "解一元一次不等式應用問題時，列完不等式後下一步通常為何？", "解不等式並檢查是否符合題意", ["直接猜答案", "改列方程式", "不需檢查題意"], [`流程：設元 → 列不等式 → 解不等式 → 依題意取合理解。`, `列完式後要解出 x 的範圍。`], "不等式應用也要解式 + 檢查實際意義（如整數、非負）。", "有時解是不等式，不是單一數值。")
            }
          },
          {
            id: "inequality-graph-shading",
            title: "不等式解的圖示",
            template({ r, mc, signed }) {
              return mc(r, 9, 1, "x ≥ 2 在數線上的解，應向哪一側延伸？", "向右（含 2 的實心圓）", ["向左（含 2 的實心圓）", "只標 2 一點", "向兩側延伸"], [`x ≥ 2 表示 2 及比 2 大的數。`, `在 2 畫實心圓，向右延伸。`], "≥ 向大（右）延伸；≤ 向小（左）延伸。", "含等號要畫實心圓。")
            }
          },
          {
            id: "max-min-integer-solution",
            title: "不等式的最大或最小整數解",
            template({ r, pick, mc, signed }) {
              const item = pick(r, [
                { ineq: "x < 5.5", ans: "5", kind: "最大" },
                { ineq: "x > −2.3", ans: "−2", kind: "最小" }
              ]);
              return mc(r, 9, 2, `${item.ineq} 的${item.kind}整數解為？`, item.ans, [`${Number(item.ans) + 1}`, `${Number(item.ans) - 1}`, "0"], [`先畫解的範圍，再找${item.kind}整數。`, `${item.ineq} → ${item.kind}整數解 x = ${item.ans}。`], "最大整數解：小於邊界的最大整數；最小整數解相反。", "注意是否含等號。")
            }
          },
          {
            id: "reverse-from-solution",
            title: "由不等式的解逆推求值",
            template({ r, ri, mc, signed }) {
              const bound = ri(r, 2, 8), a = ri(r, 2, 5), b = ri(r, 1, 6);
              const c = a * bound + b;
              return mc(r, 9, 2, `若 x > ${bound} 是不等式 ${a}x + ${b} > c 的解，則 c =？`, `${c}`, [`${c + 1}`, `${b}`, `${a + b}`], [`解 x > ${bound} 表示 ${a}x + ${b} > ${a}×${bound}+${b}。`, `所以 c = ${c}。`], "由解的邊界反推：代入邊界值求常數。", "x > k 的邊界 k 通常來自等號成立點。")
            }
          },
          {
            id: "interval-problem",
            title: "區間問題",
            template({ r, ri, mc }) {
              const low = ri(r, 10, 20), high = low + ri(r, 5, 15);
              return mc(r, 9, 2, `某活動年齡限制為 ${low} 歲以上（含）且未滿 ${high} 歲，設年齡 x，可列何者？`, `${low} ≤ x < ${high}`, [`${low} < x ≤ ${high}`, `x > ${high}`, `x ≤ ${low}`], [`${low} 歲以上含 → x ≥ ${low}。`, `未滿 ${high} → x < ${high}。`, `合併 ${low} ≤ x < ${high}。`], "「含」用 ≥ 或 ≤；「未滿」用 <。", "上下界不要對調。")
            }
          },
          {
            id: "inequality-shopping",
            title: "購物問題",
            template({ r, ri, mc }) {
              const price = ri(r, 80, 150), budget = ri(r, 400, 600);
              const max = Math.floor(budget / price);
              return mc(r, 9, 2, `每本 ${price} 元，預算 ${budget} 元（可花完），最多買幾本？`, `${max} 本`, [`${max + 1} 本`, `${max - 1} 本`, `${Math.floor(budget / price) + 2} 本`], [`設買 x 本：${price}x ≤ ${budget}。`, `x ≤ ${budget / price}，最多 ${max} 本。`], "購物預算：單價×數量 ≤ 預算。", "最多買幾本要取整數且符合預算。")
            }
          },
          {
            id: "inequality-distribution",
            title: "分配問題",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { total: 50, per: 6, rem: 2, ans: 8 },
                { total: 58, per: 7, rem: 3, ans: 7 }
              ]);
              return mc(r, 9, 2, `糖果 ${item.total} 顆，分給每人至少 ${item.per} 顆，最後剩 ${item.rem} 顆，最多幾人？`, `${item.ans} 人`, [`${item.ans + 1} 人`, `${item.ans - 1} 人`, `${item.per} 人`], [`設 x 人：${item.per}x + ${item.rem} ≤ ${item.total}。`, `x ≤ ${(item.total - item.rem) / item.per}，最多 ${item.ans} 人。`], "分配：總量 ≥ 每人量×人數 + 剩餘。", "「至少每人」用 ≥ 列式。")
            }
          },
          {
            id: "inequality-decision",
            title: "決策問題",
            template({ r, mc }) {
              return mc(r, 9, 2, "方案 A：月費 300 元 + 每通 2 元；方案 B：月費 500 元 + 每通 1 元。通話幾通以上 B 較省？", "200 通以上", ["100 通以上", "150 通以上", "250 通以上"], [`300+2x < 500+x（B 較省）。`, `x > 200。`, `通話 200 通以上 B 較省。`], "決策：列兩方案費用不等式再解。", "「較省」是嚴格小於還是 ≤，依題意；本題 x>200。")
            }
          }
        ]
      }
    ]
  },
  "g7-2-c6": {
    source: "使用者提供：教育部課綱對照國一「線對稱與三視圖」二主題題型表（2026-07 更新；對應國一下第六單元 g7-2-c6）。",
    sections: [
      {
        title: "簡單圖形與垂直、平分",
        topics: [
          {
            id: "figure-notation",
            title: "點、線、角、多邊形的標記與對角線",
            template({ r, mc }) {
              return mc(r, 11, 1, "連接多邊形不相鄰兩頂點的線段稱為什麼？", "對角線", ["邊", "中線", "高"], [`對角線連接不相鄰頂點。`, `例如四邊形 AC 為對角線（A、C 不相鄰）。`], "邊連相鄰頂點；對角線連不相鄰頂點。", "中線、高是三角形術語，不是多邊形對角線。")
            }
          },
          {
            id: "perpendicular",
            title: "垂直",
            template({ r, mc }) {
              return mc(r, 11, 1, "兩直線相交成直角時，兩線的關係為何？", "互相垂直", ["互相平行", "重合", "無法判斷"], [`直角 = 90°。`, `兩直線互相垂直。`], "垂直 ⟺ 夾角 90°。", "看起來像垂直仍要確認已知條件。")
            }
          },
          {
            id: "perpendicular-foot",
            title: "垂線與垂足",
            template({ r, mc }) {
              return mc(r, 11, 1, "自點 P 向直線 L 作垂線，垂線與 L 的交點稱為什麼？", "垂足", ["對稱點", "中點", "角平分線"], [`垂線與 L 的交點是垂足。`, `P 到 L 的距離即 P 到垂足的線段長。`], "垂足是垂線與被垂直直線的交點。", "垂足不一定是線段中點。")
            }
          },
          {
            id: "point-to-line-distance",
            title: "點到直線的距離",
            template({ r, mc }) {
              return mc(r, 11, 1, "點到直線的距離是指哪一段的長度？", "點到直線的垂線段長", ["點到直線上任一點的線段長", "點到原點的距離", "直線的長度"], [`距離定義為最短長度，即垂直距離。`, `點到直線的垂線段長。`], "點到直線距離 = 垂直距離。", "任意斜線段通常比垂直距離長。")
            }
          },
          {
            id: "bisection-concept",
            title: "平分",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { q: "把線段分成相等的兩部分，稱為？", ans: "平分線段" },
                { q: "把角分成相等的兩部分，稱為？", ans: "平分角" }
              ]);
              return mc(r, 11, 1, item.q, item.ans, ["延長", "垂直", "對稱"], [`平分 = 分成兩個相等的部分。`, `所以是${item.ans}。`], "平分線段 / 平分角：兩部分相等。", "平分不是任意切割。")
            }
          },
          {
            id: "perpendicular-bisector",
            title: "垂直平分線",
            template({ r, mc }) {
              return mc(r, 11, 1, "同時垂直且平分一線段的直線稱為什麼？", "垂直平分線（中垂線）", ["角平分線", "高", "中線"], [`垂直且通過中點的直線 = 垂直平分線。`, `又稱中垂線。`], "垂直平分線：⊥ 線段且過中點。", "角平分線是平分角，不是平分線段。")
            }
          },
          {
            id: "angle-bisector",
            title: "角平分線",
            template({ r, mc }) {
              return mc(r, 11, 1, "把一個角分成兩個相等角的射線稱為什麼？", "角平分線", ["垂直平分線", "對角線", "高"], [`角平分線平分成兩個相等的角。`, `角平分線上的點到兩邊距離相等。`], "角平分線：分角為兩等份。", "不要和線段的垂直平分線混淆。")
            }
          },
          {
            id: "perp-bisector-property",
            title: "中垂線的性質",
            template({ r, mc }) {
              return mc(r, 11, 2, "點 P 到 A、B 兩點距離相等，則 P 必在何者上？", "線段 AB 的垂直平分線", ["角 A 的角平分線", "直線 AB", "線段 AB 的中點"], [`到兩端等距的點在垂直平分線上。`, `P 在 AB 的中垂線上。`], "垂直平分線上的點到兩端等距；逆命題也成立。", "在 AB 上不一定到 A、B 等距（除非是中點）。")
            }
          },
          {
            id: "segment-bisection",
            title: "線段的平分",
            template({ r, ri, mc }) {
              const len = ri(r, 4, 9) * 2, half = len / 2;
              return mc(r, 11, 1, `線段 AB 長 ${len}，M 為中點，則 AM =？`, `${half}`, [`${len}`, `${half + 1}`, `${half - 1}`], [`中點把線段分成兩等份。`, `AM = ${len}÷2 = ${half}。`], "線段中點：兩段相等。", "中點不是任意分割點。")
            }
          },
          {
            id: "angle-bisection",
            title: "角的平分",
            template({ r, ri, mc }) {
              const angle = ri(r, 4, 8) * 10;
              return mc(r, 11, 1, `∠A = ${angle}°，AD 平分 ∠A，則 ∠BAD =？`, `${angle / 2}°`, [`${angle}°`, `${angle / 2 + 10}°`, `${180 - angle}°`], [`角平分線分成兩個相等角。`, `∠BAD = ${angle}°÷2 = ${angle / 2}°。`], "角平分：兩個子角相等。", "平分後每個角是原角的一半。")
            }
          },
          {
            id: "segment-count-application",
            title: "線段個數的應用",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { n: 4, ans: "6" },
                { n: 5, ans: "10" }
              ]);
              return mc(r, 11, 2, `直線上 ${item.n} 個點（任兩點可連成線段），共可連成幾條線段？`, item.ans, [`${item.n}`, `${item.n * 2}`, `${item.n + 1}`], [`n 個點線段數 = n(n−1)/2。`, `${item.n}×${item.n - 1}/2 = ${item.ans}。`], "線段計數：組合 C(n,2) = n(n−1)/2。", "不要只算 n 或 n−1。")
            }
          }
        ]
      },
      {
        title: "線對稱與三視圖",
        topics: [
          {
            id: "line-symmetric-figure",
            title: "線對稱圖形",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { fig: "等腰三角形", ans: "是", why: "頂角平分線為對稱軸" },
                { fig: "一般的不等邊三角形", ans: "否", why: "不一定有對稱軸" }
              ]);
              return mc(r, 11, 1, `${item.fig} 是否為線對稱圖形？`, item.ans, [item.ans === "是" ? "否" : "是", "無法判斷", "一定是"], [`線對稱：沿某直線對折後能完全重合。`, `${item.why}。`], "線對稱圖形沿對稱軸對折後兩半重合。", "不是所有三角形都線對稱。")
            }
          },
          {
            id: "find-symmetric-point",
            title: "找到對稱點",
            template({ r, mc, signed }) {
              return mc(r, 11, 2, "點 A(2, 5) 關於 x 軸的對稱點為何？", "(2, −5)", ["(−2, 5)", "(2, 5)", "(−2, −5)"], [`關於 x 軸對稱：x 不變，y 變號。`, `(2, 5) → (2, −5)。`], "關於 x 軸：y 變號；關於 y 軸：x 變號。", "對稱後坐標順序仍是 (x,y)。")
            }
          },
          {
            id: "polygon-diagonals-symmetry",
            title: "常見多邊形的對角線與對稱軸",
            template({ r, mc }) {
              return mc(r, 11, 2, "正方形有幾條對稱軸？", "4 條", ["2 條", "1 條", "8 條"], [`正方形：2 條連對邊中點 + 2 條連對角。`, `共 4 條對稱軸。`], "正方形對稱軸：2 條水平垂直 + 2 條對角。", "對角線本身是對稱軸，但對角線條數≠對稱軸條數（矩形只有 2 條）。")
            }
          },
          {
            id: "view-concept",
            title: "視圖",
            template({ r, mc }) {
              return mc(r, 11, 1, "從特定方向觀察立體圖形所得到的平面圖形稱為什麼？", "視圖", ["展開圖", "對稱圖", "截面"], [`視圖是從某方向看去的投影輪廓。`, `例如正視圖、俯視圖。`], "視圖 = 從某方向看立體的平面圖。", "展開圖是攤平，不是視圖。")
            }
          },
          {
            id: "three-views",
            title: "三視圖",
            template({ r, mc }) {
              return mc(r, 11, 1, "三視圖通常包含哪三個方向的視圖？", "正視圖、俯視圖、側視圖", ["正視圖、斜視圖、展開圖", "俯視圖、對稱圖、截面圖", "正視圖、後視圖、透視圖"], [`三視圖：正（前）、俯（上）、側（側面）。`, `三者配合可還原立體。`], "三視圖 = 正視 + 俯視 + 側視。", "展開圖不是三視圖之一。")
            }
          },
          {
            id: "symmetric-segment-length",
            title: "對稱線段等長的應用",
            template({ r, mc }) {
              return mc(r, 11, 2, "等腰三角形 ABC（AB=AC）關於頂角 A 的對稱軸對折，B 與 C 重合，則 BC 被對稱軸如何？", "垂直平分", ["平分成不等兩段", "不相交", "延長"], [`對稱軸是 BC 的垂直平分線。`, `對折後 B、C 重合 → 軸垂直平分 BC。`], "等腰三角形頂角平分線、底邊中線、底邊高、對稱軸四線合一。", "對稱使對應線段等長。")
            }
          },
          {
            id: "symmetric-angle-equal",
            title: "對稱角相等的應用",
            template({ r, mc }) {
              return mc(r, 11, 2, "線對稱圖形中，對稱軸兩側對應的角有何關係？", "相等", ["互補", "互餘", "無固定關係"], [`對折重合 → 對應角相等。`, `對稱角相等。`], "線對稱：對應角相等、對應邊相等。", "互補是平角關係，不是對稱關係。")
            }
          },
          {
            id: "coordinate-point-symmetry",
            title: "坐標平面上點的對稱",
            template({ r, mc, signed }) {
              return mc(r, 11, 2, "點 (−3, 2) 關於 y 軸的對稱點為何？", "(3, 2)", ["(3, −2)", "(−3, −2)", "(−3, 2)"], [`關於 y 軸：x 變號，y 不變。`, `(−3, 2) → (3, 2)。`], "關於 y 軸：x → −x；關於 x 軸：y → −y。", "不要對調 x、y。")
            }
          },
          {
            id: "draw-three-views",
            title: "繪製三視圖",
            template({ r, mc }) {
              return mc(r, 11, 2, "繪製三視圖時，正視圖與俯視圖的哪個方向長度要一致？", "左右方向（長）", ["上下方向（高）", "前後方向（寬）", "斜向長度"], [`正視圖與俯視圖的左右寬度要對齊。`, `長度方向一致才能拼合。`], "正視↔俯視：長對齊；正視↔側視：高對齊；俯視↔側視：寬對齊。", "三視圖三方向長度要互相對應。")
            }
          },
          {
            id: "different-direction-views",
            title: "不同方向的視圖",
            template({ r, mc }) {
              return mc(r, 11, 2, "由上方往下看立體所得到的視圖稱為什麼？", "俯視圖", ["正視圖", "側視圖", "展開圖"], [`俯視 = 從上往下看。`, `得到俯視圖。`], "俯視圖 = 上→下；正視圖 = 前→後；側視圖 = 側面。", "方向不同，視圖不同。")
            }
          },
          {
            id: "three-view-application",
            title: "三視圖的活用題",
            template({ r, mc }) {
              return mc(r, 11, 2, "某立體的正視圖與俯視圖都是 2×2 的正方形，最少由幾個立方塊組成？", "4 個", ["2 個", "6 個", "8 個"], [`正視、俯視皆填滿 2×2 → 至少每欄 1 個。`, `最少 4 個立方塊可達成。`], "三視圖還原：取各視圖要求的最多層數。", "最少個數不一定等於體積最大。")
            }
          }
        ]
      }
    ]
  },
  "g7-2-c5": {
    source: "使用者提供：教育部課綱對照國一「統計圖表與資料分析」二主題題型表（2026-07 更新；對應國一下第五單元 g7-2-c5）。",
    sections: [
      {
        title: "統計圖表",
        topics: [
          {
            id: "contingency-frequency-table",
            title: "列聯表與次數分配表",
            template({ r, mc }) {
              return mc(r, 10, 1, "將資料依類別交叉分類（如性別×喜好）的表格稱為什麼？", "列聯表", ["次數分配表", "累積次數分配表", "相對次數分配表"], [`兩個（或多個）類別交叉 → 列聯表。`, `單一變量各組次數 → 次數分配表。`], "列聯表：分類變量交叉；次數分配表：同一變量分組計次。", "不要混淆列聯表與次數分配表。")
            }
          },
          {
            id: "histogram-frequency-polyline",
            title: "次數分配直方圖與次數分配折線圖",
            template({ r, mc }) {
              return mc(r, 10, 1, "以長條呈現各組次數，且長條相連的統計圖為何？", "次數分配直方圖", ["圓形圖", "次數分配折線圖", "列聯表"], [`直方圖用連續長條表各組次數。`, `折線圖以折線連接各組代表點。`], "直方圖：長條相連表次數；折線圖：折線連各組。", "折線圖長條不一定相連成面積。")
            }
          },
          {
            id: "cumulative-relative-frequency",
            title: "累積次數和相對次數與累積相對次數",
            template({ r, mc, frac, over }) {
              return mc(r, 10, 1, "某組次數 8、總次數 40，該組相對次數為何？", "20%", ["8%", "32%", "25%"], [`相對次數 = 組次數÷總次數。`, `8/40 = ${frac(1, 5)} = 20%。`], "相對次數常以百分比表示；累積相對次數由小到大累加。", "相對次數不是 8/40 的分子 8。")
            }
          },
          {
            id: "cumulative-frequency-tables",
            title: "累積次數分配表和相對次數分配表與累積相對次數分配表",
            template({ r, mc }) {
              return mc(r, 10, 1, "將各組相對次數由小到大逐組累加，得到的是哪種表？", "累積相對次數分配表", ["次數分配表", "列聯表", "相對次數分配表（非累積）"], [`相對次數逐組累加 → 累積相對次數。`, `做成累積相對次數分配表。`], "三表：次數、相對次數、累積（相對）次數。", "累積表最後一組應接近 100% 或 1。")
            }
          },
          {
            id: "cumulative-frequency-polyline-charts",
            title: "累積次數分配折線圖和相對次數分配折線圖與累積相對次數分配折線圖",
            template({ r, mc }) {
              return mc(r, 10, 1, "以折線表示累積次數變化的統計圖通常稱為什麼？", "累積次數分配折線圖（ogive）", ["次數分配直方圖", "圓形圖", "列聯表"], [`橫軸為組別上界，縱軸為累積次數。`, `折線連接各累積點。`], "累積次數（或累積相對次數）常用折線圖呈現。", "直方圖表各組次數，不是累積。")
            }
          },
          {
            id: "contingency-table-interpret",
            title: "列聯表的製作與判讀",
            template({ r, mc }) {
              return mc(r, 10, 2, "列聯表中，某格 12 表示什麼？", "同時屬於該列類別與該行類別的個數", ["總人數", "該列的總和", "該行的平均"], [`列聯表每一格是交叉分類的次數。`, `12 表示符合兩個類別的個數。`], "判讀列聯表：看列標、行標的交叉。", "列總和、行總和在邊緣，不是單格。")
            }
          },
          {
            id: "pie-chart-interpret",
            title: "圓形圖的判讀",
            template({ r, mc }) {
              return mc(r, 10, 2, "圓形圖中占 25% 的項目，圓心角為多少度？", "90°", ["45°", "180°", "25°"], [`圓心角 = 百分比×360°。`, `25%×360° = 90°。`], "圓心角 = 相對次數×360°。", "25% 不是 25°。")
            }
          },
          {
            id: "histogram-interpret",
            title: "直方圖的判讀",
            template({ r, mc }) {
              return mc(r, 10, 2, "次數分配直方圖中，最高長條所在的組別表示什麼？", "該組次數最多（可能為眾數所在組）", ["平均數一定在此組", "中位數一定在此組", "總次數"], [`長條高度代表該組次數。`, `最高長條 → 次數最多的組別。`], "直方圖讀次數：看長條高度。", "最高組不一定是平均數或中位數所在組。")
            }
          },
          {
            id: "line-chart-interpret",
            title: "折線圖的判讀",
            template({ r, mc }) {
              return mc(r, 10, 2, "折線圖中折線向上傾斜表示什麼？", "隨時間（或序號）增加，數值上升", ["次數一定最多", "相對次數為 100%", "資料沒有變化"], [`折線圖常用於看變化趨勢。`, `向上表示數值增加。`], "折線圖重點在趨勢，不是單點大小。", "下降段表示數值減少。")
            }
          },
          {
            id: "cross-chart-interpret",
            title: "兩種統計圖表的交互判讀",
            template({ r, mc }) {
              return mc(r, 10, 2, "同一資料用圓形圖與長條圖呈現，下列何者一定相同？", "各類別的相對次數（比例）", ["圓心角", "長條高度單位", "圖表面積"], [`不同圖表可呈現同一資料的不同面向。`, `各類別所占比例（相對次數）應一致。`], "交互判讀：抓共同量（次數、比例）。", "圓心角與長條高度數值不同，但比例應一致。")
            }
          }
        ]
      },
      {
        title: "平均數、中位數與眾數",
        topics: [
          {
            id: "mean",
            title: "平均數",
            template({ r, ri, mc, frac, over }) {
              const a = ri(r, 5, 12), b = ri(r, 6, 14), c = ri(r, 4, 10);
              const ans = frac(a + b + c, 3);
              return mc(r, 10, 1, `資料 ${a}、${b}、${c} 的平均數為何？`, ans, [frac(a + b + c, 2), `${a + b + c}`, frac(a + b, 3)], [`平均數 = 總和÷個數。`, `(${a}+${b}+${c})÷3 = ${ans}。`], "平均數 = 總和 / 資料個數。", "不要漏除個數。")
            }
          },
          {
            id: "median",
            title: "中位數",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { data: "3、7、9", ans: "7" },
                { data: "2、8、10、12", ans: "9" }
              ]);
              return mc(r, 10, 1, `資料 ${item.data} 的中位數為何？`, item.ans, ["8", "10", "6"], [`先排序，找中間（或中間兩數平均）。`, `中位數 = ${item.ans}。`], "中位數：排序後的中間值；偶數筆取中間兩數平均。", "未排序不能直接取中間。")
            }
          },
          {
            id: "mode",
            title: "眾數",
            template({ r, mc }) {
              return mc(r, 10, 1, "資料 5、8、8、10、12 的眾數為何？", "8", ["5", "10", "12"], [`眾數 = 出現次數最多的值。`, `8 出現 2 次，最多。`], "眾數可能不只一個，也可能沒有。", "不要取最大或最小值。")
            }
          },
          {
            id: "mean-median-mode",
            title: "平均數、中位數與眾數",
            template({ r, mc }) {
              return mc(r, 10, 1, "資料 2、3、3、3、100 中，受極端值 100 影響最大的是哪一個？", "平均數", ["中位數", "眾數", "三者相同"], [`平均數會被 100 拉高。`, `中位數 = 3，眾數 = 3，較不受影響。`], "極端值對平均數影響大；中位數、眾數較穩。", "比較三量時先排序再找中位數。")
            }
          },
          {
            id: "statistics-from-chart",
            title: "由統計圖表求統計量",
            template({ r, mc }) {
              return mc(r, 10, 2, "長條圖各組次數為 4、6、10，總次數 20，第一組相對次數為何？", "20%", ["4%", "30%", "10%"], [`相對次數 = 4÷20 = 20%。`, `由圖表讀次數再換算比例。`], "從圖表讀次數，再算平均、比例等。", "相對次數 = 組次數 / 總次數。")
            }
          },
          {
            id: "identify-statistic-group",
            title: "由統計圖表判別統計量組別",
            template({ r, mc }) {
              return mc(r, 10, 2, "兩班數學平均成績：甲班 72、乙班 78，哪班整體較高？", "乙班", ["甲班", "相同", "無法比較"], [`平均數代表整體中心。`, `78 > 72，乙班較高。`], "由圖表或摘要比較平均、中位數等。", "比較前確認是同一度量（如都是平均）。")
            }
          },
          {
            id: "statistics-application",
            title: "統計量的應用",
            template({ r, ri, pick, mc, frac, over }) {
              const avg = ri(r, 8, 16), count = pick(r, [4, 5, 6]), added = avg + ri(r, 3, 8);
              const newAvg = frac(avg * count + added, count + 1);
              return mc(r, 10, 2, `${count} 筆資料平均 ${avg}，加入一筆 ${added} 後，新平均為何？`, newAvg, [avg + added, frac(avg + added, 2), frac(avg * (count + 1) + added, count + 1)], [`原總和 = ${avg}×${count}=${avg * count}。`, `新總和 ${avg * count}+${added}=${avg * count + added}，共 ${count + 1} 筆。`, `新平均 = ${newAvg}。`], "平均數應用：總和 = 平均×個數。", "不能把兩平均直接相加除以 2。")
            }
          }
        ]
      }
    ]
  },
  "g8-1-c1": {
    source: "使用者提供：教育部課綱對照國二「乘法公式與多項式」二主題題型表（2026-07 更新；對應國二上第一單元 g8-1-c1）。",
    sections: [
      {
        title: "乘法公式",
        topics: [
          {
            id: "common-multiplication-formulas",
            title: "常用的乘法公式",
            template({ r, mc }) {
              return mc(r, 12, 1, "(a + b)² 展開後為何？", "a² + 2ab + b²", ["a² + b²", "a² − 2ab + b²", "a² + ab + b²"], [`(a+b)(a+b) = a²+ab+ab+b²。`, `= a² + 2ab + b²。`], "三公式：(a±b)²、(a+b)(a−b)。", "(a+b)² 不是 a²+b²。")
            }
          },
          {
            id: "formula-evaluate",
            title: "利用乘法公式求值",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { q: "計算 103²", ans: "10609", steps: "(100+3)²=10000+600+9" },
                { q: "計算 99²", ans: "9801", steps: "(100−1)²=10000−200+1" }
              ]);
              return mc(r, 12, 1, item.q, item.ans, [`${Number(item.ans) + 100}`, `${Number(item.ans) - 50}`, `${Number(item.ans) + 10}`], [`套用平方公式。`, `${item.steps}=${item.ans}。`], "接近整十、整百的平方可改寫成 (a±b)²。", "不要直接硬乘，也不要漏中間項。")
            }
          },
          {
            id: "distributive-evaluate",
            title: "利用分配律求值",
            template({ r, mc }) {
              return mc(r, 12, 1, "計算 97 × 103。", "9991", ["10000", "9891", "9901"], [`97×103 = (100−3)(100+3) = 100²−3²。`, `= 10000−9 = 9991。`], "和×差可用平方差 a²−b²。", "不要只算 100×103−3。")
            }
          },
          {
            id: "formula-compare-size",
            title: "利用乘法公式比較大小",
            template({ r, mc }) {
              return mc(r, 12, 2, "比較 98² 與 97×99 的大小。", "98² 較大", ["97×99 較大", "兩者相等", "無法比較"], [`97×99 = (98−1)(98+1) = 98² − 1。`, `98² > 98² − 1，所以 98² 較大。`], "平方差：(n−1)(n+1)=n²−1 < n²。", "先化成同一形式再比較。")
            }
          },
          {
            id: "formula-area",
            title: "利用乘法公式求面積",
            template({ r, ri, mc }) {
              const a = ri(r, 3, 8), b = ri(r, 2, 6);
              const ans = a * a + 2 * a * b + b * b;
              return mc(r, 12, 2, `邊長 (a+b) 的正方形，a=${a}、b=${b}，面積為何？`, `${ans}`, [`${(a + b) * (a + b)}`, `${a * a + b * b}`, `${ans + 1}`], [`面積 = (a+b)² = a²+2ab+b²。`, `${a}²+2×${a}×${b}+${b}²=${ans}。`], "正方形面積 = 邊長²，可套 (a+b)²。", "不要只算 a²+b²。")
            }
          },
          {
            id: "formula-substitution",
            title: "利用乘法公式代換求值",
            template({ r, mc }) {
              return mc(r, 12, 2, "若 x + y = 5、xy = 6，則 x² + y² =？", "13", ["19", "25", "11"], [`x²+y² = (x+y)²−2xy。`, `= 25−12 = 13。`], "x²+y² = (x+y)²−2xy。", "不要誤用 (x+y)²=x²+y²。")
            }
          }
        ]
      },
      {
        title: "多項式與其四則運算",
        topics: [
          {
            id: "polynomial-meaning",
            title: "多項式的意義",
            template({ r, pick, mc }) {
              const item = pick(r, [
                { correct: "3x² − 2x + 5", wrong: ["3/x + 2", "√x + 1", "1/(x+1)"] },
                { correct: "−x + 7", wrong: ["x² + 1/x", "5/x²", "√(x+1)"] }
              ]);
              return mc(r, 12, 1, "下列哪一個是多項式？", item.correct, item.wrong, [`多項式：係數為常數，指數為非負整數。`, `${item.correct} 符合。`], "多項式不含變數在分母或根號內。", "1/x 不是多項式。")
            }
          },
          {
            id: "polynomial-vocabulary",
            title: "多項式的相關名詞",
            template({ r, mc }) {
              return mc(r, 12, 1, "多項式 4x³ − x + 2 的次數為何？", "3", ["4", "2", "1"], [`次數 = 最高次項的指數。`, `最高次項 4x³，次數為 3。`], "次數看最高次項；係數是 x 前的數。", "4 是最高次項係數，不是次數。")
            }
          },
          {
            id: "constant-polynomial",
            title: "常數多項式",
            template({ r, mc }) {
              return mc(r, 12, 1, "多項式 −7 的次數為何？", "0", ["−7", "1", "無次數"], [`不含 x 的項視為 7x⁰。`, `常數多項式的次數為 0。`], "非零常數多項式次數為 0。", "零多項式次數另定義（或不討論）。")
            }
          },
          {
            id: "polynomial-arrangement",
            title: "多項式的排列",
            template({ r, mc }) {
              return mc(r, 12, 1, "將 2 − 3x + x² 依 x 的降冪排列為何？", "x² − 3x + 2", ["2 − 3x + x²", "x² + 3x + 2", "−3x + x² + 2"], [`降冪：次數由高到低。`, `x² − 3x + 2。`], "降冪：最高次在前；升冪相反。", "排列時係數符號要保留。")
            }
          },
          {
            id: "polynomial-add-subtract",
            title: "多項式的加減運算",
            template({ r, ri, mc }) {
              const a = ri(r, 2, 5), b = ri(r, 1, 6), c = ri(r, 2, 4), d = ri(r, 1, 5);
              const ans = `${a + c}x + ${b + d}`;
              return mc(r, 12, 1, `計算 (${a}x + ${b}) + (${c}x + ${d})。`, ans, [`${a + c}x + ${b - d}`, `${a + b}x + ${c + d}`, `${a + c + b + d}`], [`合併 x 項與常數項。`, `${a}x+${c}x=${a + c}x；${b}+${d}=${b + d}。`], "加減：對齊同類項。", "減多項式時括號內每項變號。")
            }
          },
          {
            id: "polynomial-multiply",
            title: "多項式的乘法運算",
            template({ r, ri, mc }) {
              const a = ri(r, 2, 4), b = ri(r, 1, 5), c = ri(r, 2, 4), d = ri(r, 1, 5);
              const x2 = a * c, x1 = a * d + b * c, c0 = b * d;
              const ans = `${x2}x² + ${x1}x + ${c0}`;
              return mc(r, 12, 2, `展開 (${a}x + ${b})(${c}x + ${d})。`, ans, [`${x2}x² + ${a * d}x + ${c0}`, `${x2}x² + ${b * c}x + ${c0}`, `${(a + c)}x² + ${(b + d)}x + ${c0}`], [`逐項分配：${a}x×${c}x、${a}x×${d}、${b}×${c}x、${b}×${d}。`, `合併得 ${ans}。`], "多項式乘法：每一項都要乘到。", "不要漏乘常數項。")
            }
          },
          {
            id: "polynomial-divide",
            title: "多項式的除法運算",
            template({ r, mc }) {
              return mc(r, 12, 2, "x² + 3x + 2 除以 x + 1，餘式為何？", "0", ["1", "2", "x + 1"], [`x²+3x+2 = (x+1)(x+2)。`, `整除，餘式為 0。`], "多項式除法：被除式 = 除式×商式 + 餘式。", "餘式次數要低於除式。")
            }
          },
          {
            id: "polynomial-degree-after-op",
            title: "多項式運算後的次數",
            template({ r, mc }) {
              return mc(r, 12, 1, "(2x + 1)(x² − 3) 展開後的次數為何？", "3", ["2", "4", "5"], [`最高次項 2x×x² = 2x³。`, `展開後次數為 3。`], "乘法後次數 = 各因式次數之和（通常）。", "不要只加常數次數。")
            }
          },
          {
            id: "polynomial-degree-evaluate",
            title: "多項式次數的求值問題",
            template({ r, mc }) {
              return mc(r, 12, 2, "若 x^m + 2x + 1 的次數為 3，則 m =？", "3", ["2", "4", "1"], [`次數 = 最高次項指數 = m。`, `m = 3。`], "次數由最高次項決定。", "係數為 0 的項不影響（但整項消失）。")
            }
          },
          {
            id: "equal-polynomials",
            title: "兩多項式相等的求值問題",
            template({ r, mc }) {
              return mc(r, 12, 2, "若 ax + b 與 2x + 5 為同一多項式，則 a + b =？", "7", ["10", "3", "5"], [`對應係數相等：a=2、b=5。`, `a+b=7。`], "兩多項式相等 ⟺ 同次項係數分別相等。", "要 a、b 同時滿足。")
            }
          },
          {
            id: "polynomial-multiply-divide",
            title: "多項式的乘除運算",
            template({ r, mc }) {
              return mc(r, 12, 2, "先算 (x + 2)(x − 3)，再除以 x − 3（x ≠ 3），結果為何？", "x + 2", ["x − 3", "x² − x − 6", "1"], [`(x+2)(x−3)÷(x−3) = x+2（x≠3）。`, `乘除互逆。`], "乘後再除相同因式（非 0）得原多項式。", "除式不能為 0。")
            }
          },
          {
            id: "product-coefficient",
            title: "多項式乘積的係數問題",
            template({ r, ri, mc }) {
              const p = ri(r, 2, 4), q = ri(r, 3, 6);
              return mc(r, 12, 2, `(x + ${p})(x + ${q}) 展開後 x 的係數為何？`, `${p + q}`, [`${p * q}`, `${p - q}`, `${p + q + 1}`], [`x 係數來自 ${p}x 與 ${q}x。`, `係數 = ${p}+${q} = ${p + q}。`], "找特定次項係數：展開後合併同類項。", "常數項是 p×q，不是 x 係數。")
            }
          },
          {
            id: "division-relationship",
            title: "多項式除法運算的關係式",
            template({ r, ri, mc }) {
              const p = 2, q = 3, a = 1, rem = 1;
              return mc(r, 12, 2, `x² + 5x + 7 除以 x+1，商式為 ${p}x+${q}、餘式 ${rem}，則 (商式+餘式) 的常數項為？`, `${q + rem}`, [`${p + q}`, `${rem}`, `${p + rem}`], [`商式 ${p}x+${q}，餘式 ${rem}。`, `商+餘 = ${p}x+${q + rem}，常數項 ${q + rem}。`, `驗：x²+5x+7=(x+1)(2x+3)+1。`], "被除式 = 除式×商式 + 餘式。", "餘式次數低於除式。")
            }
          },
          {
            id: "polynomial-application",
            title: "多項式運算的應用",
            template({ r, ri, mc }) {
              const w = ri(r, 2, 5);
              return mc(r, 12, 2, `長方形長 x 、寬 (x+${w})，周長的多項式為何？`, `4x + ${2 * w}`, [`2x + ${w}`, `2x + ${2 * w}`, `x + ${w}`], [`周長 = 2(長+寬) = 2(x + x+${w})。`, `= 2(2x+${w}) = 4x+${2 * w}。`], "周長 = 2(長+寬)，用多項式表示。", "周長是四邊和，不是面積。")
            }
          }
        ]
      }
    ]
  },
  "g8-1-c2": {
    source: "使用者提供：教育部課綱對照國二「平方根與畢氏定理」三主題題型表（2026-07 更新；對應國二上第二單元 g8-1-c2）。",
    sections: [
      {
        title: "平方根與近似值",
        topics: [
          { id: "sqrt-meaning", title: "平方根的意義", template({ r, mc }) { return mc(r, 13, 1, "9 的平方根（正根）為何？", "3", ["−3", "9", "81"], [`3²=9，所以 9 的正平方根為 3。`, `√9=3。`], "a 的平方根：平方等於 a 的數；√a 表非負平方根。", "√9=3，不是 ±3。") } },
          { id: "sqrt-notation", title: "平方根的表示法", template({ r, mc }) { return mc(r, 13, 1, "√16 的値為何？", "4", ["8", "±4", "2"], [`√16 表示 16 的非負平方根。`, `=4。`], "根號 √ 表示非負平方根。", "√16=4；x²=16 的解才是 ±4。") } },
          { id: "sqrt-finding-technique", title: "求平方根的技巧", template({ r, pick, mc }) { const item = pick(r, [{ n: 121, r: 11 }, { n: 144, r: 12 }]); return mc(r, 13, 1, `√${item.n} =？`, `${item.r}`, [`${item.r + 1}`, `${item.r - 1}`, `${item.n / 2}`], [`${item.n} 是完全平方數。`, `√${item.n}=${item.r}。`], "完全平方數可直接開根。", "先判斷是否為完全平方。") } },
          { id: "sqrt-a-squared-simplify", title: "√a² 與 √a² 的化簡", template({ r, mc, signed }) { return mc(r, 13, 1, "√(−5)² 的值為何？", "5", ["−5", "25", "±5"], [`(−5)²=25，√25=5。`, `√a²=|a|，所以 =5。`], "√a² = |a|。", "結果非負。") } },
          { id: "perfect-square-number", title: "完全平方數", template({ r, mc }) { return mc(r, 13, 1, "下列何者為完全平方數？", "49", ["45", "50", "48"], [`49=7²。`, `是完全平方數。`], "完全平方數 = 某整數的平方。", "接近平方數不一定是。") } },
          { id: "sqrt-compare-size", title: "平方根的比較大小", template({ r, mc }) { return mc(r, 13, 1, "比較 √5 與 √7 的大小。", "√5 < √7", ["√5 > √7", "√5 = √7", "無法比較"], [`被開方數越大，平方根越大。`, `5<7，所以 √5<√7。`], "a<b ⟹ √a<√b（a,b≥0）。", "不要只比較被開方數的差。") } },
          { id: "sqrt-approximate", title: "求 √a 的近似值", template({ r, mc }) { return mc(r, 13, 1, "√10 介於哪兩個連續整數之間？", "3 與 4", ["2 與 3", "4 與 5", "9 與 11"], [`3²=9，4²=16。`, `9<10<16，所以 √10 在 3 與 4 之間。`], "夾在 √n 與 √(n+1) 之間：找相鄰完全平方。", "先找 10 在哪兩個平方數之間。") } },
          { id: "prime-factorization-sqrt", title: "質因數分解求 √a² 的值", template({ r, mc }) { return mc(r, 13, 2, "√576 =？", "24", ["12", "48", "18"], [`576=24²。`, `或 576=2⁶×3²，√=2³×3=24。`], "先分解完全平方因數再開方。", "576 不是 2×288 直接開。") } },
          { id: "sqrt-meaning-evaluate", title: "平方根的意義與求值", template({ r, ri, mc }) { const n = ri(r, 3, 8) ** 2; return mc(r, 13, 1, `√${n} =？`, `${Math.sqrt(n)}`, [`${n / 2}`, `${Math.sqrt(n) + 1}`, `${n}`], [`${Math.sqrt(n)}²=${n}。`, `√${n}=${Math.sqrt(n)}。`], "求平方根：找平方等於被開方數的非負數。", "確認平方後還原。") } },
          { id: "compare-sqrt-a-b", title: "比較 √a 與 √b 的大小", template({ r, mc }) { return mc(r, 13, 1, "比較 √12 與 2√3 的大小。", "兩者相等", ["√12 較大", "2√3 較大", "無法比較"], [`√12=√(4×3)=2√3。`, `兩者相等。`], "化簡成最簡根式再比較。", "同類方根比係數。") } },
          { id: "decimal-approximation", title: "十分逼近法的應用", template({ r, mc }) { return mc(r, 13, 2, "以十分逼近法，√20 較接近 4.5 還是 4.4？", "4.5", ["4.4", "4.0", "5.0"], [`4.4²=19.36，4.5²=20.25。`, `20 較接近 20.25，故較接近 4.5。`], "十分逼近：試算相鄰小數平方，看較近。", "比較距離 |n²−a|。") } },
          { id: "perfect-square-evaluate", title: "完全平方數的求值問題", template({ r, mc }) { return mc(r, 13, 2, "√(16×25) =？", "20", ["41", "10", "40"], [`√(16×25)=√16×√25=4×5=20。`, `或 √(400)=20。`], "√(ab)=√a×√b（a,b≥0）。", "先分解再開方。") } }
        ]
      },
      {
        title: "根式的運算",
        topics: [
          { id: "radical-multiply", title: "乘法運算", template({ r, mc }) { return mc(r, 13, 1, "√2 × √8 =？", "4", ["√16", "√10", "16"], [`√2×√8=√16=4。`, `=4。`], "√a×√b=√(ab)。", "先合併再化簡。") } },
          { id: "radical-divide", title: "除法運算", template({ r, mc }) { return mc(r, 13, 1, "√18 ÷ √2 =？", "3", ["√9", "√16", "9"], [`√18÷√2=√9=3。`, `=3。`], "√a÷√b=√(a/b)。", "先合併再化簡。") } },
          { id: "simplest-radical-form", title: "最簡根式", template({ r, mc }) { return mc(r, 13, 1, "√50 化成最簡根式為何？", "5√2", ["25√2", "2√5", "10√5"], [`50=25×2，√50=5√2。`, `被開方數不含完全平方因數（除1）。`], "最簡根式：根號內無平方因數、分母無根號。", "25 要開出成 5。") } },
          { id: "radical-simplify", title: "根式的化簡", template({ r, mc }) { return mc(r, 13, 1, "化簡 √72。", "6√2", ["3√8", "8√2", "12√2"], [`72=36×2，√72=6√2。`, `=6√2。`], "分解完全平方因數再開方。", "不要 √72=√36+√36。") } },
          { id: "like-radicals", title: "同類方根", template({ r, mc }) { return mc(r, 13, 1, "下列哪兩個是同類方根？", "2√3 與 5√3", ["2√3 與 3√2", "√12 與 √18", "√5 與 √7"], [`同類方根：根號內相同。`, `2√3 與 5√3 皆為 √3 的倍數。`], "同類方根可合併加減。", "先化最簡再判斷。") } },
          { id: "radical-add-subtract", title: "加減運算", template({ r, mc }) { return mc(r, 13, 1, "3√2 + 5√2 =？", "8√2", ["8√4", "15√2", "8"], [`同類方根合併係數。`, `3+5=8，得 8√2。`], "同類方根：係數相加，根號部分不變。", "不同根號內不能合併。") } },
          { id: "radical-four-ops-intro", title: "四則運算", template({ r, mc }) { return mc(r, 13, 2, "2√3 × 3√2 =？", "6√6", ["5√5", "6√5", "12√6"], [`係數相乘、根號內相乘：2×3=6，√3×√2=√6。`, `=6√6。`], "根式乘法：係數×係數，根號內×根號內。", "先乘再化簡。") } },
          { id: "radical-multiply-divide", title: "根式的乘除運算", template({ r, mc }) { return mc(r, 13, 2, "√12 × √3 ÷ √2 =？", "3√2", ["6", "2√3", "3"], [`√12×√3=√36=6；6÷√2=3√2。`, `=3√2。`], "乘除從左到右，先合併根號。", "每步化簡。") } },
          { id: "radical-add-subtract-advanced", title: "根式的加減運算", template({ r, mc }) { return mc(r, 13, 2, "√48 − √12 =？", "2√3", ["√36", "2√12", "4√3"], [`√48=4√3，√12=2√3。`, `4√3−2√3=2√3。`], "先化最簡根式再合併。", "√48 不是 4√12。") } },
          { id: "rationalize-denominator", title: "利用平方差公式有理化分母", template({ r, mc }) { return mc(r, 13, 2, "1/(√5 − √3) 有理化分母後為何？", "(√5 + √3)/2", ["√5 − √3", "√5 + √3", "1/2"], [`分子分母同乘 (√5+√3)。`, `(√5+√3)/(5−3)=(√5+√3)/2。`], "分母 (√a−√b) 乘共轭 (√a+√b) 用平方差。", "分母變成有理數。") } },
          { id: "radical-four-ops-full", title: "根式的四則運算", template({ r, mc }) { return mc(r, 13, 2, "√8 + √18 − √2 =？", "4√2", ["5√2", "3√2", "6√2"], [`√8=2√2，√18=3√2。`, `2√2+3√2−√2=4√2。`], "混合運算：先化簡，再同類合併。", "先乘除後加減。") } },
          { id: "radical-compare-size", title: "根式的比較大小", template({ r, mc }) { return mc(r, 13, 2, "比較 3√2 與 2√3 的大小。", "3√2 > 2√3", ["3√2 < 2√3", "相等", "無法比較"], [`3√2=√18，2√3=√12。`, `18>12，所以 3√2>2√3。`], "比較根式：化為同根號或平方比較。", "可兩邊平方（正數）。") } },
          { id: "radical-application", title: "根式運算的應用", template({ r, mc }) { return mc(r, 13, 2, "正方形面積 50，邊長為何？", "5√2", ["25√2", "√50", "10"], [`邊長 = √50 = 5√2。`, `=5√2。`], "幾何量開方：面積→邊長用 √。", "最簡根式。") } }
        ]
      },
      {
        title: "畢氏定理",
        topics: [
          { id: "pythagorean-theorem", title: "畢氏定理", template({ r, mc }) { return mc(r, 13, 1, "直角三角形兩股 3、4，斜邊 c 滿足？", "c² = 3² + 4²", ["c² = 3² − 4²", "c = 3 + 4", "c² = 4² − 3²"], [`畢氏定理：斜邊² = 兩股²和。`, `c²=9+16=25。`], "直角三角形：c²=a²+b²。", "斜邊是最長邊。") } },
          { id: "altitude-on-hypotenuse", title: "直角三角形斜邊上的高", template({ r, mc }) { return mc(r, 13, 2, "直角三角形兩股 6、8，斜邊 10，斜邊上的高為？", "4.8", ["6", "8", "5"], [`面積 = 6×8/2 = 10×h/2。`, `24=5h，h=4.8。`], "面積法：ab/2 = ch/2。", "高垂直於斜邊。") } },
          { id: "coordinate-distance", title: "坐標平面上兩點的距離", template({ r, mc }) { return mc(r, 13, 2, "A(1, 2)、B(4, 6) 的距離為？", "5", ["7", "√7", "25"], [`Δx=3，Δy=4。`, `AB=√(3²+4²)=5。`], "距離 = √[(x₂−x₁)²+(y₂−y₁)²]。", "先算橫縱差再畢氏。") } },
          { id: "altitude-by-pythagorean", title: "利用畢氏定理求斜邊上的高", template({ r, mc }) { return mc(r, 13, 2, "直角三角形兩股 3、4，斜邊 5，求斜邊上的高。", "2.4", ["3", "4", "5"], [`面積 = 3×4÷2 = 5×h÷2。`, `6 = 2.5h，h = 2.4。`, `亦可用畢氏：先求斜邊分段再求 h。`], "斜邊上的高：ab=c·h 或面積法。", "高垂直於斜邊，不是股長。") } },
          { id: "find-side-pythagorean", title: "利用畢氏定理求邊長", template({ r, pick, mc }) { const t = pick(r, [[3,4,5],[5,12,13]]); return mc(r, 13, 2, `直角三角形兩股 ${t[0]}、${t[1]}，斜邊長？`, `${t[2]}`, [`${t[0]+t[1]}`, `${Math.abs(t[1]-t[0])}`, `${t[2]+1}`], [`c²=${t[0]}²+${t[1]}²=${t[2]}²。`, `c=${t[2]}。`], "斜邊 = √(a²+b²)。", "斜邊最長。") } },
          { id: "find-area-pythagorean", title: "利用畢氏定理求面積", template({ r, mc }) { return mc(r, 13, 2, "直角三角形斜邊 10、一股 6，三角形面積？", "24", ["30", "60", "48"], [`另一股 = √(10²−6²)=8。`, `面積 = 6×8÷2 = 24。`], "先求另一股，再用底×高÷2。", "斜邊不是底（除非作高）。") } },
          { id: "pythagorean-life-application", title: "畢氏定理在生活中的應用", template({ r, mc }) { return mc(r, 13, 2, "梯子長 5 m 靠牆，腳距牆 3 m，梯頂離地幾 m？", "4", ["2", "8", "√34"], [`梯子、牆、地面成直角三角形。`, `h=√(5²−3²)=4 m。`], "生活情境先畫直角三角形。", "斜邊是梯子長度。") } }
        ]
      }
    ]
  },
  "g8-1-c3": {
    source: "使用者提供：教育部課綱對照國二「因式分解與一元二次方程式」主題一（2026-07；對應 g8-1-c3 因式分解）。",
    sections: [{
      title: "因式分解",
      topics: [
        { id: "factor-and-multiple", title: "因式與倍式", template({ r, mc }) { return mc(r, 14, 1, "若 A×B=C，則 A、B 是 C 的什麼？", "因式", ["倍式", "公因式", "常數"], [`A×B=C → A、B 整除 C，為 C 的因式。`, `C 是 A、B 的倍式。`], "因式×因式=倍式。", "因式與倍式相對。") } },
        { id: "factorization-concept", title: "因式分解", template({ r, mc }) { return mc(r, 14, 1, "將 3x+6 寫成 3(x+2) 的過程稱為？", "因式分解", ["展開", "通分", "移項"], [`把多項式寫成因式乘積。`, `即因式分解。`], "因式分解是展開的逆運算。", "結果是乘積形式。") } },
        { id: "common-factor", title: "公因式", template({ r, mc }) { return mc(r, 14, 1, "6x² 與 9x 的公因式為何？", "3x", ["3", "x", "6x"], [`6x²=3x·2x，9x=3x·3。`, `公因式 3x。`], "公因式：同時整除各項的因式。", "要取各項都有的最大部分。") } },
        { id: "gcf-factoring", title: "利用提公因式法作因式分解", template({ r, ri, mc }) { const k = ri(r, 2, 5), a = ri(r, 2, 4), b = ri(r, 1, 6); return mc(r, 14, 1, `因式分解 ${k * a}x² + ${k * b}x。`, `${k}x(${a}x + ${b})`, [`${k}(${a}x² + ${b}x)`, `${k * a}x(x + ${b})`, `${a}x(${k}x + ${b})`], [`公因式 ${k}x。`, `提出得 ${k}x(${a}x+${b})。`], "第一步：找公因式提出。", "要提乾淨。") } },
        { id: "formula-factoring", title: "利用乘法公式作因式分解", template({ r, mc }) { return mc(r, 14, 1, "因式分解 x² − 9。", "(x + 3)(x − 3)", ["(x − 3)²", "(x + 9)(x − 9)", "(x − 3)(x − 3)"], [`x²−9 = x²−3²。`, `=(x+3)(x−3)。`], "平方差：a²−b²=(a+b)(a−b)。", "確認是平方相減。") } },
        { id: "cross-multiplication-factoring", title: "利用十字交乘法作因式分解", template({ r, ri, mc }) { const p = ri(r, 2, 5), q = ri(r, 2, 6), sum = p + q, prod = p * q; return mc(r, 14, 2, `因式分解 x² + ${sum}x + ${prod}。`, `(x + ${p})(x + ${q})`, [`(x − ${p})(x − ${q})`, `(x + ${sum})(x + ${prod})`, `(x + ${prod})(x + ${sum})`], [`找兩數和 ${sum}、積 ${prod}：${p}、${q}。`, `=(x+${p})(x+${q})。`], "x²+bx+c：找和 b、積 c 的兩數。", "符號要配合。") } },
        { id: "factor-application", title: "因式的應用與因式分解", template({ r, mc }) { return mc(r, 14, 2, "48 的因式分解（質因數）為何？", "2⁴×3", ["2³×3²", "2×24", "4×12"], [`48=16×3=2⁴×3。`, `質因數分解 2⁴×3。`], "整數因式分解指質因數分解。", "要寫成質數乘積。") } },
        { id: "multiple-application", title: "倍式的應用與因式分解", template({ r, mc }) { return mc(r, 14, 2, "若 (x+2)(x−3)=0，則 x 的可能值？", "−2 或 3", ["2 或 −3", "−2 和 3 同時", "5"], [`零乘積：x+2=0 或 x−3=0。`, `x=−2 或 3。`], "倍式為 0 → 至少一因式為 0。", "是或，不是且。") } },
        { id: "substitution-factoring", title: "式子的代換與因式分解", template({ r, mc }) { return mc(r, 14, 2, "因式分解 x⁴ − 81。", "(x² + 9)(x + 3)(x − 3)", ["(x² − 9)²", "(x + 3)⁴", "(x − 9)(x + 9)"], [`x⁴−81=(x²)²−9²。`, `=(x²+9)(x²−9)=(x²+9)(x+3)(x−3)。`], "視 x² 為 u，用平方差。", "可多次分解。") } },
        { id: "coefficient-by-factoring", title: "利用因式分解求係數", template({ r, mc }) { return mc(r, 14, 2, "若 x² + kx + 12=(x+3)(x+4)，則 k =？", "7", ["12", "3", "−7"], [`展開 (x+3)(x+4)=x²+7x+12。`, `k=7。`], "因式分解與展開互驗係數。", "中項係數是和。") } },
        { id: "standard-form-factoring", title: "利用因式分解求標準分解式", template({ r, mc }) { return mc(r, 14, 2, "360 的標準分解式為何？", "2³×3²×5", ["2²×3×5²", "36×10", "2×180"], [`360=8×45=2³×3²×5。`, `標準分解式 2³×3²×5。`], "標準分解式：質因數的乘積。", "指數寫清楚。") } },
        { id: "factoring-word-problem", title: "因式分解的應用問題", template({ r, ri, mc }) { const w = ri(r, 3, 8); return mc(r, 14, 2, `長 x、寬 (x+${w}) 的長方形面積多項式為何？`, `x² + ${w}x`, [`x² − ${w}x`, `2x + ${w}`, `x(x−${w})`], [`面積 = x(x+${w})。`, `展開 x²+${w}x。`], "幾何面積展開後可因式分解或反之。", "長×寬。") } }
      ]
    }]
  },
  "g8-1-c4": {
    source: "使用者提供：教育部課綱對照國二「因式分解與一元二次方程式」主題二～四（2026-07；對應 g8-1-c4 一元二次方程式）。",
    sections: [
      {
        title: "因式分解法解一元二次方程式",
        topics: [
          { id: "quadratic-equation-concept", title: "一元二次方程式", template({ r, mc }) { return mc(r, 15, 1, "下列哪一個是一元二次方程式？", "x² − 3x + 2 = 0", ["x² − 3x", "x + 2 = 0", "x² + y = 0"], [`最高次項 x²，且一次未知數。`, `x²−3x+2=0 符合。`], "一元二次：一個未知數、最高次 2、有等號。", "兩個未知數不是一元。") } },
          { id: "quadratic-solution", title: "一元二次方程式的解", template({ r, mc }) { return mc(r, 15, 1, "x = 2 是否為 x² − 5x + 6 = 0 的解？", "是", ["否", "無法判斷", "條件不足"], [`代入：4−10+6=0。`, `成立，是解。`], "解：代入使等式成立。", "要算完整左式。") } },
          { id: "solve-quadratic", title: "解一元二次方程式", template({ r, ri, mc }) { const p = ri(r, 2, 5), q = ri(r, 2, 6); return mc(r, 15, 2, `解 x² − ${p + q}x + ${p * q} = 0。`, `x = ${p} 或 ${q}`, [`x = −${p} 或 −${q}`, `x = ${p + q}`, `x = ${p * q}`], [`因式分解 (x−${p})(x−${q})=0。`, `x=${p} 或 ${q}。`], "整理成 =0 再因式分解或公式。", "零乘積性質。") } },
          { id: "factor-method-quadratic", title: "因式分解法解一元二次方程式", template({ r, mc }) { return mc(r, 15, 2, "解 x² − 9 = 0。", "x = 3 或 −3", ["x = 9", "x = 3", "x = −3"], [`x²−9=(x+3)(x−3)=0。`, `x=±3。`], "先移項再因式分解。", "平方差。") } },
          { id: "quadratic-identification", title: "一元二次方程式的判別", template({ r, pick, mc }) { const item = pick(r, [{ ok: "2x² + x − 1 = 0", no: "2x + 1 = 0" }, { ok: "x(x−1)=0", no: "x² + x" }]); return mc(r, 15, 1, "下列哪一個是一元二次方程式？", item.ok, [item.no, "x³ = 1", "y = x²"], [`化簡後最高次為 2 且一元。`, `${item.ok} 符合。`], "展開後判斷次數。", "=0 才是方程式。") } },
          { id: "quadratic-solution-evaluate", title: "一元二次方程式的解與求值", template({ r, mc }) { return mc(r, 15, 2, "若 x² − 4x + 3=0 的解為 1、3，則 x² − 4x + 3 在 x=1 的值？", "0", ["1", "3", "−1"], [`x=1 是解 → 代入為 0。`, `=0。`], "解代入原式得 0。", "求值與解的關係。") } },
          { id: "substitution-solve-equation", title: "式子的代換與解方程式", template({ r, mc }) { return mc(r, 15, 2, "若 y=x²，且 y=9，則 x =？", "3 或 −3", ["9", "3", "−3"], [`x²=9。`, `x=±3。`], "代換後解 simpler 方程。", "記得 ±。") } },
          { id: "equation-solution-find-equation", title: "方程式的解與求方程式", template({ r, mc }) { return mc(r, 15, 2, "解為 x=2 或 x=−1 的一元二次方程式可能為？", "(x − 2)(x + 1)=0", ["x − 2 + x + 1 = 0", "(x + 2)(x − 1)=0", "x² − 1 = 0"], [`根 2、−1 → (x−2)(x+1)=0。`, `展開 x²−x−2=0。`], "已知解寫 (x−α)(x−β)=0。", "符號要對。") } }
        ]
      },
      {
        title: "配方法與公式解",
        topics: [
          { id: "sqrt-concept-quadratic", title: "平方根的概念", template({ r, mc }) { return mc(r, 15, 1, "解 x² = 16 時，為何 x 有兩解？", "16 有 ±4 兩個平方根", ["√16=−4", "方程式只能有一解", "16 只有一個平方根"], [`x²=16 → x=±4。`, `平方根有正負。`], "x²=a（a>0）→ x=±√a。", "漏解 −4。") } },
          { id: "complete-square-form", title: "配成完全平方式", template({ r, mc }) { return mc(r, 15, 1, "x² + 6x + 9 可寫成？", "(x + 3)²", ["(x + 9)²", "(x + 3)(x − 3)", "(x + 6)²"], [`9=(6/2)²。`, `x²+6x+9=(x+3)²。`], "配完全平方：常數=(一次項系数/2)²。", "中項=2×兩數乘積。") } },
          { id: "completing-square-method", title: "配方法解一元二次方程式", template({ r, mc }) { return mc(r, 15, 2, "解 x² + 4x − 5 = 0（配方法）。", "x = 1 或 −5", ["x = −1 或 5", "x = 1 或 5", "x = −1 或 −5"], [`x²+4x+4=9 → (x+2)²=9。`, `x+2=±3，x=1 或 −5。`], "移常數→配方→開方。", "加減 (b/2)²。") } },
          { id: "quadratic-formula", title: "一元二次方程式的公式解", template({ r, mc }) { return mc(r, 15, 2, "x² − 2x − 3=0 以公式解，x =？", "3 或 −1", ["1 或 −3", "−3 或 1", "2 或 −1"], [`a=1,b=−2,c=−3。`, `x=(2±√16)/2=(2±4)/2，x=3 或 −1。`], "x=(-b±√(b²−4ac))/(2a)。", "先判 a,b,c。") } },
          { id: "discriminant-cases", title: "判別式與解的情形", template({ r, mc }) { return mc(r, 15, 2, "x² + x + 1=0 的判別式 b²−4ac 為何？正負？", "−3，小於 0，無實根", ["1，大於 0", "0，有一重根", "3，大於 0"], [`b²−4ac=1−4=−3<0。`, `無實根（國中可寫無解）。`], "D>0 兩相異實根；D=0 重根；D<0 無實根。", "先算 D。") } },
          { id: "sqrt-method-quadratic", title: "平方根概念解一元二次方程式", template({ r, mc }) { return mc(r, 15, 2, "解 x² = 25。", "x = 5 或 −5", ["x = 25", "x = 5", "x = −5"], [`x=±√25=±5。`], "x²=k（k>0）→ x=±√k。", "兩解。") } },
          { id: "discriminant-application", title: "判別式的應用", template({ r, mc }) { return mc(r, 15, 2, "x² − 4x + k=0 有相等實根，則 k =？", "4", ["0", "−4", "8"], [`D=16−4k=0。`, `k=4。`], "相等實根 ⟺ D=0。", "列 D=0 求參數。") } },
          { id: "completing-square-evaluate", title: "配方法與求值問題", template({ r, mc }) { return mc(r, 15, 2, "x² + 6x + 10 的最小值（配方法）？", "1", ["10", "−1", "9"], [`=(x+3)²+1。`, `最小值 1（x=−3）。`], "完全平方≥0，加常數得最小值。", "頂點式。") } },
          { id: "formula-evaluate", title: "公式解與求值問題", template({ r, mc }) { return mc(r, 15, 2, "2x² − 4x − 6=0 兩根之和（公式/Vieta）？", "2", ["−2", "3", "−3"], [`和=−b/a=4/2=2。`, `兩根之和 2。`], "ax²+bx+c=0 兩根和 −b/a。", "先化 a=1 或直接用公式。") } }
        ]
      },
      {
        title: "應用問題",
        topics: [
          { id: "quadratic-word-steps", title: "解應用問題的步驟", template({ r, mc }) { return mc(r, 15, 1, "解一元二次應用題時，列完方程式後通常？", "解方程式並檢查解是否合理", ["直接猜", "只寫因式分解", "不需檢查"], [`列式→解方程→檢查（如長度>0、整數）。`, `選合理解作答。`], "應用題要檢查解是否符合情境。", "負長度通常不合理。") } },
          { id: "quadratic-area-problem", title: "面積問題", template({ r, mc }) { return mc(r, 15, 2, "長比寬多 2、面積 24 的長方形，寬 x，可列？", "x(x + 2) = 24", ["x + (x + 2) = 24", "2(x + 2) = 24", "x² = 24"], [`寬 x，長 x+2，面積 x(x+2)=24。`, `即 x²+2x−24=0。`], "面積=長×寬。", "周長不是面積。") } },
          { id: "quadratic-distribution-problem", title: "分配問題", template({ r, mc }) { return mc(r, 15, 2, "某數 x 乘以比它大 3 的數得 108，可列？", "x(x + 3) = 108", ["x + (x + 3) = 108", "3x = 108", "x² = 108"], [`兩數 x 與 x+3 乘積 108。`, `x(x+3)=108。`], "連續或相差固定→用 x 表示。", "乘積列式。") } },
          { id: "quadratic-life-application", title: "生活中的應用問題", template({ r, mc }) { return mc(r, 15, 2, "球拋出後高度 h=−5t²+20t（t 秒），幾秒落地？", "4 秒", ["2 秒", "5 秒", "0 秒"], [`落地 h=0：−5t²+20t=0。`, `−5t(t−4)=0，t=0 或 4，取 4 秒。`], "應用→=0 求 t，取合理值。", "t=0 是起點。") } }
        ]
      }
    ]
  }
};
