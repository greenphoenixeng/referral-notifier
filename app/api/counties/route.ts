import { NextResponse } from "next/server";
import supabaseAdmin from "@/utils/supabase-admin";

export async function GET() {
  try {
    let { data: counties, error } = await supabaseAdmin
      .from("county")
      .select("*");

    const filterData = counties
      ?.sort((a, b) => a?.name?.localeCompare(b?.name))
      ?.map((county) => {
        return {
          id: county.id,
          name: county.name,
          value: county.id,
        };
      });

    return NextResponse.json(
      { success: true, data: filterData },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
