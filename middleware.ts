import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token");
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // decode the token
  const { payload } = await jwtVerify(token.value, SECRET_KEY);
  // allow only to admin go to the dashboard
  // console.log(request.nextUrl.pathname);
  const { pathname } = request.nextUrl;
  
  if (payload.role !== "ADMIN" &&  pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  // if user is CHATTING not access the home page go to chat page
  if (payload.role === "CHATTING" &&  pathname === '/') {
    return NextResponse.redirect(new URL("/chat", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/chat", "/quiz", "/profile", '/dashboard/:path*'],

};
