# Required validators and gates R4

Implement deterministic commands for at least:

## Authority and references
- official source hashes and current-version checks;
- complete official curriculum-node graph;
- zero orphan authority nodes/skills/prerequisites;
- publisher-reference ledger completeness without treating it as scope authority;
- current law/statistics/scientific-fact source freshness.

## Content
- subject floors and special-count requirements;
- schema validation for lectures/questions/stimuli/assets/official ledgers/final audits;
- static question materialization and no runtime template/procedural fallback;
- answer-key integrity and independent solver/evidence records;
- option uniqueness, distractor validity fields, semantic duplicate/near-duplicate detection;
- formula/unit/date/timeline/map/data/audio/vocabulary/classical-text invariants;
- provenance, originality, copyright, and asset-license checks;
- no placeholders, truncation, replacement characters, TODO/FIXME, hidden text, or stale prototype claims.

## Official papers
- every 106–115 paper/material acquired or formally accounted for;
- one ledger row per item/sub-item;
- source locators, hashes, answers/corrections, mappings, representations, and final-audit records complete.

## Final exhaustive audit
- every final student-visible artifact has exactly one current accepted final-audit record bound to its exact SHA-256;
- any changed artifact invalidates prior audit status;
- canonical student-visible corpus builds deterministically;
- corpus ranges cover 100% with no overlap/gap and all point to valid final-audit records;
- no wildcard, sampled, folder-level, inherited, or automatically fabricated semantic approvals.

## Runtime/release
- deterministic clean build twice with identical hashes;
- Math V2 full regression;
- all eight subject and integrated Social/Natural gates;
- migration/data preservation;
- Chromium/Firefox/WebKit-compatible tests where available;
- keyboard, screen-reader semantics, mobile, reduced motion, print, offline/PWA/service worker;
- broken link/asset/console/performance/security checks;
- clean-checkout reproduction and live GitHub Pages verification.

Create one global command such as `node tools/cap8-r4/run-full-release-gate.mjs` that fails nonzero on any unmet gate and emits machine-readable evidence.
