import supabaseAdmin from "@/utils/supabase-admin";
import { NextResponse } from "next/server";

type RequestBody = {
  transactions: any[];
  county_id: string;
};

export async function POST(request: Request) {
  const { transactions }: RequestBody = await request.json();
  try {
    let data = { uploaded: 0, updated: 0, matched: 0 };

    let allPropertyIds: string[] = transactions.map((t) => t.PropertyID);

    let updatedRecords = await supabaseAdmin
      .from("sales_transaction")
      .select("PropertyID")
      .in("PropertyID", allPropertyIds);

    data.updated = updatedRecords?.data?.length ?? 0;
    data.uploaded = transactions?.length - (updatedRecords?.data?.length ?? 0);

    await supabaseAdmin.from("sales_transaction").upsert(transactions);

    let referralsResp = await supabaseAdmin.from("referral").select("*");

    if (referralsResp.data?.length) {
      for (let i = 0; i < referralsResp.data.length; i++) {
        const r = referralsResp.data[i];

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
