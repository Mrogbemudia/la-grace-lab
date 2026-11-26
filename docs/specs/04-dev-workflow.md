# 04 - Dev Workflow

Status: APPROVED · ADR-009

- **Branches:** one per feature, `feature/F03-booking`; merge to `main` through a pull request.
- **Commits:** Conventional Commits (`feat:`, `fix:`, `docs:`, `test:`, `chore:`).
- **Review:** you review your own pull request against the feature's acceptance criteria; CI must be green.
- **Definition of done:** every acceptance criterion has a passing test; `docs/progress.md` updated; new decisions have an ADR; no new library without an ADR; no secrets committed.
- **Environments:** local, then production on Render (a staging copy only if time allows).
- **Order of work:** follow the roadmap milestones; do M1 first and deploy it before starting M2.
- **Package manager:** pnpm (ADR-011).
