import { NextResponse } from "next/server";

const AASA = {
  applinks: {
    apps: [],
    details: [
      {
        appID: "9K5YT24W69.com.lovetamin.app",
        paths: ["/invite", "/invite?*"],
      },
    ],
  },
};

export async function GET() {
  return NextResponse.json(AASA, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
