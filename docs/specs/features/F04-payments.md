# F04 - Payments
Size: L · Depends on: F03, F06

**Story:** As a patient, I want to pay by Paystack or by bank transfer so that my booking is confirmed.

**Acceptance criteria**
1. Given a "Booked" booking, When the patient pays through Paystack and the Paystack webhook confirms success, Then status becomes "Paid" automatically.
2. Given a duplicate or invalid webhook, When it arrives, Then the booking is not changed twice and the event is logged.
3. Given the patient chooses bank transfer, When they upload a receipt, Then the admin receives the receipt and booking details on Telegram.
4. Given a bank-transfer booking, When the admin confirms it on Telegram within 10 minutes, Then status becomes "Paid".
5. Given a bank-transfer booking not confirmed within 10 minutes, Then it expires, the patient sees "Expired", and the admin is told.
6. Given a "Paid" booking, Then the nurse dispatch flow (F08) is started.
