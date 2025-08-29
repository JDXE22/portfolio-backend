import { NextFunction, Request, Response, Router } from "express";
import { getAbout } from "../useCases/getAbout.ts";

export const aboutRouter = Router();

aboutRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const aboutInfo = await getAbout();
      res.status(200).json(aboutInfo);
    } catch (error) {
      next(error);
    }
  }
);
