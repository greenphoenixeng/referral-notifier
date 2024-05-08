import { NextResponse } from "next/server"
import { createClient } from "@/utils/supabase/server"

export async function GET() {
  const supabase = createClient()
  try {
    let { data: counties, error } = await supabase.from("county").select("*")
    const filterData = counties?.map((county) => {
      return {
        id: county.id,
        name: county.name,
        value: county.id,
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
