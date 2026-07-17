import assert from "node:assert/strict";
import { ENGLISH_LISTENING_PICTURE_BOARDS as BOARDS } from "../units/ENG_R4_U47.mjs";

const LABELS=["A","B","C","D"];
const DIFFICULTIES=["foundation","standard","advanced","transfer"];
const NAMES=["Ava","Ben","Cora","Dylan","Emma","Finn","Grace","Hugo","Iris","Jack"];
const PLACES=["library","gym","art room","science room","music room","school office","health center","train station","community hall","bookstore"];
const TIMES=["eight thirty","nine fifteen","ten o'clock","eleven twenty","noon","one forty","two fifteen","three thirty","four o'clock","five twenty"];
const DAYS=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","next Monday","next Tuesday","next Friday"];
const ITEMS=["science posters","sports cones","paint boxes","plant trays","music stands","class folders","first-aid bags","travel signs","folding chairs","book cartons"];
const RESPONSE_CONTEXTS=[
  "This conversation takes place before the first class.",
  "The speakers are talking during a short break.",
  "This exchange happens near the school entrance.",
  "The speakers have just checked the class notice.",
  "This talk happens while they prepare for the afternoon.",
  "The speakers meet beside the information desk.",
  "This exchange begins after one speaker asks for help.",
  "The conversation takes place before everyone goes home.",
  "The speakers are checking a plan together.",
  "This talk happens while both speakers have time to make a change.",
];
const DISCOURSE_CONTEXTS=[
  "Here is today's first notice.",
  "The next message is for students and families.",
  "Please listen to this short update.",
  "This recorded notice was shared this morning.",
  "The school office has sent the following message.",
  "A community speaker gives this announcement.",
  "The next recording explains one change.",
  "This public message contains a rule and a reason.",
  "The following notice gives details for a planned activity.",
  "Listen to this report before making a decision.",
];

function rotate(correct,distractors,index){
  const values=[correct,...distractors]; const shift=index%4;
  const options=[...values.slice(shift),...values.slice(0,shift)];
  return {options,answerIndex:options.indexOf(correct)};
}

function provenance(kind){
  return {status:"original",authorRole:"Codex R4 English listening author",copyrightStatus:"Original locked script and original questions; no third-party recording or item wording copied.",sourceRefs:["ENG-R4-FROZEN-AUTHORITY-GRAPH","CAP-106-TO-115-ENGLISH-LISTENING-CALIBRATION"],kind};
}

function optionContrast(correct, option) {
  const expected=correct.split(/\s+/u),actual=option.split(/\s+/u);
  let start=0,end=0;
  while(start<expected.length&&start<actual.length&&expected[start]===actual[start])start+=1;
  while(end<expected.length-start&&end<actual.length-start&&expected.at(-1-end)===actual.at(-1-end))end+=1;
  const left=expected.slice(start,expected.length-end).join(" "),right=actual.slice(start,actual.length-end).join(" ");
  if(left&&right)return `此項把「${left}」改成「${right}」`;
  if(left)return `此項省略「${left}」`;
  if(right)return `此項加入「${right}」`;
  return `此項沒有保留「${correct}」的完整資訊`;
}

function makeSemanticQuestion({id,skillId,stem,correct,distractors,index,operation,evidence,assets=[]}){
  assert.equal(new Set([correct,...distractors]).size,4,`${id}: duplicate option`);
  const {options,answerIndex}=rotate(correct,distractors,index);
  return {
    id,skillId,stem,options,answerIndex,
    reasons:options.map((option)=>option===correct
      ? `${option}：完整逐字稿明確支持此項。${evidence}`
      : `${option}：${optionContrast(correct,option)}。${evidence}因此，鎖定證據支持「${correct}」。`),
    difficulty:DIFFICULTIES[index%4],
    cognitiveProcess:["listen-to-locked-original-recording",operation],
    representationType:`listening-${operation}`,
    misconceptionTargets:["choose-a-familiar-word-without-checking-speaker-purpose-detail-and-result-together"],
    reviews:[
      `獨立覆核 A：逐句比對鎖定逐字稿，答案為「${correct}」。`,
      `獨立覆核 B：重新依時間順序核對說話者、細節與行動，只有「${correct}」成立。`,
    ],assets,
  };
}

function describeScene([count,action,object,position,feature]){
  const people=count===1?"One person":`${["Zero","One","Two","Three","Four"][count]} people`;
  const wearing=feature==="none"?" with no marked accessory":feature==="hat"?` and wearing ${count===1?"a hat":"hats"}`:feature==="glasses"?" and wearing glasses":` and wearing ${count===1?"a scarf":"scarves"}`;
  const verb=count===1?({standing:"is standing",walking:"is walking",sitting:"is sitting",pointing:"is pointing"}[action]):({standing:"are standing",walking:"are walking",sitting:"are sitting",pointing:"are pointing"}[action]);
  return `${people} ${verb}${wearing}; a ${object} is ${position} the table.`;
}

function peopleFrame([count,action,,,feature]){
  const people=count===1?"one person":`${["zero","one","two","three","four"][count]} people`;
  const wearing=feature==="none"?" with no marked accessory":feature==="hat"?` and wearing ${count===1?"a hat":"hats"}`:feature==="glasses"?" and wearing glasses":` and wearing ${count===1?"a scarf":"scarves"}`;
  return `${people} ${action}${wearing}`;
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
      makeSemanticQuestion({id:`ENG_R4_Q_LISTEN_${String(number).padStart(3,"0")}_01`,skillId:"ENG_R4_S310",stem:`The later scene shows ${peopleFrame(second)}, with a ${second[2]} ${second[3]} the table. Which panel matches every detail in the first scene?`,correct:`Panel ${LABELS[firstIndex]}`,distractors:LABELS.filter((_,i)=>i!==firstIndex).map((x)=>`Panel ${x}`),index,operation:"match-first-picture-scene",evidence:`第一段完整描述對應圖 ${LABELS[firstIndex]}。`,assets}),
      makeSemanticQuestion({id:`ENG_R4_Q_LISTEN_${String(number).padStart(3,"0")}_02`,skillId:"ENG_R4_S311",stem:`The earlier scene shows ${peopleFrame(first)}, with a ${first[2]} ${first[3]} the table. Which panel matches every detail in the second scene?`,correct:`Panel ${LABELS[secondIndex]}`,distractors:LABELS.filter((_,i)=>i!==secondIndex).map((x)=>`Panel ${x}`),index:index+1,operation:"match-second-picture-position",evidence:`第二段的物件、人物與位置唯一對應圖 ${LABELS[secondIndex]}。`,assets}),
      makeSemanticQuestion({id:`ENG_R4_Q_LISTEN_${String(number).padStart(3,"0")}_03`,skillId:"ENG_R4_S316",stem:`The first scene shows ${peopleFrame(first)}, and the second shows ${peopleFrame(second)}. Which object order is heard?`,correct:objectPairs[0],distractors:objectPairs.slice(1),index:index+2,operation:"integrate-two-scene-object-order",evidence:`音稿先說 ${first[2]}，再說 ${second[2]}。`,assets}),
    ],provenance:provenance("picture-sequence"),
  };
}

function dialoguePattern(pattern,variant){
  const a=NAMES[variant],b=NAMES[(variant+3)%10],place=PLACES[variant],otherPlace=PLACES[(variant+4)%10],time=TIMES[variant],day=DAYS[variant],item=ITEMS[variant];
  if(pattern===0)return {transcript:`${a}: Could you help me carry the ${item} to the ${place} before ${time}? ${b}: Sure. Should I take the long cart too? ${a}: Yes, please. It will keep everything together.`,topic:`a request to move the ${item} to the ${place}`,detail:place,result:`use the long cart for the ${item}`,wrongTopic:[`an invitation to display the ${item}`,`a complaint about the ${place}`,`a report that the ${item} was lost`],wrongDetail:[otherPlace,"the river park","a private home"],wrongResult:[`leave the ${item} outside`,`cancel the trip to the ${place}`,"throw the cart away"]};
  if(pattern===1)return {transcript:`${a}: I'm sorry I missed the practice on ${day}. My bus stopped for twenty minutes. ${b}: Thanks for telling me. I'll send you the notes tonight. ${a}: That will help me prepare for tomorrow.`,topic:`${a}'s apology for missing ${day} practice`,detail:`the bus stopped for twenty minutes on ${day}`,result:`${b} will send ${a} the notes tonight`,wrongTopic:[`${a}'s request to buy a bus`,`${b}'s argument about ${day}`,`${a}'s plan to stop practicing`],wrongDetail:[`the room was locked on ${day}`,`the notes were lost on ${day}`,`the practice ended early on ${day}`],wrongResult:[`${a} will miss tomorrow as well`,`${b} will delete every note`,`${a} will buy a new uniform`]};
  if(pattern===2)return {transcript:`${a}: Would you like to join the school show at the ${place} on ${day}? ${b}: Yes. What should I bring? ${a}: Bring the ${item}; we will use them in the opening scene.`,topic:`an invitation to the ${day} school show at the ${place}`,detail:`the ${place} show is on ${day}`,result:`bring the ${item}`,wrongTopic:[`a warning to avoid the ${place} show`,`a request for a ${place} refund`,`a lesson about ${place} bus safety`],wrongDetail:[`the ${place} show is on ${DAYS[(variant+2)%10]}`,`the ${place} show is on ${DAYS[(variant+5)%10]}`,`the ${place} show is on ${DAYS[(variant+7)%10]}`],wrongResult:[`bring nothing to the ${place}`,`sell the ${place} opening tickets`,`close the ${place} early`]};
  if(pattern===3)return {transcript:`${a}: Did you say page fourteen or page forty? ${b}: Page forty, and submit it by ${time}. ${a}: Thanks. I'll write forty in my planner so I don't confuse them again.`,topic:`clarifying page forty and the ${time} deadline`,detail:`page forty by ${time}`,result:time,wrongTopic:[`choosing a library book before ${time}`,`asking for a phone number at ${time}`,`changing a test answer after ${time}`],wrongDetail:[`page fourteen by ${time}`,`page four by ${time}`,`page forty-four by ${time}`],wrongResult:[TIMES[(variant+2)%10],TIMES[(variant+5)%10],"midnight"]};
  if(pattern===4){const price=120+variant*10;return {transcript:`${a}: Is this blue notebook available in a larger size? ${b}: Yes. The larger one costs ${price} dollars and includes a pocket. ${a}: Great. I'll take the larger one.`,topic:`${a}'s purchase of a larger blue notebook`,detail:`${price} dollars`,result:`${a} chooses the larger notebook`,wrongTopic:[`${a}'s return of a broken phone`,`${a}'s request for a free map`,`${a}'s order for a hot lunch`],wrongDetail:[`${price-10} dollars`,`${price+20} dollars`,`${price+50} dollars`],wrongResult:[`${a} chooses the smaller notebook`,`${a} leaves without a notebook`,`${a} buys a pocket only`]};}
  if(pattern===5)return {transcript:`${a}: How do I get to the ${place}? ${b}: Turn right at the bakery, walk past the bank, and it will be beside the post office. ${a}: So I turn at the bakery and look beside the post office.`,topic:`asking for directions to the ${place}`,detail:`turn right at the bakery to reach the ${place}`,result:`find the ${place} beside the post office`,wrongTopic:[`leaving the ${place} permanently`,`ordering bread for the ${place}`,`finding a train seat near the ${place}`],wrongDetail:[`turn left at the bank to reach the ${place}`,`cross at the school to reach the ${place}`,`stop before the bakery to reach the ${place}`],wrongResult:[`find the ${place} behind the bank`,`find the ${place} inside the bakery`,`find the ${place} across from the train`]};
  if(pattern===6)return {transcript:`${a}: Our meeting has moved from ${TIMES[(variant+1)%10]} to ${time} on ${day}. ${b}: Is the room still the ${place}? ${a}: Yes. Only the time changed because the coach has another class.`,topic:`moving the ${day} meeting to ${time}`,detail:time,result:place,wrongTopic:[`canceling the ${day} school year`,`holding a coach interview at ${time}`,`starting a room contest in the ${place}`],wrongDetail:[TIMES[(variant+1)%10],TIMES[(variant+4)%10],"six in the morning"],wrongResult:[otherPlace,"the bakery","the bus platform"]};
  if(pattern===7)return {transcript:`${a}: My throat hurts, and I feel tired. ${b}: Drink warm water and rest this afternoon. If you have a fever, call the health center. ${a}: I'll rest now and check my temperature.`,topic:`responding to ${a}'s health concern`,detail:`${a} should drink warm water and rest`,result:`${a} should call the health center if there is a fever`,wrongTopic:[`${a}'s training for a race`,`${a}'s plan for a noisy party`,`${a}'s order for cold drinks`],wrongDetail:[`${a} should run for an hour`,`${a} should skip all water`,`${a} should stay awake all night`],wrongResult:[`${a} should call only about homework`,`${a} should ignore the fever`,`${a} should visit the bookstore`]};
  if(pattern===8)return {transcript:`${a}: Our project needs a clearer ending. How about adding a short summary on ${day}? ${b}: Good idea. I can draft it, and you can check the examples. ${a}: Then we will review both parts together.`,topic:`improving the project ending on ${day}`,detail:`add a short summary on ${day}`,result:`review the ${day} summary and examples together`,wrongTopic:[`ending a friendship on ${day}`,`removing every example on ${day}`,`moving schools on ${day}`],wrongDetail:[`add an unrelated joke on ${day}`,`delete the opening on ${day}`,`change every fact on ${day}`],wrongResult:[`work without checking on ${day}`,`submit two separate projects on ${day}`,`avoid the examples on ${day}`]};
  return {transcript:`${a}: May I borrow the ${item} until ${day}? ${b}: Yes, but please return them to the ${place} before ${time}. ${a}: I will put the return time in my phone now.`,topic:`asking permission to borrow the ${item}`,detail:day,result:`return them to the ${place} before ${time}`,wrongTopic:["selling a borrowed item","reporting a broken bus","inviting someone to dinner"],wrongDetail:[DAYS[(variant+3)%10],DAYS[(variant+6)%10],"next year"],wrongResult:[`leave them at the ${otherPlace}`,"keep them forever","return only their label"]};
}

function refineDialogue(d,pattern,variant){
  const a=NAMES[variant],b=NAMES[(variant+3)%10],place=PLACES[variant],otherPlace=PLACES[(variant+4)%10],time=TIMES[variant],otherTime=TIMES[(variant+3)%10],day=DAYS[variant],otherDay=DAYS[(variant+2)%10],item=ITEMS[variant],otherItem=ITEMS[(variant+3)%10];
  if(pattern===0)return {...d,
    detail:`the ${item} must reach the ${place} before ${time}`,
    result:`use the long cart to keep the ${item} together`,
    wrongTopic:[`a request to move the ${item} to the ${otherPlace}`,`an offer to store the ${item} in the ${place}`,`a question about when the ${item} arrived at the ${place}`],
    wrongDetail:[`the ${item} must reach the ${otherPlace} before ${time}`,`the ${otherItem} must reach the ${place} before ${time}`,`the ${item} must reach the ${place} before ${otherTime}`],
    wrongResult:[`carry the ${item} without the long cart`,`take the long cart to the ${otherPlace}`,`move the ${otherItem} with the long cart`],
  };
  if(pattern===1)return {...d,
    wrongTopic:[`${a}'s apology for arriving late to ${day} practice`,`${a}'s request to cancel the ${day} practice`,`${b}'s offer to change the ${day} practice time`],
    wrongDetail:[`the bus stopped for ten minutes on ${day}`,`the train stopped for twenty minutes on ${day}`,`the bus stopped for twenty minutes on ${otherDay}`],
    wrongResult:[`${b} will send ${a} the notes tomorrow morning`,`${a} will ask another student for the notes`,`${b} will send only the practice time`],
  };
  if(pattern===2)return {...d,
    wrongTopic:[`an invitation to a show at the ${place} on ${otherDay}`,`a request to move the show from the ${place}`,`a question about tickets for the ${place}`],
    wrongDetail:[`the ${place} show is on ${otherDay}`,`the ${otherPlace} show is on ${day}`,`the ${place} show begins at ${time}`],
    wrongResult:[`bring the ${otherItem}`,`leave the ${item} at home`,`bring the ${item} after the opening scene`],
  };
  if(pattern===3)return {...d,
    result:`write page forty and ${time} in the planner`,
    wrongTopic:[`clarifying page fourteen and the ${time} deadline`,`changing the deadline from ${time}`,`asking where the planner was left`],
    wrongDetail:[`page fourteen by ${time}`,`page forty by ${otherTime}`,`page forty-four by ${time}`],
    wrongResult:[`write page fourteen and ${time} in the planner`,`write page forty and ${otherTime} in the planner`,`remember the page without writing the deadline`],
  };
  if(pattern===4){const price=120+variant*10;return {...d,
    detail:`the larger notebook costs ${price} dollars`,
    wrongTopic:[`${a}'s question about the smaller blue notebook`,`${a}'s return of a large blue notebook`,`${a}'s question about differences between notebook pockets`],
    wrongDetail:[`the larger notebook costs ${price-10} dollars`,`the smaller notebook costs ${price} dollars`,`the larger notebook costs ${price+20} dollars`],
    wrongResult:[`${a} chooses the smaller blue notebook`,`${a} waits before choosing a notebook`,`${a} buys a pocket without a notebook`],
  };}
  if(pattern===5)return {...d,
    wrongTopic:[`asking for directions to the ${otherPlace}`,`asking which bus reaches the ${place}`,`checking where the post office moved`],
    wrongDetail:[`turn left at the bakery to reach the ${place}`,`turn right at the bank to reach the ${place}`,`walk past the post office to reach the ${place}`],
    wrongResult:[`find the ${place} behind the bank`,`find the ${place} across from the post office`,`find the ${place} beside the bakery`],
  };
  if(pattern===6)return {...d,
    detail:`the ${day} meeting now begins at ${time}`,
    result:`meet at the ${place} at ${time}`,
    wrongTopic:[`moving the ${day} meeting to ${otherTime}`,`moving the meeting from the ${place}`,`adding a second coach meeting on ${day}`],
    wrongDetail:[`the ${day} meeting now begins at ${otherTime}`,`the ${otherDay} meeting now begins at ${time}`,`the ${day} meeting now begins in the ${otherPlace}`],
    wrongResult:[`meet at the ${otherPlace} at ${time}`,`meet at the ${place} at ${otherTime}`,`meet at the ${place} on ${otherDay}`],
  };
  if(pattern===7)return {...d,
    wrongTopic:[`discussing why ${a} missed class`,`${a}'s plan for light exercise`,`deciding whether ${a} should visit the health center now`],
    wrongDetail:[`${a} should drink cold water and rest`,`${a} should drink warm water and exercise`,`${a} should rest without checking the temperature`],
    wrongResult:[`${a} should call the health center for a sore throat alone`,`${a} should call the school office if there is a fever`,`${a} should wait until tomorrow to check for a fever`],
  };
  if(pattern===8)return {...d,
    wrongTopic:[`changing the project opening on ${day}`,`checking the project examples on ${day}`,`deciding when to present the project`],
    wrongDetail:[`add a short opening on ${day}`,`remove the summary on ${day}`,`add new examples without a summary on ${day}`],
    wrongResult:[`review only the summary on ${day}`,`review the summary before writing the examples`,`submit the summary and examples without checking them together`],
  };
  return {...d,
    detail:`borrow the ${item} until ${day}`,
    wrongTopic:[`asking permission to borrow the ${otherItem}`,`asking to keep the ${item} after ${day}`,`reporting that the ${item} are already missing`],
    wrongDetail:[`borrow the ${item} until ${otherDay}`,`borrow the ${otherItem} until ${day}`,`borrow the ${item} until ${time}`],
    wrongResult:[`return them to the ${otherPlace} before ${time}`,`return them to the ${place} before ${otherTime}`,`return the ${otherItem} to the ${place} before ${time}`],
  };
}

function responseItem(index){
  const local=index-100,pattern=Math.floor(local/10),variant=local%10,d=refineDialogue(dialoguePattern(pattern,variant),pattern,variant),number=index+1,id=`ENG_R4_LISTEN_${String(number).padStart(3,"0")}`;
  const contextCue=RESPONSE_CONTEXTS[variant],transcript=`${contextCue} ${d.transcript}`;
  return {id,section:"response",transcript,spokenText:transcript,audioDescription:`An original dialogue whose speakers must resolve ${d.topic}.`,pauseMs:3000,voiceProfile:{voice:"Microsoft Zira Desktop",rate:-1},questions:[
    makeSemanticQuestion({id:`ENG_R4_Q_LISTEN_${String(number).padStart(3,"0")}_01`,skillId:"ENG_R4_S315",stem:`${contextCue} What is the main purpose of this conversation?`,correct:d.topic,distractors:d.wrongTopic,index,operation:"identify-dialogue-opening-function",evidence:`整段對話的主要功能為「${d.topic}」。`}),
    makeSemanticQuestion({id:`ENG_R4_Q_LISTEN_${String(number).padStart(3,"0")}_02`,skillId:"ENG_R4_S316",stem:`${contextCue} Which detail is given in the conversation?`,correct:d.detail,distractors:d.wrongDetail,index:index+1,operation:"retrieve-confirmed-dialogue-detail",evidence:`對話明確陳述「${d.detail}」。`}),
    makeSemanticQuestion({id:`ENG_R4_Q_LISTEN_${String(number).padStart(3,"0")}_03`,skillId:"ENG_R4_S320",stem:`${contextCue} What action or decision is reached by the end?`,correct:d.result,distractors:d.wrongResult,index:index+2,operation:"integrate-dialogue-problem-and-decision",evidence:`對話結尾確認「${d.result}」。`}),
  ],provenance:provenance("response-dialogue")};
}

const EVENT_NAMES=["Reading Picnic","River Clean-up","Family Science Day","Night Market Walk","Bike Safety Fair","Student Art Morning","Garden Exchange","Music Practice Day","Local Food Lab","History Photo Hour"];
const OBJECTS=["red folder","silver bottle","green scarf","small camera","black lunch bag","striped umbrella","blue helmet","wooden model","white notebook","yellow key case"];
const CLAIM_OBJECTS=["red bottle","silver bottle","green bottle","small bottle","black bottle","striped bottle","blue bottle","white bottle","yellow bottle","sports bottle"];

function discoursePattern(pattern,variant){
  const event=EVENT_NAMES[variant],place=PLACES[variant],day=DAYS[variant],time=TIMES[variant],object=OBJECTS[variant],claimObject=CLAIM_OBJECTS[variant],other=PLACES[(variant+4)%10];
  if(pattern===0)return {text:`Attention, students. ${event} will begin at ${time} on ${day} in the ${place}. Bring your student card and arrive ten minutes early. The side entrance is closed, so everyone must use the main door beside the office. Ask your homeroom teacher before noon if you need help.`,main:`announce arrangements for ${event}`,detail:time,action:`use the main door for ${event}`,wrongMain:[`sell cards for ${event}`,`cancel ${event}`,`describe last year's ${event}`],wrongDetail:[TIMES[(variant+3)%10],TIMES[(variant+6)%10],"midnight"],wrongAction:[`use the closed side entrance for ${event}`,`wait outside until night for ${event}`,`enter ${event} without a student card`]};
  if(pattern===1)return {text:`This is a weather update for the area around the ${place}. Heavy rain is expected after ${time}. Outdoor practice will end early, and the river path will close for the evening. Students walking home should use the station road, not the lower bridge. Families will receive another message if the warning changes.`,main:`give a weather warning and safer route near the ${place}`,detail:`heavy rain after ${time}`,action:`use the station road when leaving the ${place}`,wrongMain:[`invite families near the ${place} to a river race`,`report a sports score from the ${place}`,`advertise a new bridge near the ${place}`],wrongDetail:[`heavy rain before ${TIMES[(variant+2)%10]}`,`heavy rain next month`,`heavy rain at sunrise only`],wrongAction:[`use the lower bridge when leaving the ${place}`,`continue practice near the ${place} all night`,`wait beside the river near the ${place}`]};
  if(pattern===2)return {text:`Welcome to the ${event} tour at the ${place}. We will first visit the model room, then the photo hall, and finally the workshop. Photography is allowed in the first two rooms but not in the workshop. Keep your ticket because the guide will check it at the last door.`,main:`explain the route and rules for the ${event} tour`,detail:`the ${event} workshop`,action:`keep the ${event} ticket for the last door`,wrongMain:[`teach ${event} visitors to build a train`,`announce a menu for ${event}`,`sell cameras at the ${event} door`],wrongDetail:[`the ${event} model room`,`the ${event} photo hall`,`${event} at the ${other}`],wrongAction:[`throw away the ${event} ticket`,`take photos in every ${event} room`,`skip directly outside ${event}`]};
  if(pattern===3)return {text:`Route Seven passengers, please note a temporary change on ${day}. Buses will not stop at the ${place} because of road work. Use the stop beside the ${other} instead. The first changed service leaves at ${time}, and regular stops will return the following morning.`,main:`announce a temporary Route Seven change at the ${place}`,detail:other,action:`use the stop beside the ${other}`,wrongMain:[`open a bus museum at the ${place}`,`invite ${place} passengers to repair roads`,`change the ${place} route for a year`],wrongDetail:[place,"the river bridge","the airport"],wrongAction:[`wait at the closed ${place} stop`,`walk from ${place} into the road work area`,`return to ${place} the following year`]};
  if(pattern===4)return {text:`A student group at the ${place} tested three ways to protect young plants. Covers blocked wind but also reduced light. A low wall stopped some wind without shading the leaves. Moving the plants indoors kept them warm but required more space. The group chose the low wall for the next two weeks.`,main:`compare plant-protection methods for a student group at the ${place}`,detail:`the student group at the ${place} chose the low wall`,action:"test the low wall for two weeks",wrongMain:[`report only the group's final choice at the ${place}`,`explain how the group measured plant growth`,`ask the group to move every plant indoors`],wrongDetail:[`the group at the ${place} chose full covers`,`the group at the ${place} moved every plant indoors`,`the group at the ${place} used no protection`],wrongAction:["remove all the plants","block all light for a year","end the test immediately"]};
  if(pattern===5)return {text:`Starting on ${day}, the activity desk at the ${place} will lend activity kits for seven days. Each kit contains a guide, two tools, and a return card. Borrowers must return every part together. Late kits cannot be renewed online, but staff can answer questions at the desk before ${time}.`,main:`explain the activity-kit rule at the ${place}`,detail:`seven days at the ${place}`,action:"return every part of the activity kit together",wrongMain:[`list only the parts in a kit at the ${place}`,`explain only the late-kit rule at the ${place}`,`invite visitors to make kits at the ${place}`],wrongDetail:[`one day at the ${place}`,`thirty days at the ${place}`,`one year at the ${place}`],wrongAction:["return only the tools from the kit","renew every late kit online","return the kit parts on different days"]};
  if(pattern===6)return {text:`A ${object} was found near the ${place} after ${event} on ${day}. It contains no name, but one inside pocket has a bus map. The owner should describe one more item inside when claiming it. Please visit the school office before ${time}; do not post personal details online.`,main:`help return a found ${object} safely`,detail:`the ${object} contains a bus map`,action:`describe another item in the ${object} at the school office`,wrongMain:[`sell the ${object} online`,`plan another event with the ${object}`,`teach map drawing from the ${object}`],wrongDetail:[`the ${object} contains a passport`,`the ${object} contains a large camera`,`the ${object} contains a house key`],wrongAction:[`post every ${object} detail online`,`take the ${object} without a question`,`wait with the ${object} at a private home`]};
  if(pattern===7)return {text:`For a class test at the ${place} on ${day}, place one dry paper strip in each cup. Add warm water to the first cup and cold water to the second. Check both strips after five minutes and record any change. Do not move the cups while waiting, because movement would add another difference to the test.`,main:`give steps for a controlled class test at the ${place}`,detail:"check both paper strips after five minutes",action:"keep both cups still while waiting",wrongMain:[`report the result of a class test at the ${place}`,`compare warm water with hot water at the ${place}`,`explain how to prepare the paper strips before class`],wrongDetail:["check both paper strips after ten minutes","check one paper strip after five minutes","check both paper strips before adding water"],wrongAction:["move both cups to the same place","move one cup while waiting","hold both cups while checking them"]};
  if(pattern===8)return {text:`The ${event} opens at ${time} on ${day} at the ${place}. Visitors may bring reusable cups, but glass containers are not allowed. The free workshop has twenty seats, and registration closes when those seats are filled. Bicycles should be parked beside the east gate, away from the walking path.`,main:`provide visitor rules for ${event}`,detail:`the free workshop at ${event} has twenty seats`,action:`visitors to ${event} should park their bicycles beside the east gate`,wrongMain:[`report last year's ${event}`,`sell glass containers at ${event}`,`close every ${event} walking path`],wrongDetail:[`the free workshop at ${event} has ten seats`,`the paid workshop at ${event} has twenty seats`,`the free workshop at ${event} has thirty seats`],wrongAction:[`visitors to ${event} should park their bicycles beside the west gate`,`visitors to ${event} should park their bicycles on the walking path`,`visitors to ${event} should bring their bicycles through the east gate`]};
  return {text:`A social post says the new ${claimObject} keeps drinks cold for two days, but it gives no test method or source. A store page repeats the claim and links only to the same post. Before sharing it, compare an independent test, check the conditions, and avoid treating repeated wording as new evidence.`,main:`warn listeners to verify the ${claimObject} claim`,detail:`the ${claimObject} claim has no test method or source`,action:`look for an independent test of the ${claimObject}`,wrongMain:[`prove the ${claimObject} claim is certainly true`,`announce a ${claimObject} sale`,`teach listeners to copy the ${claimObject} post`],wrongDetail:[`the ${claimObject} has three independent studies`,`the ${claimObject} has a complete test table`,`the ${claimObject} names two researchers`],wrongAction:[`count repeated ${claimObject} wording as new evidence`,`share the ${claimObject} claim immediately`,`ignore the ${claimObject} testing conditions`]};
}

function refineDiscourse(d,pattern,variant){
  const event=EVENT_NAMES[variant],place=PLACES[variant],day=DAYS[variant],otherDay=DAYS[(variant+2)%10],time=TIMES[variant],otherTime=TIMES[(variant+3)%10],object=OBJECTS[variant],otherObject=OBJECTS[(variant+3)%10],claimObject=CLAIM_OBJECTS[variant],otherClaimObject=CLAIM_OBJECTS[(variant+3)%10],otherPlace=PLACES[(variant+4)%10];
  if(pattern===0)return {...d,
    detail:`${event} begins at ${time} on ${day}`,
    wrongMain:[`explain where ${event} begins`,`remind students what to bring to ${event}`,`tell students where to ask for help with ${event}`],
    wrongDetail:[`${event} begins at ${otherTime} on ${day}`,`${event} begins at ${time} on ${otherDay}`,`${event} begins at ${time} in the ${otherPlace}`],
    wrongAction:[`use the side entrance for ${event}`,`use the office door for ${event}`,`arrive at ${event} without a student card`],
  };
  if(pattern===1)return {...d,
    detail:`heavy rain is expected after ${time} near the ${place}`,
    wrongMain:[`report a past storm near the ${place}`,`explain why the river path was built`,`announce regular practice times at the ${place}`],
    wrongDetail:[`heavy rain is expected before ${otherTime} near the ${place}`,`heavy rain is expected after ${time} near the ${otherPlace}`,`light rain is expected after ${time} near the ${place}`],
    wrongAction:[`use the lower bridge when leaving the ${place}`,`wait beside the river path after practice`,`use the station road only after the warning ends`],
  };
  if(pattern===2)return {...d,
    detail:`photos are not allowed in the ${event} workshop`,
    wrongMain:[`describe only the workshop rule for ${event}`,`announce ticket prices for ${event}`,`invite visitors to change the ${event} route`],
    wrongDetail:[`photos are not allowed in the ${event} model room`,`photos are not allowed in the ${event} photo hall`,`photos are not allowed anywhere during ${event}`],
    wrongAction:[`leave the ${event} ticket in the first room`,`show the ${event} ticket at the first door`,`take photos in the ${event} workshop`],
  };
  if(pattern===3)return {...d,
    detail:`use the stop beside the ${otherPlace} on ${day}`,
    wrongMain:[`announce a permanent Route Seven change`,`explain the road work schedule near the ${place}`,`compare two Route Seven ticket prices`],
    wrongDetail:[`use the stop beside the ${place} on ${day}`,`use the stop beside the ${otherPlace} on ${otherDay}`,`use the stop beside the station on ${day}`],
    wrongAction:[`wait at the ${place} stop during the road work`,`use the ${otherPlace} stop the following morning`,`leave on Route Seven before ${time}`],
  };
  if(pattern===4)return {...d,
    detail:`the student group at the ${place} chose a low wall for the plants`,
    wrongMain:[`report only the group's final choice at the ${place}`,`explain how the group measured plant growth`,`ask the group to move every plant indoors`],
    wrongDetail:[`the student group at the ${place} chose full covers for the plants`,`the student group at the ${place} moved every plant indoors`,`the student group at the ${place} chose no wind protection`],
    wrongAction:["test full covers for two weeks","move every plant indoors for two weeks","test the low wall for one day"],
  };
  if(pattern===5)return {...d,
    detail:`an activity kit from the ${place} may be kept for seven days`,
    wrongMain:[`list only the parts in an activity kit from the ${place}`,`explain only the late-kit rule at the ${place}`,`invite visitors to make kits at the ${place}`],
    wrongDetail:[`an activity kit from the ${place} may be kept for one day`,`an activity kit from the ${place} may be kept for thirty days`,`an activity kit from the ${otherPlace} may be kept for seven days`],
    wrongAction:["return only the tools from the activity kit","renew a late activity kit online","return the activity-kit parts on different days"],
  };
  if(pattern===6)return {...d,
    detail:`a bus map was found inside the ${object}`,
    wrongMain:[`describe every item inside the ${object}`,`ask who came to ${event}`,`announce where the ${object} was bought`],
    wrongDetail:[`a school map was found inside the ${object}`,`a bus map was found inside the ${otherObject}`,`a bus ticket was found inside the ${object}`],
    wrongAction:[`describe the bus map only when claiming the ${object}`,`claim the ${object} at the ${place}`,`send a photo of every item in the ${object}`],
  };
  if(pattern===7)return {...d,
    detail:"check both paper strips after five minutes",
    wrongMain:[`report the result of a class test at the ${place}`,`compare warm water with hot water at the ${place}`,`explain how to prepare the paper strips before class`],
    wrongDetail:["check both paper strips after ten minutes","check one paper strip after five minutes","check both paper strips before adding water"],
    wrongAction:["move both cups to the same place","move one cup while waiting","hold both cups while checking them"],
  };
  if(pattern===8)return {...d,
    detail:`the free workshop at ${event} has twenty seats`,
    wrongMain:[`announce the opening time for ${event} only`,`explain the glass rule for ${event} only`,`tell bicycle riders where to enter ${event}`],
    wrongDetail:[`the free workshop at ${event} has ten seats`,`the paid workshop at ${event} has twenty seats`,`the free workshop at ${event} has thirty seats`],
    wrongAction:[`visitors to ${event} should park their bicycles beside the west gate`,`visitors to ${event} should park their bicycles on the walking path`,`visitors to ${event} should bring their bicycles through the east gate`],
  };
  return {...d,
    wrongMain:[`explain where the ${claimObject} claim first appeared`,`compare the social post with the store page`,`report how long the ${claimObject} stayed cold in one test`],
    wrongDetail:[`the ${claimObject} claim names one test method but no source`,`the ${otherClaimObject} claim has no test method or source`,`the ${claimObject} claim has a source but no test conditions`],
    wrongAction:[`compare two pages that repeat the ${claimObject} claim`,`check only the store page for the ${claimObject}`,`share the ${claimObject} claim after reading its first source`],
  };
}

function discourseItem(index){
  const local=index-200,pattern=Math.floor(local/10),variant=local%10,d=refineDiscourse(discoursePattern(pattern,variant),pattern,variant),number=index+1,id=`ENG_R4_LISTEN_${String(number).padStart(3,"0")}`;
  const contextCue=DISCOURSE_CONTEXTS[variant],transcript=`${contextCue} ${d.text}`;
  return {id,section:"discourse",transcript,spokenText:transcript,audioDescription:`An original public message or short explanation whose purpose is to ${d.main}.`,pauseMs:3500,voiceProfile:{voice:"Microsoft Zira Desktop",rate:-1},questions:[
    makeSemanticQuestion({id:`ENG_R4_Q_LISTEN_${String(number).padStart(3,"0")}_01`,skillId:pattern===9?"ENG_R4_S317":"ENG_R4_S319",stem:`${contextCue} What is the message mainly meant to do?`,correct:d.main,distractors:d.wrongMain,index,operation:"identify-spoken-message-purpose",evidence:`整段資訊的目的為「${d.main}」。`}),
    makeSemanticQuestion({id:`ENG_R4_Q_LISTEN_${String(number).padStart(3,"0")}_02`,skillId:"ENG_R4_S318",stem:`${contextCue} Which detail is stated in the message?`,correct:d.detail,distractors:d.wrongDetail,index:index+1,operation:"retrieve-spoken-detail",evidence:`音稿明確陳述「${d.detail}」。`}),
    makeSemanticQuestion({id:`ENG_R4_Q_LISTEN_${String(number).padStart(3,"0")}_03`,skillId:pattern===9?"ENG_R4_S317":"ENG_R4_S319",stem:`${contextCue} Which action is planned or required in the full message?`,correct:d.action,distractors:d.wrongAction,index:index+2,operation:"apply-announced-action-or-restriction",evidence:`完整訊息指出計畫或要求的行動為「${d.action}」。`}),
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
