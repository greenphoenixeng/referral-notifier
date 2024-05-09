import { NextResponse } from "next/server";
import supabaseAdmin from "@/utils/supabase-admin";

export async function GET() {
  try {
    let { data: states, error } = await supabaseAdmin.from("state").select("*");
    if (error) {
      return NextResponse.json({
        success: false,
        error: error,
        message: "Something went wrong",
      });
    }

    const filterData = states
      ?.sort((a, b) => a?.name?.localeCompare(b?.name))
      .map((state) => {
        return {
          id: state.id,
          name: state.name,
          value: state.id,
        };
      });

    return NextResponse.json(
      { success: true, data: filterData },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { success: false, error: error, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
