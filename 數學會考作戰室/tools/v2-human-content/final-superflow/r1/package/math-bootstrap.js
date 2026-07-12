(() => {
  "use strict";
  const version = "20260713-human-only-r1";
  async function load(scriptPath) {
    await new Promise((resolve,reject)=>{const script=document.createElement("script");script.src=`${scriptPath}?v=${version}`;script.onload=resolve;script.onerror=()=>reject(new Error(`無法載入 ${scriptPath}`));document.body.appendChild(script);});
  }
  async function start(){document.documentElement.dataset.mathEngine="human-production-r1";window.__MATH_HUMAN_PRODUCTION_LOADER_R1__=Object.freeze({mode:"human-production-r1",contentAuthority:"CHATGPT_HUMAN_AUTHORED_R1",humanDefault:true,generatedRollbackAvailable:false,v1RollbackAvailable:false,oldRuntimesRetired:true});await load("human-runtime/human-production-bootstrap.js");}
  if(typeof document==="undefined"||typeof document.createElement!=="function")return;
  start().catch(error=>{document.documentElement.dataset.mathEngine="human-production-load-failed";const main=document.querySelector("#main");if(main){const escaped=String(error.stack||error.message||error).replace(/[&<>"]/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[char]));main.innerHTML=`<section class="view active"><div class="page-heading"><div><p class="eyebrow">LOAD ERROR</p><h1>數學內容載入失敗</h1><pre>${escaped}</pre></div></div></section>`;}throw error;});
})();
