import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  const body = await req.json();

  const arcaptcha_api = "https://api.arcaptcha.ir/arcaptcha/api/verify";

  try {
    const result = await axios.post(arcaptcha_api, {
      challenge_id: body["arcaptcha-token"], // token from frontend
      site_key: process.env.ARCAPTCHA_SITE_KEY,
      secret_key: process.env.ARCAPTCHA_SECRET_KEY,
    });

    if (!result.data.success) {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 400 }
      );
    }

    // Here you would handle sending the email or saving data
    return NextResponse.json({ message: "Captcha verified successfully!" });
  } catch (err) {
    return NextResponse.json(
      { error: "Server error verifying captcha" },
      { status: 500 }
    );
  }
}

