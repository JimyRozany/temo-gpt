import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token");
  if (token) {
    return NextResponse.next();
  }
  return NextResponse.redirect( new URL('/login', request.url));
}

export const config = {
  matcher: ["/", "/chat", "/quiz"],
};
