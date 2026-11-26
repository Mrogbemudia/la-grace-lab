# F08 - Nurse dispatch on WhatsApp
Size: L · Depends on: F04, F05, F07

**Story:** As the lab, I want a paid home booking to reach an available nurse automatically so that samples are collected quickly.

**Acceptance criteria**
1. Given a "Paid" home booking, Then all approved nurses are asked on WhatsApp if they are available.
2. Given nurses reply YES within 5 minutes, Then the first YES is assigned, status becomes "Nurse Dispatched", and that nurse gets the patient's name, phone and live location link.
3. Given a nurse replies YES after another was assigned, Then they are told the job is taken.
4. Given no nurse replies YES within 5 minutes, Then the admin is alerted on Telegram.
5. Given the assigned nurse reports the sample collected, Then status becomes "Sample Collected".
6. Given a "Paid" walk-in booking, Then no nurse dispatch happens.
7. Given a non-approved number messages the bot, Then it is ignored.

Note: alerts to nurses use pre-approved WhatsApp templates (ADR-005); WhatsApp messages carry a small per-message cost.
