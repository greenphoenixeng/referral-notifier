import { serialize } from "cookie";
import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken";
import supabaseAdmin from "@/utils/supabase-admin";

type RequestBody = {
  transactions: any[];
  county_id: string;
};

const MAX_AGE = 60 * 60 * 24 * 30;

export async function POST(request: Request) {
  const { transactions, county_id }: RequestBody = await request.json();
  try {
    let data = { uploaded: 0, updated: 0, matched: 0 };

    let allPropertyIds: string[] = transactions.map((t) => t.PropertyID);

    let updatedRecords = await supabaseAdmin
      .from("sales_transaction")
      .select("PropertyID")
      .in("PropertyID", allPropertyIds);

    data.updated = updatedRecords?.data?.length ?? 0;
    data.uploaded = transactions?.length - (updatedRecords?.data?.length ?? 0);

    let insertResp = await supabaseAdmin
      .from("sales_transaction")
      .upsert(transactions?.map((t) => ({ ...t, County: county_id })));

    let referalsResp = await supabaseAdmin
      .from("referral")
      .select("*")
      .match({ county_id });

    console.log(referalsResp);

    if (referalsResp.data?.length) {
      for (let i = 0; i < referalsResp.data.length; i++) {
        const r = referalsResp.data[i];

        let matches = transactions.filter(
          (t) => t.Grantee?.toLowerCase() === r?.track_name?.toLowerCase()
        );

        if (matches.length) {
          data.matched += matches.length;

          let matchesData = matches.map((m) => ({
            sold_property_id: m?.PropertyID,
            referral_id: r.id,
          }));

          await supabaseAdmin.from("matches").upsert(matchesData);
        }
      }
    }

    return NextResponse.json(
      {
        data: data,
        success: true,
      },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({
      message: "Something went wrong!",
      success: false,
    });
  }
}
