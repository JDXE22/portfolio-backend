import nodemailer from 'nodemailer';

export const EmailService = {
    transporter: nodemailer.createTransport({})
}