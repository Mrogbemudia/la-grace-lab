# F09 - Results PDF pipeline
Size: L · Depends on: F05, F06, reference-result-form.md

**Story:** As an admin, I want to send result values in chat and have a PDF made on the lab's form so that patients can download it.

**Template:** La Graceful Medical Laboratory result form, labels, units and ranges exactly as printed (see `reference-result-form.md`). Only tests actually done are printed.

**Proposed Telegram message format:** `RESULT <BookingID>` then lines `Specimen: ...`, `Examination required: ...`, then `Test name: value` per line (for example `Hb: 13.2`), and optional `Comment: ...`.

**Acceptance criteria**
1. Given an approved admin sends a result message for a "Sample Collected" booking, Then n8n produces a PDF with header, patient name, sex, age, date, specimen, examination required, lab no., and only the tests sent.
2. Given a test name that is not on the form, Then the bot rejects the message and names the unknown line.
3. Given a PDF is produced, Then the booking becomes "Result Ready" and the patient can view and download it in their account.
4. Given another patient is logged in, Then they cannot open that PDF.
5. Given a test with a printed normal range, Then the PDF shows the range beside the result.
6. Given generation fails, Then the admin is alerted and the booking status does not change.
7. Given a sample result, When the PDF is generated, Then the owner compares it with the paper form (layout, green colours, logo, labels) and approves it; if not approved, the third-party fallback in ADR-006 is used.
