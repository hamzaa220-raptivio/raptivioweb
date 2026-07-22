import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: unknown;
      company?: unknown;
    };
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (typeof body.company === "string" && body.company.trim()) {
      return NextResponse.json({
        message: "You are now part of Raptivio Intelligence.",
      });
    }

    if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = Number(process.env.BREVO_NEWSLETTER_LIST_ID);

    if (!apiKey || !Number.isInteger(listId) || listId <= 0) {
      console.error("Brevo newsletter environment variables are not configured.");
      return NextResponse.json(
        { message: "Email signup is being connected. Please try again shortly." },
        { status: 503 }
      );
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
        emailBlacklisted: false,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("Brevo newsletter request failed:", response.status, details);
      return NextResponse.json(
        { message: "We could not add your email right now. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      message: "You are now part of Raptivio Intelligence.",
    });
  } catch (error) {
    console.error("Newsletter signup failed:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
