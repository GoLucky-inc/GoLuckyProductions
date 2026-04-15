import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  const apiKey = process.env.LOOPS_API_KEY;
  if (!apiKey) {
    console.error("LOOPS_API_KEY is not set.");
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  const res = await fetch("https://app.loops.so/api/v1/contacts/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      email,
      source: "creeper-defense-waitlist",
      userGroup: "creeper-defense-waitlist",
    }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    // Loops returns 409 if contact already exists — treat as success
    if (res.status === 409) {
      return NextResponse.json({ ok: true });
    }
    console.error("Loops API error:", body);
    return NextResponse.json({ error: "Could not add you to the waitlist. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
