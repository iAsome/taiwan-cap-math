import assert from "node:assert/strict";

// Static, reviewed near-miss distractors. Runtime never calls this module.
export const ENGLISH_SEMANTIC_REVISIONS = new Map(Object.entries({
  ENG_R4_Q_009_10: ["circle both words", "circle the subject and the object, but do not mark the verb"],
  ENG_R4_Q_010_09: ["exactly 31 words", "the summary must contain at least 31 words"],
  ENG_R4_Q_014_05: ["ignore the legend", "locate the named rivers but leave the map legend without reading it"],
  ENG_R4_Q_014_09: ["repeat only one word for four days", "review the full set each day but keep every word in the same order", "每天固定同一順序，沒有在最後一天混合提取，仍容易只靠位置記憶。"],
  ENG_R4_Q_020_01: ["Principal, principal, principal question.", "Good morning, Principal Wu. Please answer before I ask my question.", "開頭雖有稱謂，卻要求校長在問題提出前作答，溝通順序不成立。"],
  ENG_R4_Q_021_07: [
    ["Bus!", "I have to catch my bus, so our meeting was not useful.", "有離開理由，卻用負面評價否定整次會面，不是自然友善的收束。"],
    ["I disappear now.", "I will disappear now because you need to catch my bus."],
    ["No more person.", "It was nice meeting you, but you must leave for my bus.", "說話者應說自己要離開，不能命令對方為自己的公車離開。"],
  ],
  ENG_R4_Q_021_08: [
    ["Your age is not soup.", "I often make soup, but your age tells me what you like to cook."],
    ["Cooking is a school bus.", "I often cook on the school bus. What time does it leave?"],
  ],
  ENG_R4_Q_021_09: [
    ["Then stay alone forever.", "You can sit alone until someone chooses to speak with you."],
    ["Everyone is yesterday.", "Everyone already has a group, so you should look somewhere else.", "這句把新同學推開，沒有提供陪伴、介紹或加入群體的支持。"],
  ],
  ENG_R4_Q_021_11: ["Draw my name and leave.", "Nice to meet you, Ian. What kind of songs do you sing?", "雖承接姓名，卻把 Ian 提到的 comics 改成唱歌，沒有使用第二項已知資訊。"],
  ENG_R4_Q_049_09: ["Hers is a plural noun ending in s.", "Dog's is a complete pronoun form, and hers is a plural noun."],
  ENG_R4_Q_062_01: ["Every Monday", "A time that comes back at the start of each week"],
  ENG_R4_Q_062_07: ["Because tired is a place.", "Because this happens after every long practice and Look! marks a past action.", "every long practice 支持反覆情況，但 Look! 指向眼前狀態，不標記過去動作。"],
  ENG_R4_Q_075_06: ["The traveler likes trains.", "The traveler plans to ask about a 9:20 train at the station."],
  ENG_R4_Q_082_10: ["Both give a finished date.", "Yet says packing is finished, while already asks whether it is finished.", "這項把功能顛倒；yet 用於詢問是否完成，already 用於表示已完成。"],
  ENG_R4_Q_086_04: ["The bus is not allowed to move.", "There is a chance the bus will stop here, but it cannot move after that."],
  ENG_R4_Q_091_10: ["May always says rain will come.", "Both say rain may come, but may says it will come and might says it cannot come."],
  ENG_R4_Q_093_05: ["Could you meet me later?", "Could you meet me somewhere near the front gate later today?", "地點只有 somewhere near，時間只有 later today，仍不足以讓聽者準時赴約。"],
  ENG_R4_Q_093_06: ["Take us now.", "Excuse me. You have a camera, so take our photo now.", "Excuse me 有取得注意，但後半仍以命令要求陌生人，沒有讓對方選擇是否幫忙。"],
  ENG_R4_Q_093_11: ["Could you bring things?", "Could you bring one of my books to a room after lunch?", "one of my books 與 a room 仍各有多個可能，收訊者不能確定物品與地點。"],
  ENG_R4_Q_096_08: ["Only the second sentence is about a window.", "The first tells both people to act; the second asks both to act later.", "Open the window 直接要求聽者，沒有包含說話者，也沒有 later 的時間資訊。"],
  ENG_R4_Q_097_07: ["My dog likes people.", "Could you watch my dog one day? I think it likes everyone.", "one day 沒有說明題幹的兩天照顧需求，也未讓不熟的鄰居婉拒。"],
  ENG_R4_Q_097_08: ["The longest line is always best.", "The best wording is always the longest line because it sounds more polite."],
  ENG_R4_Q_097_11: ["The meeting changes. Follow it.", "Could we change Saturday's meeting? Please follow the new time without an answer.", "這句提出變更卻明說不需回答，也沒有給新時間，無法完成團體協調。"],
  ENG_R4_Q_097_12: ["Stop is only used in books.", "Fast words are only needed in books; a polite question is always safer in real danger."],
  ENG_R4_Q_115_04: ["Ben only", "Ben is the only player the sentence can mean."],
  ENG_R4_Q_119_08: ["Grace", "Grace is the only person the sentence can describe clearly."],
  ENG_R4_Q_129_07: ["slowly → slow", "Change slowly to slow and keep the other words in the same order."],
  ENG_R4_Q_134_12: ["The camp lasts all July.", "The camp runs through July, and the meeting happens every day at noon."],
  ENG_R4_Q_135_07: ["slept → sleep", "Change slept to sleep but leave during the movie played as they are."],
  ENG_R4_Q_143_09: ["She saw only Ben.", "She saw Ben but did not see Leo at any time."],
  ENG_R4_Q_155_09: ["The trip received the sleeping action.", "The trip received the action because Leo slept well during it."],
  ENG_R4_Q_158_06: ["the lights", "the lights that are turned off by someone every night"],
  ENG_R4_Q_160_03: ["Ben broke it.", "Ben broke the glass, although the sentence never names him."],
  ENG_R4_Q_160_10: ["A child must have closed it.", "A child must have closed it because every closed window needs a named person."],
  ENG_R4_Q_174_02: ["It must be broken.", "It must be broken because Nora did not hear it ring."],
  ENG_R4_Q_175_06: ["I spoke yesterday", "If I were you, I would tell the class that I spoke yesterday", "這項只建議回報昨天的事，沒有提供處理目前害怕回答的第一步。"],
  ENG_R4_Q_179_04: ["It must become yesterday.", "It must become yesterday because the speaker used the word here."],
  ENG_R4_Q_205_07: ["Listen to me now.", "I am sorry to interrupt, so listen to my question and answer now."],
  ENG_R4_Q_205_12: ["Maybe, although I will never do it.", "Sorry, I cannot lend it now, and there is no other phone to use."],
  ENG_R4_Q_208_06: ["I know every street.", "That happened to me too; I know every street, so getting lost is easy.", "前後一面說熟悉每條街、一面說容易迷路，且沒有追問對方如何找到路。"],
  ENG_R4_Q_208_08: ["Practice is at five.", "I am sorry you missed practice. What time does practice start today?"],
  ENG_R4_Q_209_02: ["Sunday is a bad idea.", "I understand, but Sunday is a bad idea and everyone should all choose Saturday.", "這項仍直接貶低 Sunday 並替所有人決定，沒有說明自己的困難或邀請協調。"],
  ENG_R4_Q_209_03: ["Reports are boring.", "I am not sure it says always, but reports are too boring to check."],
  ENG_R4_Q_209_04: ["That is the worst thought ever.", "I have a different idea because your thought about the party is the worst one."],
  ENG_R4_Q_209_06: ["Close parks are never good.", "You are right that it is close, so any park there must be good."],
  ENG_R4_Q_209_10: ["Better ways are better.", "Do you mean it is better because every new way is better?"],
  ENG_R4_Q_209_12: ["Yes, not agreeing is always selfish.", "People who do not agree are always selfish, so we should take away their ideas."],
  ENG_R4_Q_210_06: ["The cake looks fresh.", "Yes, the cake looks fresh, so the nuts in it should not be a problem."],
  ENG_R4_Q_210_07: ["Reports can be long.", "I finished it, but reports can be long when Leo joins the team."],
  ENG_R4_Q_217_07: ["Tomorrow is the clean-up day.", "The event is happening tomorrow because a later day always means tomorrow."],
  ENG_R4_Q_218_08: ["Hi Lily", "Hi Lily, the library is open today, so you may visit at any time.", "這項混入稱呼，且 any time 與題目提供的六點關門資訊衝突。"],
  ENG_R4_Q_236_05: ["arrived after Ben", "arrived after Ben, so she must have missed the promised time", "記錄顯示 Amy 3:55 到、Ben 4:05 到；她先到且沒有錯過四點承諾。"],
  ENG_R4_Q_237_03: ["only the truck", "the truck because it is the only possible meaning of the word"],
  ENG_R4_Q_237_06: ["He must be Jay", "He must be Jay because this word always names the first person mentioned"],
  ENG_R4_Q_237_07: ["the cookies", "the cookies because the nearest plural thing is always the only possible answer"],
  ENG_R4_Q_238_11: ["only the rain", "only practicing in the rain, because finishing tasks cannot belong to the same idea"],
  ENG_R4_Q_243_08: ["science lessons", "science lessons in the garden, but not any other use or benefit of it"],
  ENG_R4_Q_246_07: ["Ten days of listening guarantees a high score", "Ten days of listening guarantees a high score because Leo felt more comfortable"],
  ENG_R4_Q_246_09: ["Twenty riders preferred the path", "Twenty riders preferred the path, which proves that everyone in town prefers it"],
  ENG_R4_Q_248_04: ["The market is crowded", "Nora returns only because the market is crowded, not because of any other strength"],
  ENG_R4_Q_257_11: ["Long visits removed the seats", "The seats made every visitor stay longer, so the cause is fully proven", "資料只顯示座位與較長停留同時出現，沒有 seats were removed 的資料，也不能把每位訪客的因果關係說成已完全證明。"],
  ENG_R4_Q_266_07: ["one visitor", "one visitor arriving again and again during a very short period"],
  ENG_R4_Q_267_12: ["to describe how rivers form", "to describe how rivers form and warn all users away from every path"],
  ENG_R4_Q_268_04: ["workers repairing every road", "workers who repair every road near the river before people ride bikes"],
  ENG_R4_Q_271_03: ["The result was disappointing", "The result was disappointing, but the sentence gives no number of people", "原句明寫 forty people；這項否認已提供的數字，不能同時保留事實與評價。"],
  ENG_R4_Q_276_12: ["Close the fridge at noon.", "Close the fridge at noon and tell users that no food arrives later."],
  ENG_R4_Q_277_12: ["Put it at A.", "Put it at A because an unsupported claim should open the stated process before any evidence is given."],
  ENG_R4_Q_278_09: ["The comments replace every survey number.", "The comments replace every survey number because reasons are the only useful evidence."],
  ENG_R4_Q_296_06: ["The branch had exactly twenty leaves.", "Riders counted exactly twenty leaves on the branch before workers cleared the path."],
  ENG_R4_Q_296_09: ["The box was gray and sat on a shelf.", "Sam saw that the box was gray, so its color helped him reset the code."],
  ENG_R4_Q_299_05: ["Change one cup to 200 mL.", "Place one cup with 200 mL in one test location and leave the other as it was."],
  ENG_R4_Q_299_07: ["to change the object's height", "to change the object's height so that later comparisons use a different place"],
  ENG_R4_Q_302_10: ["Bins alone certainly caused the entire drop.", "Bins alone certainly caused the entire drop, even though the other changes happened too."],
  ENG_R4_Q_304_07: ["Posters never contain facts.", "Posters can show facts, but blue always proves one plan is better than another."],
  ENG_R4_Q_305_11: ["The shop painted its wall.", "A shop painted the same wall twenty times instead of using twenty new bottles."],
  ENG_R4_Q_305_12: ["Two students sat at different tables silently.", "Two students sat at different tables silently and never compared any answer."],
  ENG_R4_Q_306_08: ["to review the dog's color", "to review the dog's color without gathering any information about where it went"],
  ENG_R4_Q_315_10: [
    ["In Room 5.", "The presentation will be in Room 5 with twenty slides next year.", "問句問已結束的簡報表現，這項改談明年的地點與張數，時態和焦點都不合。"],
    ["I present next year yesterday.", "I will give the presentation next year because yesterday was busy."],
  ],
  ENG_R4_Q_255_01: ["The cafe has closed forever", "The cafe will open again at a different time today", "鎖門且無燈只支持現在未營業，沒有證據保證今天稍後會重開。"],
  ENG_R4_Q_255_03: ["The kitchen had closed forever", "The kitchen had stopped serving rice for the day", "午餐盒空且詢問剩飯支持 Ben 想再吃，沒有說廚房當天停止供應。"],
  ENG_R4_Q_261_09: ["closed forever", "not open again on any future day", "vacant 只表示目前沒有人使用，不代表未來永遠不再開放。"],
  ENG_R4_Q_291_06: ["The school closes forever.", "The school closes for the rest of the day after the fire.", "故事結尾明說大家安全回到教室，與學校當天其餘時間關閉矛盾。"],
  ENG_R4_Q_307_06: ["The restaurant wants to close the street forever.", "The restaurant wants the street closed so that its outdoor tables stay quiet."],
  ENG_R4_Q_318_03: ["She closed Room 2 forever.", "She closed Room 2 after taking the boxes to the office."],
}));

export function applyEnglishSemanticRevision(question) {
  const value = ENGLISH_SEMANTIC_REVISIONS.get(question.id);
  if (!value) return question;
  const revisions = typeof value[0] === "string" ? [value] : value;
  const options = [...question.options];
  const reasons = [...question.reasons];
  for (const [from, to, authoredReason] of revisions) {
    const index = options.indexOf(from);
    assert(index >= 0, `${question.id}: semantic revision source option drifted: ${from}`);
    options[index] = to;
    reasons[index] = authoredReason ?? reasons[index].replace(`${from}：`, "").replace(from, "").trim();
    assert(reasons[index], `${question.id}: semantic revision rationale is empty`);
  }
  return { ...question, options, reasons };
}

export const ENGLISH_SEMANTIC_REVISION_COUNT = ENGLISH_SEMANTIC_REVISIONS.size;
