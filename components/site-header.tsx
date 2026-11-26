import Link from "next/link";
import { getCurrentUser } from "@/lib/session";
import { logoutAction } from "@/app/actions";
import { Button } from "@/components/ui/button";

export async function SiteHeader() {
  const user = await getCurrentUser();
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-temp.png" alt="" width={40} height={40} />
          <span className="font-heading text-xl font-bold uppercase leading-tight tracking-wide text-primary">
            La Graceful Medical Laboratory
          </span>
        </Link>
        <nav className="flex items-center gap-2 text-sm">
          {user ? (
            <>
              <Link href="/account" className="font-medium text-primary">
                My account
              </Link>
              <form action={logoutAction}>
                <Button type="submit" variant="outline" className="min-h-9 px-3">
                  Log out
                </Button>
              </form>
            </>
          ) : (
            <>
              <Link href="/login" className="font-medium text-primary">
                Log in
              </Link>
              <Link href="/register" className="rounded bg-primary px-3 py-2 font-semibold text-primary-foreground">
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
