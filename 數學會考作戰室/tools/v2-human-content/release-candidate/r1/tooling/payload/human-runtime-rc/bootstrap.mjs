import { HUMAN_RC_CONFIG } from "./config.mjs";
import { HumanReleaseCandidateRuntime } from "./engine.mjs";

export async function installHumanRuntimeRc() {
  const runtime = await new HumanReleaseCandidateRuntime({
    manifestUrl: HUMAN_RC_CONFIG.runtimeManifestUrl,
    syllabusLockUrl: HUMAN_RC_CONFIG.syllabusLockUrl,
    blueprintUrl: HUMAN_RC_CONFIG.releaseBlueprintUrl,
    expectedContentVersion: HUMAN_RC_CONFIG.expectedContentVersion
  }).initialize();
  await runtime.loadAllUnits();
  const appUnits = runtime.buildAppUnits();
  const quizCatalog = runtime.quizCatalog();
  const unitByQuiz = new Map(quizCatalog.map(item => [item.quizId, item.v2UnitId]));

  if (window.CAP_ANALYSIS?.officialByYear && window.CAP_ANALYSIS?.primaryUnits) {
    const corrected = {};
    for (const [year, record] of Object.entries(window.CAP_ANALYSIS.officialByYear)) {
      const cr = Number(record.cr || 0); const total = window.CAP_ANALYSIS.primaryUnits[year]?.length || Number(record.mc || 0) + cr;
      corrected[year] = { ...record, mc: total - cr };
    }
    window.CAP_ANALYSIS = { ...window.CAP_ANALYSIS, officialByYear: corrected };
  }

  const legacyUnits = window.MATH_DATA.units;
  window.MATH_LEGACY_SUPPORT_UNITS = legacyUnits;
  window.MATH_DATA = { ...window.MATH_DATA, units: appUnits };
  const prefix = HUMAN_RC_CONFIG.storagePrefix;
  window.MATH_V2_STORAGE = Object.freeze({
    readCompleted() { try { return JSON.parse(localStorage.getItem(`${prefix}completed`) || "[]"); } catch { return []; } },
    writeCompleted(unitIds) { localStorage.setItem(`${prefix}completed`, JSON.stringify([...new Set(unitIds)])); },
    paperMetadata(exam) { return { engineVersion: exam.engineVersion, contentVersion: exam.contentVersion, seed: exam.seed, releaseCandidate: true }; },
    restorePaper(record) { return runtime.restoreSavedPaper(record); }
  });
  window.MATH_V2_PRODUCTION_MODE = true;
  window.MATH_HUMAN_RC_MODE = true;
  window.EXAM_ENGINE = Object.freeze({
    generate: (seed, level) => runtime.generateReleaseMock(seed, level),
    generateQuiz: (quizId, seed) => { const unitId = unitByQuiz.get(quizId); if (!unitId) throw new Error(`unknown quiz ${quizId}`); return runtime.generateUnitQuiz(unitId, seed); },
    generateUnitDrill: (numericUnitId, seed, count, level, excludeKeys) => { const unit = appUnits.find(item => item.id === Number(numericUnitId)); if (!unit) throw new Error("unit not found"); return runtime.generateUnitDrill(unit.unitId, seed, count, level, excludeKeys); },
    generateTopicDrill: async () => { throw new Error("Human RC correction drill uses skill IDs"); },
    generateCorrectionDrill: (question, seed, count, excludeKeys) => runtime.generateCorrectionDrill(question, seed, count, excludeKeys),
    drillQuestionSignature: question => runtime.drillQuestionSignature(question),
    quizCatalog, units: appUnits, syllabus: runtime.syllabus,
    profile: Object.freeze({ id: runtime.blueprint.profileId, releaseCandidateOnly: true, productionActivationAllowed: false }),
    engine: Object.freeze({
      ENGINE_VERSION: "human-runtime-rc-r1", contentVersion: runtime.manifest.contentVersion,
      getSkill: skillId => runtime.getSkill(skillId), getLecturesByUnit: unitId => runtime.getLecturesByUnit(unitId)
    })
  });
  window.__HUMAN_RC_R1__ = Object.freeze({ runtime, config: HUMAN_RC_CONFIG, blueprint: runtime.blueprint, quizCatalog });
  document.documentElement.dataset.mathEngine = "human-rc-r1";
  return window.__HUMAN_RC_R1__;
}
