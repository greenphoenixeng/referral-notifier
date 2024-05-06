import { serialize } from "cookie"
import { NextResponse } from "next/server"
import { sign } from "jsonwebtoken"

type RequestBody = {
  email: string
  password: string
}

const MAX_AGE = 60 * 60 * 24 * 30

export async function POST(request: Request) {
  const { email, password }: RequestBody = await request.json()
  try {
    if (email === "admin@admin.com" && password === "admin") {
      console.log("Login successful")
      const JWT_SECRET = process.env.JWT_SECRET || "sadaskdjlkhjasgd"
      const token = {
        user: {
          id: "1",
          username: "admin",
          email: "admin@admin.com",
        },
      }
      const data = { data: { token: sign(token, JWT_SECRET, { expiresIn: "30d" }) } }

      const seralized = serialize("AppUser", data.data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: MAX_AGE,
        path: "/",
      })

      const response = {
        message: "Login successful",
        token: data.data.token,
        success: true,
      }

      return new Response(JSON.stringify(response), {
        status: 200,
        headers: { "Set-Cookie": seralized },
      })
    } else {
      return NextResponse.json({ message: "Invalid Email/Password", success: false })
    }
  } catch (e) {
    return NextResponse.json({ message: "Invalid Username/Password", success: false })
  }
}
