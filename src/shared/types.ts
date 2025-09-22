// Shared types and enums
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

// Error handling types

export type MulterCode =
  | "LIMIT_FILE_SIZE"
  | "LIMIT_FILE_COUNT"
  | "LIMIT_PART_COUNT"
  | "LIMIT_FIELD_KEY"
  | "LIMIT_FIELD_VALUE"
  | "LIMIT_FIELD_COUNT"
  | "LIMIT_UNEXPECTED_FILE";

export interface MulterErrorLike {
  code: MulterCode;
  field?: string;
  message?: string;
}

export interface DuplicateKeyErrorLike {
  name: "MongoServerError";
  code: 11000;
  message: string;
  keyValue?: Record<string, unknown>;
}

export interface NamedErrorLike {
  name: string;
  message: string;
}

export const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

export const hasString = (
  object: Record<string, unknown>,
  key: string
): object is Record<string, string> => typeof object[key] === "string";

export const isMulterError = (error: unknown): error is MulterErrorLike =>
  isObject(error) &&
  typeof error.code === "string" &&
  (error.code as string).startsWith("LIMIT_");

export const isNamedError = (error: unknown): error is NamedErrorLike =>
  isObject(error) && hasString(error, "name") && hasString(error, "message");

export const isDuplicateKey = (
  error: unknown
): error is DuplicateKeyErrorLike =>
  isObject(error) &&
  error["name"] === "MongoServerError" &&
  error["code"] === 11000 &&
  hasString(error as Record<string, unknown>, "message");
