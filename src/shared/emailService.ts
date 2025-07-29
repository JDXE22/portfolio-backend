import nodemailer from 'nodemailer';
import { GMAIL_PASS, GMAIL_USER } from './config.env';

export const EmailService: nodemailer.Transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: GMAIL_USER,
            pass: GMAIL_PASS
        },
        secure: false,
    })
