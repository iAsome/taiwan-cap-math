import path from "node:path"; import crypto from "node:crypto"; import { parseArgs, assert, writeJson } from "./lib/common.mjs";
const args=parseArgs(process.argv.slice(2));assert(args.output,"Usage --output <evidence>");
const sources=[
 {id:"format",url:"https://cap.rcpet.edu.tw/test2.html",checks:[[/23\s*[～~-]\s*28\s*題/,"23-28 MC"],[/2\s*[～~-]\s*3\s*題/,"2-3 CR"],[/80\s*分鐘/,"80 minutes"],[/第四學習階段/,"fourth stage"]]},
 {id:"content",url:"https://cap.rcpet.edu.tw/test4-4.html",checks:[[/數與量/,"number"],[/空間與形狀/,"shape"],[/坐標幾何/,"coordinate"],[/代數/,"algebra"],[/函數/,"function"],[/資料與不確定性/,"data"],[/三級分/,"3 score"],[/零級分/,"0 score"]]},
 {id:"faq",url:"https://cap.rcpet.edu.tw/test5-4.html",checks:[[/只有寫答案[^。]*零級分|只有寫答案而無計算過程[^。]*零級分/s,"answer only zero"],[/仍有機會獲得相對應的級分/,"partial credit"],[/至少由兩位閱卷委員/,"two readers"]]},
 {id:"history",url:"https://cap.rcpet.edu.tw/examination.html",checks:[[/115年國中教育會考/,"115 listed"]]}
];
const results=[];
for(const source of sources){const response=await fetch(source.url,{redirect:"follow",headers:{"user-agent":"MathV2HumanRC-R1/1.0"}});assert(response.ok,`${source.id} HTTP ${response.status}`);const bytes=Buffer.from(await response.arrayBuffer());const text=bytes.toString("utf8").replace(/\s+/g," ");const checks=source.checks.map(([regex,label])=>({label,pass:regex.test(text)}));assert(checks.every(x=>x.pass),`${source.id} marker failure ${JSON.stringify(checks)}`);results.push({id:source.id,url:source.url,status:response.status,bytes:bytes.length,sha256:crypto.createHash("sha256").update(bytes).digest("hex"),checks});}
const report={status:"PASS_OFFICIAL_SPEC_ONLINE_R1",retrievedAt:new Date().toISOString(),sources:results,officialGeneralFormat:{mcMin:23,mcMax:28,crMin:2,crMax:3,minutes:80},releaseCandidatePracticeProfile:{mc:25,cr:2,minutes:80},productionActivationAllowed:false,oldDatabaseDeletionAllowed:false};
writeJson(path.join(path.resolve(args.output),"official-spec-online-verification.json"),report);console.log(JSON.stringify(report,null,2));
