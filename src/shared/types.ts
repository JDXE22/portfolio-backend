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
  name?: string;
  url?: string;
  username?: string;
  iconPublicId: string;
}

export interface TechStack extends SocialLink {
  iconPublicId: string;
}

export interface Education extends SocialLink {
  degree: string;
  institution: string;
  duration: string;
}

export const ICONS: Record<string, string> = {
  TypeScript: "typescript",
  JavaScript: "javascript",
  React: "react",
  NodeJS: "nodejs",
  Express: "express",
  MongoDB: "mongodb",
  PostgreSQL: "postgresql",
  Docker: "docker",
  SQL: "sql",
  AWS: "aws",
  NestJS: "nestjs",
  Stripe: "stripe",
  Nodemailer: "nodemailer",
  HTML5: "html5",
  CSS3: "css3",
  Tailwind: "tailwindcss",
  Swagger: "swagger",
};
