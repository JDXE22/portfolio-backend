import { DifficultyLevel, LiveStatus } from "../../shared/types.ts";
import { ProjectModel } from "../adapters/project.model.ts";
import { IProject } from "../domain/project.domain.ts";

type ProjectLean = Omit<IProject, "id"> & { _id: unknown; __v?: number };

export const listProjects = async (): Promise<IProject[]> => {
  const projects = (await ProjectModel.find().lean().exec()) as ProjectLean[];
  return projects.map(
    (project): IProject => ({
      id: String(project._id),
      title: project.title,
      description: project.description,
      techStack: project.techStack,
      reasoning: project.reasoning,
      difficultyLevel: project.difficultyLevel as DifficultyLevel,
      liveStatus: project.liveStatus as LiveStatus,
    })
  );
};
