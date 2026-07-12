import syllabus from "../../syllabus-source.mjs";
import questions from "./questions.mjs";
import lectures from "./lectures.mjs";

export const UNIT = syllabus.units.find(unit => unit.unitId === "u02");
export const QUESTIONS = questions;
export const LECTURES = lectures;
export default Object.freeze({ unit: UNIT, questions: QUESTIONS, lectures: LECTURES });
