# F05 - Booking status lifecycle
Size: S · Depends on: F03

**Story:** As a patient and as staff, I want every booking to move through clear statuses so that everyone knows where it stands.

**Statuses, in order:** Booked → Paid → Nurse Dispatched → Sample Collected → Result Ready (plus Expired for unpaid transfers).

**Acceptance criteria**
1. Given any booking, Then it has exactly one status at a time and every change is recorded with time and who/what caused it.
2. Given a booking, When a step is skipped (for example Sample Collected before Paid), Then the change is refused.
3. Given a status change, Then the patient sees the new status on the website.
4. Given a booking, Then the nurse assignment (nurse, time accepted) is stored with it.
