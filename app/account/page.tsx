import { requireUser } from "@/lib/session";
import { Card } from "@/components/ui/card";

export default async function AccountPage() {
  const user = await requireUser("/account");
  return (
    <Card>
      <h1 className="mb-4 font-heading text-3xl font-bold uppercase text-primary">My account</h1>
      <dl className="grid grid-cols-[8rem_1fr] gap-y-2 text-sm">
        <dt className="text-muted-foreground">Name</dt>
        <dd data-testid="account-name">{user.name}</dd>
        <dt className="text-muted-foreground">Phone</dt>
        <dd>{user.phone}</dd>
        <dt className="text-muted-foreground">Sex</dt>
        <dd>{user.sex === "MALE" ? "Male" : "Female"}</dd>
        <dt className="text-muted-foreground">Age</dt>
        <dd>{user.age}</dd>
      </dl>
      <p className="mt-6 text-sm text-muted-foreground">Your bookings and results will appear here.</p>
    </Card>
  );
}
