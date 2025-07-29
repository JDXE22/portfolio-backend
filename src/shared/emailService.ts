import nodemailer from 'nodemailer';
import { GMAIL_HOST, GMAIL_PASS, GMAIL_PORT, GMAIL_USER } from './config.env';

export const EmailService: nodemailer.Transporter = nodemailer.createTransport({
        host: GMAIL_HOST,
        port: parseInt(GMAIL_PORT || '587', 10),
        auth: {
            user: GMAIL_USER,
            pass: GMAIL_PASS
        },
        secure: false,
    })
