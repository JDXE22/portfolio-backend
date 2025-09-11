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

export interface IProject extends ProjectCore {}

export type CreateProjectDTO = Omit<ProjectCore, "id">;

type MutableProjectFields = Omit<ProjectCore, "reasoning" | "difficultyLevel">;

export type UpdateProjectDTO = Partial<MutableProjectFields>;
