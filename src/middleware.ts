import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Check auth condition, if met, continue to route handler:
  if (session?.user?.id) {
    return res;
  }

  // Auth condition not met, redirect to auth page:
  const redirectUrl = req.nextUrl.clone();
  redirectUrl.pathname = "/auth";
  redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: "/app/:path*",
};
