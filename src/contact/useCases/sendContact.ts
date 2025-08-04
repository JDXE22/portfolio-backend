import { sendEmailRouter } from "../../shared/adapters/emailService";
import { ContactMessage } from "../domain/contactMessage";
import { GMAIL_USER } from "../../shared/config.env";
import { NextFunction } from "express";

export async function sendContact(
  data: ContactMessage,
  next: NextFunction,
  files?: Express.Multer.File[],
): Promise<boolean> {
  
  const mailAttachments = files?.map((file) => ({
    filename: file.originalname,
    content: file.buffer,
    contentType: file.mimetype,
  })) || [];

  

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
    await sendEmailRouter({
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
