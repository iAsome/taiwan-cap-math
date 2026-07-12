# Math V2 Human Runtime Release Candidate R1

This kit builds a **separate, noindex release-candidate route** from the globally audited human-authored runtime.

It does not modify the current default loader, generated V2, V1 rollback, or any human-content batch source.

Required starting commit:

`3b565665a6c5530109879711557602dc17353377`

Expected human content version:

`d402487b40bca04f3278b231262abfb3aa7fd1d1448454e877ff8c76af25082f`

The RC uses the existing site UI through a generated RC-only copy of `app.js`. The RC copy is isolated under `human-runtime-rc/`, uses only `capMath.humanRc.r1.*` storage keys, preserves figures, and generates 25 MC + 2 constructed-response practice papers under an explicit release blueprint.
