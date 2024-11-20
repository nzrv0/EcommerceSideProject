import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Cookies from "js-cookie";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("token");
  console.log(cookie);
  if (!cookie) {
    return NextResponse.redirect(new URL("/signup", request.url));
  }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    { source: "/signup", has: [{ type: "cookie", key: "token" }] },
    { source: "/signin", has: [{ type: "cookie", key: "token" }] },

    {
      source: "/myaccount/:path*",
      missing: [{ type: "cookie", key: "token" }],
    },
    {
      source: "/pay/:path*",
      missing: [{ type: "cookie", key: "token" }],
    },
  ],
};
