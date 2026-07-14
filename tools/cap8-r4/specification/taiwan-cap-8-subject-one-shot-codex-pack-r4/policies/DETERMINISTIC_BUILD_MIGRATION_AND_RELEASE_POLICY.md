# Deterministic build, migration, and release policy

Source content is canonical; runtime bundles are generated. Two clean builds from the same commit must match byte-for-byte except a separately isolated approved build metadata file.

Preserve existing localStorage progress. Inventory every key and schema, build versioned migrations, test empty/old/corrupt/partial/large histories, and provide rollback-safe backups. Never silently clear user data.

Run static validation, unit tests, browser tests, content gates, link/asset/encoding checks, performance budgets, service-worker/offline tests, and clean-checkout reproduction.

No partial main deployment. Create backup tag, update normally without force, verify Pages live, then retain rollback instructions and evidence.
