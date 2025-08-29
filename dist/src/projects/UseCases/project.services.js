import { ProjectModel } from "../Adapters/project.model";
export const listProjects = async () => {
    const projects = await ProjectModel.find().lean().exec();
    return projects.map((project) => ({
        ...project,
        difficultyLevel: project.difficultyLevel,
        liveStatus: project.liveStatus,
    }));
};
