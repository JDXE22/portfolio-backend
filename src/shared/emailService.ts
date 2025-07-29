import nodemailer from "nodemailer";
import { GMAIL_HOST, GMAIL_PASS, GMAIL_PORT, GMAIL_USER } from "./config.env";
import { NextFunction } from "express";

export const EmailService: nodemailer.Transporter = nodemailer.createTransport({
  host: GMAIL_HOST,
  port: parseInt(GMAIL_PORT || "587", 10),
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
  secure: false,
});

export async function sendEmail(
  options: nodemailer.SendMailOptions,
  next: NextFunction
): Promise<void> {
  try {
    await EmailService.sendMail({
      from: `"Portfolio Contact" <${GMAIL_USER}>`,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
      cc: options.cc,
      bcc: options.bcc,
      attachments: options.attachments,
    });
  } catch (error) {
    next(error);
  }
}
