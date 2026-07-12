import { HUMAN_PRODUCTION_CONFIG } from "./config.mjs";
import { HumanProductionRuntime } from "./engine.mjs";
import { migrateHumanProductionStorage } from "./storage-migration.mjs";

export async function installHumanProductionRuntime() {
  const migration = migrateHumanProductionStorage();
  const runtime = await new HumanProductionRuntime({
    manifestUrl: HUMAN_PRODUCTION_CONFIG.runtimeManifestUrl,
    syllabusLockUrl: HUMAN_PRODUCTION_CONFIG.syllabusLockUrl,
    blueprintUrl: HUMAN_PRODUCTION_CONFIG.releaseBlueprintUrl,
    expectedContentVersion: HUMAN_PRODUCTION_CONFIG.expectedContentVersion
  }).initialize();

  await runtime.loadAllUnits();
  const appUnits = runtime.buildAppUnits();
  const quizCatalog = runtime.quizCatalog();
  const unitByQuiz = new Map(quizCatalog.map(item => [item.quizId, item.v2UnitId]));

  if (window.CAP_ANALYSIS?.officialByYear && window.CAP_ANALYSIS?.primaryUnits) {
    const corrected = {};
    for (const [year, record] of Object.entries(window.CAP_ANALYSIS.officialByYear)) {
      const cr = Number(record.cr || 0);
      const total = window.CAP_ANALYSIS.primaryUnits[year]?.length || Number(record.mc || 0) + cr;
      corrected[year] = { ...record, mc: total - cr };
    }
    window.CAP_ANALYSIS = { ...window.CAP_ANALYSIS, officialByYear: corrected };
  }

  window.MATH_LEGACY_SUPPORT_UNITS = window.MATH_DATA.units;
  window.MATH_DATA = { ...window.MATH_DATA, units: appUnits };

  const prefix = HUMAN_PRODUCTION_CONFIG.storagePrefix;
  window.MATH_V2_STORAGE = Object.freeze({
    readCompleted() {
      try { return JSON.parse(localStorage.getItem(`${prefix}completed`) || "[]"); }
      catch { return []; }
    },
    writeCompleted(unitIds) {
      localStorage.setItem(`${prefix}completed`, JSON.stringify([...new Set(unitIds)]));
    },
    paperMetadata(exam) {
      return {
        engineVersion: exam.engineVersion,
        contentVersion: exam.contentVersion,
        seed: exam.seed,
        humanProduction: true
      };
    },
    restorePaper(record) {
      return runtime.restoreSavedPaper(record);
    }
  });

  window.MATH_V2_PRODUCTION_MODE = true;
  window.MATH_HUMAN_PRODUCTION_MODE = true;
  window.EXAM_ENGINE = Object.freeze({
    generate: (seed, level) => runtime.generateReleaseMock(seed, level),
    generateQuiz: (quizId, seed) => {
      const unitId = unitByQuiz.get(quizId);
      if (!unitId) throw new Error(`unknown quiz ${quizId}`);
      return runtime.generateUnitQuiz(unitId, seed);
    },
    generateUnitDrill: (numericUnitId, seed, count, level, excludeKeys) => {
      const unit = appUnits.find(item => item.id === Number(numericUnitId));
      if (!unit) throw new Error("unit not found");
      return runtime.generateUnitDrill(unit.unitId, seed, count, level, excludeKeys);
    },
    generateTopicDrill: async () => {
      throw new Error("Human Runtime correction drill uses skill IDs");
    },
    generateCorrectionDrill: (question, seed, count, excludeKeys) =>
      runtime.generateCorrectionDrill(question, seed, count, excludeKeys),
    drillQuestionSignature: question => runtime.drillQuestionSignature(question),
    quizCatalog,
    units: appUnits,
    syllabus: runtime.syllabus,
    profile: Object.freeze({
      id: runtime.blueprint.profileId,
      humanProduction: true,
      contentAuthority: HUMAN_PRODUCTION_CONFIG.contentAuthority
    }),
    engine: Object.freeze({
      ENGINE_VERSION: "human-runtime-production-r1",
      contentVersion: runtime.manifest.contentVersion,
      getSkill: skillId => runtime.getSkill(skillId),
      getLecturesByUnit: unitId => runtime.getLecturesByUnit(unitId)
    })
  });

  window.__HUMAN_PRODUCTION_R1__ = Object.freeze({
    runtime,
    config: HUMAN_PRODUCTION_CONFIG,
    blueprint: runtime.blueprint,
    quizCatalog,
    migration
  });
  document.documentElement.dataset.mathEngine = "human-production-r1";
  return window.__HUMAN_PRODUCTION_R1__;
}
