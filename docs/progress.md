# Progress

- Phase 1 Scope: DONE
- Phase 2 Plan: DONE
- Phase 3 Architecture: DONE (ADR-001 to ADR-010 accepted)
- Phase 4 Develop: IN PROGRESS
  - Scaffold + F01 Patient accounts: CODE WRITTEN, NOT YET RUN. Needs `pnpm install`, `pnpm exec prisma migrate dev`, `pnpm test`, `pnpm test:e2e` on the owner's machine; fix anything that fails before merging.
## Decisions added this step
- Nigerian phone numbers only, stored as +234XXXXXXXXXX.
- 5 wrong passwords lock the account for 15 minutes.
- Admin resets a patient's password by Telegram command (added to F07 criteria 7).
- ADR-010 libraries and test tools.
- ADR-011 pnpm as package manager (owner's choice, saves disk).
## Next
Merge scaffold and F01 once green, then F02 catalog, F06 Telegram alerts, F03 booking (M1), and deploy M1 to Render.
## Open items
- Real logo file (a placeholder cropped from the form photo is in `public/logo-temp.png`).
- Stray duplicate files in docs/decisions (ADR-002-n8n-hosting, ADR-004-system-shape, ADR-005-messaging, ADR-007-file-storage) not deleted.
- Known gap: account page shows only the profile until F03/F09 add bookings and results (F01 criterion 6 is fully testable then).
