import { describe, expect, it } from "vitest";
import { normalizeNigerianPhone } from "@/lib/phone";

describe("normalizeNigerianPhone (F01 criterion 8)", () => {
  it("treats 0803..., +234803... and 234803... as the same number", () => {
    expect(normalizeNigerianPhone("08031234567")).toBe("+2348031234567");
    expect(normalizeNigerianPhone("+2348031234567")).toBe("+2348031234567");
    expect(normalizeNigerianPhone("2348031234567")).toBe("+2348031234567");
  });
  it("ignores spaces and dashes", () => {
    expect(normalizeNigerianPhone("0803 123 4567")).toBe("+2348031234567");
    expect(normalizeNigerianPhone("0803-123-4567")).toBe("+2348031234567");
  });
  it("rejects invalid numbers", () => {
    expect(normalizeNigerianPhone("12345")).toBeNull();
    expect(normalizeNigerianPhone("0603123456")).toBeNull();
    expect(normalizeNigerianPhone("+4478123456789")).toBeNull();
    expect(normalizeNigerianPhone("")).toBeNull();
  });
});
