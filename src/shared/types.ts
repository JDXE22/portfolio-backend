export enum LiveStatus {
  LIVE = "Live",
  DOWN = "Down",
  MAINTENANCE = "Maintenance",
  DEVELOPMENT = "Development",
}

export enum DifficultyLevel {
  EASY = "Easy",
  MEDIUM = "Medium",
  HARD = "Hard",
}

export interface SocialLink {
  name: string;
  url?: string;
  username?: string;
  iconPublicId: string
}

export interface TechStack {
  name: string;
  iconPublicId: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
}
