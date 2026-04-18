import { NextResponse } from "next/server";
import crypto from "crypto";

const ACCESS_COOKIE = "lt_access";

function base64ToBase64Url(b64: string) {
  return b64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function base64UrlToBase64(s: string) {
  const pad = s.length % 4 === 0 ? "" : "=".repeat(4 - (s.length % 4));
  return s.replace(/-/g, "+").replace(/_/g, "/") + pad;
}

function b64url(input: string) {
  return base64ToBase64Url(Buffer.from(input, "utf8").toString("base64"));
}

function sign(secret: string, payloadB64u: string) {
  const sig = crypto.createHmac("sha256", secret).update(payloadB64u).digest("base64");
  return base64ToBase64Url(sig);
}

function verify(secret: string, token: string) {
  const [payloadB64u, sigB64u] = token.split(".");
  if (!payloadB64u || !sigB64u) return null;
  if (sign(secret, payloadB64u) !== sigB64u) return null;
  try {
    const payloadJson = Buffer.from(base64UrlToBase64(payloadB64u), "base64").toString("utf8");
    return JSON.parse(payloadJson) as { email?: string; exp?: number; purpose?: string };
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token") || "";
  const secret = process.env.ACCESS_LINK_SECRET || "";

  if (!secret) {
    return NextResponse.redirect(new URL("/mystery", url), { status: 302 });
  }

  const payload = verify(secret, token);
  const now = Math.floor(Date.now() / 1000);
  if (!payload || payload.purpose !== "access" || !payload.exp || payload.exp < now) {
    return NextResponse.redirect(new URL("/mystery", url), { status: 302 });
  }

  // Issue signed cookie token (30 days)
  const cookiePayload = { purpose: "cookie", exp: now + 60 * 60 * 24 * 30 };
  const cookiePayloadB64u = b64url(JSON.stringify(cookiePayload));
  const cookieToken = `${cookiePayloadB64u}.${sign(secret, cookiePayloadB64u)}`;

  const res = NextResponse.redirect(new URL("/", url), { status: 302 });
  res.cookies.set(ACCESS_COOKIE, cookieToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}

