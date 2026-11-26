import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <Card className="bg-tint">
        <h1 className="font-heading text-4xl font-bold uppercase text-primary">La Graceful Medical Laboratory</h1>
        <p className="mt-2">Book lab tests and home sample collection, and get your results online.</p>
        <div className="mt-4 flex gap-3">
          <Link href="/register" className="rounded bg-primary px-4 py-3 font-semibold text-primary-foreground">
            Create an account
          </Link>
          <Link href="/login" className="rounded border border-primary px-4 py-3 font-semibold text-primary">
            Log in
          </Link>
        </div>
      </Card>
      <Card>
        <h2 className="font-heading text-2xl font-bold uppercase text-primary">Office address</h2>
        <p>1, College Road, Off Benin-Auchi Road, Aduwawa Quarters, B/City</p>
        <p>Tel: 08058828411, 07036359661</p>
      </Card>
    </div>
  );
}
