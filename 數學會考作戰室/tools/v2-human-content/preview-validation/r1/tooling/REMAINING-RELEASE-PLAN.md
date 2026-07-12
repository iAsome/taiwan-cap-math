# Remaining Math V2 Release Plan

## Current authorized stage

Human Preview Browser and UI Validation R1.

## Remaining controlled stages

1. **Human Preview Browser and UI Validation R1**
   - Apply preview-only UI corrections.
   - Validate desktop, mobile, keyboard, all units, quizzes, mock exams, constructed responses, SVG rendering, storage isolation, and route isolation.

2. **Human Runtime Release Candidate R1**
   - Build a production-compatible human runtime and adapter without replacing the default loader.
   - Add a release-candidate-only route or explicit flag.
   - Preserve generated V2 and V1 during RC tests.

3. **Official Specification and Blueprint Gate**
   - Reconfirm current Taiwan CAP mathematics structure, time, MC/CR count range, scoring, and official scope from current official sources.
   - Lock the release mock-exam blueprint and constructed-response behavior.

4. **Release Candidate Full-System Validation**
   - Run all 23 units, all figures, lecture UI, unit quizzes, mock exams, answer review, constructed-response rubrics, saved papers, localStorage migration, accessibility, performance, error recovery, and browser/device tests.

5. **Cutover Rehearsal**
   - Create immutable backup tag and file-hash baselines.
   - Rehearse loader switch and immediate rollback in a non-production route.
   - Prove generated V2 and V1 can be restored from the tag without data loss.

6. **Controlled Human Runtime Activation**
   - Switch the default loader to Human Runtime only after every release gate passes.
   - Run production-route smoke and regression tests.
   - Keep deletion prohibited until the activated route passes.

7. **Legacy Retirement Wave**
   - Delete generated V2 source banks, compiled banks, old generator, generated review evidence, generated metadata, and stale references.
   - Remove V1 runtime files from the served site after the final rollback gate; retain recovery through the immutable Git tag or external archive rather than runtime coexistence.
   - Rebuild manifests and scan the entire repository for old runtime references.

8. **Final Release Gate**
   - Verify the served site uses only Human Runtime.
   - Verify no generated V2 or V1 content is loaded or present in the served runtime.
   - Verify all counts, tests, hashes, routes, UI functions, and rollback documentation.
   - Only then merge and publish.

No stage may skip its predecessor. A failing or blocked test produces a stop report, not an override.
