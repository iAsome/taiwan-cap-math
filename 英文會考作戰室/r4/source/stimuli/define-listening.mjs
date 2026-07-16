import assert from "node:assert/strict";
import { ENGLISH_LISTENING_PICTURE_BOARDS as BOARDS } from "../units/ENG_R4_U47.mjs";

const LABELS=["A","B","C","D"];
const DIFFICULTIES=["foundation","standard","advanced","transfer"];
const NAMES=["Ava","Ben","Cora","Dylan","Emma","Finn","Grace","Hugo","Iris","Jack"];
const PLACES=["library","gym","art room","science room","music room","school office","health center","train station","community hall","bookstore"];
const TIMES=["eight thirty","nine fifteen","ten o'clock","eleven twenty","noon","one forty","two fifteen","three thirty","four o'clock","five twenty"];
const DAYS=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","next Monday","next Tuesday","next Friday"];
const ITEMS=["science posters","sports cones","paint boxes","plant trays","music stands","class folders","first-aid bags","travel signs","folding chairs","book cartons"];

function rotate(correct,distractors,index){
  const values=[correct,...distractors]; const shift=index%4;
  const options=[...values.slice(shift),...values.slice(0,shift)];
  return {options,answerIndex:options.indexOf(correct)};
}

function makeQuestion({id,skillId,stem,correct,distractors,index,operation,evidence,assets=[]}){
  assert.equal(new Set([correct,...distractors]).size,4,`${id}: duplicate option`);
  const {options,answerIndex}=rotate(correct,distractors,index);
  return {
    id,skillId,stem,options,answerIndex,
    reasons:options.map((option)=>option===correct?`${option}：${evidence}`:`${option}：此項與鎖定音稿中的明示人物、地點、順序、數量或目的不符。`),
    difficulty:DIFFICULTIES[index%4],
    cognitiveProcess:["listen-to-locked-original-recording",operation],
    representationType:`listening-${operation}`,
    misconceptionTargets:["answer-from-isolated-keyword-without-integrating-the-complete-audio"],
    reviews:[
      `獨立聽解核對：回查鎖定 transcript 可逐字或以唯一改寫支持「${correct}」，且題幹指定的輪次與資訊欄位一致。`,
      `替代答案核對：其餘三項逐一與音稿對照後，至少違反一項明示條件，因此不存在第二個可接受答案。`,
    ],assets,
  };
}

function provenance(kind){
  return {status:"original",authorRole:"Codex R4 English listening author",copyrightStatus:"Original locked script and original questions; no third-party recording or item wording copied.",sourceRefs:["ENG-R4-FROZEN-AUTHORITY-GRAPH","CAP-106-TO-115-ENGLISH-LISTENING-CALIBRATION"],kind};
}

function describeScene([count,action,object,position,feature]){
  const people=count===1?"One person":`${count} people`;
  const wearing=feature==="none"?"with no marked accessory":feature==="hat"?"wearing hats":feature==="glasses"?"wearing glasses":"wearing scarves";
  const verb=count===1?({standing:"is standing",walking:"is walking",sitting:"is sitting",pointing:"is pointing"}[action]):({standing:"are standing",walking:"are walking",sitting:"are sitting",pointing:"are pointing"}[action]);
  return `${people} ${wearing} ${verb}; a ${object} is ${position} the table.`;
}

function sceneFrame([count,action,,position,feature]){
  return `${count===1?"one-person":`${count}-person`} ${action}, ${position}-the-table, ${feature}-feature`;
}

function pictureItem(index){
  const boardIndex=index%BOARDS.length;
  const combo=Math.floor(index/BOARDS.length);
  const firstIndex=combo%4;
  const secondIndex=(firstIndex+1+Math.floor(combo/4))%4;
  const board=BOARDS[boardIndex],first=board[firstIndex],second=board[secondIndex];
  const number=index+1,id=`ENG_R4_LISTEN_${String(number).padStart(3,"0")}`;
  const visualAssetId=`ENG_R4_FIG_47_${String(boardIndex+1).padStart(2,"0")}`;
  const transcript=`First scene. ${describeScene(first)} Second scene. ${describeScene(second)}`;
  const assets=[visualAssetId];
  const otherObjects=board.map((scene)=>scene[2]).filter((value)=>value!==first[2]&&value!==second[2]);
  const objectPairs=[`${first[2]}, then ${second[2]}`,`${second[2]}, then ${first[2]}`,`${first[2]}, then ${otherObjects[0]}`,`${otherObjects.at(-1)}, then ${second[2]}`];
  assert.equal(new Set(objectPairs).size,4,`${id}: picture object pairs`);
  return {
    id,section:"picture",transcript,spokenText:transcript,audioDescription:`Two ordered scene descriptions for four-panel listening board ${boardIndex+1}.`,visualAssetId,pauseMs:3000,voiceProfile:{voice:"Microsoft Zira Desktop",rate:-1},
    questions:[
      makeQuestion({id:`ENG_R4_Q_LISTEN_${String(number).padStart(3,"0")}_01`,skillId:"ENG_R4_S310",stem:`Before the later ${sceneFrame(second)} description, which panel matches the first heard ${first[1]} scene with the ${first[2]}?`,correct:`Panel ${LABELS[firstIndex]}`,distractors:LABELS.filter((_,i)=>i!==firstIndex).map((x)=>`Panel ${x}`),index,operation:"match-first-picture-scene",evidence:`第一段完整描述對應圖 ${LABELS[firstIndex]}。`,assets}),
      makeQuestion({id:`ENG_R4_Q_LISTEN_${String(number).padStart(3,"0")}_02`,skillId:"ENG_R4_S311",stem:`After the earlier ${sceneFrame(first)} description, which panel matches the later ${sceneFrame(second)} scene where the ${second[2]} is ${second[3]} the table?`,correct:`Panel ${LABELS[secondIndex]}`,distractors:LABELS.filter((_,i)=>i!==secondIndex).map((x)=>`Panel ${x}`),index:index+1,operation:"match-second-picture-position",evidence:`第二段的物件與位置唯一對應圖 ${LABELS[secondIndex]}。`,assets}),
      makeQuestion({id:`ENG_R4_Q_LISTEN_${String(number).padStart(3,"0")}_03`,skillId:"ENG_R4_S316",stem:`Across the change from ${sceneFrame(first)} to ${sceneFrame(second)}, which object sequence is heard?`,correct:objectPairs[0],distractors:objectPairs.slice(1),index:index+2,operation:"integrate-two-scene-object-order",evidence:`音稿先說 ${first[2]}，再說 ${second[2]}。`,assets}),
    ],provenance:provenance("picture-sequence"),
  };
}

function dialoguePattern(pattern,variant){
  const a=NAMES[variant],b=NAMES[(variant+3)%10],place=PLACES[variant],otherPlace=PLACES[(variant+4)%10],time=TIMES[variant],day=DAYS[variant],item=ITEMS[variant];
  if(pattern===0)return {transcript:`${a}: Could you help me carry the ${item} to the ${place} before ${time}? ${b}: Sure. Should I take the long cart too? ${a}: Yes, please. It will keep everything together.`,topic:`a request to move the ${item} to the ${place}`,detail:place,result:`use the long cart for the ${item}`,wrongTopic:[`an invitation to display the ${item}`,`a complaint about the ${place}`,`a report that the ${item} was lost`],wrongDetail:[otherPlace,"the river park","a private home"],wrongResult:[`leave the ${item} outside`,`cancel the trip to the ${place}`,"throw the cart away"]};
  if(pattern===1)return {transcript:`${a}: I'm sorry I missed the practice on ${day}. My bus stopped for twenty minutes. ${b}: Thanks for telling me. I'll send you the notes tonight. ${a}: That will help me prepare for tomorrow.`,topic:`${a}'s apology for missing ${day} practice`,detail:`the bus stopped for twenty minutes on ${day}`,result:`${b} will send ${a} the notes tonight`,wrongTopic:[`${a}'s request to buy a bus`,`${b}'s argument about ${day}`,`${a}'s plan to stop practicing`],wrongDetail:[`the room was locked on ${day}`,`the notes were lost on ${day}`,`the practice ended early on ${day}`],wrongResult:[`${a} will miss tomorrow as well`,`${b} will delete every note`,`${a} will buy a new uniform`]};
  if(pattern===2)return {transcript:`${a}: Would you like to join the school show at the ${place} on ${day}? ${b}: Yes. What should I bring? ${a}: Bring the ${item}; we will use it in the opening scene.`,topic:`an invitation to the ${day} school show at the ${place}`,detail:`the ${place} show is on ${day}`,result:`bring the ${item}`,wrongTopic:[`a warning to avoid the ${place} show`,`a request for a ${place} refund`,`a lesson about ${place} bus safety`],wrongDetail:[`the ${place} show is on ${DAYS[(variant+2)%10]}`,`the ${place} show is on ${DAYS[(variant+5)%10]}`,`the ${place} show is on ${DAYS[(variant+7)%10]}`],wrongResult:[`bring nothing to the ${place}`,`sell the ${place} opening tickets`,`close the ${place} early`]};
  if(pattern===3)return {transcript:`${a}: Did you say page fourteen or page forty? ${b}: Page forty, and submit it by ${time}. ${a}: Thanks. I'll write forty in my planner so I don't confuse them again.`,topic:`clarifying page forty and the ${time} deadline`,detail:`page forty by ${time}`,result:time,wrongTopic:[`choosing a library book before ${time}`,`asking for a phone number at ${time}`,`changing a test answer after ${time}`],wrongDetail:[`page fourteen by ${time}`,`page four by ${time}`,`page forty-four by ${time}`],wrongResult:[TIMES[(variant+2)%10],TIMES[(variant+5)%10],"midnight"]};
  if(pattern===4){const price=120+variant*10;return {transcript:`${a}: Is this blue notebook available in a larger size? ${b}: Yes. The larger one costs ${price} dollars and includes a pocket. ${a}: Great. I'll take the larger one.`,topic:`${a}'s purchase of a larger blue notebook`,detail:`${price} dollars`,result:`${a} chooses the larger notebook`,wrongTopic:[`${a}'s return of a broken phone`,`${a}'s request for a free map`,`${a}'s order for a hot lunch`],wrongDetail:[`${price-10} dollars`,`${price+20} dollars`,`${price+50} dollars`],wrongResult:[`${a} chooses the smaller notebook`,`${a} leaves without a notebook`,`${a} buys a pocket only`]};}
  if(pattern===5)return {transcript:`${a}: How do I get to the ${place}? ${b}: Turn right at the bakery, walk past the bank, and it will be beside the post office. ${a}: So I turn at the bakery and look beside the post office.`,topic:`asking for directions to the ${place}`,detail:`turn right at the bakery to reach the ${place}`,result:`find the ${place} beside the post office`,wrongTopic:[`leaving the ${place} permanently`,`ordering bread for the ${place}`,`finding a train seat near the ${place}`],wrongDetail:[`turn left at the bank to reach the ${place}`,`cross at the school to reach the ${place}`,`stop before the bakery to reach the ${place}`],wrongResult:[`find the ${place} behind the bank`,`find the ${place} inside the bakery`,`find the ${place} across from the train`]};
  if(pattern===6)return {transcript:`${a}: Our meeting has moved from ${TIMES[(variant+1)%10]} to ${time} on ${day}. ${b}: Is the room still the ${place}? ${a}: Yes. Only the time changed because the coach has another class.`,topic:`moving the ${day} meeting to ${time}`,detail:time,result:place,wrongTopic:[`canceling the ${day} school year`,`holding a coach interview at ${time}`,`starting a room contest in the ${place}`],wrongDetail:[TIMES[(variant+1)%10],TIMES[(variant+4)%10],"six in the morning"],wrongResult:[otherPlace,"the bakery","the bus platform"]};
  if(pattern===7)return {transcript:`${a}: My throat hurts, and I feel tired. ${b}: Drink warm water and rest this afternoon. If you have a fever, call the health center. ${a}: I'll rest now and check my temperature.`,topic:`responding to ${a}'s health concern`,detail:`${a} should drink warm water and rest`,result:`${a} should call the health center if there is a fever`,wrongTopic:[`${a}'s training for a race`,`${a}'s plan for a noisy party`,`${a}'s order for cold drinks`],wrongDetail:[`${a} should run for an hour`,`${a} should skip all water`,`${a} should stay awake all night`],wrongResult:[`${a} should call only about homework`,`${a} should ignore the fever`,`${a} should visit the bookstore`]};
  if(pattern===8)return {transcript:`${a}: Our project needs a clearer ending. How about adding a short summary on ${day}? ${b}: Good idea. I can draft it, and you can check the examples. ${a}: Then we will review both parts together.`,topic:`improving the project ending on ${day}`,detail:`add a short summary on ${day}`,result:`review the ${day} summary and examples together`,wrongTopic:[`ending a friendship on ${day}`,`removing every example on ${day}`,`moving schools on ${day}`],wrongDetail:[`add an unrelated joke on ${day}`,`delete the opening on ${day}`,`change every fact on ${day}`],wrongResult:[`work without checking on ${day}`,`submit two separate projects on ${day}`,`avoid the examples on ${day}`]};
  return {transcript:`${a}: May I borrow the ${item} until ${day}? ${b}: Yes, but please return it to the ${place} before ${time}. ${a}: I will put the return time in my phone now.`,topic:`asking permission to borrow the ${item}`,detail:day,result:`return it to the ${place} before ${time}`,wrongTopic:["selling a borrowed item","reporting a broken bus","inviting someone to dinner"],wrongDetail:[DAYS[(variant+3)%10],DAYS[(variant+6)%10],"next year"],wrongResult:[`leave it at the ${otherPlace}`,"keep it forever","return only its label"]};
}

function responseItem(index){
  const local=index-100,pattern=Math.floor(local/10),variant=local%10,d=dialoguePattern(pattern,variant),number=index+1,id=`ENG_R4_LISTEN_${String(number).padStart(3,"0")}`;
  return {id,section:"response",transcript:d.transcript,spokenText:d.transcript,audioDescription:`A three-turn original dialogue about ${d.topic}.`,pauseMs:3000,voiceProfile:{voice:"Microsoft Zira Desktop",rate:-1},questions:[
    makeQuestion({id:`ENG_R4_Q_LISTEN_${String(number).padStart(3,"0")}_01`,skillId:"ENG_R4_S315",stem:"What is the main function of the first speaker's opening turn?",correct:d.topic,distractors:d.wrongTopic,index,operation:"identify-dialogue-opening-function",evidence:`開場直接建立 ${d.topic}。`}),
    makeQuestion({id:`ENG_R4_Q_LISTEN_${String(number).padStart(3,"0")}_02`,skillId:"ENG_R4_S316",stem:"Which detail is explicitly confirmed in the conversation?",correct:d.detail,distractors:d.wrongDetail,index:index+1,operation:"retrieve-confirmed-dialogue-detail",evidence:`對話明確說出 ${d.detail}。`}),
    makeQuestion({id:`ENG_R4_Q_LISTEN_${String(number).padStart(3,"0")}_03`,skillId:"ENG_R4_S320",stem:"What decision or next action do the speakers reach?",correct:d.result,distractors:d.wrongResult,index:index+2,operation:"integrate-dialogue-problem-and-decision",evidence:`最後兩輪共同確認 ${d.result}。`}),
  ],provenance:provenance("response-dialogue")};
}

const EVENT_NAMES=["Reading Picnic","River Clean-up","Family Science Day","Night Market Walk","Bike Safety Fair","Student Art Morning","Garden Exchange","Music Practice Day","Local Food Lab","History Photo Hour"];
const OBJECTS=["red folder","silver bottle","green scarf","small camera","black lunch bag","striped umbrella","blue helmet","wooden model","white notebook","yellow key case"];

function discoursePattern(pattern,variant){
  const event=EVENT_NAMES[variant],place=PLACES[variant],day=DAYS[variant],time=TIMES[variant],object=OBJECTS[variant],other=PLACES[(variant+4)%10];
  if(pattern===0)return {text:`Attention, students. ${event} will begin at ${time} on ${day} in the ${place}. Bring your student card and arrive ten minutes early. The side entrance is closed, so everyone must use the main door beside the office. Ask your homeroom teacher before noon if you need help.`,main:`announce arrangements for ${event}`,detail:time,action:`use the main door for ${event}`,wrongMain:[`sell cards for ${event}`,`cancel ${event}`,`describe last year's ${event}`],wrongDetail:[TIMES[(variant+3)%10],TIMES[(variant+6)%10],"midnight"],wrongAction:[`use the closed side entrance for ${event}`,`wait outside until night for ${event}`,`enter ${event} without a student card`]};
  if(pattern===1)return {text:`This is a weather update for ${place}. Heavy rain is expected after ${time}. Outdoor practice will end early, and the river path will close for the evening. Students walking home should use the station road, not the lower bridge. Families will receive another message if the warning changes.`,main:`give a weather warning and safer route for ${place}`,detail:`heavy rain after ${time}`,action:`use the station road when leaving ${place}`,wrongMain:[`invite ${place} families to a river race`,`report ${place}'s sports score`,`advertise a new bridge near ${place}`],wrongDetail:[`heavy rain before ${TIMES[(variant+2)%10]}`,`heavy rain next month`,`heavy rain at sunrise only`],wrongAction:[`use the lower bridge from ${place}`,`continue ${place} practice all night`,`wait beside the ${place} river`]};
  if(pattern===2)return {text:`Welcome to the ${event} tour at the ${place}. We will first visit the model room, then the photo hall, and finally the workshop. Photography is allowed in the first two rooms but not in the workshop. Keep your ticket because the guide will check it at the last door.`,main:`explain the route and rules for the ${event} tour`,detail:`the ${event} workshop`,action:`keep the ${event} ticket for the last door`,wrongMain:[`teach ${event} visitors to build a train`,`announce a menu for ${event}`,`sell cameras at the ${event} door`],wrongDetail:[`the ${event} model room`,`the ${event} photo hall`,`${event} at the ${other}`],wrongAction:[`throw away the ${event} ticket`,`take photos in every ${event} room`,`skip directly outside ${event}`]};
  if(pattern===3)return {text:`Route Seven passengers, please note a temporary change on ${day}. Buses will not stop at the ${place} because of road work. Use the stop beside the ${other} instead. The first changed service leaves at ${time}, and regular stops will return the following morning.`,main:`announce a temporary Route Seven change at the ${place}`,detail:other,action:`use the stop beside the ${other}`,wrongMain:[`open a bus museum at the ${place}`,`invite ${place} passengers to repair roads`,`change the ${place} route for a year`],wrongDetail:[place,"the river bridge","the airport"],wrongAction:[`wait at the closed ${place} stop`,`walk from ${place} into the road work area`,`return to ${place} the following year`]};
  if(pattern===4)return {text:`The ${event} club tested three ways to protect young plants. Covers blocked wind but also reduced light. A low wall stopped some wind without shading the leaves. Moving the plants indoors kept them warm but required more space. The club chose the low wall for the next two weeks.`,main:`compare plant-protection methods in the ${event} club`,detail:`the ${event} club chose the low wall`,action:`test the low wall for two weeks in ${event}`,wrongMain:[`explain how ${event} cooks plants`,`sell furniture through ${event}`,`announce a music contest called ${event}`],wrongDetail:[`the ${event} club chose the full cover`,`the ${event} club moved every plant indoors`,`the ${event} club used no protection`],wrongAction:[`remove all ${event} plants`,`block all ${event} light for a year`,`end the ${event} test immediately`]};
  if(pattern===5)return {text:`Starting on ${day}, the ${place} library will lend activity kits for seven days. Each kit contains a guide, two tools, and a return card. Borrowers must return every part together. Late kits cannot be renewed online, but staff can answer questions at the front desk before ${time}.`,main:`explain the ${place} library's activity-kit rule`,detail:`seven days at the ${place} library`,action:`return every ${place} kit part together`,wrongMain:[`advertise ${place} books for sale`,`close the ${place} library forever`,`teach an online ${place} game`],wrongDetail:[`one day at the ${place} library`,`thirty days at the ${place} library`,`one year at the ${place} library`],wrongAction:[`keep the ${place} tools and return the box`,`renew every late ${place} kit online`,`leave ${place} parts at different desks`]};
  if(pattern===6)return {text:`A ${object} was found near the ${place} after ${event} on ${day}. It contains no name, but one inside pocket has a bus map. The owner should describe one more item inside when claiming it. Please visit the school office before ${time}; do not post personal details online.`,main:`help return a found ${object} safely`,detail:`the ${object} contains a bus map`,action:`describe another item in the ${object} at the school office`,wrongMain:[`sell the ${object} online`,`plan another event with the ${object}`,`teach map drawing from the ${object}`],wrongDetail:[`the ${object} contains a passport`,`the ${object} contains a large camera`,`the ${object} contains a house key`],wrongAction:[`post every ${object} detail online`,`take the ${object} without a question`,`wait with the ${object} at a private home`]};
  if(pattern===7)return {text:`For the ${event} class test at the ${place} on ${day}, place one dry paper strip in each cup. Add warm water to the first cup and cold water to the second. Check both strips after five minutes and record any change. Do not move the cups while waiting, because movement would add another difference to the test.`,main:`give controlled-test steps for ${event}`,detail:`after five minutes during ${event}`,action:`keep the ${event} cups still while waiting`,wrongMain:[`announce a lunch called ${event}`,`compare ${event} ticket prices`,`invite students to a ${event} concert`],wrongDetail:[`after one hour during ${event}`,`before adding water during ${event}`,`the week after ${event}`],wrongAction:[`shake both ${event} cups`,`move one ${event} cup outside`,`mix the two ${event} cups together`]};
  if(pattern===8)return {text:`The ${event} opens at ${time} on ${day} at the ${place}. Visitors may bring reusable cups, but glass containers are not allowed. The free workshop has twenty seats, and registration closes when those seats are filled. Bicycles should be parked beside the east gate, away from the walking path.`,main:`provide visitor rules for ${event}`,detail:`the ${event} workshop has twenty seats`,action:`park ${event} bicycles beside the east gate`,wrongMain:[`report last year's ${event}`,`sell glass containers at ${event}`,`close every ${event} walking path`],wrongDetail:[`the ${event} workshop has ten seats`,`the ${event} workshop has forty seats`,`the ${event} workshop has one hundred seats`],wrongAction:[`park ${event} bicycles on the walking path`,`bring glass containers to ${event}`,`enter ${event} after registration closes`]};
  return {text:`A social post says the new ${object} keeps drinks cold for two days, but it gives no test method or source. A store page repeats the claim and links only to the same post. Before sharing it, compare an independent test, check the conditions, and avoid treating repeated wording as new evidence.`,main:`warn listeners to verify the ${object} claim`,detail:`the ${object} claim has no test method or source`,action:`look for an independent test of the ${object}`,wrongMain:[`prove the ${object} claim is certainly true`,`announce a ${object} sale`,`teach listeners to copy the ${object} post`],wrongDetail:[`the ${object} has three independent studies`,`the ${object} has a complete test table`,`the ${object} names two researchers`],wrongAction:[`count repeated ${object} wording as new evidence`,`share the ${object} claim immediately`,`ignore the ${object} testing conditions`]};
}

function discourseItem(index){
  const local=index-200,pattern=Math.floor(local/10),variant=local%10,d=discoursePattern(pattern,variant),number=index+1,id=`ENG_R4_LISTEN_${String(number).padStart(3,"0")}`;
  return {id,section:"discourse",transcript:d.text,spokenText:d.text,audioDescription:`An original public message or short explanation whose purpose is to ${d.main}.`,pauseMs:3500,voiceProfile:{voice:"Microsoft Zira Desktop",rate:-1},questions:[
    makeQuestion({id:`ENG_R4_Q_LISTEN_${String(number).padStart(3,"0")}_01`,skillId:pattern===9?"ENG_R4_S317":"ENG_R4_S319",stem:"What is the main purpose of this spoken message?",correct:d.main,distractors:d.wrongMain,index,operation:"identify-spoken-message-purpose",evidence:`整段資訊都用來 ${d.main}。`}),
    makeQuestion({id:`ENG_R4_Q_LISTEN_${String(number).padStart(3,"0")}_02`,skillId:"ENG_R4_S318",stem:"Which detail is stated in the recording?",correct:d.detail,distractors:d.wrongDetail,index:index+1,operation:"retrieve-spoken-detail",evidence:`音稿明確說出 ${d.detail}。`}),
    makeQuestion({id:`ENG_R4_Q_LISTEN_${String(number).padStart(3,"0")}_03`,skillId:pattern===9?"ENG_R4_S317":"ENG_R4_S319",stem:"What should the listener do according to the recording?",correct:d.action,distractors:d.wrongAction,index:index+2,operation:"apply-announced-action-or-restriction",evidence:`指示或結論要求聽者 ${d.action}。`}),
  ],provenance:provenance("discourse-message")};
}

function materialize(index){
  if(index<100)return pictureItem(index);
  if(index<200)return responseItem(index);
  return discourseItem(index);
}

export function defineListeningBatch(start,end){
  assert(Number.isInteger(start)&&Number.isInteger(end)&&start>=1&&end<=300&&start<=end);
  return Array.from({length:end-start+1},(_,offset)=>materialize(start-1+offset));
}

export const ENGLISH_LISTENING_SOURCE_AUDIT={count:300,sections:{picture:100,response:100,discourse:100},visualBoards:BOARDS.length,lockedScripts:true,original:true};
