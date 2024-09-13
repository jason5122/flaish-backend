import { NextResponse, NextRequest } from "next/server";
import connectMongo from "@/libs/mongoose";
import Lead from "@/models/Lead";

export async function POST(req: NextRequest) {
  await connectMongo();

  const body = await req.json();

  if (!body.email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    const lead = await Lead.findOne({ email: body.email });

    if (!lead) {
      await Lead.create({ email: body.email });
      // You can add logic such as sending a welcome email here.
    }

    return NextResponse.json({});
  } catch (e) {
    console.error(e);
    // Type narrowing to ensure `e` has a message property
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
    }
  }
}
