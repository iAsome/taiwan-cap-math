window.EXAM_ENGINE = (() => {
  const U = window.BIO_DATA.units;
  const quizTaxonomy = window.QUIZ_TAXONOMY || {};

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
    // 1. 細胞：生物體的基本單位
    (r) => {
      const cases = [
        ["同時具有細胞壁、液胞與葉綠體", "植物的葉肉細胞", ["人的口腔皮膜細胞", "人的紅血球", "細菌細胞"], "有細胞壁、液胞與葉綠體，是典型的植物細胞特徵。", "只有植物細胞才有葉綠體，動物細胞完全沒有。"],
        ["有細胞壁與液胞，但沒有明顯的葉綠體", "植物的根部細胞", ["人的口腔皮膜細胞", "人的紅血球", "動物的肌肉細胞"], "根部細胞不需要行光合作用，因此通常沒有葉綠體，但仍具有細胞壁與液胞。", "有細胞壁不代表一定有葉綠體，兩者是不同的構造。"],
        ["只有細胞膜、細胞質與細胞核，沒有細胞壁", "人的口腔皮膜細胞", ["植物的葉肉細胞", "植物的根部細胞", "細菌細胞"], "動物細胞沒有細胞壁、液胞與葉綠體，只有細胞膜、細胞質與細胞核等基本構造。", "沒有細胞壁通常代表這是動物細胞。"]
      ];
      const [scenario, correct, distractors, step2, tip] = pick(r, cases);
      return mc(r, 1, 1, `某細胞經染色觀察後發現：${scenario}。這個細胞最可能是下列何者？`, correct, distractors,
        ["先看細胞有沒有細胞壁，判斷是不是植物或動、植物以外的生物細胞。", step2],
        tip, "細胞壁、液胞、葉綠體要一起看，不能只看到一個特徵就下結論。");
    },
    // 2. 生物體的組成層次與六大營養素
    (r, level) => {
      const carb = ri(r, 20, 60 + level * 5), protein = ri(r, 10, 30 + level * 3), fat = ri(r, 5, 20 + level * 2);
      const total = carb * 4 + protein * 4 + fat * 9;
      return mc(r, 2, 2, `某餐點含醣類 ${carb} 公克、蛋白質 ${protein} 公克、脂質 ${fat} 公克（維生素、礦物質與水不計熱量）。此餐點提供約多少大卡的熱量？`, `${total} 大卡`,
        [`${carb + protein + fat} 大卡`, `${(carb + protein) * 4} 大卡`, `${carb * 9 + protein * 4 + fat * 4} 大卡`],
        [`醣類與蛋白質每公克約 4 大卡，脂質每公克約 9 大卡。`, `總熱量＝${carb}×4＋${protein}×4＋${fat}×9＝${total} 大卡。`],
        "只有醣類、蛋白質、脂質三種營養素才計算熱量。", "脂質的熱量係數是 9，不是和醣類、蛋白質一樣是 4，很容易算錯。");
    },
    // 3. 光合作用與植物的構造
    (r) => {
      const cases = [
        ["晴朗白天，植物整體表現為吸收二氧化碳、釋放氧氣", "光合作用速率大於呼吸作用速率", ["呼吸作用速率大於光合作用速率", "植物完全沒有進行呼吸作用", "光合作用與呼吸作用皆停止"]],
        ["夜晚沒有光線時，植物只表現為吸收氧氣、釋放二氧化碳", "只有呼吸作用在進行，光合作用停止", ["只有光合作用在進行，呼吸作用停止", "光合作用速率大於呼吸作用速率", "兩種作用都完全停止"]],
        ["把水生植物移到較暗處，觀察到的氣泡（氧氣）數量明顯減少", "光合作用速率因光線減弱而下降", ["呼吸作用速率因光線減弱而下降", "植物停止呼吸作用", "水生植物不會受光線影響"]]
      ];
      const [scenario, correct, distractors] = pick(r, cases);
      return mc(r, 3, 2, `${scenario}，最合理的解釋是下列何者？`, correct, distractors,
        [`光合作用只在有光時進行，呼吸作用則全天都在進行。`, `依題目描述的氣體變化方向，判斷是哪一種作用占優勢或正在發生變化。`],
        "先問自己：現在有沒有光？光合作用才會發生；呼吸作用不論有沒有光都在進行。", "不要以為晚上植物完全停止所有代謝作用，呼吸作用仍持續進行。");
    },
    // 4. 呼吸作用與能量的獲得
    (r) => {
      const cases = [
        ["發芽中的種子（沒有照光）", "會，因為所有活細胞都持續進行呼吸作用", ["不會，因為沒有光無法呼吸作用", "只有白天才會呼吸作用", "只有長出葉子後才會呼吸作用"]],
        ["生長在土壤中、完全照不到光的植物根部細胞", "會，因為所有活細胞都持續進行呼吸作用", ["不會，因為根部沒有葉綠體", "只有白天才會呼吸作用", "根部細胞不需要能量"]],
        ["動物的肌肉細胞", "會，因為所有活細胞都持續進行呼吸作用", ["不會，因為動物沒有葉綠體", "只有運動時才會呼吸作用", "只有白天才會呼吸作用"]]
      ];
      const [scenario, correct, distractors] = pick(r, cases);
      return mc(r, 4, 1, `「${scenario}」是否會進行呼吸作用（細胞呼吸）？`, correct, distractors,
        [`呼吸作用是所有活細胞獲得能量的方式，與有沒有光線、有沒有葉綠體無關。`, `因此不論是動物細胞或植物的哪個部位，只要是活細胞就會持續進行呼吸作用。`],
        "呼吸作用（細胞呼吸）全天候、所有活細胞都在進行。", "不要把「呼吸作用」和「光合作用」的進行條件搞混；只有光合作用才需要光與葉綠體。");
    },
    // 5. 生物的分類與生物多樣性
    (r) => {
      const cases = [
        ["界", "生物分類中範圍最大、彼此差異最大的階層", ["生物分類中最基本、範圍最小的階層", "介於門與綱之間的階層", "只用於植物、不用於動物的階層"]],
        ["種", "生物分類中最基本的階層，同種才能自然交配產下具生殖能力的後代", ["生物分類中範圍最大的階層", "只用於動物、不用於植物的階層", "介於屬與科之間、比屬更大的階層"]],
        ["屬", "分類階層中比科更小、比種更大的階層", ["生物分類中範圍最大的階層", "生物分類中最基本的階層", "只用於微生物的特殊階層"]]
      ];
      const [name, correct, distractors] = pick(r, cases);
      return mc(r, 5, 2, `生物分類階層「${name}」，下列敘述何者正確？`, correct, distractors,
        [`分類階層由大到小依序為：界、門、綱、目、科、屬、種。`, `依此順序判斷「${name}」在階層中的相對位置與意義。`],
        "界最大、種最小；越接近種，親緣關係越接近。", "不要把分類階層的順序記反，也不要以為某個階層只適用動物或植物其中一種。");
    },
    // 6. 消化系統與營養
    (r) => {
      const cases = [
        ["澱粉主要在口腔由哪一種酵素開始分解？", "唾液澱粉酶", ["胃蛋白酶", "膽汁", "胰島素"]],
        ["蛋白質主要在胃中由哪一種酵素、在什麼環境下分解？", "胃蛋白酶，在酸性環境下作用", ["唾液澱粉酶，在鹼性環境下作用", "膽汁，在中性環境下作用", "胰島素，在酸性環境下作用"]],
        ["消化道中，主要負責吸收養分的部位是？", "小腸（絨毛提供大表面積）", ["胃", "大腸", "食道"]],
        ["消化道中，主要負責吸收水分、形成糞便的部位是？", "大腸", ["小腸", "胃", "食道"]]
      ];
      const [q, correct, distractors] = pick(r, cases);
      return mc(r, 6, 2, q, correct, distractors,
        [`消化道依序為：口腔→食道→胃→小腸→大腸→肛門，各段負責不同的消化或吸收功能。`, `依此順序找出題目所問部位的主要功能。`],
        "小腸吸收養分、大腸吸收水分，是最容易混淆的一組。", "膽汁幫助脂質乳化，但膽汁本身不是消化酵素。");
    },
    // 7. 循環系統與血液
    (r) => {
      const cases = [
        ["負責把血液由心臟送往肺部進行氣體交換的血管，稱為？", "肺動脈（運送缺氧血）", ["肺靜脈（運送充氧血）", "主動脈（運送充氧血）", "大靜脈（運送缺氧血回心臟）"]],
        ["負責把充氧血由肺部送回心臟的血管，稱為？", "肺靜脈", ["肺動脈", "主動脈", "大靜脈"]],
        ["血液中負責運送氧氣的成分是？", "紅血球", ["白血球", "血小板", "血漿"]],
        ["血液中負責幫助凝血的成分是？", "血小板", ["紅血球", "白血球", "血漿"]]
      ];
      const [q, correct, distractors] = pick(r, cases);
      return mc(r, 7, 2, q, correct, distractors,
        [`動脈是離開心臟的血管、靜脈是回到心臟的血管，含氧量要另外判斷。`, `肺循環是唯一「動脈缺氧、靜脈充氧」的例外路徑。`],
        "判斷動、靜脈先看方向（離心或回心），不要只看含氧量。", "肺動脈、肺靜脈的含氧量剛好和一般認知相反，是常考的陷阱。");
    },
    // 8. 呼吸系統與氣體交換
    (r) => {
      const cases = [
        ["氣體交換（氧氣與二氧化碳的擴散）主要發生在呼吸系統的哪個構造？", "肺泡", ["氣管", "支氣管", "喉"]],
        ["空氣進入人體後，依序會先經過氣管，再到達哪個構造？", "支氣管", ["咽", "喉", "肺泡"]],
        ["吸氣時，橫膈的動作與胸腔容積的變化為何？", "橫膈收縮下降，胸腔容積變大", ["橫膈舒張上升，胸腔容積變小", "橫膈收縮下降，胸腔容積變小", "橫膈舒張上升，胸腔容積變大"]]
      ];
      const [q, correct, distractors] = pick(r, cases);
      return mc(r, 8, 2, q, correct, distractors,
        [`呼吸道順序：鼻腔→咽→喉→氣管→支氣管→肺泡；氣體交換發生在肺泡。`, `依此順序或原理判斷題目所問的內容。`],
        "肺泡壁薄、表面積大、微血管密布，是氣體交換效率高的關鍵。", "不要把「呼吸運動（吸氣吐氣）」和「氣體交換（擴散）」搞混。");
    },
    // 9. 排泄系統與體內恆定性
    (r) => {
      const cases = [
        ["血液中的葡萄糖經腎臟過濾後，正常情況下大部分會如何處理？", "被腎小管再吸收回血液", ["直接排入尿液排出", "留在腎臟中不再利用", "轉換成尿素排出"]],
        ["若某人尿液中持續檢驗出葡萄糖，最可能代表什麼？", "血糖調節或腎臟再吸收功能出現異常", ["這是完全正常的現象，人人都有", "代表這個人喝水喝太多", "代表腎臟過濾功能太強"]],
        ["含氮廢物（如尿素）主要是由哪個器官負責過濾排出？", "腎臟", ["肝臟", "肺臟", "皮膚"]]
      ];
      const [q, correct, distractors] = pick(r, cases);
      return mc(r, 9, 2, q, correct, distractors,
        [`腎臟先把血液中的水分、葡萄糖、離子與廢物濾出，再依身體需要把有用物質（如葡萄糖）再吸收回血液。`, `依此機制判斷題目所問的情境。`],
        "正常尿液幾乎不含葡萄糖，這是判斷再吸收是否正常的重要線索。", "不要把排汗誤認為身體主要的排泄途徑，流汗主要功能是調節體溫。");
    },
    // 10. 神經系統、感覺與內分泌
    (r) => {
      const cases = [
        ["手不小心碰到熱源，還沒感覺到痛就已經縮手，這是哪一種反應？", "反射（由脊髓直接控制的快速反應）", ["需要大腦判斷後才做出的反應", "內分泌系統調節的反應", "完全不經過神經系統的反應"]],
        ["身體血糖過高時，由哪一種激素負責降低血糖？", "胰島素", ["腎上腺素", "生長激素", "甲狀腺素"]],
        ["遇到緊急狀況時，能使心跳加快、身體迅速做出反應的激素是？", "腎上腺素", ["胰島素", "胰高血糖素", "褪黑激素"]]
      ];
      const [q, correct, distractors] = pick(r, cases);
      return mc(r, 10, 2, q, correct, distractors,
        [`神經系統反應快、作用時間短；內分泌系統反應慢、作用時間長。`, `依此區分題目描述的情境屬於哪一個系統的作用。`],
        "反射仍會經過脊髓（神經中樞），只是不需要等大腦下達指令，速度因此較快。", "反射不是「完全不經過神經系統」，脊髓本身就是神經系統的一部分。");
    },
    // 11. 細胞分裂與生殖方式
    (r) => {
      const body = pick(r, [46, 24, 20, 8]);
      const asksGamete = r() > 0.5;
      if (asksGamete) {
        return mc(r, 11, 2, `已知某生物體細胞的染色體數目為 ${body} 條，其生殖細胞（精細胞或卵細胞）的染色體數目應為多少？`, `${body / 2} 條`,
          [`${body} 條`, `${body * 2} 條`, `${body / 2 + 1} 條`],
          [`生殖細胞的染色體數目是體細胞的一半。`, `所以生殖細胞染色體數＝${body}÷2＝${body / 2} 條。`],
          "生殖細胞減半，是為了讓受精後子代恢復與親代相同的染色體數目。", "不要把體細胞與生殖細胞的染色體數目搞混。");
      }
      const gamete = body / 2;
      return mc(r, 11, 2, `已知某生物的精細胞染色體數目為 ${gamete} 條，受精卵（精細胞＋卵細胞結合）的染色體數目應為多少？`, `${body} 條`,
        [`${gamete} 條`, `${gamete * 3} 條`, `${gamete / 2} 條`],
        [`精細胞與卵細胞的染色體數目相同，各為體細胞的一半。`, `受精卵染色體數＝精細胞＋卵細胞＝${gamete}＋${gamete}＝${body} 條，與體細胞相同。`],
        "受精卵的染色體數目會恢復成與親代體細胞相同。", "不要以為受精卵的染色體數目只等於其中一個生殖細胞的數目。");
    },
    // 12. 遺傳與孟德爾定律
    (r) => {
      const traits = pick(r, [["高莖", "矮莖"], ["圓形種子", "皺形種子"], ["紫花", "白花"]]);
      const [dominant, recessive] = traits;
      const cross = pick(r, [
        { parents: "Aa × Aa", ratioText: "3：1（顯性：隱性）", distractors: ["1：1", "1：2：1", "全部為顯性"] },
        { parents: "AA × aa", ratioText: "全部為顯性性狀（皆為 Aa）", distractors: ["3：1", "1：1", "全部為隱性性狀"] }
      ]);
      return mc(r, 12, 3, `已知${dominant}對${recessive}為完全顯性。若親代基因型為 ${cross.parents}，則子代的表現型比例（或結果）最接近下列何者？`, cross.ratioText, cross.distractors,
        [`先寫出親代的生殖細胞組合，再用棋盤格列出所有子代基因型。`, `依基因型判斷表現型：只要含有一個顯性基因就表現顯性性狀。`],
        "Aa×Aa 的子代基因型比是 1:2:1，表現型比是 3:1，是最常考的組合。", "不要把基因型比（1:2:1）和表現型比（3:1）搞混。");
    },
    // 13. 演化的證據與機制
    (r) => {
      const cases = [
        ["某地區的老鼠原本毛色深淺不一，森林大火後地表變黑，一段時間後族群中深色老鼠的比例明顯上升", "深色老鼠原本就存在，火災後較不易被天敵發現，存活與繁殖的比例較高", ["老鼠因為環境變黑而主動把自己的毛色變深", "深色是這場火災之後才突然出現的新性狀", "這與天擇無關，只是隨機巧合"]],
        ["長期使用同一種抗生素後，某種細菌的抗藥性比例越來越高", "抗藥性細菌原本就存在於族群中，抗生素篩選後其比例上升", ["細菌接觸抗生素後才學會產生抗藥性", "抗生素會讓所有細菌都變得有抗藥性", "這與天擇無關，只是隨機巧合"]],
        ["人的手臂與蝙蝠的翅膀骨骼排列方式十分相似，但外觀功能不同", "兩者是同源構造，支持有共同的祖先", ["兩者是完全無關的構造，只是外觀巧合相似", "這代表蝙蝠是由人演化而來", "這代表人是由蝙蝠演化而來"]]
      ];
      const [scenario, correct, distractors] = pick(r, cases);
      return mc(r, 13, 3, `「${scenario}」，最合理的解釋是下列何者？`, correct, distractors,
        [`天擇作用在族群中原本就存在的變異上，環境篩選後有利變異的比例會上升。`, `依此原則判斷題目描述的現象是否符合天擇機制，或屬於哪一種演化證據。`],
        "天擇不是個體主動改變自己，而是族群中原本存在的變異被環境篩選。", "不要以為天擇是生物「為了適應環境」而主動產生新的性狀。");
    },
    // 14. 生態系的組成與能量流動
    (r) => {
      const producerEnergy = pick(r, [100000, 200000, 500000, 1000000]);
      const askLevel = pick(r, [2, 3]);
      const level2 = producerEnergy * 0.1;
      const level3 = level2 * 0.1;
      const answer = askLevel === 2 ? level2 : level3;
      const wrongDouble = askLevel === 2 ? level2 * 2 : level3 * 2;
      return mc(r, 14, 3, `某生態系中，生產者所固定的能量約為 ${producerEnergy.toLocaleString("zh-TW")} 大卡。若能量沿食物鏈每階層只傳遞約 10% 給下一階層，則${askLevel === 2 ? "初級消費者（第二營養階層）" : "次級消費者（第三營養階層）"}可利用的能量約為多少大卡？`,
        `${answer.toLocaleString("zh-TW")} 大卡`,
        [`${wrongDouble.toLocaleString("zh-TW")} 大卡`, `${(producerEnergy * 0.5).toLocaleString("zh-TW")} 大卡`, `${producerEnergy.toLocaleString("zh-TW")} 大卡`],
        [`能量每往上一個營養階層，大約只剩前一階層的 10%。`, askLevel === 2 ? `初級消費者能量＝生產者×10%＝${producerEnergy.toLocaleString("zh-TW")}×0.1＝${level2.toLocaleString("zh-TW")}。` : `次級消費者能量＝生產者×10%×10%＝${producerEnergy.toLocaleString("zh-TW")}×0.01＝${level3.toLocaleString("zh-TW")}。`],
        "每多一個營養階層，就再乘一次 10%（0.1）。", "不要忘記次級消費者要連續乘兩次 10%，不是只乘一次。");
    },
    // 15. 生物間的交互作用與環境保育
    (r) => {
      const cases = [
        ["蜜蜂採花蜜的同時幫助植物傳粉", "互利共生（雙方皆得利）", ["競爭（雙方皆受害）", "掠食（一方得利、一方受害）", "彼此沒有任何影響"]],
        ["兩種鳥類爭奪同一片森林中有限的築巢地點與食物", "競爭（雙方皆可能受害）", ["互利共生（雙方皆得利）", "掠食（一方得利、一方受害）", "彼此沒有任何影響"]],
        ["蛔蟲寄生在人體腸道中，吸收人體的養分", "寄生（寄生者得利、宿主受害）", ["互利共生（雙方皆得利）", "競爭（雙方皆受害）", "彼此沒有任何影響"]],
        ["狐狸捕食野兔作為食物", "掠食（掠食者得利、被掠食者受害）", ["互利共生（雙方皆得利）", "競爭（雙方皆受害）", "寄生（寄生者得利、宿主受害）"]]
      ];
      const [scenario, correct, distractors] = pick(r, cases);
      return mc(r, 15, 2, `「${scenario}」，這屬於哪一種生物間的交互作用？`, correct, distractors,
        [`先判斷互動的雙方各自是得利、受害還是沒有影響。`, `依此組合對照競爭、掠食、寄生或互利共生的定義。`],
        "先分別判斷「這一方」與「那一方」各自得利或受害，再組合成關係類型。", "不要只看其中一方的結果就下結論，交互作用要同時看雙方。");
    }
  ];

  function makeQuizUnitQuestion(r, unitId, level) {
    if (unitId >= 1 && unitId <= 15) return generators[unitId - 1](r, level);
    throw new Error(`小考單元 ${unitId} 尚未建立出題器`);
  }

  const termQuizzes = [
    { id: "g7-all", grade: 7, term: "總複習", title: "國一生物總複習", seed: 7100, unitIds: [1, 2, 3, 4, 5], domainNote: "生物體的構造與功能・生命的延續與生物多樣性" },
    { id: "g8-all", grade: 8, term: "總複習", title: "國二生物總複習", seed: 8100, unitIds: [6, 7, 8, 9, 10], domainNote: "生物體的構造與功能（人體八大系統）" },
    { id: "g9-all", grade: 9, term: "總複習", title: "國三生物總複習", seed: 9100, unitIds: [11, 12, 13, 14, 15], domainNote: "生命的延續與生物多樣性・生態系中的生物與環境" }
  ].map(item => ({ ...item, scope: "term", questionCount: 12, minutes: 20 }));

  const chapterQuizzes = [
    { id: "g7-c1", grade: 7, chapter: "CH1", title: "國一第一單元：細胞：生物體的基本單位", seed: 7111, unitIds: [1], domainNote: "生物體的構造與功能（D）" },
    { id: "g7-c2", grade: 7, chapter: "CH2", title: "國一第二單元：生物體的組成層次與六大營養素", seed: 7112, unitIds: [2], domainNote: "生物體的構造與功能（D）" },
    { id: "g7-c3", grade: 7, chapter: "CH3", title: "國一第三單元：光合作用與植物的構造", seed: 7113, unitIds: [3], domainNote: "生物體的構造與功能（D）" },
    { id: "g7-c4", grade: 7, chapter: "CH4", title: "國一第四單元：呼吸作用與能量的獲得", seed: 7114, unitIds: [4], domainNote: "生物體的構造與功能（D）" },
    { id: "g7-c5", grade: 7, chapter: "CH5", title: "國一第五單元：生物的分類與生物多樣性", seed: 7115, unitIds: [5], domainNote: "生命的延續與生物多樣性（E）" },
    { id: "g8-c1", grade: 8, chapter: "CH1", title: "國二第一單元：消化系統與營養", seed: 8111, unitIds: [6], domainNote: "生物體的構造與功能（D）" },
    { id: "g8-c2", grade: 8, chapter: "CH2", title: "國二第二單元：循環系統與血液", seed: 8112, unitIds: [7], domainNote: "生物體的構造與功能（D）" },
    { id: "g8-c3", grade: 8, chapter: "CH3", title: "國二第三單元：呼吸系統與氣體交換", seed: 8113, unitIds: [8], domainNote: "生物體的構造與功能（D）" },
    { id: "g8-c4", grade: 8, chapter: "CH4", title: "國二第四單元：排泄系統與體內恆定性", seed: 8114, unitIds: [9], domainNote: "生物體的構造與功能（D）" },
    { id: "g8-c5", grade: 8, chapter: "CH5", title: "國二第五單元：神經系統、感覺與內分泌", seed: 8115, unitIds: [10], domainNote: "生物體的構造與功能（D）" },
    { id: "g9-c1", grade: 9, chapter: "CH1", title: "國三第一單元：細胞分裂與生殖方式", seed: 9111, unitIds: [11], domainNote: "生命的延續與生物多樣性（E）" },
    { id: "g9-c2", grade: 9, chapter: "CH2", title: "國三第二單元：遺傳與孟德爾定律", seed: 9112, unitIds: [12], domainNote: "生命的延續與生物多樣性（E）" },
    { id: "g9-c3", grade: 9, chapter: "CH3", title: "國三第三單元：演化的證據與機制", seed: 9113, unitIds: [13], domainNote: "生命的延續與生物多樣性（E）" },
    { id: "g9-c4", grade: 9, chapter: "CH4", title: "國三第四單元：生態系的組成與能量流動", seed: 9114, unitIds: [14], domainNote: "生態系中的生物與環境（F）" },
    { id: "g9-c5", grade: 9, chapter: "CH5", title: "國三第五單元：生物間的交互作用與環境保育", seed: 9115, unitIds: [15], domainNote: "生態系中的生物與環境（F）" }
  ].map(item => {
    const topicCount = (window.QUIZ_TAXONOMY?.[item.id]?.sections || []).reduce((sum, section) => sum + section.topics.length, 0);
    return { ...item, scope: "chapter", questionCount: topicCount || 8, minutes: 15, source: "依常見國中生物教學順序整理（非單一出版社逐字核對版本，各版本實際單元順序可能不同）" };
  });

  const quizCatalog = [...termQuizzes, ...chapterQuizzes];

  const taxonomyTopics = quizId => (quizTaxonomy[quizId]?.sections || []).flatMap(section => section.topics.map(topic => ({ section: section.title, ...topic })));

  function generateTaxonomyQuiz(blueprint, r, seed) {
    const topics = shuffled(r, taxonomyTopics(blueprint.id));
    const abilityBySection = ["concept", "procedure", "application"];
    const questions = topics.map((topic, index) => {
      const question = topic.template({ r, ri, pick, mc });
      question.ability = abilityBySection[index % abilityBySection.length];
      question.taxonomySection = topic.section;
      question.taxonomyTopic = topic.title;
      question.officialOrder = index + 1;
      return question;
    });
    return { kind: "quiz", id: `QUIZ-${blueprint.id}-${seed}`, quizId: blueprint.id, seed, title: blueprint.title, grade: blueprint.grade, term: blueprint.term, chapter: blueprint.chapter, scope: blueprint.scope, minutes: blueprint.minutes || 15, questionCount: questions.length, officialCodes: blueprint.domainNote, unitIds: [...blueprint.unitIds], blueprint: "taxonomy-user-supplied", taxonomySource: quizTaxonomy[blueprint.id]?.source, questions };
  }

  function generateQuiz(quizId, seedOverride) {
    const blueprint = quizCatalog.find(item => item.id === quizId);
    if (!blueprint) throw new Error("找不到指定的小考");
    const seed = seedOverride == null ? blueprint.seed : seedOverride;
    const r = rngFromSeed(seed);
    if (quizTaxonomy[blueprint.id]) return generateTaxonomyQuiz(blueprint, r, seed);
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
    const extra = shuffled(r, U.map(u => u.id)).slice(0, 15);
    const sequence = [...allUnits, ...extra];
    const abilities = ["concept", "procedure", "application", "analysis"];
    const questions = sequence.map((unitId, index) => {
      const question = makeQuizUnitQuestion(r, unitId, level);
      question.ability = abilities[index % abilities.length];
      return question;
    });
    const finalQuestions = shuffled(r, questions);
    finalQuestions.forEach((question, index) => { question.officialOrder = index + 1; });
    return { id: `BIO-${seed}-${level}`, seed: Number(seed), level, createdAt: new Date().toISOString(), blueprint: "original-practice-15-unit-coverage", questions: finalQuestions };
  }

  return { generate, generateQuiz, quizCatalog };
})();
