import syllabus from "./syllabus-source.mjs";

export const UNIT_REGISTRY = Object.freeze(syllabus.units.map(unit => Object.freeze({ unitId: unit.unitId, numericId: unit.numericId, title: unit.title, modulePath: `./units/${unit.unitId}/index.mjs` })));

export default UNIT_REGISTRY;
