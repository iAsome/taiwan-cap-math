import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REVIEW_PATH = path.join(HERE, "ledger", "publisher-public-resource-review.json");
const LEARNING_LEDGER_PATH = path.join(HERE, "ledger", "publisher-learning-reference-ledger.csv");
const DISCOVERY_LEDGER_PATH = path.join(HERE, "ledger", "web-source-discovery-ledger.csv");

const PRODUCTION_SUBJECTS = Object.freeze([
  "english", "chinese", "geography", "history", "civics",
  "biology", "physics_chemistry", "earth_science",
]);

const ALL_JUNIOR_SUBJECTS = Object.freeze([...PRODUCTION_SUBJECTS, "math"]);

const APPROVED_PUBLISHERS = Object.freeze([
  "佳音事業股份有限公司",
  "南一書局企業股份有限公司",
  "南億興業股份有限公司",
  "康軒文教事業股份有限公司",
  "翰林出版事業股份有限公司",
]);

const RESOURCES = Object.freeze([
  {
    id: "PUB-NANI-HOME-20260714",
    publisher: "南一書局企業股份有限公司",
    subjects: [...ALL_JUNIOR_SUBJECTS],
    title: "南一書局官方網站",
    url: "https://www.nani.com.tw/",
    finalUrl: "https://www.nani.com.tw/",
    accessLevel: "public-landing-page",
    retrieval: { status: 200, bytes: 37540, sha256: "2750b6bb824dc618a41628f90af7faac879d28f32f5eca47780334d3ad72d465" },
    decision: "included-metadata-only",
    reviewDepth: "landing-page-semantic-review",
    notes: "Official publisher identity and public service routes only; no textbook prose was acquired.",
  },
  {
    id: "PUB-NANI-TEACHER-20260714",
    publisher: "南一書局企業股份有限公司",
    subjects: [...ALL_JUNIOR_SUBJECTS],
    title: "南一國中備課資源入口",
    url: "https://teacher.oneclass.com.tw/jteacher/",
    finalUrl: null,
    accessLevel: "teacher-account-required",
    retrieval: { status: "fetch-failed", bytes: null, sha256: null },
    decision: "excluded-protected-content",
    reviewDepth: "public-search-metadata-and-access-boundary-review",
    notes: "The public entry states that teaching files appear after login; no account bypass or protected download was attempted.",
  },
  {
    id: "PUB-NANI-ONEBOX-20260714",
    publisher: "南一書局企業股份有限公司",
    subjects: [...ALL_JUNIOR_SUBJECTS],
    title: "OneBox 2.0 resource entry",
    url: "https://onebox.oneclass.com.tw/",
    finalUrl: "https://onebox.oneclass.com.tw/",
    accessLevel: "public-description-protected-downloads",
    retrieval: { status: 200, bytes: 4406, sha256: "0ed880a130984282eb8c64e982a2f120c897b50796d0820cff34912ea47f3cf1" },
    decision: "included-access-boundary-only",
    reviewDepth: "complete-public-page-semantic-review",
    notes: "Electronic books, banks, videos and plans require a verified teacher account and are limited to teaching use; none was copied.",
  },
  {
    id: "PUB-NANI-BIOLOGY-HEART-20260714",
    publisher: "南一書局企業股份有限公司",
    subjects: ["biology"],
    title: "自然科學領域《怦然心動》公開教案",
    url: "https://mag.nani.com.tw/s3/naniJournal/84ce062c-c1a1-4eb4-bbe8-1d653367035e.pdf",
    finalUrl: "https://mag.nani.com.tw/s3/naniJournal/84ce062c-c1a1-4eb4-bbe8-1d653367035e.pdf",
    accessLevel: "public-download",
    retrieval: { status: 200, bytes: 4678662, sha256: "6ee2dc956dd9a4e10364b5fc457f6c72818345c473a194f8d2afe7d089c16e93" },
    decision: "included-high-level-observation-only",
    reviewDepth: "complete-public-pdf-semantic-review",
    notes: "The ten-page file was read in full; only abstract teaching observations are retained, with no worksheet, answer, diagram or prose copied.",
  },
  {
    id: "PUB-KNSH-PLAN-20260714",
    publisher: "康軒文教事業股份有限公司",
    subjects: [...ALL_JUNIOR_SUBJECTS],
    title: "康軒課程計畫",
    url: "https://www.knsh.com.tw/service/plan",
    finalUrl: "https://www.knsh.com.tw/service/plan",
    accessLevel: "public-index",
    retrieval: { status: 200, bytes: 34645, sha256: "b848634ed60c224d4e67cab78af9a37202ff131417a19c1604edcb02ea4ccd5c" },
    decision: "included-metadata-only",
    reviewDepth: "complete-public-page-semantic-review",
    notes: "The page advertises current junior-high subject plans for free download; publisher order remains non-authoritative and no linked plan prose was copied.",
  },
  {
    id: "PUB-KNSH-ERRATA-20260714",
    publisher: "康軒文教事業股份有限公司",
    subjects: [...ALL_JUNIOR_SUBJECTS],
    title: "康軒教材勘誤",
    url: "https://www.knsh.com.tw/service/errata",
    finalUrl: "https://www.knsh.com.tw/service/errata",
    accessLevel: "public-interactive-index",
    retrieval: { status: 200, bytes: 32575, sha256: "190126eee820779a39bba95dcd8e408b4da534fcf5eca1553bd6640692a8aac1" },
    decision: "included-correction-index",
    reviewDepth: "complete-current-junior-high-query-space-review",
    notes: "All current junior-high query combinations were enumerated; only affected locations are retained below, not original or corrected commercial wording.",
  },
  {
    id: "PUB-KNSH-REVIEW-COPYRIGHT-20260714",
    publisher: "康軒文教事業股份有限公司",
    subjects: [...ALL_JUNIOR_SUBJECTS],
    title: "康軒國中總複習資源說明",
    url: "https://exam.knsh.com.tw/pro/spicy/",
    finalUrl: "https://exam.knsh.com.tw/pro/spicy/",
    accessLevel: "public-description-restricted-resources",
    retrieval: { status: 200, bytes: 23402, sha256: "ebf271b3f69acccde3119149e9436d90786c8e85764f98b7981c3ef920878f06" },
    decision: "excluded-protected-content",
    reviewDepth: "complete-public-page-and-copyright-boundary-review",
    notes: "The page explicitly limits use of review resources; no protected book, video, question or answer content was acquired.",
  },
  {
    id: "PUB-HANLIN-DIGITAL-20260714",
    publisher: "翰林出版事業股份有限公司",
    subjects: [...ALL_JUNIOR_SUBJECTS],
    title: "翰林國中數位產品入口",
    url: "https://hanlindigi.hle.com.tw/depot/2/9",
    finalUrl: "https://hanlindigi.hle.com.tw/depot/2/9",
    accessLevel: "public-product-descriptions",
    retrieval: { status: 200, bytes: 41137, sha256: "b9674b9e508de8d89b3f1b344e8ed9329a54beaf42bf4f56c05fe218864c74dc" },
    decision: "included-high-level-observation-only",
    reviewDepth: "complete-public-page-semantic-review",
    notes: "Public descriptions identify representation categories such as climate graphs, layered maps and topic resources; downstream files were not copied.",
  },
  {
    id: "PUB-HANLIN-JUNIOR-20260714",
    publisher: "翰林出版事業股份有限公司",
    subjects: [...ALL_JUNIOR_SUBJECTS],
    title: "翰林輔材網（國中）說明",
    url: "https://hanlindigi.hle.com.tw/widget/2/192",
    finalUrl: "https://hanlindigi.hle.com.tw/widget/2/192",
    accessLevel: "public-description-protected-resources",
    retrieval: { status: 200, bytes: 17243, sha256: "419eeaaea81674b5fb5b3b629943c5f289c5fabcaa32ee7fed6423133c1be58d" },
    decision: "included-access-boundary-only",
    reviewDepth: "complete-public-page-semantic-review",
    notes: "The page confirms subject and resource categories; electronic books, rapid tests and related files were not accessed or reproduced.",
  },
  {
    id: "PUB-JOY-HOME-20260714",
    publisher: "佳音事業股份有限公司",
    subjects: ["english"],
    title: "佳音英語官方網站",
    url: "https://joy.com.tw/",
    finalUrl: "https://joy.com.tw/",
    accessLevel: "public-landing-page",
    retrieval: { status: 200, bytes: 61215, sha256: "c063d305d5423431b7129433a71a7631efd098b0f7088327208c99c0c2d0f7e0" },
    decision: "included-metadata-only",
    reviewDepth: "complete-public-page-semantic-review",
    notes: "The page exposes resource categories and downloads but is not CAP scope authority; no course text or audio was copied.",
  },
  {
    id: "PUB-JOY-COOLENGLISH-20260714",
    publisher: "佳音事業股份有限公司",
    subjects: ["english"],
    title: "Cool English 佳音翰林版國中英文冊次入口",
    url: "https://www.coolenglish.edu.tw/course/index.php?categoryid=49",
    finalUrl: "https://www.coolenglish.edu.tw/course/index.php?categoryid=49",
    accessLevel: "public-government-platform-index",
    retrieval: { status: 200, bytes: 635484, sha256: "d1c2337b061ea9d764f8def8cd65587dac3dfb72f7b78d1c9e613b69b9f2e6bc" },
    decision: "included-volume-topology-only",
    reviewDepth: "complete-public-index-semantic-review",
    notes: "The public index lists Books 1–6; lesson content remains a secondary learning resource and was not copied into R4.",
  },
  {
    id: "PUB-NANYI-HOME-20260714",
    publisher: "南億興業股份有限公司",
    subjects: ["geography", "history", "civics"],
    title: "Potential 南億 public website",
    url: "https://www.nanyi.com.tw/",
    finalUrl: "https://www.nanyi.com.tw/cgi-sys/suspendedpage.cgi",
    accessLevel: "unavailable-suspended-site",
    retrieval: { status: 200, bytes: 7618, sha256: "1c3cc450feafd1ffe8436ad2394bd41b54f15a1fc05ff40c853834cadd06da12" },
    decision: "excluded-no-usable-resource",
    reviewDepth: "access-boundary-review",
    notes: "The route resolves to a suspended-site page; the NAER approved catalog remains the only first-party-identifying evidence acquired.",
  },
  {
    id: "PUB-NANYI-YOURCLASS-20260714",
    publisher: "南億興業股份有限公司",
    subjects: ["geography", "history", "civics"],
    title: "YourClass 南億版商品頁",
    url: "https://www.yourclass.com.tw/detail/6930f406723e863fbe4f0757",
    finalUrl: "https://www.yourclass.com.tw/detail/6930f406723e863fbe4f0757",
    accessLevel: "third-party-commercial-description",
    retrieval: { status: 200, bytes: 84057, sha256: "a79a9a132c1f9ab9fb31ce3ecb9be4ea60786a7147945917901162c50b518da0" },
    decision: "rejected-not-publisher-controlled",
    reviewDepth: "complete-public-product-page-review",
    notes: "A third-party product claim cannot establish publisher sequence, correctness or scope and contributes no production observation.",
  },
]);

const KNSH_ERRATA_QUERIES = Object.freeze([
  {
    term: "八下", subject: "chinese", productType: "參考書",
    url: "https://www.knsh.com.tw/service/Errata?Grade=418&Semester=500&Course=421&Product=432",
    bytes: 34800, sha256: "d6292ed75c181636ff526772e6f3a427fdc49fc35ea91dea21add7b11052f2fb",
    records: [{ product: "新挑戰學習講義", page: "207", unit: "語文增能篇／第九課 罐頭由來", location: "語文補充包" }],
  },
  {
    term: "八下", subject: "excluded-health", productType: "教科書",
    url: "https://www.knsh.com.tw/service/Errata?Grade=418&Semester=500&Course=425&Product=430",
    bytes: 36816, sha256: "07b46fcef7f373eca9edb3baffc5e3bb7810fe26fd03a1d3a1be57ab3da2f69f",
    records: [{ product: "國中健康與體育2下(第四冊)課本", page: "15、16", unit: "健康飲食生活家", location: "飲食源頭探索趣" }],
  },
  {
    term: "八下", subject: "integrated_social", productType: "參考書",
    url: "https://www.knsh.com.tw/service/Errata?Grade=418&Semester=500&Course=426&Product=432",
    bytes: 43508, sha256: "fc3c6131b5f38e5f7f869d3ddb3e9fead85ebad18e22109fa4c19029ddd31787",
    records: [
      { product: "國中社會2下學習自修", page: "366", unit: "解答分析", location: "第5課生活素養探索第3、4題" },
      { product: "國中社會2下學習自修", page: "365", unit: "解答分析", location: "歷史第5課奪分進階題第26題" },
      { product: "國中社會2下學習自修", page: "363", unit: "解答分析", location: "歷史第3課奪分進階題第9題" },
      { product: "國中社會2下學習自修", page: "361", unit: "解答分析", location: "歷史第1課題組第13題" },
      { product: "國中社會2下學習自修", page: "368", unit: "生活中的民事規範", location: "自我評量第12題解析" },
    ],
  },
  {
    term: "八上", subject: "chinese", productType: "參考書",
    url: "https://www.knsh.com.tw/service/Errata?Grade=418&Semester=501&Course=421&Product=432",
    bytes: 48850, sha256: "36050c6a41a9da40956ced513a60b233d25d66a789fbd355f9cd0f1be305440e",
    records: [
      { product: "百試達", page: "書前夾頁", unit: "第三冊全冊文言文語譯", location: "古體詩選／慈烏夜啼" },
      { product: "新命題焦點", page: "16", unit: "古體詩選", location: "慈烏夜啼語譯" },
      { product: "新命題焦點", page: "書前夾頁", unit: "第三冊全冊文言文語譯", location: "古體詩選／慈烏夜啼" },
      { product: "學習自修", page: "26", unit: "古體詩選", location: "慈烏夜啼語譯" },
      { product: "學習講義", page: "23", unit: "古體詩選", location: "慈烏夜啼語譯" },
      { product: "新命題焦點", page: "解答6", unit: "五柳先生傳", location: "綜合測驗第28題解析" },
      { product: "新命題焦點", page: "解答4", unit: "土芭樂的生存之道", location: "綜合測驗第8題解析" },
    ],
  },
  {
    term: "總複習下", subject: "math", productType: "會考總複習",
    url: "https://www.knsh.com.tw/service/Errata?Grade=420&Semester=500&Course=422&Product=436",
    bytes: 38201, sha256: "3a02f1ed38a7c449cd991a5aa2c231e12fc1aebb955f8c27009065cb9d8abab7",
    records: [
      { product: "頂尖全範圍題本", page: "8", unit: "第5回", location: "第25題" },
      { product: "數學3800+應用題彙編", page: "110", unit: "第12回", location: "非選第一題" },
    ],
  },
  {
    term: "總複習上", subject: "chinese", productType: "會考總複習",
    url: "https://www.knsh.com.tw/service/Errata?Grade=420&Semester=501&Course=421&Product=436",
    bytes: 37631, sha256: "3102281169b5a962e2955bb03917ea1a5789a68dbb18b732059b6a79a103e9c7",
    records: [
      { product: "麻辣總複習講義", page: "28", unit: "第一冊第6至10課", location: "形近字辨析第6題" },
      { product: "麻辣總複習講義", page: "335", unit: "第六冊第6課", location: "多義字辨析「當」" },
    ],
  },
  {
    term: "總複習上", subject: "math", productType: "會考總複習",
    url: "https://www.knsh.com.tw/service/Errata?Grade=420&Semester=501&Course=422&Product=436",
    bytes: 34947, sha256: "513da5468fa7eca775537704ba964e382b7972f30fb9653b3df6723507a57e36",
    records: [{ product: "數學麻辣複習講義(1至6冊)", page: "217", unit: "連比例與相似形", location: "觀念診斷第6題" }],
  },
  {
    term: "總複習上", subject: "integrated_social", productType: "會考總複習",
    url: "https://www.knsh.com.tw/service/Errata?Grade=420&Semester=501&Course=426&Product=436",
    bytes: 37539, sha256: "fe3cf3b709c2943a7c998842f042627dc725f1f55e75bf263a95b3fd64c9598d",
    records: [
      { product: "公民麻辣總複習講義", page: "261", unit: "單元15", location: "第2題" },
      { product: "勝經複習講義(地理)", page: "140", unit: "東南亞與南亞", location: "補充小字" },
    ],
  },
]);

const LEARNING_REFERENCES = Object.freeze([
  {
    referenceId: "PLR-ENGLISH-001", subject: "english", publisher: "佳音事業股份有限公司",
    chapterOrLesson: "Books 1–6 public index", topicMetadata: "six-volume grade/semester topology",
    curriculumCodes: [], officialSupport: "frozen English authority graph and official CAP evidence only",
    sequenceObservation: "The public index confirms six volumes but does not authorize copying its lesson order into R4.",
    terminologyDifference: "none adopted", representationOrExperiment: "listening, reading, writing, vocabulary and grammar categories are visible at platform level",
    questionFormObservation: "none copied", misconceptionObservation: "publisher volume coverage is not the official CAP scope",
    productionSkillIds: [], copyrightHandling: "metadata and abstract categories only; no lesson, script, audio or item copied",
    finalAuditStatus: "pending-final-artifact-audit", notes: "Use only to detect omissions after official mapping.",
  },
  {
    referenceId: "PLR-CHINESE-001", subject: "chinese", publisher: "康軒文教事業股份有限公司",
    chapterOrLesson: "current junior-high errata index", topicMetadata: "character form, classical translation, polysemy and literary classification locations",
    curriculumCodes: [], officialSupport: "official curriculum, CAP papers and primary dictionaries remain decisive",
    sequenceObservation: "No publisher sequence adopted.", terminologyDifference: "correction-sensitive wording must be checked against primary authority",
    representationOrExperiment: "none", questionFormObservation: "affected item locations are recorded without item text",
    misconceptionObservation: "a polished commercial explanation may still have a published correction",
    productionSkillIds: [], copyrightHandling: "location metadata only; original and corrected text omitted",
    finalAuditStatus: "pending-final-artifact-audit", notes: "Recheck these topics during Chinese final audit.",
  },
  {
    referenceId: "PLR-GEOGRAPHY-001", subject: "geography", publisher: "翰林出版事業股份有限公司",
    chapterOrLesson: "public digital-product descriptions", topicMetadata: "climate graph construction and layered thematic maps",
    curriculumCodes: [], officialSupport: "official geography authority nodes and CAP item ledger",
    sequenceObservation: "Representations may be introduced after students can read source data; publisher order is not binding.",
    terminologyDifference: "none adopted", representationOrExperiment: "original accessible climate graphs and layered-map comparisons are useful production categories",
    questionFormObservation: "data-to-map and map-to-inference forms only as independently authored items",
    misconceptionObservation: "overlaying maps shows association, not automatic causation",
    productionSkillIds: [], copyrightHandling: "only abstract representation categories retained; no map or image copied",
    finalAuditStatus: "pending-final-artifact-audit", notes: "Map data must come from current primary sources.",
  },
  {
    referenceId: "PLR-HISTORY-001", subject: "history", publisher: "翰林出版事業股份有限公司",
    chapterOrLesson: "public digital-product descriptions", topicMetadata: "historical-person context and short concept support",
    curriculumCodes: [], officialSupport: "official history authority nodes and CAP item ledger",
    sequenceObservation: "Place people inside chronology and causal context instead of teaching isolated anecdotes.",
    terminologyDifference: "none adopted", representationOrExperiment: "original timelines and source-comparison tables",
    questionFormObservation: "evidence, chronology and cause/effect forms must be independently authored",
    misconceptionObservation: "interesting biography details cannot substitute for historical evidence or scope",
    productionSkillIds: [], copyrightHandling: "product-category observation only; no anecdote, script or image copied",
    finalAuditStatus: "pending-final-artifact-audit", notes: "Every factual claim still requires primary-source checking.",
  },
  {
    referenceId: "PLR-CIVICS-001", subject: "civics", publisher: "翰林出版事業股份有限公司",
    chapterOrLesson: "public digital-product descriptions", topicMetadata: "topic-based civics presentation",
    curriculumCodes: [], officialSupport: "official civics authority nodes, current laws and CAP item ledger",
    sequenceObservation: "Organize current制度 concepts by decision problem, actor and legal effect rather than a publisher chapter title.",
    terminologyDifference: "all legal terms require current primary-law verification", representationOrExperiment: "original actor-right-duty and procedure tables",
    questionFormObservation: "scenario-to-rule and evidence-based public-issue items",
    misconceptionObservation: "topic summaries become unsafe when statutes or institutions change",
    productionSkillIds: [], copyrightHandling: "high-level category only; no slide, case or commercial question copied",
    finalAuditStatus: "pending-final-artifact-audit", notes: "Record a verification date for every mutable legal or institutional claim.",
  },
  {
    referenceId: "PLR-BIOLOGY-001", subject: "biology", publisher: "南一書局企業股份有限公司",
    chapterOrLesson: "人體循環公開教案", topicMetadata: "structure–function–model–discussion progression",
    curriculumCodes: ["Db-IV-2"], officialSupport: "Db-IV-2 and related inquiry nodes independently verified in the official curriculum",
    sequenceObservation: "Recall anatomy, manipulate a model, then explain flow and integrate the concept; R4 examples must be original.",
    terminologyDifference: "artery and vein are classified by flow direction, not oxygen level",
    representationOrExperiment: "an original accessible model can pair motion with a labelled data-table alternative",
    questionFormObservation: "trace flow, relate structure to function and justify a prediction",
    misconceptionObservation: "students may equate every artery with oxygen-rich blood or reverse anatomical left and right",
    productionSkillIds: [], copyrightHandling: "complete public sample reviewed; no worksheet, answer, diagram or wording copied",
    finalAuditStatus: "pending-final-artifact-audit", notes: "Any model activity needs tool safety and a nonvisual equivalent.",
  },
  {
    referenceId: "PLR-PHYSICS-CHEMISTRY-001", subject: "physics_chemistry", publisher: "multiple approved publishers",
    chapterOrLesson: "public portals only", topicMetadata: "no subject-specific public sample accepted in this foundation pass",
    curriculumCodes: [], officialSupport: "complete official physics/chemistry authority graph and CAP item ledger",
    sequenceObservation: "none adopted", terminologyDifference: "none adopted", representationOrExperiment: "none adopted",
    questionFormObservation: "none adopted", misconceptionObservation: "absence of publisher full text must not create invented observations",
    productionSkillIds: [], copyrightHandling: "restricted resources not accessed",
    finalAuditStatus: "pending-final-artifact-audit", notes: "Proceed from official scope; add only later lawfully reviewed observations.",
  },
  {
    referenceId: "PLR-EARTH-SCIENCE-001", subject: "earth_science", publisher: "multiple approved publishers",
    chapterOrLesson: "public portals only", topicMetadata: "no subject-specific public sample accepted in this foundation pass",
    curriculumCodes: [], officialSupport: "complete official Earth-science authority graph and CAP item ledger",
    sequenceObservation: "none adopted", terminologyDifference: "none adopted", representationOrExperiment: "none adopted",
    questionFormObservation: "none adopted", misconceptionObservation: "marketing descriptions are not evidence for scientific claims",
    productionSkillIds: [], copyrightHandling: "restricted resources not accessed",
    finalAuditStatus: "pending-final-artifact-audit", notes: "Use current primary scientific agencies for mutable data and events.",
  },
]);

export const PUBLISHER_PUBLIC_RESOURCE_REVIEW = Object.freeze({
  schemaVersion: "cap8-r4-publisher-public-resource-review-v1",
  status: "lawful-public-access-and-secondary-observation-reviewed",
  reviewedAt: "2026-07-14",
  scopeAuthority: false,
  fullPublisherTextClaimed: false,
  protectedContentCopied: false,
  retrievalHashesAreHistoricalFingerprints: true,
  approvedPublishers: [...APPROVED_PUBLISHERS],
  resources: [...RESOURCES],
  currentKnshErrata: {
    reviewedAt: "2026-07-14",
    querySets: [...KNSH_ERRATA_QUERIES],
    totalRecords: KNSH_ERRATA_QUERIES.reduce((sum, query) => sum + query.records.length, 0),
    targetRecords: KNSH_ERRATA_QUERIES.filter((query) => query.subject !== "excluded-health").reduce((sum, query) => sum + query.records.length, 0),
    contentStored: "affected location metadata only",
  },
  learningReferences: [...LEARNING_REFERENCES],
});

function csvCell(value) {
  const text = Array.isArray(value) ? value.join("|") : String(value ?? "");
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

export function serializePublisherLearningReferenceLedger(review = PUBLISHER_PUBLIC_RESOURCE_REVIEW) {
  const columns = [
    "reference_id", "subject", "publisher", "chapter_or_lesson", "topic_metadata", "curriculum_codes",
    "official_support", "sequence_observation", "terminology_difference", "representation_or_experiment",
    "question_form_observation", "misconception_observation", "production_skill_ids", "copyright_handling",
    "final_audit_status", "notes",
  ];
  const rows = review.learningReferences.map((record) => [
    record.referenceId, record.subject, record.publisher, record.chapterOrLesson, record.topicMetadata,
    record.curriculumCodes, record.officialSupport, record.sequenceObservation, record.terminologyDifference,
    record.representationOrExperiment, record.questionFormObservation, record.misconceptionObservation,
    record.productionSkillIds, record.copyrightHandling, record.finalAuditStatus, record.notes,
  ]);
  return `${[columns, ...rows].map((row) => row.map(csvCell).join(",")).join("\n")}\n`;
}

export function serializeWebSourceDiscoveryLedger(review = PUBLISHER_PUBLIC_RESOURCE_REVIEW) {
  const columns = [
    "subject", "query_or_route", "searched_at", "result_url", "publisher", "authority_level",
    "included_or_rejected", "reason", "source_hash", "notes",
  ];
  const rows = review.resources.flatMap((resource) => resource.subjects.map((subject) => [
    subject,
    resource.id,
    review.reviewedAt,
    resource.url,
    resource.publisher,
    "secondary-reference-only",
    resource.decision,
    resource.accessLevel,
    resource.retrieval.sha256,
    `${resource.reviewDepth}; ${resource.notes}`,
  ]));
  return `${[columns, ...rows].map((row) => row.map(csvCell).join(",")).join("\n")}\n`;
}

export async function validatePublisherPublicResourceReview(value = PUBLISHER_PUBLIC_RESOURCE_REVIEW) {
  assert.deepEqual(value, PUBLISHER_PUBLIC_RESOURCE_REVIEW, "checked-in publisher public-resource review is stale or manually altered");
  assert.equal(value.scopeAuthority, false);
  assert.equal(value.fullPublisherTextClaimed, false);
  assert.equal(value.protectedContentCopied, false);
  assert.equal(new Set(value.resources.map((resource) => resource.id)).size, value.resources.length);
  assert.deepEqual([...new Set(value.resources.map((resource) => resource.publisher))].sort(), [...APPROVED_PUBLISHERS].sort());
  for (const resource of value.resources) {
    assert(resource.url.startsWith("https://"));
    if (resource.retrieval.status === 200) assert.match(resource.retrieval.sha256, /^[0-9a-f]{64}$/);
    if (resource.decision.startsWith("excluded") || resource.decision.startsWith("rejected")) {
      assert(!resource.notes.includes("copied"), `${resource.id}: excluded resource must not claim copied content`);
    }
  }
  assert.deepEqual(value.learningReferences.map((record) => record.subject), PRODUCTION_SUBJECTS);
  assert(value.learningReferences.every((record) => record.productionSkillIds.length === 0));
  assert.equal(value.currentKnshErrata.querySets.length, 8);
  assert.equal(value.currentKnshErrata.totalRecords, 21);
  assert.equal(value.currentKnshErrata.targetRecords, 20);
  return {
    resources: value.resources.length,
    publishers: value.approvedPublishers.length,
    learningReferences: value.learningReferences.length,
    errataQuerySets: value.currentKnshErrata.querySets.length,
    errataRecords: value.currentKnshErrata.totalRecords,
    targetErrataRecords: value.currentKnshErrata.targetRecords,
  };
}

async function main() {
  await validatePublisherPublicResourceReview();
  await mkdir(path.dirname(REVIEW_PATH), { recursive: true });
  await Promise.all([
    writeFile(REVIEW_PATH, `${JSON.stringify(PUBLISHER_PUBLIC_RESOURCE_REVIEW, null, 2)}\n`, "utf8"),
    writeFile(LEARNING_LEDGER_PATH, serializePublisherLearningReferenceLedger(), "utf8"),
    writeFile(DISCOVERY_LEDGER_PATH, serializeWebSourceDiscoveryLedger(), "utf8"),
  ]);
  console.log(`publisher-public-resource-review: OK - ${RESOURCES.length} resources, ${KNSH_ERRATA_QUERIES.length} errata query sets`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
