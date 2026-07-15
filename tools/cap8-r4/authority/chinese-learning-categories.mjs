import assert from "node:assert/strict";
import { CHINESE_SKILL_PLAN } from "./skill-plans/chinese.mjs";

export const CHINESE_LEARNING_CATEGORIES = Object.freeze({
  schemaVersion: "cap8-r4-chinese-learning-categories-v1",
  subject: "chinese",
  categories: [
    {
      key: "characters",
      navigationTitle: "字音字形",
      familyKeys: [
        "PHONETIC_PRONUNCIATION",
        "CHARACTER_STANDARD_VARIANTS",
        "RADICALS_DICTIONARY",
        "CHARACTER_FORMATION",
        "ERRONEOUS_FORMS_HOMOPHONES",
      ],
      learningModes: ["講義", "辨音練習", "辨形練習", "查典練習", "錯題複習"],
      assessmentModes: ["字音小考", "字形小考", "字音字形綜合測驗"],
    },
    {
      key: "words-idioms",
      navigationTitle: "字詞成語",
      familyKeys: [
        "CONTEXTUAL_POLYSEMY",
        "SYNONYMS_ANTONYMS_FIELDS",
        "IDIOMS_ALLUSIONS_USAGE",
        "CLASSICAL_WORDS_MEANING",
      ],
      learningModes: ["講義", "語境辨義", "成語運用", "錯題複習"],
      assessmentModes: ["單元小考", "跨單元複習"],
    },
    {
      key: "grammar-rhetoric",
      navigationTitle: "語法修辭",
      familyKeys: [
        "PARTS_OF_SPEECH_FUNCTION",
        "PHRASE_SENTENCE_STRUCTURE",
        "SIMPLE_COMPLEX_TRANSFORMED",
        "COHESION_REFERENCE_LOGIC",
        "PUNCTUATION_TYPOGRAPHY",
        "RHETORICAL_DEVICES_EFFECTS",
      ],
      learningModes: ["講義", "句構分析", "修辭效果", "標點修訂"],
      assessmentModes: ["單元小考", "跨單元複習"],
    },
    {
      key: "text-types",
      navigationTitle: "文體閱讀",
      familyKeys: [
        "NARRATIVE_COMPREHENSION",
        "EXPOSITORY_COMPREHENSION",
        "ARGUMENTATIVE_COMPREHENSION",
        "PRACTICAL_FUNCTIONAL_TEXTS",
        "MODERN_POETRY_SONG_TEXTS",
        "CLASSICAL_POETRY_VERSE",
        "CLASSICAL_PROSE_HISTORY",
        "FICTION_CHARACTERIZATION",
        "DRAMA_DIALOGUE_VIEWPOINT",
      ],
      learningModes: ["講義", "文本閱讀", "證據標記", "錯題複習"],
      assessmentModes: ["單元小考", "閱讀題組"],
    },
    {
      key: "reading-strategies",
      navigationTitle: "閱讀策略",
      familyKeys: [
        "MAIN_IDEA_TOPIC_SENTENCE",
        "DETAIL_INTEGRATION_EVIDENCE",
        "INFERENCE_UNSTATED",
        "PURPOSE_AUDIENCE_TONE",
        "PARAGRAPH_WHOLE_STRUCTURE",
        "WRITING_TECHNIQUE_FORM",
        "CROSS_TEXT_COMPARISON",
        "CHARTS_MIXED_MEDIA_DATA_TEXT",
      ],
      learningModes: ["講義", "線索定位", "推論驗證", "跨文本比較"],
      assessmentModes: ["單元小考", "混合文本題組"],
    },
    {
      key: "culture-media-tools",
      navigationTitle: "文化媒體與工具",
      familyKeys: [
        "MEDIA_INFORMATION_LITERACY",
        "CULTURAL_CUSTOMS_MATERIAL",
        "CLASSICAL_INSTITUTIONS_CHRONOLOGY",
        "LITERARY_HISTORY_GENRE",
        "AUTHORS_WORKS_CONTEXT",
        "CALLIGRAPHY_SCRIPTS_INSCRIPTIONS",
        "REFERENCE_TOOLS_SOURCE_EVALUATION",
      ],
      learningModes: ["講義", "資料查證", "文化脈絡", "媒體識讀"],
      assessmentModes: ["單元小考", "資料判讀題組"],
    },
    {
      key: "texts-classics",
      navigationTitle: "課文與經典",
      familyKeys: [
        "TEXTBOOK_UNION_MODERN_PROSE",
        "TEXTBOOK_UNION_MODERN_POETRY",
        "TEXTBOOK_UNION_CLASSICAL",
        "PUBLIC_DOMAIN_CLASSICAL_CORPUS",
        "RECITATION_MEMORY_COMPREHENSION",
      ],
      learningModes: ["跨版本共同能力", "公版經典", "理解式背誦", "錯題複習"],
      assessmentModes: ["單元小考", "跨文本複習"],
    },
    {
      key: "writing",
      navigationTitle: "作文",
      familyKeys: [
        "EDITING_ERROR_REVISION",
        "GUIDED_WRITING_TASK_MATERIAL",
        "GUIDED_WRITING_ORGANIZATION",
        "GUIDED_WRITING_REVISION_RUBRIC",
      ],
      learningModes: ["寫作講義", "審題取材", "組織表達", "自評修訂", "六級分校準"],
      assessmentModes: ["引導寫作任務", "分項練習", "完整作文", "第二稿修訂"],
      requiredStaticOriginalTasks: 120,
    },
  ],
});

export function validateChineseLearningCategories(value = CHINESE_LEARNING_CATEGORIES) {
  assert.equal(value.schemaVersion, "cap8-r4-chinese-learning-categories-v1");
  assert.equal(value.subject, "chinese");
  assert.equal(new Set(value.categories.map((category) => category.key)).size, value.categories.length);
  assert.equal(new Set(value.categories.map((category) => category.navigationTitle)).size, value.categories.length);
  const actualFamilyKeys = value.categories.flatMap((category) => category.familyKeys);
  const expectedFamilyKeys = CHINESE_SKILL_PLAN.families.map((family) => family.key);
  assert.deepEqual(actualFamilyKeys, expectedFamilyKeys, "every Chinese family must appear once in plan order");
  const familyByKey = new Map(CHINESE_SKILL_PLAN.families.map((family) => [family.key, family]));
  const skillCount = actualFamilyKeys.reduce((sum, key) => sum + familyByKey.get(key).skills.length, 0);
  assert.equal(skillCount, 320);
  const characters = value.categories.find((category) => category.navigationTitle === "字音字形");
  assert(characters.assessmentModes.includes("字音小考"));
  assert(characters.assessmentModes.includes("字形小考"));
  const writing = value.categories.find((category) => category.navigationTitle === "作文");
  assert.equal(writing.requiredStaticOriginalTasks, 120);
  assert(writing.learningModes.includes("六級分校準"));
  return {
    categories: value.categories.length,
    families: actualFamilyKeys.length,
    skills: skillCount,
    characterSkills: characters.familyKeys.reduce((sum, key) => sum + familyByKey.get(key).skills.length, 0),
    writingSkills: writing.familyKeys.reduce((sum, key) => sum + familyByKey.get(key).skills.length, 0),
  };
}
