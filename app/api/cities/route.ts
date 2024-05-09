import { NextResponse } from "next/server";
import supabaseAdmin from "@/utils/supabase-admin";

export async function GET() {
  try {
    let { data: cities, error } = await supabaseAdmin.from("city").select("*");

    const filterData = cities
      ?.sort((a, b) => a?.name?.localeCompare(b?.name))
      ?.map((city) => {
        return {
          id: city.id,
          name: city.name,
          value: city.id,
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
