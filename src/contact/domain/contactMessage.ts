import { Buffer } from "node:buffer";

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  cc?: string;
  bcc?: string;
  attachments?: Array<{
    originalname: string;
    buffer: Buffer;
    mimetype: string;
  }>;
}
