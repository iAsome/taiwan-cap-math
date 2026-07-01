import https from "node:https";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const links = JSON.parse(fs.readFileSync(new URL("./nature-links.json", import.meta.url), "utf8"));

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

function driveIdFromUrl(url) {
  const m = url.match(/\/d\/([^/]+)\//);
  return m ? m[1] : null;
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

const outRoot = fileURLToPath(new URL("../official-data/", import.meta.url));
for (const [year, { exam, answer }] of Object.entries(links)) {
  const dir = `${outRoot}/${year}`;
  fs.mkdirSync(dir, { recursive: true });
  for (const [kind, link] of [["exam", exam], ["answer", answer]]) {
    if (!link) { console.log(year, kind, "NO LINK"); continue; }
    const id = driveIdFromUrl(link);
    const out = `${dir}/${year}-${kind}.pdf`;
    try {
      const size = await download(id, out);
      console.log(year, kind, "downloaded", size, "bytes");
    } catch (e) {
      console.log(year, kind, "FAILED", e.message);
    }
  }
}
process.exit(0);
