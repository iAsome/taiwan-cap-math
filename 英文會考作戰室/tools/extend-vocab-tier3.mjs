// 將 reading-glossary-master 中不在 vocab-3000 的詞併入 tier3，並補 KK。
// 用法：node tools/extend-vocab-tier3.mjs [--skip-api]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const skipApi = process.argv.includes("--skip-api");

function sortKey(word) {
  const first = String(word).trim().split(/\s+/)[0].replace(/^[^a-zA-Z]+/, "").toLowerCase();
  return first || String(word).trim().toLowerCase();
}

function inferPosFromZh(zh) {
  if (/的$|性$|式$|ful$/.test(zh)) return "[形]";
  if (/地$|ly/.test(zh)) return "[副]";
  if (/化$|動$|使$/.test(zh)) return "[動]";
  return "[名]";
}

async function loadBuildHelpers() {
  const modPath = path.join(root, "tools", "build-vocab-3000.mjs");
  const text = fs.readFileSync(modPath, "utf8");
  // ponytail: import build-vocab helpers by dynamic import
  return import(modPath + "?helpers=1").catch(() => null);
}

async function resolveKk(word, ipaDict, fetchDict, ipaToKk) {
  const parts = String(word).toLowerCase().split(/\s+/);
  if (parts.length > 1) return parts.map(p => ipaDict[p] ? ipaToKk(ipaDict[p]) : null).filter(Boolean).join(" ") || null;
  if (ipaDict[word.toLowerCase()]) return ipaToKk(ipaDict[word.toLowerCase()]);
  if (skipApi) return null;
  const payload = await fetchDict(word);
  if (!payload?.ok) return null;
  for (const entry of payload.data) {
    for (const ph of entry.phonetics || []) {
      if (ph.text) return ipaToKk(ph.text);
    }
    if (entry.phonetic) return ipaToKk(entry.phonetic);
  }
  return null;
}

async function main() {
  const master = JSON.parse(fs.readFileSync(path.join(root, "data", "reading-glossary-master.json"), "utf8"));
  const vocabPath = path.join(root, "vocab-3000.json");
  const vocab = JSON.parse(fs.readFileSync(vocabPath, "utf8"));
  const existing = new Set(vocab.tiers.flatMap(t => t.words.map(w => String(w.word).toLowerCase())));

  const candidates = master.entries.filter(e => e.type === "word" && !existing.has(e.lemma.toLowerCase()));
  if (!candidates.length) {
    console.log("No new tier3 candidates from master.");
    return;
  }

  // Reuse build-vocab internals via subprocess-style inline fetch
  const cacheDir = path.join(root, "tools", ".cache");
  const ipaFile = path.join(cacheDir, "ipa-en.json");
  let ipaDict = {};
  if (fs.existsSync(ipaFile)) ipaDict = JSON.parse(fs.readFileSync(ipaFile, "utf8"));

  function ipaToKk(ipa) {
    if (!ipa) return null;
    let s = String(ipa).trim().replace(/^\/+|\/+$/g, "").replace(/\s+/g, "");
    s = s.replace(/ɡ/g, "g").replace(/ɹ/g, "r");
    s = s.replace(/eɪ/g, "e").replace(/aɪ/g, "aɪ").replace(/oʊ/g, "o").replace(/aʊ/g, "aʊ");
    s = s.replace(/ɾ/g, "r").replace(/ɫ/g, "l");
    return s || null;
  }

  async function fetchDict(word) {
    const key = word.toLowerCase().replace(/[^a-z- ]/g, "");
    const cacheFile = path.join(root, "tools", ".cache", "dict", `${key.replace(/\s+/g, "_")}.json`);
    if (fs.existsSync(cacheFile)) {
      try { return JSON.parse(fs.readFileSync(cacheFile, "utf8")); } catch { /* refresh */ }
    }
    if (skipApi) return null;
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(key.split(" ")[0])}`, {
      headers: { "User-Agent": "taiwan-cap-math-vocab-extend/1.0" }
    });
    if (!res.ok) return null;
    const data = await res.json();
    const payload = { ok: true, data };
    fs.mkdirSync(path.dirname(cacheFile), { recursive: true });
    fs.writeFileSync(cacheFile, JSON.stringify(payload));
    await new Promise(r => setTimeout(r, 120));
    return payload;
  }

  const tier3 = vocab.tiers.find(t => t.id === 3);
  const added = [];
  for (const entry of candidates) {
    const kk = await resolveKk(entry.lemma, ipaDict, fetchDict, ipaToKk);
    added.push({
      word: entry.lemma,
      pos: inferPosFromZh(entry.zh),
      zh: entry.zh,
      kk: kk || "—",
      sortKey: sortKey(entry.lemma),
      source: "reading-glossary-master"
    });
  }

  tier3.words.push(...added);
  tier3.words.sort((a, b) => a.sortKey.localeCompare(b.sortKey, "en") || a.word.localeCompare(b.word, "en"));
  const t1 = vocab.tiers[0].words.length;
  const t2 = vocab.tiers[1].words.length;
  const t3 = tier3.words.length;
  vocab.meta.generated = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  vocab.meta.sources = [...new Set([...(vocab.meta.sources || []), "reading-glossary-master（閱讀補充）"])];
  vocab.meta.counts = { tier1: t1, tier2: t2, tier3: t3, total: t1 + t2 + t3 };
  tier3.range = `第 ${t1 + t2 + 1}–${t1 + t2 + t3} 字`;

  fs.writeFileSync(vocabPath, JSON.stringify(vocab, null, 2) + "\n", "utf8");
  console.log(`Added ${added.length} words to tier3 (total tier3=${t3}, vocab total=${vocab.meta.counts.total})`);
  const missingKk = added.filter(w => w.kk === "—").length;
  if (missingKk) console.log(`  ${missingKk} missing KK — run: node tools/build-vocab-3000.mjs --skip-fetch`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
