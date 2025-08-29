import express from "express";
import { projectRouter } from "./projects/Adapters/project.router";
import { errorHandler } from "./shared/error.handler";
import http from "http";
export const server = express();
export const httpServer = http.createServer(server);
server.use(express.json());
server.use("/projects", projectRouter);
server.use(errorHandler);
