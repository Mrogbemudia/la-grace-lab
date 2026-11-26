import { afterAll, beforeEach, describe, expect, it } from "vitest";
import { db } from "@/lib/db";
import { registerUser, loginUser, GENERIC_LOGIN_ERROR, LOCKED_ERROR, MAX_FAILED_LOGINS, LOCK_MINUTES } from "@/lib/auth";

// Needs .env.test pointing at a TEST database. All test users use numbers starting 0700000.
const PHONE = "07000001111";
const STORED = "+2347000001111";
const base = { name: "Test Patient", phone: PHONE, sex: "MALE", age: 30, password: "correct-password" };

beforeEach(async () => {
  await db.user.deleteMany({ where: { phone: { startsWith: "+234700000" } } });
});
afterAll(async () => {
  await db.user.deleteMany({ where: { phone: { startsWith: "+234700000" } } });
  await db.$disconnect();
});

describe("F01 registration", () => {
  it("1. creates an account from valid details", async () => {
    const r = await registerUser(base);
    expect(r.ok).toBe(true);
    const user = await db.user.findUnique({ where: { phone: STORED } });
    expect(user?.name).toBe("Test Patient");
    expect(user?.passwordHash).not.toContain("correct-password");
  });

  it("2. refuses a phone number that is already registered (any format)", async () => {
    await registerUser(base);
    const again = await registerUser({ ...base, phone: "+2347000001111" });
    expect(again.ok).toBe(false);
    expect(await db.user.count({ where: { phone: STORED } })).toBe(1);
  });
});

describe("F01 login", () => {
  beforeEach(async () => {
    await registerUser(base);
  });

  it("3. logs in with the correct details", async () => {
    const r = await loginUser({ phone: PHONE, password: base.password });
    expect(r.ok).toBe(true);
  });

  it("4. gives the same message for a wrong password and an unknown phone", async () => {
    const wrongPassword = await loginUser({ phone: PHONE, password: "nope" });
    const unknownPhone = await loginUser({ phone: "07000002222", password: "nope" });
    expect(wrongPassword).toEqual({ ok: false, error: GENERIC_LOGIN_ERROR });
    expect(unknownPhone).toEqual({ ok: false, error: GENERIC_LOGIN_ERROR });
  });

  it("7. locks the account for 15 minutes after 5 wrong passwords, even for the right password", async () => {
    const t0 = new Date("2026-12-01T10:00:00Z");
    for (let i = 0; i < MAX_FAILED_LOGINS - 1; i++) {
      expect(await loginUser({ phone: PHONE, password: "bad" }, t0)).toEqual({ ok: false, error: GENERIC_LOGIN_ERROR });
    }
    expect(await loginUser({ phone: PHONE, password: "bad" }, t0)).toEqual({ ok: false, error: LOCKED_ERROR });
    // right password is refused during the lock
    const during = new Date(t0.getTime() + (LOCK_MINUTES - 1) * 60_000);
    expect(await loginUser({ phone: PHONE, password: base.password }, during)).toEqual({ ok: false, error: LOCKED_ERROR });
    // and accepted once the lock has ended
    const after = new Date(t0.getTime() + (LOCK_MINUTES + 1) * 60_000);
    expect((await loginUser({ phone: PHONE, password: base.password }, after)).ok).toBe(true);
  });

  it("a successful login clears earlier failed attempts", async () => {
    await loginUser({ phone: PHONE, password: "bad" });
    await loginUser({ phone: PHONE, password: base.password });
    const user = await db.user.findUnique({ where: { phone: STORED } });
    expect(user?.failedLogins).toBe(0);
  });
});
