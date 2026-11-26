"use server";

import { redirect } from "next/navigation";
import { registerUser, loginUser } from "@/lib/auth";
import { createSession, destroySession } from "@/lib/session";

export type FormState = { error?: string; fieldErrors?: Record<string, string[]> } | undefined;

// Only allow redirects to paths inside this site
function safeNext(value: FormDataEntryValue | null): string {
  const next = typeof value === "string" ? value : "";
  return next.startsWith("/") && !next.startsWith("//") ? next : "/account";
}

export async function registerAction(_prev: FormState, formData: FormData): Promise<FormState> {
  const result = await registerUser({
    name: formData.get("name"),
    phone: formData.get("phone"),
    sex: formData.get("sex"),
    age: formData.get("age"),
    password: formData.get("password"),
  });
  if (!result.ok) return { error: result.error, fieldErrors: result.fieldErrors };
  await createSession(result.userId);
  redirect(safeNext(formData.get("next")));
}

export async function loginAction(_prev: FormState, formData: FormData): Promise<FormState> {
  const result = await loginUser({ phone: formData.get("phone"), password: formData.get("password") });
  if (!result.ok) return { error: result.error };
  await createSession(result.userId);
  redirect(safeNext(formData.get("next")));
}

export async function logoutAction(): Promise<void> {
  await destroySession();
  redirect("/");
}
