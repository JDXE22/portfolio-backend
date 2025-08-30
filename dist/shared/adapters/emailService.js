"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
exports.sendEmailRouter = sendEmailRouter;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_env_1 = require("@/shared/config.env");
if (!config_env_1.GMAIL_HOST || !config_env_1.GMAIL_USER || !config_env_1.GMAIL_PASS || !config_env_1.GMAIL_PORT) {
    throw new Error("Gmail configuration is not properly set in environment variables.");
}
exports.EmailService = nodemailer_1.default.createTransport({
    host: config_env_1.GMAIL_HOST,
    port: parseInt(config_env_1.GMAIL_PORT || "465", 10),
    auth: {
        user: config_env_1.GMAIL_USER,
        pass: config_env_1.GMAIL_PASS,
    },
    secure: true,
});
async function sendEmailRouter(options) {
    try {
        await exports.EmailService.sendMail({
            from: `"Portfolio Contact" <${config_env_1.GMAIL_USER}>`,
            to: options.to,
            subject: options.subject,
            text: options.text,
            html: options.html,
            cc: options.cc || undefined,
            bcc: options.bcc || undefined,
            attachments: options.attachments,
        });
    }
    catch (error) {
        throw new Error(`Failed to send email: ${error.message}`);
    }
}
