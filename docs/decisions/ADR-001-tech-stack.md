# ADR-001: Tech stack
Status: Accepted · 2026-11-25
## Context
Solo developer, 5 days, zero budget, patients mostly on phones.
## Options
1. Next.js + Neon Postgres + Render (chosen by owner)
2. Laravel/PHP + MySQL on free PHP hosting
3. Node/Express + Postgres on the free Oracle VM
## Decision
Next.js (TypeScript) with Prisma, Neon Postgres, deployed as a Render web service.
## Consequences
+ One codebase, free tiers, familiar to the owner.
− Render free service sleeps after 15 min and takes about a minute to wake (mitigated by a keep-alive ping, see architecture).
− Render free disk is wiped on restart, so files go in the database (ADR-007).
− Free-tier limits (Neon storage and idle pausing) to be re-checked before launch.
