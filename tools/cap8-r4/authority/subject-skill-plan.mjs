import assert from "node:assert/strict";

const PREFIXES = Object.freeze({
  english: "ENG",
  chinese: "CHI",
  geography: "GEO",
  history: "HIS",
  civics: "CIV",
  biology: "BIO",
  physics_chemistry: "PHYCHM",
  earth_science: "EARTH",
});

function compareText(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

function unique(values, label) {
  assert.equal(new Set(values).size, values.length, `duplicate ${label}`);
}

export function materializeSubjectSkillPlan(plan, authorityNodes) {
  assert.equal(plan.schemaVersion, "cap8-r4-subject-skill-plan-v1");
  assert(Object.hasOwn(PREFIXES, plan.subject), `unsupported subject: ${plan.subject}`);
  assert(Number.isInteger(plan.expectedSkills) && plan.expectedSkills > 0, "expectedSkills must be positive");
  assert(Number.isInteger(plan.expectedAuthorityNodes) && plan.expectedAuthorityNodes > 0, "expectedAuthorityNodes must be positive");
  assert(Array.isArray(plan.families) && plan.families.length > 0, "skill families are required");

  for (const node of authorityNodes) {
    assert(Array.isArray(node.reviewedSubjects), `${node.id}: reviewed subject ownership is required`);
  }
  const applicableNodes = authorityNodes.filter((node) => node.reviewedSubjects.includes(plan.subject));
  assert.equal(applicableNodes.length, plan.expectedAuthorityNodes, `${plan.subject}: authority-node count drift`);
  const authorityByCode = new Map(applicableNodes.map((node) => [node.code, node]));
  assert.equal(authorityByCode.size, applicableNodes.length, `${plan.subject}: duplicate authority code`);

  const familyKeys = plan.families.map((family) => family.key);
  unique(familyKeys, `${plan.subject} family key`);
  unique(plan.families.map((family) => family.title), `${plan.subject} family title`);

  const prefix = PREFIXES[plan.subject];
  const skills = [];
  const familyLastSkill = new Map();
  const linkedAuthority = new Set();
  for (let familyIndex = 0; familyIndex < plan.families.length; familyIndex += 1) {
    const family = plan.families[familyIndex];
    assert.match(family.key, /^[A-Z][A-Z0-9_]+$/, `${plan.subject}: invalid family key`);
    assert(typeof family.title === "string" && family.title.length > 0, `${family.key}: title missing`);
    assert(Array.isArray(family.authorityCodes) && family.authorityCodes.length > 0, `${family.key}: authorityCodes missing`);
    assert(Array.isArray(family.prerequisiteFamilyKeys), `${family.key}: prerequisiteFamilyKeys missing`);
    assert(Array.isArray(family.skills) && family.skills.length > 0, `${family.key}: skills missing`);
    unique(family.authorityCodes, `${family.key} authority code`);
    unique(family.skills, `${family.key} skill title`);

    const authorityRefs = family.authorityCodes.map((code) => {
      const node = authorityByCode.get(code);
      assert(node, `${family.key}: unknown ${plan.subject} authority code ${code}`);
      linkedAuthority.add(node.id);
      return node.id;
    }).sort(compareText);
    const rootPrerequisites = family.prerequisiteFamilyKeys.map((key) => {
      const skillId = familyLastSkill.get(key);
      assert(skillId, `${family.key}: prerequisite family must appear earlier: ${key}`);
      return skillId;
    });
    unique(rootPrerequisites, `${family.key} root prerequisite`);

    const unitId = `${prefix}_R4_U${String(familyIndex + 1).padStart(2, "0")}`;
    let previousSkillId = null;
    for (const title of family.skills) {
      assert(typeof title === "string" && title.length >= 4, `${family.key}: skill title is too short`);
      const id = `${prefix}_R4_S${String(skills.length + 1).padStart(3, "0")}`;
      skills.push({
        id,
        subject: plan.subject,
        unitId,
        title,
        authorityRefs,
        prerequisites: previousSkillId ? [previousSkillId] : rootPrerequisites,
      });
      previousSkillId = id;
    }
    familyLastSkill.set(family.key, previousSkillId);
  }

  assert.equal(skills.length, plan.expectedSkills, `${plan.subject}: skill floor mismatch`);
  unique(skills.map((skill) => skill.id), `${plan.subject} skill ID`);
  unique(skills.map((skill) => skill.title), `${plan.subject} skill title`);
  const uncovered = applicableNodes.filter((node) => !linkedAuthority.has(node.id));
  assert.deepEqual(uncovered.map((node) => node.code), [], `${plan.subject}: orphan authority nodes`);
  return Object.freeze({
    subject: plan.subject,
    families: plan.families.length,
    authorityNodes: applicableNodes.length,
    skills: Object.freeze(skills),
  });
}
