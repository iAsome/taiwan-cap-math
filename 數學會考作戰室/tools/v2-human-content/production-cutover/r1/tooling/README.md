# Math V2 Production Cutover Package R1

This kit builds and validates the exact production cutover payload without applying it to the real student route.

It produces:

- production `index.html`;
- Human Runtime default `math-bootstrap.js`;
- production `human-runtime/`;
- non-destructive storage migration;
- exact pre-cutover tag plan;
- generated V2 and V1 retirement manifest;
- controlled apply and rollback scripts;
- detached-worktree browser validation evidence.

This stage does not activate production and does not delete any old runtime.
