import assert from "node:assert/strict";
import test from "node:test";
import { materializeEnglishCorpus } from "../build-english-corpus.mjs";
import { loadEnglishUnitSource } from "../build-english-unit.mjs";
import { ENGLISH_SEMANTIC_REVISIONS } from "../english-semantic-revisions.mjs";
import { englishFormalQuestionIds } from "../english-vocabulary-scope.mjs";

const OBSOLETE_READING_OPERATIONS = new Set([
  "count-locked-paragraph-blocks",
  "scan-exact-line-and-locate-paragraph",
  "identify-earliest-selected-paragraph",
  "identify-latest-selected-paragraph",
  "verify-whole-text-final-sentence",
  "use-ending-position-to-confirm-final-emphasis",
]);
const GIVEAWAY = /(principal, principal|no more person|everyone is yesterday|your age is not soup|cooking is a school bus|present next year yesterday|throw the cart away|keep it forever|cancel the school year|ignore the fever|stay awake all night)/iu;
const SKELETON_NOISE = new Set("ava ben cora dylan emma finn grace hugo iris jack monday tuesday wednesday thursday friday saturday sunday next eight nine ten eleven noon one two three four five thirty fifteen twenty forty clock".split(" "));

function normalized(value) {
  return String(value).normalize("NFKC").replace(/\s+/gu, " ").trim().toLowerCase();
}

function wordCount(value) {
  return String(value).trim().split(/\s+/u).filter(Boolean).length;
}

function skeletonTokens(value) {
  return new Set((String(value).toLowerCase().match(/[a-z]+/gu) ?? []).filter((token) => !SKELETON_NOISE.has(token)));
}

function jaccard(left, right) {
  let common = 0;
  for (const token of left) if (right.has(token)) common += 1;
  return common / (left.size + right.size - common);
}

test("English student-visible questions reject mechanical templates and answer-length giveaways", { timeout: 60_000 }, async () => {
  const corpus = await materializeEnglishCorpus({ synthesizeAudio: false });
  const questions = [...corpus.questions, ...corpus.stimulusQuestions];
  for (const question of questions) {
    assert.doesNotMatch(question.stem, /^In (?:Reading|Listening) Set \d+/u, `${question.id}: set number must not create fake uniqueness`);
    if (question.id.includes("_LISTEN_")) {
      assert.doesNotMatch(question.stem, /[“”]/u, `${question.id}: stem must not quote answer-bearing transcript text`);
      assert.doesNotMatch(question.stem, /first speaker trying|second speaker|should the listener do/u, `${question.id}: stem assigns evidence or action to the wrong role`);
      assert.doesNotMatch(question.stem, /\b(?:one|two|three)-person\b|-(?:the-table|feature)\b/u, `${question.id}: stem exposes a mechanical scene template`);
      assert(!normalized(question.stem).includes(normalized(question.options[question.answerIndex])), `${question.id}: stem reveals its own answer`);
      assert.doesNotMatch(question.optionRationales.map((value) => value.reason).join("\n"), /。，|；[^\n]*，所以/u, `${question.id}: malformed bilingual punctuation`);
    }
    assert(!question.cognitiveProcess.some((value) => OBSOLETE_READING_OPERATIONS.has(value)), `${question.id}: obsolete locator operation`);
    assert.doesNotMatch([question.stem, ...question.options].join("\n"), GIVEAWAY, `${question.id}: absurd giveaway distractor`);
    assert.doesNotMatch(question.optionRationales.map((value) => value.reason).join("\n"), /此項改動了說話目的、關鍵細節或最後行動|與完整逐字稿不合/u, `${question.id}: generic listening rationale`);
    const correct = wordCount(question.options[question.answerIndex]);
    const wrong = question.options.map(wordCount).filter((_, index) => index !== question.answerIndex).sort((a, b) => a - b);
    assert(!(correct >= wrong.at(-1) + 4 && correct > 2 * wrong[1]), `${question.id}: correct option is exposed by length (${correct} vs ${wrong.join("/")})`);
  }
  const byId = new Map(questions.map((question) => [question.id, question]));
  for (const [id, value] of ENGLISH_SEMANTIC_REVISIONS) {
    const revisions = typeof value[0] === "string" ? [value] : value;
    const question = byId.get(id);
    assert(question, `${id}: revised question missing`);
    for (const [from, to] of revisions) {
      const index = question.options.indexOf(to);
      assert(index >= 0, `${id}: revised distractor missing`);
      assert(!normalized(question.optionRationales[index].reason).includes(normalized(from)), `${id}: rationale still quotes retired distractor`);
    }
  }
});

test("all rewritten reading decisions are independently bound to passage evidence", { timeout: 60_000 }, async () => {
  const corpus = await materializeEnglishCorpus({ synthesizeAudio: false });
  for (const item of corpus.reading) {
    for (const question of item.questions.slice(1)) {
      const passage = normalized(item.passage);
      const matches = question.options.map((option) => passage.includes(normalized(option)));
      assert.equal(matches.filter(Boolean).length, 1, `${question.id}: passage must contain exactly one option`);
      assert.equal(matches.indexOf(true), question.answerIndex, `${question.id}: answer must be the passage-supported option`);
    }
  }
  for (const item of [...corpus.reading, ...corpus.listening]) {
    for (const question of item.questions) {
      const answer = normalized(question.options[question.answerIndex]);
      for (const sibling of item.questions) if (sibling !== question) {
        assert(!normalized(sibling.stem).includes(answer), `${sibling.id}: stem reveals ${question.id} answer`);
      }
    }
  }
});

test("response and discourse listening retain distinct locked scripts and question constructions", { timeout: 60_000 }, async () => {
  const corpus = await materializeEnglishCorpus({ synthesizeAudio: false });
  for (const item of corpus.listening) {
    assert.doesNotMatch(item.transcript, /One person[^.]*wearing (?:hats|scarves)|\band with no marked accessory\b|\bthe library library\b|we will use it in the opening scene|weather update for library/u, `${item.id}: malformed listening template`);
  }
  for (const item of corpus.listening.filter(({ id }) => Number(id.slice(-3)) >= 291)) assert.match(item.transcript, /new [^.]* bottle keeps drinks cold/u, `${item.id}: product claim must name a plausible drink container`);
  for (const section of ["response", "discourse"]) {
    const items = corpus.listening.filter((item) => item.section === section);
    assert.equal(items.length, 100);
    assert.equal(new Set(items.map((item) => normalized(item.transcript))).size, items.length, `${section}: duplicate transcript`);
    const questions = items.flatMap((item) => item.questions);
    assert.equal(new Set(questions.map((question) => JSON.stringify([normalized(question.stem), question.options.map(normalized).sort()]))).size, questions.length, `${section}: duplicate visible construction`);
    const signatures = items.map((item) => skeletonTokens(item.transcript));
    for (let left = 0; left < signatures.length; left += 1) for (let right = left + 1; right < signatures.length; right += 1) {
      assert(jaccard(signatures[left], signatures[right]) <= 0.9, `${section}: near-copy transcript skeleton ${items[left].id}/${items[right].id}`);
    }
  }
});

test("official-form language-component pools contain only Appendix 5 Table 1 question faces", { timeout: 60_000 }, async () => {
  const corpus = await materializeEnglishCorpus({ synthesizeAudio: false });
  for (const unit of corpus.units.slice(0, 33)) {
    const source = await loadEnglishUnitSource(unit.unitId);
    const expected = await englishFormalQuestionIds(source.questions, source.vocabularyPolicy);
    assert(expected.length > 0, `${unit.unitId}: empty official-form pool`);
    assert.deepEqual(unit.formalQuestionIds, expected, `${unit.unitId}: formal pool scope drift`);
  }
});
