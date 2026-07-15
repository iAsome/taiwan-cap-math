import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  CHINESE_LEARNING_CATEGORIES,
  validateChineseLearningCategories,
} from "../authority/chinese-learning-categories.mjs";
import {
  buildChineseWritingCalibration,
  validateChineseWritingCalibration,
} from "../chinese-writing-calibration.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const CALIBRATION_PATH = path.join(HERE, "..", "ledger", "chinese-writing-calibration.json");

test("Chinese navigation exposes complete character and writing routes", () => {
  assert.deepEqual(validateChineseLearningCategories(), {
    categories: 8,
    families: 48,
    skills: 320,
    characterSkills: 35,
    writingSkills: 24,
  });
  const titles = CHINESE_LEARNING_CATEGORIES.categories.map((category) => category.navigationTitle);
  assert(titles.includes("字音字形"));
  assert(titles.includes("作文"));
});

test("writing calibration binds every reviewed official scoring sample", async () => {
  const calibration = await buildChineseWritingCalibration();
  assert.deepEqual(await validateChineseWritingCalibration(calibration), {
    levels: 7,
    materials: 55,
    reviewedResponses: 240,
  });
  assert.deepEqual(
    calibration.scoring.profiles.map((profile) => profile.evidence.reviewedResponses),
    [0, 15, 16, 27, 46, 51, 85],
  );
});

test("writing rules preserve official holistic boundaries", async () => {
  const calibration = await buildChineseWritingCalibration();
  const zero = calibration.scoring.profiles[0];
  assert(zero.boundaries.includes("完全離題"));
  assert(zero.boundaries.includes("空白卷"));
  assert.match(calibration.scoring.profiles[1].observedPattern, /完全離題應判零級分/);
  assert.equal(calibration.scoring.fixedDimensionWeights, false);
  assert.equal(calibration.scoring.perErrorPointDeduction, false);
  assert(calibration.nonRules.some((rule) => rule.includes("成語、諺語") && rule.includes("不是高級分必要條件")));
  assert(calibration.nonRules.some((rule) => rule.includes("沒有統一最低字數、固定段數")));
  assert.equal(calibration.examConstraints.poetryFormAllowed, false);
});

test("checked-in calibration is a deterministic evidence projection", async () => {
  const checkedIn = JSON.parse(await readFile(CALIBRATION_PATH, "utf8"));
  await validateChineseWritingCalibration(checkedIn);
  assert.equal(checkedIn.calibratedEvidence.sampleTextCopied, false);
  assert.equal(checkedIn.productionContract.copiedOfficialSampleProseAllowed, false);
  assert.equal(checkedIn.productionContract.automaticScorePromiseAllowed, false);
});
