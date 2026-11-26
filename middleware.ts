import { NextRequest, NextResponse } from "next/server";

// Quick check only (cookie present). The real check is requireUser() in each protected page.
const PROTECTED = ["/account", "/book", "/bookings", "/results"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (!PROTECTED.some((p) => pathname === p || pathname.startsWith(p + "/"))) return NextResponse.next();
  if (req.cookies.get("lab_session")?.value) return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.search = `?next=${encodeURIComponent(pathname)}`;
  return NextResponse.redirect(url);
}

export const config = { matcher: ["/account/:path*", "/book/:path*", "/bookings/:path*", "/results/:path*"] };
