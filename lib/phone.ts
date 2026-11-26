// Accepts 0803..., +234803... or 234803... and returns +234803XXXXXXX (E.164), or null.
const NG_MOBILE = /^(?:\+?234|0)([789][01]\d{8})$/;

export function normalizeNigerianPhone(input: string): string | null {
  const cleaned = input.replace(/[\s\-().]/g, "");
  const match = NG_MOBILE.exec(cleaned);
  return match ? `+234${match[1]}` : null;
}
