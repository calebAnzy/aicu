// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
   try {
      const body = await request.json();
      const { firstName, lastName, email, phone, reasonForContact, message } = body;

      // Create a test account using Ethereal (for development)
      // In production, use your actual email service credentials
      const transporter = nodemailer.createTransport({
         secure: false,
         service: "gmail",
         auth: {
            user: "johnossai20@gmail.com",
            pass: "lelc vsup zygg kuqj",
         },
      });

      // Email content
      const mailOptions = {
         from: process.env.SMTP_FROM_EMAIL,
         to: "johnossai20@gmail.com", // Replace with your receiving email
         subject: `New Contact Form Submission - ${reasonForContact}`,
         html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Reason for Contact:</strong> ${reasonForContact}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
   } catch (error) {
      console.error("Failed to send email:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
   }
}
