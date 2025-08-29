import { Router } from "express";
import { listProjects } from "../UseCases/project.services";
export const projectRouter = Router();
projectRouter.get("/", async (req, res, next) => {
    try {
        const projects = await listProjects();
        res.status(200).json(projects);
    }
    catch (error) {
        next(error);
    }
});
