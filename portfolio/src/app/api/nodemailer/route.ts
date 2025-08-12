import {infoform} from "@/types";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  const body = await req.json();
  const info: infoform = body;
  console.log(info);
  const transporter = nodemailer.createTransport({
    service: "Gmail", // You can use other services like 'Yahoo', 'Outlook', etc.
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const mailOptions = {
    from: "tobiastymkiw@gmail.com",
    to: "tobiastymkiw@gmail.com",
    subject: "New Portfolio Form Submission",
    text: `You have a new form submission from:

    Name: ${info.firstName}
    Email: ${info.email}
    Message: ${info.message}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ ok: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ ok: false, error: "Failed to send email" });
  }
}
