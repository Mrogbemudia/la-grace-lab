# ADR-010: Libraries and test tools
Status: Accepted · 2026-11-25
## Context
Rule: no new library without an ADR. Solo developer, free tools only.
## Options
1. Minimal well-known set (below)
2. An auth library and form library on top
3. Hand-rolled everything
## Decision
Option 1. Runtime: next, react, react-dom, tailwindcss, clsx, tailwind-merge, @prisma/client, @node-rs/argon2 (password hashing), zod (form validation). Dev: typescript, prisma, vitest, @playwright/test, postcss, autoprefixer. shadcn/ui components are written into `components/ui/` by hand in the shadcn style (no Radix yet; add one by ADR if a dialog or select needs it).
## Consequences
+ Small surface, all free and widely used.
− @node-rs/argon2 is a native module (works on Render's Linux; check if the build ever fails).
− Playwright browsers must be installed once (`npx playwright install chromium`).
