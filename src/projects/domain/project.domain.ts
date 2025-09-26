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
