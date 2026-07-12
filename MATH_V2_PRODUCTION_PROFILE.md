# Math V2 Production Profile

Profile ID: `math-v2-production`

Profile version: `1.0.0`

This document defines the release inventory and runtime requirements for the mathematics V2 product. Mathematical terminology, notation, pedagogy, and content correctness remain governed solely by `MATH_CONTENT_STANDARD_TW.md`.

## Required Inventory

| Unit | Title | Skills | Questions | Lectures |
|---|---|---:|---:|---:|
| U01 | 整數運算 | 15 | 180 | 15 |
| U02 | 分數運算 | 15 | 180 | 15 |
| U03 | 一元一次方程式 | 15 | 180 | 15 |
| U04 | 二元一次聯立方程式 | 14 | 168 | 14 |
| U05 | 平面直角坐標系 | 12 | 144 | 12 |
| U06 | 比例式 | 12 | 144 | 12 |
| U07 | 一元一次不等式 | 12 | 144 | 12 |
| U08 | 平面幾何圖形與三視圖 | 14 | 168 | 14 |
| U09 | 統計圖表與資料處理 | 16 | 192 | 16 |
| U10 | 乘法公式與多項式 | 13 | 156 | 13 |
| U11 | 平方根與畢氏定理 | 16 | 192 | 16 |
| U12 | 因式分解 | 10 | 120 | 10 |
| U13 | 一元二次方程式 | 15 | 180 | 15 |
| U14 | 數列與等差級數 | 12 | 144 | 12 |
| U15 | 函數及其圖形 | 13 | 156 | 13 |
| U16 | 三角形的性質與尺規作圖 | 18 | 216 | 18 |
| U17 | 平行與四邊形 | 18 | 216 | 18 |
| U18 | 連比與相似形 | 16 | 192 | 16 |
| U19 | 圓 | 18 | 216 | 18 |
| U20 | 推理證明與三角形的心 | 15 | 180 | 15 |
| U21 | 二次函數 | 12 | 144 | 12 |
| U22 | 統計與機率 | 18 | 216 | 18 |
| U23 | 立體幾何圖形 | 20 | 240 | 20 |
| **Total** |  | **339** | **4,068** | **339** |

## Per-Skill Contract

- Every skill is required and has exactly 12 multiple-choice, text-only questions.
- Every skill has exactly three `basic`, three `standard`, three `advanced`, and three `literacy` questions.
- Every skill has exactly three questions at each answer index from 0 through 3.
- Every skill has exactly one lecture using canonical `{ prompt, answer, why }` examples.

## Product Contract

- The default mathematics consumer is V2; legacy V1 is available only through an isolated rollback route.
- Initial page load does not parse all question or lecture banks. Banks load from a fixed local manifest on demand.
- Unit quizzes select exactly one question per skill, use 20 minutes, and preserve answers after deterministic choice shuffling.
- Mock exams contain 25 multiple-choice questions, use 80 minutes, and contain no constructed-response item.
- Active release validation requires zero unresolved blocking findings and zero unresolved targeted findings. The two recorded U01 historical human acceptances are reported separately.
- Authoritative sources, in-memory build output, generated artifacts, manifests, and SHA-256 content locks must agree exactly.
- Validation never writes or updates a lock.
