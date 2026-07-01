// ponytail: 國文題目無法像數學一樣用數值參數隨機出題，改採「每單元一組已審核的題目
// 變體池」，出題時以種子亂數挑選變體＋洗牌選項順序，同一種子仍可重現同一份考卷。
// 每單元目前備有 2～3 個變體；日後可持續擴充變體池，不影響既有出題邏輯。
window.EXAM_ENGINE = (() => {
  const U = window.CHINESE_DATA.units;

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
    while (values.length < 4) { const fallback = `${correct}（${bump++}）`; if (!values.includes(fallback)) values.push(fallback); }
    const choices = shuffled(r, values.slice(0, 4));
    return { type: "mc", unitId, difficulty, text, choices, answer: choices.indexOf(String(correct)), steps, tip, trap, concept: concept || U[unitId - 1].summary, formula: U[unitId - 1].formula };
  }
  function bank(r, unitId, difficulty, variants) {
    const v = pick(r, variants);
    return mc(r, unitId, difficulty, v.text, v.correct, v.distractors, v.steps, v.tip, v.trap, v.concept);
  }

  // 每一項對應 CHINESE_DATA.units 的 id（陣列索引 0 對應 unitId 1，以此類推）。
  const generators = [
    r => bank(r, 1, 1, [
      { text: "「這個方案還算可行」與「東西還沒還給他」，兩個「還」字讀音是否相同？", correct: "不同：前者讀ㄏㄞˊ，後者讀ㄏㄨㄢˊ", distractors: ["相同，皆讀ㄏㄞˊ", "相同，皆讀ㄏㄨㄢˊ", "不同：前者讀ㄏㄨㄢˊ，後者讀ㄏㄞˊ"], steps: ["前句「還」作副詞，表「尚、仍」之意，讀ㄏㄞˊ。", "後句「還」作動詞，表「歸還」之意，讀ㄏㄨㄢˊ。"], tip: "先看詞性再定讀音：副詞多讀ㄏㄞˊ，動詞歸還義讀ㄏㄨㄢˊ。", trap: "不要只憑同一個字形就假設讀音相同。" },
      { text: "「他的態度很『相』左」與「相片拍得很好看」，兩個「相」字讀音是否相同？", correct: "不同：前者讀ㄒㄧㄤ，後者讀ㄒㄧㄤˋ", distractors: ["相同，皆讀ㄒㄧㄤ", "相同，皆讀ㄒㄧㄤˋ", "不同：前者讀ㄒㄧㄤˋ，後者讀ㄒㄧㄤ"], steps: ["「相左」的「相」表「互相」，是副詞，讀ㄒㄧㄤ。", "「相片」的「相」是名詞（外貌、影像），讀ㄒㄧㄤˋ。"], tip: "副詞義的「相」多讀ㄒㄧㄤ，名詞義（外貌、相片）多讀ㄒㄧㄤˋ。", trap: "「相」是常考破音字，不能只憑印象猜讀音。" },
      { text: "下列文句「」中的字，何者讀音與其他三者不同？", correct: "他「削」瘦的臉龐令人心疼", distractors: ["用刀「削」鉛筆", "「削」價競爭，人人有份", "「削」足適履，本末倒置"], steps: ["「削瘦」的「削」讀ㄒㄩㄝˋ，形容清瘦。", "其餘三者「削鉛筆、削價、削足適履」的「削」都讀ㄒㄩㄝ。"], tip: "「削」在動詞用法（削鉛筆、削價）多讀ㄒㄩㄝ，形容詞「削瘦」讀ㄒㄩㄝˋ。", trap: "同一個字換了詞性，讀音可能完全不同。" }
    ]),
    r => bank(r, 2, 1, [
      { text: "「再接『再厲』」寫成「再接『再励』」，這是哪一種錯誤？正確寫法為何？", correct: "別字；應寫作「厲」", distractors: ["錯字；應寫作「利」", "沒有錯誤，兩者皆可", "別字；應寫作「勵」"], steps: ["「厲」本義與磨刀石、奮發精神有關。", "「励」不是規範字形，屬於別字，正確應寫作「厲」。"], tip: "遇到形近或同音替代字，先想這個詞的原始出處與意義。", trap: "「勵」（鼓勵）和「厲」（厲害、磨厲）字形相近但意義不同，此成語固定用「厲」。" },
      { text: "下列文句「」中的字，何者使用正確？", correct: "他做事「一絲不苟」，深受主管信賴", distractors: ["他「短小精悍」的身材，讓人以貌取人", "遇到困難，他總是「再接再励」", "這個計畫「一鼓做氣」，順利完成"], steps: ["逐一檢查各選項的成語用字是否為規範字形。", "「一鼓作氣」不是「一鼓做氣」；「再接再厲」不是「再接再励」。"], tip: "四字成語是別字最常出現的地方，平時要留意易錯成語的正確字形。", trap: "同音或形近字替換是別字最常見的來源，不能只憑讀音判斷。" }
    ]),
    r => bank(r, 3, 2, [
      { text: "「林」與「刃」分別屬於六書中的哪一種造字原則？", correct: "會意、指事", distractors: ["象形、指事", "會意、象形", "指事、會意"], steps: ["「林」由兩個「木」組成，合併字義表示樹木眾多，屬於會意。", "「刃」在「刀」的刀鋒處加一點指出重點所在，屬於指事。"], tip: "會意字要能拆成兩個以上「有意義」的部件；指事字常是在象形字上加符號標示重點或位置。", trap: "不要把「刃」誤認為象形字，它是在既有象形字上加符號，屬於指事。" },
      { text: "下列文字，何者是由兩個以上有意義的部件組合而成，屬於會意字？", correct: "休（人＋木）", distractors: ["日（象形）", "上（指事）", "山（象形）"], steps: ["「休」由「人」與「木」組成，表示人靠在樹旁休息，兩個部件皆有意義，屬於會意。", "「日、山」是描摹實物外形的象形字；「上」是標示位置的指事字。"], tip: "判斷會意字時，先拆部件，確認每個部件本身都能唸出、講出意義。", trap: "象形字通常只由一個部件構成，不能拆成兩個有意義的字。" }
    ]),
    r => bank(r, 4, 2, [
      { text: "「河」字的形符與聲符分別是什麼？此字屬於六書中的哪一類？", correct: "形符「氵」、聲符「可」；形聲字", distractors: ["形符「可」、聲符「氵」；形聲字", "形符「氵」、聲符「可」；會意字", "形符「河」、聲符「可」；轉注字"], steps: ["「氵」（水）提示意義類別與水有關，是形符。", "「可」提示讀音，是聲符；形符加聲符即為形聲字。"], tip: "國字中形聲字數量最多，遇到「一半表義、一半表音」的字，優先往形聲方向判斷。", trap: "不要把形符和聲符的功能弄反：提示意義的是形符，提示讀音的是聲符。" },
      { text: "「北」字本義為「背對」，後借用來表示方位。這種用字方式屬於六書中的哪一類？", correct: "假借", distractors: ["轉注", "形聲", "會意"], steps: ["假借是借用同音字表示原本沒有專字的詞，字形本身不再更動。", "「北」借用其本義以外的方位意義，即為假借的典型例子。"], tip: "假借是「用字」方法（借用既有字表示新詞），不是「造字」方法，這點是判斷關鍵。", trap: "轉注是同部首、意義相通的字互相注解（如考、老），與假借不同，不要混淆。" }
    ]),
    r => bank(r, 5, 1, [
      { text: "「河」字的部首是什麼？和字義有什麼關聯？", correct: "部首是「氵」，與水有關", distractors: ["部首是「可」，與聲音有關", "部首是「氵」，與聲音有關", "部首是「可」，與水有關"], steps: ["「氵」是「水」的部首變形，出現在字的左邊。", "部首多半提示字義類別，「氵」提示與水有關的意義。"], tip: "部首不一定在字的左邊，但多數常見形聲字的形符（部首）確實常在左側。", trap: "不要把提示讀音的聲旁誤認為部首。" },
      { text: "下列何者的部首不在字的左邊？", correct: "「想」的部首「心」在字的下方", distractors: ["「河」的部首「氵」在字的左邊", "「打」的部首「扌」在字的左邊", "「清」的部首「氵」在字的左邊"], steps: ["「想」字部首為「心」，位於字形下方，與情緒、心理有關。", "其餘三者的部首「氵、扌」皆位於字的左側。"], tip: "部首位置不固定，「見、頁、鳥、心」等部首常出現在字的右邊或下方。", trap: "不要以為部首一定在左邊，需視每個字的實際結構判斷。" }
    ]),
    r => bank(r, 6, 1, [
      { text: "「這場演出讓觀眾如癡如醉」中的「如癡如醉」最可能表達什麼？", correct: "形容觀眾深受吸引、非常投入", distractors: ["形容觀眾感到疲倦想睡", "形容觀眾覺得表演枯燥乏味", "形容觀眾對表演感到困惑"], steps: ["從上下文「演出讓觀眾……」判斷，這是形容觀眾對表演的正面反應。", "「如癡如醉」是比喻極度沉迷、著迷的狀態。"], tip: "詞義推斷要回到上下文，看前後句提供的情緒線索是正面還是負面。", trap: "不要只看字面「癡、醉」聯想到負面意義，需依語境判斷。" },
      { text: "「他做事一絲不苟，連最小的細節都反覆檢查」，「一絲不苟」在此句中最可能表示什麼？", correct: "做事非常仔細、不馬虎", distractors: ["做事速度極快", "做事缺乏計畫", "做事容易分心"], steps: ["後半句「連最小的細節都反覆檢查」提供了例證線索。", "由此可推斷「一絲不苟」表示做事仔細嚴謹、不馬虎。"], tip: "利用「例證線索」——句子中的具體描述，往往能直接反推詞語的意思。", trap: "不要只憑「絲」聯想到與紡織相關的字面意義。" }
    ]),
    r => bank(r, 7, 1, [
      { text: "「固執」與「堅持」都表示不輕易改變想法，兩者在感情色彩上有何差異？", correct: "「固執」偏貶義，「堅持」偏中性或褒義", distractors: ["「固執」偏褒義，「堅持」偏貶義", "兩者感情色彩完全相同", "兩者皆為貶義詞"], steps: ["「固執」通常形容不知變通、聽不進他人意見，帶有負面評價。", "「堅持」則多形容有原則、不輕言放棄，較為中性或正面。"], tip: "近義詞辨析可比較「感情色彩」：是否帶有褒貶意味。", trap: "意思相近的詞不代表可以隨意互換，需留意語氣輕重與褒貶差異。" },
      { text: "「多」的反義詞用於「數量多」時是「少」，那麼「多數」一詞最恰當的反義詞是下列何者？", correct: "少數", distractors: ["寡數", "無數", "缺數"], steps: ["反義詞需以完整詞語配對，而非只看單字。", "「多數」對應的慣用反義詞是「少數」，並非另造「寡數」。"], tip: "反義詞配對要用「完整詞語」比對，同一單字在不同詞語中的反義詞可能不同。", trap: "不要只把單字「多」的反義詞「少」直接套進「多數」變成不存在的詞。" }
    ]),
    r => bank(r, 8, 2, [
      { text: "「這場比賽的成績差強人意」是稱讚還是批評？", correct: "偏正面評價，表示大致令人滿意", distractors: ["嚴厲批評，表示成績很差", "表示成績普通到令人生氣", "無法判斷，語意中性"], steps: ["「差強人意」原意是「大致還能使人滿意」。", "許多人望文生義誤以為是負面用語，實際上偏正面評價。"], tip: "遇到看似負面但實際偏正面（或相反）的成語，先確認原意再判斷語氣。", trap: "「差」字容易讓人誤解整個成語帶有負面意味，這是常見的望文生義陷阱。" },
      { text: "下列成語的使用，何者恰當？", correct: "他博覽群書，對各種典故都能「如數家珍」", distractors: ["他經驗豐富，做起這件事「首當其衝」", "這場火災造成「差強人意」的損失", "這篇報告內容「不刊之論」，錯誤百出"], steps: ["「如數家珍」形容對事物熟悉，能詳細列舉，用於博覽群書恰當。", "「首當其衝」指最先受到衝擊，不能用來形容「經驗豐富」；「不刊之論」指不可更改的定論，不能用於「錯誤百出」。"], tip: "成語使用要核對適用對象與實際定義，不能只看字面感覺合不合適。", trap: "「首當其衝」常被誤用為「率先行動」，其實是指最先受到衝擊或災難。" }
    ]),
    r => bank(r, 9, 1, [
      { text: "「一□畫」、「一□詩」，空格內最適合分別填入下列何組量詞？", correct: "幅、首", distractors: ["張、篇", "幅、篇", "張、首"], steps: ["「畫」是平面圖畫，慣用量詞為「幅」。", "「詩」是詩詞作品，慣用量詞為「首」。"], tip: "量詞需依對象的性質與慣用搭配判斷，平時可分類記憶常見量詞。", trap: "「張」也可用於平面物（如一張紙），但「畫」的慣用量詞是「幅」而非「張」。" },
      { text: "下列文句，何者疊詞使用最為恰當？", correct: "小溪的水緩緩流過，波光粼粼", distractors: ["他匆匆匆忙忙地跑進教室", "天空湛藍藍，看起來格外舒服", "這件事情急急急地需要處理"], steps: ["「波光粼粼」是固定且自然的疊詞用法，形容水波反光的樣子。", "其餘選項疊字重複不合常規（如「匆匆匆忙忙」、「急急急」皆不通順）。"], tip: "疊詞不是隨意重複字詞就能成立，需符合固定或可疊用的詞語類型。", trap: "並非所有詞語都能任意疊字，過度堆疊反而不合語法。" }
    ]),
    r => bank(r, 10, 3, [
      { text: "「吾欲之南海」中的「之」是什麼詞性、意義？", correct: "動詞，意為「往、到」", distractors: ["代詞，指代前文事物", "助詞，相當於「的」", "連詞，表順接關係"], steps: ["此句「之」後接地點「南海」，前面「欲」是動詞「想要」。", "「之」在此作動詞，意為「往、到」，全句意為「我想要前往南海」。"], tip: "判斷「之」的詞性，先看它前後接的是名詞、動詞還是句子。", trap: "「之」最常見的用法是代詞或助詞，但接地點名詞時常作動詞，不能一概而論。" },
      { text: "「而」字在「學而時習之」與「人不知而不慍」兩句中的用法，下列敘述何者最恰當？", correct: "前者表順接（並且），後者表轉折（卻）", distractors: ["兩者皆表順接關係", "兩者皆表轉折關係", "前者表轉折，後者表順接"], steps: ["「學而時習之」的「而」連接「學」與「時習之」，語意上是承接關係，表順接。", "「人不知而不慍」的「而」連接「不知」與「不慍」，語意上是轉折（別人不了解，但我卻不生氣）。"], tip: "「而」的功能要依前後兩個分句的邏輯關係判斷：順接、轉折或修飾。", trap: "不能只背「而」的單一意思，要依上下文邏輯關係逐句判斷。" }
    ]),
    r => bank(r, 11, 1, [
      { text: "「他喜歡打籃球、游泳和跑步」這句話的標點使用是否恰當？", correct: "恰當，並列詞語間用頓號分隔", distractors: ["不恰當，應全部改為逗號", "不恰當，「和」前面也要加頓號", "不恰當，應改用分號分隔"], steps: ["「籃球、游泳、跑步」是三個並列的名詞，之間應以頓號分隔。", "最後兩項以「和」連接時，「和」前面的頓號可以省略，用法恰當。"], tip: "頓號專用於並列的詞語或短語之間，不用於完整分句之間。", trap: "不要把頓號和逗號的功能混淆：逗號是句中語氣停頓，頓號是並列詞語分隔。" },
      { text: "下列文句，何者標點符號使用最恰當？", correct: "他熱愛閱讀；他的弟弟則喜歡運動", distractors: ["他熱愛閱讀，他的弟弟、則喜歡運動", "他熱愛閱讀、他的弟弟則喜歡運動", "他熱愛閱讀；他的弟弟、則喜歡運動"], steps: ["「他熱愛閱讀」與「他的弟弟則喜歡運動」是兩個能各自獨立成句、意義相關的分句，適合用分號連接。", "頓號只能用於並列詞語之間，不能用在完整分句之間。"], tip: "分號常用於連接意義相關、地位相當、可各自成句的分句。", trap: "頓號誤用在完整分句之間是常見錯誤，需特別留意句子是否已經是完整的獨立分句。" }
    ]),
    r => bank(r, 12, 2, [
      { text: "「他慢慢地走進教室」中，「慢慢地」擔任什麼句子成分？", correct: "狀語，修飾動詞「走」", distractors: ["定語，修飾名詞「教室」", "主詞", "賓語"], steps: ["「慢慢地」說明「走」這個動作進行的方式，修飾動詞。", "修飾動詞、形容詞的成分稱為狀語，常見「地」字結構。"], tip: "「地」字結構多為狀語（修飾動詞、形容詞），「的」字結構多為定語（修飾名詞）。", trap: "不要把狀語誤認為定語，關鍵在於它修飾的是動詞還是名詞。" },
      { text: "「美麗的花園」與「這座花園很美麗」兩句中，「美麗」的詞性與句子成分，下列敘述何者正確？", correct: "詞性皆為形容詞；前者作定語，後者作謂語", distractors: ["詞性皆為形容詞；前者作謂語，後者作定語", "前者是形容詞，後者是動詞；皆作謂語", "詞性皆為名詞；前者作定語，後者作主詞"], steps: ["「美麗」在兩句中詞性皆為形容詞，詞性本身不因位置而改變。", "「美麗的花園」中它修飾名詞「花園」，是定語；「這座花園很美麗」中它是描述主詞狀態的謂語。"], tip: "詞性是詞語固定的類別，句子成分則依它在句中的位置與功能而定，兩者要分開判斷。", trap: "不要以為詞性會隨句子成分改變，形容詞不論作定語或謂語，詞性都不變。" }
    ]),
    r => bank(r, 13, 2, [
      { text: "「經過大家的努力，使班級榮獲整潔比賽第一名」這句話的問題在哪裡？", correct: "成分殘缺，缺少主詞", distractors: ["用詞贅餘，語意重複", "語序顛倒，修飾語位置錯誤", "邏輯矛盾，前後陳述衝突"], steps: ["刪去修飾成分後，句子主幹是「經過……，使……」，「經過」是介詞短語，不能作主詞。", "應刪去「經過」或「使」其中一個，如：「大家的努力使班級榮獲整潔比賽第一名」。"], tip: "遇到「使、讓、令」前面接「經過、由於」開頭的句子，先檢查是否缺少真正的主詞。", trap: "介詞短語（經過……、由於……）不能單獨作句子的主詞，這是常見的病句類型。" },
      { text: "下列文句，何者沒有語病？", correct: "他把所有的作業都寫完了", distractors: ["這件事大約估計要花三天時間", "這場比賽提高了大家的警覺性", "透過討論，讓班級的向心力提升"], steps: ["「大約估計」語意重複，屬於用詞贅餘；「提高警覺性」搭配不當，宜作「提高警覺」；「透過討論，讓……」缺少主詞。", "「他把所有的作業都寫完了」句子主幹完整、用詞不重複，沒有語病。"], tip: "檢查病句時，先刪修飾語找出主幹，再看是否有贅詞或搭配不當。", trap: "「大約」與「估計」意義重複，這類同義詞疊用是常見的贅餘來源。" }
    ]),
    r => bank(r, 14, 2, [
      { text: "寫信給導師時，結尾應使用下列何者較為恰當？", correct: "敬請 鈞安", distractors: ["敬請 近安", "即頌 刻好", "順頌 學安"], steps: ["「鈞安」用於對尊長、老師等身分較高者，符合對導師的稱謂規範。", "「近安」用於平輩，「刻好、學安」則多用於對晚輩，皆不符合對導師的身分。"], tip: "應用文的敬語選擇要依收信人身分而定，身分越尊敬，用語越正式。", trap: "誤用平輩或晚輩的敬語稱呼長輩，會顯得失禮，是常見的格式錯誤。" },
      { text: "下列書信用語的配對，何者正確？", correct: "對師長：鈞鑒／對平輩：台鑒", distractors: ["對師長：台鑒／對平輩：鈞鑒", "對師長：大鑒／對平輩：鈞鑒", "對師長：台鑒／對平輩：大鑒"], steps: ["「鈞鑒」用於對尊長、上司等身分較高者的提稱語。", "「台鑒」則用於平輩之間，兩者不可互相調換使用。"], tip: "書信的提稱語、結尾敬語都需與收信人身分相符，越正式的關係用語越尊敬。", trap: "把對尊長與對平輩的敬語配對顛倒，是應用文格式題最常見的陷阱。" }
    ]),
    r => bank(r, 15, 2, [
      { text: "「音容宛在」適合用於下列哪一種場合？", correct: "喪禮", distractors: ["婚禮", "開幕典禮", "畢業典禮"], steps: ["「音容宛在」表示對逝者容貌、聲音彷彿仍在眼前的追思之情。", "此語具有哀悼性質，只適合用於喪禮，不能用於喜慶場合。"], tip: "題辭、柬帖用語要先確認使用場合的性質（喜慶或哀傷），再判斷用詞是否恰當。", trap: "喜慶與喪禮用語絕對不能混用，誤用會顯得非常失禮。" },
      { text: "對聯「梅開春意鬧，鶯囀曉光新」，若要判斷上下聯順序，最關鍵的依據是下列何者？", correct: "上聯末字聲調應為仄聲，下聯末字應為平聲", distractors: ["上聯字數應比下聯多", "上聯內容應與吉祥話有關", "上聯應寫在對聯的左側"], steps: ["對聯規則要求上聯末字仄聲、下聯末字平聲。", "「鬧」為仄聲，「新」為平聲，因此「梅開春意鬧」為上聯，「鶯囀曉光新」為下聯。"], tip: "國中階段判斷對聯上下聯順序，最基本可靠的方法是看末字的平仄聲調。", trap: "對聯上下聯的字數必須相同，字數不能作為判斷順序的依據。" }
    ]),
    r => bank(r, 16, 3, [
      { text: "字形線條方折、起筆有明顯「蠶頭」、收筆上揚如「燕尾」，這種特徵最可能屬於哪一種書體？", correct: "隸書", distractors: ["篆書", "楷書", "草書"], steps: ["「蠶頭燕尾」是隸書筆畫的典型特徵。", "篆書線條圓轉，楷書方正工整但無蠶頭燕尾，草書筆畫連綿簡省，皆與此描述不符。"], tip: "辨認書體時，先看線條是圓轉還是方折，再找是否有蠶頭燕尾等特徵。", trap: "不要把方正工整的楷書與帶有蠶頭燕尾特徵的隸書混淆。" },
      { text: "關於漢字書體演變，下列敘述何者最恰當？", correct: "篆書線條圓轉，隸書則把圓轉筆畫改為方折", distractors: ["草書出現的時間必定晚於楷書", "行書是所有書體中最早出現的", "甲骨文的線條比金文更為渾厚"], steps: ["篆書結構圓轉均勻，隸書則將圓轉筆畫改為方折，書寫更快速。", "行書、草書與楷書大致同時期發展，並非嚴格的先後順序；甲骨文線條較金文細瘦。"], tip: "書體演變重點在辨識字形特徵，行書、草書與楷書的先後順序不宜死記為絕對線性。", trap: "「草書一定比楷書晚出現」是常見迷思，實際上兩者是同期發展的書寫風格。" }
    ]),
    r => bank(r, 17, 1, [
      { text: "提取訊息題與推論理解題最大的差別是什麼？", correct: "提取訊息的答案能在原文直接找到根據，推論則需依線索合理推斷", distractors: ["提取訊息題不需要閱讀全文", "推論理解題的答案通常寫在文章標題中", "兩者答題方式完全相同，沒有差別"], steps: ["提取訊息題要求找出文本中明確提及的內容，答案有直接的文字根據。", "推論理解題則需要根據文本線索進行合理推斷，答案不一定逐字出現在原文。"], tip: "作答提取訊息題時，若某選項需要額外個人推測，通常就不是正確答案。", trap: "不要把需要額外推論的選項當成提取訊息題的答案，兩者的答題邏輯不同。" },
      { text: "閱讀測驗中，選項出現「所有人都認為……」這類絕對化用詞時，最需要留意下列哪一種選項陷阱？", correct: "以偏概全", distractors: ["無中生有", "偷換概念", "答非所問"], steps: ["絕對化用詞（都、一定、全部）容易把原文中「部分」情況誇大為「全部」，是以偏概全的常見標誌。", "應回原文核對，確認是否真的所有對象都符合描述。"], tip: "看到「都、一定、全部」等絕對化字眼時，先回原文檢查範圍是否被誇大。", trap: "選項用詞看似與原文相關，但範圍被擴大或縮小，仍屬於錯誤選項。" }
    ]),
    r => bank(r, 18, 2, [
      { text: "判讀長條圖時，為什麼要先確認縱軸是否從 0 開始？", correct: "縱軸未從 0 開始，長條高度差異可能被視覺放大或縮小", distractors: ["縱軸一定要從 0 開始，否則圖表不合法", "縱軸的起點不影響數據的判讀", "只有橫軸的起點需要確認，縱軸不需要"], steps: ["若縱軸不是從 0 開始，長條之間的視覺高度差距，可能與實際數據差距不成比例。", "因此判讀圖表前，需先確認座標軸的起點與刻度單位。"], tip: "讀圖表要依序看標題、座標軸單位，再讀數據，避免被視覺效果誤導。", trap: "只看長條圖的視覺高度比較大小，卻忽略座標軸刻度，容易產生誤判。" },
      { text: "圖表判讀題經常搭配文字說明一起出題，作答時最恰當的做法是下列何者？", correct: "同時比對文字敘述與圖表數據是否一致", distractors: ["只需閱讀文字說明，圖表僅供參考", "只需觀察圖表，文字說明可以略過", "只要選項用詞正面即可視為正確"], steps: ["圖表判讀題常設計一兩個與圖表數據不符的文字敘述作為干擾選項。", "因此必須同時核對文字內容與圖表實際數據，確認兩者是否吻合。"], tip: "圖表搭配文字出題時，務必逐一核對每個選項的敘述是否與圖表數字相符。", trap: "只讀文字說明而忽略圖表本身的實際數據，容易被似是而非的敘述誤導。" }
    ]),
    r => bank(r, 19, 3, [
      { text: "比較甲乙兩篇談論同一議題但立場不同的文章時，最重要的第一步是什麼？", correct: "先分別讀懂各篇文本的觀點與論證重點", distractors: ["直接假設兩篇文章觀點相同", "只讀甲文，乙文可以略過不看", "先看題目選項，再決定要不要讀文本"], steps: ["多重文本題必須先個別掌握每篇文本的主旨與觀點。", "再比較文本之間是觀點一致、對立，還是各自補充不同面向，最後依題目要求作答。"], tip: "統整多重文本不是簡單相加內容，而是先個別讀懂，再進行有依據的比較。", trap: "不能假設主題相同的文章觀點也必然相同，需分別確認每篇文本的實際立場。" },
      { text: "甲文主張都市發展應優先重視經濟成長，乙文則主張應優先兼顧環境保育。關於兩文的關係，下列敘述何者最恰當？", correct: "兩文對同一議題持對立的立場", distractors: ["兩文的立場完全一致", "兩文各自討論不相關的主題", "乙文只是在重複甲文的論點"], steps: ["兩文都在討論「都市發展」這個共同主題，但各自提出的優先考量不同。", "「經濟成長優先」與「環境保育優先」屬於對立的立場，而非一致或無關。"], tip: "判斷多重文本關係時，先確認共同主題，再比較各自論點是否相同、對立或互補。", trap: "主題相關不代表立場相同，需仔細比對雙方的具體主張。" }
    ]),
    r => bank(r, 20, 1, [
      { text: "一篇文章先描寫主角年老時的心境，接著才回頭敘述他年輕時的遭遇，這種敘事方式稱為什麼？", correct: "倒敘", distractors: ["順敘", "插敘", "平敘"], steps: ["敘事時間標記「年老」出現在文章前段，「年輕」則是更早發生的事，出現在後段。", "先寫時間較晚的內容、再回頭敘述較早發生的事件，屬於倒敘。"], tip: "判斷敘事順序時，比對文章中出現的時間標記先後順序與實際事件發生順序是否一致。", trap: "插敘通常篇幅較短且會回到原本敘事時間，與整體改變敘事順序的倒敘不同。" },
      { text: "記敘文中，作者以第一人稱「我」敘述整個事件，這樣的敘事觀點通常有什麼效果？", correct: "能帶入角色主觀情感，增加真實感與代入感", distractors: ["能客觀呈現所有角色的內心想法", "使讀者無法理解主角的情緒", "使故事情節必定按照時間先後敘述"], steps: ["第一人稱敘事視角有限，只能呈現「我」所見所感。", "這種視角的優點是能直接帶入主觀情感，讓讀者更容易產生共鳴與代入感。"], tip: "第一人稱敘述適合用來體會角色的主觀心境，但視角受限，無法得知其他角色的內心。", trap: "第一人稱不等於全知觀點，不能得知未被「我」觀察到的其他角色想法。" }
    ]),
    r => bank(r, 21, 1, [
      { text: "文章描寫主角看見窗外飄落的黃葉，突然想起已故的祖母，這種手法稱為什麼？", correct: "觸景生情", distractors: ["借景抒情", "直接抒情", "象徵手法"], steps: ["「觸景生情」是因當下所見的景物，引發對過往人事的情感聯想。", "此處是「看見黃葉」在先，「想起祖母」在後，符合觸景生情的定義。"], tip: "觸景生情強調「先見景、後生情」的因果順序；借景抒情則是全篇借用景物寄託情感，不一定有明確的觸發點。", trap: "觸景生情與借景抒情容易混淆，差別在於是否有明確的「當下觸發」情節。" },
      { text: "一篇抒情文中反覆出現「落葉」與「秋風」的意象，最可能營造出下列哪一種情感基調？", correct: "蕭瑟、感傷或思念的氛圍", distractors: ["歡欣鼓舞、熱鬧喜慶的氛圍", "緊張刺激、驚險萬分的氛圍", "輕鬆詼諧、幽默逗趣的氛圍"], steps: ["「落葉、秋風」在傳統文學中常與蕭瑟、時光流逝、離愁等情感連結。", "反覆出現這類意象，通常暗示全文情感基調偏向感傷或思念。"], tip: "留意文中反覆出現的意象，其色彩與傳統聯想往往能揭示全文的情感基調。", trap: "同一意象在不同文章中可能有不同情感，仍需搭配全文語境確認，不可完全套用固定公式。" }
    ]),
    r => bank(r, 22, 2, [
      { text: "在論說文中，作者引用專家的話來支持自己的看法，這個「專家的話」屬於論點還是論據？", correct: "論據", distractors: ["論點", "結論", "反駁"], steps: ["論點是作者想要說服讀者相信的核心主張。", "專家的話是用來支持這個主張的材料，屬於論據，而非論點本身。"], tip: "舉例、數據、引言都是論據，答題時不要把論據誤認為文章的中心思想。", trap: "論據可能出現在文章中的顯眼位置，但這不代表它就是作者的核心主張。" },
      { text: "一篇論說文中，作者先提出反方常見的看法，再逐一提出理由加以反駁，這種寫作安排的主要目的是什麼？", correct: "透過先破後立，凸顯自己論點更具說服力", distractors: ["純粹為了增加文章篇幅", "表示作者對此議題沒有明確立場", "顯示作者認同反方的所有觀點"], steps: ["先提出反方觀點、再加以反駁，是論說文常見的論證策略。", "這樣的安排能讓讀者看見雙方論點的對比，進而凸顯作者論點的合理性與說服力。"], tip: "留意論說文中「先破後立」的段落結構，這通常是作者強化論點的重要手法。", trap: "先提出反方觀點不代表作者認同它，仍要看後續是否加以反駁。" }
    ]),
    r => bank(r, 23, 1, [
      { text: "閱讀一篇新聞報導時，通常從哪個部分最快掌握全文重點？", correct: "標題與導言（開頭摘要）", distractors: ["文章的最後一段", "引述的專家發言部分", "文章中的圖片說明"], steps: ["新聞報導結構通常是「導言（重點摘要）＋內文（詳細說明）」。", "導言常包含五個W（何人、何事、何時、何地、為何）與一個H（如何），是快速掌握重點的最佳位置。"], tip: "閱讀應用性文本前，先問「這是寫給誰看、目的是什麼」，能幫助快速篩選重要資訊。", trap: "不要平均分配注意力在每一句話上，導言通常已包含大部分答題所需資訊。" },
      { text: "閱讀一則活動報名公告時，下列何者是作答此類應用文閱讀題最需要優先鎖定的資訊？", correct: "報名條件、截止時間與聯絡方式等關鍵資訊", distractors: ["公告使用的修辭手法", "公告文字的字數多寡", "公告標題的字體大小"], steps: ["應用性文本（公告、說明書）的閱讀重點在掌握目的與關鍵資訊。", "報名條件、截止時間、聯絡方式等細節，通常是此類題目考察的重點，而非文學性修辭賞析。"], tip: "說明書、公告類文本常考「條件是否符合」的細節比對題，需仔細核對每一項條件。", trap: "應用文閱讀重點在實用資訊而非修辭賞析，不要花過多心力分析文學技巧。" }
    ]),
    r => bank(r, 24, 3, [
      { text: "「何陋之有」這句話屬於哪一種特殊句式？正常語序應該是什麼？", correct: "倒裝句（賓語前置）；正常語序為「有何陋」", distractors: ["判斷句；正常語序為「陋者，何也」", "被動句；正常語序為「陋為何有」", "省略句；正常語序為「之有何陋」"], steps: ["此句是疑問代詞「何」作賓語而提前的倒裝句。", "正常語序應為「有何陋」，意思是「有什麼簡陋的呢」。"], tip: "文言文中疑問代詞作賓語時，常會提前到動詞之前，形成倒裝句式。", trap: "不要直接照字面順序翻譯，需先判斷是否為特殊句式再重組語意。" },
      { text: "文言文中「（他）嘗從余客荔城」一句省略了主詞，依上下文最可能省略的是誰？", correct: "前文提到的人物本身（承前省略）", distractors: ["讀者自己，因為文言文不需要主詞", "作者本人，且必為第一人稱", "無法判斷，文言文從不省略主詞"], steps: ["文言文常見「承前省略」，即省略前一句已出現過的主詞，避免重複。", "因此判斷省略的主詞，應回頭尋找前文最近提及、且符合語境的人物。"], tip: "遇到文言文省略主詞的句子，先回頭看前一句提到的人物，通常就是被省略的主詞。", trap: "不能假設文言文中的省略主詞一定是「我」或「作者」，需依上下文個別判斷。" }
    ]),
    r => bank(r, 25, 3, [
      { text: "評析文言文中人物性格時，最重要的依據是什麼？", correct: "文本中具體的言論、行動與他人評價", distractors: ["讀者個人的主觀印象與好惡", "文章的字數多寡", "人物在文中出現的次數"], steps: ["評析人物須以文本中具體呈現的言行證據為依據。", "還要留意其他角色或作者對此人物的反應與評論，而非套用個人主觀好惡。"], tip: "推論人物性格時，蒐集言論、行動、他人反應三方面的線索，綜合判斷會更客觀。", trap: "不能僅憑刻板印象或個人喜好評斷文中人物，答題應以文本依據為準。" },
      { text: "一篇文言故事的結局，讓行事狡詐的人物最終遭遇挫敗，這樣的安排最可能反映下列何者？", correct: "作者透過因果安排暗示對此人物行為的否定態度", distractors: ["純屬巧合，與作者立場無關", "顯示作者其實認同此人物的做法", "表示這類故事沒有固定結局安排"], steps: ["文言故事的結局安排（善有善報、惡有惡報）往往反映作者的價值判斷。", "行事狡詐者最終遭遇挫敗，暗示作者對其行為持否定、批判的態度。"], tip: "留意文言故事結局是否符合因果邏輯，這常是推論作者觀點的重要線索。", trap: "不要把故事結局視為純粹巧合，多數文言敘事的結局安排都與作者的價值立場有關。" }
    ]),
    r => bank(r, 26, 3, [
      { text: "古典詩詞中，「柳」這個意象最常和什麼情感或場合連結？", correct: "送別、離情", distractors: ["歡慶、團圓", "戰爭、征戍", "隱居、閒適"], steps: ["「柳」與「留」諧音，古人常在送別時折柳相贈。", "因此「柳」這個意象最常與送別、依依不捨的離情連結。"], tip: "許多古典詩詞意象承載固定的文化聯想，可透過諧音或典故理解其象徵意義。", trap: "不能只憑現代直覺聯想意象含意，需了解傳統文化脈絡下的慣用象徵。" },
      { text: "賞析一首古典詩詞時，下列何者是理解全詩情感最重要的第一步？", correct: "逐句理解字面景物描寫，再統整反覆出現的意象", distractors: ["直接查閱詩詞的白話翻譯並背誦", "只看詩詞的標題，不需閱讀內文", "先假設所有詩詞情感都相同，套用固定公式"], steps: ["賞析詩詞應先逐句理解字面景物描寫。", "再找出反覆出現或特別強調的意象，結合詩題與背景線索，推敲全詩想傳達的情感。"], tip: "詩題往往直接提示主題（如送別、思鄉、詠物），可作為理解的第一線索。", trap: "同一意象在不同詩詞中可能承載不同情感，不能套用單一固定公式判斷全詩情感。" }
    ]),
    r => bank(r, 27, 2, [
      { text: "「巾幗不讓鬚眉」中，「巾幗」與「鬚眉」分別借代什麼？屬於哪一種修辭？", correct: "借代女性與男性；屬於借代修辭", distractors: ["借代女性與男性；屬於譬喻修辭", "借代老人與年輕人；屬於借代修辭", "借代文官與武將；屬於映襯修辭"], steps: ["「巾幗」是古代女子頭飾，借代女性；「鬚眉」以男子多有鬍鬚眉毛的特徵，借代男性。", "兩者都是用與本體有實際關聯的事物取代本體，屬於借代修辭。"], tip: "借代的關鍵在本體與代替物之間有「實際關聯」，而非單純「相似」。", trap: "不要把借代誤認為譬喻，譬喻靠相似點連結不同本質的事物，借代則靠實際關聯。" },
      { text: "「時間像流水，一去不復返」這句話使用了下列哪一種修辭？", correct: "譬喻（明喻）", distractors: ["借代", "映襯", "誇飾"], steps: ["此句具備本體「時間」、喻詞「像」、喻體「流水」三要素。", "本體與喻體本質不同（時間、流水），但有「流逝、不可逆」的相似點，屬於明喻。"], tip: "明喻的辨識關鍵是句中出現喻詞（像、如、似、彷彿），且本體與喻體同時出現。", trap: "不要把譬喻和借代混淆：譬喻靠相似點連結，借代靠實際關聯替代。" }
    ]),
    r => bank(r, 28, 3, [
      { text: "「一年之計在於春，一日之計在於晨，一生之計在於勤」這句話是排比還是層遞？", correct: "層遞", distractors: ["排比", "映襯", "誇飾"], steps: ["三個分句依「一年、一日、一生」的時間範圍遞增排列。", "順序不可任意調換（調換後邏輯不合理），因此屬於層遞而非地位平等、可調換順序的排比。"], tip: "判斷排比或層遞時，嘗試調換各分句順序：邏輯不受影響是排比，受影響則是層遞。", trap: "排比與層遞常被混淆，關鍵差異在各分句之間是否存在遞進的順序關係。" },
      { text: "「白髮三千丈，緣愁似箇長」這句詩主要使用了下列哪一種修辭手法？", correct: "誇飾", distractors: ["排比", "引用", "摹寫"], steps: ["「白髮三千丈」明顯超出事實，是誇大的表達方式。", "作者藉由誇大頭髮的長度，強化內心愁緒之深重，屬於誇飾手法。"], tip: "誇飾不是說謊，而是透過誇大或縮小表達強烈的情感或印象，不需要照字面理解。", trap: "不要把誇飾的字面數字當作真實描述，重點在於它所強化的情感效果。" }
    ])
  ];

  const advancedUnitIds = new Set([10, 15, 16, 19, 22, 24, 25, 26, 27, 28]);
  const allowsAdvanced = unitId => advancedUnitIds.has(unitId);

  function makeQuizUnitQuestion(r, unitId, level) {
    const generator = generators[unitId - 1];
    if (!generator) throw new Error(`小考單元 ${unitId} 尚未建立出題器`);
    return generator(r, level);
  }

  // ponytail: 題庫是已審核的固定變體池（目前每單元 2～3 則），不像數學可用數值無限出題。
  // 小考題數因此不能超過所選單元實際擁有的變體總數，否則同一份小考會出現逐字重複的題目。
  // 日後擴充變體池（例如每單元備到 4～6 則）時，這裡會自動跟著變大，不用再調整這個函式。
  const variantCapacityCache = new Map();
  function unitVariantCapacity(unitId) {
    if (!variantCapacityCache.has(unitId)) {
      const seen = new Set();
      for (let seed = 1; seed <= 50; seed++) seen.add(makeQuizUnitQuestion(rngFromSeed(seed), unitId, 1).text);
      variantCapacityCache.set(unitId, Math.max(2, seen.size));
    }
    return variantCapacityCache.get(unitId);
  }
  const totalVariantCapacity = unitIds => unitIds.reduce((sum, id) => sum + unitVariantCapacity(id), 0);
  const chapterQuestionCount = unitIds => unitIds.length === 1 ? unitVariantCapacity(unitIds[0]) : Math.min(8, Math.max(6, unitIds.length * 6));

  const termQuizzes = [
    { id: "g7-all", grade: 7, term: "總複習", title: "國一總複習", seed: 7100, unitIds: [1, 2, 5, 6, 7, 8, 9, 11, 17, 20, 21], officialCodes: "常用字形音義、詞語運用、標點符號、文本統整、記敘抒情閱讀" },
    { id: "g7-1", grade: 7, term: "上學期", title: "國一上學期總複習", seed: 7101, unitIds: [1, 2, 5, 6, 17], officialCodes: "破音字、別字辨析、部件筆順、詞義推斷、提取訊息" },
    { id: "g7-2", grade: 7, term: "下學期", title: "國一下學期總複習", seed: 7102, unitIds: [7, 8, 9, 11, 20, 21], officialCodes: "近反義詞、成語運用、量詞疊詞、標點符號、記敘抒情閱讀" },
    { id: "g8-all", grade: 8, term: "總複習", title: "國二總複習", seed: 8200, unitIds: [3, 4, 12, 13, 14, 18, 22, 23, 24, 27], officialCodes: "六書造字、句型病句、應用文書信、論說應用文閱讀、文言文入門、譬喻映襯借代" },
    { id: "g8-1", grade: 8, term: "上學期", title: "國二上學期總複習", seed: 8201, unitIds: [3, 4, 12, 13], officialCodes: "象形指事會意、形聲轉注假借、詞性句子成分、句型病句辨析" },
    { id: "g8-2", grade: 8, term: "下學期", title: "國二下學期總複習", seed: 8202, unitIds: [14, 18, 22, 23, 24, 27], officialCodes: "應用文書信、圖表判讀、論說文閱讀、應用文閱讀、文言文入門、修辭譬喻映襯借代" },
    { id: "g9-all", grade: 9, term: "總複習", title: "國三總複習", seed: 9300, unitIds: [10, 15, 16, 19, 25, 26, 28], officialCodes: "文言實虛詞、應用文對聯柬帖、書體常識、多重文本統整、文言文進階、詩詞賞析、修辭排比層遞" },
    { id: "g9-1", grade: 9, term: "上學期", title: "國三上學期總複習", seed: 9301, unitIds: [10, 15, 16], officialCodes: "文言實虛詞、應用文對聯柬帖、書體演變常識" },
    { id: "g9-2", grade: 9, term: "下學期", title: "國三下學期總複習", seed: 9302, unitIds: [19, 25, 26, 28], officialCodes: "多重文本統整、文言文進階、詩詞賞析、修辭排比層遞誇飾" }
  ].map(item => ({ ...item, scope: "term", questionCount: Math.min(12, totalVariantCapacity(item.unitIds)), minutes: 25 }));

  const chapterQuizzes = [
    { id: "u1", grade: 7, book: "常用字形音義", term: "上學期", chapter: "1", title: "一字多音（破音字）的判讀", seed: 71001, unitIds: [1], officialCodes: "常用字的形音義" },
    { id: "u2", grade: 7, book: "常用字形音義", term: "上學期", chapter: "2", title: "形近字與別字辨析", seed: 71002, unitIds: [2], officialCodes: "常用字的形音義" },
    { id: "u5", grade: 7, book: "常用字形音義", term: "上學期", chapter: "3", title: "部首、部件與筆順的判斷", seed: 71005, unitIds: [5], officialCodes: "常用字的形音義" },
    { id: "u6", grade: 7, book: "詞語運用", term: "上學期", chapter: "4", title: "詞語情境義與詞義推斷", seed: 71006, unitIds: [6], officialCodes: "詞語的理解與使用" },
    { id: "u7", grade: 7, book: "詞語運用", term: "下學期", chapter: "5", title: "近義詞、反義詞的辨析", seed: 71007, unitIds: [7], officialCodes: "詞語的理解與使用" },
    { id: "u8", grade: 7, book: "詞語運用", term: "下學期", chapter: "6", title: "成語的意義與使用情境", seed: 71008, unitIds: [8], officialCodes: "詞語的理解與使用" },
    { id: "u9", grade: 7, book: "詞語運用", term: "下學期", chapter: "7", title: "量詞、疊詞與擬聲詞的使用", seed: 71009, unitIds: [9], officialCodes: "詞語的理解與使用" },
    { id: "u11", grade: 7, book: "語文常識", term: "下學期", chapter: "8", title: "標點符號的正確使用", seed: 71011, unitIds: [11], officialCodes: "基本的語文常識" },
    { id: "u17", grade: 7, book: "文本統整", term: "下學期", chapter: "9", title: "提取文本關鍵訊息", seed: 71017, unitIds: [17], officialCodes: "文本的統整與應用" },
    { id: "u20", grade: 7, book: "篇章閱讀", term: "下學期", chapter: "10", title: "記敘文的閱讀理解", seed: 71020, unitIds: [20], officialCodes: "句段篇章的理解與賞析" },
    { id: "u21", grade: 7, book: "篇章閱讀", term: "下學期", chapter: "11", title: "抒情文的閱讀理解", seed: 71021, unitIds: [21], officialCodes: "句段篇章的理解與賞析" },
    { id: "u3", grade: 8, book: "常用字形音義", term: "上學期", chapter: "1", title: "六書造字原則：象形、指事、會意", seed: 82003, unitIds: [3], officialCodes: "常用字的形音義" },
    { id: "u4", grade: 8, book: "常用字形音義", term: "上學期", chapter: "2", title: "六書造字原則：形聲、轉注、假借", seed: 82004, unitIds: [4], officialCodes: "常用字的形音義" },
    { id: "u12", grade: 8, book: "語文常識", term: "上學期", chapter: "3", title: "詞性與句子成分判斷", seed: 82012, unitIds: [12], officialCodes: "基本的語文常識" },
    { id: "u13", grade: 8, book: "語文常識", term: "上學期", chapter: "4", title: "句型與病句辨析", seed: 82013, unitIds: [13], officialCodes: "基本的語文常識" },
    { id: "u14", grade: 8, book: "語文常識", term: "上學期", chapter: "5", title: "應用文格式：書信、便條、名片", seed: 82014, unitIds: [14], officialCodes: "基本的語文常識" },
    { id: "u18", grade: 8, book: "文本統整", term: "下學期", chapter: "6", title: "圖表與非連續文本判讀", seed: 82018, unitIds: [18], officialCodes: "文本的統整與應用" },
    { id: "u22", grade: 8, book: "篇章閱讀", term: "下學期", chapter: "7", title: "論說文的閱讀理解", seed: 82022, unitIds: [22], officialCodes: "句段篇章的理解與賞析" },
    { id: "u23", grade: 8, book: "篇章閱讀", term: "下學期", chapter: "8", title: "應用文閱讀（書信、報導、說明文字）", seed: 82023, unitIds: [23], officialCodes: "句段篇章的理解與賞析" },
    { id: "u24", grade: 8, book: "篇章閱讀", term: "下學期", chapter: "9", title: "文言文閱讀入門：字詞句意", seed: 82024, unitIds: [24], officialCodes: "句段篇章的理解與賞析" },
    { id: "u27", grade: 8, book: "篇章閱讀", term: "下學期", chapter: "10", title: "修辭技巧：譬喻、映襯、借代", seed: 82027, unitIds: [27], officialCodes: "句段篇章的理解與賞析" },
    { id: "u10", grade: 9, book: "詞語運用", term: "上學期", chapter: "1", title: "文言常用實詞與虛詞的詞義", seed: 93010, unitIds: [10], officialCodes: "詞語的理解與使用" },
    { id: "u15", grade: 9, book: "語文常識", term: "上學期", chapter: "2", title: "應用文格式：對聯、題辭、柬帖", seed: 93015, unitIds: [15], officialCodes: "基本的語文常識" },
    { id: "u16", grade: 9, book: "語文常識", term: "上學期", chapter: "3", title: "書體演變與碑帖欣賞常識", seed: 93016, unitIds: [16], officialCodes: "基本的語文常識" },
    { id: "u19", grade: 9, book: "文本統整", term: "下學期", chapter: "4", title: "統整多重文本、比較觀點", seed: 93019, unitIds: [19], officialCodes: "文本的統整與應用" },
    { id: "u25", grade: 9, book: "篇章閱讀", term: "下學期", chapter: "5", title: "文言文閱讀進階：文意推論與人物評析", seed: 93025, unitIds: [25], officialCodes: "句段篇章的理解與賞析" },
    { id: "u26", grade: 9, book: "篇章閱讀", term: "下學期", chapter: "6", title: "古典詩詞曲的閱讀與賞析", seed: 93026, unitIds: [26], officialCodes: "句段篇章的理解與賞析" },
    { id: "u28", grade: 9, book: "篇章閱讀", term: "下學期", chapter: "7", title: "修辭技巧：排比、層遞、誇飾、引用、摹寫", seed: 93028, unitIds: [28], officialCodes: "句段篇章的理解與賞析" }
  ].map(item => ({ ...item, scope: "chapter", questionCount: chapterQuestionCount(item.unitIds), minutes: 15, source: "本站依單元核心能力建立的題目變體池" }));

  const quizCatalog = [...termQuizzes, ...chapterQuizzes];

  function generateQuiz(quizId, seedOverride) {
    const blueprint = quizCatalog.find(item => item.id === quizId);
    if (!blueprint) throw new Error("找不到指定的小考");
    const seed = seedOverride == null ? blueprint.seed : seedOverride;
    const r = rngFromSeed(seed);
    const targetCount = blueprint.questionCount || 12;
    const sequence = [...blueprint.unitIds];
    while (sequence.length < targetCount) sequence.push(blueprint.unitIds[(sequence.length - blueprint.unitIds.length) % blueprint.unitIds.length]);
    const orderedUnits = shuffled(r, sequence.slice(0, targetCount));
    const abilities = ["identify", "comprehend", "infer", "identify", "comprehend", "infer", "comprehend", "infer", "identify", "comprehend", "infer", "comprehend"];
    const used = new Set();
    const questions = orderedUnits.map((unitId, index) => {
      const isAdvanced = allowsAdvanced(unitId) && r() > .45;
      const question = makeQuizUnitQuestion(r, unitId, isAdvanced ? 3 : 1);
      for (let retry = 0; retry < 30; retry++) {
        const signature = [question.unitId, question.text].join("§");
        if (!used.has(signature)) { used.add(signature); break; }
        Object.assign(question, makeQuizUnitQuestion(r, unitId, isAdvanced ? 3 : 1));
      }
      question.ability = abilities[index % abilities.length];
      question.quizLevel = isAdvanced ? "進階" : "基礎";
      question.officialOrder = index + 1;
      return question;
    });
    return { kind: "quiz", id: `QUIZ-${blueprint.id}-${seed}`, quizId: blueprint.id, seed, title: blueprint.title, grade: blueprint.grade, term: blueprint.term, chapter: blueprint.chapter, scope: blueprint.scope, minutes: blueprint.minutes || 15, questionCount: targetCount, officialCodes: blueprint.officialCodes, unitIds: [...blueprint.unitIds], blueprint: "self-built-unit-bank", questions };
  }

  function generate(seed, level = 2) {
    const r = rngFromSeed(`${seed}`.split("").reduce((a, c) => a * 31 + c.charCodeAt(0), 7) + level * 100003);
    const allUnitIds = U.map(u => u.id);
    const targetCount = 42;
    const sequence = shuffled(r, [...allUnitIds, ...allUnitIds]).slice(0, targetCount);
    const abilities = ["identify", "comprehend", "infer", "identify", "comprehend", "infer", "comprehend", "infer", "identify", "comprehend"];
    const used = new Set();
    const questions = sequence.map((unitId, index) => {
      const isAdvanced = allowsAdvanced(unitId) && r() > (level >= 3 ? .35 : .55);
      const question = makeQuizUnitQuestion(r, unitId, isAdvanced ? 3 : 2);
      for (let retry = 0; retry < 30; retry++) {
        const signature = [question.unitId, question.text].join("§");
        if (!used.has(signature)) { used.add(signature); break; }
        Object.assign(question, makeQuizUnitQuestion(r, unitId, isAdvanced ? 3 : 2));
      }
      const signature = [question.unitId, question.text].join("§");
      used.add(signature);
      question.ability = abilities[index % abilities.length];
      question.officialOrder = index + 1;
      return question;
    });
    return { id: `CAP-${seed}-${level}`, seed: Number(seed), level, createdAt: new Date().toISOString(), blueprint: "self-built-standalone-items-42q-70min", questions };
  }

  return { generate, generateQuiz, quizCatalog, allowsAdvanced };
})();
