"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContact = sendContact;
const emailService_1 = require("@/shared/adapters/emailService");
const config_env_1 = require("@/shared/config.env");
async function sendContact(data, next, files) {
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
        await (0, emailService_1.sendEmailRouter)({
            to: config_env_1.GMAIL_USER,
            subject: `Portfolio Contact: ${subject}`,
            html,
            attachments: mailAttachments,
        });
        return true;
    }
    catch (error) {
        next(error);
        return false;
    }
}
