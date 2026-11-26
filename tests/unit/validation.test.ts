import { describe, expect, it } from "vitest";
import { registerSchema } from "@/lib/validation";

const valid = { name: "Ada Obi", phone: "08031234567", sex: "FEMALE", age: "34", password: "longenough1" };

describe("registerSchema", () => {
  it("accepts valid details and standardises the phone", () => {
    const r = registerSchema.safeParse(valid);
    expect(r.success).toBe(true);
    if (r.success) {
      expect(r.data.phone).toBe("+2348031234567");
      expect(r.data.age).toBe(34);
    }
  });
  it("rejects short passwords, bad sex, bad age and bad phone", () => {
    expect(registerSchema.safeParse({ ...valid, password: "short" }).success).toBe(false);
    expect(registerSchema.safeParse({ ...valid, sex: "OTHER" }).success).toBe(false);
    expect(registerSchema.safeParse({ ...valid, age: "200" }).success).toBe(false);
    expect(registerSchema.safeParse({ ...valid, phone: "123" }).success).toBe(false);
  });
});
