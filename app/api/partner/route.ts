import { type NextRequest, NextResponse } from "next/server";
import { sendPartnerEmail } from "@/lib/email-service";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (
      !data.contactName ||
      !data.email ||
      !data.organizationName ||
      !data.organizationType
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email
    await sendPartnerEmail(data);

    // In a production app, you would also store this in a database

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Partner API error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
