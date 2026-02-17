import { NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs";
import path from "path";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const WAITLIST_FILE = path.join(process.cwd(), "waitlist.json");

function readWaitlist(): { emails: { email: string; joinedAt: string; source: string }[] } {
  try {
    if (fs.existsSync(WAITLIST_FILE)) {
      const data = fs.readFileSync(WAITLIST_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch {
    // File doesn't exist or is corrupted, start fresh
  }
  return { emails: [] };
}

function writeWaitlist(data: { emails: { email: string; joinedAt: string; source: string }[] }) {
  fs.writeFileSync(WAITLIST_FILE, JSON.stringify(data, null, 2));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = emailSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const { email } = parsed.data;
    const source = body.source || "unknown";
    const waitlist = readWaitlist();

    // Check for duplicate
    if (waitlist.emails.some((entry) => entry.email === email)) {
      return NextResponse.json(
        { message: "You're already on the waitlist!", alreadyExists: true },
        { status: 200 }
      );
    }

    waitlist.emails.push({
      email,
      joinedAt: new Date().toISOString(),
      source,
    });

    writeWaitlist(waitlist);

    return NextResponse.json(
      {
        message: "Welcome to the waitlist! We'll be in touch soon.",
        position: waitlist.emails.length,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
