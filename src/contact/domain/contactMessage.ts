export interface ContactMessage {
    name: string;
    email: string;
    subject: string;
    message: string;
    cc?: string;
    bcc?: string;
}