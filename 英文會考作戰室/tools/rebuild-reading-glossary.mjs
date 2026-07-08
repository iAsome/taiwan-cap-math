// 依 skip/master/2000 規則重建 reading-bank.js 的 glossary。
// 用法：node tools/rebuild-reading-glossary.mjs [--dry-run] [--skip-api]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dataDir = path.join(root, "data");
const cacheDir = path.join(root, "tools", ".cache", "reading-glossary");
const dryRun = process.argv.includes("--dry-run");
const skipApi = process.argv.includes("--skip-api");

const POS_OK = new Set(["noun", "verb", "adjective", "adverb", "interjection"]);
const POS_SKIP = new Set(["preposition", "conjunction", "pronoun", "determiner", "auxiliary", "particle", "abbreviation"]);

function addBasicWord(set, raw) {
  const word = String(raw).toLowerCase().replace(/[^a-z]/g, "");
  if (!word) return;
  set.add(word);
  set.add(`${word}s`);
  set.add(`${word}es`);
  set.add(`${word}ed`);
  set.add(`${word}ing`);
  if (word.endsWith("e")) set.add(`${word.slice(0, -1)}ing`);
  if (word.endsWith("y")) {
    set.add(`${word.slice(0, -1)}ies`);
    set.add(`${word.slice(0, -1)}ied`);
  }
  if (/^[a-z]*[aeiou][bcdfghjklmnpqrstvwxyz]$/.test(word)) {
    set.add(`${word}${word.at(-1)}ed`);
    set.add(`${word}${word.at(-1)}ing`);
  }
}

function buildBasic2000(vocab) {
  const set = new Set();
  vocab.tiers.filter(t => t.id <= 2).forEach(tier => {
    tier.words.forEach(item => {
      String(item.word).toLowerCase().split(/[^a-z]+/).filter(Boolean).forEach(w => addBasicWord(set, w));
    });
  });
  return set;
}

function baseWordOk(word, basic2000) {
  if (basic2000.has(word)) return true;
  const stems = [
    word.replace(/ies$/, "y"),
    word.replace(/ied$/, "y"),
    word.replace(/ing$/, "e"),
    word.replace(/ing$/, ""),
    word.replace(/ed$/, "e"),
    word.replace(/ed$/, ""),
    word.replace(/ly$/, ""),
    word.replace(/ness$/, ""),
    word.replace(/er$/, ""),
    word.replace(/est$/, ""),
    word.replace(/s$/, "")
  ].filter(stem => stem && stem !== word);
  return stems.some(stem => basic2000.has(stem));
}

function escapeRegExp(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function loadReadingBank() {
  const src = fs.readFileSync(path.join(root, "reading-bank.js"), "utf8");
  const m = src.match(/window\.ENGLISH_READING_BANK = (\[[\s\S]*\]);/);
  if (!m) throw new Error("Cannot parse reading-bank.js");
  return JSON.parse(m[1]);
}

function buildVocabZhMap(vocab) {
  const map = new Map();
  for (const tier of vocab.tiers) {
    for (const item of tier.words) {
      const key = String(item.word).toLowerCase();
      if (!map.has(key)) map.set(key, { zh: item.zh, tier: tier.id });
    }
  }
  return map;
}

function buildMasterIndex(master) {
  const byLemma = new Map();
  const phrases = [];
  for (const entry of master.entries) {
    const key = entry.lemma.toLowerCase();
    byLemma.set(key, entry);
    if (entry.type === "phrase") phrases.push(entry);
  }
  phrases.sort((a, b) => b.lemma.length - a.lemma.length);
  return { byLemma, phrases };
}

function findLemma(word, byLemma) {
  const w = word.toLowerCase();
  if (byLemma.has(w)) return w;
  const stems = [
    w.replace(/ies$/, "y"),
    w.replace(/ied$/, "y"),
    w.replace(/ing$/, "e"),
    w.replace(/ing$/, ""),
    w.replace(/ed$/, "e"),
    w.replace(/ed$/, ""),
    w.replace(/ly$/, ""),
    w.replace(/ness$/, ""),
    w.replace(/er$/, ""),
    w.replace(/est$/, ""),
    w.replace(/s$/, "")
  ];
  for (const stem of stems) {
    if (stem && byLemma.has(stem)) return stem;
  }
  return null;
}

function shortenZh(zh, max = 40) {
  const s = String(zh).replace(/\s+/g, " ").trim();
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const semi = cut.lastIndexOf("；");
  if (semi > 10) return cut.slice(0, semi);
  return cut.replace(/[,，;；]\s*[^,，;；]*$/, "").trim() || cut;
}

function phraseRanges(text, phrases) {
  const lower = text.toLowerCase();
  const ranges = [];
  for (const phrase of phrases) {
    const re = new RegExp(`\\b${escapeRegExp(phrase).replace(/\s+/g, "\\s+")}\\b`, "gi");
    let m;
    while ((m = re.exec(lower)) !== null) {
      ranges.push([m.index, m.index + m[0].length]);
    }
  }
  return ranges;
}

function inProtectedRange(index, length, ranges) {
  return ranges.some(([s, e]) => index >= s && index + length <= e);
}

function extractTokens(passage) {
  const tokens = [];
  const re = /\b[a-z][a-z'-]*\b/gi;
  let m;
  while ((m = re.exec(passage)) !== null) {
    tokens.push({ word: m[0], index: m.index, length: m[0].length, lower: m[0].toLowerCase() });
  }
  return tokens;
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function fetchDictPos(word) {
  fs.mkdirSync(cacheDir, { recursive: true });
  const key = word.toLowerCase().replace(/[^a-z-]/g, "");
  const file = path.join(cacheDir, `${key}.json`);
  if (fs.existsSync(file)) {
    try {
      return JSON.parse(fs.readFileSync(file, "utf8"));
    } catch { /* refresh */ }
  }
  if (skipApi) return null;
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(key)}`, {
      headers: { "User-Agent": "taiwan-cap-math-reading-glossary/1.0" }
    });
    if (!res.ok) {
      fs.writeFileSync(file, JSON.stringify({ ok: false, status: res.status }));
      return null;
    }
    const data = await res.json();
    const pos = new Set();
    for (const entry of data) {
      for (const m of entry.meanings || []) {
        if (m.partOfSpeech) pos.add(String(m.partOfSpeech).toLowerCase());
      }
    }
    const payload = { ok: true, pos: [...pos] };
    fs.writeFileSync(file, JSON.stringify(payload));
    await sleep(120);
    return payload;
  } catch {
    return null;
  }
}

function posAllowed(posList) {
  if (!posList?.length) return false;
  if (posList.some(p => POS_SKIP.has(p))) return false;
  return posList.some(p => POS_OK.has(p));
}

function wordStems(w) {
  return [
    w,
    w.replace(/ies$/, "y"),
    w.replace(/ied$/, "y"),
    w.replace(/ing$/, "e"),
    w.replace(/ing$/, ""),
    w.replace(/ed$/, "e"),
    w.replace(/ed$/, ""),
    w.replace(/ly$/, ""),
    w.replace(/ness$/, ""),
    w.replace(/er$/, ""),
    w.replace(/est$/, ""),
    w.replace(/s$/, "")
  ].filter((s, i, arr) => s && arr.indexOf(s) === i);
}

function lookupZh(word, byLemma, vocabZh) {
  const lemma = findLemma(word, byLemma);
  if (lemma) {
    const entry = byLemma.get(lemma);
    if (!entry.in2000) return { zh: entry.zh, source: "master", lemma };
  }
  for (const stem of wordStems(word.toLowerCase())) {
    if (vocabZh.has(stem)) {
      const v = vocabZh.get(stem);
      if (v.tier >= 3) return { zh: v.zh, source: `vocab${v.tier}` };
    }
  }
  return null;
}

async function buildPassageGlossary(passage, ctx) {
  const { skipSet, phraseProtect, byLemma, masterPhrases, basic2000, vocabZh, autoAdded } = ctx;
  const glossary = new Map();
  const lowerPassage = passage.toLowerCase();

  // Master phrases (longest first)
  for (const entry of masterPhrases) {
    if (entry.in2000) continue;
    const re = new RegExp(`\\b${escapeRegExp(entry.lemma).replace(/\s+/g, "\\s+")}\\b`, "gi");
    const m = re.exec(passage);
    if (m) {
      glossary.set(m[0].toLowerCase(), { word: m[0], zh: shortenZh(entry.zh) });
    }
  }

  const protectRanges = phraseRanges(passage, phraseProtect);
  const tokens = extractTokens(passage);
  const seenLower = new Set();

  for (const tok of tokens) {
    if (seenLower.has(tok.lower)) continue;
    seenLower.add(tok.lower);

    // Skip if only appears inside phrase-protected regions
    const allTokens = tokens.filter(t => t.lower === tok.lower);
    const allProtected = allTokens.every(t => inProtectedRange(t.index, t.length, protectRanges));
    if (allProtected && !glossary.has(tok.lower)) continue;

    if (skipSet.has(tok.lower)) continue;
    if (baseWordOk(tok.lower, basic2000)) continue;

    const lemmaKey = findLemma(tok.word, byLemma);
    const masterEntry = lemmaKey ? byLemma.get(lemmaKey) : null;
    if (masterEntry?.in2000) continue;

    if (glossary.has(tok.lower)) continue;

    let zhInfo = lookupZh(tok.word, byLemma, vocabZh);
    if (zhInfo) {
      glossary.set(tok.lower, { word: tok.word, zh: shortenZh(zhInfo.zh) });
      if (zhInfo.source.startsWith("vocab")) {
        autoAdded.set(tok.lower, {
          word: tok.word,
          zh: shortenZh(zhInfo.zh),
          source: zhInfo.source,
          reason: "auto_vocab",
          count: (autoAdded.get(tok.lower)?.count || 0) + 1
        });
      }
      continue;
    }

    const dict = await fetchDictPos(tok.lower);
    if (!posAllowed(dict?.pos)) continue;
    autoAdded.set(tok.lower, {
      word: tok.word,
      pos: dict?.pos || [],
      reason: "needs_zh",
      count: (autoAdded.get(tok.lower)?.count || 0) + 1
    });
  }

  return [...glossary.values()]
    .sort((a, b) => a.word.toLowerCase().localeCompare(b.word.toLowerCase(), "en"))
    .map(({ word, zh }) => [word, zh]);
}

async function main() {
  const skipPayload = JSON.parse(fs.readFileSync(path.join(dataDir, "reading-glossary-skip.json"), "utf8"));
  const masterPayload = JSON.parse(fs.readFileSync(path.join(dataDir, "reading-glossary-master.json"), "utf8"));
  const vocab = JSON.parse(fs.readFileSync(path.join(root, "vocab-3000.json"), "utf8"));

  const skipSet = new Set(skipPayload.words.map(w => w.toLowerCase()));
  const phraseProtect = skipPayload.phraseProtect || [];
  const basic2000 = buildBasic2000(vocab);
  const vocabZh = buildVocabZhMap(vocab);
  const { byLemma, phrases: masterPhrases } = buildMasterIndex(masterPayload);
  const bank = loadReadingBank();
  const autoAdded = new Map();

  console.log(`Rebuilding glossary for ${bank.length} passages…`);
  let totalEntries = 0;
  for (let i = 0; i < bank.length; i++) {
    const item = bank[i];
    item.glossary = await buildPassageGlossary(item.passage, {
      skipSet, phraseProtect, byLemma, masterPhrases, basic2000, vocabZh, autoAdded
    });
    totalEntries += item.glossary.length;
    if ((i + 1) % 50 === 0) console.log(`  ${i + 1}/${bank.length} passages, ${totalEntries} glossary entries so far`);
  }

  const report = {
    generated: new Date().toISOString().slice(0, 10),
    passages: bank.length,
    totalGlossaryEntries: totalEntries,
    avgPerPassage: Math.round(totalEntries / bank.length * 10) / 10,
    autoAdded: [...autoAdded.values()].sort((a, b) => (b.count || 0) - (a.count || 0))
  };

  const reportDir = path.join(root, "tools", "reports");
  fs.mkdirSync(reportDir, { recursive: true });
  fs.writeFileSync(path.join(reportDir, "reading-glossary-auto-added.json"), JSON.stringify(report, null, 2) + "\n");

  console.log(`Done: ${totalEntries} entries (avg ${report.avgPerPassage}/passage)`);
  console.log(`Auto-added / needs_zh: ${report.autoAdded.length} unique words → tools/reports/reading-glossary-auto-added.json`);

  if (dryRun) {
    console.log("Dry run — reading-bank.js not written.");
    return;
  }

  fs.writeFileSync(
    path.join(root, "reading-bank.js"),
    `window.ENGLISH_READING_BANK = ${JSON.stringify(bank, null, 2)};\n`,
    "utf8"
  );
  console.log("Wrote reading-bank.js");
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
