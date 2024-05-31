import supabaseAdmin from "@/utils/supabase-admin";
import { NextResponse } from "next/server";

type RequestBody = {
  transactions: any[];
  county_id: string;
};

export async function POST(request: Request) {
  const { transactions }: RequestBody = await request.json();
  try {
    // upsert newly uploaded sales transactions
    let data = { uploaded: 0, updated: 0, matched: 0 };

    let allPropertyIds: string[] = transactions.map((t) => t.PropertyID);

    let updatedRecords = await supabaseAdmin
      .from("sales_transaction")
      .select("PropertyID")
      .in("PropertyID", allPropertyIds);

    data.updated = updatedRecords?.data?.length ?? 0;
    data.uploaded = transactions?.length - (updatedRecords?.data?.length ?? 0);

    await supabaseAdmin.from("sales_transaction").upsert(transactions);

    // get search for matching referrals
    let referralsResp = await supabaseAdmin.from("referral").select("*");

    if (referralsResp.data?.length) {
      for (let i = 0; i < referralsResp.data.length; i++) {
        const referral = referralsResp.data[i];

        let matches = transactions.filter(
          (t) => t.Grantee?.toLowerCase() === referral?.track_name?.toLowerCase()
        );

        // on found, store the match and submit email
        if (matches.length) {
          data.matched += matches.length;

          let matchesData = matches.map((m) => ({
            sold_property_id: m?.PropertyID,
            referral_id: referral.id,
          }));

          await supabaseAdmin.from("matches").upsert(matchesData);

          console.log('submitting email...');

          debugger;

          const response = await fetch('/workspaces/fd65229c-ce57-4787-9fe6-f8fc1bf18d63/channels/d07adb03-1cd1-495f-b963-b18505a6b92c/messages', {
            method: 'POST',
            headers: {
              "Authorization": "AccessKey mKzn3uh3uSZnPQeZGp71ZWvIvnxsw8cWMqTP",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "receiver": {
                "contacts": [
                  {
                    "identifierValue": referral?.email?.toLowerCase() // agent's emal
                  }
                ]
              },
              "body": `Congratulations! Your referral ${referral?.track_name?.toLowerCase()} has purchased a property. 
              Now is the time to reach out for your compensation!`
            }),
        });
        
        await response.json();
        debugger;
        
        }
      }
    }
    
    debugger;

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


