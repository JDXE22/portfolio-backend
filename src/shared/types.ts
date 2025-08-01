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
}

export interface TechStack {
  name: string;
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
}
