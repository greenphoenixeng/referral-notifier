import { NextResponse } from "next/server"
import { createClient } from "@/utils/supabase/server"

export async function GET() {
  const supabase = createClient()
  try {
    let { data: cities, error } = await supabase.from("city").select("*")
    const filterData = cities?.map((city) => {
      return {
        id: city.id,
        name: city.name,
        value: city.id,
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
