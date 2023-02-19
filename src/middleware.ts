import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Set Auth URL:
  const isAuthPage = req.nextUrl.pathname.startsWith("/auth");

  // If authenticated, redirect to dashboard:
  if (isAuthPage) {
    if (session?.user.id) {
      return NextResponse.redirect(new URL("/dash", req.url));
    }
    return null;
  }

  // If not authenticated, redirect to auth page:
  if (!session?.user.id) {
    let from = req.nextUrl.pathname;
    if (req.nextUrl.search) {
      from += req.nextUrl.search;
    }

    return NextResponse.redirect(
      new URL(`/auth?from=${encodeURIComponent(from)}`, req.url),
    );
  }
}

export const config = {
  matcher: ["/auth"],
};
