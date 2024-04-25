import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const reqBody = await request.json();
  const secret_key = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;

  try {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${reqBody.token}`;

    const res = await axios.post(url);
    if (res.data.success) {
      return NextResponse.json({
        message: "Captcha verification success!!",
        success: true,
      })
    };

    return NextResponse.json({
      error: "Captcha verification failed!",
      success: false,
    }, { status: 500 });
  } catch (error) {
    return NextResponse.json({
      error: "Captcha verification failed!",
      success: false,
    }, { status: 500 });
  }
}