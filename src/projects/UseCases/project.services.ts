import { DifficultyLevel, LiveStatus } from "../../shared/types";
import { ProjectModel } from "../adapters/project.model";
import { IProject } from "../domain/project.domain";

export const listProjects = async (): Promise<IProject[]> => {
  const projects = await ProjectModel.find().lean().exec();
  return projects.map((project) => ({
    ...project,
    difficultyLevel: project.difficultyLevel as DifficultyLevel,
    liveStatus: project.liveStatus as LiveStatus,
  }));
};
