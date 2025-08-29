import nodemailer from "nodemailer";
import { GMAIL_PASS, GMAIL_USER } from "./config.env";
export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
    },
    secure: false,
});
const mailOptions = {
    from: GMAIL_USER,
    to: 'davidesparzac59@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email sent from Node.js using Nodemailer.',
};
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    }
    console.log('Email sent:', info.response);
});
