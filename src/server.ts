import express from "express";
import { projectRouter } from "./projects/Adapters/project.router";
export const server = express();
server.use(express.json());

server.use("/projects", projectRouter)

