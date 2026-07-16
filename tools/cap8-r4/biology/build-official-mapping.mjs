import assert from "node:assert/strict";
import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..", "..");
const REVIEW_ROOT = path.join(REPO_ROOT, "tools", "cap8-r4", "ledger", "reviews", "items");
const GRAPH_PATH = path.join(REPO_ROOT, "tools", "cap8-r4", "authority", "frozen-authority-graph.json");

const REVIEWED_SKILL_OVERRIDES = Object.freeze({
  "biomagnification-food-chain-order": "BIO_R4_S208",
  "de-novo-mutation-parent-genotypes": "BIO_R4_S138",
  "dominant-trait-pedigree-inference": "BIO_R4_S135",
  "enzyme-protein-composition": "BIO_R4_S044",
  "food-chain-energy-pyramid": "BIO_R4_S190",
  "fungus-taxonomic-relatedness": "BIO_R4_S154",
  "microscope-type-selection": "BIO_R4_S009",
  "nitrogen-transfer-food-chain": "BIO_R4_S193",
  "photosynthesis-rate-measurement": "BIO_R4_S176",
  "plant-cell-osmosis-plasmolysis": "BIO_R4_S028",
  "plant-cell-wall-osmosis": "BIO_R4_S028",
  "sensory-perception-and-brain-judgment": "BIO_R4_S085",
  "venom-circulation-tissue-diffusion": "BIO_R4_S067",
  "wildlife-overexploitation": "BIO_R4_S200",
});

const RULES = [
  [/microscope.*(?:size|scale)|size-scale-cell/u, "BIO_R4_S015"],
  [/microscope.*(?:orientation|reversal)|dissecting-microscope-image/u, "BIO_R4_S013"],
  [/microscope.*(?:high-power|field|focus)/u, "BIO_R4_S012"],
  [/(?:microscope-type|historical-modern-microscope)/u, "BIO_R4_S009"],
  [/(?:experiment.*variable|identify-experimental-variable)/u, "BIO_R4_S003"],
  [/(?:experimental.*control|controlled-.*experiment|pretreatment-control)/u, "BIO_R4_S004"],
  [/(?:evaluate-hypothesis|experiment.*evidence|treatment-mass-change)/u, "BIO_R4_S007"],
  [/(?:ecological-data-association|claim-evaluation|falsifying-universal|causation-counterexample)/u, "BIO_R4_S217"],
  [/(?:operational-definition|multi-variable.*experiment|experimental.*limit)/u, "BIO_R4_S218"],
  [/(?:data|graph|proportion|relative-percent).*interpret|select.*graph/u, "BIO_R4_S215"],
  [/(?:selective-membrane|membrane-diffusion)/u, "BIO_R4_S025"],
  [/(?:osmosis|isotonic|plasmolysis)/u, "BIO_R4_S027"],
  [/(?:plant-cell-wall-osmosis|plant-cell-osmosis)/u, "BIO_R4_S028"],
  [/(?:plant-cell.*mitochondrion|mitochondrion-identification|photosynthesis-respiration-organelle)/u, "BIO_R4_S022"],
  [/(?:prokaryote-cell-structure|fungal-cell-structure|prokaryote-genetic-material)/u, "BIO_R4_S159"],
  [/(?:nutrition-table|protein.*function|enzyme-protein-composition)/u, "BIO_R4_S041"],
  [/(?:enzyme.*temperature|denaturation|tea-processing|fermentation-rate-temperature)/u, "BIO_R4_S045"],
  [/(?:enzyme.*ph|oral-ph-saliva)/u, "BIO_R4_S046"],
  [/(?:enzyme.*experiment|amylase.*test|protease.*graph|yeast.*experiment)/u, "BIO_R4_S047"],
  [/(?:enzyme|catalyst)/u, "BIO_R4_S044"],
  [/(?:protein-digestion-product|starch-digestion-product|digestive-fluid|bile-fat|amylase|protein-digestion-start)/u, "BIO_R4_S051"],
  [/(?:digestive-tract|digestion)/u, "BIO_R4_S049"],
  [/(?:exhalation|inhalation|breathing-diaphragm|respiration.*mechanic)/u, "BIO_R4_S060"],
  [/(?:respiration-photosynthesis|photosynthesis-and-respiration)/u, "BIO_R4_S174"],
  [/(?:cardiopulmonary|systemic.*return|heart-chamber|mitral-valve|circulation)/u, "BIO_R4_S066"],
  [/(?:blood-cell|platelets|bleeding-time)/u, "BIO_R4_S065"],
  [/(?:venom-circulation|tissue-diffusion)/u, "BIO_R4_S067"],
  [/(?:kidney|renal|urea|excretory)/u, "BIO_R4_S074"],
  [/(?:thermoregulation|temperature-regulation)/u, "BIO_R4_S077"],
  [/(?:reflex|nervous-system-response|reaction-game)/u, "BIO_R4_S082"],
  [/(?:voluntary-motor-nerve-path)/u, "BIO_R4_S082"],
  [/(?:sensory|olfactory|hearing|perception)/u, "BIO_R4_S084"],
  [/(?:cerebellum|brain-control|central-nervous)/u, "BIO_R4_S081"],
  [/(?:hormone-transport|parathyroid)/u, "BIO_R4_S088"],
  [/(?:blood-glucose|insulin)/u, "BIO_R4_S091"],
  [/(?:sexual-reproduction-inheritance|self-pollination-sexual|fertilization-comparison)/u, "BIO_R4_S105"],
  [/(?:asexual-reproduction|vegetative-reproduction|clone-versus-sexual|mitosis-in-vegetative)/u, "BIO_R4_S104"],
  [/(?:plant-tissue-culture-mitosis|same-plant-somatic-genotype)/u, "BIO_R4_S106"],
  [/(?:flower-pollination|pollination-target)/u, "BIO_R4_S111"],
  [/(?:flower-ovary|seed-plant-angiosperm-fruit)/u, "BIO_R4_S112"],
  [/(?:seed-germination|seed-soaking)/u, "BIO_R4_S113"],
  [/(?:gymnosperm|angiosperm)/u, "BIO_R4_S109"],
  [/(?:sex-chromosome-from-somatic|sex-chromosomes-in-cell|sex-chromosome-number)/u, "BIO_R4_S120"],
  [/(?:meiotic|diploid-haploid|chromosome-alleles|plant-diploid-haploid)/u, "BIO_R4_S126"],
  [/(?:monohybrid|recessive-cross|mendelian|dominant-|recessive-offspring)/u, "BIO_R4_S133"],
  [/(?:pedigree|parent-genotypes)/u, "BIO_R4_S135"],
  [/(?:abo-blood)/u, "BIO_R4_S136"],
  [/(?:transgenic|mutation)/u, "BIO_R4_S139"],
  [/(?:artificial-selection|selective-breeding|corn-selective)/u, "BIO_R4_S140"],
  [/(?:camouflage|natural-selection|insecticide-resistance|antibacterial-resistance)/u, "BIO_R4_S146"],
  [/(?:fossil|plant-evolution|phylogenetic|common-ancestor)/u, "BIO_R4_S149"],
  [/(?:same-species-fertile|binomial|taxonomy|classification|kingdom)/u, "BIO_R4_S151"],
  [/(?:hermit-crab-classification)/u, "BIO_R4_S152"],
  [/(?:biodiversity)/u, "BIO_R4_S155"],
  [/(?:fungus-taxonomic|microbe|bacteria|virus|fermentation)/u, "BIO_R4_S159"],
  [/(?:infection|incubation-period)/u, "BIO_R4_S160"],
  [/(?:xylem|phloem|vascular-bundle|cambium|girdling)/u, "BIO_R4_S166"],
  [/(?:plant-nitrogen-uptake)/u, "BIO_R4_S165"],
  [/(?:transpiration|stomata)/u, "BIO_R4_S168"],
  [/(?:photosynthesis-reactant|photosynthesis-rate|green-white-stem|prevent-bamboo|euglena-light)/u, "BIO_R4_S172"],
  [/(?:controlled-atmosphere-fruit-storage)/u, "BIO_R4_S061"],
  [/(?:phototropic|shoot-response|plant-response-time)/u, "BIO_R4_S177"],
  [/(?:population-size|population-increase|mark-recapture)/u, "BIO_R4_S181"],
  [/(?:mutualism|parasite-host|competition-and-predation|species-interaction|food-web-predation)/u, "BIO_R4_S183"],
  [/(?:food-web-pollutant-transfer)/u, "BIO_R4_S208"],
  [/(?:food-web|food-chain)/u, "BIO_R4_S188"],
  [/(?:energy-pyramid|trophic)/u, "BIO_R4_S190"],
  [/(?:nitrogen-transfer|carbon-dioxide-seasonal|carbon-cycle)/u, "BIO_R4_S194"],
  [/(?:ecological.*stability|ecosystem.*stability)/u, "BIO_R4_S198"],
  [/(?:artificial-reef|wildlife-overexploitation|iucn|habitat)/u, "BIO_R4_S202"],
  [/(?:biomagnification|pollutant-transfer|pesticide|pollution)/u, "BIO_R4_S208"],
  [/(?:insecticide-effectiveness-from-survivor-data)/u, "BIO_R4_S147"],
  [/(?:taxonomic-name-information-limits)/u, "BIO_R4_S151"],
  [/(?:bamboo-cyanide-distribution-inference)/u, "BIO_R4_S216"],
  [/(?:carbon-emission|global-warming)/u, "BIO_R4_S211"],
];

async function candidates() {
  const files = (await readdir(REVIEW_ROOT)).filter((name) => name.endsWith("integrated-natural.json")).sort();
  const result = [];
  for (const file of files) {
    const review = JSON.parse(await readFile(path.join(REVIEW_ROOT, file), "utf8"));
    for (const item of review.items ?? []) {
      if ([item.primarySubject, ...(item.secondarySubjects ?? [])].includes("biology")) result.push(item);
    }
  }
  return result.sort((left, right) => left.candidateId.localeCompare(right.candidateId, "en"));
}

function mappedSkill(item) {
  for (const skill of item.skills) if (REVIEWED_SKILL_OVERRIDES[skill]) return REVIEWED_SKILL_OVERRIDES[skill];
  const text = `${item.skills.join(" ")} ${item.reasoningOperations.join(" ")}`;
  return RULES.find(([pattern]) => pattern.test(text))?.[1] ?? null;
}

export async function buildOfficialMapping() {
  const graph = JSON.parse(await readFile(GRAPH_PATH, "utf8"));
  const skillIds = graph.skills.filter((skill) => skill.subject === "biology").map((skill) => skill.id).sort();
  const reviewedCandidates = await candidates();
  const unmapped = reviewedCandidates.filter((item) => item.primarySubject === "biology" && !mappedSkill(item));
  assert.equal(unmapped.length, 0, `unmapped primary biology items:\n${unmapped.map((item) => `${item.candidateId}\t${item.skills.join(",")}`).join("\n")}`);
  const records = reviewedCandidates.map((item) => {
    if (item.primarySubject !== "biology") return {
      candidateId: item.candidateId,
      officialSkill: item.skills[0],
      status: "cross-subject-reference",
      skillId: null,
      reviewNote: `官方審查將本題列為${item.primarySubject}主責、生物次要關聯；保留供整合自然校準，不冒充生物單科直接覆蓋。`,
    };
    const skillId = mappedSkill(item);
    assert(skillId, `${item.candidateId}: unmapped primary biology item (${item.skills.join(", ")})`);
    assert(skillIds.includes(skillId), `${item.candidateId}: mapping points outside biology`);
    return {
      candidateId: item.candidateId,
      officialSkill: item.skills[0],
      status: "mapped-primary",
      skillId,
      mappingBasis: item.skills.some((skill) => REVIEWED_SKILL_OVERRIDES[skill]) ? "reviewed-exact-skill-override" : "deterministic-skill-rule",
      reviewNote: `依官方獨立解題紀錄的技能 ${item.skills[0]}、答案證據與推理操作，對應至 ${skillId} 作題型與認知需求校準；不複製官方題文。`,
    };
  });
  assert.equal(records.length, 220);
  const calibrationMap = Object.fromEntries(skillIds.map((skillId) => [skillId, records.filter((record) => record.skillId === skillId).map((record) => record.candidateId)]));
  const ledger = { schemaVersion: "cap8-r4-biology-official-mapping-v1", source: "106-115 official integrated-natural semantic review ledgers", records };
  await writeFile(path.join(HERE, "official-item-mapping.json"), `${JSON.stringify(ledger, null, 2)}\n`, "utf8");
  await writeFile(path.join(HERE, "official-calibration-map.json"), `${JSON.stringify(calibrationMap, null, 2)}\n`, "utf8");
  return { candidates: records.length, primary: records.filter((record) => record.status === "mapped-primary").length, crossSubject: records.filter((record) => record.status === "cross-subject-reference").length };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = await buildOfficialMapping();
  console.log(`build-official-mapping: OK - ${result.candidates} candidates (${result.primary} primary, ${result.crossSubject} cross-subject)`);
}
