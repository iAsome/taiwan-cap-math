# Biology R4 final exhaustive semantic review

## Result

- Subject: Biology (biology)
- Review date: 2026-07-18
- Status: accepted for subject-level external final-audit evidence
- Unresolved findings: 0
- Exact reviewed artifacts: 3,760 (220 lectures, 3,300 questions, 220 stimuli, 7 asset records, 13 UI/rendered artifacts)
- Corpus SHA-256: ee50ccb9c27d7be4e59f30031508c6764f6217fbdb7af31ed2644c2ecfec1891
- Corpus bytes: 2446353

This record is subject evidence only. It does not declare the nine-subject release accepted or published.

## Exhaustive method

Every final Biology lecture, question stem, option, option rationale, independent-review explanation, stimulus, table, accessibility alternative, figure label, caption, alt text, long description and UI string was read in source order. Every one of the 3,300 questions was independently solved or evidence-checked, including distractor plausibility and answer uniqueness. All 220 lectures were checked for scientific accuracy, fourth-stage/CAP boundaries, prerequisite flow, worked examples, misconceptions and checks. All seven original SVG figures were rendered and inspected against their text alternatives and data tables. Rendered homepage, lecture, prerequisite, navigation and assessment contexts were inspected; browser smoke covered Chromium, Firefox and WebKit.

Official fourth-learning-stage curriculum authority nodes and the frozen 106-115 CAP Natural Science calibration ledger were treated as scope and demand authority. Publisher or supplementary wording was not copied.

## Resolved findings

1. **BIO_R4_Q_S108_12:** The original net-count wording did not independently establish reproduction during the observation period. The stem now records oviposition and ten hatchlings while distinguishing active larvae/adults, so the count balance 20 + 10 - 5 = 25 supports the unique answer without overstating evidence. Final SHA-256: 5f5ed57cd16e0b147790e9946b7faeb31a77aee189a281e513cef171fb111cf7.
2. **BIO_R4_Q_142_03:** Replaced the unclear phrase "目標資訊" with the biologically accurate "目標遺傳版本" in the correct-option rationale. Answer index and content scope are unchanged. Final SHA-256: 0b1b73ef3fbd5a23e9a622da3f6a106953703373d7e448dafd25f56b0d720408.
3. **BIO_R4_ASSET_ENERGY_PYRAMID / SVG:** Moved the top consumer label to a callout with a leader line, eliminating overlap with the pyramid boundary while preserving the four trophic levels, caption, alt text, long description and data fallback. Metadata SHA-256: 9b43b834dee21a68c4b8bba9d39ce669d3e7232cd96eb37e9b6ab49677ae1cca; SVG SHA-256: 340a3de03c6fd4c4845c6927d441c61b708d389a61168a538bada9db72f22a39.

All changed artifacts were rebuilt and re-read at these final hashes.

## Scientific and visual review

The content remains within Taiwan junior-high fourth-stage Biology and CAP Natural Science scope. Definitions, calculations, causal claims, genetics crosses, physiological pathways, ecological relationships, experimental variables and evidence limits were checked. No second defensible answer or unsupported distractor rationale remains. The seven data-driven figures (cell comparison, circulation, energy pyramid, experiment graph, genetics grid, microscope and plant transport) are scientifically coherent, print-safe, color-independent where required, and have matching caption/alt/long-description/data alternatives.

## Validation

- Biology builder: two runs, identical tree SHA-256 3c239e4b03967fd8e4c4323e2f4102b19968a3ffb23d266d683e79a4134dab28.
- Manifest build SHA-256: 98c7193bb33afd07c6bd3c560d3c67876fd1cd17be845843254e9209e5b97571 on both runs.
- validate-biology: PASS (80 authority nodes, 220 skills, 220 lectures, 2,640 skill questions, 660 stimulus questions, 220 stimuli, 7 assets; 220/220 CAP calibration).
- biology.test.mjs: PASS, 10/10.
- browser-smoke: PASS, Chromium / Firefox / WebKit / WCAG / print / offline / migration.
- Manual rendered inspection: PASS; no console warning or error.
- verifyExternalFinalEvidence: PASS (3760 accepted audits, 3760 gapless ranges, 2446353 UTF-8 corpus bytes).
