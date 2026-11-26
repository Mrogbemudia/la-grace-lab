import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

// Used by the n8n keep-alive ping. Add ?deep=1 to also check the database.
export async function GET(req: Request) {
  const deep = new URL(req.url).searchParams.get("deep") === "1";
  if (deep) {
    try {
      await db.$queryRaw`SELECT 1`;
    } catch {
      return NextResponse.json({ status: "error", database: "down" }, { status: 503 });
    }
  }
  return NextResponse.json({ status: "ok", database: deep ? "up" : "not checked", time: new Date().toISOString() });
}
