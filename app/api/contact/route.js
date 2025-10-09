import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY,
  },
  pool: true,
  maxConnections: 1,
  maxMessages: 3,
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 45000,
  debug: true,
  logger: true,
});

// HTML email template
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
        ${userMessage}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    </div>
  </div>
`;

async function sendEmail(payload, message) {
  const { name, email, message: userMessage } = payload;

  const mailOptions = {
    from: "Portfolio",
    to: process.env.EMAIL_ADDRESS,
    subject: `New Message From ${name} (Portfolio)`,
    text: message,
    html: generateEmailTemplate(name, email, userMessage),
    replyTo: email,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
    });
    return { success: false, error: error.message };
  }
}

export async function GET() {
  try {
    await transporter.verify();
    return NextResponse.json({
      success: true,
      message: "SMTP connection verified successfully",
      config: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        hasEmail: !!process.env.EMAIL_ADDRESS,
        hasPasskey: !!process.env.GMAIL_PASSKEY,
      },
    });
  } catch (error) {
    console.error("SMTP Verification Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "SMTP connection failed",
        error: error.message,
        code: error.code,
        config: {
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          hasEmail: !!process.env.EMAIL_ADDRESS,
          hasPasskey: !!process.env.GMAIL_PASSKEY,
        },
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;

    if (!name || !email || !userMessage) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields.",
        },
        { status: 400 }
      );
    }

    const message = `New message from ${name}\n\nEmail: ${email}\n\nMessage:\n\n${userMessage}\n\n`;

    const emailResult = await sendEmail(payload, message);

    if (emailResult.success) {
      return NextResponse.json(
        {
          success: true,
          message: "Message sent successfully!",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email. Please try again later.",
        error: emailResult.error,
        emailAddress: process.env.EMAIL_ADDRESS,
        doesPasskeyExist: !!process.env.GMAIL_PASSKEY,
      },
      { status: 500 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Server error occurred.",
      },
      { status: 500 }
    );
  }
}
