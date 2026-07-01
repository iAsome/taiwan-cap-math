window.EXAM_ENGINE = (() => {
  const U = window.SCIENCE_DATA.units;

  function rngFromSeed(seed) {
    let a = (Number(seed) || 1) >>> 0;
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  const ri = (r, min, max) => Math.floor(r() * (max - min + 1)) + min;
  const pick = (r, list) => list[ri(r, 0, list.length - 1)];
  const over = (n, d) => `[[frac:${n}|${d}]]`;
  function shuffled(r, arr) {
    const out = [...arr];
    for (let i = out.length - 1; i > 0; i--) { const j = ri(r, 0, i); [out[i], out[j]] = [out[j], out[i]]; }
    return out;
  }
  function mc(r, unitId, difficulty, text, correct, distractors, steps, tip, trap, concept) {
    const values = [];
    [correct, ...distractors].map(String).forEach(v => { if (!values.includes(v)) values.push(v); });
    let bump = 1;
    while (values.length < 4) { const fallback = `${correct}′${"′".repeat(bump++)}`; if (!values.includes(fallback)) values.push(fallback); }
    const choices = shuffled(r, values.slice(0, 4));
    return { type: "mc", unitId, difficulty, text, choices, answer: choices.indexOf(String(correct)), steps, tip, trap, concept: concept || U[unitId - 1].summary, formula: U[unitId - 1].formula };
  }

  const generators = [
    // 1. 科學測量與密度
    (r, level) => {
      const mass = ri(r, 40 + level * 10, 200), v1 = ri(r, 20, 60), rise = ri(r, 10, 30 + level * 5);
      const v2 = v1 + rise, density = Number((mass / rise).toFixed(2));
      return mc(r, 1, 2, `一金屬塊質量 ${mass} 公克，放入裝有 ${v1} mL 水的量筒後，水面上升到 ${v2} mL，此金屬的密度是多少？`, `${density} g/cm³`,
        [`${Number((mass / v2).toFixed(2))} g/cm³`, `${mass - rise} g/cm³`, `${Number((rise / mass).toFixed(2))} g/cm³`],
        [`排開水的體積＝${v2}−${v1}=${rise} mL＝${rise} cm³。`, `密度＝質量÷體積＝${mass}÷${rise}=${density} g/cm³。`], "密度＝質量÷體積，體積用排開水的量，不是量筒總讀數。", "不要直接拿最後的量筒讀數當作體積，要先減去原本的水量。");
    },
    // 2. 物質的分類與分離
    (r) => {
      const cases = [
        ["食鹽水", "過濾", "萃取", "食鹽已完全溶解在水中，無法用過濾分離"],
        ["泥沙與水的混合液", "過濾", "蒸餾", "泥沙不溶於水，用過濾即可分離，不需要蒸餾"],
        ["食鹽水（想取出純水）", "蒸餾", "過濾", "食鹽已溶解在水中，過濾無法把食鹽與水分開"],
        ["油與水的混合液", "利用密度差分層", "蒸餾", "油與水不互溶且密度不同，可直接分層倒出，不需要蒸餾"]
      ];
      const [scenario, correct, wrong, why] = pick(r, cases);
      return mc(r, 2, 2, `想要分離「${scenario}」，最合適的方法是？`, correct, [wrong, "加熱使其發生化學反應", "無法用物理方法分離"],
        [`先判斷成分間的物理性質差異（溶解度、沸點、密度）。`, `${scenario}適合用${correct}分離，因為${why}。`], "分離方法要對應成分的物理性質差異，不能用錯方法。", "食鹽水不能用過濾分離，因為食鹽已完全溶解，過濾不到。");
    },
    // 3. 水溶液與空氣
    (r, level) => {
      const solute = ri(r, 10, 20 + level * 2), solvent = ri(r, 80, 180);
      const total = solute + solvent, ans = Number((solute / total * 100).toFixed(1));
      return mc(r, 3, 2, `把 ${solute} 公克食鹽完全溶解在 ${solvent} 公克的水中，此食鹽水的重量百分濃度最接近多少？`, `${ans}%`,
        [`${Number((solute / solvent * 100).toFixed(1))}%`, `${Number((solvent / total * 100).toFixed(1))}%`, `${Number((solute / (total * 2) * 100).toFixed(1))}%`],
        [`溶液總重＝溶質+溶劑＝${solute}+${solvent}=${total} 公克。`, `重量百分濃度＝${over(solute, total)}×100%≈${ans}%。`], "分母一定是溶液總重（溶質＋溶劑），不是只有溶劑重。", "不要把溶劑重直接當作溶液重來計算。");
    },
    // 4. 波動與聲音
    (r, level) => {
      const wavelength = ri(r, 2, 6 + level), freq = ri(r, 50, 200 + level * 20);
      const speed = wavelength * freq;
      return mc(r, 4, 2, `一波的波長為 ${wavelength} 公尺、頻率為 ${freq} 赫茲，波速是多少？`, `${speed} 公尺/秒`,
        [`${wavelength + freq} 公尺/秒`, `${Number((freq / wavelength).toFixed(1))} 公尺/秒`, `${speed * 2} 公尺/秒`],
        [`波速公式：v＝波長×頻率。`, `代入得 v＝${wavelength}×${freq}=${speed} 公尺/秒。`], "波速＝波長×頻率，記得統一單位。", "不要把波長與頻率相加或相除，公式是相乘。");
    },
    // 5. 光的反射與折射
    (r) => {
      const angle = ri(r, 20, 70);
      return mc(r, 5, 1, `一光線以 ${angle}° 的入射角射向平面鏡，反射角是多少？`, `${angle}°`, [`${90 - angle}°`, `${180 - angle}°`, `${Number((angle / 2).toFixed(1))}°`],
        [`反射定律：入射角＝反射角，兩者都是對法線量測。`, `所以反射角也是 ${angle}°。`], "角度都是從法線（垂直界面的假想線）量起。", "不要把角度誤認為是從鏡面本身量起。");
    },
    // 6. 溫度與熱
    (r, level) => {
      const mass = ri(r, 50, 200), c = 1, t1 = ri(r, 10, 25), t2 = t1 + ri(r, 20, 50 + level * 5);
      const q = mass * c * (t2 - t1);
      return mc(r, 6, 2, `${mass} 公克的水（比熱 1 cal/g·°C）從 ${t1}°C 加熱到 ${t2}°C，需要吸收多少熱量？`, `${q} 卡`,
        [`${mass + (t2 - t1)} 卡`, `${Number((q / 2).toFixed(0))} 卡`, `${t2 - t1} 卡`],
        [`公式：Q＝m×c×ΔT。`, `代入得 Q＝${mass}×1×(${t2}−${t1})＝${q} 卡。`], "先求溫度變化量 ΔT，再乘以質量與比熱。", "不要忘記乘上比熱；水的比熱是 1，其他物質不是。");
    },
    // 7. 物質的基本結構
    (r, level) => {
      const protons = ri(r, 3, 18 + level), neutrons = ri(r, protons, protons + 8);
      const massNumber = protons + neutrons;
      return mc(r, 7, 2, `某原子的原子序為 ${protons}，質量數為 ${massNumber}，此原子的中子數是多少？`, `${neutrons}`,
        [`${massNumber}`, `${protons}`, `${massNumber + protons}`],
        [`原子序＝質子數；質量數＝質子數＋中子數。`, `中子數＝質量數−質子數＝${massNumber}−${protons}=${neutrons}。`], "質量數減質子數就是中子數。", "不要把原子序（質子數）誤當成中子數。");
    },
    // 8. 化學反應與質量守恆
    (r, level) => {
      const reactantA = ri(r, 10, 40 + level * 5), reactantB = ri(r, 10, 40 + level * 5);
      const total = reactantA + reactantB;
      return mc(r, 8, 2, `${reactantA} 公克的甲物質與 ${reactantB} 公克的乙物質完全反應，生成丙與丁兩種物質。若已知生成丙 ${Math.floor(total * 0.6)} 公克，依質量守恆定律，生成丁應為多少公克？`, `${total - Math.floor(total * 0.6)} 公克`,
        [`${total} 公克`, `${Math.floor(total * 0.6)} 公克`, `${Math.abs(reactantA - reactantB)} 公克`],
        [`質量守恆定律：反應物總質量＝生成物總質量。`, `反應物總質量＝${reactantA}+${reactantB}=${total} 公克。`, `生成物丁＝總質量−丙＝${total}−${Math.floor(total * 0.6)}＝${total - Math.floor(total * 0.6)} 公克。`], "反應前後原子種類與數目不變，總質量一定守恆。", "不要把丙的質量誤當成丁的質量，要用總質量相減。");
    },
    // 9. 氧化與還原反應
    (r) => {
      const pairs = [
        ["鐵釘", "硫酸銅溶液", "銅"], ["鋅片", "硫酸銅溶液", "銅"], ["鎂帶", "硝酸銀溶液", "銀"]
      ];
      const [metal, solution, deposit] = pick(r, pairs);
      return mc(r, 9, 2, `把${metal}放入${solution}中一段時間，金屬表面會附著一層${deposit}，這代表發生了什麼反應？`, "氧化還原反應",
        ["只有物理變化，沒有化學反應", "中和反應", "單純的溶解，沒有電子轉移"],
        [`${metal}的金屬原子失去電子被氧化，進入溶液成為離子。`, `溶液中的金屬離子得到電子被還原，附著在${metal}表面形成${deposit}。`], "有電子得失、生成新物質，就是氧化還原反應。", "表面出現新物質，代表發生了化學反應，不是單純物理變化。");
    },
    // 10. 電解質與酸鹼反應
    (r) => {
      const items = shuffled(r, [
        ["檸檬汁", 2], ["肥皂水", 9], ["純水", 7], ["胃酸", 1.5], ["蘇打水", 5], ["漂白水", 12]
      ]).slice(0, 4);
      const strongest = items.reduce((a, b) => a[1] < b[1] ? a : b);
      const others = items.filter(x => x !== strongest).map(x => x[0]);
      return mc(r, 10, 2, `已知 ${items.map(x => `${x[0]}（pH≈${x[1]}）`).join("、")}，何者酸性最強？`, strongest[0], others,
        [`pH 值越小代表酸性越強。`, `比較這幾個 pH 值，最小的是 ${strongest[1]}，對應的是${strongest[0]}。`], "pH 值小於 7 為酸性，數值越小酸性越強。", "不要把 pH 值越大誤認為酸性越強，那其實是鹼性越強。");
    },
    // 11. 反應速率與化學平衡
    (r) => {
      const items = [
        ["把大理石磨成粉末，比保持塊狀，與同濃度鹽酸反應", "較快", ["較慢", "一樣快", "完全不反應"], "顆粒越小，接觸面積越大，碰撞機會增加"],
        ["把溫度從 20°C 提高到 60°C，其他條件不變，反應速率會", "變快", ["變慢", "不變", "無法判斷"], "溫度升高使粒子平均動能增加，碰撞更頻繁"],
        ["加入催化劑後，反應速率通常會", "加快，且催化劑本身不被消耗", ["加快，但催化劑會被消耗完", "變慢", "不變"], "催化劑能降低反應所需的能量，但反應前後本身的量不變"]
      ];
      const [q, correct, distractors, why] = pick(r, items);
      return mc(r, 11, 2, q + "？", correct, distractors,
        [`先判斷改變的是濃度、溫度、接觸面積還是催化劑。`, `${why}，因此反應速率${correct}。`], "濃度、溫度、接觸面積增加，通常使反應變快。", "催化劑會改變反應速率，但本身不會被消耗掉。");
    },
    // 12. 有機化合物
    (r) => {
      const items = [
        ["肥皂能把碗盤上的油汙洗掉，是因為肥皂分子", "一端親油、一端親水", ["全部都親油", "全部都親水", "本身就是油脂"], "親油端包住油汙，親水端使油汙能隨水沖走"],
        ["尼龍、聚酯纖維屬於哪一類物質？", "人工合成的有機化合物", ["無機化合物", "元素", "不含碳的化合物"], "含碳且是由許多小分子聚合而成的高分子"],
        ["石油煉製可以分離出汽油、柴油等產物，這些主要屬於哪一類化合物？", "烴類（只含碳與氫）", ["酸類", "鹼類", "只含碳的元素"], "石油的主要成分是碳氫化合物"]
      ];
      const [q, correct, distractors, why] = pick(r, items);
      return mc(r, 12, 2, q, correct, distractors,
        [`先掌握「含碳＝有機化合物」的判斷原則。`, `${why}，所以答案是${correct}。`], "有機化合物種類多樣，判斷重點在於是否含碳，不是是否來自生物。", "不要以為有機化合物只能是天然生成，許多是人工合成的。");
    },
    // 13. 力與壓力
    (r, level) => {
      const vol = ri(r, 100 + level * 20, 400), waterD = 1, objD = Number((ri(r, 3, 9) / 10).toFixed(1));
      const buoyancy = vol * waterD;
      const floats = objD < 1;
      return mc(r, 13, 2, `一物體體積 ${vol} cm³，完全浸入水中（水密度 1 g/cm³），此時物體受到的浮力是多少？`, `${buoyancy} 公克重`,
        [`${Math.round(vol * objD)} 公克重`, `${vol} 公克重（單位錯誤示範）`.replace("（單位錯誤示範）", ""), `${Math.round(vol / 2)} 公克重`],
        [`阿基米德原理：浮力＝排開液體的體積×液體密度。`, `完全浸入時排開水的體積等於物體體積 ${vol} cm³。`, `浮力＝${vol}×1＝${buoyancy} 公克重。`], "浮力只跟排開液體的體積與液體密度有關，先確認是否完全浸入。", "不要把物體本身的重量誤當成浮力，兩者要分開計算。");
    },
    // 14. 直線運動
    (r, level) => {
      const u = ri(r, 0, 5), v = u + ri(r, 8, 15 + level * 2), t = ri(r, 2, 6);
      const a = Number(((v - u) / t).toFixed(2));
      return mc(r, 14, 2, `一物體從 ${u} 公尺/秒加速到 ${v} 公尺/秒，共花了 ${t} 秒，且加速度固定，此加速度是多少？`, `${a} 公尺/秒²`,
        [`${Number(((v + u) / t).toFixed(2))} 公尺/秒²`, `${Number((v / t).toFixed(2))} 公尺/秒²`, `${v - u} 公尺/秒²`],
        [`加速度＝(末速度−初速度)÷所花時間。`, `代入得 a＝(${v}−${u})÷${t}=${a} 公尺/秒²。`], "加速度是速度變化量除以時間，不是末速度除以時間。", "分子要用「末速度減初速度」，不能只除以末速度。");
    },
    // 15. 力與牛頓運動定律
    (r, level) => {
      const mass = ri(r, 2, 8 + level), acc = ri(r, 2, 6);
      const force = mass * acc;
      return mc(r, 15, 2, `一物體質量 ${mass} 公斤，受到 ${force} 牛頓的水平合力，加速度是多少？`, `${acc} 公尺/秒²`,
        [`${force * mass} 公尺/秒²`, `${Number((force / (mass * 2)).toFixed(1))} 公尺/秒²`, `${mass} 公尺/秒²`],
        [`牛頓第二定律：F＝m×a。`, `所以 a＝F÷m＝${force}÷${mass}＝${acc} 公尺/秒²。`], "先確認公式方向：a＝F÷m，不是 F÷m 顛倒。", "不要把質量與加速度直接相乘當作答案。");
    },
    // 16. 功與能
    (r, level) => {
      const force = ri(r, 20, 60 + level * 5), dist = ri(r, 2, 8);
      const work = force * dist;
      return mc(r, 16, 2, `用 ${force} 牛頓的水平施力，把物體沿施力方向推動 ${dist} 公尺，做了多少功？`, `${work} 焦耳`,
        [`${force + dist} 焦耳`, `${Number((force / dist).toFixed(1))} 焦耳`, `${work / 2} 焦耳`],
        [`做功公式：W＝力×沿力方向的位移。`, `代入得 W＝${force}×${dist}=${work} 焦耳。`], "力與位移方向一致時才直接相乘。", "力與位移方向若垂直，則此力不做功。");
    },
    // 17. 靜電與電路
    (r, level) => {
      if (r() < 0.5) {
        const cases = [
          ["毛皮摩擦塑膠尺，塑膠尺帶負電", "毛皮", "塑膠尺"],
          ["絲綢摩擦玻璃棒，玻璃棒帶正電", "玻璃棒", "絲綢"],
          ["羊毛摩擦氣球，氣球帶負電", "羊毛", "氣球"]
        ];
        const [scenario, from, to] = pick(r, cases);
        return mc(r, 17, 2, `「${scenario}」，這代表電子往哪個方向轉移？`, `從${from}轉移到${to}`,
          [`從${to}轉移到${from}`, "質子從一方轉移到另一方", "沒有任何粒子轉移，只是電荷憑空產生"],
          [`帶負電代表多了電子，帶正電代表少了電子。`, `因此電子是從${from}轉移到${to}，使${to}帶負電。`], "先找出哪個物體帶負電，電子就是往那個方向移動。", "摩擦起電轉移的是電子，質子不會離開原子核。");
      }
      const current = ri(r, 1, 5 + level), resistance = ri(r, 2, 10);
      const voltage = current * resistance;
      return mc(r, 17, 2, `一電阻兩端的電壓為 ${voltage} 伏特，通過的電流為 ${current} 安培，此電阻值是多少？`, `${resistance} 歐姆`,
        [`${voltage * current} 歐姆`, `${Number((voltage + current).toFixed(1))} 歐姆`, `${Number((current / voltage).toFixed(2))} 歐姆`],
        [`歐姆定律：V＝I×R。`, `所以 R＝V÷I＝${voltage}÷${current}＝${resistance} 歐姆。`], "R＝V÷I，記得先確認電壓與電流的單位。", "不要把電壓與電流相乘當成電阻，那是錯誤的變形。");
    },
    // 18. 電流的熱效應與生活用電
    (r, level) => {
      const voltage = pick(r, [100, 110, 220]), current = ri(r, 2, 8 + level);
      const power = voltage * current;
      return mc(r, 18, 2, `一個標示「${voltage}V、${power}W」的電器，正常使用時通過的電流是多少？`, `${current} 安培`,
        [`${power} 安培`, `${Number((power / (current * 2)).toFixed(1))} 安培`, `${voltage} 安培`],
        [`電功率公式：P＝I×V。`, `所以 I＝P÷V＝${power}÷${voltage}＝${current} 安培。`], "P＝IV，求電流時記得用功率除以電壓。", "不要把標示的瓦特數直接當成安培數。");
    },
    // 19. 電池與電流的化學效應
    (r) => {
      const options = [
        ["電解水時，陰極產生的氣體是？", "氫氣", ["氧氣", "二氧化碳", "氮氣"]],
        ["電解水時，陽極產生的氣體是？", "氧氣", ["氫氣", "二氧化碳", "氮氣"]]
      ];
      const [q, correct, distractors] = pick(r, options);
      return mc(r, 19, 2, q, correct, distractors,
        [`電解水的化學反應：2H₂O → 2H₂ ＋ O₂。`, `陰極發生還原、產生氫氣；陽極發生氧化、產生氧氣。`], "電解水產生的氫氣與氧氣體積比約為 2:1。", "不要把陰極、陽極產生的氣體記反。");
    },
    // 20. 電流的磁效應
    (r) => {
      const items = [
        ["增加線圈的匝數，電磁鐵的磁力會如何變化？", "增強", ["減弱", "不變", "無法判斷"]],
        ["增加通過線圈的電流，電磁鐵的磁力會如何變化？", "增強", ["減弱", "不變", "無法判斷"]],
        ["把電磁鐵的電流方向反過來，電磁鐵的磁極會如何變化？", "南北極互換", ["磁力消失", "磁力變得更強", "完全不變"]]
      ];
      const [q, correct, distractors] = pick(r, items);
      return mc(r, 20, 2, q, correct, distractors,
        [`電磁鐵的磁場由電流產生，磁場方向可用右手定則判斷。`, `依此原理可判斷此情境的結果：${correct}。`], "電流大小、線圈匝數會影響電磁鐵磁力強弱；電流方向決定磁極方向。", "電磁鐵斷電後磁性會消失，這與永久磁鐵不同。");
    },
    // 21. 電磁感應與發電
    (r) => {
      const items = [
        ["把磁鐵快速插入線圈，比慢慢插入產生的感應電流", "較大", ["較小", "一樣大", "完全不會產生電流"]],
        ["把磁鐵靜止放在線圈旁邊不移動，線圈會產生感應電流嗎？", "不會，因為磁場沒有變化", ["會，且電流很大", "會，但電流方向不固定", "會，只要磁鐵夠強就一定會"]],
        ["發電機主要是把哪一種能量轉換成電能？", "力學能", ["化學能", "光能", "熱能"]]
      ];
      const [q, correct, distractors] = pick(r, items);
      return mc(r, 21, 3, q, correct, distractors,
        [`電磁感應的關鍵是磁場（磁通量）是否發生變化，變化越快感應電流越大。`, `依此原理可判斷此情境的結果。`], "電磁感應需要磁場「變化」才會產生感應電流。", "磁場強不代表一定會感應出電流，重點在於是否變化。");
    }
  ];

  function makeQuizUnitQuestion(r, unitId, level) {
    if (unitId >= 1 && unitId <= 21) return generators[unitId - 1](r, level);
    throw new Error(`小考單元 ${unitId} 尚未建立出題器`);
  }

  const termQuizzes = [
    { id: "g8-all", grade: 8, term: "總複習", title: "國二理化總複習", seed: 8100, unitIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], domainNote: "物質・波動・能量・反應・運動與力" },
    { id: "g8-1", grade: 8, term: "上學期", title: "國二上學期總複習", seed: 8101, unitIds: [1, 2, 3, 4, 5, 6, 7], domainNote: "物質・波動・能量" },
    { id: "g8-2", grade: 8, term: "下學期", title: "國二下學期總複習", seed: 8102, unitIds: [8, 9, 10, 11, 12, 13], domainNote: "反應・運動與力" },
    { id: "g9-all", grade: 9, term: "總複習", title: "國三理化總複習", seed: 9100, unitIds: [14, 15, 16, 17, 18, 19, 20, 21], domainNote: "運動與力・能量・電磁" },
    { id: "g9-1", grade: 9, term: "上學期", title: "國三上學期總複習", seed: 9101, unitIds: [14, 15, 16, 17], domainNote: "運動與力・能量・電磁" },
    { id: "g9-2", grade: 9, term: "下學期", title: "國三下學期總複習", seed: 9102, unitIds: [18, 19, 20, 21], domainNote: "電磁" }
  ].map(item => ({ ...item, scope: "term", questionCount: 12, minutes: 20 }));

  const chapterQuizzes = [
    { id: "g8-1-c1", grade: 8, book: "2上", term: "上學期", chapter: "CH1", title: "國二上第一單元：科學測量與密度", seed: 8111, unitIds: [1], domainNote: "物質（M）" },
    { id: "g8-1-c2", grade: 8, book: "2上", term: "上學期", chapter: "CH2", title: "國二上第二單元：物質的分類與分離", seed: 8112, unitIds: [2], domainNote: "物質（M）" },
    { id: "g8-1-c3", grade: 8, book: "2上", term: "上學期", chapter: "CH3", title: "國二上第三單元：水溶液與空氣", seed: 8113, unitIds: [3], domainNote: "物質（M）" },
    { id: "g8-1-c4", grade: 8, book: "2上", term: "上學期", chapter: "CH4", title: "國二上第四單元：波動與聲音", seed: 8114, unitIds: [4], domainNote: "波動（W）" },
    { id: "g8-1-c5", grade: 8, book: "2上", term: "上學期", chapter: "CH5", title: "國二上第五單元：光的反射與折射", seed: 8115, unitIds: [5], domainNote: "波動（W）" },
    { id: "g8-1-c6", grade: 8, book: "2上", term: "上學期", chapter: "CH6", title: "國二上第六單元：溫度與熱", seed: 8116, unitIds: [6], domainNote: "能量（E）" },
    { id: "g8-1-c7", grade: 8, book: "2上", term: "上學期", chapter: "CH7", title: "國二上第七單元：物質的基本結構", seed: 8117, unitIds: [7], domainNote: "物質（M）" },
    { id: "g8-2-c1", grade: 8, book: "2下", term: "下學期", chapter: "CH1", title: "國二下第一單元：化學反應與質量守恆", seed: 8121, unitIds: [8], domainNote: "反應（R）" },
    { id: "g8-2-c2", grade: 8, book: "2下", term: "下學期", chapter: "CH2", title: "國二下第二單元：氧化與還原反應", seed: 8122, unitIds: [9], domainNote: "反應（R）" },
    { id: "g8-2-c3", grade: 8, book: "2下", term: "下學期", chapter: "CH3", title: "國二下第三單元：電解質與酸鹼反應", seed: 8123, unitIds: [10], domainNote: "反應（R）" },
    { id: "g8-2-c4", grade: 8, book: "2下", term: "下學期", chapter: "CH4", title: "國二下第四單元：反應速率與化學平衡", seed: 8124, unitIds: [11], domainNote: "反應（R）" },
    { id: "g8-2-c5", grade: 8, book: "2下", term: "下學期", chapter: "CH5", title: "國二下第五單元：有機化合物", seed: 8125, unitIds: [12], domainNote: "反應（R）" },
    { id: "g8-2-c6", grade: 8, book: "2下", term: "下學期", chapter: "CH6", title: "國二下第六單元：力與壓力", seed: 8126, unitIds: [13], domainNote: "運動與力（K）" },
    { id: "g9-1-c1", grade: 9, book: "3上", term: "上學期", chapter: "CH1", title: "國三上第一單元：直線運動", seed: 9111, unitIds: [14], domainNote: "運動與力（K）" },
    { id: "g9-1-c2", grade: 9, book: "3上", term: "上學期", chapter: "CH2", title: "國三上第二單元：力與牛頓運動定律", seed: 9112, unitIds: [15], domainNote: "運動與力（K）" },
    { id: "g9-1-c3", grade: 9, book: "3上", term: "上學期", chapter: "CH3", title: "國三上第三單元：功與能", seed: 9113, unitIds: [16], domainNote: "能量（E）" },
    { id: "g9-1-c4", grade: 9, book: "3上", term: "上學期", chapter: "CH4", title: "國三上第四單元：靜電與電路", seed: 9114, unitIds: [17], domainNote: "電磁（C）" },
    { id: "g9-2-c1", grade: 9, book: "3下", term: "下學期", chapter: "CH1", title: "國三下第一單元：電流的熱效應與生活用電", seed: 9121, unitIds: [18], domainNote: "電磁（C）" },
    { id: "g9-2-c2", grade: 9, book: "3下", term: "下學期", chapter: "CH2", title: "國三下第二單元：電池與電流的化學效應", seed: 9122, unitIds: [19], domainNote: "電磁（C）" },
    { id: "g9-2-c3", grade: 9, book: "3下", term: "下學期", chapter: "CH3", title: "國三下第三單元：電流的磁效應", seed: 9123, unitIds: [20], domainNote: "電磁（C）" },
    { id: "g9-2-c4", grade: 9, book: "3下", term: "下學期", chapter: "CH4", title: "國三下第四單元：電磁感應與發電", seed: 9124, unitIds: [21], domainNote: "電磁（C）" }
  ].map(item => ({ ...item, scope: "chapter", questionCount: 8, minutes: 15, source: "依康軒／翰林／南一三版本共同的章節順序整理（非單一出版社逐字核對版本）" }));

  const quizCatalog = [...termQuizzes, ...chapterQuizzes];

  function generateQuiz(quizId, seedOverride) {
    const blueprint = quizCatalog.find(item => item.id === quizId);
    if (!blueprint) throw new Error("找不到指定的小考");
    const seed = seedOverride == null ? blueprint.seed : seedOverride;
    const r = rngFromSeed(seed);
    const targetCount = blueprint.questionCount || 10;
    const sequence = [...blueprint.unitIds];
    while (sequence.length < targetCount) sequence.push(blueprint.unitIds[(sequence.length - blueprint.unitIds.length) % blueprint.unitIds.length]);
    const orderedUnits = shuffled(r, sequence.slice(0, targetCount));
    const abilities = ["concept", "procedure", "application", "concept", "application", "procedure", "application", "analysis"];
    const used = new Set();
    const questions = orderedUnits.map((unitId, index) => {
      const level = index % 3 === 2 ? 2 : 1;
      const question = makeQuizUnitQuestion(r, unitId, level);
      for (let retry = 0; retry < 15; retry++) {
        const signature = [question.unitId, question.text, question.choices.join("|")].join("§");
        if (!used.has(signature)) { used.add(signature); break; }
        Object.assign(question, makeQuizUnitQuestion(r, unitId, level));
      }
      question.ability = abilities[index % abilities.length];
      question.officialOrder = index + 1;
      return question;
    });
    return { kind: "quiz", id: `QUIZ-${blueprint.id}-${seed}`, quizId: blueprint.id, seed, title: blueprint.title, grade: blueprint.grade, term: blueprint.term, chapter: blueprint.chapter, scope: blueprint.scope, minutes: blueprint.minutes || 15, questionCount: targetCount, officialCodes: blueprint.domainNote, unitIds: [...blueprint.unitIds], blueprint: "108-curriculum-grade-scope", questions };
  }

  function generate(seed, level = 2) {
    const r = rngFromSeed(`${seed}`.split("").reduce((a, c) => a * 31 + c.charCodeAt(0), 7) + level * 100003);
    const allUnits = shuffled(r, U.map(u => u.id));
    const extra = shuffled(r, U.map(u => u.id)).slice(0, 3);
    const sequence = [...allUnits, ...extra];
    const abilities = ["concept", "procedure", "application", "analysis"];
    const questions = sequence.map((unitId, index) => {
      const question = makeQuizUnitQuestion(r, unitId, level);
      question.ability = abilities[index % abilities.length];
      return question;
    });
    const finalQuestions = shuffled(r, questions);
    finalQuestions.forEach((question, index) => { question.officialOrder = index + 1; });
    return { id: `SCIENCE-${seed}-${level}`, seed: Number(seed), level, createdAt: new Date().toISOString(), blueprint: "original-practice-21-unit-coverage", questions: finalQuestions };
  }

  return { generate, generateQuiz, quizCatalog };
})();
