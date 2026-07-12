# Math V2 Final Retirement and Release Superflow R1

This single superflow completes the remaining Math V2 work through transactional gates:

1. Verify post-cutover stability.
2. Create and push an immutable pre-retirement tag.
3. Promote Human content, syllabus and SVG assets into the production `human-runtime/`.
4. Build a Human-only loader.
5. Dry-run and execute generated V2, V1, preview and RC retirement.
6. Safely retire old localStorage namespaces after migration and backup verification.
7. Re-run all content, Node and browser gates.
8. Commit the retirement.
9. Run a clean-tree repository purity gate and commit its evidence.
10. Run the final release gate, commit final evidence and create the release tag.
11. Open/merge a PR when GitHub permissions and branch protection allow it.
12. Verify the configured GitHub Pages deployment.

The Git history and immutable tags retain rollback capability. Old served runtimes are removed from the final tree.
