import { Router } from "express";
import { sendContact } from "../useCases/sendContact";

export const contactRouter = Router()

contactRouter.post(
  "/", async (req, res, next) => {
    try {
        const result = await sendContact(req.body, next);
        res.status(200).json({success: true, message: result});
    } catch (error) {
        next(error);
    }
  })