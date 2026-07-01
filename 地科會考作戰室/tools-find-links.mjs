import https from "node:https";

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchUrl(new URL(res.headers.location, url).toString()));
      }
      const chunks = [];
      res.on("data", c => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
      res.on("error", reject);
    }).on("error", reject);
  });
}

const years = [106, 107, 108, 109, 110, 111, 112, 113, 114, 115];
const results = {};
for (const year of years) {
  const url = `https://cap.rcpet.edu.tw/exam/${year}/${year}exam.html`;
  try {
    const text = await fetchUrl(url);
    const items = [...text.matchAll(/<a href="([^"]+)"[^>]*>([^<]*)<\/a>/g)].map(([, href, label]) => ({ href, label: label.trim() })).filter(i => i.label);
    console.log(`--- ${year} ---`);
    items.forEach(i => console.log(i.label, "=>", i.href));
    results[year] = items;
  } catch (e) {
    console.log(`--- ${year} --- ERROR`, e.message);
  }
}
