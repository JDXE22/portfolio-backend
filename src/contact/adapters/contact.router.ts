import { NextFunction, Request, Response, Router } from 'express';
import { getContact } from '@/contact/useCases/sendContact';

export const contactRouter = Router();

contactRouter.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const contactInfo = await getContact();
      res.status(200).json(contactInfo);
    } catch (err) {
      next(err);
    }
  },
);
