// import axios from 'axios';
// import { NextResponse } from "next/server";

// export async function POST(request) {
//   const payload = await request.json();
//   const token = process.env.TELEGRAM_BOT_TOKEN;
//   const chat_id = process.env.TELEGRAM_CHAT_ID;

//   if (!token || !chat_id) {
//     return NextResponse.json({
//       success: false,
//     }, { status: 200 });
//   };

//   try {
//     const url = `https://api.telegram.org/bot${token}/sendMessage`;
//     const message = `New message from ${payload.name}\n\nEmail: ${payload.email}\n\nMessage:\n ${payload.message}\n\n`;

//     const res = await axios.post(url, {
//       text: message,
//       chat_id: process.env.TELEGRAM_CHAT_ID
//     });

//     if (res.data.ok) {
//       return NextResponse.json({
//         success: true,
//         message: "Message sent successfully!",
//       }, { status: 200 });
//     };
//   } catch (error) {
//     console.log(error.response.data)
//     return NextResponse.json({
//       message: "Message sending failed!",
//       success: false,
//     }, { status: 500 });
//   }
// };

const nodemailer = require('nodemailer');
import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  
  // Create a transporter object with SMTP details
  let transporter = nodemailer.createTransport({
    service: 'gmail', // You can use any other email provider
    auth: {
      user: "abhishektripathi1112@gmail.com"  , // Your email address
      pass: "juyl rrei nlhd cllv", // Your email password or app-specific password
    },
  });

  const mailOptions = {
    from: payload.email, // Sender address
    to: "abhishektripathi1112@gmail.com", // List of recipients (you can add multiple emails)
    subject: `New message from ${payload.name}`, // Subject line
    text: `Email: ${payload.email}\n\nMessage:\n${payload.message}`, // Plain text body
  };

  try {
    // Send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    if (info.accepted.length > 0) {
      return NextResponse.json({
        success: true,
        message: "Email sent successfully!",
      }, { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Email sending failed!",
      success: false,
    }, { status: 500 });
  }
}