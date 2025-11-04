import { mutation } from "./_generated/server";
import nodemailer from "nodemailer";

/**
 * Send email via Nodemailer
 */
export const sendEmail = mutation(async (ctx, { to, subject, text, html }) => {
  // 🔐 Load your email credentials from environment variables
  const transporter = nodemailer.createTransport({
    service: "gmail", // or 'smtp.office365.com', 'SendGrid', etc.
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS, // your app password
    },
  });

  const mailOptions = {
    from: `"Audiophile Store" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.messageId);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("❌ Email failed:", error);
    return { success: false, error: error.message };
  }
});
