import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const token = request.cookies.get("AppUser")?.value || ""

  try {
    if (token) {
      if (path === "/") {
        return NextResponse.redirect(new URL("/add-feed", request.nextUrl))
      }
      if (path === "/login") {
        return NextResponse.redirect(new URL("/add-feed", request.nextUrl))
      }
    }

    if (path === "/") {
      return NextResponse.redirect(new URL("/track", request.nextUrl))
    }
    if (!token && path === "/add-feed") {
      return NextResponse.redirect(new URL("/login", request.nextUrl))
    }
  } catch (e) {
    return NextResponse.redirect(new URL("/login", request.nextUrl))
  }
}

export const config = { matcher: ["/", "/login", "/track", "/add-feed"] }
