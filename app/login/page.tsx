import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/session";
import { Card } from "@/components/ui/card";
import { LoginForm } from "./login-form";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const { next } = await searchParams;
  if (await getCurrentUser()) redirect("/account");
  return (
    <Card>
      <h1 className="mb-4 font-heading text-3xl font-bold uppercase text-primary">Log in</h1>
      <LoginForm next={next ?? "/account"} />
      <p className="mt-4 text-sm">
        New here?{" "}
        <Link href="/register" className="font-semibold text-primary underline">
          Create an account
        </Link>
      </p>
      <p className="mt-2 text-sm text-muted-foreground">Forgot your password? Call the lab and ask staff to reset it.</p>
    </Card>
  );
}
