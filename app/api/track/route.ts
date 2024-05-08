import { createClient } from "@/utils/supabase/server"
import { NextResponse } from "next/server"

interface BodyProps {
  who: string
  state: string
  county: string
  city: string
  firstName: string
  lastName: string
  email: string
  phone: string
  agree: boolean
}

export async function POST(req: Request) {
  const body: BodyProps = await req.json()
  try {
    const supabase = await createClient()
    const { data, error } = await supabase.from("referral").insert([
      {
        first_name: body.firstName.toLocaleLowerCase(),
        last_name: body.lastName.toLocaleLowerCase(),
        email: body.email.toLocaleLowerCase(),
        phone: body.phone,
        track_name: body.who.toLocaleLowerCase(),
        county_id: parseInt(body.county),
      },
    ])
    if (error) {
      return NextResponse.json({ success: false, error: error, message: "Something went wrong" })
    }

    return NextResponse.json({ success: true, data: data }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ success: false, error: error, message: "Something went wrong" })
  }
}
