import nodemailer, { SendMailOptions } from "nodemailer";
import { GMAIL_HOST, GMAIL_PASS, GMAIL_PORT, GMAIL_USER } from "./config.env";

if (!GMAIL_HOST || !GMAIL_USER || !GMAIL_PASS || !GMAIL_PORT) {
  throw new Error("Gmail configuration is not properly set in environment variables.");
  
}

export const EmailService: nodemailer.Transporter = nodemailer.createTransport({
  host: GMAIL_HOST,
  port: parseInt(GMAIL_PORT || "587", 10),
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
  secure: true,
});

export async function sendEmail(
  options: Omit<SendMailOptions, "from">,
): Promise<void> {
  try {
    await EmailService.sendMail({
      from: `"Portfolio Contact" <${GMAIL_USER}>`,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
      cc: options.cc || undefined,
      bcc: options.bcc || undefined,
      attachments: options.attachments,
    });
  } catch (error: Error | any) {
    throw new Error(`Failed to send email: ${error.message}`);
  }
}
