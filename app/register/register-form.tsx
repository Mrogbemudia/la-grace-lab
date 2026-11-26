"use client";

import { useActionState } from "react";
import { registerAction } from "@/app/actions";
import { FormField } from "@/components/form-field";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function RegisterForm({ next }: { next: string }) {
  const [state, action, pending] = useActionState(registerAction, undefined);
  const err = (f: string) => state?.fieldErrors?.[f]?.[0];
  return (
    <form action={action} className="space-y-4">
      <input type="hidden" name="next" value={next} />
      {state?.error && (
        <p role="alert" className="rounded border border-destructive p-3 text-sm text-destructive">
          {state.error}
        </p>
      )}
      <FormField name="name" label="Full name" autoComplete="name" required error={err("name")} />
      <FormField name="phone" label="Phone number" type="tel" inputMode="tel" autoComplete="tel" placeholder="08031234567" required error={err("phone")} />
      <div>
        <Label htmlFor="sex">Sex</Label>
        <select id="sex" name="sex" required defaultValue="" className="min-h-11 w-full rounded border border-input bg-background px-3 text-base">
          <option value="" disabled>
            Choose
          </option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
        </select>
        {err("sex") && <p className="mt-1 text-sm text-destructive">{err("sex")}</p>}
      </div>
      <FormField name="age" label="Age (years)" type="number" inputMode="numeric" min={0} max={120} required error={err("age")} />
      <FormField name="password" label="Password (at least 8 characters)" type="password" autoComplete="new-password" required error={err("password")} />
      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Creating account..." : "Create account"}
      </Button>
    </form>
  );
}
