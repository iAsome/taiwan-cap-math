import { buildPilotUnit } from "./v2-pilot-engine.mjs";
import { U01_PILOT_UNIT, U01_SKILL_META, U01_RAW_QUESTIONS, U01_PILOT_CONTENT } from "./v2-u01-pilot-source.mjs";
import { U02_PILOT_UNIT, U02_SKILL_META, U02_RAW_QUESTIONS, U02_PILOT_CONTENT } from "./v2-u02-pilot-source.mjs";
import { U03_PILOT_UNIT, U03_SKILL_META, U03_RAW_QUESTIONS, U03_PILOT_CONTENT } from "./v2-u03-pilot-source.mjs";

export function buildAllPilotContent() {
  const u01 = buildPilotUnit("u01", U01_PILOT_UNIT, U01_SKILL_META, U01_RAW_QUESTIONS, U01_PILOT_CONTENT);
  const u02 = buildPilotUnit("u02", U02_PILOT_UNIT, U02_SKILL_META, U02_RAW_QUESTIONS, U02_PILOT_CONTENT);
  const u03 = buildPilotUnit("u03", U03_PILOT_UNIT, U03_SKILL_META, U03_RAW_QUESTIONS, U03_PILOT_CONTENT);
  return { questionsByUnit: { u01: u01.questions, u02: u02.questions, u03: u03.questions }, lecturesByUnit: { u01: u01.lectures, u02: u02.lectures, u03: u03.lectures } };
}
