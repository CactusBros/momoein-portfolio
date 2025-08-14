import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json({ siteKey: process.env.ARCAPTCHA_SITE_KEY });
}