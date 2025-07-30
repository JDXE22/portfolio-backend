import { sendEmailRouter } from "../../shared/emailService";
import { ContactMessage } from "../domain/contactMessage";
import { GMAIL_USER } from "../../shared/config.env";
import { NextFunction } from "express";


export async function sendContact(
  data: ContactMessage,
  next: NextFunction
): Promise<boolean> {
  const mailAttachments =data.attachments?.map((attachment) => ({
    filename: attachment.originalname,
    content: attachment.buffer,
    contentType: attachment.mimetype,
  }))

  const { name, email, subject, message, cc, bcc } = data;
  const html = `
        <h1>New contact from ${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        ${cc ? `<p><strong>CC:</strong> ${cc}</p>` : ""}
        ${bcc ? `<p><strong>BCC:</strong> ${bcc}</p>` : ""}
    `;

  try {
    await sendEmailRouter(
      {
        to: GMAIL_USER,
        subject: `Portfolio Contact: ${subject}`,
        html,
        attachments: mailAttachments,
      });
    return true;
  } catch (error) {
    next(error);
    return false;
  }
}
