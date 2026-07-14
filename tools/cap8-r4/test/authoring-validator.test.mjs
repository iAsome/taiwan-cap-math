import assert from "node:assert/strict";
import test from "node:test";
import { validateAuthoringRecord } from "../authoring-validator.mjs";

function question(overrides = {}) {
  return {
    id: "EN_Q_000001",
    subject: "english",
    skillIds: ["EN_SKILL_001"],
    authorityRefs: ["EN_AUTH_001"],
    stimulusId: null,
    stem: "Would you like some tea?",
    options: ["Yes, please.", "At six.", "On the desk."],
    answerIndex: 0,
    optionRationales: [
      { optionIndex: 0, isCorrect: true, reason: "It accepts the offer naturally." },
      { optionIndex: 1, isCorrect: false, reason: "It gives a time instead of answering the offer." },
      { optionIndex: 2, isCorrect: false, reason: "It gives a place instead of answering the offer." }
    ],
    difficulty: "foundation",
    cognitiveProcess: ["apply"],
    representationType: "dialogue",
    misconceptionTargets: ["communication-function"],
    provenance: {
      status: "original",
      authorRole: "R4 content author",
      copyrightStatus: "original wording",
      sourceRefs: ["CAP_ENGLISH"]
    },
    independentReviews: [
      { reviewerRole: "solver-a", derivedAnswerIndex: 0, evidence: "The response accepts an offer.", status: "pass" },
      { reviewerRole: "solver-b", derivedAnswerIndex: 0, evidence: "The other choices answer time or place.", status: "pass" }
    ],
    assets: [],
    ...overrides
  };
}

test("authoring records do not require a premature final audit", async () => {
  assert.equal(await validateAuthoringRecord("question", question()), true);
});

test("authoring validation rejects an independent answer disagreement", async () => {
  const value = question();
  value.independentReviews[1].derivedAnswerIndex = 1;
  await assert.rejects(validateAuthoringRecord("question", value), /independent review disagrees/);
});

test("authoring validation ties every rationale to one option", async () => {
  const value = question();
  value.optionRationales[2].optionIndex = 1;
  await assert.rejects(validateAuthoringRecord("question", value), /option rationale indices mismatch/);
});
