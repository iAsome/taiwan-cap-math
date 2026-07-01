import https from "node:https";
import fs from "node:fs";

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(get(new URL(res.headers.location, url).toString()));
      }
      const chunks = [];
      res.on("data", c => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
      res.on("error", reject);
    }).on("error", reject);
  });
}

const years = [106, 107, 108, 109, 110, 111, 112, 113, 114, 115];
const result = {};
for (const year of years) {
  try {
    const html = await get(`https://cap.rcpet.edu.tw/exam/${year}/${year}exam.html`);
    const items = [...html.matchAll(/<a href="([^"]+)"[^>]*>([^<]*)<\/a>/g)];
    const nat = items.find(([, , label]) => label.includes("自然"));
    const ans = items.find(([, , label]) => label.includes("參考答案"));
    result[year] = { exam: nat ? nat[1] : null, answer: ans ? ans[1] : null };
    console.log(year, JSON.stringify(result[year]));
  } catch (e) {
    console.log(year, "ERROR", e.message);
  }
}
fs.writeFileSync("nature-links.json", JSON.stringify(result, null, 2), "utf8");
