import { mkQuestion, mkLecture } from "./v2-shared.mjs";
import { ANSWER_INDEX_PATTERN, countZh } from "./v2-quality.mjs";

function arrangeChoices(correct, wrongs, answerIndex) {
  const d = wrongs.slice(0, 3);
  const choices = new Array(4);
  let di = 0;
  for (let i = 0; i < 4; i++) choices[i] = i === answerIndex ? correct : d[di++];
  return choices;
}

export function buildPilotQuestions(unitId, pilotDef, skillMeta, rawQuestions, content) {
  const questions = [];
  pilotDef.skills.forEach((s, i) => {
    const templates = rawQuestions[s.skillId], meta = skillMeta[s.skillId], contents = content[s.skillId];
    if (!templates || templates.length !== 4) throw new Error("Need 4 questions for " + s.skillId);
    if (!contents || contents.length !== 4) throw new Error("Need 4 content blocks for " + s.skillId);
    templates.forEach((t, vi) => {
      const [text, oldChoices, oldAns] = t, { steps, explanation, commonMistake } = contents[vi];
      const correct = oldChoices[oldAns], wrongs = oldChoices.filter((_, idx) => idx !== oldAns), answerIndex = ANSWER_INDEX_PATTERN[vi];
      const choices = arrangeChoices(correct, wrongs, answerIndex);
      const diff = s.skillId.includes("literacy") ? (vi % 2 ? "literacy" : "standard") : (vi < 2 ? "basic" : "standard");
      questions.push(mkQuestion({ unitId, numericUnitId: pilotDef.numericId, topicId: s.topicId, skillId: s.skillId, skillSeq: i + 1, variant: vi + 1, difficulty: diff, text, choices, answerIndex, explanation, steps, commonMistake, concept: meta.concept, tags: [pilotDef.domain, s.title, diff === "basic" ? "基礎概念" : "應用"], estimatedTimeSec: diff === "literacy" ? 75 : 45 }));
    });
  });
  return questions;
}

export function buildPilotLectures(unitId, pilotDef, skillMeta, rawQuestions, content) {
  return pilotDef.skills.map(s => {
    const meta = skillMeta[s.skillId], templates = rawQuestions[s.skillId], contents = content[s.skillId];
    const examples = templates.slice(0, 2).map(([q], ei) => { const c = contents[ei]; const lec = c.lectureExplanation && countZh(c.lectureExplanation) >= 30 ? c.lectureExplanation : c.explanation; return { question: q, explanation: lec }; });
    return mkLecture({ unitId, topicId: s.topicId, skillId: s.skillId, title: s.title, concept: meta.lectureConcept, formula: meta.formula, stepGuide: meta.stepGuide, examples, commonMistakes: meta.lectureMistakes, quizLink: { unitId, skillId: s.skillId } });
  });
}

export function buildPilotUnit(unitId, pilotDef, skillMeta, rawQuestions, content) {
  return { questions: buildPilotQuestions(unitId, pilotDef, skillMeta, rawQuestions, content), lectures: buildPilotLectures(unitId, pilotDef, skillMeta, rawQuestions, content) };
}
