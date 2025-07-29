import { sendEmail } from "../../shared/emailService";
import { ContactMessage } from "../domain/contactMessage";
import { GMAIL_USER } from "../../shared/config.env";
import { NextFunction } from "express";

export async function sendContact(
  data: ContactMessage,
  next: NextFunction
): Promise<void> {
  const { name, email, subject, message, cc, bcc } = data;
  const html = `
        <h1>New contact from ${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>`;

  try {
    await sendEmail(
      {
        to: GMAIL_USER,
        subject: `Portafolio Contact: ${subject}`,
        html,
      },
      next
    );
  } catch (error) {
    next(error);
  }
}
