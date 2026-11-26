import { db } from "./db";
import { hashPassword, verifyPassword } from "./password";
import { registerSchema, loginSchema } from "./validation";

export const MAX_FAILED_LOGINS = 5;
export const LOCK_MINUTES = 15;
export const GENERIC_LOGIN_ERROR = "Wrong phone number or password.";
export const LOCKED_ERROR = `Too many wrong attempts. Try again in ${LOCK_MINUTES} minutes.`;

export type AuthResult =
  | { ok: true; userId: string }
  | { ok: false; error: string; fieldErrors?: Record<string, string[]> };

export async function registerUser(raw: unknown): Promise<AuthResult> {
  const parsed = registerSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, error: "Please fix the highlighted fields.", fieldErrors: parsed.error.flatten().fieldErrors };
  }
  const { name, phone, sex, age, password } = parsed.data;

  const existing = await db.user.findUnique({ where: { phone } });
  if (existing) {
    return { ok: false, error: "This phone number is already registered. Please log in.", fieldErrors: { phone: ["Already registered"] } };
  }

  try {
    const user = await db.user.create({ data: { name, phone, sex, age, passwordHash: await hashPassword(password) } });
    return { ok: true, userId: user.id };
  } catch (e: unknown) {
    // Two people registering the same number at the same moment
    if (typeof e === "object" && e && "code" in e && (e as { code: string }).code === "P2002") {
      return { ok: false, error: "This phone number is already registered. Please log in.", fieldErrors: { phone: ["Already registered"] } };
    }
    throw e;
  }
}

// Used to spend the same time when the phone number does not exist
let dummyHash: Promise<string> | null = null;

export async function loginUser(raw: unknown, now: Date = new Date()): Promise<AuthResult> {
  const parsed = loginSchema.safeParse(raw);
  if (!parsed.success) return { ok: false, error: GENERIC_LOGIN_ERROR };
  const { phone, password } = parsed.data;

  const user = await db.user.findUnique({ where: { phone } });
  if (!user) {
    dummyHash ??= hashPassword("not-a-real-password");
    await verifyPassword(await dummyHash, password);
    return { ok: false, error: GENERIC_LOGIN_ERROR };
  }

  if (user.lockedUntil && user.lockedUntil > now) {
    return { ok: false, error: LOCKED_ERROR };
  }

  const valid = await verifyPassword(user.passwordHash, password);
  if (!valid) {
    const failed = user.failedLogins + 1;
    if (failed >= MAX_FAILED_LOGINS) {
      await db.user.update({
        where: { id: user.id },
        data: { failedLogins: 0, lockedUntil: new Date(now.getTime() + LOCK_MINUTES * 60_000) },
      });
      return { ok: false, error: LOCKED_ERROR };
    }
    await db.user.update({ where: { id: user.id }, data: { failedLogins: failed } });
    return { ok: false, error: GENERIC_LOGIN_ERROR };
  }

  if (user.failedLogins !== 0 || user.lockedUntil) {
    await db.user.update({ where: { id: user.id }, data: { failedLogins: 0, lockedUntil: null } });
  }
  return { ok: true, userId: user.id };
}
