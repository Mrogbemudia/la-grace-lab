"use client";

import { useActionState } from "react";
import { loginAction } from "@/app/actions";
import { FormField } from "@/components/form-field";
import { Button } from "@/components/ui/button";

export function LoginForm({ next }: { next: string }) {
  const [state, action, pending] = useActionState(loginAction, undefined);
  return (
    <form action={action} className="space-y-4">
      <input type="hidden" name="next" value={next} />
      {state?.error && (
        <p role="alert" className="rounded border border-destructive p-3 text-sm text-destructive">
          {state.error}
        </p>
      )}
      <FormField name="phone" label="Phone number" type="tel" inputMode="tel" autoComplete="tel" placeholder="08031234567" required />
      <FormField name="password" label="Password" type="password" autoComplete="current-password" required />
      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Logging in..." : "Log in"}
      </Button>
    </form>
  );
}
