import { NextFunction, Request, Response, Router } from "express";
import { createProject, listProjects } from "../useCases/project.services";

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

projectRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newProject = await createProject(req.body);
      res.status(201).json(newProject);
    } catch (error) {
      next(error);
    }
  }
);
