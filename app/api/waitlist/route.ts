import { type NextRequest, NextResponse } from "next/server";
import { sendWaitlistEmail } from "@/lib/email-service";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    if (!data.name || !data.email || !data.role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await sendWaitlistEmail(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
