import { Router } from "express";
import { sendContact } from "../useCases/sendContact";
import multer from "multer";
import { ContactMessage } from "../domain/contactMessage";

const upload = multer();

export const contactRouter = Router()

contactRouter.post(
  "/", upload.array('attachments'),
async (req, res, next) => {
    try {
      const { name, email, message, subject} = req.body;
      const msg: ContactMessage = {
        name,
        email,
        message,
        subject,
        attachments: req.files as Express.Multer.File[]
      }
      await sendContact(msg, next);
      res.status(200).json({ message: "Contact message sent successfully." });
    } catch (error) {
        next(error);
    }
  })