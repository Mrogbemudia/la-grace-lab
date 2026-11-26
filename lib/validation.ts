import { z } from "zod";
import { normalizeNigerianPhone } from "./phone";

const phoneField = z
  .string()
  .trim()
  .transform((value, ctx) => {
    const normalized = normalizeNigerianPhone(value);
    if (!normalized) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Enter a valid Nigerian phone number, e.g. 08031234567" });
      return z.NEVER;
    }
    return normalized;
  });

export const registerSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100),
  phone: phoneField,
  sex: z.enum(["MALE", "FEMALE"], { errorMap: () => ({ message: "Choose Male or Female" }) }),
  age: z.coerce.number({ invalid_type_error: "Enter your age" }).int("Enter a whole number").min(0, "Enter a valid age").max(120, "Enter a valid age"),
  password: z.string().min(8, "Password must be at least 8 characters").max(128),
});

export const loginSchema = z.object({
  phone: phoneField,
  password: z.string().min(1, "Enter your password").max(128),
});

export type RegisterInput = z.infer<typeof registerSchema>;
