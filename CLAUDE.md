# Project Rules & AI Assistant Instructions

## Build methodology
6-phase spec-driven method: 01 Scope, 02 Plan, 03 Architecture, 04 Develop, 05 Test, 06 Deploy.

## Core rules
1. Decisions before code: every architecture, design and feature decision is written in `docs/specs/` and `docs/decisions/` first.
2. Phase gate: finish each phase and wait for explicit approval before the next.
3. One feature at a time: one branch per feature from `docs/specs/features/`, a test for every acceptance criterion, update `docs/progress.md` after.
4. No assumptions: if something is not in the specs, stop and ask.
5. No unapproved libraries or services: propose and record an ADR first.
6. Lab result form text, spellings, units and ranges are used exactly as printed (`docs/specs/reference-result-form.md`).

## Folder structure
```text
docs/
  specs/ (00-project-brief, 01-roadmap, 02-architecture, 03-design-system, 04-dev-workflow, 05-testing-plan, 06-deployment, features/F01-*.md)
  decisions/ (README.md, ADR-NNN-*.md)
  progress.md
  runbook.md
CLAUDE.md
```
