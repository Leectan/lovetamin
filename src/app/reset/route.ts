import { NextResponse } from "next/server";

const ACCESS_COOKIE = "lt_access";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const res = NextResponse.redirect(new URL("/mystery", url), { status: 302 });
  res.cookies.set(ACCESS_COOKIE, "", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return res;
}

