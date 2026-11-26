# F03 - Booking and location
Size: M · Depends on: F01, F02

**Story:** As a patient, I want to book a test or a general collection, as a home visit or walk-in, and share my live location so that a nurse can find me.

**Acceptance criteria**
1. Given a logged-in patient, When they choose one or more tests (or general collection) and a visit type (home or walk-in), Then a booking is created with status "Booked" and a total price.
2. Given visit type "home", When the patient submits, Then a live WhatsApp location link is required; the link must look like a valid location/maps link or the form is refused.
3. Given visit type "walk-in", When the patient submits, Then no location is required.
4. Given a created booking, Then it has a unique Booking ID shown to the patient.
5. Given a created booking, Then the admin is alerted on Telegram (see F06).
6. Given a patient, When they view "My bookings", Then they see Booking ID, tests, total, status, and nothing belonging to others.
