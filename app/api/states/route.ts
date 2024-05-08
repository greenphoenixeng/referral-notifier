import { NextResponse } from "next/server"
import { createClient } from "@/utils/supabase/server"

export async function GET() {
  const supabase = createClient()
  try {
    let { data: states, error } = await supabase.from("state").select("*")
    if (error) {
      return NextResponse.json({ success: false, error: error, message: "Something went wrong" })
    }

    const filterData = states?.map((state) => {
      return {
        id: state.id,
        name: state.name,
        value: state.id,
      }
    })

    return NextResponse.json({ success: true, data: filterData }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error, message: "Something went wrong" },
      { status: 500 }
    )
  }
}
