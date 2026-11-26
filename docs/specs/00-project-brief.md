# 00 - Project Brief

Status: Draft v5, ready for approval · 2026-11-24 · Phase 1 (Scope)

## 1. Problem and goal

**Goal (one sentence):** Let registered patients of La Graceful Medical Laboratory book tests and home sample collection, pay, and receive results as a PDF on one website, while the admin works on Telegram, nurses on WhatsApp, and n8n automates everything, with a read-only monitoring dashboard for spotting problems. Patients get updates and results on the website only (no patient WhatsApp messages).

## 2. Target users and top tasks

| User | Where they work | Top 3 tasks |
|---|---|---|
| **Patient** (account required) | Public website | 1. Register, then pick a test (fixed-price catalog) or a general collection slot, book and pay (Paystack or bank-transfer receipt upload). 2. Share a live WhatsApp location link for home collection. 3. Track status and view/download the result PDF. |
| **Admin / Receptionist** | Telegram only | 1. Get alerts for new bookings and problems. 2. Confirm bank transfers, approve or remove nurses, edit catalog and Selar links. 3. Send result data in chat for n8n to turn into a PDF. |
| **Nurse** (approved by admin) | WhatsApp only | 1. Reply YES/NO when asked if available. 2. Receive patient contact and live location. 3. Update status (Dispatched, Sample Collected). |
| **Owner(s) (monitoring)** | Read-only web dashboard; one or more owner accounts, login any time | 1. See booking counts by status. 2. See stuck or failed items. 3. See errors and delivery failures. |

## 3. MVP features

**Must-have**
1. **Accounts:** patients must register and log in before booking or viewing results.
2. **Public site:** fixed-price test catalog, general collection booking, automatic health news feed, fixed Selar/book links.
3. **Booking:** home service or walk-in, with a live WhatsApp location link for home visits.
4. **Payments:** Paystack webhook confirmation, or bank transfer with receipt upload confirmed by admin. An unconfirmed transfer expires after 10 minutes.
5. **Status tracking:** Booked → Paid → Nurse Dispatched → Sample Collected → Result Ready.
6. **Nurse dispatch:** after payment, n8n asks available nurses on WhatsApp; each has **5 minutes** to reply YES. The first YES gets the job and the patient's contact and location. If nobody says YES, the admin is alerted on Telegram.
7. **Admin by Telegram:** approve or delete nurses, confirm payments, update Selar links, add/edit tests and prices, submit results.
8. **Results pipeline:** admin sends result data on Telegram; n8n fills the lab's result-form PDF template (only the tests actually done are printed) and publishes it to the patient's account, where it can be viewed and downloaded. No message is sent to the patient; they see status and results on the website.

**Should-have (built last, only if time allows)**
9. **Monitoring dashboard (read-only, owner login):** a single view that tracks every part of the system: bookings by status today/this week; stuck bookings (expired transfers, no nurse accepted, result pending); failed n8n runs and message delivery failures; confirmed payment totals; nurse response rate; and a health status for the website, n8n, the Paystack webhook, WhatsApp and Telegram connections. n8n also sends error alerts to the admin on Telegram so problems are seen without opening the dashboard.

## 4. Out of scope (not in v1)

- Inventory management, HMO/insurance billing, automated lab machine integration, mobile apps
- Dashboards for running operations (admin and nurse actions stay chat-only; the monitoring dashboard is view-only)
- Phone OTP for results (costs money; login already protects results)
- Anything not in section 3 requires approval first

## 5. Success metrics

- A new patient can register, book and pay in under 5 minutes.
- A paid booking reaches an available nurse within 1 minute.
- Every booking moves through all five statuses with no manual tracking.
- A result PDF is downloadable in the patient's account within 2 minutes of the admin sending the data.
- Any failed workflow is reported to the admin within 5 minutes.
- Running cost stays at 0 (excluding unavoidable per-transaction fees).

## 6. Constraints

- **Deadline:** 5 days · **Budget:** zero · **Team:** one developer
- **WhatsApp number:** the sending number lives in settings so it can be changed at any time. For now: **0805 882 8411**. Warning: this number is printed on the lab's forms, and moving a number onto the WhatsApp Business API usually disconnects it from the normal WhatsApp app. Confirm you are happy with that.
- **Admin identity:** the first admin is Telegram number **0703 635 9661**. A Telegram bot cannot message a phone number, so that admin must open the bot and press Start once; we then store their Telegram account as an approved admin. Approved admins are identified by Telegram account, not phone number. Only approved admins can give commands; nurses can only answer jobs and update their own status.
- **Decision 2026-11-25:** nurse alerts stay on WhatsApp and the small per-message cost is accepted (ADR-005).
- **Risks:** WhatsApp may charge for messages the business starts (now only nurse alerts), since admin work is on Telegram and patients get no WhatsApp messages; Paystack takes per-transaction fees; free hosting must keep n8n always on; the dashboard plus 8 other features in 5 days is very tight, so Milestone 1 is a thin slice (booking, payment, alert).

## 7. Result form (from the uploaded sample)

Header: lab name, address, phone numbers. Patient fields: name, sex, age, date, specimen, examination required, lab no. Sections: Haematology, blood group/Rhesus/sickling/genotype/Coombs, Hepatitis B and C, pregnancy test, VDRL, H. pylori, rheumatoid factor, Widal, malaria parasites, hormonal assay, differential WBC, film, microfilaria, HIV screening, lipid studies, electrolytes, liver function and chemistry, comment. Exact fields go in the Phase 2 results spec.

## 8. Open questions

1. **Result form ranges:** transcribed from your clearer photo in `reference-result-form.md`. Please check it, especially the items marked "confirm".
2. **Reverse side of the form:** the photo shows faint text bleeding through (it looks like urine/stool microscopy). Is that in v1? I have assumed not.

No other open questions. Approve this brief and the out-of-scope list to close Phase 1.
