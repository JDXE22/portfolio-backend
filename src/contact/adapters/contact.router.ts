import { Router } from "express";
import { sendContact } from "../useCases/sendContact";
import multer from "multer";

const upload = multer();

export const contactRouter = Router();

contactRouter.post("/", upload.array("attachments"), async (req, res, next) => {
  try {
    const result = await sendContact(req.body,  next, req.files as Express.Multer.File[]);
    res.status(200).json({ success: result });
  } catch (err) {
    next(err);
  }
});
