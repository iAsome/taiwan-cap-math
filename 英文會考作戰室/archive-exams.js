// 106–115年官方英語（閱讀）題本逐題轉錄。
// 題幹、選項文字逐字轉錄自教育部「國中教育會考」官方公布的試題本 PDF，
// 正確答案逐題核對官方公布的參考答案（使用座標式 PDF 文字擷取確保欄位對齊）。
// 官方英語科聽力項未公開逐字稿或音檔，因此考卷館只收錄閱讀部分；
// 少數依賴圖片、圖表或版面而無法轉為等義文字的題目，已在各年度 omittedNote 中說明並略過。
window.ARCHIVE_EXAMS = (() => {
  const U = window.ENGLISH_DATA.units;
  const mc = (unitId, difficulty, text, choices, answerIndex, steps, tip, trap, concept, formula) => ({
    type: "mc", unitId, difficulty, text, choices, answer: answerIndex,
    steps, tip, trap, concept: concept || U[unitId - 1].summary, formula: formula || U[unitId - 1].formula
  });
  const attach = (items, passageId, passage, passageTitle) => {
    items.forEach((q, i) => { q.passageId = passageId; q.passage = passage; q.passageTitle = passageTitle; q.setIndex = i + 1; });
    return items;
  };

  // ==================== 106 年 ====================

// 第一部分：單題（第2-15題；第1題因需要看圖作答，已略過，見 omittedNote）
const exam106 = [
  mc(9, 1, "My sister wants to buy a car ___ she doesn’t have enough money.",
    ["because", "but", "if", "or"], 1,
    ["句意是「想買車」與「錢不夠」兩件事互相矛盾，屬於語意上的轉折關係，須用表示轉折的對等連接詞 but 連接。",
     "because 表示原因、if 表示條件、or 表示選擇，皆無法呈現「想要卻做不到」的對比語氣，因此都不是正確答案。"],
    "看到句子前後語意出現「想要」卻「不能」的落差時，直接鎖定表示轉折的 but。",
    "許多考生誤選 because，把「沒有錢」誤認為是「想買車」的原因，而忽略了句意其實是「儘管想買，卻因缺錢而做不到」的轉折關係。"),
  mc(17, 2, "Jim always forgets my birthday. He has asked me many times and still can’t ___ it.",
    ["answer", "celebrate", "remember", "understand"], 2,
    ["句意是 Jim 總是忘記生日，即使問了很多次還是「記不住」，語意最貼近 remember（記得）的否定用法 can't remember。",
     "answer（回答）、celebrate（慶祝）、understand（理解）在語意上都與「一直忘記生日、問了還是記不住」的情境不符，故可刪除。"],
    "先抓住句子的關鍵動作線索（forgets, asked many times, still can't...），再從四個選項中找出語意最連貫的字。",
    "容易誤選 understand，因為「理解」聽起來也算合理，但句子重點在於「記不住」這個動作本身，而非是否理解生日的意義。"),
  mc(19, 2, "The little girl was ___ by a truck on her way home and was badly hurt.",
    ["hit", "led", "lost", "paid"], 0,
    ["句意是小女孩在回家路上被卡車「撞到」而受重傷，語意上只有 hit（撞擊）符合「be hit by a truck」這個常見的意外事故用語。",
     "led（帶領）、lost（弄丟／迷路）、paid（付款）皆與「被卡車撞傷」的事故情境無關，可直接刪除。"],
    "遇到與意外、受傷相關的句子，先鎖定與「碰撞、打到」語意相關的動詞，如 hit、struck。",
    "容易被 lost 干擾而聯想成「迷路」，但句子明確提到 badly hurt（受重傷），只有 hit 才能合理解釋受傷的原因。"),
  mc(1, 2, "Excuse me.  I really need to go now.  My kids ___ for me at school.",
    ["are waiting", "were waiting", "wait", "waited"], 0,
    ["說話者說「現在必須離開」，暗示孩子們此刻正在學校等待，屬於說話當下正在進行的動作，須用現在進行式 are waiting。",
     "were waiting、waited 是過去式／過去進行式，與「現在必須馬上走」的情境時間點不符；wait 是現在簡單式，通常用來描述習慣而非此刻正在發生的動作。"],
    "句子出現 need to go now 這類「當下時刻」的線索時，優先考慮現在進行式。",
    "容易誤選現在簡單式 wait，誤以為只要主詞是複數就好，卻忽略了句意強調的是「此刻正在等」而非習慣性動作。"),
  mc(17, 1, "Amy’s father is very sick.  The doctors can do nothing for him, so Amy went to the temple to ___ for him.",
    ["care", "count", "look", "pray"], 3,
    ["句意是醫生無能為力，Amy 只好去廟裡「祈禱」，最符合語意的字是 pray（祈禱）。",
     "care（在乎/照顧）、count（計算）、look（看）皆無法對應「去廟裡為某人做的事」，可刪除。"],
    "遇到 temple、church 等宗教場所的字彙線索，直接聯想 pray 這類慣用動詞。",
    "care for 雖然也是常見片語（照顧），但語境是「去廟裡」，明顯指向祈求神明保佑，而非直接照顧病人。"),
  mc(17, 1, "I’m glad that my school has students wear ___.  I don’t have to worry about what clothes to wear to school.",
    ["belts", "caps", "gloves", "uniforms"], 3,
    ["句意是「慶幸學校規定學生穿著某物，這樣就不用煩惱要穿什麼衣服上學」，最合理的答案是 uniforms（制服），因為穿制服才會讓人不用煩惱服裝選擇。",
     "belts（皮帶）、caps（帽子）、gloves（手套）都只是單一配件，不會讓人「不必再煩惱要穿什麼衣服」，故不符合句意。"],
    "抓住句子後半段「不必再煩惱穿什麼衣服」這個結果線索，回推最合理的原因字彙。",
    "容易被字面上的「穿戴」動詞 wear 誤導，忽略後半句才是解題的關鍵語意線索。"),
  mc(12, 3, "We are surprised that Sally and Ray decided to get married.  No one knows ___.  They often fight with each other and are unhappy together.",
    ["why", "where", "when", "how"], 0,
    ["句意是「沒有人知道『為什麼』莎莉和雷會決定結婚」，後面補充說明「他們常常吵架、相處不快樂」正是在解釋令人疑惑的原因，因此用 why 對應原因。",
     "where、when、how 分別問地點、時間、方式，皆無法呼應後文「常吵架、不快樂」這個原因線索。"],
    "間接問句（no one knows + wh-word）的疑問詞要根據後面提供的線索（原因、地點、時間等）來判斷，而不是憑句型直覺。",
    "容易忽略後半句其實是在解釋「原因」，誤選語感上常見的 how。"),
  mc(5, 3, "I don’t think Katie will read any one of the books you’ve picked out for her: ___ look(s) very boring.",
    ["it", "one", "some", "they"], 3,
    ["冒號後面的代名詞是用來代稱前面提到的 the books（複數名詞），所以要用複數代名詞 they，動詞也對應複數形 look。",
     "it、one 是單數代名詞，some 語意不明確且不與後面的 look 相配，皆不符合「代稱一整組書」的語意需求。"],
    "代名詞代稱題要先回頭找先行詞的單複數，再選擇對應的代名詞與動詞形式。",
    "容易被句首的 any one（單數形式）誤導而選 it 或 one，但冒號後面其實是在總括說明「這些書」，而不是單指其中一本。"),
  mc(5, 2, "Jenny’s bag is very heavy because ___ filled with toy cars.",
    ["it is", "they are", "there is", "there are"], 0,
    ["空格代稱前面的 bag（單數名詞），且句子需要「主詞＋be動詞」的完整子句結構，所以用 it is（它是）最符合文法與語意。",
     "they are 是複數代名詞，與單數的 bag 不一致；there is/there are 是「存在句」句型，用來表示「有某物存在」，並不適合用來代稱已經提過的 bag。"],
    "先確認空格要代稱的名詞是單數還是複數，再判斷該用人稱代名詞還是 there is/are 存在句。",
    "容易誤選 there is，因為句型結構相似，但 there is/are 是用來『引出新資訊』，而這裡的空格是要『代稱已經提到的 bag』，兩者用法完全不同。"),
  mc(10, 2, "___ a map with you when you go to a place for the first time.",
    ["Have taken", "Take", "Taking", "To take"], 1,
    ["整句話是在給建議，句首沒有主詞、且句意是「祈使句」（帶著地圖去），祈使句的動詞須用原形動詞開頭，因此答案是 Take。",
     "Have taken 是完成式動詞、Taking 是動名詞、To take 是不定詞，三者都不能單獨當作句子開頭的主要動詞使用，不符合祈使句需要原形動詞的文法規則。"],
    "句首沒有主詞、且語意是在下達建議或命令時，直接鎖定原形動詞的祈使句用法。",
    "容易被 To take 或 Taking 這類看似「動詞名詞化」的形式混淆，忘記祈使句一定要用原形動詞開頭。"),
  mc(3, 3, "The weather ___ rainy and cloudy in the last few days.  I hope the sun will come out soon.",
    ["has been", "had been", "will be", "would be"], 0,
    ["in the last few days（過去幾天以來）是現在完成式的典型時間線索，表示這段時間持續到現在的天氣狀態，因此用 has been。",
     "had been 是過去完成式，用於「過去某時間點之前」；will be／would be 是未來式，皆無法對應「過去幾天到現在」的時間範圍。"],
    "看到 in the last few days、for the past week 這類『從過去持續到現在』的時間片語，優先考慮現在完成式。",
    "容易誤選過去式概念強的 had been，忽略現在完成式強調的是『這段時間對現在造成的影響』，而不是單純描述過去某一刻。"),
  mc(13, 4, "All the excuses Nick made ___ a lot about how much he hates to do the job.",
    ["say", "saying", "which say", "to say"], 0,
    ["這句話的真正主詞是 All the excuses，Nick made 是省略了關係代名詞 that/which 的關係子句，用來修飾 excuses，因此句子的主要動詞應緊接在 made 後面，用原形動詞 say 對應複數主詞 excuses。",
     "saying、to say 都不是可以獨立作為句子主要動詞的形式；which say 則會讓句子出現兩個動詞子句卻沒有適當的連接方式，使句子文法不完整。"],
    "遇到「名詞＋子句（省略關代）＋動詞」的長句時，先找出真正的主詞和它省略關係代名詞的子句範圍，再決定主要動詞的形式。",
    "容易被 Nick made 誤認為主要動詞而選擇動名詞或不定詞形式，忽略了 Nick made 其實是修飾 excuses 的省略關代子句，句子真正需要的主要動詞在後面。"),
  mc(6, 2, "Sabine walks so ___ in the apartment that sometimes you don’t even know she’s just passed by.  You wonder if her feet ever touch the floor.",
    ["freely", "lightly", "shyly", "slowly"], 1,
    ["空格用來修飾動詞 walks，須用副詞；句意描述 Sabine 走路輕到讓人聽不出腳步聲，甚至懷疑她的腳有沒有碰到地板，最符合語意的副詞是 lightly（輕輕地）。",
     "freely（自由地）、shyly（害羞地）、slowly（慢慢地）雖然文法上都是副詞，但語意上都無法呼應「幾乎聽不到腳步聲、懷疑腳有沒有碰地」這個線索。"],
    "副詞題除了看文法位置，更要抓住句子後半段提供的具體情境線索來確認語意。",
    "容易誤選 slowly，因為「走得慢」聽起來也合理，但句子強調的重點是『無聲、輕盈』，而不是『速度慢』。"),
  mc(19, 2, "In the past, people thought it was a ___ idea to send e-mails and read news online, but now it is part of our everyday life.",
    ["simple", "popular", "good", "fresh"], 3,
    ["句意對比「過去」與「現在」：現在寄電子郵件、上網看新聞已是稀鬆平常，暗示過去這是一個「新穎、少見」的想法，最符合語意的是 fresh（新奇的、新穎的）。",
     "simple（簡單的）、popular（受歡迎的）、good（好的）雖然語意正面，但都無法精準呼應「過去覺得新奇、現在卻已普及」這個時間對比的核心語意。"],
    "看到 in the past... but now... 這種今昔對比句型，答案通常要呼應『過去少見、現在普遍』的語意反差。",
    "容易誤選語意較籠統的 good 或 popular，忽略句子真正要表達的是「觀念上從新奇變成理所當然」的時間對比，而不是單純的好壞評價。"),
];

// (16-18) 換書活動公告：第18題需要對照日曆圖判斷「星期一公休」，無法純文字轉錄，已略過
const exam106Set1 = [
  mc(15, 2, "What is the book festival for?",
    ["Selling second-hand books.", "Telling people how to choose books.", "Inviting people to change books with each other.", "Knowing what kinds of books are the most popular."], 2,
    ["文章開頭寫道「Bring one book to the Town Library & get another one home for free!」，說明活動的核心精神是帶一本書來換另一本書回家，符合選項 (C)。",
     "文章並未提及販售二手書（A）、教人如何選書（B），也沒有做書籍受歡迎程度的統計（D），這些都不是活動的主旨。"],
    "主旨題要優先看文章開頭最直接說明活動目的的句子，而不是被其中一項細節規定牽著走。",
    "容易被後面關於「不收教科書、漫畫、字典」等細節規定誤導，誤以為主旨與這些限制有關，而忽略了開頭已經明講的換書精神。"),
  mc(16, 3, "Sonja is busy packing some books for the book festival.  Which is most likely one of them?",
    ["An old dictionary of medicine.", "A book of short stories in English.", "A picture book with her own notes.", "A workbook she used in her math class."], 1,
    ["活動規定「All kinds of books EXCEPT school books, comic books, and dictionaries」，且書本必須乾淨、沒有任何文字註記，因此應排除醫學字典（A，屬於字典）、數學課本的練習本（D，屬於學校用書），以及寫滿自己筆記的圖畫書（C，違反「不得書寫」的規定）。",
     "只有 (B) 一本英文短篇故事書，既不是字典也不是學校教科書，也沒有提到被寫上任何筆記，因此是最合理的答案。"],
    "遇到需要排除法的推論題，先把文章明確列出的『排除條件』逐條核對每個選項。",
    "容易忽略活動規定中「書本上不得有任何書寫痕跡」這條細節，誤選看似無害的『寫滿筆記的圖畫書』。"),
];

// (19-21) 露營湖邊的可怕經驗
const exam106Set2 = [
  mc(15, 2, "What happened in the story?",
    ["A killer was caught by the police.", "The writer’s family invited a stranger to dinner.", "The writer’s brother ran to their parents for help.", "A man ran away after he heard the writer’s mother’s voice."], 3,
    ["文章結尾寫道「my mom shouted from far away, and the man hurried off into the dark」，說明整起事件的關鍵轉折是媽媽的喊叫聲讓那名男子逃走，對應選項 (D)。",
     "警察並未真的在文中出現並抓到兇手（A），寫作者的家人並未邀請陌生人共進晚餐（B），也沒有提到弟弟跑去向父母求助（C），這些都與文章描述的事件不符。"],
    "故事類文章的『發生了什麼事』題型，答案通常對應文章結尾的關鍵轉折動作。",
    "容易因為文章提到「想起警察在找的殺人犯」而誤選與警察逮捕有關的選項，但那只是敘述者當下的聯想，並非實際發生的事。"),
  mc(16, 3, "What can we learn about the writer and the man with a bag?",
    ["The man attacked the writer.", "The writer followed the man into the dark.", "The writer did not find out who the man was in the end.", "The man did not want the writer to see things in his bag."], 3,
    ["文中描述男子的袋子掉落後，「quickly put all his things back in the bag and looked at us angrily」，這個動作暗示他不希望別人看到袋中物品，對應選項 (D)。",
     "文章沒有提到男子真的攻擊了作者（A），作者也沒有跟著男子走進黑暗中（B）；而作者其實已經聯想到「他就是警察在找的殺人犯」，並非完全不知道男子身份（C），因此這些選項都不成立。"],
    "推論題要根據角色的具體『動作反應』（如迅速收拾、生氣瞪視）去推敲對方的心理狀態或意圖。",
    "容易誤選 (C)，因為文章沒有『證實』男子的真實身份，但作者心裡已經產生強烈懷疑並感到恐懼，因此不算是『完全沒弄清楚身份』。"),
  mc(20, 2, "How do people feel when they experience something horrendous?",
    ["Angry.", "Sad.", "Scared.", "Tired."], 2,
    ["文章標題與開頭都使用 horrendous（可怕的、駭人的）來形容這次經驗，並描述作者「afraid」、「could not move at all」，可以推知 horrendous 帶來的情緒反應是害怕，對應選項 (C)。",
     "文章沒有呈現生氣（A）、難過（B）或疲累（D）的情緒描述，這些都與 horrendous 經歷帶來的驚恐感受不符。"],
    "遇到考『某個字眼帶來什麼感受』的題目，直接回到文中找出與該情境相關的情緒形容詞或動作描述作為線索。",
    "容易忽略『could not move at all』這個具體反應才是解題關鍵，而僅憑常識猜測情緒。"),
];

// (22-24) Ruth 與 Nate 的對話：請 Nate 幫忙照顧寵物狗
const exam106Set3 = [
  mc(20, 3, "What does the catch mean in the dialogue?",
    ["A plan that starts well but ends badly.", "A fact that everyone knows but never talks about.", "A problem that is hidden behind something good.", "An action that is right in one way but wrong in another."], 2,
    ["the catch 是英文口語中常見的慣用說法，指『看似很好的提議背後隱藏的問題或條件』；對話中 Ruth 先給了球賽門票和訂位這些好處，才提出要 Nate 幫忙照顧狗一整週的請求，符合選項 (C)。",
     "the catch 並非指『先好後壞的計畫』（A）、也不是『大家都知道卻不談的事實』（B）或『對錯各半的行為』（D），這些說法都偏離 the catch 真正強調的『隱藏陷阱』語意。"],
    "the catch 是對話、文章中常見的慣用字彙，遇到類似的問法可以先鎖定『表面是好事、實際藏著條件或代價』的語意方向。",
    "容易被字面上的『抓住』聯想誤導，而忽略了 the catch 在口語中其實是固定用來指『隱藏的附加條件』。"),
  mc(16, 3, "What does it mean in the dialogue?",
    ["Taking care of Charlie.", "Having dinner with Jessica.", "Going to the football game.", "Going to London for vacation."], 0,
    ["Nate 最後說「I need to think about it.」，這裡的 it 指的是他需要考慮的事情，往前對照上下文，Ruth 提出的請求是「讓 Charlie（她的狗）跟 Nate 住一週」，因此 it 指的就是選項 (A) Taking care of Charlie。",
     "與 Jessica 吃晚餐、去看球賽、去倫敦度假都是 Ruth 已經確定要給 Nate 的『好處』，不是 Nate 需要『考慮』的事情，因此選項 (B)(C)(D) 都不符合語境。"],
    "代名詞指涉題要先找到代名詞所在的句子，再往前找最貼近語意、且真正需要『被考慮或猶豫』的具體事件。",
    "容易誤以為 it 泛指整段對話中提到的所有好處，而忽略了唯一讓 Nate 猶豫、需要『考慮』的其實只有照顧狗這件事。"),
  mc(15, 3, "What do we know from the dialogue?",
    ["Ruth will go to London next Saturday.", "Ruth had trouble booking a hotel room in London.", "Nate is the first person that Ruth thought of for help.", "Nate is surprised that Ruth was able to book a table at Leeds."], 3,
    ["Nate 說「But I called them yesterday and they said they were all booked for the year!」，顯示他原本以為訂不到位，聽到 Ruth 已經訂到 Leeds 的位子時感到十分驚訝，對應選項 (D)。",
     "文中並未提及 Ruth 何時出發去倫敦是「下週六」（A，Ruth 提到的是這週五出發）；Ruth 訂旅館遇到困難的說法在文中並未出現（B）；文中也沒有明確說 Nate 是 Ruth『第一個想到』的求助對象（C），因此都不是最貼切的答案。"],
    "細節題要逐句核對對話內容，特別留意角色的驚訝反應（如重複問句、驚嘆號），通常會直接對應正確答案。",
    "容易被時間細節混淆，把『這週五』誤記成『下週六』，或誤把 Ruth 訂位的驚喜反應套用到其他選項。"),
];

// (25-26) 醫師超時工作的抗議文宣
const exam106Set4 = [
  mc(15, 2, "What is this reading for?",
    ["Telling people rules about hospital visits.", "Getting people to stand up and speak for doctors.", "Telling people how to find a good doctor for themselves.", "Getting doctors to share their experiences in saving lives."], 1,
    ["文章結尾直接呼籲「we doctors are asking you to join us on the street this Sunday. Fight together with us on the street so we can fight better for your life in the hospital.」，顯示這篇文章的目的是號召大眾站出來為醫師發聲，對應選項 (B)。",
     "文章並未教人如何找到好醫生（C）、也沒有列出醫院探訪規定（A）或分享醫師救人經驗（D），這些都不是文章真正的訴求。"],
    "說明文或倡議文的主旨題，通常要看文章結尾的呼籲句，那裡最直接點出作者寫這篇文章的目的。",
    "容易被開頭『提醒你注意醫生是否休息足夠』的內容誤導，以為主旨是教人挑選好醫生，而忽略結尾才是真正的訴求重點。"),
  mc(16, 2, "What does this problem mean in the reading?",
    ["Doctors’ long working hours.", "Doctors’ problems with nurses.", "Doctors do not see enough people a day.", "Doctors are not paid enough for their work."], 0,
    ["this problem 出現在段落開頭，往前對照上一段內容，整段都在描述醫師被迫長時間工作、缺乏睡眠的情況，因此 this problem 指的就是選項 (A)。",
     "文章沒有提到醫師與護理師之間的問題（B）、看診人數不足（C）或薪水太低（D），這些都不是前一段落所描述的『問題』內容。"],
    "指涉題中的『this + 名詞』通常代稱前一段落或前一句話所描述的整個情況，要往前一段找對應內容。",
    "容易忽略 this problem 是代稱『長時間工作、沒有足夠休息』這整個現象，而不是隨意連結到醫療體系中其他常見問題。"),
];

// (27-28) Wonky Markt 醜蔬果廣告
const exam106Set5 = [
  mc(15, 2, "What does Wonky Markt care about?",
    ["Supermarkets often sell “seconds” at a lower price.", "Farmers don’t know how to grow fewer “seconds.”", "“Seconds” are thrown away because of how they look.", "People don’t know much about picking fresh “seconds.”"], 2,
    ["文章說明「seconds」因為外觀不好看，常常被超市拒絕、最終被丟進垃圾桶，而 Wonky Markt 正是想要解決『因為長得不好看而被丟棄』這個問題，對應選項 (C)。",
     "文章並未說超市把 seconds 用較低價賣出（A，反而是超市根本不願意收購）、也沒有說農夫不知道如何減少醜蔬果的產量（B），更沒有說一般人不知道如何挑選新鮮的 seconds（D），這些都與文章重點不符。"],
    "找機構或活動『在乎什麼』時，要對照文章描述的『問題現況』與『該機構想解決的目標』是否一致。",
    "容易被 20-40% 這個數字或超市不願意收購的細節誤導，選到只描述現象而非核心關切點的選項。"),
  mc(15, 4, "What do we know about buying the “seconds” from Wonky Markt?",
    ["You can save 20-40% if you shop for a second time.", "If you buy three boxes, you will need to pay NT$900.", "You can choose not only their size but also their shape.", "To win the cookbook, you need to buy at least six boxes."], 1,
    ["文章列出收費規則：每箱 NT$250，另加每箱 NT$50 的服務費，但訂單超過 NT$1,000 則免收服務費；買三箱的總價為 250×3=750 元，加上服務費 50×3=150 元，總共 900 元（未達 1,000 元門檻，因此服務費不能免除），符合選項 (B)。",
     "20-40% 是農產品中『長相不佳』的比例，並非折扣（A）；選擇水果種類的上限是六種而非依箱數決定形狀（C）；文章也沒有提到贏得食譜書需要購買特定箱數（D），這些選項都與文章給的具體規則不符。"],
    "遇到牽涉價格計算的細節題，務必把文章列出的每一條收費規則都代入選項數字實際驗算一次。",
    "容易忽略『訂單超過 NT$1,000 才免服務費』這個門檻條件，誤以為三箱的總價已經超過門檻而計算錯誤。"),
];

// (29-30) Dashing Shuttle 巴士路線變更新聞：第30題需要比對路線地圖圖示選項，無法純文字轉錄，已略過
const exam106Set6 = [
  mc(16, 4, "What can we learn from the reading?",
    ["No buses go from Apple City to Orange Island before the bus line changes.", "Before July 1, those who want to visit Mango Island have to take a bus at Berry City.", "Traveling from Apple City to Grape Town will take less time after the bus line changes.", "Before July 1, Dashing Shuttle does not have buses from Apple City to Peach City."], 0,
    ["文章提到「Dashing Shuttle is the first in the country to open a bus line between Apple City and Orange Island. From July 1, our bus will take you to Orange Island every day!」，『第一個開通』代表在 7 月 1 日之前，蘋果城到橘子島之間根本沒有巴士路線，對應選項 (A)。",
     "文章提到往芒果島的巴士原本需要在 Melon City（瓜城）轉車，而非選項 (B) 所說的 Berry City；往葡萄鎮的路線是 7 月 1 日後『停駛』、須改道轉車，行程時間應變長而非變短（C）；往桃子城的巴士是『增加班次』，暗示 7 月 1 日之前已經有巴士往來，與選項 (D) 的說法相反。"],
    "圖表或路線類文章的推論題，即使地圖無法呈現，也可以透過文字描述中的關鍵詞（如 first to open、stop running、more buses）反推改變前的狀態。",
    "容易把新聞中提到的地名張冠李戴（例如把 Melon City 誤記成 Berry City），或忽略『增加班次』其實暗示原本就已經有班次存在。"),
];

// (31-33) 全球化與美國電影市場的新聞報導
const exam106Set7 = [
  mc(15, 3, "What does the report say about globalization’s influence on the movie world?",
    ["It has changed the way of making movies.", "It has changed a country’s domestic market for movies.", "It has brought together movie makers from around the world.", "It has helped US movies make more money abroad than in the US."], 1,
    ["文章提到 Chart 2 顯示「domestic movies in the five countries are not doing well in their domestic market」，說明全球化讓美國電影盛行，進而衝擊了各國自己的電影市場，對應選項 (B)。",
     "文章沒有提到電影『製作方式』被改變（A）、也沒有提到各國電影人因此團結合作（C）；選項 (D) 提到美國電影『在國外賺得比在美國本土還多』，文章同樣沒有這樣的比較數據，因此都不成立。"],
    "報導類文章的主旨題要鎖定文章反覆強調的核心現象（此處是『本國電影市場受衝擊』），而不是被單一數字（如 85%）牽著走。",
    "容易被開頭『85 人中有 85 人看美國電影』這個吸睛數字誤導，誤選與『美國電影賺更多錢』相關但文章其實沒有比較的選項。"),
  mc(16, 4, "What can we learn from the report?",
    ["The American way of thinking may be changed when it is brought to other countries.", "More and more people are asking their country to help their domestic movie business.", "US movies are popular in foreign markets because English is spoken in many countries.", "The fact that US movies are popular may mean the American way of thinking is popular."], 3,
    ["文章結尾指出，當人們張開雙臂歡迎美國電影時，也等於在認同美國式的思考方式，且『有些國家的人擔心失去的不只是電影市場，還有代代相傳的思考方式』，可以合理推論『美國電影受歡迎』與『美國式思考方式的流行』之間有關聯，對應選項 (D)。",
     "文章沒有提到美國式思考會因為傳到別國而『被改變』（A，事實上是原文化被影響）、沒有提到大眾要求政府扶植國產電影（B），也沒有把美國電影受歡迎的原因歸功於『英語通行』（C），這些推論都缺乏文章根據。"],
    "推論題要把文章中『表面現象』（美國電影賣座）與『作者真正擔心的深層意涵』（文化與思考方式的流失）連結起來，才能找到最貼近作者觀點的選項。",
    "容易只停留在『電影賣座』這個表面事實，而選出邏輯方向相反（如 A 說美式思考『被改變』）的選項。"),
  mc(15, 4, "From the charts, which is true?",
    ["The percentage (%) of US movies has changed the least in Spain.", "In each of the five countries, the percentage (%) of domestic movies has fallen.", "Of all five countries, UK’s domestic movies have the smallest drop in percentage (%).", "When the percentage (%) of domestic movies drops, the percentage of US movies rises."], 1,
    ["文章明確指出「In Chart 2, we can see that domestic movies in the five countries are not doing well in their domestic market.」，這句話涵蓋『五個國家』全部，直接對應選項 (B)。",
     "選項 (A)(C) 都牽涉到特定國家（西班牙、英國）與其他國家相比『變化最小』的細節數據，文章的文字敘述並未提供這類跨國精確比較；選項 (D) 主張『本國電影下滑、美國電影就會上升』的因果關係，文章也未明確做出這樣的推論，因此皆不是最直接、最有文字根據的答案。"],
    "圖表題若原始圖表數字無法取得，優先選擇『文章文字已經明確總結』的選項，而不是需要額外比較數字細節的選項。",
    "容易被看似合理的因果推論（如 D）吸引，卻忽略了文章其實只明確總結了『所有五國都在下滑』這個較保守、有直接文字根據的事實。"),
];

// (34-37) Jerry Stevens 刨冰店經營困境克漏字
const exam106Set8 = [
  mc(2, 3, "Choose the best answer for blank (34) in the passage.",
    ["is", "has been", "used to be", "was going to be"], 2,
    ["文章接下來描述 Jerry 原本經營成功的刨冰店、被稱為 Ice King，但『這一切在對面餅乾店開始賣冰淇淋餅乾後就改變了』，顯示空格描述的是『過去曾經如此、但現在已不再』的狀態，符合 used to be（過去曾經是，現在不是了）的用法。",
     "is 是現在簡單式，has been 表示這個狀態延續到現在，was going to be 表示『原本打算要成為』，這三者都無法呈現『過去確實如此、但現況已經改變』的對比語意。"],
    "遇到句子強調『過去曾經…，但後來改變了』的情境，優先考慮 used to + 原形動詞這個表達過去習慣或狀態、現今已不復存在的用法。",
    "容易誤選 has been，因為現在完成式也牽涉『過去到現在』的時間概念，但 has been 隱含這個狀態『持續到現在仍然成立』，與後文『情況已經改變』的語意相反。"),
  mc(16, 4, "Choose the best answer for blank (35) in the passage.",
    ["things didn’t get better", "he was ready to give up", "the sales of shaved ice finally started to rise", "the cookie shop was not successful for long"], 0,
    ["空格後面接著描述 Dan 工作表現不佳：讓人試吃太多、沒有把握『適量』的分寸、來的人多但買的人少，銷售也沒有隨著夏天成長，這些都是負面發展，因此空格應呼應『情況沒有變好』，對應選項 (A)。",
     "選項 (B)(C)(D) 都描述『情況好轉』或『Jerry 想放棄』，但後文接著描述的是具體變差的細節而非好轉的跡象，也沒有提到 Jerry 想放棄，因此都與後文語意銜接不上。"],
    "克漏字的句意銜接題要往後多讀一段，確認空格後面的具體細節是『支持好轉』還是『支持惡化』的方向，再回頭選擇語氣一致的選項。",
    "容易被字面上 Dan 的『來上班』聯想成情況好轉，忽略了後面段落其實是在鋪陳 Dan 表現不佳、生意更差的負面發展。"),
  mc(16, 3, "Choose the best answer for blank (36) in the passage.",
    ["his only hope died", "good news arrived", "worse trouble came", "the hard time passed"], 1,
    ["空格後面說『它是從對面（餅乾店）傳來的』，接著提到餅乾店正在找店員，而這對 Jerry 來說『是一個能讓 Dan 離開他店裡、又不用真的把 Dan 送走的好機會』，可知這是對 Jerry 有利的消息，對應選項 (B)。",
     "選項 (A)(C) 都是負面消息（希望破滅、更糟的麻煩降臨），與後文『對 Jerry 是個好機會』的正面發展方向相反；選項 (D)『難關已經過去』則與故事後續 Jerry 仍需想辦法拯救生意的情節不符，因此都不成立。"],
    "克漏字題常需要往『後面一整句甚至下一段』找語意呼應的線索，特別是描述『消息／轉折』的空格。",
    "容易被『對面餅乾店』這個地點線索誤導成延續前面『餅乾店搶走生意』的負面語氣，而忽略了這次消息其實對 Jerry 是正面轉機。"),
  mc(2, 3, "Choose the best answer for blank (37) in the passage.",
    ["used to look for", "has looked for", "was looking for", "had looked for"], 2,
    ["承接上一句『有個好消息，是從對面傳來的』，這句話進一步說明當時餅乾店『正在找一名店員』，這是與『好消息傳來』同一個過去時間點正在進行的背景動作，因此使用過去進行式 was looking for。",
     "used to look for 強調『過去習慣性地找』而非當下正在找；has looked for 是現在完成式，語意錯誤地連結到現在；had looked for 是過去完成式，表示『比某過去時間點更早之前』的動作，皆與句子描述『當下正在找店員』的時間點不符。"],
    "描述『過去某個時間點正在發生的背景動作』時，優先考慮過去進行式 was/were + Ving。",
    "容易被字面上『招募店員』這種持續性任務聯想成現在完成式，忽略了整篇文章都是在過去時間軸上敘事，動詞時態應該跟著過去式的敘事基準走。"),
];

// (38-41) Robert Scott 南極探險家的悲劇克漏字
const exam106Set9 = [
  mc(16, 4, "Choose the best answer for blank (38) in the passage.",
    ["hurt his health", "opened his eyes", "cost him his life", "made his dream come true"], 2,
    ["文章第一句先說『第一次遠征讓他成為明星，第二次卻…』，形成強烈對比；配合後文『Scott 最終在返程途中和隊員一一喪命，他自己是最後一個迎向生命終點的人』，可知第二次遠征最終讓他失去了生命，對應片語 cost him his life（使他失去性命）。",
     "選項 (A)(B)(D) 分別是『傷害健康』『開啟眼界』『讓夢想成真』，皆與後文描述『喪命』的悲劇結局不符，只有 (C) 精準對應故事最終的死亡結局。"],
    "克漏字若空格出現在文章開頭做為『伏筆』，可以先讀完全文找出結局，再回頭確認哪個選項與結局語意呼應。",
    "容易被 (D) made his dream come true 誤導，誤以為對比句是『從普通人變成完成夢想的英雄』，而忽略了文章實際上是在鋪陳一個以死亡收場的悲劇故事。"),
  mc(16, 3, "Choose the best answer for blank (39) in the passage.",
    ["he didn’t want to take this trip with others", "he wasn’t the only one who had this dream", "he wouldn’t let anyone else take his prize away", "he couldn’t miss the chance to make his country proud"], 1,
    ["空格後面緊接著說『他將與來自挪威的 Roald Amundsen 展開一場競賽』，說明 Scott 並不是唯一想成為第一個抵達南極點的人，對應選項 (B)。",
     "選項 (A)(C)(D) 分別提到『不想跟別人一起旅行』『不會讓別人搶走獎賞』『渴望為國爭光』，這些說法都與後文單純描述『兩人展開競賽』的中性敘述不符，也沒有文章根據支持。"],
    "空格後面若緊接著具體說明『與誰競爭、發生什麼事』，通常空格本身就是在為這個後續發展做鋪陳說明。",
    "容易忽略後文只是單純描述『competition/race』這個中性事實，而過度腦補選項中帶有負面情緒（如自私、懷疑對方）的選項。"),
  mc(16, 4, "Choose the best answer for blank (40) in the passage.",
    ["And Scott used a popular way for his men to travel fast", "But there were problems to deal with before they traveled", "But Amundsen didn’t know better about animals than Scott", "And their ways of traveling decided which team would win"], 3,
    ["空格後面立刻對比說明『Amundsen 的隊伍用狗、Scott 的隊伍用馬，而馬不擅長在雪地行走，導致 Scott 花了 77 天才抵達南極點，結果發現 Amundsen 已經領先』，顯示兩隊『交通方式的不同』正是決定最終勝負的關鍵，對應選項 (D)。",
     "選項 (A)(C) 都提到 Scott 的隊伍用了『受歡迎的快速交通方式』或暗示他比 Amundsen 更懂動物，這與後文『馬不擅長雪地、拖慢速度』的描述相反；選項 (B) 提到『出發前有問題要處理』，但後文著重的是『交通工具的選擇』而非出發前的問題，因此都不是最貼切的銜接句。"],
    "克漏字空格常常是『主題句』，用來預告接下來一到兩句要詳細說明的具體內容，可以先讀完空格後面的句子再回頭確認。",
    "容易被 (A) 中『popular way』的正面詞彙誤導，忽略了後文其實是在說明 Scott 的馬匹交通方式反而拖慢了他的行程。"),
  mc(16, 4, "Choose the best answer for blank (41) in the passage.",
    ["there was still hope", "no one ever believed him", "the worst had not come yet", "Amundsen had not been honest"], 2,
    ["空格後面描述『他的隊伍帶著破碎的心踏上返程，經歷惡劣天氣與糧食短缺，Scott 的隊員一個接一個死去，他自己是最後一個迎向生命終結的人』，顯示 Scott 當下雖然因為輸給 Amundsen 而受到打擊，但真正的悲劇（死亡）其實還在後頭，對應選項 (C)。",
     "選項 (A)(B)(D) 分別是『仍有希望』『沒有人相信他』『Amundsen 並不誠實』，這些說法都與後文『返程途中隊員相繼喪命、無人生還』的悲慘結局方向相反或無關，因此都不成立。"],
    "故事類克漏字若在情節轉折處出現空格，通常是作者用來『預告接下來還有更糟的事情發生』的伏筆句，要順著故事的悲劇走向去選擇。",
    "容易被『news hit him hard』的表面挫敗誤以為『最壞的已經過去』，而忽略了故事後續其實急轉直下走向全隊喪命的更大悲劇。"),
];

window.__ENG_TRANSCRIBED_106 = {
  minutes: 60,
  omittedNote: "106年英語（閱讀）題本共41題，其中第1題（需依圖片作答的看圖選擇題）、第18題（需對照日曆圖判斷「星期一公休」才能在3/23與3/29間選出答案）、第30題（需比對四張路線地圖圖示選項）純為圖片或圖表內容，無法轉錄為等義文字，其餘38題皆已逐題轉錄並核對官方答案。",
  questions: [
    ...exam106,
    ...attach(exam106Set1, "106-set1", "Do you have some books you don’t want?\nYour old love may be someone’s new favorite.\n\nBring one book to the Town Library & get another one home for free!\n\nWhen & How:\nMarch 2 - March 14 — Bring one book for one book festival card.\nMarch 16 - March 31 — Bring one card for one book you like to read.\n\nWhat books:\nAll kinds of books EXCEPT school books, comic books, and dictionaries.\n\nNotice:\nYour book must be in good shape, without any page missing.\nYour book must be clean, and nothing is written on it.\n\nWant to know more?  Please call 1234-5678.  (We are closed on Mondays.)\n\n— Town Library —", "換書活動公告：市立圖書館的以書換書活動"),
    ...attach(exam106Set2, "106-set2", "I had a horrendous experience last Saturday.\n\nThat day, my family went camping near a big lake.  While my parents were preparing dinner, my brother and I were playing by the lake.  A dirty man appeared from somewhere, and his face was half covered by his hair.  He walked to us and asked for some water.\n\nWhen I gave him water, the bag he carried dropped, and things inside fell out on the grass.  I saw a rope, a knife, and a baseball bat.  The strangest thing was that there were also a woman’s shoe and a ring, and I’m sure they were not his.  The man quickly put all his things back in the bag and looked at us angrily.  At that moment, the picture of a man the police was looking for came to my mind.  He was the crazy killer!  I was so afraid that I could not move at all.\n\nLuckily, before he could get any closer, my mom shouted from far away, and the man hurried off into the dark.", "露營湖畔遇見可疑男子的可怕經驗"),
    ...attach(exam106Set3, "106-set3", "Ruth: I’ve got two tickets for a football game.  The Lions vs. the Sharks, front-row seats, next Saturday.  Interested?  You can take Jessica to the game.\nNate: How did you get the tickets?!  They were all sold out months ago!\nRuth: And a table for two at Leeds.\nNate: Leeds?!  But I called them yesterday and they said they were all booked for the year!\nRuth: Now it’s yours.  You and Jessica can have a lovely dinner there after the game.\nNate: Wait a second.  This is just not like you.  What’s the catch?\nRuth: Well, you know this Friday I’m leaving for my vacation in London, and . . . .\nNate: And what?\nRuth: And I was thinking if Charlie could stay with you next week.\nNate: The whole week?!\nRuth: Please!  I can’t just leave him in my apartment.\nNate: You know I hate that stupid dog!  And he hates me too.\nRuth: Please!  You’re my last hope.\nNate: I need to think about it.\nRuth: OK, but not too long.", "Ruth 請 Nate 幫忙照顧寵物狗的對話"),
    ...attach(exam106Set4, "106-set4", "When you need to see a doctor, surely you will want to see a good one.  But there is one important thing you may never have thought about: Has your doctor rested enough?\n\nDoctors in our country often have to work 34 hours or longer without sleep.  Most of them work 104 hours a week, and some even 150.  (There are only 168 hours a week!)  One report said that a doctor who works such long hours cannot think more clearly than a drunk driver.  Another found that doctors who sleep 5.8 fewer hours than the week before might make 22% more serious mistakes.  Surely no one wants to get in a car that is driven by a drunk driver.  So, how safe would you feel when you are under the care of a tired doctor?\n\nSadly this problem has been around for a long time.  There are no laws about it yet and hospital bosses don’t look like they care either.  And that is why we doctors are asking you to join us on the street this Sunday.  Fight together with us on the street so we can fight better for your life in the hospital.\n\nTime: 1 p.m. May 2nd\nPlace: City Hospital Square", "醫師團體呼籲正視超時工作的抗議文宣"),
    ...attach(exam106Set5, "106-set5", "Have you ever seen a pumpkin that looks like a nose or an apple that looks like a funny face?  They may not look great, but they taste just as good as the pretty ones.  These strange-looking fruit and vegetables are called “seconds.”  About 20-40% of what farmers grow is not so beautiful.  Sadly, these “seconds” seldom arrive at your table, but often go straight into the trash can.  Why?  It’s because supermarkets don’t want to buy them from farmers—they believe their shoppers only love beautiful things.  Because of these “seconds,” some farmers lose a lot of money.\n\nWonky Markt wishes to change this.  We’re helping sell these “seconds.”  Farmers can save them from the trash can, and you can get them at a lower price.\n\nSend us photos of your delicious dishes that are made with our “seconds” to oneandonly@wonkymarkt.com, and you may win our cookbook.\n\n1. NT$250 a box.\n2. You can choose as many as six kinds of fruit and vegetables a box.\n3. Service charge: NT$50 a box.\n4. No service charge if order is over NT$1,000.", "Wonky Markt 幫醜蔬果找出路的廣告"),
    ...attach(exam106Set6, "106-set6", "Below is the news about Dashing Shuttle’s bus line changes.\n\nGreat news for people who travel between Apple City and Peach City!  From July 1, we have three more buses to Peach City every day.\n\nA trip from Apple City to Lemon City or Berry City will take less time.  From July 1, you can go from Apple City to each of the two cities without changing buses.\n\nDashing Shuttle is the first in the country to open a bus line between Apple City and Orange Island.  From July 1, our bus will take you to Orange Island every day!\n\nOur bus line between Apple City and Grape Town will stop running on June 30.  From July 1, changing buses at Guava Town or Banana Town will be the best way to travel.\n\nFrom July 1, our bus runs from Apple City to Mango Island three times a day.  You don’t need to change buses at Melon City anymore.\n\n（原文附有路線地圖圖示，僅列出文字說明部分。）", "Dashing Shuttle 巴士路線變更新聞（第30題因需比對地圖圖示已略過）"),
    ...attach(exam106Set7, "106-set7", "Thanks to globalization, we get to see movies from around the world.  If anyone should feel most excited about globalization, it is US movie makers.  A study in 2001 shows that, for every 100 people who go to the theater, 85 see US movies.  This may be good news for US movie makers, but not for those in other countries.\n\nChart 1 shows the percentages (%) of US movies in five countries in 1984 and in 2001; Chart 2 shows the percentages (%) of domestic movies in the five countries in 1984 and in 2001.  In Chart 1, we can see that US movies have been popular in foreign markets.  In Chart 2, we can see that domestic movies in the five countries are not doing well in their domestic market.  The falling market for domestic movies may be a serious problem, but there is something more important.  When people welcome US movies with open arms, they in fact also say yes to the American way of thinking.  Some people in these countries worry that what is lost may not just be their domestic market for domestic movies, but also their own way of thinking that has been passed down from parents to children.\n\n— Cinema Times, June 5th, 2005", "全球化衝擊下各國電影市場的新聞報導"),
    ...attach(exam106Set8, "106-set8", "Jerry Stevens has been unhappy these months.  He (34) a proud businessman of a successful shaved ice shop.  His highest sales numbers were 1,899 plates a week; people called him “Ice King.”  But all this changed when the cookie shop across the street started selling ice cream cookies.  It took away half of his business.\n\nAnd (35) when Dan, his dead sister’s only son, came to work for him.  Dan was a nice young man with a simple mind, too simple, maybe.  He always let people try some shaved ice for free, but he never learned to see when “some” became “too much.”  Many people came, but few bought.  When the sales did not grow with the heat, Jerry started to worry.  He wanted to send Dan home.  But how could he?  Dan had no family except him.\n\nThen, one day, (36).  And it was from across the street.  The cookie shop (37) a clerk.  For Jerry, it was a great chance to get Dan out of his store without sending him home.  After taking the shopkeeper to several nice dinners, Jerry got Dan the job.\n\nNow Jerry could finally try and save his store.  And maybe Dan would help by sending him a few people who are thirsty from eating too many cookies.", "Jerry Stevens 刨冰店經營困境的克漏字故事"),
    ...attach(exam106Set9, "106-set9", "Englishman Robert Scott is known for leading two trips to Antarctica.  The first one made him a star; the second (38).\n\nAfter his first successful trip, Scott decided to be the first person to stand on the South Pole.  However, (39).  He would be in a race with Roald Amundsen, from Norway.  Both left their countries by ship in June of 1910 and arrived in Antarctica in January of 1911.\n\nAbout ten months later, both teams started their trips down to the South Pole.  (40).  Amundsen’s team used dogs, and Scott’s team used horses.  Because horses weren’t good at traveling on snow, it took Scott’s team 77 days to arrive at the South Pole.  They got there on January 17, 1912, and were surprised to find that Amundsen was ahead of them.  The news hit Scott very hard, but what he didn’t know was that (41).  His team began their long trip home with broken hearts.  After days of terrible weather and little food, Scott lost his men one after another, and he himself was the last one to meet the end of his life.  No one on his team lived to go back home and tell their story.  It was only learned through Scott’s diary.", "探險家 Robert Scott 南極悲劇的克漏字故事"),
  ],
};

  // ==================== 107 年 ====================

// 第一部分：單題（第2-15題；第1題因需要看圖作答，已略過，見 omittedNote）
const exam107 = [
  mc(17, 1, "The ___ is so strong today that my hair keeps blowing in the air.",
    ["rain", "snow", "sun", "wind"], 3,
    ["句意描述某樣東西很強、讓頭髮一直被吹起來，最符合語意的字是 wind（風），因為風大才會讓頭髮飄動。",
     "rain（雨）、snow（雪）、sun（太陽）都無法解釋『頭髮一直被吹起來』這個具體的動作結果，因此可以刪除。"],
    "看到『頭髮被吹動』這類具體動作線索時，直接聯想與風、氣流相關的字彙。",
    "容易被『today 很強』這種天氣泛稱誤導去想天氣現象詞，而忽略了『頭髮飄動』才是精確指向 wind 的關鍵線索。"),
  mc(2, 2, "When the baby cried, Mr. Wu ___ in the kitchen and did not hear it.",
    ["cooked", "was cooking", "has cooked", "is going to cook"], 1,
    ["句子描述『當寶寶哭的時候』（when 引導的過去簡單式子句），Mr. Wu 正在廚房做某件事，這是過去某一刻正在進行、被另一個過去動作（cried）打斷的情境，須用過去進行式 was cooking。",
     "cooked 是過去簡單式，語意上會變成兩個動作先後發生而非同時進行；has cooked、is going to cook 分別是現在完成式與未來式，時態基準點都與句子的過去時間軸不符。"],
    "when + 過去簡單式子句，搭配另一個『正在做某事被打斷』的情境時，主要子句通常用過去進行式。",
    "容易誤選過去簡單式 cooked，忽略了句意強調『哭的當下，煮飯這件事正在進行中』，而不是兩件事先後發生。"),
  mc(2, 2, "I don’t have any money with me because I ___ my wallet this morning.",
    ["had lost", "would lose", "lost", "was losing"], 2,
    ["this morning 是明確的過去時間點，且『弄丟皮夾』是已經在過去某個時刻發生並結束的動作，須用過去簡單式 lost。",
     "had lost 是過去完成式，用於『比某個過去時間點更早發生』的動作，但這裡並沒有更早的過去時間點可以對照；would lose、was losing 分別是條件語氣與過去進行式，皆與『this morning 明確弄丟』的語意不符。"],
    "句子出現 yesterday、this morning、last night 等明確過去時間詞時，直接選用過去簡單式。",
    "容易誤選 had lost，把『現在完成式強調結果』的概念套用到需要單純描述過去事件的句子上。"),
  mc(17, 1, "You need not only good luck but also hard work to become a ___ baseball player.",
    ["young", "successful", "happy", "friendly"], 1,
    ["句意是『需要好運與努力才能成為一個怎樣的棒球選手』，語意上最合理的是 successful（成功的），因為好運與努力正是成功的要素。",
     "young（年輕的）、happy（快樂的）、friendly（友善的）都與『需要好運和努力才能達成』的語意不符，這些特質通常不需要靠好運或努力累積。"],
    "先看句子前半段提供的原因或條件（好運、努力），再回推最合理對應的結果形容詞。",
    "容易被字面上『棒球選手』直接聯想到與運動相關的字，而忽略了句子真正要問的是『好運＋努力』所導向的成果特質。"),
  mc(18, 1, "The woman who lives next door to Ken is a ___ to him.  They have never met and he doesn’t even know her name.",
    ["daughter", "friend", "stranger", "teacher"], 2,
    ["句意是『他們從未見過面，他甚至不知道她的名字』，這正是形容『陌生人』的典型情境，符合 stranger。",
     "daughter（女兒）、friend（朋友）、teacher（老師）都是需要彼此認識或有特定關係的稱謂，與『從未見過面、不知道名字』的描述矛盾。"],
    "遇到人際關係詞彙題，先確認句子提供的關係線索（是否認識、是否見過面），再選擇對應的稱謂字。",
    "容易忽略『雖然住在隔壁』這個表面上的親近感，而誤以為住得近就該選擇 friend 這類熟識的關係詞。"),
  mc(17, 2, "With the new bus line, it is much more ___ for Fanny to go to school.  It saves her a lot of time now.",
    ["useful", "possible", "interesting", "convenient"], 3,
    ["句意是新公車路線讓 Fanny 上學『更省時』，最符合『省時、方便』語意的字是 convenient（方便的）。",
     "useful（有用的）、possible（可能的）、interesting（有趣的）都無法精準對應『省下很多時間』這個具體好處，因此不是最佳答案。"],
    "看到句子後半段補充說明『省時間』這類具體好處時，優先選擇語意最貼近『方便』的字。",
    "容易誤選 possible，誤以為句子在強調『原本不可能，現在變得可能』，但句意其實只是單純描述『變得更方便省時』。"),
  mc(2, 2, "Dad: Have you brushed your teeth yet?\nAnn: No, but I ___ before I go to bed.",
    ["haven’t", "have", "won’t", "will"], 3,
    ["Ann 回答『還沒刷牙，但睡前會刷』，這是對未來動作的承諾／預測，須用 will + 原形動詞。",
     "haven't、have 是現在完成式的簡答，用來回答『是否已經做過』，但這裡要表達的是『尚未做，但之後會做』的未來動作；won't 是否定的未來式，與句意『之後會刷牙』的肯定承諾相反。"],
    "回答『還沒做，但等一下／之後會做』的情境時，直接鎖定表示未來意願的 will。",
    "容易被句首的 No 影響，誤選同樣帶有否定意味的 won't，卻忽略了句意其實是『還沒刷，但待會兒會刷』的肯定未來承諾。"),
  mc(12, 2, "Alice: Do you know ___ Grandma is going to visit us?\nWilly: It’s next week.  She told me on the phone.  And we’ll take her to the national park.",
    ["where", "when", "whether", "why"], 1,
    ["Willy 的回答『It's next week』是在回答『什麼時候』，因此 Alice 問句中的疑問詞應該對應時間，用 when。",
     "where、why、whether 分別問地點、原因、是否，皆無法對應『下週』這個時間答案，因此不符合句意。"],
    "間接問句的疑問詞要看後面回答者實際給出的資訊類型（時間、地點、原因等）來反推。",
    "容易忽略 Willy 的回答其實已經直接透露了正確的疑問詞方向，而只憑句型直覺猜測。"),
  mc(10, 3, "It took the police lots of time ___ who entered Liu’s house and killed her one year ago.",
    ["and found out", "find out", "finding out", "to find out"], 3,
    ["句型「It takes/took + 時間 + to V」是固定句型，表示『做某件事花費多少時間』，因此空格須用不定詞 to find out。",
     "find out（原形動詞）不能直接接在時間片語後面；finding out（動名詞）與 and found out 都不符合這個固定句型的文法結構。"],
    "看到「It takes/took + 一段時間」這個句型時，直接鎖定後面要接不定詞 to V。",
    "容易誤選動名詞 finding out，忽略了「It takes + 時間 + to V」是固定用不定詞的句型，不能替換成動名詞。"),
  mc(11, 3, "Many famous people visit this restaurant.  Popular singers like A-mei and Jay Chou ___ here with their friends.",
    ["to be often seen", "often seen", "are often seen", "and are often seen"], 2,
    ["句子的主詞 Popular singers 是被『看到』的對象（別人看到他們，而不是他們主動看人），且句意是描述經常性的被動狀態，須用現在簡單式被動 are often seen。",
     "to be often seen 是不定詞形式，不能單獨作為句子的主要動詞；often seen 缺少 be 動詞，文法不完整；and are often seen 多了不必要的連接詞 and，會讓句子結構錯誤。"],
    "句子主詞是動作的『承受者』（被看到）時，優先考慮被動語態 be + 過去分詞。",
    "容易忽略主詞『歌手』其實是被顧客看到的對象，而誤用主動語態的語感去選擇缺少 be 動詞的選項。"),
  mc(19, 2, "The factory has been throwing trash into the river for years.  Now ___ must be taken to stop this.",
    ["action", "chances", "exercise", "notes"], 0,
    ["句意是『必須採取某種行動來阻止工廠汙染河川』，符合固定片語 take action（採取行動）的用法，因此答案是 action。",
     "chances（機會）、exercise（運動）、notes（筆記）都無法與『must be taken to stop this』的語意搭配，也不是常見的固定搭配。"],
    "遇到環保、社會議題類句子搭配『must be taken』時，優先聯想固定片語 take action。",
    "容易被 exercise 的『採取』動作聯想混淆，但 take exercise 指的是『做運動』，與『阻止河川汙染』的語意完全無關。"),
  mc(17, 3, "The beach party tonight ___ the end of our summer vacation.  Tomorrow we are all going back home and getting ready for school.",
    ["changes", "marks", "passes", "saves"], 1,
    ["句意是『今晚的海灘派對標誌著暑假的結束』，符合固定用法 mark the end of...（標誌著...的結束），因此答案是 marks。",
     "changes（改變）、passes（經過）、saves（節省）在語意上都無法表達『象徵、標誌著某個階段結束』的意思，因此不符合句意。"],
    "看到『某事件代表某個階段的開始或結束』的句意時，優先聯想固定搭配 mark the beginning/end of。",
    "容易誤選 changes，誤以為句意是『派對改變了暑假』，但句子其實是在說『這場派對象徵著暑假結束』，兩者語意方向不同。"),
  mc(20, 3, "Anyone who reads Loren’s business plan will quickly see some serious problems in it, or ___ feel something is not right.",
    ["at least", "even", "in fact", "still"], 0,
    ["句意是『任何人讀了這份企劃書都會很快看出嚴重問題，或「至少」會感覺到有些不對勁』，at least（至少）精準對應『就算沒有看出明確問題，也會有這種程度的感覺』的退讓語氣。",
     "even（甚至）、in fact（事實上）、still（仍然）都無法表達『退一步說、最低限度』的語意，與句子『看出問題』和『感覺不對』之間的程度落差不符。"],
    "句子中出現『看出明確問題』與『模糊的感覺』兩種程度不同的描述、並用 or 連接時，通常要選表示『退一步、最低限度』的 at least。",
    "容易誤選 even，誤以為句子要強調『甚至會感覺不對』的加強語氣，而忽略了原句其實是在對比『看出問題』與『只是隱約感覺』兩種較弱的可能性。"),
  mc(9, 2, "I’ve wanted to read The Diary of a Young Girl for months, ___ today I finally borrowed the book from the library.",
    ["and", "since", "so", "until"], 0,
    ["句子前後兩件事（『想讀這本書好幾個月』與『今天終於借到書』）語意方向一致、地位相等，須用對等連接詞 and 連接。",
     "since、so、until 都是從屬連接詞或帶有特定邏輯關係（自從/所以/直到）的字，用在這裡會使句意變得不通順或改變原本『單純敘述兩件連續發生的事』的語氣。"],
    "兩件事情語意方向一致、只是單純描述先後發生的關係時，優先考慮用對等連接詞 and。",
    "容易誤選 so，誤以為『想讀這本書』是『去借書』的原因，但句子其實只是單純敘述一個持續已久的心願『終於』實現，並非因果關係。"),
];

// (16-18) 公園長椅驚魂記：喊話的女子其實在叫她的寵物蛇下長椅
const exam107Set1 = [
  mc(16, 3, "Choose the best answer for blank (16) in the passage.",
    ["like a snake", "that could move", "except a little snake", "that could make noise"], 2,
    ["句子描述 Robert 停下來四處張望，卻『沒看到任何東西，除了一條小蛇』，這正好呼應下一句『Robert 看到牠後不久，牠就不見了』，說明他當下瞥見的其實是一條蛇，對應選項 (C)。",
     "(A)(B)(D) 都在描述『某種東西』的特徵（像蛇的、會動的、會發出聲音的），卻沒有明確點出『看到的就是一條蛇』這個關鍵事實，無法完整銜接下一句 Robert saw it 中 it 所指涉的具體對象。"],
    "故事類克漏字要留意下一句是否直接呼應並具體點出空格所指的對象，藉此反推最精準的答案。",
    "容易被『anything that could move/make noise』這類籠統描述吸引，卻忽略了故事需要明確交代『看到的到底是什麼』，才能讓後文的 it（那條蛇）有清楚的指涉對象。"),
  mc(16, 4, "Choose the best answer for blank (17) in the passage.",
    ["climbing up the bench", "running after a woman", "stopping beside his feet", "falling down from a tree"], 0,
    ["空格後面接著說『Robert 太害怕而不敢離開長椅』，可知他剛才看到的蛇此刻正朝著他所坐的長椅靠近，最合理的情境是蛇正『爬上長椅』，對應選項 (A)。",
     "(B)(C)(D) 描述蛇在追女人、停在腳邊或從樹上掉下來，這些情境都無法合理解釋『為什麼 Robert 會嚇得不敢離開自己坐的長椅』，因此都不是最貼切的答案。"],
    "推論空格內容時，要特別注意後一句所描述的具體反應（如『不敢離開長椅』），並反推出能造成這個反應的合理情境。",
    "容易被 (C) stopping beside his feet 這種同樣『在附近』的描述混淆，但『停在腳邊』並不會讓人特別『不敢離開長椅』，只有『爬上自己坐的長椅』才會造成這種持續的恐懼與僵住不動。"),
  mc(16, 4, "Choose the best answer for blank (18) in the passage.",
    ["The bench is broken", "The seat has been taken", "People will be scared by you", "The paint of the bench is still wet"], 2,
    ["結合文章結尾的反轉：喊話的女子其實是在對她的『寵物蛇』Robert 說話，要牠從長椅上下來，最合理的理由是『你會嚇到別人』，對應選項 (C)。",
     "(A)(B)(D) 分別描述長椅壞掉、位子被佔、油漆未乾，這些都是講給『人類』聽的合理理由，但故事真正的對象其實是一條寵物蛇，只有『嚇到別人』才能同時解釋女子要蛇下來的原因，也呼應故事的反轉笑點。"],
    "遇到帶有結局反轉的故事型克漏字，務必讀到文章最後一句才能確認角色真正的身份，再回頭選擇符合反轉邏輯的答案。",
    "容易在還沒讀到結尾反轉前，直接假設喊話對象是人類 Robert，因而誤選『位子被佔』這類只適用於人類情境的答案。"),
];

// (19-21) 蘇黎世限制汽車進城的聰明做法
const exam107Set2 = [
  mc(15, 3, "Choose the best answer for blank (19) in the passage.",
    ["to make traffic lighter", "to invite people to visit", "to make itself a famous city", "to build more parking spaces"], 0,
    ["空格後面接著具體說明策略：『維持停車位總數不變』，目的是讓人們覺得停車困難、進而減少開車，這整體策略都是為了『減少交通流量』，對應選項 (A)。",
     "文章通篇強調蘇黎世『歡迎人，但不歡迎車』，並非要吸引人來訪（B）或把自己變成知名城市（C）；而『維持車位總數不變』其實與『增建更多停車位』（D）的方向完全相反，因此都不成立。"],
    "主旨題除了看文章開頭，也要留意緊接在空格後面的具體策略說明，用來反推空格所歸納的整體目的。",
    "容易誤選 (D)，把『調整停車位』誤解成『增加停車位』，但文章明確說明的是『總數不變』甚至『讓人覺得更難停車』的策略。"),
  mc(9, 3, "Choose the best answer for blank (20) in the passage.",
    ["This way", "However", "For example", "Also"], 3,
    ["前一段描述的是『維持停車位總量不變』這項策略，這一段接著介紹『計算全市車輛總數』這『另一項』策略，兩段之間是補充、並列的關係，須用 Also（此外）銜接。",
     "This way（用這種方式）通常用來承接『結果』而非引入『新的一項並列策略』；However（然而）表示轉折對比，但兩段策略方向並不衝突；For example（例如）用於舉出前面說法的具體例子，但這一段是全新的策略，不是前段的例子，因此都不符合語意。"],
    "文章介紹『第一項做法…（另起一段）第二項做法…』時，段落開頭的連接詞通常要選表示補充、並列的 also 或 in addition。",
    "容易誤選 For example，把『計算車輛數』誤認為是『維持停車位不變』這項策略底下的例子，卻忽略了這其實是完全獨立的第二項新策略。"),
  mc(12, 3, "Choose the best answer for blank (21) in the passage.",
    ["why Zurich is doing this", "what all this has cost Zurich", "if Zurich should try other ways", "if Zurich can deal with angry drivers"], 0,
    ["空格後面直接接著『答案很簡單：這座城市想為市民創造更多空間』，這正是在回答一個『為什麼』的問題，因此空格應該是 why Zurich is doing this。",
     "(B)(C)(D) 分別問『花費多少成本』『是否該嘗試其他方法』『能否應付憤怒的駕駛人』，這些問題的答案都無法對應到『城市想為人民創造更多空間』這句直接給出的解釋，因此都不是正確的間接問句內容。"],
    "間接問句題只要往後找到『The answer is...』這類直接給出解答的句子，就能反推前面的疑問詞或問句內容。",
    "容易被文章前面提到的『市民不滿意、駕駛人必須等待』等細節誤導，誤選與『抱怨、成本』相關的選項，而忽略了句子後面已經直接給出『為什麼』的明確解答。"),
];

// (22-24) 度假公寓的優點介紹
const exam107Set3 = [
  mc(15, 2, "What is the reading mostly about?",
    ["Where to find a nice holiday apartment.", "How to choose a nice holiday apartment.", "Why one should choose a holiday apartment.", "How one can change their house into a holiday apartment."], 2,
    ["文章開頭先描述旅館太貴、青年旅舍太擁擠的缺點，接著介紹『度假公寓』並逐一說明它空間大、便宜、適合多人同住等優點，全文重點在於『說明為什麼該選擇度假公寓』，對應選項 (C)。",
     "文章並未提供尋找度假公寓的地點資訊（A）、也沒有教人如何挑選（B），更沒有教人如何把自己的房子改建成度假公寓（D），這些都不是文章的主旨。"],
    "主旨題要綜合文章『先破後立』的寫作結構：先點出既有選項的缺點，再說明新選項的優點，主旨通常落在『為什麼推薦這個新選項』。",
    "容易誤選 (B)，把文章列舉的『優點說明』誤認為是『挑選方法』，但文章從頭到尾都是在『說服讀者選擇』而非提供『挑選步驟』。"),
  mc(16, 3, "From the reading, what can we learn about holiday apartments?",
    ["They are good for people who like to take one-day trips.", "They are good for people who travel in a group of three or more.", "They are good for people who want to make new friends when traveling.", "They are good for people who like to spend their holidays in the country."], 1,
    ["文章提到『度假公寓的價格是以兩人計算，只要為第三或第四位旅客多付一點點費用即可』，也就是人數愈多、平均下來愈划算，因此最適合『三人以上一起旅行』的族群，對應選項 (B)。",
     "文章沒有特別提到適合一日遊旅客（A）；比起交朋友，文章強調的是『擁有自己的完整空間』而非社交（C）；文章也沒有特別強調度假公寓多位於鄉間（D），因此都不是文章明確支持的推論。"],
    "遇到『適合什麼樣的人』這類推論題，先找出文章描述的具體優勢（如按人數計價的方式），再回推最能受益的族群。",
    "容易誤選 (A)，把『度假』的字面聯想成『一日遊』，但文章描述的是『在公寓內擁有完整生活空間過夜』的旅遊型態，並非一日來回的短程旅行。"),
  mc(20, 2, "What does it mean to say that something is at your disposal?",
    ["You are free to use it.", "You can find it everywhere.", "You know everything about it.", "You can buy it at a lower price."], 0,
    ["文章接著具體說明『客廳、廚房、書房，當然還有臥室，都完全供你自己使用』，可知 at your disposal 是指『可以自由使用』，對應選項 (A)。",
     "(B)(C)(D) 分別是『到處都找得到』『你完全了解它』『可以用較低價格買到』，這些說法都與『供你自由使用』的語意方向不同，也沒有文章根據支持。"],
    "遇到片語猜義題，直接看緊接在後面的具體例子（如『客廳、廚房都供自己使用』），通常就是該片語最直接的解釋。",
    "容易被 disposal 聯想到『處置、丟棄』等常見字義，而忽略了在這個上下文中，at one's disposal 其實是『供某人自由運用』的固定片語。"),
];

// (25-26) SHARP WEAR 訂製T恤的購物流程說明
const exam107Set4 = [
  mc(15, 2, "What is the quick lesson of SHARP WEAR about?",
    ["How to get to one of SHARP WEAR’s stores.", "How to send back a T-shirt to SHARP WEAR.", "How to shop for a T-shirt from SHARP WEAR.", "How to take care of a T-shirt from SHARP WEAR."], 2,
    ["這份『快速上手教學』依序列出八個步驟：選 T 恤款式、顏色、是否要圖案、是否要口袋、口袋顏色、尺寸、數量，最後結帳，整體流程就是在教顧客『如何在 SHARP WEAR 訂購一件 T 恤』，對應選項 (C)。",
     "文章沒有說明如何前往 SHARP WEAR 的門市（A）、如何退貨（B），也沒有教人如何保養 T 恤（D），這些都不是這份教學的內容。"],
    "遇到步驟條列式的說明文，先掃過每個步驟的關鍵動作，確認整體流程指向『購物』還是『退換貨』等其他目的。",
    "容易被『pocket』『size』『color』等細節字眼分散注意力，而忽略了這些細節其實都只是『訂購 T 恤』這個大流程底下的子步驟。"),
  mc(15, 3, "What can we learn about SHARP WEAR?",
    ["You have to order at least four T-shirts each time.", "You can choose from sixteen colors for both the T-shirt and the pocket.", "Some of the T-shirts have pictures on both the front side and the back side.", "T-shirts in the wrong sizes cannot be sent back if they have pictures or pockets on them."], 1,
    ["步驟2提到 T 恤顏色『多達 16 種顏色可選』，而步驟5又提到口袋若要不同顏色，同樣可以『再一次從 16 種顏色中選擇』，可知 T 恤本身與口袋都各自提供 16 種顏色選項，對應選項 (B)。",
     "文章沒有規定每次至少要訂購四件 T 恤（A）；文章提到的是『T 恤上的圖案』選擇（可選 72 張圖片或自己寄圖），並未提到正反面都能印圖案（C）；文章也沒有提到尺寸不合的 T 恤若已加印圖案或口袋就不能退換（D），這些細節文章都未提及。"],
    "流程圖類文章的細節題常常需要把『分散在不同步驟』的相關資訊（如兩次出現的『16種顏色』）串連起來才能確認答案。",
    "容易只看到步驟2的『16種顏色』就作答，卻忽略步驟5其實又重複提供了一次口袋顏色的16色選項，導致誤判『只有T恤本身有16色可選』。"),
];

// (27-28) 描寫春天甦醒的短詩
const exam107Set5 = [
  mc(15, 2, "Which season is this poem about?",
    ["Spring.", "Summer.", "Autumn.", "Winter."], 0,
    ["詩中明確寫道「Winter is gone; spring has come」，並描述大地穿上紅與綠、空氣清新香甜，最後一段更直接說「The springtime brings us cheer」，皆直接點出這首詩描寫的季節是春天，對應選項 (A)。",
     "詩中雖然提到「The summer heat is not yet here」，但這是用來說明『夏天的炎熱還沒到』，正好用來強調現在還處於春天，而非在描寫夏天、秋天或冬天，因此 (B)(C)(D) 都不成立。"],
    "描寫季節的詩詞題，直接找詩中明講季節名稱的句子（如 winter is gone、spring has come）即可快速確認答案。",
    "容易被詩中出現的 summer heat 字眼誤導，忽略了那句話其實是在說『夏天的炎熱「還沒」來』，用意是強調此刻仍是春天。"),
  mc(20, 2, "What is a daisy?",
    ["A body part.", "A kind of bird.", "A kind of flower.", "A kind of smell."], 2,
    ["詩中寫道「People call the flower the 'day's eye.'」，直接點出 daisy 就是前面提到的 the flower（那朵花），可知 daisy 是一種花，對應選項 (C)。",
     "daisy 在詩中被描述成『從睡夢中醒來、張開眼睛』，這只是詩人賦予花朵擬人化的修辭手法，並非真的指身體部位（A）、鳥類（B）或氣味（D）。"],
    "詩詞中若有明確的同位語句（如『人們稱這朵花為...』），直接依照那句話的定義作答即可，不需要被擬人化的修辭誤導。",
    "容易被『waking...from her sleep』『opens her eye』這類擬人化描述誤導，誤以為 daisy 是在講某種身體部位或動物，而忽略了詩中已經明講它是『花』。"),
];

// (29-31) 動物「濕狗甩」的科學研究：第31題需比對老虎、貓、老鼠甩動速度的圖表選項，無法純文字轉錄，已略過
const exam107Set6 = [
  mc(15, 3, "What does the reading say about shaking?",
    ["Different animals’ shaking begins with different body parts.", "Shaking is a way that animals use to make other animals scared.", "Animals that are not kept as pets do the shaking better than those that are.", "Shaking themselves dry may help animals run faster in dangerous moments."], 3,
    ["文章最後一段指出，弄濕的身體會讓動物變重、跑起來更吃力，而『能不能跑得快』往往決定動物在野外能否存活，因此甩乾身體其實也關係到危急時刻能否順利逃跑或求生，對應選項 (D)。",
     "文章沒有提到甩水動作依身體部位『開始方式』因動物種類而不同（A，文章反而說所有動物都是從頭開始甩到尾巴）；文章重點也不是比較『被飼養』與『野生』動物誰甩得比較好（C）；文章雖提到甩水可以甩掉水滴，但並未提及以此嚇跑其他動物（B），因此都不是文章真正強調的重點。"],
    "說明文的細節題要留意文章最後一段通常會點出『這個現象背後更深層的原因或意義』，而不只是描述表面動作。",
    "容易只停留在『甩乾身體』這個表面動作，而忽略了文章最後特別強調『甩乾與逃命速度』之間的因果關係才是重點。"),
  mc(16, 3, "What can we learn from the reading?",
    ["The animal’s tail can help it run more quickly and easily.", "Some animals shake more than they need to get water off.", "The idea of washing machines came from the shaking of dogs.", "Larger animals get themselves drier at each shake than smaller animals."], 3,
    ["文章提到『體型較小的動物甩水速度必須比體型較大的動物快』，並舉例老鼠一秒甩18次、狗甩6次、熊只需甩4次，且『體型較大的動物只需要較少次數的甩動就能把身體弄乾』，可以推知體型愈大的動物，每甩一次能甩掉的水分比例愈高，對應選項 (D)。",
     "文章沒有提到尾巴能幫助動物跑得更快更輕鬆（A）；文章是說『狗甩水的效果比洗衣機好』，而不是洗衣機的發明『來自』狗甩水的靈感（C）；文章也沒有提到有些動物『甩得比實際需要的還多』（B），因此都缺乏文章根據。"],
    "遇到牽涉數字比較的推論題（如不同動物的甩動次數），可以把文字敘述換算成『次數愈少、效率愈高』的邏輯關係來驗證選項。",
    "容易把『狗甩水比洗衣機厲害』這個比喻誤解成『洗衣機的靈感來自狗甩水』的因果關係，但文章其實只是在做效果上的比較，並未提及發明的由來。"),
];

// (32-34) Josh 與 Eric 討論「待用咖啡」計畫的對話
const exam107Set7 = [
  mc(16, 3, "What does things like that mean?",
    ["Problems about the free coffee plan.", "Trouble for people who go to Flora Café.", "Ways to make the free coffee plan successful.", "Good things free coffee will bring to Flora Café."], 0,
    ["Eric 在說「things like that」之前，一直提出各種質疑：會不會真的兌現、要怎麼判斷該給誰、窮人會不會因為顧面子而不敢去要，這些全都是針對『待用咖啡計畫』可能出現的問題，因此 things like that 指的就是選項 (A)。",
     "(B)(C)(D) 分別提到『對想喝咖啡的人造成麻煩』『讓計畫成功的方法』『免費咖啡帶來的好處』，這些說法都與 Eric 實際上提出的『各種質疑與擔憂』方向不符，也沒有精準對應他反覆提出的問題。"],
    "代名詞或片語指涉題若出現在對話中，要往前整理說話者『反覆提出的同一類論點』，而不是只看緊鄰的前一句。",
    "容易只看最靠近的一句『他們會不會顧面子』就以偏概全，忽略了 Eric 從頭到尾提出的其實是一連串類似性質的質疑，things like that 是統稱這整類問題。"),
  mc(16, 3, "What can we learn about Josh and Eric?",
    ["Josh was not able to change Eric’s mind about free coffee.", "Eric has more hope for the free coffee plan than Josh does.", "They found a way to make people feel OK to take free coffee.", "They do not know whether Flora Café will do business honestly."], 0,
    ["整段對話中，Eric 不斷提出各種疑慮（是否兌現、如何判斷該給誰、窮人是否會顧面子），Josh 雖然一一回應，但到對話結束前 Eric 仍然說「Well, it may happen.」，顯示他的疑慮並未真正被打消，對應選項 (A)。",
     "文章沒有顯示 Eric 對這個計畫『比 Josh 更有信心』（B，事實恰好相反）；兩人並沒有真的『想出讓人安心領取咖啡的方法』（C，Eric 的疑慮從頭到尾都沒解決）；對話中 Josh 明確表示信任老闆是誠實的人（D，因此並非『不確定店家是否誠實經營』），因此都不成立。"],
    "判斷對話雙方的互動關係時，留意對話結束前雙方是否『達成共識』還是『各自保留立場』。",
    "容易被 Josh 積極辯護的語氣誤導，以為他成功說服了 Eric，但 Eric 的最後一句話其實仍然保留質疑，顯示他的想法沒有被真正改變。"),
  mc(15, 2, "What do we know about Flora Café from the dialogue?",
    ["It has a way to know who really is poor.", "Free coffee has brought it more business.", "People pay less for free coffee than other coffee.", "Its blackboard shows if there are free coffees to be taken."], 3,
    ["Josh 提到「He's got a blackboard in the shop that says how many cups are paid for and how many have been given out.」，說明店裡有一塊黑板記錄已付費與已送出的咖啡杯數，讓人可以知道是否還有可領取的免費咖啡，對應選項 (D)。",
     "文章沒有提到店家有辦法確認誰『真的』是窮人（A，Eric 正是質疑這一點，Josh 回答『只能相信人』）；文章沒有明確說待用咖啡『帶來更多生意』（B）；文章提到的是『幫別人付一杯咖啡的錢』，而非『免費咖啡比其他咖啡便宜』（C），因此都不成立。"],
    "細節題要直接在對話中找出具體描述『這家店有什麼設施或做法』的句子，逐字對照選項內容。",
    "容易誤選 (A)，把 Josh『相信老闆誠實』誤解成『店家有辦法確認誰是真正的窮人』，但這其實正是 Eric 質疑、而 Josh 承認『無法確認、只能信任人』的地方。"),
];

// (35-37) 為部落傳統捕鯨辯護的議論文
const exam107Set8 = [
  mc(15, 3, "Below are the writer’s points in the reading:\na. Whether we should stop tribespeople whaling\nb. The problem of whaling\nc. Whaling as a way of life\nIn what order does the writer talk about his points?",
    ["a  c  b.", "b  c  a.", "c  a  b.", "c  b  a."], 1,
    ["第一段先描述鯨魚數量銳減、大家認為應該全面禁止捕鯨，這是在點出『捕鯨造成的問題』（b）；第二、三段接著說明部落原住民自古以來如何靠捕鯨維生、捕鯨已成為他們生活方式的一部分，這是在談『捕鯨作為一種生活方式』（c）；最後一段才提出『我們應該想清楚，禁止部落捕鯨等於要求他們放棄什麼，這樣做是否真的是解決捕鯨問題最好的答案』，這是在討論『是否該禁止部落捕鯨』（a），因此順序是 b→c→a，對應選項 (B)。",
     "其餘排列組合（a c b、c a b、c b a）都無法對應文章實際的段落安排，只有 b c a 完全符合文章由『問題現況』到『部落生活方式』再到『該不該禁止』的論述順序。"],
    "判斷文章論述順序的題目，先把每個論點對應到具體的段落，再按照段落出現的先後排列即可。",
    "容易被文章第一句『鯨魚數量銳減』的震撼開場誤導，以為作者一開始就在討論『是否該禁止部落捕鯨』，而忽略了這其實只是先鋪陳整體問題背景。"),
  mc(16, 4, "Which idea may the writer agree with?",
    ["We should stop all kinds of whale hunting.", "We should not worry about the number of whales.", "Tribespeople’s way of living is as important as animal lives.", "Working with the whaling business can make tribespeople’s lives better."], 2,
    ["文章最後強調，過去四十年被捕殺的鯨魚中只有 10% 是部落原住民所獵捕，其餘 90% 都是商業捕鯨造成，並呼籲大家在禁止捕鯨前，應該想清楚這樣做等於要部落原住民放棄什麼，顯示作者認為部落的傳統生活方式與鯨魚保育同樣值得重視，對應選項 (C)。",
     "作者並未主張『應該全面禁止一切形式的捕鯨』（A，反而是在為部落捕鯨辯護）；作者也沒有說『不必擔心鯨魚數量』（B，文章開頭仍肯定鯨魚數量下降是個問題）；文章也沒有提到『與商業捕鯨業合作能改善部落生活』（D），因此都不是作者真正支持的立場。"],
    "判斷作者立場的推論題，要留意作者花最多篇幅『辯護』或『強調』的對象，通常就是作者真正想傳達的核心觀點。",
    "容易因為文章開頭提到『鯨魚數量銳減、應該停止捕鯨』，就誤以為作者主張全面禁止捕鯨，卻忽略了後面大篇幅其實是在為『部落捕鯨』辯護，並非贊成全面禁止。"),
  mc(15, 2, "What can we learn from the reading?",
    ["Tribespeople believe whales bring good luck.", "Tribespeople become rich by selling whale oil.", "Whaling was not a problem until 1,500 years ago.", "Whaling helped tribespeople’s lives in different ways."], 3,
    ["文章提到部落原住民獵鯨是為了取得肉類作為食物來源，還會把鯨脂做成油、用來製作蠟燭或油燈，顯示捕鯨在『飲食』與『照明』等不同層面上都幫助了他們的生活，對應選項 (D)。",
     "文章沒有提到部落相信鯨魚帶來好運（A）；文章描述的是捕鯨『維持基本生活所需』，並未提及部落因賣鯨油而『致富』（B）；文章明確指出捕鯨早在1,500年前就已開始、且『在數量下降、成為問題之前』就進行了很長一段時間，因此並非『直到1,500年前才成為問題』（C，此選項時序錯置），故都不成立。"],
    "細節題只要逐段核對文章明確列出的具體用途（食物來源、製作蠟燭油燈等），就能找到最直接呼應的選項。",
    "容易把『捕鯨已有1,500年歷史』與『捕鯨問題出現的時間點』混淆，誤選描述時序錯誤的選項。"),
];

// (38-41) 化名得獎作家 Thomas Goode 的新聞報導
const exam107Set9 = [
  mc(15, 2, "From the news story, which fact is seen as a new turn?",
    ["Carolyn Cole is a first-time writer.", "Carolyn Cole won the Inscriber Prize.", "Carolyn Cole is not the winner’s real name.", "Carolyn Cole did not appear for the Inscriber Prize."], 2,
    ["文章第三段開頭寫道「Now here comes another 'first time' for the Inscriber: Cole is not real.」，明確點出這篇新聞的最新轉折是『Carolyn Cole 其實不是真實的人名』，對應選項 (C)。",
     "Carolyn Cole 是否為新人作家（A）與她未現身領獎（D）都是『上週已經知道』的舊消息；而『獲獎』本身也早已公布，並非新轉折（B），只有『得獎者其實另有其人』才是這篇報導真正要爆出的新消息。"],
    "新聞類文章的『最新進展』題，通常要找『now / but now / here comes another』這類明確標示時間轉折的句子。",
    "容易把『上週已經公布的得獎消息』（A、D）誤認為是這篇報導的新爆點，而忽略了文章特別用 now 標示出『真實身份曝光』才是真正的新轉折。"),
  mc(16, 3, "Which is most likely true about the Inscriber Prize?",
    ["It was started by NBN News.", "It is a new prize for picture books.", "It is a prize only for first-time writers.", "It is treated seriously by writers in the country."], 3,
    ["文章形容 Inscriber Prize 是「the country's biggest book prize」，也就是全國最大的文學獎項，可以合理推論這個獎項在該國作家心目中具有相當份量、備受重視，對應選項 (D)。",
     "文章沒有提到這個獎項是由 NBN News 創辦（A，NBN 只是報導這則新聞的媒體）；文章也沒有說這是專門給圖畫書設立的新獎項（B，得獎的 Paper Soldier 並非圖畫書）；文章雖提到這是首次由『新人作家』得獎，但並未說這個獎『只頒給』新人作家（C），因此都不成立。"],
    "遇到『某個獎項/機構最可能的性質為何』的推論題，可以從文中形容詞（如 biggest）合理推知其地位與受重視程度。",
    "容易把『這是首次由新人作家得獎』的描述，誤解成『這個獎項只頒發給新人作家』，但文章其實只是強調這是『史上第一次』，並未限定得獎資格。"),
  mc(15, 3, "What can we learn about Thomas Goode?",
    ["He has won the Inscriber Prize twice.", "He told NBN that Paper Soldier was his work.", "He wants to be more than just a picture book writer.", "His life as a picture book writer has not been successful."], 2,
    ["文章提到 Goode 過去曾嘗試寫『嚴肅』的書籍（Parent），且朋友透露他『想用別的名字寫書，這樣如果人們不知道作者是圖畫書作家，或許會更認真看待這本書』，顯示他一直希望能突破『圖畫書作家』的形象，對應選項 (C)。",
     "文章沒有提到 Goode 曾經兩度獲得 Inscriber Prize（A，他是以化名 Cole 才第一次獲獎）；文章也沒有說 Goode 曾親自向 NBN 承認 Paper Soldier 是他的作品（B，是他的朋友告訴 NBN 相關計畫，文中並提到『目前 Goode 尚未發表任何回應』）；文章描述的是他身為圖畫書作家其實相當成功（暢銷破百萬本），並非『不成功』（D），因此都不成立。"],
    "人物類細節題要留意文中『朋友轉述』與『當事人親自表態』的差異，避免把間接消息誤認為當事人的直接證實。",
    "容易誤選 (D)，把『他想寫嚴肅作品卻乏人問津』誤解成『他身為圖畫書作家並不成功』，但文章其實明確說明他的圖畫書相當暢銷、得過兩座全國性書獎。"),
  mc(15, 2, "What do we know about Thomas Goode’s books?",
    ["The sales of Parent were bad.", "Paper Soldier is his best-selling book.", "His first picture book came out in 2006.", "Blue Moon was written under a different name."], 0,
    ["文章提到 Goode 在 2006 年出版的《Parent》「there was little interest in Parent」，也就是這本書乏人問津、銷售不佳，對應選項 (A)。",
     "暢銷紀錄（超過一百萬本）的描述是給《Blue Moon》，而非以化名發表的 Paper Soldier（B）；《Blue Moon》才是 Goode 最為人知的暢銷圖畫書，文章並未說它在 2006 年出版（C，2006年出版的是《Parent》）；《Blue Moon》是用 Goode 本名發表，並非用不同筆名（D，用化名發表的是 Paper Soldier），因此都不成立。"],
    "多本書名同時出現的細節題，務必把每本書名對應的『年份、銷售狀況、作者名義』一一釐清，避免張冠李戴。",
    "容易把文中出現的多本書（Blue Moon、Parent、Paper Soldier）的細節互相混淆，例如誤把《Blue Moon》的暢銷紀錄套用到《Paper Soldier》上。"),
];

window.__ENG_TRANSCRIBED_107 = {
  minutes: 60,
  omittedNote: "107年英語（閱讀）題本共41題，其中第1題（需依圖片作答的看圖選擇題）與第31題（需比對老虎、貓、老鼠甩動速度快慢的四張圖表選項）純為圖片或圖表內容，無法轉錄為等義文字，其餘39題皆已逐題轉錄並核對官方答案。",
  questions: [
    ...exam107,
    ...attach(exam107Set1, "107-set1", "Robert likes to take a walk in the park after work.  One day when he was walking in the park, he heard a woman calling his name.  He stopped to look around, but didn’t see anything (16).  Shortly after Robert saw it, it was gone.\n\nThough Robert felt a little strange, he did not think about it too much and sat down for a rest on a bench in the park.  Then he noticed the snake he had just seen (17).  Robert was too afraid to move away from the bench.  Right at this moment, a woman behind him shouted, “Come here, Robert.  You can’t stay on the bench like that.  (18).”\n\nIn surprise, Robert turned around and said to the woman, “Excuse me, but that’s not a very nice thing to say, and in fact some people say I’m handsome.”\n\n“I’m not talking to you,” said the woman.  “I’m telling Robert, my pet snake, to get down from the bench, not you.”", "公園長椅驚魂記：其實在叫寵物蛇下長椅的克漏字故事"),
    ...attach(exam107Set2, "107-set2", "If you cannot live without your car, Zurich might be the last city you would like to visit.  In Zurich, people are welcome, but cars are not!  Over the past 20 years, this city has used smart ways (19).  One is to keep the same total number of parking spaces.  For example, if 50 new parking spaces are built in one part of the city, then 50 old spaces in other parts are taken away for other uses.  So the total number does not change.  Some are unhappy that there are never enough spaces.  That is just what the city has in mind: If people find parking more difficult, they will drive less.\n\n(20), the total number of cars in the city is counted.  Over 3,500 little computers are put under Zurich roads to check the number of cars that enter the city.  If the number is higher than the city can deal with, the traffic lights on the roads that enter the city will be kept red.  So drivers who are traveling into Zurich have to stop and wait until there are fewer cars in the city.  Now, you may wonder (21).  The answer is simple: The city wants to make more space for its people.", "蘇黎世限制汽車進城的聰明政策克漏字"),
    ...attach(exam107Set3, "107-set3", "What kind of place do you usually choose to stay for the night during a trip?  Expensive hotels that may make you feel like you don’t get what you pay for?  Or cheap hostels that put you and five other strangers in the same bedroom?  If both choices sound terrible to you, here’s something new: holiday apartments.\n\nIn a holiday apartment, you have more space than what a hotel room can give you.  Everything in the apartment is at your disposal.  The living room, the kitchen, the study, and, of course, the bedrooms are all for your own use.  Some apartments even have a lovely garden or a game room.  You’ll feel at home in the holiday apartment.  The best thing is, a holiday apartment is not expensive.  The price for a holiday apartment is for two people, and the apartment is often cheaper than a hotel room for two.  You only need to pay a little more for a third or fourth person.  If you travel with friends or your family, a holiday apartment will be your best choice!\n\n— Edward’s Travel Tips", "度假公寓優點介紹的旅遊專欄"),
    ...attach(exam107Set4, "107-set4", "SHARP WEAR: A T-shirt like no other!\nFirst time here?  Don’t worry!  Here is our quick lesson for you!\n\n1. What kind of T-shirt do you like?  (4 kinds of T-shirts to choose from!)\n\n2. What color for the T-shirt?  (We have as many as 16 colors!)\n\n3. Want a picture on your T-shirt?\nNo, thank you.\nOh yes!  (Now choose from one of our 72 pictures or send us your own!)\n\n4. Pocket?  No pocket?\nI don’t need one.\nOf course!  What kind of pocket then?  (We’ve got 4 shapes for you!)\n\n5. How about a different color for the pocket?\nNo, thank you.  (Same color as the T-shirt.)\nWhy not?  (Choose from the 16 colors AGAIN!)\n\n6. Your size?  (7 sizes for you!)\n\n7. How many T-shirts do you want?\n\n8. Finally, you can pay! ☺", "SHARP WEAR 訂製T恤的線上購物流程說明"),
    ...attach(exam107Set5, "107-set5", "The sky is turning bright and clear.\nThe earth is wearing red and green.\nWinter is gone; spring has come.\nThe air smells fresh and sweet.\n\nThe summer heat is not yet here;\nA little fox comes out to play.\nA bird is busy in a tree\nWaking a daisy from her sleep.\n\nLittle daisy, little daisy,\nPeople call the flower the “day’s eye.”\nWhen she opens her eye,\nThe springtime brings us cheer.", "描寫春天甦醒景象的短詩"),
    ...attach(exam107Set6, "107-set6", "When we get wet, we need a towel to get ourselves dry.  When a dog gets wet, all it needs is to shake its body.  A study in 2010 showed that a wet dog can throw off half the water on its body by shaking for less than a second.  In fact, this common act of dogs works better than a washing machine.\n\nThe study found that animal shaking begins with the head and ends with the tail.  During a shake, the animal’s head, body and skin all move.  Smaller animals must shake faster than bigger animals to get water off.  For example, in one second, a rat can shake 18 times, a dog 6 times, and a bear 4 times.  Bigger animals can get their bodies dry with fewer shakes.\n\nFor animals, shaking is not just about getting themselves dry.  It is also about saving their lives.  Being wet makes animals heavier, and that makes it harder to run.  In the animal world, how fast an animal can run often decides whether it will live or not.  Maybe that’s why the “wet-dog shake” has become a common habit of many animals.\n\n（原文第31題附有比較老虎、貓、老鼠甩動速度的圖表選項，僅列出文字說明部分。）", "動物「濕狗甩」甩水求生的科普報導（第31題因需比對圖表選項已略過）"),
    ...attach(exam107Set7, "107-set7", "Josh: Do you know about “pay it forward coffee” at Flora Café?\nEric: You mean you pay for a cup of coffee for someone poor to have it later?\nJosh: Yeah.  A cup of coffee is not much, but on cold winter days like today, it might warm them up a little.  And maybe their hearts too.\nEric: But will Flora Café really give this cup of coffee to someone later?\nJosh: Come on.  I’ve known the shopkeeper well.  He’s an honest man.  He’s got a blackboard in the shop that says how many cups are paid for and how many have been given out.\nEric: But how will they know who to give?  Anyone can ask for it, even if they’re not poor.\nJosh: True, but then I guess they’ll just have to believe in people.\nEric: Perhaps.  But will poor people go and ask for a free coffee?  Won’t they worry about losing face?\nJosh: Why do you always say things like that?\nEric: Well, it may happen.\nJosh: Yeah, I know, but I still think it’s a good thing to do, and it gets people to care about others.", "討論「待用咖啡」計畫可行性的對話"),
    ...attach(exam107Set8, "107-set8", "Over the years, the number of whales has dropped sharply.  From 1946 to 1986, about 340,000 whales were killed.  People worry that children in the future can only see whales in pictures.  They believe all kinds of whaling (whale hunting) should be stopped before it’s too late.\n\nSome people are trying to stop whaling all over the world.  But they fail to notice one fact: Whaling was going on for a long time before the number of whales went down and became a problem.\n\nWhaling started as early as 1,500 years ago.  This was how tribespeople fed their families.  They hunted whales for meat because almost nothing could grow on their land.  They also made whale fat into oil and used it to make candles or oil lamps.  Over the years, whaling became their way of living, and even part of who they are.\n\nTribe whaling is not the thing we should worry about.  Of all the whales that were killed over the past forty years, only 10% were hunted by tribespeople.  The other 90% died at the hands of the money-making whaling business.  When we try to stop all kinds of whaling, we should think what we are asking tribespeople to give up and whether this is the best answer to the problem of whaling.", "為部落傳統捕鯨辯護的議論文"),
    ...attach(exam107Set9, "107-set9", "Guesses about Carolyn Cole have been flying around since last week, and now things have taken a new turn.\n\nLast week Carolyn Cole won the Inscriber Prize, the country’s biggest book prize, with her book Paper Soldier.  Cole herself did not show up for the prize.  It was not only the first time in history that a first-time writer won the prize, but also the first time that the winner did not appear.\n\nNow here comes another “first time” for the Inscriber: Cole is not real.  “She” is in fact Thomas Goode.  Goode is known for his picture books.  His best-known book, Blue Moon, won him two national book prizes and sold over one million copies.\n\nGoode had tried to write “serious” books before.  His first try was Parent, which came out in 2006.  Sadly, Goode’s big name did not help, and there was little interest in Parent.  Goode’s friend told NBN that he wanted to write a book under a different name.  Goode thought that people might treat his book seriously if they did not know it was from a picture book writer.\n\nFor the moment, there has been no word from Goode yet.\n\n— Ryan Kim, 7/15/2013, NBN News", "化名得獎的圖畫書作家 Thomas Goode 新聞報導"),
  ],
};

  // ==================== 108 年 ====================
const exam108 = [
  mc(9, 1, "Ms. Liu usually gives us a lot of homework, ___ she didn't give us any today.",
    ["but", "if", "or", "so"], 0,
    ["前半句「Ms. Liu 平常都出很多功課」與後半句「今天卻沒出功課」語意明顯相反，需要表示轉折的連接詞。", "if 表條件、or 表選擇、so 表結果，三者都無法連接兩個語意相反的分句，只有 but 能表達這種對比關係。"],
    "看到前後句子語意相反（一直如此 vs. 今天卻不同）就選表示轉折的 but。",
    "不要因為句子有兩個分句就直覺選 so 表示因果，需先判斷語意是轉折還是因果。"),
  mc(10, 2, "Playing games on the cellphone ___ popular with high school students.",
    ["is", "are", "being", "to be"], 0,
    ["「Playing games on the cellphone」是一個動名詞片語當主詞，動名詞片語當主詞時，句子動詞要用第三人稱單數形式。", "因為主詞在文法上視為單數，動詞要用 is，不能用 are。", "being 與 to be 都不是限定動詞，不能單獨作為句子的主要動詞。"],
    "動名詞或不定詞片語當主詞時，動詞固定用第三人稱單數。",
    "動名詞片語當主詞時容易被複數名詞 games 誤導而選 are，其實整個片語視為單數。"),
  mc(1, 1, "There ___ more than twenty clubs in our school. Which one would you like to join?",
    ["has", "have", "is", "are"], 3,
    ["「There is/are」句型的 be 動詞要依後面接的名詞單複數決定，此處 more than twenty clubs 是複數名詞。", "has 與 have 不能用於「There + be」句型，只有 is／are 才是正確的存在句動詞形式。"],
    "There is/are 句型中，be 動詞的單複數要看後面接的名詞，而不是句子前面的 There。",
    "不要選 have，have 不能出現在 There 開頭的存在句中，這個句型固定要用 be 動詞。"),
  mc(19, 2, "Diane had a bad cold last week. She is still too ___ to go mountain climbing with you.",
    ["busy", "short", "weak", "young"], 2,
    ["前一句點出「上週感冒」的情境，感冒之後身體虛弱、沒有力氣，最符合 weak（虛弱）的語意。", "busy（忙碌）、short（矮）、young（年輕）都與「剛感冒過」的情境無關，無法解釋為什麼不能去爬山。"],
    "字彙題先掌握句子的情境（剛生病），再挑選符合該情境的形容詞。",
    "不要被 too...to 句型結構分心，重點仍是選出符合語意的形容詞，而非糾結句型本身。"),
  mc(5, 1, "The book under Mary's desk is ___, but I don't know why it is there.",
    ["us", "me", "my", "mine"], 3,
    ["空格是 be 動詞後的補語，語意是「這本書是我的」，表達所有權要用所有格代名詞 mine，可以獨立使用不需再接名詞。", "my 是所有格形容詞，後面一定要接名詞（如 my book），不能單獨使用；us、me 是受格代名詞，不能表示所有關係。"],
    "所有格代名詞（mine/his/hers/ours/theirs）可以獨立代替「所有格＋名詞」，常出現在 be 動詞後表達所有權。",
    "常見誤選 my，忘記所有格形容詞後面一定要接名詞，不能單獨使用。"),
  mc(17, 1, "Last night a garbage truck hit a tree and turned over. Now the street is ___ with lots of garbage.",
    ["dark", "dirty", "heavy", "poor"], 1,
    ["垃圾車翻覆、垃圾灑滿街道，最直接的結果就是街道變髒，符合 dirty 的語意。", "dark（暗）、heavy（重）、poor（貧窮）都無法貼切描述街道被垃圾弄髒的狀態。"],
    "字彙題先看清楚前因（垃圾車翻覆、垃圾灑滿街道）再選最符合結果的形容詞。",
    "不要被 heavy 字面「重」誤導，heavy with 通常用於天氣或空氣，不用於形容路面被垃圾弄髒的狀態。"),
  mc(5, 3, "It almost killed Kevin to take care of his baby sister for one afternoon. He wondered how his mom could do ___ every day.",
    ["her", "it", "one", "them"], 1,
    ["空格代替的是前一句整件事——「照顧妹妹」這個動作／任務，而不是妹妹本人，因此要用代替一件事的 it。", "「do it」在此指「做這件事（照顧小孩）」，若選 her，「do her」不合語意邏輯，因為 do 後面接人時無法表達「照顧」的意思。"],
    "判斷代名詞指涉時，先看代名詞在句中的動詞是否能與「人」或「事」搭配，do 後面接代替一件事的 it 才合乎邏輯。",
    "容易誤選 her，誤以為代名詞指涉句中的人（baby sister），但空格前的動詞是 do，「do her」不符合語意，正確應該代替前面整個「照顧妹妹」這件事。"),
  mc(18, 2, "Joyce tells her brother everything. She never ___ anything from him.",
    ["covers", "believes", "hides", "takes"], 2,
    ["前一句「She tells her brother everything」與後一句形成呼應對比：「從不向他隱瞞任何事」，hide...from someone 正是「向某人隱瞞」的固定用法。", "cover、believe、take 都無法搭配 from him 表達「隱瞞」的意思，語意不符。"],
    "抓住句子前後的邏輯呼應（tells everything ↔ never hides anything），是解此類語意連貫題的關鍵。",
    "不要被 covers 字面「掩蓋」的相似語感混淆，「hide...from someone」才是固定表達「向某人隱瞞」的用法。"),
  mc(17, 1, "Ben always uses his birthday as a(n) ___ to ask Dad to buy him something expensive.",
    ["action", "excuse", "prize", "rule"], 1,
    ["「use A as an excuse to V」是固定用法，意思是「把 A 當作做某事的藉口」，符合句意（拿生日當藉口要求買貴的東西）。", "action（行動）、prize（獎品）、rule（規則）都無法貼切表達「藉口」的概念。"],
    "「use...as an excuse to V」是常考固定片語，先掌握這個片語再選字。",
    "不要被 prize（獎品）與「生日」的聯想混淆，句子重點是「藉口」而非獎勵。"),
  mc(2, 3, "___ that last piece of pie? If not, can I have it? I didn't eat much this morning.",
    ["Had you eaten", "Were you eating", "Do you eat", "Are you going to eat"], 3,
    ["「If not」暗示這是在問對方「接下來、尚未發生」的打算，也就是問對方是否『打算』吃掉那塊派，屬於未來的意圖。", "「Are you going to eat」用來詢問對方近期的計畫，符合語境；had eaten（過去完成）、were eating（過去進行）都是描述過去，do you eat（現在簡單式）是問習慣，皆不符合『詢問接下來打算』的語境。"],
    "「If not」這條線索表示問句在問尚未發生、關於未來計畫的事，才會需要用 be going to。",
    "容易被派已經放在桌上（既定事實）誤導而選過去式，但問句其實在問對方接下來的意圖，而非過去發生了什麼。"),
  mc(8, 2, "Everyone in the class enjoys playing chess ___ Bill; he thinks the game is boring.",
    ["except", "for", "like", "of"], 0,
    ["句子後半段説明 Bill 覺得下棋很無聊，與前半段「大家都喜歡下棋」形成對比，需要表示「除了…之外」的 except。", "for（為了）、like（像）、of（的）都無法表達「排除某人」的語意。"],
    "先找出句子語意的對比（大家喜歡，除了 Bill 不喜歡），再選出符合「除了…之外」的介系詞 except。",
    "不要跟 for（為了）或 like（像）混淆，這些介系詞無法表達「排除」的語意。"),
  mc(2, 2, "In my school days, I ___ to English radio programs every day. That was how I learned English at that time.",
    ["listen", "have listened", "used to listen", "was listening"], 2,
    ["「In my school days」與「That was how I learned English at that time」都明確指出這是已經結束的過去習慣，符合「used to + 原形動詞」描述過去持續但現在已不再發生的習慣。", "listen（現在式）、have listened（現在完成式）都無法表達「過去曾經、現在已不再」的語意；was listening（過去進行式）描述的是某個特定時刻正在做的動作，不是重複的習慣。"],
    "「used to + V」專門用來描述過去持續一段時間但現在已經不再發生的習慣動作。",
    "不要跟現在完成式 have listened 搞混，現在完成式強調與現在的關聯，此句情境明確指向已經結束的過去。"),
  mc(18, 3, "Tom's voice ___ when he talks about his neighbors. He speaks faster, his face becomes redder and you can almost see fire in his eyes.",
    ["appears", "drops", "grows", "rises"], 3,
    ["後半句描述生氣時的生理反應（說話變快、臉變紅、眼中冒火），聲音「rises」（提高、變大聲）最符合情緒激動時的描寫。", "drops（下降）與 appears（出現）的方向與「情緒激動、聲音提高」相反或無關，grows 語意不夠精準對應聲音的變化。"],
    "情緒相關字彙題要通盤看懂整句描述的情緒線索（speaks faster, face redder, fire in eyes），再選出方向一致的動詞。",
    "不要選 drops，這個方向與情緒激動時聲音提高的描寫相反。"),
  mc(5, 3, "___ other waiters in the restaurant have worked here longer than Clark; only Lois and Lana started working here before him.",
    ["All", "Most", "Some", "Few"], 3,
    ["後半句給出具體線索「only Lois and Lana started working here before him」，代表只有極少數服務生比 Clark 資深，符合 Few（很少）的語意。", "All、Most、Some 都表示「相當一部分或全部」，與「只有兩人」這個明確的少數線索矛盾。"],
    "先找出句子後半段給的具體人數線索（only Lois and Lana），再回推空格量詞應該對應「少數」還是「多數」。",
    "不要被 Some 意思相近（也是表示不特定的一部分）混淆，「only...two」的線索明確指向「極少數」，應選 Few 而非 Some。"),
];

const exam108Poem = [
  mc(15, 1, "What are \"Daddy and me\" doing in the poem?",
    ["Eating.", "Singing.", "Dancing.", "Cooking."], 3,
    ["詩題與反覆出現的句子「Making goulash」點出全詩核心動作就是在做菜（goulash 是一種燉菜）。", "詩中「dancing」（馬鈴薯在水裡打轉）、「singing」（湯滾動的聲音）都是用來形容烹飪過程的擬人化修辭，不是父子真的在跳舞唱歌。"],
    "詩中的 dancing、singing 都是用來比喻烹飪過程的擬人化修辭，要抓住反覆出現的核心動作 Making goulash。",
    "容易被字面上出現的 dancing、singing 字眼誤導，誤選跳舞或唱歌，其實這些詞只是形容做菜過程中的動作與聲音。"),
  mc(16, 2, "What can we most likely know about the speaker?",
    ["He seldom understands his father.", "He enjoys his time with his father.", "He often makes goulash for his father.", "He wants to be as famous as his father."], 1,
    ["全詩以溫暖的意象收尾（爸爸的微笑、擁抱、「雖然沉默但一切都已表達」），顯示說話者很珍惜與父親共處做菜的時光。", "「I see what he means」表示他理解父親，而非不理解（排除選項一）；詩中是父親教說話者做菜，不是說話者常做菜給父親吃（排除選項三）；全詩沒有提到想跟父親一樣出名（排除選項四）。"],
    "推論題要從全詩的情感基調（微笑、擁抱、雖然沉默但「everything is said」）綜合判斷說話者的感受。",
    "不要誤選選項一，詩中「I see what he means」正表示他理解爸爸，而非不理解。"),
];
attach(exam108Poem, "108-goulash-poem", `Making goulash
we don't talk much,
Daddy and me.

"The talking's in the making, son,"
he smiles.
I see what he means.

It's in the knife
meeting the beef,

in the dancing of potatoes
as they turn in the water,
in the singing
of boiling soup in the pot.

There are enough words
in the way
Daddy teaches me his famous dish
and the way he hugs me
when we finish.

Making goulash
we don't talk much,
Daddy and me,

but everything is said.

(Ideas from Candace Pearson's poem)`, "Making Goulash（詩）");

const exam108Bus = [
  mc(15, 2, "Which is true about City Sight Bus tickets?",
    ["It costs less to buy tickets on the Internet.", "People must pay the full ticket price for a pet.", "Tickets are more expensive in the high season.", "People save 10% if they buy two tickets for the same line."], 0,
    ["廣告明白寫著「Save 10% if you buy tickets on the Internet」，直接對應選項一。", "帶寵物只需付半價（half price），並非全額，排除選項二；旺季只有開放時間不同，票價並未提高，排除選項三；10% 折扣是「買兩條線的票」而非「同一條線買兩張票」，排除選項四。"],
    "廣告類文本的細節題，答案通常可以在文中找到一句幾乎一字不差對應的原文句子。",
    "選項常故意調換文中資訊的對象（如把「買兩條線的票」誤植為「買同一條線兩張票」），要逐字核對細節。"),
  mc(15, 2, "Which is true about the bus lines?",
    ["Line B takes more time.", "Both lines cross Farmers' Bridge.", "Both lines leave from Central Station.", "There are more gardens to see on Line A."], 2,
    ["廣告明確寫著「Buses for both lines leave every hour from Central Station」，直接支持選項三。", "Line A 需要一小時，Line B 只要 50 分鐘，Line B 反而比較快，排除選項一；文中並未提到 Farmers' Bridge 或哪條線有更多花園，排除選項二、四。"],
    "遇到「以下何者正確」的細節題，先把文中明確提到的事實逐一列出，再對照選項排除沒有根據的內容。",
    "容易把 Line A 與 Line B 的時間長短記反，文中明確 Line A 需要一小時、Line B 只要 50 分鐘，Line B 反而比較快。"),
];
attach(exam108Bus, "108-city-sight-bus", `City Sight Bus
www.citysightbus.org

OPENING HOURS
High Season (April to September): 9:00 – 18:00 every day
Low Season (October to March): 9:00 – 17:00 every day

TICKET PRICES
Line A: $20 each person
Line B: $18 each person

THINGS YOU SHOULD KNOW
Buses for both lines leave every hour from Central Station.
Line A takes one hour; Line B takes 50 minutes.
If you are taking your pet with you, please buy a seat for it at half price.
Save 10% if you buy tickets on the Internet.
Save 10% if you buy tickets for both lines.
Go to www.citysightbus.org for more information.`, "City Sight Bus 觀光巴士廣告");

const exam108Dialogue = [
  mc(16, 3, "Why were there seventeen calls asking for Mike?",
    ["His team was angry at him.", "He is a popular soccer player.", "He did not show up for the game on Friday.", "His name did not appear on the list of players."], 0,
    ["Mike 忘記去店裡拿球隊的球衣，而明天就是球隊本季最重要的比賽；Sarah 說打電話來的人是「Johnny, Ricky, Archie, Freddie」，正是他的隊友。", "結合「我完蛋了」與「他們在電話裡說了十七次同樣的話」，可以推知是隊友們在生氣地找他興師問罪。"],
    "對話題常需要把多句線索串聯起來才能得到答案，而不是單看某一句話。",
    "不要誤選選項二「他是受歡迎的足球選手」，Mike 一開始開玩笑以為自己有粉絲，這其實是幽默的反差，不是事實。"),
  mc(16, 2, "What does It mean in the dialogue?",
    ["The shop.", "The fan club.", "The soccer game.", "The soccer season."], 0,
    ["Sarah 說「It's not open on the weekend」，指的是 Mike 前面提到要去拿球衣的那家店（the shop）週末不營業。", "球賽或球季沒有「營業與否」的概念，語意不通，正確應指涉「商店」。"],
    "代名詞指涉題要往前找語意通順、單複數一致的名詞，此處 It 代替最近提到且符合語境（有開放時間）的 the shop。",
    "容易誤選 the soccer game，但比賽沒有「不營業」的概念，正確應指涉「商店」。"),
  mc(16, 2, "What can we learn about Mike?",
    ["He is nice to people from his fan club.", "He plays soccer with Johnny and Ricky.", "He found a way to fix the trouble he made.", "He decided not to go to the game on Sunday."], 1,
    ["Sarah 列出 Johnny、Ricky、Archie、Freddie 說「everyone on my team」，Mike 也回應「everyone on my team」，可知這些人都是他的足球隊友。", "從對話中列舉的人名與 Mike 的回應，可以直接推知他們之間是隊友關係。"],
    "從對話中列舉的人名與 Mike 的回應，可以直接推知他們之間的關係（都是隊友）。",
    "不要誤選選項三，Mike 說「我現在就去解決」卻被 Sarah 潑冷水說「太遲了，商店週末不開」，代表他其實沒有解決問題。"),
];
attach(exam108Dialogue, "108-mike-soccer", `Sarah: You're VERY popular today. I've had seventeen calls asking for you.
Mike: Finally! After all these years of kicking and running, I've got my own fans! So what did they want? My photos? Do I need to sign my name? Are they starting a fan club for me?
Sarah: Well, let me ask you this: What day was yesterday?
Mike: Friday… Why?
Sarah: Did you forget something?
Mike: Did I forget… OH, NO! I didn't pick up my soccer team's sport shirts from the shop! And we're having this big game tomorrow!
Sarah: Yeah. And from what I've heard, it's your team's most important game this season.
Mike: OK. I have to go fix this now.
Sarah: Too late. They've tried. It's not open on the weekend. And if you want to know, they are Johnny, Ricky, Archie, Freddie…
Mike: I know, I know, everyone on my team. Oh, I'm a dead man now.
Sarah: Yeah, that was what they said on the phone, seventeen times.`, "Mike 與足球隊的電話留言");

const exam108Birds = [
  mc(15, 2, "Which is the best title for this reading?",
    ["Australia: The Best Place for Birds.", "Mother Bird Fights Weather Changes.", "Larger Mother Birds Have Larger Eggs.", "Family Love: Brothers & Sisters Work Together."], 1,
    ["全文主軸是超級仙鷚的母鳥因應天氣好壞調整蛋的大小，是母鳥應對惡劣天氣的生存策略。", "選項一與全文內容無關太籠統；選項三把因果關係弄反，原文說的是天氣不好時蛋比較大，不是母鳥體型大蛋就大；選項四強調手足合作，但全文主軸其實是母鳥的應對策略，手足幫忙只是其中一環。"],
    "選標題要選「能涵蓋全文重點」的敘述，此文主軸是母鳥因應天氣變化的應對之道。",
    "選項三把因果關係弄反，原文說的是「天氣不好時蛋比較大」，不是「母鳥體型大蛋就大」。"),
  mc(16, 2, "What does this trick mean in the reading?",
    ["Having eggs of different sizes.", "Growing stronger inside the egg.", "Saving food for weaker baby birds.", "Helping baby birds break out of the eggs."], 0,
    ["「this trick」緊接在前一句「this small bird has eggs of different sizes in different kinds of weather」之後，指涉的正是「依天氣調整蛋的大小」這個策略。", "選項二「在蛋裡長得更強壯」其實是這個 trick 帶來的結果，不是 trick 本身。"],
    "指涉題要往前一句找出被稱為 trick 的具體策略內容，而不是往後找。",
    "選項二容易與 trick 本身混淆，但那其實是這個策略帶來的『結果』，不是策略本身。"),
  mc(16, 3, "What can we learn about superb fairy-wrens from the reading?",
    ["Male birds can usually live for ten years.", "Baby birds grow well in hot, dry weather.", "Young male birds share the job of feeding the baby birds.", "Mother birds make smaller eggs when there is less food outside."], 2,
    ["原文提到「her sons will bring food back for their baby brothers and sisters from the eggs」，說明年輕雄鳥（兒子）會幫忙餵食弟妹。", "選項一把「十年的研究」誤讀成鳥的壽命有十年；選項二與原文相反，天氣炎熱乾燥時食物少、幼鳥容易死亡；選項四把因果方向弄反，食物少時母鳥其實是做更大的蛋，而非更小。"],
    "選項常故意把研究的『時間長度』與鳥的『壽命』，或把『天氣好壞』與『蛋的大小』方向對調，要仔細核對原文對應句。",
    "「ten-year study」很容易被誤讀成鳥的壽命有十年，其實只是這項研究進行的時間長度。"),
];
attach(exam108Birds, "108-fairy-wren", `Animals have their special ways to deal with hard times in nature. The superb fairy-wren, one kind of bright-blue bird in Australia, is one example. This year, a ten-year study showed that this small bird has eggs of different sizes in different kinds of weather. When the weather is hot and dry, there is less food for young superb fairy-wrens, and they die easily. So the mother bird will make larger eggs to help her babies grow stronger inside before they break out of the eggs into the "hungry" world.

However, not all mother birds are able to do this trick. Only those with at least one male child can. When the weather is "good," the mother will make smaller eggs, and her sons will bring food back for their baby brothers and sisters from the eggs. With her sons' help, the mother can save more energy to make larger eggs when the weather is bad. Isn't this amazing?`, "超級仙鷚的育兒策略");

const exam108News = [
  mc(15, 3, "What idea is talked about in both pieces of news?",
    ["More young people need to join in making art.", "People's ways of enjoying art change with time.", "Bringing important art works to Taiwan from abroad.", "Giving new life to old arts that were almost forgotten."], 3,
    ["紙紮工藝原本快要消失，因為法國人的欣賞而重新在法國展出、被改編成電影；相聲原本只有少數人喜愛，因賴聲川的作品重新受到歡迎，兩篇都是「讓快被遺忘的傳統藝術重獲新生」。", "選項三方向剛好相反：第一篇是把紙紮作品「帶到法國」展出，而不是把國外藝術品帶來台灣。"],
    "兩篇文本的共同主旨題要先分別抓出各篇重點，再找出兩者都成立的共通概念。",
    "選項三「把重要藝術品帶到台灣」與第一篇（把紙紮作品帶去法國展出）方向相反，屬於方向弄反的陷阱。"),
  mc(20, 2, "What does it mean when something is a smash hit?",
    ["It is old.", "It is successful.", "It is foreign.", "It is useful."], 1,
    ["句子說這齣戲「was such a smash hit that people became interested again in xiangsheng」，後面接著說相聲因此打開了更大的市場，可知 smash hit 帶來的是正面、成功的效果。", "從「重新引發興趣」「打開更大市場」這些結果，可以推知 smash hit 指的是大受歡迎、非常成功的作品。"],
    "遇到片語猜義題，看該片語後面帶出的結果子句（重新引起興趣、打開更大市場），就能推知其正面、成功的意思。",
    "不要被字面上的 smash（打碎）聯想到負面意思，smash hit 是固定用語，表示大受歡迎的成功作品。"),
  mc(15, 3, "What do we know from the news?",
    ["Lai has taught xiangsheng in many schools.", "Lai often puts his own life stories into his art works.", "The owner of Hsin Hsin Paper Offering Store is a Frenchman.", "People do not burn papier-mâché for dead people as often as before."], 3,
    ["文中說紙紮「is dying because it is not much needed now」，暗示現在燒紙紮給亡者的習俗已經不像以前那麼普遍。", "法國人只是造訪台灣、愛上紙紮工藝的參觀者，不是欣欣糊紙店的老闆（排除選項三）；文中也沒有提到賴聲川在學校教相聲，或把自己的人生故事放進作品（排除選項一、二）。"],
    "細節推論題要留意「逐漸式微」「不再需要」這類語句，背後往往暗示某項傳統習俗正在減少。",
    "容易把「愛上這項藝術的法國人」與「紙紮店老闆」搞混，文中法國人只是參觀者，不是店主。"),
];
attach(exam108News, "108-taiwan-arts", `Here are two pieces of news that Annie collected for her report.

Papier-mâché is works of art that are made of paper. In Taiwan, it is known as zhizha and is usually burned as a gift for dead people. Taiwan's papier-mâché is dying because it is not much needed now. However, this dying art won a Frenchman's heart when he visited the island. He then invited one of the papier-mâché shops, Hsin Hsin Paper Offering Store, to show their beautiful works in France. The shop owner's son also used papier-mâché in a way that no one ever thought of—making a movie with it.

Stan Lai is very important in Taiwan's theater. He brought changes to Chinese theater art of the old days to make it closer to our life experiences and easier to understand. One of his most famous works is That Evening, We Performed Crosstalk (1985). It was such a smash hit that people became interested again in xiangsheng, a show of funny talk between two actors. This art used to be a hobby that only a few people shared, but Lai has opened a bigger market for it. Now it has fans across all ages.`, "紙紮與相聲：即將消逝的傳統藝術");

const exam108Coffee = [
  mc(15, 2, "Which idea is talked about in the news?",
    ["How often we should drink coffee.", "What happens when we have too much coffee.", "How to help the body make the cortisol we need.", "What happens when we have coffee at the wrong time."], 3,
    ["全文從頭到尾都在說明「一起床就喝咖啡」這個時機不對，並建議在可體松濃度下降後再喝，核心是「時機」而非份量或頻率。", "文章完全沒有討論喝咖啡的頻率（選項一）或喝太多咖啡的後果（選項二），也沒有教怎麼幫助身體製造可體松（選項三）。"],
    "主旨題先看文章開頭與結尾的建議句（何時喝咖啡最好），確認全文核心在談「時機」而非「頻率」或「份量」。",
    "不要誤選選項一「多常喝咖啡」，文章完全沒有討論喝咖啡的頻率，只討論一天中的時間點。"),
  mc(20, 2, "What does it mean when someone thinks otherwise about something?",
    ["They are serious about it.", "They have no idea about it.", "They think differently about it.", "They do not think it is a problem."], 2,
    ["前一句說「having a cup of coffee right out of bed is the best way to start a day」，接著「a report...says otherwise」，otherwise 就是在說這份報告持相反、不同的看法。", "otherwise 前後常出現對比語境，此處明確是「反駁」前面一般人的想法，而不是「沒有想法」或「不覺得是問題」。"],
    "otherwise 前後常出現對比語境，先找出前一句的立場，再判斷 otherwise 是要「反駁」還是「延續」該立場。",
    "不要以為 otherwise 表示「沒有想法」，其實它明確表達「不同的、相反的看法」。"),
  mc(16, 3, "Four people read the news and wrote what they thought about it. What did they think about the news?",
    ["They wanted to try what it said.", "They were sad about what it said.", "They did not agree with what it said.", "They were not surprised at what it said."], 2,
    ["四則留言都用嘲諷、開玩笑的語氣回應文章的建議（Mike：想喝就喝；Sarah：先喝咖啡才醒；Charlie：拿死亡開玩笑；Lisa：覺得需要被告知何時喝咖啡很可悲），顯示他們並不認同文章的建議。", "這種帶有嘲諷意味的留言，通常代表不認同文章觀點的態度，而不是真心想嘗試或單純不感到意外。"],
    "語氣推論題要留意用詞是否帶有嘲諷、開玩笑的語氣，這類留言通常代表不認同的態度。",
    "不要被留言表面輕鬆詼諧的語氣誤導成「不感到意外」，這些玩笑話其實都在反諷、不認同文章的建議。"),
];
attach(exam108Coffee, "108-coffee-timing", `For many people, having a cup of coffee right out of bed is the best way to start a day. But a report from Asap Science says otherwise. It says the worst time for coffee is soon after we get up. When we wake up, our bodies start to make cortisol. Cortisol helps us to think clearly and be quick to understand and act. The cortisol levels rise after we wake up and climb to the highest in about an hour. So there are two problems when we drink coffee during this time: (1) our bodies will make less cortisol, and (2) the cortisol will make coffee less useful. And that's why some of us drink more and more coffee.

Then, when's the best time to have coffee? When the cortisol levels are going down, the report says. Cortisol levels are usually highest between 8 a.m. and 9 a.m., between noon and 1 p.m., and between 5:30 p.m. and 6:30 p.m. So if you want to have coffee, enjoy it after these times, and this popular drink will help you the most.

16/01/2015, VOF News

Four people read the news and wrote what they thought about it:
Mike: The best time to drink coffee is when you want to drink coffee.
Sarah: I usually wake up AFTER I drink coffee!
Charlie: The worst time to drink coffee is when you're DEAD.
Lisa: If you need someone to tell you when to drink coffee, well, that's just sad.`, "喝咖啡的最佳時機");

const exam108Shopping = [
  mc(15, 3, "What does the report NOT suggest?",
    ["Having more free buses for shoppers.", "Changing the opening hours on weekdays.", "Making plans to help weekday morning business.", "Changing the time of the special sale on weekends."], 2,
    ["報告建議把週末優惠時段從週六晚上改到下午（對應選項四）、增加免費接駁車（對應選項一）、平日多營業半小時（對應選項二），但全文完全沒有提到要改善「平日早上」的生意。", "選項一、二、四都能在文中找到明確對應句，只有選項三（平日早上）沒有被提及，因此是報告沒有建議的項目。"],
    "遇到「NOT」的細節題，最快的方法是先確認選項中哪三項在文中都找得到明確對應句，剩下沒被提到的就是答案。",
    "容易忽略文章根本沒有提到「平日早上」的業績問題，文中只討論了週末下午、週末晚上與平日晚上的生意。"),
  mc(15, 3, "What does the report say about the shopping center?",
    ["Its business on weekdays is not as good as last season.", "It has a special sale one hour before closing every day.", "Most of the shoppers take the free buses to the shopping center.", "A large part of its shoppers on weekday evenings are working parents."], 3,
    ["報告明確指出，平日晚上的顧客「大多是住在附近的居民，或是下班後臨時來採買的雙薪父母，兩者合計幾乎占平日晚上業績的 60%」，直接對應選項四。", "「不如去年同期」形容的是週末晚上，不是平日（排除選項一）；特賣活動 Weekend's Best Buy 是週末限定，不是每天（排除選項二）；75% 的受訪顧客只是「希望」有更多接駁車，不代表現在多數人已經在搭（排除選項三）。"],
    "細節題要注意文章描述的對象（平日 vs. 週末、早上 vs. 晚上）是否與選項完全對應，時間與對象弄錯就會選錯。",
    "「不如去年同期」這句話是用來形容週末晚上的生意，容易被誤植到選項中形容平日生意。"),
];
attach(exam108Shopping, "108-shopping-report", `Below is part of a new shopping center's market report.

Our busiest time is weekend afternoons, between 1:30 p.m. and 3:30 p.m. About half the business of the week is done then. So it would be better if we move Weekend's Best Buy from Saturday evening to Saturday afternoon when there may be more shoppers during the sale. We should also think about having more free buses during the weekend, as 75% of the shoppers who were interviewed said two buses an hour are just not enough.

Weekend evenings are second busiest, though it is not as good as last season. An interesting fact is that business is better on weekday evenings, usually one hour before closing, than on weekend mornings. Most of the shoppers then are people who live near or working parents who do their last-minute shopping. They together make up almost 60% of the business on weekday evenings. It might bring in more business if we open half an hour longer during weekdays, until 10:30 p.m.`, "購物中心的市場報告");

const exam108Maggie = [
  mc(16, 3, "It hurts me to think that you're going to ___(36)___.",
    ["change the way you are", "give up being an actress", "travel with a theater group", "run away from your friends"], 0,
    ["下一句解釋「你一直很想像那些大眼睛、細長腿的女演員一樣，但其實你早就很漂亮了」，可知 Maggie 想要的是改變自己外貌，對應「change the way you are」。", "信中完全沒有提到放棄演戲、跟劇團旅行或逃離朋友，這些都與信件主題（外貌與自我認同）無關。"],
    "克漏字的長文推論題要通讀全文找出反覆呼應的主題（本文主題是「想改變外貌」），再回填空格。",
    "不要被 actress 字眼干擾誤選選項二，信中提到 actresses 只是「想變得像演員一樣好看」的比較對象，不是 Maggie 本身要放棄演戲。"),
  mc(16, 3, "It worries me more that ___(37)___.",
    ["you're too shy to talk with people", "you just don't want to be like others", "you don't think you're good enough", "you don't know what you've missed"], 2,
    ["空格後面接著「there's no quick fix to this, not even with the doctor's help」「If you don't try to like yourself first, no one else will」，顯示這裡指的是缺乏自信、覺得自己不夠好的心態。", "信件通篇談的是外貌與自我認同，完全沒有提到害羞或社交問題，排除選項一。"],
    "空格後方常會出現解釋或呼應句（「doctor's help」暗示外貌相關的自我否定），依照這些線索反推空格內容。",
    "不要誤選選項一「太害羞不敢和人說話」，信件通篇談的是外貌與自我認同，沒有提到害羞或社交問題。"),
];
attach(exam108Maggie, "108-maggie-letter", `Dear Maggie,

I know you won't be happy but I still have to say this again. It hurts me to think that you're going to ___(36)___. I know you've always wanted to be like those actresses with big eyes and slim legs, but in fact you are already beautiful. What you are born with makes you special because nobody looks the same as you.

It worries me more that ___(37)___. But sadly, there's no quick fix to this, not even with the doctor's help. If you don't try to like yourself first, no one else will. People like you not because of your face, but because of your heart. You need to understand this first. Until you understand this, nothing is going to be different even if you have this change.

I truly hope you think this through again.

Love,
Linda`, "給 Maggie 的信");

const exam108Elizabeth = [
  mc(2, 3, "No one thought one day she ___(38)___ the queen of the UK.",
    ["has become", "became", "had become", "would become"], 3,
    ["這句話是「站在過去某個時間點，描述當時沒人料到的未來事件」，也就是過去看未來，will 要改成過去式 would。", "became 描述已經確定發生的過去事實，但句意是「當時沒人『預料』會發生」，屬於對未來的預測，須用 would；has become、had become 都無法表達「從過去看向尚未發生的未來」這種語感。"],
    "描述『站在過去某個時間點，往未來看的預測或推測』時，要把 will 改成過去式 would，這是常考的「過去看未來」句型。",
    "不要選 became，became 描述的是已經確定發生的過去事實，但這句話的語氣是「當時沒人料到」，屬於對未來的預測，須用 would。"),
  mc(3, 3, "Edward ___(39)___ in love with a married American woman long before, and he decided to marry her after he became the king.",
    ["has fallen", "is falling", "had fallen", "would fall"], 2,
    ["「long before」表示這件事發生在另一個過去時間點（成為國王）之前，兩個過去事件中較早發生的那個要用過去完成式。", "has fallen、is falling 都不是描述過去時間的正確形式；would fall 表達的是對未來的預測，不符合這裡「已經發生在更早之前」的語意。"],
    "當句子出現兩個過去事件、且其中一個發生在另一個過去事件之前時，較早發生的那個動作要用過去完成式（had + p.p.）。",
    "不要只看到 long before 就直接選過去簡單式，時間副詞暗示的是『比另一個過去時間點更早』，這正是過去完成式的典型用法。"),
  mc(16, 3, "___(40)___. After Edward VIII gave up the throne, Elizabeth's father became King George VI.",
    ["This changed Elizabeth's life", "It was not easy to give up the throne", "It was good news to Elizabeth and her family", "This part of history made the UK a strong country"], 0,
    ["空格後面接著描述：伊莉莎白的父親成為國王、她成為王位繼承人、必須告別舊生活準備當女王，這一連串轉折正對應「This changed Elizabeth's life」。", "伊莉莎白必須放棄原本平靜的生活去準備當女王，這對她而言是重大改變與犧牲，並非單純的好消息（排除選項三）；選項二在描述愛德華放棄王位的難處，是前一段已經講過的內容，不是這裡的重點。"],
    "克漏字句子題要看該句『後面接續的內容』是否呼應句子本身，此處後文詳細描述伊莉莎白人生的轉折，正對應「This changed Elizabeth's life」。",
    "不要誤選選項三，伊莉莎白必須放棄原本平靜的生活去當女王，對她而言是重大改變與犧牲，並非單純的『好消息』。"),
  mc(16, 2, "Ever since she became head of her country, Queen Elizabeth II ___(41)___: She has held meetings with important people in the UK, and has visited many foreign countries.",
    ["has worked hard for the UK", "has been popular with the people of the UK", "has been the queen of the UK for a long time", "has brought the people of the UK much closer"], 0,
    ["冒號後面列舉的具體例子（開會、出訪各國）都是在為國家努力做事的表現，直接對應「has worked hard for the UK」。", "冒號後面的例子都是在描述她做了哪些工作，與人民對她的喜愛程度、當女王的時間長短或凝聚人民向心力等敘述無關。"],
    "冒號後面列舉的具體例子，通常就是驗證空格內容的最佳依據，要選能被這些例子直接支持的敘述。",
    "選項三「當女王很久了」雖然是事實，但與冒號後面『開會、出訪』等具體做了什麼的描述無關，答非所問。"),
];
attach(exam108Elizabeth, "108-queen-elizabeth", `Elizabeth Alexandra Mary Windsor was born in London on April 21, 1926. No one thought one day she ___(38)___ the queen of the UK. After her grandfather, King George V, died in 1936, Elizabeth's uncle, Prince Edward, became King Edward VIII. Edward ___(39)___ in love with a married American woman long before, and he decided to marry her after he became the king. However, Edward was asked to choose between the throne and his love. Finally, he decided to give up the throne.

___(40)___. After Edward VIII gave up the throne, Elizabeth's father became King George VI. As the oldest child without any brothers, Elizabeth became next in line to the throne. She needed to say goodbye to her good old life and prepare to be a queen. After her father died in 1952, she became Queen Elizabeth II.

Ever since she became head of her country, Queen Elizabeth II ___(41)___: She has held meetings with important people in the UK, and has visited many foreign countries. In the few hours she keeps to herself, however, she reads and enjoys horseback riding.`, "伊莉莎白女王的故事");

window.__ENG_TRANSCRIBED_108 = {
  minutes: 60,
  omittedNote: "108年英語（閱讀）題本共41題，其中第1題（需依「Look at the picture」判斷母鴨與小鴨動作的圖片）、第31題（需依可體松濃度曲線圖判斷 A/B/C/D 座標點）、第35題（四個選項皆為視覺上幾乎相同、僅版面排列不同的圓餅圖，須以圖片本身判讀）因內容純為圖片且無法轉錄為等義文字而略過，其餘38題皆已逐題轉錄並核對官方答案。",
  questions: [
    ...exam108,
    ...exam108Poem,
    ...exam108Bus,
    ...exam108Dialogue,
    ...exam108Birds,
    ...exam108News,
    ...exam108Coffee,
    ...exam108Shopping,
    ...exam108Maggie,
    ...exam108Elizabeth,
  ],
};

  // ==================== 109 年 ====================
const exam109 = [
  mc(17, 1, "My mom puts the ___ on to keep her hands away from water when she washes the dishes.",
    ["gloves", "jacket", "ring", "socks"], 0,
    ["句子明確描述功能是「洗碗時讓雙手不碰到水」，手套（gloves）正是用來保護雙手不碰水的物品。", "jacket（外套）、ring（戒指）、socks（襪子）都無法達成「隔絕雙手碰水」這個功能。"],
    "抓住句子描述的具體功能（保護雙手不碰到水），直接對應到最合理的物品。",
    "不要被 ring 也戴在手上這個聯想混淆，戒指無法「隔絕水」。"),
  mc(17, 1, "Can you ___ your feet a little off the floor? I want to see if my keys are under the sofa.",
    ["check", "kick", "raise", "show"], 2,
    ["「off the floor」表示要把腳「抬離」地面，raise（舉起、抬起）最符合語意，才能讓對方看清楚沙發下方。", "kick（踢）是瞬間動作，無法讓腳持續離地；check、show 都不是描述抬腳動作的動詞。"],
    "先看清楚介系詞片語（a little off the floor）透露的動作方向（往上抬），再挑選對應的動詞。",
    "不要選 kick（踢），踢腳的動作不會讓腳持續離開地面以便查看沙發下方。"),
  mc(5, 2, "___ of my sisters are older than I am. I'm the youngest of the three children in my family.",
    ["Both", "Few", "Most", "Some"], 0,
    ["「the youngest of the three children」表示這個家庭共有三個小孩、說話者排行最小，也就是說話者有兩個姊姊，且兩個姊姊都比自己年長。", "既然總共只有兩個姊姊，且兩個都年紀較長，就該用表示「兩者皆是」的 Both，而不是暗示「有更多人」的 Most/Some/Few。"],
    "先算出句子暗示的確切人數（三個小孩中排行最小＝有兩個姊姊），確定數量後就能判斷 Both 才符合「兩者皆是」的語意。",
    "不要忽略「the three children」這個關鍵細節，若不知道總共只有兩個姊姊，容易誤選 Most 或 Some。"),
  mc(19, 1, "The beach near our town is a very ___ place. Every summer at least one kid dies there in the water.",
    ["dangerous", "exciting", "lonely", "popular"], 0,
    ["後半句給出具體事實「每年至少有一個小孩在水裡溺斃」，直接支持這個海灘是 dangerous（危險）的。", "popular（受歡迎）、exciting（刺激）、lonely（冷清）都無法解釋「每年都有小孩死亡」這個事實。"],
    "先讀完整句話的後半段（具體事實：每年都有小孩溺斃）再選出符合該事實的形容詞。",
    "不要被 popular（受歡迎）誤導，海灘吸引人去玩不代表它安全，這裡強調的是危險性。"),
  mc(5, 1, "My wife enjoys going to the movies with her friends, but I like to watch TV at home by ___.",
    ["I", "me", "myself", "mine"], 2,
    ["「by oneself」是固定用法，意思是「獨自」，反身代名詞要跟主詞 I 的人稱一致，所以要用 myself。", "I 是主格、me 是受格、mine 是所有格代名詞，都不符合「by＋反身代名詞」這個固定搭配。"],
    "「by oneself」是固定用法，反身代名詞要跟主詞的人稱一致，主詞是 I 就用 myself。",
    "容易誤選受格 me，忽略了「by＋反身代名詞」才是表達「獨自」的正確固定搭配。"),
  mc(3, 2, "For the past twenty years, my father ___ in a school library. But he'll leave the job next month.",
    ["worked", "has worked", "is working", "works"], 1,
    ["「For the past twenty years」表示一段持續到現在的時間，加上「他下個月才要離職」暗示他現在仍在職，正是現在完成式「for + 一段時間」的典型用法。", "worked（過去式）暗示工作已經結束；works（現在簡單式）無法表達長達二十年的持續性；is working（現在進行式）只描述當下這一刻，無法涵蓋二十年的跨度。"],
    "「for + 一段時間」且動作持續到現在（未來才要離職），是現在完成式的經典信號。",
    "不要因為看到「he'll leave the job next month」就認為工作已經結束而選過去式，離職是未來的事，代表現在仍在職。"),
  mc(17, 1, "It's great that we can buy train tickets over the phone without going out. It ___ us a lot of time.",
    ["lends", "prepares", "saves", "takes"], 2,
    ["電話訂票不用出門，自然能省下時間，「save + 人 + 時間」是表達「為某人省下…」的固定用法。", "takes 通常表示「需要花費」時間，語意方向與句子強調的『方便省時』相反；lends、prepares 都不符合語意。"],
    "「save + 人 + 時間/金錢」是常考固定用法，表示「省下…」。",
    "不要選 takes，「take time」通常表示「需要花費時間」，與句子強調『方便省時』的正面語意相反。"),
  mc(2, 1, "Mozart ___ his first music when he was only six years old.",
    ["is writing", "has written", "will write", "wrote"], 3,
    ["「when he was only six years old」是明確指出的過去時間點，需要用過去簡單式。", "has written（現在完成式）不能搭配像「when he was six years old」這種明確指出的過去時間點；is writing、will write 都不是描述過去已完成動作的正確時態。"],
    "出現明確的過去時間點（when he was six）就直接用過去簡單式，不用完成式或現在式。",
    "不要選 has written，現在完成式不能搭配像「when he was six years old」這種明確指出的過去時間點。"),
  mc(12, 2, "Jill: Have you decided ___ you will celebrate your 30th birthday?\nSue: Yeah, I'm going to have a big barbecue party.",
    ["how", "where", "what", "when"], 0,
    ["Sue 的回答「I'm going to have a big barbecue party」說明的是慶祝的『方式』，而不是時間、地點或事物，因此對應的疑問詞是 how。", "where（地點）、what（事物）、when（時間）都無法對應 Sue 實際回答的內容類型。"],
    "間接問句的疑問詞要對應回答內容，Sue 回答的是「用什麼方式慶祝」而非時間或地點，因此對應 how。",
    "不要看到 birthday 就直覺選 when（時間），要先看 Sue 實際回答的內容類型是方式而非時間。"),
  mc(10, 3, "Alison doesn't like ___ what to do. She only does things she wants to do.",
    ["told", "to tell", "be told", "to be told"], 3,
    ["like 後面接不定詞（like to V），而 Alison 是「被告知」該做什麼的一方（動作承受者），因此不定詞要用被動式 to be told。", "told 缺少不定詞標記 to，不是正確的不定詞形式；to tell 語意變成 Alison 主動去告訴別人，方向錯誤；be told 缺少 to，文法上不完整。"],
    "判斷是否要用被動不定詞，先看動詞後面的邏輯主詞是「動作執行者」還是「動作承受者」，Alison 是被告知的一方，要用 to be told。",
    "容易誤選 to tell，忽略了句意是「被告知」而非「去告知別人」，方向恰好相反。"),
  mc(10, 3, "Josh has planned to make a trip to New York and ___ some of his friends there.",
    ["visit", "visits", "visiting", "visited"], 0,
    ["「has planned to make a trip... and (to) visit...」是由 and 連接的兩個對等不定詞動作，共用同一個 to，第二個動詞前的 to 可以省略，但動詞仍要維持原形。", "visits、visiting、visited 都不是不定詞應有的原形，不符合「and 連接對等不定詞」的結構。"],
    "and 連接兩個對等的不定詞動作時，第二個動詞前的 to 常可省略，但動詞仍要維持原形。",
    "不要因為前面主要動詞是 has planned（現在完成式）就跟著選第三人稱單數 visits，這裡考的是不定詞的對等結構，不是主詞動詞一致。"),
  mc(5, 3, "Ms. Johnson has been taking phone calls since she entered the office this morning. Just when she thought she could finally leave work, ___ call came in.",
    ["another", "each", "the next", "the other"], 0,
    ["情境暗示她已經接了很多通電話，此時「又」意外多來一通不特定的電話，another（不特定的「再一個」）最符合這種持續、不確定還有多少通的情境。", "the other 通常用在總數只有兩者中「另一個」的情況；each 強調逐一列舉每一個；the next 帶有「照順序、預期中的下一個」的語感，都不如 another 貼切這種意外又來一通的情境。"],
    "分辨 another（不特定的「再一個」）與 the other（兩者中特定的「另一個」）的差別，要看語境中總數是否明確。",
    "「the next」容易被誤選，因為語感上像是「接下來的」，但這裡強調的是意外又來一通，用 another 更貼切。"),
  mc(2, 3, "We were so sure that Jerry ___ well on the difficult job. His past experience in other work showed he was the right guy for it. So when he failed, no one believed it.",
    ["had done", "did", "has done", "would do"], 3,
    ["「We were so sure that Jerry ___ well」是站在過去這個時間點，對『未來』會發生的事很有把握，這種過去看未來的語感要用 would（will 的過去式）。", "had done、has done、did 都是描述已完成或已發生的動作，無法表達『站在過去、預測接下來會發生的事』这种語感。"],
    "描述『站在過去這個時間點，對未來會發生的事有把握』時，要用 would，這與過去看未來的邏輯一致（will 退一格變 would）。",
    "不要因為後面出現「he failed」（過去事實）就選過去式 did，這句話說的是失敗『之前』人們對未來的預期，而非失敗這件事本身。"),
  mc(7, 3, "For Mike, the price is ___ important thing when he shops for jeans. He cares even more about the shape and the size of the pockets.",
    ["the more", "the most", "the less", "the least"], 3,
    ["下一句「He cares even MORE about the shape and size」暗示價格反而不是他最在意的，是他考量因素中最不重要的一項，對應「the least important thing」。", "the most 會與下一句「更在意其他事」矛盾；the more、the less 是比較級，不能用來表達單一項目在多者中「最」不重要的排序，必須用最高級。"],
    "先看後半句透露的邏輯線索（他更在意其他事），反推空格應該是「最不重要」還是「最重要」。",
    "不要看到 price 是話題主角就直覺選 the most，其實下一句話「反而更在意其他事」暗示了相反的意思。"),
];

const exam109Poem = [
  mc(16, 3, "What is it in the reading?",
    ["The sun.", "The rain.", "The wind.", "The rainbow."], 2,
    ["詩中反覆描述衣物在曬衣繩上「跳舞」「跳進池塘」、樹葉「飛起來」等被吹動、飛散的畫面，這些都是風的典型特徵。", "sun、rainbow 不會讓東西被吹動、飛散；rain 通常會讓東西變濕，而不是被吹跑，與詩中描述的動作不符。"],
    "這類謎語詩要抓住反覆出現的具體動作線索（衣物被吹動、樹葉飛起），這些都是風的典型特徵。",
    "不要被「Dad's face falls」（心情變差）聯想到下雨這種常見的負面天氣聯想，細看描述其實是東西被吹動、飛散的畫面，指向風。"),
  mc(16, 2, "How does Dad feel \"when it comes\"?",
    ["He is scared.", "He is excited.", "He is not happy.", "He is not interested."], 2,
    ["「Dad's face falls」（爸爸的表情垮下來）加上他的外套、牛仔褲被吹進池塘、新車被落葉弄髒，都是明顯的負面反應，符合「不開心」。", "「face falls」是常見的情緒慣用語，表示心情變差、不悅，而不是害怕（scared）或無感（not interested）。"],
    "「face falls」是常見的情緒慣用語，表示心情變差、不悅，而非單純害怕或無感。",
    "不要把「face falls」誤解為害怕（scared），這個片語指的是情緒低落、不悅，而非恐懼。"),
];
attach(exam109Poem, "109-weather-poem", `When it arrives,
Everyone cheers.
The shirts and shorts dance
On the clothesline,
The trees and flowers wave
Like they're saying hi,
And the clouds are so excited
To have a running race.

When it comes,
Dad's face falls.
His coat and jeans jump
Off the clothesline
Into the pond.
The tree leaves hop off
And have a party on his new car.

When it gets here,
A lot of fun things I notice:
The pond's face,
Sad and old with lines;
Mrs. Smith's bread,
Delicious and freshly baked.
But what smell is it?
Oh, no, it's from Mr. Brown's feet!`, "猜謎詩：天氣現象");

const exam109YardSale = [
  mc(15, 3, "What can we learn about Buffy's friends?",
    ["Matt has experience of yard sales.", "Jamie had a successful yard sale last week.", "Albert thinks weather is important for yard sales.", "Debby thinks things are cheaper online than at yard sales."], 0,
    ["Matt 在留言最後說「I made some good friends at my last yard sale」，直接顯示他自己辦過庭院拍賣，代表他有經驗。", "Jamie 提到的是「送出東西」而非「成功賣掉」，不是成功的拍賣（排除選項二）；Albert 強調的是挑對『日子』（day），不是天氣（排除選項三）；Debby 的重點是「上網賣可以賣更高的價錢」，不是「東西比較便宜」（排除選項四）。"],
    "判斷「我們可以得知什麼」的細節題時，要找出說話者言談中透露的個人經驗（如 at my last yard sale）作為依據。",
    "選項三故意把 Albert 提到的「挑對日子（day）」偷換成「天氣（weather）」，要仔細核對關鍵字是否一致。"),
  mc(16, 3, "What do Buffy's friends think about having a yard sale?",
    ["Albert and Matt think it's a nice way to make friends.", "Debby and Albert think it's difficult to make money from it.", "Matt agrees with Jamie that it's a good chance to help people.", "Jamie agrees with Debby that it's a lot of trouble to prepare for it."], 3,
    ["Jamie 的留言一開頭就說「Debby's right」，直接呼應 Debby 前面抱怨庭院拍賣要花很多時間精力卻賺不了多少錢的說法。", "Albert 認為庭院拍賣是賺大錢的好機會，並非「難以賺錢」（排除選項二）；Matt 提到的是賺錢與交朋友，並未呼應 Jamie「幫助別人」的說法（排除選項三）。"],
    "多人留言題要先確認每個人的立場，再找出「某人明確呼應某人」的關鍵句（如 Debby's right）。",
    "不要把 Albert 提到的「賺大錢的機會」誤讀成「認為難以賺錢」，方向恰好相反。"),
];
attach(exam109YardSale, "109-yard-sale", `Buffy: Hey, guys! I have a lot of things I don't need, so I'm thinking about having a yard sale. What do you think?

Debby: Having a yard sale is not easy. You have to collect things, put prices on them, put them out on tables and then wait for people to come. And usually you have to sell things at VERY low prices. For all that time and work, you make very little money. Why not just sell your things online for higher prices?

Jamie: Debby's right. But I think it'd be even better to just give your things to people who need them. I just sent out a lot of things last week.

Albert: Hey, I love yard sales! It's a great chance to make big money if you pick the right day. In my experience, Saturday is the best.

Matt: I agree with Albert. You can make money and meet interesting people. I made some good friends at my last yard sale.`, "庭院拍賣：Buffy 朋友們的意見");

const exam109SunnyMarket = [
  mc(15, 2, "From the ad, which is true about Sunny Sun pictures?",
    ["The first day to use Sunny Sun pictures is Feb. 4.", "The last day to collect Sunny Sun pictures is Feb. 10.", "You cannot use Sunny Sun pictures to get free desserts.", "You cannot get Sunny Sun pictures when you buy books."], 3,
    ["廣告寫明消費可以換 Sunny Sun 貼紙的條件是「on anything EXCEPT books and CDs」，代表買書不能換貼紙，直接對應選項四。", "收集期間是「From Jan. 4 to Feb. 4」，使用期間才是「From Jan. 4 to Feb. 10」，兩組日期不能混用（排除選項一、二）；集滿 10 張就能免費兌換甜點，選項三與廣告矛盾。"],
    "廣告細節題要分清楚「收集期間」與「使用期間」兩組不同的日期範圍，不要混用。",
    "容易把「收集截止日 Feb. 4」與「使用截止日 Feb. 10」搞混，誤選成 Feb. 10 是收集的最後一天。"),
  mc(15, 3, "Sammy has 7 Sunny Sun pictures. She wants to get a Sunny Cup. How can she get one?",
    ["Use 6 Sunny Sun pictures and pay $100.", "Use 6 Sunny Sun pictures and pay $200.", "Spend $150 to get 3 more Sunny Sun pictures.", "Spend $200 to get 4 more Sunny Sun pictures."], 1,
    ["廣告寫著「Collect 6 pictures, and you can buy a Sunny Cup for $200」，Sammy 已經有 7 張，超過門檻，可以直接用 6 張加付 200 元換得 Sunny Cup。", "$100 是集滿 6 張換甜點的價格，不是換 Sunny Cup 的價格（排除選項一）；選項三、四是在講「再收集更多貼紙」，並非利用她已經符合門檻的貼紙去兌換。"],
    "廣告的兌換題要先確認題目給的張數是否已經達到某個門檻，直接對照廣告中該門檻對應的兌換方式與金額。",
    "不要把「集滿6張可用200元買」Sunny Cup 的價格，跟另一項「集滿6張可用100元買甜點」的價格搞混。"),
];
attach(exam109SunnyMarket, "109-sunny-market", `Here is an ad for Sunny Market.

From Jan. 4 to Feb. 4, for each $50 you spend (on anything EXCEPT books and CDs) at Sunny Market, you'll get a Sunny Sun picture. (2 pictures for every $100, 3 pictures for every $150, …)

★ Collect 12 pictures, and you can get a Sunny Cup for free!
★ Collect 10 pictures, and you can get any of the desserts on the right for free!
★ Collect 6 pictures, and you can buy a Sunny Cup for $200, or any of the desserts on the right for $100!

From Jan. 4 to Feb. 10, you can use Sunny Sun pictures to get Sunny Cups or desserts.

With Sunny Sun pictures, you can get one of the prizes below for free or at low prices!! (Sunny Cup / Chocolate / Fruitcake / Ice cream)`, "Sunny Market 集點廣告");

const exam109Chocolate = [
  mc(16, 2, "What does them mean in the reading?",
    ["Bains-marie.", "Butter and sugar.", "Chocolate desserts.", "Small pieces of chocolate."], 1,
    ["原句是「you'll need to mix chocolate with butter and sugar. So if you do, put them in the pot too」，them 指涉的正是緊接在前的 butter and sugar。", "巧克力碎片在前一句已經用「put them in the smaller pot」處理過了，這裡的 them 指的是新提到、要一起放進鍋裡的奶油和糖。"],
    "代名詞指涉題要往前找語意通順、單複數一致的名詞，此句 them 代替緊接在前的 butter and sugar。",
    "不要跟前一句提到的巧克力碎片搞混，那些已經在前一句處理過了，這裡的 them 指的是新提到的奶油和糖。"),
  mc(15, 2, "From the reading, which is true about working with chocolate?",
    ["It is better to use a \"bain-marie\" than a \"water bath.\"", "The water in the pot should not be warmer than 50ºC.", "It is better to finish mixing it in less than five minutes.", "We should not mix butter and sugar together at the same time."], 1,
    ["文中明確說「Keep the water under 50ºC, or the chocolate may lose its shine」，直接對應選項二。", "文中說 bain-marie 和 water bath 其實是同一件事的兩種說法，並非哪個比較好（排除選項一）；攪拌時間應為「five to ten minutes」，不是五分鐘以內（排除選項三）；文中並未提到不能同時混合奶油與糖（排除選項四）。"],
    "細節是非題要逐一核對選項中的具體數字（溫度、時間）是否與原文完全吻合。",
    "選項三的「五分鐘內」故意把原文「五到十分鐘」的下限單獨拿出來改成上限，要仔細核對完整的數字範圍。"),
];
attach(exam109Chocolate, "109-chocolate-bain-marie", `Now I'm going to show you how to work with chocolate. I'll do it in a "bain-marie," or, well, some people call it "water bath." I myself love the name "bain-marie." To make a "bain-marie," you need two pots, one bigger than the other.

First, break the chocolate into small pieces and put them in the smaller pot. Usually when making chocolate desserts, you'll need to mix chocolate with butter and sugar. So if you do, put them in the pot too.

Now, half fill the bigger pot with warm water. Put the smaller pot over the bigger one, and start to slowly mix the chocolate, the butter, and the sugar together. Keep the water under 50ºC, or the chocolate may lose its shine. And make sure that no water goes in the smaller pot, or the chocolate will become hard and cannot be used.

Keep mixing for about five to ten minutes, and the job is done. Easy, right?`, "巧克力隔水加熱教學");

const exam109FoodTruck = [
  mc(15, 2, "What does the news story say about the Yangs' food truck?",
    ["What people love about their food.", "What made them start their business.", "How they made delicious fried chicken.", "How they fixed their business problems."], 3,
    ["文章最主要的篇幅在描述楊氏兄妹一開始生意冷清，後來如何靠改變外觀與名字（漆成藍色、畫上梅花、改名 bian-dang）讓生意好轉，核心是「如何解決生意問題」。", "文章開頭雖有提到菜單和顧客排隊，但那只是鋪陳，不是文章主要討論的內容。"],
    "主旨題要看文章篇幅最長、最詳細描述的部分，此文用最多篇幅描述『發現問題→採取行動→生意好轉』的過程。",
    "不要被文章開頭描述菜色好吃的部分吸引而誤選選項一，那只是開場鋪陳，不是文章主要討論的內容。"),
  mc(20, 2, "What does it mean when business is slack?",
    ["It is bad.", "It is for sale.", "It is growing.", "It is open every day."], 0,
    ["「At first, business was slack」後面緊接著描述生意冷清的具體情況：被誤認成中式餐車、幾乎沒人上門、送都送不掉，可知 slack 是負面的「生意冷清」。", "growing（成長中）、for sale（要出售）、open every day（每天營業）都與後文描述的冷清窘況相反或無關。"],
    "猜字義時直接看該句後面緊接的具體描述（幾乎沒人上門、送都送不掉），就能推知 slack 是負面的『生意冷清』。",
    "不要被 slack 的字形聯想到不相關的意思，應依上下文明確的負面描述判斷。"),
  mc(16, 3, "What does that mean in the news story?",
    ["A Taiwanese restaurant.", "A second Taiwanese food truck.", "A city block that sells Taiwanese food.", "A business that is popular across the country."], 2,
    ["句子是「they hope one day there will be a block with Taiwanese food in the city...And their bian-dang food truck might just help to make that happen」，that 指涉的是前面提到「城裡出現一整條台灣美食街區」這個願景。", "不要只抓住句中出現的 food truck 字眼就誤選選項二，that 指的是前面『一整個街區都是台灣美食』的願景，而非單一餐車。"],
    "指涉代名詞 that/this 常代替前一句提到的『一整件事或一個概念』，要往前抓住完整的概念句，而不是單一名詞。",
    "不要只抓住句中出現的 food truck 字眼就誤選選項二，that 指的是前面『一整個街區都是台灣美食』的願景，而非單一餐車。"),
];
attach(exam109FoodTruck, "109-bian-dang-truck", `Taiwanese Bian-dang in Manhattan, New York City
5/30/2014 by Eva Schmidt

During lunch time, on 53rd Street, you'll see a long line of people in front of a Taiwanese food truck for their "bian-dang," a Taiwanese word for "lunch box." On the menu you can find fried chicken with rice, pork dumplings, tea eggs, and other popular Taiwanese dishes.

The owners of the food truck are Thomas and Diana Yang, two Taiwanese-Americans. This brother-sister team started their business in 2009. Back then, there were a few Taiwanese restaurants in the city and several thousand food trucks, but the Yangs were the first to sell Taiwanese food on a food truck.

At first, business was slack. People thought they were just another Chinese food truck, and the food truck's name, "Cravings," often made people think of desserts, not lunch. Few people would stop by and try their food. "I couldn't even give away free food," said Thomas. To catch people's eye, they painted their truck blue, and drew Taiwan's national flower, the plum blossom, on it. They also changed the food truck's name to "bian-dang." Soon people started to notice them, and business finally got better. Now on a good day, they can sell about 150 bian-dangs in about two hours.

So what's next for Thomas and Diana? Well, they hope one day there will be a block with Taiwanese food in the city, just like there is a Chinatown, a Korea Town, and a Little Italy. And their bian-dang food truck might just help to make that happen.`, "台灣便當餐車：曼哈頓的故事");

const exam109SchoolLetter = [
  mc(15, 1, "What problem is Selena Bieber trying to fix?",
    ["High school lessons are too difficult.", "Classes start too early in the morning.", "Too many students are late for school.", "Lunch break is too short for taking a rest."], 1,
    ["信件標題「Later Is Better!」以及內文「why can't school start later?」都直接點出問題核心是上學時間太早。", "信中提到「聽不懂第一堂課」是因為太早上課導致精神不濟，不是課程本身太難（排除選項一）；信中也沒有提到遲到或午休問題（排除選項三、四）。"],
    "書信／倡議文的主旨通常在標題與結尾的訴求句中直接點出，此信標題「Later Is Better」已經暗示問題核心是『時間太早』。",
    "不要被『第一堂課聽不懂』誤導成選項一『課程太難』，其實原因是太早上課導致精神不濟，而非課程本身困難。"),
  mc(16, 3, "What can we learn from the letter?",
    ["Too much melatonin can hurt teenagers' brain.", "The brain stops making melatonin after 11 p.m.", "Sleeping longer helps the body make more melatonin.", "It is easier to fall asleep when the brain is making melatonin."], 3,
    ["信中說褪黑激素是「the hormone that helps sleep」，且在晚上 11 點到早上 8 點之間製造，可推知大腦在製造褪黑激素時比較容易入睡。", "信中並未說褪黑激素過多會傷腦（排除選項一）；11 p.m. 是『開始』製造褪黑激素的時間，不是『停止』的時間，選項二把方向弄反；信中也沒有說睡久一點才會製造更多褪黑激素，是褪黑激素幫助睡眠，而非睡眠幫助製造褪黑激素（排除選項三）。"],
    "推論題要留意時間範圍的方向性（開始 vs. 結束），此處 11 p.m. 到 8 a.m. 是『製造褪黑激素』的時段，不是停止製造的時間點。",
    "選項二故意把『開始製造的時間』誤植為『停止製造的時間』，要仔細核對原文的時間邏輯方向。"),
  mc(16, 4, "Below is some information from another study. Do the ideas in Selena Bieber's letter agree with the information?",
    ["Yes, because her letter says it is better to sleep from 11 p.m. to 8 a.m.", "Yes, because her letter says getting up early is not helpful for learning.", "No, because her letter says students are asked to get to school by 7:30 a.m.", "No, because her letter says teenagers' brains do not work well in early morning classes."], 3,
    ["另一項研究發現早睡的學生考試表現較好，甚至有些人認為早上第一堂課學得更好；這與 Selena 信中主張『青少年在早上第一堂課無法清晰思考、學不好』的論點互相矛盾，所以答案是『不同意』。", "選項三雖然引用了信中真實存在的句子（7:30 a.m.），但那不是兩篇資料真正衝突的地方，屬於『事實正確但理由答非所問』的陷阱；真正互相矛盾之處在於『早晨上課學習效果好壞』這個論點。"],
    "『同意或不同意』的比較題除了判斷 Yes/No，更要核對後面所給的『理由』是否真正對應到兩篇文本互相矛盾的那個論點。",
    "選項三雖然引用了信中真實存在的句子，但那不是兩篇資料真正衝突的地方，屬於『事實正確但理由答非所問』的陷阱。"),
];
attach(exam109SchoolLetter, "109-later-is-better", `This is a letter by Selena Bieber to the students in her school.

Later Is Better!
Selena Bieber, Northville High School

Do you feel it's hard to get up early for school and even harder to listen well in the first class at 8 a.m.? Well, this happens to most of us and is not helpful for our learning!

Some studies show that teenagers' brains make melatonin, the hormone that helps sleep, between 11 p.m. and 8 a.m. So it's better for us to sleep during these nine hours. But here comes the problem. We're asked to get to school by 7:30 a.m. That means we have to get up before 7, when our brains should still be sleeping. That's why we're always so tired and can't think clearly in early morning classes. No clear head, no good learning, right?

If we can't change how our body works, why can't school start later? In this way, we can not only sleep more but also learn better!

Want to help us make it happen? Visit www.nvhsstudsup.org/later-better to learn more.

Below is some information from another study:
We studied 48 high school students and found that the students who went to bed earlier did better on their school tests. This is not only true for those who slept nine hours, but also true for those who slept less. And some of them agreed that they learned better in early morning classes.`, "Later Is Better：改晚上學倡議信");

const exam109Kivalina = [
  mc(16, 4, "What can we learn about Kivalina?",
    ["It is waiting to shine.", "It has become history.", "It is fighting for one last hope.", "It has given up its chance to rise."], 2,
    ["文中提到有團體（ReLocate）正與因紐特人一起努力搶救 Kivalina，居民也仍在祈禱海水不要太快淹沒家園，顯示他們還沒放棄，仍在為最後一線希望努力。", "村莊還沒被淹沒、消失，並非「已成歷史」（排除選項二）；文中沒有正面、光明的描述可支持「等待發光」（排除選項一）；居民仍在努力搶救，並非已經放棄（排除選項四）。"],
    "推論題要綜合全文語氣（雖然困難但仍有人努力、仍抱著希望），而不是只看單一句的負面敘述就下結論。",
    "不要因為文章描述的處境很艱難，就誤選『已經放棄』，文中明確提到還有團體在努力搶救、居民仍在祈禱，代表尚未放棄。"),
  mc(20, 2, "What does it mean when we say a place is uninhabitable?",
    ["It is not big.", "It is not popular.", "It cannot be bought.", "It cannot be lived in."], 3,
    ["句子接著說「the island could be covered by the Chukchi Sea...These Inuit people will have to leave their home」，因為即將被海水淹沒、居民必須離開，可知 uninhabitable 是「不能居住」的意思。", "un-（不）＋habit（同 inhabit，居住）＋-able（可以…的），可直接推出『不能居住的』，與地方大小、受歡迎程度或能否購買無關。"],
    "利用構詞法拆解：un-（不）＋habit（居住，同 inhabit）＋-able（可以…的），可直接推出「不能居住的」。",
    "不要只看字面聯想到跟『大小』有關，字根 habit 與『居住』相關，而非面積。"),
  mc(16, 3, "What does the writer think about the Inuit people in Kivalina?",
    ["Their way of living has been hurting the earth.", "They might not be able to get enough money to move their village.", "They should make the oil and power companies fix their problems.", "There are better ways than to move their village to somewhere else."], 1,
    ["文中明確指出「It would cost hundreds of millions to move their village, and they have no idea where to get the money」，直接支持作者對他們籌不到搬遷資金的擔憂。", "傷害地球的其實是石油與電力公司，不是因紐特人傳統的狩獵捕魚方式（排除選項一）；文中只是敘述因紐特人自己認為問題出在石油電力公司，並未表態作者本人主張『應該要求公司負責』（排除選項三）；文中沒有提出比搬遷更好的替代方案（排除選項四）。"],
    "作者觀點題要找出文章明確陳述的具體事實（如『不知道去哪籌到這筆錢』）作為依據，而不是從立場猜測作者的道德判斷。",
    "選項三把『原住民認為石油電力公司是禍首』的看法誤植成『作者認為應該要求公司負責』，其實文章並未表態作者本人的建議。"),
  mc(15, 3, "What does the reading say about the Arctic ice?",
    ["The Arctic ice covered 10 km2 of Kivalina.", "The melting Arctic ice kills about 400 Inuit people each year.", "The Arctic ice helped the Inuit people in Kivalina during bad weather.", "The melting Arctic ice has given the Inuit people enough water to use."], 2,
    ["文中說「there is no Arctic ice thick enough to keep them safe from terrible wind and rain」，反面推知過去足夠厚的北極冰層曾在惡劣天氣中保護居民安全。", "「10 km2」描述的是島本身的面積，不是冰層（排除選項一）；「400人」是村莊的總人口，不是每年因融冰而死亡的人數（排除選項二）；文中沒有提到融冰帶來足夠的水可用（排除選項四）。"],
    "細節題常把文章中出現的不同數字（10 km2 描述島的面積、400 人描述村莊人口）故意配對到錯誤的敘述對象，要逐一核對。",
    "選項一、二把文章中提到的面積、人口數字直接套用到與冰層相關的錯誤敘述上，要留意數字原本描述的對象是誰。"),
];
attach(exam109Kivalina, "109-kivalina", `Kivalina, an island village in Alaska, USA, is known by only a few people. It cannot be found on most maps of Alaska because it is only 10 km2. This small Arctic village is home to 400 Inuit people. However, their home will become uninhabitable because the island could be covered by the Chukchi Sea by 2025. These Inuit people will have to leave their home.

But life now is already difficult. Over the past twenty years, winters have become warmer, the Arctic ice has kept melting, and the sea has been rising. These changes have made it harder to live by hunting and fishing than before. What's worse, there is no Arctic ice thick enough to keep them safe from terrible wind and rain.

These Inuit people think it is the oil and power companies in Alaska that have brought all these troubles, but they are the ones who are paying the price. It would cost hundreds of millions to move their village, and they have no idea where to get the money. Groups like ReLocate are working together with the Inuit people to save Kivalina, but nobody is sure if their hard work will come to anything. All the Inuit people can do now is to pray the rising sea will not cover their home too soon.

(The Inuit people are a group of people who live in the Arctic.)`, "Kivalina：正在消失的北極村落");

const exam109Commute = [
  mc(16, 3, "But before you decide whether it's OK to have such a long commute, it's best to know ___(35)___.",
    ["what else you can do", "how you can enjoy it more", "how it will change your life", "what is the best way of commute for you"], 2,
    ["空格後面接續好幾段都在描述長途通勤如何影響生活（睡眠變少、沒時間陪家人朋友、身體健康變差、心情變差），正對應「how it will change your life」。", "全文接下來談的是長時間通勤帶來的『負面影響』，不是還能做什麼（選項一）、如何更享受通勤（選項二），也完全沒有討論交通方式的選擇（選項四）。"],
    "克漏字空格常出現在段落開頭，扮演『這段接下來要談什麼』的引導句功能，要通讀後面幾段再回填。",
    "不要被前一句提到的『搭公車或開車』（交通方式）誤導選選項四，全文接下來談的是長時間通勤帶來的『影響』，不是交通方式的選擇。"),
  mc(19, 2, "A long commute not only eats up your time but also ___(36)___.",
    ["costs you money", "hurts your health", "makes traffic terrible", "kills the planet slowly"], 1,
    ["空格後面緊接著說明：容易發胖、常有頸背問題、更容易有心臟病，這些都是健康方面的問題，直接對應「hurts your health」。", "本段完全沒有提到金錢花費、交通壅塞或環境污染，只描述身體健康方面的影響。"],
    "空格後方緊接的句子通常直接舉例說明空格內容，此處三個健康問題（發胖、頸背痛、心臟病）明確對應『傷害健康』。",
    "不要選 costs you money，本段完全沒有提到金錢花費，只描述身體健康方面的影響。"),
  mc(9, 3, "It's easier for them to have heart problems too. ___(37)___.",
    ["And that's why", "But that's not all", "And here's an example", "But that can be stopped"], 1,
    ["前面才列完身體健康問題（發胖、頸背痛、心臟病），後面接著又列出情緒、心情、工作表現等『另一類』新問題，「But that's not all」正好用來銜接『還不只如此，還有更多』。", "「And that's why」需要前後有明確因果關係，此處不是在解釋原因；「here's an example」暗示要重複舉例前面同一類問題，但後面其實是全新的一類問題（情緒、工作）；「that can be stopped」是提出解決方法，但後文並未談解決方案。"],
    "銜接詞題要看前後兩句的邏輯關係：是『列舉更多同類事項』還是『提出反例、原因或解決方法』，此處是追加更多負面影響，故選『不僅如此』。",
    "不要誤選選項三，後面接的是『另一類新的問題（情緒、工作表現）』，不是重複舉例前面已經講過的身體健康問題。"),
];
attach(exam109Commute, "109-long-commute", `After a lot of tests and interviews, you finally got into a good school or got a good job. But there's a problem: it's a long way from home. "Well, I can take the bus or drive," you might think. But before you decide whether it's OK to have such a long commute, it's best to know ___(35)___.

Having a long commute means you'll get fewer hours of sleep, and that'll make you feel tired easily. You'll also have less time for friends and family, for exercise, or for a nice meal.

A long commute not only eats up your time but also ___(36)___. Studies show that people who have a long commute get fat easily and often have neck or back problems. It's easier for them to have heart problems too. ___(37)___. Studies find that these people get angry more often, feel less happy with their lives, and do less well at work.

Now, does that good school or that good job still sound good to you?`, "長時間通勤的代價");

const exam109Munich = [
  mc(16, 3, "People in the city of Munich have spoken their mind: they do not want to host the Winter Olympics in 2022. To the cities that fight for this chance, ___(38)___.",
    ["this is surely a surprise", "this sounds like a good idea", "this is perhaps a smart answer", "this is old news they have heard"], 0,
    ["接下來的句子解釋「奧運通常能為主辦城市帶來許多好處」，再問「那慕尼黑人民為什麼要拒絕？」，顯示作者認為這個決定令人意外，對應「this is surely a surprise」。", "文章接下來還特地解釋原因，顯示這是件值得深入說明的意外事件，而不是選項四所說的『早已聽過的舊聞』。"],
    "通讀後續句子（為什麼慕尼黑會拒絕？）可以感受到作者語氣裡帶有『意外、不解』的態度，對應『這無疑是個意外』。",
    "不要選選項四『這是他們已經聽過的舊消息』，文章接下來還特地解釋原因，顯示這是件值得說明的意外事件，而非早已知悉的舊聞。"),
  mc(16, 3, "The Olympics ___(39)___ for people in Munich. For them, the world's biggest sports festival could invite serious trouble.",
    ["had given hopes", "are a different story", "bring a bright future", "have been a great plan"], 1,
    ["緊接著說「could invite serious trouble」，顯示對慕尼黑人民來說，奧運跟一般印象中的好處完全不同，符合「are a different story」（是另外一回事、情況不一樣）。", "選項一、三、四都用正面詞彙描述奧運，但後一句明確描述奧運帶來的是麻煩，語意方向相反。"],
    "空格後方立刻出現負面說明（可能招致嚴重麻煩），代表空格語意也應偏向負面或『與眾不同』，而非正面美化的敘述。",
    "不要被前一段提到『奧運通常帶來很多好處』的正面印象定錨，誤選正面選項，這一段正是要對比說明慕尼黑的情況『不一樣』。"),
  mc(16, 4, "Life would become terrible and nature would be hurt. And ___(40)___: Munich hosted the 1972 Summer Olympics, and its neighbor, the mountain town Garmisch-Partenkirchen, hosted the 1936 Winter Olympics.",
    ["this will not go away; it will stay", "they are not just saying it; they are going to do it", "they do not speak for others; they only speak for themselves", "this is not a guess; it is a lesson they learned from hard experience"], 3,
    ["空格後面用冒號舉出具體史實：慕尼黑辦過 1972 年夏季奧運，鄰近的加米施帕滕基興辦過 1936 年冬季奧運，這些都是真實發生過的經驗，並非憑空猜測，對應「this is not a guess; it is a lesson they learned from hard experience」。", "選項一語意含糊，且與後面具體的歷史舉例（過去主辦奧運的經驗）不直接呼應；選項二、三與後面舉出的史實內容也不相關。"],
    "冒號後面舉出的具體史實（1972年、1936年真的辦過奧運）就是判斷空格語意的關鍵，指向『這是真實經驗換來的教訓』，不是憑空猜測。",
    "不要選選項一『這不會消失，會一直存在』，語意含糊且與後面具體的歷史舉例（過去主辦奧運的經驗）不直接呼應。"),
  mc(9, 2, "Still, the heavy price Munich paid does not worry the cities that are in the race to get the 2022 Winter Olympics. ___(41)___, they are happy that Munich said no to the Olympics—their chances of getting the Games have become higher.",
    ["In fact", "If so", "However", "Finally"], 0,
    ["第二句不但沒有跟第一句意思相反，反而更進一步說明、加強語氣（不只不擔心，甚至還很高興），「In fact」正是用來承接前一句、進一步補充或加強說明同一件事。", "However 會錯誤地暗示轉折對比，但前後兩句其實語意一致、只是加強說明；If so 需要一個條件句作為前提，這裡是直述句不需要條件；Finally 暗示這是一連串事項中的最後一項，不符合這裡『加強語氣』的功能。"],
    "「In fact」用來承接前一句、進一步補充或加強語氣說明同一件事，不是用來轉折或做總結。",
    "不要誤選 However，前後兩句語意是『更進一步說明、加強』，不是『轉折對比』，方向要看清楚。"),
];
attach(exam109Munich, "109-munich-olympics", `People in the city of Munich have spoken their mind: they do not want to host the Winter Olympics in 2022. To the cities that fight for this chance, ___(38)___. The Olympics usually do a lot of good to the host city. The Games bring in jobs, visitors, and, most important of all, money. So why did people in Munich say no?

The Olympics ___(39)___ for people in Munich. For them, the world's biggest sports festival could invite serious trouble. There would be a lot of building work before the Games, and during the Games, too much traffic and too many visitors. Life would become terrible and nature would be hurt. And ___(40)___: Munich hosted the 1972 Summer Olympics, and its neighbor, the mountain town Garmisch-Partenkirchen, hosted the 1936 Winter Olympics.

Still, the heavy price Munich paid does not worry the cities that are in the race to get the 2022 Winter Olympics. ___(41)___, they are happy that Munich said no to the Olympics—their chances of getting the Games have become higher.

11/11/2013, NOlympics in Munich`, "慕尼黑拒辦冬奧事件");

window.__ENG_TRANSCRIBED_109 = {
  minutes: 60,
  omittedNote: "109年英語（閱讀）題本共41題，其中第1題（需依「Look at the picture」判斷男子手拿何種餐具的圖片）、第22題（四個選項本身皆為描繪隔水加熱步驟的示意圖，須以圖片本身判讀）因內容純為圖片且無法轉錄為等義文字而略過，其餘39題皆已逐題轉錄並核對官方答案。",
  questions: [
    ...exam109,
    ...exam109Poem,
    ...exam109YardSale,
    ...exam109SunnyMarket,
    ...exam109Chocolate,
    ...exam109FoodTruck,
    ...exam109SchoolLetter,
    ...exam109Kivalina,
    ...exam109Commute,
    ...exam109Munich,
  ],
};

  // ==================== 110 年 ====================
const exam110Singles = [
  mc(1, 1, "Listen!  The baby ___ in the bedroom.  Why don't you go in and take a look?",
    ["cried", "cries", "is crying", "will cry"], 2,
    ["句首 Listen! 是典型的訊號詞，表示說話當下正在發生的動作，要用現在進行式。", "cried（過去式）、cries（現在簡單式，描述習慣）、will cry（未來式）都不符合『此刻正在哭』的語意，只有 is crying 正確。"],
    "看到 Listen!／Look! 開頭的句子，幾乎可以直接判斷要用現在進行式。",
    "不要被 baby 這種主詞的『可愛聯想』誤導去選過去式或未來式，要抓 Listen! 這個時間訊號詞。"),
  mc(18, 2, "Jill is ___ that the city park is closed for the music festival because now she can't jog there.",
    ["excited", "proud", "scared", "unhappy"], 3,
    ["後半句說明原因：因為公園關閉，Jill 沒辦法去慢跑了，這是負面的結果。", "excited（興奮）、proud（驕傲）、scared（害怕）都不符合『因為不能慢跑而感到』的情緒，只有 unhappy（不開心）合理。"],
    "情緒形容詞題要先看後面的原因子句是正面還是負面，再挑符合方向的情緒字。",
    "不要看到 park is closed 就直覺選 scared，要注意句子強調的是『不能慢跑』這個生活小困擾，而非害怕。"),
  mc(17, 1, "Steven wants to be a ___, because he loves to watch people enjoy the food he prepares.",
    ["cook", "doctor", "driver", "farmer"], 0,
    ["後半句提到『他準備的食物』（the food he prepares），暗示這個職業與烹飪有關。", "doctor、driver、farmer 都與『準備食物給人吃』無關，只有 cook（廚師）符合句意。"],
    "職業字彙題要抓句子裡的關鍵動作線索（這裡是 prepares food），對應到相關職業。",
    "不要只看到 food 就聯想到 farmer（農夫，種食物的人），farmer 種植食物但不是『準備』給人吃的人。"),
  mc(3, 2, "Paul misses his parents a lot.  He ___ them since he came to work in Taiwan a year ago.",
    ["didn't see", "doesn't see", "hasn't seen", "won't see"], 2,
    ["since he came to work in Taiwan a year ago 是現在完成式的典型信號詞，標示一個過去的起點，動作持續到現在。", "didn't see、doesn't see、won't see 分別是過去式、現在簡單式、未來式，都無法表達『從一年前起、一直到現在都沒見到』的持續狀態，只有 hasn't seen 正確。"],
    "看到 since + 過去時間點，直接聯想現在完成式 have/has +過去分詞。",
    "不要因為句中有 a year ago（過去時間）就誤選過去式，這裡的 a year ago 是接在 since 後面，標示的是『起點』，整句仍要用現在完成式。"),
  mc(1, 3, "Our teacher Ms. Wu seldom laughs, but when she ___, everyone in the same building can hear her.",
    ["can", "does", "has", "will"], 1,
    ["主要子句 seldom laughs 是現在簡單式，描述老師的習慣行為，seldom 是頻率副詞的信號詞。", "後面的 when 子句要用一個字代替前面的 laughs，因為 laughs 是現在簡單式動詞，所以要用助動詞 does 代替，而不是情態助動詞 can/will 或 has。"],
    "句子裡如果需要用一個字代替前面出現過的一般動詞，要選跟原本動詞時態一致的 do/does/did，而不是隨便挑一個助動詞。",
    "不要看到 can 或 will 覺得語意也通就選錯，這裡是代替現在簡單式動詞 laughs，只有 does 才時態一致。"),
  mc(2, 2, "My sister is coming to my home today.  She ___ with me for a week.",
    ["stays", "stayed", "has stayed", "will stay"], 3,
    ["is coming today 是現在進行式表示已安排好的近未來計畫，接下來『待一星期』也是尚未發生的未來動作。", "stays（現在簡單式）與 stayed（過去式）都不符合『尚未發生』的語意，has stayed（現在完成式）則暗示動作已經開始，也不對，只有 will stay 正確描述未來將發生的事。"],
    "一句話裡如果前面已經用現在進行式表達近未來計畫，後面接續的動作通常也會用未來式呼應。",
    "不要被『現在進行式』的外觀迷惑而選 stays，要注意這裡描述的是今天之後才會發生的『待一星期』。"),
  mc(19, 2, "Edward had worked as a computer engineer for ten years.  This ___ helped him a lot when he started his own computer shop.",
    ["chance", "experience", "hobby", "knowledge"], 1,
    ["前一句提到 Edward 當了十年的電腦工程師，這是長期累積的職場資歷。", "chance（機會）、hobby（嗜好）、knowledge（單純的知識）都不能完整涵蓋『做了十年工作所累積的東西』，只有 experience（經驗）最貼切。"],
    "科技／職場情境的字彙題，先找句子描述的是『機會、經驗、嗜好還是知識』，再挑最符合上下文的字。",
    "不要只看到工程師、電腦就直覺選 knowledge，句子強調的是『做了十年』帶來的實務經驗，而不是單純的知識。"),
  mc(10, 2, "If you're interested in our business plan, ___ this number and ask for Ms. Lee.  She'll answer your questions.",
    ["calling", "call", "and call", "to call"], 1,
    ["if 子句之後的主要子句是在對讀者下達指示（打電話、詢問 Ms. Lee），這是祈使句，祈使句要用動詞原形開頭。", "calling（動名詞）、to call（不定詞）都不能單獨開頭當祈使句動詞，and call 則多了一個不必要的連接詞，只有原形動詞 call 正確。"],
    "祈使句（下指令、給建議）永遠用動詞原形開頭，不能用 V-ing 或 to V。",
    "不要因為前面是 if 子句就以為後面要接完整子句主詞，這裡其實是祈使句，沒有主詞，直接用原形動詞。"),
  mc(9, 2, "Jimmy would not get up for breakfast, ___ his dad had already tried to pull him from his bed several times.",
    ["although", "because", "if", "until"], 0,
    ["句意是：儘管爸爸已經試著把他從床上拉起來好幾次，Jimmy 還是不肯起床吃早餐，前後兩件事是『讓步、轉折』關係，不是因果關係。", "because（因為）、if（如果）、until（直到）都無法表達『儘管…卻…』的轉折語氣，只有 although 符合。"],
    "從屬連接詞題要先判斷前後兩句是因果、條件、時間還是讓步關係，再選對應的連接詞。",
    "不要看到『爸爸拉他起床』就直覺選 because，因為句意其實是『爸爸努力了，但 Jimmy 仍然不起床』，是轉折不是因果。"),
  mc(17, 3, "Duncan spent all his money trying to ___ the bookstore his mom left him.  Sadly, the business never got better, and he had to close it in the end.",
    ["build", "buy", "save", "start"], 2,
    ["後文說『這家店的生意始終沒有好轉，最後他不得不把店收掉』，暗示 Duncan 原本是想努力維持、挽救這家已經存在的書店。", "build（建造）、buy（購買）、start（開始經營）都暗示書店是全新的，但句子明說書店是媽媽留給他的，只有 save（挽救、設法維持）符合『花光積蓄想撐住這家店』的語意。"],
    "字彙題要通讀整句甚至下一句的結果，才能判斷動詞真正的語意方向，不能只看單一片語。",
    "不要看到 the bookstore his mom left him 沒有仔細讀完就選 buy 或 start，這家店本來就是他的，他不是要『買下』或『開始』它，而是想『挽救』它。"),
  mc(13, 4, "Fiona loves listening to her children sing songs ___ at school.",
    ["are learned", "that learned", "they learned", "that they are learned"], 2,
    ["songs 是先行詞，後面接的是形容詞子句補充說明『在學校學的歌』，子句中 songs 是被學習的受詞。", "由於關係代名詞在子句中做受詞，口語與非正式書面可以省略 that／which，因此 they learned（省略了受詞關係代名詞 that/which）是正確、通順的簡化形式；are learned 是被動語態但缺少連接詞無法直接接在名詞後，that learned 與 that they are learned 則文法或語意都不通。"],
    "關係子句中若關係代名詞在子句裡做『受詞』，是可以省略的，省略後子句會直接以主詞＋動詞開頭。",
    "不要看到選項裡有 that 就覺得比較『完整』而誤選，要先判斷關係代名詞在子句中的角色，這裡受詞可省略，加了 that 反而選項本身文法不通。"),
  mc(8, 2, "Beverly eats lots of snacks ___ meals.  That's why she is often too full to eat anything at mealtimes.",
    ["after", "between", "during", "from"], 1,
    ["後句說『這就是為什麼她正餐時間常常太飽吃不下』，暗示她是在『兩餐之間』吃零食，才會影響到正餐的食欲。", "after（在…之後）、during（在…期間）、from（從）都不符合『兩餐中間』的空間概念，只有 between 正確。"],
    "地點／時間介系詞題可以想像空間關係：between 表示夾在兩者中間，是這類『餐與餐之間』題目的典型答案。",
    "不要看到 meals 是複數就誤選 during（在正餐『期間』吃零食反而說不通，因為那就是正餐本身了）。"),
  mc(5, 3, "Nora: Can I check your drawer for some tools we can use?\nMatt: Sure.  Take a look.  See if you can find ___ in there.",
    ["any", "it", "others", "those"], 0,
    ["Nora 問的是『有沒有工具』，這是不特定數量的可數名詞（tools），在疑問句／條件句情境中要用不定代名詞 any 代替。", "it 是單數代名詞、others／those 則暗示『另外的、其他的』一群東西，語意上都對不上『看看有沒有工具』這個泛指用法，只有 any 正確。"],
    "代名詞題先看它要代替的名詞是單數還是複數、特定還是不特定，再選對應的代名詞。",
    "不要因為前面提到 tools（複數）就直覺選 those，這裡是問『有沒有』而不是『那些』，不特定數量的可數名詞要用 any。"),
];

const passage1516 = "We've prepared many wonderful surprises for you at e-BeautiMed, BeautiMed's online store!\n\nJoin \"BeautiMed Friend\" online for free and get 2000 BeautiMed points!\n\nAlready a \"BeautiMed Friend\"?  Come collect your free gift by entering your \"BeautiMed Friend\" card number at e-BeautiMed before 8/31.\n\nGet 500 BeautiMed points by shopping at e-BeautiMed and you'll get 500 more points if you spend more than $1,000.\n\nShop at e-BeautiMed during 7/1-8/31 and you may win $5,000 or free movie tickets!\n\nInvite a friend to join \"BeautiMed Friend\" and you both can get 1000 points each!";
const exam110Set1516 = attach([
  mc(15, 2, "What is this ad for?",
    ["Teaching people how to use their BeautiMed points.", "Telling people they can shop at BeautiMed on the Internet now.", "Inviting people to share their shopping experience at e-BeautiMed.", "Letting people know what is on sale at e-BeautiMed from 7/1 to 8/31."], 1,
    ["廣告開頭直接點出主旨：『我們在 e-BeautiMed（BeautiMed 的網路商店）為你準備了許多驚喜』，強調的是『網路商店』這個新據點本身。", "整篇廣告條列的都是加入會員、購物、邀請朋友等各種可以拿到點數／禮物的方式，主旨是宣傳這個新的網路購物平台，而不是單純教點數怎麼用、分享購物心得，或只講某個活動的優惠內容。"],
    "廣告類文章的主旨通常就在開頭第一句，先讀開頭抓住『這則廣告到底在賣什麼』。",
    "不要因為文中提到很多點數、優惠活動的細節，就誤以為主旨是『教你用點數』，那些只是吸引你使用這個網路商店的手段。"),
  mc(15, 3, "What will NOT get you BeautiMed points?",
    ["Shopping at e-BeautiMed.", "Joining \"BeautiMed Friend\" online.", "Inviting a friend to join \"BeautiMed Friend.\"", "Entering the \"BeautiMed Friend\" card number."], 3,
    ["逐條核對廣告內容：加入會員送 2000 點、購物送 500（滿千再送 500）點、邀請朋友雙方各得 1000 點，這三項都明確寫著會得到『points（點數）』。", "輸入會員卡號的那一條寫的是『collect your free gift（領取免費禮物）』，得到的是『禮物』而不是『點數』，所以這一項不會讓你得到 BeautiMed points。"],
    "細節題要逐一比對每個選項在原文中對應的句子，特別留意『點數』和『禮物』這種容易混用但其實不同的詞。",
    "不要看到都跟『BeautiMed Friend』有關就以為輸入卡號也是拿點數，原文寫的是『免費禮物』，用詞不同。"),
], "110-set-15-16", passage1516, "e-BeautiMed 網路商店廣告");

const passage18 = "Joey: Lynn, have you tried Caldron?  I've heard that restaurant is good.\nLynn: I have.  I went there once for Tom's party.\nJoey: And?\nLynn: Well, I never thought I would have to cook for myself when eating out.\nJoey: But it's fun to cook your own food.\nLynn: I don't see any fun in that.  Besides, I want nice food.\nJoey: So you didn't like the food there?\nLynn: Everything tasted the same.  I mean, they were all cooked in the same boiling pot.  How could they taste different?  I just kept throwing strange things into the pot.  I didn't even know what half the things were made of.\nJoey: Don't worry.  Everything should be safe to eat after a hot bath in the pot.  And you didn't get sick after that, right?  Besides, you tried something different there.  Still a good experience, I think?\nLynn: I don't think we share the same idea of good experiences.";
const exam110Set18 = attach([
  mc(16, 3, "What can we learn about Lynn from the dialogue?",
    ["She does not cook.", "She likes to try new food.", "She did not enjoy the food at Caldron.", "She changed Joey's idea about Caldron."], 2,
    ["整段對話中 Lynn 一直在抱怨 Caldron：不喜歡自己煮、東西都煮成一樣的味道、不知道丟進鍋裡的是什麼，語氣從頭到尾都是負面的。", "最後一句『I don't think we share the same idea of good experiences.』是反諷 Joey 說的『好經驗』，暗示她完全不認同那是一次好的用餐體驗，等於明確表示她並不喜歡那裡的食物。"],
    "對話題要看說話者整體的語氣走向，而不是只看單一句話，多句抱怨累積起來才能確定她的真實態度。",
    "不要被 Joey 一直說『這樣很有趣、算是好經驗吧』誤導，題目問的是 Lynn 的感受，Lynn 自己說的話才是答案依據。"),
], "110-set-17-18", passage18, "Joey 與 Lynn 談 Caldron 餐廳（第17題因需觀看照片選項，無法轉錄，故省略）");

const passage1921 = "Dear Diary,\nJune 7, 2011\nI was very sad to hear what happened to Woollie yesterday.  Woollie was my favorite sheep.  I have a storybook about Woollie.  It says when Woollie was four, he ran away from Mr. Armstrong's farm, and it took Mr. Armstrong six years to find Woollie.  But Woollie had grown so much fleece that he didn't even look like a sheep.  Mr. Armstrong decided to cut his fleece on TV so everyone could see.  Daddy said this happened on the day I was born.  Woollie's fleece weighed 27 kg, and could make clothes for 20 large men.  I asked Daddy if his favorite vest was made from Woollie's fleece.  Daddy said no, because Woollie's fleece was sold to collect money for sick kids.  In the storybook, Woollie was taken to see Ms. Stella Clark, the leader of our city then.  They even had tea together.  Daddy said Woollie did meet Ms. Clark, but he wasn't sure if they had tea.  Daddy said Woollie was put down because he was too sick and there was no way to help him.  I cried.  I hope Woollie will be happy up there in the sky.";
const exam110Set1921 = attach([
  mc(16, 4, "What do we know about Woollie from Katie's diary?",
    ["Woollie was older than Katie.", "Woollie was taken to visit sick kids.", "Woollie was sick when he ran away.", "Woollie looked strange without his fleece."], 0,
    ["日記提到：Woollie 四歲時走失，Mr. Armstrong 花了六年才找到牠，而『找到牠的那天正好是 Katie 出生的那天』，所以 Woollie 被找到時已經 4+6=10 歲，那時 Katie 才剛出生（0歲）。", "把這兩條線索連起來就能推論：Woollie 一定比 Katie 年長很多，選項 B（被帶去探望病童的是牠的羊毛被賣掉籌款，不是牠本人被帶去）、C（走失時生病）、D（沒有羊毛看起來很奇怪，其實文中是『長了太多羊毛而不像羊』，方向相反）都與原文不符或過度延伸。"],
    "遇到年齡、時間類的推論題，先把文中出現的所有數字或時間點列出來，再合併計算。",
    "不要把『Woollie 的羊毛被賣掉去幫助生病的孩子』誤讀成『Woollie 本人被帶去看生病的孩子』，兩者主詞不同。"),
  mc(15, 3, "What happened when Woollie was put down?",
    ["He was sold.", "He couldn't be found.", "He died.", "He became famous."], 2,
    ["日記最後說『Daddy said Woollie was put down because he was too sick and there was no way to help him.  I cried.』，緊接著就是 Katie 哭泣、希望牠在天堂快樂。", "『put down』是英文中用來委婉表示『（因病重無法醫治而）人道處理、安樂死』動物的說法，加上後面『我哭了』『希望牠在天上快樂』的情緒線索，都指向 Woollie 已經死亡。"],
    "遇到不確定意思的片語，可以從說話者接下來的情緒反應（哭泣、悼念用語）反推這個片語大概是負面且嚴重的意思。",
    "不要只看到 put down 字面上很中性就誤選『被賣掉』，這裡的 put down 是安樂死的委婉說法，不是單純放下或賣掉。"),
], "110-set-19-21", passage1921, "Katie 的日記：關於綿羊 Woollie（第20題因需辨認照片選項，無法轉錄，故省略）");

const passage2224 = "Here's The Piano Lesson, one of Henri Matisse's most famous paintings.  The boy in the picture is the painter's son, Pierre.  In the picture, Pierre looks quite serious.  Why?  Well, look at the yellow candle on the red piano.  It's almost burned down.  So maybe Pierre has already practiced for hours.  And Matisse uses a lot of gray, not a very fun color, right?  It shows how the poor kid feels, don't you think?\n\nOn the top right corner, you can see a woman sitting straight on a seat.  Is she Pierre's piano teacher?  Or his mother?  Well, if you're a Matisse fan, you'll know this is in fact another painting by him, Woman on a High Stool.  Interesting, right?  Matisse likes to do that a lot.  In fact, there's another work by Matisse in the picture.  Did you find it?  Right!  The sculpture on the bottom left corner!\n\nMatisse painted this picture in 1916.  Pierre was already 16 then, but the artist painted his son much younger than he really was.  Pierre had gone away to be a soldier, and Matisse didn't know whether he would come back.  Maybe this is a worried father's way to remember the good old days.";
const exam110Set2224 = attach([
  mc(16, 4, "What can we learn about The Piano Lesson from the reading?",
    ["Matisse painted it when his son was away from home.", "The woman who sits on a seat behind the boy is his mother.", "Matisse uses yellow and red to show that his son was happy.", "The candle on the piano shows that the piano lesson has just begun."], 0,
    ["最後一段說明：Matisse 畫這幅畫時，Pierre 其實已經 16 歲、且已經離家去當兵，畫家甚至不知道兒子能不能平安回來。", "把『畫中把 Pierre 畫得比實際年齡小很多』和『Pierre 當時已經離家從軍』兩條線索合起來，就能推論這幅畫是在兒子離家期間畫的，屬於畫家對過去美好時光的追憶；文中也明說角落的女子其實是另一幅畫（並非確定是母親），蠟燭快燒盡代表已經彈了很久（不是剛開始），配色是灰暗而非表現快樂，故其餘選項皆與原文不符。"],
    "推論題要把文章前後兩段看似無關的線索（畫中人物年齡、真實年齡、離家從軍）連起來思考，而不是只看單一句子。",
    "不要看到蠟燭、鋼琴顏色的描述就直接照字面選『剛開始上課、兒子很快樂』，文中其實是用這些細節暗示相反的、比較沉重的氣氛。"),
  mc(16, 3, "What does \"do that\" mean in the reading?",
    ["Put his family in his paintings.", "Paint to remember the good old days.", "Use a lot of fun colors in his art works.", "Put his earlier art work in a new painting."], 3,
    ["\"do that\" 出現在句子『this is in fact another painting by him... Matisse likes to do that a lot.』之後，緊接著又舉了雕像也是他另一件作品的例子。", "往前找這個代名詞片語所指代的具體行為：把自己先前畫過的作品（Woman on a High Stool、那座雕像）放進新的畫作裡，這正是選項 D 的意思。"],
    "代名詞或代動詞片語（do that / do so）的指涉，要往前找它所代替的那個具體動作或行為，再代入句子檢查語意是否通順。",
    "不要把 do that 誤解成『用很多顏色作畫』或『畫家人』，這裡指的具體行為是『把舊作放進新畫裡』，緊接著的雕像例子就是最直接的證據。"),
  mc(16, 3, "What is NOT used in the reading to refer to Henri Matisse?",
    ["The artist.", "The painter.", "The poor kid.", "A worried father."], 2,
    ["文中稱呼 Matisse 的用詞包括 the artist、the painter，最後一段又用 a worried father 稱呼他（擔心兒子的父親）。", "『the poor kid』（可憐的孩子）出現在第一段，指的是畫中『看起來很嚴肅、彈了很久琴』的兒子 Pierre，而不是畫家 Matisse 本人，所以是題目要選的『沒有用來指稱 Matisse』的選項。"],
    "指稱題要先把文中每一個代稱都對應回它真正指的人，再檢查選項是否張冠李戴。",
    "不要因為 the poor kid 也出現在同一篇文章裡，就以為它跟 the artist、the painter 一樣是指 Matisse，這裡指的其實是他的兒子。"),
], "110-set-22-24", passage2224, "解讀名畫《The Piano Lesson》");

const passage2528 = "On Teachers' Day, we thank our teachers for their hard work.  We also celebrate this day to remember Confucius, the great Chinese teacher from 2,500 years ago.  Well, that's everything we're taught about Teachers' Day.  But, the first Teachers' Day was not on Confucius's birthday, and it was not about thanking our teachers.\n\nIn 1930, Mr. Tai Shuang-qiu and other teachers celebrated the first Teachers' Day in Nanjing.  But there was nothing to celebrate.  Teachers were paid very little and not respected.  These teachers took this chance to shout out their problems.  They had Teachers' Day on June 6 because the date was easy to remember and near the end of the school year.  This action by Mr. Tai and the other teachers was welcomed and followed by teachers from other cities.  In 1939, the government made Teachers' Day a national holiday.  However, it was on August 27, the day when Confucius's birthday was celebrated.  Not everyone hailed this decision: Teachers' Day was never about Confucius, and Confucius couldn't speak for all the teachers either.\n\nOne funny thing was that the government was wrong about the date of Confucius's birthday.  In 1952, people found out he was in fact born on September 28.  That was when we started to celebrate Teachers' Day on Confucius's real birthday.";
const exam110Set2528 = attach([
  mc(15, 2, "What idea is talked about in the reading?",
    ["How Teachers' Day is celebrated now.", "Why Teachers' Day was celebrated at first.", "Why Confucius was seen as a great teacher.", "How teachers today feel about Teachers' Day."], 1,
    ["文章開頭先講大家熟悉的教師節印象，接著用 But 轉折：『第一個教師節其實不是為了紀念孔子，也不是為了感謝老師』，點出全文真正要談的主題。", "後面兩段都在說明教師節最初是老師們為了抗議待遇不佳而發起的節日，屬於『教師節最初為何被慶祝』的歷史說明，而不是現在怎麼慶祝、孔子為何偉大，或現代老師的感受。"],
    "文章用 But／However 轉折之後接的內容，通常才是作者真正想介紹的主旨方向。",
    "不要被第一句『我們感謝老師、紀念孔子』的內容誤導選成主旨，那只是作者要推翻的『大家原本以為的』說法。"),
  mc(15, 3, "Which is true about Teachers' Day from the reading?",
    ["It used to be celebrated on different dates.", "It was started by students for their teachers.", "It has been celebrated in Nanjing for over 2,500 years.", "Teachers decided to celebrate it on Confucius's birthday."], 0,
    ["依文章時間順序整理：1930 年定在 6 月 6 日、1939 年政府改到（誤認的）8 月 27 日、1952 年才改到孔子真正生日 9 月 28 日，日期前後改了三次。", "教師節是老師們自己發起（不是學生發起），最初也不是為了孔子生日而定，政府後來才把日期改到孔子生日，故其餘選項皆與原文不符，只有『曾經在不同日期慶祝過』正確。"],
    "遇到牽涉時間演變的細節題，先把文中出現的每一個年份與日期依序整理成時間軸，再對照選項。",
    "不要把『後來政府選了孔子生日』誤讀成『一開始老師們就決定要用孔子生日』，兩者的決定者與時間點都不同。"),
  mc(20, 3, "What does \"not everyone hailed this decision\" mean in the reading?",
    ["Not everyone cared about the decision.", "Not everyone welcomed the decision.", "Not everyone heard about the decision.", "Not everyone remembered the decision."], 1,
    ["這句話後面緊接著解釋原因：『Teachers' Day was never about Confucius, and Confucius couldn't speak for all the teachers either.』，說明有些人對『把教師節定在孔子生日』這個決定有意見、不認同。", "從『有人不認同、有意見』這個上下文線索，可以合理推知 hailed 應該是正面詞（歡迎、讚許），加上 not everyone 就是『不是每個人都樂於接受』，符合選項 B。"],
    "遇到生字，可以從緊接著的原因說明句（冒號後面的內容）反推這個字大概的正負面方向。",
    "不要把 hailed 誤認為『注意到、聽說』這類中性的字，後文的不滿理由已經暗示這是『歡迎、認同』的意思。"),
  mc(15, 3, "What does the writer try to do with this reading?",
    ["To talk about a problem that no one notices.", "To share a fun experience that was not common.", "To tell a piece of history that few people know about.", "To give an example of an idea that is hard to understand."], 2,
    ["全文用『大家以為教師節是為了孔子』對比『其實最初是老師抗議待遇的節日』，並補充政府誤植孔子生日等鮮為人知的歷史細節。", "這些都是一般人不了解的『歷史真相』，符合選項 C『介紹一段少有人知道的歷史』；文章沒有在講『沒人注意到的問題』『有趣的經驗』或『難懂的概念』。"],
    "作者意圖題要看全文安排的內容性質：是在敘述歷史真相、講故事，還是在說明一個難懂的道理，再對應到最貼切的選項。",
    "不要因為文中有『funny thing（有趣的事）』字眼就選『分享有趣的經驗』，那只是文章中一個小細節的用詞，不是全文的寫作目的。"),
], "110-set-25-28", passage2528, "教師節由來的真相");

const passage2931 = "Dear Traveler,\nYou have bought an NFR ticket online for a train that runs between White Water City and Cloud City.\nWe are sorry to tell you that, because of the typhoon last month, the Sand Town – Spring Town line will be closed between August 14 and 28, 2016.  During this time, some trains will change lines and will not stop at a few stations.  There will be free buses to take travelers to these stations.  Please check below for the changes.  Visit http://www.nfr.gov/ for more information.\nWe wish you a nice summer.\n\nLena Muller\nNational Formosa Railway\n\nTrain schedule for the new line (from 8/14 to 8/28):\nGoing South — Train RL101: White Water City to Cloud City; Train RL102: White Water City to Spring Town; Train RL103: Green City to Cloud City.\nGoing North — Train RL201: Spring Town to Green City; Train RL202: Cloud City to Green City.\nTrains that run between Green City and Cloud City will take the Smoke Town – Spring Town line, and will stop at every station.\nThe free buses for the Sand Town – Spring Town line will wait at Green City (going south) and Spring Town (going north) stations.  No stop at Gray Village.\nStations on the line, in order: White Water City, Sand Town, Green City, Smoke Town, Hill Town, Spring Town, Cloud City, Gray Village, Black Town.";
const exam110Set2931 = attach([
  mc(15, 2, "Why does National Formosa Railway write this letter?",
    ["There is a train ticket sale.", "A train line will be closed in July.", "It will open a new train line in August.", "Some of its trains will run on different lines."], 3,
    ["信件開頭說明：因為颱風，Sand Town – Spring Town 線將在 8 月 14 日到 28 日之間關閉，這段期間『有些列車會改走別的路線』。", "信中完全沒提到票價優惠，關閉時間是 8 月而非 7 月，也不是要『開一條新線』，而是既有列車臨時改道，故答案是 D。"],
    "書信類文章的寫信目的通常直接寫在開頭一兩句，先讀開頭就能掌握大方向。",
    "不要把『8 月 14 到 28 日關閉』看錯成 7 月，時間細節要仔細核對。"),
  mc(15, 3, "What is true about NFR's trains between August 14 and 28, 2016?",
    ["No trains will stop at Spring Town.", "Trains that change lines will all stop at Cloud City.", "People can take the free buses to any station on the Sand Town - Spring Town line.", "People can go to Hill Town on any train that runs between Green City and Cloud City."], 3,
    ["信中說明：『行駛於 Green City 和 Cloud City 之間的列車，會改走 Smoke Town – Spring Town 線，並且每一站都停』，而 Hill Town 正是這條線上 Green City 和 Cloud City 之間的其中一站。", "免費接駁車明確排除了 Gray Village（No stop at Gray Village），所以選項 C 錯誤；Spring Town、Cloud City 都仍有列車停靠，故 A、B 也不成立，只有 D 正確。"],
    "遇到含多條路線資訊的文章，先把每條路線『行駛區間』與『停靠規則』分開整理，再逐一核對選項。",
    "不要看到『部分列車改道』就以為所有站點都受影響，題目給的規則是『行駛於 Green City 和 Cloud City 之間的列車每站都停』，要準確對應到 Hill Town 也包含在內。"),
  mc(16, 5, "James lives in Smoke Town.  He wants to go to Black Town on August 19.  How can he get there?",
    ["Take Train RL202 to Green City, get off there, and take the free bus.", "Take Train RL103 to Green City, get off there, and take the free bus.", "Take Train RL102 to Spring Town, get off there, and take Train RL201.", "Take Train RL101 to Cloud City, get off there, and take the free bus."], 0,
    ["Smoke Town 位於 Green City 和 Cloud City 之間的路段上，只有『行駛於 Green City 和 Cloud City 之間、每站都停』的列車會經過 Smoke Town，而 RL202（Cloud City 開往 Green City）正是這種列車，James 可以在 Smoke Town 上車、往 Green City 方向搭到底。", "RL103 是從 Green City 出發開往 Cloud City，方向與 James 要去的 Green City 相反，選項 B 錯誤；免費接駁車只接送往返 Sand Town – Spring Town 線，且在 Green City（往南）等候，正好能接續 James 從 RL202 下車後轉乘去 Black Town，故答案為 A。"],
    "路線規劃題要先確認自己所在的站是哪一條線、哪個方向的列車會經過，再對照轉乘站的接駁安排。",
    "不要只看到『到 Green City』就隨便選一班經過 Green City 的車，還要確認這班車的行駛方向是否真的會『停靠 Smoke Town』並『開往 Green City』。"),
], "110-set-29-31", passage2931, "國家福爾摩沙鐵路改道通知信");

const passage3234 = "In Darayya, a city in Syria, there's a library, and it has 15,000 books on almost every subject you can think of.  However, it is different from any libraries you know: It is a secret underground library, and only people in Darayya know where it is.\n\nOver the years, war has shaken Darayya badly.  Every day, houses are bombed and people are killed.  Stores are closed one after another, and so are schools.  To help the kids in Darayya with their learning, Anas Ahmad, a 19-year-old student, and his friends decided to build a library.  They built the library under the ground to keep it safe from bombing.  But it is dangerous to collect books for the library.  Often, Ahmad and his friends look for books in houses that were bombed.  They need to be careful because they may be killed in another bombing.\n\nYou may ask, \"In a place like Darayya, would people be interested in books?\"  \"Just like the body needs food, the mind needs books,\" says one library user.  In the library, people enjoy their time of reading and forget about the terrible world above, so their life doesn't seem so hard.  Through reading, they are able to dream of a better life after war.";
const exam110Set3234 = attach([
  mc(15, 4, "Below are the ideas that are talked about in the reading.\na. The problems Darayya has.\nb. How Darayya's library was started.\nc. What makes Darayya's library special.\nd. How Darayya's library helps people there.\nIn what order does the writer put his ideas in the reading?",
    ["c   b   a   d.", "b   a   d   c.", "a   c   b   d.", "c   a   b   d."], 3,
    ["第一段先介紹這座圖書館的特別之處（藏書量、地下秘密圖書館）＝ c；第二段先講戰爭帶來的問題（房子被炸、學校關閉）＝ a，再講學生 Anas Ahmad 如何蓋起這座圖書館 ＝ b。", "第三段講的是圖書館如何幫助當地人在戰爭中找到心靈慰藉、夢想更好的生活 ＝ d，因此完整順序是 c → a → b → d，也就是選項 D。"],
    "段落順序題要先為每一段找出一個關鍵詞或主題句，再和選項提供的代號逐一配對。",
    "不要把『這座圖書館很特別』和『圖書館怎麼開始的』兩段內容搞混，第一段講的是特色（地下、秘密），第二段才講起源（誰蓋的、為什麼蓋）。"),
  mc(15, 3, "Why do people in Darayya go to the library even during the war?",
    ["They can get free food.", "They find joy and hope in reading.", "They want to learn how to win the war.", "Their school teachers give lessons there."], 1,
    ["最後一段引用圖書館使用者的話：『心靈也需要書就像身體需要食物一樣』，並說人們在圖書館裡享受閱讀時光、暫時忘卻外面可怕的世界，甚至能藉此夢想戰後更好的生活。", "文章從未提到圖書館提供食物、教打仗知識，或有老師在裡面上課，這些都是與原文不符的選項，只有『在閱讀中找到快樂與希望』正確。"],
    "原因題要找文章中直接說明『為什麼』的句子，通常會用引號內的說法或是解釋性的句子呈現。",
    "不要把『身體需要食物』這句比喻，誤讀成圖書館真的有提供食物，這只是用來比喻『心靈需要書』的修辭手法。"),
  mc(15, 2, "What do we know about Darayya's library?",
    ["It was built during the war.", "It has been bombed many times.", "It was built to remember people who died in the war.", "Most of its books are collected from outside of Darayya."], 0,
    ["第二段說明：『戰爭嚴重打擊了 Darayya，為了幫助孩子們的學習，Anas Ahmad 和朋友們決定蓋一座圖書館』，可知這座圖書館正是在戰爭期間興建的。", "文中沒有提到圖書館本身曾被轟炸、也不是為了紀念戰爭死者而建，書籍多半是從『被炸毀的房屋』裡就地收集，而不是從 Darayya 以外的地方運來，因此只有 A 符合原文。"],
    "細節題要留意動詞的時間點，『房子被炸』和『圖書館被建造』是兩件不同的事，不要混為一談。",
    "不要把『房子被炸毀』誤讀成『圖書館被炸毀』，圖書館蓋在地下正是為了避免被炸。"),
], "110-set-32-34", passage3234, "敘利亞 Darayya 的地下圖書館");

const passage3537 = "From: Mia Loren <mloren@qmail.com>\nTo: Dave Doddo <dd1225@qmail.com>\nDate: Tue, Oct 24, 2017 at 10:01 AM\nSubject: Daniel's 5th Birthday Party – This Saturday!\n\nHello Dave,\n\nWe're happy to invite you and your family to Daniel's fifth birthday party this Saturday.\n\nWe know we told you that the party would be in ___(35)___.  However, we just moved to Carlton City last month, so the party won't be in Pattersons Town.  It'll be at Mosman Garden right next to Victor Zoo, just across from our new apartment.  Please don't go to Northbank Park next to our old house.\n\nThe weather report said that it may be rainy this weekend, but ___(36)___.  If it rains, we'll move the party inside our home.  However, if we're ___(37)___ and it is fine, we'll still have the party at the garden.\n\nAgain, we're all very happy and excited to welcome you to join us for some fun this weekend!\n\nBest,\nMia, Sam & Daniel";
const exam110Set3537 = attach([
  mc(16, 4, "___(35)___",
    ["Victor Zoo", "Carlton City", "Mosman Garden", "Northbank Park"], 3,
    ["信中說『我們之前跟你說派對會在 35 舉行，但是我們上個月剛搬到 Carlton City，所以派對不會在 Pattersons Town 了』，可知第 35 格填的應該是搬家前、位於 Pattersons Town 一帶的舊地點。", "後文又提醒『請不要跑錯去 Northbank Park，那是我們舊家附近』，可知舊家、也就是原本說要辦派對的地方，就是 Northbank Park，故答案為 D。"],
    "cloze 填空如果選項是地名，要把信中所有地名的『新舊、前後』關係整理成一張簡表，再回頭定位每個空格。",
    "不要看到 Pattersons Town 也是地名就誤選，Pattersons Town 在原文中其實沒有出現在選項裡，真正的舊地點線索藏在後面提醒『別跑錯』的那句話裡。"),
  mc(16, 3, "___(36)___",
    ["we have a plan if this happens", "we could just wait for the rain to stop", "we should be fine if the rain isn't too heavy", "we will let you know if we'll still have the party"], 0,
    ["這句話後面緊接著具體說明：『如果下雨，我們會把派對移到室內；但如果幸運放晴，仍然會在花園辦』，這正是一套『不論天氣如何都有安排』的計畫。", "其餘選項（等雨停、雨不大應該沒問題、之後再通知）都沒有呼應後文『下雨怎麼辦、放晴怎麼辦』這兩種情境都先講好的內容，只有『我們已經有應變計畫』完整對應下文。"],
    "cloze 填空要往後讀完整段，看後面的句子具體『展開說明』的是哪一個選項的內容。",
    "不要只看到 rainy 就直覺選『等雨停』，要繼續讀完下一句才知道主辦人其實是『無論下雨或放晴都已經有備案』。"),
  mc(18, 2, "___(37)___",
    ["crazy", "good", "lucky", "strong"], 2,
    ["這句話的意思是『如果我們＿＿而且天氣放晴，還是會在花園辦派對』，對照前面『氣象預報說這個週末可能會下雨』，天氣如果最後放晴，屬於『運氣好』的情況。", "crazy（瘋狂）、good（單純的好）、strong（強壯）都無法精準表達『在原本預期會下雨的情況下卻幸運放晴』的語意，只有 lucky（幸運的）符合。"],
    "描述『天氣意外變好』這類情境時，最常見的字就是 lucky，是這類話題的固定用字。",
    "不要選語意含糊的 good，題目強調的是『本來預報會下雨，結果沒下』這種帶有運氣成分的轉折，lucky 才精準對應。"),
], "110-set-35-37", passage3537, "Mia 寫給 Dave 的生日派對邀請信（克漏字）");

const passage3841 = "Usually I wouldn't cross the park at this time of night.  But walking around the park would take more time, and it was raining so hard that I couldn't even see clearly what was right before me.  So I entered the park.  And that was the first stupid thing I did tonight.\n\nSoon after I walked into the park, I saw a man under a tree up ahead.  My heart fell.  The stories I'd heard about the park ___(38)___ into my head at this moment.  Anyone with a clear mind would just turn back.  But me?  No.  I did ___(39)___ stupid thing: I decided to hurry past him.\n\nJust when I was passing the man, he raised his head and gave me the strangest smile ever.  I got scared and started running.  \"Hey!\" the man shouted from behind.  \"Wait!\"  He was running after me!\n\nI ran like crazy.  I had hoped the trees would keep some rain off.  And they ___(40)___.  But they also made the park look even darker.  I couldn't see what was ahead of me.  Then, I ran into something.  It was the man!\n\n\"Don't kill me!\" I cried.\n\"What?  I ___(41)___ to give back your bag!  You dropped it,\" the man gave me my bag.\n\nNow, I felt saying that to the man was the stupidest thing I did tonight.";
const exam110Set3841 = attach([
  mc(2, 3, "___(38)___",
    ["are all coming", "have all come", "were all coming", "would all come"], 2,
    ["整篇故事都是用過去式敘述『那天晚上』發生的事，\"at this moment\" 指的是故事裡『看到樹下男子』的那個過去時刻，而不是說話的當下。", "在這個過去的時間點上，各種聽過的可怕傳說『不斷湧入腦海』，是一個在過去某一刻正在進行的動作，所以要用過去進行式 were all coming，而不是現在式、現在完成式或條件語氣的 would。"],
    "敘事文章要先確認整體時態是現在式還是過去式，再判斷某個過去片刻『正在發生』的動作要用過去進行式。",
    "不要因為句尾出現 at this moment（『此刻』）就直覺選現在式，這裡的 this moment 指的是故事情節裡的過去片刻，不是讀者閱讀當下。"),
  mc(5, 3, "___(39)___",
    ["another", "one", "the last", "the other"], 0,
    ["前一段已經說『進入公園』是他做的第一件蠢事（the first stupid thing），這一句接著說他又做了『第 39 格＋stupid thing』，指的是『另一件、又一件』蠢事。", "one 沒有『再一件』的語氣、the last（最後一件）與 the other（兩者中剩下的那一個）都與『還有更多蠢事接下來會發生』的故事脈絡不符，只有 another（另一件）正確。"],
    "遇到『先前已經提過一件事，現在要說又發生了類似的一件』，通常用 another 表示『再一個、又一個』。",
    "不要把 another 和 the other 搞混，the other 是指『兩者之中剩下那一個』，但這篇故事裡蠢事不只兩件，用 another 才對。"),
  mc(2, 3, "___(40)___",
    ["have", "did", "had", "would"], 1,
    ["前一句是『I had hoped the trees would keep some rain off.』，這一句用一個字代替前面的『keep off』這個動詞，且整段故事都是過去式敘述。", "由於原本的動詞 keep 是過去式的假設內容（would keep），這裡用來確認『後來真的發生了』要用簡單過去式的代動詞 did，而不是現在式 have 或情態助動詞 had／would。"],
    "用一個字代替前面出現過的動詞時，要選跟原句時態一致的 do/does/did，這裡故事是過去式，所以用 did。",
    "不要看到前一句有 had hoped 就直覺選 had，這裡是要代替『keep off』這個動作本身，而不是代替 hoped。"),
  mc(2, 3, "___(41)___",
    ["was trying", "try", "would try", "will try"], 0,
    ["這句話是那位男子在解釋自己剛才追著敘事者跑的原因：『我（剛才）是想把包包還給你』，這是對『先前正在做、但被打斷的動作』的說明。", "try（原形）、will try（未來式）、would try（條件語氣）都無法表達『剛剛那個當下正試著做』的語意，只有過去進行式 was trying 正確描述『被追上前正在進行中』的動作。"],
    "解釋『剛才那個動作當時正在做』時，過去進行式是最自然的選擇，尤其常搭配『解釋誤會』的情境。",
    "不要選現在式或未來式 will try，男子是在解釋『剛才』發生的事，不是現在才要開始做。"),
], "110-set-38-41", passage3841, "深夜公園驚魂記（克漏字）");

window.__ENG_TRANSCRIBED_110 = {
  minutes: 60,
  omittedNote: "110年英語（閱讀）題本共41題，其中第1、17、20題因題目內容需要辨識試題本中的照片或圖片選項（分別為「男孩對老先生做的動作」「Lynn在Tom派對拍的照片」「Katie與Ms. Clark的合照」），純圖像資訊無法轉錄為等義文字，故予以省略，其餘38題皆已逐題轉錄並核對官方答案。",
  questions: [
    exam110Singles[0], exam110Singles[1], exam110Singles[2], exam110Singles[3], exam110Singles[4],
    exam110Singles[5], exam110Singles[6], exam110Singles[7], exam110Singles[8], exam110Singles[9],
    exam110Singles[10], exam110Singles[11], exam110Singles[12],
    ...exam110Set1516,
    ...exam110Set18,
    ...exam110Set1921,
    ...exam110Set2224,
    ...exam110Set2528,
    ...exam110Set2931,
    ...exam110Set3234,
    ...exam110Set3537,
    ...exam110Set3841,
  ],
};

  // ==================== 111 年 ====================
const exam111Singles = [
  mc(9, 1, "The movie starts at two o'clock, ___ let's meet at the theater at one forty-five.",
    ["so", "or", "if", "because"], 0,
    ["前半句說電影兩點開始，後半句建議一點四十五分在戲院碰面，兩件事是『原因→結果』的關係：因為電影兩點開始，所以提早碰面。", "or（否則／或者）、if（如果）、because（因為，方向相反，不能放在這裡引出結果）都不符合『先講原因再講結果』的順序，只有 so 正確銜接。"],
    "看到前後兩句是『原因先講、結果後講』的順序，直接選對等連接詞 so。",
    "不要跟 because 搞混：because 是用來引出原因、通常接在結果句之後，這裡因果順序相反，要用 so。"),
  mc(17, 1, "Peter is afraid of the dark.  He even leaves the ___ on when sleeping.",
    ["computer", "fans", "lights", "music"], 2,
    ["前句說 Peter 怕黑，後句合理的行為就是『睡覺時開著燈』，讓房間不會全黑。", "computer、fans（電風扇）、music 都與『怕黑』沒有直接關聯，只有 lights（燈）能對應『怕黑』這個原因。"],
    "生活情境字彙題要先抓住句子給的原因（怕黑），再找出最直接對應的日常物品。",
    "不要被『睡覺時開著』這個描述誤導選 fans 或 music，這兩個是睡眠習慣常見的字，但都無法解釋『怕黑』這個原因。"),
  mc(18, 2, "Pam is a ___ baseball player; she has more fans than any other player on her team.",
    ["boring", "heavy", "popular", "rich"], 2,
    ["分號後面說明原因：『她的粉絲比隊上其他任何球員都多』，這正是形容一個人『受歡迎』的具體證據。", "boring（無聊）、heavy（重的）、rich（有錢）都與『粉絲很多』無關，只有 popular（受歡迎的）符合。"],
    "分號或逗號後面常常是對前面形容詞的具體說明，可以用來反推空格該填哪個字。",
    "不要看到 baseball player 就聯想到 heavy（強壯／重量級），句子真正的線索是『粉絲很多』，對應的是人際受歡迎程度。"),
  mc(4, 2, "I did not do my homework, so my teacher said I ___ stay after school to finish it.",
    ["failed to", "had to", "hoped to", "used to"], 1,
    ["前句『沒寫作業』是原因，老師因此要求學生放學後留下來完成，這是一種被要求、不得不做的義務。", "failed to（未能）、hoped to（希望）、used to（過去習慣）都不符合『被規定必須留下來』的義務語氣，只有 had to（不得不、必須）符合，是 must/have to 的過去式。"],
    "情態助動詞題要先判斷句子講的是能力、希望還是義務，這裡『老師說』帶出的是外在規定的義務，用 had to。",
    "不要選 used to（過去習慣），這裡是單一次事件被要求留下來，不是重複發生的習慣。"),
  mc(17, 1, "Kevin has only enough money for the bag or the shoes.  That is a hard ___ to make because he likes them both.",
    ["choice", "gift", "rule", "trick"], 0,
    ["前句說 Kevin 只夠錢買包包或鞋子二選一，這正是典型『選擇、抉擇』的情境。", "gift（禮物）、rule（規則）、trick（把戲）都無法對應『在兩者間選一個』的情境，只有 choice（選擇）正確。"],
    "生活字彙題要先看句子描述的情境類型（這裡是『二選一』），再挑最貼切的名詞。",
    "不要被 hard 誤導選 rule，句子講的是『難以抉擇』，不是『難懂的規則』。"),
  mc(17, 1, "It was ___ for us to answer the math question because we've done the same kind of questions many times.",
    ["common", "easy", "safe", "special"], 1,
    ["後半句說明原因：『因為我們已經做過很多次同類型的題目』，做過很多次自然會變得『容易』。", "common（常見）、safe（安全）、special（特別）都無法呼應『做過很多次』這個原因，只有 easy（容易）合理。"],
    "看到 because 引導的原因子句，要先讀懂原因，再回頭確認空格的字是否與這個原因方向一致。",
    "不要選 common，common 是指『常見』而非『容易』，句子強調的是熟練後變簡單，不是這類題目很常見。"),
  mc(10, 2, "Although it took me lots of time ___ a big meal for ten people, I was happy that everyone enjoyed it.",
    ["prepare", "to prepare", "preparing", "prepared"], 1,
    ["這裡是「it takes(took) + 人 + 時間 + to V」的固定句型，表示『花某人多少時間去做某事』，中間的動詞固定用不定詞 to V。", "prepare（原形）、preparing（動名詞）、prepared（過去式/分詞）都不符合這個固定句型的文法要求，只有 to prepare 正確。"],
    "看到 it takes/took + 時間，直接聯想到後面要接不定詞 to V，這是常考的固定句型。",
    "不要因為前面有 lots of time 就聯想成動名詞片語，這個句型的動詞固定要用不定詞，不是動名詞。"),
  mc(19, 2, "Don't let the children swim in the river.  We don't know how ___ it is.  It could be dangerous.",
    ["deep", "far", "long", "thick"], 0,
    ["句子談的是河流是否適合游泳、是否危險，最直接相關的未知因素是河水有『多深』。", "far（多遠）、long（多長）、thick（多厚）都不是評估戲水危險程度的關鍵因素，只有 deep（多深）符合『可能很危險』的邏輯。"],
    "環境／安全類字彙題，先想清楚句子真正關心的是哪個面向的『未知』，再選對應的形容詞。",
    "不要被『河流』這個名詞直接聯想到 long（長度），句子關心的是水下深度帶來的危險，不是河流的長度。"),
  mc(7, 2, "Bob is ___ of the boys in the family.  He never does any housework.  His brothers at least take out the garbage sometimes.",
    ["lazier", "the lazy", "the lazier", "the laziest"], 3,
    ["句子比較的對象是『家裡所有的男孩』（三人以上的一個群體），這是三者以上的比較，要用最高級並加 the。", "lazier、the lazier 都是比較級（只能用於兩者之間），the lazy 則缺少比較意味，只有 the laziest（最高級）符合『在一群男孩中最懶的那一個』。"],
    "看到 of the + 複數名詞（在一群…之中）這種句型，通常代表三者以上的比較，要用最高級。",
    "不要因為只出現一個對照對象（brothers）就誤選比較級，題目講的是『在全家男孩中』，是群體比較，要用最高級。"),
  mc(1, 2, "Aunt Gina has lived in this town for more than sixty years, so she ___ it very well.",
    ["will know", "knew", "knows", "was going to know"], 2,
    ["前半句用現在完成式（has lived...for more than sixty years）表示從過去持續到現在，後半句 so 引出的結果應該是『現在』的狀態。", "know 是描述『知道、熟悉』的狀態動詞，用來表達現在的狀態要用現在簡單式；will know、was going to know 都指向未發生的未來，knew 則是過去式，只有 knows 正確表達『現在很熟悉這個小鎮』的狀態。"],
    "know、like、want 這類狀態動詞在描述『現在的狀態』時，直接用現在簡單式即可。",
    "不要被前面的現在完成式 has lived 影響，誤以為後面也要用完成式或過去式，so 引出的是現在的結果狀態，用現在簡單式。"),
  mc(19, 2, "We won't see the sun even after the typhoon leaves, because the news said that heavier rain will soon ___.",
    ["catch", "follow", "move", "stop"], 1,
    ["句子的邏輯是：颱風走了，但太陽還是不會出現，因為新聞說『更大的雨很快就會接著來』。", "catch（抓住）、move（移動）、stop（停止，與句意相反）都不符合『接下來還會有更大的雨』的語意，只有 follow（接著發生、隨之而來）正確。"],
    "天氣、環境類文章常考『一個天氣現象接著另一個發生』，follow 是這類語境的常見用字。",
    "不要選 stop，句子明說『看不到太陽』，暗示雨勢不會停，選 stop 會與句意矛盾。"),
  mc(2, 3, "Yesterday when I got home from work, my brother ___ for dinner, so he invited me to join him.",
    ["goes out", "went out", "has gone out", "was going out"], 3,
    ["when 引導的過去簡單式子句（I got home）表示一個瞬間發生的過去動作，另一個動作（弟弟正準備出門吃飯）在那個時間點上正在進行中，屬於過去進行式的典型情境。", "goes out（現在簡單式）、has gone out（現在完成式，且意味著已經出門）、went out（過去簡單式，指已完成的動作）都無法表達『正準備出門、進行中被撞見』的語意，只有 was going out 正確。"],
    "『過去某個時間點，一個動作正在進行，被另一個瞬間動作打斷或撞見』，是過去進行式最經典的使用情境。",
    "不要選 went out，如果弟弟已經出門了，就不會有『邀請我一起去』這件事，was going out 才符合『正要出門』的語意。"),
  mc(18, 2, "You were ___ not to lend Amy money.  She never gives back what she borrows.",
    ["crazy", "helpful", "wise", "wrong"], 2,
    ["後句說明原因：Amy 借錢從來不還，可知『不借錢給她』是一個有遠見、聰明的判斷。", "crazy（瘋狂）、helpful（樂於助人，與『不借錢』矛盾）、wrong（錯誤，與句意相反）都不符合，只有 wise（明智的）正確形容『不借錢給 Amy』這個決定。"],
    "判斷力／個性形容詞題，要先看後面說明的具體行為結果是『好判斷』還是『壞判斷』，再挑對應的形容詞。",
    "不要選 wrong，句子稱讚『不借錢』這個決定是對的，wrong 的方向剛好相反。"),
  mc(1, 2, "Have you found a summer job yet?  Mr. Firth ___ someone to take care of his kids during the vacation.  Maybe you can talk to him.",
    ["has looked for", "is looking for", "looks for", "was looking for"], 1,
    ["句子建議對方『可以去找 Mr. Firth 談談』，暗示這件事現在仍在進行中、仍有機會，Mr. Firth 目前正在找人。", "has looked for（現在完成式，暗示已找到或已結束）、looks for（現在簡單式，習慣性動作）、was looking for（過去進行式，已經是過去的事）都不符合『現在仍在找、你還來得及』的語意，只有 is looking for 正確。"],
    "建議別人『現在就去試試看』時，通常暗示對方正在進行中的動作要用現在進行式。",
    "不要選 has looked for，現在完成式常暗示動作已經完成或有結果，但句子後面說『也許你可以找他談談』，暗示這件事還沒結束。"),
  mc(11, 3, "David looked out of the balcony window and saw a woman get in his car ___ away.",
    ["drive", "drove", "and drive", "and drove"], 2,
    ["saw + 受詞 + 原形動詞是感官動詞的固定句型（看見某人做某事），句中 saw a woman get in his car 已經用了原形動詞 get，後面用 and 連接的動作也要保持同樣的原形動詞形式。", "drive（單獨的原形動詞，缺少連接詞，文法不完整）、drove／and drove（過去式，與感官動詞後接原形動詞的規則不符）都不正確，只有 and drive（用 and 對等連接兩個並列的原形動詞 get...and drive）符合文法。"],
    "感官動詞（see/hear/watch）＋受詞＋原形動詞的句型中，如果後面還有第二個並列動作，要用 and 連接同樣的原形動詞，保持文法一致。",
    "不要看到句子在敘述過去的事就直覺選過去式 drove，這裡的動詞形式是被 saw 這個感官動詞句型『鎖定』成原形，不受敘事時態影響。"),
  mc(11, 3, "The police haven't found the little girl who ___ at a supermarket.  They'll keep doing all they can to find her.",
    ["took away", "taken away", "has taken away", "was taken away"], 3,
    ["先行詞 the little girl 是動作的承受者：她是『被』某人從超市帶走的，不是她自己主動帶走誰，因此要用被動語態。", "took away、has taken away 都是主動語態，語意變成『女孩帶走了某人』，明顯不合理；taken away 則缺少 be 動詞，文法不完整，只有 was taken away（過去被動式）正確描述『女孩被帶走』。"],
    "先確認主詞是動作的『執行者』還是『承受者』：這裡小女孩是被帶走的一方，要用被動語態 be + p.p.。",
    "不要因為句子描述的是過去發生的事就只想到過去式 took away，還要進一步判斷主詞是主動做出動作、還是被動承受動作。"),
  mc(5, 3, "Buses to the airport only come once every hour, and we just missed ___.  Why don't we take a taxi?",
    ["another", "it", "one", "them"], 2,
    ["前一句提到 buses（複數、泛指這一類的公車），這一句要代替『剛好錯過的那一班公車』，但說話當下並沒有指定是哪一班特定的車，只是『同類中的一班』，要用不定代名詞 one。", "another（另一個，語意是『再一個』，但這裡是錯過而非要求再一個）、it（特定的某一個東西）、them（複數）都不符合『錯過了同類中的一個』這個泛指用法，只有 one 正確。"],
    "代替『同一類但非特定的一個』東西時，用不定代名詞 one，而不是特定的 it。",
    "不要看到前面是複數 buses 就選 them，這裡是指『（一班）公車』這個單一但不特定的概念，用單數的 one。"),
  mc(2, 2, "Ariel ___ every night for a week before her Chinese test and got a very good grade.",
    ["studied", "studies", "has studied", "was going to study"], 0,
    ["for a week 描述的是考試前『那一週』的持續讀書行為，而 got a very good grade 是過去式，說明整件事已經在過去完成、結束。", "studies（現在簡單式）、has studied（現在完成式，暗示動作持續到現在）、was going to study（過去未實現的打算）都不符合『已經結束的過去事件』，只有過去簡單式 studied 正確。"],
    "句子裡如果有另一個動詞已經明確用過去式（got），前面的動詞通常也要保持一致的過去式。",
    "不要因為 for a week 常讓人聯想到現在完成式，就忽略了句尾 got a very good grade 已經是過去式，兩件事都發生在過去、已經結束。"),
  mc(20, 3, "While reading this story, Brad saw the word \"trolling\" and didn't know what it meant.  He found several meanings of the word in a dictionary.  Which one should Brad choose?",
    ["To celebrate in song.", "To make someone or something move around.", "To pull a fishing line through the water, often from a boat.", "To write something on the Internet to hurt someone or make them angry."], 3,
    ["Brad 是在讀下面這則故事時遇到生字 trolling，故事裡 Josh 抱怨『他們為什麼要這樣 troll 我』，接著說明大家其實只是想從他那裡得到『好聽話』，暗示網路上的酸言酸語。", "字典列出的其他意思（唱歌慶祝、讓東西移動、拖釣魚線）都與『網路上』的情境無關，只有『在網路上寫東西讓別人不高興、生氣』符合故事情境，這也是 Brad 應該選的字典釋義。"],
    "多義字題要先讀完下面提供的上下文（故事內容），再回頭比對字典裡哪個釋義最符合那個情境。",
    "不要只看到 trolling 字面像『拖釣（troll）』就選跟釣魚有關的釋義，故事情境明顯是網路社群互動，要選符合這個情境的意思。"),
];

const passage2526 = "Darrell: Marina…Marina…MARINA!\nMarina: Oh, sorry.  I didn't hear you.  I was thinking about my homework.\nDarrell: What's it about?\nMarina: Well, I need to draw a future house for my art class, but I haven't got any ideas.  Maybe I should go to the library and look for something useful.\nDarrell: Or you can try Pinterest.\nMarina: Isn't it a shopping app?\nDarrell: Not really.  Many people share their works on Pinterest and tell you how they made them.  I'm sure you can get some ideas there.\nMarina: Sounds like you use it often.\nDarrell: Yeah.  Just last week I went there and found the A to Z of making chocolate cake—from choosing good chocolate to baking the cake to making sugar flowers on top.\nMarina: Really?  I'll check it out later.  Thanks a lot.";
const exam111Set2526 = attach([
  mc(15, 2, "Why did Darrell tell Marina to go to Pinterest?",
    ["To find some examples for her homework.", "To shop for things that are needed for art classes.", "To meet new friends who have the same interests.", "To share her works and tell people how they are made."], 0,
    ["Marina 說她要幫美術課畫一間未來的房子，但完全沒有靈感，正在煩惱這份作業。Darrell 建議她去 Pinterest，並解釋『很多人會在上面分享作品、說明怎麼做出來的，一定能找到一些靈感』。", "Pinterest 在對話中被澄清『不是購物 app』，也沒有提到交朋友，Darrell 建議的目的很單純：幫 Marina 的作業找靈感／範例，符合選項 A。"],
    "對話題要先找出說話者當下遇到的困擾（這裡是『作業沒靈感』），再看建議者提出方案的目的是否對應這個困擾。",
    "不要被 Marina 一開始誤以為 Pinterest 是『購物 app』的說法混淆，Darrell 已經澄清『不是』，重點在於它能提供作品靈感。"),
  mc(20, 3, "What does it mean when you learn something from A to Z?",
    ["You can learn it at any time.", "You learn it in a baking class.", "You learn everything about it.", "You spend all your life learning it."], 2,
    ["Darrell 說他在 Pinterest 上找到『the A to Z of making chocolate cake』，後面立刻具體列出『從挑選好的巧克力，到烤蛋糕，到最後做糖花裝飾』，涵蓋了製作蛋糕從頭到尾的每一個步驟。", "A 和 Z 是英文字母的第一個和最後一個字母，『from A to Z』是常見的慣用語，表示『從頭到尾、完整涵蓋全部』，符合選項 C『學到關於這件事的一切』，而不是指時間、地點或要花一輩子學習。"],
    "遇到 from A to Z 這類慣用語，可以直接聯想『從字母 A 到字母 Z』代表『從頭到尾、無所不包』的意思。",
    "不要把 from A to Z 誤解成『在任何時間都可以學』或『要花一輩子學』，它強調的是內容的『完整性』，不是時間長短。"),
], "111-set-25-26", passage2526, "Darrell 與 Marina 談 Pinterest");

const passage2729 = "Tabata training is a very popular way of exercising these days.  It doesn't take much time or space, and it burns calories faster than other ways of exercising.\n\nThe idea of Tabata training is simple: exercise for 20 seconds, rest for 10 seconds, and then repeat (at least eight times).  The moves for the 20-second exercise are not difficult to learn.  Jumping jacks, high knees, squats, and planks are some of the most common moves.  You can decide yourself what moves to do in your Tabata training.  For example, you can do more leg exercises if you want strong legs.\n\nOne great thing about Tabata training is that your body will keep burning calories for at least an hour after 4 minutes of Tabata training.  But to have this wonderful \"afterburn,\" you need to exercise really hard during each 20 seconds.  If you seldom exercise or have heart problems, this exercise may not be good for you.  But for people who enjoy exercising but are too busy to go to the gym, Tabata training might just be the answer.";
const exam111Set2729 = attach([
  mc(15, 2, "Which idea is talked about in the first paragraph of the reading?",
    ["How you should do Tabata training.", "What is the best time for Tabata training.", "Who first had the idea of Tabata training.", "How often you should do Tabata training."], 0,
    ["第一段介紹的是 Tabata 訓練『是什麼樣的運動方式』：不花時間、不佔空間、燃燒熱量比其他運動方式快，這是對這項運動整體特色的概括介紹，第二段才進一步說明『怎麼做』。", "文章完全沒有提到最佳運動時間、是誰發明這項運動，也沒有講『多常做』，只有『這是一種什麼樣的運動方式（如何進行的特色）』最符合第一段內容，對應選項 A。"],
    "段落主旨題要先讀完整段，用一句話總結這一段在介紹什麼，再對照選項。",
    "不要把第一段的『特色介紹』和第二段的『詳細步驟』搞混，第一段還沒講到 20 秒運動、10 秒休息的具體做法。"),
  mc(16, 3, "Who might find that Tabata training is right for them?",
    ["People who enjoy team sports.", "People who want to start exercising.", "People who want to fix their heart problems.", "People who already have a habit of exercising."], 3,
    ["文章最後明確指出兩種人：『很少運動或有心臟問題的人，這項運動可能不適合』，以及『喜歡運動但太忙沒空去健身房的人，Tabata 訓練可能正是答案』。", "選項 A（喜歡團隊運動）、C（想治療心臟問題，文中反而說心臟有問題的人不適合）都與原文不符；『想開始運動的人』通常還沒有運動習慣，屬於文中提醒『可能不適合』的族群，只有 D『已經有運動習慣的人』符合『喜歡運動但沒時間上健身房』的描述。"],
    "適合對象題要把文中『適合』與『不適合』的兩種人分開列出來，再對照選項屬於哪一邊。",
    "不要把『想開始運動的人』誤認為適合 Tabata，文中說『很少運動』的人這項運動可能不適合，因為每 20 秒都要非常用力做動作。"),
  mc(15, 2, "Which is true about Tabata training?",
    ["It is difficult to learn the moves.", "You are free to choose your own moves.", "You need a large space to do the exercises.", "You cannot rest between moves if you want the afterburn."], 1,
    ["第二段明確說『動作不難學』，且『你可以自己決定要做哪些動作，比如想練腿就多做一些腿部動作』，直接對應選項 B。", "文中說這項運動『不需要很多空間』，動作也『不難學』，而且訓練本身就包含『運動 20 秒、休息 10 秒』的固定循環，並不是說要有 afterburn 就不能休息，因此 A、C、D 都與原文不符。"],
    "細節題要逐句核對每個選項在原文中對應的句子，特別注意『難／不難』『需要／不需要』這類方向性的詞。",
    "不要把『每 20 秒要非常用力運動』誤讀成『不能休息』，訓練本身的設計就包含固定的 10 秒休息時間。"),
], "111-set-27-29", passage2729, "介紹 Tabata 間歇訓練");

const passage3031 = "The problem of long working hours is a real headache in our country.  It kills many people every year (see Figure 1), and many companies are trying to change that.  They have at least one \"No Overtime Day\" in a week, and it is often Wednesday.  On \"No Overtime Day,\" workers are asked to leave their offices before 8 p.m.  At 8 p.m., companies play the song \"There's Always Tomorrow\" and turn off all the lights.\n\nHowever, after the workers walk out of their offices, they don't go home.  Some go back later, turn on their table lamps, and keep working, and others find somewhere else to work until very late at night.  Restaurants and coffee shops are busier on Wednesday evenings, and they have started selling drinks and meals for these workers.\n\nBut why do these people keep working?  A study shows that workers who work more hours often have a bigger chance to get paid more and rise higher in their companies.  This is true for both men and women (see Figure 2).  Working long hours has become a way to show that people are hard-working.  Clearly, this must be changed before the problem gets any worse.";
const exam111Set3031 = attach([
  mc(15, 3, "There are four important points in the report:\na. What \"No Overtime Day\" is\nb. Why \"No Overtime Day\" fails\nc. Why there is \"No Overtime Day\" in the country\nd. How workers deal with \"No Overtime Day\"\nHow are they ordered in the report?",
    ["acdb.", "adcb.", "cabd.", "cadb."], 3,
    ["第一段先說明長工時是個大問題（原因 c），接著介紹「無加班日」的具體做法：每週固定一天、8點前離開、關燈播歌（是什麼 a）。", "第二段講員工其實下班後並沒有真的回家，還是想辦法繼續工作（如何應對 d）；第三段解釋員工為何寧願繼續工作、指出制度背後仍未解決的問題（為何失敗 b），因此完整順序是 c → a → d → b，也就是選項 D。"],
    "多段落結構題要先為每一段找出對應的關鍵重點，再和題目給的代號選項逐一配對順序。",
    "不要把『員工下班後怎麼做』（d：繼續工作）和『為什麼制度失敗』（b：解釋背後原因）順序顛倒，文章是先描述現象，才在最後一段分析原因。"),
  mc(16, 4, "What does \"this\" mean in the report?",
    ["The way workers show they are hard-working.", "Restaurants and coffee shops open until very late at night.", "Workers do not go home when they walk out of the office.", "The number of workers who get paid more and rise higher in the company."], 3,
    ["\"This is true for both men and women\" 這句話的前一句是：『研究顯示，工時較長的員工，獲得加薪與升遷的機會通常比較大』，this 指的正是這個『工時長→加薪升遷機會較大』的現象。", "把 this 代入原句檢查：『工時長者獲得加薪升遷機會較大，這個現象對男性和女性都成立』，語意通順，因此答案是選項 D，其餘選項都不是緊接在 this 之前被陳述的內容。"],
    "代名詞指涉題要往前一句找出 this 所代替的完整概念，再把候選答案代入原句檢查語意是否通順。",
    "不要把 this 誤指為『員工下班不回家』或『餐廳營業到很晚』，那些是前一段的內容，this 指的是緊接在它前面那一句的研究發現。"),
], "111-set-30-31", passage3031, "談「無加班日」為何難以落實（第32題因需圖表數據判讀，無法轉錄，故省略）");

const passage3436 = "In the modern world, being able to speak English is often a way to get power.  However, this is not true for English speakers in Cameroon.  To know why things are different in this African country, we need to go back one hundred years.\n\nIn 1919, Kamerun (the name of Cameroon at the time) was cut into two parts: one belonged to France, and the other belonged to the UK.  In 1960, the French Cameroon became the Republic of Cameroun, and the UK's part joined it in 1961.  The new country changed its name to the Federal Republic of Cameroon.  Although both French and English are Cameroon's official languages, only around 20% of its people speak English.  Also, the government has been in French speakers' hands since the two parts became one country.\n\nFor a long time, Cameroon's English speakers have felt they are not welcome in their own country.  For example, it is very difficult for them to find jobs in the government, and they are often asked to speak French in business and at official events.  They have become more resentful at the government and decided to fight for themselves.  Since last year, the English speakers have tried to build their own country.  Yesterday, they said in a public meeting that they were not part of Cameroon anymore.  They are now a new country, \"Ambazonia.\"  When the police tried to stop the meeting, at least eight people were killed.";
const exam111Set3436 = attach([
  mc(18, 2, "What does resentful mean in the reading?",
    ["Sad.", "Angry.", "Careful.", "Worried."], 1,
    ["前一句描述英語使用者長期感覺『在自己的國家不受歡迎』，找政府工作很困難，還常被要求在商務與官方場合說法語，這些都是長期被差別對待累積的不滿情緒。", "接續 resentful 之後的句子是『他們決定為自己抗爭』，這種『抗爭』的行動通常源自憤怒而非單純的悲傷、小心或擔心，因此 resentful 最貼近『憤怒、忿忿不平』，符合選項 B。"],
    "遇到情緒類的生字，可以看緊接在後面的行動反應（這裡是『決定抗爭』）來判斷情緒是憤怒還是單純難過。",
    "不要把 resentful 誤解成單純的『難過』或『擔心』，句子接著描述的是『抗爭』這種較強烈的行動，指向憤怒的情緒。"),
  mc(16, 4, "What does Cameroon's government most likely think of Ambazonia?",
    ["It plans to do business with Ambazonia.", "It needs Ambazonia for money and help.", "It does not want to be part of Ambazonia.", "It does not agree that Ambazonia is a country."], 3,
    ["文中說喀麥隆政府長期由說法語的人掌權，且英語使用者一直被邊緣化；當英語使用者自行宣布獨立成立 Ambazonia 時，警方立刻出面試圖阻止這場集會，甚至造成人員死亡。", "政府出動警力鎮壓這場宣布獨立的集會，顯示政府根本不承認、也不接受 Ambazonia 是一個獨立國家，這是最合理的推論，其餘選項（做生意、需要對方的錢與協助、不想成為對方的一部分）都與『派警察鎮壓』這個強烈反應不符。"],
    "推論題要抓住文中最直接、最具體的行動線索（這裡是『警察阻止集會』），從行動反推立場態度。",
    "不要選『不想成為 Ambazonia 的一部分』，這個說法方向反了：喀麥隆政府是不承認 Ambazonia 這個新國家，而不是不想『加入』它。"),
  mc(15, 3, "What does Elisa Grant try to tell readers by talking about the history of Cameroon?",
    ["Why speaking English is a way to get power.", "Why English speakers in Cameroon have less power.", "Why the two parts of Cameroon became one country.", "Why only 20% of the people in Cameroon speak English."], 1,
    ["文章開頭就點出全文要解答的問題：『為什麼在喀麥隆，會說英語反而不是取得權力的方式，我們需要回顧一百年前的歷史』，接著整整兩段都在說明英語使用者長期被法語使用者主導的政府邊緣化的歷史過程。", "文章的重點不是『英語為何在全世界代表權力』（那是開場的對比背景）、兩國合併的過程或人口比例本身，而是要藉由這段歷史，解釋『喀麥隆的英語使用者為什麼權力比較小』，符合選項 B。"],
    "說明文常在開頭先拋出一個問題或矛盾現象，全文其實都是在回答這個開頭的問題，找到那個問題就能掌握全文主旨。",
    "不要被文章開頭『說英語＝有權力』這句話誤導選成主旨，那只是用來對比、襯托喀麥隆『英語使用者反而權力較小』這個真正要談的現象。"),
], "111-set-33-36", passage3436, "喀麥隆的語言與權力（第33題因需辨識地圖選項，無法轉錄，故省略）");

const passage3738 = "THE SOUTHEND TRAIL has been popular with nature lovers for years.\n\nThe 120-km trail passes beautiful lakes, crosses rivers, and goes through mountains and hills.  This gives bird lovers some of the best places for birdwatching.  The trail also takes you to the Southend Museum and to two famous castles, Edward Castle and Sloan Castle.\n\nIt's best to plan one day for one part of the trail and start your hike early in the morning, because each part takes at least seven hours.  If you don't want to walk, you can bike, but make sure you stay on the main trail, because the side trails are not wide enough for biking.\n\nThere are two types of lodging for visitors.  Camping is popular in summer, but it is only allowed on a few campgrounds (see the map).  A more comfortable one is to stay at a hotel in one of the towns.  You can find some very nice ones that also have breakfast.";
const exam111Set3738 = attach([
  mc(15, 2, "What is recommended to people who are visiting the Southend Trail?",
    ["Camping on the side trails.", "Biking along the side trails.", "Hiking one part of the trail a day.", "Visiting the museum in the morning."], 2,
    ["文中明確建議：『最好一天只安排步道的一個部分，並且一大早就開始走，因為每個部分至少要花七小時』，直接對應選項 C。", "露營地點是固定的營地而非支線步道，支線步道也明說『不夠寬、不能騎車』，文章也沒有特別建議『早上去博物館』，因此只有『一天走一段步道』符合原文建議。"],
    "建議類細節題可以直接找文中出現 \"It's best to...\" \"make sure...\" 這類建議語氣的句子，通常就是答案所在。",
    "不要把『露營只能在指定營地』誤讀成『可以在支線步道露營』，文章反而說支線步道太窄不能騎車，語意方向不同。"),
  mc(20, 2, "What does lodging mean in the reading?",
    ["A meal to have.", "A place to stay in.", "A time for visiting.", "A way of moving around."], 1,
    ["這個字所在的句子接著就舉出兩種類型：『露營』和『住在城鎮裡的旅館』，兩者都是『過夜、住宿』的方式。", "文中完全沒有提到吃什麼、什麼時段參觀或如何移動，緊接的兩個例子（露營、住旅館）都指向『住的地方』，符合選項 B。"],
    "遇到生字，直接看它後面舉的具體例子（這裡是露營和旅館）就能推知大概的意思。",
    "不要因為前面提到步道行程安排，就把 lodging 誤解成『參觀的時間』，例子明確指向的是『過夜住宿的方式』。"),
], "111-set-37-38", passage3738, "南岸步道旅遊資訊（第39題因需辨識步道地圖上的路段編號，無法轉錄，故省略）");

const passage4043 = "English words are made of 26 letters, and palindromes and anagrams are two kinds of word games about spelling.  A palindrome is a word or a sentence that reads the same from left to right or from right to left, ___(40)___, \"eye,\" \"Bob,\" \"my gym,\" and \"Was it a car or a cat I saw?\"  An anagram of a word or words is made by putting the letters of the word or words in a different way.  Look at the words and their anagrams below.  Can you think of other possible anagrams of these words?\n\nAnagrams are often longer words that don't really mean anything but are fun to say.  Sometimes they can even mean something ___(42)___, like when a common word, \"restaurant,\" becomes \"Eat rats, run!\"\n\nActually, palindromes and anagrams are ___(43)___.  Palindromes can be used to learn mathematics and make music.  Anagrams are also a good way to hide something.  In history, people often hid their important studies in anagrams.  Can you think of any other way to use them?";
const exam111Set4043 = attach([
  mc(9, 2, "___(40)___",
    ["in fact", "at first", "of course", "for example"], 3,
    ["空格後面接著列出「eye」「Bob」「my gym」「Was it a car or a cat I saw?」這幾個具體項目，這些正是前面『迴文』定義的實際例子。", "in fact（事實上）、at first（起初）、of course（當然）都不是用來『引出例子』的轉折詞，只有 for example（舉例來說）符合『先下定義，再舉出具體例子』的文章邏輯。"],
    "空格後面如果接的是具體的字詞或句子當例子，通常要選 for example 這類引出範例的轉折語。",
    "不要選 in fact，in fact 通常用來『糾正、補充比想像中更進一步的事實』，不是單純列舉例子的語氣。"),
  mc(20, 2, "___(42)___",
    ["strange", "difficult", "delicious", "important"], 0,
    ["空格後面舉的例子是常見字 \"restaurant\"（餐廳）重組字母後變成 \"Eat rats, run!\"（吃老鼠，快跑！），這是一個完全出乎意料、詭異又好笑的意思轉變。", "difficult（困難）、delicious（好吃，雖然和吃有關但不是在形容『意思』本身）、important（重要）都無法貼切形容這種『字母重組後產生的意外怪異含義』，只有 strange（奇怪的）最符合這種構詞遊戲帶來的效果。"],
    "字彙猜測題要緊扣後面舉的具體例子（這裡是 restaurant 變成 Eat rats, run!），從例子的性質反推空格要填的形容詞方向。",
    "不要被 restaurant、Eat rats 都和『吃』有關就選 delicious，句子要形容的是這個重組結果本身『很奇怪』，不是食物好不好吃。"),
  mc(15, 3, "___(43)___",
    ["more than just games", "often played in public", "not so popular as before", "not first used to learn words"], 0,
    ["這句話是文章最後一段的總結句，後面接著舉出迴文可以用來學數學、作曲，逆序構詞法可以用來藏訊息、記錄重要研究等『遊戲以外的實際用途』。", "文章從未提到這兩種文字遊戲『常在公開場合玩』『比以前退流行』或『原本不是用來學單字』，只有『不只是遊戲（還有更多實際用途）』完整呼應後面列舉的數學、音樂、藏訊息等例子，是整篇文章的總結重點。"],
    "cloze 填空如果出現在段落最開頭，且後面接著一連串例子，通常要選能『概括、總結』這些例子的句子。",
    "不要選『不像以前那麼流行』，文章完全沒有比較這兩種文字遊戲『現在』和『以前』的流行程度，重點是強調它們『不只是遊戲』。"),
], "111-set-40-43", passage4043, "迴文與逆序構詞遊戲（第41題因題目對應文中圖片形式呈現的例字對照表，無法轉錄，故省略）");

window.__ENG_TRANSCRIBED_111 = {
  minutes: 60,
  omittedNote: "111年英語（閱讀）題本共43題，其中第1、21、22、23、24、32、33、39、41題因題目內容需要看試題本中的照片、廣告圖片、資訊圖表（infographic）、地圖或例字對照表（純圖像資訊，無等義文字可轉錄），故予以省略，其餘34題皆已逐題轉錄並核對官方答案。",
  questions: [
    exam111Singles[0], exam111Singles[1], exam111Singles[2], exam111Singles[3], exam111Singles[4],
    exam111Singles[5], exam111Singles[6], exam111Singles[7], exam111Singles[8], exam111Singles[9],
    exam111Singles[10], exam111Singles[11], exam111Singles[12], exam111Singles[13], exam111Singles[14],
    exam111Singles[15], exam111Singles[16], exam111Singles[17], exam111Singles[18],
    ...exam111Set2526,
    ...exam111Set2729,
    ...exam111Set3031,
    ...exam111Set3436,
    ...exam111Set3738,
    ...exam111Set4043,
  ],
};

  // ==================== 112 年 ====================
const exam112 = [
  mc(17, 1, "Dennis enjoys ___ in public.  He is proud of his beautiful voice.",
    ["dancing", "drawing", "shopping", "singing"], 3,
    ["空格前 enjoys 後面接動名詞是四個選項共同的形式，真正的差異在字義：後句提到「他為自己美妙的嗓音感到驕傲」。", "只有 singing（唱歌）與「美妙的嗓音」直接相關，其餘 dancing、drawing、shopping 都與聲音無關。"],
    "生活字彙題要抓住句子裡的關鍵線索詞（這裡是 beautiful voice），回頭篩選唯一語意相符的選項。",
    "不要只看到 enjoy + V-ing 的文法形式就隨便選，四個選項文法上都正確，差異只在字義是否對應線索。"),
  mc(10, 2, "Mrs. Johnson can't hear very well.  If you need to talk to her, you must ___.",
    ["explain", "hurry", "listen", "shout"], 3,
    ["句意是「強生太太聽力不好，要跟她說話必須要」，故必須用「大聲喊」的方式她才聽得到。", "explain（解釋）、hurry（趕快）、listen（聆聽）都不能解決「聽不清楚」這個問題，只有 shout（大聲喊）合乎邏輯。"],
    "生活情境字彙題要先掌握題目給的限制條件（這裡是聽力不好），再挑出能解決這個限制的動作。",
    "listen 容易被誤選，因為它跟「聽」有關，但題目要她聽得到的解法是「你」要喊，不是「她」要聽。"),
  mc(10, 2, "People got very excited when they watched Ms. Smith ___ at the party.",
    ["danced", "dancing", "has danced", "to dance"], 1,
    ["watch（知覺動詞）＋受詞＋現在分詞（V-ing）表示「目睹某人正在做某事」的完整過程，watched Ms. Smith dancing 即為此結構。", "danced 是過去式動詞，has danced 是完成式，兩者都不能直接接在受詞後面當受詞補語；to dance 則是知覺動詞常搭配原形不定詞而非 to V。"],
    "看到 watch/see/hear 這類知覺動詞＋受詞的空格，優先考慮原形動詞或 V-ing 當受詞補語，而不是變化過的動詞時態。",
    "容易誤選 danced，因為句子敘述的是過去發生的事，但受詞補語的形式不受主要動詞時態影響，仍要用原形或 V-ing。"),
  mc(17, 1, "I tried on these shoes in several different ___, and I thought the white pair looked best on me.",
    ["colors", "prices", "shapes", "sizes"], 0,
    ["句尾提到「白色那雙看起來最好看」，white 是顏色，所以空格要選跟顏色有關的字。", "prices（價格）、shapes（形狀）、sizes（尺寸）都不能對應「白色」這個線索。"],
    "字彙題常常要往後讀一句才找得到解題線索，這題的答案關鍵字其實藏在句子後半段的 white。",
    "不要看到「試穿鞋子」就直覺聯想到 sizes（尺寸），要以句子最後提供的具體線索為準。"),
  mc(2, 2, "Rex did not feel the earthquake this morning.  He ___ in the park at the time.",
    ["jogged", "was jogging", "has jogged", "would jog"], 1,
    ["at the time（那個時候）暗示地震發生的當下，Rex 正在進行另一個動作，這是過去進行式的典型情境。", "簡單過去式 jogged 只強調動作發生過，無法凸顯「地震發生那一刻正在慢跑」的背景動作；has jogged、would jog 也不符合此情境。"],
    "看到 at the time／when + 過去式子句，另一個動作若是「當下正在進行的背景動作」，就要用過去進行式 was/were + V-ing。",
    "容易誤選簡單過去式 jogged，忽略了句子要表達的是「正在慢跑、地震發生時仍在進行中」的動作。"),
  mc(17, 2, "Mr. Lee has worked in the same store for ten years; he's never thought about ___ his job.",
    ["changing", "finding", "remembering", "starting"], 0,
    ["句意是「李先生在同一家店工作十年，從未想過要」，最合理的接續是「換工作」。", "finding his job（找到他的工作，語意矛盾）、remembering his job（記得他的工作）、starting his job（開始他的工作）都不符合「做了十年」這個前提。"],
    "職場情境字彙題要留意前後文的邏輯關係，「做了很久」通常對應「換工作」而非「開始、找到」工作。",
    "不要被 job 這個字直接聯想到 finding 或 starting，要通盤考量句子描述的時間背景（十年）。"),
  mc(17, 1, "I didn't take the bus today because it was ___.  All the seats were taken and a lot of students were standing.",
    ["dirty", "fast", "full", "wrong"], 2,
    ["後句說明「所有座位都被坐滿，很多學生都站著」，這正是公車「客滿」的具體描述。", "dirty（髒）、fast（快）、wrong（錯誤）都與「座位坐滿、乘客站立」的畫面無關。"],
    "字彙題若句子後面有具體細節描述，通常就是用來解釋空格答案的證據，要優先比對。",
    "不要只看「沒搭公車」就聯想到負面字如 dirty 或 wrong，要以後句給的具體證據為準。"),
  mc(9, 2, "Don't go away when you're cooking, ___ the food might burn.",
    ["but", "if", "or", "so"], 2,
    ["句意是「煮東西時不要走開，否則食物可能會燒焦」，or 在此作「否則」解，連接「不要做的事」與「不做的後果」。", "but 表轉折、if 表條件、so 表結果，三者都無法表達「否則／不然」的因果警告語氣。"],
    "祈使句（Don't...）＋ or 是常考的固定句型，or 在此不是「或者」而是「否則」的意思。",
    "不要把 or 只當作「選擇」的意思，忽略它在祈使句後面常表示「不然的話」這個常見用法。"),
  mc(9, 2, "Jerry wanted to know ___ he was kicked off the soccer team, but no one gave him a good reason.",
    ["where", "when", "whether", "why"], 3,
    ["這是一個由疑問詞帶出的名詞子句，做 know 的受詞；後句說「沒有人給他一個好理由」，暗示 Jerry 想知道的是「原因」。", "where（地點）、when（時間）、whether（是否）都無法對應「reason（理由）」這個線索字。"],
    "含疑問詞的名詞子句題，要回頭找句子裡有沒有能對應疑問詞意義的關鍵字（這裡是 reason 對應 why）。",
    "不要忽略子句只是附屬在 know 後面當受詞，重點仍是疑問詞的語意要與後文的線索字吻合。"),
  mc(18, 1, "Jenny is already forty, doesn't have a job and often makes trouble for her parents.  To them, she is really a(n) ___.",
    ["daughter", "example", "gift", "headache"], 3,
    ["句子描述珍妮四十歲卻沒工作、常給父母添麻煩，這是典型「讓人頭痛的人」的負面形象。", "daughter（女兒）雖然文法上通順，但只是單純身分描述，沒有呼應「常惹麻煩」的負面語氣；example、gift 則語意完全不合。"],
    "描述人際關係與個性的字彙題，要抓住句子裡的負面或正面線索（這裡是「沒工作、常惹麻煩」），再選出語氣相符的譬喻用字。",
    "不要因為 daughter 是最直白、最安全的選項就直接選它，題目要選的是能反映「惹麻煩」語氣的譬喻用字 headache。"),
  mc(2, 2, "Ed and Jill ___ camping this weekend, so they have to finish their homework by Friday.",
    ["went", "were going", "are going", "have gone"], 2,
    ["be going to（現在式）表示事先安排好的未來計畫，句意是「這個週末要去露營」，屬於已經計畫好的未來事件。", "went 是過去式、were going 是過去進行式，皆與「這個週末（未來）」的時間點矛盾；have gone 表「已經去了」不符合尚未出發的語意。"],
    "看到明確的未來時間詞（this weekend）搭配「事先安排好的計畫」，優先考慮 be going to 的現在式形式。",
    "不要被 going 這個字面誤導選成過去進行式 were going，要注意 be 動詞本身的時態才是決定句子時間點的關鍵。"),
  mc(11, 2, "Doraemon, a blue Japanese robot cat, has hated mice since his ears ___ by a mouse.",
    ["bit", "bite", "were bitten", "have bitten"], 2,
    ["「他的耳朵」是被老鼠咬的對象（動作承受者），必須用被動語態 be動詞＋過去分詞，且主詞 ears 為複數，故用 were bitten。", "bit、bite、have bitten 都是主動語態，語意會變成「耳朵咬了老鼠」，與事實相反。"],
    "判斷主動或被動時，先確認主詞是動作的執行者還是承受者：耳朵不會咬東西，只會被咬。",
    "容易忽略主詞 ears 是複數，若誤用單數被動 was bitten 或主動時態，都無法正確表達「耳朵被咬」的被動語意。"),
  mc(2, 2, "If we play some interesting games in class, there ___ more fun in learning English.",
    ["are", "has", "will be", "will have"], 2,
    ["if 子句用現在式（play）描述可能發生的條件，主要子句依真實條件句規則要用 will + 原形動詞，there is/are 的未來式是 there will be。", "are 是現在式，時態與句意的未來推測不符；has、will have 的主詞應為人或事物擁有某物，不能用在 there 開頭的句型。"],
    "真實條件句（If + 現在式, 主詞 + will + 原形）中，there be 句型的未來式固定是 there will be，不能用 will have。",
    "不要把 there is/are more fun 直接套用未來式變成 will have，there 開頭的句型只能用 be 動詞，不能用 have。"),
  mc(17, 2, "The ___ of this shop was so bad; I never got any answer after I emailed them my questions.",
    ["item", "business", "price", "service"], 3,
    ["句意是「這家店的很差；我寄信詢問問題後從未得到回覆」，沒有回覆顧客的問題正是「服務」不佳的表現。", "item（商品項目）、price（價格）、business（生意）都無法直接對應「未回覆顧客問題」這個具體描述。"],
    "字彙題若後半句描述具體的顧客經驗（如未獲回覆），通常就是在解釋前面空格是哪一種店家特質。",
    "business 容易被誤選成「生意不好」，但句子重點是「沒有人回覆問題」，這是服務品質的問題，不是生意好壞。"),
  mc(7, 2, "It's not easy to see those islands clearly from here on sunny days, and it's even less ___ to see them on cloudy days.",
    ["difficult", "lucky", "possible", "special"], 2,
    ["晴天已經「不容易看清楚」，陰天理應更難看到，故空格要選能表達「更不可能看到」語意的字，即 less possible（更不可能）。", "less difficult 語意會變成「陰天比較不難看到」，與邏輯相反；lucky、special 則與「看得到與否」的語意無關。"],
    "遇到 even less/more + 形容詞的比較句型，先確認前後兩個情境的邏輯方向是否一致（這裡晴天已難、陰天應更難）。",
    "less difficult 容易讓人誤以為「難度變小」，但要代入整句檢查邏輯方向是否與「更難看到」一致，代入後會發現語意矛盾。"),
  mc(17, 2, "Do you remember the CD I was looking for for months?  I ___ found it in a small shop.  Look, here it is!",
    ["almost", "even", "finally", "still"], 2,
    ["句意是「找了好幾個月的 CD，我終於在一家小店找到了」，finally（終於）正好呼應「找了好幾個月」這個長時間的鋪陳。", "almost（幾乎，暗示沒找到）、even（甚至）、still（仍然，暗示還沒找到）都與「已經找到、Look, here it is」的結果矛盾。"],
    "副詞字彙題要留意前後文的時間鋪陳與結果是否吻合，「找了很久＋終於找到」是常見的 finally 使用情境。",
    "still 容易被誤選，但 still found it 語意上等於「仍然找到」不合邏輯，且與後面「這就是它」的肯定結果矛盾。"),
  mc(7, 2, "Business at Jane's shop has not been good these days.  And the new supermarket across the street only makes things ___.",
    ["easier", "worse", "more boring", "more convenient"], 1,
    ["句子先說「珍的店生意最近不好」，對街新開的超市只會讓情況「變得更糟」，bad 的比較級是不規則變化 worse。", "easier、more convenient 語意是正面的，與「生意不好」的負面情境矛盾；more boring（更無聊）則與生意好壞無關。"],
    "bad→worse→worst 是常考的不規則比較級，看到描述「情況惡化」的句子，直接聯想到 worse。",
    "不要因為看到 more + 形容詞的比較級形式（more convenient）就直覺選它，worse 才是符合「生意雪上加霜」語意的正確比較級。"),
  mc(13, 3, "Scott wasn't sure if the young woman before him was ___ pulled him out of a car on fire.",
    ["who", "the one", "the one she", "the one who"], 3,
    ["空格要接一個名詞片語當 was 的補語，並帶出後面「拉他離開失火車子」這個動作的主詞，需要「先行詞＋關係代名詞」的完整結構。", "who 前面沒有先行詞、the one 後面缺了連接子句的關係代名詞、the one she 多了一個重複的主詞 she，都不是文法完整的形式。"],
    "先行詞＋關係代名詞（the one who）是把「那個人」與「她做了什麼事」合併成一句最常見、最完整的寫法。",
    "the one she 是常見的陷阱，考生會誤以為 she 可以直接代替關係代名詞，但這樣會讓子句多出一個重複的主詞。"),
  mc(3, 2, "I ___ swimming for several years before I went to this high school.  I gave it up because of heavy schoolwork.",
    ["have practiced", "am practicing", "practiced", "would practice"], 2,
    ["「gave it up」（已經放棄了）是簡單過去式，表示練習游泳這件事在過去已經結束，與現在沒有持續關聯，因此不能用現在完成式。", "have practiced 强調對現在仍有影響，與「已經放棄」矛盾；am practicing 是現在式，would practice 則不符合此處單純敘述過去事實的語氣。"],
    "現在完成式的判斷關鍵是「動作是否延續到現在或對現在仍有影響」，若後文已明說某事「已經結束」，就要改用簡單過去式。",
    "看到「for several years」容易直覺聯想到現在完成式，但要先確認後文有沒有「已經結束」的線索（gave it up）再決定時態。"),
  mc(17, 1, "Frank Kane is so good in the movie that many people ___ he will win the best actor prize.",
    ["expect", "forget", "notice", "plan"], 0,
    ["句意是「法蘭克在電影中表現很好，很多人他會贏得最佳男主角獎」，expect（預期、期待）最符合對未來結果的預測語氣。", "forget（忘記）、notice（注意到）、plan（計畫）都無法對應「對未來得獎的預測」這個語意。"],
    "遇到 that 子句描述未來可能發生的事（he will win...），前面動詞通常是表達「預期、相信」語意的字，如 expect、believe。",
    "不要被 notice（注意到）誤導，notice 通常用於已發生或正在發生的事實，而不是對未來的預測。"),
  mc(3, 2, "The new medicine that just came out on the market ___ thousands of lives.",
    ["and saved", "has saved", "saving", "to save"], 1,
    ["句意強調這個新藥從上市至今「已經拯救了」數千條性命，是過去持續到現在累積的成果，屬於現在完成式的典型用法。", "and saved 缺少完整連接邏輯、saving 與 to save 都不是可以獨立作句子主要動詞的形式。"],
    "描述「從過去某時間點持續累積到現在的成果或影響」，是現在完成式（have/has + p.p.）最典型的使用情境。",
    "不要因為句子只提到藥品「剛上市」就誤用過去式思考，重點在於「累積至今的救人數量」這個現在完成式的語意重心。"),
  mc(2, 2, "Now I often think of those days with Pip, my pet dog.  When I read in my room, he ___ quietly beside me.",
    ["will come and sit", "comes and sits", "has come and sat", "used to come and sit"], 3,
    ["句子開頭說「現在我常常想起以前跟 Pip 一起的日子」，暗示這是已經結束的過去習慣，used to + 原形動詞正是表達「過去經常性習慣、現在已不再」的固定用法。", "will come and sit 是未來式、comes and sits 是現在式習慣、has come and sat 是現在完成式，皆與「回憶過去已結束的習慣」的語意不符。"],
    "看到「現在回想過去」的敘述語氣（Now I often think of those days），若描述的是過去反覆發生的習慣，優先考慮 used to。",
    "comes and sits 容易被誤選成現在式的口語敘述，但題目明確在「回憶過去」，狗狗現在應該已經不在身邊了，故不能用現在式。"),
];

const exam112Set1 = [
  mc(15, 2, "What is the trick that the mosquito uses in rain?",
    ["It shakes its body fast enough to get water off.", "It drops with the raindrop and then rolls off it.", "It flies behind the raindrop and pushes it away.", "It rides on the raindrop and lands on the ground."], 1,
    ["文中第四段明確描述：蚊子被雨滴打中後會跟著雨滴一起落下，掉落約 6 公分後才會滾離雨滴飛走（it will roll off the raindrop and fly away）。", "選項一（甩掉水分）、三（飛到雨滴後面推開它）、四（乘著雨滴降落地面）都與文中描述的「跟著落下、滾離」過程不符。"],
    "細節題要回到文中對應的段落逐句核對，答案通常是原文動作的直接改寫。",
    "選項四「乘著雨滴降落地面」聽起來與「跟雨滴一起落下」相似，但文中明說蚊子會滾離雨滴飛走，不是隨雨滴一起落地。"),
  mc(15, 2, "What keeps a mosquito safe in the rain?",
    ["It is very light.", "It has no body hairs.", "It is as big as a raindrop.", "It is strong enough to fight the force of a raindrop."], 0,
    ["文中第三段明確指出蚊子雖然跟雨滴一樣大，但體重極輕（0.002 g），這正是「這救了牠的命」（This saves its life）的原因。", "選項二說蚊子沒有體毛，但文中說蚊子身上「覆蓋著防水的細毛」，剛好與選項相反；選項三只是描述蚊子與雨滴一樣大，不是安全的原因；選項四則與文中「蚊子不需要強大到能對抗雨滴的力量」的說法矛盾。"],
    "找「原因」類的細節題時，注意文中因果連接詞（如 This saves its life）前後的句子，答案通常緊貼在因果句附近。",
    "選項三利用文中提到的「跟雨滴一樣大」做陷阱，但這只是背景描述，真正讓蚊子安全的原因是「輕」，不是「大小」。"),
  mc(15, 3, "When would it be dangerous for a mosquito in the rain?",
    ["When it flies too close to the ground.", "When the rain falls too hard and too fast.", "When it is hit by raindrops too many times.", "When it drops for more than 6 cm in the rain."], 0,
    ["文末說明如果蚊子被雨滴打中時「飛得太低」，就沒有足夠時間滾落雨滴後飛走，最終會撞到地面而死亡，對應選項一「飛得太靠近地面」。", "選項二、三、四都只是重複描述文中提到的一般情境（下雨速度、被打次數、掉落公分數），並非文中明確指出的危險時機。"],
    "找「危險發生的時機」要鎖定文末表示轉折的關鍵詞（However, this trick isn't always successful），答案通常緊接在轉折句之後。",
    "選項四利用文中出現過的「6 cm」這個數字做陷阱，但 6 公分是蚊子安全滾落雨滴所需的正常距離，不是危險的觸發條件。"),
];

const exam112Set2 = [
  mc(15, 2, "What do the three stories in the reading all talk about?",
    ["Who Beethoven's true love was.", "Who played \"For Elise\" the best.", "How \"For Elise\" became popular.", "Why Beethoven wrote \"For Elise.\""], 3,
    ["文章第二段一開始就提出「你知道 Elise 是誰嗎？」的問題，接著介紹三個不同版本的故事，每個故事都在解釋貝多芬「為什麼」為某位女性寫下這首曲子。", "選項一只符合第二個故事（愛慕特雷莎）；選項二、三則完全不是文章討論的主題，文章從未提及演奏技巧或樂曲如何流行起來。"],
    "主旨題要能涵蓋全文所有段落的共同主題，不能只對應其中一個故事，三個故事共同的核心問題正是「創作動機為何」。",
    "選項一只是三個故事之一（特雷莎的愛情故事）的內容，範圍過窄，不能代表「三個故事全部在講的事」。"),
  mc(15, 2, "What do we know about \"For Elise\" from the reading?",
    ["It first appeared in the opera Fidelio.", "The true \"Elise\" was Elise Barensfeld.", "The manuscript was found after Beethoven died.", "The manuscript is now kept by the city of Vienna."], 2,
    ["文末明確提到「直到 1867 年手稿被發現，才有人知道這首曲子」，而這是「貝多芬去世 40 年後」的事，對應選項三。", "選項一把《For Elise》和貝多芬的歌劇《Fidelio》搞混，Fidelio 只是 Röckel 演唱過的作品；選項二、四則是文章明說「無法確定」的推測，並非確定的事實。"],
    "細節題若牽涉到時間先後（去世、發現手稿），要仔細核對文中明確的時間敘述，不要被年代混淆。",
    "文章特別強調「這些都只是猜測，我們可能永遠不會知道正確答案」，選項二、四這類「肯定某個猜測為真」的敘述都是常見陷阱。"),
  mc(16, 3, "What can we learn about the three women from the stories?",
    ["They were called \"Elise\" by their friends.", "Elisabeth Röckel was a close friend of Beethoven's.", "Therese Malfatti changed \"For Elise\" to \"For Therese.\"", "Elise Barensfeld was Beethoven's student."], 1,
    ["文中明說 Röckel 與貝多芬「成為非常要好的朋友」（the two became very good friends），對應選項二。", "選項一錯誤，是貝多芬自己稱呼 Röckel 為「Elise」，不是朋友的稱呼；選項三方向顛倒，是手稿原本寫「For Therese」，後來被人誤抄成「For Elise」；選項四錯誤，是 Barensfeld 向 Malfatti 學鋼琴，不是向貝多芬學習。"],
    "涉及多個人物關係的推論題，建議把每個人物的關係圖（誰教誰、誰稱呼誰）簡單畫出來，避免張冠李戴。",
    "選項三是常見的因果或方向顛倒陷阱：原稿標題其實是「For Therese」，是後來被抄寫者誤寫成「For Elise」，並非特雷莎自己更改了曲名。"),
];

const exam112Set3 = [
  mc(15, 2, "What idea does Jesse Cohen talk about in the reading?",
    ["Not all kinds of toys are helpful for children's learning.", "Parents should give their children the right toys for their age.", "Children should learn about their gender from playing with toys.", "We should not let gender decide which toys children can play with."], 3,
    ["文章從頭到尾都在質疑「男生玩具、女生玩具」這種依性別區分玩具的做法，並在第三段說明這種做法對孩子有害，全文主旨對應選項四。", "選項一、二是文中提到的細節（不同玩具教不同能力），但不是全文的核心主張；選項三則與作者立場完全相反，作者認為性別不應該決定玩具選擇，而不是孩子該從玩具學性別。"],
    "找作者核心主張時，留意文章開頭提出的問題（Are boys and girls really born with different interests in toys?）與結尾呼應的立場。",
    "選項三容易因為文中確實討論了「孩子如何學會性別刻板印象」而被誤選，但這只是作者用來『反駁』的過程，不是作者提倡的想法。"),
  mc(15, 2, "In the third paragraph, why does Jesse Cohen think \"this rule can be bad for children\"?",
    ["Children may not want to share their toys with others.", "Children may have the wrong idea about following rules.", "Children may not be able to learn from playing with toys.", "Children may miss the chance to find out what they really like."], 3,
    ["第三段明確指出，如果孩子只玩一種玩具，會「失去發現自己真正興趣或擅長之處的重要機會」（miss this important chance），對應選項四。", "選項一（分享玩具）、二（誤解規則）文中完全沒有提到；選項三說孩子「無法從玩玩具中學習」則與文中「不同玩具教不同能力」的說法相反，只是孩子被侷限在單一種玩具而已。"],
    "「為什麼」類的細節題，答案通常就是題目引號句子的下一到兩句話，直接往後讀即可找到理由。",
    "選項三容易與原文「不同玩具教不同東西」的敘述混淆，但重點不是「無法學習」，而是「只能學到一種、錯過其他機會」。"),
  mc(16, 3, "In the reading, after Jesse Cohen talks about an idea, he often gives an example to make it clear.  Below are four of the sentences in the third paragraph.  Which is used as an example?",
    ["\"However, this rule can be bad for children.\"", "\"Dolls help with their early language use, and building toys are good for learning math and science.\"", "\"Some doctors worry that children may use the same kind of thinking when they look for jobs in the future.\"", "\"If they do, they may miss something more important than just getting a chance to play with different toys.\""], 1,
    ["選項二具體列舉「洋娃娃有助於語言發展、建構玩具有助於數學科學」這類具體事例，用來支撐前一句「不同玩具教不同東西」的抽象主張，功能上正是「舉例說明」。", "選項一是提出主張的句子本身（不是例子）；選項三、四則是進一步延伸的推論或後果，屬於論證的延續，而非具體例證。"],
    "判斷句子功能（主張 vs. 例子）時，看句子是否提供了「具體、可驗證的事實」，具體事物或數據通常是例子，抽象敘述則是主張。",
    "選項三看起來也很「具體」（提到醫生的擔憂），但這其實是另一層推論後果，不是用來解釋「不同玩具教不同東西」這個主張的例子。"),
];

const exam112Set4 = [
  mc(15, 2, "What is the reading mostly about?",
    ["Marie Colvin's war reports.", "Marie Colvin's working life.", "Marie Colvin's schooldays at Yale.", "Marie Colvin's experiences in Homs."], 1,
    ["全文依時間順序介紹 Colvin 從耶魯大學決定成為記者、加入《週日泰晤士報》、在多個戰地採訪、到最後在霍姆斯殉職的完整職業生涯，對應選項二「工作生涯」。", "選項一、四只涵蓋文章的一部分內容（戰地報導、霍姆斯事件），選項三（耶魯求學）也只是全文的起點，範圍都過於狹窄。"],
    "傳記類文章的主旨題，通常是問「整段人生歷程」而非單一階段，要用「能否涵蓋全文起訖」來檢查選項。",
    "選項一「戰地報導」容易被誤選，因為篇幅確實提到不少戰地報導的內容，但文章其實是完整交代她的整個工作生涯，範圍比「報導本身」更廣。"),
  mc(20, 2, "What does it mean when someone has empathy?",
    ["They are good at taking war photos.", "They like to read other people's life stories.", "They are able to understand how other people feel.", "They are good at helping people change their own lives."], 2,
    ["文中接續說明 Colvin 展現 empathy 的方式是「寫真實的人與他們真實的生活，讓讀者感同身受，就像是自己的故事一樣」，可見 empathy 是指能夠理解、感受他人的處境與情緒。", "選項一、二、四都只是文中描述 Colvin 工作方式的細節（拍照、寫故事、期望世界採取行動），並不是 empathy 這個字本身的定義。"],
    "遇到「這個字最可能是什麼意思」的詞彙題，要看緊接在該字後面一到兩句的說明或例子，通常就是字義的具體展開。",
    "不要把「同理心的具體展現方式」（例如寫故事讓人感同身受）誤當成「同理心的定義」本身，要抓住最核心的「理解他人感受」這個意思。"),
  mc(15, 3, "Which is true about Marie Colvin?",
    ["The chance to study at Yale made her leave her job in the Middle East.", "The experience in Sri Lanka did not change her way of reporting news.", "She was killed in Homs when she was interviewing soldiers there for her report.", "She was not sure what to do in the future until she worked for the Sunday Times."], 1,
    ["文中提到她在斯里蘭卡失去左眼後「但那從未阻止過她，她仍然前往其他記者不願造訪的危險地方」，可見這次經驗並未改變她一貫的報導方式，對應選項二。", "選項一因果顛倒，是她在耶魯就讀時「決定將來要當記者」，不是耶魯讓她離開中東的工作；選項三錯誤，她是在住處遭攻擊時遇害，不是在採訪士兵時；選項四錯誤，她在耶魯讀書時就已經決定要當記者，不是進入《週日泰晤士報》後才確定方向。"],
    "傳記類細節題要留意事件發生的時間順序，先確認選項描述的因果或先後關係是否與原文一致。",
    "選項一是常見的因果顛倒陷阱：原文是「在耶魯時決定當記者」，選項卻反過來說「耶魯的機會讓她離開中東工作」，兩者邏輯方向完全不同。"),
];

const exam112Set5 = [
  mc(15, 2, "It's about ___ in different parts of the US.",
    ["what things are called", "how sports are played", "why different languages are spoken", "what words are often spelled differently"], 0,
    ["這句話是在介紹整本書的主題，後文舉例說明「運動鞋在美國不同地區有不同的稱呼（tennis shoes／sneakers／gym shoes）」，可見全書主題是「同一件事物在不同地區的稱呼方式」。", "選項二、三與後文舉例的內容（物品的不同稱呼）無關；選項四「拼字不同」也與例子中「完全不同的單字」（如 sneakers vs. tennis shoes）不符，那是不同的字，不是同一個字拼法不同。"],
    "克漏字若填在文章開頭當主旨句，要先讀完後面一到兩句的具體例子，再回頭確認哪個選項能總括這些例子。",
    "選項四容易因為看到 spelled 這類詞形變化的字眼而被誤選，但後文舉的例子是「完全不同的單字」，不是「同一個字的不同拼法」。"),
  mc(16, 3, "But in my experience, it also shows ___.",
    ["how old they are", "who they speak to", "where they grew up", "whether they are men or women"], 0,
    ["作者接著舉例：同樣住在紐約，祖父說 plimsolls、作者自己說 sneakers、女兒卻說 kicks 或 vans，三個世代用詞不同，這正是「年齡」造成用詞差異的證據。", "選項二、三、四都無法從「祖父／作者／女兒」這組跨世代的例子中得到支持，文中並未提到說話對象、成長地點或性別的差異。"],
    "克漏字若接在舉例句之前，答案必須能被緊接著的具體例子（這裡是三代人用詞不同）直接印證。",
    "選項三「成長地點」容易被誤選，因為前一句才剛提到「用詞顯示人們來自哪裡」，但這句用 also（也）表示要換一個新的面向，答案不能重複前一句已經講過的地點因素。"),
];

window.__ENG_TRANSCRIBED_112 = {
  minutes: 60,
  omittedNote: "112年英語（閱讀）題本共43題，其中第1題（需看圖片判斷選項）、第24、25題（依賴含價格與集點規則的菜單圖表及月曆圖片）、第26、27題（說明如何處理離巢幼鳥的圖文注意事項未提供純文字內容）、第28、29題（依賴各地區各階段食物浪費百分比的圖表）因純為圖片、圖表或版面內容，無法轉錄為等義文字，其餘36題皆已逐題轉錄並核對官方答案。",
  questions: [
    ...exam112,
    ...attach(exam112Set1, "112-mosquito", "Sometimes when the rain falls hard and fast on you, it might hurt a little.  But what happens when it hits a mosquito?  A 2012 study says when a raindrop falls on a mosquito, it's like when a bus hits a person.  Besides, the little insect is hit by a raindrop about once every 20 seconds.\n\nSo why don't we see many dead mosquitoes after it rains?\n\nA mosquito is as big as a raindrop, but it is much lighter — 0.002 g only.  This saves its life in raindrop attacks.  Because the mosquito is so light, when it is hit by a raindrop, it won't experience a force that is strong enough to kill it.\n\nThe study also found that when a mosquito is hit by a raindrop, the insect is pushed by the raindrop and falls together with it.  But the mosquito doesn't get wet easily because it is covered with hairs which keep off water.  After dropping about 6 cm, it will roll off the raindrop and fly away.\n\nHowever, this trick isn't always successful.  If the mosquito flies too low when it is hit by the raindrop, it won't have time to fly off.  Then it will hit the ground and meet its death.", "Mosquitoes in the Rain"),
    ...attach(exam112Set2, "112-for-elise", "You probably have heard Beethoven's famous piano piece \"For Elise,\" but do you know who \"Elise\" was?\n\nOne story is that Elise was Elisabeth Röckel.  She once sang in Beethoven's opera Fidelio, and the two became very good friends.  Beethoven called her \"Elise.\"  When Röckel was leaving the city of Vienna, Beethoven wrote \"For Elise\" to say goodbye to her.  Another story is that Elise was Therese Malfatti.  Beethoven was in love with her.  He wrote a piece for her and put \"For Therese\" on the manuscript.  Malfatti kept the manuscript and left it to her family when she died.  Later, a man copied the manuscript and wrote \"For Elise\" by mistake.  There is another possible Elise: Elise Barensfeld.  She learned the piano from Malfatti, the same Malfatti in the second story.  To help Malfatti, Beethoven wrote the piece for her to use to teach Barensfeld.\n\nThese are just some guesses about who Elise was.  We may never know the right answer.  No one knew about the piece until 1867, when the manuscript was found.  This was 40 years after Beethoven's death, so he wasn't around to tell us who Elise was.  Only one thing is for sure: \"For Elise\" will always be enjoyed.", "The Story Behind \"For Elise\""),
    ...attach(exam112Set3, "112-toys-gender", "Which would you give a boy for his birthday, a toy truck or a doll?  If you choose the truck, well, you're not alone.  Most people think that some toys are for boys and some are for girls.  We might pick building toys for boys and kitchen toys for girls.  But why do we do this?  Are boys and girls really born with different interests in toys?\n\nNo, they are not.  Children start to show different interests in toys at age three, but only because at this time, they begin to learn about gender and to follow what others of their gender do.  If you give a girl kitchen toys, she will think they are girls' toys because she sees other girls playing with them.  But if you give a girl a toy car and show her a group of girls who are playing with cars, she'll play with the toy car and think it is a girls' toy.  This \"watch and follow\" habit often becomes a rule for both boys and girls in choosing the \"right\" toys.\n\nHowever, this rule can be bad for children.  Different toys teach children different things.  Dolls help with their early language use, and building toys are good for learning math and science.  By playing with different toys, children can find out what they are interested in or what they are good at.  If they only play one kind of toy, they may lose this important chance.  They may also get a wrong idea about what boys or girls are able to do.  Some doctors worry that children may use the same kind of thinking when they look for jobs in the future.  If they do, they may miss something more important than just getting a chance to play with different toys.  They may miss many, perhaps better, chances in life.", "Toys and Gender"),
    ...attach(exam112Set4, "112-marie-colvin", "Marie Colvin was a world-famous war reporter.  She was born in New York, USA, in 1956 and died in Homs, Syria, in 2012.\n\nWhen she was a student at Yale University, Colvin decided that she wanted to be a reporter in the future.  She joined the Sunday Times, a UK newspaper, in 1985 and soon became its Middle East reporter.  Besides the Middle East, she also reported from other parts of the world: Chechnya, Kosovo and Sri Lanka, for example.  When she was reporting on the war in Sri Lanka, she lost her left eye.  But that never stopped her.  She still went to dangerous places that few reporters wanted to visit and stayed when others left.\n\nColvin showed great empathy in her stories.  For her, war reporting was not just some quick interviews and a few photos.  She wrote about real people and their real lives.  Her writing made you feel so strongly about these people's stories, just like they were your own.  She hoped that through her work the world would understand what really happened in war, and would take action to stop the fighting.\n\nOn February 22, 2012, the day after she gave her report on the war in Homs, Colvin was killed when the house she was staying in was attacked.  She always knew what price a war reporter might have to pay.  She already lost an eye before.  This time, she gave her life to the work she could not give up — telling the true stories to the world.", "Marie Colvin, War Reporter"),
    ...attach(exam112Set5, "112-speaking-american", "Speaking American is a great book!\nLucia Leisure  ★★★★★\nI just love Josh Katz's new book!  It's about    42    in different parts of the US.\n\nThe information in the book was collected from the quiz that Katz built on the website in 2013.  The quiz asked what words people use for something, and their answers showed interesting facts.  For example, there are different names for sports shoes.  In most parts of the US, people say \"tennis shoes.\"  In the northeast of the country, people wear \"sneakers.\"  In some towns, \"tennis shoes\" and \"sneakers\" become \"gym shoes.\"\n\nThe use of words tells us where people are from, like Katz's book says.  But in my experience, it also shows    43   .  My family has lived in New York since my grandparents.  It's not surprising that I say \"sneakers.\"  But my grandfather says \"plimsolls,\" and my daughter says \"kicks\" or \"vans.\"  Maybe Katz can study this difference for his next book.", "Speaking American Book Review"),
  ],
};

  // ==================== 113 年 ====================
const exam113 = [
  mc(17, 1, "My ___ hurts so much that I cannot even turn my head.",
    ["arm", "knee", "neck", "stomach"], 2,
    ["句子的關鍵線索是「痛到連頭都不能轉」，能讓轉頭這個動作受影響的身體部位就是脖子。", "arm（手臂）、knee（膝蓋）、stomach（胃）都與「轉頭」這個動作無關。"],
    "身體部位字彙題要找出句子描述的具體動作（這裡是轉頭），再回推是哪個部位造成這個動作受限。",
    "不要看到「痛」就隨意選一個常見的身體部位，要確認選項是否真的與句子描述的動作（轉頭）直接相關。"),
  mc(18, 1, "Our school basketball team won the national game last night.  We are so ___ them.",
    ["popular with", "proud of", "sorry for", "worried about"], 1,
    ["球隊贏得全國冠軍是值得驕傲的事，be proud of（以...為榮）正是描述這種正面情緒的固定搭配。", "popular with（受...歡迎）、sorry for（同情）、worried about（擔心）都不符合「贏得冠軍」這個正面情境的情緒方向。"],
    "情緒字彙題要先判斷句子敘述的事件是正面還是負面，「贏得比賽」是正面事件，答案的情緒詞也必須是正面的。",
    "sorry for、worried about 都是負面情緒詞，容易因為疏忽事件本身其實是好消息（贏得比賽）而選錯方向。"),
  mc(17, 1, "Tomorrow is Sam's last day in the office.  Nobody knows why he decided to ___.",
    ["hide", "leave", "pack", "walk"], 1,
    ["「明天是山姆在辦公室的最後一天」直接暗示他即將離職，leave（離開／離職）正好呼應這個線索。", "hide（躲藏）、pack（打包）、walk（走路）都無法直接對應「最後一天上班」這個關鍵訊息。"],
    "字彙題常常要先讀懂前一句給的背景資訊（這裡是「最後一天」），再選出符合這個背景的動詞。",
    "pack 容易被誤選成「打包東西準備離開」的聯想，但句子問的是他「決定要做的事」，最直接對應的字是 leave（離職）本身。"),
  mc(17, 1, "It's not a good idea to go mountain climbing in this bad ___.  We should wait until the typhoon goes away.",
    ["chance", "dream", "habit", "weather"], 3,
    ["後句提到「等颱風過去」，颱風正是一種天氣現象，因此空格要選 weather（天氣）。", "chance（機會）、dream（夢想）、habit（習慣）都與「颱風」這個線索完全無關。"],
    "字彙題若後句出現具體的自然現象（如颱風），通常就是解釋前面空格語意的直接證據。",
    "不要被「不是個好主意」這個開頭誤導去聯想 chance（機會不好），關鍵線索其實在後半句的 typhoon。"),
  mc(5, 2, "Chris loves walking with Anna on snowy days, but Anna hates ___ very much.",
    ["them", "so", "one", "it"], 3,
    ["空格代替的是前面「在下雪天散步」這件事（動名詞片語 walking...on snowy days），這是單一件事、不是可數的複數名詞，因此要用單數代名詞 it 代替。", "them 是複數代名詞，無法對應單一的動名詞片語；so、one 則不能在 hate 後面單獨當受詞使用。"],
    "代名詞題要先確認前面被取代的內容是單一件事、還是可數複數名詞，動名詞片語（V-ing...）通常視為單數，用 it 代替。",
    "容易誤選 them，因為前面提到 Chris 和 Anna 兩個人，但代名詞真正要代替的是「散步」這個動作本身，不是兩個人。"),
  mc(12, 2, "Lora likes to eat bananas that are already a little brown on the outside, and so ___ I.",
    ["am", "do", "have", "will"], 1,
    ["「so + 助動詞 + 主詞」用來表示「某人也一樣」，助動詞要跟前一句的動詞類型一致；likes 是一般動詞的現在式，所以要借助助動詞 do。", "am、have、will 分別對應 be 動詞、現在完成式、未來式，都與前一句 likes（一般動詞現在式）的類型不符。"],
    "so + 助動詞 + 主詞的一致性判斷，和附加問句的邏輯相同：先看前一句是一般動詞還是 be 動詞／情態助動詞，再決定助動詞。",
    "看到現在式的一般動詞（likes）容易忘記要借助 do/does，誤選看起來也很常見的 am 或 will。"),
  mc(17, 2, "Your refrigerator shouldn't be making loud noises now, but if it ___ does, just give me a call and I'll come check it again.",
    ["already", "even", "finally", "still"], 3,
    ["句意是「冰箱現在應該不會發出噪音，但如果它繼續／仍然發出噪音」，still（仍然）正好表達「儘管不該發生，卻仍然持續」的語氣。", "already（已經）、even（甚至）、finally（終於）都無法表達「與預期相反、仍然持續」的語意。"],
    "still 常用於「儘管理應改變，情況卻依然持續」的語境，看到 shouldn't...but if it ___ does 這類轉折句型可直接聯想到 still。",
    "even 容易被誤選成加強語氣的用法，但句子要表達的是「持續發生」而不是「甚至發生」，語意方向不同。"),
  mc(18, 1, "After winning money in the card game, Jay decided to try again.  He felt that he might also be ___ a second time.",
    ["famous", "interested", "lucky", "ready"], 2,
    ["Jay 剛贏了錢，決定再玩一次，覺得自己可能第二次也會，這正是延續「贏錢」這件事帶來的「幸運」感受。", "famous（有名）、interested（感興趣）、ready（準備好）都與「贏錢、想再次獲勝」的情境無關。"],
    "字彙題要留意句子前後呼應的邏輯，前面提到贏錢的結果，後面延續的情緒或狀態通常與同一主題（運氣）相關。",
    "interested 容易被誤選，因為想「再試一次」聽起來像是感興趣，但句子真正想表達的是「這次也可能一樣幸運」。"),
  mc(7, 2, "The knife doesn't cut very well.  It's not as ___ as before.",
    ["bright", "heavy", "quick", "sharp"], 3,
    ["刀子「切不好」，最直接的原因是刀子不夠「鋒利」，sharp 正好對應「切得好不好」這個線索。", "bright（明亮）、heavy（重）、quick（快）都與「刀子切不好」的原因無關。"],
    "as...as 的原級比較句型中，中間的形容詞要能呼應句子描述的具體狀況（這裡是刀子的鋒利程度）。",
    "quick 容易因為「切」這個動作聯想到「快慢」，但刀子切不好的關鍵在於「鋒利度」，不是切的速度。"),
  mc(2, 2, "John will stay with his sister until he ___ an apartment.",
    ["will find", "would find", "finds", "found"], 2,
    ["until 引導的是表示未來時間點的子句，這類子句依規則要用現在式代替未來式，因此用 finds（第三人稱單數現在式）。", "will find、would find 是未來式或過去未來式，found 是過去式，都不符合「until 子句用現在式表未來」的規則。"],
    "當主要子句已經用 will 表達未來，until／when／after 等表時間的子句要改用現在式，不能重複使用 will。",
    "容易直覺選 will find 讓前後句都用未來式，但英文的時間子句規則規定用現在式取代未來式。"),
  mc(13, 2, "Students ___ to go on the school trip should ask their parents first.",
    ["who want", "want", "who they want", "what they want"], 0,
    ["先行詞 Students 是人，關係代名詞 who 在子句中做主詞（want to go on the trip），故用 who want 這個完整的關係子句修飾 Students。", "want 缺少關係代名詞，無法把子句接在 Students 後面；who they want、what they want 則多了重複的主詞 they 或改變了語意，都不符合文法。"],
    "先確認先行詞是人還是事物，再確認關係代名詞在子句中的角色（這裡做主詞），用「先行詞＋關係代名詞＋動詞」的完整結構。",
    "who they want 是常見陷阱，考生會誤以為關係代名詞後面還要保留原本的主詞 they，但這樣會造成子句主詞重複。"),
  mc(8, 1, "The temple sits alone in the mountains at a height of 3,000m ___ sea level.",
    ["above", "at", "below", "in"], 0,
    ["「海拔 3,000 公尺」是固定搭配 at a height of...above sea level（在海平面以上...的高度），above 正是這個固定用法的一部分。", "at、below、in 都不符合「海拔高度」這個固定搭配的介系詞用法。"],
    "「above sea level」（海拔以上）是描述地理高度的固定介系詞搭配，建議直接整組背下來。",
    "below 容易因為字面上「高度」與「海平面」的相對關係被誤選，但描述山、廟宇等位於海平面之上的高度，固定用 above，不是 below。"),
  mc(9, 1, "Patty spent several days planning to invite Charlie to dinner, ___ she couldn't say a word when they met.",
    ["but", "if", "or", "so"], 0,
    ["句意是「派蒂花了好幾天計畫邀請查理吃飯，見面時卻一個字都說不出來」，前後語意明顯轉折，故用 but。", "if（如果）、or（否則）、so（所以）都無法表達「花時間計畫」與「卻說不出話」之間的對比轉折關係。"],
    "看到前後兩件事情呈現「原本預期 vs. 實際結果相反」的落差時，直接考慮用表轉折的 but。",
    "so 容易被誤選成「因為...所以」的因果關係，但句子中「精心計畫」與「說不出話」其實是相反、矛盾的結果，不是因果關係。"),
  mc(3, 2, "I can't tell you what I think of the movie because I ___ it.  I'll probably watch it this Saturday.",
    ["am not seeing", "don't see", "haven't seen", "won't see"], 2,
    ["後句說「這個星期六可能會去看」，可見說話當下電影「還沒看過」，這種「到目前為止尚未做、之後有計畫要做」的語意正是現在完成式的典型用法。", "am not seeing 是現在進行式、don't see 是現在式的習慣性否定、won't see 是未來式的否定，都無法表達「目前為止還沒看過」這個現在完成式的語意。"],
    "描述「到現在為止尚未發生，但之後有具體計畫」的事，優先考慮現在完成式的否定形式 haven't + p.p.。",
    "won't see 容易被誤選，因為句子確實提到未來會看電影，但空格要表達的是「現在為止的狀態（還沒看）」，不是「未來不會看」。"),
  mc(18, 1, "The new guy at the help desk answers calls like a ___.  There are no ups and downs in his voice and you can't tell if he is happy or sad.",
    ["father", "foreigner", "radio", "robot"], 3,
    ["「聲音沒有高低起伏、聽不出喜怒」正是形容一個人講話像機器一樣沒有感情，robot（機器人）最能表達這種冷淡、機械化的形象。", "father（父親）、foreigner（外國人）、radio（收音機）都無法對應「聽不出情緒、沒有起伏」這個具體描述。"],
    "描述人物個性或說話方式的譬喻字彙題，要抓住句子提供的具體特徵（這裡是聲音沒有情緒起伏），找出最貼切的譬喻對象。",
    "radio 容易因為「聲音」這個關鍵字被誤選，但收音機播放的聲音本身可能有情緒起伏，真正「毫無情緒、像機器」的譬喻是 robot。"),
  mc(17, 1, "Jasmine planned to spend her summer in the country, but right after she got there, she started to ___ the noise in the city.",
    ["enjoy", "mind", "miss", "notice"], 2,
    ["Jasmine 原本計畫到鄉下避開城市喧囂，但一到鄉下卻反而開始想念城市的噪音，miss（想念）正好表達這種「原本討厭卻開始懷念」的心情轉折。", "enjoy（享受）、notice（注意到）語意過於平淡，無法表達懷念的情緒；mind（介意）方向相反，是負面感受而非懷念。"],
    "字彙題若句子出現「但...卻」這類語氣轉折（but right after），答案通常也要能反映出情緒或態度上的轉變。",
    "mind 容易被誤選成「介意噪音」，但句子的轉折點在於她開始「想念」原本以為自己討厭的城市噪音，情緒方向是懷念而非厭惡。"),
  mc(7, 2, "\"Bad traffic\" is perhaps the ___ excuse for being late when your boss knows it only takes you five minutes to walk to work.",
    ["easiest", "oldest", "smartest", "worst"], 3,
    ["老闆已經知道走路上班只要五分鐘，這時用「交通不好」當藉口顯然非常站不住腳，bad 的最高級 worst（最糟糕的）正好表達這種藉口有多不合理。", "easiest（最簡單）、oldest（最老套）、smartest（最聰明）都無法呼應「老闆明知實情、藉口完全站不住腳」的諷刺語氣。"],
    "bad→worse→worst 是常考的不規則最高級變化，遇到明顯不合理、站不住腳的藉口情境，可直接聯想到 worst。",
    "smartest 容易被誤選成「聰明的藉口」，但句子的諷刺重點在於這個藉口有多站不住腳、多糟糕，而不是多高明，方向恰好相反。"),
  mc(11, 2, "The housework in Mr. and Mrs. Wang's family ___ between them and their kids.   Everyone's got their own job to do.",
    ["is shared", "are shared", "shares", "share"], 0,
    ["housework（家事）是不可數名詞，視為單數，且家事是被「分擔」的對象（動作承受者），所以要用被動語態的單數形式 is shared。", "are shared 誤把 housework 當成複數名詞；shares、share 則是主動語態，語意會變成「家事去分擔別人」，不合邏輯。"],
    "遇到不可數名詞當主詞時，先確認被動語態要搭配單數 be 動詞 is，不能因為後面出現「between them and their kids」這類多數對象就誤用複數 are。",
    "are shared 是常見陷阱，容易因為句子談到「他們和小孩之間」多個人而誤用複數 be 動詞，但決定 be 動詞單複數的是主詞 housework 本身，不是分攤家事的人數。"),
  mc(5, 2, "I want to find another dentist because ___ pulled out a good tooth last time I went to him.",
    ["I", "me", "mine", "myself"], 2,
    ["空格在此代替「我的牙醫」（my dentist），是所有格代名詞的用法，且在子句中做主詞，故用 mine（＝my dentist）最符合語意與文法。", "I 雖然也能做主詞，但語意會變成「我自己拔掉了一顆好牙」，與句意「想換牙醫」矛盾；me、myself 則不能在此處當主詞使用。"],
    "所有格代名詞（mine, his, hers）可以單獨代替「所有格＋名詞」的整個片語，在句子中扮演主詞或受詞的角色。",
    "容易誤選 I，因為它是最常見的主格代名詞，但若選 I，句意會變成「我自己拔掉了一顆好牙」，導致上下文（想找新牙醫）完全說不通。"),
  mc(2, 1, "Mom: Linda, you've been playing computer games all evening!  Have you finished your report?\nLinda: Well, ___ most of it this afternoon, and I'll finish it by Friday.",
    ["I would do", "I did", "I was doing", "I'll do"], 1,
    ["Linda 描述「今天下午已經完成了大部分」，這是一件已經在過去某個時間點完成的具體事情，用簡單過去式 I did 最恰當。", "I would do、I'll do 都是表達未來或假設的形式，與「已經完成大部分」這個已發生的事實矛盾；I was doing 過去進行式則暗示動作尚未完成，與「大部分」已完成的語意不符。"],
    "描述「在過去某個時段已經完成的具體份量」時，用簡單過去式即可，不需要用進行式或未來式。",
    "I was doing 容易被誤選，因為它也提到「這個下午」，但過去進行式強調動作「正在進行、尚未完成」，與句意「已經完成大部分」不符。"),
];

const exam113Set1 = [
  mc(15, 2, "Why did Philip go out?",
    ["To meet a woman.", "To look for his father.", "To ask the police for help.", "To buy food for his brother."], 3,
    ["文中明確說明：弟弟 Jason 肚子餓一直哭，Philip 不會煮飯，於是「決定帶 Jason 出去買點吃的」（Philip decided to take Jason out for some food）。", "選項一、二、三都是後來發生在他回家後的事（遇到陌生女子、父親、警察），並非他一開始外出的原因。"],
    "找「原因、目的」類的細節題，要鎖定事件發生的先後順序，答案通常在描述該行為的那一句話附近，不要被後面發生的事干擾。",
    "選項二、三容易因為後段劇情出現「父親、警察」而被誤選，但那些都是他外出買食物、回家後才遇到的事，不是他外出的原因。"),
  mc(15, 3, "Why was Philip's father angry?",
    ["He forgot his keys.", "The woman was hiding from him.", "The police didn't believe what he said.", "Philip and his brother went out at night."], 2,
    ["父親大喊「我沒有做錯任何事！我忘記帶鑰匙，只是想進自己的家！」，之後文中補充「但警察不相信他，直到 Philip 跑過去解釋清楚」，可見他生氣的原因是不被警察採信，被誤會成闖空門。", "選項一「忘記帶鑰匙」只是造成整起誤會的起點，不是他發怒的直接原因；選項二、四則與文中敘述不符，女子是報警人，不是躲著他。"],
    "找情緒背後的原因時，要留意事件的「導火線」：忘記鑰匙只是背景，真正讓他生氣的是後續「不被相信、被當成小偷」的處境。",
    "選項一容易被誤選成「忘記鑰匙」本身讓他生氣，但忘記鑰匙只是事情的起因，他真正憤怒的關鍵是被警察誤會、不被採信。"),
];

const exam113Set2 = [
  mc(16, 3, "What kind of people do Yan's and Chang's friends most likely think Yan and Chang are?",
    ["They enjoy good food.", "They don't like to share.", "They like to make friends.", "They don't like new things."], 1,
    ["兩則故事中，燕子只端出一條小得像手指的魚、常向朋友坦承食物不夠留客吃飯，朋友都用「借燈」「借刀殺馬」這類反諷方式暗示主人根本捨不得拿出真正的食物款待客人。", "選項一、三、四都與故事中朋友『反諷主人小氣、捨不得分享食物』的言外之意不符，文中沒有證據支持這些正面的推論。"],
    "推論題要從人物的『言外之意』（反諷、暗示）去推敲對方真正的想法，而不是只看字面上的對話內容。",
    "不要被『請客吃飯』這個表面行為誤導成『喜歡交朋友』，兩則故事的反諷重點其實都是主人小氣、捨不得拿出好東西分享。"),
  mc(16, 2, "What is it in the second story?",
    ["A big knife.", "The horse.", "Lunch.", "One of Chang's ducks or chickens."], 1,
    ["朋友說「我在想要不要殺了騎來的這匹馬，這樣我們就有午餐吃了」，張立刻問「但你沒有馬要怎麼回家？」，這裡的 it 就是指前一句提到的「馬」。", "選項一、三、四雖然都出現在對話中，但代名詞 it 緊接在「殺馬」這句話之後，最合理指涉的對象是剛提到的馬，而不是刀子、午餐或鴨雞。"],
    "代名詞指涉題要往前找最近一個單複數一致、且代入後語意通順的名詞，這題最近的名詞就是「馬」。",
    "容易誤選 lunch，因為前後文都在談論「有東西吃」，但 it 緊貼在「without it（沒有它要怎麼回家）」，回家需要的交通工具是馬，不是午餐。"),
];

const exam113Set3 = [
  mc(15, 2, "Why does the writer talk about doctors and a health center in the reading?",
    ["To explain Chen's services.", "To talk about Chen's future plans.", "To explain Chen's love for books.", "To show why bookstores are important."], 0,
    ["作者把陳先生比喻成醫生、把他的書店比喻成健康中心，用來說明他提供的服務性質：處理「較小的書本問題」，對應大型圖書館、博物館處理「較嚴重書本問題」的分工，藉此具體解釋他的工作內容。", "選項二、三、四都不是這個譬喻真正要說明的重點，文章沒有提到陳先生的未來計畫，也不是在泛論書店的重要性。"],
    "說明文中若出現「把 A 比喻成 B」的段落，通常是為了具體解釋 A 的功能或性質，要回頭確認這個比喻對應的是文中哪一項服務或特色。",
    "選項三容易因為陳先生確實熱愛修書而被誤選，但醫生／健康中心這個比喻的重點在『說明他提供的服務內容』，而不是抒發他對書的熱愛。"),
  mc(15, 3, "Why is Chen Bing-Hong's job important in the example he gave?",
    ["It allows people to get books as gifts.", "It saves people money on new books.", "It gives people hope to follow their dreams.", "It helps people think of special moments in the past."], 3,
    ["範例中，那本科學書的主人拿回修好的書後，「感覺自己彷彿回到了與老師相處的那些日子」，可見修書的意義在於幫助他重新回味與老師相處的珍貴回憶。", "選項一（書是禮物）只是背景設定，不是修書「重要」的原因；選項二、三與這個例子想強調的『喚起回憶』無關。"],
    "舉例說明類的細節題，要找出例子結尾點出的『情感重點』（這裡是『彷彿回到與老師相處的日子』），那通常就是作者想強調的重要性。",
    "選項三容易被誤選成『追尋夢想的希望』，但例子中書的主人已經完成學業、正在回味過去的師生情誼，而不是重新燃起對未來夢想的希望。"),
  mc(16, 2, "What is his magic?",
    ["Fixing books.", "Making book owners smile.", "Finding books that are long lost.", "Changing his bookstore into a library."], 0,
    ["文章開頭就說明陳先生「總是能把書修好，讓書恢復完整」，這正是他的專長與「魔法」的本質；結尾說『這樣的笑容正是他的魔法的意義所在』，笑容是修書帶來的『結果』，而不是魔法本身。", "選項二把『結果（顧客微笑）』誤認為『魔法本身』；選項三、四則完全不是文中提到的內容。"],
    "指涉『他的魔法』這類抽象詞語時，要回到全文找出這個人真正擅長、貫穿全文的核心能力，而不是只看緊鄰句子的字面描述。",
    "選項二是常見的因果倒置陷阱：『讓顧客微笑』是修書之後帶來的結果，陳先生真正的『魔法』是『修書』這個能力本身。"),
];

const exam113Set4 = [
  mc(15, 2, "According to the reading, why did Rohla and Kreytenberg open Habibi & Hawara?",
    ["To help refugees live better in Austria.", "To collect money to help Syria fight the war.", "To help Austrians learn about the war in Syria.", "To help refugees go back to their home countries."], 0,
    ["文中明確說明兩人「想幫助難民開始新生活」（They want to help them start a new life），並邀請難民參與、發現其中有人曾是廚師，因而催生了這間結合奧地利與敘利亞料理的餐廳。", "選項二、三、四都不是文中提到開店的動機，文章重點在於『幫助難民在奧地利展開新生活』，而不是募款、教育奧地利人或協助難民返鄉。"],
    "找『開店動機』類的細節題，要鎖定文中直接陳述目的的句子（they want to help them...），避免被其他背景描述（戰爭、難民問題）模糊焦點。",
    "選項三容易因為文中確實提到『讓奧地利人了解難民議題』的效果而被誤選，但這只是附帶的社會影響，不是兩人開店的初衷。"),
  mc(15, 2, "What can we learn about Habibi & Hawara?",
    ["It was moved from Syria to Austria.", "It may finally be sold to its workers.", "It has cooking classes in Syrian food.", "It is an important meeting place for Syrians."], 1,
    ["文末提到兩位創辦人「希望最終能把餐廳賣給表現最好的員工」（They want their best workers to buy the restaurant in the end），對應選項二。", "選項一、三、四都不是文中提到的內容，餐廳並非從敘利亞搬遷而來，文中也沒提到開設烹飪課程或作為敘利亞人的聚會場所。"],
    "細節題要留意文章結尾常會補充『未來展望』類的訊息，這類句子常常就是考點所在。",
    "不要因為餐廳結合了敘利亞料理，就聯想到『敘利亞人的聚會場所』（選項四），文中從未提及顧客或聚會性質的描述。"),
  mc(20, 2, "What does it mean when people beg to differ?",
    ["They do not agree.", "They look different.", "They cannot speak for others.", "They do not notice something."], 0,
    ["文中先描述部分奧地利人擔心難民搶工作、感到不安，接著說「但 Rohla 和 Kreytenberg 卻 beg to differ：難民不必然是個問題」，可見這個片語是用來表達『不同意前面提到的看法』。", "選項二、三、四都不是 beg to differ 這個片語的意思，這是描述『立場不同、持相反意見』的固定用語，與外表、代言或注意力無關。"],
    "片語猜義題要看緊接在片語後面的句子，這裡『難民不必然是個問題』正是兩人『不同意』前述負面看法的具體說明。",
    "不要從字面 differ（不同）直接聯想到『外表不同』（選項二），這個片語整體是『表示不同意見』的固定用法，要看整個片語而非拆解單字。"),
];

const exam113Set5 = [
  mc(20, 2, "What does it mean when someone is an advocate of something?",
    ["They talk a lot but do little about it.", "They believe it is good and should be done.", "They have had some bad experiences with it.", "They are one of the first people who have done it."], 1,
    ["文中接著說明 Smith「認為我們必須盡一切努力讓牠們復活」（he also thinks we must do everything we can to bring them back），可見 advocate 是指『支持、認為應該去做』某件事的人。", "選項一、三、四都與文中描述 Smith 積極主張復育滅絕動物的正面立場不符。"],
    "字義猜測題要往後讀一到兩句，通常緊接的說明句就是該字定義的具體展開，例如這裡的『認為必須盡力去做』。",
    "選項一『說得多做得少』容易因為 advocate 常帶有『倡議、發言』的印象而被誤選，但文中明確描述 Smith 是『堅定支持該做這件事』，語氣是正面積極的。"),
  mc(15, 2, "What is special about the extinct frog in Smith's book?",
    ["It can live in a dirty living space.", "It might help fix a health problem.", "It eats its babies when it cannot find food.", "It is the first extinct animal that people studied."], 1,
    ["文中說明這種青蛙的蝌蚪在母體的胃裡長大，Smith 認為研究這個過程「或許能找到幫助那些寶寶會早逝的婦女順利懷孕生產的新方法」，對應選項二『可能有助解決健康問題』。", "選項一、三、四都不是文中描述這隻青蛙『特別之處』的重點，文中沒有提到牠能住在骯髒環境或吃掉自己的寶寶。"],
    "找『特別之處』的細節題，通常要鎖定文中用來『解釋為什麼值得特別介紹』的那段因果說明。",
    "選項三容易因為『蝌蚪長在胃裡』這個特殊畫面聯想到『吃掉寶寶』，但文中说的是蝌蚪『在』胃裡發育成長，不是被吃掉。"),
  mc(15, 2, "Why does Ellen Zimmer use the words from Dr. Solomon Wang?",
    ["To start a new topic.", "To share a big dream.", "To make her idea clearer.", "To invite people to take action."], 2,
    ["Ellen Zimmer 全文都在質疑複育滅絕動物的效益，引用 Dr. Wang「這是把好錢丟進壞錢裡」這句話，正是用專家的說法來更清楚地支持、具體化自己原本『覺得這個研究不划算』的論點。", "選項一、二、四都與作者原本『對複育計畫抱持懷疑』的論述方向不符，她並非在開啟新話題或鼓吹行動。"],
    "作者引用他人說法時，通常是為了『佐證、強化』自己原本已經表達的立場，要先確認作者引用前後的態度是否一致。",
    "選項四容易被誤選成『呼籲採取行動』，但整段文字的語氣其實是質疑、反對繼續投入資源，而不是鼓勵大家行動支持。"),
  mc(16, 3, "What does Ellen Zimmer most likely think about bringing back extinct animals?",
    ["It is possible.", "It is dangerous.", "It is not possible.", "It is not dangerous."], 2,
    ["全文中 Zimmer 不斷質疑複育計畫的可行性：花費十年鉅資卻只得到幾顆死掉的蛙卵、引用專家說法「丟錢進無底洞」，可見她認為這件事根本『做不到』，而不是擔心它有危險性。", "選項一與她整體懷疑的語氣相反；選項二、四則偏離文章重點，文中從未提及複育動物本身有『危險性』，只質疑其『可行性』。"],
    "推論作者立場時，要統整全文反覆出現的證據（時間金錢的浪費、專家質疑），而不是只看單一句子就下結論。",
    "選項二容易把『花大錢卻沒有成果』的浪費感誤讀成『危險』，但作者真正質疑的是這件事『能不能做到』，不是它是否有害。"),
];

const exam113Set6 = [
  mc(15, 2, "Though it has been a very popular topic this year, social distancing ___.",
    ["is not a new idea", "has not been very useful", "may bring some problems", "is not welcomed by everyone"], 0,
    ["緊接的下一句說「事實上，這個做法早在 1918 年美國的流感大流行時就已被廣泛使用」，這正是用來支持『社交距離並不是新概念』的證據。", "選項二、三、四都與後文『被廣泛使用』這個正面歷史事實矛盾，文章並未說它沒有用、會帶來問題或不受歡迎。"],
    "克漏字題若填在轉折句（Though...but）中，通常要往下一句找支持或解釋的證據，這裡的 In fact 就是關鍵的承接線索。",
    "不要只看 popular topic this year 就聯想選項四『不受歡迎』，In fact 後面接的歷史事實才是判斷空格語意的真正依據。"),
  mc(15, 2, "However, both cities ___, and the numbers of deaths climbed again.",
    ["had higher numbers of deaths", "stopped social distancing too soon", "began social distancing a second time", "had the most days of social distancing"], 1,
    ["前一句說 Portland 和 Denver 在最初幾週表現良好，However（然而）後面接的空格必須說明『為什麼後來死亡人數又攀升』，最合理的解釋是『太早停止社交距離措施』。", "選項一（死亡人數較高）與後面『死亡人數又攀升』重複，不是原因而是結果；選項三、四則與『However 語氣轉折、情況變糟』的方向不符。"],
    "找因果關係的克漏字，要先確認空格是在敘述『原因』還是『結果』，這裡後面的『death numbers climbed again』已經是結果，空格要填的是導致這個結果的原因。",
    "選項一容易與句子後半『死亡人數攀升』搞混，誤以為空格也是在講死亡人數本身，但空格要填的是『造成』死亡人數攀升的具體原因（太早停止防疫措施）。"),
  mc(15, 1, "___, sick people were kept away from healthy ones; schools were closed; public activities were not allowed.",
    ["Also", "At first", "However", "For example"], 3,
    ["前一句說「這座城市同時使用了好幾種社交距離的方法」，接下來列舉具體做法（隔離病人、關閉學校、禁止公眾活動），這正是用實例說明前一句的敘述，故用 For example（舉例來說）。", "Also（此外）語氣過於平淡、無法點出『列舉範例』的功能；At first（起初）、However（然而）則與『列舉具體做法』的邏輯不符。"],
    "當前一句是概括性敘述（用了好幾種方法），後面接的是具體條列項目時，通常用 For example 銜接最恰當。",
    "Also 容易被誤選成單純的『補充』，但這裡後面接的是具體的三個做法，功能上是『舉例說明』前一句的概括描述，而非單純補充新資訊。"),
];

window.__ENG_TRANSCRIBED_113 = {
  minutes: 60,
  omittedNote: "113年英語（閱讀）題本共43題，其中第1題（需看圖片判斷選項）、第24、25題（依賴含營業時間與優惠規則的麵包店時刻表圖片）、第26、27題（依賴市集園遊會的地圖圖片）、第41題（依賴呈現各城市社交距離起始時間的長條圖圖表）因純為圖片或圖表內容，無法轉錄為等義文字，其餘37題皆已逐題轉錄並核對官方答案。",
  questions: [
    ...exam113,
    ...attach(exam113Set1, "113-philip", "It was around eight o'clock on Saturday night.  Philip was at home with his little brother, Jason.  Jason was hungry and kept crying.  But Philip couldn't cook and their father was not home yet because he was working late in the office.  So Philip decided to take Jason out for some food.\n\nHalf an hour later, when they came back home, Philip was surprised to find that their father was talking to the police and a woman outside their house.  He didn't know who the woman was.  She looked scared and stood behind the police.  Philip's father was very angry and kept shouting, \"I didn't do anything wrong!  I forgot my keys and was just trying to get into MY OWN HOUSE!\"  But the police didn't believe him until Philip ran to them and explained everything.\n\nThe police told Philip that the woman called 110 when she saw Philip's father trying to get into a house through a window.  That was how it all happened.", "Philip's Night Out"),
    ...attach(exam113Set2, "113-yan-chang", "Yan lived a good life in a big house.  One day he invited a friend to dinner at his house.  However, on the dinner table there was only one small dish of one small fish.\n\nThe friend looked quietly at the fish.  It was no bigger than a finger.\n\nThen he asked Yan if he could borrow a lamp.\n\n\"What for?\" Yan asked.\n\"Well, it's so dark in here,\" the friend said with a dry smile, \"I can't see the other delicious dishes you've prepared for me.\"\n\nChang kept a lot of ducks and chickens on his farm.  One day, his best friend came to visit him.  At noon, Chang told his friend that he couldn't let him stay for lunch because there wasn't much food to eat.  The friend looked out at Chang's farm animals for a moment.  Then he asked Chang if he had a big knife.\n\n\"Yes, but what for?\" Chang asked.\n\"I'm thinking about killing the horse I rode here so we'll have something for lunch,\" the friend said.\n\n\"But how are you going to go home without it?\"\n\"Well, you wouldn't mind lending me one of your many ducks or chickens so I can ride it home, would you?\"", "Yan and Chang: Two Fables"),
    ...attach(exam113Set3, "113-cotoha", "Usually, people visit bookstores to buy books.  But those who walk into Cotoha come to see its owner, Chen Bing-Hong.  They bring him books with different problems.  Some have lost their covers, some are missing a few pages, and some have pages that are falling out.  Chen can always fix the books and make them whole again.\n\nChen sees himself as a doctor.  He says that books, like people, get sick and need help.  In Taiwan, there are not many \"doctors\" like him, and most of them work for big libraries and museums.  If big libraries and museums are hospitals, Chen's bookstore is a health center.  Big libraries and museums fix important old books with serious problems, and Chen helps people with books that have smaller problems.  However, the smaller size of the problems doesn't mean Chen's job is less important.\n\nChen gave an example of a science book he once worked on.  It was very old and half of its cover was lost.  Its owner still wanted to keep it because it was a gift from a teacher who helped him follow his dream of studying science.  When he got his book back, he was very surprised at the new-old book.  He felt he was brought back to the days with his teacher.  Seeing the owner's smile made Chen happy, because smiles like that are what his magic is for.", "Chen Bing-Hong, the Book Doctor"),
    ...attach(exam113Set4, "113-habibi", "A Delicious Surprise and Welcome Change\nBy Karl Falk, June 1, 2016\n\nIn Austria, there are not many restaurants like Habibi & Hawara.  Here you can enjoy Austrian and Syrian food together.  Two Austrians, Martin Rohla and David Kreytenberg, started this yummy plan from their experience of working with refugees.\n\nEvery year, thousands of people have to leave their homes and families because of war in their countries.  So many of them go to Austria that some people in the country think they have become a problem.  They are afraid refugees may take away their jobs and they don't feel safe around them, either.  But Rohla and Kreytenberg would beg to differ: The refugees don't have to be a problem.  They want to help them start a new life.  They invited refugees to meetings and found that some of them were cooks back in Syria.  So the idea of Habibi & Hawara was born—a restaurant that brings together Austrian and Syrian food.  \"The two worlds far away from each other meet together,\" Kreytenberg said.\n\nBut Rohla and Kreytenberg want to do more than just give the refugees work.  They want their best workers to buy the restaurant in the end.  They hope that Habibi & Hawara is not just a one-time plan and that other Austrians will join them and help more refugees.", "A Delicious Surprise and Welcome Change"),
    ...attach(exam113Set5, "113-extinct-animals", "If you want to learn about bringing back extinct animals, reading John Smith's Back from the Dead is a good start.  But I have to say I can't agree with everything he says.\n\nFrom his book, I can see Smith is an advocate of bringing extinct animals back.  He says we have lost many animals because we made their living spaces too dirty.  He also thinks we must do everything we can to bring them back.  However, I don't know how much time and money we would need to make the world a better place for them, and honestly no one knows if they could actually come back.\n\nSmith also says that bringing back extinct animals may be good for us.  He talks about an extinct frog that grew tadpoles in its stomach.  Some women's babies die before they are born, and Smith believes bringing back the frog may be an answer to the problem.  According to him, by studying how the tadpoles grow inside the frog's stomach, we might be able to find new ways to help these women successfully keep their babies.  But I don't think things are as easy as Smith thinks.  We have spent ten years and millions of dollars on this kind of frog, but all we have got are only a few dead frog eggs.  If we can't see a real frog, how can we be sure women will get the help they need?\n\nDr. Solomon Wang from the Animal Saving Office says the study of bringing back extinct animals is \"throwing good money after bad.\"  And he's right.  A lot of hard work has been put into this expensive dream, but we haven't seen anything come out of it.  So should we still keep going down this road?\n\n— Ellen Zimmer, Voices of People", "Back from the Dead: A Book Review"),
    ...attach(exam113Set6, "113-pandemic", "A HISTORY LESSON ON THE PANDEMIC (2020.10.29)\n\nSince the Covid-19 pandemic started, people have begun \"social distancing\"—keeping a safe space between you and anyone you don't live with.  Though it has been a very popular topic this year, social distancing    40    .  In fact, it was widely used in the U.S. in the flu pandemic in 1918.  But how well did it work?  The Americans' experience can tell us whether it really saved lives.\n\nFrom the picture, we can see that ______ started social distancing earlier than the other three cities.  This helped the city keep the number of deaths down.  Besides taking early action, keeping the action long enough was also important in fighting the pandemic.  The picture shows that Portland and Denver did well in the first few weeks.  However, both cities    42    , and the numbers of deaths climbed again.\n\nBut there was one thing Portland did right.  The city used several ways of social distancing at the same time to deal with the pandemic.     43    , sick people were kept away from healthy ones; schools were closed; public activities were not allowed.  All these were useful in keeping people safe.\n\nThe lessons of the 1918 pandemic bring us hope.  While we are still learning to fight Covid-19, social distancing may be the best way to get us through the dark days, at least for now.", "A History Lesson on the Pandemic"),
  ],
};

  // ==================== 114 年 ====================
const exam114 = [
  mc(18, 1, "When I was a teenager, I was very ___. But now, it's easier for me to talk to people.",
    ["happy", "lazy", "popular", "shy"], 3,
    ["空格要選一個能與後句「現在比較容易跟人交談」形成對比的個性形容詞，暗示以前很害羞才導致難以主動跟人說話。", "shy（害羞的）最符合原本不易與人交談的個性，其餘happy（開心）、lazy（懶惰）、popular（受歡迎）皆與句意不符或方向相反。"],
    "個性形容詞題要抓住句子中的因果或對比線索，判斷缺空詞應該具備的正負面方向。",
    "容易誤選popular，因為看起來像是在講人際關係，但句意其實是講『難以主動跟人說話』，這是害羞（shy）而非受歡迎程度的問題。"),
  mc(17, 2, "Lena doesn't want to go ___ with John because she is afraid of water.",
    ["dancing", "hiking", "sailing", "shopping"], 2,
    ["先看後半句的原因子句「afraid of water」（怕水），這是解題關鍵線索。", "四個選項中只有sailing（帆船活動）與『水』直接相關，符合「因為怕水所以不想做」的邏輯。"],
    "先閱讀because引導的原因子句，往往才是找到正確答案的關鍵線索。",
    "hiking（健行）、shopping（逛街）也是常見活動，但都與『怕水』無關，容易因選項熟悉而誤選。"),
  mc(10, 2, "Cindy enjoys ___ her dad read stories to her before bed.",
    ["to listen to", "listening to", "listen to", "listens to"], 1,
    ["enjoy是「只接動名詞」的動詞，後面固定加V-ing，不能接不定詞（to V）或原形動詞。", "選項中只有listening to符合V-ing的形式，其餘to listen to、listen to、listens to皆不符合enjoy的固定用法。"],
    "看到enjoy、finish、mind、avoid等動詞，直接反應「後面只能接動名詞」。",
    "容易誤選to listen to，因為許多動詞（如want, decide, hope）後面接不定詞，但enjoy不屬於這類，是常考陷阱。"),
  mc(17, 1, "Dad is busy cooking in the kitchen. Dinner will be ___ in ten minutes.",
    ["free", "full", "medium", "ready"], 3,
    ["句意是「十分鐘後晚餐將會...」，搭配前面「爸爸正忙著煮飯」的情境，最合理的是晚餐『準備好了』。", "ready（準備好的）完全符合「煮好可以吃」的情境，其餘free（空閒的）、full（滿的/吃飽的）、medium（中等的）都不符合語意。"],
    "字彙題要先掌握句子情境（誰在做什麼），再判斷哪個字最符合當下情境。",
    "full容易讓人聯想到「吃飽」，但full描述的是人吃飽後的狀態，不是食物本身『已完成、可食用』的狀態，此處要選ready。"),
  mc(17, 2, "There are so many new ___ in the office. It'll take me some time to remember who is who.",
    ["faces", "ideas", "rules", "tools"], 0,
    ["後句「remember who is who」（記住誰是誰）暗示句子在講「認識新同事」，所以空格要選跟『人』有關的字。", "faces（面孔）在此代表「新同事、新面孔」，符合「花時間認識新面孔」的語意，其餘ideas、rules、tools皆與『認人』無關。"],
    "字彙題要留意後句是否有能回頭解釋前句空格的線索句。",
    "容易忽略後句「remember who is who」才是解題關鍵，誤選看似合理但與『認人』無關的rules或tools。"),
  mc(18, 2, "I feel like a ___. I was looking for my keys for hours but they have been in my pocket the whole time.",
    ["fool", "ghost", "king", "stranger"], 0,
    ["後句說明「找了好幾個小時的鑰匙，其實它們一直都在自己的口袋裡」，這是典型讓人覺得自己很傻的情境。", "fool（傻瓜）最符合這種因粗心大意而覺得自己愚蠢的心情，其餘ghost（鬼）、king（國王）、stranger（陌生人）都不符合這個情境。"],
    "情緒/自我評價字彙題要抓住後面具體事件透露的心情，再選出對應的字。",
    "容易被字面聯想誤導，但正確的情緒描述是『覺得自己很蠢』，對應fool。"),
  mc(5, 3, "Mr. and Mrs. Wu have three daughters. Two are in high school, and ___ is in elementary school.",
    ["each", "the other", "the one", "the next"], 1,
    ["句意是「三個女兒中，兩個唸高中，剩下的一個唸小學」，重點在『三個之中，已知兩個，剩下確定的最後一個』。", "the other表示『剩下那個確定的、僅存的一個』，最符合「三選二剩一」的情境；each（每一個）語意不合，the one和the next則不是正確的代名詞用法。"],
    "代名詞題要先算清楚『總數』與『已提到的數量』，剩下最後一個固定用the other，若總數不確定或還有更多剩餘才用another/the others。",
    "容易與another混淆：another指『從不確定的其餘中再一個』，但此處三個女兒中已經確定只剩一個，必須用the other。"),
  mc(19, 2, "It is hard for trees to ___ along this beach because of the strong winds from the sea.",
    ["blow", "build", "follow", "grow"], 3,
    ["句意是「這片海灘上因為海風強勁，樹很難...」，主詞是樹（trees），要選一個描述樹木生長狀態的動詞。", "grow（生長）是唯一能描述樹木在惡劣環境下『生長』與否的動詞，其餘blow（吹）、build（建造）、follow（跟隨）皆不符合『樹』這個主詞的邏輯搭配。"],
    "字彙題要先確認主詞是誰，動詞必須是主詞合理能做的動作。",
    "blow容易讓人聯想到句中的『強風』（winds）而誤選，但blow的主詞應該是風本身，不是樹木。"),
  mc(1, 2, "Christmas ___ and I want to visit my aunt abroad. Do you have any plans yet?",
    ["came", "comes", "is coming", "was coming"], 2,
    ["句子談論即將到來的耶誕節計畫，且Christmas是逐漸接近的節慶，符合現在進行式表達『即將發生的近未來』的用法。", "came、was coming都是過去式，與句意「耶誕節即將到來」矛盾；comes（現在簡單式）通常描述習慣性、每年固定發生的事，語感上不如is coming能強調『即將接近、迫在眉睫』。"],
    "現在進行式除了描述『當下正在做』的動作，也常用來表達『已排定或即將發生的近未來』，尤其是逐漸接近的節日或事件。",
    "容易誤選comes，因為Christmas每年固定發生像是習慣性事實，但這裡強調的是『即將到來』的緊迫感，須用現在進行式is coming。"),
  mc(9, 3, "Jo won't be happy if you're late for his party tonight, so ___ sure that you arrive on time.",
    ["make", "makes", "to make", "is making"], 0,
    ["so在此連接兩個句子：「Jo won't be happy if you're late」是原因，逗號後面則是依此原因而發出的『指令/建議』，是一個省略主詞you的祈使句（命令句）。", "祈使句的動詞固定用原形，所以答案是make（make sure that...確保...）；makes是第三人稱單數變化、to make是不定詞、is making是現在進行式，皆不符合祈使句『原形動詞開頭』的文法規則。"],
    "看到so連接的後半句沒有主詞、直接以動詞開頭時，通常是省略you的祈使句，動詞要用原形。",
    "容易誤選to make，因為to make sure that...看起來也很常見，但這裡整句是獨立的祈使句，不是不定詞片語，必須用原形動詞make。"),
  mc(17, 1, "You may have a long drive because of the terrible ___. There are usually a lot of cars and buses during this time.",
    ["experience", "machine", "service", "traffic"], 3,
    ["後句補充說明「這段時間通常有很多車子和公車」，可知空格要選一個和『很多車』有關、會造成『長時間塞在路上』的名詞。", "traffic（交通、車流）正確對應「terrible traffic」（糟糕的塞車）這個常見說法；experience（經驗）、machine（機器）、service（服務）都與『很多車造成塞車』的情境無關。"],
    "terrible traffic（糟糕的塞車）是描述交通壅塞的常見固定搭配，可以整組記憶。",
    "容易被句首『long drive』（開很久的車）干擾而選錯方向，但真正造成『開很久』的原因是後面補充說明的『車多』，對應的字是traffic。"),
  mc(6, 3, "In the future, there will ___ be greater basketball players than Stephen Curry, but now we believe he is the best!",
    ["again", "already", "never", "perhaps"], 3,
    ["句子前半段在『猜測未來』（in the future...），後半段用but轉折強調『現在』大家相信Curry是最強的，可知前半句的語氣應該是『不確定的推測』，而非肯定或否定的斷言。", "perhaps（也許）正確表達這種對未來『不確定』的推測語氣，與後面「但現在我們相信他是最強的」的轉折語意搭配得宜；never（絕不）語氣太過肯定、already（已經）和again（再一次）則不符合『未來』式的推測情境。"],
    "含有but轉折的句子，要注意轉折前後語氣通常相反或有落差，可藉此判斷空格該選哪種語氣強度的副詞。",
    "容易誤選never，因為這樣讀起來像是在稱讚Curry，但這與後半句「但現在我們相信」的『現在』限定語氣矛盾。"),
  mc(5, 2, "I guess the rainwater has come in from the kitchen. See? ___ of the windows are closed except the one in the kitchen.",
    ["All", "Both", "Most", "Some"], 0,
    ["空格後面接著「except the one in the kitchen」（除了廚房那扇之外），這暗示句子原本要表達的是『全部』的窗戶都關著，只有一個例外。", "All（全部）加上except（除了...之外）的句型，正確表達「所有的...除了一個」的邏輯；Both（僅限兩個）、Most（大部分，允許不只一個例外）、Some（一些）都不符合這個邏輯。"],
    "看到except（除了）出現在句尾，通常代表前面的量詞要選『全部、每一個』（all/every），才能凸顯『唯獨一個例外』的對比語氣。",
    "容易誤選Most，因為『大部分關著』聽起來也合理，但except the one（除了那一個）明確限定『只有一個例外』，這與all才是邏輯一致的搭配。"),
  mc(9, 2, "___ machines have been used to pick fruits for a long time, they were not used on strawberry farms until several years ago.",
    ["Although", "Because", "Before", "If"], 0,
    ["前半句「機器很久以前就已經被用來採收水果」與後半句「直到幾年前才被用在草莓農場」，兩句之間存在語意上的『轉折、對比』關係。", "Although（雖然）正確連接這兩個彼此對比的子句，表達『雖然...但是...』的讓步語氣；Because（因果不合）、Before（語意不通）、If（非假設情境）都不符合這裡的轉折語意。"],
    "看到前後兩個子句的內容互相對比或出乎意料，通常是Although引導的讓步子句。",
    "容易誤選Because，因為兩句話看起來像有因果，但仔細讀語意會發現這其實是『對比』而非『因果』關係，應選Although。"),
  mc(17, 3, "There are online videos that teach you exercises you can do at home. They'll ___ you a trip to the gym, and some money too.",
    ["cost", "give", "keep", "save"], 3,
    ["句子在講「在家看線上運動影片」的好處，能讓你『不用』特地跑一趟健身房，也『不用』多花錢。", "save在這裡的意思是『省下、免去』，save you a trip（幫你省下一趟奔波）與save you money（幫你省錢）都是常見的固定用法；cost（花費，方向相反）、give（給予）、keep（保持）都不符合『省下』的語意。"],
    "save + 人 + 名詞（如a trip、money、time）是英文中表示『幫某人省下...』的常見句型，可以整組記憶。",
    "容易誤選cost，因為cost you a trip字面上也通順，但cost表達的是『花費、代價』，方向與句意『省下麻煩』恰好相反。"),
  mc(12, 3, "Jane's parents are always happy to see their grandchildren, but mine ___ less so when I visit them with my kids.",
    ["is", "are", "do", "does"], 1,
    ["前半句用的是be動詞are（are always happy），my parents（mine代替的對象）同樣是複數，若要在後半句省略重複的happy、只用助動詞代替，必須沿用同一種be動詞。", "mine are less so（我的父母比較不那麼開心）正確沿用前半句的be動詞are，並用so代替happy，避免重複；is單複數不合，do/does則是用於一般動詞句的助動詞，這裡前半句本來就是be動詞句，不能改用do/does。"],
    "句子中若前後兩部分描述同一種狀態，且後半句省略重複的形容詞時，要沿用前半句同一種be動詞或助動詞，並依代名詞的單複數調整。",
    "容易誤選does，因為does看起來像是常見的萬用助動詞，但這句話原本的動詞是be動詞（are happy），不是一般動詞，所以只能沿用are。"),
  mc(9, 3, "Before she ___ about it, you should tell Daphne you broke her favorite cup.",
    ["asks", "asked", "was asking", "will ask"], 0,
    ["before引導的是描述未來事件先後順序的時間子句，英文文法規定：在if/when/before/after等時間或條件子句中，即使描述的是未來的事，也要用現在式代替未來式。", "asks（現在簡單式）正確用於before這個時間子句中代替未來式；will ask（未來式）不能用在before子句裡，asked（過去式）和was asking（過去進行式）則與句子描述『尚未發生、要提早告知』的未來情境不符。"],
    "在before、after、when、if、until等表示時間或條件的子句裡，就算描述的是未來要發生的事，也必須用現在式，不能用未來式will。",
    "容易誤選will ask，因為整句話明顯是在講『未來』會發生的事，但文法規則規定『在時間子句裡』要用現在式代替未來式，這是很多人容易忽略的陷阱規則。"),
  mc(9, 3, "It was very windy this morning. Some of the shirts on the balcony were blown away ___ in the pond.",
    ["fell", "and fell", "fallen", "and fallen"], 1,
    ["句子描述兩個接續發生的動作：襯衫被風吹走（were blown away），接著掉進池塘（fell in the pond），這兩個動作需要一個對等連接詞（and）把它們連接起來，否則句子會缺少連接詞而不通順。", "and fell正確用and連接兩個對等的動作，且fell（過去簡單式）與前面were blown away的時態一致；單獨的fell缺少連接詞，fallen與and fallen則使用過去分詞形式，但這裡沒有助動詞have/had可以搭配過去分詞，文法上不通。"],
    "描述『一個動作接著發生另一個動作』時，要留意兩個動詞之間是否需要and等連接詞銜接，並確認兩個動詞的時態要一致。",
    "容易誤選fallen，因為fall的過去分詞是fallen，容易與fell的拼寫搞混，但fallen必須搭配have/had等助動詞才能使用，這裡沒有助動詞，只能用過去簡單式fell。"),
];

const examRex2021 = [
  mc(15, 1, "What happened to Rex?",
    ["He got lost.", "He got hurt.", "He bit people.", "He ate too much."], 1,
    ["文中提到「Rex is in the hospital. He was hit by a car last night.」，明確說明Rex是被車撞到住院。", "He got hurt（他受傷了）正確對應「被車撞到」這個事實，其餘選項（走失、咬人、吃太多）文中皆未提及。"],
    "細節題要直接回到文中找出明確敘述的句子作為答案依據，不要自行延伸。",
    "容易誤選He got lost，因為敘述者一開始『沒看到Rex』會讓人聯想走失，但文中明確說明是被車撞傷住院，不是走失。"),
  mc(15, 2, "How did the writer help Rex?",
    ["By calling the police.", "By making him exercise.", "By taking him to see a doctor.", "By looking for a new home for him."], 1,
    ["文中提到「we decided to take him for a walk every evening. Because of the exercise, Rex became healthier and stronger.」，說明作者一行人靠著每天帶Rex散步（運動）幫助牠恢復健康。", "By making him exercise（讓牠運動）正確對應這段敘述，其餘選項（報警、看醫生、找新家）文中都沒有提到是「作者們」做的事。"],
    "找『某人做了什麼』的細節題，要鎖定主詞是誰做的動作，避免選到文中其他角色的行為。",
    "容易誤選By taking him to see a doctor，因為前文提到Rex住院，但『看醫生』是醫院的處置，真正幫助Rex康復變強壯的是後續『每天散步運動』。"),
];
attach(examRex2021, "114-rex", "Rex is a dog that lives at the bakery next to our school. He is cute and friendly. Every morning, he stands in front of the school to welcome everybody. We all see Rex as one of us. But one Monday morning, I was surprised that Rex was not there to say hello to us. \"Rex is in the hospital. He was hit by a car last night,\" my classmate told me.\n\nWe went to see Rex in the hospital that day after school. Two weeks later, Rex was much better, and we decided to take him for a walk every evening. Because of the exercise, Rex became healthier and stronger. Soon he could happily run and jump again. He is now as handsome and strong as before!", "Rex受傷康復記");

const examStealThunder23 = [
  mc(18, 3, "Which is most likely an example of stealing someone's thunder?",
    ["Dennis never changes his mind except when his wife tells him to.", "Melisa tells Tom she'll go to the party but tells her mom she'll stay home.", "Jeff tells everyone he'll move abroad when Ivy is still telling them about her baby.", "Alisa says she doesn't care what we have for lunch but also doesn't like the restaurant we chose."], 2,
    ["「steal someone's thunder」是英文常見的慣用語，字面意思是『偷走某人的雷聲』，引申為『搶走原本該屬於別人的鋒頭或關注』，通常發生在有人正要宣布好消息，卻被另一人搶先或蓋過的情境。", "選項(C)描述Ivy還在跟大家分享她懷孕的消息時，Jeff卻搶著宣布自己要搬到國外的消息，正是『搶走別人原本該有的關注焦點』，符合這個慣用語的定義；其餘選項分別在講『順從』、『說謊』、『抱怨矛盾』，都與『搶鋒頭』無關。"],
    "遇到不熟悉的英文慣用語，可以先把字面意思與題目提供的其他線索（例如選項情境）連結，找出最符合『搶走他人風頭』核心概念的選項。",
    "容易被(A)(B)(D)中同樣描述『人際互動中的小狀況』的選項混淆，但這個慣用語的核心是『在他人宣布消息時搶先或蓋過對方』，只有(C)真正符合這個核心情境。"),
];

const examWhiteLake24 = [
  mc(15, 2, "What can you do with a White Lake City Card?",
    ["Save 20% on children's train tickets.", "Visit any public museum in the city for free.", "Take a train to places out of the three zones.", "Move around the city by metro as much as you want."], 3,
    ["文中列出三項卡片權益：可不限次數搭乘地鐵、公車或火車遊覽城市；未滿12歲兒童一位可免費同行；公立博物館門票可享8折（save 20%，而非免費或折扣兒童車票）。", "選項(D)『可以無限次搭乘地鐵遊覽城市』正對應第一項權益；(A)誤把折扣對象說成兒童車票、(B)誤把折扣說成免費、(C)則與文末『這些卡片僅限三個分區內的旅程使用』的規定相反，皆與原文不符。"],
    "官方文宣類文章的細節題，通常可以逐條比對條列式規則，找出唯一與原文完全吻合的選項。",
    "最容易的陷阱是把『8折優惠』看成『免費』(B)，或誤以為優惠對象是兒童車票而非博物館門票(A)，作答時要留意折扣的『對象』與『幅度』是否一致。"),
];
attach(examWhiteLake24, "114-whitelake", "Buy a White Lake City Card When You're in the City\n\nWith any of the Cards, you can\n- visit the city by metro, bus, or train as many times as you want.*\n- take one child under 12 with you for free.\n- save 20% on tickets to public museums.\n\nThe 1-day, 3-day, and 5-day Cards are for trips from Monday to Friday, and the Weekend Card is for trips on weekends and holidays.\n\nCheck the map and buy the right Card for the zones you'll be entering.\n\n* The Cards are only for trips inside the three zones.", "White Lake City Card使用說明");

const examRollingAcres2628 = [
  mc(15, 1, "What is Rolling Acres?",
    ["A zoo.", "A campground.", "A vacation farm.", "A family restaurant."], 2,
    ["文中提到Rolling Acres「以前只是一座養羊的農場，現在有果樹、菜園與許多動物，已成為家庭度假的熱門去處」，並且是由Libby一家人經營的家族事業。", "A vacation farm（度假農場）正確對應這個描述，其餘動物園、露營地、家庭餐廳文中皆未提及。"],
    "『這是什麼』的題型要直接找文中對該地點性質的具體描述句，通常會在第一段清楚交代。",
    "容易被『可以餵動物、撿雞蛋』等描述誤導成zoo（動物園），但文中明確定位為popular place for families to go on vacation（度假去處）。"),
  mc(15, 2, "What do we learn from the first paragraph?",
    ["What Libby does at Rolling Acres.", "What visitors think of Rolling Acres.", "Why Libby's grandparents started Rolling Acres.", "What the Larson family's plans are for Rolling Acres."], 0,
    ["第一段主要描述Libby每天清晨起床後做的事：拖地、拿信件報紙、準備迎接訪客、教小朋友餵小羊等，全部都是Libby在農場裡的日常工作內容。", "(A) What Libby does at Rolling Acres 正確概括第一段的內容重點；訪客的想法、祖父母創立農場的原因、Larson家族的未來計畫都沒有在第一段被提及。"],
    "段落主旨題要先看該段落主要在敘述『誰』做了『什麼事』，答案通常直接對應這個敘述焦點。",
    "容易誤選與『農場』整體相關但並非第一段實際內容的選項，例如祖父母創立農場的原因，那其實只在第一段被簡短帶過一句。"),
  mc(20, 3, "What does making sacrifices mean?",
    ["Learning to make money and use it wisely.", "Getting to know different sides of your family.", "Making excuses for failing to do something difficult.", "Giving up something important to do something else."], 3,
    ["文中Libby提到她的犧牲：「我很想睡到中午，或像其他小孩一樣去夏令營，但朋友已經不再邀我出去玩，因為我暑假總是很忙」，這些都是『放棄自己想做的事，去做農場工作』的例子。", "(D) Giving up something important to do something else（放棄重要的事去做另一件事）正確對應這個語意，其餘選項與『理財』『認識家人』『找藉口』無關，都偏離了making sacrifices的原意。"],
    "詞語猜義題要回到該詞語出現的上下文，找出緊接在後面具體說明或舉例的句子，往往就是最直接的定義線索。",
    "容易被(B)『認識家人不同的一面』混淆，因為文中確實提到working with your family... you feel closer，但那是Libby對犧牲『正面看待』的補充說明，並不是making sacrifices本身的定義。"),
];
attach(examRollingAcres2628, "114-rolling-acres", "At 5 o'clock every morning, while most people are sleeping, 16-year-old Libby Larson is already up. She mops the floor, gets the mail and the newspapers, and gets ready for visitors to Rolling Acres. Libby's grandparents started Rolling Acres in 1970, and since then all of the Larson family have been working there. Rolling Acres used to be just a sheep farm, but now, with its fruit trees, vegetable gardens, and many other kinds of animals, it has become a popular place for families to go on vacation. Visitors can pick fruits, collect eggs, and feed the animals. It is one of Libby's jobs to show kids how to feed the baby sheep.\n\nFor her work, Libby is paid $10 an hour. This summer, she expects to make about $1,200 and plans to buy a cell phone. Her friends think it's great to make that much money in a summer. However, for Libby, working at a family business also means making sacrifices. \"I'd love to sleep until noon or go to summer camp like other kids. My friends stopped inviting me on trips because I'm always busy in the summer.\" However, Libby also said, \"But it's better to see both sides. Working with your family is great. You feel closer to each other.\"", "Rolling Acres：Libby的家庭農場生活");

const examEasterIsland2931 = [
  mc(15, 2, "What do the comics tell us?",
    ["Enjoy life while we can.", "Follow the old ways of life.", "Save our planet before it's too late.", "Treat others the way we want to be treated."], 2,
    ["漫畫描述復活節島的居民因過度砍伐樹木，導致土地乾旱、缺水缺糧，最終發生爭鬥、走向滅亡，結尾更直接呼籲「別讓地球變成另一個復活節島」。", "(C) Save our planet before it's too late（在為時已晚之前拯救我們的星球）正確對應這個警世寓意，其餘選項『及時行樂』『遵循舊有生活方式』『己所不欲勿施於人』都不是這篇漫畫真正要傳達的訊息。"],
    "找漫畫或寓言故事的主旨，要特別注意結尾的總結句或呼籲句，通常會直接點出作者想傳達的核心訊息。",
    "容易被『順應舊有生活方式』(B)混淆，但故事真正的用意是拿復活節島當作『警惕現在』的例子，而不是提倡回到舊生活方式。"),
  mc(16, 3, "What can we learn about the people in the comics?",
    ["They made fire before starting a fight.", "They fought for land and plants all the time.", "They prayed to the statues beside a large fire.", "They used statues to show how strong they were."], 3,
    ["文中提到「The statues were moved to fighting grounds to show their power.」，說明後期居民把雕像搬到戰場上，用來展示自己的力量。", "(D) They used statues to show how strong they were 正確對應這句描述；其餘選項（開戰前先生火、一直在為土地與植物爭鬥、在雕像旁祭拜）文中都沒有明確依據。"],
    "『我們可以得知什麼』這類推論題，仍要優先在文中找出直接對應的具體句子，而不是憑空猜測。",
    "容易誤選(B)『他們一直都在為土地與植物爭鬥』，因為文中描述這是樹木快消失『之後』才出現的情況，並非『一直以來』如此，屬於過度延伸的錯誤選項。"),
  mc(16, 3, "What does did it in Picture 7 mean?",
    ["Fall to the ground.", "Cut down the last trees.", "Move the statues to fighting grounds.", "Understand how important trees were."], 1,
    ["文中緊接在did it之前的句子是「Those who cut down the last trees surely understood how important trees were to them—but still, they did it.」，可知did it指代的就是前面提到的動作。", "did it所指代的就是句子主詞「Those who cut down the last trees」所做的動作，也就是(B) Cut down the last trees（砍下最後的樹）；其餘選項是同一句話裡的其他訊息，並不是did it實際指涉的動作。"],
    "代名詞或代動詞（do it/did it）指涉題，要往前一句找到與它文法一致、語意通順的動作或事件，代入後檢查句子是否合理。",
    "容易誤選(D)『理解樹木的重要性』，因為did it指的是『實際做的動作』（砍樹），而不是『心裡明白的事』（理解重要性），兩者在句中扮演不同角色。"),
];
attach(examEasterIsland2931, "114-easter-island", "Around the year 400, people came to Easter Island. They used trees to make fire and build houses. Because of the trees, people had a great life on the island.\n\nIn their free time, they loved making statues with big rocks. With the trees they cut down, they could move the statues around easily. (\"So many trees here!\")\n\nTrees were needed and used in every part of their life. Years passed, and there were fewer and fewer trees on Easter Island. Without enough trees to keep water under the ground, the land became dry, and plants didn't grow. (\"I'm thirsty.\" \"And I'm hungry.\")\n\nPeople began to fight for water and food. The statues were moved to fighting grounds to show their power. The last trees were probably cut down at this time.\n\nThose who cut down the last trees surely understood how important trees were to them—but still, they did it. When the last trees fell to the ground, people on the island fell, too.\n\nLet's not make Earth, our only home, another Easter Island.", "復活節島的興衰漫畫");

const examIkea3234 = [
  mc(15, 2, "What did Ariely try to find out in the origami study?",
    ["If he could stop the IKEA effect.", "Why people love making origami.", "Why IKEA furniture is so famous.", "If anyone shared his IKEA experience."], 3,
    ["文中提到「Ariely wanted to know if anyone shared his feelings, so he did a fun origami study.」，明確說明他做這個摺紙實驗的目的，是想知道是否有其他人也有跟他一樣『組裝IKEA家具後特別珍惜』的感受。", "(D) If anyone shared his IKEA experience 正確對應這個目的；其餘選項（想阻止IKEA效應、想知道人們為何愛摺紙、想知道IKEA家具為何有名）都不是文中提到的研究動機。"],
    "找『某人做這個研究/實驗的目的』時，通常緊接在該研究被提到之前，會有一句話直接說明動機，抓住這句即可。",
    "容易誤選(B)『想知道人們為什麼愛摺紙』，因為摺紙是實驗的『方法』，不是研究真正想探討的『目的』，此題要分清楚方法與目的的差異。"),
  mc(15, 3, "Which is true about the origami study?",
    ["Buyers would spend less on builders' origami than builders would.", "Builders and buyers needed to decide a price on the origami they made.", "Builders knew others would not pay as much for the origami as they would.", "Buyers would spend more on builders' origami after knowing how they were made."], 0,
    ["文中提到「buyers would pay only five cents for builders' origami, builders would spend 25 cents」，可知買家願意付的錢（5分錢）明顯比做的人自己願意付的錢（25分錢）少。", "(A) Buyers would spend less on builders' origami than builders would 正確對應這個數字對比；(C)恰好與文意相反（builders其實『高估』了自己作品的價值），(B)(D)文中都沒有提及。"],
    "含有具體數字對比的細節題，最快的方法是直接把選項的因果或大小關係，拿去對照原文中的數字。",
    "容易誤選(C)，因為文中其實說builders『相信』別人也會覺得自己的作品值那個價錢（過度自信），而不是『知道』別人不會付那麼多錢，方向恰好相反。"),
  mc(16, 4, "Jerry just can't get his daughter Mia to eat more vegetables at dinner. Every time he tries to do so, there is always a lot of shouting and crying. If Jerry wants to have Mia eat more vegetables by using the IKEA effect, what should he do?",
    ["Tell Mia that he cooks the vegetables just for her.", "Ask Mia to help him cook vegetables for her meal.", "Give Mia her favorite candy after she eats vegetables.", "Ask Mia what vegetables she likes and cook them for her."], 1,
    ["IKEA效應的核心概念是「人們會因為親手參與製作的過程，而更珍惜、更喜歡那個成果」，對應到Mia的情境，就是要讓Mia『親自參與製作』蔬菜料理的過程。", "(B) Ask Mia to help him cook vegetables for her meal 正確運用了『親手參與＝更珍惜成果』的IKEA效應邏輯；(A)只是討好她、(C)是用糖果獎勵、(D)只是照她喜好調整菜色，都沒有讓Mia『親自動手參與製作』。"],
    "應用題要先掌握前面文章介紹的核心概念，再檢查選項是否真正運用到這個概念的邏輯，而非只是『看起來合理的教養方式』。",
    "容易誤選(C)用糖果獎勵，因為這是外在獎勵誘因，並不是IKEA效應強調的『親手參與、產生擁有感』的機制，屬於偏題陷阱。"),
];
attach(examIkea3234, "114-ikea", "Many years ago, Dan Ariely bought a cabinet from IKEA. IKEA is a famous furniture store that sells boxes of furniture parts. People who buy them have to put all the parts together themselves. It took Ariely hours to build his cabinet. Ariely didn't really enjoy himself when he was trying to put all the parts together. However, after he finished, he felt quite good about himself and his cabinet. Later, he found that he loved his cabinet more than any of his other furniture.\n\nAriely wanted to know if anyone shared his feelings, so he did a fun origami study. He invited two groups of people to join his study. He called one group \"builders\" and the other group \"buyers.\" Builders were told to make origami, like paper frogs or paper birds. When they finished, they were asked how much they would spend on their works. Ariely then showed the origami to buyers and asked them how much they would pay for them. The two groups gave very different answers. Though buyers would pay only five cents for builders' origami, builders would spend 25 cents! Interestingly, builders believed others would think their works were good enough to cost that much money!\n\nAriely's study showed that he was not alone in his IKEA experience — we just love things more, sometimes blindly, when we make them ourselves. Ariely called it \"the IKEA effect.\"", "IKEA效應：親手做的東西更珍貴");

const examElectricity3537 = [
  mc(15, 3, "What is the reading mainly about?",
    ["The tips on using a picture to tell a story.", "The change that electricity brought to people's lives.", "The history behind the picture of a UK electricity worker.", "The story of a famous UK electricity worker from the 1970s."], 2,
    ["全文以一張1970年代英國電力工人的照片為引子，接著詳細說明1972年與隔年電力工人兩次要求加薪、政府的因應措施，以及對人民生活造成的影響，最後回扣到這張照片所代表的意義。", "(C) The history behind the picture of a UK electricity worker 正確概括全文『由一張照片出發，說明背後歷史事件』的寫作結構；(D)誤把重點放在『某位知名電力工人』身上，但文中談的是電力工人『集體』的抗爭事件。"],
    "主旨題要留意文章開頭與結尾是否『首尾呼應』回到同一個主題，這通常就是全文真正的主旨核心。",
    "容易誤選(B)『電力帶給人們生活的改變』，因為文中描述的停電、缺熱等生活影響只是抗爭事件『造成的後果』，不是整篇文章真正的主題。"),
  mc(16, 4, "In the UK in the 1970s, what did people most likely think of the UK electricity workers?",
    ["They were not brave enough to fix their problems.", "They worked like robots and never learned to change.", "They were asking too much and did not know when to stop.", "They did not care whether their job might hurt people's health."], 2,
    ["文中描述電力工人兩次要求加薪，第二次甚至用縮短工時、以離職要脅的方式向政府施壓，導致政府反制、人民生活大受影響，人民為此付出好幾個月的代價。", "從這些負面影響可以合理推論，當時的人民很可能認為電力工人(C) were asking too much and did not know when to stop，這與文中「people were paying the price」呼應；其餘選項的『不夠勇敢』『像機器人』『不在乎他人健康』文中都沒有明確線索支持。"],
    "推論人們對某件事的『觀感』時，要從文中描述的具體後果反推大眾可能產生的情緒或評價。",
    "容易誤選(D)，因為文中並沒有提到電力工人『不在乎』健康風險這件事，這是讀者自行腦補的推論，缺乏文字根據。"),
  mc(16, 4, "Why does the writer put the \" \" mark around the word dark in the last sentence?",
    ["To say that the \"dark\" time was actually not dark.", "To tell people that the word was said by the government.", "To mean both the days without lights and the difficult lives people lived.", "To show that the government and the electricity workers both lost their fights."], 2,
    ["文中描述這段時期人民因為政府限電規定，家裡沒有足夠暖氣、醫院得靠蠟燭照明，生活陷入實際上『黑暗』（沒有燈光）與比喻上『黑暗』（艱難、痛苦）的雙重處境。", "dark加上引號(C) To mean both the days without lights and the difficult lives people lived 正確點出這個雙關語意；其餘選項沒有掌握到這個雙重意涵。"],
    "作者刻意用引號標示某個字時，常常是在暗示這個字有『雙關』或『反諷』的言外之意，要回頭看上下文找出這個字的字面意義與延伸意義各是什麼。",
    "容易誤選(A)『表示這段時期其實並不黑暗』，但文中種種負面描述明確顯示這段時期確實艱難，並非反諷用法，而是雙關用法。"),
];
attach(examElectricity3537, "114-electricity", "In the picture is a UK electricity worker in the 1970s. Pictures like this appeared in many newspapers at the time. In 1972, electricity workers in the UK asked to be paid more, and they decided to stop working until their wish was answered. The government worried that there wouldn't be enough electricity for the country if these workers didn't go to work, so it agreed to give them the pay rise. However, the story didn't end there.\n\nA year later, the electricity workers asked for another pay rise. To get what they wanted, they worked shorter hours and acted like they would walk away from their job anytime. But this time, the government decided to fight. To save electricity, it made new rules for people to follow. For example, each family could turn on the heat in only one room; TV stations had to stop their shows at 10:30 p.m.; businesses could open only three days a week.\n\nPeople's lives were greatly changed. Without enough heat to keep the house warm, people covered themselves in blankets all the time. Hospitals had to use candles because they couldn't keep all the lights on. Factories couldn't keep their machines working. Many people lost their jobs. For months, people were paying the price while the electricity workers were fighting for their wish. In the end, the government agreed to the second pay rise. This picture shows what many people thought of the electricity workers during the \"dark\" time.", "1970年代英國電力工人抗爭");

const examCameron3843 = [
  mc(3, 2, "根據文章語意，空格(1)應填入下列何者？",
    ["starts", "started", "has started", "will start"], 1,
    ["空格後方明確指出時間點「in his first year of junior high school」（在他國一那年），這是一個確切的過去時間點。", "現在完成式（has started）不能和明確的過去時間點連用，必須改用過去簡單式，因此答案為started，而不是starts（現在簡單式）或will start（未來式，與『那年』這個過去語境矛盾）。"],
    "看到句子裡出現明確的過去時間點，現在完成式幾乎可以直接刪除。",
    "容易誤選has started，因為句意描述『他開始做這件事』聽起來像是持續到現在的習慣，但『開始』這個動作本身發生在明確的過去時間點，必須用過去簡單式started。"),
  mc(16, 3, "根據上下文，空格(2)應填入下列何者？",
    ["he got quite scared of two things", "he still couldn't understand two things", "he couldn't stop thinking about two things", "he did two things that would change his life"], 2,
    ["空格後面緊接著兩句話：「How brave a woman is to have a baby! Thank God I'll never have to do that!」，這正是Cameron下課後『腦中反覆想著』的兩件事：媽媽有多勇敢、慶幸自己不用生小孩。", "(C) he couldn't stop thinking about two things（他忍不住一直想著兩件事）正好呼應後面具體說出的『兩件事』內容；其餘選項都與後文描述的內容不符。"],
    "克漏字選句子的題目，要先看空格前後的句子，確認選項內容能否和上下文語意銜接、互相呼應。",
    "容易誤選(D)，因為後文確實提到他的人生因此改變，但空格後面立刻接的兩句話是他『當下想的事情』，而不是他『做的事』。"),
  mc(16, 3, "根據上下文，空格(3)應填入下列何者？",
    ["should be spent helping his mom", "should be a time of welcoming a new start", "should not be about him, but about his mom", "should not be celebrated for just one day, but for nine months"], 2,
    ["空格前一句是「He decided that his birthday ___」，後文接著解釋原因：在媽媽肚子裡的九個月，自己只是吃睡，辛苦的都是媽媽，所以為什麼要因為『什麼都沒做』而收到生日禮物？如果誰該收到禮物，應該是媽媽。", "(C) should not be about him, but about his mom 正確對應這整段的推論邏輯；其餘選項都沒有掌握到『生日的主角應該換成媽媽』這個核心想法。"],
    "克漏字題目要善用空格後方整段的因果說明，通常後面一長串解釋，正是用來支持空格內容的具體理由。",
    "容易誤選(D)，因為(D)的重點是『慶祝天數該從一天改成九個月』，而Cameron真正的想法是『生日的焦點該從自己換成媽媽』，兩者方向不同。"),
  mc(16, 3, "根據上下文，空格(4)應填入下列何者？",
    ["first", "last", "only", "other"], 0,
    ["文章最後一段提到「Now, on his birthday every year, Cameron makes a gift for his mother」，可知烤餅乾只是他『第一次』送媽媽生日禮物，之後每年都持續這麼做。", "(A) first（第一個）正確對應『這是他開始送禮傳統的第一份禮物』；(B)『最後一個』、(C)『唯一一個』都與後文『每年持續送禮』的敘述矛盾。"],
    "克漏字文章常常需要讀完全文（尤其是後段）才能回頭確認前段空格的正確答案，遇到不確定的空格可以先跳過、讀完再回來判斷。",
    "容易誤選(C)『唯一的』，但後文明確說『之後每年都持續送禮』，所以這只是『第一次』而不是『唯一一次』。"),
  mc(18, 2, "根據上下文，空格(5)應填入下列何者？",
    ["made his head hurt", "made his heart sing", "made him change his mind", "made him give up baking"], 1,
    ["空格前一句是媽媽說這是她收過最棒的東西（雖然餅乾其實不好吃），空格後一句則說「這比收到禮物好太多了」，可知Cameron聽到媽媽這句話後心情非常感動、幸福。", "(B) made his heart sing 是英文常見的慣用說法，引申為『讓他感到非常開心、感動』，正符合這裡的情境；其餘選項都與『聽到媽媽稱讚後感到幸福』的正面情緒不符。"],
    "遇到英文慣用語，可以先觀察上下文的情緒是正面還是負面，再判斷慣用語的合理意涵。",
    "容易被字面『心臟唱歌』的陌生感嚇到而誤選其他選項，但只要掌握上下文明顯是『正面、感動』的情緒，就能推知這個慣用語必定表達正面的感受。"),
  mc(2, 3, "根據上下文，空格(6)應填入下列何者？",
    ["is going to give", "gives", "has given", "gave"], 0,
    ["文章接著說明「A few months ago, he learned to make dresses... Now the dress is finished and hanging behind Cameron's bedroom door.」，可知洋裝已經做好，但『還掛在房間門後』，代表送禮這件事是『已經準備好、即將發生』的計畫，尚未真正送出。", "be going to用於『事先計畫好、且已有明顯跡象』的未來動作，因此(A) is going to give 最符合語境；gives語意上不合，has given與gave都表示『已經送出』，與『洋裝還掛在門後』的事實矛盾。"],
    "be going to常用於『事先已經計畫好、且已經有具體跡象』的未來動作，此類題目要留意文中是否有『已經準備好但尚未發生』的線索句。",
    "容易誤選gave（過去式），因為前面描述的動作（學做衣服、做好洋裝）都已完成，但『送給媽媽』這個動作本身，從『洋裝還掛在門後』可知尚未發生，不能用過去式。"),
];
attach(examCameron3843, "114-cameron", "Most kids want gifts from their parents on their birthdays, but Cameron doesn't. On his birthday, he gives his mom a gift. He ___(1)___ doing this in his first year of junior high school. That year, during one class, he watched a video about how a baby is pushed from its mother's body. After class, ___(2)___. How brave a woman is to have a baby! Thank God I'll never have to do that!\n\nWhen Cameron came home that day, he held his mom in his arms for a long time. He decided that his birthday ___(3)___. During those nine months inside his mom, he just ate and slept while his mom was doing all the hard work. So why should he get a birthday gift for doing nothing? If anyone should get a gift on his birthday, it should be his mom.\n\nThe ___(4)___ \"birthday gift\" Cameron prepared was a bag of cookies he baked. The cookies tasted so bad, but his mom said they were the best thing she ever got. Hearing that ___(5)___. It was so much better than getting a gift. Now, on his birthday every year, Cameron makes a gift for his mother to thank her for giving him life.\n\nThis year, Cameron ___(6)___ his mom a nice dress. A few months ago, he learned to make dresses at school and decided to make one for his mom. Now the dress is finished and hanging behind Cameron's bedroom door. He believes the gift will tell his mother how much he loves her.", "Cameron的生日禮物：一則以感恩取代收禮的故事");

window.__ENG_TRANSCRIBED_114 = {
  minutes: 60,
  omittedNote: "114年英語（閱讀）題本共43題，其中第1題（依圖片作答「Look at the picture...」，無文字可轉錄）、第22題（原始題本第22-23題組所依據的Mark、Linda對話內容於文字擷取時缺漏，僅存圖片或版面呈現）、第25題（需依官方地圖判斷各地點所屬收費分區，屬圖像資訊，文字題本未提供分區對應）題因純為圖片或版面內容，無法轉錄為等義文字，其餘40題皆已逐題轉錄並核對官方答案。",
  questions: [...exam114, ...examRex2021, ...examStealThunder23, ...examWhiteLake24, ...examRollingAcres2628, ...examEasterIsland2931, ...examIkea3234, ...examElectricity3537, ...examCameron3843],
};

  // ==================== 115 年 ====================
const exam115 = [
  mc(17, 1, "Rita ___ her dogs many times a day. That's why they're too fat.",
    ["feeds", "kisses", "walks", "washes"], 0,
    ["後句「that's why they're too fat」（這就是牠們太胖的原因）是解題關鍵，暗示狗狗吃了太多東西。", "feeds（餵食）最符合『導致變胖』的因果關係，其餘kisses（親吻）、walks（遛）、washes（洗）皆與『變胖』無因果關聯，甚至walks應該讓狗更瘦。"],
    "字彙題常有一句因果或結果句（that's why...）可以回頭驗證空格答案是否合乎邏輯。",
    "容易誤選walks，因為『遛狗』是常見動作，但遛狗（運動）應該讓狗變瘦而非變胖，與句意矛盾。"),
  mc(17, 1, "You can ask Sophia anything about butterflies and bees. She has great ___ of insects.",
    ["chances", "knowledge", "news", "power"], 1,
    ["句意是「你可以問Sophia任何關於蝴蝶與蜜蜂的問題，她對昆蟲有很豐富的...」，空格要選一個能被「有」（has）且能用「great」修飾、又能後接「of insects」的名詞。", "knowledge（知識）完全符合「have great knowledge of + 主題」這個常見搭配，其餘chances（機會）、news（新聞）、power（力量）接在此句型裡都不合語意。"],
    "許多描述『很懂某個領域』的句子會用have knowledge of/about + 主題這個固定搭配，可以整組記憶。",
    "容易被power干擾，誤以為在講『能力』，但這裡要表達的是『知識淵博』，對應的字是knowledge而非power。"),
  mc(19, 2, "Adam slept ___ last night because he kept waking up from bad dreams.",
    ["deeply", "early", "terribly", "quickly"], 2,
    ["後半句說明原因：「因為他不斷從惡夢中驚醒」，可知Adam昨晚睡得並不好。", "terribly（糟糕地）正確描述『睡得很不好』這個結果，其餘deeply（沉沉地/熟睡地）、early（早）、quickly（快速地）都與『不斷驚醒、睡不好』的情境矛盾，尤其deeply甚至是反義。"],
    "描述睡眠品質的副詞題，要先看原因子句（because...）透露的是好結果還是壞結果，再選出方向一致的副詞。",
    "容易誤選deeply，因為deeply常與sleep搭配，但這裡的情境是『不斷驚醒』，代表睡得並不深沉安穩，方向恰好相反。"),
  mc(17, 1, "Tara enjoys being with all kinds of animals; she even ___ a snake as a pet.",
    ["drops", "gives", "keeps", "makes"], 2,
    ["句意是「Tara喜歡跟各種動物相處，她甚至...一條蛇當寵物」，能與『當寵物』（as a pet）搭配的動詞，要表達『飼養』的意思。", "keep在英文裡除了『保持』，也常用來表示『飼養（動物）』，keep a snake as a pet正是『養一條蛇當寵物』的自然說法；drops（丟下）、gives（給）、makes（製造）都不符合『飼養』的語意。"],
    "keep + 動物 + as a pet是描述『飼養寵物』的常見固定搭配，可以整組記下來。",
    "容易忽略keep也有『飼養』的意思，誤以為題目要選的是『擁有』相關的字而選到gives或makes。"),
  mc(8, 2, "Little Eric chose the doll ___ big brown eyes because it was the cutest in the store.",
    ["at", "in", "on", "with"], 3,
    ["句意是「小Eric選了那個有一雙棕色大眼睛的娃娃」，空格要表達『擁有、帶有』某個特徵的意思，用來連接名詞doll與描述它外觀特徵的big brown eyes。", "with在此表示『具有、帶有』某種外觀特徵，doll with big brown eyes（有著大棕色眼睛的娃娃）是常見用法；at、in、on都不能用來表達『具有某個外觀特徵』的意思。"],
    "描述人或物『具有某個外觀特徵』時，常用with + 特徵，例如a girl with long hair、a house with a red door。",
    "容易被in誤導，但描述『具備某特徵』的正確介系詞是with，不是in。"),
  mc(19, 2, "After four hours of mountain climbing, Rosa's legs got ___, so she took a rest on the top of the mountain.",
    ["dirty", "sick", "sore", "strong"], 2,
    ["句意是「爬了四小時的山之後，Rosa的腿變得...，所以她在山頂休息」，前後句是因果關係：腿部不適，才需要休息。", "sore（痠痛的）正確描述長時間運動後肌肉痠痛的身體狀況，符合『需要休息』的因果邏輯；dirty（髒的）、sick（生病的）、strong（強壯的，且與『需要休息』矛盾）都不符合這個因果關係。"],
    "身體狀況類字彙題要留意句子中的因果關係，藉此判斷空格該選正面還是負面的字。",
    "容易誤選strong，因為『爬山』常讓人聯想到『變強壯』，但後半句『所以需要休息』暗示的是負面、不適的身體狀態，應選sore而非strong。"),
  mc(12, 3, "Having three cups of coffee a day can't be bad for our health, ___?",
    ["can it", "can they", "is it", "are they"], 0,
    ["主要子句的主詞是「Having three cups of coffee a day」（動名詞片語當主詞，視為單數、代稱it），使用的助動詞是can（can't be bad）。", "附加問句要與主要子句的助動詞一致（can），且極性要相反：主要子句是否定，附加問句要用肯定形式，並以it代稱動名詞主詞，因此答案是can it；is it用錯了助動詞，are they則用錯了助動詞也用錯了代名詞單複數。"],
    "附加問句一定要先確認主要子句用的是哪一種助動詞，再原封不動地在附加問句中重複使用同一種。",
    "容易誤選is it，因為句子裡有「be bad」看起來像be動詞句，但真正的助動詞其實是can（can't be bad是can+not+be的結構），附加問句要跟著can走。"),
  mc(5, 2, "You can't push that door open with only one hand. It's too heavy. You have to use ___!",
    ["all", "another", "both", "one"], 2,
    ["句意是「你不能只用一隻手推開那扇門，太重了，你必須用...」，題目暗示需要『兩隻手都用上』，而人的手固定只有兩隻。", "both（兩者都）正確表示『兩隻手都要用』，符合『固定總數為二、兩者皆用』的情境；all通常用於三個或以上的整體，another和one則語意不通。"],
    "看到句子中提到的東西是『固定成對』的（如雙手、雙腳），且語意是『兩者都要』時，直接對應both。",
    "容易誤選all，因為『全部』聽起來語意相近，但all通常用在三個或以上的群體，這裡明確是『兩隻手』的情境，正確用法是both而非all。"),
  mc(9, 2, "Alan works hard in his new job, and he wants to know ___ his boss feels about him.",
    ["how", "that", "whether", "why"], 0,
    ["句意是「Alan想知道老闆對他的感覺是『如何』的」，空格帶出一個間接問句，說明想知道的內容是『老闆對他的感受程度或方式』。", "how his boss feels about him（老闆對他的感覺如何）是間接問句的自然說法；that不能引導問句，whether（是否）與why（為什麼）則與『想知道感覺如何』的語意不符。"],
    "want to know後面接的間接問句，要先判斷原本想問的是Yes/No問題（用whether/if）還是WH問題（用what/how/why等），再選出對應的疑問詞。",
    "容易誤選whether，因為『不確定老闆感覺如何』聽起來像不確定的疑問，但whether用於『是否』的二選一問題，這裡問的是『感覺的程度為何』，屬於how的用法。"),
  mc(13, 2, "I thought the girl ___ was Kate, but it was her sister, Candy. They sounded almost the same.",
    ["answered the phone", "she answered the phone", "who answered the phone", "and answered the phone"], 2,
    ["句子的主要動詞是was（the girl ... was Kate），空格要填入一個用來修飾先行詞the girl的關係子句，說明『是哪一個女孩』。", "who answered the phone（接電話的那個女孩）是正確的關係子句形式，who在子句中做主詞，代替原本會重複出現的she；其餘選項若直接接動詞或再加代名詞，會造成句子缺少連接詞而文法錯誤。"],
    "先行詞後面若要再接一個完整的動作說明，且沒有其他連接詞時，必須使用關係代名詞將兩句話合併成一句。",
    "容易誤選and answered the phone，因為and看起來像常見連接詞，但and連接的應是文法對等的兩個部分，這裡『接電話』其實是用來修飾the girl，必須用關係代名詞who。"),
  mc(5, 1, "Ken is going abroad with a woman he met online, though he doesn't know ___ well.",
    ["her", "each other", "any", "another"], 0,
    ["空格是動詞know的受詞，指的是前面提到的「a woman」，因為是單一個人且做受詞，代名詞要用受格單數形式。", "her正確代替前面的a woman，作為動詞know的受詞；each other用於雙方互相的動作（此處只有Ken單方面不了解對方），any和another則不能單獨代替特定的某個人。"],
    "代名詞題要先找出它所代替的名詞是誰、扮演句子裡的什麼角色，再選出對應格位與單複數的代名詞。",
    "容易誤選each other，因為『彼此不熟』聽起來像雙向關係，但句子主詞只有Ken一人『不了解對方』，並非雙方互相不了解，所以不能用each other。"),
  mc(17, 2, "Joe is happy he is not at the ___ of the class now. His grades are better than half of his classmates' this school year.",
    ["side", "front", "center", "bottom"], 3,
    ["後句說明「他的成績比班上一半以上的同學都好」，可知Joe原本可能是成績吊車尾，現在他很高興自己不再是班上成績最差的那群。", "bottom of the class（班上吊車尾、成績最差的一群）正確對應這個情境；side、front、center都不是用來描述『成績排名位置』的固定說法。"],
    "the bottom of the class／the top of the class是描述成績排名高低的常見固定用法，可以整組記憶。",
    "容易誤選front，直覺聯想『成績好』要選『前面』，但『前面』並非固定用來形容『成績優異』的說法，正確要用top，本題問的是Joe很高興自己『不在』的位置，答案是bottom。"),
  mc(17, 2, "Look! There is not a cloud in the sky. I think the chances of getting some rain today are really ___.",
    ["far", "good", "possible", "small"], 3,
    ["句子前半段說「天空中沒有一片雲」，這是暗示今天不太可能下雨的線索。", "small（渺小的）正確對應「天空無雲、下雨機率很低」的情境；good、possible方向恰好相反，far則不是用來形容機率大小的字。"],
    "字彙題要先抓住句子中的具體線索，再判斷空格該選『機率高』還是『機率低』方向的字。",
    "容易誤選possible，因為『可能』聽起來很中性，但possible通常表示『有可能發生』，與『天空無雲、幾乎不會下雨』想表達的『機率很小』方向不符。"),
  mc(17, 2, "On windy days, the flowers in my garden ___ like shy children with their heads down.",
    ["bow", "fall", "rise", "smell"], 0,
    ["句子用「像害羞的孩子低著頭」來比喻花朵在風中的樣子，這個動作是『彎腰、低頭』的意思。", "bow（彎腰、低頭）正確對應「像害羞孩子低頭」的意象；fall（掉落）、rise（升起）、smell（聞起來）都無法呈現『花朵隨風彎腰低頭』的畫面。"],
    "文學性的比喻句要先想像句子描述的畫面，再選出能呈現這個畫面的動詞。",
    "容易誤選fall，因為風吹可能讓人聯想到『花瓣掉落』，但句子強調的是花朵『像害羞孩子一樣低頭』的動作與姿態，正確答案是bow。"),
  mc(2, 3, "Mr. Olson went to the doctor when he found he ___ his hair. He hoped he would be able to keep his thick hair.",
    ["was losing", "is losing", "will lose", "has lost"], 0,
    ["主要子句「Mr. Olson went to the doctor」用的是過去式，依照時態一致的原則，子句「找到自己頭髮如何」也要用過去的時態來描述『當時正在發生』的情況。", "was losing（過去進行式）正確表達『當時正逐漸掉髮、尚未掉完』的持續狀態，因此他還希望「能保住濃密的頭髮」；is losing、will lose時態上與主要子句的過去式不一致，has lost（已經掉光）則與後文『希望保住頭髮』矛盾。"],
    "當主要子句是過去式時，描述『當時正在進行』的動作要用過去進行式（was/were + V-ing），這與現在進行式描述『當下正在做』的邏輯一致，只是整體時間點往前移到過去。",
    "容易誤選has lost，因為『發現掉髮』聽起來像已經完成的事，但後文『希望保住濃密頭髮』顯示頭髮還沒掉光、只是正在逐漸掉落中，應選was losing而非has lost。"),
  mc(2, 2, "Do you know what Lindsey's first job was? Before becoming a movie star, she ___ the floors at the supermarket.",
    ["mops", "is mopping", "has mopped", "mopped"], 3,
    ["句子談的是Lindsey『成為電影明星之前』的第一份工作，這是一個發生在明確過去時期、且早已結束的事件。", "mopped（過去簡單式）正確描述這段已經結束的過去經歷；mops、is mopping是現在式或現在進行式，has mopped（現在完成式）也不能與『成為明星之前』這種明確指向過去某段時期的敘述連用。"],
    "描述某人『過去某個人生階段』做過的事，且該階段已經明確結束時，直接用過去簡單式即可。",
    "容易誤選has mopped，因為『曾經做過的工作』聽起來像是經驗，容易聯想到現在完成式，但句子明確指出這是『成為明星之前』的特定過去時期，必須用過去簡單式mopped。"),
  mc(16, 2, "Our dog Lassie hides under the bed every time the moon comes out. She has been ___ for years, but we don't know why.",
    ["it", "like this", "like us", "that"], 1,
    ["空格要指代前一句描述的行為──「每次月亮出來就躲到床底下」這整個習慣性行為，而不是單一個名詞。", "like this（像這樣）能夠回頭指代前面整句描述的『行為方式』，且has been like this語意通順；it通常代替單一名詞而非整個行為描述，like us、that則語意不符或文法不通順。"],
    "代名詞或代名詞片語指涉題，要先確認前面被指代的是『單一名詞』還是『一整個行為/情況』，再選出對應的代稱方式。",
    "容易誤選it，因為it是最常見的代名詞，但這裡要指代的是『躲到床底下』這整個行為模式，必須用like this才能語意通順。"),
  mc(1, 1, "Tom: Sam, could you help me in the kitchen now? Sam: No, I ___ TV. It's the most important game of the season.",
    ["watch", "watched", "have watched", "am watching"], 3,
    ["Sam拒絕Tom的請求，理由是他『現在正在看電視』，這是說話當下正在進行的動作。", "現在進行式am watching正確描述『此刻正在做』的動作；watch（現在簡單式）、watched（過去式）、have watched（現在完成式）都無法表達『現在當下正在進行』的語意。"],
    "對話中若在回答『現在能不能做某事』時提出『正在做另一件事』作為理由，通常要用現在進行式來描述那個正在進行的動作。",
    "容易誤選watch，因為看電視的習慣動作常讓人聯想到現在簡單式，但這裡強調的是『此刻正在看』這場重要的比賽，必須用現在進行式am watching。"),
];

const examHawkins2223 = [
  mc(16, 3, "According to the comics, what kind of person is Hawkins?",
    ["He sees good things in people.", "He never goes to work on time.", "He blindly follows other people.", "He talks about things he can't do."], 3,
    ["漫畫中Hawkins在三個不同階段都做出誇大的承諾──小學想當班長時提出自己根本無權決定的政策、當業務員時承諾能賣149輛車、後來仍不斷重複同樣的失敗模式，卻始終沒有兌現。", "(D) He talks about things he can't do（他老是把做不到的事說得好像做得到）正確概括Hawkins這種『說得多、做不到』的性格特質；其餘『看到別人的優點』『上班遲到』『盲從他人』文中都沒有相關描述。"],
    "分析漫畫或故事人物的性格時，要綜合『他在不同情境下重複出現的行為模式』，而不是只看單一事件。",
    "容易被(C)『盲從他人』混淆，但漫畫真正呈現的是他『不斷做出誇大、做不到的承諾』，而不是『盲目跟從別人』的行為，兩者性質不同。"),
  mc(20, 2, "What does it mean when we say someone bombed something?",
    ["They gave it up.", "They failed at it.", "They were fine with it.", "They were careful about it."], 1,
    ["漫畫中Hawkins提到自己「當業務員時只賣出1輛車」、「一年後又被公司請他離開」，每次都用「I bombed it」來總結這些失敗的結果。", "bomb在口語中作動詞使用時，是『搞砸、徹底失敗』的意思，因此(B) They failed at it 正確；『放棄』『沒關係』『小心謹慎』都與『搞砸、失敗』的語意不符。"],
    "遇到不熟悉的口語動詞，可以觀察它出現的上下文情境（此處緊接在描述失敗的事件之後），藉此推敲出合理的意思。",
    "容易誤選(A)『放棄了』，但正確的口語意涵是『搞砸、失敗』，而不是『主動放棄』。"),
];
attach(examHawkins2223, "115-hawkins", "In 6th grade, I tried to get the students to pick me as student leader. \"I'll make class hours shorter. And we'll have only three days of school a week…\" \"What? That's not what a student leader can decide.\" \"He doesn't know anything.\" I was the best choice, but why didn't people know that?\n\nI became a salesperson when I was 23, and I believed I could be Number 1. \"You said you would sell 50 cars a month. But you sold only 1 car in two months.\" \"Don't worry. I'll sell 149 cars next month.\" I totally bombed it.\n\n\"Hawkins, we don't need your service anymore. Go pack your things…\" \"Why?\" \"You said that a year ago.\" I bombed it again.", "Hawkins的漫畫：一位過度自信卻屢屢失敗的人");

const examMarigolds2425 = [
  mc(15, 2, "Which question can the brochure answer?",
    ["Can I order tickets online?", "How much are the tickets?", "How can I get to the Marigolds' Home?", "When can I visit the Marigolds' Home?"], 3,
    ["文宣最後清楚列出開放時間：3月到10月10:00-17:00、11月到2月10:00-16:00，且週一休館。", "(D) When can I visit the Marigolds' Home? 正是Opening times這個段落直接回答的問題；(A)線上訂票、(B)票價、(C)交通方式，文中皆沒有提供相關資訊。"],
    "這類『文宣能回答哪個問題』的題目，要逐條檢查文宣中實際包含的資訊類別，找出唯一有對應內容的選項。",
    "容易誤選(B)『票價是多少』，因為文中提到會員可享『門票9折』，容易誤以為有提到原始票價，但文宣其實從未寫出實際票價金額，只有折扣比例。"),
  mc(15, 3, "What breaks the rules for visitors to the Marigolds' Home?",
    ["Eating burgers in the Rose Garden.", "Taking pictures in the Main House.", "Entering the Rabbit's Temple without shoes.", "Taking pet dogs for a walk on the playground."], 3,
    ["規則第1條明確寫著「Pets are not allowed in any areas of the Marigolds' Home.」（園區任何地方都不允許帶寵物），沒有例外。", "(D) Taking pet dogs for a walk on the playground 直接違反第1條『任何區域都禁止寵物』的規定；(A)玫瑰園是戶外空間，規則只禁止在『建築物內』飲食，不違規；(B)拍照的禁令只限於Sir Archie's House，不是Main House；(C)規則要求的是『脫鞋才能進入』，選項描述與規則相符，並未違規。"],
    "判斷『違反哪一條規則』的題目時，要把每個選項的地點、動作都精確對應回原文規則的『適用範圍』。",
    "容易誤選(C)，因為看起來像是關於Rabbit's Temple規定的選項，但規則其實是『進入前要脫鞋』，選項描述的『沒穿鞋進入』恰好符合規定，並不是違規行為，這是文字陷阱。"),
];
attach(examMarigolds2425, "115-marigolds", "To make sure you enjoy your visit to The Marigolds' Home, we'd like to ask you to follow the rules below:\n1. Pets are not allowed in any areas of the Marigolds' Home.\n2. Eating and drinking are not allowed inside the buildings, except in the café.\n3. Picture-taking is not allowed inside Sir Archie's House.\n4. Please take off your shoes before entering the Rabbit's Temple.\n\nBecome a member and save 10% on tickets and 30% on all items in the gift shops. To join, visit www.themarigoldshome.com.\n\nThe Marigolds' Home\nOpening times:\nMarch to October: 10:00-17:00\nNovember to February: 10:00-16:00\nClosed on Mondays.", "The Marigolds' Home遊園規則與開放時間");

const examNightingale2728 = [
  mc(15, 2, "Why was Beatrice Harrison called the Nightingale Lady?",
    ["She wrote songs about nightingales.", "She sang as beautifully as a nightingale did.", "She taught nightingales to sing in a radio show.", "She was famous for playing music with nightingales."], 3,
    ["文中描述Harrison連續十二年在廣播節目中與花園裡的夜鶯一起合奏大提琴，這個特殊的『與夜鶯合奏』的形象讓她廣受歡迎、收到五萬封粉絲信。", "(D) She was famous for playing music with nightingales 正確對應她因『與夜鶯一起演奏音樂而聞名』才被稱為Nightingale Lady；她並沒有『寫關於夜鶯的歌』、『唱得像夜鶯一樣好聽』，也不是『教夜鶯唱歌』（是夜鶯自己主動加入合奏）。"],
    "人物稱號題要回到文中找出這個稱號被賦予的具體原因，通常會出現在稱號一詞前後的句子裡。",
    "容易誤選(C)『在廣播節目中教夜鶯唱歌』，但文中夜鶯是『自己主動』加入合奏，並非Harrison『教導』牠們唱歌，這是選項方向的錯誤。"),
  mc(16, 3, "Which is NOT used in the reading to mean the nightingale(s)?",
    ["Her visitor.", "The little singers.", "The artist.", "Her garden friends."], 2,
    ["文中用了幾種說法來指稱夜鶯：a visitor she did not expect（她意想不到的訪客）、the little singers（那些小小的歌手）、her garden friends（她花園裡的朋友）。", "而the artist（那位藝術家）出現在「At first, the artist was playing alone.」這句話中，指的其實是正在拉大提琴的Harrison本人，而不是夜鶯，因此(C)是唯一沒有被用來指稱夜鶯的說法。"],
    "指涉題要把每個候選詞語放回原文出現的那一句話，確認它在句子裡實際指的是『誰』，而不是只看字面意思。",
    "容易忽略the artist出現的上下文其實是在描述『大提琴家獨自演奏』的時刻，誤以為凡是文中出現的稱呼都指向夜鶯。"),
];
attach(examNightingale2728, "115-nightingale", "One summer evening when English cello player Beatrice Harrison was practicing in her garden, she was joined by a visitor she did not expect.\n\nThe visitor was a nightingale. The small brown bird sang together with Harrison's cello music, and the birdsong sounded like the piece she was playing. For the next few evenings, her visitor kept coming back, sometimes with several of its friends. Harrison decided that more people should hear the little singers.\n\nSo, on May 19, 1924, Harrison worked with the BBC, the UK's national TV and radio station, and played in her garden. At first, the artist was playing alone. Fifteen minutes before the end of her playing, the nightingales began to sing with the cello.\n\nThe nightingale show was popular with radio listeners. It was repeated the next week, and for the next twelve years Harrison played on the radio with her garden friends. During this time, she got 50,000 fan letters. People called her \"the Nightingale Lady.\"", "夜鶯女士：與夜鶯合奏的大提琴家");

const examRoseLacey293031 = [
  mc(15, 3, "Why does Alex Jackson write about Rose Lacey?",
    ["Because she died.", "Because she is very sick.", "Because she is moving away.", "Because she is leaving for another job."], 0,
    ["文章開頭寫著「With heavy hearts, we are here to say goodbye to Rose Lacey...who will be sadly missed」，並在後段提到「In her short life of 40 years」，明確暗示Rose Lacey已經在40歲時過世。", "(A) Because she died 正確對應這篇文章是一篇追悼文，紀念已故的Rose Lacey；文中並未提到她生病、搬家或換工作。"],
    "這類文章的體裁線索（如with heavy hearts、say goodbye、will be missed、in her short life of...years）通常能幫助快速判斷這是一篇追悼文，進而確定寫作原因。",
    "容易誤選(B)『她病得很重』，但文中『in her short life of 40 years』（在她短暫的40年生命中）這個說法，明確暗示的是她已經過世，而非仍在生病中。"),
  mc(15, 2, "How did Rose Lacey and Alex Jackson get to know each other?",
    ["They met at a party.", "They were relatives.", "They worked in the same office.", "They took a course on movies together."], 0,
    ["文中明確寫道「I was at a party to pick up my wife when I heard Rose explaining...」，說明Alex Jackson是在一場派對上認識Rose Lacey的。", "(A) They met at a party 正確對應這句敘述；其餘『親戚』『同辦公室同事』『一起上電影課程』文中都沒有提到。"],
    "『兩人如何認識』這類細節題，通常在文章前段就會有一句明確交代兩人初次相遇經過的句子，直接找出即可。",
    "容易誤選(C)『在同一間辦公室工作』，因為後文提到Rose替Alex Jackson的雜誌寫了十年文章，容易誤以為兩人是『同事』而混淆了『認識的契機』與『後續合作關係』。"),
  mc(15, 3, "What is special about Rose Lacey's articles?",
    ["They are important to movie makers.", "They talk about movies from a fresh angle.", "They give interesting information about actors.", "They are good examples of how to write stories."], 1,
    ["文中提到「Rose could always bring out something new from movies that we thought we knew so well」以及「Her articles often made them think whether they actually saw the same movie」，說明她總能從大家熟悉的電影中，寫出讓人耳目一新的觀點。", "(B) They talk about movies from a fresh angle 正確對應這個特色；文中並未提到她的文章對電影製作者的重要性、關於演員的趣聞，或作為寫作範例的用途。"],
    "『某作品特別之處』這類題目，要找文中反覆強調、用不同方式重述同一個重點的句子。",
    "容易誤選(A)『對電影製作者很重要』，但文中強調的是她的文章帶給『讀者』全新的觀影體悟，並沒有提到電影製作者如何看待她的文章。"),
];
attach(examRoseLacey293031, "115-rose-lacey", "With heavy hearts, we are here to say goodbye to Rose Lacey, a wonderful writer who will be sadly missed.\n\nRose and I first met in 2010. I was at a party to pick up my wife when I heard Rose explaining to her and her friends why Get Across was a great movie. Her ideas were so interesting that I invited her to write some articles about movies for Action! US. Rose was very excited and agreed right away.\n\nOver the next ten years, Rose wrote more than 150 articles. Rose could always bring out something new from movies that we thought we knew so well. People often told me that Rose never failed to surprise them. Her articles often made them think whether they actually saw the same movie, but if they went to see it again, they experienced the movie in a whole new way.\n\nIn her short life of 40 years, Rose has made her mark on the world of movies with her articles for Action! US. We are lucky to have had her in our lives. She was a very special person.\n\nAlex Jackson\nHead of Action! US", "紀念文：Rose Lacey的影評人生");

const examSeaGlass323334 = [
  mc(15, 3, "Why does the title say \"Glass Bottles' Second Life\"?",
    ["People collect sea glass and use it to make new glass bottles.", "People collect sea glass at the beach and use it to make wishes.", "Glass bottles that are thrown into the sea become the homes of sea animals.", "Glass bottles that are thrown into the sea become sea glass which is used in art pieces."], 3,
    ["文章說明玻璃瓶被丟進海裡後，經過海浪拍打、磨圓、變白等過程，最終變成『海玻璃』，並常被藝術家拿去製作藝術品，這正是玻璃瓶『第二段生命』的意思——從被丟棄的垃圾，重生為藝術創作的材料。", "(D) Glass bottles that are thrown into the sea become sea glass which is used in art pieces 完整對應這個『重生』過程；其餘選項（做成新玻璃瓶、用來許願、變成海洋生物的家）文中都沒有依據。"],
    "標題含有比喻詞（如Second Life）時，要在文章中找出對應『從舊到新、從廢棄到重生』的具體轉變過程，那正是標題想表達的意涵。",
    "容易誤選(A)『做成新的玻璃瓶』，因為標題提到『玻璃瓶』，但文章實際描述的『第二段生命』是變成『海玻璃、成為藝術品』，而不是重新做回玻璃瓶。"),
  mc(15, 3, "According to the reading, how is sea glass made?",
    ["Sea glass becomes rounder after it is pushed up to the beach.", "Colder sea water helps pieces of glass become sea glass faster.", "Pieces of glass become white on the outside after many years in the sea.", "Glass bottles break into pieces when they are dug out from the sea floor."], 2,
    ["文中明確說明「After tens or hundreds of years in the sea, the pieces of glass grow an ice-like white color on the outside and become sea glass.」，也就是玻璃碎片在海裡經過數十年至數百年後，表面會變成冰霜般的白色，才真正成為海玻璃。", "(C) Pieces of glass become white on the outside after many years in the sea 正確對應這個步驟；(A)『被沖上岸後才變圓』與文中『在海底移動時逐漸變圓』的順序相反、(B)文中未提及、(D)與文中『被海浪拍打時碰撞破碎』的描述不符。"],
    "含有多個步驟的說明文，要把選項描述的『順序』與文中步驟一一對照，確認先後順序是否正確，而不是只看關鍵字是否出現過。",
    "容易誤選(A)，因為文中確實提到『變圓』與『被沖上岸』兩個步驟，但變圓是發生在『沉在海底移動時』，而不是『被沖上岸之後』，順序被選項顛倒了。"),
  mc(15, 3, "According to the reading, why will less sea glass be found in the future?",
    ["People do not make as many glass items as before.", "People have learned not to throw garbage into the sea.", "Artists are using too much sea glass in their art pieces.", "Waves are not big enough to push sea glass up to the beach."], 0,
    ["文章最後提到「people now seldom use glass to make bottles and bowls—paper bowls and cups have become more popular... there are fewer glass items in the sea」，說明現代人越來越少使用玻璃製品，導致海裡的玻璃來源變少。", "(A) People do not make as many glass items as before 正確對應這個因果關係；其餘『人們學會不丟垃圾』『藝術家用太多海玻璃』『海浪不夠大』文中都沒有提及。"],
    "找『未來趨勢的原因』時，要留意文章結尾常會出現轉折詞帶出的因果說明句，這往往就是解釋未來變化的關鍵句。",
    "容易誤選(C)『藝術家用太多海玻璃』，但文章明確指出『海玻璃變少』的原因是『玻璃製品的來源減少』，並非藝術家過度使用所致。"),
];
attach(examSeaGlass323334, "115-sea-glass", "SEA GLASS: GLASS BOTTLES' SECOND LIFE\n\nSea glass is made from the magic of the sea. It usually comes from glass bottles that are thrown into the water. Each piece of sea glass looks different, and sea glass is often seen on art pieces. The steps below explain how sea glass is born:\n1. Glass bottles are thrown as garbage into the sea.\n2. When these bottles ride the waves of the sea, they hit each other or other garbage in the sea and break into small pieces of glass.\n3. Pieces of glass are pushed by sea water and move along the sea floor. The sharp pieces slowly become rounder and rounder.\n4. After tens or hundreds of years in the sea, the pieces of glass grow an ice-like white color on the outside and become sea glass.\n5. Sea glass is finally pushed up to the beach.\n6. Artists collect pieces of sea glass and put them into their works.\n\nHowever, people now seldom use glass to make bottles and bowls—paper bowls and cups have become more popular these days. This means there are fewer glass items in the sea, so less and less sea glass will be found in the future.", "海玻璃：玻璃瓶的第二段生命");

const examIcelandic3539 = [
  mc(20, 3, "What does the prevalence of English mean?",
    ["That English is very common.", "That English is not welcomed.", "That English is easy and simple.", "That English is not a national language."], 0,
    ["文中接著舉例說明prevalence of English的具體情況：跟家事機器人說英文、用手機看電影都用英文、大多數商品都是英文介面、外國移民也大多只說英文，可見英文在冰島已經『無所不在』。", "prevalence字面就是『普遍存在、流行』的意思，(A) That English is very common 正確對應這個字義；文中並沒有說英文『不受歡迎』、『簡單易學』或『不是官方語言』。"],
    "字彙猜義題可以觀察這個字前後的具體例子，這些例子通常直接反映該字的意思。",
    "容易被prevalence的字形聯想成負面的字，誤選(B)『不受歡迎』，但文中舉的例子只是在客觀描述英文『很普遍、隨處可見』的現象，並沒有負面『排斥』的語氣。"),
  mc(16, 4, "In the first reading, which is one of the ways that Anna Adams uses to make readers believe in her ideas?",
    ["Sharing her own life stories.", "Borrowing from people's experience.", "Using examples from another language.", "Showing information from news reports."], 1,
    ["第一篇報導中，作者Anna Adams並沒有分享自己的生活故事，而是直接引用了兩位冰島人（工程師Helgi Atlason、老師Eirikur Wilson）的真實說法，來支持『冰島語正在流失』這個論點。", "(B) Borrowing from people's experience 正確對應她引用真實人物說法的寫作手法；文中並未提及她分享自己的人生故事、使用另一種語言的例子，或引用新聞報導的數據資料。"],
    "分析議論文或報導的說服手法時，要留意作者是否『直接引用他人的話』（通常會用引號標示），這是常見用來增加說服力的寫作技巧。",
    "容易誤選(D)『引用新聞報導的資訊』，因為這篇文章本身類似新聞報導，但文中實際引用的是『受訪者的談話』，而不是額外引用其他新聞報導的數據。"),
  mc(16, 4, "Which words in the second reading are NOT used to describe Icelandic?",
    ["A language in its sickbed.", "A dying language.", "Our first language.", "This beautiful language."], 1,
    ["第二篇報導中，作者提到「Many people think Icelandic is a language in its sickbed」與「does the future of our language really look that bad」，並在文末稱冰島語為「our first language」與「this beautiful language」。", "「a dying language」這個說法出現在作者解釋『一個語言需要至少35,000名使用者才能安全地不被視為dying language』這句話裡，是用來說明一般的判斷標準，並不是作者用來形容冰島語本身的說法，因此(B)是唯一沒有被用來『形容冰島語』的說法。"],
    "指涉或描述用語的題目，要把每個候選詞語放回原文脈絡，確認作者是用它來『形容主詞本身』，還是用來『說明一般定義或門檻』。",
    "容易誤選(A)，因為它也帶有負面意涵，但作者明確提到『很多人認為』冰島語是這種語言，而(B)則是引用學者對『語言安全門檻』的一般定義，兩者都需要小心分辨是否真的用來『形容冰島語』。"),
  mc(16, 4, "Are Anna Adams and Gunnar Eggertsson worried about the future of Icelandic?",
    ["No, they are not.", "Yes, they both are.", "Adams is, but Eggertsson is not.", "Adams is not, but Eggertsson is."], 2,
    ["第一篇報導中Anna Adams的語氣明顯擔憂，文末甚至問「Will Iceland one day give up Icelandic for English? It may happen soon.」，顯示她認為情況堪憂。", "第二篇報導中Gunnar Eggertsson雖然一開始提到『許多人』擔心冰島語瀕危，但他接著用具體數據逐一反駁這些擔憂，並在文末樂觀地說相信冰島語能夠成長茁壯，可知他本人並不擔心，綜合兩篇文章可知(C) Adams is, but Eggertsson is not 正確。"],
    "跨篇比較題要先分別掌握兩篇文章各自的語氣與結論，再逐一對照題目要求比較的面向。",
    "容易誤選(B)『兩人都擔心』，因為第二篇文章開頭也提到『擔心』，但那是作者轉述『許多人』的看法，作者本人在文章後段是用樂觀、反駁的角度來回應這些擔憂，並非他自己也感到擔心。"),
  mc(16, 4, "Which idea do Anna Adams and Gunnar Eggertsson both talk about in the readings?",
    ["Whether Icelanders speak better English than Icelandic.", "Whether the number of Icelandic speakers is big enough.", "Whether school subjects should be taught only in Icelandic.", "Whether Iceland should allow more foreigners to work in Iceland."], 1,
    ["第一篇報導中Anna Adams提到冰島語使用者只有『314,000人』，語氣暗示這個數字讓人擔憂；第二篇報導中Gunnar Eggertsson也提到同樣的314,000這個數字，並拿它與『35,000人安全門檻』比較，主張這個數字其實足夠安全。", "兩篇文章都圍繞著『冰島語使用者人數是否足夠』這個共同話題展開（只是解讀方向不同），因此(B) Whether the number of Icelandic speakers is big enough 正確；其餘選項只在其中一篇被提及或根本沒有提到。"],
    "找兩篇文章的『共同話題』時，可以留意兩篇是否引用了『相同的數據或事實』，這通常就是兩篇共同討論的核心。",
    "容易誤選(D)，因為兩篇都提到外國人，但討論的『角度和重點』並不相同，真正共同談論的核心其實是『使用人數是否足夠』這個數據話題。"),
];
attach(examIcelandic3539, "115-icelandic", "[第一篇報導：The Future of Icelandic — Anna Adams]\nIcelandic is a language that is spoken only in Iceland. It has a long history. But many Icelanders are worried that they're losing Icelandic.\n\nThe reason for their worry is the prevalence of English in Iceland. \"I use English when I talk to my housework robot, use my phone, and watch movies,\" said Helgi Atlason, an engineer. There is a reason for that. Most of these products use English, and few companies care to change the language into Icelandic because there are only a small number of Icelandic speakers (314,000 people). Actually, you see English everywhere in Iceland.\n\nIcelanders also speak and hear more English than Icelandic these days because many foreigners who come to live and work in Iceland speak only English. \"We can't use Icelandic abroad, and we're not using it much in Iceland, either. How do you expect our kids will want to learn it?\" said Eirikur Wilson, a teacher.\n\nWill Iceland one day give up Icelandic for English? It may happen soon.\n\n[第二篇報導：Our Future with Icelandic — Gunnar Eggertsson]\nMany people think Icelandic is a language in its sickbed and that it needs to be saved. I understand their worries, but does the future of our language really look that bad?\n\nAccording to Dr. David Clingingsmith, a language needs at least 35,000 speakers to be \"safe\" from becoming a dying language. There are now 314,000 Icelandic speakers. Also, every year Iceland spends 51.3 million Icelandic crowns (3.7 million US dollars) teaching Icelandic to machines: phones, computers, and robots. Icelandic is appearing more often in products. Most importantly, schools still teach Icelandic to children. Clearly, we are not giving up our first language.\n\nHowever, I'm not saying that Iceland has done enough for Icelandic. Our country can do a better job at getting more people to speak this beautiful language. One way to do so is to give more language courses to foreigners. With much more work, I'm sure Icelandic can grow and even reach farther into the world.", "冰島語的未來：兩篇觀點報導");

const examKingSeed40414243 = [
  mc(16, 3, "根據上下文，空格(1)應填入下列何者？",
    ["give you a piece of good land", "choose a person to be the next king", "put the beautiful ones in my castle", "decide who will work in my garden"], 1,
    ["文章一開始就交代國王『沒有子嗣，擔心國家未來落入不對的人手中，因此決定從國內的孩子中選一個人來繼承王位』，這正是國王發種子這個測驗真正的目的。", "(B) choose a person to be the next king 正確呼應這個開頭鋪陳的動機；其餘選項都只是表面上的說法，並未掌握整個故事『選繼承人』的真正目的。"],
    "克漏字故事的開頭若已經交代了整個事件的『動機或目的』，後面出現的關鍵句通常都要呼應這個開頭動機來判斷。",
    "容易誤選(C)『把漂亮的植物放進城堡』，但國王真正的用意早在文章開頭就說明是『選繼承人』，不是為了收集漂亮植物。"),
  mc(16, 4, "根據上下文，空格(2)應填入下列何者？",
    ["But he lost his pot a few weeks later", "Months passed but nothing grew from it", "But soon the plant that grew from it died", "The seed grew into a big tree in a short time"], 1,
    ["故事後段揭曉真相：國王在發放種子前已經把種子煮熟，所以任何種子都不可能發芽，這代表老實種植、沒有作弊的Wong，他的盆栽注定『什麼都長不出來』。", "(B) Months passed but nothing grew from it 正確呼應這個後來才揭曉的真相；其餘選項都預設『種子有發芽』，與『種子被煮熟不可能發芽』的事實矛盾。"],
    "克漏字故事若在後段才揭露關鍵真相，要回頭檢查前面的空格是否也必須符合這個後來才知道的真相，才能選出真正合理的答案。",
    "容易誤選(D)『種子很快就長成一棵大樹』，因為單看這一段文字像是要有好結果的鋪陳，但故事後段揭曉種子已被煮熟，所以正確答案必須是『什麼都沒長出來』。"),
  mc(16, 3, "根據上下文，空格(3)應填入下列何者？",
    ["the last one to give up", "the first one to share good news", "the first one to bring his pot to the king", "the only one to take good care of his plant"], 1,
    ["空格前一句描述Sung告訴大家自己種子裡長出了小植物，空格後一句則說「大家都興奮地說他會成為國王」，可知Sung是『第一個』宣布自己種子發芽這個好消息的孩子。", "(B) the first one to share good news 正確對應這個情境；其餘選項都與上下文不符，尤其後文提到越來越多孩子也陸續說自己盆栽裡有東西，可知並非『唯一』。"],
    "克漏字題要留意空格前後句子透露的『順序關係』，選出符合這個時間順序的選項。",
    "容易誤選(D)『唯一悉心照顧植物的人』，但這裡的空格主詞是Sung，且後文提到越來越多孩子也說自己盆栽裡有東西，可知並非『唯一』，而是『第一個』說出好消息的人。"),
  mc(18, 4, "根據上下文，空格(4)應填入下列何者？",
    ["wise", "strong", "honest", "popular"], 2,
    ["故事真相是國王把種子煮熟，所有孩子的種子都不可能發芽，因此其他孩子盆栽裡『長出來的植物』必定不是真的從種子長出來的，只有Wong誠實地帶著什麼都沒長出來的空盆去見國王。", "(C) honest（誠實的）正確對應國王真正想測試、也是Wong唯一具備、其他孩子都沒有做到的特質；wise、strong、popular都不是這個故事真正要傳達的核心寓意。"],
    "寓言故事的結局若揭曉一個『測試的真相』，通常要回推故事真正想考驗的是哪一種品格特質，再對應到選項中的性格形容詞。",
    "容易誤選(A)wise，因為『識破國王的詭計』聽起來像需要智慧，但Wong並沒有識破詭計，他只是『誠實地』如實呈現自己種植的結果，重點在於誠實而非智慧。"),
];
attach(examKingSeed40414243, "115-king-seed", "A long time ago, there was an old king who had no child of his own. The king was worried that his land would fall into the wrong hands after his death, so he decided to pick a child in his land to take the high seat. One day, he called all the children to his castle and gave each of them a seed. \"Come back on New Year's Day and show me what you have grown,\" he said to them, \"and I will ___(1)___.\"\n\nEvery child brought their seeds home carefully. One of the children, Wong, planted his seed in a pot. He gave it water every day and made sure there was sun to help it grow. ___(2)___.\n\nThen, Sung, the child of the richest family in the land, told people that a small plant was growing from his seed. He was ___(3)___. Everyone excitedly said that he would be king. Soon, one after another, more and more children were also saying that they had something in their pots. But Wong still didn't find anything in his.\n\nOn the big day, when Wong brought his pot to the castle, he saw all the other children carrying interesting plants. Some had flowers in the shape of a bird, and some had grasses of different colors. Everyone proudly showed their plants to the king, but the king looked unhappy until he saw Wong's pot. \"I boiled the seeds before I gave them out, so no plants could grow from them.\" The king looked seriously at the children. \"There is only one child who is ___(4)___ enough to be king.\"\n\nTen years later, the king died. On his deathbed, he was not worried because he knew Wong would be a good king.", "老國王選繼承人：煮熟的種子與誠實的孩子");

window.__ENG_TRANSCRIBED_115 = {
  minutes: 60,
  omittedNote: "115年英語（閱讀）題本共43題，其中第1題（依圖片作答「Look at the picture...」，無文字可轉錄）、第20、21題（原始題本第20-21題組所依據的食譜圖文「The Best Fruit Tea You Can Make at Home」於文字擷取時缺漏，僅存圖片呈現）、第26題（需依官方場館地圖判斷方向路線，屬圖像資訊，文字題本未提供地圖對應）題因純為圖片或版面內容，無法轉錄為等義文字，其餘39題皆已逐題轉錄並核對官方答案。",
  questions: [...exam115, ...examHawkins2223, ...examMarigolds2425, ...examNightingale2728, ...examRoseLacey293031, ...examSeaGlass323334, ...examIcelandic3539, ...examKingSeed40414243],
};

  return {
    106: window.__ENG_TRANSCRIBED_106,
    107: window.__ENG_TRANSCRIBED_107,
    108: window.__ENG_TRANSCRIBED_108,
    109: window.__ENG_TRANSCRIBED_109,
    110: window.__ENG_TRANSCRIBED_110,
    111: window.__ENG_TRANSCRIBED_111,
    112: window.__ENG_TRANSCRIBED_112,
    113: window.__ENG_TRANSCRIBED_113,
    114: window.__ENG_TRANSCRIBED_114,
    115: window.__ENG_TRANSCRIBED_115
  };
})();
