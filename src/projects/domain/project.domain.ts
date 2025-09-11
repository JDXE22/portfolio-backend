import { DifficultyLevel, LiveStatus } from "@/shared/types";

export interface ProjectCore {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imgUrl?: string;
  repoUrl?: string;
  liveUrl?: string;
  liveStatus: LiveStatus;
  difficultyLevel: DifficultyLevel;
  reasoning: string;
}

export interface IProject extends ProjectCore {
  id: string;
}

export type CreateProjectDTO = ProjectCore;

type MutableProjectFields = Omit<ProjectCore, "reasoning" | "difficultyLevel">;

export type UpdateProjectDTO = Partial<MutableProjectFields>;
