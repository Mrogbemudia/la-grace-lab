import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/session";
import { Card } from "@/components/ui/card";
import { RegisterForm } from "./register-form";

export default async function RegisterPage({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const { next } = await searchParams;
  if (await getCurrentUser()) redirect("/account");
  return (
    <Card>
      <h1 className="mb-4 font-heading text-3xl font-bold uppercase text-primary">Create your account</h1>
      <RegisterForm next={next ?? "/account"} />
      <p className="mt-4 text-sm">
        Already registered?{" "}
        <Link href="/login" className="font-semibold text-primary underline">
          Log in
        </Link>
      </p>
    </Card>
  );
}
