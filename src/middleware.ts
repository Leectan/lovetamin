import { NextResponse, type NextRequest } from "next/server";

const ACCESS_COOKIE = "lt_access";

function base64UrlToBase64(s: string) {
  const pad = s.length % 4 === 0 ? "" : "=".repeat(4 - (s.length % 4));
  return s.replace(/-/g, "+").replace(/_/g, "/") + pad;
}

function bytesToBase64(bytes: Uint8Array) {
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary);
}

function base64ToBase64Url(b64: string) {
  return b64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

async function hmacSha256Base64Url(secret: string, data: string) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return base64ToBase64Url(bytesToBase64(new Uint8Array(sig)));
}

async function isValidCookieToken(token: string | undefined) {
  if (!token) return false;
  const secret = process.env.ACCESS_LINK_SECRET;
  if (!secret) return false;

  const [payloadB64u, sigB64u] = token.split(".");
  if (!payloadB64u || !sigB64u) return false;

  const expected = await hmacSha256Base64Url(secret, payloadB64u);
  if (expected !== sigB64u) return false;

  try {
    const payloadJson = atob(base64UrlToBase64(payloadB64u));
    const payload = JSON.parse(payloadJson) as { exp?: number; purpose?: string };
    if (payload?.purpose !== "cookie") return false;
    if (!payload?.exp || Date.now() / 1000 > payload.exp) return false;
    return true;
  } catch {
    return false;
  }
}

export async function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;
  const forceMystery = searchParams.get("mystery") === "1";

  // Never gate Next.js internals / APIs / assets.
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/.well-known")
  ) {
    return NextResponse.next();
  }

  const hasAccess = await isValidCookieToken(req.cookies.get(ACCESS_COOKIE)?.value);

  // Root should show Mystery until approved.
  if (pathname === "/" && (!hasAccess || forceMystery)) {
    return NextResponse.rewrite(new URL("/mystery", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};

