"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRouter = void 0;
const express_1 = require("express");
const project_services_1 = require("../useCases/project.services");
exports.projectRouter = (0, express_1.Router)();
exports.projectRouter.get("/", async (req, res, next) => {
    try {
        const projects = await (0, project_services_1.listProjects)();
        res.status(200).json(projects);
    }
    catch (error) {
        next(error);
    }
});
