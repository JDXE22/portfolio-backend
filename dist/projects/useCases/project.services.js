"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = exports.listProjects = void 0;
const project_model_1 = require("../../projects/adapters/project.model");
const listProjects = async () => {
    const projects = (await project_model_1.ProjectModel.find().lean().exec());
    return projects.map((project) => ({
        id: String(project._id),
        title: project.title,
        slug: project.slug,
        description: project.description,
        techStack: project.techStack,
        reasoning: project.reasoning,
        difficultyLevel: project.difficultyLevel,
        liveStatus: project.liveStatus,
        imgUrl: project.imgUrl,
        repoUrl: project.repoUrl,
        liveUrl: project.liveUrl,
        role: project.role,
    }));
};
exports.listProjects = listProjects;
// export const getProjectById = async (id: string): Promise<IProject | null> => {}
const createProject = async (input) => {
    const newProject = await project_model_1.ProjectModel.create(input);
    return newProject.toObject();
};
exports.createProject = createProject;
