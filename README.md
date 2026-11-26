# La Graceful Medical Laboratory

Rules and specs live in `CLAUDE.md` and `docs/`. Read `docs/specs/02-architecture.md` first. Package manager: **pnpm** (ADR-011).

## First-time setup
1. `pnpm install`
2. Copy `.env.example` to `.env`; paste the Neon **pooled** URL as `DATABASE_URL` and the **direct** URL as `DIRECT_URL`.
3. Create a second Neon branch for tests and put its URLs in `.env.test` (see `.env.test.example`).
4. `pnpm exec prisma migrate dev --name init` (creates the tables and the `prisma/migrations` folder; commit it).
5. `pnpm dev` then open http://localhost:3000
6. Commit `pnpm-lock.yaml`.

## Checks
- `pnpm typecheck`
- `pnpm test` (unit + integration, uses `.env.test`)
- `pnpm exec playwright install chromium` once (large download), then `pnpm test:e2e` with the dev server pointed at the test database

## Render (web service)
- Build command: `pnpm install --frozen-lockfile && pnpm exec prisma migrate deploy && pnpm build`
- Start command: `pnpm start`
- Environment: `DATABASE_URL`, `DIRECT_URL`, `INTERNAL_API_SECRET`
- Health check path: `/api/health`
- If Render does not pick pnpm, add `"packageManager": "pnpm@<your version from pnpm -v>"` to `package.json`.
