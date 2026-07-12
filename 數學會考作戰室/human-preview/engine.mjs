function hashSeed(value) {
  let h = 2166136261 >>> 0;
  for (const ch of String(value)) { h ^= ch.codePointAt(0); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function mulberry32(seed) {
  let a = seed >>> 0;
  return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
function shuffle(items, rng) {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [out[i], out[j]] = [out[j], out[i]]; }
  return out;
}
async function browserLoadJson(url) {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) throw new Error(`JSON 載入失敗：${response.status} ${url}`);
  return response.json();
}
function assert(condition, message) { if (!condition) throw new Error(message); }
function resolveUrl(pathValue, baseUrl) { return new URL(pathValue, baseUrl); }

export class HumanPreviewRuntime {
  constructor({ manifestUrl, syllabusLockUrl, expectedContentVersion, loadJson = browserLoadJson }) {
    this.manifestUrl = manifestUrl;
    this.syllabusLockUrl = syllabusLockUrl;
    this.expectedContentVersion = expectedContentVersion;
    this.loadJson = loadJson;
    this.units = new Map();
  }
  async initialize() {
    this.manifest = await this.loadJson(this.manifestUrl);
    this.syllabus = await this.loadJson(this.syllabusLockUrl);
    assert(this.manifest.previewOnly === true, "runtime manifest 必須是 preview-only");
    assert(this.manifest.productionActivationAllowed === false, "runtime manifest 不得允許 production");
    assert(this.manifest.contentAuthority === "CHATGPT_HUMAN_AUTHORED_R1", "runtime authority 不正確");
    assert(this.manifest.contentVersion === this.expectedContentVersion, "runtime contentVersion 不符");
    assert(this.manifest.unitCount === 23 && this.manifest.skillCount === 339, "runtime manifest 數量不符");
    assert(Array.isArray(this.syllabus.units) && this.syllabus.units.length === 23, "syllabus lock 單元數不符");
    this.entryByUnit = new Map(this.manifest.units.map(entry => [entry.unitId, entry]));
    this.lockByUnit = new Map(this.syllabus.units.map(unit => [unit.unitId, unit]));
    return this;
  }
  getCatalog() {
    return this.syllabus.units.map(unit => ({
      unitId: unit.unitId, numericId: unit.numericId, title: unit.title,
      gradeBand: unit.gradeBand, domain: unit.domain, description: unit.description,
      counts: this.entryByUnit.get(unit.unitId)?.counts || null
    }));
  }
  async loadUnit(unitId) {
    if (this.units.has(unitId)) return this.units.get(unitId);
    const entry = this.entryByUnit.get(unitId);
    assert(entry, `找不到 ${unitId} manifest entry`);
    const unit = await this.loadJson(resolveUrl(entry.path, this.manifestUrl));
    assert(unit.previewOnly === true && unit.productionActivationAllowed === false, `${unitId} 不是安全預覽資料`);
    assert(unit.unitId === unitId, `${unitId} identity mismatch`);
    assert(Array.isArray(unit.skills) && unit.skills.length === entry.counts.skills, `${unitId} skill count mismatch`);
    this.units.set(unitId, unit);
    return unit;
  }
  async loadAllUnits() { return Promise.all(this.getCatalog().map(unit => this.loadUnit(unit.unitId))); }
  getFigureUrl(figureId) {
    const entry = this.manifest.figureIndex?.[figureId];
    if (!entry?.sourcePath) return null;
    const marker = "數學會考作戰室/";
    const relative = entry.sourcePath.includes(marker) ? entry.sourcePath.split(marker).slice(1).join(marker) : entry.sourcePath;
    return new URL(`../${relative}`, import.meta.url);
  }
  async generateUnitQuiz(unitId, seed) {
    const unit = await this.loadUnit(unitId);
    const rng = mulberry32(hashSeed(`${unitId}:${seed}:unit-quiz`));
    const questions = unit.skills.map(skill => {
      assert(Array.isArray(skill.mcQuestions) && skill.mcQuestions.length === 12, `${skill.skillId} MC count mismatch`);
      return skill.mcQuestions[Math.floor(rng() * skill.mcQuestions.length)];
    });
    return { kind: "unit-quiz", previewOnly: true, seed: Number(seed), unitId, questionCount: questions.length, questions };
  }
  async generateFullMock(seed, { mcCount = 25, crCount = 2 } = {}) {
    const allUnits = await this.loadAllUnits();
    const rng = mulberry32(hashSeed(`full-mock:${seed}`));
    const orderedUnits = shuffle(allUnits, rng);
    const usedMc = new Set();
    const mc = [];
    let cursor = 0;
    while (mc.length < mcCount) {
      const unit = orderedUnits[cursor % orderedUnits.length];
      const skills = shuffle(unit.skills, rng);
      let picked = null;
      for (const skill of skills) {
        const band = ["basic", "standard", "advanced", "literacy"][mc.length % 4];
        const candidates = skill.mcQuestions.filter(q => q.difficulty === band && !usedMc.has(q.questionId));
        const pool = candidates.length ? candidates : skill.mcQuestions.filter(q => !usedMc.has(q.questionId));
        if (pool.length) { picked = pool[Math.floor(rng() * pool.length)]; break; }
      }
      assert(picked, "無法產生不重複的預覽模考題");
      usedMc.add(picked.questionId); mc.push(picked); cursor++;
    }
    const crPool = shuffle(allUnits.flatMap(unit => unit.skills.flatMap(skill => skill.constructedResponses || [])), rng);
    const cr = [];
    const usedCrUnits = new Set();
    for (const item of crPool) {
      if (cr.length >= crCount) break;
      if (usedCrUnits.has(item.unitId)) continue;
      usedCrUnits.add(item.unitId); cr.push(item);
    }
    assert(cr.length === crCount, "非選擇題預覽抽取不足");
    return {
      kind: "engineering-preview-mock", previewOnly: true,
      blueprintStatus: "ENGINEERING_PREVIEW_NOT_RELEASE_BLUEPRINT",
      seed: Number(seed), mcCount: mc.length, constructedResponseCount: cr.length,
      mcQuestions: mc, constructedResponses: cr
    };
  }
}

export function questionSignature(items) {
  return items.map(item => item.questionId).join("|");
}
