import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const VOCABULARY_PATH = path.join(HERE, "authority", "english-vocabulary-authority.json");
const TOKEN_PATTERN = /[A-Za-z]+(?:['’][A-Za-z]+)?/g;
const IRREGULAR = new Map(Object.entries({
  ate: "eat",
  began: "begin",
  became: "become",
  begun: "begin",
  best: "good",
  better: "good",
  brought: "bring",
  built: "build",
  bought: "buy",
  came: "come",
  children: "child",
  chosen: "choose",
  did: "do",
  does: "do",
  done: "do",
  drank: "drink",
  driven: "drive",
  drove: "drive",
  dying: "die",
  eaten: "eat",
  felt: "feel",
  found: "find",
  forgot: "forget",
  forgotten: "forget",
  gave: "give",
  given: "give",
  gone: "go",
  got: "get",
  had: "have",
  has: "have",
  knew: "know",
  known: "know",
  left: "leave",
  lost: "lose",
  lying: "lie",
  made: "make",
  met: "meet",
  paid: "pay",
  ran: "run",
  rang: "ring",
  said: "say",
  sat: "sit",
  saw: "see",
  seen: "see",
  slept: "sleep",
  spoke: "speak",
  spoken: "speak",
  taught: "teach",
  teeth: "tooth",
  thought: "think",
  took: "take",
  tying: "tie",
  went: "go",
  written: "write",
  wrote: "write",
}));
const CONTRACTIONS = new Map(Object.entries({
  "aren't": "are",
  "can't": "can",
  cannot: "can",
  "didn't": "do",
  "doesn't": "do",
  "don't": "do",
  "hasn't": "have",
  "haven't": "have",
  "isn't": "is",
  "wasn't": "was",
  "weren't": "were",
  "won't": "will",
  "wouldn't": "would",
}));

function tokenSet(entries) {
  return new Set(entries.flatMap((entry) => entry.forms.flatMap((form) => form.toLowerCase().match(TOKEN_PATTERN) ?? [])));
}

function candidateLemmas(rawToken) {
  const first = rawToken.toLowerCase().replaceAll("’", "'");
  const values = new Set([first]);
  const queue = [first];
  while (queue.length) {
    const token = queue.shift();
    const add = (candidate) => {
      if (candidate.length >= 2 && !values.has(candidate)) {
        values.add(candidate);
        queue.push(candidate);
      }
    };
    if (IRREGULAR.has(token)) add(IRREGULAR.get(token));
    if (CONTRACTIONS.has(token)) add(CONTRACTIONS.get(token));
    if (token.endsWith("'s")) add(token.slice(0, -2));
    if (token.length > 4 && token.endsWith("ies")) add(`${token.slice(0, -3)}y`);
    if (token.length > 4 && token.endsWith("ied")) add(`${token.slice(0, -3)}y`);
    if (token.length > 3 && token.endsWith("es")) {
      add(token.slice(0, -2));
      add(token.slice(0, -1));
    }
    if (token.length > 3 && token.endsWith("s")) add(token.slice(0, -1));
    if (token.length > 3 && token.endsWith("ed")) {
      add(token.slice(0, -2));
      add(token.slice(0, -1));
      const base = token.slice(0, -2);
      if (base.at(-1) === base.at(-2)) add(base.slice(0, -1));
    }
    if (token.length > 4 && token.endsWith("ing")) {
      const base = token.slice(0, -3);
      add(base);
      add(`${base}e`);
      if (base.at(-1) === base.at(-2)) add(base.slice(0, -1));
    }
    if (token.length > 4 && token.endsWith("ly")) add(token.slice(0, -2));
    if (token.length > 4 && token.endsWith("er")) add(token.slice(0, -2));
    if (token.length > 5 && token.endsWith("est")) add(token.slice(0, -3));
  }
  return [...values];
}

function studentVisibleStrings(source) {
  return [
    ...source.questions.flatMap((item) => [item.stem, ...item.options, ...item.reasons]),
    ...source.lectures.flatMap((item) => [
      ...item.objectives,
      ...item.sections.flatMap((section) => [section.title, section.content]),
      ...item.workedExamples.flatMap((example) => [example.prompt, ...example.steps, example.answer, example.why]),
      ...item.misconceptions.flatMap((entry) => [entry.belief, entry.whyWrong, entry.correction]),
      ...item.checks.flatMap((entry) => [entry.prompt, entry.answer, entry.reason]),
    ]),
  ];
}

export async function inspectEnglishVocabularyScope(source, policy, { vocabularyPath = VOCABULARY_PATH } = {}) {
  const index = JSON.parse(await readFile(vocabularyPath, "utf8"));
  const basic = tokenSet(index.tables.basic1200.entries);
  const additional = tokenSet(index.tables.additional800.entries);
  const names = new Set(policy.properNames.map((value) => value.toLowerCase()));
  const notation = new Set(policy.grammarNotation.flatMap((value) => value.toLowerCase().match(TOKEN_PATTERN) ?? []));
  const malformed = new Set(policy.malformedDistractors.map((value) => value.toLowerCase()));
  const governedAdditional = new Set(policy.additionalLearningTerms.map((value) => value.toLowerCase()));
  const report = { basic: new Set(), additional: new Set(), names: new Set(), notation: new Set(), malformed: new Set(), unknown: new Set() };
  for (const value of studentVisibleStrings(source)) {
    for (const rawToken of value.match(TOKEN_PATTERN) ?? []) {
      const token = rawToken.toLowerCase().replaceAll("’", "'");
      const possessiveName = token.endsWith("'s") ? token.slice(0, -2) : null;
      if (names.has(token) || (possessiveName && names.has(possessiveName))) report.names.add(possessiveName ?? token);
      else if (malformed.has(token)) report.malformed.add(token);
      else if (notation.has(token)) report.notation.add(token);
      else {
        const candidates = candidateLemmas(token);
        const basicLemma = candidates.find((candidate) => basic.has(candidate));
        const additionalLemma = candidates.find((candidate) => additional.has(candidate));
        if (basicLemma) report.basic.add(basicLemma);
        else if (additionalLemma && governedAdditional.has(additionalLemma)) report.additional.add(additionalLemma);
        else if (additionalLemma) report.unknown.add(`${token}->${additionalLemma}:table2-not-governed`);
        else report.unknown.add(token);
      }
    }
  }
  return Object.fromEntries(Object.entries(report).map(([key, values]) => [key, [...values].sort()]));
}

export async function validateEnglishVocabularyScope(source, policy, options) {
  assert.equal(policy.capQuestionBasis, "appendix-5-table-1");
  assert.equal(new Set(policy.additionalLearningTerms.map((value) => value.toLowerCase())).size, policy.additionalLearningTerms.length);
  const report = await inspectEnglishVocabularyScope(source, policy, options);
  assert.deepEqual(report.unknown, [], `${source.unitId}: English vocabulary outside governed official tables:\n${report.unknown.join("\n")}`);
  assert.deepEqual(
    report.additional,
    [...policy.additionalLearningTerms].map((value) => value.toLowerCase()).sort(),
    `${source.unitId}: governed Table 2 terms must exactly match actual use`,
  );
  return report;
}
