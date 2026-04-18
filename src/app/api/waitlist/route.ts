import { NextResponse } from "next/server";
import { z } from "zod";
import crypto from "crypto";

const APPROVAL_DELAY_MINUTES = 30;

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

function base64ToBase64Url(b64: string) {
  return b64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function b64url(input: string) {
  return base64ToBase64Url(Buffer.from(input, "utf8").toString("base64"));
}

function sign(secret: string, payloadB64u: string) {
  const sig = crypto.createHmac("sha256", secret).update(payloadB64u).digest("base64");
  return base64ToBase64Url(sig);
}

function makeToken(secret: string, payload: object) {
  const payloadB64u = b64url(JSON.stringify(payload));
  return `${payloadB64u}.${sign(secret, payloadB64u)}`;
}

function getOrigin(request: Request) {
  const h = request.headers;
  const proto = h.get("x-forwarded-proto") || "https";
  const host = h.get("x-forwarded-host") || h.get("host") || "";
  return host ? `${proto}://${host}` : "";
}

async function brevoUpsertContact(email: string) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return false;

  const listIdRaw = process.env.BREVO_LIST_ID;
  const listId = listIdRaw ? Number(listIdRaw) : null;

  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        updateEnabled: true,
        ...(typeof listId === "number" && Number.isFinite(listId) ? { listIds: [listId] } : {}),
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

async function brevoScheduleApprovalEmail(
  to: string,
  link: string,
  scheduledAtIso: string
): Promise<{ ok: boolean; messageId?: string }> {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  if (!apiKey || !senderEmail) return { ok: false };

  const senderName = process.env.BREVO_SENDER_NAME || "Lovetamin";
  const subject = "You’re off the waitlist — your Lovetamin access is ready";
  const textContent =
    `You’re on the Lovetamin waitlist.\n\n` +
    `Your access is now ready. Use this private link to unlock the main site:\n${link}\n\n` +
    `If you didn’t request this, you can ignore this email.`;

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: [{ email: to }],
        subject,
        textContent,
        scheduledAt: scheduledAtIso,
      }),
    });
    const text = await res.text();
    let data: any = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = null;
    }

    if (!res.ok) return { ok: false };
    return { ok: true, messageId: data?.messageId };
  } catch {
    return { ok: false };
  }
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
    const secret = process.env.ACCESS_LINK_SECRET;
    if (!secret) {
      return NextResponse.json(
        { error: "Server not configured (missing ACCESS_LINK_SECRET)." },
        { status: 500 }
      );
    }

    const now = Math.floor(Date.now() / 1000);
    const token = makeToken(secret, {
      purpose: "access",
      email,
      iat: now,
      exp: now + 60 * 60 * 24 * 7, // 7 days
    });

    const origin = getOrigin(request);
    const link = `${origin}/access?token=${encodeURIComponent(token)}`;

    const canSchedule =
      Boolean(process.env.BREVO_API_KEY) && Boolean(process.env.BREVO_SENDER_EMAIL);

    // Always attempt to store the email in Brevo if configured.
    const contactSaved = process.env.BREVO_API_KEY ? await brevoUpsertContact(email) : false;

    const scheduledAtIso = new Date(
      Date.now() + APPROVAL_DELAY_MINUTES * 60 * 1000
    ).toISOString();

    const scheduled = canSchedule
      ? await brevoScheduleApprovalEmail(email, link, scheduledAtIso)
      : { ok: false as const };

    const res = NextResponse.json(
      {
        message: scheduled.ok
          ? `You're on the waitlist. We'll email you in about ${APPROVAL_DELAY_MINUTES} minutes when your access is ready.`
          : "You're on the waitlist, but email scheduling is currently unavailable. Please try again shortly.",
        emailScheduled: scheduled.ok,
        brevoMessageId: scheduled.ok ? scheduled.messageId || null : null,
        approvedInMinutes: APPROVAL_DELAY_MINUTES,
        scheduledAt: scheduledAtIso,
        contactSaved,
      },
      { status: 201 }
    );

    return res;
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
