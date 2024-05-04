import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  try {
    if (path === "/") {
      return NextResponse.redirect(new URL("/login", request.nextUrl))
    }
  } catch (e) {
    return NextResponse.redirect(new URL("/login", request.nextUrl))
  }
}

export const config = { matcher: ["/", "/track", "/add-feed", "/success"] }
