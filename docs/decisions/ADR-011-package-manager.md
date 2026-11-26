# ADR-011: pnpm as package manager
Status: Accepted · 2026-11-25
## Context
Owner wants to save disk space on the local machine.
## Options
1. pnpm (shared global store, hard links)
2. npm
3. yarn
## Decision
pnpm. Commit `pnpm-lock.yaml`. `package.json` lists the packages whose install scripts may run (`pnpm.onlyBuiltDependencies`: Prisma and esbuild) because pnpm blocks dependency scripts by default.
## Consequences
+ Much less disk use across projects, fast installs.
− Render must use pnpm (build command in README); strict dependency rules may expose a missing dependency (fix by adding it explicitly).
