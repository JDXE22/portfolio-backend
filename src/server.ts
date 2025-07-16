import express from "express";
import { projectRouter } from "./projects/Adapters/project.router";
import { errorHandler } from "./shared/error.handler";
export const server = express();
server.use(express.json());

server.use(errorHandler)

server.use("/projects", projectRouter)

