import supabaseAdmin from "@/utils/supabase-admin";
import { NextResponse } from "next/server";

interface BodyProps {
  who: string;
  state: string;
  county: string;
  city: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  agree: boolean;
}

export async function POST(req: Request) {
  const body: BodyProps = await req.json();
  try {
    const { data, error } = await supabaseAdmin.from("referral").insert([
      {
        first_name: body.firstName,
        last_name: body.lastName,
        email: body.email.toLocaleLowerCase(),
        phone: body.phone,
        track_name: body.who,
        county_id: parseInt(body.county),
      },
    ]);
    if (error) {
      return NextResponse.json({
        success: false,
        error: error,
        message: "Something went wrong",
      });
    }

    return NextResponse.json({ success: true, data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error,
      message: "Something went wrong",
    });
  }
}
