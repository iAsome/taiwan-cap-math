import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  ENGLISH_TOKEN_PATTERN,
  candidateEnglishLemmas,
  englishVocabularyTokenSet,
} from "./english-vocabulary-scope.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const AUTHORITY_PATH = path.join(HERE, "authority", "english-vocabulary-authority.json");
const GLOSSARY_PATH = path.join(HERE, "authority", "english-stimulus-glossary.json");
let cached;

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

async function load() {
  if (cached) return cached;
  const [authorityBytes, glossaryBytes] = await Promise.all([readFile(AUTHORITY_PATH), readFile(GLOSSARY_PATH)]);
  const authority = JSON.parse(authorityBytes);
  const glossary = JSON.parse(glossaryBytes);
  assert.equal(glossary.schemaVersion, "cap8-r4-english-stimulus-glossary-v1");
  assert.equal(glossary.scopeAuthority.sha256, sha256(authorityBytes), "English stimulus glossary authority hash drift");
  assert.equal(new Set(glossary.properNames).size, glossary.properNames.length, "duplicate English stimulus proper name");
  assert.equal(new Set(glossary.entries.map((value) => value.token)).size, glossary.entries.length, "duplicate English stimulus glossary token");
  assert(glossary.entries.every((value) => value.token && value.zh && value.source), "incomplete English stimulus glossary entry");
  cached = {
    basic: englishVocabularyTokenSet(authority.tables.basic1200.entries),
    properNames: new Set(glossary.properNames),
    entries: new Map(glossary.entries.map((value) => [value.token, value])),
  };
  return cached;
}

export async function englishStimulusGlossary(strings) {
  const { basic, properNames, entries } = await load();
  const result = [];
  const seen = new Set();
  for (const value of strings) {
    for (const rawToken of String(value).match(ENGLISH_TOKEN_PATTERN) ?? []) {
      const token = rawToken.toLowerCase().replaceAll("’", "'");
      const properName = token.endsWith("'s") ? token.slice(0, -2) : token;
      if (candidateEnglishLemmas(token).some((candidate) => basic.has(candidate)) || properNames.has(properName) || seen.has(token)) continue;
      const entry = entries.get(token);
      assert(entry, `English stimulus glossary entry missing for ${token}`);
      result.push({ word: token, translation: entry.zh });
      seen.add(token);
    }
  }
  return result;
}
