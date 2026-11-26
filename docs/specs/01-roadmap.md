# 01 - Roadmap

Status: APPROVED · 2026-11-24. 5 days, one developer, zero budget. Nothing here is beyond the approved brief.

| Milestone | Target | Features | Result |
|---|---|---|---|
| **M1 Thin slice (deployable)** | Days 1-2 | F01, F02, F03, F06 | A patient registers, sees the catalog, books (with location), and the admin gets a Telegram alert. |
| **M2 Pay and track** | Day 3 | F04, F05 | Paystack and bank-transfer payment, 10-minute expiry, full status lifecycle. |
| **M3 Nurses** | Day 4 | F07, F08 | Admin manages nurses/catalog by chat; paid home bookings are dispatched on WhatsApp. |
| **M4 Results** | Day 5 | F09 | Admin sends values; patient downloads the lab-form PDF. |
| **M5 Extras (only if time)** | Day 5 | F10, F11 | News and Selar links; monitoring dashboard. |

**Spike S1 (1-2 hours, Day 1, not a feature):** build the result form in react-pdf and compare it with your photo (ADR-006). Also start the Meta WhatsApp business setup and template approval on Day 1 (ADR-005), because approval can take time.

**Cut order if time runs out:** F11 first, then F10. F01 to F09 are the core.

**Dependency order:** F06 and F01/F02 first; F03 needs F01+F02; F04 needs F03+F06; F05 alongside F03; F07 needs F06+F02; F08 needs F04+F05+F07; F09 needs F05+F06; F10 needs F07; F11 last.

| Feature | Name | Size |
|---|---|---|
| F01 | Patient accounts | M |
| F02 | Test catalog and public site | M |
| F03 | Booking and location | M |
| F04 | Payments | L |
| F05 | Status lifecycle | S |
| F06 | Admin Telegram bot core | M |
| F07 | Admin chat management | M |
| F08 | Nurse dispatch | L |
| F09 | Results PDF pipeline | L |
| F10 | Health news and Selar links | S |
| F11 | Monitoring dashboard | M |

Honest note: three L and six M features in 5 days alone is very tight. M1 is the safe stopping point that is still usable.
