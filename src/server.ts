import express from "express";
import { projectRouter } from "@/projects/adapters/project.router";
import { errorHandler } from "@/shared/error.handler";
import { contactRouter } from "@/contact/adapters/contact.router";
import { aboutRouter } from "@/about/adapters/about.router";
import http from "http";

export const server = express();

export const httpServer = http.createServer(server);

server.use(express.json());

server.use("/projects", projectRouter);

server.use("/contact", contactRouter);

server.use("/about", aboutRouter);

server.use(errorHandler);
