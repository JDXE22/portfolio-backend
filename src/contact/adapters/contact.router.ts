import { Router } from "express";
import { sendContact } from "@/contact/useCases/sendContact";
import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB file size
    files: 3, // max 3 files
  },
});

export const contactRouter = Router();

contactRouter.post("/", upload.array("files", 3), async (req, res, next) => {
  try {
    const result = await sendContact(
      req.body,
      next,
      req.files as Express.Multer.File[]
    );
    res.status(200).json({ success: result });
  } catch (err) {
    next(err);
  }
});
