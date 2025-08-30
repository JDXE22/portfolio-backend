"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProjects = void 0;
const project_model_1 = require("@adapters/project.model");
const listProjects = async () => {
    const projects = (await project_model_1.ProjectModel.find().lean().exec());
    return projects.map((project) => ({
        id: String(project._id),
        title: project.title,
        description: project.description,
        techStack: project.techStack,
        reasoning: project.reasoning,
        difficultyLevel: project.difficultyLevel,
        liveStatus: project.liveStatus,
    }));
};
exports.listProjects = listProjects;
