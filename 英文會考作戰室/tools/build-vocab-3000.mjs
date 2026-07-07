// 從 WeCan 三頁匯入會考3000字表，並以 Free Dictionary API 補 KK 音標。
// 用法：node tools/build-vocab-3000.mjs [--skip-fetch] [--skip-api]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const cacheDir = path.join(root, "tools", ".cache");
const dictCacheDir = path.join(cacheDir, "dict");

const URLS = {
  tier1: "https://wecan.tw/index.php/2018-12-02-08-34-31/2019-01-03-18-18-31/1000",
  tier2: "https://wecan.tw/index.php/2018-12-02-08-34-31/2019-01-03-18-18-31/2000-basic-vocabulary",
  tier3: "https://wecan.tw/index.php/2018-12-02-08-34-31/2019-01-03-18-18-31/3000-basic-vocabulary"
};

const POS_MAP = {
  名: "名", 動: "動", 形: "形", 副: "副", 介: "介", 連: "連", 代: "代", 限: "限", 助: "助", 感: "感",
  n: "名", noun: "名", v: "動", verb: "動", vt: "動", vi: "動", a: "形", adj: "形", adjective: "形",
  adv: "副", ad: "副", adverb: "副", prep: "介", preposition: "介", conj: "連", conjunction: "連",
  pron: "代", pronoun: "代", det: "限", determiner: "限", aux: "助", interjection: "感", int: "感"
};

const API_POS_MAP = {
  noun: "名", verb: "動", adjective: "形", adverb: "副", preposition: "介", conjunction: "連",
  pronoun: "代", determiner: "限", auxiliary: "助", interjection: "感", exclamation: "感"
};

const skipFetch = process.argv.includes("--skip-fetch");
const skipApi = process.argv.includes("--skip-api");
const refreshFailed = process.argv.includes("--refresh-failed");

if (refreshFailed && fs.existsSync(dictCacheDir)) {
  for (const file of fs.readdirSync(dictCacheDir)) {
    if (!file.endsWith(".json")) continue;
    try {
      const payload = JSON.parse(fs.readFileSync(path.join(dictCacheDir, file), "utf8"));
      if (!payload.ok) fs.unlinkSync(path.join(dictCacheDir, file));
    } catch { /* ponytail: ignore corrupt cache files */ }
  }
}

function sortKey(word) {
  const first = String(word).trim().split(/\s+/)[0].replace(/^[^a-zA-Z]+/, "").toLowerCase();
  return first || String(word).trim().toLowerCase();
}

function normalizePos(raw) {
  const key = String(raw).trim().toLowerCase();
  return POS_MAP[key] || POS_MAP[key.replace(/\.$/, "")] || null;
}

function posTags(codes) {
  const uniq = [...new Set(codes.filter(Boolean))];
  return uniq.length ? uniq.map(c => `[${c}]`).join("") : "";
}

function stripGrammarFromZh(zh) {
  return String(zh)
    .replace(/\[[^\]]+\]/g, "")
    .replace(/\[\+[^\]]+\]/g, "")
    .replace(/\s+/g, " ")
    .replace(/^[;；,，\s]+|[;；,，\s]+$/g, "")
    .trim();
}

function parsePosAndZh(raw) {
  const tags = [];
  let zh = String(raw);
  for (const m of raw.matchAll(/\[([^\]]+)\]/g)) {
    const token = m[1].trim();
    if (/^\+/.test(token) || token === "C" || token === "U" || token === "F" || token === "W" || token === "the S") continue;
    const mapped = normalizePos(token);
    if (mapped) tags.push(mapped);
  }
  zh = stripGrammarFromZh(raw);
  return { pos: posTags(tags), zh: zh || raw.trim() };
}

function htmlToText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<\/tr>/gi, "\n")
    .replace(/<\/td>/gi, " | ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\r/g, "")
    .split("\n")
    .map(line => line.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n");
}

async function fetchCached(key, url) {
  fs.mkdirSync(cacheDir, { recursive: true });
  const file = path.join(cacheDir, `${key}.txt`);
  if (skipFetch && fs.existsSync(file)) return fs.readFileSync(file, "utf8");
  const res = await fetch(url, { headers: { "User-Agent": "taiwan-cap-math-vocab-build/1.0" } });
  if (!res.ok) throw new Error(`Fetch failed ${url}: ${res.status}`);
  const text = htmlToText(await res.text());
  fs.writeFileSync(file, text, "utf8");
  return text;
}

function parseTier1(text) {
  const lines = text.split("\n").map(l => l.trim()).filter(Boolean);
  const words = [];
  let i = 0;
  while (i < lines.length) {
    const inline = lines[i].match(/^(\d+)\s*\|\s*(.+)$/);
    if (inline) {
      const word = inline[2].trim();
      const zhLine = lines[i + 1]?.match(/^\|\s*(.+?)\s*\|?\s*$/);
      const rawZh = zhLine ? zhLine[1].trim() : "";
      if (word && !/^https?:\/\//.test(word)) words.push({ word, rawZh });
      i += zhLine ? 2 : 1;
      continue;
    }
    if (/^\d+$/.test(lines[i])) {
      const wordLine = lines[i + 1]?.match(/^\|\s*(.+?)\s*\|?\s*$/);
      const zhLine = lines[i + 2]?.match(/^\|\s*(.+?)\s*\|?\s*$/);
      const word = wordLine?.[1]?.trim();
      const rawZh = zhLine?.[1]?.trim() || "";
      if (word && !/^https?:\/\//.test(word)) words.push({ word, rawZh });
      i += zhLine ? 3 : wordLine ? 2 : 1;
      continue;
    }
    i++;
  }
  return words.map(({ word, rawZh }) => {
    const { pos, zh } = parsePosAndZh(rawZh);
    const cleanZh = zh || stripGrammarFromZh(rawZh);
    return { word, pos: pos || inferPosFromZh(cleanZh), zh: cleanZh, sortKey: sortKey(word) };
  });
}

function parseTier2(text) {
  const words = [];
  for (const line of text.split("\n")) {
    const m = line.match(/^(\d+)\.\s*(.+?)\s*\|\s*(.+?)\s*\|?\s*$/);
    if (!m) continue;
    const word = m[2].trim();
    const { pos, zh } = parsePosAndZh(m[3].trim());
    words.push({ word, pos, zh, sortKey: sortKey(word) });
  }
  return words;
}

function parseTier3(text) {
  const words = [];
  const lines = text.split("\n").map(l => l.trim());
  for (let i = 0; i < lines.length; i++) {
    const head = lines[i].match(/^(\d+)\.\s*(.+)$/);
    if (!head || !head[2].trim()) continue;
    const word = head[2].trim();
    let rawZh = "";
    for (let j = i + 1; j < lines.length; j++) {
      if (/^\d+\./.test(lines[j])) break;
      const zm = lines[j].match(/^\|\s*(.+?)\s*\|?\s*$/);
      if (zm) {
        rawZh = zm[1].trim();
        i = j;
        break;
      }
    }
    const { pos, zh } = parsePosAndZh(rawZh);
    words.push({
      word,
      pos,
      zh: zh || stripGrammarFromZh(rawZh) || rawZh,
      sortKey: sortKey(word)
    });
  }
  return words;
}

function applyTier3Fixups(words) {
  return words.map(item => {
    const fix = TIER3_FIXUPS[item.word];
    return fix ? { ...item, ...fix, sortKey: item.sortKey } : item;
  });
}

function ipaToKk(ipa) {
  if (!ipa) return null;
  let s = String(ipa).trim().replace(/^\/+|\/+$/g, "").replace(/\s+/g, "");
  s = s.replace(/ɡ/g, "g").replace(/ɹ/g, "r");
  return s || null;
}

async function loadIpaDict() {
  fs.mkdirSync(cacheDir, { recursive: true });
  const file = path.join(cacheDir, "ipa-en.json");
  if (!fs.existsSync(file)) {
    console.log("Downloading wiki-pronunciation-dict en.json…");
    const res = await fetch("https://github.com/DanielSWolf/wiki-pronunciation-dict/raw/main/dictionaries/en.json", {
      headers: { "User-Agent": "taiwan-cap-math-vocab-build/1.0" }
    });
    if (!res.ok) throw new Error(`IPA dict download failed: ${res.status}`);
    fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  }
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function inferPosFromZh(zh) {
  const text = String(zh);
  const head = text.split(/[,，;；]/)[0].trim();
  if (/(地\)|\(地\)|地,|地；)/.test(text) || /(地)$/.test(head)) return "[副]";
  if (/的/.test(head)) return "[形]";
  if (/^(在|到|向|用|把|被|自|從|為|对|對|往|由|跟|比|像|除|關|关|關於|关于)/.test(head)) return "[介]";
  if (/^(和|或|但|而|如果|當|当|因为|因為|所以|雖然|虽然)/.test(head)) return "[連]";
  if (/^(我|你|他|她|它|我們|我们|他們|他们|這|这|那|誰|谁|什麼|什么|哪)/.test(text)) return "[代]";
  if (/^(去|來|来|做|看|說|说|吃|喝|走|寫|写|讀|读|買|买|賣|卖|玩|睡|起|坐|站|開|开|關|关|放|拿|給|给|找|知道|覺得|觉得|希望|開始|开始|停止|讓|让|使|是|有|能|會|会|要|想)/.test(head)) return "[動]";
  return "[名]";
}

function lookupKkFromIpa(word, ipaDict) {
  const w = String(word).trim();
  const stop = new Set(["a", "an", "the", "to", "of", "in", "on", "at", "for", "and", "or"]);
  if (/\s/.test(w)) {
    const parts = w.toLowerCase().split(/[\s/]+/).filter(p => p && !stop.has(p));
    for (const part of [...parts].reverse()) {
      const hit = ipaDict[part.replace(/[^a-z'-]/g, "")];
      if (hit?.length) return ipaToKk(hit[0]);
    }
  }
  for (const cand of lookupCandidates(word)) {
    const key = cand.toLowerCase();
    const hit = ipaDict[key];
    if (hit?.length) return ipaToKk(hit[0]);
  }
  return null;
}

const TIER3_FIXUPS = {
  "X-ray": { zh: "X光，X射線", pos: "[名]" },
  xylophone: { zh: "木琴", pos: "[名]" },
  yawn: { zh: "打呵欠，張開，裂開；呵欠", pos: "[動][名]" }
};

function lookupCandidates(word) {
  const w = String(word).trim();
  const cands = [w];
  if (/\//.test(w)) cands.push(w.split("/")[0].trim());
  if (/\s/.test(w)) {
    cands.push(w.replace(/\s+/g, " "));
    cands.push(w.split(/\s+/)[0]);
  }
  return [...new Set(cands.filter(Boolean))];
}

async function fetchDict(word) {
  fs.mkdirSync(dictCacheDir, { recursive: true });
  const safe = word.replace(/[^a-zA-Z0-9._-]+/g, "_").slice(0, 80);
  const file = path.join(dictCacheDir, `${safe}.json`);
  if (fs.existsSync(file)) {
    try { return JSON.parse(fs.readFileSync(file, "utf8")); } catch { /* refetch below */ }
  }
  if (skipApi) return { ok: false, query: word };

  for (const cand of lookupCandidates(word)) {
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(cand)}`, {
        headers: { "User-Agent": "taiwan-cap-math-vocab-build/1.0" }
      });
      if (!res.ok) continue;
      const data = await res.json();
      const payload = { ok: true, data, query: cand };
      fs.writeFileSync(file, JSON.stringify(payload), "utf8");
      return payload;
    } catch {
      /* try next */
    }
  }
  const payload = { ok: false, query: word };
  return payload;
}

function dictPos(payload) {
  if (!payload?.ok) return "";
  const tags = [];
  for (const entry of payload.data) {
    for (const meaning of entry.meanings || []) {
      const mapped = API_POS_MAP[meaning.partOfSpeech];
      if (mapped) tags.push(mapped);
    }
  }
  return posTags([...new Set(tags)]);
}

function dictKk(payload) {
  if (!payload?.ok) return null;
  for (const entry of payload.data) {
    if (entry.phonetic) return ipaToKk(entry.phonetic);
    for (const ph of entry.phonetics || []) {
      if (ph.text) return ipaToKk(ph.text);
    }
  }
  return null;
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function sortWords(words) {
  return [...words].sort((a, b) => a.sortKey.localeCompare(b.sortKey, "en") || a.word.localeCompare(b.word, "en"));
}

async function enrichWords(words, tierId, review, ipaDict) {
  const out = new Array(words.length);
  let done = 0;
  const batchSize = 20;
  for (let i = 0; i < words.length; i += batchSize) {
    const slice = words.slice(i, i + batchSize);
    const rows = await Promise.all(slice.map(async item => {
      let pos = item.pos;
      let kk = lookupKkFromIpa(item.word, ipaDict);
      if (!pos || pos === "[?]" || !kk) {
        const payload = await fetchDict(item.word);
        if (!pos || pos === "[?]") {
          const fromDict = dictPos(payload);
          if (fromDict) pos = fromDict;
        }
        if (!kk) kk = dictKk(payload) || lookupKkFromIpa(item.word, ipaDict);
      }
      const row = { word: item.word, pos: pos || inferPosFromZh(item.zh) || "[?]", zh: item.zh, kk, sortKey: item.sortKey };
      if (!kk) review.push({ tier: tierId, word: item.word, pos: row.pos, kk, reason: "missing_kk" });
      else if (row.pos === "[?]") review.push({ tier: tierId, word: item.word, pos: row.pos, kk, reason: "missing_pos" });
      return row;
    }));
    rows.forEach((row, j) => { out[i + j] = row; });
    done += slice.length;
    if (done % 200 === 0 || done === words.length) console.log(`  tier ${tierId}: ${done}/${words.length}`);
  }
  return sortWords(out);
}

async function main() {
  console.log("Fetching WeCan pages…");
  const [t1text, t2text, t3text] = await Promise.all([
    fetchCached("wecan-1000", URLS.tier1),
    fetchCached("wecan-2000", URLS.tier2),
    fetchCached("wecan-3000", URLS.tier3)
  ]);

  const tier1Raw = parseTier1(t1text);
  const tier2Raw = parseTier2(t2text);
  const tier3Raw = applyTier3Fixups(parseTier3(t3text));
  console.log(`Parsed: tier1=${tier1Raw.length}, tier2=${tier2Raw.length}, tier3=${tier3Raw.length}`);

  const ipaDict = await loadIpaDict();
  const review = [];
  console.log("Enriching tier 1…");
  const tier1 = await enrichWords(tier1Raw, 1, review, ipaDict);
  console.log("Enriching tier 2…");
  const tier2 = await enrichWords(tier2Raw, 2, review, ipaDict);
  console.log("Enriching tier 3…");
  const tier3 = await enrichWords(tier3Raw, 3, review, ipaDict);

  const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const payload = {
    meta: {
      title: "會考3000",
      sources: [
        "WeCan 基礎1000/2000/3000",
        "Free Dictionary API（詞性補齊）",
        "wiki-pronunciation-dict / Wiktionary（KK 音標，IPA 轉 KK 近似值）"
      ],
      generated: today,
      counts: {
        tier1: tier1.length,
        tier2: tier2.length,
        tier3: tier3.length,
        total: tier1.length + tier2.length + tier3.length
      }
    },
    tiers: [
      { id: 1, name: "基礎1000", range: `第 1–${tier1.length} 字`, words: tier1 },
      { id: 2, name: "進階2000", range: `第 ${tier1.length + 1}–${tier1.length + tier2.length} 字`, words: tier2 },
      { id: 3, name: "擴充3000", range: `第 ${tier1.length + tier2.length + 1}–${tier1.length + tier2.length + tier3.length} 字`, words: tier3 }
    ]
  };

  const outJson = path.join(root, "vocab-3000.json");
  const reviewJson = path.join(root, "vocab-3000-review.json");
  fs.writeFileSync(outJson, JSON.stringify(payload, null, 2) + "\n", "utf8");
  fs.writeFileSync(reviewJson, JSON.stringify({ generated: today, items: review }, null, 2) + "\n", "utf8");
  console.log(`Wrote ${outJson} (${payload.meta.counts.total} words)`);
  console.log(`Review items: ${review.length} → ${reviewJson}`);
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));
if (isMain) {
  main().catch(err => {
    console.error(err);
    process.exit(1);
  });
}
