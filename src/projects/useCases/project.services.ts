import {
  CreateProjectDTO,
  DifficultyLevel,
  IProject,
  LiveStatus,
} from "@/shared/types";
import { ProjectModel } from "@/projects/adapters/project.model";

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
      imgUrl: project.imgUrl,
      repoUrl: project.repoUrl,
      liveUrl: project.liveUrl,
      role: project.role
    })
  );
};

// export const getProjectById = async (id: string): Promise<IProject | null> => {}

export const createProject = async (
  input: CreateProjectDTO
): Promise<IProject> => {
  const newProject = await ProjectModel.create(input);
  return newProject.toObject();
};
