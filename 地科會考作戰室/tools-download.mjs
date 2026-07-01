import https from "node:https";
import fs from "node:fs";

// 自然科 exam paper Drive IDs (from cap.rcpet.edu.tw exam pages); answer/guide PDFs are
// shared across all subjects for a given year (same IDs the math site already uses).
const files = {
  106: { exam: "1nKOX2Y_Lc97oRP0CNdibx3sdWo4zWj2s", answer: "1SDrO_xG9MG6Kmcg1H9ibY_NM410de9VF", guide: "16HOh22LGO2laMdfIZSpXIQG-lfADP7LB" },
  107: { exam: "1liuOGMSy_z_57Gbu9psuWPxQw_8oAt32", answer: "1XigR8bMEJoG6lwe8yhsbKpHn3MHfUSeY", guide: "1uYkpWEpmYaoF8vFrMoEcuGOeyqOPqWjA" },
  108: { exam: "1BXf0z9hqcmlnefKk1XKLQQp1ec6V1azI", answer: "1M5ObFB8NhhzocLtxc11O2VREq_h1-YBb", guide: "1G4brkSQwKSVS960xoiTAQpAhO8V-q-WR" },
  109: { exam: "1nDVCh0u-MAApDFlv0kTVhFr_v7VKNVgP", answer: "1zj_iw_7T3M6BgmGZkFOIIGNghr02dWPk", guide: "1QcMOuGHaby1_huKWY6a2gSt6Vm0GusW7" },
  110: { exam: "124Y-9HcPGeNzpQPe6Osl4X7A_xNIT0UA", answer: "1z7jBxC9t24e2Y3WK71XxWe0JOjJRLcNW", guide: "1TQg3cRXlQfSAAbH4keJGSGT1n4sFjwN5" },
  111: { exam: "1OiQVdqtDQauNW_qwlCFTWLmcfBHuCjdm", answer: "1IeMHI4BmTpC_2Oc1lQ1Qj6XWHDf9qwGd", guide: "17TjMgVA4xXZYPlSPW9idgheMY9LR5agy" },
  112: { exam: "1Bo87vJFakmGzyUqqjHzTCF-fv75DFgx_", answer: "1OT5r0que_0bXSy0kwLEOEJMssce2OnL0", guide: "1ryCrnCTkwWib6PTbw-PPHCcV7K3Tc2p4" },
  113: { exam: "1lO1_3Iq62BmTHR8m29or7I8VtS8qZdDR", answer: "1cWlogP9FBRX1eD5kjgVDP2_6f8VCLSB4", guide: "1YzrMP9JN6st0fcL5Vg_D0J75wUSBHOpW" },
  114: { exam: "18_lHom7zYhyOoMvxHt4hKJS_CynFOoZ1", answer: "175hz0lHG4GTDNxYet9lrRDu0lmC_G08o", guide: "11HW_piDqYm9Gq6qo-BSONsxZ-jgTri4h" },
  115: { exam: "1ZJNPG9Wz3zuI8UkPGUY50URejxxZYmQ8", answer: "1fxfOLQPMdCEMSuziD1qsQZg3vVOGt8df", guide: "1uCImBYbMxkme8DxV2Wj5RdxBnNgTeD5n" }
};

function get(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(get(res.headers.location, headers));
      }
      const chunks = [];
      res.on("data", c => chunks.push(c));
      res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body: Buffer.concat(chunks) }));
      res.on("error", reject);
    }).on("error", reject);
  });
}

async function download(id, outPath) {
  let url = `https://drive.google.com/uc?export=download&id=${id}`;
  let res = await get(url);
  let cookies = res.headers["set-cookie"] || [];
  const ct = res.headers["content-type"] || "";
  if (ct.includes("text/html")) {
    const html = res.body.toString("utf8");
    const m = html.match(/confirm=([0-9A-Za-z_-]+)/) || html.match(/name="confirm" value="([0-9A-Za-z_-]+)"/);
    const uuidM = html.match(/name="uuid" value="([0-9A-Za-z_-]+)"/);
    if (m) {
      let url2 = `https://drive.google.com/uc?export=download&confirm=${m[1]}&id=${id}`;
      if (uuidM) url2 += `&uuid=${uuidM[1]}`;
      res = await get(url2, { Cookie: cookies.map(c => c.split(";")[0]).join("; ") });
    } else {
      const formM = html.match(/action="([^"]+)"/);
      if (formM) {
        const idsM = [...html.matchAll(/name="([^"]+)" value="([^"]*)"/g)];
        const params = new URLSearchParams();
        idsM.forEach(([, k, v]) => params.set(k, v));
        const url3 = formM[1].replace(/&amp;/g, "&") + "&" + params.toString();
        res = await get(url3, { Cookie: cookies.map(c => c.split(";")[0]).join("; ") });
      }
    }
  }
  fs.writeFileSync(outPath, res.body);
  return res.body.length;
}

const outDir = "official-data";
for (const [year, ids] of Object.entries(files)) {
  const dir = `${outDir}/${year}`;
  fs.mkdirSync(dir, { recursive: true });
  for (const [kind, id] of Object.entries(ids)) {
    const out = `${dir}/${year}-${kind}.pdf`;
    if (fs.existsSync(out) && fs.statSync(out).size > 10000) { console.log(year, kind, "already exists, skipping"); continue; }
    try {
      const size = await download(id, out);
      console.log(year, kind, "downloaded", size, "bytes");
    } catch (e) {
      console.log(year, kind, "FAILED", e.message);
    }
  }
}
