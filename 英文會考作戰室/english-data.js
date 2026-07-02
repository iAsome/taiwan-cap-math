// 國中英語科會考範圍講義資料。
// 英語不像國文有「課文單元」，也不像自然科有固定主題，因此單元切分依十二年國教英語文
// 課綱第四學習階段的文法能力指標（時態、詞類、句構）與教育部國中小基本 2000 字表的
// 主題分類混合編排：前 16 單元是文法與閱讀技巧，後 4 單元是主題字彙與構詞策略。
// 官方英語科只考「閱讀」與「聽力」，全為選擇題，沒有寫作或口說；本站僅收錄閱讀部分的
// 歷屆試題（聽力沒有官方逐字稿可轉錄），詳見 sourcePolicy 與 README 的範圍聲明。
window.ENGLISH_DATA = (() => {
  const groups = [
    { id: 1, name: "時態文法" },
    { id: 2, name: "詞類與修飾" },
    { id: 3, name: "句型結構" },
    { id: 4, name: "進階句型與閱讀技巧" },
    { id: 5, name: "核心字彙與構詞" }
  ];

  const units = [
    {
      id: 1, grade: 1, domain: "時態文法", title: "現在式與現在進行式",
      summary: "現在簡單式講「習慣、事實」，現在進行式講「正在發生」，兩者最容易在會考單題被拿來互換考。",
      core: "現在簡單式（am/is/are、動詞原形或三單 -s）用來描述習慣性動作、事實或現在的狀態（例如 She works at a bank. / Water boils at 100°C.）。現在進行式（am/is/are + V-ing）用來描述說話當下正在進行的動作，也可用來描述「已安排好的近未來計畫」（例如 We are leaving tomorrow.）。三單動詞加 -s／-es／去 y 加 ies 的拼寫規則，是這個單元最容易在單題選項裡設陷阱的地方。",
      clarify: "『現在』不等於『正在』：現在簡單式的「現在」指的是長期成立的習慣或事實，不是說話當下這一秒；只有現在進行式才是真正「這一刻正在做」。像 like、know、want、believe 這類表示狀態、感受、認知的動詞（stative verbs），一般不用進行式（不說 I am liking it）。",
      formula: "現在簡單式：主詞 + 動詞原形／三單-s（Do/Does + 主詞 + 原形 ...?）\n現在進行式：主詞 + am/is/are + V-ing\n三單拼法：一般加 -s；以 s/x/ch/sh/o 結尾加 -es；子音+y 結尾去 y 加 -ies",
      derivation: "英語用『現在簡單式』表達不隨時間點改變的習慣或事實，因為這類敘述在任何時刻檢視都成立，不需要標記「正在進行」；而『現在進行式』的 be + V-ing 結構，be 動詞鎖定說話當下的時間點，V-ing 則強調動作尚未結束、正持續進行，兩個成分合起來才精準對應「此刻正在做」的語意。",
      steps: ["先找時間副詞線索：always/usually/every day 傾向現在簡單式；now/right now/Look! 傾向現在進行式", "確認動詞是不是 like/know/want 這類狀態動詞，狀態動詞通常不用進行式", "判斷句意是『習慣事實』還是『當下動作』，再決定時態", "三單題再檢查主詞是第三人稱單數時，動詞是否加對 -s/-es/-ies"],
      tips: ["記憶口訣：『簡單式管習慣，進行式管當下』", "Look!／Listen! 開頭的句子幾乎都用現在進行式", "頻率副詞（always, often, sometimes, never）是現在簡單式的强烈訊號", "現在進行式也可以講已排定的未來計畫，不是只能講眼前動作"],
      quiz: { q: "選出正確：Please be quiet. The baby ___ (sleep).", a: "is sleeping。句子用 Please be quiet 暗示動作正在進行、需要保持安靜，屬於現在進行式的情境。" }
    },
    {
      id: 2, grade: 1, domain: "時態文法", title: "過去式與未來式",
      summary: "過去式講「已經結束的事」，未來式講「還沒發生的事」，will 與 be going to 的選擇是常考細節。",
      core: "過去簡單式用動詞的過去式（規則動詞加 -ed，不規則動詞需個別背誦，如 go→went、buy→bought）描述過去某個時間點已經完成或發生過的動作。未來式常見兩種：will + 原形動詞（用於說話當下臨時決定、預測、承諾），be going to + 原形動詞（用於事先計畫好、或依現有跡象可預期會發生的事）。",
      clarify: "will 與 be going to 常被視為完全同義，但精確區分是：will 較常用於『說話當下才決定』或『對未來的預測、承諾』；be going to 較常用於『說話之前就已經計畫好』或『眼前已有明顯跡象』（例如 Look at those clouds. It's going to rain. 不會說 It will rain，因為是依眼前跡象判斷）。",
      formula: "過去簡單式：主詞 + 動詞過去式（Did + 主詞 + 原形...?）\n未來式：主詞 + will + 原形 ／ 主詞 + am/is/are going to + 原形\n規則動詞過去式：一般加 -ed；字尾 e 加 -d；子音+y 去 y 加 -ied；重複字尾子音+ed（如 stop→stopped）",
      derivation: "過去式的形態變化（-ed 或不規則變化）標記動作已經在時間軸上完成，和現在脫節，因此常與 yesterday、last week、ago 等明確指向過去的時間詞連用；will 的語意核心是『說話當下對未來的意志或推測』，因此適合臨時決定與預測，而 be going to 的 be 動詞＋現在分詞結構強調『現在已經朝向那個計畫前進』，因此適合事先安排好、或依現況能推斷的未來。",
      steps: ["看到 yesterday／last.../...ago／in 2020 等過去時間詞，直接選過去式", "先判斷不規則動詞的過去式是否背錯（go/went, buy/bought, see/saw 等）", "未來式先問：是臨時決定/預測（will）還是事先計畫/有跡象（be going to）", "疑問句與否定句要用 did/didn't + 原形，不能動詞再變過去式（不能說 Did you went）"],
      tips: ["不規則動詞是這個單元最容易失分的地方，建議整理成表格分批背", "Look at those clouds. It's going to rain.——依眼前跡象，用 be going to", "I'll answer the phone.——說話當下臨時決定，用 will", "did 已經表示過去，後面動詞要用原形，不能再加 -ed"],
      quiz: { q: "選出正確：A: The phone is ringing. B: OK, I ___ (answer) it.", a: "will answer。B 是說話當下才臨時決定要接電話，屬於典型的 will 用法，不是事先計畫。" }
    },
    {
      id: 3, grade: 1, domain: "時態文法", title: "現在完成式",
      summary: "現在完成式（have/has + p.p.）連結過去動作與現在的關聯或結果，是台灣學生最常搞混的時態。",
      core: "現在完成式（have/has + 過去分詞）強調過去發生的動作與現在之間的關聯：可能是『從過去持續到現在』（for/since 常用）、『過去做過、現在有經驗』（ever/never）、或『剛完成、對現在有影響的結果』（already/just/yet）。它不強調動作精確發生在哪個時間點，而是強調『現在的狀態或結果』。",
      clarify: "現在完成式不能和明確指出過去時間點的字詞連用（不可說 I have seen him yesterday），因為一旦指定精確過去時間，就必須用過去簡單式；for（一段時間，如 for three years）與 since（一個時間起點，如 since 2020）是分辨『持續多久』與『從何時開始』的關鍵字。",
      formula: "現在完成式：主詞 + have/has + 過去分詞（Have/Has + 主詞 + p.p. ...?）\nfor + 一段時間（for two years）；since + 起點時間（since 2020 / since I was young）\n常用副詞：already, just, yet, ever, never, for, since",
      derivation: "have 原本表示『擁有』，have + 過去分詞的結構隱含『現在擁有一個已完成動作所帶來的狀態』，因此整個結構的重心落在『現在』而非『過去發生的那一刻』；這也是為什麼現在完成式不能搭配精確的過去時間點——一旦講清楚『何時發生』，句子的重心就變成描述過去事件本身，必須改用過去簡單式。",
      steps: ["先找 for／since／already／just／yet／ever／never 等現在完成式的信號詞", "看到精確過去時間點（yesterday, last year, in 2020 且非 since 用法）就改用過去簡單式", "yet 常用於否定句與疑問句（Have you finished yet? / not yet）", "分辨句意重點是『過去某一刻做了什麼』還是『現在的經驗或結果』"],
      tips: ["for 接一段時間長度，since 接一個時間起點，別混用", "yet 幾乎只出現在疑問句或否定句，肯定句常用 already", "have you ever been to...? 是問經驗的經典句型", "現在完成式＋yesterday 幾乎必定是錯誤選項，看到就能先刪除"],
      quiz: { q: "選出正確：I ___ (live) in Taipei since 2019.", a: "have lived。since 2019 標示一個時間起點，且動作持續到現在，符合現在完成式的核心用法。" }
    },
    {
      id: 4, grade: 1, domain: "時態文法", title: "情態助動詞",
      summary: "can/could/may/might/must/should 等情態助動詞表達能力、許可、推測與義務，後面一律接原形動詞。",
      core: "情態助動詞（can, could, may, might, must, should, have to, need to 等）用來表達說話者對動作的態度：can/could 表能力或請求，may/might 表許可或不確定的推測，must 表強烈義務或高把握的推測，should 表建議，have to 表外在規定的義務。所有情態助動詞後面一律接『原形動詞』，且沒有第三人稱單數要加 -s 的問題。",
      clarify: "must 與 have to 都能表示義務，但否定形式意義完全不同：must not（=mustn't）表示『禁止』（不可以做），don't have to 表示『沒有必要』（可以不做，但不是禁止）；這組否定形式的差異是會考的經典陷阱。",
      formula: "情態助動詞 + 原形動詞（一律不加 -s、不加 to，除了 have to／need to／ought to）\n推測強度（由高到低）：must（幾乎確定）> should（很可能）> may/might（不確定）\n義務：must（禁止對照 mustn't）＝ have to（沒必要對照 don't have to）",
      derivation: "情態助動詞的功能是為主要動詞加上『可能性、義務、許可』等說話者的判斷或態度，而不是描述動作本身的時間，因此文法上把它們視為一種『功能詞』，固定要求後面接不帶任何時態變化的原形動詞，就像 do/does/did 構成問句與否定句時也一律接原形動詞一樣。",
      steps: ["先判斷句子要表達的是能力、許可、推測還是義務", "推測題再判斷說話者的把握程度：非常確定用 must，可能用 may/might", "義務的否定題先看是『禁止』還是『沒必要』，決定用 mustn't 或 don't have to", "情態助動詞後面出現到 -ing 或加 -s 幾乎都是錯誤選項"],
      tips: ["You must not touch it.＝禁止；You don't have to come.＝不必來但可以來", "He must be tired.（他一定很累）是對現在狀態很有把握的推測，不是義務", "Could you...? / Would you mind...? 是禮貌請求的常考句型", "情態助動詞後面永遠接原形動詞，看到 to V 或 V-ing 先刪掉"],
      quiz: { q: "選出正確：You ___ not smoke here. It's against the law.", a: "must。must not 表示法律禁止，句意「這裡違法，不可以抽菸」正對應 must not（禁止），而不是 don't have to（沒必要）。" }
    },

    {
      id: 5, grade: 2, domain: "詞類與修飾", title: "名詞、代名詞與冠詞",
      summary: "可數名詞需要單複數與冠詞配合，不可數名詞不能直接加 -s，人稱代名詞要對應主格、受格、所有格。",
      core: "名詞分可數（一個蘋果 an apple、兩個蘋果 two apples）與不可數（water, information, homework 等，前面不加 a/an，也不直接加 -s）。冠詞 a/an 用於『第一次提到、泛指的單數可數名詞』，the 用於『雙方都知道指哪一個』的特定人事物。代名詞要依句子成分變化：主格（I, he, they）、受格（me, him, them）、所有格形容詞（my, his, their）、所有格代名詞（mine, his, theirs）。",
      clarify: "許多中文可以說『一個資訊、一份功課』的名詞，在英文裡其實是不可數名詞（information, homework, advice, furniture），不能加 a/an 也不能直接加 -s，要用 a piece of information、much homework 等方式表達數量。",
      formula: "可數名詞：a/an + 單數；複數 + -s／-es（規則變化同動詞三單拼法邏輯）\n不可數名詞：不加 a/an，不加 -s；用 some/much/a lot of/a piece of 等表達數量\n代名詞格位：主格 I/he/she/we/they → 受格 me/him/her/us/them → 所有格形容詞 my/his/her/our/their",
      derivation: "英語的名詞系統區分『可以個別計數的物體』與『無法個別切分的物質或抽象概念』，可數名詞因為能一個一個數，所以有單複數形式的區別；不可數名詞因為概念上是連續、不可切分的整體（如 water、information），所以固定用單數形式，需要藉助 piece、cup、much 等『量詞』才能表達具體數量。代名詞的格位變化則反映它在句子裡的角色：做主詞用主格，做受詞（動詞或介系詞後）用受格，表示所有關係則用所有格。",
      steps: ["先判斷名詞是可數還是不可數，決定能不能加 a/an 或 -s", "可數名詞的複數要注意不規則變化（child→children, foot→feet）", "代名詞題先找它在句子裡的角色：主詞、受詞還是表示所有", "the 與 a/an 的選擇看是否『特定、雙方都知道指哪個』"],
      tips: ["information, homework, advice, furniture, news 是常考的不可數名詞陷阱", "much information 對，informations 或 an information 都不對", "介系詞後面的代名詞一定要用受格：for him，不是 for he", "第一次提到用 a/an，再次提到同一個東西改用 the"],
      quiz: { q: "選出正確：Can you give me some ___ (information) about the bus schedule?", a: "information。information 是不可數名詞，不加 -s，也不能說 an information，直接用 some information 表示『一些資訊』。" }
    },
    {
      id: 6, grade: 2, domain: "詞類與修飾", title: "形容詞與副詞",
      summary: "形容詞修飾名詞，副詞修飾動詞、形容詞或整句話，拼寫與位置都是常考重點。",
      core: "形容詞（adjective）用來修飾名詞，通常放在名詞前面或連綴動詞（be, look, feel, sound, become 等）後面（例如 a happy dog / She looks happy）。副詞（adverb）用來修飾動詞、形容詞、другой副詞或整個句子，說明『怎麼做、多常做、程度多少』，常見規則是形容詞字尾加 -ly 變副詞（quick→quickly），但也有不規則變化（good→well, fast→fast）。",
      clarify: "連綴動詞（look, feel, sound, smell, taste, become, get）後面要接形容詞，不能接副詞：要說 You look tired（不是 tiredly），因為這裡是在描述主詞的狀態，不是描述動詞動作的方式；只有一般動詞後面修飾『動作方式』時才用副詞（He runs quickly）。",
      formula: "規則副詞：形容詞 + -ly（slow→slowly, careful→carefully）；字尾 y 去 y 加 -ily（happy→happily）\n不規則副詞：good→well, fast→fast, hard→hard, late→late（形容詞與副詞同形要小心）\n連綴動詞 + 形容詞：look/feel/sound/smell/taste/become/get + adj.",
      derivation: "形容詞的功能是替名詞增加描述性質，因此文法上要求緊貼在名詞旁邊，或透過連綴動詞把性質『連結』回主詞本身；副詞則是替『動作、性質、整句話』增加額外資訊（方式、程度、頻率），因為它修飾的對象通常是動詞或形容詞而非名詞，所以位置更彈性，可以出現在動詞前後或句首句尾，但語意核心都是在說明「怎麼樣地」做這個動作或具備這個性質。",
      steps: ["先確認被修飾的是名詞（用形容詞）還是動詞/形容詞/全句（用副詞）", "看到 look/feel/sound/smell/taste/become/get 後面，直接選形容詞", "副詞拼寫先看是否為 good→well、fast→fast 這類不規則變化", "頻率副詞（always, usually, often, sometimes, never）通常放在一般動詞前、be動詞後"],
      tips: ["He speaks English well.——well 修飾動詞 speaks，用副詞", "This cake tastes good.——tastes 是連綴動詞，後面接形容詞 good，不是 well", "fast、hard、late 形容詞和副詞同形，要靠句子功能判斷，不能只看字尾有沒有 -ly", "hardly 是『幾乎不』的意思，和 hard（努力地）意思完全不同，是常考陷阱"],
      quiz: { q: "選出正確：This soup smells ___ (delicious).", a: "delicious。smell 是連綴動詞，後面要接形容詞描述主詞（soup）的性質，不能用副詞 deliciously。" }
    },
    {
      id: 7, grade: 2, domain: "詞類與修飾", title: "比較級與最高級",
      summary: "形容詞、副詞的比較級與最高級規則變化依音節長短而不同，as...as 的原級比較也常入題。",
      core: "比較級（比...更）與最高級（最...）依形容詞／副詞的音節數決定變化方式：一般單音節字加 -er/-est（tall→taller→tallest）；三音節以上（或部分雙音節）用 more/most（beautiful→more beautiful→most beautiful）；不規則變化需個別背誦（good→better→best, bad→worse→worst, many/much→more→most）。原級比較用 as + 形容詞/副詞原級 + as，表示『和...一樣』。",
      clarify: "雙音節形容詞的規則不固定：以 -y、-er、-ow、-le 結尾的雙音節字通常仍用 -er/-est（happy→happier, narrow→narrower），其餘雙音節與三音節以上才穩定用 more/most；最保險的判斷方式是先確認是否為常見的不規則變化，再看音節數決定規則變化方式。",
      formula: "比較級：形容詞/副詞 + -er，或 more + 形容詞/副詞（+ than）\n最高級：the + 形容詞/副詞 + -est，或 the most + 形容詞/副詞\n原級比較：as + 形容詞/副詞原級 + as（否定：not as/so...as）\n不規則：good/well→better→best；bad/badly→worse→worst；little→less→least；many/much→more→most",
      derivation: "英語用字尾變化（-er/-est）處理短音節詞，是因為短字加音節不會造成發音負擔；但音節愈多的詞如果也加 -er/-est，唸起來會過於冗長拗口，因此改用獨立的程度副詞 more/most 疊加在原形容詞前面，用『加一個詞』取代『加一個音節』來表達同樣的比較關係，這也是為什麼音節數是判斷規則的核心依據。",
      steps: ["先確認是規則變化還是要背的不規則變化（good/bad/many/little）", "規則變化先數音節：單音節或常見雙音節（-y/-er/-ow/-le）用 -er/-est", "三音節以上用 more/most，不要同時用 -er 又加 more（避免 more taller 這類重複比較的錯誤）", "看到 as...as 先確認中間要放原級（不能是比較級）"],
      tips: ["不能同時用 -er 又加 more：more taller 是常見的雙重比較錯誤", "as...as 中間一定用形容詞或副詞的原級，不是比較級", "good→better→best、bad→worse→worst 是最常考的不規則變化", "the 通常出現在最高級前面，比較級則常搭配 than"],
      quiz: { q: "選出正確：This question is ___ than that one.", a: "more difficult。difficult 是三音節以上的形容詞，比較級要用 more difficult，不能寫成 difficulter。" }
    },
    {
      id: 8, grade: 2, domain: "詞類與修飾", title: "介系詞",
      summary: "時間、地點、方向介系詞（in/on/at 等）依範圍大小與情境固定搭配，是最需要靠語感累積的單元。",
      core: "介系詞用來表示名詞（或代名詞）與句子其他部分的關係，常見類型有時間（in 2024／on Monday／at 3 o'clock）、地點（in the room／on the desk／at the door）、方向（to school／into the room／from Taipei to Tainan）。時間介系詞大致依範圍由大到小排序：in（年、月、季節）> on（特定日期、星期）> at（精確時刻），地點介系詞則依空間概念（in 表示在一個立體空間裡、on 表示接觸在一個平面上、at 表示在一個點狀位置）決定。",
      clarify: "介系詞的選用常常不是靠邏輯推導就能百分之百判斷，而是英語母語者長期形成的固定搭配（collocation），例如 arrive at/in（不能說 arrive to）、interested in、good at 等固定介系詞用法，建議把常考的動詞/形容詞＋介系詞組合整理成清單背誦，而不是每次都重新用邏輯推理。",
      formula: "時間介系詞（大→小）：in（年/月/季節/世紀）→ on（日期/星期/特定的一天）→ at（時刻/正午/夜晚）\n地點介系詞：in（立體空間內）／on（接觸平面上）／at（點狀位置）\n常考固定搭配：arrive at/in（不加 to）、interested in、good/bad at、afraid of、depend on",
      derivation: "時間介系詞的『大到小』排序反映英語把時間單位想像成一層層的容器：年、月、季節是最大範圍的容器用 in；日期、星期是容器中的一個切片用 on；精確時刻是切片中的一個點用 at。地點介系詞的邏輯類似：in 描述『被包含在一個有體積的空間內』，on 描述『附著在一個平面上』，at 則忽略空間大小，只標記『一個位置點』，因此同一個地方依描述角度不同，可能用不同介系詞（in the car 但 on the bus，因為說話者把公車類比成一個可以站立走動的平面空間）。",
      steps: ["時間題先判斷是年/月/季節（in）、日期/星期（on）還是精確時刻（at）", "地點題先想像該空間是立體容器（in）、平面（on）還是單純的位置點（at）", "動詞/形容詞＋介系詞的固定搭配題，直接回想背過的清單，不硬套邏輯", "方向題留意 to（到達某地）、into（進入內部）、from...to...（從...到...）的差異"],
      tips: ["arrive at/in 後面不加 to，是最常考的固定搭配陷阱", "on the bus/train/plane（大眾運輸工具）但 in the car（私家轎車）", "be interested in、be good at、be afraid of 是常考形容詞+介系詞組合", "at night 但 in the morning/afternoon/evening，night 是特例"],
      quiz: { q: "選出正確：The train will arrive ___ Taipei Station ___ 9 a.m.", a: "at；at。arrive at 表示抵達一個地點（不加 to），精確時刻 9 a.m. 也用 at，兩者都是介系詞固定搭配。" }
    },

    {
      id: 9, grade: 3, domain: "句型結構", title: "連接詞與子句",
      summary: "對等連接詞（and/but/or/so）連接同等地位的內容，從屬連接詞（because/although/when）則帶出附屬子句。",
      core: "對等連接詞（and, but, or, so, for）連接兩個文法地位相等的單字、片語或句子，表示並列、轉折、選擇或因果。從屬連接詞（because, although/though, when, if, since, while 等）則帶領一個『從屬子句』，附屬在主要子句之下，說明原因、讓步、時間或條件，從屬子句本身不能單獨成句，一定要搭配主要子句。",
      clarify: "because 與 so 不能在同一句中重複使用（不可說 Because it rained, so we stayed home），因為兩者都在標記因果關係，中文『因為...所以...』的雙重標記在英文文法裡是重複的錯誤，只需保留其中一個連接詞。",
      formula: "對等連接詞：A + and/but/or/so + B（前後地位相等）\n從屬連接詞：主要子句 + because/although/when/if + 從屬子句，或 從屬連接詞 + 從屬子句, + 主要子句（子句在前要加逗號）\n常考從屬連接詞：because（原因）、although/though（讓步，雖然）、if（條件）、when/while（時間）",
      derivation: "對等連接詞之所以要求前後文法地位相等，是因為它在句法上把兩個成分『並列』起來，成為同一層級的結構，任何一邊獨立拿掉都還能成立；從屬連接詞則把它所帶的子句降格為『附屬』於主要子句的修飾成分（類似原因、時間、條件的說明），因此從屬子句在文法上依附主要子句而存在，本身若拿掉主要子句就會顯得語意不完整，也就不能單獨使用。",
      steps: ["先判斷兩個部分的文法地位是否相等：相等用對等連接詞，不相等（一個附屬於另一個）用從屬連接詞", "確認邏輯關係：原因（because）、讓步／轉折（although）、條件（if）還是時間（when/while）", "檢查是否重複標記因果或轉折（because...so、although...but 不可同句重複）", "從屬子句放句首時，記得在子句結束處加逗號"],
      tips: ["because 和 so 不能同句重複使用，although 和 but 也不能同句重複", "although 本身已經是『雖然』，後面主要子句不能再加 but", "since 除了『自從』還能當『因為』使用，要依上下文判斷", "從屬子句放句首要加逗號，放句尾則通常不需要"],
      quiz: { q: "選出正確：___ it was raining, we still went hiking.", a: "Although。從屬子句表達讓步（雖然下雨），主要子句是『我們仍然去健行』，語意轉折用 although，而且不能在主要子句再加 but。" }
    },
    {
      id: 10, grade: 3, domain: "句型結構", title: "動名詞與不定詞",
      summary: "動詞當主詞或受詞時要變成動名詞（V-ing）或不定詞（to V），哪些動詞後面接哪一種需要分類記憶。",
      core: "當動詞要在句子裡扮演名詞的角色（當主詞、受詞或介系詞的受詞）時，必須變形為動名詞（V-ing）或不定詞（to + 原形）。有些動詞後面固定只接動名詞（enjoy, finish, mind, avoid, suggest, practice 等），有些固定只接不定詞（want, decide, plan, hope, agree, promise 等），有些兩者都可以接，且意思不變（like, love, start, begin）或意思會改變（stop V-ing 停止正在做的事、stop to V 停下來去做另一件事）。",
      clarify: "『介系詞後面一律接動名詞，不能接不定詞』是很重要但常被忽略的規則：例如 interested in 後面要接 V-ing（interested in learning），不能寫成 interested in to learn，因為 in 是介系詞，介系詞的受詞只能是名詞或動名詞。",
      formula: "只接動名詞：enjoy, finish, mind, avoid, suggest, practice, keep, give up + V-ing\n只接不定詞：want, decide, plan, hope, agree, promise, expect, need + to V\n意思改變的動詞：remember/forget + V-ing（記得/忘記做過的事）vs. + to V（記得/忘記要去做）；stop + V-ing（停止正在做的事）vs. stop + to V（停下來去做別的事）",
      derivation: "動名詞（V-ing）本質上是把動詞『名詞化』，因此能出現在任何名詞可以出現的位置（主詞、受詞、介系詞後）；不定詞（to V）則保留較強的『尚未發生、朝向未來』的動作意味，因此常接在表達意願、計畫、期待等『指向未來動作』的動詞後面（want, hope, decide, plan）。這也解釋了為什麼 remember/forget/stop 後面接動名詞與不定詞會有語意差異：V-ing 指『已經做過、正在做的事』，to V 則指『尚未做、即將去做的事』。",
      steps: ["先判斷動詞是屬於固定接動名詞、固定接不定詞，還是兩者皆可的類型", "遇到介系詞後面要用動詞名詞化的情況，一律用動名詞，不用不定詞", "remember/forget/stop 這類意思會改變的動詞，先判斷語意是『已做過的事』還是『將要做的事』", "動名詞當主詞時，句子動詞要用第三人稱單數形式（Swimming is fun.）"],
      quiz: { q: "選出正確：I remember ___ (lock) the door before I left.", a: "locking。remember + V-ing 表示『記得（過去）已經做過的動作』，句意是「我記得（曾經）鎖了門」，符合 remember 接動名詞回顧已發生動作的用法。" },
      tips: ["介系詞後面一律接動名詞，這是最容易忽略卻很常考的規則", "want/hope/decide/plan/agree/promise 是常考的『只接不定詞』動詞群", "enjoy/finish/mind/avoid/suggest/practice 是常考的『只接動名詞』動詞群", "stop V-ing（停止做）vs. stop to V（停下來去做別的事）是經典考點"]
    },
    {
      id: 11, grade: 3, domain: "句型結構", title: "被動語態",
      summary: "被動語態把動作的承受者放到主詞位置，強調動作本身或執行者不明／不重要時使用。",
      core: "主動語態的重心是『誰做了這個動作』，被動語態（be + 過去分詞）則把重心轉移到『動作的承受者』，用於執行者不明、不重要，或想強調動作本身時（例如 English is spoken in many countries. 不需要特別指出是誰在說英語）。若要提及執行者，用 by + 執行者（The window was broken by the boy.）。被動語態的時態變化跟著 be 動詞走：現在被動（is/am/are + p.p.）、過去被動（was/were + p.p.）、未來被動（will be + p.p.）。",
      clarify: "只有及物動詞（後面需要受詞的動詞）才能改為被動語態，不及物動詞（如 happen, arrive, disappear）沒有被動形式，因為它們本身沒有『承受動作的受詞』可以轉換成被動句的主詞。",
      formula: "主動轉被動：主詞 + 動詞 + 受詞 → 受詞 + be動詞 + 過去分詞 (+ by + 原主詞)\n各時態被動：現在 is/am/are + p.p.；過去 was/were + p.p.；未來 will be + p.p.；現在完成 has/have been + p.p.\n情態動詞被動：情態助動詞 + be + p.p.（The work must be finished today.）",
      derivation: "被動語態的 be + 過去分詞結構中，過去分詞本身帶有『已完成、被施加動作』的語意（例如 broken 表示『已被打破的狀態』），be 動詞則負責標記時態並把這個『被施加動作的狀態』連結回句子的主詞，因此整體結構精準呈現『主詞是動作的承受者，而非執行者』，這也是為什麼只有能接受動作的及物動詞才能被動化。",
      steps: ["先判斷句子重點是動作的執行者還是承受者，承受者是重點就考慮被動", "確認動詞是及物動詞（有受詞可轉換），不及物動詞不能用被動", "依主動句的時態，選出對應的 be 動詞形式（is/am/are, was/were, will be...）", "需要提及執行者時，用 by + 執行者放在句尾"],
      tips: ["by 後面的執行者如果不重要或不明，常常直接省略", "情態助動詞的被動式固定是「情態助動詞 + be + p.p.」", "不及物動詞（happen, arrive, disappear, exist）沒有被動語態", "現在完成被動 has/have been + p.p. 容易漏掉 been，是常見拼寫錯誤"],
      quiz: { q: "選出正確：This bridge ___ (build) in 1930.", a: "was built。橋樑是動作的承受者（被建造），且 1930 是明確過去時間點，用過去被動 was built。" }
    },
    {
      id: 12, grade: 3, domain: "句型結構", title: "問句、否定句與附加問句",
      summary: "Yes/No問句與WH問句要正確使用助動詞倒裝，附加問句「前肯定後否定、前否定後肯定」是固定規則。",
      core: "Yes/No 問句依句子本身有無助動詞或 be 動詞，決定是否需要借助 do/does/did：有 be 動詞或情態助動詞時直接倒裝（Is she...? / Can you...?），一般動詞句則借助 do/does/did（Does he like...? / Did they go...?）。WH 問句在疑問詞後面接相同的倒裝規則。附加問句（tag question）加在句尾，規則是「前面肯定，後面用否定簡答；前面否定，後面用肯定簡答」，且動詞要與主要子句的動詞（或其對應助動詞）一致。",
      clarify: "附加問句的助動詞要跟著主要子句的『動詞類型』走，不是固定用 do/does/did：主要子句若已有 be 動詞或情態助動詞，附加問句就重複使用同一個；只有一般動詞句的附加問句才需要借助 do/does/did（例如 She can swim, can't she? 而不是 doesn't she）。",
      formula: "Yes/No 問句：Be動詞/助動詞 + 主詞 + ...? ／ Do/Does/Did + 主詞 + 原形動詞...?\nWH 問句：疑問詞 + be動詞/助動詞 + 主詞 + ...?\n附加問句：肯定句, + 否定簡短問句? ／ 否定句, + 肯定簡短問句?（助動詞需與主要子句一致）",
      derivation: "英語問句的『倒裝』（把助動詞或 be 動詞移到主詞前）是一種語法標記，用位置的改變取代單純的語調上升來標示『這是一個問句』；一般動詞句本身沒有可以倒裝的助動詞，因此借用一個沒有實質語意、只負責時態與人稱的 do/does/did 放到主詞前面。附加問句則是先陳述一個看法，再用相反極性（肯定/否定對調）的簡短問句尋求對方確認，因此極性必須和主要子句相反，而動詞形式必須和主要子句的助動詞一致，才能準確對應同一件事。",
      steps: ["先看主要子句有沒有 be 動詞或情態助動詞，有的話問句與附加問句都直接沿用", "沒有 be 動詞/情態助動詞的一般動詞句，問句與附加問句都要借助 do/does/did", "附加問句先判斷主要子句是肯定還是否定，極性要相反", "WH 問句先確定疑問詞（who/what/when/where/why/how），再接倒裝結構"],
      tips: ["附加問句『前肯定後否定、前否定後肯定』，是最容易忘記反過來的規則", "There is/are 開頭的附加問句用 isn't there/aren't there，不是 doesn't", "I am 的附加問句是特例，用 aren't I，不是 amn't I", "一般動詞句的疑問句別忘了 do/does/did 後面動詞要還原成原形"],
      quiz: { q: "選出正確：Your sister plays the piano very well, ___?", a: "doesn't she。主要子句是一般動詞句（plays）且為肯定句，附加問句要用否定形式並借助 does，故為 doesn't she。" }
    },

    {
      id: 13, grade: 4, domain: "進階句型與閱讀技巧", title: "關係子句",
      summary: "who/which/that 等關係代名詞把兩句話合併，用來補充說明先行詞，是題組長句常見的結構。",
      core: "關係子句（形容詞子句）用關係代名詞（who/whom 指人、which 指事物、that 指人或事物皆可、whose 表所有格）把一個完整句子接在先行詞（被修飾的名詞）後面，補充說明這個先行詞。關係代名詞在子句中同時扮演『連接詞』與『代名詞』兩種角色，取代原本要重複出現的名詞。限定用法（無逗號）表示先行詞範圍被子句限縮到唯一所指；非限定用法（有逗號）則只是附加補充資訊，去掉也不影響先行詞的指稱範圍。",
      clarify: "that 不能用在非限定用法（有逗號隔開的補充說明子句）裡，也不能接在介系詞後面（不能說 the book to that I refer，要用 the book to which I refer 或 the book that I refer to）；which 才能用在非限定子句與介系詞後面。",
      formula: "關係代名詞：who/whom（指人，做主詞/受詞）、which（指事物）、that（指人或事物，限定用法）、whose（表所有，指人或事物皆可）\n限定用法：先行詞 + 關係子句（無逗號，子句是辨識先行詞不可缺少的資訊）\n非限定用法：先行詞, + which/who + 子句,（有逗號，子句只是額外補充）",
      derivation: "關係代名詞之所以能同時當連接詞又當代名詞，是因為它把原本要獨立成句、且會重複提到同一個名詞的兩句話合併成一句：被省略、由關係代名詞取代的那個重複名詞，正是先行詞在子句裡原本該出現的位置（做主詞或受詞），因此關係代名詞的選擇（who/which/whose）取決於先行詞是人是事物，格位（主格/受格/所有格）則取決於它在子句裡原本扮演的文法角色。",
      steps: ["先找出先行詞（被修飾的名詞），判斷是人還是事物", "確認關係代名詞在子句中扮演的角色：主詞、受詞還是所有格", "看子句前後有沒有逗號，決定是限定（無逗號）還是非限定（有逗號）用法", "介系詞+關係代名詞或非限定用法時，避免使用 that，改用 which/who(m)"],
      tips: ["that 不能用在逗號後面的非限定子句，也不能接在介系詞後面", "whose 後面直接接名詞，表示『先行詞的...』，不需要再加所有格代名詞", "限定用法拿掉子句，先行詞會變得指稱不清；非限定用法拿掉子句，句意基本不變", "關係代名詞在子句中做受詞時，口語與非正式書面常可以省略"],
      quiz: { q: "選出正確：The woman ___ called you yesterday is my aunt.", a: "who。先行詞 the woman 是人，且關係代名詞在子句中做主詞（called you），故用 who（或 that）。" }
    },
    {
      id: 14, grade: 4, domain: "進階句型與閱讀技巧", title: "假設語氣",
      summary: "與現在事實相反用過去式，與過去事實相反用過去完成式，動詞形式要跟著「事實的相反時態」倒退一格。",
      core: "假設語氣用來描述『與事實相反』或『不太可能發生』的情況。與現在事實相反：If + 主詞 + 過去式動詞（be 動詞一律用 were）, 主詞 + would/could/might + 原形動詞。與過去事實相反：If + 主詞 + had + 過去分詞, 主詞 + would/could/might + have + 過去分詞。與未來不太可能發生的事：If + 主詞 + should/were to + 原形, ... 或單純用假設語氣的過去式結構。",
      clarify: "假設語氣中 if 子句的 be 動詞不論主詞是誰，習慣上都用 were（不是 was），例如 If I were you, I would... 這是文法規則上刻意保留的『假設式 be 動詞』，與直述句的 be 動詞用法不同，是常考的細節。",
      formula: "與現在事實相反：If + 主詞 + 過去式(be一律were), 主詞 + would/could/might + 原形\n與過去事實相反：If + 主詞 + had + p.p., 主詞 + would/could/might + have + p.p.\n真實條件句（可能發生，非假設語氣）：If + 現在式, 主詞 + will/can + 原形",
      derivation: "英語用『動詞時態往過去倒退一格』來標記『這件事並非事實、只是假設』：與現在事實相反時，用過去式動詞（本來是敘述過去的形式）借來表達『非真實的現在』；與過去事實相反時，再往前倒退一格用過去完成式，表達『非真實的過去』。這種『時態倒退＝與事實有距離』的邏輯，也是為什麼假設語氣的動詞形式看起來比實際描述的時間點更早一格。",
      steps: ["先判斷是與現在事實相反、與過去事實相反，還是單純敘述可能發生的真實條件", "與現在事實相反：if 子句用過去式，be 動詞固定用 were", "與過去事實相反：if 子句用 had + p.p.，主要子句用 would/could + have + p.p.", "真實條件句（有可能發生）不算假設語氣，if 子句直接用現在式即可，不需要倒退時態"],
      tips: ["If I were you 是固定用法，不論主詞是誰都用 were，不用 was", "與過去事實相反的句子，if 子句與主要子句都要往前多退一格（had p.p. / would have p.p.）", "真實條件句（If it rains, I will stay home.）不是假設語氣，不需要時態倒退", "wish 子句的用法邏輯與假設語氣相同：I wish I were taller.（與現在事實相反）"],
      quiz: { q: "選出正確：If I ___ (be) a bird, I would fly to you.", a: "were。假設語氣與現在事實相反（我不是鳥），if 子句的 be 動詞固定用 were，不論主詞是 I。" }
    },
    {
      id: 15, grade: 4, domain: "進階句型與閱讀技巧", title: "閱讀理解：主旨與大意",
      summary: "找主旨要看標題、首末句與反覆出現的關鍵詞，而不是抓住某一句細節就下結論。",
      core: "會考閱讀題組常考『這篇文章主要在說什麼』『這段文字最可能出自哪裡』等主旨題。判斷主旨的策略是：先看標題或開頭第一、二句（通常點出主題），再看結尾是否有總結或呼籲，並留意全文反覆出現的關鍵詞或同義詞替換；主旨必須能涵蓋全文大部分內容，而不是只對應文章中的某一個細節或例子。",
      clarify: "主旨題最常見的錯誤是選到『文中提到但只是舉例或細節』的選項——這類選項通常敘述精確、聽起來『沒有錯』，但只涵蓋文章一小部分，考生要問自己：這個選項能不能涵蓋『整篇文章』，而不只是其中一段或一句。",
      formula: "主旨判斷順序：標題／首句 → 反覆出現的關鍵詞 → 結尾總結句 → 用『能否涵蓋全文』檢查選項\n常見出題形式：What is this passage mainly about? / What is the best title for this passage? / Where would you most likely see this?",
      derivation: "文章的主旨之所以能從標題、首末句與反覆出現的關鍵詞判斷出來，是因為說明文、廣告、書信等實用文體通常遵循『開門見山＋首尾呼應』的寫作習慣：作者會在開頭先點出主題以便讀者快速掌握方向，在結尾重申或總結，並在全文中不斷圍繞同一個核心概念（即使用不同措辭）展開論述，因此這幾個位置與線索能有效還原作者真正想傳達的整體訊息，而不受個別細節例子干擾。",
      steps: ["先讀標題（若有）與文章開頭一到二句，抓出可能的主題方向", "瀏覽全文，留意重複出現或被同義詞替換的關鍵詞", "看結尾是否有總結、呼籲或重申主題的句子", "檢查選項是否只涵蓋文章的一個細節或例子，排除範圍過窄的選項"],
      tips: ["主旨選項通常比細節選項更概括、更能涵蓋全文", "看到選項只對應文中『某一段』而非全文，通常不是正確答案", "廣告、通知、書信類文章，主旨常和開頭的目的說明直接對應", "文章標題題和主旨題邏輯相同，都要選『涵蓋全文』的答案"],
      quiz: { q: "一篇文章開頭寫『Have you ever wondered why cats sleep so much?』，全文接著解釋貓咪睡眠的原因與作用，這篇文章最可能的主旨是什麼？", a: "說明貓咪為什麼睡這麼多（貓咪睡眠的原因與功能）。開頭的問句點出主題方向，全文內容也圍繞這個主題展開，因此主旨就是解釋貓咪嗜睡的原因。" }
    },
    {
      id: 16, grade: 4, domain: "進階句型與閱讀技巧", title: "閱讀理解：推論、語氣與代名詞指涉",
      summary: "推論題要根據文中線索合理延伸，不能過度腦補；代名詞指涉題則要往前找最近且文法一致的名詞。",
      core: "推論題（What can we infer / learn from the passage?）要求根據文章明確提供的線索，做出『合理但沒有直接寫出來』的推論，答案必須有文字根據支持，不能是天馬行空的猜測，也不能只是文中『直接寫出來』的句子（那屬於細節題而非推論題）。語氣、態度題（What is the writer's tone/attitude?）要從用詞的正負面色彩、標點（如驚嘆號、反問句）判斷。代名詞指涉題（What does it/this/they refer to?）要往代名詞前面找『數與詞性一致』且語意通順的名詞或片語。",
      clarify: "推論題常見誤區是選到『文章完全沒提到、需要額外背景知識才能判斷』的選項，或是選到『和文章邏輯相反』的選項；正確的推論必須是『把文中兩個以上的線索合理連接起來』得到的結論，而不是自行延伸出文章沒有支持的新資訊。",
      formula: "推論題檢查法：選項是否能由文中至少一處線索直接支持？是否只是換句話說文中已明講的句子（細節題陷阱）？\n代名詞指涉：先看單複數是否一致，再看語意代入後是否通順，通常指涉『最近的一個符合條件的名詞』但不是絕對規則，仍要代入檢查語意\n語氣判斷：正面用詞（delighted, impressive, fascinating）→ 正面語氣；負面用詞（frustrated, disappointing, alarming）→ 負面語氣",
      derivation: "推論題之所以要求『有文字根據』，是因為出題者設計這類題目的目的是測驗讀者能否把文章裡分散的線索邏輯連結起來、讀出言外之意，而不是測驗讀者是否具備文章之外的常識或想像力；因此每個正確推論都必然可以回頭在文章中指出支持的具體句子。代名詞指涉題則利用『代名詞必須在數（單複數）與語意上都能替換回原名詞而不改變句意』這個文法限制，來鎖定它所指代的對象，因此檢查方法就是把候選名詞代入原句，看語意與文法是否都通順。",
      steps: ["推論題先在文中找出至少一處能支持該選項的具體線索", "排除『文章沒有提到、需要額外知識』與『與文章邏輯相反』的選項", "代名詞指涉題先確認單複數，再往前找最近且語意代入通順的名詞", "語氣題留意情緒性形容詞、副詞與標點符號透露的正負面態度"],
      tips: ["推論題答案要『能被文章證明』，不是『聽起來合理就好』", "代名詞指涉不一定是最近的名詞，要實際代入句子確認語意通順", "驚嘆號、反問句、誇飾用詞常暗示強烈的情緒或語氣", "選項如果直接照抄文中一句話，通常是細節題答案，不是推論題答案"],
      quiz: { q: "文中寫道：『Sales dropped sharply after the price increase, so the company decided to lower it back.』根據這句話，最合理的推論是什麼？", a: "漲價導致銷售量下滑，公司才因此決定調降價格（漲價與銷售下滑之間存在因果關係）。這是根據句中『漲價後銷售下滑』與『因此決定調降』兩個線索合理連結出的推論，而非文章直接明講的單一句子。" }
    },

    {
      id: 17, grade: 5, domain: "核心字彙與構詞", title: "核心字彙：日常生活與學校",
      summary: "整理教育部基本 2000 字表中，日常生活、學校與交通情境最常出現、也最常見於單題語彙題的字彙。",
      core: "會考單題語彙題常以生活情境句子考「哪個字最符合語意」，取材範圍集中在教育部國中小學英語課程基本 2000 字表中與日常作息（wake up, get dressed, in time for）、學校生活（textbook, classmate, gym, absent）、交通（traffic jam, get on/off, in a hurry）相關的字彙。準備方向是依主題把單字分類記憶，並搭配常見的固定搭配（collocation）一起背，而不是逐字孤立硬背。",
      clarify: "會考字彙題很少考『字義完全生僻』的單字，更常考『兩個意思相近的字，哪一個才符合上下文語氣或固定搭配』（例如 borrow 與 lend 方向相反、arrive 與 reach 的介系詞用法不同），因此準備重點應放在『易混淆的近義字組』，而不是漫無目的擴充生字量。",
      formula: "常考易混淆字組：borrow（向人借入）vs. lend（借出去給人）；arrive at/in vs. reach + 地點（不加介系詞）；bring（帶來）vs. take（帶走）\n主題字彙分類記憶法：先分主題（作息、學校、交通、飲食），每個主題下再依詞性（動詞、名詞、形容詞）分組",
      derivation: "英語單字的意義往往必須依賴使用情境與固定搭配才能精準判斷，因此把單字按主題與情境分類記憶，能同時記住『字義＋典型用法』，比孤立背誦單字表更接近實際考題的判斷方式；而易混淆字組的題目設計，本質上是在測驗考生是否只背了『中文翻譯』還是真正掌握了『使用情境與方向性』（如借入或借出、帶來或帶走），這也是準備字彙題時最需要花時間釐清的部分。",
      steps: ["先判斷題目情境屬於作息、學校還是交通類別", "找出句子裡的方向或介系詞線索（borrow/lend、bring/take 的方向）", "檢查該字是否需要固定搭配的介系詞（reach 不加介系詞、arrive at/in 要加）", "剩餘選項意思相近時，回頭看句子語氣是否符合固定搭配"],
      tips: ["borrow from（跟...借）、lend to（借給...），方向不要搞反", "reach 後面直接接地點，不加介系詞；arrive 後面要加 at/in", "in a hurry（匆忙）、in time for（趕上、來得及）是常考片語", "be absent from school（缺席）是固定搭配，不能只背 absent 忘記介系詞"],
      quiz: { q: "選出最適合的字：Could I ___ your dictionary? I forgot to bring mine.", a: "borrow。句意是「可以跟你借字典嗎」，說話者是要向對方借入，符合 borrow（向人借入）的方向，而不是 lend（借出去給別人）。" }
    },
    {
      id: 18, grade: 5, domain: "核心字彙與構詞", title: "核心字彙：情緒、個性與人際",
      summary: "描述情緒（excited/bored）、個性（confident/stubborn）與人際互動的形容詞，是段落克漏字與題組常見的字彙來源。",
      core: "描述情緒與個性的形容詞常成對出現且容易混淆：『主動 vs. 被動』情緒形容詞（bored 感到無聊 vs. boring 令人無聊、excited 感到興奮 vs. exciting 令人興奮），區分關鍵在於主詞是『感受者』還是『造成該感受的事物』。個性形容詞（confident 有自信的、stubborn 固執的、generous 慷慨的、honest 誠實的）則常出現在人物描述類的閱讀題組中，用來判斷人物特質或行為動機。",
      clarify: "-ed 結尾與 -ing 結尾的情緒形容詞方向常被考生弄反：人（感受者）用 -ed（I am bored.），造成這種感受的事物用 -ing（The movie is boring.）；判斷方法是先確認主詞是『有感覺的人』還是『引發感覺的事物』。",
      formula: "情緒形容詞方向：人（感受者）+ be + -ed（interested, excited, bored, confused）\n事物（起因）+ be + -ing（interesting, exciting, boring, confusing）\n個性形容詞常考組：confident（自信）↔ shy（害羞）；generous（慷慨）↔ stingy（小氣）；honest（誠實）↔ dishonest（不誠實）",
      derivation: "-ed 與 -ing 兩種分詞形容詞其實來自動詞的兩種語態概念：-ed（過去分詞）帶有『被動、承受某種影響』的意味，因此適合形容『被引發某種情緒的人』；-ing（現在分詞）帶有『主動引發、正在造成影響』的意味，因此適合形容『引發這種情緒的事物或情況』，這與被動語態單元中『過去分詞＝承受動作』的邏輯是一致的，可以互相對照記憶。",
      steps: ["先確認主詞是『感受情緒的人』還是『引發情緒的事物或情況』", "人用 -ed 形容詞，事物／情況用 -ing 形容詞", "個性形容詞題目通常要從人物的行為描述反推特質，而非直接寫出答案", "留意個性形容詞的正負面對照組，避免選出語意相反的選項"],
      tips: ["I am bored（我感到無聊）vs. The class is boring（這堂課很無聊），別選錯方向", "個性形容詞常需要從人物行為（如常常分享食物給同學）推論出對應特質（generous）", "confused（感到困惑）vs. confusing（令人困惑），同一組規則適用所有情緒形容詞", "人物描述類題組常要求整合多個線索才能判斷個性，不能只看單一句子"],
      quiz: { q: "選出正確：After hearing the confusing directions, I felt totally ___.", a: "confused。主詞 I 是感受困惑的人（感受者），要用 -ed 形容詞 confused，而不是 confusing（用來形容造成困惑的事物，如前面已出現的 directions）。" }
    },
    {
      id: 19, grade: 5, domain: "核心字彙與構詞", title: "核心字彙：科技、環境與健康",
      summary: "科技、環境保護與健康主題是近年閱讀題組的高頻主題，需要熟悉對應的關鍵字彙與常見句型搭配。",
      core: "近十年會考閱讀題組經常取材自科技（social media, artificial intelligence, device）、環境保護（pollution, recycle, reduce waste, climate change）與健康（diet, exercise regularly, mental health）等時事相關主題。這類題組除了考細節、主旨，也常在字彙題直接考這些主題常用字的拼寫或用法（例如 reduce/reuse/recycle 三個環保動詞的差異、affect 與 effect 的詞性差異）。",
      clarify: "affect（動詞，影響）與 effect（名詞，影響／效果）是最常考的一組同音異詞：句子需要動詞位置就用 affect（Pollution affects our health.），需要名詞位置就用 effect（the effect of pollution on health），判斷方法是先看句子結構需要動詞還是名詞。",
      formula: "環保三動詞：reduce（減少使用）、reuse（重複使用）、recycle（回收再製）——依處理順序記憶\naffect（動詞）↔ effect（名詞）：have an effect on... ＝ affect...\n健康常考搭配：exercise regularly（規律運動）、a balanced diet（均衡飲食）、stay up late（熬夜）、get enough sleep（睡眠充足）",
      derivation: "科技、環境、健康之所以成為閱讀題組的高頻主題，是因為這些議題貼近時事、具有明確的因果或倡議結構（問題→ 原因 → 解決方法／建議），非常適合設計成說明文或議論文形式的閱讀題組，同時也方便出主旨、細節、推論等多種題型；而 affect/effect 這類同音異詞的考點，本質上和字彙單元中『先判斷句子需要的詞性』的策略一致，只是換成主題式字彙來測驗。",
      steps: ["先辨認文章屬於科技、環保還是健康主題，喚起對應的主題字彙", "affect/effect 類同音異詞先判斷句子結構需要動詞還是名詞", "環保類題目留意 reduce/reuse/recycle 三者的先後處理邏輯順序", "健康類題目留意正面（regularly, balanced, enough）與負面（stay up late, skip meals）習慣的對照"],
      tips: ["reduce（源頭減少）→ reuse（重複使用）→ recycle（回收再製），常考排序邏輯", "affect 是動詞，effect 通常是名詞，句子需要哪種詞性決定用哪個字", "artificial intelligence（人工智慧）、social media（社群媒體）是近年科技主題常考詞組", "健康主題常對照『好習慣』與『壞習慣』的字彙，注意正負面方向"],
      quiz: { q: "選出正確：Air pollution can seriously ___ people's health.", a: "affect。句子需要一個動詞連接主詞 Air pollution 和受詞 people's health，因此用動詞 affect（影響），而不是名詞 effect。" }
    },
    {
      id: 20, grade: 5, domain: "核心字彙與構詞", title: "字彙猜測技巧與構詞法",
      summary: "遇到不認識的單字，可透過字首字尾、詞性線索與上下文推敲意思，不必每個字都認得才能作答。",
      core: "閱讀測驗允許在文中出現少量超出基本字彙表的生字（通常會加註中文），但考生仍需要具備『從構詞與上下文猜測字義』的能力：常見字首（un-/dis- 表否定、re- 表再次、pre- 表事先）與字尾（-ful/-less 表有/無某特質、-tion/-ment 表名詞化、-able 表可以...的）能提供詞性與大致方向的線索；再搭配上下文的因果、對比、舉例關係，可以推敲出生字的合理意思，不需要百分之百查得到精確中文翻譯。",
      clarify: "猜字義的目的是『讀懂句子在說什麼、能不能答題』，不是『翻譯出精確的中文字典釋義』；考生常見的錯誤心態是卡在一個生字上反覆糾結，反而忽略了利用前後句提供的線索（例如同位語、舉例、對比連接詞 but/however）就能直接推敲出大致方向。",
      formula: "常見字首：un-/in-/dis-（否定，unhappy, incorrect, disagree）、re-（再次，rewrite）、pre-（事先，preview）\n常見字尾：-ful/-less（有/無，helpful, hopeless）、-tion/-ment/-ness（名詞化，education, agreement, happiness）、-able/-ible（可以...的，comfortable）\n上下文線索：對比詞（but, however, although）暗示反義；同位語、逗號後的補充說明常直接解釋生字",
      derivation: "字首字尾之所以能提供猜字線索，是因為英語有大量詞彙是由固定的詞綴（字首、字尾）加上詞根組合而成，這些詞綴本身帶有穩定、可重複辨識的語意功能（例如 un- 幾乎都表示『不、非』），因此即使不認得整個單字，也能透過拆解詞綴推知大致的詞性與正負面方向；上下文線索則是因為文章寫作時，作者常會用對比、舉例、同位語等方式讓句子前後互相呼應，這種語言結構上的『可預測性』使讀者能反推生字的合理意思，這正是閱讀測驗設計上刻意保留少量生字的用意——測驗『推敲策略』而非單純的背誦記憶。",
      steps: ["先看生字是否有中文加註，若有直接使用", "沒有加註時，先拆解字首字尾，判斷詞性與正負面方向", "回頭看上下文有沒有對比詞（but/however）或同位語、舉例句能直接解釋生字", "確認猜測出的大致意思能不能讓句子或段落語意通順，不要求精確翻譯"],
      tips: ["un-/in-/dis- 開頭的字，先假設是原本字義的『相反』", "-tion/-ment/-ness 結尾通常是名詞，可以幫助判斷這個字在句子裡的角色", "however、but、although 後面常常出現與前面意思相反的線索", "遇到生字不要停頓太久，先猜大致方向、把整句讀完再回頭確認"],
      quiz: { q: "句子：The new policy was unpopular, but the government refused to withdraw it. 依構詞法，unpopular 最可能的意思是什麼？", a: "不受歡迎的。un- 是否定字首，popular 意思是「受歡迎的」，un- 加上去表示相反，即「不受歡迎的」，且後文『政府拒絕撤回』也暗示政策引發負面反應，與此推論一致。" }
    }
  ];

  const domains = [
    { mark: "時", name: "時態文法", desc: "現在式、過去式、未來式、現在完成式與情態助動詞，判斷時間點與動作性質的基礎。", skills: ["先找時間副詞線索，再決定時態", "現在完成式不能搭配精確過去時間點", "情態助動詞後面一律接原形動詞"] },
    { mark: "詞", name: "詞類與修飾", desc: "名詞可數性、代名詞格位、形容詞副詞位置，以及比較級最高級與介系詞固定搭配。", skills: ["連綴動詞後面接形容詞，不接副詞", "比較級最高級先數音節決定規則變化方式", "介系詞多為固定搭配，建議整理清單背誦"] },
    { mark: "構", name: "句型結構", desc: "連接詞子句、動名詞不定詞、被動語態與問句附加問句，把單句擴充成長句的關鍵文法。", skills: ["對等連接詞前後地位要相等", "動詞當主詞受詞時要變動名詞或不定詞", "被動語態只有及物動詞能使用"] },
    { mark: "讀", name: "進階句型與閱讀技巧", desc: "關係子句、假設語氣的進階句構，以及主旨、推論、代名詞指涉等閱讀理解核心技巧。", skills: ["主旨要能涵蓋全文，不是單一細節", "推論必須有文中線索支持，不能腦補", "假設語氣的動詞時態要往過去倒退一格"] },
    { mark: "彙", name: "核心字彙與構詞", desc: "生活、學校、情緒個性、科技環保健康等主題字彙，加上字首字尾的猜字策略。", skills: ["易混淆字組先看方向性（borrow/lend）", "情緒形容詞看主詞是感受者還是起因", "生字先拆字首字尾，再用上下文確認方向"] }
  ];

  const strategies = [
    ["時態判斷", "找線索詞", "先抓時間副詞（yesterday/now/since/always），再決定時態", "把現在完成式和過去簡單式搞混，忽略是否有精確過去時間點"],
    ["情態助動詞語意", "程度分級", "先判斷能力／許可／推測／義務，推測題再抓把握程度高低", "must not（禁止）與 don't have to（不必）方向弄反"],
    ["形容詞副詞辨位", "句構分析", "先看被修飾的是名詞還是動詞/形容詞，連綴動詞後一律用形容詞", "look/feel/sound 後面誤用副詞"],
    ["動名詞不定詞選用", "動詞分類記憶", "先判斷動詞屬於固定接哪一種，介系詞後一律用動名詞", "忘記介系詞後不能接不定詞"],
    ["被動語態判斷", "語意重心轉換", "先問動作執行者重不重要，重要就保留 by，不重要就省略", "對不及物動詞（happen/arrive）誤用被動"],
    ["關係子句判讀", "先行詞定位", "先找先行詞是人是事物，再依子句中角色決定格位", "在非限定子句（有逗號）誤用 that"],
    ["假設語氣時態", "時態倒退一格", "與現在事實相反退一格（過去式），與過去事實相反再退一格（過去完成）", "真實條件句（可能發生）誤用假設語氣的時態倒退"],
    ["閱讀主旨題", "全文涵蓋檢查", "先看標題與首末句，選項要能涵蓋全文而非單一細節", "選到文中提到但只是舉例的細節選項"],
    ["閱讀推論題", "線索連結", "在文中至少找到一處具體線索支持選項，才能視為合理推論", "選到需要額外背景知識或與文章邏輯相反的選項"],
    ["字彙猜測", "構詞拆解", "拆解字首字尾判斷詞性與方向，再用上下文對比詞確認語意", "卡在單一生字，忽略前後句提供的線索"]
  ];

  const archives = [
    [115, 2026], [114, 2025], [113, 2024], [112, 2023], [111, 2022],
    [110, 2021], [109, 2020], [108, 2019], [107, 2018], [106, 2017]
  ].map(([year, western]) => ({
    year, western,
    page: `https://cap.rcpet.edu.tw/exam/${year}/${year}exam.html`,
    paper: `official-data/${year}/${year}-exam.pdf`,
    answer: `official-data/${year}/${year}-answer.pdf`,
    guide: `official-data/${year}/${year}-guide.pdf`
  }));

  const sourcePolicy = [
    { tier: 1, title: "教育部與官方考試資料", badge: "最高優先", rule: "決定英語科考試範圍、題型、題數與時間。任何來源與官方資料衝突時，無條件採官方版本。英語科官方僅公布閱讀試題本的完整題目與答案；聽力試題官方僅公布答案與一般性説明，並未公布逐字稿或音檔，因此本站考卷館僅收錄閱讀部分，並在各處清楚標示此限制。", use: "課綱、會考官方網站、106–115 年英語科官方閱讀題本與答案、試題說明" },
    { tier: 2, title: "教育部國中小英語文基本字彙表", badge: "第二優先", rule: "用來界定字彙單元的收字範圍與難度分級；出現超出表列範圍的生字時，比照官方試題慣例加註中文或依上下文可推知語意。", use: "國民中小學九年一貫課程綱要英語文基本 2000 字表" },
    { tier: 3, title: "公開網路資料與解題技巧", badge: "補充來源", rule: "只收可由文法規則、固定搭配或反例驗證的內容。每條技巧標示『通過／有條件／不採用』；無法追溯的匿名說法不得單獨作為依據。", use: "教師文章、教學影片、學習平台、論壇與社群常見文法口訣，再由本站逐條驗算" }
  ];

  const officialSources = [
    { title: "十二年國教課程綱要", owner: "國家教育研究院", url: "https://www.naer.edu.tw/PageSyllabus?fid=52", role: "決定第四學習階段英語文領域範圍與文法能力指標" },
    { title: "考試科目與題型", owner: "國中教育會考官方網站", url: "https://cap.rcpet.edu.tw/test2.html", role: "核對英語科閱讀、聽力題型、題數範圍與作答時間" },
    { title: "英語科考試內容", owner: "國中教育會考官方網站", url: "https://cap.rcpet.edu.tw/test4-5.html", role: "核對英語科命題依據、字彙範圍與聽力測驗性質說明" },
    { title: "歷屆試題 106–115", owner: "國中教育會考官方網站", url: "https://cap.rcpet.edu.tw/examination.html", role: "所有歷屆英語科閱讀題本、答案、試題說明的版本來源" }
  ];

  const publisherSources = [
    { publisher: "康軒", title: "國中、國小教科用書與輔助教材", url: "https://www.knsh.com.tw/products/school", errata: "https://www.knsh.com.tw/service/errata", role: "文法教學順序、例句表達與最新勘誤交叉檢查" },
    { publisher: "翰林", title: "翰林出版官方網站", url: "https://www.hle.com.tw/user-hle.html", errata: "https://www.hle.com.tw/bulletin_qa_page.html", role: "國中英語各冊文法主題編排順序的第二層對照" },
    { publisher: "南一", title: "南一教育集團官方網站", url: "https://www.nani.com.tw/", errata: "https://www.nani.com.tw/", role: "國中教材體系、字彙分冊安排與出版資訊交叉檢查" }
  ];

  const baseTipAudits = units.flatMap(unit => unit.tips.map((tip, index) => ({
    tip, unitId: unit.id, verdict: "通過", source: "公開教學常見技巧／本站講義",
    condition: index === 0 ? `使用前先確認題目屬於「${unit.title}」且滿足其定義。` : unit.clarify,
    why: `可由本單元的文法規則驗證：${unit.formula.split("\n")[0]}。`
  })));
  const disputedTips = [
    ["現在進行式只能用來講眼前正在做的動作", 1, "有條件", "現在進行式也能表達已安排好的近未來計畫。", "We are leaving tomorrow. 是常見的現在進行式表未來計畫用法，並非只能講當下動作。"],
    ["will 和 be going to 完全同義，可以隨意互換", 2, "有條件", "will 較常用於臨時決定與預測，be going to 較常用於事先計畫或依眼前跡象判斷。", "It's going to rain.（看到烏雲）通常不說 It will rain，因為是依眼前跡象判斷，屬於 be going to 的典型情境。"],
    ["現在完成式可以搭配 yesterday 等明確過去時間", 3, "不採用", "現在完成式不能和明確過去時間點連用，須改用過去簡單式。", "一旦指定精確過去時間，句子重心變成描述過去事件本身，文法上必須用過去簡單式。"],
    ["must not 和 don't have to 意思一樣，都是「不用做」", 4, "不採用", "must not 表示禁止（不可以做），don't have to 表示沒有必要（可以不做但非禁止）。", "You must not smoke here（禁止）與 You don't have to come（不必來，但也可以來）語意方向完全不同。"],
    ["不可數名詞後面也可以直接加 -s 表示複數", 5, "不採用", "常見不可數名詞（information, homework, furniture）不能直接加 -s。", "要表達數量須用 a piece of information、much homework 等量詞結構，而非直接複數化。"],
    ["look、feel、sound 這類動詞後面要用副詞修飾才正確", 6, "不採用", "look/feel/sound 是連綴動詞，後面須接形容詞描述主詞狀態，不是副詞。", "You look tired. 用形容詞 tired 描述主詞的狀態，若改成副詞 tiredly 則不符合文法。"],
    ["形容詞比較級只要字尾加 -er 就一定正確", 7, "不採用", "三音節以上（多數）形容詞須改用 more，不能加 -er，也不能兩者並用。", "difficult 是三音節詞，比較級須用 more difficult，difficulter 或 more difficulter 都不正確。"],
    ["時間介系詞 in/on/at 可以憑中文『在』的語感隨意選用", 8, "不採用", "時間介系詞依範圍大小（年月季節、日期星期、精確時刻）固定對應 in/on/at，需個別記憶。", "in 2024、on Monday、at 3 o'clock 分別對應不同範圍大小的時間單位，並非可任意替換。"],
    ["because 和 so 可以在同一句中一起使用，加強因果語氣", 9, "不採用", "because 與 so 標記同一種因果關係，中文『因為...所以...』的雙重標記在英文文法是重複錯誤。", "應保留其中一個：Because it rained, we stayed home. 或 It rained, so we stayed home.，不能兩者並用。"],
    ["介系詞後面的動詞可以用不定詞（to V）", 10, "不採用", "介系詞後面接動詞時一律要用動名詞（V-ing），不能用不定詞。", "interested in learning 正確；interested in to learn 不符合『介系詞後接名詞性成分』的文法規則。"],
    ["所有動詞都可以改成被動語態", 11, "不採用", "只有及物動詞（有受詞可轉換為被動主詞）才能改為被動語態，不及物動詞沒有被動形式。", "happen、arrive、disappear 等不及物動詞沒有受詞，因此無法被動化。"],
    ["附加問句一律用 do/does/did，不管前面句子是什麼結構", 12, "不採用", "附加問句要跟隨主要子句的動詞類型：有 be 動詞或情態助動詞就重複使用，只有一般動詞句才借助 do/does/did。", "She can swim, can't she?（跟隨情態助動詞 can）而非 doesn't she。"],
    ["that 可以完全取代 which 用在所有關係子句情境", 13, "不採用", "that 不能用在非限定用法（有逗號）的子句，也不能接在介系詞後面。", "非限定子句與介系詞＋關係代名詞的情境須用 which/who(m)，而非 that。"],
    ["假設語氣 if 子句的 be 動詞要依主詞單複數變化", 14, "不採用", "假設語氣（與現在事實相反）中，be 動詞不論主詞為何一律用 were。", "If I were you 是固定用法，即使主詞是第一人稱單數 I，也不用 was。"],
    ["找閱讀主旨只要看文章中出現次數最多的字就好", 15, "有條件", "反覆出現的關鍵詞是重要線索，但仍需搭配標題、首末句與『能否涵蓋全文』綜合判斷。", "有些高頻字只是背景詞彙而非主旨核心，仍需比對選項是否能涵蓋全文而非單一細節。"],
    ["推論題的答案只要『聽起來合理』就可以選", 16, "不採用", "推論必須有文中至少一處具體線索支持，不能僅憑常識或想像合理即可。", "正確推論是把文中線索合理連結的結果，若選項需要額外背景知識或與文章邏輯相反則不成立。"],
    ["bored 和 boring 可以互相替換，意思一樣", 18, "不採用", "-ed 形容『感受情緒的人』，-ing 形容『引發情緒的事物或情況』，方向不同。", "I am bored（我感到無聊）與 The class is boring（這堂課很無聊）主詞角色不同，不可互換。"],
    ["affect 和 effect 是同一個詞的不同拼法，可以互換", 19, "不採用", "affect 是動詞，effect 通常是名詞，句子結構需要的詞性不同，不可任意互換。", "Pollution affects health.（動詞）與 the effect of pollution（名詞）文法角色不同。"],
    ["遇到看不懂的生字就應該停下來查字典才能繼續作答", 20, "有條件", "考場中可先用字首字尾與上下文線索推敲大致方向，不必每個生字都精確查證。", "un-/re-/-tion 等詞綴提供詞性與方向線索，搭配對比詞、同位語常能推敲出足以作答的合理語意。"]
  ].map(([tip, unitId, verdict, condition, why]) => ({ tip, unitId, verdict, source: "公開網路常見說法／本站逐條驗算", condition, why }));
  const tipAudits = [...baseTipAudits, ...disputedTips];

  return { groups, units, domains, strategies, archives, sourcePolicy, officialSources, publisherSources, tipAudits };
})();
