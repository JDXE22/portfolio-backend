import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import {
  isDuplicateKey,
  isMulterError,
  isNamedError,
  isObject,
  MulterCode,
  MulterErrorLike,
  NamedErrorLike,
} from "./types";

/* ---------- Maps / configuration ---------- */

const errorMap: Record<
  string,
  { status: number; message: (e: NamedErrorLike) => string }
> = {
  CastError: { status: 400, message: () => "malformatted id" },
  ValidationError: { status: 400, message: (err) => err.message },
  JsonWebTokenError: { status: 401, message: () => "invalid token" },
  NotFoundError: { status: 404, message: () => "resource not found" },
  ForbiddenError: { status: 403, message: () => "forbidden" },
  UnauthorizedError: { status: 401, message: () => "unauthorized" },
  MongoServerError: {
    status: 400,
    message: (err) => `MongoDB error: ${err.message}`,
  },
  ConflictError: {
    status: 409,
    message: (err) => `Conflict: ${err.message}`,
  },
  InternalServerError: {
    status: 500,
    message: () => "internal server error",
  },
  BadRequestError: {
    status: 400,
    message: (err) => `Bad request: ${err.message}`,
  },
  DuplicateKeyError: {
    status: 400,
    message: (err) => `Duplicate key error: ${err.message}`,
  },
};

const multerMap: Record<
  MulterCode,
  { status: number; message: (error: MulterErrorLike) => string }
> = {
  LIMIT_FILE_SIZE: { status: 400, message: () => "File too large" },
  LIMIT_FILE_COUNT: { status: 400, message: () => "Too many files" },
  LIMIT_PART_COUNT: { status: 400, message: () => "Too many multipart parts" },
  LIMIT_FIELD_KEY: { status: 400, message: () => "Field name too long" },
  LIMIT_FIELD_VALUE: { status: 400, message: () => "Field value too long" },
  LIMIT_FIELD_COUNT: { status: 400, message: () => "Too many non-file fields" },
  LIMIT_UNEXPECTED_FILE: {
    status: 400,
    message: (e) =>
      `Unexpected file field${e.field ? ` '${e.field}'` : ""}. Use 'files'.`,
  },
};

/* ---------- Fallback helpers ---------- */

const extractMessage = (error: unknown): string => {
  if (isNamedError(error)) return error.message;
  if (isObject(error) && typeof error["message"] === "string")
    return error["message"] as string;
  return "Internal server error";
};

/* ---------- Error handler middleware ---------- */

export const errorHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (isDuplicateKey(error)) {
    const duplicateKeyError = errorMap["DuplicateKeyError"];
    return res
      .status(duplicateKeyError.status)
      .json({ error: duplicateKeyError.message(error) });
  }

  if (isMulterError(error) && multerMap[error.code]) {
    const defaultMulter = multerMap[error.code];
    return res
      .status(defaultMulter.status)
      .json({ error: defaultMulter.message(error) });
  }

  if (isNamedError(error) && errorMap[error.name]) {
    const defaultError = errorMap[error.name];
    return res
      .status(defaultError.status)
      .json({ error: defaultError.message(error) });
  }

  return res.status(500).json({ error: extractMessage(error) });
};
