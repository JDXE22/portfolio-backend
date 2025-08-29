import { NextFunction, Request, Response, Router } from "express";
import { listProjects } from "../useCases/project.services.ts";

export const projectRouter = Router();

projectRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projects = await listProjects();
      res.status(200).json(projects);
    } catch (error) {
      next(error);
    }
  }
);
